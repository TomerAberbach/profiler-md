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

|  Change |     Delta |             % |              Time |       Samples | Function                                          | Location                                          |
| ------: | --------: | ------------: | ----------------: | ------------: | ------------------------------------------------- | ------------------------------------------------- |
|  +25.2% | +258.00ms | 28.2% → 31.3% |     1.02s → 1.28s | 1,024 → 1,282 | `GC.GC`                                           | `<unknown>`                                       |
|  +15.5% |  +67.00ms | 11.9% → 12.2% | 431.0ms → 498.0ms |     431 → 498 | `Data.Aeson.KeyMap.fromList`                      | `src/Data/Aeson/KeyMap.hs:247:1`                  |
|   +3.9% |  +56.00ms | 39.3% → 36.2% |     1.42s → 1.48s | 1,426 → 1,482 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
|  +42.9% |  +39.00ms |   2.5% → 3.2% |  91.0ms → 130.0ms |      91 → 130 | `Main.keywords`                                   | `Profile.hs:136:1`                                |
|  +19.6% |  +22.00ms |   3.1% → 3.3% | 112.0ms → 134.0ms |     112 → 134 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|  +66.7% |  +14.00ms |   0.6% → 0.9% |   21.0ms → 35.0ms |       21 → 35 | `Data.Aeson.KeyMap.lookup`                        | `src/Data/Aeson/KeyMap.hs:178:1`                  |
|  +16.2% |  +11.00ms |          1.9% |   68.0ms → 79.0ms |       68 → 79 | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|  +15.6% |  +10.00ms |          1.8% |   64.0ms → 74.0ms |       64 → 74 | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
|  +72.7% |   +8.00ms |   0.3% → 0.5% |   11.0ms → 19.0ms |       11 → 19 | `Main.summarize`                                  | `Profile.hs:118:1`                                |
|  +33.3% |   +7.00ms |   0.6% → 0.7% |   21.0ms → 28.0ms |       21 → 28 | `Main.tally`                                      | `Profile.hs:112:1`                                |
|  +83.3% |   +5.00ms |   0.2% → 0.3% |    6.0ms → 11.0ms |        6 → 11 | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
|  +60.0% |   +3.00ms |   0.1% → 0.2% |     5.0ms → 8.0ms |         5 → 8 | `SYSTEM.SYSTEM`                                   | `<unknown>`                                       |
| +150.0% |   +3.00ms |          0.1% |     2.0ms → 5.0ms |         2 → 5 | `Data.Aeson.Types.Internal.modifyFailure`         | `src/Data/Aeson/Types/Internal.hs:671:1`          |
| +300.0% |   +3.00ms |  <0.1% → 0.1% |     1.0ms → 4.0ms |         1 → 4 | `Data.Aeson.Encoding.Builder.object`              | `src/Data/Aeson/Encoding/Builder.hs:96:1`         |
|     new |   +3.00ms |   0.0% → 0.1% |       0ms → 3.0ms |         0 → 3 | `Data.Aeson.Encoding.Builder.encodeToBuilder`     | `src/Data/Aeson/Encoding/Builder.hs:68:1`         |
|  +33.3% |   +3.00ms |   0.2% → 0.3% |    9.0ms → 12.0ms |        9 → 12 | `Data.Aeson.Encoding.Builder.text`                | `src/Data/Aeson/Encoding/Builder.hs:109:1`        |
|     new |   +2.00ms |  0.0% → <0.1% |       0ms → 2.0ms |         0 → 2 | `Data.Aeson.encode`                               | `src/Data/Aeson.hs:187:1`                         |
| +100.0% |   +2.00ms |          0.1% |     2.0ms → 4.0ms |         2 → 4 | `Data.Aeson.Encoding.Builder.unquoted`            | `src/Data/Aeson/Encoding/Builder.hs:113:1`        |
|  +20.0% |   +1.00ms |          0.1% |     5.0ms → 6.0ms |         5 → 6 | `Main.main`                                       | `Profile.hs:146:1`                                |
|     new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `Main.parseJSON`                                  | `Profile.hs:72:3`                                 |

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
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `Main.parseJSON`                                    | `Profile.hs:72:3`                                 |
|  +33.3% |  +1.00ms |          0.1% |     3.0ms → 4.0ms |         3 → 4 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1`          |
|  +50.0% |  +1.00ms |          0.1% |     2.0ms → 3.0ms |         2 → 3 | `Utils.magnitude`                                   | `src/Utils.hs:78:1`                               |

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
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `Main.parseJSON`                               | `Profile.hs:65:3`                            |
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
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `Main.parseJSON`                               | `Profile.hs:65:3`                            |
|  -20.0% |  -1.00ms |         0.1% |     5.0ms → 4.0ms |     5 → 4 | `Data.Aeson.Types.Internal.<?>`                | `src/Data/Aeson/Types/Internal.hs:659:1`     |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `Main.parseJSONList`                           | `Profile.hs:50:10`                           |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `GC.GC` (`<unknown>`)

| Change |     Delta |      % |          Time |       Samples | Caller      | Location    |
| -----: | --------: | -----: | ------------: | ------------: | ----------- | ----------- |
| +25.2% | +258.00ms | 100.0% | 1.02s → 1.28s | 1,024 → 1,282 | `MAIN.MAIN` | `<unknown>` |

##### `Data.Aeson.KeyMap.fromList` (`src/Data/Aeson/KeyMap.hs:247:1`)

| Change |    Delta |             % |              Time |   Samples | Caller                                         | Location                                     |
| -----: | -------: | ------------: | ----------------: | --------: | ---------------------------------------------- | -------------------------------------------- |
| +15.9% | +68.00ms | 99.5% → 99.8% | 429.0ms → 497.0ms | 429 → 497 | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |
| -50.0% |  -1.00ms |   0.5% → 0.2% |     2.0ms → 1.0ms |     2 → 1 | `Main.toJSON`                                  | `Profile.hs:84:3`                            |

##### `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)

| Change |    Delta |      % |          Time |       Samples | Caller                             | Location                          |
| -----: | -------: | -----: | ------------: | ------------: | ---------------------------------- | --------------------------------- |
|  +3.9% | +56.00ms | 100.0% | 1.42s → 1.48s | 1,426 → 1,482 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

##### `Main.keywords` (`Profile.hs:136:1`)

| Change |    Delta |      % |             Time |  Samples | Caller      | Location           |
| -----: | -------: | -----: | ---------------: | -------: | ----------- | ------------------ |
| +42.9% | +39.00ms | 100.0% | 91.0ms → 130.0ms | 91 → 130 | `Main.main` | `Profile.hs:146:1` |

##### `Data.Aeson.Internal.Text.unsafeDecodeASCII` (`src/Data/Aeson/Internal/Text.hs:29:1`)

| Change |    Delta |      % |              Time |   Samples | Caller                                            | Location                                          |
| -----: | -------: | -----: | ----------------: | --------: | ------------------------------------------------- | ------------------------------------------------- |
| +19.6% | +22.00ms | 100.0% | 112.0ms → 134.0ms | 112 → 134 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

##### `Data.Aeson.KeyMap.lookup` (`src/Data/Aeson/KeyMap.hs:178:1`)

| Change |    Delta |             % |            Time | Samples | Caller                                              | Location                                 |
| -----: | -------: | ------------: | --------------: | ------: | --------------------------------------------------- | ---------------------------------------- |
| +78.9% | +15.00ms | 90.5% → 97.1% | 19.0ms → 34.0ms | 19 → 34 | `Data.Aeson.Types.FromJSON.explicitParseField`      | `src/Data/Aeson/Types/FromJSON.hs:917:1` |
| -50.0% |  -1.00ms |   9.5% → 2.9% |   2.0ms → 1.0ms |   2 → 1 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1` |

##### `Data.Integer.Conversion.byteStringToInteger` (`src/Data/Integer/Conversion.hs:104:1`)

| Change |    Delta |      % |            Time | Samples | Caller                                            | Location                                          |
| -----: | -------: | -----: | --------------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| +16.2% | +11.00ms | 100.0% | 68.0ms → 79.0ms | 68 → 79 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

##### `Data.Aeson.Internal.Unescape.unescapeText` (`src/Data/Aeson/Internal/Unescape.hs:34:1`)

| Change |    Delta |      % |            Time | Samples | Caller                                            | Location                                          |
| -----: | -------: | -----: | --------------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| +15.6% | +10.00ms | 100.0% | 64.0ms → 74.0ms | 64 → 74 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

##### `Main.summarize` (`Profile.hs:118:1`)

| Change |   Delta |      % |            Time | Samples | Caller      | Location           |
| -----: | ------: | -----: | --------------: | ------: | ----------- | ------------------ |
| +72.7% | +8.00ms | 100.0% | 11.0ms → 19.0ms | 11 → 19 | `Main.main` | `Profile.hs:146:1` |

##### `Main.tally` (`Profile.hs:112:1`)

| Change |   Delta |             % |            Time | Samples | Caller          | Location           |
| -----: | ------: | ------------: | --------------: | ------: | --------------- | ------------------ |
| +46.7% | +7.00ms | 71.4% → 78.6% | 15.0ms → 22.0ms | 15 → 22 | `Main.keywords` | `Profile.hs:136:1` |

##### `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`)

| Change |   Delta |      % |           Time | Samples | Caller                                 | Location                                 |
| -----: | ------: | -----: | -------------: | ------: | -------------------------------------- | ---------------------------------------- |
| +83.3% | +5.00ms | 100.0% | 6.0ms → 11.0ms |  6 → 11 | `Data.Aeson.Types.FromJSON.withObject` | `src/Data/Aeson/Types/FromJSON.hs:720:1` |

##### `SYSTEM.SYSTEM` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller      | Location    |
| -----: | ------: | -----: | ------------: | ------: | ----------- | ----------- |
| +60.0% | +3.00ms | 100.0% | 5.0ms → 8.0ms |   5 → 8 | `MAIN.MAIN` | `<unknown>` |

##### `Data.Aeson.Types.Internal.modifyFailure` (`src/Data/Aeson/Types/Internal.hs:671:1`)

|  Change |   Delta |      % |          Time | Samples | Caller                                     | Location                                 |
| ------: | ------: | -----: | ------------: | ------: | ------------------------------------------ | ---------------------------------------- |
| +150.0% | +3.00ms | 100.0% | 2.0ms → 5.0ms |   2 → 5 | `Data.Aeson.Types.Internal.prependFailure` | `src/Data/Aeson/Types/Internal.hs:681:1` |

##### `Data.Aeson.Encoding.Builder.object` (`src/Data/Aeson/Encoding/Builder.hs:96:1`)

|  Change |   Delta |      % |          Time | Samples | Caller                                        | Location                                  |
| ------: | ------: | -----: | ------------: | ------: | --------------------------------------------- | ----------------------------------------- |
| +300.0% | +3.00ms | 100.0% | 1.0ms → 4.0ms |   1 → 4 | `Data.Aeson.Encoding.Builder.encodeToBuilder` | `src/Data/Aeson/Encoding/Builder.hs:68:1` |

##### `Data.Aeson.Encoding.Builder.encodeToBuilder` (`src/Data/Aeson/Encoding/Builder.hs:68:1`)

| Change |   Delta |             % |        Time | Samples | Caller                               | Location                                    |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------ | ------------------------------------------- |
|    new | +3.00ms | 0.0% → 100.0% | 0ms → 3.0ms |   0 → 3 | `Data.Aeson.Encoding.Internal.value` | `src/Data/Aeson/Encoding/Internal.hs:441:1` |

##### `Data.Aeson.Encoding.Builder.text` (`src/Data/Aeson/Encoding/Builder.hs:109:1`)

|  Change |   Delta |             % |          Time | Samples | Caller                               | Location                                  |
| ------: | ------: | ------------: | ------------: | ------: | ------------------------------------ | ----------------------------------------- |
| +200.0% | +2.00ms | 11.1% → 25.0% | 1.0ms → 3.0ms |   1 → 3 | `Data.Aeson.Encoding.Builder.array`  | `src/Data/Aeson/Encoding/Builder.hs:86:1` |
|  +14.3% | +1.00ms | 77.8% → 66.7% | 7.0ms → 8.0ms |   7 → 8 | `Data.Aeson.Encoding.Builder.object` | `src/Data/Aeson/Encoding/Builder.hs:96:1` |

##### `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`)

| Change |   Delta |             % |        Time | Samples | Caller           | Location           |
| -----: | ------: | ------------: | ----------: | ------: | ---------------- | ------------------ |
|    new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `Main.roundTrip` | `Profile.hs:139:1` |

##### `Data.Aeson.Encoding.Builder.unquoted` (`src/Data/Aeson/Encoding/Builder.hs:113:1`)

|  Change |   Delta |      % |          Time | Samples | Caller                             | Location                                   |
| ------: | ------: | -----: | ------------: | ------: | ---------------------------------- | ------------------------------------------ |
| +100.0% | +2.00ms | 100.0% | 2.0ms → 4.0ms |   2 → 4 | `Data.Aeson.Encoding.Builder.text` | `src/Data/Aeson/Encoding/Builder.hs:109:1` |

##### `Main.main` (`Profile.hs:146:1`)

| Change |   Delta |      % |          Time | Samples | Caller      | Location    |
| -----: | ------: | -----: | ------------: | ------: | ----------- | ----------- |
| +20.0% | +1.00ms | 100.0% | 5.0ms → 6.0ms |   5 → 6 | `MAIN.MAIN` | `<unknown>` |

##### `Main.parseJSON` (`Profile.hs:72:3`)

| Change |   Delta |             % |        Time | Samples | Caller                                       | Location                                 |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------------------------- | ---------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `Data.Aeson.Types.FromJSON.parseIndexedJSON` | `src/Data/Aeson/Types/FromJSON.hs:171:1` |

##### `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` (`src/Data/Aeson/Types/FromJSON.hs:923:1`)

| Change |   Delta |      % |          Time | Samples | Caller                          | Location                                 |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------- | ---------------------------------------- |
| +33.3% | +1.00ms | 100.0% | 3.0ms → 4.0ms |   3 → 4 | `Data.Aeson.Types.FromJSON..:?` | `src/Data/Aeson/Types/FromJSON.hs:859:1` |

##### `Utils.magnitude` (`src/Utils.hs:78:1`)

| Change |   Delta |      % |          Time | Samples | Caller                             | Location                       |
| -----: | ------: | -----: | ------------: | ------: | ---------------------------------- | ------------------------------ |
| +50.0% | +1.00ms | 100.0% | 2.0ms → 3.0ms |   2 → 3 | `Data.Scientific.toBoundedInteger` | `src/Data/Scientific.hs:772:1` |

##### `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)

| Change |    Delta |      % |              Time |   Samples | Caller                             | Location                          |
| -----: | -------: | -----: | ----------------: | --------: | ---------------------------------- | --------------------------------- |
| -10.8% | -23.00ms | 100.0% | 213.0ms → 190.0ms | 213 → 190 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

##### `PROFILING.OVERHEAD_of` (`<unknown>`)

| Change |   Delta |      % |            Time | Samples | Caller      | Location    |
| -----: | ------: | -----: | --------------: | ------: | ----------- | ----------- |
| -33.3% | -5.00ms | 100.0% | 15.0ms → 10.0ms | 15 → 10 | `MAIN.MAIN` | `<unknown>` |

##### `Data.Scientific.normalize` (`src/Data/Scientific.hs:1102:1`)

| Change |   Delta |      % |          Time | Samples | Caller                             | Location                       |
| -----: | ------: | -----: | ------------: | ------: | ---------------------------------- | ------------------------------ |
| -66.7% | -4.00ms | 100.0% | 6.0ms → 2.0ms |   6 → 2 | `Data.Scientific.toBoundedInteger` | `src/Data/Scientific.hs:772:1` |

##### `Data.Aeson.Types.FromJSON.withText` (`src/Data/Aeson/Types/FromJSON.hs:731:1`)

| Change |   Delta |             % |          Time | Samples | Caller                                              | Location                                 |
| -----: | ------: | ------------: | ------------: | ------: | --------------------------------------------------- | ---------------------------------------- |
| -83.3% | -5.00ms | 85.7% → 25.0% | 6.0ms → 1.0ms |   6 → 1 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1` |
|    new | +2.00ms |  0.0% → 50.0% |   0ms → 2.0ms |   0 → 2 | `Data.Aeson.Types.Internal.modifyFailure`           | `src/Data/Aeson/Types/Internal.hs:671:1` |

##### `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`)

| Change |   Delta |             % |            Time | Samples | Caller               | Location            |
| -----: | ------: | ------------: | --------------: | ------: | -------------------- | ------------------- |
| -66.7% | -2.00ms |  21.4% → 9.1% |   3.0ms → 1.0ms |   3 → 1 | `Main.parseJSONList` | `Profile.hs:108:10` |
|  -9.1% | -1.00ms | 78.6% → 90.9% | 11.0ms → 10.0ms | 11 → 10 | `Main.parseJSONList` | `Profile.hs:71:10`  |

##### `Data.Aeson.Types.Internal.prependFailure` (`src/Data/Aeson/Types/Internal.hs:681:1`)

| Change |   Delta |      % |          Time | Samples | Caller                                         | Location                                 |
| -----: | ------: | -----: | ------------: | ------: | ---------------------------------------------- | ---------------------------------------- |
| -75.0% | -3.00ms | 100.0% | 4.0ms → 1.0ms |   4 → 1 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Main.top` (`Profile.hs:115:1`)

| Change |   Delta |      % |          Time | Samples | Caller           | Location           |
| -----: | ------: | -----: | ------------: | ------: | ---------------- | ------------------ |
| -37.5% | -3.00ms | 100.0% | 8.0ms → 5.0ms |   8 → 5 | `Main.summarize` | `Profile.hs:118:1` |

##### `Main.toJSON` (`Profile.hs:84:3`)

|  Change |   Delta |             % |        Time | Samples | Caller            | Location           |
| ------: | ------: | ------------: | ----------: | ------: | ----------------- | ------------------ |
| removed | -3.00ms | 100.0% → 0.0% | 3.0ms → 0ms |   3 → 0 | `Main.toEncoding` | `Profile.hs:83:10` |

##### `Data.Aeson.Encoding.Builder.array` (`src/Data/Aeson/Encoding/Builder.hs:86:1`)

| Change |   Delta |             % |          Time | Samples | Caller                               | Location                                   |
| -----: | ------: | ------------: | ------------: | ------: | ------------------------------------ | ------------------------------------------ |
| -40.0% | -2.00ms | 71.4% → 75.0% | 5.0ms → 3.0ms |   5 → 3 | `Data.Aeson.Encoding.Builder.text`   | `src/Data/Aeson/Encoding/Builder.hs:109:1` |
| -50.0% | -1.00ms | 28.6% → 25.0% | 2.0ms → 1.0ms |   2 → 1 | `Data.Aeson.Encoding.Builder.object` | `src/Data/Aeson/Encoding/Builder.hs:96:1`  |

##### `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`)

| Change |   Delta |      % |            Time | Samples | Caller                         | Location                                 |
| -----: | ------: | -----: | --------------: | ------: | ------------------------------ | ---------------------------------------- |
| -10.0% | -2.00ms | 100.0% | 20.0ms → 18.0ms | 20 → 18 | `Data.Aeson.Types.FromJSON..:` | `src/Data/Aeson/Types/FromJSON.hs:849:1` |

##### `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`)

| Change |   Delta |      % |          Time | Samples | Caller                                         | Location                                 |
| -----: | ------: | -----: | ------------: | ------: | ---------------------------------------------- | ---------------------------------------- |
| -33.3% | -2.00ms | 100.0% | 6.0ms → 4.0ms |   6 → 4 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`)

|  Change |   Delta |              % |          Time | Samples | Caller           | Location          |
| ------: | ------: | -------------: | ------------: | ------: | ---------------- | ----------------- |
| removed | -2.00ms |   20.0% → 0.0% |   2.0ms → 0ms |   2 → 0 | `Main.parseJSON` | `Profile.hs:96:3` |
|  +12.5% | +1.00ms | 80.0% → 100.0% | 8.0ms → 9.0ms |   8 → 9 | `Main.parseJSON` | `Profile.hs:48:3` |

##### `Main.parseJSON` (`Profile.hs:65:3`)

|  Change |   Delta |             % |        Time | Samples | Caller                                         | Location                                 |
| ------: | ------: | ------------: | ----------: | ------: | ---------------------------------------------- | ---------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`)

| Change |   Delta |      % |          Time | Samples | Caller                                         | Location                                 |
| -----: | ------: | -----: | ------------: | ------: | ---------------------------------------------- | ---------------------------------------- |
| -20.0% | -1.00ms | 100.0% | 5.0ms → 4.0ms |   5 → 4 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Main.parseJSONList` (`Profile.hs:50:10`)

|  Change |   Delta |             % |        Time | Samples | Caller                                         | Location                                 |
| ------: | ------: | ------------: | ----------: | ------: | ---------------------------------------------- | ---------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

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
| removed | -3.00ms |  0.1% → 0.0% |     3.0ms → 0ms |   3 → 0 | `Main.parseJSONList`                                | `Profile.hs:50:10`                        |
|  -75.0% | -3.00ms | 0.1% → <0.1% |   4.0ms → 1.0ms |   4 → 1 | `Main.parseJSONList`                                | `Profile.hs:108:10`                       |
|  -37.5% | -3.00ms |  0.2% → 0.1% |   8.0ms → 5.0ms |   8 → 5 | `Main.top`                                          | `Profile.hs:115:1`                        |
|  -11.1% | -2.00ms |  0.5% → 0.4% | 18.0ms → 16.0ms | 18 → 16 | `Data.Aeson.Types.FromJSON.withArray`               | `src/Data/Aeson/Types/FromJSON.hs:742:1`  |
| removed | -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `Main.parseJSON`                                    | `Profile.hs:65:3`                         |
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
| removed | -3.00ms |  0.1% → 0.0% |     3.0ms → 0ms |   3 → 0 | `Main.parseJSONList`                                | `Profile.hs:50:10`                        |
|  -75.0% | -3.00ms | 0.1% → <0.1% |   4.0ms → 1.0ms |   4 → 1 | `Main.parseJSONList`                                | `Profile.hs:108:10`                       |
|  -37.5% | -3.00ms |  0.2% → 0.1% |   8.0ms → 5.0ms |   8 → 5 | `Main.top`                                          | `Profile.hs:115:1`                        |
|  -11.1% | -2.00ms |  0.5% → 0.4% | 18.0ms → 16.0ms | 18 → 16 | `Data.Aeson.Types.FromJSON.withArray`               | `src/Data/Aeson/Types/FromJSON.hs:742:1`  |
| removed | -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `Main.parseJSON`                                    | `Profile.hs:65:3`                         |
|   -9.1% | -1.00ms |  0.3% → 0.2% | 11.0ms → 10.0ms | 11 → 10 | `Data.Aeson.Types.Internal.prependFailure`          | `src/Data/Aeson/Types/Internal.hs:681:1`  |
|  -12.5% | -1.00ms |         0.2% |   8.0ms → 7.0ms |   8 → 7 | `Data.Aeson.Encoding.Builder.array`                 | `src/Data/Aeson/Encoding/Builder.hs:86:1` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `MAIN.MAIN` (`<unknown>`)

| Change |     Delta |             % |            Time |       Samples | Callee                  | Location           |
| -----: | --------: | ------------: | --------------: | ------------: | ----------------------- | ------------------ |
| +25.2% | +258.00ms | 28.2% → 31.3% |   1.02s → 1.28s | 1,024 → 1,282 | `GC.GC`                 | `<unknown>`        |
|  +8.0% | +208.00ms | 71.2% → 68.2% |   2.58s → 2.79s | 2,586 → 2,794 | `Main.main`             | `Profile.hs:146:1` |
| -33.3% |   -5.00ms |   0.4% → 0.2% | 15.0ms → 10.0ms |       15 → 10 | `PROFILING.OVERHEAD_of` | `<unknown>`        |
| +60.0% |   +3.00ms |   0.1% → 0.2% |   5.0ms → 8.0ms |         5 → 8 | `SYSTEM.SYSTEM`         | `<unknown>`        |

##### `Main.main` (`Profile.hs:146:1`)

| Change |     Delta |             % |              Time |       Samples | Callee                             | Location                          |
| -----: | --------: | ------------: | ----------------: | ------------: | ---------------------------------- | --------------------------------- |
|  +6.4% | +153.00ms | 92.8% → 91.4% |     2.40s → 2.55s | 2,401 → 2,554 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |
| +43.4% |  +46.00ms |   4.1% → 5.4% | 106.0ms → 152.0ms |     106 → 152 | `Main.keywords`                    | `Profile.hs:136:1`                |
| +20.0% |   +5.00ms |   1.0% → 1.1% |   25.0ms → 30.0ms |       25 → 30 | `Main.summarize`                   | `Profile.hs:118:1`                |
|  +6.1% |   +3.00ms |          1.9% |   49.0ms → 52.0ms |       49 → 52 | `Main.roundTrip`                   | `Profile.hs:139:1`                |

##### `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)

| Change |    Delta |             % |              Time |       Samples | Callee                                            | Location                                          |
| -----: | -------: | ------------: | ----------------: | ------------: | ------------------------------------------------- | ------------------------------------------------- |
|  +5.9% | +99.00ms | 68.9% → 68.8% |     1.67s → 1.76s | 1,670 → 1,769 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
|  +6.5% | +49.00ms | 31.1% → 31.2% | 755.0ms → 804.0ms |     755 → 804 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |

##### `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)

| Change |    Delta |           % |              Time |   Samples | Callee                                        | Location                                   |
| -----: | -------: | ----------: | ----------------: | --------: | --------------------------------------------- | ------------------------------------------ |
| +19.6% | +22.00ms | 6.7% → 7.6% | 112.0ms → 134.0ms | 112 → 134 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`  | `src/Data/Aeson/Internal/Text.hs:29:1`     |
| +16.2% | +11.00ms | 4.1% → 4.5% |   68.0ms → 79.0ms |   68 → 79 | `Data.Integer.Conversion.byteStringToInteger` | `src/Data/Integer/Conversion.hs:104:1`     |
| +15.6% | +10.00ms | 3.8% → 4.2% |   64.0ms → 74.0ms |   64 → 74 | `Data.Aeson.Internal.Unescape.unescapeText`   | `src/Data/Aeson/Internal/Unescape.hs:34:1` |

##### `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)

| Change |    Delta |             % |              Time |   Samples | Callee                                | Location                                 |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------------------- | ---------------------------------------- |
| +15.9% | +68.00ms | 56.8% → 61.8% | 429.0ms → 497.0ms | 429 → 497 | `Data.Aeson.KeyMap.fromList`          | `src/Data/Aeson/KeyMap.hs:247:1`         |
|  +3.5% |  +4.00ms | 15.0% → 14.6% | 113.0ms → 117.0ms | 113 → 117 | `Data.Aeson.Types.FromJSON.ifromJSON` | `src/Data/Aeson/Types/FromJSON.hs:839:1` |

##### `Main.keywords` (`Profile.hs:136:1`)

| Change |   Delta |             % |            Time | Samples | Callee       | Location           |
| -----: | ------: | ------------: | --------------: | ------: | ------------ | ------------------ |
| +46.7% | +7.00ms | 14.2% → 14.5% | 15.0ms → 22.0ms | 15 → 22 | `Main.tally` | `Profile.hs:112:1` |

##### `Data.Aeson.Encoding.Builder.encodeToBuilder` (`src/Data/Aeson/Encoding/Builder.hs:68:1`)

| Change |   Delta |             % |            Time | Samples | Callee                               | Location                                  |
| -----: | ------: | ------------: | --------------: | ------: | ------------------------------------ | ----------------------------------------- |
| +36.8% | +7.00ms | 95.0% → 86.7% | 19.0ms → 26.0ms | 19 → 26 | `Data.Aeson.Encoding.Builder.object` | `src/Data/Aeson/Encoding/Builder.hs:96:1` |

##### `Data.Aeson.Encoding.Internal.value` (`src/Data/Aeson/Encoding/Internal.hs:441:1`)

| Change |    Delta |      % |            Time | Samples | Callee                                        | Location                                  |
| -----: | -------: | -----: | --------------: | ------: | --------------------------------------------- | ----------------------------------------- |
| +50.0% | +10.00ms | 100.0% | 20.0ms → 30.0ms | 20 → 30 | `Data.Aeson.Encoding.Builder.encodeToBuilder` | `src/Data/Aeson/Encoding/Builder.hs:68:1` |

##### `Main.parseJSON` (`Profile.hs:48:3`)

| Change |   Delta |      % |              Time |   Samples | Callee                                 | Location                                 |
| -----: | ------: | -----: | ----------------: | --------: | -------------------------------------- | ---------------------------------------- |
|  +9.0% | +9.00ms | 100.0% | 100.0ms → 109.0ms | 100 → 109 | `Data.Aeson.Types.FromJSON.withObject` | `src/Data/Aeson/Types/FromJSON.hs:720:1` |

##### `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`)

| Change |   Delta |              % |            Time | Samples | Callee            | Location           |
| -----: | ------: | -------------: | --------------: | ------: | ----------------- | ------------------ |
| +24.0% | +6.00ms | 100.0% → 93.9% | 25.0ms → 31.0ms | 25 → 31 | `Main.toEncoding` | `Profile.hs:83:10` |

##### `Data.Aeson.Encoding.Builder.object` (`src/Data/Aeson/Encoding/Builder.hs:96:1`)

|  Change |   Delta |             % |            Time | Samples | Callee                              | Location                                   |
| ------: | ------: | ------------: | --------------: | ------: | ----------------------------------- | ------------------------------------------ |
|   +7.1% | +1.00ms | 73.7% → 57.7% | 14.0ms → 15.0ms | 14 → 15 | `Data.Aeson.Encoding.Builder.text`  | `src/Data/Aeson/Encoding/Builder.hs:109:1` |
|  +33.3% | +1.00ms | 15.8% → 15.4% |   3.0ms → 4.0ms |   3 → 4 | `Data.Aeson.Encoding.Builder.array` | `src/Data/Aeson/Encoding/Builder.hs:86:1`  |
| +100.0% | +1.00ms |   5.3% → 7.7% |   1.0ms → 2.0ms |   1 → 2 | `Data.Aeson.KeyMap.toList`          | `src/Data/Aeson/KeyMap.hs:253:1`           |
|     new | +1.00ms |   0.0% → 3.8% |     0ms → 1.0ms |   0 → 1 | `Data.Aeson.Key.toText`             | `src/Data/Aeson/Key.hs:57:1`               |

##### `Main.toEncoding` (`Profile.hs:83:10`)

| Change |    Delta |             % |            Time | Samples | Callee                               | Location                                    |
| -----: | -------: | ------------: | --------------: | ------: | ------------------------------------ | ------------------------------------------- |
| +50.0% | +10.00ms | 80.0% → 96.8% | 20.0ms → 30.0ms | 20 → 30 | `Data.Aeson.Encoding.Internal.value` | `src/Data/Aeson/Encoding/Internal.hs:441:1` |
| -80.0% |  -4.00ms |  20.0% → 3.2% |   5.0ms → 1.0ms |   5 → 1 | `Main.toJSON`                        | `Profile.hs:84:3`                           |

##### `Main.summarize` (`Profile.hs:118:1`)

| Change |   Delta |             % |          Time | Samples | Callee     | Location           |
| -----: | ------: | ------------: | ------------: | ------: | ---------- | ------------------ |
| -37.5% | -3.00ms | 32.0% → 16.7% | 8.0ms → 5.0ms |   8 → 5 | `Main.top` | `Profile.hs:115:1` |

##### `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`)

| Change |   Delta |             % |              Time |   Samples | Callee           | Location          |
| -----: | ------: | ------------: | ----------------: | --------: | ---------------- | ----------------- |
|  +9.0% | +9.00ms | 88.5% → 93.2% | 100.0ms → 109.0ms | 100 → 109 | `Main.parseJSON` | `Profile.hs:48:3` |
| -41.7% | -5.00ms |  10.6% → 6.0% |    12.0ms → 7.0ms |    12 → 7 | `Main.parseJSON` | `Profile.hs:96:3` |

##### `Data.Aeson.Types.FromJSON.withText` (`src/Data/Aeson/Types/FromJSON.hs:731:1`)

|  Change |   Delta |             % |          Time | Samples | Callee                          | Location                                 |
| ------: | ------: | ------------: | ------------: | ------: | ------------------------------- | ---------------------------------------- |
|  -80.0% | -4.00ms | 33.3% → 16.7% | 5.0ms → 1.0ms |   5 → 1 | `Main.parseJSONList`            | `Profile.hs:71:10`                       |
| removed | -1.00ms |   6.7% → 0.0% |   1.0ms → 0ms |   1 → 0 | `Data.Aeson.Types.FromJSON..:?` | `src/Data/Aeson/Types/FromJSON.hs:859:1` |
|  -50.0% | -1.00ms | 13.3% → 16.7% | 2.0ms → 1.0ms |   2 → 1 | `Main.parseJSONList`            | `Profile.hs:108:10`                      |

##### `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`)

|  Change |   Delta |             % |          Time | Samples | Callee                                     | Location                                 |
| ------: | ------: | ------------: | ------------: | ------: | ------------------------------------------ | ---------------------------------------- |
|  -71.4% | -5.00ms | 28.0% → 11.8% | 7.0ms → 2.0ms |   7 → 2 | `Data.Aeson.Types.FromJSON.withText`       | `src/Data/Aeson/Types/FromJSON.hs:731:1` |
| removed | -2.00ms |   8.0% → 0.0% |   2.0ms → 0ms |   2 → 0 | `Data.Aeson.Types.FromJSON..:?`            | `src/Data/Aeson/Types/FromJSON.hs:859:1` |
|  +28.6% | +2.00ms | 28.0% → 52.9% | 7.0ms → 9.0ms |   7 → 9 | `Data.Aeson.Types.Internal.prependFailure` | `src/Data/Aeson/Types/Internal.hs:681:1` |
|  -33.3% | -1.00ms | 12.0% → 11.8% | 3.0ms → 2.0ms |   3 → 2 | `Main.parseJSONList`                       | `Profile.hs:71:10`                       |
| removed | -1.00ms |   4.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `Main.parseJSONList`                       | `Profile.hs:108:10`                      |

##### `Main.parseJSON` (`Profile.hs:96:3`)

| Change |   Delta |      % |           Time | Samples | Callee                                 | Location                                 |
| -----: | ------: | -----: | -------------: | ------: | -------------------------------------- | ---------------------------------------- |
| -41.7% | -5.00ms | 100.0% | 12.0ms → 7.0ms |  12 → 7 | `Data.Aeson.Types.FromJSON.withObject` | `src/Data/Aeson/Types/FromJSON.hs:720:1` |

##### `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` (`src/Data/Aeson/Types/FromJSON.hs:923:1`)

| Change |   Delta |             % |          Time | Samples | Callee                               | Location                                 |
| -----: | ------: | ------------: | ------------: | ------: | ------------------------------------ | ---------------------------------------- |
| -83.3% | -5.00ms | 54.5% → 16.7% | 6.0ms → 1.0ms |   6 → 1 | `Data.Aeson.Types.FromJSON.withText` | `src/Data/Aeson/Types/FromJSON.hs:731:1` |
| -50.0% | -1.00ms | 18.2% → 16.7% | 2.0ms → 1.0ms |   2 → 1 | `Data.Aeson.KeyMap.lookup`           | `src/Data/Aeson/KeyMap.hs:178:1`         |

##### `Data.Aeson.Types.FromJSON..:?` (`src/Data/Aeson/Types/FromJSON.hs:859:1`)

| Change |   Delta |      % |           Time | Samples | Callee                                              | Location                                 |
| -----: | ------: | -----: | -------------: | ------: | --------------------------------------------------- | ---------------------------------------- |
| -45.5% | -5.00ms | 100.0% | 11.0ms → 6.0ms |  11 → 6 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1` |

##### `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`)

| Change |   Delta |             % |          Time | Samples | Callee                      | Location                        |
| -----: | ------: | ------------: | ------------: | ------: | --------------------------- | ------------------------------- |
| -66.7% | -4.00ms | 42.9% → 22.2% | 6.0ms → 2.0ms |   6 → 2 | `Data.Scientific.normalize` | `src/Data/Scientific.hs:1102:1` |
| +50.0% | +1.00ms | 14.3% → 33.3% | 2.0ms → 3.0ms |   2 → 3 | `Utils.magnitude`           | `src/Utils.hs:78:1`             |

##### `Main.toJSON` (`Profile.hs:84:3`)

| Change |   Delta |              % |          Time | Samples | Callee                       | Location                         |
| -----: | ------: | -------------: | ------------: | ------: | ---------------------------- | -------------------------------- |
| -50.0% | -1.00ms | 40.0% → 100.0% | 2.0ms → 1.0ms |   2 → 1 | `Data.Aeson.KeyMap.fromList` | `src/Data/Aeson/KeyMap.hs:247:1` |

##### `Main.parseJSONList` (`Profile.hs:50:10`)

|  Change |   Delta |            % |        Time | Samples | Callee                                | Location                                 |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------------------- | ---------------------------------------- |
| removed | -2.00ms | 66.7% → 0.0% | 2.0ms → 0ms |   2 → 0 | `Data.Aeson.Types.FromJSON.withArray` | `src/Data/Aeson/Types/FromJSON.hs:742:1` |

##### `Main.parseJSONList` (`Profile.hs:108:10`)

| Change |   Delta |      % |          Time | Samples | Callee                                | Location                                 |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------- | ---------------------------------------- |
| -75.0% | -3.00ms | 100.0% | 4.0ms → 1.0ms |   4 → 1 | `Data.Aeson.Types.FromJSON.withArray` | `src/Data/Aeson/Types/FromJSON.hs:742:1` |

##### `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`)

| Change |   Delta |             % |          Time | Samples | Callee                                       | Location                                 |
| -----: | ------: | ------------: | ------------: | ------: | -------------------------------------------- | ---------------------------------------- |
| +25.0% | +1.00ms | 22.2% → 31.3% | 4.0ms → 5.0ms |   4 → 5 | `Data.Aeson.Types.FromJSON.parseIndexedJSON` | `src/Data/Aeson/Types/FromJSON.hs:171:1` |

##### `Data.Aeson.Types.Internal.prependFailure` (`src/Data/Aeson/Types/Internal.hs:681:1`)

| Change |   Delta |             % |          Time | Samples | Callee                                    | Location                                 |
| -----: | ------: | ------------: | ------------: | ------: | ----------------------------------------- | ---------------------------------------- |
| +28.6% | +2.00ms | 63.6% → 90.0% | 7.0ms → 9.0ms |   7 → 9 | `Data.Aeson.Types.Internal.modifyFailure` | `src/Data/Aeson/Types/Internal.hs:671:1` |

##### `Data.Aeson.Encoding.Builder.array` (`src/Data/Aeson/Encoding/Builder.hs:86:1`)

|  Change |   Delta |             % |          Time | Samples | Callee                             | Location                                   |
| ------: | ------: | ------------: | ------------: | ------: | ---------------------------------- | ------------------------------------------ |
| +200.0% | +2.00ms | 12.5% → 42.9% | 1.0ms → 3.0ms |   1 → 3 | `Data.Aeson.Encoding.Builder.text` | `src/Data/Aeson/Encoding/Builder.hs:109:1` |

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

##### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

###### `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)

| Change |        Delta |      % |                Size | Caller                             | Location                          |
| -----: | -----------: | -----: | ------------------: | ---------------------------------- | --------------------------------- |
| +10.0% | +615.542 MiB | 100.0% | 6.01 GiB → 6.61 GiB | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

###### `Data.Aeson.KeyMap.fromList` (`src/Data/Aeson/KeyMap.hs:247:1`)

| Change |        Delta |     % |                Size | Caller                                         | Location                                     |
| -----: | -----------: | ----: | ------------------: | ---------------------------------------------- | -------------------------------------------- |
| +10.0% | +157.429 MiB | 99.9% | 1.54 GiB → 1.69 GiB | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |
| +10.0% |     +225 KiB |  0.1% |  2.2 MiB → 2.42 MiB | `Main.toJSON`                                  | `Profile.hs:84:3`                            |

###### `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)

| Change |       Delta |      % |              Size | Caller                             | Location                          |
| -----: | ----------: | -----: | ----------------: | ---------------------------------- | --------------------------------- |
| +10.0% | +85.861 MiB | 100.0% | 859 MiB → 944 MiB | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

###### `Data.Aeson.Internal.Text.unsafeDecodeASCII` (`src/Data/Aeson/Internal/Text.hs:29:1`)

| Change |       Delta |      % |              Size | Caller                                            | Location                                          |
| -----: | ----------: | -----: | ----------------: | ------------------------------------------------- | ------------------------------------------------- |
| +10.0% | +54.694 MiB | 100.0% | 547 MiB → 602 MiB | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

###### `Main.keywords` (`Profile.hs:136:1`)

| Change |       Delta |      % |              Size | Caller      | Location           |
| -----: | ----------: | -----: | ----------------: | ----------- | ------------------ |
| +10.0% | +45.929 MiB | 100.0% | 459 MiB → 505 MiB | `Main.main` | `Profile.hs:146:1` |

###### `Data.Integer.Conversion.byteStringToInteger` (`src/Data/Integer/Conversion.hs:104:1`)

| Change |       Delta |      % |              Size | Caller                                            | Location                                          |
| -----: | ----------: | -----: | ----------------: | ------------------------------------------------- | ------------------------------------------------- |
| +10.0% | +18.255 MiB | 100.0% | 183 MiB → 201 MiB | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

###### `Data.Aeson.Internal.Unescape.unescapeText` (`src/Data/Aeson/Internal/Unescape.hs:34:1`)

| Change |      Delta |      % |               Size | Caller                                            | Location                                          |
| -----: | ---------: | -----: | -----------------: | ------------------------------------------------- | ------------------------------------------------- |
| +10.0% | +9.622 MiB | 100.0% | 96.2 MiB → 106 MiB | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

###### `Main.tally` (`Profile.hs:112:1`)

| Change |      Delta |     % |                Size | Caller           | Location           |
| -----: | ---------: | ----: | ------------------: | ---------------- | ------------------ |
| +10.0% | +6.655 MiB | 81.4% | 66.6 MiB → 73.2 MiB | `Main.keywords`  | `Profile.hs:136:1` |
| +10.0% | +1.516 MiB | 18.6% | 15.2 MiB → 16.7 MiB | `Main.summarize` | `Profile.hs:118:1` |

###### `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`)

| Change |      Delta |      % |                Size | Caller                         | Location                                 |
| -----: | ---------: | -----: | ------------------: | ------------------------------ | ---------------------------------------- |
| +10.0% | +4.965 MiB | 100.0% | 49.7 MiB → 54.6 MiB | `Data.Aeson.Types.FromJSON..:` | `src/Data/Aeson/Types/FromJSON.hs:849:1` |

###### `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`)

| Change |        Delta |     % |                Size | Caller               | Location            |
| -----: | -----------: | ----: | ------------------: | -------------------- | ------------------- |
| +10.0% |   +2.602 MiB | 70.7% |   26 MiB → 28.6 MiB | `Main.parseJSONList` | `Profile.hs:71:10`  |
| +10.0% | +722.265 KiB | 19.1% | 7.05 MiB → 7.76 MiB | `Main.parseJSONList` | `Profile.hs:50:10`  |
| +10.0% | +384.375 KiB | 10.2% | 3.75 MiB → 4.13 MiB | `Main.parseJSONList` | `Profile.hs:108:10` |

###### `Main.summarize` (`Profile.hs:118:1`)

| Change |     Delta |      % |                Size | Caller      | Location           |
| -----: | --------: | -----: | ------------------: | ----------- | ------------------ |
| +10.0% | +3.38 MiB | 100.0% | 33.8 MiB → 37.2 MiB | `Main.main` | `Profile.hs:146:1` |

###### `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`)

| Change |      Delta |      % |                Size | Caller                                         | Location                                 |
| -----: | ---------: | -----: | ------------------: | ---------------------------------------------- | ---------------------------------------- |
| +10.0% | +2.977 MiB | 100.0% | 29.8 MiB → 32.8 MiB | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

###### `Data.Aeson.Types.FromJSON.withText` (`src/Data/Aeson/Types/FromJSON.hs:731:1`)

| Change |        Delta |     % |                Size | Caller                                              | Location                                 |
| -----: | -----------: | ----: | ------------------: | --------------------------------------------------- | ---------------------------------------- |
| +10.0% |   +1.182 MiB | 40.5% |   11.8 MiB → 13 MiB | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1` |
| +10.0% | +846.875 KiB | 28.3% |  8.27 MiB → 9.1 MiB | `Data.Aeson.Types.Internal.<?>`                     | `src/Data/Aeson/Types/Internal.hs:659:1` |
| +10.0% | +680.468 KiB | 22.7% | 6.65 MiB → 7.31 MiB | `Data.Aeson.Types.Internal.modifyFailure`           | `src/Data/Aeson/Types/Internal.hs:671:1` |
| +10.0% | +253.125 KiB |  8.5% | 2.47 MiB → 2.72 MiB | `Data.Aeson.Types.FromJSON.explicitParseField`      | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

###### `PROFILING.OVERHEAD_of` (`<unknown>`)

| Change |      Delta |      % |                Size | Caller      | Location    |
| -----: | ---------: | -----: | ------------------: | ----------- | ----------- |
| +10.0% | +2.871 MiB | 100.0% | 28.7 MiB → 31.6 MiB | `MAIN.MAIN` | `<unknown>` |

###### `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`)

| Change |        Delta |     % |                Size | Caller           | Location          |
| -----: | -----------: | ----: | ------------------: | ---------------- | ----------------- |
| +10.0% |   +2.121 MiB | 95.0% | 21.2 MiB → 23.3 MiB | `Main.parseJSON` | `Profile.hs:48:3` |
| +10.0% | +113.281 KiB |  5.0% | 1.11 MiB → 1.22 MiB | `Main.parseJSON` | `Profile.hs:96:3` |

###### `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`)

| Change |      Delta |      % |              Size | Caller                                 | Location                                 |
| -----: | ---------: | -----: | ----------------: | -------------------------------------- | ---------------------------------------- |
| +10.0% | +1.901 MiB | 100.0% | 19 MiB → 20.9 MiB | `Data.Aeson.Types.FromJSON.withObject` | `src/Data/Aeson/Types/FromJSON.hs:720:1` |

###### `Main.top` (`Profile.hs:115:1`)

| Change |      Delta |      % |                Size | Caller           | Location           |
| -----: | ---------: | -----: | ------------------: | ---------------- | ------------------ |
| +10.0% | +1.835 MiB | 100.0% | 18.4 MiB → 20.2 MiB | `Main.summarize` | `Profile.hs:118:1` |

###### `Data.Aeson.Encoding.Builder.array` (`src/Data/Aeson/Encoding/Builder.hs:86:1`)

| Change |        Delta |     % |                Size | Caller                                        | Location                                   |
| -----: | -----------: | ----: | ------------------: | --------------------------------------------- | ------------------------------------------ |
| +10.0% | +776.562 KiB | 50.1% | 7.58 MiB → 8.34 MiB | `Data.Aeson.Encoding.Builder.object`          | `src/Data/Aeson/Encoding/Builder.hs:96:1`  |
| +10.0% | +644.531 KiB | 41.6% | 6.29 MiB → 6.92 MiB | `Data.Aeson.Encoding.Builder.text`            | `src/Data/Aeson/Encoding/Builder.hs:109:1` |
| +10.0% | +122.656 KiB |  7.9% |  1.2 MiB → 1.32 MiB | `Data.Aeson.Encoding.Builder.encodeToBuilder` | `src/Data/Aeson/Encoding/Builder.hs:68:1`  |
| +10.0% |   +7.031 KiB |  0.5% | 70.3 KiB → 77.3 KiB | `Data.Aeson.Encoding.Builder.unquoted`        | `src/Data/Aeson/Encoding/Builder.hs:113:1` |

###### `Data.Aeson.Encoding.Builder.text` (`src/Data/Aeson/Encoding/Builder.hs:109:1`)

| Change |        Delta |     % |                Size | Caller                                        | Location                                  |
| -----: | -----------: | ----: | ------------------: | --------------------------------------------- | ----------------------------------------- |
| +10.0% | +862.109 KiB | 61.3% | 8.42 MiB → 9.26 MiB | `Data.Aeson.Encoding.Builder.object`          | `src/Data/Aeson/Encoding/Builder.hs:96:1` |
| +10.0% | +441.796 KiB | 31.4% | 4.31 MiB → 4.75 MiB | `Data.Aeson.Encoding.Builder.array`           | `src/Data/Aeson/Encoding/Builder.hs:86:1` |
| +10.0% | +101.953 KiB |  7.3% | 1,020 KiB → 1.1 MiB | `Data.Aeson.Encoding.Builder.encodeToBuilder` | `src/Data/Aeson/Encoding/Builder.hs:68:1` |

###### `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`)

| Change |      Delta |      % |                Size | Caller                                         | Location                                 |
| -----: | ---------: | -----: | ------------------: | ---------------------------------------------- | ---------------------------------------- |
| +10.0% | +1.291 MiB | 100.0% | 12.9 MiB → 14.2 MiB | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

###### `Data.Aeson.KeyMap.lookup` (`src/Data/Aeson/KeyMap.hs:178:1`)

| Change |        Delta |     % |                Size | Caller                                              | Location                                 |
| -----: | -----------: | ----: | ------------------: | --------------------------------------------------- | ---------------------------------------- |
| +10.0% | +905.468 KiB | 92.1% | 8.84 MiB → 9.73 MiB | `Data.Aeson.Types.FromJSON.explicitParseField`      | `src/Data/Aeson/Types/FromJSON.hs:917:1` |
| +10.0% |  +78.125 KiB |  7.9% |   781 KiB → 859 KiB | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1` |

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

##### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

###### `MAIN.MAIN` (`<unknown>`)

| Change |      Delta |     % |                Size | Callee                  | Location           |
| -----: | ---------: | ----: | ------------------: | ----------------------- | ------------------ |
| +10.0% | +1.005 GiB | 99.7% | 10.1 GiB → 11.1 GiB | `Main.main`             | `Profile.hs:146:1` |
| +10.0% | +2.871 MiB |  0.3% | 28.7 MiB → 31.6 MiB | `PROFILING.OVERHEAD_of` | `<unknown>`        |

###### `Main.main` (`Profile.hs:146:1`)

| Change |        Delta |     % |                Size | Callee                             | Location                          |
| -----: | -----------: | ----: | ------------------: | ---------------------------------- | --------------------------------- |
| +10.0% | +960.385 MiB | 93.2% | 9.38 GiB → 10.3 GiB | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |
| +10.0% |  +52.585 MiB |  5.1% |   526 MiB → 578 MiB | `Main.keywords`                    | `Profile.hs:136:1`                |
| +10.0% |  +10.267 MiB |  1.0% |   103 MiB → 113 MiB | `Main.roundTrip`                   | `Profile.hs:139:1`                |
| +10.0% |   +6.732 MiB |  0.7% | 67.3 MiB → 74.1 MiB | `Main.summarize`                   | `Profile.hs:118:1`                |
| +16.9% |  +32.859 KiB | <0.1% |   194 KiB → 227 KiB | `Main.pad`                         | `Profile.hs:142:1`                |

###### `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)

| Change |        Delta |     % |                Size | Callee                                            | Location                                          |
| -----: | -----------: | ----: | ------------------: | ------------------------------------------------- | ------------------------------------------------- |
| +10.0% | +698.119 MiB | 72.3% |  6.82 GiB → 7.5 GiB | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| +10.0% | +267.484 MiB | 27.7% | 2.61 GiB → 2.87 GiB | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |

###### `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)

| Change |       Delta |     % |                Size | Callee                                        | Location                                   |
| -----: | ----------: | ----: | ------------------: | --------------------------------------------- | ------------------------------------------ |
| +10.0% | +54.694 MiB |  7.8% |   547 MiB → 602 MiB | `Data.Aeson.Internal.Text.unsafeDecodeASCII`  | `src/Data/Aeson/Internal/Text.hs:29:1`     |
| +10.0% | +18.255 MiB |  2.6% |   183 MiB → 201 MiB | `Data.Integer.Conversion.byteStringToInteger` | `src/Data/Integer/Conversion.hs:104:1`     |
| +10.0% |  +9.622 MiB |  1.4% |  96.2 MiB → 106 MiB | `Data.Aeson.Internal.Unescape.unescapeText`   | `src/Data/Aeson/Internal/Unescape.hs:34:1` |
| +10.0% |  +4.687 KiB | <0.1% | 46.9 KiB → 51.6 KiB | `Data.Aeson.Decoding.Internal.negateNumber`   | `src/Data/Aeson/Decoding/Internal.hs:12:1` |

###### `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)

| Change |        Delta |     % |                Size | Callee                                | Location                                 |
| -----: | -----------: | ----: | ------------------: | ------------------------------------- | ---------------------------------------- |
| +10.0% | +157.429 MiB | 58.9% | 1.54 GiB → 1.69 GiB | `Data.Aeson.KeyMap.fromList`          | `src/Data/Aeson/KeyMap.hs:247:1`         |
| +10.0% |  +24.192 MiB |  9.0% |   242 MiB → 266 MiB | `Data.Aeson.Types.FromJSON.ifromJSON` | `src/Data/Aeson/Types/FromJSON.hs:839:1` |

###### `Main.keywords` (`Profile.hs:136:1`)

| Change |      Delta |     % |                Size | Callee       | Location           |
| -----: | ---------: | ----: | ------------------: | ------------ | ------------------ |
| +10.0% | +6.655 MiB | 12.7% | 66.6 MiB → 73.2 MiB | `Main.tally` | `Profile.hs:112:1` |

###### `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`)

| Change |      Delta |     % |                Size | Callee           | Location          |
| -----: | ---------: | ----: | ------------------: | ---------------- | ----------------- |
| +10.0% | +22.67 MiB | 93.7% |   227 MiB → 249 MiB | `Main.parseJSON` | `Profile.hs:48:3` |
| +10.0% | +1.519 MiB |  6.3% | 15.2 MiB → 16.7 MiB | `Main.parseJSON` | `Profile.hs:96:3` |

###### `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`)

| Change |        Delta |     % |                Size | Callee                          | Location                                 |
| -----: | -----------: | ----: | ------------------: | ------------------------------- | ---------------------------------------- |
| +10.0% |  +21.232 MiB | 87.8% |   212 MiB → 234 MiB | `Data.Aeson.Types.FromJSON..:`  | `src/Data/Aeson/Types/FromJSON.hs:849:1` |
| +10.0% | +742.187 KiB |  3.0% | 7.25 MiB → 7.97 MiB | `Data.Aeson.Types.FromJSON..:?` | `src/Data/Aeson/Types/FromJSON.hs:859:1` |

###### `Main.parseJSON` (`Profile.hs:48:3`)

| Change |      Delta |      % |              Size | Callee                                 | Location                                 |
| -----: | ---------: | -----: | ----------------: | -------------------------------------- | ---------------------------------------- |
| +10.0% | +22.67 MiB | 100.0% | 227 MiB → 249 MiB | `Data.Aeson.Types.FromJSON.withObject` | `src/Data/Aeson/Types/FromJSON.hs:720:1` |

###### `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`)

| Change |       Delta |     % |              Size | Callee                                         | Location                                 |
| -----: | ----------: | ----: | ----------------: | ---------------------------------------------- | ---------------------------------------- |
| +10.0% | +19.331 MiB | 91.0% | 193 MiB → 213 MiB | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

###### `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`)

| Change |        Delta |     % |                Size | Callee                             | Location                                 |
| -----: | -----------: | ----: | ------------------: | ---------------------------------- | ---------------------------------------- |
| +10.0% |   +7.976 MiB | 41.3% | 79.8 MiB → 87.7 MiB | `Data.Aeson.Types.Internal.<?>`    | `src/Data/Aeson/Types/Internal.hs:659:1` |
| +10.0% |   +2.488 MiB | 12.9% | 24.9 MiB → 27.4 MiB | `Data.Scientific.toBoundedInteger` | `src/Data/Scientific.hs:772:1`           |
| +10.0% |   +1.138 MiB |  5.9% | 11.4 MiB → 12.5 MiB | `Main.parseJSONList`               | `Profile.hs:71:10`                       |
| +10.0% | +905.468 KiB |  4.6% | 8.84 MiB → 9.73 MiB | `Data.Aeson.KeyMap.lookup`         | `src/Data/Aeson/KeyMap.hs:178:1`         |
| +10.0% |     +900 KiB |  4.5% | 8.79 MiB → 9.67 MiB | `Main.parseJSONList`               | `Profile.hs:50:10`                       |

###### `Main.roundTrip` (`Profile.hs:139:1`)

| Change |      Delta |     % |                Size | Callee                             | Location                          |
| -----: | ---------: | ----: | ------------------: | ---------------------------------- | --------------------------------- |
| +10.0% |  +5.22 MiB | 50.8% | 52.2 MiB → 57.4 MiB | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |
| +10.0% | +5.045 MiB | 49.1% | 50.5 MiB → 55.5 MiB | `Data.Aeson.encode`                | `src/Data/Aeson.hs:187:1`         |

###### `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`)

| Change |        Delta |     % |                Size | Callee                                     | Location                                 |
| -----: | -----------: | ----: | ------------------: | ------------------------------------------ | ---------------------------------------- |
| +10.0% |   +1.946 MiB | 24.4% | 19.5 MiB → 21.4 MiB | `Data.Aeson.Types.Internal.prependFailure` | `src/Data/Aeson/Types/Internal.hs:681:1` |
| +10.0% |   +1.911 MiB | 24.0% |   19.1 MiB → 21 MiB | `Data.Aeson.Types.FromJSON.withText`       | `src/Data/Aeson/Types/FromJSON.hs:731:1` |
| +10.0% |     +650 KiB |  8.0% | 6.35 MiB → 6.98 MiB | `Main.parseJSONList`                       | `Profile.hs:71:10`                       |
| +10.0% | +507.812 KiB |  6.2% | 4.96 MiB → 5.46 MiB | `Data.Aeson.Types.FromJSON..:?`            | `src/Data/Aeson/Types/FromJSON.hs:859:1` |
| +10.0% |   +7.812 KiB |  0.1% | 78.1 KiB → 85.9 KiB | `Main.parseJSONList`                       | `Profile.hs:108:10`                      |

###### `Main.summarize` (`Profile.hs:118:1`)

| Change |      Delta |     % |                Size | Callee       | Location           |
| -----: | ---------: | ----: | ------------------: | ------------ | ------------------ |
| +10.0% | +1.835 MiB | 27.3% | 18.4 MiB → 20.2 MiB | `Main.top`   | `Profile.hs:115:1` |
| +10.0% | +1.516 MiB | 22.5% | 15.2 MiB → 16.7 MiB | `Main.tally` | `Profile.hs:112:1` |

###### `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`)

| Change |      Delta |     % |                Size | Callee            | Location           |
| -----: | ---------: | ----: | ------------------: | ----------------- | ------------------ |
| +10.0% | +4.779 MiB | 94.7% | 47.8 MiB → 52.6 MiB | `Main.toEncoding` | `Profile.hs:83:10` |

###### `Main.toEncoding` (`Profile.hs:83:10`)

| Change |       Delta |     % |                Size | Callee                               | Location                                    |
| -----: | ----------: | ----: | ------------------: | ------------------------------------ | ------------------------------------------- |
| +10.0% |  +4.026 MiB | 84.3% | 40.3 MiB → 44.3 MiB | `Data.Aeson.Encoding.Internal.value` | `src/Data/Aeson/Encoding/Internal.hs:441:1` |
| +10.0% | +768.75 KiB | 15.7% | 7.51 MiB → 8.26 MiB | `Main.toJSON`                        | `Profile.hs:84:3`                           |

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

##### Callers

Callers with the largest change in contribution to each function's self entries. Inlining can make caller attribution imprecise.

###### `Data.Aeson.Internal.Text.unsafeDecodeASCII` (`src/Data/Aeson/Internal/Text.hs:29:1`)

| Change |    Delta |      % |               Entries | Caller                                            | Location                                          |
| -----: | -------: | -----: | --------------------: | ------------------------------------------------- | ------------------------------------------------- |
| +10.0% | +868,850 | 100.0% | 8,688,500 → 9,557,350 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

###### `Data.Vector.Fusion.Util.unId` (`src/Data/Vector/Fusion/Util.hs:25:21`)

| Change |   Delta |     % |           Entries | Caller                                         | Location                                     |
| -----: | ------: | ----: | ----------------: | ---------------------------------------------- | -------------------------------------------- |
| +10.0% | +82,550 | 77.7% | 825,500 → 908,050 | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |
| +10.0% | +21,450 | 20.2% | 214,500 → 235,950 | `Data.Aeson.Types.FromJSON.withArray`          | `src/Data/Aeson/Types/FromJSON.hs:742:1`     |
| +10.0% |  +1,650 |  1.6% |   16,500 → 18,150 | `Main.toJSON`                                  | `Profile.hs:84:3`                            |
| +10.0% |    +600 |  0.6% |     6,000 → 6,600 | `Data.Aeson.Encoding.Builder.array`            | `src/Data/Aeson/Encoding/Builder.hs:86:1`    |

###### `Data.Primitive.Array.marray#` (`Data/Primitive/Array.hs:109:5`)

| Change |   Delta |     % |           Entries | Caller                                         | Location                                     |
| -----: | ------: | ----: | ----------------: | ---------------------------------------------- | -------------------------------------------- |
| +10.0% | +82,550 | 98.0% | 825,500 → 908,050 | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |
| +10.0% |  +1,650 |  2.0% |   16,500 → 18,150 | `Main.toJSON`                                  | `Profile.hs:84:3`                            |

###### `Data.Integer.Conversion.byteStringToInteger` (`src/Data/Integer/Conversion.hs:104:1`)

| Change |   Delta |      % |           Entries | Caller                                            | Location                                          |
| -----: | ------: | -----: | ----------------: | ------------------------------------------------- | ------------------------------------------------- |
| +10.0% | +83,850 | 100.0% | 838,500 → 922,350 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

###### `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`)

| Change |   Delta |     % |           Entries | Caller                                              | Location                                 |
| -----: | ------: | ----: | ----------------: | --------------------------------------------------- | ---------------------------------------- |
| +10.0% | +57,950 | 78.2% | 579,500 → 637,450 | `Data.Aeson.Types.FromJSON.explicitParseField`      | `src/Data/Aeson/Types/FromJSON.hs:917:1` |
| +10.0% | +11,200 | 15.1% | 112,000 → 123,200 | `Data.Aeson.Types.FromJSON.parseIndexedJSON`        | `src/Data/Aeson/Types/FromJSON.hs:171:1` |
| +10.0% |  +5,000 |  6.7% |   50,000 → 55,000 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1` |

###### `Data.Aeson.KeyMap.lookup` (`src/Data/Aeson/KeyMap.hs:178:1`)

| Change |   Delta |     % |           Entries | Caller                                              | Location                                 |
| -----: | ------: | ----: | ----------------: | --------------------------------------------------- | ---------------------------------------- |
| +10.0% | +62,300 | 92.6% | 623,000 → 685,300 | `Data.Aeson.Types.FromJSON.explicitParseField`      | `src/Data/Aeson/Types/FromJSON.hs:917:1` |
| +10.0% |  +5,000 |  7.4% |   50,000 → 55,000 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1` |

###### `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`)

| Change |   Delta |      % |           Entries | Caller                                 | Location                                 |
| -----: | ------: | -----: | ----------------: | -------------------------------------- | ---------------------------------------- |
| +10.0% | +62,300 | 100.0% | 623,000 → 685,300 | `Data.Aeson.Types.FromJSON.withObject` | `src/Data/Aeson/Types/FromJSON.hs:720:1` |

###### `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`)

| Change |   Delta |      % |           Entries | Caller                         | Location                                 |
| -----: | ------: | -----: | ----------------: | ------------------------------ | ---------------------------------------- |
| +10.0% | +62,300 | 100.0% | 623,000 → 685,300 | `Data.Aeson.Types.FromJSON..:` | `src/Data/Aeson/Types/FromJSON.hs:849:1` |

###### `Data.Vector.Fusion.Bundle.Monadic.sChunks` (`src/Data/Vector/Fusion/Bundle/Monadic.hs:122:30`)

| Change |   Delta |     % |           Entries | Caller                                         | Location                                     |
| -----: | ------: | ----: | ----------------: | ---------------------------------------------- | -------------------------------------------- |
| +10.0% | +52,700 | 99.6% | 527,000 → 579,700 | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |
| +10.0% |    +200 |  0.4% |     2,000 → 2,200 | `Main.toJSON`                                  | `Profile.hs:84:3`                            |

###### `Data.Vector.Fusion.Bundle.Monadic.sSize` (`src/Data/Vector/Fusion/Bundle/Monadic.hs:124:30`)

| Change |   Delta |     % |           Entries | Caller                                         | Location                                     |
| -----: | ------: | ----: | ----------------: | ---------------------------------------------- | -------------------------------------------- |
| +10.0% | +52,700 | 99.6% | 527,000 → 579,700 | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |
| +10.0% |    +200 |  0.4% |     2,000 → 2,200 | `Main.toJSON`                                  | `Profile.hs:84:3`                            |

###### `Data.Vector.Fusion.Bundle.Size.upperBound` (`src/Data/Vector/Fusion/Bundle/Size.hs:129:1`)

| Change |   Delta |     % |           Entries | Caller                                         | Location                                     |
| -----: | ------: | ----: | ----------------: | ---------------------------------------------- | -------------------------------------------- |
| +10.0% | +52,700 | 99.6% | 527,000 → 579,700 | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |
| +10.0% |    +200 |  0.4% |     2,000 → 2,200 | `Main.toJSON`                                  | `Profile.hs:84:3`                            |

###### `Data.Primitive.Array.array#` (`Data/Primitive/Array.hs:66:5`)

| Change |   Delta |     % |           Entries | Caller                                | Location                                  |
| -----: | ------: | ----: | ----------------: | ------------------------------------- | ----------------------------------------- |
| +10.0% | +15,150 | 54.5% | 151,500 → 166,650 | `Utils.magnitude`                     | `src/Utils.hs:78:1`                       |
| +10.0% | +11,200 | 40.3% | 112,000 → 123,200 | `Data.Aeson.Types.FromJSON.withArray` | `src/Data/Aeson/Types/FromJSON.hs:742:1`  |
| +10.0% |  +1,450 |  5.2% |   14,500 → 15,950 | `Data.Aeson.Encoding.Builder.array`   | `src/Data/Aeson/Encoding/Builder.hs:86:1` |

###### `Data.Scientific.coefficient` (`src/Data/Scientific.hs:140:7`)

| Change |   Delta |     % |           Entries | Caller                                   | Location                                   |
| -----: | ------: | ----: | ----------------: | ---------------------------------------- | ------------------------------------------ |
| +10.0% | +21,500 | 93.5% | 215,000 → 236,500 | `Data.Scientific.toBoundedInteger`       | `src/Data/Scientific.hs:772:1`             |
| +10.0% |  +1,500 |  6.5% |   15,000 → 16,500 | `Data.Aeson.Encoding.Builder.scientific` | `src/Data/Aeson/Encoding/Builder.hs:144:1` |

###### `Data.Aeson.Types.Internal.modifyFailure` (`src/Data/Aeson/Types/Internal.hs:671:1`)

| Change |   Delta |      % |           Entries | Caller                                     | Location                                 |
| -----: | ------: | -----: | ----------------: | ------------------------------------------ | ---------------------------------------- |
| +10.0% | +21,500 | 100.0% | 215,000 → 236,500 | `Data.Aeson.Types.Internal.prependFailure` | `src/Data/Aeson/Types/Internal.hs:681:1` |

###### `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`)

| Change |   Delta |      % |           Entries | Caller                                         | Location                                 |
| -----: | ------: | -----: | ----------------: | ---------------------------------------------- | ---------------------------------------- |
| +10.0% | +21,500 | 100.0% | 215,000 → 236,500 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

###### `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`)

| Change |   Delta |     % |           Entries | Caller           | Location          |
| -----: | ------: | ----: | ----------------: | ---------------- | ----------------- |
| +10.0% | +19,800 | 93.0% | 198,000 → 217,800 | `Main.parseJSON` | `Profile.hs:48:3` |
| +10.0% |  +1,500 |  7.0% |   15,000 → 16,500 | `Main.parseJSON` | `Profile.hs:96:3` |

###### `Data.Aeson.Types.FromJSON.withText` (`src/Data/Aeson/Types/FromJSON.hs:731:1`)

| Change |   Delta |     % |           Entries | Caller                                              | Location                                 |
| -----: | ------: | ----: | ----------------: | --------------------------------------------------- | ---------------------------------------- |
| +10.0% | +16,200 | 76.4% | 162,000 → 178,200 | `Data.Aeson.Types.FromJSON.explicitParseField`      | `src/Data/Aeson/Types/FromJSON.hs:917:1` |
| +10.0% |  +5,000 | 23.6% |   50,000 → 55,000 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1` |

###### `Data.Scientific.base10Exponent` (`src/Data/Scientific.hs:165:7`)

| Change |   Delta |     % |           Entries | Caller                                   | Location                                   |
| -----: | ------: | ----: | ----------------: | ---------------------------------------- | ------------------------------------------ |
| +10.0% | +15,150 | 91.0% | 151,500 → 166,650 | `Data.Scientific.toBoundedInteger`       | `src/Data/Scientific.hs:772:1`             |
| +10.0% |  +1,500 |  9.0% |   15,000 → 16,500 | `Data.Aeson.Encoding.Builder.scientific` | `src/Data/Aeson/Encoding/Builder.hs:144:1` |

###### `Utils.magnitude` (`src/Utils.hs:78:1`)

| Change |   Delta |      % |           Entries | Caller                             | Location                       |
| -----: | ------: | -----: | ----------------: | ---------------------------------- | ------------------------------ |
| +10.0% | +15,150 | 100.0% | 151,500 → 166,650 | `Data.Scientific.toBoundedInteger` | `src/Data/Scientific.hs:772:1` |

###### `Data.Scientific.normalize` (`src/Data/Scientific.hs:1102:1`)

| Change |   Delta |      % |           Entries | Caller                             | Location                       |
| -----: | ------: | -----: | ----------------: | ---------------------------------- | ------------------------------ |
| +10.0% | +15,150 | 100.0% | 151,500 → 166,650 | `Data.Scientific.toBoundedInteger` | `src/Data/Scientific.hs:772:1` |

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

##### Callees

Callees with the largest change in contribution to each function's total entries. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

###### `MAIN.MAIN` (`<unknown>`)

| Change |      Delta |      % |                 Entries | Callee      | Location           |
| -----: | ---------: | -----: | ----------------------: | ----------- | ------------------ |
| +10.0% | +1,861,650 | 100.0% | 18,616,500 → 20,478,150 | `Main.main` | `Profile.hs:146:1` |

###### `Main.main` (`Profile.hs:146:1`)

| Change |      Delta |     % |                 Entries | Callee                             | Location                          |
| -----: | ---------: | ----: | ----------------------: | ---------------------------------- | --------------------------------- |
| +10.0% | +1,736,850 | 93.3% | 17,368,500 → 19,105,350 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |
| +10.0% |    +64,350 |  3.5% |       643,500 → 707,850 | `Main.roundTrip`                   | `Profile.hs:139:1`                |
| +10.0% |    +55,250 |  3.0% |       552,500 → 607,750 | `Main.summarize`                   | `Profile.hs:118:1`                |
| +10.0% |     +5,000 |  0.3% |         50,000 → 55,000 | `Main.keywords`                    | `Profile.hs:136:1`                |
| +10.0% |        +50 | <0.1% |               500 → 550 | `Main.pad`                         | `Profile.hs:142:1`                |

###### `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)

| Change |    Delta |     % |                Entries | Callee                                            | Location                                          |
| -----: | -------: | ----: | ---------------------: | ------------------------------------------------- | ------------------------------------------------- |
| +10.0% | +952,950 | 53.6% | 9,529,500 → 10,482,450 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| +10.0% | +825,900 | 46.4% |  8,259,000 → 9,084,900 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
| +10.0% |     +100 | <0.1% |          1,000 → 1,100 | `Data.Aeson.Decoding.Conversion.unResult`         | `src/Data/Aeson/Decoding/Conversion.hs:97:7`      |

###### `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)

| Change |    Delta |     % |               Entries | Callee                                        | Location                                   |
| -----: | -------: | ----: | --------------------: | --------------------------------------------- | ------------------------------------------ |
| +10.0% | +868,850 | 91.2% | 8,688,500 → 9,557,350 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`  | `src/Data/Aeson/Internal/Text.hs:29:1`     |
| +10.0% |  +83,850 |  8.8% |     838,500 → 922,350 | `Data.Integer.Conversion.byteStringToInteger` | `src/Data/Integer/Conversion.hs:104:1`     |
| +10.0% |     +150 | <0.1% |         1,500 → 1,650 | `Data.Aeson.Decoding.Internal.negateNumber`   | `src/Data/Aeson/Decoding/Internal.hs:12:1` |

###### `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)

| Change |    Delta |     % |               Entries | Callee                                      | Location                                          |
| -----: | -------: | ----: | --------------------: | ------------------------------------------- | ------------------------------------------------- |
| +10.0% | +502,600 | 60.9% | 5,026,000 → 5,528,600 | `Data.Aeson.Types.FromJSON.ifromJSON`       | `src/Data/Aeson/Types/FromJSON.hs:839:1`          |
| +10.0% |  +82,550 | 10.0% |     825,500 → 908,050 | `Data.Primitive.Array.marray#`              | `Data/Primitive/Array.hs:109:5`                   |
| +10.0% |  +82,550 | 10.0% |     825,500 → 908,050 | `Data.Vector.Fusion.Util.unId`              | `src/Data/Vector/Fusion/Util.hs:25:21`            |
| +10.0% |  +52,700 |  6.4% |     527,000 → 579,700 | `Data.Vector.Fusion.Bundle.Monadic.sChunks` | `src/Data/Vector/Fusion/Bundle/Monadic.hs:122:30` |
| +10.0% |  +52,700 |  6.4% |     527,000 → 579,700 | `Data.Vector.Fusion.Bundle.Monadic.sSize`   | `src/Data/Vector/Fusion/Bundle/Monadic.hs:124:30` |

###### `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`)

| Change |    Delta |     % |               Entries | Callee           | Location          |
| -----: | -------: | ----: | --------------------: | ---------------- | ----------------- |
| +10.0% | +470,250 | 93.6% | 4,702,500 → 5,172,750 | `Main.parseJSON` | `Profile.hs:48:3` |
| +10.0% |  +32,250 |  6.4% |     322,500 → 354,750 | `Main.parseJSON` | `Profile.hs:96:3` |

###### `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`)

| Change |    Delta |     % |               Entries | Callee                          | Location                                 |
| -----: | -------: | ----: | --------------------: | ------------------------------- | ---------------------------------------- |
| +10.0% | +456,200 | 90.8% | 4,562,000 → 5,018,200 | `Data.Aeson.Types.FromJSON..:`  | `src/Data/Aeson/Types/FromJSON.hs:849:1` |
| +10.0% |  +25,000 |  5.0% |     250,000 → 275,000 | `Data.Aeson.Types.FromJSON..:?` | `src/Data/Aeson/Types/FromJSON.hs:859:1` |

###### `Main.parseJSON` (`Profile.hs:48:3`)

| Change |    Delta |      % |               Entries | Callee                                 | Location                                 |
| -----: | -------: | -----: | --------------------: | -------------------------------------- | ---------------------------------------- |
| +10.0% | +470,250 | 100.0% | 4,702,500 → 5,172,750 | `Data.Aeson.Types.FromJSON.withObject` | `src/Data/Aeson/Types/FromJSON.hs:720:1` |

###### `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`)

| Change |    Delta |     % |               Entries | Callee                                         | Location                                 |
| -----: | -------: | ----: | --------------------: | ---------------------------------------------- | ---------------------------------------- |
| +10.0% | +393,900 | 86.3% | 3,939,000 → 4,332,900 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

###### `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`)

| Change |    Delta |     % |               Entries | Callee                                     | Location                                 |
| -----: | -------: | ----: | --------------------: | ------------------------------------------ | ---------------------------------------- |
| +10.0% | +103,600 | 26.3% | 1,036,000 → 1,139,600 | `Data.Scientific.toBoundedInteger`         | `src/Data/Scientific.hs:772:1`           |
| +10.0% |  +62,700 | 15.9% |     627,000 → 689,700 | `Data.Aeson.Types.Internal.<?>`            | `src/Data/Aeson/Types/Internal.hs:659:1` |
| +10.0% |  +62,300 | 15.8% |     623,000 → 685,300 | `Data.Aeson.KeyMap.lookup`                 | `src/Data/Aeson/KeyMap.hs:178:1`         |
| +10.0% |  +39,000 |  9.9% |     390,000 → 429,000 | `Main.parseJSONList`                       | `Profile.hs:71:10`                       |
| +10.0% |  +21,500 |  5.5% |     215,000 → 236,500 | `Data.Aeson.Types.Internal.prependFailure` | `src/Data/Aeson/Types/Internal.hs:681:1` |

###### `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`)

| Change |   Delta |     % |           Entries | Callee                           | Location                        |
| -----: | ------: | ----: | ----------------: | -------------------------------- | ------------------------------- |
| +10.0% | +30,300 | 29.2% | 303,000 → 333,300 | `Utils.magnitude`                | `src/Utils.hs:78:1`             |
| +10.0% | +21,500 | 20.8% | 215,000 → 236,500 | `Data.Scientific.coefficient`    | `src/Data/Scientific.hs:140:7`  |
| +10.0% | +15,150 | 14.6% | 151,500 → 166,650 | `Data.Scientific.base10Exponent` | `src/Data/Scientific.hs:165:7`  |
| +10.0% | +15,150 | 14.6% | 151,500 → 166,650 | `Data.Scientific.normalize`      | `src/Data/Scientific.hs:1102:1` |

###### `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`)

| Change |  Delta |    % |         Entries | Callee                               | Location                                 |
| -----: | -----: | ---: | --------------: | ------------------------------------ | ---------------------------------------- |
| +10.0% | +4,750 | 6.0% | 47,500 → 52,250 | `Data.Aeson.Types.FromJSON.withText` | `src/Data/Aeson/Types/FromJSON.hs:731:1` |

###### `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`)

| Change |   Delta |     % |           Entries | Callee                                       | Location                                 |
| -----: | ------: | ----: | ----------------: | -------------------------------------------- | ---------------------------------------- |
| +10.0% | +22,400 | 32.0% | 224,000 → 246,400 | `Data.Aeson.Types.FromJSON.parseIndexedJSON` | `src/Data/Aeson/Types/FromJSON.hs:171:1` |
| +10.0% | +21,450 | 30.6% | 214,500 → 235,950 | `Data.Vector.Fusion.Util.unId`               | `src/Data/Vector/Fusion/Util.hs:25:21`   |
| +10.0% | +11,200 | 16.0% | 112,000 → 123,200 | `Data.Primitive.Array.array#`                | `Data/Primitive/Array.hs:66:5`           |
| +10.0% |  +4,750 |  6.8% |   47,500 → 52,250 | `Main.tagText`                               | `Profile.hs:69:20`                       |

###### `Main.roundTrip` (`Profile.hs:139:1`)

| Change |   Delta |     % |           Entries | Callee                             | Location                          |
| -----: | ------: | ----: | ----------------: | ---------------------------------- | --------------------------------- |
| +10.0% | +42,200 | 65.6% | 422,000 → 464,200 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |
| +10.0% | +22,150 | 34.4% | 221,501 → 243,651 | `Data.Aeson.encode`                | `src/Data/Aeson.hs:187:1`         |

###### `Main.summarize` (`Profile.hs:118:1`)

| Change |   Delta |     % |           Entries | Callee                 | Location          |
| -----: | ------: | ----: | ----------------: | ---------------------- | ----------------- |
| +10.0% | +10,000 | 18.1% | 100,000 → 110,000 | `Main.statusEntities`  | `Profile.hs:33:5` |
| +10.0% | +10,000 | 18.1% | 100,000 → 110,000 | `Main.statusUser`      | `Profile.hs:32:5` |
| +10.0% |  +5,000 |  9.0% |   50,000 → 55,000 | `Main.entityHashtags`  | `Profile.hs:43:5` |
| +10.0% |  +5,000 |  9.0% |   50,000 → 55,000 | `Main.entityMentions`  | `Profile.hs:44:5` |
| +10.0% |  +5,000 |  9.0% |   50,000 → 55,000 | `Main.statusFavorites` | `Profile.hs:31:5` |
