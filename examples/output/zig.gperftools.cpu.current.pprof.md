# CPU profile

Took 5.79s over 5,796 samples (1.0ms per sample).

| Category         |     % |    Time | Samples |
| ---------------- | ----: | ------: | ------: |
| Standard library | 98.1% |   5.68s |   5,687 |
| Native           |  1.9% | 109.0ms |     109 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

#### Categories

##### Standard library

|     % |    Time | Samples | Function                                                                                             | Location                                   |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| 21.9% |   1.26s |   1,268 | `zig.tokenizer.Tokenizer.next`                                                                       | `../opt/zig/lib/std/zig/tokenizer.zig`     |
|  6.1% | 351.0ms |     351 | `memset`                                                                                             | `../opt/zig/lib/compiler_rt.zig`           |
|  4.5% | 262.0ms |     262 | `zig.Ast.tokenSlice`                                                                                 | `../opt/zig/lib/std/zig/Ast.zig`           |
|  4.4% | 254.0ms |     254 | `zig.Ast.Render.tokenSliceForRender`                                                                 | `../opt/zig/lib/std/zig/Ast/Render.zig`    |
|  4.0% | 229.0ms |     229 | `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` | `../opt/zig/lib/std/static_string_map.zig` |
|  3.4% | 196.0ms |     196 | `zig.Ast.Render.renderComments`                                                                      | `../opt/zig/lib/std/zig/Ast/Render.zig`    |
|  3.3% | 193.0ms |     193 | `zig.Ast.Render.renderExpression`                                                                    | `../opt/zig/lib/std/zig/Ast/Render.zig`    |
|  3.3% | 191.0ms |     191 | `zig.tokenizer.Token.Tag.lexeme`                                                                     | `../opt/zig/lib/std/zig/tokenizer.zig`     |
|  3.0% | 171.0ms |     171 | `zig.Ast.Render.renderSpace`                                                                         | `../opt/zig/lib/std/zig/Ast/Render.zig`    |
|  1.9% | 112.0ms |     112 | `mem.findScalarPos__anon_6382`                                                                       | `../opt/zig/lib/std/mem.zig`               |
|  1.9% | 112.0ms |     112 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_28815`                              | `../opt/zig/lib/std/multi_array_list.zig`  |
|  1.5% |  86.0ms |      86 | `zig.Ast.tokenTag`                                                                                   | `../opt/zig/lib/std/zig/Ast.zig`           |
|  1.5% |  86.0ms |      86 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32262`                              | `../opt/zig/lib/std/multi_array_list.zig`  |
|  1.3% |  77.0ms |      77 | `static_string_map.defaultEql`                                                                       | `../opt/zig/lib/std/static_string_map.zig` |
|  1.3% |  77.0ms |      77 | `zig.Ast.Render.renderIdentifier`                                                                    | `../opt/zig/lib/std/zig/Ast/Render.zig`    |
|  1.3% |  75.0ms |      75 | `zig.Ast.lastToken`                                                                                  | `../opt/zig/lib/std/zig/Ast.zig`           |
|  1.1% |  65.0ms |      65 | `zig.Ast.nodeTag`                                                                                    | `../opt/zig/lib/std/zig/Ast.zig`           |
|  1.1% |  62.0ms |      62 | `zig.Ast.firstToken`                                                                                 | `../opt/zig/lib/std/zig/Ast.zig`           |
|  1.1% |  62.0ms |      62 | `Io.Writer.writeAll`                                                                                 | `../opt/zig/lib/std/Io/Writer.zig`         |
|  1.1% |  62.0ms |      62 | `zig.Ast.Render.renderExtraNewlineToken`                                                             | `../opt/zig/lib/std/zig/Ast/Render.zig`    |

##### Native

|     % |   Time | Samples | Function  | Location                                 |
| ----: | -----: | ------: | --------- | ---------------------------------------- |
|  0.7% | 39.0ms |      39 | `0xe3e00` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.3% | 15.0ms |      15 | `0x9d200` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.2% | 14.0ms |      14 | `0xdda44` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.2% | 11.0ms |      11 | `0xe3acc` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.1% |  7.0ms |       7 | `0xde3c8` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.1% |  4.0ms |       4 | `0xdd2b4` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.1% |  3.0ms |       3 | `0x929c4` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.1% |  3.0ms |       3 | `0x91d0c` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| <0.1% |  2.0ms |       2 | `0x9d210` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| <0.1% |  1.0ms |       1 | `0xe7e0c` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| <0.1% |  1.0ms |       1 | `0x92274` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| <0.1% |  1.0ms |       1 | `0x91c70` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| <0.1% |  1.0ms |       1 | `0x92240` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| <0.1% |  1.0ms |       1 | `0x8fd10` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| <0.1% |  1.0ms |       1 | `0x8ff24` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| <0.1% |  1.0ms |       1 | `0x8ffd0` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| <0.1% |  1.0ms |       1 | `0x90e1c` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| <0.1% |  1.0ms |       1 | `0x92dcc` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| <0.1% |  1.0ms |       1 | `0x9d220` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| <0.1% |  1.0ms |       1 | `0x8fad8` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `zig.tokenizer.Tokenizer.next` (`../opt/zig/lib/std/zig/tokenizer.zig`)

|     % |    Time | Samples | Location                                    |
| ----: | ------: | ------: | ------------------------------------------- |
| 22.0% | 279.0ms |     279 | `../opt/zig/lib/std/zig/tokenizer.zig:666`  |
| 16.7% | 212.0ms |     212 | `../opt/zig/lib/std/zig/tokenizer.zig:667`  |
| 10.3% | 131.0ms |     131 | `../opt/zig/lib/std/zig/tokenizer.zig:670`  |
|  8.4% | 107.0ms |     107 | `../opt/zig/lib/std/zig/tokenizer.zig:405`  |
|  7.4% |  94.0ms |      94 | `../opt/zig/lib/std/zig/tokenizer.zig:1033` |

##### `memset` (`../opt/zig/lib/compiler_rt.zig`)

|     % |    Time | Samples | Location                             |
| ----: | ------: | ------: | ------------------------------------ |
| 86.9% | 305.0ms |     305 | `../opt/zig/lib/compiler_rt.zig:686` |
|  6.8% |  24.0ms |      24 | `../opt/zig/lib/compiler_rt.zig:684` |
|  1.7% |   6.0ms |       6 | `../opt/zig/lib/compiler_rt.zig:685` |

##### `zig.Ast.tokenSlice` (`../opt/zig/lib/std/zig/Ast.zig`)

|     % |    Time | Samples | Location                             |
| ----: | ------: | ------: | ------------------------------------ |
| 41.6% | 109.0ms |     109 | `../opt/zig/lib/std/zig/Ast.zig:276` |
| 13.0% |  34.0ms |      34 | `../opt/zig/lib/std/zig/Ast.zig:277` |
|  7.3% |  19.0ms |      19 | `../opt/zig/lib/std/zig/Ast.zig:291` |
|  6.9% |  18.0ms |      18 | `../opt/zig/lib/std/zig/Ast.zig:286` |
|  3.1% |   8.0ms |       8 | `../opt/zig/lib/std/zig/Ast.zig:280` |

##### `zig.Ast.Render.tokenSliceForRender` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Location                                     |
| ----: | ------: | ------: | -------------------------------------------- |
| 63.8% | 162.0ms |     162 | `../opt/zig/lib/std/zig/Ast/Render.zig:3168` |
| 13.0% |  33.0ms |      33 | `../opt/zig/lib/std/zig/Ast/Render.zig:3176` |
| 11.0% |  28.0ms |      28 | `../opt/zig/lib/std/zig/Ast/Render.zig:3169` |
|  2.8% |   7.0ms |       7 | `../opt/zig/lib/std/zig/Ast/Render.zig:3170` |

##### `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` (`../opt/zig/lib/std/static_string_map.zig`)

|     % |    Time | Samples | Location                                       |
| ----: | ------: | ------: | ---------------------------------------------- |
| 47.2% | 108.0ms |     108 | `../opt/zig/lib/std/static_string_map.zig:208` |
| 46.3% | 106.0ms |     106 | `../opt/zig/lib/std/static_string_map.zig:213` |
|  4.4% |  10.0ms |      10 | `../opt/zig/lib/std/static_string_map.zig:203` |
|  0.9% |   2.0ms |       2 | `../opt/zig/lib/std/static_string_map.zig:214` |
|  0.4% |   1.0ms |       1 | `../opt/zig/lib/std/static_string_map.zig:209` |

##### `zig.Ast.Render.renderComments` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |   Time | Samples | Location                                     |
| ----: | -----: | ------: | -------------------------------------------- |
| 37.8% | 74.0ms |      74 | `../opt/zig/lib/std/zig/Ast/Render.zig:3016` |
| 19.9% | 39.0ms |      39 | `../opt/zig/lib/std/zig/Ast/Render.zig:3072` |
|  1.0% |  2.0ms |       2 | `../opt/zig/lib/std/zig/Ast/Render.zig:3065` |
|  0.5% |  1.0ms |       1 | `../opt/zig/lib/std/zig/Ast/Render.zig:3046` |
|  0.5% |  1.0ms |       1 | `../opt/zig/lib/std/zig/Ast/Render.zig:3021` |

##### `zig.Ast.Render.renderExpression` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |   Time | Samples | Location                                    |
| ----: | -----: | ------: | ------------------------------------------- |
| 19.2% | 37.0ms |      37 | `../opt/zig/lib/std/zig/Ast/Render.zig:317` |
| 12.4% | 24.0ms |      24 | `../opt/zig/lib/std/zig/Ast/Render.zig:315` |
|  7.8% | 15.0ms |      15 | `../opt/zig/lib/std/zig/Ast/Render.zig:326` |
|  6.7% | 13.0ms |      13 | `../opt/zig/lib/std/zig/Ast/Render.zig:314` |
|  6.7% | 13.0ms |      13 | `../opt/zig/lib/std/zig/Ast/Render.zig:324` |

##### `zig.tokenizer.Token.Tag.lexeme` (`../opt/zig/lib/std/zig/tokenizer.zig`)

|     % |   Time | Samples | Location                                   |
| ----: | -----: | ------: | ------------------------------------------ |
| 40.8% | 78.0ms |      78 | `../opt/zig/lib/std/zig/tokenizer.zig:187` |
|  2.1% |  4.0ms |       4 | `../opt/zig/lib/std/zig/tokenizer.zig:186` |

##### `zig.Ast.Render.renderSpace` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |   Time | Samples | Location                                     |
| ----: | -----: | ------: | -------------------------------------------- |
| 18.7% | 32.0ms |      32 | `../opt/zig/lib/std/zig/Ast/Render.zig:2756` |
| 18.1% | 31.0ms |      31 | `../opt/zig/lib/std/zig/Ast/Render.zig:2751` |
|  9.9% | 17.0ms |      17 | `../opt/zig/lib/std/zig/Ast/Render.zig:2742` |
|  8.2% | 14.0ms |      14 | `../opt/zig/lib/std/zig/Ast/Render.zig:2744` |
|  7.6% | 13.0ms |      13 | `../opt/zig/lib/std/zig/Ast/Render.zig:2739` |

##### `mem.findScalarPos__anon_6382` (`../opt/zig/lib/std/mem.zig`)

|     % |   Time | Samples | Location                          |
| ----: | -----: | ------: | --------------------------------- |
| 32.1% | 36.0ms |      36 | `../opt/zig/lib/std/mem.zig:1297` |
| 17.0% | 19.0ms |      19 | `../opt/zig/lib/std/mem.zig:1285` |
|  8.0% |  9.0ms |       9 | `../opt/zig/lib/std/mem.zig:1299` |
|  7.1% |  8.0ms |       8 | `../opt/zig/lib/std/mem.zig:1263` |
|  6.3% |  7.0ms |       7 | `../opt/zig/lib/std/mem.zig:1284` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_28815` (`../opt/zig/lib/std/multi_array_list.zig`)

|      % |    Time | Samples | Location                                      |
| -----: | ------: | ------: | --------------------------------------------- |
| 100.0% | 112.0ms |     112 | `../opt/zig/lib/std/multi_array_list.zig:102` |

##### `zig.Ast.tokenTag` (`../opt/zig/lib/std/zig/Ast.zig`)

|     % |   Time | Samples | Location                            |
| ----: | -----: | ------: | ----------------------------------- |
| 81.4% | 70.0ms |      70 | `../opt/zig/lib/std/zig/Ast.zig:89` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32262` (`../opt/zig/lib/std/multi_array_list.zig`)

|     % |   Time | Samples | Location                                      |
| ----: | -----: | ------: | --------------------------------------------- |
| 96.5% | 83.0ms |      83 | `../opt/zig/lib/std/multi_array_list.zig:102` |
|  3.5% |  3.0ms |       3 | `../opt/zig/lib/std/multi_array_list.zig:109` |

##### `static_string_map.defaultEql` (`../opt/zig/lib/std/static_string_map.zig`)

|     % |   Time | Samples | Location                                      |
| ----: | -----: | ------: | --------------------------------------------- |
| 92.2% | 71.0ms |      71 | `../opt/zig/lib/std/static_string_map.zig:15` |
|  5.2% |  4.0ms |       4 | `../opt/zig/lib/std/static_string_map.zig:16` |
|  1.3% |  1.0ms |       1 | `../opt/zig/lib/std/static_string_map.zig:14` |
|  1.3% |  1.0ms |       1 | `../opt/zig/lib/std/static_string_map.zig:17` |

##### `zig.Ast.Render.renderIdentifier` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |   Time | Samples | Location                                     |
| ----: | -----: | ------: | -------------------------------------------- |
| 58.4% | 45.0ms |      45 | `../opt/zig/lib/std/zig/Ast/Render.zig:2813` |
| 13.0% | 10.0ms |      10 | `../opt/zig/lib/std/zig/Ast/Render.zig:2812` |
|  5.2% |  4.0ms |       4 | `../opt/zig/lib/std/zig/Ast/Render.zig:2815` |
|  3.9% |  3.0ms |       3 | `../opt/zig/lib/std/zig/Ast/Render.zig:2823` |

##### `zig.Ast.lastToken` (`../opt/zig/lib/std/zig/Ast.zig`)

|     % |   Time | Samples | Location                             |
| ----: | -----: | ------: | ------------------------------------ |
| 49.3% | 37.0ms |      37 | `../opt/zig/lib/std/zig/Ast.zig:881` |
| 12.0% |  9.0ms |       9 | `../opt/zig/lib/std/zig/Ast.zig:884` |

##### `zig.Ast.nodeTag` (`../opt/zig/lib/std/zig/Ast.zig`)

|     % |   Time | Samples | Location                            |
| ----: | -----: | ------: | ----------------------------------- |
| 98.5% | 64.0ms |      64 | `../opt/zig/lib/std/zig/Ast.zig:97` |

##### `zig.Ast.firstToken` (`../opt/zig/lib/std/zig/Ast.zig`)

|     % |   Time | Samples | Location                             |
| ----: | -----: | ------: | ------------------------------------ |
| 69.4% | 43.0ms |      43 | `../opt/zig/lib/std/zig/Ast.zig:604` |
|  9.7% |  6.0ms |       6 | `../opt/zig/lib/std/zig/Ast.zig:607` |
|  1.6% |  1.0ms |       1 | `../opt/zig/lib/std/zig/Ast.zig:753` |
|  1.6% |  1.0ms |       1 | `../opt/zig/lib/std/zig/Ast.zig:785` |

##### `Io.Writer.writeAll` (`../opt/zig/lib/std/Io/Writer.zig`)

|     % |   Time | Samples | Location                               |
| ----: | -----: | ------: | -------------------------------------- |
| 43.5% | 27.0ms |      27 | `../opt/zig/lib/std/Io/Writer.zig:549` |
| 33.9% | 21.0ms |      21 | `../opt/zig/lib/std/Io/Writer.zig:551` |

##### `zig.Ast.Render.renderExtraNewlineToken` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |   Time | Samples | Location                                     |
| ----: | -----: | ------: | -------------------------------------------- |
| 32.3% | 20.0ms |      20 | `../opt/zig/lib/std/zig/Ast/Render.zig:3099` |
| 12.9% |  8.0ms |       8 | `../opt/zig/lib/std/zig/Ast/Render.zig:3102` |
|  9.7% |  6.0ms |       6 | `../opt/zig/lib/std/zig/Ast/Render.zig:3101` |
|  6.5% |  4.0ms |       4 | `../opt/zig/lib/std/zig/Ast/Render.zig:3092` |
|  6.5% |  4.0ms |       4 | `../opt/zig/lib/std/zig/Ast/Render.zig:3081` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `zig.tokenizer.Tokenizer.next` (`../opt/zig/lib/std/zig/tokenizer.zig`)

|     % |    Time | Samples | Caller                               | Location                                |
| ----: | ------: | ------: | ------------------------------------ | --------------------------------------- |
| 60.6% | 768.0ms |     768 | `zig.Ast.tokenSlice`                 | `../opt/zig/lib/std/zig/Ast.zig`        |
| 39.4% | 499.0ms |     499 | `zig.Ast.parse`                      | `../opt/zig/lib/std/zig/Ast.zig`        |
|  0.1% |   1.0ms |       1 | `zig.Ast.Render.tokenSliceForRender` | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `memset` (`../opt/zig/lib/compiler_rt.zig`)

|     % |    Time | Samples | Caller                                                                | Location                               |
| ----: | ------: | ------: | --------------------------------------------------------------------- | -------------------------------------- |
| 80.1% | 281.0ms |     281 | `mem.Allocator.allocBytesWithAlignment__anon_10001`                   | `../opt/zig/lib/std/mem/Allocator.zig` |
|  7.4% |  26.0ms |      26 | `Io.Writer.splatByte`                                                 | `../opt/zig/lib/std/Io/Writer.zig`     |
|  5.7% |  20.0ms |      20 | `array_list.Aligned(zig.Ast.Node.Index,null).shrinkRetainingCapacity` | `../opt/zig/lib/std/array_list.zig`    |
|  2.6% |   9.0ms |       9 | `Io.Threaded.dirOpenFilePosix`                                        | `../opt/zig/lib/std/Io/Threaded.zig`   |
|  1.1% |   4.0ms |       4 | `mem.Allocator.allocBytesWithAlignment__anon_7893`                    | `../opt/zig/lib/std/mem/Allocator.zig` |

##### `zig.Ast.tokenSlice` (`../opt/zig/lib/std/zig/Ast.zig`)

|     % |    Time | Samples | Caller                                   | Location                                |
| ----: | ------: | ------: | ---------------------------------------- | --------------------------------------- |
| 56.9% | 149.0ms |     149 | `zig.Ast.Render.tokenSliceForRender`     | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 15.6% |  41.0ms |      41 | `zig.Ast.Render.renderToken`             | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 13.0% |  34.0ms |      34 | `zig.Ast.Render.hasComment`              | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  8.0% |  21.0ms |      21 | `zig.Ast.Render.renderIdentifier`        | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  2.3% |   6.0ms |       6 | `zig.Ast.Render.renderExtraNewlineToken` | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.tokenSliceForRender` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Caller                                   | Location                                |
| ----: | ------: | ------: | ---------------------------------------- | --------------------------------------- |
| 61.4% | 156.0ms |     156 | `zig.Ast.Render.renderToken`             | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 22.0% |  56.0ms |      56 | `zig.Ast.Render.renderIdentifier`        | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 10.2% |  26.0ms |      26 | `zig.Ast.Render.renderExpression`        | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  2.4% |   6.0ms |       6 | `zig.Ast.Render.renderExtraNewlineToken` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  1.6% |   4.0ms |       4 | `zig.Ast.Render.renderParamList`         | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` (`../opt/zig/lib/std/static_string_map.zig`)

|      % |    Time | Samples | Caller                                                                                          | Location                                   |
| -----: | ------: | ------: | ----------------------------------------------------------------------------------------------- | ------------------------------------------ |
| 100.0% | 229.0ms |     229 | `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).get` | `../opt/zig/lib/std/static_string_map.zig` |

##### `zig.Ast.Render.renderComments` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|      % |    Time | Samples | Caller                       | Location                                |
| -----: | ------: | ------: | ---------------------------- | --------------------------------------- |
| 100.0% | 196.0ms |     196 | `zig.Ast.Render.renderSpace` | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.renderExpression` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |   Time | Samples | Caller                                      | Location                                |
| ----: | -----: | ------: | ------------------------------------------- | --------------------------------------- |
| 28.0% | 54.0ms |      54 | `zig.Ast.Render.renderExpression`           | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 19.2% | 37.0ms |      37 | `zig.Ast.Render.renderParamList`            | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 10.4% | 20.0ms |      20 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  7.3% | 14.0ms |      14 | `zig.Ast.Render.renderCall`                 | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  6.7% | 13.0ms |      13 | `zig.Ast.Render.finishRenderBlock`          | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.tokenizer.Token.Tag.lexeme` (`../opt/zig/lib/std/zig/tokenizer.zig`)

|     % |    Time | Samples | Caller                               | Location                                |
| ----: | ------: | ------: | ------------------------------------ | --------------------------------------- |
| 71.2% | 136.0ms |     136 | `zig.Ast.Render.tokenSliceForRender` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 25.7% |  49.0ms |      49 | `zig.Ast.Render.hasComment`          | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  2.1% |   4.0ms |       4 | `zig.Ast.Render.renderExpression`    | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  1.0% |   2.0ms |       2 | `zig.Parse.parseExpr`                | `../opt/zig/lib/std/zig/Parse.zig`      |

##### `zig.Ast.Render.renderSpace` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Caller                                 | Location                                |
| ----: | ------: | ------: | -------------------------------------- | --------------------------------------- |
| 80.7% | 138.0ms |     138 | `zig.Ast.Render.renderToken`           | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 15.8% |  27.0ms |      27 | `zig.Ast.Render.renderExpression`      | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  1.2% |   2.0ms |       2 | `zig.Ast.Render.renderExpressionComma` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.6% |   1.0ms |       1 | `zig.Ast.Render.renderArrayInit`       | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.6% |   1.0ms |       1 | `zig.Ast.Render.renderCall`            | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `mem.findScalarPos__anon_6382` (`../opt/zig/lib/std/mem.zig`)

|     % |    Time | Samples | Caller                                      | Location                                |
| ----: | ------: | ------: | ------------------------------------------- | --------------------------------------- |
| 97.3% | 109.0ms |     109 | `mem.findScalar__anon_6379`                 | `../opt/zig/lib/std/mem.zig`            |
|  0.9% |   1.0ms |       1 | `zig.Ast.Render.isOneLineContainerDecl`     | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.9% |   1.0ms |       1 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.9% |   1.0ms |       1 | `zig.Ast.Render.renderToken`                | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_28815` (`../opt/zig/lib/std/multi_array_list.zig`)

|     % |    Time | Samples | Caller                  | Location                         |
| ----: | ------: | ------: | ----------------------- | -------------------------------- |
| 99.1% | 111.0ms |     111 | `zig.Ast.nodeData`      | `../opt/zig/lib/std/zig/Ast.zig` |
|  0.9% |   1.0ms |       1 | `zig.Ast.switchCaseOne` | `../opt/zig/lib/std/zig/Ast.zig` |

##### `zig.Ast.tokenTag` (`../opt/zig/lib/std/zig/Ast.zig`)

|     % |   Time | Samples | Caller                               | Location                                |
| ----: | -----: | ------: | ------------------------------------ | --------------------------------------- |
| 37.2% | 32.0ms |      32 | `zig.Ast.Render.tokenSliceForRender` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 23.3% | 20.0ms |      20 | `zig.Ast.Render.renderSpace`         | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 17.4% | 15.0ms |      15 | `zig.Ast.tokenSlice`                 | `../opt/zig/lib/std/zig/Ast.zig`        |
| 11.6% | 10.0ms |      10 | `zig.Ast.Render.renderIdentifier`    | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  2.3% |  2.0ms |       2 | `zig.Ast.Render.renderExpression`    | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32262` (`../opt/zig/lib/std/multi_array_list.zig`)

|     % |   Time | Samples | Caller                                                    | Location                                  |
| ----: | -----: | ------: | --------------------------------------------------------- | ----------------------------------------- |
| 98.8% | 85.0ms |      85 | `zig.Ast.nodeMainToken`                                   | `../opt/zig/lib/std/zig/Ast.zig`          |
|  1.2% |  1.0ms |       1 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.set` | `../opt/zig/lib/std/multi_array_list.zig` |

##### `static_string_map.defaultEql` (`../opt/zig/lib/std/static_string_map.zig`)

|     % |   Time | Samples | Caller                                                                                                                | Location                                   |
| ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| 98.7% | 76.0ms |      76 | `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex`                  | `../opt/zig/lib/std/static_string_map.zig` |
|  1.3% |  1.0ms |       1 | `static_string_map.StaticStringMapWithEql(zig.Ast.Render.renderExpression.CastKind,(function 'defaultEql')).getIndex` | `../opt/zig/lib/std/static_string_map.zig` |

##### `zig.Ast.Render.renderIdentifier` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |   Time | Samples | Caller                                      | Location                                |
| ----: | -----: | ------: | ------------------------------------------- | --------------------------------------- |
| 49.4% | 38.0ms |      38 | `zig.Ast.Render.renderExpression`           | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 11.7% |  9.0ms |       9 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  9.1% |  7.0ms |       7 | `zig.Ast.Render.renderParamList`            | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  7.8% |  6.0ms |       6 | `zig.Ast.Render.renderFnProto`              | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  3.9% |  3.0ms |       3 | `zig.Ast.Render.renderStructInit`           | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.lastToken` (`../opt/zig/lib/std/zig/Ast.zig`)

|     % |   Time | Samples | Caller                                 | Location                                |
| ----: | -----: | ------: | -------------------------------------- | --------------------------------------- |
| 30.7% | 23.0ms |      23 | `zig.Ast.Render.renderExpression`      | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 17.3% | 13.0ms |      13 | `zig.Ast.Render.renderParamList`       | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 12.0% |  9.0ms |       9 | `zig.Ast.Render.renderExpressionComma` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 10.7% |  8.0ms |       8 | `zig.Ast.Render.renderArrayInit`       | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  5.3% |  4.0ms |       4 | `zig.Ast.Render.renderWhile`           | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.nodeTag` (`../opt/zig/lib/std/zig/Ast.zig`)

|     % |   Time | Samples | Caller                            | Location                                |
| ----: | -----: | ------: | --------------------------------- | --------------------------------------- |
| 35.4% | 23.0ms |      23 | `zig.Ast.Render.renderExpression` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 32.3% | 21.0ms |      21 | `zig.Ast.lastToken`               | `../opt/zig/lib/std/zig/Ast.zig`        |
| 26.2% | 17.0ms |      17 | `zig.Ast.firstToken`              | `../opt/zig/lib/std/zig/Ast.zig`        |
|  3.1% |  2.0ms |       2 | `zig.Ast.fullVarDecl`             | `../opt/zig/lib/std/zig/Ast.zig`        |
|  1.5% |  1.0ms |       1 | `zig.Ast.fullContainerField`      | `../opt/zig/lib/std/zig/Ast.zig`        |

##### `zig.Ast.firstToken` (`../opt/zig/lib/std/zig/Ast.zig`)

|     % |   Time | Samples | Caller                              | Location                                |
| ----: | -----: | ------: | ----------------------------------- | --------------------------------------- |
| 32.3% | 20.0ms |      20 | `zig.Ast.Render.renderExtraNewline` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 12.9% |  8.0ms |       8 | `zig.Ast.Render.renderPtrType`      | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  8.1% |  5.0ms |       5 | `zig.Ast.Render.renderMember`       | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  8.1% |  5.0ms |       5 | `zig.Ast.Render.renderStructInit`   | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  6.5% |  4.0ms |       4 | `zig.Ast.Render.renderSwitchCase`   | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `Io.Writer.writeAll` (`../opt/zig/lib/std/Io/Writer.zig`)

|      % |   Time | Samples | Caller                                        | Location                                |
| -----: | -----: | ------: | --------------------------------------------- | --------------------------------------- |
| 100.0% | 62.0ms |      62 | `zig.Ast.Render.AutoIndentingStream.writeAll` | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.renderExtraNewlineToken` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |   Time | Samples | Caller                              | Location                                |
| ----: | -----: | ------: | ----------------------------------- | --------------------------------------- |
| 75.8% | 47.0ms |      47 | `zig.Ast.Render.renderExtraNewline` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 12.9% |  8.0ms |       8 | `zig.Ast.Render.renderStructInit`   | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  9.7% |  6.0ms |       6 | `zig.Ast.Render.renderDocComments`  | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  1.6% |  1.0ms |       1 | `zig.Ast.Render.renderExpression`   | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `0xe3e00` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Caller                                | Location                             |
| -----: | -----: | ------: | ------------------------------------- | ------------------------------------ |
| 100.0% | 39.0ms |      39 | `Io.Threaded.fileReadPositionalPosix` | `../opt/zig/lib/std/Io/Threaded.zig` |

##### `0x9d200` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Caller    | Location                                 |
| -----: | -----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 15.0ms |      15 | `0x92f67` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0xdda44` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller                         | Location                             |
| ----: | -----: | ------: | ------------------------------ | ------------------------------------ |
| 92.9% | 13.0ms |      13 | `Io.Threaded.dirOpenFilePosix` | `../opt/zig/lib/std/Io/Threaded.zig` |
|  7.1% |  1.0ms |       1 | `Io.Threaded.dirOpenDirPosix`  | `../opt/zig/lib/std/Io/Threaded.zig` |

##### `0xe3acc` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Caller    | Location                                 |
| -----: | -----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 11.0ms |      11 | `0x8f987` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0xde3c8` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller                | Location                             |
| -----: | ----: | ------: | --------------------- | ------------------------------------ |
| 100.0% | 7.0ms |       7 | `Io.Threaded.closeFd` | `../opt/zig/lib/std/Io/Threaded.zig` |

##### `0xdd2b4` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller         | Location                         |
| -----: | ----: | ------: | -------------- | -------------------------------- |
| 100.0% | 4.0ms |       4 | `Io.File.stat` | `../opt/zig/lib/std/Io/File.zig` |

##### `0x929c4` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Time | Samples | Caller                            | Location                                |
| ----: | ----: | ------: | --------------------------------- | --------------------------------------- |
| 66.7% | 2.0ms |       2 | `zig.Ast.Render.renderExpression` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 33.3% | 1.0ms |       1 | `start.callMain`                  | `../opt/zig/lib/std/start.zig`          |

##### `0x91d0c` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 3.0ms |       3 | `0x92f67` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9d210` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 2.0ms |       2 | `0x92f67` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0xe7e0c` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller                       | Location                      |
| -----: | ----: | ------: | ---------------------------- | ----------------------------- |
| 100.0% | 1.0ms |       1 | `heap.c_allocator_impl.free` | `../opt/zig/lib/std/heap.zig` |

##### `0x92274` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller                        | Location                      |
| -----: | ----: | ------: | ----------------------------- | ----------------------------- |
| 100.0% | 1.0ms |       1 | `heap.c_allocator_impl.alloc` | `../opt/zig/lib/std/heap.zig` |

##### `0x91c70` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 1.0ms |       1 | `0x92f67` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x92240` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller                   | Location                               |
| -----: | ----: | ------: | ------------------------ | -------------------------------------- |
| 100.0% | 1.0ms |       1 | `mem.Allocator.rawAlloc` | `../opt/zig/lib/std/mem/Allocator.zig` |

##### `0x8fd10` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 1.0ms |       1 | `0x92a9b` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x8ff24` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 1.0ms |       1 | `0x91bfb` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x8ffd0` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 1.0ms |       1 | `0x91bfb` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x90e1c` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 1.0ms |       1 | `0x91b93` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x92dcc` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller                        | Location                      |
| -----: | ----: | ------: | ----------------------------- | ----------------------------- |
| 100.0% | 1.0ms |       1 | `heap.c_allocator_impl.remap` | `../opt/zig/lib/std/heap.zig` |

##### `0x9d220` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 1.0ms |       1 | `0x92f67` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x8fad8` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 1.0ms |       1 | `0x91bfb` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |  Time | Samples | Function                                    | Location                                            |
| -----: | ----: | ------: | ------------------------------------------- | --------------------------------------------------- |
| 100.0% | 5.79s |   5,796 | `start.callMain`                            | `../opt/zig/lib/std/start.zig`                      |
| 100.0% | 5.79s |   5,796 | `start.callMainWithArgs`                    | `../opt/zig/lib/std/start.zig`                      |
| 100.0% | 5.79s |   5,796 | `start.main`                                | `../opt/zig/lib/std/start.zig`                      |
| 100.0% | 5.79s |   5,796 | `0x27743`                                   | `../usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 100.0% | 5.79s |   5,796 | `0x27817`                                   | `../usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 100.0% | 5.79s |   5,796 | `_start`                                    | `../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
|  99.9% | 5.79s |   5,791 | `profile.main`                              | `profile.zig`                                       |
|  72.0% | 4.17s |   4,174 | `zig.Ast.Render.renderTree`                 | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  72.0% | 4.17s |   4,174 | `zig.Ast.render`                            | `../opt/zig/lib/std/zig/Ast.zig`                    |
|  72.0% | 4.17s |   4,174 | `zig.Ast.renderAlloc`                       | `../opt/zig/lib/std/zig/Ast.zig`                    |
|  71.9% | 4.17s |   4,170 | `zig.Ast.Render.renderMembers`              | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  70.1% | 4.06s |   4,063 | `zig.Ast.Render.renderExpression`           | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  62.4% | 3.61s |   3,617 | `zig.Ast.Render.renderMember`               | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  48.0% | 2.78s |   2,781 | `zig.Ast.Render.renderBlock`                | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  47.9% | 2.77s |   2,774 | `zig.Ast.Render.finishRenderBlock`          | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  43.4% | 2.51s |   2,515 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  43.4% | 2.51s |   2,515 | `zig.Ast.Render.renderVarDecl`              | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  29.7% | 1.72s |   1,723 | `zig.Ast.Render.renderContainerDecl`        | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  27.2% | 1.57s |   1,579 | `zig.Ast.Render.renderToken`                | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  27.1% | 1.57s |   1,573 | `zig.tokenizer.Tokenizer.next`              | `../opt/zig/lib/std/zig/tokenizer.zig`              |

#### Categories

##### Standard library

|      % |  Time | Samples | Function                                    | Location                                            |
| -----: | ----: | ------: | ------------------------------------------- | --------------------------------------------------- |
| 100.0% | 5.79s |   5,796 | `start.callMain`                            | `../opt/zig/lib/std/start.zig`                      |
| 100.0% | 5.79s |   5,796 | `start.callMainWithArgs`                    | `../opt/zig/lib/std/start.zig`                      |
| 100.0% | 5.79s |   5,796 | `start.main`                                | `../opt/zig/lib/std/start.zig`                      |
| 100.0% | 5.79s |   5,796 | `_start`                                    | `../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
|  72.0% | 4.17s |   4,174 | `zig.Ast.Render.renderTree`                 | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  72.0% | 4.17s |   4,174 | `zig.Ast.render`                            | `../opt/zig/lib/std/zig/Ast.zig`                    |
|  72.0% | 4.17s |   4,174 | `zig.Ast.renderAlloc`                       | `../opt/zig/lib/std/zig/Ast.zig`                    |
|  71.9% | 4.17s |   4,170 | `zig.Ast.Render.renderMembers`              | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  70.1% | 4.06s |   4,063 | `zig.Ast.Render.renderExpression`           | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  62.4% | 3.61s |   3,617 | `zig.Ast.Render.renderMember`               | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  48.0% | 2.78s |   2,781 | `zig.Ast.Render.renderBlock`                | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  47.9% | 2.77s |   2,774 | `zig.Ast.Render.finishRenderBlock`          | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  43.4% | 2.51s |   2,515 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  43.4% | 2.51s |   2,515 | `zig.Ast.Render.renderVarDecl`              | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  29.7% | 1.72s |   1,723 | `zig.Ast.Render.renderContainerDecl`        | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  27.2% | 1.57s |   1,579 | `zig.Ast.Render.renderToken`                | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  27.1% | 1.57s |   1,573 | `zig.tokenizer.Tokenizer.next`              | `../opt/zig/lib/std/zig/tokenizer.zig`              |
|  26.3% | 1.52s |   1,523 | `zig.Ast.parse`                             | `../opt/zig/lib/std/zig/Ast.zig`                    |
|  24.9% | 1.44s |   1,446 | `zig.Ast.Render.tokenSliceForRender`        | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  24.1% | 1.39s |   1,395 | `zig.Ast.Render.renderIdentifier`           | `../opt/zig/lib/std/zig/Ast/Render.zig`             |

##### Native

|      % |   Time | Samples | Function  | Location                                 |
| -----: | -----: | ------: | --------- | ---------------------------------------- |
| 100.0% |  5.79s |   5,796 | `0x27743` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 100.0% |  5.79s |   5,796 | `0x27817` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.7% | 39.0ms |      39 | `0xe3e00` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.5% | 27.0ms |      27 | `0x92f67` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.3% | 15.0ms |      15 | `0x9d200` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.2% | 14.0ms |      14 | `0xdda44` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.2% | 11.0ms |      11 | `0xe3acc` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.2% | 11.0ms |      11 | `0x8f987` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.2% | 10.0ms |      10 | `0x92a9b` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.2% |  9.0ms |       9 | `0x8fa47` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.2% |  9.0ms |       9 | `0x9023f` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.1% |  7.0ms |       7 | `0xde3c8` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.1% |  4.0ms |       4 | `0xdd2b4` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.1% |  3.0ms |       3 | `0x929c4` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.1% |  3.0ms |       3 | `0x91d0c` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.1% |  3.0ms |       3 | `0x91bfb` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  <0.1% |  2.0ms |       2 | `0x90817` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  <0.1% |  2.0ms |       2 | `0x9189b` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  <0.1% |  2.0ms |       2 | `0x91b93` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  <0.1% |  2.0ms |       2 | `0x9d210` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `start.callMain` (`../opt/zig/lib/std/start.zig`)

|     % |  Time | Samples | Callee                                                                                | Location                                  |
| ----: | ----: | ------: | ------------------------------------------------------------------------------------- | ----------------------------------------- |
| 99.9% | 5.79s |   5,791 | `profile.main`                                                                        | `profile.zig`                             |
| <0.1% | 2.0ms |       2 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).ensureTotalCapacity` | `../opt/zig/lib/std/multi_array_list.zig` |
| <0.1% | 1.0ms |       1 | `compiler_rt.memset`                                                                  | `../opt/zig/lib/compiler_rt.zig`          |
| <0.1% | 1.0ms |       1 | `profile.main`                                                                        | `../opt/zig/lib/std/zig/Parse.zig`        |
| <0.1% | 1.0ms |       1 | `0x929c4`                                                                             | `../usr/lib/aarch64-linux-gnu/libc.so.6`  |

##### `start.callMainWithArgs` (`../opt/zig/lib/std/start.zig`)

|      % |  Time | Samples | Callee           | Location                       |
| -----: | ----: | ------: | ---------------- | ------------------------------ |
| 100.0% | 5.79s |   5,796 | `start.callMain` | `../opt/zig/lib/std/start.zig` |

##### `start.main` (`../opt/zig/lib/std/start.zig`)

|      % |  Time | Samples | Callee                   | Location                       |
| -----: | ----: | ------: | ------------------------ | ------------------------------ |
| 100.0% | 5.79s |   5,796 | `start.callMainWithArgs` | `../opt/zig/lib/std/start.zig` |

##### `0x27743` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee       | Location                       |
| -----: | ----: | ------: | ------------ | ------------------------------ |
| 100.0% | 5.79s |   5,796 | `start.main` | `../opt/zig/lib/std/start.zig` |

##### `0x27817` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 5.79s |   5,796 | `0x27743` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)

|      % |  Time | Samples | Callee    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 5.79s |   5,796 | `0x27817` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `profile.main` (`profile.zig`)

|     % |   Time | Samples | Callee                                   | Location                         |
| ----: | -----: | ------: | ---------------------------------------- | -------------------------------- |
| 72.1% |  4.17s |   4,174 | `zig.Ast.renderAlloc`                    | `../opt/zig/lib/std/zig/Ast.zig` |
| 26.3% |  1.52s |   1,523 | `zig.Ast.parse`                          | `../opt/zig/lib/std/zig/Ast.zig` |
|  1.3% | 73.0ms |      73 | `Io.Dir.readFileAllocOptions__anon_2739` | `../opt/zig/lib/std/Io/Dir.zig`  |
|  0.2% | 10.0ms |      10 | `Io.Dir.Walker.next`                     | `../opt/zig/lib/std/Io/Dir.zig`  |
|  0.1% |  6.0ms |       6 | `zig.Ast.deinit`                         | `../opt/zig/lib/std/zig/Ast.zig` |

##### `zig.Ast.Render.renderTree` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |  Time | Samples | Callee                                      | Location                                |
| ----: | ----: | ------: | ------------------------------------------- | --------------------------------------- |
| 99.9% | 4.17s |   4,170 | `zig.Ast.Render.renderMembers`              | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| <0.1% | 2.0ms |       2 | `zig.Ast.Render.renderComments`             | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| <0.1% | 2.0ms |       2 | `zig.Ast.Render.renderContainerDocComments` | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`)

|      % |  Time | Samples | Callee                      | Location                                |
| -----: | ----: | ------: | --------------------------- | --------------------------------------- |
| 100.0% | 4.17s |   4,174 | `zig.Ast.Render.renderTree` | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.renderAlloc` (`../opt/zig/lib/std/zig/Ast.zig`)

|      % |  Time | Samples | Callee           | Location                         |
| -----: | ----: | ------: | ---------------- | -------------------------------- |
| 100.0% | 4.17s |   4,174 | `zig.Ast.render` | `../opt/zig/lib/std/zig/Ast.zig` |

##### `zig.Ast.Render.renderMembers` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Callee                              | Location                                |
| ----: | ------: | ------: | ----------------------------------- | --------------------------------------- |
| 86.4% |   3.60s |   3,604 | `zig.Ast.Render.renderMember`       | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 13.2% | 549.0ms |     549 | `zig.Ast.Render.renderExpression`   | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.4% |  17.0ms |      17 | `zig.Ast.Render.renderExtraNewline` | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.renderExpression` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Callee                               | Location                                |
| ----: | ------: | ------: | ------------------------------------ | --------------------------------------- |
| 68.4% |   2.78s |   2,781 | `zig.Ast.Render.renderBlock`         | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 42.4% |   1.72s |   1,723 | `zig.Ast.Render.renderContainerDecl` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 31.0% |   1.26s |   1,260 | `zig.Ast.Render.renderExpression`    | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 28.2% |   1.14s |   1,145 | `zig.Ast.Render.renderParamList`     | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 17.4% | 705.0ms |     705 | `zig.Ast.Render.renderExpressions`   | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.renderMember` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Callee                                | Location                                |
| ----: | ------: | ------: | ------------------------------------- | --------------------------------------- |
| 66.5% |   2.40s |   2,404 | `zig.Ast.Render.renderExpression`     | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 48.7% |   1.76s |   1,763 | `zig.Ast.Render.renderVarDecl`        | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  7.7% | 279.0ms |     279 | `zig.Ast.Render.renderContainerField` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  2.2% |  78.0ms |      78 | `zig.Ast.Render.renderDocComments`    | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.3% |  11.0ms |      11 | `zig.Ast.firstToken`                  | `../opt/zig/lib/std/zig/Ast.zig`        |

##### `zig.Ast.Render.renderBlock` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |   Time | Samples | Callee                                          | Location                                |
| ----: | -----: | ------: | ----------------------------------------------- | --------------------------------------- |
| 99.7% |  2.77s |   2,774 | `zig.Ast.Render.finishRenderBlock`              | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.7% | 19.0ms |      19 | `zig.Ast.Render.renderToken`                    | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.1% |  2.0ms |       2 | `zig.Ast.isTokenPrecededByTags`                 | `../opt/zig/lib/std/zig/Ast.zig`        |
| <0.1% |  1.0ms |       1 | `zig.Ast.Render.AutoIndentingStream.pushIndent` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| <0.1% |  1.0ms |       1 | `zig.Ast.lastToken`                             | `../opt/zig/lib/std/zig/Ast.zig`        |

##### `zig.Ast.Render.finishRenderBlock` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Callee                              | Location                                |
| ----: | ------: | ------: | ----------------------------------- | --------------------------------------- |
| 77.5% |   2.15s |   2,151 | `zig.Ast.Render.renderExpression`   | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 32.6% | 905.0ms |     905 | `zig.Ast.Render.renderVarDecl`      | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  2.5% |  68.0ms |      68 | `zig.Ast.Render.renderExtraNewline` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  1.3% |  36.0ms |      36 | `zig.Ast.Render.renderToken`        | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.9% |  26.0ms |      26 | `zig.Ast.lastToken`                 | `../opt/zig/lib/std/zig/Ast.zig`        |

##### `zig.Ast.Render.renderVarDeclWithoutFixups` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Callee                            | Location                                |
| ----: | ------: | ------: | --------------------------------- | --------------------------------------- |
| 92.5% |   2.32s |   2,326 | `zig.Ast.Render.renderExpression` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  5.8% | 145.0ms |     145 | `zig.Ast.Render.renderIdentifier` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  3.5% |  87.0ms |      87 | `zig.Ast.Render.renderToken`      | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.5% |  13.0ms |      13 | `zig.Ast.firstToken`              | `../opt/zig/lib/std/zig/Ast.zig`        |
|  0.1% |   3.0ms |       3 | `zig.Ast.tokensOnSameLine`        | `../opt/zig/lib/std/zig/Ast.zig`        |

##### `zig.Ast.Render.renderVarDecl` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|      % |  Time | Samples | Callee                                      | Location                                |
| -----: | ----: | ------: | ------------------------------------------- | --------------------------------------- |
| 100.0% | 2.51s |   2,515 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.renderContainerDecl` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Callee                                  | Location                                |
| ----: | ------: | ------: | --------------------------------------- | --------------------------------------- |
| 88.7% |   1.52s |   1,528 | `zig.Ast.Render.renderMember`           | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  9.5% | 163.0ms |     163 | `zig.Ast.Render.isOneLineContainerDecl` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  2.8% |  49.0ms |      49 | `zig.Ast.Render.renderExtraNewline`     | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  1.0% |  17.0ms |      17 | `zig.Ast.Render.renderToken`            | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  1.0% |  17.0ms |      17 | `zig.Ast.Render.renderExpression`       | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.renderToken` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Callee                                        | Location                                |
| ----: | ------: | ------: | --------------------------------------------- | --------------------------------------- |
| 42.9% | 678.0ms |     678 | `zig.Ast.Render.tokenSliceForRender`          | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 38.1% | 601.0ms |     601 | `zig.Ast.Render.renderSpace`                  | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 17.4% | 274.0ms |     274 | `zig.Ast.Render.AutoIndentingStream.writeAll` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  2.6% |  41.0ms |      41 | `zig.Ast.tokenSlice`                          | `../opt/zig/lib/std/zig/Ast.zig`        |
|  0.1% |   1.0ms |       1 | `mem.findScalarPos__anon_6382`                | `../opt/zig/lib/std/mem.zig`            |

##### `zig.tokenizer.Tokenizer.next` (`../opt/zig/lib/std/zig/tokenizer.zig`)

|     % |    Time | Samples | Callee                           | Location                               |
| ----: | ------: | ------: | -------------------------------- | -------------------------------------- |
| 19.4% | 305.0ms |     305 | `zig.tokenizer.Token.getKeyword` | `../opt/zig/lib/std/zig/tokenizer.zig` |

##### `zig.Ast.parse` (`../opt/zig/lib/std/zig/Ast.zig`)

|     % |    Time | Samples | Callee                                                                                | Location                                  |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------- | ----------------------------------------- |
| 49.9% | 760.0ms |     760 | `zig.Ast.parseTokens`                                                                 | `../opt/zig/lib/std/zig/Ast.zig`          |
| 38.1% | 581.0ms |     581 | `zig.tokenizer.Tokenizer.next`                                                        | `../opt/zig/lib/std/zig/tokenizer.zig`    |
|  5.1% |  77.0ms |      77 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).append`              | `../opt/zig/lib/std/multi_array_list.zig` |
|  4.7% |  71.0ms |      71 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).ensureTotalCapacity` | `../opt/zig/lib/std/multi_array_list.zig` |

##### `zig.Ast.Render.tokenSliceForRender` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Callee                           | Location                               |
| ----: | ------: | ------: | -------------------------------- | -------------------------------------- |
| 69.2% |      1s |   1,000 | `zig.Ast.tokenSlice`             | `../opt/zig/lib/std/zig/Ast.zig`       |
|  9.4% | 136.0ms |     136 | `zig.tokenizer.Token.Tag.lexeme` | `../opt/zig/lib/std/zig/tokenizer.zig` |
|  3.5% |  51.0ms |      51 | `zig.Ast.tokenTag`               | `../opt/zig/lib/std/zig/Ast.zig`       |
|  0.3% |   4.0ms |       4 | `mem.trimEnd__anon_28242`        | `../opt/zig/lib/std/mem.zig`           |
|  0.1% |   1.0ms |       1 | `zig.tokenizer.Tokenizer.next`   | `../opt/zig/lib/std/zig/tokenizer.zig` |

##### `zig.Ast.Render.renderIdentifier` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Callee                               | Location                                |
| ----: | ------: | ------: | ------------------------------------ | --------------------------------------- |
| 48.0% | 670.0ms |     670 | `zig.Ast.Render.renderToken`         | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 41.4% | 578.0ms |     578 | `zig.Ast.Render.tokenSliceForRender` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  2.7% |  37.0ms |      37 | `array_hash_map.Custom.get`          | `../opt/zig/lib/std/array_hash_map.zig` |
|  1.5% |  21.0ms |      21 | `zig.Ast.tokenSlice`                 | `../opt/zig/lib/std/zig/Ast.zig`        |
|  0.7% |  10.0ms |      10 | `zig.Ast.tokenTag`                   | `../opt/zig/lib/std/zig/Ast.zig`        |

##### `0x92f67` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Callee    | Location                                 |
| ----: | -----: | ------: | --------- | ---------------------------------------- |
| 55.6% | 15.0ms |      15 | `0x9d200` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 11.1% |  3.0ms |       3 | `0x91d0c` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 11.1% |  3.0ms |       3 | `0x91bfb` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  7.4% |  2.0ms |       2 | `0x91b93` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  7.4% |  2.0ms |       2 | `0x9d210` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x8f987` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Callee    | Location                                 |
| -----: | -----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 11.0ms |      11 | `0xe3acc` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x92a9b` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Time | Samples | Callee    | Location                                 |
| ----: | ----: | ------: | --------- | ---------------------------------------- |
| 90.0% | 9.0ms |       9 | `0x9023f` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 10.0% | 1.0ms |       1 | `0x8fd10` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x8fa47` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 9.0ms |       9 | `0x8f987` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9023f` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 9.0ms |       9 | `0x8fa47` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x91bfb` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Time | Samples | Callee    | Location                                 |
| ----: | ----: | ------: | --------- | ---------------------------------------- |
| 33.3% | 1.0ms |       1 | `0x8ff24` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 33.3% | 1.0ms |       1 | `0x8ffd0` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 33.3% | 1.0ms |       1 | `0x8fad8` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x90817` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 2.0ms |       2 | `0x8f987` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9189b` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 2.0ms |       2 | `0x90817` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x91b93` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Time | Samples | Callee    | Location                                 |
| ----: | ----: | ------: | --------- | ---------------------------------------- |
| 50.0% | 1.0ms |       1 | `0x9189b` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 50.0% | 1.0ms |       1 | `0x90e1c` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `0x27743` (`../usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)

|    % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 8.6% | 499.0ms |     499 | `zig.tokenizer.Tokenizer.next` (`../opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.Ast.parse` (`../opt/zig/lib/std/zig/Ast.zig`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 3.1% | 180.0ms |     180 | `memset` (`../opt/zig/lib/compiler_rt.zig`) ← `mem.Allocator.allocBytesWithAlignment__anon_10001` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `mem.Allocator.allocWithSizeAndAlignment__anon_9851` ← `mem.Allocator.allocAdvancedWithRetAddr` ← `mem.Allocator.alignedAlloc__anon_9848` ← `multi_array_list.MultiArrayList(zig.Ast.Node).setCapacity` (`../opt/zig/lib/std/multi_array_list.zig`) ← `multi_array_list.MultiArrayList(zig.Ast.Node).ensureTotalCapacity` ← `zig.Ast.parseTokens` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.parse`                                                                                                                                                                                                                                                                      |
| 1.2% |  71.0ms |      71 | `memset` (`../opt/zig/lib/compiler_rt.zig`) ← `mem.Allocator.allocBytesWithAlignment__anon_10001` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `mem.Allocator.allocWithSizeAndAlignment__anon_9851` ← `mem.Allocator.allocAdvancedWithRetAddr` ← `mem.Allocator.alignedAlloc__anon_9848` ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).setCapacity` (`../opt/zig/lib/std/multi_array_list.zig`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).ensureTotalCapacity` ← `zig.Ast.parse` (`../opt/zig/lib/std/zig/Ast.zig`)                                                                                                                                                                                                                                                          |
| 1.0% |  57.0ms |      57 | `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` (`../opt/zig/lib/std/static_string_map.zig`) ← `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).get` ← `zig.tokenizer.Token.getKeyword` (`../opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.tokenizer.Tokenizer.next` ← `zig.Ast.parse` (`../opt/zig/lib/std/zig/Ast.zig`)                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.7% |  39.0ms |      39 | `0xe3e00` (`../usr/lib/aarch64-linux-gnu/libc.so.6`) ← `Io.Threaded.fileReadPositionalPosix` (`../opt/zig/lib/std/Io/Threaded.zig`) ← `Io.Threaded.fileReadPositional` ← `Io.File.Reader.readVecPositional` (`../opt/zig/lib/std/Io/File/Reader.zig`) ← `Io.File.Reader.readVec` ← `Io.Reader.readVec` (`../opt/zig/lib/std/Io/Reader.zig`) ← `Io.Reader.readSliceShort` ← `Io.Writer.Allocating.sendFile` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.sendFile` ← `Io.File.Reader.streamMode` (`../opt/zig/lib/std/Io/File/Reader.zig`) ← `Io.File.Reader.stream` ← `Io.Reader.stream` (`../opt/zig/lib/std/Io/Reader.zig`) ← `Io.Reader.appendRemainingAligned__anon_35672` ← `Io.Reader.allocRemainingAlignedSentinel__anon_35655` ← `Io.Dir.readFileAllocOptions__anon_2739` (`../opt/zig/lib/std/Io/Dir.zig`) |
| 0.6% |  37.0ms |      37 | `zig.tokenizer.Tokenizer.next` (`../opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.Ast.tokenSlice` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.Render.hasComment` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.isOneLineContainerDecl` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc`                                                                                                                                                                                                                               |
| 0.6% |  34.0ms |      34 | `zig.Ast.parse` (`../opt/zig/lib/std/zig/Ast.zig`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.5% |  30.0ms |      30 | `memset` (`../opt/zig/lib/compiler_rt.zig`) ← `mem.Allocator.allocBytesWithAlignment__anon_10001` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `mem.Allocator.allocWithSizeAndAlignment__anon_9851` ← `mem.Allocator.allocAdvancedWithRetAddr` ← `mem.Allocator.alignedAlloc__anon_9848` ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).setCapacity` (`../opt/zig/lib/std/multi_array_list.zig`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).ensureTotalCapacity` ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).ensureUnusedCapacity` ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).append` ← `zig.Ast.parse` (`../opt/zig/lib/std/zig/Ast.zig`)                                                                                      |
| 0.4% |  25.0ms |      25 | `static_string_map.defaultEql` (`../opt/zig/lib/std/static_string_map.zig`) ← `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` ← `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).get` ← `zig.tokenizer.Token.getKeyword` (`../opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.tokenizer.Tokenizer.next` ← `zig.Ast.parse` (`../opt/zig/lib/std/zig/Ast.zig`)                                                                                                                                                                                                                                                                                                                                                                   |
| 0.4% |  24.0ms |      24 | `zig.tokenizer.Tokenizer.next` (`../opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.Ast.tokenSlice` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.Render.tokenSliceForRender` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderIdentifier` ← `zig.Ast.Render.renderContainerField` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc`                                                                                                                                                    |
| 0.3% |  20.0ms |      20 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).ensureTotalCapacity` (`../opt/zig/lib/std/multi_array_list.zig`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).ensureUnusedCapacity` ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).append` ← `zig.Ast.parse` (`../opt/zig/lib/std/zig/Ast.zig`)                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.3% |  20.0ms |      20 | `zig.tokenizer.Tokenizer.next` (`../opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.Ast.tokenSlice` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.Render.tokenSliceForRender` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderDocComments` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc`                                                                                                                                                                                                                                                                                                                                                      |
| 0.3% |  17.0ms |      17 | `zig.tokenizer.Token.Tag.lexeme` (`../opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.Ast.Render.hasComment` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.isOneLineContainerDecl` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc`                                                                                                                                                                                                                                                                                       |
| 0.3% |  16.0ms |      16 | `zig.tokenizer.Tokenizer.next` (`../opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.Ast.tokenSlice` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.Render.tokenSliceForRender` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderDocComments` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc`                                                                                                                                                            |
| 0.2% |  14.0ms |      14 | `zig.tokenizer.Tokenizer.next` (`../opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.Ast.tokenSlice` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.Render.tokenSliceForRender` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderIdentifier` ← `zig.Ast.Render.renderFnProto` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc`                                                                                                                                                                                                                                                                                                                 |
| 0.2% |  13.0ms |      13 | `zig.Ast.Render.renderExpressionComma` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderContainerField` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc`                                                                                                                                                                                                                                                                                                                          |
| 0.2% |  13.0ms |      13 | `zig.tokenizer.Tokenizer.next` (`../opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.Ast.tokenSlice` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.Render.hasComment` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderStructInit` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderArrayInit` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.finishRenderBlock` ← `zig.Ast.Render.renderBlock` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc`                                                                                                                             |
| 0.2% |  13.0ms |      13 | `zig.tokenizer.Tokenizer.next` (`../opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.Ast.tokenSlice` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.Render.hasComment` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.isOneLineContainerDecl` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc`                                     |
| 0.2% |  13.0ms |      13 | `0xdda44` (`../usr/lib/aarch64-linux-gnu/libc.so.6`) ← `Io.Threaded.dirOpenFilePosix` (`../opt/zig/lib/std/Io/Threaded.zig`) ← `Io.Dir.openFile` (`../opt/zig/lib/std/Io/Dir.zig`) ← `Io.Dir.readFileAllocOptions__anon_2739`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.2% |  12.0ms |      12 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).appendAssumeCapacity` (`../opt/zig/lib/std/multi_array_list.zig`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).append` ← `zig.Ast.parse` (`../opt/zig/lib/std/zig/Ast.zig`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
