# CPU profile

Took 6.04s over 6,044 samples (1.0ms per sample).

| Category |      % |  Time | Samples |
| -------- | -----: | ----: | ------: |
| ours     | 100.0% | 6.04s |   6,044 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                                                                                             | Location                                |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------- | --------------------------------------- |
| 22.4% |   1.35s |   1,354 | `zig.tokenizer.Tokenizer.next`                                                                       | `opt/zig/lib/std/zig/tokenizer.zig`     |
|  6.2% | 374.0ms |     374 | `memset`                                                                                             | `opt/zig/lib/compiler_rt.zig`           |
|  4.4% | 263.0ms |     263 | `zig.Ast.tokenSlice`                                                                                 | `opt/zig/lib/std/zig/Ast.zig`           |
|  4.0% | 243.0ms |     243 | `zig.Ast.Render.tokenSliceForRender`                                                                 | `opt/zig/lib/std/zig/Ast/Render.zig`    |
|  3.9% | 234.0ms |     234 | `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` | `opt/zig/lib/std/static_string_map.zig` |
|  3.2% | 193.0ms |     193 | `zig.Ast.Render.renderSpace`                                                                         | `opt/zig/lib/std/zig/Ast/Render.zig`    |
|  3.0% | 184.0ms |     184 | `zig.Ast.Render.renderExpression`                                                                    | `opt/zig/lib/std/zig/Ast/Render.zig`    |
|  2.9% | 178.0ms |     178 | `zig.tokenizer.Token.Tag.lexeme`                                                                     | `opt/zig/lib/std/zig/tokenizer.zig`     |
|  2.6% | 159.0ms |     159 | `zig.Ast.Render.renderComments`                                                                      | `opt/zig/lib/std/zig/Ast/Render.zig`    |
|  2.3% | 140.0ms |     140 | `mem.findScalarPos__anon_6382`                                                                       | `opt/zig/lib/std/mem.zig`               |
|  2.1% | 126.0ms |     126 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_28815`                              | `opt/zig/lib/std/multi_array_list.zig`  |
|  1.6% |  99.0ms |      99 | `static_string_map.defaultEql`                                                                       | `opt/zig/lib/std/static_string_map.zig` |
|  1.6% |  94.0ms |      94 | `zig.Ast.tokenTag`                                                                                   | `opt/zig/lib/std/zig/Ast.zig`           |
|  1.5% |  93.0ms |      93 | `Io.Writer.write`                                                                                    | `opt/zig/lib/std/Io/Writer.zig`         |
|  1.5% |  88.0ms |      88 | `zig.Ast.Render.renderIdentifier`                                                                    | `opt/zig/lib/std/zig/Ast/Render.zig`    |
|  1.3% |  78.0ms |      78 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32262`                              | `opt/zig/lib/std/multi_array_list.zig`  |
|  1.2% |  73.0ms |      73 | `zig.Ast.nodeTag`                                                                                    | `opt/zig/lib/std/zig/Ast.zig`           |
|  1.2% |  70.0ms |      70 | `zig.Ast.firstToken`                                                                                 | `opt/zig/lib/std/zig/Ast.zig`           |
|  1.1% |  66.0ms |      66 | `zig.Parse.tokenTag`                                                                                 | `opt/zig/lib/std/zig/Parse.zig`         |
|  1.1% |  65.0ms |      65 | `zig.Ast.lastToken`                                                                                  | `opt/zig/lib/std/zig/Ast.zig`           |

#### Lines

Lines ranked by contribution to each function's self time.

##### `zig.tokenizer.Tokenizer.next` (`opt/zig/lib/std/zig/tokenizer.zig`)

|     % |    Time | Samples | Location                                 |
| ----: | ------: | ------: | ---------------------------------------- |
| 17.4% | 235.0ms |     235 | `opt/zig/lib/std/zig/tokenizer.zig:666`  |
| 17.3% | 234.0ms |     234 | `opt/zig/lib/std/zig/tokenizer.zig:667`  |
| 10.7% | 145.0ms |     145 | `opt/zig/lib/std/zig/tokenizer.zig:670`  |
|  9.9% | 134.0ms |     134 | `opt/zig/lib/std/zig/tokenizer.zig:405`  |
|  6.2% |  84.0ms |      84 | `opt/zig/lib/std/zig/tokenizer.zig:1033` |

##### `memset` (`opt/zig/lib/compiler_rt.zig`)

|     % |    Time | Samples | Location                          |
| ----: | ------: | ------: | --------------------------------- |
| 91.2% | 341.0ms |     341 | `opt/zig/lib/compiler_rt.zig:686` |
|  4.8% |  18.0ms |      18 | `opt/zig/lib/compiler_rt.zig:684` |
|  1.3% |   5.0ms |       5 | `opt/zig/lib/compiler_rt.zig:685` |

##### `zig.Ast.tokenSlice` (`opt/zig/lib/std/zig/Ast.zig`)

|     % |    Time | Samples | Location                          |
| ----: | ------: | ------: | --------------------------------- |
| 39.5% | 104.0ms |     104 | `opt/zig/lib/std/zig/Ast.zig:276` |
|  8.7% |  23.0ms |      23 | `opt/zig/lib/std/zig/Ast.zig:277` |
|  8.4% |  22.0ms |      22 | `opt/zig/lib/std/zig/Ast.zig:291` |
|  4.6% |  12.0ms |      12 | `opt/zig/lib/std/zig/Ast.zig:286` |
|  3.4% |   9.0ms |       9 | `opt/zig/lib/std/zig/Ast.zig:280` |

##### `zig.Ast.Render.tokenSliceForRender` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Location                                  |
| ----: | ------: | ------: | ----------------------------------------- |
| 65.0% | 158.0ms |     158 | `opt/zig/lib/std/zig/Ast/Render.zig:3168` |
| 10.7% |  26.0ms |      26 | `opt/zig/lib/std/zig/Ast/Render.zig:3169` |
| 10.7% |  26.0ms |      26 | `opt/zig/lib/std/zig/Ast/Render.zig:3176` |
|  2.5% |   6.0ms |       6 | `opt/zig/lib/std/zig/Ast/Render.zig:3170` |

##### `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` (`opt/zig/lib/std/static_string_map.zig`)

|     % |    Time | Samples | Location                                    |
| ----: | ------: | ------: | ------------------------------------------- |
| 47.0% | 110.0ms |     110 | `opt/zig/lib/std/static_string_map.zig:208` |
| 46.2% | 108.0ms |     108 | `opt/zig/lib/std/static_string_map.zig:213` |
|  4.7% |  11.0ms |      11 | `opt/zig/lib/std/static_string_map.zig:203` |
|  1.7% |   4.0ms |       4 | `opt/zig/lib/std/static_string_map.zig:214` |
|  0.4% |   1.0ms |       1 | `opt/zig/lib/std/static_string_map.zig:209` |

##### `zig.Ast.Render.renderSpace` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |   Time | Samples | Location                                  |
| ----: | -----: | ------: | ----------------------------------------- |
| 16.6% | 32.0ms |      32 | `opt/zig/lib/std/zig/Ast/Render.zig:2756` |
| 13.0% | 25.0ms |      25 | `opt/zig/lib/std/zig/Ast/Render.zig:2742` |
| 12.4% | 24.0ms |      24 | `opt/zig/lib/std/zig/Ast/Render.zig:2744` |
|  6.7% | 13.0ms |      13 | `opt/zig/lib/std/zig/Ast/Render.zig:2751` |
|  5.7% | 11.0ms |      11 | `opt/zig/lib/std/zig/Ast/Render.zig:2739` |

##### `zig.Ast.Render.renderExpression` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |   Time | Samples | Location                                 |
| ----: | -----: | ------: | ---------------------------------------- |
| 15.2% | 28.0ms |      28 | `opt/zig/lib/std/zig/Ast/Render.zig:326` |
| 14.7% | 27.0ms |      27 | `opt/zig/lib/std/zig/Ast/Render.zig:317` |
| 10.9% | 20.0ms |      20 | `opt/zig/lib/std/zig/Ast/Render.zig:315` |
|  8.2% | 15.0ms |      15 | `opt/zig/lib/std/zig/Ast/Render.zig:314` |
|  7.1% | 13.0ms |      13 | `opt/zig/lib/std/zig/Ast/Render.zig:324` |

##### `zig.tokenizer.Token.Tag.lexeme` (`opt/zig/lib/std/zig/tokenizer.zig`)

|     % |   Time | Samples | Location                                |
| ----: | -----: | ------: | --------------------------------------- |
| 30.9% | 55.0ms |      55 | `opt/zig/lib/std/zig/tokenizer.zig:187` |
|  1.7% |  3.0ms |       3 | `opt/zig/lib/std/zig/tokenizer.zig:186` |

##### `zig.Ast.Render.renderComments` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |   Time | Samples | Location                                  |
| ----: | -----: | ------: | ----------------------------------------- |
| 37.1% | 59.0ms |      59 | `opt/zig/lib/std/zig/Ast/Render.zig:3016` |
| 20.1% | 32.0ms |      32 | `opt/zig/lib/std/zig/Ast/Render.zig:3072` |
|  4.4% |  7.0ms |       7 | `opt/zig/lib/std/zig/Ast/Render.zig:3065` |

##### `mem.findScalarPos__anon_6382` (`opt/zig/lib/std/mem.zig`)

|     % |   Time | Samples | Location                       |
| ----: | -----: | ------: | ------------------------------ |
| 36.4% | 51.0ms |      51 | `opt/zig/lib/std/mem.zig:1297` |
|  7.1% | 10.0ms |      10 | `opt/zig/lib/std/mem.zig:1285` |
|  6.4% |  9.0ms |       9 | `opt/zig/lib/std/mem.zig:1263` |
|  6.4% |  9.0ms |       9 | `opt/zig/lib/std/mem.zig:1284` |
|  6.4% |  9.0ms |       9 | `opt/zig/lib/std/mem.zig:1299` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_28815` (`opt/zig/lib/std/multi_array_list.zig`)

|      % |    Time | Samples | Location                                   |
| -----: | ------: | ------: | ------------------------------------------ |
| 100.0% | 126.0ms |     126 | `opt/zig/lib/std/multi_array_list.zig:102` |

##### `static_string_map.defaultEql` (`opt/zig/lib/std/static_string_map.zig`)

|     % |   Time | Samples | Location                                   |
| ----: | -----: | ------: | ------------------------------------------ |
| 96.0% | 95.0ms |      95 | `opt/zig/lib/std/static_string_map.zig:15` |
|  2.0% |  2.0ms |       2 | `opt/zig/lib/std/static_string_map.zig:17` |
|  1.0% |  1.0ms |       1 | `opt/zig/lib/std/static_string_map.zig:14` |
|  1.0% |  1.0ms |       1 | `opt/zig/lib/std/static_string_map.zig:16` |

##### `zig.Ast.tokenTag` (`opt/zig/lib/std/zig/Ast.zig`)

|     % |   Time | Samples | Location                         |
| ----: | -----: | ------: | -------------------------------- |
| 66.0% | 62.0ms |      62 | `opt/zig/lib/std/zig/Ast.zig:89` |

##### `Io.Writer.write` (`opt/zig/lib/std/Io/Writer.zig`)

|     % |   Time | Samples | Location                            |
| ----: | -----: | ------: | ----------------------------------- |
| 52.7% | 49.0ms |      49 | `opt/zig/lib/std/Io/Writer.zig:535` |
| 28.0% | 26.0ms |      26 | `opt/zig/lib/std/Io/Writer.zig:533` |
| 17.2% | 16.0ms |      16 | `opt/zig/lib/std/Io/Writer.zig:536` |
|  2.2% |  2.0ms |       2 | `opt/zig/lib/std/Io/Writer.zig:539` |

##### `zig.Ast.Render.renderIdentifier` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |   Time | Samples | Location                                  |
| ----: | -----: | ------: | ----------------------------------------- |
| 54.5% | 48.0ms |      48 | `opt/zig/lib/std/zig/Ast/Render.zig:2813` |
| 12.5% | 11.0ms |      11 | `opt/zig/lib/std/zig/Ast/Render.zig:2812` |
|  8.0% |  7.0ms |       7 | `opt/zig/lib/std/zig/Ast/Render.zig:2823` |
|  2.3% |  2.0ms |       2 | `opt/zig/lib/std/zig/Ast/Render.zig:2815` |
|  1.1% |  1.0ms |       1 | `opt/zig/lib/std/zig/Ast/Render.zig:2850` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32262` (`opt/zig/lib/std/multi_array_list.zig`)

|     % |   Time | Samples | Location                                   |
| ----: | -----: | ------: | ------------------------------------------ |
| 96.2% | 75.0ms |      75 | `opt/zig/lib/std/multi_array_list.zig:102` |
|  3.8% |  3.0ms |       3 | `opt/zig/lib/std/multi_array_list.zig:109` |

##### `zig.Ast.nodeTag` (`opt/zig/lib/std/zig/Ast.zig`)

|      % |   Time | Samples | Location                         |
| -----: | -----: | ------: | -------------------------------- |
| 100.0% | 73.0ms |      73 | `opt/zig/lib/std/zig/Ast.zig:97` |

##### `zig.Ast.firstToken` (`opt/zig/lib/std/zig/Ast.zig`)

|     % |   Time | Samples | Location                          |
| ----: | -----: | ------: | --------------------------------- |
| 61.4% | 43.0ms |      43 | `opt/zig/lib/std/zig/Ast.zig:604` |
|  8.6% |  6.0ms |       6 | `opt/zig/lib/std/zig/Ast.zig:607` |
|  4.3% |  3.0ms |       3 | `opt/zig/lib/std/zig/Ast.zig:785` |
|  2.9% |  2.0ms |       2 | `opt/zig/lib/std/zig/Ast.zig:786` |
|  2.9% |  2.0ms |       2 | `opt/zig/lib/std/zig/Ast.zig:846` |

##### `zig.Parse.tokenTag` (`opt/zig/lib/std/zig/Parse.zig`)

|      % |   Time | Samples | Location                           |
| -----: | -----: | ------: | ---------------------------------- |
| 100.0% | 66.0ms |      66 | `opt/zig/lib/std/zig/Parse.zig:15` |

##### `zig.Ast.lastToken` (`opt/zig/lib/std/zig/Ast.zig`)

|     % |   Time | Samples | Location                          |
| ----: | -----: | ------: | --------------------------------- |
| 50.8% | 33.0ms |      33 | `opt/zig/lib/std/zig/Ast.zig:881` |
|  6.2% |  4.0ms |       4 | `opt/zig/lib/std/zig/Ast.zig:884` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `zig.tokenizer.Tokenizer.next` (`opt/zig/lib/std/zig/tokenizer.zig`)

|     % |    Time | Samples | Caller               | Location                      |
| ----: | ------: | ------: | -------------------- | ----------------------------- |
| 60.6% | 821.0ms |     821 | `zig.Ast.tokenSlice` | `opt/zig/lib/std/zig/Ast.zig` |
| 39.3% | 532.0ms |     532 | `zig.Ast.parse`      | `opt/zig/lib/std/zig/Ast.zig` |
|  0.1% |   1.0ms |       1 | `start.callMain`     | `opt/zig/lib/std/start.zig`   |

##### `memset` (`opt/zig/lib/compiler_rt.zig`)

|     % |    Time | Samples | Caller                                                                | Location                            |
| ----: | ------: | ------: | --------------------------------------------------------------------- | ----------------------------------- |
| 81.0% | 303.0ms |     303 | `mem.Allocator.allocBytesWithAlignment__anon_10001`                   | `opt/zig/lib/std/mem/Allocator.zig` |
|  5.3% |  20.0ms |      20 | `Io.Writer.splatByte`                                                 | `opt/zig/lib/std/Io/Writer.zig`     |
|  4.0% |  15.0ms |      15 | `Io.Threaded.dirOpenFilePosix`                                        | `opt/zig/lib/std/Io/Threaded.zig`   |
|  3.7% |  14.0ms |      14 | `array_list.Aligned(zig.Ast.Node.Index,null).shrinkRetainingCapacity` | `opt/zig/lib/std/array_list.zig`    |
|  1.6% |   6.0ms |       6 | `mem.Allocator.free__anon_31635`                                      | `opt/zig/lib/std/mem/Allocator.zig` |

##### `zig.Ast.tokenSlice` (`opt/zig/lib/std/zig/Ast.zig`)

|     % |    Time | Samples | Caller                               | Location                             |
| ----: | ------: | ------: | ------------------------------------ | ------------------------------------ |
| 60.1% | 158.0ms |     158 | `zig.Ast.Render.tokenSliceForRender` | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 15.2% |  40.0ms |      40 | `zig.Ast.Render.renderToken`         | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 11.0% |  29.0ms |      29 | `zig.Ast.Render.hasComment`          | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  8.0% |  21.0ms |      21 | `zig.Ast.Render.renderIdentifier`    | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  3.4% |   9.0ms |       9 | `zig.Ast.Render.renderExpression`    | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.tokenSliceForRender` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Caller                                   | Location                             |
| ----: | ------: | ------: | ---------------------------------------- | ------------------------------------ |
| 52.3% | 127.0ms |     127 | `zig.Ast.Render.renderToken`             | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 23.5% |  57.0ms |      57 | `zig.Ast.Render.renderIdentifier`        | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 15.2% |  37.0ms |      37 | `zig.Ast.Render.renderExpression`        | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  2.9% |   7.0ms |       7 | `zig.Ast.Render.renderExtraNewlineToken` | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  2.1% |   5.0ms |       5 | `zig.Ast.Render.renderParamList`         | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` (`opt/zig/lib/std/static_string_map.zig`)

|      % |    Time | Samples | Caller                                                                                          | Location                                |
| -----: | ------: | ------: | ----------------------------------------------------------------------------------------------- | --------------------------------------- |
| 100.0% | 234.0ms |     234 | `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).get` | `opt/zig/lib/std/static_string_map.zig` |

##### `zig.Ast.Render.renderSpace` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Caller                            | Location                             |
| ----: | ------: | ------: | --------------------------------- | ------------------------------------ |
| 83.4% | 161.0ms |     161 | `zig.Ast.Render.renderToken`      | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 15.0% |  29.0ms |      29 | `zig.Ast.Render.renderExpression` | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.5% |   1.0ms |       1 | `zig.Ast.Render.renderArrayInit`  | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.5% |   1.0ms |       1 | `zig.Ast.Render.renderParamList`  | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.5% |   1.0ms |       1 | `zig.Ast.Render.renderFnProto`    | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.renderExpression` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |   Time | Samples | Caller                                      | Location                             |
| ----: | -----: | ------: | ------------------------------------------- | ------------------------------------ |
| 31.0% | 57.0ms |      57 | `zig.Ast.Render.renderExpression`           | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 21.7% | 40.0ms |      40 | `zig.Ast.Render.renderParamList`            | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  9.8% | 18.0ms |      18 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  6.5% | 12.0ms |      12 | `zig.Ast.Render.finishRenderBlock`          | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  4.9% |  9.0ms |       9 | `zig.Ast.Render.renderCall`                 | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.tokenizer.Token.Tag.lexeme` (`opt/zig/lib/std/zig/tokenizer.zig`)

|     % |    Time | Samples | Caller                               | Location                             |
| ----: | ------: | ------: | ------------------------------------ | ------------------------------------ |
| 68.5% | 122.0ms |     122 | `zig.Ast.Render.tokenSliceForRender` | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 29.2% |  52.0ms |      52 | `zig.Ast.Render.hasComment`          | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  1.7% |   3.0ms |       3 | `zig.Parse.parseExpr`                | `opt/zig/lib/std/zig/Parse.zig`      |
|  0.6% |   1.0ms |       1 | `zig.Ast.Render.renderExpression`    | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.renderComments` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Caller                       | Location                             |
| ----: | ------: | ------: | ---------------------------- | ------------------------------------ |
| 99.4% | 158.0ms |     158 | `zig.Ast.Render.renderSpace` | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.6% |   1.0ms |       1 | `zig.Ast.Render.renderToken` | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `mem.findScalarPos__anon_6382` (`opt/zig/lib/std/mem.zig`)

|     % |    Time | Samples | Caller                                  | Location                             |
| ----: | ------: | ------: | --------------------------------------- | ------------------------------------ |
| 95.0% | 133.0ms |     133 | `mem.findScalar__anon_6379`             | `opt/zig/lib/std/mem.zig`            |
|  2.1% |   3.0ms |       3 | `zig.Ast.Render.renderArrayInit`        | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.7% |   1.0ms |       1 | `zig.Ast.Render.isOneLineContainerDecl` | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.7% |   1.0ms |       1 | `zig.Ast.Render.isOneLineFnProto`       | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.7% |   1.0ms |       1 | `zig.Ast.Render.renderExpression`       | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_28815` (`opt/zig/lib/std/multi_array_list.zig`)

|      % |    Time | Samples | Caller             | Location                      |
| -----: | ------: | ------: | ------------------ | ----------------------------- |
| 100.0% | 126.0ms |     126 | `zig.Ast.nodeData` | `opt/zig/lib/std/zig/Ast.zig` |

##### `static_string_map.defaultEql` (`opt/zig/lib/std/static_string_map.zig`)

|     % |   Time | Samples | Caller                                                                                                                | Location                                |
| ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| 98.0% | 97.0ms |      97 | `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex`                  | `opt/zig/lib/std/static_string_map.zig` |
|  2.0% |  2.0ms |       2 | `static_string_map.StaticStringMapWithEql(zig.Ast.Render.renderExpression.CastKind,(function 'defaultEql')).getIndex` | `opt/zig/lib/std/static_string_map.zig` |

##### `zig.Ast.tokenTag` (`opt/zig/lib/std/zig/Ast.zig`)

|     % |   Time | Samples | Caller                               | Location                             |
| ----: | -----: | ------: | ------------------------------------ | ------------------------------------ |
| 38.3% | 36.0ms |      36 | `zig.Ast.tokenSlice`                 | `opt/zig/lib/std/zig/Ast.zig`        |
| 24.5% | 23.0ms |      23 | `zig.Ast.Render.tokenSliceForRender` | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 22.3% | 21.0ms |      21 | `zig.Ast.Render.renderSpace`         | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  6.4% |  6.0ms |       6 | `zig.Ast.Render.renderIdentifier`    | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  2.1% |  2.0ms |       2 | `zig.Ast.Render.renderParamList`     | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `Io.Writer.write` (`opt/zig/lib/std/Io/Writer.zig`)

|      % |   Time | Samples | Caller               | Location                        |
| -----: | -----: | ------: | -------------------- | ------------------------------- |
| 100.0% | 93.0ms |      93 | `Io.Writer.writeAll` | `opt/zig/lib/std/Io/Writer.zig` |

##### `zig.Ast.Render.renderIdentifier` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |   Time | Samples | Caller                                      | Location                             |
| ----: | -----: | ------: | ------------------------------------------- | ------------------------------------ |
| 42.0% | 37.0ms |      37 | `zig.Ast.Render.renderExpression`           | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 12.5% | 11.0ms |      11 | `zig.Ast.Render.renderParamList`            | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 11.4% | 10.0ms |      10 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  6.8% |  6.0ms |       6 | `zig.Ast.Render.renderCall`                 | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  5.7% |  5.0ms |       5 | `zig.Ast.Render.renderFnProto`              | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32262` (`opt/zig/lib/std/multi_array_list.zig`)

|     % |   Time | Samples | Caller                                                    | Location                               |
| ----: | -----: | ------: | --------------------------------------------------------- | -------------------------------------- |
| 98.7% | 77.0ms |      77 | `zig.Ast.nodeMainToken`                                   | `opt/zig/lib/std/zig/Ast.zig`          |
|  1.3% |  1.0ms |       1 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.set` | `opt/zig/lib/std/multi_array_list.zig` |

##### `zig.Ast.nodeTag` (`opt/zig/lib/std/zig/Ast.zig`)

|     % |   Time | Samples | Caller                             | Location                             |
| ----: | -----: | ------: | ---------------------------------- | ------------------------------------ |
| 42.5% | 31.0ms |      31 | `zig.Ast.Render.renderExpression`  | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 32.9% | 24.0ms |      24 | `zig.Ast.lastToken`                | `opt/zig/lib/std/zig/Ast.zig`        |
| 16.4% | 12.0ms |      12 | `zig.Ast.firstToken`               | `opt/zig/lib/std/zig/Ast.zig`        |
|  1.4% |  1.0ms |       1 | `zig.Ast.fullArrayInit`            | `opt/zig/lib/std/zig/Ast.zig`        |
|  1.4% |  1.0ms |       1 | `zig.Ast.Render.finishRenderBlock` | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.firstToken` (`opt/zig/lib/std/zig/Ast.zig`)

|     % |   Time | Samples | Caller                              | Location                             |
| ----: | -----: | ------: | ----------------------------------- | ------------------------------------ |
| 32.9% | 23.0ms |      23 | `zig.Ast.Render.renderExtraNewline` | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 15.7% | 11.0ms |      11 | `zig.Ast.Render.renderMember`       | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 14.3% | 10.0ms |      10 | `zig.Ast.Render.renderSwitchCase`   | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  7.1% |  5.0ms |       5 | `zig.Ast.Render.isOneLineFnProto`   | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  5.7% |  4.0ms |       4 | `zig.Ast.Render.renderPtrType`      | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Parse.tokenTag` (`opt/zig/lib/std/zig/Parse.zig`)

|     % |   Time | Samples | Caller                           | Location                        |
| ----: | -----: | ------: | -------------------------------- | ------------------------------- |
| 36.4% | 24.0ms |      24 | `zig.Parse.eatToken`             | `opt/zig/lib/std/zig/Parse.zig` |
| 15.2% | 10.0ms |      10 | `zig.Parse.parsePrimaryTypeExpr` | `opt/zig/lib/std/zig/Parse.zig` |
| 12.1% |  8.0ms |       8 | `zig.Parse.parseSuffixOp`        | `opt/zig/lib/std/zig/Parse.zig` |
|  7.6% |  5.0ms |       5 | `zig.Parse.parsePrefixExpr`      | `opt/zig/lib/std/zig/Parse.zig` |
|  6.1% |  4.0ms |       4 | `zig.Parse.parseExprPrecedence`  | `opt/zig/lib/std/zig/Parse.zig` |

##### `zig.Ast.lastToken` (`opt/zig/lib/std/zig/Ast.zig`)

|     % |   Time | Samples | Caller                                 | Location                             |
| ----: | -----: | ------: | -------------------------------------- | ------------------------------------ |
| 32.3% | 21.0ms |      21 | `zig.Ast.Render.renderExpression`      | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 16.9% | 11.0ms |      11 | `zig.Ast.Render.renderArrayInit`       | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 13.8% |  9.0ms |       9 | `zig.Ast.Render.renderParamList`       | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 10.8% |  7.0ms |       7 | `zig.Ast.Render.finishRenderBlock`     | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  7.7% |  5.0ms |       5 | `zig.Ast.Render.renderExpressionComma` | `opt/zig/lib/std/zig/Ast/Render.zig` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |  Time | Samples | Function                                    | Location                                         |
| -----: | ----: | ------: | ------------------------------------------- | ------------------------------------------------ |
| 100.0% | 6.04s |   6,044 | `start.callMain`                            | `opt/zig/lib/std/start.zig`                      |
| 100.0% | 6.04s |   6,044 | `start.callMainWithArgs`                    | `opt/zig/lib/std/start.zig`                      |
| 100.0% | 6.04s |   6,044 | `start.main`                                | `opt/zig/lib/std/start.zig`                      |
| 100.0% | 6.04s |   6,044 | `_start`                                    | `opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
|  99.9% | 6.03s |   6,039 | `profile.main`                              | `out/profile.zig`                                |
|  70.9% | 4.28s |   4,287 | `zig.Ast.Render.renderTree`                 | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|  70.9% | 4.28s |   4,287 | `zig.Ast.render`                            | `opt/zig/lib/std/zig/Ast.zig`                    |
|  70.9% | 4.28s |   4,287 | `zig.Ast.renderAlloc`                       | `opt/zig/lib/std/zig/Ast.zig`                    |
|  70.8% | 4.28s |   4,282 | `zig.Ast.Render.renderMembers`              | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|  68.9% | 4.16s |   4,162 | `zig.Ast.Render.renderExpression`           | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|  61.3% | 3.70s |   3,704 | `zig.Ast.Render.renderMember`               | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|  47.6% | 2.87s |   2,878 | `zig.Ast.Render.renderBlock`                | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|  47.4% | 2.86s |   2,864 | `zig.Ast.Render.finishRenderBlock`          | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|  42.3% | 2.55s |   2,556 | `zig.Ast.Render.renderVarDecl`              | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|  42.3% | 2.55s |   2,555 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|  28.5% | 1.72s |   1,722 | `zig.Ast.Render.renderContainerDecl`        | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|  27.9% | 1.68s |   1,685 | `zig.tokenizer.Tokenizer.next`              | `opt/zig/lib/std/zig/tokenizer.zig`              |
|  27.2% | 1.64s |   1,641 | `zig.Ast.parse`                             | `opt/zig/lib/std/zig/Ast.zig`                    |
|  27.1% | 1.63s |   1,635 | `zig.Ast.Render.renderToken`                | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|  24.2% | 1.46s |   1,461 | `zig.Ast.Render.tokenSliceForRender`        | `opt/zig/lib/std/zig/Ast/Render.zig`             |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `start.callMain` (`opt/zig/lib/std/start.zig`)

|     % |  Time | Samples | Callee                                                                                | Location                               |
| ----: | ----: | ------: | ------------------------------------------------------------------------------------- | -------------------------------------- |
| 99.9% | 6.03s |   6,039 | `profile.main`                                                                        | `out/profile.zig`                      |
| <0.1% | 2.0ms |       2 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2756).ensureTotalCapacity` | `opt/zig/lib/std/multi_array_list.zig` |
| <0.1% | 1.0ms |       1 | `zig.tokenizer.Tokenizer.next`                                                        | `opt/zig/lib/std/zig/tokenizer.zig`    |
| <0.1% | 1.0ms |       1 | `Io.Threaded.dirOpenFilePosix`                                                        | `opt/zig/lib/std/Io/Threaded.zig`      |

##### `start.callMainWithArgs` (`opt/zig/lib/std/start.zig`)

|      % |  Time | Samples | Callee           | Location                    |
| -----: | ----: | ------: | ---------------- | --------------------------- |
| 100.0% | 6.04s |   6,044 | `start.callMain` | `opt/zig/lib/std/start.zig` |

##### `start.main` (`opt/zig/lib/std/start.zig`)

|      % |  Time | Samples | Callee                   | Location                    |
| -----: | ----: | ------: | ------------------------ | --------------------------- |
| 100.0% | 6.04s |   6,044 | `start.callMainWithArgs` | `opt/zig/lib/std/start.zig` |

##### `_start` (`opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)

|      % |  Time | Samples | Callee       | Location                    |
| -----: | ----: | ------: | ------------ | --------------------------- |
| 100.0% | 6.04s |   6,044 | `start.main` | `opt/zig/lib/std/start.zig` |

##### `profile.main` (`out/profile.zig`)

|     % |   Time | Samples | Callee                                   | Location                      |
| ----: | -----: | ------: | ---------------------------------------- | ----------------------------- |
| 71.0% |  4.28s |   4,287 | `zig.Ast.renderAlloc`                    | `opt/zig/lib/std/zig/Ast.zig` |
| 27.2% |  1.64s |   1,641 | `zig.Ast.parse`                          | `opt/zig/lib/std/zig/Ast.zig` |
|  1.3% | 81.0ms |      81 | `Io.Dir.readFileAllocOptions__anon_2741` | `opt/zig/lib/std/Io/Dir.zig`  |
|  0.3% | 17.0ms |      17 | `Io.Dir.Walker.next`                     | `opt/zig/lib/std/Io/Dir.zig`  |
|  0.1% |  6.0ms |       6 | `zig.Ast.deinit`                         | `opt/zig/lib/std/zig/Ast.zig` |

##### `zig.Ast.Render.renderTree` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |  Time | Samples | Callee                                      | Location                             |
| ----: | ----: | ------: | ------------------------------------------- | ------------------------------------ |
| 99.9% | 4.28s |   4,282 | `zig.Ast.Render.renderMembers`              | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.1% | 3.0ms |       3 | `zig.Ast.Render.renderContainerDocComments` | `opt/zig/lib/std/zig/Ast/Render.zig` |
| <0.1% | 1.0ms |       1 | `zig.Ast.Render.AutoIndentingStream.deinit` | `opt/zig/lib/std/zig/Ast/Render.zig` |
| <0.1% | 1.0ms |       1 | `zig.Ast.Render.renderExtraNewlineToken`    | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.render` (`opt/zig/lib/std/zig/Ast.zig`)

|      % |  Time | Samples | Callee                      | Location                             |
| -----: | ----: | ------: | --------------------------- | ------------------------------------ |
| 100.0% | 4.28s |   4,287 | `zig.Ast.Render.renderTree` | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.renderAlloc` (`opt/zig/lib/std/zig/Ast.zig`)

|      % |  Time | Samples | Callee           | Location                      |
| -----: | ----: | ------: | ---------------- | ----------------------------- |
| 100.0% | 4.28s |   4,287 | `zig.Ast.render` | `opt/zig/lib/std/zig/Ast.zig` |

##### `zig.Ast.Render.renderMembers` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Callee                               | Location                             |
| ----: | ------: | ------: | ------------------------------------ | ------------------------------------ |
| 86.1% |   3.68s |   3,685 | `zig.Ast.Render.renderMember`        | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 13.4% | 575.0ms |     575 | `zig.Ast.Render.renderExpression`    | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.4% |  17.0ms |      17 | `zig.Ast.Render.renderExtraNewline`  | `opt/zig/lib/std/zig/Ast/Render.zig` |
| <0.1% |   2.0ms |       2 | `zig.Ast.fullContainerField`         | `opt/zig/lib/std/zig/Ast.zig`        |
| <0.1% |   1.0ms |       1 | `zig.Ast.Render.tokenSliceForRender` | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.renderExpression` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Callee                               | Location                             |
| ----: | ------: | ------: | ------------------------------------ | ------------------------------------ |
| 69.1% |   2.87s |   2,878 | `zig.Ast.Render.renderBlock`         | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 41.4% |   1.72s |   1,722 | `zig.Ast.Render.renderContainerDecl` | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 32.3% |   1.34s |   1,343 | `zig.Ast.Render.renderExpression`    | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 28.4% |   1.18s |   1,184 | `zig.Ast.Render.renderParamList`     | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 17.0% | 709.0ms |     709 | `zig.Ast.Render.renderExpressions`   | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.renderMember` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Callee                                | Location                             |
| ----: | ------: | ------: | ------------------------------------- | ------------------------------------ |
| 66.6% |   2.46s |   2,466 | `zig.Ast.Render.renderExpression`     | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 48.7% |   1.80s |   1,804 | `zig.Ast.Render.renderVarDecl`        | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  7.9% | 292.0ms |     292 | `zig.Ast.Render.renderContainerField` | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  1.5% |  55.0ms |      55 | `zig.Ast.Render.renderDocComments`    | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.4% |  15.0ms |      15 | `zig.Ast.Render.renderToken`          | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.renderBlock` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |   Time | Samples | Callee                                          | Location                             |
| ----: | -----: | ------: | ----------------------------------------------- | ------------------------------------ |
| 99.5% |  2.86s |   2,864 | `zig.Ast.Render.finishRenderBlock`              | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  1.2% | 34.0ms |      34 | `zig.Ast.Render.renderToken`                    | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.1% |  2.0ms |       2 | `zig.Ast.lastToken`                             | `opt/zig/lib/std/zig/Ast.zig`        |
| <0.1% |  1.0ms |       1 | `zig.Ast.Render.renderIdentifier`               | `opt/zig/lib/std/zig/Ast/Render.zig` |
| <0.1% |  1.0ms |       1 | `zig.Ast.Render.AutoIndentingStream.pushIndent` | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.finishRenderBlock` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Callee                              | Location                             |
| ----: | ------: | ------: | ----------------------------------- | ------------------------------------ |
| 77.5% |   2.21s |   2,219 | `zig.Ast.Render.renderExpression`   | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 31.7% | 909.0ms |     909 | `zig.Ast.Render.renderVarDecl`      | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  1.6% |  47.0ms |      47 | `zig.Ast.Render.renderExtraNewline` | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  1.4% |  40.0ms |      40 | `zig.Ast.lastToken`                 | `opt/zig/lib/std/zig/Ast.zig`        |
|  0.9% |  27.0ms |      27 | `zig.Ast.Render.renderToken`        | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.renderVarDecl` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|      % |  Time | Samples | Callee                                      | Location                             |
| -----: | ----: | ------: | ------------------------------------------- | ------------------------------------ |
| 100.0% | 2.55s |   2,555 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.renderVarDeclWithoutFixups` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Callee                            | Location                             |
| ----: | ------: | ------: | --------------------------------- | ------------------------------------ |
| 91.8% |   2.34s |   2,345 | `zig.Ast.Render.renderExpression` | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  6.1% | 156.0ms |     156 | `zig.Ast.Render.renderIdentifier` | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  3.8% |  96.0ms |      96 | `zig.Ast.Render.renderToken`      | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.4% |  10.0ms |      10 | `zig.Ast.firstToken`              | `opt/zig/lib/std/zig/Ast.zig`        |
|  0.2% |   5.0ms |       5 | `zig.Ast.tokensOnSameLine`        | `opt/zig/lib/std/zig/Ast.zig`        |

##### `zig.Ast.Render.renderContainerDecl` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Callee                                  | Location                             |
| ----: | ------: | ------: | --------------------------------------- | ------------------------------------ |
| 88.5% |   1.52s |   1,524 | `zig.Ast.Render.renderMember`           | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 10.5% | 180.0ms |     180 | `zig.Ast.Render.isOneLineContainerDecl` | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  2.3% |  39.0ms |      39 | `zig.Ast.Render.renderExtraNewline`     | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.9% |  15.0ms |      15 | `zig.Ast.Render.renderToken`            | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.6% |  11.0ms |      11 | `zig.Ast.lastToken`                     | `opt/zig/lib/std/zig/Ast.zig`        |

##### `zig.tokenizer.Tokenizer.next` (`opt/zig/lib/std/zig/tokenizer.zig`)

|     % |    Time | Samples | Callee                           | Location                            |
| ----: | ------: | ------: | -------------------------------- | ----------------------------------- |
| 19.6% | 331.0ms |     331 | `zig.tokenizer.Token.getKeyword` | `opt/zig/lib/std/zig/tokenizer.zig` |

##### `zig.Ast.parse` (`opt/zig/lib/std/zig/Ast.zig`)

|     % |    Time | Samples | Callee                                                                                | Location                               |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------- | -------------------------------------- |
| 49.5% | 812.0ms |     812 | `zig.Ast.parseTokens`                                                                 | `opt/zig/lib/std/zig/Ast.zig`          |
| 38.0% | 624.0ms |     624 | `zig.tokenizer.Tokenizer.next`                                                        | `opt/zig/lib/std/zig/tokenizer.zig`    |
|  6.3% | 103.0ms |     103 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2756).append`              | `opt/zig/lib/std/multi_array_list.zig` |
|  4.2% |  69.0ms |      69 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2756).ensureTotalCapacity` | `opt/zig/lib/std/multi_array_list.zig` |

##### `zig.Ast.Render.renderToken` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Callee                                        | Location                             |
| ----: | ------: | ------: | --------------------------------------------- | ------------------------------------ |
| 41.4% | 677.0ms |     677 | `zig.Ast.Render.tokenSliceForRender`          | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 35.0% | 573.0ms |     573 | `zig.Ast.Render.renderSpace`                  | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 20.9% | 341.0ms |     341 | `zig.Ast.Render.AutoIndentingStream.writeAll` | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  2.4% |  40.0ms |      40 | `zig.Ast.tokenSlice`                          | `opt/zig/lib/std/zig/Ast.zig`        |
|  0.1% |   1.0ms |       1 | `zig.Ast.Render.renderComments`               | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.tokenSliceForRender` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Callee                           | Location                            |
| ----: | ------: | ------: | -------------------------------- | ----------------------------------- |
| 72.0% |   1.05s |   1,052 | `zig.Ast.tokenSlice`             | `opt/zig/lib/std/zig/Ast.zig`       |
|  8.4% | 122.0ms |     122 | `zig.tokenizer.Token.Tag.lexeme` | `opt/zig/lib/std/zig/tokenizer.zig` |
|  2.9% |  43.0ms |      43 | `zig.Ast.tokenTag`               | `opt/zig/lib/std/zig/Ast.zig`       |
|  0.1% |   1.0ms |       1 | `mem.trimEnd__anon_28242`        | `opt/zig/lib/std/mem.zig`           |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `profile.main` (`out/profile.zig`) ← `start.callMain` (`opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)

|    % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8.8% | 532.0ms |     532 | `zig.tokenizer.Tokenizer.next` (`opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.Ast.parse` (`opt/zig/lib/std/zig/Ast.zig`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 3.2% | 194.0ms |     194 | `memset` (`opt/zig/lib/compiler_rt.zig`) ← `mem.Allocator.allocBytesWithAlignment__anon_10001` (`opt/zig/lib/std/mem/Allocator.zig`) ← `mem.Allocator.allocWithSizeAndAlignment__anon_9851` ← `mem.Allocator.allocAdvancedWithRetAddr` ← `mem.Allocator.alignedAlloc__anon_9848` ← `multi_array_list.MultiArrayList(zig.Ast.Node).setCapacity` (`opt/zig/lib/std/multi_array_list.zig`) ← `multi_array_list.MultiArrayList(zig.Ast.Node).ensureTotalCapacity` ← `zig.Ast.parseTokens` (`opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.parse`                                                                                                                                                                                                      |
| 1.1% |  69.0ms |      69 | `memset` (`opt/zig/lib/compiler_rt.zig`) ← `mem.Allocator.allocBytesWithAlignment__anon_10001` (`opt/zig/lib/std/mem/Allocator.zig`) ← `mem.Allocator.allocWithSizeAndAlignment__anon_9851` ← `mem.Allocator.allocAdvancedWithRetAddr` ← `mem.Allocator.alignedAlloc__anon_9848` ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2756).setCapacity` (`opt/zig/lib/std/multi_array_list.zig`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2756).ensureTotalCapacity` ← `zig.Ast.parse` (`opt/zig/lib/std/zig/Ast.zig`)                                                                                                                                                                                          |
| 1.0% |  59.0ms |      59 | `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` (`opt/zig/lib/std/static_string_map.zig`) ← `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).get` ← `zig.tokenizer.Token.getKeyword` (`opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.tokenizer.Tokenizer.next` ← `zig.Ast.parse` (`opt/zig/lib/std/zig/Ast.zig`)                                                                                                                                                                                                                                                                                                                                 |
| 0.6% |  38.0ms |      38 | `zig.tokenizer.Tokenizer.next` (`opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.Ast.tokenSlice` (`opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.Render.hasComment` (`opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.isOneLineContainerDecl` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc`                                                                                                                                                               |
| 0.6% |  38.0ms |      38 | `memset` (`opt/zig/lib/compiler_rt.zig`) ← `mem.Allocator.allocBytesWithAlignment__anon_10001` (`opt/zig/lib/std/mem/Allocator.zig`) ← `mem.Allocator.allocWithSizeAndAlignment__anon_9851` ← `mem.Allocator.allocAdvancedWithRetAddr` ← `mem.Allocator.alignedAlloc__anon_9848` ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2756).setCapacity` (`opt/zig/lib/std/multi_array_list.zig`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2756).ensureTotalCapacity` ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2756).ensureUnusedCapacity` ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2756).append` ← `zig.Ast.parse` (`opt/zig/lib/std/zig/Ast.zig`)                      |
| 0.6% |  36.0ms |      36 | `Io.Threaded.fileReadPositionalPosix` (`opt/zig/lib/std/Io/Threaded.zig`) ← `Io.Threaded.fileReadPositional` ← `Io.File.Reader.readVecPositional` (`opt/zig/lib/std/Io/File/Reader.zig`) ← `Io.File.Reader.readVec` ← `Io.Reader.readVec` (`opt/zig/lib/std/Io/Reader.zig`) ← `Io.Reader.readSliceShort` ← `Io.Writer.Allocating.sendFile` (`opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.sendFile` ← `Io.File.Reader.streamMode` (`opt/zig/lib/std/Io/File/Reader.zig`) ← `Io.File.Reader.stream` ← `Io.Reader.stream` (`opt/zig/lib/std/Io/Reader.zig`) ← `Io.Reader.appendRemainingAligned__anon_35672` ← `Io.Reader.allocRemainingAlignedSentinel__anon_35655` ← `Io.Dir.readFileAllocOptions__anon_2741` (`opt/zig/lib/std/Io/Dir.zig`) |
| 0.5% |  33.0ms |      33 | `static_string_map.defaultEql` (`opt/zig/lib/std/static_string_map.zig`) ← `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` ← `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).get` ← `zig.tokenizer.Token.getKeyword` (`opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.tokenizer.Tokenizer.next` ← `zig.Ast.parse` (`opt/zig/lib/std/zig/Ast.zig`)                                                                                                                                                                                                                                                                                                |
| 0.5% |  33.0ms |      33 | `zig.Ast.parse` (`opt/zig/lib/std/zig/Ast.zig`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.5% |  28.0ms |      28 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2756).ensureTotalCapacity` (`opt/zig/lib/std/multi_array_list.zig`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2756).ensureUnusedCapacity` ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2756).append` ← `zig.Ast.parse` (`opt/zig/lib/std/zig/Ast.zig`)                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.3% |  20.0ms |      20 | `Io.Threaded.dirOpenFilePosix` (`opt/zig/lib/std/Io/Threaded.zig`) ← `Io.Dir.openFile` (`opt/zig/lib/std/Io/Dir.zig`) ← `Io.Dir.readFileAllocOptions__anon_2741`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.3% |  19.0ms |      19 | `zig.tokenizer.Tokenizer.next` (`opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.Ast.tokenSlice` (`opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.Render.tokenSliceForRender` (`opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderIdentifier` ← `zig.Ast.Render.renderContainerField` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc`                                                                                    |
| 0.3% |  18.0ms |      18 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2756).appendAssumeCapacity` (`opt/zig/lib/std/multi_array_list.zig`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2756).append` ← `zig.Ast.parse` (`opt/zig/lib/std/zig/Ast.zig`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.3% |  17.0ms |      17 | `zig.tokenizer.Tokenizer.next` (`opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.Ast.tokenSlice` (`opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.Render.tokenSliceForRender` (`opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderDocComments` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc`                                                                                            |
| 0.3% |  17.0ms |      17 | `zig.tokenizer.Tokenizer.next` (`opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.Ast.tokenSlice` (`opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.Render.hasComment` (`opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderArrayInit` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.finishRenderBlock` ← `zig.Ast.Render.renderBlock` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc`                                                                                                                                     |
| 0.3% |  17.0ms |      17 | `zig.tokenizer.Tokenizer.next` (`opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.Ast.tokenSlice` (`opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.Render.tokenSliceForRender` (`opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderIdentifier` ← `zig.Ast.Render.renderFnProto` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc`                                                                                                                                                                                                                                                 |
| 0.2% |  15.0ms |      15 | `memset` (`opt/zig/lib/compiler_rt.zig`) ← `Io.Threaded.dirOpenFilePosix` (`opt/zig/lib/std/Io/Threaded.zig`) ← `Io.Dir.openFile` (`opt/zig/lib/std/Io/Dir.zig`) ← `Io.Dir.readFileAllocOptions__anon_2741`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.2% |  15.0ms |      15 | `zig.tokenizer.Token.Tag.lexeme` (`opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.Ast.Render.hasComment` (`opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.isOneLineContainerDecl` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc`                                                                                                                                                                                                                    |
| 0.2% |  14.0ms |      14 | `mem.findScalarPos__anon_6382` (`opt/zig/lib/std/mem.zig`) ← `mem.findScalar__anon_6379` ← `zig.Ast.Render.hasComment` (`opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.isOneLineContainerDecl` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc`                                                                                                                                                                                                  |
| 0.2% |  13.0ms |      13 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2756).Slice.set` (`opt/zig/lib/std/multi_array_list.zig`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2756).set` ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2756).appendAssumeCapacity` ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2756).append` ← `zig.Ast.parse` (`opt/zig/lib/std/zig/Ast.zig`)                                                                                                                                                                                                                                                                                                                           |
