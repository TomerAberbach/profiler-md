# CPU profile diff

Took 101.6ms → 102.2ms (+0.55ms, +0.5%) over 89 samples → 91 samples (1.1ms per sample).

| Category         | Change |   Delta |             % |            Time | Samples |
| ---------------- | -----: | ------: | ------------: | --------------: | ------: |
| Standard library |  -7.3% | -3.45ms | 46.9% → 43.2% | 47.6ms → 44.2ms | 35 → 33 |
| Ours             | -11.4% | -4.00ms | 34.4% → 30.3% | 35.0ms → 31.0ms | 35 → 31 |
| Native           | +42.1% | +8.00ms | 18.7% → 26.4% | 19.0ms → 27.0ms | 19 → 27 |

Paths starting with `./` or `../` are relative to `https://en.wikipedia.org/`.

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|  Change |   Delta |           % |          Time | Samples | Function                            | Location                                                                                                      |
| ------: | ------: | ----------: | ------------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| +323.4% | +3.23ms | 1.0% → 4.1% | 1.0ms → 4.2ms |   1 → 2 | `normalizedElementTagName`          | `__InjectedScript_ReaderArticleFinder.js:12:19601`                                                            |
|     new | +3.23ms | 0.0% → 3.2% |   0ms → 3.2ms |   0 → 1 | `elementLooksLikePartOfACarousel`   | `__InjectedScript_ReaderArticleFinder.js:12:8505`                                                             |
|     new | +3.23ms | 0.0% → 3.2% |   0ms → 3.2ms |   0 → 1 | `t`                                 | `__InjectedScript_ReaderArticleFinder.js:13:56642`                                                            |
|     new | +3.23ms | 0.0% → 3.2% |   0ms → 3.2ms |   0 → 1 | `domDistance`                       | `__InjectedScript_ReaderArticleFinder.js:12:2553`                                                             |
|  +50.0% | +2.00ms | 3.9% → 5.9% | 4.0ms → 6.0ms |   4 → 6 | `insertBefore`                      | `<unknown>`                                                                                                   |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `register`                          | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:249`                             |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `(anonymous)`                       | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:106:794`                                  |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `execute`                           | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:868`                             |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `each`                              | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:105`                                    |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `(anonymous)`                       | `./w/load.php?lang=en&modules=mediawiki.page.ready&skin=vector-2022&version=1et5k:1:613`                      |
|  +25.0% | +1.00ms | 3.9% → 4.9% | 4.0ms → 5.0ms |   4 → 5 | `getPropertyValue`                  | `<unknown>`                                                                                                   |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `(anonymous)`                       | `./w/load.php?lang=en&modules=mmv.bootstrap&skin=vector-2022&version=176u6:1:24`                              |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `add`                               | `./w/load.php?lang=en&modules=mediawiki.base&skin=vector-2022&version=13iwe:4:368`                            |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `(anonymous)`                       | `./w/load.php?lang=en&modules=ext.popups.main&skin=vector-2022&version=18lyf:1:5743`                          |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `(anonymous)`                       | `./w/load.php?lang=en&modules=jquery.makeCollapsible&skin=vector-2022&version=1yvlc:2:91`                     |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `(anonymous)`                       | `./w/load.php?lang=en&modules=ext.visualEditor.desktopArticleTarget.init&skin=vector-2022&version=1xmtn:1:24` |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `(anonymous)`                       | `FormMetadata.js:3:77436`                                                                                     |
| +100.0% | +1.00ms | 1.0% → 2.0% | 1.0ms → 2.0ms |   1 → 2 | `collectMatchingElementsInFlatTree` | `<unknown>`                                                                                                   |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `getVisibleNonWhitespaceTextNodes`  | `__InjectedScript_ReaderArticleFinder.js:12:13801`                                                            |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `(anonymous)`                       | `__InjectedScript_ReaderArticleFinder.js:12:26535`                                                            |

##### Standard library

|  Change |   Delta |           % |          Time | Samples | Function                                        | Location                                           |
| ------: | ------: | ----------: | ------------: | ------: | ----------------------------------------------- | -------------------------------------------------- |
| +323.4% | +3.23ms | 1.0% → 4.1% | 1.0ms → 4.2ms |   1 → 2 | `normalizedElementTagName`                      | `__InjectedScript_ReaderArticleFinder.js:12:19601` |
|     new | +3.23ms | 0.0% → 3.2% |   0ms → 3.2ms |   0 → 1 | `elementLooksLikePartOfACarousel`               | `__InjectedScript_ReaderArticleFinder.js:12:8505`  |
|     new | +3.23ms | 0.0% → 3.2% |   0ms → 3.2ms |   0 → 1 | `t`                                             | `__InjectedScript_ReaderArticleFinder.js:13:56642` |
|     new | +3.23ms | 0.0% → 3.2% |   0ms → 3.2ms |   0 → 1 | `domDistance`                                   | `__InjectedScript_ReaderArticleFinder.js:12:2553`  |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `(anonymous)`                                   | `FormMetadata.js:3:77436`                          |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `getVisibleNonWhitespaceTextNodes`              | `__InjectedScript_ReaderArticleFinder.js:12:13801` |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `(anonymous)`                                   | `__InjectedScript_ReaderArticleFinder.js:12:26535` |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `adjustArticleNodeUpwardIfNecessary`            | `__InjectedScript_ReaderArticleFinder.js:13:4514`  |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `add`                                           | `<unknown>`                                        |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `stripCommonPrefix`                             | `FormMetadata.js:3:6253`                           |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `autocompleteTokens`                            | `FormMetadata.js:3:5183`                           |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `_isAutoFillableTextField`                      | `FormMetadata.js:3:38801`                          |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `_collectStringFromNodeForPageScan`             | `FormMetadata.js:3:18053`                          |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `pathFromAnchorWithoutLeadingSlash`             | `FormMetadata.js:3:8339`                           |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `pointsForDominantIframeHitTest`                | `__InjectedScript_ReaderArticleFinder.js:13:1191`  |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `scoreMultiplierForElementTagNameAndAttributes` | `__InjectedScript_ReaderArticleFinder.js:12:9696`  |

##### Ours

| Change |   Delta |           % |        Time | Samples | Function                 | Location                                                                                                      |
| -----: | ------: | ----------: | ----------: | ------: | ------------------------ | ------------------------------------------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `register`               | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:249`                             |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `(anonymous)`            | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:106:794`                                  |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `execute`                | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:868`                             |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `each`                   | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:105`                                    |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `(anonymous)`            | `./w/load.php?lang=en&modules=mediawiki.page.ready&skin=vector-2022&version=1et5k:1:613`                      |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `(anonymous)`            | `./w/load.php?lang=en&modules=mmv.bootstrap&skin=vector-2022&version=176u6:1:24`                              |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `add`                    | `./w/load.php?lang=en&modules=mediawiki.base&skin=vector-2022&version=13iwe:4:368`                            |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `(anonymous)`            | `./w/load.php?lang=en&modules=ext.popups.main&skin=vector-2022&version=18lyf:1:5743`                          |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `(anonymous)`            | `./w/load.php?lang=en&modules=jquery.makeCollapsible&skin=vector-2022&version=1yvlc:2:91`                     |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `(anonymous)`            | `./w/load.php?lang=en&modules=ext.visualEditor.desktopArticleTarget.init&skin=vector-2022&version=1xmtn:1:24` |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `createOptions`          | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:41:604`                                   |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `sortDependencies`       | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:6:612`                              |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `(anonymous)`            | `./w/load.php?lang=en&modules=mediawiki.api&skin=vector-2022&version=1yqeu:1:193`                             |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `init`                   | `./w/load.php?lang=en&modules=ext.uls.preferences&skin=vector-2022&version=11u78:1:342`                       |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `get`                    | `./w/load.php?lang=en&modules=mediawiki.cookie&skin=vector-2022&version=spq95:1:902`                          |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `filter`                 | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:37:404`                                   |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `(anonymous)`            | `./w/load.php?lang=en&modules=jquery.spinner&skin=vector-2022&version=2h5sk:1:100`                            |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `updateTooltipOnElement` | `./w/load.php?lang=en&modules=mediawiki.util&skin=vector-2022&version=1vbcg:15:1080`                          |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `isXMLDoc`               | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:915`                                    |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `dataAttr`               | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:51:398`                                   |

##### Native

|  Change |   Delta |           % |          Time | Samples | Function                            | Location    |
| ------: | ------: | ----------: | ------------: | ------: | ----------------------------------- | ----------- |
|  +50.0% | +2.00ms | 3.9% → 5.9% | 4.0ms → 6.0ms |   4 → 6 | `insertBefore`                      | `<unknown>` |
|  +25.0% | +1.00ms | 3.9% → 4.9% | 4.0ms → 5.0ms |   4 → 5 | `getPropertyValue`                  | `<unknown>` |
| +100.0% | +1.00ms | 1.0% → 2.0% | 1.0ms → 2.0ms |   1 → 2 | `collectMatchingElementsInFlatTree` | `<unknown>` |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `sortCompact`                       | `<unknown>` |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `URL`                               | `<unknown>` |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `flatIntoArray`                     | `<unknown>` |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `querySelector`                     | `<unknown>` |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `[Symbol.match]`                    | `<unknown>` |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `getComputedStyle`                  | `<unknown>` |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `stringSplitFast`                   | `<unknown>` |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `sendBeacon`                        | `<unknown>` |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `getBoundingClientRect`             | `<unknown>` |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |   Delta |           % |          Time | Samples | Function                                        | Location                                                                                               |
| ------: | ------: | ----------: | ------------: | ------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| removed | -5.21ms | 5.1% → 0.0% |   5.2ms → 0ms |   1 → 0 | `levenshteinDistance`                           | `__InjectedScript_ReaderArticleFinder.js:12:6770`                                                      |
| removed | -5.21ms | 5.1% → 0.0% |   5.2ms → 0ms |   1 → 0 | `updateArticleBylineAndDateElementsIfNecessary` | `__InjectedScript_ReaderArticleFinder.js:13:53699`                                                     |
|  -37.9% | -1.97ms | 5.1% → 3.2% | 5.2ms → 3.2ms |       1 | `trimmedInnerTextIgnoringTextTransform`         | `__InjectedScript_ReaderArticleFinder.js:12:6561`                                                      |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `(anonymous)`                                   | `./wiki/Profiling_(computer_programming):6:19`                                                         |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `resolveIndex`                                  | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:352`                      |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `load`                                          | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:20:748`                      |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `splitModuleKey`                                | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:720`                      |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `(anonymous)`                                   | `./w/load.php?lang=en&modules=ext.quicksurveys.lib&skin=vector-2022&version=kdhjm:1:24 → 11:203`       |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `(anonymous)`                                   | `./w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:1:24`                     |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `(anonymous)`                                   | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:1:420`                             |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `(anonymous)`                                   | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:46:782`                            |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `(anonymous)`                                   | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:37:790`                            |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `add`                                           | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:42:286`                            |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `jar.js`                                        | `./w/load.php?lang=en&modules=mediawiki.cookie&skin=vector-2022&version=spq95:3:20`                    |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `(anonymous)`                                   | `./w/load.php?lang=en&modules=ext.visualEditor.core.utils.parsing&skin=vector-2022&version=962r8:1:86` |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `Title.js`                                      | `./w/load.php?lang=en&modules=mediawiki.Title&skin=vector-2022&version=1fg2m:1:105`                    |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `eventSender.js`                                | `./w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:10:28`                    |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `forEach`                                       | `<unknown>`                                                                                            |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `buildEvent`                                    | `./w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:16:842`                   |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `isInSample`                                    | `./w/load.php?lang=en&modules=ext.wikimediaEvents&skin=vector-2022&version=lu7fs:28:619`               |

##### Standard library

|  Change |   Delta |           % |          Time | Samples | Function                                           | Location                                           |
| ------: | ------: | ----------: | ------------: | ------: | -------------------------------------------------- | -------------------------------------------------- |
| removed | -5.21ms | 5.1% → 0.0% |   5.2ms → 0ms |   1 → 0 | `levenshteinDistance`                              | `__InjectedScript_ReaderArticleFinder.js:12:6770`  |
| removed | -5.21ms | 5.1% → 0.0% |   5.2ms → 0ms |   1 → 0 | `updateArticleBylineAndDateElementsIfNecessary`    | `__InjectedScript_ReaderArticleFinder.js:13:53699` |
|  -37.9% | -1.97ms | 5.1% → 3.2% | 5.2ms → 3.2ms |       1 | `trimmedInnerTextIgnoringTextTransform`            | `__InjectedScript_ReaderArticleFinder.js:12:6561`  |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `forEach`                                          | `<unknown>`                                        |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `exec`                                             | `<unknown>`                                        |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `(anonymous)`                                      | `FormMetadata.js:3:16812`                          |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `(anonymous)`                                      | `FormMetadata.js:3:11837`                          |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `_createLogicalFormsForControls`                   | `FormMetadata.js:3:23832`                          |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `_findHiddenUsernameElement`                       | `FormMetadata.js:3:75498`                          |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `_looksLikeOneTimeCodeField`                       | `FormMetadata.js:3:42732`                          |
|  -33.3% | -1.00ms | 3.0% → 2.0% | 3.0ms → 2.0ms |   3 → 2 | `stringsMatchAnyRegularExpressions`                | `FormMetadata.js:3:8216`                           |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `Set`                                              | `<unknown>`                                        |
|  -50.0% | -1.00ms | 2.0% → 1.0% | 2.0ms → 1.0ms |   2 → 1 | `cachedElementBoundingRect`                        | `__InjectedScript_ReaderArticleFinder.js:12:5336`  |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `usableTextNodesInElement`                         | `__InjectedScript_ReaderArticleFinder.js:12:29085` |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `fontSizeFromComputedStyle`                        | `__InjectedScript_ReaderArticleFinder.js:12:2819`  |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `elementIsHidingContentDueToContentVisibilityAuto` | `__InjectedScript_ReaderArticleFinder.js:12:5112`  |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `scoreDensity`                                     | `__InjectedScript_ReaderArticleFinder.js:12:28071` |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `push`                                             | `<unknown>`                                        |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `hasClassMatchingRegexp`                           | `__InjectedScript_ReaderArticleFinder.js:12:18852` |

##### Ours

|  Change |   Delta |           % |        Time | Samples | Function         | Location                                                                                               |
| ------: | ------: | ----------: | ----------: | ------: | ---------------- | ------------------------------------------------------------------------------------------------------ |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)`    | `./wiki/Profiling_(computer_programming):6:19`                                                         |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `resolveIndex`   | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:352`                      |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `load`           | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:20:748`                      |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `splitModuleKey` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:720`                      |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)`    | `./w/load.php?lang=en&modules=ext.quicksurveys.lib&skin=vector-2022&version=kdhjm:1:24 → 11:203`       |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)`    | `./w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:1:24`                     |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)`    | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:1:420`                             |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)`    | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:46:782`                            |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)`    | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:37:790`                            |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `add`            | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:42:286`                            |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `jar.js`         | `./w/load.php?lang=en&modules=mediawiki.cookie&skin=vector-2022&version=spq95:3:20`                    |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)`    | `./w/load.php?lang=en&modules=ext.visualEditor.core.utils.parsing&skin=vector-2022&version=962r8:1:86` |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `Title.js`       | `./w/load.php?lang=en&modules=mediawiki.Title&skin=vector-2022&version=1fg2m:1:105`                    |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `eventSender.js` | `./w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:10:28`                    |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `buildEvent`     | `./w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:16:842`                   |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `isInSample`     | `./w/load.php?lang=en&modules=ext.wikimediaEvents&skin=vector-2022&version=lu7fs:28:619`               |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)`    | `./w/load.php?lang=en&modules=ext.cite.ux-enhancements&skin=vector-2022&version=1cpqh:4:23`            |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `buildFragment`  | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:59:231`                            |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)`    | `./w/load.php?lang=en&modules=ext.uls.interface&skin=vector-2022&version=pe1oy:1:171`                  |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `fireWith`       | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:43:150`                            |

##### Native

|  Change |   Delta |           % |        Time | Samples | Function                   | Location    |
| ------: | ------: | ----------: | ----------: | ------: | -------------------------- | ----------- |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `setAttribute`             | `<unknown>` |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `bound setupEventHandlers` | `<unknown>` |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `addEventListener`         | `<unknown>` |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `nodeAtPoint`              | `<unknown>` |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `bound `                   | `<unknown>` |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `normalizedElementTagName` (`__InjectedScript_ReaderArticleFinder.js:12:19601`)

|  Change |   Delta |      % |          Time | Samples | Location                                     |
| ------: | ------: | -----: | ------------: | ------: | -------------------------------------------- |
| +323.4% | +3.23ms | 100.0% | 1.0ms → 4.2ms |   1 → 2 | `__InjectedScript_ReaderArticleFinder.js:12` |

##### `elementLooksLikePartOfACarousel` (`__InjectedScript_ReaderArticleFinder.js:12:8505`)

| Change |   Delta |             % |        Time | Samples | Location                                     |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------------------------- |
|    new | +3.23ms | 0.0% → 100.0% | 0ms → 3.2ms |   0 → 1 | `__InjectedScript_ReaderArticleFinder.js:12` |

##### `t` (`__InjectedScript_ReaderArticleFinder.js:13:56642`)

| Change |   Delta |             % |        Time | Samples | Location                                     |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------------------------- |
|    new | +3.23ms | 0.0% → 100.0% | 0ms → 3.2ms |   0 → 1 | `__InjectedScript_ReaderArticleFinder.js:13` |

##### `register` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:249`)

| Change |   Delta |             % |        Time | Samples | Location                                                                      |
| -----: | ------: | ------------: | ----------: | ------: | ----------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:106:794`)

| Change |   Delta |             % |        Time | Samples | Location                                                                 |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------------------------------------------ |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:107` |

##### `execute` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:868`)

| Change |   Delta |             % |        Time | Samples | Location                                                                      |
| -----: | ------: | ------------: | ----------: | ------: | ----------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:12` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=ext.popups.main&skin=vector-2022&version=18lyf:1:5743`)

| Change |   Delta |             % |        Time | Samples | Location                                                                        |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `./w/load.php?lang=en&modules=ext.popups.main&skin=vector-2022&version=18lyf:1` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=jquery.makeCollapsible&skin=vector-2022&version=1yvlc:2:91`)

| Change |   Delta |             % |        Time | Samples | Location                                                                               |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `./w/load.php?lang=en&modules=jquery.makeCollapsible&skin=vector-2022&version=1yvlc:2` |

##### `(anonymous)` (`FormMetadata.js:3:77436`)

| Change |   Delta |             % |        Time | Samples | Location            |
| -----: | ------: | ------------: | ----------: | ------: | ------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `FormMetadata.js:3` |

##### `(anonymous)` (`__InjectedScript_ReaderArticleFinder.js:12:26535`)

| Change |   Delta |             % |        Time | Samples | Location                                     |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `__InjectedScript_ReaderArticleFinder.js:12` |

##### `_isAutoFillableTextField` (`FormMetadata.js:3:38801`)

| Change |   Delta |             % |        Time | Samples | Location            |
| -----: | ------: | ------------: | ----------: | ------: | ------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `FormMetadata.js:3` |

##### `pathFromAnchorWithoutLeadingSlash` (`FormMetadata.js:3:8339`)

| Change |   Delta |             % |        Time | Samples | Location            |
| -----: | ------: | ------------: | ----------: | ------: | ------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `FormMetadata.js:3` |

##### `pointsForDominantIframeHitTest` (`__InjectedScript_ReaderArticleFinder.js:13:1191`)

| Change |   Delta |             % |        Time | Samples | Location                                     |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `__InjectedScript_ReaderArticleFinder.js:13` |

##### `scoreMultiplierForElementTagNameAndAttributes` (`__InjectedScript_ReaderArticleFinder.js:12:9696`)

| Change |   Delta |             % |        Time | Samples | Location                                     |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `__InjectedScript_ReaderArticleFinder.js:12` |

##### `sortDependencies` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:6:612`)

| Change |   Delta |             % |        Time | Samples | Location                                                                     |
| -----: | ------: | ------------: | ----------: | ------: | ---------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:7` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=jquery.spinner&skin=vector-2022&version=2h5sk:1:100`)

| Change |   Delta |             % |        Time | Samples | Location                                                                       |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------------------------------------------------ |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `./w/load.php?lang=en&modules=jquery.spinner&skin=vector-2022&version=2h5sk:1` |

##### `updateTooltipOnElement` (`./w/load.php?lang=en&modules=mediawiki.util&skin=vector-2022&version=1vbcg:15:1080`)

| Change |   Delta |             % |        Time | Samples | Location                                                                        |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `./w/load.php?lang=en&modules=mediawiki.util&skin=vector-2022&version=1vbcg:16` |

##### `isXMLDoc` (`./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:915`)

| Change |   Delta |             % |        Time | Samples | Location                                                               |
| -----: | ------: | ------------: | ----------: | ------: | ---------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5` |

##### `[Symbol.match]` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Location |
| -----: | ------: | ------------: | ----------: | ------: | -------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | 1        |

##### `levenshteinDistance` (`__InjectedScript_ReaderArticleFinder.js:12:6770`)

|  Change |   Delta |             % |        Time | Samples | Location                                     |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------------------------- |
| removed | -5.21ms | 100.0% → 0.0% | 5.2ms → 0ms |   1 → 0 | `__InjectedScript_ReaderArticleFinder.js:12` |

##### `trimmedInnerTextIgnoringTextTransform` (`__InjectedScript_ReaderArticleFinder.js:12:6561`)

| Change |   Delta |      % |          Time | Samples | Location                                     |
| -----: | ------: | -----: | ------------: | ------: | -------------------------------------------- |
| -37.9% | -1.97ms | 100.0% | 5.2ms → 3.2ms |       1 | `__InjectedScript_ReaderArticleFinder.js:12` |

##### `resolveIndex` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:352`)

|  Change |   Delta |             % |        Time | Samples | Location                                                                      |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17` |

##### `load` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:20:748`)

|  Change |   Delta |             % |        Time | Samples | Location                                                                      |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:20` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:46:782`)

|  Change |   Delta |             % |        Time | Samples | Location                                                                |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:46` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:37:790`)

|  Change |   Delta |             % |        Time | Samples | Location                                                                |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:37` |

##### `forEach` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Location |
| ------: | ------: | ------------: | ----------: | ------: | -------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | 1        |

##### `(anonymous)` (`FormMetadata.js:3:16812`)

|  Change |   Delta |             % |        Time | Samples | Location            |
| ------: | ------: | ------------: | ----------: | ------: | ------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `FormMetadata.js:3` |

##### `(anonymous)` (`FormMetadata.js:3:11837`)

|  Change |   Delta |             % |        Time | Samples | Location            |
| ------: | ------: | ------------: | ----------: | ------: | ------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `FormMetadata.js:3` |

##### `stringsMatchAnyRegularExpressions` (`FormMetadata.js:3:8216`)

| Change |   Delta |      % |          Time | Samples | Location            |
| -----: | ------: | -----: | ------------: | ------: | ------------------- |
| -33.3% | -1.00ms | 100.0% | 3.0ms → 2.0ms |   3 → 2 | `FormMetadata.js:3` |

##### `cachedElementBoundingRect` (`__InjectedScript_ReaderArticleFinder.js:12:5336`)

| Change |   Delta |      % |          Time | Samples | Location                                     |
| -----: | ------: | -----: | ------------: | ------: | -------------------------------------------- |
| -50.0% | -1.00ms | 100.0% | 2.0ms → 1.0ms |   2 → 1 | `__InjectedScript_ReaderArticleFinder.js:12` |

##### `elementIsHidingContentDueToContentVisibilityAuto` (`__InjectedScript_ReaderArticleFinder.js:12:5112`)

|  Change |   Delta |             % |        Time | Samples | Location                                     |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `__InjectedScript_ReaderArticleFinder.js:12` |

##### `hasClassMatchingRegexp` (`__InjectedScript_ReaderArticleFinder.js:12:18852`)

|  Change |   Delta |             % |        Time | Samples | Location                                     |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `__InjectedScript_ReaderArticleFinder.js:12` |

##### `fireWith` (`./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:43:150`)

|  Change |   Delta |             % |        Time | Samples | Location                                                                |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:43` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `normalizedElementTagName` (`__InjectedScript_ReaderArticleFinder.js:12:19601`)

|  Change |   Delta |             % |        Time | Samples | Caller                    | Location                                           |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------- | -------------------------------------------------- |
|     new | +3.23ms |  0.0% → 76.4% | 0ms → 3.2ms |   0 → 1 | `articleTitleInformation` | `__InjectedScript_ReaderArticleFinder.js:13:39662` |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `findCandidateElements`   | `__InjectedScript_ReaderArticleFinder.js:13:56785` |
|     new | +1.00ms |  0.0% → 23.6% | 0ms → 1.0ms |   0 → 1 | `i`                       | `__InjectedScript_ReaderArticleFinder.js:12:29250` |

##### `elementLooksLikePartOfACarousel` (`__InjectedScript_ReaderArticleFinder.js:12:8505`)

| Change |   Delta |             % |        Time | Samples | Caller        | Location                                           |
| -----: | ------: | ------------: | ----------: | ------: | ------------- | -------------------------------------------------- |
|    new | +3.23ms | 0.0% → 100.0% | 0ms → 3.2ms |   0 → 1 | `(anonymous)` | `__InjectedScript_ReaderArticleFinder.js:12:25480` |

##### `t` (`__InjectedScript_ReaderArticleFinder.js:13:56642`)

| Change |   Delta |             % |        Time | Samples | Caller      | Location    |
| -----: | ------: | ------------: | ----------: | ------: | ----------- | ----------- |
|    new | +3.23ms | 0.0% → 100.0% | 0ms → 3.2ms |   0 → 1 | `sortMerge` | `<unknown>` |

##### `domDistance` (`__InjectedScript_ReaderArticleFinder.js:12:2553`)

| Change |   Delta |             % |        Time | Samples | Caller                    | Location                                           |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------- | -------------------------------------------------- |
|    new | +3.23ms | 0.0% → 100.0% | 0ms → 3.2ms |   0 → 1 | `articleTitleInformation` | `__InjectedScript_ReaderArticleFinder.js:13:39662` |

##### `insertBefore` (`<unknown>`)

|  Change |   Delta |             % |          Time | Samples | Caller        | Location                                                                         |
| ------: | ------: | ------------: | ------------: | ------: | ------------- | -------------------------------------------------------------------------------- |
|  +33.3% | +1.00ms | 75.0% → 66.7% | 3.0ms → 4.0ms |   3 → 4 | `addToHead`   | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:3:909` |
| +100.0% | +1.00ms | 25.0% → 33.3% | 1.0ms → 2.0ms |   1 → 2 | `(anonymous)` | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:77:868`      |

##### `register` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:249`)

| Change |   Delta |             % |        Time | Samples | Caller        | Location                                                                          |
| -----: | ------: | ------------: | ----------: | ------: | ------------- | --------------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `(anonymous)` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:812` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:106:794`)

| Change |   Delta |             % |        Time | Samples | Caller | Location                                                                   |
| -----: | ------: | ------------: | ----------: | ------: | ------ | -------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `each` | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:105` |

##### `execute` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:868`)

| Change |   Delta |             % |        Time | Samples | Caller          | Location                                                                         |
| -----: | ------: | ------------: | ----------: | ------: | --------------- | -------------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `doPropagation` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254` |

##### `each` (`./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:105`)

| Change |   Delta |             % |        Time | Samples | Caller        | Location                                                                   |
| -----: | ------: | ------------: | ----------: | ------: | ------------- | -------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `(anonymous)` | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:1:420` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=mediawiki.page.ready&skin=vector-2022&version=1et5k:1:613`)

| Change |   Delta |             % |        Time | Samples | Caller | Location                                                                           |
| -----: | ------: | ------------: | ----------: | ------: | ------ | ---------------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `fire` | `./w/load.php?lang=en&modules=mediawiki.base&skin=vector-2022&version=13iwe:4:823` |

##### `getPropertyValue` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller                   | Location                                                                            |
| -----: | ------: | -----: | ------------: | ------: | ------------------------ | ----------------------------------------------------------------------------------- |
| +25.0% | +1.00ms | 100.0% | 4.0ms → 5.0ms |   4 → 5 | `getHeadingScrollOffset` | `./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:5:840` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=mmv.bootstrap&skin=vector-2022&version=176u6:1:24`)

| Change |   Delta |             % |        Time | Samples | Caller | Location                                                                          |
| -----: | ------: | ------------: | ----------: | ------: | ------ | --------------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `impl` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:18:205` |

##### `add` (`./w/load.php?lang=en&modules=mediawiki.base&skin=vector-2022&version=13iwe:4:368`)

| Change |   Delta |             % |        Time | Samples | Caller        | Location                                                                                          |
| -----: | ------: | ------------: | ----------: | ------: | ------------- | ------------------------------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `(anonymous)` | `./w/load.php?lang=en&modules=wikibase.databox.fromWikidata&skin=vector-2022&version=9kykt:1:128` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=ext.popups.main&skin=vector-2022&version=18lyf:1:5743`)

| Change |   Delta |             % |        Time | Samples | Caller        | Location                                                                              |
| -----: | ------: | ------------: | ----------: | ------: | ------------- | ------------------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `(anonymous)` | `./w/load.php?lang=en&modules=ext.popups.main&skin=vector-2022&version=18lyf:1:35993` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=jquery.makeCollapsible&skin=vector-2022&version=1yvlc:2:91`)

| Change |   Delta |             % |        Time | Samples | Caller | Location                                                                   |
| -----: | ------: | ------------: | ----------: | ------: | ------ | -------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `each` | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:105` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=ext.visualEditor.desktopArticleTarget.init&skin=vector-2022&version=1xmtn:1:24`)

| Change |   Delta |             % |        Time | Samples | Caller | Location                                                                          |
| -----: | ------: | ------------: | ----------: | ------: | ------ | --------------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `impl` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:18:205` |

##### `(anonymous)` (`FormMetadata.js:3:77436`)

| Change |   Delta |             % |        Time | Samples | Caller                                          | Location                  |
| -----: | ------: | ------------: | ----------: | ------: | ----------------------------------------------- | ------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `_indexOfFormWithHighestScoreIfGreaterThanZero` | `FormMetadata.js:3:78192` |

##### `collectMatchingElementsInFlatTree` (`<unknown>`)

|  Change |   Delta |      % |          Time | Samples | Caller               | Location                 |
| ------: | ------: | -----: | ------------: | ------: | -------------------- | ------------------------ |
| +100.0% | +1.00ms | 100.0% | 1.0ms → 2.0ms |   1 → 2 | `queryAllBySelector` | `FormMetadata.js:3:7383` |

##### `getVisibleNonWhitespaceTextNodes` (`__InjectedScript_ReaderArticleFinder.js:12:13801`)

| Change |   Delta |             % |        Time | Samples | Caller                                 | Location                                           |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------------------- | -------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `elementContainsEnoughTextOfSameStyle` | `__InjectedScript_ReaderArticleFinder.js:13:62686` |

##### `(anonymous)` (`__InjectedScript_ReaderArticleFinder.js:12:26535`)

| Change |   Delta |             % |        Time | Samples | Caller        | Location                                           |
| -----: | ------: | ------------: | ----------: | ------: | ------------- | -------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `(anonymous)` | `__InjectedScript_ReaderArticleFinder.js:12:26177` |

##### `adjustArticleNodeUpwardIfNecessary` (`__InjectedScript_ReaderArticleFinder.js:13:4514`)

| Change |   Delta |             % |        Time | Samples | Caller        | Location                                          |
| -----: | ------: | ------------: | ----------: | ------: | ------------- | ------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `articleNode` | `__InjectedScript_ReaderArticleFinder.js:13:8074` |

##### `add` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller            | Location                                                                            |
| -----: | ------: | ------------: | ----------: | ------: | ----------------- | ----------------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `activateSection` | `./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:26:25` |

##### `stripCommonPrefix` (`FormMetadata.js:3:6253`)

| Change |   Delta |             % |        Time | Samples | Caller                                                | Location                  |
| -----: | ------: | ------------: | ----------: | ------: | ----------------------------------------------------- | ------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `_trailingArgumentsForCollectControlMetadataFunction` | `FormMetadata.js:3:62267` |

##### `autocompleteTokens` (`FormMetadata.js:3:5183`)

| Change |   Delta |             % |        Time | Samples | Caller                    | Location                  |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------- | ------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `_collectControlMetadata` | `FormMetadata.js:3:46804` |

##### `_isAutoFillableTextField` (`FormMetadata.js:3:38801`)

| Change |   Delta |             % |        Time | Samples | Caller                            | Location                  |
| -----: | ------: | ------------: | ----------: | ------: | --------------------------------- | ------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `_looksLikeCreditCardNumberField` | `FormMetadata.js:3:38899` |

##### `_collectStringFromNodeForPageScan` (`FormMetadata.js:3:18053`)

| Change |   Delta |             % |        Time | Samples | Caller                                           | Location                  |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------------------ | ------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `_dataForComputingMatchFromPageScanAfterElement` | `FormMetadata.js:3:22137` |

##### `pathFromAnchorWithoutLeadingSlash` (`FormMetadata.js:3:8339`)

| Change |   Delta |             % |        Time | Samples | Caller                                                         | Location                  |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------------------------------------------- | ------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `_stringsToEvaluateToDetermineIfElementIsFollowedByAffordance` | `FormMetadata.js:3:21490` |

##### `pointsForDominantIframeHitTest` (`__InjectedScript_ReaderArticleFinder.js:13:1191`)

| Change |   Delta |             % |        Time | Samples | Caller                  | Location                                          |
| -----: | ------: | ------------: | ----------: | ------: | ----------------------- | ------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `dominantContentIframe` | `__InjectedScript_ReaderArticleFinder.js:13:1342` |

##### `scoreMultiplierForElementTagNameAndAttributes` (`__InjectedScript_ReaderArticleFinder.js:12:9696`)

| Change |   Delta |             % |        Time | Samples | Caller                                                | Location                                           |
| -----: | ------: | ------------: | ----------: | ------: | ----------------------------------------------------- | -------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `calculateElementTagNameAndAttributesScoreMultiplier` | `__InjectedScript_ReaderArticleFinder.js:12:27497` |

##### `createOptions` (`./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:41:604`)

| Change |   Delta |             % |        Time | Samples | Caller        | Location                                                                    |
| -----: | ------: | ------------: | ----------: | ------: | ------------- | --------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `(anonymous)` | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:41:751` |

##### `sortDependencies` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:6:612`)

| Change |   Delta |             % |        Time | Samples | Caller             | Location                                                                         |
| -----: | ------: | ------------: | ----------: | ------: | ------------------ | -------------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `sortDependencies` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:6:612` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=mediawiki.api&skin=vector-2022&version=1yqeu:1:193`)

| Change |   Delta |             % |        Time | Samples | Caller                                 | Location                                                                          |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------------------- | --------------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `resources/src/mediawiki.api/index.js` | `./w/load.php?lang=en&modules=mediawiki.api&skin=vector-2022&version=1yqeu:1:159` |

##### `init` (`./w/load.php?lang=en&modules=ext.uls.preferences&skin=vector-2022&version=11u78:1:342`)

| Change |   Delta |             % |        Time | Samples | Caller           | Location                                                                                |
| -----: | ------: | ------------: | ----------: | ------: | ---------------- | --------------------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `ULSPreferences` | `./w/load.php?lang=en&modules=ext.uls.preferences&skin=vector-2022&version=11u78:1:163` |

##### `get` (`./w/load.php?lang=en&modules=mediawiki.cookie&skin=vector-2022&version=spq95:1:902`)

| Change |   Delta |             % |        Time | Samples | Caller      | Location                                                                           |
| -----: | ------: | ------------: | ----------: | ------: | ----------- | ---------------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `sessionId` | `./w/load.php?lang=en&modules=mediawiki.user&skin=vector-2022&version=163ne:3:628` |

##### `filter` (`./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:37:404`)

| Change |   Delta |             % |        Time | Samples | Caller | Location                                                                                      |
| -----: | ------: | ------------: | ----------: | ------: | ------ | --------------------------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `init` | `./w/load.php?lang=en&modules=mediawiki.page.watch.ajax&skin=vector-2022&version=1rpbn:3:897` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=jquery.spinner&skin=vector-2022&version=2h5sk:1:100`)

| Change |   Delta |             % |        Time | Samples | Caller        | Location                                                                          |
| -----: | ------: | ------------: | ----------: | ------: | ------------- | --------------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `(anonymous)` | `./w/load.php?lang=en&modules=jquery.spinner&skin=vector-2022&version=2h5sk:1:65` |

##### `updateTooltipOnElement` (`./w/load.php?lang=en&modules=mediawiki.util&skin=vector-2022&version=1vbcg:15:1080`)

| Change |   Delta |             % |        Time | Samples | Caller          | Location                                                                            |
| -----: | ------: | ------------: | ----------: | ------: | --------------- | ----------------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `updateTooltip` | `./w/load.php?lang=en&modules=mediawiki.util&skin=vector-2022&version=1vbcg:16:593` |

##### `isXMLDoc` (`./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:915`)

| Change |   Delta |             % |        Time | Samples | Caller | Location                                                                     |
| -----: | ------: | ------------: | ----------: | ------: | ------ | ---------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `attr` | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:103:119` |

##### `dataAttr` (`./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:51:398`)

| Change |   Delta |             % |        Time | Samples | Caller        | Location                                                                    |
| -----: | ------: | ------------: | ----------: | ------: | ------------- | --------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `(anonymous)` | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:52:564` |

##### `sortCompact` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller | Location    |
| -----: | ------: | ------------: | ----------: | ------: | ------ | ----------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `sort` | `<unknown>` |

##### `URL` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller        | Location                                                                                         |
| -----: | ------: | ------------: | ----------: | ------: | ------------- | ------------------------------------------------------------------------------------------------ |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `(anonymous)` | `./w/load.php?lang=en&modules=ext.visualEditor.targetLoader&skin=vector-2022&version=1m9dx:9:10` |

##### `flatIntoArray` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller | Location    |
| -----: | ------: | ------------: | ----------: | ------: | ------ | ----------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `flat` | `<unknown>` |

##### `querySelector` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller                  | Location                                                                             |
| -----: | ------: | ------------: | ----------: | ------: | ----------------------- | ------------------------------------------------------------------------------------ |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `addPortletLinkHandler` | `./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:55:613` |

##### `[Symbol.match]` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller  | Location    |
| -----: | ------: | ------------: | ----------: | ------: | ------- | ----------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `match` | `<unknown>` |

##### `getComputedStyle` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller        | Location                  |
| -----: | ------: | ------------: | ----------: | ------: | ------------- | ------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `(anonymous)` | `FormMetadata.js:3:11837` |

##### `stringSplitFast` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller                    | Location                                           |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------- | -------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `pathComponentsForAnchor` | `__InjectedScript_ReaderArticleFinder.js:12:19328` |

##### `sendBeacon` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller         | Location                                                                             |
| -----: | ------: | ------------: | ----------: | ------: | -------------- | ------------------------------------------------------------------------------------ |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `doSendEvents` | `./w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:10:181` |

##### `getBoundingClientRect` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller                      | Location                                          |
| -----: | ------: | ------------: | ----------: | ------: | --------------------------- | ------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `cachedElementBoundingRect` | `__InjectedScript_ReaderArticleFinder.js:12:5336` |

##### `levenshteinDistance` (`__InjectedScript_ReaderArticleFinder.js:12:6770`)

|  Change |   Delta |             % |        Time | Samples | Caller             | Location                                          |
| ------: | ------: | ------------: | ----------: | ------: | ------------------ | ------------------------------------------------- |
| removed | -5.21ms | 100.0% → 0.0% | 5.2ms → 0ms |   1 → 0 | `stringSimilarity` | `__InjectedScript_ReaderArticleFinder.js:12:7091` |

##### `updateArticleBylineAndDateElementsIfNecessary` (`__InjectedScript_ReaderArticleFinder.js:13:53699`)

|  Change |   Delta |             % |        Time | Samples | Caller                   | Location                                           |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------ | -------------------------------------------------- |
| removed | -5.21ms | 100.0% → 0.0% | 5.2ms → 0ms |   1 → 0 | `adoptableMetadataBlock` | `__InjectedScript_ReaderArticleFinder.js:13:48923` |

##### `trimmedInnerTextIgnoringTextTransform` (`__InjectedScript_ReaderArticleFinder.js:12:6561`)

| Change |   Delta |      % |          Time | Samples | Caller                                     | Location                                           |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------------ | -------------------------------------------------- |
| -37.9% | -1.97ms | 100.0% | 5.2ms → 3.2ms |       1 | `findArticleBylineElementWithoutRejection` | `__InjectedScript_ReaderArticleFinder.js:13:50372` |

##### `(anonymous)` (`./wiki/Profiling_(computer_programming):6:19`)

|  Change |   Delta |             % |        Time | Samples | Caller      | Location                                       |
| ------: | ------: | ------------: | ----------: | ------: | ----------- | ---------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(program)` | `./wiki/Profiling_(computer_programming):6:10` |

##### `resolveIndex` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:352`)

|  Change |   Delta |             % |        Time | Samples | Caller     | Location                                                                          |
| ------: | ------: | ------------: | ----------: | ------: | ---------- | --------------------------------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `register` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:249` |

##### `load` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:20:748`)

|  Change |   Delta |             % |        Time | Samples | Caller | Location                                                                          |
| ------: | ------: | ------------: | ----------: | ------: | ------ | --------------------------------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `init` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:20:645` |

##### `splitModuleKey` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:720`)

|  Change |   Delta |             % |        Time | Samples | Caller | Location                                                                          |
| ------: | ------: | ------------: | ----------: | ------: | ------ | --------------------------------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `impl` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:18:205` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=ext.quicksurveys.lib&skin=vector-2022&version=kdhjm:11:203`)

|  Change |   Delta |             % |        Time | Samples | Caller | Location                                                                          |
| ------: | ------: | ------------: | ----------: | ------: | ------ | --------------------------------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `impl` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:18:205` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:1:24`)

|  Change |   Delta |             % |        Time | Samples | Caller | Location                                                                          |
| ------: | ------: | ------------: | ----------: | ------: | ------ | --------------------------------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `impl` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:18:205` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:1:420`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location                                                                  |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ------------------------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)` | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:1:92` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:46:782`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location                                                                           |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ---------------------------------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)` | `./w/load.php?lang=en&modules=mediawiki.base&skin=vector-2022&version=13iwe:6:847` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:37:790`)

|  Change |   Delta |             % |        Time | Samples | Caller   | Location                                                                   |
| ------: | ------: | ------------: | ----------: | ------: | -------- | -------------------------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `jQuery` | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:2:599` |

##### `add` (`./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:42:286`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location                                                                    |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | --------------------------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)` | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:46:515` |

##### `jar.js` (`./w/load.php?lang=en&modules=mediawiki.cookie&skin=vector-2022&version=spq95:3:20`)

|  Change |   Delta |             % |        Time | Samples | Caller    | Location                                                                         |
| ------: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `require` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:8:344` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=ext.visualEditor.core.utils.parsing&skin=vector-2022&version=962r8:1:86`)

|  Change |   Delta |             % |        Time | Samples | Caller      | Location                                                                         |
| ------: | ------: | ------------: | ----------: | ------: | ----------- | -------------------------------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `runScript` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59` |

##### `Title.js` (`./w/load.php?lang=en&modules=mediawiki.Title&skin=vector-2022&version=1fg2m:1:105`)

|  Change |   Delta |             % |        Time | Samples | Caller      | Location                                                                         |
| ------: | ------: | ------------: | ----------: | ------: | ----------- | -------------------------------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `runScript` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59` |

##### `eventSender.js` (`./w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:10:28`)

|  Change |   Delta |             % |        Time | Samples | Caller    | Location                                                                         |
| ------: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `require` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:8:344` |

##### `forEach` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller    | Location                                                                          |
| ------: | ------: | ------------: | ----------: | ------: | --------- | --------------------------------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `enqueue` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:255` |

##### `buildEvent` (`./w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:16:842`)

|  Change |   Delta |             % |        Time | Samples | Caller | Location                                                                             |
| ------: | ------: | ------------: | ----------: | ------: | ------ | ------------------------------------------------------------------------------------ |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `send` | `./w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:16:355` |

##### `isInSample` (`./w/load.php?lang=en&modules=ext.wikimediaEvents&skin=vector-2022&version=lu7fs:28:619`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location                                                                                 |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ---------------------------------------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)` | `./w/load.php?lang=en&modules=ext.wikimediaEvents&skin=vector-2022&version=lu7fs:30:633` |

##### `exec` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller     | Location                                                                    |
| ------: | ------: | ------------: | ----------: | ------: | ---------- | --------------------------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `tokenize` | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:27:121` |

##### `(anonymous)` (`FormMetadata.js:3:16812`)

|  Change |   Delta |             % |        Time | Samples | Caller   | Location    |
| ------: | ------: | ------------: | ----------: | ------: | -------- | ----------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `reduce` | `<unknown>` |

##### `(anonymous)` (`FormMetadata.js:3:11837`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location                  |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)` | `FormMetadata.js:3:14331` |

##### `_createLogicalFormsForControls` (`FormMetadata.js:3:23832`)

|  Change |   Delta |             % |        Time | Samples | Caller                | Location                  |
| ------: | ------: | ------------: | ----------: | ------: | --------------------- | ------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `_logicalFormsInPage` | `FormMetadata.js:3:27143` |

##### `_findHiddenUsernameElement` (`FormMetadata.js:3:75498`)

|  Change |   Delta |             % |        Time | Samples | Caller                 | Location                  |
| ------: | ------: | ------------: | ----------: | ------: | ---------------------- | ------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `_collectFormMetadata` | `FormMetadata.js:3:62833` |

##### `_looksLikeOneTimeCodeField` (`FormMetadata.js:3:42732`)

|  Change |   Delta |             % |        Time | Samples | Caller                    | Location                  |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------- | ------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `_collectControlMetadata` | `FormMetadata.js:3:46804` |

##### `stringsMatchAnyRegularExpressions` (`FormMetadata.js:3:8216`)

| Change |   Delta |      % |          Time | Samples | Caller                                                | Location                  |
| -----: | ------: | -----: | ------------: | ------: | ----------------------------------------------------- | ------------------------- |
| -33.3% | -1.00ms | 100.0% | 3.0ms → 2.0ms |   3 → 2 | `_isElementFollowedByForgotUserNameOrEmailAffordance` | `FormMetadata.js:3:19474` |

##### `Set` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                           | Location                                           |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------------- | -------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `findArticleByVisualExamination` | `__InjectedScript_ReaderArticleFinder.js:13:63913` |

##### `cachedElementBoundingRect` (`__InjectedScript_ReaderArticleFinder.js:12:5336`)

|  Change |   Delta |            % |        Time | Samples | Caller        | Location                                           |
| ------: | ------: | -----------: | ----------: | ------: | ------------- | -------------------------------------------------- |
| removed | -1.00ms | 50.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)` | `__InjectedScript_ReaderArticleFinder.js:12:25480` |

##### `usableTextNodesInElement` (`__InjectedScript_ReaderArticleFinder.js:12:29085`)

|  Change |   Delta |             % |        Time | Samples | Caller             | Location                                           |
| ------: | ------: | ------------: | ----------: | ------: | ------------------ | -------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `CandidateElement` | `__InjectedScript_ReaderArticleFinder.js:12:25119` |

##### `fontSizeFromComputedStyle` (`__InjectedScript_ReaderArticleFinder.js:12:2819`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location                                           |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | -------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)` | `__InjectedScript_ReaderArticleFinder.js:12:26535` |

##### `elementIsHidingContentDueToContentVisibilityAuto` (`__InjectedScript_ReaderArticleFinder.js:12:5112`)

|  Change |   Delta |             % |        Time | Samples | Caller                      | Location                                          |
| ------: | ------: | ------------: | ----------: | ------: | --------------------------- | ------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `cachedElementBoundingRect` | `__InjectedScript_ReaderArticleFinder.js:12:5336` |

##### `scoreDensity` (`__InjectedScript_ReaderArticleFinder.js:12:28071`)

|  Change |   Delta |             % |        Time | Samples | Caller                              | Location                                           |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------------- | -------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `shouldDisqualifyDueToScoreDensity` | `__InjectedScript_ReaderArticleFinder.js:12:30545` |

##### `push` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                              | Location                                           |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------------- | -------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `findExtraArticleCandidateElements` | `__InjectedScript_ReaderArticleFinder.js:13:57439` |

##### `hasClassMatchingRegexp` (`__InjectedScript_ReaderArticleFinder.js:12:18852`)

|  Change |   Delta |             % |        Time | Samples | Caller                    | Location                                           |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------- | -------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `articleTitleInformation` | `__InjectedScript_ReaderArticleFinder.js:13:39662` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=ext.cite.ux-enhancements&skin=vector-2022&version=1cpqh:4:23`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location                                                                                    |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ------------------------------------------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)` | `./w/load.php?lang=en&modules=ext.cite.ux-enhancements&skin=vector-2022&version=1cpqh:1:75` |

##### `buildFragment` (`./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:59:231`)

|  Change |   Delta |             % |        Time | Samples | Caller     | Location                                                                    |
| ------: | ------: | ------------: | ----------: | ------: | ---------- | --------------------------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `domManip` | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:74:285` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=ext.uls.interface&skin=vector-2022&version=pe1oy:1:171`)

|  Change |   Delta |             % |        Time | Samples | Caller                    | Location                                                                              |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------- | ------------------------------------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `js/ext.uls.interface.js` | `./w/load.php?lang=en&modules=ext.uls.interface&skin=vector-2022&version=pe1oy:1:137` |

##### `fireWith` (`./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:43:150`)

|  Change |   Delta |             % |        Time | Samples | Caller | Location                                                                    |
| ------: | ------: | ------------: | ----------: | ------: | ------ | --------------------------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `fire` | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:43:300` |

##### `setAttribute` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location                                                                                  |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ----------------------------------------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)` | `./w/load.php?lang=en&modules=jquery.makeCollapsible&skin=vector-2022&version=1yvlc:2:91` |

##### `bound setupEventHandlers` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller       | Location                                                                    |
| ------: | ------: | ------------: | ----------: | ------: | ------------ | --------------------------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `mightThrow` | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:44:918` |

##### `addEventListener` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location                                                                                 |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ---------------------------------------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)` | `./w/load.php?lang=en&modules=ext.wikimediaEvents&skin=vector-2022&version=lu7fs:56:313` |

##### `nodeAtPoint` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller           | Location                                           |
| ------: | ------: | ------------: | ----------: | ------: | ---------------- | -------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `elementAtPoint` | `__InjectedScript_ReaderArticleFinder.js:12:10176` |

##### `bound ` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                    | Location                                           |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------- | -------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `articleTitleInformation` | `__InjectedScript_ReaderArticleFinder.js:13:39662` |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|  Change |   Delta |             % |            Time | Samples | Function                                      | Location                                                                          |
| ------: | ------: | ------------: | --------------: | ------: | --------------------------------------------- | --------------------------------------------------------------------------------- |
| +182.3% | +5.47ms |   3.0% → 8.3% |   3.0ms → 8.5ms |   3 → 4 | `findExtraArticle`                            | `__InjectedScript_ReaderArticleFinder.js:13:55651`                                |
| +546.8% | +5.47ms |   1.0% → 6.3% |   1.0ms → 6.5ms |   1 → 2 | `extraArticleNode`                            | `__InjectedScript_ReaderArticleFinder.js:13:8749`                                 |
|  +57.6% | +4.73ms |  8.1% → 12.7% |  8.2ms → 12.9ms |       4 | `articleTitleInformation`                     | `__InjectedScript_ReaderArticleFinder.js:13:39662`                                |
|  +57.6% | +4.73ms |  8.1% → 12.7% |  8.2ms → 12.9ms |       4 | `articleTitle`                                | `__InjectedScript_ReaderArticleFinder.js:13:39565`                                |
|     new | +4.23ms |   0.0% → 4.1% |     0ms → 4.2ms |   0 → 2 | `sort`                                        | `<unknown>`                                                                       |
| +323.4% | +3.23ms |   1.0% → 4.1% |   1.0ms → 4.2ms |   1 → 2 | `(anonymous)`                                 | `__InjectedScript_ReaderArticleFinder.js:12:25480`                                |
| +323.4% | +3.23ms |   1.0% → 4.1% |   1.0ms → 4.2ms |   1 → 2 | `normalizedElementTagName`                    | `__InjectedScript_ReaderArticleFinder.js:12:19601`                                |
|     new | +3.23ms |   0.0% → 3.2% |     0ms → 3.2ms |   0 → 1 | `elementLooksLikePartOfACarousel`             | `__InjectedScript_ReaderArticleFinder.js:12:8505`                                 |
|     new | +3.23ms |   0.0% → 3.2% |     0ms → 3.2ms |   0 → 1 | `t`                                           | `__InjectedScript_ReaderArticleFinder.js:13:56642`                                |
|     new | +3.23ms |   0.0% → 3.2% |     0ms → 3.2ms |   0 → 1 | `sortMerge`                                   | `<unknown>`                                                                       |
|     new | +3.23ms |   0.0% → 3.2% |     0ms → 3.2ms |   0 → 1 | `sortMergeSort`                               | `<unknown>`                                                                       |
|     new | +3.23ms |   0.0% → 3.2% |     0ms → 3.2ms |   0 → 1 | `sortCandidateElementsInDescendingScoreOrder` | `__InjectedScript_ReaderArticleFinder.js:13:56628`                                |
|     new | +3.23ms |   0.0% → 3.2% |     0ms → 3.2ms |   0 → 1 | `domDistance`                                 | `__InjectedScript_ReaderArticleFinder.js:12:2553`                                 |
|  +25.0% | +3.00ms | 11.8% → 14.7% | 12.0ms → 15.0ms | 12 → 15 | `execute`                                     | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:868` |
|  +23.1% | +3.00ms | 12.8% → 15.7% | 13.0ms → 16.0ms | 13 → 16 | `doPropagation`                               | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254`  |
|  +37.5% | +3.00ms |  7.9% → 10.8% |  8.0ms → 11.0ms |  8 → 11 | `each`                                        | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:105`        |
| +100.0% | +3.00ms |   3.0% → 5.9% |   3.0ms → 6.0ms |   3 → 6 | `forEach`                                     | `<unknown>`                                                                       |
| +111.7% | +2.23ms |   2.0% → 4.1% |   2.0ms → 4.2ms |       2 | `findExtraArticleCandidateElements`           | `__InjectedScript_ReaderArticleFinder.js:13:57439`                                |
|  +22.2% | +2.00ms |  8.9% → 10.8% |  9.0ms → 11.0ms |  9 → 11 | `_collectMetadata`                            | `FormMetadata.js:3:78950`                                                         |
|  +22.2% | +2.00ms |  8.9% → 10.8% |  9.0ms → 11.0ms |  9 → 11 | `formsAndMetadata`                            | `FormMetadata.js:3:82286`                                                         |

##### Standard library

|  Change |   Delta |            % |           Time | Samples | Function                                                       | Location                                           |
| ------: | ------: | -----------: | -------------: | ------: | -------------------------------------------------------------- | -------------------------------------------------- |
| +182.3% | +5.47ms |  3.0% → 8.3% |  3.0ms → 8.5ms |   3 → 4 | `findExtraArticle`                                             | `__InjectedScript_ReaderArticleFinder.js:13:55651` |
| +546.8% | +5.47ms |  1.0% → 6.3% |  1.0ms → 6.5ms |   1 → 2 | `extraArticleNode`                                             | `__InjectedScript_ReaderArticleFinder.js:13:8749`  |
|  +57.6% | +4.73ms | 8.1% → 12.7% | 8.2ms → 12.9ms |       4 | `articleTitleInformation`                                      | `__InjectedScript_ReaderArticleFinder.js:13:39662` |
|  +57.6% | +4.73ms | 8.1% → 12.7% | 8.2ms → 12.9ms |       4 | `articleTitle`                                                 | `__InjectedScript_ReaderArticleFinder.js:13:39565` |
|     new | +4.23ms |  0.0% → 4.1% |    0ms → 4.2ms |   0 → 2 | `sort`                                                         | `<unknown>`                                        |
| +323.4% | +3.23ms |  1.0% → 4.1% |  1.0ms → 4.2ms |   1 → 2 | `(anonymous)`                                                  | `__InjectedScript_ReaderArticleFinder.js:12:25480` |
| +323.4% | +3.23ms |  1.0% → 4.1% |  1.0ms → 4.2ms |   1 → 2 | `normalizedElementTagName`                                     | `__InjectedScript_ReaderArticleFinder.js:12:19601` |
|     new | +3.23ms |  0.0% → 3.2% |    0ms → 3.2ms |   0 → 1 | `elementLooksLikePartOfACarousel`                              | `__InjectedScript_ReaderArticleFinder.js:12:8505`  |
|     new | +3.23ms |  0.0% → 3.2% |    0ms → 3.2ms |   0 → 1 | `t`                                                            | `__InjectedScript_ReaderArticleFinder.js:13:56642` |
|     new | +3.23ms |  0.0% → 3.2% |    0ms → 3.2ms |   0 → 1 | `sortCandidateElementsInDescendingScoreOrder`                  | `__InjectedScript_ReaderArticleFinder.js:13:56628` |
|     new | +3.23ms |  0.0% → 3.2% |    0ms → 3.2ms |   0 → 1 | `domDistance`                                                  | `__InjectedScript_ReaderArticleFinder.js:12:2553`  |
| +100.0% | +3.00ms |  3.0% → 5.9% |  3.0ms → 6.0ms |   3 → 6 | `forEach`                                                      | `<unknown>`                                        |
| +111.7% | +2.23ms |  2.0% → 4.1% |  2.0ms → 4.2ms |       2 | `findExtraArticleCandidateElements`                            | `__InjectedScript_ReaderArticleFinder.js:13:57439` |
|  +22.2% | +2.00ms | 8.9% → 10.8% | 9.0ms → 11.0ms |  9 → 11 | `_collectMetadata`                                             | `FormMetadata.js:3:78950`                          |
|  +22.2% | +2.00ms | 8.9% → 10.8% | 9.0ms → 11.0ms |  9 → 11 | `formsAndMetadata`                                             | `FormMetadata.js:3:82286`                          |
| +200.0% | +2.00ms |  1.0% → 2.9% |  1.0ms → 3.0ms |   1 → 3 | `_stringsToEvaluateToDetermineIfElementIsFollowedByAffordance` | `FormMetadata.js:3:21490`                          |
| +200.0% | +2.00ms |  1.0% → 2.9% |  1.0ms → 3.0ms |   1 → 3 | `CandidateElement`                                             | `__InjectedScript_ReaderArticleFinder.js:12:25119` |
|     new | +2.00ms |  0.0% → 2.0% |    0ms → 2.0ms |   0 → 2 | `i`                                                            | `__InjectedScript_ReaderArticleFinder.js:12:29250` |
|  +12.5% | +1.00ms |  7.9% → 8.8% |  8.0ms → 9.0ms |   8 → 9 | `_collectFormMetadata`                                         | `FormMetadata.js:3:62833`                          |
|     new | +1.00ms |  0.0% → 1.0% |    0ms → 1.0ms |   0 → 1 | `(anonymous)`                                                  | `FormMetadata.js:3:77436`                          |

##### Ours

|  Change |   Delta |             % |            Time | Samples | Function                            | Location                                                                                 |
| ------: | ------: | ------------: | --------------: | ------: | ----------------------------------- | ---------------------------------------------------------------------------------------- |
|  +25.0% | +3.00ms | 11.8% → 14.7% | 12.0ms → 15.0ms | 12 → 15 | `execute`                           | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:868`        |
|  +23.1% | +3.00ms | 12.8% → 15.7% | 13.0ms → 16.0ms | 13 → 16 | `doPropagation`                     | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254`         |
|  +37.5% | +3.00ms |  7.9% → 10.8% |  8.0ms → 11.0ms |  8 → 11 | `each`                              | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:105`               |
|     new | +2.00ms |   0.0% → 2.0% |     0ms → 2.0ms |   0 → 2 | `get`                               | `./w/load.php?lang=en&modules=mediawiki.user&skin=vector-2022&version=163ne:4:740`       |
|   +3.7% | +1.00ms | 26.6% → 27.4% | 27.0ms → 28.0ms | 27 → 28 | `(anonymous)`                       | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:558`        |
|   +4.0% | +1.00ms | 24.6% → 25.4% | 25.0ms → 26.0ms | 25 → 26 | `runScript`                         | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59`         |
|  +50.0% | +1.00ms |   2.0% → 2.9% |   2.0ms → 3.0ms |   2 → 3 | `(anonymous)`                       | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:79:610`              |
| +100.0% | +1.00ms |   1.0% → 2.0% |   1.0ms → 2.0ms |   1 → 2 | `(anonymous)`                       | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:77:868`              |
|     new | +1.00ms |   0.0% → 1.0% |     0ms → 1.0ms |   0 → 1 | `(anonymous)`                       | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:41:751`              |
|     new | +1.00ms |   0.0% → 1.0% |     0ms → 1.0ms |   0 → 1 | `(anonymous)`                       | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:106:794`             |
|     new | +1.00ms |   0.0% → 1.0% |     0ms → 1.0ms |   0 → 1 | `(anonymous)`                       | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:52:564`              |
|     new | +1.00ms |   0.0% → 1.0% |     0ms → 1.0ms |   0 → 1 | `(anonymous)`                       | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:72:988`              |
|     new | +1.00ms |   0.0% → 1.0% |     0ms → 1.0ms |   0 → 1 | `(anonymous)`                       | `./w/load.php?lang=en&modules=ext.wikimediaEvents&skin=vector-2022&version=lu7fs:25:556` |
|  +33.3% | +1.00ms |   3.0% → 3.9% |   3.0ms → 4.0ms |   3 → 4 | `addToHead`                         | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:3:909`         |
|  +33.3% | +1.00ms |   3.0% → 3.9% |   3.0ms → 4.0ms |   3 → 4 | `newStyleTag`                       | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:4:59`          |
|  +50.0% | +1.00ms |   2.0% → 2.9% |   2.0ms → 3.0ms |   2 → 3 | `domManip`                          | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:74:285`              |
|     new | +1.00ms |   0.0% → 1.0% |     0ms → 1.0ms |   0 → 1 | `(anonymous)`                       | `./w/load.php?lang=en&modules=mediawiki.page.ready&skin=vector-2022&version=1et5k:1:613` |
|  +14.3% | +1.00ms |   6.9% → 7.8% |   7.0ms → 8.0ms |   7 → 8 | `resources/skins.vector.js/skin.js` | `./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:1:155`      |
|     new | +1.00ms |   0.0% → 1.0% |     0ms → 1.0ms |   0 → 1 | `(anonymous)`                       | `./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:56:287`     |
|     new | +1.00ms |   0.0% → 1.0% |     0ms → 1.0ms |   0 → 1 | `(anonymous)`                       | `./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:54:529`     |

##### Native

|  Change |   Delta |           % |          Time | Samples | Function                            | Location    |
| ------: | ------: | ----------: | ------------: | ------: | ----------------------------------- | ----------- |
|     new | +3.23ms | 0.0% → 3.2% |   0ms → 3.2ms |   0 → 1 | `sortMerge`                         | `<unknown>` |
|     new | +3.23ms | 0.0% → 3.2% |   0ms → 3.2ms |   0 → 1 | `sortMergeSort`                     | `<unknown>` |
|  +50.0% | +2.00ms | 3.9% → 5.9% | 4.0ms → 6.0ms |   4 → 6 | `insertBefore`                      | `<unknown>` |
|  +25.0% | +1.00ms | 3.9% → 4.9% | 4.0ms → 5.0ms |   4 → 5 | `getPropertyValue`                  | `<unknown>` |
| +100.0% | +1.00ms | 1.0% → 2.0% | 1.0ms → 2.0ms |   1 → 2 | `collectMatchingElementsInFlatTree` | `<unknown>` |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `sortCompact`                       | `<unknown>` |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `URL`                               | `<unknown>` |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `flatIntoArray`                     | `<unknown>` |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `querySelector`                     | `<unknown>` |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `[Symbol.match]`                    | `<unknown>` |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `getComputedStyle`                  | `<unknown>` |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `stringSplitFast`                   | `<unknown>` |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `sendBeacon`                        | `<unknown>` |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `getBoundingClientRect`             | `<unknown>` |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |   Delta |             % |            Time | Samples | Function                                         | Location                                                                          |
| ------: | ------: | ------------: | --------------: | ------: | ------------------------------------------------ | --------------------------------------------------------------------------------- |
|  -68.9% | -7.18ms |  10.2% → 3.2% |  10.4ms → 3.2ms |   2 → 1 | `updateArticleBylineAndDateElementsIfNecessary`  | `__InjectedScript_ReaderArticleFinder.js:13:53699`                                |
|  -68.9% | -7.18ms |  10.2% → 3.2% |  10.4ms → 3.2ms |   2 → 1 | `adoptableMetadataBlock`                         | `__InjectedScript_ReaderArticleFinder.js:13:48923`                                |
| removed | -5.21ms |   5.1% → 0.0% |     5.2ms → 0ms |   1 → 0 | `levenshteinDistance`                            | `__InjectedScript_ReaderArticleFinder.js:12:6770`                                 |
| removed | -5.21ms |   5.1% → 0.0% |     5.2ms → 0ms |   1 → 0 | `stringSimilarity`                               | `__InjectedScript_ReaderArticleFinder.js:12:7091`                                 |
| removed | -5.21ms |   5.1% → 0.0% |     5.2ms → 0ms |   1 → 0 | `de`                                             | `__InjectedScript_ReaderArticleFinder.js:13:42521`                                |
|  -50.0% | -2.00ms |   3.9% → 2.0% |   4.0ms → 2.0ms |   4 → 2 | `enqueue`                                        | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:255` |
|  -40.0% | -2.00ms |   4.9% → 2.9% |   5.0ms → 3.0ms |   5 → 3 | `require`                                        | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:8:344`  |
| removed | -2.00ms |   2.0% → 0.0% |     2.0ms → 0ms |   2 → 0 | `_findHiddenUsernameElement`                     | `FormMetadata.js:3:75498`                                                         |
|  -37.9% | -1.97ms |   5.1% → 3.2% |   5.2ms → 3.2ms |       1 | `trimmedInnerTextIgnoringTextTransform`          | `__InjectedScript_ReaderArticleFinder.js:12:6561`                                 |
|  -37.9% | -1.97ms |   5.1% → 3.2% |   5.2ms → 3.2ms |       1 | `findArticleBylineElementWithoutRejection`       | `__InjectedScript_ReaderArticleFinder.js:13:50372`                                |
|  -37.9% | -1.97ms |   5.1% → 3.2% |   5.2ms → 3.2ms |       1 | `findArticleBylineElement`                       | `__InjectedScript_ReaderArticleFinder.js:13:50186`                                |
|  -37.9% | -1.97ms |   5.1% → 3.2% |   5.2ms → 3.2ms |       1 | `updateArticleBylineAndDateElements`             | `__InjectedScript_ReaderArticleFinder.js:13:53902`                                |
|   -5.9% | -1.45ms | 24.2% → 22.7% | 24.6ms → 23.2ms |      12 | `unformattedArticleTextContentIncludingMetadata` | `__InjectedScript_ReaderArticleFinder.js:13:67861`                                |
|   -7.7% | -1.00ms | 12.8% → 11.7% | 13.0ms → 12.0ms | 13 → 12 | `(anonymous)`                                    | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:12:421` |
|   -7.7% | -1.00ms | 12.8% → 11.7% | 13.0ms → 12.0ms | 13 → 12 | `(anonymous)`                                    | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:45:636`       |
|   -7.7% | -1.00ms | 12.8% → 11.7% | 13.0ms → 12.0ms | 13 → 12 | `mightThrow`                                     | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:44:918`       |
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `(anonymous)`                                    | `./wiki/Profiling_(computer_programming):6:19`                                    |
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `(anonymous)`                                    | `./wiki/Profiling_(computer_programming):8:44`                                    |
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `(program)`                                      | `./wiki/Profiling_(computer_programming):6:10`                                    |
|  -20.0% | -1.00ms |   4.9% → 3.9% |   5.0ms → 4.0ms |   5 → 4 | `(anonymous)`                                    | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:812` |

##### Standard library

|  Change |   Delta |             % |            Time | Samples | Function                                         | Location                                           |
| ------: | ------: | ------------: | --------------: | ------: | ------------------------------------------------ | -------------------------------------------------- |
|  -68.9% | -7.18ms |  10.2% → 3.2% |  10.4ms → 3.2ms |   2 → 1 | `updateArticleBylineAndDateElementsIfNecessary`  | `__InjectedScript_ReaderArticleFinder.js:13:53699` |
|  -68.9% | -7.18ms |  10.2% → 3.2% |  10.4ms → 3.2ms |   2 → 1 | `adoptableMetadataBlock`                         | `__InjectedScript_ReaderArticleFinder.js:13:48923` |
| removed | -5.21ms |   5.1% → 0.0% |     5.2ms → 0ms |   1 → 0 | `levenshteinDistance`                            | `__InjectedScript_ReaderArticleFinder.js:12:6770`  |
| removed | -5.21ms |   5.1% → 0.0% |     5.2ms → 0ms |   1 → 0 | `stringSimilarity`                               | `__InjectedScript_ReaderArticleFinder.js:12:7091`  |
| removed | -5.21ms |   5.1% → 0.0% |     5.2ms → 0ms |   1 → 0 | `de`                                             | `__InjectedScript_ReaderArticleFinder.js:13:42521` |
| removed | -2.00ms |   2.0% → 0.0% |     2.0ms → 0ms |   2 → 0 | `_findHiddenUsernameElement`                     | `FormMetadata.js:3:75498`                          |
|  -37.9% | -1.97ms |   5.1% → 3.2% |   5.2ms → 3.2ms |       1 | `trimmedInnerTextIgnoringTextTransform`          | `__InjectedScript_ReaderArticleFinder.js:12:6561`  |
|  -37.9% | -1.97ms |   5.1% → 3.2% |   5.2ms → 3.2ms |       1 | `findArticleBylineElementWithoutRejection`       | `__InjectedScript_ReaderArticleFinder.js:13:50372` |
|  -37.9% | -1.97ms |   5.1% → 3.2% |   5.2ms → 3.2ms |       1 | `findArticleBylineElement`                       | `__InjectedScript_ReaderArticleFinder.js:13:50186` |
|  -37.9% | -1.97ms |   5.1% → 3.2% |   5.2ms → 3.2ms |       1 | `updateArticleBylineAndDateElements`             | `__InjectedScript_ReaderArticleFinder.js:13:53902` |
|   -5.9% | -1.45ms | 24.2% → 22.7% | 24.6ms → 23.2ms |      12 | `unformattedArticleTextContentIncludingMetadata` | `__InjectedScript_ReaderArticleFinder.js:13:67861` |
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `exec`                                           | `<unknown>`                                        |
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `(anonymous)`                                    | `FormMetadata.js:3:16812`                          |
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `reduce`                                         | `<unknown>`                                        |
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `_createLogicalFormsForControls`                 | `FormMetadata.js:3:23832`                          |
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `_looksLikeOneTimeCodeField`                     | `FormMetadata.js:3:42732`                          |
|  -33.3% | -1.00ms |   3.0% → 2.0% |   3.0ms → 2.0ms |   3 → 2 | `stringsMatchAnyRegularExpressions`              | `FormMetadata.js:3:8216`                           |
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `Set`                                            | `<unknown>`                                        |
|  -33.3% | -1.00ms |   3.0% → 2.0% |   3.0ms → 2.0ms |   3 → 2 | `cachedElementBoundingRect`                      | `__InjectedScript_ReaderArticleFinder.js:12:5336`  |
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `shouldDisqualifyDueToHeaderDensity`             | `__InjectedScript_ReaderArticleFinder.js:12:30932` |

##### Ours

|  Change |   Delta |             % |            Time | Samples | Function         | Location                                                                               |
| ------: | ------: | ------------: | --------------: | ------: | ---------------- | -------------------------------------------------------------------------------------- |
|  -50.0% | -2.00ms |   3.9% → 2.0% |   4.0ms → 2.0ms |   4 → 2 | `enqueue`        | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:255`      |
|  -40.0% | -2.00ms |   4.9% → 2.9% |   5.0ms → 3.0ms |   5 → 3 | `require`        | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:8:344`       |
|   -7.7% | -1.00ms | 12.8% → 11.7% | 13.0ms → 12.0ms | 13 → 12 | `(anonymous)`    | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:12:421`      |
|   -7.7% | -1.00ms | 12.8% → 11.7% | 13.0ms → 12.0ms | 13 → 12 | `(anonymous)`    | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:45:636`            |
|   -7.7% | -1.00ms | 12.8% → 11.7% | 13.0ms → 12.0ms | 13 → 12 | `mightThrow`     | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:44:918`            |
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `(anonymous)`    | `./wiki/Profiling_(computer_programming):6:19`                                         |
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `(anonymous)`    | `./wiki/Profiling_(computer_programming):8:44`                                         |
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `(program)`      | `./wiki/Profiling_(computer_programming):6:10`                                         |
|  -20.0% | -1.00ms |   4.9% → 3.9% |   5.0ms → 4.0ms |   5 → 4 | `(anonymous)`    | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:812`      |
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `(anonymous)`    | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:23:156`      |
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `(anonymous)`    | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:528`      |
|  -20.0% | -1.00ms |   4.9% → 3.9% |   5.0ms → 4.0ms |   5 → 4 | `(program)`      | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:1:1`         |
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `resolveIndex`   | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:352`      |
|  -50.0% | -1.00ms |   2.0% → 1.0% |   2.0ms → 1.0ms |   2 → 1 | `load`           | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:20:748`      |
|  -50.0% | -1.00ms |   2.0% → 1.0% |   2.0ms → 1.0ms |   2 → 1 | `init`           | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:20:645`      |
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `splitModuleKey` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:720`      |
|  -33.3% | -1.00ms |   3.0% → 2.0% |   3.0ms → 2.0ms |   3 → 2 | `impl`           | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:18:205`      |
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `(program)`      | `./w/load.php?lang=en&modules=ext.quicksurveys.lib&skin=vector-2022&version=kdhjm:1:1` |
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `(anonymous)`    | `./w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:1:24`     |
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `(program)`      | `./w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:1:1`      |

##### Native

|  Change |   Delta |           % |        Time | Samples | Function           | Location    |
| ------: | ------: | ----------: | ----------: | ------: | ------------------ | ----------- |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `setAttribute`     | `<unknown>` |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `addEventListener` | `<unknown>` |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `nodeAtPoint`      | `<unknown>` |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `bound `           | `<unknown>` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `findExtraArticle` (`__InjectedScript_ReaderArticleFinder.js:13:55651`)

|  Change |   Delta |             % |          Time | Samples | Callee                                        | Location                                           |
| ------: | ------: | ------------: | ------------: | ------: | --------------------------------------------- | -------------------------------------------------- |
|     new | +3.23ms |  0.0% → 38.2% |   0ms → 3.2ms |   0 → 1 | `sortCandidateElementsInDescendingScoreOrder` | `__InjectedScript_ReaderArticleFinder.js:13:56628` |
| +111.7% | +2.23ms | 66.7% → 50.0% | 2.0ms → 4.2ms |       2 | `findExtraArticleCandidateElements`           | `__InjectedScript_ReaderArticleFinder.js:13:57439` |

##### `extraArticleNode` (`__InjectedScript_ReaderArticleFinder.js:13:8749`)

|  Change |   Delta |      % |          Time | Samples | Callee             | Location                                           |
| ------: | ------: | -----: | ------------: | ------: | ------------------ | -------------------------------------------------- |
| +546.8% | +5.47ms | 100.0% | 1.0ms → 6.5ms |   1 → 2 | `findExtraArticle` | `__InjectedScript_ReaderArticleFinder.js:13:55651` |

##### `articleTitleInformation` (`__InjectedScript_ReaderArticleFinder.js:13:39662`)

|  Change |   Delta |             % |          Time | Samples | Callee                     | Location                                           |
| ------: | ------: | ------------: | ------------: | ------: | -------------------------- | -------------------------------------------------- |
| +546.8% | +5.47ms | 12.2% → 50.0% | 1.0ms → 6.5ms |   1 → 2 | `extraArticleNode`         | `__InjectedScript_ReaderArticleFinder.js:13:8749`  |
| removed | -5.21ms |  63.4% → 0.0% |   5.2ms → 0ms |   1 → 0 | `de`                       | `__InjectedScript_ReaderArticleFinder.js:13:42521` |
|     new | +3.23ms |  0.0% → 25.0% |   0ms → 3.2ms |   0 → 1 | `normalizedElementTagName` | `__InjectedScript_ReaderArticleFinder.js:12:19601` |
|     new | +3.23ms |  0.0% → 25.0% |   0ms → 3.2ms |   0 → 1 | `domDistance`              | `__InjectedScript_ReaderArticleFinder.js:12:2553`  |
| removed | -1.00ms |  12.2% → 0.0% |   1.0ms → 0ms |   1 → 0 | `bound `                   | `<unknown>`                                        |

##### `articleTitle` (`__InjectedScript_ReaderArticleFinder.js:13:39565`)

| Change |   Delta |      % |           Time | Samples | Callee                    | Location                                           |
| -----: | ------: | -----: | -------------: | ------: | ------------------------- | -------------------------------------------------- |
| +57.6% | +4.73ms | 100.0% | 8.2ms → 12.9ms |       4 | `articleTitleInformation` | `__InjectedScript_ReaderArticleFinder.js:13:39662` |

##### `sort` (`<unknown>`)

| Change |   Delta |            % |        Time | Samples | Callee          | Location    |
| -----: | ------: | -----------: | ----------: | ------: | --------------- | ----------- |
|    new | +3.23ms | 0.0% → 76.4% | 0ms → 3.2ms |   0 → 1 | `sortMergeSort` | `<unknown>` |
|    new | +1.00ms | 0.0% → 23.6% | 0ms → 1.0ms |   0 → 1 | `sortCompact`   | `<unknown>` |

##### `(anonymous)` (`__InjectedScript_ReaderArticleFinder.js:12:25480`)

|  Change |   Delta |             % |        Time | Samples | Callee                            | Location                                           |
| ------: | ------: | ------------: | ----------: | ------: | --------------------------------- | -------------------------------------------------- |
|     new | +3.23ms |  0.0% → 76.4% | 0ms → 3.2ms |   0 → 1 | `elementLooksLikePartOfACarousel` | `__InjectedScript_ReaderArticleFinder.js:12:8505`  |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `cachedElementBoundingRect`       | `__InjectedScript_ReaderArticleFinder.js:12:5336`  |
|     new | +1.00ms |  0.0% → 23.6% | 0ms → 1.0ms |   0 → 1 | `CandidateElement`                | `__InjectedScript_ReaderArticleFinder.js:12:25119` |

##### `sortMerge` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Callee | Location                                           |
| -----: | ------: | ------------: | ----------: | ------: | ------ | -------------------------------------------------- |
|    new | +3.23ms | 0.0% → 100.0% | 0ms → 3.2ms |   0 → 1 | `t`    | `__InjectedScript_ReaderArticleFinder.js:13:56642` |

##### `sortMergeSort` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Callee      | Location    |
| -----: | ------: | ------------: | ----------: | ------: | ----------- | ----------- |
|    new | +3.23ms | 0.0% → 100.0% | 0ms → 3.2ms |   0 → 1 | `sortMerge` | `<unknown>` |

##### `sortCandidateElementsInDescendingScoreOrder` (`__InjectedScript_ReaderArticleFinder.js:13:56628`)

| Change |   Delta |             % |        Time | Samples | Callee | Location    |
| -----: | ------: | ------------: | ----------: | ------: | ------ | ----------- |
|    new | +3.23ms | 0.0% → 100.0% | 0ms → 3.2ms |   0 → 1 | `sort` | `<unknown>` |

##### `execute` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:868`)

| Change |   Delta |              % |            Time | Samples | Callee      | Location                                                                         |
| -----: | ------: | -------------: | --------------: | ------: | ----------- | -------------------------------------------------------------------------------- |
| +16.7% | +2.00ms | 100.0% → 93.3% | 12.0ms → 14.0ms | 12 → 14 | `runScript` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59` |

##### `doPropagation` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254`)

| Change |   Delta |             % |            Time | Samples | Callee    | Location                                                                          |
| -----: | ------: | ------------: | --------------: | ------: | --------- | --------------------------------------------------------------------------------- |
| +25.0% | +3.00ms | 92.3% → 93.8% | 12.0ms → 15.0ms | 12 → 15 | `execute` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:868` |

##### `each` (`./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:105`)

|  Change |   Delta |            % |        Time | Samples | Callee        | Location                                                                     |
| ------: | ------: | -----------: | ----------: | ------: | ------------- | ---------------------------------------------------------------------------- |
| removed | -1.00ms | 12.5% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)` | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:46:515`  |
|     new | +1.00ms |  0.0% → 9.1% | 0ms → 1.0ms |   0 → 1 | `(anonymous)` | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:106:794` |
|     new | +1.00ms |  0.0% → 9.1% | 0ms → 1.0ms |   0 → 1 | `(anonymous)` | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:72:988`  |

##### `forEach` (`<unknown>`)

| Change |   Delta |            % |        Time | Samples | Callee         | Location                                                                                  |
| -----: | ------: | -----------: | ----------: | ------: | -------------- | ----------------------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 16.7% | 0ms → 1.0ms |   0 → 1 | `(anonymous)`  | `./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:56:287`      |
|    new | +1.00ms | 0.0% → 16.7% | 0ms → 1.0ms |   0 → 1 | `(anonymous)`  | `./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:54:529`      |
|    new | +1.00ms | 0.0% → 16.7% | 0ms → 1.0ms |   0 → 1 | `(anonymous)`  | `./w/load.php?lang=en&modules=ext.quicksurveys.lib&skin=vector-2022&version=kdhjm:11:203` |
|    new | +1.00ms | 0.0% → 16.7% | 0ms → 1.0ms |   0 → 1 | `doSendEvents` | `./w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:10:181`      |

##### `findExtraArticleCandidateElements` (`__InjectedScript_ReaderArticleFinder.js:13:57439`)

|  Change |   Delta |              % |          Time | Samples | Callee        | Location                                           |
| ------: | ------: | -------------: | ------------: | ------: | ------------- | -------------------------------------------------- |
| +323.4% | +3.23ms | 50.0% → 100.0% | 1.0ms → 4.2ms |   1 → 2 | `(anonymous)` | `__InjectedScript_ReaderArticleFinder.js:12:25480` |
| removed | -1.00ms |   50.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `push`        | `<unknown>`                                        |

##### `_collectMetadata` (`FormMetadata.js:3:78950`)

| Change |   Delta |             % |          Time | Samples | Callee                               | Location                  |
| -----: | ------: | ------------: | ------------: | ------: | ------------------------------------ | ------------------------- |
| +12.5% | +1.00ms | 88.9% → 81.8% | 8.0ms → 9.0ms |   8 → 9 | `_collectFormMetadata`               | `FormMetadata.js:3:62833` |
|    new | +1.00ms |   0.0% → 9.1% |   0ms → 1.0ms |   0 → 1 | `_markFormIsBestForStreamlinedLogin` | `FormMetadata.js:3:77367` |

##### `formsAndMetadata` (`FormMetadata.js:3:82286`)

| Change |   Delta |      % |           Time | Samples | Callee             | Location                  |
| -----: | ------: | -----: | -------------: | ------: | ------------------ | ------------------------- |
| +22.2% | +2.00ms | 100.0% | 9.0ms → 11.0ms |  9 → 11 | `_collectMetadata` | `FormMetadata.js:3:78950` |

##### `_stringsToEvaluateToDetermineIfElementIsFollowedByAffordance` (`FormMetadata.js:3:21490`)

| Change |   Delta |            % |        Time | Samples | Callee                                           | Location                  |
| -----: | ------: | -----------: | ----------: | ------: | ------------------------------------------------ | ------------------------- |
|    new | +1.00ms | 0.0% → 33.3% | 0ms → 1.0ms |   0 → 1 | `_dataForComputingMatchFromPageScanAfterElement` | `FormMetadata.js:3:22137` |
|    new | +1.00ms | 0.0% → 33.3% | 0ms → 1.0ms |   0 → 1 | `pathFromAnchorWithoutLeadingSlash`              | `FormMetadata.js:3:8339`  |

##### `CandidateElement` (`__InjectedScript_ReaderArticleFinder.js:12:25119`)

|  Change |   Delta |              % |          Time | Samples | Callee                                                | Location                                           |
| ------: | ------: | -------------: | ------------: | ------: | ----------------------------------------------------- | -------------------------------------------------- |
| +100.0% | +1.00ms | 100.0% → 66.7% | 1.0ms → 2.0ms |   1 → 2 | `usableTextNodesInElement`                            | `__InjectedScript_ReaderArticleFinder.js:12:29085` |
|     new | +1.00ms |   0.0% → 33.3% |   0ms → 1.0ms |   0 → 1 | `calculateElementTagNameAndAttributesScoreMultiplier` | `__InjectedScript_ReaderArticleFinder.js:12:27497` |

##### `i` (`__InjectedScript_ReaderArticleFinder.js:12:29250`)

| Change |   Delta |            % |        Time | Samples | Callee                     | Location                                           |
| -----: | ------: | -----------: | ----------: | ------: | -------------------------- | -------------------------------------------------- |
|    new | +1.00ms | 0.0% → 50.0% | 0ms → 1.0ms |   0 → 1 | `normalizedElementTagName` | `__InjectedScript_ReaderArticleFinder.js:12:19601` |
|    new | +1.00ms | 0.0% → 50.0% | 0ms → 1.0ms |   0 → 1 | `evaluate`                 | `<unknown>`                                        |

##### `_collectFormMetadata` (`FormMetadata.js:3:62833`)

|  Change |   Delta |             % |          Time | Samples | Callee                                                | Location                  |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------------------------------- | ------------------------- |
| removed | -2.00ms |  25.0% → 0.0% |   2.0ms → 0ms |   2 → 0 | `_findHiddenUsernameElement`                          | `FormMetadata.js:3:75498` |
| +100.0% | +1.00ms | 12.5% → 22.2% | 1.0ms → 2.0ms |   1 → 2 | `_collectControlMetadata`                             | `FormMetadata.js:3:46804` |
|  +25.0% | +1.00ms | 50.0% → 55.6% | 4.0ms → 5.0ms |   4 → 5 | `_isElementFollowedByForgotUserNameOrEmailAffordance` | `FormMetadata.js:3:19474` |
|     new | +1.00ms |  0.0% → 11.1% |   0ms → 1.0ms |   0 → 1 | `_trailingArgumentsForCollectControlMetadataFunction` | `FormMetadata.js:3:62267` |

##### `get` (`./w/load.php?lang=en&modules=mediawiki.user&skin=vector-2022&version=163ne:4:740`)

| Change |   Delta |            % |        Time | Samples | Callee         | Location                                                                            |
| -----: | ------: | -----------: | ----------: | ------: | -------------- | ----------------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 50.0% | 0ms → 1.0ms |   0 → 1 | `match`        | `<unknown>`                                                                         |
|    new | +1.00ms | 0.0% → 50.0% | 0ms → 1.0ms |   0 → 1 | `escapeRegExp` | `./w/load.php?lang=en&modules=mediawiki.util&skin=vector-2022&version=1vbcg:11:619` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:558`)

|  Change |   Delta |             % |            Time | Samples | Callee          | Location                                                                                      |
| ------: | ------: | ------------: | --------------: | ------: | --------------- | --------------------------------------------------------------------------------------------- |
|  +23.1% | +3.00ms | 48.1% → 57.1% | 13.0ms → 16.0ms | 13 → 16 | `doPropagation` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254`              |
| removed | -1.00ms |   3.7% → 0.0% |     1.0ms → 0ms |   1 → 0 | `(anonymous)`   | `./w/load.php?lang=en&modules=ext.wikimediaEvents&skin=vector-2022&version=lu7fs:30:633`      |
| removed | -1.00ms |   3.7% → 0.0% |     1.0ms → 0ms |   1 → 0 | `doMaintenance` | `./w/load.php?lang=en&modules=ext.centralNotice.startUp&skin=vector-2022&version=bw1m8:3:383` |

##### `runScript` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59`)

|  Change |   Delta |           % |        Time | Samples | Callee                    | Location                                                                                               |
| ------: | ------: | ----------: | ----------: | ------: | ------------------------- | ------------------------------------------------------------------------------------------------------ |
| removed | -1.00ms | 4.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `index.js`                | `./w/load.php?lang=en&modules=mediawiki.cookie&skin=vector-2022&version=spq95:1:106`                   |
| removed | -1.00ms | 4.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)`             | `./w/load.php?lang=en&modules=ext.visualEditor.core.utils.parsing&skin=vector-2022&version=962r8:1:86` |
| removed | -1.00ms | 4.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `Title.js`                | `./w/load.php?lang=en&modules=mediawiki.Title&skin=vector-2022&version=1fg2m:1:105`                    |
| removed | -1.00ms | 4.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `index.js`                | `./w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:1:105`                    |
| removed | -1.00ms | 4.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `ext.navigationTiming.js` | `./w/load.php?lang=en&modules=ext.navigationTiming&skin=vector-2022&version=o0d51:1:140`               |

##### `(anonymous)` (`./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:79:610`)

| Change |   Delta |      % |          Time | Samples | Callee     | Location                                                                    |
| -----: | ------: | -----: | ------------: | ------: | ---------- | --------------------------------------------------------------------------- |
| +50.0% | +1.00ms | 100.0% | 2.0ms → 3.0ms |   2 → 3 | `domManip` | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:74:285` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:77:868`)

|  Change |   Delta |      % |          Time | Samples | Callee         | Location    |
| ------: | ------: | -----: | ------------: | ------: | -------------- | ----------- |
| +100.0% | +1.00ms | 100.0% | 1.0ms → 2.0ms |   1 → 2 | `insertBefore` | `<unknown>` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:41:751`)

| Change |   Delta |             % |        Time | Samples | Callee          | Location                                                                    |
| -----: | ------: | ------------: | ----------: | ------: | --------------- | --------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `createOptions` | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:41:604` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:52:564`)

| Change |   Delta |             % |        Time | Samples | Callee     | Location                                                                    |
| -----: | ------: | ------------: | ----------: | ------: | ---------- | --------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `dataAttr` | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:51:398` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:72:988`)

| Change |   Delta |             % |        Time | Samples | Callee   | Location                                                                    |
| -----: | ------: | ------------: | ----------: | ------: | -------- | --------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `remove` | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:62:821` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=ext.wikimediaEvents&skin=vector-2022&version=lu7fs:25:556`)

| Change |   Delta |             % |        Time | Samples | Callee    | Location                                                                                |
| -----: | ------: | ------------: | ----------: | ------: | --------- | --------------------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `getFont` | `./w/load.php?lang=en&modules=ext.wikimediaEvents&skin=vector-2022&version=lu7fs:24:95` |

##### `addToHead` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:3:909`)

| Change |   Delta |      % |          Time | Samples | Callee         | Location    |
| -----: | ------: | -----: | ------------: | ------: | -------------- | ----------- |
| +33.3% | +1.00ms | 100.0% | 3.0ms → 4.0ms |   3 → 4 | `insertBefore` | `<unknown>` |

##### `newStyleTag` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:4:59`)

| Change |   Delta |      % |          Time | Samples | Callee      | Location                                                                         |
| -----: | ------: | -----: | ------------: | ------: | ----------- | -------------------------------------------------------------------------------- |
| +33.3% | +1.00ms | 100.0% | 3.0ms → 4.0ms |   3 → 4 | `addToHead` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:3:909` |

##### `domManip` (`./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:74:285`)

|  Change |   Delta |             % |          Time | Samples | Callee          | Location                                                                    |
| ------: | ------: | ------------: | ------------: | ------: | --------------- | --------------------------------------------------------------------------- |
| removed | -1.00ms |  50.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `buildFragment` | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:59:231` |
| +100.0% | +1.00ms | 50.0% → 66.7% | 1.0ms → 2.0ms |   1 → 2 | `(anonymous)`   | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:77:868` |
|     new | +1.00ms |  0.0% → 33.3% |   0ms → 1.0ms |   0 → 1 | `flat`          | `<unknown>`                                                                 |

##### `resources/skins.vector.js/skin.js` (`./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:1:155`)

|  Change |   Delta |             % |          Time | Samples | Callee    | Location                                                                            |
| ------: | ------: | ------------: | ------------: | ------: | --------- | ----------------------------------------------------------------------------------- |
| removed | -1.00ms |  14.3% → 0.0% |   1.0ms → 0ms |   1 → 0 | `init`    | `./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:2:835` |
|  +16.7% | +1.00ms | 85.7% → 87.5% | 6.0ms → 7.0ms |   6 → 7 | `main`    | `./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:1:965` |
|     new | +1.00ms |  0.0% → 12.5% |   0ms → 1.0ms |   0 → 1 | `require` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:8:344`    |

##### `(anonymous)` (`./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:56:287`)

| Change |   Delta |             % |        Time | Samples | Callee                  | Location                                                                             |
| -----: | ------: | ------------: | ----------: | ------: | ----------------------- | ------------------------------------------------------------------------------------ |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `addPortletLinkHandler` | `./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:55:613` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:54:529`)

| Change |   Delta |             % |        Time | Samples | Callee | Location                                                                                  |
| -----: | ------: | ------------: | ----------: | ------: | ------ | ----------------------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `bind` | `./w/load.php?lang=en&modules=mediawiki.page.ready&skin=vector-2022&version=1et5k:14:186` |

##### `updateArticleBylineAndDateElementsIfNecessary` (`__InjectedScript_ReaderArticleFinder.js:13:53699`)

| Change |   Delta |              % |          Time | Samples | Callee                               | Location                                           |
| -----: | ------: | -------------: | ------------: | ------: | ------------------------------------ | -------------------------------------------------- |
| -37.9% | -1.97ms | 50.0% → 100.0% | 5.2ms → 3.2ms |       1 | `updateArticleBylineAndDateElements` | `__InjectedScript_ReaderArticleFinder.js:13:53902` |

##### `adoptableMetadataBlock` (`__InjectedScript_ReaderArticleFinder.js:13:48923`)

| Change |   Delta |      % |           Time | Samples | Callee                                          | Location                                           |
| -----: | ------: | -----: | -------------: | ------: | ----------------------------------------------- | -------------------------------------------------- |
| -68.9% | -7.18ms | 100.0% | 10.4ms → 3.2ms |   2 → 1 | `updateArticleBylineAndDateElementsIfNecessary` | `__InjectedScript_ReaderArticleFinder.js:13:53699` |

##### `stringSimilarity` (`__InjectedScript_ReaderArticleFinder.js:12:7091`)

|  Change |   Delta |             % |        Time | Samples | Callee                | Location                                          |
| ------: | ------: | ------------: | ----------: | ------: | --------------------- | ------------------------------------------------- |
| removed | -5.21ms | 100.0% → 0.0% | 5.2ms → 0ms |   1 → 0 | `levenshteinDistance` | `__InjectedScript_ReaderArticleFinder.js:12:6770` |

##### `de` (`__InjectedScript_ReaderArticleFinder.js:13:42521`)

|  Change |   Delta |             % |        Time | Samples | Callee             | Location                                          |
| ------: | ------: | ------------: | ----------: | ------: | ------------------ | ------------------------------------------------- |
| removed | -5.21ms | 100.0% → 0.0% | 5.2ms → 0ms |   1 → 0 | `stringSimilarity` | `__InjectedScript_ReaderArticleFinder.js:12:7091` |

##### `enqueue` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:255`)

|  Change |   Delta |            % |        Time | Samples | Callee        | Location                                                                           |
| ------: | ------: | -----------: | ----------: | ------: | ------------- | ---------------------------------------------------------------------------------- |
| removed | -1.00ms | 25.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `forEach`     | `<unknown>`                                                                        |
| removed | -1.00ms | 25.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)` | `./w/load.php?lang=en&modules=mediawiki.base&skin=vector-2022&version=13iwe:6:847` |

##### `require` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:8:344`)

|  Change |   Delta |            % |        Time | Samples | Callee                                  | Location                                                                                |
| ------: | ------: | -----------: | ----------: | ------: | --------------------------------------- | --------------------------------------------------------------------------------------- |
| removed | -1.00ms | 20.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `jar.js`                                | `./w/load.php?lang=en&modules=mediawiki.cookie&skin=vector-2022&version=spq95:3:20`     |
| removed | -1.00ms | 20.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `eventSender.js`                        | `./w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:10:28`     |
| removed | -1.00ms | 20.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `webUIScroll.js`                        | `./w/load.php?lang=en&modules=ext.wikimediaEvents&skin=vector-2022&version=lu7fs:26:28` |
| removed | -1.00ms | 20.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `resources/ext.quicksurveys.lib/lib.js` | `./w/load.php?lang=en&modules=ext.quicksurveys.lib&skin=vector-2022&version=kdhjm:3:51` |
|     new | +1.00ms | 0.0% → 33.3% | 0ms → 1.0ms |   0 → 1 | `editAttemptStep.js`                    | `./w/load.php?lang=en&modules=ext.wikimediaEvents&skin=vector-2022&version=lu7fs:61:32` |

##### `_findHiddenUsernameElement` (`FormMetadata.js:3:75498`)

|  Change |   Delta |            % |        Time | Samples | Callee               | Location                 |
| ------: | ------: | -----------: | ----------: | ------: | -------------------- | ------------------------ |
| removed | -1.00ms | 50.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `queryAllBySelector` | `FormMetadata.js:3:7383` |

##### `findArticleBylineElementWithoutRejection` (`__InjectedScript_ReaderArticleFinder.js:13:50372`)

| Change |   Delta |      % |          Time | Samples | Callee                                  | Location                                          |
| -----: | ------: | -----: | ------------: | ------: | --------------------------------------- | ------------------------------------------------- |
| -37.9% | -1.97ms | 100.0% | 5.2ms → 3.2ms |       1 | `trimmedInnerTextIgnoringTextTransform` | `__InjectedScript_ReaderArticleFinder.js:12:6561` |

##### `findArticleBylineElement` (`__InjectedScript_ReaderArticleFinder.js:13:50186`)

| Change |   Delta |      % |          Time | Samples | Callee                                     | Location                                           |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------------ | -------------------------------------------------- |
| -37.9% | -1.97ms | 100.0% | 5.2ms → 3.2ms |       1 | `findArticleBylineElementWithoutRejection` | `__InjectedScript_ReaderArticleFinder.js:13:50372` |

##### `updateArticleBylineAndDateElements` (`__InjectedScript_ReaderArticleFinder.js:13:53902`)

| Change |   Delta |      % |          Time | Samples | Callee                     | Location                                           |
| -----: | ------: | -----: | ------------: | ------: | -------------------------- | -------------------------------------------------- |
| -37.9% | -1.97ms | 100.0% | 5.2ms → 3.2ms |       1 | `findArticleBylineElement` | `__InjectedScript_ReaderArticleFinder.js:13:50186` |

##### `unformattedArticleTextContentIncludingMetadata` (`__InjectedScript_ReaderArticleFinder.js:13:67861`)

| Change |   Delta |             % |           Time | Samples | Callee                   | Location                                           |
| -----: | ------: | ------------: | -------------: | ------: | ------------------------ | -------------------------------------------------- |
| -68.9% | -7.18ms | 42.3% → 14.0% | 10.4ms → 3.2ms |   2 → 1 | `adoptableMetadataBlock` | `__InjectedScript_ReaderArticleFinder.js:13:48923` |
| +57.6% | +4.73ms | 33.3% → 55.8% | 8.2ms → 12.9ms |       4 | `articleTitle`           | `__InjectedScript_ReaderArticleFinder.js:13:39565` |
| +16.7% | +1.00ms | 24.4% → 30.2% |  6.0ms → 7.0ms |   6 → 7 | `articleNode`            | `__InjectedScript_ReaderArticleFinder.js:13:8074`  |

##### `(anonymous)` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:12:421`)

| Change |   Delta |      % |            Time | Samples | Callee      | Location                                                                         |
| -----: | ------: | -----: | --------------: | ------: | ----------- | -------------------------------------------------------------------------------- |
|  -7.7% | -1.00ms | 100.0% | 13.0ms → 12.0ms | 13 → 12 | `runScript` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:45:636`)

| Change |   Delta |      % |            Time | Samples | Callee       | Location                                                                    |
| -----: | ------: | -----: | --------------: | ------: | ------------ | --------------------------------------------------------------------------- |
|  -7.7% | -1.00ms | 100.0% | 13.0ms → 12.0ms | 13 → 12 | `mightThrow` | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:44:918` |

##### `mightThrow` (`./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:44:918`)

|  Change |   Delta |           % |        Time | Samples | Callee     | Location                                                                                      |
| ------: | ------: | ----------: | ----------: | ------: | ---------- | --------------------------------------------------------------------------------------------- |
| removed | -1.00ms | 7.7% → 0.0% | 1.0ms → 0ms |   1 → 0 | `fireWith` | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:43:150`                   |
| removed | -1.00ms | 7.7% → 0.0% | 1.0ms → 0ms |   1 → 0 | `Deferred` | `./w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:43:832`                   |
|     new | +1.00ms | 0.0% → 8.3% | 0ms → 1.0ms |   0 → 1 | `init`     | `./w/load.php?lang=en&modules=mediawiki.page.watch.ajax&skin=vector-2022&version=1rpbn:3:897` |

##### `(anonymous)` (`./wiki/Profiling_(computer_programming):8:44`)

|  Change |   Delta |             % |        Time | Samples | Callee | Location                                                                          |
| ------: | ------: | ------------: | ----------: | ------: | ------ | --------------------------------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `impl` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:18:205` |

##### `(program)` (`./wiki/Profiling_(computer_programming):6:10`)

|  Change |   Delta |             % |        Time | Samples | Callee        | Location                                       |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ---------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)` | `./wiki/Profiling_(computer_programming):6:19` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:812`)

|  Change |   Delta |            % |        Time | Samples | Callee        | Location                                                                          |
| ------: | ------: | -----------: | ----------: | ------: | ------------- | --------------------------------------------------------------------------------- |
| removed | -1.00ms | 20.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:23:156` |

##### `reduce` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Callee        | Location                  |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)` | `FormMetadata.js:3:16812` |

##### `cachedElementBoundingRect` (`__InjectedScript_ReaderArticleFinder.js:12:5336`)

|  Change |   Delta |            % |        Time | Samples | Callee                                             | Location                                          |
| ------: | ------: | -----------: | ----------: | ------: | -------------------------------------------------- | ------------------------------------------------- |
| removed | -1.00ms | 33.3% → 0.0% | 1.0ms → 0ms |   1 → 0 | `elementIsHidingContentDueToContentVisibilityAuto` | `__InjectedScript_ReaderArticleFinder.js:12:5112` |
|     new | +1.00ms | 0.0% → 50.0% | 0ms → 1.0ms |   0 → 1 | `getBoundingClientRect`                            | `<unknown>`                                       |

##### `shouldDisqualifyDueToHeaderDensity` (`__InjectedScript_ReaderArticleFinder.js:12:30932`)

|  Change |   Delta |             % |        Time | Samples | Callee     | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ---------- | ----------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `evaluate` | `<unknown>` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:23:156`)

|  Change |   Delta |             % |        Time | Samples | Callee        | Location                                       |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ---------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)` | `./wiki/Profiling_(computer_programming):8:44` |

##### `(anonymous)` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:528`)

|  Change |   Delta |             % |        Time | Samples | Callee       | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ------------ | ----------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `setTimeout` | `<unknown>` |

##### `(program)` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:1:1`)

| Change |   Delta |      % |          Time | Samples | Callee        | Location                                                                          |
| -----: | ------: | -----: | ------------: | ------: | ------------- | --------------------------------------------------------------------------------- |
| -20.0% | -1.00ms | 100.0% | 5.0ms → 4.0ms |   5 → 4 | `(anonymous)` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:812` |

##### `init` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:20:645`)

| Change |   Delta |      % |          Time | Samples | Callee | Location                                                                          |
| -----: | ------: | -----: | ------------: | ------: | ------ | --------------------------------------------------------------------------------- |
| -50.0% | -1.00ms | 100.0% | 2.0ms → 1.0ms |   2 → 1 | `load` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:20:748` |

##### `impl` (`./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:18:205`)

|  Change |   Delta |            % |        Time | Samples | Callee           | Location                                                                                                      |
| ------: | ------: | -----------: | ----------: | ------: | ---------------- | ------------------------------------------------------------------------------------------------------------- |
| removed | -1.00ms | 33.3% → 0.0% | 1.0ms → 0ms |   1 → 0 | `splitModuleKey` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:720`                             |
| removed | -1.00ms | 33.3% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)`    | `./w/load.php?lang=en&modules=ext.quicksurveys.lib&skin=vector-2022&version=kdhjm:1:24`                       |
| removed | -1.00ms | 33.3% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)`    | `./w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:1:24`                            |
|     new | +1.00ms | 0.0% → 50.0% | 0ms → 1.0ms |   0 → 1 | `(anonymous)`    | `./w/load.php?lang=en&modules=ext.visualEditor.desktopArticleTarget.init&skin=vector-2022&version=1xmtn:1:24` |
|     new | +1.00ms | 0.0% → 50.0% | 0ms → 1.0ms |   0 → 1 | `(anonymous)`    | `./w/load.php?lang=en&modules=mmv.bootstrap&skin=vector-2022&version=176u6:1:24`                              |

##### `(program)` (`./w/load.php?lang=en&modules=ext.quicksurveys.lib&skin=vector-2022&version=kdhjm:1:1`)

|  Change |   Delta |             % |        Time | Samples | Callee | Location                                                                          |
| ------: | ------: | ------------: | ----------: | ------: | ------ | --------------------------------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `impl` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:18:205` |

##### `(program)` (`./w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:1:1`)

|  Change |   Delta |             % |        Time | Samples | Callee | Location                                                                          |
| ------: | ------: | ------------: | ----------: | ------: | ------ | --------------------------------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `impl` | `./w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:18:205` |
