# CPU profile diff

Took 101.6ms → 102.2ms (+0.55ms, +0.5%) over 89 samples → 91 samples (1.1ms per sample).

| Category         | Change |   Delta |             % |            Time | Samples |
| ---------------- | -----: | ------: | ------------: | --------------: | ------: |
| Standard library |  -7.3% | -3.45ms | 46.9% → 43.2% | 47.6ms → 44.2ms | 35 → 33 |
| Ours             | -11.4% | -4.00ms | 34.4% → 30.3% | 35.0ms → 31.0ms | 35 → 31 |
| Native           | +42.1% | +8.00ms | 18.7% → 26.4% | 19.0ms → 27.0ms | 19 → 27 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|  Change |   Delta |           % |          Time | Samples | Function                             | Location                                                                                                    |
| ------: | ------: | ----------: | ------------: | ------: | ------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| +323.4% | +3.23ms | 1.0% → 4.1% | 1.0ms → 4.2ms |   1 → 2 | `normalizedElementTagName`           | `__InjectedScript_ReaderArticleFinder.js:12:19601`                                                          |
|     new | +3.23ms | 0.0% → 3.2% |   0ms → 3.2ms |   0 → 1 | `elementLooksLikePartOfACarousel`    | `__InjectedScript_ReaderArticleFinder.js:12:8505`                                                           |
|     new | +3.23ms | 0.0% → 3.2% |   0ms → 3.2ms |   0 → 1 | `t`                                  | `__InjectedScript_ReaderArticleFinder.js:13:56642`                                                          |
|     new | +3.23ms | 0.0% → 3.2% |   0ms → 3.2ms |   0 → 1 | `domDistance`                        | `__InjectedScript_ReaderArticleFinder.js:12:2553`                                                           |
|  +50.0% | +2.00ms | 3.9% → 5.9% | 4.0ms → 6.0ms |   4 → 6 | `insertBefore`                       | `<unknown>`                                                                                                 |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `register`                           | `w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:249`                             |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `execute`                            | `w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:868`                             |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `each`                               | `w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:105`                                    |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `(anonymous)`                        | `w/load.php?lang=en&modules=mediawiki.page.ready&skin=vector-2022&version=1et5k:1:613`                      |
|  +25.0% | +1.00ms | 3.9% → 4.9% | 4.0ms → 5.0ms |   4 → 5 | `getPropertyValue`                   | `<unknown>`                                                                                                 |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `(anonymous)`                        | `w/load.php?lang=en&modules=mmv.bootstrap&skin=vector-2022&version=176u6:1:24`                              |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `add`                                | `w/load.php?lang=en&modules=mediawiki.base&skin=vector-2022&version=13iwe:4:368`                            |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `(anonymous)`                        | `w/load.php?lang=en&modules=jquery.makeCollapsible&skin=vector-2022&version=1yvlc:2:91`                     |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `(anonymous)`                        | `w/load.php?lang=en&modules=ext.visualEditor.desktopArticleTarget.init&skin=vector-2022&version=1xmtn:1:24` |
| +100.0% | +1.00ms | 1.0% → 2.0% | 1.0ms → 2.0ms |   1 → 2 | `collectMatchingElementsInFlatTree`  | `<unknown>`                                                                                                 |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `getVisibleNonWhitespaceTextNodes`   | `__InjectedScript_ReaderArticleFinder.js:12:13801`                                                          |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `(anonymous)`                        | `__InjectedScript_ReaderArticleFinder.js:12:26535`                                                          |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `adjustArticleNodeUpwardIfNecessary` | `__InjectedScript_ReaderArticleFinder.js:13:4514`                                                           |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `sortCompact`                        | `<unknown>`                                                                                                 |
|     new | +1.00ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `createOptions`                      | `w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:41:604`                                   |

##### Standard library

|  Change |   Delta |           % |          Time | Samples | Function                                        | Location                                           |
| ------: | ------: | ----------: | ------------: | ------: | ----------------------------------------------- | -------------------------------------------------- |
| +323.4% | +3.23ms | 1.0% → 4.1% | 1.0ms → 4.2ms |   1 → 2 | `normalizedElementTagName`                      | `__InjectedScript_ReaderArticleFinder.js:12:19601` |
|     new | +3.23ms | 0.0% → 3.2% |   0ms → 3.2ms |   0 → 1 | `elementLooksLikePartOfACarousel`               | `__InjectedScript_ReaderArticleFinder.js:12:8505`  |
|     new | +3.23ms | 0.0% → 3.2% |   0ms → 3.2ms |   0 → 1 | `t`                                             | `__InjectedScript_ReaderArticleFinder.js:13:56642` |
|     new | +3.23ms | 0.0% → 3.2% |   0ms → 3.2ms |   0 → 1 | `domDistance`                                   | `__InjectedScript_ReaderArticleFinder.js:12:2553`  |
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

| Change |   Delta |           % |        Time | Samples | Function                    | Location                                                                                                    |
| -----: | ------: | ----------: | ----------: | ------: | --------------------------- | ----------------------------------------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `register`                  | `w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:249`                             |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `execute`                   | `w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:868`                             |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `each`                      | `w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:105`                                    |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `(anonymous)`               | `w/load.php?lang=en&modules=mediawiki.page.ready&skin=vector-2022&version=1et5k:1:613`                      |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `(anonymous)`               | `w/load.php?lang=en&modules=mmv.bootstrap&skin=vector-2022&version=176u6:1:24`                              |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `add`                       | `w/load.php?lang=en&modules=mediawiki.base&skin=vector-2022&version=13iwe:4:368`                            |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `(anonymous)`               | `w/load.php?lang=en&modules=jquery.makeCollapsible&skin=vector-2022&version=1yvlc:2:91`                     |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `(anonymous)`               | `w/load.php?lang=en&modules=ext.visualEditor.desktopArticleTarget.init&skin=vector-2022&version=1xmtn:1:24` |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `createOptions`             | `w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:41:604`                                   |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `sortDependencies`          | `w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:6:612`                              |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `(anonymous)`               | `w/load.php?lang=en&modules=mediawiki.api&skin=vector-2022&version=1yqeu:1:193`                             |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `init`                      | `w/load.php?lang=en&modules=ext.uls.preferences&skin=vector-2022&version=11u78:1:342`                       |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `get`                       | `w/load.php?lang=en&modules=mediawiki.cookie&skin=vector-2022&version=spq95:1:902`                          |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `filter`                    | `w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:37:404`                                   |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `(anonymous)`               | `w/load.php?lang=en&modules=jquery.spinner&skin=vector-2022&version=2h5sk:1:100`                            |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `updateTooltipOnElement`    | `w/load.php?lang=en&modules=mediawiki.util&skin=vector-2022&version=1vbcg:15:1080`                          |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `isXMLDoc`                  | `w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:915`                                    |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `dataAttr`                  | `w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:51:398`                                   |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `remove`                    | `w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:62:821`                                   |
|    new | +1.00ms | 0.0% → 1.0% | 0ms → 1.0ms |   0 → 1 | `bindDismissOnClickOutside` | `w/load.php?lang=en&modules=mediawiki.page.ready&skin=vector-2022&version=1et5k:13:286`                     |

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

|  Change |   Delta |           % |          Time | Samples | Function                                        | Location                                                                                             |
| ------: | ------: | ----------: | ------------: | ------: | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| removed | -5.21ms | 5.1% → 0.0% |   5.2ms → 0ms |   1 → 0 | `levenshteinDistance`                           | `__InjectedScript_ReaderArticleFinder.js:12:6770`                                                    |
| removed | -5.21ms | 5.1% → 0.0% |   5.2ms → 0ms |   1 → 0 | `updateArticleBylineAndDateElementsIfNecessary` | `__InjectedScript_ReaderArticleFinder.js:13:53699`                                                   |
|  -37.9% | -1.97ms | 5.1% → 3.2% | 5.2ms → 3.2ms |       1 | `trimmedInnerTextIgnoringTextTransform`         | `__InjectedScript_ReaderArticleFinder.js:12:6561`                                                    |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `(anonymous)`                                   | `wiki/Profiling_(computer_programming):6:19`                                                         |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `resolveIndex`                                  | `w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:352`                      |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `load`                                          | `w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:20:748`                      |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `splitModuleKey`                                | `w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:720`                      |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `(anonymous)`                                   | `w/load.php?lang=en&modules=ext.quicksurveys.lib&skin=vector-2022&version=kdhjm:11:203`              |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `(anonymous)`                                   | `w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:1:24`                     |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `(anonymous)`                                   | `w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:1:420`                             |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `(anonymous)`                                   | `w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:41:751`                            |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `add`                                           | `w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:42:286`                            |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `jar.js`                                        | `w/load.php?lang=en&modules=mediawiki.cookie&skin=vector-2022&version=spq95:3:20`                    |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `(anonymous)`                                   | `w/load.php?lang=en&modules=ext.visualEditor.core.utils.parsing&skin=vector-2022&version=962r8:1:86` |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `Title.js`                                      | `w/load.php?lang=en&modules=mediawiki.Title&skin=vector-2022&version=1fg2m:1:105`                    |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `eventSender.js`                                | `w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:10:28`                    |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `forEach`                                       | `<unknown>`                                                                                          |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `buildEvent`                                    | `w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:16:842`                   |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `isInSample`                                    | `w/load.php?lang=en&modules=ext.wikimediaEvents&skin=vector-2022&version=lu7fs:28:619`               |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `(anonymous)`                                   | `w/load.php?lang=en&modules=ext.cite.ux-enhancements&skin=vector-2022&version=1cpqh:4:23`            |

##### Standard library

|  Change |   Delta |           % |          Time | Samples | Function                                           | Location                                           |
| ------: | ------: | ----------: | ------------: | ------: | -------------------------------------------------- | -------------------------------------------------- |
| removed | -5.21ms | 5.1% → 0.0% |   5.2ms → 0ms |   1 → 0 | `levenshteinDistance`                              | `__InjectedScript_ReaderArticleFinder.js:12:6770`  |
| removed | -5.21ms | 5.1% → 0.0% |   5.2ms → 0ms |   1 → 0 | `updateArticleBylineAndDateElementsIfNecessary`    | `__InjectedScript_ReaderArticleFinder.js:13:53699` |
|  -37.9% | -1.97ms | 5.1% → 3.2% | 5.2ms → 3.2ms |       1 | `trimmedInnerTextIgnoringTextTransform`            | `__InjectedScript_ReaderArticleFinder.js:12:6561`  |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `forEach`                                          | `<unknown>`                                        |
| removed | -1.00ms | 1.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `exec`                                             | `<unknown>`                                        |
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

|  Change |   Delta |           % |        Time | Samples | Function         | Location                                                                                             |
| ------: | ------: | ----------: | ----------: | ------: | ---------------- | ---------------------------------------------------------------------------------------------------- |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)`    | `wiki/Profiling_(computer_programming):6:19`                                                         |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `resolveIndex`   | `w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:352`                      |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `load`           | `w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:20:748`                      |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `splitModuleKey` | `w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:720`                      |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)`    | `w/load.php?lang=en&modules=ext.quicksurveys.lib&skin=vector-2022&version=kdhjm:11:203`              |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)`    | `w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:1:24`                     |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)`    | `w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:1:420`                             |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)`    | `w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:41:751`                            |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `add`            | `w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:42:286`                            |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `jar.js`         | `w/load.php?lang=en&modules=mediawiki.cookie&skin=vector-2022&version=spq95:3:20`                    |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)`    | `w/load.php?lang=en&modules=ext.visualEditor.core.utils.parsing&skin=vector-2022&version=962r8:1:86` |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `Title.js`       | `w/load.php?lang=en&modules=mediawiki.Title&skin=vector-2022&version=1fg2m:1:105`                    |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `eventSender.js` | `w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:10:28`                    |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `buildEvent`     | `w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:16:842`                   |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `isInSample`     | `w/load.php?lang=en&modules=ext.wikimediaEvents&skin=vector-2022&version=lu7fs:28:619`               |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)`    | `w/load.php?lang=en&modules=ext.cite.ux-enhancements&skin=vector-2022&version=1cpqh:4:23`            |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `buildFragment`  | `w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:59:231`                            |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)`    | `w/load.php?lang=en&modules=ext.uls.interface&skin=vector-2022&version=pe1oy:1:171`                  |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `fireWith`       | `w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:43:150`                            |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `cleanData`      | `w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:76:830`                            |

##### Native

|  Change |   Delta |           % |        Time | Samples | Function                   | Location    |
| ------: | ------: | ----------: | ----------: | ------: | -------------------------- | ----------- |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `setAttribute`             | `<unknown>` |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `bound setupEventHandlers` | `<unknown>` |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `addEventListener`         | `<unknown>` |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `nodeAtPoint`              | `<unknown>` |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `bound `                   | `<unknown>` |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|  Change |   Delta |             % |            Time | Samples | Function                                      | Location                                                                        |
| ------: | ------: | ------------: | --------------: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------- |
| +182.3% | +5.47ms |   3.0% → 8.3% |   3.0ms → 8.5ms |   3 → 4 | `findExtraArticle`                            | `__InjectedScript_ReaderArticleFinder.js:13:55651`                              |
| +546.8% | +5.47ms |   1.0% → 6.3% |   1.0ms → 6.5ms |   1 → 2 | `extraArticleNode`                            | `__InjectedScript_ReaderArticleFinder.js:13:8749`                               |
|  +57.6% | +4.73ms |  8.1% → 12.7% |  8.2ms → 12.9ms |       4 | `articleTitleInformation`                     | `__InjectedScript_ReaderArticleFinder.js:13:39662`                              |
|  +57.6% | +4.73ms |  8.1% → 12.7% |  8.2ms → 12.9ms |       4 | `articleTitle`                                | `__InjectedScript_ReaderArticleFinder.js:13:39565`                              |
|     new | +4.23ms |   0.0% → 4.1% |     0ms → 4.2ms |   0 → 2 | `sort`                                        | `<unknown>`                                                                     |
| +323.4% | +3.23ms |   1.0% → 4.1% |   1.0ms → 4.2ms |   1 → 2 | `(anonymous)`                                 | `__InjectedScript_ReaderArticleFinder.js:12:25480`                              |
| +323.4% | +3.23ms |   1.0% → 4.1% |   1.0ms → 4.2ms |   1 → 2 | `normalizedElementTagName`                    | `__InjectedScript_ReaderArticleFinder.js:12:19601`                              |
|     new | +3.23ms |   0.0% → 3.2% |     0ms → 3.2ms |   0 → 1 | `elementLooksLikePartOfACarousel`             | `__InjectedScript_ReaderArticleFinder.js:12:8505`                               |
|     new | +3.23ms |   0.0% → 3.2% |     0ms → 3.2ms |   0 → 1 | `t`                                           | `__InjectedScript_ReaderArticleFinder.js:13:56642`                              |
|     new | +3.23ms |   0.0% → 3.2% |     0ms → 3.2ms |   0 → 1 | `sortMerge`                                   | `<unknown>`                                                                     |
|     new | +3.23ms |   0.0% → 3.2% |     0ms → 3.2ms |   0 → 1 | `sortMergeSort`                               | `<unknown>`                                                                     |
|     new | +3.23ms |   0.0% → 3.2% |     0ms → 3.2ms |   0 → 1 | `sortCandidateElementsInDescendingScoreOrder` | `__InjectedScript_ReaderArticleFinder.js:13:56628`                              |
|     new | +3.23ms |   0.0% → 3.2% |     0ms → 3.2ms |   0 → 1 | `domDistance`                                 | `__InjectedScript_ReaderArticleFinder.js:12:2553`                               |
|  +25.0% | +3.00ms | 11.8% → 14.7% | 12.0ms → 15.0ms | 12 → 15 | `execute`                                     | `w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:868` |
|  +23.1% | +3.00ms | 12.8% → 15.7% | 13.0ms → 16.0ms | 13 → 16 | `doPropagation`                               | `w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254`  |
|  +37.5% | +3.00ms |  7.9% → 10.8% |  8.0ms → 11.0ms |  8 → 11 | `each`                                        | `w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:105`        |
| +100.0% | +3.00ms |   3.0% → 5.9% |   3.0ms → 6.0ms |   3 → 6 | `forEach`                                     | `<unknown>`                                                                     |
| +111.7% | +2.23ms |   2.0% → 4.1% |   2.0ms → 4.2ms |       2 | `findExtraArticleCandidateElements`           | `__InjectedScript_ReaderArticleFinder.js:13:57439`                              |
|  +22.2% | +2.00ms |  8.9% → 10.8% |  9.0ms → 11.0ms |  9 → 11 | `_collectMetadata`                            | `FormMetadata.js:3:78950`                                                       |
|  +22.2% | +2.00ms |  8.9% → 10.8% |  9.0ms → 11.0ms |  9 → 11 | `formsAndMetadata`                            | `FormMetadata.js:3:82286`                                                       |

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
| +100.0% | +1.00ms |  1.0% → 2.0% |  1.0ms → 2.0ms |   1 → 2 | `_collectControlMetadata`                                      | `FormMetadata.js:3:46804`                          |

##### Ours

|  Change |   Delta |             % |            Time | Samples | Function                            | Location                                                                               |
| ------: | ------: | ------------: | --------------: | ------: | ----------------------------------- | -------------------------------------------------------------------------------------- |
|  +25.0% | +3.00ms | 11.8% → 14.7% | 12.0ms → 15.0ms | 12 → 15 | `execute`                           | `w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:868`        |
|  +23.1% | +3.00ms | 12.8% → 15.7% | 13.0ms → 16.0ms | 13 → 16 | `doPropagation`                     | `w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254`         |
|  +37.5% | +3.00ms |  7.9% → 10.8% |  8.0ms → 11.0ms |  8 → 11 | `each`                              | `w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:105`               |
|     new | +2.00ms |   0.0% → 2.0% |     0ms → 2.0ms |   0 → 2 | `get`                               | `w/load.php?lang=en&modules=mediawiki.user&skin=vector-2022&version=163ne:4:740`       |
|   +3.7% | +1.00ms | 26.6% → 27.4% | 27.0ms → 28.0ms | 27 → 28 | `(anonymous)`                       | `w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:558`        |
|   +4.0% | +1.00ms | 24.6% → 25.4% | 25.0ms → 26.0ms | 25 → 26 | `runScript`                         | `w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59`         |
|  +50.0% | +1.00ms |   2.0% → 2.9% |   2.0ms → 3.0ms |   2 → 3 | `(anonymous)`                       | `w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:79:610`              |
| +100.0% | +1.00ms |   1.0% → 2.0% |   1.0ms → 2.0ms |   1 → 2 | `(anonymous)`                       | `w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:77:868`              |
|  +33.3% | +1.00ms |   3.0% → 3.9% |   3.0ms → 4.0ms |   3 → 4 | `addToHead`                         | `w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:3:909`         |
|  +33.3% | +1.00ms |   3.0% → 3.9% |   3.0ms → 4.0ms |   3 → 4 | `newStyleTag`                       | `w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:4:59`          |
|  +50.0% | +1.00ms |   2.0% → 2.9% |   2.0ms → 3.0ms |   2 → 3 | `domManip`                          | `w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:74:285`              |
|     new | +1.00ms |   0.0% → 1.0% |     0ms → 1.0ms |   0 → 1 | `(anonymous)`                       | `w/load.php?lang=en&modules=mediawiki.page.ready&skin=vector-2022&version=1et5k:1:613` |
|  +14.3% | +1.00ms |   6.9% → 7.8% |   7.0ms → 8.0ms |   7 → 8 | `resources/skins.vector.js/skin.js` | `w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:1:155`      |
|     new | +1.00ms |   0.0% → 1.0% |     0ms → 1.0ms |   0 → 1 | `(anonymous)`                       | `w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:4:1038`     |
|     new | +1.00ms |   0.0% → 1.0% |     0ms → 1.0ms |   0 → 1 | `(anonymous)`                       | `w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:34:274`     |
|     new | +1.00ms |   0.0% → 1.0% |     0ms → 1.0ms |   0 → 1 | `(anonymous)`                       | `w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:54:529`     |
|     new | +1.00ms |   0.0% → 1.0% |     0ms → 1.0ms |   0 → 1 | `(anonymous)`                       | `w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:56:287`     |
|  +16.7% | +1.00ms |   5.9% → 6.9% |   6.0ms → 7.0ms |   6 → 7 | `main`                              | `w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:1:965`      |
|  +25.0% | +1.00ms |   3.9% → 4.9% |   4.0ms → 5.0ms |   4 → 5 | `getHeadingScrollOffset`            | `w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:5:840`      |
|     new | +1.00ms |   0.0% → 1.0% |     0ms → 1.0ms |   0 → 1 | `(anonymous)`                       | `w/load.php?lang=en&modules=mmv.bootstrap&skin=vector-2022&version=176u6:1:24`         |

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

|  Change |   Delta |             % |            Time | Samples | Function                                         | Location                                                                        |
| ------: | ------: | ------------: | --------------: | ------: | ------------------------------------------------ | ------------------------------------------------------------------------------- |
|  -68.9% | -7.18ms |  10.2% → 3.2% |  10.4ms → 3.2ms |   2 → 1 | `updateArticleBylineAndDateElementsIfNecessary`  | `__InjectedScript_ReaderArticleFinder.js:13:53699`                              |
|  -68.9% | -7.18ms |  10.2% → 3.2% |  10.4ms → 3.2ms |   2 → 1 | `adoptableMetadataBlock`                         | `__InjectedScript_ReaderArticleFinder.js:13:48923`                              |
| removed | -5.21ms |   5.1% → 0.0% |     5.2ms → 0ms |   1 → 0 | `levenshteinDistance`                            | `__InjectedScript_ReaderArticleFinder.js:12:6770`                               |
| removed | -5.21ms |   5.1% → 0.0% |     5.2ms → 0ms |   1 → 0 | `stringSimilarity`                               | `__InjectedScript_ReaderArticleFinder.js:12:7091`                               |
| removed | -5.21ms |   5.1% → 0.0% |     5.2ms → 0ms |   1 → 0 | `de`                                             | `__InjectedScript_ReaderArticleFinder.js:13:42521`                              |
|  -50.0% | -2.00ms |   3.9% → 2.0% |   4.0ms → 2.0ms |   4 → 2 | `enqueue`                                        | `w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:255` |
|  -40.0% | -2.00ms |   4.9% → 2.9% |   5.0ms → 3.0ms |   5 → 3 | `require`                                        | `w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:8:344`  |
| removed | -2.00ms |   2.0% → 0.0% |     2.0ms → 0ms |   2 → 0 | `_findHiddenUsernameElement`                     | `FormMetadata.js:3:75498`                                                       |
|  -37.9% | -1.97ms |   5.1% → 3.2% |   5.2ms → 3.2ms |       1 | `trimmedInnerTextIgnoringTextTransform`          | `__InjectedScript_ReaderArticleFinder.js:12:6561`                               |
|  -37.9% | -1.97ms |   5.1% → 3.2% |   5.2ms → 3.2ms |       1 | `findArticleBylineElementWithoutRejection`       | `__InjectedScript_ReaderArticleFinder.js:13:50372`                              |
|  -37.9% | -1.97ms |   5.1% → 3.2% |   5.2ms → 3.2ms |       1 | `findArticleBylineElement`                       | `__InjectedScript_ReaderArticleFinder.js:13:50186`                              |
|  -37.9% | -1.97ms |   5.1% → 3.2% |   5.2ms → 3.2ms |       1 | `updateArticleBylineAndDateElements`             | `__InjectedScript_ReaderArticleFinder.js:13:53902`                              |
|   -5.9% | -1.45ms | 24.2% → 22.7% | 24.6ms → 23.2ms |      12 | `unformattedArticleTextContentIncludingMetadata` | `__InjectedScript_ReaderArticleFinder.js:13:67861`                              |
|   -7.7% | -1.00ms | 12.8% → 11.7% | 13.0ms → 12.0ms | 13 → 12 | `(anonymous)`                                    | `w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:12:421` |
|   -7.7% | -1.00ms | 12.8% → 11.7% | 13.0ms → 12.0ms | 13 → 12 | `(anonymous)`                                    | `w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:45:636`       |
|   -7.7% | -1.00ms | 12.8% → 11.7% | 13.0ms → 12.0ms | 13 → 12 | `mightThrow`                                     | `w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:44:918`       |
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `(anonymous)`                                    | `wiki/Profiling_(computer_programming):6:19`                                    |
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `(anonymous)`                                    | `wiki/Profiling_(computer_programming):8:44`                                    |
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `(program)`                                      | `wiki/Profiling_(computer_programming):6:10`                                    |
|  -20.0% | -1.00ms |   4.9% → 3.9% |   5.0ms → 4.0ms |   5 → 4 | `(anonymous)`                                    | `w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:812` |

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
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `reduce`                                         | `<unknown>`                                        |
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `_createLogicalFormsForControls`                 | `FormMetadata.js:3:23832`                          |
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `_looksLikeOneTimeCodeField`                     | `FormMetadata.js:3:42732`                          |
|  -33.3% | -1.00ms |   3.0% → 2.0% |   3.0ms → 2.0ms |   3 → 2 | `stringsMatchAnyRegularExpressions`              | `FormMetadata.js:3:8216`                           |
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `Set`                                            | `<unknown>`                                        |
|  -33.3% | -1.00ms |   3.0% → 2.0% |   3.0ms → 2.0ms |   3 → 2 | `cachedElementBoundingRect`                      | `__InjectedScript_ReaderArticleFinder.js:12:5336`  |
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `shouldDisqualifyDueToHeaderDensity`             | `__InjectedScript_ReaderArticleFinder.js:12:30932` |
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `elementAtPoint`                                 | `__InjectedScript_ReaderArticleFinder.js:12:10176` |

##### Ours

|  Change |   Delta |             % |            Time | Samples | Function         | Location                                                                             |
| ------: | ------: | ------------: | --------------: | ------: | ---------------- | ------------------------------------------------------------------------------------ |
|  -50.0% | -2.00ms |   3.9% → 2.0% |   4.0ms → 2.0ms |   4 → 2 | `enqueue`        | `w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:255`      |
|  -40.0% | -2.00ms |   4.9% → 2.9% |   5.0ms → 3.0ms |   5 → 3 | `require`        | `w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:8:344`       |
|   -7.7% | -1.00ms | 12.8% → 11.7% | 13.0ms → 12.0ms | 13 → 12 | `(anonymous)`    | `w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:12:421`      |
|   -7.7% | -1.00ms | 12.8% → 11.7% | 13.0ms → 12.0ms | 13 → 12 | `(anonymous)`    | `w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:45:636`            |
|   -7.7% | -1.00ms | 12.8% → 11.7% | 13.0ms → 12.0ms | 13 → 12 | `mightThrow`     | `w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:44:918`            |
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `(anonymous)`    | `wiki/Profiling_(computer_programming):6:19`                                         |
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `(anonymous)`    | `wiki/Profiling_(computer_programming):8:44`                                         |
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `(program)`      | `wiki/Profiling_(computer_programming):6:10`                                         |
|  -20.0% | -1.00ms |   4.9% → 3.9% |   5.0ms → 4.0ms |   5 → 4 | `(anonymous)`    | `w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:812`      |
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `(anonymous)`    | `w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:528`      |
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `(anonymous)`    | `w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:23:156`      |
|  -20.0% | -1.00ms |   4.9% → 3.9% |   5.0ms → 4.0ms |   5 → 4 | `(program)`      | `w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:1:1`         |
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `resolveIndex`   | `w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:352`      |
|  -50.0% | -1.00ms |   2.0% → 1.0% |   2.0ms → 1.0ms |   2 → 1 | `load`           | `w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:20:748`      |
|  -50.0% | -1.00ms |   2.0% → 1.0% |   2.0ms → 1.0ms |   2 → 1 | `init`           | `w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:20:645`      |
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `splitModuleKey` | `w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:720`      |
|  -33.3% | -1.00ms |   3.0% → 2.0% |   3.0ms → 2.0ms |   3 → 2 | `impl`           | `w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:18:205`      |
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `(program)`      | `w/load.php?lang=en&modules=ext.quicksurveys.lib&skin=vector-2022&version=kdhjm:1:1` |
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `(anonymous)`    | `w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:1:24`     |
| removed | -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `(program)`      | `w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:1:1`      |

##### Native

|  Change |   Delta |           % |        Time | Samples | Function           | Location    |
| ------: | ------: | ----------: | ----------: | ------: | ------------------ | ----------- |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `setAttribute`     | `<unknown>` |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `addEventListener` | `<unknown>` |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `nodeAtPoint`      | `<unknown>` |
| removed | -1.00ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `bound `           | `<unknown>` |
