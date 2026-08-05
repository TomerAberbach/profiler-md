# Wall time profile diff

Took 3.59s → 3.51s (-77.00ms, -2.1%) over 3,592 samples → 3,515 samples (1.0ms per sample).

| Category          | Change |    Delta |             % |            Time |       Samples |
| ----------------- | -----: | -------: | ------------: | --------------: | ------------: |
| Ours              |  -1.6% | -40.00ms | 69.7% → 70.1% |   2.50s → 2.46s | 2,503 → 2,463 |
| Garbage collector |  -4.0% | -43.00ms | 29.9% → 29.4% |   1.07s → 1.03s | 1,075 → 1,032 |
| Native            | +42.9% |  +6.00ms |   0.4% → 0.6% | 14.0ms → 20.0ms |       14 → 20 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in wall time spent directly in the function body, excluding callees.

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
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `Data.Aeson.Encoding.Builder.encodeToBuilder`     | `src/Data/Aeson/Encoding/Builder.hs:68:1`         |
|  +50.0% |  +1.00ms |          0.1% |     2.0ms → 3.0ms |         2 → 3 | `Data.Aeson.Types.Internal.modifyFailure`         | `src/Data/Aeson/Types/Internal.hs:671:1`          |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `Data.Aeson.Key.toText`                           | `src/Data/Aeson/Key.hs:57:1`                      |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `Main.pad`                                        | `Profile.hs:142:1`                                |

#### Improvements

Functions with the largest decrease in wall time spent directly in the function body, excluding callees.

|  Change |    Delta |             % |              Time |       Samples | Function                                            | Location                                   |
| ------: | -------: | ------------: | ----------------: | ------------: | --------------------------------------------------- | ------------------------------------------ |
|  -13.8% | -67.00ms | 13.5% → 11.9% | 484.0ms → 417.0ms |     484 → 417 | `Data.Aeson.KeyMap.fromList`                        | `src/Data/Aeson/KeyMap.hs:247:1`           |
|   -4.0% | -43.00ms | 29.9% → 29.4% |     1.07s → 1.03s | 1,075 → 1,032 | `GC.GC`                                             | `<unknown>`                                |
|  -20.2% | -23.00ms |   3.2% → 2.6% |  114.0ms → 91.0ms |      114 → 91 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`        | `src/Data/Aeson/Internal/Text.hs:29:1`     |
|   -6.3% |  -7.00ms |   3.1% → 3.0% | 111.0ms → 104.0ms |     111 → 104 | `Main.keywords`                                     | `Profile.hs:136:1`                         |
|  -87.5% |  -7.00ms |  0.2% → <0.1% |     8.0ms → 1.0ms |         8 → 1 | `Data.Aeson.Encoding.Builder.object`                | `src/Data/Aeson/Encoding/Builder.hs:96:1`  |
|  -85.7% |  -6.00ms |  0.2% → <0.1% |     7.0ms → 1.0ms |         7 → 1 | `Data.Aeson.Types.FromJSON..:`                      | `src/Data/Aeson/Types/FromJSON.hs:849:1`   |
|  -19.2% |  -5.00ms |   0.7% → 0.6% |   26.0ms → 21.0ms |       26 → 21 | `Data.Aeson.KeyMap.lookup`                          | `src/Data/Aeson/KeyMap.hs:178:1`           |
|  -66.7% |  -4.00ms |   0.2% → 0.1% |     6.0ms → 2.0ms |         6 → 2 | `SYSTEM.SYSTEM`                                     | `<unknown>`                                |
|  -37.5% |  -3.00ms |   0.2% → 0.1% |     8.0ms → 5.0ms |         8 → 5 | `Data.Scientific.toBoundedInteger`                  | `src/Data/Scientific.hs:772:1`             |
|  -22.2% |  -2.00ms |   0.3% → 0.2% |     9.0ms → 7.0ms |         9 → 7 | `Data.Aeson.Types.FromJSON.withText`                | `src/Data/Aeson/Types/FromJSON.hs:731:1`   |
|  -18.2% |  -2.00ms |          0.3% |    11.0ms → 9.0ms |        11 → 9 | `Data.Aeson.Types.Internal.<?>`                     | `src/Data/Aeson/Types/Internal.hs:659:1`   |
|  -28.6% |  -2.00ms |   0.2% → 0.1% |     7.0ms → 5.0ms |         7 → 5 | `Data.Aeson.Encoding.Builder.text`                  | `src/Data/Aeson/Encoding/Builder.hs:109:1` |
|  -50.0% |  -2.00ms |          0.1% |     4.0ms → 2.0ms |         4 → 2 | `Data.Scientific.normalize`                         | `src/Data/Scientific.hs:1102:1`            |
|  -50.0% |  -1.00ms |  0.1% → <0.1% |     2.0ms → 1.0ms |         2 → 1 | `Main.main`                                         | `Profile.hs:146:1`                         |
| removed |  -1.00ms |  <0.1% → 0.0% |       1.0ms → 0ms |         1 → 0 | `Main.roundTrip`                                    | `Profile.hs:139:1`                         |
|   -7.7% |  -1.00ms |   0.4% → 0.3% |   13.0ms → 12.0ms |       13 → 12 | `Main.summarize`                                    | `Profile.hs:118:1`                         |
|   -6.3% |  -1.00ms |          0.4% |   16.0ms → 15.0ms |       16 → 15 | `Data.Aeson.Types.FromJSON.explicitParseField`      | `src/Data/Aeson/Types/FromJSON.hs:917:1`   |
|  -25.0% |  -1.00ms |          0.1% |     4.0ms → 3.0ms |         4 → 3 | `Utils.magnitude`                                   | `src/Utils.hs:78:1`                        |
|  -50.0% |  -1.00ms |  0.1% → <0.1% |     2.0ms → 1.0ms |         2 → 1 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1`   |
| removed |  -1.00ms |  <0.1% → 0.0% |       1.0ms → 0ms |         1 → 0 | `Main.parseJSONList`                                | `Profile.hs:50:10`                         |

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
|   -7.7% |  -1.00ms |   0.4% → 0.3% |   13.0ms → 12.0ms |   13 → 12 | `Main.summarize`                                    | `Profile.hs:118:1`                         |
|   -6.3% |  -1.00ms |          0.4% |   16.0ms → 15.0ms |   16 → 15 | `Data.Aeson.Types.FromJSON.explicitParseField`      | `src/Data/Aeson/Types/FromJSON.hs:917:1`   |
|  -25.0% |  -1.00ms |          0.1% |     4.0ms → 3.0ms |     4 → 3 | `Utils.magnitude`                                   | `src/Utils.hs:78:1`                        |
|  -50.0% |  -1.00ms |  0.1% → <0.1% |     2.0ms → 1.0ms |     2 → 1 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1`   |
| removed |  -1.00ms |  <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `Main.parseJSONList`                                | `Profile.hs:50:10`                         |
|  -16.7% |  -1.00ms |   0.2% → 0.1% |     6.0ms → 5.0ms |     6 → 5 | `Main.top`                                          | `Profile.hs:115:1`                         |

##### Garbage collector

| Change |    Delta |             % |          Time |       Samples | Function | Location    |
| -----: | -------: | ------------: | ------------: | ------------: | -------- | ----------- |
|  -4.0% | -43.00ms | 29.9% → 29.4% | 1.07s → 1.03s | 1,075 → 1,032 | `GC.GC`  | `<unknown>` |

### Total time

#### Regressions

Functions with the largest increase in total wall time spent in the function and all its callees.

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
|     new |  +1.00ms |  0.0% → <0.1% |     0ms → 1.0ms |         0 → 1 | `Data.Aeson.Key.toText`                           | `src/Data/Aeson/Key.hs:57:1`                      |
|     new |  +1.00ms |  0.0% → <0.1% |     0ms → 1.0ms |         0 → 1 | `Main.pad`                                        | `Profile.hs:142:1`                                |

#### Improvements

Functions with the largest decrease in total wall time spent in the function and all its callees.

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
