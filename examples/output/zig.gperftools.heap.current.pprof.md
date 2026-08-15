# Allocated heap profile

Allocated 80.4 MiB over 41,370 objects (1.99 KiB per object).

| Category         |      % |     Size | Objects |
| ---------------- | -----: | -------: | ------: |
| Standard library | 100.0% | 80.4 MiB |  41,370 |

## Hottest functions

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Objects | Function              | Location                         |
| ----: | -------: | ------: | --------------------- | -------------------------------- |
| 98.0% | 78.8 MiB |  40,755 | `profile.main`        | `profile.zig`                    |
| 85.3% | 68.6 MiB |  36,723 | `zig.Ast.renderAlloc` | `../opt/zig/lib/std/zig/Ast.zig` |
| 12.7% | 10.2 MiB |   4,031 | `zig.Ast.parse`       | `../opt/zig/lib/std/zig/Ast.zig` |
| <0.1% | 4.09 KiB |       1 | `Io.Dir.walk`         | `../opt/zig/lib/std/Io/Dir.zig`  |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `profile.main` (`profile.zig`)

|     % |     Size | Objects | Callee                | Location                         |
| ----: | -------: | ------: | --------------------- | -------------------------------- |
| 87.0% | 68.6 MiB |  36,723 | `zig.Ast.renderAlloc` | `../opt/zig/lib/std/zig/Ast.zig` |
| 13.0% | 10.2 MiB |   4,031 | `zig.Ast.parse`       | `../opt/zig/lib/std/zig/Ast.zig` |
| <0.1% | 4.09 KiB |       1 | `Io.Dir.walk`         | `../opt/zig/lib/std/Io/Dir.zig`  |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame. `…` stands for frames the entry filter hides.

Common call stack: `profile.main` (`profile.zig`)

|     % |     Size | Objects | Call stack                                                                                                                                               |
| ----: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 84.6% |   68 MiB |  36,483 | `zig.Ast.renderAlloc` (`../opt/zig/lib/std/zig/Ast.zig`)                                                                                                 |
| 12.7% | 10.2 MiB |   4,031 | `zig.Ast.parse` (`../opt/zig/lib/std/zig/Ast.zig`)                                                                                                       |
|  0.7% |  586 KiB |     240 | `zig.Ast.renderAlloc` (`../opt/zig/lib/std/zig/Ast.zig`) ← `profile.main` (`profile.zig`) ← … ← `zig.Ast.renderAlloc` (`../opt/zig/lib/std/zig/Ast.zig`) |
| <0.1% | 4.09 KiB |       1 | `Io.Dir.walk` (`../opt/zig/lib/std/Io/Dir.zig`)                                                                                                          |

# Retained heap profile

Retained 0 B over 0 objects.

No bytes retained in any object.
