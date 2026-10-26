# CPU profile diff

Took 5.28s → 5.88s (+601.00ms, +11.4%) over 5,287 → 5,888 samples (1.0ms per sample).

| Category         | Change |     Delta |             % |             Time |       Samples |
| ---------------- | -----: | --------: | ------------: | ---------------: | ------------: |
| Standard library | +18.5% | +900.00ms | 92.2% → 98.1% |    4.87s → 5.77s | 4,876 → 5,776 |
| Unknown          | -92.0% | -309.00ms |   6.4% → 0.5% | 336.0ms → 27.0ms |      336 → 27 |
| Native           | +13.3% |  +10.00ms |          1.4% |  75.0ms → 85.0ms |       75 → 85 |

Paths starting with `./` or `../` are relative to `/out/`.

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|   Change |     Delta |             % |              Time |       Samples | Function                                                                | Location                                          |
| -------: | --------: | ------------: | ----------------: | ------------: | ----------------------------------------------------------------------- | ------------------------------------------------- |
|      new | +365.00ms |   0.0% → 6.2% |     0ms → 365.0ms |       0 → 365 | `memset`                                                                | `/opt/zig/lib/compiler_rt.zig:677`                |
|      new | +136.00ms |   0.0% → 2.3% |     0ms → 136.0ms |       0 → 136 | `mem.findScalarPos__anon_6382`                                          | `/opt/zig/lib/std/mem.zig:1241`                   |
|   +61.1% |  +80.00ms |   2.5% → 3.6% | 131.0ms → 211.0ms |     131 → 211 | `zig.Ast.Render.renderExpression`                                       | `/opt/zig/lib/std/zig/Ast/Render.zig:314`         |
|  +116.4% |  +71.00ms |   1.2% → 2.2% |  61.0ms → 132.0ms |      61 → 132 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_28815` | `/opt/zig/lib/std/multi_array_list.zig:83 → 100`  |
|  +128.9% |  +49.00ms |   0.7% → 1.5% |   38.0ms → 87.0ms |       38 → 87 | `zig.Ast.lastToken`                                                     | `/opt/zig/lib/std/zig/Ast.zig:874 → 881`          |
|   +14.8% |  +37.00ms |   4.7% → 4.9% | 250.0ms → 287.0ms |     250 → 287 | `zig.Ast.tokenSlice`                                                    | `/opt/zig/lib/std/zig/Ast.zig:265 → 276`          |
|  +291.7% |  +35.00ms |   0.2% → 0.8% |   12.0ms → 47.0ms |       12 → 47 | `zig.Ast.nodeMainToken`                                                 | `/opt/zig/lib/std/zig/Ast.zig:100`                |
|      new |  +31.00ms |   0.0% → 0.5% |      0ms → 31.0ms |        0 → 31 | `compiler_rt.memcpy.copyLessThan16`                                     | `/opt/zig/lib/compiler_rt/memcpy.zig:67`          |
|   +19.5% |  +30.00ms |   2.9% → 3.1% | 154.0ms → 184.0ms |     154 → 184 | `zig.tokenizer.Token.Tag.lexeme`                                        | `/opt/zig/lib/std/zig/tokenizer.zig:186`          |
|    +2.2% |  +28.00ms | 23.8% → 21.8% |     1.25s → 1.28s | 1,258 → 1,286 | `zig.tokenizer.Tokenizer.next`                                          | `/opt/zig/lib/std/zig/tokenizer.zig:395 → 396`    |
|  +216.7% |  +26.00ms |   0.2% → 0.6% |   12.0ms → 38.0ms |       12 → 38 | `zig.Parse.addNode`                                                     | `/opt/zig/lib/std/zig/Parse.zig:63`               |
|      new |  +26.00ms |   0.0% → 0.4% |      0ms → 26.0ms |        0 → 26 | `mem.findPosLinear__anon_31435`                                         | `/opt/zig/lib/std/mem.zig:1443`                   |
|   +15.2% |  +25.00ms |   3.1% → 3.2% | 164.0ms → 189.0ms |     164 → 189 | `zig.Ast.Render.renderSpace`                                            | `/opt/zig/lib/std/zig/Ast/Render.zig:2862 → 2738` |
|   +10.8% |  +21.00ms |          3.7% | 194.0ms → 215.0ms |     194 → 215 | `zig.Ast.Render.tokenSliceForRender`                                    | `/opt/zig/lib/std/zig/Ast/Render.zig:3268 → 3168` |
|  +111.1% |  +20.00ms |   0.3% → 0.6% |   18.0ms → 38.0ms |       18 → 38 | `zig.Ast.Render.AutoIndentingStream.applyIndent`                        | `/opt/zig/lib/std/zig/Ast/Render.zig:3671 → 3516` |
|  +172.7% |  +19.00ms |   0.2% → 0.5% |   11.0ms → 30.0ms |       11 → 30 | `zig.Parse.parseTypeExpr`                                               | `/opt/zig/lib/std/zig/Parse.zig:1693 → 1722`      |
|   +57.6% |  +19.00ms |   0.6% → 0.9% |   33.0ms → 52.0ms |       33 → 52 | `zig.Parse.tokenTag`                                                    | `/opt/zig/lib/std/zig/Parse.zig:14`               |
|      new |  +19.00ms |   0.0% → 0.3% |      0ms → 19.0ms |        0 → 19 | `preadv`                                                                | `<unknown>`                                       |
|   +73.9% |  +17.00ms |   0.4% → 0.7% |   23.0ms → 40.0ms |       23 → 40 | `zig.Ast.parse`                                                         | `/opt/zig/lib/std/zig/Ast.zig:145`                |
| +1700.0% |  +17.00ms |  <0.1% → 0.3% |    1.0ms → 18.0ms |        1 → 18 | `zig.Ast.Render.renderExpressionComma`                                  | `/opt/zig/lib/std/zig/Ast/Render.zig:2786 → 2655` |

##### Standard library

|   Change |     Delta |             % |              Time |       Samples | Function                                                                | Location                                          |
| -------: | --------: | ------------: | ----------------: | ------------: | ----------------------------------------------------------------------- | ------------------------------------------------- |
|      new | +365.00ms |   0.0% → 6.2% |     0ms → 365.0ms |       0 → 365 | `memset`                                                                | `/opt/zig/lib/compiler_rt.zig:677`                |
|      new | +136.00ms |   0.0% → 2.3% |     0ms → 136.0ms |       0 → 136 | `mem.findScalarPos__anon_6382`                                          | `/opt/zig/lib/std/mem.zig:1241`                   |
|   +61.1% |  +80.00ms |   2.5% → 3.6% | 131.0ms → 211.0ms |     131 → 211 | `zig.Ast.Render.renderExpression`                                       | `/opt/zig/lib/std/zig/Ast/Render.zig:314`         |
|  +116.4% |  +71.00ms |   1.2% → 2.2% |  61.0ms → 132.0ms |      61 → 132 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_28815` | `/opt/zig/lib/std/multi_array_list.zig:83 → 100`  |
|  +128.9% |  +49.00ms |   0.7% → 1.5% |   38.0ms → 87.0ms |       38 → 87 | `zig.Ast.lastToken`                                                     | `/opt/zig/lib/std/zig/Ast.zig:874 → 881`          |
|   +14.8% |  +37.00ms |   4.7% → 4.9% | 250.0ms → 287.0ms |     250 → 287 | `zig.Ast.tokenSlice`                                                    | `/opt/zig/lib/std/zig/Ast.zig:265 → 276`          |
|  +291.7% |  +35.00ms |   0.2% → 0.8% |   12.0ms → 47.0ms |       12 → 47 | `zig.Ast.nodeMainToken`                                                 | `/opt/zig/lib/std/zig/Ast.zig:100`                |
|      new |  +31.00ms |   0.0% → 0.5% |      0ms → 31.0ms |        0 → 31 | `compiler_rt.memcpy.copyLessThan16`                                     | `/opt/zig/lib/compiler_rt/memcpy.zig:67`          |
|   +19.5% |  +30.00ms |   2.9% → 3.1% | 154.0ms → 184.0ms |     154 → 184 | `zig.tokenizer.Token.Tag.lexeme`                                        | `/opt/zig/lib/std/zig/tokenizer.zig:186`          |
|    +2.2% |  +28.00ms | 23.8% → 21.8% |     1.25s → 1.28s | 1,258 → 1,286 | `zig.tokenizer.Tokenizer.next`                                          | `/opt/zig/lib/std/zig/tokenizer.zig:395 → 396`    |
|  +216.7% |  +26.00ms |   0.2% → 0.6% |   12.0ms → 38.0ms |       12 → 38 | `zig.Parse.addNode`                                                     | `/opt/zig/lib/std/zig/Parse.zig:63`               |
|      new |  +26.00ms |   0.0% → 0.4% |      0ms → 26.0ms |        0 → 26 | `mem.findPosLinear__anon_31435`                                         | `/opt/zig/lib/std/mem.zig:1443`                   |
|   +15.2% |  +25.00ms |   3.1% → 3.2% | 164.0ms → 189.0ms |     164 → 189 | `zig.Ast.Render.renderSpace`                                            | `/opt/zig/lib/std/zig/Ast/Render.zig:2862 → 2738` |
|   +10.8% |  +21.00ms |          3.7% | 194.0ms → 215.0ms |     194 → 215 | `zig.Ast.Render.tokenSliceForRender`                                    | `/opt/zig/lib/std/zig/Ast/Render.zig:3268 → 3168` |
|  +111.1% |  +20.00ms |   0.3% → 0.6% |   18.0ms → 38.0ms |       18 → 38 | `zig.Ast.Render.AutoIndentingStream.applyIndent`                        | `/opt/zig/lib/std/zig/Ast/Render.zig:3671 → 3516` |
|  +172.7% |  +19.00ms |   0.2% → 0.5% |   11.0ms → 30.0ms |       11 → 30 | `zig.Parse.parseTypeExpr`                                               | `/opt/zig/lib/std/zig/Parse.zig:1693 → 1722`      |
|   +57.6% |  +19.00ms |   0.6% → 0.9% |   33.0ms → 52.0ms |       33 → 52 | `zig.Parse.tokenTag`                                                    | `/opt/zig/lib/std/zig/Parse.zig:14`               |
|   +73.9% |  +17.00ms |   0.4% → 0.7% |   23.0ms → 40.0ms |       23 → 40 | `zig.Ast.parse`                                                         | `/opt/zig/lib/std/zig/Ast.zig:145`                |
| +1700.0% |  +17.00ms |  <0.1% → 0.3% |    1.0ms → 18.0ms |        1 → 18 | `zig.Ast.Render.renderExpressionComma`                                  | `/opt/zig/lib/std/zig/Ast/Render.zig:2786 → 2655` |
|      new |  +17.00ms |   0.0% → 0.3% |      0ms → 17.0ms |        0 → 17 | `compiler_rt.memcpy.copyFixedLength`                                    | `/opt/zig/lib/compiler_rt/memcpy.zig:149`         |

##### Native

|  Change |    Delta |            % |            Time | Samples | Function         | Location    |
| ------: | -------: | -----------: | --------------: | ------: | ---------------- | ----------- |
|     new | +19.00ms |  0.0% → 0.3% |    0ms → 19.0ms |  0 → 19 | `preadv`         | `<unknown>` |
|     new |  +7.00ms |  0.0% → 0.1% |     0ms → 7.0ms |   0 → 7 | `statx`          | `<unknown>` |
| +125.0% |  +5.00ms |  0.1% → 0.2% |   4.0ms → 9.0ms |   4 → 9 | `close`          | `<unknown>` |
|  +17.4% |  +4.00ms |  0.4% → 0.5% | 23.0ms → 27.0ms | 23 → 27 | `openat`         | `<unknown>` |
|     new |  +2.00ms | 0.0% → <0.1% |     0ms → 2.0ms |   0 → 2 | `__libc_malloc`  | `<unknown>` |
|  +50.0% |  +1.00ms | <0.1% → 0.1% |   2.0ms → 3.0ms |   2 → 3 | `cfree`          | `<unknown>` |
|     new |  +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |   0 → 1 | `__libc_realloc` | `<unknown>` |
|     new |  +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |   0 → 1 | `mmap`           | `<unknown>` |
|     new |  +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |   0 → 1 | `__sbrk`         | `<unknown>` |

#### Improvements

Functions with the largest decrease in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |     Delta |            % |              Time |   Samples | Function                                                                                             | Location                                          |
| ------: | --------: | -----------: | ----------------: | --------: | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
|  -92.0% | -309.00ms |  6.4% → 0.5% |  336.0ms → 27.0ms |  336 → 27 | `(anonymous)`                                                                                        | `<unknown>`                                       |
|  -99.1% | -112.00ms | 2.1% → <0.1% |   113.0ms → 1.0ms |   113 → 1 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32303`                              | `/opt/zig/lib/std/multi_array_list.zig:83 → 100`  |
| removed |  -60.00ms |  1.1% → 0.0% |      60.0ms → 0ms |    60 → 0 | `mem.indexOfScalarPos__anon_8996`                                                                    | `/opt/zig/lib/std/mem.zig:1258`                   |
|  -19.9% |  -57.00ms |  5.4% → 3.9% | 287.0ms → 230.0ms | 287 → 230 | `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` | `/opt/zig/lib/std/static_string_map.zig:198`      |
|  -31.4% |  -38.00ms |  2.3% → 1.4% |  121.0ms → 83.0ms |  121 → 83 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32262`                              | `/opt/zig/lib/std/multi_array_list.zig:83 → 100`  |
|  -39.0% |  -30.00ms |  1.5% → 0.8% |   77.0ms → 47.0ms |   77 → 47 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).Slice.items__anon_27682`            | `/opt/zig/lib/std/multi_array_list.zig:83 → 100`  |
|  -39.4% |  -28.00ms |  1.3% → 0.7% |   71.0ms → 43.0ms |   71 → 43 | `mem.eqlBytes`                                                                                       | `/opt/zig/lib/std/mem.zig:729 → 768`              |
| removed |  -27.00ms |  0.5% → 0.0% |      27.0ms → 0ms |    27 → 0 | `mem.indexOfPosLinear__anon_26200`                                                                   | `/opt/zig/lib/std/mem.zig:1426`                   |
| removed |  -26.00ms |  0.5% → 0.0% |      26.0ms → 0ms |    26 → 0 | `__read`                                                                                             | `<unknown>`                                       |
| removed |  -21.00ms |  0.4% → 0.0% |      21.0ms → 0ms |    21 → 0 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).ensureTotalCapacity`                | `/opt/zig/lib/std/math.zig:458`                   |
| removed |  -19.00ms |  0.4% → 0.0% |      19.0ms → 0ms |    19 → 0 | `zig.Parse.parseTypeExpr`                                                                            | `/opt/zig/lib/std/multi_array_list.zig:1693`      |
|  -18.5% |  -15.00ms |  1.5% → 1.1% |   81.0ms → 66.0ms |   81 → 66 | `zig.Ast.tokenTag`                                                                                   | `/opt/zig/lib/std/zig/Ast.zig:88`                 |
|  -16.2% |  -12.00ms |  1.4% → 1.1% |   74.0ms → 62.0ms |   74 → 62 | `zig.Ast.Render.renderExtraNewlineToken`                                                             | `/opt/zig/lib/std/zig/Ast/Render.zig:3180 → 3080` |
|  -75.0% |  -12.00ms |  0.3% → 0.1% |    16.0ms → 4.0ms |    16 → 4 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).ensureUnusedCapacity`               | `/opt/zig/lib/std/multi_array_list.zig:482 → 533` |
|  -18.3% |  -11.00ms |  1.1% → 0.8% |   60.0ms → 49.0ms |   60 → 49 | `zig.Ast.Render.renderToken`                                                                         | `/opt/zig/lib/std/zig/Ast/Render.zig:2844 → 2720` |
|  -28.6% |  -10.00ms |  0.7% → 0.4% |   35.0ms → 25.0ms |   35 → 25 | `zig.Parse.parsePrimaryTypeExpr`                                                                     | `/opt/zig/lib/std/zig/Parse.zig:2445 → 2460`      |
| removed |   -8.00ms |  0.2% → 0.0% |       8.0ms → 0ms |     8 → 0 | `os.linux.errnoFromSyscall`                                                                          | `/opt/zig/lib/std/os/linux.zig:577`               |
|  -46.7% |   -7.00ms |  0.3% → 0.1% |    15.0ms → 8.0ms |    15 → 8 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).Slice.set`                          | `/opt/zig/lib/std/multi_array_list.zig:96 → 113`  |
| removed |   -7.00ms |  0.1% → 0.0% |       7.0ms → 0ms |     7 → 0 | `mem.indexOfPos__anon_23640`                                                                         | `/opt/zig/lib/std/mem.zig:1513`                   |
|  -46.7% |   -7.00ms |  0.3% → 0.1% |    15.0ms → 8.0ms |    15 → 8 | `zig.Ast.tokensOnSameLine`                                                                           | `/opt/zig/lib/std/zig/Ast.zig:1313 → 1318`        |

##### Standard library

|  Change |     Delta |            % |              Time |   Samples | Function                                                                                             | Location                                          |
| ------: | --------: | -----------: | ----------------: | --------: | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
|  -99.1% | -112.00ms | 2.1% → <0.1% |   113.0ms → 1.0ms |   113 → 1 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32303`                              | `/opt/zig/lib/std/multi_array_list.zig:83 → 100`  |
| removed |  -60.00ms |  1.1% → 0.0% |      60.0ms → 0ms |    60 → 0 | `mem.indexOfScalarPos__anon_8996`                                                                    | `/opt/zig/lib/std/mem.zig:1258`                   |
|  -19.9% |  -57.00ms |  5.4% → 3.9% | 287.0ms → 230.0ms | 287 → 230 | `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` | `/opt/zig/lib/std/static_string_map.zig:198`      |
|  -31.4% |  -38.00ms |  2.3% → 1.4% |  121.0ms → 83.0ms |  121 → 83 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32262`                              | `/opt/zig/lib/std/multi_array_list.zig:83 → 100`  |
|  -39.0% |  -30.00ms |  1.5% → 0.8% |   77.0ms → 47.0ms |   77 → 47 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).Slice.items__anon_27682`            | `/opt/zig/lib/std/multi_array_list.zig:83 → 100`  |
|  -39.4% |  -28.00ms |  1.3% → 0.7% |   71.0ms → 43.0ms |   71 → 43 | `mem.eqlBytes`                                                                                       | `/opt/zig/lib/std/mem.zig:729 → 768`              |
| removed |  -27.00ms |  0.5% → 0.0% |      27.0ms → 0ms |    27 → 0 | `mem.indexOfPosLinear__anon_26200`                                                                   | `/opt/zig/lib/std/mem.zig:1426`                   |
| removed |  -21.00ms |  0.4% → 0.0% |      21.0ms → 0ms |    21 → 0 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).ensureTotalCapacity`                | `/opt/zig/lib/std/math.zig:458`                   |
| removed |  -19.00ms |  0.4% → 0.0% |      19.0ms → 0ms |    19 → 0 | `zig.Parse.parseTypeExpr`                                                                            | `/opt/zig/lib/std/multi_array_list.zig:1693`      |
|  -18.5% |  -15.00ms |  1.5% → 1.1% |   81.0ms → 66.0ms |   81 → 66 | `zig.Ast.tokenTag`                                                                                   | `/opt/zig/lib/std/zig/Ast.zig:88`                 |
|  -16.2% |  -12.00ms |  1.4% → 1.1% |   74.0ms → 62.0ms |   74 → 62 | `zig.Ast.Render.renderExtraNewlineToken`                                                             | `/opt/zig/lib/std/zig/Ast/Render.zig:3180 → 3080` |
|  -75.0% |  -12.00ms |  0.3% → 0.1% |    16.0ms → 4.0ms |    16 → 4 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).ensureUnusedCapacity`               | `/opt/zig/lib/std/multi_array_list.zig:482 → 533` |
|  -18.3% |  -11.00ms |  1.1% → 0.8% |   60.0ms → 49.0ms |   60 → 49 | `zig.Ast.Render.renderToken`                                                                         | `/opt/zig/lib/std/zig/Ast/Render.zig:2844 → 2720` |
|  -28.6% |  -10.00ms |  0.7% → 0.4% |   35.0ms → 25.0ms |   35 → 25 | `zig.Parse.parsePrimaryTypeExpr`                                                                     | `/opt/zig/lib/std/zig/Parse.zig:2445 → 2460`      |
| removed |   -8.00ms |  0.2% → 0.0% |       8.0ms → 0ms |     8 → 0 | `os.linux.errnoFromSyscall`                                                                          | `/opt/zig/lib/std/os/linux.zig:577`               |
|  -46.7% |   -7.00ms |  0.3% → 0.1% |    15.0ms → 8.0ms |    15 → 8 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).Slice.set`                          | `/opt/zig/lib/std/multi_array_list.zig:96 → 113`  |
| removed |   -7.00ms |  0.1% → 0.0% |       7.0ms → 0ms |     7 → 0 | `mem.indexOfPos__anon_23640`                                                                         | `/opt/zig/lib/std/mem.zig:1513`                   |
|  -46.7% |   -7.00ms |  0.3% → 0.1% |    15.0ms → 8.0ms |    15 → 8 | `zig.Ast.tokensOnSameLine`                                                                           | `/opt/zig/lib/std/zig/Ast.zig:1313 → 1318`        |
|  -87.5% |   -7.00ms | 0.2% → <0.1% |     8.0ms → 1.0ms |     8 → 1 | `zig.Ast.Render.renderExpression`                                                                    | `/opt/zig/lib/std/zig/Ast.zig:314`                |
| removed |   -6.00ms |  0.1% → 0.0% |       6.0ms → 0ms |     6 → 0 | `array_hash_map.ArrayHashMapUnmanaged.getIndexAdapted__anon_27752`                                   | `/opt/zig/lib/std/array_hash_map.zig:1053`        |

##### Unknown

| Change |     Delta |           % |             Time |  Samples | Function      | Location    |
| -----: | --------: | ----------: | ---------------: | -------: | ------------- | ----------- |
| -92.0% | -309.00ms | 6.4% → 0.5% | 336.0ms → 27.0ms | 336 → 27 | `(anonymous)` | `<unknown>` |

##### Native

|  Change |    Delta |           % |            Time | Samples | Function         | Location    |
| ------: | -------: | ----------: | --------------: | ------: | ---------------- | ----------- |
| removed | -26.00ms | 0.5% → 0.0% |    26.0ms → 0ms |  26 → 0 | `__read`         | `<unknown>` |
| removed |  -4.00ms | 0.1% → 0.0% |     4.0ms → 0ms |   4 → 0 | `posix_memalign` | `<unknown>` |
|   -6.7% |  -1.00ms | 0.3% → 0.2% | 15.0ms → 14.0ms | 15 → 14 | `brk`            | `<unknown>` |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `memset` (`/opt/zig/lib/compiler_rt.zig:677`)

| Change |     Delta |            % |          Time | Samples | Location                           |
| -----: | --------: | -----------: | ------------: | ------: | ---------------------------------- |
|    new | +307.00ms | 0.0% → 84.1% | 0ms → 307.0ms | 0 → 307 | `/opt/zig/lib/compiler_rt.zig:686` |
|    new |  +31.00ms |  0.0% → 8.5% |  0ms → 31.0ms |  0 → 31 | `/opt/zig/lib/compiler_rt.zig:684` |
|    new |  +13.00ms |  0.0% → 3.6% |  0ms → 13.0ms |  0 → 13 | `/opt/zig/lib/compiler_rt.zig:685` |
|    new |   +3.00ms |  0.0% → 0.8% |   0ms → 3.0ms |   0 → 3 | `/opt/zig/lib/compiler_rt.zig:680` |

##### `mem.findScalarPos__anon_6382` (`/opt/zig/lib/std/mem.zig:1241`)

| Change |    Delta |            % |         Time | Samples | Location                        |
| -----: | -------: | -----------: | -----------: | ------: | ------------------------------- |
|    new | +40.00ms | 0.0% → 29.4% | 0ms → 40.0ms |  0 → 40 | `/opt/zig/lib/std/mem.zig:1297` |
|    new | +17.00ms | 0.0% → 12.5% | 0ms → 17.0ms |  0 → 17 | `/opt/zig/lib/std/mem.zig:1285` |
|    new | +11.00ms |  0.0% → 8.1% | 0ms → 11.0ms |  0 → 11 | `/opt/zig/lib/std/mem.zig:1263` |
|    new |  +8.00ms |  0.0% → 5.9% |  0ms → 8.0ms |   0 → 8 | `/opt/zig/lib/std/mem.zig:1284` |
|    new |  +6.00ms |  0.0% → 4.4% |  0ms → 6.0ms |   0 → 6 | `/opt/zig/lib/std/mem.zig:1299` |

##### `zig.Ast.Render.renderExpression` (`/opt/zig/lib/std/zig/Ast/Render.zig:314`)

|  Change |    Delta |            % |           Time | Samples | Location                                  |
| ------: | -------: | -----------: | -------------: | ------: | ----------------------------------------- |
|     new | +29.00ms | 0.0% → 13.7% |   0ms → 29.0ms |  0 → 29 | `/opt/zig/lib/std/zig/Ast/Render.zig:317` |
| removed | -12.00ms |  9.2% → 0.0% |   12.0ms → 0ms |  12 → 0 | `/opt/zig/lib/std/zig/Ast/Render.zig:432` |
|     new | +11.00ms |  0.0% → 5.2% |   0ms → 11.0ms |  0 → 11 | `/opt/zig/lib/std/zig/Ast/Render.zig:321` |
|     new | +10.00ms |  0.0% → 4.7% |   0ms → 10.0ms |  0 → 10 | `/opt/zig/lib/std/zig/Ast/Render.zig:447` |
| +175.0% |  +7.00ms |  3.1% → 5.2% | 4.0ms → 11.0ms |  4 → 11 | `/opt/zig/lib/std/zig/Ast/Render.zig:314` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_28815` (`/opt/zig/lib/std/multi_array_list.zig:100`)

|  Change |    Delta |              % |             Time |  Samples | Location                                         |
| ------: | -------: | -------------: | ---------------: | -------: | ------------------------------------------------ |
| +114.8% | +70.00ms | 100.0% → 99.2% | 61.0ms → 131.0ms | 61 → 131 | `/opt/zig/lib/std/multi_array_list.zig:85 → 102` |
|     new |  +1.00ms |    0.0% → 0.8% |      0ms → 1.0ms |    0 → 1 | `/opt/zig/lib/std/multi_array_list.zig:109`      |

##### `zig.Ast.lastToken` (`/opt/zig/lib/std/zig/Ast.zig:881`)

|  Change |    Delta |             % |            Time | Samples | Location                                 |
| ------: | -------: | ------------: | --------------: | ------: | ---------------------------------------- |
| +230.8% | +30.00ms | 34.2% → 49.4% | 13.0ms → 43.0ms | 13 → 43 | `/opt/zig/lib/std/zig/Ast.zig:874 → 881` |
|  -10.0% |  -1.00ms | 26.3% → 10.3% |  10.0ms → 9.0ms |  10 → 9 | `/opt/zig/lib/std/zig/Ast.zig:877 → 884` |

##### `zig.Ast.tokenSlice` (`/opt/zig/lib/std/zig/Ast.zig:276`)

|  Change |    Delta |             % |             Time |  Samples | Location                                 |
| ------: | -------: | ------------: | ---------------: | -------: | ---------------------------------------- |
|  +46.3% | +38.00ms | 32.8% → 41.8% | 82.0ms → 120.0ms | 82 → 120 | `/opt/zig/lib/std/zig/Ast.zig:265 → 276` |
|  -41.2% | -14.00ms |  13.6% → 7.0% |  34.0ms → 20.0ms |  34 → 20 | `/opt/zig/lib/std/zig/Ast.zig:280 → 291` |
| removed |  -9.00ms |   3.6% → 0.0% |      9.0ms → 0ms |    9 → 0 | `/opt/zig/lib/std/zig/Ast.zig:279`       |
|     new |  +8.00ms |   0.0% → 2.8% |      0ms → 8.0ms |    0 → 8 | `/opt/zig/lib/std/zig/Ast.zig:289`       |
|  -15.2% |  -5.00ms |  13.2% → 9.8% |  33.0ms → 28.0ms |  33 → 28 | `/opt/zig/lib/std/zig/Ast.zig:266 → 277` |

##### `zig.Ast.nodeMainToken` (`/opt/zig/lib/std/zig/Ast.zig:100`)

|  Change |    Delta |      % |            Time | Samples | Location                           |
| ------: | -------: | -----: | --------------: | ------: | ---------------------------------- |
| +291.7% | +35.00ms | 100.0% | 12.0ms → 47.0ms | 12 → 47 | `/opt/zig/lib/std/zig/Ast.zig:101` |

##### `compiler_rt.memcpy.copyLessThan16` (`/opt/zig/lib/compiler_rt/memcpy.zig:67`)

| Change |    Delta |            % |         Time | Samples | Location                                 |
| -----: | -------: | -----------: | -----------: | ------: | ---------------------------------------- |
|    new | +16.00ms | 0.0% → 51.6% | 0ms → 16.0ms |  0 → 16 | `/opt/zig/lib/compiler_rt/memcpy.zig:73` |
|    new |  +9.00ms | 0.0% → 29.0% |  0ms → 9.0ms |   0 → 9 | `/opt/zig/lib/compiler_rt/memcpy.zig:77` |
|    new |  +5.00ms | 0.0% → 16.1% |  0ms → 5.0ms |   0 → 5 | `/opt/zig/lib/compiler_rt/memcpy.zig:74` |
|    new |  +1.00ms |  0.0% → 3.2% |  0ms → 1.0ms |   0 → 1 | `/opt/zig/lib/compiler_rt/memcpy.zig:75` |

##### `zig.tokenizer.Token.Tag.lexeme` (`/opt/zig/lib/std/zig/tokenizer.zig:186`)

|  Change |    Delta |             % |            Time | Samples | Location                                 |
| ------: | -------: | ------------: | --------------: | ------: | ---------------------------------------- |
|  +58.8% | +20.00ms | 22.1% → 29.3% | 34.0ms → 54.0ms | 34 → 54 | `/opt/zig/lib/std/zig/tokenizer.zig:187` |
| +500.0% |  +5.00ms |   0.6% → 3.3% |   1.0ms → 6.0ms |   1 → 6 | `/opt/zig/lib/std/zig/tokenizer.zig:186` |

##### `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:396`)

| Change |    Delta |             % |              Time |   Samples | Location                                         |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------------------------------ |
| -16.4% | -46.00ms | 22.3% → 18.3% | 281.0ms → 235.0ms | 281 → 235 | `/opt/zig/lib/std/zig/tokenizer.zig:665 → 666`   |
| -15.9% | -42.00ms | 21.0% → 17.3% | 264.0ms → 222.0ms | 264 → 222 | `/opt/zig/lib/std/zig/tokenizer.zig:666 → 667`   |
| -31.0% | -31.00ms |   7.9% → 5.4% |  100.0ms → 69.0ms |  100 → 69 | `/opt/zig/lib/std/zig/tokenizer.zig:1029 → 1033` |
| +27.2% | +28.00ms |  8.2% → 10.2% | 103.0ms → 131.0ms | 103 → 131 | `/opt/zig/lib/std/zig/tokenizer.zig:404 → 405`   |
| +48.1% | +13.00ms |   2.1% → 3.1% |   27.0ms → 40.0ms |   27 → 40 | `/opt/zig/lib/std/zig/tokenizer.zig:419 → 420`   |

##### `zig.Parse.addNode` (`/opt/zig/lib/std/zig/Parse.zig:63`)

|  Change |    Delta |             % |          Time | Samples | Location                            |
| ------: | -------: | ------------: | ------------: | ------: | ----------------------------------- |
|     new | +10.00ms |  0.0% → 26.3% |  0ms → 10.0ms |  0 → 10 | `/opt/zig/lib/std/zig/Parse.zig:65` |
| +300.0% |  +6.00ms | 16.7% → 21.1% | 2.0ms → 8.0ms |   2 → 8 | `/opt/zig/lib/std/zig/Parse.zig:64` |
|     new |  +2.00ms |   0.0% → 5.3% |   0ms → 2.0ms |   0 → 2 | `/opt/zig/lib/std/zig/Parse.zig:63` |

##### `mem.findPosLinear__anon_31435` (`/opt/zig/lib/std/mem.zig:1443`)

| Change |    Delta |            % |         Time | Samples | Location                        |
| -----: | -------: | -----------: | -----------: | ------: | ------------------------------- |
|    new | +25.00ms | 0.0% → 96.2% | 0ms → 25.0ms |  0 → 25 | `/opt/zig/lib/std/mem.zig:1447` |
|    new |  +1.00ms |  0.0% → 3.8% |  0ms → 1.0ms |   0 → 1 | `/opt/zig/lib/std/mem.zig:1448` |

##### `zig.Ast.Render.renderSpace` (`/opt/zig/lib/std/zig/Ast/Render.zig:2738`)

|  Change |    Delta |             % |            Time | Samples | Location                                          |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------------------------------- |
| +107.1% | +15.00ms |  8.5% → 15.3% | 14.0ms → 29.0ms | 14 → 29 | `/opt/zig/lib/std/zig/Ast/Render.zig:2875 → 2751` |
|  +40.0% |  +6.00ms |  9.1% → 11.1% | 15.0ms → 21.0ms | 15 → 21 | `/opt/zig/lib/std/zig/Ast/Render.zig:2863 → 2739` |
|  +14.3% |  +3.00ms | 12.8% → 12.7% | 21.0ms → 24.0ms | 21 → 24 | `/opt/zig/lib/std/zig/Ast/Render.zig:2866 → 2742` |
|  -17.6% |  -3.00ms |  10.4% → 7.4% | 17.0ms → 14.0ms | 17 → 14 | `/opt/zig/lib/std/zig/Ast/Render.zig:2868 → 2744` |
| +100.0% |  +2.00ms |   1.2% → 2.1% |   2.0ms → 4.0ms |   2 → 4 | `/opt/zig/lib/std/zig/Ast/Render.zig:2870 → 2746` |

##### `zig.Ast.Render.tokenSliceForRender` (`/opt/zig/lib/std/zig/Ast/Render.zig:3168`)

|  Change |    Delta |             % |              Time |   Samples | Location                                          |
| ------: | -------: | ------------: | ----------------: | --------: | ------------------------------------------------- |
| +800.0% | +24.00ms |  1.5% → 12.6% |    3.0ms → 27.0ms |    3 → 27 | `/opt/zig/lib/std/zig/Ast/Render.zig:3269 → 3169` |
|   +6.4% |  +9.00ms | 72.7% → 69.8% | 141.0ms → 150.0ms | 141 → 150 | `/opt/zig/lib/std/zig/Ast/Render.zig:3268 → 3168` |
|  -39.1% |  -9.00ms |  11.9% → 6.5% |   23.0ms → 14.0ms |   23 → 14 | `/opt/zig/lib/std/zig/Ast/Render.zig:3276 → 3176` |
|  -33.3% |  -2.00ms |   3.1% → 1.9% |     6.0ms → 4.0ms |     6 → 4 | `/opt/zig/lib/std/zig/Ast/Render.zig:3270 → 3170` |

##### `zig.Ast.Render.AutoIndentingStream.applyIndent` (`/opt/zig/lib/std/zig/Ast/Render.zig:3516`)

|  Change |    Delta |             % |           Time | Samples | Location                                          |
| ------: | -------: | ------------: | -------------: | ------: | ------------------------------------------------- |
| +125.0% | +10.00ms | 44.4% → 47.4% | 8.0ms → 18.0ms |  8 → 18 | `/opt/zig/lib/std/zig/Ast/Render.zig:3679 → 3524` |
|     new |  +3.00ms |   0.0% → 7.9% |    0ms → 3.0ms |   0 → 3 | `/opt/zig/lib/std/zig/Ast/Render.zig:3519`        |
|     new |  +3.00ms |   0.0% → 7.9% |    0ms → 3.0ms |   0 → 3 | `/opt/zig/lib/std/zig/Ast/Render.zig:3520`        |
|  +25.0% |  +1.00ms | 22.2% → 13.2% |  4.0ms → 5.0ms |   4 → 5 | `/opt/zig/lib/std/zig/Ast/Render.zig:3673 → 3518` |

##### `zig.Parse.parseTypeExpr` (`/opt/zig/lib/std/zig/Parse.zig:1722`)

|  Change |   Delta |             % |          Time | Samples | Location                                     |
| ------: | ------: | ------------: | ------------: | ------: | -------------------------------------------- |
|     new | +8.00ms |  0.0% → 26.7% |   0ms → 8.0ms |   0 → 8 | `/opt/zig/lib/std/zig/Parse.zig:1976`        |
| +500.0% | +5.00ms |  9.1% → 20.0% | 1.0ms → 6.0ms |   1 → 6 | `/opt/zig/lib/std/zig/Parse.zig:1693 → 1722` |
| +125.0% | +5.00ms | 36.4% → 30.0% | 4.0ms → 9.0ms |   4 → 9 | `/opt/zig/lib/std/zig/Parse.zig:1694 → 1723` |
| removed | -3.00ms |  27.3% → 0.0% |   3.0ms → 0ms |   3 → 0 | `/opt/zig/lib/std/zig/Parse.zig:1957`        |
|  -66.7% | -2.00ms |  27.3% → 3.3% | 3.0ms → 1.0ms |   3 → 1 | `/opt/zig/lib/std/zig/Parse.zig:1807 → 1836` |

##### `zig.Parse.tokenTag` (`/opt/zig/lib/std/zig/Parse.zig:14`)

| Change |    Delta |      % |            Time | Samples | Location                            |
| -----: | -------: | -----: | --------------: | ------: | ----------------------------------- |
| +57.6% | +19.00ms | 100.0% | 33.0ms → 52.0ms | 33 → 52 | `/opt/zig/lib/std/zig/Parse.zig:15` |

##### `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`)

|  Change |    Delta |             % |            Time | Samples | Location                           |
| ------: | -------: | ------------: | --------------: | ------: | ---------------------------------- |
| +200.0% | +12.00ms | 26.1% → 45.0% |  6.0ms → 18.0ms |  6 → 18 | `/opt/zig/lib/std/zig/Ast.zig:155` |
|  -11.8% |  -2.00ms | 73.9% → 37.5% | 17.0ms → 15.0ms | 17 → 15 | `/opt/zig/lib/std/zig/Ast.zig:158` |

##### `zig.Ast.Render.renderExpressionComma` (`/opt/zig/lib/std/zig/Ast/Render.zig:2655`)

|  Change |    Delta |             % |         Time | Samples | Location                                   |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------ |
|     new | +16.00ms |  0.0% → 88.9% | 0ms → 16.0ms |  0 → 16 | `/opt/zig/lib/std/zig/Ast/Render.zig:2662` |
| removed |  -1.00ms | 100.0% → 0.0% |  1.0ms → 0ms |   1 → 0 | `/opt/zig/lib/std/zig/Ast/Render.zig:2788` |

##### `compiler_rt.memcpy.copyFixedLength` (`/opt/zig/lib/compiler_rt/memcpy.zig:149`)

| Change |    Delta |             % |         Time | Samples | Location                                  |
| -----: | -------: | ------------: | -----------: | ------: | ----------------------------------------- |
|    new | +17.00ms | 0.0% → 100.0% | 0ms → 17.0ms |  0 → 17 | `/opt/zig/lib/compiler_rt/memcpy.zig:170` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32303` (`/opt/zig/lib/std/multi_array_list.zig:100`)

|  Change |    Delta |              % |           Time | Samples | Location                                         |
| ------: | -------: | -------------: | -------------: | ------: | ------------------------------------------------ |
|  -98.7% | -76.00ms | 68.1% → 100.0% | 77.0ms → 1.0ms |  77 → 1 | `/opt/zig/lib/std/multi_array_list.zig:85 → 102` |
| removed | -27.00ms |   23.9% → 0.0% |   27.0ms → 0ms |  27 → 0 | `/opt/zig/lib/std/multi_array_list.zig:88`       |
| removed |  -8.00ms |    7.1% → 0.0% |    8.0ms → 0ms |   8 → 0 | `/opt/zig/lib/std/multi_array_list.zig:93`       |
| removed |  -1.00ms |    0.9% → 0.0% |    1.0ms → 0ms |   1 → 0 | `/opt/zig/lib/std/multi_array_list.zig:92`       |

##### `mem.indexOfScalarPos__anon_8996` (`/opt/zig/lib/std/mem.zig:1258`)

|  Change |    Delta |            % |         Time | Samples | Location                        |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------------- |
| removed | -10.00ms | 16.7% → 0.0% | 10.0ms → 0ms |  10 → 0 | `/opt/zig/lib/std/mem.zig:1314` |
| removed |  -9.00ms | 15.0% → 0.0% |  9.0ms → 0ms |   9 → 0 | `/opt/zig/lib/std/mem.zig:1302` |
| removed |  -8.00ms | 13.3% → 0.0% |  8.0ms → 0ms |   8 → 0 | `/opt/zig/lib/std/mem.zig:1301` |
| removed |  -6.00ms | 10.0% → 0.0% |  6.0ms → 0ms |   6 → 0 | `/opt/zig/lib/std/mem.zig:1289` |
| removed |  -2.00ms |  3.3% → 0.0% |  2.0ms → 0ms |   2 → 0 | `/opt/zig/lib/std/mem.zig:1258` |

##### `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` (`/opt/zig/lib/std/static_string_map.zig:198`)

|  Change |    Delta |             % |              Time |   Samples | Location                                     |
| ------: | -------: | ------------: | ----------------: | --------: | -------------------------------------------- |
|  -30.1% | -41.00ms | 47.4% → 41.3% |  136.0ms → 95.0ms |  136 → 95 | `/opt/zig/lib/std/static_string_map.zig:213` |
|  -12.3% | -16.00ms | 45.3% → 49.6% | 130.0ms → 114.0ms | 130 → 114 | `/opt/zig/lib/std/static_string_map.zig:208` |
| +100.0% |  +1.00ms |   0.3% → 0.9% |     1.0ms → 2.0ms |     1 → 2 | `/opt/zig/lib/std/static_string_map.zig:209` |
|     new |  +1.00ms |   0.0% → 0.4% |       0ms → 1.0ms |     0 → 1 | `/opt/zig/lib/std/static_string_map.zig:206` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32262` (`/opt/zig/lib/std/multi_array_list.zig:100`)

|  Change |    Delta |             % |             Time |  Samples | Location                                         |
| ------: | -------: | ------------: | ---------------: | -------: | ------------------------------------------------ |
|  -30.4% | -35.00ms | 95.0% → 96.4% | 115.0ms → 80.0ms | 115 → 80 | `/opt/zig/lib/std/multi_array_list.zig:85 → 102` |
| removed |  -4.00ms |   3.3% → 0.0% |      4.0ms → 0ms |    4 → 0 | `/opt/zig/lib/std/multi_array_list.zig:88`       |
| +200.0% |  +2.00ms |   0.8% → 3.6% |    1.0ms → 3.0ms |    1 → 3 | `/opt/zig/lib/std/multi_array_list.zig:92 → 109` |
| removed |  -1.00ms |   0.8% → 0.0% |      1.0ms → 0ms |    1 → 0 | `/opt/zig/lib/std/multi_array_list.zig:93`       |

##### `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).Slice.items__anon_27682` (`/opt/zig/lib/std/multi_array_list.zig:100`)

|  Change |    Delta |              % |            Time | Samples | Location                                         |
| ------: | -------: | -------------: | --------------: | ------: | ------------------------------------------------ |
| removed | -20.00ms |   26.0% → 0.0% |    20.0ms → 0ms |  20 → 0 | `/opt/zig/lib/std/multi_array_list.zig:88`       |
|  -17.5% | -10.00ms | 74.0% → 100.0% | 57.0ms → 47.0ms | 57 → 47 | `/opt/zig/lib/std/multi_array_list.zig:85 → 102` |

##### `mem.eqlBytes` (`/opt/zig/lib/std/mem.zig:768`)

|  Change |    Delta |             % |            Time | Samples | Location                             |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------------------ |
|  -50.0% | -14.00ms | 39.4% → 32.6% | 28.0ms → 14.0ms | 28 → 14 | `/opt/zig/lib/std/mem.zig:737 → 776` |
|  -31.0% | -13.00ms | 59.2% → 67.4% | 42.0ms → 29.0ms | 42 → 29 | `/opt/zig/lib/std/mem.zig:733 → 772` |
| removed |  -1.00ms |   1.4% → 0.0% |     1.0ms → 0ms |   1 → 0 | `/opt/zig/lib/std/mem.zig:729`       |

##### `mem.indexOfPosLinear__anon_26200` (`/opt/zig/lib/std/mem.zig:1426`)

|  Change |    Delta |            % |         Time | Samples | Location                        |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------------- |
| removed | -20.00ms | 74.1% → 0.0% | 20.0ms → 0ms |  20 → 0 | `/opt/zig/lib/std/mem.zig:1430` |
| removed |  -7.00ms | 25.9% → 0.0% |  7.0ms → 0ms |   7 → 0 | `/opt/zig/lib/std/mem.zig:1431` |

##### `zig.Ast.tokenTag` (`/opt/zig/lib/std/zig/Ast.zig:88`)

| Change |   Delta |             % |            Time | Samples | Location                          |
| -----: | ------: | ------------: | --------------: | ------: | --------------------------------- |
| -16.3% | -8.00ms | 60.5% → 62.1% | 49.0ms → 41.0ms | 49 → 41 | `/opt/zig/lib/std/zig/Ast.zig:89` |

##### `zig.Ast.Render.renderExtraNewlineToken` (`/opt/zig/lib/std/zig/Ast/Render.zig:3080`)

|  Change |    Delta |             % |            Time | Samples | Location                                          |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------------------------------- |
|  -33.3% | -10.00ms | 40.5% → 32.3% | 30.0ms → 20.0ms | 30 → 20 | `/opt/zig/lib/std/zig/Ast/Render.zig:3199 → 3099` |
|  -66.7% | -10.00ms |  20.3% → 8.1% |  15.0ms → 5.0ms |  15 → 5 | `/opt/zig/lib/std/zig/Ast/Render.zig:3201 → 3101` |
| +250.0% | +10.00ms |  5.4% → 22.6% |  4.0ms → 14.0ms |  4 → 14 | `/opt/zig/lib/std/zig/Ast/Render.zig:3202 → 3102` |
| removed |  -6.00ms |   8.1% → 0.0% |     6.0ms → 0ms |   6 → 0 | `/opt/zig/lib/std/zig/Ast/Render.zig:3180`        |
|  -50.0% |  -2.00ms |   5.4% → 3.2% |   4.0ms → 2.0ms |   4 → 2 | `/opt/zig/lib/std/zig/Ast/Render.zig:3181 → 3081` |

##### `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).ensureUnusedCapacity` (`/opt/zig/lib/std/multi_array_list.zig:533`)

| Change |    Delta |      % |           Time | Samples | Location                                          |
| -----: | -------: | -----: | -------------: | ------: | ------------------------------------------------- |
| -75.0% | -12.00ms | 100.0% | 16.0ms → 4.0ms |  16 → 4 | `/opt/zig/lib/std/multi_array_list.zig:483 → 534` |

##### `zig.Ast.Render.renderToken` (`/opt/zig/lib/std/zig/Ast/Render.zig:2720`)

|  Change |   Delta |             % |            Time | Samples | Location                                          |
| ------: | ------: | ------------: | --------------: | ------: | ------------------------------------------------- |
|  -25.7% | -9.00ms | 58.3% → 53.1% | 35.0ms → 26.0ms | 35 → 26 | `/opt/zig/lib/std/zig/Ast/Render.zig:2845 → 2721` |
| +200.0% | +8.00ms |  6.7% → 24.5% |  4.0ms → 12.0ms |  4 → 12 | `/opt/zig/lib/std/zig/Ast/Render.zig:2849 → 2725` |
|  -71.4% | -5.00ms |  11.7% → 4.1% |   7.0ms → 2.0ms |   7 → 2 | `/opt/zig/lib/std/zig/Ast/Render.zig:2847 → 2723` |
| removed | -3.00ms |   5.0% → 0.0% |     3.0ms → 0ms |   3 → 0 | `/opt/zig/lib/std/zig/Ast/Render.zig:2844`        |
|  -18.2% | -2.00ms | 18.3% → 18.4% |  11.0ms → 9.0ms |  11 → 9 | `/opt/zig/lib/std/zig/Ast/Render.zig:2848 → 2724` |

##### `zig.Parse.parsePrimaryTypeExpr` (`/opt/zig/lib/std/zig/Parse.zig:2460`)

|  Change |   Delta |             % |            Time | Samples | Location                                     |
| ------: | ------: | ------------: | --------------: | ------: | -------------------------------------------- |
| removed | -3.00ms |   8.6% → 0.0% |     3.0ms → 0ms |   3 → 0 | `/opt/zig/lib/std/zig/Parse.zig:2445`        |
|  +20.0% | +2.00ms | 28.6% → 48.0% | 10.0ms → 12.0ms | 10 → 12 | `/opt/zig/lib/std/zig/Parse.zig:2446 → 2461` |
| removed | -2.00ms |   5.7% → 0.0% |     2.0ms → 0ms |   2 → 0 | `/opt/zig/lib/std/zig/Parse.zig:2545`        |
|  +50.0% | +1.00ms |  5.7% → 12.0% |   2.0ms → 3.0ms |   2 → 3 | `/opt/zig/lib/std/zig/Parse.zig:2564 → 2579` |
| removed | -1.00ms |   2.9% → 0.0% |     1.0ms → 0ms |   1 → 0 | `/opt/zig/lib/std/zig/Parse.zig:2613`        |

##### `os.linux.errnoFromSyscall` (`/opt/zig/lib/std/os/linux.zig:577`)

|  Change |   Delta |             % |        Time | Samples | Location                            |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------------- |
| removed | -8.00ms | 100.0% → 0.0% | 8.0ms → 0ms |   8 → 0 | `/opt/zig/lib/std/os/linux.zig:579` |

##### `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).Slice.set` (`/opt/zig/lib/std/multi_array_list.zig:113`)

| Change |   Delta |      % |           Time | Samples | Location                                          |
| -----: | ------: | -----: | -------------: | ------: | ------------------------------------------------- |
| -46.7% | -7.00ms | 100.0% | 15.0ms → 8.0ms |  15 → 8 | `/opt/zig/lib/std/multi_array_list.zig:103 → 120` |

##### `mem.indexOfPos__anon_23640` (`/opt/zig/lib/std/mem.zig:1513`)

|  Change |   Delta |            % |        Time | Samples | Location                        |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------------- |
| removed | -4.00ms | 57.1% → 0.0% | 4.0ms → 0ms |   4 → 0 | `/opt/zig/lib/std/mem.zig:1514` |

##### `zig.Ast.tokensOnSameLine` (`/opt/zig/lib/std/zig/Ast.zig:1318`)

| Change |   Delta |             % |          Time | Samples | Location                                   |
| -----: | ------: | ------------: | ------------: | ------: | ------------------------------------------ |
| -60.0% | -3.00ms | 33.3% → 25.0% | 5.0ms → 2.0ms |   5 → 2 | `/opt/zig/lib/std/zig/Ast.zig:1313 → 1318` |
| -66.7% | -2.00ms | 20.0% → 12.5% | 3.0ms → 1.0ms |   3 → 1 | `/opt/zig/lib/std/zig/Ast.zig:1314 → 1319` |
| +33.3% | +1.00ms | 20.0% → 50.0% | 3.0ms → 4.0ms |   3 → 4 | `/opt/zig/lib/std/zig/Ast.zig:1315 → 1320` |

##### `array_hash_map.ArrayHashMapUnmanaged.getIndexAdapted__anon_27752` (`/opt/zig/lib/std/array_hash_map.zig:1053`)

|  Change |   Delta |            % |        Time | Samples | Location                                   |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------------------------ |
| removed | -1.00ms | 16.7% → 0.0% | 1.0ms → 0ms |   1 → 0 | `/opt/zig/lib/std/array_hash_map.zig:1054` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `memset` (`/opt/zig/lib/compiler_rt.zig:677`)

| Change |     Delta |            % |          Time | Samples | Caller                                                                | Location                                 |
| -----: | --------: | -----------: | ------------: | ------: | --------------------------------------------------------------------- | ---------------------------------------- |
|    new | +292.00ms | 0.0% → 80.0% | 0ms → 292.0ms | 0 → 292 | `mem.Allocator.allocBytesWithAlignment__anon_10001`                   | `/opt/zig/lib/std/mem/Allocator.zig:289` |
|    new |  +24.00ms |  0.0% → 6.6% |  0ms → 24.0ms |  0 → 24 | `Io.Writer.splatByte`                                                 | `/opt/zig/lib/std/Io/Writer.zig:812`     |
|    new |  +20.00ms |  0.0% → 5.5% |  0ms → 20.0ms |  0 → 20 | `array_list.Aligned(zig.Ast.Node.Index,null).shrinkRetainingCapacity` | `/opt/zig/lib/std/array_list.zig:1186`   |
|    new |  +13.00ms |  0.0% → 3.6% |  0ms → 13.0ms |  0 → 13 | `Io.Threaded.dirOpenFilePosix`                                        | `/opt/zig/lib/std/Io/Threaded.zig:4789`  |
|    new |   +5.00ms |  0.0% → 1.4% |   0ms → 5.0ms |   0 → 5 | `mem.Allocator.allocBytesWithAlignment__anon_8636`                    | `/opt/zig/lib/std/mem/Allocator.zig:289` |

##### `mem.findScalarPos__anon_6382` (`/opt/zig/lib/std/mem.zig:1241`)

| Change |     Delta |            % |          Time | Samples | Caller                                  | Location                                   |
| -----: | --------: | -----------: | ------------: | ------: | --------------------------------------- | ------------------------------------------ |
|    new | +133.00ms | 0.0% → 97.8% | 0ms → 133.0ms | 0 → 133 | `mem.findScalar__anon_6379`             | `/opt/zig/lib/std/mem.zig:1219`            |
|    new |   +1.00ms |  0.0% → 0.7% |   0ms → 1.0ms |   0 → 1 | `zig.Ast.Render.renderToken`            | `/opt/zig/lib/std/zig/Ast/Render.zig:2720` |
|    new |   +1.00ms |  0.0% → 0.7% |   0ms → 1.0ms |   0 → 1 | `zig.Ast.Render.renderArrayInit`        | `/opt/zig/lib/std/zig/Ast/Render.zig:2110` |
|    new |   +1.00ms |  0.0% → 0.7% |   0ms → 1.0ms |   0 → 1 | `zig.Ast.Render.isOneLineContainerDecl` | `/opt/zig/lib/std/zig/Ast/Render.zig:2316` |

##### `zig.Ast.Render.renderExpression` (`/opt/zig/lib/std/zig/Ast/Render.zig:314`)

|  Change |    Delta |             % |            Time | Samples | Caller                                      | Location                                          |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------------------------- | ------------------------------------------------- |
|  +90.3% | +28.00ms | 23.7% → 28.0% | 31.0ms → 59.0ms | 31 → 59 | `zig.Ast.Render.renderExpression`           | `/opt/zig/lib/std/zig/Ast/Render.zig:314`         |
|  +70.4% | +19.00ms | 20.6% → 21.8% | 27.0ms → 46.0ms | 27 → 46 | `zig.Ast.Render.renderParamList`            | `/opt/zig/lib/std/zig/Ast/Render.zig:2728 → 2600` |
|     new | +10.00ms |   0.0% → 4.7% |    0ms → 10.0ms |  0 → 10 | `zig.Ast.Render.rendersMultiline`           | `/opt/zig/lib/std/zig/Ast/Render.zig:979`         |
| +100.0% |  +8.00ms |   6.1% → 7.6% |  8.0ms → 16.0ms |  8 → 16 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `/opt/zig/lib/std/zig/Ast/Render.zig:1140 → 1253` |
|  +88.9% |  +8.00ms |   6.9% → 8.1% |  9.0ms → 17.0ms |  9 → 17 | `zig.Ast.Render.finishRenderBlock`          | `/opt/zig/lib/std/zig/Ast/Render.zig:1967 → 2023` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_28815` (`/opt/zig/lib/std/multi_array_list.zig:100`)

|  Change |     Delta |             % |          Time | Samples | Caller             | Location                           |
| ------: | --------: | ------------: | ------------: | ------: | ------------------ | ---------------------------------- |
|     new | +132.00ms | 0.0% → 100.0% | 0ms → 132.0ms | 0 → 132 | `zig.Ast.nodeData` | `/opt/zig/lib/std/zig/Ast.zig:104` |
| removed |  -61.00ms | 100.0% → 0.0% |  61.0ms → 0ms |  61 → 0 | `zig.Ast.nodeTag`  | `/opt/zig/lib/std/zig/Ast.zig:96`  |

##### `zig.Ast.lastToken` (`/opt/zig/lib/std/zig/Ast.zig:881`)

|  Change |    Delta |             % |           Time | Samples | Caller                            | Location                                          |
| ------: | -------: | ------------: | -------------: | ------: | --------------------------------- | ------------------------------------------------- |
| +525.0% | +21.00ms | 10.5% → 28.7% | 4.0ms → 25.0ms |  4 → 25 | `zig.Ast.Render.renderExpression` | `/opt/zig/lib/std/zig/Ast/Render.zig:314`         |
| +128.6% |  +9.00ms |         18.4% | 7.0ms → 16.0ms |  7 → 16 | `zig.Ast.Render.renderParamList`  | `/opt/zig/lib/std/zig/Ast/Render.zig:2728 → 2600` |
| +225.0% |  +9.00ms | 10.5% → 14.9% | 4.0ms → 13.0ms |  4 → 13 | `zig.Ast.Render.renderArrayInit`  | `/opt/zig/lib/std/zig/Ast/Render.zig:2067 → 2110` |
|     new |  +7.00ms |   0.0% → 8.0% |    0ms → 7.0ms |   0 → 7 | `zig.Ast.Render.renderStructInit` | `/opt/zig/lib/std/zig/Ast/Render.zig:1995 → 2051` |
| removed |  -4.00ms |  10.5% → 0.0% |    4.0ms → 0ms |   4 → 0 | `zig.Ast.Render.rowSize`          | `/opt/zig/lib/std/zig/Ast/Render.zig:3402`        |

##### `zig.Ast.tokenSlice` (`/opt/zig/lib/std/zig/Ast.zig:276`)

| Change |    Delta |             % |              Time |   Samples | Caller                               | Location                                          |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------------------ | ------------------------------------------------- |
| +43.8% | +14.00ms | 12.8% → 16.0% |   32.0ms → 46.0ms |   32 → 46 | `zig.Ast.Render.renderToken`         | `/opt/zig/lib/std/zig/Ast/Render.zig:2844 → 2720` |
|  +4.0% |  +7.00ms | 69.2% → 62.7% | 173.0ms → 180.0ms | 173 → 180 | `zig.Ast.Render.tokenSliceForRender` | `/opt/zig/lib/std/zig/Ast/Render.zig:3268 → 3168` |
|    new |  +6.00ms |   0.0% → 2.1% |       0ms → 6.0ms |     0 → 6 | `zig.Ast.Render.renderExpression`    | `/opt/zig/lib/std/zig/Ast/Render.zig:314`         |
| +35.7% |  +5.00ms |   5.6% → 6.6% |   14.0ms → 19.0ms |   14 → 19 | `zig.Ast.Render.renderIdentifier`    | `/opt/zig/lib/std/zig/Ast/Render.zig:2926 → 2812` |
|  +6.9% |  +2.00ms | 11.6% → 10.8% |   29.0ms → 31.0ms |   29 → 31 | `zig.Ast.Render.hasComment`          | `/opt/zig/lib/std/zig/Ast/Render.zig:3089 → 2978` |

##### `zig.Ast.nodeMainToken` (`/opt/zig/lib/std/zig/Ast.zig:100`)

|   Change |    Delta |             % |           Time | Samples | Caller                            | Location                                  |
| -------: | -------: | ------------: | -------------: | ------: | --------------------------------- | ----------------------------------------- |
| +1133.3% | +34.00ms | 25.0% → 78.7% | 3.0ms → 37.0ms |  3 → 37 | `zig.Ast.Render.renderExpression` | `/opt/zig/lib/std/zig/Ast/Render.zig:314` |
|  +600.0% |  +6.00ms |  8.3% → 14.9% |  1.0ms → 7.0ms |   1 → 7 | `zig.Ast.lastToken`               | `/opt/zig/lib/std/zig/Ast.zig:874 → 881`  |
|   -60.0% |  -3.00ms |  41.7% → 4.3% |  5.0ms → 2.0ms |   5 → 2 | `zig.Ast.firstToken`              | `/opt/zig/lib/std/zig/Ast.zig:596 → 604`  |
|  removed |  -1.00ms |   8.3% → 0.0% |    1.0ms → 0ms |   1 → 0 | `zig.Ast.callFull`                | `/opt/zig/lib/std/zig/Ast.zig:1993`       |
|  removed |  -1.00ms |   8.3% → 0.0% |    1.0ms → 0ms |   1 → 0 | `zig.Ast.slice`                   | `/opt/zig/lib/std/zig/Ast.zig:1728`       |

##### `compiler_rt.memcpy.copyLessThan16` (`/opt/zig/lib/compiler_rt/memcpy.zig:67`)

| Change |    Delta |             % |         Time | Samples | Caller                               | Location                                 |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------------------ | ---------------------------------------- |
|    new | +31.00ms | 0.0% → 100.0% | 0ms → 31.0ms |  0 → 31 | `compiler_rt.memcpy.copySmallLength` | `/opt/zig/lib/compiler_rt/memcpy.zig:49` |

##### `zig.tokenizer.Token.Tag.lexeme` (`/opt/zig/lib/std/zig/tokenizer.zig:186`)

| Change |    Delta |             % |              Time |   Samples | Caller                               | Location                                          |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------------------ | ------------------------------------------------- |
| +13.6% | +16.00ms | 76.6% → 72.8% | 118.0ms → 134.0ms | 118 → 134 | `zig.Ast.Render.tokenSliceForRender` | `/opt/zig/lib/std/zig/Ast/Render.zig:3268 → 3168` |
| +36.4% | +12.00ms | 21.4% → 24.5% |   33.0ms → 45.0ms |   33 → 45 | `zig.Ast.Render.hasComment`          | `/opt/zig/lib/std/zig/Ast/Render.zig:3089 → 2978` |
|    new |  +3.00ms |   0.0% → 1.6% |       0ms → 3.0ms |     0 → 3 | `zig.Ast.Render.renderExpression`    | `/opt/zig/lib/std/zig/Ast/Render.zig:314`         |
| -50.0% |  -1.00ms |   1.3% → 0.5% |     2.0ms → 1.0ms |     2 → 1 | `zig.Parse.parseExpr`                | `/opt/zig/lib/std/zig/Parse.zig:1532 → 1559`      |

##### `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:396`)

| Change |    Delta |             % |              Time |   Samples | Caller                               | Location                                   |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------------------ | ------------------------------------------ |
| +11.4% | +51.00ms | 35.5% → 38.7% | 447.0ms → 498.0ms | 447 → 498 | `zig.Ast.parse`                      | `/opt/zig/lib/std/zig/Ast.zig:145`         |
|  -3.1% | -25.00ms | 64.5% → 61.1% | 811.0ms → 786.0ms | 811 → 786 | `zig.Ast.tokenSlice`                 | `/opt/zig/lib/std/zig/Ast.zig:265 → 276`   |
|    new |  +1.00ms |   0.0% → 0.1% |       0ms → 1.0ms |     0 → 1 | `start.callMain`                     | `/opt/zig/lib/std/start.zig:696`           |
|    new |  +1.00ms |   0.0% → 0.1% |       0ms → 1.0ms |     0 → 1 | `zig.Ast.Render.tokenSliceForRender` | `/opt/zig/lib/std/zig/Ast/Render.zig:3168` |

##### `zig.Parse.addNode` (`/opt/zig/lib/std/zig/Parse.zig:63`)

|  Change |   Delta |             % |            Time | Samples | Caller                           | Location                                     |
| ------: | ------: | ------------: | --------------: | ------: | -------------------------------- | -------------------------------------------- |
| +600.0% | +6.00ms |  8.3% → 18.4% |   1.0ms → 7.0ms |   1 → 7 | `zig.Parse.parseSuffixOp`        | `/opt/zig/lib/std/zig/Parse.zig:3219 → 3201` |
|     new | +5.00ms |  0.0% → 13.2% |     0ms → 5.0ms |   0 → 5 | `zig.Parse.parsePrefixExpr`      | `/opt/zig/lib/std/zig/Parse.zig:1655 → 1682` |
|  +40.0% | +4.00ms | 83.3% → 36.8% | 10.0ms → 14.0ms | 10 → 14 | `zig.Parse.parsePrimaryTypeExpr` | `/opt/zig/lib/std/zig/Parse.zig:2445 → 2460` |
|     new | +3.00ms |   0.0% → 7.9% |     0ms → 3.0ms |   0 → 3 | `zig.Parse.parseVarDeclProto`    | `/opt/zig/lib/std/zig/Parse.zig:763 → 774`   |
|     new | +3.00ms |   0.0% → 7.9% |     0ms → 3.0ms |   0 → 3 | `zig.Parse.parseTypeExpr`        | `/opt/zig/lib/std/zig/Parse.zig:1722`        |

##### `mem.findPosLinear__anon_31435` (`/opt/zig/lib/std/mem.zig:1443`)

| Change |    Delta |             % |         Time | Samples | Caller                    | Location                        |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------- | ------------------------------- |
|    new | +26.00ms | 0.0% → 100.0% | 0ms → 26.0ms |  0 → 26 | `mem.findPos__anon_31424` | `/opt/zig/lib/std/mem.zig:1536` |

##### `zig.Ast.Render.renderSpace` (`/opt/zig/lib/std/zig/Ast/Render.zig:2738`)

|  Change |    Delta |             % |              Time |   Samples | Caller                                | Location                                          |
| ------: | -------: | ------------: | ----------------: | --------: | ------------------------------------- | ------------------------------------------------- |
|  +11.6% | +16.00ms | 84.1% → 81.5% | 138.0ms → 154.0ms | 138 → 154 | `zig.Ast.Render.renderToken`          | `/opt/zig/lib/std/zig/Ast/Render.zig:2844 → 2720` |
| +100.0% | +15.00ms |  9.1% → 15.9% |   15.0ms → 30.0ms |   15 → 30 | `zig.Ast.Render.renderExpression`     | `/opt/zig/lib/std/zig/Ast/Render.zig:314`         |
|  -66.7% |  -2.00ms |   1.8% → 0.5% |     3.0ms → 1.0ms |     3 → 1 | `zig.Ast.Render.renderContainerField` | `/opt/zig/lib/std/zig/Ast/Render.zig:1473 → 1577` |
|  -50.0% |  -2.00ms |   2.4% → 1.1% |     4.0ms → 2.0ms |     4 → 2 | `zig.Ast.Render.renderArrayInit`      | `/opt/zig/lib/std/zig/Ast/Render.zig:2067 → 2110` |
| removed |  -1.00ms |   0.6% → 0.0% |       1.0ms → 0ms |     1 → 0 | `zig.Ast.Render.renderIdentifier`     | `/opt/zig/lib/std/zig/Ast/Render.zig:2926`        |

##### `zig.Ast.Render.tokenSliceForRender` (`/opt/zig/lib/std/zig/Ast/Render.zig:3168`)

| Change |    Delta |             % |              Time |   Samples | Caller                             | Location                                          |
| -----: | -------: | ------------: | ----------------: | --------: | ---------------------------------- | ------------------------------------------------- |
| +31.7% | +13.00ms | 21.1% → 25.1% |   41.0ms → 54.0ms |   41 → 54 | `zig.Ast.Render.renderIdentifier`  | `/opt/zig/lib/std/zig/Ast/Render.zig:2926 → 2812` |
| +40.9% |  +9.00ms | 11.3% → 14.4% |   22.0ms → 31.0ms |   22 → 31 | `zig.Ast.Render.renderExpression`  | `/opt/zig/lib/std/zig/Ast/Render.zig:314`         |
|  +6.5% |  +7.00ms | 55.2% → 53.0% | 107.0ms → 114.0ms | 107 → 114 | `zig.Ast.Render.renderToken`       | `/opt/zig/lib/std/zig/Ast/Render.zig:2844 → 2720` |
|    new |  +5.00ms |   0.0% → 2.3% |       0ms → 5.0ms |     0 → 5 | `zig.Ast.Render.renderArrayInit`   | `/opt/zig/lib/std/zig/Ast/Render.zig:2110`        |
| -80.0% |  -4.00ms |   2.6% → 0.5% |     5.0ms → 1.0ms |     5 → 1 | `zig.Ast.Render.finishRenderBlock` | `/opt/zig/lib/std/zig/Ast/Render.zig:1967 → 2023` |

##### `zig.Ast.Render.AutoIndentingStream.applyIndent` (`/opt/zig/lib/std/zig/Ast/Render.zig:3516`)

|  Change |    Delta |             % |            Time | Samples | Caller                                                 | Location                                          |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------------------------------------ | ------------------------------------------------- |
|  +93.8% | +15.00ms | 88.9% → 81.6% | 16.0ms → 31.0ms | 16 → 31 | `zig.Ast.Render.AutoIndentingStream.writeAll`          | `/opt/zig/lib/std/zig/Ast/Render.zig:3496 → 3353` |
| +200.0% |  +4.00ms | 11.1% → 15.8% |   2.0ms → 6.0ms |   2 → 6 | `zig.Ast.Render.AutoIndentingStream.writeByte`         | `/opt/zig/lib/std/zig/Ast/Render.zig:3511 → 3368` |
|     new |  +1.00ms |   0.0% → 2.6% |     0ms → 1.0ms |   0 → 1 | `zig.Ast.Render.AutoIndentingStream.print__anon_31688` | `/opt/zig/lib/std/zig/Ast/Render.zig:3362`        |

##### `zig.Parse.parseTypeExpr` (`/opt/zig/lib/std/zig/Parse.zig:1722`)

|  Change |    Delta |             % |           Time | Samples | Caller                           | Location                                     |
| ------: | -------: | ------------: | -------------: | ------: | -------------------------------- | -------------------------------------------- |
| +150.0% | +12.00ms | 72.7% → 66.7% | 8.0ms → 20.0ms |  8 → 20 | `zig.Parse.parseCurlySuffixExpr` | `/opt/zig/lib/std/zig/Parse.zig:2239 → 2254` |
| +200.0% |  +6.00ms | 27.3% → 30.0% |  3.0ms → 9.0ms |   3 → 9 | `zig.Parse.expectTypeExpr`       | `/opt/zig/lib/std/zig/Parse.zig:1961 → 1980` |
|     new |  +1.00ms |   0.0% → 3.3% |    0ms → 1.0ms |   0 → 1 | `zig.Parse.parseFnProto`         | `/opt/zig/lib/std/zig/Parse.zig:669 → 680`   |

##### `zig.Parse.tokenTag` (`/opt/zig/lib/std/zig/Parse.zig:14`)

|  Change |    Delta |             % |            Time | Samples | Caller                       | Location                                     |
| ------: | -------: | ------------: | --------------: | ------: | ---------------------------- | -------------------------------------------- |
|  +76.5% | +13.00ms | 51.5% → 57.7% | 17.0ms → 30.0ms | 17 → 30 | `zig.Parse.eatToken`         | `/opt/zig/lib/std/zig/Parse.zig:3692 → 3676` |
|     new |  +4.00ms |   0.0% → 7.7% |     0ms → 4.0ms |   0 → 4 | `zig.Parse.parsePrefixExpr`  | `/opt/zig/lib/std/zig/Parse.zig:1655 → 1682` |
|     new |  +4.00ms |   0.0% → 7.7% |     0ms → 4.0ms |   0 → 4 | `zig.Parse.parseTypeExpr`    | `/opt/zig/lib/std/zig/Parse.zig:1693 → 1722` |
| removed |  -2.00ms |   6.1% → 0.0% |     2.0ms → 0ms |   2 → 0 | `zig.Parse.parsePrimaryExpr` | `/opt/zig/lib/std/zig/Parse.zig:1977`        |
| +200.0% |  +2.00ms |   3.0% → 5.8% |   1.0ms → 3.0ms |   1 → 3 | `zig.Parse.parseBlock`       | `/opt/zig/lib/std/zig/Parse.zig:2079 → 2094` |

##### `preadv` (`<unknown>`)

| Change |    Delta |             % |         Time | Samples | Caller                                | Location                                |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------------------- | --------------------------------------- |
|    new | +19.00ms | 0.0% → 100.0% | 0ms → 19.0ms |  0 → 19 | `Io.Threaded.fileReadPositionalPosix` | `/opt/zig/lib/std/Io/Threaded.zig:9766` |

##### `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`)

| Change |    Delta |      % |            Time | Samples | Caller         | Location                |
| -----: | -------: | -----: | --------------: | ------: | -------------- | ----------------------- |
| +73.9% | +17.00ms | 100.0% | 23.0ms → 40.0ms | 23 → 40 | `profile.main` | `./profile.zig:12 → 11` |

##### `zig.Ast.Render.renderExpressionComma` (`/opt/zig/lib/std/zig/Ast/Render.zig:2655`)

|   Change |    Delta |      % |           Time | Samples | Caller                                | Location                                          |
| -------: | -------: | -----: | -------------: | ------: | ------------------------------------- | ------------------------------------------------- |
| +1700.0% | +17.00ms | 100.0% | 1.0ms → 18.0ms |  1 → 18 | `zig.Ast.Render.renderContainerField` | `/opt/zig/lib/std/zig/Ast/Render.zig:1473 → 1577` |

##### `compiler_rt.memcpy.copyFixedLength` (`/opt/zig/lib/compiler_rt/memcpy.zig:149`)

| Change |    Delta |             % |         Time | Samples | Caller                          | Location                                  |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------------- | ----------------------------------------- |
|    new | +17.00ms | 0.0% → 100.0% | 0ms → 17.0ms |  0 → 17 | `compiler_rt.memcpy.copyRange4` | `/opt/zig/lib/compiler_rt/memcpy.zig:176` |

##### `statx` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller         | Location                           |
| -----: | ------: | ------------: | ----------: | ------: | -------------- | ---------------------------------- |
|    new | +7.00ms | 0.0% → 100.0% | 0ms → 7.0ms |   0 → 7 | `Io.File.stat` | `/opt/zig/lib/std/Io/File.zig:141` |

##### `close` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                | Location                                 |
| ------: | ------: | ------------: | ----------: | ------: | --------------------- | ---------------------------------------- |
|     new | +9.00ms | 0.0% → 100.0% | 0ms → 9.0ms |   0 → 9 | `Io.Threaded.closeFd` | `/opt/zig/lib/std/Io/Threaded.zig:18890` |
| removed | -4.00ms | 100.0% → 0.0% | 4.0ms → 0ms |   4 → 0 | `posix.close`         | `/opt/zig/lib/std/posix.zig:285`         |

##### `openat` (`<unknown>`)

|  Change |    Delta |            % |         Time | Samples | Caller                         | Location                                |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------------ | --------------------------------------- |
| removed | -21.00ms | 91.3% → 0.0% | 21.0ms → 0ms |  21 → 0 | `posix.openatZ`                | `/opt/zig/lib/std/posix.zig:1835`       |
|     new | +21.00ms | 0.0% → 77.8% | 0ms → 21.0ms |  0 → 21 | `Io.Threaded.dirOpenFilePosix` | `/opt/zig/lib/std/Io/Threaded.zig:4789` |
|     new |  +6.00ms | 0.0% → 22.2% |  0ms → 6.0ms |   0 → 6 | `Io.Threaded.dirOpenDirPosix`  | `/opt/zig/lib/std/Io/Threaded.zig:5237` |
| removed |  -2.00ms |  8.7% → 0.0% |  2.0ms → 0ms |   2 → 0 | `fs.Dir.openFileZ`             | `/opt/zig/lib/std/fs/Dir.zig:855`       |

##### `__libc_malloc` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller                        | Location                        |
| -----: | ------: | ------------: | ----------: | ------: | ----------------------------- | ------------------------------- |
|    new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `heap.c_allocator_impl.alloc` | `/opt/zig/lib/std/heap.zig:208` |

##### `cfree` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller                  | Location                                       |
| -----: | ------: | -----: | ------------: | ------: | ----------------------- | ---------------------------------------------- |
| +50.0% | +1.00ms | 100.0% | 2.0ms → 3.0ms |   2 → 3 | `mem.Allocator.rawFree` | `/opt/zig/lib/std/mem/Allocator.zig:146 → 159` |

##### `__libc_realloc` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller                   | Location                                 |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------ | ---------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `mem.Allocator.rawRemap` | `/opt/zig/lib/std/mem/Allocator.zig:153` |

##### `mmap` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller        | Location    |
| -----: | ------: | ------------: | ----------: | ------: | ------------- | ----------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `(anonymous)` | `<unknown>` |

##### `__sbrk` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller               | Location    |
| -----: | ------: | ------------: | ----------: | ------: | -------------------- | ----------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `__default_morecore` | `<unknown>` |

##### `(anonymous)` (`<unknown>`)

|  Change |     Delta |            % |          Time | Samples | Caller                                                                                 | Location                                    |
| ------: | --------: | -----------: | ------------: | ------: | -------------------------------------------------------------------------------------- | ------------------------------------------- |
| removed | -149.00ms | 44.3% → 0.0% | 149.0ms → 0ms | 149 → 0 | `array_list.Aligned(u8,null).ensureUnusedCapacity`                                     | `/opt/zig/lib/std/array_list.zig:1241`      |
| removed |  -81.00ms | 24.1% → 0.0% |  81.0ms → 0ms |  81 → 0 | `zig.Ast.Render.AutoIndentingStream.writeAll`                                          | `/opt/zig/lib/std/zig/Ast/Render.zig:3496`  |
| removed |  -29.00ms |  8.6% → 0.0% |  29.0ms → 0ms |  29 → 0 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).ensureUnusedCapacity` | `/opt/zig/lib/std/multi_array_list.zig:482` |
|     new |  +17.00ms | 0.0% → 63.0% |  0ms → 17.0ms |  0 → 17 | `__libc_realloc`                                                                       | `<unknown>`                                 |
| removed |  -16.00ms |  4.8% → 0.0% |  16.0ms → 0ms |  16 → 0 | `zig.Ast.parse`                                                                        | `/opt/zig/lib/std/zig/Ast.zig:145`          |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32303` (`/opt/zig/lib/std/multi_array_list.zig:100`)

|  Change |     Delta |             % |          Time | Samples | Caller                  | Location                           |
| ------: | --------: | ------------: | ------------: | ------: | ----------------------- | ---------------------------------- |
| removed | -113.00ms | 100.0% → 0.0% | 113.0ms → 0ms | 113 → 0 | `zig.Ast.nodeMainToken` | `/opt/zig/lib/std/zig/Ast.zig:100` |
|     new |   +1.00ms | 0.0% → 100.0% |   0ms → 1.0ms |   0 → 1 | `zig.Ast.nodeTag`       | `/opt/zig/lib/std/zig/Ast.zig:96`  |

##### `mem.indexOfScalarPos__anon_8996` (`/opt/zig/lib/std/mem.zig:1258`)

|  Change |    Delta |            % |         Time | Samples | Caller                            | Location                                   |
| ------: | -------: | -----------: | -----------: | ------: | --------------------------------- | ------------------------------------------ |
| removed | -56.00ms | 93.3% → 0.0% | 56.0ms → 0ms |  56 → 0 | `mem.indexOfScalar__anon_5905`    | `/opt/zig/lib/std/mem.zig:1244`            |
| removed |  -2.00ms |  3.3% → 0.0% |  2.0ms → 0ms |   2 → 0 | `mem.indexOfPos__anon_23640`      | `/opt/zig/lib/std/mem.zig:1513`            |
| removed |  -1.00ms |  1.7% → 0.0% |  1.0ms → 0ms |   1 → 0 | `zig.Ast.Render.renderExpression` | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |
| removed |  -1.00ms |  1.7% → 0.0% |  1.0ms → 0ms |   1 → 0 | `zig.Ast.Render.renderSpace`      | `/opt/zig/lib/std/zig/Ast/Render.zig:2862` |

##### `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` (`/opt/zig/lib/std/static_string_map.zig:198`)

| Change |    Delta |      % |              Time |   Samples | Caller                                                                                          | Location                                     |
| -----: | -------: | -----: | ----------------: | --------: | ----------------------------------------------------------------------------------------------- | -------------------------------------------- |
| -19.9% | -57.00ms | 100.0% | 287.0ms → 230.0ms | 287 → 230 | `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).get` | `/opt/zig/lib/std/static_string_map.zig:191` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32262` (`/opt/zig/lib/std/multi_array_list.zig:100`)

|  Change |     Delta |             % |          Time | Samples | Caller                                                           | Location                                    |
| ------: | --------: | ------------: | ------------: | ------: | ---------------------------------------------------------------- | ------------------------------------------- |
| removed | -120.00ms |  99.2% → 0.0% | 120.0ms → 0ms | 120 → 0 | `zig.Ast.nodeData`                                               | `/opt/zig/lib/std/zig/Ast.zig:104`          |
|     new |  +83.00ms | 0.0% → 100.0% |  0ms → 83.0ms |  0 → 83 | `zig.Ast.nodeMainToken`                                          | `/opt/zig/lib/std/zig/Ast.zig:100`          |
| removed |   -1.00ms |   0.8% → 0.0% |   1.0ms → 0ms |   1 → 0 | `multi_array_list.MultiArrayList(zig.Ast.Node).items__anon_3832` | `/opt/zig/lib/std/multi_array_list.zig:236` |

##### `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).Slice.items__anon_27682` (`/opt/zig/lib/std/multi_array_list.zig:100`)

| Change |    Delta |             % |            Time | Samples | Caller                          | Location                            |
| -----: | -------: | ------------: | --------------: | ------: | ------------------------------- | ----------------------------------- |
| -86.1% | -31.00ms | 46.8% → 10.6% |  36.0ms → 5.0ms |  36 → 5 | `zig.Parse.tokenTag`            | `/opt/zig/lib/std/zig/Parse.zig:14` |
|  +5.9% |  +2.00ms | 44.2% → 76.6% | 34.0ms → 36.0ms | 34 → 36 | `zig.Ast.tokenTag`              | `/opt/zig/lib/std/zig/Ast.zig:88`   |
| -14.3% |  -1.00ms |  9.1% → 12.8% |   7.0ms → 6.0ms |   7 → 6 | `zig.Ast.isTokenPrecededByTags` | `/opt/zig/lib/std/zig/Ast.zig:108`  |

##### `mem.eqlBytes` (`/opt/zig/lib/std/mem.zig:768`)

|  Change |    Delta |             % |         Time | Samples | Caller                       | Location                                   |
| ------: | -------: | ------------: | -----------: | ------: | ---------------------------- | ------------------------------------------ |
| removed | -61.00ms |  85.9% → 0.0% | 61.0ms → 0ms |  61 → 0 | `mem.eql__anon_3429`         | `/opt/zig/lib/std/mem.zig:693`             |
|     new | +43.00ms | 0.0% → 100.0% | 0ms → 43.0ms |  0 → 43 | `mem.eql__anon_12872`        | `/opt/zig/lib/std/mem.zig:732`             |
| removed |  -9.00ms |  12.7% → 0.0% |  9.0ms → 0ms |   9 → 0 | `mem.eql__anon_15242`        | `/opt/zig/lib/std/mem.zig:693`             |
| removed |  -1.00ms |   1.4% → 0.0% |  1.0ms → 0ms |   1 → 0 | `zig.Ast.Render.renderSpace` | `/opt/zig/lib/std/zig/Ast/Render.zig:2862` |

##### `mem.indexOfPosLinear__anon_26200` (`/opt/zig/lib/std/mem.zig:1426`)

|  Change |    Delta |             % |         Time | Samples | Caller                       | Location                        |
| ------: | -------: | ------------: | -----------: | ------: | ---------------------------- | ------------------------------- |
| removed | -27.00ms | 100.0% → 0.0% | 27.0ms → 0ms |  27 → 0 | `mem.indexOfPos__anon_23640` | `/opt/zig/lib/std/mem.zig:1513` |

##### `__read` (`<unknown>`)

|  Change |    Delta |             % |         Time | Samples | Caller       | Location                         |
| ------: | -------: | ------------: | -----------: | ------: | ------------ | -------------------------------- |
| removed | -26.00ms | 100.0% → 0.0% | 26.0ms → 0ms |  26 → 0 | `posix.read` | `/opt/zig/lib/std/posix.zig:844` |

##### `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).ensureTotalCapacity` (`/opt/zig/lib/std/math.zig:458`)

|  Change |    Delta |             % |         Time | Samples | Caller                                                                                 | Location                                    |
| ------: | -------: | ------------: | -----------: | ------: | -------------------------------------------------------------------------------------- | ------------------------------------------- |
| removed | -21.00ms | 100.0% → 0.0% | 21.0ms → 0ms |  21 → 0 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).ensureUnusedCapacity` | `/opt/zig/lib/std/multi_array_list.zig:482` |

##### `zig.Parse.parseTypeExpr` (`/opt/zig/lib/std/multi_array_list.zig:1693`)

|  Change |    Delta |            % |         Time | Samples | Caller                           | Location                              |
| ------: | -------: | -----------: | -----------: | ------: | -------------------------------- | ------------------------------------- |
| removed | -16.00ms | 84.2% → 0.0% | 16.0ms → 0ms |  16 → 0 | `zig.Parse.parseCurlySuffixExpr` | `/opt/zig/lib/std/zig/Parse.zig:2239` |
| removed |  -1.00ms |  5.3% → 0.0% |  1.0ms → 0ms |   1 → 0 | `zig.Parse.parsePrimaryExpr`     | `/opt/zig/lib/std/zig/Parse.zig:1977` |
| removed |  -1.00ms |  5.3% → 0.0% |  1.0ms → 0ms |   1 → 0 | `zig.Parse.expectTypeExpr`       | `/opt/zig/lib/std/zig/Parse.zig:1961` |
| removed |  -1.00ms |  5.3% → 0.0% |  1.0ms → 0ms |   1 → 0 | `zig.Parse.parseFnProto`         | `/opt/zig/lib/std/zig/Parse.zig:669`  |

##### `zig.Ast.tokenTag` (`/opt/zig/lib/std/zig/Ast.zig:88`)

|  Change |   Delta |             % |            Time | Samples | Caller                               | Location                                          |
| ------: | ------: | ------------: | --------------: | ------: | ------------------------------------ | ------------------------------------------------- |
|  -22.9% | -8.00ms | 43.2% → 40.9% | 35.0ms → 27.0ms | 35 → 27 | `zig.Ast.tokenSlice`                 | `/opt/zig/lib/std/zig/Ast.zig:265 → 276`          |
|  -50.0% | -4.00ms |   9.9% → 6.1% |   8.0ms → 4.0ms |   8 → 4 | `zig.Ast.Render.renderIdentifier`    | `/opt/zig/lib/std/zig/Ast/Render.zig:2926 → 2812` |
| removed | -4.00ms |   4.9% → 0.0% |     4.0ms → 0ms |   4 → 0 | `zig.Ast.fullPtrTypeComponents`      | `/opt/zig/lib/std/zig/Ast.zig:2121`               |
|  -11.8% | -2.00ms | 21.0% → 22.7% | 17.0ms → 15.0ms | 17 → 15 | `zig.Ast.Render.tokenSliceForRender` | `/opt/zig/lib/std/zig/Ast/Render.zig:3268 → 3168` |
|     new | +2.00ms |   0.0% → 3.0% |     0ms → 2.0ms |   0 → 2 | `zig.Ast.Render.renderArrayInit`     | `/opt/zig/lib/std/zig/Ast/Render.zig:2110`        |

##### `zig.Ast.Render.renderExtraNewlineToken` (`/opt/zig/lib/std/zig/Ast/Render.zig:3080`)

|  Change |    Delta |             % |            Time | Samples | Caller                              | Location                                          |
| ------: | -------: | ------------: | --------------: | ------: | ----------------------------------- | ------------------------------------------------- |
|  -20.3% | -12.00ms | 79.7% → 75.8% | 59.0ms → 47.0ms | 59 → 47 | `zig.Ast.Render.renderExtraNewline` | `/opt/zig/lib/std/zig/Ast/Render.zig:3175 → 3075` |
| +300.0% |  +3.00ms |   1.4% → 6.5% |   1.0ms → 4.0ms |   1 → 4 | `zig.Ast.Render.renderDocComments`  | `/opt/zig/lib/std/zig/Ast/Render.zig:3208 → 3108` |
| removed |  -3.00ms |   4.1% → 0.0% |     3.0ms → 0ms |   3 → 0 | `zig.Ast.Render.renderExpression`   | `/opt/zig/lib/std/zig/Ast/Render.zig:314`         |
|  +22.2% |  +2.00ms | 12.2% → 17.7% |  9.0ms → 11.0ms |  9 → 11 | `zig.Ast.Render.renderStructInit`   | `/opt/zig/lib/std/zig/Ast/Render.zig:1995 → 2051` |
| removed |  -2.00ms |   2.7% → 0.0% |     2.0ms → 0ms |   2 → 0 | `zig.Ast.Render.renderAsm`          | `/opt/zig/lib/std/zig/Ast/Render.zig:2594`        |

##### `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).ensureUnusedCapacity` (`/opt/zig/lib/std/multi_array_list.zig:533`)

| Change |    Delta |      % |           Time | Samples | Caller                                                                   | Location                                          |
| -----: | -------: | -----: | -------------: | ------: | ------------------------------------------------------------------------ | ------------------------------------------------- |
| -75.0% | -12.00ms | 100.0% | 16.0ms → 4.0ms |  16 → 4 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).append` | `/opt/zig/lib/std/multi_array_list.zig:252 → 273` |

##### `zig.Ast.Render.renderToken` (`/opt/zig/lib/std/zig/Ast/Render.zig:2720`)

|  Change |   Delta |            % |          Time | Samples | Caller                                      | Location                                          |
| ------: | ------: | -----------: | ------------: | ------: | ------------------------------------------- | ------------------------------------------------- |
| +350.0% | +7.00ms | 3.3% → 18.4% | 2.0ms → 9.0ms |   2 → 9 | `zig.Ast.Render.renderSpace`                | `/opt/zig/lib/std/zig/Ast/Render.zig:2862 → 2738` |
|  -75.0% | -6.00ms | 13.3% → 4.1% | 8.0ms → 2.0ms |   8 → 2 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `/opt/zig/lib/std/zig/Ast/Render.zig:1140 → 1253` |
| removed | -5.00ms |  8.3% → 0.0% |   5.0ms → 0ms |   5 → 0 | `zig.Ast.Render.renderFnProto`              | `/opt/zig/lib/std/zig/Ast/Render.zig:1660 → 1766` |
|  -50.0% | -4.00ms | 13.3% → 8.2% | 8.0ms → 4.0ms |   8 → 4 | `zig.Ast.Render.renderParamList`            | `/opt/zig/lib/std/zig/Ast/Render.zig:2728 → 2600` |
| removed | -3.00ms |  5.0% → 0.0% |   3.0ms → 0ms |   3 → 0 | `zig.Ast.Render.renderSlice`                | `/opt/zig/lib/std/zig/Ast/Render.zig:1043 → 1155` |

##### `zig.Parse.parsePrimaryTypeExpr` (`/opt/zig/lib/std/zig/Parse.zig:2460`)

| Change |    Delta |      % |            Time | Samples | Caller                      | Location                                     |
| -----: | -------: | -----: | --------------: | ------: | --------------------------- | -------------------------------------------- |
| -28.6% | -10.00ms | 100.0% | 35.0ms → 25.0ms | 35 → 25 | `zig.Parse.parseSuffixExpr` | `/opt/zig/lib/std/zig/Parse.zig:2355 → 2370` |

##### `os.linux.errnoFromSyscall` (`/opt/zig/lib/std/os/linux.zig:577`)

|  Change |   Delta |            % |        Time | Samples | Caller                                   | Location                           |
| ------: | ------: | -----------: | ----------: | ------: | ---------------------------------------- | ---------------------------------- |
| removed | -4.00ms | 50.0% → 0.0% | 4.0ms → 0ms |   4 → 0 | `fs.File.stat`                           | `/opt/zig/lib/std/fs/File.zig:512` |
| removed | -4.00ms | 50.0% → 0.0% | 4.0ms → 0ms |   4 → 0 | `fs.Dir.Iterator__struct_2193.nextLinux` | `/opt/zig/lib/std/fs/Dir.zig:373`  |

##### `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).Slice.set` (`/opt/zig/lib/std/multi_array_list.zig:113`)

| Change |   Delta |      % |           Time | Samples | Caller                                                                | Location                                          |
| -----: | ------: | -----: | -------------: | ------: | --------------------------------------------------------------------- | ------------------------------------------------- |
| -46.7% | -7.00ms | 100.0% | 15.0ms → 8.0ms |  15 → 8 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).set` | `/opt/zig/lib/std/multi_array_list.zig:241 → 260` |

##### `mem.indexOfPos__anon_23640` (`/opt/zig/lib/std/mem.zig:1513`)

|  Change |   Delta |             % |        Time | Samples | Caller                    | Location                        |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------- | ------------------------------- |
| removed | -7.00ms | 100.0% → 0.0% | 7.0ms → 0ms |   7 → 0 | `mem.indexOf__anon_18425` | `/opt/zig/lib/std/mem.zig:1407` |

##### `zig.Ast.tokensOnSameLine` (`/opt/zig/lib/std/zig/Ast.zig:1318`)

|  Change |   Delta |             % |          Time | Samples | Caller                                      | Location                                          |
| ------: | ------: | ------------: | ------------: | ------: | ------------------------------------------- | ------------------------------------------------- |
| removed | -7.00ms |  46.7% → 0.0% |   7.0ms → 0ms |   7 → 0 | `zig.Ast.Render.rowSize`                    | `/opt/zig/lib/std/zig/Ast/Render.zig:3402`        |
|  +66.7% | +2.00ms | 20.0% → 62.5% | 3.0ms → 5.0ms |   3 → 5 | `zig.Ast.Render.renderExpression`           | `/opt/zig/lib/std/zig/Ast/Render.zig:314`         |
|  -33.3% | -1.00ms | 20.0% → 25.0% | 3.0ms → 2.0ms |   3 → 2 | `zig.Ast.Render.renderArrayInit`            | `/opt/zig/lib/std/zig/Ast/Render.zig:2067 → 2110` |
|  -50.0% | -1.00ms | 13.3% → 12.5% | 2.0ms → 1.0ms |   2 → 1 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `/opt/zig/lib/std/zig/Ast/Render.zig:1140 → 1253` |

##### `zig.Ast.Render.renderExpression` (`/opt/zig/lib/std/zig/Ast.zig:314`)

|  Change |   Delta |              % |          Time | Samples | Caller                                      | Location                                          |
| ------: | ------: | -------------: | ------------: | ------: | ------------------------------------------- | ------------------------------------------------- |
|  -66.7% | -2.00ms | 37.5% → 100.0% | 3.0ms → 1.0ms |   3 → 1 | `zig.Ast.Render.renderParamList`            | `/opt/zig/lib/std/zig/Ast/Render.zig:2728 → 2600` |
| removed | -2.00ms |   25.0% → 0.0% |   2.0ms → 0ms |   2 → 0 | `zig.Ast.Render.finishRenderBlock`          | `/opt/zig/lib/std/zig/Ast/Render.zig:1967`        |
| removed | -1.00ms |   12.5% → 0.0% |   1.0ms → 0ms |   1 → 0 | `zig.Ast.Render.renderExpressionFixup`      | `/opt/zig/lib/std/zig/Ast/Render.zig:924`         |
| removed | -1.00ms |   12.5% → 0.0% |   1.0ms → 0ms |   1 → 0 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `/opt/zig/lib/std/zig/Ast/Render.zig:1140`        |
| removed | -1.00ms |   12.5% → 0.0% |   1.0ms → 0ms |   1 → 0 | `zig.Ast.Render.renderExpression`           | `/opt/zig/lib/std/zig/Ast/Render.zig:314`         |

##### `array_hash_map.ArrayHashMapUnmanaged.getIndexAdapted__anon_27752` (`/opt/zig/lib/std/array_hash_map.zig:1053`)

|  Change |   Delta |             % |        Time | Samples | Caller                                                        | Location                                   |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------------------------------- | ------------------------------------------ |
| removed | -6.00ms | 100.0% → 0.0% | 6.0ms → 0ms |   6 → 0 | `array_hash_map.ArrayHashMapUnmanaged.getAdapted__anon_27183` | `/opt/zig/lib/std/array_hash_map.zig:1088` |

##### `posix_memalign` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                   | Location                                 |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------ | ---------------------------------------- |
| removed | -4.00ms | 100.0% → 0.0% | 4.0ms → 0ms |   4 → 0 | `mem.Allocator.rawAlloc` | `/opt/zig/lib/std/mem/Allocator.zig:128` |

##### `brk` (`<unknown>`)

| Change |   Delta |      % |            Time | Samples | Caller               | Location    |
| -----: | ------: | -----: | --------------: | ------: | -------------------- | ----------- |
|  -6.7% | -1.00ms | 100.0% | 15.0ms → 14.0ms | 15 → 14 | `__default_morecore` | `<unknown>` |

### Total time

#### Regressions

Functions with the largest increase in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|   Change |     Delta |              % |             Time |       Samples | Function                                             | Location                                          |
| -------: | --------: | -------------: | ---------------: | ------------: | ---------------------------------------------------- | ------------------------------------------------- |
| +9019.4% |   +2.796s |   0.6% → 48.0% |   31.0ms → 2.82s |    31 → 2,827 | `zig.Ast.Render.renderBlock`                         | `/opt/zig/lib/std/zig/Ast/Render.zig:1942 → 1998` |
|      new | +768.00ms |   0.0% → 13.0% |    0ms → 768.0ms |       0 → 768 | `zig.Ast.parseTokens`                                | `/opt/zig/lib/std/zig/Ast.zig:168`                |
|   +11.6% | +611.00ms | 99.8% → 100.0% |    5.27s → 5.88s | 5,276 → 5,887 | `profile.main`                                       | `./profile.zig:12 → 11`                           |
|   +11.4% | +601.00ms |         100.0% |    5.28s → 5.88s | 5,287 → 5,888 | `start.callMain`                                     | `/opt/zig/lib/std/start.zig:613 → 696`            |
|   +11.4% | +601.00ms |         100.0% |    5.28s → 5.88s | 5,287 → 5,888 | `start.callMainWithArgs`                             | `/opt/zig/lib/std/start.zig:580 → 629`            |
|   +11.4% | +601.00ms |         100.0% |    5.28s → 5.88s | 5,287 → 5,888 | `main`                                               | `/opt/zig/lib/std/start.zig:590 → 641`            |
|   +11.4% | +601.00ms |         100.0% |    5.28s → 5.88s | 5,287 → 5,888 | `(anonymous)`                                        | `<unknown>`                                       |
|   +11.4% | +601.00ms |         100.0% |    5.28s → 5.88s | 5,287 → 5,888 | `__libc_start_main`                                  | `<unknown>`                                       |
|   +11.4% | +601.00ms |         100.0% |    5.28s → 5.88s | 5,287 → 5,888 | `_start`                                             | `/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
|   +34.0% | +393.00ms |  21.8% → 26.3% |    1.15s → 1.54s | 1,155 → 1,548 | `zig.Ast.parse`                                      | `/opt/zig/lib/std/zig/Ast.zig:145`                |
|      new | +365.00ms |    0.0% → 6.2% |    0ms → 365.0ms |       0 → 365 | `memset`                                             | `/opt/zig/lib/compiler_rt.zig:677`                |
|      new | +295.00ms |    0.0% → 5.0% |    0ms → 295.0ms |       0 → 295 | `mem.Allocator.allocBytesWithAlignment__anon_10001`  | `/opt/zig/lib/std/mem/Allocator.zig:289`          |
|      new | +291.00ms |    0.0% → 4.9% |    0ms → 291.0ms |       0 → 291 | `mem.Allocator.allocWithSizeAndAlignment__anon_9851` | `/opt/zig/lib/std/mem/Allocator.zig:278`          |
|      new | +291.00ms |    0.0% → 4.9% |    0ms → 291.0ms |       0 → 291 | `mem.Allocator.alignedAlloc__anon_9848`              | `/opt/zig/lib/std/mem/Allocator.zig:255`          |
| +1806.3% | +289.00ms |    0.3% → 5.2% | 16.0ms → 305.0ms |      16 → 305 | `mem.Allocator.allocAdvancedWithRetAddr`             | `/opt/zig/lib/std/mem/Allocator.zig:248 → 265`    |
|    +6.3% | +244.00ms |  73.2% → 69.9% |    3.87s → 4.11s | 3,870 → 4,114 | `zig.Ast.Render.renderExpression`                    | `/opt/zig/lib/std/zig/Ast/Render.zig:314`         |
| +1013.6% | +223.00ms |    0.4% → 4.2% | 22.0ms → 245.0ms |      22 → 245 | `zig.Ast.Render.renderFor`                           | `/opt/zig/lib/std/zig/Ast/Render.zig:1403 → 1522` |
|  +939.1% | +216.00ms |    0.4% → 4.1% | 23.0ms → 239.0ms |      23 → 239 | `zig.Ast.Render.renderExpressionComma`               | `/opt/zig/lib/std/zig/Ast/Render.zig:2786 → 2655` |
|    +4.9% | +197.00ms |  76.5% → 72.0% |    4.04s → 4.24s | 4,043 → 4,240 | `zig.Ast.Render.renderTree`                          | `/opt/zig/lib/std/zig/Ast/Render.zig:86`          |
|    +4.9% | +197.00ms |  76.5% → 72.0% |    4.04s → 4.24s | 4,043 → 4,240 | `zig.Ast.render`                                     | `/opt/zig/lib/std/zig/Ast.zig:217 → 228`          |

##### Standard library

|   Change |     Delta |             % |             Time |       Samples | Function                                                            | Location                                          |
| -------: | --------: | ------------: | ---------------: | ------------: | ------------------------------------------------------------------- | ------------------------------------------------- |
| +9019.4% |   +2.796s |  0.6% → 48.0% |   31.0ms → 2.82s |    31 → 2,827 | `zig.Ast.Render.renderBlock`                                        | `/opt/zig/lib/std/zig/Ast/Render.zig:1942 → 1998` |
|      new | +768.00ms |  0.0% → 13.0% |    0ms → 768.0ms |       0 → 768 | `zig.Ast.parseTokens`                                               | `/opt/zig/lib/std/zig/Ast.zig:168`                |
|   +11.4% | +601.00ms |        100.0% |    5.28s → 5.88s | 5,287 → 5,888 | `start.callMain`                                                    | `/opt/zig/lib/std/start.zig:613 → 696`            |
|   +11.4% | +601.00ms |        100.0% |    5.28s → 5.88s | 5,287 → 5,888 | `start.callMainWithArgs`                                            | `/opt/zig/lib/std/start.zig:580 → 629`            |
|   +11.4% | +601.00ms |        100.0% |    5.28s → 5.88s | 5,287 → 5,888 | `main`                                                              | `/opt/zig/lib/std/start.zig:590 → 641`            |
|   +11.4% | +601.00ms |        100.0% |    5.28s → 5.88s | 5,287 → 5,888 | `_start`                                                            | `/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
|   +34.0% | +393.00ms | 21.8% → 26.3% |    1.15s → 1.54s | 1,155 → 1,548 | `zig.Ast.parse`                                                     | `/opt/zig/lib/std/zig/Ast.zig:145`                |
|      new | +365.00ms |   0.0% → 6.2% |    0ms → 365.0ms |       0 → 365 | `memset`                                                            | `/opt/zig/lib/compiler_rt.zig:677`                |
|      new | +295.00ms |   0.0% → 5.0% |    0ms → 295.0ms |       0 → 295 | `mem.Allocator.allocBytesWithAlignment__anon_10001`                 | `/opt/zig/lib/std/mem/Allocator.zig:289`          |
|      new | +291.00ms |   0.0% → 4.9% |    0ms → 291.0ms |       0 → 291 | `mem.Allocator.allocWithSizeAndAlignment__anon_9851`                | `/opt/zig/lib/std/mem/Allocator.zig:278`          |
|      new | +291.00ms |   0.0% → 4.9% |    0ms → 291.0ms |       0 → 291 | `mem.Allocator.alignedAlloc__anon_9848`                             | `/opt/zig/lib/std/mem/Allocator.zig:255`          |
| +1806.3% | +289.00ms |   0.3% → 5.2% | 16.0ms → 305.0ms |      16 → 305 | `mem.Allocator.allocAdvancedWithRetAddr`                            | `/opt/zig/lib/std/mem/Allocator.zig:248 → 265`    |
|    +6.3% | +244.00ms | 73.2% → 69.9% |    3.87s → 4.11s | 3,870 → 4,114 | `zig.Ast.Render.renderExpression`                                   | `/opt/zig/lib/std/zig/Ast/Render.zig:314`         |
| +1013.6% | +223.00ms |   0.4% → 4.2% | 22.0ms → 245.0ms |      22 → 245 | `zig.Ast.Render.renderFor`                                          | `/opt/zig/lib/std/zig/Ast/Render.zig:1403 → 1522` |
|  +939.1% | +216.00ms |   0.4% → 4.1% | 23.0ms → 239.0ms |      23 → 239 | `zig.Ast.Render.renderExpressionComma`                              | `/opt/zig/lib/std/zig/Ast/Render.zig:2786 → 2655` |
|    +4.9% | +197.00ms | 76.5% → 72.0% |    4.04s → 4.24s | 4,043 → 4,240 | `zig.Ast.Render.renderTree`                                         | `/opt/zig/lib/std/zig/Ast/Render.zig:86`          |
|    +4.9% | +197.00ms | 76.5% → 72.0% |    4.04s → 4.24s | 4,043 → 4,240 | `zig.Ast.render`                                                    | `/opt/zig/lib/std/zig/Ast.zig:217 → 228`          |
|    +4.9% | +197.00ms | 76.5% → 72.0% |    4.04s → 4.24s | 4,043 → 4,240 | `zig.Ast.renderAlloc`                                               | `/opt/zig/lib/std/zig/Ast.zig:206 → 217`          |
|    +4.8% | +195.00ms | 76.4% → 71.9% |    4.04s → 4.23s | 4,040 → 4,235 | `zig.Ast.Render.renderMembers`                                      | `/opt/zig/lib/std/zig/Ast/Render.zig:122`         |
| +1378.6% | +193.00ms |   0.3% → 3.5% | 14.0ms → 207.0ms |      14 → 207 | `multi_array_list.MultiArrayList(zig.Ast.Node).ensureTotalCapacity` | `/opt/zig/lib/std/multi_array_list.zig:458 → 514` |

##### Unknown

| Change |     Delta |      % |          Time |       Samples | Function      | Location    |
| -----: | --------: | -----: | ------------: | ------------: | ------------- | ----------- |
| +11.4% | +601.00ms | 100.0% | 5.28s → 5.88s | 5,287 → 5,888 | `(anonymous)` | `<unknown>` |

##### Native

|  Change |     Delta |            % |            Time |       Samples | Function            | Location    |
| ------: | --------: | -----------: | --------------: | ------------: | ------------------- | ----------- |
|  +11.4% | +601.00ms |       100.0% |   5.28s → 5.88s | 5,287 → 5,888 | `__libc_start_main` | `<unknown>` |
|     new |  +26.00ms |  0.0% → 0.4% |    0ms → 26.0ms |        0 → 26 | `__libc_realloc`    | `<unknown>` |
|     new |  +19.00ms |  0.0% → 0.3% |    0ms → 19.0ms |        0 → 19 | `preadv`            | `<unknown>` |
|     new |   +7.00ms |  0.0% → 0.1% |     0ms → 7.0ms |         0 → 7 | `statx`             | `<unknown>` |
| +125.0% |   +5.00ms |  0.1% → 0.2% |   4.0ms → 9.0ms |         4 → 9 | `close`             | `<unknown>` |
|  +17.4% |   +4.00ms |  0.4% → 0.5% | 23.0ms → 27.0ms |       23 → 27 | `openat`            | `<unknown>` |
|     new |   +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |         0 → 1 | `mmap`              | `<unknown>` |
|     new |   +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |         0 → 1 | `__sbrk`            | `<unknown>` |

#### Improvements

Functions with the largest decrease in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Standard library

|  Change |     Delta |             % |              Time |       Samples | Function                                                                | Location                                          |
| ------: | --------: | ------------: | ----------------: | ------------: | ----------------------------------------------------------------------- | ------------------------------------------------- |
|   -9.8% | -175.00ms | 33.8% → 27.4% |     1.78s → 1.61s | 1,786 → 1,611 | `zig.Ast.Render.renderToken`                                            | `/opt/zig/lib/std/zig/Ast/Render.zig:2844 → 2720` |
| removed | -164.00ms |   3.1% → 0.0% |     164.0ms → 0ms |       164 → 0 | `array_list.Aligned(u8,null).ensureUnusedCapacity`                      | `/opt/zig/lib/std/array_list.zig:1241`            |
|  -81.4% | -153.00ms |   3.6% → 0.6% |  188.0ms → 35.0ms |      188 → 35 | `zig.Ast.Render.renderBuiltinCall`                                      | `/opt/zig/lib/std/zig/Ast/Render.zig:1582 → 1669` |
|  -88.2% | -150.00ms |   3.2% → 0.3% |  170.0ms → 20.0ms |      170 → 20 | `Io.Writer.Allocating.drain`                                            | `/opt/zig/lib/std/Io/Writer.zig:2625 → 2698`      |
|  -99.1% | -112.00ms |  2.1% → <0.1% |   113.0ms → 1.0ms |       113 → 1 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32303` | `/opt/zig/lib/std/multi_array_list.zig:83 → 100`  |
|  -24.0% | -110.00ms |   8.7% → 5.9% | 458.0ms → 348.0ms |     458 → 348 | `zig.Ast.Render.AutoIndentingStream.writeAll`                           | `/opt/zig/lib/std/zig/Ast/Render.zig:3496 → 3353` |
| removed |  -97.00ms |   1.8% → 0.0% |      97.0ms → 0ms |        97 → 0 | `mem.indexOfPos__anon_23640`                                            | `/opt/zig/lib/std/mem.zig:1513`                   |
|  -51.1% |  -96.00ms |   3.6% → 1.6% |  188.0ms → 92.0ms |      188 → 92 | `Io.Writer.write`                                                       | `/opt/zig/lib/std/Io/Writer.zig:518 → 532`        |
| removed |  -95.00ms |   1.8% → 0.0% |      95.0ms → 0ms |        95 → 0 | `mem.indexOf__anon_18425`                                               | `/opt/zig/lib/std/mem.zig:1407`                   |
|  -36.4% |  -91.00ms |   4.7% → 2.7% | 250.0ms → 159.0ms |     250 → 159 | `Io.Writer.writeAll`                                                    | `/opt/zig/lib/std/Io/Writer.zig:530 → 549`        |
|  -43.4% |  -89.00ms |   3.9% → 2.0% | 205.0ms → 116.0ms |     205 → 116 | `zig.Ast.firstToken`                                                    | `/opt/zig/lib/std/zig/Ast.zig:596 → 604`          |
| removed |  -88.00ms |   1.7% → 0.0% |      88.0ms → 0ms |        88 → 0 | `mem.indexOfPosLinear__anon_26200`                                      | `/opt/zig/lib/std/mem.zig:1426`                   |
|   -4.6% |  -70.00ms | 28.7% → 24.6% |     1.51s → 1.44s | 1,516 → 1,446 | `zig.Ast.Render.tokenSliceForRender`                                    | `/opt/zig/lib/std/zig/Ast/Render.zig:3268 → 3168` |
|  -26.6% |  -64.00ms |   4.6% → 3.0% | 241.0ms → 177.0ms |     241 → 177 | `zig.Ast.Render.renderExtraNewline`                                     | `/opt/zig/lib/std/zig/Ast/Render.zig:3175 → 3075` |
| removed |  -64.00ms |   1.2% → 0.0% |      64.0ms → 0ms |        64 → 0 | `mem.indexOfScalarPos__anon_8996`                                       | `/opt/zig/lib/std/mem.zig:1258`                   |
| removed |  -62.00ms |   1.2% → 0.0% |      62.0ms → 0ms |        62 → 0 | `mem.eql__anon_3429`                                                    | `/opt/zig/lib/std/mem.zig:693`                    |
| removed |  -62.00ms |   1.2% → 0.0% |      62.0ms → 0ms |        62 → 0 | `mem.indexOfScalar__anon_5905`                                          | `/opt/zig/lib/std/mem.zig:1244`                   |
|   -4.1% |  -60.00ms | 27.7% → 23.8% |     1.46s → 1.40s | 1,462 → 1,402 | `zig.Ast.Render.renderIdentifier`                                       | `/opt/zig/lib/std/zig/Ast/Render.zig:2926 → 2812` |
| removed |  -58.00ms |   1.1% → 0.0% |      58.0ms → 0ms |        58 → 0 | `zig.Ast.Render.rowSize`                                                | `/opt/zig/lib/std/zig/Ast/Render.zig:3402`        |
| removed |  -54.00ms |   1.0% → 0.0% |      54.0ms → 0ms |        54 → 0 | `fs.Dir.readFileAllocOptions__anon_2384`                                | `/opt/zig/lib/std/fs/Dir.zig:1997`                |

##### Native

|  Change |    Delta |           % |            Time | Samples | Function         | Location    |
| ------: | -------: | ----------: | --------------: | ------: | ---------------- | ----------- |
| removed | -26.00ms | 0.5% → 0.0% |    26.0ms → 0ms |  26 → 0 | `__read`         | `<unknown>` |
| removed | -14.00ms | 0.3% → 0.0% |    14.0ms → 0ms |  14 → 0 | `posix_memalign` | `<unknown>` |
|  -40.0% |  -4.00ms | 0.2% → 0.1% |  10.0ms → 6.0ms |  10 → 6 | `__libc_malloc`  | `<unknown>` |
|  -15.0% |  -3.00ms | 0.4% → 0.3% | 20.0ms → 17.0ms | 20 → 17 | `cfree`          | `<unknown>` |
|   -6.7% |  -1.00ms | 0.3% → 0.2% | 15.0ms → 14.0ms | 15 → 14 | `brk`            | `<unknown>` |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `zig.Ast.Render.renderBlock` (`/opt/zig/lib/std/zig/Ast/Render.zig:1998`)

|   Change |   Delta |      % |           Time |    Samples | Caller                            | Location                                  |
| -------: | ------: | -----: | -------------: | ---------: | --------------------------------- | ----------------------------------------- |
| +9019.4% | +2.796s | 100.0% | 31.0ms → 2.82s | 31 → 2,827 | `zig.Ast.Render.renderExpression` | `/opt/zig/lib/std/zig/Ast/Render.zig:314` |

##### `zig.Ast.parseTokens` (`/opt/zig/lib/std/zig/Ast.zig:168`)

| Change |     Delta |             % |          Time | Samples | Caller          | Location                           |
| -----: | --------: | ------------: | ------------: | ------: | --------------- | ---------------------------------- |
|    new | +768.00ms | 0.0% → 100.0% | 0ms → 768.0ms | 0 → 768 | `zig.Ast.parse` | `/opt/zig/lib/std/zig/Ast.zig:145` |

##### `profile.main` (`./profile.zig:11`)

| Change |     Delta |      % |          Time |       Samples | Caller           | Location                               |
| -----: | --------: | -----: | ------------: | ------------: | ---------------- | -------------------------------------- |
| +11.6% | +611.00ms | 100.0% | 5.27s → 5.88s | 5,276 → 5,887 | `start.callMain` | `/opt/zig/lib/std/start.zig:613 → 696` |

##### `start.callMain` (`/opt/zig/lib/std/start.zig:696`)

| Change |     Delta |      % |          Time |       Samples | Caller                   | Location                               |
| -----: | --------: | -----: | ------------: | ------------: | ------------------------ | -------------------------------------- |
| +11.4% | +601.00ms | 100.0% | 5.28s → 5.88s | 5,287 → 5,888 | `start.callMainWithArgs` | `/opt/zig/lib/std/start.zig:580 → 629` |

##### `start.callMainWithArgs` (`/opt/zig/lib/std/start.zig:629`)

| Change |     Delta |      % |          Time |       Samples | Caller | Location                               |
| -----: | --------: | -----: | ------------: | ------------: | ------ | -------------------------------------- |
| +11.4% | +601.00ms | 100.0% | 5.28s → 5.88s | 5,287 → 5,888 | `main` | `/opt/zig/lib/std/start.zig:590 → 641` |

##### `main` (`/opt/zig/lib/std/start.zig:641`)

| Change |     Delta |      % |          Time |       Samples | Caller        | Location    |
| -----: | --------: | -----: | ------------: | ------------: | ------------- | ----------- |
| +11.4% | +601.00ms | 100.0% | 5.28s → 5.88s | 5,287 → 5,888 | `(anonymous)` | `<unknown>` |

##### `(anonymous)` (`<unknown>`)

|  Change |     Delta |           % |          Time |       Samples | Caller                                                                                 | Location                                    |
| ------: | --------: | ----------: | ------------: | ------------: | -------------------------------------------------------------------------------------- | ------------------------------------------- |
|  +11.4% | +601.00ms |      100.0% | 5.28s → 5.88s | 5,287 → 5,888 | `__libc_start_main`                                                                    | `<unknown>`                                 |
| removed | -149.00ms | 2.8% → 0.0% | 149.0ms → 0ms |       149 → 0 | `array_list.Aligned(u8,null).ensureUnusedCapacity`                                     | `/opt/zig/lib/std/array_list.zig:1241`      |
| removed |  -81.00ms | 1.5% → 0.0% |  81.0ms → 0ms |        81 → 0 | `zig.Ast.Render.AutoIndentingStream.writeAll`                                          | `/opt/zig/lib/std/zig/Ast/Render.zig:3496`  |
| removed |  -29.00ms | 0.5% → 0.0% |  29.0ms → 0ms |        29 → 0 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).ensureUnusedCapacity` | `/opt/zig/lib/std/multi_array_list.zig:482` |
|     new |  +25.00ms | 0.0% → 0.4% |  0ms → 25.0ms |        0 → 25 | `__libc_realloc`                                                                       | `<unknown>`                                 |

##### `__libc_start_main` (`<unknown>`)

| Change |     Delta |      % |          Time |       Samples | Caller   | Location                                          |
| -----: | --------: | -----: | ------------: | ------------: | -------- | ------------------------------------------------- |
| +11.4% | +601.00ms | 100.0% | 5.28s → 5.88s | 5,287 → 5,888 | `_start` | `/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |

##### `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`)

| Change |     Delta |      % |          Time |       Samples | Caller         | Location                |
| -----: | --------: | -----: | ------------: | ------------: | -------------- | ----------------------- |
| +34.0% | +393.00ms | 100.0% | 1.15s → 1.54s | 1,155 → 1,548 | `profile.main` | `./profile.zig:12 → 11` |

##### `memset` (`/opt/zig/lib/compiler_rt.zig:677`)

| Change |     Delta |            % |          Time | Samples | Caller                                                                | Location                                 |
| -----: | --------: | -----------: | ------------: | ------: | --------------------------------------------------------------------- | ---------------------------------------- |
|    new | +292.00ms | 0.0% → 80.0% | 0ms → 292.0ms | 0 → 292 | `mem.Allocator.allocBytesWithAlignment__anon_10001`                   | `/opt/zig/lib/std/mem/Allocator.zig:289` |
|    new |  +24.00ms |  0.0% → 6.6% |  0ms → 24.0ms |  0 → 24 | `Io.Writer.splatByte`                                                 | `/opt/zig/lib/std/Io/Writer.zig:812`     |
|    new |  +20.00ms |  0.0% → 5.5% |  0ms → 20.0ms |  0 → 20 | `array_list.Aligned(zig.Ast.Node.Index,null).shrinkRetainingCapacity` | `/opt/zig/lib/std/array_list.zig:1186`   |
|    new |  +13.00ms |  0.0% → 3.6% |  0ms → 13.0ms |  0 → 13 | `Io.Threaded.dirOpenFilePosix`                                        | `/opt/zig/lib/std/Io/Threaded.zig:4789`  |
|    new |   +5.00ms |  0.0% → 1.4% |   0ms → 5.0ms |   0 → 5 | `mem.Allocator.allocBytesWithAlignment__anon_8636`                    | `/opt/zig/lib/std/mem/Allocator.zig:289` |

##### `mem.Allocator.allocBytesWithAlignment__anon_10001` (`/opt/zig/lib/std/mem/Allocator.zig:289`)

| Change |     Delta |            % |          Time | Samples | Caller                                                | Location                                 |
| -----: | --------: | -----------: | ------------: | ------: | ----------------------------------------------------- | ---------------------------------------- |
|    new | +291.00ms | 0.0% → 98.6% | 0ms → 291.0ms | 0 → 291 | `mem.Allocator.allocWithSizeAndAlignment__anon_9851`  | `/opt/zig/lib/std/mem/Allocator.zig:278` |
|    new |   +4.00ms |  0.0% → 1.4% |   0ms → 4.0ms |   0 → 4 | `mem.Allocator.allocWithSizeAndAlignment__anon_32916` | `/opt/zig/lib/std/mem/Allocator.zig:278` |

##### `mem.Allocator.allocWithSizeAndAlignment__anon_9851` (`/opt/zig/lib/std/mem/Allocator.zig:278`)

| Change |     Delta |             % |          Time | Samples | Caller                                   | Location                                 |
| -----: | --------: | ------------: | ------------: | ------: | ---------------------------------------- | ---------------------------------------- |
|    new | +291.00ms | 0.0% → 100.0% | 0ms → 291.0ms | 0 → 291 | `mem.Allocator.allocAdvancedWithRetAddr` | `/opt/zig/lib/std/mem/Allocator.zig:265` |

##### `mem.Allocator.alignedAlloc__anon_9848` (`/opt/zig/lib/std/mem/Allocator.zig:255`)

| Change |     Delta |            % |          Time | Samples | Caller                                                                        | Location                                    |
| -----: | --------: | -----------: | ------------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
|    new | +185.00ms | 0.0% → 63.6% | 0ms → 185.0ms | 0 → 185 | `multi_array_list.MultiArrayList(zig.Ast.Node).setCapacity`                   | `/opt/zig/lib/std/multi_array_list.zig:540` |
|    new | +106.00ms | 0.0% → 36.4% | 0ms → 106.0ms | 0 → 106 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).setCapacity` | `/opt/zig/lib/std/multi_array_list.zig:540` |

##### `mem.Allocator.allocAdvancedWithRetAddr` (`/opt/zig/lib/std/mem/Allocator.zig:265`)

|  Change |     Delta |            % |          Time | Samples | Caller                                   | Location                                 |
| ------: | --------: | -----------: | ------------: | ------: | ---------------------------------------- | ---------------------------------------- |
|     new | +291.00ms | 0.0% → 95.4% | 0ms → 291.0ms | 0 → 291 | `mem.Allocator.alignedAlloc__anon_9848`  | `/opt/zig/lib/std/mem/Allocator.zig:255` |
| removed |  -12.00ms | 75.0% → 0.0% |  12.0ms → 0ms |  12 → 0 | `mem.Allocator.alignedAlloc__anon_6559`  | `/opt/zig/lib/std/mem/Allocator.zig:238` |
|     new |   +5.00ms |  0.0% → 1.6% |   0ms → 5.0ms |   0 → 5 | `mem.Allocator.alignedAlloc__anon_31630` | `/opt/zig/lib/std/mem/Allocator.zig:255` |
|     new |   +3.00ms |  0.0% → 1.0% |   0ms → 3.0ms |   0 → 3 | `mem.Allocator.alloc__anon_31120`        | `/opt/zig/lib/std/mem/Allocator.zig:197` |
|     new |   +3.00ms |  0.0% → 1.0% |   0ms → 3.0ms |   0 → 3 | `mem.Allocator.alignedAlloc__anon_35525` | `/opt/zig/lib/std/mem/Allocator.zig:255` |

##### `zig.Ast.Render.renderExpression` (`/opt/zig/lib/std/zig/Ast/Render.zig:314`)

|   Change |     Delta |             % |              Time |       Samples | Caller                                      | Location                                          |
| -------: | --------: | ------------: | ----------------: | ------------: | ------------------------------------------- | ------------------------------------------------- |
|   +10.4% | +222.00ms | 55.3% → 57.5% |     2.14s → 2.36s | 2,142 → 2,364 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `/opt/zig/lib/std/zig/Ast/Render.zig:1140 → 1253` |
|   +19.3% | +217.00ms | 29.1% → 32.7% |     1.12s → 1.34s | 1,127 → 1,344 | `zig.Ast.Render.renderExpression`           | `/opt/zig/lib/std/zig/Ast/Render.zig:314`         |
|   +30.3% | +187.00ms | 15.9% → 19.5% | 617.0ms → 804.0ms |     617 → 804 | `zig.Ast.Render.renderParamList`            | `/opt/zig/lib/std/zig/Ast/Render.zig:2728 → 2600` |
| +5566.7% | +167.00ms |   0.1% → 4.1% |   3.0ms → 170.0ms |       3 → 170 | `zig.Ast.Render.renderExpressionComma`      | `/opt/zig/lib/std/zig/Ast/Render.zig:2786 → 2655` |
|    +6.5% | +150.00ms | 59.4% → 59.5% |     2.29s → 2.44s | 2,299 → 2,449 | `zig.Ast.Render.renderMember`               | `/opt/zig/lib/std/zig/Ast/Render.zig:141`         |

##### `zig.Ast.Render.renderFor` (`/opt/zig/lib/std/zig/Ast/Render.zig:1522`)

|   Change |     Delta |      % |             Time |  Samples | Caller                            | Location                                  |
| -------: | --------: | -----: | ---------------: | -------: | --------------------------------- | ----------------------------------------- |
| +1013.6% | +223.00ms | 100.0% | 22.0ms → 245.0ms | 22 → 245 | `zig.Ast.Render.renderExpression` | `/opt/zig/lib/std/zig/Ast/Render.zig:314` |

##### `zig.Ast.Render.renderExpressionComma` (`/opt/zig/lib/std/zig/Ast/Render.zig:2655`)

| Change |     Delta |              % |            Time | Samples | Caller                                | Location                                          |
| -----: | --------: | -------------: | --------------: | ------: | ------------------------------------- | ------------------------------------------------- |
|    new | +195.00ms |   0.0% → 81.6% |   0ms → 195.0ms | 0 → 195 | `zig.Ast.Render.renderArrayInit`      | `/opt/zig/lib/std/zig/Ast/Render.zig:2110`        |
| +91.3% |  +21.00ms | 100.0% → 18.4% | 23.0ms → 44.0ms | 23 → 44 | `zig.Ast.Render.renderContainerField` | `/opt/zig/lib/std/zig/Ast/Render.zig:1473 → 1577` |

##### `zig.Ast.Render.renderTree` (`/opt/zig/lib/std/zig/Ast/Render.zig:86`)

| Change |     Delta |      % |          Time |       Samples | Caller           | Location                                 |
| -----: | --------: | -----: | ------------: | ------------: | ---------------- | ---------------------------------------- |
|  +4.9% | +197.00ms | 100.0% | 4.04s → 4.24s | 4,043 → 4,240 | `zig.Ast.render` | `/opt/zig/lib/std/zig/Ast.zig:217 → 228` |

##### `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`)

| Change |     Delta |      % |          Time |       Samples | Caller                | Location                                 |
| -----: | --------: | -----: | ------------: | ------------: | --------------------- | ---------------------------------------- |
|  +4.9% | +197.00ms | 100.0% | 4.04s → 4.24s | 4,043 → 4,240 | `zig.Ast.renderAlloc` | `/opt/zig/lib/std/zig/Ast.zig:206 → 217` |

##### `zig.Ast.renderAlloc` (`/opt/zig/lib/std/zig/Ast.zig:217`)

| Change |     Delta |      % |          Time |       Samples | Caller         | Location                |
| -----: | --------: | -----: | ------------: | ------------: | -------------- | ----------------------- |
|  +4.9% | +197.00ms | 100.0% | 4.04s → 4.24s | 4,043 → 4,240 | `profile.main` | `./profile.zig:12 → 11` |

##### `zig.Ast.Render.renderMembers` (`/opt/zig/lib/std/zig/Ast/Render.zig:122`)

| Change |     Delta |      % |          Time |       Samples | Caller                      | Location                                 |
| -----: | --------: | -----: | ------------: | ------------: | --------------------------- | ---------------------------------------- |
|  +4.8% | +195.00ms | 100.0% | 4.04s → 4.23s | 4,040 → 4,235 | `zig.Ast.Render.renderTree` | `/opt/zig/lib/std/zig/Ast/Render.zig:86` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).ensureTotalCapacity` (`/opt/zig/lib/std/multi_array_list.zig:514`)

|  Change |     Delta |            % |            Time | Samples | Caller                                                               | Location                                          |
| ------: | --------: | -----------: | --------------: | ------: | -------------------------------------------------------------------- | ------------------------------------------------- |
|     new | +185.00ms | 0.0% → 89.4% |   0ms → 185.0ms | 0 → 185 | `zig.Ast.parseTokens`                                                | `/opt/zig/lib/std/zig/Ast.zig:168`                |
|  +50.0% |   +6.00ms | 85.7% → 8.7% | 12.0ms → 18.0ms | 12 → 18 | `multi_array_list.MultiArrayList(zig.Ast.Node).ensureUnusedCapacity` | `/opt/zig/lib/std/multi_array_list.zig:482 → 533` |
|     new |   +2.00ms |  0.0% → 1.0% |     0ms → 2.0ms |   0 → 2 | `zig.Parse.parseSuffixOp`                                            | `/opt/zig/lib/std/zig/Parse.zig:3201`             |
| removed |   -1.00ms |  7.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `zig.Parse.parseSuffixExpr`                                          | `/opt/zig/lib/std/zig/Parse.zig:2355`             |
| removed |   -1.00ms |  7.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `zig.Parse.expectTopLevelDeclRecoverable`                            | `/opt/zig/lib/std/zig/Parse.zig:658`              |

##### `__libc_realloc` (`<unknown>`)

| Change |    Delta |            % |         Time | Samples | Caller                        | Location                                 |
| -----: | -------: | -----------: | -----------: | ------: | ----------------------------- | ---------------------------------------- |
|    new | +25.00ms | 0.0% → 96.2% | 0ms → 25.0ms |  0 → 25 | `heap.c_allocator_impl.remap` | `/opt/zig/lib/std/heap.zig:291`          |
|    new |  +1.00ms |  0.0% → 3.8% |  0ms → 1.0ms |   0 → 1 | `mem.Allocator.rawRemap`      | `/opt/zig/lib/std/mem/Allocator.zig:153` |

##### `preadv` (`<unknown>`)

| Change |    Delta |             % |         Time | Samples | Caller                                | Location                                |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------------------- | --------------------------------------- |
|    new | +19.00ms | 0.0% → 100.0% | 0ms → 19.0ms |  0 → 19 | `Io.Threaded.fileReadPositionalPosix` | `/opt/zig/lib/std/Io/Threaded.zig:9766` |

##### `statx` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller         | Location                           |
| -----: | ------: | ------------: | ----------: | ------: | -------------- | ---------------------------------- |
|    new | +7.00ms | 0.0% → 100.0% | 0ms → 7.0ms |   0 → 7 | `Io.File.stat` | `/opt/zig/lib/std/Io/File.zig:141` |

##### `close` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                | Location                                 |
| ------: | ------: | ------------: | ----------: | ------: | --------------------- | ---------------------------------------- |
|     new | +9.00ms | 0.0% → 100.0% | 0ms → 9.0ms |   0 → 9 | `Io.Threaded.closeFd` | `/opt/zig/lib/std/Io/Threaded.zig:18890` |
| removed | -4.00ms | 100.0% → 0.0% | 4.0ms → 0ms |   4 → 0 | `posix.close`         | `/opt/zig/lib/std/posix.zig:285`         |

##### `openat` (`<unknown>`)

|  Change |    Delta |            % |         Time | Samples | Caller                         | Location                                |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------------ | --------------------------------------- |
| removed | -21.00ms | 91.3% → 0.0% | 21.0ms → 0ms |  21 → 0 | `posix.openatZ`                | `/opt/zig/lib/std/posix.zig:1835`       |
|     new | +21.00ms | 0.0% → 77.8% | 0ms → 21.0ms |  0 → 21 | `Io.Threaded.dirOpenFilePosix` | `/opt/zig/lib/std/Io/Threaded.zig:4789` |
|     new |  +6.00ms | 0.0% → 22.2% |  0ms → 6.0ms |   0 → 6 | `Io.Threaded.dirOpenDirPosix`  | `/opt/zig/lib/std/Io/Threaded.zig:5237` |
| removed |  -2.00ms |  8.7% → 0.0% |  2.0ms → 0ms |   2 → 0 | `fs.Dir.openFileZ`             | `/opt/zig/lib/std/fs/Dir.zig:855`       |

##### `mmap` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller        | Location    |
| -----: | ------: | ------------: | ----------: | ------: | ------------- | ----------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `(anonymous)` | `<unknown>` |

##### `__sbrk` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller               | Location    |
| -----: | ------: | ------------: | ----------: | ------: | -------------------- | ----------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `__default_morecore` | `<unknown>` |

##### `zig.Ast.Render.renderToken` (`/opt/zig/lib/std/zig/Ast/Render.zig:2720`)

|  Change |    Delta |             % |              Time |   Samples | Caller                                      | Location                                          |
| ------: | -------: | ------------: | ----------------: | --------: | ------------------------------------------- | ------------------------------------------------- |
|  -68.8% | -44.00ms |   3.6% → 1.2% |   64.0ms → 20.0ms |   64 → 20 | `zig.Ast.Render.renderArrayInit`            | `/opt/zig/lib/std/zig/Ast/Render.zig:2067 → 2110` |
|   -4.5% | -33.00ms | 41.5% → 43.9% | 741.0ms → 708.0ms | 741 → 708 | `zig.Ast.Render.renderIdentifier`           | `/opt/zig/lib/std/zig/Ast/Render.zig:2926 → 2812` |
| removed | -30.00ms |   1.7% → 0.0% |      30.0ms → 0ms |    30 → 0 | `zig.Ast.Render.renderExpressionFixup`      | `/opt/zig/lib/std/zig/Ast/Render.zig:924`         |
|  -24.3% | -27.00ms |   6.2% → 5.2% |  111.0ms → 84.0ms |  111 → 84 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `/opt/zig/lib/std/zig/Ast/Render.zig:1140 → 1253` |
|  -43.5% | -27.00ms |   3.5% → 2.2% |   62.0ms → 35.0ms |   62 → 35 | `zig.Ast.Render.renderBuiltinCall`          | `/opt/zig/lib/std/zig/Ast/Render.zig:1582 → 1669` |

##### `array_list.Aligned(u8,null).ensureUnusedCapacity` (`/opt/zig/lib/std/array_list.zig:1241`)

|  Change |     Delta |             % |          Time | Samples | Caller                       | Location                              |
| ------: | --------: | ------------: | ------------: | ------: | ---------------------------- | ------------------------------------- |
| removed | -164.00ms | 100.0% → 0.0% | 164.0ms → 0ms | 164 → 0 | `Io.Writer.Allocating.drain` | `/opt/zig/lib/std/Io/Writer.zig:2625` |

##### `zig.Ast.Render.renderBuiltinCall` (`/opt/zig/lib/std/zig/Ast/Render.zig:1669`)

| Change |     Delta |      % |             Time |  Samples | Caller                            | Location                                  |
| -----: | --------: | -----: | ---------------: | -------: | --------------------------------- | ----------------------------------------- |
| -81.4% | -153.00ms | 100.0% | 188.0ms → 35.0ms | 188 → 35 | `zig.Ast.Render.renderExpression` | `/opt/zig/lib/std/zig/Ast/Render.zig:314` |

##### `Io.Writer.Allocating.drain` (`/opt/zig/lib/std/Io/Writer.zig:2698`)

| Change |     Delta |             % |             Time |  Samples | Caller                       | Location                                   |
| -----: | --------: | ------------: | ---------------: | -------: | ---------------------------- | ------------------------------------------ |
| -87.6% | -113.00ms | 75.9% → 80.0% | 129.0ms → 16.0ms | 129 → 16 | `Io.Writer.write`            | `/opt/zig/lib/std/Io/Writer.zig:518 → 532` |
| -96.8% |  -30.00ms |  18.2% → 5.0% |   31.0ms → 1.0ms |   31 → 1 | `Io.Writer.writeSplat`       | `/opt/zig/lib/std/Io/Writer.zig:179 → 181` |
| -80.0% |   -8.00ms |  5.9% → 10.0% |   10.0ms → 2.0ms |   10 → 2 | `Io.Writer.writeByte`        | `/opt/zig/lib/std/Io/Writer.zig:724 → 743` |
|    new |   +1.00ms |   0.0% → 5.0% |      0ms → 1.0ms |    0 → 1 | `zig.Ast.Render.renderSpace` | `/opt/zig/lib/std/zig/Ast/Render.zig:2738` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32303` (`/opt/zig/lib/std/multi_array_list.zig:100`)

|  Change |     Delta |             % |          Time | Samples | Caller                  | Location                           |
| ------: | --------: | ------------: | ------------: | ------: | ----------------------- | ---------------------------------- |
| removed | -113.00ms | 100.0% → 0.0% | 113.0ms → 0ms | 113 → 0 | `zig.Ast.nodeMainToken` | `/opt/zig/lib/std/zig/Ast.zig:100` |
|     new |   +1.00ms | 0.0% → 100.0% |   0ms → 1.0ms |   0 → 1 | `zig.Ast.nodeTag`       | `/opt/zig/lib/std/zig/Ast.zig:96`  |

##### `zig.Ast.Render.AutoIndentingStream.writeAll` (`/opt/zig/lib/std/zig/Ast/Render.zig:3353`)

|  Change |    Delta |             % |              Time |   Samples | Caller                                | Location                                          |
| ------: | -------: | ------------: | ----------------: | --------: | ------------------------------------- | ------------------------------------------------- |
|  -21.7% | -90.00ms | 90.6% → 93.4% | 415.0ms → 325.0ms | 415 → 325 | `zig.Ast.Render.renderToken`          | `/opt/zig/lib/std/zig/Ast/Render.zig:2844 → 2720` |
| removed | -31.00ms |   6.8% → 0.0% |      31.0ms → 0ms |    31 → 0 | `zig.Ast.Render.renderArrayInit`      | `/opt/zig/lib/std/zig/Ast/Render.zig:2067`        |
| +125.0% | +10.00ms |   1.7% → 5.2% |    8.0ms → 18.0ms |    8 → 18 | `zig.Ast.Render.renderExpression`     | `/opt/zig/lib/std/zig/Ast/Render.zig:314`         |
| removed |  -1.00ms |   0.2% → 0.0% |       1.0ms → 0ms |     1 → 0 | `zig.Ast.Render.renderContainerField` | `/opt/zig/lib/std/zig/Ast/Render.zig:1473`        |
| removed |  -1.00ms |   0.2% → 0.0% |       1.0ms → 0ms |     1 → 0 | `zig.Ast.Render.renderCall`           | `/opt/zig/lib/std/zig/Ast/Render.zig:2719`        |

##### `mem.indexOfPos__anon_23640` (`/opt/zig/lib/std/mem.zig:1513`)

|  Change |    Delta |            % |         Time | Samples | Caller                            | Location                        |
| ------: | -------: | -----------: | -----------: | ------: | --------------------------------- | ------------------------------- |
| removed | -95.00ms | 97.9% → 0.0% | 95.0ms → 0ms |  95 → 0 | `mem.indexOf__anon_18425`         | `/opt/zig/lib/std/mem.zig:1407` |
| removed |  -2.00ms |  2.1% → 0.0% |  2.0ms → 0ms |   2 → 0 | `mem.containsAtLeast__anon_18431` | `/opt/zig/lib/std/mem.zig:1633` |

##### `Io.Writer.write` (`/opt/zig/lib/std/Io/Writer.zig:532`)

| Change |    Delta |      % |             Time |  Samples | Caller               | Location                                   |
| -----: | -------: | -----: | ---------------: | -------: | -------------------- | ------------------------------------------ |
| -51.1% | -96.00ms | 100.0% | 188.0ms → 92.0ms | 188 → 92 | `Io.Writer.writeAll` | `/opt/zig/lib/std/Io/Writer.zig:530 → 549` |

##### `mem.indexOf__anon_18425` (`/opt/zig/lib/std/mem.zig:1407`)

|  Change |    Delta |            % |         Time | Samples | Caller                                   | Location                                   |
| ------: | -------: | -----------: | -----------: | ------: | ---------------------------------------- | ------------------------------------------ |
| removed | -41.00ms | 43.2% → 0.0% | 41.0ms → 0ms |  41 → 0 | `zig.Ast.Render.renderComments`          | `/opt/zig/lib/std/zig/Ast/Render.zig:3112` |
| removed | -35.00ms | 36.8% → 0.0% | 35.0ms → 0ms |  35 → 0 | `zig.Ast.Render.renderExtraNewlineToken` | `/opt/zig/lib/std/zig/Ast/Render.zig:3180` |
| removed | -19.00ms | 20.0% → 0.0% | 19.0ms → 0ms |  19 → 0 | `zig.Ast.Render.hasComment`              | `/opt/zig/lib/std/zig/Ast/Render.zig:3089` |

##### `Io.Writer.writeAll` (`/opt/zig/lib/std/Io/Writer.zig:549`)

|  Change |    Delta |             % |              Time |   Samples | Caller                                        | Location                                          |
| ------: | -------: | ------------: | ----------------: | --------: | --------------------------------------------- | ------------------------------------------------- |
|  -34.7% | -83.00ms | 95.6% → 98.1% | 239.0ms → 156.0ms | 239 → 156 | `zig.Ast.Render.AutoIndentingStream.writeAll` | `/opt/zig/lib/std/zig/Ast/Render.zig:3496 → 3353` |
|  -66.7% |  -6.00ms |   3.6% → 1.9% |     9.0ms → 3.0ms |     9 → 3 | `Io.Writer.alignBufferOptions`                | `/opt/zig/lib/std/Io/Writer.zig:1006 → 1039`      |
| removed |  -2.00ms |   0.8% → 0.0% |       2.0ms → 0ms |     2 → 0 | `Io.Writer.print__anon_4254`                  | `/opt/zig/lib/std/Io/Writer.zig:593`              |

##### `zig.Ast.firstToken` (`/opt/zig/lib/std/zig/Ast.zig:604`)

|  Change |    Delta |             % |            Time | Samples | Caller                              | Location                                          |
| ------: | -------: | ------------: | --------------: | ------: | ----------------------------------- | ------------------------------------------------- |
|  -42.9% | -30.00ms | 34.1% → 34.5% | 70.0ms → 40.0ms | 70 → 40 | `zig.Ast.Render.renderExtraNewline` | `/opt/zig/lib/std/zig/Ast/Render.zig:3175 → 3075` |
| removed | -21.00ms |  10.2% → 0.0% |    21.0ms → 0ms |  21 → 0 | `zig.Ast.Render.renderBuiltinCall`  | `/opt/zig/lib/std/zig/Ast/Render.zig:1582`        |
| removed | -17.00ms |   8.3% → 0.0% |    17.0ms → 0ms |  17 → 0 | `zig.Ast.Render.rowSize`            | `/opt/zig/lib/std/zig/Ast/Render.zig:3402`        |
|  -72.7% | -16.00ms |  10.7% → 5.2% |  22.0ms → 6.0ms |  22 → 6 | `zig.Ast.Render.renderArrayInit`    | `/opt/zig/lib/std/zig/Ast/Render.zig:2067 → 2110` |
| removed | -13.00ms |   6.3% → 0.0% |    13.0ms → 0ms |  13 → 0 | `zig.Ast.Render.renderParamList`    | `/opt/zig/lib/std/zig/Ast/Render.zig:2728`        |

##### `mem.indexOfPosLinear__anon_26200` (`/opt/zig/lib/std/mem.zig:1426`)

|  Change |    Delta |             % |         Time | Samples | Caller                       | Location                        |
| ------: | -------: | ------------: | -----------: | ------: | ---------------------------- | ------------------------------- |
| removed | -88.00ms | 100.0% → 0.0% | 88.0ms → 0ms |  88 → 0 | `mem.indexOfPos__anon_23640` | `/opt/zig/lib/std/mem.zig:1513` |

##### `zig.Ast.Render.tokenSliceForRender` (`/opt/zig/lib/std/zig/Ast/Render.zig:3168`)

|  Change |     Delta |             % |              Time |   Samples | Caller                                   | Location                                          |
| ------: | --------: | ------------: | ----------------: | --------: | ---------------------------------------- | ------------------------------------------------- |
|  -18.3% | -148.00ms | 53.4% → 45.7% | 809.0ms → 661.0ms | 809 → 661 | `zig.Ast.Render.renderToken`             | `/opt/zig/lib/std/zig/Ast/Render.zig:2844 → 2720` |
| +609.1% | +134.00ms |  1.5% → 10.8% |  22.0ms → 156.0ms |  22 → 156 | `zig.Ast.Render.renderExpression`        | `/opt/zig/lib/std/zig/Ast/Render.zig:314`         |
|   -6.9% |  -42.00ms | 39.9% → 38.9% | 605.0ms → 563.0ms | 605 → 563 | `zig.Ast.Render.renderIdentifier`        | `/opt/zig/lib/std/zig/Ast/Render.zig:2926 → 2812` |
|  -10.2% |   -6.00ms |   3.9% → 3.7% |   59.0ms → 53.0ms |   59 → 53 | `zig.Ast.Render.renderExtraNewlineToken` | `/opt/zig/lib/std/zig/Ast/Render.zig:3180 → 3080` |
|     new |   +6.00ms |   0.0% → 0.4% |       0ms → 6.0ms |     0 → 6 | `zig.Ast.Render.renderArrayInit`         | `/opt/zig/lib/std/zig/Ast/Render.zig:2110`        |

##### `zig.Ast.Render.renderExtraNewline` (`/opt/zig/lib/std/zig/Ast/Render.zig:3075`)

| Change |    Delta |             % |            Time | Samples | Caller                               | Location                                          |
| -----: | -------: | ------------: | --------------: | ------: | ------------------------------------ | ------------------------------------------------- |
| -28.1% | -27.00ms | 39.8% → 39.0% | 96.0ms → 69.0ms | 96 → 69 | `zig.Ast.Render.finishRenderBlock`   | `/opt/zig/lib/std/zig/Ast/Render.zig:1967 → 2023` |
| -31.1% | -19.00ms | 25.3% → 23.7% | 61.0ms → 42.0ms | 61 → 42 | `zig.Ast.Render.renderContainerDecl` | `/opt/zig/lib/std/zig/Ast/Render.zig:2295 → 2344` |
| -37.5% |  -9.00ms |  10.0% → 8.5% | 24.0ms → 15.0ms | 24 → 15 | `zig.Ast.Render.renderArrayInit`     | `/opt/zig/lib/std/zig/Ast/Render.zig:2067 → 2110` |
| -80.0% |  -4.00ms |   2.1% → 0.6% |   5.0ms → 1.0ms |   5 → 1 | `zig.Ast.Render.renderParamList`     | `/opt/zig/lib/std/zig/Ast/Render.zig:2728 → 2600` |
| -14.3% |  -3.00ms |  8.7% → 10.2% | 21.0ms → 18.0ms | 21 → 18 | `zig.Ast.Render.renderMembers`       | `/opt/zig/lib/std/zig/Ast/Render.zig:122`         |

##### `mem.indexOfScalarPos__anon_8996` (`/opt/zig/lib/std/mem.zig:1258`)

|  Change |    Delta |            % |         Time | Samples | Caller                            | Location                                   |
| ------: | -------: | -----------: | -----------: | ------: | --------------------------------- | ------------------------------------------ |
| removed | -60.00ms | 93.8% → 0.0% | 60.0ms → 0ms |  60 → 0 | `mem.indexOfScalar__anon_5905`    | `/opt/zig/lib/std/mem.zig:1244`            |
| removed |  -2.00ms |  3.1% → 0.0% |  2.0ms → 0ms |   2 → 0 | `mem.indexOfPos__anon_23640`      | `/opt/zig/lib/std/mem.zig:1513`            |
| removed |  -1.00ms |  1.6% → 0.0% |  1.0ms → 0ms |   1 → 0 | `zig.Ast.Render.renderExpression` | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |
| removed |  -1.00ms |  1.6% → 0.0% |  1.0ms → 0ms |   1 → 0 | `zig.Ast.Render.renderSpace`      | `/opt/zig/lib/std/zig/Ast/Render.zig:2862` |

##### `mem.eql__anon_3429` (`/opt/zig/lib/std/mem.zig:693`)

|  Change |    Delta |            % |         Time | Samples | Caller                             | Location                                   |
| ------: | -------: | -----------: | -----------: | ------: | ---------------------------------- | ------------------------------------------ |
| removed | -61.00ms | 98.4% → 0.0% | 61.0ms → 0ms |  61 → 0 | `mem.indexOfPosLinear__anon_26200` | `/opt/zig/lib/std/mem.zig:1426`            |
| removed |  -1.00ms |  1.6% → 0.0% |  1.0ms → 0ms |   1 → 0 | `zig.Ast.Render.renderComments`    | `/opt/zig/lib/std/zig/Ast/Render.zig:3112` |

##### `mem.indexOfScalar__anon_5905` (`/opt/zig/lib/std/mem.zig:1244`)

|  Change |    Delta |            % |         Time | Samples | Caller                           | Location                                   |
| ------: | -------: | -----------: | -----------: | ------: | -------------------------------- | ------------------------------------------ |
| removed | -58.00ms | 93.5% → 0.0% | 58.0ms → 0ms |  58 → 0 | `zig.Ast.tokensOnSameLine`       | `/opt/zig/lib/std/zig/Ast.zig:1313`        |
| removed |  -2.00ms |  3.2% → 0.0% |  2.0ms → 0ms |   2 → 0 | `zig.Ast.Render.renderArrayInit` | `/opt/zig/lib/std/zig/Ast/Render.zig:2067` |
| removed |  -1.00ms |  1.6% → 0.0% |  1.0ms → 0ms |   1 → 0 | `zig.Ast.Render.renderComments`  | `/opt/zig/lib/std/zig/Ast/Render.zig:3112` |
| removed |  -1.00ms |  1.6% → 0.0% |  1.0ms → 0ms |   1 → 0 | `mem.trimEnd__anon_15431`        | `/opt/zig/lib/std/mem.zig:1216`            |

##### `zig.Ast.Render.renderIdentifier` (`/opt/zig/lib/std/zig/Ast/Render.zig:2812`)

|  Change |    Delta |             % |              Time |   Samples | Caller                                 | Location                                          |
| ------: | -------: | ------------: | ----------------: | --------: | -------------------------------------- | ------------------------------------------------- |
|   +7.4% | +44.00ms | 40.8% → 45.7% | 597.0ms → 641.0ms | 597 → 641 | `zig.Ast.Render.renderExpression`      | `/opt/zig/lib/std/zig/Ast/Render.zig:314`         |
| removed | -22.00ms |   1.5% → 0.0% |      22.0ms → 0ms |    22 → 0 | `zig.Ast.Render.renderBuiltinCall`     | `/opt/zig/lib/std/zig/Ast/Render.zig:1582`        |
|  -21.4% | -21.00ms |   6.7% → 5.5% |   98.0ms → 77.0ms |   98 → 77 | `zig.Ast.Render.renderFnProto`         | `/opt/zig/lib/std/zig/Ast/Render.zig:1660 → 1766` |
|     new | +21.00ms |   0.0% → 1.5% |      0ms → 21.0ms |    0 → 21 | `zig.Ast.Render.renderExpressionComma` | `/opt/zig/lib/std/zig/Ast/Render.zig:2655`        |
|  -33.3% | -19.00ms |   3.9% → 2.7% |   57.0ms → 38.0ms |   57 → 38 | `zig.Ast.Render.renderCall`            | `/opt/zig/lib/std/zig/Ast/Render.zig:2719 → 2591` |

##### `zig.Ast.Render.rowSize` (`/opt/zig/lib/std/zig/Ast/Render.zig:3402`)

|  Change |    Delta |             % |         Time | Samples | Caller                           | Location                                   |
| ------: | -------: | ------------: | -----------: | ------: | -------------------------------- | ------------------------------------------ |
| removed | -58.00ms | 100.0% → 0.0% | 58.0ms → 0ms |  58 → 0 | `zig.Ast.Render.renderArrayInit` | `/opt/zig/lib/std/zig/Ast/Render.zig:2067` |

##### `fs.Dir.readFileAllocOptions__anon_2384` (`/opt/zig/lib/std/fs/Dir.zig:1997`)

|  Change |    Delta |             % |         Time | Samples | Caller         | Location           |
| ------: | -------: | ------------: | -----------: | ------: | -------------- | ------------------ |
| removed | -54.00ms | 100.0% → 0.0% | 54.0ms → 0ms |  54 → 0 | `profile.main` | `./profile.zig:12` |

##### `__read` (`<unknown>`)

|  Change |    Delta |             % |         Time | Samples | Caller       | Location                         |
| ------: | -------: | ------------: | -----------: | ------: | ------------ | -------------------------------- |
| removed | -26.00ms | 100.0% → 0.0% | 26.0ms → 0ms |  26 → 0 | `posix.read` | `/opt/zig/lib/std/posix.zig:844` |

##### `posix_memalign` (`<unknown>`)

|  Change |    Delta |            % |         Time | Samples | Caller                         | Location                                 |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------------ | ---------------------------------------- |
| removed | -10.00ms | 71.4% → 0.0% | 10.0ms → 0ms |  10 → 0 | `heap.CAllocator.alignedAlloc` | `/opt/zig/lib/std/heap.zig:157`          |
| removed |  -4.00ms | 28.6% → 0.0% |  4.0ms → 0ms |   4 → 0 | `mem.Allocator.rawAlloc`       | `/opt/zig/lib/std/mem/Allocator.zig:128` |

##### `__libc_malloc` (`<unknown>`)

|  Change |    Delta |             % |         Time | Samples | Caller                        | Location                        |
| ------: | -------: | ------------: | -----------: | ------: | ----------------------------- | ------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |  10 → 0 | `posix_memalign`              | `<unknown>`                     |
|     new |  +6.00ms | 0.0% → 100.0% |  0ms → 6.0ms |   0 → 6 | `heap.c_allocator_impl.alloc` | `/opt/zig/lib/std/heap.zig:208` |

##### `cfree` (`<unknown>`)

|  Change |    Delta |            % |         Time | Samples | Caller                        | Location                        |
| ------: | -------: | -----------: | -----------: | ------: | ----------------------------- | ------------------------------- |
| removed | -17.00ms | 85.0% → 0.0% | 17.0ms → 0ms |  17 → 0 | `heap.CAllocator.alignedFree` | `/opt/zig/lib/std/heap.zig:183` |
|     new | +14.00ms | 0.0% → 82.4% | 0ms → 14.0ms |  0 → 14 | `heap.c_allocator_impl.free`  | `/opt/zig/lib/std/heap.zig:321` |

##### `brk` (`<unknown>`)

| Change |   Delta |      % |            Time | Samples | Caller               | Location    |
| -----: | ------: | -----: | --------------: | ------: | -------------------- | ----------- |
|  -6.7% | -1.00ms | 100.0% | 15.0ms → 14.0ms | 15 → 14 | `__default_morecore` | `<unknown>` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `zig.Ast.Render.renderBlock` (`/opt/zig/lib/std/zig/Ast/Render.zig:1998`)

|  Change |   Delta |            % |            Time |   Samples | Callee                                          | Location                                          |
| ------: | ------: | -----------: | --------------: | --------: | ----------------------------------------------- | ------------------------------------------------- |
|     new | +2.813s | 0.0% → 99.5% |     0ms → 2.81s | 0 → 2,813 | `zig.Ast.Render.finishRenderBlock`              | `/opt/zig/lib/std/zig/Ast/Render.zig:2023`        |
| removed | -3.00ms |  9.7% → 0.0% |     3.0ms → 0ms |     3 → 0 | `zig.Ast.Render.AutoIndentingStream.pushIndent` | `/opt/zig/lib/std/zig/Ast/Render.zig:3649`        |
|     new | +3.00ms |  0.0% → 0.1% |     0ms → 3.0ms |     0 → 3 | `zig.Ast.firstToken`                            | `/opt/zig/lib/std/zig/Ast.zig:604`                |
|   +9.5% | +2.00ms | 67.7% → 0.8% | 21.0ms → 23.0ms |   21 → 23 | `zig.Ast.Render.renderToken`                    | `/opt/zig/lib/std/zig/Ast/Render.zig:2844 → 2720` |
|  -66.7% | -2.00ms | 9.7% → <0.1% |   3.0ms → 1.0ms |     3 → 1 | `zig.Ast.nodeMainToken`                         | `/opt/zig/lib/std/zig/Ast.zig:100`                |

##### `zig.Ast.parseTokens` (`/opt/zig/lib/std/zig/Ast.zig:168`)

| Change |     Delta |            % |          Time | Samples | Callee                                                              | Location                                    |
| -----: | --------: | -----------: | ------------: | ------: | ------------------------------------------------------------------- | ------------------------------------------- |
|    new | +583.00ms | 0.0% → 75.9% | 0ms → 583.0ms | 0 → 583 | `zig.Parse.parseRoot`                                               | `/opt/zig/lib/std/zig/Parse.zig:192`        |
|    new | +185.00ms | 0.0% → 24.1% | 0ms → 185.0ms | 0 → 185 | `multi_array_list.MultiArrayList(zig.Ast.Node).ensureTotalCapacity` | `/opt/zig/lib/std/multi_array_list.zig:514` |

##### `profile.main` (`./profile.zig:11`)

|  Change |     Delta |             % |          Time |       Samples | Callee                                   | Location                                 |
| ------: | --------: | ------------: | ------------: | ------------: | ---------------------------------------- | ---------------------------------------- |
|  +34.0% | +393.00ms | 21.9% → 26.3% | 1.15s → 1.54s | 1,155 → 1,548 | `zig.Ast.parse`                          | `/opt/zig/lib/std/zig/Ast.zig:145`       |
|   +4.9% | +197.00ms | 76.6% → 72.0% | 4.04s → 4.24s | 4,043 → 4,240 | `zig.Ast.renderAlloc`                    | `/opt/zig/lib/std/zig/Ast.zig:206 → 217` |
|     new |  +70.00ms |   0.0% → 1.2% |  0ms → 70.0ms |        0 → 70 | `Io.Dir.readFileAllocOptions__anon_2739` | `/opt/zig/lib/std/Io/Dir.zig:1346`       |
| removed |  -54.00ms |   1.0% → 0.0% |  54.0ms → 0ms |        54 → 0 | `fs.Dir.readFileAllocOptions__anon_2384` | `/opt/zig/lib/std/fs/Dir.zig:1997`       |
|     new |  +15.00ms |   0.0% → 0.3% |  0ms → 15.0ms |        0 → 15 | `Io.Dir.Walker.next`                     | `/opt/zig/lib/std/Io/Dir.zig:365`        |

##### `start.callMain` (`/opt/zig/lib/std/start.zig:696`)

|  Change |     Delta |              % |          Time |       Samples | Callee                         | Location                                 |
| ------: | --------: | -------------: | ------------: | ------------: | ------------------------------ | ---------------------------------------- |
|  +11.6% | +611.00ms | 99.8% → 100.0% | 5.27s → 5.88s | 5,276 → 5,887 | `profile.main`                 | `./profile.zig:12 → 11`                  |
| removed |  -10.00ms |    0.2% → 0.0% |  10.0ms → 0ms |        10 → 0 | `(anonymous)`                  | `<unknown>`                              |
| removed |   -1.00ms |   <0.1% → 0.0% |   1.0ms → 0ms |         1 → 0 | `zig.Ast.firstToken`           | `/opt/zig/lib/std/zig/Ast.zig:596`       |
|     new |   +1.00ms |   0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `zig.tokenizer.Tokenizer.next` | `/opt/zig/lib/std/zig/tokenizer.zig:396` |

##### `start.callMainWithArgs` (`/opt/zig/lib/std/start.zig:629`)

| Change |     Delta |      % |          Time |       Samples | Callee           | Location                               |
| -----: | --------: | -----: | ------------: | ------------: | ---------------- | -------------------------------------- |
| +11.4% | +601.00ms | 100.0% | 5.28s → 5.88s | 5,287 → 5,888 | `start.callMain` | `/opt/zig/lib/std/start.zig:613 → 696` |

##### `main` (`/opt/zig/lib/std/start.zig:641`)

| Change |     Delta |      % |          Time |       Samples | Callee                   | Location                               |
| -----: | --------: | -----: | ------------: | ------------: | ------------------------ | -------------------------------------- |
| +11.4% | +601.00ms | 100.0% | 5.28s → 5.88s | 5,287 → 5,888 | `start.callMainWithArgs` | `/opt/zig/lib/std/start.zig:580 → 629` |

##### `(anonymous)` (`<unknown>`)

| Change |     Delta |            % |            Time |       Samples | Callee        | Location                               |
| -----: | --------: | -----------: | --------------: | ------------: | ------------- | -------------------------------------- |
| +11.4% | +601.00ms |       100.0% |   5.28s → 5.88s | 5,287 → 5,888 | `main`        | `/opt/zig/lib/std/start.zig:590 → 641` |
| +27.8% |   +5.00ms |  0.3% → 0.4% | 18.0ms → 23.0ms |       18 → 23 | `(anonymous)` | `<unknown>`                            |
|    new |   +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |         0 → 1 | `mmap`        | `<unknown>`                            |

##### `__libc_start_main` (`<unknown>`)

| Change |     Delta |      % |          Time |       Samples | Callee        | Location    |
| -----: | --------: | -----: | ------------: | ------------: | ------------- | ----------- |
| +11.4% | +601.00ms | 100.0% | 5.28s → 5.88s | 5,287 → 5,888 | `(anonymous)` | `<unknown>` |

##### `_start` (`/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)

| Change |     Delta |      % |          Time |       Samples | Callee              | Location    |
| -----: | --------: | -----: | ------------: | ------------: | ------------------- | ----------- |
| +11.4% | +601.00ms | 100.0% | 5.28s → 5.88s | 5,287 → 5,888 | `__libc_start_main` | `<unknown>` |

##### `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`)

|  Change |     Delta |             % |              Time |   Samples | Callee                                                                                | Location                                          |
| ------: | --------: | ------------: | ----------------: | --------: | ------------------------------------------------------------------------------------- | ------------------------------------------------- |
|     new | +768.00ms |  0.0% → 49.6% |     0ms → 768.0ms |   0 → 768 | `zig.Ast.parseTokens`                                                                 | `/opt/zig/lib/std/zig/Ast.zig:168`                |
| removed | -482.00ms |  41.7% → 0.0% |     482.0ms → 0ms |   482 → 0 | `zig.Parse.parseRoot`                                                                 | `/opt/zig/lib/std/zig/Parse.zig:192`              |
|     new |  +77.00ms |   0.0% → 5.0% |      0ms → 77.0ms |    0 → 77 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).ensureTotalCapacity` | `/opt/zig/lib/std/multi_array_list.zig:514`       |
|   +9.8% |  +52.00ms | 45.7% → 37.5% | 528.0ms → 580.0ms | 528 → 580 | `zig.tokenizer.Tokenizer.next`                                                        | `/opt/zig/lib/std/zig/tokenizer.zig:395 → 396`    |
|  -21.7% |  -23.00ms |   9.2% → 5.4% |  106.0ms → 83.0ms |  106 → 83 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).append`              | `/opt/zig/lib/std/multi_array_list.zig:252 → 273` |

##### `mem.Allocator.allocBytesWithAlignment__anon_10001` (`/opt/zig/lib/std/mem/Allocator.zig:289`)

| Change |     Delta |            % |          Time | Samples | Callee                   | Location                                 |
| -----: | --------: | -----------: | ------------: | ------: | ------------------------ | ---------------------------------------- |
|    new | +292.00ms | 0.0% → 99.0% | 0ms → 292.0ms | 0 → 292 | `memset`                 | `/opt/zig/lib/compiler_rt.zig:677`       |
|    new |   +3.00ms |  0.0% → 1.0% |   0ms → 3.0ms |   0 → 3 | `mem.Allocator.rawAlloc` | `/opt/zig/lib/std/mem/Allocator.zig:141` |

##### `mem.Allocator.allocWithSizeAndAlignment__anon_9851` (`/opt/zig/lib/std/mem/Allocator.zig:278`)

| Change |     Delta |             % |          Time | Samples | Callee                                              | Location                                 |
| -----: | --------: | ------------: | ------------: | ------: | --------------------------------------------------- | ---------------------------------------- |
|    new | +291.00ms | 0.0% → 100.0% | 0ms → 291.0ms | 0 → 291 | `mem.Allocator.allocBytesWithAlignment__anon_10001` | `/opt/zig/lib/std/mem/Allocator.zig:289` |

##### `mem.Allocator.alignedAlloc__anon_9848` (`/opt/zig/lib/std/mem/Allocator.zig:255`)

| Change |     Delta |             % |          Time | Samples | Callee                                   | Location                                 |
| -----: | --------: | ------------: | ------------: | ------: | ---------------------------------------- | ---------------------------------------- |
|    new | +291.00ms | 0.0% → 100.0% | 0ms → 291.0ms | 0 → 291 | `mem.Allocator.allocAdvancedWithRetAddr` | `/opt/zig/lib/std/mem/Allocator.zig:265` |

##### `mem.Allocator.allocAdvancedWithRetAddr` (`/opt/zig/lib/std/mem/Allocator.zig:265`)

|  Change |     Delta |            % |          Time | Samples | Callee                                                | Location                                 |
| ------: | --------: | -----------: | ------------: | ------: | ----------------------------------------------------- | ---------------------------------------- |
|     new | +291.00ms | 0.0% → 95.4% | 0ms → 291.0ms | 0 → 291 | `mem.Allocator.allocWithSizeAndAlignment__anon_9851`  | `/opt/zig/lib/std/mem/Allocator.zig:278` |
| removed |  -12.00ms | 75.0% → 0.0% |  12.0ms → 0ms |  12 → 0 | `mem.Allocator.allocWithSizeAndAlignment__anon_9289`  | `/opt/zig/lib/std/mem/Allocator.zig:261` |
|     new |   +5.00ms |  0.0% → 1.6% |   0ms → 5.0ms |   0 → 5 | `mem.Allocator.allocWithSizeAndAlignment__anon_10624` | `/opt/zig/lib/std/mem/Allocator.zig:278` |
|     new |   +5.00ms |  0.0% → 1.6% |   0ms → 5.0ms |   0 → 5 | `mem.Allocator.allocWithSizeAndAlignment__anon_31645` | `/opt/zig/lib/std/mem/Allocator.zig:278` |
|     new |   +4.00ms |  0.0% → 1.3% |   0ms → 4.0ms |   0 → 4 | `mem.Allocator.allocWithSizeAndAlignment__anon_32916` | `/opt/zig/lib/std/mem/Allocator.zig:278` |

##### `zig.Ast.Render.renderExpression` (`/opt/zig/lib/std/zig/Ast/Render.zig:314`)

|   Change |     Delta |             % |             Time |       Samples | Callee                             | Location                                          |
| -------: | --------: | ------------: | ---------------: | ------------: | ---------------------------------- | ------------------------------------------------- |
| +9019.4% |   +2.796s |  0.8% → 68.7% |   31.0ms → 2.82s |    31 → 2,827 | `zig.Ast.Render.renderBlock`       | `/opt/zig/lib/std/zig/Ast/Render.zig:1942 → 1998` |
|  removed |   -2.687s |  69.4% → 0.0% |      2.68s → 0ms |     2,687 → 0 | `zig.Ast.Render.finishRenderBlock` | `/opt/zig/lib/std/zig/Ast/Render.zig:1967`        |
| +1013.6% | +223.00ms |   0.6% → 6.0% | 22.0ms → 245.0ms |      22 → 245 | `zig.Ast.Render.renderFor`         | `/opt/zig/lib/std/zig/Ast/Render.zig:1403 → 1522` |
|  removed | -221.00ms |   5.7% → 0.0% |    221.0ms → 0ms |       221 → 0 | `zig.Ast.Render.renderThenElse`    | `/opt/zig/lib/std/zig/Ast/Render.zig:1340`        |
|   +19.3% | +217.00ms | 29.1% → 32.7% |    1.12s → 1.34s | 1,127 → 1,344 | `zig.Ast.Render.renderExpression`  | `/opt/zig/lib/std/zig/Ast/Render.zig:314`         |

##### `zig.Ast.Render.renderFor` (`/opt/zig/lib/std/zig/Ast/Render.zig:1522`)

| Change |     Delta |            % |            Time | Samples | Callee                           | Location                                          |
| -----: | --------: | -----------: | --------------: | ------: | -------------------------------- | ------------------------------------------------- |
|    new | +219.00ms | 0.0% → 89.4% |   0ms → 219.0ms | 0 → 219 | `zig.Ast.Render.renderThenElse`  | `/opt/zig/lib/std/zig/Ast/Render.zig:1455`        |
| +57.1% |   +8.00ms | 63.6% → 9.0% | 14.0ms → 22.0ms | 14 → 22 | `zig.Ast.Render.renderParamList` | `/opt/zig/lib/std/zig/Ast/Render.zig:2728 → 2600` |
| -50.0% |   -2.00ms | 18.2% → 0.8% |   4.0ms → 2.0ms |   4 → 2 | `zig.Ast.Render.renderToken`     | `/opt/zig/lib/std/zig/Ast/Render.zig:2844 → 2720` |

##### `zig.Ast.Render.renderExpressionComma` (`/opt/zig/lib/std/zig/Ast/Render.zig:2655`)

|   Change |     Delta |             % |            Time | Samples | Callee                            | Location                                   |
| -------: | --------: | ------------: | --------------: | ------: | --------------------------------- | ------------------------------------------ |
| +5566.7% | +167.00ms | 13.0% → 71.1% | 3.0ms → 170.0ms | 3 → 170 | `zig.Ast.Render.renderExpression` | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |
|      new |  +21.00ms |   0.0% → 8.8% |    0ms → 21.0ms |  0 → 21 | `zig.Ast.Render.renderIdentifier` | `/opt/zig/lib/std/zig/Ast/Render.zig:2812` |
|      new |  +11.00ms |   0.0% → 4.6% |    0ms → 11.0ms |  0 → 11 | `zig.Ast.Render.renderToken`      | `/opt/zig/lib/std/zig/Ast/Render.zig:2720` |
|    +5.6% |   +1.00ms |  78.3% → 7.9% | 18.0ms → 19.0ms | 18 → 19 | `zig.Ast.lastToken`               | `/opt/zig/lib/std/zig/Ast.zig:874 → 881`   |

##### `zig.Ast.Render.renderTree` (`/opt/zig/lib/std/zig/Ast/Render.zig:86`)

| Change |     Delta |            % |          Time |       Samples | Callee                                   | Location                                   |
| -----: | --------: | -----------: | ------------: | ------------: | ---------------------------------------- | ------------------------------------------ |
|  +4.8% | +195.00ms |        99.9% | 4.04s → 4.23s | 4,040 → 4,235 | `zig.Ast.Render.renderMembers`           | `/opt/zig/lib/std/zig/Ast/Render.zig:122`  |
|    new |   +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `zig.Ast.Render.renderExtraNewlineToken` | `/opt/zig/lib/std/zig/Ast/Render.zig:3080` |
|    new |   +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `zig.Ast.Render.renderComments`          | `/opt/zig/lib/std/zig/Ast/Render.zig:3011` |

##### `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`)

| Change |     Delta |      % |          Time |       Samples | Callee                      | Location                                 |
| -----: | --------: | -----: | ------------: | ------------: | --------------------------- | ---------------------------------------- |
|  +4.9% | +197.00ms | 100.0% | 4.04s → 4.24s | 4,043 → 4,240 | `zig.Ast.Render.renderTree` | `/opt/zig/lib/std/zig/Ast/Render.zig:86` |

##### `zig.Ast.renderAlloc` (`/opt/zig/lib/std/zig/Ast.zig:217`)

| Change |     Delta |      % |          Time |       Samples | Callee           | Location                                 |
| -----: | --------: | -----: | ------------: | ------------: | ---------------- | ---------------------------------------- |
|  +4.9% | +197.00ms | 100.0% | 4.04s → 4.24s | 4,043 → 4,240 | `zig.Ast.render` | `/opt/zig/lib/std/zig/Ast.zig:217 → 228` |

##### `zig.Ast.Render.renderMembers` (`/opt/zig/lib/std/zig/Ast/Render.zig:122`)

|  Change |     Delta |             % |              Time |       Samples | Callee                               | Location                                          |
| ------: | --------: | ------------: | ----------------: | ------------: | ------------------------------------ | ------------------------------------------------- |
|   +5.5% | +191.00ms | 86.2% → 86.7% |     3.48s → 3.67s | 3,482 → 3,673 | `zig.Ast.Render.renderMember`        | `/opt/zig/lib/std/zig/Ast/Render.zig:141`         |
|   +0.9% |   +5.00ms | 13.2% → 12.7% | 534.0ms → 539.0ms |     534 → 539 | `zig.Ast.Render.renderExpression`    | `/opt/zig/lib/std/zig/Ast/Render.zig:314`         |
|  -14.3% |   -3.00ms |   0.5% → 0.4% |   21.0ms → 18.0ms |       21 → 18 | `zig.Ast.Render.renderExtraNewline`  | `/opt/zig/lib/std/zig/Ast/Render.zig:3175 → 3075` |
|     new |   +2.00ms |  0.0% → <0.1% |       0ms → 2.0ms |         0 → 2 | `zig.Ast.firstToken`                 | `/opt/zig/lib/std/zig/Ast.zig:604`                |
| removed |   -1.00ms |  <0.1% → 0.0% |       1.0ms → 0ms |         1 → 0 | `zig.Ast.Render.tokenSliceForRender` | `/opt/zig/lib/std/zig/Ast/Render.zig:3268`        |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).ensureTotalCapacity` (`/opt/zig/lib/std/multi_array_list.zig:514`)

| Change |     Delta |            % |          Time | Samples | Callee                                                      | Location                                    |
| -----: | --------: | -----------: | ------------: | ------: | ----------------------------------------------------------- | ------------------------------------------- |
|    new | +186.00ms | 0.0% → 89.9% | 0ms → 186.0ms | 0 → 186 | `multi_array_list.MultiArrayList(zig.Ast.Node).setCapacity` | `/opt/zig/lib/std/multi_array_list.zig:540` |

##### `__libc_realloc` (`<unknown>`)

| Change |    Delta |            % |         Time | Samples | Callee        | Location    |
| -----: | -------: | -----------: | -----------: | ------: | ------------- | ----------- |
|    new | +25.00ms | 0.0% → 96.2% | 0ms → 25.0ms |  0 → 25 | `(anonymous)` | `<unknown>` |

##### `zig.Ast.Render.renderToken` (`/opt/zig/lib/std/zig/Ast/Render.zig:2720`)

| Change |     Delta |             % |              Time |   Samples | Callee                                        | Location                                          |
| -----: | --------: | ------------: | ----------------: | --------: | --------------------------------------------- | ------------------------------------------------- |
| -18.3% | -148.00ms | 45.3% → 41.0% | 809.0ms → 661.0ms | 809 → 661 | `zig.Ast.Render.tokenSliceForRender`          | `/opt/zig/lib/std/zig/Ast/Render.zig:3268 → 3168` |
| -21.7% |  -90.00ms | 23.2% → 20.2% | 415.0ms → 325.0ms | 415 → 325 | `zig.Ast.Render.AutoIndentingStream.writeAll` | `/opt/zig/lib/std/zig/Ast/Render.zig:3496 → 3353` |
| +15.0% |  +77.00ms | 28.8% → 36.7% | 514.0ms → 591.0ms | 514 → 591 | `zig.Ast.Render.renderSpace`                  | `/opt/zig/lib/std/zig/Ast/Render.zig:2862 → 2738` |
| +43.8% |  +14.00ms |   1.8% → 2.9% |   32.0ms → 46.0ms |   32 → 46 | `zig.Ast.tokenSlice`                          | `/opt/zig/lib/std/zig/Ast.zig:265 → 276`          |
|    new |   +1.00ms |   0.0% → 0.1% |       0ms → 1.0ms |     0 → 1 | `mem.findScalarPos__anon_6382`                | `/opt/zig/lib/std/mem.zig:1241`                   |

##### `array_list.Aligned(u8,null).ensureUnusedCapacity` (`/opt/zig/lib/std/array_list.zig:1241`)

|  Change |     Delta |            % |          Time | Samples | Callee                                            | Location                               |
| ------: | --------: | -----------: | ------------: | ------: | ------------------------------------------------- | -------------------------------------- |
| removed | -149.00ms | 90.9% → 0.0% | 149.0ms → 0ms | 149 → 0 | `(anonymous)`                                     | `<unknown>`                            |
| removed |  -15.00ms |  9.1% → 0.0% |  15.0ms → 0ms |  15 → 0 | `array_list.Aligned(u8,null).ensureTotalCapacity` | `/opt/zig/lib/std/array_list.zig:1205` |

##### `zig.Ast.Render.renderBuiltinCall` (`/opt/zig/lib/std/zig/Ast/Render.zig:1669`)

|  Change |    Delta |              % |            Time | Samples | Callee                            | Location                                          |
| ------: | -------: | -------------: | --------------: | ------: | --------------------------------- | ------------------------------------------------- |
| removed | -91.00ms |   48.4% → 0.0% |    91.0ms → 0ms |  91 → 0 | `zig.Ast.Render.renderExpression` | `/opt/zig/lib/std/zig/Ast/Render.zig:314`         |
|  -43.5% | -27.00ms | 33.0% → 100.0% | 62.0ms → 35.0ms | 62 → 35 | `zig.Ast.Render.renderToken`      | `/opt/zig/lib/std/zig/Ast/Render.zig:2844 → 2720` |
| removed | -22.00ms |   11.7% → 0.0% |    22.0ms → 0ms |  22 → 0 | `zig.Ast.Render.renderIdentifier` | `/opt/zig/lib/std/zig/Ast/Render.zig:2926`        |
| removed | -21.00ms |   11.2% → 0.0% |    21.0ms → 0ms |  21 → 0 | `zig.Ast.firstToken`              | `/opt/zig/lib/std/zig/Ast.zig:596`                |
| removed |  -7.00ms |    3.7% → 0.0% |     7.0ms → 0ms |   7 → 0 | `zig.Ast.lastToken`               | `/opt/zig/lib/std/zig/Ast.zig:874`                |

##### `Io.Writer.Allocating.drain` (`/opt/zig/lib/std/Io/Writer.zig:2698`)

|  Change |     Delta |            % |          Time | Samples | Callee                                                  | Location                               |
| ------: | --------: | -----------: | ------------: | ------: | ------------------------------------------------------- | -------------------------------------- |
| removed | -164.00ms | 96.5% → 0.0% | 164.0ms → 0ms | 164 → 0 | `array_list.Aligned(u8,null).ensureUnusedCapacity`      | `/opt/zig/lib/std/array_list.zig:1241` |
|     new |  +17.00ms | 0.0% → 85.0% |  0ms → 17.0ms |  0 → 17 | `Io.Writer.Allocating.ensureUnusedCapacity`             | `/opt/zig/lib/std/Io/Writer.zig:2615`  |
| removed |   -3.00ms |  1.8% → 0.0% |   3.0ms → 0ms |   3 → 0 | `array_list.Aligned(u8,null).appendSliceAssumeCapacity` | `/opt/zig/lib/std/array_list.zig:982`  |

##### `zig.Ast.Render.AutoIndentingStream.writeAll` (`/opt/zig/lib/std/zig/Ast/Render.zig:3353`)

|  Change |    Delta |             % |              Time |   Samples | Callee                                           | Location                                          |
| ------: | -------: | ------------: | ----------------: | --------: | ------------------------------------------------ | ------------------------------------------------- |
|  -34.7% | -83.00ms | 52.2% → 44.8% | 239.0ms → 156.0ms | 239 → 156 | `Io.Writer.writeAll`                             | `/opt/zig/lib/std/Io/Writer.zig:530 → 549`        |
| removed | -81.00ms |  17.7% → 0.0% |      81.0ms → 0ms |    81 → 0 | `(anonymous)`                                    | `<unknown>`                                       |
|     new | +53.00ms |  0.0% → 15.2% |      0ms → 53.0ms |    0 → 53 | `memcpy`                                         | `/opt/zig/lib/compiler_rt/memcpy.zig:37`          |
|   -2.3% |  -2.00ms | 19.2% → 24.7% |   88.0ms → 86.0ms |   88 → 86 | `zig.Ast.Render.AutoIndentingStream.applyIndent` | `/opt/zig/lib/std/zig/Ast/Render.zig:3671 → 3516` |

##### `mem.indexOfPos__anon_23640` (`/opt/zig/lib/std/mem.zig:1513`)

|  Change |    Delta |            % |         Time | Samples | Callee                             | Location                        |
| ------: | -------: | -----------: | -----------: | ------: | ---------------------------------- | ------------------------------- |
| removed | -88.00ms | 90.7% → 0.0% | 88.0ms → 0ms |  88 → 0 | `mem.indexOfPosLinear__anon_26200` | `/opt/zig/lib/std/mem.zig:1426` |
| removed |  -2.00ms |  2.1% → 0.0% |  2.0ms → 0ms |   2 → 0 | `mem.indexOfScalarPos__anon_8996`  | `/opt/zig/lib/std/mem.zig:1258` |

##### `Io.Writer.write` (`/opt/zig/lib/std/Io/Writer.zig:532`)

| Change |     Delta |             % |             Time |  Samples | Callee                                            | Location                                     |
| -----: | --------: | ------------: | ---------------: | -------: | ------------------------------------------------- | -------------------------------------------- |
| -87.6% | -113.00ms | 68.6% → 17.4% | 129.0ms → 16.0ms | 129 → 16 | `Io.Writer.Allocating.drain`                      | `/opt/zig/lib/std/Io/Writer.zig:2625 → 2698` |
|    new |   +1.00ms |   0.0% → 1.1% |      0ms → 1.0ms |    0 → 1 | `Io.Writer.Allocating.ensureTotalCapacityPrecise` | `/opt/zig/lib/std/Io/Writer.zig:2627`        |

##### `mem.indexOf__anon_18425` (`/opt/zig/lib/std/mem.zig:1407`)

|  Change |    Delta |             % |         Time | Samples | Callee                       | Location                        |
| ------: | -------: | ------------: | -----------: | ------: | ---------------------------- | ------------------------------- |
| removed | -95.00ms | 100.0% → 0.0% | 95.0ms → 0ms |  95 → 0 | `mem.indexOfPos__anon_23640` | `/opt/zig/lib/std/mem.zig:1513` |

##### `Io.Writer.writeAll` (`/opt/zig/lib/std/Io/Writer.zig:549`)

| Change |    Delta |             % |             Time |  Samples | Callee            | Location                                   |
| -----: | -------: | ------------: | ---------------: | -------: | ----------------- | ------------------------------------------ |
| -51.1% | -96.00ms | 75.2% → 57.9% | 188.0ms → 92.0ms | 188 → 92 | `Io.Writer.write` | `/opt/zig/lib/std/Io/Writer.zig:518 → 532` |

##### `zig.Ast.firstToken` (`/opt/zig/lib/std/zig/Ast.zig:604`)

| Change |    Delta |             % |            Time | Samples | Callee                          | Location                                   |
| -----: | -------: | ------------: | --------------: | ------: | ------------------------------- | ------------------------------------------ |
| -87.8% | -43.00ms |  23.9% → 5.2% |  49.0ms → 6.0ms |  49 → 6 | `zig.Ast.nodeTag`               | `/opt/zig/lib/std/zig/Ast.zig:96`          |
| -43.9% | -25.00ms | 27.8% → 27.6% | 57.0ms → 32.0ms | 57 → 32 | `zig.Ast.nodeMainToken`         | `/opt/zig/lib/std/zig/Ast.zig:100`         |
| -61.5% | -16.00ms |  12.7% → 8.6% | 26.0ms → 10.0ms | 26 → 10 | `zig.Ast.nodeData`              | `/opt/zig/lib/std/zig/Ast.zig:104`         |
| +40.0% |  +2.00ms |   2.4% → 6.0% |   5.0ms → 7.0ms |   5 → 7 | `zig.Ast.fullSwitchCase`        | `/opt/zig/lib/std/zig/Ast.zig:2479 → 2413` |
| -50.0% |  -1.00ms |   1.0% → 0.9% |   2.0ms → 1.0ms |   2 → 1 | `zig.Ast.isTokenPrecededByTags` | `/opt/zig/lib/std/zig/Ast.zig:108`         |

##### `mem.indexOfPosLinear__anon_26200` (`/opt/zig/lib/std/mem.zig:1426`)

|  Change |    Delta |            % |         Time | Samples | Callee               | Location                       |
| ------: | -------: | -----------: | -----------: | ------: | -------------------- | ------------------------------ |
| removed | -61.00ms | 69.3% → 0.0% | 61.0ms → 0ms |  61 → 0 | `mem.eql__anon_3429` | `/opt/zig/lib/std/mem.zig:693` |

##### `zig.Ast.Render.tokenSliceForRender` (`/opt/zig/lib/std/zig/Ast/Render.zig:3168`)

|  Change |     Delta |             % |              Time |       Samples | Callee                           | Location                                 |
| ------: | --------: | ------------: | ----------------: | ------------: | -------------------------------- | ---------------------------------------- |
|  -10.4% | -121.00ms | 77.1% → 72.5% |     1.16s → 1.04s | 1,169 → 1,048 | `zig.Ast.tokenSlice`             | `/opt/zig/lib/std/zig/Ast.zig:265 → 276` |
|  +13.6% |  +16.00ms |   7.8% → 9.3% | 118.0ms → 134.0ms |     118 → 134 | `zig.tokenizer.Token.Tag.lexeme` | `/opt/zig/lib/std/zig/tokenizer.zig:186` |
|  +32.4% |  +11.00ms |   2.2% → 3.1% |   34.0ms → 45.0ms |       34 → 45 | `zig.Ast.tokenTag`               | `/opt/zig/lib/std/zig/Ast.zig:88`        |
| +200.0% |   +2.00ms |   0.1% → 0.2% |     1.0ms → 3.0ms |         1 → 3 | `mem.trimEnd__anon_28242`        | `/opt/zig/lib/std/mem.zig:1216 → 1191`   |
|     new |   +1.00ms |   0.0% → 0.1% |       0ms → 1.0ms |         0 → 1 | `zig.tokenizer.Tokenizer.next`   | `/opt/zig/lib/std/zig/tokenizer.zig:396` |

##### `zig.Ast.Render.renderExtraNewline` (`/opt/zig/lib/std/zig/Ast/Render.zig:3075`)

|  Change |    Delta |             % |              Time |   Samples | Callee                                   | Location                                          |
| ------: | -------: | ------------: | ----------------: | --------: | ---------------------------------------- | ------------------------------------------------- |
|  -22.0% | -36.00ms | 68.0% → 72.3% | 164.0ms → 128.0ms | 164 → 128 | `zig.Ast.Render.renderExtraNewlineToken` | `/opt/zig/lib/std/zig/Ast/Render.zig:3180 → 3080` |
|  -42.9% | -30.00ms | 29.0% → 22.6% |   70.0ms → 40.0ms |   70 → 40 | `zig.Ast.firstToken`                     | `/opt/zig/lib/std/zig/Ast.zig:596 → 604`          |
|  -33.3% |  -1.00ms |   1.2% → 1.1% |     3.0ms → 2.0ms |     3 → 2 | `zig.Ast.Render.renderExtraNewlineToken` | `/opt/zig/lib/std/mem.zig:3180 → 3080`            |
| removed |  -1.00ms |   0.4% → 0.0% |       1.0ms → 0ms |     1 → 0 | `zig.Ast.Render.tokenSliceForRender`     | `/opt/zig/lib/std/zig/Ast/Render.zig:3268`        |
| removed |  -1.00ms |   0.4% → 0.0% |       1.0ms → 0ms |     1 → 0 | `zig.Ast.firstToken`                     | `/opt/zig/lib/std/multi_array_list.zig:596`       |

##### `mem.indexOfScalarPos__anon_8996` (`/opt/zig/lib/std/mem.zig:1258`)

|  Change |   Delta |           % |        Time | Samples | Callee                       | Location                        |
| ------: | ------: | ----------: | ----------: | ------: | ---------------------------- | ------------------------------- |
| removed | -4.00ms | 6.3% → 0.0% | 4.0ms → 0ms |   4 → 0 | `simd.firstTrue__anon_14559` | `/opt/zig/lib/std/simd.zig:305` |

##### `mem.eql__anon_3429` (`/opt/zig/lib/std/mem.zig:693`)

|  Change |    Delta |            % |         Time | Samples | Callee         | Location                       |
| ------: | -------: | -----------: | -----------: | ------: | -------------- | ------------------------------ |
| removed | -61.00ms | 98.4% → 0.0% | 61.0ms → 0ms |  61 → 0 | `mem.eqlBytes` | `/opt/zig/lib/std/mem.zig:729` |

##### `mem.indexOfScalar__anon_5905` (`/opt/zig/lib/std/mem.zig:1244`)

|  Change |    Delta |            % |         Time | Samples | Callee                            | Location                        |
| ------: | -------: | -----------: | -----------: | ------: | --------------------------------- | ------------------------------- |
| removed | -60.00ms | 96.8% → 0.0% | 60.0ms → 0ms |  60 → 0 | `mem.indexOfScalarPos__anon_8996` | `/opt/zig/lib/std/mem.zig:1258` |

##### `zig.Ast.Render.renderIdentifier` (`/opt/zig/lib/std/zig/Ast/Render.zig:2812`)

|  Change |    Delta |             % |              Time |   Samples | Callee                                     | Location                                          |
| ------: | -------: | ------------: | ----------------: | --------: | ------------------------------------------ | ------------------------------------------------- |
|   -6.9% | -42.00ms | 41.4% → 40.2% | 605.0ms → 563.0ms | 605 → 563 | `zig.Ast.Render.tokenSliceForRender`       | `/opt/zig/lib/std/zig/Ast/Render.zig:3268 → 3168` |
|     new | +37.00ms |   0.0% → 2.6% |      0ms → 37.0ms |    0 → 37 | `array_hash_map.Custom.get`                | `/opt/zig/lib/std/array_hash_map.zig:613`         |
|   -4.5% | -33.00ms | 50.7% → 50.5% | 741.0ms → 708.0ms | 741 → 708 | `zig.Ast.Render.renderToken`               | `/opt/zig/lib/std/zig/Ast/Render.zig:2844 → 2720` |
| removed | -21.00ms |   1.4% → 0.0% |      21.0ms → 0ms |    21 → 0 | `array_hash_map.ArrayHashMapUnmanaged.get` | `/opt/zig/lib/std/array_hash_map.zig:1080`        |
|  +35.7% |  +5.00ms |   1.0% → 1.4% |   14.0ms → 19.0ms |   14 → 19 | `zig.Ast.tokenSlice`                       | `/opt/zig/lib/std/zig/Ast.zig:265 → 276`          |

##### `zig.Ast.Render.rowSize` (`/opt/zig/lib/std/zig/Ast/Render.zig:3402`)

|  Change |    Delta |            % |         Time | Samples | Callee                     | Location                            |
| ------: | -------: | -----------: | -----------: | ------: | -------------------------- | ----------------------------------- |
| removed | -32.00ms | 55.2% → 0.0% | 32.0ms → 0ms |  32 → 0 | `zig.Ast.tokensOnSameLine` | `/opt/zig/lib/std/zig/Ast.zig:1313` |
| removed | -17.00ms | 29.3% → 0.0% | 17.0ms → 0ms |  17 → 0 | `zig.Ast.firstToken`       | `/opt/zig/lib/std/zig/Ast.zig:596`  |
| removed |  -8.00ms | 13.8% → 0.0% |  8.0ms → 0ms |   8 → 0 | `zig.Ast.lastToken`        | `/opt/zig/lib/std/zig/Ast.zig:874`  |

##### `fs.Dir.readFileAllocOptions__anon_2384` (`/opt/zig/lib/std/fs/Dir.zig:1997`)

|  Change |    Delta |            % |         Time | Samples | Callee                                     | Location                           |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------------------------ | ---------------------------------- |
| removed | -28.00ms | 51.9% → 0.0% | 28.0ms → 0ms |  28 → 0 | `fs.File.readToEndAllocOptions__anon_2451` | `/opt/zig/lib/std/fs/File.zig:814` |
| removed | -19.00ms | 35.2% → 0.0% | 19.0ms → 0ms |  19 → 0 | `fs.Dir.openFile`                          | `/opt/zig/lib/std/fs/Dir.zig:818`  |
| removed |  -4.00ms |  7.4% → 0.0% |  4.0ms → 0ms |   4 → 0 | `fs.File.getEndPos`                        | `/opt/zig/lib/std/fs/File.zig:386` |
| removed |  -3.00ms |  5.6% → 0.0% |  3.0ms → 0ms |   3 → 0 | `fs.File.close`                            | `/opt/zig/lib/std/fs/File.zig:202` |

##### `posix_memalign` (`<unknown>`)

|  Change |    Delta |            % |         Time | Samples | Callee          | Location    |
| ------: | -------: | -----------: | -----------: | ------: | --------------- | ----------- |
| removed | -10.00ms | 71.4% → 0.0% | 10.0ms → 0ms |  10 → 0 | `__libc_malloc` | `<unknown>` |

##### `__libc_malloc` (`<unknown>`)

| Change |   Delta |              % |           Time | Samples | Callee        | Location    |
| -----: | ------: | -------------: | -------------: | ------: | ------------- | ----------- |
| -60.0% | -6.00ms | 100.0% → 66.7% | 10.0ms → 4.0ms |  10 → 4 | `(anonymous)` | `<unknown>` |

##### `cfree` (`<unknown>`)

| Change |   Delta |             % |            Time | Samples | Callee        | Location    |
| -----: | ------: | ------------: | --------------: | ------: | ------------- | ----------- |
| -22.2% | -4.00ms | 90.0% → 82.4% | 18.0ms → 14.0ms | 18 → 14 | `(anonymous)` | `<unknown>` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time spent in their leaf frame.

Common call stack: `profile.main` (`./profile.zig:11`) ← `start.callMain` (`/opt/zig/lib/std/start.zig:696`) ← `start.callMainWithArgs` (629) ← `main` (641) ← `(anonymous)` ← `__libc_start_main` ← `_start` (`/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)

|  Change |     Delta |            % |              Time |   Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------: | --------: | -----------: | ----------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|     new | +183.00ms |  0.0% → 3.1% |     0ms → 183.0ms |   0 → 183 | `memset` (`/opt/zig/lib/compiler_rt.zig:677`) ← `mem.Allocator.allocBytesWithAlignment__anon_10001` (`/opt/zig/lib/std/mem/Allocator.zig:289`) ← `mem.Allocator.allocWithSizeAndAlignment__anon_9851` (278) ← `mem.Allocator.allocAdvancedWithRetAddr` (265) ← `mem.Allocator.alignedAlloc__anon_9848` (255) ← `multi_array_list.MultiArrayList(zig.Ast.Node).setCapacity` (`/opt/zig/lib/std/multi_array_list.zig:540`) ← `multi_array_list.MultiArrayList(zig.Ast.Node).ensureTotalCapacity` (514) ← `zig.Ast.parseTokens` (`/opt/zig/lib/std/zig/Ast.zig:168`) ← `zig.Ast.parse` (145)                                                                                                                                                                                                                                                                                                                                            |
|     new |  +76.00ms |  0.0% → 1.3% |      0ms → 76.0ms |    0 → 76 | `memset` (`/opt/zig/lib/compiler_rt.zig:677`) ← `mem.Allocator.allocBytesWithAlignment__anon_10001` (`/opt/zig/lib/std/mem/Allocator.zig:289`) ← `mem.Allocator.allocWithSizeAndAlignment__anon_9851` (278) ← `mem.Allocator.allocAdvancedWithRetAddr` (265) ← `mem.Allocator.alignedAlloc__anon_9848` (255) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).setCapacity` (`/opt/zig/lib/std/multi_array_list.zig:540`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).ensureTotalCapacity` (514) ← `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`)                                                                                                                                                                                                                                                                                                                                      |
|  +11.4% |  +51.00ms |         8.5% | 447.0ms → 498.0ms | 447 → 498 | `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:396`) ← `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|     new |  +35.00ms |  0.0% → 0.6% |      0ms → 35.0ms |    0 → 35 | `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:396`) ← `zig.Ast.tokenSlice` (`/opt/zig/lib/std/zig/Ast.zig:276`) ← `zig.Ast.Render.hasComment` (`/opt/zig/lib/std/zig/Ast/Render.zig:2978`) ← `zig.Ast.Render.isOneLineContainerDecl` (2316) ← `zig.Ast.Render.renderContainerDecl` (2344) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1253) ← `zig.Ast.Render.renderVarDecl` (1235) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`) ← `zig.Ast.renderAlloc` (217)                                                                                                                                                                                                                                                                         |
|     new |  +29.00ms |  0.0% → 0.5% |      0ms → 29.0ms |    0 → 29 | `memset` (`/opt/zig/lib/compiler_rt.zig:677`) ← `mem.Allocator.allocBytesWithAlignment__anon_10001` (`/opt/zig/lib/std/mem/Allocator.zig:289`) ← `mem.Allocator.allocWithSizeAndAlignment__anon_9851` (278) ← `mem.Allocator.allocAdvancedWithRetAddr` (265) ← `mem.Allocator.alignedAlloc__anon_9848` (255) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).setCapacity` (`/opt/zig/lib/std/multi_array_list.zig:540`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).ensureTotalCapacity` (514) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).ensureUnusedCapacity` (533) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).append` (273) ← `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`)                                                                                                                                                      |
|     new |  +21.00ms |  0.0% → 0.4% |      0ms → 21.0ms |    0 → 21 | `openat` ← `Io.Threaded.dirOpenFilePosix` (`/opt/zig/lib/std/Io/Threaded.zig:4789`) ← `Io.Dir.openFile` (`/opt/zig/lib/std/Io/Dir.zig:577`) ← `Io.Dir.readFileAllocOptions__anon_2739` (1346)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|     new |  +19.00ms |  0.0% → 0.3% |      0ms → 19.0ms |    0 → 19 | `preadv` ← `Io.Threaded.fileReadPositionalPosix` (`/opt/zig/lib/std/Io/Threaded.zig:9766`) ← `Io.Threaded.fileReadPositional` (9881) ← `Io.File.Reader.readVecPositional` (`/opt/zig/lib/std/Io/File/Reader.zig:241`) ← `Io.File.Reader.readVec` (232) ← `Io.Reader.readVec` (`/opt/zig/lib/std/Io/Reader.zig:415`) ← `Io.Reader.readSliceShort` (675) ← `Io.Writer.Allocating.sendFile` (`/opt/zig/lib/std/Io/Writer.zig:2725`) ← `Io.Writer.sendFile` (919) ← `Io.File.Reader.streamMode` (`/opt/zig/lib/std/Io/File/Reader.zig:205`) ← `Io.File.Reader.stream` (200) ← `Io.Reader.stream` (`/opt/zig/lib/std/Io/Reader.zig:168`) ← `Io.Reader.appendRemainingAligned__anon_35672` (367) ← `Io.Reader.allocRemainingAlignedSentinel__anon_35655` (299) ← `Io.Dir.readFileAllocOptions__anon_2739` (`/opt/zig/lib/std/Io/Dir.zig:1346`)                                                                                             |
|  +73.9% |  +17.00ms |  0.4% → 0.7% |   23.0ms → 40.0ms |   23 → 40 | `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|     new |  +17.00ms |  0.0% → 0.3% |      0ms → 17.0ms |    0 → 17 | `zig.tokenizer.Token.Tag.lexeme` (`/opt/zig/lib/std/zig/tokenizer.zig:186`) ← `zig.Ast.Render.hasComment` (`/opt/zig/lib/std/zig/Ast/Render.zig:2978`) ← `zig.Ast.Render.isOneLineContainerDecl` (2316) ← `zig.Ast.Render.renderContainerDecl` (2344) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1253) ← `zig.Ast.Render.renderVarDecl` (1235) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`) ← `zig.Ast.renderAlloc` (217)                                                                                                                                                                                                                                                                                                                                   |
|     new |  +15.00ms |  0.0% → 0.3% |      0ms → 15.0ms |    0 → 15 | `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:396`) ← `zig.Ast.tokenSlice` (`/opt/zig/lib/std/zig/Ast.zig:276`) ← `zig.Ast.Render.hasComment` (`/opt/zig/lib/std/zig/Ast/Render.zig:2978`) ← `zig.Ast.Render.renderArrayInit` (2110) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1253) ← `zig.Ast.Render.renderVarDecl` (1235) ← `zig.Ast.Render.finishRenderBlock` (2023) ← `zig.Ast.Render.renderBlock` (1998) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`) ← `zig.Ast.renderAlloc` (217)                                                                                                                                                                                                                                        |
|     new |  +13.00ms |  0.0% → 0.2% |      0ms → 13.0ms |    0 → 13 | `memset` (`/opt/zig/lib/compiler_rt.zig:677`) ← `Io.Threaded.dirOpenFilePosix` (`/opt/zig/lib/std/Io/Threaded.zig:4789`) ← `Io.Dir.openFile` (`/opt/zig/lib/std/Io/Dir.zig:577`) ← `Io.Dir.readFileAllocOptions__anon_2739` (1346)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|     new |  +13.00ms |  0.0% → 0.2% |      0ms → 13.0ms |    0 → 13 | `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:396`) ← `zig.Ast.tokenSlice` (`/opt/zig/lib/std/zig/Ast.zig:276`) ← `zig.Ast.Render.tokenSliceForRender` (`/opt/zig/lib/std/zig/Ast/Render.zig:3168`) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderExpressionFixup` (948) ← `zig.Ast.Render.renderStructInit` (2051) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderExpressionComma` (2655) ← `zig.Ast.Render.renderArrayInit` (2110) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1253) ← `zig.Ast.Render.renderVarDecl` (1235) ← `zig.Ast.Render.finishRenderBlock` (2023) ← `zig.Ast.Render.renderBlock` (1998) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`) ← `zig.Ast.renderAlloc` (217) |
|     new |  +12.00ms |  0.0% → 0.2% |      0ms → 12.0ms |    0 → 12 | `mem.findScalarPos__anon_6382` (`/opt/zig/lib/std/mem.zig:1241`) ← `mem.findScalar__anon_6379` (1219) ← `zig.Ast.Render.hasComment` (`/opt/zig/lib/std/zig/Ast/Render.zig:2978`) ← `zig.Ast.Render.isOneLineContainerDecl` (2316) ← `zig.Ast.Render.renderContainerDecl` (2344) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1253) ← `zig.Ast.Render.renderVarDecl` (1235) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`) ← `zig.Ast.renderAlloc` (217)                                                                                                                                                                                                                                                                                                         |
|     new |  +12.00ms |  0.0% → 0.2% |      0ms → 12.0ms |    0 → 12 | `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:396`) ← `zig.Ast.tokenSlice` (`/opt/zig/lib/std/zig/Ast.zig:276`) ← `zig.Ast.Render.tokenSliceForRender` (`/opt/zig/lib/std/zig/Ast/Render.zig:3168`) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderExpressionFixup` (948) ← `zig.Ast.Render.renderStructInit` (2051) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderArrayInit` (2110) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1253) ← `zig.Ast.Render.renderVarDecl` (1235) ← `zig.Ast.Render.finishRenderBlock` (2023) ← `zig.Ast.Render.renderBlock` (1998) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`) ← `zig.Ast.renderAlloc` (217)                                                 |
| +220.0% |  +11.00ms |  0.1% → 0.3% |    5.0ms → 16.0ms |    5 → 16 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).appendAssumeCapacity` (`/opt/zig/lib/std/multi_array_list.zig:281`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).append` (273) ← `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| +900.0% |   +9.00ms | <0.1% → 0.2% |    1.0ms → 10.0ms |    1 → 10 | `zig.Ast.Render.renderExpressionComma` (`/opt/zig/lib/std/zig/Ast/Render.zig:2655`) ← `zig.Ast.Render.renderContainerField` (1577) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderContainerDecl` (2344) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1253) ← `zig.Ast.Render.renderVarDecl` (1235) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`) ← `zig.Ast.renderAlloc` (217)                                                                                                                                                                                                                                                                                                                                                                  |
|     new |   +9.00ms |  0.0% → 0.2% |       0ms → 9.0ms |     0 → 9 | `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:396`) ← `zig.Ast.tokenSlice` (`/opt/zig/lib/std/zig/Ast.zig:276`) ← `zig.Ast.Render.hasComment` (`/opt/zig/lib/std/zig/Ast/Render.zig:2978`) ← `zig.Ast.Render.renderStructInit` (2051) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderExpressionComma` (2655) ← `zig.Ast.Render.renderArrayInit` (2110) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1253) ← `zig.Ast.Render.renderVarDecl` (1235) ← `zig.Ast.Render.finishRenderBlock` (2023) ← `zig.Ast.Render.renderBlock` (1998) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`) ← `zig.Ast.renderAlloc` (217)                                                                                                   |
|     new |   +9.00ms |  0.0% → 0.2% |       0ms → 9.0ms |     0 → 9 | `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:396`) ← `zig.Ast.tokenSlice` (`/opt/zig/lib/std/zig/Ast.zig:276`) ← `zig.Ast.Render.hasComment` (`/opt/zig/lib/std/zig/Ast/Render.zig:2978`) ← `zig.Ast.Render.renderStructInit` (2051) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderArrayInit` (2110) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1253) ← `zig.Ast.Render.renderVarDecl` (1235) ← `zig.Ast.Render.finishRenderBlock` (2023) ← `zig.Ast.Render.renderBlock` (1998) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`) ← `zig.Ast.renderAlloc` (217)                                                                                                                                                   |
|     new |   +9.00ms |  0.0% → 0.2% |       0ms → 9.0ms |     0 → 9 | `zig.Ast.Render.hasComment` (`/opt/zig/lib/std/zig/Ast/Render.zig:2978`) ← `zig.Ast.Render.isOneLineContainerDecl` (2316) ← `zig.Ast.Render.renderContainerDecl` (2344) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1253) ← `zig.Ast.Render.renderVarDecl` (1235) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`) ← `zig.Ast.renderAlloc` (217)                                                                                                                                                                                                                                                                                                                                                                                                                 |
|     new |   +9.00ms |  0.0% → 0.2% |       0ms → 9.0ms |     0 → 9 | `brk` ← `__default_morecore` ← `(anonymous)` ← `(anonymous)` ← `cfree` ← `heap.c_allocator_impl.free` (`/opt/zig/lib/std/heap.zig:321`) ← `mem.Allocator.rawFree` (`/opt/zig/lib/std/mem/Allocator.zig:159`) ← `mem.Allocator.free__anon_2981` (443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

### Improvements

Call stacks with the largest decrease in time spent in their leaf frame.

Common call stack: `start.callMain` (`/opt/zig/lib/std/start.zig:696`) ← `start.callMainWithArgs` (629) ← `main` (641) ← `(anonymous)` ← `__libc_start_main` ← `_start` (`/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)

|  Change |    Delta |           % |            Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------: | -------: | ----------: | --------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -29.00ms | 0.5% → 0.0% |    29.0ms → 0ms |  29 → 0 | `(anonymous)` ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).ensureUnusedCapacity` (`/opt/zig/lib/std/multi_array_list.zig:482`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).append` (252) ← `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`) ← `profile.main` (`./profile.zig:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| removed | -26.00ms | 0.5% → 0.0% |    26.0ms → 0ms |  26 → 0 | `__read` ← `posix.read` (`/opt/zig/lib/std/posix.zig:844`) ← `fs.File.read` (`/opt/zig/lib/std/fs/File.zig:847`) ← `Io.GenericReader(fs.File,error{AccessDenied,BrokenPipe,Canceled,ConnectionResetByPeer,ConnectionTimedOut,InputOutput,IsDir,LockViolation,NotOpenForReading,OperationAborted,ProcessNotFound,SocketNotConnected,SystemResources,Unexpected,WouldBlock},(function 'read')).typeErasedReadFn` (`/opt/zig/lib/std/Io.zig:291`) ← `Io.DeprecatedReader.read` (`/opt/zig/lib/std/Io/DeprecatedReader.zig:9`) ← `Io.DeprecatedReader.readAtLeast` (25) ← `Io.DeprecatedReader.readAll` (16) ← `Io.DeprecatedReader.readAllArrayListAligned__anon_2535` (55) ← `Io.GenericReader(fs.File,error{AccessDenied,BrokenPipe,Canceled,ConnectionResetByPeer,ConnectionTimedOut,InputOutput,IsDir,LockViolation,NotOpenForReading,OperationAborted,ProcessNotFound,SocketNotConnected,SystemResources,Unexpected,WouldBlock},(function 'read')).readAllArrayListAligned` (`/opt/zig/lib/std/Io.zig:126`) ← `fs.File.readToEndAllocOptions__anon_2451` (`/opt/zig/lib/std/fs/File.zig:814`) ← `fs.Dir.readFileAllocOptions__anon_2384` (`/opt/zig/lib/std/fs/Dir.zig:1997`) ← `profile.main` (`./profile.zig:12`) |
| removed | -21.00ms | 0.4% → 0.0% |    21.0ms → 0ms |  21 → 0 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).ensureTotalCapacity` (`/opt/zig/lib/std/math.zig:458`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).ensureUnusedCapacity` (`/opt/zig/lib/std/multi_array_list.zig:482`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).append` (252) ← `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`) ← `profile.main` (`./profile.zig:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| removed | -17.00ms | 0.3% → 0.0% |    17.0ms → 0ms |  17 → 0 | `openat` ← `posix.openatZ` (`/opt/zig/lib/std/posix.zig:1835`) ← `fs.Dir.openFileZ` (`/opt/zig/lib/std/fs/Dir.zig:855`) ← `fs.Dir.openFile` (818) ← `fs.Dir.readFileAllocOptions__anon_2384` (1997) ← `profile.main` (`./profile.zig:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| removed | -16.00ms | 0.3% → 0.0% |    16.0ms → 0ms |  16 → 0 | `(anonymous)` ← `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`) ← `profile.main` (`./profile.zig:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| removed | -15.00ms | 0.3% → 0.0% |    15.0ms → 0ms |  15 → 0 | `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:395`) ← `zig.Ast.tokenSlice` (`/opt/zig/lib/std/zig/Ast.zig:265`) ← `zig.Ast.Render.hasComment` (`/opt/zig/lib/std/zig/Ast/Render.zig:3089`) ← `zig.Ast.Render.renderContainerDecl` (2295) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1140) ← `zig.Ast.Render.renderVarDecl` (1122) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:217`) ← `zig.Ast.renderAlloc` (206) ← `profile.main` (`./profile.zig:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed | -13.00ms | 0.2% → 0.0% |    13.0ms → 0ms |  13 → 0 | `zig.tokenizer.Token.Tag.lexeme` (`/opt/zig/lib/std/zig/tokenizer.zig:186`) ← `zig.Ast.Render.hasComment` (`/opt/zig/lib/std/zig/Ast/Render.zig:3089`) ← `zig.Ast.Render.renderContainerDecl` (2295) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1140) ← `zig.Ast.Render.renderVarDecl` (1122) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:217`) ← `zig.Ast.renderAlloc` (206) ← `profile.main` (`./profile.zig:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed | -13.00ms | 0.2% → 0.0% |    13.0ms → 0ms |  13 → 0 | `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:395`) ← `zig.Ast.tokenSlice` (`/opt/zig/lib/std/zig/Ast.zig:265`) ← `zig.Ast.Render.hasComment` (`/opt/zig/lib/std/zig/Ast/Render.zig:3089`) ← `zig.Ast.Render.renderStructInit` (1995) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderArrayInit` (2067) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1140) ← `zig.Ast.Render.renderVarDecl` (1122) ← `zig.Ast.Render.finishRenderBlock` (1967) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:217`) ← `zig.Ast.renderAlloc` (206) ← `profile.main` (`./profile.zig:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| removed | -12.00ms | 0.2% → 0.0% |    12.0ms → 0ms |  12 → 0 | `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:395`) ← `zig.Ast.tokenSlice` (`/opt/zig/lib/std/zig/Ast.zig:265`) ← `zig.Ast.Render.tokenSliceForRender` (`/opt/zig/lib/std/zig/Ast/Render.zig:3268`) ← `zig.Ast.Render.renderIdentifier` (2926) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1140) ← `zig.Ast.Render.renderVarDecl` (1122) ← `zig.Ast.Render.finishRenderBlock` (1967) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:217`) ← `zig.Ast.renderAlloc` (206) ← `profile.main` (`./profile.zig:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  -75.0% | -12.00ms | 0.3% → 0.1% |  16.0ms → 4.0ms |  16 → 4 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).ensureUnusedCapacity` (`/opt/zig/lib/std/multi_array_list.zig:533`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).append` (273) ← `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`) ← `profile.main` (`./profile.zig:11`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| removed | -12.00ms | 0.2% → 0.0% |    12.0ms → 0ms |  12 → 0 | `(anonymous)` ← `array_list.Aligned(u8,null).ensureUnusedCapacity` (`/opt/zig/lib/std/array_list.zig:1241`) ← `Io.Writer.Allocating.drain` (`/opt/zig/lib/std/Io/Writer.zig:2625`) ← `Io.Writer.write` (518) ← `Io.Writer.writeAll` (530) ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`/opt/zig/lib/std/zig/Ast/Render.zig:3496`) ← `zig.Ast.Render.renderToken` (2844) ← `zig.Ast.Render.renderDocComments` (3208) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:217`) ← `zig.Ast.renderAlloc` (206) ← `profile.main` (`./profile.zig:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  -30.3% | -10.00ms | 0.6% → 0.4% | 33.0ms → 23.0ms | 33 → 23 | `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:396`) ← `zig.Ast.tokenSlice` (`/opt/zig/lib/std/zig/Ast.zig:276`) ← `zig.Ast.Render.tokenSliceForRender` (`/opt/zig/lib/std/zig/Ast/Render.zig:3168`) ← `zig.Ast.Render.renderIdentifier` (2812) ← `zig.Ast.Render.renderContainerField` (1577) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderContainerDecl` (2344) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1253) ← `zig.Ast.Render.renderVarDecl` (1235) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`) ← `zig.Ast.renderAlloc` (217) ← `profile.main` (`./profile.zig:11`)                                                                                                                                                                                                                                                                                                                                                                                                                            |
| removed | -10.00ms | 0.2% → 0.0% |    10.0ms → 0ms |  10 → 0 | `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| removed |  -9.00ms | 0.2% → 0.0% |     9.0ms → 0ms |   9 → 0 | `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:395`) ← `zig.Ast.tokenSlice` (`/opt/zig/lib/std/zig/Ast.zig:265`) ← `zig.Ast.Render.hasComment` (`/opt/zig/lib/std/zig/Ast/Render.zig:3089`) ← `zig.Ast.Render.renderContainerDecl` (2295) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.finishRenderBlock` (1967) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:217`) ← `zig.Ast.renderAlloc` (206) ← `profile.main` (`./profile.zig:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| removed |  -8.00ms | 0.2% → 0.0% |     8.0ms → 0ms |   8 → 0 | `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:395`) ← `zig.Ast.tokenSlice` (`/opt/zig/lib/std/zig/Ast.zig:265`) ← `zig.Ast.Render.tokenSliceForRender` (`/opt/zig/lib/std/zig/Ast/Render.zig:3268`) ← `zig.Ast.Render.renderToken` (2844) ← `zig.Ast.Render.renderContainerField` (1473) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderContainerDecl` (2295) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1140) ← `zig.Ast.Render.renderVarDecl` (1122) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:217`) ← `zig.Ast.renderAlloc` (206) ← `profile.main` (`./profile.zig:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed |  -8.00ms | 0.2% → 0.0% |     8.0ms → 0ms |   8 → 0 | `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:395`) ← `zig.Ast.tokenSlice` (`/opt/zig/lib/std/zig/Ast.zig:265`) ← `zig.Ast.Render.tokenSliceForRender` (`/opt/zig/lib/std/zig/Ast/Render.zig:3268`) ← `zig.Ast.Render.renderToken` (2844) ← `zig.Ast.Render.renderExpressionFixup` (924) ← `zig.Ast.Render.renderStructInit` (1995) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderArrayInit` (2067) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1140) ← `zig.Ast.Render.renderVarDecl` (1122) ← `zig.Ast.Render.finishRenderBlock` (1967) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:217`) ← `zig.Ast.renderAlloc` (206) ← `profile.main` (`./profile.zig:12`)                                                                                                                                                                                                                                                                                                                                      |
| removed |  -8.00ms | 0.2% → 0.0% |     8.0ms → 0ms |   8 → 0 | `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:395`) ← `zig.Ast.tokenSlice` (`/opt/zig/lib/std/zig/Ast.zig:265`) ← `zig.Ast.Render.hasComment` (`/opt/zig/lib/std/zig/Ast/Render.zig:3089`) ← `zig.Ast.Render.renderArrayInit` (2067) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1140) ← `zig.Ast.Render.renderVarDecl` (1122) ← `zig.Ast.Render.finishRenderBlock` (1967) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:217`) ← `zig.Ast.renderAlloc` (206) ← `profile.main` (`./profile.zig:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| removed |  -8.00ms | 0.2% → 0.0% |     8.0ms → 0ms |   8 → 0 | `brk` ← `__default_morecore` ← `(anonymous)` ← `(anonymous)` ← `cfree` ← `heap.CAllocator.alignedFree` (`/opt/zig/lib/std/heap.zig:183`) ← `heap.CAllocator.free` (246) ← `mem.Allocator.rawFree` (`/opt/zig/lib/std/mem/Allocator.zig:146`) ← `mem.Allocator.free__anon_2930` (424) ← `profile.main` (`./profile.zig:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  -46.7% |  -7.00ms | 0.3% → 0.1% |  15.0ms → 8.0ms |  15 → 8 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).Slice.set` (`/opt/zig/lib/std/multi_array_list.zig:113`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).set` (260) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).appendAssumeCapacity` (281) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).append` (273) ← `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`) ← `profile.main` (`./profile.zig:11`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed |  -7.00ms | 0.1% → 0.0% |     7.0ms → 0ms |   7 → 0 | `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig:395`) ← `zig.Ast.tokenSlice` (`/opt/zig/lib/std/zig/Ast.zig:265`) ← `zig.Ast.Render.tokenSliceForRender` (`/opt/zig/lib/std/zig/Ast/Render.zig:3268`) ← `zig.Ast.Render.renderToken` (2844) ← `zig.Ast.Render.renderParamList` (2728) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.finishRenderBlock` (1967) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:217`) ← `zig.Ast.renderAlloc` (206) ← `profile.main` (`./profile.zig:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
