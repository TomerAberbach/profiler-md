# CPU profile

Took 102.2ms over 91 samples (1.1ms per sample).

| Category         |     % |   Time | Samples |
| ---------------- | ----: | -----: | ------: |
| Standard library | 43.2% | 44.2ms |      33 |
| Ours             | 30.3% | 31.0ms |      31 |
| Native           | 26.4% | 27.0ms |      27 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |   Time | Samples | Function                                | Location                                                                                                  |
| ---: | -----: | ------: | --------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 9.8% | 10.0ms |      10 | `eval`                                  | `<unknown>`                                                                                               |
| 5.9% |  6.0ms |       6 | `insertBefore`                          | `<unknown>`                                                                                               |
| 4.9% |  5.0ms |       5 | `getPropertyValue`                      | `<unknown>`                                                                                               |
| 4.1% |  4.2ms |       2 | `normalizedElementTagName`              | `__InjectedScript_ReaderArticleFinder.js:12:19601`                                                        |
| 3.2% |  3.2ms |       1 | `elementLooksLikePartOfACarousel`       | `__InjectedScript_ReaderArticleFinder.js:12:8505`                                                         |
| 3.2% |  3.2ms |       1 | `t`                                     | `__InjectedScript_ReaderArticleFinder.js:13:56642`                                                        |
| 3.2% |  3.2ms |       1 | `domDistance`                           | `__InjectedScript_ReaderArticleFinder.js:12:2553`                                                         |
| 3.2% |  3.2ms |       1 | `trimmedInnerTextIgnoringTextTransform` | `__InjectedScript_ReaderArticleFinder.js:12:6561`                                                         |
| 2.0% |  2.0ms |       2 | `collectMatchingElementsInFlatTree`     | `<unknown>`                                                                                               |
| 2.0% |  2.0ms |       2 | `stringsMatchAnyRegularExpressions`     | `FormMetadata.js:3:8216`                                                                                  |
| 2.0% |  2.0ms |       2 | `evaluate`                              | `<unknown>`                                                                                               |
| 1.0% |  1.0ms |       1 | `(anonymous)`                           | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:812`                             |
| 1.0% |  1.0ms |       1 | `register`                              | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:249`                             |
| 1.0% |  1.0ms |       1 | `parse`                                 | `<unknown>`                                                                                               |
| 1.0% |  1.0ms |       1 | `sortCompact`                           | `<unknown>`                                                                                               |
| 1.0% |  1.0ms |       1 | `doPropagation`                         | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254`                              |
| 1.0% |  1.0ms |       1 | `(anonymous)`                           | `load.php?lang=en&modules=ext.visualEditor.desktopArticleTarget.init&skin=vector-2022&version=1xmtn:1:24` |
| 1.0% |  1.0ms |       1 | `(anonymous)`                           | `load.php?lang=en&modules=mmv.bootstrap&skin=vector-2022&version=176u6:1:24`                              |
| 1.0% |  1.0ms |       1 | `each`                                  | `load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:105`                                    |
| 1.0% |  1.0ms |       1 | `execute`                               | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:868`                             |

#### Categories

##### Standard library

|    % |   Time | Samples | Function                                                       | Location                                           |
| ---: | -----: | ------: | -------------------------------------------------------------- | -------------------------------------------------- |
| 9.8% | 10.0ms |      10 | `eval`                                                         | `<unknown>`                                        |
| 4.1% |  4.2ms |       2 | `normalizedElementTagName`                                     | `__InjectedScript_ReaderArticleFinder.js:12:19601` |
| 3.2% |  3.2ms |       1 | `elementLooksLikePartOfACarousel`                              | `__InjectedScript_ReaderArticleFinder.js:12:8505`  |
| 3.2% |  3.2ms |       1 | `t`                                                            | `__InjectedScript_ReaderArticleFinder.js:13:56642` |
| 3.2% |  3.2ms |       1 | `domDistance`                                                  | `__InjectedScript_ReaderArticleFinder.js:12:2553`  |
| 3.2% |  3.2ms |       1 | `trimmedInnerTextIgnoringTextTransform`                        | `__InjectedScript_ReaderArticleFinder.js:12:6561`  |
| 2.0% |  2.0ms |       2 | `stringsMatchAnyRegularExpressions`                            | `FormMetadata.js:3:8216`                           |
| 1.0% |  1.0ms |       1 | `parse`                                                        | `<unknown>`                                        |
| 1.0% |  1.0ms |       1 | `add`                                                          | `<unknown>`                                        |
| 1.0% |  1.0ms |       1 | `stripCommonPrefix`                                            | `FormMetadata.js:3:6253`                           |
| 1.0% |  1.0ms |       1 | `autocompleteTokens`                                           | `FormMetadata.js:3:5183`                           |
| 1.0% |  1.0ms |       1 | `_isAutoFillableTextField`                                     | `FormMetadata.js:3:38801`                          |
| 1.0% |  1.0ms |       1 | `_collectStringFromNodeForPageScan`                            | `FormMetadata.js:3:18053`                          |
| 1.0% |  1.0ms |       1 | `_stringsToEvaluateToDetermineIfElementIsFollowedByAffordance` | `FormMetadata.js:3:21490`                          |
| 1.0% |  1.0ms |       1 | `pathFromAnchorWithoutLeadingSlash`                            | `FormMetadata.js:3:8339`                           |
| 1.0% |  1.0ms |       1 | `(anonymous)`                                                  | `FormMetadata.js:3:77436`                          |
| 1.0% |  1.0ms |       1 | `getVisibleNonWhitespaceTextNodes`                             | `__InjectedScript_ReaderArticleFinder.js:12:13801` |
| 1.0% |  1.0ms |       1 | `cachedElementBoundingRect`                                    | `__InjectedScript_ReaderArticleFinder.js:12:5336`  |
| 1.0% |  1.0ms |       1 | `pointsForDominantIframeHitTest`                               | `__InjectedScript_ReaderArticleFinder.js:13:1191`  |
| 1.0% |  1.0ms |       1 | `(anonymous)`                                                  | `__InjectedScript_ReaderArticleFinder.js:12:26535` |

##### Ours

|    % |  Time | Samples | Function                 | Location                                                                                                  |
| ---: | ----: | ------: | ------------------------ | --------------------------------------------------------------------------------------------------------- |
| 1.0% | 1.0ms |       1 | `(anonymous)`            | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:812`                             |
| 1.0% | 1.0ms |       1 | `register`               | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:249`                             |
| 1.0% | 1.0ms |       1 | `doPropagation`          | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254`                              |
| 1.0% | 1.0ms |       1 | `(anonymous)`            | `load.php?lang=en&modules=ext.visualEditor.desktopArticleTarget.init&skin=vector-2022&version=1xmtn:1:24` |
| 1.0% | 1.0ms |       1 | `(anonymous)`            | `load.php?lang=en&modules=mmv.bootstrap&skin=vector-2022&version=176u6:1:24`                              |
| 1.0% | 1.0ms |       1 | `each`                   | `load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:105`                                    |
| 1.0% | 1.0ms |       1 | `execute`                | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:868`                             |
| 1.0% | 1.0ms |       1 | `createOptions`          | `load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:41:604`                                   |
| 1.0% | 1.0ms |       1 | `sortDependencies`       | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:6:612`                              |
| 1.0% | 1.0ms |       1 | `(anonymous)`            | `load.php?lang=en&modules=jquery.uls.data&skin=vector-2022&version=1ey9x:1:627`                           |
| 1.0% | 1.0ms |       1 | `add`                    | `load.php?lang=en&modules=mediawiki.base&skin=vector-2022&version=13iwe:4:368`                            |
| 1.0% | 1.0ms |       1 | `(anonymous)`            | `load.php?lang=en&modules=mediawiki.api&skin=vector-2022&version=1yqeu:1:193`                             |
| 1.0% | 1.0ms |       1 | `init`                   | `load.php?lang=en&modules=ext.uls.preferences&skin=vector-2022&version=11u78:1:342`                       |
| 1.0% | 1.0ms |       1 | `get`                    | `load.php?lang=en&modules=mediawiki.cookie&skin=vector-2022&version=spq95:1:902`                          |
| 1.0% | 1.0ms |       1 | `(anonymous)`            | `load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:106:794`                                  |
| 1.0% | 1.0ms |       1 | `filter`                 | `load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:37:404`                                   |
| 1.0% | 1.0ms |       1 | `(anonymous)`            | `load.php?lang=en&modules=jquery.spinner&skin=vector-2022&version=2h5sk:1:100`                            |
| 1.0% | 1.0ms |       1 | `(anonymous)`            | `load.php?lang=en&modules=ext.centralNotice.choiceData&skin=vector-2022&version=ipiii:1:79`               |
| 1.0% | 1.0ms |       1 | `updateTooltipOnElement` | `load.php?lang=en&modules=mediawiki.util&skin=vector-2022&version=1vbcg:15:1080`                          |
| 1.0% | 1.0ms |       1 | `isXMLDoc`               | `load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:915`                                    |

##### Native

|    % |  Time | Samples | Function                            | Location    |
| ---: | ----: | ------: | ----------------------------------- | ----------- |
| 5.9% | 6.0ms |       6 | `insertBefore`                      | `<unknown>` |
| 4.9% | 5.0ms |       5 | `getPropertyValue`                  | `<unknown>` |
| 2.0% | 2.0ms |       2 | `collectMatchingElementsInFlatTree` | `<unknown>` |
| 2.0% | 2.0ms |       2 | `evaluate`                          | `<unknown>` |
| 1.0% | 1.0ms |       1 | `sortCompact`                       | `<unknown>` |
| 1.0% | 1.0ms |       1 | `createHTMLDocument`                | `<unknown>` |
| 1.0% | 1.0ms |       1 | `URL`                               | `<unknown>` |
| 1.0% | 1.0ms |       1 | `setTimeout`                        | `<unknown>` |
| 1.0% | 1.0ms |       1 | `flatIntoArray`                     | `<unknown>` |
| 1.0% | 1.0ms |       1 | `querySelector`                     | `<unknown>` |
| 1.0% | 1.0ms |       1 | `remove`                            | `<unknown>` |
| 1.0% | 1.0ms |       1 | `[Symbol.match]`                    | `<unknown>` |
| 1.0% | 1.0ms |       1 | `getComputedStyle`                  | `<unknown>` |
| 1.0% | 1.0ms |       1 | `stringSplitFast`                   | `<unknown>` |
| 1.0% | 1.0ms |       1 | `sendBeacon`                        | `<unknown>` |
| 1.0% | 1.0ms |       1 | `getBoundingClientRect`             | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `normalizedElementTagName` (`__InjectedScript_ReaderArticleFinder.js:12:19601`)

|      % |  Time | Samples | Location                                     |
| -----: | ----: | ------: | -------------------------------------------- |
| 100.0% | 4.2ms |       2 | `__InjectedScript_ReaderArticleFinder.js:12` |

##### `elementLooksLikePartOfACarousel` (`__InjectedScript_ReaderArticleFinder.js:12:8505`)

|      % |  Time | Samples | Location                                     |
| -----: | ----: | ------: | -------------------------------------------- |
| 100.0% | 3.2ms |       1 | `__InjectedScript_ReaderArticleFinder.js:12` |

##### `t` (`__InjectedScript_ReaderArticleFinder.js:13:56642`)

|      % |  Time | Samples | Location                                     |
| -----: | ----: | ------: | -------------------------------------------- |
| 100.0% | 3.2ms |       1 | `__InjectedScript_ReaderArticleFinder.js:13` |

##### `trimmedInnerTextIgnoringTextTransform` (`__InjectedScript_ReaderArticleFinder.js:12:6561`)

|      % |  Time | Samples | Location                                     |
| -----: | ----: | ------: | -------------------------------------------- |
| 100.0% | 3.2ms |       1 | `__InjectedScript_ReaderArticleFinder.js:12` |

##### `stringsMatchAnyRegularExpressions` (`FormMetadata.js:3:8216`)

|      % |  Time | Samples | Location            |
| -----: | ----: | ------: | ------------------- |
| 100.0% | 2.0ms |       2 | `FormMetadata.js:3` |

##### `register` (`load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:249`)

|      % |  Time | Samples | Location                                                                  |
| -----: | ----: | ------: | ------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17` |

##### `doPropagation` (`load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254`)

|      % |  Time | Samples | Location                                                                 |
| -----: | ----: | ------: | ------------------------------------------------------------------------ |
| 100.0% | 1.0ms |       1 | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5` |

##### `execute` (`load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:868`)

|      % |  Time | Samples | Location                                                                  |
| -----: | ----: | ------: | ------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:12` |

##### `_isAutoFillableTextField` (`FormMetadata.js:3:38801`)

|      % |  Time | Samples | Location            |
| -----: | ----: | ------: | ------------------- |
| 100.0% | 1.0ms |       1 | `FormMetadata.js:3` |

##### `_stringsToEvaluateToDetermineIfElementIsFollowedByAffordance` (`FormMetadata.js:3:21490`)

|      % |  Time | Samples | Location            |
| -----: | ----: | ------: | ------------------- |
| 100.0% | 1.0ms |       1 | `FormMetadata.js:3` |

##### `pathFromAnchorWithoutLeadingSlash` (`FormMetadata.js:3:8339`)

|      % |  Time | Samples | Location            |
| -----: | ----: | ------: | ------------------- |
| 100.0% | 1.0ms |       1 | `FormMetadata.js:3` |

##### `(anonymous)` (`FormMetadata.js:3:77436`)

|      % |  Time | Samples | Location            |
| -----: | ----: | ------: | ------------------- |
| 100.0% | 1.0ms |       1 | `FormMetadata.js:3` |

##### `cachedElementBoundingRect` (`__InjectedScript_ReaderArticleFinder.js:12:5336`)

|      % |  Time | Samples | Location                                     |
| -----: | ----: | ------: | -------------------------------------------- |
| 100.0% | 1.0ms |       1 | `__InjectedScript_ReaderArticleFinder.js:12` |

##### `pointsForDominantIframeHitTest` (`__InjectedScript_ReaderArticleFinder.js:13:1191`)

|      % |  Time | Samples | Location                                     |
| -----: | ----: | ------: | -------------------------------------------- |
| 100.0% | 1.0ms |       1 | `__InjectedScript_ReaderArticleFinder.js:13` |

##### `(anonymous)` (`__InjectedScript_ReaderArticleFinder.js:12:26535`)

|      % |  Time | Samples | Location                                     |
| -----: | ----: | ------: | -------------------------------------------- |
| 100.0% | 1.0ms |       1 | `__InjectedScript_ReaderArticleFinder.js:12` |

##### `sortDependencies` (`load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:6:612`)

|      % |  Time | Samples | Location                                                                 |
| -----: | ----: | ------: | ------------------------------------------------------------------------ |
| 100.0% | 1.0ms |       1 | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:7` |

##### `(anonymous)` (`load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:106:794`)

|      % |  Time | Samples | Location                                                             |
| -----: | ----: | ------: | -------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:107` |

##### `(anonymous)` (`load.php?lang=en&modules=jquery.spinner&skin=vector-2022&version=2h5sk:1:100`)

|      % |  Time | Samples | Location                                                                   |
| -----: | ----: | ------: | -------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `load.php?lang=en&modules=jquery.spinner&skin=vector-2022&version=2h5sk:1` |

##### `updateTooltipOnElement` (`load.php?lang=en&modules=mediawiki.util&skin=vector-2022&version=1vbcg:15:1080`)

|      % |  Time | Samples | Location                                                                    |
| -----: | ----: | ------: | --------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `load.php?lang=en&modules=mediawiki.util&skin=vector-2022&version=1vbcg:16` |

##### `isXMLDoc` (`load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:915`)

|      % |  Time | Samples | Location                                                           |
| -----: | ----: | ------: | ------------------------------------------------------------------ |
| 100.0% | 1.0ms |       1 | `load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5` |

##### `[Symbol.match]` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.0ms |       1 | 1        |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `eval` (`<unknown>`)

|      % |   Time | Samples | Caller         | Location                                                                      |
| -----: | -----: | ------: | -------------- | ----------------------------------------------------------------------------- |
| 100.0% | 10.0ms |      10 | `indirectEval` | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:216` |

##### `insertBefore` (`<unknown>`)

|     % |  Time | Samples | Caller        | Location                                                                     |
| ----: | ----: | ------: | ------------- | ---------------------------------------------------------------------------- |
| 66.7% | 4.0ms |       4 | `addToHead`   | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:3:909` |
| 33.3% | 2.0ms |       2 | `(anonymous)` | `load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:77:868`      |

##### `getPropertyValue` (`<unknown>`)

|      % |  Time | Samples | Caller                   | Location                                                                        |
| -----: | ----: | ------: | ------------------------ | ------------------------------------------------------------------------------- |
| 100.0% | 5.0ms |       5 | `getHeadingScrollOffset` | `load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:5:840` |

##### `normalizedElementTagName` (`__InjectedScript_ReaderArticleFinder.js:12:19601`)

|     % |  Time | Samples | Caller                    | Location                                           |
| ----: | ----: | ------: | ------------------------- | -------------------------------------------------- |
| 76.4% | 3.2ms |       1 | `articleTitleInformation` | `__InjectedScript_ReaderArticleFinder.js:13:39662` |
| 23.6% | 1.0ms |       1 | `i`                       | `__InjectedScript_ReaderArticleFinder.js:12:29250` |

##### `elementLooksLikePartOfACarousel` (`__InjectedScript_ReaderArticleFinder.js:12:8505`)

|      % |  Time | Samples | Caller        | Location                                           |
| -----: | ----: | ------: | ------------- | -------------------------------------------------- |
| 100.0% | 3.2ms |       1 | `(anonymous)` | `__InjectedScript_ReaderArticleFinder.js:12:25480` |

##### `t` (`__InjectedScript_ReaderArticleFinder.js:13:56642`)

|      % |  Time | Samples | Caller      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 3.2ms |       1 | `sortMerge` | `<unknown>` |

##### `domDistance` (`__InjectedScript_ReaderArticleFinder.js:12:2553`)

|      % |  Time | Samples | Caller                    | Location                                           |
| -----: | ----: | ------: | ------------------------- | -------------------------------------------------- |
| 100.0% | 3.2ms |       1 | `articleTitleInformation` | `__InjectedScript_ReaderArticleFinder.js:13:39662` |

##### `trimmedInnerTextIgnoringTextTransform` (`__InjectedScript_ReaderArticleFinder.js:12:6561`)

|      % |  Time | Samples | Caller                                     | Location                                           |
| -----: | ----: | ------: | ------------------------------------------ | -------------------------------------------------- |
| 100.0% | 3.2ms |       1 | `findArticleBylineElementWithoutRejection` | `__InjectedScript_ReaderArticleFinder.js:13:50372` |

##### `collectMatchingElementsInFlatTree` (`<unknown>`)

|      % |  Time | Samples | Caller               | Location                 |
| -----: | ----: | ------: | -------------------- | ------------------------ |
| 100.0% | 2.0ms |       2 | `queryAllBySelector` | `FormMetadata.js:3:7383` |

##### `stringsMatchAnyRegularExpressions` (`FormMetadata.js:3:8216`)

|      % |  Time | Samples | Caller                                                | Location                  |
| -----: | ----: | ------: | ----------------------------------------------------- | ------------------------- |
| 100.0% | 2.0ms |       2 | `_isElementFollowedByForgotUserNameOrEmailAffordance` | `FormMetadata.js:3:19474` |

##### `evaluate` (`<unknown>`)

|     % |  Time | Samples | Caller                    | Location                                           |
| ----: | ----: | ------: | ------------------------- | -------------------------------------------------- |
| 50.0% | 1.0ms |       1 | `i`                       | `__InjectedScript_ReaderArticleFinder.js:12:29250` |
| 50.0% | 1.0ms |       1 | `contentTextStyleForNode` | `__InjectedScript_ReaderArticleFinder.js:12:2923`  |

##### `(anonymous)` (`load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:812`)

|      % |  Time | Samples | Caller      | Location                                                                   |
| -----: | ----: | ------: | ----------- | -------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(program)` | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:1:1` |

##### `register` (`load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:249`)

|      % |  Time | Samples | Caller        | Location                                                                      |
| -----: | ----: | ------: | ------------- | ----------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:812` |

##### `parse` (`<unknown>`)

|      % |  Time | Samples | Caller | Location                                                                      |
| -----: | ----: | ------: | ------ | ----------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `load` | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:20:748` |

##### `sortCompact` (`<unknown>`)

|      % |  Time | Samples | Caller | Location    |
| -----: | ----: | ------: | ------ | ----------- |
| 100.0% | 1.0ms |       1 | `sort` | `<unknown>` |

##### `doPropagation` (`load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254`)

|      % |  Time | Samples | Caller        | Location                                                                      |
| -----: | ----: | ------: | ------------- | ----------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:558` |

##### `(anonymous)` (`load.php?lang=en&modules=ext.visualEditor.desktopArticleTarget.init&skin=vector-2022&version=1xmtn:1:24`)

|      % |  Time | Samples | Caller | Location                                                                      |
| -----: | ----: | ------: | ------ | ----------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `impl` | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:18:205` |

##### `(anonymous)` (`load.php?lang=en&modules=mmv.bootstrap&skin=vector-2022&version=176u6:1:24`)

|      % |  Time | Samples | Caller | Location                                                                      |
| -----: | ----: | ------: | ------ | ----------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `impl` | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:18:205` |

##### `each` (`load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:105`)

|      % |  Time | Samples | Caller        | Location                                                               |
| -----: | ----: | ------: | ------------- | ---------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:1:420` |

##### `execute` (`load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:868`)

|      % |  Time | Samples | Caller          | Location                                                                     |
| -----: | ----: | ------: | --------------- | ---------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `doPropagation` | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254` |

##### `add` (`<unknown>`)

|      % |  Time | Samples | Caller            | Location                                                                        |
| -----: | ----: | ------: | ----------------- | ------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `activateSection` | `load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:26:25` |

##### `stripCommonPrefix` (`FormMetadata.js:3:6253`)

|      % |  Time | Samples | Caller                                                | Location                  |
| -----: | ----: | ------: | ----------------------------------------------------- | ------------------------- |
| 100.0% | 1.0ms |       1 | `_trailingArgumentsForCollectControlMetadataFunction` | `FormMetadata.js:3:62267` |

##### `autocompleteTokens` (`FormMetadata.js:3:5183`)

|      % |  Time | Samples | Caller                    | Location                  |
| -----: | ----: | ------: | ------------------------- | ------------------------- |
| 100.0% | 1.0ms |       1 | `_collectControlMetadata` | `FormMetadata.js:3:46804` |

##### `_isAutoFillableTextField` (`FormMetadata.js:3:38801`)

|      % |  Time | Samples | Caller                            | Location                  |
| -----: | ----: | ------: | --------------------------------- | ------------------------- |
| 100.0% | 1.0ms |       1 | `_looksLikeCreditCardNumberField` | `FormMetadata.js:3:38899` |

##### `_collectStringFromNodeForPageScan` (`FormMetadata.js:3:18053`)

|      % |  Time | Samples | Caller                                           | Location                  |
| -----: | ----: | ------: | ------------------------------------------------ | ------------------------- |
| 100.0% | 1.0ms |       1 | `_dataForComputingMatchFromPageScanAfterElement` | `FormMetadata.js:3:22137` |

##### `_stringsToEvaluateToDetermineIfElementIsFollowedByAffordance` (`FormMetadata.js:3:21490`)

|      % |  Time | Samples | Caller                                                | Location                  |
| -----: | ----: | ------: | ----------------------------------------------------- | ------------------------- |
| 100.0% | 1.0ms |       1 | `_isElementFollowedByForgotUserNameOrEmailAffordance` | `FormMetadata.js:3:19474` |

##### `pathFromAnchorWithoutLeadingSlash` (`FormMetadata.js:3:8339`)

|      % |  Time | Samples | Caller                                                         | Location                  |
| -----: | ----: | ------: | -------------------------------------------------------------- | ------------------------- |
| 100.0% | 1.0ms |       1 | `_stringsToEvaluateToDetermineIfElementIsFollowedByAffordance` | `FormMetadata.js:3:21490` |

##### `(anonymous)` (`FormMetadata.js:3:77436`)

|      % |  Time | Samples | Caller                                          | Location                  |
| -----: | ----: | ------: | ----------------------------------------------- | ------------------------- |
| 100.0% | 1.0ms |       1 | `_indexOfFormWithHighestScoreIfGreaterThanZero` | `FormMetadata.js:3:78192` |

##### `getVisibleNonWhitespaceTextNodes` (`__InjectedScript_ReaderArticleFinder.js:12:13801`)

|      % |  Time | Samples | Caller                                 | Location                                           |
| -----: | ----: | ------: | -------------------------------------- | -------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `elementContainsEnoughTextOfSameStyle` | `__InjectedScript_ReaderArticleFinder.js:13:62686` |

##### `cachedElementBoundingRect` (`__InjectedScript_ReaderArticleFinder.js:12:5336`)

|      % |  Time | Samples | Caller             | Location                                          |
| -----: | ----: | ------: | ------------------ | ------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `isElementVisible` | `__InjectedScript_ReaderArticleFinder.js:12:4048` |

##### `pointsForDominantIframeHitTest` (`__InjectedScript_ReaderArticleFinder.js:13:1191`)

|      % |  Time | Samples | Caller                  | Location                                          |
| -----: | ----: | ------: | ----------------------- | ------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `dominantContentIframe` | `__InjectedScript_ReaderArticleFinder.js:13:1342` |

##### `(anonymous)` (`__InjectedScript_ReaderArticleFinder.js:12:26535`)

|      % |  Time | Samples | Caller        | Location                                           |
| -----: | ----: | ------: | ------------- | -------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `__InjectedScript_ReaderArticleFinder.js:12:26177` |

##### `createOptions` (`load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:41:604`)

|      % |  Time | Samples | Caller        | Location                                                                |
| -----: | ----: | ------: | ------------- | ----------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:41:751` |

##### `sortDependencies` (`load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:6:612`)

|      % |  Time | Samples | Caller             | Location                                                                     |
| -----: | ----: | ------: | ------------------ | ---------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `sortDependencies` | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:6:612` |

##### `(anonymous)` (`load.php?lang=en&modules=jquery.uls.data&skin=vector-2022&version=1ey9x:1:627`)

|      % |  Time | Samples | Caller        | Location                                                                        |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `load.php?lang=en&modules=jquery.uls.data&skin=vector-2022&version=1ey9x:1:578` |

##### `add` (`load.php?lang=en&modules=mediawiki.base&skin=vector-2022&version=13iwe:4:368`)

|      % |  Time | Samples | Caller        | Location                                                                                      |
| -----: | ----: | ------: | ------------- | --------------------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `load.php?lang=en&modules=wikibase.databox.fromWikidata&skin=vector-2022&version=9kykt:1:128` |

##### `(anonymous)` (`load.php?lang=en&modules=mediawiki.api&skin=vector-2022&version=1yqeu:1:193`)

|      % |  Time | Samples | Caller                                 | Location                                                                      |
| -----: | ----: | ------: | -------------------------------------- | ----------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `resources/src/mediawiki.api/index.js` | `load.php?lang=en&modules=mediawiki.api&skin=vector-2022&version=1yqeu:1:159` |

##### `init` (`load.php?lang=en&modules=ext.uls.preferences&skin=vector-2022&version=11u78:1:342`)

|      % |  Time | Samples | Caller           | Location                                                                            |
| -----: | ----: | ------: | ---------------- | ----------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `ULSPreferences` | `load.php?lang=en&modules=ext.uls.preferences&skin=vector-2022&version=11u78:1:163` |

##### `get` (`load.php?lang=en&modules=mediawiki.cookie&skin=vector-2022&version=spq95:1:902`)

|      % |  Time | Samples | Caller      | Location                                                                       |
| -----: | ----: | ------: | ----------- | ------------------------------------------------------------------------------ |
| 100.0% | 1.0ms |       1 | `sessionId` | `load.php?lang=en&modules=mediawiki.user&skin=vector-2022&version=163ne:3:628` |

##### `(anonymous)` (`load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:106:794`)

|      % |  Time | Samples | Caller | Location                                                               |
| -----: | ----: | ------: | ------ | ---------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `each` | `load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:105` |

##### `filter` (`load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:37:404`)

|      % |  Time | Samples | Caller | Location                                                                                  |
| -----: | ----: | ------: | ------ | ----------------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `init` | `load.php?lang=en&modules=mediawiki.page.watch.ajax&skin=vector-2022&version=1rpbn:3:897` |

##### `(anonymous)` (`load.php?lang=en&modules=jquery.spinner&skin=vector-2022&version=2h5sk:1:100`)

|      % |  Time | Samples | Caller        | Location                                                                      |
| -----: | ----: | ------: | ------------- | ----------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `load.php?lang=en&modules=jquery.spinner&skin=vector-2022&version=2h5sk:1:65` |

##### `(anonymous)` (`load.php?lang=en&modules=ext.centralNotice.choiceData&skin=vector-2022&version=ipiii:1:79`)

|      % |  Time | Samples | Caller      | Location                                                                     |
| -----: | ----: | ------: | ----------- | ---------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `runScript` | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59` |

##### `updateTooltipOnElement` (`load.php?lang=en&modules=mediawiki.util&skin=vector-2022&version=1vbcg:15:1080`)

|      % |  Time | Samples | Caller          | Location                                                                        |
| -----: | ----: | ------: | --------------- | ------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `updateTooltip` | `load.php?lang=en&modules=mediawiki.util&skin=vector-2022&version=1vbcg:16:593` |

##### `isXMLDoc` (`load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:915`)

|      % |  Time | Samples | Caller | Location                                                                 |
| -----: | ----: | ------: | ------ | ------------------------------------------------------------------------ |
| 100.0% | 1.0ms |       1 | `attr` | `load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:103:119` |

##### `createHTMLDocument` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location                                                                 |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------------------------ |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:132:282` |

##### `URL` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location                                                                                     |
| -----: | ----: | ------: | ------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `load.php?lang=en&modules=ext.visualEditor.targetLoader&skin=vector-2022&version=1m9dx:9:10` |

##### `setTimeout` (`<unknown>`)

|      % |  Time | Samples | Caller      | Location                                                                         |
| -----: | ----: | ------: | ----------- | -------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `sendEvent` | `load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:10:564` |

##### `flatIntoArray` (`<unknown>`)

|      % |  Time | Samples | Caller | Location    |
| -----: | ----: | ------: | ------ | ----------- |
| 100.0% | 1.0ms |       1 | `flat` | `<unknown>` |

##### `querySelector` (`<unknown>`)

|      % |  Time | Samples | Caller                  | Location                                                                         |
| -----: | ----: | ------: | ----------------------- | -------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `addPortletLinkHandler` | `load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:55:613` |

##### `remove` (`<unknown>`)

|      % |  Time | Samples | Caller             | Location                                                                         |
| -----: | ----: | ------: | ------------------ | -------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `toggleDocClasses` | `load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:44:524` |

##### `[Symbol.match]` (`<unknown>`)

|      % |  Time | Samples | Caller  | Location    |
| -----: | ----: | ------: | ------- | ----------- |
| 100.0% | 1.0ms |       1 | `match` | `<unknown>` |

##### `getComputedStyle` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location                  |
| -----: | ----: | ------: | ------------- | ------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `FormMetadata.js:3:11837` |

##### `stringSplitFast` (`<unknown>`)

|      % |  Time | Samples | Caller                    | Location                                           |
| -----: | ----: | ------: | ------------------------- | -------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `pathComponentsForAnchor` | `__InjectedScript_ReaderArticleFinder.js:12:19328` |

##### `sendBeacon` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location                                                                         |
| -----: | ----: | ------: | -------------- | -------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `doSendEvents` | `load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:10:181` |

##### `getBoundingClientRect` (`<unknown>`)

|      % |  Time | Samples | Caller                      | Location                                          |
| -----: | ----: | ------: | --------------------------- | ------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `cachedElementBoundingRect` | `__InjectedScript_ReaderArticleFinder.js:12:5336` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |   Time | Samples | Function                                         | Location                                                                      |
| ----: | -----: | ------: | ------------------------------------------------ | ----------------------------------------------------------------------------- |
| 27.4% | 28.0ms |      28 | `(anonymous)`                                    | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:558` |
| 25.4% | 26.0ms |      26 | `runScript`                                      | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59`  |
| 22.7% | 23.2ms |      12 | `unformattedArticleTextContentIncludingMetadata` | `__InjectedScript_ReaderArticleFinder.js:13:67861`                            |
| 15.7% | 16.0ms |      16 | `doPropagation`                                  | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254`  |
| 15.7% | 16.0ms |      16 | `flushCssBuffer`                                 | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:4:217`  |
| 14.7% | 15.0ms |      15 | `execute`                                        | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:868` |
| 12.7% | 12.9ms |       4 | `articleTitleInformation`                        | `__InjectedScript_ReaderArticleFinder.js:13:39662`                            |
| 12.7% | 12.9ms |       4 | `articleTitle`                                   | `__InjectedScript_ReaderArticleFinder.js:13:39565`                            |
| 11.7% | 12.0ms |      12 | `eval`                                           | `<unknown>`                                                                   |
| 11.7% | 12.0ms |      12 | `indirectEval`                                   | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:216` |
| 11.7% | 12.0ms |      12 | `asyncEvalTask`                                  | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:381` |
| 11.7% | 12.0ms |      12 | `(anonymous)`                                    | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:294` |
| 11.7% | 12.0ms |      12 | `(anonymous)`                                    | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:12:421` |
| 11.7% | 12.0ms |      12 | `mightThrow`                                     | `load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:44:918`       |
| 11.7% | 12.0ms |      12 | `(anonymous)`                                    | `load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:45:636`       |
| 10.8% | 11.0ms |      11 | `each`                                           | `load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:105`        |
| 10.8% | 11.0ms |      11 | `_collectMetadata`                               | `FormMetadata.js:3:78950`                                                     |
| 10.8% | 11.0ms |      11 | `formsAndMetadata`                               | `FormMetadata.js:3:82286`                                                     |
|  8.8% |  9.0ms |       9 | `_collectFormMetadata`                           | `FormMetadata.js:3:62833`                                                     |
|  8.3% |  8.5ms |       4 | `findExtraArticle`                               | `__InjectedScript_ReaderArticleFinder.js:13:55651`                            |

#### Categories

##### Standard library

|     % |   Time | Samples | Function                                              | Location                                           |
| ----: | -----: | ------: | ----------------------------------------------------- | -------------------------------------------------- |
| 22.7% | 23.2ms |      12 | `unformattedArticleTextContentIncludingMetadata`      | `__InjectedScript_ReaderArticleFinder.js:13:67861` |
| 12.7% | 12.9ms |       4 | `articleTitleInformation`                             | `__InjectedScript_ReaderArticleFinder.js:13:39662` |
| 12.7% | 12.9ms |       4 | `articleTitle`                                        | `__InjectedScript_ReaderArticleFinder.js:13:39565` |
| 11.7% | 12.0ms |      12 | `eval`                                                | `<unknown>`                                        |
| 10.8% | 11.0ms |      11 | `_collectMetadata`                                    | `FormMetadata.js:3:78950`                          |
| 10.8% | 11.0ms |      11 | `formsAndMetadata`                                    | `FormMetadata.js:3:82286`                          |
|  8.8% |  9.0ms |       9 | `_collectFormMetadata`                                | `FormMetadata.js:3:62833`                          |
|  8.3% |  8.5ms |       4 | `findExtraArticle`                                    | `__InjectedScript_ReaderArticleFinder.js:13:55651` |
|  6.9% |  7.0ms |       7 | `articleNode`                                         | `__InjectedScript_ReaderArticleFinder.js:13:8074`  |
|  6.3% |  6.5ms |       2 | `extraArticleNode`                                    | `__InjectedScript_ReaderArticleFinder.js:13:8749`  |
|  5.9% |  6.0ms |       6 | `forEach`                                             | `<unknown>`                                        |
|  4.9% |  5.0ms |       5 | `_isElementFollowedByForgotUserNameOrEmailAffordance` | `FormMetadata.js:3:19474`                          |
|  4.1% |  4.2ms |       2 | `sort`                                                | `<unknown>`                                        |
|  4.1% |  4.2ms |       2 | `normalizedElementTagName`                            | `__InjectedScript_ReaderArticleFinder.js:12:19601` |
|  4.1% |  4.2ms |       2 | `(anonymous)`                                         | `__InjectedScript_ReaderArticleFinder.js:12:25480` |
|  4.1% |  4.2ms |       2 | `findExtraArticleCandidateElements`                   | `__InjectedScript_ReaderArticleFinder.js:13:57439` |
|  3.9% |  4.0ms |       4 | `findArticleByVisualExamination`                      | `__InjectedScript_ReaderArticleFinder.js:13:63913` |
|  3.9% |  4.0ms |       4 | `isReaderModeAvailable`                               | `__InjectedScript_ReaderArticleFinder.js:13:1893`  |
|  3.2% |  3.2ms |       1 | `elementLooksLikePartOfACarousel`                     | `__InjectedScript_ReaderArticleFinder.js:12:8505`  |
|  3.2% |  3.2ms |       1 | `t`                                                   | `__InjectedScript_ReaderArticleFinder.js:13:56642` |

##### Ours

|     % |   Time | Samples | Function                            | Location                                                                        |
| ----: | -----: | ------: | ----------------------------------- | ------------------------------------------------------------------------------- |
| 27.4% | 28.0ms |      28 | `(anonymous)`                       | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:558`   |
| 25.4% | 26.0ms |      26 | `runScript`                         | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59`    |
| 15.7% | 16.0ms |      16 | `doPropagation`                     | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254`    |
| 15.7% | 16.0ms |      16 | `flushCssBuffer`                    | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:4:217`    |
| 14.7% | 15.0ms |      15 | `execute`                           | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:868`   |
| 11.7% | 12.0ms |      12 | `indirectEval`                      | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:216`   |
| 11.7% | 12.0ms |      12 | `asyncEvalTask`                     | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:381`   |
| 11.7% | 12.0ms |      12 | `(anonymous)`                       | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:294`   |
| 11.7% | 12.0ms |      12 | `(anonymous)`                       | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:12:421`   |
| 11.7% | 12.0ms |      12 | `mightThrow`                        | `load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:44:918`         |
| 11.7% | 12.0ms |      12 | `(anonymous)`                       | `load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:45:636`         |
| 10.8% | 11.0ms |      11 | `each`                              | `load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:105`          |
|  7.8% |  8.0ms |       8 | `resources/skins.vector.js/skin.js` | `load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:1:155` |
|  6.9% |  7.0ms |       7 | `main`                              | `load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:1:965` |
|  4.9% |  5.0ms |       5 | `getHeadingScrollOffset`            | `load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:5:840` |
|  4.9% |  5.0ms |       5 | `setupTableOfContents`              | `load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:6:197` |
|  4.9% |  5.0ms |       5 | `main`                              | `load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:7:660` |
|  3.9% |  4.0ms |       4 | `(anonymous)`                       | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:812`   |
|  3.9% |  4.0ms |       4 | `(program)`                         | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:1:1`      |
|  3.9% |  4.0ms |       4 | `addToHead`                         | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:3:909`    |

##### Native

|    % |  Time | Samples | Function                            | Location    |
| ---: | ----: | ------: | ----------------------------------- | ----------- |
| 5.9% | 6.0ms |       6 | `insertBefore`                      | `<unknown>` |
| 4.9% | 5.0ms |       5 | `getPropertyValue`                  | `<unknown>` |
| 3.2% | 3.2ms |       1 | `sortMerge`                         | `<unknown>` |
| 3.2% | 3.2ms |       1 | `sortMergeSort`                     | `<unknown>` |
| 2.0% | 2.0ms |       2 | `collectMatchingElementsInFlatTree` | `<unknown>` |
| 2.0% | 2.0ms |       2 | `evaluate`                          | `<unknown>` |
| 1.0% | 1.0ms |       1 | `sortCompact`                       | `<unknown>` |
| 1.0% | 1.0ms |       1 | `createHTMLDocument`                | `<unknown>` |
| 1.0% | 1.0ms |       1 | `URL`                               | `<unknown>` |
| 1.0% | 1.0ms |       1 | `setTimeout`                        | `<unknown>` |
| 1.0% | 1.0ms |       1 | `flatIntoArray`                     | `<unknown>` |
| 1.0% | 1.0ms |       1 | `querySelector`                     | `<unknown>` |
| 1.0% | 1.0ms |       1 | `remove`                            | `<unknown>` |
| 1.0% | 1.0ms |       1 | `bound processThumbs`               | `<unknown>` |
| 1.0% | 1.0ms |       1 | `[Symbol.match]`                    | `<unknown>` |
| 1.0% | 1.0ms |       1 | `bound setupEventHandlers`          | `<unknown>` |
| 1.0% | 1.0ms |       1 | `getComputedStyle`                  | `<unknown>` |
| 1.0% | 1.0ms |       1 | `stringSplitFast`                   | `<unknown>` |
| 1.0% | 1.0ms |       1 | `sendBeacon`                        | `<unknown>` |
| 1.0% | 1.0ms |       1 | `getBoundingClientRect`             | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (`load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:558`)

|     % |   Time | Samples | Callee          | Location                                                                      |
| ----: | -----: | ------: | --------------- | ----------------------------------------------------------------------------- |
| 57.1% | 16.0ms |      16 | `doPropagation` | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254`  |
| 42.9% | 12.0ms |      12 | `(anonymous)`   | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:294` |

##### `runScript` (`load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59`)

|     % |  Time | Samples | Callee                              | Location                                                                            |
| ----: | ----: | ------: | ----------------------------------- | ----------------------------------------------------------------------------------- |
| 30.8% | 8.0ms |       8 | `resources/skins.vector.js/skin.js` | `load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:1:155`     |
| 11.5% | 3.0ms |       3 | `(anonymous)`                       | `load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:1:57`               |
|  7.7% | 2.0ms |       2 | `index.js`                          | `load.php?lang=en&modules=ext.wikimediaEvents&skin=vector-2022&version=lu7fs:1:109` |
|  3.8% | 1.0ms |       1 | `resources/ext.popups/index.js`     | `load.php?lang=en&modules=ext.popups&skin=vector-2022&version=lo8hx:1:224`          |
|  3.8% | 1.0ms |       1 | `(anonymous)`                       | `load.php?lang=en&modules=jquery.uls.data&skin=vector-2022&version=1ey9x:1:66`      |

##### `unformattedArticleTextContentIncludingMetadata` (`__InjectedScript_ReaderArticleFinder.js:13:67861`)

|     % |   Time | Samples | Callee                   | Location                                           |
| ----: | -----: | ------: | ------------------------ | -------------------------------------------------- |
| 55.8% | 12.9ms |       4 | `articleTitle`           | `__InjectedScript_ReaderArticleFinder.js:13:39565` |
| 30.2% |  7.0ms |       7 | `articleNode`            | `__InjectedScript_ReaderArticleFinder.js:13:8074`  |
| 14.0% |  3.2ms |       1 | `adoptableMetadataBlock` | `__InjectedScript_ReaderArticleFinder.js:13:48923` |

##### `doPropagation` (`load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254`)

|     % |   Time | Samples | Callee    | Location                                                                      |
| ----: | -----: | ------: | --------- | ----------------------------------------------------------------------------- |
| 93.8% | 15.0ms |      15 | `execute` | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:868` |

##### `flushCssBuffer` (`load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:4:217`)

|     % |   Time | Samples | Callee        | Location                                                                      |
| ----: | -----: | ------: | ------------- | ----------------------------------------------------------------------------- |
| 75.0% | 12.0ms |      12 | `(anonymous)` | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:12:421` |
| 25.0% |  4.0ms |       4 | `newStyleTag` | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:4:59`   |

##### `execute` (`load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:868`)

|     % |   Time | Samples | Callee      | Location                                                                     |
| ----: | -----: | ------: | ----------- | ---------------------------------------------------------------------------- |
| 93.3% | 14.0ms |      14 | `runScript` | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59` |

##### `articleTitleInformation` (`__InjectedScript_ReaderArticleFinder.js:13:39662`)

|     % |  Time | Samples | Callee                     | Location                                           |
| ----: | ----: | ------: | -------------------------- | -------------------------------------------------- |
| 50.0% | 6.5ms |       2 | `extraArticleNode`         | `__InjectedScript_ReaderArticleFinder.js:13:8749`  |
| 25.0% | 3.2ms |       1 | `normalizedElementTagName` | `__InjectedScript_ReaderArticleFinder.js:12:19601` |
| 25.0% | 3.2ms |       1 | `domDistance`              | `__InjectedScript_ReaderArticleFinder.js:12:2553`  |

##### `articleTitle` (`__InjectedScript_ReaderArticleFinder.js:13:39565`)

|      % |   Time | Samples | Callee                    | Location                                           |
| -----: | -----: | ------: | ------------------------- | -------------------------------------------------- |
| 100.0% | 12.9ms |       4 | `articleTitleInformation` | `__InjectedScript_ReaderArticleFinder.js:13:39662` |

##### `eval` (`<unknown>`)

|    % |  Time | Samples | Callee      | Location                                                                                                 |
| ---: | ----: | ------: | ----------- | -------------------------------------------------------------------------------------------------------- |
| 8.3% | 1.0ms |       1 | `(program)` | `load.php?lang=en&modules=ext.visualEditor.desktopArticleTarget.init&skin=vector-2022&version=1xmtn:1:1` |
| 8.3% | 1.0ms |       1 | `(program)` | `load.php?lang=en&modules=mmv.bootstrap&skin=vector-2022&version=176u6:1:1`                              |

##### `indirectEval` (`load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:216`)

|      % |   Time | Samples | Callee | Location    |
| -----: | -----: | ------: | ------ | ----------- |
| 100.0% | 12.0ms |      12 | `eval` | `<unknown>` |

##### `asyncEvalTask` (`load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:381`)

|      % |   Time | Samples | Callee         | Location                                                                      |
| -----: | -----: | ------: | -------------- | ----------------------------------------------------------------------------- |
| 100.0% | 12.0ms |      12 | `indirectEval` | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:216` |

##### `(anonymous)` (`load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:294`)

|      % |   Time | Samples | Callee          | Location                                                                      |
| -----: | -----: | ------: | --------------- | ----------------------------------------------------------------------------- |
| 100.0% | 12.0ms |      12 | `asyncEvalTask` | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:381` |

##### `(anonymous)` (`load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:12:421`)

|      % |   Time | Samples | Callee      | Location                                                                     |
| -----: | -----: | ------: | ----------- | ---------------------------------------------------------------------------- |
| 100.0% | 12.0ms |      12 | `runScript` | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59` |

##### `mightThrow` (`load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:44:918`)

|     % |  Time | Samples | Callee                     | Location                                                                                  |
| ----: | ----: | ------: | -------------------------- | ----------------------------------------------------------------------------------------- |
| 33.3% | 4.0ms |       4 | `(anonymous)`              | `load.php?lang=en&modules=mediawiki.page.ready&skin=vector-2022&version=1et5k:1:977`      |
| 25.0% | 3.0ms |       3 | `(anonymous)`              | `load.php?lang=en&modules=mediawiki.page.ready&skin=vector-2022&version=1et5k:2:199`      |
|  8.3% | 1.0ms |       1 | `init`                     | `load.php?lang=en&modules=mediawiki.page.watch.ajax&skin=vector-2022&version=1rpbn:3:897` |
|  8.3% | 1.0ms |       1 | `(anonymous)`              | `load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:2:356`           |
|  8.3% | 1.0ms |       1 | `bound setupEventHandlers` | `<unknown>`                                                                               |

##### `(anonymous)` (`load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:45:636`)

|      % |   Time | Samples | Callee       | Location                                                                |
| -----: | -----: | ------: | ------------ | ----------------------------------------------------------------------- |
| 100.0% | 12.0ms |      12 | `mightThrow` | `load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:44:918` |

##### `each` (`load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:105`)

|     % |  Time | Samples | Callee        | Location                                                                                 |
| ----: | ----: | ------: | ------------- | ---------------------------------------------------------------------------------------- |
| 36.4% | 4.0ms |       4 | `(anonymous)` | `load.php?lang=en&modules=jquery.makeCollapsible&skin=vector-2022&version=1yvlc:3:722`   |
|  9.1% | 1.0ms |       1 | `(anonymous)` | `load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:106:794`                 |
|  9.1% | 1.0ms |       1 | `(anonymous)` | `load.php?lang=en&modules=mediawiki.util&skin=vector-2022&version=1vbcg:17:26`           |
|  9.1% | 1.0ms |       1 | `(anonymous)` | `load.php?lang=en&modules=ext.cite.ux-enhancements&skin=vector-2022&version=1cpqh:1:363` |
|  9.1% | 1.0ms |       1 | `(anonymous)` | `load.php?lang=en&modules=jquery.makeCollapsible&skin=vector-2022&version=1yvlc:2:91`    |

##### `_collectMetadata` (`FormMetadata.js:3:78950`)

|     % |  Time | Samples | Callee                               | Location                  |
| ----: | ----: | ------: | ------------------------------------ | ------------------------- |
| 81.8% | 9.0ms |       9 | `_collectFormMetadata`               | `FormMetadata.js:3:62833` |
|  9.1% | 1.0ms |       1 | `_logicalFormsInPage`                | `FormMetadata.js:3:27143` |
|  9.1% | 1.0ms |       1 | `_markFormIsBestForStreamlinedLogin` | `FormMetadata.js:3:77367` |

##### `formsAndMetadata` (`FormMetadata.js:3:82286`)

|      % |   Time | Samples | Callee             | Location                  |
| -----: | -----: | ------: | ------------------ | ------------------------- |
| 100.0% | 11.0ms |      11 | `_collectMetadata` | `FormMetadata.js:3:78950` |

##### `_collectFormMetadata` (`FormMetadata.js:3:62833`)

|     % |  Time | Samples | Callee                                                | Location                  |
| ----: | ----: | ------: | ----------------------------------------------------- | ------------------------- |
| 55.6% | 5.0ms |       5 | `_isElementFollowedByForgotUserNameOrEmailAffordance` | `FormMetadata.js:3:19474` |
| 22.2% | 2.0ms |       2 | `_collectControlMetadata`                             | `FormMetadata.js:3:46804` |
| 11.1% | 1.0ms |       1 | `(anonymous)`                                         | `FormMetadata.js:3:14331` |
| 11.1% | 1.0ms |       1 | `_trailingArgumentsForCollectControlMetadataFunction` | `FormMetadata.js:3:62267` |

##### `findExtraArticle` (`__InjectedScript_ReaderArticleFinder.js:13:55651`)

|     % |  Time | Samples | Callee                                        | Location                                           |
| ----: | ----: | ------: | --------------------------------------------- | -------------------------------------------------- |
| 50.0% | 4.2ms |       2 | `findExtraArticleCandidateElements`           | `__InjectedScript_ReaderArticleFinder.js:13:57439` |
| 38.2% | 3.2ms |       1 | `sortCandidateElementsInDescendingScoreOrder` | `__InjectedScript_ReaderArticleFinder.js:13:56628` |
| 11.8% | 1.0ms |       1 | `contentTextStyle`                            | `__InjectedScript_ReaderArticleFinder.js:13:9107`  |

##### `resources/skins.vector.js/skin.js` (`load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:1:155`)

|     % |  Time | Samples | Callee    | Location                                                                        |
| ----: | ----: | ------: | --------- | ------------------------------------------------------------------------------- |
| 87.5% | 7.0ms |       7 | `main`    | `load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:1:965` |
| 12.5% | 1.0ms |       1 | `require` | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:8:344`    |

##### `articleNode` (`__InjectedScript_ReaderArticleFinder.js:13:8074`)

|     % |  Time | Samples | Callee                                | Location                                           |
| ----: | ----: | ------: | ------------------------------------- | -------------------------------------------------- |
| 42.9% | 3.0ms |       3 | `findArticleBySearchingAllElements`   | `__InjectedScript_ReaderArticleFinder.js:13:54939` |
| 42.9% | 3.0ms |       3 | `adjustArticleNodeUpwardIfNecessary`  | `__InjectedScript_ReaderArticleFinder.js:13:4514`  |
| 14.3% | 1.0ms |       1 | `checkForIframeCoveringMostOfWebpage` | `__InjectedScript_ReaderArticleFinder.js:13:1658`  |

##### `main` (`load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:1:965`)

|     % |  Time | Samples | Callee          | Location                                                                         |
| ----: | ----: | ------: | --------------- | -------------------------------------------------------------------------------- |
| 71.4% | 5.0ms |       5 | `main`          | `load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:7:660`  |
| 14.3% | 1.0ms |       1 | `init`          | `load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:42:160` |
| 14.3% | 1.0ms |       1 | `dropdownMenus` | `load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:54:393` |

##### `extraArticleNode` (`__InjectedScript_ReaderArticleFinder.js:13:8749`)

|      % |  Time | Samples | Callee             | Location                                           |
| -----: | ----: | ------: | ------------------ | -------------------------------------------------- |
| 100.0% | 6.5ms |       2 | `findExtraArticle` | `__InjectedScript_ReaderArticleFinder.js:13:55651` |

##### `forEach` (`<unknown>`)

|     % |  Time | Samples | Callee        | Location                                                                                       |
| ----: | ----: | ------: | ------------- | ---------------------------------------------------------------------------------------------- |
| 16.7% | 1.0ms |       1 | `(anonymous)` | `load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:56:287`               |
| 16.7% | 1.0ms |       1 | `(anonymous)` | `load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:40:292`               |
| 16.7% | 1.0ms |       1 | `(anonymous)` | `load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:54:529`               |
| 16.7% | 1.0ms |       1 | `(anonymous)` | `load.php?lang=en&modules=ext.quicksurveys.lib&skin=vector-2022&version=kdhjm:11:203`          |
| 16.7% | 1.0ms |       1 | `(anonymous)` | `load.php?lang=en&modules=skins.vector.clientPreferences&skin=vector-2022&version=1vmjt:9:688` |

##### `_isElementFollowedByForgotUserNameOrEmailAffordance` (`FormMetadata.js:3:19474`)

|     % |  Time | Samples | Callee                                                         | Location                  |
| ----: | ----: | ------: | -------------------------------------------------------------- | ------------------------- |
| 60.0% | 3.0ms |       3 | `_stringsToEvaluateToDetermineIfElementIsFollowedByAffordance` | `FormMetadata.js:3:21490` |
| 40.0% | 2.0ms |       2 | `stringsMatchAnyRegularExpressions`                            | `FormMetadata.js:3:8216`  |

##### `getHeadingScrollOffset` (`load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:5:840`)

|      % |  Time | Samples | Callee             | Location    |
| -----: | ----: | ------: | ------------------ | ----------- |
| 100.0% | 5.0ms |       5 | `getPropertyValue` | `<unknown>` |

##### `setupTableOfContents` (`load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:6:197`)

|      % |  Time | Samples | Callee                   | Location                                                                        |
| -----: | ----: | ------: | ------------------------ | ------------------------------------------------------------------------------- |
| 100.0% | 5.0ms |       5 | `getHeadingScrollOffset` | `load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:5:840` |

##### `main` (`load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:7:660`)

|      % |  Time | Samples | Callee                 | Location                                                                        |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 5.0ms |       5 | `setupTableOfContents` | `load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:6:197` |

##### `sort` (`<unknown>`)

|     % |  Time | Samples | Callee          | Location    |
| ----: | ----: | ------: | --------------- | ----------- |
| 76.4% | 3.2ms |       1 | `sortMergeSort` | `<unknown>` |
| 23.6% | 1.0ms |       1 | `sortCompact`   | `<unknown>` |

##### `(anonymous)` (`__InjectedScript_ReaderArticleFinder.js:12:25480`)

|     % |  Time | Samples | Callee                            | Location                                           |
| ----: | ----: | ------: | --------------------------------- | -------------------------------------------------- |
| 76.4% | 3.2ms |       1 | `elementLooksLikePartOfACarousel` | `__InjectedScript_ReaderArticleFinder.js:12:8505`  |
| 23.6% | 1.0ms |       1 | `CandidateElement`                | `__InjectedScript_ReaderArticleFinder.js:12:25119` |

##### `findExtraArticleCandidateElements` (`__InjectedScript_ReaderArticleFinder.js:13:57439`)

|      % |  Time | Samples | Callee        | Location                                           |
| -----: | ----: | ------: | ------------- | -------------------------------------------------- |
| 100.0% | 4.2ms |       2 | `(anonymous)` | `__InjectedScript_ReaderArticleFinder.js:12:25480` |

##### `findArticleByVisualExamination` (`__InjectedScript_ReaderArticleFinder.js:13:63913`)

|     % |  Time | Samples | Callee                                 | Location                                           |
| ----: | ----: | ------: | -------------------------------------- | -------------------------------------------------- |
| 50.0% | 2.0ms |       2 | `elementContainsEnoughTextOfSameStyle` | `__InjectedScript_ReaderArticleFinder.js:13:62686` |
| 25.0% | 1.0ms |       1 | `CandidateElement`                     | `__InjectedScript_ReaderArticleFinder.js:12:25119` |
| 25.0% | 1.0ms |       1 | `shouldDisqualifyForDeepLinking`       | `__InjectedScript_ReaderArticleFinder.js:12:34645` |

##### `isReaderModeAvailable` (`__InjectedScript_ReaderArticleFinder.js:13:1893`)

|      % |  Time | Samples | Callee                           | Location                                           |
| -----: | ----: | ------: | -------------------------------- | -------------------------------------------------- |
| 100.0% | 4.0ms |       4 | `findArticleByVisualExamination` | `__InjectedScript_ReaderArticleFinder.js:13:63913` |

##### `(anonymous)` (`load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:812`)

|     % |  Time | Samples | Callee     | Location                                                                      |
| ----: | ----: | ------: | ---------- | ----------------------------------------------------------------------------- |
| 50.0% | 2.0ms |       2 | `load`     | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:18:946` |
| 25.0% | 1.0ms |       1 | `register` | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:249` |

##### `(program)` (`load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:1:1`)

|      % |  Time | Samples | Callee        | Location                                                                      |
| -----: | ----: | ------: | ------------- | ----------------------------------------------------------------------------- |
| 100.0% | 4.0ms |       4 | `(anonymous)` | `load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:812` |

##### `addToHead` (`load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:3:909`)

|      % |  Time | Samples | Callee         | Location    |
| -----: | ----: | ------: | -------------- | ----------- |
| 100.0% | 4.0ms |       4 | `insertBefore` | `<unknown>` |

##### `sortMerge` (`<unknown>`)

|      % |  Time | Samples | Callee | Location                                           |
| -----: | ----: | ------: | ------ | -------------------------------------------------- |
| 100.0% | 3.2ms |       1 | `t`    | `__InjectedScript_ReaderArticleFinder.js:13:56642` |

##### `sortMergeSort` (`<unknown>`)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 3.2ms |       1 | `sortMerge` | `<unknown>` |

##### `bound processThumbs` (`<unknown>`)

|      % |  Time | Samples | Callee          | Location                                                                      |
| -----: | ----: | ------: | --------------- | ----------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `processThumbs` | `load.php?lang=en&modules=mmv.bootstrap&skin=vector-2022&version=176u6:4:425` |

##### `bound setupEventHandlers` (`<unknown>`)

|      % |  Time | Samples | Callee               | Location                                                                      |
| -----: | ----: | ------: | -------------------- | ----------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `setupEventHandlers` | `load.php?lang=en&modules=mmv.bootstrap&skin=vector-2022&version=176u6:10:19` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 9.8% | 10.0ms |      10 | `eval` ← `indirectEval` (`load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:216`) ← `asyncEvalTask` (15:381) ← `(anonymous)` (15:294) ← `(anonymous)` (22:558)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 4.9% |  5.0ms |       5 | `getPropertyValue` ← `getHeadingScrollOffset` (`load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:5:840`) ← `setupTableOfContents` (6:197) ← `main` (7:660) ← `main` (1:965) ← `resources/skins.vector.js/skin.js` (1:155) ← `runScript` (`load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59`) ← `(anonymous)` (12:421) ← `flushCssBuffer` (4:217)                                                                                                                                                                                                                                                                                    |
| 3.9% |  4.0ms |       4 | `insertBefore` ← `addToHead` (`load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:3:909`) ← `newStyleTag` (4:59) ← `flushCssBuffer` (4:217)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 3.2% |  3.2ms |       1 | `elementLooksLikePartOfACarousel` (`__InjectedScript_ReaderArticleFinder.js:12:8505`) ← `(anonymous)` (12:25480) ← `findExtraArticleCandidateElements` (13:57439) ← `findExtraArticle` (13:55651) ← `extraArticleNode` (13:8749) ← `articleTitleInformation` (13:39662) ← `articleTitle` (13:39565) ← `unformattedArticleTextContentIncludingMetadata` (13:67861)                                                                                                                                                                                                                                                                                                                    |
| 3.2% |  3.2ms |       1 | `t` (`__InjectedScript_ReaderArticleFinder.js:13:56642`) ← `sortMerge` ← `sortMergeSort` ← `sort` ← `sortCandidateElementsInDescendingScoreOrder` (`__InjectedScript_ReaderArticleFinder.js:13:56628`) ← `findExtraArticle` (13:55651) ← `extraArticleNode` (13:8749) ← `articleTitleInformation` (13:39662) ← `articleTitle` (13:39565) ← `unformattedArticleTextContentIncludingMetadata` (13:67861)                                                                                                                                                                                                                                                                               |
| 3.2% |  3.2ms |       1 | `normalizedElementTagName` (`__InjectedScript_ReaderArticleFinder.js:12:19601`) ← `articleTitleInformation` (13:39662) ← `articleTitle` (13:39565) ← `unformattedArticleTextContentIncludingMetadata` (13:67861)                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 3.2% |  3.2ms |       1 | `domDistance` (`__InjectedScript_ReaderArticleFinder.js:12:2553`) ← `articleTitleInformation` (13:39662) ← `articleTitle` (13:39565) ← `unformattedArticleTextContentIncludingMetadata` (13:67861)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 3.2% |  3.2ms |       1 | `trimmedInnerTextIgnoringTextTransform` (`__InjectedScript_ReaderArticleFinder.js:12:6561`) ← `findArticleBylineElementWithoutRejection` (13:50372) ← `findArticleBylineElement` (13:50186) ← `updateArticleBylineAndDateElements` (13:53902) ← `updateArticleBylineAndDateElementsIfNecessary` (13:53699) ← `adoptableMetadataBlock` (13:48923) ← `unformattedArticleTextContentIncludingMetadata` (13:67861)                                                                                                                                                                                                                                                                       |
| 2.0% |  2.0ms |       2 | `insertBefore` ← `(anonymous)` (`load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:77:868`) ← `domManip` (74:285) ← `(anonymous)` (79:610) ← `(anonymous)` (`load.php?lang=en&modules=jquery.makeCollapsible&skin=vector-2022&version=1yvlc:3:722`) ← `each` (`load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:105`) ← `(anonymous)` (`load.php?lang=en&modules=jquery.makeCollapsible&skin=vector-2022&version=1yvlc:3:674`) ← `(anonymous)` (`load.php?lang=en&modules=mediawiki.page.ready&skin=vector-2022&version=1et5k:1:977`) ← `mightThrow` (`load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:44:918`) ← `(anonymous)` (45:636) |
| 2.0% |  2.0ms |       2 | `stringsMatchAnyRegularExpressions` (`FormMetadata.js:3:8216`) ← `_isElementFollowedByForgotUserNameOrEmailAffordance` (3:19474) ← `_collectFormMetadata` (3:62833) ← `_collectMetadata` (3:78950) ← `formsAndMetadata` (3:82286)                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.0% |  1.0ms |       1 | `(anonymous)` (`load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:812`) ← `(program)` (1:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.0% |  1.0ms |       1 | `register` (`load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:249`) ← `(anonymous)` (22:812) ← `(program)` (1:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.0% |  1.0ms |       1 | `parse` ← `load` (`load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:20:748`) ← `init` (20:645) ← `work` (16:424) ← `enqueue` (10:255) ← `load` (18:946) ← `(anonymous)` (22:812) ← `(program)` (1:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.0% |  1.0ms |       1 | `sortCompact` ← `sort` ← `sortQuery` (`load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:13:33`) ← `doRequest` (13:755) ← `batchRequest` (13:660) ← `work` (16:424) ← `enqueue` (10:255) ← `load` (18:946) ← `(anonymous)` (22:812) ← `(program)` (1:1)                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.0% |  1.0ms |       1 | `doPropagation` (`load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254`) ← `(anonymous)` (22:558)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.0% |  1.0ms |       1 | `(anonymous)` (`load.php?lang=en&modules=ext.visualEditor.desktopArticleTarget.init&skin=vector-2022&version=1xmtn:1:24`) ← `impl` (`load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:18:205`) ← `(program)` (`load.php?lang=en&modules=ext.visualEditor.desktopArticleTarget.init&skin=vector-2022&version=1xmtn:1:1`) ← `eval` ← `indirectEval` (`load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:216`) ← `asyncEvalTask` (15:381) ← `(anonymous)` (15:294) ← `(anonymous)` (22:558)                                                                                                                                                   |
| 1.0% |  1.0ms |       1 | `(anonymous)` (`load.php?lang=en&modules=mmv.bootstrap&skin=vector-2022&version=176u6:1:24`) ← `impl` (`load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:18:205`) ← `(program)` (`load.php?lang=en&modules=mmv.bootstrap&skin=vector-2022&version=176u6:1:1`) ← `eval` ← `indirectEval` (`load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:216`) ← `asyncEvalTask` (15:381) ← `(anonymous)` (15:294) ← `(anonymous)` (22:558)                                                                                                                                                                                                             |
| 1.0% |  1.0ms |       1 | `each` (`load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:105`) ← `(anonymous)` (1:420) ← `(anonymous)` (1:92) ← `(anonymous)` (1:57) ← `runScript` (`load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59`) ← `execute` (10:868) ← `doPropagation` (5:254) ← `(anonymous)` (22:558)                                                                                                                                                                                                                                                                                                                                                           |
| 1.0% |  1.0ms |       1 | `createOptions` (`load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:41:604`) ← `(anonymous)` (41:751) ← `Deferred` (43:832) ← `(anonymous)` (1:420) ← `(anonymous)` (1:92) ← `(anonymous)` (1:57) ← `runScript` (`load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59`) ← `execute` (10:868) ← `doPropagation` (5:254) ← `(anonymous)` (22:558)                                                                                                                                                                                                                                                                                                  |
| 1.0% |  1.0ms |       1 | `createHTMLDocument` ← `(anonymous)` (`load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:132:282`) ← `(anonymous)` (1:420) ← `(anonymous)` (1:92) ← `(anonymous)` (1:57) ← `runScript` (`load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59`) ← `execute` (10:868) ← `doPropagation` (5:254) ← `(anonymous)` (22:558)                                                                                                                                                                                                                                                                                                                           |
