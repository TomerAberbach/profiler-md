# CPU profile

Took 5.82s over 5,822 samples (1.0ms per sample).

| Category |      % |  Time | Samples |
| -------- | -----: | ----: | ------: |
| stdlib   | 100.0% | 5.82s |   5,822 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |   Time | Samples | Function        | Location                         |
| ---: | -----: | ------: | --------------- | -------------------------------- |
| 0.7% | 39.0ms |      39 | `zig.Ast.parse` | `../opt/zig/lib/std/zig/Ast.zig` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `zig.Ast.parse` (`../opt/zig/lib/std/zig/Ast.zig`)

|     % |   Time | Samples | Location                             |
| ----: | -----: | ------: | ------------------------------------ |
| 53.8% | 21.0ms |      21 | `../opt/zig/lib/std/zig/Ast.zig:155` |
| 25.6% | 10.0ms |      10 | `../opt/zig/lib/std/zig/Ast.zig:158` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `zig.Ast.parse` (`../opt/zig/lib/std/zig/Ast.zig`)

|      % |   Time | Samples | Caller         | Location      |
| -----: | -----: | ------: | -------------- | ------------- |
| 100.0% | 39.0ms |      39 | `profile.main` | `profile.zig` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |   Time | Samples | Function                                 | Location                               |
| ----: | -----: | ------: | ---------------------------------------- | -------------------------------------- |
| 99.9% |  5.81s |   5,817 | `profile.main`                           | `profile.zig`                          |
| 71.2% |  4.14s |   4,143 | `zig.Ast.renderAlloc`                    | `../opt/zig/lib/std/zig/Ast.zig`       |
| 27.0% |  1.57s |   1,570 | `zig.Ast.parse`                          | `../opt/zig/lib/std/zig/Ast.zig`       |
|  1.3% | 78.0ms |      78 | `Io.Dir.readFileAllocOptions__anon_2741` | `../opt/zig/lib/std/Io/Dir.zig`        |
|  0.3% | 19.0ms |      19 | `Io.Dir.Walker.next`                     | `../opt/zig/lib/std/Io/Dir.zig`        |
|  0.1% |  3.0ms |       3 | `mem.Allocator.free__anon_2983`          | `../opt/zig/lib/std/mem/Allocator.zig` |
|  0.1% |  3.0ms |       3 | `zig.Ast.deinit`                         | `../opt/zig/lib/std/zig/Ast.zig`       |
| <0.1% |  1.0ms |       1 | `debug.print__anon_3012`                 | `../opt/zig/lib/std/debug.zig`         |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `profile.main` (`profile.zig`)

|     % |   Time | Samples | Callee                                   | Location                               |
| ----: | -----: | ------: | ---------------------------------------- | -------------------------------------- |
| 71.2% |  4.14s |   4,143 | `zig.Ast.renderAlloc`                    | `../opt/zig/lib/std/zig/Ast.zig`       |
| 27.0% |  1.57s |   1,570 | `zig.Ast.parse`                          | `../opt/zig/lib/std/zig/Ast.zig`       |
|  1.3% | 78.0ms |      78 | `Io.Dir.readFileAllocOptions__anon_2741` | `../opt/zig/lib/std/Io/Dir.zig`        |
|  0.3% | 19.0ms |      19 | `Io.Dir.Walker.next`                     | `../opt/zig/lib/std/Io/Dir.zig`        |
|  0.1% |  3.0ms |       3 | `mem.Allocator.free__anon_2983`          | `../opt/zig/lib/std/mem/Allocator.zig` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `profile.main` (`profile.zig`)

|     % |   Time | Samples | Call stack                                                                 |
| ----: | -----: | ------: | -------------------------------------------------------------------------- |
| 71.2% |  4.14s |   4,143 | `zig.Ast.renderAlloc` (`../opt/zig/lib/std/zig/Ast.zig`)                   |
| 27.0% |  1.57s |   1,570 | `zig.Ast.parse` (`../opt/zig/lib/std/zig/Ast.zig`)                         |
|  1.3% | 78.0ms |      78 | `Io.Dir.readFileAllocOptions__anon_2741` (`../opt/zig/lib/std/Io/Dir.zig`) |
|  0.3% | 19.0ms |      19 | `Io.Dir.Walker.next` (`../opt/zig/lib/std/Io/Dir.zig`)                     |
|  0.1% |  3.0ms |       3 | `mem.Allocator.free__anon_2983` (`../opt/zig/lib/std/mem/Allocator.zig`)   |
|  0.1% |  3.0ms |       3 | `zig.Ast.deinit` (`../opt/zig/lib/std/zig/Ast.zig`)                        |
| <0.1% |  1.0ms |       1 | `debug.print__anon_3012` (`../opt/zig/lib/std/debug.zig`)                  |
