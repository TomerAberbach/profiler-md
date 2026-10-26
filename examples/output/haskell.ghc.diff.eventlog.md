# Wall time profile diff

Took 3.59s → 3.51s (-77.00ms, -2.1%) over 3,592 → 3,515 samples (1.0ms per sample).

| Category          | Change |    Delta |             % |            Time |       Samples |
| ----------------- | -----: | -------: | ------------: | --------------: | ------------: |
| Ours              |  -1.6% | -40.00ms | 69.7% → 70.1% |   2.50s → 2.46s | 2,503 → 2,463 |
| Garbage collector |  -4.0% | -43.00ms | 29.9% → 29.4% |   1.07s → 1.03s | 1,075 → 1,032 |
| Native            | +42.9% |  +6.00ms |   0.4% → 0.6% | 14.0ms → 20.0ms |       14 → 20 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in wall time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |    Delta |             % |              Time |       Samples | Function                                          | Location                                          |
| ------: | -------: | ------------: | ----------------: | ------------: | ------------------------------------------------- | ------------------------------------------------- |
|  +54.8% | +34.00ms |   1.7% → 2.7% |   62.0ms → 96.0ms |       62 → 96 | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|  +34.5% | +19.00ms |   1.5% → 2.1% |   55.0ms → 74.0ms |       55 → 74 | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
|  +10.0% | +15.00ms |   4.2% → 4.7% | 150.0ms → 165.0ms |     150 → 165 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
| +125.0% | +10.00ms |   0.2% → 0.5% |    8.0ms → 18.0ms |        8 → 18 | `PROFILING.OVERHEAD_of`                           | `<unknown>`                                       |
|  +36.8% |  +7.00ms |   0.5% → 0.7% |   19.0ms → 26.0ms |       19 → 26 | `Main.tally`                                      | `Profile.hs:112:1`                                |
| +125.0% |  +5.00ms |   0.1% → 0.3% |     4.0ms → 9.0ms |         4 → 9 | `Data.Aeson.Encoding.Builder.array`               | `src/Data/Aeson/Encoding/Builder.hs:86:1`         |
|     new |  +3.00ms |   0.0% → 0.1% |       0ms → 3.0ms |         0 → 3 | `Data.Aeson.Types.Internal.prependFailure`        | `src/Data/Aeson/Types/Internal.hs:681:1`          |
|  +66.7% |  +2.00ms |          0.1% |     3.0ms → 5.0ms |         3 → 5 | `Data.Aeson.Types.FromJSON.withObject`            | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
|  +11.1% |  +2.00ms |   0.5% → 0.6% |   18.0ms → 20.0ms |       18 → 20 | `Data.Aeson.Types.FromJSON.withArray`             | `src/Data/Aeson/Types/FromJSON.hs:742:1`          |
|     new |  +2.00ms |   0.0% → 0.1% |       0ms → 2.0ms |         0 → 2 | `Data.Aeson.Types.FromJSON.parseIndexedJSON`      | `src/Data/Aeson/Types/FromJSON.hs:171:1`          |
|   +0.1% |  +1.00ms | 37.4% → 38.3% |             1.34s | 1,345 → 1,346 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `Main.parseJSON`                                  | `Profile.hs:51:3`                                 |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `Main.parseJSON`                                  | `Profile.hs:65:3`                                 |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `Data.Aeson.Encoding.Builder.encodeToBuilder`     | `src/Data/Aeson/Encoding/Builder.hs:68:1`         |
|  +50.0% |  +1.00ms |          0.1% |     2.0ms → 3.0ms |         2 → 3 | `Data.Aeson.Types.Internal.modifyFailure`         | `src/Data/Aeson/Types/Internal.hs:671:1`          |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `Data.Aeson.Key.toText`                           | `src/Data/Aeson/Key.hs:57:1`                      |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `Main.pad`                                        | `Profile.hs:142:1`                                |

##### Ours

|  Change |    Delta |             % |              Time |       Samples | Function                                          | Location                                          |
| ------: | -------: | ------------: | ----------------: | ------------: | ------------------------------------------------- | ------------------------------------------------- |
|  +54.8% | +34.00ms |   1.7% → 2.7% |   62.0ms → 96.0ms |       62 → 96 | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|  +34.5% | +19.00ms |   1.5% → 2.1% |   55.0ms → 74.0ms |       55 → 74 | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
|  +10.0% | +15.00ms |   4.2% → 4.7% | 150.0ms → 165.0ms |     150 → 165 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
|  +36.8% |  +7.00ms |   0.5% → 0.7% |   19.0ms → 26.0ms |       19 → 26 | `Main.tally`                                      | `Profile.hs:112:1`                                |
| +125.0% |  +5.00ms |   0.1% → 0.3% |     4.0ms → 9.0ms |         4 → 9 | `Data.Aeson.Encoding.Builder.array`               | `src/Data/Aeson/Encoding/Builder.hs:86:1`         |
|     new |  +3.00ms |   0.0% → 0.1% |       0ms → 3.0ms |         0 → 3 | `Data.Aeson.Types.Internal.prependFailure`        | `src/Data/Aeson/Types/Internal.hs:681:1`          |
|  +66.7% |  +2.00ms |          0.1% |     3.0ms → 5.0ms |         3 → 5 | `Data.Aeson.Types.FromJSON.withObject`            | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
|  +11.1% |  +2.00ms |   0.5% → 0.6% |   18.0ms → 20.0ms |       18 → 20 | `Data.Aeson.Types.FromJSON.withArray`             | `src/Data/Aeson/Types/FromJSON.hs:742:1`          |
|     new |  +2.00ms |   0.0% → 0.1% |       0ms → 2.0ms |         0 → 2 | `Data.Aeson.Types.FromJSON.parseIndexedJSON`      | `src/Data/Aeson/Types/FromJSON.hs:171:1`          |
|   +0.1% |  +1.00ms | 37.4% → 38.3% |             1.34s | 1,345 → 1,346 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `Main.parseJSON`                                  | `Profile.hs:51:3`                                 |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `Main.parseJSON`                                  | `Profile.hs:65:3`                                 |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `Data.Aeson.Encoding.Builder.encodeToBuilder`     | `src/Data/Aeson/Encoding/Builder.hs:68:1`         |
|  +50.0% |  +1.00ms |          0.1% |     2.0ms → 3.0ms |         2 → 3 | `Data.Aeson.Types.Internal.modifyFailure`         | `src/Data/Aeson/Types/Internal.hs:671:1`          |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `Data.Aeson.Key.toText`                           | `src/Data/Aeson/Key.hs:57:1`                      |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `Main.pad`                                        | `Profile.hs:142:1`                                |

#### Improvements

Functions with the largest decrease in wall time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |    Delta |             % |              Time |       Samples | Function                                       | Location                                   |
| ------: | -------: | ------------: | ----------------: | ------------: | ---------------------------------------------- | ------------------------------------------ |
|  -13.8% | -67.00ms | 13.5% → 11.9% | 484.0ms → 417.0ms |     484 → 417 | `Data.Aeson.KeyMap.fromList`                   | `src/Data/Aeson/KeyMap.hs:247:1`           |
|   -4.0% | -43.00ms | 29.9% → 29.4% |     1.07s → 1.03s | 1,075 → 1,032 | `GC.GC`                                        | `<unknown>`                                |
|  -20.2% | -23.00ms |   3.2% → 2.6% |  114.0ms → 91.0ms |      114 → 91 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`   | `src/Data/Aeson/Internal/Text.hs:29:1`     |
|   -6.3% |  -7.00ms |   3.1% → 3.0% | 111.0ms → 104.0ms |     111 → 104 | `Main.keywords`                                | `Profile.hs:136:1`                         |
|  -87.5% |  -7.00ms |  0.2% → <0.1% |     8.0ms → 1.0ms |         8 → 1 | `Data.Aeson.Encoding.Builder.object`           | `src/Data/Aeson/Encoding/Builder.hs:96:1`  |
|  -85.7% |  -6.00ms |  0.2% → <0.1% |     7.0ms → 1.0ms |         7 → 1 | `Data.Aeson.Types.FromJSON..:`                 | `src/Data/Aeson/Types/FromJSON.hs:849:1`   |
|  -19.2% |  -5.00ms |   0.7% → 0.6% |   26.0ms → 21.0ms |       26 → 21 | `Data.Aeson.KeyMap.lookup`                     | `src/Data/Aeson/KeyMap.hs:178:1`           |
|  -66.7% |  -4.00ms |   0.2% → 0.1% |     6.0ms → 2.0ms |         6 → 2 | `SYSTEM.SYSTEM`                                | `<unknown>`                                |
|  -37.5% |  -3.00ms |   0.2% → 0.1% |     8.0ms → 5.0ms |         8 → 5 | `Data.Scientific.toBoundedInteger`             | `src/Data/Scientific.hs:772:1`             |
|  -22.2% |  -2.00ms |   0.3% → 0.2% |     9.0ms → 7.0ms |         9 → 7 | `Data.Aeson.Types.FromJSON.withText`           | `src/Data/Aeson/Types/FromJSON.hs:731:1`   |
|  -18.2% |  -2.00ms |          0.3% |    11.0ms → 9.0ms |        11 → 9 | `Data.Aeson.Types.Internal.<?>`                | `src/Data/Aeson/Types/Internal.hs:659:1`   |
|  -28.6% |  -2.00ms |   0.2% → 0.1% |     7.0ms → 5.0ms |         7 → 5 | `Data.Aeson.Encoding.Builder.text`             | `src/Data/Aeson/Encoding/Builder.hs:109:1` |
|  -50.0% |  -2.00ms |          0.1% |     4.0ms → 2.0ms |         4 → 2 | `Data.Scientific.normalize`                    | `src/Data/Scientific.hs:1102:1`            |
|  -50.0% |  -1.00ms |  0.1% → <0.1% |     2.0ms → 1.0ms |         2 → 1 | `Main.main`                                    | `Profile.hs:146:1`                         |
| removed |  -1.00ms |  <0.1% → 0.0% |       1.0ms → 0ms |         1 → 0 | `Main.roundTrip`                               | `Profile.hs:139:1`                         |
| removed |  -1.00ms |  <0.1% → 0.0% |       1.0ms → 0ms |         1 → 0 | `Main.parseJSON`                               | `Profile.hs:109:3`                         |
| removed |  -1.00ms |  <0.1% → 0.0% |       1.0ms → 0ms |         1 → 0 | `Main.parseJSON`                               | `Profile.hs:61:3`                          |
|   -7.7% |  -1.00ms |   0.4% → 0.3% |   13.0ms → 12.0ms |       13 → 12 | `Main.summarize`                               | `Profile.hs:118:1`                         |
|   -6.3% |  -1.00ms |          0.4% |   16.0ms → 15.0ms |       16 → 15 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1`   |
|  -25.0% |  -1.00ms |          0.1% |     4.0ms → 3.0ms |         4 → 3 | `Utils.magnitude`                              | `src/Utils.hs:78:1`                        |

##### Ours

|  Change |    Delta |             % |              Time |   Samples | Function                                            | Location                                   |
| ------: | -------: | ------------: | ----------------: | --------: | --------------------------------------------------- | ------------------------------------------ |
|  -13.8% | -67.00ms | 13.5% → 11.9% | 484.0ms → 417.0ms | 484 → 417 | `Data.Aeson.KeyMap.fromList`                        | `src/Data/Aeson/KeyMap.hs:247:1`           |
|  -20.2% | -23.00ms |   3.2% → 2.6% |  114.0ms → 91.0ms |  114 → 91 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`        | `src/Data/Aeson/Internal/Text.hs:29:1`     |
|   -6.3% |  -7.00ms |   3.1% → 3.0% | 111.0ms → 104.0ms | 111 → 104 | `Main.keywords`                                     | `Profile.hs:136:1`                         |
|  -87.5% |  -7.00ms |  0.2% → <0.1% |     8.0ms → 1.0ms |     8 → 1 | `Data.Aeson.Encoding.Builder.object`                | `src/Data/Aeson/Encoding/Builder.hs:96:1`  |
|  -85.7% |  -6.00ms |  0.2% → <0.1% |     7.0ms → 1.0ms |     7 → 1 | `Data.Aeson.Types.FromJSON..:`                      | `src/Data/Aeson/Types/FromJSON.hs:849:1`   |
|  -19.2% |  -5.00ms |   0.7% → 0.6% |   26.0ms → 21.0ms |   26 → 21 | `Data.Aeson.KeyMap.lookup`                          | `src/Data/Aeson/KeyMap.hs:178:1`           |
|  -37.5% |  -3.00ms |   0.2% → 0.1% |     8.0ms → 5.0ms |     8 → 5 | `Data.Scientific.toBoundedInteger`                  | `src/Data/Scientific.hs:772:1`             |
|  -22.2% |  -2.00ms |   0.3% → 0.2% |     9.0ms → 7.0ms |     9 → 7 | `Data.Aeson.Types.FromJSON.withText`                | `src/Data/Aeson/Types/FromJSON.hs:731:1`   |
|  -18.2% |  -2.00ms |          0.3% |    11.0ms → 9.0ms |    11 → 9 | `Data.Aeson.Types.Internal.<?>`                     | `src/Data/Aeson/Types/Internal.hs:659:1`   |
|  -28.6% |  -2.00ms |   0.2% → 0.1% |     7.0ms → 5.0ms |     7 → 5 | `Data.Aeson.Encoding.Builder.text`                  | `src/Data/Aeson/Encoding/Builder.hs:109:1` |
|  -50.0% |  -2.00ms |          0.1% |     4.0ms → 2.0ms |     4 → 2 | `Data.Scientific.normalize`                         | `src/Data/Scientific.hs:1102:1`            |
|  -50.0% |  -1.00ms |  0.1% → <0.1% |     2.0ms → 1.0ms |     2 → 1 | `Main.main`                                         | `Profile.hs:146:1`                         |
| removed |  -1.00ms |  <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `Main.roundTrip`                                    | `Profile.hs:139:1`                         |
| removed |  -1.00ms |  <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `Main.parseJSON`                                    | `Profile.hs:109:3`                         |
| removed |  -1.00ms |  <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `Main.parseJSON`                                    | `Profile.hs:61:3`                          |
|   -7.7% |  -1.00ms |   0.4% → 0.3% |   13.0ms → 12.0ms |   13 → 12 | `Main.summarize`                                    | `Profile.hs:118:1`                         |
|   -6.3% |  -1.00ms |          0.4% |   16.0ms → 15.0ms |   16 → 15 | `Data.Aeson.Types.FromJSON.explicitParseField`      | `src/Data/Aeson/Types/FromJSON.hs:917:1`   |
|  -25.0% |  -1.00ms |          0.1% |     4.0ms → 3.0ms |     4 → 3 | `Utils.magnitude`                                   | `src/Utils.hs:78:1`                        |
|  -50.0% |  -1.00ms |  0.1% → <0.1% |     2.0ms → 1.0ms |     2 → 1 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1`   |
| removed |  -1.00ms |  <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `Main.parseJSONList`                                | `Profile.hs:50:10`                         |

##### Garbage collector

| Change |    Delta |             % |          Time |       Samples | Function | Location    |
| -----: | -------: | ------------: | ------------: | ------------: | -------- | ----------- |
|  -4.0% | -43.00ms | 29.9% → 29.4% | 1.07s → 1.03s | 1,075 → 1,032 | `GC.GC`  | `<unknown>` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `Data.Integer.Conversion.byteStringToInteger` (`src/Data/Integer/Conversion.hs:104:1`)

| Change |    Delta |      % |            Time | Samples | Caller                                            | Location                                          |
| -----: | -------: | -----: | --------------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| +54.8% | +34.00ms | 100.0% | 62.0ms → 96.0ms | 62 → 96 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

##### `Data.Aeson.Internal.Unescape.unescapeText` (`src/Data/Aeson/Internal/Unescape.hs:34:1`)

| Change |    Delta |      % |            Time | Samples | Caller                                            | Location                                          |
| -----: | -------: | -----: | --------------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| +34.5% | +19.00ms | 100.0% | 55.0ms → 74.0ms | 55 → 74 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

##### `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)

| Change |    Delta |      % |              Time |   Samples | Caller                             | Location                          |
| -----: | -------: | -----: | ----------------: | --------: | ---------------------------------- | --------------------------------- |
| +10.0% | +15.00ms | 100.0% | 150.0ms → 165.0ms | 150 → 165 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

##### `Main.tally` (`Profile.hs:112:1`)

|  Change |   Delta |             % |            Time | Samples | Caller           | Location           |
| ------: | ------: | ------------: | --------------: | ------: | ---------------- | ------------------ |
| +150.0% | +6.00ms | 21.1% → 38.5% |  4.0ms → 10.0ms |  4 → 10 | `Main.summarize` | `Profile.hs:118:1` |
|   +6.7% | +1.00ms | 78.9% → 61.5% | 15.0ms → 16.0ms | 15 → 16 | `Main.keywords`  | `Profile.hs:136:1` |

##### `Data.Aeson.Encoding.Builder.array` (`src/Data/Aeson/Encoding/Builder.hs:86:1`)

|  Change |   Delta |             % |          Time | Samples | Caller                                        | Location                                   |
| ------: | ------: | ------------: | ------------: | ------: | --------------------------------------------- | ------------------------------------------ |
| +250.0% | +5.00ms | 50.0% → 77.8% | 2.0ms → 7.0ms |   2 → 7 | `Data.Aeson.Encoding.Builder.text`            | `src/Data/Aeson/Encoding/Builder.hs:109:1` |
| removed | -2.00ms |  50.0% → 0.0% |   2.0ms → 0ms |   2 → 0 | `Data.Aeson.Encoding.Builder.encodeToBuilder` | `src/Data/Aeson/Encoding/Builder.hs:68:1`  |
|     new | +2.00ms |  0.0% → 22.2% |   0ms → 2.0ms |   0 → 2 | `Data.Aeson.Encoding.Builder.object`          | `src/Data/Aeson/Encoding/Builder.hs:96:1`  |

##### `Data.Aeson.Types.Internal.prependFailure` (`src/Data/Aeson/Types/Internal.hs:681:1`)

| Change |   Delta |            % |        Time | Samples | Caller                                         | Location                                 |
| -----: | ------: | -----------: | ----------: | ------: | ---------------------------------------------- | ---------------------------------------- |
|    new | +2.00ms | 0.0% → 66.7% | 0ms → 2.0ms |   0 → 2 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |
|    new | +1.00ms | 0.0% → 33.3% | 0ms → 1.0ms |   0 → 1 | `Data.Aeson.Types.Internal.<?>`                | `src/Data/Aeson/Types/Internal.hs:659:1` |

##### `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`)

| Change |   Delta |      % |          Time | Samples | Caller           | Location          |
| -----: | ------: | -----: | ------------: | ------: | ---------------- | ----------------- |
| +66.7% | +2.00ms | 100.0% | 3.0ms → 5.0ms |   3 → 5 | `Main.parseJSON` | `Profile.hs:48:3` |

##### `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`)

| Change |   Delta |             % |            Time | Samples | Caller               | Location            |
| -----: | ------: | ------------: | --------------: | ------: | -------------------- | ------------------- |
| +20.0% | +2.00ms | 55.6% → 60.0% | 10.0ms → 12.0ms | 10 → 12 | `Main.parseJSONList` | `Profile.hs:71:10`  |
| -50.0% | -2.00ms | 22.2% → 10.0% |   4.0ms → 2.0ms |   4 → 2 | `Main.parseJSONList` | `Profile.hs:108:10` |
| +50.0% | +2.00ms | 22.2% → 30.0% |   4.0ms → 6.0ms |   4 → 6 | `Main.parseJSONList` | `Profile.hs:50:10`  |

##### `Data.Aeson.Types.FromJSON.parseIndexedJSON` (`src/Data/Aeson/Types/FromJSON.hs:171:1`)

| Change |   Delta |             % |        Time | Samples | Caller                                | Location                                 |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------- | ---------------------------------------- |
|    new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `Data.Aeson.Types.FromJSON.withArray` | `src/Data/Aeson/Types/FromJSON.hs:742:1` |

##### `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)

| Change |   Delta |      % |  Time |       Samples | Caller                             | Location                          |
| -----: | ------: | -----: | ----: | ------------: | ---------------------------------- | --------------------------------- |
|  +0.1% | +1.00ms | 100.0% | 1.34s | 1,345 → 1,346 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

##### `Main.parseJSON` (`Profile.hs:51:3`)

| Change |   Delta |             % |        Time | Samples | Caller                                       | Location                                 |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------------------------- | ---------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `Data.Aeson.Types.FromJSON.parseIndexedJSON` | `src/Data/Aeson/Types/FromJSON.hs:171:1` |

##### `Main.parseJSON` (`Profile.hs:65:3`)

| Change |   Delta |             % |        Time | Samples | Caller                                         | Location                                 |
| -----: | ------: | ------------: | ----------: | ------: | ---------------------------------------------- | ---------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Data.Aeson.Encoding.Builder.encodeToBuilder` (`src/Data/Aeson/Encoding/Builder.hs:68:1`)

| Change |   Delta |             % |        Time | Samples | Caller                               | Location                                    |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------ | ------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `Data.Aeson.Encoding.Internal.value` | `src/Data/Aeson/Encoding/Internal.hs:441:1` |

##### `Data.Aeson.Types.Internal.modifyFailure` (`src/Data/Aeson/Types/Internal.hs:671:1`)

| Change |   Delta |      % |          Time | Samples | Caller                                     | Location                                 |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------------ | ---------------------------------------- |
| +50.0% | +1.00ms | 100.0% | 2.0ms → 3.0ms |   2 → 3 | `Data.Aeson.Types.Internal.prependFailure` | `src/Data/Aeson/Types/Internal.hs:681:1` |

##### `Data.Aeson.Key.toText` (`src/Data/Aeson/Key.hs:57:1`)

| Change |   Delta |             % |        Time | Samples | Caller                               | Location                                  |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------ | ----------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `Data.Aeson.Encoding.Builder.object` | `src/Data/Aeson/Encoding/Builder.hs:96:1` |

##### `Main.pad` (`Profile.hs:142:1`)

| Change |   Delta |             % |        Time | Samples | Caller      | Location           |
| -----: | ------: | ------------: | ----------: | ------: | ----------- | ------------------ |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `Main.main` | `Profile.hs:146:1` |

##### `Data.Aeson.KeyMap.fromList` (`src/Data/Aeson/KeyMap.hs:247:1`)

|  Change |    Delta |              % |              Time |   Samples | Caller                                         | Location                                     |
| ------: | -------: | -------------: | ----------------: | --------: | ---------------------------------------------- | -------------------------------------------- |
|  -13.7% | -66.00ms | 99.8% → 100.0% | 483.0ms → 417.0ms | 483 → 417 | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |
| removed |  -1.00ms |    0.2% → 0.0% |       1.0ms → 0ms |     1 → 0 | `Main.toJSON`                                  | `Profile.hs:84:3`                            |

##### `Data.Aeson.Internal.Text.unsafeDecodeASCII` (`src/Data/Aeson/Internal/Text.hs:29:1`)

| Change |    Delta |      % |             Time |  Samples | Caller                                            | Location                                          |
| -----: | -------: | -----: | ---------------: | -------: | ------------------------------------------------- | ------------------------------------------------- |
| -20.2% | -23.00ms | 100.0% | 114.0ms → 91.0ms | 114 → 91 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

##### `Main.keywords` (`Profile.hs:136:1`)

| Change |   Delta |      % |              Time |   Samples | Caller      | Location           |
| -----: | ------: | -----: | ----------------: | --------: | ----------- | ------------------ |
|  -6.3% | -7.00ms | 100.0% | 111.0ms → 104.0ms | 111 → 104 | `Main.main` | `Profile.hs:146:1` |

##### `Data.Aeson.Encoding.Builder.object` (`src/Data/Aeson/Encoding/Builder.hs:96:1`)

| Change |   Delta |      % |          Time | Samples | Caller                                        | Location                                  |
| -----: | ------: | -----: | ------------: | ------: | --------------------------------------------- | ----------------------------------------- |
| -87.5% | -7.00ms | 100.0% | 8.0ms → 1.0ms |   8 → 1 | `Data.Aeson.Encoding.Builder.encodeToBuilder` | `src/Data/Aeson/Encoding/Builder.hs:68:1` |

##### `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`)

| Change |   Delta |      % |          Time | Samples | Caller                                 | Location                                 |
| -----: | ------: | -----: | ------------: | ------: | -------------------------------------- | ---------------------------------------- |
| -85.7% | -6.00ms | 100.0% | 7.0ms → 1.0ms |   7 → 1 | `Data.Aeson.Types.FromJSON.withObject` | `src/Data/Aeson/Types/FromJSON.hs:720:1` |

##### `Data.Aeson.KeyMap.lookup` (`src/Data/Aeson/KeyMap.hs:178:1`)

| Change |   Delta |      % |            Time | Samples | Caller                                         | Location                                 |
| -----: | ------: | -----: | --------------: | ------: | ---------------------------------------------- | ---------------------------------------- |
| -19.2% | -5.00ms | 100.0% | 26.0ms → 21.0ms | 26 → 21 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`)

| Change |   Delta |      % |          Time | Samples | Caller                                         | Location                                 |
| -----: | ------: | -----: | ------------: | ------: | ---------------------------------------------- | ---------------------------------------- |
| -37.5% | -3.00ms | 100.0% | 8.0ms → 5.0ms |   8 → 5 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Data.Aeson.Types.FromJSON.withText` (`src/Data/Aeson/Types/FromJSON.hs:731:1`)

| Change |   Delta |             % |          Time | Samples | Caller                                              | Location                                 |
| -----: | ------: | ------------: | ------------: | ------: | --------------------------------------------------- | ---------------------------------------- |
| -20.0% | -1.00ms | 55.6% → 57.1% | 5.0ms → 4.0ms |   5 → 4 | `Data.Aeson.Types.Internal.<?>`                     | `src/Data/Aeson/Types/Internal.hs:659:1` |
| -33.3% | -1.00ms | 33.3% → 28.6% | 3.0ms → 2.0ms |   3 → 2 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1` |

##### `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`)

| Change |   Delta |      % |           Time | Samples | Caller                                         | Location                                 |
| -----: | ------: | -----: | -------------: | ------: | ---------------------------------------------- | ---------------------------------------- |
| -18.2% | -2.00ms | 100.0% | 11.0ms → 9.0ms |  11 → 9 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Data.Aeson.Encoding.Builder.text` (`src/Data/Aeson/Encoding/Builder.hs:109:1`)

| Change |   Delta |             % |          Time | Samples | Caller                               | Location                                  |
| -----: | ------: | ------------: | ------------: | ------: | ------------------------------------ | ----------------------------------------- |
| -33.3% | -2.00ms | 85.7% → 80.0% | 6.0ms → 4.0ms |   6 → 4 | `Data.Aeson.Encoding.Builder.object` | `src/Data/Aeson/Encoding/Builder.hs:96:1` |

##### `Data.Scientific.normalize` (`src/Data/Scientific.hs:1102:1`)

| Change |   Delta |      % |          Time | Samples | Caller                             | Location                       |
| -----: | ------: | -----: | ------------: | ------: | ---------------------------------- | ------------------------------ |
| -50.0% | -2.00ms | 100.0% | 4.0ms → 2.0ms |   4 → 2 | `Data.Scientific.toBoundedInteger` | `src/Data/Scientific.hs:772:1` |

##### `Main.roundTrip` (`Profile.hs:139:1`)

|  Change |   Delta |             % |        Time | Samples | Caller      | Location           |
| ------: | ------: | ------------: | ----------: | ------: | ----------- | ------------------ |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `Main.main` | `Profile.hs:146:1` |

##### `Main.parseJSON` (`Profile.hs:109:3`)

|  Change |   Delta |             % |        Time | Samples | Caller                                       | Location                                 |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------------------------- | ---------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `Data.Aeson.Types.FromJSON.parseIndexedJSON` | `src/Data/Aeson/Types/FromJSON.hs:171:1` |

##### `Main.parseJSON` (`Profile.hs:61:3`)

|  Change |   Delta |             % |        Time | Samples | Caller                                         | Location                                 |
| ------: | ------: | ------------: | ----------: | ------: | ---------------------------------------------- | ---------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Main.summarize` (`Profile.hs:118:1`)

| Change |   Delta |      % |            Time | Samples | Caller      | Location           |
| -----: | ------: | -----: | --------------: | ------: | ----------- | ------------------ |
|  -7.7% | -1.00ms | 100.0% | 13.0ms → 12.0ms | 13 → 12 | `Main.main` | `Profile.hs:146:1` |

##### `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`)

| Change |   Delta |      % |            Time | Samples | Caller                         | Location                                 |
| -----: | ------: | -----: | --------------: | ------: | ------------------------------ | ---------------------------------------- |
|  -6.3% | -1.00ms | 100.0% | 16.0ms → 15.0ms | 16 → 15 | `Data.Aeson.Types.FromJSON..:` | `src/Data/Aeson/Types/FromJSON.hs:849:1` |

##### `Utils.magnitude` (`src/Utils.hs:78:1`)

| Change |   Delta |      % |          Time | Samples | Caller                             | Location                       |
| -----: | ------: | -----: | ------------: | ------: | ---------------------------------- | ------------------------------ |
| -25.0% | -1.00ms | 100.0% | 4.0ms → 3.0ms |   4 → 3 | `Data.Scientific.toBoundedInteger` | `src/Data/Scientific.hs:772:1` |

##### `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` (`src/Data/Aeson/Types/FromJSON.hs:923:1`)

| Change |   Delta |      % |          Time | Samples | Caller                          | Location                                 |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------- | ---------------------------------------- |
| -50.0% | -1.00ms | 100.0% | 2.0ms → 1.0ms |   2 → 1 | `Data.Aeson.Types.FromJSON..:?` | `src/Data/Aeson/Types/FromJSON.hs:859:1` |

##### `Main.parseJSONList` (`Profile.hs:50:10`)

|  Change |   Delta |             % |        Time | Samples | Caller                                         | Location                                 |
| ------: | ------: | ------------: | ----------: | ------: | ---------------------------------------------- | ---------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

### Total time

#### Regressions

Functions with the largest increase in wall time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |    Delta |             % |            Time |       Samples | Function                                          | Location                                          |
| ------: | -------: | ------------: | --------------: | ------------: | ------------------------------------------------- | ------------------------------------------------- |
|  +54.8% | +34.00ms |   1.7% → 2.7% | 62.0ms → 96.0ms |       62 → 96 | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|   +2.0% | +31.00ms | 43.9% → 45.7% |   1.57s → 1.60s | 1,576 → 1,607 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
|  +34.5% | +19.00ms |   1.5% → 2.1% | 55.0ms → 74.0ms |       55 → 74 | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
| +125.0% | +10.00ms |   0.2% → 0.5% |  8.0ms → 18.0ms |        8 → 18 | `PROFILING.OVERHEAD_of`                           | `<unknown>`                                       |
|  +36.8% |  +7.00ms |   0.5% → 0.7% | 19.0ms → 26.0ms |       19 → 26 | `Main.tally`                                      | `Profile.hs:112:1`                                |
| +100.0% |  +5.00ms |   0.1% → 0.3% |  5.0ms → 10.0ms |        5 → 10 | `Data.Aeson.Encoding.Builder.array`               | `src/Data/Aeson/Encoding/Builder.hs:86:1`         |
|  +17.4% |  +4.00ms |   0.6% → 0.8% | 23.0ms → 27.0ms |       23 → 27 | `Main.summarize`                                  | `Profile.hs:118:1`                                |
|  +80.0% |  +4.00ms |   0.1% → 0.3% |   5.0ms → 9.0ms |         5 → 9 | `Main.parseJSONList`                              | `Profile.hs:50:10`                                |
|  +21.1% |  +4.00ms |   0.5% → 0.7% | 19.0ms → 23.0ms |       19 → 23 | `Data.Aeson.Types.FromJSON.withArray`             | `src/Data/Aeson/Types/FromJSON.hs:742:1`          |
|  +20.0% |  +3.00ms |   0.4% → 0.5% | 15.0ms → 18.0ms |       15 → 18 | `Data.Aeson.Encoding.Builder.text`                | `src/Data/Aeson/Encoding/Builder.hs:109:1`        |
|  +28.6% |  +2.00ms |   0.2% → 0.3% |   7.0ms → 9.0ms |         7 → 9 | `Data.Aeson.Types.Internal.prependFailure`        | `src/Data/Aeson/Types/Internal.hs:681:1`          |
|  +20.0% |  +2.00ms |          0.3% | 10.0ms → 12.0ms |       10 → 12 | `Main.parseJSONList`                              | `Profile.hs:71:10`                                |
| +200.0% |  +2.00ms |  <0.1% → 0.1% |   1.0ms → 3.0ms |         1 → 3 | `Data.Aeson.Types.FromJSON.parseIndexedJSON`      | `src/Data/Aeson/Types/FromJSON.hs:171:1`          |
|     new |  +1.00ms |  0.0% → <0.1% |     0ms → 1.0ms |         0 → 1 | `Main.parseJSON`                                  | `Profile.hs:51:3`                                 |
|     new |  +1.00ms |  0.0% → <0.1% |     0ms → 1.0ms |         0 → 1 | `Main.parseJSON`                                  | `Profile.hs:65:3`                                 |
|     new |  +1.00ms |  0.0% → <0.1% |     0ms → 1.0ms |         0 → 1 | `Data.Aeson.Key.toText`                           | `src/Data/Aeson/Key.hs:57:1`                      |
|     new |  +1.00ms |  0.0% → <0.1% |     0ms → 1.0ms |         0 → 1 | `Main.pad`                                        | `Profile.hs:142:1`                                |

##### Ours

|  Change |    Delta |             % |            Time |       Samples | Function                                          | Location                                          |
| ------: | -------: | ------------: | --------------: | ------------: | ------------------------------------------------- | ------------------------------------------------- |
|  +54.8% | +34.00ms |   1.7% → 2.7% | 62.0ms → 96.0ms |       62 → 96 | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|   +2.0% | +31.00ms | 43.9% → 45.7% |   1.57s → 1.60s | 1,576 → 1,607 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
|  +34.5% | +19.00ms |   1.5% → 2.1% | 55.0ms → 74.0ms |       55 → 74 | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
|  +36.8% |  +7.00ms |   0.5% → 0.7% | 19.0ms → 26.0ms |       19 → 26 | `Main.tally`                                      | `Profile.hs:112:1`                                |
| +100.0% |  +5.00ms |   0.1% → 0.3% |  5.0ms → 10.0ms |        5 → 10 | `Data.Aeson.Encoding.Builder.array`               | `src/Data/Aeson/Encoding/Builder.hs:86:1`         |
|  +17.4% |  +4.00ms |   0.6% → 0.8% | 23.0ms → 27.0ms |       23 → 27 | `Main.summarize`                                  | `Profile.hs:118:1`                                |
|  +80.0% |  +4.00ms |   0.1% → 0.3% |   5.0ms → 9.0ms |         5 → 9 | `Main.parseJSONList`                              | `Profile.hs:50:10`                                |
|  +21.1% |  +4.00ms |   0.5% → 0.7% | 19.0ms → 23.0ms |       19 → 23 | `Data.Aeson.Types.FromJSON.withArray`             | `src/Data/Aeson/Types/FromJSON.hs:742:1`          |
|  +20.0% |  +3.00ms |   0.4% → 0.5% | 15.0ms → 18.0ms |       15 → 18 | `Data.Aeson.Encoding.Builder.text`                | `src/Data/Aeson/Encoding/Builder.hs:109:1`        |
|  +28.6% |  +2.00ms |   0.2% → 0.3% |   7.0ms → 9.0ms |         7 → 9 | `Data.Aeson.Types.Internal.prependFailure`        | `src/Data/Aeson/Types/Internal.hs:681:1`          |
|  +20.0% |  +2.00ms |          0.3% | 10.0ms → 12.0ms |       10 → 12 | `Main.parseJSONList`                              | `Profile.hs:71:10`                                |
| +200.0% |  +2.00ms |  <0.1% → 0.1% |   1.0ms → 3.0ms |         1 → 3 | `Data.Aeson.Types.FromJSON.parseIndexedJSON`      | `src/Data/Aeson/Types/FromJSON.hs:171:1`          |
|     new |  +1.00ms |  0.0% → <0.1% |     0ms → 1.0ms |         0 → 1 | `Main.parseJSON`                                  | `Profile.hs:51:3`                                 |
|     new |  +1.00ms |  0.0% → <0.1% |     0ms → 1.0ms |         0 → 1 | `Main.parseJSON`                                  | `Profile.hs:65:3`                                 |
|     new |  +1.00ms |  0.0% → <0.1% |     0ms → 1.0ms |         0 → 1 | `Data.Aeson.Key.toText`                           | `src/Data/Aeson/Key.hs:57:1`                      |
|     new |  +1.00ms |  0.0% → <0.1% |     0ms → 1.0ms |         0 → 1 | `Main.pad`                                        | `Profile.hs:142:1`                                |

#### Improvements

Functions with the largest decrease in wall time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

| Change |    Delta |             % |              Time |       Samples | Function                                       | Location                                     |
| -----: | -------: | ------------: | ----------------: | ------------: | ---------------------------------------------- | -------------------------------------------- |
| -13.8% | -67.00ms | 13.5% → 11.9% | 484.0ms → 417.0ms |     484 → 417 | `Data.Aeson.KeyMap.fromList`                   | `src/Data/Aeson/KeyMap.hs:247:1`             |
|  -8.7% | -65.00ms | 20.8% → 19.4% | 746.0ms → 681.0ms |     746 → 681 | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |
|  -4.0% | -43.00ms | 29.9% → 29.4% |     1.07s → 1.03s | 1,075 → 1,032 | `GC.GC`                                        | `<unknown>`                                  |
|  -1.6% | -40.00ms | 69.7% → 70.1% |     2.50s → 2.46s | 2,503 → 2,463 | `Main.main`                                    | `Profile.hs:146:1`                           |
|  -1.5% | -34.00ms | 64.6% → 65.1% |     2.32s → 2.28s | 2,322 → 2,288 | `Data.Aeson.Decoding.eitherDecode`             | `src/Data/Aeson/Decoding.hs:79:1`            |
| -20.2% | -23.00ms |   3.2% → 2.6% |  114.0ms → 91.0ms |      114 → 91 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`   | `src/Data/Aeson/Internal/Text.hs:29:1`       |
| -38.9% | -21.00ms |   1.5% → 0.9% |   54.0ms → 33.0ms |       54 → 33 | `Main.roundTrip`                               | `Profile.hs:139:1`                           |
| -14.7% | -16.00ms |   3.0% → 2.6% |  109.0ms → 93.0ms |      109 → 93 | `Data.Aeson.Types.FromJSON..:`                 | `src/Data/Aeson/Types/FromJSON.hs:849:1`     |
| -12.4% | -14.00ms |   3.1% → 2.8% |  113.0ms → 99.0ms |      113 → 99 | `Data.Aeson.Types.FromJSON.withObject`         | `src/Data/Aeson/Types/FromJSON.hs:720:1`     |
| -12.4% | -14.00ms |   3.1% → 2.8% |  113.0ms → 99.0ms |      113 → 99 | `Data.Aeson.Types.FromJSON.ifromJSON`          | `src/Data/Aeson/Types/FromJSON.hs:839:1`     |
|  -9.8% | -10.00ms |   2.8% → 2.6% |  102.0ms → 92.0ms |      102 → 92 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1`     |
| -80.0% |  -8.00ms |   0.3% → 0.1% |    10.0ms → 2.0ms |        10 → 2 | `Main.parseJSON`                               | `Profile.hs:96:3`                            |
|  -4.8% |  -6.00ms |   3.5% → 3.4% | 126.0ms → 120.0ms |     126 → 120 | `Main.keywords`                                | `Profile.hs:136:1`                           |
|  -5.8% |  -6.00ms |   2.9% → 2.8% |  103.0ms → 97.0ms |      103 → 97 | `Main.parseJSON`                               | `Profile.hs:48:3`                            |
| -37.5% |  -6.00ms |   0.4% → 0.3% |   16.0ms → 10.0ms |       16 → 10 | `Data.Scientific.toBoundedInteger`             | `src/Data/Scientific.hs:772:1`               |
| -19.2% |  -5.00ms |   0.7% → 0.6% |   26.0ms → 21.0ms |       26 → 21 | `Data.Aeson.KeyMap.lookup`                     | `src/Data/Aeson/KeyMap.hs:178:1`             |
| -12.5% |  -4.00ms |   0.9% → 0.8% |   32.0ms → 28.0ms |       32 → 28 | `Data.Aeson.Types.Internal.<?>`                | `src/Data/Aeson/Types/Internal.hs:659:1`     |
| -66.7% |  -4.00ms |   0.2% → 0.1% |     6.0ms → 2.0ms |         6 → 2 | `SYSTEM.SYSTEM`                                | `<unknown>`                                  |
| -10.7% |  -3.00ms |   0.8% → 0.7% |   28.0ms → 25.0ms |       28 → 25 | `Main.toEncoding`                              | `Profile.hs:83:10`                           |
| -10.3% |  -3.00ms |   0.8% → 0.7% |   29.0ms → 26.0ms |       29 → 26 | `Data.Aeson.encode`                            | `src/Data/Aeson.hs:187:1`                    |

##### Ours

| Change |    Delta |             % |              Time |       Samples | Function                                       | Location                                     |
| -----: | -------: | ------------: | ----------------: | ------------: | ---------------------------------------------- | -------------------------------------------- |
| -13.8% | -67.00ms | 13.5% → 11.9% | 484.0ms → 417.0ms |     484 → 417 | `Data.Aeson.KeyMap.fromList`                   | `src/Data/Aeson/KeyMap.hs:247:1`             |
|  -8.7% | -65.00ms | 20.8% → 19.4% | 746.0ms → 681.0ms |     746 → 681 | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |
|  -1.6% | -40.00ms | 69.7% → 70.1% |     2.50s → 2.46s | 2,503 → 2,463 | `Main.main`                                    | `Profile.hs:146:1`                           |
|  -1.5% | -34.00ms | 64.6% → 65.1% |     2.32s → 2.28s | 2,322 → 2,288 | `Data.Aeson.Decoding.eitherDecode`             | `src/Data/Aeson/Decoding.hs:79:1`            |
| -20.2% | -23.00ms |   3.2% → 2.6% |  114.0ms → 91.0ms |      114 → 91 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`   | `src/Data/Aeson/Internal/Text.hs:29:1`       |
| -38.9% | -21.00ms |   1.5% → 0.9% |   54.0ms → 33.0ms |       54 → 33 | `Main.roundTrip`                               | `Profile.hs:139:1`                           |
| -14.7% | -16.00ms |   3.0% → 2.6% |  109.0ms → 93.0ms |      109 → 93 | `Data.Aeson.Types.FromJSON..:`                 | `src/Data/Aeson/Types/FromJSON.hs:849:1`     |
| -12.4% | -14.00ms |   3.1% → 2.8% |  113.0ms → 99.0ms |      113 → 99 | `Data.Aeson.Types.FromJSON.withObject`         | `src/Data/Aeson/Types/FromJSON.hs:720:1`     |
| -12.4% | -14.00ms |   3.1% → 2.8% |  113.0ms → 99.0ms |      113 → 99 | `Data.Aeson.Types.FromJSON.ifromJSON`          | `src/Data/Aeson/Types/FromJSON.hs:839:1`     |
|  -9.8% | -10.00ms |   2.8% → 2.6% |  102.0ms → 92.0ms |      102 → 92 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1`     |
| -80.0% |  -8.00ms |   0.3% → 0.1% |    10.0ms → 2.0ms |        10 → 2 | `Main.parseJSON`                               | `Profile.hs:96:3`                            |
|  -4.8% |  -6.00ms |   3.5% → 3.4% | 126.0ms → 120.0ms |     126 → 120 | `Main.keywords`                                | `Profile.hs:136:1`                           |
|  -5.8% |  -6.00ms |   2.9% → 2.8% |  103.0ms → 97.0ms |      103 → 97 | `Main.parseJSON`                               | `Profile.hs:48:3`                            |
| -37.5% |  -6.00ms |   0.4% → 0.3% |   16.0ms → 10.0ms |       16 → 10 | `Data.Scientific.toBoundedInteger`             | `src/Data/Scientific.hs:772:1`               |
| -19.2% |  -5.00ms |   0.7% → 0.6% |   26.0ms → 21.0ms |       26 → 21 | `Data.Aeson.KeyMap.lookup`                     | `src/Data/Aeson/KeyMap.hs:178:1`             |
| -12.5% |  -4.00ms |   0.9% → 0.8% |   32.0ms → 28.0ms |       32 → 28 | `Data.Aeson.Types.Internal.<?>`                | `src/Data/Aeson/Types/Internal.hs:659:1`     |
| -10.7% |  -3.00ms |   0.8% → 0.7% |   28.0ms → 25.0ms |       28 → 25 | `Main.toEncoding`                              | `Profile.hs:83:10`                           |
| -10.3% |  -3.00ms |   0.8% → 0.7% |   29.0ms → 26.0ms |       29 → 26 | `Data.Aeson.encode`                            | `src/Data/Aeson.hs:187:1`                    |
| -60.0% |  -3.00ms |          0.1% |     5.0ms → 2.0ms |         5 → 2 | `Main.parseJSONList`                           | `Profile.hs:108:10`                          |
| -12.5% |  -2.00ms |          0.4% |   16.0ms → 14.0ms |       16 → 14 | `Data.Aeson.Types.FromJSON.withText`           | `src/Data/Aeson/Types/FromJSON.hs:731:1`     |

##### Garbage collector

| Change |    Delta |             % |          Time |       Samples | Function | Location    |
| -----: | -------: | ------------: | ------------: | ------------: | -------- | ----------- |
|  -4.0% | -43.00ms | 29.9% → 29.4% | 1.07s → 1.03s | 1,075 → 1,032 | `GC.GC`  | `<unknown>` |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Data.Integer.Conversion.byteStringToInteger` (`src/Data/Integer/Conversion.hs:104:1`)

| Change |    Delta |      % |            Time | Samples | Caller                                            | Location                                          |
| -----: | -------: | -----: | --------------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| +54.8% | +34.00ms | 100.0% | 62.0ms → 96.0ms | 62 → 96 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

##### `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)

| Change |    Delta |      % |          Time |       Samples | Caller                             | Location                          |
| -----: | -------: | -----: | ------------: | ------------: | ---------------------------------- | --------------------------------- |
|  +2.0% | +31.00ms | 100.0% | 1.57s → 1.60s | 1,576 → 1,607 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

##### `Data.Aeson.Internal.Unescape.unescapeText` (`src/Data/Aeson/Internal/Unescape.hs:34:1`)

| Change |    Delta |      % |            Time | Samples | Caller                                            | Location                                          |
| -----: | -------: | -----: | --------------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| +34.5% | +19.00ms | 100.0% | 55.0ms → 74.0ms | 55 → 74 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

##### `Main.tally` (`Profile.hs:112:1`)

|  Change |   Delta |             % |            Time | Samples | Caller           | Location           |
| ------: | ------: | ------------: | --------------: | ------: | ---------------- | ------------------ |
| +150.0% | +6.00ms | 21.1% → 38.5% |  4.0ms → 10.0ms |  4 → 10 | `Main.summarize` | `Profile.hs:118:1` |
|   +6.7% | +1.00ms | 78.9% → 61.5% | 15.0ms → 16.0ms | 15 → 16 | `Main.keywords`  | `Profile.hs:136:1` |

##### `Data.Aeson.Encoding.Builder.array` (`src/Data/Aeson/Encoding/Builder.hs:86:1`)

|  Change |   Delta |             % |          Time | Samples | Caller                                        | Location                                   |
| ------: | ------: | ------------: | ------------: | ------: | --------------------------------------------- | ------------------------------------------ |
| +250.0% | +5.00ms | 40.0% → 70.0% | 2.0ms → 7.0ms |   2 → 7 | `Data.Aeson.Encoding.Builder.text`            | `src/Data/Aeson/Encoding/Builder.hs:109:1` |
| removed | -2.00ms |  40.0% → 0.0% |   2.0ms → 0ms |   2 → 0 | `Data.Aeson.Encoding.Builder.encodeToBuilder` | `src/Data/Aeson/Encoding/Builder.hs:68:1`  |
| +200.0% | +2.00ms | 20.0% → 30.0% | 1.0ms → 3.0ms |   1 → 3 | `Data.Aeson.Encoding.Builder.object`          | `src/Data/Aeson/Encoding/Builder.hs:96:1`  |

##### `Main.summarize` (`Profile.hs:118:1`)

| Change |   Delta |      % |            Time | Samples | Caller      | Location           |
| -----: | ------: | -----: | --------------: | ------: | ----------- | ------------------ |
| +17.4% | +4.00ms | 100.0% | 23.0ms → 27.0ms | 23 → 27 | `Main.main` | `Profile.hs:146:1` |

##### `Main.parseJSONList` (`Profile.hs:50:10`)

| Change |   Delta |      % |          Time | Samples | Caller                                         | Location                                 |
| -----: | ------: | -----: | ------------: | ------: | ---------------------------------------------- | ---------------------------------------- |
| +80.0% | +4.00ms | 100.0% | 5.0ms → 9.0ms |   5 → 9 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`)

|  Change |   Delta |             % |            Time | Samples | Caller               | Location            |
| ------: | ------: | ------------: | --------------: | ------: | -------------------- | ------------------- |
| +125.0% | +5.00ms | 21.1% → 39.1% |   4.0ms → 9.0ms |   4 → 9 | `Main.parseJSONList` | `Profile.hs:50:10`  |
|  -60.0% | -3.00ms |  26.3% → 8.7% |   5.0ms → 2.0ms |   5 → 2 | `Main.parseJSONList` | `Profile.hs:108:10` |
|  +20.0% | +2.00ms | 52.6% → 52.2% | 10.0ms → 12.0ms | 10 → 12 | `Main.parseJSONList` | `Profile.hs:71:10`  |

##### `Data.Aeson.Encoding.Builder.text` (`src/Data/Aeson/Encoding/Builder.hs:109:1`)

| Change |   Delta |             % |            Time | Samples | Caller                               | Location                                  |
| -----: | ------: | ------------: | --------------: | ------: | ------------------------------------ | ----------------------------------------- |
| +21.4% | +3.00ms | 93.3% → 94.4% | 14.0ms → 17.0ms | 14 → 17 | `Data.Aeson.Encoding.Builder.object` | `src/Data/Aeson/Encoding/Builder.hs:96:1` |

##### `Data.Aeson.Types.Internal.prependFailure` (`src/Data/Aeson/Types/Internal.hs:681:1`)

| Change |   Delta |            % |        Time | Samples | Caller                                         | Location                                 |
| -----: | ------: | -----------: | ----------: | ------: | ---------------------------------------------- | ---------------------------------------- |
|    new | +2.00ms | 0.0% → 22.2% | 0ms → 2.0ms |   0 → 2 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Main.parseJSONList` (`Profile.hs:71:10`)

|  Change |   Delta |             % |          Time | Samples | Caller                                         | Location                                 |
| ------: | ------: | ------------: | ------------: | ------: | ---------------------------------------------- | ---------------------------------------- |
| +100.0% | +3.00ms | 30.0% → 50.0% | 3.0ms → 6.0ms |   3 → 6 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |
|  -50.0% | -1.00ms |  20.0% → 8.3% | 2.0ms → 1.0ms |   2 → 1 | `Data.Aeson.Types.Internal.<?>`                | `src/Data/Aeson/Types/Internal.hs:659:1` |

##### `Data.Aeson.Types.FromJSON.parseIndexedJSON` (`src/Data/Aeson/Types/FromJSON.hs:171:1`)

|  Change |   Delta |      % |          Time | Samples | Caller                                | Location                                 |
| ------: | ------: | -----: | ------------: | ------: | ------------------------------------- | ---------------------------------------- |
| +200.0% | +2.00ms | 100.0% | 1.0ms → 3.0ms |   1 → 3 | `Data.Aeson.Types.FromJSON.withArray` | `src/Data/Aeson/Types/FromJSON.hs:742:1` |

##### `Main.parseJSON` (`Profile.hs:51:3`)

| Change |   Delta |             % |        Time | Samples | Caller                                       | Location                                 |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------------------------- | ---------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `Data.Aeson.Types.FromJSON.parseIndexedJSON` | `src/Data/Aeson/Types/FromJSON.hs:171:1` |

##### `Main.parseJSON` (`Profile.hs:65:3`)

| Change |   Delta |             % |        Time | Samples | Caller                                         | Location                                 |
| -----: | ------: | ------------: | ----------: | ------: | ---------------------------------------------- | ---------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Data.Aeson.Key.toText` (`src/Data/Aeson/Key.hs:57:1`)

| Change |   Delta |             % |        Time | Samples | Caller                               | Location                                  |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------ | ----------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `Data.Aeson.Encoding.Builder.object` | `src/Data/Aeson/Encoding/Builder.hs:96:1` |

##### `Main.pad` (`Profile.hs:142:1`)

| Change |   Delta |             % |        Time | Samples | Caller      | Location           |
| -----: | ------: | ------------: | ----------: | ------: | ----------- | ------------------ |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `Main.main` | `Profile.hs:146:1` |

##### `Data.Aeson.KeyMap.fromList` (`src/Data/Aeson/KeyMap.hs:247:1`)

|  Change |    Delta |              % |              Time |   Samples | Caller                                         | Location                                     |
| ------: | -------: | -------------: | ----------------: | --------: | ---------------------------------------------- | -------------------------------------------- |
|  -13.7% | -66.00ms | 99.8% → 100.0% | 483.0ms → 417.0ms | 483 → 417 | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |
| removed |  -1.00ms |    0.2% → 0.0% |       1.0ms → 0ms |     1 → 0 | `Main.toJSON`                                  | `Profile.hs:84:3`                            |

##### `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)

| Change |    Delta |      % |              Time |   Samples | Caller                             | Location                          |
| -----: | -------: | -----: | ----------------: | --------: | ---------------------------------- | --------------------------------- |
|  -8.7% | -65.00ms | 100.0% | 746.0ms → 681.0ms | 746 → 681 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

##### `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)

| Change |    Delta |             % |           Time |       Samples | Caller           | Location           |
| -----: | -------: | ------------: | -------------: | ------------: | ---------------- | ------------------ |
|  -0.7% | -17.00ms | 99.0% → 99.7% |  2.29s → 2.28s | 2,298 → 2,281 | `Main.main`      | `Profile.hs:146:1` |
| -70.8% | -17.00ms |   1.0% → 0.3% | 24.0ms → 7.0ms |        24 → 7 | `Main.roundTrip` | `Profile.hs:139:1` |

##### `Data.Aeson.Internal.Text.unsafeDecodeASCII` (`src/Data/Aeson/Internal/Text.hs:29:1`)

| Change |    Delta |      % |             Time |  Samples | Caller                                            | Location                                          |
| -----: | -------: | -----: | ---------------: | -------: | ------------------------------------------------- | ------------------------------------------------- |
| -20.2% | -23.00ms | 100.0% | 114.0ms → 91.0ms | 114 → 91 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

##### `Main.roundTrip` (`Profile.hs:139:1`)

| Change |    Delta |      % |            Time | Samples | Caller      | Location           |
| -----: | -------: | -----: | --------------: | ------: | ----------- | ------------------ |
| -38.9% | -21.00ms | 100.0% | 54.0ms → 33.0ms | 54 → 33 | `Main.main` | `Profile.hs:146:1` |

##### `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`)

| Change |    Delta |      % |             Time |  Samples | Caller                                 | Location                                 |
| -----: | -------: | -----: | ---------------: | -------: | -------------------------------------- | ---------------------------------------- |
| -14.7% | -16.00ms | 100.0% | 109.0ms → 93.0ms | 109 → 93 | `Data.Aeson.Types.FromJSON.withObject` | `src/Data/Aeson/Types/FromJSON.hs:720:1` |

##### `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`)

| Change |   Delta |             % |             Time |  Samples | Caller           | Location          |
| -----: | ------: | ------------: | ---------------: | -------: | ---------------- | ----------------- |
| -80.0% | -8.00ms |   8.8% → 2.0% |   10.0ms → 2.0ms |   10 → 2 | `Main.parseJSON` | `Profile.hs:96:3` |
|  -5.8% | -6.00ms | 91.2% → 98.0% | 103.0ms → 97.0ms | 103 → 97 | `Main.parseJSON` | `Profile.hs:48:3` |

##### `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`)

| Change |    Delta |      % |             Time |  Samples | Caller                                         | Location                                     |
| -----: | -------: | -----: | ---------------: | -------: | ---------------------------------------------- | -------------------------------------------- |
| -12.4% | -14.00ms | 100.0% | 113.0ms → 99.0ms | 113 → 99 | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |

##### `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`)

| Change |    Delta |      % |             Time |  Samples | Caller                         | Location                                 |
| -----: | -------: | -----: | ---------------: | -------: | ------------------------------ | ---------------------------------------- |
|  -9.8% | -10.00ms | 100.0% | 102.0ms → 92.0ms | 102 → 92 | `Data.Aeson.Types.FromJSON..:` | `src/Data/Aeson/Types/FromJSON.hs:849:1` |

##### `Main.parseJSON` (`Profile.hs:96:3`)

| Change |   Delta |      % |           Time | Samples | Caller                                | Location                                 |
| -----: | ------: | -----: | -------------: | ------: | ------------------------------------- | ---------------------------------------- |
| -80.0% | -8.00ms | 100.0% | 10.0ms → 2.0ms |  10 → 2 | `Data.Aeson.Types.FromJSON.ifromJSON` | `src/Data/Aeson/Types/FromJSON.hs:839:1` |

##### `Main.keywords` (`Profile.hs:136:1`)

| Change |   Delta |      % |              Time |   Samples | Caller      | Location           |
| -----: | ------: | -----: | ----------------: | --------: | ----------- | ------------------ |
|  -4.8% | -6.00ms | 100.0% | 126.0ms → 120.0ms | 126 → 120 | `Main.main` | `Profile.hs:146:1` |

##### `Main.parseJSON` (`Profile.hs:48:3`)

| Change |   Delta |      % |             Time |  Samples | Caller                                | Location                                 |
| -----: | ------: | -----: | ---------------: | -------: | ------------------------------------- | ---------------------------------------- |
|  -5.8% | -6.00ms | 100.0% | 103.0ms → 97.0ms | 103 → 97 | `Data.Aeson.Types.FromJSON.ifromJSON` | `src/Data/Aeson/Types/FromJSON.hs:839:1` |

##### `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`)

| Change |   Delta |      % |            Time | Samples | Caller                                         | Location                                 |
| -----: | ------: | -----: | --------------: | ------: | ---------------------------------------------- | ---------------------------------------- |
| -37.5% | -6.00ms | 100.0% | 16.0ms → 10.0ms | 16 → 10 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Data.Aeson.KeyMap.lookup` (`src/Data/Aeson/KeyMap.hs:178:1`)

| Change |   Delta |      % |            Time | Samples | Caller                                         | Location                                 |
| -----: | ------: | -----: | --------------: | ------: | ---------------------------------------------- | ---------------------------------------- |
| -19.2% | -5.00ms | 100.0% | 26.0ms → 21.0ms | 26 → 21 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`)

| Change |   Delta |      % |            Time | Samples | Caller                                         | Location                                 |
| -----: | ------: | -----: | --------------: | ------: | ---------------------------------------------- | ---------------------------------------- |
| -12.5% | -4.00ms | 100.0% | 32.0ms → 28.0ms | 32 → 28 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Main.toEncoding` (`Profile.hs:83:10`)

| Change |   Delta |      % |            Time | Samples | Caller              | Location                  |
| -----: | ------: | -----: | --------------: | ------: | ------------------- | ------------------------- |
| -10.7% | -3.00ms | 100.0% | 28.0ms → 25.0ms | 28 → 25 | `Data.Aeson.encode` | `src/Data/Aeson.hs:187:1` |

##### `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`)

| Change |   Delta |      % |            Time | Samples | Caller           | Location           |
| -----: | ------: | -----: | --------------: | ------: | ---------------- | ------------------ |
| -10.3% | -3.00ms | 100.0% | 29.0ms → 26.0ms | 29 → 26 | `Main.roundTrip` | `Profile.hs:139:1` |

##### `Main.parseJSONList` (`Profile.hs:108:10`)

|  Change |   Delta |            % |        Time | Samples | Caller                                         | Location                                 |
| ------: | ------: | -----------: | ----------: | ------: | ---------------------------------------------- | ---------------------------------------- |
| removed | -3.00ms | 60.0% → 0.0% | 3.0ms → 0ms |   3 → 0 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Data.Aeson.Types.FromJSON.withText` (`src/Data/Aeson/Types/FromJSON.hs:731:1`)

| Change |   Delta |             % |           Time | Samples | Caller                                              | Location                                 |
| -----: | ------: | ------------: | -------------: | ------: | --------------------------------------------------- | ---------------------------------------- |
| -10.0% | -1.00ms | 62.5% → 64.3% | 10.0ms → 9.0ms |  10 → 9 | `Data.Aeson.Types.Internal.<?>`                     | `src/Data/Aeson/Types/Internal.hs:659:1` |
| -33.3% | -1.00ms | 18.8% → 14.3% |  3.0ms → 2.0ms |   3 → 2 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)

| Change |    Delta |           % |             Time |  Samples | Callee                                        | Location                                   |
| -----: | -------: | ----------: | ---------------: | -------: | --------------------------------------------- | ------------------------------------------ |
| +54.8% | +34.00ms | 3.9% → 6.0% |  62.0ms → 96.0ms |  62 → 96 | `Data.Integer.Conversion.byteStringToInteger` | `src/Data/Integer/Conversion.hs:104:1`     |
| -20.2% | -23.00ms | 7.2% → 5.7% | 114.0ms → 91.0ms | 114 → 91 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`  | `src/Data/Aeson/Internal/Text.hs:29:1`     |
| +34.5% | +19.00ms | 3.5% → 4.6% |  55.0ms → 74.0ms |  55 → 74 | `Data.Aeson.Internal.Unescape.unescapeText`   | `src/Data/Aeson/Internal/Unescape.hs:34:1` |

##### `Main.summarize` (`Profile.hs:118:1`)

|  Change |   Delta |             % |           Time | Samples | Callee       | Location           |
| ------: | ------: | ------------: | -------------: | ------: | ------------ | ------------------ |
| +150.0% | +6.00ms | 17.4% → 37.0% | 4.0ms → 10.0ms |  4 → 10 | `Main.tally` | `Profile.hs:112:1` |
|  -16.7% | -1.00ms | 26.1% → 18.5% |  6.0ms → 5.0ms |   6 → 5 | `Main.top`   | `Profile.hs:115:1` |

##### `Main.parseJSONList` (`Profile.hs:50:10`)

|  Change |   Delta |              % |          Time | Samples | Callee                                | Location                                 |
| ------: | ------: | -------------: | ------------: | ------: | ------------------------------------- | ---------------------------------------- |
| +125.0% | +5.00ms | 80.0% → 100.0% | 4.0ms → 9.0ms |   4 → 9 | `Data.Aeson.Types.FromJSON.withArray` | `src/Data/Aeson/Types/FromJSON.hs:742:1` |

##### `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`)

|  Change |   Delta |            % |          Time | Samples | Callee                                       | Location                                 |
| ------: | ------: | -----------: | ------------: | ------: | -------------------------------------------- | ---------------------------------------- |
| +200.0% | +2.00ms | 5.3% → 13.0% | 1.0ms → 3.0ms |   1 → 3 | `Data.Aeson.Types.FromJSON.parseIndexedJSON` | `src/Data/Aeson/Types/FromJSON.hs:171:1` |

##### `Data.Aeson.Encoding.Builder.text` (`src/Data/Aeson/Encoding/Builder.hs:109:1`)

|  Change |   Delta |             % |          Time | Samples | Callee                              | Location                                  |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------------- | ----------------------------------------- |
| +250.0% | +5.00ms | 13.3% → 38.9% | 2.0ms → 7.0ms |   2 → 7 | `Data.Aeson.Encoding.Builder.array` | `src/Data/Aeson/Encoding/Builder.hs:86:1` |

##### `Data.Aeson.Types.Internal.prependFailure` (`src/Data/Aeson/Types/Internal.hs:681:1`)

| Change |   Delta |              % |          Time | Samples | Callee                                    | Location                                 |
| -----: | ------: | -------------: | ------------: | ------: | ----------------------------------------- | ---------------------------------------- |
| -14.3% | -1.00ms | 100.0% → 66.7% | 7.0ms → 6.0ms |   7 → 6 | `Data.Aeson.Types.Internal.modifyFailure` | `src/Data/Aeson/Types/Internal.hs:671:1` |

##### `Main.parseJSONList` (`Profile.hs:71:10`)

| Change |   Delta |      % |            Time | Samples | Callee                                | Location                                 |
| -----: | ------: | -----: | --------------: | ------: | ------------------------------------- | ---------------------------------------- |
| +20.0% | +2.00ms | 100.0% | 10.0ms → 12.0ms | 10 → 12 | `Data.Aeson.Types.FromJSON.withArray` | `src/Data/Aeson/Types/FromJSON.hs:742:1` |

##### `Data.Aeson.Types.FromJSON.parseIndexedJSON` (`src/Data/Aeson/Types/FromJSON.hs:171:1`)

|  Change |   Delta |             % |        Time | Samples | Callee           | Location           |
| ------: | ------: | ------------: | ----------: | ------: | ---------------- | ------------------ |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `Main.parseJSON` | `Profile.hs:109:3` |
|     new | +1.00ms |  0.0% → 33.3% | 0ms → 1.0ms |   0 → 1 | `Main.parseJSON` | `Profile.hs:51:3`  |

##### `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)

| Change |    Delta |             % |              Time |   Samples | Callee                                | Location                                 |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------------------- | ---------------------------------------- |
| -13.7% | -66.00ms | 64.7% → 61.2% | 483.0ms → 417.0ms | 483 → 417 | `Data.Aeson.KeyMap.fromList`          | `src/Data/Aeson/KeyMap.hs:247:1`         |
| -12.4% | -14.00ms | 15.1% → 14.5% |  113.0ms → 99.0ms |  113 → 99 | `Data.Aeson.Types.FromJSON.ifromJSON` | `src/Data/Aeson/Types/FromJSON.hs:839:1` |

##### `Main.main` (`Profile.hs:146:1`)

| Change |    Delta |             % |              Time |       Samples | Callee                             | Location                          |
| -----: | -------: | ------------: | ----------------: | ------------: | ---------------------------------- | --------------------------------- |
| -38.9% | -21.00ms |   2.2% → 1.3% |   54.0ms → 33.0ms |       54 → 33 | `Main.roundTrip`                   | `Profile.hs:139:1`                |
|  -0.7% | -17.00ms | 91.8% → 92.6% |     2.29s → 2.28s | 2,298 → 2,281 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |
|  -4.8% |  -6.00ms |   5.0% → 4.9% | 126.0ms → 120.0ms |     126 → 120 | `Main.keywords`                    | `Profile.hs:136:1`                |
| +17.4% |  +4.00ms |   0.9% → 1.1% |   23.0ms → 27.0ms |       23 → 27 | `Main.summarize`                   | `Profile.hs:118:1`                |
|    new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `Main.pad`                         | `Profile.hs:142:1`                |

##### `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)

| Change |    Delta |             % |              Time |       Samples | Callee                                            | Location                                          |
| -----: | -------: | ------------: | ----------------: | ------------: | ------------------------------------------------- | ------------------------------------------------- |
|  -8.7% | -65.00ms | 32.1% → 29.8% | 746.0ms → 681.0ms |     746 → 681 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
|  +2.0% | +31.00ms | 67.9% → 70.2% |     1.57s → 1.60s | 1,576 → 1,607 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

##### `Main.roundTrip` (`Profile.hs:139:1`)

| Change |    Delta |             % |            Time | Samples | Callee                             | Location                          |
| -----: | -------: | ------------: | --------------: | ------: | ---------------------------------- | --------------------------------- |
| -70.8% | -17.00ms | 44.4% → 21.2% |  24.0ms → 7.0ms |  24 → 7 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |
| -10.3% |  -3.00ms | 53.7% → 78.8% | 29.0ms → 26.0ms | 29 → 26 | `Data.Aeson.encode`                | `src/Data/Aeson.hs:187:1`         |

##### `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`)

| Change |    Delta |             % |             Time |  Samples | Callee                                         | Location                                 |
| -----: | -------: | ------------: | ---------------: | -------: | ---------------------------------------------- | ---------------------------------------- |
|  -9.8% | -10.00ms | 93.6% → 98.9% | 102.0ms → 92.0ms | 102 → 92 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`)

| Change |    Delta |             % |             Time |  Samples | Callee                         | Location                                 |
| -----: | -------: | ------------: | ---------------: | -------: | ------------------------------ | ---------------------------------------- |
| -14.7% | -16.00ms | 96.5% → 93.9% | 109.0ms → 93.0ms | 109 → 93 | `Data.Aeson.Types.FromJSON..:` | `src/Data/Aeson/Types/FromJSON.hs:849:1` |

##### `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`)

| Change |   Delta |             % |             Time |  Samples | Callee           | Location          |
| -----: | ------: | ------------: | ---------------: | -------: | ---------------- | ----------------- |
| -80.0% | -8.00ms |   8.8% → 2.0% |   10.0ms → 2.0ms |   10 → 2 | `Main.parseJSON` | `Profile.hs:96:3` |
|  -5.8% | -6.00ms | 91.2% → 98.0% | 103.0ms → 97.0ms | 103 → 97 | `Main.parseJSON` | `Profile.hs:48:3` |

##### `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`)

|  Change |   Delta |             % |            Time | Samples | Callee                             | Location                                 |
| ------: | ------: | ------------: | --------------: | ------: | ---------------------------------- | ---------------------------------------- |
|  -37.5% | -6.00ms | 15.7% → 10.9% | 16.0ms → 10.0ms | 16 → 10 | `Data.Scientific.toBoundedInteger` | `src/Data/Scientific.hs:772:1`           |
|  -19.2% | -5.00ms | 25.5% → 22.8% | 26.0ms → 21.0ms | 26 → 21 | `Data.Aeson.KeyMap.lookup`         | `src/Data/Aeson/KeyMap.hs:178:1`         |
|  -12.5% | -4.00ms | 31.4% → 30.4% | 32.0ms → 28.0ms | 32 → 28 | `Data.Aeson.Types.Internal.<?>`    | `src/Data/Aeson/Types/Internal.hs:659:1` |
|  +80.0% | +4.00ms |   4.9% → 9.8% |   5.0ms → 9.0ms |   5 → 9 | `Main.parseJSONList`               | `Profile.hs:50:10`                       |
| +100.0% | +3.00ms |   2.9% → 6.5% |   3.0ms → 6.0ms |   3 → 6 | `Main.parseJSONList`               | `Profile.hs:71:10`                       |

##### `Main.parseJSON` (`Profile.hs:96:3`)

| Change |   Delta |      % |           Time | Samples | Callee                                 | Location                                 |
| -----: | ------: | -----: | -------------: | ------: | -------------------------------------- | ---------------------------------------- |
| -80.0% | -8.00ms | 100.0% | 10.0ms → 2.0ms |  10 → 2 | `Data.Aeson.Types.FromJSON.withObject` | `src/Data/Aeson/Types/FromJSON.hs:720:1` |

##### `Main.keywords` (`Profile.hs:136:1`)

| Change |   Delta |             % |            Time | Samples | Callee       | Location           |
| -----: | ------: | ------------: | --------------: | ------: | ------------ | ------------------ |
|  +6.7% | +1.00ms | 11.9% → 13.3% | 15.0ms → 16.0ms | 15 → 16 | `Main.tally` | `Profile.hs:112:1` |

##### `Main.parseJSON` (`Profile.hs:48:3`)

| Change |   Delta |      % |             Time |  Samples | Callee                                 | Location                                 |
| -----: | ------: | -----: | ---------------: | -------: | -------------------------------------- | ---------------------------------------- |
|  -5.8% | -6.00ms | 100.0% | 103.0ms → 97.0ms | 103 → 97 | `Data.Aeson.Types.FromJSON.withObject` | `src/Data/Aeson/Types/FromJSON.hs:720:1` |

##### `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`)

| Change |   Delta |             % |          Time | Samples | Callee                      | Location                        |
| -----: | ------: | ------------: | ------------: | ------: | --------------------------- | ------------------------------- |
| -50.0% | -2.00ms | 25.0% → 20.0% | 4.0ms → 2.0ms |   4 → 2 | `Data.Scientific.normalize` | `src/Data/Scientific.hs:1102:1` |
| -25.0% | -1.00ms | 25.0% → 30.0% | 4.0ms → 3.0ms |   4 → 3 | `Utils.magnitude`           | `src/Utils.hs:78:1`             |

##### `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`)

| Change |   Delta |             % |           Time | Samples | Callee                               | Location                                 |
| -----: | ------: | ------------: | -------------: | ------: | ------------------------------------ | ---------------------------------------- |
| -10.0% | -1.00ms | 31.3% → 32.1% | 10.0ms → 9.0ms |  10 → 9 | `Data.Aeson.Types.FromJSON.withText` | `src/Data/Aeson/Types/FromJSON.hs:731:1` |
| -50.0% | -1.00ms |   6.3% → 3.6% |  2.0ms → 1.0ms |   2 → 1 | `Main.parseJSONList`                 | `Profile.hs:71:10`                       |

##### `Main.toEncoding` (`Profile.hs:83:10`)

| Change |   Delta |             % |            Time | Samples | Callee                               | Location                                    |
| -----: | ------: | ------------: | --------------: | ------: | ------------------------------------ | ------------------------------------------- |
|  -8.0% | -2.00ms | 89.3% → 92.0% | 25.0ms → 23.0ms | 25 → 23 | `Data.Aeson.Encoding.Internal.value` | `src/Data/Aeson/Encoding/Internal.hs:441:1` |
| -33.3% | -1.00ms |  10.7% → 8.0% |   3.0ms → 2.0ms |   3 → 2 | `Main.toJSON`                        | `Profile.hs:84:3`                           |

##### `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`)

| Change |   Delta |             % |            Time | Samples | Callee            | Location           |
| -----: | ------: | ------------: | --------------: | ------: | ----------------- | ------------------ |
| -10.7% | -3.00ms | 96.6% → 96.2% | 28.0ms → 25.0ms | 28 → 25 | `Main.toEncoding` | `Profile.hs:83:10` |

##### `Main.parseJSONList` (`Profile.hs:108:10`)

| Change |   Delta |      % |          Time | Samples | Callee                                | Location                                 |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------- | ---------------------------------------- |
| -60.0% | -3.00ms | 100.0% | 5.0ms → 2.0ms |   5 → 2 | `Data.Aeson.Types.FromJSON.withArray` | `src/Data/Aeson/Types/FromJSON.hs:742:1` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in wall time spent in their leaf frame.

Common call stack: `Main.main` (`Profile.hs:146:1`)

|  Change |    Delta |             % |              Time |       Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------: | -------: | ------------: | ----------------: | ------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +53.2% | +33.00ms |   1.7% → 2.7% |   62.0ms → 95.0ms |       62 → 95 | `Data.Integer.Conversion.byteStringToInteger` (`src/Data/Integer/Conversion.hs:104:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  +34.5% | +19.00ms |   1.5% → 2.1% |   55.0ms → 74.0ms |       55 → 74 | `Data.Aeson.Internal.Unescape.unescapeText` (`src/Data/Aeson/Internal/Unescape.hs:34:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  +10.8% | +16.00ms |   4.1% → 4.7% | 148.0ms → 164.0ms |     148 → 164 | `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|   +0.4% |  +6.00ms | 37.2% → 38.2% |     1.33s → 1.34s | 1,337 → 1,343 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| +150.0% |  +6.00ms |   0.1% → 0.3% |    4.0ms → 10.0ms |        4 → 10 | `Main.tally` (`Profile.hs:112:1`) ← `Main.summarize` (118:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| +250.0% |  +5.00ms |   0.1% → 0.2% |     2.0ms → 7.0ms |         2 → 7 | `Data.Aeson.Encoding.Builder.array` (`src/Data/Aeson/Encoding/Builder.hs:86:1`) ← `Data.Aeson.Encoding.Builder.text` (109:1) ← `Data.Aeson.Encoding.Builder.object` (96:1) ← `Data.Aeson.Encoding.Builder.encodeToBuilder` (68:1) ← `Data.Aeson.Encoding.Internal.value` (`src/Data/Aeson/Encoding/Internal.hs:441:1`) ← `Main.toEncoding` (`Profile.hs:83:10`) ← `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`) ← `Main.roundTrip` (`Profile.hs:139:1`)                                                                                                                                                                                                                                                                                                     |
| +100.0% |  +3.00ms |   0.1% → 0.2% |     3.0ms → 6.0ms |         3 → 6 | `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`) ← `Main.parseJSONList` (`Profile.hs:71:10`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                         |
|  +66.7% |  +2.00ms |          0.1% |     3.0ms → 5.0ms |         3 → 5 | `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                                                                                          |
|  +50.0% |  +2.00ms |   0.1% → 0.2% |     4.0ms → 6.0ms |         4 → 6 | `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`) ← `Main.parseJSONList` (`Profile.hs:50:10`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                         |
| +200.0% |  +2.00ms |  <0.1% → 0.1% |     1.0ms → 3.0ms |         1 → 3 | `Data.Aeson.Types.Internal.modifyFailure` (`src/Data/Aeson/Types/Internal.hs:671:1`) ← `Data.Aeson.Types.Internal.prependFailure` (681:1) ← `Data.Aeson.Types.Internal.<?>` (659:1) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                  |
|     new |  +2.00ms |   0.0% → 0.1% |       0ms → 2.0ms |         0 → 2 | `Data.Aeson.Encoding.Builder.array` (`src/Data/Aeson/Encoding/Builder.hs:86:1`) ← `Data.Aeson.Encoding.Builder.object` (96:1) ← `Data.Aeson.Encoding.Builder.encodeToBuilder` (68:1) ← `Data.Aeson.Encoding.Internal.value` (`src/Data/Aeson/Encoding/Internal.hs:441:1`) ← `Main.toEncoding` (`Profile.hs:83:10`) ← `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`) ← `Main.roundTrip` (`Profile.hs:139:1`)                                                                                                                                                                                                                                                                                                                                                  |
|     new |  +2.00ms |   0.0% → 0.1% |       0ms → 2.0ms |         0 → 2 | `Data.Aeson.Types.FromJSON.parseIndexedJSON` (`src/Data/Aeson/Types/FromJSON.hs:171:1`) ← `Data.Aeson.Types.FromJSON.withArray` (742:1) ← `Main.parseJSONList` (`Profile.hs:50:10`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                  |
|     new |  +2.00ms |   0.0% → 0.1% |       0ms → 2.0ms |         0 → 2 | `Data.Aeson.Types.Internal.prependFailure` (`src/Data/Aeson/Types/Internal.hs:681:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                |
|   +6.7% |  +1.00ms |   0.4% → 0.5% |   15.0ms → 16.0ms |       15 → 16 | `Main.tally` (`Profile.hs:112:1`) ← `Main.keywords` (136:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| +100.0% |  +1.00ms |  <0.1% → 0.1% |     1.0ms → 2.0ms |         1 → 2 | `Data.Aeson.Types.FromJSON.withText` (`src/Data/Aeson/Types/FromJSON.hs:731:1`) ← `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` (923:1) ← `Data.Aeson.Types.FromJSON..:?` (859:1) ← `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `Data.Integer.Conversion.byteStringToInteger` (`src/Data/Integer/Conversion.hs:104:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.roundTrip` (`Profile.hs:139:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `Data.Aeson.Key.toText` (`src/Data/Aeson/Key.hs:57:1`) ← `Data.Aeson.Encoding.Builder.object` (`src/Data/Aeson/Encoding/Builder.hs:96:1`) ← `Data.Aeson.Encoding.Builder.encodeToBuilder` (68:1) ← `Data.Aeson.Encoding.Internal.value` (`src/Data/Aeson/Encoding/Internal.hs:441:1`) ← `Main.toEncoding` (`Profile.hs:83:10`) ← `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`) ← `Main.roundTrip` (`Profile.hs:139:1`)                                                                                                                                                                                                                                                                                                                                      |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `Data.Aeson.Encoding.Builder.encodeToBuilder` (`src/Data/Aeson/Encoding/Builder.hs:68:1`) ← `Data.Aeson.Encoding.Internal.value` (`src/Data/Aeson/Encoding/Internal.hs:441:1`) ← `Main.toEncoding` (`Profile.hs:83:10`) ← `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`) ← `Main.roundTrip` (`Profile.hs:139:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `Main.pad` (`Profile.hs:142:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `Main.parseJSON` (`Profile.hs:51:3`) ← `Data.Aeson.Types.FromJSON.parseIndexedJSON` (`src/Data/Aeson/Types/FromJSON.hs:171:1`) ← `Data.Aeson.Types.FromJSON.withArray` (742:1) ← `Main.parseJSONList` (`Profile.hs:50:10`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                           |

### Improvements

Call stacks with the largest decrease in wall time spent in their leaf frame.

Common call stack: `Main.main` (`Profile.hs:146:1`)

|  Change |    Delta |             % |              Time |   Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------: | -------: | ------------: | ----------------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -13.5% | -65.00ms | 13.4% → 11.9% | 482.0ms → 417.0ms | 482 → 417 | `Data.Aeson.KeyMap.fromList` (`src/Data/Aeson/KeyMap.hs:247:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  -18.0% | -20.00ms |   3.1% → 2.6% |  111.0ms → 91.0ms |  111 → 91 | `Data.Aeson.Internal.Text.unsafeDecodeASCII` (`src/Data/Aeson/Internal/Text.hs:29:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|   -6.3% |  -7.00ms |   3.1% → 3.0% | 111.0ms → 104.0ms | 111 → 104 | `Main.keywords` (`Profile.hs:136:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  -87.5% |  -7.00ms |  0.2% → <0.1% |     8.0ms → 1.0ms |     8 → 1 | `Data.Aeson.Encoding.Builder.object` (`src/Data/Aeson/Encoding/Builder.hs:96:1`) ← `Data.Aeson.Encoding.Builder.encodeToBuilder` (68:1) ← `Data.Aeson.Encoding.Internal.value` (`src/Data/Aeson/Encoding/Internal.hs:441:1`) ← `Main.toEncoding` (`Profile.hs:83:10`) ← `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`) ← `Main.roundTrip` (`Profile.hs:139:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -85.7% |  -6.00ms |  0.2% → <0.1% |     7.0ms → 1.0ms |     7 → 1 | `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  -62.5% |  -5.00ms |   0.2% → 0.1% |     8.0ms → 3.0ms |     8 → 3 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.roundTrip` (`Profile.hs:139:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  -16.0% |  -4.00ms |   0.7% → 0.6% |   25.0ms → 21.0ms |   25 → 21 | `Data.Aeson.KeyMap.lookup` (`src/Data/Aeson/KeyMap.hs:178:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                                 |
| removed |  -3.00ms |   0.1% → 0.0% |       3.0ms → 0ms |     3 → 0 | `Data.Aeson.Internal.Text.unsafeDecodeASCII` (`src/Data/Aeson/Internal/Text.hs:29:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.roundTrip` (`Profile.hs:139:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -33.3% |  -2.00ms |   0.2% → 0.1% |     6.0ms → 4.0ms |     6 → 4 | `Data.Aeson.Encoding.Builder.text` (`src/Data/Aeson/Encoding/Builder.hs:109:1`) ← `Data.Aeson.Encoding.Builder.object` (96:1) ← `Data.Aeson.Encoding.Builder.encodeToBuilder` (68:1) ← `Data.Aeson.Encoding.Internal.value` (`src/Data/Aeson/Encoding/Internal.hs:441:1`) ← `Main.toEncoding` (`Profile.hs:83:10`) ← `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`) ← `Main.roundTrip` (`Profile.hs:139:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| removed |  -2.00ms |   0.1% → 0.0% |       2.0ms → 0ms |     2 → 0 | `Data.Aeson.Types.FromJSON.withText` (`src/Data/Aeson/Types/FromJSON.hs:731:1`) ← `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` (923:1) ← `Data.Aeson.Types.FromJSON..:?` (859:1) ← `Data.Aeson.Types.Internal.modifyFailure` (`src/Data/Aeson/Types/Internal.hs:671:1`) ← `Data.Aeson.Types.Internal.prependFailure` (681:1) ← `Data.Aeson.Types.Internal.<?>` (659:1) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) |
|  -18.2% |  -2.00ms |          0.3% |    11.0ms → 9.0ms |    11 → 9 | `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                    |
|  -28.6% |  -2.00ms |   0.2% → 0.1% |     7.0ms → 5.0ms |     7 → 5 | `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                           |
| removed |  -2.00ms |   0.1% → 0.0% |       2.0ms → 0ms |     2 → 0 | `Data.Aeson.Encoding.Builder.array` (`src/Data/Aeson/Encoding/Builder.hs:86:1`) ← `Data.Aeson.Encoding.Builder.encodeToBuilder` (68:1) ← `Data.Aeson.Encoding.Internal.value` (`src/Data/Aeson/Encoding/Internal.hs:441:1`) ← `Main.toEncoding` (`Profile.hs:83:10`) ← `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`) ← `Main.roundTrip` (`Profile.hs:139:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -50.0% |  -2.00ms |          0.1% |     4.0ms → 2.0ms |     4 → 2 | `Data.Scientific.normalize` (`src/Data/Scientific.hs:1102:1`) ← `Data.Scientific.toBoundedInteger` (772:1) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                    |
| removed |  -2.00ms |   0.1% → 0.0% |       2.0ms → 0ms |     2 → 0 | `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`) ← `Main.parseJSONList` (`Profile.hs:108:10`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:96:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.roundTrip` (`Profile.hs:139:1`)                                                                                                                                                                                                         |
|  -50.0% |  -1.00ms |  0.1% → <0.1% |     2.0ms → 1.0ms |     2 → 1 | `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.roundTrip` (`Profile.hs:139:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|   -7.7% |  -1.00ms |   0.4% → 0.3% |   13.0ms → 12.0ms |   13 → 12 | `Main.summarize` (`Profile.hs:118:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  -25.0% |  -1.00ms |          0.1% |     4.0ms → 3.0ms |     4 → 3 | `Utils.magnitude` (`src/Utils.hs:78:1`) ← `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                 |
| removed |  -1.00ms |  <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:96:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.roundTrip` (`Profile.hs:139:1`)                                                                                                                                                                                                                                                                   |
| removed |  -1.00ms |  <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `Data.Aeson.Types.Internal.modifyFailure` (`src/Data/Aeson/Types/Internal.hs:671:1`) ← `Data.Aeson.Types.Internal.prependFailure` (681:1) ← `Data.Aeson.Types.Internal.<?>` (659:1) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:96:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.roundTrip` (`Profile.hs:139:1`)                                                                                                                                                   |
