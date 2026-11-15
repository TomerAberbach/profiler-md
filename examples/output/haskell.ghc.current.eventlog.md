# Wall time profile

Took 4.19s over 4,186 samples (1.0ms per sample).

| Category          |     % |   Time | Samples |
| ----------------- | ----: | -----: | ------: |
| Ours              | 71.0% |  2.97s |   2,974 |
| Garbage collector | 28.5% |  1.19s |   1,193 |
| Native            |  0.5% | 19.0ms |      19 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 2.97s (71.0%) Main.main at Profile.hs:146:1
│   ├── 2.73s (65.2%) Data.Aeson.Decoding.eitherDecode at src/Data/Aeson/Decoding.hs:79:1
│   │   ├── 1.89s (45.2%, self 37.7%) Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens at src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1
│   │   │   ├── 157.0ms (3.8%) Data.Aeson.Internal.Text.unsafeDecodeASCII at src/Data/Aeson/Internal/Text.hs:29:1
│   │   │   ├── 82.0ms (2.0%) Data.Aeson.Internal.Unescape.unescapeText at src/Data/Aeson/Internal/Unescape.hs:34:1
│   │   │   └── 76.0ms (1.8%) Data.Integer.Conversion.byteStringToInteger at src/Data/Integer/Conversion.hs:104:1
│   │   └── 836.0ms (20.0%, self 4.8%) Data.Aeson.Decoding.Conversion.toResultValue at src/Data/Aeson/Decoding/Conversion.hs:51:1
│   │       ├── 502.0ms (12.0%) Data.Aeson.KeyMap.fromList at src/Data/Aeson/KeyMap.hs:247:1
│   │       └── … 135.0ms (3.2%) Data.Aeson.Types.FromJSON.withObject at src/Data/Aeson/Types/FromJSON.hs:720:1
│   │           ├── 123.0ms (2.9%) Data.Aeson.Types.FromJSON..: at 849:1
│   │           │   └── 119.0ms (2.8%) Data.Aeson.Types.FromJSON.explicitParseField at 917:1
│   │           │       ├── 43.0ms (1.0%) Data.Aeson.KeyMap.lookup at src/Data/Aeson/KeyMap.hs:178:1
│   │           │       ├── 34.0ms (0.8%) Data.Aeson.Types.Internal.<?> at src/Data/Aeson/Types/Internal.hs:659:1
│   │           │       │   ├── 9.0ms (0.2%) Data.Aeson.Types.FromJSON.withText at src/Data/Aeson/Types/FromJSON.hs:731:1
│   │           │       │   │   └── 8.0ms (0.2%) Main.parseJSONList at Profile.hs:71:10
│   │           │       │   │       └── 8.0ms (0.2%) Data.Aeson.Types.FromJSON.withArray at src/Data/Aeson/Types/FromJSON.hs:742:1
│   │           │       │   └── 5.0ms (0.1%) Data.Aeson.Types.Internal.prependFailure at 681:1
│   │           │       │       └── 5.0ms (0.1%) Data.Aeson.Types.Internal.modifyFailure at 671:1
│   │           │       └── 15.0ms (0.4%) Data.Scientific.toBoundedInteger at src/Data/Scientific.hs:772:1
│   │           │           └── 5.0ms (0.1%) Utils.magnitude at src/Utils.hs:78:1
│   │           └── 5.0ms (0.1%) Data.Aeson.Types.FromJSON..:? at 859:1
│   │               └── 4.0ms (0.1%) Data.Aeson.Types.FromJSON.explicitParseFieldMaybe at 923:1
│   ├── 154.0ms (3.7%, self 3.1%) Main.keywords at 136:1
│   │   └── 23.0ms (0.5%) Main.tally at 112:1
│   ├── 49.0ms (1.2%) Main.roundTrip at 139:1
│   │   └── 33.0ms (0.8%) Data.Aeson.encode at src/Data/Aeson.hs:187:1
│   │       └── 31.0ms (0.7%) Main.toEncoding at Profile.hs:83:10
│   │           ├── 27.0ms (0.6%) Data.Aeson.Encoding.Internal.value at src/Data/Aeson/Encoding/Internal.hs:441:1
│   │           │   └── 27.0ms (0.6%) Data.Aeson.Encoding.Builder.encodeToBuilder at src/Data/Aeson/Encoding/Builder.hs:68:1
│   │           │       └── 23.0ms (0.5%) Data.Aeson.Encoding.Builder.object at 96:1
│   │           │           ├── 12.0ms (0.3%) Data.Aeson.Encoding.Builder.text at 109:1
│   │           │           │   └── 4.0ms (0.1%) Data.Aeson.Encoding.Builder.unquoted at 113:1
│   │           │           └── 6.0ms (0.1%) Data.Aeson.Encoding.Builder.array at 86:1
│   │           └── 4.0ms (0.1%) Main.toJSON at 84:3
│   └── 33.0ms (0.8%) Main.summarize at 118:1
│       └── 6.0ms (0.1%) Main.top at 115:1
├── 1.19s (28.5%) GC.GC
├── 11.0ms (0.3%) PROFILING.OVERHEAD_of
└── 8.0ms (0.2%) SYSTEM.SYSTEM
```

## Hottest functions

### Self time

Functions with the most wall time spent within the function body, excluding callees.

|     % |    Time | Samples | Function                                          | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 37.9% |   1.59s |   1,585 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| 28.5% |   1.19s |   1,193 | `GC.GC`                                           | `<unknown>`                                       |
| 12.0% | 503.0ms |     503 | `Data.Aeson.KeyMap.fromList`                      | `src/Data/Aeson/KeyMap.hs:247:1`                  |
|  4.8% | 199.0ms |     199 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
|  3.8% | 157.0ms |     157 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|  3.1% | 131.0ms |     131 | `Main.keywords`                                   | `Profile.hs:136:1`                                |
|  2.0% |  82.0ms |      82 | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
|  1.8% |  77.0ms |      77 | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|  1.0% |  43.0ms |      43 | `Data.Aeson.KeyMap.lookup`                        | `src/Data/Aeson/KeyMap.hs:178:1`                  |
|  0.7% |  30.0ms |      30 | `Main.tally`                                      | `Profile.hs:112:1`                                |
|  0.5% |  20.0ms |      20 | `Main.summarize`                                  | `Profile.hs:118:1`                                |
|  0.5% |  19.0ms |      19 | `Data.Aeson.Types.Internal.<?>`                   | `src/Data/Aeson/Types/Internal.hs:659:1`          |
|  0.4% |  17.0ms |      17 | `Data.Aeson.Types.FromJSON.explicitParseField`    | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
|  0.3% |  12.0ms |      12 | `Data.Aeson.Types.FromJSON.withArray`             | `src/Data/Aeson/Types/FromJSON.hs:742:1`          |
|  0.3% |  11.0ms |      11 | `Data.Aeson.Types.FromJSON.withText`              | `src/Data/Aeson/Types/FromJSON.hs:731:1`          |
|  0.3% |  11.0ms |      11 | `PROFILING.OVERHEAD_of`                           | `<unknown>`                                       |
|  0.2% |  10.0ms |      10 | `Data.Scientific.toBoundedInteger`                | `src/Data/Scientific.hs:772:1`                    |
|  0.2% |   9.0ms |       9 | `Main.main`                                       | `Profile.hs:146:1`                                |
|  0.2% |   8.0ms |       8 | `SYSTEM.SYSTEM`                                   | `<unknown>`                                       |
|  0.2% |   8.0ms |       8 | `Data.Aeson.Encoding.Builder.text`                | `src/Data/Aeson/Encoding/Builder.hs:109:1`        |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |    Time | Samples | Function                                          | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 37.9% |   1.59s |   1,585 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| 12.0% | 503.0ms |     503 | `Data.Aeson.KeyMap.fromList`                      | `src/Data/Aeson/KeyMap.hs:247:1`                  |
|  4.8% | 199.0ms |     199 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
|  3.8% | 157.0ms |     157 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|  3.1% | 131.0ms |     131 | `Main.keywords`                                   | `Profile.hs:136:1`                                |
|  2.0% |  82.0ms |      82 | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
|  1.8% |  77.0ms |      77 | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|  1.0% |  43.0ms |      43 | `Data.Aeson.KeyMap.lookup`                        | `src/Data/Aeson/KeyMap.hs:178:1`                  |
|  0.7% |  30.0ms |      30 | `Main.tally`                                      | `Profile.hs:112:1`                                |
|  0.5% |  20.0ms |      20 | `Main.summarize`                                  | `Profile.hs:118:1`                                |
|  0.5% |  19.0ms |      19 | `Data.Aeson.Types.Internal.<?>`                   | `src/Data/Aeson/Types/Internal.hs:659:1`          |
|  0.4% |  17.0ms |      17 | `Data.Aeson.Types.FromJSON.explicitParseField`    | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
|  0.3% |  12.0ms |      12 | `Data.Aeson.Types.FromJSON.withArray`             | `src/Data/Aeson/Types/FromJSON.hs:742:1`          |
|  0.3% |  11.0ms |      11 | `Data.Aeson.Types.FromJSON.withText`              | `src/Data/Aeson/Types/FromJSON.hs:731:1`          |
|  0.2% |  10.0ms |      10 | `Data.Scientific.toBoundedInteger`                | `src/Data/Scientific.hs:772:1`                    |
|  0.2% |   9.0ms |       9 | `Main.main`                                       | `Profile.hs:146:1`                                |
|  0.2% |   8.0ms |       8 | `Data.Aeson.Encoding.Builder.text`                | `src/Data/Aeson/Encoding/Builder.hs:109:1`        |
|  0.2% |   7.0ms |       7 | `Data.Aeson.Types.FromJSON.withObject`            | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
|  0.2% |   7.0ms |       7 | `Data.Aeson.Encoding.Builder.array`               | `src/Data/Aeson/Encoding/Builder.hs:86:1`         |
|  0.1% |   6.0ms |       6 | `Main.top`                                        | `Profile.hs:115:1`                                |

##### Garbage collector

|     % |  Time | Samples | Function | Location    |
| ----: | ----: | ------: | -------- | ----------- |
| 28.5% | 1.19s |   1,193 | `GC.GC`  | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)

|      % |  Time | Samples | Caller                             | Location                          |
| -----: | ----: | ------: | ---------------------------------- | --------------------------------- |
| 100.0% | 1.59s |   1,585 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

##### `Data.Aeson.KeyMap.fromList` (`src/Data/Aeson/KeyMap.hs:247:1`)

|     % |    Time | Samples | Caller                                         | Location                                     |
| ----: | ------: | ------: | ---------------------------------------------- | -------------------------------------------- |
| 99.8% | 502.0ms |     502 | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |
|  0.2% |   1.0ms |       1 | `Main.toJSON`                                  | `Profile.hs:84:3`                            |

##### `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)

|      % |    Time | Samples | Caller                             | Location                          |
| -----: | ------: | ------: | ---------------------------------- | --------------------------------- |
| 100.0% | 199.0ms |     199 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

##### `Data.Aeson.Internal.Text.unsafeDecodeASCII` (`src/Data/Aeson/Internal/Text.hs:29:1`)

|      % |    Time | Samples | Caller                                            | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 157.0ms |     157 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

##### `Main.keywords` (`Profile.hs:136:1`)

|      % |    Time | Samples | Caller      | Location           |
| -----: | ------: | ------: | ----------- | ------------------ |
| 100.0% | 131.0ms |     131 | `Main.main` | `Profile.hs:146:1` |

##### `Data.Aeson.Internal.Unescape.unescapeText` (`src/Data/Aeson/Internal/Unescape.hs:34:1`)

|      % |   Time | Samples | Caller                                            | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 82.0ms |      82 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

##### `Data.Integer.Conversion.byteStringToInteger` (`src/Data/Integer/Conversion.hs:104:1`)

|      % |   Time | Samples | Caller                                            | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 77.0ms |      77 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

##### `Data.Aeson.KeyMap.lookup` (`src/Data/Aeson/KeyMap.hs:178:1`)

|      % |   Time | Samples | Caller                                         | Location                                 |
| -----: | -----: | ------: | ---------------------------------------------- | ---------------------------------------- |
| 100.0% | 43.0ms |      43 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Main.tally` (`Profile.hs:112:1`)

|     % |   Time | Samples | Caller           | Location           |
| ----: | -----: | ------: | ---------------- | ------------------ |
| 76.7% | 23.0ms |      23 | `Main.keywords`  | `Profile.hs:136:1` |
| 23.3% |  7.0ms |       7 | `Main.summarize` | `Profile.hs:118:1` |

##### `Main.summarize` (`Profile.hs:118:1`)

|      % |   Time | Samples | Caller      | Location           |
| -----: | -----: | ------: | ----------- | ------------------ |
| 100.0% | 20.0ms |      20 | `Main.main` | `Profile.hs:146:1` |

##### `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`)

|      % |   Time | Samples | Caller                                         | Location                                 |
| -----: | -----: | ------: | ---------------------------------------------- | ---------------------------------------- |
| 100.0% | 19.0ms |      19 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`)

|      % |   Time | Samples | Caller                         | Location                                 |
| -----: | -----: | ------: | ------------------------------ | ---------------------------------------- |
| 100.0% | 17.0ms |      17 | `Data.Aeson.Types.FromJSON..:` | `src/Data/Aeson/Types/FromJSON.hs:849:1` |

##### `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`)

|     % |   Time | Samples | Caller               | Location            |
| ----: | -----: | ------: | -------------------- | ------------------- |
| 83.3% | 10.0ms |      10 | `Main.parseJSONList` | `Profile.hs:71:10`  |
|  8.3% |  1.0ms |       1 | `Main.parseJSONList` | `Profile.hs:50:10`  |
|  8.3% |  1.0ms |       1 | `Main.parseJSONList` | `Profile.hs:108:10` |

##### `Data.Aeson.Types.FromJSON.withText` (`src/Data/Aeson/Types/FromJSON.hs:731:1`)

|     % |  Time | Samples | Caller                                              | Location                                 |
| ----: | ----: | ------: | --------------------------------------------------- | ---------------------------------------- |
| 36.4% | 4.0ms |       4 | `Data.Aeson.Types.FromJSON.explicitParseField`      | `src/Data/Aeson/Types/FromJSON.hs:917:1` |
| 27.3% | 3.0ms |       3 | `Data.Aeson.Types.Internal.<?>`                     | `src/Data/Aeson/Types/Internal.hs:659:1` |
| 18.2% | 2.0ms |       2 | `Data.Aeson.Types.Internal.modifyFailure`           | `src/Data/Aeson/Types/Internal.hs:671:1` |
| 18.2% | 2.0ms |       2 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1` |

##### `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`)

|      % |   Time | Samples | Caller                                         | Location                                 |
| -----: | -----: | ------: | ---------------------------------------------- | ---------------------------------------- |
| 100.0% | 10.0ms |      10 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Data.Aeson.Encoding.Builder.text` (`src/Data/Aeson/Encoding/Builder.hs:109:1`)

|     % |  Time | Samples | Caller                               | Location                                  |
| ----: | ----: | ------: | ------------------------------------ | ----------------------------------------- |
| 62.5% | 5.0ms |       5 | `Data.Aeson.Encoding.Builder.array`  | `src/Data/Aeson/Encoding/Builder.hs:86:1` |
| 37.5% | 3.0ms |       3 | `Data.Aeson.Encoding.Builder.object` | `src/Data/Aeson/Encoding/Builder.hs:96:1` |

##### `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`)

|      % |  Time | Samples | Caller           | Location          |
| -----: | ----: | ------: | ---------------- | ----------------- |
| 100.0% | 7.0ms |       7 | `Main.parseJSON` | `Profile.hs:48:3` |

##### `Data.Aeson.Encoding.Builder.array` (`src/Data/Aeson/Encoding/Builder.hs:86:1`)

|     % |  Time | Samples | Caller                                        | Location                                   |
| ----: | ----: | ------: | --------------------------------------------- | ------------------------------------------ |
| 57.1% | 4.0ms |       4 | `Data.Aeson.Encoding.Builder.text`            | `src/Data/Aeson/Encoding/Builder.hs:109:1` |
| 28.6% | 2.0ms |       2 | `Data.Aeson.Encoding.Builder.encodeToBuilder` | `src/Data/Aeson/Encoding/Builder.hs:68:1`  |
| 14.3% | 1.0ms |       1 | `Data.Aeson.Encoding.Builder.object`          | `src/Data/Aeson/Encoding/Builder.hs:96:1`  |

##### `Main.top` (`Profile.hs:115:1`)

|      % |  Time | Samples | Caller           | Location           |
| -----: | ----: | ------: | ---------------- | ------------------ |
| 100.0% | 6.0ms |       6 | `Main.summarize` | `Profile.hs:118:1` |

### Total time

Functions with the most wall time spent within the function and its callees.

|     % |    Time | Samples | Function                                          | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 71.0% |   2.97s |   2,974 | `Main.main`                                       | `Profile.hs:146:1`                                |
| 65.6% |   2.75s |   2,745 | `Data.Aeson.Decoding.eitherDecode`                | `src/Data/Aeson/Decoding.hs:79:1`                 |
| 45.4% |   1.90s |   1,901 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| 28.5% |   1.19s |   1,193 | `GC.GC`                                           | `<unknown>`                                       |
| 20.1% | 843.0ms |     843 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
| 12.0% | 503.0ms |     503 | `Data.Aeson.KeyMap.fromList`                      | `src/Data/Aeson/KeyMap.hs:247:1`                  |
|  3.8% | 157.0ms |     157 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|  3.7% | 154.0ms |     154 | `Main.keywords`                                   | `Profile.hs:136:1`                                |
|  3.4% | 142.0ms |     142 | `Data.Aeson.Types.FromJSON.withObject`            | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
|  3.4% | 142.0ms |     142 | `Data.Aeson.Types.FromJSON.ifromJSON`             | `src/Data/Aeson/Types/FromJSON.hs:839:1`          |
|  3.2% | 135.0ms |     135 | `Main.parseJSON`                                  | `Profile.hs:48:3`                                 |
|  3.1% | 130.0ms |     130 | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
|  3.0% | 125.0ms |     125 | `Data.Aeson.Types.FromJSON.explicitParseField`    | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
|  2.0% |  82.0ms |      82 | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
|  1.8% |  77.0ms |      77 | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|  1.2% |  49.0ms |      49 | `Main.roundTrip`                                  | `Profile.hs:139:1`                                |
|  1.0% |  43.0ms |      43 | `Data.Aeson.KeyMap.lookup`                        | `src/Data/Aeson/KeyMap.hs:178:1`                  |
|  0.9% |  37.0ms |      37 | `Data.Aeson.Types.Internal.<?>`                   | `src/Data/Aeson/Types/Internal.hs:659:1`          |
|  0.8% |  33.0ms |      33 | `Main.summarize`                                  | `Profile.hs:118:1`                                |
|  0.8% |  33.0ms |      33 | `Data.Aeson.encode`                               | `src/Data/Aeson.hs:187:1`                         |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |    Time | Samples | Function                                          | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 71.0% |   2.97s |   2,974 | `Main.main`                                       | `Profile.hs:146:1`                                |
| 65.6% |   2.75s |   2,745 | `Data.Aeson.Decoding.eitherDecode`                | `src/Data/Aeson/Decoding.hs:79:1`                 |
| 45.4% |   1.90s |   1,901 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| 20.1% | 843.0ms |     843 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
| 12.0% | 503.0ms |     503 | `Data.Aeson.KeyMap.fromList`                      | `src/Data/Aeson/KeyMap.hs:247:1`                  |
|  3.8% | 157.0ms |     157 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|  3.7% | 154.0ms |     154 | `Main.keywords`                                   | `Profile.hs:136:1`                                |
|  3.4% | 142.0ms |     142 | `Data.Aeson.Types.FromJSON.withObject`            | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
|  3.4% | 142.0ms |     142 | `Data.Aeson.Types.FromJSON.ifromJSON`             | `src/Data/Aeson/Types/FromJSON.hs:839:1`          |
|  3.2% | 135.0ms |     135 | `Main.parseJSON`                                  | `Profile.hs:48:3`                                 |
|  3.1% | 130.0ms |     130 | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
|  3.0% | 125.0ms |     125 | `Data.Aeson.Types.FromJSON.explicitParseField`    | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
|  2.0% |  82.0ms |      82 | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
|  1.8% |  77.0ms |      77 | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|  1.2% |  49.0ms |      49 | `Main.roundTrip`                                  | `Profile.hs:139:1`                                |
|  1.0% |  43.0ms |      43 | `Data.Aeson.KeyMap.lookup`                        | `src/Data/Aeson/KeyMap.hs:178:1`                  |
|  0.9% |  37.0ms |      37 | `Data.Aeson.Types.Internal.<?>`                   | `src/Data/Aeson/Types/Internal.hs:659:1`          |
|  0.8% |  33.0ms |      33 | `Main.summarize`                                  | `Profile.hs:118:1`                                |
|  0.8% |  33.0ms |      33 | `Data.Aeson.encode`                               | `src/Data/Aeson.hs:187:1`                         |
|  0.7% |  31.0ms |      31 | `Main.toEncoding`                                 | `Profile.hs:83:10`                                |

##### Garbage collector

|     % |  Time | Samples | Function | Location    |
| ----: | ----: | ------: | -------- | ----------- |
| 28.5% | 1.19s |   1,193 | `GC.GC`  | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)

|     % |   Time | Samples | Caller           | Location           |
| ----: | -----: | ------: | ---------------- | ------------------ |
| 99.4% |  2.73s |   2,729 | `Main.main`      | `Profile.hs:146:1` |
|  0.6% | 16.0ms |      16 | `Main.roundTrip` | `Profile.hs:139:1` |

##### `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)

|      % |  Time | Samples | Caller                             | Location                          |
| -----: | ----: | ------: | ---------------------------------- | --------------------------------- |
| 100.0% | 1.90s |   1,901 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

##### `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)

|      % |    Time | Samples | Caller                             | Location                          |
| -----: | ------: | ------: | ---------------------------------- | --------------------------------- |
| 100.0% | 843.0ms |     843 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

##### `Data.Aeson.KeyMap.fromList` (`src/Data/Aeson/KeyMap.hs:247:1`)

|     % |    Time | Samples | Caller                                         | Location                                     |
| ----: | ------: | ------: | ---------------------------------------------- | -------------------------------------------- |
| 99.8% | 502.0ms |     502 | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |
|  0.2% |   1.0ms |       1 | `Main.toJSON`                                  | `Profile.hs:84:3`                            |

##### `Data.Aeson.Internal.Text.unsafeDecodeASCII` (`src/Data/Aeson/Internal/Text.hs:29:1`)

|      % |    Time | Samples | Caller                                            | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 157.0ms |     157 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

##### `Main.keywords` (`Profile.hs:136:1`)

|      % |    Time | Samples | Caller      | Location           |
| -----: | ------: | ------: | ----------- | ------------------ |
| 100.0% | 154.0ms |     154 | `Main.main` | `Profile.hs:146:1` |

##### `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`)

|     % |    Time | Samples | Caller           | Location          |
| ----: | ------: | ------: | ---------------- | ----------------- |
| 95.1% | 135.0ms |     135 | `Main.parseJSON` | `Profile.hs:48:3` |
|  4.9% |   7.0ms |       7 | `Main.parseJSON` | `Profile.hs:96:3` |

##### `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`)

|      % |    Time | Samples | Caller                                         | Location                                     |
| -----: | ------: | ------: | ---------------------------------------------- | -------------------------------------------- |
| 100.0% | 142.0ms |     142 | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |

##### `Main.parseJSON` (`Profile.hs:48:3`)

|      % |    Time | Samples | Caller                                | Location                                 |
| -----: | ------: | ------: | ------------------------------------- | ---------------------------------------- |
| 100.0% | 135.0ms |     135 | `Data.Aeson.Types.FromJSON.ifromJSON` | `src/Data/Aeson/Types/FromJSON.hs:839:1` |

##### `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`)

|      % |    Time | Samples | Caller                                 | Location                                 |
| -----: | ------: | ------: | -------------------------------------- | ---------------------------------------- |
| 100.0% | 130.0ms |     130 | `Data.Aeson.Types.FromJSON.withObject` | `src/Data/Aeson/Types/FromJSON.hs:720:1` |

##### `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`)

|      % |    Time | Samples | Caller                         | Location                                 |
| -----: | ------: | ------: | ------------------------------ | ---------------------------------------- |
| 100.0% | 125.0ms |     125 | `Data.Aeson.Types.FromJSON..:` | `src/Data/Aeson/Types/FromJSON.hs:849:1` |

##### `Data.Aeson.Internal.Unescape.unescapeText` (`src/Data/Aeson/Internal/Unescape.hs:34:1`)

|      % |   Time | Samples | Caller                                            | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 82.0ms |      82 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

##### `Data.Integer.Conversion.byteStringToInteger` (`src/Data/Integer/Conversion.hs:104:1`)

|      % |   Time | Samples | Caller                                            | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 77.0ms |      77 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

##### `Main.roundTrip` (`Profile.hs:139:1`)

|      % |   Time | Samples | Caller      | Location           |
| -----: | -----: | ------: | ----------- | ------------------ |
| 100.0% | 49.0ms |      49 | `Main.main` | `Profile.hs:146:1` |

##### `Data.Aeson.KeyMap.lookup` (`src/Data/Aeson/KeyMap.hs:178:1`)

|      % |   Time | Samples | Caller                                         | Location                                 |
| -----: | -----: | ------: | ---------------------------------------------- | ---------------------------------------- |
| 100.0% | 43.0ms |      43 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`)

|      % |   Time | Samples | Caller                                         | Location                                 |
| -----: | -----: | ------: | ---------------------------------------------- | ---------------------------------------- |
| 100.0% | 37.0ms |      37 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Main.summarize` (`Profile.hs:118:1`)

|      % |   Time | Samples | Caller      | Location           |
| -----: | -----: | ------: | ----------- | ------------------ |
| 100.0% | 33.0ms |      33 | `Main.main` | `Profile.hs:146:1` |

##### `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`)

|      % |   Time | Samples | Caller           | Location           |
| -----: | -----: | ------: | ---------------- | ------------------ |
| 100.0% | 33.0ms |      33 | `Main.roundTrip` | `Profile.hs:139:1` |

##### `Main.toEncoding` (`Profile.hs:83:10`)

|      % |   Time | Samples | Caller              | Location                  |
| -----: | -----: | ------: | ------------------- | ------------------------- |
| 100.0% | 31.0ms |      31 | `Data.Aeson.encode` | `src/Data/Aeson.hs:187:1` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Main.main` (`Profile.hs:146:1`)

|     % |    Time | Samples | Callee                             | Location                          |
| ----: | ------: | ------: | ---------------------------------- | --------------------------------- |
| 91.8% |   2.73s |   2,729 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |
|  5.2% | 154.0ms |     154 | `Main.keywords`                    | `Profile.hs:136:1`                |
|  1.6% |  49.0ms |      49 | `Main.roundTrip`                   | `Profile.hs:139:1`                |
|  1.1% |  33.0ms |      33 | `Main.summarize`                   | `Profile.hs:118:1`                |

##### `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)

|     % |    Time | Samples | Callee                                            | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 69.3% |   1.90s |   1,901 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| 30.7% | 843.0ms |     843 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |

##### `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)

|    % |    Time | Samples | Callee                                        | Location                                   |
| ---: | ------: | ------: | --------------------------------------------- | ------------------------------------------ |
| 8.3% | 157.0ms |     157 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`  | `src/Data/Aeson/Internal/Text.hs:29:1`     |
| 4.3% |  82.0ms |      82 | `Data.Aeson.Internal.Unescape.unescapeText`   | `src/Data/Aeson/Internal/Unescape.hs:34:1` |
| 4.1% |  77.0ms |      77 | `Data.Integer.Conversion.byteStringToInteger` | `src/Data/Integer/Conversion.hs:104:1`     |

##### `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)

|     % |    Time | Samples | Callee                                | Location                                 |
| ----: | ------: | ------: | ------------------------------------- | ---------------------------------------- |
| 59.5% | 502.0ms |     502 | `Data.Aeson.KeyMap.fromList`          | `src/Data/Aeson/KeyMap.hs:247:1`         |
| 16.8% | 142.0ms |     142 | `Data.Aeson.Types.FromJSON.ifromJSON` | `src/Data/Aeson/Types/FromJSON.hs:839:1` |

##### `Main.keywords` (`Profile.hs:136:1`)

|     % |   Time | Samples | Callee       | Location           |
| ----: | -----: | ------: | ------------ | ------------------ |
| 14.9% | 23.0ms |      23 | `Main.tally` | `Profile.hs:112:1` |

##### `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`)

|     % |    Time | Samples | Callee                          | Location                                 |
| ----: | ------: | ------: | ------------------------------- | ---------------------------------------- |
| 91.5% | 130.0ms |     130 | `Data.Aeson.Types.FromJSON..:`  | `src/Data/Aeson/Types/FromJSON.hs:849:1` |
|  3.5% |   5.0ms |       5 | `Data.Aeson.Types.FromJSON..:?` | `src/Data/Aeson/Types/FromJSON.hs:859:1` |

##### `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`)

|     % |    Time | Samples | Callee           | Location          |
| ----: | ------: | ------: | ---------------- | ----------------- |
| 95.1% | 135.0ms |     135 | `Main.parseJSON` | `Profile.hs:48:3` |
|  4.9% |   7.0ms |       7 | `Main.parseJSON` | `Profile.hs:96:3` |

##### `Main.parseJSON` (`Profile.hs:48:3`)

|      % |    Time | Samples | Callee                                 | Location                                 |
| -----: | ------: | ------: | -------------------------------------- | ---------------------------------------- |
| 100.0% | 135.0ms |     135 | `Data.Aeson.Types.FromJSON.withObject` | `src/Data/Aeson/Types/FromJSON.hs:720:1` |

##### `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`)

|     % |    Time | Samples | Callee                                         | Location                                 |
| ----: | ------: | ------: | ---------------------------------------------- | ---------------------------------------- |
| 96.2% | 125.0ms |     125 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`)

|     % |   Time | Samples | Callee                                     | Location                                 |
| ----: | -----: | ------: | ------------------------------------------ | ---------------------------------------- |
| 34.4% | 43.0ms |      43 | `Data.Aeson.KeyMap.lookup`                 | `src/Data/Aeson/KeyMap.hs:178:1`         |
| 29.6% | 37.0ms |      37 | `Data.Aeson.Types.Internal.<?>`            | `src/Data/Aeson/Types/Internal.hs:659:1` |
| 12.8% | 16.0ms |      16 | `Data.Scientific.toBoundedInteger`         | `src/Data/Scientific.hs:772:1`           |
|  3.2% |  4.0ms |       4 | `Data.Aeson.Types.FromJSON.withText`       | `src/Data/Aeson/Types/FromJSON.hs:731:1` |
|  2.4% |  3.0ms |       3 | `Data.Aeson.Types.Internal.prependFailure` | `src/Data/Aeson/Types/Internal.hs:681:1` |

##### `Main.roundTrip` (`Profile.hs:139:1`)

|     % |   Time | Samples | Callee                             | Location                          |
| ----: | -----: | ------: | ---------------------------------- | --------------------------------- |
| 67.3% | 33.0ms |      33 | `Data.Aeson.encode`                | `src/Data/Aeson.hs:187:1`         |
| 32.7% | 16.0ms |      16 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

##### `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`)

|     % |   Time | Samples | Callee                                     | Location                                 |
| ----: | -----: | ------: | ------------------------------------------ | ---------------------------------------- |
| 29.7% | 11.0ms |      11 | `Data.Aeson.Types.FromJSON.withText`       | `src/Data/Aeson/Types/FromJSON.hs:731:1` |
| 16.2% |  6.0ms |       6 | `Data.Aeson.Types.Internal.prependFailure` | `src/Data/Aeson/Types/Internal.hs:681:1` |
|  2.7% |  1.0ms |       1 | `Main.parseJSONList`                       | `Profile.hs:71:10`                       |

##### `Main.summarize` (`Profile.hs:118:1`)

|     % |  Time | Samples | Callee       | Location           |
| ----: | ----: | ------: | ------------ | ------------------ |
| 21.2% | 7.0ms |       7 | `Main.tally` | `Profile.hs:112:1` |
| 18.2% | 6.0ms |       6 | `Main.top`   | `Profile.hs:115:1` |

##### `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`)

|     % |   Time | Samples | Callee            | Location           |
| ----: | -----: | ------: | ----------------- | ------------------ |
| 93.9% | 31.0ms |      31 | `Main.toEncoding` | `Profile.hs:83:10` |

##### `Main.toEncoding` (`Profile.hs:83:10`)

|     % |   Time | Samples | Callee                               | Location                                    |
| ----: | -----: | ------: | ------------------------------------ | ------------------------------------------- |
| 87.1% | 27.0ms |      27 | `Data.Aeson.Encoding.Internal.value` | `src/Data/Aeson/Encoding/Internal.hs:441:1` |
| 12.9% |  4.0ms |       4 | `Main.toJSON`                        | `Profile.hs:84:3`                           |

## Hottest call stacks

Call stacks with the most wall time spent in their leaf frame.

Common call stack: `Main.main` (`Profile.hs:146:1`)

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 37.7% |   1.58s |   1,578 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 12.0% | 502.0ms |     502 | `Data.Aeson.KeyMap.fromList` (`src/Data/Aeson/KeyMap.hs:247:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  4.8% | 199.0ms |     199 | `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  3.8% | 157.0ms |     157 | `Data.Aeson.Internal.Text.unsafeDecodeASCII` (`src/Data/Aeson/Internal/Text.hs:29:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  3.1% | 131.0ms |     131 | `Main.keywords` (`Profile.hs:136:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.0% |  82.0ms |      82 | `Data.Aeson.Internal.Unescape.unescapeText` (`src/Data/Aeson/Internal/Unescape.hs:34:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.8% |  76.0ms |      76 | `Data.Integer.Conversion.byteStringToInteger` (`src/Data/Integer/Conversion.hs:104:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.0% |  43.0ms |      43 | `Data.Aeson.KeyMap.lookup` (`src/Data/Aeson/KeyMap.hs:178:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                               |
|  0.5% |  23.0ms |      23 | `Main.tally` (`Profile.hs:112:1`) ← `Main.keywords` (136:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.5% |  20.0ms |      20 | `Main.summarize` (`Profile.hs:118:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.5% |  19.0ms |      19 | `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                  |
|  0.4% |  15.0ms |      15 | `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                               |
|  0.2% |   9.0ms |       9 | `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                         |
|  0.2% |   8.0ms |       8 | `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`) ← `Main.parseJSONList` (`Profile.hs:71:10`) ← `Data.Aeson.Types.FromJSON.withText` (`src/Data/Aeson/Types/FromJSON.hs:731:1`) ← `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) |
|  0.2% |   7.0ms |       7 | `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.2% |   7.0ms |       7 | `Main.tally` (`Profile.hs:112:1`) ← `Main.summarize` (118:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.2% |   7.0ms |       7 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.roundTrip` (`Profile.hs:139:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.1% |   6.0ms |       6 | `Main.top` (`Profile.hs:115:1`) ← `Main.summarize` (118:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.1% |   5.0ms |       5 | `Data.Aeson.Encoding.Builder.object` (`src/Data/Aeson/Encoding/Builder.hs:96:1`) ← `Data.Aeson.Encoding.Builder.encodeToBuilder` (68:1) ← `Data.Aeson.Encoding.Internal.value` (`src/Data/Aeson/Encoding/Internal.hs:441:1`) ← `Main.toEncoding` (`Profile.hs:83:10`) ← `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`) ← `Main.roundTrip` (`Profile.hs:139:1`)                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.1% |   5.0ms |       5 | `Utils.magnitude` (`src/Utils.hs:78:1`) ← `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                               |
