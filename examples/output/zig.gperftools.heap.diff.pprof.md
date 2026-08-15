# Allocated heap profile diff

Allocated 89.2 MiB → 80.4 MiB (-8.82 MiB, -9.9%) over 29,595 objects → 41,370 objects (3.09 KiB → 1.99 KiB per object).

| Category         | Change |     Delta |      % |                Size |         Objects |
| ---------------- | -----: | --------: | -----: | ------------------: | --------------: |
| Standard library |  -9.9% | -8.82 MiB | 100.0% | 89.2 MiB → 80.4 MiB | 29,595 → 41,370 |

## Hottest functions

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

| Change |      Delta |            % |                Size |       Objects | Function        | Location                         |
| -----: | ---------: | -----------: | ------------------: | ------------: | --------------- | -------------------------------- |
| +28.5% | +2.269 MiB | 8.9% → 12.7% | 7.96 MiB → 10.2 MiB | 4,465 → 4,031 | `zig.Ast.parse` | `../opt/zig/lib/std/zig/Ast.zig` |
|    new | +4.093 KiB | 0.0% → <0.1% |      0 B → 4.09 KiB |         0 → 1 | `Io.Dir.walk`   | `../opt/zig/lib/std/Io/Dir.zig`  |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

| Change |       Delta |             % |                Size |         Objects | Function              | Location                         |
| -----: | ----------: | ------------: | ------------------: | --------------: | --------------------- | -------------------------------- |
| -13.9% | -11.092 MiB | 89.3% → 85.3% | 79.7 MiB → 68.6 MiB | 24,496 → 36,723 | `zig.Ast.renderAlloc` | `../opt/zig/lib/std/zig/Ast.zig` |
| -10.1% |  -8.818 MiB | 98.2% → 98.0% | 87.6 MiB → 78.8 MiB | 28,961 → 40,755 | `profile.main`        | `profile.zig`                    |

# Retained heap profile diff

Retained 0 B over 0 objects.

No bytes retained in any object.
