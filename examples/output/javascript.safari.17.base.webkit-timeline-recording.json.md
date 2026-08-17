# CPU profile

Took 101.6ms over 89 samples (1.1ms per sample).

| Category         |     % |   Time | Samples |
| ---------------- | ----: | -----: | ------: |
| Standard library | 46.9% | 47.6ms |      35 |
| Ours             | 34.4% | 35.0ms |      35 |
| Native           | 18.7% | 19.0ms |      19 |

Paths starting with `./` or `../` are relative to `https://en.wikipedia.org/`.

## Call tree

Call paths to the hottest functions.

```
├── 27.0ms (26.6%) (anonymous)  ./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:558
│   ├── 13.0ms (12.8%) doPropagation  (self 1.0%)  :5:254
│   │   └── 12.0ms (11.8%) execute  :10:868
│   │       └── 12.0ms (11.8%) runScript  :11:59
│   │           └── 12.0ms (11.8%) 9 more branches, largest (anonymous) (3.0%)  ./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:1:57 and index.js (2.0%)
│   ├── 12.0ms (11.8%) [[via 3 frames]] eval  (self 9.8%)
│   │   ├── 1.0ms (1.0%) [[via 2 frames]] (anonymous)  ./w/load.php?lang=en&modules=ext.quicksurveys.lib&skin=vector-2022&version=kdhjm:1:24
│   │   └── 1.0ms (1.0%) [[via 2 frames]] (anonymous)  ./w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:1:24
│   └── 2.0ms (2.0%) 2 more branches, largest (anonymous) (1.0%)  ./w/load.php?lang=en&modules=ext.wikimediaEvents&skin=vector-2022&version=lu7fs:30:633 and doMaintenance (1.0%)
├── 24.6ms (24.2%) unformattedArticleTextContentIncludingMetadata  __InjectedScript_ReaderArticleFinder.js:13:67861
│   ├── 10.4ms (10.2%) adoptableMetadataBlock  :13:48923
│   │   └── 10.4ms (10.2%) updateArticleBylineAndDateElementsIfNecessary  (self 5.1%)  :13:53699
│   │       └── 5.2ms (5.1%) [[via 3 frames]] trimmedInnerTextIgnoringTextTransform  __InjectedScript_ReaderArticleFinder.js:12:6561
│   ├── 8.2ms (8.1%) articleTitle  :13:39565
│   │   └── 8.2ms (8.1%) articleTitleInformation  :13:39662
│   │       ├── 5.2ms (5.1%) [[via 2 frames]] levenshteinDistance  __InjectedScript_ReaderArticleFinder.js:12:6770
│   │       └── 3.0ms (3.0%) 3 more branches, largest bound  (1.0%) and extraArticleNode (1.0%)
│   └── 6.0ms (5.9%) 1 more branch, articleNode  :13:8074
├── 16.0ms (15.7%) flushCssBuffer  ./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:4:217
│   ├── 13.0ms (12.8%) (anonymous)  :12:421
│   │   └── 13.0ms (12.8%) runScript  :11:59
│   │       ├── 7.0ms (6.9%) resources/skins.vector.js/skin.js  ./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:1:155
│   │       │   ├── 6.0ms (5.9%) main  :1:965
│   │       │   │   ├── 5.0ms (4.9%) main  :7:660
│   │       │   │   │   └── 5.0ms (4.9%) setupTableOfContents  :6:197
│   │       │   │   │       ├── 4.0ms (3.9%) getHeadingScrollOffset  :5:840
│   │       │   │   │       │   └── 4.0ms (3.9%) getPropertyValue
│   │       │   │   │       └── 1.0ms (1.0%) setInitialActiveSection  :7:167
│   │       │   │   └── 1.0ms (1.0%) [[via 8 frames]] remove
│   │       │   └── 1.0ms (1.0%) [[via 4 frames]] (anonymous)  ./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:46:782
│   │       └── 6.0ms (5.9%) 6 more branches, largest (anonymous) (1.0%)  ./w/load.php?lang=en&modules=ext.cite.ux-enhancements&skin=vector-2022&version=1cpqh:1:75 and (anonymous) (1.0%)
│   └── 3.0ms (3.0%) [[via 2 frames]] insertBefore  (3.9% self in 2 call stacks)
├── 13.0ms (12.8%) (anonymous)  ./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:45:636
│   └── 13.0ms (12.8%) mightThrow  :44:918
│       └── 13.0ms (12.8%) 8 more branches, largest (anonymous) (3.9%)  ./w/load.php?lang=en&modules=mediawiki.page.ready&skin=vector-2022&version=1et5k:1:977 and (anonymous) (3.0%)
├── 4.0ms (3.9%) isReaderModeAvailable  __InjectedScript_ReaderArticleFinder.js:13:1893
│   └── 4.0ms (3.9%) findArticleByVisualExamination  :13:63913
│       ├── 1.0ms (1.0%) [[via 6 frames]] cachedElementBoundingRect  (2.0% self in 2 call stacks)  __InjectedScript_ReaderArticleFinder.js:12:5336
│       └── 3.0ms (3.0%) 3 more branches, largest Set (1.0%) and CandidateElement (1.0%)
└── 17.0ms (16.7%) 5 more branches, largest formsAndMetadata (8.9%)  FormMetadata.js:3:82286 and (program) (4.9%)
```

## Hottest functions

### Self time

Functions with the most time spent within the function body, excluding callees.

|    % |   Time | Samples | Function                                        | Location                                                                                |
| ---: | -----: | ------: | ----------------------------------------------- | --------------------------------------------------------------------------------------- |
| 9.8% | 10.0ms |      10 | `eval`                                          | `<unknown>`                                                                             |
| 5.1% |  5.2ms |       1 | `levenshteinDistance`                           | `__InjectedScript_ReaderArticleFinder.js:12:6770`                                       |
| 5.1% |  5.2ms |       1 | `updateArticleBylineAndDateElementsIfNecessary` | `__InjectedScript_ReaderArticleFinder.js:13:53699`                                      |
| 5.1% |  5.2ms |       1 | `trimmedInnerTextIgnoringTextTransform`         | `__InjectedScript_ReaderArticleFinder.js:12:6561`                                       |
| 3.9% |  4.0ms |       4 | `insertBefore`                                  | `<unknown>`                                                                             |
| 3.9% |  4.0ms |       4 | `getPropertyValue`                              | `<unknown>`                                                                             |
| 3.0% |  3.0ms |       3 | `stringsMatchAnyRegularExpressions`             | `FormMetadata.js:3:8216`                                                                |
| 2.0% |  2.0ms |       2 | `cachedElementBoundingRect`                     | `__InjectedScript_ReaderArticleFinder.js:12:5336`                                       |
| 2.0% |  2.0ms |       2 | `evaluate`                                      | `<unknown>`                                                                             |
| 1.0% |  1.0ms |       1 | `(anonymous)`                                   | `./wiki/Profiling_(computer_programming):6:19`                                          |
| 1.0% |  1.0ms |       1 | `(anonymous)`                                   | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:812`       |
| 1.0% |  1.0ms |       1 | `resolveIndex`                                  | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:352`       |
| 1.0% |  1.0ms |       1 | `load`                                          | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:20:748`       |
| 1.0% |  1.0ms |       1 | `parse`                                         | `<unknown>`                                                                             |
| 1.0% |  1.0ms |       1 | `splitModuleKey`                                | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:720`       |
| 1.0% |  1.0ms |       1 | `(anonymous)`                                   | `./w/load.php?lang=en&modules=ext.quicksurveys.lib&skin=vector-2022&version=kdhjm:1:24` |
| 1.0% |  1.0ms |       1 | `(anonymous)`                                   | `./w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:1:24`      |
| 1.0% |  1.0ms |       1 | `(anonymous)`                                   | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:1:420`              |
| 1.0% |  1.0ms |       1 | `doPropagation`                                 | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254`        |
| 1.0% |  1.0ms |       1 | `add`                                           | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:42:286`             |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|    % |   Time | Samples | Function                                                       | Location                                           |
| ---: | -----: | ------: | -------------------------------------------------------------- | -------------------------------------------------- |
| 9.8% | 10.0ms |      10 | `eval`                                                         | `<unknown>`                                        |
| 5.1% |  5.2ms |       1 | `levenshteinDistance`                                          | `__InjectedScript_ReaderArticleFinder.js:12:6770`  |
| 5.1% |  5.2ms |       1 | `updateArticleBylineAndDateElementsIfNecessary`                | `__InjectedScript_ReaderArticleFinder.js:13:53699` |
| 5.1% |  5.2ms |       1 | `trimmedInnerTextIgnoringTextTransform`                        | `__InjectedScript_ReaderArticleFinder.js:12:6561`  |
| 3.0% |  3.0ms |       3 | `stringsMatchAnyRegularExpressions`                            | `FormMetadata.js:3:8216`                           |
| 2.0% |  2.0ms |       2 | `cachedElementBoundingRect`                                    | `__InjectedScript_ReaderArticleFinder.js:12:5336`  |
| 1.0% |  1.0ms |       1 | `parse`                                                        | `<unknown>`                                        |
| 1.0% |  1.0ms |       1 | `forEach`                                                      | `<unknown>`                                        |
| 1.0% |  1.0ms |       1 | `exec`                                                         | `<unknown>`                                        |
| 1.0% |  1.0ms |       1 | `(anonymous)`                                                  | `FormMetadata.js:3:16812`                          |
| 1.0% |  1.0ms |       1 | `_createLogicalFormsForControls`                               | `FormMetadata.js:3:23832`                          |
| 1.0% |  1.0ms |       1 | `(anonymous)`                                                  | `FormMetadata.js:3:11837`                          |
| 1.0% |  1.0ms |       1 | `_findHiddenUsernameElement`                                   | `FormMetadata.js:3:75498`                          |
| 1.0% |  1.0ms |       1 | `_looksLikeOneTimeCodeField`                                   | `FormMetadata.js:3:42732`                          |
| 1.0% |  1.0ms |       1 | `_stringsToEvaluateToDetermineIfElementIsFollowedByAffordance` | `FormMetadata.js:3:21490`                          |
| 1.0% |  1.0ms |       1 | `Set`                                                          | `<unknown>`                                        |
| 1.0% |  1.0ms |       1 | `usableTextNodesInElement`                                     | `__InjectedScript_ReaderArticleFinder.js:12:29085` |
| 1.0% |  1.0ms |       1 | `fontSizeFromComputedStyle`                                    | `__InjectedScript_ReaderArticleFinder.js:12:2819`  |
| 1.0% |  1.0ms |       1 | `elementIsHidingContentDueToContentVisibilityAuto`             | `__InjectedScript_ReaderArticleFinder.js:12:5112`  |
| 1.0% |  1.0ms |       1 | `normalizedElementTagName`                                     | `__InjectedScript_ReaderArticleFinder.js:12:19601` |

##### Ours

|    % |  Time | Samples | Function         | Location                                                                                               |
| ---: | ----: | ------: | ---------------- | ------------------------------------------------------------------------------------------------------ |
| 1.0% | 1.0ms |       1 | `(anonymous)`    | `./wiki/Profiling_(computer_programming):6:19`                                                         |
| 1.0% | 1.0ms |       1 | `(anonymous)`    | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:812`                      |
| 1.0% | 1.0ms |       1 | `resolveIndex`   | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:352`                      |
| 1.0% | 1.0ms |       1 | `load`           | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:20:748`                      |
| 1.0% | 1.0ms |       1 | `splitModuleKey` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:720`                      |
| 1.0% | 1.0ms |       1 | `(anonymous)`    | `./w/load.php?lang=en&modules=ext.quicksurveys.lib&skin=vector-2022&version=kdhjm:1:24`                |
| 1.0% | 1.0ms |       1 | `(anonymous)`    | `./w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:1:24`                     |
| 1.0% | 1.0ms |       1 | `(anonymous)`    | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:1:420`                             |
| 1.0% | 1.0ms |       1 | `doPropagation`  | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254`                       |
| 1.0% | 1.0ms |       1 | `add`            | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:42:286`                            |
| 1.0% | 1.0ms |       1 | `jar.js`         | `./w/load.php?lang=en&modules=mediawiki.cookie&skin=vector-2022&version=spq95:3:20`                    |
| 1.0% | 1.0ms |       1 | `(anonymous)`    | `./w/load.php?lang=en&modules=ext.visualEditor.core.utils.parsing&skin=vector-2022&version=962r8:1:86` |
| 1.0% | 1.0ms |       1 | `(anonymous)`    | `./w/load.php?lang=en&modules=jquery.uls.data&skin=vector-2022&version=1ey9x:1:627`                    |
| 1.0% | 1.0ms |       1 | `Title.js`       | `./w/load.php?lang=en&modules=mediawiki.Title&skin=vector-2022&version=1fg2m:1:105`                    |
| 1.0% | 1.0ms |       1 | `eventSender.js` | `./w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:10:28`                    |
| 1.0% | 1.0ms |       1 | `get`            | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:1:721`                       |
| 1.0% | 1.0ms |       1 | `buildEvent`     | `./w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:16:842`                   |
| 1.0% | 1.0ms |       1 | `isInSample`     | `./w/load.php?lang=en&modules=ext.wikimediaEvents&skin=vector-2022&version=lu7fs:28:619`               |
| 1.0% | 1.0ms |       1 | `(anonymous)`    | `./w/load.php?lang=en&modules=ext.cite.ux-enhancements&skin=vector-2022&version=1cpqh:4:23`            |
| 1.0% | 1.0ms |       1 | `buildFragment`  | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:59:231`                            |

##### Native

|    % |  Time | Samples | Function                            | Location    |
| ---: | ----: | ------: | ----------------------------------- | ----------- |
| 3.9% | 4.0ms |       4 | `insertBefore`                      | `<unknown>` |
| 3.9% | 4.0ms |       4 | `getPropertyValue`                  | `<unknown>` |
| 2.0% | 2.0ms |       2 | `evaluate`                          | `<unknown>` |
| 1.0% | 1.0ms |       1 | `createHTMLDocument`                | `<unknown>` |
| 1.0% | 1.0ms |       1 | `remove`                            | `<unknown>` |
| 1.0% | 1.0ms |       1 | `setAttribute`                      | `<unknown>` |
| 1.0% | 1.0ms |       1 | `bound setupEventHandlers`          | `<unknown>` |
| 1.0% | 1.0ms |       1 | `addEventListener`                  | `<unknown>` |
| 1.0% | 1.0ms |       1 | `collectMatchingElementsInFlatTree` | `<unknown>` |
| 1.0% | 1.0ms |       1 | `nodeAtPoint`                       | `<unknown>` |
| 1.0% | 1.0ms |       1 | `setTimeout`                        | `<unknown>` |
| 1.0% | 1.0ms |       1 | `bound `                            | `<unknown>` |

#### Lines

Lines with the largest contribution to each function's self time.

##### `levenshteinDistance` (`__InjectedScript_ReaderArticleFinder.js:12:6770`)

|      % |  Time | Samples | Location                                     |
| -----: | ----: | ------: | -------------------------------------------- |
| 100.0% | 5.2ms |       1 | `__InjectedScript_ReaderArticleFinder.js:12` |

##### `trimmedInnerTextIgnoringTextTransform` (`__InjectedScript_ReaderArticleFinder.js:12:6561`)

|      % |  Time | Samples | Location                                     |
| -----: | ----: | ------: | -------------------------------------------- |
| 100.0% | 5.2ms |       1 | `__InjectedScript_ReaderArticleFinder.js:12` |

##### `stringsMatchAnyRegularExpressions` (`FormMetadata.js:3:8216`)

|      % |  Time | Samples | Location            |
| -----: | ----: | ------: | ------------------- |
| 100.0% | 3.0ms |       3 | `FormMetadata.js:3` |

##### `cachedElementBoundingRect` (`__InjectedScript_ReaderArticleFinder.js:12:5336`)

|      % |  Time | Samples | Location                                     |
| -----: | ----: | ------: | -------------------------------------------- |
| 100.0% | 2.0ms |       2 | `__InjectedScript_ReaderArticleFinder.js:12` |

##### `resolveIndex` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:352`)

|      % |  Time | Samples | Location                                                                      |
| -----: | ----: | ------: | ----------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17` |

##### `load` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:20:748`)

|      % |  Time | Samples | Location                                                                      |
| -----: | ----: | ------: | ----------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:20` |

##### `doPropagation` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254`)

|      % |  Time | Samples | Location                                                                     |
| -----: | ----: | ------: | ---------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5` |

##### `forEach` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.0ms |       1 | 1        |

##### `(anonymous)` (`FormMetadata.js:3:16812`)

|      % |  Time | Samples | Location            |
| -----: | ----: | ------: | ------------------- |
| 100.0% | 1.0ms |       1 | `FormMetadata.js:3` |

##### `(anonymous)` (`FormMetadata.js:3:11837`)

|      % |  Time | Samples | Location            |
| -----: | ----: | ------: | ------------------- |
| 100.0% | 1.0ms |       1 | `FormMetadata.js:3` |

##### `_stringsToEvaluateToDetermineIfElementIsFollowedByAffordance` (`FormMetadata.js:3:21490`)

|      % |  Time | Samples | Location            |
| -----: | ----: | ------: | ------------------- |
| 100.0% | 1.0ms |       1 | `FormMetadata.js:3` |

##### `elementIsHidingContentDueToContentVisibilityAuto` (`__InjectedScript_ReaderArticleFinder.js:12:5112`)

|      % |  Time | Samples | Location                                     |
| -----: | ----: | ------: | -------------------------------------------- |
| 100.0% | 1.0ms |       1 | `__InjectedScript_ReaderArticleFinder.js:12` |

##### `normalizedElementTagName` (`__InjectedScript_ReaderArticleFinder.js:12:19601`)

|      % |  Time | Samples | Location                                     |
| -----: | ----: | ------: | -------------------------------------------- |
| 100.0% | 1.0ms |       1 | `__InjectedScript_ReaderArticleFinder.js:12` |

##### `get` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:1:721`)

|      % |  Time | Samples | Location                                                                     |
| -----: | ----: | ------: | ---------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:1` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `eval` (`<unknown>`)

|      % |   Time | Samples | Caller         | Location                                                                          |
| -----: | -----: | ------: | -------------- | --------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |      10 | `indirectEval` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:216` |

##### `levenshteinDistance` (`__InjectedScript_ReaderArticleFinder.js:12:6770`)

|      % |  Time | Samples | Caller             | Location                                          |
| -----: | ----: | ------: | ------------------ | ------------------------------------------------- |
| 100.0% | 5.2ms |       1 | `stringSimilarity` | `__InjectedScript_ReaderArticleFinder.js:12:7091` |

##### `updateArticleBylineAndDateElementsIfNecessary` (`__InjectedScript_ReaderArticleFinder.js:13:53699`)

|      % |  Time | Samples | Caller                   | Location                                           |
| -----: | ----: | ------: | ------------------------ | -------------------------------------------------- |
| 100.0% | 5.2ms |       1 | `adoptableMetadataBlock` | `__InjectedScript_ReaderArticleFinder.js:13:48923` |

##### `trimmedInnerTextIgnoringTextTransform` (`__InjectedScript_ReaderArticleFinder.js:12:6561`)

|      % |  Time | Samples | Caller                                     | Location                                           |
| -----: | ----: | ------: | ------------------------------------------ | -------------------------------------------------- |
| 100.0% | 5.2ms |       1 | `findArticleBylineElementWithoutRejection` | `__InjectedScript_ReaderArticleFinder.js:13:50372` |

##### `insertBefore` (`<unknown>`)

|     % |  Time | Samples | Caller        | Location                                                                         |
| ----: | ----: | ------: | ------------- | -------------------------------------------------------------------------------- |
| 75.0% | 3.0ms |       3 | `addToHead`   | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:3:909` |
| 25.0% | 1.0ms |       1 | `(anonymous)` | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:77:868`      |

##### `getPropertyValue` (`<unknown>`)

|      % |  Time | Samples | Caller                   | Location                                                                            |
| -----: | ----: | ------: | ------------------------ | ----------------------------------------------------------------------------------- |
| 100.0% | 4.0ms |       4 | `getHeadingScrollOffset` | `./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:5:840` |

##### `stringsMatchAnyRegularExpressions` (`FormMetadata.js:3:8216`)

|      % |  Time | Samples | Caller                                                | Location                  |
| -----: | ----: | ------: | ----------------------------------------------------- | ------------------------- |
| 100.0% | 3.0ms |       3 | `_isElementFollowedByForgotUserNameOrEmailAffordance` | `FormMetadata.js:3:19474` |

##### `cachedElementBoundingRect` (`__InjectedScript_ReaderArticleFinder.js:12:5336`)

|     % |  Time | Samples | Caller             | Location                                           |
| ----: | ----: | ------: | ------------------ | -------------------------------------------------- |
| 50.0% | 1.0ms |       1 | `isElementVisible` | `__InjectedScript_ReaderArticleFinder.js:12:4048`  |
| 50.0% | 1.0ms |       1 | `(anonymous)`      | `__InjectedScript_ReaderArticleFinder.js:12:25480` |

##### `evaluate` (`<unknown>`)

|     % |  Time | Samples | Caller                               | Location                                           |
| ----: | ----: | ------: | ------------------------------------ | -------------------------------------------------- |
| 50.0% | 1.0ms |       1 | `shouldDisqualifyDueToHeaderDensity` | `__InjectedScript_ReaderArticleFinder.js:12:30932` |
| 50.0% | 1.0ms |       1 | `contentTextStyleForNode`            | `__InjectedScript_ReaderArticleFinder.js:12:2923`  |

##### `(anonymous)` (`./wiki/Profiling_(computer_programming):6:19`)

|      % |  Time | Samples | Caller      | Location                                       |
| -----: | ----: | ------: | ----------- | ---------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(program)` | `./wiki/Profiling_(computer_programming):6:10` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:812`)

|      % |  Time | Samples | Caller      | Location                                                                       |
| -----: | ----: | ------: | ----------- | ------------------------------------------------------------------------------ |
| 100.0% | 1.0ms |       1 | `(program)` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:1:1` |

##### `resolveIndex` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:352`)

|      % |  Time | Samples | Caller     | Location                                                                          |
| -----: | ----: | ------: | ---------- | --------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `register` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:249` |

##### `load` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:20:748`)

|      % |  Time | Samples | Caller | Location                                                                          |
| -----: | ----: | ------: | ------ | --------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `init` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:20:645` |

##### `parse` (`<unknown>`)

|      % |  Time | Samples | Caller | Location                                                                          |
| -----: | ----: | ------: | ------ | --------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `load` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:20:748` |

##### `splitModuleKey` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:720`)

|      % |  Time | Samples | Caller | Location                                                                          |
| -----: | ----: | ------: | ------ | --------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `impl` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:18:205` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=ext.quicksurveys.lib&skin=vector-2022&version=kdhjm:1:24`)

|      % |  Time | Samples | Caller | Location                                                                          |
| -----: | ----: | ------: | ------ | --------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `impl` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:18:205` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:1:24`)

|      % |  Time | Samples | Caller | Location                                                                          |
| -----: | ----: | ------: | ------ | --------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `impl` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:18:205` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:1:420`)

|      % |  Time | Samples | Caller        | Location                                                                  |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:1:92` |

##### `doPropagation` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254`)

|      % |  Time | Samples | Caller        | Location                                                                          |
| -----: | ----: | ------: | ------------- | --------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:558` |

##### `add` (`./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:42:286`)

|      % |  Time | Samples | Caller        | Location                                                                    |
| -----: | ----: | ------: | ------------- | --------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:46:515` |

##### `forEach` (`<unknown>`)

|      % |  Time | Samples | Caller    | Location                                                                          |
| -----: | ----: | ------: | --------- | --------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `enqueue` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:255` |

##### `exec` (`<unknown>`)

|      % |  Time | Samples | Caller     | Location                                                                    |
| -----: | ----: | ------: | ---------- | --------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `tokenize` | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:27:121` |

##### `(anonymous)` (`FormMetadata.js:3:16812`)

|      % |  Time | Samples | Caller   | Location    |
| -----: | ----: | ------: | -------- | ----------- |
| 100.0% | 1.0ms |       1 | `reduce` | `<unknown>` |

##### `_createLogicalFormsForControls` (`FormMetadata.js:3:23832`)

|      % |  Time | Samples | Caller                | Location                  |
| -----: | ----: | ------: | --------------------- | ------------------------- |
| 100.0% | 1.0ms |       1 | `_logicalFormsInPage` | `FormMetadata.js:3:27143` |

##### `(anonymous)` (`FormMetadata.js:3:11837`)

|      % |  Time | Samples | Caller        | Location                  |
| -----: | ----: | ------: | ------------- | ------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `FormMetadata.js:3:14331` |

##### `_findHiddenUsernameElement` (`FormMetadata.js:3:75498`)

|      % |  Time | Samples | Caller                 | Location                  |
| -----: | ----: | ------: | ---------------------- | ------------------------- |
| 100.0% | 1.0ms |       1 | `_collectFormMetadata` | `FormMetadata.js:3:62833` |

##### `_looksLikeOneTimeCodeField` (`FormMetadata.js:3:42732`)

|      % |  Time | Samples | Caller                    | Location                  |
| -----: | ----: | ------: | ------------------------- | ------------------------- |
| 100.0% | 1.0ms |       1 | `_collectControlMetadata` | `FormMetadata.js:3:46804` |

##### `_stringsToEvaluateToDetermineIfElementIsFollowedByAffordance` (`FormMetadata.js:3:21490`)

|      % |  Time | Samples | Caller                                                | Location                  |
| -----: | ----: | ------: | ----------------------------------------------------- | ------------------------- |
| 100.0% | 1.0ms |       1 | `_isElementFollowedByForgotUserNameOrEmailAffordance` | `FormMetadata.js:3:19474` |

##### `Set` (`<unknown>`)

|      % |  Time | Samples | Caller                           | Location                                           |
| -----: | ----: | ------: | -------------------------------- | -------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `findArticleByVisualExamination` | `__InjectedScript_ReaderArticleFinder.js:13:63913` |

##### `usableTextNodesInElement` (`__InjectedScript_ReaderArticleFinder.js:12:29085`)

|      % |  Time | Samples | Caller             | Location                                           |
| -----: | ----: | ------: | ------------------ | -------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `CandidateElement` | `__InjectedScript_ReaderArticleFinder.js:12:25119` |

##### `fontSizeFromComputedStyle` (`__InjectedScript_ReaderArticleFinder.js:12:2819`)

|      % |  Time | Samples | Caller        | Location                                           |
| -----: | ----: | ------: | ------------- | -------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `__InjectedScript_ReaderArticleFinder.js:12:26535` |

##### `elementIsHidingContentDueToContentVisibilityAuto` (`__InjectedScript_ReaderArticleFinder.js:12:5112`)

|      % |  Time | Samples | Caller                      | Location                                          |
| -----: | ----: | ------: | --------------------------- | ------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `cachedElementBoundingRect` | `__InjectedScript_ReaderArticleFinder.js:12:5336` |

##### `normalizedElementTagName` (`__InjectedScript_ReaderArticleFinder.js:12:19601`)

|      % |  Time | Samples | Caller                  | Location                                           |
| -----: | ----: | ------: | ----------------------- | -------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `findCandidateElements` | `__InjectedScript_ReaderArticleFinder.js:13:56785` |

##### `jar.js` (`./w/load.php?lang=en&modules=mediawiki.cookie&skin=vector-2022&version=spq95:3:20`)

|      % |  Time | Samples | Caller    | Location                                                                         |
| -----: | ----: | ------: | --------- | -------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `require` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:8:344` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=ext.visualEditor.core.utils.parsing&skin=vector-2022&version=962r8:1:86`)

|      % |  Time | Samples | Caller      | Location                                                                         |
| -----: | ----: | ------: | ----------- | -------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `runScript` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=jquery.uls.data&skin=vector-2022&version=1ey9x:1:627`)

|      % |  Time | Samples | Caller        | Location                                                                            |
| -----: | ----: | ------: | ------------- | ----------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `./w/load.php?lang=en&modules=jquery.uls.data&skin=vector-2022&version=1ey9x:1:578` |

##### `Title.js` (`./w/load.php?lang=en&modules=mediawiki.Title&skin=vector-2022&version=1fg2m:1:105`)

|      % |  Time | Samples | Caller      | Location                                                                         |
| -----: | ----: | ------: | ----------- | -------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `runScript` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59` |

##### `eventSender.js` (`./w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:10:28`)

|      % |  Time | Samples | Caller    | Location                                                                         |
| -----: | ----: | ------: | --------- | -------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `require` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:8:344` |

##### `get` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:1:721`)

|      % |  Time | Samples | Caller           | Location                                                                                |
| -----: | ----: | ------: | ---------------- | --------------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `webUIScroll.js` | `./w/load.php?lang=en&modules=ext.wikimediaEvents&skin=vector-2022&version=lu7fs:26:28` |

##### `buildEvent` (`./w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:16:842`)

|      % |  Time | Samples | Caller | Location                                                                             |
| -----: | ----: | ------: | ------ | ------------------------------------------------------------------------------------ |
| 100.0% | 1.0ms |       1 | `send` | `./w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:16:355` |

##### `isInSample` (`./w/load.php?lang=en&modules=ext.wikimediaEvents&skin=vector-2022&version=lu7fs:28:619`)

|      % |  Time | Samples | Caller        | Location                                                                                 |
| -----: | ----: | ------: | ------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `./w/load.php?lang=en&modules=ext.wikimediaEvents&skin=vector-2022&version=lu7fs:30:633` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=ext.cite.ux-enhancements&skin=vector-2022&version=1cpqh:4:23`)

|      % |  Time | Samples | Caller        | Location                                                                                    |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `./w/load.php?lang=en&modules=ext.cite.ux-enhancements&skin=vector-2022&version=1cpqh:1:75` |

##### `buildFragment` (`./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:59:231`)

|      % |  Time | Samples | Caller     | Location                                                                    |
| -----: | ----: | ------: | ---------- | --------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `domManip` | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:74:285` |

##### `createHTMLDocument` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location                                                                     |
| -----: | ----: | ------: | ------------- | ---------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:132:282` |

##### `remove` (`<unknown>`)

|      % |  Time | Samples | Caller             | Location                                                                             |
| -----: | ----: | ------: | ------------------ | ------------------------------------------------------------------------------------ |
| 100.0% | 1.0ms |       1 | `toggleDocClasses` | `./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:44:524` |

##### `setAttribute` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location                                                                                  |
| -----: | ----: | ------: | ------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `./w/load.php?lang=en&modules=jquery.makeCollapsible&skin=vector-2022&version=1yvlc:2:91` |

##### `bound setupEventHandlers` (`<unknown>`)

|      % |  Time | Samples | Caller       | Location                                                                    |
| -----: | ----: | ------: | ------------ | --------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `mightThrow` | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:44:918` |

##### `addEventListener` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location                                                                                 |
| -----: | ----: | ------: | ------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `./w/load.php?lang=en&modules=ext.wikimediaEvents&skin=vector-2022&version=lu7fs:56:313` |

##### `collectMatchingElementsInFlatTree` (`<unknown>`)

|      % |  Time | Samples | Caller               | Location                 |
| -----: | ----: | ------: | -------------------- | ------------------------ |
| 100.0% | 1.0ms |       1 | `queryAllBySelector` | `FormMetadata.js:3:7383` |

##### `nodeAtPoint` (`<unknown>`)

|      % |  Time | Samples | Caller           | Location                                           |
| -----: | ----: | ------: | ---------------- | -------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `elementAtPoint` | `__InjectedScript_ReaderArticleFinder.js:12:10176` |

##### `setTimeout` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location                                                                          |
| -----: | ----: | ------: | ------------- | --------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:528` |

##### `bound ` (`<unknown>`)

|      % |  Time | Samples | Caller                    | Location                                           |
| -----: | ----: | ------: | ------------------------- | -------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `articleTitleInformation` | `__InjectedScript_ReaderArticleFinder.js:13:39662` |

### Total time

Functions with the most time spent within the function and its callees.

|     % |   Time | Samples | Function                                         | Location                                                                          |
| ----: | -----: | ------: | ------------------------------------------------ | --------------------------------------------------------------------------------- |
| 26.6% | 27.0ms |      27 | `(anonymous)`                                    | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:558` |
| 24.6% | 25.0ms |      25 | `runScript`                                      | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59`  |
| 24.2% | 24.6ms |      12 | `unformattedArticleTextContentIncludingMetadata` | `__InjectedScript_ReaderArticleFinder.js:13:67861`                                |
| 15.7% | 16.0ms |      16 | `flushCssBuffer`                                 | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:4:217`  |
| 12.8% | 13.0ms |      13 | `doPropagation`                                  | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254`  |
| 12.8% | 13.0ms |      13 | `(anonymous)`                                    | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:12:421` |
| 12.8% | 13.0ms |      13 | `mightThrow`                                     | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:44:918`       |
| 12.8% | 13.0ms |      13 | `(anonymous)`                                    | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:45:636`       |
| 11.8% | 12.0ms |      12 | `eval`                                           | `<unknown>`                                                                       |
| 11.8% | 12.0ms |      12 | `indirectEval`                                   | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:216` |
| 11.8% | 12.0ms |      12 | `asyncEvalTask`                                  | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:381` |
| 11.8% | 12.0ms |      12 | `(anonymous)`                                    | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:294` |
| 11.8% | 12.0ms |      12 | `execute`                                        | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:868` |
| 10.2% | 10.4ms |       2 | `updateArticleBylineAndDateElementsIfNecessary`  | `__InjectedScript_ReaderArticleFinder.js:13:53699`                                |
| 10.2% | 10.4ms |       2 | `adoptableMetadataBlock`                         | `__InjectedScript_ReaderArticleFinder.js:13:48923`                                |
|  8.9% |  9.0ms |       9 | `_collectMetadata`                               | `FormMetadata.js:3:78950`                                                         |
|  8.9% |  9.0ms |       9 | `formsAndMetadata`                               | `FormMetadata.js:3:82286`                                                         |
|  8.1% |  8.2ms |       4 | `articleTitleInformation`                        | `__InjectedScript_ReaderArticleFinder.js:13:39662`                                |
|  8.1% |  8.2ms |       4 | `articleTitle`                                   | `__InjectedScript_ReaderArticleFinder.js:13:39565`                                |
|  7.9% |  8.0ms |       8 | `each`                                           | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:105`        |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|     % |   Time | Samples | Function                                              | Location                                           |
| ----: | -----: | ------: | ----------------------------------------------------- | -------------------------------------------------- |
| 24.2% | 24.6ms |      12 | `unformattedArticleTextContentIncludingMetadata`      | `__InjectedScript_ReaderArticleFinder.js:13:67861` |
| 11.8% | 12.0ms |      12 | `eval`                                                | `<unknown>`                                        |
| 10.2% | 10.4ms |       2 | `updateArticleBylineAndDateElementsIfNecessary`       | `__InjectedScript_ReaderArticleFinder.js:13:53699` |
| 10.2% | 10.4ms |       2 | `adoptableMetadataBlock`                              | `__InjectedScript_ReaderArticleFinder.js:13:48923` |
|  8.9% |  9.0ms |       9 | `_collectMetadata`                                    | `FormMetadata.js:3:78950`                          |
|  8.9% |  9.0ms |       9 | `formsAndMetadata`                                    | `FormMetadata.js:3:82286`                          |
|  8.1% |  8.2ms |       4 | `articleTitleInformation`                             | `__InjectedScript_ReaderArticleFinder.js:13:39662` |
|  8.1% |  8.2ms |       4 | `articleTitle`                                        | `__InjectedScript_ReaderArticleFinder.js:13:39565` |
|  7.9% |  8.0ms |       8 | `_collectFormMetadata`                                | `FormMetadata.js:3:62833`                          |
|  5.9% |  6.0ms |       6 | `articleNode`                                         | `__InjectedScript_ReaderArticleFinder.js:13:8074`  |
|  5.1% |  5.2ms |       1 | `levenshteinDistance`                                 | `__InjectedScript_ReaderArticleFinder.js:12:6770`  |
|  5.1% |  5.2ms |       1 | `stringSimilarity`                                    | `__InjectedScript_ReaderArticleFinder.js:12:7091`  |
|  5.1% |  5.2ms |       1 | `de`                                                  | `__InjectedScript_ReaderArticleFinder.js:13:42521` |
|  5.1% |  5.2ms |       1 | `trimmedInnerTextIgnoringTextTransform`               | `__InjectedScript_ReaderArticleFinder.js:12:6561`  |
|  5.1% |  5.2ms |       1 | `findArticleBylineElementWithoutRejection`            | `__InjectedScript_ReaderArticleFinder.js:13:50372` |
|  5.1% |  5.2ms |       1 | `findArticleBylineElement`                            | `__InjectedScript_ReaderArticleFinder.js:13:50186` |
|  5.1% |  5.2ms |       1 | `updateArticleBylineAndDateElements`                  | `__InjectedScript_ReaderArticleFinder.js:13:53902` |
|  3.9% |  4.0ms |       4 | `_isElementFollowedByForgotUserNameOrEmailAffordance` | `FormMetadata.js:3:19474`                          |
|  3.9% |  4.0ms |       4 | `findArticleByVisualExamination`                      | `__InjectedScript_ReaderArticleFinder.js:13:63913` |
|  3.9% |  4.0ms |       4 | `isReaderModeAvailable`                               | `__InjectedScript_ReaderArticleFinder.js:13:1893`  |

##### Ours

|     % |   Time | Samples | Function                            | Location                                                                            |
| ----: | -----: | ------: | ----------------------------------- | ----------------------------------------------------------------------------------- |
| 26.6% | 27.0ms |      27 | `(anonymous)`                       | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:558`   |
| 24.6% | 25.0ms |      25 | `runScript`                         | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59`    |
| 15.7% | 16.0ms |      16 | `flushCssBuffer`                    | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:4:217`    |
| 12.8% | 13.0ms |      13 | `doPropagation`                     | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254`    |
| 12.8% | 13.0ms |      13 | `(anonymous)`                       | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:12:421`   |
| 12.8% | 13.0ms |      13 | `mightThrow`                        | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:44:918`         |
| 12.8% | 13.0ms |      13 | `(anonymous)`                       | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:45:636`         |
| 11.8% | 12.0ms |      12 | `indirectEval`                      | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:216`   |
| 11.8% | 12.0ms |      12 | `asyncEvalTask`                     | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:381`   |
| 11.8% | 12.0ms |      12 | `(anonymous)`                       | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:294`   |
| 11.8% | 12.0ms |      12 | `execute`                           | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:868`   |
|  7.9% |  8.0ms |       8 | `each`                              | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:105`          |
|  6.9% |  7.0ms |       7 | `resources/skins.vector.js/skin.js` | `./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:1:155` |
|  5.9% |  6.0ms |       6 | `main`                              | `./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:1:965` |
|  4.9% |  5.0ms |       5 | `(anonymous)`                       | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:812`   |
|  4.9% |  5.0ms |       5 | `(program)`                         | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:1:1`      |
|  4.9% |  5.0ms |       5 | `require`                           | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:8:344`    |
|  4.9% |  5.0ms |       5 | `setupTableOfContents`              | `./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:6:197` |
|  4.9% |  5.0ms |       5 | `main`                              | `./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:7:660` |
|  3.9% |  4.0ms |       4 | `enqueue`                           | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:255`   |

##### Native

|    % |  Time | Samples | Function                            | Location    |
| ---: | ----: | ------: | ----------------------------------- | ----------- |
| 3.9% | 4.0ms |       4 | `insertBefore`                      | `<unknown>` |
| 3.9% | 4.0ms |       4 | `getPropertyValue`                  | `<unknown>` |
| 2.0% | 2.0ms |       2 | `evaluate`                          | `<unknown>` |
| 1.0% | 1.0ms |       1 | `createHTMLDocument`                | `<unknown>` |
| 1.0% | 1.0ms |       1 | `remove`                            | `<unknown>` |
| 1.0% | 1.0ms |       1 | `bound processThumbs`               | `<unknown>` |
| 1.0% | 1.0ms |       1 | `setAttribute`                      | `<unknown>` |
| 1.0% | 1.0ms |       1 | `bound setupEventHandlers`          | `<unknown>` |
| 1.0% | 1.0ms |       1 | `addEventListener`                  | `<unknown>` |
| 1.0% | 1.0ms |       1 | `collectMatchingElementsInFlatTree` | `<unknown>` |
| 1.0% | 1.0ms |       1 | `nodeAtPoint`                       | `<unknown>` |
| 1.0% | 1.0ms |       1 | `setTimeout`                        | `<unknown>` |
| 1.0% | 1.0ms |       1 | `bound `                            | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runScript` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59`)

|     % |   Time | Samples | Caller        | Location                                                                          |
| ----: | -----: | ------: | ------------- | --------------------------------------------------------------------------------- |
| 52.0% | 13.0ms |      13 | `(anonymous)` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:12:421` |
| 48.0% | 12.0ms |      12 | `execute`     | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:868` |

##### `doPropagation` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254`)

|      % |   Time | Samples | Caller        | Location                                                                          |
| -----: | -----: | ------: | ------------- | --------------------------------------------------------------------------------- |
| 100.0% | 13.0ms |      13 | `(anonymous)` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:558` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:12:421`)

|      % |   Time | Samples | Caller           | Location                                                                         |
| -----: | -----: | ------: | ---------------- | -------------------------------------------------------------------------------- |
| 100.0% | 13.0ms |      13 | `flushCssBuffer` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:4:217` |

##### `mightThrow` (`./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:44:918`)

|      % |   Time | Samples | Caller        | Location                                                                    |
| -----: | -----: | ------: | ------------- | --------------------------------------------------------------------------- |
| 100.0% | 13.0ms |      13 | `(anonymous)` | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:45:636` |

##### `eval` (`<unknown>`)

|      % |   Time | Samples | Caller         | Location                                                                          |
| -----: | -----: | ------: | -------------- | --------------------------------------------------------------------------------- |
| 100.0% | 12.0ms |      12 | `indirectEval` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:216` |

##### `indirectEval` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:216`)

|      % |   Time | Samples | Caller          | Location                                                                          |
| -----: | -----: | ------: | --------------- | --------------------------------------------------------------------------------- |
| 100.0% | 12.0ms |      12 | `asyncEvalTask` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:381` |

##### `asyncEvalTask` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:381`)

|      % |   Time | Samples | Caller        | Location                                                                          |
| -----: | -----: | ------: | ------------- | --------------------------------------------------------------------------------- |
| 100.0% | 12.0ms |      12 | `(anonymous)` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:294` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:294`)

|      % |   Time | Samples | Caller        | Location                                                                          |
| -----: | -----: | ------: | ------------- | --------------------------------------------------------------------------------- |
| 100.0% | 12.0ms |      12 | `(anonymous)` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:558` |

##### `execute` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:868`)

|      % |   Time | Samples | Caller          | Location                                                                         |
| -----: | -----: | ------: | --------------- | -------------------------------------------------------------------------------- |
| 100.0% | 12.0ms |      12 | `doPropagation` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254` |

##### `updateArticleBylineAndDateElementsIfNecessary` (`__InjectedScript_ReaderArticleFinder.js:13:53699`)

|      % |   Time | Samples | Caller                   | Location                                           |
| -----: | -----: | ------: | ------------------------ | -------------------------------------------------- |
| 100.0% | 10.4ms |       2 | `adoptableMetadataBlock` | `__InjectedScript_ReaderArticleFinder.js:13:48923` |

##### `adoptableMetadataBlock` (`__InjectedScript_ReaderArticleFinder.js:13:48923`)

|      % |   Time | Samples | Caller                                           | Location                                           |
| -----: | -----: | ------: | ------------------------------------------------ | -------------------------------------------------- |
| 100.0% | 10.4ms |       2 | `unformattedArticleTextContentIncludingMetadata` | `__InjectedScript_ReaderArticleFinder.js:13:67861` |

##### `_collectMetadata` (`FormMetadata.js:3:78950`)

|      % |  Time | Samples | Caller             | Location                  |
| -----: | ----: | ------: | ------------------ | ------------------------- |
| 100.0% | 9.0ms |       9 | `formsAndMetadata` | `FormMetadata.js:3:82286` |

##### `articleTitleInformation` (`__InjectedScript_ReaderArticleFinder.js:13:39662`)

|      % |  Time | Samples | Caller         | Location                                           |
| -----: | ----: | ------: | -------------- | -------------------------------------------------- |
| 100.0% | 8.2ms |       4 | `articleTitle` | `__InjectedScript_ReaderArticleFinder.js:13:39565` |

##### `articleTitle` (`__InjectedScript_ReaderArticleFinder.js:13:39565`)

|      % |  Time | Samples | Caller                                           | Location                                           |
| -----: | ----: | ------: | ------------------------------------------------ | -------------------------------------------------- |
| 100.0% | 8.2ms |       4 | `unformattedArticleTextContentIncludingMetadata` | `__InjectedScript_ReaderArticleFinder.js:13:67861` |

##### `each` (`./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:105`)

|     % |  Time | Samples | Caller          | Location                                                                                     |
| ----: | ----: | ------: | --------------- | -------------------------------------------------------------------------------------------- |
| 50.0% | 4.0ms |       4 | `(anonymous)`   | `./w/load.php?lang=en&modules=jquery.makeCollapsible&skin=vector-2022&version=1yvlc:3:674`   |
| 12.5% | 1.0ms |       1 | `Deferred`      | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:43:832`                  |
| 12.5% | 1.0ms |       1 | `(anonymous)`   | `./w/load.php?lang=en&modules=mediawiki.util&skin=vector-2022&version=1vbcg:16:1008`         |
| 12.5% | 1.0ms |       1 | `(anonymous)`   | `./w/load.php?lang=en&modules=ext.cite.ux-enhancements&skin=vector-2022&version=1cpqh:1:146` |
| 12.5% | 1.0ms |       1 | `processThumbs` | `./w/load.php?lang=en&modules=mmv.bootstrap&skin=vector-2022&version=176u6:4:425`            |

##### `_collectFormMetadata` (`FormMetadata.js:3:62833`)

|      % |  Time | Samples | Caller             | Location                  |
| -----: | ----: | ------: | ------------------ | ------------------------- |
| 100.0% | 8.0ms |       8 | `_collectMetadata` | `FormMetadata.js:3:78950` |

##### `resources/skins.vector.js/skin.js` (`./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:1:155`)

|      % |  Time | Samples | Caller      | Location                                                                         |
| -----: | ----: | ------: | ----------- | -------------------------------------------------------------------------------- |
| 100.0% | 7.0ms |       7 | `runScript` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59` |

##### `articleNode` (`__InjectedScript_ReaderArticleFinder.js:13:8074`)

|      % |  Time | Samples | Caller                                           | Location                                           |
| -----: | ----: | ------: | ------------------------------------------------ | -------------------------------------------------- |
| 100.0% | 6.0ms |       6 | `unformattedArticleTextContentIncludingMetadata` | `__InjectedScript_ReaderArticleFinder.js:13:67861` |

##### `main` (`./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:1:965`)

|      % |  Time | Samples | Caller                              | Location                                                                            |
| -----: | ----: | ------: | ----------------------------------- | ----------------------------------------------------------------------------------- |
| 100.0% | 6.0ms |       6 | `resources/skins.vector.js/skin.js` | `./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:1:155` |

##### `levenshteinDistance` (`__InjectedScript_ReaderArticleFinder.js:12:6770`)

|      % |  Time | Samples | Caller             | Location                                          |
| -----: | ----: | ------: | ------------------ | ------------------------------------------------- |
| 100.0% | 5.2ms |       1 | `stringSimilarity` | `__InjectedScript_ReaderArticleFinder.js:12:7091` |

##### `stringSimilarity` (`__InjectedScript_ReaderArticleFinder.js:12:7091`)

|      % |  Time | Samples | Caller | Location                                           |
| -----: | ----: | ------: | ------ | -------------------------------------------------- |
| 100.0% | 5.2ms |       1 | `de`   | `__InjectedScript_ReaderArticleFinder.js:13:42521` |

##### `de` (`__InjectedScript_ReaderArticleFinder.js:13:42521`)

|      % |  Time | Samples | Caller                    | Location                                           |
| -----: | ----: | ------: | ------------------------- | -------------------------------------------------- |
| 100.0% | 5.2ms |       1 | `articleTitleInformation` | `__InjectedScript_ReaderArticleFinder.js:13:39662` |

##### `trimmedInnerTextIgnoringTextTransform` (`__InjectedScript_ReaderArticleFinder.js:12:6561`)

|      % |  Time | Samples | Caller                                     | Location                                           |
| -----: | ----: | ------: | ------------------------------------------ | -------------------------------------------------- |
| 100.0% | 5.2ms |       1 | `findArticleBylineElementWithoutRejection` | `__InjectedScript_ReaderArticleFinder.js:13:50372` |

##### `findArticleBylineElementWithoutRejection` (`__InjectedScript_ReaderArticleFinder.js:13:50372`)

|      % |  Time | Samples | Caller                     | Location                                           |
| -----: | ----: | ------: | -------------------------- | -------------------------------------------------- |
| 100.0% | 5.2ms |       1 | `findArticleBylineElement` | `__InjectedScript_ReaderArticleFinder.js:13:50186` |

##### `findArticleBylineElement` (`__InjectedScript_ReaderArticleFinder.js:13:50186`)

|      % |  Time | Samples | Caller                               | Location                                           |
| -----: | ----: | ------: | ------------------------------------ | -------------------------------------------------- |
| 100.0% | 5.2ms |       1 | `updateArticleBylineAndDateElements` | `__InjectedScript_ReaderArticleFinder.js:13:53902` |

##### `updateArticleBylineAndDateElements` (`__InjectedScript_ReaderArticleFinder.js:13:53902`)

|      % |  Time | Samples | Caller                                          | Location                                           |
| -----: | ----: | ------: | ----------------------------------------------- | -------------------------------------------------- |
| 100.0% | 5.2ms |       1 | `updateArticleBylineAndDateElementsIfNecessary` | `__InjectedScript_ReaderArticleFinder.js:13:53699` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:812`)

|      % |  Time | Samples | Caller      | Location                                                                       |
| -----: | ----: | ------: | ----------- | ------------------------------------------------------------------------------ |
| 100.0% | 5.0ms |       5 | `(program)` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:1:1` |

##### `require` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:8:344`)

|     % |  Time | Samples | Caller                                   | Location                                                                                 |
| ----: | ----: | ------: | ---------------------------------------- | ---------------------------------------------------------------------------------------- |
| 40.0% | 2.0ms |       2 | `index.js`                               | `./w/load.php?lang=en&modules=ext.wikimediaEvents&skin=vector-2022&version=lu7fs:1:109`  |
| 20.0% | 1.0ms |       1 | `index.js`                               | `./w/load.php?lang=en&modules=mediawiki.cookie&skin=vector-2022&version=spq95:1:106`     |
| 20.0% | 1.0ms |       1 | `index.js`                               | `./w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:1:105`      |
| 20.0% | 1.0ms |       1 | `resources/ext.quicksurveys.lib/init.js` | `./w/load.php?lang=en&modules=ext.quicksurveys.lib&skin=vector-2022&version=kdhjm:1:170` |

##### `setupTableOfContents` (`./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:6:197`)

|      % |  Time | Samples | Caller | Location                                                                            |
| -----: | ----: | ------: | ------ | ----------------------------------------------------------------------------------- |
| 100.0% | 5.0ms |       5 | `main` | `./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:7:660` |

##### `main` (`./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:7:660`)

|      % |  Time | Samples | Caller | Location                                                                            |
| -----: | ----: | ------: | ------ | ----------------------------------------------------------------------------------- |
| 100.0% | 5.0ms |       5 | `main` | `./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:1:965` |

##### `_isElementFollowedByForgotUserNameOrEmailAffordance` (`FormMetadata.js:3:19474`)

|      % |  Time | Samples | Caller                 | Location                  |
| -----: | ----: | ------: | ---------------------- | ------------------------- |
| 100.0% | 4.0ms |       4 | `_collectFormMetadata` | `FormMetadata.js:3:62833` |

##### `findArticleByVisualExamination` (`__InjectedScript_ReaderArticleFinder.js:13:63913`)

|      % |  Time | Samples | Caller                  | Location                                          |
| -----: | ----: | ------: | ----------------------- | ------------------------------------------------- |
| 100.0% | 4.0ms |       4 | `isReaderModeAvailable` | `__InjectedScript_ReaderArticleFinder.js:13:1893` |

##### `enqueue` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:255`)

|     % |  Time | Samples | Caller        | Location                                                                           |
| ----: | ----: | ------: | ------------- | ---------------------------------------------------------------------------------- |
| 50.0% | 2.0ms |       2 | `load`        | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:18:946`  |
| 50.0% | 2.0ms |       2 | `(anonymous)` | `./w/load.php?lang=en&modules=mediawiki.base&skin=vector-2022&version=13iwe:6:539` |

##### `insertBefore` (`<unknown>`)

|     % |  Time | Samples | Caller        | Location                                                                         |
| ----: | ----: | ------: | ------------- | -------------------------------------------------------------------------------- |
| 75.0% | 3.0ms |       3 | `addToHead`   | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:3:909` |
| 25.0% | 1.0ms |       1 | `(anonymous)` | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:77:868`      |

##### `getPropertyValue` (`<unknown>`)

|      % |  Time | Samples | Caller                   | Location                                                                            |
| -----: | ----: | ------: | ------------------------ | ----------------------------------------------------------------------------------- |
| 100.0% | 4.0ms |       4 | `getHeadingScrollOffset` | `./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:5:840` |

##### `evaluate` (`<unknown>`)

|     % |  Time | Samples | Caller                               | Location                                           |
| ----: | ----: | ------: | ------------------------------------ | -------------------------------------------------- |
| 50.0% | 1.0ms |       1 | `shouldDisqualifyDueToHeaderDensity` | `__InjectedScript_ReaderArticleFinder.js:12:30932` |
| 50.0% | 1.0ms |       1 | `contentTextStyleForNode`            | `__InjectedScript_ReaderArticleFinder.js:12:2923`  |

##### `createHTMLDocument` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location                                                                     |
| -----: | ----: | ------: | ------------- | ---------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:132:282` |

##### `remove` (`<unknown>`)

|      % |  Time | Samples | Caller             | Location                                                                             |
| -----: | ----: | ------: | ------------------ | ------------------------------------------------------------------------------------ |
| 100.0% | 1.0ms |       1 | `toggleDocClasses` | `./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:44:524` |

##### `bound processThumbs` (`<unknown>`)

|      % |  Time | Samples | Caller | Location                                                                           |
| -----: | ----: | ------: | ------ | ---------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `add`  | `./w/load.php?lang=en&modules=mediawiki.base&skin=vector-2022&version=13iwe:4:368` |

##### `setAttribute` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location                                                                                  |
| -----: | ----: | ------: | ------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `./w/load.php?lang=en&modules=jquery.makeCollapsible&skin=vector-2022&version=1yvlc:2:91` |

##### `bound setupEventHandlers` (`<unknown>`)

|      % |  Time | Samples | Caller       | Location                                                                    |
| -----: | ----: | ------: | ------------ | --------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `mightThrow` | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:44:918` |

##### `addEventListener` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location                                                                                 |
| -----: | ----: | ------: | ------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `./w/load.php?lang=en&modules=ext.wikimediaEvents&skin=vector-2022&version=lu7fs:56:313` |

##### `collectMatchingElementsInFlatTree` (`<unknown>`)

|      % |  Time | Samples | Caller               | Location                 |
| -----: | ----: | ------: | -------------------- | ------------------------ |
| 100.0% | 1.0ms |       1 | `queryAllBySelector` | `FormMetadata.js:3:7383` |

##### `nodeAtPoint` (`<unknown>`)

|      % |  Time | Samples | Caller           | Location                                           |
| -----: | ----: | ------: | ---------------- | -------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `elementAtPoint` | `__InjectedScript_ReaderArticleFinder.js:12:10176` |

##### `setTimeout` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location                                                                          |
| -----: | ----: | ------: | ------------- | --------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:528` |

##### `bound ` (`<unknown>`)

|      % |  Time | Samples | Caller                    | Location                                           |
| -----: | ----: | ------: | ------------------------- | -------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `articleTitleInformation` | `__InjectedScript_ReaderArticleFinder.js:13:39662` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:558`)

|     % |   Time | Samples | Callee          | Location                                                                                      |
| ----: | -----: | ------: | --------------- | --------------------------------------------------------------------------------------------- |
| 48.1% | 13.0ms |      13 | `doPropagation` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254`              |
| 44.4% | 12.0ms |      12 | `(anonymous)`   | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:294`             |
|  3.7% |  1.0ms |       1 | `(anonymous)`   | `./w/load.php?lang=en&modules=ext.wikimediaEvents&skin=vector-2022&version=lu7fs:30:633`      |
|  3.7% |  1.0ms |       1 | `doMaintenance` | `./w/load.php?lang=en&modules=ext.centralNotice.startUp&skin=vector-2022&version=bw1m8:3:383` |

##### `runScript` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59`)

|     % |  Time | Samples | Callee                              | Location                                                                                               |
| ----: | ----: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 28.0% | 7.0ms |       7 | `resources/skins.vector.js/skin.js` | `./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:1:155`                    |
| 12.0% | 3.0ms |       3 | `(anonymous)`                       | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:1:57`                              |
|  8.0% | 2.0ms |       2 | `index.js`                          | `./w/load.php?lang=en&modules=ext.wikimediaEvents&skin=vector-2022&version=lu7fs:1:109`                |
|  4.0% | 1.0ms |       1 | `index.js`                          | `./w/load.php?lang=en&modules=mediawiki.cookie&skin=vector-2022&version=spq95:1:106`                   |
|  4.0% | 1.0ms |       1 | `(anonymous)`                       | `./w/load.php?lang=en&modules=ext.visualEditor.core.utils.parsing&skin=vector-2022&version=962r8:1:86` |

##### `unformattedArticleTextContentIncludingMetadata` (`__InjectedScript_ReaderArticleFinder.js:13:67861`)

|     % |   Time | Samples | Callee                   | Location                                           |
| ----: | -----: | ------: | ------------------------ | -------------------------------------------------- |
| 42.3% | 10.4ms |       2 | `adoptableMetadataBlock` | `__InjectedScript_ReaderArticleFinder.js:13:48923` |
| 33.3% |  8.2ms |       4 | `articleTitle`           | `__InjectedScript_ReaderArticleFinder.js:13:39565` |
| 24.4% |  6.0ms |       6 | `articleNode`            | `__InjectedScript_ReaderArticleFinder.js:13:8074`  |

##### `flushCssBuffer` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:4:217`)

|     % |   Time | Samples | Callee        | Location                                                                          |
| ----: | -----: | ------: | ------------- | --------------------------------------------------------------------------------- |
| 81.3% | 13.0ms |      13 | `(anonymous)` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:12:421` |
| 18.7% |  3.0ms |       3 | `newStyleTag` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:4:59`   |

##### `doPropagation` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254`)

|     % |   Time | Samples | Callee    | Location                                                                          |
| ----: | -----: | ------: | --------- | --------------------------------------------------------------------------------- |
| 92.3% | 12.0ms |      12 | `execute` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:868` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:12:421`)

|      % |   Time | Samples | Callee      | Location                                                                         |
| -----: | -----: | ------: | ----------- | -------------------------------------------------------------------------------- |
| 100.0% | 13.0ms |      13 | `runScript` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59` |

##### `mightThrow` (`./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:44:918`)

|     % |  Time | Samples | Callee                     | Location                                                                                 |
| ----: | ----: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 30.8% | 4.0ms |       4 | `(anonymous)`              | `./w/load.php?lang=en&modules=mediawiki.page.ready&skin=vector-2022&version=1et5k:1:977` |
| 23.1% | 3.0ms |       3 | `(anonymous)`              | `./w/load.php?lang=en&modules=mediawiki.page.ready&skin=vector-2022&version=1et5k:2:199` |
|  7.7% | 1.0ms |       1 | `fireWith`                 | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:43:150`              |
|  7.7% | 1.0ms |       1 | `(anonymous)`              | `./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:2:356`      |
|  7.7% | 1.0ms |       1 | `bound setupEventHandlers` | `<unknown>`                                                                              |

##### `(anonymous)` (`./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:45:636`)

|      % |   Time | Samples | Callee       | Location                                                                    |
| -----: | -----: | ------: | ------------ | --------------------------------------------------------------------------- |
| 100.0% | 13.0ms |      13 | `mightThrow` | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:44:918` |

##### `eval` (`<unknown>`)

|    % |  Time | Samples | Callee      | Location                                                                               |
| ---: | ----: | ------: | ----------- | -------------------------------------------------------------------------------------- |
| 8.3% | 1.0ms |       1 | `(program)` | `./w/load.php?lang=en&modules=ext.quicksurveys.lib&skin=vector-2022&version=kdhjm:1:1` |
| 8.3% | 1.0ms |       1 | `(program)` | `./w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:1:1`      |

##### `indirectEval` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:216`)

|      % |   Time | Samples | Callee | Location    |
| -----: | -----: | ------: | ------ | ----------- |
| 100.0% | 12.0ms |      12 | `eval` | `<unknown>` |

##### `asyncEvalTask` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:381`)

|      % |   Time | Samples | Callee         | Location                                                                          |
| -----: | -----: | ------: | -------------- | --------------------------------------------------------------------------------- |
| 100.0% | 12.0ms |      12 | `indirectEval` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:216` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:294`)

|      % |   Time | Samples | Callee          | Location                                                                          |
| -----: | -----: | ------: | --------------- | --------------------------------------------------------------------------------- |
| 100.0% | 12.0ms |      12 | `asyncEvalTask` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:381` |

##### `execute` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:868`)

|      % |   Time | Samples | Callee      | Location                                                                         |
| -----: | -----: | ------: | ----------- | -------------------------------------------------------------------------------- |
| 100.0% | 12.0ms |      12 | `runScript` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59` |

##### `updateArticleBylineAndDateElementsIfNecessary` (`__InjectedScript_ReaderArticleFinder.js:13:53699`)

|     % |  Time | Samples | Callee                               | Location                                           |
| ----: | ----: | ------: | ------------------------------------ | -------------------------------------------------- |
| 50.0% | 5.2ms |       1 | `updateArticleBylineAndDateElements` | `__InjectedScript_ReaderArticleFinder.js:13:53902` |

##### `adoptableMetadataBlock` (`__InjectedScript_ReaderArticleFinder.js:13:48923`)

|      % |   Time | Samples | Callee                                          | Location                                           |
| -----: | -----: | ------: | ----------------------------------------------- | -------------------------------------------------- |
| 100.0% | 10.4ms |       2 | `updateArticleBylineAndDateElementsIfNecessary` | `__InjectedScript_ReaderArticleFinder.js:13:53699` |

##### `_collectMetadata` (`FormMetadata.js:3:78950`)

|     % |  Time | Samples | Callee                 | Location                  |
| ----: | ----: | ------: | ---------------------- | ------------------------- |
| 88.9% | 8.0ms |       8 | `_collectFormMetadata` | `FormMetadata.js:3:62833` |
| 11.1% | 1.0ms |       1 | `_logicalFormsInPage`  | `FormMetadata.js:3:27143` |

##### `formsAndMetadata` (`FormMetadata.js:3:82286`)

|      % |  Time | Samples | Callee             | Location                  |
| -----: | ----: | ------: | ------------------ | ------------------------- |
| 100.0% | 9.0ms |       9 | `_collectMetadata` | `FormMetadata.js:3:78950` |

##### `articleTitleInformation` (`__InjectedScript_ReaderArticleFinder.js:13:39662`)

|     % |  Time | Samples | Callee                   | Location                                           |
| ----: | ----: | ------: | ------------------------ | -------------------------------------------------- |
| 63.4% | 5.2ms |       1 | `de`                     | `__InjectedScript_ReaderArticleFinder.js:13:42521` |
| 12.2% | 1.0ms |       1 | `bound `                 | `<unknown>`                                        |
| 12.2% | 1.0ms |       1 | `extraArticleNode`       | `__InjectedScript_ReaderArticleFinder.js:13:8749`  |
| 12.2% | 1.0ms |       1 | `hasClassMatchingRegexp` | `__InjectedScript_ReaderArticleFinder.js:12:18852` |

##### `articleTitle` (`__InjectedScript_ReaderArticleFinder.js:13:39565`)

|      % |  Time | Samples | Callee                    | Location                                           |
| -----: | ----: | ------: | ------------------------- | -------------------------------------------------- |
| 100.0% | 8.2ms |       4 | `articleTitleInformation` | `__InjectedScript_ReaderArticleFinder.js:13:39662` |

##### `each` (`./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:105`)

|     % |  Time | Samples | Callee        | Location                                                                                     |
| ----: | ----: | ------: | ------------- | -------------------------------------------------------------------------------------------- |
| 50.0% | 4.0ms |       4 | `(anonymous)` | `./w/load.php?lang=en&modules=jquery.makeCollapsible&skin=vector-2022&version=1yvlc:3:722`   |
| 12.5% | 1.0ms |       1 | `(anonymous)` | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:46:515`                  |
| 12.5% | 1.0ms |       1 | `(anonymous)` | `./w/load.php?lang=en&modules=mediawiki.util&skin=vector-2022&version=1vbcg:17:26`           |
| 12.5% | 1.0ms |       1 | `(anonymous)` | `./w/load.php?lang=en&modules=ext.cite.ux-enhancements&skin=vector-2022&version=1cpqh:1:363` |
| 12.5% | 1.0ms |       1 | `(anonymous)` | `./w/load.php?lang=en&modules=mmv.bootstrap&skin=vector-2022&version=176u6:4:805`            |

##### `_collectFormMetadata` (`FormMetadata.js:3:62833`)

|     % |  Time | Samples | Callee                                                | Location                  |
| ----: | ----: | ------: | ----------------------------------------------------- | ------------------------- |
| 50.0% | 4.0ms |       4 | `_isElementFollowedByForgotUserNameOrEmailAffordance` | `FormMetadata.js:3:19474` |
| 25.0% | 2.0ms |       2 | `_findHiddenUsernameElement`                          | `FormMetadata.js:3:75498` |
| 12.5% | 1.0ms |       1 | `(anonymous)`                                         | `FormMetadata.js:3:14331` |
| 12.5% | 1.0ms |       1 | `_collectControlMetadata`                             | `FormMetadata.js:3:46804` |

##### `resources/skins.vector.js/skin.js` (`./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:1:155`)

|     % |  Time | Samples | Callee | Location                                                                            |
| ----: | ----: | ------: | ------ | ----------------------------------------------------------------------------------- |
| 85.7% | 6.0ms |       6 | `main` | `./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:1:965` |
| 14.3% | 1.0ms |       1 | `init` | `./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:2:835` |

##### `articleNode` (`__InjectedScript_ReaderArticleFinder.js:13:8074`)

|     % |  Time | Samples | Callee                               | Location                                           |
| ----: | ----: | ------: | ------------------------------------ | -------------------------------------------------- |
| 66.7% | 4.0ms |       4 | `findArticleBySearchingAllElements`  | `__InjectedScript_ReaderArticleFinder.js:13:54939` |
| 33.3% | 2.0ms |       2 | `adjustArticleNodeUpwardIfNecessary` | `__InjectedScript_ReaderArticleFinder.js:13:4514`  |

##### `main` (`./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:1:965`)

|     % |  Time | Samples | Callee | Location                                                                             |
| ----: | ----: | ------: | ------ | ------------------------------------------------------------------------------------ |
| 83.3% | 5.0ms |       5 | `main` | `./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:7:660`  |
| 16.7% | 1.0ms |       1 | `init` | `./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:42:160` |

##### `stringSimilarity` (`__InjectedScript_ReaderArticleFinder.js:12:7091`)

|      % |  Time | Samples | Callee                | Location                                          |
| -----: | ----: | ------: | --------------------- | ------------------------------------------------- |
| 100.0% | 5.2ms |       1 | `levenshteinDistance` | `__InjectedScript_ReaderArticleFinder.js:12:6770` |

##### `de` (`__InjectedScript_ReaderArticleFinder.js:13:42521`)

|      % |  Time | Samples | Callee             | Location                                          |
| -----: | ----: | ------: | ------------------ | ------------------------------------------------- |
| 100.0% | 5.2ms |       1 | `stringSimilarity` | `__InjectedScript_ReaderArticleFinder.js:12:7091` |

##### `findArticleBylineElementWithoutRejection` (`__InjectedScript_ReaderArticleFinder.js:13:50372`)

|      % |  Time | Samples | Callee                                  | Location                                          |
| -----: | ----: | ------: | --------------------------------------- | ------------------------------------------------- |
| 100.0% | 5.2ms |       1 | `trimmedInnerTextIgnoringTextTransform` | `__InjectedScript_ReaderArticleFinder.js:12:6561` |

##### `findArticleBylineElement` (`__InjectedScript_ReaderArticleFinder.js:13:50186`)

|      % |  Time | Samples | Callee                                     | Location                                           |
| -----: | ----: | ------: | ------------------------------------------ | -------------------------------------------------- |
| 100.0% | 5.2ms |       1 | `findArticleBylineElementWithoutRejection` | `__InjectedScript_ReaderArticleFinder.js:13:50372` |

##### `updateArticleBylineAndDateElements` (`__InjectedScript_ReaderArticleFinder.js:13:53902`)

|      % |  Time | Samples | Callee                     | Location                                           |
| -----: | ----: | ------: | -------------------------- | -------------------------------------------------- |
| 100.0% | 5.2ms |       1 | `findArticleBylineElement` | `__InjectedScript_ReaderArticleFinder.js:13:50186` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:812`)

|     % |  Time | Samples | Callee        | Location                                                                          |
| ----: | ----: | ------: | ------------- | --------------------------------------------------------------------------------- |
| 40.0% | 2.0ms |       2 | `load`        | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:18:946` |
| 20.0% | 1.0ms |       1 | `register`    | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:249` |
| 20.0% | 1.0ms |       1 | `(anonymous)` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:23:156` |

##### `(program)` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:1:1`)

|      % |  Time | Samples | Callee        | Location                                                                          |
| -----: | ----: | ------: | ------------- | --------------------------------------------------------------------------------- |
| 100.0% | 5.0ms |       5 | `(anonymous)` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:812` |

##### `require` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:8:344`)

|     % |  Time | Samples | Callee                                  | Location                                                                                 |
| ----: | ----: | ------: | --------------------------------------- | ---------------------------------------------------------------------------------------- |
| 20.0% | 1.0ms |       1 | `jar.js`                                | `./w/load.php?lang=en&modules=mediawiki.cookie&skin=vector-2022&version=spq95:3:20`      |
| 20.0% | 1.0ms |       1 | `eventSender.js`                        | `./w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:10:28`      |
| 20.0% | 1.0ms |       1 | `webUIScroll.js`                        | `./w/load.php?lang=en&modules=ext.wikimediaEvents&skin=vector-2022&version=lu7fs:26:28`  |
| 20.0% | 1.0ms |       1 | `testKitchen/pageVisitBotDetection.js`  | `./w/load.php?lang=en&modules=ext.wikimediaEvents&skin=vector-2022&version=lu7fs:82:834` |
| 20.0% | 1.0ms |       1 | `resources/ext.quicksurveys.lib/lib.js` | `./w/load.php?lang=en&modules=ext.quicksurveys.lib&skin=vector-2022&version=kdhjm:3:51`  |

##### `setupTableOfContents` (`./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:6:197`)

|     % |  Time | Samples | Callee                    | Location                                                                            |
| ----: | ----: | ------: | ------------------------- | ----------------------------------------------------------------------------------- |
| 80.0% | 4.0ms |       4 | `getHeadingScrollOffset`  | `./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:5:840` |
| 20.0% | 1.0ms |       1 | `setInitialActiveSection` | `./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:7:167` |

##### `main` (`./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:7:660`)

|      % |  Time | Samples | Callee                 | Location                                                                            |
| -----: | ----: | ------: | ---------------------- | ----------------------------------------------------------------------------------- |
| 100.0% | 5.0ms |       5 | `setupTableOfContents` | `./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:6:197` |

##### `_isElementFollowedByForgotUserNameOrEmailAffordance` (`FormMetadata.js:3:19474`)

|     % |  Time | Samples | Callee                                                         | Location                  |
| ----: | ----: | ------: | -------------------------------------------------------------- | ------------------------- |
| 75.0% | 3.0ms |       3 | `stringsMatchAnyRegularExpressions`                            | `FormMetadata.js:3:8216`  |
| 25.0% | 1.0ms |       1 | `_stringsToEvaluateToDetermineIfElementIsFollowedByAffordance` | `FormMetadata.js:3:21490` |

##### `findArticleByVisualExamination` (`__InjectedScript_ReaderArticleFinder.js:13:63913`)

|     % |  Time | Samples | Callee                                 | Location                                           |
| ----: | ----: | ------: | -------------------------------------- | -------------------------------------------------- |
| 25.0% | 1.0ms |       1 | `Set`                                  | `<unknown>`                                        |
| 25.0% | 1.0ms |       1 | `elementContainsEnoughTextOfSameStyle` | `__InjectedScript_ReaderArticleFinder.js:13:62686` |
| 25.0% | 1.0ms |       1 | `CandidateElement`                     | `__InjectedScript_ReaderArticleFinder.js:12:25119` |
| 25.0% | 1.0ms |       1 | `shouldDisqualifyDueToHeaderDensity`   | `__InjectedScript_ReaderArticleFinder.js:12:30932` |

##### `isReaderModeAvailable` (`__InjectedScript_ReaderArticleFinder.js:13:1893`)

|      % |  Time | Samples | Callee                           | Location                                           |
| -----: | ----: | ------: | -------------------------------- | -------------------------------------------------- |
| 100.0% | 4.0ms |       4 | `findArticleByVisualExamination` | `__InjectedScript_ReaderArticleFinder.js:13:63913` |

##### `enqueue` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:255`)

|     % |  Time | Samples | Callee        | Location                                                                           |
| ----: | ----: | ------: | ------------- | ---------------------------------------------------------------------------------- |
| 50.0% | 2.0ms |       2 | `work`        | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:16:424`  |
| 25.0% | 1.0ms |       1 | `forEach`     | `<unknown>`                                                                        |
| 25.0% | 1.0ms |       1 | `(anonymous)` | `./w/load.php?lang=en&modules=mediawiki.base&skin=vector-2022&version=13iwe:6:847` |

##### `bound processThumbs` (`<unknown>`)

|      % |  Time | Samples | Callee          | Location                                                                          |
| -----: | ----: | ------: | --------------- | --------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `processThumbs` | `./w/load.php?lang=en&modules=mmv.bootstrap&skin=vector-2022&version=176u6:4:425` |

## Hottest call stacks

Call stacks with the most time spent in their leaf frame.

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 9.8% | 10.0ms |      10 | `eval` ← `indirectEval` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:216`) ← `asyncEvalTask` (15:381) ← `(anonymous)` (15:294) ← `(anonymous)` (22:558)                                                                                                                                                                                                                                                                                                               |
| 5.1% |  5.2ms |       1 | `levenshteinDistance` (`__InjectedScript_ReaderArticleFinder.js:12:6770`) ← `stringSimilarity` (12:7091) ← `de` (13:42521) ← `articleTitleInformation` (13:39662) ← `articleTitle` (13:39565) ← `unformattedArticleTextContentIncludingMetadata` (13:67861)                                                                                                                                                                                                                                            |
| 5.1% |  5.2ms |       1 | `updateArticleBylineAndDateElementsIfNecessary` (`__InjectedScript_ReaderArticleFinder.js:13:53699`) ← `adoptableMetadataBlock` (13:48923) ← `unformattedArticleTextContentIncludingMetadata` (13:67861)                                                                                                                                                                                                                                                                                               |
| 5.1% |  5.2ms |       1 | `trimmedInnerTextIgnoringTextTransform` (`__InjectedScript_ReaderArticleFinder.js:12:6561`) ← `findArticleBylineElementWithoutRejection` (13:50372) ← `findArticleBylineElement` (13:50186) ← `updateArticleBylineAndDateElements` (13:53902) ← `updateArticleBylineAndDateElementsIfNecessary` (13:53699) ← `adoptableMetadataBlock` (13:48923) ← `unformattedArticleTextContentIncludingMetadata` (13:67861)                                                                                         |
| 3.9% |  4.0ms |       4 | `getPropertyValue` ← `getHeadingScrollOffset` (`./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:5:840`) ← `setupTableOfContents` (6:197) ← `main` (7:660) ← `main` (1:965) ← `resources/skins.vector.js/skin.js` (1:155) ← `runScript` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59`) ← `(anonymous)` (12:421) ← `flushCssBuffer` (4:217)                                                                                              |
| 3.0% |  3.0ms |       3 | `insertBefore` ← `addToHead` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:3:909`) ← `newStyleTag` (4:59) ← `flushCssBuffer` (4:217)                                                                                                                                                                                                                                                                                                                                      |
| 3.0% |  3.0ms |       3 | `stringsMatchAnyRegularExpressions` (`FormMetadata.js:3:8216`) ← `_isElementFollowedByForgotUserNameOrEmailAffordance` (3:19474) ← `_collectFormMetadata` (3:62833) ← `_collectMetadata` (3:78950) ← `formsAndMetadata` (3:82286)                                                                                                                                                                                                                                                                      |
| 1.0% |  1.0ms |       1 | `(anonymous)` (`./wiki/Profiling_(computer_programming):6:19`) ← `(program)` (6:10)                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.0% |  1.0ms |       1 | `(anonymous)` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:812`) ← `(program)` (1:1)                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.0% |  1.0ms |       1 | `resolveIndex` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:352`) ← `register` (17:249) ← `(anonymous)` (22:812) ← `(program)` (1:1)                                                                                                                                                                                                                                                                                                                                  |
| 1.0% |  1.0ms |       1 | `load` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:20:748`) ← `init` (20:645) ← `work` (16:424) ← `enqueue` (10:255) ← `load` (18:946) ← `(anonymous)` (22:812) ← `(program)` (1:1)                                                                                                                                                                                                                                                                                     |
| 1.0% |  1.0ms |       1 | `parse` ← `load` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:20:748`) ← `init` (20:645) ← `work` (16:424) ← `enqueue` (10:255) ← `load` (18:946) ← `(anonymous)` (22:812) ← `(program)` (1:1)                                                                                                                                                                                                                                                                           |
| 1.0% |  1.0ms |       1 | `splitModuleKey` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:720`) ← `impl` (18:205) ← `(anonymous)` (`./wiki/Profiling_(computer_programming):8:44`) ← `(anonymous)` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:23:156`) ← `(anonymous)` (22:812) ← `(program)` (1:1)                                                                                                                                                               |
| 1.0% |  1.0ms |       1 | `(anonymous)` (`./w/load.php?lang=en&modules=ext.quicksurveys.lib&skin=vector-2022&version=kdhjm:1:24`) ← `impl` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:18:205`) ← `(program)` (`./w/load.php?lang=en&modules=ext.quicksurveys.lib&skin=vector-2022&version=kdhjm:1:1`) ← `eval` ← `indirectEval` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:216`) ← `asyncEvalTask` (15:381) ← `(anonymous)` (15:294) ← `(anonymous)` (22:558) |
| 1.0% |  1.0ms |       1 | `(anonymous)` (`./w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:1:24`) ← `impl` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:18:205`) ← `(program)` (`./w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:1:1`) ← `eval` ← `indirectEval` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:216`) ← `asyncEvalTask` (15:381) ← `(anonymous)` (15:294) ← `(anonymous)` (22:558)           |
| 1.0% |  1.0ms |       1 | `(anonymous)` (`./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:1:420`) ← `(anonymous)` (1:92) ← `(anonymous)` (1:57) ← `runScript` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59`) ← `execute` (10:868) ← `doPropagation` (5:254) ← `(anonymous)` (22:558)                                                                                                                                                                                      |
| 1.0% |  1.0ms |       1 | `add` (`./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:42:286`) ← `(anonymous)` (46:515) ← `each` (5:105) ← `Deferred` (43:832) ← `(anonymous)` (1:420) ← `(anonymous)` (1:92) ← `(anonymous)` (1:57) ← `runScript` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59`) ← `execute` (10:868) ← `doPropagation` (5:254) ← `(anonymous)` (22:558)                                                                                                     |
| 1.0% |  1.0ms |       1 | `createHTMLDocument` ← `(anonymous)` (`./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:132:282`) ← `(anonymous)` (1:420) ← `(anonymous)` (1:92) ← `(anonymous)` (1:57) ← `runScript` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59`) ← `execute` (10:868) ← `doPropagation` (5:254) ← `(anonymous)` (22:558)                                                                                                                                     |
| 1.0% |  1.0ms |       1 | `jar.js` (`./w/load.php?lang=en&modules=mediawiki.cookie&skin=vector-2022&version=spq95:3:20`) ← `require` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:8:344`) ← `index.js` (`./w/load.php?lang=en&modules=mediawiki.cookie&skin=vector-2022&version=spq95:1:106`) ← `runScript` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59`) ← `execute` (10:868) ← `doPropagation` (5:254) ← `(anonymous)` (22:558)                             |
| 1.0% |  1.0ms |       1 | `(anonymous)` (`./w/load.php?lang=en&modules=ext.visualEditor.core.utils.parsing&skin=vector-2022&version=962r8:1:86`) ← `runScript` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59`) ← `execute` (10:868) ← `doPropagation` (5:254) ← `(anonymous)` (22:558)                                                                                                                                                                                                        |
