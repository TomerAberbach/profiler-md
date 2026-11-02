# Wall time profile

Took 3.75s over 3,759 samples (1.0ms per sample).

| Category          |     % |   Time | Samples |
| ----------------- | ----: | -----: | ------: |
| Ours              | 69.1% |  2.59s |   2,599 |
| Garbage collector | 30.3% |  1.13s |   1,139 |
| Native            |  0.6% | 21.0ms |      21 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 2.59s (69.1%) Main.main at Profile.hs:146:1
│   ├── 2.38s (63.5%) Data.Aeson.Decoding.eitherDecode at src/Data/Aeson/Decoding.hs:79:1
│   │   ├── 1.60s (42.8%, self 35.8%) Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens at src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1
│   │   │   ├── 125.0ms (3.3%) Data.Aeson.Internal.Text.unsafeDecodeASCII at src/Data/Aeson/Internal/Text.hs:29:1
│   │   │   ├── 70.0ms (1.9%) Data.Aeson.Internal.Unescape.unescapeText at src/Data/Aeson/Internal/Unescape.hs:34:1
│   │   │   └── 68.0ms (1.8%) Data.Integer.Conversion.byteStringToInteger at src/Data/Integer/Conversion.hs:104:1
│   │   └── 781.0ms (20.8%, self 4.7%) Data.Aeson.Decoding.Conversion.toResultValue at src/Data/Aeson/Decoding/Conversion.hs:51:1
│   │       ├── 467.0ms (12.4%) Data.Aeson.KeyMap.fromList at src/Data/Aeson/KeyMap.hs:247:1
│   │       └── 137.0ms (3.6%) Data.Aeson.Types.FromJSON.ifromJSON at src/Data/Aeson/Types/FromJSON.hs:839:1
│   │           └── 137.0ms (3.6%) Main.parseJSON at Profile.hs:48:3
│   │               └── 137.0ms (3.6%) Data.Aeson.Types.FromJSON.withObject at src/Data/Aeson/Types/FromJSON.hs:720:1
│   │                   ├── 127.0ms (3.4%) Data.Aeson.Types.FromJSON..: at 849:1
│   │                   │   └── 116.0ms (3.1%, self 0.5%) Data.Aeson.Types.FromJSON.explicitParseField at 917:1
│   │                   │       ├── 38.0ms (1.0%) Data.Aeson.KeyMap.lookup at src/Data/Aeson/KeyMap.hs:178:1
│   │                   │       ├── 26.0ms (0.7%) Data.Aeson.Types.Internal.<?> at src/Data/Aeson/Types/Internal.hs:659:1
│   │                   │       │   ├── 6.0ms (0.2%) Data.Aeson.Types.FromJSON.withText at src/Data/Aeson/Types/FromJSON.hs:731:1
│   │                   │       │   └── 5.0ms (0.1%) Data.Aeson.Types.Internal.prependFailure at 681:1
│   │                   │       │       └── 5.0ms (0.1%) Data.Aeson.Types.Internal.modifyFailure at 671:1
│   │                   │       ├── 13.0ms (0.3%) Data.Scientific.toBoundedInteger at src/Data/Scientific.hs:772:1
│   │                   │       │   ├── 3.0ms (0.1%) Utils.magnitude at src/Utils.hs:78:1
│   │                   │       │   └── 2.0ms (0.1%) Data.Scientific.normalize at 1102:1
│   │                   │       ├── 6.0ms (0.2%) Main.parseJSONList at Profile.hs:50:10
│   │                   │       │   └── 6.0ms (0.2%) Data.Aeson.Types.FromJSON.withArray at src/Data/Aeson/Types/FromJSON.hs:742:1
│   │                   │       │       └── 2.0ms (0.1%) Data.Aeson.Types.FromJSON.parseIndexedJSON at 171:1
│   │                   │       └── 6.0ms (0.2%) Data.Aeson.Types.Internal.prependFailure at src/Data/Aeson/Types/Internal.hs:681:1
│   │                   └── 3.0ms (0.1%) Data.Aeson.Types.FromJSON..:? at 859:1
│   │                       └── 2.0ms (0.1%) Data.Aeson.Types.FromJSON.explicitParseFieldMaybe at 923:1
│   ├── 150.0ms (4.0%, self 3.5%) Main.keywords at 136:1
│   │   └── 20.0ms (0.5%) Main.tally at 112:1
│   ├── … 23.0ms (0.6%) Main.toEncoding at Profile.hs:83:10
│   │   ├── … 19.0ms (0.5%) Data.Aeson.Encoding.Builder.object at src/Data/Aeson/Encoding/Builder.hs:96:1
│   │   │   ├── 12.0ms (0.3%) Data.Aeson.Encoding.Builder.text at 109:1
│   │   │   │   └── 4.0ms (0.1%) Data.Aeson.Encoding.Builder.unquoted at 113:1
│   │   │   └── 2.0ms (0.1%) Data.Aeson.Encoding.Builder.array at 86:1
│   │   └── 3.0ms (0.1%) Main.toJSON at 84:3
│   └── 21.0ms (0.6%) Main.summarize at 118:1
│       └── 4.0ms (0.1%) Main.top at 115:1
├── 1.13s (30.3%) GC.GC
├── 12.0ms (0.3%) SYSTEM.SYSTEM
└── 9.0ms (0.2%) PROFILING.OVERHEAD_of
```

## Hottest functions

### Self time

Functions with the most wall time spent within the function body, excluding callees.

|     % |    Time | Samples | Function                                          | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 35.9% |   1.34s |   1,348 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| 30.3% |   1.13s |   1,139 | `GC.GC`                                           | `<unknown>`                                       |
| 12.5% | 468.0ms |     468 | `Data.Aeson.KeyMap.fromList`                      | `src/Data/Aeson/KeyMap.hs:247:1`                  |
|  4.7% | 178.0ms |     178 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
|  3.5% | 130.0ms |     130 | `Main.keywords`                                   | `Profile.hs:136:1`                                |
|  3.3% | 125.0ms |     125 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|  1.9% |  70.0ms |      70 | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
|  1.8% |  68.0ms |      68 | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|  1.1% |  40.0ms |      40 | `Data.Aeson.KeyMap.lookup`                        | `src/Data/Aeson/KeyMap.hs:178:1`                  |
|  0.6% |  23.0ms |      23 | `Main.tally`                                      | `Profile.hs:112:1`                                |
|  0.6% |  21.0ms |      21 | `Data.Aeson.Types.FromJSON.explicitParseField`    | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
|  0.4% |  16.0ms |      16 | `Data.Aeson.Types.FromJSON.withArray`             | `src/Data/Aeson/Types/FromJSON.hs:742:1`          |
|  0.4% |  14.0ms |      14 | `Main.summarize`                                  | `Profile.hs:118:1`                                |
|  0.3% |  12.0ms |      12 | `SYSTEM.SYSTEM`                                   | `<unknown>`                                       |
|  0.3% |  11.0ms |      11 | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
|  0.2% |   9.0ms |       9 | `Data.Aeson.Types.Internal.<?>`                   | `src/Data/Aeson/Types/Internal.hs:659:1`          |
|  0.2% |   9.0ms |       9 | `PROFILING.OVERHEAD_of`                           | `<unknown>`                                       |
|  0.2% |   8.0ms |       8 | `Data.Aeson.Types.FromJSON.withObject`            | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
|  0.2% |   8.0ms |       8 | `Data.Scientific.toBoundedInteger`                | `src/Data/Scientific.hs:772:1`                    |
|  0.2% |   7.0ms |       7 | `Data.Aeson.Types.FromJSON.withText`              | `src/Data/Aeson/Types/FromJSON.hs:731:1`          |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |    Time | Samples | Function                                          | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 35.9% |   1.34s |   1,348 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| 12.5% | 468.0ms |     468 | `Data.Aeson.KeyMap.fromList`                      | `src/Data/Aeson/KeyMap.hs:247:1`                  |
|  4.7% | 178.0ms |     178 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
|  3.5% | 130.0ms |     130 | `Main.keywords`                                   | `Profile.hs:136:1`                                |
|  3.3% | 125.0ms |     125 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|  1.9% |  70.0ms |      70 | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
|  1.8% |  68.0ms |      68 | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|  1.1% |  40.0ms |      40 | `Data.Aeson.KeyMap.lookup`                        | `src/Data/Aeson/KeyMap.hs:178:1`                  |
|  0.6% |  23.0ms |      23 | `Main.tally`                                      | `Profile.hs:112:1`                                |
|  0.6% |  21.0ms |      21 | `Data.Aeson.Types.FromJSON.explicitParseField`    | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
|  0.4% |  16.0ms |      16 | `Data.Aeson.Types.FromJSON.withArray`             | `src/Data/Aeson/Types/FromJSON.hs:742:1`          |
|  0.4% |  14.0ms |      14 | `Main.summarize`                                  | `Profile.hs:118:1`                                |
|  0.3% |  11.0ms |      11 | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
|  0.2% |   9.0ms |       9 | `Data.Aeson.Types.Internal.<?>`                   | `src/Data/Aeson/Types/Internal.hs:659:1`          |
|  0.2% |   8.0ms |       8 | `Data.Aeson.Types.FromJSON.withObject`            | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
|  0.2% |   8.0ms |       8 | `Data.Scientific.toBoundedInteger`                | `src/Data/Scientific.hs:772:1`                    |
|  0.2% |   7.0ms |       7 | `Data.Aeson.Types.FromJSON.withText`              | `src/Data/Aeson/Types/FromJSON.hs:731:1`          |
|  0.2% |   7.0ms |       7 | `Data.Aeson.Encoding.Builder.text`                | `src/Data/Aeson/Encoding/Builder.hs:109:1`        |
|  0.2% |   6.0ms |       6 | `Data.Aeson.Types.Internal.prependFailure`        | `src/Data/Aeson/Types/Internal.hs:681:1`          |
|  0.1% |   5.0ms |       5 | `Data.Aeson.Types.Internal.modifyFailure`         | `src/Data/Aeson/Types/Internal.hs:671:1`          |

##### Garbage collector

|     % |  Time | Samples | Function | Location    |
| ----: | ----: | ------: | -------- | ----------- |
| 30.3% | 1.13s |   1,139 | `GC.GC`  | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)

|      % |  Time | Samples | Caller                             | Location                          |
| -----: | ----: | ------: | ---------------------------------- | --------------------------------- |
| 100.0% | 1.34s |   1,348 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

##### `Data.Aeson.KeyMap.fromList` (`src/Data/Aeson/KeyMap.hs:247:1`)

|      % |    Time | Samples | Caller                                         | Location                                     |
| -----: | ------: | ------: | ---------------------------------------------- | -------------------------------------------- |
| 100.0% | 468.0ms |     468 | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |

##### `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)

|      % |    Time | Samples | Caller                             | Location                          |
| -----: | ------: | ------: | ---------------------------------- | --------------------------------- |
| 100.0% | 178.0ms |     178 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

##### `Main.keywords` (`Profile.hs:136:1`)

|      % |    Time | Samples | Caller      | Location           |
| -----: | ------: | ------: | ----------- | ------------------ |
| 100.0% | 130.0ms |     130 | `Main.main` | `Profile.hs:146:1` |

##### `Data.Aeson.Internal.Text.unsafeDecodeASCII` (`src/Data/Aeson/Internal/Text.hs:29:1`)

|      % |    Time | Samples | Caller                                            | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 125.0ms |     125 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

##### `Data.Aeson.Internal.Unescape.unescapeText` (`src/Data/Aeson/Internal/Unescape.hs:34:1`)

|      % |   Time | Samples | Caller                                            | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 70.0ms |      70 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

##### `Data.Integer.Conversion.byteStringToInteger` (`src/Data/Integer/Conversion.hs:104:1`)

|      % |   Time | Samples | Caller                                            | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 68.0ms |      68 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

##### `Data.Aeson.KeyMap.lookup` (`src/Data/Aeson/KeyMap.hs:178:1`)

|     % |   Time | Samples | Caller                                              | Location                                 |
| ----: | -----: | ------: | --------------------------------------------------- | ---------------------------------------- |
| 97.5% | 39.0ms |      39 | `Data.Aeson.Types.FromJSON.explicitParseField`      | `src/Data/Aeson/Types/FromJSON.hs:917:1` |
|  2.5% |  1.0ms |       1 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1` |

##### `Main.tally` (`Profile.hs:112:1`)

|     % |   Time | Samples | Caller           | Location           |
| ----: | -----: | ------: | ---------------- | ------------------ |
| 87.0% | 20.0ms |      20 | `Main.keywords`  | `Profile.hs:136:1` |
| 13.0% |  3.0ms |       3 | `Main.summarize` | `Profile.hs:118:1` |

##### `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`)

|      % |   Time | Samples | Caller                         | Location                                 |
| -----: | -----: | ------: | ------------------------------ | ---------------------------------------- |
| 100.0% | 21.0ms |      21 | `Data.Aeson.Types.FromJSON..:` | `src/Data/Aeson/Types/FromJSON.hs:849:1` |

##### `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`)

|     % |   Time | Samples | Caller               | Location            |
| ----: | -----: | ------: | -------------------- | ------------------- |
| 68.8% | 11.0ms |      11 | `Main.parseJSONList` | `Profile.hs:71:10`  |
| 25.0% |  4.0ms |       4 | `Main.parseJSONList` | `Profile.hs:50:10`  |
|  6.3% |  1.0ms |       1 | `Main.parseJSONList` | `Profile.hs:108:10` |

##### `Main.summarize` (`Profile.hs:118:1`)

|      % |   Time | Samples | Caller      | Location           |
| -----: | -----: | ------: | ----------- | ------------------ |
| 100.0% | 14.0ms |      14 | `Main.main` | `Profile.hs:146:1` |

##### `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`)

|      % |   Time | Samples | Caller                                 | Location                                 |
| -----: | -----: | ------: | -------------------------------------- | ---------------------------------------- |
| 100.0% | 11.0ms |      11 | `Data.Aeson.Types.FromJSON.withObject` | `src/Data/Aeson/Types/FromJSON.hs:720:1` |

##### `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`)

|      % |  Time | Samples | Caller                                         | Location                                 |
| -----: | ----: | ------: | ---------------------------------------------- | ---------------------------------------- |
| 100.0% | 9.0ms |       9 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`)

|     % |  Time | Samples | Caller           | Location          |
| ----: | ----: | ------: | ---------------- | ----------------- |
| 87.5% | 7.0ms |       7 | `Main.parseJSON` | `Profile.hs:48:3` |
| 12.5% | 1.0ms |       1 | `Main.parseJSON` | `Profile.hs:96:3` |

##### `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`)

|      % |  Time | Samples | Caller                                         | Location                                 |
| -----: | ----: | ------: | ---------------------------------------------- | ---------------------------------------- |
| 100.0% | 8.0ms |       8 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Data.Aeson.Types.FromJSON.withText` (`src/Data/Aeson/Types/FromJSON.hs:731:1`)

|     % |  Time | Samples | Caller                                              | Location                                 |
| ----: | ----: | ------: | --------------------------------------------------- | ---------------------------------------- |
| 42.9% | 3.0ms |       3 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1` |
| 42.9% | 3.0ms |       3 | `Data.Aeson.Types.Internal.<?>`                     | `src/Data/Aeson/Types/Internal.hs:659:1` |
| 14.3% | 1.0ms |       1 | `Data.Aeson.Types.FromJSON.explicitParseField`      | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Data.Aeson.Encoding.Builder.text` (`src/Data/Aeson/Encoding/Builder.hs:109:1`)

|     % |  Time | Samples | Caller                               | Location                                  |
| ----: | ----: | ------: | ------------------------------------ | ----------------------------------------- |
| 85.7% | 6.0ms |       6 | `Data.Aeson.Encoding.Builder.object` | `src/Data/Aeson/Encoding/Builder.hs:96:1` |
| 14.3% | 1.0ms |       1 | `Data.Aeson.Encoding.Builder.array`  | `src/Data/Aeson/Encoding/Builder.hs:86:1` |

##### `Data.Aeson.Types.Internal.prependFailure` (`src/Data/Aeson/Types/Internal.hs:681:1`)

|      % |  Time | Samples | Caller                                         | Location                                 |
| -----: | ----: | ------: | ---------------------------------------------- | ---------------------------------------- |
| 100.0% | 6.0ms |       6 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Data.Aeson.Types.Internal.modifyFailure` (`src/Data/Aeson/Types/Internal.hs:671:1`)

|      % |  Time | Samples | Caller                                     | Location                                 |
| -----: | ----: | ------: | ------------------------------------------ | ---------------------------------------- |
| 100.0% | 5.0ms |       5 | `Data.Aeson.Types.Internal.prependFailure` | `src/Data/Aeson/Types/Internal.hs:681:1` |

### Total time

Functions with the most wall time spent within the function and its callees.

|     % |    Time | Samples | Function                                          | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 69.1% |   2.59s |   2,599 | `Main.main`                                       | `Profile.hs:146:1`                                |
| 63.9% |   2.40s |   2,401 | `Data.Aeson.Decoding.eitherDecode`                | `src/Data/Aeson/Decoding.hs:79:1`                 |
| 42.9% |   1.61s |   1,611 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| 30.3% |   1.13s |   1,139 | `GC.GC`                                           | `<unknown>`                                       |
| 21.0% | 790.0ms |     790 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
| 12.5% | 468.0ms |     468 | `Data.Aeson.KeyMap.fromList`                      | `src/Data/Aeson/KeyMap.hs:247:1`                  |
|  4.0% | 150.0ms |     150 | `Main.keywords`                                   | `Profile.hs:136:1`                                |
|  3.8% | 144.0ms |     144 | `Data.Aeson.Types.FromJSON.withObject`            | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
|  3.8% | 144.0ms |     144 | `Data.Aeson.Types.FromJSON.ifromJSON`             | `src/Data/Aeson/Types/FromJSON.hs:839:1`          |
|  3.6% | 137.0ms |     137 | `Main.parseJSON`                                  | `Profile.hs:48:3`                                 |
|  3.5% | 133.0ms |     133 | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
|  3.3% | 125.0ms |     125 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|  3.2% | 122.0ms |     122 | `Data.Aeson.Types.FromJSON.explicitParseField`    | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
|  1.9% |  70.0ms |      70 | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
|  1.8% |  68.0ms |      68 | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|  1.1% |  40.0ms |      40 | `Data.Aeson.KeyMap.lookup`                        | `src/Data/Aeson/KeyMap.hs:178:1`                  |
|  1.0% |  36.0ms |      36 | `Main.roundTrip`                                  | `Profile.hs:139:1`                                |
|  0.7% |  28.0ms |      28 | `Data.Aeson.Types.Internal.<?>`                   | `src/Data/Aeson/Types/Internal.hs:659:1`          |
|  0.6% |  23.0ms |      23 | `Main.toEncoding`                                 | `Profile.hs:83:10`                                |
|  0.6% |  23.0ms |      23 | `Data.Aeson.encode`                               | `src/Data/Aeson.hs:187:1`                         |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |    Time | Samples | Function                                          | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 69.1% |   2.59s |   2,599 | `Main.main`                                       | `Profile.hs:146:1`                                |
| 63.9% |   2.40s |   2,401 | `Data.Aeson.Decoding.eitherDecode`                | `src/Data/Aeson/Decoding.hs:79:1`                 |
| 42.9% |   1.61s |   1,611 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| 21.0% | 790.0ms |     790 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |
| 12.5% | 468.0ms |     468 | `Data.Aeson.KeyMap.fromList`                      | `src/Data/Aeson/KeyMap.hs:247:1`                  |
|  4.0% | 150.0ms |     150 | `Main.keywords`                                   | `Profile.hs:136:1`                                |
|  3.8% | 144.0ms |     144 | `Data.Aeson.Types.FromJSON.withObject`            | `src/Data/Aeson/Types/FromJSON.hs:720:1`          |
|  3.8% | 144.0ms |     144 | `Data.Aeson.Types.FromJSON.ifromJSON`             | `src/Data/Aeson/Types/FromJSON.hs:839:1`          |
|  3.6% | 137.0ms |     137 | `Main.parseJSON`                                  | `Profile.hs:48:3`                                 |
|  3.5% | 133.0ms |     133 | `Data.Aeson.Types.FromJSON..:`                    | `src/Data/Aeson/Types/FromJSON.hs:849:1`          |
|  3.3% | 125.0ms |     125 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`      | `src/Data/Aeson/Internal/Text.hs:29:1`            |
|  3.2% | 122.0ms |     122 | `Data.Aeson.Types.FromJSON.explicitParseField`    | `src/Data/Aeson/Types/FromJSON.hs:917:1`          |
|  1.9% |  70.0ms |      70 | `Data.Aeson.Internal.Unescape.unescapeText`       | `src/Data/Aeson/Internal/Unescape.hs:34:1`        |
|  1.8% |  68.0ms |      68 | `Data.Integer.Conversion.byteStringToInteger`     | `src/Data/Integer/Conversion.hs:104:1`            |
|  1.1% |  40.0ms |      40 | `Data.Aeson.KeyMap.lookup`                        | `src/Data/Aeson/KeyMap.hs:178:1`                  |
|  1.0% |  36.0ms |      36 | `Main.roundTrip`                                  | `Profile.hs:139:1`                                |
|  0.7% |  28.0ms |      28 | `Data.Aeson.Types.Internal.<?>`                   | `src/Data/Aeson/Types/Internal.hs:659:1`          |
|  0.6% |  23.0ms |      23 | `Main.toEncoding`                                 | `Profile.hs:83:10`                                |
|  0.6% |  23.0ms |      23 | `Data.Aeson.encode`                               | `src/Data/Aeson.hs:187:1`                         |
|  0.6% |  23.0ms |      23 | `Main.tally`                                      | `Profile.hs:112:1`                                |

##### Garbage collector

|     % |  Time | Samples | Function | Location    |
| ----: | ----: | ------: | -------- | ----------- |
| 30.3% | 1.13s |   1,139 | `GC.GC`  | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)

|     % |   Time | Samples | Caller           | Location           |
| ----: | -----: | ------: | ---------------- | ------------------ |
| 99.5% |  2.38s |   2,388 | `Main.main`      | `Profile.hs:146:1` |
|  0.5% | 13.0ms |      13 | `Main.roundTrip` | `Profile.hs:139:1` |

##### `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)

|      % |  Time | Samples | Caller                             | Location                          |
| -----: | ----: | ------: | ---------------------------------- | --------------------------------- |
| 100.0% | 1.61s |   1,611 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

##### `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)

|      % |    Time | Samples | Caller                             | Location                          |
| -----: | ------: | ------: | ---------------------------------- | --------------------------------- |
| 100.0% | 790.0ms |     790 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

##### `Data.Aeson.KeyMap.fromList` (`src/Data/Aeson/KeyMap.hs:247:1`)

|      % |    Time | Samples | Caller                                         | Location                                     |
| -----: | ------: | ------: | ---------------------------------------------- | -------------------------------------------- |
| 100.0% | 468.0ms |     468 | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |

##### `Main.keywords` (`Profile.hs:136:1`)

|      % |    Time | Samples | Caller      | Location           |
| -----: | ------: | ------: | ----------- | ------------------ |
| 100.0% | 150.0ms |     150 | `Main.main` | `Profile.hs:146:1` |

##### `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`)

|     % |    Time | Samples | Caller           | Location          |
| ----: | ------: | ------: | ---------------- | ----------------- |
| 95.1% | 137.0ms |     137 | `Main.parseJSON` | `Profile.hs:48:3` |
|  4.9% |   7.0ms |       7 | `Main.parseJSON` | `Profile.hs:96:3` |

##### `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`)

|      % |    Time | Samples | Caller                                         | Location                                     |
| -----: | ------: | ------: | ---------------------------------------------- | -------------------------------------------- |
| 100.0% | 144.0ms |     144 | `Data.Aeson.Decoding.Conversion.toResultValue` | `src/Data/Aeson/Decoding/Conversion.hs:51:1` |

##### `Main.parseJSON` (`Profile.hs:48:3`)

|      % |    Time | Samples | Caller                                | Location                                 |
| -----: | ------: | ------: | ------------------------------------- | ---------------------------------------- |
| 100.0% | 137.0ms |     137 | `Data.Aeson.Types.FromJSON.ifromJSON` | `src/Data/Aeson/Types/FromJSON.hs:839:1` |

##### `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`)

|      % |    Time | Samples | Caller                                 | Location                                 |
| -----: | ------: | ------: | -------------------------------------- | ---------------------------------------- |
| 100.0% | 133.0ms |     133 | `Data.Aeson.Types.FromJSON.withObject` | `src/Data/Aeson/Types/FromJSON.hs:720:1` |

##### `Data.Aeson.Internal.Text.unsafeDecodeASCII` (`src/Data/Aeson/Internal/Text.hs:29:1`)

|      % |    Time | Samples | Caller                                            | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 125.0ms |     125 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

##### `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`)

|      % |    Time | Samples | Caller                         | Location                                 |
| -----: | ------: | ------: | ------------------------------ | ---------------------------------------- |
| 100.0% | 122.0ms |     122 | `Data.Aeson.Types.FromJSON..:` | `src/Data/Aeson/Types/FromJSON.hs:849:1` |

##### `Data.Aeson.Internal.Unescape.unescapeText` (`src/Data/Aeson/Internal/Unescape.hs:34:1`)

|      % |   Time | Samples | Caller                                            | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 70.0ms |      70 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

##### `Data.Integer.Conversion.byteStringToInteger` (`src/Data/Integer/Conversion.hs:104:1`)

|      % |   Time | Samples | Caller                                            | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 68.0ms |      68 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |

##### `Data.Aeson.KeyMap.lookup` (`src/Data/Aeson/KeyMap.hs:178:1`)

|     % |   Time | Samples | Caller                                              | Location                                 |
| ----: | -----: | ------: | --------------------------------------------------- | ---------------------------------------- |
| 97.5% | 39.0ms |      39 | `Data.Aeson.Types.FromJSON.explicitParseField`      | `src/Data/Aeson/Types/FromJSON.hs:917:1` |
|  2.5% |  1.0ms |       1 | `Data.Aeson.Types.FromJSON.explicitParseFieldMaybe` | `src/Data/Aeson/Types/FromJSON.hs:923:1` |

##### `Main.roundTrip` (`Profile.hs:139:1`)

|      % |   Time | Samples | Caller      | Location           |
| -----: | -----: | ------: | ----------- | ------------------ |
| 100.0% | 36.0ms |      36 | `Main.main` | `Profile.hs:146:1` |

##### `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`)

|      % |   Time | Samples | Caller                                         | Location                                 |
| -----: | -----: | ------: | ---------------------------------------------- | ---------------------------------------- |
| 100.0% | 28.0ms |      28 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Main.toEncoding` (`Profile.hs:83:10`)

|      % |   Time | Samples | Caller              | Location                  |
| -----: | -----: | ------: | ------------------- | ------------------------- |
| 100.0% | 23.0ms |      23 | `Data.Aeson.encode` | `src/Data/Aeson.hs:187:1` |

##### `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`)

|      % |   Time | Samples | Caller           | Location           |
| -----: | -----: | ------: | ---------------- | ------------------ |
| 100.0% | 23.0ms |      23 | `Main.roundTrip` | `Profile.hs:139:1` |

##### `Main.tally` (`Profile.hs:112:1`)

|     % |   Time | Samples | Caller           | Location           |
| ----: | -----: | ------: | ---------------- | ------------------ |
| 87.0% | 20.0ms |      20 | `Main.keywords`  | `Profile.hs:136:1` |
| 13.0% |  3.0ms |       3 | `Main.summarize` | `Profile.hs:118:1` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Main.main` (`Profile.hs:146:1`)

|     % |    Time | Samples | Callee                             | Location                          |
| ----: | ------: | ------: | ---------------------------------- | --------------------------------- |
| 91.9% |   2.38s |   2,388 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |
|  5.8% | 150.0ms |     150 | `Main.keywords`                    | `Profile.hs:136:1`                |
|  1.4% |  36.0ms |      36 | `Main.roundTrip`                   | `Profile.hs:139:1`                |
|  0.8% |  21.0ms |      21 | `Main.summarize`                   | `Profile.hs:118:1`                |

##### `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)

|     % |    Time | Samples | Callee                                            | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 67.1% |   1.61s |   1,611 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` | `src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1` |
| 32.9% | 790.0ms |     790 | `Data.Aeson.Decoding.Conversion.toResultValue`    | `src/Data/Aeson/Decoding/Conversion.hs:51:1`      |

##### `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`)

|    % |    Time | Samples | Callee                                        | Location                                   |
| ---: | ------: | ------: | --------------------------------------------- | ------------------------------------------ |
| 7.8% | 125.0ms |     125 | `Data.Aeson.Internal.Text.unsafeDecodeASCII`  | `src/Data/Aeson/Internal/Text.hs:29:1`     |
| 4.3% |  70.0ms |      70 | `Data.Aeson.Internal.Unescape.unescapeText`   | `src/Data/Aeson/Internal/Unescape.hs:34:1` |
| 4.2% |  68.0ms |      68 | `Data.Integer.Conversion.byteStringToInteger` | `src/Data/Integer/Conversion.hs:104:1`     |

##### `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`)

|     % |    Time | Samples | Callee                                | Location                                 |
| ----: | ------: | ------: | ------------------------------------- | ---------------------------------------- |
| 59.2% | 468.0ms |     468 | `Data.Aeson.KeyMap.fromList`          | `src/Data/Aeson/KeyMap.hs:247:1`         |
| 18.2% | 144.0ms |     144 | `Data.Aeson.Types.FromJSON.ifromJSON` | `src/Data/Aeson/Types/FromJSON.hs:839:1` |

##### `Main.keywords` (`Profile.hs:136:1`)

|     % |   Time | Samples | Callee       | Location           |
| ----: | -----: | ------: | ------------ | ------------------ |
| 13.3% | 20.0ms |      20 | `Main.tally` | `Profile.hs:112:1` |

##### `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`)

|     % |    Time | Samples | Callee                          | Location                                 |
| ----: | ------: | ------: | ------------------------------- | ---------------------------------------- |
| 92.4% | 133.0ms |     133 | `Data.Aeson.Types.FromJSON..:`  | `src/Data/Aeson/Types/FromJSON.hs:849:1` |
|  2.1% |   3.0ms |       3 | `Data.Aeson.Types.FromJSON..:?` | `src/Data/Aeson/Types/FromJSON.hs:859:1` |

##### `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`)

|     % |    Time | Samples | Callee           | Location          |
| ----: | ------: | ------: | ---------------- | ----------------- |
| 95.1% | 137.0ms |     137 | `Main.parseJSON` | `Profile.hs:48:3` |
|  4.9% |   7.0ms |       7 | `Main.parseJSON` | `Profile.hs:96:3` |

##### `Main.parseJSON` (`Profile.hs:48:3`)

|      % |    Time | Samples | Callee                                 | Location                                 |
| -----: | ------: | ------: | -------------------------------------- | ---------------------------------------- |
| 100.0% | 137.0ms |     137 | `Data.Aeson.Types.FromJSON.withObject` | `src/Data/Aeson/Types/FromJSON.hs:720:1` |

##### `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`)

|     % |    Time | Samples | Callee                                         | Location                                 |
| ----: | ------: | ------: | ---------------------------------------------- | ---------------------------------------- |
| 91.7% | 122.0ms |     122 | `Data.Aeson.Types.FromJSON.explicitParseField` | `src/Data/Aeson/Types/FromJSON.hs:917:1` |

##### `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`)

|     % |   Time | Samples | Callee                             | Location                                 |
| ----: | -----: | ------: | ---------------------------------- | ---------------------------------------- |
| 32.0% | 39.0ms |      39 | `Data.Aeson.KeyMap.lookup`         | `src/Data/Aeson/KeyMap.hs:178:1`         |
| 23.0% | 28.0ms |      28 | `Data.Aeson.Types.Internal.<?>`    | `src/Data/Aeson/Types/Internal.hs:659:1` |
| 11.5% | 14.0ms |      14 | `Data.Scientific.toBoundedInteger` | `src/Data/Scientific.hs:772:1`           |
|  4.9% |  6.0ms |       6 | `Main.parseJSONList`               | `Profile.hs:50:10`                       |
|  4.9% |  6.0ms |       6 | `Main.parseJSONList`               | `Profile.hs:71:10`                       |

##### `Main.roundTrip` (`Profile.hs:139:1`)

|     % |   Time | Samples | Callee                             | Location                          |
| ----: | -----: | ------: | ---------------------------------- | --------------------------------- |
| 63.9% | 23.0ms |      23 | `Data.Aeson.encode`                | `src/Data/Aeson.hs:187:1`         |
| 36.1% | 13.0ms |      13 | `Data.Aeson.Decoding.eitherDecode` | `src/Data/Aeson/Decoding.hs:79:1` |

##### `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`)

|     % |  Time | Samples | Callee                                     | Location                                 |
| ----: | ----: | ------: | ------------------------------------------ | ---------------------------------------- |
| 25.0% | 7.0ms |       7 | `Data.Aeson.Types.Internal.prependFailure` | `src/Data/Aeson/Types/Internal.hs:681:1` |
| 21.4% | 6.0ms |       6 | `Data.Aeson.Types.FromJSON.withText`       | `src/Data/Aeson/Types/FromJSON.hs:731:1` |
| 14.3% | 4.0ms |       4 | `Main.parseJSONList`                       | `Profile.hs:71:10`                       |
|  7.1% | 2.0ms |       2 | `Data.Aeson.Types.FromJSON..:?`            | `src/Data/Aeson/Types/FromJSON.hs:859:1` |

##### `Main.toEncoding` (`Profile.hs:83:10`)

|     % |   Time | Samples | Callee                               | Location                                    |
| ----: | -----: | ------: | ------------------------------------ | ------------------------------------------- |
| 87.0% | 20.0ms |      20 | `Data.Aeson.Encoding.Internal.value` | `src/Data/Aeson/Encoding/Internal.hs:441:1` |
| 13.0% |  3.0ms |       3 | `Main.toJSON`                        | `Profile.hs:84:3`                           |

##### `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`)

|      % |   Time | Samples | Callee            | Location           |
| -----: | -----: | ------: | ----------------- | ------------------ |
| 100.0% | 23.0ms |      23 | `Main.toEncoding` | `Profile.hs:83:10` |

## Hottest call stacks

Call stacks with the most wall time spent in their leaf frame.

Common call stack: `Main.main` (`Profile.hs:146:1`)

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 35.8% |   1.34s |   1,344 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 12.4% | 467.0ms |     467 | `Data.Aeson.KeyMap.fromList` (`src/Data/Aeson/KeyMap.hs:247:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  4.7% | 177.0ms |     177 | `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  3.5% | 130.0ms |     130 | `Main.keywords` (`Profile.hs:136:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  3.3% | 125.0ms |     125 | `Data.Aeson.Internal.Text.unsafeDecodeASCII` (`src/Data/Aeson/Internal/Text.hs:29:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.9% |  70.0ms |      70 | `Data.Aeson.Internal.Unescape.unescapeText` (`src/Data/Aeson/Internal/Unescape.hs:34:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.8% |  68.0ms |      68 | `Data.Integer.Conversion.byteStringToInteger` (`src/Data/Integer/Conversion.hs:104:1`) ← `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.0% |  38.0ms |      38 | `Data.Aeson.KeyMap.lookup` (`src/Data/Aeson/KeyMap.hs:178:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                             |
|  0.5% |  20.0ms |      20 | `Main.tally` (`Profile.hs:112:1`) ← `Main.keywords` (136:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.5% |  19.0ms |      19 | `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                             |
|  0.4% |  14.0ms |      14 | `Main.summarize` (`Profile.hs:118:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.3% |  11.0ms |      11 | `Data.Aeson.Types.FromJSON..:` (`src/Data/Aeson/Types/FromJSON.hs:849:1`) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                      |
|  0.2% |   9.0ms |       9 | `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                |
|  0.2% |   8.0ms |       8 | `Data.Scientific.toBoundedInteger` (`src/Data/Scientific.hs:772:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                       |
|  0.2% |   7.0ms |       7 | `Data.Aeson.Types.FromJSON.withObject` (`src/Data/Aeson/Types/FromJSON.hs:720:1`) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                                                                                                                                                                                                               |
|  0.2% |   6.0ms |       6 | `Data.Aeson.Types.Internal.prependFailure` (`src/Data/Aeson/Types/Internal.hs:681:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`)                                                                                                                     |
|  0.2% |   6.0ms |       6 | `Data.Aeson.Encoding.Builder.text` (`src/Data/Aeson/Encoding/Builder.hs:109:1`) ← `Data.Aeson.Encoding.Builder.object` (96:1) ← `Data.Aeson.Encoding.Builder.encodeToBuilder` (68:1) ← `Data.Aeson.Encoding.Internal.value` (`src/Data/Aeson/Encoding/Internal.hs:441:1`) ← `Main.toEncoding` (`Profile.hs:83:10`) ← `Data.Aeson.encode` (`src/Data/Aeson.hs:187:1`) ← `Main.roundTrip` (`Profile.hs:139:1`)                                                                                                                                                                                                                                                                                       |
|  0.1% |   4.0ms |       4 | `Data.Aeson.Types.FromJSON.withArray` (`src/Data/Aeson/Types/FromJSON.hs:742:1`) ← `Main.parseJSONList` (`Profile.hs:71:10`) ← `Data.Aeson.Types.Internal.<?>` (`src/Data/Aeson/Types/Internal.hs:659:1`) ← `Data.Aeson.Types.FromJSON.explicitParseField` (`src/Data/Aeson/Types/FromJSON.hs:917:1`) ← `Data.Aeson.Types.FromJSON..:` (849:1) ← `Data.Aeson.Types.FromJSON.withObject` (720:1) ← `Main.parseJSON` (`Profile.hs:48:3`) ← `Data.Aeson.Types.FromJSON.ifromJSON` (`src/Data/Aeson/Types/FromJSON.hs:839:1`) ← `Data.Aeson.Decoding.Conversion.toResultValue` (`src/Data/Aeson/Decoding/Conversion.hs:51:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) |
|  0.1% |   4.0ms |       4 | `Main.top` (`Profile.hs:115:1`) ← `Main.summarize` (118:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.1% |   4.0ms |       4 | `Data.Aeson.Decoding.ByteString.Lazy.lbsToTokens` (`src/Data/Aeson/Decoding/ByteString/Lazy.hs:33:1`) ← `Data.Aeson.Decoding.eitherDecode` (`src/Data/Aeson/Decoding.hs:79:1`) ← `Main.roundTrip` (`Profile.hs:139:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
