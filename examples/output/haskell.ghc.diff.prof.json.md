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
└── 3.76s → 4.19s (100.0%) MAIN.MAIN
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
    │   │                   │       │   ├── 3.0ms → 5.0ms (0.1%) Utils.magnitude at src/Utils.hs:78:1
    │   │                   │       │   └── 2.0ms → 1.0ms (0.1% → <0.1%) Data.Scientific.normalize at 1102:1
    │   │                   │       ├── 6.0ms → 3.0ms (0.2% → 0.1%) Data.Aeson.Types.Internal.prependFailure at src/Data/Aeson/Types/Internal.hs:681:1
    │   │                   │       ├── 1.0ms → 4.0ms (<0.1% → 0.1%) Data.Aeson.Types.FromJSON.withText at 731:1
    │   │                   │       └── … 2.0ms → 1.0ms (0.1% → <0.1%) Data.Aeson.Types.FromJSON.parseIndexedJSON at src/Data/Aeson/Types/FromJSON.hs:171:1
    │   │                   └── 3.0ms → 5.0ms (0.1%) Data.Aeson.Types.FromJSON..:? at 859:1
    │   │                       └── 2.0ms → 4.0ms (0.1%) Data.Aeson.Types.FromJSON.explicitParseFieldMaybe at 923:1
    │   ├── 150.0ms → 154.0ms (4.0% → 3.7%, self 3.5% → 3.1%) Main.keywords at 136:1
    │   │   └── 20.0ms → 23.0ms (0.5%) Main.tally at 112:1
    │   ├── 36.0ms → 49.0ms (1.0% → 1.2%) Main.roundTrip at 139:1
    │   │   ├── 23.0ms → 33.0ms (0.6% → 0.8%) Data.Aeson.encode at src/Data/Aeson.hs:187:1
    │   │   │   └── … 20.0ms → 27.0ms (0.5% → 0.6%) Data.Aeson.Encoding.Builder.encodeToBuilder at src/Data/Aeson/Encoding/Builder.hs:68:1
    │   │   │       └── 19.0ms → 23.0ms (0.5%) Data.Aeson.Encoding.Builder.object at 96:1
    │   │   │           └── 2.0ms → 6.0ms (0.1%) Data.Aeson.Encoding.Builder.array at 86:1
    │   │   │               └── 1.0ms → 5.0ms (<0.1% → 0.1%) Data.Aeson.Encoding.Builder.text at 109:1
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
|  +22.2% |   +2.00ms |   0.2% → 0.3% |    9.0ms → 11.0ms |        9 → 11 | `PROFILING.OVERHEAD_of`                             | `<unknown>`                                       |
| +200.0% |   +2.00ms |  <0.1% → 0.1% |     1.0ms → 3.0ms |         1 → 3 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1`          |
|  +25.0% |   +2.00ms |          0.2% |    8.0ms → 10.0ms |        8 → 10 | `Data.Scientific.toBoundedInteger`                  | `src/Data/Scientific.hs:772:1`                    |
|  +66.7% |   +2.00ms |          0.1% |     3.0ms → 5.0ms |         3 → 5 | `Utils.magnitude`                                   | `src/Utils.hs:78:1`                               |
|  +50.0% |   +2.00ms |          0.1% |     4.0ms → 6.0ms |         4 → 6 | `Main.top`                                          | `Profile.hs:115:1`                                |
|     new |   +2.00ms |  0.0% → <0.1% |       0ms → 2.0ms |         0 → 2 | `Data.Aeson.encode`                                 | `src/Data/Aeson.hs:187:1`                         |

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
|  +25.0% |   +2.00ms |          0.2% |    8.0ms → 10.0ms |        8 → 10 | `Data.Scientific.toBoundedInteger`                  | `src/Data/Scientific.hs:772:1`                    |
|  +66.7% |   +2.00ms |          0.1% |     3.0ms → 5.0ms |         3 → 5 | `Utils.magnitude`                                   | `src/Utils.hs:78:1`                               |
|  +50.0% |   +2.00ms |          0.1% |     4.0ms → 6.0ms |         4 → 6 | `Main.top`                                          | `Profile.hs:115:1`                                |
|     new |   +2.00ms |  0.0% → <0.1% |       0ms → 2.0ms |         0 → 2 | `Data.Aeson.encode`                                 | `src/Data/Aeson.hs:187:1`                         |
|  +66.7% |   +2.00ms |          0.1% |     3.0ms → 5.0ms |         3 → 5 | `Data.Aeson.Encoding.Builder.object`                | `src/Data/Aeson/Encoding/Builder.hs:96:1`         |
|     new |   +2.00ms |  0.0% → <0.1% |       0ms → 2.0ms |         0 → 2 | `Data.Aeson.Encoding.Builder.encodeToBuilder`       | `src/Data/Aeson/Encoding/Builder.hs:68:1`         |

##### Garbage collector

| Change |    Delta |             % |          Time |       Samples | Function | Location    |
| -----: | -------: | ------------: | ------------: | ------------: | -------- | ----------- |
|  +4.7% | +54.00ms | 30.3% → 28.5% | 1.14s → 1.19s | 1,139 → 1,193 | `GC.GC`  | `<unknown>` |

#### Improvements

Functions with the largest decrease in wall time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |   Delta |            % |            Time | Samples | Function                                       | Location                                   |
| ------: | ------: | -----------: | --------------: | ------: | ---------------------------------------------- | ------------------------------------------ |
|  -54.5% | -6.00ms |  0.3% → 0.1% |  11.0ms → 5.0ms |  11 → 5 | `Data.Aeson.Types.FromJSON..:`                 | `src/Data/Aeson/Types/FromJSON.hs:849:1`   |
|  -33.3% | -4.00ms |  0.3% → 0.2% |  12.0ms → 8.0ms |  12 → 8 | `SYSTEM.SYSTEM`                                | `<unknown>`                                |
|  -19.0% | -4.00ms |  0.6% → 0.4% | 21.0ms → 17.0ms | 21 → 17 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1`   |
|  -25.0% | -4.00ms |  0.4% → 0.3% | 16.0ms → 12.0ms | 16 → 12 | `Data.Aeson.Types.FromJSON.withArray`          | `src/Data/Aeson/Types/FromJSON.hs:742:1`   |
|  -60.0% | -3.00ms | 0.1% → <0.1% |   5.0ms → 2.0ms |   5 → 2 | `Data.Aeson.Types.Internal.modifyFailure`      | `src/Data/Aeson/Types/Internal.hs:671:1`   |
|  -50.0% | -3.00ms |  0.2% → 0.1% |   6.0ms → 3.0ms |   6 → 3 | `Data.Aeson.Types.Internal.prependFailure`     | `src/Data/Aeson/Types/Internal.hs:681:1`   |
|  -66.7% | -2.00ms | 0.1% → <0.1% |   3.0ms → 1.0ms |   3 → 1 | `Data.Scientific.normalize`                    | `src/Data/Scientific.hs:1102:1`            |
|  -50.0% | -2.00ms | 0.1% → <0.1% |   4.0ms → 2.0ms |   4 → 2 | `Data.Aeson.Types.FromJSON.parseIndexedJSON`   | `src/Data/Aeson/Types/FromJSON.hs:171:1`   |
|  -40.0% | -2.00ms |         0.1% |   5.0ms → 3.0ms |   5 → 3 | `Data.Aeson.Encoding.Builder.unquoted`         | `src/Data/Aeson/Encoding/Builder.hs:113:1` |
|  -12.5% | -1.00ms |         0.2% |   8.0ms → 7.0ms |   8 → 7 | `Data.Aeson.Types.FromJSON.withObject`         | `src/Data/Aeson/Types/FromJSON.hs:720:1`   |
| removed | -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `Data.Aeson.KeyMap.toList`                     | `src/Data/Aeson/KeyMap.hs:253:1`           |
| removed | -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `Data.Aeson.Key.toText`                        | `src/Data/Aeson/Key.hs:57:1`               |

##### Ours

|  Change |   Delta |            % |            Time | Samples | Function                                       | Location                                   |
| ------: | ------: | -----------: | --------------: | ------: | ---------------------------------------------- | ------------------------------------------ |
|  -54.5% | -6.00ms |  0.3% → 0.1% |  11.0ms → 5.0ms |  11 → 5 | `Data.Aeson.Types.FromJSON..:`                 | `src/Data/Aeson/Types/FromJSON.hs:849:1`   |
|  -19.0% | -4.00ms |  0.6% → 0.4% | 21.0ms → 17.0ms | 21 → 17 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1`   |
|  -25.0% | -4.00ms |  0.4% → 0.3% | 16.0ms → 12.0ms | 16 → 12 | `Data.Aeson.Types.FromJSON.withArray`          | `src/Data/Aeson/Types/FromJSON.hs:742:1`   |
|  -60.0% | -3.00ms | 0.1% → <0.1% |   5.0ms → 2.0ms |   5 → 2 | `Data.Aeson.Types.Internal.modifyFailure`      | `src/Data/Aeson/Types/Internal.hs:671:1`   |
|  -50.0% | -3.00ms |  0.2% → 0.1% |   6.0ms → 3.0ms |   6 → 3 | `Data.Aeson.Types.Internal.prependFailure`     | `src/Data/Aeson/Types/Internal.hs:681:1`   |
|  -66.7% | -2.00ms | 0.1% → <0.1% |   3.0ms → 1.0ms |   3 → 1 | `Data.Scientific.normalize`                    | `src/Data/Scientific.hs:1102:1`            |
|  -50.0% | -2.00ms | 0.1% → <0.1% |   4.0ms → 2.0ms |   4 → 2 | `Data.Aeson.Types.FromJSON.parseIndexedJSON`   | `src/Data/Aeson/Types/FromJSON.hs:171:1`   |
|  -40.0% | -2.00ms |         0.1% |   5.0ms → 3.0ms |   5 → 3 | `Data.Aeson.Encoding.Builder.unquoted`         | `src/Data/Aeson/Encoding/Builder.hs:113:1` |
|  -12.5% | -1.00ms |         0.2% |   8.0ms → 7.0ms |   8 → 7 | `Data.Aeson.Types.FromJSON.withObject`         | `src/Data/Aeson/Types/FromJSON.hs:720:1`   |
| removed | -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `Data.Aeson.KeyMap.toList`                     | `src/Data/Aeson/KeyMap.hs:253:1`           |
| removed | -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `Data.Aeson.Key.toText`                        | `src/Data/Aeson/Key.hs:57:1`               |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)

| Change |     Delta |      % |          Time |       Samples | Caller                             | Location                          |
| -----: | --------: | -----: | ------------: | ------------: | ---------------------------------- | --------------------------------- |
| +17.6% | +237.00ms | 100.0% | 1.35s → 1.59s | 1,348 → 1,585 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

##### `GC.GC` (`<unknown>`)

| Change |    Delta |      % |          Time |       Samples | Caller      | Location    |
| -----: | -------: | -----: | ------------: | ------------: | ----------- | ----------- |
|  +4.7% | +54.00ms | 100.0% | 1.14s → 1.19s | 1,139 → 1,193 | `MAIN.MAIN` | `<unknown>` |

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

##### `Main.main` (`Profile.hs:146:1`)

|  Change |   Delta |      % |          Time | Samples | Caller      | Location    |
| ------: | ------: | -----: | ------------: | ------: | ----------- | ----------- |
| +125.0% | +5.00ms | 100.0% | 4.0ms → 9.0ms |   4 → 9 | `MAIN.MAIN` | `<unknown>` |

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

##### `PROFILING.OVERHEAD_of` (`<unknown>`)

| Change |   Delta |      % |           Time | Samples | Caller      | Location    |
| -----: | ------: | -----: | -------------: | ------: | ----------- | ----------- |
| +22.2% | +2.00ms | 100.0% | 9.0ms → 11.0ms |  9 → 11 | `MAIN.MAIN` | `<unknown>` |

##### `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` (`src/Data/Aeson/Types/FromJSON.hs:923:1`)

|  Change |   Delta |      % |          Time | Samples | Caller                          | Location                                 |
| ------: | ------: | -----: | ------------: | ------: | ------------------------------- | ---------------------------------------- |
| +200.0% | +2.00ms | 100.0% | 1.0ms → 3.0ms |   1 → 3 | `Data.Aeson.Types.FromJSON..:?` | `src/Data/Aeson/Types/FromJSON.hs:859:1` |

##### `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`)

| Change |   Delta |      % |           Time | Samples | Caller                                         | Location                                 |
| -----: | ------: | -----: | -------------: | ------: | ---------------------------------------------- | ---------------------------------------- |
| +25.0% | +2.00ms | 100.0% | 8.0ms → 10.0ms |  8 → 10 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Utils.magnitude` (`src/Utils.hs:78:1`)

| Change |   Delta |      % |          Time | Samples | Caller                             | Location                       |
| -----: | ------: | -----: | ------------: | ------: | ---------------------------------- | ------------------------------ |
| +66.7% | +2.00ms | 100.0% | 3.0ms → 5.0ms |   3 → 5 | `Data.Scientific.toBoundedInteger` | `src/Data/Scientific.hs:772:1` |

##### `Main.top` (`Profile.hs:115:1`)

| Change |   Delta |      % |          Time | Samples | Caller           | Location           |
| -----: | ------: | -----: | ------------: | ------: | ---------------- | ------------------ |
| +50.0% | +2.00ms | 100.0% | 4.0ms → 6.0ms |   4 → 6 | `Main.summarize` | `Profile.hs:118:1` |

##### `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`)

| Change |   Delta |             % |        Time | Samples | Caller           | Location           |
| -----: | ------: | ------------: | ----------: | ------: | ---------------- | ------------------ |
|    new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `Main.roundTrip` | `Profile.hs:139:1` |

##### `Data.Aeson.Encoding.Builder.object` (`src/Data/Aeson/Encoding/Builder.hs:96:1`)

| Change |   Delta |      % |          Time | Samples | Caller                                        | Location                                  |
| -----: | ------: | -----: | ------------: | ------: | --------------------------------------------- | ----------------------------------------- |
| +66.7% | +2.00ms | 100.0% | 3.0ms → 5.0ms |   3 → 5 | `Data.Aeson.Encoding.Builder.encodeToBuilder` | `src/Data/Aeson/Encoding/Builder.hs:68:1` |

##### `Data.Aeson.Encoding.Builder.encodeToBuilder` (`src/Data/Aeson/Encoding/Builder.hs:68:1`)

| Change |   Delta |             % |        Time | Samples | Caller                               | Location                                    |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------ | ------------------------------------------- |
|    new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `Data.Aeson.Encoding.Internal.value` | `src/Data/Aeson/Encoding/Internal.hs:441:1` |

##### `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`)

| Change |   Delta |      % |           Time | Samples | Caller                                 | Location                                 |
| -----: | ------: | -----: | -------------: | ------: | -------------------------------------- | ---------------------------------------- |
| -54.5% | -6.00ms | 100.0% | 11.0ms → 5.0ms |  11 → 5 | `Data.Aeson.Types.FromJSON.withObject` | `src/Data/Aeson/Types/FromJSON.hs:720:1` |

##### `SYSTEM.SYSTEM` (`<unknown>`)

| Change |   Delta |      % |           Time | Samples | Caller      | Location    |
| -----: | ------: | -----: | -------------: | ------: | ----------- | ----------- |
| -33.3% | -4.00ms | 100.0% | 12.0ms → 8.0ms |  12 → 8 | `MAIN.MAIN` | `<unknown>` |

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

##### `Data.Scientific.normalize` (`src/Data/Scientific.hs:1102:1`)

| Change |   Delta |      % |          Time | Samples | Caller                             | Location                       |
| -----: | ------: | -----: | ------------: | ------: | ---------------------------------- | ------------------------------ |
| -66.7% | -2.00ms | 100.0% | 3.0ms → 1.0ms |   3 → 1 | `Data.Scientific.toBoundedInteger` | `src/Data/Scientific.hs:772:1` |

##### `Data.Aeson.Types.FromJSON.parseIndexedJSON` (`src/Data/Aeson/Types/FromJSON.hs:171:1`)

| Change |   Delta |      % |          Time | Samples | Caller                                | Location                                 |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------- | ---------------------------------------- |
| -50.0% | -2.00ms | 100.0% | 4.0ms → 2.0ms |   4 → 2 | `Data.Aeson.Types.FromJSON.withArray` | `src/Data/Aeson/Types/FromJSON.hs:742:1` |

##### `Data.Aeson.Encoding.Builder.unquoted` (`src/Data/Aeson/Encoding/Builder.hs:113:1`)

|  Change |   Delta |              % |          Time | Samples | Caller                              | Location                                   |
| ------: | ------: | -------------: | ------------: | ------: | ----------------------------------- | ------------------------------------------ |
| removed | -1.00ms |   20.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `Data.Aeson.Encoding.Builder.array` | `src/Data/Aeson/Encoding/Builder.hs:86:1`  |
|  -25.0% | -1.00ms | 80.0% → 100.0% | 4.0ms → 3.0ms |   4 → 3 | `Data.Aeson.Encoding.Builder.text`  | `src/Data/Aeson/Encoding/Builder.hs:109:1` |

##### `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`)

|  Change |   Delta |            % |        Time | Samples | Caller           | Location          |
| ------: | ------: | -----------: | ----------: | ------: | ---------------- | ----------------- |
| removed | -1.00ms | 12.5% → 0.0% | 1.0ms → 0ms |   1 → 0 | `Main.parseJSON` | `Profile.hs:96:3` |

##### `Data.Aeson.KeyMap.toList` (`src/Data/Aeson/KeyMap.hs:253:1`)

|  Change |   Delta |             % |        Time | Samples | Caller                               | Location                                  |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------ | ----------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `Data.Aeson.Encoding.Builder.object` | `src/Data/Aeson/Encoding/Builder.hs:96:1` |

##### `Data.Aeson.Key.toText` (`src/Data/Aeson/Key.hs:57:1`)

|  Change |   Delta |             % |        Time | Samples | Caller                               | Location                                  |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------ | ----------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `Data.Aeson.Encoding.Builder.object` | `src/Data/Aeson/Encoding/Builder.hs:96:1` |

### Total time

#### Regressions

Functions with the largest increase in wall time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |     Delta |             % |              Time |       Samples | Function                                          | Location                                          |
| ------: | --------: | ------------: | ----------------: | ------------: | ------------------------------------------------- | ------------------------------------------------- |
|  +11.4% | +427.00ms |        100.0% |     3.76s → 4.19s | 3,759 → 4,186 | `MAIN.MAIN`                                       | `<unknown>`                                       |
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
|  +13.2% |   +9.00ms |          1.8% |   68.0ms → 77.0ms |       68 → 77 | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|  +32.1% |   +9.00ms |   0.7% → 0.9% |   28.0ms → 37.0ms |       28 → 37 | `Data.Aeson.Types.Internal.<?>`                   | `src/Data/Aeson/Types/Internal.hs:659:1`          |
|  +81.8% |   +9.00ms |   0.3% → 0.5% |   11.0ms → 20.0ms |       11 → 20 | `Data.Aeson.Types.FromJSON.withText`              | `src/Data/Aeson/Types/FromJSON.hs:731:1`          |
|  +34.8% |   +8.00ms |   0.6% → 0.7% |   23.0ms → 31.0ms |       23 → 31 | `Main.toEncoding`                                 | `Profile.hs:83:10`                                |
| +160.0% |   +8.00ms |   0.1% → 0.3% |    5.0ms → 13.0ms |        5 → 13 | `Data.Aeson.Encoding.Builder.array`               | `src/Data/Aeson/Encoding/Builder.hs:86:1`         |
|  +30.4% |   +7.00ms |   0.6% → 0.7% |   23.0ms → 30.0ms |       23 → 30 | `Main.tally`                                      | `Profile.hs:112:1`                                |
|  +35.0% |   +7.00ms |   0.5% → 0.6% |   20.0ms → 27.0ms |       20 → 27 | `Data.Aeson.Encoding.Builder.encodeToBuilder`     | `src/Data/Aeson/Encoding/Builder.hs:68:1`         |
|  +35.0% |   +7.00ms |   0.5% → 0.6% |   20.0ms → 27.0ms |       20 → 27 | `Data.Aeson.Encoding.Internal.value`              | `src/Data/Aeson/Encoding/Internal.hs:441:1`       |

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
|  +13.2% |   +9.00ms |          1.8% |   68.0ms → 77.0ms |       68 → 77 | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|  +32.1% |   +9.00ms |   0.7% → 0.9% |   28.0ms → 37.0ms |       28 → 37 | `Data.Aeson.Types.Internal.<?>`                   | `src/Data/Aeson/Types/Internal.hs:659:1`          |
|  +81.8% |   +9.00ms |   0.3% → 0.5% |   11.0ms → 20.0ms |       11 → 20 | `Data.Aeson.Types.FromJSON.withText`              | `src/Data/Aeson/Types/FromJSON.hs:731:1`          |
|  +34.8% |   +8.00ms |   0.6% → 0.7% |   23.0ms → 31.0ms |       23 → 31 | `Main.toEncoding`                                 | `Profile.hs:83:10`                                |
| +160.0% |   +8.00ms |   0.1% → 0.3% |    5.0ms → 13.0ms |        5 → 13 | `Data.Aeson.Encoding.Builder.array`               | `src/Data/Aeson/Encoding/Builder.hs:86:1`         |
|  +30.4% |   +7.00ms |   0.6% → 0.7% |   23.0ms → 30.0ms |       23 → 30 | `Main.tally`                                      | `Profile.hs:112:1`                                |
|  +35.0% |   +7.00ms |   0.5% → 0.6% |   20.0ms → 27.0ms |       20 → 27 | `Data.Aeson.Encoding.Builder.encodeToBuilder`     | `src/Data/Aeson/Encoding/Builder.hs:68:1`         |
|  +35.0% |   +7.00ms |   0.5% → 0.6% |   20.0ms → 27.0ms |       20 → 27 | `Data.Aeson.Encoding.Internal.value`              | `src/Data/Aeson/Encoding/Internal.hs:441:1`       |
|   +2.7% |   +4.00ms |   4.0% → 3.7% | 150.0ms → 154.0ms |     150 → 154 | `Main.keywords`                                   | `Profile.hs:136:1`                                |
|  +21.1% |   +4.00ms |          0.5% |   19.0ms → 23.0ms |       19 → 23 | `Data.Aeson.Encoding.Builder.object`              | `src/Data/Aeson/Encoding/Builder.hs:96:1`         |

##### Garbage collector

| Change |    Delta |             % |          Time |       Samples | Function | Location    |
| -----: | -------: | ------------: | ------------: | ------------: | -------- | ----------- |
|  +4.7% | +54.00ms | 30.3% → 28.5% | 1.14s → 1.19s | 1,139 → 1,193 | `GC.GC`  | `<unknown>` |

#### Improvements

Functions with the largest decrease in wall time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |   Delta |            % |              Time |   Samples | Function                                     | Location                                   |
| ------: | ------: | -----------: | ----------------: | --------: | -------------------------------------------- | ------------------------------------------ |
|  -30.0% | -6.00ms |  0.5% → 0.3% |   20.0ms → 14.0ms |   20 → 14 | `Data.Aeson.Types.FromJSON.withArray`        | `src/Data/Aeson/Types/FromJSON.hs:742:1`   |
|  -33.3% | -4.00ms |  0.3% → 0.2% |    12.0ms → 8.0ms |    12 → 8 | `SYSTEM.SYSTEM`                              | `<unknown>`                                |
|  -66.7% | -4.00ms | 0.2% → <0.1% |     6.0ms → 2.0ms |     6 → 2 | `Main.parseJSONList`                         | `Profile.hs:50:10`                         |
|  -30.8% | -4.00ms |  0.3% → 0.2% |    13.0ms → 9.0ms |    13 → 9 | `Data.Aeson.Types.Internal.prependFailure`   | `src/Data/Aeson/Types/Internal.hs:681:1`   |
|   -2.3% | -3.00ms |  3.5% → 3.1% | 133.0ms → 130.0ms | 133 → 130 | `Data.Aeson.Types.FromJSON..:`               | `src/Data/Aeson/Types/FromJSON.hs:849:1`   |
|   -1.4% | -2.00ms |  3.8% → 3.4% | 144.0ms → 142.0ms | 144 → 142 | `Data.Aeson.Types.FromJSON.withObject`       | `src/Data/Aeson/Types/FromJSON.hs:720:1`   |
|   -1.5% | -2.00ms |  3.6% → 3.2% | 137.0ms → 135.0ms | 137 → 135 | `Main.parseJSON`                             | `Profile.hs:48:3`                          |
|   -1.4% | -2.00ms |  3.8% → 3.4% | 144.0ms → 142.0ms | 144 → 142 | `Data.Aeson.Types.FromJSON.ifromJSON`        | `src/Data/Aeson/Types/FromJSON.hs:839:1`   |
|  -15.4% | -2.00ms |         0.3% |   13.0ms → 11.0ms |   13 → 11 | `Main.parseJSONList`                         | `Profile.hs:71:10`                         |
|  -66.7% | -2.00ms | 0.1% → <0.1% |     3.0ms → 1.0ms |     3 → 1 | `Data.Scientific.normalize`                  | `src/Data/Scientific.hs:1102:1`            |
|  -50.0% | -2.00ms | 0.1% → <0.1% |     4.0ms → 2.0ms |     4 → 2 | `Data.Aeson.Types.FromJSON.parseIndexedJSON` | `src/Data/Aeson/Types/FromJSON.hs:171:1`   |
|  -14.3% | -1.00ms |  0.2% → 0.1% |     7.0ms → 6.0ms |     7 → 6 | `Data.Aeson.Types.Internal.modifyFailure`    | `src/Data/Aeson/Types/Internal.hs:671:1`   |
|  -20.0% | -1.00ms |         0.1% |     5.0ms → 4.0ms |     5 → 4 | `Data.Aeson.Encoding.Builder.unquoted`       | `src/Data/Aeson/Encoding/Builder.hs:113:1` |
| removed | -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `Data.Aeson.KeyMap.toList`                   | `src/Data/Aeson/KeyMap.hs:253:1`           |
| removed | -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `Data.Aeson.Key.toText`                      | `src/Data/Aeson/Key.hs:57:1`               |

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
|  -15.4% | -2.00ms |         0.3% |   13.0ms → 11.0ms |   13 → 11 | `Main.parseJSONList`                         | `Profile.hs:71:10`                         |
|  -66.7% | -2.00ms | 0.1% → <0.1% |     3.0ms → 1.0ms |     3 → 1 | `Data.Scientific.normalize`                  | `src/Data/Scientific.hs:1102:1`            |
|  -50.0% | -2.00ms | 0.1% → <0.1% |     4.0ms → 2.0ms |     4 → 2 | `Data.Aeson.Types.FromJSON.parseIndexedJSON` | `src/Data/Aeson/Types/FromJSON.hs:171:1`   |
|  -14.3% | -1.00ms |  0.2% → 0.1% |     7.0ms → 6.0ms |     7 → 6 | `Data.Aeson.Types.Internal.modifyFailure`    | `src/Data/Aeson/Types/Internal.hs:671:1`   |
|  -20.0% | -1.00ms |         0.1% |     5.0ms → 4.0ms |     5 → 4 | `Data.Aeson.Encoding.Builder.unquoted`       | `src/Data/Aeson/Encoding/Builder.hs:113:1` |
| removed | -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `Data.Aeson.KeyMap.toList`                   | `src/Data/Aeson/KeyMap.hs:253:1`           |
| removed | -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `Data.Aeson.Key.toText`                      | `src/Data/Aeson/Key.hs:57:1`               |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Main.main` (`Profile.hs:146:1`)

| Change |     Delta |      % |          Time |       Samples | Caller      | Location    |
| -----: | --------: | -----: | ------------: | ------------: | ----------- | ----------- |
| +14.4% | +375.00ms | 100.0% | 2.60s → 2.97s | 2,599 → 2,974 | `MAIN.MAIN` | `<unknown>` |

##### `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)

| Change |     Delta |             % |            Time |       Samples | Caller           | Location           |
| -----: | --------: | ------------: | --------------: | ------------: | ---------------- | ------------------ |
| +14.3% | +341.00ms | 99.5% → 99.4% |   2.39s → 2.73s | 2,388 → 2,729 | `Main.main`      | `Profile.hs:146:1` |
| +23.1% |   +3.00ms |   0.5% → 0.6% | 13.0ms → 16.0ms |       13 → 16 | `Main.roundTrip` | `Profile.hs:139:1` |

##### `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)

| Change |     Delta |      % |          Time |       Samples | Caller                             | Location                          |
| -----: | --------: | -----: | ------------: | ------------: | ---------------------------------- | --------------------------------- |
| +18.0% | +290.00ms | 100.0% | 1.61s → 1.90s | 1,611 → 1,901 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

##### `GC.GC` (`<unknown>`)

| Change |    Delta |      % |          Time |       Samples | Caller      | Location    |
| -----: | -------: | -----: | ------------: | ------------: | ----------- | ----------- |
|  +4.7% | +54.00ms | 100.0% | 1.14s → 1.19s | 1,139 → 1,193 | `MAIN.MAIN` | `<unknown>` |

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

##### `Data.Integer.Conversion.byteStringToInteger` (`src/Data/Integer/Conversion.hs:104:1`)

| Change |   Delta |      % |            Time | Samples | Caller                                            | Location                                          |
| -----: | ------: | -----: | --------------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| +13.2% | +9.00ms | 100.0% | 68.0ms → 77.0ms | 68 → 77 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

##### `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`)

| Change |   Delta |      % |            Time | Samples | Caller                                         | Location                                 |
| -----: | ------: | -----: | --------------: | ------: | ---------------------------------------------- | ---------------------------------------- |
| +32.1% | +9.00ms | 100.0% | 28.0ms → 37.0ms | 28 → 37 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Data.Aeson.Types.FromJSON.withText` (`src/Data/Aeson/Types/FromJSON.hs:731:1`)

|  Change |   Delta |             % |           Time | Samples | Caller                                              | Location                                 |
| ------: | ------: | ------------: | -------------: | ------: | --------------------------------------------------- | ---------------------------------------- |
|  +83.3% | +5.00ms | 54.5% → 55.0% | 6.0ms → 11.0ms |  6 → 11 | `Data.Aeson.Types.Internal.<?>`                     | `src/Data/Aeson/Types/Internal.hs:659:1` |
| +300.0% | +3.00ms |  9.1% → 20.0% |  1.0ms → 4.0ms |   1 → 4 | `Data.Aeson.Types.FromJSON.explicitParseField`      | `src/Data/Aeson/Types/FromJSON.hs:917:1` |
| +200.0% | +2.00ms |  9.1% → 15.0% |  1.0ms → 3.0ms |   1 → 3 | `Data.Aeson.Types.Internal.modifyFailure`           | `src/Data/Aeson/Types/Internal.hs:671:1` |
|  -33.3% | -1.00ms | 27.3% → 10.0% |  3.0ms → 2.0ms |   3 → 2 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1` |

##### `Main.toEncoding` (`Profile.hs:83:10`)

| Change |   Delta |      % |            Time | Samples | Caller              | Location                  |
| -----: | ------: | -----: | --------------: | ------: | ------------------- | ------------------------- |
| +34.8% | +8.00ms | 100.0% | 23.0ms → 31.0ms | 23 → 31 | `Data.Aeson.encode` | `src/Data/Aeson.hs:187:1` |

##### `Data.Aeson.Encoding.Builder.array` (`src/Data/Aeson/Encoding/Builder.hs:86:1`)

|  Change |   Delta |             % |          Time | Samples | Caller                                        | Location                                   |
| ------: | ------: | ------------: | ------------: | ------: | --------------------------------------------- | ------------------------------------------ |
| +200.0% | +4.00ms | 40.0% → 46.2% | 2.0ms → 6.0ms |   2 → 6 | `Data.Aeson.Encoding.Builder.object`          | `src/Data/Aeson/Encoding/Builder.hs:96:1`  |
| +150.0% | +3.00ms | 40.0% → 38.5% | 2.0ms → 5.0ms |   2 → 5 | `Data.Aeson.Encoding.Builder.text`            | `src/Data/Aeson/Encoding/Builder.hs:109:1` |
| +100.0% | +1.00ms | 20.0% → 15.4% | 1.0ms → 2.0ms |   1 → 2 | `Data.Aeson.Encoding.Builder.encodeToBuilder` | `src/Data/Aeson/Encoding/Builder.hs:68:1`  |

##### `Main.tally` (`Profile.hs:112:1`)

|  Change |   Delta |             % |            Time | Samples | Caller           | Location           |
| ------: | ------: | ------------: | --------------: | ------: | ---------------- | ------------------ |
| +133.3% | +4.00ms | 13.0% → 23.3% |   3.0ms → 7.0ms |   3 → 7 | `Main.summarize` | `Profile.hs:118:1` |
|  +15.0% | +3.00ms | 87.0% → 76.7% | 20.0ms → 23.0ms | 20 → 23 | `Main.keywords`  | `Profile.hs:136:1` |

##### `Data.Aeson.Encoding.Builder.encodeToBuilder` (`src/Data/Aeson/Encoding/Builder.hs:68:1`)

| Change |   Delta |      % |            Time | Samples | Caller                               | Location                                    |
| -----: | ------: | -----: | --------------: | ------: | ------------------------------------ | ------------------------------------------- |
| +35.0% | +7.00ms | 100.0% | 20.0ms → 27.0ms | 20 → 27 | `Data.Aeson.Encoding.Internal.value` | `src/Data/Aeson/Encoding/Internal.hs:441:1` |

##### `Data.Aeson.Encoding.Internal.value` (`src/Data/Aeson/Encoding/Internal.hs:441:1`)

| Change |   Delta |      % |            Time | Samples | Caller            | Location           |
| -----: | ------: | -----: | --------------: | ------: | ----------------- | ------------------ |
| +35.0% | +7.00ms | 100.0% | 20.0ms → 27.0ms | 20 → 27 | `Main.toEncoding` | `Profile.hs:83:10` |

##### `Main.keywords` (`Profile.hs:136:1`)

| Change |   Delta |      % |              Time |   Samples | Caller      | Location           |
| -----: | ------: | -----: | ----------------: | --------: | ----------- | ------------------ |
|  +2.7% | +4.00ms | 100.0% | 150.0ms → 154.0ms | 150 → 154 | `Main.main` | `Profile.hs:146:1` |

##### `Data.Aeson.Encoding.Builder.object` (`src/Data/Aeson/Encoding/Builder.hs:96:1`)

| Change |   Delta |      % |            Time | Samples | Caller                                        | Location                                  |
| -----: | ------: | -----: | --------------: | ------: | --------------------------------------------- | ----------------------------------------- |
| +21.1% | +4.00ms | 100.0% | 19.0ms → 23.0ms | 19 → 23 | `Data.Aeson.Encoding.Builder.encodeToBuilder` | `src/Data/Aeson/Encoding/Builder.hs:68:1` |

##### `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`)

| Change |   Delta |             % |            Time | Samples | Caller               | Location           |
| -----: | ------: | ------------: | --------------: | ------: | -------------------- | ------------------ |
| -66.7% | -4.00ms | 30.0% → 14.3% |   6.0ms → 2.0ms |   6 → 2 | `Main.parseJSONList` | `Profile.hs:50:10` |
| -15.4% | -2.00ms | 65.0% → 78.6% | 13.0ms → 11.0ms | 13 → 11 | `Main.parseJSONList` | `Profile.hs:71:10` |

##### `SYSTEM.SYSTEM` (`<unknown>`)

| Change |   Delta |      % |           Time | Samples | Caller      | Location    |
| -----: | ------: | -----: | -------------: | ------: | ----------- | ----------- |
| -33.3% | -4.00ms | 100.0% | 12.0ms → 8.0ms |  12 → 8 | `MAIN.MAIN` | `<unknown>` |

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

##### `Data.Aeson.Types.FromJSON.parseIndexedJSON` (`src/Data/Aeson/Types/FromJSON.hs:171:1`)

| Change |   Delta |      % |          Time | Samples | Caller                                | Location                                 |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------- | ---------------------------------------- |
| -50.0% | -2.00ms | 100.0% | 4.0ms → 2.0ms |   4 → 2 | `Data.Aeson.Types.FromJSON.withArray` | `src/Data/Aeson/Types/FromJSON.hs:742:1` |

##### `Data.Aeson.Types.Internal.modifyFailure` (`src/Data/Aeson/Types/Internal.hs:671:1`)

| Change |   Delta |      % |          Time | Samples | Caller                                     | Location                                 |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------------ | ---------------------------------------- |
| -14.3% | -1.00ms | 100.0% | 7.0ms → 6.0ms |   7 → 6 | `Data.Aeson.Types.Internal.prependFailure` | `src/Data/Aeson/Types/Internal.hs:681:1` |

##### `Data.Aeson.Encoding.Builder.unquoted` (`src/Data/Aeson/Encoding/Builder.hs:113:1`)

|  Change |   Delta |            % |        Time | Samples | Caller                              | Location                                  |
| ------: | ------: | -----------: | ----------: | ------: | ----------------------------------- | ----------------------------------------- |
| removed | -1.00ms | 20.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `Data.Aeson.Encoding.Builder.array` | `src/Data/Aeson/Encoding/Builder.hs:86:1` |

##### `Data.Aeson.KeyMap.toList` (`src/Data/Aeson/KeyMap.hs:253:1`)

|  Change |   Delta |             % |        Time | Samples | Caller                               | Location                                  |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------ | ----------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `Data.Aeson.Encoding.Builder.object` | `src/Data/Aeson/Encoding/Builder.hs:96:1` |

##### `Data.Aeson.Key.toText` (`src/Data/Aeson/Key.hs:57:1`)

|  Change |   Delta |             % |        Time | Samples | Caller                               | Location                                  |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------ | ----------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `Data.Aeson.Encoding.Builder.object` | `src/Data/Aeson/Encoding/Builder.hs:96:1` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `MAIN.MAIN` (`<unknown>`)

| Change |     Delta |             % |           Time |       Samples | Callee                  | Location           |
| -----: | --------: | ------------: | -------------: | ------------: | ----------------------- | ------------------ |
| +14.4% | +375.00ms | 69.1% → 71.0% |  2.60s → 2.97s | 2,599 → 2,974 | `Main.main`             | `Profile.hs:146:1` |
|  +4.7% |  +54.00ms | 30.3% → 28.5% |  1.14s → 1.19s | 1,139 → 1,193 | `GC.GC`                 | `<unknown>`        |
| -33.3% |   -4.00ms |   0.3% → 0.2% | 12.0ms → 8.0ms |        12 → 8 | `SYSTEM.SYSTEM`         | `<unknown>`        |
| +22.2% |   +2.00ms |   0.2% → 0.3% | 9.0ms → 11.0ms |        9 → 11 | `PROFILING.OVERHEAD_of` | `<unknown>`        |

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

##### `Main.toEncoding` (`Profile.hs:83:10`)

| Change |   Delta |             % |            Time | Samples | Callee                               | Location                                    |
| -----: | ------: | ------------: | --------------: | ------: | ------------------------------------ | ------------------------------------------- |
| +35.0% | +7.00ms | 87.0% → 87.1% | 20.0ms → 27.0ms | 20 → 27 | `Data.Aeson.Encoding.Internal.value` | `src/Data/Aeson/Encoding/Internal.hs:441:1` |
| +33.3% | +1.00ms | 13.0% → 12.9% |   3.0ms → 4.0ms |   3 → 4 | `Main.toJSON`                        | `Profile.hs:84:3`                           |

##### `Data.Aeson.Encoding.Builder.array` (`src/Data/Aeson/Encoding/Builder.hs:86:1`)

|  Change |   Delta |             % |          Time | Samples | Callee                                   | Location                                   |
| ------: | ------: | ------------: | ------------: | ------: | ---------------------------------------- | ------------------------------------------ |
| +400.0% | +4.00ms | 20.0% → 38.5% | 1.0ms → 5.0ms |   1 → 5 | `Data.Aeson.Encoding.Builder.text`       | `src/Data/Aeson/Encoding/Builder.hs:109:1` |
| removed | -1.00ms |  20.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `Data.Aeson.Encoding.Builder.unquoted`   | `src/Data/Aeson/Encoding/Builder.hs:113:1` |
|     new | +1.00ms |   0.0% → 7.7% |   0ms → 1.0ms |   0 → 1 | `Data.Aeson.Encoding.Builder.scientific` | `src/Data/Aeson/Encoding/Builder.hs:144:1` |

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

##### `Data.Aeson.Encoding.Builder.object` (`src/Data/Aeson/Encoding/Builder.hs:96:1`)

|  Change |   Delta |             % |          Time | Samples | Callee                              | Location                                  |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------------- | ----------------------------------------- |
| +200.0% | +4.00ms | 10.5% → 26.1% | 2.0ms → 6.0ms |   2 → 6 | `Data.Aeson.Encoding.Builder.array` | `src/Data/Aeson/Encoding/Builder.hs:86:1` |
| removed | -1.00ms |   5.3% → 0.0% |   1.0ms → 0ms |   1 → 0 | `Data.Aeson.KeyMap.toList`          | `src/Data/Aeson/KeyMap.hs:253:1`          |
| removed | -1.00ms |   5.3% → 0.0% |   1.0ms → 0ms |   1 → 0 | `Data.Aeson.Key.toText`             | `src/Data/Aeson/Key.hs:57:1`              |

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

Common call stack: `MAIN.MAIN`

|  Change |     Delta |             % |              Time |       Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------: | --------: | ------------: | ----------------: | ------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +17.4% | +234.00ms | 35.8% → 37.7% |     1.34s → 1.58s | 1,344 → 1,578 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|   +4.7% |  +54.00ms | 30.3% → 28.5% |     1.14s → 1.19s | 1,139 → 1,193 | `GC.GC`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|   +7.5% |  +35.00ms | 12.4% → 12.0% | 467.0ms → 502.0ms |     467 → 502 | `Data.Aeson.KeyMap.fromList` (`src/Data/Aeson/KeyMap.hs:247:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  +25.6% |  +32.00ms |   3.3% → 3.8% | 125.0ms → 157.0ms |     125 → 157 | `Data.Aeson.Internal.Text.unsafeDecodeASCII` (`src/Data/Aeson/Internal/Text.hs:29:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  +12.4% |  +22.00ms |   4.7% → 4.8% | 177.0ms → 199.0ms |     177 → 199 | `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  +17.1% |  +12.00ms |   1.9% → 2.0% |   70.0ms → 82.0ms |       70 → 82 | `Data.Aeson.Internal.Unescape.unescapeText` (`src/Data/Aeson/Internal/Unescape.hs:34:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| +111.1% |  +10.00ms |   0.2% → 0.5% |    9.0ms → 19.0ms |        9 → 19 | `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                  |
|  +11.8% |   +8.00ms |          1.8% |   68.0ms → 76.0ms |       68 → 76 | `Data.Integer.Conversion.byteStringToInteger` (`src/Data/Integer/Conversion.hs:104:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  +42.9% |   +6.00ms |   0.4% → 0.5% |   14.0ms → 20.0ms |       14 → 20 | `Main.summarize` (`Profile.hs:118:1`) ← `Main.main` (146:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| +125.0% |   +5.00ms |   0.1% → 0.2% |     4.0ms → 9.0ms |         4 → 9 | `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  +13.2% |   +5.00ms |          1.0% |   38.0ms → 43.0ms |       38 → 43 | `Data.Aeson.KeyMap.lookup` (`src/Data/Aeson/KeyMap.hs:178:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                               |
| +166.7% |   +5.00ms |   0.1% → 0.2% |     3.0ms → 8.0ms |         3 → 8 | `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`) ← `Main.parseJSONList` (`Profile.hs:71:10`) ← `Data.Aeson.Types.FromJSON.withText` (`src/Data/Aeson/Types/FromJSON.hs:731:1`) ← `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`) |
| +133.3% |   +4.00ms |   0.1% → 0.2% |     3.0ms → 7.0ms |         3 → 7 | `Main.tally` (`Profile.hs:112:1`) ← `Main.summarize` (118:1) ← `Main.main` (146:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| +400.0% |   +4.00ms |  <0.1% → 0.1% |     1.0ms → 5.0ms |         1 → 5 | `Data.Aeson.Encoding.Builder.text` (`src/Data/Aeson/Encoding/Builder.hs:109:1`) ← `Data.Aeson.Encoding.Builder.array` (86:1) ← `Data.Aeson.Encoding.Builder.object` (96:1) ← `Data.Aeson.Encoding.Builder.encodeToBuilder` (68:1) ← `Data.Aeson.Encoding.Internal.value` (`src/Data/Aeson/Encoding/Internal.hs:441:1`) ← `Main.toEncoding` (`Profile.hs:83:10`) ← `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`) ← `Main.roundTrip` (`Profile.hs:139:1`) ← `Main.main` (146:1)                                                                                                                                                                                                                                                                                                                                         |
| +300.0% |   +3.00ms |  <0.1% → 0.1% |     1.0ms → 4.0ms |         1 → 4 | `Data.Aeson.Types.FromJSON.withText` (`src/Data/Aeson/Types/FromJSON.hs:731:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (917:1) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                |
|  +15.0% |   +3.00ms |          0.5% |   20.0ms → 23.0ms |       20 → 23 | `Main.tally` (`Profile.hs:112:1`) ← `Main.keywords` (136:1) ← `Main.main` (146:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  +75.0% |   +3.00ms |   0.1% → 0.2% |     4.0ms → 7.0ms |         4 → 7 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.roundTrip` (`Profile.hs:139:1`) ← `Main.main` (146:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| +300.0% |   +3.00ms |  <0.1% → 0.1% |     1.0ms → 4.0ms |         1 → 4 | `Data.Aeson.Encoding.Builder.array` (`src/Data/Aeson/Encoding/Builder.hs:86:1`) ← `Data.Aeson.Encoding.Builder.text` (109:1) ← `Data.Aeson.Encoding.Builder.object` (96:1) ← `Data.Aeson.Encoding.Builder.encodeToBuilder` (68:1) ← `Data.Aeson.Encoding.Internal.value` (`src/Data/Aeson/Encoding/Internal.hs:441:1`) ← `Main.toEncoding` (`Profile.hs:83:10`) ← `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`) ← `Main.roundTrip` (`Profile.hs:139:1`) ← `Main.main` (146:1)                                                                                                                                                                                                                                                                                                                                         |
|  +22.2% |   +2.00ms |   0.2% → 0.3% |    9.0ms → 11.0ms |        9 → 11 | `PROFILING.OVERHEAD_of`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  +66.7% |   +2.00ms |          0.1% |     3.0ms → 5.0ms |         3 → 5 | `Utils.magnitude` (`src/Utils.hs:78:1`) ← `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                               |

### Improvements

Call stacks with the largest decrease in wall time spent in their leaf frame.

Common call stack: `MAIN.MAIN`

|  Change |   Delta |            % |            Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------: | ------: | -----------: | --------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  -63.6% | -7.00ms |  0.3% → 0.1% |  11.0ms → 4.0ms |  11 → 4 | `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                 |
|  -33.3% | -4.00ms |  0.3% → 0.2% |  12.0ms → 8.0ms |  12 → 8 | `SYSTEM.SYSTEM`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  -21.1% | -4.00ms |  0.5% → 0.4% | 19.0ms → 15.0ms | 19 → 15 | `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                        |
|  -75.0% | -3.00ms | 0.1% → <0.1% |   4.0ms → 1.0ms |   4 → 1 | `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`) ← `Main.parseJSONList` (`Profile.hs:71:10`) ← `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                            |
|  -75.0% | -3.00ms | 0.1% → <0.1% |   4.0ms → 1.0ms |   4 → 1 | `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`) ← `Main.parseJSONList` (`Profile.hs:71:10`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                         |
|  -75.0% | -3.00ms | 0.1% → <0.1% |   4.0ms → 1.0ms |   4 → 1 | `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`) ← `Main.parseJSONList` (`Profile.hs:50:10`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                         |
|  -50.0% | -3.00ms |  0.2% → 0.1% |   6.0ms → 3.0ms |   6 → 3 | `Data.Aeson.Types.Internal.prependFailure` (`src/Data/Aeson/Types/Internal.hs:681:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                |
|  -50.0% | -3.00ms |  0.2% → 0.1% |   6.0ms → 3.0ms |   6 → 3 | `Data.Aeson.Encoding.Builder.text` (`src/Data/Aeson/Encoding/Builder.hs:109:1`) ← `Data.Aeson.Encoding.Builder.object` (96:1) ← `Data.Aeson.Encoding.Builder.encodeToBuilder` (68:1) ← `Data.Aeson.Encoding.Internal.value` (`src/Data/Aeson/Encoding/Internal.hs:441:1`) ← `Main.toEncoding` (`Profile.hs:83:10`) ← `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`) ← `Main.roundTrip` (`Profile.hs:139:1`) ← `Main.main` (146:1)                                                                                                                                                                                                                                                                                                                                                               |
| removed | -2.00ms |  0.1% → 0.0% |     2.0ms → 0ms |   2 → 0 | `Data.Aeson.Types.FromJSON.withText` (`src/Data/Aeson/Types/FromJSON.hs:731:1`) ← `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` (923:1) ← `Data.Aeson.Types.FromJSON..:?` (859:1) ← `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`) |
|  -50.0% | -2.00ms | 0.1% → <0.1% |   4.0ms → 2.0ms |   4 → 2 | `Data.Aeson.Types.Internal.modifyFailure` (`src/Data/Aeson/Types/Internal.hs:671:1`) ← `Data.Aeson.Types.Internal.prependFailure` (681:1) ← `Data.Aeson.Types.Internal.<?>` (659:1) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                  |
|  -66.7% | -2.00ms | 0.1% → <0.1% |   3.0ms → 1.0ms |   3 → 1 | `Data.Aeson.Types.FromJSON.withText` (`src/Data/Aeson/Types/FromJSON.hs:731:1`) ← `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                         |
|  -50.0% | -1.00ms | 0.1% → <0.1% |   2.0ms → 1.0ms |   2 → 1 | `Data.Scientific.normalize` (`src/Data/Scientific.hs:1102:1`) ← `Data.Scientific.toBoundedInteger` (772:1) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                           |
|  -50.0% | -1.00ms | 0.1% → <0.1% |   2.0ms → 1.0ms |   2 → 1 | `Data.Aeson.Types.FromJSON.parseIndexedJSON` (`src/Data/Aeson/Types/FromJSON.hs:171:1`) ← `Data.Aeson.Types.FromJSON.withArray` (742:1) ← `Main.parseJSONList` (`Profile.hs:71:10`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                  |
|  -50.0% | -1.00ms | 0.1% → <0.1% |   2.0ms → 1.0ms |   2 → 1 | `Data.Aeson.Types.FromJSON.parseIndexedJSON` (`src/Data/Aeson/Types/FromJSON.hs:171:1`) ← `Data.Aeson.Types.FromJSON.withArray` (742:1) ← `Main.parseJSONList` (`Profile.hs:50:10`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                  |
| removed | -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `Data.Aeson.KeyMap.lookup` (`src/Data/Aeson/KeyMap.hs:178:1`) ← `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` (`src/Data/Aeson/Types/FromJSON.hs:923:1`) ← `Data.Aeson.Types.FromJSON..:?` (859:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                  |
| removed | -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.roundTrip` (`Profile.hs:139:1`) ← `Main.main` (146:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| removed | -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`) ← `Main.parseJSON` (`Profile.hs:96:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.roundTrip` (`Profile.hs:139:1`) ← `Main.main` (146:1)                                                                                                                                                                                                                                                                                                                                               |
| removed | -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `Data.Aeson.Types.Internal.modifyFailure` (`src/Data/Aeson/Types/Internal.hs:671:1`) ← `Data.Aeson.Types.Internal.prependFailure` (681:1) ← `Data.Aeson.Types.Internal.<?>` (659:1) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:96:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.roundTrip` (`Profile.hs:139:1`) ← `Main.main` (146:1)                                                       |
| removed | -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `Data.Aeson.KeyMap.lookup` (`src/Data/Aeson/KeyMap.hs:178:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:96:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.roundTrip` (`Profile.hs:139:1`) ← `Main.main` (146:1)                                                                                                                                                                             |
| removed | -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `Data.Scientific.normalize` (`src/Data/Scientific.hs:1102:1`) ← `Data.Scientific.toBoundedInteger` (772:1) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:96:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.roundTrip` (`Profile.hs:139:1`) ← `Main.main` (146:1)                                                                                                                                |

# Allocated heap and entries profile diff

Allocated 10.1 GiB → 11.1 GiB (+1.008 GiB, +10.0%) and recorded 18,616,855 → 20,478,505 entries (+1,861,650 entries, +10.0%).

| Category          | Change |      Delta |     % |                Size |                 Entries |
| ----------------- | -----: | ---------: | ----: | ------------------: | ----------------------: |
| Ours              | +10.0% | +1.005 GiB | 99.7% | 10.1 GiB → 11.1 GiB | 18,616,855 → 20,478,505 |
| Native            | +10.0% | +2.871 MiB |  0.3% | 28.8 MiB → 31.7 MiB |                       0 |
| Garbage collector |   0.0% |        0 B | <0.1% |            1.07 KiB |                       0 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
└── 10.1 GiB → 11.1 GiB (100.0%) MAIN.MAIN
    ├── 10.1 GiB → 11.1 GiB (99.7%) Main.main at Profile.hs:146:1
    │   ├── 9.38 GiB → 10.3 GiB (93.0%) Data.Aeson.Decoding.eitherDecode at src/Data/Aeson/Decoding.hs:79:1
    │   │   ├── 6.79 GiB → 7.47 GiB (67.3%, self 59.3%) Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens at src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1
    │   │   │   ├── 545 MiB → 599 MiB (5.3%) Data.Aeson.Internal.Text.unsafeDecodeASCII at src/Data/Aeson/Internal/Text.hs:29:1
    │   │   │   ├── 182 MiB → 200 MiB (1.8%) Data.Integer.Conversion.byteStringToInteger at src/Data/Integer/Conversion.hs:104:1
    │   │   │   └── 95.9 MiB → 105 MiB (0.9%) Data.Aeson.Internal.Unescape.unescapeText at src/Data/Aeson/Internal/Unescape.hs:34:1
    │   │   └── 2.59 GiB → 2.85 GiB (25.7%, self 8.3%) Data.Aeson.Decoding.Conversion.toResultValue at src/Data/Aeson/Decoding/Conversion.hs:51:1
    │   │       ├── 1.54 GiB → 1.69 GiB (15.2%) Data.Aeson.KeyMap.fromList at src/Data/Aeson/KeyMap.hs:247:1
    │   │       └── 227 MiB → 249 MiB (2.2%) Data.Aeson.Types.FromJSON.ifromJSON at src/Data/Aeson/Types/FromJSON.hs:839:1
    │   │           └── 227 MiB → 249 MiB (2.2%) Main.parseJSON at Profile.hs:48:3
    │   │               └── 227 MiB → 249 MiB (2.2%) Data.Aeson.Types.FromJSON.withObject at src/Data/Aeson/Types/FromJSON.hs:720:1
    │   │                   ├── 198 MiB → 218 MiB (1.9%) Data.Aeson.Types.FromJSON..: at 849:1
    │   │                   │   └── 180 MiB → 198 MiB (1.7%) Data.Aeson.Types.FromJSON.explicitParseField at 917:1
    │   │                   │       ├── 75.4 MiB → 83 MiB (0.7%) Data.Aeson.Types.Internal.<?> at src/Data/Aeson/Types/Internal.hs:659:1
    │   │                   │       │   ├── 18.8 MiB → 20.7 MiB (0.2%) Data.Aeson.Types.FromJSON.withText at src/Data/Aeson/Types/FromJSON.hs:731:1
    │   │                   │       │   └── 17.2 MiB → 18.9 MiB (0.2%) Data.Aeson.Types.Internal.prependFailure at 681:1
    │   │                   │       │       └── 17.2 MiB → 18.9 MiB (0.2%) Data.Aeson.Types.Internal.modifyFailure at 671:1
    │   │                   │       │           └── 6.87 MiB → 7.55 MiB (0.1%) Data.Aeson.Types.FromJSON..:? at src/Data/Aeson/Types/FromJSON.hs:859:1
    │   │                   │       │               └── 6.87 MiB → 7.55 MiB (0.1%) Data.Aeson.Types.FromJSON.explicitParseFieldMaybe at 923:1
    │   │                   │       ├── 22.5 MiB → 24.7 MiB (0.2%) Data.Scientific.toBoundedInteger at src/Data/Scientific.hs:772:1
    │   │                   │       │   └── 7.69 MiB → 8.46 MiB (0.1%) Data.Scientific.normalize at 1102:1
    │   │                   │       ├── 11.4 MiB → 12.5 MiB (0.1%) Main.parseJSONList at Profile.hs:71:10
    │   │                   │       │   └── 11.4 MiB → 12.5 MiB (0.1%) Data.Aeson.Types.FromJSON.withArray at src/Data/Aeson/Types/FromJSON.hs:742:1
    │   │                   │       └── 8.36 MiB → 9.2 MiB (0.1%) Data.Aeson.KeyMap.lookup at src/Data/Aeson/KeyMap.hs:178:1
    │   │                   └── 7.25 MiB → 7.97 MiB (0.1%) Data.Aeson.Types.FromJSON..:? at 859:1
    │   ├── 526 MiB → 578 MiB (5.1%, self 4.4%) Main.keywords at 136:1
    │   │   └── 66.6 MiB → 73.2 MiB (0.6%) Main.tally at 112:1
    │   ├── 103 MiB → 113 MiB (1.0%) Main.roundTrip at 139:1
    │   │   ├── 52.2 MiB → 57.4 MiB (0.5%) Data.Aeson.Decoding.eitherDecode at src/Data/Aeson/Decoding.hs:79:1
    │   │   │   └── 28.2 MiB → 31 MiB (0.3%) Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens at src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1
    │   │   └── 50.5 MiB → 55.5 MiB (0.5%) Data.Aeson.encode at src/Data/Aeson.hs:187:1
    │   │       └── 47.8 MiB → 52.6 MiB (0.5%) Main.toEncoding at Profile.hs:83:10
    │   │           ├── … 37.8 MiB → 41.6 MiB (0.4%) Data.Aeson.Encoding.Builder.object at src/Data/Aeson/Encoding/Builder.hs:96:1
    │   │           │   ├── 18 MiB → 19.8 MiB (0.2%) Data.Aeson.Encoding.Builder.text at 109:1
    │   │           │   └── 11.9 MiB → 13.1 MiB (0.1%) Data.Aeson.Encoding.Builder.array at 86:1
    │   │           └── 7.51 MiB → 8.26 MiB (0.1%) Main.toJSON at 84:3
    │   └── 67.3 MiB → 74.1 MiB (0.7%) Main.summarize at 118:1
    │       └── 18.4 MiB → 20.2 MiB (0.2%) Main.top at 115:1
    └── 28.7 MiB → 31.6 MiB (0.3%) PROFILING.OVERHEAD_of
```

## Allocated heap

### Hottest functions

#### Self size

##### Regressions

Functions with the largest increase in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

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

Functions with the largest increase in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

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

##### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

###### `Main.main` (`Profile.hs:146:1`)

| Change |      Delta |      % |                Size | Caller      | Location    |
| -----: | ---------: | -----: | ------------------: | ----------- | ----------- |
| +10.0% | +1.005 GiB | 100.0% | 10.1 GiB → 11.1 GiB | `MAIN.MAIN` | `<unknown>` |

###### `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)

| Change |        Delta |     % |                Size | Caller           | Location           |
| -----: | -----------: | ----: | ------------------: | ---------------- | ------------------ |
| +10.0% | +960.385 MiB | 99.5% | 9.38 GiB → 10.3 GiB | `Main.main`      | `Profile.hs:146:1` |
| +10.0% |    +5.22 MiB |  0.5% | 52.2 MiB → 57.4 MiB | `Main.roundTrip` | `Profile.hs:139:1` |

###### `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)

| Change |        Delta |      % |               Size | Caller                             | Location                          |
| -----: | -----------: | -----: | -----------------: | ---------------------------------- | --------------------------------- |
| +10.0% | +698.119 MiB | 100.0% | 6.82 GiB → 7.5 GiB | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

###### `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)

| Change |        Delta |      % |                Size | Caller                             | Location                          |
| -----: | -----------: | -----: | ------------------: | ---------------------------------- | --------------------------------- |
| +10.0% | +267.484 MiB | 100.0% | 2.61 GiB → 2.87 GiB | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

###### `Data.Aeson.KeyMap.fromList` (`src/Data/Aeson/KeyMap.hs:247:1`)

| Change |        Delta |     % |                Size | Caller                                         | Location                                     |
| -----: | -----------: | ----: | ------------------: | ---------------------------------------------- | -------------------------------------------- |
| +10.0% | +157.429 MiB | 99.9% | 1.54 GiB → 1.69 GiB | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |
| +10.0% |     +225 KiB |  0.1% |  2.2 MiB → 2.42 MiB | `Main.toJSON`                                  | `Profile.hs:84:3`                            |

###### `Data.Aeson.Internal.Text.unsafeDecodeASCII` (`src/Data/Aeson/Internal/Text.hs:29:1`)

| Change |       Delta |      % |              Size | Caller                                            | Location                                          |
| -----: | ----------: | -----: | ----------------: | ------------------------------------------------- | ------------------------------------------------- |
| +10.0% | +54.694 MiB | 100.0% | 547 MiB → 602 MiB | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

###### `Main.keywords` (`Profile.hs:136:1`)

| Change |       Delta |      % |              Size | Caller      | Location           |
| -----: | ----------: | -----: | ----------------: | ----------- | ------------------ |
| +10.0% | +52.585 MiB | 100.0% | 526 MiB → 578 MiB | `Main.main` | `Profile.hs:146:1` |

###### `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`)

| Change |       Delta |      % |              Size | Caller                                         | Location                                     |
| -----: | ----------: | -----: | ----------------: | ---------------------------------------------- | -------------------------------------------- |
| +10.0% | +24.192 MiB | 100.0% | 242 MiB → 266 MiB | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |

###### `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`)

| Change |      Delta |     % |                Size | Caller           | Location          |
| -----: | ---------: | ----: | ------------------: | ---------------- | ----------------- |
| +10.0% | +22.67 MiB | 93.7% |   227 MiB → 249 MiB | `Main.parseJSON` | `Profile.hs:48:3` |
| +10.0% | +1.519 MiB |  6.3% | 15.2 MiB → 16.7 MiB | `Main.parseJSON` | `Profile.hs:96:3` |

###### `Main.parseJSON` (`Profile.hs:48:3`)

| Change |      Delta |      % |              Size | Caller                                | Location                                 |
| -----: | ---------: | -----: | ----------------: | ------------------------------------- | ---------------------------------------- |
| +10.0% | +22.67 MiB | 100.0% | 227 MiB → 249 MiB | `Data.Aeson.Types.FromJSON.ifromJSON` | `src/Data/Aeson/Types/FromJSON.hs:839:1` |

###### `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`)

| Change |       Delta |      % |              Size | Caller                                 | Location                                 |
| -----: | ----------: | -----: | ----------------: | -------------------------------------- | ---------------------------------------- |
| +10.0% | +21.232 MiB | 100.0% | 212 MiB → 234 MiB | `Data.Aeson.Types.FromJSON.withObject` | `src/Data/Aeson/Types/FromJSON.hs:720:1` |

###### `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`)

| Change |       Delta |      % |              Size | Caller                         | Location                                 |
| -----: | ----------: | -----: | ----------------: | ------------------------------ | ---------------------------------------- |
| +10.0% | +19.331 MiB | 100.0% | 193 MiB → 213 MiB | `Data.Aeson.Types.FromJSON..:` | `src/Data/Aeson/Types/FromJSON.hs:849:1` |

###### `Data.Integer.Conversion.byteStringToInteger` (`src/Data/Integer/Conversion.hs:104:1`)

| Change |       Delta |      % |              Size | Caller                                            | Location                                          |
| -----: | ----------: | -----: | ----------------: | ------------------------------------------------- | ------------------------------------------------- |
| +10.0% | +18.255 MiB | 100.0% | 183 MiB → 201 MiB | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

###### `Main.roundTrip` (`Profile.hs:139:1`)

| Change |       Delta |      % |              Size | Caller      | Location           |
| -----: | ----------: | -----: | ----------------: | ----------- | ------------------ |
| +10.0% | +10.267 MiB | 100.0% | 103 MiB → 113 MiB | `Main.main` | `Profile.hs:146:1` |

###### `Data.Aeson.Internal.Unescape.unescapeText` (`src/Data/Aeson/Internal/Unescape.hs:34:1`)

| Change |      Delta |      % |               Size | Caller                                            | Location                                          |
| -----: | ---------: | -----: | -----------------: | ------------------------------------------------- | ------------------------------------------------- |
| +10.0% | +9.622 MiB | 100.0% | 96.2 MiB → 106 MiB | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

###### `Main.tally` (`Profile.hs:112:1`)

| Change |      Delta |     % |                Size | Caller           | Location           |
| -----: | ---------: | ----: | ------------------: | ---------------- | ------------------ |
| +10.0% | +6.655 MiB | 81.4% | 66.6 MiB → 73.2 MiB | `Main.keywords`  | `Profile.hs:136:1` |
| +10.0% | +1.516 MiB | 18.6% | 15.2 MiB → 16.7 MiB | `Main.summarize` | `Profile.hs:118:1` |

###### `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`)

| Change |      Delta |      % |                Size | Caller                                         | Location                                 |
| -----: | ---------: | -----: | ------------------: | ---------------------------------------------- | ---------------------------------------- |
| +10.0% | +7.976 MiB | 100.0% | 79.8 MiB → 87.7 MiB | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

###### `Main.summarize` (`Profile.hs:118:1`)

| Change |      Delta |      % |                Size | Caller      | Location           |
| -----: | ---------: | -----: | ------------------: | ----------- | ------------------ |
| +10.0% | +6.732 MiB | 100.0% | 67.3 MiB → 74.1 MiB | `Main.main` | `Profile.hs:146:1` |

###### `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`)

| Change |      Delta |      % |                Size | Caller           | Location           |
| -----: | ---------: | -----: | ------------------: | ---------------- | ------------------ |
| +10.0% | +5.045 MiB | 100.0% | 50.5 MiB → 55.5 MiB | `Main.roundTrip` | `Profile.hs:139:1` |

###### `Main.toEncoding` (`Profile.hs:83:10`)

| Change |      Delta |      % |                Size | Caller              | Location                  |
| -----: | ---------: | -----: | ------------------: | ------------------- | ------------------------- |
| +10.0% | +4.779 MiB | 100.0% | 47.8 MiB → 52.6 MiB | `Data.Aeson.encode` | `src/Data/Aeson.hs:187:1` |

##### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

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

### Hottest call stacks

#### Regressions

Call stacks with the largest increase in bytes allocated in their leaf frame.

Common call stack: `MAIN.MAIN`

| Change |        Delta |     % |                Size | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -----: | -----------: | ----: | ------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +10.0% | +613.089 MiB | 59.3% | 5.99 GiB → 6.58 GiB | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| +10.0% | +157.196 MiB | 15.2% | 1.54 GiB → 1.69 GiB | `Data.Aeson.KeyMap.fromList` (`src/Data/Aeson/KeyMap.hs:247:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| +10.0% |  +85.217 MiB |  8.3% |   852 MiB → 937 MiB | `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| +10.0% |  +54.457 MiB |  5.3% |   545 MiB → 599 MiB | `Data.Aeson.Internal.Text.unsafeDecodeASCII` (`src/Data/Aeson/Internal/Text.hs:29:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| +10.0% |  +45.929 MiB |  4.4% |   459 MiB → 505 MiB | `Main.keywords` (`Profile.hs:136:1`) ← `Main.main` (146:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| +10.0% |  +18.161 MiB |  1.8% |   182 MiB → 200 MiB | `Data.Integer.Conversion.byteStringToInteger` (`src/Data/Integer/Conversion.hs:104:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| +10.0% |   +9.585 MiB |  0.9% |  95.9 MiB → 105 MiB | `Data.Aeson.Internal.Unescape.unescapeText` (`src/Data/Aeson/Internal/Unescape.hs:34:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| +10.0% |   +6.655 MiB |  0.6% | 66.6 MiB → 73.2 MiB | `Main.tally` (`Profile.hs:112:1`) ← `Main.keywords` (136:1) ← `Main.main` (146:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| +10.0% |   +4.691 MiB |  0.5% | 46.9 MiB → 51.6 MiB | `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                               |
| +10.0% |    +3.38 MiB |  0.3% | 33.8 MiB → 37.2 MiB | `Main.summarize` (`Profile.hs:118:1`) ← `Main.main` (146:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| +10.0% |   +2.871 MiB |  0.3% | 28.7 MiB → 31.6 MiB | `PROFILING.OVERHEAD_of`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| +10.0% |   +2.816 MiB |  0.3% |   28.2 MiB → 31 MiB | `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                  |
| +10.0% |   +2.452 MiB |  0.2% |   24.5 MiB → 27 MiB | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.roundTrip` (`Profile.hs:139:1`) ← `Main.main` (146:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| +10.0% |   +2.121 MiB |  0.2% | 21.2 MiB → 23.3 MiB | `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                                                                                 |
| +10.0% |   +1.835 MiB |  0.2% | 18.4 MiB → 20.2 MiB | `Main.top` (`Profile.hs:115:1`) ← `Main.summarize` (118:1) ← `Main.main` (146:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| +10.0% |   +1.805 MiB |  0.2% | 18.1 MiB → 19.9 MiB | `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                                                                                                                                                        |
| +10.0% |   +1.516 MiB |  0.1% | 15.2 MiB → 16.7 MiB | `Main.tally` (`Profile.hs:112:1`) ← `Main.summarize` (118:1) ← `Main.main` (146:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| +10.0% |   +1.164 MiB |  0.1% | 11.6 MiB → 12.8 MiB | `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                                                                         |
| +10.0% |   +1.069 MiB |  0.1% | 10.7 MiB → 11.8 MiB | `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`) ← `Main.parseJSONList` (`Profile.hs:71:10`) ← `Data.Aeson.Types.FromJSON.withText` (`src/Data/Aeson/Types/FromJSON.hs:731:1`) ← `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`) |
| +10.0% | +980.468 KiB |  0.1% | 9.57 MiB → 10.5 MiB | `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`) ← `Main.parseJSONList` (`Profile.hs:71:10`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`)                                                                                                                                                                |

## Entries

### Hottest functions

#### Self entries

##### Regressions

Functions with the largest increase in entries recorded within the function body, excluding callees. Categories account for at least 1.0% of self entries on the base or the current side.

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

Functions with the largest increase in entries recorded within the function and its callees. Categories account for at least 1.0% of self entries on the base or the current side.

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

##### Callers

Callers with the largest change in contribution to each function's total entries. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

###### `Main.main` (`Profile.hs:146:1`)

| Change |      Delta |      % |                 Entries | Caller      | Location    |
| -----: | ---------: | -----: | ----------------------: | ----------- | ----------- |
| +10.0% | +1,861,650 | 100.0% | 18,616,500 → 20,478,150 | `MAIN.MAIN` | `<unknown>` |

###### `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)

| Change |      Delta |     % |                 Entries | Caller           | Location           |
| -----: | ---------: | ----: | ----------------------: | ---------------- | ------------------ |
| +10.0% | +1,736,850 | 97.6% | 17,368,500 → 19,105,350 | `Main.main`      | `Profile.hs:146:1` |
| +10.0% |    +42,200 |  2.4% |       422,000 → 464,200 | `Main.roundTrip` | `Profile.hs:139:1` |

###### `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)

| Change |    Delta |      % |                Entries | Caller                             | Location                          |
| -----: | -------: | -----: | ---------------------: | ---------------------------------- | --------------------------------- |
| +10.0% | +952,950 | 100.0% | 9,529,500 → 10,482,450 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

###### `Data.Aeson.Internal.Text.unsafeDecodeASCII` (`src/Data/Aeson/Internal/Text.hs:29:1`)

| Change |    Delta |      % |               Entries | Caller                                            | Location                                          |
| -----: | -------: | -----: | --------------------: | ------------------------------------------------- | ------------------------------------------------- |
| +10.0% | +868,850 | 100.0% | 8,688,500 → 9,557,350 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

###### `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)

| Change |    Delta |      % |               Entries | Caller                             | Location                          |
| -----: | -------: | -----: | --------------------: | ---------------------------------- | --------------------------------- |
| +10.0% | +825,900 | 100.0% | 8,259,000 → 9,084,900 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

###### `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`)

| Change |    Delta |      % |               Entries | Caller                                         | Location                                     |
| -----: | -------: | -----: | --------------------: | ---------------------------------------------- | -------------------------------------------- |
| +10.0% | +502,600 | 100.0% | 5,026,000 → 5,528,600 | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |

###### `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`)

| Change |    Delta |     % |               Entries | Caller           | Location          |
| -----: | -------: | ----: | --------------------: | ---------------- | ----------------- |
| +10.0% | +470,250 | 93.6% | 4,702,500 → 5,172,750 | `Main.parseJSON` | `Profile.hs:48:3` |
| +10.0% |  +32,250 |  6.4% |     322,500 → 354,750 | `Main.parseJSON` | `Profile.hs:96:3` |

###### `Main.parseJSON` (`Profile.hs:48:3`)

| Change |    Delta |      % |               Entries | Caller                                | Location                                 |
| -----: | -------: | -----: | --------------------: | ------------------------------------- | ---------------------------------------- |
| +10.0% | +470,250 | 100.0% | 4,702,500 → 5,172,750 | `Data.Aeson.Types.FromJSON.ifromJSON` | `src/Data/Aeson/Types/FromJSON.hs:839:1` |

###### `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`)

| Change |    Delta |      % |               Entries | Caller                                 | Location                                 |
| -----: | -------: | -----: | --------------------: | -------------------------------------- | ---------------------------------------- |
| +10.0% | +456,200 | 100.0% | 4,562,000 → 5,018,200 | `Data.Aeson.Types.FromJSON.withObject` | `src/Data/Aeson/Types/FromJSON.hs:720:1` |

###### `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`)

| Change |    Delta |      % |               Entries | Caller                         | Location                                 |
| -----: | -------: | -----: | --------------------: | ------------------------------ | ---------------------------------------- |
| +10.0% | +393,900 | 100.0% | 3,939,000 → 4,332,900 | `Data.Aeson.Types.FromJSON..:` | `src/Data/Aeson/Types/FromJSON.hs:849:1` |

###### `Data.Vector.Fusion.Util.unId` (`src/Data/Vector/Fusion/Util.hs:25:21`)

| Change |   Delta |     % |           Entries | Caller                                         | Location                                     |
| -----: | ------: | ----: | ----------------: | ---------------------------------------------- | -------------------------------------------- |
| +10.0% | +82,550 | 77.7% | 825,500 → 908,050 | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |
| +10.0% | +21,450 | 20.2% | 214,500 → 235,950 | `Data.Aeson.Types.FromJSON.withArray`          | `src/Data/Aeson/Types/FromJSON.hs:742:1`     |
| +10.0% |  +1,650 |  1.6% |   16,500 → 18,150 | `Main.toJSON`                                  | `Profile.hs:84:3`                            |
| +10.0% |    +600 |  0.6% |     6,000 → 6,600 | `Data.Aeson.Encoding.Builder.array`            | `src/Data/Aeson/Encoding/Builder.hs:86:1`    |

###### `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`)

| Change |    Delta |      % |               Entries | Caller                                         | Location                                 |
| -----: | -------: | -----: | --------------------: | ---------------------------------------------- | ---------------------------------------- |
| +10.0% | +103,600 | 100.0% | 1,036,000 → 1,139,600 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

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
| +10.0% | +62,700 | 79.5% | 627,000 → 689,700 | `Data.Aeson.Types.FromJSON.explicitParseField`      | `src/Data/Aeson/Types/FromJSON.hs:917:1` |
| +10.0% | +11,200 | 14.2% | 112,000 → 123,200 | `Data.Aeson.Types.FromJSON.parseIndexedJSON`        | `src/Data/Aeson/Types/FromJSON.hs:171:1` |
| +10.0% |  +5,000 |  6.3% |   50,000 → 55,000 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1` |

###### `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`)

| Change |   Delta |     % |           Entries | Caller               | Location            |
| -----: | ------: | ----: | ----------------: | -------------------- | ------------------- |
| +10.0% | +43,750 | 62.5% | 437,500 → 481,250 | `Main.parseJSONList` | `Profile.hs:71:10`  |
| +10.0% | +20,100 | 28.7% | 201,000 → 221,100 | `Main.parseJSONList` | `Profile.hs:50:10`  |
| +10.0% |  +6,200 |  8.9% |   62,000 → 68,200 | `Main.parseJSONList` | `Profile.hs:108:10` |

###### `Data.Aeson.KeyMap.lookup` (`src/Data/Aeson/KeyMap.hs:178:1`)

| Change |   Delta |     % |           Entries | Caller                                              | Location                                 |
| -----: | ------: | ----: | ----------------: | --------------------------------------------------- | ---------------------------------------- |
| +10.0% | +62,300 | 92.6% | 623,000 → 685,300 | `Data.Aeson.Types.FromJSON.explicitParseField`      | `src/Data/Aeson/Types/FromJSON.hs:917:1` |
| +10.0% |  +5,000 |  7.4% |   50,000 → 55,000 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1` |

###### `Main.roundTrip` (`Profile.hs:139:1`)

| Change |   Delta |      % |           Entries | Caller      | Location           |
| -----: | ------: | -----: | ----------------: | ----------- | ------------------ |
| +10.0% | +64,350 | 100.0% | 643,500 → 707,850 | `Main.main` | `Profile.hs:146:1` |

###### `Main.summarize` (`Profile.hs:118:1`)

| Change |   Delta |      % |           Entries | Caller      | Location           |
| -----: | ------: | -----: | ----------------: | ----------- | ------------------ |
| +10.0% | +55,250 | 100.0% | 552,500 → 607,750 | `Main.main` | `Profile.hs:146:1` |

###### `Data.Vector.Fusion.Bundle.Monadic.sChunks` (`src/Data/Vector/Fusion/Bundle/Monadic.hs:122:30`)

| Change |   Delta |     % |           Entries | Caller                                         | Location                                     |
| -----: | ------: | ----: | ----------------: | ---------------------------------------------- | -------------------------------------------- |
| +10.0% | +52,700 | 99.6% | 527,000 → 579,700 | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |
| +10.0% |    +200 |  0.4% |     2,000 → 2,200 | `Main.toJSON`                                  | `Profile.hs:84:3`                            |

##### Callees

Callees with the largest change in contribution to each function's total entries. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

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

### Hottest call stacks

#### Regressions

Call stacks with the largest increase in entries recorded in their leaf frame.

Common call stack: `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.main` (`Profile.hs:146:1`) ← `MAIN.MAIN`

| Change |    Delta |     % |               Entries | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -----: | -------: | ----: | --------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +10.0% | +864,550 | 46.4% | 8,645,500 → 9,510,050 | `Data.Aeson.Internal.Text.unsafeDecodeASCII` (`src/Data/Aeson/Internal/Text.hs:29:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)                                                                                                                                                                                                                                                                                                                                                                                                                          |
| +10.0% |  +82,350 |  4.4% |     823,500 → 905,850 | `Data.Integer.Conversion.byteStringToInteger` (`src/Data/Integer/Conversion.hs:104:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)                                                                                                                                                                                                                                                                                                                                                                                                                         |
| +10.0% |  +80,900 |  4.3% |     809,000 → 889,900 | `Data.Primitive.Array.marray#` (`Data/Primitive/Array.hs:109:5`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| +10.0% |  +80,900 |  4.3% |     809,000 → 889,900 | `Data.Vector.Fusion.Util.unId` (`src/Data/Vector/Fusion/Util.hs:25:21`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| +10.0% |  +59,150 |  3.2% |     591,500 → 650,650 | `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                                                                                                                                                                                                   |
| +10.0% |  +59,150 |  3.2% |     591,500 → 650,650 | `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                                                                                                                                          |
| +10.0% |  +59,150 |  3.2% |     591,500 → 650,650 | `Data.Aeson.KeyMap.lookup` (`src/Data/Aeson/KeyMap.hs:178:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                                                                          |
| +10.0% |  +54,800 |  2.9% |     548,000 → 602,800 | `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                                                             |
| +10.0% |  +52,500 |  2.8% |     525,000 → 577,500 | `Data.Vector.Fusion.Bundle.Monadic.sChunks` (`src/Data/Vector/Fusion/Bundle/Monadic.hs:122:30`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                                                                                                                                                                                                                                                                                                                                                        |
| +10.0% |  +52,500 |  2.8% |     525,000 → 577,500 | `Data.Vector.Fusion.Bundle.Monadic.sSize` (`src/Data/Vector/Fusion/Bundle/Monadic.hs:124:30`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                                                                                                                                                                                                                                                                                                                                                          |
| +10.0% |  +52,500 |  2.8% |     525,000 → 577,500 | `Data.Vector.Fusion.Bundle.Size.upperBound` (`src/Data/Vector/Fusion/Bundle/Size.hs:129:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                                                                                                                                                                                                                                                                                                                                                            |
| +10.0% |  +20,000 |  1.1% |     200,000 → 220,000 | `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                                                                    |
| +10.0% |  +20,000 |  1.1% |     200,000 → 220,000 | `Data.Scientific.coefficient` (`src/Data/Scientific.hs:140:7`) ← `Data.Scientific.toBoundedInteger` (772:1) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                            |
| +10.0% |  +20,000 |  1.1% |     200,000 → 220,000 | `Data.Aeson.Types.Internal.modifyFailure` (`src/Data/Aeson/Types/Internal.hs:671:1`) ← `Data.Aeson.Types.Internal.prependFailure` (681:1) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                              |
| +10.0% |  +19,800 |  1.1% |     198,000 → 217,800 | `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                                                                                                                                                                                                                                            |
| +10.0% |  +14,750 |  0.8% |     147,500 → 162,250 | `Data.Aeson.Types.FromJSON.withText` (`src/Data/Aeson/Types/FromJSON.hs:731:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (917:1) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                                                                                           |
| +10.0% |  +14,750 |  0.8% |     147,500 → 162,250 | `Data.Vector.Fusion.Util.unId` (`src/Data/Vector/Fusion/Util.hs:25:21`) ← `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`) ← `Main.parseJSONList` (`Profile.hs:71:10`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) |
| +10.0% |  +13,650 |  0.7% |     136,500 → 150,150 | `Data.Scientific.base10Exponent` (`src/Data/Scientific.hs:165:7`) ← `Data.Scientific.toBoundedInteger` (772:1) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                         |
| +10.0% |  +13,650 |  0.7% |     136,500 → 150,150 | `Utils.magnitude` (`src/Utils.hs:78:1`) ← `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                                                                                          |
| +10.0% |  +13,650 |  0.7% |     136,500 → 150,150 | `Data.Primitive.Array.array#` (`Data/Primitive/Array.hs:66:5`) ← `Utils.magnitude` (`src/Utils.hs:78:1`) ← `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)                         |
