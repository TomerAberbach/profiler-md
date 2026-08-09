# Allocated heap profile diff

Allocated 89.2 MiB → 80.4 MiB (-8.82 MiB, -9.9%) over 29,595 objects → 41,370 objects (3.09 KiB → 1.99 KiB per object).

| Category         | Change |     Delta |      % |                Size |         Objects |
| ---------------- | -----: | --------: | -----: | ------------------: | --------------: |
| Standard library |  -9.9% | -8.82 MiB | 100.0% | 89.2 MiB → 80.4 MiB | 29,595 → 41,370 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

##### Standard library

| Change |      Delta |           % |                Size |         Objects | Function                      | Location                      |
| -----: | ---------: | ----------: | ------------------: | --------------: | ----------------------------- | ----------------------------- |
| +61.4% | +1.224 MiB | 2.2% → 4.0% | 1.99 MiB → 3.22 MiB | 20,697 → 33,100 | `heap.c_allocator_impl.alloc` | `../opt/zig/lib/std/heap.zig` |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

##### Standard library

| Change |       Delta |             % |                Size |       Objects | Function                      | Location                      |
| -----: | ----------: | ------------: | ------------------: | ------------: | ----------------------------- | ----------------------------- |
| -11.5% | -10.044 MiB | 97.8% → 96.0% | 87.2 MiB → 77.2 MiB | 8,898 → 8,270 | `heap.c_allocator_impl.remap` | `../opt/zig/lib/std/heap.zig` |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

##### Standard library

|  Change |      Delta |            % |                Size |        Objects | Function                                                  | Location                                |
| ------: | ---------: | -----------: | ------------------: | -------------: | --------------------------------------------------------- | --------------------------------------- |
|  +93.1% | +3.686 MiB |  4.4% → 9.5% | 3.96 MiB → 7.65 MiB |  2,149 → 2,362 | `zig.Parse.expectStatementRecoverable`                    | `../opt/zig/lib/std/zig/Parse.zig`      |
|  +91.4% |  +3.65 MiB |  4.5% → 9.5% |    4 MiB → 7.65 MiB |  2,179 → 2,362 | `zig.Parse.expectStatement`                               | `../opt/zig/lib/std/zig/Parse.zig`      |
|  +56.9% |  +3.49 MiB | 6.9% → 12.0% | 6.13 MiB → 9.62 MiB | 5,373 → 13,537 | `zig.Ast.Render.renderStructInit`                         | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  +55.8% | +3.356 MiB | 6.7% → 11.7% | 6.01 MiB → 9.37 MiB |  3,362 → 3,557 | `zig.Parse.parseExprPrecedence`                           | `../opt/zig/lib/std/zig/Parse.zig`      |
|  +56.2% | +3.348 MiB | 6.7% → 11.6% |  5.96 MiB → 9.3 MiB |  3,209 → 3,512 | `zig.Parse.parseTypeExpr`                                 | `../opt/zig/lib/std/zig/Parse.zig`      |
|  +55.5% | +3.306 MiB | 6.7% → 11.5% | 5.96 MiB → 9.27 MiB |  3,223 → 3,512 | `zig.Parse.parseSuffixExpr`                               | `../opt/zig/lib/std/zig/Parse.zig`      |
|  +55.5% | +3.306 MiB | 6.7% → 11.5% | 5.96 MiB → 9.27 MiB |  3,223 → 3,512 | `zig.Parse.parseErrorUnionExpr`                           | `../opt/zig/lib/std/zig/Parse.zig`      |
|  +54.7% |  +3.29 MiB | 6.7% → 11.6% | 6.02 MiB → 9.31 MiB |  3,365 → 3,545 | `zig.Parse.parseExpr`                                     | `../opt/zig/lib/std/zig/Parse.zig`      |
|  +54.1% | +3.281 MiB | 6.8% → 11.6% | 6.07 MiB → 9.35 MiB |  3,422 → 3,557 | `zig.Parse.parsePrimaryExpr`                              | `../opt/zig/lib/std/zig/Parse.zig`      |
|  +53.7% | +3.264 MiB | 6.8% → 11.6% | 6.09 MiB → 9.35 MiB |  3,437 → 3,557 | `zig.Parse.parsePrefixExpr`                               | `../opt/zig/lib/std/zig/Parse.zig`      |
|  +67.1% | +3.261 MiB | 5.5% → 10.1% | 4.86 MiB → 8.12 MiB |  2,357 → 2,630 | `zig.Parse.parseBlock`                                    | `../opt/zig/lib/std/zig/Parse.zig`      |
|  +47.7% | +3.005 MiB | 7.1% → 11.6% |  6.3 MiB → 9.31 MiB |  3,332 → 3,497 | `zig.Parse.parseCurlySuffixExpr`                          | `../opt/zig/lib/std/zig/Parse.zig`      |
| +301.1% | +2.797 MiB |  1.0% → 4.6% |  951 KiB → 3.73 MiB |        30 → 93 | `zig.Ast.tokenSlice`                                      | `../opt/zig/lib/std/zig/Ast.zig`        |
|  +60.7% | +2.585 MiB |  4.8% → 8.5% | 4.26 MiB → 6.84 MiB |  2,564 → 2,842 | `zig.Parse.expectExpr`                                    | `../opt/zig/lib/std/zig/Parse.zig`      |
|  +49.5% | +2.431 MiB |  5.5% → 9.1% | 4.91 MiB → 7.34 MiB |  2,322 → 2,714 | `array_list.Aligned(u32,null).appendSlice`                | `../opt/zig/lib/std/array_list.zig`     |
|  +49.5% | +2.431 MiB |  5.5% → 9.1% | 4.91 MiB → 7.34 MiB |  2,322 → 2,714 | `zig.Parse.listToSpan`                                    | `../opt/zig/lib/std/zig/Parse.zig`      |
|  +68.6% | +2.421 MiB |  4.0% → 7.4% | 3.53 MiB → 5.95 MiB |  1,851 → 2,047 | `zig.Parse.expectVarDeclExprStatement`                    | `../opt/zig/lib/std/zig/Parse.zig`      |
|  +32.4% | +2.394 MiB | 8.3% → 12.2% |  7.4 MiB → 9.79 MiB |  2,826 → 2,757 | `mem.Allocator.remap__anon_32898`                         | `../opt/zig/lib/std/mem/Allocator.zig`  |
|  +31.4% | +2.367 MiB | 8.4% → 12.3% |  7.53 MiB → 9.9 MiB |  3,748 → 3,523 | `array_list.Aligned(u32,null).ensureTotalCapacityPrecise` | `../opt/zig/lib/std/array_list.zig`     |
|  +31.4% | +2.367 MiB | 8.4% → 12.3% |  7.53 MiB → 9.9 MiB |  3,748 → 3,523 | `array_list.Aligned(u32,null).ensureTotalCapacity`        | `../opt/zig/lib/std/array_list.zig`     |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

| Change |       Delta |             % |                Size |         Objects | Function                                          | Location                                            |
| -----: | ----------: | ------------: | ------------------: | --------------: | ------------------------------------------------- | --------------------------------------------------- |
| -41.1% | -23.789 MiB | 64.9% → 42.4% | 57.9 MiB → 34.1 MiB | 16,847 → 15,859 | `zig.Ast.Render.renderBlock`                      | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| -40.2% | -22.859 MiB | 63.7% → 42.3% |   56.8 MiB → 34 MiB | 16,767 → 15,846 | `zig.Ast.Render.finishRenderBlock`                | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| -15.5% | -11.926 MiB | 86.3% → 80.9% |   77 MiB → 65.1 MiB | 22,700 → 33,482 | `zig.Ast.Render.renderExpression`                 | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| -14.7% | -11.671 MiB | 89.3% → 84.6% |   79.7 MiB → 68 MiB |  7,812 → 13,330 | `Io.Writer.Allocating.ensureTotalCapacity`        | `../opt/zig/lib/std/Io/Writer.zig`                  |
| -14.7% | -11.671 MiB | 89.3% → 84.6% |   79.7 MiB → 68 MiB |  7,812 → 13,330 | `Io.Writer.Allocating.ensureUnusedCapacity`       | `../opt/zig/lib/std/Io/Writer.zig`                  |
| -14.7% | -11.671 MiB | 89.3% → 84.6% |   79.7 MiB → 68 MiB |  7,812 → 13,330 | `Io.Writer.Allocating.drain`                      | `../opt/zig/lib/std/Io/Writer.zig`                  |
| -14.6% | -11.669 MiB | 89.3% → 84.6% |   79.7 MiB → 68 MiB |  7,792 → 13,330 | `Io.Writer.Allocating.ensureTotalCapacityPrecise` | `../opt/zig/lib/std/Io/Writer.zig`                  |
| -13.9% | -11.099 MiB | 89.3% → 85.3% | 79.6 MiB → 68.5 MiB | 24,422 → 36,621 | `zig.Ast.Render.renderMembers`                    | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| -13.9% | -11.092 MiB | 89.3% → 85.3% | 79.7 MiB → 68.6 MiB | 24,496 → 36,723 | `zig.Ast.Render.renderTree`                       | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| -13.9% | -11.092 MiB | 89.3% → 85.3% | 79.7 MiB → 68.6 MiB | 24,496 → 36,723 | `zig.Ast.render`                                  | `../opt/zig/lib/std/zig/Ast.zig`                    |
| -13.9% | -11.092 MiB | 89.3% → 85.3% | 79.7 MiB → 68.6 MiB | 24,496 → 36,723 | `zig.Ast.renderAlloc`                             | `../opt/zig/lib/std/zig/Ast.zig`                    |
| -14.2% | -10.623 MiB | 83.7% → 79.7% | 74.7 MiB → 64.1 MiB | 21,780 → 34,922 | `zig.Ast.Render.renderMember`                     | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| -11.7% | -10.224 MiB | 97.8% → 95.8% |   87.2 MiB → 77 MiB |   8,922 → 8,255 | `mem.Allocator.rawRemap`                          | `../opt/zig/lib/std/mem/Allocator.zig`              |
| -13.7% | -10.135 MiB | 83.2% → 79.8% | 74.2 MiB → 64.1 MiB |  7,271 → 12,780 | `zig.Ast.Render.renderToken`                      | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| -11.5% | -10.044 MiB | 97.8% → 96.0% | 87.2 MiB → 77.2 MiB |   8,898 → 8,270 | `heap.c_allocator_impl.remap`                     | `../opt/zig/lib/std/heap.zig`                       |
| -10.1% |  -8.818 MiB | 98.2% → 98.0% | 87.6 MiB → 78.8 MiB | 28,961 → 40,755 | `profile.main`                                    | `profile.zig`                                       |
| -10.1% |  -8.818 MiB | 97.9% → 97.7% | 87.4 MiB → 78.5 MiB | 28,841 → 40,635 | `start.callMain`                                  | `../opt/zig/lib/std/start.zig`                      |
| -10.1% |  -8.818 MiB | 97.9% → 97.7% | 87.4 MiB → 78.5 MiB | 28,841 → 40,635 | `start.callMainWithArgs`                          | `../opt/zig/lib/std/start.zig`                      |
| -10.1% |  -8.818 MiB | 97.9% → 97.7% | 87.4 MiB → 78.5 MiB | 28,841 → 40,635 | `start.main`                                      | `../opt/zig/lib/std/start.zig`                      |
| -10.0% |  -8.692 MiB | 97.6% → 97.5% |   87 MiB → 78.3 MiB | 27,926 → 39,960 | `_start`                                          | `../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |

##### Standard library

| Change |       Delta |             % |                Size |         Objects | Function                                          | Location                                            |
| -----: | ----------: | ------------: | ------------------: | --------------: | ------------------------------------------------- | --------------------------------------------------- |
| -41.1% | -23.789 MiB | 64.9% → 42.4% | 57.9 MiB → 34.1 MiB | 16,847 → 15,859 | `zig.Ast.Render.renderBlock`                      | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| -40.2% | -22.859 MiB | 63.7% → 42.3% |   56.8 MiB → 34 MiB | 16,767 → 15,846 | `zig.Ast.Render.finishRenderBlock`                | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| -15.5% | -11.926 MiB | 86.3% → 80.9% |   77 MiB → 65.1 MiB | 22,700 → 33,482 | `zig.Ast.Render.renderExpression`                 | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| -14.7% | -11.671 MiB | 89.3% → 84.6% |   79.7 MiB → 68 MiB |  7,812 → 13,330 | `Io.Writer.Allocating.ensureTotalCapacity`        | `../opt/zig/lib/std/Io/Writer.zig`                  |
| -14.7% | -11.671 MiB | 89.3% → 84.6% |   79.7 MiB → 68 MiB |  7,812 → 13,330 | `Io.Writer.Allocating.ensureUnusedCapacity`       | `../opt/zig/lib/std/Io/Writer.zig`                  |
| -14.7% | -11.671 MiB | 89.3% → 84.6% |   79.7 MiB → 68 MiB |  7,812 → 13,330 | `Io.Writer.Allocating.drain`                      | `../opt/zig/lib/std/Io/Writer.zig`                  |
| -14.6% | -11.669 MiB | 89.3% → 84.6% |   79.7 MiB → 68 MiB |  7,792 → 13,330 | `Io.Writer.Allocating.ensureTotalCapacityPrecise` | `../opt/zig/lib/std/Io/Writer.zig`                  |
| -13.9% | -11.099 MiB | 89.3% → 85.3% | 79.6 MiB → 68.5 MiB | 24,422 → 36,621 | `zig.Ast.Render.renderMembers`                    | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| -13.9% | -11.092 MiB | 89.3% → 85.3% | 79.7 MiB → 68.6 MiB | 24,496 → 36,723 | `zig.Ast.Render.renderTree`                       | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| -13.9% | -11.092 MiB | 89.3% → 85.3% | 79.7 MiB → 68.6 MiB | 24,496 → 36,723 | `zig.Ast.render`                                  | `../opt/zig/lib/std/zig/Ast.zig`                    |
| -13.9% | -11.092 MiB | 89.3% → 85.3% | 79.7 MiB → 68.6 MiB | 24,496 → 36,723 | `zig.Ast.renderAlloc`                             | `../opt/zig/lib/std/zig/Ast.zig`                    |
| -14.2% | -10.623 MiB | 83.7% → 79.7% | 74.7 MiB → 64.1 MiB | 21,780 → 34,922 | `zig.Ast.Render.renderMember`                     | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| -11.7% | -10.224 MiB | 97.8% → 95.8% |   87.2 MiB → 77 MiB |   8,922 → 8,255 | `mem.Allocator.rawRemap`                          | `../opt/zig/lib/std/mem/Allocator.zig`              |
| -13.7% | -10.135 MiB | 83.2% → 79.8% | 74.2 MiB → 64.1 MiB |  7,271 → 12,780 | `zig.Ast.Render.renderToken`                      | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| -11.5% | -10.044 MiB | 97.8% → 96.0% | 87.2 MiB → 77.2 MiB |   8,898 → 8,270 | `heap.c_allocator_impl.remap`                     | `../opt/zig/lib/std/heap.zig`                       |
| -10.1% |  -8.818 MiB | 97.9% → 97.7% | 87.4 MiB → 78.5 MiB | 28,841 → 40,635 | `start.callMain`                                  | `../opt/zig/lib/std/start.zig`                      |
| -10.1% |  -8.818 MiB | 97.9% → 97.7% | 87.4 MiB → 78.5 MiB | 28,841 → 40,635 | `start.callMainWithArgs`                          | `../opt/zig/lib/std/start.zig`                      |
| -10.1% |  -8.818 MiB | 97.9% → 97.7% | 87.4 MiB → 78.5 MiB | 28,841 → 40,635 | `start.main`                                      | `../opt/zig/lib/std/start.zig`                      |
| -10.0% |  -8.692 MiB | 97.6% → 97.5% |   87 MiB → 78.3 MiB | 27,926 → 39,960 | `_start`                                          | `../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
| -40.8% |  -8.139 MiB | 22.4% → 14.7% |   20 MiB → 11.8 MiB |   3,220 → 2,760 | `zig.Ast.Render.renderExpressions`                | `../opt/zig/lib/std/zig/Ast/Render.zig`             |

# Retained heap profile diff

Retained 0 B over 0 objects.

No bytes retained in any object.
