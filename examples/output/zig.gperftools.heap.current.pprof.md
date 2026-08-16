# Allocated heap profile

Allocated 80.4 MiB over 41,370 objects (1.99 KiB per object).

| Category         |      % |     Size | Objects |
| ---------------- | -----: | -------: | ------: |
| Standard library | 100.0% | 80.4 MiB |  41,370 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

#### Categories

##### Standard library

|     % |     Size | Objects | Function                      | Location                      |
| ----: | -------: | ------: | ----------------------------- | ----------------------------- |
| 96.0% | 77.2 MiB |   8,270 | `heap.c_allocator_impl.remap` | `../opt/zig/lib/std/heap.zig` |
|  4.0% | 3.22 MiB |  33,100 | `heap.c_allocator_impl.alloc` | `../opt/zig/lib/std/heap.zig` |

#### Lines

Lines ranked by contribution to each function's self size.

##### `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`)

|      % |     Size | Objects | Location                          |
| -----: | -------: | ------: | --------------------------------- |
| 100.0% | 77.2 MiB |   8,270 | `../opt/zig/lib/std/heap.zig:309` |

##### `heap.c_allocator_impl.alloc` (`../opt/zig/lib/std/heap.zig`)

|      % |     Size | Objects | Location                          |
| -----: | -------: | ------: | --------------------------------- |
| 100.0% | 3.22 MiB |  33,100 | `../opt/zig/lib/std/heap.zig:232` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`)

|     % |   Size | Objects | Caller                   | Location                               |
| ----: | -----: | ------: | ------------------------ | -------------------------------------- |
| 99.8% | 77 MiB |   8,255 | `mem.Allocator.rawRemap` | `../opt/zig/lib/std/mem/Allocator.zig` |

##### `heap.c_allocator_impl.alloc` (`../opt/zig/lib/std/heap.zig`)

|      % |     Size | Objects | Caller                   | Location                               |
| -----: | -------: | ------: | ------------------------ | -------------------------------------- |
| 100.0% | 3.22 MiB |  33,100 | `mem.Allocator.rawAlloc` | `../opt/zig/lib/std/mem/Allocator.zig` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Objects | Function                                          | Location                                            |
| ----: | -------: | ------: | ------------------------------------------------- | --------------------------------------------------- |
| 98.0% | 78.8 MiB |  40,755 | `profile.main`                                    | `profile.zig`                                       |
| 97.7% | 78.5 MiB |  40,635 | `start.callMain`                                  | `../opt/zig/lib/std/start.zig`                      |
| 97.7% | 78.5 MiB |  40,635 | `start.callMainWithArgs`                          | `../opt/zig/lib/std/start.zig`                      |
| 97.7% | 78.5 MiB |  40,635 | `start.main`                                      | `../opt/zig/lib/std/start.zig`                      |
| 97.5% | 78.3 MiB |  39,960 | `_start`                                          | `../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
| 96.0% | 77.2 MiB |   8,270 | `heap.c_allocator_impl.remap`                     | `../opt/zig/lib/std/heap.zig`                       |
| 95.8% |   77 MiB |   8,255 | `mem.Allocator.rawRemap`                          | `../opt/zig/lib/std/mem/Allocator.zig`              |
| 85.3% | 68.6 MiB |  36,723 | `zig.Ast.Render.renderTree`                       | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| 85.3% | 68.6 MiB |  36,723 | `zig.Ast.render`                                  | `../opt/zig/lib/std/zig/Ast.zig`                    |
| 85.3% | 68.6 MiB |  36,723 | `zig.Ast.renderAlloc`                             | `../opt/zig/lib/std/zig/Ast.zig`                    |
| 85.3% | 68.5 MiB |  36,621 | `zig.Ast.Render.renderMembers`                    | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| 84.6% |   68 MiB |  13,330 | `Io.Writer.Allocating.ensureTotalCapacityPrecise` | `../opt/zig/lib/std/Io/Writer.zig`                  |
| 84.6% |   68 MiB |  13,330 | `Io.Writer.Allocating.ensureTotalCapacity`        | `../opt/zig/lib/std/Io/Writer.zig`                  |
| 84.6% |   68 MiB |  13,330 | `Io.Writer.Allocating.ensureUnusedCapacity`       | `../opt/zig/lib/std/Io/Writer.zig`                  |
| 84.6% |   68 MiB |  13,330 | `Io.Writer.Allocating.drain`                      | `../opt/zig/lib/std/Io/Writer.zig`                  |
| 80.9% | 65.1 MiB |  33,482 | `zig.Ast.Render.renderExpression`                 | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| 79.8% | 64.1 MiB |  12,780 | `zig.Ast.Render.renderToken`                      | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| 79.7% | 64.1 MiB |  34,922 | `zig.Ast.Render.renderMember`                     | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| 66.2% | 53.2 MiB |  12,557 | `zig.Ast.Render.AutoIndentingStream.writeAll`     | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| 65.5% | 52.6 MiB |  12,155 | `Io.Writer.write`                                 | `../opt/zig/lib/std/Io/Writer.zig`                  |

#### Categories

##### Standard library

|     % |     Size | Objects | Function                                          | Location                                            |
| ----: | -------: | ------: | ------------------------------------------------- | --------------------------------------------------- |
| 97.7% | 78.5 MiB |  40,635 | `start.callMain`                                  | `../opt/zig/lib/std/start.zig`                      |
| 97.7% | 78.5 MiB |  40,635 | `start.callMainWithArgs`                          | `../opt/zig/lib/std/start.zig`                      |
| 97.7% | 78.5 MiB |  40,635 | `start.main`                                      | `../opt/zig/lib/std/start.zig`                      |
| 97.5% | 78.3 MiB |  39,960 | `_start`                                          | `../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
| 96.0% | 77.2 MiB |   8,270 | `heap.c_allocator_impl.remap`                     | `../opt/zig/lib/std/heap.zig`                       |
| 95.8% |   77 MiB |   8,255 | `mem.Allocator.rawRemap`                          | `../opt/zig/lib/std/mem/Allocator.zig`              |
| 85.3% | 68.6 MiB |  36,723 | `zig.Ast.Render.renderTree`                       | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| 85.3% | 68.6 MiB |  36,723 | `zig.Ast.render`                                  | `../opt/zig/lib/std/zig/Ast.zig`                    |
| 85.3% | 68.6 MiB |  36,723 | `zig.Ast.renderAlloc`                             | `../opt/zig/lib/std/zig/Ast.zig`                    |
| 85.3% | 68.5 MiB |  36,621 | `zig.Ast.Render.renderMembers`                    | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| 84.6% |   68 MiB |  13,330 | `Io.Writer.Allocating.ensureTotalCapacityPrecise` | `../opt/zig/lib/std/Io/Writer.zig`                  |
| 84.6% |   68 MiB |  13,330 | `Io.Writer.Allocating.ensureTotalCapacity`        | `../opt/zig/lib/std/Io/Writer.zig`                  |
| 84.6% |   68 MiB |  13,330 | `Io.Writer.Allocating.ensureUnusedCapacity`       | `../opt/zig/lib/std/Io/Writer.zig`                  |
| 84.6% |   68 MiB |  13,330 | `Io.Writer.Allocating.drain`                      | `../opt/zig/lib/std/Io/Writer.zig`                  |
| 80.9% | 65.1 MiB |  33,482 | `zig.Ast.Render.renderExpression`                 | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| 79.8% | 64.1 MiB |  12,780 | `zig.Ast.Render.renderToken`                      | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| 79.7% | 64.1 MiB |  34,922 | `zig.Ast.Render.renderMember`                     | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| 66.2% | 53.2 MiB |  12,557 | `zig.Ast.Render.AutoIndentingStream.writeAll`     | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| 65.5% | 52.6 MiB |  12,155 | `Io.Writer.write`                                 | `../opt/zig/lib/std/Io/Writer.zig`                  |
| 65.5% | 52.6 MiB |  12,155 | `Io.Writer.writeAll`                              | `../opt/zig/lib/std/Io/Writer.zig`                  |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `profile.main` (`profile.zig`)

|     % |     Size | Objects | Callee                | Location                         |
| ----: | -------: | ------: | --------------------- | -------------------------------- |
| 87.0% | 68.6 MiB |  36,723 | `zig.Ast.renderAlloc` | `../opt/zig/lib/std/zig/Ast.zig` |
| 13.0% | 10.2 MiB |   4,031 | `zig.Ast.parse`       | `../opt/zig/lib/std/zig/Ast.zig` |
| <0.1% | 4.09 KiB |       1 | `Io.Dir.walk`         | `../opt/zig/lib/std/Io/Dir.zig`  |

##### `start.callMain` (`../opt/zig/lib/std/start.zig`)

|      % |     Size | Objects | Callee         | Location                                            |
| -----: | -------: | ------: | -------------- | --------------------------------------------------- |
| 100.0% | 78.5 MiB |  40,635 | `profile.main` | `profile.zig`                                       |
|   1.6% | 1.27 MiB |      30 | `_start`       | `../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |

##### `start.callMainWithArgs` (`../opt/zig/lib/std/start.zig`)

|      % |     Size | Objects | Callee           | Location                       |
| -----: | -------: | ------: | ---------------- | ------------------------------ |
| 100.0% | 78.5 MiB |  40,635 | `start.callMain` | `../opt/zig/lib/std/start.zig` |

##### `start.main` (`../opt/zig/lib/std/start.zig`)

|      % |     Size | Objects | Callee                   | Location                       |
| -----: | -------: | ------: | ------------------------ | ------------------------------ |
| 100.0% | 78.5 MiB |  40,635 | `start.callMainWithArgs` | `../opt/zig/lib/std/start.zig` |

##### `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)

|      % |     Size | Objects | Callee       | Location                                            |
| -----: | -------: | ------: | ------------ | --------------------------------------------------- |
| 100.0% | 78.3 MiB |  39,960 | `start.main` | `../opt/zig/lib/std/start.zig`                      |
|  <0.1% | 12.9 KiB |      15 | `_start`     | `../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |

##### `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`)

|    % |    Size | Objects | Callee   | Location                                            |
| ---: | ------: | ------: | -------- | --------------------------------------------------- |
| 0.8% | 625 KiB |     245 | `_start` | `../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |

##### `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`)

|      % |     Size | Objects | Callee                        | Location                                            |
| -----: | -------: | ------: | ----------------------------- | --------------------------------------------------- |
| 100.0% |   77 MiB |   8,255 | `heap.c_allocator_impl.remap` | `../opt/zig/lib/std/heap.zig`                       |
|  <0.1% | 2.08 KiB |       1 | `_start`                      | `../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |

##### `zig.Ast.Render.renderTree` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|      % |     Size | Objects | Callee                                      | Location                                            |
| -----: | -------: | ------: | ------------------------------------------- | --------------------------------------------------- |
| 100.0% | 68.5 MiB |  36,621 | `zig.Ast.Render.renderMembers`              | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|   0.7% |  518 KiB |     225 | `_start`                                    | `../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
|   0.1% |   90 KiB |      90 | `zig.Ast.Render.renderContainerDocComments` | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  <0.1% | 7.13 KiB |      27 | `zig.Ast.Render.renderComments`             | `../opt/zig/lib/std/zig/Ast/Render.zig`             |

##### `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`)

|      % |     Size | Objects | Callee                      | Location                                |
| -----: | -------: | ------: | --------------------------- | --------------------------------------- |
| 100.0% | 68.6 MiB |  36,723 | `zig.Ast.Render.renderTree` | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.renderAlloc` (`../opt/zig/lib/std/zig/Ast.zig`)

|      % |     Size | Objects | Callee           | Location                         |
| -----: | -------: | ------: | ---------------- | -------------------------------- |
| 100.0% | 68.6 MiB |  36,723 | `zig.Ast.render` | `../opt/zig/lib/std/zig/Ast.zig` |

##### `zig.Ast.Render.renderMembers` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |     Size | Objects | Callee                              | Location                                |
| ----: | -------: | ------: | ----------------------------------- | --------------------------------------- |
| 92.5% | 63.4 MiB |  34,767 | `zig.Ast.Render.renderMember`       | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  7.4% | 5.09 MiB |   1,849 | `zig.Ast.Render.renderExpression`   | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| <0.1% |   27 KiB |       5 | `zig.Ast.Render.renderExtraNewline` | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`)

|     % |     Size | Objects | Callee                   | Location                               |
| ----: | -------: | ------: | ------------------------ | -------------------------------------- |
| 98.4% | 66.9 MiB |   4,995 | `mem.Allocator.rawRemap` | `../opt/zig/lib/std/mem/Allocator.zig` |
|  1.6% | 1.09 MiB |   8,335 | `mem.Allocator.rawAlloc` | `../opt/zig/lib/std/mem/Allocator.zig` |

##### `Io.Writer.Allocating.ensureTotalCapacity` (`../opt/zig/lib/std/Io/Writer.zig`)

|      % |    Size | Objects | Callee                                            | Location                                            |
| -----: | ------: | ------: | ------------------------------------------------- | --------------------------------------------------- |
| 100.0% |  68 MiB |  13,330 | `Io.Writer.Allocating.ensureTotalCapacityPrecise` | `../opt/zig/lib/std/Io/Writer.zig`                  |
|   0.3% | 210 KiB |      21 | `_start`                                          | `../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |

##### `Io.Writer.Allocating.ensureUnusedCapacity` (`../opt/zig/lib/std/Io/Writer.zig`)

|      % |   Size | Objects | Callee                                     | Location                           |
| -----: | -----: | ------: | ------------------------------------------ | ---------------------------------- |
| 100.0% | 68 MiB |  13,330 | `Io.Writer.Allocating.ensureTotalCapacity` | `../opt/zig/lib/std/Io/Writer.zig` |

##### `Io.Writer.Allocating.drain` (`../opt/zig/lib/std/Io/Writer.zig`)

|      % |   Size | Objects | Callee                                      | Location                           |
| -----: | -----: | ------: | ------------------------------------------- | ---------------------------------- |
| 100.0% | 68 MiB |  13,330 | `Io.Writer.Allocating.ensureUnusedCapacity` | `../opt/zig/lib/std/Io/Writer.zig` |

##### `zig.Ast.Render.renderExpression` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |     Size | Objects | Callee                               | Location                                |
| ----: | -------: | ------: | ------------------------------------ | --------------------------------------- |
| 52.4% | 34.1 MiB |  15,859 | `zig.Ast.Render.renderBlock`         | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 51.8% | 33.7 MiB |  15,804 | `zig.Ast.Render.renderContainerDecl` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 28.8% | 18.8 MiB |   9,381 | `zig.Ast.Render.renderExpression`    | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 18.2% | 11.8 MiB |   2,760 | `zig.Ast.Render.renderExpressions`   | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 16.9% |   11 MiB |   1,263 | `zig.Ast.Render.renderIdentifier`    | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.renderToken` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |     Size | Objects | Callee                                        | Location                                            |
| ----: | -------: | ------: | --------------------------------------------- | --------------------------------------------------- |
| 77.2% | 49.5 MiB |  12,029 | `zig.Ast.Render.AutoIndentingStream.writeAll` | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| 23.8% | 15.2 MiB |     769 | `zig.Ast.Render.renderSpace`                  | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  1.2% |  796 KiB |     171 | `_start`                                      | `../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |

##### `zig.Ast.Render.renderMember` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |     Size | Objects | Callee                                | Location                                |
| ----: | -------: | ------: | ------------------------------------- | --------------------------------------- |
| 57.9% | 37.1 MiB |  24,905 | `zig.Ast.Render.renderVarDecl`        | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 48.5% |   31 MiB |   9,516 | `zig.Ast.Render.renderExpression`     | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 11.7% | 7.52 MiB |     671 | `zig.Ast.Render.renderContainerField` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  4.9% | 3.14 MiB |     613 | `zig.Ast.Render.renderDocComments`    | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  2.9% | 1.88 MiB |      84 | `zig.Ast.Render.renderToken`          | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.AutoIndentingStream.writeAll` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |    Size | Objects | Callee                                           | Location                                |
| ----: | ------: | ------: | ------------------------------------------------ | --------------------------------------- |
| 82.7% |  44 MiB |  11,921 | `Io.Writer.writeAll`                             | `../opt/zig/lib/std/Io/Writer.zig`      |
| 17.3% | 9.2 MiB |     636 | `zig.Ast.Render.AutoIndentingStream.applyIndent` | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `Io.Writer.write` (`../opt/zig/lib/std/Io/Writer.zig`)

|      % |     Size | Objects | Callee                       | Location                           |
| -----: | -------: | ------: | ---------------------------- | ---------------------------------- |
| 100.0% | 52.6 MiB |  12,155 | `Io.Writer.Allocating.drain` | `../opt/zig/lib/std/Io/Writer.zig` |

##### `Io.Writer.writeAll` (`../opt/zig/lib/std/Io/Writer.zig`)

|      % |     Size | Objects | Callee            | Location                           |
| -----: | -------: | ------: | ----------------- | ---------------------------------- |
| 100.0% | 52.6 MiB |  12,155 | `Io.Writer.write` | `../opt/zig/lib/std/Io/Writer.zig` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|    % |     Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 7.8% | 6.25 MiB |      15 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.Allocating.ensureTotalCapacity` ← `Io.Writer.Allocating.ensureUnusedCapacity` ← `Io.Writer.Allocating.drain` ← `Io.Writer.write` ← `Io.Writer.writeAll` ← `Io.Writer.alignBufferOptions` ← `Io.Writer.printValue__anon_6784` ← `Io.Writer.print__anon_4596` ← `zig.Ast.Render.AutoIndentingStream.print__anon_32570` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderComments` ← `zig.Ast.Render.renderSpace` ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderSpace` ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 3.4% | 2.72 MiB |      15 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.Allocating.ensureTotalCapacity` ← `Io.Writer.Allocating.ensureUnusedCapacity` ← `Io.Writer.Allocating.drain` ← `Io.Writer.write` ← `Io.Writer.writeAll` ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderBlock` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderThenElse` ← `zig.Ast.Render.renderWhile` ← `zig.Ast.Render.renderIf` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.finishRenderBlock` ← `zig.Ast.Render.renderBlock` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderExpressions` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.finishRenderBlock` ← `zig.Ast.Render.renderBlock` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderThenElse` ← `zig.Ast.Render.renderWhile` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.finishRenderBlock` ← `zig.Ast.Render.renderBlock` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                              |
| 2.8% | 2.25 MiB |      74 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.Allocating.ensureTotalCapacity` ← `Io.Writer.Allocating.ensureUnusedCapacity` ← `Io.Writer.Allocating.drain` ← `Io.Writer.write` ← `Io.Writer.writeAll` ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderIdentifier` ← `zig.Ast.Render.renderContainerField` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.7% |  2.2 MiB |      15 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.Allocating.ensureTotalCapacity` ← `Io.Writer.Allocating.ensureUnusedCapacity` ← `Io.Writer.Allocating.drain` ← `Io.Writer.writeSplat` ← `Io.Writer.splatByte` ← `Io.Writer.splatByteAll` ← `zig.Ast.Render.AutoIndentingStream.applyIndent` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.AutoIndentingStream.writeAll` ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderIdentifier` ← `zig.Ast.Render.renderContainerField` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderContainerField` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                     |
| 2.2% | 1.77 MiB |      44 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.Allocating.ensureTotalCapacity` ← `Io.Writer.Allocating.ensureUnusedCapacity` ← `Io.Writer.Allocating.drain` ← `Io.Writer.write` ← `Io.Writer.writeAll` ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 2.0% | 1.63 MiB |      15 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.Allocating.ensureTotalCapacity` ← `Io.Writer.Allocating.ensureUnusedCapacity` ← `Io.Writer.Allocating.drain` ← `Io.Writer.write` ← `Io.Writer.writeAll` ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderIdentifier` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderExpressions` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.finishRenderBlock` ← `zig.Ast.Render.renderBlock` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderThenElse` ← `zig.Ast.Render.renderWhile` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.finishRenderBlock` ← `zig.Ast.Render.renderBlock` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`) ← `zig.Ast.tokenSlice` (`../opt/zig/lib/std/zig/Ast.zig`)                                                                                                                                                                                                                                                                                    |
| 2.0% | 1.63 MiB |      15 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.Allocating.ensureTotalCapacity` ← `Io.Writer.Allocating.ensureUnusedCapacity` ← `Io.Writer.Allocating.drain` ← `Io.Writer.write` ← `Io.Writer.writeAll` ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderIdentifier` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.7% | 1.33 MiB |      15 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.Allocating.ensureTotalCapacity` ← `Io.Writer.Allocating.ensureUnusedCapacity` ← `Io.Writer.Allocating.drain` ← `Io.Writer.write` ← `Io.Writer.writeAll` ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderIdentifier` ← `zig.Ast.Render.renderCall` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.finishRenderBlock` ← `zig.Ast.Render.renderBlock` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.finishRenderBlock` ← `zig.Ast.Render.renderBlock` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.finishRenderBlock` ← `zig.Ast.Render.renderBlock` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`) ← `zig.Ast.tokenSlice` (`../opt/zig/lib/std/zig/Ast.zig`)                                                                                                                                                                                                                                                                                                                                                     |
| 1.6% | 1.27 MiB |      15 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.Allocating.ensureTotalCapacity` ← `Io.Writer.Allocating.ensureUnusedCapacity` ← `Io.Writer.Allocating.drain` ← `Io.Writer.write` ← `Io.Writer.writeAll` ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderExpressionFixup` ← `zig.Ast.Render.renderStructInit` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderArrayInit` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderExpressionFixup` ← `zig.Ast.Render.renderStructInit` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main`                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.6% | 1.25 MiB |      39 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.Allocating.ensureTotalCapacity` ← `Io.Writer.Allocating.ensureUnusedCapacity` ← `Io.Writer.Allocating.drain` ← `Io.Writer.write` ← `Io.Writer.writeAll` ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderIdentifier` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.6% | 1.25 MiB |       2 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.Allocating.ensureTotalCapacity` ← `Io.Writer.Allocating.ensureUnusedCapacity` ← `Io.Writer.Allocating.drain` ← `Io.Writer.write` ← `Io.Writer.writeAll` ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderExpressions` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderExpressions` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.finishRenderBlock` ← `zig.Ast.Render.renderBlock` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.5% | 1.23 MiB |      15 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `mem.Allocator.remap__anon_32898` ← `array_list.Aligned(u32,null).ensureTotalCapacityPrecise` (`../opt/zig/lib/std/array_list.zig`) ← `array_list.Aligned(u32,null).ensureTotalCapacity` ← `array_list.Aligned(u32,null).ensureUnusedCapacity` ← `array_list.Aligned(u32,null).appendSlice` ← `zig.Parse.listToSpan` (`../opt/zig/lib/std/zig/Parse.zig`) ← `zig.Parse.parseSuffixExpr` ← `zig.Parse.parseErrorUnionExpr` ← `zig.Parse.parseTypeExpr` ← `zig.Parse.parseCurlySuffixExpr` ← `zig.Parse.parsePrimaryExpr` ← `zig.Parse.parsePrefixExpr` ← `zig.Parse.parseExprPrecedence` ← `zig.Parse.parseExpr` ← `zig.Parse.expectExpr` ← `zig.Parse.expectSwitchSuffix` ← `zig.Parse.parseSwitchExpr` ← `zig.Parse.parseLabeledStatement` ← `zig.Parse.expectStatement` ← `zig.Parse.expectStatementRecoverable` ← `zig.Parse.parseBlock` ← `zig.Parse.parseBlockExpr` ← `zig.Parse.expectIfStatement` ← `zig.Parse.expectStatement` ← `zig.Parse.expectStatementRecoverable` ← `zig.Parse.parseBlock` ← `zig.Parse.parseBlockExpr` ← `zig.Parse.expectIfStatement` ← `zig.Parse.expectStatement` ← `zig.Parse.expectStatementRecoverable` ← `zig.Parse.parseBlock` ← `zig.Parse.expectTopLevelDecl` ← `zig.Parse.expectTopLevelDeclRecoverable` ← `zig.Parse.parseContainerMembers` ← `zig.Parse.parseRoot` ← `zig.Ast.parseTokens` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.parse` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`) ← `zig.Parse.parseTypeExpr` (`../opt/zig/lib/std/zig/Parse.zig`) |
| 1.5% | 1.21 MiB |      15 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.Allocating.ensureTotalCapacity` ← `Io.Writer.Allocating.ensureUnusedCapacity` ← `Io.Writer.Allocating.drain` ← `Io.Writer.writeByte` ← `zig.Ast.Render.AutoIndentingStream.writeByte` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderSpace` ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderFnProto` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.4% | 1.11 MiB |     151 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.Allocating.ensureTotalCapacity` ← `Io.Writer.Allocating.ensureUnusedCapacity` ← `Io.Writer.Allocating.drain` ← `Io.Writer.write` ← `Io.Writer.writeAll` ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderDocComments` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.4% | 1.11 MiB |       6 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.Allocating.ensureTotalCapacity` ← `Io.Writer.Allocating.ensureUnusedCapacity` ← `Io.Writer.Allocating.drain` ← `Io.Writer.write` ← `Io.Writer.writeAll` ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderIdentifier` ← `zig.Ast.Render.renderArrayInit` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderExpressionFixup` ← `zig.Ast.Render.renderStructInit` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderExpressionFixup` ← `zig.Ast.Render.renderStructInit` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderParamList` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                               |
| 1.3% | 1.07 MiB |      35 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.Allocating.ensureTotalCapacity` ← `Io.Writer.Allocating.ensureUnusedCapacity` ← `Io.Writer.Allocating.drain` ← `Io.Writer.write` ← `Io.Writer.writeAll` ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderIdentifier` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.finishRenderBlock` ← `zig.Ast.Render.renderBlock` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.1% |  924 KiB |      12 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.Allocating.ensureTotalCapacity` ← `Io.Writer.Allocating.ensureUnusedCapacity` ← `Io.Writer.Allocating.drain` ← `Io.Writer.write` ← `Io.Writer.writeAll` ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.0% |  788 KiB |      90 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `mem.Allocator.remap__anon_32898` ← `array_list.Aligned(u32,null).ensureTotalCapacityPrecise` (`../opt/zig/lib/std/array_list.zig`) ← `array_list.Aligned(u32,null).ensureTotalCapacity` ← `array_list.Aligned(u32,null).ensureUnusedCapacity` ← `array_list.Aligned(u32,null).appendSlice` ← `zig.Parse.listToSpan` (`../opt/zig/lib/std/zig/Parse.zig`) ← `zig.Parse.parseSuffixExpr` ← `zig.Parse.parseErrorUnionExpr` ← `zig.Parse.parseTypeExpr` ← `zig.Parse.parseCurlySuffixExpr` ← `zig.Parse.parsePrimaryExpr` ← `zig.Parse.parsePrefixExpr` ← `zig.Parse.parseExprPrecedence` ← `zig.Parse.parseExpr` ← `zig.Parse.expectVarDeclExprStatement` ← `zig.Parse.expectStatement` ← `zig.Parse.expectStatementRecoverable` ← `zig.Parse.parseBlock` ← `zig.Parse.expectTopLevelDecl` ← `zig.Parse.expectTopLevelDeclRecoverable` ← `zig.Parse.parseContainerMembers` ← `zig.Parse.parseRoot` ← `zig.Ast.parseTokens` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.parse` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.0% |  787 KiB |   6,105 | `heap.c_allocator_impl.alloc` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawAlloc` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.Allocating.ensureTotalCapacity` ← `Io.Writer.Allocating.ensureUnusedCapacity` ← `Io.Writer.Allocating.drain` ← `Io.Writer.write` ← `Io.Writer.writeAll` ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderExpressionComma` ← `zig.Ast.Render.renderArrayInit` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderParamList` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderExpressionFixup` ← `zig.Ast.Render.renderStructInit` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                       |
| 0.9% |  763 KiB |      15 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.Allocating.ensureTotalCapacity` ← `Io.Writer.Allocating.ensureUnusedCapacity` ← `Io.Writer.Allocating.drain` ← `Io.Writer.writeByte` ← `zig.Ast.Render.AutoIndentingStream.insertNewline` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderSpace` ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderSpace` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderExpressionFixup` ← `zig.Ast.Render.renderStructInit` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                                              |

# Retained heap profile

Retained 0 B over 0 objects.

No bytes retained in any object.
