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

|  Change |     Delta |             % |              Time |       Samples | Function                                                                                  | Location                               |
| ------: | --------: | ------------: | ----------------: | ------------: | ----------------------------------------------------------------------------------------- | -------------------------------------- |
|     new | +351.00ms |   0.0% → 6.1% |     0ms → 351.0ms |       0 → 351 | `memset`                                                                                  | `opt/zig/lib/compiler_rt.zig`          |
|     new | +112.00ms |   0.0% → 1.9% |     0ms → 112.0ms |       0 → 112 | `mem.findScalarPos__anon_6382`                                                            | `opt/zig/lib/std/mem.zig`              |
|   +7.9% |  +93.00ms | 22.4% → 21.9% |     1.17s → 1.26s | 1,175 → 1,268 | `zig.tokenizer.Tokenizer.next`                                                            | `opt/zig/lib/std/zig/tokenizer.zig`    |
|  +65.0% |  +76.00ms |   2.2% → 3.3% | 117.0ms → 193.0ms |     117 → 193 | `zig.Ast.Render.renderExpression`                                                         | `opt/zig/lib/std/zig/Ast/Render.zig`   |
|  +46.3% |  +62.00ms |   2.6% → 3.4% | 134.0ms → 196.0ms |     134 → 196 | `zig.Ast.Render.renderComments`                                                           | `opt/zig/lib/std/zig/Ast/Render.zig`   |
|  +27.6% |  +55.00ms |   3.8% → 4.4% | 199.0ms → 254.0ms |     199 → 254 | `zig.Ast.Render.tokenSliceForRender`                                                      | `opt/zig/lib/std/zig/Ast/Render.zig`   |
| +134.4% |  +43.00ms |   0.6% → 1.3% |   32.0ms → 75.0ms |       32 → 75 | `zig.Ast.lastToken`                                                                       | `opt/zig/lib/std/zig/Ast.zig`          |
|     new |  +39.00ms |   0.0% → 0.7% |      0ms → 39.0ms |        0 → 39 | `0xe3e00`                                                                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`  |
| +237.5% |  +38.00ms |   0.3% → 0.9% |   16.0ms → 54.0ms |       16 → 54 | `zig.Ast.nodeMainToken`                                                                   | `opt/zig/lib/std/zig/Ast.zig`          |
|     new |  +33.00ms |   0.0% → 0.6% |      0ms → 33.0ms |        0 → 33 | `compiler_rt.memcpy.copyLessThan16`                                                       | `opt/zig/lib/compiler_rt/memcpy.zig`   |
| +620.0% |  +31.00ms |   0.1% → 0.6% |    5.0ms → 36.0ms |        5 → 36 | `zig.Parse.addNode`                                                                       | `opt/zig/lib/std/zig/Parse.zig`        |
|  +21.3% |  +30.00ms |   2.7% → 3.0% | 141.0ms → 171.0ms |     141 → 171 | `zig.Ast.Render.renderSpace`                                                              | `opt/zig/lib/std/zig/Ast/Render.zig`   |
|     new |  +28.00ms |   0.0% → 0.5% |      0ms → 28.0ms |        0 → 28 | `mem.findPosLinear__anon_31435`                                                           | `opt/zig/lib/std/mem.zig`              |
| +525.0% |  +21.00ms |   0.1% → 0.4% |    4.0ms → 25.0ms |        4 → 25 | `zig.Ast.nodeData`                                                                        | `opt/zig/lib/std/zig/Ast.zig`          |
| +110.5% |  +21.00ms |   0.4% → 0.7% |   19.0ms → 40.0ms |       19 → 40 | `zig.Ast.Render.hasComment`                                                               | `opt/zig/lib/std/zig/Ast/Render.zig`   |
|     new |  +20.00ms |   0.0% → 0.3% |      0ms → 20.0ms |        0 → 20 | `zig.Ast.Render.renderExpressionComma`                                                    | `opt/zig/lib/std/zig/Ast/Render.zig`   |
| +118.8% |  +19.00ms |   0.3% → 0.6% |   16.0ms → 35.0ms |       16 → 35 | `zig.Ast.Render.AutoIndentingStream.writeByte`                                            | `opt/zig/lib/std/debug.zig`            |
| +112.5% |  +18.00ms |   0.3% → 0.6% |   16.0ms → 34.0ms |       16 → 34 | `zig.Ast.parse`                                                                           | `opt/zig/lib/std/zig/Ast.zig`          |
|  +78.3% |  +18.00ms |   0.4% → 0.7% |   23.0ms → 41.0ms |       23 → 41 | `zig.Ast.Render.AutoIndentingStream.currentIndent`                                        | `opt/zig/lib/std/zig/Ast/Render.zig`   |
|  +75.0% |  +18.00ms |   0.5% → 0.7% |   24.0ms → 42.0ms |       24 → 42 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).Slice.items__anon_32582` | `opt/zig/lib/std/multi_array_list.zig` |

##### Standard library

|  Change |     Delta |             % |              Time |       Samples | Function                                                                                  | Location                               |
| ------: | --------: | ------------: | ----------------: | ------------: | ----------------------------------------------------------------------------------------- | -------------------------------------- |
|     new | +351.00ms |   0.0% → 6.1% |     0ms → 351.0ms |       0 → 351 | `memset`                                                                                  | `opt/zig/lib/compiler_rt.zig`          |
|     new | +112.00ms |   0.0% → 1.9% |     0ms → 112.0ms |       0 → 112 | `mem.findScalarPos__anon_6382`                                                            | `opt/zig/lib/std/mem.zig`              |
|   +7.9% |  +93.00ms | 22.4% → 21.9% |     1.17s → 1.26s | 1,175 → 1,268 | `zig.tokenizer.Tokenizer.next`                                                            | `opt/zig/lib/std/zig/tokenizer.zig`    |
|  +65.0% |  +76.00ms |   2.2% → 3.3% | 117.0ms → 193.0ms |     117 → 193 | `zig.Ast.Render.renderExpression`                                                         | `opt/zig/lib/std/zig/Ast/Render.zig`   |
|  +46.3% |  +62.00ms |   2.6% → 3.4% | 134.0ms → 196.0ms |     134 → 196 | `zig.Ast.Render.renderComments`                                                           | `opt/zig/lib/std/zig/Ast/Render.zig`   |
|  +27.6% |  +55.00ms |   3.8% → 4.4% | 199.0ms → 254.0ms |     199 → 254 | `zig.Ast.Render.tokenSliceForRender`                                                      | `opt/zig/lib/std/zig/Ast/Render.zig`   |
| +134.4% |  +43.00ms |   0.6% → 1.3% |   32.0ms → 75.0ms |       32 → 75 | `zig.Ast.lastToken`                                                                       | `opt/zig/lib/std/zig/Ast.zig`          |
| +237.5% |  +38.00ms |   0.3% → 0.9% |   16.0ms → 54.0ms |       16 → 54 | `zig.Ast.nodeMainToken`                                                                   | `opt/zig/lib/std/zig/Ast.zig`          |
|     new |  +33.00ms |   0.0% → 0.6% |      0ms → 33.0ms |        0 → 33 | `compiler_rt.memcpy.copyLessThan16`                                                       | `opt/zig/lib/compiler_rt/memcpy.zig`   |
| +620.0% |  +31.00ms |   0.1% → 0.6% |    5.0ms → 36.0ms |        5 → 36 | `zig.Parse.addNode`                                                                       | `opt/zig/lib/std/zig/Parse.zig`        |
|  +21.3% |  +30.00ms |   2.7% → 3.0% | 141.0ms → 171.0ms |     141 → 171 | `zig.Ast.Render.renderSpace`                                                              | `opt/zig/lib/std/zig/Ast/Render.zig`   |
|     new |  +28.00ms |   0.0% → 0.5% |      0ms → 28.0ms |        0 → 28 | `mem.findPosLinear__anon_31435`                                                           | `opt/zig/lib/std/mem.zig`              |
| +525.0% |  +21.00ms |   0.1% → 0.4% |    4.0ms → 25.0ms |        4 → 25 | `zig.Ast.nodeData`                                                                        | `opt/zig/lib/std/zig/Ast.zig`          |
| +110.5% |  +21.00ms |   0.4% → 0.7% |   19.0ms → 40.0ms |       19 → 40 | `zig.Ast.Render.hasComment`                                                               | `opt/zig/lib/std/zig/Ast/Render.zig`   |
|     new |  +20.00ms |   0.0% → 0.3% |      0ms → 20.0ms |        0 → 20 | `zig.Ast.Render.renderExpressionComma`                                                    | `opt/zig/lib/std/zig/Ast/Render.zig`   |
| +118.8% |  +19.00ms |   0.3% → 0.6% |   16.0ms → 35.0ms |       16 → 35 | `zig.Ast.Render.AutoIndentingStream.writeByte`                                            | `opt/zig/lib/std/debug.zig`            |
| +112.5% |  +18.00ms |   0.3% → 0.6% |   16.0ms → 34.0ms |       16 → 34 | `zig.Ast.parse`                                                                           | `opt/zig/lib/std/zig/Ast.zig`          |
|  +78.3% |  +18.00ms |   0.4% → 0.7% |   23.0ms → 41.0ms |       23 → 41 | `zig.Ast.Render.AutoIndentingStream.currentIndent`                                        | `opt/zig/lib/std/zig/Ast/Render.zig`   |
|  +75.0% |  +18.00ms |   0.5% → 0.7% |   24.0ms → 42.0ms |       24 → 42 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).Slice.items__anon_32582` | `opt/zig/lib/std/multi_array_list.zig` |
|     new |  +18.00ms |   0.0% → 0.3% |      0ms → 18.0ms |        0 → 18 | `mem.findScalar__anon_6379`                                                               | `opt/zig/lib/std/mem.zig`              |

##### Native

| Change |    Delta |            % |          Time | Samples | Function  | Location                              |
| -----: | -------: | -----------: | ------------: | ------: | --------- | ------------------------------------- |
|    new | +39.00ms |  0.0% → 0.7% |  0ms → 39.0ms |  0 → 39 | `0xe3e00` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new |  +4.00ms |  0.0% → 0.1% |   0ms → 4.0ms |   0 → 4 | `0xdd2b4` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new |  +3.00ms |  0.0% → 0.1% |   0ms → 3.0ms |   0 → 3 | `0x929c4` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new |  +3.00ms |  0.0% → 0.1% |   0ms → 3.0ms |   0 → 3 | `0x91d0c` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| +16.7% |  +1.00ms |         0.1% | 6.0ms → 7.0ms |   6 → 7 | `0xde3c8` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new |  +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0xe7e0c` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new |  +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x92274` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new |  +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x91c70` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new |  +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x92240` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new |  +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x8fd10` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new |  +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x8ff24` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new |  +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x8ffd0` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new |  +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x90e1c` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new |  +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x92dcc` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new |  +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x8fad8` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |     Delta |            % |              Time |   Samples | Function                                                                                             | Location                                                                   |
| ------: | --------: | -----------: | ----------------: | --------: | ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
|  -88.6% | -117.00ms |  2.5% → 0.3% |  132.0ms → 15.0ms |  132 → 15 | `0x9d200`                                                                                            | `usr/lib/aarch64-linux-gnu/libc.so.6`                                      |
| removed |  -77.00ms |  1.5% → 0.0% |      77.0ms → 0ms |    77 → 0 | `mem.indexOfScalarPos__anon_8996`                                                                    | `opt/zig/lib/std/mem.zig`                                                  |
| removed |  -69.00ms |  1.3% → 0.0% |      69.0ms → 0ms |    69 → 0 | `0x9e670`                                                                                            | `usr/lib/aarch64-linux-gnu/libc.so.6`                                      |
|  -96.7% |  -59.00ms | 1.2% → <0.1% |    61.0ms → 2.0ms |    61 → 2 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32303`                              | `opt/zig/lib/std/multi_array_list.zig`                                     |
|  -64.0% |  -55.00ms |  1.6% → 0.5% |   86.0ms → 31.0ms |   86 → 31 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).Slice.items__anon_27682`            | `opt/zig/lib/std/multi_array_list.zig`                                     |
|  -33.3% |  -43.00ms |  2.5% → 1.5% |  129.0ms → 86.0ms |  129 → 86 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32262`                              | `opt/zig/lib/std/multi_array_list.zig`                                     |
|  -21.1% |  -30.00ms |  2.7% → 1.9% | 142.0ms → 112.0ms | 142 → 112 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_28815`                              | `opt/zig/lib/std/multi_array_list.zig`                                     |
|  -48.4% |  -30.00ms |  1.2% → 0.6% |   62.0ms → 32.0ms |   62 → 32 | `mem.eqlBytes`                                                                                       | `opt/zig/lib/std/mem.zig`                                                  |
| removed |  -21.00ms |  0.4% → 0.0% |      21.0ms → 0ms |    21 → 0 | `mem.indexOfPosLinear__anon_26200`                                                                   | `opt/zig/lib/std/mem.zig`                                                  |
|   -8.0% |  -20.00ms |  4.8% → 4.0% | 249.0ms → 229.0ms | 249 → 229 | `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` | `opt/zig/lib/std/static_string_map.zig`                                    |
| removed |  -20.00ms |  0.4% → 0.0% |      20.0ms → 0ms |    20 → 0 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).ensureTotalCapacity`                | `opt/zig/lib/std/math.zig`                                                 |
|  -48.8% |  -20.00ms |  0.8% → 0.4% |   41.0ms → 21.0ms |   41 → 21 | `zig.Parse.parsePrimaryTypeExpr`                                                                     | `opt/zig/lib/std/zig/Parse.zig`                                            |
| removed |  -19.00ms |  0.4% → 0.0% |      19.0ms → 0ms |    19 → 0 | `0x9e674`                                                                                            | `usr/lib/aarch64-linux-gnu/libc.so.6`                                      |
| removed |  -19.00ms |  0.4% → 0.0% |      19.0ms → 0ms |    19 → 0 | `0xddb88`                                                                                            | `usr/lib/aarch64-linux-gnu/libc.so.6`                                      |
|  -29.1% |  -16.00ms |  1.1% → 0.7% |   55.0ms → 39.0ms |   55 → 39 | `zig.Ast.Render.AutoIndentingStream.writeAll`                                                        | `opt/zig/lib/std/zig/Ast/Render.zig`                                       |
| removed |  -16.00ms |  0.3% → 0.0% |      16.0ms → 0ms |    16 → 0 | `zig.Parse.parseTypeExpr`                                                                            | `opt/zig/lib/std/multi_array_list.zig`                                     |
| removed |  -16.00ms |  0.3% → 0.0% |      16.0ms → 0ms |    16 → 0 | `0x76974`                                                                                            | `tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fYcQks/zig-base/binary` |
|  -25.9% |  -15.00ms |  1.1% → 0.7% |   58.0ms → 43.0ms |   58 → 43 | `zig.Ast.Render.renderToken`                                                                         | `opt/zig/lib/std/zig/Ast/Render.zig`                                       |
|  -61.9% |  -13.00ms |  0.4% → 0.1% |    21.0ms → 8.0ms |    21 → 8 | `zig.Parse.parseSuffixExpr`                                                                          | `opt/zig/lib/std/zig/Parse.zig`                                            |
| removed |  -12.00ms |  0.2% → 0.0% |      12.0ms → 0ms |    12 → 0 | `os.linux.errnoFromSyscall`                                                                          | `opt/zig/lib/std/os/linux.zig`                                             |

##### Standard library

|  Change |    Delta |            % |              Time |   Samples | Function                                                                                             | Location                                |
| ------: | -------: | -----------: | ----------------: | --------: | ---------------------------------------------------------------------------------------------------- | --------------------------------------- |
| removed | -77.00ms |  1.5% → 0.0% |      77.0ms → 0ms |    77 → 0 | `mem.indexOfScalarPos__anon_8996`                                                                    | `opt/zig/lib/std/mem.zig`               |
|  -96.7% | -59.00ms | 1.2% → <0.1% |    61.0ms → 2.0ms |    61 → 2 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32303`                              | `opt/zig/lib/std/multi_array_list.zig`  |
|  -64.0% | -55.00ms |  1.6% → 0.5% |   86.0ms → 31.0ms |   86 → 31 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).Slice.items__anon_27682`            | `opt/zig/lib/std/multi_array_list.zig`  |
|  -33.3% | -43.00ms |  2.5% → 1.5% |  129.0ms → 86.0ms |  129 → 86 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32262`                              | `opt/zig/lib/std/multi_array_list.zig`  |
|  -21.1% | -30.00ms |  2.7% → 1.9% | 142.0ms → 112.0ms | 142 → 112 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_28815`                              | `opt/zig/lib/std/multi_array_list.zig`  |
|  -48.4% | -30.00ms |  1.2% → 0.6% |   62.0ms → 32.0ms |   62 → 32 | `mem.eqlBytes`                                                                                       | `opt/zig/lib/std/mem.zig`               |
| removed | -21.00ms |  0.4% → 0.0% |      21.0ms → 0ms |    21 → 0 | `mem.indexOfPosLinear__anon_26200`                                                                   | `opt/zig/lib/std/mem.zig`               |
|   -8.0% | -20.00ms |  4.8% → 4.0% | 249.0ms → 229.0ms | 249 → 229 | `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` | `opt/zig/lib/std/static_string_map.zig` |
| removed | -20.00ms |  0.4% → 0.0% |      20.0ms → 0ms |    20 → 0 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).ensureTotalCapacity`                | `opt/zig/lib/std/math.zig`              |
|  -48.8% | -20.00ms |  0.8% → 0.4% |   41.0ms → 21.0ms |   41 → 21 | `zig.Parse.parsePrimaryTypeExpr`                                                                     | `opt/zig/lib/std/zig/Parse.zig`         |
|  -29.1% | -16.00ms |  1.1% → 0.7% |   55.0ms → 39.0ms |   55 → 39 | `zig.Ast.Render.AutoIndentingStream.writeAll`                                                        | `opt/zig/lib/std/zig/Ast/Render.zig`    |
| removed | -16.00ms |  0.3% → 0.0% |      16.0ms → 0ms |    16 → 0 | `zig.Parse.parseTypeExpr`                                                                            | `opt/zig/lib/std/multi_array_list.zig`  |
|  -25.9% | -15.00ms |  1.1% → 0.7% |   58.0ms → 43.0ms |   58 → 43 | `zig.Ast.Render.renderToken`                                                                         | `opt/zig/lib/std/zig/Ast/Render.zig`    |
|  -61.9% | -13.00ms |  0.4% → 0.1% |    21.0ms → 8.0ms |    21 → 8 | `zig.Parse.parseSuffixExpr`                                                                          | `opt/zig/lib/std/zig/Parse.zig`         |
| removed | -12.00ms |  0.2% → 0.0% |      12.0ms → 0ms |    12 → 0 | `os.linux.errnoFromSyscall`                                                                          | `opt/zig/lib/std/os/linux.zig`          |
|  -22.9% |  -8.00ms |  0.7% → 0.5% |   35.0ms → 27.0ms |   35 → 27 | `zig.Parse.eatToken`                                                                                 | `opt/zig/lib/std/zig/Parse.zig`         |
|   -2.6% |  -7.00ms |  5.1% → 4.5% | 269.0ms → 262.0ms | 269 → 262 | `zig.Ast.tokenSlice`                                                                                 | `opt/zig/lib/std/zig/Ast.zig`           |
| removed |  -7.00ms |  0.1% → 0.0% |       7.0ms → 0ms |     7 → 0 | `mem.indexOfPos__anon_23640`                                                                         | `opt/zig/lib/std/mem.zig`               |
| removed |  -7.00ms |  0.1% → 0.0% |       7.0ms → 0ms |     7 → 0 | `zig.Parse.expectExpr`                                                                               | `opt/zig/lib/std/zig/Parse.zig`         |
|  -77.8% |  -7.00ms | 0.2% → <0.1% |     9.0ms → 2.0ms |     9 → 2 | `zig.Ast.fullCall`                                                                                   | `opt/zig/lib/std/zig/Ast.zig`           |

##### Native

|  Change |     Delta |            % |             Time |  Samples | Function  | Location                              |
| ------: | --------: | -----------: | ---------------: | -------: | --------- | ------------------------------------- |
|  -88.6% | -117.00ms |  2.5% → 0.3% | 132.0ms → 15.0ms | 132 → 15 | `0x9d200` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -69.00ms |  1.3% → 0.0% |     69.0ms → 0ms |   69 → 0 | `0x9e670` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -19.00ms |  0.4% → 0.0% |     19.0ms → 0ms |   19 → 0 | `0x9e674` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -19.00ms |  0.4% → 0.0% |     19.0ms → 0ms |   19 → 0 | `0xddb88` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -11.00ms |  0.2% → 0.0% |     11.0ms → 0ms |   11 → 0 | `0x9d11c` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -11.00ms |  0.2% → 0.0% |     11.0ms → 0ms |   11 → 0 | `0x9d100` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -10.00ms |  0.2% → 0.0% |     10.0ms → 0ms |   10 → 0 | `0x9d184` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -9.00ms |  0.2% → 0.0% |      9.0ms → 0ms |    9 → 0 | `0x9d138` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -7.00ms |  0.1% → 0.0% |      7.0ms → 0ms |    7 → 0 | `0x9d168` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -5.00ms |  0.1% → 0.0% |      5.0ms → 0ms |    5 → 0 | `0x9d150` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -26.3% |   -5.00ms |  0.4% → 0.2% |  19.0ms → 14.0ms |  19 → 14 | `0xdda44` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -4.00ms |  0.1% → 0.0% |      4.0ms → 0ms |    4 → 0 | `0x9e5c0` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -4.00ms |  0.1% → 0.0% |      4.0ms → 0ms |    4 → 0 | `0x9e580` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -4.00ms |  0.1% → 0.0% |      4.0ms → 0ms |    4 → 0 | `0x9d114` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -3.00ms |  0.1% → 0.0% |      3.0ms → 0ms |    3 → 0 | `0x9e584` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -21.4% |   -3.00ms |  0.3% → 0.2% |  14.0ms → 11.0ms |  14 → 11 | `0xe3acc` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -2.00ms | <0.1% → 0.0% |      2.0ms → 0ms |    2 → 0 | `0x9d160` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -50.0% |   -2.00ms | 0.1% → <0.1% |    4.0ms → 2.0ms |    4 → 2 | `0x9d210` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -2.00ms | <0.1% → 0.0% |      2.0ms → 0ms |    2 → 0 | `0x9d124` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -2.00ms | <0.1% → 0.0% |      2.0ms → 0ms |    2 → 0 | `0x929e0` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|   Change |     Delta |             % |             Time |       Samples | Function                                             | Location                                         |
| -------: | --------: | ------------: | ---------------: | ------------: | ---------------------------------------------------- | ------------------------------------------------ |
|      new |   +5.796s | 0.0% → 100.0% |      0ms → 5.79s |     0 → 5,796 | `start.main`                                         | `opt/zig/lib/std/start.zig`                      |
| +9832.1% |   +2.753s |  0.5% → 48.0% |   28.0ms → 2.78s |    28 → 2,781 | `zig.Ast.Render.renderBlock`                         | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|      new | +760.00ms |  0.0% → 13.1% |    0ms → 760.0ms |       0 → 760 | `zig.Ast.parseTokens`                                | `opt/zig/lib/std/zig/Ast.zig`                    |
|   +10.7% | +559.00ms |         99.9% |    5.23s → 5.79s | 5,232 → 5,791 | `profile.main`                                       | `out/profile.zig`                                |
|   +10.7% | +559.00ms |        100.0% |    5.23s → 5.79s | 5,237 → 5,796 | `start.callMain`                                     | `opt/zig/lib/std/start.zig`                      |
|   +10.7% | +559.00ms |        100.0% |    5.23s → 5.79s | 5,237 → 5,796 | `start.callMainWithArgs`                             | `opt/zig/lib/std/start.zig`                      |
|   +10.7% | +559.00ms |        100.0% |    5.23s → 5.79s | 5,237 → 5,796 | `0x27743`                                            | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   +10.7% | +559.00ms |        100.0% |    5.23s → 5.79s | 5,237 → 5,796 | `0x27817`                                            | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   +10.7% | +559.00ms |        100.0% |    5.23s → 5.79s | 5,237 → 5,796 | `_start`                                             | `opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
|      new | +351.00ms |   0.0% → 6.1% |    0ms → 351.0ms |       0 → 351 | `memset`                                             | `opt/zig/lib/compiler_rt.zig`                    |
|   +28.1% | +334.00ms | 22.7% → 26.3% |    1.18s → 1.52s | 1,189 → 1,523 | `zig.Ast.parse`                                      | `opt/zig/lib/std/zig/Ast.zig`                    |
| +3575.0% | +286.00ms |   0.2% → 5.1% |  8.0ms → 294.0ms |       8 → 294 | `mem.Allocator.allocAdvancedWithRetAddr`             | `opt/zig/lib/std/mem/Allocator.zig`              |
| +6950.0% | +278.00ms |   0.1% → 4.9% |  4.0ms → 282.0ms |       4 → 282 | `mem.Allocator.allocWithSizeAndAlignment__anon_9851` | `opt/zig/lib/std/mem/Allocator.zig`              |
| +6950.0% | +278.00ms |   0.1% → 4.9% |  4.0ms → 282.0ms |       4 → 282 | `mem.Allocator.alignedAlloc__anon_9848`              | `opt/zig/lib/std/mem/Allocator.zig`              |
| +5540.0% | +277.00ms |   0.1% → 4.9% |  5.0ms → 282.0ms |       5 → 282 | `mem.Allocator.allocBytesWithAlignment__anon_10001`  | `opt/zig/lib/std/mem/Allocator.zig`              |
|    +6.6% | +250.00ms | 72.8% → 70.1% |    3.81s → 4.06s | 3,813 → 4,063 | `zig.Ast.Render.renderExpression`                    | `opt/zig/lib/std/zig/Ast/Render.zig`             |
| +1205.6% | +217.00ms |   0.3% → 4.1% | 18.0ms → 235.0ms |      18 → 235 | `zig.Ast.Render.renderExpressionComma`               | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|    +5.2% | +208.00ms | 75.7% → 71.9% |    3.96s → 4.17s | 3,962 → 4,170 | `zig.Ast.Render.renderMembers`                       | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|    +5.2% | +206.00ms | 75.8% → 72.0% |    3.96s → 4.17s | 3,968 → 4,174 | `zig.Ast.Render.renderTree`                          | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|    +5.2% | +206.00ms | 75.8% → 72.0% |    3.96s → 4.17s | 3,968 → 4,174 | `zig.Ast.render`                                     | `opt/zig/lib/std/zig/Ast.zig`                    |

##### Standard library

|   Change |     Delta |             % |             Time |       Samples | Function                                             | Location                                         |
| -------: | --------: | ------------: | ---------------: | ------------: | ---------------------------------------------------- | ------------------------------------------------ |
|      new |   +5.796s | 0.0% → 100.0% |      0ms → 5.79s |     0 → 5,796 | `start.main`                                         | `opt/zig/lib/std/start.zig`                      |
| +9832.1% |   +2.753s |  0.5% → 48.0% |   28.0ms → 2.78s |    28 → 2,781 | `zig.Ast.Render.renderBlock`                         | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|      new | +760.00ms |  0.0% → 13.1% |    0ms → 760.0ms |       0 → 760 | `zig.Ast.parseTokens`                                | `opt/zig/lib/std/zig/Ast.zig`                    |
|   +10.7% | +559.00ms |        100.0% |    5.23s → 5.79s | 5,237 → 5,796 | `start.callMain`                                     | `opt/zig/lib/std/start.zig`                      |
|   +10.7% | +559.00ms |        100.0% |    5.23s → 5.79s | 5,237 → 5,796 | `start.callMainWithArgs`                             | `opt/zig/lib/std/start.zig`                      |
|   +10.7% | +559.00ms |        100.0% |    5.23s → 5.79s | 5,237 → 5,796 | `_start`                                             | `opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
|      new | +351.00ms |   0.0% → 6.1% |    0ms → 351.0ms |       0 → 351 | `memset`                                             | `opt/zig/lib/compiler_rt.zig`                    |
|   +28.1% | +334.00ms | 22.7% → 26.3% |    1.18s → 1.52s | 1,189 → 1,523 | `zig.Ast.parse`                                      | `opt/zig/lib/std/zig/Ast.zig`                    |
| +3575.0% | +286.00ms |   0.2% → 5.1% |  8.0ms → 294.0ms |       8 → 294 | `mem.Allocator.allocAdvancedWithRetAddr`             | `opt/zig/lib/std/mem/Allocator.zig`              |
| +6950.0% | +278.00ms |   0.1% → 4.9% |  4.0ms → 282.0ms |       4 → 282 | `mem.Allocator.allocWithSizeAndAlignment__anon_9851` | `opt/zig/lib/std/mem/Allocator.zig`              |
| +6950.0% | +278.00ms |   0.1% → 4.9% |  4.0ms → 282.0ms |       4 → 282 | `mem.Allocator.alignedAlloc__anon_9848`              | `opt/zig/lib/std/mem/Allocator.zig`              |
| +5540.0% | +277.00ms |   0.1% → 4.9% |  5.0ms → 282.0ms |       5 → 282 | `mem.Allocator.allocBytesWithAlignment__anon_10001`  | `opt/zig/lib/std/mem/Allocator.zig`              |
|    +6.6% | +250.00ms | 72.8% → 70.1% |    3.81s → 4.06s | 3,813 → 4,063 | `zig.Ast.Render.renderExpression`                    | `opt/zig/lib/std/zig/Ast/Render.zig`             |
| +1205.6% | +217.00ms |   0.3% → 4.1% | 18.0ms → 235.0ms |      18 → 235 | `zig.Ast.Render.renderExpressionComma`               | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|    +5.2% | +208.00ms | 75.7% → 71.9% |    3.96s → 4.17s | 3,962 → 4,170 | `zig.Ast.Render.renderMembers`                       | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|    +5.2% | +206.00ms | 75.8% → 72.0% |    3.96s → 4.17s | 3,968 → 4,174 | `zig.Ast.Render.renderTree`                          | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|    +5.2% | +206.00ms | 75.8% → 72.0% |    3.96s → 4.17s | 3,968 → 4,174 | `zig.Ast.render`                                     | `opt/zig/lib/std/zig/Ast.zig`                    |
|    +5.2% | +206.00ms | 75.8% → 72.0% |    3.96s → 4.17s | 3,968 → 4,174 | `zig.Ast.renderAlloc`                                | `opt/zig/lib/std/zig/Ast.zig`                    |
|  +638.7% | +198.00ms |   0.6% → 4.0% | 31.0ms → 229.0ms |      31 → 229 | `zig.Ast.Render.renderFor`                           | `opt/zig/lib/std/zig/Ast/Render.zig`             |
|   +19.2% | +189.00ms | 18.8% → 20.3% |  985.0ms → 1.17s |   985 → 1,174 | `zig.Ast.Render.renderParamList`                     | `opt/zig/lib/std/zig/Ast/Render.zig`             |

##### Native

|  Change |     Delta |            % |          Time |       Samples | Function  | Location                              |
| ------: | --------: | -----------: | ------------: | ------------: | --------- | ------------------------------------- |
|  +10.7% | +559.00ms |       100.0% | 5.23s → 5.79s | 5,237 → 5,796 | `0x27743` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  +10.7% | +559.00ms |       100.0% | 5.23s → 5.79s | 5,237 → 5,796 | `0x27817` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |  +39.00ms |  0.0% → 0.7% |  0ms → 39.0ms |        0 → 39 | `0xe3e00` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |  +27.00ms |  0.0% → 0.5% |  0ms → 27.0ms |        0 → 27 | `0x92f67` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +4.00ms |  0.0% → 0.1% |   0ms → 4.0ms |         0 → 4 | `0xdd2b4` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +3.00ms |  0.0% → 0.1% |   0ms → 3.0ms |         0 → 3 | `0x929c4` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +3.00ms |  0.0% → 0.1% |   0ms → 3.0ms |         0 → 3 | `0x91d0c` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +3.00ms |  0.0% → 0.1% |   0ms → 3.0ms |         0 → 3 | `0x91bfb` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +2.00ms | 0.0% → <0.1% |   0ms → 2.0ms |         0 → 2 | `0x91b93` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  +16.7% |   +1.00ms |         0.1% | 6.0ms → 7.0ms |         6 → 7 | `0xde3c8` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| +100.0% |   +1.00ms |        <0.1% | 1.0ms → 2.0ms |         1 → 2 | `0x90817` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| +100.0% |   +1.00ms |        <0.1% | 1.0ms → 2.0ms |         1 → 2 | `0x9189b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `0xe7e0c` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `0x92274` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `0x91c70` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `0x92240` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `0x8fd10` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `0x8ff24` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `0x8ffd0` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `0x90e1c` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |     Delta |             % |              Time |       Samples | Function                                                                                  | Location                               |
| ------: | --------: | ------------: | ----------------: | ------------: | ----------------------------------------------------------------------------------------- | -------------------------------------- |
| removed |   -5.237s | 100.0% → 0.0% |       5.23s → 0ms |     5,237 → 0 | `main`                                                                                    | `opt/zig/lib/std/start.zig`            |
|  -90.0% | -189.00ms |   4.0% → 0.4% |  210.0ms → 21.0ms |      210 → 21 | `zig.Ast.Render.renderBuiltinCall`                                                        | `opt/zig/lib/std/zig/Ast/Render.zig`   |
| removed | -149.00ms |   2.8% → 0.0% |     149.0ms → 0ms |       149 → 0 | `array_list.Aligned(u8,null).ensureUnusedCapacity`                                        | `opt/zig/lib/std/array_list.zig`       |
|  -31.7% | -139.00ms |   8.4% → 5.2% | 439.0ms → 300.0ms |     439 → 300 | `zig.Ast.Render.AutoIndentingStream.writeAll`                                             | `opt/zig/lib/std/zig/Ast/Render.zig`   |
|  -83.6% | -127.00ms |   2.9% → 0.4% |  152.0ms → 25.0ms |      152 → 25 | `Io.Writer.Allocating.drain`                                                              | `opt/zig/lib/std/Io/Writer.zig`        |
|  -88.6% | -117.00ms |   2.5% → 0.3% |  132.0ms → 15.0ms |      132 → 15 | `0x9d200`                                                                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`  |
|   -6.5% | -110.00ms | 32.3% → 27.2% |     1.68s → 1.57s | 1,689 → 1,579 | `zig.Ast.Render.renderToken`                                                              | `opt/zig/lib/std/zig/Ast/Render.zig`   |
|  -59.1% | -107.00ms |   3.5% → 1.3% |  181.0ms → 74.0ms |      181 → 74 | `Io.Writer.write`                                                                         | `opt/zig/lib/std/Io/Writer.zig`        |
|  -41.6% |  -97.00ms |   4.4% → 2.3% | 233.0ms → 136.0ms |     233 → 136 | `Io.Writer.writeAll`                                                                      | `opt/zig/lib/std/Io/Writer.zig`        |
|  -42.9% |  -93.00ms |   4.1% → 2.1% | 217.0ms → 124.0ms |     217 → 124 | `zig.Ast.firstToken`                                                                      | `opt/zig/lib/std/zig/Ast.zig`          |
| removed |  -86.00ms |   1.6% → 0.0% |      86.0ms → 0ms |        86 → 0 | `mem.indexOfPos__anon_23640`                                                              | `opt/zig/lib/std/mem.zig`              |
| removed |  -84.00ms |   1.6% → 0.0% |      84.0ms → 0ms |        84 → 0 | `mem.indexOf__anon_18425`                                                                 | `opt/zig/lib/std/mem.zig`              |
| removed |  -79.00ms |   1.5% → 0.0% |      79.0ms → 0ms |        79 → 0 | `mem.indexOfScalarPos__anon_8996`                                                         | `opt/zig/lib/std/mem.zig`              |
| removed |  -77.00ms |   1.5% → 0.0% |      77.0ms → 0ms |        77 → 0 | `mem.indexOfPosLinear__anon_26200`                                                        | `opt/zig/lib/std/mem.zig`              |
| removed |  -76.00ms |   1.5% → 0.0% |      76.0ms → 0ms |        76 → 0 | `mem.indexOfScalar__anon_5905`                                                            | `opt/zig/lib/std/mem.zig`              |
| removed |  -69.00ms |   1.3% → 0.0% |      69.0ms → 0ms |        69 → 0 | `0x9e670`                                                                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`  |
|  -96.7% |  -59.00ms |  1.2% → <0.1% |    61.0ms → 2.0ms |        61 → 2 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32303`                   | `opt/zig/lib/std/multi_array_list.zig` |
|  -25.0% |  -58.00ms |   4.4% → 3.0% | 232.0ms → 174.0ms |     232 → 174 | `zig.Ast.Render.renderExtraNewline`                                                       | `opt/zig/lib/std/zig/Ast/Render.zig`   |
| removed |  -58.00ms |   1.1% → 0.0% |      58.0ms → 0ms |        58 → 0 | `zig.Ast.Render.rowSize`                                                                  | `opt/zig/lib/std/zig/Ast/Render.zig`   |
|  -64.0% |  -55.00ms |   1.6% → 0.5% |   86.0ms → 31.0ms |       86 → 31 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).Slice.items__anon_27682` | `opt/zig/lib/std/multi_array_list.zig` |

##### Standard library

|  Change |     Delta |             % |              Time |       Samples | Function                                                                                  | Location                               |
| ------: | --------: | ------------: | ----------------: | ------------: | ----------------------------------------------------------------------------------------- | -------------------------------------- |
| removed |   -5.237s | 100.0% → 0.0% |       5.23s → 0ms |     5,237 → 0 | `main`                                                                                    | `opt/zig/lib/std/start.zig`            |
|  -90.0% | -189.00ms |   4.0% → 0.4% |  210.0ms → 21.0ms |      210 → 21 | `zig.Ast.Render.renderBuiltinCall`                                                        | `opt/zig/lib/std/zig/Ast/Render.zig`   |
| removed | -149.00ms |   2.8% → 0.0% |     149.0ms → 0ms |       149 → 0 | `array_list.Aligned(u8,null).ensureUnusedCapacity`                                        | `opt/zig/lib/std/array_list.zig`       |
|  -31.7% | -139.00ms |   8.4% → 5.2% | 439.0ms → 300.0ms |     439 → 300 | `zig.Ast.Render.AutoIndentingStream.writeAll`                                             | `opt/zig/lib/std/zig/Ast/Render.zig`   |
|  -83.6% | -127.00ms |   2.9% → 0.4% |  152.0ms → 25.0ms |      152 → 25 | `Io.Writer.Allocating.drain`                                                              | `opt/zig/lib/std/Io/Writer.zig`        |
|   -6.5% | -110.00ms | 32.3% → 27.2% |     1.68s → 1.57s | 1,689 → 1,579 | `zig.Ast.Render.renderToken`                                                              | `opt/zig/lib/std/zig/Ast/Render.zig`   |
|  -59.1% | -107.00ms |   3.5% → 1.3% |  181.0ms → 74.0ms |      181 → 74 | `Io.Writer.write`                                                                         | `opt/zig/lib/std/Io/Writer.zig`        |
|  -41.6% |  -97.00ms |   4.4% → 2.3% | 233.0ms → 136.0ms |     233 → 136 | `Io.Writer.writeAll`                                                                      | `opt/zig/lib/std/Io/Writer.zig`        |
|  -42.9% |  -93.00ms |   4.1% → 2.1% | 217.0ms → 124.0ms |     217 → 124 | `zig.Ast.firstToken`                                                                      | `opt/zig/lib/std/zig/Ast.zig`          |
| removed |  -86.00ms |   1.6% → 0.0% |      86.0ms → 0ms |        86 → 0 | `mem.indexOfPos__anon_23640`                                                              | `opt/zig/lib/std/mem.zig`              |
| removed |  -84.00ms |   1.6% → 0.0% |      84.0ms → 0ms |        84 → 0 | `mem.indexOf__anon_18425`                                                                 | `opt/zig/lib/std/mem.zig`              |
| removed |  -79.00ms |   1.5% → 0.0% |      79.0ms → 0ms |        79 → 0 | `mem.indexOfScalarPos__anon_8996`                                                         | `opt/zig/lib/std/mem.zig`              |
| removed |  -77.00ms |   1.5% → 0.0% |      77.0ms → 0ms |        77 → 0 | `mem.indexOfPosLinear__anon_26200`                                                        | `opt/zig/lib/std/mem.zig`              |
| removed |  -76.00ms |   1.5% → 0.0% |      76.0ms → 0ms |        76 → 0 | `mem.indexOfScalar__anon_5905`                                                            | `opt/zig/lib/std/mem.zig`              |
|  -96.7% |  -59.00ms |  1.2% → <0.1% |    61.0ms → 2.0ms |        61 → 2 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32303`                   | `opt/zig/lib/std/multi_array_list.zig` |
|  -25.0% |  -58.00ms |   4.4% → 3.0% | 232.0ms → 174.0ms |     232 → 174 | `zig.Ast.Render.renderExtraNewline`                                                       | `opt/zig/lib/std/zig/Ast/Render.zig`   |
| removed |  -58.00ms |   1.1% → 0.0% |      58.0ms → 0ms |        58 → 0 | `zig.Ast.Render.rowSize`                                                                  | `opt/zig/lib/std/zig/Ast/Render.zig`   |
|  -64.0% |  -55.00ms |   1.6% → 0.5% |   86.0ms → 31.0ms |       86 → 31 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).Slice.items__anon_27682` | `opt/zig/lib/std/multi_array_list.zig` |
| removed |  -46.00ms |   0.9% → 0.0% |      46.0ms → 0ms |        46 → 0 | `fs.Dir.readFileAllocOptions__anon_2384`                                                  | `opt/zig/lib/std/fs/Dir.zig`           |
|  -39.6% |  -44.00ms |   2.1% → 1.2% |  111.0ms → 67.0ms |      111 → 67 | `zig.Ast.nodeTag`                                                                         | `opt/zig/lib/std/zig/Ast.zig`          |

##### Native

|  Change |     Delta |            % |             Time |  Samples | Function  | Location                              |
| ------: | --------: | -----------: | ---------------: | -------: | --------- | ------------------------------------- |
|  -88.6% | -117.00ms |  2.5% → 0.3% | 132.0ms → 15.0ms | 132 → 15 | `0x9d200` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -69.00ms |  1.3% → 0.0% |     69.0ms → 0ms |   69 → 0 | `0x9e670` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -19.00ms |  0.4% → 0.0% |     19.0ms → 0ms |   19 → 0 | `0x9e674` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -19.00ms |  0.4% → 0.0% |     19.0ms → 0ms |   19 → 0 | `0xddb88` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -11.00ms |  0.2% → 0.0% |     11.0ms → 0ms |   11 → 0 | `0x9d11c` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -11.00ms |  0.2% → 0.0% |     11.0ms → 0ms |   11 → 0 | `0x9d100` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -10.00ms |  0.2% → 0.0% |     10.0ms → 0ms |   10 → 0 | `0x9d184` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -9.00ms |  0.2% → 0.0% |      9.0ms → 0ms |    9 → 0 | `0x9d138` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -41.2% |   -7.00ms |  0.3% → 0.2% |  17.0ms → 10.0ms |  17 → 10 | `0x92a9b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -7.00ms |  0.1% → 0.0% |      7.0ms → 0ms |    7 → 0 | `0x9d168` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -6.00ms |  0.1% → 0.0% |      6.0ms → 0ms |    6 → 0 | `0x9405b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -5.00ms |  0.1% → 0.0% |      5.0ms → 0ms |    5 → 0 | `0x9d150` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -26.3% |   -5.00ms |  0.4% → 0.2% |  19.0ms → 14.0ms |  19 → 14 | `0xdda44` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -4.00ms |  0.1% → 0.0% |      4.0ms → 0ms |    4 → 0 | `0x9e5c0` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -4.00ms |  0.1% → 0.0% |      4.0ms → 0ms |    4 → 0 | `0x9e580` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -4.00ms |  0.1% → 0.0% |      4.0ms → 0ms |    4 → 0 | `0x9d114` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -30.8% |   -4.00ms |         0.2% |   13.0ms → 9.0ms |   13 → 9 | `0x8fa47` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -30.8% |   -4.00ms |         0.2% |   13.0ms → 9.0ms |   13 → 9 | `0x9023f` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -75.0% |   -3.00ms | 0.1% → <0.1% |    4.0ms → 1.0ms |    4 → 1 | `0x9245b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -3.00ms |  0.1% → 0.0% |      3.0ms → 0ms |    3 → 0 | `0x9e584` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
