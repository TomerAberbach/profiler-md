# Allocated heap profile

Allocated 89.2 MiB over 29,595 objects (3.09 KiB per object).

| Category         |      % |     Size | Objects |
| ---------------- | -----: | -------: | ------: |
| Standard library | 100.0% | 89.2 MiB |  29,595 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

#### Categories

##### Standard library

|     % |     Size | Objects | Function                      | Location                      |
| ----: | -------: | ------: | ----------------------------- | ----------------------------- |
| 97.8% | 87.2 MiB |   8,898 | `heap.c_allocator_impl.remap` | `../opt/zig/lib/std/heap.zig` |
|  2.2% | 1.99 MiB |  20,697 | `heap.c_allocator_impl.alloc` | `../opt/zig/lib/std/heap.zig` |

#### Lines

Lines ranked by contribution to each function's self size.

##### `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`)

|      % |     Size | Objects | Location                          |
| -----: | -------: | ------: | --------------------------------- |
| 100.0% | 87.2 MiB |   8,898 | `../opt/zig/lib/std/heap.zig:309` |

##### `heap.c_allocator_impl.alloc` (`../opt/zig/lib/std/heap.zig`)

|      % |     Size | Objects | Location                          |
| -----: | -------: | ------: | --------------------------------- |
| 100.0% | 1.99 MiB |  20,697 | `../opt/zig/lib/std/heap.zig:232` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`)

|      % |     Size | Objects | Caller                   | Location                               |
| -----: | -------: | ------: | ------------------------ | -------------------------------------- |
| 100.0% | 87.2 MiB |   8,898 | `mem.Allocator.rawRemap` | `../opt/zig/lib/std/mem/Allocator.zig` |

##### `heap.c_allocator_impl.alloc` (`../opt/zig/lib/std/heap.zig`)

|      % |     Size | Objects | Caller                   | Location                               |
| -----: | -------: | ------: | ------------------------ | -------------------------------------- |
| 100.0% | 1.99 MiB |  20,697 | `mem.Allocator.rawAlloc` | `../opt/zig/lib/std/mem/Allocator.zig` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Objects | Function                                          | Location                                            |
| ----: | -------: | ------: | ------------------------------------------------- | --------------------------------------------------- |
| 98.2% | 87.6 MiB |  28,961 | `profile.main`                                    | `profile.zig`                                       |
| 97.9% | 87.4 MiB |  28,841 | `start.callMain`                                  | `../opt/zig/lib/std/start.zig`                      |
| 97.9% | 87.4 MiB |  28,841 | `start.callMainWithArgs`                          | `../opt/zig/lib/std/start.zig`                      |
| 97.9% | 87.4 MiB |  28,841 | `start.main`                                      | `../opt/zig/lib/std/start.zig`                      |
| 97.8% | 87.2 MiB |   8,922 | `mem.Allocator.rawRemap`                          | `../opt/zig/lib/std/mem/Allocator.zig`              |
| 97.8% | 87.2 MiB |   8,898 | `heap.c_allocator_impl.remap`                     | `../opt/zig/lib/std/heap.zig`                       |
| 97.6% |   87 MiB |  27,926 | `_start`                                          | `../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
| 89.3% | 79.7 MiB |   7,812 | `Io.Writer.Allocating.ensureTotalCapacity`        | `../opt/zig/lib/std/Io/Writer.zig`                  |
| 89.3% | 79.7 MiB |   7,812 | `Io.Writer.Allocating.ensureUnusedCapacity`       | `../opt/zig/lib/std/Io/Writer.zig`                  |
| 89.3% | 79.7 MiB |   7,812 | `Io.Writer.Allocating.drain`                      | `../opt/zig/lib/std/Io/Writer.zig`                  |
| 89.3% | 79.7 MiB |   7,792 | `Io.Writer.Allocating.ensureTotalCapacityPrecise` | `../opt/zig/lib/std/Io/Writer.zig`                  |
| 89.3% | 79.7 MiB |  24,496 | `zig.Ast.Render.renderTree`                       | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| 89.3% | 79.7 MiB |  24,496 | `zig.Ast.render`                                  | `../opt/zig/lib/std/zig/Ast.zig`                    |
| 89.3% | 79.7 MiB |  24,496 | `zig.Ast.renderAlloc`                             | `../opt/zig/lib/std/zig/Ast.zig`                    |
| 89.3% | 79.6 MiB |  24,422 | `zig.Ast.Render.renderMembers`                    | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| 86.3% |   77 MiB |  22,700 | `zig.Ast.Render.renderExpression`                 | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| 83.7% | 74.7 MiB |  21,780 | `zig.Ast.Render.renderMember`                     | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| 83.2% | 74.2 MiB |   7,271 | `zig.Ast.Render.renderToken`                      | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| 68.5% | 61.1 MiB |   7,068 | `zig.Ast.Render.AutoIndentingStream.writeAll`     | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| 67.5% | 60.2 MiB |   6,628 | `Io.Writer.write`                                 | `../opt/zig/lib/std/Io/Writer.zig`                  |

#### Categories

##### Standard library

|     % |     Size | Objects | Function                                          | Location                                            |
| ----: | -------: | ------: | ------------------------------------------------- | --------------------------------------------------- |
| 97.9% | 87.4 MiB |  28,841 | `start.callMain`                                  | `../opt/zig/lib/std/start.zig`                      |
| 97.9% | 87.4 MiB |  28,841 | `start.callMainWithArgs`                          | `../opt/zig/lib/std/start.zig`                      |
| 97.9% | 87.4 MiB |  28,841 | `start.main`                                      | `../opt/zig/lib/std/start.zig`                      |
| 97.8% | 87.2 MiB |   8,922 | `mem.Allocator.rawRemap`                          | `../opt/zig/lib/std/mem/Allocator.zig`              |
| 97.8% | 87.2 MiB |   8,898 | `heap.c_allocator_impl.remap`                     | `../opt/zig/lib/std/heap.zig`                       |
| 97.6% |   87 MiB |  27,926 | `_start`                                          | `../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
| 89.3% | 79.7 MiB |   7,812 | `Io.Writer.Allocating.ensureTotalCapacity`        | `../opt/zig/lib/std/Io/Writer.zig`                  |
| 89.3% | 79.7 MiB |   7,812 | `Io.Writer.Allocating.ensureUnusedCapacity`       | `../opt/zig/lib/std/Io/Writer.zig`                  |
| 89.3% | 79.7 MiB |   7,812 | `Io.Writer.Allocating.drain`                      | `../opt/zig/lib/std/Io/Writer.zig`                  |
| 89.3% | 79.7 MiB |   7,792 | `Io.Writer.Allocating.ensureTotalCapacityPrecise` | `../opt/zig/lib/std/Io/Writer.zig`                  |
| 89.3% | 79.7 MiB |  24,496 | `zig.Ast.Render.renderTree`                       | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| 89.3% | 79.7 MiB |  24,496 | `zig.Ast.render`                                  | `../opt/zig/lib/std/zig/Ast.zig`                    |
| 89.3% | 79.7 MiB |  24,496 | `zig.Ast.renderAlloc`                             | `../opt/zig/lib/std/zig/Ast.zig`                    |
| 89.3% | 79.6 MiB |  24,422 | `zig.Ast.Render.renderMembers`                    | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| 86.3% |   77 MiB |  22,700 | `zig.Ast.Render.renderExpression`                 | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| 83.7% | 74.7 MiB |  21,780 | `zig.Ast.Render.renderMember`                     | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| 83.2% | 74.2 MiB |   7,271 | `zig.Ast.Render.renderToken`                      | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| 68.5% | 61.1 MiB |   7,068 | `zig.Ast.Render.AutoIndentingStream.writeAll`     | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| 67.5% | 60.2 MiB |   6,628 | `Io.Writer.write`                                 | `../opt/zig/lib/std/Io/Writer.zig`                  |
| 67.5% | 60.2 MiB |   6,628 | `Io.Writer.writeAll`                              | `../opt/zig/lib/std/Io/Writer.zig`                  |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `profile.main` (`profile.zig`)

|     % |     Size | Objects | Callee                | Location                         |
| ----: | -------: | ------: | --------------------- | -------------------------------- |
| 90.9% | 79.7 MiB |  24,496 | `zig.Ast.renderAlloc` | `../opt/zig/lib/std/zig/Ast.zig` |
|  9.1% | 7.96 MiB |   4,465 | `zig.Ast.parse`       | `../opt/zig/lib/std/zig/Ast.zig` |

##### `start.callMain` (`../opt/zig/lib/std/start.zig`)

|      % |     Size | Objects | Callee         | Location                                            |
| -----: | -------: | ------: | -------------- | --------------------------------------------------- |
| 100.0% | 87.4 MiB |  28,841 | `profile.main` | `profile.zig`                                       |
|  <0.1% | 2.17 KiB |      14 | `_start`       | `../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |

##### `start.callMainWithArgs` (`../opt/zig/lib/std/start.zig`)

|      % |     Size | Objects | Callee           | Location                       |
| -----: | -------: | ------: | ---------------- | ------------------------------ |
| 100.0% | 87.4 MiB |  28,841 | `start.callMain` | `../opt/zig/lib/std/start.zig` |

##### `start.main` (`../opt/zig/lib/std/start.zig`)

|      % |     Size | Objects | Callee                   | Location                       |
| -----: | -------: | ------: | ------------------------ | ------------------------------ |
| 100.0% | 87.4 MiB |  28,841 | `start.callMainWithArgs` | `../opt/zig/lib/std/start.zig` |

##### `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`)

|      % |     Size | Objects | Callee                        | Location                                            |
| -----: | -------: | ------: | ----------------------------- | --------------------------------------------------- |
| 100.0% | 87.2 MiB |   8,898 | `heap.c_allocator_impl.remap` | `../opt/zig/lib/std/heap.zig`                       |
|  <0.1% | 3.21 KiB |      24 | `_start`                      | `../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |

##### `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`)

|    % |     Size | Objects | Callee   | Location                                            |
| ---: | -------: | ------: | -------- | --------------------------------------------------- |
| 0.1% | 54.4 KiB |      16 | `_start` | `../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |

##### `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)

|      % |     Size | Objects | Callee       | Location                                            |
| -----: | -------: | ------: | ------------ | --------------------------------------------------- |
| 100.0% |   87 MiB |  27,926 | `start.main` | `../opt/zig/lib/std/start.zig`                      |
|  <0.1% | 1.97 KiB |       6 | `_start`     | `../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |

##### `Io.Writer.Allocating.ensureTotalCapacity` (`../opt/zig/lib/std/Io/Writer.zig`)

|      % |     Size | Objects | Callee                                            | Location                                            |
| -----: | -------: | ------: | ------------------------------------------------- | --------------------------------------------------- |
| 100.0% | 79.7 MiB |   7,792 | `Io.Writer.Allocating.ensureTotalCapacityPrecise` | `../opt/zig/lib/std/Io/Writer.zig`                  |
|  <0.1% | 2.54 KiB |      20 | `_start`                                          | `../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |

##### `Io.Writer.Allocating.ensureUnusedCapacity` (`../opt/zig/lib/std/Io/Writer.zig`)

|      % |     Size | Objects | Callee                                     | Location                           |
| -----: | -------: | ------: | ------------------------------------------ | ---------------------------------- |
| 100.0% | 79.7 MiB |   7,812 | `Io.Writer.Allocating.ensureTotalCapacity` | `../opt/zig/lib/std/Io/Writer.zig` |

##### `Io.Writer.Allocating.drain` (`../opt/zig/lib/std/Io/Writer.zig`)

|      % |     Size | Objects | Callee                                      | Location                           |
| -----: | -------: | ------: | ------------------------------------------- | ---------------------------------- |
| 100.0% | 79.7 MiB |   7,812 | `Io.Writer.Allocating.ensureUnusedCapacity` | `../opt/zig/lib/std/Io/Writer.zig` |

##### `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`)

|     % |     Size | Objects | Callee                   | Location                               |
| ----: | -------: | ------: | ------------------------ | -------------------------------------- |
| 99.6% | 79.3 MiB |   5,342 | `mem.Allocator.rawRemap` | `../opt/zig/lib/std/mem/Allocator.zig` |
|  0.6% |  459 KiB |   2,480 | `mem.Allocator.rawAlloc` | `../opt/zig/lib/std/mem/Allocator.zig` |

##### `zig.Ast.Render.renderTree` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|      % |     Size | Objects | Callee                                      | Location                                |
| -----: | -------: | ------: | ------------------------------------------- | --------------------------------------- |
| 100.0% | 79.6 MiB |  24,422 | `zig.Ast.Render.renderMembers`              | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  <0.1% | 17.4 KiB |      60 | `zig.Ast.Render.renderContainerDocComments` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  <0.1% | 4.13 KiB |      14 | `zig.Ast.Render.renderComments`             | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`)

|      % |     Size | Objects | Callee                      | Location                                |
| -----: | -------: | ------: | --------------------------- | --------------------------------------- |
| 100.0% | 79.7 MiB |  24,496 | `zig.Ast.Render.renderTree` | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.renderAlloc` (`../opt/zig/lib/std/zig/Ast.zig`)

|      % |     Size | Objects | Callee           | Location                         |
| -----: | -------: | ------: | ---------------- | -------------------------------- |
| 100.0% | 79.7 MiB |  24,496 | `zig.Ast.render` | `../opt/zig/lib/std/zig/Ast.zig` |

##### `zig.Ast.Render.renderMembers` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |     Size | Objects | Callee                              | Location                                |
| ----: | -------: | ------: | ----------------------------------- | --------------------------------------- |
| 92.8% | 73.9 MiB |  21,654 | `zig.Ast.Render.renderMember`       | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  7.2% | 5.76 MiB |   2,765 | `zig.Ast.Render.renderExpression`   | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| <0.1% | 1.81 KiB |       3 | `zig.Ast.Render.renderExtraNewline` | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.renderExpression` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |     Size | Objects | Callee                               | Location                                |
| ----: | -------: | ------: | ------------------------------------ | --------------------------------------- |
| 75.2% | 57.9 MiB |  16,847 | `zig.Ast.Render.renderBlock`         | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 45.3% | 34.9 MiB |   6,615 | `zig.Ast.Render.renderContainerDecl` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 42.6% | 32.8 MiB |   8,608 | `zig.Ast.Render.renderExpression`    | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 25.9% |   20 MiB |   3,220 | `zig.Ast.Render.renderExpressions`   | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 24.0% | 18.5 MiB |  11,053 | `zig.Ast.Render.renderParamList`     | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.renderMember` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |     Size | Objects | Callee                                | Location                                |
| ----: | -------: | ------: | ------------------------------------- | --------------------------------------- |
| 71.4% | 53.3 MiB |   9,413 | `zig.Ast.Render.renderExpression`     | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| 47.1% | 35.2 MiB |  13,577 | `zig.Ast.Render.renderVarDecl`        | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  8.9% | 6.62 MiB |     924 | `zig.Ast.Render.renderContainerField` | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  5.7% | 4.22 MiB |     490 | `zig.Ast.Render.renderDocComments`    | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  1.2% |  931 KiB |      53 | `zig.Ast.Render.renderToken`          | `../opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.renderToken` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |     Size | Objects | Callee                                        | Location                                            |
| ----: | -------: | ------: | --------------------------------------------- | --------------------------------------------------- |
| 75.1% | 55.8 MiB |   6,474 | `zig.Ast.Render.AutoIndentingStream.writeAll` | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| 25.8% | 19.2 MiB |     817 | `zig.Ast.Render.renderSpace`                  | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|  0.3% |  254 KiB |     121 | `_start`                                      | `../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |

##### `zig.Ast.Render.AutoIndentingStream.writeAll` (`../opt/zig/lib/std/zig/Ast/Render.zig`)

|     % |     Size | Objects | Callee                                           | Location                                            |
| ----: | -------: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 80.7% | 49.3 MiB |   6,413 | `Io.Writer.writeAll`                             | `../opt/zig/lib/std/Io/Writer.zig`                  |
| 19.3% | 11.8 MiB |     610 | `zig.Ast.Render.AutoIndentingStream.applyIndent` | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
| <0.1% | 5.71 KiB |      45 | `_start`                                         | `../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |

##### `Io.Writer.write` (`../opt/zig/lib/std/Io/Writer.zig`)

|      % |     Size | Objects | Callee                       | Location                           |
| -----: | -------: | ------: | ---------------------------- | ---------------------------------- |
| 100.0% | 60.2 MiB |   6,628 | `Io.Writer.Allocating.drain` | `../opt/zig/lib/std/Io/Writer.zig` |

##### `Io.Writer.writeAll` (`../opt/zig/lib/std/Io/Writer.zig`)

|      % |     Size | Objects | Callee            | Location                           |
| -----: | -------: | ------: | ----------------- | ---------------------------------- |
| 100.0% | 60.2 MiB |   6,628 | `Io.Writer.write` | `../opt/zig/lib/std/Io/Writer.zig` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|     % |     Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----: | -------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 10.3% |  9.2 MiB |      15 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.Allocating.ensureTotalCapacity` ← `Io.Writer.Allocating.ensureUnusedCapacity` ← `Io.Writer.Allocating.drain` ← `Io.Writer.write` ← `Io.Writer.writeAll` ← `Io.Writer.alignBufferOptions` ← `Io.Writer.printValue__anon_6784` ← `Io.Writer.print__anon_4596` ← `zig.Ast.Render.AutoIndentingStream.print__anon_32570` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderComments` ← `zig.Ast.Render.renderSpace` ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderBlock` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderExpressions` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.finishRenderBlock` ← `zig.Ast.Render.renderBlock` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                           |
|  3.1% | 2.81 MiB |      32 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.Allocating.ensureTotalCapacity` ← `Io.Writer.Allocating.ensureUnusedCapacity` ← `Io.Writer.Allocating.drain` ← `Io.Writer.write` ← `Io.Writer.writeAll` ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderIdentifier` ← `zig.Ast.Render.renderParamList` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.finishRenderBlock` ← `zig.Ast.Render.renderBlock` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  2.7% |  2.4 MiB |      44 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.Allocating.ensureTotalCapacity` ← `Io.Writer.Allocating.ensureUnusedCapacity` ← `Io.Writer.Allocating.drain` ← `Io.Writer.write` ← `Io.Writer.writeAll` ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderIdentifier` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  2.2% | 1.96 MiB |      15 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.Allocating.ensureTotalCapacity` ← `Io.Writer.Allocating.ensureUnusedCapacity` ← `Io.Writer.Allocating.drain` ← `Io.Writer.writeSplat` ← `Io.Writer.splatByte` ← `Io.Writer.splatByteAll` ← `zig.Ast.Render.AutoIndentingStream.applyIndent` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.AutoIndentingStream.writeAll` ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.finishRenderBlock` ← `zig.Ast.Render.renderBlock` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderThenElse` ← `zig.Ast.Render.renderFor` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.finishRenderBlock` ← `zig.Ast.Render.renderBlock` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                  |
|  2.2% | 1.94 MiB |     355 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.Allocating.ensureTotalCapacity` ← `Io.Writer.Allocating.ensureUnusedCapacity` ← `Io.Writer.Allocating.drain` ← `Io.Writer.write` ← `Io.Writer.writeAll` ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderDocComments` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  2.2% | 1.93 MiB |      15 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.Allocating.ensureTotalCapacity` ← `Io.Writer.Allocating.ensureUnusedCapacity` ← `Io.Writer.Allocating.drain` ← `Io.Writer.write` ← `Io.Writer.writeAll` ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderIdentifier` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.finishRenderBlock` ← `zig.Ast.Render.renderBlock` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderThenElse` ← `zig.Ast.Render.renderWhile` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.finishRenderBlock` ← `zig.Ast.Render.renderBlock` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                      |
|  1.9% | 1.69 MiB |      15 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.Allocating.ensureTotalCapacity` ← `Io.Writer.Allocating.ensureUnusedCapacity` ← `Io.Writer.Allocating.drain` ← `Io.Writer.write` ← `Io.Writer.writeAll` ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderIdentifier` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderArrayInit` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderParamList` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderExpressions` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderExpressions` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.finishRenderBlock` ← `zig.Ast.Render.renderBlock` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                           |
|  1.8% | 1.63 MiB |      14 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.Allocating.ensureTotalCapacity` ← `Io.Writer.Allocating.ensureUnusedCapacity` ← `Io.Writer.Allocating.drain` ← `Io.Writer.writeByte` ← `zig.Ast.Render.AutoIndentingStream.writeByte` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderSpace` ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderIdentifier` ← `zig.Ast.Render.renderContainerField` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.8% |  1.6 MiB |      15 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.Allocating.ensureTotalCapacity` ← `Io.Writer.Allocating.ensureUnusedCapacity` ← `Io.Writer.Allocating.drain` ← `Io.Writer.write` ← `Io.Writer.writeAll` ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderArrayInit` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.finishRenderBlock` ← `zig.Ast.Render.renderBlock` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderThenElse` ← `zig.Ast.Render.renderWhile` ← `zig.Ast.Render.renderIf` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.finishRenderBlock` ← `zig.Ast.Render.renderBlock` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderThenElse` ← `zig.Ast.Render.renderWhile` ← `zig.Ast.Render.renderIf` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.finishRenderBlock` ← `zig.Ast.Render.renderBlock` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`) ← `zig.Ast.Render.renderThenElse` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderWhile` |
|  1.4% | 1.27 MiB |      30 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.Allocating.ensureTotalCapacity` ← `Io.Writer.Allocating.ensureUnusedCapacity` ← `Io.Writer.Allocating.drain` ← `Io.Writer.writeByte` ← `zig.Ast.Render.AutoIndentingStream.writeByte` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderSpace` ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderFnProto` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.3% | 1.16 MiB |      22 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.Allocating.ensureTotalCapacity` ← `Io.Writer.Allocating.ensureUnusedCapacity` ← `Io.Writer.Allocating.drain` ← `Io.Writer.write` ← `Io.Writer.writeAll` ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderIdentifier` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.finishRenderBlock` ← `zig.Ast.Render.renderBlock` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.2% | 1.08 MiB |      68 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.Allocating.ensureTotalCapacity` ← `Io.Writer.Allocating.ensureUnusedCapacity` ← `Io.Writer.Allocating.drain` ← `Io.Writer.write` ← `Io.Writer.writeAll` ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderIdentifier` ← `zig.Ast.Render.renderContainerField` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.1% | 1001 KiB |      15 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.Allocating.ensureTotalCapacity` ← `Io.Writer.Allocating.ensureUnusedCapacity` ← `Io.Writer.Allocating.drain` ← `Io.Writer.write` ← `Io.Writer.writeAll` ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderParamList` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.finishRenderBlock` ← `zig.Ast.Render.renderBlock` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.1% |  978 KiB |      15 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.Allocating.ensureTotalCapacity` ← `Io.Writer.Allocating.ensureUnusedCapacity` ← `Io.Writer.Allocating.drain` ← `Io.Writer.writeByte` ← `zig.Ast.Render.AutoIndentingStream.writeByte` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderSpace` ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.finishRenderBlock` ← `zig.Ast.Render.renderBlock` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.finishRenderBlock` ← `zig.Ast.Render.renderBlock` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.1% |  969 KiB |     660 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `mem.Allocator.remap__anon_32898` ← `array_list.Aligned(u32,null).ensureTotalCapacityPrecise` (`../opt/zig/lib/std/array_list.zig`) ← `array_list.Aligned(u32,null).ensureTotalCapacity` ← `array_list.Aligned(u32,null).ensureUnusedCapacity` ← `zig.Parse.addExtra__anon_35041` (`../opt/zig/lib/std/zig/Parse.zig`) ← `zig.Parse.parseFnProto` ← `zig.Parse.expectTopLevelDecl` ← `zig.Parse.expectTopLevelDeclRecoverable` ← `zig.Parse.parseContainerMembers` ← `zig.Parse.parseRoot` ← `zig.Ast.parseTokens` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.parse` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.0% |  943 KiB |       8 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.Allocating.ensureTotalCapacity` ← `Io.Writer.Allocating.ensureUnusedCapacity` ← `Io.Writer.Allocating.drain` ← `Io.Writer.write` ← `Io.Writer.writeAll` ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderParamList` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderExpressionFixup` ← `zig.Ast.Render.renderStructInit` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.finishRenderBlock` ← `zig.Ast.Render.renderBlock` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.0% |  941 KiB |      15 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.Allocating.ensureTotalCapacity` ← `Io.Writer.Allocating.ensureUnusedCapacity` ← `Io.Writer.Allocating.drain` ← `Io.Writer.write` ← `Io.Writer.writeAll` ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderIdentifier` ← `zig.Ast.Render.renderParamList` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.finishRenderBlock` ← `zig.Ast.Render.renderBlock` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderContainerDecl` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderVarDeclWithoutFixups` ← `zig.Ast.Render.renderVarDecl` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`) ← `zig.Ast.tokenSlice` (`../opt/zig/lib/std/zig/Ast.zig`)                                                                                                                                                                                                                                                                                                                                                      |
|  1.0% |  911 KiB |      15 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.Allocating.ensureTotalCapacity` ← `Io.Writer.Allocating.ensureUnusedCapacity` ← `Io.Writer.Allocating.drain` ← `Io.Writer.write` ← `Io.Writer.writeAll` ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.finishRenderBlock` ← `zig.Ast.Render.renderBlock` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderThenElse` ← `zig.Ast.Render.renderWhile` ← `zig.Ast.Render.renderIf` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.finishRenderBlock` ← `zig.Ast.Render.renderBlock` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.0% |  911 KiB |      15 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.Allocating.ensureTotalCapacity` ← `Io.Writer.Allocating.ensureUnusedCapacity` ← `Io.Writer.Allocating.drain` ← `Io.Writer.write` ← `Io.Writer.writeAll` ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderIdentifier` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderWhile` ← `zig.Ast.Render.renderIf` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.finishRenderBlock` ← `zig.Ast.Render.renderBlock` ← `zig.Ast.Render.renderExpression` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  1.0% |  896 KiB |      20 | `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`) ← `mem.Allocator.rawRemap` (`../opt/zig/lib/std/mem/Allocator.zig`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`../opt/zig/lib/std/Io/Writer.zig`) ← `Io.Writer.Allocating.ensureTotalCapacity` ← `Io.Writer.Allocating.ensureUnusedCapacity` ← `Io.Writer.Allocating.drain` ← `Io.Writer.write` ← `Io.Writer.writeAll` ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`../opt/zig/lib/std/zig/Ast/Render.zig`) ← `zig.Ast.Render.renderToken` ← `zig.Ast.Render.renderMember` ← `zig.Ast.Render.renderMembers` ← `zig.Ast.Render.renderTree` ← `zig.Ast.render` (`../opt/zig/lib/std/zig/Ast.zig`) ← `zig.Ast.renderAlloc` ← `profile.main` (`profile.zig`) ← `start.callMain` (`../opt/zig/lib/std/start.zig`) ← `start.callMainWithArgs` ← `start.main` ← `_start` (`../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

# Retained heap profile

Retained 0 B over 0 objects.

No bytes retained in any object.
