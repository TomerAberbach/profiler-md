# CPU profile

Took 5.88s over 5,888 samples (1.0ms per sample).

| Category         |     % |   Time | Samples |
| ---------------- | ----: | -----: | ------: |
| Standard library | 98.1% |  5.77s |   5,776 |
| Native           |  1.4% | 85.0ms |      85 |
| Unknown          |  0.5% | 27.0ms |      27 |

Paths starting with `./` or `../` are relative to `/out/`.

## Hottest functions

### Self time

Functions with the most time spent within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|     % |    Time | Samples | Function                                                                                             | Location                                     |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| 21.8% |   1.28s |   1,286 | `zig.tokenizer.Tokenizer.next`                                                                       | `/opt/zig/lib/std/zig/tokenizer.zig:396`     |
|  6.2% | 365.0ms |     365 | `memset`                                                                                             | `/opt/zig/lib/compiler_rt.zig:677`           |
|  4.9% | 287.0ms |     287 | `zig.Ast.tokenSlice`                                                                                 | `/opt/zig/lib/std/zig/Ast.zig:276`           |
|  3.9% | 230.0ms |     230 | `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` | `/opt/zig/lib/std/static_string_map.zig:198` |
|  3.7% | 215.0ms |     215 | `zig.Ast.Render.tokenSliceForRender`                                                                 | `/opt/zig/lib/std/zig/Ast/Render.zig:3168`   |
|  3.6% | 211.0ms |     211 | `zig.Ast.Render.renderExpression`                                                                    | `/opt/zig/lib/std/zig/Ast/Render.zig:314`    |
|  3.2% | 189.0ms |     189 | `zig.Ast.Render.renderSpace`                                                                         | `/opt/zig/lib/std/zig/Ast/Render.zig:2738`   |
|  3.1% | 184.0ms |     184 | `zig.tokenizer.Token.Tag.lexeme`                                                                     | `/opt/zig/lib/std/zig/tokenizer.zig:186`     |
|  2.8% | 166.0ms |     166 | `zig.Ast.Render.renderComments`                                                                      | `/opt/zig/lib/std/zig/Ast/Render.zig:3011`   |
|  2.3% | 136.0ms |     136 | `mem.findScalarPos__anon_6382`                                                                       | `/opt/zig/lib/std/mem.zig:1241`              |
|  2.2% | 132.0ms |     132 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_28815`                              | `/opt/zig/lib/std/multi_array_list.zig:100`  |
|  1.5% |  87.0ms |      87 | `zig.Ast.lastToken`                                                                                  | `/opt/zig/lib/std/zig/Ast.zig:881`           |
|  1.4% |  84.0ms |      84 | `static_string_map.defaultEql`                                                                       | `/opt/zig/lib/std/static_string_map.zig:13`  |
|  1.4% |  83.0ms |      83 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32262`                              | `/opt/zig/lib/std/multi_array_list.zig:100`  |
|  1.3% |  75.0ms |      75 | `Io.Writer.write`                                                                                    | `/opt/zig/lib/std/Io/Writer.zig:532`         |
|  1.1% |  67.0ms |      67 | `zig.Ast.Render.renderIdentifier`                                                                    | `/opt/zig/lib/std/zig/Ast/Render.zig:2812`   |
|  1.1% |  67.0ms |      67 | `Io.Writer.writeAll`                                                                                 | `/opt/zig/lib/std/Io/Writer.zig:549`         |
|  1.1% |  66.0ms |      66 | `zig.Ast.tokenTag`                                                                                   | `/opt/zig/lib/std/zig/Ast.zig:88`            |
|  1.1% |  63.0ms |      63 | `zig.Ast.nodeTag`                                                                                    | `/opt/zig/lib/std/zig/Ast.zig:96`            |
|  1.1% |  62.0ms |      62 | `zig.Ast.Render.renderExtraNewlineToken`                                                             | `/opt/zig/lib/std/zig/Ast/Render.zig:3080`   |

##### Native

|     % |   Time | Samples | Function             | Location    |
| ----: | -----: | ------: | -------------------- | ----------- |
|  0.5% | 27.0ms |      27 | `openat`             | `<unknown>` |
|  0.3% | 19.0ms |      19 | `preadv`             | `<unknown>` |
|  0.2% | 14.0ms |      14 | `brk`                | `<unknown>` |
|  0.2% |  9.0ms |       9 | `close`              | `<unknown>` |
|  0.1% |  7.0ms |       7 | `statx`              | `<unknown>` |
|  0.1% |  3.0ms |       3 | `cfree`              | `<unknown>` |
| <0.1% |  2.0ms |       2 | `__libc_malloc`      | `<unknown>` |
| <0.1% |  1.0ms |       1 | `__libc_realloc`     | `<unknown>` |
| <0.1% |  1.0ms |       1 | `mmap`               | `<unknown>` |
| <0.1% |  1.0ms |       1 | `malloc_usable_size` | `<unknown>` |
| <0.1% |  1.0ms |       1 | `__sbrk`             | `<unknown>` |

#### Lines

Lines with the largest contribution to each function's self time.

##### `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:396`)

|     % |    Time | Samples | Location                                 |
| ----: | ------: | ------: | ---------------------------------------- |
| 18.3% | 235.0ms |     235 | `/opt/zig/lib/std/zig/tokenizer.zig:666` |
| 17.3% | 222.0ms |     222 | `/opt/zig/lib/std/zig/tokenizer.zig:667` |
| 10.2% | 131.0ms |     131 | `/opt/zig/lib/std/zig/tokenizer.zig:405` |
| 10.1% | 130.0ms |     130 | `/opt/zig/lib/std/zig/tokenizer.zig:670` |
|  5.8% |  75.0ms |      75 | `/opt/zig/lib/std/zig/tokenizer.zig:695` |

##### `memset` (`/opt/zig/lib/compiler_rt.zig:677`)

|     % |    Time | Samples | Location                           |
| ----: | ------: | ------: | ---------------------------------- |
| 84.1% | 307.0ms |     307 | `/opt/zig/lib/compiler_rt.zig:686` |
|  8.5% |  31.0ms |      31 | `/opt/zig/lib/compiler_rt.zig:684` |
|  3.6% |  13.0ms |      13 | `/opt/zig/lib/compiler_rt.zig:685` |
|  0.8% |   3.0ms |       3 | `/opt/zig/lib/compiler_rt.zig:680` |

##### `zig.Ast.tokenSlice` (`/opt/zig/lib/std/zig/Ast.zig:276`)

|     % |    Time | Samples | Location                           |
| ----: | ------: | ------: | ---------------------------------- |
| 41.8% | 120.0ms |     120 | `/opt/zig/lib/std/zig/Ast.zig:276` |
|  9.8% |  28.0ms |      28 | `/opt/zig/lib/std/zig/Ast.zig:277` |
|  7.0% |  20.0ms |      20 | `/opt/zig/lib/std/zig/Ast.zig:291` |
|  4.2% |  12.0ms |      12 | `/opt/zig/lib/std/zig/Ast.zig:286` |
|  3.5% |  10.0ms |      10 | `/opt/zig/lib/std/zig/Ast.zig:280` |

##### `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` (`/opt/zig/lib/std/static_string_map.zig:198`)

|     % |    Time | Samples | Location                                     |
| ----: | ------: | ------: | -------------------------------------------- |
| 49.6% | 114.0ms |     114 | `/opt/zig/lib/std/static_string_map.zig:208` |
| 41.3% |  95.0ms |      95 | `/opt/zig/lib/std/static_string_map.zig:213` |
|  6.5% |  15.0ms |      15 | `/opt/zig/lib/std/static_string_map.zig:203` |
|  0.9% |   2.0ms |       2 | `/opt/zig/lib/std/static_string_map.zig:209` |
|  0.4% |   1.0ms |       1 | `/opt/zig/lib/std/static_string_map.zig:206` |

##### `zig.Ast.Render.tokenSliceForRender` (`/opt/zig/lib/std/zig/Ast/Render.zig:3168`)

|     % |    Time | Samples | Location                                   |
| ----: | ------: | ------: | ------------------------------------------ |
| 69.8% | 150.0ms |     150 | `/opt/zig/lib/std/zig/Ast/Render.zig:3168` |
| 12.6% |  27.0ms |      27 | `/opt/zig/lib/std/zig/Ast/Render.zig:3169` |
|  6.5% |  14.0ms |      14 | `/opt/zig/lib/std/zig/Ast/Render.zig:3176` |
|  1.9% |   4.0ms |       4 | `/opt/zig/lib/std/zig/Ast/Render.zig:3170` |

##### `zig.Ast.Render.renderExpression` (`/opt/zig/lib/std/zig/Ast/Render.zig:314`)

|     % |   Time | Samples | Location                                  |
| ----: | -----: | ------: | ----------------------------------------- |
| 14.7% | 31.0ms |      31 | `/opt/zig/lib/std/zig/Ast/Render.zig:315` |
| 13.7% | 29.0ms |      29 | `/opt/zig/lib/std/zig/Ast/Render.zig:317` |
| 12.3% | 26.0ms |      26 | `/opt/zig/lib/std/zig/Ast/Render.zig:326` |
|  6.6% | 14.0ms |      14 | `/opt/zig/lib/std/zig/Ast/Render.zig:324` |
|  5.2% | 11.0ms |      11 | `/opt/zig/lib/std/zig/Ast/Render.zig:314` |

##### `zig.Ast.Render.renderSpace` (`/opt/zig/lib/std/zig/Ast/Render.zig:2738`)

|     % |   Time | Samples | Location                                   |
| ----: | -----: | ------: | ------------------------------------------ |
| 15.3% | 29.0ms |      29 | `/opt/zig/lib/std/zig/Ast/Render.zig:2751` |
| 12.7% | 24.0ms |      24 | `/opt/zig/lib/std/zig/Ast/Render.zig:2742` |
| 11.6% | 22.0ms |      22 | `/opt/zig/lib/std/zig/Ast/Render.zig:2756` |
| 11.1% | 21.0ms |      21 | `/opt/zig/lib/std/zig/Ast/Render.zig:2739` |
|  7.4% | 14.0ms |      14 | `/opt/zig/lib/std/zig/Ast/Render.zig:2744` |

##### `zig.tokenizer.Token.Tag.lexeme` (`/opt/zig/lib/std/zig/tokenizer.zig:186`)

|     % |   Time | Samples | Location                                 |
| ----: | -----: | ------: | ---------------------------------------- |
| 29.3% | 54.0ms |      54 | `/opt/zig/lib/std/zig/tokenizer.zig:187` |
|  3.3% |  6.0ms |       6 | `/opt/zig/lib/std/zig/tokenizer.zig:186` |

##### `zig.Ast.Render.renderComments` (`/opt/zig/lib/std/zig/Ast/Render.zig:3011`)

|     % |   Time | Samples | Location                                   |
| ----: | -----: | ------: | ------------------------------------------ |
| 44.0% | 73.0ms |      73 | `/opt/zig/lib/std/zig/Ast/Render.zig:3016` |
| 16.9% | 28.0ms |      28 | `/opt/zig/lib/std/zig/Ast/Render.zig:3072` |
|  2.4% |  4.0ms |       4 | `/opt/zig/lib/std/zig/Ast/Render.zig:3065` |

##### `mem.findScalarPos__anon_6382` (`/opt/zig/lib/std/mem.zig:1241`)

|     % |   Time | Samples | Location                        |
| ----: | -----: | ------: | ------------------------------- |
| 29.4% | 40.0ms |      40 | `/opt/zig/lib/std/mem.zig:1297` |
| 12.5% | 17.0ms |      17 | `/opt/zig/lib/std/mem.zig:1285` |
|  8.1% | 11.0ms |      11 | `/opt/zig/lib/std/mem.zig:1263` |
|  5.9% |  8.0ms |       8 | `/opt/zig/lib/std/mem.zig:1284` |
|  4.4% |  6.0ms |       6 | `/opt/zig/lib/std/mem.zig:1299` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_28815` (`/opt/zig/lib/std/multi_array_list.zig:100`)

|     % |    Time | Samples | Location                                    |
| ----: | ------: | ------: | ------------------------------------------- |
| 99.2% | 131.0ms |     131 | `/opt/zig/lib/std/multi_array_list.zig:102` |
|  0.8% |   1.0ms |       1 | `/opt/zig/lib/std/multi_array_list.zig:109` |

##### `zig.Ast.lastToken` (`/opt/zig/lib/std/zig/Ast.zig:881`)

|     % |   Time | Samples | Location                           |
| ----: | -----: | ------: | ---------------------------------- |
| 49.4% | 43.0ms |      43 | `/opt/zig/lib/std/zig/Ast.zig:881` |
| 10.3% |  9.0ms |       9 | `/opt/zig/lib/std/zig/Ast.zig:884` |

##### `static_string_map.defaultEql` (`/opt/zig/lib/std/static_string_map.zig:13`)

|     % |   Time | Samples | Location                                    |
| ----: | -----: | ------: | ------------------------------------------- |
| 94.0% | 79.0ms |      79 | `/opt/zig/lib/std/static_string_map.zig:15` |
|  6.0% |  5.0ms |       5 | `/opt/zig/lib/std/static_string_map.zig:16` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32262` (`/opt/zig/lib/std/multi_array_list.zig:100`)

|     % |   Time | Samples | Location                                    |
| ----: | -----: | ------: | ------------------------------------------- |
| 96.4% | 80.0ms |      80 | `/opt/zig/lib/std/multi_array_list.zig:102` |
|  3.6% |  3.0ms |       3 | `/opt/zig/lib/std/multi_array_list.zig:109` |

##### `Io.Writer.write` (`/opt/zig/lib/std/Io/Writer.zig:532`)

|     % |   Time | Samples | Location                             |
| ----: | -----: | ------: | ------------------------------------ |
| 50.7% | 38.0ms |      38 | `/opt/zig/lib/std/Io/Writer.zig:535` |
| 29.3% | 22.0ms |      22 | `/opt/zig/lib/std/Io/Writer.zig:533` |
| 16.0% | 12.0ms |      12 | `/opt/zig/lib/std/Io/Writer.zig:536` |
|  2.7% |  2.0ms |       2 | `/opt/zig/lib/std/Io/Writer.zig:539` |

##### `zig.Ast.Render.renderIdentifier` (`/opt/zig/lib/std/zig/Ast/Render.zig:2812`)

|     % |   Time | Samples | Location                                   |
| ----: | -----: | ------: | ------------------------------------------ |
| 58.2% | 39.0ms |      39 | `/opt/zig/lib/std/zig/Ast/Render.zig:2813` |
| 13.4% |  9.0ms |       9 | `/opt/zig/lib/std/zig/Ast/Render.zig:2812` |
|  6.0% |  4.0ms |       4 | `/opt/zig/lib/std/zig/Ast/Render.zig:2823` |
|  1.5% |  1.0ms |       1 | `/opt/zig/lib/std/zig/Ast/Render.zig:2815` |

##### `Io.Writer.writeAll` (`/opt/zig/lib/std/Io/Writer.zig:549`)

|     % |   Time | Samples | Location                             |
| ----: | -----: | ------: | ------------------------------------ |
| 38.8% | 26.0ms |      26 | `/opt/zig/lib/std/Io/Writer.zig:549` |
| 35.8% | 24.0ms |      24 | `/opt/zig/lib/std/Io/Writer.zig:551` |

##### `zig.Ast.tokenTag` (`/opt/zig/lib/std/zig/Ast.zig:88`)

|     % |   Time | Samples | Location                          |
| ----: | -----: | ------: | --------------------------------- |
| 62.1% | 41.0ms |      41 | `/opt/zig/lib/std/zig/Ast.zig:89` |

##### `zig.Ast.nodeTag` (`/opt/zig/lib/std/zig/Ast.zig:96`)

|     % |   Time | Samples | Location                          |
| ----: | -----: | ------: | --------------------------------- |
| 98.4% | 62.0ms |      62 | `/opt/zig/lib/std/zig/Ast.zig:97` |

##### `zig.Ast.Render.renderExtraNewlineToken` (`/opt/zig/lib/std/zig/Ast/Render.zig:3080`)

|     % |   Time | Samples | Location                                   |
| ----: | -----: | ------: | ------------------------------------------ |
| 32.3% | 20.0ms |      20 | `/opt/zig/lib/std/zig/Ast/Render.zig:3099` |
| 22.6% | 14.0ms |      14 | `/opt/zig/lib/std/zig/Ast/Render.zig:3102` |
|  8.1% |  5.0ms |       5 | `/opt/zig/lib/std/zig/Ast/Render.zig:3101` |
|  4.8% |  3.0ms |       3 | `/opt/zig/lib/std/zig/Ast/Render.zig:3092` |
|  3.2% |  2.0ms |       2 | `/opt/zig/lib/std/zig/Ast/Render.zig:3081` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:396`)

|     % |    Time | Samples | Caller                               | Location                                   |
| ----: | ------: | ------: | ------------------------------------ | ------------------------------------------ |
| 61.1% | 786.0ms |     786 | `zig.Ast.tokenSlice`                 | `/opt/zig/lib/std/zig/Ast.zig:276`         |
| 38.7% | 498.0ms |     498 | `zig.Ast.parse`                      | `/opt/zig/lib/std/zig/Ast.zig:145`         |
|  0.1% |   1.0ms |       1 | `start.callMain`                     | `/opt/zig/lib/std/start.zig:696`           |
|  0.1% |   1.0ms |       1 | `zig.Ast.Render.tokenSliceForRender` | `/opt/zig/lib/std/zig/Ast/Render.zig:3168` |

##### `memset` (`/opt/zig/lib/compiler_rt.zig:677`)

|     % |    Time | Samples | Caller                                                                | Location                                 |
| ----: | ------: | ------: | --------------------------------------------------------------------- | ---------------------------------------- |
| 80.0% | 292.0ms |     292 | `mem.Allocator.allocBytesWithAlignment__anon_10001`                   | `/opt/zig/lib/std/mem/Allocator.zig:289` |
|  6.6% |  24.0ms |      24 | `Io.Writer.splatByte`                                                 | `/opt/zig/lib/std/Io/Writer.zig:812`     |
|  5.5% |  20.0ms |      20 | `array_list.Aligned(zig.Ast.Node.Index,null).shrinkRetainingCapacity` | `/opt/zig/lib/std/array_list.zig:1186`   |
|  3.6% |  13.0ms |      13 | `Io.Threaded.dirOpenFilePosix`                                        | `/opt/zig/lib/std/Io/Threaded.zig:4789`  |
|  1.4% |   5.0ms |       5 | `mem.Allocator.allocBytesWithAlignment__anon_8636`                    | `/opt/zig/lib/std/mem/Allocator.zig:289` |

##### `zig.Ast.tokenSlice` (`/opt/zig/lib/std/zig/Ast.zig:276`)

|     % |    Time | Samples | Caller                               | Location                                   |
| ----: | ------: | ------: | ------------------------------------ | ------------------------------------------ |
| 62.7% | 180.0ms |     180 | `zig.Ast.Render.tokenSliceForRender` | `/opt/zig/lib/std/zig/Ast/Render.zig:3168` |
| 16.0% |  46.0ms |      46 | `zig.Ast.Render.renderToken`         | `/opt/zig/lib/std/zig/Ast/Render.zig:2720` |
| 10.8% |  31.0ms |      31 | `zig.Ast.Render.hasComment`          | `/opt/zig/lib/std/zig/Ast/Render.zig:2978` |
|  6.6% |  19.0ms |      19 | `zig.Ast.Render.renderIdentifier`    | `/opt/zig/lib/std/zig/Ast/Render.zig:2812` |
|  2.1% |   6.0ms |       6 | `zig.Ast.Render.renderExpression`    | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |

##### `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` (`/opt/zig/lib/std/static_string_map.zig:198`)

|      % |    Time | Samples | Caller                                                                                          | Location                                     |
| -----: | ------: | ------: | ----------------------------------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% | 230.0ms |     230 | `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).get` | `/opt/zig/lib/std/static_string_map.zig:191` |

##### `zig.Ast.Render.tokenSliceForRender` (`/opt/zig/lib/std/zig/Ast/Render.zig:3168`)

|     % |    Time | Samples | Caller                                   | Location                                   |
| ----: | ------: | ------: | ---------------------------------------- | ------------------------------------------ |
| 53.0% | 114.0ms |     114 | `zig.Ast.Render.renderToken`             | `/opt/zig/lib/std/zig/Ast/Render.zig:2720` |
| 25.1% |  54.0ms |      54 | `zig.Ast.Render.renderIdentifier`        | `/opt/zig/lib/std/zig/Ast/Render.zig:2812` |
| 14.4% |  31.0ms |      31 | `zig.Ast.Render.renderExpression`        | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |
|  2.3% |   5.0ms |       5 | `zig.Ast.Render.renderArrayInit`         | `/opt/zig/lib/std/zig/Ast/Render.zig:2110` |
|  2.3% |   5.0ms |       5 | `zig.Ast.Render.renderExtraNewlineToken` | `/opt/zig/lib/std/zig/Ast/Render.zig:3080` |

##### `zig.Ast.Render.renderExpression` (`/opt/zig/lib/std/zig/Ast/Render.zig:314`)

|     % |   Time | Samples | Caller                                      | Location                                   |
| ----: | -----: | ------: | ------------------------------------------- | ------------------------------------------ |
| 28.0% | 59.0ms |      59 | `zig.Ast.Render.renderExpression`           | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |
| 21.8% | 46.0ms |      46 | `zig.Ast.Render.renderParamList`            | `/opt/zig/lib/std/zig/Ast/Render.zig:2600` |
|  8.1% | 17.0ms |      17 | `zig.Ast.Render.finishRenderBlock`          | `/opt/zig/lib/std/zig/Ast/Render.zig:2023` |
|  7.6% | 16.0ms |      16 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `/opt/zig/lib/std/zig/Ast/Render.zig:1253` |
|  5.7% | 12.0ms |      12 | `zig.Ast.Render.renderCall`                 | `/opt/zig/lib/std/zig/Ast/Render.zig:2591` |

##### `zig.Ast.Render.renderSpace` (`/opt/zig/lib/std/zig/Ast/Render.zig:2738`)

|     % |    Time | Samples | Caller                               | Location                                   |
| ----: | ------: | ------: | ------------------------------------ | ------------------------------------------ |
| 81.5% | 154.0ms |     154 | `zig.Ast.Render.renderToken`         | `/opt/zig/lib/std/zig/Ast/Render.zig:2720` |
| 15.9% |  30.0ms |      30 | `zig.Ast.Render.renderExpression`    | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |
|  1.1% |   2.0ms |       2 | `zig.Ast.Render.renderArrayInit`     | `/opt/zig/lib/std/zig/Ast/Render.zig:2110` |
|  0.5% |   1.0ms |       1 | `zig.Ast.Render.finishRenderBlock`   | `/opt/zig/lib/std/zig/Ast/Render.zig:2023` |
|  0.5% |   1.0ms |       1 | `zig.Ast.Render.renderContainerDecl` | `/opt/zig/lib/std/zig/Ast/Render.zig:2344` |

##### `zig.tokenizer.Token.Tag.lexeme` (`/opt/zig/lib/std/zig/tokenizer.zig:186`)

|     % |    Time | Samples | Caller                               | Location                                   |
| ----: | ------: | ------: | ------------------------------------ | ------------------------------------------ |
| 72.8% | 134.0ms |     134 | `zig.Ast.Render.tokenSliceForRender` | `/opt/zig/lib/std/zig/Ast/Render.zig:3168` |
| 24.5% |  45.0ms |      45 | `zig.Ast.Render.hasComment`          | `/opt/zig/lib/std/zig/Ast/Render.zig:2978` |
|  1.6% |   3.0ms |       3 | `zig.Ast.Render.renderExpression`    | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |
|  0.5% |   1.0ms |       1 | `zig.Parse.parseExprPrecedence`      | `/opt/zig/lib/std/zig/Parse.zig:1620`      |
|  0.5% |   1.0ms |       1 | `zig.Parse.parseExpr`                | `/opt/zig/lib/std/zig/Parse.zig:1559`      |

##### `zig.Ast.Render.renderComments` (`/opt/zig/lib/std/zig/Ast/Render.zig:3011`)

|      % |    Time | Samples | Caller                       | Location                                   |
| -----: | ------: | ------: | ---------------------------- | ------------------------------------------ |
| 100.0% | 166.0ms |     166 | `zig.Ast.Render.renderSpace` | `/opt/zig/lib/std/zig/Ast/Render.zig:2738` |

##### `mem.findScalarPos__anon_6382` (`/opt/zig/lib/std/mem.zig:1241`)

|     % |    Time | Samples | Caller                                  | Location                                   |
| ----: | ------: | ------: | --------------------------------------- | ------------------------------------------ |
| 97.8% | 133.0ms |     133 | `mem.findScalar__anon_6379`             | `/opt/zig/lib/std/mem.zig:1219`            |
|  0.7% |   1.0ms |       1 | `zig.Ast.Render.renderToken`            | `/opt/zig/lib/std/zig/Ast/Render.zig:2720` |
|  0.7% |   1.0ms |       1 | `zig.Ast.Render.renderArrayInit`        | `/opt/zig/lib/std/zig/Ast/Render.zig:2110` |
|  0.7% |   1.0ms |       1 | `zig.Ast.Render.isOneLineContainerDecl` | `/opt/zig/lib/std/zig/Ast/Render.zig:2316` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_28815` (`/opt/zig/lib/std/multi_array_list.zig:100`)

|      % |    Time | Samples | Caller             | Location                           |
| -----: | ------: | ------: | ------------------ | ---------------------------------- |
| 100.0% | 132.0ms |     132 | `zig.Ast.nodeData` | `/opt/zig/lib/std/zig/Ast.zig:104` |

##### `zig.Ast.lastToken` (`/opt/zig/lib/std/zig/Ast.zig:881`)

|     % |   Time | Samples | Caller                                 | Location                                   |
| ----: | -----: | ------: | -------------------------------------- | ------------------------------------------ |
| 28.7% | 25.0ms |      25 | `zig.Ast.Render.renderExpression`      | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |
| 18.4% | 16.0ms |      16 | `zig.Ast.Render.renderParamList`       | `/opt/zig/lib/std/zig/Ast/Render.zig:2600` |
| 14.9% | 13.0ms |      13 | `zig.Ast.Render.renderArrayInit`       | `/opt/zig/lib/std/zig/Ast/Render.zig:2110` |
|  9.2% |  8.0ms |       8 | `zig.Ast.Render.renderExpressionComma` | `/opt/zig/lib/std/zig/Ast/Render.zig:2655` |
|  8.0% |  7.0ms |       7 | `zig.Ast.Render.renderStructInit`      | `/opt/zig/lib/std/zig/Ast/Render.zig:2051` |

##### `static_string_map.defaultEql` (`/opt/zig/lib/std/static_string_map.zig:13`)

|      % |   Time | Samples | Caller                                                                                               | Location                                     |
| -----: | -----: | ------: | ---------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% | 84.0ms |      84 | `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` | `/opt/zig/lib/std/static_string_map.zig:198` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32262` (`/opt/zig/lib/std/multi_array_list.zig:100`)

|      % |   Time | Samples | Caller                  | Location                           |
| -----: | -----: | ------: | ----------------------- | ---------------------------------- |
| 100.0% | 83.0ms |      83 | `zig.Ast.nodeMainToken` | `/opt/zig/lib/std/zig/Ast.zig:100` |

##### `Io.Writer.write` (`/opt/zig/lib/std/Io/Writer.zig:532`)

|      % |   Time | Samples | Caller               | Location                             |
| -----: | -----: | ------: | -------------------- | ------------------------------------ |
| 100.0% | 75.0ms |      75 | `Io.Writer.writeAll` | `/opt/zig/lib/std/Io/Writer.zig:549` |

##### `zig.Ast.Render.renderIdentifier` (`/opt/zig/lib/std/zig/Ast/Render.zig:2812`)

|     % |   Time | Samples | Caller                                      | Location                                   |
| ----: | -----: | ------: | ------------------------------------------- | ------------------------------------------ |
| 47.8% | 32.0ms |      32 | `zig.Ast.Render.renderExpression`           | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |
| 14.9% | 10.0ms |      10 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `/opt/zig/lib/std/zig/Ast/Render.zig:1253` |
| 13.4% |  9.0ms |       9 | `zig.Ast.Render.renderFnProto`              | `/opt/zig/lib/std/zig/Ast/Render.zig:1766` |
|  9.0% |  6.0ms |       6 | `zig.Ast.Render.renderParamList`            | `/opt/zig/lib/std/zig/Ast/Render.zig:2600` |
|  3.0% |  2.0ms |       2 | `zig.Ast.Render.renderIdentifierComma`      | `/opt/zig/lib/std/zig/Ast/Render.zig:2681` |

##### `Io.Writer.writeAll` (`/opt/zig/lib/std/Io/Writer.zig:549`)

|     % |   Time | Samples | Caller                                        | Location                                   |
| ----: | -----: | ------: | --------------------------------------------- | ------------------------------------------ |
| 98.5% | 66.0ms |      66 | `zig.Ast.Render.AutoIndentingStream.writeAll` | `/opt/zig/lib/std/zig/Ast/Render.zig:3353` |
|  1.5% |  1.0ms |       1 | `Io.Writer.alignBufferOptions`                | `/opt/zig/lib/std/Io/Writer.zig:1039`      |

##### `zig.Ast.tokenTag` (`/opt/zig/lib/std/zig/Ast.zig:88`)

|     % |   Time | Samples | Caller                               | Location                                   |
| ----: | -----: | ------: | ------------------------------------ | ------------------------------------------ |
| 40.9% | 27.0ms |      27 | `zig.Ast.tokenSlice`                 | `/opt/zig/lib/std/zig/Ast.zig:276`         |
| 22.7% | 15.0ms |      15 | `zig.Ast.Render.tokenSliceForRender` | `/opt/zig/lib/std/zig/Ast/Render.zig:3168` |
| 21.2% | 14.0ms |      14 | `zig.Ast.Render.renderSpace`         | `/opt/zig/lib/std/zig/Ast/Render.zig:2738` |
|  6.1% |  4.0ms |       4 | `zig.Ast.Render.renderIdentifier`    | `/opt/zig/lib/std/zig/Ast/Render.zig:2812` |
|  3.0% |  2.0ms |       2 | `zig.Ast.Render.renderArrayInit`     | `/opt/zig/lib/std/zig/Ast/Render.zig:2110` |

##### `zig.Ast.nodeTag` (`/opt/zig/lib/std/zig/Ast.zig:96`)

|     % |   Time | Samples | Caller                            | Location                                  |
| ----: | -----: | ------: | --------------------------------- | ----------------------------------------- |
| 57.1% | 36.0ms |      36 | `zig.Ast.Render.renderExpression` | `/opt/zig/lib/std/zig/Ast/Render.zig:314` |
| 27.0% | 17.0ms |      17 | `zig.Ast.lastToken`               | `/opt/zig/lib/std/zig/Ast.zig:881`        |
|  9.5% |  6.0ms |       6 | `zig.Ast.firstToken`              | `/opt/zig/lib/std/zig/Ast.zig:604`        |
|  3.2% |  2.0ms |       2 | `zig.Ast.Render.renderMember`     | `/opt/zig/lib/std/zig/Ast/Render.zig:141` |
|  1.6% |  1.0ms |       1 | `zig.Ast.fullStructInit`          | `/opt/zig/lib/std/zig/Ast.zig:2346`       |

##### `zig.Ast.Render.renderExtraNewlineToken` (`/opt/zig/lib/std/zig/Ast/Render.zig:3080`)

|     % |   Time | Samples | Caller                              | Location                                   |
| ----: | -----: | ------: | ----------------------------------- | ------------------------------------------ |
| 75.8% | 47.0ms |      47 | `zig.Ast.Render.renderExtraNewline` | `/opt/zig/lib/std/zig/Ast/Render.zig:3075` |
| 17.7% | 11.0ms |      11 | `zig.Ast.Render.renderStructInit`   | `/opt/zig/lib/std/zig/Ast/Render.zig:2051` |
|  6.5% |  4.0ms |       4 | `zig.Ast.Render.renderDocComments`  | `/opt/zig/lib/std/zig/Ast/Render.zig:3108` |

##### `openat` (`<unknown>`)

|     % |   Time | Samples | Caller                         | Location                                |
| ----: | -----: | ------: | ------------------------------ | --------------------------------------- |
| 77.8% | 21.0ms |      21 | `Io.Threaded.dirOpenFilePosix` | `/opt/zig/lib/std/Io/Threaded.zig:4789` |
| 22.2% |  6.0ms |       6 | `Io.Threaded.dirOpenDirPosix`  | `/opt/zig/lib/std/Io/Threaded.zig:5237` |

##### `preadv` (`<unknown>`)

|      % |   Time | Samples | Caller                                | Location                                |
| -----: | -----: | ------: | ------------------------------------- | --------------------------------------- |
| 100.0% | 19.0ms |      19 | `Io.Threaded.fileReadPositionalPosix` | `/opt/zig/lib/std/Io/Threaded.zig:9766` |

##### `brk` (`<unknown>`)

|      % |   Time | Samples | Caller               | Location    |
| -----: | -----: | ------: | -------------------- | ----------- |
| 100.0% | 14.0ms |      14 | `__default_morecore` | `<unknown>` |

##### `close` (`<unknown>`)

|      % |  Time | Samples | Caller                | Location                                 |
| -----: | ----: | ------: | --------------------- | ---------------------------------------- |
| 100.0% | 9.0ms |       9 | `Io.Threaded.closeFd` | `/opt/zig/lib/std/Io/Threaded.zig:18890` |

##### `statx` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location                           |
| -----: | ----: | ------: | -------------- | ---------------------------------- |
| 100.0% | 7.0ms |       7 | `Io.File.stat` | `/opt/zig/lib/std/Io/File.zig:141` |

##### `cfree` (`<unknown>`)

|      % |  Time | Samples | Caller                  | Location                                 |
| -----: | ----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% | 3.0ms |       3 | `mem.Allocator.rawFree` | `/opt/zig/lib/std/mem/Allocator.zig:159` |

##### `__libc_malloc` (`<unknown>`)

|      % |  Time | Samples | Caller                        | Location                        |
| -----: | ----: | ------: | ----------------------------- | ------------------------------- |
| 100.0% | 2.0ms |       2 | `heap.c_allocator_impl.alloc` | `/opt/zig/lib/std/heap.zig:208` |

##### `__libc_realloc` (`<unknown>`)

|      % |  Time | Samples | Caller                   | Location                                 |
| -----: | ----: | ------: | ------------------------ | ---------------------------------------- |
| 100.0% | 1.0ms |       1 | `mem.Allocator.rawRemap` | `/opt/zig/lib/std/mem/Allocator.zig:153` |

##### `mmap` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `<unknown>` |

##### `malloc_usable_size` (`<unknown>`)

|      % |  Time | Samples | Caller                   | Location                                 |
| -----: | ----: | ------: | ------------------------ | ---------------------------------------- |
| 100.0% | 1.0ms |       1 | `mem.Allocator.rawRemap` | `/opt/zig/lib/std/mem/Allocator.zig:153` |

##### `__sbrk` (`<unknown>`)

|      % |  Time | Samples | Caller               | Location    |
| -----: | ----: | ------: | -------------------- | ----------- |
| 100.0% | 1.0ms |       1 | `__default_morecore` | `<unknown>` |

### Total time

Functions with the most time spent within the function and its callees.

|      % |  Time | Samples | Function                                    | Location                                          |
| -----: | ----: | ------: | ------------------------------------------- | ------------------------------------------------- |
| 100.0% | 5.88s |   5,888 | `start.callMain`                            | `/opt/zig/lib/std/start.zig:696`                  |
| 100.0% | 5.88s |   5,888 | `start.callMainWithArgs`                    | `/opt/zig/lib/std/start.zig:629`                  |
| 100.0% | 5.88s |   5,888 | `main`                                      | `/opt/zig/lib/std/start.zig:641`                  |
| 100.0% | 5.88s |   5,888 | `(anonymous)`                               | `<unknown>`                                       |
| 100.0% | 5.88s |   5,888 | `__libc_start_main`                         | `<unknown>`                                       |
| 100.0% | 5.88s |   5,888 | `_start`                                    | `/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
| 100.0% | 5.88s |   5,887 | `profile.main`                              | `./profile.zig:11`                                |
|  72.0% | 4.24s |   4,240 | `zig.Ast.Render.renderTree`                 | `/opt/zig/lib/std/zig/Ast/Render.zig:86`          |
|  72.0% | 4.24s |   4,240 | `zig.Ast.render`                            | `/opt/zig/lib/std/zig/Ast.zig:228`                |
|  72.0% | 4.24s |   4,240 | `zig.Ast.renderAlloc`                       | `/opt/zig/lib/std/zig/Ast.zig:217`                |
|  71.9% | 4.23s |   4,235 | `zig.Ast.Render.renderMembers`              | `/opt/zig/lib/std/zig/Ast/Render.zig:122`         |
|  69.9% | 4.11s |   4,114 | `zig.Ast.Render.renderExpression`           | `/opt/zig/lib/std/zig/Ast/Render.zig:314`         |
|  62.6% | 3.68s |   3,686 | `zig.Ast.Render.renderMember`               | `/opt/zig/lib/std/zig/Ast/Render.zig:141`         |
|  48.0% | 2.82s |   2,827 | `zig.Ast.Render.renderBlock`                | `/opt/zig/lib/std/zig/Ast/Render.zig:1998`        |
|  47.8% | 2.81s |   2,813 | `zig.Ast.Render.finishRenderBlock`          | `/opt/zig/lib/std/zig/Ast/Render.zig:2023`        |
|  43.4% | 2.55s |   2,558 | `zig.Ast.Render.renderVarDecl`              | `/opt/zig/lib/std/zig/Ast/Render.zig:1235`        |
|  43.4% | 2.55s |   2,556 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `/opt/zig/lib/std/zig/Ast/Render.zig:1253`        |
|  29.9% | 1.76s |   1,761 | `zig.Ast.Render.renderContainerDecl`        | `/opt/zig/lib/std/zig/Ast/Render.zig:2344`        |
|  27.4% | 1.61s |   1,611 | `zig.Ast.Render.renderToken`                | `/opt/zig/lib/std/zig/Ast/Render.zig:2720`        |
|  27.2% | 1.59s |   1,599 | `zig.tokenizer.Tokenizer.next`              | `/opt/zig/lib/std/zig/tokenizer.zig:396`          |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|      % |  Time | Samples | Function                                    | Location                                          |
| -----: | ----: | ------: | ------------------------------------------- | ------------------------------------------------- |
| 100.0% | 5.88s |   5,888 | `start.callMain`                            | `/opt/zig/lib/std/start.zig:696`                  |
| 100.0% | 5.88s |   5,888 | `start.callMainWithArgs`                    | `/opt/zig/lib/std/start.zig:629`                  |
| 100.0% | 5.88s |   5,888 | `main`                                      | `/opt/zig/lib/std/start.zig:641`                  |
| 100.0% | 5.88s |   5,888 | `_start`                                    | `/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
|  72.0% | 4.24s |   4,240 | `zig.Ast.Render.renderTree`                 | `/opt/zig/lib/std/zig/Ast/Render.zig:86`          |
|  72.0% | 4.24s |   4,240 | `zig.Ast.render`                            | `/opt/zig/lib/std/zig/Ast.zig:228`                |
|  72.0% | 4.24s |   4,240 | `zig.Ast.renderAlloc`                       | `/opt/zig/lib/std/zig/Ast.zig:217`                |
|  71.9% | 4.23s |   4,235 | `zig.Ast.Render.renderMembers`              | `/opt/zig/lib/std/zig/Ast/Render.zig:122`         |
|  69.9% | 4.11s |   4,114 | `zig.Ast.Render.renderExpression`           | `/opt/zig/lib/std/zig/Ast/Render.zig:314`         |
|  62.6% | 3.68s |   3,686 | `zig.Ast.Render.renderMember`               | `/opt/zig/lib/std/zig/Ast/Render.zig:141`         |
|  48.0% | 2.82s |   2,827 | `zig.Ast.Render.renderBlock`                | `/opt/zig/lib/std/zig/Ast/Render.zig:1998`        |
|  47.8% | 2.81s |   2,813 | `zig.Ast.Render.finishRenderBlock`          | `/opt/zig/lib/std/zig/Ast/Render.zig:2023`        |
|  43.4% | 2.55s |   2,558 | `zig.Ast.Render.renderVarDecl`              | `/opt/zig/lib/std/zig/Ast/Render.zig:1235`        |
|  43.4% | 2.55s |   2,556 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `/opt/zig/lib/std/zig/Ast/Render.zig:1253`        |
|  29.9% | 1.76s |   1,761 | `zig.Ast.Render.renderContainerDecl`        | `/opt/zig/lib/std/zig/Ast/Render.zig:2344`        |
|  27.4% | 1.61s |   1,611 | `zig.Ast.Render.renderToken`                | `/opt/zig/lib/std/zig/Ast/Render.zig:2720`        |
|  27.2% | 1.59s |   1,599 | `zig.tokenizer.Tokenizer.next`              | `/opt/zig/lib/std/zig/tokenizer.zig:396`          |
|  26.3% | 1.54s |   1,548 | `zig.Ast.parse`                             | `/opt/zig/lib/std/zig/Ast.zig:145`                |
|  24.6% | 1.44s |   1,446 | `zig.Ast.Render.tokenSliceForRender`        | `/opt/zig/lib/std/zig/Ast/Render.zig:3168`        |
|  23.8% | 1.40s |   1,402 | `zig.Ast.Render.renderIdentifier`           | `/opt/zig/lib/std/zig/Ast/Render.zig:2812`        |

##### Native

|      % |   Time | Samples | Function             | Location    |
| -----: | -----: | ------: | -------------------- | ----------- |
| 100.0% |  5.88s |   5,888 | `__libc_start_main`  | `<unknown>` |
|   0.5% | 27.0ms |      27 | `openat`             | `<unknown>` |
|   0.4% | 26.0ms |      26 | `__libc_realloc`     | `<unknown>` |
|   0.3% | 19.0ms |      19 | `preadv`             | `<unknown>` |
|   0.3% | 17.0ms |      17 | `cfree`              | `<unknown>` |
|   0.3% | 15.0ms |      15 | `__default_morecore` | `<unknown>` |
|   0.2% | 14.0ms |      14 | `brk`                | `<unknown>` |
|   0.2% |  9.0ms |       9 | `close`              | `<unknown>` |
|   0.1% |  7.0ms |       7 | `statx`              | `<unknown>` |
|   0.1% |  6.0ms |       6 | `__libc_malloc`      | `<unknown>` |
|  <0.1% |  1.0ms |       1 | `mmap`               | `<unknown>` |
|  <0.1% |  1.0ms |       1 | `malloc_usable_size` | `<unknown>` |
|  <0.1% |  1.0ms |       1 | `__sbrk`             | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `start.callMain` (`/opt/zig/lib/std/start.zig:696`)

|      % |  Time | Samples | Caller                   | Location                         |
| -----: | ----: | ------: | ------------------------ | -------------------------------- |
| 100.0% | 5.88s |   5,888 | `start.callMainWithArgs` | `/opt/zig/lib/std/start.zig:629` |

##### `start.callMainWithArgs` (`/opt/zig/lib/std/start.zig:629`)

|      % |  Time | Samples | Caller | Location                         |
| -----: | ----: | ------: | ------ | -------------------------------- |
| 100.0% | 5.88s |   5,888 | `main` | `/opt/zig/lib/std/start.zig:641` |

##### `main` (`/opt/zig/lib/std/start.zig:641`)

|      % |  Time | Samples | Caller        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 5.88s |   5,888 | `(anonymous)` | `<unknown>` |

##### `(anonymous)` (`<unknown>`)

|      % |   Time | Samples | Caller              | Location    |
| -----: | -----: | ------: | ------------------- | ----------- |
| 100.0% |  5.88s |   5,888 | `__libc_start_main` | `<unknown>` |
|   0.4% | 25.0ms |      25 | `__libc_realloc`    | `<unknown>` |
|   0.4% | 23.0ms |      23 | `(anonymous)`       | `<unknown>` |
|   0.2% | 14.0ms |      14 | `cfree`             | `<unknown>` |
|   0.1% |  4.0ms |       4 | `__libc_malloc`     | `<unknown>` |

##### `__libc_start_main` (`<unknown>`)

|      % |  Time | Samples | Caller   | Location                                          |
| -----: | ----: | ------: | -------- | ------------------------------------------------- |
| 100.0% | 5.88s |   5,888 | `_start` | `/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |

##### `profile.main` (`./profile.zig:11`)

|      % |  Time | Samples | Caller           | Location                         |
| -----: | ----: | ------: | ---------------- | -------------------------------- |
| 100.0% | 5.88s |   5,887 | `start.callMain` | `/opt/zig/lib/std/start.zig:696` |

##### `zig.Ast.Render.renderTree` (`/opt/zig/lib/std/zig/Ast/Render.zig:86`)

|      % |  Time | Samples | Caller           | Location                           |
| -----: | ----: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 4.24s |   4,240 | `zig.Ast.render` | `/opt/zig/lib/std/zig/Ast.zig:228` |

##### `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`)

|      % |  Time | Samples | Caller                | Location                           |
| -----: | ----: | ------: | --------------------- | ---------------------------------- |
| 100.0% | 4.24s |   4,240 | `zig.Ast.renderAlloc` | `/opt/zig/lib/std/zig/Ast.zig:217` |

##### `zig.Ast.renderAlloc` (`/opt/zig/lib/std/zig/Ast.zig:217`)

|      % |  Time | Samples | Caller         | Location           |
| -----: | ----: | ------: | -------------- | ------------------ |
| 100.0% | 4.24s |   4,240 | `profile.main` | `./profile.zig:11` |

##### `zig.Ast.Render.renderMembers` (`/opt/zig/lib/std/zig/Ast/Render.zig:122`)

|      % |  Time | Samples | Caller                      | Location                                 |
| -----: | ----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% | 4.23s |   4,235 | `zig.Ast.Render.renderTree` | `/opt/zig/lib/std/zig/Ast/Render.zig:86` |

##### `zig.Ast.Render.renderExpression` (`/opt/zig/lib/std/zig/Ast/Render.zig:314`)

|     % |    Time | Samples | Caller                                      | Location                                   |
| ----: | ------: | ------: | ------------------------------------------- | ------------------------------------------ |
| 59.5% |   2.44s |   2,449 | `zig.Ast.Render.renderMember`               | `/opt/zig/lib/std/zig/Ast/Render.zig:141`  |
| 57.5% |   2.36s |   2,364 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `/opt/zig/lib/std/zig/Ast/Render.zig:1253` |
| 53.3% |   2.19s |   2,192 | `zig.Ast.Render.finishRenderBlock`          | `/opt/zig/lib/std/zig/Ast/Render.zig:2023` |
| 32.7% |   1.34s |   1,344 | `zig.Ast.Render.renderExpression`           | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |
| 19.5% | 804.0ms |     804 | `zig.Ast.Render.renderParamList`            | `/opt/zig/lib/std/zig/Ast/Render.zig:2600` |

##### `zig.Ast.Render.renderMember` (`/opt/zig/lib/std/zig/Ast/Render.zig:141`)

|     % |  Time | Samples | Caller                               | Location                                   |
| ----: | ----: | ------: | ------------------------------------ | ------------------------------------------ |
| 99.6% | 3.67s |   3,673 | `zig.Ast.Render.renderMembers`       | `/opt/zig/lib/std/zig/Ast/Render.zig:122`  |
| 42.6% | 1.57s |   1,571 | `zig.Ast.Render.renderContainerDecl` | `/opt/zig/lib/std/zig/Ast/Render.zig:2344` |

##### `zig.Ast.Render.renderBlock` (`/opt/zig/lib/std/zig/Ast/Render.zig:1998`)

|      % |  Time | Samples | Caller                            | Location                                  |
| -----: | ----: | ------: | --------------------------------- | ----------------------------------------- |
| 100.0% | 2.82s |   2,827 | `zig.Ast.Render.renderExpression` | `/opt/zig/lib/std/zig/Ast/Render.zig:314` |

##### `zig.Ast.Render.finishRenderBlock` (`/opt/zig/lib/std/zig/Ast/Render.zig:2023`)

|      % |  Time | Samples | Caller                       | Location                                   |
| -----: | ----: | ------: | ---------------------------- | ------------------------------------------ |
| 100.0% | 2.81s |   2,813 | `zig.Ast.Render.renderBlock` | `/opt/zig/lib/std/zig/Ast/Render.zig:1998` |

##### `zig.Ast.Render.renderVarDecl` (`/opt/zig/lib/std/zig/Ast/Render.zig:1235`)

|     % |    Time | Samples | Caller                             | Location                                   |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------ |
| 71.5% |   1.82s |   1,829 | `zig.Ast.Render.renderMember`      | `/opt/zig/lib/std/zig/Ast/Render.zig:141`  |
| 34.6% | 885.0ms |     885 | `zig.Ast.Render.finishRenderBlock` | `/opt/zig/lib/std/zig/Ast/Render.zig:2023` |
| <0.1% |   1.0ms |       1 | `zig.Ast.Render.renderExpression`  | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |

##### `zig.Ast.Render.renderVarDeclWithoutFixups` (`/opt/zig/lib/std/zig/Ast/Render.zig:1253`)

|      % |  Time | Samples | Caller                         | Location                                   |
| -----: | ----: | ------: | ------------------------------ | ------------------------------------------ |
| 100.0% | 2.55s |   2,556 | `zig.Ast.Render.renderVarDecl` | `/opt/zig/lib/std/zig/Ast/Render.zig:1235` |

##### `zig.Ast.Render.renderContainerDecl` (`/opt/zig/lib/std/zig/Ast/Render.zig:2344`)

|      % |  Time | Samples | Caller                            | Location                                  |
| -----: | ----: | ------: | --------------------------------- | ----------------------------------------- |
| 100.0% | 1.76s |   1,761 | `zig.Ast.Render.renderExpression` | `/opt/zig/lib/std/zig/Ast/Render.zig:314` |

##### `zig.Ast.Render.renderToken` (`/opt/zig/lib/std/zig/Ast/Render.zig:2720`)

|     % |    Time | Samples | Caller                                      | Location                                   |
| ----: | ------: | ------: | ------------------------------------------- | ------------------------------------------ |
| 43.9% | 708.0ms |     708 | `zig.Ast.Render.renderIdentifier`           | `/opt/zig/lib/std/zig/Ast/Render.zig:2812` |
| 12.9% | 208.0ms |     208 | `zig.Ast.Render.renderParamList`            | `/opt/zig/lib/std/zig/Ast/Render.zig:2600` |
| 10.6% | 171.0ms |     171 | `zig.Ast.Render.renderSpace`                | `/opt/zig/lib/std/zig/Ast/Render.zig:2738` |
|  8.8% | 142.0ms |     142 | `zig.Ast.Render.renderExpression`           | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |
|  5.2% |  84.0ms |      84 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `/opt/zig/lib/std/zig/Ast/Render.zig:1253` |

##### `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:396`)

|     % |    Time | Samples | Caller                               | Location                                   |
| ----: | ------: | ------: | ------------------------------------ | ------------------------------------------ |
| 63.6% |   1.01s |   1,017 | `zig.Ast.tokenSlice`                 | `/opt/zig/lib/std/zig/Ast.zig:276`         |
| 36.3% | 580.0ms |     580 | `zig.Ast.parse`                      | `/opt/zig/lib/std/zig/Ast.zig:145`         |
|  0.1% |   1.0ms |       1 | `start.callMain`                     | `/opt/zig/lib/std/start.zig:696`           |
|  0.1% |   1.0ms |       1 | `zig.Ast.Render.tokenSliceForRender` | `/opt/zig/lib/std/zig/Ast/Render.zig:3168` |

##### `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`)

|      % |  Time | Samples | Caller         | Location           |
| -----: | ----: | ------: | -------------- | ------------------ |
| 100.0% | 1.54s |   1,548 | `profile.main` | `./profile.zig:11` |

##### `zig.Ast.Render.tokenSliceForRender` (`/opt/zig/lib/std/zig/Ast/Render.zig:3168`)

|     % |    Time | Samples | Caller                                   | Location                                   |
| ----: | ------: | ------: | ---------------------------------------- | ------------------------------------------ |
| 45.7% | 661.0ms |     661 | `zig.Ast.Render.renderToken`             | `/opt/zig/lib/std/zig/Ast/Render.zig:2720` |
| 38.9% | 563.0ms |     563 | `zig.Ast.Render.renderIdentifier`        | `/opt/zig/lib/std/zig/Ast/Render.zig:2812` |
| 10.8% | 156.0ms |     156 | `zig.Ast.Render.renderExpression`        | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |
|  3.7% |  53.0ms |      53 | `zig.Ast.Render.renderExtraNewlineToken` | `/opt/zig/lib/std/zig/Ast/Render.zig:3080` |
|  0.4% |   6.0ms |       6 | `zig.Ast.Render.renderArrayInit`         | `/opt/zig/lib/std/zig/Ast/Render.zig:2110` |

##### `zig.Ast.Render.renderIdentifier` (`/opt/zig/lib/std/zig/Ast/Render.zig:2812`)

|     % |    Time | Samples | Caller                                      | Location                                   |
| ----: | ------: | ------: | ------------------------------------------- | ------------------------------------------ |
| 45.7% | 641.0ms |     641 | `zig.Ast.Render.renderExpression`           | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |
| 10.5% | 147.0ms |     147 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `/opt/zig/lib/std/zig/Ast/Render.zig:1253` |
|  8.9% | 125.0ms |     125 | `zig.Ast.Render.renderContainerField`       | `/opt/zig/lib/std/zig/Ast/Render.zig:1577` |
|  8.8% | 124.0ms |     124 | `zig.Ast.Render.renderParamList`            | `/opt/zig/lib/std/zig/Ast/Render.zig:2600` |
|  5.5% |  77.0ms |      77 | `zig.Ast.Render.renderFnProto`              | `/opt/zig/lib/std/zig/Ast/Render.zig:1766` |

##### `openat` (`<unknown>`)

|     % |   Time | Samples | Caller                         | Location                                |
| ----: | -----: | ------: | ------------------------------ | --------------------------------------- |
| 77.8% | 21.0ms |      21 | `Io.Threaded.dirOpenFilePosix` | `/opt/zig/lib/std/Io/Threaded.zig:4789` |
| 22.2% |  6.0ms |       6 | `Io.Threaded.dirOpenDirPosix`  | `/opt/zig/lib/std/Io/Threaded.zig:5237` |

##### `__libc_realloc` (`<unknown>`)

|     % |   Time | Samples | Caller                        | Location                                 |
| ----: | -----: | ------: | ----------------------------- | ---------------------------------------- |
| 96.2% | 25.0ms |      25 | `heap.c_allocator_impl.remap` | `/opt/zig/lib/std/heap.zig:291`          |
|  3.8% |  1.0ms |       1 | `mem.Allocator.rawRemap`      | `/opt/zig/lib/std/mem/Allocator.zig:153` |

##### `preadv` (`<unknown>`)

|      % |   Time | Samples | Caller                                | Location                                |
| -----: | -----: | ------: | ------------------------------------- | --------------------------------------- |
| 100.0% | 19.0ms |      19 | `Io.Threaded.fileReadPositionalPosix` | `/opt/zig/lib/std/Io/Threaded.zig:9766` |

##### `cfree` (`<unknown>`)

|     % |   Time | Samples | Caller                       | Location                                 |
| ----: | -----: | ------: | ---------------------------- | ---------------------------------------- |
| 82.4% | 14.0ms |      14 | `heap.c_allocator_impl.free` | `/opt/zig/lib/std/heap.zig:321`          |
| 17.6% |  3.0ms |       3 | `mem.Allocator.rawFree`      | `/opt/zig/lib/std/mem/Allocator.zig:159` |

##### `__default_morecore` (`<unknown>`)

|      % |   Time | Samples | Caller        | Location    |
| -----: | -----: | ------: | ------------- | ----------- |
| 100.0% | 15.0ms |      15 | `(anonymous)` | `<unknown>` |

##### `brk` (`<unknown>`)

|      % |   Time | Samples | Caller               | Location    |
| -----: | -----: | ------: | -------------------- | ----------- |
| 100.0% | 14.0ms |      14 | `__default_morecore` | `<unknown>` |

##### `close` (`<unknown>`)

|      % |  Time | Samples | Caller                | Location                                 |
| -----: | ----: | ------: | --------------------- | ---------------------------------------- |
| 100.0% | 9.0ms |       9 | `Io.Threaded.closeFd` | `/opt/zig/lib/std/Io/Threaded.zig:18890` |

##### `statx` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location                           |
| -----: | ----: | ------: | -------------- | ---------------------------------- |
| 100.0% | 7.0ms |       7 | `Io.File.stat` | `/opt/zig/lib/std/Io/File.zig:141` |

##### `__libc_malloc` (`<unknown>`)

|      % |  Time | Samples | Caller                        | Location                        |
| -----: | ----: | ------: | ----------------------------- | ------------------------------- |
| 100.0% | 6.0ms |       6 | `heap.c_allocator_impl.alloc` | `/opt/zig/lib/std/heap.zig:208` |

##### `mmap` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `<unknown>` |

##### `malloc_usable_size` (`<unknown>`)

|      % |  Time | Samples | Caller                   | Location                                 |
| -----: | ----: | ------: | ------------------------ | ---------------------------------------- |
| 100.0% | 1.0ms |       1 | `mem.Allocator.rawRemap` | `/opt/zig/lib/std/mem/Allocator.zig:153` |

##### `__sbrk` (`<unknown>`)

|      % |  Time | Samples | Caller               | Location    |
| -----: | ----: | ------: | -------------------- | ----------- |
| 100.0% | 1.0ms |       1 | `__default_morecore` | `<unknown>` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `start.callMain` (`/opt/zig/lib/std/start.zig:696`)

|      % |  Time | Samples | Callee                         | Location                                 |
| -----: | ----: | ------: | ------------------------------ | ---------------------------------------- |
| 100.0% | 5.88s |   5,887 | `profile.main`                 | `./profile.zig:11`                       |
|  <0.1% | 1.0ms |       1 | `zig.tokenizer.Tokenizer.next` | `/opt/zig/lib/std/zig/tokenizer.zig:396` |

##### `start.callMainWithArgs` (`/opt/zig/lib/std/start.zig:629`)

|      % |  Time | Samples | Callee           | Location                         |
| -----: | ----: | ------: | ---------------- | -------------------------------- |
| 100.0% | 5.88s |   5,888 | `start.callMain` | `/opt/zig/lib/std/start.zig:696` |

##### `main` (`/opt/zig/lib/std/start.zig:641`)

|      % |  Time | Samples | Callee                   | Location                         |
| -----: | ----: | ------: | ------------------------ | -------------------------------- |
| 100.0% | 5.88s |   5,888 | `start.callMainWithArgs` | `/opt/zig/lib/std/start.zig:629` |

##### `(anonymous)` (`<unknown>`)

|      % |   Time | Samples | Callee               | Location                         |
| -----: | -----: | ------: | -------------------- | -------------------------------- |
| 100.0% |  5.88s |   5,888 | `main`               | `/opt/zig/lib/std/start.zig:641` |
|   0.4% | 23.0ms |      23 | `(anonymous)`        | `<unknown>`                      |
|   0.3% | 15.0ms |      15 | `__default_morecore` | `<unknown>`                      |
|  <0.1% |  1.0ms |       1 | `mmap`               | `<unknown>`                      |

##### `__libc_start_main` (`<unknown>`)

|      % |  Time | Samples | Callee        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 5.88s |   5,888 | `(anonymous)` | `<unknown>` |

##### `_start` (`/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)

|      % |  Time | Samples | Callee              | Location    |
| -----: | ----: | ------: | ------------------- | ----------- |
| 100.0% | 5.88s |   5,888 | `__libc_start_main` | `<unknown>` |

##### `profile.main` (`./profile.zig:11`)

|     % |   Time | Samples | Callee                                   | Location                                 |
| ----: | -----: | ------: | ---------------------------------------- | ---------------------------------------- |
| 72.0% |  4.24s |   4,240 | `zig.Ast.renderAlloc`                    | `/opt/zig/lib/std/zig/Ast.zig:217`       |
| 26.3% |  1.54s |   1,548 | `zig.Ast.parse`                          | `/opt/zig/lib/std/zig/Ast.zig:145`       |
|  1.2% | 70.0ms |      70 | `Io.Dir.readFileAllocOptions__anon_2739` | `/opt/zig/lib/std/Io/Dir.zig:1346`       |
|  0.3% | 15.0ms |      15 | `Io.Dir.Walker.next`                     | `/opt/zig/lib/std/Io/Dir.zig:365`        |
|  0.2% |  9.0ms |       9 | `mem.Allocator.free__anon_2981`          | `/opt/zig/lib/std/mem/Allocator.zig:443` |

##### `zig.Ast.Render.renderTree` (`/opt/zig/lib/std/zig/Ast/Render.zig:86`)

|     % |  Time | Samples | Callee                                      | Location                                   |
| ----: | ----: | ------: | ------------------------------------------- | ------------------------------------------ |
| 99.9% | 4.23s |   4,235 | `zig.Ast.Render.renderMembers`              | `/opt/zig/lib/std/zig/Ast/Render.zig:122`  |
| <0.1% | 2.0ms |       2 | `zig.Ast.Render.renderContainerDocComments` | `/opt/zig/lib/std/zig/Ast/Render.zig:3139` |
| <0.1% | 1.0ms |       1 | `zig.Ast.Render.renderExtraNewlineToken`    | `/opt/zig/lib/std/zig/Ast/Render.zig:3080` |
| <0.1% | 1.0ms |       1 | `zig.Ast.Render.AutoIndentingStream.deinit` | `/opt/zig/lib/std/zig/Ast/Render.zig:3348` |
| <0.1% | 1.0ms |       1 | `zig.Ast.Render.renderComments`             | `/opt/zig/lib/std/zig/Ast/Render.zig:3011` |

##### `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`)

|      % |  Time | Samples | Callee                      | Location                                 |
| -----: | ----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% | 4.24s |   4,240 | `zig.Ast.Render.renderTree` | `/opt/zig/lib/std/zig/Ast/Render.zig:86` |

##### `zig.Ast.renderAlloc` (`/opt/zig/lib/std/zig/Ast.zig:217`)

|      % |  Time | Samples | Callee           | Location                           |
| -----: | ----: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 4.24s |   4,240 | `zig.Ast.render` | `/opt/zig/lib/std/zig/Ast.zig:228` |

##### `zig.Ast.Render.renderMembers` (`/opt/zig/lib/std/zig/Ast/Render.zig:122`)

|     % |    Time | Samples | Callee                              | Location                                   |
| ----: | ------: | ------: | ----------------------------------- | ------------------------------------------ |
| 86.7% |   3.67s |   3,673 | `zig.Ast.Render.renderMember`       | `/opt/zig/lib/std/zig/Ast/Render.zig:141`  |
| 12.7% | 539.0ms |     539 | `zig.Ast.Render.renderExpression`   | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |
|  0.4% |  18.0ms |      18 | `zig.Ast.Render.renderExtraNewline` | `/opt/zig/lib/std/zig/Ast/Render.zig:3075` |
| <0.1% |   2.0ms |       2 | `zig.Ast.firstToken`                | `/opt/zig/lib/std/zig/Ast.zig:604`         |
| <0.1% |   2.0ms |       2 | `zig.Ast.fullContainerField`        | `/opt/zig/lib/std/zig/Ast.zig:2326`        |

##### `zig.Ast.Render.renderExpression` (`/opt/zig/lib/std/zig/Ast/Render.zig:314`)

|     % |    Time | Samples | Callee                               | Location                                   |
| ----: | ------: | ------: | ------------------------------------ | ------------------------------------------ |
| 68.7% |   2.82s |   2,827 | `zig.Ast.Render.renderBlock`         | `/opt/zig/lib/std/zig/Ast/Render.zig:1998` |
| 42.8% |   1.76s |   1,761 | `zig.Ast.Render.renderContainerDecl` | `/opt/zig/lib/std/zig/Ast/Render.zig:2344` |
| 32.7% |   1.34s |   1,344 | `zig.Ast.Render.renderExpression`    | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |
| 27.8% |   1.14s |   1,144 | `zig.Ast.Render.renderParamList`     | `/opt/zig/lib/std/zig/Ast/Render.zig:2600` |
| 17.4% | 714.0ms |     714 | `zig.Ast.Render.renderExpressions`   | `/opt/zig/lib/std/zig/Ast/Render.zig:305`  |

##### `zig.Ast.Render.renderMember` (`/opt/zig/lib/std/zig/Ast/Render.zig:141`)

|     % |    Time | Samples | Callee                                | Location                                   |
| ----: | ------: | ------: | ------------------------------------- | ------------------------------------------ |
| 66.4% |   2.44s |   2,449 | `zig.Ast.Render.renderExpression`     | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |
| 49.6% |   1.82s |   1,829 | `zig.Ast.Render.renderVarDecl`        | `/opt/zig/lib/std/zig/Ast/Render.zig:1235` |
|  8.7% | 319.0ms |     319 | `zig.Ast.Render.renderContainerField` | `/opt/zig/lib/std/zig/Ast/Render.zig:1577` |
|  1.9% |  69.0ms |      69 | `zig.Ast.Render.renderDocComments`    | `/opt/zig/lib/std/zig/Ast/Render.zig:3108` |
|  0.3% |  10.0ms |      10 | `zig.Ast.Render.renderToken`          | `/opt/zig/lib/std/zig/Ast/Render.zig:2720` |

##### `zig.Ast.Render.renderBlock` (`/opt/zig/lib/std/zig/Ast/Render.zig:1998`)

|     % |   Time | Samples | Callee                             | Location                                   |
| ----: | -----: | ------: | ---------------------------------- | ------------------------------------------ |
| 99.5% |  2.81s |   2,813 | `zig.Ast.Render.finishRenderBlock` | `/opt/zig/lib/std/zig/Ast/Render.zig:2023` |
|  0.8% | 23.0ms |      23 | `zig.Ast.Render.renderToken`       | `/opt/zig/lib/std/zig/Ast/Render.zig:2720` |
|  0.1% |  3.0ms |       3 | `zig.Ast.firstToken`               | `/opt/zig/lib/std/zig/Ast.zig:604`         |
|  0.1% |  2.0ms |       2 | `zig.Ast.Render.renderIdentifier`  | `/opt/zig/lib/std/zig/Ast/Render.zig:2812` |
| <0.1% |  1.0ms |       1 | `zig.Ast.lastToken`                | `/opt/zig/lib/std/zig/Ast.zig:881`         |

##### `zig.Ast.Render.finishRenderBlock` (`/opt/zig/lib/std/zig/Ast/Render.zig:2023`)

|     % |    Time | Samples | Callee                              | Location                                   |
| ----: | ------: | ------: | ----------------------------------- | ------------------------------------------ |
| 77.9% |   2.19s |   2,192 | `zig.Ast.Render.renderExpression`   | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |
| 31.5% | 885.0ms |     885 | `zig.Ast.Render.renderVarDecl`      | `/opt/zig/lib/std/zig/Ast/Render.zig:1235` |
|  2.5% |  69.0ms |      69 | `zig.Ast.Render.renderExtraNewline` | `/opt/zig/lib/std/zig/Ast/Render.zig:3075` |
|  1.2% |  34.0ms |      34 | `zig.Ast.Render.renderToken`        | `/opt/zig/lib/std/zig/Ast/Render.zig:2720` |
|  1.1% |  32.0ms |      32 | `zig.Ast.lastToken`                 | `/opt/zig/lib/std/zig/Ast.zig:881`         |

##### `zig.Ast.Render.renderVarDecl` (`/opt/zig/lib/std/zig/Ast/Render.zig:1235`)

|     % |  Time | Samples | Callee                                                                      | Location                                   |
| ----: | ----: | ------: | --------------------------------------------------------------------------- | ------------------------------------------ |
| 99.9% | 2.55s |   2,556 | `zig.Ast.Render.renderVarDeclWithoutFixups`                                 | `/opt/zig/lib/std/zig/Ast/Render.zig:1253` |
| <0.1% | 1.0ms |       1 | `hash_map.HashMapUnmanaged(u32,void,hash_map.AutoContext(u32),80).contains` | `/opt/zig/lib/std/hash_map.zig:1214`       |

##### `zig.Ast.Render.renderVarDeclWithoutFixups` (`/opt/zig/lib/std/zig/Ast/Render.zig:1253`)

|     % |    Time | Samples | Callee                            | Location                                   |
| ----: | ------: | ------: | --------------------------------- | ------------------------------------------ |
| 92.5% |   2.36s |   2,364 | `zig.Ast.Render.renderExpression` | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |
|  5.8% | 147.0ms |     147 | `zig.Ast.Render.renderIdentifier` | `/opt/zig/lib/std/zig/Ast/Render.zig:2812` |
|  3.3% |  84.0ms |      84 | `zig.Ast.Render.renderToken`      | `/opt/zig/lib/std/zig/Ast/Render.zig:2720` |
|  0.7% |  17.0ms |      17 | `zig.Ast.firstToken`              | `/opt/zig/lib/std/zig/Ast.zig:604`         |
|  0.2% |   4.0ms |       4 | `zig.Ast.tokensOnSameLine`        | `/opt/zig/lib/std/zig/Ast.zig:1318`        |

##### `zig.Ast.Render.renderContainerDecl` (`/opt/zig/lib/std/zig/Ast/Render.zig:2344`)

|     % |    Time | Samples | Callee                                  | Location                                   |
| ----: | ------: | ------: | --------------------------------------- | ------------------------------------------ |
| 89.2% |   1.57s |   1,571 | `zig.Ast.Render.renderMember`           | `/opt/zig/lib/std/zig/Ast/Render.zig:141`  |
|  9.8% | 173.0ms |     173 | `zig.Ast.Render.isOneLineContainerDecl` | `/opt/zig/lib/std/zig/Ast/Render.zig:2316` |
|  2.4% |  42.0ms |      42 | `zig.Ast.Render.renderExtraNewline`     | `/opt/zig/lib/std/zig/Ast/Render.zig:3075` |
|  0.7% |  12.0ms |      12 | `zig.Ast.Render.renderExpression`       | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |
|  0.7% |  12.0ms |      12 | `zig.Ast.Render.renderToken`            | `/opt/zig/lib/std/zig/Ast/Render.zig:2720` |

##### `zig.Ast.Render.renderToken` (`/opt/zig/lib/std/zig/Ast/Render.zig:2720`)

|     % |    Time | Samples | Callee                                        | Location                                   |
| ----: | ------: | ------: | --------------------------------------------- | ------------------------------------------ |
| 41.0% | 661.0ms |     661 | `zig.Ast.Render.tokenSliceForRender`          | `/opt/zig/lib/std/zig/Ast/Render.zig:3168` |
| 36.7% | 591.0ms |     591 | `zig.Ast.Render.renderSpace`                  | `/opt/zig/lib/std/zig/Ast/Render.zig:2738` |
| 20.2% | 325.0ms |     325 | `zig.Ast.Render.AutoIndentingStream.writeAll` | `/opt/zig/lib/std/zig/Ast/Render.zig:3353` |
|  2.9% |  46.0ms |      46 | `zig.Ast.tokenSlice`                          | `/opt/zig/lib/std/zig/Ast.zig:276`         |
|  0.1% |   1.0ms |       1 | `mem.findScalarPos__anon_6382`                | `/opt/zig/lib/std/mem.zig:1241`            |

##### `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:396`)

|     % |    Time | Samples | Callee                           | Location                                |
| ----: | ------: | ------: | -------------------------------- | --------------------------------------- |
| 19.6% | 313.0ms |     313 | `zig.tokenizer.Token.getKeyword` | `/opt/zig/lib/std/zig/tokenizer.zig:61` |

##### `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`)

|     % |    Time | Samples | Callee                                                                                | Location                                    |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------- | ------------------------------------------- |
| 49.6% | 768.0ms |     768 | `zig.Ast.parseTokens`                                                                 | `/opt/zig/lib/std/zig/Ast.zig:168`          |
| 37.5% | 580.0ms |     580 | `zig.tokenizer.Tokenizer.next`                                                        | `/opt/zig/lib/std/zig/tokenizer.zig:396`    |
|  5.4% |  83.0ms |      83 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).append`              | `/opt/zig/lib/std/multi_array_list.zig:273` |
|  5.0% |  77.0ms |      77 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).ensureTotalCapacity` | `/opt/zig/lib/std/multi_array_list.zig:514` |

##### `zig.Ast.Render.tokenSliceForRender` (`/opt/zig/lib/std/zig/Ast/Render.zig:3168`)

|     % |    Time | Samples | Callee                           | Location                                 |
| ----: | ------: | ------: | -------------------------------- | ---------------------------------------- |
| 72.5% |   1.04s |   1,048 | `zig.Ast.tokenSlice`             | `/opt/zig/lib/std/zig/Ast.zig:276`       |
|  9.3% | 134.0ms |     134 | `zig.tokenizer.Token.Tag.lexeme` | `/opt/zig/lib/std/zig/tokenizer.zig:186` |
|  3.1% |  45.0ms |      45 | `zig.Ast.tokenTag`               | `/opt/zig/lib/std/zig/Ast.zig:88`        |
|  0.2% |   3.0ms |       3 | `mem.trimEnd__anon_28242`        | `/opt/zig/lib/std/mem.zig:1191`          |
|  0.1% |   1.0ms |       1 | `zig.tokenizer.Tokenizer.next`   | `/opt/zig/lib/std/zig/tokenizer.zig:396` |

##### `zig.Ast.Render.renderIdentifier` (`/opt/zig/lib/std/zig/Ast/Render.zig:2812`)

|     % |    Time | Samples | Callee                               | Location                                   |
| ----: | ------: | ------: | ------------------------------------ | ------------------------------------------ |
| 50.5% | 708.0ms |     708 | `zig.Ast.Render.renderToken`         | `/opt/zig/lib/std/zig/Ast/Render.zig:2720` |
| 40.2% | 563.0ms |     563 | `zig.Ast.Render.tokenSliceForRender` | `/opt/zig/lib/std/zig/Ast/Render.zig:3168` |
|  2.6% |  37.0ms |      37 | `array_hash_map.Custom.get`          | `/opt/zig/lib/std/array_hash_map.zig:613`  |
|  1.4% |  19.0ms |      19 | `zig.Ast.tokenSlice`                 | `/opt/zig/lib/std/zig/Ast.zig:276`         |
|  0.3% |   4.0ms |       4 | `zig.Ast.tokenTag`                   | `/opt/zig/lib/std/zig/Ast.zig:88`          |

##### `__libc_realloc` (`<unknown>`)

|     % |   Time | Samples | Callee        | Location    |
| ----: | -----: | ------: | ------------- | ----------- |
| 96.2% | 25.0ms |      25 | `(anonymous)` | `<unknown>` |

##### `cfree` (`<unknown>`)

|     % |   Time | Samples | Callee        | Location    |
| ----: | -----: | ------: | ------------- | ----------- |
| 82.4% | 14.0ms |      14 | `(anonymous)` | `<unknown>` |

##### `__default_morecore` (`<unknown>`)

|     % |   Time | Samples | Callee   | Location    |
| ----: | -----: | ------: | -------- | ----------- |
| 93.3% | 14.0ms |      14 | `brk`    | `<unknown>` |
|  6.7% |  1.0ms |       1 | `__sbrk` | `<unknown>` |

##### `__libc_malloc` (`<unknown>`)

|     % |  Time | Samples | Callee        | Location    |
| ----: | ----: | ------: | ------------- | ----------- |
| 66.7% | 4.0ms |       4 | `(anonymous)` | `<unknown>` |

## Hottest call stacks

Call stacks with the most time spent in their leaf frame.

Common call stack: `profile.main` (`./profile.zig:11`) ← `start.callMain` (`/opt/zig/lib/std/start.zig:696`) ← `start.callMainWithArgs` (629) ← `main` (641) ← `(anonymous)` ← `__libc_start_main` ← `_start` (`/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)

|    % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 8.5% | 498.0ms |     498 | `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:396`) ← `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 3.1% | 183.0ms |     183 | `memset` (`/opt/zig/lib/compiler_rt.zig:677`) ← `mem.Allocator.allocBytesWithAlignment__anon_10001` (`/opt/zig/lib/std/mem/Allocator.zig:289`) ← `mem.Allocator.allocWithSizeAndAlignment__anon_9851` (278) ← `mem.Allocator.allocAdvancedWithRetAddr` (265) ← `mem.Allocator.alignedAlloc__anon_9848` (255) ← `multi_array_list.MultiArrayList(zig.Ast.Node).setCapacity` (`/opt/zig/lib/std/multi_array_list.zig:540`) ← `multi_array_list.MultiArrayList(zig.Ast.Node).ensureTotalCapacity` (514) ← `zig.Ast.parseTokens` (`/opt/zig/lib/std/zig/Ast.zig:168`) ← `zig.Ast.parse` (145)                                                                                                                                                                                                                                                                                                                                            |
| 1.3% |  76.0ms |      76 | `memset` (`/opt/zig/lib/compiler_rt.zig:677`) ← `mem.Allocator.allocBytesWithAlignment__anon_10001` (`/opt/zig/lib/std/mem/Allocator.zig:289`) ← `mem.Allocator.allocWithSizeAndAlignment__anon_9851` (278) ← `mem.Allocator.allocAdvancedWithRetAddr` (265) ← `mem.Allocator.alignedAlloc__anon_9848` (255) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).setCapacity` (`/opt/zig/lib/std/multi_array_list.zig:540`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).ensureTotalCapacity` (514) ← `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`)                                                                                                                                                                                                                                                                                                                                      |
| 1.0% |  61.0ms |      61 | `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` (`/opt/zig/lib/std/static_string_map.zig:198`) ← `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).get` (191) ← `zig.tokenizer.Token.getKeyword` (`/opt/zig/lib/std/zig/tokenizer.zig:61`) ← `zig.tokenizer.Tokenizer.next` (396) ← `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.7% |  40.0ms |      40 | `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.6% |  35.0ms |      35 | `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:396`) ← `zig.Ast.tokenSlice` (`/opt/zig/lib/std/zig/Ast.zig:276`) ← `zig.Ast.Render.hasComment` (`/opt/zig/lib/std/zig/Ast/Render.zig:2978`) ← `zig.Ast.Render.isOneLineContainerDecl` (2316) ← `zig.Ast.Render.renderContainerDecl` (2344) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1253) ← `zig.Ast.Render.renderVarDecl` (1235) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`) ← `zig.Ast.renderAlloc` (217)                                                                                                                                                                                                                                                                         |
| 0.5% |  29.0ms |      29 | `memset` (`/opt/zig/lib/compiler_rt.zig:677`) ← `mem.Allocator.allocBytesWithAlignment__anon_10001` (`/opt/zig/lib/std/mem/Allocator.zig:289`) ← `mem.Allocator.allocWithSizeAndAlignment__anon_9851` (278) ← `mem.Allocator.allocAdvancedWithRetAddr` (265) ← `mem.Allocator.alignedAlloc__anon_9848` (255) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).setCapacity` (`/opt/zig/lib/std/multi_array_list.zig:540`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).ensureTotalCapacity` (514) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).ensureUnusedCapacity` (533) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).append` (273) ← `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`)                                                                                                                                                      |
| 0.4% |  23.0ms |      23 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).ensureTotalCapacity` (`/opt/zig/lib/std/multi_array_list.zig:514`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).ensureUnusedCapacity` (533) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).append` (273) ← `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.4% |  23.0ms |      23 | `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:396`) ← `zig.Ast.tokenSlice` (`/opt/zig/lib/std/zig/Ast.zig:276`) ← `zig.Ast.Render.tokenSliceForRender` (`/opt/zig/lib/std/zig/Ast/Render.zig:3168`) ← `zig.Ast.Render.renderIdentifier` (2812) ← `zig.Ast.Render.renderContainerField` (1577) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderContainerDecl` (2344) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1253) ← `zig.Ast.Render.renderVarDecl` (1235) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`) ← `zig.Ast.renderAlloc` (217)                                                                                                                                                                                 |
| 0.4% |  21.0ms |      21 | `static_string_map.defaultEql` (`/opt/zig/lib/std/static_string_map.zig:13`) ← `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` (198) ← `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).get` (191) ← `zig.tokenizer.Token.getKeyword` (`/opt/zig/lib/std/zig/tokenizer.zig:61`) ← `zig.tokenizer.Tokenizer.next` (396) ← `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`)                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.4% |  21.0ms |      21 | `openat` ← `Io.Threaded.dirOpenFilePosix` (`/opt/zig/lib/std/Io/Threaded.zig:4789`) ← `Io.Dir.openFile` (`/opt/zig/lib/std/Io/Dir.zig:577`) ← `Io.Dir.readFileAllocOptions__anon_2739` (1346)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.3% |  19.0ms |      19 | `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:396`) ← `zig.Ast.tokenSlice` (`/opt/zig/lib/std/zig/Ast.zig:276`) ← `zig.Ast.Render.tokenSliceForRender` (`/opt/zig/lib/std/zig/Ast/Render.zig:3168`) ← `zig.Ast.Render.renderToken` (2720) ← `zig.Ast.Render.renderDocComments` (3108) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`) ← `zig.Ast.renderAlloc` (217)                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.3% |  19.0ms |      19 | `preadv` ← `Io.Threaded.fileReadPositionalPosix` (`/opt/zig/lib/std/Io/Threaded.zig:9766`) ← `Io.Threaded.fileReadPositional` (9881) ← `Io.File.Reader.readVecPositional` (`/opt/zig/lib/std/Io/File/Reader.zig:241`) ← `Io.File.Reader.readVec` (232) ← `Io.Reader.readVec` (`/opt/zig/lib/std/Io/Reader.zig:415`) ← `Io.Reader.readSliceShort` (675) ← `Io.Writer.Allocating.sendFile` (`/opt/zig/lib/std/Io/Writer.zig:2725`) ← `Io.Writer.sendFile` (919) ← `Io.File.Reader.streamMode` (`/opt/zig/lib/std/Io/File/Reader.zig:205`) ← `Io.File.Reader.stream` (200) ← `Io.Reader.stream` (`/opt/zig/lib/std/Io/Reader.zig:168`) ← `Io.Reader.appendRemainingAligned__anon_35672` (367) ← `Io.Reader.allocRemainingAlignedSentinel__anon_35655` (299) ← `Io.Dir.readFileAllocOptions__anon_2739` (`/opt/zig/lib/std/Io/Dir.zig:1346`)                                                                                             |
| 0.3% |  17.0ms |      17 | `zig.tokenizer.Token.Tag.lexeme` (`/opt/zig/lib/std/zig/tokenizer.zig:186`) ← `zig.Ast.Render.hasComment` (`/opt/zig/lib/std/zig/Ast/Render.zig:2978`) ← `zig.Ast.Render.isOneLineContainerDecl` (2316) ← `zig.Ast.Render.renderContainerDecl` (2344) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1253) ← `zig.Ast.Render.renderVarDecl` (1235) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`) ← `zig.Ast.renderAlloc` (217)                                                                                                                                                                                                                                                                                                                                   |
| 0.3% |  16.0ms |      16 | `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:396`) ← `zig.Ast.tokenSlice` (`/opt/zig/lib/std/zig/Ast.zig:276`) ← `zig.Ast.Render.tokenSliceForRender` (`/opt/zig/lib/std/zig/Ast/Render.zig:3168`) ← `zig.Ast.Render.renderToken` (2720) ← `zig.Ast.Render.renderDocComments` (3108) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderContainerDecl` (2344) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1253) ← `zig.Ast.Render.renderVarDecl` (1235) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`) ← `zig.Ast.renderAlloc` (217)                                                                                                                                                                                         |
| 0.3% |  16.0ms |      16 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).appendAssumeCapacity` (`/opt/zig/lib/std/multi_array_list.zig:281`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).append` (273) ← `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.3% |  15.0ms |      15 | `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:396`) ← `zig.Ast.tokenSlice` (`/opt/zig/lib/std/zig/Ast.zig:276`) ← `zig.Ast.Render.hasComment` (`/opt/zig/lib/std/zig/Ast/Render.zig:2978`) ← `zig.Ast.Render.renderArrayInit` (2110) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1253) ← `zig.Ast.Render.renderVarDecl` (1235) ← `zig.Ast.Render.finishRenderBlock` (2023) ← `zig.Ast.Render.renderBlock` (1998) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`) ← `zig.Ast.renderAlloc` (217)                                                                                                                                                                                                                                        |
| 0.2% |  13.0ms |      13 | `memset` (`/opt/zig/lib/compiler_rt.zig:677`) ← `Io.Threaded.dirOpenFilePosix` (`/opt/zig/lib/std/Io/Threaded.zig:4789`) ← `Io.Dir.openFile` (`/opt/zig/lib/std/Io/Dir.zig:577`) ← `Io.Dir.readFileAllocOptions__anon_2739` (1346)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.2% |  13.0ms |      13 | `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:396`) ← `zig.Ast.tokenSlice` (`/opt/zig/lib/std/zig/Ast.zig:276`) ← `zig.Ast.Render.tokenSliceForRender` (`/opt/zig/lib/std/zig/Ast/Render.zig:3168`) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderExpressionFixup` (948) ← `zig.Ast.Render.renderStructInit` (2051) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderExpressionComma` (2655) ← `zig.Ast.Render.renderArrayInit` (2110) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1253) ← `zig.Ast.Render.renderVarDecl` (1235) ← `zig.Ast.Render.finishRenderBlock` (2023) ← `zig.Ast.Render.renderBlock` (1998) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`) ← `zig.Ast.renderAlloc` (217) |
| 0.2% |  12.0ms |      12 | `mem.findScalarPos__anon_6382` (`/opt/zig/lib/std/mem.zig:1241`) ← `mem.findScalar__anon_6379` (1219) ← `zig.Ast.Render.hasComment` (`/opt/zig/lib/std/zig/Ast/Render.zig:2978`) ← `zig.Ast.Render.isOneLineContainerDecl` (2316) ← `zig.Ast.Render.renderContainerDecl` (2344) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1253) ← `zig.Ast.Render.renderVarDecl` (1235) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`) ← `zig.Ast.renderAlloc` (217)                                                                                                                                                                                                                                                                                                         |
