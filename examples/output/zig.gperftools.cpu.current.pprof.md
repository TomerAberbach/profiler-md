# CPU profile

Took 6.04s over 6,044 samples (1.0ms per sample).

| Category |      % |  Time | Samples |
| -------- | -----: | ----: | ------: |
| stdlib   | 100.0% | 6.04s |   6,044 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |   Time | Samples | Function        | Location                         |
| ---: | -----: | ------: | --------------- | -------------------------------- |
| 0.5% | 33.0ms |      33 | `zig.Ast.parse` | `../opt/zig/lib/std/zig/Ast.zig` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `zig.Ast.parse` (`../opt/zig/lib/std/zig/Ast.zig`)

|     % |   Time | Samples | Location                             |
| ----: | -----: | ------: | ------------------------------------ |
| 42.4% | 14.0ms |      14 | `../opt/zig/lib/std/zig/Ast.zig:155` |
| 33.3% | 11.0ms |      11 | `../opt/zig/lib/std/zig/Ast.zig:158` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `zig.Ast.parse` (`../opt/zig/lib/std/zig/Ast.zig`)

|      % |   Time | Samples | Caller         | Location      |
| -----: | -----: | ------: | -------------- | ------------- |
| 100.0% | 33.0ms |      33 | `profile.main` | `profile.zig` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |   Time | Samples | Function                                 | Location                               |
| ----: | -----: | ------: | ---------------------------------------- | -------------------------------------- |
| 99.9% |  6.03s |   6,039 | `profile.main`                           | `profile.zig`                          |
| 70.9% |  4.28s |   4,287 | `zig.Ast.renderAlloc`                    | `../opt/zig/lib/std/zig/Ast.zig`       |
| 27.2% |  1.64s |   1,641 | `zig.Ast.parse`                          | `../opt/zig/lib/std/zig/Ast.zig`       |
|  1.3% | 81.0ms |      81 | `Io.Dir.readFileAllocOptions__anon_2741` | `../opt/zig/lib/std/Io/Dir.zig`        |
|  0.3% | 17.0ms |      17 | `Io.Dir.Walker.next`                     | `../opt/zig/lib/std/Io/Dir.zig`        |
|  0.1% |  6.0ms |       6 | `zig.Ast.deinit`                         | `../opt/zig/lib/std/zig/Ast.zig`       |
|  0.1% |  4.0ms |       4 | `mem.Allocator.free__anon_2983`          | `../opt/zig/lib/std/mem/Allocator.zig` |
| <0.1% |  3.0ms |       3 | `mem.Allocator.free__anon_2998`          | `../opt/zig/lib/std/mem/Allocator.zig` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `profile.main` (`profile.zig`)

|     % |   Time | Samples | Callee                                   | Location                         |
| ----: | -----: | ------: | ---------------------------------------- | -------------------------------- |
| 71.0% |  4.28s |   4,287 | `zig.Ast.renderAlloc`                    | `../opt/zig/lib/std/zig/Ast.zig` |
| 27.2% |  1.64s |   1,641 | `zig.Ast.parse`                          | `../opt/zig/lib/std/zig/Ast.zig` |
|  1.3% | 81.0ms |      81 | `Io.Dir.readFileAllocOptions__anon_2741` | `../opt/zig/lib/std/Io/Dir.zig`  |
|  0.3% | 17.0ms |      17 | `Io.Dir.Walker.next`                     | `../opt/zig/lib/std/Io/Dir.zig`  |
|  0.1% |  6.0ms |       6 | `zig.Ast.deinit`                         | `../opt/zig/lib/std/zig/Ast.zig` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `profile.main` (`profile.zig`)

|     % |   Time | Samples | Call stack                                                                 |
| ----: | -----: | ------: | -------------------------------------------------------------------------- |
| 70.9% |  4.28s |   4,287 | `zig.Ast.renderAlloc` (`../opt/zig/lib/std/zig/Ast.zig`)                   |
| 27.2% |  1.64s |   1,641 | `zig.Ast.parse` (`../opt/zig/lib/std/zig/Ast.zig`)                         |
|  1.3% | 81.0ms |      81 | `Io.Dir.readFileAllocOptions__anon_2741` (`../opt/zig/lib/std/Io/Dir.zig`) |
|  0.3% | 17.0ms |      17 | `Io.Dir.Walker.next` (`../opt/zig/lib/std/Io/Dir.zig`)                     |
|  0.1% |  6.0ms |       6 | `zig.Ast.deinit` (`../opt/zig/lib/std/zig/Ast.zig`)                        |
|  0.1% |  4.0ms |       4 | `mem.Allocator.free__anon_2983` (`../opt/zig/lib/std/mem/Allocator.zig`)   |
| <0.1% |  3.0ms |       3 | `mem.Allocator.free__anon_2998` (`../opt/zig/lib/std/mem/Allocator.zig`)   |
