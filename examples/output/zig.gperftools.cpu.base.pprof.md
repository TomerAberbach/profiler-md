# CPU profile

Took 5.82s over 5,822 samples (1.0ms per sample).

| Category         |      % |  Time | Samples |
| ---------------- | -----: | ----: | ------: |
| Standard library | 100.0% | 5.82s |   5,822 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

#### Categories

##### Standard library

|     % |    Time | Samples | Function                                                                                             | Location                                   |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| 22.6% |   1.31s |   1,313 | `zig.tokenizer.Tokenizer.next`                                                                       | `../opt/zig/lib/std/zig/tokenizer.zig`     |
|  5.9% | 345.0ms |     345 | `memset`                                                                                             | `../opt/zig/lib/compiler_rt.zig`           |
|  4.4% | 255.0ms |     255 | `zig.Ast.tokenSlice`                                                                                 | `../opt/zig/lib/std/zig/Ast.zig`           |
|  4.4% | 255.0ms |     255 | `zig.Ast.Render.tokenSliceForRender`                                                                 | `../opt/zig/lib/std/zig/Ast/Render.zig`    |
|  3.9% | 228.0ms |     228 | `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` | `../opt/zig/lib/std/static_string_map.zig` |
|  3.6% | 209.0ms |     209 | `zig.Ast.Render.renderExpression`                                                                    | `../opt/zig/lib/std/zig/Ast/Render.zig`    |
|  3.3% | 192.0ms |     192 | `zig.Ast.Render.renderSpace`                                                                         | `../opt/zig/lib/std/zig/Ast/Render.zig`    |
|  2.9% | 170.0ms |     170 | `zig.Ast.Render.renderComments`                                                                      | `../opt/zig/lib/std/zig/Ast/Render.zig`    |
|  2.9% | 170.0ms |     170 | `zig.tokenizer.Token.Tag.lexeme`                                                                     | `../opt/zig/lib/std/zig/tokenizer.zig`     |
|  2.5% | 144.0ms |     144 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_28815`                              | `../opt/zig/lib/std/multi_array_list.zig`  |
|  2.3% | 132.0ms |     132 | `mem.findScalarPos__anon_6382`                                                                       | `../opt/zig/lib/std/mem.zig`               |
|  1.7% | 101.0ms |     101 | `zig.Ast.tokenTag`                                                                                   | `../opt/zig/lib/std/zig/Ast.zig`           |
|  1.4% |  80.0ms |      80 | `Io.Writer.write`                                                                                    | `../opt/zig/lib/std/Io/Writer.zig`         |
|  1.4% |  79.0ms |      79 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32262`                              | `../opt/zig/lib/std/multi_array_list.zig`  |
|  1.4% |  79.0ms |      79 | `zig.Ast.lastToken`                                                                                  | `../opt/zig/lib/std/zig/Ast.zig`           |
|  1.3% |  75.0ms |      75 | `zig.Ast.Render.renderIdentifier`                                                                    | `../opt/zig/lib/std/zig/Ast/Render.zig`    |
|  1.1% |  64.0ms |      64 | `static_string_map.defaultEql`                                                                       | `../opt/zig/lib/std/static_string_map.zig` |
|  1.0% |  61.0ms |      61 | `zig.Parse.tokenTag`                                                                                 | `../opt/zig/lib/std/zig/Parse.zig`         |
|  1.0% |  57.0ms |      57 | `zig.Ast.firstToken`                                                                                 | `../opt/zig/lib/std/zig/Ast.zig`           |
|  1.0% |  57.0ms |      57 | `zig.Parse.parseSuffixOp`                                                                            | `../opt/zig/lib/std/zig/Parse.zig`         |

#### Lines

Lines ranked by contribution to each function's self time.

##### `zig.tokenizer.Tokenizer.next` (`../opt/zig/lib/std/zig/tokenizer.zig`)

|     % |    Time | Samples | Location                                    |
| ----: | ------: | ------: | ------------------------------------------- |
| 19.2% | 252.0ms |     252 | `../opt/zig/lib/std/zig/tokenizer.zig:666`  |
| 16.7% | 219.0ms |     219 | `../opt/zig/lib/std/zig/tokenizer.zig:667`  |
| 11.1% | 146.0ms |     146 | `../opt/zig/lib/std/zig/tokenizer.zig:670`  |
|  9.9% | 130.0ms |     130 | `../opt/zig/lib/std/zig/tokenizer.zig:405`  |
|  6.1% |  80.0ms |      80 | `../opt/zig/lib/std/zig/tokenizer.zig:1033` |

##### `memset` (`../opt/zig/lib/compiler_rt.zig`)

|     % |    Time | Samples | Location                             |
| ----: | ------: | ------: | ------------------------------------ |
| 89.3% | 308.0ms |     308 | `../opt/zig/lib/compiler_rt.zig:686` |
|  4.1% |  14.0ms |      14 | `../opt/zig/lib/compiler_rt.zig:684` |
|  2.6% |   9.0ms |       9 | `../opt/zig/lib/compiler_rt.zig:685` |

##### `zig.Ast.tokenSlice` (`../opt/zig/lib/std/zig/Ast.zig`)

|     % |   Time | Samples | Location                             |
| ----: | -----: | ------: | ------------------------------------ |
| 36.9% | 94.0ms |      94 | `../opt/zig/lib/std/zig/Ast.zig:276` |
| 13.3% | 34.0ms |      34 | `../opt/zig/lib/std/zig/Ast.zig:277` |
|  8.6% | 22.0ms |      22 | `../opt/zig/lib/std/zig/Ast.zig:291` |
|  5.9% | 15.0ms |      15 | `../opt/zig/lib/std/zig/Ast.zig:286` |
|  2.7% |  7.0ms |       7 | `../opt/zig/lib/std/zig/Ast.zig:289` |

##### `zig.Ast.Render.tokenSliceForRender` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Location                                     |
| ----: | ------: | ------: | -------------------------------------------- |
| 66.3% | 169.0ms |     169 | `../opt/zig/lib/std/zig/Ast/Render.zig:3168` |
| 11.4% |  29.0ms |      29 | `../opt/zig/lib/std/zig/Ast/Render.zig:3169` |
|  9.8% |  25.0ms |      25 | `../opt/zig/lib/std/zig/Ast/Render.zig:3176` |
|  2.0% |   5.0ms |       5 | `../opt/zig/lib/std/zig/Ast/Render.zig:3170` |

##### `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` (`../opt/zig/lib/std/static_string_map.zig`)

|     % |    Time | Samples | Location                                       |
| ----: | ------: | ------: | ---------------------------------------------- |
| 47.8% | 109.0ms |     109 | `../opt/zig/lib/std/static_string_map.zig:208` |
| 43.0% |  98.0ms |      98 | `../opt/zig/lib/std/static_string_map.zig:213` |
|  4.8% |  11.0ms |      11 | `../opt/zig/lib/std/static_string_map.zig:203` |
|  2.2% |   5.0ms |       5 | `../opt/zig/lib/std/static_string_map.zig:209` |
|  0.9% |   2.0ms |       2 | `../opt/zig/lib/std/static_string_map.zig:206` |

##### `zig.Ast.Render.renderExpression` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |   Time | Samples | Location                                    |
| ----: | -----: | ------: | ------------------------------------------- |
| 20.6% | 43.0ms |      43 | `../opt/zig/lib/std/zig/Ast/Render.zig:317` |
| 11.5% | 24.0ms |      24 | `../opt/zig/lib/std/zig/Ast/Render.zig:326` |
| 11.5% | 24.0ms |      24 | `../opt/zig/lib/std/zig/Ast/Render.zig:315` |
|  7.2% | 15.0ms |      15 | `../opt/zig/lib/std/zig/Ast/Render.zig:314` |
|  6.2% | 13.0ms |      13 | `../opt/zig/lib/std/zig/Ast/Render.zig:447` |

##### `zig.Ast.Render.renderSpace` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |   Time | Samples | Location                                     |
| ----: | -----: | ------: | -------------------------------------------- |
| 18.2% | 35.0ms |      35 | `../opt/zig/lib/std/zig/Ast/Render.zig:2751` |
| 14.6% | 28.0ms |      28 | `../opt/zig/lib/std/zig/Ast/Render.zig:2756` |
| 12.0% | 23.0ms |      23 | `../opt/zig/lib/std/zig/Ast/Render.zig:2742` |
|  8.9% | 17.0ms |      17 | `../opt/zig/lib/std/zig/Ast/Render.zig:2744` |
|  5.2% | 10.0ms |      10 | `../opt/zig/lib/std/zig/Ast/Render.zig:2739` |

##### `zig.Ast.Render.renderComments` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |   Time | Samples | Location                                     |
| ----: | -----: | ------: | -------------------------------------------- |
| 41.8% | 71.0ms |      71 | `../opt/zig/lib/std/zig/Ast/Render.zig:3016` |
| 16.5% | 28.0ms |      28 | `../opt/zig/lib/std/zig/Ast/Render.zig:3072` |
|  1.8% |  3.0ms |       3 | `../opt/zig/lib/std/zig/Ast/Render.zig:3065` |

##### `zig.tokenizer.Token.Tag.lexeme` (`../opt/zig/lib/std/zig/tokenizer.zig`)

|     % |   Time | Samples | Location                                   |
| ----: | -----: | ------: | ------------------------------------------ |
| 30.6% | 52.0ms |      52 | `../opt/zig/lib/std/zig/tokenizer.zig:187` |
|  4.1% |  7.0ms |       7 | `../opt/zig/lib/std/zig/tokenizer.zig:186` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_28815` (`../opt/zig/lib/std/multi_array_list.zig`)

|      % |    Time | Samples | Location                                      |
| -----: | ------: | ------: | --------------------------------------------- |
| 100.0% | 144.0ms |     144 | `../opt/zig/lib/std/multi_array_list.zig:102` |

##### `mem.findScalarPos__anon_6382` (`../opt/zig/lib/std/mem.zig`)

|     % |   Time | Samples | Location                          |
| ----: | -----: | ------: | --------------------------------- |
| 31.8% | 42.0ms |      42 | `../opt/zig/lib/std/mem.zig:1297` |
|  9.8% | 13.0ms |      13 | `../opt/zig/lib/std/mem.zig:1285` |
|  9.1% | 12.0ms |      12 | `../opt/zig/lib/std/mem.zig:1263` |
|  5.3% |  7.0ms |       7 | `../opt/zig/lib/std/mem.zig:1284` |
|  5.3% |  7.0ms |       7 | `../opt/zig/lib/std/mem.zig:1241` |

##### `zig.Ast.tokenTag` (`../opt/zig/lib/std/zig/Ast.zig`)

|     % |   Time | Samples | Location                            |
| ----: | -----: | ------: | ----------------------------------- |
| 79.2% | 80.0ms |      80 | `../opt/zig/lib/std/zig/Ast.zig:89` |

##### `Io.Writer.write` (`../opt/zig/lib/std/Io/Writer.zig`)

|     % |   Time | Samples | Location                               |
| ----: | -----: | ------: | -------------------------------------- |
| 46.3% | 37.0ms |      37 | `../opt/zig/lib/std/Io/Writer.zig:535` |
| 32.5% | 26.0ms |      26 | `../opt/zig/lib/std/Io/Writer.zig:533` |
| 21.3% | 17.0ms |      17 | `../opt/zig/lib/std/Io/Writer.zig:536` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32262` (`../opt/zig/lib/std/multi_array_list.zig`)

|     % |   Time | Samples | Location                                      |
| ----: | -----: | ------: | --------------------------------------------- |
| 97.5% | 77.0ms |      77 | `../opt/zig/lib/std/multi_array_list.zig:102` |
|  2.5% |  2.0ms |       2 | `../opt/zig/lib/std/multi_array_list.zig:109` |

##### `zig.Ast.lastToken` (`../opt/zig/lib/std/zig/Ast.zig`)

|     % |   Time | Samples | Location                              |
| ----: | -----: | ------: | ------------------------------------- |
| 53.2% | 42.0ms |      42 | `../opt/zig/lib/std/zig/Ast.zig:881`  |
|  7.6% |  6.0ms |       6 | `../opt/zig/lib/std/zig/Ast.zig:884`  |
|  2.5% |  2.0ms |       2 | `../opt/zig/lib/std/zig/Ast.zig:1013` |

##### `zig.Ast.Render.renderIdentifier` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |   Time | Samples | Location                                     |
| ----: | -----: | ------: | -------------------------------------------- |
| 60.0% | 45.0ms |      45 | `../opt/zig/lib/std/zig/Ast/Render.zig:2813` |
|  8.0% |  6.0ms |       6 | `../opt/zig/lib/std/zig/Ast/Render.zig:2823` |
|  5.3% |  4.0ms |       4 | `../opt/zig/lib/std/zig/Ast/Render.zig:2812` |
|  2.7% |  2.0ms |       2 | `../opt/zig/lib/std/zig/Ast/Render.zig:2815` |

##### `static_string_map.defaultEql` (`../opt/zig/lib/std/static_string_map.zig`)

|     % |   Time | Samples | Location                                      |
| ----: | -----: | ------: | --------------------------------------------- |
| 93.8% | 60.0ms |      60 | `../opt/zig/lib/std/static_string_map.zig:15` |
|  4.7% |  3.0ms |       3 | `../opt/zig/lib/std/static_string_map.zig:16` |
|  1.6% |  1.0ms |       1 | `../opt/zig/lib/std/static_string_map.zig:14` |

##### `zig.Parse.tokenTag` (`../opt/zig/lib/std/zig/Parse.zig`)

|      % |   Time | Samples | Location                              |
| -----: | -----: | ------: | ------------------------------------- |
| 100.0% | 61.0ms |      61 | `../opt/zig/lib/std/zig/Parse.zig:15` |

##### `zig.Ast.firstToken` (`../opt/zig/lib/std/zig/Ast.zig`)

|     % |   Time | Samples | Location                             |
| ----: | -----: | ------: | ------------------------------------ |
| 63.2% | 36.0ms |      36 | `../opt/zig/lib/std/zig/Ast.zig:604` |
|  7.0% |  4.0ms |       4 | `../opt/zig/lib/std/zig/Ast.zig:607` |
|  3.5% |  2.0ms |       2 | `../opt/zig/lib/std/zig/Ast.zig:846` |
|  3.5% |  2.0ms |       2 | `../opt/zig/lib/std/zig/Ast.zig:753` |

##### `zig.Parse.parseSuffixOp` (`../opt/zig/lib/std/zig/Parse.zig`)

|      % |   Time | Samples | Location                                |
| -----: | -----: | ------: | --------------------------------------- |
| 100.0% | 57.0ms |      57 | `../opt/zig/lib/std/zig/Parse.zig:3202` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `zig.tokenizer.Tokenizer.next` (`../opt/zig/lib/std/zig/tokenizer.zig`)

|     % |    Time | Samples | Caller                               | Location                                |
| ----: | ------: | ------: | ------------------------------------ | --------------------------------------- |
| 60.6% | 796.0ms |     796 | `zig.Ast.tokenSlice`                 | `../opt/zig/lib/std/zig/Ast.zig`        |
| 39.3% | 516.0ms |     516 | `zig.Ast.parse`                      | `../opt/zig/lib/std/zig/Ast.zig`        |
|  0.1% |   1.0ms |       1 | `zig.Ast.Render.tokenSliceForRender` | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `memset` (`../opt/zig/lib/compiler_rt.zig`)

|     % |    Time | Samples | Caller                                                                | Location                               |
| ----: | ------: | ------: | --------------------------------------------------------------------- | -------------------------------------- |
| 76.8% | 265.0ms |     265 | `mem.Allocator.allocBytesWithAlignment__anon_10001`                   | `../opt/zig/lib/std/mem/Allocator.zig` |
|  7.0% |  24.0ms |      24 | `array_list.Aligned(zig.Ast.Node.Index,null).shrinkRetainingCapacity` | `../opt/zig/lib/std/array_list.zig`    |
|  6.4% |  22.0ms |      22 | `Io.Writer.splatByte`                                                 | `../opt/zig/lib/std/Io/Writer.zig`     |
|  4.3% |  15.0ms |      15 | `Io.Threaded.dirOpenFilePosix`                                        | `../opt/zig/lib/std/Io/Threaded.zig`   |
|  3.2% |  11.0ms |      11 | `mem.Allocator.free__anon_31635`                                      | `../opt/zig/lib/std/mem/Allocator.zig` |

##### `zig.Ast.tokenSlice` (`../opt/zig/lib/std/zig/Ast.zig`)

|     % |    Time | Samples | Caller                               | Location                                |
| ----: | ------: | ------: | ------------------------------------ | --------------------------------------- |
| 65.1% | 166.0ms |     166 | `zig.Ast.Render.tokenSliceForRender` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 14.1% |  36.0ms |      36 | `zig.Ast.Render.renderToken`         | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 11.8% |  30.0ms |      30 | `zig.Ast.Render.hasComment`          | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  4.3% |  11.0ms |      11 | `zig.Ast.Render.renderIdentifier`    | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  2.4% |   6.0ms |       6 | `zig.Ast.Render.renderExpression`    | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.tokenSliceForRender` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Caller                                   | Location                                |
| ----: | ------: | ------: | ---------------------------------------- | --------------------------------------- |
| 58.8% | 150.0ms |     150 | `zig.Ast.Render.renderToken`             | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 19.2% |  49.0ms |      49 | `zig.Ast.Render.renderIdentifier`        | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 16.1% |  41.0ms |      41 | `zig.Ast.Render.renderExpression`        | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  2.7% |   7.0ms |       7 | `zig.Ast.Render.renderExtraNewlineToken` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  1.2% |   3.0ms |       3 | `zig.Ast.Render.renderParamList`         | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` (`../opt/zig/lib/std/static_string_map.zig`)

|      % |    Time | Samples | Caller                                                                                          | Location                                   |
| -----: | ------: | ------: | ----------------------------------------------------------------------------------------------- | ------------------------------------------ |
| 100.0% | 228.0ms |     228 | `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).get` | `../opt/zig/lib/std/static_string_map.zig` |

##### `zig.Ast.Render.renderExpression` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |   Time | Samples | Caller                                      | Location                                |
| ----: | -----: | ------: | ------------------------------------------- | --------------------------------------- |
| 29.7% | 62.0ms |      62 | `zig.Ast.Render.renderExpression`           | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 23.9% | 50.0ms |      50 | `zig.Ast.Render.renderParamList`            | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  8.6% | 18.0ms |      18 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  7.7% | 16.0ms |      16 | `zig.Ast.Render.finishRenderBlock`          | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  6.7% | 14.0ms |      14 | `zig.Ast.Render.renderCall`                 | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.renderSpace` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Caller                            | Location                                |
| ----: | ------: | ------: | --------------------------------- | --------------------------------------- |
| 88.0% | 169.0ms |     169 | `zig.Ast.Render.renderToken`      | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 10.4% |  20.0ms |      20 | `zig.Ast.Render.renderExpression` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  1.0% |   2.0ms |       2 | `zig.Ast.Render.renderIdentifier` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.5% |   1.0ms |       1 | `zig.Ast.Render.renderWhile`      | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.renderComments` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|      % |    Time | Samples | Caller                       | Location                                |
| -----: | ------: | ------: | ---------------------------- | --------------------------------------- |
| 100.0% | 170.0ms |     170 | `zig.Ast.Render.renderSpace` | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.tokenizer.Token.Tag.lexeme` (`../opt/zig/lib/std/zig/tokenizer.zig`)

|     % |    Time | Samples | Caller                               | Location                                |
| ----: | ------: | ------: | ------------------------------------ | --------------------------------------- |
| 73.5% | 125.0ms |     125 | `zig.Ast.Render.tokenSliceForRender` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 24.1% |  41.0ms |      41 | `zig.Ast.Render.hasComment`          | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  1.8% |   3.0ms |       3 | `zig.Ast.Render.renderExpression`    | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.6% |   1.0ms |       1 | `zig.Parse.parseExpr`                | `../opt/zig/lib/std/zig/Parse.zig`      |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_28815` (`../opt/zig/lib/std/multi_array_list.zig`)

|     % |    Time | Samples | Caller                                                            | Location                                  |
| ----: | ------: | ------: | ----------------------------------------------------------------- | ----------------------------------------- |
| 99.3% | 143.0ms |     143 | `zig.Ast.nodeData`                                                | `../opt/zig/lib/std/zig/Ast.zig`          |
|  0.7% |   1.0ms |       1 | `multi_array_list.MultiArrayList(zig.Ast.Node).items__anon_32830` | `../opt/zig/lib/std/multi_array_list.zig` |

##### `mem.findScalarPos__anon_6382` (`../opt/zig/lib/std/mem.zig`)

|     % |    Time | Samples | Caller                                      | Location                                |
| ----: | ------: | ------: | ------------------------------------------- | --------------------------------------- |
| 94.7% | 125.0ms |     125 | `mem.findScalar__anon_6379`                 | `../opt/zig/lib/std/mem.zig`            |
|  1.5% |   2.0ms |       2 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  1.5% |   2.0ms |       2 | `zig.Ast.Render.renderExpression`           | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.8% |   1.0ms |       1 | `zig.Ast.Render.isOneLineContainerDecl`     | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.8% |   1.0ms |       1 | `zig.Ast.Render.isOneLineFnProto`           | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.tokenTag` (`../opt/zig/lib/std/zig/Ast.zig`)

|     % |   Time | Samples | Caller                               | Location                                |
| ----: | -----: | ------: | ------------------------------------ | --------------------------------------- |
| 31.7% | 32.0ms |      32 | `zig.Ast.Render.tokenSliceForRender` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 29.7% | 30.0ms |      30 | `zig.Ast.Render.renderSpace`         | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 26.7% | 27.0ms |      27 | `zig.Ast.tokenSlice`                 | `../opt/zig/lib/std/zig/Ast.zig`        |
|  5.0% |  5.0ms |       5 | `zig.Ast.Render.renderIdentifier`    | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  2.0% |  2.0ms |       2 | `zig.Ast.Render.renderExpression`    | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `Io.Writer.write` (`../opt/zig/lib/std/Io/Writer.zig`)

|      % |   Time | Samples | Caller               | Location                           |
| -----: | -----: | ------: | -------------------- | ---------------------------------- |
| 100.0% | 80.0ms |      80 | `Io.Writer.writeAll` | `../opt/zig/lib/std/Io/Writer.zig` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32262` (`../opt/zig/lib/std/multi_array_list.zig`)

|      % |   Time | Samples | Caller                  | Location                         |
| -----: | -----: | ------: | ----------------------- | -------------------------------- |
| 100.0% | 79.0ms |      79 | `zig.Ast.nodeMainToken` | `../opt/zig/lib/std/zig/Ast.zig` |

##### `zig.Ast.lastToken` (`../opt/zig/lib/std/zig/Ast.zig`)

|     % |   Time | Samples | Caller                                 | Location                                |
| ----: | -----: | ------: | -------------------------------------- | --------------------------------------- |
| 25.3% | 20.0ms |      20 | `zig.Ast.Render.renderExpression`      | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 17.7% | 14.0ms |      14 | `zig.Ast.Render.renderParamList`       | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 15.2% | 12.0ms |      12 | `zig.Ast.Render.renderArrayInit`       | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 13.9% | 11.0ms |      11 | `zig.Ast.Render.renderExpressionComma` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  6.3% |  5.0ms |       5 | `zig.Ast.Render.renderStructInit`      | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.renderIdentifier` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |   Time | Samples | Caller                                      | Location                                |
| ----: | -----: | ------: | ------------------------------------------- | --------------------------------------- |
| 45.3% | 34.0ms |      34 | `zig.Ast.Render.renderExpression`           | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 10.7% |  8.0ms |       8 | `zig.Ast.Render.renderParamList`            | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 10.7% |  8.0ms |       8 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  9.3% |  7.0ms |       7 | `zig.Ast.Render.renderFnProto`              | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  6.7% |  5.0ms |       5 | `zig.Ast.Render.renderContainerField`       | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `static_string_map.defaultEql` (`../opt/zig/lib/std/static_string_map.zig`)

|      % |   Time | Samples | Caller                                                                                               | Location                                   |
| -----: | -----: | ------: | ---------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| 100.0% | 64.0ms |      64 | `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` | `../opt/zig/lib/std/static_string_map.zig` |

##### `zig.Parse.tokenTag` (`../opt/zig/lib/std/zig/Parse.zig`)

|     % |   Time | Samples | Caller                           | Location                           |
| ----: | -----: | ------: | -------------------------------- | ---------------------------------- |
| 39.3% | 24.0ms |      24 | `zig.Parse.eatToken`             | `../opt/zig/lib/std/zig/Parse.zig` |
| 11.5% |  7.0ms |       7 | `zig.Parse.parsePrefixExpr`      | `../opt/zig/lib/std/zig/Parse.zig` |
| 11.5% |  7.0ms |       7 | `zig.Parse.parseSuffixOp`        | `../opt/zig/lib/std/zig/Parse.zig` |
|  6.6% |  4.0ms |       4 | `zig.Parse.parseExprPrecedence`  | `../opt/zig/lib/std/zig/Parse.zig` |
|  6.6% |  4.0ms |       4 | `zig.Parse.parsePrimaryTypeExpr` | `../opt/zig/lib/std/zig/Parse.zig` |

##### `zig.Ast.firstToken` (`../opt/zig/lib/std/zig/Ast.zig`)

|     % |   Time | Samples | Caller                              | Location                                |
| ----: | -----: | ------: | ----------------------------------- | --------------------------------------- |
| 26.3% | 15.0ms |      15 | `zig.Ast.Render.renderExtraNewline` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 10.5% |  6.0ms |       6 | `zig.Ast.Render.renderPtrType`      | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  8.8% |  5.0ms |       5 | `zig.Ast.Render.renderMember`       | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  8.8% |  5.0ms |       5 | `zig.Ast.Render.renderSwitchCase`   | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  7.0% |  4.0ms |       4 | `zig.Ast.Render.renderArrayInit`    | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Parse.parseSuffixOp` (`../opt/zig/lib/std/zig/Parse.zig`)

|      % |   Time | Samples | Caller                      | Location                           |
| -----: | -----: | ------: | --------------------------- | ---------------------------------- |
| 100.0% | 57.0ms |      57 | `zig.Parse.parseSuffixExpr` | `../opt/zig/lib/std/zig/Parse.zig` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |  Time | Samples | Function                                    | Location                                            |
| -----: | ----: | ------: | ------------------------------------------- | --------------------------------------------------- |
| 100.0% | 5.82s |   5,822 | `start.callMain`                            | `../opt/zig/lib/std/start.zig`                      |
| 100.0% | 5.82s |   5,822 | `start.callMainWithArgs`                    | `../opt/zig/lib/std/start.zig`                      |
| 100.0% | 5.82s |   5,822 | `start.main`                                | `../opt/zig/lib/std/start.zig`                      |
| 100.0% | 5.82s |   5,822 | `_start`                                    | `../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
|  99.9% | 5.81s |   5,817 | `profile.main`                              | `profile.zig`                                       |
|  71.2% | 4.14s |   4,143 | `zig.Ast.Render.renderTree`                 | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  71.2% | 4.14s |   4,143 | `zig.Ast.render`                            | `../opt/zig/lib/std/zig/Ast.zig`                    |
|  71.2% | 4.14s |   4,143 | `zig.Ast.renderAlloc`                       | `../opt/zig/lib/std/zig/Ast.zig`                    |
|  71.0% | 4.13s |   4,135 | `zig.Ast.Render.renderMembers`              | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  69.4% | 4.04s |   4,041 | `zig.Ast.Render.renderExpression`           | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  61.8% | 3.59s |   3,598 | `zig.Ast.Render.renderMember`               | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  47.7% | 2.78s |   2,780 | `zig.Ast.Render.renderBlock`                | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  47.6% | 2.76s |   2,769 | `zig.Ast.Render.finishRenderBlock`          | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  42.7% | 2.48s |   2,487 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  42.7% | 2.48s |   2,487 | `zig.Ast.Render.renderVarDecl`              | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  28.9% | 1.68s |   1,684 | `zig.Ast.Render.renderContainerDecl`        | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  27.6% | 1.60s |   1,605 | `zig.tokenizer.Tokenizer.next`              | `../opt/zig/lib/std/zig/tokenizer.zig`              |
|  27.1% | 1.57s |   1,576 | `zig.Ast.Render.renderToken`                | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  27.0% | 1.57s |   1,570 | `zig.Ast.parse`                             | `../opt/zig/lib/std/zig/Ast.zig`                    |
|  24.5% | 1.42s |   1,429 | `zig.Ast.Render.tokenSliceForRender`        | `../opt/zig/lib/std/zig/Ast/Render.zig`             |

#### Categories

##### Standard library

|      % |  Time | Samples | Function                                    | Location                                            |
| -----: | ----: | ------: | ------------------------------------------- | --------------------------------------------------- |
| 100.0% | 5.82s |   5,822 | `start.callMain`                            | `../opt/zig/lib/std/start.zig`                      |
| 100.0% | 5.82s |   5,822 | `start.callMainWithArgs`                    | `../opt/zig/lib/std/start.zig`                      |
| 100.0% | 5.82s |   5,822 | `start.main`                                | `../opt/zig/lib/std/start.zig`                      |
| 100.0% | 5.82s |   5,822 | `_start`                                    | `../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
|  71.2% | 4.14s |   4,143 | `zig.Ast.Render.renderTree`                 | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  71.2% | 4.14s |   4,143 | `zig.Ast.render`                            | `../opt/zig/lib/std/zig/Ast.zig`                    |
|  71.2% | 4.14s |   4,143 | `zig.Ast.renderAlloc`                       | `../opt/zig/lib/std/zig/Ast.zig`                    |
|  71.0% | 4.13s |   4,135 | `zig.Ast.Render.renderMembers`              | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  69.4% | 4.04s |   4,041 | `zig.Ast.Render.renderExpression`           | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  61.8% | 3.59s |   3,598 | `zig.Ast.Render.renderMember`               | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  47.7% | 2.78s |   2,780 | `zig.Ast.Render.renderBlock`                | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  47.6% | 2.76s |   2,769 | `zig.Ast.Render.finishRenderBlock`          | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  42.7% | 2.48s |   2,487 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  42.7% | 2.48s |   2,487 | `zig.Ast.Render.renderVarDecl`              | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  28.9% | 1.68s |   1,684 | `zig.Ast.Render.renderContainerDecl`        | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  27.6% | 1.60s |   1,605 | `zig.tokenizer.Tokenizer.next`              | `../opt/zig/lib/std/zig/tokenizer.zig`              |
|  27.1% | 1.57s |   1,576 | `zig.Ast.Render.renderToken`                | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  27.0% | 1.57s |   1,570 | `zig.Ast.parse`                             | `../opt/zig/lib/std/zig/Ast.zig`                    |
|  24.5% | 1.42s |   1,429 | `zig.Ast.Render.tokenSliceForRender`        | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  23.1% | 1.34s |   1,347 | `zig.Ast.Render.renderIdentifier`           | `../opt/zig/lib/std/zig/Ast/Render.zig`             |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `start.callMain` (`../opt/zig/lib/std/start.zig`)

|     % |  Time | Samples | Callee                                                                                | Location                                  |
| ----: | ----: | ------: | ------------------------------------------------------------------------------------- | ----------------------------------------- |
| 99.9% | 5.81s |   5,817 | `profile.main`                                                                        | `profile.zig`                             |
|  0.1% | 3.0ms |       3 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2756).ensureTotalCapacity` | `../opt/zig/lib/std/multi_array_list.zig` |
| <0.1% | 1.0ms |       1 | `Io.Writer.Allocating.toOwnedSlice`                                                   | `../opt/zig/lib/std/Io/Writer.zig`        |
| <0.1% | 1.0ms |       1 | `zig.Parse.parseContainerMembers`                                                     | `../opt/zig/lib/std/zig/Parse.zig`        |

##### `start.callMainWithArgs` (`../opt/zig/lib/std/start.zig`)

|      % |  Time | Samples | Callee           | Location                       |
| -----: | ----: | ------: | ---------------- | ------------------------------ |
| 100.0% | 5.82s |   5,822 | `start.callMain` | `../opt/zig/lib/std/start.zig` |

##### `start.main` (`../opt/zig/lib/std/start.zig`)

|      % |  Time | Samples | Callee                   | Location                       |
| -----: | ----: | ------: | ------------------------ | ------------------------------ |
| 100.0% | 5.82s |   5,822 | `start.callMainWithArgs` | `../opt/zig/lib/std/start.zig` |

##### `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)

|      % |  Time | Samples | Callee       | Location                       |
| -----: | ----: | ------: | ------------ | ------------------------------ |
| 100.0% | 5.82s |   5,822 | `start.main` | `../opt/zig/lib/std/start.zig` |

##### `profile.main` (`profile.zig`)

|     % |   Time | Samples | Callee                                   | Location                               |
| ----: | -----: | ------: | ---------------------------------------- | -------------------------------------- |
| 71.2% |  4.14s |   4,143 | `zig.Ast.renderAlloc`                    | `../opt/zig/lib/std/zig/Ast.zig`       |
| 27.0% |  1.57s |   1,570 | `zig.Ast.parse`                          | `../opt/zig/lib/std/zig/Ast.zig`       |
|  1.3% | 78.0ms |      78 | `Io.Dir.readFileAllocOptions__anon_2741` | `../opt/zig/lib/std/Io/Dir.zig`        |
|  0.3% | 19.0ms |      19 | `Io.Dir.Walker.next`                     | `../opt/zig/lib/std/Io/Dir.zig`        |
|  0.1% |  3.0ms |       3 | `mem.Allocator.free__anon_2983`          | `../opt/zig/lib/std/mem/Allocator.zig` |

##### `zig.Ast.Render.renderTree` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |  Time | Samples | Callee                                      | Location                                |
| ----: | ----: | ------: | ------------------------------------------- | --------------------------------------- |
| 99.8% | 4.13s |   4,135 | `zig.Ast.Render.renderMembers`              | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.1% | 4.0ms |       4 | `zig.Ast.Render.renderContainerDocComments` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| <0.1% | 2.0ms |       2 | `zig.Ast.Render.AutoIndentingStream.deinit` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| <0.1% | 1.0ms |       1 | `zig.Ast.Render.renderComments`             | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| <0.1% | 1.0ms |       1 | `zig.Ast.Render.renderExtraNewlineToken`    | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`)

|      % |  Time | Samples | Callee                      | Location                                |
| -----: | ----: | ------: | --------------------------- | --------------------------------------- |
| 100.0% | 4.14s |   4,143 | `zig.Ast.Render.renderTree` | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.renderAlloc` (`../opt/zig/lib/std/zig/Ast.zig`)

|      % |  Time | Samples | Callee           | Location                         |
| -----: | ----: | ------: | ---------------- | -------------------------------- |
| 100.0% | 4.14s |   4,143 | `zig.Ast.render` | `../opt/zig/lib/std/zig/Ast.zig` |

##### `zig.Ast.Render.renderMembers` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Callee                              | Location                                |
| ----: | ------: | ------: | ----------------------------------- | --------------------------------------- |
| 86.7% |   3.58s |   3,586 | `zig.Ast.Render.renderMember`       | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 12.9% | 535.0ms |     535 | `zig.Ast.Render.renderExpression`   | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.2% |  10.0ms |      10 | `zig.Ast.Render.renderExtraNewline` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| <0.1% |   2.0ms |       2 | `zig.Ast.fullContainerField`        | `../opt/zig/lib/std/zig/Ast.zig`        |
| <0.1% |   2.0ms |       2 | `zig.Ast.firstToken`                | `../opt/zig/lib/std/zig/Ast.zig`        |

##### `zig.Ast.Render.renderExpression` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Callee                               | Location                                |
| ----: | ------: | ------: | ------------------------------------ | --------------------------------------- |
| 68.8% |   2.78s |   2,780 | `zig.Ast.Render.renderBlock`         | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 41.7% |   1.68s |   1,684 | `zig.Ast.Render.renderContainerDecl` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 31.7% |   1.28s |   1,283 | `zig.Ast.Render.renderExpression`    | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 28.0% |   1.13s |   1,133 | `zig.Ast.Render.renderParamList`     | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 17.7% | 715.0ms |     715 | `zig.Ast.Render.renderExpressions`   | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.renderMember` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Callee                                | Location                                |
| ----: | ------: | ------: | ------------------------------------- | --------------------------------------- |
| 67.4% |   2.42s |   2,425 | `zig.Ast.Render.renderExpression`     | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 48.7% |   1.75s |   1,751 | `zig.Ast.Render.renderVarDecl`        | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  7.6% | 274.0ms |     274 | `zig.Ast.Render.renderContainerField` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  1.5% |  54.0ms |      54 | `zig.Ast.Render.renderDocComments`    | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.2% |   8.0ms |       8 | `zig.Ast.firstToken`                  | `../opt/zig/lib/std/zig/Ast.zig`        |

##### `zig.Ast.Render.renderBlock` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |   Time | Samples | Callee                             | Location                                |
| ----: | -----: | ------: | ---------------------------------- | --------------------------------------- |
| 99.6% |  2.76s |   2,769 | `zig.Ast.Render.finishRenderBlock` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  1.1% | 31.0ms |      31 | `zig.Ast.Render.renderToken`       | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.1% |  3.0ms |       3 | `zig.Ast.firstToken`               | `../opt/zig/lib/std/zig/Ast.zig`        |
|  0.1% |  2.0ms |       2 | `zig.Ast.Render.renderIdentifier`  | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| <0.1% |  1.0ms |       1 | `zig.Ast.isTokenPrecededByTags`    | `../opt/zig/lib/std/zig/Ast.zig`        |

##### `zig.Ast.Render.finishRenderBlock` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Callee                              | Location                                |
| ----: | ------: | ------: | ----------------------------------- | --------------------------------------- |
| 78.3% |   2.16s |   2,167 | `zig.Ast.Render.renderExpression`   | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 32.1% | 890.0ms |     890 | `zig.Ast.Render.renderVarDecl`      | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  1.6% |  45.0ms |      45 | `zig.Ast.Render.renderExtraNewline` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  1.2% |  32.0ms |      32 | `zig.Ast.lastToken`                 | `../opt/zig/lib/std/zig/Ast.zig`        |
|  1.0% |  28.0ms |      28 | `zig.Ast.Render.renderToken`        | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.renderVarDeclWithoutFixups` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Callee                            | Location                                |
| ----: | ------: | ------: | --------------------------------- | --------------------------------------- |
| 92.9% |   2.31s |   2,311 | `zig.Ast.Render.renderExpression` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  5.1% | 127.0ms |     127 | `zig.Ast.Render.renderIdentifier` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  3.5% |  86.0ms |      86 | `zig.Ast.Render.renderToken`      | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.2% |   6.0ms |       6 | `zig.Ast.tokensOnSameLine`        | `../opt/zig/lib/std/zig/Ast.zig`        |
|  0.2% |   6.0ms |       6 | `zig.Ast.firstToken`              | `../opt/zig/lib/std/zig/Ast.zig`        |

##### `zig.Ast.Render.renderVarDecl` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|      % |  Time | Samples | Callee                                      | Location                                |
| -----: | ----: | ------: | ------------------------------------------- | --------------------------------------- |
| 100.0% | 2.48s |   2,487 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.renderContainerDecl` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Callee                                  | Location                                |
| ----: | ------: | ------: | --------------------------------------- | --------------------------------------- |
| 88.5% |   1.49s |   1,490 | `zig.Ast.Render.renderMember`           | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  9.3% | 157.0ms |     157 | `zig.Ast.Render.isOneLineContainerDecl` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  3.0% |  51.0ms |      51 | `zig.Ast.Render.renderExtraNewline`     | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  1.1% |  19.0ms |      19 | `zig.Ast.Render.renderToken`            | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.8% |  14.0ms |      14 | `zig.Ast.Render.renderExpression`       | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.tokenizer.Tokenizer.next` (`../opt/zig/lib/std/zig/tokenizer.zig`)

|     % |    Time | Samples | Callee                           | Location                               |
| ----: | ------: | ------: | -------------------------------- | -------------------------------------- |
| 18.2% | 292.0ms |     292 | `zig.tokenizer.Token.getKeyword` | `../opt/zig/lib/std/zig/tokenizer.zig` |

##### `zig.Ast.Render.renderToken` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Callee                                        | Location                                |
| ----: | ------: | ------: | --------------------------------------------- | --------------------------------------- |
| 42.6% | 671.0ms |     671 | `zig.Ast.Render.tokenSliceForRender`          | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 36.5% | 575.0ms |     575 | `zig.Ast.Render.renderSpace`                  | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 18.3% | 289.0ms |     289 | `zig.Ast.Render.AutoIndentingStream.writeAll` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  2.3% |  36.0ms |      36 | `zig.Ast.tokenSlice`                          | `../opt/zig/lib/std/zig/Ast.zig`        |

##### `zig.Ast.parse` (`../opt/zig/lib/std/zig/Ast.zig`)

|     % |    Time | Samples | Callee                                                                                | Location                                  |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------- | ----------------------------------------- |
| 49.5% | 777.0ms |     777 | `zig.Ast.parseTokens`                                                                 | `../opt/zig/lib/std/zig/Ast.zig`          |
| 37.8% | 594.0ms |     594 | `zig.tokenizer.Tokenizer.next`                                                        | `../opt/zig/lib/std/zig/tokenizer.zig`    |
|  5.9% |  93.0ms |      93 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2756).append`              | `../opt/zig/lib/std/multi_array_list.zig` |
|  4.3% |  67.0ms |      67 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2756).ensureTotalCapacity` | `../opt/zig/lib/std/multi_array_list.zig` |

##### `zig.Ast.Render.tokenSliceForRender` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Callee                           | Location                               |
| ----: | ------: | ------: | -------------------------------- | -------------------------------------- |
| 70.0% |      1s |   1,000 | `zig.Ast.tokenSlice`             | `../opt/zig/lib/std/zig/Ast.zig`       |
|  8.7% | 125.0ms |     125 | `zig.tokenizer.Token.Tag.lexeme` | `../opt/zig/lib/std/zig/tokenizer.zig` |
|  3.1% |  44.0ms |      44 | `zig.Ast.tokenTag`               | `../opt/zig/lib/std/zig/Ast.zig`       |
|  0.3% |   4.0ms |       4 | `mem.trimEnd__anon_28242`        | `../opt/zig/lib/std/mem.zig`           |
|  0.1% |   1.0ms |       1 | `zig.tokenizer.Tokenizer.next`   | `../opt/zig/lib/std/zig/tokenizer.zig` |

##### `zig.Ast.Render.renderIdentifier` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Callee                               | Location                                |
| ----: | ------: | ------: | ------------------------------------ | --------------------------------------- |
| 48.6% | 655.0ms |     655 | `zig.Ast.Render.renderToken`         | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 41.4% | 557.0ms |     557 | `zig.Ast.Render.tokenSliceForRender` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  3.0% |  40.0ms |      40 | `array_hash_map.Custom.get`          | `../opt/zig/lib/std/array_hash_map.zig` |
|  0.8% |  11.0ms |      11 | `zig.Ast.tokenSlice`                 | `../opt/zig/lib/std/zig/Ast.zig`        |
|  0.4% |   5.0ms |       5 | `zig.Ast.tokenTag`                   | `../opt/zig/lib/std/zig/Ast.zig`        |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)

|    % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---: | ------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8.9% | 516.0ms |     516 | `zig.tokenizer.Tokenizer.next` (`../opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.Ast.parse` (`../opt/zig/lib/std/zig/Ast.zig`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.7% | 159.0ms |     159 | `memset` (`../opt/zig/lib/compiler_rt.zig`) ← `mem.Allocator.allocBytesWithAlignment__anon_10001` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `mem.Allocator.allocWithSizeAndAlignment__anon_9851` ← `mem.Allocator.allocAdvancedWithRetAddr` ← `mem.Allocator.alignedAlloc__anon_9848` ← `multi_array_list.MultiArrayList(zig.Ast.Node).setCapacity` (`../opt/zig/lib/std/multi_array_list.zig`) ← `multi_array_list.MultiArrayList(zig.Ast.Node).ensureTotalCapacity` ← `zig.Ast.parseTokens` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.parse`                                                                                                                                                                                                               |
| 1.2% |  67.0ms |      67 | `memset` (`../opt/zig/lib/compiler_rt.zig`) ← `mem.Allocator.allocBytesWithAlignment__anon_10001` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `mem.Allocator.allocWithSizeAndAlignment__anon_9851` ← `mem.Allocator.allocAdvancedWithRetAddr` ← `mem.Allocator.alignedAlloc__anon_9848` ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2756).setCapacity` (`../opt/zig/lib/std/multi_array_list.zig`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2756).ensureTotalCapacity` ← `zig.Ast.parse` (`../opt/zig/lib/std/zig/Ast.zig`)                                                                                                                                                                                                   |
| 1.0% |  59.0ms |      59 | `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` (`../opt/zig/lib/std/static_string_map.zig`) ← `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).get` ← `zig.tokenizer.Token.getKeyword` (`../opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.tokenizer.Tokenizer.next` ← `zig.Ast.parse` (`../opt/zig/lib/std/zig/Ast.zig`)                                                                                                                                                                                                                                                                                                                                             |
| 0.7% |  39.0ms |      39 | `zig.Ast.parse` (`../opt/zig/lib/std/zig/Ast.zig`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.7% |  39.0ms |      39 | `memset` (`../opt/zig/lib/compiler_rt.zig`) ← `mem.Allocator.allocBytesWithAlignment__anon_10001` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `mem.Allocator.allocWithSizeAndAlignment__anon_9851` ← `mem.Allocator.allocAdvancedWithRetAddr` ← `mem.Allocator.alignedAlloc__anon_9848` ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2756).setCapacity` (`../opt/zig/lib/std/multi_array_list.zig`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2756).ensureTotalCapacity` ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2756).ensureUnusedCapacity` ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2756).append` ← `zig.Ast.parse` (`../opt/zig/lib/std/zig/Ast.zig`)                               |
| 0.6% |  35.0ms |      35 | `zig.tokenizer.Tokenizer.next` (`../opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.Ast.tokenSlice` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.Render.hasComment` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.isOneLineContainerDecl` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc`                                                                                                                                                                        |
| 0.4% |  26.0ms |      26 | `Io.Threaded.dirOpenFilePosix` (`../opt/zig/lib/std/Io/Threaded.zig`) ← `Io.Dir.openFile` (`../opt/zig/lib/std/Io/Dir.zig`) ← `Io.Dir.readFileAllocOptions__anon_2741`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.4% |  26.0ms |      26 | `Io.Threaded.fileReadPositionalPosix` (`../opt/zig/lib/std/Io/Threaded.zig`) ← `Io.Threaded.fileReadPositional` ← `Io.File.Reader.readVecPositional` (`../opt/zig/lib/std/Io/File/Reader.zig`) ← `Io.File.Reader.readVec` ← `Io.Reader.readVec` (`../opt/zig/lib/std/Io/Reader.zig`) ← `Io.Reader.readSliceShort` ← `Io.Writer.Allocating.sendFile` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.sendFile` ← `Io.File.Reader.streamMode` (`../opt/zig/lib/std/Io/File/Reader.zig`) ← `Io.File.Reader.stream` ← `Io.Reader.stream` (`../opt/zig/lib/std/Io/Reader.zig`) ← `Io.Reader.appendRemainingAligned__anon_35672` ← `Io.Reader.allocRemainingAlignedSentinel__anon_35655` ← `Io.Dir.readFileAllocOptions__anon_2741` (`../opt/zig/lib/std/Io/Dir.zig`) |
| 0.4% |  21.0ms |      21 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2756).ensureTotalCapacity` (`../opt/zig/lib/std/multi_array_list.zig`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2756).ensureUnusedCapacity` ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2756).append` ← `zig.Ast.parse` (`../opt/zig/lib/std/zig/Ast.zig`)                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.3% |  19.0ms |      19 | `static_string_map.defaultEql` (`../opt/zig/lib/std/static_string_map.zig`) ← `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` ← `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).get` ← `zig.tokenizer.Token.getKeyword` (`../opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.tokenizer.Tokenizer.next` ← `zig.Ast.parse` (`../opt/zig/lib/std/zig/Ast.zig`)                                                                                                                                                                                                                                                                                                            |
| 0.3% |  18.0ms |      18 | `zig.tokenizer.Tokenizer.next` (`../opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.Ast.tokenSlice` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.Render.tokenSliceForRender` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderIdentifier` ← `zig.Ast.Render.renderContainerField` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc`                                                                                             |
| 0.3% |  17.0ms |      17 | `zig.tokenizer.Tokenizer.next` (`../opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.Ast.tokenSlice` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.Render.hasComment` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderStructInit` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderExpressionComma` ← `zig.Ast.Render.renderArrayInit` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.finishRenderBlock` ← `zig.Ast.Render.renderBlock` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc`                             |
| 0.3% |  15.0ms |      15 | `zig.Ast.Render.renderExpressionComma` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderContainerField` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc`                                                                                                                                                                                                                                                                   |
| 0.3% |  15.0ms |      15 | `zig.tokenizer.Token.Tag.lexeme` (`../opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.Ast.Render.hasComment` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.isOneLineContainerDecl` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc`                                                                                                                                                                                                                                |
| 0.3% |  15.0ms |      15 | `memset` (`../opt/zig/lib/compiler_rt.zig`) ← `Io.Threaded.dirOpenFilePosix` (`../opt/zig/lib/std/Io/Threaded.zig`) ← `Io.Dir.openFile` (`../opt/zig/lib/std/Io/Dir.zig`) ← `Io.Dir.readFileAllocOptions__anon_2741`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.2% |  14.0ms |      14 | `zig.tokenizer.Tokenizer.next` (`../opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.Ast.tokenSlice` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.Render.tokenSliceForRender` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderIdentifier` ← `zig.Ast.Render.renderFnProto` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc`                                                                                                                                                                                                                                                          |
| 0.2% |  13.0ms |      13 | `zig.tokenizer.Tokenizer.next` (`../opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.Ast.tokenSlice` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.Render.tokenSliceForRender` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderDocComments` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc`                                                                                                     |
| 0.2% |  13.0ms |      13 | `zig.tokenizer.Tokenizer.next` (`../opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.Ast.tokenSlice` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.Render.hasComment` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderStructInit` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderArrayInit` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.finishRenderBlock` ← `zig.Ast.Render.renderBlock` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc`                                                                      |
| 0.2% |  12.0ms |      12 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2756).Slice.set` (`../opt/zig/lib/std/multi_array_list.zig`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2756).set` ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2756).appendAssumeCapacity` ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2756).append` ← `zig.Ast.parse` (`../opt/zig/lib/std/zig/Ast.zig`)                                                                                                                                                                                                                                                                                                                                          |
