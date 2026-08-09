# Allocated heap profile

Allocated 89.2 MiB over 29,595 objects (3.09 KiB per object).

| Category         |      % |     Size | Objects |
| ---------------- | -----: | -------: | ------: |
| Standard library | 100.0% | 89.2 MiB |  29,595 |

## Hottest functions

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Objects | Function              | Location                         |
| ----: | -------: | ------: | --------------------- | -------------------------------- |
| 98.2% | 87.6 MiB |  28,961 | `profile.main`        | `profile.zig`                    |
| 89.3% | 79.7 MiB |  24,496 | `zig.Ast.renderAlloc` | `../opt/zig/lib/std/zig/Ast.zig` |
|  8.9% | 7.96 MiB |   4,465 | `zig.Ast.parse`       | `../opt/zig/lib/std/zig/Ast.zig` |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `profile.main` (`profile.zig`)

|     % |     Size | Objects | Callee                | Location                         |
| ----: | -------: | ------: | --------------------- | -------------------------------- |
| 90.9% | 79.7 MiB |  24,496 | `zig.Ast.renderAlloc` | `../opt/zig/lib/std/zig/Ast.zig` |
|  9.1% | 7.96 MiB |   4,465 | `zig.Ast.parse`       | `../opt/zig/lib/std/zig/Ast.zig` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

Common call stack: `profile.main` (`profile.zig`)

|     % |     Size | Objects | Call stack                                               |
| ----: | -------: | ------: | -------------------------------------------------------- |
| 89.3% | 79.7 MiB |  24,496 | `zig.Ast.renderAlloc` (`../opt/zig/lib/std/zig/Ast.zig`) |
|  8.9% | 7.96 MiB |   4,465 | `zig.Ast.parse` (`../opt/zig/lib/std/zig/Ast.zig`)       |

# Retained heap profile

Retained 0 B over 0 objects.

No bytes retained in any object.
