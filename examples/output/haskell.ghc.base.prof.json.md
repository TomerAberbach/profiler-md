# Wall time profile

Took 3.63s over 3,630 samples (1.0ms per sample).

| Category          |     % |   Time | Samples |
| ----------------- | ----: | -----: | ------: |
| Ours              | 71.2% |  2.58s |   2,586 |
| Garbage collector | 28.2% |  1.02s |   1,024 |
| Native            |  0.6% | 20.0ms |      20 |

## Hottest functions

### Self time

Functions ranked by wall time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                                          | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 39.3% |   1.42s |   1,426 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| 28.2% |   1.02s |   1,024 | `GC.GC`                                           | `<unknown>`                                       |
| 11.9% | 431.0ms |     431 | `Data.Aeson.KeyMap.fromList`                      | `src/Data/Aeson/KeyMap.hs:247:1`                  |
|  5.9% | 213.0ms |     213 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
|  3.1% | 112.0ms |     112 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|  2.5% |  91.0ms |      91 | `Main.keywords`                                   | `Profile.hs:136:1`                                |
|  1.9% |  68.0ms |      68 | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|  1.8% |  64.0ms |      64 | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
|  0.6% |  21.0ms |      21 | `Data.Aeson.KeyMap.lookup`                        | `src/Data/Aeson/KeyMap.hs:178:1`                  |
|  0.6% |  21.0ms |      21 | `Main.tally`                                      | `Profile.hs:112:1`                                |
|  0.6% |  20.0ms |      20 | `Data.Aeson.Types.FromJSON.explicitParseField`    | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
|  0.4% |  15.0ms |      15 | `PROFILING.OVERHEAD_of`                           | `<unknown>`                                       |
|  0.4% |  14.0ms |      14 | `Data.Aeson.Types.FromJSON.withArray`             | `src/Data/Aeson/Types/FromJSON.hs:742:1`          |
|  0.3% |  11.0ms |      11 | `Main.summarize`                                  | `Profile.hs:118:1`                                |
|  0.3% |  10.0ms |      10 | `Data.Aeson.Types.FromJSON.withObject`            | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
|  0.2% |   9.0ms |       9 | `Data.Aeson.Encoding.Builder.text`                | `src/Data/Aeson/Encoding/Builder.hs:109:1`        |
|  0.2% |   8.0ms |       8 | `Main.top`                                        | `Profile.hs:115:1`                                |
|  0.2% |   7.0ms |       7 | `Data.Aeson.Types.FromJSON.withText`              | `src/Data/Aeson/Types/FromJSON.hs:731:1`          |
|  0.2% |   7.0ms |       7 | `Data.Aeson.Encoding.Builder.array`               | `src/Data/Aeson/Encoding/Builder.hs:86:1`         |
|  0.2% |   6.0ms |       6 | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |

#### Categories

##### Ours

|     % |    Time | Samples | Function                                          | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 39.3% |   1.42s |   1,426 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| 11.9% | 431.0ms |     431 | `Data.Aeson.KeyMap.fromList`                      | `src/Data/Aeson/KeyMap.hs:247:1`                  |
|  5.9% | 213.0ms |     213 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
|  3.1% | 112.0ms |     112 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|  2.5% |  91.0ms |      91 | `Main.keywords`                                   | `Profile.hs:136:1`                                |
|  1.9% |  68.0ms |      68 | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|  1.8% |  64.0ms |      64 | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
|  0.6% |  21.0ms |      21 | `Data.Aeson.KeyMap.lookup`                        | `src/Data/Aeson/KeyMap.hs:178:1`                  |
|  0.6% |  21.0ms |      21 | `Main.tally`                                      | `Profile.hs:112:1`                                |
|  0.6% |  20.0ms |      20 | `Data.Aeson.Types.FromJSON.explicitParseField`    | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
|  0.4% |  14.0ms |      14 | `Data.Aeson.Types.FromJSON.withArray`             | `src/Data/Aeson/Types/FromJSON.hs:742:1`          |
|  0.3% |  11.0ms |      11 | `Main.summarize`                                  | `Profile.hs:118:1`                                |
|  0.3% |  10.0ms |      10 | `Data.Aeson.Types.FromJSON.withObject`            | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
|  0.2% |   9.0ms |       9 | `Data.Aeson.Encoding.Builder.text`                | `src/Data/Aeson/Encoding/Builder.hs:109:1`        |
|  0.2% |   8.0ms |       8 | `Main.top`                                        | `Profile.hs:115:1`                                |
|  0.2% |   7.0ms |       7 | `Data.Aeson.Types.FromJSON.withText`              | `src/Data/Aeson/Types/FromJSON.hs:731:1`          |
|  0.2% |   7.0ms |       7 | `Data.Aeson.Encoding.Builder.array`               | `src/Data/Aeson/Encoding/Builder.hs:86:1`         |
|  0.2% |   6.0ms |       6 | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
|  0.2% |   6.0ms |       6 | `Data.Scientific.toBoundedInteger`                | `src/Data/Scientific.hs:772:1`                    |
|  0.2% |   6.0ms |       6 | `Data.Scientific.normalize`                       | `src/Data/Scientific.hs:1102:1`                   |

##### Garbage collector

|     % |  Time | Samples | Function | Location    |
| ----: | ----: | ------: | -------- | ----------- |
| 28.2% | 1.02s |   1,024 | `GC.GC`  | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)

|      % |  Time | Samples | Caller                             | Location                          |
| -----: | ----: | ------: | ---------------------------------- | --------------------------------- |
| 100.0% | 1.42s |   1,426 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

##### `GC.GC` (`<unknown>`)

|      % |  Time | Samples | Caller      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 1.02s |   1,024 | `MAIN.MAIN` | `<unknown>` |

##### `Data.Aeson.KeyMap.fromList` (`src/Data/Aeson/KeyMap.hs:247:1`)

|     % |    Time | Samples | Caller                                         | Location                                     |
| ----: | ------: | ------: | ---------------------------------------------- | -------------------------------------------- |
| 99.5% | 429.0ms |     429 | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |
|  0.5% |   2.0ms |       2 | `Main.toJSON`                                  | `Profile.hs:84:3`                            |

##### `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)

|      % |    Time | Samples | Caller                             | Location                          |
| -----: | ------: | ------: | ---------------------------------- | --------------------------------- |
| 100.0% | 213.0ms |     213 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

##### `Data.Aeson.Internal.Text.unsafeDecodeASCII` (`src/Data/Aeson/Internal/Text.hs:29:1`)

|      % |    Time | Samples | Caller                                            | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 112.0ms |     112 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

##### `Main.keywords` (`Profile.hs:136:1`)

|      % |   Time | Samples | Caller      | Location           |
| -----: | -----: | ------: | ----------- | ------------------ |
| 100.0% | 91.0ms |      91 | `Main.main` | `Profile.hs:146:1` |

##### `Data.Integer.Conversion.byteStringToInteger` (`src/Data/Integer/Conversion.hs:104:1`)

|      % |   Time | Samples | Caller                                            | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 68.0ms |      68 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

##### `Data.Aeson.Internal.Unescape.unescapeText` (`src/Data/Aeson/Internal/Unescape.hs:34:1`)

|      % |   Time | Samples | Caller                                            | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 64.0ms |      64 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

##### `Data.Aeson.KeyMap.lookup` (`src/Data/Aeson/KeyMap.hs:178:1`)

|     % |   Time | Samples | Caller                                              | Location                                 |
| ----: | -----: | ------: | --------------------------------------------------- | ---------------------------------------- |
| 90.5% | 19.0ms |      19 | `Data.Aeson.Types.FromJSON.explicitParseField`      | `src/Data/Aeson/Types/FromJSON.hs:917:1` |
|  9.5% |  2.0ms |       2 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1` |

##### `Main.tally` (`Profile.hs:112:1`)

|     % |   Time | Samples | Caller           | Location           |
| ----: | -----: | ------: | ---------------- | ------------------ |
| 71.4% | 15.0ms |      15 | `Main.keywords`  | `Profile.hs:136:1` |
| 28.6% |  6.0ms |       6 | `Main.summarize` | `Profile.hs:118:1` |

##### `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`)

|      % |   Time | Samples | Caller                         | Location                                 |
| -----: | -----: | ------: | ------------------------------ | ---------------------------------------- |
| 100.0% | 20.0ms |      20 | `Data.Aeson.Types.FromJSON..:` | `src/Data/Aeson/Types/FromJSON.hs:849:1` |

##### `PROFILING.OVERHEAD_of` (`<unknown>`)

|      % |   Time | Samples | Caller      | Location    |
| -----: | -----: | ------: | ----------- | ----------- |
| 100.0% | 15.0ms |      15 | `MAIN.MAIN` | `<unknown>` |

##### `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`)

|     % |   Time | Samples | Caller               | Location            |
| ----: | -----: | ------: | -------------------- | ------------------- |
| 78.6% | 11.0ms |      11 | `Main.parseJSONList` | `Profile.hs:71:10`  |
| 21.4% |  3.0ms |       3 | `Main.parseJSONList` | `Profile.hs:108:10` |

##### `Main.summarize` (`Profile.hs:118:1`)

|      % |   Time | Samples | Caller      | Location           |
| -----: | -----: | ------: | ----------- | ------------------ |
| 100.0% | 11.0ms |      11 | `Main.main` | `Profile.hs:146:1` |

##### `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`)

|     % |  Time | Samples | Caller           | Location          |
| ----: | ----: | ------: | ---------------- | ----------------- |
| 80.0% | 8.0ms |       8 | `Main.parseJSON` | `Profile.hs:48:3` |
| 20.0% | 2.0ms |       2 | `Main.parseJSON` | `Profile.hs:96:3` |

##### `Data.Aeson.Encoding.Builder.text` (`src/Data/Aeson/Encoding/Builder.hs:109:1`)

|     % |  Time | Samples | Caller                                        | Location                                  |
| ----: | ----: | ------: | --------------------------------------------- | ----------------------------------------- |
| 77.8% | 7.0ms |       7 | `Data.Aeson.Encoding.Builder.object`          | `src/Data/Aeson/Encoding/Builder.hs:96:1` |
| 11.1% | 1.0ms |       1 | `Data.Aeson.Encoding.Builder.array`           | `src/Data/Aeson/Encoding/Builder.hs:86:1` |
| 11.1% | 1.0ms |       1 | `Data.Aeson.Encoding.Builder.encodeToBuilder` | `src/Data/Aeson/Encoding/Builder.hs:68:1` |

##### `Main.top` (`Profile.hs:115:1`)

|      % |  Time | Samples | Caller           | Location           |
| -----: | ----: | ------: | ---------------- | ------------------ |
| 100.0% | 8.0ms |       8 | `Main.summarize` | `Profile.hs:118:1` |

##### `Data.Aeson.Types.FromJSON.withText` (`src/Data/Aeson/Types/FromJSON.hs:731:1`)

|     % |  Time | Samples | Caller                                              | Location                                 |
| ----: | ----: | ------: | --------------------------------------------------- | ---------------------------------------- |
| 85.7% | 6.0ms |       6 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1` |
| 14.3% | 1.0ms |       1 | `Data.Aeson.Types.Internal.<?>`                     | `src/Data/Aeson/Types/Internal.hs:659:1` |

##### `Data.Aeson.Encoding.Builder.array` (`src/Data/Aeson/Encoding/Builder.hs:86:1`)

|     % |  Time | Samples | Caller                               | Location                                   |
| ----: | ----: | ------: | ------------------------------------ | ------------------------------------------ |
| 71.4% | 5.0ms |       5 | `Data.Aeson.Encoding.Builder.text`   | `src/Data/Aeson/Encoding/Builder.hs:109:1` |
| 28.6% | 2.0ms |       2 | `Data.Aeson.Encoding.Builder.object` | `src/Data/Aeson/Encoding/Builder.hs:96:1`  |

##### `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`)

|      % |  Time | Samples | Caller                                 | Location                                 |
| -----: | ----: | ------: | -------------------------------------- | ---------------------------------------- |
| 100.0% | 6.0ms |       6 | `Data.Aeson.Types.FromJSON.withObject` | `src/Data/Aeson/Types/FromJSON.hs:720:1` |

##### `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`)

|      % |  Time | Samples | Caller                                         | Location                                 |
| -----: | ----: | ------: | ---------------------------------------------- | ---------------------------------------- |
| 100.0% | 6.0ms |       6 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Data.Scientific.normalize` (`src/Data/Scientific.hs:1102:1`)

|      % |  Time | Samples | Caller                             | Location                       |
| -----: | ----: | ------: | ---------------------------------- | ------------------------------ |
| 100.0% | 6.0ms |       6 | `Data.Scientific.toBoundedInteger` | `src/Data/Scientific.hs:772:1` |

### Total time

Functions ranked by total wall time spent in the function and all its callees.

|      % |    Time | Samples | Function                                          | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% |   3.63s |   3,630 | `MAIN.MAIN`                                       | `<unknown>`                                       |
|  71.2% |   2.58s |   2,586 | `Main.main`                                       | `Profile.hs:146:1`                                |
|  66.8% |   2.42s |   2,425 | `Data.Aeson.Decoding.eitherDecode`                | `src/Data/Aeson/Decoding.hs:79:1`                 |
|  46.0% |   1.67s |   1,670 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
|  28.2% |   1.02s |   1,024 | `GC.GC`                                           | `<unknown>`                                       |
|  20.8% | 755.0ms |     755 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
|  11.9% | 431.0ms |     431 | `Data.Aeson.KeyMap.fromList`                      | `src/Data/Aeson/KeyMap.hs:247:1`                  |
|   3.1% | 113.0ms |     113 | `Data.Aeson.Types.FromJSON.ifromJSON`             | `src/Data/Aeson/Types/FromJSON.hs:839:1`          |
|   3.1% | 112.0ms |     112 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|   3.1% | 112.0ms |     112 | `Data.Aeson.Types.FromJSON.withObject`            | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
|   2.9% | 106.0ms |     106 | `Main.keywords`                                   | `Profile.hs:136:1`                                |
|   2.8% | 100.0ms |     100 | `Main.parseJSON`                                  | `Profile.hs:48:3`                                 |
|   2.7% |  97.0ms |      97 | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
|   2.5% |  91.0ms |      91 | `Data.Aeson.Types.FromJSON.explicitParseField`    | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
|   1.9% |  68.0ms |      68 | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|   1.8% |  64.0ms |      64 | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
|   1.3% |  49.0ms |      49 | `Main.roundTrip`                                  | `Profile.hs:139:1`                                |
|   0.7% |  25.0ms |      25 | `Data.Aeson.Types.Internal.<?>`                   | `src/Data/Aeson/Types/Internal.hs:659:1`          |
|   0.7% |  25.0ms |      25 | `Main.summarize`                                  | `Profile.hs:118:1`                                |
|   0.7% |  25.0ms |      25 | `Main.toEncoding`                                 | `Profile.hs:83:10`                                |

#### Categories

##### Ours

|     % |    Time | Samples | Function                                          | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 71.2% |   2.58s |   2,586 | `Main.main`                                       | `Profile.hs:146:1`                                |
| 66.8% |   2.42s |   2,425 | `Data.Aeson.Decoding.eitherDecode`                | `src/Data/Aeson/Decoding.hs:79:1`                 |
| 46.0% |   1.67s |   1,670 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| 20.8% | 755.0ms |     755 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
| 11.9% | 431.0ms |     431 | `Data.Aeson.KeyMap.fromList`                      | `src/Data/Aeson/KeyMap.hs:247:1`                  |
|  3.1% | 113.0ms |     113 | `Data.Aeson.Types.FromJSON.ifromJSON`             | `src/Data/Aeson/Types/FromJSON.hs:839:1`          |
|  3.1% | 112.0ms |     112 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|  3.1% | 112.0ms |     112 | `Data.Aeson.Types.FromJSON.withObject`            | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
|  2.9% | 106.0ms |     106 | `Main.keywords`                                   | `Profile.hs:136:1`                                |
|  2.8% | 100.0ms |     100 | `Main.parseJSON`                                  | `Profile.hs:48:3`                                 |
|  2.7% |  97.0ms |      97 | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
|  2.5% |  91.0ms |      91 | `Data.Aeson.Types.FromJSON.explicitParseField`    | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
|  1.9% |  68.0ms |      68 | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|  1.8% |  64.0ms |      64 | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
|  1.3% |  49.0ms |      49 | `Main.roundTrip`                                  | `Profile.hs:139:1`                                |
|  0.7% |  25.0ms |      25 | `Data.Aeson.Types.Internal.<?>`                   | `src/Data/Aeson/Types/Internal.hs:659:1`          |
|  0.7% |  25.0ms |      25 | `Main.summarize`                                  | `Profile.hs:118:1`                                |
|  0.7% |  25.0ms |      25 | `Main.toEncoding`                                 | `Profile.hs:83:10`                                |
|  0.7% |  25.0ms |      25 | `Data.Aeson.encode`                               | `src/Data/Aeson.hs:187:1`                         |
|  0.6% |  21.0ms |      21 | `Data.Aeson.KeyMap.lookup`                        | `src/Data/Aeson/KeyMap.hs:178:1`                  |

##### Garbage collector

|     % |  Time | Samples | Function | Location    |
| ----: | ----: | ------: | -------- | ----------- |
| 28.2% | 1.02s |   1,024 | `GC.GC`  | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `MAIN.MAIN` (`<unknown>`)

|     % |   Time | Samples | Callee                  | Location           |
| ----: | -----: | ------: | ----------------------- | ------------------ |
| 71.2% |  2.58s |   2,586 | `Main.main`             | `Profile.hs:146:1` |
| 28.2% |  1.02s |   1,024 | `GC.GC`                 | `<unknown>`        |
|  0.4% | 15.0ms |      15 | `PROFILING.OVERHEAD_of` | `<unknown>`        |
|  0.1% |  5.0ms |       5 | `SYSTEM.SYSTEM`         | `<unknown>`        |

##### `Main.main` (`Profile.hs:146:1`)

|     % |    Time | Samples | Callee                             | Location                          |
| ----: | ------: | ------: | ---------------------------------- | --------------------------------- |
| 92.8% |   2.40s |   2,401 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |
|  4.1% | 106.0ms |     106 | `Main.keywords`                    | `Profile.hs:136:1`                |
|  1.9% |  49.0ms |      49 | `Main.roundTrip`                   | `Profile.hs:139:1`                |
|  1.0% |  25.0ms |      25 | `Main.summarize`                   | `Profile.hs:118:1`                |

##### `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)

|     % |    Time | Samples | Callee                                            | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 68.9% |   1.67s |   1,670 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| 31.1% | 755.0ms |     755 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |

##### `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)

|    % |    Time | Samples | Callee                                        | Location                                   |
| ---: | ------: | ------: | --------------------------------------------- | ------------------------------------------ |
| 6.7% | 112.0ms |     112 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`  | `src/Data/Aeson/Internal/Text.hs:29:1`     |
| 4.1% |  68.0ms |      68 | `Data.Integer.Conversion.byteStringToInteger` | `src/Data/Integer/Conversion.hs:104:1`     |
| 3.8% |  64.0ms |      64 | `Data.Aeson.Internal.Unescape.unescapeText`   | `src/Data/Aeson/Internal/Unescape.hs:34:1` |

##### `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)

|     % |    Time | Samples | Callee                                | Location                                 |
| ----: | ------: | ------: | ------------------------------------- | ---------------------------------------- |
| 56.8% | 429.0ms |     429 | `Data.Aeson.KeyMap.fromList`          | `src/Data/Aeson/KeyMap.hs:247:1`         |
| 15.0% | 113.0ms |     113 | `Data.Aeson.Types.FromJSON.ifromJSON` | `src/Data/Aeson/Types/FromJSON.hs:839:1` |

##### `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`)

|     % |    Time | Samples | Callee           | Location          |
| ----: | ------: | ------: | ---------------- | ----------------- |
| 88.5% | 100.0ms |     100 | `Main.parseJSON` | `Profile.hs:48:3` |
| 10.6% |  12.0ms |      12 | `Main.parseJSON` | `Profile.hs:96:3` |

##### `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`)

|     % |   Time | Samples | Callee                          | Location                                 |
| ----: | -----: | ------: | ------------------------------- | ---------------------------------------- |
| 86.6% | 97.0ms |      97 | `Data.Aeson.Types.FromJSON..:`  | `src/Data/Aeson/Types/FromJSON.hs:849:1` |
|  4.5% |  5.0ms |       5 | `Data.Aeson.Types.FromJSON..:?` | `src/Data/Aeson/Types/FromJSON.hs:859:1` |

##### `Main.keywords` (`Profile.hs:136:1`)

|     % |   Time | Samples | Callee       | Location           |
| ----: | -----: | ------: | ------------ | ------------------ |
| 14.2% | 15.0ms |      15 | `Main.tally` | `Profile.hs:112:1` |

##### `Main.parseJSON` (`Profile.hs:48:3`)

|      % |    Time | Samples | Callee                                 | Location                                 |
| -----: | ------: | ------: | -------------------------------------- | ---------------------------------------- |
| 100.0% | 100.0ms |     100 | `Data.Aeson.Types.FromJSON.withObject` | `src/Data/Aeson/Types/FromJSON.hs:720:1` |

##### `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`)

|     % |   Time | Samples | Callee                                         | Location                                 |
| ----: | -----: | ------: | ---------------------------------------------- | ---------------------------------------- |
| 93.8% | 91.0ms |      91 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`)

|     % |   Time | Samples | Callee                                     | Location                                 |
| ----: | -----: | ------: | ------------------------------------------ | ---------------------------------------- |
| 27.5% | 25.0ms |      25 | `Data.Aeson.Types.Internal.<?>`            | `src/Data/Aeson/Types/Internal.hs:659:1` |
| 20.9% | 19.0ms |      19 | `Data.Aeson.KeyMap.lookup`                 | `src/Data/Aeson/KeyMap.hs:178:1`         |
| 15.4% | 14.0ms |      14 | `Data.Scientific.toBoundedInteger`         | `src/Data/Scientific.hs:772:1`           |
|  4.4% |  4.0ms |       4 | `Main.parseJSONList`                       | `Profile.hs:71:10`                       |
|  4.4% |  4.0ms |       4 | `Data.Aeson.Types.Internal.prependFailure` | `src/Data/Aeson/Types/Internal.hs:681:1` |

##### `Main.roundTrip` (`Profile.hs:139:1`)

|     % |   Time | Samples | Callee                             | Location                          |
| ----: | -----: | ------: | ---------------------------------- | --------------------------------- |
| 51.0% | 25.0ms |      25 | `Data.Aeson.encode`                | `src/Data/Aeson.hs:187:1`         |
| 49.0% | 24.0ms |      24 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

##### `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`)

|     % |  Time | Samples | Callee                                     | Location                                 |
| ----: | ----: | ------: | ------------------------------------------ | ---------------------------------------- |
| 28.0% | 7.0ms |       7 | `Data.Aeson.Types.Internal.prependFailure` | `src/Data/Aeson/Types/Internal.hs:681:1` |
| 28.0% | 7.0ms |       7 | `Data.Aeson.Types.FromJSON.withText`       | `src/Data/Aeson/Types/FromJSON.hs:731:1` |
| 12.0% | 3.0ms |       3 | `Main.parseJSONList`                       | `Profile.hs:71:10`                       |
|  8.0% | 2.0ms |       2 | `Data.Aeson.Types.FromJSON..:?`            | `src/Data/Aeson/Types/FromJSON.hs:859:1` |
|  4.0% | 1.0ms |       1 | `Main.parseJSONList`                       | `Profile.hs:108:10`                      |

##### `Main.summarize` (`Profile.hs:118:1`)

|     % |  Time | Samples | Callee       | Location           |
| ----: | ----: | ------: | ------------ | ------------------ |
| 32.0% | 8.0ms |       8 | `Main.top`   | `Profile.hs:115:1` |
| 24.0% | 6.0ms |       6 | `Main.tally` | `Profile.hs:112:1` |

##### `Main.toEncoding` (`Profile.hs:83:10`)

|     % |   Time | Samples | Callee                               | Location                                    |
| ----: | -----: | ------: | ------------------------------------ | ------------------------------------------- |
| 80.0% | 20.0ms |      20 | `Data.Aeson.Encoding.Internal.value` | `src/Data/Aeson/Encoding/Internal.hs:441:1` |
| 20.0% |  5.0ms |       5 | `Main.toJSON`                        | `Profile.hs:84:3`                           |

##### `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`)

|      % |   Time | Samples | Callee            | Location           |
| -----: | -----: | ------: | ----------------- | ------------------ |
| 100.0% | 25.0ms |      25 | `Main.toEncoding` | `Profile.hs:83:10` |

## Hottest call stacks

Call stacks ranked by wall time spent in their leaf frame.

Common call stack: `MAIN.MAIN`

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----: | ------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 39.1% |   1.41s |   1,418 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                                                               |
| 28.2% |   1.02s |   1,024 | `GC.GC`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 11.8% | 428.0ms |     428 | `Data.Aeson.KeyMap.fromList` (`src/Data/Aeson/KeyMap.hs:247:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                     |
|  5.8% | 211.0ms |     211 | `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                                                                       |
|  3.1% | 112.0ms |     112 | `Data.Aeson.Internal.Text.unsafeDecodeASCII` (`src/Data/Aeson/Internal/Text.hs:29:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                       |
|  2.5% |  91.0ms |      91 | `Main.keywords` (`Profile.hs:136:1`) ← `Main.main` (146:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.8% |  67.0ms |      67 | `Data.Integer.Conversion.byteStringToInteger` (`src/Data/Integer/Conversion.hs:104:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                      |
|  1.8% |  64.0ms |      64 | `Data.Aeson.Internal.Unescape.unescapeText` (`src/Data/Aeson/Internal/Unescape.hs:34:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                    |
|  0.5% |  19.0ms |      19 | `Data.Aeson.KeyMap.lookup` (`src/Data/Aeson/KeyMap.hs:178:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)       |
|  0.5% |  17.0ms |      17 | `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                       |
|  0.4% |  15.0ms |      15 | `PROFILING.OVERHEAD_of`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.4% |  15.0ms |      15 | `Main.tally` (`Profile.hs:112:1`) ← `Main.keywords` (136:1) ← `Main.main` (146:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.3% |  11.0ms |      11 | `Main.summarize` (`Profile.hs:118:1`) ← `Main.main` (146:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.2% |   8.0ms |       8 | `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                         |
|  0.2% |   8.0ms |       8 | `Main.top` (`Profile.hs:115:1`) ← `Main.summarize` (118:1) ← `Main.main` (146:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.2% |   8.0ms |       8 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.roundTrip` (`Profile.hs:139:1`) ← `Main.main` (146:1)                                                                                                                                                                                                                                                                                                                                                    |
|  0.2% |   7.0ms |       7 | `Data.Aeson.Encoding.Builder.text` (`src/Data/Aeson/Encoding/Builder.hs:109:1`) ← `Data.Aeson.Encoding.Builder.object` (96:1) ← `Data.Aeson.Encoding.Builder.encodeToBuilder` (68:1) ← `Data.Aeson.Encoding.Internal.value` (`src/Data/Aeson/Encoding/Internal.hs:441:1`) ← `Main.toEncoding` (`Profile.hs:83:10`) ← `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`) ← `Main.roundTrip` (`Profile.hs:139:1`) ← `Main.main` (146:1)                                                                                                                                                              |
|  0.2% |   6.0ms |       6 | `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                |
|  0.2% |   6.0ms |       6 | `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`) |
|  0.2% |   6.0ms |       6 | `Main.tally` (`Profile.hs:112:1`) ← `Main.summarize` (118:1) ← `Main.main` (146:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

# Allocated heap and entries profile

Allocated 10.1 GiB and recorded 18,616,855 entries.

| Category          |     % |     Size |    Entries |
| ----------------- | ----: | -------: | ---------: |
| Ours              | 99.7% | 10.1 GiB | 18,616,855 |
| Native            |  0.3% | 28.8 MiB |          0 |
| Garbage collector | <0.1% | 1.07 KiB |          0 |

## Allocated heap

### Hottest functions

#### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Function                                          | Location                                          |
| ----: | -------: | ------------------------------------------------- | ------------------------------------------------- |
| 59.6% | 6.01 GiB | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| 15.3% | 1.54 GiB | `Data.Aeson.KeyMap.fromList`                      | `src/Data/Aeson/KeyMap.hs:247:1`                  |
|  8.3% |  859 MiB | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
|  5.3% |  547 MiB | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|  4.4% |  459 MiB | `Main.keywords`                                   | `Profile.hs:136:1`                                |
|  1.8% |  183 MiB | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|  0.9% | 96.2 MiB | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
|  0.8% | 81.7 MiB | `Main.tally`                                      | `Profile.hs:112:1`                                |
|  0.5% | 49.7 MiB | `Data.Aeson.Types.FromJSON.explicitParseField`    | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
|  0.4% | 36.8 MiB | `Data.Aeson.Types.FromJSON.withArray`             | `src/Data/Aeson/Types/FromJSON.hs:742:1`          |
|  0.3% | 33.8 MiB | `Main.summarize`                                  | `Profile.hs:118:1`                                |
|  0.3% | 29.8 MiB | `Data.Aeson.Types.Internal.<?>`                   | `src/Data/Aeson/Types/Internal.hs:659:1`          |
|  0.3% | 29.2 MiB | `Data.Aeson.Types.FromJSON.withText`              | `src/Data/Aeson/Types/FromJSON.hs:731:1`          |
|  0.3% | 28.7 MiB | `PROFILING.OVERHEAD_of`                           | `<unknown>`                                       |
|  0.2% | 22.3 MiB | `Data.Aeson.Types.FromJSON.withObject`            | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
|  0.2% |   19 MiB | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
|  0.2% | 18.4 MiB | `Main.top`                                        | `Profile.hs:115:1`                                |
|  0.1% | 15.1 MiB | `Data.Aeson.Encoding.Builder.array`               | `src/Data/Aeson/Encoding/Builder.hs:86:1`         |
|  0.1% | 13.7 MiB | `Data.Aeson.Encoding.Builder.text`                | `src/Data/Aeson/Encoding/Builder.hs:109:1`        |
|  0.1% | 12.9 MiB | `Data.Scientific.toBoundedInteger`                | `src/Data/Scientific.hs:772:1`                    |

##### Categories

###### Ours

|     % |     Size | Function                                          | Location                                          |
| ----: | -------: | ------------------------------------------------- | ------------------------------------------------- |
| 59.6% | 6.01 GiB | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| 15.3% | 1.54 GiB | `Data.Aeson.KeyMap.fromList`                      | `src/Data/Aeson/KeyMap.hs:247:1`                  |
|  8.3% |  859 MiB | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
|  5.3% |  547 MiB | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|  4.4% |  459 MiB | `Main.keywords`                                   | `Profile.hs:136:1`                                |
|  1.8% |  183 MiB | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|  0.9% | 96.2 MiB | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
|  0.8% | 81.7 MiB | `Main.tally`                                      | `Profile.hs:112:1`                                |
|  0.5% | 49.7 MiB | `Data.Aeson.Types.FromJSON.explicitParseField`    | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
|  0.4% | 36.8 MiB | `Data.Aeson.Types.FromJSON.withArray`             | `src/Data/Aeson/Types/FromJSON.hs:742:1`          |
|  0.3% | 33.8 MiB | `Main.summarize`                                  | `Profile.hs:118:1`                                |
|  0.3% | 29.8 MiB | `Data.Aeson.Types.Internal.<?>`                   | `src/Data/Aeson/Types/Internal.hs:659:1`          |
|  0.3% | 29.2 MiB | `Data.Aeson.Types.FromJSON.withText`              | `src/Data/Aeson/Types/FromJSON.hs:731:1`          |
|  0.2% | 22.3 MiB | `Data.Aeson.Types.FromJSON.withObject`            | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
|  0.2% |   19 MiB | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
|  0.2% | 18.4 MiB | `Main.top`                                        | `Profile.hs:115:1`                                |
|  0.1% | 15.1 MiB | `Data.Aeson.Encoding.Builder.array`               | `src/Data/Aeson/Encoding/Builder.hs:86:1`         |
|  0.1% | 13.7 MiB | `Data.Aeson.Encoding.Builder.text`                | `src/Data/Aeson/Encoding/Builder.hs:109:1`        |
|  0.1% | 12.9 MiB | `Data.Scientific.toBoundedInteger`                | `src/Data/Scientific.hs:772:1`                    |
|  0.1% | 9.61 MiB | `Data.Aeson.KeyMap.lookup`                        | `src/Data/Aeson/KeyMap.hs:178:1`                  |

##### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

###### `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)

|      % |     Size | Caller                                    | Location                          |
| -----: | -------: | ----------------------------------------- | --------------------------------- |
| 100.0% | 6.01 GiB | `Data.Aeson.Decoding.eitherDecode`        | `src/Data/Aeson/Decoding.hs:79:1` |
|  <0.1% | 1.08 KiB | `Data.Aeson.Decoding.ByteString.Lazy.CAF` | `<unknown>`                       |

###### `Data.Aeson.KeyMap.fromList` (`src/Data/Aeson/KeyMap.hs:247:1`)

|     % |     Size | Caller                                         | Location                                     |
| ----: | -------: | ---------------------------------------------- | -------------------------------------------- |
| 99.9% | 1.54 GiB | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |
|  0.1% |  2.2 MiB | `Main.toJSON`                                  | `Profile.hs:84:3`                            |

###### `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)

|      % |    Size | Caller                             | Location                          |
| -----: | ------: | ---------------------------------- | --------------------------------- |
| 100.0% | 859 MiB | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

###### `Data.Aeson.Internal.Text.unsafeDecodeASCII` (`src/Data/Aeson/Internal/Text.hs:29:1`)

|      % |    Size | Caller                                            | Location                                          |
| -----: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 547 MiB | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

###### `Main.keywords` (`Profile.hs:136:1`)

|      % |    Size | Caller      | Location           |
| -----: | ------: | ----------- | ------------------ |
| 100.0% | 459 MiB | `Main.main` | `Profile.hs:146:1` |

###### `Data.Integer.Conversion.byteStringToInteger` (`src/Data/Integer/Conversion.hs:104:1`)

|      % |    Size | Caller                                            | Location                                          |
| -----: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 183 MiB | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

###### `Data.Aeson.Internal.Unescape.unescapeText` (`src/Data/Aeson/Internal/Unescape.hs:34:1`)

|      % |     Size | Caller                                            | Location                                          |
| -----: | -------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 96.2 MiB | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

###### `Main.tally` (`Profile.hs:112:1`)

|     % |     Size | Caller           | Location           |
| ----: | -------: | ---------------- | ------------------ |
| 81.4% | 66.6 MiB | `Main.keywords`  | `Profile.hs:136:1` |
| 18.6% | 15.2 MiB | `Main.summarize` | `Profile.hs:118:1` |

###### `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`)

|      % |     Size | Caller                         | Location                                 |
| -----: | -------: | ------------------------------ | ---------------------------------------- |
| 100.0% | 49.7 MiB | `Data.Aeson.Types.FromJSON..:` | `src/Data/Aeson/Types/FromJSON.hs:849:1` |

###### `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`)

|     % |     Size | Caller               | Location            |
| ----: | -------: | -------------------- | ------------------- |
| 70.7% |   26 MiB | `Main.parseJSONList` | `Profile.hs:71:10`  |
| 19.1% | 7.05 MiB | `Main.parseJSONList` | `Profile.hs:50:10`  |
| 10.2% | 3.75 MiB | `Main.parseJSONList` | `Profile.hs:108:10` |

###### `Main.summarize` (`Profile.hs:118:1`)

|      % |     Size | Caller      | Location           |
| -----: | -------: | ----------- | ------------------ |
| 100.0% | 33.8 MiB | `Main.main` | `Profile.hs:146:1` |

###### `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`)

|      % |     Size | Caller                                         | Location                                 |
| -----: | -------: | ---------------------------------------------- | ---------------------------------------- |
| 100.0% | 29.8 MiB | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

###### `Data.Aeson.Types.FromJSON.withText` (`src/Data/Aeson/Types/FromJSON.hs:731:1`)

|     % |     Size | Caller                                              | Location                                 |
| ----: | -------: | --------------------------------------------------- | ---------------------------------------- |
| 40.5% | 11.8 MiB | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1` |
| 28.3% | 8.27 MiB | `Data.Aeson.Types.Internal.<?>`                     | `src/Data/Aeson/Types/Internal.hs:659:1` |
| 22.7% | 6.65 MiB | `Data.Aeson.Types.Internal.modifyFailure`           | `src/Data/Aeson/Types/Internal.hs:671:1` |
|  8.5% | 2.47 MiB | `Data.Aeson.Types.FromJSON.explicitParseField`      | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

###### `PROFILING.OVERHEAD_of` (`<unknown>`)

|      % |     Size | Caller      | Location    |
| -----: | -------: | ----------- | ----------- |
| 100.0% | 28.7 MiB | `MAIN.MAIN` | `<unknown>` |

###### `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`)

|     % |     Size | Caller           | Location          |
| ----: | -------: | ---------------- | ----------------- |
| 95.0% | 21.2 MiB | `Main.parseJSON` | `Profile.hs:48:3` |
|  5.0% | 1.11 MiB | `Main.parseJSON` | `Profile.hs:96:3` |

###### `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`)

|      % |   Size | Caller                                 | Location                                 |
| -----: | -----: | -------------------------------------- | ---------------------------------------- |
| 100.0% | 19 MiB | `Data.Aeson.Types.FromJSON.withObject` | `src/Data/Aeson/Types/FromJSON.hs:720:1` |

###### `Main.top` (`Profile.hs:115:1`)

|      % |     Size | Caller           | Location           |
| -----: | -------: | ---------------- | ------------------ |
| 100.0% | 18.4 MiB | `Main.summarize` | `Profile.hs:118:1` |

###### `Data.Aeson.Encoding.Builder.array` (`src/Data/Aeson/Encoding/Builder.hs:86:1`)

|     % |     Size | Caller                                        | Location                                   |
| ----: | -------: | --------------------------------------------- | ------------------------------------------ |
| 50.1% | 7.58 MiB | `Data.Aeson.Encoding.Builder.object`          | `src/Data/Aeson/Encoding/Builder.hs:96:1`  |
| 41.6% | 6.29 MiB | `Data.Aeson.Encoding.Builder.text`            | `src/Data/Aeson/Encoding/Builder.hs:109:1` |
|  7.9% |  1.2 MiB | `Data.Aeson.Encoding.Builder.encodeToBuilder` | `src/Data/Aeson/Encoding/Builder.hs:68:1`  |
|  0.5% | 70.3 KiB | `Data.Aeson.Encoding.Builder.unquoted`        | `src/Data/Aeson/Encoding/Builder.hs:113:1` |

###### `Data.Aeson.Encoding.Builder.text` (`src/Data/Aeson/Encoding/Builder.hs:109:1`)

|     % |     Size | Caller                                        | Location                                  |
| ----: | -------: | --------------------------------------------- | ----------------------------------------- |
| 61.3% | 8.42 MiB | `Data.Aeson.Encoding.Builder.object`          | `src/Data/Aeson/Encoding/Builder.hs:96:1` |
| 31.4% | 4.31 MiB | `Data.Aeson.Encoding.Builder.array`           | `src/Data/Aeson/Encoding/Builder.hs:86:1` |
|  7.3% | 1020 KiB | `Data.Aeson.Encoding.Builder.encodeToBuilder` | `src/Data/Aeson/Encoding/Builder.hs:68:1` |

###### `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`)

|      % |     Size | Caller                                         | Location                                 |
| -----: | -------: | ---------------------------------------------- | ---------------------------------------- |
| 100.0% | 12.9 MiB | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

###### `Data.Aeson.KeyMap.lookup` (`src/Data/Aeson/KeyMap.hs:178:1`)

|     % |     Size | Caller                                              | Location                                 |
| ----: | -------: | --------------------------------------------------- | ---------------------------------------- |
| 92.1% | 8.84 MiB | `Data.Aeson.Types.FromJSON.explicitParseField`      | `src/Data/Aeson/Types/FromJSON.hs:917:1` |
|  7.9% |  781 KiB | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1` |

#### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|      % |     Size | Function                                          | Location                                          |
| -----: | -------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 10.1 GiB | `MAIN.MAIN`                                       | `<unknown>`                                       |
|  99.7% | 10.1 GiB | `Main.main`                                       | `Profile.hs:146:1`                                |
|  93.5% | 9.43 GiB | `Data.Aeson.Decoding.eitherDecode`                | `src/Data/Aeson/Decoding.hs:79:1`                 |
|  67.6% | 6.82 GiB | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
|  25.9% | 2.61 GiB | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
|  15.3% | 1.54 GiB | `Data.Aeson.KeyMap.fromList`                      | `src/Data/Aeson/KeyMap.hs:247:1`                  |
|   5.3% |  547 MiB | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|   5.1% |  526 MiB | `Main.keywords`                                   | `Profile.hs:136:1`                                |
|   2.3% |  242 MiB | `Data.Aeson.Types.FromJSON.ifromJSON`             | `src/Data/Aeson/Types/FromJSON.hs:839:1`          |
|   2.3% |  242 MiB | `Data.Aeson.Types.FromJSON.withObject`            | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
|   2.2% |  227 MiB | `Main.parseJSON`                                  | `Profile.hs:48:3`                                 |
|   2.1% |  212 MiB | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
|   1.9% |  193 MiB | `Data.Aeson.Types.FromJSON.explicitParseField`    | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
|   1.8% |  183 MiB | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|   1.0% |  103 MiB | `Main.roundTrip`                                  | `Profile.hs:139:1`                                |
|   0.9% | 96.2 MiB | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
|   0.8% | 81.7 MiB | `Main.tally`                                      | `Profile.hs:112:1`                                |
|   0.8% | 79.8 MiB | `Data.Aeson.Types.Internal.<?>`                   | `src/Data/Aeson/Types/Internal.hs:659:1`          |
|   0.7% | 67.3 MiB | `Main.summarize`                                  | `Profile.hs:118:1`                                |
|   0.5% | 50.5 MiB | `Data.Aeson.encode`                               | `src/Data/Aeson.hs:187:1`                         |

##### Categories

###### Ours

|     % |     Size | Function                                          | Location                                          |
| ----: | -------: | ------------------------------------------------- | ------------------------------------------------- |
| 99.7% | 10.1 GiB | `Main.main`                                       | `Profile.hs:146:1`                                |
| 93.5% | 9.43 GiB | `Data.Aeson.Decoding.eitherDecode`                | `src/Data/Aeson/Decoding.hs:79:1`                 |
| 67.6% | 6.82 GiB | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| 25.9% | 2.61 GiB | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
| 15.3% | 1.54 GiB | `Data.Aeson.KeyMap.fromList`                      | `src/Data/Aeson/KeyMap.hs:247:1`                  |
|  5.3% |  547 MiB | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|  5.1% |  526 MiB | `Main.keywords`                                   | `Profile.hs:136:1`                                |
|  2.3% |  242 MiB | `Data.Aeson.Types.FromJSON.ifromJSON`             | `src/Data/Aeson/Types/FromJSON.hs:839:1`          |
|  2.3% |  242 MiB | `Data.Aeson.Types.FromJSON.withObject`            | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
|  2.2% |  227 MiB | `Main.parseJSON`                                  | `Profile.hs:48:3`                                 |
|  2.1% |  212 MiB | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
|  1.9% |  193 MiB | `Data.Aeson.Types.FromJSON.explicitParseField`    | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
|  1.8% |  183 MiB | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|  1.0% |  103 MiB | `Main.roundTrip`                                  | `Profile.hs:139:1`                                |
|  0.9% | 96.2 MiB | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
|  0.8% | 81.7 MiB | `Main.tally`                                      | `Profile.hs:112:1`                                |
|  0.8% | 79.8 MiB | `Data.Aeson.Types.Internal.<?>`                   | `src/Data/Aeson/Types/Internal.hs:659:1`          |
|  0.7% | 67.3 MiB | `Main.summarize`                                  | `Profile.hs:118:1`                                |
|  0.5% | 50.5 MiB | `Data.Aeson.encode`                               | `src/Data/Aeson.hs:187:1`                         |
|  0.5% | 47.8 MiB | `Main.toEncoding`                                 | `Profile.hs:83:10`                                |

##### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

###### `MAIN.MAIN` (`<unknown>`)

|     % |     Size | Callee                          | Location           |
| ----: | -------: | ------------------------------- | ------------------ |
| 99.7% | 10.1 GiB | `Main.main`                     | `Profile.hs:146:1` |
|  0.3% | 28.7 MiB | `PROFILING.OVERHEAD_of`         | `<unknown>`        |
| <0.1% | 33.9 KiB | `GHC.Internal.IO.Handle.FD.CAF` | `<unknown>`        |
| <0.1% | 33.9 KiB | `SYSTEM.SYSTEM`                 | `<unknown>`        |
| <0.1% | 13.9 KiB | `Main.CAF`                      | `<unknown>`        |

###### `Main.main` (`Profile.hs:146:1`)

|     % |     Size | Callee                             | Location                          |
| ----: | -------: | ---------------------------------- | --------------------------------- |
| 93.2% | 9.38 GiB | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |
|  5.1% |  526 MiB | `Main.keywords`                    | `Profile.hs:136:1`                |
|  1.0% |  103 MiB | `Main.roundTrip`                   | `Profile.hs:139:1`                |
|  0.7% | 67.3 MiB | `Main.summarize`                   | `Profile.hs:118:1`                |
| <0.1% |  194 KiB | `Main.pad`                         | `Profile.hs:142:1`                |

###### `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)

|     % |     Size | Callee                                            | Location                                          |
| ----: | -------: | ------------------------------------------------- | ------------------------------------------------- |
| 72.3% | 6.82 GiB | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| 27.7% | 2.61 GiB | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
| <0.1% |     32 B | `Data.Aeson.Types.FromJSON.ifromJSON`             | `src/Data/Aeson/Types/FromJSON.hs:839:1`          |

###### `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)

|     % |     Size | Callee                                        | Location                                   |
| ----: | -------: | --------------------------------------------- | ------------------------------------------ |
|  7.8% |  547 MiB | `Data.Aeson.Internal.Text.unsafeDecodeASCII`  | `src/Data/Aeson/Internal/Text.hs:29:1`     |
|  2.6% |  183 MiB | `Data.Integer.Conversion.byteStringToInteger` | `src/Data/Integer/Conversion.hs:104:1`     |
|  1.4% | 96.2 MiB | `Data.Aeson.Internal.Unescape.unescapeText`   | `src/Data/Aeson/Internal/Unescape.hs:34:1` |
| <0.1% | 46.9 KiB | `Data.Aeson.Decoding.Internal.negateNumber`   | `src/Data/Aeson/Decoding/Internal.hs:12:1` |

###### `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)

|     % |     Size | Callee                                | Location                                 |
| ----: | -------: | ------------------------------------- | ---------------------------------------- |
| 58.9% | 1.54 GiB | `Data.Aeson.KeyMap.fromList`          | `src/Data/Aeson/KeyMap.hs:247:1`         |
|  9.0% |  242 MiB | `Data.Aeson.Types.FromJSON.ifromJSON` | `src/Data/Aeson/Types/FromJSON.hs:839:1` |

###### `Main.keywords` (`Profile.hs:136:1`)

|     % |     Size | Callee       | Location           |
| ----: | -------: | ------------ | ------------------ |
| 12.7% | 66.6 MiB | `Main.tally` | `Profile.hs:112:1` |

###### `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`)

|     % |     Size | Callee           | Location          |
| ----: | -------: | ---------------- | ----------------- |
| 93.7% |  227 MiB | `Main.parseJSON` | `Profile.hs:48:3` |
|  6.3% | 15.2 MiB | `Main.parseJSON` | `Profile.hs:96:3` |

###### `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`)

|     % |     Size | Callee                          | Location                                 |
| ----: | -------: | ------------------------------- | ---------------------------------------- |
| 87.8% |  212 MiB | `Data.Aeson.Types.FromJSON..:`  | `src/Data/Aeson/Types/FromJSON.hs:849:1` |
|  3.0% | 7.25 MiB | `Data.Aeson.Types.FromJSON..:?` | `src/Data/Aeson/Types/FromJSON.hs:859:1` |
| <0.1% | 9.73 KiB | `Data.Aeson.Key.fromString`     | `src/Data/Aeson/Key.hs:48:1`             |

###### `Main.parseJSON` (`Profile.hs:48:3`)

|      % |    Size | Callee                                 | Location                                 |
| -----: | ------: | -------------------------------------- | ---------------------------------------- |
| 100.0% | 227 MiB | `Data.Aeson.Types.FromJSON.withObject` | `src/Data/Aeson/Types/FromJSON.hs:720:1` |

###### `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`)

|     % |    Size | Callee                                         | Location                                 |
| ----: | ------: | ---------------------------------------------- | ---------------------------------------- |
| 91.0% | 193 MiB | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

###### `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`)

|     % |     Size | Callee                             | Location                                 |
| ----: | -------: | ---------------------------------- | ---------------------------------------- |
| 41.3% | 79.8 MiB | `Data.Aeson.Types.Internal.<?>`    | `src/Data/Aeson/Types/Internal.hs:659:1` |
| 12.9% | 24.9 MiB | `Data.Scientific.toBoundedInteger` | `src/Data/Scientific.hs:772:1`           |
|  5.9% | 11.4 MiB | `Main.parseJSONList`               | `Profile.hs:71:10`                       |
|  4.6% | 8.84 MiB | `Data.Aeson.KeyMap.lookup`         | `src/Data/Aeson/KeyMap.hs:178:1`         |
|  4.5% | 8.79 MiB | `Main.parseJSONList`               | `Profile.hs:50:10`                       |

###### `Main.roundTrip` (`Profile.hs:139:1`)

|     % |     Size | Callee                             | Location                          |
| ----: | -------: | ---------------------------------- | --------------------------------- |
| 50.8% | 52.2 MiB | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |
| 49.1% | 50.5 MiB | `Data.Aeson.encode`                | `src/Data/Aeson.hs:187:1`         |

###### `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`)

|     % |     Size | Callee                                     | Location                                 |
| ----: | -------: | ------------------------------------------ | ---------------------------------------- |
| 24.4% | 19.5 MiB | `Data.Aeson.Types.Internal.prependFailure` | `src/Data/Aeson/Types/Internal.hs:681:1` |
| 24.0% | 19.1 MiB | `Data.Aeson.Types.FromJSON.withText`       | `src/Data/Aeson/Types/FromJSON.hs:731:1` |
|  8.0% | 6.35 MiB | `Main.parseJSONList`                       | `Profile.hs:71:10`                       |
|  6.2% | 4.96 MiB | `Data.Aeson.Types.FromJSON..:?`            | `src/Data/Aeson/Types/FromJSON.hs:859:1` |
|  0.1% | 78.1 KiB | `Main.parseJSONList`                       | `Profile.hs:108:10`                      |

###### `Main.summarize` (`Profile.hs:118:1`)

|     % |     Size | Callee       | Location           |
| ----: | -------: | ------------ | ------------------ |
| 27.3% | 18.4 MiB | `Main.top`   | `Profile.hs:115:1` |
| 22.5% | 15.2 MiB | `Main.tally` | `Profile.hs:112:1` |

###### `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`)

|     % |     Size | Callee            | Location           |
| ----: | -------: | ----------------- | ------------------ |
| 94.7% | 47.8 MiB | `Main.toEncoding` | `Profile.hs:83:10` |

###### `Main.toEncoding` (`Profile.hs:83:10`)

|     % |     Size | Callee                               | Location                                    |
| ----: | -------: | ------------------------------------ | ------------------------------------------- |
| 84.3% | 40.3 MiB | `Data.Aeson.Encoding.Internal.value` | `src/Data/Aeson/Encoding/Internal.hs:441:1` |
| 15.7% | 7.51 MiB | `Main.toJSON`                        | `Profile.hs:84:3`                           |

### Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

Common call stack: `MAIN.MAIN`

|     % |     Size | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----: | -------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 59.3% | 5.99 GiB | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 15.2% | 1.54 GiB | `Data.Aeson.KeyMap.fromList` (`src/Data/Aeson/KeyMap.hs:247:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  8.3% |  852 MiB | `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  5.3% |  545 MiB | `Data.Aeson.Internal.Text.unsafeDecodeASCII` (`src/Data/Aeson/Internal/Text.hs:29:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  4.4% |  459 MiB | `Main.keywords` (`Profile.hs:136:1`) ← `Main.main` (146:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.8% |  182 MiB | `Data.Integer.Conversion.byteStringToInteger` (`src/Data/Integer/Conversion.hs:104:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.9% | 95.9 MiB | `Data.Aeson.Internal.Unescape.unescapeText` (`src/Data/Aeson/Internal/Unescape.hs:34:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.6% | 66.6 MiB | `Main.tally` (`Profile.hs:112:1`) ← `Main.keywords` (136:1) ← `Main.main` (146:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.5% | 46.9 MiB | `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                               |
|  0.3% | 33.8 MiB | `Main.summarize` (`Profile.hs:118:1`) ← `Main.main` (146:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.3% | 28.7 MiB | `PROFILING.OVERHEAD_of`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.3% | 28.2 MiB | `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                  |
|  0.2% | 24.5 MiB | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.roundTrip` (`Profile.hs:139:1`) ← `Main.main` (146:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.2% | 21.2 MiB | `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.2% | 18.4 MiB | `Main.top` (`Profile.hs:115:1`) ← `Main.summarize` (118:1) ← `Main.main` (146:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.2% | 18.1 MiB | `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                                        |
|  0.1% | 15.2 MiB | `Main.tally` (`Profile.hs:112:1`) ← `Main.summarize` (118:1) ← `Main.main` (146:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.1% | 11.6 MiB | `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                         |
|  0.1% | 10.7 MiB | `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`) ← `Main.parseJSONList` (`Profile.hs:71:10`) ← `Data.Aeson.Types.FromJSON.withText` (`src/Data/Aeson/Types/FromJSON.hs:731:1`) ← `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`) |
|  0.1% | 9.57 MiB | `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`) ← `Main.parseJSONList` (`Profile.hs:71:10`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                |

## Entries

### Hottest functions

#### Self entries

Functions ranked by entries recorded directly in the function body, excluding callees.

##### Categories

###### Ours

|     % |   Entries | Function                                       | Location                                          |
| ----: | --------: | ---------------------------------------------- | ------------------------------------------------- |
| 46.7% | 8,688,500 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`   | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|  5.7% | 1,062,500 | `Data.Vector.Fusion.Util.unId`                 | `src/Data/Vector/Fusion/Util.hs:25:21`            |
|  4.5% |   842,325 | `Data.Primitive.Array.marray#`                 | `Data/Primitive/Array.hs:109:5`                   |
|  4.5% |   838,500 | `Data.Integer.Conversion.byteStringToInteger`  | `src/Data/Integer/Conversion.hs:104:1`            |
|  4.0% |   741,500 | `Data.Aeson.Types.Internal.<?>`                | `src/Data/Aeson/Types/Internal.hs:659:1`          |
|  3.6% |   673,000 | `Data.Aeson.KeyMap.lookup`                     | `src/Data/Aeson/KeyMap.hs:178:1`                  |
|  3.3% |   623,000 | `Data.Aeson.Types.FromJSON..:`                 | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
|  3.3% |   623,000 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
|  2.8% |   529,000 | `Data.Vector.Fusion.Bundle.Monadic.sChunks`    | `src/Data/Vector/Fusion/Bundle/Monadic.hs:122:30` |
|  2.8% |   529,000 | `Data.Vector.Fusion.Bundle.Monadic.sSize`      | `src/Data/Vector/Fusion/Bundle/Monadic.hs:124:30` |
|  2.8% |   529,000 | `Data.Vector.Fusion.Bundle.Size.upperBound`    | `src/Data/Vector/Fusion/Bundle/Size.hs:129:1`     |
|  1.5% |   278,001 | `Data.Primitive.Array.array#`                  | `Data/Primitive/Array.hs:66:5`                    |
|  1.2% |   230,000 | `Data.Scientific.coefficient`                  | `src/Data/Scientific.hs:140:7`                    |
|  1.2% |   215,000 | `Data.Aeson.Types.Internal.modifyFailure`      | `src/Data/Aeson/Types/Internal.hs:671:1`          |
|  1.2% |   215,000 | `Data.Scientific.toBoundedInteger`             | `src/Data/Scientific.hs:772:1`                    |
|  1.1% |   213,000 | `Data.Aeson.Types.FromJSON.withObject`         | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
|  1.1% |   212,000 | `Data.Aeson.Types.FromJSON.withText`           | `src/Data/Aeson/Types/FromJSON.hs:731:1`          |
|  0.9% |   166,500 | `Data.Scientific.base10Exponent`               | `src/Data/Scientific.hs:165:7`                    |
|  0.8% |   151,500 | `Utils.magnitude`                              | `src/Utils.hs:78:1`                               |
|  0.8% |   151,500 | `Data.Scientific.normalize`                    | `src/Data/Scientific.hs:1102:1`                   |

##### Callers

Callers ranked by contribution to each function's self entries. Inlining can make caller attribution imprecise.

###### `Data.Aeson.Internal.Text.unsafeDecodeASCII` (`src/Data/Aeson/Internal/Text.hs:29:1`)

|      % |   Entries | Caller                                            | Location                                          |
| -----: | --------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 8,688,500 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

###### `Data.Vector.Fusion.Util.unId` (`src/Data/Vector/Fusion/Util.hs:25:21`)

|     % | Entries | Caller                                         | Location                                     |
| ----: | ------: | ---------------------------------------------- | -------------------------------------------- |
| 77.7% | 825,500 | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |
| 20.2% | 214,500 | `Data.Aeson.Types.FromJSON.withArray`          | `src/Data/Aeson/Types/FromJSON.hs:742:1`     |
|  1.6% |  16,500 | `Main.toJSON`                                  | `Profile.hs:84:3`                            |
|  0.6% |   6,000 | `Data.Aeson.Encoding.Builder.array`            | `src/Data/Aeson/Encoding/Builder.hs:86:1`    |

###### `Data.Primitive.Array.marray#` (`Data/Primitive/Array.hs:109:5`)

|     % | Entries | Caller                                         | Location                                     |
| ----: | ------: | ---------------------------------------------- | -------------------------------------------- |
| 98.0% | 825,500 | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |
|  2.0% |  16,500 | `Main.toJSON`                                  | `Profile.hs:84:3`                            |
| <0.1% |     325 | `Utils.CAF`                                    | `<unknown>`                                  |

###### `Data.Integer.Conversion.byteStringToInteger` (`src/Data/Integer/Conversion.hs:104:1`)

|      % | Entries | Caller                                            | Location                                          |
| -----: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 838,500 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

###### `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`)

|     % | Entries | Caller                                              | Location                                 |
| ----: | ------: | --------------------------------------------------- | ---------------------------------------- |
| 78.2% | 579,500 | `Data.Aeson.Types.FromJSON.explicitParseField`      | `src/Data/Aeson/Types/FromJSON.hs:917:1` |
| 15.1% | 112,000 | `Data.Aeson.Types.FromJSON.parseIndexedJSON`        | `src/Data/Aeson/Types/FromJSON.hs:171:1` |
|  6.7% |  50,000 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1` |

###### `Data.Aeson.KeyMap.lookup` (`src/Data/Aeson/KeyMap.hs:178:1`)

|     % | Entries | Caller                                              | Location                                 |
| ----: | ------: | --------------------------------------------------- | ---------------------------------------- |
| 92.6% | 623,000 | `Data.Aeson.Types.FromJSON.explicitParseField`      | `src/Data/Aeson/Types/FromJSON.hs:917:1` |
|  7.4% |  50,000 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1` |

###### `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`)

|      % | Entries | Caller                                 | Location                                 |
| -----: | ------: | -------------------------------------- | ---------------------------------------- |
| 100.0% | 623,000 | `Data.Aeson.Types.FromJSON.withObject` | `src/Data/Aeson/Types/FromJSON.hs:720:1` |

###### `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`)

|      % | Entries | Caller                         | Location                                 |
| -----: | ------: | ------------------------------ | ---------------------------------------- |
| 100.0% | 623,000 | `Data.Aeson.Types.FromJSON..:` | `src/Data/Aeson/Types/FromJSON.hs:849:1` |

###### `Data.Vector.Fusion.Bundle.Monadic.sChunks` (`src/Data/Vector/Fusion/Bundle/Monadic.hs:122:30`)

|     % | Entries | Caller                                         | Location                                     |
| ----: | ------: | ---------------------------------------------- | -------------------------------------------- |
| 99.6% | 527,000 | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |
|  0.4% |   2,000 | `Main.toJSON`                                  | `Profile.hs:84:3`                            |

###### `Data.Vector.Fusion.Bundle.Monadic.sSize` (`src/Data/Vector/Fusion/Bundle/Monadic.hs:124:30`)

|     % | Entries | Caller                                         | Location                                     |
| ----: | ------: | ---------------------------------------------- | -------------------------------------------- |
| 99.6% | 527,000 | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |
|  0.4% |   2,000 | `Main.toJSON`                                  | `Profile.hs:84:3`                            |

###### `Data.Vector.Fusion.Bundle.Size.upperBound` (`src/Data/Vector/Fusion/Bundle/Size.hs:129:1`)

|     % | Entries | Caller                                         | Location                                     |
| ----: | ------: | ---------------------------------------------- | -------------------------------------------- |
| 99.6% | 527,000 | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |
|  0.4% |   2,000 | `Main.toJSON`                                  | `Profile.hs:84:3`                            |

###### `Data.Primitive.Array.array#` (`Data/Primitive/Array.hs:66:5`)

|     % | Entries | Caller                                | Location                                  |
| ----: | ------: | ------------------------------------- | ----------------------------------------- |
| 54.5% | 151,500 | `Utils.magnitude`                     | `src/Utils.hs:78:1`                       |
| 40.3% | 112,000 | `Data.Aeson.Types.FromJSON.withArray` | `src/Data/Aeson/Types/FromJSON.hs:742:1`  |
|  5.2% |  14,500 | `Data.Aeson.Encoding.Builder.array`   | `src/Data/Aeson/Encoding/Builder.hs:86:1` |
| <0.1% |       1 | `Utils.CAF`                           | `<unknown>`                               |

###### `Data.Scientific.coefficient` (`src/Data/Scientific.hs:140:7`)

|     % | Entries | Caller                                   | Location                                   |
| ----: | ------: | ---------------------------------------- | ------------------------------------------ |
| 93.5% | 215,000 | `Data.Scientific.toBoundedInteger`       | `src/Data/Scientific.hs:772:1`             |
|  6.5% |  15,000 | `Data.Aeson.Encoding.Builder.scientific` | `src/Data/Aeson/Encoding/Builder.hs:144:1` |

###### `Data.Aeson.Types.Internal.modifyFailure` (`src/Data/Aeson/Types/Internal.hs:671:1`)

|      % | Entries | Caller                                     | Location                                 |
| -----: | ------: | ------------------------------------------ | ---------------------------------------- |
| 100.0% | 215,000 | `Data.Aeson.Types.Internal.prependFailure` | `src/Data/Aeson/Types/Internal.hs:681:1` |

###### `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`)

|      % | Entries | Caller                                         | Location                                 |
| -----: | ------: | ---------------------------------------------- | ---------------------------------------- |
| 100.0% | 215,000 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

###### `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`)

|     % | Entries | Caller           | Location          |
| ----: | ------: | ---------------- | ----------------- |
| 93.0% | 198,000 | `Main.parseJSON` | `Profile.hs:48:3` |
|  7.0% |  15,000 | `Main.parseJSON` | `Profile.hs:96:3` |

###### `Data.Aeson.Types.FromJSON.withText` (`src/Data/Aeson/Types/FromJSON.hs:731:1`)

|     % | Entries | Caller                                              | Location                                 |
| ----: | ------: | --------------------------------------------------- | ---------------------------------------- |
| 76.4% | 162,000 | `Data.Aeson.Types.FromJSON.explicitParseField`      | `src/Data/Aeson/Types/FromJSON.hs:917:1` |
| 23.6% |  50,000 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1` |

###### `Data.Scientific.base10Exponent` (`src/Data/Scientific.hs:165:7`)

|     % | Entries | Caller                                   | Location                                   |
| ----: | ------: | ---------------------------------------- | ------------------------------------------ |
| 91.0% | 151,500 | `Data.Scientific.toBoundedInteger`       | `src/Data/Scientific.hs:772:1`             |
|  9.0% |  15,000 | `Data.Aeson.Encoding.Builder.scientific` | `src/Data/Aeson/Encoding/Builder.hs:144:1` |

###### `Utils.magnitude` (`src/Utils.hs:78:1`)

|      % | Entries | Caller                             | Location                       |
| -----: | ------: | ---------------------------------- | ------------------------------ |
| 100.0% | 151,500 | `Data.Scientific.toBoundedInteger` | `src/Data/Scientific.hs:772:1` |

###### `Data.Scientific.normalize` (`src/Data/Scientific.hs:1102:1`)

|      % | Entries | Caller                             | Location                       |
| -----: | ------: | ---------------------------------- | ------------------------------ |
| 100.0% | 151,500 | `Data.Scientific.toBoundedInteger` | `src/Data/Scientific.hs:772:1` |

#### Total entries

Functions ranked by total entries recorded in the function and all its callees.

|      % |    Entries | Function                                          | Location                                          |
| -----: | ---------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 18,616,855 | `MAIN.MAIN`                                       | `<unknown>`                                       |
| 100.0% | 18,616,501 | `Main.main`                                       | `Profile.hs:146:1`                                |
|  95.6% | 17,790,500 | `Data.Aeson.Decoding.eitherDecode`                | `src/Data/Aeson/Decoding.hs:79:1`                 |
|  51.2% |  9,529,500 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
|  46.7% |  8,688,500 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|  44.4% |  8,259,000 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
|  27.0% |  5,026,000 | `Data.Aeson.Types.FromJSON.ifromJSON`             | `src/Data/Aeson/Types/FromJSON.hs:839:1`          |
|  27.0% |  5,025,000 | `Data.Aeson.Types.FromJSON.withObject`            | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
|  25.3% |  4,702,501 | `Main.parseJSON`                                  | `Profile.hs:48:3`                                 |
|  24.5% |  4,562,000 | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
|  21.2% |  3,939,000 | `Data.Aeson.Types.FromJSON.explicitParseField`    | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
|   5.7% |  1,062,500 | `Data.Vector.Fusion.Util.unId`                    | `src/Data/Vector/Fusion/Util.hs:25:21`            |
|   5.6% |  1,036,000 | `Data.Scientific.toBoundedInteger`                | `src/Data/Scientific.hs:772:1`                    |
|   4.5% |    842,325 | `Data.Primitive.Array.marray#`                    | `Data/Primitive/Array.hs:109:5`                   |
|   4.5% |    838,500 | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|   4.2% |    789,000 | `Data.Aeson.Types.Internal.<?>`                   | `src/Data/Aeson/Types/Internal.hs:659:1`          |
|   3.8% |    700,500 | `Data.Aeson.Types.FromJSON.withArray`             | `src/Data/Aeson/Types/FromJSON.hs:742:1`          |
|   3.6% |    673,000 | `Data.Aeson.KeyMap.lookup`                        | `src/Data/Aeson/KeyMap.hs:178:1`                  |
|   3.5% |    643,502 | `Main.roundTrip`                                  | `Profile.hs:139:1`                                |
|   3.0% |    552,500 | `Main.summarize`                                  | `Profile.hs:118:1`                                |

##### Categories

###### Ours

|      % |    Entries | Function                                          | Location                                          |
| -----: | ---------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 18,616,501 | `Main.main`                                       | `Profile.hs:146:1`                                |
|  95.6% | 17,790,500 | `Data.Aeson.Decoding.eitherDecode`                | `src/Data/Aeson/Decoding.hs:79:1`                 |
|  51.2% |  9,529,500 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
|  46.7% |  8,688,500 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|  44.4% |  8,259,000 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
|  27.0% |  5,026,000 | `Data.Aeson.Types.FromJSON.ifromJSON`             | `src/Data/Aeson/Types/FromJSON.hs:839:1`          |
|  27.0% |  5,025,000 | `Data.Aeson.Types.FromJSON.withObject`            | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
|  25.3% |  4,702,501 | `Main.parseJSON`                                  | `Profile.hs:48:3`                                 |
|  24.5% |  4,562,000 | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
|  21.2% |  3,939,000 | `Data.Aeson.Types.FromJSON.explicitParseField`    | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
|   5.7% |  1,062,500 | `Data.Vector.Fusion.Util.unId`                    | `src/Data/Vector/Fusion/Util.hs:25:21`            |
|   5.6% |  1,036,000 | `Data.Scientific.toBoundedInteger`                | `src/Data/Scientific.hs:772:1`                    |
|   4.5% |    842,325 | `Data.Primitive.Array.marray#`                    | `Data/Primitive/Array.hs:109:5`                   |
|   4.5% |    838,500 | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|   4.2% |    789,000 | `Data.Aeson.Types.Internal.<?>`                   | `src/Data/Aeson/Types/Internal.hs:659:1`          |
|   3.8% |    700,500 | `Data.Aeson.Types.FromJSON.withArray`             | `src/Data/Aeson/Types/FromJSON.hs:742:1`          |
|   3.6% |    673,000 | `Data.Aeson.KeyMap.lookup`                        | `src/Data/Aeson/KeyMap.hs:178:1`                  |
|   3.5% |    643,502 | `Main.roundTrip`                                  | `Profile.hs:139:1`                                |
|   3.0% |    552,500 | `Main.summarize`                                  | `Profile.hs:118:1`                                |
|   2.8% |    529,000 | `Data.Vector.Fusion.Bundle.Monadic.sChunks`       | `src/Data/Vector/Fusion/Bundle/Monadic.hs:122:30` |

##### Callees

Callees ranked by contribution to each function's total entries. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

###### `MAIN.MAIN` (`<unknown>`)

|      % |    Entries | Callee                  | Location           |
| -----: | ---------: | ----------------------- | ------------------ |
| 100.0% | 18,616,500 | `Main.main`             | `Profile.hs:146:1` |
|  <0.1% |        327 | `Utils.CAF`             | `<unknown>`        |
|  <0.1% |         16 | `Main.CAF`              | `<unknown>`        |
|  <0.1% |          3 | `Data.Aeson.Key.CAF`    | `<unknown>`        |
|  <0.1% |          2 | `Data.Aeson.KeyMap.CAF` | `<unknown>`        |

###### `Main.main` (`Profile.hs:146:1`)

|     % |    Entries | Callee                             | Location                          |
| ----: | ---------: | ---------------------------------- | --------------------------------- |
| 93.3% | 17,368,500 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |
|  3.5% |    643,500 | `Main.roundTrip`                   | `Profile.hs:139:1`                |
|  3.0% |    552,500 | `Main.summarize`                   | `Profile.hs:118:1`                |
|  0.3% |     50,000 | `Main.keywords`                    | `Profile.hs:136:1`                |
| <0.1% |        500 | `Main.pad`                         | `Profile.hs:142:1`                |

###### `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)

|     % |   Entries | Callee                                            | Location                                          |
| ----: | --------: | ------------------------------------------------- | ------------------------------------------------- |
| 53.6% | 9,529,500 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| 46.4% | 8,259,000 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
| <0.1% |     1,000 | `Data.Aeson.Decoding.Conversion.unResult`         | `src/Data/Aeson/Decoding/Conversion.hs:97:7`      |

###### `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)

|     % |   Entries | Callee                                        | Location                                   |
| ----: | --------: | --------------------------------------------- | ------------------------------------------ |
| 91.2% | 8,688,500 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`  | `src/Data/Aeson/Internal/Text.hs:29:1`     |
|  8.8% |   838,500 | `Data.Integer.Conversion.byteStringToInteger` | `src/Data/Integer/Conversion.hs:104:1`     |
| <0.1% |     1,500 | `Data.Aeson.Decoding.Internal.negateNumber`   | `src/Data/Aeson/Decoding/Internal.hs:12:1` |

###### `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)

|     % |   Entries | Callee                                      | Location                                          |
| ----: | --------: | ------------------------------------------- | ------------------------------------------------- |
| 60.9% | 5,026,000 | `Data.Aeson.Types.FromJSON.ifromJSON`       | `src/Data/Aeson/Types/FromJSON.hs:839:1`          |
| 10.0% |   825,500 | `Data.Primitive.Array.marray#`              | `Data/Primitive/Array.hs:109:5`                   |
| 10.0% |   825,500 | `Data.Vector.Fusion.Util.unId`              | `src/Data/Vector/Fusion/Util.hs:25:21`            |
|  6.4% |   527,000 | `Data.Vector.Fusion.Bundle.Monadic.sChunks` | `src/Data/Vector/Fusion/Bundle/Monadic.hs:122:30` |
|  6.4% |   527,000 | `Data.Vector.Fusion.Bundle.Monadic.sSize`   | `src/Data/Vector/Fusion/Bundle/Monadic.hs:124:30` |

###### `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`)

|     % |   Entries | Callee           | Location          |
| ----: | --------: | ---------------- | ----------------- |
| 93.6% | 4,702,500 | `Main.parseJSON` | `Profile.hs:48:3` |
|  6.4% |   322,500 | `Main.parseJSON` | `Profile.hs:96:3` |

###### `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`)

|     % |   Entries | Callee                          | Location                                 |
| ----: | --------: | ------------------------------- | ---------------------------------------- |
| 90.8% | 4,562,000 | `Data.Aeson.Types.FromJSON..:`  | `src/Data/Aeson/Types/FromJSON.hs:849:1` |
|  5.0% |   250,000 | `Data.Aeson.Types.FromJSON..:?` | `src/Data/Aeson/Types/FromJSON.hs:859:1` |

###### `Main.parseJSON` (`Profile.hs:48:3`)

|      % |   Entries | Callee                                 | Location                                 |
| -----: | --------: | -------------------------------------- | ---------------------------------------- |
| 100.0% | 4,702,500 | `Data.Aeson.Types.FromJSON.withObject` | `src/Data/Aeson/Types/FromJSON.hs:720:1` |

###### `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`)

|     % |   Entries | Callee                                         | Location                                 |
| ----: | --------: | ---------------------------------------------- | ---------------------------------------- |
| 86.3% | 3,939,000 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

###### `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`)

|     % |   Entries | Callee                                     | Location                                 |
| ----: | --------: | ------------------------------------------ | ---------------------------------------- |
| 26.3% | 1,036,000 | `Data.Scientific.toBoundedInteger`         | `src/Data/Scientific.hs:772:1`           |
| 15.9% |   627,000 | `Data.Aeson.Types.Internal.<?>`            | `src/Data/Aeson/Types/Internal.hs:659:1` |
| 15.8% |   623,000 | `Data.Aeson.KeyMap.lookup`                 | `src/Data/Aeson/KeyMap.hs:178:1`         |
|  9.9% |   390,000 | `Main.parseJSONList`                       | `Profile.hs:71:10`                       |
|  5.5% |   215,000 | `Data.Aeson.Types.Internal.prependFailure` | `src/Data/Aeson/Types/Internal.hs:681:1` |

###### `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`)

|     % | Entries | Callee                           | Location                        |
| ----: | ------: | -------------------------------- | ------------------------------- |
| 29.2% | 303,000 | `Utils.magnitude`                | `src/Utils.hs:78:1`             |
| 20.8% | 215,000 | `Data.Scientific.coefficient`    | `src/Data/Scientific.hs:140:7`  |
| 14.6% | 151,500 | `Data.Scientific.base10Exponent` | `src/Data/Scientific.hs:165:7`  |
| 14.6% | 151,500 | `Data.Scientific.normalize`      | `src/Data/Scientific.hs:1102:1` |

###### `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`)

|    % | Entries | Callee                               | Location                                 |
| ---: | ------: | ------------------------------------ | ---------------------------------------- |
| 6.0% |  47,500 | `Data.Aeson.Types.FromJSON.withText` | `src/Data/Aeson/Types/FromJSON.hs:731:1` |

###### `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`)

|     % | Entries | Callee                                       | Location                                 |
| ----: | ------: | -------------------------------------------- | ---------------------------------------- |
| 32.0% | 224,000 | `Data.Aeson.Types.FromJSON.parseIndexedJSON` | `src/Data/Aeson/Types/FromJSON.hs:171:1` |
| 30.6% | 214,500 | `Data.Vector.Fusion.Util.unId`               | `src/Data/Vector/Fusion/Util.hs:25:21`   |
| 16.0% | 112,000 | `Data.Primitive.Array.array#`                | `Data/Primitive/Array.hs:66:5`           |
|  6.8% |  47,500 | `Main.tagText`                               | `Profile.hs:69:20`                       |

###### `Main.roundTrip` (`Profile.hs:139:1`)

|     % | Entries | Callee                             | Location                          |
| ----: | ------: | ---------------------------------- | --------------------------------- |
| 65.6% | 422,000 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |
| 34.4% | 221,501 | `Data.Aeson.encode`                | `src/Data/Aeson.hs:187:1`         |

###### `Main.summarize` (`Profile.hs:118:1`)

|     % | Entries | Callee                 | Location          |
| ----: | ------: | ---------------------- | ----------------- |
| 18.1% | 100,000 | `Main.statusEntities`  | `Profile.hs:33:5` |
| 18.1% | 100,000 | `Main.statusUser`      | `Profile.hs:32:5` |
|  9.0% |  50,000 | `Main.entityHashtags`  | `Profile.hs:43:5` |
|  9.0% |  50,000 | `Main.entityMentions`  | `Profile.hs:44:5` |
|  9.0% |  50,000 | `Main.statusFavorites` | `Profile.hs:31:5` |

### Hottest call stacks

Call stacks ranked by entries recorded in their leaf frame.

Common call stack: `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`) ← `MAIN.MAIN`

|     % |   Entries | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 46.4% | 8,645,500 | `Data.Aeson.Internal.Text.unsafeDecodeASCII` (`src/Data/Aeson/Internal/Text.hs:29:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  4.4% |   823,500 | `Data.Integer.Conversion.byteStringToInteger` (`src/Data/Integer/Conversion.hs:104:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  4.3% |   809,000 | `Data.Primitive.Array.marray#` (`Data/Primitive/Array.hs:109:5`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  4.3% |   809,000 | `Data.Vector.Fusion.Util.unId` (`src/Data/Vector/Fusion/Util.hs:25:21`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  3.2% |   591,500 | `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                                                                                                                                                                                                   |
|  3.2% |   591,500 | `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                                                                                                                                          |
|  3.2% |   591,500 | `Data.Aeson.KeyMap.lookup` (`src/Data/Aeson/KeyMap.hs:178:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                                                                          |
|  2.9% |   548,000 | `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                                                             |
|  2.8% |   525,000 | `Data.Vector.Fusion.Bundle.Monadic.sChunks` (`src/Data/Vector/Fusion/Bundle/Monadic.hs:122:30`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  2.8% |   525,000 | `Data.Vector.Fusion.Bundle.Monadic.sSize` (`src/Data/Vector/Fusion/Bundle/Monadic.hs:124:30`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  2.8% |   525,000 | `Data.Vector.Fusion.Bundle.Size.upperBound` (`src/Data/Vector/Fusion/Bundle/Size.hs:129:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.1% |   200,000 | `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                                                                    |
|  1.1% |   200,000 | `Data.Scientific.coefficient` (`src/Data/Scientific.hs:140:7`) ← `Data.Scientific.toBoundedInteger` (772:1) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                            |
|  1.1% |   200,000 | `Data.Aeson.Types.Internal.modifyFailure` (`src/Data/Aeson/Types/Internal.hs:671:1`) ← `Data.Aeson.Types.Internal.prependFailure` (681:1) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                              |
|  1.1% |   198,000 | `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                                                                                                                                                                                                                                            |
|  0.8% |   147,500 | `Data.Aeson.Types.FromJSON.withText` (`src/Data/Aeson/Types/FromJSON.hs:731:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (917:1) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                                                                                           |
|  0.8% |   147,500 | `Data.Vector.Fusion.Util.unId` (`src/Data/Vector/Fusion/Util.hs:25:21`) ← `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`) ← `Main.parseJSONList` (`Profile.hs:71:10`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) |
|  0.7% |   136,500 | `Data.Scientific.base10Exponent` (`src/Data/Scientific.hs:165:7`) ← `Data.Scientific.toBoundedInteger` (772:1) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                         |
|  0.7% |   136,500 | `Utils.magnitude` (`src/Utils.hs:78:1`) ← `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                          |
|  0.7% |   136,500 | `Data.Primitive.Array.array#` (`Data/Primitive/Array.hs:66:5`) ← `Utils.magnitude` (`src/Utils.hs:78:1`) ← `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                         |
