# CPU profile diff

Took 5.82s → 6.04s (+222.00ms, +3.8%) over 5,822 samples → 6,044 samples (1.0ms per sample).

| Category         | Change |     Delta |      % |          Time |       Samples |
| ---------------- | -----: | --------: | -----: | ------------: | ------------: |
| Standard library |  +3.8% | +222.00ms | 100.0% | 5.82s → 6.04s | 5,822 → 6,044 |

## Hottest functions

### Self time

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

##### Standard library

| Change |   Delta |           % |            Time | Samples | Function        | Location                         |
| -----: | ------: | ----------: | --------------: | ------: | --------------- | -------------------------------- |
| -15.4% | -6.00ms | 0.7% → 0.5% | 39.0ms → 33.0ms | 39 → 33 | `zig.Ast.parse` | `../opt/zig/lib/std/zig/Ast.zig` |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|  Change |     Delta |             % |            Time |       Samples | Function                                 | Location                               |
| ------: | --------: | ------------: | --------------: | ------------: | ---------------------------------------- | -------------------------------------- |
|   +3.8% | +222.00ms |         99.9% |   5.81s → 6.03s | 5,817 → 6,039 | `profile.main`                           | `profile.zig`                          |
|   +3.5% | +144.00ms | 71.2% → 70.9% |   4.14s → 4.28s | 4,143 → 4,287 | `zig.Ast.renderAlloc`                    | `../opt/zig/lib/std/zig/Ast.zig`       |
|   +4.5% |  +71.00ms | 27.0% → 27.2% |   1.57s → 1.64s | 1,570 → 1,641 | `zig.Ast.parse`                          | `../opt/zig/lib/std/zig/Ast.zig`       |
|   +3.8% |   +3.00ms |          1.3% | 78.0ms → 81.0ms |       78 → 81 | `Io.Dir.readFileAllocOptions__anon_2741` | `../opt/zig/lib/std/Io/Dir.zig`        |
| +100.0% |   +3.00ms |          0.1% |   3.0ms → 6.0ms |         3 → 6 | `zig.Ast.deinit`                         | `../opt/zig/lib/std/zig/Ast.zig`       |
|     new |   +3.00ms |  0.0% → <0.1% |     0ms → 3.0ms |         0 → 3 | `mem.Allocator.free__anon_2998`          | `../opt/zig/lib/std/mem/Allocator.zig` |
|  +33.3% |   +1.00ms |          0.1% |   3.0ms → 4.0ms |         3 → 4 | `mem.Allocator.free__anon_2983`          | `../opt/zig/lib/std/mem/Allocator.zig` |

##### Standard library

|  Change |     Delta |             % |            Time |       Samples | Function                                 | Location                               |
| ------: | --------: | ------------: | --------------: | ------------: | ---------------------------------------- | -------------------------------------- |
|   +3.5% | +144.00ms | 71.2% → 70.9% |   4.14s → 4.28s | 4,143 → 4,287 | `zig.Ast.renderAlloc`                    | `../opt/zig/lib/std/zig/Ast.zig`       |
|   +4.5% |  +71.00ms | 27.0% → 27.2% |   1.57s → 1.64s | 1,570 → 1,641 | `zig.Ast.parse`                          | `../opt/zig/lib/std/zig/Ast.zig`       |
|   +3.8% |   +3.00ms |          1.3% | 78.0ms → 81.0ms |       78 → 81 | `Io.Dir.readFileAllocOptions__anon_2741` | `../opt/zig/lib/std/Io/Dir.zig`        |
| +100.0% |   +3.00ms |          0.1% |   3.0ms → 6.0ms |         3 → 6 | `zig.Ast.deinit`                         | `../opt/zig/lib/std/zig/Ast.zig`       |
|     new |   +3.00ms |  0.0% → <0.1% |     0ms → 3.0ms |         0 → 3 | `mem.Allocator.free__anon_2998`          | `../opt/zig/lib/std/mem/Allocator.zig` |
|  +33.3% |   +1.00ms |          0.1% |   3.0ms → 4.0ms |         3 → 4 | `mem.Allocator.free__anon_2983`          | `../opt/zig/lib/std/mem/Allocator.zig` |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

##### Standard library

|  Change |   Delta |            % |            Time | Samples | Function                 | Location                        |
| ------: | ------: | -----------: | --------------: | ------: | ------------------------ | ------------------------------- |
|  -10.5% | -2.00ms |         0.3% | 19.0ms → 17.0ms | 19 → 17 | `Io.Dir.Walker.next`     | `../opt/zig/lib/std/Io/Dir.zig` |
| removed | -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `debug.print__anon_3012` | `../opt/zig/lib/std/debug.zig`  |
