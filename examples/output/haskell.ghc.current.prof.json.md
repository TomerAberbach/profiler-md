# Wall time profile

Took 4.09s over 4,094 samples (1.0ms per sample).

| Category          |     % |   Time | Samples |
| ----------------- | ----: | -----: | ------: |
| Ours              | 68.2% |  2.79s |   2,794 |
| Garbage collector | 31.3% |  1.28s |   1,282 |
| Native            |  0.4% | 18.0ms |      18 |

## Hottest functions

### Self time

Functions ranked by wall time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                                          | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 36.2% |   1.48s |   1,482 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| 31.3% |   1.28s |   1,282 | `GC.GC`                                           | `<unknown>`                                       |
| 12.2% | 498.0ms |     498 | `Data.Aeson.KeyMap.fromList`                      | `src/Data/Aeson/KeyMap.hs:247:1`                  |
|  4.6% | 190.0ms |     190 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
|  3.3% | 134.0ms |     134 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|  3.2% | 130.0ms |     130 | `Main.keywords`                                   | `Profile.hs:136:1`                                |
|  1.9% |  79.0ms |      79 | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|  1.8% |  74.0ms |      74 | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
|  0.9% |  35.0ms |      35 | `Data.Aeson.KeyMap.lookup`                        | `src/Data/Aeson/KeyMap.hs:178:1`                  |
|  0.7% |  28.0ms |      28 | `Main.tally`                                      | `Profile.hs:112:1`                                |
|  0.5% |  19.0ms |      19 | `Main.summarize`                                  | `Profile.hs:118:1`                                |
|  0.4% |  18.0ms |      18 | `Data.Aeson.Types.FromJSON.explicitParseField`    | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
|  0.3% |  12.0ms |      12 | `Data.Aeson.Encoding.Builder.text`                | `src/Data/Aeson/Encoding/Builder.hs:109:1`        |
|  0.3% |  11.0ms |      11 | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
|  0.3% |  11.0ms |      11 | `Data.Aeson.Types.FromJSON.withArray`             | `src/Data/Aeson/Types/FromJSON.hs:742:1`          |
|  0.2% |  10.0ms |      10 | `PROFILING.OVERHEAD_of`                           | `<unknown>`                                       |
|  0.2% |   9.0ms |       9 | `Data.Aeson.Types.FromJSON.withObject`            | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
|  0.2% |   8.0ms |       8 | `SYSTEM.SYSTEM`                                   | `<unknown>`                                       |
|  0.1% |   6.0ms |       6 | `Main.main`                                       | `Profile.hs:146:1`                                |
|  0.1% |   5.0ms |       5 | `Data.Aeson.Types.Internal.modifyFailure`         | `src/Data/Aeson/Types/Internal.hs:671:1`          |

#### Categories

##### Ours

|     % |    Time | Samples | Function                                          | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 36.2% |   1.48s |   1,482 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| 12.2% | 498.0ms |     498 | `Data.Aeson.KeyMap.fromList`                      | `src/Data/Aeson/KeyMap.hs:247:1`                  |
|  4.6% | 190.0ms |     190 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
|  3.3% | 134.0ms |     134 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|  3.2% | 130.0ms |     130 | `Main.keywords`                                   | `Profile.hs:136:1`                                |
|  1.9% |  79.0ms |      79 | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|  1.8% |  74.0ms |      74 | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
|  0.9% |  35.0ms |      35 | `Data.Aeson.KeyMap.lookup`                        | `src/Data/Aeson/KeyMap.hs:178:1`                  |
|  0.7% |  28.0ms |      28 | `Main.tally`                                      | `Profile.hs:112:1`                                |
|  0.5% |  19.0ms |      19 | `Main.summarize`                                  | `Profile.hs:118:1`                                |
|  0.4% |  18.0ms |      18 | `Data.Aeson.Types.FromJSON.explicitParseField`    | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
|  0.3% |  12.0ms |      12 | `Data.Aeson.Encoding.Builder.text`                | `src/Data/Aeson/Encoding/Builder.hs:109:1`        |
|  0.3% |  11.0ms |      11 | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
|  0.3% |  11.0ms |      11 | `Data.Aeson.Types.FromJSON.withArray`             | `src/Data/Aeson/Types/FromJSON.hs:742:1`          |
|  0.2% |   9.0ms |       9 | `Data.Aeson.Types.FromJSON.withObject`            | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
|  0.1% |   6.0ms |       6 | `Main.main`                                       | `Profile.hs:146:1`                                |
|  0.1% |   5.0ms |       5 | `Data.Aeson.Types.Internal.modifyFailure`         | `src/Data/Aeson/Types/Internal.hs:671:1`          |
|  0.1% |   5.0ms |       5 | `Main.top`                                        | `Profile.hs:115:1`                                |
|  0.1% |   4.0ms |       4 | `Data.Aeson.Types.Internal.<?>`                   | `src/Data/Aeson/Types/Internal.hs:659:1`          |
|  0.1% |   4.0ms |       4 | `Data.Aeson.Types.FromJSON.parseIndexedJSON`      | `src/Data/Aeson/Types/FromJSON.hs:171:1`          |

##### Garbage collector

|     % |  Time | Samples | Function | Location    |
| ----: | ----: | ------: | -------- | ----------- |
| 31.3% | 1.28s |   1,282 | `GC.GC`  | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)

|      % |  Time | Samples | Caller                             | Location                          |
| -----: | ----: | ------: | ---------------------------------- | --------------------------------- |
| 100.0% | 1.48s |   1,482 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

##### `GC.GC` (`<unknown>`)

|      % |  Time | Samples | Caller      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 1.28s |   1,282 | `MAIN.MAIN` | `<unknown>` |

##### `Data.Aeson.KeyMap.fromList` (`src/Data/Aeson/KeyMap.hs:247:1`)

|     % |    Time | Samples | Caller                                         | Location                                     |
| ----: | ------: | ------: | ---------------------------------------------- | -------------------------------------------- |
| 99.8% | 497.0ms |     497 | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |
|  0.2% |   1.0ms |       1 | `Main.toJSON`                                  | `Profile.hs:84:3`                            |

##### `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)

|      % |    Time | Samples | Caller                             | Location                          |
| -----: | ------: | ------: | ---------------------------------- | --------------------------------- |
| 100.0% | 190.0ms |     190 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

##### `Data.Aeson.Internal.Text.unsafeDecodeASCII` (`src/Data/Aeson/Internal/Text.hs:29:1`)

|      % |    Time | Samples | Caller                                            | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 134.0ms |     134 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

##### `Main.keywords` (`Profile.hs:136:1`)

|      % |    Time | Samples | Caller      | Location           |
| -----: | ------: | ------: | ----------- | ------------------ |
| 100.0% | 130.0ms |     130 | `Main.main` | `Profile.hs:146:1` |

##### `Data.Integer.Conversion.byteStringToInteger` (`src/Data/Integer/Conversion.hs:104:1`)

|      % |   Time | Samples | Caller                                            | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 79.0ms |      79 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

##### `Data.Aeson.Internal.Unescape.unescapeText` (`src/Data/Aeson/Internal/Unescape.hs:34:1`)

|      % |   Time | Samples | Caller                                            | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 74.0ms |      74 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

##### `Data.Aeson.KeyMap.lookup` (`src/Data/Aeson/KeyMap.hs:178:1`)

|     % |   Time | Samples | Caller                                              | Location                                 |
| ----: | -----: | ------: | --------------------------------------------------- | ---------------------------------------- |
| 97.1% | 34.0ms |      34 | `Data.Aeson.Types.FromJSON.explicitParseField`      | `src/Data/Aeson/Types/FromJSON.hs:917:1` |
|  2.9% |  1.0ms |       1 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1` |

##### `Main.tally` (`Profile.hs:112:1`)

|     % |   Time | Samples | Caller           | Location           |
| ----: | -----: | ------: | ---------------- | ------------------ |
| 78.6% | 22.0ms |      22 | `Main.keywords`  | `Profile.hs:136:1` |
| 21.4% |  6.0ms |       6 | `Main.summarize` | `Profile.hs:118:1` |

##### `Main.summarize` (`Profile.hs:118:1`)

|      % |   Time | Samples | Caller      | Location           |
| -----: | -----: | ------: | ----------- | ------------------ |
| 100.0% | 19.0ms |      19 | `Main.main` | `Profile.hs:146:1` |

##### `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`)

|      % |   Time | Samples | Caller                         | Location                                 |
| -----: | -----: | ------: | ------------------------------ | ---------------------------------------- |
| 100.0% | 18.0ms |      18 | `Data.Aeson.Types.FromJSON..:` | `src/Data/Aeson/Types/FromJSON.hs:849:1` |

##### `Data.Aeson.Encoding.Builder.text` (`src/Data/Aeson/Encoding/Builder.hs:109:1`)

|     % |  Time | Samples | Caller                                        | Location                                  |
| ----: | ----: | ------: | --------------------------------------------- | ----------------------------------------- |
| 66.7% | 8.0ms |       8 | `Data.Aeson.Encoding.Builder.object`          | `src/Data/Aeson/Encoding/Builder.hs:96:1` |
| 25.0% | 3.0ms |       3 | `Data.Aeson.Encoding.Builder.array`           | `src/Data/Aeson/Encoding/Builder.hs:86:1` |
|  8.3% | 1.0ms |       1 | `Data.Aeson.Encoding.Builder.encodeToBuilder` | `src/Data/Aeson/Encoding/Builder.hs:68:1` |

##### `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`)

|      % |   Time | Samples | Caller                                 | Location                                 |
| -----: | -----: | ------: | -------------------------------------- | ---------------------------------------- |
| 100.0% | 11.0ms |      11 | `Data.Aeson.Types.FromJSON.withObject` | `src/Data/Aeson/Types/FromJSON.hs:720:1` |

##### `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`)

|     % |   Time | Samples | Caller               | Location            |
| ----: | -----: | ------: | -------------------- | ------------------- |
| 90.9% | 10.0ms |      10 | `Main.parseJSONList` | `Profile.hs:71:10`  |
|  9.1% |  1.0ms |       1 | `Main.parseJSONList` | `Profile.hs:108:10` |

##### `PROFILING.OVERHEAD_of` (`<unknown>`)

|      % |   Time | Samples | Caller      | Location    |
| -----: | -----: | ------: | ----------- | ----------- |
| 100.0% | 10.0ms |      10 | `MAIN.MAIN` | `<unknown>` |

##### `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`)

|      % |  Time | Samples | Caller           | Location          |
| -----: | ----: | ------: | ---------------- | ----------------- |
| 100.0% | 9.0ms |       9 | `Main.parseJSON` | `Profile.hs:48:3` |

##### `SYSTEM.SYSTEM` (`<unknown>`)

|      % |  Time | Samples | Caller      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 8.0ms |       8 | `MAIN.MAIN` | `<unknown>` |

##### `Main.main` (`Profile.hs:146:1`)

|      % |  Time | Samples | Caller      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 6.0ms |       6 | `MAIN.MAIN` | `<unknown>` |

##### `Data.Aeson.Types.Internal.modifyFailure` (`src/Data/Aeson/Types/Internal.hs:671:1`)

|      % |  Time | Samples | Caller                                     | Location                                 |
| -----: | ----: | ------: | ------------------------------------------ | ---------------------------------------- |
| 100.0% | 5.0ms |       5 | `Data.Aeson.Types.Internal.prependFailure` | `src/Data/Aeson/Types/Internal.hs:681:1` |

##### `Main.top` (`Profile.hs:115:1`)

|      % |  Time | Samples | Caller           | Location           |
| -----: | ----: | ------: | ---------------- | ------------------ |
| 100.0% | 5.0ms |       5 | `Main.summarize` | `Profile.hs:118:1` |

##### `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`)

|      % |  Time | Samples | Caller                                         | Location                                 |
| -----: | ----: | ------: | ---------------------------------------------- | ---------------------------------------- |
| 100.0% | 4.0ms |       4 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Data.Aeson.Types.FromJSON.parseIndexedJSON` (`src/Data/Aeson/Types/FromJSON.hs:171:1`)

|      % |  Time | Samples | Caller                                | Location                                 |
| -----: | ----: | ------: | ------------------------------------- | ---------------------------------------- |
| 100.0% | 4.0ms |       4 | `Data.Aeson.Types.FromJSON.withArray` | `src/Data/Aeson/Types/FromJSON.hs:742:1` |

### Total time

Functions ranked by total wall time spent in the function and all its callees.

|      % |    Time | Samples | Function                                          | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% |   4.09s |   4,094 | `MAIN.MAIN`                                       | `<unknown>`                                       |
|  68.2% |   2.79s |   2,794 | `Main.main`                                       | `Profile.hs:146:1`                                |
|  62.8% |   2.57s |   2,573 | `Data.Aeson.Decoding.eitherDecode`                | `src/Data/Aeson/Decoding.hs:79:1`                 |
|  43.2% |   1.76s |   1,769 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
|  31.3% |   1.28s |   1,282 | `GC.GC`                                           | `<unknown>`                                       |
|  19.6% | 804.0ms |     804 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
|  12.2% | 498.0ms |     498 | `Data.Aeson.KeyMap.fromList`                      | `src/Data/Aeson/KeyMap.hs:247:1`                  |
|   3.7% | 152.0ms |     152 | `Main.keywords`                                   | `Profile.hs:136:1`                                |
|   3.3% | 134.0ms |     134 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|   2.9% | 117.0ms |     117 | `Data.Aeson.Types.FromJSON.ifromJSON`             | `src/Data/Aeson/Types/FromJSON.hs:839:1`          |
|   2.8% | 116.0ms |     116 | `Data.Aeson.Types.FromJSON.withObject`            | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
|   2.7% | 109.0ms |     109 | `Main.parseJSON`                                  | `Profile.hs:48:3`                                 |
|   2.5% | 102.0ms |     102 | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
|   2.2% |  91.0ms |      91 | `Data.Aeson.Types.FromJSON.explicitParseField`    | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
|   1.9% |  79.0ms |      79 | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|   1.8% |  74.0ms |      74 | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
|   1.3% |  52.0ms |      52 | `Main.roundTrip`                                  | `Profile.hs:139:1`                                |
|   0.9% |  35.0ms |      35 | `Data.Aeson.KeyMap.lookup`                        | `src/Data/Aeson/KeyMap.hs:178:1`                  |
|   0.8% |  33.0ms |      33 | `Data.Aeson.encode`                               | `src/Data/Aeson.hs:187:1`                         |
|   0.8% |  31.0ms |      31 | `Main.toEncoding`                                 | `Profile.hs:83:10`                                |

#### Categories

##### Ours

|     % |    Time | Samples | Function                                          | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 68.2% |   2.79s |   2,794 | `Main.main`                                       | `Profile.hs:146:1`                                |
| 62.8% |   2.57s |   2,573 | `Data.Aeson.Decoding.eitherDecode`                | `src/Data/Aeson/Decoding.hs:79:1`                 |
| 43.2% |   1.76s |   1,769 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| 19.6% | 804.0ms |     804 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
| 12.2% | 498.0ms |     498 | `Data.Aeson.KeyMap.fromList`                      | `src/Data/Aeson/KeyMap.hs:247:1`                  |
|  3.7% | 152.0ms |     152 | `Main.keywords`                                   | `Profile.hs:136:1`                                |
|  3.3% | 134.0ms |     134 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|  2.9% | 117.0ms |     117 | `Data.Aeson.Types.FromJSON.ifromJSON`             | `src/Data/Aeson/Types/FromJSON.hs:839:1`          |
|  2.8% | 116.0ms |     116 | `Data.Aeson.Types.FromJSON.withObject`            | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
|  2.7% | 109.0ms |     109 | `Main.parseJSON`                                  | `Profile.hs:48:3`                                 |
|  2.5% | 102.0ms |     102 | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
|  2.2% |  91.0ms |      91 | `Data.Aeson.Types.FromJSON.explicitParseField`    | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
|  1.9% |  79.0ms |      79 | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|  1.8% |  74.0ms |      74 | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
|  1.3% |  52.0ms |      52 | `Main.roundTrip`                                  | `Profile.hs:139:1`                                |
|  0.9% |  35.0ms |      35 | `Data.Aeson.KeyMap.lookup`                        | `src/Data/Aeson/KeyMap.hs:178:1`                  |
|  0.8% |  33.0ms |      33 | `Data.Aeson.encode`                               | `src/Data/Aeson.hs:187:1`                         |
|  0.8% |  31.0ms |      31 | `Main.toEncoding`                                 | `Profile.hs:83:10`                                |
|  0.7% |  30.0ms |      30 | `Main.summarize`                                  | `Profile.hs:118:1`                                |
|  0.7% |  30.0ms |      30 | `Data.Aeson.Encoding.Builder.encodeToBuilder`     | `src/Data/Aeson/Encoding/Builder.hs:68:1`         |

##### Garbage collector

|     % |  Time | Samples | Function | Location    |
| ----: | ----: | ------: | -------- | ----------- |
| 31.3% | 1.28s |   1,282 | `GC.GC`  | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `MAIN.MAIN` (`<unknown>`)

|     % |   Time | Samples | Callee                  | Location           |
| ----: | -----: | ------: | ----------------------- | ------------------ |
| 68.2% |  2.79s |   2,794 | `Main.main`             | `Profile.hs:146:1` |
| 31.3% |  1.28s |   1,282 | `GC.GC`                 | `<unknown>`        |
|  0.2% | 10.0ms |      10 | `PROFILING.OVERHEAD_of` | `<unknown>`        |
|  0.2% |  8.0ms |       8 | `SYSTEM.SYSTEM`         | `<unknown>`        |

##### `Main.main` (`Profile.hs:146:1`)

|     % |    Time | Samples | Callee                             | Location                          |
| ----: | ------: | ------: | ---------------------------------- | --------------------------------- |
| 91.4% |   2.55s |   2,554 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |
|  5.4% | 152.0ms |     152 | `Main.keywords`                    | `Profile.hs:136:1`                |
|  1.9% |  52.0ms |      52 | `Main.roundTrip`                   | `Profile.hs:139:1`                |
|  1.1% |  30.0ms |      30 | `Main.summarize`                   | `Profile.hs:118:1`                |

##### `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)

|     % |    Time | Samples | Callee                                            | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 68.8% |   1.76s |   1,769 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| 31.2% | 804.0ms |     804 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |

##### `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)

|    % |    Time | Samples | Callee                                        | Location                                   |
| ---: | ------: | ------: | --------------------------------------------- | ------------------------------------------ |
| 7.6% | 134.0ms |     134 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`  | `src/Data/Aeson/Internal/Text.hs:29:1`     |
| 4.5% |  79.0ms |      79 | `Data.Integer.Conversion.byteStringToInteger` | `src/Data/Integer/Conversion.hs:104:1`     |
| 4.2% |  74.0ms |      74 | `Data.Aeson.Internal.Unescape.unescapeText`   | `src/Data/Aeson/Internal/Unescape.hs:34:1` |

##### `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)

|     % |    Time | Samples | Callee                                | Location                                 |
| ----: | ------: | ------: | ------------------------------------- | ---------------------------------------- |
| 61.8% | 497.0ms |     497 | `Data.Aeson.KeyMap.fromList`          | `src/Data/Aeson/KeyMap.hs:247:1`         |
| 14.6% | 117.0ms |     117 | `Data.Aeson.Types.FromJSON.ifromJSON` | `src/Data/Aeson/Types/FromJSON.hs:839:1` |

##### `Main.keywords` (`Profile.hs:136:1`)

|     % |   Time | Samples | Callee       | Location           |
| ----: | -----: | ------: | ------------ | ------------------ |
| 14.5% | 22.0ms |      22 | `Main.tally` | `Profile.hs:112:1` |

##### `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`)

|     % |    Time | Samples | Callee           | Location          |
| ----: | ------: | ------: | ---------------- | ----------------- |
| 93.2% | 109.0ms |     109 | `Main.parseJSON` | `Profile.hs:48:3` |
|  6.0% |   7.0ms |       7 | `Main.parseJSON` | `Profile.hs:96:3` |

##### `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`)

|     % |    Time | Samples | Callee                          | Location                                 |
| ----: | ------: | ------: | ------------------------------- | ---------------------------------------- |
| 87.9% | 102.0ms |     102 | `Data.Aeson.Types.FromJSON..:`  | `src/Data/Aeson/Types/FromJSON.hs:849:1` |
|  4.3% |   5.0ms |       5 | `Data.Aeson.Types.FromJSON..:?` | `src/Data/Aeson/Types/FromJSON.hs:859:1` |

##### `Main.parseJSON` (`Profile.hs:48:3`)

|      % |    Time | Samples | Callee                                 | Location                                 |
| -----: | ------: | ------: | -------------------------------------- | ---------------------------------------- |
| 100.0% | 109.0ms |     109 | `Data.Aeson.Types.FromJSON.withObject` | `src/Data/Aeson/Types/FromJSON.hs:720:1` |

##### `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`)

|     % |   Time | Samples | Callee                                         | Location                                 |
| ----: | -----: | ------: | ---------------------------------------------- | ---------------------------------------- |
| 89.2% | 91.0ms |      91 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`)

|     % |   Time | Samples | Callee                                     | Location                                 |
| ----: | -----: | ------: | ------------------------------------------ | ---------------------------------------- |
| 37.4% | 34.0ms |      34 | `Data.Aeson.KeyMap.lookup`                 | `src/Data/Aeson/KeyMap.hs:178:1`         |
| 18.7% | 17.0ms |      17 | `Data.Aeson.Types.Internal.<?>`            | `src/Data/Aeson/Types/Internal.hs:659:1` |
| 13.2% | 12.0ms |      12 | `Main.parseJSONList`                       | `Profile.hs:71:10`                       |
|  9.9% |  9.0ms |       9 | `Data.Scientific.toBoundedInteger`         | `src/Data/Scientific.hs:772:1`           |
|  1.1% |  1.0ms |       1 | `Data.Aeson.Types.Internal.prependFailure` | `src/Data/Aeson/Types/Internal.hs:681:1` |

##### `Main.roundTrip` (`Profile.hs:139:1`)

|     % |   Time | Samples | Callee                             | Location                          |
| ----: | -----: | ------: | ---------------------------------- | --------------------------------- |
| 63.5% | 33.0ms |      33 | `Data.Aeson.encode`                | `src/Data/Aeson.hs:187:1`         |
| 36.5% | 19.0ms |      19 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

##### `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`)

|     % |   Time | Samples | Callee            | Location           |
| ----: | -----: | ------: | ----------------- | ------------------ |
| 93.9% | 31.0ms |      31 | `Main.toEncoding` | `Profile.hs:83:10` |

##### `Main.toEncoding` (`Profile.hs:83:10`)

|     % |   Time | Samples | Callee                               | Location                                    |
| ----: | -----: | ------: | ------------------------------------ | ------------------------------------------- |
| 96.8% | 30.0ms |      30 | `Data.Aeson.Encoding.Internal.value` | `src/Data/Aeson/Encoding/Internal.hs:441:1` |
|  3.2% |  1.0ms |       1 | `Main.toJSON`                        | `Profile.hs:84:3`                           |

##### `Main.summarize` (`Profile.hs:118:1`)

|     % |  Time | Samples | Callee       | Location           |
| ----: | ----: | ------: | ------------ | ------------------ |
| 20.0% | 6.0ms |       6 | `Main.tally` | `Profile.hs:112:1` |
| 16.7% | 5.0ms |       5 | `Main.top`   | `Profile.hs:115:1` |

##### `Data.Aeson.Encoding.Builder.encodeToBuilder` (`src/Data/Aeson/Encoding/Builder.hs:68:1`)

|     % |   Time | Samples | Callee                               | Location                                   |
| ----: | -----: | ------: | ------------------------------------ | ------------------------------------------ |
| 86.7% | 26.0ms |      26 | `Data.Aeson.Encoding.Builder.object` | `src/Data/Aeson/Encoding/Builder.hs:96:1`  |
|  3.3% |  1.0ms |       1 | `Data.Aeson.Encoding.Builder.text`   | `src/Data/Aeson/Encoding/Builder.hs:109:1` |

## Hottest call stacks

Call stacks ranked by wall time spent in their leaf frame.

Common call stack: `MAIN.MAIN`

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 36.0% |   1.47s |   1,474 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 31.3% |   1.28s |   1,282 | `GC.GC`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 12.0% | 493.0ms |     493 | `Data.Aeson.KeyMap.fromList` (`src/Data/Aeson/KeyMap.hs:247:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                                                              |
|  4.6% | 190.0ms |     190 | `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  3.3% | 134.0ms |     134 | `Data.Aeson.Internal.Text.unsafeDecodeASCII` (`src/Data/Aeson/Internal/Text.hs:29:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                                |
|  3.2% | 130.0ms |     130 | `Main.keywords` (`Profile.hs:136:1`) ← `Main.main` (146:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.9% |  79.0ms |      79 | `Data.Integer.Conversion.byteStringToInteger` (`src/Data/Integer/Conversion.hs:104:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                               |
|  1.8% |  74.0ms |      74 | `Data.Aeson.Internal.Unescape.unescapeText` (`src/Data/Aeson/Internal/Unescape.hs:34:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                             |
|  0.8% |  33.0ms |      33 | `Data.Aeson.KeyMap.lookup` (`src/Data/Aeson/KeyMap.hs:178:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                |
|  0.5% |  22.0ms |      22 | `Main.tally` (`Profile.hs:112:1`) ← `Main.keywords` (136:1) ← `Main.main` (146:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.5% |  19.0ms |      19 | `Main.summarize` (`Profile.hs:118:1`) ← `Main.main` (146:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.4% |  17.0ms |      17 | `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                |
|  0.2% |  10.0ms |      10 | `PROFILING.OVERHEAD_of`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.2% |  10.0ms |      10 | `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                         |
|  0.2% |   9.0ms |       9 | `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                  |
|  0.2% |   9.0ms |       9 | `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`) ← `Main.parseJSONList` (`Profile.hs:71:10`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`) |
|  0.2% |   8.0ms |       8 | `SYSTEM.SYSTEM`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.2% |   8.0ms |       8 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.roundTrip` (`Profile.hs:139:1`) ← `Main.main` (146:1)                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.2% |   8.0ms |       8 | `Data.Aeson.Encoding.Builder.text` (`src/Data/Aeson/Encoding/Builder.hs:109:1`) ← `Data.Aeson.Encoding.Builder.object` (96:1) ← `Data.Aeson.Encoding.Builder.encodeToBuilder` (68:1) ← `Data.Aeson.Encoding.Internal.value` (`src/Data/Aeson/Encoding/Internal.hs:441:1`) ← `Main.toEncoding` (`Profile.hs:83:10`) ← `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`) ← `Main.roundTrip` (`Profile.hs:139:1`) ← `Main.main` (146:1)                                                                                                                                                                                                                       |
|  0.1% |   6.0ms |       6 | `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

# Allocated heap and entries profile

Allocated 11.1 GiB and recorded 20,478,505 entries.

| Category          |     % |     Size |    Entries |
| ----------------- | ----: | -------: | ---------: |
| Ours              | 99.7% | 11.1 GiB | 20,478,505 |
| Native            |  0.3% | 31.7 MiB |          0 |
| Garbage collector | <0.1% | 1.07 KiB |          0 |

## Allocated heap

### Hottest functions

#### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Function                                          | Location                                          |
| ----: | -------: | ------------------------------------------------- | ------------------------------------------------- |
| 59.6% | 6.61 GiB | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| 15.3% | 1.69 GiB | `Data.Aeson.KeyMap.fromList`                      | `src/Data/Aeson/KeyMap.hs:247:1`                  |
|  8.3% |  944 MiB | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
|  5.3% |  602 MiB | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|  4.4% |  505 MiB | `Main.keywords`                                   | `Profile.hs:136:1`                                |
|  1.8% |  201 MiB | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|  0.9% |  106 MiB | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
|  0.8% | 89.9 MiB | `Main.tally`                                      | `Profile.hs:112:1`                                |
|  0.5% | 54.6 MiB | `Data.Aeson.Types.FromJSON.explicitParseField`    | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
|  0.4% | 40.5 MiB | `Data.Aeson.Types.FromJSON.withArray`             | `src/Data/Aeson/Types/FromJSON.hs:742:1`          |
|  0.3% | 37.2 MiB | `Main.summarize`                                  | `Profile.hs:118:1`                                |
|  0.3% | 32.8 MiB | `Data.Aeson.Types.Internal.<?>`                   | `src/Data/Aeson/Types/Internal.hs:659:1`          |
|  0.3% | 32.1 MiB | `Data.Aeson.Types.FromJSON.withText`              | `src/Data/Aeson/Types/FromJSON.hs:731:1`          |
|  0.3% | 31.6 MiB | `PROFILING.OVERHEAD_of`                           | `<unknown>`                                       |
|  0.2% | 24.6 MiB | `Data.Aeson.Types.FromJSON.withObject`            | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
|  0.2% | 20.9 MiB | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
|  0.2% | 20.2 MiB | `Main.top`                                        | `Profile.hs:115:1`                                |
|  0.1% | 16.7 MiB | `Data.Aeson.Encoding.Builder.array`               | `src/Data/Aeson/Encoding/Builder.hs:86:1`         |
|  0.1% | 15.1 MiB | `Data.Aeson.Encoding.Builder.text`                | `src/Data/Aeson/Encoding/Builder.hs:109:1`        |
|  0.1% | 14.2 MiB | `Data.Scientific.toBoundedInteger`                | `src/Data/Scientific.hs:772:1`                    |

##### Categories

###### Ours

|     % |     Size | Function                                          | Location                                          |
| ----: | -------: | ------------------------------------------------- | ------------------------------------------------- |
| 59.6% | 6.61 GiB | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| 15.3% | 1.69 GiB | `Data.Aeson.KeyMap.fromList`                      | `src/Data/Aeson/KeyMap.hs:247:1`                  |
|  8.3% |  944 MiB | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
|  5.3% |  602 MiB | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|  4.4% |  505 MiB | `Main.keywords`                                   | `Profile.hs:136:1`                                |
|  1.8% |  201 MiB | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|  0.9% |  106 MiB | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
|  0.8% | 89.9 MiB | `Main.tally`                                      | `Profile.hs:112:1`                                |
|  0.5% | 54.6 MiB | `Data.Aeson.Types.FromJSON.explicitParseField`    | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
|  0.4% | 40.5 MiB | `Data.Aeson.Types.FromJSON.withArray`             | `src/Data/Aeson/Types/FromJSON.hs:742:1`          |
|  0.3% | 37.2 MiB | `Main.summarize`                                  | `Profile.hs:118:1`                                |
|  0.3% | 32.8 MiB | `Data.Aeson.Types.Internal.<?>`                   | `src/Data/Aeson/Types/Internal.hs:659:1`          |
|  0.3% | 32.1 MiB | `Data.Aeson.Types.FromJSON.withText`              | `src/Data/Aeson/Types/FromJSON.hs:731:1`          |
|  0.2% | 24.6 MiB | `Data.Aeson.Types.FromJSON.withObject`            | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
|  0.2% | 20.9 MiB | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
|  0.2% | 20.2 MiB | `Main.top`                                        | `Profile.hs:115:1`                                |
|  0.1% | 16.7 MiB | `Data.Aeson.Encoding.Builder.array`               | `src/Data/Aeson/Encoding/Builder.hs:86:1`         |
|  0.1% | 15.1 MiB | `Data.Aeson.Encoding.Builder.text`                | `src/Data/Aeson/Encoding/Builder.hs:109:1`        |
|  0.1% | 14.2 MiB | `Data.Scientific.toBoundedInteger`                | `src/Data/Scientific.hs:772:1`                    |
|  0.1% | 10.6 MiB | `Data.Aeson.KeyMap.lookup`                        | `src/Data/Aeson/KeyMap.hs:178:1`                  |

##### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

###### `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)

|      % |     Size | Caller                                    | Location                          |
| -----: | -------: | ----------------------------------------- | --------------------------------- |
| 100.0% | 6.61 GiB | `Data.Aeson.Decoding.eitherDecode`        | `src/Data/Aeson/Decoding.hs:79:1` |
|  <0.1% | 1.08 KiB | `Data.Aeson.Decoding.ByteString.Lazy.CAF` | `<unknown>`                       |

###### `Data.Aeson.KeyMap.fromList` (`src/Data/Aeson/KeyMap.hs:247:1`)

|     % |     Size | Caller                                         | Location                                     |
| ----: | -------: | ---------------------------------------------- | -------------------------------------------- |
| 99.9% | 1.69 GiB | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |
|  0.1% | 2.42 MiB | `Main.toJSON`                                  | `Profile.hs:84:3`                            |

###### `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)

|      % |    Size | Caller                             | Location                          |
| -----: | ------: | ---------------------------------- | --------------------------------- |
| 100.0% | 944 MiB | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

###### `Data.Aeson.Internal.Text.unsafeDecodeASCII` (`src/Data/Aeson/Internal/Text.hs:29:1`)

|      % |    Size | Caller                                            | Location                                          |
| -----: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 602 MiB | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

###### `Main.keywords` (`Profile.hs:136:1`)

|      % |    Size | Caller      | Location           |
| -----: | ------: | ----------- | ------------------ |
| 100.0% | 505 MiB | `Main.main` | `Profile.hs:146:1` |

###### `Data.Integer.Conversion.byteStringToInteger` (`src/Data/Integer/Conversion.hs:104:1`)

|      % |    Size | Caller                                            | Location                                          |
| -----: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 201 MiB | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

###### `Data.Aeson.Internal.Unescape.unescapeText` (`src/Data/Aeson/Internal/Unescape.hs:34:1`)

|      % |    Size | Caller                                            | Location                                          |
| -----: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 106 MiB | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

###### `Main.tally` (`Profile.hs:112:1`)

|     % |     Size | Caller           | Location           |
| ----: | -------: | ---------------- | ------------------ |
| 81.4% | 73.2 MiB | `Main.keywords`  | `Profile.hs:136:1` |
| 18.6% | 16.7 MiB | `Main.summarize` | `Profile.hs:118:1` |

###### `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`)

|      % |     Size | Caller                         | Location                                 |
| -----: | -------: | ------------------------------ | ---------------------------------------- |
| 100.0% | 54.6 MiB | `Data.Aeson.Types.FromJSON..:` | `src/Data/Aeson/Types/FromJSON.hs:849:1` |

###### `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`)

|     % |     Size | Caller               | Location            |
| ----: | -------: | -------------------- | ------------------- |
| 70.7% | 28.6 MiB | `Main.parseJSONList` | `Profile.hs:71:10`  |
| 19.1% | 7.76 MiB | `Main.parseJSONList` | `Profile.hs:50:10`  |
| 10.2% | 4.13 MiB | `Main.parseJSONList` | `Profile.hs:108:10` |

###### `Main.summarize` (`Profile.hs:118:1`)

|      % |     Size | Caller      | Location           |
| -----: | -------: | ----------- | ------------------ |
| 100.0% | 37.2 MiB | `Main.main` | `Profile.hs:146:1` |

###### `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`)

|      % |     Size | Caller                                         | Location                                 |
| -----: | -------: | ---------------------------------------------- | ---------------------------------------- |
| 100.0% | 32.8 MiB | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

###### `Data.Aeson.Types.FromJSON.withText` (`src/Data/Aeson/Types/FromJSON.hs:731:1`)

|     % |     Size | Caller                                              | Location                                 |
| ----: | -------: | --------------------------------------------------- | ---------------------------------------- |
| 40.5% |   13 MiB | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1` |
| 28.3% |  9.1 MiB | `Data.Aeson.Types.Internal.<?>`                     | `src/Data/Aeson/Types/Internal.hs:659:1` |
| 22.7% | 7.31 MiB | `Data.Aeson.Types.Internal.modifyFailure`           | `src/Data/Aeson/Types/Internal.hs:671:1` |
|  8.5% | 2.72 MiB | `Data.Aeson.Types.FromJSON.explicitParseField`      | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

###### `PROFILING.OVERHEAD_of` (`<unknown>`)

|      % |     Size | Caller      | Location    |
| -----: | -------: | ----------- | ----------- |
| 100.0% | 31.6 MiB | `MAIN.MAIN` | `<unknown>` |

###### `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`)

|     % |     Size | Caller           | Location          |
| ----: | -------: | ---------------- | ----------------- |
| 95.0% | 23.3 MiB | `Main.parseJSON` | `Profile.hs:48:3` |
|  5.0% | 1.22 MiB | `Main.parseJSON` | `Profile.hs:96:3` |

###### `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`)

|      % |     Size | Caller                                 | Location                                 |
| -----: | -------: | -------------------------------------- | ---------------------------------------- |
| 100.0% | 20.9 MiB | `Data.Aeson.Types.FromJSON.withObject` | `src/Data/Aeson/Types/FromJSON.hs:720:1` |

###### `Main.top` (`Profile.hs:115:1`)

|      % |     Size | Caller           | Location           |
| -----: | -------: | ---------------- | ------------------ |
| 100.0% | 20.2 MiB | `Main.summarize` | `Profile.hs:118:1` |

###### `Data.Aeson.Encoding.Builder.array` (`src/Data/Aeson/Encoding/Builder.hs:86:1`)

|     % |     Size | Caller                                        | Location                                   |
| ----: | -------: | --------------------------------------------- | ------------------------------------------ |
| 50.1% | 8.34 MiB | `Data.Aeson.Encoding.Builder.object`          | `src/Data/Aeson/Encoding/Builder.hs:96:1`  |
| 41.6% | 6.92 MiB | `Data.Aeson.Encoding.Builder.text`            | `src/Data/Aeson/Encoding/Builder.hs:109:1` |
|  7.9% | 1.32 MiB | `Data.Aeson.Encoding.Builder.encodeToBuilder` | `src/Data/Aeson/Encoding/Builder.hs:68:1`  |
|  0.5% | 77.3 KiB | `Data.Aeson.Encoding.Builder.unquoted`        | `src/Data/Aeson/Encoding/Builder.hs:113:1` |

###### `Data.Aeson.Encoding.Builder.text` (`src/Data/Aeson/Encoding/Builder.hs:109:1`)

|     % |     Size | Caller                                        | Location                                  |
| ----: | -------: | --------------------------------------------- | ----------------------------------------- |
| 61.3% | 9.26 MiB | `Data.Aeson.Encoding.Builder.object`          | `src/Data/Aeson/Encoding/Builder.hs:96:1` |
| 31.4% | 4.75 MiB | `Data.Aeson.Encoding.Builder.array`           | `src/Data/Aeson/Encoding/Builder.hs:86:1` |
|  7.3% |  1.1 MiB | `Data.Aeson.Encoding.Builder.encodeToBuilder` | `src/Data/Aeson/Encoding/Builder.hs:68:1` |

###### `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`)

|      % |     Size | Caller                                         | Location                                 |
| -----: | -------: | ---------------------------------------------- | ---------------------------------------- |
| 100.0% | 14.2 MiB | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

###### `Data.Aeson.KeyMap.lookup` (`src/Data/Aeson/KeyMap.hs:178:1`)

|     % |     Size | Caller                                              | Location                                 |
| ----: | -------: | --------------------------------------------------- | ---------------------------------------- |
| 92.1% | 9.73 MiB | `Data.Aeson.Types.FromJSON.explicitParseField`      | `src/Data/Aeson/Types/FromJSON.hs:917:1` |
|  7.9% |  859 KiB | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1` |

#### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|      % |     Size | Function                                          | Location                                          |
| -----: | -------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 11.1 GiB | `MAIN.MAIN`                                       | `<unknown>`                                       |
|  99.7% | 11.1 GiB | `Main.main`                                       | `Profile.hs:146:1`                                |
|  93.5% | 10.4 GiB | `Data.Aeson.Decoding.eitherDecode`                | `src/Data/Aeson/Decoding.hs:79:1`                 |
|  67.6% |  7.5 GiB | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
|  25.9% | 2.87 GiB | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
|  15.3% | 1.69 GiB | `Data.Aeson.KeyMap.fromList`                      | `src/Data/Aeson/KeyMap.hs:247:1`                  |
|   5.3% |  602 MiB | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|   5.1% |  578 MiB | `Main.keywords`                                   | `Profile.hs:136:1`                                |
|   2.3% |  266 MiB | `Data.Aeson.Types.FromJSON.ifromJSON`             | `src/Data/Aeson/Types/FromJSON.hs:839:1`          |
|   2.3% |  266 MiB | `Data.Aeson.Types.FromJSON.withObject`            | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
|   2.2% |  249 MiB | `Main.parseJSON`                                  | `Profile.hs:48:3`                                 |
|   2.1% |  234 MiB | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
|   1.9% |  213 MiB | `Data.Aeson.Types.FromJSON.explicitParseField`    | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
|   1.8% |  201 MiB | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|   1.0% |  113 MiB | `Main.roundTrip`                                  | `Profile.hs:139:1`                                |
|   0.9% |  106 MiB | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
|   0.8% | 89.9 MiB | `Main.tally`                                      | `Profile.hs:112:1`                                |
|   0.8% | 87.7 MiB | `Data.Aeson.Types.Internal.<?>`                   | `src/Data/Aeson/Types/Internal.hs:659:1`          |
|   0.7% | 74.1 MiB | `Main.summarize`                                  | `Profile.hs:118:1`                                |
|   0.5% | 55.5 MiB | `Data.Aeson.encode`                               | `src/Data/Aeson.hs:187:1`                         |

##### Categories

###### Ours

|     % |     Size | Function                                          | Location                                          |
| ----: | -------: | ------------------------------------------------- | ------------------------------------------------- |
| 99.7% | 11.1 GiB | `Main.main`                                       | `Profile.hs:146:1`                                |
| 93.5% | 10.4 GiB | `Data.Aeson.Decoding.eitherDecode`                | `src/Data/Aeson/Decoding.hs:79:1`                 |
| 67.6% |  7.5 GiB | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| 25.9% | 2.87 GiB | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
| 15.3% | 1.69 GiB | `Data.Aeson.KeyMap.fromList`                      | `src/Data/Aeson/KeyMap.hs:247:1`                  |
|  5.3% |  602 MiB | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|  5.1% |  578 MiB | `Main.keywords`                                   | `Profile.hs:136:1`                                |
|  2.3% |  266 MiB | `Data.Aeson.Types.FromJSON.ifromJSON`             | `src/Data/Aeson/Types/FromJSON.hs:839:1`          |
|  2.3% |  266 MiB | `Data.Aeson.Types.FromJSON.withObject`            | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
|  2.2% |  249 MiB | `Main.parseJSON`                                  | `Profile.hs:48:3`                                 |
|  2.1% |  234 MiB | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
|  1.9% |  213 MiB | `Data.Aeson.Types.FromJSON.explicitParseField`    | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
|  1.8% |  201 MiB | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|  1.0% |  113 MiB | `Main.roundTrip`                                  | `Profile.hs:139:1`                                |
|  0.9% |  106 MiB | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
|  0.8% | 89.9 MiB | `Main.tally`                                      | `Profile.hs:112:1`                                |
|  0.8% | 87.7 MiB | `Data.Aeson.Types.Internal.<?>`                   | `src/Data/Aeson/Types/Internal.hs:659:1`          |
|  0.7% | 74.1 MiB | `Main.summarize`                                  | `Profile.hs:118:1`                                |
|  0.5% | 55.5 MiB | `Data.Aeson.encode`                               | `src/Data/Aeson.hs:187:1`                         |
|  0.5% | 52.6 MiB | `Main.toEncoding`                                 | `Profile.hs:83:10`                                |

##### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

###### `MAIN.MAIN` (`<unknown>`)

|     % |     Size | Callee                          | Location           |
| ----: | -------: | ------------------------------- | ------------------ |
| 99.7% | 11.1 GiB | `Main.main`                     | `Profile.hs:146:1` |
|  0.3% | 31.6 MiB | `PROFILING.OVERHEAD_of`         | `<unknown>`        |
| <0.1% | 33.9 KiB | `GHC.Internal.IO.Handle.FD.CAF` | `<unknown>`        |
| <0.1% | 33.9 KiB | `SYSTEM.SYSTEM`                 | `<unknown>`        |
| <0.1% | 13.9 KiB | `Main.CAF`                      | `<unknown>`        |

###### `Main.main` (`Profile.hs:146:1`)

|     % |     Size | Callee                             | Location                          |
| ----: | -------: | ---------------------------------- | --------------------------------- |
| 93.2% | 10.3 GiB | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |
|  5.1% |  578 MiB | `Main.keywords`                    | `Profile.hs:136:1`                |
|  1.0% |  113 MiB | `Main.roundTrip`                   | `Profile.hs:139:1`                |
|  0.7% | 74.1 MiB | `Main.summarize`                   | `Profile.hs:118:1`                |
| <0.1% |  227 KiB | `Main.pad`                         | `Profile.hs:142:1`                |

###### `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)

|     % |     Size | Callee                                            | Location                                          |
| ----: | -------: | ------------------------------------------------- | ------------------------------------------------- |
| 72.3% |  7.5 GiB | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| 27.7% | 2.87 GiB | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
| <0.1% |     32 B | `Data.Aeson.Types.FromJSON.ifromJSON`             | `src/Data/Aeson/Types/FromJSON.hs:839:1`          |

###### `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)

|     % |     Size | Callee                                        | Location                                   |
| ----: | -------: | --------------------------------------------- | ------------------------------------------ |
|  7.8% |  602 MiB | `Data.Aeson.Internal.Text.unsafeDecodeASCII`  | `src/Data/Aeson/Internal/Text.hs:29:1`     |
|  2.6% |  201 MiB | `Data.Integer.Conversion.byteStringToInteger` | `src/Data/Integer/Conversion.hs:104:1`     |
|  1.4% |  106 MiB | `Data.Aeson.Internal.Unescape.unescapeText`   | `src/Data/Aeson/Internal/Unescape.hs:34:1` |
| <0.1% | 51.6 KiB | `Data.Aeson.Decoding.Internal.negateNumber`   | `src/Data/Aeson/Decoding/Internal.hs:12:1` |

###### `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)

|     % |     Size | Callee                                | Location                                 |
| ----: | -------: | ------------------------------------- | ---------------------------------------- |
| 58.9% | 1.69 GiB | `Data.Aeson.KeyMap.fromList`          | `src/Data/Aeson/KeyMap.hs:247:1`         |
|  9.0% |  266 MiB | `Data.Aeson.Types.FromJSON.ifromJSON` | `src/Data/Aeson/Types/FromJSON.hs:839:1` |

###### `Main.keywords` (`Profile.hs:136:1`)

|     % |     Size | Callee       | Location           |
| ----: | -------: | ------------ | ------------------ |
| 12.7% | 73.2 MiB | `Main.tally` | `Profile.hs:112:1` |

###### `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`)

|     % |     Size | Callee           | Location          |
| ----: | -------: | ---------------- | ----------------- |
| 93.7% |  249 MiB | `Main.parseJSON` | `Profile.hs:48:3` |
|  6.3% | 16.7 MiB | `Main.parseJSON` | `Profile.hs:96:3` |

###### `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`)

|     % |     Size | Callee                          | Location                                 |
| ----: | -------: | ------------------------------- | ---------------------------------------- |
| 87.8% |  234 MiB | `Data.Aeson.Types.FromJSON..:`  | `src/Data/Aeson/Types/FromJSON.hs:849:1` |
|  3.0% | 7.97 MiB | `Data.Aeson.Types.FromJSON..:?` | `src/Data/Aeson/Types/FromJSON.hs:859:1` |
| <0.1% | 9.73 KiB | `Data.Aeson.Key.fromString`     | `src/Data/Aeson/Key.hs:48:1`             |

###### `Main.parseJSON` (`Profile.hs:48:3`)

|      % |    Size | Callee                                 | Location                                 |
| -----: | ------: | -------------------------------------- | ---------------------------------------- |
| 100.0% | 249 MiB | `Data.Aeson.Types.FromJSON.withObject` | `src/Data/Aeson/Types/FromJSON.hs:720:1` |

###### `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`)

|     % |    Size | Callee                                         | Location                                 |
| ----: | ------: | ---------------------------------------------- | ---------------------------------------- |
| 91.0% | 213 MiB | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

###### `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`)

|     % |     Size | Callee                             | Location                                 |
| ----: | -------: | ---------------------------------- | ---------------------------------------- |
| 41.3% | 87.7 MiB | `Data.Aeson.Types.Internal.<?>`    | `src/Data/Aeson/Types/Internal.hs:659:1` |
| 12.9% | 27.4 MiB | `Data.Scientific.toBoundedInteger` | `src/Data/Scientific.hs:772:1`           |
|  5.9% | 12.5 MiB | `Main.parseJSONList`               | `Profile.hs:71:10`                       |
|  4.6% | 9.73 MiB | `Data.Aeson.KeyMap.lookup`         | `src/Data/Aeson/KeyMap.hs:178:1`         |
|  4.5% | 9.67 MiB | `Main.parseJSONList`               | `Profile.hs:50:10`                       |

###### `Main.roundTrip` (`Profile.hs:139:1`)

|     % |     Size | Callee                             | Location                          |
| ----: | -------: | ---------------------------------- | --------------------------------- |
| 50.8% | 57.4 MiB | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |
| 49.1% | 55.5 MiB | `Data.Aeson.encode`                | `src/Data/Aeson.hs:187:1`         |

###### `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`)

|     % |     Size | Callee                                     | Location                                 |
| ----: | -------: | ------------------------------------------ | ---------------------------------------- |
| 24.4% | 21.4 MiB | `Data.Aeson.Types.Internal.prependFailure` | `src/Data/Aeson/Types/Internal.hs:681:1` |
| 24.0% |   21 MiB | `Data.Aeson.Types.FromJSON.withText`       | `src/Data/Aeson/Types/FromJSON.hs:731:1` |
|  8.0% | 6.98 MiB | `Main.parseJSONList`                       | `Profile.hs:71:10`                       |
|  6.2% | 5.46 MiB | `Data.Aeson.Types.FromJSON..:?`            | `src/Data/Aeson/Types/FromJSON.hs:859:1` |
|  0.1% | 85.9 KiB | `Main.parseJSONList`                       | `Profile.hs:108:10`                      |

###### `Main.summarize` (`Profile.hs:118:1`)

|     % |     Size | Callee       | Location           |
| ----: | -------: | ------------ | ------------------ |
| 27.3% | 20.2 MiB | `Main.top`   | `Profile.hs:115:1` |
| 22.5% | 16.7 MiB | `Main.tally` | `Profile.hs:112:1` |

###### `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`)

|     % |     Size | Callee            | Location           |
| ----: | -------: | ----------------- | ------------------ |
| 94.7% | 52.6 MiB | `Main.toEncoding` | `Profile.hs:83:10` |

###### `Main.toEncoding` (`Profile.hs:83:10`)

|     % |     Size | Callee                               | Location                                    |
| ----: | -------: | ------------------------------------ | ------------------------------------------- |
| 84.3% | 44.3 MiB | `Data.Aeson.Encoding.Internal.value` | `src/Data/Aeson/Encoding/Internal.hs:441:1` |
| 15.7% | 8.26 MiB | `Main.toJSON`                        | `Profile.hs:84:3`                           |

### Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

Common call stack: `MAIN.MAIN`

|     % |     Size | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----: | -------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 59.3% | 6.58 GiB | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 15.2% | 1.69 GiB | `Data.Aeson.KeyMap.fromList` (`src/Data/Aeson/KeyMap.hs:247:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  8.3% |  937 MiB | `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  5.3% |  599 MiB | `Data.Aeson.Internal.Text.unsafeDecodeASCII` (`src/Data/Aeson/Internal/Text.hs:29:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  4.4% |  505 MiB | `Main.keywords` (`Profile.hs:136:1`) ← `Main.main` (146:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.8% |  200 MiB | `Data.Integer.Conversion.byteStringToInteger` (`src/Data/Integer/Conversion.hs:104:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.9% |  105 MiB | `Data.Aeson.Internal.Unescape.unescapeText` (`src/Data/Aeson/Internal/Unescape.hs:34:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.6% | 73.2 MiB | `Main.tally` (`Profile.hs:112:1`) ← `Main.keywords` (136:1) ← `Main.main` (146:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.5% | 51.6 MiB | `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                               |
|  0.3% | 37.2 MiB | `Main.summarize` (`Profile.hs:118:1`) ← `Main.main` (146:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.3% | 31.6 MiB | `PROFILING.OVERHEAD_of`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.3% |   31 MiB | `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                  |
|  0.2% |   27 MiB | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.roundTrip` (`Profile.hs:139:1`) ← `Main.main` (146:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.2% | 23.3 MiB | `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.2% | 20.2 MiB | `Main.top` (`Profile.hs:115:1`) ← `Main.summarize` (118:1) ← `Main.main` (146:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.2% | 19.9 MiB | `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                                        |
|  0.1% | 16.7 MiB | `Main.tally` (`Profile.hs:112:1`) ← `Main.summarize` (118:1) ← `Main.main` (146:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.1% | 12.8 MiB | `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                         |
|  0.1% | 11.8 MiB | `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`) ← `Main.parseJSONList` (`Profile.hs:71:10`) ← `Data.Aeson.Types.FromJSON.withText` (`src/Data/Aeson/Types/FromJSON.hs:731:1`) ← `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`) |
|  0.1% | 10.5 MiB | `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`) ← `Main.parseJSONList` (`Profile.hs:71:10`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                |

## Entries

### Hottest functions

#### Self entries

Functions ranked by entries recorded directly in the function body, excluding callees.

##### Categories

###### Ours

|     % |   Entries | Function                                       | Location                                          |
| ----: | --------: | ---------------------------------------------- | ------------------------------------------------- |
| 46.7% | 9,557,350 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`   | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|  5.7% | 1,168,750 | `Data.Vector.Fusion.Util.unId`                 | `src/Data/Vector/Fusion/Util.hs:25:21`            |
|  4.5% |   926,525 | `Data.Primitive.Array.marray#`                 | `Data/Primitive/Array.hs:109:5`                   |
|  4.5% |   922,350 | `Data.Integer.Conversion.byteStringToInteger`  | `src/Data/Integer/Conversion.hs:104:1`            |
|  4.0% |   815,650 | `Data.Aeson.Types.Internal.<?>`                | `src/Data/Aeson/Types/Internal.hs:659:1`          |
|  3.6% |   740,300 | `Data.Aeson.KeyMap.lookup`                     | `src/Data/Aeson/KeyMap.hs:178:1`                  |
|  3.3% |   685,300 | `Data.Aeson.Types.FromJSON..:`                 | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
|  3.3% |   685,300 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
|  2.8% |   581,900 | `Data.Vector.Fusion.Bundle.Monadic.sChunks`    | `src/Data/Vector/Fusion/Bundle/Monadic.hs:122:30` |
|  2.8% |   581,900 | `Data.Vector.Fusion.Bundle.Monadic.sSize`      | `src/Data/Vector/Fusion/Bundle/Monadic.hs:124:30` |
|  2.8% |   581,900 | `Data.Vector.Fusion.Bundle.Size.upperBound`    | `src/Data/Vector/Fusion/Bundle/Size.hs:129:1`     |
|  1.5% |   305,801 | `Data.Primitive.Array.array#`                  | `Data/Primitive/Array.hs:66:5`                    |
|  1.2% |   253,000 | `Data.Scientific.coefficient`                  | `src/Data/Scientific.hs:140:7`                    |
|  1.2% |   236,500 | `Data.Aeson.Types.Internal.modifyFailure`      | `src/Data/Aeson/Types/Internal.hs:671:1`          |
|  1.2% |   236,500 | `Data.Scientific.toBoundedInteger`             | `src/Data/Scientific.hs:772:1`                    |
|  1.1% |   234,300 | `Data.Aeson.Types.FromJSON.withObject`         | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
|  1.1% |   233,200 | `Data.Aeson.Types.FromJSON.withText`           | `src/Data/Aeson/Types/FromJSON.hs:731:1`          |
|  0.9% |   183,150 | `Data.Scientific.base10Exponent`               | `src/Data/Scientific.hs:165:7`                    |
|  0.8% |   166,650 | `Utils.magnitude`                              | `src/Utils.hs:78:1`                               |
|  0.8% |   166,650 | `Data.Scientific.normalize`                    | `src/Data/Scientific.hs:1102:1`                   |

##### Callers

Callers ranked by contribution to each function's self entries. Inlining can make caller attribution imprecise.

###### `Data.Aeson.Internal.Text.unsafeDecodeASCII` (`src/Data/Aeson/Internal/Text.hs:29:1`)

|      % |   Entries | Caller                                            | Location                                          |
| -----: | --------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 9,557,350 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

###### `Data.Vector.Fusion.Util.unId` (`src/Data/Vector/Fusion/Util.hs:25:21`)

|     % | Entries | Caller                                         | Location                                     |
| ----: | ------: | ---------------------------------------------- | -------------------------------------------- |
| 77.7% | 908,050 | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |
| 20.2% | 235,950 | `Data.Aeson.Types.FromJSON.withArray`          | `src/Data/Aeson/Types/FromJSON.hs:742:1`     |
|  1.6% |  18,150 | `Main.toJSON`                                  | `Profile.hs:84:3`                            |
|  0.6% |   6,600 | `Data.Aeson.Encoding.Builder.array`            | `src/Data/Aeson/Encoding/Builder.hs:86:1`    |

###### `Data.Primitive.Array.marray#` (`Data/Primitive/Array.hs:109:5`)

|     % | Entries | Caller                                         | Location                                     |
| ----: | ------: | ---------------------------------------------- | -------------------------------------------- |
| 98.0% | 908,050 | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |
|  2.0% |  18,150 | `Main.toJSON`                                  | `Profile.hs:84:3`                            |
| <0.1% |     325 | `Utils.CAF`                                    | `<unknown>`                                  |

###### `Data.Integer.Conversion.byteStringToInteger` (`src/Data/Integer/Conversion.hs:104:1`)

|      % | Entries | Caller                                            | Location                                          |
| -----: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 922,350 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

###### `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`)

|     % | Entries | Caller                                              | Location                                 |
| ----: | ------: | --------------------------------------------------- | ---------------------------------------- |
| 78.2% | 637,450 | `Data.Aeson.Types.FromJSON.explicitParseField`      | `src/Data/Aeson/Types/FromJSON.hs:917:1` |
| 15.1% | 123,200 | `Data.Aeson.Types.FromJSON.parseIndexedJSON`        | `src/Data/Aeson/Types/FromJSON.hs:171:1` |
|  6.7% |  55,000 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1` |

###### `Data.Aeson.KeyMap.lookup` (`src/Data/Aeson/KeyMap.hs:178:1`)

|     % | Entries | Caller                                              | Location                                 |
| ----: | ------: | --------------------------------------------------- | ---------------------------------------- |
| 92.6% | 685,300 | `Data.Aeson.Types.FromJSON.explicitParseField`      | `src/Data/Aeson/Types/FromJSON.hs:917:1` |
|  7.4% |  55,000 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1` |

###### `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`)

|      % | Entries | Caller                                 | Location                                 |
| -----: | ------: | -------------------------------------- | ---------------------------------------- |
| 100.0% | 685,300 | `Data.Aeson.Types.FromJSON.withObject` | `src/Data/Aeson/Types/FromJSON.hs:720:1` |

###### `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`)

|      % | Entries | Caller                         | Location                                 |
| -----: | ------: | ------------------------------ | ---------------------------------------- |
| 100.0% | 685,300 | `Data.Aeson.Types.FromJSON..:` | `src/Data/Aeson/Types/FromJSON.hs:849:1` |

###### `Data.Vector.Fusion.Bundle.Monadic.sChunks` (`src/Data/Vector/Fusion/Bundle/Monadic.hs:122:30`)

|     % | Entries | Caller                                         | Location                                     |
| ----: | ------: | ---------------------------------------------- | -------------------------------------------- |
| 99.6% | 579,700 | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |
|  0.4% |   2,200 | `Main.toJSON`                                  | `Profile.hs:84:3`                            |

###### `Data.Vector.Fusion.Bundle.Monadic.sSize` (`src/Data/Vector/Fusion/Bundle/Monadic.hs:124:30`)

|     % | Entries | Caller                                         | Location                                     |
| ----: | ------: | ---------------------------------------------- | -------------------------------------------- |
| 99.6% | 579,700 | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |
|  0.4% |   2,200 | `Main.toJSON`                                  | `Profile.hs:84:3`                            |

###### `Data.Vector.Fusion.Bundle.Size.upperBound` (`src/Data/Vector/Fusion/Bundle/Size.hs:129:1`)

|     % | Entries | Caller                                         | Location                                     |
| ----: | ------: | ---------------------------------------------- | -------------------------------------------- |
| 99.6% | 579,700 | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |
|  0.4% |   2,200 | `Main.toJSON`                                  | `Profile.hs:84:3`                            |

###### `Data.Primitive.Array.array#` (`Data/Primitive/Array.hs:66:5`)

|     % | Entries | Caller                                | Location                                  |
| ----: | ------: | ------------------------------------- | ----------------------------------------- |
| 54.5% | 166,650 | `Utils.magnitude`                     | `src/Utils.hs:78:1`                       |
| 40.3% | 123,200 | `Data.Aeson.Types.FromJSON.withArray` | `src/Data/Aeson/Types/FromJSON.hs:742:1`  |
|  5.2% |  15,950 | `Data.Aeson.Encoding.Builder.array`   | `src/Data/Aeson/Encoding/Builder.hs:86:1` |
| <0.1% |       1 | `Utils.CAF`                           | `<unknown>`                               |

###### `Data.Scientific.coefficient` (`src/Data/Scientific.hs:140:7`)

|     % | Entries | Caller                                   | Location                                   |
| ----: | ------: | ---------------------------------------- | ------------------------------------------ |
| 93.5% | 236,500 | `Data.Scientific.toBoundedInteger`       | `src/Data/Scientific.hs:772:1`             |
|  6.5% |  16,500 | `Data.Aeson.Encoding.Builder.scientific` | `src/Data/Aeson/Encoding/Builder.hs:144:1` |

###### `Data.Aeson.Types.Internal.modifyFailure` (`src/Data/Aeson/Types/Internal.hs:671:1`)

|      % | Entries | Caller                                     | Location                                 |
| -----: | ------: | ------------------------------------------ | ---------------------------------------- |
| 100.0% | 236,500 | `Data.Aeson.Types.Internal.prependFailure` | `src/Data/Aeson/Types/Internal.hs:681:1` |

###### `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`)

|      % | Entries | Caller                                         | Location                                 |
| -----: | ------: | ---------------------------------------------- | ---------------------------------------- |
| 100.0% | 236,500 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

###### `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`)

|     % | Entries | Caller           | Location          |
| ----: | ------: | ---------------- | ----------------- |
| 93.0% | 217,800 | `Main.parseJSON` | `Profile.hs:48:3` |
|  7.0% |  16,500 | `Main.parseJSON` | `Profile.hs:96:3` |

###### `Data.Aeson.Types.FromJSON.withText` (`src/Data/Aeson/Types/FromJSON.hs:731:1`)

|     % | Entries | Caller                                              | Location                                 |
| ----: | ------: | --------------------------------------------------- | ---------------------------------------- |
| 76.4% | 178,200 | `Data.Aeson.Types.FromJSON.explicitParseField`      | `src/Data/Aeson/Types/FromJSON.hs:917:1` |
| 23.6% |  55,000 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1` |

###### `Data.Scientific.base10Exponent` (`src/Data/Scientific.hs:165:7`)

|     % | Entries | Caller                                   | Location                                   |
| ----: | ------: | ---------------------------------------- | ------------------------------------------ |
| 91.0% | 166,650 | `Data.Scientific.toBoundedInteger`       | `src/Data/Scientific.hs:772:1`             |
|  9.0% |  16,500 | `Data.Aeson.Encoding.Builder.scientific` | `src/Data/Aeson/Encoding/Builder.hs:144:1` |

###### `Utils.magnitude` (`src/Utils.hs:78:1`)

|      % | Entries | Caller                             | Location                       |
| -----: | ------: | ---------------------------------- | ------------------------------ |
| 100.0% | 166,650 | `Data.Scientific.toBoundedInteger` | `src/Data/Scientific.hs:772:1` |

###### `Data.Scientific.normalize` (`src/Data/Scientific.hs:1102:1`)

|      % | Entries | Caller                             | Location                       |
| -----: | ------: | ---------------------------------- | ------------------------------ |
| 100.0% | 166,650 | `Data.Scientific.toBoundedInteger` | `src/Data/Scientific.hs:772:1` |

#### Total entries

Functions ranked by total entries recorded in the function and all its callees.

|      % |    Entries | Function                                          | Location                                          |
| -----: | ---------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 20,478,505 | `MAIN.MAIN`                                       | `<unknown>`                                       |
| 100.0% | 20,478,151 | `Main.main`                                       | `Profile.hs:146:1`                                |
|  95.6% | 19,569,550 | `Data.Aeson.Decoding.eitherDecode`                | `src/Data/Aeson/Decoding.hs:79:1`                 |
|  51.2% | 10,482,450 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
|  46.7% |  9,557,350 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|  44.4% |  9,084,900 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
|  27.0% |  5,528,600 | `Data.Aeson.Types.FromJSON.ifromJSON`             | `src/Data/Aeson/Types/FromJSON.hs:839:1`          |
|  27.0% |  5,527,500 | `Data.Aeson.Types.FromJSON.withObject`            | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
|  25.3% |  5,172,751 | `Main.parseJSON`                                  | `Profile.hs:48:3`                                 |
|  24.5% |  5,018,200 | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
|  21.2% |  4,332,900 | `Data.Aeson.Types.FromJSON.explicitParseField`    | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
|   5.7% |  1,168,750 | `Data.Vector.Fusion.Util.unId`                    | `src/Data/Vector/Fusion/Util.hs:25:21`            |
|   5.6% |  1,139,600 | `Data.Scientific.toBoundedInteger`                | `src/Data/Scientific.hs:772:1`                    |
|   4.5% |    926,525 | `Data.Primitive.Array.marray#`                    | `Data/Primitive/Array.hs:109:5`                   |
|   4.5% |    922,350 | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|   4.2% |    867,900 | `Data.Aeson.Types.Internal.<?>`                   | `src/Data/Aeson/Types/Internal.hs:659:1`          |
|   3.8% |    770,550 | `Data.Aeson.Types.FromJSON.withArray`             | `src/Data/Aeson/Types/FromJSON.hs:742:1`          |
|   3.6% |    740,300 | `Data.Aeson.KeyMap.lookup`                        | `src/Data/Aeson/KeyMap.hs:178:1`                  |
|   3.5% |    707,852 | `Main.roundTrip`                                  | `Profile.hs:139:1`                                |
|   3.0% |    607,750 | `Main.summarize`                                  | `Profile.hs:118:1`                                |

##### Categories

###### Ours

|      % |    Entries | Function                                          | Location                                          |
| -----: | ---------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 20,478,151 | `Main.main`                                       | `Profile.hs:146:1`                                |
|  95.6% | 19,569,550 | `Data.Aeson.Decoding.eitherDecode`                | `src/Data/Aeson/Decoding.hs:79:1`                 |
|  51.2% | 10,482,450 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
|  46.7% |  9,557,350 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|  44.4% |  9,084,900 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
|  27.0% |  5,528,600 | `Data.Aeson.Types.FromJSON.ifromJSON`             | `src/Data/Aeson/Types/FromJSON.hs:839:1`          |
|  27.0% |  5,527,500 | `Data.Aeson.Types.FromJSON.withObject`            | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
|  25.3% |  5,172,751 | `Main.parseJSON`                                  | `Profile.hs:48:3`                                 |
|  24.5% |  5,018,200 | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
|  21.2% |  4,332,900 | `Data.Aeson.Types.FromJSON.explicitParseField`    | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
|   5.7% |  1,168,750 | `Data.Vector.Fusion.Util.unId`                    | `src/Data/Vector/Fusion/Util.hs:25:21`            |
|   5.6% |  1,139,600 | `Data.Scientific.toBoundedInteger`                | `src/Data/Scientific.hs:772:1`                    |
|   4.5% |    926,525 | `Data.Primitive.Array.marray#`                    | `Data/Primitive/Array.hs:109:5`                   |
|   4.5% |    922,350 | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|   4.2% |    867,900 | `Data.Aeson.Types.Internal.<?>`                   | `src/Data/Aeson/Types/Internal.hs:659:1`          |
|   3.8% |    770,550 | `Data.Aeson.Types.FromJSON.withArray`             | `src/Data/Aeson/Types/FromJSON.hs:742:1`          |
|   3.6% |    740,300 | `Data.Aeson.KeyMap.lookup`                        | `src/Data/Aeson/KeyMap.hs:178:1`                  |
|   3.5% |    707,852 | `Main.roundTrip`                                  | `Profile.hs:139:1`                                |
|   3.0% |    607,750 | `Main.summarize`                                  | `Profile.hs:118:1`                                |
|   2.8% |    581,900 | `Data.Vector.Fusion.Bundle.Monadic.sChunks`       | `src/Data/Vector/Fusion/Bundle/Monadic.hs:122:30` |

##### Callees

Callees ranked by contribution to each function's total entries. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

###### `MAIN.MAIN` (`<unknown>`)

|      % |    Entries | Callee                  | Location           |
| -----: | ---------: | ----------------------- | ------------------ |
| 100.0% | 20,478,150 | `Main.main`             | `Profile.hs:146:1` |
|  <0.1% |        327 | `Utils.CAF`             | `<unknown>`        |
|  <0.1% |         16 | `Main.CAF`              | `<unknown>`        |
|  <0.1% |          3 | `Data.Aeson.Key.CAF`    | `<unknown>`        |
|  <0.1% |          2 | `Data.Aeson.KeyMap.CAF` | `<unknown>`        |

###### `Main.main` (`Profile.hs:146:1`)

|     % |    Entries | Callee                             | Location                          |
| ----: | ---------: | ---------------------------------- | --------------------------------- |
| 93.3% | 19,105,350 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |
|  3.5% |    707,850 | `Main.roundTrip`                   | `Profile.hs:139:1`                |
|  3.0% |    607,750 | `Main.summarize`                   | `Profile.hs:118:1`                |
|  0.3% |     55,000 | `Main.keywords`                    | `Profile.hs:136:1`                |
| <0.1% |        550 | `Main.pad`                         | `Profile.hs:142:1`                |

###### `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)

|     % |    Entries | Callee                                            | Location                                          |
| ----: | ---------: | ------------------------------------------------- | ------------------------------------------------- |
| 53.6% | 10,482,450 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| 46.4% |  9,084,900 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
| <0.1% |      1,100 | `Data.Aeson.Decoding.Conversion.unResult`         | `src/Data/Aeson/Decoding/Conversion.hs:97:7`      |

###### `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)

|     % |   Entries | Callee                                        | Location                                   |
| ----: | --------: | --------------------------------------------- | ------------------------------------------ |
| 91.2% | 9,557,350 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`  | `src/Data/Aeson/Internal/Text.hs:29:1`     |
|  8.8% |   922,350 | `Data.Integer.Conversion.byteStringToInteger` | `src/Data/Integer/Conversion.hs:104:1`     |
| <0.1% |     1,650 | `Data.Aeson.Decoding.Internal.negateNumber`   | `src/Data/Aeson/Decoding/Internal.hs:12:1` |

###### `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)

|     % |   Entries | Callee                                      | Location                                          |
| ----: | --------: | ------------------------------------------- | ------------------------------------------------- |
| 60.9% | 5,528,600 | `Data.Aeson.Types.FromJSON.ifromJSON`       | `src/Data/Aeson/Types/FromJSON.hs:839:1`          |
| 10.0% |   908,050 | `Data.Primitive.Array.marray#`              | `Data/Primitive/Array.hs:109:5`                   |
| 10.0% |   908,050 | `Data.Vector.Fusion.Util.unId`              | `src/Data/Vector/Fusion/Util.hs:25:21`            |
|  6.4% |   579,700 | `Data.Vector.Fusion.Bundle.Monadic.sChunks` | `src/Data/Vector/Fusion/Bundle/Monadic.hs:122:30` |
|  6.4% |   579,700 | `Data.Vector.Fusion.Bundle.Monadic.sSize`   | `src/Data/Vector/Fusion/Bundle/Monadic.hs:124:30` |

###### `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`)

|     % |   Entries | Callee           | Location          |
| ----: | --------: | ---------------- | ----------------- |
| 93.6% | 5,172,750 | `Main.parseJSON` | `Profile.hs:48:3` |
|  6.4% |   354,750 | `Main.parseJSON` | `Profile.hs:96:3` |

###### `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`)

|     % |   Entries | Callee                          | Location                                 |
| ----: | --------: | ------------------------------- | ---------------------------------------- |
| 90.8% | 5,018,200 | `Data.Aeson.Types.FromJSON..:`  | `src/Data/Aeson/Types/FromJSON.hs:849:1` |
|  5.0% |   275,000 | `Data.Aeson.Types.FromJSON..:?` | `src/Data/Aeson/Types/FromJSON.hs:859:1` |

###### `Main.parseJSON` (`Profile.hs:48:3`)

|      % |   Entries | Callee                                 | Location                                 |
| -----: | --------: | -------------------------------------- | ---------------------------------------- |
| 100.0% | 5,172,750 | `Data.Aeson.Types.FromJSON.withObject` | `src/Data/Aeson/Types/FromJSON.hs:720:1` |

###### `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`)

|     % |   Entries | Callee                                         | Location                                 |
| ----: | --------: | ---------------------------------------------- | ---------------------------------------- |
| 86.3% | 4,332,900 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

###### `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`)

|     % |   Entries | Callee                                     | Location                                 |
| ----: | --------: | ------------------------------------------ | ---------------------------------------- |
| 26.3% | 1,139,600 | `Data.Scientific.toBoundedInteger`         | `src/Data/Scientific.hs:772:1`           |
| 15.9% |   689,700 | `Data.Aeson.Types.Internal.<?>`            | `src/Data/Aeson/Types/Internal.hs:659:1` |
| 15.8% |   685,300 | `Data.Aeson.KeyMap.lookup`                 | `src/Data/Aeson/KeyMap.hs:178:1`         |
|  9.9% |   429,000 | `Main.parseJSONList`                       | `Profile.hs:71:10`                       |
|  5.5% |   236,500 | `Data.Aeson.Types.Internal.prependFailure` | `src/Data/Aeson/Types/Internal.hs:681:1` |

###### `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`)

|     % | Entries | Callee                           | Location                        |
| ----: | ------: | -------------------------------- | ------------------------------- |
| 29.2% | 333,300 | `Utils.magnitude`                | `src/Utils.hs:78:1`             |
| 20.8% | 236,500 | `Data.Scientific.coefficient`    | `src/Data/Scientific.hs:140:7`  |
| 14.6% | 166,650 | `Data.Scientific.base10Exponent` | `src/Data/Scientific.hs:165:7`  |
| 14.6% | 166,650 | `Data.Scientific.normalize`      | `src/Data/Scientific.hs:1102:1` |

###### `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`)

|    % | Entries | Callee                               | Location                                 |
| ---: | ------: | ------------------------------------ | ---------------------------------------- |
| 6.0% |  52,250 | `Data.Aeson.Types.FromJSON.withText` | `src/Data/Aeson/Types/FromJSON.hs:731:1` |

###### `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`)

|     % | Entries | Callee                                       | Location                                 |
| ----: | ------: | -------------------------------------------- | ---------------------------------------- |
| 32.0% | 246,400 | `Data.Aeson.Types.FromJSON.parseIndexedJSON` | `src/Data/Aeson/Types/FromJSON.hs:171:1` |
| 30.6% | 235,950 | `Data.Vector.Fusion.Util.unId`               | `src/Data/Vector/Fusion/Util.hs:25:21`   |
| 16.0% | 123,200 | `Data.Primitive.Array.array#`                | `Data/Primitive/Array.hs:66:5`           |
|  6.8% |  52,250 | `Main.tagText`                               | `Profile.hs:69:20`                       |

###### `Main.roundTrip` (`Profile.hs:139:1`)

|     % | Entries | Callee                             | Location                          |
| ----: | ------: | ---------------------------------- | --------------------------------- |
| 65.6% | 464,200 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |
| 34.4% | 243,651 | `Data.Aeson.encode`                | `src/Data/Aeson.hs:187:1`         |

###### `Main.summarize` (`Profile.hs:118:1`)

|     % | Entries | Callee                 | Location          |
| ----: | ------: | ---------------------- | ----------------- |
| 18.1% | 110,000 | `Main.statusEntities`  | `Profile.hs:33:5` |
| 18.1% | 110,000 | `Main.statusUser`      | `Profile.hs:32:5` |
|  9.0% |  55,000 | `Main.entityHashtags`  | `Profile.hs:43:5` |
|  9.0% |  55,000 | `Main.entityMentions`  | `Profile.hs:44:5` |
|  9.0% |  55,000 | `Main.statusFavorites` | `Profile.hs:31:5` |

### Hottest call stacks

Call stacks ranked by entries recorded in their leaf frame.

Common call stack: `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`) ← `MAIN.MAIN`

|     % |   Entries | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 46.4% | 9,510,050 | `Data.Aeson.Internal.Text.unsafeDecodeASCII` (`src/Data/Aeson/Internal/Text.hs:29:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  4.4% |   905,850 | `Data.Integer.Conversion.byteStringToInteger` (`src/Data/Integer/Conversion.hs:104:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  4.3% |   889,900 | `Data.Primitive.Array.marray#` (`Data/Primitive/Array.hs:109:5`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  4.3% |   889,900 | `Data.Vector.Fusion.Util.unId` (`src/Data/Vector/Fusion/Util.hs:25:21`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  3.2% |   650,650 | `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                                                                                                                                                                                                   |
|  3.2% |   650,650 | `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                                                                                                                                          |
|  3.2% |   650,650 | `Data.Aeson.KeyMap.lookup` (`src/Data/Aeson/KeyMap.hs:178:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                                                                          |
|  2.9% |   602,800 | `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                                                             |
|  2.8% |   577,500 | `Data.Vector.Fusion.Bundle.Monadic.sChunks` (`src/Data/Vector/Fusion/Bundle/Monadic.hs:122:30`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  2.8% |   577,500 | `Data.Vector.Fusion.Bundle.Monadic.sSize` (`src/Data/Vector/Fusion/Bundle/Monadic.hs:124:30`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  2.8% |   577,500 | `Data.Vector.Fusion.Bundle.Size.upperBound` (`src/Data/Vector/Fusion/Bundle/Size.hs:129:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.1% |   220,000 | `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                                                                    |
|  1.1% |   220,000 | `Data.Scientific.coefficient` (`src/Data/Scientific.hs:140:7`) ← `Data.Scientific.toBoundedInteger` (772:1) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                            |
|  1.1% |   220,000 | `Data.Aeson.Types.Internal.modifyFailure` (`src/Data/Aeson/Types/Internal.hs:671:1`) ← `Data.Aeson.Types.Internal.prependFailure` (681:1) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                              |
|  1.1% |   217,800 | `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                                                                                                                                                                                                                                            |
|  0.8% |   162,250 | `Data.Aeson.Types.FromJSON.withText` (`src/Data/Aeson/Types/FromJSON.hs:731:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (917:1) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                                                                                           |
|  0.8% |   162,250 | `Data.Vector.Fusion.Util.unId` (`src/Data/Vector/Fusion/Util.hs:25:21`) ← `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`) ← `Main.parseJSONList` (`Profile.hs:71:10`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) |
|  0.7% |   150,150 | `Data.Scientific.base10Exponent` (`src/Data/Scientific.hs:165:7`) ← `Data.Scientific.toBoundedInteger` (772:1) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                         |
|  0.7% |   150,150 | `Utils.magnitude` (`src/Utils.hs:78:1`) ← `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                          |
|  0.7% |   150,150 | `Data.Primitive.Array.array#` (`Data/Primitive/Array.hs:66:5`) ← `Utils.magnitude` (`src/Utils.hs:78:1`) ← `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                         |
