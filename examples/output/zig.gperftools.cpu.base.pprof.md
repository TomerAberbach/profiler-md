# CPU profile

Took 5.23s over 5,237 samples (1.0ms per sample).

| Category         |     % |    Time | Samples |
| ---------------- | ----: | ------: | ------: |
| Standard library | 92.4% |   4.83s |   4,837 |
| Native           |  7.3% | 383.0ms |     383 |
| Ours             |  0.3% |  17.0ms |      17 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                                                                                             | Location                                |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------- | --------------------------------------- |
| 22.4% |   1.17s |   1,175 | `zig.tokenizer.Tokenizer.next`                                                                       | `opt/zig/lib/std/zig/tokenizer.zig`     |
|  5.1% | 269.0ms |     269 | `zig.Ast.tokenSlice`                                                                                 | `opt/zig/lib/std/zig/Ast.zig`           |
|  4.8% | 249.0ms |     249 | `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` | `opt/zig/lib/std/static_string_map.zig` |
|  3.8% | 199.0ms |     199 | `zig.Ast.Render.tokenSliceForRender`                                                                 | `opt/zig/lib/std/zig/Ast/Render.zig`    |
|  3.7% | 192.0ms |     192 | `zig.tokenizer.Token.Tag.lexeme`                                                                     | `opt/zig/lib/std/zig/tokenizer.zig`     |
|  2.7% | 142.0ms |     142 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_6976`                               | `opt/zig/lib/std/multi_array_list.zig`  |
|  2.7% | 141.0ms |     141 | `zig.Ast.Render.renderSpace`                                                                         | `opt/zig/lib/std/zig/Ast/Render.zig`    |
|  2.6% | 134.0ms |     134 | `zig.Ast.Render.renderComments`                                                                      | `opt/zig/lib/std/zig/Ast/Render.zig`    |
|  2.5% | 132.0ms |     132 | `0x9d200`                                                                                            | `usr/lib/aarch64-linux-gnu/libc.so.6`   |
|  2.5% | 129.0ms |     129 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_6974`                               | `opt/zig/lib/std/multi_array_list.zig`  |
|  2.2% | 117.0ms |     117 | `zig.Ast.Render.renderExpression`                                                                    | `opt/zig/lib/std/zig/Ast/Render.zig`    |
|  1.6% |  86.0ms |      86 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).Slice.items__anon_6665`             | `opt/zig/lib/std/multi_array_list.zig`  |
|  1.6% |  83.0ms |      83 | `zig.Ast.tokenTag`                                                                                   | `opt/zig/lib/std/zig/Ast.zig`           |
|  1.5% |  77.0ms |      77 | `mem.indexOfScalarPos__anon_8996`                                                                    | `opt/zig/lib/std/mem.zig`               |
|  1.3% |  69.0ms |      69 | `0x9e670`                                                                                            | `usr/lib/aarch64-linux-gnu/libc.so.6`   |
|  1.3% |  68.0ms |      68 | `zig.Ast.Render.renderIdentifier`                                                                    | `opt/zig/lib/std/zig/Ast/Render.zig`    |
|  1.3% |  67.0ms |      67 | `zig.Ast.firstToken`                                                                                 | `opt/zig/lib/std/zig/Ast.zig`           |
|  1.3% |  66.0ms |      66 | `zig.Ast.Render.renderExtraNewlineToken`                                                             | `opt/zig/lib/std/zig/Ast/Render.zig`    |
|  1.2% |  64.0ms |      64 | `static_string_map.defaultEql`                                                                       | `opt/zig/lib/std/static_string_map.zig` |
|  1.2% |  62.0ms |      62 | `mem.eqlBytes`                                                                                       | `opt/zig/lib/std/mem.zig`               |

#### Categories

##### Standard library

|     % |    Time | Samples | Function                                                                                             | Location                                |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------- | --------------------------------------- |
| 22.4% |   1.17s |   1,175 | `zig.tokenizer.Tokenizer.next`                                                                       | `opt/zig/lib/std/zig/tokenizer.zig`     |
|  5.1% | 269.0ms |     269 | `zig.Ast.tokenSlice`                                                                                 | `opt/zig/lib/std/zig/Ast.zig`           |
|  4.8% | 249.0ms |     249 | `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` | `opt/zig/lib/std/static_string_map.zig` |
|  3.8% | 199.0ms |     199 | `zig.Ast.Render.tokenSliceForRender`                                                                 | `opt/zig/lib/std/zig/Ast/Render.zig`    |
|  3.7% | 192.0ms |     192 | `zig.tokenizer.Token.Tag.lexeme`                                                                     | `opt/zig/lib/std/zig/tokenizer.zig`     |
|  2.7% | 142.0ms |     142 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_6976`                               | `opt/zig/lib/std/multi_array_list.zig`  |
|  2.7% | 141.0ms |     141 | `zig.Ast.Render.renderSpace`                                                                         | `opt/zig/lib/std/zig/Ast/Render.zig`    |
|  2.6% | 134.0ms |     134 | `zig.Ast.Render.renderComments`                                                                      | `opt/zig/lib/std/zig/Ast/Render.zig`    |
|  2.5% | 129.0ms |     129 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_6974`                               | `opt/zig/lib/std/multi_array_list.zig`  |
|  2.2% | 117.0ms |     117 | `zig.Ast.Render.renderExpression`                                                                    | `opt/zig/lib/std/zig/Ast/Render.zig`    |
|  1.6% |  86.0ms |      86 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).Slice.items__anon_6665`             | `opt/zig/lib/std/multi_array_list.zig`  |
|  1.6% |  83.0ms |      83 | `zig.Ast.tokenTag`                                                                                   | `opt/zig/lib/std/zig/Ast.zig`           |
|  1.5% |  77.0ms |      77 | `mem.indexOfScalarPos__anon_8996`                                                                    | `opt/zig/lib/std/mem.zig`               |
|  1.3% |  68.0ms |      68 | `zig.Ast.Render.renderIdentifier`                                                                    | `opt/zig/lib/std/zig/Ast/Render.zig`    |
|  1.3% |  67.0ms |      67 | `zig.Ast.firstToken`                                                                                 | `opt/zig/lib/std/zig/Ast.zig`           |
|  1.3% |  66.0ms |      66 | `zig.Ast.Render.renderExtraNewlineToken`                                                             | `opt/zig/lib/std/zig/Ast/Render.zig`    |
|  1.2% |  64.0ms |      64 | `static_string_map.defaultEql`                                                                       | `opt/zig/lib/std/static_string_map.zig` |
|  1.2% |  62.0ms |      62 | `mem.eqlBytes`                                                                                       | `opt/zig/lib/std/mem.zig`               |
|  1.2% |  61.0ms |      61 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_6965`                               | `opt/zig/lib/std/multi_array_list.zig`  |
|  1.1% |  60.0ms |      60 | `Io.Writer.write`                                                                                    | `opt/zig/lib/std/Io/Writer.zig`         |

##### Native

|     % |    Time | Samples | Function  | Location                              |
| ----: | ------: | ------: | --------- | ------------------------------------- |
|  2.5% | 132.0ms |     132 | `0x9d200` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  1.3% |  69.0ms |      69 | `0x9e670` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.4% |  19.0ms |      19 | `0x9e674` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.4% |  19.0ms |      19 | `0xddb88` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.4% |  19.0ms |      19 | `0xdda44` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.3% |  14.0ms |      14 | `0xe3acc` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.2% |  11.0ms |      11 | `0x9d11c` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.2% |  11.0ms |      11 | `0x9d100` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.2% |  10.0ms |      10 | `0x9d184` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.2% |   9.0ms |       9 | `0x9d138` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.1% |   7.0ms |       7 | `0x9d168` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.1% |   6.0ms |       6 | `0xde3c8` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.1% |   5.0ms |       5 | `0x9d150` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.1% |   4.0ms |       4 | `0x9d210` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.1% |   4.0ms |       4 | `0x9e5c0` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.1% |   4.0ms |       4 | `0x9e580` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.1% |   4.0ms |       4 | `0x9d114` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.1% |   3.0ms |       3 | `0x9e584` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| <0.1% |   2.0ms |       2 | `0x9d160` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| <0.1% |   2.0ms |       2 | `0x9d124` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `zig.tokenizer.Tokenizer.next` (`opt/zig/lib/std/zig/tokenizer.zig`)

|     % |    Time | Samples | Location                                 |
| ----: | ------: | ------: | ---------------------------------------- |
| 22.3% | 262.0ms |     262 | `opt/zig/lib/std/zig/tokenizer.zig:665`  |
| 20.2% | 237.0ms |     237 | `opt/zig/lib/std/zig/tokenizer.zig:666`  |
| 12.3% | 145.0ms |     145 | `opt/zig/lib/std/zig/tokenizer.zig:669`  |
|  8.0% |  94.0ms |      94 | `opt/zig/lib/std/zig/tokenizer.zig:404`  |
|  7.4% |  87.0ms |      87 | `opt/zig/lib/std/zig/tokenizer.zig:1029` |

##### `zig.Ast.tokenSlice` (`opt/zig/lib/std/zig/Ast.zig`)

|     % |   Time | Samples | Location                          |
| ----: | -----: | ------: | --------------------------------- |
| 34.6% | 93.0ms |      93 | `opt/zig/lib/std/zig/Ast.zig:265` |
| 14.1% | 38.0ms |      38 | `opt/zig/lib/std/zig/Ast.zig:280` |
| 11.9% | 32.0ms |      32 | `opt/zig/lib/std/zig/Ast.zig:266` |
|  3.7% | 10.0ms |      10 | `opt/zig/lib/std/zig/Ast.zig:275` |
|  3.3% |  9.0ms |       9 | `opt/zig/lib/std/zig/Ast.zig:269` |

##### `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` (`opt/zig/lib/std/static_string_map.zig`)

|     % |    Time | Samples | Location                                    |
| ----: | ------: | ------: | ------------------------------------------- |
| 53.0% | 132.0ms |     132 | `opt/zig/lib/std/static_string_map.zig:213` |
| 39.4% |  98.0ms |      98 | `opt/zig/lib/std/static_string_map.zig:208` |
|  4.0% |  10.0ms |      10 | `opt/zig/lib/std/static_string_map.zig:203` |
|  1.2% |   3.0ms |       3 | `opt/zig/lib/std/static_string_map.zig:214` |
|  0.8% |   2.0ms |       2 | `opt/zig/lib/std/static_string_map.zig:209` |

##### `zig.Ast.Render.tokenSliceForRender` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Location                                  |
| ----: | ------: | ------: | ----------------------------------------- |
| 78.9% | 157.0ms |     157 | `opt/zig/lib/std/zig/Ast/Render.zig:3268` |
|  5.5% |  11.0ms |      11 | `opt/zig/lib/std/zig/Ast/Render.zig:3276` |
|  3.5% |   7.0ms |       7 | `opt/zig/lib/std/zig/Ast/Render.zig:3270` |

##### `zig.tokenizer.Token.Tag.lexeme` (`opt/zig/lib/std/zig/tokenizer.zig`)

|     % |   Time | Samples | Location                                |
| ----: | -----: | ------: | --------------------------------------- |
| 29.7% | 57.0ms |      57 | `opt/zig/lib/std/zig/tokenizer.zig:187` |
|  2.6% |  5.0ms |       5 | `opt/zig/lib/std/zig/tokenizer.zig:186` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_6976` (`opt/zig/lib/std/multi_array_list.zig`)

|     % |    Time | Samples | Location                                  |
| ----: | ------: | ------: | ----------------------------------------- |
| 91.5% | 130.0ms |     130 | `opt/zig/lib/std/multi_array_list.zig:85` |
|  5.6% |   8.0ms |       8 | `opt/zig/lib/std/multi_array_list.zig:88` |
|  2.1% |   3.0ms |       3 | `opt/zig/lib/std/multi_array_list.zig:93` |
|  0.7% |   1.0ms |       1 | `opt/zig/lib/std/multi_array_list.zig:92` |

##### `zig.Ast.Render.renderSpace` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |   Time | Samples | Location                                  |
| ----: | -----: | ------: | ----------------------------------------- |
| 19.9% | 28.0ms |      28 | `opt/zig/lib/std/zig/Ast/Render.zig:2880` |
| 14.2% | 20.0ms |      20 | `opt/zig/lib/std/zig/Ast/Render.zig:2875` |
| 11.3% | 16.0ms |      16 | `opt/zig/lib/std/zig/Ast/Render.zig:2868` |
|  6.4% |  9.0ms |       9 | `opt/zig/lib/std/zig/Ast/Render.zig:2863` |
|  6.4% |  9.0ms |       9 | `opt/zig/lib/std/zig/Ast/Render.zig:2866` |

##### `zig.Ast.Render.renderComments` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |   Time | Samples | Location                                  |
| ----: | -----: | ------: | ----------------------------------------- |
| 29.1% | 39.0ms |      39 | `opt/zig/lib/std/zig/Ast/Render.zig:3117` |
| 12.7% | 17.0ms |      17 | `opt/zig/lib/std/zig/Ast/Render.zig:3172` |
|  2.2% |  3.0ms |       3 | `opt/zig/lib/std/zig/Ast/Render.zig:3165` |
|  0.7% |  1.0ms |       1 | `opt/zig/lib/std/zig/Ast/Render.zig:3112` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_6974` (`opt/zig/lib/std/multi_array_list.zig`)

|     % |   Time | Samples | Location                                  |
| ----: | -----: | ------: | ----------------------------------------- |
| 72.9% | 94.0ms |      94 | `opt/zig/lib/std/multi_array_list.zig:85` |
| 20.2% | 26.0ms |      26 | `opt/zig/lib/std/multi_array_list.zig:88` |
|  7.0% |  9.0ms |       9 | `opt/zig/lib/std/multi_array_list.zig:93` |

##### `zig.Ast.Render.renderExpression` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |   Time | Samples | Location                                 |
| ----: | -----: | ------: | ---------------------------------------- |
| 29.1% | 34.0ms |      34 | `opt/zig/lib/std/zig/Ast/Render.zig:315` |
| 16.2% | 19.0ms |      19 | `opt/zig/lib/std/zig/Ast/Render.zig:326` |
|  8.5% | 10.0ms |      10 | `opt/zig/lib/std/zig/Ast/Render.zig:432` |
|  6.8% |  8.0ms |       8 | `opt/zig/lib/std/zig/Ast/Render.zig:324` |
|  4.3% |  5.0ms |       5 | `opt/zig/lib/std/zig/Ast/Render.zig:314` |

##### `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).Slice.items__anon_6665` (`opt/zig/lib/std/multi_array_list.zig`)

|     % |   Time | Samples | Location                                  |
| ----: | -----: | ------: | ----------------------------------------- |
| 80.2% | 69.0ms |      69 | `opt/zig/lib/std/multi_array_list.zig:85` |
| 18.6% | 16.0ms |      16 | `opt/zig/lib/std/multi_array_list.zig:88` |

##### `zig.Ast.tokenTag` (`opt/zig/lib/std/zig/Ast.zig`)

|     % |   Time | Samples | Location                         |
| ----: | -----: | ------: | -------------------------------- |
| 74.7% | 62.0ms |      62 | `opt/zig/lib/std/zig/Ast.zig:89` |

##### `mem.indexOfScalarPos__anon_8996` (`opt/zig/lib/std/mem.zig`)

|     % |   Time | Samples | Location                       |
| ----: | -----: | ------: | ------------------------------ |
| 24.7% | 19.0ms |      19 | `opt/zig/lib/std/mem.zig:1314` |
|  9.1% |  7.0ms |       7 | `opt/zig/lib/std/mem.zig:1289` |
|  9.1% |  7.0ms |       7 | `opt/zig/lib/std/mem.zig:1301` |
|  9.1% |  7.0ms |       7 | `opt/zig/lib/std/mem.zig:1302` |
|  3.9% |  3.0ms |       3 | `opt/zig/lib/std/mem.zig:1281` |

##### `zig.Ast.Render.renderIdentifier` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |   Time | Samples | Location                                  |
| ----: | -----: | ------: | ----------------------------------------- |
| 51.5% | 35.0ms |      35 | `opt/zig/lib/std/zig/Ast/Render.zig:2927` |
| 13.2% |  9.0ms |       9 | `opt/zig/lib/std/zig/Ast/Render.zig:2926` |
| 11.8% |  8.0ms |       8 | `opt/zig/lib/std/zig/Ast/Render.zig:2937` |
|  2.9% |  2.0ms |       2 | `opt/zig/lib/std/zig/Ast/Render.zig:2929` |

##### `zig.Ast.firstToken` (`opt/zig/lib/std/zig/Ast.zig`)

|     % |   Time | Samples | Location                          |
| ----: | -----: | ------: | --------------------------------- |
| 31.3% | 21.0ms |      21 | `opt/zig/lib/std/zig/Ast.zig:596` |
| 14.9% | 10.0ms |      10 | `opt/zig/lib/std/zig/Ast.zig:599` |
|  1.5% |  1.0ms |       1 | `opt/zig/lib/std/zig/Ast.zig:717` |
|  1.5% |  1.0ms |       1 | `opt/zig/lib/std/zig/Ast.zig:779` |
|  1.5% |  1.0ms |       1 | `opt/zig/lib/std/zig/Ast.zig:839` |

##### `zig.Ast.Render.renderExtraNewlineToken` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |   Time | Samples | Location                                  |
| ----: | -----: | ------: | ----------------------------------------- |
| 33.3% | 22.0ms |      22 | `opt/zig/lib/std/zig/Ast/Render.zig:3199` |
| 24.2% | 16.0ms |      16 | `opt/zig/lib/std/zig/Ast/Render.zig:3201` |
|  9.1% |  6.0ms |       6 | `opt/zig/lib/std/zig/Ast/Render.zig:3202` |
|  4.5% |  3.0ms |       3 | `opt/zig/lib/std/zig/Ast/Render.zig:3185` |
|  3.0% |  2.0ms |       2 | `opt/zig/lib/std/zig/Ast/Render.zig:3180` |

##### `static_string_map.defaultEql` (`opt/zig/lib/std/static_string_map.zig`)

|     % |   Time | Samples | Location                                   |
| ----: | -----: | ------: | ------------------------------------------ |
| 95.3% | 61.0ms |      61 | `opt/zig/lib/std/static_string_map.zig:15` |
|  4.7% |  3.0ms |       3 | `opt/zig/lib/std/static_string_map.zig:16` |

##### `mem.eqlBytes` (`opt/zig/lib/std/mem.zig`)

|     % |   Time | Samples | Location                      |
| ----: | -----: | ------: | ----------------------------- |
| 56.5% | 35.0ms |      35 | `opt/zig/lib/std/mem.zig:733` |
| 43.5% | 27.0ms |      27 | `opt/zig/lib/std/mem.zig:737` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_6965` (`opt/zig/lib/std/multi_array_list.zig`)

|      % |   Time | Samples | Location                                  |
| -----: | -----: | ------: | ----------------------------------------- |
| 100.0% | 61.0ms |      61 | `opt/zig/lib/std/multi_array_list.zig:85` |

##### `Io.Writer.write` (`opt/zig/lib/std/Io/Writer.zig`)

|     % |   Time | Samples | Location                            |
| ----: | -----: | ------: | ----------------------------------- |
| 40.0% | 24.0ms |      24 | `opt/zig/lib/std/Io/Writer.zig:521` |
| 26.7% | 16.0ms |      16 | `opt/zig/lib/std/Io/Writer.zig:519` |
| 20.0% | 12.0ms |      12 | `opt/zig/lib/std/Io/Writer.zig:522` |
|  3.3% |  2.0ms |       2 | `opt/zig/lib/std/Io/Writer.zig:525` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `zig.tokenizer.Tokenizer.next` (`opt/zig/lib/std/zig/tokenizer.zig`)

|     % |    Time | Samples | Caller                               | Location                             |
| ----: | ------: | ------: | ------------------------------------ | ------------------------------------ |
| 63.8% | 750.0ms |     750 | `zig.Ast.tokenSlice`                 | `opt/zig/lib/std/zig/Ast.zig`        |
| 36.1% | 424.0ms |     424 | `zig.Ast.parse`                      | `opt/zig/lib/std/zig/Ast.zig`        |
|  0.1% |   1.0ms |       1 | `zig.Ast.Render.tokenSliceForRender` | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.tokenSlice` (`opt/zig/lib/std/zig/Ast.zig`)

|     % |    Time | Samples | Caller                                   | Location                             |
| ----: | ------: | ------: | ---------------------------------------- | ------------------------------------ |
| 68.4% | 184.0ms |     184 | `zig.Ast.Render.tokenSliceForRender`     | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 12.6% |  34.0ms |      34 | `zig.Ast.Render.hasComment`              | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 10.4% |  28.0ms |      28 | `zig.Ast.Render.renderToken`             | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  7.1% |  19.0ms |      19 | `zig.Ast.Render.renderIdentifier`        | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  1.1% |   3.0ms |       3 | `zig.Ast.Render.renderExtraNewlineToken` | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` (`opt/zig/lib/std/static_string_map.zig`)

|      % |    Time | Samples | Caller                                                                                          | Location                                |
| -----: | ------: | ------: | ----------------------------------------------------------------------------------------------- | --------------------------------------- |
| 100.0% | 249.0ms |     249 | `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).get` | `opt/zig/lib/std/static_string_map.zig` |

##### `zig.Ast.Render.tokenSliceForRender` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Caller                                   | Location                             |
| ----: | ------: | ------: | ---------------------------------------- | ------------------------------------ |
| 62.3% | 124.0ms |     124 | `zig.Ast.Render.renderToken`             | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 23.6% |  47.0ms |      47 | `zig.Ast.Render.renderIdentifier`        | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  8.0% |  16.0ms |      16 | `zig.Ast.Render.renderExpression`        | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  1.5% |   3.0ms |       3 | `zig.Ast.Render.renderExtraNewlineToken` | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  1.0% |   2.0ms |       2 | `zig.Ast.Render.renderParamList`         | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.tokenizer.Token.Tag.lexeme` (`opt/zig/lib/std/zig/tokenizer.zig`)

|     % |    Time | Samples | Caller                               | Location                             |
| ----: | ------: | ------: | ------------------------------------ | ------------------------------------ |
| 75.0% | 144.0ms |     144 | `zig.Ast.Render.tokenSliceForRender` | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 24.5% |  47.0ms |      47 | `zig.Ast.Render.hasComment`          | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.5% |   1.0ms |       1 | `zig.Parse.parseExpr`                | `opt/zig/lib/std/zig/Parse.zig`      |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_6976` (`opt/zig/lib/std/multi_array_list.zig`)

|      % |    Time | Samples | Caller             | Location                      |
| -----: | ------: | ------: | ------------------ | ----------------------------- |
| 100.0% | 142.0ms |     142 | `zig.Ast.nodeData` | `opt/zig/lib/std/zig/Ast.zig` |

##### `zig.Ast.Render.renderSpace` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Caller                                | Location                             |
| ----: | ------: | ------: | ------------------------------------- | ------------------------------------ |
| 78.7% | 111.0ms |     111 | `zig.Ast.Render.renderToken`          | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 13.5% |  19.0ms |      19 | `zig.Ast.Render.renderExpression`     | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  2.8% |   4.0ms |       4 | `zig.Ast.Render.renderContainerField` | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  1.4% |   2.0ms |       2 | `zig.Ast.Render.renderArrayInit`      | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  1.4% |   2.0ms |       2 | `zig.Ast.Render.renderParamList`      | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.renderComments` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Caller                       | Location                             |
| ----: | ------: | ------: | ---------------------------- | ------------------------------------ |
| 99.3% | 133.0ms |     133 | `zig.Ast.Render.renderSpace` | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.7% |   1.0ms |       1 | `zig.Ast.Render.renderToken` | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `0x9d200` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller                                                                                 | Location                               |
| ----: | -----: | ------: | -------------------------------------------------------------------------------------- | -------------------------------------- |
| 68.9% | 91.0ms |      91 | `array_list.Aligned(u8,null).ensureUnusedCapacity`                                     | `opt/zig/lib/std/array_list.zig`       |
| 20.5% | 27.0ms |      27 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).ensureUnusedCapacity` | `opt/zig/lib/std/multi_array_list.zig` |
|  3.0% |  4.0ms |       4 | `multi_array_list.MultiArrayList(zig.Ast.Node).ensureUnusedCapacity`                   | `opt/zig/lib/std/multi_array_list.zig` |
|  2.3% |  3.0ms |       3 | `zig.Parse.addExtra__anon_11960`                                                       | `opt/zig/lib/std/zig/Parse.zig`        |
|  2.3% |  3.0ms |       3 | `start.callMain`                                                                       | `opt/zig/lib/std/start.zig`            |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_6974` (`opt/zig/lib/std/multi_array_list.zig`)

|      % |    Time | Samples | Caller                  | Location                      |
| -----: | ------: | ------: | ----------------------- | ----------------------------- |
| 100.0% | 129.0ms |     129 | `zig.Ast.nodeMainToken` | `opt/zig/lib/std/zig/Ast.zig` |

##### `zig.Ast.Render.renderExpression` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |   Time | Samples | Caller                                      | Location                             |
| ----: | -----: | ------: | ------------------------------------------- | ------------------------------------ |
| 30.8% | 36.0ms |      36 | `zig.Ast.Render.renderExpression`           | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 17.9% | 21.0ms |      21 | `zig.Ast.Render.renderParamList`            | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  6.0% |  7.0ms |       7 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  6.0% |  7.0ms |       7 | `zig.Ast.Render.renderContainerField`       | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  6.0% |  7.0ms |       7 | `zig.Ast.Render.finishRenderBlock`          | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).Slice.items__anon_6665` (`opt/zig/lib/std/multi_array_list.zig`)

|     % |   Time | Samples | Caller                          | Location                        |
| ----: | -----: | ------: | ------------------------------- | ------------------------------- |
| 48.8% | 42.0ms |      42 | `zig.Parse.tokenTag`            | `opt/zig/lib/std/zig/Parse.zig` |
| 39.5% | 34.0ms |      34 | `zig.Ast.tokenTag`              | `opt/zig/lib/std/zig/Ast.zig`   |
| 10.5% |  9.0ms |       9 | `zig.Ast.isTokenPrecededByTags` | `opt/zig/lib/std/zig/Ast.zig`   |
|  1.2% |  1.0ms |       1 | `zig.Parse.eatTokens`           | `opt/zig/lib/std/zig/Parse.zig` |

##### `zig.Ast.tokenTag` (`opt/zig/lib/std/zig/Ast.zig`)

|     % |   Time | Samples | Caller                               | Location                             |
| ----: | -----: | ------: | ------------------------------------ | ------------------------------------ |
| 32.5% | 27.0ms |      27 | `zig.Ast.Render.tokenSliceForRender` | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 26.5% | 22.0ms |      22 | `zig.Ast.tokenSlice`                 | `opt/zig/lib/std/zig/Ast.zig`        |
| 26.5% | 22.0ms |      22 | `zig.Ast.Render.renderSpace`         | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  7.2% |  6.0ms |       6 | `zig.Ast.Render.renderIdentifier`    | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  2.4% |  2.0ms |       2 | `zig.Ast.fullIfComponents`           | `opt/zig/lib/std/zig/Ast.zig`        |

##### `mem.indexOfScalarPos__anon_8996` (`opt/zig/lib/std/mem.zig`)

|     % |   Time | Samples | Caller                         | Location                             |
| ----: | -----: | ------: | ------------------------------ | ------------------------------------ |
| 96.1% | 74.0ms |      74 | `mem.indexOfScalar__anon_5905` | `opt/zig/lib/std/mem.zig`            |
|  2.6% |  2.0ms |       2 | `mem.indexOfPos__anon_23640`   | `opt/zig/lib/std/mem.zig`            |
|  1.3% |  1.0ms |       1 | `zig.Ast.Render.rowSize`       | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `0x9e670` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller                                                                                 | Location                               |
| ----: | -----: | ------: | -------------------------------------------------------------------------------------- | -------------------------------------- |
| 52.2% | 36.0ms |      36 | `array_list.Aligned(u8,null).ensureUnusedCapacity`                                     | `opt/zig/lib/std/array_list.zig`       |
| 29.0% | 20.0ms |      20 | `zig.Ast.parse`                                                                        | `opt/zig/lib/std/zig/Ast.zig`          |
|  5.8% |  4.0ms |       4 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).ensureUnusedCapacity` | `opt/zig/lib/std/multi_array_list.zig` |
|  5.8% |  4.0ms |       4 | `array_list.Aligned(u32,null).appendSlice`                                             | `opt/zig/lib/std/array_list.zig`       |
|  2.9% |  2.0ms |       2 | `array_list.AlignedManaged(u8,null).initCapacity`                                      | `opt/zig/lib/std/array_list.zig`       |

##### `zig.Ast.Render.renderIdentifier` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |   Time | Samples | Caller                                      | Location                             |
| ----: | -----: | ------: | ------------------------------------------- | ------------------------------------ |
| 47.1% | 32.0ms |      32 | `zig.Ast.Render.renderExpression`           | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 16.2% | 11.0ms |      11 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 10.3% |  7.0ms |       7 | `zig.Ast.Render.renderParamList`            | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  5.9% |  4.0ms |       4 | `zig.Ast.Render.renderFnProto`              | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  4.4% |  3.0ms |       3 | `zig.Ast.Render.renderContainerField`       | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.firstToken` (`opt/zig/lib/std/zig/Ast.zig`)

|     % |   Time | Samples | Caller                              | Location                             |
| ----: | -----: | ------: | ----------------------------------- | ------------------------------------ |
| 31.3% | 21.0ms |      21 | `zig.Ast.Render.renderExtraNewline` | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 13.4% |  9.0ms |       9 | `zig.Ast.Render.rowSize`            | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 11.9% |  8.0ms |       8 | `zig.Ast.Render.renderMember`       | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  9.0% |  6.0ms |       6 | `zig.Ast.Render.renderBuiltinCall`  | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  9.0% |  6.0ms |       6 | `zig.Ast.Render.renderStructInit`   | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.renderExtraNewlineToken` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |   Time | Samples | Caller                              | Location                             |
| ----: | -----: | ------: | ----------------------------------- | ------------------------------------ |
| 90.9% | 60.0ms |      60 | `zig.Ast.Render.renderExtraNewline` | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  4.5% |  3.0ms |       3 | `zig.Ast.Render.renderDocComments`  | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  3.0% |  2.0ms |       2 | `zig.Ast.Render.renderStructInit`   | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  1.5% |  1.0ms |       1 | `zig.Ast.Render.renderExpression`   | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `static_string_map.defaultEql` (`opt/zig/lib/std/static_string_map.zig`)

|      % |   Time | Samples | Caller                                                                                               | Location                                |
| -----: | -----: | ------: | ---------------------------------------------------------------------------------------------------- | --------------------------------------- |
| 100.0% | 64.0ms |      64 | `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` | `opt/zig/lib/std/static_string_map.zig` |

##### `mem.eqlBytes` (`opt/zig/lib/std/mem.zig`)

|     % |   Time | Samples | Caller                | Location                  |
| ----: | -----: | ------: | --------------------- | ------------------------- |
| 90.3% | 56.0ms |      56 | `mem.eql__anon_3429`  | `opt/zig/lib/std/mem.zig` |
|  9.7% |  6.0ms |       6 | `mem.eql__anon_15242` | `opt/zig/lib/std/mem.zig` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_6965` (`opt/zig/lib/std/multi_array_list.zig`)

|      % |   Time | Samples | Caller            | Location                      |
| -----: | -----: | ------: | ----------------- | ----------------------------- |
| 100.0% | 61.0ms |      61 | `zig.Ast.nodeTag` | `opt/zig/lib/std/zig/Ast.zig` |

##### `Io.Writer.write` (`opt/zig/lib/std/Io/Writer.zig`)

|      % |   Time | Samples | Caller               | Location                        |
| -----: | -----: | ------: | -------------------- | ------------------------------- |
| 100.0% | 60.0ms |      60 | `Io.Writer.writeAll` | `opt/zig/lib/std/Io/Writer.zig` |

##### `0x9e674` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller                                                                                 | Location                               |
| ----: | -----: | ------: | -------------------------------------------------------------------------------------- | -------------------------------------- |
| 52.6% | 10.0ms |      10 | `array_list.Aligned(u8,null).ensureUnusedCapacity`                                     | `opt/zig/lib/std/array_list.zig`       |
| 36.8% |  7.0ms |       7 | `zig.Ast.parse`                                                                        | `opt/zig/lib/std/zig/Ast.zig`          |
| 10.5% |  2.0ms |       2 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).ensureUnusedCapacity` | `opt/zig/lib/std/multi_array_list.zig` |

##### `0xddb88` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Caller       | Location                    |
| -----: | -----: | ------: | ------------ | --------------------------- |
| 100.0% | 19.0ms |      19 | `posix.read` | `opt/zig/lib/std/posix.zig` |

##### `0xdda44` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Caller          | Location                    |
| -----: | -----: | ------: | --------------- | --------------------------- |
| 100.0% | 19.0ms |      19 | `posix.openatZ` | `opt/zig/lib/std/posix.zig` |

##### `0xe3acc` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Caller    | Location                              |
| -----: | -----: | ------: | --------- | ------------------------------------- |
| 100.0% | 14.0ms |      14 | `0x8f987` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9d11c` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller                                        | Location                             |
| ----: | -----: | ------: | --------------------------------------------- | ------------------------------------ |
| 90.9% | 10.0ms |      10 | `zig.Ast.Render.AutoIndentingStream.writeAll` | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  9.1% |  1.0ms |       1 | `Io.Writer.alignBufferOptions`                | `opt/zig/lib/std/Io/Writer.zig`      |

##### `0x9d100` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller                                        | Location                             |
| ----: | -----: | ------: | --------------------------------------------- | ------------------------------------ |
| 90.9% | 10.0ms |      10 | `zig.Ast.Render.AutoIndentingStream.writeAll` | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  9.1% |  1.0ms |       1 | `zig.Parse.parseSuffixExpr`                   | `opt/zig/lib/std/zig/Parse.zig`      |

##### `0x9d184` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Caller                                        | Location                             |
| -----: | -----: | ------: | --------------------------------------------- | ------------------------------------ |
| 100.0% | 10.0ms |      10 | `zig.Ast.Render.AutoIndentingStream.writeAll` | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `0x9d138` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Time | Samples | Caller                                        | Location                             |
| ----: | ----: | ------: | --------------------------------------------- | ------------------------------------ |
| 88.9% | 8.0ms |       8 | `zig.Ast.Render.AutoIndentingStream.writeAll` | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 11.1% | 1.0ms |       1 | `zig.Parse.parseSuffixExpr`                   | `opt/zig/lib/std/zig/Parse.zig`      |

##### `0x9d168` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Time | Samples | Caller                                             | Location                             |
| ----: | ----: | ------: | -------------------------------------------------- | ------------------------------------ |
| 85.7% | 6.0ms |       6 | `zig.Ast.Render.AutoIndentingStream.writeAll`      | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 14.3% | 1.0ms |       1 | `array_list.Aligned(u8,null).ensureUnusedCapacity` | `opt/zig/lib/std/array_list.zig`     |

##### `0xde3c8` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller        | Location                    |
| -----: | ----: | ------: | ------------- | --------------------------- |
| 100.0% | 6.0ms |       6 | `posix.close` | `opt/zig/lib/std/posix.zig` |

##### `0x9d150` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller                                        | Location                             |
| -----: | ----: | ------: | --------------------------------------------- | ------------------------------------ |
| 100.0% | 5.0ms |       5 | `zig.Ast.Render.AutoIndentingStream.writeAll` | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `0x9d210` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Time | Samples | Caller                                                                                 | Location                               |
| ----: | ----: | ------: | -------------------------------------------------------------------------------------- | -------------------------------------- |
| 50.0% | 2.0ms |       2 | `multi_array_list.MultiArrayList(zig.Ast.Node).ensureUnusedCapacity`                   | `opt/zig/lib/std/multi_array_list.zig` |
| 25.0% | 1.0ms |       1 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).ensureUnusedCapacity` | `opt/zig/lib/std/multi_array_list.zig` |
| 25.0% | 1.0ms |       1 | `array_list.Aligned(u8,null).ensureUnusedCapacity`                                     | `opt/zig/lib/std/array_list.zig`       |

##### `0x9e5c0` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller                                           | Location                             |
| -----: | ----: | ------: | ------------------------------------------------ | ------------------------------------ |
| 100.0% | 4.0ms |       4 | `zig.Ast.Render.AutoIndentingStream.applyIndent` | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `0x9e580` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Time | Samples | Caller                                             | Location                             |
| ----: | ----: | ------: | -------------------------------------------------- | ------------------------------------ |
| 25.0% | 1.0ms |       1 | `array_list.Aligned(u8,null).ensureUnusedCapacity` | `opt/zig/lib/std/array_list.zig`     |
| 25.0% | 1.0ms |       1 | `zig.Ast.Render.renderExpression`                  | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 25.0% | 1.0ms |       1 | `zig.Ast.Render.AutoIndentingStream.pushIndent`    | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 25.0% | 1.0ms |       1 | `zig.Ast.Render.AutoIndentingStream.applyIndent`   | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `0x9d114` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller                                        | Location                             |
| -----: | ----: | ------: | --------------------------------------------- | ------------------------------------ |
| 100.0% | 4.0ms |       4 | `zig.Ast.Render.AutoIndentingStream.writeAll` | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `0x9e584` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller                                           | Location                             |
| -----: | ----: | ------: | ------------------------------------------------ | ------------------------------------ |
| 100.0% | 3.0ms |       3 | `zig.Ast.Render.AutoIndentingStream.applyIndent` | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `0x9d160` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller                                        | Location                             |
| -----: | ----: | ------: | --------------------------------------------- | ------------------------------------ |
| 100.0% | 2.0ms |       2 | `zig.Ast.Render.AutoIndentingStream.writeAll` | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `0x9d124` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Time | Samples | Caller                         | Location                        |
| ----: | ----: | ------: | ------------------------------ | ------------------------------- |
| 50.0% | 1.0ms |       1 | `zig.Parse.parseParamDeclList` | `opt/zig/lib/std/zig/Parse.zig` |
| 50.0% | 1.0ms |       1 | `Io.Writer.alignBufferOptions` | `opt/zig/lib/std/Io/Writer.zig` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |  Time | Samples | Function                                    | Location                                         |
| -----: | ----: | ------: | ------------------------------------------- | ------------------------------------------------ |
| 100.0% | 5.23s |   5,237 | `start.callMain`                            | `opt/zig/lib/std/start.zig`                      |
| 100.0% | 5.23s |   5,237 | `start.callMainWithArgs`                    | `opt/zig/lib/std/start.zig`                      |
| 100.0% | 5.23s |   5,237 | `main`                                      | `opt/zig/lib/std/start.zig`                      |
| 100.0% | 5.23s |   5,237 | `0x27743`                                   | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 100.0% | 5.23s |   5,237 | `0x27817`                                   | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 100.0% | 5.23s |   5,237 | `_start`                                    | `opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
|  99.9% | 5.23s |   5,232 | `profile.main`                              | `out/profile.zig`                                |
|  75.8% | 3.96s |   3,968 | `zig.Ast.Render.renderTree`                 | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|  75.8% | 3.96s |   3,968 | `zig.Ast.render`                            | `opt/zig/lib/std/zig/Ast.zig`                    |
|  75.8% | 3.96s |   3,968 | `zig.Ast.renderAlloc`                       | `opt/zig/lib/std/zig/Ast.zig`                    |
|  75.7% | 3.96s |   3,962 | `zig.Ast.Render.renderMembers`              | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|  72.8% | 3.81s |   3,813 | `zig.Ast.Render.renderExpression`           | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|  65.7% | 3.44s |   3,441 | `zig.Ast.Render.renderMember`               | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|  50.0% | 2.61s |   2,618 | `zig.Ast.Render.finishRenderBlock`          | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|  45.3% | 2.37s |   2,374 | `zig.Ast.Render.renderVarDecl`              | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|  45.3% | 2.37s |   2,373 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|  32.3% | 1.68s |   1,689 | `zig.Ast.Render.renderToken`                | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|  31.7% | 1.65s |   1,659 | `zig.Ast.Render.renderContainerDecl`        | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|  28.4% | 1.48s |   1,488 | `zig.tokenizer.Tokenizer.next`              | `opt/zig/lib/std/zig/tokenizer.zig`              |
|  28.2% | 1.47s |   1,478 | `zig.Ast.Render.tokenSliceForRender`        | `opt/zig/lib/std/zig/Ast/Render.zig`             |

#### Categories

##### Standard library

|      % |  Time | Samples | Function                                    | Location                                         |
| -----: | ----: | ------: | ------------------------------------------- | ------------------------------------------------ |
| 100.0% | 5.23s |   5,237 | `start.callMain`                            | `opt/zig/lib/std/start.zig`                      |
| 100.0% | 5.23s |   5,237 | `start.callMainWithArgs`                    | `opt/zig/lib/std/start.zig`                      |
| 100.0% | 5.23s |   5,237 | `main`                                      | `opt/zig/lib/std/start.zig`                      |
| 100.0% | 5.23s |   5,237 | `_start`                                    | `opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
|  75.8% | 3.96s |   3,968 | `zig.Ast.Render.renderTree`                 | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|  75.8% | 3.96s |   3,968 | `zig.Ast.render`                            | `opt/zig/lib/std/zig/Ast.zig`                    |
|  75.8% | 3.96s |   3,968 | `zig.Ast.renderAlloc`                       | `opt/zig/lib/std/zig/Ast.zig`                    |
|  75.7% | 3.96s |   3,962 | `zig.Ast.Render.renderMembers`              | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|  72.8% | 3.81s |   3,813 | `zig.Ast.Render.renderExpression`           | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|  65.7% | 3.44s |   3,441 | `zig.Ast.Render.renderMember`               | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|  50.0% | 2.61s |   2,618 | `zig.Ast.Render.finishRenderBlock`          | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|  45.3% | 2.37s |   2,374 | `zig.Ast.Render.renderVarDecl`              | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|  45.3% | 2.37s |   2,373 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|  32.3% | 1.68s |   1,689 | `zig.Ast.Render.renderToken`                | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|  31.7% | 1.65s |   1,659 | `zig.Ast.Render.renderContainerDecl`        | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|  28.4% | 1.48s |   1,488 | `zig.tokenizer.Tokenizer.next`              | `opt/zig/lib/std/zig/tokenizer.zig`              |
|  28.2% | 1.47s |   1,478 | `zig.Ast.Render.tokenSliceForRender`        | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|  27.4% | 1.43s |   1,437 | `zig.Ast.Render.renderIdentifier`           | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|  24.7% | 1.29s |   1,295 | `zig.Ast.tokenSlice`                        | `opt/zig/lib/std/zig/Ast.zig`                    |
|  22.7% | 1.18s |   1,189 | `zig.Ast.parse`                             | `opt/zig/lib/std/zig/Ast.zig`                    |

##### Native

|      % |    Time | Samples | Function  | Location                              |
| -----: | ------: | ------: | --------- | ------------------------------------- |
| 100.0% |   5.23s |   5,237 | `0x27743` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| 100.0% |   5.23s |   5,237 | `0x27817` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|   2.5% | 132.0ms |     132 | `0x9d200` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|   1.3% |  69.0ms |      69 | `0x9e670` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.4% |  19.0ms |      19 | `0x9e674` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.4% |  19.0ms |      19 | `0xddb88` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.4% |  19.0ms |      19 | `0xdda44` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.3% |  17.0ms |      17 | `0x92a9b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.3% |  14.0ms |      14 | `0xe3acc` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.3% |  14.0ms |      14 | `0x8f987` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.2% |  13.0ms |      13 | `0x8fa47` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.2% |  13.0ms |      13 | `0x9023f` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.2% |  11.0ms |      11 | `0x9d11c` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.2% |  11.0ms |      11 | `0x9d100` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.2% |  10.0ms |      10 | `0x9d184` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.2% |   9.0ms |       9 | `0x9d138` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.1% |   7.0ms |       7 | `0x9d168` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.1% |   6.0ms |       6 | `0xde3c8` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.1% |   6.0ms |       6 | `0x9405b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.1% |   5.0ms |       5 | `0x9d150` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `start.callMain` (`opt/zig/lib/std/start.zig`)

|     % |  Time | Samples | Callee                                      | Location                              |
| ----: | ----: | ------: | ------------------------------------------- | ------------------------------------- |
| 99.9% | 5.23s |   5,232 | `profile.main`                              | `out/profile.zig`                     |
|  0.1% | 3.0ms |       3 | `0x9d200`                                   | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| <0.1% | 1.0ms |       1 | `zig.Ast.Render.renderContainerDocComments` | `opt/zig/lib/std/zig/Ast/Render.zig`  |
| <0.1% | 1.0ms |       1 | `0x9d220`                                   | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `start.callMainWithArgs` (`opt/zig/lib/std/start.zig`)

|      % |  Time | Samples | Callee           | Location                    |
| -----: | ----: | ------: | ---------------- | --------------------------- |
| 100.0% | 5.23s |   5,237 | `start.callMain` | `opt/zig/lib/std/start.zig` |

##### `main` (`opt/zig/lib/std/start.zig`)

|      % |  Time | Samples | Callee                   | Location                    |
| -----: | ----: | ------: | ------------------------ | --------------------------- |
| 100.0% | 5.23s |   5,237 | `start.callMainWithArgs` | `opt/zig/lib/std/start.zig` |

##### `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee | Location                    |
| -----: | ----: | ------: | ------ | --------------------------- |
| 100.0% | 5.23s |   5,237 | `main` | `opt/zig/lib/std/start.zig` |

##### `0x27817` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee    | Location                              |
| -----: | ----: | ------: | --------- | ------------------------------------- |
| 100.0% | 5.23s |   5,237 | `0x27743` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `_start` (`opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)

|      % |  Time | Samples | Callee    | Location                              |
| -----: | ----: | ------: | --------- | ------------------------------------- |
| 100.0% | 5.23s |   5,237 | `0x27817` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `profile.main` (`out/profile.zig`)

|     % |   Time | Samples | Callee                                   | Location                      |
| ----: | -----: | ------: | ---------------------------------------- | ----------------------------- |
| 75.8% |  3.96s |   3,968 | `zig.Ast.renderAlloc`                    | `opt/zig/lib/std/zig/Ast.zig` |
| 22.7% |  1.18s |   1,189 | `zig.Ast.parse`                          | `opt/zig/lib/std/zig/Ast.zig` |
|  0.9% | 46.0ms |      46 | `fs.Dir.readFileAllocOptions__anon_2384` | `opt/zig/lib/std/fs/Dir.zig`  |
|  0.3% | 14.0ms |      14 | `fs.Dir.Walker.next`                     | `opt/zig/lib/std/fs/Dir.zig`  |
|  0.2% |  9.0ms |       9 | `zig.Ast.deinit`                         | `opt/zig/lib/std/zig/Ast.zig` |

##### `zig.Ast.Render.renderTree` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |  Time | Samples | Callee                                      | Location                             |
| ----: | ----: | ------: | ------------------------------------------- | ------------------------------------ |
| 99.8% | 3.96s |   3,962 | `zig.Ast.Render.renderMembers`              | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.2% | 6.0ms |       6 | `zig.Ast.Render.renderContainerDocComments` | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.render` (`opt/zig/lib/std/zig/Ast.zig`)

|      % |  Time | Samples | Callee                      | Location                             |
| -----: | ----: | ------: | --------------------------- | ------------------------------------ |
| 100.0% | 3.96s |   3,968 | `zig.Ast.Render.renderTree` | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.renderAlloc` (`opt/zig/lib/std/zig/Ast.zig`)

|      % |  Time | Samples | Callee           | Location                      |
| -----: | ----: | ------: | ---------------- | ----------------------------- |
| 100.0% | 3.96s |   3,968 | `zig.Ast.render` | `opt/zig/lib/std/zig/Ast.zig` |

##### `zig.Ast.Render.renderMembers` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Callee                               | Location                             |
| ----: | ------: | ------: | ------------------------------------ | ------------------------------------ |
| 86.6% |   3.43s |   3,430 | `zig.Ast.Render.renderMember`        | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 12.8% | 509.0ms |     509 | `zig.Ast.Render.renderExpression`    | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.5% |  21.0ms |      21 | `zig.Ast.Render.renderExtraNewline`  | `opt/zig/lib/std/zig/Ast/Render.zig` |
| <0.1% |   1.0ms |       1 | `zig.Ast.fullContainerField`         | `opt/zig/lib/std/zig/Ast.zig`        |
| <0.1% |   1.0ms |       1 | `zig.Ast.Render.tokenSliceForRender` | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.renderExpression` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Callee                               | Location                             |
| ----: | ------: | ------: | ------------------------------------ | ------------------------------------ |
| 68.7% |   2.61s |   2,618 | `zig.Ast.Render.finishRenderBlock`   | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 43.5% |   1.65s |   1,659 | `zig.Ast.Render.renderContainerDecl` | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 28.9% |   1.10s |   1,101 | `zig.Ast.Render.renderExpression`    | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 25.3% | 964.0ms |     964 | `zig.Ast.Render.renderParamList`     | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 17.3% | 661.0ms |     661 | `zig.Ast.Render.renderExpressions`   | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.renderMember` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Callee                                | Location                             |
| ----: | ------: | ------: | ------------------------------------- | ------------------------------------ |
| 66.2% |   2.27s |   2,279 | `zig.Ast.Render.renderExpression`     | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 49.8% |   1.71s |   1,713 | `zig.Ast.Render.renderVarDecl`        | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  7.4% | 256.0ms |     256 | `zig.Ast.Render.renderContainerField` | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  2.7% |  94.0ms |      94 | `zig.Ast.Render.renderDocComments`    | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.5% |  18.0ms |      18 | `zig.Ast.firstToken`                  | `opt/zig/lib/std/zig/Ast.zig`        |

##### `zig.Ast.Render.finishRenderBlock` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Callee                              | Location                             |
| ----: | ------: | ------: | ----------------------------------- | ------------------------------------ |
| 77.4% |   2.02s |   2,027 | `zig.Ast.Render.renderExpression`   | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 31.1% | 814.0ms |     814 | `zig.Ast.Render.renderVarDecl`      | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  3.6% |  95.0ms |      95 | `zig.Ast.Render.renderExtraNewline` | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  1.3% |  35.0ms |      35 | `zig.Ast.Render.renderToken`        | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  0.8% |  22.0ms |      22 | `zig.Ast.lastToken`                 | `opt/zig/lib/std/zig/Ast.zig`        |

##### `zig.Ast.Render.renderVarDecl` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|      % |  Time | Samples | Callee                                                                      | Location                             |
| -----: | ----: | ------: | --------------------------------------------------------------------------- | ------------------------------------ |
| 100.0% | 2.37s |   2,373 | `zig.Ast.Render.renderVarDeclWithoutFixups`                                 | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  <0.1% | 1.0ms |       1 | `hash_map.HashMapUnmanaged(u32,void,hash_map.AutoContext(u32),80).contains` | `opt/zig/lib/std/hash_map.zig`       |

##### `zig.Ast.Render.renderVarDeclWithoutFixups` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Callee                            | Location                             |
| ----: | ------: | ------: | --------------------------------- | ------------------------------------ |
| 89.9% |   2.13s |   2,133 | `zig.Ast.Render.renderExpression` | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  7.8% | 185.0ms |     185 | `zig.Ast.Render.renderIdentifier` | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  4.3% | 101.0ms |     101 | `zig.Ast.Render.renderToken`      | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  1.1% |  27.0ms |      27 | `zig.Ast.firstToken`              | `opt/zig/lib/std/zig/Ast.zig`        |
|  0.3% |   8.0ms |       8 | `zig.Ast.Render.renderSpace`      | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.renderToken` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Callee                                        | Location                             |
| ----: | ------: | ------: | --------------------------------------------- | ------------------------------------ |
| 46.3% | 782.0ms |     782 | `zig.Ast.Render.tokenSliceForRender`          | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 26.6% | 450.0ms |     450 | `zig.Ast.Render.renderSpace`                  | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 24.2% | 408.0ms |     408 | `zig.Ast.Render.AutoIndentingStream.writeAll` | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  1.7% |  28.0ms |      28 | `zig.Ast.tokenSlice`                          | `opt/zig/lib/std/zig/Ast.zig`        |
|  0.1% |   1.0ms |       1 | `zig.Ast.Render.renderComments`               | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.renderContainerDecl` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Callee                              | Location                             |
| ----: | ------: | ------: | ----------------------------------- | ------------------------------------ |
| 88.8% |   1.47s |   1,473 | `zig.Ast.Render.renderMember`       | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  6.0% | 100.0ms |     100 | `zig.Ast.Render.hasComment`         | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  3.7% |  62.0ms |      62 | `zig.Ast.Render.renderExtraNewline` | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  1.6% |  27.0ms |      27 | `zig.Ast.Render.renderToken`        | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  1.3% |  21.0ms |      21 | `zig.Ast.Render.renderExpression`   | `opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.tokenizer.Tokenizer.next` (`opt/zig/lib/std/zig/tokenizer.zig`)

|     % |    Time | Samples | Callee                           | Location                            |
| ----: | ------: | ------: | -------------------------------- | ----------------------------------- |
| 21.0% | 313.0ms |     313 | `zig.tokenizer.Token.getKeyword` | `opt/zig/lib/std/zig/tokenizer.zig` |

##### `zig.Ast.Render.tokenSliceForRender` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Callee                           | Location                            |
| ----: | ------: | ------: | -------------------------------- | ----------------------------------- |
| 73.8% |   1.09s |   1,091 | `zig.Ast.tokenSlice`             | `opt/zig/lib/std/zig/Ast.zig`       |
|  9.7% | 144.0ms |     144 | `zig.tokenizer.Token.Tag.lexeme` | `opt/zig/lib/std/zig/tokenizer.zig` |
|  2.9% |  43.0ms |      43 | `zig.Ast.tokenTag`               | `opt/zig/lib/std/zig/Ast.zig`       |
|  0.1% |   1.0ms |       1 | `zig.tokenizer.Tokenizer.next`   | `opt/zig/lib/std/zig/tokenizer.zig` |

##### `zig.Ast.Render.renderIdentifier` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Time | Samples | Callee                                     | Location                             |
| ----: | ------: | ------: | ------------------------------------------ | ------------------------------------ |
| 48.6% | 698.0ms |     698 | `zig.Ast.Render.renderToken`               | `opt/zig/lib/std/zig/Ast/Render.zig` |
| 42.9% | 617.0ms |     617 | `zig.Ast.Render.tokenSliceForRender`       | `opt/zig/lib/std/zig/Ast/Render.zig` |
|  1.9% |  28.0ms |      28 | `array_hash_map.ArrayHashMapUnmanaged.get` | `opt/zig/lib/std/array_hash_map.zig` |
|  1.3% |  19.0ms |      19 | `zig.Ast.tokenSlice`                       | `opt/zig/lib/std/zig/Ast.zig`        |
|  0.4% |   6.0ms |       6 | `zig.Ast.tokenTag`                         | `opt/zig/lib/std/zig/Ast.zig`        |

##### `zig.Ast.tokenSlice` (`opt/zig/lib/std/zig/Ast.zig`)

|     % |    Time | Samples | Callee                         | Location                            |
| ----: | ------: | ------: | ------------------------------ | ----------------------------------- |
| 76.6% | 992.0ms |     992 | `zig.tokenizer.Tokenizer.next` | `opt/zig/lib/std/zig/tokenizer.zig` |
|  1.9% |  25.0ms |      25 | `zig.Ast.tokenTag`             | `opt/zig/lib/std/zig/Ast.zig`       |
|  0.7% |   9.0ms |       9 | `zig.Ast.tokenStart`           | `opt/zig/lib/std/zig/Ast.zig`       |

##### `zig.Ast.parse` (`opt/zig/lib/std/zig/Ast.zig`)

|     % |    Time | Samples | Callee                                                                   | Location                               |
| ----: | ------: | ------: | ------------------------------------------------------------------------ | -------------------------------------- |
| 46.3% | 551.0ms |     551 | `zig.Parse.parseRoot`                                                    | `opt/zig/lib/std/zig/Parse.zig`        |
| 41.6% | 495.0ms |     495 | `zig.tokenizer.Tokenizer.next`                                           | `opt/zig/lib/std/zig/tokenizer.zig`    |
|  8.3% |  99.0ms |      99 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).append` | `opt/zig/lib/std/multi_array_list.zig` |
|  1.7% |  20.0ms |      20 | `0x9e670`                                                                | `usr/lib/aarch64-linux-gnu/libc.so.6`  |
|  0.6% |   7.0ms |       7 | `0x9e674`                                                                | `usr/lib/aarch64-linux-gnu/libc.so.6`  |

##### `0x92a9b` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Callee    | Location                              |
| ----: | -----: | ------: | --------- | ------------------------------------- |
| 76.5% | 13.0ms |      13 | `0x9023f` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  5.9% |  1.0ms |       1 | `0x8faa0` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  5.9% |  1.0ms |       1 | `0x8fcb4` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  5.9% |  1.0ms |       1 | `0x901d4` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  5.9% |  1.0ms |       1 | `0x8fc9c` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x8f987` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Callee    | Location                              |
| -----: | -----: | ------: | --------- | ------------------------------------- |
| 100.0% | 14.0ms |      14 | `0xe3acc` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x8fa47` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Callee    | Location                              |
| -----: | -----: | ------: | --------- | ------------------------------------- |
| 100.0% | 13.0ms |      13 | `0x8f987` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9023f` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Callee    | Location                              |
| -----: | -----: | ------: | --------- | ------------------------------------- |
| 100.0% | 13.0ms |      13 | `0x8fa47` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9405b` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Time | Samples | Callee    | Location                              |
| ----: | ----: | ------: | --------- | ------------------------------------- |
| 66.7% | 4.0ms |       4 | `0x9245b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| 16.7% | 1.0ms |       1 | `0x92284` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| 16.7% | 1.0ms |       1 | `0x92260` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `profile.main` (`out/profile.zig`) ← `start.callMain` (`opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` (`opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)

|    % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---: | ------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8.1% | 424.0ms |     424 | `zig.tokenizer.Tokenizer.next` (`opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.Ast.parse` (`opt/zig/lib/std/zig/Ast.zig`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.9% |  47.0ms |      47 | `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` (`opt/zig/lib/std/static_string_map.zig`) ← `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).get` ← `zig.tokenizer.Token.getKeyword` (`opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.tokenizer.Tokenizer.next` ← `zig.Ast.parse` (`opt/zig/lib/std/zig/Ast.zig`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.6% |  30.0ms |      30 | `zig.tokenizer.Tokenizer.next` (`opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.Ast.tokenSlice` (`opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.Render.tokenSliceForRender` (`opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderIdentifier` ← `zig.Ast.Render.renderContainerField` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.5% |  27.0ms |      27 | `0x9d200` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).ensureUnusedCapacity` (`opt/zig/lib/std/multi_array_list.zig`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).append` ← `zig.Ast.parse` (`opt/zig/lib/std/zig/Ast.zig`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.5% |  24.0ms |      24 | `static_string_map.defaultEql` (`opt/zig/lib/std/static_string_map.zig`) ← `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` ← `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).get` ← `zig.tokenizer.Token.getKeyword` (`opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.tokenizer.Tokenizer.next` ← `zig.Ast.parse` (`opt/zig/lib/std/zig/Ast.zig`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.4% |  22.0ms |      22 | `zig.tokenizer.Tokenizer.next` (`opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.Ast.tokenSlice` (`opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.Render.hasComment` (`opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.4% |  20.0ms |      20 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).ensureTotalCapacity` (`opt/zig/lib/std/math.zig`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).ensureUnusedCapacity` (`opt/zig/lib/std/multi_array_list.zig`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).append` ← `zig.Ast.parse` (`opt/zig/lib/std/zig/Ast.zig`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.4% |  20.0ms |      20 | `0x9e670` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `zig.Ast.parse` (`opt/zig/lib/std/zig/Ast.zig`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.4% |  19.0ms |      19 | `zig.tokenizer.Tokenizer.next` (`opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.Ast.tokenSlice` (`opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.Render.tokenSliceForRender` (`opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderDocComments` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.4% |  19.0ms |      19 | `0xddb88` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `posix.read` (`opt/zig/lib/std/posix.zig`) ← `fs.File.read` (`opt/zig/lib/std/fs/File.zig`) ← `Io.GenericReader(fs.File,error{AccessDenied,BrokenPipe,Canceled,ConnectionResetByPeer,ConnectionTimedOut,InputOutput,IsDir,LockViolation,NotOpenForReading,OperationAborted,ProcessNotFound,SocketNotConnected,SystemResources,Unexpected,WouldBlock},(function 'read')).typeErasedReadFn` (`opt/zig/lib/std/Io.zig`) ← `Io.DeprecatedReader.read` (`opt/zig/lib/std/Io/DeprecatedReader.zig`) ← `Io.DeprecatedReader.readAtLeast` ← `Io.DeprecatedReader.readAll` ← `Io.DeprecatedReader.readAllArrayListAligned__anon_2535` ← `Io.GenericReader(fs.File,error{AccessDenied,BrokenPipe,Canceled,ConnectionResetByPeer,ConnectionTimedOut,InputOutput,IsDir,LockViolation,NotOpenForReading,OperationAborted,ProcessNotFound,SocketNotConnected,SystemResources,Unexpected,WouldBlock},(function 'read')).readAllArrayListAligned` (`opt/zig/lib/std/Io.zig`) ← `fs.File.readToEndAllocOptions__anon_2451` (`opt/zig/lib/std/fs/File.zig`) ← `fs.Dir.readFileAllocOptions__anon_2384` (`opt/zig/lib/std/fs/Dir.zig`) |
| 0.3% |  16.0ms |      16 | `zig.Ast.parse` (`opt/zig/lib/std/zig/Ast.zig`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.3% |  16.0ms |      16 | `0xdda44` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `posix.openatZ` (`opt/zig/lib/std/posix.zig`) ← `fs.Dir.openFileZ` (`opt/zig/lib/std/fs/Dir.zig`) ← `fs.Dir.openFile` ← `fs.Dir.readFileAllocOptions__anon_2384`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.3% |  15.0ms |      15 | `zig.tokenizer.Token.Tag.lexeme` (`opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.Ast.Render.hasComment` (`opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.3% |  15.0ms |      15 | `zig.tokenizer.Tokenizer.next` (`opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.Ast.tokenSlice` (`opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.Render.tokenSliceForRender` (`opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderIdentifier` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.finishRenderBlock` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.3% |  15.0ms |      15 | `zig.tokenizer.Tokenizer.next` (`opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.Ast.tokenSlice` (`opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.Render.tokenSliceForRender` (`opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderExtraNewlineToken` ← `zig.Ast.Render.renderExtraNewline` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.3% |  15.0ms |      15 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).Slice.set` (`opt/zig/lib/std/multi_array_list.zig`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).set` ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).appendAssumeCapacity` ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).append` ← `zig.Ast.parse` (`opt/zig/lib/std/zig/Ast.zig`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.3% |  15.0ms |      15 | `zig.tokenizer.Tokenizer.next` (`opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.Ast.tokenSlice` (`opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.Render.tokenSliceForRender` (`opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderDocComments` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.3% |  14.0ms |      14 | `zig.tokenizer.Tokenizer.next` (`opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.Ast.tokenSlice` (`opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.Render.hasComment` (`opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderArrayInit` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.finishRenderBlock` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.2% |  13.0ms |      13 | `zig.tokenizer.Tokenizer.next` (`opt/zig/lib/std/zig/tokenizer.zig`) ← `zig.Ast.tokenSlice` (`opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.Render.tokenSliceForRender` (`opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderIdentifier` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.2% |  13.0ms |      13 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).appendAssumeCapacity` (`opt/zig/lib/std/multi_array_list.zig`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).append` ← `zig.Ast.parse` (`opt/zig/lib/std/zig/Ast.zig`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
