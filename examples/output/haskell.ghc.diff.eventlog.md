# Wall time profile diff

Took 3.76s → 4.19s (+427.00ms, +11.4%) over 3,759 → 4,186 samples (1.0ms per sample).

| Category          | Change |     Delta |             % |            Time |       Samples |
| ----------------- | -----: | --------: | ------------: | --------------: | ------------: |
| Ours              | +14.4% | +375.00ms | 69.1% → 71.0% |   2.60s → 2.97s | 2,599 → 2,974 |
| Garbage collector |  +4.7% |  +54.00ms | 30.3% → 28.5% |   1.14s → 1.19s | 1,139 → 1,193 |
| Native            |  -9.5% |   -2.00ms |   0.6% → 0.5% | 21.0ms → 19.0ms |       21 → 19 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── 2.60s → 2.97s (69.1% → 71.0%) Main.main at Profile.hs:146:1
│   ├── 2.39s → 2.73s (63.5% → 65.2%) Data.Aeson.Decoding.eitherDecode at src/Data/Aeson/Decoding.hs:79:1
│   │   ├── 1.61s → 1.89s (42.8% → 45.2%, self 35.8% → 37.7%) Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens at src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1
│   │   │   ├── 125.0ms → 157.0ms (3.3% → 3.8%) Data.Aeson.Internal.Text.unsafeDecodeASCII at src/Data/Aeson/Internal/Text.hs:29:1
│   │   │   ├── 70.0ms → 82.0ms (1.9% → 2.0%) Data.Aeson.Internal.Unescape.unescapeText at src/Data/Aeson/Internal/Unescape.hs:34:1
│   │   │   └── 68.0ms → 76.0ms (1.8%) Data.Integer.Conversion.byteStringToInteger at src/Data/Integer/Conversion.hs:104:1
│   │   └── 781.0ms → 836.0ms (20.8% → 20.0%, self 4.7% → 4.8%) Data.Aeson.Decoding.Conversion.toResultValue at src/Data/Aeson/Decoding/Conversion.hs:51:1
│   │       ├── 467.0ms → 502.0ms (12.4% → 12.0%) Data.Aeson.KeyMap.fromList at src/Data/Aeson/KeyMap.hs:247:1
│   │       └── 137.0ms → 135.0ms (3.6% → 3.2%) Data.Aeson.Types.FromJSON.ifromJSON at src/Data/Aeson/Types/FromJSON.hs:839:1
│   │           └── 137.0ms → 135.0ms (3.6% → 3.2%) Main.parseJSON at Profile.hs:48:3
│   │               └── 137.0ms → 135.0ms (3.6% → 3.2%) Data.Aeson.Types.FromJSON.withObject at src/Data/Aeson/Types/FromJSON.hs:720:1
│   │                   ├── 127.0ms → 123.0ms (3.4% → 2.9%) Data.Aeson.Types.FromJSON..: at 849:1
│   │                   │   └── 116.0ms → 119.0ms (3.1% → 2.8%, self 0.5% → 0.4%) Data.Aeson.Types.FromJSON.explicitParseField at 917:1
│   │                   │       ├── 38.0ms → 43.0ms (1.0%) Data.Aeson.KeyMap.lookup at src/Data/Aeson/KeyMap.hs:178:1
│   │                   │       ├── 26.0ms → 34.0ms (0.7% → 0.8%) Data.Aeson.Types.Internal.<?> at src/Data/Aeson/Types/Internal.hs:659:1
│   │                   │       │   └── … 3.0ms → 8.0ms (0.1% → 0.2%) Data.Aeson.Types.FromJSON.withArray at src/Data/Aeson/Types/FromJSON.hs:742:1
│   │                   │       ├── 13.0ms → 15.0ms (0.3% → 0.4%) Data.Scientific.toBoundedInteger at src/Data/Scientific.hs:772:1
│   │                   │       │   └── 3.0ms → 5.0ms (0.1%) Utils.magnitude at src/Utils.hs:78:1
│   │                   │       ├── 6.0ms → 3.0ms (0.2% → 0.1%) Data.Aeson.Types.Internal.prependFailure at src/Data/Aeson/Types/Internal.hs:681:1
│   │                   │       ├── 1.0ms → 4.0ms (<0.1% → 0.1%) Data.Aeson.Types.FromJSON.withText at 731:1
│   │                   │       └── … 2.0ms → 1.0ms (0.1% → <0.1%) Data.Aeson.Types.FromJSON.parseIndexedJSON at src/Data/Aeson/Types/FromJSON.hs:171:1
│   │                   └── 3.0ms → 5.0ms (0.1%) Data.Aeson.Types.FromJSON..:? at 859:1
│   │                       └── 2.0ms → 4.0ms (0.1%) Data.Aeson.Types.FromJSON.explicitParseFieldMaybe at 923:1
│   ├── 150.0ms → 154.0ms (4.0% → 3.7%, self 3.5% → 3.1%) Main.keywords at 136:1
│   │   └── 20.0ms → 23.0ms (0.5%) Main.tally at 112:1
│   ├── 36.0ms → 49.0ms (1.0% → 1.2%) Main.roundTrip at 139:1
│   │   ├── 23.0ms → 33.0ms (0.6% → 0.8%) Data.Aeson.encode at src/Data/Aeson.hs:187:1
│   │   │   └── 23.0ms → 31.0ms (0.6% → 0.7%) Main.toEncoding at Profile.hs:83:10
│   │   │       └── 20.0ms → 27.0ms (0.5% → 0.6%) Data.Aeson.Encoding.Internal.value at src/Data/Aeson/Encoding/Internal.hs:441:1
│   │   │           └── 20.0ms → 27.0ms (0.5% → 0.6%) Data.Aeson.Encoding.Builder.encodeToBuilder at src/Data/Aeson/Encoding/Builder.hs:68:1
│   │   │               └── 19.0ms → 23.0ms (0.5%) Data.Aeson.Encoding.Builder.object at 96:1
│   │   │                   └── 2.0ms → 6.0ms (0.1%) Data.Aeson.Encoding.Builder.array at 86:1
│   │   │                       └── 1.0ms → 5.0ms (<0.1% → 0.1%) Data.Aeson.Encoding.Builder.text at 109:1
│   │   └── … 2.0ms → 1.0ms (0.1% → <0.1%) Data.Aeson.Types.Internal.modifyFailure at src/Data/Aeson/Types/Internal.hs:671:1
│   └── 21.0ms → 33.0ms (0.6% → 0.8%) Main.summarize at 118:1
│       ├── 4.0ms → 6.0ms (0.1%) Main.top at 115:1
│       └── 3.0ms → 7.0ms (0.1% → 0.2%) Main.tally at 112:1
├── 1.14s → 1.19s (30.3% → 28.5%) GC.GC
├── 12.0ms → 8.0ms (0.3% → 0.2%) SYSTEM.SYSTEM
└── 9.0ms → 11.0ms (0.2% → 0.3%) PROFILING.OVERHEAD_of
```

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in wall time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |     Delta |             % |              Time |       Samples | Function                                            | Location                                          |
| ------: | --------: | ------------: | ----------------: | ------------: | --------------------------------------------------- | ------------------------------------------------- |
|  +17.6% | +237.00ms | 35.9% → 37.9% |     1.35s → 1.59s | 1,348 → 1,585 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens`   | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
|   +4.7% |  +54.00ms | 30.3% → 28.5% |     1.14s → 1.19s | 1,139 → 1,193 | `GC.GC`                                             | `<unknown>`                                       |
|   +7.5% |  +35.00ms | 12.5% → 12.0% | 468.0ms → 503.0ms |     468 → 503 | `Data.Aeson.KeyMap.fromList`                        | `src/Data/Aeson/KeyMap.hs:247:1`                  |
|  +25.6% |  +32.00ms |   3.3% → 3.8% | 125.0ms → 157.0ms |     125 → 157 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`        | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|  +11.8% |  +21.00ms |   4.7% → 4.8% | 178.0ms → 199.0ms |     178 → 199 | `Data.Aeson.Decoding.Conversion.toResultValue`      | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
|  +17.1% |  +12.00ms |   1.9% → 2.0% |   70.0ms → 82.0ms |       70 → 82 | `Data.Aeson.Internal.Unescape.unescapeText`         | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
| +111.1% |  +10.00ms |   0.2% → 0.5% |    9.0ms → 19.0ms |        9 → 19 | `Data.Aeson.Types.Internal.<?>`                     | `src/Data/Aeson/Types/Internal.hs:659:1`          |
|  +13.2% |   +9.00ms |          1.8% |   68.0ms → 77.0ms |       68 → 77 | `Data.Integer.Conversion.byteStringToInteger`       | `src/Data/Integer/Conversion.hs:104:1`            |
|  +30.4% |   +7.00ms |   0.6% → 0.7% |   23.0ms → 30.0ms |       23 → 30 | `Main.tally`                                        | `Profile.hs:112:1`                                |
|  +42.9% |   +6.00ms |   0.4% → 0.5% |   14.0ms → 20.0ms |       14 → 20 | `Main.summarize`                                    | `Profile.hs:118:1`                                |
| +125.0% |   +5.00ms |   0.1% → 0.2% |     4.0ms → 9.0ms |         4 → 9 | `Main.main`                                         | `Profile.hs:146:1`                                |
|  +57.1% |   +4.00ms |   0.2% → 0.3% |    7.0ms → 11.0ms |        7 → 11 | `Data.Aeson.Types.FromJSON.withText`                | `src/Data/Aeson/Types/FromJSON.hs:731:1`          |
| +133.3% |   +4.00ms |   0.1% → 0.2% |     3.0ms → 7.0ms |         3 → 7 | `Data.Aeson.Encoding.Builder.array`                 | `src/Data/Aeson/Encoding/Builder.hs:86:1`         |
|   +7.5% |   +3.00ms |   1.1% → 1.0% |   40.0ms → 43.0ms |       40 → 43 | `Data.Aeson.KeyMap.lookup`                          | `src/Data/Aeson/KeyMap.hs:178:1`                  |
| +200.0% |   +2.00ms |  <0.1% → 0.1% |     1.0ms → 3.0ms |         1 → 3 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1`          |
|  +22.2% |   +2.00ms |   0.2% → 0.3% |    9.0ms → 11.0ms |        9 → 11 | `PROFILING.OVERHEAD_of`                             | `<unknown>`                                       |
|  +50.0% |   +2.00ms |          0.1% |     4.0ms → 6.0ms |         4 → 6 | `Main.top`                                          | `Profile.hs:115:1`                                |
|  +66.7% |   +2.00ms |          0.1% |     3.0ms → 5.0ms |         3 → 5 | `Utils.magnitude`                                   | `src/Utils.hs:78:1`                               |
|  +25.0% |   +2.00ms |          0.2% |    8.0ms → 10.0ms |        8 → 10 | `Data.Scientific.toBoundedInteger`                  | `src/Data/Scientific.hs:772:1`                    |
|  +66.7% |   +2.00ms |          0.1% |     3.0ms → 5.0ms |         3 → 5 | `Data.Aeson.Encoding.Builder.object`                | `src/Data/Aeson/Encoding/Builder.hs:96:1`         |

##### Ours

|  Change |     Delta |             % |              Time |       Samples | Function                                            | Location                                          |
| ------: | --------: | ------------: | ----------------: | ------------: | --------------------------------------------------- | ------------------------------------------------- |
|  +17.6% | +237.00ms | 35.9% → 37.9% |     1.35s → 1.59s | 1,348 → 1,585 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens`   | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
|   +7.5% |  +35.00ms | 12.5% → 12.0% | 468.0ms → 503.0ms |     468 → 503 | `Data.Aeson.KeyMap.fromList`                        | `src/Data/Aeson/KeyMap.hs:247:1`                  |
|  +25.6% |  +32.00ms |   3.3% → 3.8% | 125.0ms → 157.0ms |     125 → 157 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`        | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|  +11.8% |  +21.00ms |   4.7% → 4.8% | 178.0ms → 199.0ms |     178 → 199 | `Data.Aeson.Decoding.Conversion.toResultValue`      | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
|  +17.1% |  +12.00ms |   1.9% → 2.0% |   70.0ms → 82.0ms |       70 → 82 | `Data.Aeson.Internal.Unescape.unescapeText`         | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
| +111.1% |  +10.00ms |   0.2% → 0.5% |    9.0ms → 19.0ms |        9 → 19 | `Data.Aeson.Types.Internal.<?>`                     | `src/Data/Aeson/Types/Internal.hs:659:1`          |
|  +13.2% |   +9.00ms |          1.8% |   68.0ms → 77.0ms |       68 → 77 | `Data.Integer.Conversion.byteStringToInteger`       | `src/Data/Integer/Conversion.hs:104:1`            |
|  +30.4% |   +7.00ms |   0.6% → 0.7% |   23.0ms → 30.0ms |       23 → 30 | `Main.tally`                                        | `Profile.hs:112:1`                                |
|  +42.9% |   +6.00ms |   0.4% → 0.5% |   14.0ms → 20.0ms |       14 → 20 | `Main.summarize`                                    | `Profile.hs:118:1`                                |
| +125.0% |   +5.00ms |   0.1% → 0.2% |     4.0ms → 9.0ms |         4 → 9 | `Main.main`                                         | `Profile.hs:146:1`                                |
|  +57.1% |   +4.00ms |   0.2% → 0.3% |    7.0ms → 11.0ms |        7 → 11 | `Data.Aeson.Types.FromJSON.withText`                | `src/Data/Aeson/Types/FromJSON.hs:731:1`          |
| +133.3% |   +4.00ms |   0.1% → 0.2% |     3.0ms → 7.0ms |         3 → 7 | `Data.Aeson.Encoding.Builder.array`                 | `src/Data/Aeson/Encoding/Builder.hs:86:1`         |
|   +7.5% |   +3.00ms |   1.1% → 1.0% |   40.0ms → 43.0ms |       40 → 43 | `Data.Aeson.KeyMap.lookup`                          | `src/Data/Aeson/KeyMap.hs:178:1`                  |
| +200.0% |   +2.00ms |  <0.1% → 0.1% |     1.0ms → 3.0ms |         1 → 3 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1`          |
|  +50.0% |   +2.00ms |          0.1% |     4.0ms → 6.0ms |         4 → 6 | `Main.top`                                          | `Profile.hs:115:1`                                |
|  +66.7% |   +2.00ms |          0.1% |     3.0ms → 5.0ms |         3 → 5 | `Utils.magnitude`                                   | `src/Utils.hs:78:1`                               |
|  +25.0% |   +2.00ms |          0.2% |    8.0ms → 10.0ms |        8 → 10 | `Data.Scientific.toBoundedInteger`                  | `src/Data/Scientific.hs:772:1`                    |
|  +66.7% |   +2.00ms |          0.1% |     3.0ms → 5.0ms |         3 → 5 | `Data.Aeson.Encoding.Builder.object`                | `src/Data/Aeson/Encoding/Builder.hs:96:1`         |
|     new |   +2.00ms |  0.0% → <0.1% |       0ms → 2.0ms |         0 → 2 | `Data.Aeson.Encoding.Builder.encodeToBuilder`       | `src/Data/Aeson/Encoding/Builder.hs:68:1`         |
|     new |   +2.00ms |  0.0% → <0.1% |       0ms → 2.0ms |         0 → 2 | `Data.Aeson.encode`                                 | `src/Data/Aeson.hs:187:1`                         |

##### Garbage collector

| Change |    Delta |             % |          Time |       Samples | Function | Location    |
| -----: | -------: | ------------: | ------------: | ------------: | -------- | ----------- |
|  +4.7% | +54.00ms | 30.3% → 28.5% | 1.14s → 1.19s | 1,139 → 1,193 | `GC.GC`  | `<unknown>` |

#### Improvements

Functions with the largest decrease in wall time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |   Delta |            % |            Time | Samples | Function                                       | Location                                   |
| ------: | ------: | -----------: | --------------: | ------: | ---------------------------------------------- | ------------------------------------------ |
|  -54.5% | -6.00ms |  0.3% → 0.1% |  11.0ms → 5.0ms |  11 → 5 | `Data.Aeson.Types.FromJSON..:`                 | `src/Data/Aeson/Types/FromJSON.hs:849:1`   |
|  -19.0% | -4.00ms |  0.6% → 0.4% | 21.0ms → 17.0ms | 21 → 17 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1`   |
|  -25.0% | -4.00ms |  0.4% → 0.3% | 16.0ms → 12.0ms | 16 → 12 | `Data.Aeson.Types.FromJSON.withArray`          | `src/Data/Aeson/Types/FromJSON.hs:742:1`   |
|  -33.3% | -4.00ms |  0.3% → 0.2% |  12.0ms → 8.0ms |  12 → 8 | `SYSTEM.SYSTEM`                                | `<unknown>`                                |
|  -60.0% | -3.00ms | 0.1% → <0.1% |   5.0ms → 2.0ms |   5 → 2 | `Data.Aeson.Types.Internal.modifyFailure`      | `src/Data/Aeson/Types/Internal.hs:671:1`   |
|  -50.0% | -3.00ms |  0.2% → 0.1% |   6.0ms → 3.0ms |   6 → 3 | `Data.Aeson.Types.Internal.prependFailure`     | `src/Data/Aeson/Types/Internal.hs:681:1`   |
|  -50.0% | -2.00ms | 0.1% → <0.1% |   4.0ms → 2.0ms |   4 → 2 | `Data.Aeson.Types.FromJSON.parseIndexedJSON`   | `src/Data/Aeson/Types/FromJSON.hs:171:1`   |
|  -40.0% | -2.00ms |         0.1% |   5.0ms → 3.0ms |   5 → 3 | `Data.Aeson.Encoding.Builder.unquoted`         | `src/Data/Aeson/Encoding/Builder.hs:113:1` |
|  -66.7% | -2.00ms | 0.1% → <0.1% |   3.0ms → 1.0ms |   3 → 1 | `Data.Scientific.normalize`                    | `src/Data/Scientific.hs:1102:1`            |
|  -12.5% | -1.00ms |         0.2% |   8.0ms → 7.0ms |   8 → 7 | `Data.Aeson.Types.FromJSON.withObject`         | `src/Data/Aeson/Types/FromJSON.hs:720:1`   |
| removed | -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `Data.Aeson.Key.toText`                        | `src/Data/Aeson/Key.hs:57:1`               |
| removed | -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `Data.Aeson.KeyMap.toList`                     | `src/Data/Aeson/KeyMap.hs:253:1`           |

##### Ours

|  Change |   Delta |            % |            Time | Samples | Function                                       | Location                                   |
| ------: | ------: | -----------: | --------------: | ------: | ---------------------------------------------- | ------------------------------------------ |
|  -54.5% | -6.00ms |  0.3% → 0.1% |  11.0ms → 5.0ms |  11 → 5 | `Data.Aeson.Types.FromJSON..:`                 | `src/Data/Aeson/Types/FromJSON.hs:849:1`   |
|  -19.0% | -4.00ms |  0.6% → 0.4% | 21.0ms → 17.0ms | 21 → 17 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1`   |
|  -25.0% | -4.00ms |  0.4% → 0.3% | 16.0ms → 12.0ms | 16 → 12 | `Data.Aeson.Types.FromJSON.withArray`          | `src/Data/Aeson/Types/FromJSON.hs:742:1`   |
|  -60.0% | -3.00ms | 0.1% → <0.1% |   5.0ms → 2.0ms |   5 → 2 | `Data.Aeson.Types.Internal.modifyFailure`      | `src/Data/Aeson/Types/Internal.hs:671:1`   |
|  -50.0% | -3.00ms |  0.2% → 0.1% |   6.0ms → 3.0ms |   6 → 3 | `Data.Aeson.Types.Internal.prependFailure`     | `src/Data/Aeson/Types/Internal.hs:681:1`   |
|  -50.0% | -2.00ms | 0.1% → <0.1% |   4.0ms → 2.0ms |   4 → 2 | `Data.Aeson.Types.FromJSON.parseIndexedJSON`   | `src/Data/Aeson/Types/FromJSON.hs:171:1`   |
|  -40.0% | -2.00ms |         0.1% |   5.0ms → 3.0ms |   5 → 3 | `Data.Aeson.Encoding.Builder.unquoted`         | `src/Data/Aeson/Encoding/Builder.hs:113:1` |
|  -66.7% | -2.00ms | 0.1% → <0.1% |   3.0ms → 1.0ms |   3 → 1 | `Data.Scientific.normalize`                    | `src/Data/Scientific.hs:1102:1`            |
|  -12.5% | -1.00ms |         0.2% |   8.0ms → 7.0ms |   8 → 7 | `Data.Aeson.Types.FromJSON.withObject`         | `src/Data/Aeson/Types/FromJSON.hs:720:1`   |
| removed | -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `Data.Aeson.Key.toText`                        | `src/Data/Aeson/Key.hs:57:1`               |
| removed | -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `Data.Aeson.KeyMap.toList`                     | `src/Data/Aeson/KeyMap.hs:253:1`           |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)

| Change |     Delta |      % |          Time |       Samples | Caller                             | Location                          |
| -----: | --------: | -----: | ------------: | ------------: | ---------------------------------- | --------------------------------- |
| +17.6% | +237.00ms | 100.0% | 1.35s → 1.59s | 1,348 → 1,585 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

##### `Data.Aeson.KeyMap.fromList` (`src/Data/Aeson/KeyMap.hs:247:1`)

| Change |    Delta |              % |              Time |   Samples | Caller                                         | Location                                     |
| -----: | -------: | -------------: | ----------------: | --------: | ---------------------------------------------- | -------------------------------------------- |
|  +7.3% | +34.00ms | 100.0% → 99.8% | 468.0ms → 502.0ms | 468 → 502 | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |
|    new |  +1.00ms |    0.0% → 0.2% |       0ms → 1.0ms |     0 → 1 | `Main.toJSON`                                  | `Profile.hs:84:3`                            |

##### `Data.Aeson.Internal.Text.unsafeDecodeASCII` (`src/Data/Aeson/Internal/Text.hs:29:1`)

| Change |    Delta |      % |              Time |   Samples | Caller                                            | Location                                          |
| -----: | -------: | -----: | ----------------: | --------: | ------------------------------------------------- | ------------------------------------------------- |
| +25.6% | +32.00ms | 100.0% | 125.0ms → 157.0ms | 125 → 157 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

##### `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)

| Change |    Delta |      % |              Time |   Samples | Caller                             | Location                          |
| -----: | -------: | -----: | ----------------: | --------: | ---------------------------------- | --------------------------------- |
| +11.8% | +21.00ms | 100.0% | 178.0ms → 199.0ms | 178 → 199 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

##### `Data.Aeson.Internal.Unescape.unescapeText` (`src/Data/Aeson/Internal/Unescape.hs:34:1`)

| Change |    Delta |      % |            Time | Samples | Caller                                            | Location                                          |
| -----: | -------: | -----: | --------------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| +17.1% | +12.00ms | 100.0% | 70.0ms → 82.0ms | 70 → 82 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

##### `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`)

|  Change |    Delta |      % |           Time | Samples | Caller                                         | Location                                 |
| ------: | -------: | -----: | -------------: | ------: | ---------------------------------------------- | ---------------------------------------- |
| +111.1% | +10.00ms | 100.0% | 9.0ms → 19.0ms |  9 → 19 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Data.Integer.Conversion.byteStringToInteger` (`src/Data/Integer/Conversion.hs:104:1`)

| Change |   Delta |      % |            Time | Samples | Caller                                            | Location                                          |
| -----: | ------: | -----: | --------------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| +13.2% | +9.00ms | 100.0% | 68.0ms → 77.0ms | 68 → 77 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

##### `Main.tally` (`Profile.hs:112:1`)

|  Change |   Delta |             % |            Time | Samples | Caller           | Location           |
| ------: | ------: | ------------: | --------------: | ------: | ---------------- | ------------------ |
| +133.3% | +4.00ms | 13.0% → 23.3% |   3.0ms → 7.0ms |   3 → 7 | `Main.summarize` | `Profile.hs:118:1` |
|  +15.0% | +3.00ms | 87.0% → 76.7% | 20.0ms → 23.0ms | 20 → 23 | `Main.keywords`  | `Profile.hs:136:1` |

##### `Main.summarize` (`Profile.hs:118:1`)

| Change |   Delta |      % |            Time | Samples | Caller      | Location           |
| -----: | ------: | -----: | --------------: | ------: | ----------- | ------------------ |
| +42.9% | +6.00ms | 100.0% | 14.0ms → 20.0ms | 14 → 20 | `Main.main` | `Profile.hs:146:1` |

##### `Data.Aeson.Types.FromJSON.withText` (`src/Data/Aeson/Types/FromJSON.hs:731:1`)

|  Change |   Delta |             % |          Time | Samples | Caller                                              | Location                                 |
| ------: | ------: | ------------: | ------------: | ------: | --------------------------------------------------- | ---------------------------------------- |
| +300.0% | +3.00ms | 14.3% → 36.4% | 1.0ms → 4.0ms |   1 → 4 | `Data.Aeson.Types.FromJSON.explicitParseField`      | `src/Data/Aeson/Types/FromJSON.hs:917:1` |
|     new | +2.00ms |  0.0% → 18.2% |   0ms → 2.0ms |   0 → 2 | `Data.Aeson.Types.Internal.modifyFailure`           | `src/Data/Aeson/Types/Internal.hs:671:1` |
|  -33.3% | -1.00ms | 42.9% → 18.2% | 3.0ms → 2.0ms |   3 → 2 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1` |

##### `Data.Aeson.Encoding.Builder.array` (`src/Data/Aeson/Encoding/Builder.hs:86:1`)

|  Change |   Delta |             % |          Time | Samples | Caller                                        | Location                                   |
| ------: | ------: | ------------: | ------------: | ------: | --------------------------------------------- | ------------------------------------------ |
| +300.0% | +3.00ms | 33.3% → 57.1% | 1.0ms → 4.0ms |   1 → 4 | `Data.Aeson.Encoding.Builder.text`            | `src/Data/Aeson/Encoding/Builder.hs:109:1` |
| +100.0% | +1.00ms | 33.3% → 28.6% | 1.0ms → 2.0ms |   1 → 2 | `Data.Aeson.Encoding.Builder.encodeToBuilder` | `src/Data/Aeson/Encoding/Builder.hs:68:1`  |

##### `Data.Aeson.KeyMap.lookup` (`src/Data/Aeson/KeyMap.hs:178:1`)

|  Change |   Delta |              % |            Time | Samples | Caller                                              | Location                                 |
| ------: | ------: | -------------: | --------------: | ------: | --------------------------------------------------- | ---------------------------------------- |
|  +10.3% | +4.00ms | 97.5% → 100.0% | 39.0ms → 43.0ms | 39 → 43 | `Data.Aeson.Types.FromJSON.explicitParseField`      | `src/Data/Aeson/Types/FromJSON.hs:917:1` |
| removed | -1.00ms |    2.5% → 0.0% |     1.0ms → 0ms |   1 → 0 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1` |

##### `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` (`src/Data/Aeson/Types/FromJSON.hs:923:1`)

|  Change |   Delta |      % |          Time | Samples | Caller                          | Location                                 |
| ------: | ------: | -----: | ------------: | ------: | ------------------------------- | ---------------------------------------- |
| +200.0% | +2.00ms | 100.0% | 1.0ms → 3.0ms |   1 → 3 | `Data.Aeson.Types.FromJSON..:?` | `src/Data/Aeson/Types/FromJSON.hs:859:1` |

##### `Main.top` (`Profile.hs:115:1`)

| Change |   Delta |      % |          Time | Samples | Caller           | Location           |
| -----: | ------: | -----: | ------------: | ------: | ---------------- | ------------------ |
| +50.0% | +2.00ms | 100.0% | 4.0ms → 6.0ms |   4 → 6 | `Main.summarize` | `Profile.hs:118:1` |

##### `Utils.magnitude` (`src/Utils.hs:78:1`)

| Change |   Delta |      % |          Time | Samples | Caller                             | Location                       |
| -----: | ------: | -----: | ------------: | ------: | ---------------------------------- | ------------------------------ |
| +66.7% | +2.00ms | 100.0% | 3.0ms → 5.0ms |   3 → 5 | `Data.Scientific.toBoundedInteger` | `src/Data/Scientific.hs:772:1` |

##### `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`)

| Change |   Delta |      % |           Time | Samples | Caller                                         | Location                                 |
| -----: | ------: | -----: | -------------: | ------: | ---------------------------------------------- | ---------------------------------------- |
| +25.0% | +2.00ms | 100.0% | 8.0ms → 10.0ms |  8 → 10 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Data.Aeson.Encoding.Builder.object` (`src/Data/Aeson/Encoding/Builder.hs:96:1`)

| Change |   Delta |      % |          Time | Samples | Caller                                        | Location                                  |
| -----: | ------: | -----: | ------------: | ------: | --------------------------------------------- | ----------------------------------------- |
| +66.7% | +2.00ms | 100.0% | 3.0ms → 5.0ms |   3 → 5 | `Data.Aeson.Encoding.Builder.encodeToBuilder` | `src/Data/Aeson/Encoding/Builder.hs:68:1` |

##### `Data.Aeson.Encoding.Builder.encodeToBuilder` (`src/Data/Aeson/Encoding/Builder.hs:68:1`)

| Change |   Delta |             % |        Time | Samples | Caller                               | Location                                    |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------ | ------------------------------------------- |
|    new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `Data.Aeson.Encoding.Internal.value` | `src/Data/Aeson/Encoding/Internal.hs:441:1` |

##### `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`)

| Change |   Delta |             % |        Time | Samples | Caller           | Location           |
| -----: | ------: | ------------: | ----------: | ------: | ---------------- | ------------------ |
|    new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `Main.roundTrip` | `Profile.hs:139:1` |

##### `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`)

| Change |   Delta |      % |           Time | Samples | Caller                                 | Location                                 |
| -----: | ------: | -----: | -------------: | ------: | -------------------------------------- | ---------------------------------------- |
| -54.5% | -6.00ms | 100.0% | 11.0ms → 5.0ms |  11 → 5 | `Data.Aeson.Types.FromJSON.withObject` | `src/Data/Aeson/Types/FromJSON.hs:720:1` |

##### `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`)

| Change |   Delta |      % |            Time | Samples | Caller                         | Location                                 |
| -----: | ------: | -----: | --------------: | ------: | ------------------------------ | ---------------------------------------- |
| -19.0% | -4.00ms | 100.0% | 21.0ms → 17.0ms | 21 → 17 | `Data.Aeson.Types.FromJSON..:` | `src/Data/Aeson/Types/FromJSON.hs:849:1` |

##### `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`)

| Change |   Delta |             % |            Time | Samples | Caller               | Location           |
| -----: | ------: | ------------: | --------------: | ------: | -------------------- | ------------------ |
| -75.0% | -3.00ms |  25.0% → 8.3% |   4.0ms → 1.0ms |   4 → 1 | `Main.parseJSONList` | `Profile.hs:50:10` |
|  -9.1% | -1.00ms | 68.8% → 83.3% | 11.0ms → 10.0ms | 11 → 10 | `Main.parseJSONList` | `Profile.hs:71:10` |

##### `Data.Aeson.Types.Internal.modifyFailure` (`src/Data/Aeson/Types/Internal.hs:671:1`)

| Change |   Delta |      % |          Time | Samples | Caller                                     | Location                                 |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------------ | ---------------------------------------- |
| -60.0% | -3.00ms | 100.0% | 5.0ms → 2.0ms |   5 → 2 | `Data.Aeson.Types.Internal.prependFailure` | `src/Data/Aeson/Types/Internal.hs:681:1` |

##### `Data.Aeson.Types.Internal.prependFailure` (`src/Data/Aeson/Types/Internal.hs:681:1`)

| Change |   Delta |      % |          Time | Samples | Caller                                         | Location                                 |
| -----: | ------: | -----: | ------------: | ------: | ---------------------------------------------- | ---------------------------------------- |
| -50.0% | -3.00ms | 100.0% | 6.0ms → 3.0ms |   6 → 3 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Data.Aeson.Types.FromJSON.parseIndexedJSON` (`src/Data/Aeson/Types/FromJSON.hs:171:1`)

| Change |   Delta |      % |          Time | Samples | Caller                                | Location                                 |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------- | ---------------------------------------- |
| -50.0% | -2.00ms | 100.0% | 4.0ms → 2.0ms |   4 → 2 | `Data.Aeson.Types.FromJSON.withArray` | `src/Data/Aeson/Types/FromJSON.hs:742:1` |

##### `Data.Aeson.Encoding.Builder.unquoted` (`src/Data/Aeson/Encoding/Builder.hs:113:1`)

|  Change |   Delta |              % |          Time | Samples | Caller                              | Location                                   |
| ------: | ------: | -------------: | ------------: | ------: | ----------------------------------- | ------------------------------------------ |
|  -25.0% | -1.00ms | 80.0% → 100.0% | 4.0ms → 3.0ms |   4 → 3 | `Data.Aeson.Encoding.Builder.text`  | `src/Data/Aeson/Encoding/Builder.hs:109:1` |
| removed | -1.00ms |   20.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `Data.Aeson.Encoding.Builder.array` | `src/Data/Aeson/Encoding/Builder.hs:86:1`  |

##### `Data.Scientific.normalize` (`src/Data/Scientific.hs:1102:1`)

| Change |   Delta |      % |          Time | Samples | Caller                             | Location                       |
| -----: | ------: | -----: | ------------: | ------: | ---------------------------------- | ------------------------------ |
| -66.7% | -2.00ms | 100.0% | 3.0ms → 1.0ms |   3 → 1 | `Data.Scientific.toBoundedInteger` | `src/Data/Scientific.hs:772:1` |

##### `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`)

|  Change |   Delta |            % |        Time | Samples | Caller           | Location          |
| ------: | ------: | -----------: | ----------: | ------: | ---------------- | ----------------- |
| removed | -1.00ms | 12.5% → 0.0% | 1.0ms → 0ms |   1 → 0 | `Main.parseJSON` | `Profile.hs:96:3` |

##### `Data.Aeson.Key.toText` (`src/Data/Aeson/Key.hs:57:1`)

|  Change |   Delta |             % |        Time | Samples | Caller                               | Location                                  |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------ | ----------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `Data.Aeson.Encoding.Builder.object` | `src/Data/Aeson/Encoding/Builder.hs:96:1` |

##### `Data.Aeson.KeyMap.toList` (`src/Data/Aeson/KeyMap.hs:253:1`)

|  Change |   Delta |             % |        Time | Samples | Caller                               | Location                                  |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------ | ----------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `Data.Aeson.Encoding.Builder.object` | `src/Data/Aeson/Encoding/Builder.hs:96:1` |

### Total time

#### Regressions

Functions with the largest increase in wall time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |     Delta |             % |              Time |       Samples | Function                                          | Location                                          |
| ------: | --------: | ------------: | ----------------: | ------------: | ------------------------------------------------- | ------------------------------------------------- |
|  +14.4% | +375.00ms | 69.1% → 71.0% |     2.60s → 2.97s | 2,599 → 2,974 | `Main.main`                                       | `Profile.hs:146:1`                                |
|  +14.3% | +344.00ms | 63.9% → 65.6% |     2.40s → 2.75s | 2,401 → 2,745 | `Data.Aeson.Decoding.eitherDecode`                | `src/Data/Aeson/Decoding.hs:79:1`                 |
|  +18.0% | +290.00ms | 42.9% → 45.4% |     1.61s → 1.90s | 1,611 → 1,901 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
|   +4.7% |  +54.00ms | 30.3% → 28.5% |     1.14s → 1.19s | 1,139 → 1,193 | `GC.GC`                                           | `<unknown>`                                       |
|   +6.7% |  +53.00ms | 21.0% → 20.1% | 790.0ms → 843.0ms |     790 → 843 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
|   +7.5% |  +35.00ms | 12.5% → 12.0% | 468.0ms → 503.0ms |     468 → 503 | `Data.Aeson.KeyMap.fromList`                      | `src/Data/Aeson/KeyMap.hs:247:1`                  |
|  +25.6% |  +32.00ms |   3.3% → 3.8% | 125.0ms → 157.0ms |     125 → 157 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|  +36.1% |  +13.00ms |   1.0% → 1.2% |   36.0ms → 49.0ms |       36 → 49 | `Main.roundTrip`                                  | `Profile.hs:139:1`                                |
|  +17.1% |  +12.00ms |   1.9% → 2.0% |   70.0ms → 82.0ms |       70 → 82 | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
|  +57.1% |  +12.00ms |   0.6% → 0.8% |   21.0ms → 33.0ms |       21 → 33 | `Main.summarize`                                  | `Profile.hs:118:1`                                |
|  +43.5% |  +10.00ms |   0.6% → 0.8% |   23.0ms → 33.0ms |       23 → 33 | `Data.Aeson.encode`                               | `src/Data/Aeson.hs:187:1`                         |
|  +32.1% |   +9.00ms |   0.7% → 0.9% |   28.0ms → 37.0ms |       28 → 37 | `Data.Aeson.Types.Internal.<?>`                   | `src/Data/Aeson/Types/Internal.hs:659:1`          |
|  +13.2% |   +9.00ms |          1.8% |   68.0ms → 77.0ms |       68 → 77 | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|  +81.8% |   +9.00ms |   0.3% → 0.5% |   11.0ms → 20.0ms |       11 → 20 | `Data.Aeson.Types.FromJSON.withText`              | `src/Data/Aeson/Types/FromJSON.hs:731:1`          |
| +160.0% |   +8.00ms |   0.1% → 0.3% |    5.0ms → 13.0ms |        5 → 13 | `Data.Aeson.Encoding.Builder.array`               | `src/Data/Aeson/Encoding/Builder.hs:86:1`         |
|  +34.8% |   +8.00ms |   0.6% → 0.7% |   23.0ms → 31.0ms |       23 → 31 | `Main.toEncoding`                                 | `Profile.hs:83:10`                                |
|  +35.0% |   +7.00ms |   0.5% → 0.6% |   20.0ms → 27.0ms |       20 → 27 | `Data.Aeson.Encoding.Builder.encodeToBuilder`     | `src/Data/Aeson/Encoding/Builder.hs:68:1`         |
|  +35.0% |   +7.00ms |   0.5% → 0.6% |   20.0ms → 27.0ms |       20 → 27 | `Data.Aeson.Encoding.Internal.value`              | `src/Data/Aeson/Encoding/Internal.hs:441:1`       |
|  +30.4% |   +7.00ms |   0.6% → 0.7% |   23.0ms → 30.0ms |       23 → 30 | `Main.tally`                                      | `Profile.hs:112:1`                                |
|   +2.7% |   +4.00ms |   4.0% → 3.7% | 150.0ms → 154.0ms |     150 → 154 | `Main.keywords`                                   | `Profile.hs:136:1`                                |

##### Ours

|  Change |     Delta |             % |              Time |       Samples | Function                                          | Location                                          |
| ------: | --------: | ------------: | ----------------: | ------------: | ------------------------------------------------- | ------------------------------------------------- |
|  +14.4% | +375.00ms | 69.1% → 71.0% |     2.60s → 2.97s | 2,599 → 2,974 | `Main.main`                                       | `Profile.hs:146:1`                                |
|  +14.3% | +344.00ms | 63.9% → 65.6% |     2.40s → 2.75s | 2,401 → 2,745 | `Data.Aeson.Decoding.eitherDecode`                | `src/Data/Aeson/Decoding.hs:79:1`                 |
|  +18.0% | +290.00ms | 42.9% → 45.4% |     1.61s → 1.90s | 1,611 → 1,901 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
|   +6.7% |  +53.00ms | 21.0% → 20.1% | 790.0ms → 843.0ms |     790 → 843 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
|   +7.5% |  +35.00ms | 12.5% → 12.0% | 468.0ms → 503.0ms |     468 → 503 | `Data.Aeson.KeyMap.fromList`                      | `src/Data/Aeson/KeyMap.hs:247:1`                  |
|  +25.6% |  +32.00ms |   3.3% → 3.8% | 125.0ms → 157.0ms |     125 → 157 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|  +36.1% |  +13.00ms |   1.0% → 1.2% |   36.0ms → 49.0ms |       36 → 49 | `Main.roundTrip`                                  | `Profile.hs:139:1`                                |
|  +17.1% |  +12.00ms |   1.9% → 2.0% |   70.0ms → 82.0ms |       70 → 82 | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
|  +57.1% |  +12.00ms |   0.6% → 0.8% |   21.0ms → 33.0ms |       21 → 33 | `Main.summarize`                                  | `Profile.hs:118:1`                                |
|  +43.5% |  +10.00ms |   0.6% → 0.8% |   23.0ms → 33.0ms |       23 → 33 | `Data.Aeson.encode`                               | `src/Data/Aeson.hs:187:1`                         |
|  +32.1% |   +9.00ms |   0.7% → 0.9% |   28.0ms → 37.0ms |       28 → 37 | `Data.Aeson.Types.Internal.<?>`                   | `src/Data/Aeson/Types/Internal.hs:659:1`          |
|  +13.2% |   +9.00ms |          1.8% |   68.0ms → 77.0ms |       68 → 77 | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|  +81.8% |   +9.00ms |   0.3% → 0.5% |   11.0ms → 20.0ms |       11 → 20 | `Data.Aeson.Types.FromJSON.withText`              | `src/Data/Aeson/Types/FromJSON.hs:731:1`          |
| +160.0% |   +8.00ms |   0.1% → 0.3% |    5.0ms → 13.0ms |        5 → 13 | `Data.Aeson.Encoding.Builder.array`               | `src/Data/Aeson/Encoding/Builder.hs:86:1`         |
|  +34.8% |   +8.00ms |   0.6% → 0.7% |   23.0ms → 31.0ms |       23 → 31 | `Main.toEncoding`                                 | `Profile.hs:83:10`                                |
|  +35.0% |   +7.00ms |   0.5% → 0.6% |   20.0ms → 27.0ms |       20 → 27 | `Data.Aeson.Encoding.Builder.encodeToBuilder`     | `src/Data/Aeson/Encoding/Builder.hs:68:1`         |
|  +35.0% |   +7.00ms |   0.5% → 0.6% |   20.0ms → 27.0ms |       20 → 27 | `Data.Aeson.Encoding.Internal.value`              | `src/Data/Aeson/Encoding/Internal.hs:441:1`       |
|  +30.4% |   +7.00ms |   0.6% → 0.7% |   23.0ms → 30.0ms |       23 → 30 | `Main.tally`                                      | `Profile.hs:112:1`                                |
|   +2.7% |   +4.00ms |   4.0% → 3.7% | 150.0ms → 154.0ms |     150 → 154 | `Main.keywords`                                   | `Profile.hs:136:1`                                |
|  +30.8% |   +4.00ms |   0.3% → 0.4% |   13.0ms → 17.0ms |       13 → 17 | `Data.Aeson.Encoding.Builder.text`                | `src/Data/Aeson/Encoding/Builder.hs:109:1`        |

##### Garbage collector

| Change |    Delta |             % |          Time |       Samples | Function | Location    |
| -----: | -------: | ------------: | ------------: | ------------: | -------- | ----------- |
|  +4.7% | +54.00ms | 30.3% → 28.5% | 1.14s → 1.19s | 1,139 → 1,193 | `GC.GC`  | `<unknown>` |

#### Improvements

Functions with the largest decrease in wall time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |   Delta |            % |              Time |   Samples | Function                                     | Location                                   |
| ------: | ------: | -----------: | ----------------: | --------: | -------------------------------------------- | ------------------------------------------ |
|  -30.0% | -6.00ms |  0.5% → 0.3% |   20.0ms → 14.0ms |   20 → 14 | `Data.Aeson.Types.FromJSON.withArray`        | `src/Data/Aeson/Types/FromJSON.hs:742:1`   |
|  -66.7% | -4.00ms | 0.2% → <0.1% |     6.0ms → 2.0ms |     6 → 2 | `Main.parseJSONList`                         | `Profile.hs:50:10`                         |
|  -30.8% | -4.00ms |  0.3% → 0.2% |    13.0ms → 9.0ms |    13 → 9 | `Data.Aeson.Types.Internal.prependFailure`   | `src/Data/Aeson/Types/Internal.hs:681:1`   |
|  -33.3% | -4.00ms |  0.3% → 0.2% |    12.0ms → 8.0ms |    12 → 8 | `SYSTEM.SYSTEM`                              | `<unknown>`                                |
|   -2.3% | -3.00ms |  3.5% → 3.1% | 133.0ms → 130.0ms | 133 → 130 | `Data.Aeson.Types.FromJSON..:`               | `src/Data/Aeson/Types/FromJSON.hs:849:1`   |
|   -1.4% | -2.00ms |  3.8% → 3.4% | 144.0ms → 142.0ms | 144 → 142 | `Data.Aeson.Types.FromJSON.withObject`       | `src/Data/Aeson/Types/FromJSON.hs:720:1`   |
|   -1.5% | -2.00ms |  3.6% → 3.2% | 137.0ms → 135.0ms | 137 → 135 | `Main.parseJSON`                             | `Profile.hs:48:3`                          |
|   -1.4% | -2.00ms |  3.8% → 3.4% | 144.0ms → 142.0ms | 144 → 142 | `Data.Aeson.Types.FromJSON.ifromJSON`        | `src/Data/Aeson/Types/FromJSON.hs:839:1`   |
|  -50.0% | -2.00ms | 0.1% → <0.1% |     4.0ms → 2.0ms |     4 → 2 | `Data.Aeson.Types.FromJSON.parseIndexedJSON` | `src/Data/Aeson/Types/FromJSON.hs:171:1`   |
|  -15.4% | -2.00ms |         0.3% |   13.0ms → 11.0ms |   13 → 11 | `Main.parseJSONList`                         | `Profile.hs:71:10`                         |
|  -66.7% | -2.00ms | 0.1% → <0.1% |     3.0ms → 1.0ms |     3 → 1 | `Data.Scientific.normalize`                  | `src/Data/Scientific.hs:1102:1`            |
|  -14.3% | -1.00ms |  0.2% → 0.1% |     7.0ms → 6.0ms |     7 → 6 | `Data.Aeson.Types.Internal.modifyFailure`    | `src/Data/Aeson/Types/Internal.hs:671:1`   |
|  -20.0% | -1.00ms |         0.1% |     5.0ms → 4.0ms |     5 → 4 | `Data.Aeson.Encoding.Builder.unquoted`       | `src/Data/Aeson/Encoding/Builder.hs:113:1` |
| removed | -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `Data.Aeson.Key.toText`                      | `src/Data/Aeson/Key.hs:57:1`               |
| removed | -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `Data.Aeson.KeyMap.toList`                   | `src/Data/Aeson/KeyMap.hs:253:1`           |

##### Ours

|  Change |   Delta |            % |              Time |   Samples | Function                                     | Location                                   |
| ------: | ------: | -----------: | ----------------: | --------: | -------------------------------------------- | ------------------------------------------ |
|  -30.0% | -6.00ms |  0.5% → 0.3% |   20.0ms → 14.0ms |   20 → 14 | `Data.Aeson.Types.FromJSON.withArray`        | `src/Data/Aeson/Types/FromJSON.hs:742:1`   |
|  -66.7% | -4.00ms | 0.2% → <0.1% |     6.0ms → 2.0ms |     6 → 2 | `Main.parseJSONList`                         | `Profile.hs:50:10`                         |
|  -30.8% | -4.00ms |  0.3% → 0.2% |    13.0ms → 9.0ms |    13 → 9 | `Data.Aeson.Types.Internal.prependFailure`   | `src/Data/Aeson/Types/Internal.hs:681:1`   |
|   -2.3% | -3.00ms |  3.5% → 3.1% | 133.0ms → 130.0ms | 133 → 130 | `Data.Aeson.Types.FromJSON..:`               | `src/Data/Aeson/Types/FromJSON.hs:849:1`   |
|   -1.4% | -2.00ms |  3.8% → 3.4% | 144.0ms → 142.0ms | 144 → 142 | `Data.Aeson.Types.FromJSON.withObject`       | `src/Data/Aeson/Types/FromJSON.hs:720:1`   |
|   -1.5% | -2.00ms |  3.6% → 3.2% | 137.0ms → 135.0ms | 137 → 135 | `Main.parseJSON`                             | `Profile.hs:48:3`                          |
|   -1.4% | -2.00ms |  3.8% → 3.4% | 144.0ms → 142.0ms | 144 → 142 | `Data.Aeson.Types.FromJSON.ifromJSON`        | `src/Data/Aeson/Types/FromJSON.hs:839:1`   |
|  -50.0% | -2.00ms | 0.1% → <0.1% |     4.0ms → 2.0ms |     4 → 2 | `Data.Aeson.Types.FromJSON.parseIndexedJSON` | `src/Data/Aeson/Types/FromJSON.hs:171:1`   |
|  -15.4% | -2.00ms |         0.3% |   13.0ms → 11.0ms |   13 → 11 | `Main.parseJSONList`                         | `Profile.hs:71:10`                         |
|  -66.7% | -2.00ms | 0.1% → <0.1% |     3.0ms → 1.0ms |     3 → 1 | `Data.Scientific.normalize`                  | `src/Data/Scientific.hs:1102:1`            |
|  -14.3% | -1.00ms |  0.2% → 0.1% |     7.0ms → 6.0ms |     7 → 6 | `Data.Aeson.Types.Internal.modifyFailure`    | `src/Data/Aeson/Types/Internal.hs:671:1`   |
|  -20.0% | -1.00ms |         0.1% |     5.0ms → 4.0ms |     5 → 4 | `Data.Aeson.Encoding.Builder.unquoted`       | `src/Data/Aeson/Encoding/Builder.hs:113:1` |
| removed | -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `Data.Aeson.Key.toText`                      | `src/Data/Aeson/Key.hs:57:1`               |
| removed | -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `Data.Aeson.KeyMap.toList`                   | `src/Data/Aeson/KeyMap.hs:253:1`           |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)

| Change |     Delta |             % |            Time |       Samples | Caller           | Location           |
| -----: | --------: | ------------: | --------------: | ------------: | ---------------- | ------------------ |
| +14.3% | +341.00ms | 99.5% → 99.4% |   2.39s → 2.73s | 2,388 → 2,729 | `Main.main`      | `Profile.hs:146:1` |
| +23.1% |   +3.00ms |   0.5% → 0.6% | 13.0ms → 16.0ms |       13 → 16 | `Main.roundTrip` | `Profile.hs:139:1` |

##### `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)

| Change |     Delta |      % |          Time |       Samples | Caller                             | Location                          |
| -----: | --------: | -----: | ------------: | ------------: | ---------------------------------- | --------------------------------- |
| +18.0% | +290.00ms | 100.0% | 1.61s → 1.90s | 1,611 → 1,901 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

##### `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)

| Change |    Delta |      % |              Time |   Samples | Caller                             | Location                          |
| -----: | -------: | -----: | ----------------: | --------: | ---------------------------------- | --------------------------------- |
|  +6.7% | +53.00ms | 100.0% | 790.0ms → 843.0ms | 790 → 843 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

##### `Data.Aeson.KeyMap.fromList` (`src/Data/Aeson/KeyMap.hs:247:1`)

| Change |    Delta |              % |              Time |   Samples | Caller                                         | Location                                     |
| -----: | -------: | -------------: | ----------------: | --------: | ---------------------------------------------- | -------------------------------------------- |
|  +7.3% | +34.00ms | 100.0% → 99.8% | 468.0ms → 502.0ms | 468 → 502 | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |
|    new |  +1.00ms |    0.0% → 0.2% |       0ms → 1.0ms |     0 → 1 | `Main.toJSON`                                  | `Profile.hs:84:3`                            |

##### `Data.Aeson.Internal.Text.unsafeDecodeASCII` (`src/Data/Aeson/Internal/Text.hs:29:1`)

| Change |    Delta |      % |              Time |   Samples | Caller                                            | Location                                          |
| -----: | -------: | -----: | ----------------: | --------: | ------------------------------------------------- | ------------------------------------------------- |
| +25.6% | +32.00ms | 100.0% | 125.0ms → 157.0ms | 125 → 157 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

##### `Main.roundTrip` (`Profile.hs:139:1`)

| Change |    Delta |      % |            Time | Samples | Caller      | Location           |
| -----: | -------: | -----: | --------------: | ------: | ----------- | ------------------ |
| +36.1% | +13.00ms | 100.0% | 36.0ms → 49.0ms | 36 → 49 | `Main.main` | `Profile.hs:146:1` |

##### `Data.Aeson.Internal.Unescape.unescapeText` (`src/Data/Aeson/Internal/Unescape.hs:34:1`)

| Change |    Delta |      % |            Time | Samples | Caller                                            | Location                                          |
| -----: | -------: | -----: | --------------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| +17.1% | +12.00ms | 100.0% | 70.0ms → 82.0ms | 70 → 82 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

##### `Main.summarize` (`Profile.hs:118:1`)

| Change |    Delta |      % |            Time | Samples | Caller      | Location           |
| -----: | -------: | -----: | --------------: | ------: | ----------- | ------------------ |
| +57.1% | +12.00ms | 100.0% | 21.0ms → 33.0ms | 21 → 33 | `Main.main` | `Profile.hs:146:1` |

##### `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`)

| Change |    Delta |      % |            Time | Samples | Caller           | Location           |
| -----: | -------: | -----: | --------------: | ------: | ---------------- | ------------------ |
| +43.5% | +10.00ms | 100.0% | 23.0ms → 33.0ms | 23 → 33 | `Main.roundTrip` | `Profile.hs:139:1` |

##### `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`)

| Change |   Delta |      % |            Time | Samples | Caller                                         | Location                                 |
| -----: | ------: | -----: | --------------: | ------: | ---------------------------------------------- | ---------------------------------------- |
| +32.1% | +9.00ms | 100.0% | 28.0ms → 37.0ms | 28 → 37 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Data.Integer.Conversion.byteStringToInteger` (`src/Data/Integer/Conversion.hs:104:1`)

| Change |   Delta |      % |            Time | Samples | Caller                                            | Location                                          |
| -----: | ------: | -----: | --------------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| +13.2% | +9.00ms | 100.0% | 68.0ms → 77.0ms | 68 → 77 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

##### `Data.Aeson.Types.FromJSON.withText` (`src/Data/Aeson/Types/FromJSON.hs:731:1`)

|  Change |   Delta |             % |           Time | Samples | Caller                                              | Location                                 |
| ------: | ------: | ------------: | -------------: | ------: | --------------------------------------------------- | ---------------------------------------- |
|  +83.3% | +5.00ms | 54.5% → 55.0% | 6.0ms → 11.0ms |  6 → 11 | `Data.Aeson.Types.Internal.<?>`                     | `src/Data/Aeson/Types/Internal.hs:659:1` |
| +300.0% | +3.00ms |  9.1% → 20.0% |  1.0ms → 4.0ms |   1 → 4 | `Data.Aeson.Types.FromJSON.explicitParseField`      | `src/Data/Aeson/Types/FromJSON.hs:917:1` |
| +200.0% | +2.00ms |  9.1% → 15.0% |  1.0ms → 3.0ms |   1 → 3 | `Data.Aeson.Types.Internal.modifyFailure`           | `src/Data/Aeson/Types/Internal.hs:671:1` |
|  -33.3% | -1.00ms | 27.3% → 10.0% |  3.0ms → 2.0ms |   3 → 2 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1` |

##### `Data.Aeson.Encoding.Builder.array` (`src/Data/Aeson/Encoding/Builder.hs:86:1`)

|  Change |   Delta |             % |          Time | Samples | Caller                                        | Location                                   |
| ------: | ------: | ------------: | ------------: | ------: | --------------------------------------------- | ------------------------------------------ |
| +200.0% | +4.00ms | 40.0% → 46.2% | 2.0ms → 6.0ms |   2 → 6 | `Data.Aeson.Encoding.Builder.object`          | `src/Data/Aeson/Encoding/Builder.hs:96:1`  |
| +150.0% | +3.00ms | 40.0% → 38.5% | 2.0ms → 5.0ms |   2 → 5 | `Data.Aeson.Encoding.Builder.text`            | `src/Data/Aeson/Encoding/Builder.hs:109:1` |
| +100.0% | +1.00ms | 20.0% → 15.4% | 1.0ms → 2.0ms |   1 → 2 | `Data.Aeson.Encoding.Builder.encodeToBuilder` | `src/Data/Aeson/Encoding/Builder.hs:68:1`  |

##### `Main.toEncoding` (`Profile.hs:83:10`)

| Change |   Delta |      % |            Time | Samples | Caller              | Location                  |
| -----: | ------: | -----: | --------------: | ------: | ------------------- | ------------------------- |
| +34.8% | +8.00ms | 100.0% | 23.0ms → 31.0ms | 23 → 31 | `Data.Aeson.encode` | `src/Data/Aeson.hs:187:1` |

##### `Data.Aeson.Encoding.Builder.encodeToBuilder` (`src/Data/Aeson/Encoding/Builder.hs:68:1`)

| Change |   Delta |      % |            Time | Samples | Caller                               | Location                                    |
| -----: | ------: | -----: | --------------: | ------: | ------------------------------------ | ------------------------------------------- |
| +35.0% | +7.00ms | 100.0% | 20.0ms → 27.0ms | 20 → 27 | `Data.Aeson.Encoding.Internal.value` | `src/Data/Aeson/Encoding/Internal.hs:441:1` |

##### `Data.Aeson.Encoding.Internal.value` (`src/Data/Aeson/Encoding/Internal.hs:441:1`)

| Change |   Delta |      % |            Time | Samples | Caller            | Location           |
| -----: | ------: | -----: | --------------: | ------: | ----------------- | ------------------ |
| +35.0% | +7.00ms | 100.0% | 20.0ms → 27.0ms | 20 → 27 | `Main.toEncoding` | `Profile.hs:83:10` |

##### `Main.tally` (`Profile.hs:112:1`)

|  Change |   Delta |             % |            Time | Samples | Caller           | Location           |
| ------: | ------: | ------------: | --------------: | ------: | ---------------- | ------------------ |
| +133.3% | +4.00ms | 13.0% → 23.3% |   3.0ms → 7.0ms |   3 → 7 | `Main.summarize` | `Profile.hs:118:1` |
|  +15.0% | +3.00ms | 87.0% → 76.7% | 20.0ms → 23.0ms | 20 → 23 | `Main.keywords`  | `Profile.hs:136:1` |

##### `Main.keywords` (`Profile.hs:136:1`)

| Change |   Delta |      % |              Time |   Samples | Caller      | Location           |
| -----: | ------: | -----: | ----------------: | --------: | ----------- | ------------------ |
|  +2.7% | +4.00ms | 100.0% | 150.0ms → 154.0ms | 150 → 154 | `Main.main` | `Profile.hs:146:1` |

##### `Data.Aeson.Encoding.Builder.text` (`src/Data/Aeson/Encoding/Builder.hs:109:1`)

|  Change |   Delta |            % |          Time | Samples | Caller                              | Location                                  |
| ------: | ------: | -----------: | ------------: | ------: | ----------------------------------- | ----------------------------------------- |
| +400.0% | +4.00ms | 7.7% → 29.4% | 1.0ms → 5.0ms |   1 → 5 | `Data.Aeson.Encoding.Builder.array` | `src/Data/Aeson/Encoding/Builder.hs:86:1` |

##### `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`)

| Change |   Delta |             % |            Time | Samples | Caller               | Location           |
| -----: | ------: | ------------: | --------------: | ------: | -------------------- | ------------------ |
| -66.7% | -4.00ms | 30.0% → 14.3% |   6.0ms → 2.0ms |   6 → 2 | `Main.parseJSONList` | `Profile.hs:50:10` |
| -15.4% | -2.00ms | 65.0% → 78.6% | 13.0ms → 11.0ms | 13 → 11 | `Main.parseJSONList` | `Profile.hs:71:10` |

##### `Main.parseJSONList` (`Profile.hs:50:10`)

| Change |   Delta |      % |          Time | Samples | Caller                                         | Location                                 |
| -----: | ------: | -----: | ------------: | ------: | ---------------------------------------------- | ---------------------------------------- |
| -66.7% | -4.00ms | 100.0% | 6.0ms → 2.0ms |   6 → 2 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Data.Aeson.Types.Internal.prependFailure` (`src/Data/Aeson/Types/Internal.hs:681:1`)

| Change |   Delta |             % |          Time | Samples | Caller                                         | Location                                 |
| -----: | ------: | ------------: | ------------: | ------: | ---------------------------------------------- | ---------------------------------------- |
| -50.0% | -3.00ms | 46.2% → 33.3% | 6.0ms → 3.0ms |   6 → 3 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |
| -14.3% | -1.00ms | 53.8% → 66.7% | 7.0ms → 6.0ms |   7 → 6 | `Data.Aeson.Types.Internal.<?>`                | `src/Data/Aeson/Types/Internal.hs:659:1` |

##### `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`)

| Change |   Delta |      % |              Time |   Samples | Caller                                 | Location                                 |
| -----: | ------: | -----: | ----------------: | --------: | -------------------------------------- | ---------------------------------------- |
|  -2.3% | -3.00ms | 100.0% | 133.0ms → 130.0ms | 133 → 130 | `Data.Aeson.Types.FromJSON.withObject` | `src/Data/Aeson/Types/FromJSON.hs:720:1` |

##### `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`)

| Change |   Delta |     % |              Time |   Samples | Caller           | Location          |
| -----: | ------: | ----: | ----------------: | --------: | ---------------- | ----------------- |
|  -1.5% | -2.00ms | 95.1% | 137.0ms → 135.0ms | 137 → 135 | `Main.parseJSON` | `Profile.hs:48:3` |

##### `Main.parseJSON` (`Profile.hs:48:3`)

| Change |   Delta |      % |              Time |   Samples | Caller                                | Location                                 |
| -----: | ------: | -----: | ----------------: | --------: | ------------------------------------- | ---------------------------------------- |
|  -1.5% | -2.00ms | 100.0% | 137.0ms → 135.0ms | 137 → 135 | `Data.Aeson.Types.FromJSON.ifromJSON` | `src/Data/Aeson/Types/FromJSON.hs:839:1` |

##### `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`)

| Change |   Delta |      % |              Time |   Samples | Caller                                         | Location                                     |
| -----: | ------: | -----: | ----------------: | --------: | ---------------------------------------------- | -------------------------------------------- |
|  -1.4% | -2.00ms | 100.0% | 144.0ms → 142.0ms | 144 → 142 | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |

##### `Data.Aeson.Types.FromJSON.parseIndexedJSON` (`src/Data/Aeson/Types/FromJSON.hs:171:1`)

| Change |   Delta |      % |          Time | Samples | Caller                                | Location                                 |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------- | ---------------------------------------- |
| -50.0% | -2.00ms | 100.0% | 4.0ms → 2.0ms |   4 → 2 | `Data.Aeson.Types.FromJSON.withArray` | `src/Data/Aeson/Types/FromJSON.hs:742:1` |

##### `Main.parseJSONList` (`Profile.hs:71:10`)

|  Change |   Delta |             % |          Time | Samples | Caller                                         | Location                                 |
| ------: | ------: | ------------: | ------------: | ------: | ---------------------------------------------- | ---------------------------------------- |
| +166.7% | +5.00ms | 23.1% → 72.7% | 3.0ms → 8.0ms |   3 → 8 | `Data.Aeson.Types.FromJSON.withText`           | `src/Data/Aeson/Types/FromJSON.hs:731:1` |
|  -66.7% | -4.00ms | 46.2% → 18.2% | 6.0ms → 2.0ms |   6 → 2 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |
|  -75.0% | -3.00ms |  30.8% → 9.1% | 4.0ms → 1.0ms |   4 → 1 | `Data.Aeson.Types.Internal.<?>`                | `src/Data/Aeson/Types/Internal.hs:659:1` |

##### `Data.Scientific.normalize` (`src/Data/Scientific.hs:1102:1`)

| Change |   Delta |      % |          Time | Samples | Caller                             | Location                       |
| -----: | ------: | -----: | ------------: | ------: | ---------------------------------- | ------------------------------ |
| -66.7% | -2.00ms | 100.0% | 3.0ms → 1.0ms |   3 → 1 | `Data.Scientific.toBoundedInteger` | `src/Data/Scientific.hs:772:1` |

##### `Data.Aeson.Types.Internal.modifyFailure` (`src/Data/Aeson/Types/Internal.hs:671:1`)

| Change |   Delta |      % |          Time | Samples | Caller                                     | Location                                 |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------------ | ---------------------------------------- |
| -14.3% | -1.00ms | 100.0% | 7.0ms → 6.0ms |   7 → 6 | `Data.Aeson.Types.Internal.prependFailure` | `src/Data/Aeson/Types/Internal.hs:681:1` |

##### `Data.Aeson.Encoding.Builder.unquoted` (`src/Data/Aeson/Encoding/Builder.hs:113:1`)

|  Change |   Delta |            % |        Time | Samples | Caller                              | Location                                  |
| ------: | ------: | -----------: | ----------: | ------: | ----------------------------------- | ----------------------------------------- |
| removed | -1.00ms | 20.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `Data.Aeson.Encoding.Builder.array` | `src/Data/Aeson/Encoding/Builder.hs:86:1` |

##### `Data.Aeson.Key.toText` (`src/Data/Aeson/Key.hs:57:1`)

|  Change |   Delta |             % |        Time | Samples | Caller                               | Location                                  |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------ | ----------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `Data.Aeson.Encoding.Builder.object` | `src/Data/Aeson/Encoding/Builder.hs:96:1` |

##### `Data.Aeson.KeyMap.toList` (`src/Data/Aeson/KeyMap.hs:253:1`)

|  Change |   Delta |             % |        Time | Samples | Caller                               | Location                                  |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------ | ----------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `Data.Aeson.Encoding.Builder.object` | `src/Data/Aeson/Encoding/Builder.hs:96:1` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Main.main` (`Profile.hs:146:1`)

| Change |     Delta |             % |              Time |       Samples | Callee                             | Location                          |
| -----: | --------: | ------------: | ----------------: | ------------: | ---------------------------------- | --------------------------------- |
| +14.3% | +341.00ms | 91.9% → 91.8% |     2.39s → 2.73s | 2,388 → 2,729 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |
| +36.1% |  +13.00ms |   1.4% → 1.6% |   36.0ms → 49.0ms |       36 → 49 | `Main.roundTrip`                   | `Profile.hs:139:1`                |
| +57.1% |  +12.00ms |   0.8% → 1.1% |   21.0ms → 33.0ms |       21 → 33 | `Main.summarize`                   | `Profile.hs:118:1`                |
|  +2.7% |   +4.00ms |   5.8% → 5.2% | 150.0ms → 154.0ms |     150 → 154 | `Main.keywords`                    | `Profile.hs:136:1`                |

##### `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)

| Change |     Delta |             % |              Time |       Samples | Callee                                            | Location                                          |
| -----: | --------: | ------------: | ----------------: | ------------: | ------------------------------------------------- | ------------------------------------------------- |
| +18.0% | +290.00ms | 67.1% → 69.3% |     1.61s → 1.90s | 1,611 → 1,901 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
|  +6.7% |  +53.00ms | 32.9% → 30.7% | 790.0ms → 843.0ms |     790 → 843 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |

##### `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)

| Change |    Delta |           % |              Time |   Samples | Callee                                        | Location                                   |
| -----: | -------: | ----------: | ----------------: | --------: | --------------------------------------------- | ------------------------------------------ |
| +25.6% | +32.00ms | 7.8% → 8.3% | 125.0ms → 157.0ms | 125 → 157 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`  | `src/Data/Aeson/Internal/Text.hs:29:1`     |
| +17.1% | +12.00ms |        4.3% |   70.0ms → 82.0ms |   70 → 82 | `Data.Aeson.Internal.Unescape.unescapeText`   | `src/Data/Aeson/Internal/Unescape.hs:34:1` |
| +13.2% |  +9.00ms | 4.2% → 4.1% |   68.0ms → 77.0ms |   68 → 77 | `Data.Integer.Conversion.byteStringToInteger` | `src/Data/Integer/Conversion.hs:104:1`     |

##### `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)

| Change |    Delta |             % |              Time |   Samples | Callee                                | Location                                 |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------------------- | ---------------------------------------- |
|  +7.3% | +34.00ms | 59.2% → 59.5% | 468.0ms → 502.0ms | 468 → 502 | `Data.Aeson.KeyMap.fromList`          | `src/Data/Aeson/KeyMap.hs:247:1`         |
|  -1.4% |  -2.00ms | 18.2% → 16.8% | 144.0ms → 142.0ms | 144 → 142 | `Data.Aeson.Types.FromJSON.ifromJSON` | `src/Data/Aeson/Types/FromJSON.hs:839:1` |

##### `Main.roundTrip` (`Profile.hs:139:1`)

| Change |    Delta |             % |            Time | Samples | Callee                             | Location                          |
| -----: | -------: | ------------: | --------------: | ------: | ---------------------------------- | --------------------------------- |
| +43.5% | +10.00ms | 63.9% → 67.3% | 23.0ms → 33.0ms | 23 → 33 | `Data.Aeson.encode`                | `src/Data/Aeson.hs:187:1`         |
| +23.1% |  +3.00ms | 36.1% → 32.7% | 13.0ms → 16.0ms | 13 → 16 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

##### `Main.summarize` (`Profile.hs:118:1`)

|  Change |   Delta |             % |          Time | Samples | Callee       | Location           |
| ------: | ------: | ------------: | ------------: | ------: | ------------ | ------------------ |
| +133.3% | +4.00ms | 14.3% → 21.2% | 3.0ms → 7.0ms |   3 → 7 | `Main.tally` | `Profile.hs:112:1` |
|  +50.0% | +2.00ms | 19.0% → 18.2% | 4.0ms → 6.0ms |   4 → 6 | `Main.top`   | `Profile.hs:115:1` |

##### `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`)

| Change |   Delta |              % |            Time | Samples | Callee            | Location           |
| -----: | ------: | -------------: | --------------: | ------: | ----------------- | ------------------ |
| +34.8% | +8.00ms | 100.0% → 93.9% | 23.0ms → 31.0ms | 23 → 31 | `Main.toEncoding` | `Profile.hs:83:10` |

##### `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`)

|  Change |   Delta |             % |           Time | Samples | Callee                                     | Location                                 |
| ------: | ------: | ------------: | -------------: | ------: | ------------------------------------------ | ---------------------------------------- |
|  +83.3% | +5.00ms | 21.4% → 29.7% | 6.0ms → 11.0ms |  6 → 11 | `Data.Aeson.Types.FromJSON.withText`       | `src/Data/Aeson/Types/FromJSON.hs:731:1` |
|  -75.0% | -3.00ms |  14.3% → 2.7% |  4.0ms → 1.0ms |   4 → 1 | `Main.parseJSONList`                       | `Profile.hs:71:10`                       |
| removed | -2.00ms |   7.1% → 0.0% |    2.0ms → 0ms |   2 → 0 | `Data.Aeson.Types.FromJSON..:?`            | `src/Data/Aeson/Types/FromJSON.hs:859:1` |
|  -14.3% | -1.00ms | 25.0% → 16.2% |  7.0ms → 6.0ms |   7 → 6 | `Data.Aeson.Types.Internal.prependFailure` | `src/Data/Aeson/Types/Internal.hs:681:1` |

##### `Data.Aeson.Types.FromJSON.withText` (`src/Data/Aeson/Types/FromJSON.hs:731:1`)

|  Change |   Delta |             % |          Time | Samples | Callee               | Location           |
| ------: | ------: | ------------: | ------------: | ------: | -------------------- | ------------------ |
| +166.7% | +5.00ms | 27.3% → 40.0% | 3.0ms → 8.0ms |   3 → 8 | `Main.parseJSONList` | `Profile.hs:71:10` |

##### `Data.Aeson.Encoding.Builder.array` (`src/Data/Aeson/Encoding/Builder.hs:86:1`)

|  Change |   Delta |             % |          Time | Samples | Callee                                   | Location                                   |
| ------: | ------: | ------------: | ------------: | ------: | ---------------------------------------- | ------------------------------------------ |
| +400.0% | +4.00ms | 20.0% → 38.5% | 1.0ms → 5.0ms |   1 → 5 | `Data.Aeson.Encoding.Builder.text`       | `src/Data/Aeson/Encoding/Builder.hs:109:1` |
| removed | -1.00ms |  20.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `Data.Aeson.Encoding.Builder.unquoted`   | `src/Data/Aeson/Encoding/Builder.hs:113:1` |
|     new | +1.00ms |   0.0% → 7.7% |   0ms → 1.0ms |   0 → 1 | `Data.Aeson.Encoding.Builder.scientific` | `src/Data/Aeson/Encoding/Builder.hs:144:1` |

##### `Main.toEncoding` (`Profile.hs:83:10`)

| Change |   Delta |             % |            Time | Samples | Callee                               | Location                                    |
| -----: | ------: | ------------: | --------------: | ------: | ------------------------------------ | ------------------------------------------- |
| +35.0% | +7.00ms | 87.0% → 87.1% | 20.0ms → 27.0ms | 20 → 27 | `Data.Aeson.Encoding.Internal.value` | `src/Data/Aeson/Encoding/Internal.hs:441:1` |
| +33.3% | +1.00ms | 13.0% → 12.9% |   3.0ms → 4.0ms |   3 → 4 | `Main.toJSON`                        | `Profile.hs:84:3`                           |

##### `Data.Aeson.Encoding.Builder.encodeToBuilder` (`src/Data/Aeson/Encoding/Builder.hs:68:1`)

|  Change |   Delta |             % |            Time | Samples | Callee                               | Location                                  |
| ------: | ------: | ------------: | --------------: | ------: | ------------------------------------ | ----------------------------------------- |
|  +21.1% | +4.00ms | 95.0% → 85.2% | 19.0ms → 23.0ms | 19 → 23 | `Data.Aeson.Encoding.Builder.object` | `src/Data/Aeson/Encoding/Builder.hs:96:1` |
| +100.0% | +1.00ms |   5.0% → 7.4% |   1.0ms → 2.0ms |   1 → 2 | `Data.Aeson.Encoding.Builder.array`  | `src/Data/Aeson/Encoding/Builder.hs:86:1` |

##### `Data.Aeson.Encoding.Internal.value` (`src/Data/Aeson/Encoding/Internal.hs:441:1`)

| Change |   Delta |      % |            Time | Samples | Callee                                        | Location                                  |
| -----: | ------: | -----: | --------------: | ------: | --------------------------------------------- | ----------------------------------------- |
| +35.0% | +7.00ms | 100.0% | 20.0ms → 27.0ms | 20 → 27 | `Data.Aeson.Encoding.Builder.encodeToBuilder` | `src/Data/Aeson/Encoding/Builder.hs:68:1` |

##### `Main.keywords` (`Profile.hs:136:1`)

| Change |   Delta |             % |            Time | Samples | Callee       | Location           |
| -----: | ------: | ------------: | --------------: | ------: | ------------ | ------------------ |
| +15.0% | +3.00ms | 13.3% → 14.9% | 20.0ms → 23.0ms | 20 → 23 | `Main.tally` | `Profile.hs:112:1` |

##### `Data.Aeson.Encoding.Builder.text` (`src/Data/Aeson/Encoding/Builder.hs:109:1`)

|  Change |   Delta |             % |          Time | Samples | Callee                              | Location                                  |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------------- | ----------------------------------------- |
| +150.0% | +3.00ms | 15.4% → 29.4% | 2.0ms → 5.0ms |   2 → 5 | `Data.Aeson.Encoding.Builder.array` | `src/Data/Aeson/Encoding/Builder.hs:86:1` |

##### `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`)

| Change |   Delta |             % |          Time | Samples | Callee                                       | Location                                 |
| -----: | ------: | ------------: | ------------: | ------: | -------------------------------------------- | ---------------------------------------- |
| -50.0% | -2.00ms | 20.0% → 14.3% | 4.0ms → 2.0ms |   4 → 2 | `Data.Aeson.Types.FromJSON.parseIndexedJSON` | `src/Data/Aeson/Types/FromJSON.hs:171:1` |

##### `Main.parseJSONList` (`Profile.hs:50:10`)

| Change |   Delta |      % |          Time | Samples | Callee                                | Location                                 |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------- | ---------------------------------------- |
| -66.7% | -4.00ms | 100.0% | 6.0ms → 2.0ms |   6 → 2 | `Data.Aeson.Types.FromJSON.withArray` | `src/Data/Aeson/Types/FromJSON.hs:742:1` |

##### `Data.Aeson.Types.Internal.prependFailure` (`src/Data/Aeson/Types/Internal.hs:681:1`)

| Change |   Delta |             % |          Time | Samples | Callee                                    | Location                                 |
| -----: | ------: | ------------: | ------------: | ------: | ----------------------------------------- | ---------------------------------------- |
| -14.3% | -1.00ms | 53.8% → 66.7% | 7.0ms → 6.0ms |   7 → 6 | `Data.Aeson.Types.Internal.modifyFailure` | `src/Data/Aeson/Types/Internal.hs:671:1` |

##### `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`)

| Change |   Delta |             % |              Time |   Samples | Callee                                         | Location                                 |
| -----: | ------: | ------------: | ----------------: | --------: | ---------------------------------------------- | ---------------------------------------- |
|  +2.5% | +3.00ms | 91.7% → 96.2% | 122.0ms → 125.0ms | 122 → 125 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`)

| Change |   Delta |             % |              Time |   Samples | Callee                          | Location                                 |
| -----: | ------: | ------------: | ----------------: | --------: | ------------------------------- | ---------------------------------------- |
|  -2.3% | -3.00ms | 92.4% → 91.5% | 133.0ms → 130.0ms | 133 → 130 | `Data.Aeson.Types.FromJSON..:`  | `src/Data/Aeson/Types/FromJSON.hs:849:1` |
| +66.7% | +2.00ms |   2.1% → 3.5% |     3.0ms → 5.0ms |     3 → 5 | `Data.Aeson.Types.FromJSON..:?` | `src/Data/Aeson/Types/FromJSON.hs:859:1` |

##### `Main.parseJSON` (`Profile.hs:48:3`)

| Change |   Delta |      % |              Time |   Samples | Callee                                 | Location                                 |
| -----: | ------: | -----: | ----------------: | --------: | -------------------------------------- | ---------------------------------------- |
|  -1.5% | -2.00ms | 100.0% | 137.0ms → 135.0ms | 137 → 135 | `Data.Aeson.Types.FromJSON.withObject` | `src/Data/Aeson/Types/FromJSON.hs:720:1` |

##### `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`)

| Change |   Delta |     % |              Time |   Samples | Callee           | Location          |
| -----: | ------: | ----: | ----------------: | --------: | ---------------- | ----------------- |
|  -1.5% | -2.00ms | 95.1% | 137.0ms → 135.0ms | 137 → 135 | `Main.parseJSON` | `Profile.hs:48:3` |

##### `Main.parseJSONList` (`Profile.hs:71:10`)

| Change |   Delta |      % |            Time | Samples | Callee                                | Location                                 |
| -----: | ------: | -----: | --------------: | ------: | ------------------------------------- | ---------------------------------------- |
| -15.4% | -2.00ms | 100.0% | 13.0ms → 11.0ms | 13 → 11 | `Data.Aeson.Types.FromJSON.withArray` | `src/Data/Aeson/Types/FromJSON.hs:742:1` |

##### `Data.Aeson.Types.Internal.modifyFailure` (`src/Data/Aeson/Types/Internal.hs:671:1`)

|  Change |   Delta |             % |          Time | Samples | Callee                               | Location                                 |
| ------: | ------: | ------------: | ------------: | ------: | ------------------------------------ | ---------------------------------------- |
| +200.0% | +2.00ms | 14.3% → 50.0% | 1.0ms → 3.0ms |   1 → 3 | `Data.Aeson.Types.FromJSON.withText` | `src/Data/Aeson/Types/FromJSON.hs:731:1` |

##### `Data.Aeson.Encoding.Builder.unquoted` (`src/Data/Aeson/Encoding/Builder.hs:113:1`)

| Change |   Delta |            % |        Time | Samples | Callee                                   | Location                                   |
| -----: | ------: | -----------: | ----------: | ------: | ---------------------------------------- | ------------------------------------------ |
|    new | +1.00ms | 0.0% → 25.0% | 0ms → 1.0ms |   0 → 1 | `Data.Aeson.Encoding.Builder.scientific` | `src/Data/Aeson/Encoding/Builder.hs:144:1` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in wall time spent in their leaf frame.

Common call stack: `Main.main` (`Profile.hs:146:1`)

|  Change |     Delta |             % |              Time |       Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------: | --------: | ------------: | ----------------: | ------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  +17.4% | +234.00ms | 35.8% → 37.7% |     1.34s → 1.58s | 1,344 → 1,578 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|   +7.5% |  +35.00ms | 12.4% → 12.0% | 467.0ms → 502.0ms |     467 → 502 | `Data.Aeson.KeyMap.fromList` (`src/Data/Aeson/KeyMap.hs:247:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  +25.6% |  +32.00ms |   3.3% → 3.8% | 125.0ms → 157.0ms |     125 → 157 | `Data.Aeson.Internal.Text.unsafeDecodeASCII` (`src/Data/Aeson/Internal/Text.hs:29:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  +12.4% |  +22.00ms |   4.7% → 4.8% | 177.0ms → 199.0ms |     177 → 199 | `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  +17.1% |  +12.00ms |   1.9% → 2.0% |   70.0ms → 82.0ms |       70 → 82 | `Data.Aeson.Internal.Unescape.unescapeText` (`src/Data/Aeson/Internal/Unescape.hs:34:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| +111.1% |  +10.00ms |   0.2% → 0.5% |    9.0ms → 19.0ms |        9 → 19 | `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                  |
|  +11.8% |   +8.00ms |          1.8% |   68.0ms → 76.0ms |       68 → 76 | `Data.Integer.Conversion.byteStringToInteger` (`src/Data/Integer/Conversion.hs:104:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  +42.9% |   +6.00ms |   0.4% → 0.5% |   14.0ms → 20.0ms |       14 → 20 | `Main.summarize` (`Profile.hs:118:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  +13.2% |   +5.00ms |          1.0% |   38.0ms → 43.0ms |       38 → 43 | `Data.Aeson.KeyMap.lookup` (`src/Data/Aeson/KeyMap.hs:178:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                               |
| +166.7% |   +5.00ms |   0.1% → 0.2% |     3.0ms → 8.0ms |         3 → 8 | `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`) ← `Main.parseJSONList` (`Profile.hs:71:10`) ← `Data.Aeson.Types.FromJSON.withText` (`src/Data/Aeson/Types/FromJSON.hs:731:1`) ← `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) |
| +400.0% |   +4.00ms |  <0.1% → 0.1% |     1.0ms → 5.0ms |         1 → 5 | `Data.Aeson.Encoding.Builder.text` (`src/Data/Aeson/Encoding/Builder.hs:109:1`) ← `Data.Aeson.Encoding.Builder.array` (86:1) ← `Data.Aeson.Encoding.Builder.object` (96:1) ← `Data.Aeson.Encoding.Builder.encodeToBuilder` (68:1) ← `Data.Aeson.Encoding.Internal.value` (`src/Data/Aeson/Encoding/Internal.hs:441:1`) ← `Main.toEncoding` (`Profile.hs:83:10`) ← `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`) ← `Main.roundTrip` (`Profile.hs:139:1`)                                                                                                                                                                                                                                                                                                                            |
| +133.3% |   +4.00ms |   0.1% → 0.2% |     3.0ms → 7.0ms |         3 → 7 | `Main.tally` (`Profile.hs:112:1`) ← `Main.summarize` (118:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| +300.0% |   +3.00ms |  <0.1% → 0.1% |     1.0ms → 4.0ms |         1 → 4 | `Data.Aeson.Encoding.Builder.array` (`src/Data/Aeson/Encoding/Builder.hs:86:1`) ← `Data.Aeson.Encoding.Builder.text` (109:1) ← `Data.Aeson.Encoding.Builder.object` (96:1) ← `Data.Aeson.Encoding.Builder.encodeToBuilder` (68:1) ← `Data.Aeson.Encoding.Internal.value` (`src/Data/Aeson/Encoding/Internal.hs:441:1`) ← `Main.toEncoding` (`Profile.hs:83:10`) ← `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`) ← `Main.roundTrip` (`Profile.hs:139:1`)                                                                                                                                                                                                                                                                                                                            |
|  +75.0% |   +3.00ms |   0.1% → 0.2% |     4.0ms → 7.0ms |         4 → 7 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.roundTrip` (`Profile.hs:139:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  +15.0% |   +3.00ms |          0.5% |   20.0ms → 23.0ms |       20 → 23 | `Main.tally` (`Profile.hs:112:1`) ← `Main.keywords` (136:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| +300.0% |   +3.00ms |  <0.1% → 0.1% |     1.0ms → 4.0ms |         1 → 4 | `Data.Aeson.Types.FromJSON.withText` (`src/Data/Aeson/Types/FromJSON.hs:731:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (917:1) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                |
|  +50.0% |   +2.00ms |          0.1% |     4.0ms → 6.0ms |         4 → 6 | `Main.top` (`Profile.hs:115:1`) ← `Main.summarize` (118:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  +66.7% |   +2.00ms |          0.1% |     3.0ms → 5.0ms |         3 → 5 | `Utils.magnitude` (`src/Utils.hs:78:1`) ← `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                               |
|  +66.7% |   +2.00ms |          0.1% |     3.0ms → 5.0ms |         3 → 5 | `Data.Aeson.Encoding.Builder.object` (`src/Data/Aeson/Encoding/Builder.hs:96:1`) ← `Data.Aeson.Encoding.Builder.encodeToBuilder` (68:1) ← `Data.Aeson.Encoding.Internal.value` (`src/Data/Aeson/Encoding/Internal.hs:441:1`) ← `Main.toEncoding` (`Profile.hs:83:10`) ← `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`) ← `Main.roundTrip` (`Profile.hs:139:1`)                                                                                                                                                                                                                                                                                                                                                                                                                      |
| +200.0% |   +2.00ms |  <0.1% → 0.1% |     1.0ms → 3.0ms |         1 → 3 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` (`src/Data/Aeson/Types/FromJSON.hs:923:1`) ← `Data.Aeson.Types.FromJSON..:?` (859:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                         |

### Improvements

Call stacks with the largest decrease in wall time spent in their leaf frame.

Common call stack: `Main.main` (`Profile.hs:146:1`)

|  Change |   Delta |            % |            Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------: | ------: | -----------: | --------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -63.6% | -7.00ms |  0.3% → 0.1% |  11.0ms → 4.0ms |  11 → 4 | `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                                                 |
|  -21.1% | -4.00ms |  0.5% → 0.4% | 19.0ms → 15.0ms | 19 → 15 | `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                        |
|  -75.0% | -3.00ms | 0.1% → <0.1% |   4.0ms → 1.0ms |   4 → 1 | `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`) ← `Main.parseJSONList` (`Profile.hs:71:10`) ← `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                            |
|  -75.0% | -3.00ms | 0.1% → <0.1% |   4.0ms → 1.0ms |   4 → 1 | `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`) ← `Main.parseJSONList` (`Profile.hs:50:10`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                         |
|  -50.0% | -3.00ms |  0.2% → 0.1% |   6.0ms → 3.0ms |   6 → 3 | `Data.Aeson.Types.Internal.prependFailure` (`src/Data/Aeson/Types/Internal.hs:681:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                |
|  -50.0% | -3.00ms |  0.2% → 0.1% |   6.0ms → 3.0ms |   6 → 3 | `Data.Aeson.Encoding.Builder.text` (`src/Data/Aeson/Encoding/Builder.hs:109:1`) ← `Data.Aeson.Encoding.Builder.object` (96:1) ← `Data.Aeson.Encoding.Builder.encodeToBuilder` (68:1) ← `Data.Aeson.Encoding.Internal.value` (`src/Data/Aeson/Encoding/Internal.hs:441:1`) ← `Main.toEncoding` (`Profile.hs:83:10`) ← `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`) ← `Main.roundTrip` (`Profile.hs:139:1`)                                                                                                                                                                                                                                                                                                                                                  |
|  -75.0% | -3.00ms | 0.1% → <0.1% |   4.0ms → 1.0ms |   4 → 1 | `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`) ← `Main.parseJSONList` (`Profile.hs:71:10`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                         |
|  -66.7% | -2.00ms | 0.1% → <0.1% |   3.0ms → 1.0ms |   3 → 1 | `Data.Aeson.Types.FromJSON.withText` (`src/Data/Aeson/Types/FromJSON.hs:731:1`) ← `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                         |
|  -50.0% | -2.00ms | 0.1% → <0.1% |   4.0ms → 2.0ms |   4 → 2 | `Data.Aeson.Types.Internal.modifyFailure` (`src/Data/Aeson/Types/Internal.hs:671:1`) ← `Data.Aeson.Types.Internal.prependFailure` (681:1) ← `Data.Aeson.Types.Internal.<?>` (659:1) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                  |
| removed | -2.00ms |  0.1% → 0.0% |     2.0ms → 0ms |   2 → 0 | `Data.Aeson.Types.FromJSON.withText` (`src/Data/Aeson/Types/FromJSON.hs:731:1`) ← `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` (923:1) ← `Data.Aeson.Types.FromJSON..:?` (859:1) ← `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) |
|  -50.0% | -1.00ms | 0.1% → <0.1% |   2.0ms → 1.0ms |   2 → 1 | `Data.Aeson.Types.FromJSON.parseIndexedJSON` (`src/Data/Aeson/Types/FromJSON.hs:171:1`) ← `Data.Aeson.Types.FromJSON.withArray` (742:1) ← `Main.parseJSONList` (`Profile.hs:50:10`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                  |
| removed | -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `Data.Aeson.Types.Internal.modifyFailure` (`src/Data/Aeson/Types/Internal.hs:671:1`) ← `Data.Aeson.Types.Internal.prependFailure` (681:1) ← `Data.Aeson.Types.Internal.<?>` (659:1) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:96:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.roundTrip` (`Profile.hs:139:1`)                                          |
|  -50.0% | -1.00ms | 0.1% → <0.1% |   2.0ms → 1.0ms |   2 → 1 | `Data.Aeson.Types.FromJSON.parseIndexedJSON` (`src/Data/Aeson/Types/FromJSON.hs:171:1`) ← `Data.Aeson.Types.FromJSON.withArray` (742:1) ← `Main.parseJSONList` (`Profile.hs:71:10`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                  |
| removed | -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `Data.Aeson.KeyMap.lookup` (`src/Data/Aeson/KeyMap.hs:178:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:96:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.roundTrip` (`Profile.hs:139:1`)                                                                                                                                                                |
|  -25.0% | -1.00ms |         0.1% |   4.0ms → 3.0ms |   4 → 3 | `Data.Aeson.Encoding.Builder.unquoted` (`src/Data/Aeson/Encoding/Builder.hs:113:1`) ← `Data.Aeson.Encoding.Builder.text` (109:1) ← `Data.Aeson.Encoding.Builder.object` (96:1) ← `Data.Aeson.Encoding.Builder.encodeToBuilder` (68:1) ← `Data.Aeson.Encoding.Internal.value` (`src/Data/Aeson/Encoding/Internal.hs:441:1`) ← `Main.toEncoding` (`Profile.hs:83:10`) ← `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`) ← `Main.roundTrip` (`Profile.hs:139:1`)                                                                                                                                                                                                                                                                                                 |
| removed | -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `Data.Scientific.normalize` (`src/Data/Scientific.hs:1102:1`) ← `Data.Scientific.toBoundedInteger` (772:1) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:96:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.roundTrip` (`Profile.hs:139:1`)                                                                                                                   |
|  -50.0% | -1.00ms | 0.1% → <0.1% |   2.0ms → 1.0ms |   2 → 1 | `Data.Scientific.normalize` (`src/Data/Scientific.hs:1102:1`) ← `Data.Scientific.toBoundedInteger` (772:1) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                           |
| removed | -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`) ← `Main.parseJSON` (`Profile.hs:96:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.roundTrip` (`Profile.hs:139:1`)                                                                                                                                                                                                                                                                                                                                  |
| removed | -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `Data.Aeson.KeyMap.fromList` (`src/Data/Aeson/KeyMap.hs:247:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.roundTrip` (`Profile.hs:139:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| removed | -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `Data.Aeson.Encoding.Builder.unquoted` (`src/Data/Aeson/Encoding/Builder.hs:113:1`) ← `Data.Aeson.Encoding.Builder.array` (86:1) ← `Data.Aeson.Encoding.Builder.text` (109:1) ← `Data.Aeson.Encoding.Builder.object` (96:1) ← `Data.Aeson.Encoding.Builder.encodeToBuilder` (68:1) ← `Data.Aeson.Encoding.Internal.value` (`src/Data/Aeson/Encoding/Internal.hs:441:1`) ← `Main.toEncoding` (`Profile.hs:83:10`) ← `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`) ← `Main.roundTrip` (`Profile.hs:139:1`)                                                                                                                                                                                                                                                    |
