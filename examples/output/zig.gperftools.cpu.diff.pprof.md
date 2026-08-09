# CPU profile diff

Took 5.82s → 6.04s (+222.00ms, +3.8%) over 5,822 samples → 6,044 samples (1.0ms per sample).

| Category         | Change |     Delta |      % |          Time |       Samples |
| ---------------- | -----: | --------: | -----: | ------------: | ------------: |
| Standard library |  +3.8% | +222.00ms | 100.0% | 5.82s → 6.04s | 5,822 → 6,044 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

##### Standard library

|  Change |    Delta |             % |              Time |       Samples | Function                                                                                  | Location                                   |
| ------: | -------: | ------------: | ----------------: | ------------: | ----------------------------------------------------------------------------------------- | ------------------------------------------ |
|   +3.1% | +41.00ms | 22.6% → 22.4% |     1.31s → 1.35s | 1,313 → 1,354 | `zig.tokenizer.Tokenizer.next`                                                            | `../opt/zig/lib/std/zig/tokenizer.zig`     |
|  +54.7% | +35.00ms |   1.1% → 1.6% |   64.0ms → 99.0ms |       64 → 99 | `static_string_map.defaultEql`                                                            | `../opt/zig/lib/std/static_string_map.zig` |
|   +8.4% | +29.00ms |   5.9% → 6.2% | 345.0ms → 374.0ms |     345 → 374 | `memset`                                                                                  | `../opt/zig/lib/compiler_rt.zig`           |
|  +35.2% | +19.00ms |   0.9% → 1.2% |   54.0ms → 73.0ms |       54 → 73 | `zig.Ast.nodeTag`                                                                         | `../opt/zig/lib/std/zig/Ast.zig`           |
|  +53.1% | +17.00ms |   0.5% → 0.8% |   32.0ms → 49.0ms |       32 → 49 | `zig.Parse.parseTypeExpr`                                                                 | `../opt/zig/lib/std/zig/Parse.zig`         |
|  +30.4% | +14.00ms |   0.8% → 1.0% |   46.0ms → 60.0ms |       46 → 60 | `zig.Ast.Render.AutoIndentingStream.writeAll`                                             | `../opt/zig/lib/std/zig/Ast/Render.zig`    |
|  +22.8% | +13.00ms |   1.0% → 1.2% |   57.0ms → 70.0ms |       57 → 70 | `zig.Ast.firstToken`                                                                      | `../opt/zig/lib/std/zig/Ast.zig`           |
|  +17.3% | +13.00ms |   1.3% → 1.5% |   75.0ms → 88.0ms |       75 → 88 | `zig.Ast.Render.renderIdentifier`                                                         | `../opt/zig/lib/std/zig/Ast/Render.zig`    |
|  +52.0% | +13.00ms |   0.4% → 0.6% |   25.0ms → 38.0ms |       25 → 38 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2756).Slice.items__anon_32582` | `../opt/zig/lib/std/multi_array_list.zig`  |
|  +16.3% | +13.00ms |   1.4% → 1.5% |   80.0ms → 93.0ms |       80 → 93 | `Io.Writer.write`                                                                         | `../opt/zig/lib/std/Io/Writer.zig`         |
|  +23.5% | +12.00ms |   0.9% → 1.0% |   51.0ms → 63.0ms |       51 → 63 | `Io.Writer.writeAll`                                                                      | `../opt/zig/lib/std/Io/Writer.zig`         |
| +122.2% | +11.00ms |   0.2% → 0.3% |    9.0ms → 20.0ms |        9 → 20 | `zig.Ast.Render.renderFnProto`                                                            | `../opt/zig/lib/std/zig/Ast/Render.zig`    |
|  +47.8% | +11.00ms |   0.4% → 0.6% |   23.0ms → 34.0ms |       23 → 34 | `Io.Writer.writeByte`                                                                     | `../opt/zig/lib/std/Io/Writer.zig`         |
|  +38.5% | +10.00ms |   0.4% → 0.6% |   26.0ms → 36.0ms |       26 → 36 | `Io.Threaded.fileReadPositionalPosix`                                                     | `../opt/zig/lib/std/Io/Threaded.zig`       |
| +166.7% | +10.00ms |   0.1% → 0.3% |    6.0ms → 16.0ms |        6 → 16 | `heap.c_allocator_impl.free`                                                              | `../opt/zig/lib/std/heap.zig`              |
|   +3.1% |  +8.00ms |          4.4% | 255.0ms → 263.0ms |     255 → 263 | `zig.Ast.tokenSlice`                                                                      | `../opt/zig/lib/std/zig/Ast.zig`           |
|   +4.7% |  +8.00ms |          2.9% | 170.0ms → 178.0ms |     170 → 178 | `zig.tokenizer.Token.Tag.lexeme`                                                          | `../opt/zig/lib/std/zig/tokenizer.zig`     |
|   +6.1% |  +8.00ms |          2.3% | 132.0ms → 140.0ms |     132 → 140 | `mem.findScalarPos__anon_6382`                                                            | `../opt/zig/lib/std/mem.zig`               |
|  +80.0% |  +8.00ms |   0.2% → 0.3% |   10.0ms → 18.0ms |       10 → 18 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2756).appendAssumeCapacity`    | `../opt/zig/lib/std/multi_array_list.zig`  |
|  +61.5% |  +8.00ms |   0.2% → 0.3% |   13.0ms → 21.0ms |       13 → 21 | `zig.Parse.parseErrorUnionExpr`                                                           | `../opt/zig/lib/std/zig/Parse.zig`         |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

##### Standard library

| Change |    Delta |            % |              Time |   Samples | Function                                                                               | Location                                  |
| -----: | -------: | -----------: | ----------------: | --------: | -------------------------------------------------------------------------------------- | ----------------------------------------- |
| -12.0% | -25.00ms |  3.6% → 3.0% | 209.0ms → 184.0ms | 209 → 184 | `zig.Ast.Render.renderExpression`                                                      | `../opt/zig/lib/std/zig/Ast/Render.zig`   |
| -12.5% | -18.00ms |  2.5% → 2.1% | 144.0ms → 126.0ms | 144 → 126 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_28815`                | `../opt/zig/lib/std/multi_array_list.zig` |
| -37.5% | -15.00ms |  0.7% → 0.4% |   40.0ms → 25.0ms |   40 → 25 | `heap.c_allocator_impl.remap`                                                          | `../opt/zig/lib/std/heap.zig`             |
| -17.7% | -14.00ms |  1.4% → 1.1% |   79.0ms → 65.0ms |   79 → 65 | `zig.Ast.lastToken`                                                                    | `../opt/zig/lib/std/zig/Ast.zig`          |
| -53.8% | -14.00ms |  0.4% → 0.2% |   26.0ms → 12.0ms |   26 → 12 | `zig.Ast.Render.renderExpressionComma`                                                 | `../opt/zig/lib/std/zig/Ast/Render.zig`   |
| -24.6% | -14.00ms |  1.0% → 0.7% |   57.0ms → 43.0ms |   57 → 43 | `zig.Parse.parseSuffixOp`                                                              | `../opt/zig/lib/std/zig/Parse.zig`        |
|  -4.7% | -12.00ms |  4.4% → 4.0% | 255.0ms → 243.0ms | 255 → 243 | `zig.Ast.Render.tokenSliceForRender`                                                   | `../opt/zig/lib/std/zig/Ast/Render.zig`   |
|  -6.5% | -11.00ms |  2.9% → 2.6% | 170.0ms → 159.0ms | 170 → 159 | `zig.Ast.Render.renderComments`                                                        | `../opt/zig/lib/std/zig/Ast/Render.zig`   |
| -32.1% |  -9.00ms |  0.5% → 0.3% |   28.0ms → 19.0ms |   28 → 19 | `mem.findPosLinear__anon_31435`                                                        | `../opt/zig/lib/std/mem.zig`              |
| -32.1% |  -9.00ms |  0.5% → 0.3% |   28.0ms → 19.0ms |   28 → 19 | `zig.Parse.parsePrimaryTypeExpr`                                                       | `../opt/zig/lib/std/zig/Parse.zig`        |
| -18.0% |  -9.00ms |  0.9% → 0.7% |   50.0ms → 41.0ms |   50 → 41 | `zig.Ast.Render.AutoIndentingStream.currentIndent`                                     | `../opt/zig/lib/std/zig/Ast/Render.zig`   |
| -61.5% |  -8.00ms |  0.2% → 0.1% |    13.0ms → 5.0ms |    13 → 5 | `zig.Parse.parseContainerMembers`                                                      | `../opt/zig/lib/std/zig/Parse.zig`        |
| -33.3% |  -8.00ms |  0.4% → 0.3% |   24.0ms → 16.0ms |   24 → 16 | `zig.Parse.parsePrimaryExpr`                                                           | `../opt/zig/lib/std/zig/Parse.zig`        |
|  -6.9% |  -7.00ms |  1.7% → 1.6% |  101.0ms → 94.0ms |  101 → 94 | `zig.Ast.tokenTag`                                                                     | `../opt/zig/lib/std/zig/Ast.zig`          |
| -15.4% |  -6.00ms |  0.7% → 0.5% |   39.0ms → 33.0ms |   39 → 33 | `zig.Ast.parse`                                                                        | `../opt/zig/lib/std/zig/Ast.zig`          |
| -28.6% |  -6.00ms |  0.4% → 0.2% |   21.0ms → 15.0ms |   21 → 15 | `zig.Ast.Render.renderArrayInit`                                                       | `../opt/zig/lib/std/zig/Ast/Render.zig`   |
| -75.0% |  -6.00ms | 0.1% → <0.1% |     8.0ms → 2.0ms |     8 → 2 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2756).ensureUnusedCapacity` | `../opt/zig/lib/std/multi_array_list.zig` |
| -21.4% |  -6.00ms |  0.5% → 0.4% |   28.0ms → 22.0ms |   28 → 22 | `multi_array_list.MultiArrayList(zig.Ast.Node).ensureTotalCapacity`                    | `../opt/zig/lib/std/multi_array_list.zig` |
| -75.0% |  -6.00ms | 0.1% → <0.1% |     8.0ms → 2.0ms |     8 → 2 | `Io.Threaded.dirOpenDirPosix`                                                          | `../opt/zig/lib/std/Io/Threaded.zig`      |
| -11.1% |  -5.00ms |  0.8% → 0.7% |   45.0ms → 40.0ms |   45 → 40 | `zig.Ast.Render.hasComment`                                                            | `../opt/zig/lib/std/zig/Ast/Render.zig`   |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

| Change |     Delta |             % |          Time |       Samples | Function                                    | Location                                            |
| -----: | --------: | ------------: | ------------: | ------------: | ------------------------------------------- | --------------------------------------------------- |
|  +3.8% | +222.00ms |         99.9% | 5.81s → 6.03s | 5,817 → 6,039 | `profile.main`                              | `profile.zig`                                       |
|  +3.8% | +222.00ms |        100.0% | 5.82s → 6.04s | 5,822 → 6,044 | `start.callMain`                            | `../opt/zig/lib/std/start.zig`                      |
|  +3.8% | +222.00ms |        100.0% | 5.82s → 6.04s | 5,822 → 6,044 | `start.callMainWithArgs`                    | `../opt/zig/lib/std/start.zig`                      |
|  +3.8% | +222.00ms |        100.0% | 5.82s → 6.04s | 5,822 → 6,044 | `start.main`                                | `../opt/zig/lib/std/start.zig`                      |
|  +3.8% | +222.00ms |        100.0% | 5.82s → 6.04s | 5,822 → 6,044 | `_start`                                    | `../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
|  +3.6% | +147.00ms | 71.0% → 70.8% | 4.13s → 4.28s | 4,135 → 4,282 | `zig.Ast.Render.renderMembers`              | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  +3.5% | +144.00ms | 71.2% → 70.9% | 4.14s → 4.28s | 4,143 → 4,287 | `zig.Ast.Render.renderTree`                 | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  +3.5% | +144.00ms | 71.2% → 70.9% | 4.14s → 4.28s | 4,143 → 4,287 | `zig.Ast.render`                            | `../opt/zig/lib/std/zig/Ast.zig`                    |
|  +3.5% | +144.00ms | 71.2% → 70.9% | 4.14s → 4.28s | 4,143 → 4,287 | `zig.Ast.renderAlloc`                       | `../opt/zig/lib/std/zig/Ast.zig`                    |
|  +3.0% | +121.00ms | 69.4% → 68.9% | 4.04s → 4.16s | 4,041 → 4,162 | `zig.Ast.Render.renderExpression`           | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  +2.9% | +106.00ms | 61.8% → 61.3% | 3.59s → 3.70s | 3,598 → 3,704 | `zig.Ast.Render.renderMember`               | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  +3.5% |  +98.00ms | 47.7% → 47.6% | 2.78s → 2.87s | 2,780 → 2,878 | `zig.Ast.Render.renderBlock`                | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  +3.4% |  +95.00ms | 47.6% → 47.4% | 2.76s → 2.86s | 2,769 → 2,864 | `zig.Ast.Render.finishRenderBlock`          | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  +5.0% |  +80.00ms | 27.6% → 27.9% | 1.60s → 1.68s | 1,605 → 1,685 | `zig.tokenizer.Tokenizer.next`              | `../opt/zig/lib/std/zig/tokenizer.zig`              |
|  +4.5% |  +71.00ms | 27.0% → 27.2% | 1.57s → 1.64s | 1,570 → 1,641 | `zig.Ast.parse`                             | `../opt/zig/lib/std/zig/Ast.zig`                    |
|  +2.8% |  +69.00ms | 42.7% → 42.3% | 2.48s → 2.55s | 2,487 → 2,556 | `zig.Ast.Render.renderVarDecl`              | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  +5.2% |  +68.00ms | 22.3% → 22.7% | 1.30s → 1.36s | 1,301 → 1,369 | `zig.Ast.tokenSlice`                        | `../opt/zig/lib/std/zig/Ast.zig`                    |
|  +2.7% |  +68.00ms | 42.7% → 42.3% | 2.48s → 2.55s | 2,487 → 2,555 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  +3.7% |  +59.00ms |         27.1% | 1.57s → 1.63s | 1,576 → 1,635 | `zig.Ast.Render.renderToken`                | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  +4.4% |  +59.00ms | 23.1% → 23.3% | 1.34s → 1.40s | 1,347 → 1,406 | `zig.Ast.Render.renderIdentifier`           | `../opt/zig/lib/std/zig/Ast/Render.zig`             |

##### Standard library

| Change |     Delta |             % |              Time |       Samples | Function                                      | Location                                            |
| -----: | --------: | ------------: | ----------------: | ------------: | --------------------------------------------- | --------------------------------------------------- |
|  +3.8% | +222.00ms |        100.0% |     5.82s → 6.04s | 5,822 → 6,044 | `start.callMain`                              | `../opt/zig/lib/std/start.zig`                      |
|  +3.8% | +222.00ms |        100.0% |     5.82s → 6.04s | 5,822 → 6,044 | `start.callMainWithArgs`                      | `../opt/zig/lib/std/start.zig`                      |
|  +3.8% | +222.00ms |        100.0% |     5.82s → 6.04s | 5,822 → 6,044 | `start.main`                                  | `../opt/zig/lib/std/start.zig`                      |
|  +3.8% | +222.00ms |        100.0% |     5.82s → 6.04s | 5,822 → 6,044 | `_start`                                      | `../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
|  +3.6% | +147.00ms | 71.0% → 70.8% |     4.13s → 4.28s | 4,135 → 4,282 | `zig.Ast.Render.renderMembers`                | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  +3.5% | +144.00ms | 71.2% → 70.9% |     4.14s → 4.28s | 4,143 → 4,287 | `zig.Ast.Render.renderTree`                   | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  +3.5% | +144.00ms | 71.2% → 70.9% |     4.14s → 4.28s | 4,143 → 4,287 | `zig.Ast.render`                              | `../opt/zig/lib/std/zig/Ast.zig`                    |
|  +3.5% | +144.00ms | 71.2% → 70.9% |     4.14s → 4.28s | 4,143 → 4,287 | `zig.Ast.renderAlloc`                         | `../opt/zig/lib/std/zig/Ast.zig`                    |
|  +3.0% | +121.00ms | 69.4% → 68.9% |     4.04s → 4.16s | 4,041 → 4,162 | `zig.Ast.Render.renderExpression`             | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  +2.9% | +106.00ms | 61.8% → 61.3% |     3.59s → 3.70s | 3,598 → 3,704 | `zig.Ast.Render.renderMember`                 | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  +3.5% |  +98.00ms | 47.7% → 47.6% |     2.78s → 2.87s | 2,780 → 2,878 | `zig.Ast.Render.renderBlock`                  | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  +3.4% |  +95.00ms | 47.6% → 47.4% |     2.76s → 2.86s | 2,769 → 2,864 | `zig.Ast.Render.finishRenderBlock`            | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  +5.0% |  +80.00ms | 27.6% → 27.9% |     1.60s → 1.68s | 1,605 → 1,685 | `zig.tokenizer.Tokenizer.next`                | `../opt/zig/lib/std/zig/tokenizer.zig`              |
|  +4.5% |  +71.00ms | 27.0% → 27.2% |     1.57s → 1.64s | 1,570 → 1,641 | `zig.Ast.parse`                               | `../opt/zig/lib/std/zig/Ast.zig`                    |
|  +2.8% |  +69.00ms | 42.7% → 42.3% |     2.48s → 2.55s | 2,487 → 2,556 | `zig.Ast.Render.renderVarDecl`                | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  +5.2% |  +68.00ms | 22.3% → 22.7% |     1.30s → 1.36s | 1,301 → 1,369 | `zig.Ast.tokenSlice`                          | `../opt/zig/lib/std/zig/Ast.zig`                    |
|  +2.7% |  +68.00ms | 42.7% → 42.3% |     2.48s → 2.55s | 2,487 → 2,555 | `zig.Ast.Render.renderVarDeclWithoutFixups`   | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  +3.7% |  +59.00ms |         27.1% |     1.57s → 1.63s | 1,576 → 1,635 | `zig.Ast.Render.renderToken`                  | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  +4.4% |  +59.00ms | 23.1% → 23.3% |     1.34s → 1.40s | 1,347 → 1,406 | `zig.Ast.Render.renderIdentifier`             | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| +15.5% |  +51.00ms |   5.6% → 6.3% | 328.0ms → 379.0ms |     328 → 379 | `zig.Ast.Render.AutoIndentingStream.writeAll` | `../opt/zig/lib/std/zig/Ast/Render.zig`             |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

##### Standard library

| Change |    Delta |             % |              Time |   Samples | Function                                                                | Location                                  |
| -----: | -------: | ------------: | ----------------: | --------: | ----------------------------------------------------------------------- | ----------------------------------------- |
| -14.1% | -35.00ms |   4.3% → 3.5% | 249.0ms → 214.0ms | 249 → 214 | `zig.Parse.parseContainerDeclAuto`                                      | `../opt/zig/lib/std/zig/Parse.zig`        |
|  -3.8% | -32.00ms | 14.6% → 13.5% | 849.0ms → 817.0ms | 849 → 817 | `zig.Ast.Render.renderWhile`                                            | `../opt/zig/lib/std/zig/Ast/Render.zig`   |
| -20.9% | -28.00ms |   2.3% → 1.8% | 134.0ms → 106.0ms | 134 → 106 | `zig.Parse.parseBlockExpr`                                              | `../opt/zig/lib/std/zig/Parse.zig`        |
|  -7.7% | -27.00ms |   6.0% → 5.3% | 349.0ms → 322.0ms | 349 → 322 | `zig.Parse.expectVarDeclExprStatement`                                  | `../opt/zig/lib/std/zig/Parse.zig`        |
| -11.2% | -27.00ms |   4.1% → 3.5% | 241.0ms → 214.0ms | 241 → 214 | `zig.Ast.Render.renderExpressionComma`                                  | `../opt/zig/lib/std/zig/Ast/Render.zig`   |
| -17.2% | -27.00ms |   2.7% → 2.2% | 157.0ms → 130.0ms | 157 → 130 | `zig.Ast.Render.renderSwitchCase`                                       | `../opt/zig/lib/std/zig/Ast/Render.zig`   |
| -11.4% | -19.00ms |   2.9% → 2.4% | 167.0ms → 148.0ms | 167 → 148 | `zig.Ast.nodeData`                                                      | `../opt/zig/lib/std/zig/Ast.zig`          |
| -12.5% | -18.00ms |   2.5% → 2.1% | 144.0ms → 126.0ms | 144 → 126 | `multi_array_list.MultiArrayList(zig.Ast.Node).Slice.items__anon_28815` | `../opt/zig/lib/std/multi_array_list.zig` |
|  -4.9% | -18.00ms |   6.3% → 5.8% | 367.0ms → 349.0ms | 367 → 349 | `zig.Parse.parsePrimaryTypeExpr`                                        | `../opt/zig/lib/std/zig/Parse.zig`        |
|  -6.4% | -17.00ms |   4.6% → 4.1% | 266.0ms → 249.0ms | 266 → 249 | `zig.Ast.lastToken`                                                     | `../opt/zig/lib/std/zig/Ast.zig`          |
|  -2.7% | -17.00ms | 10.6% → 10.0% | 620.0ms → 603.0ms | 620 → 603 | `zig.Ast.Render.renderIf`                                               | `../opt/zig/lib/std/zig/Ast/Render.zig`   |
| -16.3% | -16.00ms |   1.7% → 1.4% |   98.0ms → 82.0ms |   98 → 82 | `zig.Parse.expectIfStatement`                                           | `../opt/zig/lib/std/zig/Parse.zig`        |
| -84.2% | -16.00ms |  0.3% → <0.1% |    19.0ms → 3.0ms |    19 → 3 | `array_list.Aligned(u32,null).appendSlice`                              | `../opt/zig/lib/std/array_list.zig`       |
| -31.3% | -15.00ms |   0.8% → 0.5% |   48.0ms → 33.0ms |   48 → 33 | `zig.Parse.expectContainerField`                                        | `../opt/zig/lib/std/zig/Parse.zig`        |
| -37.5% | -15.00ms |   0.7% → 0.4% |   40.0ms → 25.0ms |   40 → 25 | `heap.c_allocator_impl.remap`                                           | `../opt/zig/lib/std/heap.zig`             |
|  -2.6% | -14.00ms |   9.2% → 8.7% | 537.0ms → 523.0ms | 537 → 523 | `zig.Parse.expectTopLevelDecl`                                          | `../opt/zig/lib/std/zig/Parse.zig`        |
|  -2.6% | -14.00ms |   9.2% → 8.7% | 537.0ms → 523.0ms | 537 → 523 | `zig.Parse.expectTopLevelDeclRecoverable`                               | `../opt/zig/lib/std/zig/Parse.zig`        |
| -35.0% | -14.00ms |   0.7% → 0.4% |   40.0ms → 26.0ms |   40 → 26 | `mem.Allocator.rawRemap`                                                | `../opt/zig/lib/std/mem/Allocator.zig`    |
| -63.6% | -14.00ms |   0.4% → 0.1% |    22.0ms → 8.0ms |    22 → 8 | `zig.Parse.listToSpan`                                                  | `../opt/zig/lib/std/zig/Parse.zig`        |
|  -5.4% | -13.00ms |   4.1% → 3.7% | 239.0ms → 226.0ms | 239 → 226 | `zig.Parse.parseGlobalVarDecl`                                          | `../opt/zig/lib/std/zig/Parse.zig`        |
