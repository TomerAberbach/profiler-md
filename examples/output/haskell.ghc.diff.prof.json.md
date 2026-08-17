# Wall time profile diff

Took 3.63s → 4.09s (+464.00ms, +12.8%) over 3,630 samples → 4,094 samples (1.0ms per sample).

| Category          | Change |     Delta |             % |            Time |       Samples |
| ----------------- | -----: | --------: | ------------: | --------------: | ------------: |
| Ours              |  +8.0% | +208.00ms | 71.2% → 68.2% |   2.58s → 2.79s | 2,586 → 2,794 |
| Garbage collector | +25.2% | +258.00ms | 28.2% → 31.3% |   1.02s → 1.28s | 1,024 → 1,282 |
| Native            | -10.0% |   -2.00ms |   0.6% → 0.4% | 20.0ms → 18.0ms |       20 → 18 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in wall time spent directly in the function body, excluding callees.

|  Change |     Delta |             % |              Time |       Samples | Function                                            | Location                                          |
| ------: | --------: | ------------: | ----------------: | ------------: | --------------------------------------------------- | ------------------------------------------------- |
|  +25.2% | +258.00ms | 28.2% → 31.3% |     1.02s → 1.28s | 1,024 → 1,282 | `GC.GC`                                             | `<unknown>`                                       |
|  +15.5% |  +67.00ms | 11.9% → 12.2% | 431.0ms → 498.0ms |     431 → 498 | `Data.Aeson.KeyMap.fromList`                        | `src/Data/Aeson/KeyMap.hs:247:1`                  |
|   +3.9% |  +56.00ms | 39.3% → 36.2% |     1.42s → 1.48s | 1,426 → 1,482 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens`   | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
|  +42.9% |  +39.00ms |   2.5% → 3.2% |  91.0ms → 130.0ms |      91 → 130 | `Main.keywords`                                     | `Profile.hs:136:1`                                |
|  +19.6% |  +22.00ms |   3.1% → 3.3% | 112.0ms → 134.0ms |     112 → 134 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`        | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|  +66.7% |  +14.00ms |   0.6% → 0.9% |   21.0ms → 35.0ms |       21 → 35 | `Data.Aeson.KeyMap.lookup`                          | `src/Data/Aeson/KeyMap.hs:178:1`                  |
|  +16.2% |  +11.00ms |          1.9% |   68.0ms → 79.0ms |       68 → 79 | `Data.Integer.Conversion.byteStringToInteger`       | `src/Data/Integer/Conversion.hs:104:1`            |
|  +15.6% |  +10.00ms |          1.8% |   64.0ms → 74.0ms |       64 → 74 | `Data.Aeson.Internal.Unescape.unescapeText`         | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
|  +72.7% |   +8.00ms |   0.3% → 0.5% |   11.0ms → 19.0ms |       11 → 19 | `Main.summarize`                                    | `Profile.hs:118:1`                                |
|  +33.3% |   +7.00ms |   0.6% → 0.7% |   21.0ms → 28.0ms |       21 → 28 | `Main.tally`                                        | `Profile.hs:112:1`                                |
|  +83.3% |   +5.00ms |   0.2% → 0.3% |    6.0ms → 11.0ms |        6 → 11 | `Data.Aeson.Types.FromJSON..:`                      | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
|  +60.0% |   +3.00ms |   0.1% → 0.2% |     5.0ms → 8.0ms |         5 → 8 | `SYSTEM.SYSTEM`                                     | `<unknown>`                                       |
| +150.0% |   +3.00ms |          0.1% |     2.0ms → 5.0ms |         2 → 5 | `Data.Aeson.Types.Internal.modifyFailure`           | `src/Data/Aeson/Types/Internal.hs:671:1`          |
| +300.0% |   +3.00ms |  <0.1% → 0.1% |     1.0ms → 4.0ms |         1 → 4 | `Data.Aeson.Encoding.Builder.object`                | `src/Data/Aeson/Encoding/Builder.hs:96:1`         |
|     new |   +3.00ms |   0.0% → 0.1% |       0ms → 3.0ms |         0 → 3 | `Data.Aeson.Encoding.Builder.encodeToBuilder`       | `src/Data/Aeson/Encoding/Builder.hs:68:1`         |
|  +33.3% |   +3.00ms |   0.2% → 0.3% |    9.0ms → 12.0ms |        9 → 12 | `Data.Aeson.Encoding.Builder.text`                  | `src/Data/Aeson/Encoding/Builder.hs:109:1`        |
|     new |   +2.00ms |  0.0% → <0.1% |       0ms → 2.0ms |         0 → 2 | `Data.Aeson.encode`                                 | `src/Data/Aeson.hs:187:1`                         |
| +100.0% |   +2.00ms |          0.1% |     2.0ms → 4.0ms |         2 → 4 | `Data.Aeson.Encoding.Builder.unquoted`              | `src/Data/Aeson/Encoding/Builder.hs:113:1`        |
|  +20.0% |   +1.00ms |          0.1% |     5.0ms → 6.0ms |         5 → 6 | `Main.main`                                         | `Profile.hs:146:1`                                |
|  +33.3% |   +1.00ms |          0.1% |     3.0ms → 4.0ms |         3 → 4 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1`          |

##### Ours

|  Change |    Delta |             % |              Time |       Samples | Function                                            | Location                                          |
| ------: | -------: | ------------: | ----------------: | ------------: | --------------------------------------------------- | ------------------------------------------------- |
|  +15.5% | +67.00ms | 11.9% → 12.2% | 431.0ms → 498.0ms |     431 → 498 | `Data.Aeson.KeyMap.fromList`                        | `src/Data/Aeson/KeyMap.hs:247:1`                  |
|   +3.9% | +56.00ms | 39.3% → 36.2% |     1.42s → 1.48s | 1,426 → 1,482 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens`   | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
|  +42.9% | +39.00ms |   2.5% → 3.2% |  91.0ms → 130.0ms |      91 → 130 | `Main.keywords`                                     | `Profile.hs:136:1`                                |
|  +19.6% | +22.00ms |   3.1% → 3.3% | 112.0ms → 134.0ms |     112 → 134 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`        | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|  +66.7% | +14.00ms |   0.6% → 0.9% |   21.0ms → 35.0ms |       21 → 35 | `Data.Aeson.KeyMap.lookup`                          | `src/Data/Aeson/KeyMap.hs:178:1`                  |
|  +16.2% | +11.00ms |          1.9% |   68.0ms → 79.0ms |       68 → 79 | `Data.Integer.Conversion.byteStringToInteger`       | `src/Data/Integer/Conversion.hs:104:1`            |
|  +15.6% | +10.00ms |          1.8% |   64.0ms → 74.0ms |       64 → 74 | `Data.Aeson.Internal.Unescape.unescapeText`         | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
|  +72.7% |  +8.00ms |   0.3% → 0.5% |   11.0ms → 19.0ms |       11 → 19 | `Main.summarize`                                    | `Profile.hs:118:1`                                |
|  +33.3% |  +7.00ms |   0.6% → 0.7% |   21.0ms → 28.0ms |       21 → 28 | `Main.tally`                                        | `Profile.hs:112:1`                                |
|  +83.3% |  +5.00ms |   0.2% → 0.3% |    6.0ms → 11.0ms |        6 → 11 | `Data.Aeson.Types.FromJSON..:`                      | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
| +150.0% |  +3.00ms |          0.1% |     2.0ms → 5.0ms |         2 → 5 | `Data.Aeson.Types.Internal.modifyFailure`           | `src/Data/Aeson/Types/Internal.hs:671:1`          |
| +300.0% |  +3.00ms |  <0.1% → 0.1% |     1.0ms → 4.0ms |         1 → 4 | `Data.Aeson.Encoding.Builder.object`                | `src/Data/Aeson/Encoding/Builder.hs:96:1`         |
|     new |  +3.00ms |   0.0% → 0.1% |       0ms → 3.0ms |         0 → 3 | `Data.Aeson.Encoding.Builder.encodeToBuilder`       | `src/Data/Aeson/Encoding/Builder.hs:68:1`         |
|  +33.3% |  +3.00ms |   0.2% → 0.3% |    9.0ms → 12.0ms |        9 → 12 | `Data.Aeson.Encoding.Builder.text`                  | `src/Data/Aeson/Encoding/Builder.hs:109:1`        |
|     new |  +2.00ms |  0.0% → <0.1% |       0ms → 2.0ms |         0 → 2 | `Data.Aeson.encode`                                 | `src/Data/Aeson.hs:187:1`                         |
| +100.0% |  +2.00ms |          0.1% |     2.0ms → 4.0ms |         2 → 4 | `Data.Aeson.Encoding.Builder.unquoted`              | `src/Data/Aeson/Encoding/Builder.hs:113:1`        |
|  +20.0% |  +1.00ms |          0.1% |     5.0ms → 6.0ms |         5 → 6 | `Main.main`                                         | `Profile.hs:146:1`                                |
|  +33.3% |  +1.00ms |          0.1% |     3.0ms → 4.0ms |         3 → 4 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1`          |
|  +50.0% |  +1.00ms |          0.1% |     2.0ms → 3.0ms |         2 → 3 | `Utils.magnitude`                                   | `src/Utils.hs:78:1`                               |
| +100.0% |  +1.00ms |         <0.1% |     1.0ms → 2.0ms |         1 → 2 | `Data.Aeson.KeyMap.toList`                          | `src/Data/Aeson/KeyMap.hs:253:1`                  |

##### Garbage collector

| Change |     Delta |             % |          Time |       Samples | Function | Location    |
| -----: | --------: | ------------: | ------------: | ------------: | -------- | ----------- |
| +25.2% | +258.00ms | 28.2% → 31.3% | 1.02s → 1.28s | 1,024 → 1,282 | `GC.GC`  | `<unknown>` |

#### Improvements

Functions with the largest decrease in wall time spent directly in the function body, excluding callees.

|  Change |    Delta |            % |              Time |   Samples | Function                                       | Location                                     |
| ------: | -------: | -----------: | ----------------: | --------: | ---------------------------------------------- | -------------------------------------------- |
|  -10.8% | -23.00ms |  5.9% → 4.6% | 213.0ms → 190.0ms | 213 → 190 | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |
|  -33.3% |  -5.00ms |  0.4% → 0.2% |   15.0ms → 10.0ms |   15 → 10 | `PROFILING.OVERHEAD_of`                        | `<unknown>`                                  |
|  -66.7% |  -4.00ms | 0.2% → <0.1% |     6.0ms → 2.0ms |     6 → 2 | `Data.Scientific.normalize`                    | `src/Data/Scientific.hs:1102:1`              |
|  -42.9% |  -3.00ms |  0.2% → 0.1% |     7.0ms → 4.0ms |     7 → 4 | `Data.Aeson.Types.FromJSON.withText`           | `src/Data/Aeson/Types/FromJSON.hs:731:1`     |
|  -21.4% |  -3.00ms |  0.4% → 0.3% |   14.0ms → 11.0ms |   14 → 11 | `Data.Aeson.Types.FromJSON.withArray`          | `src/Data/Aeson/Types/FromJSON.hs:742:1`     |
|  -75.0% |  -3.00ms | 0.1% → <0.1% |     4.0ms → 1.0ms |     4 → 1 | `Data.Aeson.Types.Internal.prependFailure`     | `src/Data/Aeson/Types/Internal.hs:681:1`     |
|  -37.5% |  -3.00ms |  0.2% → 0.1% |     8.0ms → 5.0ms |     8 → 5 | `Main.top`                                     | `Profile.hs:115:1`                           |
| removed |  -3.00ms |  0.1% → 0.0% |       3.0ms → 0ms |     3 → 0 | `Main.toJSON`                                  | `Profile.hs:84:3`                            |
|  -42.9% |  -3.00ms |  0.2% → 0.1% |     7.0ms → 4.0ms |     7 → 4 | `Data.Aeson.Encoding.Builder.array`            | `src/Data/Aeson/Encoding/Builder.hs:86:1`    |
|  -10.0% |  -2.00ms |  0.6% → 0.4% |   20.0ms → 18.0ms |   20 → 18 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1`     |
|  -33.3% |  -2.00ms |  0.2% → 0.1% |     6.0ms → 4.0ms |     6 → 4 | `Data.Scientific.toBoundedInteger`             | `src/Data/Scientific.hs:772:1`               |
|  -10.0% |  -1.00ms |  0.3% → 0.2% |    10.0ms → 9.0ms |    10 → 9 | `Data.Aeson.Types.FromJSON.withObject`         | `src/Data/Aeson/Types/FromJSON.hs:720:1`     |
|  -20.0% |  -1.00ms |         0.1% |     5.0ms → 4.0ms |     5 → 4 | `Data.Aeson.Types.Internal.<?>`                | `src/Data/Aeson/Types/Internal.hs:659:1`     |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `Main.parseJSONList`                           | `Profile.hs:50:10`                           |

##### Ours

|  Change |    Delta |            % |              Time |   Samples | Function                                       | Location                                     |
| ------: | -------: | -----------: | ----------------: | --------: | ---------------------------------------------- | -------------------------------------------- |
|  -10.8% | -23.00ms |  5.9% → 4.6% | 213.0ms → 190.0ms | 213 → 190 | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |
|  -66.7% |  -4.00ms | 0.2% → <0.1% |     6.0ms → 2.0ms |     6 → 2 | `Data.Scientific.normalize`                    | `src/Data/Scientific.hs:1102:1`              |
|  -42.9% |  -3.00ms |  0.2% → 0.1% |     7.0ms → 4.0ms |     7 → 4 | `Data.Aeson.Types.FromJSON.withText`           | `src/Data/Aeson/Types/FromJSON.hs:731:1`     |
|  -21.4% |  -3.00ms |  0.4% → 0.3% |   14.0ms → 11.0ms |   14 → 11 | `Data.Aeson.Types.FromJSON.withArray`          | `src/Data/Aeson/Types/FromJSON.hs:742:1`     |
|  -75.0% |  -3.00ms | 0.1% → <0.1% |     4.0ms → 1.0ms |     4 → 1 | `Data.Aeson.Types.Internal.prependFailure`     | `src/Data/Aeson/Types/Internal.hs:681:1`     |
|  -37.5% |  -3.00ms |  0.2% → 0.1% |     8.0ms → 5.0ms |     8 → 5 | `Main.top`                                     | `Profile.hs:115:1`                           |
| removed |  -3.00ms |  0.1% → 0.0% |       3.0ms → 0ms |     3 → 0 | `Main.toJSON`                                  | `Profile.hs:84:3`                            |
|  -42.9% |  -3.00ms |  0.2% → 0.1% |     7.0ms → 4.0ms |     7 → 4 | `Data.Aeson.Encoding.Builder.array`            | `src/Data/Aeson/Encoding/Builder.hs:86:1`    |
|  -10.0% |  -2.00ms |  0.6% → 0.4% |   20.0ms → 18.0ms |   20 → 18 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1`     |
|  -33.3% |  -2.00ms |  0.2% → 0.1% |     6.0ms → 4.0ms |     6 → 4 | `Data.Scientific.toBoundedInteger`             | `src/Data/Scientific.hs:772:1`               |
|  -10.0% |  -1.00ms |  0.3% → 0.2% |    10.0ms → 9.0ms |    10 → 9 | `Data.Aeson.Types.FromJSON.withObject`         | `src/Data/Aeson/Types/FromJSON.hs:720:1`     |
|  -20.0% |  -1.00ms |         0.1% |     5.0ms → 4.0ms |     5 → 4 | `Data.Aeson.Types.Internal.<?>`                | `src/Data/Aeson/Types/Internal.hs:659:1`     |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `Main.parseJSONList`                           | `Profile.hs:50:10`                           |

### Total time

#### Regressions

Functions with the largest increase in total wall time spent in the function and all its callees.

| Change |     Delta |             % |              Time |       Samples | Function                                          | Location                                          |
| -----: | --------: | ------------: | ----------------: | ------------: | ------------------------------------------------- | ------------------------------------------------- |
| +12.8% | +464.00ms |        100.0% |     3.63s → 4.09s | 3,630 → 4,094 | `MAIN.MAIN`                                       | `<unknown>`                                       |
| +25.2% | +258.00ms | 28.2% → 31.3% |     1.02s → 1.28s | 1,024 → 1,282 | `GC.GC`                                           | `<unknown>`                                       |
|  +8.0% | +208.00ms | 71.2% → 68.2% |     2.58s → 2.79s | 2,586 → 2,794 | `Main.main`                                       | `Profile.hs:146:1`                                |
|  +6.1% | +148.00ms | 66.8% → 62.8% |     2.42s → 2.57s | 2,425 → 2,573 | `Data.Aeson.Decoding.eitherDecode`                | `src/Data/Aeson/Decoding.hs:79:1`                 |
|  +5.9% |  +99.00ms | 46.0% → 43.2% |     1.67s → 1.76s | 1,670 → 1,769 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| +15.5% |  +67.00ms | 11.9% → 12.2% | 431.0ms → 498.0ms |     431 → 498 | `Data.Aeson.KeyMap.fromList`                      | `src/Data/Aeson/KeyMap.hs:247:1`                  |
|  +6.5% |  +49.00ms | 20.8% → 19.6% | 755.0ms → 804.0ms |     755 → 804 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
| +43.4% |  +46.00ms |   2.9% → 3.7% | 106.0ms → 152.0ms |     106 → 152 | `Main.keywords`                                   | `Profile.hs:136:1`                                |
| +19.6% |  +22.00ms |   3.1% → 3.3% | 112.0ms → 134.0ms |     112 → 134 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
| +66.7% |  +14.00ms |   0.6% → 0.9% |   21.0ms → 35.0ms |       21 → 35 | `Data.Aeson.KeyMap.lookup`                        | `src/Data/Aeson/KeyMap.hs:178:1`                  |
| +16.2% |  +11.00ms |          1.9% |   68.0ms → 79.0ms |       68 → 79 | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
| +15.6% |  +10.00ms |          1.8% |   64.0ms → 74.0ms |       64 → 74 | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
| +50.0% |  +10.00ms |   0.6% → 0.7% |   20.0ms → 30.0ms |       20 → 30 | `Data.Aeson.Encoding.Builder.encodeToBuilder`     | `src/Data/Aeson/Encoding/Builder.hs:68:1`         |
| +50.0% |  +10.00ms |   0.6% → 0.7% |   20.0ms → 30.0ms |       20 → 30 | `Data.Aeson.Encoding.Internal.value`              | `src/Data/Aeson/Encoding/Internal.hs:441:1`       |
|  +9.0% |   +9.00ms |   2.8% → 2.7% | 100.0ms → 109.0ms |     100 → 109 | `Main.parseJSON`                                  | `Profile.hs:48:3`                                 |
| +32.0% |   +8.00ms |   0.7% → 0.8% |   25.0ms → 33.0ms |       25 → 33 | `Data.Aeson.encode`                               | `src/Data/Aeson.hs:187:1`                         |
| +33.3% |   +7.00ms |   0.6% → 0.7% |   21.0ms → 28.0ms |       21 → 28 | `Main.tally`                                      | `Profile.hs:112:1`                                |
| +36.8% |   +7.00ms |   0.5% → 0.6% |   19.0ms → 26.0ms |       19 → 26 | `Data.Aeson.Encoding.Builder.object`              | `src/Data/Aeson/Encoding/Builder.hs:96:1`         |
| +24.0% |   +6.00ms |   0.7% → 0.8% |   25.0ms → 31.0ms |       25 → 31 | `Main.toEncoding`                                 | `Profile.hs:83:10`                                |
|  +5.2% |   +5.00ms |   2.7% → 2.5% |  97.0ms → 102.0ms |      97 → 102 | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |

##### Ours

| Change |     Delta |             % |              Time |       Samples | Function                                          | Location                                          |
| -----: | --------: | ------------: | ----------------: | ------------: | ------------------------------------------------- | ------------------------------------------------- |
|  +8.0% | +208.00ms | 71.2% → 68.2% |     2.58s → 2.79s | 2,586 → 2,794 | `Main.main`                                       | `Profile.hs:146:1`                                |
|  +6.1% | +148.00ms | 66.8% → 62.8% |     2.42s → 2.57s | 2,425 → 2,573 | `Data.Aeson.Decoding.eitherDecode`                | `src/Data/Aeson/Decoding.hs:79:1`                 |
|  +5.9% |  +99.00ms | 46.0% → 43.2% |     1.67s → 1.76s | 1,670 → 1,769 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| +15.5% |  +67.00ms | 11.9% → 12.2% | 431.0ms → 498.0ms |     431 → 498 | `Data.Aeson.KeyMap.fromList`                      | `src/Data/Aeson/KeyMap.hs:247:1`                  |
|  +6.5% |  +49.00ms | 20.8% → 19.6% | 755.0ms → 804.0ms |     755 → 804 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
| +43.4% |  +46.00ms |   2.9% → 3.7% | 106.0ms → 152.0ms |     106 → 152 | `Main.keywords`                                   | `Profile.hs:136:1`                                |
| +19.6% |  +22.00ms |   3.1% → 3.3% | 112.0ms → 134.0ms |     112 → 134 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
| +66.7% |  +14.00ms |   0.6% → 0.9% |   21.0ms → 35.0ms |       21 → 35 | `Data.Aeson.KeyMap.lookup`                        | `src/Data/Aeson/KeyMap.hs:178:1`                  |
| +16.2% |  +11.00ms |          1.9% |   68.0ms → 79.0ms |       68 → 79 | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
| +15.6% |  +10.00ms |          1.8% |   64.0ms → 74.0ms |       64 → 74 | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
| +50.0% |  +10.00ms |   0.6% → 0.7% |   20.0ms → 30.0ms |       20 → 30 | `Data.Aeson.Encoding.Builder.encodeToBuilder`     | `src/Data/Aeson/Encoding/Builder.hs:68:1`         |
| +50.0% |  +10.00ms |   0.6% → 0.7% |   20.0ms → 30.0ms |       20 → 30 | `Data.Aeson.Encoding.Internal.value`              | `src/Data/Aeson/Encoding/Internal.hs:441:1`       |
|  +9.0% |   +9.00ms |   2.8% → 2.7% | 100.0ms → 109.0ms |     100 → 109 | `Main.parseJSON`                                  | `Profile.hs:48:3`                                 |
| +32.0% |   +8.00ms |   0.7% → 0.8% |   25.0ms → 33.0ms |       25 → 33 | `Data.Aeson.encode`                               | `src/Data/Aeson.hs:187:1`                         |
| +33.3% |   +7.00ms |   0.6% → 0.7% |   21.0ms → 28.0ms |       21 → 28 | `Main.tally`                                      | `Profile.hs:112:1`                                |
| +36.8% |   +7.00ms |   0.5% → 0.6% |   19.0ms → 26.0ms |       19 → 26 | `Data.Aeson.Encoding.Builder.object`              | `src/Data/Aeson/Encoding/Builder.hs:96:1`         |
| +24.0% |   +6.00ms |   0.7% → 0.8% |   25.0ms → 31.0ms |       25 → 31 | `Main.toEncoding`                                 | `Profile.hs:83:10`                                |
|  +5.2% |   +5.00ms |   2.7% → 2.5% |  97.0ms → 102.0ms |      97 → 102 | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
| +20.0% |   +5.00ms |          0.7% |   25.0ms → 30.0ms |       25 → 30 | `Main.summarize`                                  | `Profile.hs:118:1`                                |
|  +3.5% |   +4.00ms |   3.1% → 2.9% | 113.0ms → 117.0ms |     113 → 117 | `Data.Aeson.Types.FromJSON.ifromJSON`             | `src/Data/Aeson/Types/FromJSON.hs:839:1`          |

##### Garbage collector

| Change |     Delta |             % |          Time |       Samples | Function | Location    |
| -----: | --------: | ------------: | ------------: | ------------: | -------- | ----------- |
| +25.2% | +258.00ms | 28.2% → 31.3% | 1.02s → 1.28s | 1,024 → 1,282 | `GC.GC`  | `<unknown>` |

#### Improvements

Functions with the largest decrease in total wall time spent in the function and all its callees.

|  Change |   Delta |            % |            Time | Samples | Function                                            | Location                                  |
| ------: | ------: | -----------: | --------------: | ------: | --------------------------------------------------- | ----------------------------------------- |
|  -60.0% | -9.00ms |  0.4% → 0.1% |  15.0ms → 6.0ms |  15 → 6 | `Data.Aeson.Types.FromJSON.withText`                | `src/Data/Aeson/Types/FromJSON.hs:731:1`  |
|  -32.0% | -8.00ms |  0.7% → 0.4% | 25.0ms → 17.0ms | 25 → 17 | `Data.Aeson.Types.Internal.<?>`                     | `src/Data/Aeson/Types/Internal.hs:659:1`  |
|  -33.3% | -5.00ms |  0.4% → 0.2% | 15.0ms → 10.0ms | 15 → 10 | `PROFILING.OVERHEAD_of`                             | `<unknown>`                               |
|  -41.7% | -5.00ms |  0.3% → 0.2% |  12.0ms → 7.0ms |  12 → 7 | `Main.parseJSON`                                    | `Profile.hs:96:3`                         |
|  -45.5% | -5.00ms |  0.3% → 0.1% |  11.0ms → 6.0ms |  11 → 6 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1`  |
|  -45.5% | -5.00ms |  0.3% → 0.1% |  11.0ms → 6.0ms |  11 → 6 | `Data.Aeson.Types.FromJSON..:?`                     | `src/Data/Aeson/Types/FromJSON.hs:859:1`  |
|  -35.7% | -5.00ms |  0.4% → 0.2% |  14.0ms → 9.0ms |  14 → 9 | `Data.Scientific.toBoundedInteger`                  | `src/Data/Scientific.hs:772:1`            |
|  -66.7% | -4.00ms | 0.2% → <0.1% |   6.0ms → 2.0ms |   6 → 2 | `Data.Scientific.normalize`                         | `src/Data/Scientific.hs:1102:1`           |
|  -80.0% | -4.00ms | 0.1% → <0.1% |   5.0ms → 1.0ms |   5 → 1 | `Main.toJSON`                                       | `Profile.hs:84:3`                         |
|  -75.0% | -3.00ms | 0.1% → <0.1% |   4.0ms → 1.0ms |   4 → 1 | `Main.parseJSONList`                                | `Profile.hs:108:10`                       |
| removed | -3.00ms |  0.1% → 0.0% |     3.0ms → 0ms |   3 → 0 | `Main.parseJSONList`                                | `Profile.hs:50:10`                        |
|  -37.5% | -3.00ms |  0.2% → 0.1% |   8.0ms → 5.0ms |   8 → 5 | `Main.top`                                          | `Profile.hs:115:1`                        |
|  -11.1% | -2.00ms |  0.5% → 0.4% | 18.0ms → 16.0ms | 18 → 16 | `Data.Aeson.Types.FromJSON.withArray`               | `src/Data/Aeson/Types/FromJSON.hs:742:1`  |
|   -9.1% | -1.00ms |  0.3% → 0.2% | 11.0ms → 10.0ms | 11 → 10 | `Data.Aeson.Types.Internal.prependFailure`          | `src/Data/Aeson/Types/Internal.hs:681:1`  |
|  -12.5% | -1.00ms |         0.2% |   8.0ms → 7.0ms |   8 → 7 | `Data.Aeson.Encoding.Builder.array`                 | `src/Data/Aeson/Encoding/Builder.hs:86:1` |

##### Ours

|  Change |   Delta |            % |            Time | Samples | Function                                            | Location                                  |
| ------: | ------: | -----------: | --------------: | ------: | --------------------------------------------------- | ----------------------------------------- |
|  -60.0% | -9.00ms |  0.4% → 0.1% |  15.0ms → 6.0ms |  15 → 6 | `Data.Aeson.Types.FromJSON.withText`                | `src/Data/Aeson/Types/FromJSON.hs:731:1`  |
|  -32.0% | -8.00ms |  0.7% → 0.4% | 25.0ms → 17.0ms | 25 → 17 | `Data.Aeson.Types.Internal.<?>`                     | `src/Data/Aeson/Types/Internal.hs:659:1`  |
|  -41.7% | -5.00ms |  0.3% → 0.2% |  12.0ms → 7.0ms |  12 → 7 | `Main.parseJSON`                                    | `Profile.hs:96:3`                         |
|  -45.5% | -5.00ms |  0.3% → 0.1% |  11.0ms → 6.0ms |  11 → 6 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1`  |
|  -45.5% | -5.00ms |  0.3% → 0.1% |  11.0ms → 6.0ms |  11 → 6 | `Data.Aeson.Types.FromJSON..:?`                     | `src/Data/Aeson/Types/FromJSON.hs:859:1`  |
|  -35.7% | -5.00ms |  0.4% → 0.2% |  14.0ms → 9.0ms |  14 → 9 | `Data.Scientific.toBoundedInteger`                  | `src/Data/Scientific.hs:772:1`            |
|  -66.7% | -4.00ms | 0.2% → <0.1% |   6.0ms → 2.0ms |   6 → 2 | `Data.Scientific.normalize`                         | `src/Data/Scientific.hs:1102:1`           |
|  -80.0% | -4.00ms | 0.1% → <0.1% |   5.0ms → 1.0ms |   5 → 1 | `Main.toJSON`                                       | `Profile.hs:84:3`                         |
|  -75.0% | -3.00ms | 0.1% → <0.1% |   4.0ms → 1.0ms |   4 → 1 | `Main.parseJSONList`                                | `Profile.hs:108:10`                       |
| removed | -3.00ms |  0.1% → 0.0% |     3.0ms → 0ms |   3 → 0 | `Main.parseJSONList`                                | `Profile.hs:50:10`                        |
|  -37.5% | -3.00ms |  0.2% → 0.1% |   8.0ms → 5.0ms |   8 → 5 | `Main.top`                                          | `Profile.hs:115:1`                        |
|  -11.1% | -2.00ms |  0.5% → 0.4% | 18.0ms → 16.0ms | 18 → 16 | `Data.Aeson.Types.FromJSON.withArray`               | `src/Data/Aeson/Types/FromJSON.hs:742:1`  |
|   -9.1% | -1.00ms |  0.3% → 0.2% | 11.0ms → 10.0ms | 11 → 10 | `Data.Aeson.Types.Internal.prependFailure`          | `src/Data/Aeson/Types/Internal.hs:681:1`  |
|  -12.5% | -1.00ms |         0.2% |   8.0ms → 7.0ms |   8 → 7 | `Data.Aeson.Encoding.Builder.array`                 | `src/Data/Aeson/Encoding/Builder.hs:86:1` |

# Allocated heap and entries profile diff

Allocated 10.1 GiB → 11.1 GiB (+1.008 GiB, +10.0%) and recorded 18,616,855 entries → 20,478,505 entries (+1,861,650 entries, +10.0%).

| Category          | Change |      Delta |     % |                Size |                 Entries |
| ----------------- | -----: | ---------: | ----: | ------------------: | ----------------------: |
| Ours              | +10.0% | +1.005 GiB | 99.7% | 10.1 GiB → 11.1 GiB | 18,616,855 → 20,478,505 |
| Native            | +10.0% | +2.871 MiB |  0.3% | 28.8 MiB → 31.7 MiB |                       0 |
| Garbage collector |   0.0% |        0 B | <0.1% |            1.07 KiB |                       0 |

## Allocated heap

### Hottest functions

#### Self size

##### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

| Change |        Delta |     % |                Size | Function                                          | Location                                          |
| -----: | -----------: | ----: | ------------------: | ------------------------------------------------- | ------------------------------------------------- |
| +10.0% | +615.542 MiB | 59.6% | 6.01 GiB → 6.61 GiB | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| +10.0% | +157.649 MiB | 15.3% | 1.54 GiB → 1.69 GiB | `Data.Aeson.KeyMap.fromList`                      | `src/Data/Aeson/KeyMap.hs:247:1`                  |
| +10.0% |  +85.861 MiB |  8.3% |   859 MiB → 944 MiB | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
| +10.0% |  +54.694 MiB |  5.3% |   547 MiB → 602 MiB | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
| +10.0% |  +45.929 MiB |  4.4% |   459 MiB → 505 MiB | `Main.keywords`                                   | `Profile.hs:136:1`                                |
| +10.0% |  +18.255 MiB |  1.8% |   183 MiB → 201 MiB | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
| +10.0% |   +9.622 MiB |  0.9% |  96.2 MiB → 106 MiB | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
| +10.0% |   +8.172 MiB |  0.8% | 81.7 MiB → 89.9 MiB | `Main.tally`                                      | `Profile.hs:112:1`                                |
| +10.0% |   +4.965 MiB |  0.5% | 49.7 MiB → 54.6 MiB | `Data.Aeson.Types.FromJSON.explicitParseField`    | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
| +10.0% |   +3.683 MiB |  0.4% | 36.8 MiB → 40.5 MiB | `Data.Aeson.Types.FromJSON.withArray`             | `src/Data/Aeson/Types/FromJSON.hs:742:1`          |
| +10.0% |    +3.38 MiB |  0.3% | 33.8 MiB → 37.2 MiB | `Main.summarize`                                  | `Profile.hs:118:1`                                |
| +10.0% |   +2.977 MiB |  0.3% | 29.8 MiB → 32.8 MiB | `Data.Aeson.Types.Internal.<?>`                   | `src/Data/Aeson/Types/Internal.hs:659:1`          |
| +10.0% |   +2.921 MiB |  0.3% | 29.2 MiB → 32.1 MiB | `Data.Aeson.Types.FromJSON.withText`              | `src/Data/Aeson/Types/FromJSON.hs:731:1`          |
| +10.0% |   +2.871 MiB |  0.3% | 28.7 MiB → 31.6 MiB | `PROFILING.OVERHEAD_of`                           | `<unknown>`                                       |
| +10.0% |   +2.232 MiB |  0.2% | 22.3 MiB → 24.6 MiB | `Data.Aeson.Types.FromJSON.withObject`            | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
| +10.0% |   +1.901 MiB |  0.2% |   19 MiB → 20.9 MiB | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
| +10.0% |   +1.835 MiB |  0.2% | 18.4 MiB → 20.2 MiB | `Main.top`                                        | `Profile.hs:115:1`                                |
| +10.0% |   +1.514 MiB |  0.1% | 15.1 MiB → 16.7 MiB | `Data.Aeson.Encoding.Builder.array`               | `src/Data/Aeson/Encoding/Builder.hs:86:1`         |
| +10.0% |   +1.372 MiB |  0.1% | 13.7 MiB → 15.1 MiB | `Data.Aeson.Encoding.Builder.text`                | `src/Data/Aeson/Encoding/Builder.hs:109:1`        |
| +10.0% |   +1.291 MiB |  0.1% | 12.9 MiB → 14.2 MiB | `Data.Scientific.toBoundedInteger`                | `src/Data/Scientific.hs:772:1`                    |

###### Ours

| Change |        Delta |     % |                Size | Function                                          | Location                                          |
| -----: | -----------: | ----: | ------------------: | ------------------------------------------------- | ------------------------------------------------- |
| +10.0% | +615.542 MiB | 59.6% | 6.01 GiB → 6.61 GiB | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| +10.0% | +157.649 MiB | 15.3% | 1.54 GiB → 1.69 GiB | `Data.Aeson.KeyMap.fromList`                      | `src/Data/Aeson/KeyMap.hs:247:1`                  |
| +10.0% |  +85.861 MiB |  8.3% |   859 MiB → 944 MiB | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
| +10.0% |  +54.694 MiB |  5.3% |   547 MiB → 602 MiB | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
| +10.0% |  +45.929 MiB |  4.4% |   459 MiB → 505 MiB | `Main.keywords`                                   | `Profile.hs:136:1`                                |
| +10.0% |  +18.255 MiB |  1.8% |   183 MiB → 201 MiB | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
| +10.0% |   +9.622 MiB |  0.9% |  96.2 MiB → 106 MiB | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
| +10.0% |   +8.172 MiB |  0.8% | 81.7 MiB → 89.9 MiB | `Main.tally`                                      | `Profile.hs:112:1`                                |
| +10.0% |   +4.965 MiB |  0.5% | 49.7 MiB → 54.6 MiB | `Data.Aeson.Types.FromJSON.explicitParseField`    | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
| +10.0% |   +3.683 MiB |  0.4% | 36.8 MiB → 40.5 MiB | `Data.Aeson.Types.FromJSON.withArray`             | `src/Data/Aeson/Types/FromJSON.hs:742:1`          |
| +10.0% |    +3.38 MiB |  0.3% | 33.8 MiB → 37.2 MiB | `Main.summarize`                                  | `Profile.hs:118:1`                                |
| +10.0% |   +2.977 MiB |  0.3% | 29.8 MiB → 32.8 MiB | `Data.Aeson.Types.Internal.<?>`                   | `src/Data/Aeson/Types/Internal.hs:659:1`          |
| +10.0% |   +2.921 MiB |  0.3% | 29.2 MiB → 32.1 MiB | `Data.Aeson.Types.FromJSON.withText`              | `src/Data/Aeson/Types/FromJSON.hs:731:1`          |
| +10.0% |   +2.232 MiB |  0.2% | 22.3 MiB → 24.6 MiB | `Data.Aeson.Types.FromJSON.withObject`            | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
| +10.0% |   +1.901 MiB |  0.2% |   19 MiB → 20.9 MiB | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
| +10.0% |   +1.835 MiB |  0.2% | 18.4 MiB → 20.2 MiB | `Main.top`                                        | `Profile.hs:115:1`                                |
| +10.0% |   +1.514 MiB |  0.1% | 15.1 MiB → 16.7 MiB | `Data.Aeson.Encoding.Builder.array`               | `src/Data/Aeson/Encoding/Builder.hs:86:1`         |
| +10.0% |   +1.372 MiB |  0.1% | 13.7 MiB → 15.1 MiB | `Data.Aeson.Encoding.Builder.text`                | `src/Data/Aeson/Encoding/Builder.hs:109:1`        |
| +10.0% |   +1.291 MiB |  0.1% | 12.9 MiB → 14.2 MiB | `Data.Scientific.toBoundedInteger`                | `src/Data/Scientific.hs:772:1`                    |
| +10.0% | +983.593 KiB |  0.1% | 9.61 MiB → 10.6 MiB | `Data.Aeson.KeyMap.lookup`                        | `src/Data/Aeson/KeyMap.hs:178:1`                  |

#### Total size

##### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

| Change |        Delta |      % |                Size | Function                                          | Location                                          |
| -----: | -----------: | -----: | ------------------: | ------------------------------------------------- | ------------------------------------------------- |
| +10.0% |   +1.008 GiB | 100.0% | 10.1 GiB → 11.1 GiB | `MAIN.MAIN`                                       | `<unknown>`                                       |
| +10.0% |   +1.005 GiB |  99.7% | 10.1 GiB → 11.1 GiB | `Main.main`                                       | `Profile.hs:146:1`                                |
| +10.0% | +965.605 MiB |  93.5% | 9.43 GiB → 10.4 GiB | `Data.Aeson.Decoding.eitherDecode`                | `src/Data/Aeson/Decoding.hs:79:1`                 |
| +10.0% | +698.119 MiB |  67.6% |  6.82 GiB → 7.5 GiB | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| +10.0% | +267.484 MiB |  25.9% | 2.61 GiB → 2.87 GiB | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
| +10.0% | +157.649 MiB |  15.3% | 1.54 GiB → 1.69 GiB | `Data.Aeson.KeyMap.fromList`                      | `src/Data/Aeson/KeyMap.hs:247:1`                  |
| +10.0% |  +54.694 MiB |   5.3% |   547 MiB → 602 MiB | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
| +10.0% |  +52.585 MiB |   5.1% |   526 MiB → 578 MiB | `Main.keywords`                                   | `Profile.hs:136:1`                                |
| +10.0% |  +24.192 MiB |   2.3% |   242 MiB → 266 MiB | `Data.Aeson.Types.FromJSON.ifromJSON`             | `src/Data/Aeson/Types/FromJSON.hs:839:1`          |
| +10.0% |  +24.189 MiB |   2.3% |   242 MiB → 266 MiB | `Data.Aeson.Types.FromJSON.withObject`            | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
| +10.0% |   +22.67 MiB |   2.2% |   227 MiB → 249 MiB | `Main.parseJSON`                                  | `Profile.hs:48:3`                                 |
| +10.0% |  +21.232 MiB |   2.1% |   212 MiB → 234 MiB | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
| +10.0% |  +19.331 MiB |   1.9% |   193 MiB → 213 MiB | `Data.Aeson.Types.FromJSON.explicitParseField`    | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
| +10.0% |  +18.255 MiB |   1.8% |   183 MiB → 201 MiB | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
| +10.0% |  +10.267 MiB |   1.0% |   103 MiB → 113 MiB | `Main.roundTrip`                                  | `Profile.hs:139:1`                                |
| +10.0% |   +9.622 MiB |   0.9% |  96.2 MiB → 106 MiB | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
| +10.0% |   +8.172 MiB |   0.8% | 81.7 MiB → 89.9 MiB | `Main.tally`                                      | `Profile.hs:112:1`                                |
| +10.0% |   +7.976 MiB |   0.8% | 79.8 MiB → 87.7 MiB | `Data.Aeson.Types.Internal.<?>`                   | `src/Data/Aeson/Types/Internal.hs:659:1`          |
| +10.0% |   +6.732 MiB |   0.7% | 67.3 MiB → 74.1 MiB | `Main.summarize`                                  | `Profile.hs:118:1`                                |
| +10.0% |   +5.045 MiB |   0.5% | 50.5 MiB → 55.5 MiB | `Data.Aeson.encode`                               | `src/Data/Aeson.hs:187:1`                         |

###### Ours

| Change |        Delta |     % |                Size | Function                                          | Location                                          |
| -----: | -----------: | ----: | ------------------: | ------------------------------------------------- | ------------------------------------------------- |
| +10.0% |   +1.005 GiB | 99.7% | 10.1 GiB → 11.1 GiB | `Main.main`                                       | `Profile.hs:146:1`                                |
| +10.0% | +965.605 MiB | 93.5% | 9.43 GiB → 10.4 GiB | `Data.Aeson.Decoding.eitherDecode`                | `src/Data/Aeson/Decoding.hs:79:1`                 |
| +10.0% | +698.119 MiB | 67.6% |  6.82 GiB → 7.5 GiB | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| +10.0% | +267.484 MiB | 25.9% | 2.61 GiB → 2.87 GiB | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
| +10.0% | +157.649 MiB | 15.3% | 1.54 GiB → 1.69 GiB | `Data.Aeson.KeyMap.fromList`                      | `src/Data/Aeson/KeyMap.hs:247:1`                  |
| +10.0% |  +54.694 MiB |  5.3% |   547 MiB → 602 MiB | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
| +10.0% |  +52.585 MiB |  5.1% |   526 MiB → 578 MiB | `Main.keywords`                                   | `Profile.hs:136:1`                                |
| +10.0% |  +24.192 MiB |  2.3% |   242 MiB → 266 MiB | `Data.Aeson.Types.FromJSON.ifromJSON`             | `src/Data/Aeson/Types/FromJSON.hs:839:1`          |
| +10.0% |  +24.189 MiB |  2.3% |   242 MiB → 266 MiB | `Data.Aeson.Types.FromJSON.withObject`            | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
| +10.0% |   +22.67 MiB |  2.2% |   227 MiB → 249 MiB | `Main.parseJSON`                                  | `Profile.hs:48:3`                                 |
| +10.0% |  +21.232 MiB |  2.1% |   212 MiB → 234 MiB | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
| +10.0% |  +19.331 MiB |  1.9% |   193 MiB → 213 MiB | `Data.Aeson.Types.FromJSON.explicitParseField`    | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
| +10.0% |  +18.255 MiB |  1.8% |   183 MiB → 201 MiB | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
| +10.0% |  +10.267 MiB |  1.0% |   103 MiB → 113 MiB | `Main.roundTrip`                                  | `Profile.hs:139:1`                                |
| +10.0% |   +9.622 MiB |  0.9% |  96.2 MiB → 106 MiB | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
| +10.0% |   +8.172 MiB |  0.8% | 81.7 MiB → 89.9 MiB | `Main.tally`                                      | `Profile.hs:112:1`                                |
| +10.0% |   +7.976 MiB |  0.8% | 79.8 MiB → 87.7 MiB | `Data.Aeson.Types.Internal.<?>`                   | `src/Data/Aeson/Types/Internal.hs:659:1`          |
| +10.0% |   +6.732 MiB |  0.7% | 67.3 MiB → 74.1 MiB | `Main.summarize`                                  | `Profile.hs:118:1`                                |
| +10.0% |   +5.045 MiB |  0.5% | 50.5 MiB → 55.5 MiB | `Data.Aeson.encode`                               | `src/Data/Aeson.hs:187:1`                         |
| +10.0% |   +4.779 MiB |  0.5% | 47.8 MiB → 52.6 MiB | `Main.toEncoding`                                 | `Profile.hs:83:10`                                |

## Entries

### Hottest functions

#### Self entries

##### Regressions

Functions with the largest increase in entries recorded directly in the function body, excluding callees.

###### Ours

| Change |    Delta |     % |               Entries | Function                                       | Location                                          |
| -----: | -------: | ----: | --------------------: | ---------------------------------------------- | ------------------------------------------------- |
| +10.0% | +868,850 | 46.7% | 8,688,500 → 9,557,350 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`   | `src/Data/Aeson/Internal/Text.hs:29:1`            |
| +10.0% | +106,250 |  5.7% | 1,062,500 → 1,168,750 | `Data.Vector.Fusion.Util.unId`                 | `src/Data/Vector/Fusion/Util.hs:25:21`            |
| +10.0% |  +84,200 |  4.5% |     842,325 → 926,525 | `Data.Primitive.Array.marray#`                 | `Data/Primitive/Array.hs:109:5`                   |
| +10.0% |  +83,850 |  4.5% |     838,500 → 922,350 | `Data.Integer.Conversion.byteStringToInteger`  | `src/Data/Integer/Conversion.hs:104:1`            |
| +10.0% |  +74,150 |  4.0% |     741,500 → 815,650 | `Data.Aeson.Types.Internal.<?>`                | `src/Data/Aeson/Types/Internal.hs:659:1`          |
| +10.0% |  +67,300 |  3.6% |     673,000 → 740,300 | `Data.Aeson.KeyMap.lookup`                     | `src/Data/Aeson/KeyMap.hs:178:1`                  |
| +10.0% |  +62,300 |  3.3% |     623,000 → 685,300 | `Data.Aeson.Types.FromJSON..:`                 | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
| +10.0% |  +62,300 |  3.3% |     623,000 → 685,300 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
| +10.0% |  +52,900 |  2.8% |     529,000 → 581,900 | `Data.Vector.Fusion.Bundle.Monadic.sChunks`    | `src/Data/Vector/Fusion/Bundle/Monadic.hs:122:30` |
| +10.0% |  +52,900 |  2.8% |     529,000 → 581,900 | `Data.Vector.Fusion.Bundle.Monadic.sSize`      | `src/Data/Vector/Fusion/Bundle/Monadic.hs:124:30` |
| +10.0% |  +52,900 |  2.8% |     529,000 → 581,900 | `Data.Vector.Fusion.Bundle.Size.upperBound`    | `src/Data/Vector/Fusion/Bundle/Size.hs:129:1`     |
| +10.0% |  +27,800 |  1.5% |     278,001 → 305,801 | `Data.Primitive.Array.array#`                  | `Data/Primitive/Array.hs:66:5`                    |
| +10.0% |  +23,000 |  1.2% |     230,000 → 253,000 | `Data.Scientific.coefficient`                  | `src/Data/Scientific.hs:140:7`                    |
| +10.0% |  +21,500 |  1.2% |     215,000 → 236,500 | `Data.Aeson.Types.Internal.modifyFailure`      | `src/Data/Aeson/Types/Internal.hs:671:1`          |
| +10.0% |  +21,500 |  1.2% |     215,000 → 236,500 | `Data.Scientific.toBoundedInteger`             | `src/Data/Scientific.hs:772:1`                    |
| +10.0% |  +21,300 |  1.1% |     213,000 → 234,300 | `Data.Aeson.Types.FromJSON.withObject`         | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
| +10.0% |  +21,200 |  1.1% |     212,000 → 233,200 | `Data.Aeson.Types.FromJSON.withText`           | `src/Data/Aeson/Types/FromJSON.hs:731:1`          |
| +10.0% |  +16,650 |  0.9% |     166,500 → 183,150 | `Data.Scientific.base10Exponent`               | `src/Data/Scientific.hs:165:7`                    |
| +10.0% |  +15,150 |  0.8% |     151,500 → 166,650 | `Utils.magnitude`                              | `src/Utils.hs:78:1`                               |
| +10.0% |  +15,150 |  0.8% |     151,500 → 166,650 | `Data.Scientific.normalize`                    | `src/Data/Scientific.hs:1102:1`                   |

#### Total entries

##### Regressions

Functions with the largest increase in total entries recorded in the function and all its callees.

| Change |      Delta |      % |                 Entries | Function                                          | Location                                          |
| -----: | ---------: | -----: | ----------------------: | ------------------------------------------------- | ------------------------------------------------- |
| +10.0% | +1,861,650 | 100.0% | 18,616,855 → 20,478,505 | `MAIN.MAIN`                                       | `<unknown>`                                       |
| +10.0% | +1,861,650 | 100.0% | 18,616,501 → 20,478,151 | `Main.main`                                       | `Profile.hs:146:1`                                |
| +10.0% | +1,779,050 |  95.6% | 17,790,500 → 19,569,550 | `Data.Aeson.Decoding.eitherDecode`                | `src/Data/Aeson/Decoding.hs:79:1`                 |
| +10.0% |   +952,950 |  51.2% |  9,529,500 → 10,482,450 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| +10.0% |   +868,850 |  46.7% |   8,688,500 → 9,557,350 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
| +10.0% |   +825,900 |  44.4% |   8,259,000 → 9,084,900 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
| +10.0% |   +502,600 |  27.0% |   5,026,000 → 5,528,600 | `Data.Aeson.Types.FromJSON.ifromJSON`             | `src/Data/Aeson/Types/FromJSON.hs:839:1`          |
| +10.0% |   +502,500 |  27.0% |   5,025,000 → 5,527,500 | `Data.Aeson.Types.FromJSON.withObject`            | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
| +10.0% |   +470,250 |  25.3% |   4,702,501 → 5,172,751 | `Main.parseJSON`                                  | `Profile.hs:48:3`                                 |
| +10.0% |   +456,200 |  24.5% |   4,562,000 → 5,018,200 | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
| +10.0% |   +393,900 |  21.2% |   3,939,000 → 4,332,900 | `Data.Aeson.Types.FromJSON.explicitParseField`    | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
| +10.0% |   +106,250 |   5.7% |   1,062,500 → 1,168,750 | `Data.Vector.Fusion.Util.unId`                    | `src/Data/Vector/Fusion/Util.hs:25:21`            |
| +10.0% |   +103,600 |   5.6% |   1,036,000 → 1,139,600 | `Data.Scientific.toBoundedInteger`                | `src/Data/Scientific.hs:772:1`                    |
| +10.0% |    +84,200 |   4.5% |       842,325 → 926,525 | `Data.Primitive.Array.marray#`                    | `Data/Primitive/Array.hs:109:5`                   |
| +10.0% |    +83,850 |   4.5% |       838,500 → 922,350 | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
| +10.0% |    +78,900 |   4.2% |       789,000 → 867,900 | `Data.Aeson.Types.Internal.<?>`                   | `src/Data/Aeson/Types/Internal.hs:659:1`          |
| +10.0% |    +70,050 |   3.8% |       700,500 → 770,550 | `Data.Aeson.Types.FromJSON.withArray`             | `src/Data/Aeson/Types/FromJSON.hs:742:1`          |
| +10.0% |    +67,300 |   3.6% |       673,000 → 740,300 | `Data.Aeson.KeyMap.lookup`                        | `src/Data/Aeson/KeyMap.hs:178:1`                  |
| +10.0% |    +64,350 |   3.5% |       643,502 → 707,852 | `Main.roundTrip`                                  | `Profile.hs:139:1`                                |
| +10.0% |    +55,250 |   3.0% |       552,500 → 607,750 | `Main.summarize`                                  | `Profile.hs:118:1`                                |

###### Ours

| Change |      Delta |      % |                 Entries | Function                                          | Location                                          |
| -----: | ---------: | -----: | ----------------------: | ------------------------------------------------- | ------------------------------------------------- |
| +10.0% | +1,861,650 | 100.0% | 18,616,501 → 20,478,151 | `Main.main`                                       | `Profile.hs:146:1`                                |
| +10.0% | +1,779,050 |  95.6% | 17,790,500 → 19,569,550 | `Data.Aeson.Decoding.eitherDecode`                | `src/Data/Aeson/Decoding.hs:79:1`                 |
| +10.0% |   +952,950 |  51.2% |  9,529,500 → 10,482,450 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| +10.0% |   +868,850 |  46.7% |   8,688,500 → 9,557,350 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
| +10.0% |   +825,900 |  44.4% |   8,259,000 → 9,084,900 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
| +10.0% |   +502,600 |  27.0% |   5,026,000 → 5,528,600 | `Data.Aeson.Types.FromJSON.ifromJSON`             | `src/Data/Aeson/Types/FromJSON.hs:839:1`          |
| +10.0% |   +502,500 |  27.0% |   5,025,000 → 5,527,500 | `Data.Aeson.Types.FromJSON.withObject`            | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
| +10.0% |   +470,250 |  25.3% |   4,702,501 → 5,172,751 | `Main.parseJSON`                                  | `Profile.hs:48:3`                                 |
| +10.0% |   +456,200 |  24.5% |   4,562,000 → 5,018,200 | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
| +10.0% |   +393,900 |  21.2% |   3,939,000 → 4,332,900 | `Data.Aeson.Types.FromJSON.explicitParseField`    | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
| +10.0% |   +106,250 |   5.7% |   1,062,500 → 1,168,750 | `Data.Vector.Fusion.Util.unId`                    | `src/Data/Vector/Fusion/Util.hs:25:21`            |
| +10.0% |   +103,600 |   5.6% |   1,036,000 → 1,139,600 | `Data.Scientific.toBoundedInteger`                | `src/Data/Scientific.hs:772:1`                    |
| +10.0% |    +84,200 |   4.5% |       842,325 → 926,525 | `Data.Primitive.Array.marray#`                    | `Data/Primitive/Array.hs:109:5`                   |
| +10.0% |    +83,850 |   4.5% |       838,500 → 922,350 | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
| +10.0% |    +78,900 |   4.2% |       789,000 → 867,900 | `Data.Aeson.Types.Internal.<?>`                   | `src/Data/Aeson/Types/Internal.hs:659:1`          |
| +10.0% |    +70,050 |   3.8% |       700,500 → 770,550 | `Data.Aeson.Types.FromJSON.withArray`             | `src/Data/Aeson/Types/FromJSON.hs:742:1`          |
| +10.0% |    +67,300 |   3.6% |       673,000 → 740,300 | `Data.Aeson.KeyMap.lookup`                        | `src/Data/Aeson/KeyMap.hs:178:1`                  |
| +10.0% |    +64,350 |   3.5% |       643,502 → 707,852 | `Main.roundTrip`                                  | `Profile.hs:139:1`                                |
| +10.0% |    +55,250 |   3.0% |       552,500 → 607,750 | `Main.summarize`                                  | `Profile.hs:118:1`                                |
| +10.0% |    +52,900 |   2.8% |       529,000 → 581,900 | `Data.Vector.Fusion.Bundle.Monadic.sChunks`       | `src/Data/Vector/Fusion/Bundle/Monadic.hs:122:30` |
