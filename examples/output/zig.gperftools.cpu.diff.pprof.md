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

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `memset` (`opt/zig/lib/compiler_rt.zig`)

| Change |     Delta |            % |          Time | Samples | Location                          |
| -----: | --------: | -----------: | ------------: | ------: | --------------------------------- |
|    new | +305.00ms | 0.0% → 86.9% | 0ms → 305.0ms | 0 → 305 | `opt/zig/lib/compiler_rt.zig:686` |
|    new |  +24.00ms |  0.0% → 6.8% |  0ms → 24.0ms |  0 → 24 | `opt/zig/lib/compiler_rt.zig:684` |
|    new |   +6.00ms |  0.0% → 1.7% |   0ms → 6.0ms |   0 → 6 | `opt/zig/lib/compiler_rt.zig:685` |

##### `mem.findScalarPos__anon_6382` (`opt/zig/lib/std/mem.zig`)

| Change |    Delta |            % |         Time | Samples | Location                       |
| -----: | -------: | -----------: | -----------: | ------: | ------------------------------ |
|    new | +36.00ms | 0.0% → 32.1% | 0ms → 36.0ms |  0 → 36 | `opt/zig/lib/std/mem.zig:1297` |
|    new | +19.00ms | 0.0% → 17.0% | 0ms → 19.0ms |  0 → 19 | `opt/zig/lib/std/mem.zig:1285` |
|    new |  +9.00ms |  0.0% → 8.0% |  0ms → 9.0ms |   0 → 9 | `opt/zig/lib/std/mem.zig:1299` |
|    new |  +8.00ms |  0.0% → 7.1% |  0ms → 8.0ms |   0 → 8 | `opt/zig/lib/std/mem.zig:1263` |
|    new |  +7.00ms |  0.0% → 6.3% |  0ms → 7.0ms |   0 → 7 | `opt/zig/lib/std/mem.zig:1284` |

##### `zig.tokenizer.Tokenizer.next` (`opt/zig/lib/std/zig/tokenizer.zig`)

|  Change |     Delta |             % |              Time |   Samples | Location                                |
| ------: | --------: | ------------: | ----------------: | --------: | --------------------------------------- |
| removed | -262.00ms |  22.3% → 0.0% |     262.0ms → 0ms |   262 → 0 | `opt/zig/lib/std/zig/tokenizer.zig:665` |
|     new | +212.00ms |  0.0% → 16.7% |     0ms → 212.0ms |   0 → 212 | `opt/zig/lib/std/zig/tokenizer.zig:667` |
|     new |  +75.00ms |   0.0% → 5.9% |      0ms → 75.0ms |    0 → 75 | `opt/zig/lib/std/zig/tokenizer.zig:695` |
|  -71.6% |  -48.00ms |   5.7% → 1.5% |   67.0ms → 19.0ms |   67 → 19 | `opt/zig/lib/std/zig/tokenizer.zig:694` |
|  +17.7% |  +42.00ms | 20.2% → 22.0% | 237.0ms → 279.0ms | 237 → 279 | `opt/zig/lib/std/zig/tokenizer.zig:666` |

##### `zig.Ast.Render.renderExpression` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|   Change |    Delta |             % |            Time | Samples | Location                                 |
| -------: | -------: | ------------: | --------------: | ------: | ---------------------------------------- |
| +1133.3% | +34.00ms |  2.6% → 19.2% |  3.0ms → 37.0ms |  3 → 37 | `opt/zig/lib/std/zig/Ast/Render.zig:317` |
|   -29.4% | -10.00ms | 29.1% → 12.4% | 34.0ms → 24.0ms | 34 → 24 | `opt/zig/lib/std/zig/Ast/Render.zig:315` |
|  removed | -10.00ms |   8.5% → 0.0% |    10.0ms → 0ms |  10 → 0 | `opt/zig/lib/std/zig/Ast/Render.zig:432` |
|  +160.0% |  +8.00ms |   4.3% → 6.7% |  5.0ms → 13.0ms |  5 → 13 | `opt/zig/lib/std/zig/Ast/Render.zig:314` |
|      new |  +7.00ms |   0.0% → 3.6% |     0ms → 7.0ms |   0 → 7 | `opt/zig/lib/std/zig/Ast/Render.zig:447` |

##### `zig.Ast.Render.renderComments` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|  Change |    Delta |            % |         Time | Samples | Location                                  |
| ------: | -------: | -----------: | -----------: | ------: | ----------------------------------------- |
|     new | +74.00ms | 0.0% → 37.8% | 0ms → 74.0ms |  0 → 74 | `opt/zig/lib/std/zig/Ast/Render.zig:3016` |
| removed | -39.00ms | 29.1% → 0.0% | 39.0ms → 0ms |  39 → 0 | `opt/zig/lib/std/zig/Ast/Render.zig:3117` |
|     new | +39.00ms | 0.0% → 19.9% | 0ms → 39.0ms |  0 → 39 | `opt/zig/lib/std/zig/Ast/Render.zig:3072` |
| removed | -17.00ms | 12.7% → 0.0% | 17.0ms → 0ms |  17 → 0 | `opt/zig/lib/std/zig/Ast/Render.zig:3172` |
| removed |  -3.00ms |  2.2% → 0.0% |  3.0ms → 0ms |   3 → 0 | `opt/zig/lib/std/zig/Ast/Render.zig:3165` |

##### `zig.Ast.Render.tokenSliceForRender` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|  Change |    Delta |             % |              Time |   Samples | Location                                         |
| ------: | -------: | ------------: | ----------------: | --------: | ------------------------------------------------ |
|     new | +28.00ms |  0.0% → 11.0% |      0ms → 28.0ms |    0 → 28 | `opt/zig/lib/std/zig/Ast/Render.zig:3169`        |
| +200.0% | +22.00ms |  5.5% → 13.0% |   11.0ms → 33.0ms |   11 → 33 | `opt/zig/lib/std/zig/Ast/Render.zig:3276 → 3176` |
|   +3.2% |  +5.00ms | 78.9% → 63.8% | 157.0ms → 162.0ms | 157 → 162 | `opt/zig/lib/std/zig/Ast/Render.zig:3268 → 3168` |

##### `zig.Ast.lastToken` (`opt/zig/lib/std/zig/Ast.zig`)

|  Change |    Delta |            % |         Time | Samples | Location                          |
| ------: | -------: | -----------: | -----------: | ------: | --------------------------------- |
|     new | +37.00ms | 0.0% → 49.3% | 0ms → 37.0ms |  0 → 37 | `opt/zig/lib/std/zig/Ast.zig:881` |
| removed | -10.00ms | 31.3% → 0.0% | 10.0ms → 0ms |  10 → 0 | `opt/zig/lib/std/zig/Ast.zig:874` |
|     new |  +9.00ms | 0.0% → 12.0% |  0ms → 9.0ms |   0 → 9 | `opt/zig/lib/std/zig/Ast.zig:884` |
| removed |  -6.00ms | 18.8% → 0.0% |  6.0ms → 0ms |   6 → 0 | `opt/zig/lib/std/zig/Ast.zig:877` |

##### `zig.Ast.nodeMainToken` (`opt/zig/lib/std/zig/Ast.zig`)

|  Change |    Delta |              % |            Time | Samples | Location                          |
| ------: | -------: | -------------: | --------------: | ------: | --------------------------------- |
| +231.3% | +37.00ms | 100.0% → 98.1% | 16.0ms → 53.0ms | 16 → 53 | `opt/zig/lib/std/zig/Ast.zig:101` |

##### `compiler_rt.memcpy.copyLessThan16` (`opt/zig/lib/compiler_rt/memcpy.zig`)

| Change |    Delta |            % |         Time | Samples | Location                                |
| -----: | -------: | -----------: | -----------: | ------: | --------------------------------------- |
|    new | +18.00ms | 0.0% → 54.5% | 0ms → 18.0ms |  0 → 18 | `opt/zig/lib/compiler_rt/memcpy.zig:77` |
|    new |  +7.00ms | 0.0% → 21.2% |  0ms → 7.0ms |   0 → 7 | `opt/zig/lib/compiler_rt/memcpy.zig:73` |
|    new |  +6.00ms | 0.0% → 18.2% |  0ms → 6.0ms |   0 → 6 | `opt/zig/lib/compiler_rt/memcpy.zig:74` |
|    new |  +2.00ms |  0.0% → 6.1% |  0ms → 2.0ms |   0 → 2 | `opt/zig/lib/compiler_rt/memcpy.zig:75` |

##### `zig.Parse.addNode` (`opt/zig/lib/std/zig/Parse.zig`)

|  Change |   Delta |             % |          Time | Samples | Location                           |
| ------: | ------: | ------------: | ------------: | ------: | ---------------------------------- |
|     new | +5.00ms |  0.0% → 13.9% |   0ms → 5.0ms |   0 → 5 | `opt/zig/lib/std/zig/Parse.zig:63` |
| +150.0% | +3.00ms | 40.0% → 13.9% | 2.0ms → 5.0ms |   2 → 5 | `opt/zig/lib/std/zig/Parse.zig:64` |
|     new | +2.00ms |   0.0% → 5.6% |   0ms → 2.0ms |   0 → 2 | `opt/zig/lib/std/zig/Parse.zig:65` |

##### `zig.Ast.Render.renderSpace` (`opt/zig/lib/std/zig/Ast/Render.zig`)

| Change |    Delta |             % |            Time | Samples | Location                                         |
| -----: | -------: | ------------: | --------------: | ------: | ------------------------------------------------ |
| +55.0% | +11.00ms | 14.2% → 18.1% | 20.0ms → 31.0ms | 20 → 31 | `opt/zig/lib/std/zig/Ast/Render.zig:2875 → 2751` |
| +88.9% |  +8.00ms |   6.4% → 9.9% |  9.0ms → 17.0ms |  9 → 17 | `opt/zig/lib/std/zig/Ast/Render.zig:2866 → 2742` |
| +44.4% |  +4.00ms |   6.4% → 7.6% |  9.0ms → 13.0ms |  9 → 13 | `opt/zig/lib/std/zig/Ast/Render.zig:2863 → 2739` |
| +14.3% |  +4.00ms | 19.9% → 18.7% | 28.0ms → 32.0ms | 28 → 32 | `opt/zig/lib/std/zig/Ast/Render.zig:2880 → 2756` |
| -12.5% |  -2.00ms |  11.3% → 8.2% | 16.0ms → 14.0ms | 16 → 14 | `opt/zig/lib/std/zig/Ast/Render.zig:2868 → 2744` |

##### `mem.findPosLinear__anon_31435` (`opt/zig/lib/std/mem.zig`)

| Change |    Delta |            % |         Time | Samples | Location                       |
| -----: | -------: | -----------: | -----------: | ------: | ------------------------------ |
|    new | +25.00ms | 0.0% → 89.3% | 0ms → 25.0ms |  0 → 25 | `opt/zig/lib/std/mem.zig:1447` |
|    new |  +3.00ms | 0.0% → 10.7% |  0ms → 3.0ms |   0 → 3 | `opt/zig/lib/std/mem.zig:1448` |

##### `zig.Ast.nodeData` (`opt/zig/lib/std/zig/Ast.zig`)

|  Change |    Delta |      % |           Time | Samples | Location                          |
| ------: | -------: | -----: | -------------: | ------: | --------------------------------- |
| +525.0% | +21.00ms | 100.0% | 4.0ms → 25.0ms |  4 → 25 | `opt/zig/lib/std/zig/Ast.zig:105` |

##### `zig.Ast.Render.hasComment` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|  Change |    Delta |             % |           Time | Samples | Location                                         |
| ------: | -------: | ------------: | -------------: | ------: | ------------------------------------------------ |
| +466.7% | +14.00ms | 15.8% → 42.5% | 3.0ms → 17.0ms |  3 → 17 | `opt/zig/lib/std/zig/Ast/Render.zig:3093 → 2981` |
| +100.0% |  +2.00ms | 10.5% → 10.0% |  2.0ms → 4.0ms |   2 → 4 | `opt/zig/lib/std/zig/Ast/Render.zig:3094 → 2982` |
| removed |  -1.00ms |   5.3% → 0.0% |    1.0ms → 0ms |   1 → 0 | `opt/zig/lib/std/zig/Ast/Render.zig:3089`        |
| removed |  -1.00ms |   5.3% → 0.0% |    1.0ms → 0ms |   1 → 0 | `opt/zig/lib/std/zig/Ast/Render.zig:3092`        |
|     new |  +1.00ms |   0.0% → 2.5% |    0ms → 1.0ms |   0 → 1 | `opt/zig/lib/std/zig/Ast/Render.zig:2978`        |

##### `zig.Ast.Render.renderExpressionComma` (`opt/zig/lib/std/zig/Ast/Render.zig`)

| Change |    Delta |            % |         Time | Samples | Location                                  |
| -----: | -------: | -----------: | -----------: | ------: | ----------------------------------------- |
|    new | +16.00ms | 0.0% → 80.0% | 0ms → 16.0ms |  0 → 16 | `opt/zig/lib/std/zig/Ast/Render.zig:2662` |
|    new |  +2.00ms | 0.0% → 10.0% |  0ms → 2.0ms |   0 → 2 | `opt/zig/lib/std/zig/Ast/Render.zig:2656` |
|    new |  +1.00ms |  0.0% → 5.0% |  0ms → 1.0ms |   0 → 1 | `opt/zig/lib/std/zig/Ast/Render.zig:2657` |

##### `zig.Ast.parse` (`opt/zig/lib/std/zig/Ast.zig`)

|  Change |    Delta |             % |            Time | Samples | Location                          |
| ------: | -------: | ------------: | --------------: | ------: | --------------------------------- |
| +850.0% | +17.00ms | 12.5% → 55.9% |  2.0ms → 19.0ms |  2 → 19 | `opt/zig/lib/std/zig/Ast.zig:155` |
|  -21.4% |  -3.00ms | 87.5% → 32.4% | 14.0ms → 11.0ms | 14 → 11 | `opt/zig/lib/std/zig/Ast.zig:158` |

##### `zig.Ast.Render.AutoIndentingStream.currentIndent` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|  Change |    Delta |            % |         Time | Samples | Location                                  |
| ------: | -------: | -----------: | -----------: | ------: | ----------------------------------------- |
|     new | +30.00ms | 0.0% → 73.2% | 0ms → 30.0ms |  0 → 30 | `opt/zig/lib/std/zig/Ast/Render.zig:3528` |
| removed | -21.00ms | 91.3% → 0.0% | 21.0ms → 0ms |  21 → 0 | `opt/zig/lib/std/zig/Ast/Render.zig:3683` |
|     new | +11.00ms | 0.0% → 26.8% | 0ms → 11.0ms |  0 → 11 | `opt/zig/lib/std/zig/Ast/Render.zig:3529` |
| removed |  -2.00ms |  8.7% → 0.0% |  2.0ms → 0ms |   2 → 0 | `opt/zig/lib/std/zig/Ast/Render.zig:3684` |

##### `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).Slice.items__anon_32582` (`opt/zig/lib/std/multi_array_list.zig`)

|  Change |    Delta |            % |         Time | Samples | Location                                   |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------------------------ |
|     new | +26.00ms | 0.0% → 61.9% | 0ms → 26.0ms |  0 → 26 | `opt/zig/lib/std/multi_array_list.zig:109` |
|     new | +16.00ms | 0.0% → 38.1% | 0ms → 16.0ms |  0 → 16 | `opt/zig/lib/std/multi_array_list.zig:102` |
| removed | -14.00ms | 58.3% → 0.0% | 14.0ms → 0ms |  14 → 0 | `opt/zig/lib/std/multi_array_list.zig:85`  |
| removed | -10.00ms | 41.7% → 0.0% | 10.0ms → 0ms |  10 → 0 | `opt/zig/lib/std/multi_array_list.zig:92`  |

##### `mem.findScalar__anon_6379` (`opt/zig/lib/std/mem.zig`)

| Change |    Delta |             % |         Time | Samples | Location                       |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------------ |
|    new | +18.00ms | 0.0% → 100.0% | 0ms → 18.0ms |  0 → 18 | `opt/zig/lib/std/mem.zig:1220` |

##### `mem.indexOfScalarPos__anon_8996` (`opt/zig/lib/std/mem.zig`)

|  Change |    Delta |            % |         Time | Samples | Location                       |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------------ |
| removed | -19.00ms | 24.7% → 0.0% | 19.0ms → 0ms |  19 → 0 | `opt/zig/lib/std/mem.zig:1314` |
| removed |  -7.00ms |  9.1% → 0.0% |  7.0ms → 0ms |   7 → 0 | `opt/zig/lib/std/mem.zig:1289` |
| removed |  -7.00ms |  9.1% → 0.0% |  7.0ms → 0ms |   7 → 0 | `opt/zig/lib/std/mem.zig:1301` |
| removed |  -7.00ms |  9.1% → 0.0% |  7.0ms → 0ms |   7 → 0 | `opt/zig/lib/std/mem.zig:1302` |
| removed |  -3.00ms |  3.9% → 0.0% |  3.0ms → 0ms |   3 → 0 | `opt/zig/lib/std/mem.zig:1281` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32303` (`opt/zig/lib/std/multi_array_list.zig`)

|  Change |    Delta |             % |         Time | Samples | Location                                   |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------ |
| removed | -61.00ms | 100.0% → 0.0% | 61.0ms → 0ms |  61 → 0 | `opt/zig/lib/std/multi_array_list.zig:85`  |
|     new |  +2.00ms | 0.0% → 100.0% |  0ms → 2.0ms |   0 → 2 | `opt/zig/lib/std/multi_array_list.zig:102` |

##### `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).Slice.items__anon_27682` (`opt/zig/lib/std/multi_array_list.zig`)

|  Change |    Delta |             % |         Time | Samples | Location                                   |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------ |
| removed | -69.00ms |  80.2% → 0.0% | 69.0ms → 0ms |  69 → 0 | `opt/zig/lib/std/multi_array_list.zig:85`  |
|     new | +31.00ms | 0.0% → 100.0% | 0ms → 31.0ms |  0 → 31 | `opt/zig/lib/std/multi_array_list.zig:102` |
| removed | -16.00ms |  18.6% → 0.0% | 16.0ms → 0ms |  16 → 0 | `opt/zig/lib/std/multi_array_list.zig:88`  |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_32262` (`opt/zig/lib/std/multi_array_list.zig`)

|  Change |    Delta |            % |         Time | Samples | Location                                   |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------------------------ |
| removed | -94.00ms | 72.9% → 0.0% | 94.0ms → 0ms |  94 → 0 | `opt/zig/lib/std/multi_array_list.zig:85`  |
|     new | +83.00ms | 0.0% → 96.5% | 0ms → 83.0ms |  0 → 83 | `opt/zig/lib/std/multi_array_list.zig:102` |
| removed | -26.00ms | 20.2% → 0.0% | 26.0ms → 0ms |  26 → 0 | `opt/zig/lib/std/multi_array_list.zig:88`  |
| removed |  -9.00ms |  7.0% → 0.0% |  9.0ms → 0ms |   9 → 0 | `opt/zig/lib/std/multi_array_list.zig:93`  |
|     new |  +3.00ms |  0.0% → 3.5% |  0ms → 3.0ms |   0 → 3 | `opt/zig/lib/std/multi_array_list.zig:109` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_28815` (`opt/zig/lib/std/multi_array_list.zig`)

|  Change |     Delta |             % |          Time | Samples | Location                                   |
| ------: | --------: | ------------: | ------------: | ------: | ------------------------------------------ |
| removed | -130.00ms |  91.5% → 0.0% | 130.0ms → 0ms | 130 → 0 | `opt/zig/lib/std/multi_array_list.zig:85`  |
|     new | +112.00ms | 0.0% → 100.0% | 0ms → 112.0ms | 0 → 112 | `opt/zig/lib/std/multi_array_list.zig:102` |
| removed |   -8.00ms |   5.6% → 0.0% |   8.0ms → 0ms |   8 → 0 | `opt/zig/lib/std/multi_array_list.zig:88`  |
| removed |   -3.00ms |   2.1% → 0.0% |   3.0ms → 0ms |   3 → 0 | `opt/zig/lib/std/multi_array_list.zig:93`  |
| removed |   -1.00ms |   0.7% → 0.0% |   1.0ms → 0ms |   1 → 0 | `opt/zig/lib/std/multi_array_list.zig:92`  |

##### `mem.eqlBytes` (`opt/zig/lib/std/mem.zig`)

|  Change |    Delta |            % |         Time | Samples | Location                      |
| ------: | -------: | -----------: | -----------: | ------: | ----------------------------- |
| removed | -35.00ms | 56.5% → 0.0% | 35.0ms → 0ms |  35 → 0 | `opt/zig/lib/std/mem.zig:733` |
|     new | +28.00ms | 0.0% → 87.5% | 0ms → 28.0ms |  0 → 28 | `opt/zig/lib/std/mem.zig:772` |
| removed | -27.00ms | 43.5% → 0.0% | 27.0ms → 0ms |  27 → 0 | `opt/zig/lib/std/mem.zig:737` |
|     new |  +4.00ms | 0.0% → 12.5% |  0ms → 4.0ms |   0 → 4 | `opt/zig/lib/std/mem.zig:776` |

##### `mem.indexOfPosLinear__anon_26200` (`opt/zig/lib/std/mem.zig`)

|  Change |    Delta |            % |         Time | Samples | Location                       |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------------ |
| removed | -19.00ms | 90.5% → 0.0% | 19.0ms → 0ms |  19 → 0 | `opt/zig/lib/std/mem.zig:1430` |
| removed |  -2.00ms |  9.5% → 0.0% |  2.0ms → 0ms |   2 → 0 | `opt/zig/lib/std/mem.zig:1431` |

##### `static_string_map.StaticStringMapWithEql(zig.tokenizer.Token.Tag,(function 'defaultEql')).getIndex` (`opt/zig/lib/std/static_string_map.zig`)

|  Change |    Delta |             % |              Time |   Samples | Location                                    |
| ------: | -------: | ------------: | ----------------: | --------: | ------------------------------------------- |
|  -19.7% | -26.00ms | 53.0% → 46.3% | 132.0ms → 106.0ms | 132 → 106 | `opt/zig/lib/std/static_string_map.zig:213` |
|  +10.2% | +10.00ms | 39.4% → 47.2% |  98.0ms → 108.0ms |  98 → 108 | `opt/zig/lib/std/static_string_map.zig:208` |
| removed |  -1.00ms |   0.4% → 0.0% |       1.0ms → 0ms |     1 → 0 | `opt/zig/lib/std/static_string_map.zig:206` |
|  -50.0% |  -1.00ms |   0.8% → 0.4% |     2.0ms → 1.0ms |     2 → 1 | `opt/zig/lib/std/static_string_map.zig:209` |
|  -33.3% |  -1.00ms |   1.2% → 0.9% |     3.0ms → 2.0ms |     3 → 2 | `opt/zig/lib/std/static_string_map.zig:214` |

##### `zig.Parse.parsePrimaryTypeExpr` (`opt/zig/lib/std/zig/Parse.zig`)

|  Change |   Delta |            % |          Time | Samples | Location                                    |
| ------: | ------: | -----------: | ------------: | ------: | ------------------------------------------- |
| removed | -7.00ms | 17.1% → 0.0% |   7.0ms → 0ms |   7 → 0 | `opt/zig/lib/std/zig/Parse.zig:2445`        |
|  -60.0% | -3.00ms | 12.2% → 9.5% | 5.0ms → 2.0ms |   5 → 2 | `opt/zig/lib/std/zig/Parse.zig:2547 → 2562` |
| removed | -3.00ms |  7.3% → 0.0% |   3.0ms → 0ms |   3 → 0 | `opt/zig/lib/std/zig/Parse.zig:2564`        |
|     new | +3.00ms | 0.0% → 14.3% |   0ms → 3.0ms |   0 → 3 | `opt/zig/lib/std/zig/Parse.zig:2467`        |
| +200.0% | +2.00ms | 2.4% → 14.3% | 1.0ms → 3.0ms |   1 → 3 | `opt/zig/lib/std/zig/Parse.zig:2513 → 2528` |

##### `zig.Ast.Render.AutoIndentingStream.writeAll` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|  Change |   Delta |             % |           Time | Samples | Location                                         |
| ------: | ------: | ------------: | -------------: | ------: | ------------------------------------------------ |
|  -50.0% | -8.00ms | 29.1% → 20.5% | 16.0ms → 8.0ms |  16 → 8 | `opt/zig/lib/std/zig/Ast/Render.zig:3499 → 3356` |
|  -61.5% | -8.00ms | 23.6% → 12.8% | 13.0ms → 5.0ms |  13 → 5 | `opt/zig/lib/std/zig/Ast/Render.zig:3500 → 3357` |
|  -46.2% | -6.00ms | 23.6% → 17.9% | 13.0ms → 7.0ms |  13 → 7 | `opt/zig/lib/std/zig/Ast/Render.zig:3496 → 3353` |
| removed | -1.00ms |   1.8% → 0.0% |    1.0ms → 0ms |   1 → 0 | `opt/zig/lib/std/zig/Ast/Render.zig:3497`        |

##### `zig.Ast.Render.renderToken` (`opt/zig/lib/std/zig/Ast/Render.zig`)

|  Change |    Delta |            % |           Time | Samples | Location                                         |
| ------: | -------: | -----------: | -------------: | ------: | ------------------------------------------------ |
| removed | -29.00ms | 50.0% → 0.0% |   29.0ms → 0ms |  29 → 0 | `opt/zig/lib/std/zig/Ast/Render.zig:2845`        |
| +700.0% | +21.00ms | 5.2% → 55.8% | 3.0ms → 24.0ms |  3 → 24 | `opt/zig/lib/std/zig/Ast/Render.zig:2844 → 2721` |
| removed |  -7.00ms | 12.1% → 0.0% |    7.0ms → 0ms |   7 → 0 | `opt/zig/lib/std/zig/Ast/Render.zig:2849`        |
| +200.0% |  +2.00ms |  1.7% → 7.0% |  1.0ms → 3.0ms |   1 → 3 | `opt/zig/lib/std/zig/Ast/Render.zig:2846 → 2723` |

##### `zig.Parse.parseSuffixExpr` (`opt/zig/lib/std/zig/Parse.zig`)

|  Change |    Delta |             % |           Time | Samples | Location                                    |
| ------: | -------: | ------------: | -------------: | ------: | ------------------------------------------- |
|  -90.9% | -10.00ms | 52.4% → 12.5% | 11.0ms → 1.0ms |  11 → 1 | `opt/zig/lib/std/zig/Parse.zig:2356 → 2385` |
|     new |  +2.00ms |  0.0% → 25.0% |    0ms → 2.0ms |   0 → 2 | `opt/zig/lib/std/zig/Parse.zig:2407`        |
| removed |  -1.00ms |   4.8% → 0.0% |    1.0ms → 0ms |   1 → 0 | `opt/zig/lib/std/zig/Parse.zig:2364`        |
|  -50.0% |  -1.00ms |  9.5% → 12.5% |  2.0ms → 1.0ms |   2 → 1 | `opt/zig/lib/std/zig/Parse.zig:2371 → 2400` |
| removed |  -1.00ms |   4.8% → 0.0% |    1.0ms → 0ms |   1 → 0 | `opt/zig/lib/std/zig/Parse.zig:2397`        |

##### `os.linux.errnoFromSyscall` (`opt/zig/lib/std/os/linux.zig`)

|  Change |    Delta |             % |         Time | Samples | Location                           |
| ------: | -------: | ------------: | -----------: | ------: | ---------------------------------- |
| removed | -12.00ms | 100.0% → 0.0% | 12.0ms → 0ms |  12 → 0 | `opt/zig/lib/std/os/linux.zig:579` |

##### `zig.Parse.eatToken` (`opt/zig/lib/std/zig/Parse.zig`)

|  Change |    Delta |             % |         Time | Samples | Location                             |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------ |
| removed | -35.00ms | 100.0% → 0.0% | 35.0ms → 0ms |  35 → 0 | `opt/zig/lib/std/zig/Parse.zig:3693` |
|     new | +27.00ms | 0.0% → 100.0% | 0ms → 27.0ms |  0 → 27 | `opt/zig/lib/std/zig/Parse.zig:3677` |

##### `zig.Ast.tokenSlice` (`opt/zig/lib/std/zig/Ast.zig`)

|    Change |     Delta |             % |            Time | Samples | Location                                |
| --------: | --------: | ------------: | --------------: | ------: | --------------------------------------- |
| +10800.0% | +108.00ms |  0.4% → 41.6% | 1.0ms → 109.0ms | 1 → 109 | `opt/zig/lib/std/zig/Ast.zig:276`       |
|    -63.4% |  -59.00ms | 34.6% → 13.0% | 93.0ms → 34.0ms | 93 → 34 | `opt/zig/lib/std/zig/Ast.zig:265 → 277` |
|   removed |  -32.00ms |  11.9% → 0.0% |    32.0ms → 0ms |  32 → 0 | `opt/zig/lib/std/zig/Ast.zig:266`       |
|    -78.9% |  -30.00ms |  14.1% → 3.1% |  38.0ms → 8.0ms |  38 → 8 | `opt/zig/lib/std/zig/Ast.zig:280`       |
|       new |  +18.00ms |   0.0% → 6.9% |    0ms → 18.0ms |  0 → 18 | `opt/zig/lib/std/zig/Ast.zig:286`       |

##### `mem.indexOfPos__anon_23640` (`opt/zig/lib/std/mem.zig`)

|  Change |   Delta |            % |        Time | Samples | Location                       |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------------ |
| removed | -4.00ms | 57.1% → 0.0% | 4.0ms → 0ms |   4 → 0 | `opt/zig/lib/std/mem.zig:1514` |

##### `zig.Parse.expectExpr` (`opt/zig/lib/std/zig/Parse.zig`)

|  Change |   Delta |             % |        Time | Samples | Location                             |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------ |
| removed | -7.00ms | 100.0% → 0.0% | 7.0ms → 0ms |   7 → 0 | `opt/zig/lib/std/zig/Parse.zig:1537` |

##### `zig.Ast.fullCall` (`opt/zig/lib/std/zig/Ast.zig`)

|  Change |   Delta |             % |        Time | Samples | Location                           |
| ------: | ------: | ------------: | ----------: | ------: | ---------------------------------- |
| removed | -8.00ms |  88.9% → 0.0% | 8.0ms → 0ms |   8 → 0 | `opt/zig/lib/std/zig/Ast.zig:2503` |
|     new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `opt/zig/lib/std/zig/Ast.zig:2430` |
| removed | -1.00ms |  11.1% → 0.0% | 1.0ms → 0ms |   1 → 0 | `opt/zig/lib/std/zig/Ast.zig:2504` |

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
