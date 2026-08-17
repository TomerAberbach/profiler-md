# Wall time profile

Took 3.59s over 3,592 samples (1.0ms per sample).

| Category          |     % |   Time | Samples |
| ----------------- | ----: | -----: | ------: |
| Ours              | 69.7% |  2.50s |   2,503 |
| Garbage collector | 29.9% |  1.07s |   1,075 |
| Native            |  0.4% | 14.0ms |      14 |

## Hottest functions

### Self time

Functions ranked by wall time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                                          | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 37.4% |   1.34s |   1,345 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| 29.9% |   1.07s |   1,075 | `GC.GC`                                           | `<unknown>`                                       |
| 13.5% | 484.0ms |     484 | `Data.Aeson.KeyMap.fromList`                      | `src/Data/Aeson/KeyMap.hs:247:1`                  |
|  4.2% | 150.0ms |     150 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
|  3.2% | 114.0ms |     114 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|  3.1% | 111.0ms |     111 | `Main.keywords`                                   | `Profile.hs:136:1`                                |
|  1.7% |  62.0ms |      62 | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|  1.5% |  55.0ms |      55 | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
|  0.7% |  26.0ms |      26 | `Data.Aeson.KeyMap.lookup`                        | `src/Data/Aeson/KeyMap.hs:178:1`                  |
|  0.5% |  19.0ms |      19 | `Main.tally`                                      | `Profile.hs:112:1`                                |
|  0.5% |  18.0ms |      18 | `Data.Aeson.Types.FromJSON.withArray`             | `src/Data/Aeson/Types/FromJSON.hs:742:1`          |
|  0.4% |  16.0ms |      16 | `Data.Aeson.Types.FromJSON.explicitParseField`    | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
|  0.4% |  13.0ms |      13 | `Main.summarize`                                  | `Profile.hs:118:1`                                |
|  0.3% |  11.0ms |      11 | `Data.Aeson.Types.Internal.<?>`                   | `src/Data/Aeson/Types/Internal.hs:659:1`          |
|  0.3% |   9.0ms |       9 | `Data.Aeson.Types.FromJSON.withText`              | `src/Data/Aeson/Types/FromJSON.hs:731:1`          |
|  0.2% |   8.0ms |       8 | `Data.Aeson.Encoding.Builder.object`              | `src/Data/Aeson/Encoding/Builder.hs:96:1`         |
|  0.2% |   8.0ms |       8 | `Data.Scientific.toBoundedInteger`                | `src/Data/Scientific.hs:772:1`                    |
|  0.2% |   8.0ms |       8 | `PROFILING.OVERHEAD_of`                           | `<unknown>`                                       |
|  0.2% |   7.0ms |       7 | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
|  0.2% |   7.0ms |       7 | `Data.Aeson.Encoding.Builder.text`                | `src/Data/Aeson/Encoding/Builder.hs:109:1`        |

#### Categories

##### Ours

|     % |    Time | Samples | Function                                          | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 37.4% |   1.34s |   1,345 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| 13.5% | 484.0ms |     484 | `Data.Aeson.KeyMap.fromList`                      | `src/Data/Aeson/KeyMap.hs:247:1`                  |
|  4.2% | 150.0ms |     150 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
|  3.2% | 114.0ms |     114 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|  3.1% | 111.0ms |     111 | `Main.keywords`                                   | `Profile.hs:136:1`                                |
|  1.7% |  62.0ms |      62 | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|  1.5% |  55.0ms |      55 | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
|  0.7% |  26.0ms |      26 | `Data.Aeson.KeyMap.lookup`                        | `src/Data/Aeson/KeyMap.hs:178:1`                  |
|  0.5% |  19.0ms |      19 | `Main.tally`                                      | `Profile.hs:112:1`                                |
|  0.5% |  18.0ms |      18 | `Data.Aeson.Types.FromJSON.withArray`             | `src/Data/Aeson/Types/FromJSON.hs:742:1`          |
|  0.4% |  16.0ms |      16 | `Data.Aeson.Types.FromJSON.explicitParseField`    | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
|  0.4% |  13.0ms |      13 | `Main.summarize`                                  | `Profile.hs:118:1`                                |
|  0.3% |  11.0ms |      11 | `Data.Aeson.Types.Internal.<?>`                   | `src/Data/Aeson/Types/Internal.hs:659:1`          |
|  0.3% |   9.0ms |       9 | `Data.Aeson.Types.FromJSON.withText`              | `src/Data/Aeson/Types/FromJSON.hs:731:1`          |
|  0.2% |   8.0ms |       8 | `Data.Aeson.Encoding.Builder.object`              | `src/Data/Aeson/Encoding/Builder.hs:96:1`         |
|  0.2% |   8.0ms |       8 | `Data.Scientific.toBoundedInteger`                | `src/Data/Scientific.hs:772:1`                    |
|  0.2% |   7.0ms |       7 | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
|  0.2% |   7.0ms |       7 | `Data.Aeson.Encoding.Builder.text`                | `src/Data/Aeson/Encoding/Builder.hs:109:1`        |
|  0.2% |   6.0ms |       6 | `Data.Aeson.Encoding.Builder.unquoted`            | `src/Data/Aeson/Encoding/Builder.hs:113:1`        |
|  0.2% |   6.0ms |       6 | `Main.top`                                        | `Profile.hs:115:1`                                |

##### Garbage collector

|     % |  Time | Samples | Function | Location    |
| ----: | ----: | ------: | -------- | ----------- |
| 29.9% | 1.07s |   1,075 | `GC.GC`  | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)

|      % |  Time | Samples | Caller                             | Location                          |
| -----: | ----: | ------: | ---------------------------------- | --------------------------------- |
| 100.0% | 1.34s |   1,345 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

##### `Data.Aeson.KeyMap.fromList` (`src/Data/Aeson/KeyMap.hs:247:1`)

|     % |    Time | Samples | Caller                                         | Location                                     |
| ----: | ------: | ------: | ---------------------------------------------- | -------------------------------------------- |
| 99.8% | 483.0ms |     483 | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |
|  0.2% |   1.0ms |       1 | `Main.toJSON`                                  | `Profile.hs:84:3`                            |

##### `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)

|      % |    Time | Samples | Caller                             | Location                          |
| -----: | ------: | ------: | ---------------------------------- | --------------------------------- |
| 100.0% | 150.0ms |     150 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

##### `Data.Aeson.Internal.Text.unsafeDecodeASCII` (`src/Data/Aeson/Internal/Text.hs:29:1`)

|      % |    Time | Samples | Caller                                            | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 114.0ms |     114 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

##### `Main.keywords` (`Profile.hs:136:1`)

|      % |    Time | Samples | Caller      | Location           |
| -----: | ------: | ------: | ----------- | ------------------ |
| 100.0% | 111.0ms |     111 | `Main.main` | `Profile.hs:146:1` |

##### `Data.Integer.Conversion.byteStringToInteger` (`src/Data/Integer/Conversion.hs:104:1`)

|      % |   Time | Samples | Caller                                            | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 62.0ms |      62 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

##### `Data.Aeson.Internal.Unescape.unescapeText` (`src/Data/Aeson/Internal/Unescape.hs:34:1`)

|      % |   Time | Samples | Caller                                            | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 55.0ms |      55 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

##### `Data.Aeson.KeyMap.lookup` (`src/Data/Aeson/KeyMap.hs:178:1`)

|      % |   Time | Samples | Caller                                         | Location                                 |
| -----: | -----: | ------: | ---------------------------------------------- | ---------------------------------------- |
| 100.0% | 26.0ms |      26 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Main.tally` (`Profile.hs:112:1`)

|     % |   Time | Samples | Caller           | Location           |
| ----: | -----: | ------: | ---------------- | ------------------ |
| 78.9% | 15.0ms |      15 | `Main.keywords`  | `Profile.hs:136:1` |
| 21.1% |  4.0ms |       4 | `Main.summarize` | `Profile.hs:118:1` |

##### `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`)

|     % |   Time | Samples | Caller               | Location            |
| ----: | -----: | ------: | -------------------- | ------------------- |
| 55.6% | 10.0ms |      10 | `Main.parseJSONList` | `Profile.hs:71:10`  |
| 22.2% |  4.0ms |       4 | `Main.parseJSONList` | `Profile.hs:108:10` |
| 22.2% |  4.0ms |       4 | `Main.parseJSONList` | `Profile.hs:50:10`  |

##### `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`)

|      % |   Time | Samples | Caller                         | Location                                 |
| -----: | -----: | ------: | ------------------------------ | ---------------------------------------- |
| 100.0% | 16.0ms |      16 | `Data.Aeson.Types.FromJSON..:` | `src/Data/Aeson/Types/FromJSON.hs:849:1` |

##### `Main.summarize` (`Profile.hs:118:1`)

|      % |   Time | Samples | Caller      | Location           |
| -----: | -----: | ------: | ----------- | ------------------ |
| 100.0% | 13.0ms |      13 | `Main.main` | `Profile.hs:146:1` |

##### `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`)

|      % |   Time | Samples | Caller                                         | Location                                 |
| -----: | -----: | ------: | ---------------------------------------------- | ---------------------------------------- |
| 100.0% | 11.0ms |      11 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Data.Aeson.Types.FromJSON.withText` (`src/Data/Aeson/Types/FromJSON.hs:731:1`)

|     % |  Time | Samples | Caller                                              | Location                                 |
| ----: | ----: | ------: | --------------------------------------------------- | ---------------------------------------- |
| 55.6% | 5.0ms |       5 | `Data.Aeson.Types.Internal.<?>`                     | `src/Data/Aeson/Types/Internal.hs:659:1` |
| 33.3% | 3.0ms |       3 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1` |
| 11.1% | 1.0ms |       1 | `Data.Aeson.Types.Internal.modifyFailure`           | `src/Data/Aeson/Types/Internal.hs:671:1` |

##### `Data.Aeson.Encoding.Builder.object` (`src/Data/Aeson/Encoding/Builder.hs:96:1`)

|      % |  Time | Samples | Caller                                        | Location                                  |
| -----: | ----: | ------: | --------------------------------------------- | ----------------------------------------- |
| 100.0% | 8.0ms |       8 | `Data.Aeson.Encoding.Builder.encodeToBuilder` | `src/Data/Aeson/Encoding/Builder.hs:68:1` |

##### `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`)

|      % |  Time | Samples | Caller                                         | Location                                 |
| -----: | ----: | ------: | ---------------------------------------------- | ---------------------------------------- |
| 100.0% | 8.0ms |       8 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`)

|      % |  Time | Samples | Caller                                 | Location                                 |
| -----: | ----: | ------: | -------------------------------------- | ---------------------------------------- |
| 100.0% | 7.0ms |       7 | `Data.Aeson.Types.FromJSON.withObject` | `src/Data/Aeson/Types/FromJSON.hs:720:1` |

##### `Data.Aeson.Encoding.Builder.text` (`src/Data/Aeson/Encoding/Builder.hs:109:1`)

|     % |  Time | Samples | Caller                               | Location                                  |
| ----: | ----: | ------: | ------------------------------------ | ----------------------------------------- |
| 85.7% | 6.0ms |       6 | `Data.Aeson.Encoding.Builder.object` | `src/Data/Aeson/Encoding/Builder.hs:96:1` |
| 14.3% | 1.0ms |       1 | `Data.Aeson.Encoding.Builder.array`  | `src/Data/Aeson/Encoding/Builder.hs:86:1` |

##### `Data.Aeson.Encoding.Builder.unquoted` (`src/Data/Aeson/Encoding/Builder.hs:113:1`)

|      % |  Time | Samples | Caller                             | Location                                   |
| -----: | ----: | ------: | ---------------------------------- | ------------------------------------------ |
| 100.0% | 6.0ms |       6 | `Data.Aeson.Encoding.Builder.text` | `src/Data/Aeson/Encoding/Builder.hs:109:1` |

##### `Main.top` (`Profile.hs:115:1`)

|      % |  Time | Samples | Caller           | Location           |
| -----: | ----: | ------: | ---------------- | ------------------ |
| 100.0% | 6.0ms |       6 | `Main.summarize` | `Profile.hs:118:1` |

### Total time

Functions ranked by total wall time spent in the function and all its callees.

|     % |    Time | Samples | Function                                          | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 69.7% |   2.50s |   2,503 | `Main.main`                                       | `Profile.hs:146:1`                                |
| 64.6% |   2.32s |   2,322 | `Data.Aeson.Decoding.eitherDecode`                | `src/Data/Aeson/Decoding.hs:79:1`                 |
| 43.9% |   1.57s |   1,576 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| 29.9% |   1.07s |   1,075 | `GC.GC`                                           | `<unknown>`                                       |
| 20.8% | 746.0ms |     746 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
| 13.5% | 484.0ms |     484 | `Data.Aeson.KeyMap.fromList`                      | `src/Data/Aeson/KeyMap.hs:247:1`                  |
|  3.5% | 126.0ms |     126 | `Main.keywords`                                   | `Profile.hs:136:1`                                |
|  3.2% | 114.0ms |     114 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|  3.1% | 113.0ms |     113 | `Data.Aeson.Types.FromJSON.withObject`            | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
|  3.1% | 113.0ms |     113 | `Data.Aeson.Types.FromJSON.ifromJSON`             | `src/Data/Aeson/Types/FromJSON.hs:839:1`          |
|  3.0% | 109.0ms |     109 | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
|  2.9% | 103.0ms |     103 | `Main.parseJSON`                                  | `Profile.hs:48:3`                                 |
|  2.8% | 102.0ms |     102 | `Data.Aeson.Types.FromJSON.explicitParseField`    | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
|  1.7% |  62.0ms |      62 | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|  1.5% |  55.0ms |      55 | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
|  1.5% |  54.0ms |      54 | `Main.roundTrip`                                  | `Profile.hs:139:1`                                |
|  0.9% |  32.0ms |      32 | `Data.Aeson.Types.Internal.<?>`                   | `src/Data/Aeson/Types/Internal.hs:659:1`          |
|  0.8% |  29.0ms |      29 | `Data.Aeson.encode`                               | `src/Data/Aeson.hs:187:1`                         |
|  0.8% |  28.0ms |      28 | `Main.toEncoding`                                 | `Profile.hs:83:10`                                |
|  0.7% |  26.0ms |      26 | `Data.Aeson.KeyMap.lookup`                        | `src/Data/Aeson/KeyMap.hs:178:1`                  |

#### Categories

##### Ours

|     % |    Time | Samples | Function                                          | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 69.7% |   2.50s |   2,503 | `Main.main`                                       | `Profile.hs:146:1`                                |
| 64.6% |   2.32s |   2,322 | `Data.Aeson.Decoding.eitherDecode`                | `src/Data/Aeson/Decoding.hs:79:1`                 |
| 43.9% |   1.57s |   1,576 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| 20.8% | 746.0ms |     746 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
| 13.5% | 484.0ms |     484 | `Data.Aeson.KeyMap.fromList`                      | `src/Data/Aeson/KeyMap.hs:247:1`                  |
|  3.5% | 126.0ms |     126 | `Main.keywords`                                   | `Profile.hs:136:1`                                |
|  3.2% | 114.0ms |     114 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|  3.1% | 113.0ms |     113 | `Data.Aeson.Types.FromJSON.withObject`            | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
|  3.1% | 113.0ms |     113 | `Data.Aeson.Types.FromJSON.ifromJSON`             | `src/Data/Aeson/Types/FromJSON.hs:839:1`          |
|  3.0% | 109.0ms |     109 | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
|  2.9% | 103.0ms |     103 | `Main.parseJSON`                                  | `Profile.hs:48:3`                                 |
|  2.8% | 102.0ms |     102 | `Data.Aeson.Types.FromJSON.explicitParseField`    | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
|  1.7% |  62.0ms |      62 | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|  1.5% |  55.0ms |      55 | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
|  1.5% |  54.0ms |      54 | `Main.roundTrip`                                  | `Profile.hs:139:1`                                |
|  0.9% |  32.0ms |      32 | `Data.Aeson.Types.Internal.<?>`                   | `src/Data/Aeson/Types/Internal.hs:659:1`          |
|  0.8% |  29.0ms |      29 | `Data.Aeson.encode`                               | `src/Data/Aeson.hs:187:1`                         |
|  0.8% |  28.0ms |      28 | `Main.toEncoding`                                 | `Profile.hs:83:10`                                |
|  0.7% |  26.0ms |      26 | `Data.Aeson.KeyMap.lookup`                        | `src/Data/Aeson/KeyMap.hs:178:1`                  |
|  0.7% |  25.0ms |      25 | `Data.Aeson.Encoding.Builder.encodeToBuilder`     | `src/Data/Aeson/Encoding/Builder.hs:68:1`         |

##### Garbage collector

|     % |  Time | Samples | Function | Location    |
| ----: | ----: | ------: | -------- | ----------- |
| 29.9% | 1.07s |   1,075 | `GC.GC`  | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `Main.main` (`Profile.hs:146:1`)

|     % |    Time | Samples | Callee                             | Location                          |
| ----: | ------: | ------: | ---------------------------------- | --------------------------------- |
| 91.8% |   2.29s |   2,298 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |
|  5.0% | 126.0ms |     126 | `Main.keywords`                    | `Profile.hs:136:1`                |
|  2.2% |  54.0ms |      54 | `Main.roundTrip`                   | `Profile.hs:139:1`                |
|  0.9% |  23.0ms |      23 | `Main.summarize`                   | `Profile.hs:118:1`                |

##### `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)

|     % |    Time | Samples | Callee                                            | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 67.9% |   1.57s |   1,576 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| 32.1% | 746.0ms |     746 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |

##### `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)

|    % |    Time | Samples | Callee                                        | Location                                   |
| ---: | ------: | ------: | --------------------------------------------- | ------------------------------------------ |
| 7.2% | 114.0ms |     114 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`  | `src/Data/Aeson/Internal/Text.hs:29:1`     |
| 3.9% |  62.0ms |      62 | `Data.Integer.Conversion.byteStringToInteger` | `src/Data/Integer/Conversion.hs:104:1`     |
| 3.5% |  55.0ms |      55 | `Data.Aeson.Internal.Unescape.unescapeText`   | `src/Data/Aeson/Internal/Unescape.hs:34:1` |

##### `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)

|     % |    Time | Samples | Callee                                | Location                                 |
| ----: | ------: | ------: | ------------------------------------- | ---------------------------------------- |
| 64.7% | 483.0ms |     483 | `Data.Aeson.KeyMap.fromList`          | `src/Data/Aeson/KeyMap.hs:247:1`         |
| 15.1% | 113.0ms |     113 | `Data.Aeson.Types.FromJSON.ifromJSON` | `src/Data/Aeson/Types/FromJSON.hs:839:1` |

##### `Main.keywords` (`Profile.hs:136:1`)

|     % |   Time | Samples | Callee       | Location           |
| ----: | -----: | ------: | ------------ | ------------------ |
| 11.9% | 15.0ms |      15 | `Main.tally` | `Profile.hs:112:1` |

##### `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`)

|     % |    Time | Samples | Callee                          | Location                                 |
| ----: | ------: | ------: | ------------------------------- | ---------------------------------------- |
| 96.5% | 109.0ms |     109 | `Data.Aeson.Types.FromJSON..:`  | `src/Data/Aeson/Types/FromJSON.hs:849:1` |
|  0.9% |   1.0ms |       1 | `Data.Aeson.Types.FromJSON..:?` | `src/Data/Aeson/Types/FromJSON.hs:859:1` |

##### `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`)

|     % |    Time | Samples | Callee           | Location          |
| ----: | ------: | ------: | ---------------- | ----------------- |
| 91.2% | 103.0ms |     103 | `Main.parseJSON` | `Profile.hs:48:3` |
|  8.8% |  10.0ms |      10 | `Main.parseJSON` | `Profile.hs:96:3` |

##### `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`)

|     % |    Time | Samples | Callee                                         | Location                                 |
| ----: | ------: | ------: | ---------------------------------------------- | ---------------------------------------- |
| 93.6% | 102.0ms |     102 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Main.parseJSON` (`Profile.hs:48:3`)

|      % |    Time | Samples | Callee                                 | Location                                 |
| -----: | ------: | ------: | -------------------------------------- | ---------------------------------------- |
| 100.0% | 103.0ms |     103 | `Data.Aeson.Types.FromJSON.withObject` | `src/Data/Aeson/Types/FromJSON.hs:720:1` |

##### `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`)

|     % |   Time | Samples | Callee                             | Location                                 |
| ----: | -----: | ------: | ---------------------------------- | ---------------------------------------- |
| 31.4% | 32.0ms |      32 | `Data.Aeson.Types.Internal.<?>`    | `src/Data/Aeson/Types/Internal.hs:659:1` |
| 25.5% | 26.0ms |      26 | `Data.Aeson.KeyMap.lookup`         | `src/Data/Aeson/KeyMap.hs:178:1`         |
| 15.7% | 16.0ms |      16 | `Data.Scientific.toBoundedInteger` | `src/Data/Scientific.hs:772:1`           |
|  4.9% |  5.0ms |       5 | `Main.parseJSONList`               | `Profile.hs:50:10`                       |
|  2.9% |  3.0ms |       3 | `Main.parseJSONList`               | `Profile.hs:71:10`                       |

##### `Main.roundTrip` (`Profile.hs:139:1`)

|     % |   Time | Samples | Callee                             | Location                          |
| ----: | -----: | ------: | ---------------------------------- | --------------------------------- |
| 53.7% | 29.0ms |      29 | `Data.Aeson.encode`                | `src/Data/Aeson.hs:187:1`         |
| 44.4% | 24.0ms |      24 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

##### `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`)

|     % |   Time | Samples | Callee                                     | Location                                 |
| ----: | -----: | ------: | ------------------------------------------ | ---------------------------------------- |
| 31.3% | 10.0ms |      10 | `Data.Aeson.Types.FromJSON.withText`       | `src/Data/Aeson/Types/FromJSON.hs:731:1` |
| 21.9% |  7.0ms |       7 | `Data.Aeson.Types.Internal.prependFailure` | `src/Data/Aeson/Types/Internal.hs:681:1` |
|  6.3% |  2.0ms |       2 | `Main.parseJSONList`                       | `Profile.hs:71:10`                       |
|  6.3% |  2.0ms |       2 | `Data.Aeson.Types.FromJSON..:?`            | `src/Data/Aeson/Types/FromJSON.hs:859:1` |

##### `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`)

|     % |   Time | Samples | Callee            | Location           |
| ----: | -----: | ------: | ----------------- | ------------------ |
| 96.6% | 28.0ms |      28 | `Main.toEncoding` | `Profile.hs:83:10` |

##### `Main.toEncoding` (`Profile.hs:83:10`)

|     % |   Time | Samples | Callee                               | Location                                    |
| ----: | -----: | ------: | ------------------------------------ | ------------------------------------------- |
| 89.3% | 25.0ms |      25 | `Data.Aeson.Encoding.Internal.value` | `src/Data/Aeson/Encoding/Internal.hs:441:1` |
| 10.7% |  3.0ms |       3 | `Main.toJSON`                        | `Profile.hs:84:3`                           |

##### `Data.Aeson.Encoding.Builder.encodeToBuilder` (`src/Data/Aeson/Encoding/Builder.hs:68:1`)

|     % |   Time | Samples | Callee                               | Location                                  |
| ----: | -----: | ------: | ------------------------------------ | ----------------------------------------- |
| 92.0% | 23.0ms |      23 | `Data.Aeson.Encoding.Builder.object` | `src/Data/Aeson/Encoding/Builder.hs:96:1` |
|  8.0% |  2.0ms |       2 | `Data.Aeson.Encoding.Builder.array`  | `src/Data/Aeson/Encoding/Builder.hs:86:1` |

## Hottest call stacks

Call stacks ranked by wall time spent in their leaf frame.

Common call stack: `Main.main` (`Profile.hs:146:1`)

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 37.2% |   1.33s |   1,337 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 13.4% | 482.0ms |     482 | `Data.Aeson.KeyMap.fromList` (`src/Data/Aeson/KeyMap.hs:247:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  4.1% | 148.0ms |     148 | `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  3.1% | 111.0ms |     111 | `Main.keywords` (`Profile.hs:136:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  3.1% | 111.0ms |     111 | `Data.Aeson.Internal.Text.unsafeDecodeASCII` (`src/Data/Aeson/Internal/Text.hs:29:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.7% |  62.0ms |      62 | `Data.Integer.Conversion.byteStringToInteger` (`src/Data/Integer/Conversion.hs:104:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.5% |  55.0ms |      55 | `Data.Aeson.Internal.Unescape.unescapeText` (`src/Data/Aeson/Internal/Unescape.hs:34:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.7% |  25.0ms |      25 | `Data.Aeson.KeyMap.lookup` (`src/Data/Aeson/KeyMap.hs:178:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                               |
|  0.4% |  15.0ms |      15 | `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                               |
|  0.4% |  15.0ms |      15 | `Main.tally` (`Profile.hs:112:1`) ← `Main.keywords` (136:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.4% |  13.0ms |      13 | `Main.summarize` (`Profile.hs:118:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.3% |  11.0ms |      11 | `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                  |
|  0.2% |   8.0ms |       8 | `Data.Aeson.Encoding.Builder.object` (`src/Data/Aeson/Encoding/Builder.hs:96:1`) ← `Data.Aeson.Encoding.Builder.encodeToBuilder` (68:1) ← `Data.Aeson.Encoding.Internal.value` (`src/Data/Aeson/Encoding/Internal.hs:441:1`) ← `Main.toEncoding` (`Profile.hs:83:10`) ← `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`) ← `Main.roundTrip` (`Profile.hs:139:1`)                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.2% |   8.0ms |       8 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.roundTrip` (`Profile.hs:139:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.2% |   7.0ms |       7 | `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                                                                        |
|  0.2% |   7.0ms |       7 | `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                         |
|  0.2% |   6.0ms |       6 | `Data.Aeson.Encoding.Builder.text` (`src/Data/Aeson/Encoding/Builder.hs:109:1`) ← `Data.Aeson.Encoding.Builder.object` (96:1) ← `Data.Aeson.Encoding.Builder.encodeToBuilder` (68:1) ← `Data.Aeson.Encoding.Internal.value` (`src/Data/Aeson/Encoding/Internal.hs:441:1`) ← `Main.toEncoding` (`Profile.hs:83:10`) ← `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`) ← `Main.roundTrip` (`Profile.hs:139:1`)                                                                                                                                                                                                                                                                                                                                                                         |
|  0.2% |   6.0ms |       6 | `Data.Aeson.Encoding.Builder.unquoted` (`src/Data/Aeson/Encoding/Builder.hs:113:1`) ← `Data.Aeson.Encoding.Builder.text` (109:1) ← `Data.Aeson.Encoding.Builder.object` (96:1) ← `Data.Aeson.Encoding.Builder.encodeToBuilder` (68:1) ← `Data.Aeson.Encoding.Internal.value` (`src/Data/Aeson/Encoding/Internal.hs:441:1`) ← `Main.toEncoding` (`Profile.hs:83:10`) ← `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`) ← `Main.roundTrip` (`Profile.hs:139:1`)                                                                                                                                                                                                                                                                                                                        |
|  0.2% |   6.0ms |       6 | `Main.top` (`Profile.hs:115:1`) ← `Main.summarize` (118:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.1% |   5.0ms |       5 | `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`) ← `Main.parseJSONList` (`Profile.hs:71:10`) ← `Data.Aeson.Types.FromJSON.withText` (`src/Data/Aeson/Types/FromJSON.hs:731:1`) ← `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) |
