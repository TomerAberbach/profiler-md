# CPU profile diff

Took 5.23s → 5.79s (+559.00ms, +10.7%) over 5,237 samples → 5,796 samples (1.0ms per sample).

| Category         |  Change |     Delta |             % |              Time |       Samples |
| ---------------- | ------: | --------: | ------------: | ----------------: | ------------: |
| Standard library |  +17.6% | +850.00ms | 92.4% → 98.1% |     4.83s → 5.68s | 4,837 → 5,687 |
| Native           |  -71.5% | -274.00ms |   7.3% → 1.9% | 383.0ms → 109.0ms |     383 → 109 |
| Ours             | removed |  -17.00ms |   0.3% → 0.0% |      17.0ms → 0ms |        17 → 0 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|  Change |     Delta |             % |              Time |       Samples | Function                                                                                  | Location                                |
| ------: | --------: | ------------: | ----------------: | ------------: | ----------------------------------------------------------------------------------------- | --------------------------------------- |
|     new | +351.00ms |   0.0% → 6.1% |     0ms → 351.0ms |       0 → 351 | `memset`                                                                                  | `/opt/zig/lib/compiler_rt.zig`          |
|     new | +112.00ms |   0.0% → 1.9% |     0ms → 112.0ms |       0 → 112 | `mem.findScalarPos__anon_6382`                                                            | `/opt/zig/lib/std/mem.zig`              |
|   +7.9% |  +93.00ms | 22.4% → 21.9% |     1.17s → 1.26s | 1,175 → 1,268 | `zig.tokenizer.Tokenizer.next`                                                            | `/opt/zig/lib/std/zig/tokenizer.zig`    |
|  +65.0% |  +76.00ms |   2.2% → 3.3% | 117.0ms → 193.0ms |     117 → 193 | `zig.Ast.Render.renderExpression`                                                         | `/opt/zig/lib/std/zig/Ast/Render.zig`   |
|  +46.3% |  +62.00ms |   2.6% → 3.4% | 134.0ms → 196.0ms |     134 → 196 | `zig.Ast.Render.renderComments`                                                           | `/opt/zig/lib/std/zig/Ast/Render.zig`   |
|  +27.6% |  +55.00ms |   3.8% → 4.4% | 199.0ms → 254.0ms |     199 → 254 | `zig.Ast.Render.tokenSliceForRender`                                                      | `/opt/zig/lib/std/zig/Ast/Render.zig`   |
| +134.4% |  +43.00ms |   0.6% → 1.3% |   32.0ms → 75.0ms |       32 → 75 | `zig.Ast.lastToken`                                                                       | `/opt/zig/lib/std/zig/Ast.zig`          |
|     new |  +39.00ms |   0.0% → 0.7% |      0ms → 39.0ms |        0 → 39 | `0xe3e00`                                                                                 | `/usr/lib/aarch64-linux-gnu/libc.so.6`  |
| +237.5% |  +38.00ms |   0.3% → 0.9% |   16.0ms → 54.0ms |       16 → 54 | `zig.Ast.nodeMainToken`                                                                   | `/opt/zig/lib/std/zig/Ast.zig`          |
|     new |  +33.00ms |   0.0% → 0.6% |      0ms → 33.0ms |        0 → 33 | `compiler_rt.memcpy.copyLessThan16`                                                       | `/opt/zig/lib/compiler_rt/memcpy.zig`   |
| +620.0% |  +31.00ms |   0.1% → 0.6% |    5.0ms → 36.0ms |        5 → 36 | `zig.Parse.addNode`                                                                       | `/opt/zig/lib/std/zig/Parse.zig`        |
|  +21.3% |  +30.00ms |   2.7% → 3.0% | 141.0ms → 171.0ms |     141 → 171 | `zig.Ast.Render.renderSpace`                                                              | `/opt/zig/lib/std/zig/Ast/Render.zig`   |
|     new |  +28.00ms |   0.0% → 0.5% |      0ms → 28.0ms |        0 → 28 | `mem.findPosLinear__anon_31435`                                                           | `/opt/zig/lib/std/mem.zig`              |
| +525.0% |  +21.00ms |   0.1% → 0.4% |    4.0ms → 25.0ms |        4 → 25 | `zig.Ast.nodeData`                                                                        | `/opt/zig/lib/std/zig/Ast.zig`          |
| +110.5% |  +21.00ms |   0.4% → 0.7% |   19.0ms → 40.0ms |       19 → 40 | `zig.Ast.Render.hasComment`                                                               | `/opt/zig/lib/std/zig/Ast/Render.zig`   |
|     new |  +20.00ms |   0.0% → 0.3% |      0ms → 20.0ms |        0 → 20 | `zig.Ast.Render.renderExpressionComma`                                                    | `/opt/zig/lib/std/zig/Ast/Render.zig`   |
| +118.8% |  +19.00ms |   0.3% → 0.6% |   16.0ms → 35.0ms |       16 → 35 | `zig.Ast.Render.AutoIndentingStream.writeByte`                                            | `/opt/zig/lib/std/debug.zig`            |
| +112.5% |  +18.00ms |   0.3% → 0.6% |   16.0ms → 34.0ms |       16 → 34 | `zig.Ast.parse`                                                                           | `/opt/zig/lib/std/zig/Ast.zig`          |
|  +78.3% |  +18.00ms |   0.4% → 0.7% |   23.0ms → 41.0ms |       23 → 41 | `zig.Ast.Render.AutoIndentingStream.currentIndent`                                        | `/opt/zig/lib/std/zig/Ast/Render.zig`   |
|  +75.0% |  +18.00ms |   0.5% → 0.7% |   24.0ms → 42.0ms |       24 → 42 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).Slice.items__anon_32582` | `/opt/zig/lib/std/multi_array_list.zig` |

##### Standard library

|  Change |     Delta |             % |              Time |       Samples | Function                                                                                  | Location                                |
| ------: | --------: | ------------: | ----------------: | ------------: | ----------------------------------------------------------------------------------------- | --------------------------------------- |
|     new | +351.00ms |   0.0% → 6.1% |     0ms → 351.0ms |       0 → 351 | `memset`                                                                                  | `/opt/zig/lib/compiler_rt.zig`          |
|     new | +112.00ms |   0.0% → 1.9% |     0ms → 112.0ms |       0 → 112 | `mem.findScalarPos__anon_6382`                                                            | `/opt/zig/lib/std/mem.zig`              |
|   +7.9% |  +93.00ms | 22.4% → 21.9% |     1.17s → 1.26s | 1,175 → 1,268 | `zig.tokenizer.Tokenizer.next`                                                            | `/opt/zig/lib/std/zig/tokenizer.zig`    |
|  +65.0% |  +76.00ms |   2.2% → 3.3% | 117.0ms → 193.0ms |     117 → 193 | `zig.Ast.Render.renderExpression`                                                         | `/opt/zig/lib/std/zig/Ast/Render.zig`   |
|  +46.3% |  +62.00ms |   2.6% → 3.4% | 134.0ms → 196.0ms |     134 → 196 | `zig.Ast.Render.renderComments`                                                           | `/opt/zig/lib/std/zig/Ast/Render.zig`   |
|  +27.6% |  +55.00ms |   3.8% → 4.4% | 199.0ms → 254.0ms |     199 → 254 | `zig.Ast.Render.tokenSliceForRender`                                                      | `/opt/zig/lib/std/zig/Ast/Render.zig`   |
| +134.4% |  +43.00ms |   0.6% → 1.3% |   32.0ms → 75.0ms |       32 → 75 | `zig.Ast.lastToken`                                                                       | `/opt/zig/lib/std/zig/Ast.zig`          |
| +237.5% |  +38.00ms |   0.3% → 0.9% |   16.0ms → 54.0ms |       16 → 54 | `zig.Ast.nodeMainToken`                                                                   | `/opt/zig/lib/std/zig/Ast.zig`          |
|     new |  +33.00ms |   0.0% → 0.6% |      0ms → 33.0ms |        0 → 33 | `compiler_rt.memcpy.copyLessThan16`                                                       | `/opt/zig/lib/compiler_rt/memcpy.zig`   |
| +620.0% |  +31.00ms |   0.1% → 0.6% |    5.0ms → 36.0ms |        5 → 36 | `zig.Parse.addNode`                                                                       | `/opt/zig/lib/std/zig/Parse.zig`        |
|  +21.3% |  +30.00ms |   2.7% → 3.0% | 141.0ms → 171.0ms |     141 → 171 | `zig.Ast.Render.renderSpace`                                                              | `/opt/zig/lib/std/zig/Ast/Render.zig`   |
|     new |  +28.00ms |   0.0% → 0.5% |      0ms → 28.0ms |        0 → 28 | `mem.findPosLinear__anon_31435`                                                           | `/opt/zig/lib/std/mem.zig`              |
| +525.0% |  +21.00ms |   0.1% → 0.4% |    4.0ms → 25.0ms |        4 → 25 | `zig.Ast.nodeData`                                                                        | `/opt/zig/lib/std/zig/Ast.zig`          |
| +110.5% |  +21.00ms |   0.4% → 0.7% |   19.0ms → 40.0ms |       19 → 40 | `zig.Ast.Render.hasComment`                                                               | `/opt/zig/lib/std/zig/Ast/Render.zig`   |
|     new |  +20.00ms |   0.0% → 0.3% |      0ms → 20.0ms |        0 → 20 | `zig.Ast.Render.renderExpressionComma`                                                    | `/opt/zig/lib/std/zig/Ast/Render.zig`   |
| +118.8% |  +19.00ms |   0.3% → 0.6% |   16.0ms → 35.0ms |       16 → 35 | `zig.Ast.Render.AutoIndentingStream.writeByte`                                            | `/opt/zig/lib/std/debug.zig`            |
| +112.5% |  +18.00ms |   0.3% → 0.6% |   16.0ms → 34.0ms |       16 → 34 | `zig.Ast.parse`                                                                           | `/opt/zig/lib/std/zig/Ast.zig`          |
|  +78.3% |  +18.00ms |   0.4% → 0.7% |   23.0ms → 41.0ms |       23 → 41 | `zig.Ast.Render.AutoIndentingStream.currentIndent`                                        | `/opt/zig/lib/std/zig/Ast/Render.zig`   |
|  +75.0% |  +18.00ms |   0.5% → 0.7% |   24.0ms → 42.0ms |       24 → 42 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).Slice.items__anon_32582` | `/opt/zig/lib/std/multi_array_list.zig` |
|     new |  +18.00ms |   0.0% → 0.3% |      0ms → 18.0ms |        0 → 18 | `mem.findScalar__anon_6379`                                                               | `/opt/zig/lib/std/mem.zig`              |

##### Native

| Change |    Delta |            % |          Time | Samples | Function  | Location                               |
| -----: | -------: | -----------: | ------------: | ------: | --------- | -------------------------------------- |
|    new | +39.00ms |  0.0% → 0.7% |  0ms → 39.0ms |  0 → 39 | `0xe3e00` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new |  +4.00ms |  0.0% → 0.1% |   0ms → 4.0ms |   0 → 4 | `0xdd2b4` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new |  +3.00ms |  0.0% → 0.1% |   0ms → 3.0ms |   0 → 3 | `0x929c4` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new |  +3.00ms |  0.0% → 0.1% |   0ms → 3.0ms |   0 → 3 | `0x91d0c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +16.7% |  +1.00ms |         0.1% | 6.0ms → 7.0ms |   6 → 7 | `0xde3c8` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new |  +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0xe7e0c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new |  +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x92274` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new |  +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x91c70` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new |  +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x92240` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new |  +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x8fd10` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new |  +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x8ff24` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new |  +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x8ffd0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new |  +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x90e1c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new |  +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x92dcc` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new |  +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x8fad8` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |     Delta |            % |              Time |   Samples | Function                                                                                             | Location                                                                    |
| ------: | --------: | -----------: | ----------------: | --------: | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
|  -88.6% | -117.00ms |  2.5% → 0.3% |  132.0ms → 15.0ms |  132 → 15 | `0x9d200`                                                                                            | `/usr/lib/aarch64-linux-gnu/libc.so.6`                                      |
| removed |  -77.00ms |  1.5% → 0.0% |      77.0ms → 0ms |    77 → 0 | `mem.indexOfScalarPos__anon_8996`                                                                    | `/opt/zig/lib/std/mem.zig`                                                  |
| removed |  -69.00ms |  1.3% → 0.0% |      69.0ms → 0ms |    69 → 0 | `0x9e670`                                                                                            | `/usr/lib/aarch64-linux-gnu/libc.so.6`                                      |
|  -96.7% |  -59.00ms | 1.2% → <0.1% |    61.0ms → 2.0ms |    61 → 2 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32303`                              | `/opt/zig/lib/std/multi_array_list.zig`                                     |
|  -64.0% |  -55.00ms |  1.6% → 0.5% |   86.0ms → 31.0ms |   86 → 31 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).Slice.items__anon_27682`            | `/opt/zig/lib/std/multi_array_list.zig`                                     |
|  -33.3% |  -43.00ms |  2.5% → 1.5% |  129.0ms → 86.0ms |  129 → 86 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32262`                              | `/opt/zig/lib/std/multi_array_list.zig`                                     |
|  -21.1% |  -30.00ms |  2.7% → 1.9% | 142.0ms → 112.0ms | 142 → 112 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_28815`                              | `/opt/zig/lib/std/multi_array_list.zig`                                     |
|  -48.4% |  -30.00ms |  1.2% → 0.6% |   62.0ms → 32.0ms |   62 → 32 | `mem.eqlBytes`                                                                                       | `/opt/zig/lib/std/mem.zig`                                                  |
| removed |  -21.00ms |  0.4% → 0.0% |      21.0ms → 0ms |    21 → 0 | `mem.indexOfPosLinear__anon_26200`                                                                   | `/opt/zig/lib/std/mem.zig`                                                  |
|   -8.0% |  -20.00ms |  4.8% → 4.0% | 249.0ms → 229.0ms | 249 → 229 | `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` | `/opt/zig/lib/std/static_string_map.zig`                                    |
| removed |  -20.00ms |  0.4% → 0.0% |      20.0ms → 0ms |    20 → 0 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).ensureTotalCapacity`                | `/opt/zig/lib/std/math.zig`                                                 |
|  -48.8% |  -20.00ms |  0.8% → 0.4% |   41.0ms → 21.0ms |   41 → 21 | `zig.Parse.parsePrimaryTypeExpr`                                                                     | `/opt/zig/lib/std/zig/Parse.zig`                                            |
| removed |  -19.00ms |  0.4% → 0.0% |      19.0ms → 0ms |    19 → 0 | `0x9e674`                                                                                            | `/usr/lib/aarch64-linux-gnu/libc.so.6`                                      |
| removed |  -19.00ms |  0.4% → 0.0% |      19.0ms → 0ms |    19 → 0 | `0xddb88`                                                                                            | `/usr/lib/aarch64-linux-gnu/libc.so.6`                                      |
|  -29.1% |  -16.00ms |  1.1% → 0.7% |   55.0ms → 39.0ms |   55 → 39 | `zig.Ast.Render.AutoIndentingStream.writeAll`                                                        | `/opt/zig/lib/std/zig/Ast/Render.zig`                                       |
| removed |  -16.00ms |  0.3% → 0.0% |      16.0ms → 0ms |    16 → 0 | `zig.Parse.parseTypeExpr`                                                                            | `/opt/zig/lib/std/multi_array_list.zig`                                     |
| removed |  -16.00ms |  0.3% → 0.0% |      16.0ms → 0ms |    16 → 0 | `0x76974`                                                                                            | `/tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fYcQks/zig-base/binary` |
|  -25.9% |  -15.00ms |  1.1% → 0.7% |   58.0ms → 43.0ms |   58 → 43 | `zig.Ast.Render.renderToken`                                                                         | `/opt/zig/lib/std/zig/Ast/Render.zig`                                       |
|  -61.9% |  -13.00ms |  0.4% → 0.1% |    21.0ms → 8.0ms |    21 → 8 | `zig.Parse.parseSuffixExpr`                                                                          | `/opt/zig/lib/std/zig/Parse.zig`                                            |
| removed |  -12.00ms |  0.2% → 0.0% |      12.0ms → 0ms |    12 → 0 | `os.linux.errnoFromSyscall`                                                                          | `/opt/zig/lib/std/os/linux.zig`                                             |

##### Standard library

|  Change |    Delta |            % |              Time |   Samples | Function                                                                                             | Location                                 |
| ------: | -------: | -----------: | ----------------: | --------: | ---------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| removed | -77.00ms |  1.5% → 0.0% |      77.0ms → 0ms |    77 → 0 | `mem.indexOfScalarPos__anon_8996`                                                                    | `/opt/zig/lib/std/mem.zig`               |
|  -96.7% | -59.00ms | 1.2% → <0.1% |    61.0ms → 2.0ms |    61 → 2 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32303`                              | `/opt/zig/lib/std/multi_array_list.zig`  |
|  -64.0% | -55.00ms |  1.6% → 0.5% |   86.0ms → 31.0ms |   86 → 31 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).Slice.items__anon_27682`            | `/opt/zig/lib/std/multi_array_list.zig`  |
|  -33.3% | -43.00ms |  2.5% → 1.5% |  129.0ms → 86.0ms |  129 → 86 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32262`                              | `/opt/zig/lib/std/multi_array_list.zig`  |
|  -21.1% | -30.00ms |  2.7% → 1.9% | 142.0ms → 112.0ms | 142 → 112 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_28815`                              | `/opt/zig/lib/std/multi_array_list.zig`  |
|  -48.4% | -30.00ms |  1.2% → 0.6% |   62.0ms → 32.0ms |   62 → 32 | `mem.eqlBytes`                                                                                       | `/opt/zig/lib/std/mem.zig`               |
| removed | -21.00ms |  0.4% → 0.0% |      21.0ms → 0ms |    21 → 0 | `mem.indexOfPosLinear__anon_26200`                                                                   | `/opt/zig/lib/std/mem.zig`               |
|   -8.0% | -20.00ms |  4.8% → 4.0% | 249.0ms → 229.0ms | 249 → 229 | `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` | `/opt/zig/lib/std/static_string_map.zig` |
| removed | -20.00ms |  0.4% → 0.0% |      20.0ms → 0ms |    20 → 0 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).ensureTotalCapacity`                | `/opt/zig/lib/std/math.zig`              |
|  -48.8% | -20.00ms |  0.8% → 0.4% |   41.0ms → 21.0ms |   41 → 21 | `zig.Parse.parsePrimaryTypeExpr`                                                                     | `/opt/zig/lib/std/zig/Parse.zig`         |
|  -29.1% | -16.00ms |  1.1% → 0.7% |   55.0ms → 39.0ms |   55 → 39 | `zig.Ast.Render.AutoIndentingStream.writeAll`                                                        | `/opt/zig/lib/std/zig/Ast/Render.zig`    |
| removed | -16.00ms |  0.3% → 0.0% |      16.0ms → 0ms |    16 → 0 | `zig.Parse.parseTypeExpr`                                                                            | `/opt/zig/lib/std/multi_array_list.zig`  |
|  -25.9% | -15.00ms |  1.1% → 0.7% |   58.0ms → 43.0ms |   58 → 43 | `zig.Ast.Render.renderToken`                                                                         | `/opt/zig/lib/std/zig/Ast/Render.zig`    |
|  -61.9% | -13.00ms |  0.4% → 0.1% |    21.0ms → 8.0ms |    21 → 8 | `zig.Parse.parseSuffixExpr`                                                                          | `/opt/zig/lib/std/zig/Parse.zig`         |
| removed | -12.00ms |  0.2% → 0.0% |      12.0ms → 0ms |    12 → 0 | `os.linux.errnoFromSyscall`                                                                          | `/opt/zig/lib/std/os/linux.zig`          |
|  -22.9% |  -8.00ms |  0.7% → 0.5% |   35.0ms → 27.0ms |   35 → 27 | `zig.Parse.eatToken`                                                                                 | `/opt/zig/lib/std/zig/Parse.zig`         |
|   -2.6% |  -7.00ms |  5.1% → 4.5% | 269.0ms → 262.0ms | 269 → 262 | `zig.Ast.tokenSlice`                                                                                 | `/opt/zig/lib/std/zig/Ast.zig`           |
| removed |  -7.00ms |  0.1% → 0.0% |       7.0ms → 0ms |     7 → 0 | `mem.indexOfPos__anon_23640`                                                                         | `/opt/zig/lib/std/mem.zig`               |
| removed |  -7.00ms |  0.1% → 0.0% |       7.0ms → 0ms |     7 → 0 | `zig.Parse.expectExpr`                                                                               | `/opt/zig/lib/std/zig/Parse.zig`         |
|  -77.8% |  -7.00ms | 0.2% → <0.1% |     9.0ms → 2.0ms |     9 → 2 | `zig.Ast.fullCall`                                                                                   | `/opt/zig/lib/std/zig/Ast.zig`           |

##### Native

|  Change |     Delta |            % |             Time |  Samples | Function  | Location                               |
| ------: | --------: | -----------: | ---------------: | -------: | --------- | -------------------------------------- |
|  -88.6% | -117.00ms |  2.5% → 0.3% | 132.0ms → 15.0ms | 132 → 15 | `0x9d200` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -69.00ms |  1.3% → 0.0% |     69.0ms → 0ms |   69 → 0 | `0x9e670` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -19.00ms |  0.4% → 0.0% |     19.0ms → 0ms |   19 → 0 | `0x9e674` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -19.00ms |  0.4% → 0.0% |     19.0ms → 0ms |   19 → 0 | `0xddb88` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -11.00ms |  0.2% → 0.0% |     11.0ms → 0ms |   11 → 0 | `0x9d11c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -11.00ms |  0.2% → 0.0% |     11.0ms → 0ms |   11 → 0 | `0x9d100` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -10.00ms |  0.2% → 0.0% |     10.0ms → 0ms |   10 → 0 | `0x9d184` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -9.00ms |  0.2% → 0.0% |      9.0ms → 0ms |    9 → 0 | `0x9d138` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -7.00ms |  0.1% → 0.0% |      7.0ms → 0ms |    7 → 0 | `0x9d168` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -5.00ms |  0.1% → 0.0% |      5.0ms → 0ms |    5 → 0 | `0x9d150` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -26.3% |   -5.00ms |  0.4% → 0.2% |  19.0ms → 14.0ms |  19 → 14 | `0xdda44` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -4.00ms |  0.1% → 0.0% |      4.0ms → 0ms |    4 → 0 | `0x9e5c0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -4.00ms |  0.1% → 0.0% |      4.0ms → 0ms |    4 → 0 | `0x9e580` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -4.00ms |  0.1% → 0.0% |      4.0ms → 0ms |    4 → 0 | `0x9d114` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -3.00ms |  0.1% → 0.0% |      3.0ms → 0ms |    3 → 0 | `0x9e584` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -21.4% |   -3.00ms |  0.3% → 0.2% |  14.0ms → 11.0ms |  14 → 11 | `0xe3acc` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -2.00ms | <0.1% → 0.0% |      2.0ms → 0ms |    2 → 0 | `0x9d160` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -50.0% |   -2.00ms | 0.1% → <0.1% |    4.0ms → 2.0ms |    4 → 2 | `0x9d210` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -2.00ms | <0.1% → 0.0% |      2.0ms → 0ms |    2 → 0 | `0x9d124` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -2.00ms | <0.1% → 0.0% |      2.0ms → 0ms |    2 → 0 | `0x929e0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `memset` (`/opt/zig/lib/compiler_rt.zig`)

| Change |     Delta |            % |          Time | Samples | Location                           |
| -----: | --------: | -----------: | ------------: | ------: | ---------------------------------- |
|    new | +305.00ms | 0.0% → 86.9% | 0ms → 305.0ms | 0 → 305 | `/opt/zig/lib/compiler_rt.zig:686` |
|    new |  +24.00ms |  0.0% → 6.8% |  0ms → 24.0ms |  0 → 24 | `/opt/zig/lib/compiler_rt.zig:684` |
|    new |   +6.00ms |  0.0% → 1.7% |   0ms → 6.0ms |   0 → 6 | `/opt/zig/lib/compiler_rt.zig:685` |

##### `mem.findScalarPos__anon_6382` (`/opt/zig/lib/std/mem.zig`)

| Change |    Delta |            % |         Time | Samples | Location                        |
| -----: | -------: | -----------: | -----------: | ------: | ------------------------------- |
|    new | +36.00ms | 0.0% → 32.1% | 0ms → 36.0ms |  0 → 36 | `/opt/zig/lib/std/mem.zig:1297` |
|    new | +19.00ms | 0.0% → 17.0% | 0ms → 19.0ms |  0 → 19 | `/opt/zig/lib/std/mem.zig:1285` |
|    new |  +9.00ms |  0.0% → 8.0% |  0ms → 9.0ms |   0 → 9 | `/opt/zig/lib/std/mem.zig:1299` |
|    new |  +8.00ms |  0.0% → 7.1% |  0ms → 8.0ms |   0 → 8 | `/opt/zig/lib/std/mem.zig:1263` |
|    new |  +7.00ms |  0.0% → 6.3% |  0ms → 7.0ms |   0 → 7 | `/opt/zig/lib/std/mem.zig:1284` |

##### `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig`)

|  Change |    Delta |             % |              Time |   Samples | Location                                       |
| ------: | -------: | ------------: | ----------------: | --------: | ---------------------------------------------- |
|  -10.5% | -25.00ms | 20.2% → 16.7% | 237.0ms → 212.0ms | 237 → 212 | `/opt/zig/lib/std/zig/tokenizer.zig:666 → 667` |
|   +6.5% | +17.00ms | 22.3% → 22.0% | 262.0ms → 279.0ms | 262 → 279 | `/opt/zig/lib/std/zig/tokenizer.zig:665 → 666` |
|   -9.7% | -14.00ms | 12.3% → 10.3% | 145.0ms → 131.0ms | 145 → 131 | `/opt/zig/lib/std/zig/tokenizer.zig:669 → 670` |
|  +13.8% | +13.00ms |   8.0% → 8.4% |  94.0ms → 107.0ms |  94 → 107 | `/opt/zig/lib/std/zig/tokenizer.zig:404 → 405` |
| +225.0% |  +9.00ms |   0.3% → 1.0% |    4.0ms → 13.0ms |    4 → 13 | `/opt/zig/lib/std/zig/tokenizer.zig:395 → 396` |

##### `zig.Ast.Render.renderExpression` (`/opt/zig/lib/std/zig/Ast/Render.zig`)

|   Change |    Delta |             % |            Time | Samples | Location                                  |
| -------: | -------: | ------------: | --------------: | ------: | ----------------------------------------- |
| +1133.3% | +34.00ms |  2.6% → 19.2% |  3.0ms → 37.0ms |  3 → 37 | `/opt/zig/lib/std/zig/Ast/Render.zig:317` |
|   -29.4% | -10.00ms | 29.1% → 12.4% | 34.0ms → 24.0ms | 34 → 24 | `/opt/zig/lib/std/zig/Ast/Render.zig:315` |
|  +160.0% |  +8.00ms |   4.3% → 6.7% |  5.0ms → 13.0ms |  5 → 13 | `/opt/zig/lib/std/zig/Ast/Render.zig:314` |
|   +62.5% |  +5.00ms |   6.8% → 6.7% |  8.0ms → 13.0ms |  8 → 13 | `/opt/zig/lib/std/zig/Ast/Render.zig:324` |
|      new |  +5.00ms |   0.0% → 2.6% |     0ms → 5.0ms |   0 → 5 | `/opt/zig/lib/std/zig/Ast/Render.zig:321` |

##### `zig.Ast.Render.renderComments` (`/opt/zig/lib/std/zig/Ast/Render.zig`)

|  Change |    Delta |             % |            Time | Samples | Location                                          |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------------------------------- |
|     new | +74.00ms |  0.0% → 37.8% |    0ms → 74.0ms |  0 → 74 | `/opt/zig/lib/std/zig/Ast/Render.zig:3016`        |
| removed | -39.00ms |  29.1% → 0.0% |    39.0ms → 0ms |  39 → 0 | `/opt/zig/lib/std/zig/Ast/Render.zig:3117`        |
| +129.4% | +22.00ms | 12.7% → 19.9% | 17.0ms → 39.0ms | 17 → 39 | `/opt/zig/lib/std/zig/Ast/Render.zig:3172 → 3072` |
| removed |  -1.00ms |   0.7% → 0.0% |     1.0ms → 0ms |   1 → 0 | `/opt/zig/lib/std/zig/Ast/Render.zig:3112`        |
|  -33.3% |  -1.00ms |   2.2% → 1.0% |   3.0ms → 2.0ms |   3 → 2 | `/opt/zig/lib/std/zig/Ast/Render.zig:3165 → 3065` |

##### `zig.Ast.Render.tokenSliceForRender` (`/opt/zig/lib/std/zig/Ast/Render.zig`)

|  Change |    Delta |             % |              Time |   Samples | Location                                          |
| ------: | -------: | ------------: | ----------------: | --------: | ------------------------------------------------- |
|     new | +28.00ms |  0.0% → 11.0% |      0ms → 28.0ms |    0 → 28 | `/opt/zig/lib/std/zig/Ast/Render.zig:3169`        |
| +200.0% | +22.00ms |  5.5% → 13.0% |   11.0ms → 33.0ms |   11 → 33 | `/opt/zig/lib/std/zig/Ast/Render.zig:3276 → 3176` |
|   +3.2% |  +5.00ms | 78.9% → 63.8% | 157.0ms → 162.0ms | 157 → 162 | `/opt/zig/lib/std/zig/Ast/Render.zig:3268 → 3168` |

##### `zig.Ast.lastToken` (`/opt/zig/lib/std/zig/Ast.zig`)

|  Change |    Delta |            % |         Time | Samples | Location                           |
| ------: | -------: | -----------: | -----------: | ------: | ---------------------------------- |
|     new | +37.00ms | 0.0% → 49.3% | 0ms → 37.0ms |  0 → 37 | `/opt/zig/lib/std/zig/Ast.zig:881` |
| removed | -10.00ms | 31.3% → 0.0% | 10.0ms → 0ms |  10 → 0 | `/opt/zig/lib/std/zig/Ast.zig:874` |
|     new |  +9.00ms | 0.0% → 12.0% |  0ms → 9.0ms |   0 → 9 | `/opt/zig/lib/std/zig/Ast.zig:884` |
| removed |  -6.00ms | 18.8% → 0.0% |  6.0ms → 0ms |   6 → 0 | `/opt/zig/lib/std/zig/Ast.zig:877` |

##### `zig.Ast.nodeMainToken` (`/opt/zig/lib/std/zig/Ast.zig`)

|  Change |    Delta |              % |            Time | Samples | Location                           |
| ------: | -------: | -------------: | --------------: | ------: | ---------------------------------- |
| +231.3% | +37.00ms | 100.0% → 98.1% | 16.0ms → 53.0ms | 16 → 53 | `/opt/zig/lib/std/zig/Ast.zig:101` |

##### `compiler_rt.memcpy.copyLessThan16` (`/opt/zig/lib/compiler_rt/memcpy.zig`)

| Change |    Delta |            % |         Time | Samples | Location                                 |
| -----: | -------: | -----------: | -----------: | ------: | ---------------------------------------- |
|    new | +18.00ms | 0.0% → 54.5% | 0ms → 18.0ms |  0 → 18 | `/opt/zig/lib/compiler_rt/memcpy.zig:77` |
|    new |  +7.00ms | 0.0% → 21.2% |  0ms → 7.0ms |   0 → 7 | `/opt/zig/lib/compiler_rt/memcpy.zig:73` |
|    new |  +6.00ms | 0.0% → 18.2% |  0ms → 6.0ms |   0 → 6 | `/opt/zig/lib/compiler_rt/memcpy.zig:74` |
|    new |  +2.00ms |  0.0% → 6.1% |  0ms → 2.0ms |   0 → 2 | `/opt/zig/lib/compiler_rt/memcpy.zig:75` |

##### `zig.Parse.addNode` (`/opt/zig/lib/std/zig/Parse.zig`)

|  Change |   Delta |             % |          Time | Samples | Location                            |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------------- |
|     new | +5.00ms |  0.0% → 13.9% |   0ms → 5.0ms |   0 → 5 | `/opt/zig/lib/std/zig/Parse.zig:63` |
| +150.0% | +3.00ms | 40.0% → 13.9% | 2.0ms → 5.0ms |   2 → 5 | `/opt/zig/lib/std/zig/Parse.zig:64` |
|     new | +2.00ms |   0.0% → 5.6% |   0ms → 2.0ms |   0 → 2 | `/opt/zig/lib/std/zig/Parse.zig:65` |

##### `zig.Ast.Render.renderSpace` (`/opt/zig/lib/std/zig/Ast/Render.zig`)

| Change |    Delta |             % |            Time | Samples | Location                                          |
| -----: | -------: | ------------: | --------------: | ------: | ------------------------------------------------- |
| +55.0% | +11.00ms | 14.2% → 18.1% | 20.0ms → 31.0ms | 20 → 31 | `/opt/zig/lib/std/zig/Ast/Render.zig:2875 → 2751` |
| +88.9% |  +8.00ms |   6.4% → 9.9% |  9.0ms → 17.0ms |  9 → 17 | `/opt/zig/lib/std/zig/Ast/Render.zig:2866 → 2742` |
| +44.4% |  +4.00ms |   6.4% → 7.6% |  9.0ms → 13.0ms |  9 → 13 | `/opt/zig/lib/std/zig/Ast/Render.zig:2863 → 2739` |
| +14.3% |  +4.00ms | 19.9% → 18.7% | 28.0ms → 32.0ms | 28 → 32 | `/opt/zig/lib/std/zig/Ast/Render.zig:2880 → 2756` |
| -12.5% |  -2.00ms |  11.3% → 8.2% | 16.0ms → 14.0ms | 16 → 14 | `/opt/zig/lib/std/zig/Ast/Render.zig:2868 → 2744` |

##### `mem.findPosLinear__anon_31435` (`/opt/zig/lib/std/mem.zig`)

| Change |    Delta |            % |         Time | Samples | Location                        |
| -----: | -------: | -----------: | -----------: | ------: | ------------------------------- |
|    new | +25.00ms | 0.0% → 89.3% | 0ms → 25.0ms |  0 → 25 | `/opt/zig/lib/std/mem.zig:1447` |
|    new |  +3.00ms | 0.0% → 10.7% |  0ms → 3.0ms |   0 → 3 | `/opt/zig/lib/std/mem.zig:1448` |

##### `zig.Ast.nodeData` (`/opt/zig/lib/std/zig/Ast.zig`)

|  Change |    Delta |      % |           Time | Samples | Location                           |
| ------: | -------: | -----: | -------------: | ------: | ---------------------------------- |
| +525.0% | +21.00ms | 100.0% | 4.0ms → 25.0ms |  4 → 25 | `/opt/zig/lib/std/zig/Ast.zig:105` |

##### `zig.Ast.Render.hasComment` (`/opt/zig/lib/std/zig/Ast/Render.zig`)

|  Change |    Delta |             % |           Time | Samples | Location                                          |
| ------: | -------: | ------------: | -------------: | ------: | ------------------------------------------------- |
| +183.3% | +11.00ms | 31.6% → 42.5% | 6.0ms → 17.0ms |  6 → 17 | `/opt/zig/lib/std/zig/Ast/Render.zig:3095 → 2981` |
|     new |  +6.00ms |  0.0% → 15.0% |    0ms → 6.0ms |   0 → 6 | `/opt/zig/lib/std/zig/Ast/Render.zig:2983`        |
|     new |  +4.00ms |  0.0% → 10.0% |    0ms → 4.0ms |   0 → 4 | `/opt/zig/lib/std/zig/Ast/Render.zig:2982`        |
| removed |  -3.00ms |  15.8% → 0.0% |    3.0ms → 0ms |   3 → 0 | `/opt/zig/lib/std/zig/Ast/Render.zig:3091`        |
| removed |  -2.00ms |  10.5% → 0.0% |    2.0ms → 0ms |   2 → 0 | `/opt/zig/lib/std/zig/Ast/Render.zig:3094`        |

##### `zig.Ast.Render.renderExpressionComma` (`/opt/zig/lib/std/zig/Ast/Render.zig`)

| Change |    Delta |            % |         Time | Samples | Location                                   |
| -----: | -------: | -----------: | -----------: | ------: | ------------------------------------------ |
|    new | +16.00ms | 0.0% → 80.0% | 0ms → 16.0ms |  0 → 16 | `/opt/zig/lib/std/zig/Ast/Render.zig:2662` |
|    new |  +2.00ms | 0.0% → 10.0% |  0ms → 2.0ms |   0 → 2 | `/opt/zig/lib/std/zig/Ast/Render.zig:2656` |
|    new |  +1.00ms |  0.0% → 5.0% |  0ms → 1.0ms |   0 → 1 | `/opt/zig/lib/std/zig/Ast/Render.zig:2657` |

##### `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig`)

|  Change |    Delta |             % |            Time | Samples | Location                           |
| ------: | -------: | ------------: | --------------: | ------: | ---------------------------------- |
| +850.0% | +17.00ms | 12.5% → 55.9% |  2.0ms → 19.0ms |  2 → 19 | `/opt/zig/lib/std/zig/Ast.zig:155` |
|  -21.4% |  -3.00ms | 87.5% → 32.4% | 14.0ms → 11.0ms | 14 → 11 | `/opt/zig/lib/std/zig/Ast.zig:158` |

##### `zig.Ast.Render.AutoIndentingStream.currentIndent` (`/opt/zig/lib/std/zig/Ast/Render.zig`)

|  Change |   Delta |             % |            Time | Samples | Location                                          |
| ------: | ------: | ------------: | --------------: | ------: | ------------------------------------------------- |
|  +42.9% | +9.00ms | 91.3% → 73.2% | 21.0ms → 30.0ms | 21 → 30 | `/opt/zig/lib/std/zig/Ast/Render.zig:3683 → 3528` |
| +450.0% | +9.00ms |  8.7% → 26.8% |  2.0ms → 11.0ms |  2 → 11 | `/opt/zig/lib/std/zig/Ast/Render.zig:3684 → 3529` |

##### `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).Slice.items__anon_32582` (`/opt/zig/lib/std/multi_array_list.zig`)

|  Change |    Delta |             % |            Time | Samples | Location                                         |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------------------------------ |
| +160.0% | +16.00ms | 41.7% → 61.9% | 10.0ms → 26.0ms | 10 → 26 | `/opt/zig/lib/std/multi_array_list.zig:92 → 109` |
|  +14.3% |  +2.00ms | 58.3% → 38.1% | 14.0ms → 16.0ms | 14 → 16 | `/opt/zig/lib/std/multi_array_list.zig:85 → 102` |

##### `mem.findScalar__anon_6379` (`/opt/zig/lib/std/mem.zig`)

| Change |    Delta |             % |         Time | Samples | Location                        |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------------- |
|    new | +18.00ms | 0.0% → 100.0% | 0ms → 18.0ms |  0 → 18 | `/opt/zig/lib/std/mem.zig:1220` |

##### `mem.indexOfScalarPos__anon_8996` (`/opt/zig/lib/std/mem.zig`)

|  Change |    Delta |            % |         Time | Samples | Location                        |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------------- |
| removed | -19.00ms | 24.7% → 0.0% | 19.0ms → 0ms |  19 → 0 | `/opt/zig/lib/std/mem.zig:1314` |
| removed |  -7.00ms |  9.1% → 0.0% |  7.0ms → 0ms |   7 → 0 | `/opt/zig/lib/std/mem.zig:1289` |
| removed |  -7.00ms |  9.1% → 0.0% |  7.0ms → 0ms |   7 → 0 | `/opt/zig/lib/std/mem.zig:1301` |
| removed |  -7.00ms |  9.1% → 0.0% |  7.0ms → 0ms |   7 → 0 | `/opt/zig/lib/std/mem.zig:1302` |
| removed |  -3.00ms |  3.9% → 0.0% |  3.0ms → 0ms |   3 → 0 | `/opt/zig/lib/std/mem.zig:1281` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32303` (`/opt/zig/lib/std/multi_array_list.zig`)

| Change |    Delta |      % |           Time | Samples | Location                                         |
| -----: | -------: | -----: | -------------: | ------: | ------------------------------------------------ |
| -96.7% | -59.00ms | 100.0% | 61.0ms → 2.0ms |  61 → 2 | `/opt/zig/lib/std/multi_array_list.zig:85 → 102` |

##### `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).Slice.items__anon_27682` (`/opt/zig/lib/std/multi_array_list.zig`)

|  Change |    Delta |              % |            Time | Samples | Location                                         |
| ------: | -------: | -------------: | --------------: | ------: | ------------------------------------------------ |
|  -55.1% | -38.00ms | 80.2% → 100.0% | 69.0ms → 31.0ms | 69 → 31 | `/opt/zig/lib/std/multi_array_list.zig:85 → 102` |
| removed | -16.00ms |   18.6% → 0.0% |    16.0ms → 0ms |  16 → 0 | `/opt/zig/lib/std/multi_array_list.zig:88`       |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32262` (`/opt/zig/lib/std/multi_array_list.zig`)

|  Change |    Delta |             % |            Time | Samples | Location                                         |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------------------------------ |
| removed | -26.00ms |  20.2% → 0.0% |    26.0ms → 0ms |  26 → 0 | `/opt/zig/lib/std/multi_array_list.zig:88`       |
|  -11.7% | -11.00ms | 72.9% → 96.5% | 94.0ms → 83.0ms | 94 → 83 | `/opt/zig/lib/std/multi_array_list.zig:85 → 102` |
| removed |  -9.00ms |   7.0% → 0.0% |     9.0ms → 0ms |   9 → 0 | `/opt/zig/lib/std/multi_array_list.zig:93`       |
|     new |  +3.00ms |   0.0% → 3.5% |     0ms → 3.0ms |   0 → 3 | `/opt/zig/lib/std/multi_array_list.zig:109`      |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_28815` (`/opt/zig/lib/std/multi_array_list.zig`)

|  Change |    Delta |              % |              Time |   Samples | Location                                         |
| ------: | -------: | -------------: | ----------------: | --------: | ------------------------------------------------ |
|  -13.8% | -18.00ms | 91.5% → 100.0% | 130.0ms → 112.0ms | 130 → 112 | `/opt/zig/lib/std/multi_array_list.zig:85 → 102` |
| removed |  -8.00ms |    5.6% → 0.0% |       8.0ms → 0ms |     8 → 0 | `/opt/zig/lib/std/multi_array_list.zig:88`       |
| removed |  -3.00ms |    2.1% → 0.0% |       3.0ms → 0ms |     3 → 0 | `/opt/zig/lib/std/multi_array_list.zig:93`       |
| removed |  -1.00ms |    0.7% → 0.0% |       1.0ms → 0ms |     1 → 0 | `/opt/zig/lib/std/multi_array_list.zig:92`       |

##### `mem.eqlBytes` (`/opt/zig/lib/std/mem.zig`)

|  Change |    Delta |            % |         Time | Samples | Location                       |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------------ |
| removed | -35.00ms | 56.5% → 0.0% | 35.0ms → 0ms |  35 → 0 | `/opt/zig/lib/std/mem.zig:733` |
|     new | +28.00ms | 0.0% → 87.5% | 0ms → 28.0ms |  0 → 28 | `/opt/zig/lib/std/mem.zig:772` |
| removed | -27.00ms | 43.5% → 0.0% | 27.0ms → 0ms |  27 → 0 | `/opt/zig/lib/std/mem.zig:737` |
|     new |  +4.00ms | 0.0% → 12.5% |  0ms → 4.0ms |   0 → 4 | `/opt/zig/lib/std/mem.zig:776` |

##### `mem.indexOfPosLinear__anon_26200` (`/opt/zig/lib/std/mem.zig`)

|  Change |    Delta |            % |         Time | Samples | Location                        |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------------- |
| removed | -19.00ms | 90.5% → 0.0% | 19.0ms → 0ms |  19 → 0 | `/opt/zig/lib/std/mem.zig:1430` |
| removed |  -2.00ms |  9.5% → 0.0% |  2.0ms → 0ms |   2 → 0 | `/opt/zig/lib/std/mem.zig:1431` |

##### `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` (`/opt/zig/lib/std/static_string_map.zig`)

|  Change |    Delta |             % |              Time |   Samples | Location                                     |
| ------: | -------: | ------------: | ----------------: | --------: | -------------------------------------------- |
|  -19.7% | -26.00ms | 53.0% → 46.3% | 132.0ms → 106.0ms | 132 → 106 | `/opt/zig/lib/std/static_string_map.zig:213` |
|  +10.2% | +10.00ms | 39.4% → 47.2% |  98.0ms → 108.0ms |  98 → 108 | `/opt/zig/lib/std/static_string_map.zig:208` |
| removed |  -1.00ms |   0.4% → 0.0% |       1.0ms → 0ms |     1 → 0 | `/opt/zig/lib/std/static_string_map.zig:206` |
|  -50.0% |  -1.00ms |   0.8% → 0.4% |     2.0ms → 1.0ms |     2 → 1 | `/opt/zig/lib/std/static_string_map.zig:209` |
|  -33.3% |  -1.00ms |   1.2% → 0.9% |     3.0ms → 2.0ms |     3 → 2 | `/opt/zig/lib/std/static_string_map.zig:214` |

##### `zig.Parse.parsePrimaryTypeExpr` (`/opt/zig/lib/std/zig/Parse.zig`)

|  Change |   Delta |            % |          Time | Samples | Location                                     |
| ------: | ------: | -----------: | ------------: | ------: | -------------------------------------------- |
| removed | -7.00ms | 17.1% → 0.0% |   7.0ms → 0ms |   7 → 0 | `/opt/zig/lib/std/zig/Parse.zig:2445`        |
|  -60.0% | -3.00ms | 12.2% → 9.5% | 5.0ms → 2.0ms |   5 → 2 | `/opt/zig/lib/std/zig/Parse.zig:2547 → 2562` |
|     new | +3.00ms | 0.0% → 14.3% |   0ms → 3.0ms |   0 → 3 | `/opt/zig/lib/std/zig/Parse.zig:2467`        |
| +200.0% | +2.00ms | 2.4% → 14.3% | 1.0ms → 3.0ms |   1 → 3 | `/opt/zig/lib/std/zig/Parse.zig:2513 → 2528` |
|  -66.7% | -2.00ms |  7.3% → 4.8% | 3.0ms → 1.0ms |   3 → 1 | `/opt/zig/lib/std/zig/Parse.zig:2564 → 2579` |

##### `zig.Ast.Render.AutoIndentingStream.writeAll` (`/opt/zig/lib/std/zig/Ast/Render.zig`)

|  Change |   Delta |             % |           Time | Samples | Location                                          |
| ------: | ------: | ------------: | -------------: | ------: | ------------------------------------------------- |
|  -50.0% | -8.00ms | 29.1% → 20.5% | 16.0ms → 8.0ms |  16 → 8 | `/opt/zig/lib/std/zig/Ast/Render.zig:3499 → 3356` |
|  -61.5% | -8.00ms | 23.6% → 12.8% | 13.0ms → 5.0ms |  13 → 5 | `/opt/zig/lib/std/zig/Ast/Render.zig:3500 → 3357` |
|  -46.2% | -6.00ms | 23.6% → 17.9% | 13.0ms → 7.0ms |  13 → 7 | `/opt/zig/lib/std/zig/Ast/Render.zig:3496 → 3353` |
| removed | -1.00ms |   1.8% → 0.0% |    1.0ms → 0ms |   1 → 0 | `/opt/zig/lib/std/zig/Ast/Render.zig:3497`        |

##### `zig.Ast.Render.renderToken` (`/opt/zig/lib/std/zig/Ast/Render.zig`)

|  Change |   Delta |             % |            Time | Samples | Location                                          |
| ------: | ------: | ------------: | --------------: | ------: | ------------------------------------------------- |
|  -66.7% | -8.00ms |  20.7% → 9.3% |  12.0ms → 4.0ms |  12 → 4 | `/opt/zig/lib/std/zig/Ast/Render.zig:2848 → 2724` |
|  -17.2% | -5.00ms | 50.0% → 55.8% | 29.0ms → 24.0ms | 29 → 24 | `/opt/zig/lib/std/zig/Ast/Render.zig:2845 → 2721` |
|  +71.4% | +5.00ms | 12.1% → 27.9% |  7.0ms → 12.0ms |  7 → 12 | `/opt/zig/lib/std/zig/Ast/Render.zig:2849 → 2725` |
| removed | -3.00ms |   5.2% → 0.0% |     3.0ms → 0ms |   3 → 0 | `/opt/zig/lib/std/zig/Ast/Render.zig:2844`        |
| removed | -1.00ms |   1.7% → 0.0% |     1.0ms → 0ms |   1 → 0 | `/opt/zig/lib/std/zig/Ast/Render.zig:2846`        |

##### `zig.Parse.parseSuffixExpr` (`/opt/zig/lib/std/zig/Parse.zig`)

|  Change |    Delta |            % |          Time | Samples | Location                                     |
| ------: | -------: | -----------: | ------------: | ------: | -------------------------------------------- |
| removed | -11.00ms | 52.4% → 0.0% |  11.0ms → 0ms |  11 → 0 | `/opt/zig/lib/std/zig/Parse.zig:2356`        |
|     new |  +2.00ms | 0.0% → 25.0% |   0ms → 2.0ms |   0 → 2 | `/opt/zig/lib/std/zig/Parse.zig:2407`        |
| removed |  -1.00ms |  4.8% → 0.0% |   1.0ms → 0ms |   1 → 0 | `/opt/zig/lib/std/zig/Parse.zig:2364`        |
|  -50.0% |  -1.00ms | 9.5% → 12.5% | 2.0ms → 1.0ms |   2 → 1 | `/opt/zig/lib/std/zig/Parse.zig:2371 → 2386` |
| removed |  -1.00ms |  4.8% → 0.0% |   1.0ms → 0ms |   1 → 0 | `/opt/zig/lib/std/zig/Parse.zig:2397`        |

##### `os.linux.errnoFromSyscall` (`/opt/zig/lib/std/os/linux.zig`)

|  Change |    Delta |             % |         Time | Samples | Location                            |
| ------: | -------: | ------------: | -----------: | ------: | ----------------------------------- |
| removed | -12.00ms | 100.0% → 0.0% | 12.0ms → 0ms |  12 → 0 | `/opt/zig/lib/std/os/linux.zig:579` |

##### `zig.Parse.eatToken` (`/opt/zig/lib/std/zig/Parse.zig`)

| Change |   Delta |      % |            Time | Samples | Location                                     |
| -----: | ------: | -----: | --------------: | ------: | -------------------------------------------- |
| -22.9% | -8.00ms | 100.0% | 35.0ms → 27.0ms | 35 → 27 | `/opt/zig/lib/std/zig/Parse.zig:3693 → 3677` |

##### `zig.Ast.tokenSlice` (`/opt/zig/lib/std/zig/Ast.zig`)

|  Change |    Delta |             % |             Time |  Samples | Location                                 |
| ------: | -------: | ------------: | ---------------: | -------: | ---------------------------------------- |
|  -50.0% | -19.00ms |  14.1% → 7.3% |  38.0ms → 19.0ms |  38 → 19 | `/opt/zig/lib/std/zig/Ast.zig:280 → 291` |
|  +17.2% | +16.00ms | 34.6% → 41.6% | 93.0ms → 109.0ms | 93 → 109 | `/opt/zig/lib/std/zig/Ast.zig:265 → 276` |
|  +80.0% |  +8.00ms |   3.7% → 6.9% |  10.0ms → 18.0ms |  10 → 18 | `/opt/zig/lib/std/zig/Ast.zig:275 → 286` |
|     new |  +6.00ms |   0.0% → 2.3% |      0ms → 6.0ms |    0 → 6 | `/opt/zig/lib/std/zig/Ast.zig:289`       |
| removed |  -5.00ms |   1.9% → 0.0% |      5.0ms → 0ms |    5 → 0 | `/opt/zig/lib/std/zig/Ast.zig:279`       |

##### `mem.indexOfPos__anon_23640` (`/opt/zig/lib/std/mem.zig`)

|  Change |   Delta |            % |        Time | Samples | Location                        |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------------- |
| removed | -4.00ms | 57.1% → 0.0% | 4.0ms → 0ms |   4 → 0 | `/opt/zig/lib/std/mem.zig:1514` |

##### `zig.Parse.expectExpr` (`/opt/zig/lib/std/zig/Parse.zig`)

|  Change |   Delta |             % |        Time | Samples | Location                              |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------- |
| removed | -7.00ms | 100.0% → 0.0% | 7.0ms → 0ms |   7 → 0 | `/opt/zig/lib/std/zig/Parse.zig:1537` |

##### `zig.Ast.fullCall` (`/opt/zig/lib/std/zig/Ast.zig`)

|  Change |   Delta |             % |        Time | Samples | Location                            |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------------- |
| removed | -8.00ms |  88.9% → 0.0% | 8.0ms → 0ms |   8 → 0 | `/opt/zig/lib/std/zig/Ast.zig:2503` |
|     new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `/opt/zig/lib/std/zig/Ast.zig:2430` |
| removed | -1.00ms |  11.1% → 0.0% | 1.0ms → 0ms |   1 → 0 | `/opt/zig/lib/std/zig/Ast.zig:2504` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `memset` (`/opt/zig/lib/compiler_rt.zig`)

| Change |     Delta |            % |          Time | Samples | Caller                                                                | Location                             |
| -----: | --------: | -----------: | ------------: | ------: | --------------------------------------------------------------------- | ------------------------------------ |
|    new | +281.00ms | 0.0% → 80.1% | 0ms → 281.0ms | 0 → 281 | `mem.Allocator.allocBytesWithAlignment__anon_10001`                   | `/opt/zig/lib/std/mem/Allocator.zig` |
|    new |  +26.00ms |  0.0% → 7.4% |  0ms → 26.0ms |  0 → 26 | `Io.Writer.splatByte`                                                 | `/opt/zig/lib/std/Io/Writer.zig`     |
|    new |  +20.00ms |  0.0% → 5.7% |  0ms → 20.0ms |  0 → 20 | `array_list.Aligned(zig.Ast.Node.Index,null).shrinkRetainingCapacity` | `/opt/zig/lib/std/array_list.zig`    |
|    new |   +9.00ms |  0.0% → 2.6% |   0ms → 9.0ms |   0 → 9 | `Io.Threaded.dirOpenFilePosix`                                        | `/opt/zig/lib/std/Io/Threaded.zig`   |
|    new |   +4.00ms |  0.0% → 1.1% |   0ms → 4.0ms |   0 → 4 | `mem.Allocator.allocBytesWithAlignment__anon_7893`                    | `/opt/zig/lib/std/mem/Allocator.zig` |

##### `mem.findScalarPos__anon_6382` (`/opt/zig/lib/std/mem.zig`)

| Change |     Delta |            % |          Time | Samples | Caller                                      | Location                              |
| -----: | --------: | -----------: | ------------: | ------: | ------------------------------------------- | ------------------------------------- |
|    new | +109.00ms | 0.0% → 97.3% | 0ms → 109.0ms | 0 → 109 | `mem.findScalar__anon_6379`                 | `/opt/zig/lib/std/mem.zig`            |
|    new |   +1.00ms |  0.0% → 0.9% |   0ms → 1.0ms |   0 → 1 | `zig.Ast.Render.isOneLineContainerDecl`     | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|    new |   +1.00ms |  0.0% → 0.9% |   0ms → 1.0ms |   0 → 1 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|    new |   +1.00ms |  0.0% → 0.9% |   0ms → 1.0ms |   0 → 1 | `zig.Ast.Render.renderToken`                | `/opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.tokenizer.Tokenizer.next` (`/opt/zig/lib/std/zig/tokenizer.zig`)

| Change |    Delta |             % |              Time |   Samples | Caller               | Location                       |
| -----: | -------: | ------------: | ----------------: | --------: | -------------------- | ------------------------------ |
| +17.7% | +75.00ms | 36.1% → 39.4% | 424.0ms → 499.0ms | 424 → 499 | `zig.Ast.parse`      | `/opt/zig/lib/std/zig/Ast.zig` |
|  +2.4% | +18.00ms | 63.8% → 60.6% | 750.0ms → 768.0ms | 750 → 768 | `zig.Ast.tokenSlice` | `/opt/zig/lib/std/zig/Ast.zig` |

##### `zig.Ast.Render.renderExpression` (`/opt/zig/lib/std/zig/Ast/Render.zig`)

|  Change |    Delta |             % |            Time | Samples | Caller                                      | Location                              |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------------------------- | ------------------------------------- |
|  +50.0% | +18.00ms | 30.8% → 28.0% | 36.0ms → 54.0ms | 36 → 54 | `zig.Ast.Render.renderExpression`           | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|  +76.2% | +16.00ms | 17.9% → 19.2% | 21.0ms → 37.0ms | 21 → 37 | `zig.Ast.Render.renderParamList`            | `/opt/zig/lib/std/zig/Ast/Render.zig` |
| +185.7% | +13.00ms |  6.0% → 10.4% |  7.0ms → 20.0ms |  7 → 20 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `/opt/zig/lib/std/zig/Ast/Render.zig` |
| +133.3% |  +8.00ms |   5.1% → 7.3% |  6.0ms → 14.0ms |  6 → 14 | `zig.Ast.Render.renderCall`                 | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|     new |  +8.00ms |   0.0% → 4.1% |     0ms → 8.0ms |   0 → 8 | `zig.Ast.Render.renderExpressionComma`      | `/opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.renderComments` (`/opt/zig/lib/std/zig/Ast/Render.zig`)

|  Change |    Delta |              % |              Time |   Samples | Caller                       | Location                              |
| ------: | -------: | -------------: | ----------------: | --------: | ---------------------------- | ------------------------------------- |
|  +47.4% | +63.00ms | 99.3% → 100.0% | 133.0ms → 196.0ms | 133 → 196 | `zig.Ast.Render.renderSpace` | `/opt/zig/lib/std/zig/Ast/Render.zig` |
| removed |  -1.00ms |    0.7% → 0.0% |       1.0ms → 0ms |     1 → 0 | `zig.Ast.Render.renderToken` | `/opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.tokenSliceForRender` (`/opt/zig/lib/std/zig/Ast/Render.zig`)

|  Change |    Delta |             % |              Time |   Samples | Caller                                   | Location                              |
| ------: | -------: | ------------: | ----------------: | --------: | ---------------------------------------- | ------------------------------------- |
|  +25.8% | +32.00ms | 62.3% → 61.4% | 124.0ms → 156.0ms | 124 → 156 | `zig.Ast.Render.renderToken`             | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|  +62.5% | +10.00ms |  8.0% → 10.2% |   16.0ms → 26.0ms |   16 → 26 | `zig.Ast.Render.renderExpression`        | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|  +19.1% |  +9.00ms | 23.6% → 22.0% |   47.0ms → 56.0ms |   47 → 56 | `zig.Ast.Render.renderIdentifier`        | `/opt/zig/lib/std/zig/Ast/Render.zig` |
| +100.0% |  +3.00ms |   1.5% → 2.4% |     3.0ms → 6.0ms |     3 → 6 | `zig.Ast.Render.renderExtraNewlineToken` | `/opt/zig/lib/std/zig/Ast/Render.zig` |
| +200.0% |  +2.00ms |   0.5% → 1.2% |     1.0ms → 3.0ms |     1 → 3 | `zig.Ast.Render.renderArrayInit`         | `/opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.lastToken` (`/opt/zig/lib/std/zig/Ast.zig`)

|  Change |    Delta |             % |           Time | Samples | Caller                                 | Location                              |
| ------: | -------: | ------------: | -------------: | ------: | -------------------------------------- | ------------------------------------- |
| +228.6% | +16.00ms | 21.9% → 30.7% | 7.0ms → 23.0ms |  7 → 23 | `zig.Ast.Render.renderExpression`      | `/opt/zig/lib/std/zig/Ast/Render.zig` |
| +160.0% |  +8.00ms | 15.6% → 17.3% | 5.0ms → 13.0ms |  5 → 13 | `zig.Ast.Render.renderParamList`       | `/opt/zig/lib/std/zig/Ast/Render.zig` |
| +125.0% |  +5.00ms | 12.5% → 12.0% |  4.0ms → 9.0ms |   4 → 9 | `zig.Ast.Render.renderExpressionComma` | `/opt/zig/lib/std/zig/Ast/Render.zig` |
| +166.7% |  +5.00ms |  9.4% → 10.7% |  3.0ms → 8.0ms |   3 → 8 | `zig.Ast.Render.renderArrayInit`       | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|     new |  +4.00ms |   0.0% → 5.3% |    0ms → 4.0ms |   0 → 4 | `zig.Ast.Render.renderWhile`           | `/opt/zig/lib/std/zig/Ast/Render.zig` |

##### `0xe3e00` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |    Delta |             % |         Time | Samples | Caller                                | Location                           |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------------------- | ---------------------------------- |
|    new | +39.00ms | 0.0% → 100.0% | 0ms → 39.0ms |  0 → 39 | `Io.Threaded.fileReadPositionalPosix` | `/opt/zig/lib/std/Io/Threaded.zig` |

##### `zig.Ast.nodeMainToken` (`/opt/zig/lib/std/zig/Ast.zig`)

|   Change |    Delta |             % |           Time | Samples | Caller                            | Location                              |
| -------: | -------: | ------------: | -------------: | ------: | --------------------------------- | ------------------------------------- |
| +1750.0% | +35.00ms | 12.5% → 68.5% | 2.0ms → 37.0ms |  2 → 37 | `zig.Ast.Render.renderExpression` | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|  +175.0% |  +7.00ms | 25.0% → 20.4% | 4.0ms → 11.0ms |  4 → 11 | `zig.Ast.lastToken`               | `/opt/zig/lib/std/zig/Ast.zig`        |
|   -33.3% |  -3.00ms | 56.3% → 11.1% |  9.0ms → 6.0ms |   9 → 6 | `zig.Ast.firstToken`              | `/opt/zig/lib/std/zig/Ast.zig`        |
|  removed |  -1.00ms |   6.3% → 0.0% |    1.0ms → 0ms |   1 → 0 | `zig.Ast.forSimple`               | `/opt/zig/lib/std/zig/Ast.zig`        |

##### `compiler_rt.memcpy.copyLessThan16` (`/opt/zig/lib/compiler_rt/memcpy.zig`)

| Change |    Delta |             % |         Time | Samples | Caller                               | Location                              |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------------------ | ------------------------------------- |
|    new | +33.00ms | 0.0% → 100.0% | 0ms → 33.0ms |  0 → 33 | `compiler_rt.memcpy.copySmallLength` | `/opt/zig/lib/compiler_rt/memcpy.zig` |

##### `zig.Parse.addNode` (`/opt/zig/lib/std/zig/Parse.zig`)

|  Change |    Delta |             % |           Time | Samples | Caller                           | Location                         |
| ------: | -------: | ------------: | -------------: | ------: | -------------------------------- | -------------------------------- |
| +500.0% | +15.00ms | 60.0% → 50.0% | 3.0ms → 18.0ms |  3 → 18 | `zig.Parse.parsePrimaryTypeExpr` | `/opt/zig/lib/std/zig/Parse.zig` |
|     new |  +3.00ms |   0.0% → 8.3% |    0ms → 3.0ms |   0 → 3 | `zig.Parse.parseSuffixOp`        | `/opt/zig/lib/std/zig/Parse.zig` |
|     new |  +3.00ms |   0.0% → 8.3% |    0ms → 3.0ms |   0 → 3 | `zig.Parse.parseVarDeclProto`    | `/opt/zig/lib/std/zig/Parse.zig` |
|     new |  +2.00ms |   0.0% → 5.6% |    0ms → 2.0ms |   0 → 2 | `zig.Parse.parseBlock`           | `/opt/zig/lib/std/zig/Parse.zig` |
|     new |  +2.00ms |   0.0% → 5.6% |    0ms → 2.0ms |   0 → 2 | `zig.Parse.parsePrimaryExpr`     | `/opt/zig/lib/std/zig/Parse.zig` |

##### `zig.Ast.Render.renderSpace` (`/opt/zig/lib/std/zig/Ast/Render.zig`)

|  Change |    Delta |             % |              Time |   Samples | Caller                                 | Location                              |
| ------: | -------: | ------------: | ----------------: | --------: | -------------------------------------- | ------------------------------------- |
|  +24.3% | +27.00ms | 78.7% → 80.7% | 111.0ms → 138.0ms | 111 → 138 | `zig.Ast.Render.renderToken`           | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|  +42.1% |  +8.00ms | 13.5% → 15.8% |   19.0ms → 27.0ms |   19 → 27 | `zig.Ast.Render.renderExpression`      | `/opt/zig/lib/std/zig/Ast/Render.zig` |
| removed |  -4.00ms |   2.8% → 0.0% |       4.0ms → 0ms |     4 → 0 | `zig.Ast.Render.renderContainerField`  | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|     new |  +2.00ms |   0.0% → 1.2% |       0ms → 2.0ms |     0 → 2 | `zig.Ast.Render.renderExpressionComma` | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|  -50.0% |  -1.00ms |   1.4% → 0.6% |     2.0ms → 1.0ms |     2 → 1 | `zig.Ast.Render.renderArrayInit`       | `/opt/zig/lib/std/zig/Ast/Render.zig` |

##### `mem.findPosLinear__anon_31435` (`/opt/zig/lib/std/mem.zig`)

| Change |    Delta |             % |         Time | Samples | Caller                    | Location                   |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------- | -------------------------- |
|    new | +28.00ms | 0.0% → 100.0% | 0ms → 28.0ms |  0 → 28 | `mem.findPos__anon_31424` | `/opt/zig/lib/std/mem.zig` |

##### `zig.Ast.nodeData` (`/opt/zig/lib/std/zig/Ast.zig`)

| Change |    Delta |              % |          Time | Samples | Caller                            | Location                              |
| -----: | -------: | -------------: | ------------: | ------: | --------------------------------- | ------------------------------------- |
|    new | +18.00ms |   0.0% → 72.0% |  0ms → 18.0ms |  0 → 18 | `zig.Ast.Render.renderExpression` | `/opt/zig/lib/std/zig/Ast/Render.zig` |
| +50.0% |  +2.00ms | 100.0% → 24.0% | 4.0ms → 6.0ms |   4 → 6 | `zig.Ast.lastToken`               | `/opt/zig/lib/std/zig/Ast.zig`        |
|    new |  +1.00ms |    0.0% → 4.0% |   0ms → 1.0ms |   0 → 1 | `zig.Ast.Render.renderMember`     | `/opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.hasComment` (`/opt/zig/lib/std/zig/Ast/Render.zig`)

|  Change |    Delta |             % |           Time | Samples | Caller                                  | Location                              |
| ------: | -------: | ------------: | -------------: | ------: | --------------------------------------- | ------------------------------------- |
|     new | +12.00ms |  0.0% → 30.0% |   0ms → 12.0ms |  0 → 12 | `zig.Ast.Render.isOneLineContainerDecl` | `/opt/zig/lib/std/zig/Ast/Render.zig` |
| removed |  -7.00ms |  36.8% → 0.0% |    7.0ms → 0ms |   7 → 0 | `zig.Ast.Render.renderContainerDecl`    | `/opt/zig/lib/std/zig/Ast/Render.zig` |
| +100.0% |  +5.00ms | 26.3% → 25.0% | 5.0ms → 10.0ms |  5 → 10 | `zig.Ast.Render.renderArrayInit`        | `/opt/zig/lib/std/zig/Ast/Render.zig` |
| +200.0% |  +4.00ms | 10.5% → 15.0% |  2.0ms → 6.0ms |   2 → 6 | `zig.Ast.Render.renderStructInit`       | `/opt/zig/lib/std/zig/Ast/Render.zig` |
| +133.3% |  +4.00ms | 15.8% → 17.5% |  3.0ms → 7.0ms |   3 → 7 | `zig.Ast.Render.renderSwitchCase`       | `/opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.renderExpressionComma` (`/opt/zig/lib/std/zig/Ast/Render.zig`)

| Change |    Delta |            % |         Time | Samples | Caller                                | Location                              |
| -----: | -------: | -----------: | -----------: | ------: | ------------------------------------- | ------------------------------------- |
|    new | +18.00ms | 0.0% → 90.0% | 0ms → 18.0ms |  0 → 18 | `zig.Ast.Render.renderContainerField` | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|    new |  +2.00ms | 0.0% → 10.0% |  0ms → 2.0ms |   0 → 2 | `zig.Ast.Render.renderArrayInit`      | `/opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.AutoIndentingStream.writeByte` (`/opt/zig/lib/std/debug.zig`)

|  Change |    Delta |      % |            Time | Samples | Caller                       | Location                              |
| ------: | -------: | -----: | --------------: | ------: | ---------------------------- | ------------------------------------- |
| +118.8% | +19.00ms | 100.0% | 16.0ms → 35.0ms | 16 → 35 | `zig.Ast.Render.renderSpace` | `/opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig`)

|  Change |    Delta |      % |            Time | Samples | Caller         | Location        |
| ------: | -------: | -----: | --------------: | ------: | -------------- | --------------- |
| +112.5% | +18.00ms | 100.0% | 16.0ms → 34.0ms | 16 → 34 | `profile.main` | `./profile.zig` |

##### `zig.Ast.Render.AutoIndentingStream.currentIndent` (`/opt/zig/lib/std/zig/Ast/Render.zig`)

| Change |    Delta |      % |            Time | Samples | Caller                                           | Location                              |
| -----: | -------: | -----: | --------------: | ------: | ------------------------------------------------ | ------------------------------------- |
| +78.3% | +18.00ms | 100.0% | 23.0ms → 41.0ms | 23 → 41 | `zig.Ast.Render.AutoIndentingStream.applyIndent` | `/opt/zig/lib/std/zig/Ast/Render.zig` |

##### `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).Slice.items__anon_32582` (`/opt/zig/lib/std/multi_array_list.zig`)

| Change |    Delta |      % |            Time | Samples | Caller               | Location                       |
| -----: | -------: | -----: | --------------: | ------: | -------------------- | ------------------------------ |
| +75.0% | +18.00ms | 100.0% | 24.0ms → 42.0ms | 24 → 42 | `zig.Ast.tokenStart` | `/opt/zig/lib/std/zig/Ast.zig` |

##### `mem.findScalar__anon_6379` (`/opt/zig/lib/std/mem.zig`)

| Change |    Delta |            % |         Time | Samples | Caller                      | Location                              |
| -----: | -------: | -----------: | -----------: | ------: | --------------------------- | ------------------------------------- |
|    new | +12.00ms | 0.0% → 66.7% | 0ms → 12.0ms |  0 → 12 | `zig.Ast.Render.hasComment` | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|    new |  +6.00ms | 0.0% → 33.3% |  0ms → 6.0ms |   0 → 6 | `zig.Ast.tokensOnSameLine`  | `/opt/zig/lib/std/zig/Ast.zig`        |

##### `0xdd2b4` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller         | Location                       |
| -----: | ------: | ------------: | ----------: | ------: | -------------- | ------------------------------ |
|    new | +4.00ms | 0.0% → 100.0% | 0ms → 4.0ms |   0 → 4 | `Io.File.stat` | `/opt/zig/lib/std/Io/File.zig` |

##### `0x929c4` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |            % |        Time | Samples | Caller                            | Location                              |
| -----: | ------: | -----------: | ----------: | ------: | --------------------------------- | ------------------------------------- |
|    new | +2.00ms | 0.0% → 66.7% | 0ms → 2.0ms |   0 → 2 | `zig.Ast.Render.renderExpression` | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|    new | +1.00ms | 0.0% → 33.3% | 0ms → 1.0ms |   0 → 1 | `start.callMain`                  | `/opt/zig/lib/std/start.zig`          |

##### `0x91d0c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location                               |
| -----: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
|    new | +3.00ms | 0.0% → 100.0% | 0ms → 3.0ms |   0 → 3 | `0x92f67` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0xde3c8` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time | Samples | Caller                | Location                           |
| ------: | ------: | ------------: | ----------: | ------: | --------------------- | ---------------------------------- |
|     new | +7.00ms | 0.0% → 100.0% | 0ms → 7.0ms |   0 → 7 | `Io.Threaded.closeFd` | `/opt/zig/lib/std/Io/Threaded.zig` |
| removed | -6.00ms | 100.0% → 0.0% | 6.0ms → 0ms |   6 → 0 | `posix.close`         | `/opt/zig/lib/std/posix.zig`       |

##### `0xe7e0c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller                       | Location                    |
| -----: | ------: | ------------: | ----------: | ------: | ---------------------------- | --------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `heap.c_allocator_impl.free` | `/opt/zig/lib/std/heap.zig` |

##### `0x92274` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller                        | Location                    |
| -----: | ------: | ------------: | ----------: | ------: | ----------------------------- | --------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `heap.c_allocator_impl.alloc` | `/opt/zig/lib/std/heap.zig` |

##### `0x91c70` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location                               |
| -----: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x92f67` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x92240` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller                   | Location                             |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------ | ------------------------------------ |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `mem.Allocator.rawAlloc` | `/opt/zig/lib/std/mem/Allocator.zig` |

##### `0x8fd10` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location                               |
| -----: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x92a9b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x8ff24` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location                               |
| -----: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x91bfb` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x8ffd0` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location                               |
| -----: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x91bfb` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x90e1c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location                               |
| -----: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x91b93` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x92dcc` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller                        | Location                    |
| -----: | ------: | ------------: | ----------: | ------: | ----------------------------- | --------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `heap.c_allocator_impl.remap` | `/opt/zig/lib/std/heap.zig` |

##### `0x8fad8` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location                               |
| -----: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x91bfb` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9d200` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |    Delta |             % |         Time | Samples | Caller                                                                                 | Location                                |
| ------: | -------: | ------------: | -----------: | ------: | -------------------------------------------------------------------------------------- | --------------------------------------- |
| removed | -91.00ms |  68.9% → 0.0% | 91.0ms → 0ms |  91 → 0 | `array_list.Aligned(u8,null).ensureUnusedCapacity`                                     | `/opt/zig/lib/std/array_list.zig`       |
| removed | -27.00ms |  20.5% → 0.0% | 27.0ms → 0ms |  27 → 0 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).ensureUnusedCapacity` | `/opt/zig/lib/std/multi_array_list.zig` |
|     new | +15.00ms | 0.0% → 100.0% | 0ms → 15.0ms |  0 → 15 | `0x92f67`                                                                              | `/usr/lib/aarch64-linux-gnu/libc.so.6`  |
| removed |  -4.00ms |   3.0% → 0.0% |  4.0ms → 0ms |   4 → 0 | `multi_array_list.MultiArrayList(zig.Ast.Node).ensureUnusedCapacity`                   | `/opt/zig/lib/std/multi_array_list.zig` |
| removed |  -3.00ms |   2.3% → 0.0% |  3.0ms → 0ms |   3 → 0 | `zig.Parse.addExtra__anon_11960`                                                       | `/opt/zig/lib/std/zig/Parse.zig`        |

##### `mem.indexOfScalarPos__anon_8996` (`/opt/zig/lib/std/mem.zig`)

|  Change |    Delta |            % |         Time | Samples | Caller                         | Location                              |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------------ | ------------------------------------- |
| removed | -74.00ms | 96.1% → 0.0% | 74.0ms → 0ms |  74 → 0 | `mem.indexOfScalar__anon_5905` | `/opt/zig/lib/std/mem.zig`            |
| removed |  -2.00ms |  2.6% → 0.0% |  2.0ms → 0ms |   2 → 0 | `mem.indexOfPos__anon_23640`   | `/opt/zig/lib/std/mem.zig`            |
| removed |  -1.00ms |  1.3% → 0.0% |  1.0ms → 0ms |   1 → 0 | `zig.Ast.Render.rowSize`       | `/opt/zig/lib/std/zig/Ast/Render.zig` |

##### `0x9e670` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |    Delta |            % |         Time | Samples | Caller                                                                                 | Location                                |
| ------: | -------: | -----------: | -----------: | ------: | -------------------------------------------------------------------------------------- | --------------------------------------- |
| removed | -36.00ms | 52.2% → 0.0% | 36.0ms → 0ms |  36 → 0 | `array_list.Aligned(u8,null).ensureUnusedCapacity`                                     | `/opt/zig/lib/std/array_list.zig`       |
| removed | -20.00ms | 29.0% → 0.0% | 20.0ms → 0ms |  20 → 0 | `zig.Ast.parse`                                                                        | `/opt/zig/lib/std/zig/Ast.zig`          |
| removed |  -4.00ms |  5.8% → 0.0% |  4.0ms → 0ms |   4 → 0 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).ensureUnusedCapacity` | `/opt/zig/lib/std/multi_array_list.zig` |
| removed |  -4.00ms |  5.8% → 0.0% |  4.0ms → 0ms |   4 → 0 | `array_list.Aligned(u32,null).appendSlice`                                             | `/opt/zig/lib/std/array_list.zig`       |
| removed |  -2.00ms |  2.9% → 0.0% |  2.0ms → 0ms |   2 → 0 | `array_list.AlignedManaged(u8,null).initCapacity`                                      | `/opt/zig/lib/std/array_list.zig`       |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32303` (`/opt/zig/lib/std/multi_array_list.zig`)

| Change |    Delta |      % |           Time | Samples | Caller            | Location                       |
| -----: | -------: | -----: | -------------: | ------: | ----------------- | ------------------------------ |
| -96.7% | -59.00ms | 100.0% | 61.0ms → 2.0ms |  61 → 2 | `zig.Ast.nodeTag` | `/opt/zig/lib/std/zig/Ast.zig` |

##### `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).Slice.items__anon_27682` (`/opt/zig/lib/std/multi_array_list.zig`)

|  Change |    Delta |             % |            Time | Samples | Caller                          | Location                         |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------------- | -------------------------------- |
|  -88.1% | -37.00ms | 48.8% → 16.1% |  42.0ms → 5.0ms |  42 → 5 | `zig.Parse.tokenTag`            | `/opt/zig/lib/std/zig/Parse.zig` |
|  -41.2% | -14.00ms | 39.5% → 64.5% | 34.0ms → 20.0ms | 34 → 20 | `zig.Ast.tokenTag`              | `/opt/zig/lib/std/zig/Ast.zig`   |
|  -33.3% |  -3.00ms | 10.5% → 19.4% |   9.0ms → 6.0ms |   9 → 6 | `zig.Ast.isTokenPrecededByTags` | `/opt/zig/lib/std/zig/Ast.zig`   |
| removed |  -1.00ms |   1.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `zig.Parse.eatTokens`           | `/opt/zig/lib/std/zig/Parse.zig` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32262` (`/opt/zig/lib/std/multi_array_list.zig`)

| Change |    Delta |              % |             Time |  Samples | Caller                                                    | Location                                |
| -----: | -------: | -------------: | ---------------: | -------: | --------------------------------------------------------- | --------------------------------------- |
| -34.1% | -44.00ms | 100.0% → 98.8% | 129.0ms → 85.0ms | 129 → 85 | `zig.Ast.nodeMainToken`                                   | `/opt/zig/lib/std/zig/Ast.zig`          |
|    new |  +1.00ms |    0.0% → 1.2% |      0ms → 1.0ms |    0 → 1 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.set` | `/opt/zig/lib/std/multi_array_list.zig` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_28815` (`/opt/zig/lib/std/multi_array_list.zig`)

| Change |    Delta |              % |              Time |   Samples | Caller                  | Location                       |
| -----: | -------: | -------------: | ----------------: | --------: | ----------------------- | ------------------------------ |
| -21.8% | -31.00ms | 100.0% → 99.1% | 142.0ms → 111.0ms | 142 → 111 | `zig.Ast.nodeData`      | `/opt/zig/lib/std/zig/Ast.zig` |
|    new |  +1.00ms |    0.0% → 0.9% |       0ms → 1.0ms |     0 → 1 | `zig.Ast.switchCaseOne` | `/opt/zig/lib/std/zig/Ast.zig` |

##### `mem.eqlBytes` (`/opt/zig/lib/std/mem.zig`)

|  Change |    Delta |              % |            Time | Samples | Caller                | Location                   |
| ------: | -------: | -------------: | --------------: | ------: | --------------------- | -------------------------- |
|  -42.9% | -24.00ms | 90.3% → 100.0% | 56.0ms → 32.0ms | 56 → 32 | `mem.eql__anon_12872` | `/opt/zig/lib/std/mem.zig` |
| removed |  -6.00ms |    9.7% → 0.0% |     6.0ms → 0ms |   6 → 0 | `mem.eql__anon_15242` | `/opt/zig/lib/std/mem.zig` |

##### `mem.indexOfPosLinear__anon_26200` (`/opt/zig/lib/std/mem.zig`)

|  Change |    Delta |             % |         Time | Samples | Caller                       | Location                   |
| ------: | -------: | ------------: | -----------: | ------: | ---------------------------- | -------------------------- |
| removed | -21.00ms | 100.0% → 0.0% | 21.0ms → 0ms |  21 → 0 | `mem.indexOfPos__anon_23640` | `/opt/zig/lib/std/mem.zig` |

##### `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` (`/opt/zig/lib/std/static_string_map.zig`)

| Change |    Delta |      % |              Time |   Samples | Caller                                                                                          | Location                                 |
| -----: | -------: | -----: | ----------------: | --------: | ----------------------------------------------------------------------------------------------- | ---------------------------------------- |
|  -8.0% | -20.00ms | 100.0% | 249.0ms → 229.0ms | 249 → 229 | `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).get` | `/opt/zig/lib/std/static_string_map.zig` |

##### `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).ensureTotalCapacity` (`/opt/zig/lib/std/math.zig`)

|  Change |    Delta |             % |         Time | Samples | Caller                                                                                 | Location                                |
| ------: | -------: | ------------: | -----------: | ------: | -------------------------------------------------------------------------------------- | --------------------------------------- |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |  20 → 0 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).ensureUnusedCapacity` | `/opt/zig/lib/std/multi_array_list.zig` |

##### `zig.Parse.parsePrimaryTypeExpr` (`/opt/zig/lib/std/zig/Parse.zig`)

|  Change |    Delta |              % |            Time | Samples | Caller                      | Location                         |
| ------: | -------: | -------------: | --------------: | ------: | --------------------------- | -------------------------------- |
|  -46.2% | -18.00ms | 95.1% → 100.0% | 39.0ms → 21.0ms | 39 → 21 | `zig.Parse.parseSuffixExpr` | `/opt/zig/lib/std/zig/Parse.zig` |
| removed |  -2.00ms |    4.9% → 0.0% |     2.0ms → 0ms |   2 → 0 | `zig.Parse.parseTypeExpr`   | `/opt/zig/lib/std/zig/Parse.zig` |

##### `0x9e674` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |    Delta |            % |         Time | Samples | Caller                                                                                 | Location                                |
| ------: | -------: | -----------: | -----------: | ------: | -------------------------------------------------------------------------------------- | --------------------------------------- |
| removed | -10.00ms | 52.6% → 0.0% | 10.0ms → 0ms |  10 → 0 | `array_list.Aligned(u8,null).ensureUnusedCapacity`                                     | `/opt/zig/lib/std/array_list.zig`       |
| removed |  -7.00ms | 36.8% → 0.0% |  7.0ms → 0ms |   7 → 0 | `zig.Ast.parse`                                                                        | `/opt/zig/lib/std/zig/Ast.zig`          |
| removed |  -2.00ms | 10.5% → 0.0% |  2.0ms → 0ms |   2 → 0 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).ensureUnusedCapacity` | `/opt/zig/lib/std/multi_array_list.zig` |

##### `0xddb88` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |    Delta |             % |         Time | Samples | Caller       | Location                     |
| ------: | -------: | ------------: | -----------: | ------: | ------------ | ---------------------------- |
| removed | -19.00ms | 100.0% → 0.0% | 19.0ms → 0ms |  19 → 0 | `posix.read` | `/opt/zig/lib/std/posix.zig` |

##### `zig.Ast.Render.AutoIndentingStream.writeAll` (`/opt/zig/lib/std/zig/Ast/Render.zig`)

|  Change |    Delta |             % |            Time | Samples | Caller                                      | Location                              |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------------------------- | ------------------------------------- |
|  -35.6% | -16.00ms | 81.8% → 74.4% | 45.0ms → 29.0ms | 45 → 29 | `zig.Ast.Render.renderToken`                | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|  +16.7% |  +1.00ms | 10.9% → 17.9% |   6.0ms → 7.0ms |   6 → 7 | `zig.Ast.Render.renderExpression`           | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|  -50.0% |  -1.00ms |   3.6% → 2.6% |   2.0ms → 1.0ms |   2 → 1 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `/opt/zig/lib/std/zig/Ast/Render.zig` |
| removed |  -1.00ms |   1.8% → 0.0% |     1.0ms → 0ms |   1 → 0 | `zig.Ast.Render.renderFnProto`              | `/opt/zig/lib/std/zig/Ast/Render.zig` |
| removed |  -1.00ms |   1.8% → 0.0% |     1.0ms → 0ms |   1 → 0 | `zig.Ast.Render.renderMember`               | `/opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Parse.parseTypeExpr` (`/opt/zig/lib/std/multi_array_list.zig`)

|  Change |    Delta |            % |         Time | Samples | Caller                           | Location                         |
| ------: | -------: | -----------: | -----------: | ------: | -------------------------------- | -------------------------------- |
| removed | -13.00ms | 81.3% → 0.0% | 13.0ms → 0ms |  13 → 0 | `zig.Parse.parseCurlySuffixExpr` | `/opt/zig/lib/std/zig/Parse.zig` |
| removed |  -3.00ms | 18.8% → 0.0% |  3.0ms → 0ms |   3 → 0 | `zig.Parse.expectTypeExpr`       | `/opt/zig/lib/std/zig/Parse.zig` |

##### `0x76974` (`/tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fYcQks/zig-base/binary`)

|  Change |    Delta |             % |         Time | Samples | Caller                                        | Location                              |
| ------: | -------: | ------------: | -----------: | ------: | --------------------------------------------- | ------------------------------------- |
| removed | -16.00ms | 100.0% → 0.0% | 16.0ms → 0ms |  16 → 0 | `zig.Ast.Render.AutoIndentingStream.writeAll` | `/opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.renderToken` (`/opt/zig/lib/std/zig/Ast/Render.zig`)

|  Change |   Delta |             % |           Time | Samples | Caller                                      | Location                              |
| ------: | ------: | ------------: | -------------: | ------: | ------------------------------------------- | ------------------------------------- |
|  -50.0% | -4.00ms |  13.8% → 9.3% |  8.0ms → 4.0ms |   8 → 4 | `zig.Ast.Render.renderParamList`            | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|  -50.0% | -4.00ms |  13.8% → 9.3% |  8.0ms → 4.0ms |   8 → 4 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|  +75.0% | +3.00ms |  6.9% → 16.3% |  4.0ms → 7.0ms |   4 → 7 | `zig.Ast.Render.renderSpace`                | `/opt/zig/lib/std/zig/Ast/Render.zig` |
| removed | -3.00ms |   5.2% → 0.0% |    3.0ms → 0ms |   3 → 0 | `zig.Ast.Render.renderArrayInit`            | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|  -20.0% | -2.00ms | 17.2% → 18.6% | 10.0ms → 8.0ms |  10 → 8 | `zig.Ast.Render.renderExpression`           | `/opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Parse.parseSuffixExpr` (`/opt/zig/lib/std/zig/Parse.zig`)

| Change |    Delta |      % |           Time | Samples | Caller                          | Location                         |
| -----: | -------: | -----: | -------------: | ------: | ------------------------------- | -------------------------------- |
| -61.9% | -13.00ms | 100.0% | 21.0ms → 8.0ms |  21 → 8 | `zig.Parse.parseErrorUnionExpr` | `/opt/zig/lib/std/zig/Parse.zig` |

##### `os.linux.errnoFromSyscall` (`/opt/zig/lib/std/os/linux.zig`)

|  Change |   Delta |            % |        Time | Samples | Caller                                   | Location                       |
| ------: | ------: | -----------: | ----------: | ------: | ---------------------------------------- | ------------------------------ |
| removed | -7.00ms | 58.3% → 0.0% | 7.0ms → 0ms |   7 → 0 | `fs.Dir.Iterator__struct_2193.nextLinux` | `/opt/zig/lib/std/fs/Dir.zig`  |
| removed | -5.00ms | 41.7% → 0.0% | 5.0ms → 0ms |   5 → 0 | `fs.File.stat`                           | `/opt/zig/lib/std/fs/File.zig` |

##### `zig.Parse.eatToken` (`/opt/zig/lib/std/zig/Parse.zig`)

|  Change |   Delta |            % |          Time | Samples | Caller                           | Location                         |
| ------: | ------: | -----------: | ------------: | ------: | -------------------------------- | -------------------------------- |
|  -77.8% | -7.00ms | 25.7% → 7.4% | 9.0ms → 2.0ms |   9 → 2 | `zig.Parse.parseSuffixExpr`      | `/opt/zig/lib/std/zig/Parse.zig` |
| removed | -4.00ms | 11.4% → 0.0% |   4.0ms → 0ms |   4 → 0 | `zig.Parse.expectStatement`      | `/opt/zig/lib/std/zig/Parse.zig` |
| removed | -3.00ms |  8.6% → 0.0% |   3.0ms → 0ms |   3 → 0 | `zig.Parse.parseByteAlign`       | `/opt/zig/lib/std/zig/Parse.zig` |
| +100.0% | +3.00ms | 8.6% → 22.2% | 3.0ms → 6.0ms |   3 → 6 | `zig.Parse.parseCurlySuffixExpr` | `/opt/zig/lib/std/zig/Parse.zig` |
| +300.0% | +3.00ms | 2.9% → 14.8% | 1.0ms → 4.0ms |   1 → 4 | `zig.Parse.parseBlock`           | `/opt/zig/lib/std/zig/Parse.zig` |

##### `zig.Ast.tokenSlice` (`/opt/zig/lib/std/zig/Ast.zig`)

|  Change |    Delta |             % |              Time |   Samples | Caller                                   | Location                              |
| ------: | -------: | ------------: | ----------------: | --------: | ---------------------------------------- | ------------------------------------- |
|  -19.0% | -35.00ms | 68.4% → 56.9% | 184.0ms → 149.0ms | 184 → 149 | `zig.Ast.Render.tokenSliceForRender`     | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|  +46.4% | +13.00ms | 10.4% → 15.6% |   28.0ms → 41.0ms |   28 → 41 | `zig.Ast.Render.renderToken`             | `/opt/zig/lib/std/zig/Ast/Render.zig` |
| +400.0% |  +4.00ms |   0.4% → 1.9% |     1.0ms → 5.0ms |     1 → 5 | `zig.Ast.Render.renderExpression`        | `/opt/zig/lib/std/zig/Ast/Render.zig` |
| +100.0% |  +3.00ms |   1.1% → 2.3% |     3.0ms → 6.0ms |     3 → 6 | `zig.Ast.Render.renderExtraNewlineToken` | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|     new |  +3.00ms |   0.0% → 1.1% |       0ms → 3.0ms |     0 → 3 | `zig.Ast.Render.renderArrayInit`         | `/opt/zig/lib/std/zig/Ast/Render.zig` |

##### `mem.indexOfPos__anon_23640` (`/opt/zig/lib/std/mem.zig`)

|  Change |   Delta |             % |        Time | Samples | Caller                    | Location                   |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------- | -------------------------- |
| removed | -7.00ms | 100.0% → 0.0% | 7.0ms → 0ms |   7 → 0 | `mem.indexOf__anon_18425` | `/opt/zig/lib/std/mem.zig` |

##### `zig.Parse.expectExpr` (`/opt/zig/lib/std/zig/Parse.zig`)

|  Change |   Delta |            % |        Time | Samples | Caller                          | Location                         |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------------- | -------------------------------- |
| removed | -4.00ms | 57.1% → 0.0% | 4.0ms → 0ms |   4 → 0 | `zig.Parse.parseSuffixExpr`     | `/opt/zig/lib/std/zig/Parse.zig` |
| removed | -1.00ms | 14.3% → 0.0% | 1.0ms → 0ms |   1 → 0 | `zig.Parse.parseFieldInit`      | `/opt/zig/lib/std/zig/Parse.zig` |
| removed | -1.00ms | 14.3% → 0.0% | 1.0ms → 0ms |   1 → 0 | `zig.Parse.parseWhileStatement` | `/opt/zig/lib/std/zig/Parse.zig` |
| removed | -1.00ms | 14.3% → 0.0% | 1.0ms → 0ms |   1 → 0 | `zig.Parse.parseSuffixOp`       | `/opt/zig/lib/std/zig/Parse.zig` |

##### `zig.Ast.fullCall` (`/opt/zig/lib/std/zig/Ast.zig`)

| Change |   Delta |      % |          Time | Samples | Caller                            | Location                              |
| -----: | ------: | -----: | ------------: | ------: | --------------------------------- | ------------------------------------- |
| -77.8% | -7.00ms | 100.0% | 9.0ms → 2.0ms |   9 → 2 | `zig.Ast.Render.renderExpression` | `/opt/zig/lib/std/zig/Ast/Render.zig` |

##### `0x9d11c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |    Delta |            % |         Time | Samples | Caller                                        | Location                              |
| ------: | -------: | -----------: | -----------: | ------: | --------------------------------------------- | ------------------------------------- |
| removed | -10.00ms | 90.9% → 0.0% | 10.0ms → 0ms |  10 → 0 | `zig.Ast.Render.AutoIndentingStream.writeAll` | `/opt/zig/lib/std/zig/Ast/Render.zig` |
| removed |  -1.00ms |  9.1% → 0.0% |  1.0ms → 0ms |   1 → 0 | `Io.Writer.alignBufferOptions`                | `/opt/zig/lib/std/Io/Writer.zig`      |

##### `0x9d100` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |    Delta |            % |         Time | Samples | Caller                                        | Location                              |
| ------: | -------: | -----------: | -----------: | ------: | --------------------------------------------- | ------------------------------------- |
| removed | -10.00ms | 90.9% → 0.0% | 10.0ms → 0ms |  10 → 0 | `zig.Ast.Render.AutoIndentingStream.writeAll` | `/opt/zig/lib/std/zig/Ast/Render.zig` |
| removed |  -1.00ms |  9.1% → 0.0% |  1.0ms → 0ms |   1 → 0 | `zig.Parse.parseSuffixExpr`                   | `/opt/zig/lib/std/zig/Parse.zig`      |

##### `0x9d184` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |    Delta |             % |         Time | Samples | Caller                                        | Location                              |
| ------: | -------: | ------------: | -----------: | ------: | --------------------------------------------- | ------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |  10 → 0 | `zig.Ast.Render.AutoIndentingStream.writeAll` | `/opt/zig/lib/std/zig/Ast/Render.zig` |

##### `0x9d138` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |            % |        Time | Samples | Caller                                        | Location                              |
| ------: | ------: | -----------: | ----------: | ------: | --------------------------------------------- | ------------------------------------- |
| removed | -8.00ms | 88.9% → 0.0% | 8.0ms → 0ms |   8 → 0 | `zig.Ast.Render.AutoIndentingStream.writeAll` | `/opt/zig/lib/std/zig/Ast/Render.zig` |
| removed | -1.00ms | 11.1% → 0.0% | 1.0ms → 0ms |   1 → 0 | `zig.Parse.parseSuffixExpr`                   | `/opt/zig/lib/std/zig/Parse.zig`      |

##### `0x9d168` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |            % |        Time | Samples | Caller                                             | Location                              |
| ------: | ------: | -----------: | ----------: | ------: | -------------------------------------------------- | ------------------------------------- |
| removed | -6.00ms | 85.7% → 0.0% | 6.0ms → 0ms |   6 → 0 | `zig.Ast.Render.AutoIndentingStream.writeAll`      | `/opt/zig/lib/std/zig/Ast/Render.zig` |
| removed | -1.00ms | 14.3% → 0.0% | 1.0ms → 0ms |   1 → 0 | `array_list.Aligned(u8,null).ensureUnusedCapacity` | `/opt/zig/lib/std/array_list.zig`     |

##### `0x9d150` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time | Samples | Caller                                        | Location                              |
| ------: | ------: | ------------: | ----------: | ------: | --------------------------------------------- | ------------------------------------- |
| removed | -5.00ms | 100.0% → 0.0% | 5.0ms → 0ms |   5 → 0 | `zig.Ast.Render.AutoIndentingStream.writeAll` | `/opt/zig/lib/std/zig/Ast/Render.zig` |

##### `0xdda44` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |    Delta |             % |         Time | Samples | Caller                         | Location                           |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------ | ---------------------------------- |
| removed | -19.00ms | 100.0% → 0.0% | 19.0ms → 0ms |  19 → 0 | `posix.openatZ`                | `/opt/zig/lib/std/posix.zig`       |
|     new | +13.00ms |  0.0% → 92.9% | 0ms → 13.0ms |  0 → 13 | `Io.Threaded.dirOpenFilePosix` | `/opt/zig/lib/std/Io/Threaded.zig` |
|     new |  +1.00ms |   0.0% → 7.1% |  0ms → 1.0ms |   0 → 1 | `Io.Threaded.dirOpenDirPosix`  | `/opt/zig/lib/std/Io/Threaded.zig` |

##### `0x9e5c0` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time | Samples | Caller                                           | Location                              |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------------------ | ------------------------------------- |
| removed | -4.00ms | 100.0% → 0.0% | 4.0ms → 0ms |   4 → 0 | `zig.Ast.Render.AutoIndentingStream.applyIndent` | `/opt/zig/lib/std/zig/Ast/Render.zig` |

##### `0x9e580` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |            % |        Time | Samples | Caller                                             | Location                              |
| ------: | ------: | -----------: | ----------: | ------: | -------------------------------------------------- | ------------------------------------- |
| removed | -1.00ms | 25.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `array_list.Aligned(u8,null).ensureUnusedCapacity` | `/opt/zig/lib/std/array_list.zig`     |
| removed | -1.00ms | 25.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `zig.Ast.Render.renderExpression`                  | `/opt/zig/lib/std/zig/Ast/Render.zig` |
| removed | -1.00ms | 25.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `zig.Ast.Render.AutoIndentingStream.pushIndent`    | `/opt/zig/lib/std/zig/Ast/Render.zig` |
| removed | -1.00ms | 25.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `zig.Ast.Render.AutoIndentingStream.applyIndent`   | `/opt/zig/lib/std/zig/Ast/Render.zig` |

##### `0x9d114` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time | Samples | Caller                                        | Location                              |
| ------: | ------: | ------------: | ----------: | ------: | --------------------------------------------- | ------------------------------------- |
| removed | -4.00ms | 100.0% → 0.0% | 4.0ms → 0ms |   4 → 0 | `zig.Ast.Render.AutoIndentingStream.writeAll` | `/opt/zig/lib/std/zig/Ast/Render.zig` |

##### `0x9e584` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time | Samples | Caller                                           | Location                              |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------------------ | ------------------------------------- |
| removed | -3.00ms | 100.0% → 0.0% | 3.0ms → 0ms |   3 → 0 | `zig.Ast.Render.AutoIndentingStream.applyIndent` | `/opt/zig/lib/std/zig/Ast/Render.zig` |

##### `0xe3acc` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |      % |            Time | Samples | Caller    | Location                               |
| -----: | ------: | -----: | --------------: | ------: | --------- | -------------------------------------- |
| -21.4% | -3.00ms | 100.0% | 14.0ms → 11.0ms | 14 → 11 | `0x8f987` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9d160` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time | Samples | Caller                                        | Location                              |
| ------: | ------: | ------------: | ----------: | ------: | --------------------------------------------- | ------------------------------------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `zig.Ast.Render.AutoIndentingStream.writeAll` | `/opt/zig/lib/std/zig/Ast/Render.zig` |

##### `0x9d210` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time | Samples | Caller                                                                                 | Location                                |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------------------------------------------------------------------- | --------------------------------------- |
| removed | -2.00ms |  50.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `multi_array_list.MultiArrayList(zig.Ast.Node).ensureUnusedCapacity`                   | `/opt/zig/lib/std/multi_array_list.zig` |
|     new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `0x92f67`                                                                              | `/usr/lib/aarch64-linux-gnu/libc.so.6`  |
| removed | -1.00ms |  25.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).ensureUnusedCapacity` | `/opt/zig/lib/std/multi_array_list.zig` |
| removed | -1.00ms |  25.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `array_list.Aligned(u8,null).ensureUnusedCapacity`                                     | `/opt/zig/lib/std/array_list.zig`       |

##### `0x9d124` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |            % |        Time | Samples | Caller                         | Location                         |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------------ | -------------------------------- |
| removed | -1.00ms | 50.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `zig.Parse.parseParamDeclList` | `/opt/zig/lib/std/zig/Parse.zig` |
| removed | -1.00ms | 50.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `Io.Writer.alignBufferOptions` | `/opt/zig/lib/std/Io/Writer.zig` |

##### `0x929e0` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time | Samples | Caller                  | Location                             |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------- | ------------------------------------ |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `mem.Allocator.rawFree` | `/opt/zig/lib/std/mem/Allocator.zig` |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|   Change |     Delta |             % |             Time |       Samples | Function                                             | Location                                          |
| -------: | --------: | ------------: | ---------------: | ------------: | ---------------------------------------------------- | ------------------------------------------------- |
|      new |   +5.796s | 0.0% → 100.0% |      0ms → 5.79s |     0 → 5,796 | `start.main`                                         | `/opt/zig/lib/std/start.zig`                      |
| +9832.1% |   +2.753s |  0.5% → 48.0% |   28.0ms → 2.78s |    28 → 2,781 | `zig.Ast.Render.renderBlock`                         | `/opt/zig/lib/std/zig/Ast/Render.zig`             |
|      new | +760.00ms |  0.0% → 13.1% |    0ms → 760.0ms |       0 → 760 | `zig.Ast.parseTokens`                                | `/opt/zig/lib/std/zig/Ast.zig`                    |
|   +10.7% | +559.00ms |         99.9% |    5.23s → 5.79s | 5,232 → 5,791 | `profile.main`                                       | `./profile.zig`                                   |
|   +10.7% | +559.00ms |        100.0% |    5.23s → 5.79s | 5,237 → 5,796 | `start.callMain`                                     | `/opt/zig/lib/std/start.zig`                      |
|   +10.7% | +559.00ms |        100.0% |    5.23s → 5.79s | 5,237 → 5,796 | `start.callMainWithArgs`                             | `/opt/zig/lib/std/start.zig`                      |
|   +10.7% | +559.00ms |        100.0% |    5.23s → 5.79s | 5,237 → 5,796 | `0x27743`                                            | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   +10.7% | +559.00ms |        100.0% |    5.23s → 5.79s | 5,237 → 5,796 | `0x27817`                                            | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   +10.7% | +559.00ms |        100.0% |    5.23s → 5.79s | 5,237 → 5,796 | `_start`                                             | `/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
|      new | +351.00ms |   0.0% → 6.1% |    0ms → 351.0ms |       0 → 351 | `memset`                                             | `/opt/zig/lib/compiler_rt.zig`                    |
|   +28.1% | +334.00ms | 22.7% → 26.3% |    1.18s → 1.52s | 1,189 → 1,523 | `zig.Ast.parse`                                      | `/opt/zig/lib/std/zig/Ast.zig`                    |
| +3575.0% | +286.00ms |   0.2% → 5.1% |  8.0ms → 294.0ms |       8 → 294 | `mem.Allocator.allocAdvancedWithRetAddr`             | `/opt/zig/lib/std/mem/Allocator.zig`              |
| +6950.0% | +278.00ms |   0.1% → 4.9% |  4.0ms → 282.0ms |       4 → 282 | `mem.Allocator.allocWithSizeAndAlignment__anon_9851` | `/opt/zig/lib/std/mem/Allocator.zig`              |
| +6950.0% | +278.00ms |   0.1% → 4.9% |  4.0ms → 282.0ms |       4 → 282 | `mem.Allocator.alignedAlloc__anon_9848`              | `/opt/zig/lib/std/mem/Allocator.zig`              |
| +5540.0% | +277.00ms |   0.1% → 4.9% |  5.0ms → 282.0ms |       5 → 282 | `mem.Allocator.allocBytesWithAlignment__anon_10001`  | `/opt/zig/lib/std/mem/Allocator.zig`              |
|    +6.6% | +250.00ms | 72.8% → 70.1% |    3.81s → 4.06s | 3,813 → 4,063 | `zig.Ast.Render.renderExpression`                    | `/opt/zig/lib/std/zig/Ast/Render.zig`             |
| +1205.6% | +217.00ms |   0.3% → 4.1% | 18.0ms → 235.0ms |      18 → 235 | `zig.Ast.Render.renderExpressionComma`               | `/opt/zig/lib/std/zig/Ast/Render.zig`             |
|    +5.2% | +208.00ms | 75.7% → 71.9% |    3.96s → 4.17s | 3,962 → 4,170 | `zig.Ast.Render.renderMembers`                       | `/opt/zig/lib/std/zig/Ast/Render.zig`             |
|    +5.2% | +206.00ms | 75.8% → 72.0% |    3.96s → 4.17s | 3,968 → 4,174 | `zig.Ast.Render.renderTree`                          | `/opt/zig/lib/std/zig/Ast/Render.zig`             |
|    +5.2% | +206.00ms | 75.8% → 72.0% |    3.96s → 4.17s | 3,968 → 4,174 | `zig.Ast.render`                                     | `/opt/zig/lib/std/zig/Ast.zig`                    |

##### Standard library

|   Change |     Delta |             % |             Time |       Samples | Function                                             | Location                                          |
| -------: | --------: | ------------: | ---------------: | ------------: | ---------------------------------------------------- | ------------------------------------------------- |
|      new |   +5.796s | 0.0% → 100.0% |      0ms → 5.79s |     0 → 5,796 | `start.main`                                         | `/opt/zig/lib/std/start.zig`                      |
| +9832.1% |   +2.753s |  0.5% → 48.0% |   28.0ms → 2.78s |    28 → 2,781 | `zig.Ast.Render.renderBlock`                         | `/opt/zig/lib/std/zig/Ast/Render.zig`             |
|      new | +760.00ms |  0.0% → 13.1% |    0ms → 760.0ms |       0 → 760 | `zig.Ast.parseTokens`                                | `/opt/zig/lib/std/zig/Ast.zig`                    |
|   +10.7% | +559.00ms |        100.0% |    5.23s → 5.79s | 5,237 → 5,796 | `start.callMain`                                     | `/opt/zig/lib/std/start.zig`                      |
|   +10.7% | +559.00ms |        100.0% |    5.23s → 5.79s | 5,237 → 5,796 | `start.callMainWithArgs`                             | `/opt/zig/lib/std/start.zig`                      |
|   +10.7% | +559.00ms |        100.0% |    5.23s → 5.79s | 5,237 → 5,796 | `_start`                                             | `/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
|      new | +351.00ms |   0.0% → 6.1% |    0ms → 351.0ms |       0 → 351 | `memset`                                             | `/opt/zig/lib/compiler_rt.zig`                    |
|   +28.1% | +334.00ms | 22.7% → 26.3% |    1.18s → 1.52s | 1,189 → 1,523 | `zig.Ast.parse`                                      | `/opt/zig/lib/std/zig/Ast.zig`                    |
| +3575.0% | +286.00ms |   0.2% → 5.1% |  8.0ms → 294.0ms |       8 → 294 | `mem.Allocator.allocAdvancedWithRetAddr`             | `/opt/zig/lib/std/mem/Allocator.zig`              |
| +6950.0% | +278.00ms |   0.1% → 4.9% |  4.0ms → 282.0ms |       4 → 282 | `mem.Allocator.allocWithSizeAndAlignment__anon_9851` | `/opt/zig/lib/std/mem/Allocator.zig`              |
| +6950.0% | +278.00ms |   0.1% → 4.9% |  4.0ms → 282.0ms |       4 → 282 | `mem.Allocator.alignedAlloc__anon_9848`              | `/opt/zig/lib/std/mem/Allocator.zig`              |
| +5540.0% | +277.00ms |   0.1% → 4.9% |  5.0ms → 282.0ms |       5 → 282 | `mem.Allocator.allocBytesWithAlignment__anon_10001`  | `/opt/zig/lib/std/mem/Allocator.zig`              |
|    +6.6% | +250.00ms | 72.8% → 70.1% |    3.81s → 4.06s | 3,813 → 4,063 | `zig.Ast.Render.renderExpression`                    | `/opt/zig/lib/std/zig/Ast/Render.zig`             |
| +1205.6% | +217.00ms |   0.3% → 4.1% | 18.0ms → 235.0ms |      18 → 235 | `zig.Ast.Render.renderExpressionComma`               | `/opt/zig/lib/std/zig/Ast/Render.zig`             |
|    +5.2% | +208.00ms | 75.7% → 71.9% |    3.96s → 4.17s | 3,962 → 4,170 | `zig.Ast.Render.renderMembers`                       | `/opt/zig/lib/std/zig/Ast/Render.zig`             |
|    +5.2% | +206.00ms | 75.8% → 72.0% |    3.96s → 4.17s | 3,968 → 4,174 | `zig.Ast.Render.renderTree`                          | `/opt/zig/lib/std/zig/Ast/Render.zig`             |
|    +5.2% | +206.00ms | 75.8% → 72.0% |    3.96s → 4.17s | 3,968 → 4,174 | `zig.Ast.render`                                     | `/opt/zig/lib/std/zig/Ast.zig`                    |
|    +5.2% | +206.00ms | 75.8% → 72.0% |    3.96s → 4.17s | 3,968 → 4,174 | `zig.Ast.renderAlloc`                                | `/opt/zig/lib/std/zig/Ast.zig`                    |
|  +638.7% | +198.00ms |   0.6% → 4.0% | 31.0ms → 229.0ms |      31 → 229 | `zig.Ast.Render.renderFor`                           | `/opt/zig/lib/std/zig/Ast/Render.zig`             |
|   +19.2% | +189.00ms | 18.8% → 20.3% |  985.0ms → 1.17s |   985 → 1,174 | `zig.Ast.Render.renderParamList`                     | `/opt/zig/lib/std/zig/Ast/Render.zig`             |

##### Native

|  Change |     Delta |            % |          Time |       Samples | Function  | Location                               |
| ------: | --------: | -----------: | ------------: | ------------: | --------- | -------------------------------------- |
|  +10.7% | +559.00ms |       100.0% | 5.23s → 5.79s | 5,237 → 5,796 | `0x27743` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  +10.7% | +559.00ms |       100.0% | 5.23s → 5.79s | 5,237 → 5,796 | `0x27817` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |  +39.00ms |  0.0% → 0.7% |  0ms → 39.0ms |        0 → 39 | `0xe3e00` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |  +27.00ms |  0.0% → 0.5% |  0ms → 27.0ms |        0 → 27 | `0x92f67` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +4.00ms |  0.0% → 0.1% |   0ms → 4.0ms |         0 → 4 | `0xdd2b4` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +3.00ms |  0.0% → 0.1% |   0ms → 3.0ms |         0 → 3 | `0x929c4` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +3.00ms |  0.0% → 0.1% |   0ms → 3.0ms |         0 → 3 | `0x91d0c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +3.00ms |  0.0% → 0.1% |   0ms → 3.0ms |         0 → 3 | `0x91bfb` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +2.00ms | 0.0% → <0.1% |   0ms → 2.0ms |         0 → 2 | `0x91b93` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  +16.7% |   +1.00ms |         0.1% | 6.0ms → 7.0ms |         6 → 7 | `0xde3c8` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +100.0% |   +1.00ms |        <0.1% | 1.0ms → 2.0ms |         1 → 2 | `0x90817` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +100.0% |   +1.00ms |        <0.1% | 1.0ms → 2.0ms |         1 → 2 | `0x9189b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `0xe7e0c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `0x92274` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `0x91c70` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `0x92240` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `0x8fd10` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `0x8ff24` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `0x8ffd0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `0x90e1c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |     Delta |             % |              Time |       Samples | Function                                                                                  | Location                                |
| ------: | --------: | ------------: | ----------------: | ------------: | ----------------------------------------------------------------------------------------- | --------------------------------------- |
| removed |   -5.237s | 100.0% → 0.0% |       5.23s → 0ms |     5,237 → 0 | `main`                                                                                    | `/opt/zig/lib/std/start.zig`            |
|  -90.0% | -189.00ms |   4.0% → 0.4% |  210.0ms → 21.0ms |      210 → 21 | `zig.Ast.Render.renderBuiltinCall`                                                        | `/opt/zig/lib/std/zig/Ast/Render.zig`   |
| removed | -149.00ms |   2.8% → 0.0% |     149.0ms → 0ms |       149 → 0 | `array_list.Aligned(u8,null).ensureUnusedCapacity`                                        | `/opt/zig/lib/std/array_list.zig`       |
|  -31.7% | -139.00ms |   8.4% → 5.2% | 439.0ms → 300.0ms |     439 → 300 | `zig.Ast.Render.AutoIndentingStream.writeAll`                                             | `/opt/zig/lib/std/zig/Ast/Render.zig`   |
|  -83.6% | -127.00ms |   2.9% → 0.4% |  152.0ms → 25.0ms |      152 → 25 | `Io.Writer.Allocating.drain`                                                              | `/opt/zig/lib/std/Io/Writer.zig`        |
|  -88.6% | -117.00ms |   2.5% → 0.3% |  132.0ms → 15.0ms |      132 → 15 | `0x9d200`                                                                                 | `/usr/lib/aarch64-linux-gnu/libc.so.6`  |
|   -6.5% | -110.00ms | 32.3% → 27.2% |     1.68s → 1.57s | 1,689 → 1,579 | `zig.Ast.Render.renderToken`                                                              | `/opt/zig/lib/std/zig/Ast/Render.zig`   |
|  -59.1% | -107.00ms |   3.5% → 1.3% |  181.0ms → 74.0ms |      181 → 74 | `Io.Writer.write`                                                                         | `/opt/zig/lib/std/Io/Writer.zig`        |
|  -41.6% |  -97.00ms |   4.4% → 2.3% | 233.0ms → 136.0ms |     233 → 136 | `Io.Writer.writeAll`                                                                      | `/opt/zig/lib/std/Io/Writer.zig`        |
|  -42.9% |  -93.00ms |   4.1% → 2.1% | 217.0ms → 124.0ms |     217 → 124 | `zig.Ast.firstToken`                                                                      | `/opt/zig/lib/std/zig/Ast.zig`          |
| removed |  -86.00ms |   1.6% → 0.0% |      86.0ms → 0ms |        86 → 0 | `mem.indexOfPos__anon_23640`                                                              | `/opt/zig/lib/std/mem.zig`              |
| removed |  -84.00ms |   1.6% → 0.0% |      84.0ms → 0ms |        84 → 0 | `mem.indexOf__anon_18425`                                                                 | `/opt/zig/lib/std/mem.zig`              |
| removed |  -79.00ms |   1.5% → 0.0% |      79.0ms → 0ms |        79 → 0 | `mem.indexOfScalarPos__anon_8996`                                                         | `/opt/zig/lib/std/mem.zig`              |
| removed |  -77.00ms |   1.5% → 0.0% |      77.0ms → 0ms |        77 → 0 | `mem.indexOfPosLinear__anon_26200`                                                        | `/opt/zig/lib/std/mem.zig`              |
| removed |  -76.00ms |   1.5% → 0.0% |      76.0ms → 0ms |        76 → 0 | `mem.indexOfScalar__anon_5905`                                                            | `/opt/zig/lib/std/mem.zig`              |
| removed |  -69.00ms |   1.3% → 0.0% |      69.0ms → 0ms |        69 → 0 | `0x9e670`                                                                                 | `/usr/lib/aarch64-linux-gnu/libc.so.6`  |
|  -96.7% |  -59.00ms |  1.2% → <0.1% |    61.0ms → 2.0ms |        61 → 2 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32303`                   | `/opt/zig/lib/std/multi_array_list.zig` |
|  -25.0% |  -58.00ms |   4.4% → 3.0% | 232.0ms → 174.0ms |     232 → 174 | `zig.Ast.Render.renderExtraNewline`                                                       | `/opt/zig/lib/std/zig/Ast/Render.zig`   |
| removed |  -58.00ms |   1.1% → 0.0% |      58.0ms → 0ms |        58 → 0 | `zig.Ast.Render.rowSize`                                                                  | `/opt/zig/lib/std/zig/Ast/Render.zig`   |
|  -64.0% |  -55.00ms |   1.6% → 0.5% |   86.0ms → 31.0ms |       86 → 31 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).Slice.items__anon_27682` | `/opt/zig/lib/std/multi_array_list.zig` |

##### Standard library

|  Change |     Delta |             % |              Time |       Samples | Function                                                                                  | Location                                |
| ------: | --------: | ------------: | ----------------: | ------------: | ----------------------------------------------------------------------------------------- | --------------------------------------- |
| removed |   -5.237s | 100.0% → 0.0% |       5.23s → 0ms |     5,237 → 0 | `main`                                                                                    | `/opt/zig/lib/std/start.zig`            |
|  -90.0% | -189.00ms |   4.0% → 0.4% |  210.0ms → 21.0ms |      210 → 21 | `zig.Ast.Render.renderBuiltinCall`                                                        | `/opt/zig/lib/std/zig/Ast/Render.zig`   |
| removed | -149.00ms |   2.8% → 0.0% |     149.0ms → 0ms |       149 → 0 | `array_list.Aligned(u8,null).ensureUnusedCapacity`                                        | `/opt/zig/lib/std/array_list.zig`       |
|  -31.7% | -139.00ms |   8.4% → 5.2% | 439.0ms → 300.0ms |     439 → 300 | `zig.Ast.Render.AutoIndentingStream.writeAll`                                             | `/opt/zig/lib/std/zig/Ast/Render.zig`   |
|  -83.6% | -127.00ms |   2.9% → 0.4% |  152.0ms → 25.0ms |      152 → 25 | `Io.Writer.Allocating.drain`                                                              | `/opt/zig/lib/std/Io/Writer.zig`        |
|   -6.5% | -110.00ms | 32.3% → 27.2% |     1.68s → 1.57s | 1,689 → 1,579 | `zig.Ast.Render.renderToken`                                                              | `/opt/zig/lib/std/zig/Ast/Render.zig`   |
|  -59.1% | -107.00ms |   3.5% → 1.3% |  181.0ms → 74.0ms |      181 → 74 | `Io.Writer.write`                                                                         | `/opt/zig/lib/std/Io/Writer.zig`        |
|  -41.6% |  -97.00ms |   4.4% → 2.3% | 233.0ms → 136.0ms |     233 → 136 | `Io.Writer.writeAll`                                                                      | `/opt/zig/lib/std/Io/Writer.zig`        |
|  -42.9% |  -93.00ms |   4.1% → 2.1% | 217.0ms → 124.0ms |     217 → 124 | `zig.Ast.firstToken`                                                                      | `/opt/zig/lib/std/zig/Ast.zig`          |
| removed |  -86.00ms |   1.6% → 0.0% |      86.0ms → 0ms |        86 → 0 | `mem.indexOfPos__anon_23640`                                                              | `/opt/zig/lib/std/mem.zig`              |
| removed |  -84.00ms |   1.6% → 0.0% |      84.0ms → 0ms |        84 → 0 | `mem.indexOf__anon_18425`                                                                 | `/opt/zig/lib/std/mem.zig`              |
| removed |  -79.00ms |   1.5% → 0.0% |      79.0ms → 0ms |        79 → 0 | `mem.indexOfScalarPos__anon_8996`                                                         | `/opt/zig/lib/std/mem.zig`              |
| removed |  -77.00ms |   1.5% → 0.0% |      77.0ms → 0ms |        77 → 0 | `mem.indexOfPosLinear__anon_26200`                                                        | `/opt/zig/lib/std/mem.zig`              |
| removed |  -76.00ms |   1.5% → 0.0% |      76.0ms → 0ms |        76 → 0 | `mem.indexOfScalar__anon_5905`                                                            | `/opt/zig/lib/std/mem.zig`              |
|  -96.7% |  -59.00ms |  1.2% → <0.1% |    61.0ms → 2.0ms |        61 → 2 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32303`                   | `/opt/zig/lib/std/multi_array_list.zig` |
|  -25.0% |  -58.00ms |   4.4% → 3.0% | 232.0ms → 174.0ms |     232 → 174 | `zig.Ast.Render.renderExtraNewline`                                                       | `/opt/zig/lib/std/zig/Ast/Render.zig`   |
| removed |  -58.00ms |   1.1% → 0.0% |      58.0ms → 0ms |        58 → 0 | `zig.Ast.Render.rowSize`                                                                  | `/opt/zig/lib/std/zig/Ast/Render.zig`   |
|  -64.0% |  -55.00ms |   1.6% → 0.5% |   86.0ms → 31.0ms |       86 → 31 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).Slice.items__anon_27682` | `/opt/zig/lib/std/multi_array_list.zig` |
| removed |  -46.00ms |   0.9% → 0.0% |      46.0ms → 0ms |        46 → 0 | `fs.Dir.readFileAllocOptions__anon_2384`                                                  | `/opt/zig/lib/std/fs/Dir.zig`           |
|  -39.6% |  -44.00ms |   2.1% → 1.2% |  111.0ms → 67.0ms |      111 → 67 | `zig.Ast.nodeTag`                                                                         | `/opt/zig/lib/std/zig/Ast.zig`          |

##### Native

|  Change |     Delta |            % |             Time |  Samples | Function  | Location                               |
| ------: | --------: | -----------: | ---------------: | -------: | --------- | -------------------------------------- |
|  -88.6% | -117.00ms |  2.5% → 0.3% | 132.0ms → 15.0ms | 132 → 15 | `0x9d200` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -69.00ms |  1.3% → 0.0% |     69.0ms → 0ms |   69 → 0 | `0x9e670` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -19.00ms |  0.4% → 0.0% |     19.0ms → 0ms |   19 → 0 | `0x9e674` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -19.00ms |  0.4% → 0.0% |     19.0ms → 0ms |   19 → 0 | `0xddb88` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -11.00ms |  0.2% → 0.0% |     11.0ms → 0ms |   11 → 0 | `0x9d11c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -11.00ms |  0.2% → 0.0% |     11.0ms → 0ms |   11 → 0 | `0x9d100` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -10.00ms |  0.2% → 0.0% |     10.0ms → 0ms |   10 → 0 | `0x9d184` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -9.00ms |  0.2% → 0.0% |      9.0ms → 0ms |    9 → 0 | `0x9d138` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -41.2% |   -7.00ms |  0.3% → 0.2% |  17.0ms → 10.0ms |  17 → 10 | `0x92a9b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -7.00ms |  0.1% → 0.0% |      7.0ms → 0ms |    7 → 0 | `0x9d168` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -6.00ms |  0.1% → 0.0% |      6.0ms → 0ms |    6 → 0 | `0x9405b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -5.00ms |  0.1% → 0.0% |      5.0ms → 0ms |    5 → 0 | `0x9d150` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -26.3% |   -5.00ms |  0.4% → 0.2% |  19.0ms → 14.0ms |  19 → 14 | `0xdda44` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -4.00ms |  0.1% → 0.0% |      4.0ms → 0ms |    4 → 0 | `0x9e5c0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -4.00ms |  0.1% → 0.0% |      4.0ms → 0ms |    4 → 0 | `0x9e580` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -4.00ms |  0.1% → 0.0% |      4.0ms → 0ms |    4 → 0 | `0x9d114` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -30.8% |   -4.00ms |         0.2% |   13.0ms → 9.0ms |   13 → 9 | `0x8fa47` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -30.8% |   -4.00ms |         0.2% |   13.0ms → 9.0ms |   13 → 9 | `0x9023f` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -75.0% |   -3.00ms | 0.1% → <0.1% |    4.0ms → 1.0ms |    4 → 1 | `0x9245b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -3.00ms |  0.1% → 0.0% |      3.0ms → 0ms |    3 → 0 | `0x9e584` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `start.main` (`/opt/zig/lib/std/start.zig`)

| Change |   Delta |             % |        Time |   Samples | Callee                   | Location                     |
| -----: | ------: | ------------: | ----------: | --------: | ------------------------ | ---------------------------- |
|    new | +5.796s | 0.0% → 100.0% | 0ms → 5.79s | 0 → 5,796 | `start.callMainWithArgs` | `/opt/zig/lib/std/start.zig` |

##### `zig.Ast.Render.renderBlock` (`/opt/zig/lib/std/zig/Ast/Render.zig`)

|  Change |   Delta |             % |            Time |   Samples | Callee                             | Location                              |
| ------: | ------: | ------------: | --------------: | --------: | ---------------------------------- | ------------------------------------- |
|     new | +2.774s |  0.0% → 99.7% |     0ms → 2.77s | 0 → 2,774 | `zig.Ast.Render.finishRenderBlock` | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|  -75.0% | -3.00ms | 14.3% → <0.1% |   4.0ms → 1.0ms |     4 → 1 | `zig.Ast.nodeMainToken`            | `/opt/zig/lib/std/zig/Ast.zig`        |
|   -9.5% | -2.00ms |  75.0% → 0.7% | 21.0ms → 19.0ms |   21 → 19 | `zig.Ast.Render.renderToken`       | `/opt/zig/lib/std/zig/Ast/Render.zig` |
| +100.0% | +1.00ms |   3.6% → 0.1% |   1.0ms → 2.0ms |     1 → 2 | `zig.Ast.isTokenPrecededByTags`    | `/opt/zig/lib/std/zig/Ast.zig`        |
| removed | -1.00ms |   3.6% → 0.0% |     1.0ms → 0ms |     1 → 0 | `zig.Ast.Render.renderIdentifier`  | `/opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.parseTokens` (`/opt/zig/lib/std/zig/Ast.zig`)

| Change |     Delta |            % |          Time | Samples | Callee                                                              | Location                                |
| -----: | --------: | -----------: | ------------: | ------: | ------------------------------------------------------------------- | --------------------------------------- |
|    new | +579.00ms | 0.0% → 76.2% | 0ms → 579.0ms | 0 → 579 | `zig.Parse.parseRoot`                                               | `/opt/zig/lib/std/zig/Parse.zig`        |
|    new | +181.00ms | 0.0% → 23.8% | 0ms → 181.0ms | 0 → 181 | `multi_array_list.MultiArrayList(zig.Ast.Node).ensureTotalCapacity` | `/opt/zig/lib/std/multi_array_list.zig` |

##### `profile.main` (`./profile.zig`)

|  Change |     Delta |             % |          Time |       Samples | Callee                                   | Location                       |
| ------: | --------: | ------------: | ------------: | ------------: | ---------------------------------------- | ------------------------------ |
|  +28.1% | +334.00ms | 22.7% → 26.3% | 1.18s → 1.52s | 1,189 → 1,523 | `zig.Ast.parse`                          | `/opt/zig/lib/std/zig/Ast.zig` |
|   +5.2% | +206.00ms | 75.8% → 72.1% | 3.96s → 4.17s | 3,968 → 4,174 | `zig.Ast.renderAlloc`                    | `/opt/zig/lib/std/zig/Ast.zig` |
|     new |  +73.00ms |   0.0% → 1.3% |  0ms → 73.0ms |        0 → 73 | `Io.Dir.readFileAllocOptions__anon_2739` | `/opt/zig/lib/std/Io/Dir.zig`  |
| removed |  -46.00ms |   0.9% → 0.0% |  46.0ms → 0ms |        46 → 0 | `fs.Dir.readFileAllocOptions__anon_2384` | `/opt/zig/lib/std/fs/Dir.zig`  |
| removed |  -14.00ms |   0.3% → 0.0% |  14.0ms → 0ms |        14 → 0 | `fs.Dir.Walker.next`                     | `/opt/zig/lib/std/fs/Dir.zig`  |

##### `start.callMain` (`/opt/zig/lib/std/start.zig`)

|  Change |     Delta |            % |          Time |       Samples | Callee                                                                                | Location                                |
| ------: | --------: | -----------: | ------------: | ------------: | ------------------------------------------------------------------------------------- | --------------------------------------- |
|  +10.7% | +559.00ms |        99.9% | 5.23s → 5.79s | 5,232 → 5,791 | `profile.main`                                                                        | `./profile.zig`                         |
| removed |   -3.00ms |  0.1% → 0.0% |   3.0ms → 0ms |         3 → 0 | `0x9d200`                                                                             | `/usr/lib/aarch64-linux-gnu/libc.so.6`  |
|     new |   +2.00ms | 0.0% → <0.1% |   0ms → 2.0ms |         0 → 2 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).ensureTotalCapacity` | `/opt/zig/lib/std/multi_array_list.zig` |
| removed |   -1.00ms | <0.1% → 0.0% |   1.0ms → 0ms |         1 → 0 | `zig.Ast.Render.renderContainerDocComments`                                           | `/opt/zig/lib/std/zig/Ast/Render.zig`   |
| removed |   -1.00ms | <0.1% → 0.0% |   1.0ms → 0ms |         1 → 0 | `0x9d220`                                                                             | `/usr/lib/aarch64-linux-gnu/libc.so.6`  |

##### `start.callMainWithArgs` (`/opt/zig/lib/std/start.zig`)

| Change |     Delta |      % |          Time |       Samples | Callee           | Location                     |
| -----: | --------: | -----: | ------------: | ------------: | ---------------- | ---------------------------- |
| +10.7% | +559.00ms | 100.0% | 5.23s → 5.79s | 5,237 → 5,796 | `start.callMain` | `/opt/zig/lib/std/start.zig` |

##### `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time |   Samples | Callee       | Location                     |
| ------: | ------: | ------------: | ----------: | --------: | ------------ | ---------------------------- |
|     new | +5.796s | 0.0% → 100.0% | 0ms → 5.79s | 0 → 5,796 | `start.main` | `/opt/zig/lib/std/start.zig` |
| removed | -5.237s | 100.0% → 0.0% | 5.23s → 0ms | 5,237 → 0 | `main`       | `/opt/zig/lib/std/start.zig` |

##### `0x27817` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |     Delta |      % |          Time |       Samples | Callee    | Location                               |
| -----: | --------: | -----: | ------------: | ------------: | --------- | -------------------------------------- |
| +10.7% | +559.00ms | 100.0% | 5.23s → 5.79s | 5,237 → 5,796 | `0x27743` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `_start` (`/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)

| Change |     Delta |      % |          Time |       Samples | Callee    | Location                               |
| -----: | --------: | -----: | ------------: | ------------: | --------- | -------------------------------------- |
| +10.7% | +559.00ms | 100.0% | 5.23s → 5.79s | 5,237 → 5,796 | `0x27817` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig`)

|  Change |     Delta |             % |              Time |   Samples | Callee                                                                                | Location                                |
| ------: | --------: | ------------: | ----------------: | --------: | ------------------------------------------------------------------------------------- | --------------------------------------- |
|     new | +760.00ms |  0.0% → 49.9% |     0ms → 760.0ms |   0 → 760 | `zig.Ast.parseTokens`                                                                 | `/opt/zig/lib/std/zig/Ast.zig`          |
| removed | -551.00ms |  46.3% → 0.0% |     551.0ms → 0ms |   551 → 0 | `zig.Parse.parseRoot`                                                                 | `/opt/zig/lib/std/zig/Parse.zig`        |
|  +17.4% |  +86.00ms | 41.6% → 38.1% | 495.0ms → 581.0ms | 495 → 581 | `zig.tokenizer.Tokenizer.next`                                                        | `/opt/zig/lib/std/zig/tokenizer.zig`    |
|     new |  +71.00ms |   0.0% → 4.7% |      0ms → 71.0ms |    0 → 71 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).ensureTotalCapacity` | `/opt/zig/lib/std/multi_array_list.zig` |
|  -22.2% |  -22.00ms |   8.3% → 5.1% |   99.0ms → 77.0ms |   99 → 77 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).append`              | `/opt/zig/lib/std/multi_array_list.zig` |

##### `mem.Allocator.allocAdvancedWithRetAddr` (`/opt/zig/lib/std/mem/Allocator.zig`)

|   Change |     Delta |             % |            Time | Samples | Callee                                                | Location                             |
| -------: | --------: | ------------: | --------------: | ------: | ----------------------------------------------------- | ------------------------------------ |
| +6950.0% | +278.00ms | 50.0% → 95.9% | 4.0ms → 282.0ms | 4 → 282 | `mem.Allocator.allocWithSizeAndAlignment__anon_9851`  | `/opt/zig/lib/std/mem/Allocator.zig` |
|  +600.0% |   +6.00ms |  12.5% → 2.4% |   1.0ms → 7.0ms |   1 → 7 | `mem.Allocator.allocWithSizeAndAlignment__anon_31645` | `/opt/zig/lib/std/mem/Allocator.zig` |
|  +400.0% |   +4.00ms |  12.5% → 1.7% |   1.0ms → 5.0ms |   1 → 5 | `mem.Allocator.allocWithSizeAndAlignment__anon_10624` | `/opt/zig/lib/std/mem/Allocator.zig` |
|  removed |   -1.00ms |  12.5% → 0.0% |     1.0ms → 0ms |   1 → 0 | `mem.Allocator.allocWithSizeAndAlignment__anon_12056` | `/opt/zig/lib/std/mem/Allocator.zig` |
|  removed |   -1.00ms |  12.5% → 0.0% |     1.0ms → 0ms |   1 → 0 | `mem.Allocator.allocWithSizeAndAlignment__anon_28172` | `/opt/zig/lib/std/mem/Allocator.zig` |

##### `mem.Allocator.allocWithSizeAndAlignment__anon_9851` (`/opt/zig/lib/std/mem/Allocator.zig`)

|   Change |     Delta |      % |            Time | Samples | Callee                                              | Location                             |
| -------: | --------: | -----: | --------------: | ------: | --------------------------------------------------- | ------------------------------------ |
| +6950.0% | +278.00ms | 100.0% | 4.0ms → 282.0ms | 4 → 282 | `mem.Allocator.allocBytesWithAlignment__anon_10001` | `/opt/zig/lib/std/mem/Allocator.zig` |

##### `mem.Allocator.alignedAlloc__anon_9848` (`/opt/zig/lib/std/mem/Allocator.zig`)

|   Change |     Delta |      % |            Time | Samples | Callee                                   | Location                             |
| -------: | --------: | -----: | --------------: | ------: | ---------------------------------------- | ------------------------------------ |
| +6950.0% | +278.00ms | 100.0% | 4.0ms → 282.0ms | 4 → 282 | `mem.Allocator.allocAdvancedWithRetAddr` | `/opt/zig/lib/std/mem/Allocator.zig` |

##### `mem.Allocator.allocBytesWithAlignment__anon_10001` (`/opt/zig/lib/std/mem/Allocator.zig`)

| Change |     Delta |             % |          Time | Samples | Callee                   | Location                             |
| -----: | --------: | ------------: | ------------: | ------: | ------------------------ | ------------------------------------ |
|    new | +281.00ms |  0.0% → 99.6% | 0ms → 281.0ms | 0 → 281 | `memset`                 | `/opt/zig/lib/compiler_rt.zig`       |
| -80.0% |   -4.00ms | 100.0% → 0.4% | 5.0ms → 1.0ms |   5 → 1 | `mem.Allocator.rawAlloc` | `/opt/zig/lib/std/mem/Allocator.zig` |

##### `zig.Ast.Render.renderExpression` (`/opt/zig/lib/std/zig/Ast/Render.zig`)

|   Change |     Delta |            % |             Time |    Samples | Callee                             | Location                              |
| -------: | --------: | -----------: | ---------------: | ---------: | ---------------------------------- | ------------------------------------- |
| +9832.1% |   +2.753s | 0.7% → 68.4% |   28.0ms → 2.78s | 28 → 2,781 | `zig.Ast.Render.renderBlock`       | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|  removed |   -2.618s | 68.7% → 0.0% |      2.61s → 0ms |  2,618 → 0 | `zig.Ast.Render.finishRenderBlock` | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|  removed | -216.00ms |  5.7% → 0.0% |    216.0ms → 0ms |    216 → 0 | `zig.Ast.Render.renderThenElse`    | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|  +638.7% | +198.00ms |  0.8% → 5.6% | 31.0ms → 229.0ms |   31 → 229 | `zig.Ast.Render.renderFor`         | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|   -90.0% | -189.00ms |  5.5% → 0.5% | 210.0ms → 21.0ms |   210 → 21 | `zig.Ast.Render.renderBuiltinCall` | `/opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.renderExpressionComma` (`/opt/zig/lib/std/zig/Ast/Render.zig`)

|   Change |     Delta |             % |            Time | Samples | Callee                            | Location                              |
| -------: | --------: | ------------: | --------------: | ------: | --------------------------------- | ------------------------------------- |
| +5200.0% | +156.00ms | 16.7% → 67.7% | 3.0ms → 159.0ms | 3 → 159 | `zig.Ast.Render.renderExpression` | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|  +900.0% |  +18.00ms |  11.1% → 8.5% |  2.0ms → 20.0ms |  2 → 20 | `zig.Ast.Render.renderIdentifier` | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|  +109.1% |  +12.00ms |  61.1% → 9.8% | 11.0ms → 23.0ms | 11 → 23 | `zig.Ast.lastToken`               | `/opt/zig/lib/std/zig/Ast.zig`        |
| +1200.0% |  +12.00ms |   5.6% → 5.5% |  1.0ms → 13.0ms |  1 → 13 | `zig.Ast.Render.renderToken`      | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|      new |   +2.00ms |   0.0% → 0.9% |     0ms → 2.0ms |   0 → 2 | `zig.Ast.Render.renderSpace`      | `/opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.renderMembers` (`/opt/zig/lib/std/zig/Ast/Render.zig`)

|  Change |     Delta |             % |              Time |       Samples | Callee                               | Location                              |
| ------: | --------: | ------------: | ----------------: | ------------: | ------------------------------------ | ------------------------------------- |
|   +5.1% | +174.00ms | 86.6% → 86.4% |     3.43s → 3.60s | 3,430 → 3,604 | `zig.Ast.Render.renderMember`        | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|   +7.9% |  +40.00ms | 12.8% → 13.2% | 509.0ms → 549.0ms |     509 → 549 | `zig.Ast.Render.renderExpression`    | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|  -19.0% |   -4.00ms |   0.5% → 0.4% |   21.0ms → 17.0ms |       21 → 17 | `zig.Ast.Render.renderExtraNewline`  | `/opt/zig/lib/std/zig/Ast/Render.zig` |
| removed |   -1.00ms |  <0.1% → 0.0% |       1.0ms → 0ms |         1 → 0 | `zig.Ast.fullContainerField`         | `/opt/zig/lib/std/zig/Ast.zig`        |
| removed |   -1.00ms |  <0.1% → 0.0% |       1.0ms → 0ms |         1 → 0 | `zig.Ast.Render.tokenSliceForRender` | `/opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.renderTree` (`/opt/zig/lib/std/zig/Ast/Render.zig`)

| Change |     Delta |             % |          Time |       Samples | Callee                                      | Location                              |
| -----: | --------: | ------------: | ------------: | ------------: | ------------------------------------------- | ------------------------------------- |
|  +5.2% | +208.00ms | 99.8% → 99.9% | 3.96s → 4.17s | 3,962 → 4,170 | `zig.Ast.Render.renderMembers`              | `/opt/zig/lib/std/zig/Ast/Render.zig` |
| -66.7% |   -4.00ms |  0.2% → <0.1% | 6.0ms → 2.0ms |         6 → 2 | `zig.Ast.Render.renderContainerDocComments` | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|    new |   +2.00ms |  0.0% → <0.1% |   0ms → 2.0ms |         0 → 2 | `zig.Ast.Render.renderComments`             | `/opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig`)

| Change |     Delta |      % |          Time |       Samples | Callee                      | Location                              |
| -----: | --------: | -----: | ------------: | ------------: | --------------------------- | ------------------------------------- |
|  +5.2% | +206.00ms | 100.0% | 3.96s → 4.17s | 3,968 → 4,174 | `zig.Ast.Render.renderTree` | `/opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.renderAlloc` (`/opt/zig/lib/std/zig/Ast.zig`)

| Change |     Delta |      % |          Time |       Samples | Callee           | Location                       |
| -----: | --------: | -----: | ------------: | ------------: | ---------------- | ------------------------------ |
|  +5.2% | +206.00ms | 100.0% | 3.96s → 4.17s | 3,968 → 4,174 | `zig.Ast.render` | `/opt/zig/lib/std/zig/Ast.zig` |

##### `zig.Ast.Render.renderFor` (`/opt/zig/lib/std/zig/Ast/Render.zig`)

|  Change |     Delta |             % |            Time | Samples | Callee                            | Location                              |
| ------: | --------: | ------------: | --------------: | ------: | --------------------------------- | ------------------------------------- |
|     new | +201.00ms |  0.0% → 87.8% |   0ms → 201.0ms | 0 → 201 | `zig.Ast.Render.renderThenElse`   | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|  +55.0% |  +11.00ms | 64.5% → 13.5% | 20.0ms → 31.0ms | 20 → 31 | `zig.Ast.Render.renderParamList`  | `/opt/zig/lib/std/zig/Ast/Render.zig` |
| removed |   -6.00ms |  19.4% → 0.0% |     6.0ms → 0ms |   6 → 0 | `zig.Ast.Render.renderIdentifier` | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|  +25.0% |   +1.00ms |  12.9% → 2.2% |   4.0ms → 5.0ms |   4 → 5 | `zig.Ast.Render.renderToken`      | `/opt/zig/lib/std/zig/Ast/Render.zig` |
| removed |   -1.00ms |   3.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `zig.Ast.tokenTag`                | `/opt/zig/lib/std/zig/Ast.zig`        |

##### `zig.Ast.Render.renderParamList` (`/opt/zig/lib/std/zig/Ast/Render.zig`)

|   Change |     Delta |             % |              Time |   Samples | Callee                                          | Location                              |
| -------: | --------: | ------------: | ----------------: | --------: | ----------------------------------------------- | ------------------------------------- |
|   +28.8% | +184.00ms | 64.8% → 70.0% | 638.0ms → 822.0ms | 638 → 822 | `zig.Ast.Render.renderExpression`               | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|   +21.7% |  +38.00ms | 17.8% → 18.1% | 175.0ms → 213.0ms | 175 → 213 | `zig.Ast.Render.renderToken`                    | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|  removed |  -18.00ms |   1.8% → 0.0% |      18.0ms → 0ms |    18 → 0 | `zig.Ast.firstToken`                            | `/opt/zig/lib/std/zig/Ast.zig`        |
| +1000.0% |  +10.00ms |   0.1% → 0.9% |    1.0ms → 11.0ms |    1 → 11 | `zig.Ast.Render.AutoIndentingStream.pushIndent` | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|   +22.5% |   +9.00ms |   4.1% → 4.2% |   40.0ms → 49.0ms |   40 → 49 | `zig.Ast.lastToken`                             | `/opt/zig/lib/std/zig/Ast.zig`        |

##### `0x92f67` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |    Delta |            % |         Time | Samples | Callee    | Location                               |
| -----: | -------: | -----------: | -----------: | ------: | --------- | -------------------------------------- |
|    new | +15.00ms | 0.0% → 55.6% | 0ms → 15.0ms |  0 → 15 | `0x9d200` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new |  +3.00ms | 0.0% → 11.1% |  0ms → 3.0ms |   0 → 3 | `0x91d0c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new |  +3.00ms | 0.0% → 11.1% |  0ms → 3.0ms |   0 → 3 | `0x91bfb` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new |  +2.00ms |  0.0% → 7.4% |  0ms → 2.0ms |   0 → 2 | `0x91b93` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new |  +2.00ms |  0.0% → 7.4% |  0ms → 2.0ms |   0 → 2 | `0x9d210` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x91bfb` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |            % |        Time | Samples | Callee    | Location                               |
| -----: | ------: | -----------: | ----------: | ------: | --------- | -------------------------------------- |
|    new | +1.00ms | 0.0% → 33.3% | 0ms → 1.0ms |   0 → 1 | `0x8ff24` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new | +1.00ms | 0.0% → 33.3% | 0ms → 1.0ms |   0 → 1 | `0x8ffd0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new | +1.00ms | 0.0% → 33.3% | 0ms → 1.0ms |   0 → 1 | `0x8fad8` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x91b93` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |            % |        Time | Samples | Callee    | Location                               |
| -----: | ------: | -----------: | ----------: | ------: | --------- | -------------------------------------- |
|    new | +1.00ms | 0.0% → 50.0% | 0ms → 1.0ms |   0 → 1 | `0x9189b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new | +1.00ms | 0.0% → 50.0% | 0ms → 1.0ms |   0 → 1 | `0x90e1c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x90817` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |      % |          Time | Samples | Callee    | Location                               |
| ------: | ------: | -----: | ------------: | ------: | --------- | -------------------------------------- |
| +100.0% | +1.00ms | 100.0% | 1.0ms → 2.0ms |   1 → 2 | `0x8f987` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9189b` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |      % |          Time | Samples | Callee    | Location                               |
| ------: | ------: | -----: | ------------: | ------: | --------- | -------------------------------------- |
| +100.0% | +1.00ms | 100.0% | 1.0ms → 2.0ms |   1 → 2 | `0x90817` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `main` (`/opt/zig/lib/std/start.zig`)

|  Change |   Delta |             % |        Time |   Samples | Callee                   | Location                     |
| ------: | ------: | ------------: | ----------: | --------: | ------------------------ | ---------------------------- |
| removed | -5.237s | 100.0% → 0.0% | 5.23s → 0ms | 5,237 → 0 | `start.callMainWithArgs` | `/opt/zig/lib/std/start.zig` |

##### `zig.Ast.Render.renderBuiltinCall` (`/opt/zig/lib/std/zig/Ast/Render.zig`)

|  Change |     Delta |              % |            Time | Samples | Callee                            | Location                              |
| ------: | --------: | -------------: | --------------: | ------: | --------------------------------- | ------------------------------------- |
| removed | -108.00ms |   51.4% → 0.0% |   108.0ms → 0ms | 108 → 0 | `zig.Ast.Render.renderExpression` | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|  -65.6% |  -40.00ms | 29.0% → 100.0% | 61.0ms → 21.0ms | 61 → 21 | `zig.Ast.Render.renderToken`      | `/opt/zig/lib/std/zig/Ast/Render.zig` |
| removed |  -28.00ms |   13.3% → 0.0% |    28.0ms → 0ms |  28 → 0 | `zig.Ast.Render.renderIdentifier` | `/opt/zig/lib/std/zig/Ast/Render.zig` |
| removed |  -20.00ms |    9.5% → 0.0% |    20.0ms → 0ms |  20 → 0 | `zig.Ast.firstToken`              | `/opt/zig/lib/std/zig/Ast.zig`        |
| removed |  -14.00ms |    6.7% → 0.0% |    14.0ms → 0ms |  14 → 0 | `zig.Ast.lastToken`               | `/opt/zig/lib/std/zig/Ast.zig`        |

##### `array_list.Aligned(u8,null).ensureUnusedCapacity` (`/opt/zig/lib/std/array_list.zig`)

|  Change |    Delta |            % |         Time | Samples | Callee                                            | Location                               |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------------------------------- | -------------------------------------- |
| removed | -91.00ms | 61.1% → 0.0% | 91.0ms → 0ms |  91 → 0 | `0x9d200`                                         | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -36.00ms | 24.2% → 0.0% | 36.0ms → 0ms |  36 → 0 | `0x9e670`                                         | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -10.00ms |  6.7% → 0.0% | 10.0ms → 0ms |  10 → 0 | `0x9e674`                                         | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -6.00ms |  4.0% → 0.0% |  6.0ms → 0ms |   6 → 0 | `array_list.Aligned(u8,null).ensureTotalCapacity` | `/opt/zig/lib/std/array_list.zig`      |
| removed |  -1.00ms |  0.7% → 0.0% |  1.0ms → 0ms |   1 → 0 | `0x9e580`                                         | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `zig.Ast.Render.AutoIndentingStream.writeAll` (`/opt/zig/lib/std/zig/Ast/Render.zig`)

|  Change |    Delta |             % |              Time |   Samples | Callee               | Location                                                                    |
| ------: | -------: | ------------: | ----------------: | --------: | -------------------- | --------------------------------------------------------------------------- |
|  -39.9% | -87.00ms | 49.7% → 43.7% | 218.0ms → 131.0ms | 218 → 131 | `Io.Writer.writeAll` | `/opt/zig/lib/std/Io/Writer.zig`                                            |
|     new | +42.00ms |  0.0% → 14.0% |      0ms → 42.0ms |    0 → 42 | `memcpy`             | `/opt/zig/lib/compiler_rt/memcpy.zig`                                       |
| removed | -16.00ms |   3.6% → 0.0% |      16.0ms → 0ms |    16 → 0 | `0x76974`            | `/tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fYcQks/zig-base/binary` |
| removed | -10.00ms |   2.3% → 0.0% |      10.0ms → 0ms |    10 → 0 | `0x9d184`            | `/usr/lib/aarch64-linux-gnu/libc.so.6`                                      |
| removed | -10.00ms |   2.3% → 0.0% |      10.0ms → 0ms |    10 → 0 | `0x9d11c`            | `/usr/lib/aarch64-linux-gnu/libc.so.6`                                      |

##### `Io.Writer.Allocating.drain` (`/opt/zig/lib/std/Io/Writer.zig`)

|  Change |     Delta |            % |          Time | Samples | Callee                                                  | Location                          |
| ------: | --------: | -----------: | ------------: | ------: | ------------------------------------------------------- | --------------------------------- |
| removed | -149.00ms | 98.0% → 0.0% | 149.0ms → 0ms | 149 → 0 | `array_list.Aligned(u8,null).ensureUnusedCapacity`      | `/opt/zig/lib/std/array_list.zig` |
|     new |  +24.00ms | 0.0% → 96.0% |  0ms → 24.0ms |  0 → 24 | `Io.Writer.Allocating.ensureUnusedCapacity`             | `/opt/zig/lib/std/Io/Writer.zig`  |
| removed |   -1.00ms |  0.7% → 0.0% |   1.0ms → 0ms |   1 → 0 | `array_list.Aligned(u8,null).appendSliceAssumeCapacity` | `/opt/zig/lib/std/array_list.zig` |

##### `zig.Ast.Render.renderToken` (`/opt/zig/lib/std/zig/Ast/Render.zig`)

|  Change |     Delta |             % |              Time |   Samples | Callee                                        | Location                              |
| ------: | --------: | ------------: | ----------------: | --------: | --------------------------------------------- | ------------------------------------- |
|  +33.6% | +151.00ms | 26.6% → 38.1% | 450.0ms → 601.0ms | 450 → 601 | `zig.Ast.Render.renderSpace`                  | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|  -32.8% | -134.00ms | 24.2% → 17.4% | 408.0ms → 274.0ms | 408 → 274 | `zig.Ast.Render.AutoIndentingStream.writeAll` | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|  -13.3% | -104.00ms | 46.3% → 42.9% | 782.0ms → 678.0ms | 782 → 678 | `zig.Ast.Render.tokenSliceForRender`          | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|  +46.4% |  +13.00ms |   1.7% → 2.6% |   28.0ms → 41.0ms |   28 → 41 | `zig.Ast.tokenSlice`                          | `/opt/zig/lib/std/zig/Ast.zig`        |
| removed |   -1.00ms |   0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `zig.Ast.Render.renderComments`               | `/opt/zig/lib/std/zig/Ast/Render.zig` |

##### `Io.Writer.write` (`/opt/zig/lib/std/Io/Writer.zig`)

| Change |     Delta |             % |             Time |  Samples | Callee                       | Location                              |
| -----: | --------: | ------------: | ---------------: | -------: | ---------------------------- | ------------------------------------- |
| -86.0% | -104.00ms | 66.9% → 23.0% | 121.0ms → 17.0ms | 121 → 17 | `Io.Writer.Allocating.drain` | `/opt/zig/lib/std/Io/Writer.zig`      |
|    new |   +1.00ms |   0.0% → 1.4% |      0ms → 1.0ms |    0 → 1 | `memcpy`                     | `/opt/zig/lib/compiler_rt/memcpy.zig` |

##### `Io.Writer.writeAll` (`/opt/zig/lib/std/Io/Writer.zig`)

| Change |     Delta |             % |             Time |  Samples | Callee            | Location                         |
| -----: | --------: | ------------: | ---------------: | -------: | ----------------- | -------------------------------- |
| -59.1% | -107.00ms | 77.7% → 54.4% | 181.0ms → 74.0ms | 181 → 74 | `Io.Writer.write` | `/opt/zig/lib/std/Io/Writer.zig` |

##### `zig.Ast.firstToken` (`/opt/zig/lib/std/zig/Ast.zig`)

|  Change |    Delta |             % |            Time | Samples | Callee                   | Location                       |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------ | ------------------------------ |
|  -80.5% | -33.00ms |  18.9% → 6.5% |  41.0ms → 8.0ms |  41 → 8 | `zig.Ast.nodeData`       | `/opt/zig/lib/std/zig/Ast.zig` |
|  -51.7% | -31.00ms | 27.6% → 23.4% | 60.0ms → 29.0ms | 60 → 29 | `zig.Ast.nodeMainToken`  | `/opt/zig/lib/std/zig/Ast.zig` |
|  -61.4% | -27.00ms | 20.3% → 13.7% | 44.0ms → 17.0ms | 44 → 17 | `zig.Ast.nodeTag`        | `/opt/zig/lib/std/zig/Ast.zig` |
| +100.0% |  +2.00ms |   0.9% → 3.2% |   2.0ms → 4.0ms |   2 → 4 | `zig.Ast.fullSwitchCase` | `/opt/zig/lib/std/zig/Ast.zig` |
|     new |  +2.00ms |   0.0% → 1.6% |     0ms → 2.0ms |   0 → 2 | `zig.Ast.tokenTag`       | `/opt/zig/lib/std/zig/Ast.zig` |

##### `mem.indexOfPos__anon_23640` (`/opt/zig/lib/std/mem.zig`)

|  Change |    Delta |            % |         Time | Samples | Callee                             | Location                   |
| ------: | -------: | -----------: | -----------: | ------: | ---------------------------------- | -------------------------- |
| removed | -77.00ms | 89.5% → 0.0% | 77.0ms → 0ms |  77 → 0 | `mem.indexOfPosLinear__anon_26200` | `/opt/zig/lib/std/mem.zig` |
| removed |  -2.00ms |  2.3% → 0.0% |  2.0ms → 0ms |   2 → 0 | `mem.indexOfScalarPos__anon_8996`  | `/opt/zig/lib/std/mem.zig` |

##### `mem.indexOf__anon_18425` (`/opt/zig/lib/std/mem.zig`)

|  Change |    Delta |             % |         Time | Samples | Callee                       | Location                   |
| ------: | -------: | ------------: | -----------: | ------: | ---------------------------- | -------------------------- |
| removed | -84.00ms | 100.0% → 0.0% | 84.0ms → 0ms |  84 → 0 | `mem.indexOfPos__anon_23640` | `/opt/zig/lib/std/mem.zig` |

##### `mem.indexOfScalarPos__anon_8996` (`/opt/zig/lib/std/mem.zig`)

|  Change |   Delta |           % |        Time | Samples | Callee                       | Location                    |
| ------: | ------: | ----------: | ----------: | ------: | ---------------------------- | --------------------------- |
| removed | -2.00ms | 2.5% → 0.0% | 2.0ms → 0ms |   2 → 0 | `simd.firstTrue__anon_14559` | `/opt/zig/lib/std/simd.zig` |

##### `mem.indexOfPosLinear__anon_26200` (`/opt/zig/lib/std/mem.zig`)

|  Change |    Delta |            % |         Time | Samples | Callee               | Location                   |
| ------: | -------: | -----------: | -----------: | ------: | -------------------- | -------------------------- |
| removed | -56.00ms | 72.7% → 0.0% | 56.0ms → 0ms |  56 → 0 | `mem.eql__anon_3429` | `/opt/zig/lib/std/mem.zig` |

##### `mem.indexOfScalar__anon_5905` (`/opt/zig/lib/std/mem.zig`)

|  Change |    Delta |             % |         Time | Samples | Callee                            | Location                   |
| ------: | -------: | ------------: | -----------: | ------: | --------------------------------- | -------------------------- |
| removed | -76.00ms | 100.0% → 0.0% | 76.0ms → 0ms |  76 → 0 | `mem.indexOfScalarPos__anon_8996` | `/opt/zig/lib/std/mem.zig` |

##### `zig.Ast.Render.renderExtraNewline` (`/opt/zig/lib/std/zig/Ast/Render.zig`)

|  Change |    Delta |             % |              Time |   Samples | Callee                                             | Location                                |
| ------: | -------: | ------------: | ----------------: | --------: | -------------------------------------------------- | --------------------------------------- |
|  -21.0% | -33.00ms | 67.7% → 71.3% | 157.0ms → 124.0ms | 157 → 124 | `zig.Ast.Render.renderExtraNewlineToken`           | `/opt/zig/lib/std/zig/Ast/Render.zig`   |
|  -43.7% | -31.00ms | 30.6% → 23.0% |   71.0ms → 40.0ms |   71 → 40 | `zig.Ast.firstToken`                               | `/opt/zig/lib/std/zig/Ast.zig`          |
|     new |  +3.00ms |   0.0% → 1.7% |       0ms → 3.0ms |     0 → 3 | `zig.Ast.Render.AutoIndentingStream.insertNewline` | `/opt/zig/lib/std/zig/Ast/Render.zig`   |
| removed |  -2.00ms |   0.9% → 0.0% |       2.0ms → 0ms |     2 → 0 | `zig.Ast.firstToken`                               | `/opt/zig/lib/std/multi_array_list.zig` |
|     new |  +2.00ms |   0.0% → 1.1% |       0ms → 2.0ms |     0 → 2 | `zig.Ast.Render.renderExtraNewlineToken`           | `/opt/zig/lib/std/multi_array_list.zig` |

##### `zig.Ast.Render.rowSize` (`/opt/zig/lib/std/zig/Ast/Render.zig`)

|  Change |    Delta |            % |         Time | Samples | Callee                            | Location                       |
| ------: | -------: | -----------: | -----------: | ------: | --------------------------------- | ------------------------------ |
| removed | -29.00ms | 50.0% → 0.0% | 29.0ms → 0ms |  29 → 0 | `zig.Ast.tokensOnSameLine`        | `/opt/zig/lib/std/zig/Ast.zig` |
| removed | -18.00ms | 31.0% → 0.0% | 18.0ms → 0ms |  18 → 0 | `zig.Ast.firstToken`              | `/opt/zig/lib/std/zig/Ast.zig` |
| removed |  -7.00ms | 12.1% → 0.0% |  7.0ms → 0ms |   7 → 0 | `zig.Ast.lastToken`               | `/opt/zig/lib/std/zig/Ast.zig` |
| removed |  -1.00ms |  1.7% → 0.0% |  1.0ms → 0ms |   1 → 0 | `mem.indexOfScalarPos__anon_8996` | `/opt/zig/lib/std/mem.zig`     |

##### `fs.Dir.readFileAllocOptions__anon_2384` (`/opt/zig/lib/std/fs/Dir.zig`)

|  Change |    Delta |            % |         Time | Samples | Callee                                     | Location                       |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------------------------ | ------------------------------ |
| removed | -22.00ms | 47.8% → 0.0% | 22.0ms → 0ms |  22 → 0 | `fs.File.readToEndAllocOptions__anon_2451` | `/opt/zig/lib/std/fs/File.zig` |
| removed | -16.00ms | 34.8% → 0.0% | 16.0ms → 0ms |  16 → 0 | `fs.Dir.openFile`                          | `/opt/zig/lib/std/fs/Dir.zig`  |
| removed |  -5.00ms | 10.9% → 0.0% |  5.0ms → 0ms |   5 → 0 | `fs.File.getEndPos`                        | `/opt/zig/lib/std/fs/File.zig` |
| removed |  -3.00ms |  6.5% → 0.0% |  3.0ms → 0ms |   3 → 0 | `fs.File.close`                            | `/opt/zig/lib/std/fs/File.zig` |

##### `zig.Ast.nodeTag` (`/opt/zig/lib/std/zig/Ast.zig`)

| Change |    Delta |            % |           Time | Samples | Callee                                                                  | Location                                |
| -----: | -------: | -----------: | -------------: | ------: | ----------------------------------------------------------------------- | --------------------------------------- |
| -96.7% | -59.00ms | 55.0% → 3.0% | 61.0ms → 2.0ms |  61 → 2 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32303` | `/opt/zig/lib/std/multi_array_list.zig` |

##### `0x92a9b` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |           Time | Samples | Callee    | Location                               |
| ------: | ------: | ------------: | -------------: | ------: | --------- | -------------------------------------- |
|  -30.8% | -4.00ms | 76.5% → 90.0% | 13.0ms → 9.0ms |  13 → 9 | `0x9023f` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -1.00ms |   5.9% → 0.0% |    1.0ms → 0ms |   1 → 0 | `0x8faa0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -1.00ms |   5.9% → 0.0% |    1.0ms → 0ms |   1 → 0 | `0x8fcb4` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -1.00ms |   5.9% → 0.0% |    1.0ms → 0ms |   1 → 0 | `0x901d4` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -1.00ms |   5.9% → 0.0% |    1.0ms → 0ms |   1 → 0 | `0x8fc9c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9405b` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |            % |        Time | Samples | Callee    | Location                               |
| ------: | ------: | -----------: | ----------: | ------: | --------- | -------------------------------------- |
| removed | -4.00ms | 66.7% → 0.0% | 4.0ms → 0ms |   4 → 0 | `0x9245b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -1.00ms | 16.7% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x92284` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -1.00ms | 16.7% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x92260` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x8fa47` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |      % |           Time | Samples | Callee    | Location                               |
| -----: | ------: | -----: | -------------: | ------: | --------- | -------------------------------------- |
| -30.8% | -4.00ms | 100.0% | 13.0ms → 9.0ms |  13 → 9 | `0x8f987` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9023f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |      % |           Time | Samples | Callee    | Location                               |
| -----: | ------: | -----: | -------------: | ------: | --------- | -------------------------------------- |
| -30.8% | -4.00ms | 100.0% | 13.0ms → 9.0ms |  13 → 9 | `0x8fa47` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9245b` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |            % |        Time | Samples | Callee    | Location                               |
| ------: | ------: | -----------: | ----------: | ------: | --------- | -------------------------------------- |
| removed | -1.00ms | 25.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x91234` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -1.00ms | 25.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x910a0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -1.00ms | 25.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x911d8` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
