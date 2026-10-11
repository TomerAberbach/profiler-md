# Allocated heap profile diff

Allocated 224 MiB → 301 MiB (+76.638 MiB, +34.1%) over 56,362 objects → 51,311 objects (4.08 KiB → 6.01 KiB per object).

| Category         | Change |       Delta |      % |              Size |         Objects |
| ---------------- | -----: | ----------: | -----: | ----------------: | --------------: |
| Standard library | +34.1% | +76.638 MiB | 100.0% | 224 MiB → 301 MiB | 56,362 → 51,311 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

##### Standard library

| Change |        Delta |            % |           Size |    Objects | Function                      | Location                    |
| -----: | -----------: | -----------: | -------------: | ---------: | ----------------------------- | --------------------------- |
|    new | +224.254 MiB | 0.0% → 74.5% |  0 B → 224 MiB | 0 → 42,029 | `heap.c_allocator_impl.alloc` | `/opt/zig/lib/std/heap.zig` |
|    new |  +76.877 MiB | 0.0% → 25.5% | 0 B → 76.9 MiB |  0 → 9,282 | `heap.c_allocator_impl.remap` | `/opt/zig/lib/std/heap.zig` |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

##### Standard library

|  Change |        Delta |             % |          Size |    Objects | Function                       | Location                    |
| ------: | -----------: | ------------: | ------------: | ---------: | ------------------------------ | --------------------------- |
| removed | -224.492 MiB | 100.0% → 0.0% | 224 MiB → 0 B | 56,362 → 0 | `heap.CAllocator.alignedAlloc` | `/opt/zig/lib/std/heap.zig` |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `heap.c_allocator_impl.alloc` (`/opt/zig/lib/std/heap.zig`)

| Change |        Delta |             % |          Size |    Objects | Location                        |
| -----: | -----------: | ------------: | ------------: | ---------: | ------------------------------- |
|    new | +224.254 MiB | 0.0% → 100.0% | 0 B → 224 MiB | 0 → 42,029 | `/opt/zig/lib/std/heap.zig:232` |

##### `heap.c_allocator_impl.remap` (`/opt/zig/lib/std/heap.zig`)

| Change |       Delta |             % |           Size |   Objects | Location                        |
| -----: | ----------: | ------------: | -------------: | --------: | ------------------------------- |
|    new | +76.877 MiB | 0.0% → 100.0% | 0 B → 76.9 MiB | 0 → 9,282 | `/opt/zig/lib/std/heap.zig:309` |

##### `heap.CAllocator.alignedAlloc` (`/opt/zig/lib/std/heap.zig`)

|  Change |        Delta |             % |          Size |    Objects | Location                        |
| ------: | -----------: | ------------: | ------------: | ---------: | ------------------------------- |
| removed | -224.492 MiB | 100.0% → 0.0% | 224 MiB → 0 B | 56,362 → 0 | `/opt/zig/lib/std/heap.zig:165` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `heap.c_allocator_impl.alloc` (`/opt/zig/lib/std/heap.zig`)

| Change |        Delta |             % |          Size |    Objects | Caller                   | Location                             |
| -----: | -----------: | ------------: | ------------: | ---------: | ------------------------ | ------------------------------------ |
|    new | +224.254 MiB | 0.0% → 100.0% | 0 B → 224 MiB | 0 → 42,014 | `mem.Allocator.rawAlloc` | `/opt/zig/lib/std/mem/Allocator.zig` |

##### `heap.c_allocator_impl.remap` (`/opt/zig/lib/std/heap.zig`)

| Change |       Delta |             % |           Size |   Objects | Caller                   | Location                             |
| -----: | ----------: | ------------: | -------------: | --------: | ------------------------ | ------------------------------------ |
|    new | +76.877 MiB | 0.0% → 100.0% | 0 B → 76.9 MiB | 0 → 9,282 | `mem.Allocator.rawRemap` | `/opt/zig/lib/std/mem/Allocator.zig` |

##### `heap.CAllocator.alignedAlloc` (`/opt/zig/lib/std/heap.zig`)

|  Change |        Delta |             % |          Size |    Objects | Caller                  | Location                    |
| ------: | -----------: | ------------: | ------------: | ---------: | ----------------------- | --------------------------- |
| removed | -224.492 MiB | 100.0% → 0.0% | 224 MiB → 0 B | 56,362 → 0 | `heap.CAllocator.alloc` | `/opt/zig/lib/std/heap.zig` |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|    Change |        Delta |             % |               Size |         Objects | Function                                                                              | Location                                          |
| --------: | -----------: | ------------: | -----------------: | --------------: | ------------------------------------------------------------------------------------- | ------------------------------------------------- |
|       new |   +299.3 MiB |  0.0% → 99.4% |      0 B → 299 MiB |      0 → 50,531 | `start.main`                                                                          | `/opt/zig/lib/std/start.zig`                      |
|       new | +224.254 MiB |  0.0% → 74.5% |      0 B → 224 MiB |      0 → 42,029 | `heap.c_allocator_impl.alloc`                                                         | `/opt/zig/lib/std/heap.zig`                       |
| +16396.1% | +220.169 MiB |  0.6% → 73.6% | 1.34 MiB → 222 MiB |  16,963 → 8,355 | `mem.Allocator.allocBytesWithAlignment__anon_10001`                                   | `/opt/zig/lib/std/mem/Allocator.zig`              |
|  +1318.5% | +206.264 MiB |  7.0% → 73.7% | 15.6 MiB → 222 MiB |     911 → 8,019 | `0xaaaaaaaaaaaaaaa9`                                                                  | `<unknown>`                                       |
|   +318.0% | +168.385 MiB | 23.6% → 73.5% | 52.9 MiB → 221 MiB |   2,305 → 7,875 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).setCapacity`         | `/opt/zig/lib/std/multi_array_list.zig`           |
|   +318.0% | +168.385 MiB | 23.6% → 73.5% | 52.9 MiB → 221 MiB |   2,305 → 7,875 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).ensureTotalCapacity` | `/opt/zig/lib/std/multi_array_list.zig`           |
|   +217.6% |  +151.71 MiB | 31.1% → 73.5% | 69.7 MiB → 221 MiB |   2,526 → 7,894 | `mem.Allocator.allocWithSizeAndAlignment__anon_9851`                                  | `/opt/zig/lib/std/mem/Allocator.zig`              |
|   +217.6% |  +151.71 MiB | 31.1% → 73.5% | 69.7 MiB → 221 MiB |   2,526 → 7,894 | `mem.Allocator.alignedAlloc__anon_9848`                                               | `/opt/zig/lib/std/mem/Allocator.zig`              |
|   +188.5% | +149.954 MiB | 35.4% → 76.2% | 79.5 MiB → 229 MiB |  8,893 → 11,492 | `zig.Ast.parse`                                                                       | `/opt/zig/lib/std/zig/Ast.zig`                    |
|    +40.7% |  +86.554 MiB | 94.6% → 99.3% |  212 MiB → 299 MiB | 54,605 → 49,736 | `_start`                                                                              | `/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
|    +40.6% |  +86.429 MiB | 94.7% → 99.3% |  213 MiB → 299 MiB | 54,740 → 50,051 | `0x27817`                                                                             | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|    +39.6% |  +84.836 MiB | 95.5% → 99.4% |  214 MiB → 299 MiB | 55,132 → 50,531 | `start.callMain`                                                                      | `/opt/zig/lib/std/start.zig`                      |
|    +39.6% |  +84.836 MiB | 95.5% → 99.4% |  214 MiB → 299 MiB | 55,132 → 50,531 | `start.callMainWithArgs`                                                              | `/opt/zig/lib/std/start.zig`                      |
|    +39.5% |  +84.786 MiB | 95.5% → 99.4% |  214 MiB → 299 MiB | 54,980 → 50,321 | `0x27743`                                                                             | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|    +39.3% |  +84.482 MiB | 95.8% → 99.5% |  215 MiB → 300 MiB | 55,342 → 50,651 | `profile.main`                                                                        | `./profile.zig`                                   |
|       new |  +76.877 MiB |  0.0% → 25.5% |     0 B → 76.9 MiB |       0 → 9,282 | `heap.c_allocator_impl.remap`                                                         | `/opt/zig/lib/std/heap.zig`                       |
|       new |  +76.877 MiB |  0.0% → 25.5% |     0 B → 76.9 MiB |       0 → 9,282 | `mem.Allocator.rawRemap`                                                              | `/opt/zig/lib/std/mem/Allocator.zig`              |
|       new |  +70.122 MiB |  0.0% → 23.3% |     0 B → 70.1 MiB |      0 → 15,888 | `Io.Writer.Allocating.ensureTotalCapacity`                                            | `/opt/zig/lib/std/Io/Writer.zig`                  |
|       new |  +70.122 MiB |  0.0% → 23.3% |     0 B → 70.1 MiB |      0 → 15,888 | `Io.Writer.Allocating.ensureUnusedCapacity`                                           | `/opt/zig/lib/std/Io/Writer.zig`                  |
|       new |  +70.117 MiB |  0.0% → 23.3% |     0 B → 70.1 MiB |      0 → 15,855 | `Io.Writer.Allocating.ensureTotalCapacityPrecise`                                     | `/opt/zig/lib/std/Io/Writer.zig`                  |

##### Standard library

|    Change |        Delta |             % |               Size |         Objects | Function                                                                              | Location                                          |
| --------: | -----------: | ------------: | -----------------: | --------------: | ------------------------------------------------------------------------------------- | ------------------------------------------------- |
|       new |   +299.3 MiB |  0.0% → 99.4% |      0 B → 299 MiB |      0 → 50,531 | `start.main`                                                                          | `/opt/zig/lib/std/start.zig`                      |
|       new | +224.254 MiB |  0.0% → 74.5% |      0 B → 224 MiB |      0 → 42,029 | `heap.c_allocator_impl.alloc`                                                         | `/opt/zig/lib/std/heap.zig`                       |
| +16396.1% | +220.169 MiB |  0.6% → 73.6% | 1.34 MiB → 222 MiB |  16,963 → 8,355 | `mem.Allocator.allocBytesWithAlignment__anon_10001`                                   | `/opt/zig/lib/std/mem/Allocator.zig`              |
|   +318.0% | +168.385 MiB | 23.6% → 73.5% | 52.9 MiB → 221 MiB |   2,305 → 7,875 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).setCapacity`         | `/opt/zig/lib/std/multi_array_list.zig`           |
|   +318.0% | +168.385 MiB | 23.6% → 73.5% | 52.9 MiB → 221 MiB |   2,305 → 7,875 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).ensureTotalCapacity` | `/opt/zig/lib/std/multi_array_list.zig`           |
|   +217.6% |  +151.71 MiB | 31.1% → 73.5% | 69.7 MiB → 221 MiB |   2,526 → 7,894 | `mem.Allocator.allocWithSizeAndAlignment__anon_9851`                                  | `/opt/zig/lib/std/mem/Allocator.zig`              |
|   +217.6% |  +151.71 MiB | 31.1% → 73.5% | 69.7 MiB → 221 MiB |   2,526 → 7,894 | `mem.Allocator.alignedAlloc__anon_9848`                                               | `/opt/zig/lib/std/mem/Allocator.zig`              |
|   +188.5% | +149.954 MiB | 35.4% → 76.2% | 79.5 MiB → 229 MiB |  8,893 → 11,492 | `zig.Ast.parse`                                                                       | `/opt/zig/lib/std/zig/Ast.zig`                    |
|    +40.7% |  +86.554 MiB | 94.6% → 99.3% |  212 MiB → 299 MiB | 54,605 → 49,736 | `_start`                                                                              | `/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
|    +39.6% |  +84.836 MiB | 95.5% → 99.4% |  214 MiB → 299 MiB | 55,132 → 50,531 | `start.callMain`                                                                      | `/opt/zig/lib/std/start.zig`                      |
|    +39.6% |  +84.836 MiB | 95.5% → 99.4% |  214 MiB → 299 MiB | 55,132 → 50,531 | `start.callMainWithArgs`                                                              | `/opt/zig/lib/std/start.zig`                      |
|       new |  +76.877 MiB |  0.0% → 25.5% |     0 B → 76.9 MiB |       0 → 9,282 | `heap.c_allocator_impl.remap`                                                         | `/opt/zig/lib/std/heap.zig`                       |
|       new |  +76.877 MiB |  0.0% → 25.5% |     0 B → 76.9 MiB |       0 → 9,282 | `mem.Allocator.rawRemap`                                                              | `/opt/zig/lib/std/mem/Allocator.zig`              |
|       new |  +70.122 MiB |  0.0% → 23.3% |     0 B → 70.1 MiB |      0 → 15,888 | `Io.Writer.Allocating.ensureTotalCapacity`                                            | `/opt/zig/lib/std/Io/Writer.zig`                  |
|       new |  +70.122 MiB |  0.0% → 23.3% |     0 B → 70.1 MiB |      0 → 15,888 | `Io.Writer.Allocating.ensureUnusedCapacity`                                           | `/opt/zig/lib/std/Io/Writer.zig`                  |
|       new |  +70.117 MiB |  0.0% → 23.3% |     0 B → 70.1 MiB |      0 → 15,855 | `Io.Writer.Allocating.ensureTotalCapacityPrecise`                                     | `/opt/zig/lib/std/Io/Writer.zig`                  |
|  +6917.9% |  +44.916 MiB |  0.3% → 15.1% | 665 KiB → 45.6 MiB |     66 → 16,268 | `zig.Ast.Render.renderBlock`                                                          | `/opt/zig/lib/std/zig/Ast/Render.zig`             |
|       new |   +8.164 MiB |   0.0% → 2.7% |     0 B → 8.16 MiB |       0 → 3,617 | `zig.Ast.parseTokens`                                                                 | `/opt/zig/lib/std/zig/Ast.zig`                    |
|       new |   +7.715 MiB |   0.0% → 2.6% |     0 B → 7.72 MiB |       0 → 2,539 | `mem.Allocator.remap__anon_32898`                                                     | `/opt/zig/lib/std/mem/Allocator.zig`              |
|   +974.7% |   +4.027 MiB |   0.2% → 1.5% | 423 KiB → 4.44 MiB |     201 → 2,097 | `zig.Ast.Render.renderFor`                                                            | `/opt/zig/lib/std/zig/Ast/Render.zig`             |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |         Objects | Function                                                        | Location                              |
| ------: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------------- | ------------------------------------- |
| removed | -224.492 MiB | 100.0% → 0.0% |       224 MiB → 0 B |      56,362 → 0 | `heap.CAllocator.alignedAlloc`                                  | `/opt/zig/lib/std/heap.zig`           |
| removed | -224.492 MiB | 100.0% → 0.0% |       224 MiB → 0 B |      56,362 → 0 | `heap.CAllocator.alloc`                                         | `/opt/zig/lib/std/heap.zig`           |
| removed | -214.464 MiB |  95.5% → 0.0% |       214 MiB → 0 B |      55,132 → 0 | `main`                                                          | `/opt/zig/lib/std/start.zig`          |
|  -99.7% | -142.671 MiB |  63.7% → 0.1% |   143 MiB → 415 KiB | 28,392 → 15,527 | `mem.Allocator.allocWithSizeAndAlignment__anon_10624`           | `/opt/zig/lib/std/mem/Allocator.zig`  |
|  -99.3% | -142.331 MiB |  63.8% → 0.3% |   143 MiB → 995 KiB |  30,251 → 7,837 | `mem.Allocator.allocBytesWithAlignment__anon_8636`              | `/opt/zig/lib/std/mem/Allocator.zig`  |
|  -99.3% | -142.006 MiB |  63.7% → 0.3% |   143 MiB → 995 KiB |  22,768 → 7,837 | `mem.Allocator.alignedAlloc__anon_31630`                        | `/opt/zig/lib/std/mem/Allocator.zig`  |
| removed | -111.925 MiB |  49.9% → 0.0% |       112 MiB → 0 B |      21,398 → 0 | `array_list.Aligned(u8,null).ensureUnusedCapacity`              | `/opt/zig/lib/std/array_list.zig`     |
| removed | -111.925 MiB |  49.9% → 0.0% |       112 MiB → 0 B |      21,383 → 0 | `array_list.Aligned(u8,null).ensureTotalCapacityPrecise`        | `/opt/zig/lib/std/array_list.zig`     |
| removed | -111.925 MiB |  49.9% → 0.0% |       112 MiB → 0 B |      21,383 → 0 | `array_list.Aligned(u8,null).ensureTotalCapacity`               | `/opt/zig/lib/std/array_list.zig`     |
|  -99.4% |  -79.363 MiB |  35.6% → 0.2% |  79.8 MiB → 495 KiB |  9,148 → 16,067 | `mem.Allocator.allocBytesWithAlignment__anon_7893`              | `/opt/zig/lib/std/mem/Allocator.zig`  |
| removed |  -52.945 MiB |  23.6% → 0.0% |      52.9 MiB → 0 B |       2,305 → 0 | `0xffffe609d1df`                                                | `<unknown>`                           |
|  -37.3% |  -41.802 MiB | 49.9% → 23.3% |  112 MiB → 70.1 MiB | 21,389 → 15,888 | `Io.Writer.Allocating.drain`                                    | `/opt/zig/lib/std/Io/Writer.zig`      |
|  -36.6% |  -36.354 MiB | 44.2% → 20.9% | 99.3 MiB → 62.9 MiB | 20,164 → 14,962 | `zig.Ast.Render.AutoIndentingStream.writeAll`                   | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|  -32.9% |  -34.422 MiB | 46.5% → 23.3% |  104 MiB → 70.1 MiB | 45,055 → 39,158 | `zig.Ast.Render.renderTree`                                     | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|  -32.9% |  -34.422 MiB | 46.5% → 23.3% |  104 MiB → 70.1 MiB | 45,055 → 39,158 | `zig.Ast.render`                                                | `/opt/zig/lib/std/zig/Ast.zig`        |
|  -32.9% |  -34.422 MiB | 46.5% → 23.3% |  104 MiB → 70.1 MiB | 45,055 → 39,158 | `zig.Ast.renderAlloc`                                           | `/opt/zig/lib/std/zig/Ast.zig`        |
|  -33.1% |  -34.399 MiB | 46.4% → 23.1% |  104 MiB → 69.7 MiB | 44,274 → 38,865 | `zig.Ast.Render.renderMembers`                                  | `/opt/zig/lib/std/zig/Ast/Render.zig` |
| removed |  -31.053 MiB |  13.8% → 0.0% |      31.1 MiB → 0 B |       1,385 → 0 | `array_list.AlignedManaged(u8,null).ensureTotalCapacityPrecise` | `/opt/zig/lib/std/array_list.zig`     |
| removed |  -31.053 MiB |  13.8% → 0.0% |      31.1 MiB → 0 B |       1,385 → 0 | `fs.File.readToEndAllocOptions__anon_2451`                      | `/opt/zig/lib/std/fs/File.zig`        |
| removed |  -31.053 MiB |  13.8% → 0.0% |      31.1 MiB → 0 B |       1,385 → 0 | `fs.Dir.readFileAllocOptions__anon_2384`                        | `/opt/zig/lib/std/fs/Dir.zig`         |

##### Standard library

|  Change |        Delta |             % |                Size |         Objects | Function                                                        | Location                              |
| ------: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------------- | ------------------------------------- |
| removed | -224.492 MiB | 100.0% → 0.0% |       224 MiB → 0 B |      56,362 → 0 | `heap.CAllocator.alignedAlloc`                                  | `/opt/zig/lib/std/heap.zig`           |
| removed | -224.492 MiB | 100.0% → 0.0% |       224 MiB → 0 B |      56,362 → 0 | `heap.CAllocator.alloc`                                         | `/opt/zig/lib/std/heap.zig`           |
| removed | -214.464 MiB |  95.5% → 0.0% |       214 MiB → 0 B |      55,132 → 0 | `main`                                                          | `/opt/zig/lib/std/start.zig`          |
|  -99.7% | -142.671 MiB |  63.7% → 0.1% |   143 MiB → 415 KiB | 28,392 → 15,527 | `mem.Allocator.allocWithSizeAndAlignment__anon_10624`           | `/opt/zig/lib/std/mem/Allocator.zig`  |
|  -99.3% | -142.331 MiB |  63.8% → 0.3% |   143 MiB → 995 KiB |  30,251 → 7,837 | `mem.Allocator.allocBytesWithAlignment__anon_8636`              | `/opt/zig/lib/std/mem/Allocator.zig`  |
|  -99.3% | -142.006 MiB |  63.7% → 0.3% |   143 MiB → 995 KiB |  22,768 → 7,837 | `mem.Allocator.alignedAlloc__anon_31630`                        | `/opt/zig/lib/std/mem/Allocator.zig`  |
| removed | -111.925 MiB |  49.9% → 0.0% |       112 MiB → 0 B |      21,398 → 0 | `array_list.Aligned(u8,null).ensureUnusedCapacity`              | `/opt/zig/lib/std/array_list.zig`     |
| removed | -111.925 MiB |  49.9% → 0.0% |       112 MiB → 0 B |      21,383 → 0 | `array_list.Aligned(u8,null).ensureTotalCapacityPrecise`        | `/opt/zig/lib/std/array_list.zig`     |
| removed | -111.925 MiB |  49.9% → 0.0% |       112 MiB → 0 B |      21,383 → 0 | `array_list.Aligned(u8,null).ensureTotalCapacity`               | `/opt/zig/lib/std/array_list.zig`     |
|  -99.4% |  -79.363 MiB |  35.6% → 0.2% |  79.8 MiB → 495 KiB |  9,148 → 16,067 | `mem.Allocator.allocBytesWithAlignment__anon_7893`              | `/opt/zig/lib/std/mem/Allocator.zig`  |
|  -37.3% |  -41.802 MiB | 49.9% → 23.3% |  112 MiB → 70.1 MiB | 21,389 → 15,888 | `Io.Writer.Allocating.drain`                                    | `/opt/zig/lib/std/Io/Writer.zig`      |
|  -36.6% |  -36.354 MiB | 44.2% → 20.9% | 99.3 MiB → 62.9 MiB | 20,164 → 14,962 | `zig.Ast.Render.AutoIndentingStream.writeAll`                   | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|  -32.9% |  -34.422 MiB | 46.5% → 23.3% |  104 MiB → 70.1 MiB | 45,055 → 39,158 | `zig.Ast.Render.renderTree`                                     | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|  -32.9% |  -34.422 MiB | 46.5% → 23.3% |  104 MiB → 70.1 MiB | 45,055 → 39,158 | `zig.Ast.render`                                                | `/opt/zig/lib/std/zig/Ast.zig`        |
|  -32.9% |  -34.422 MiB | 46.5% → 23.3% |  104 MiB → 70.1 MiB | 45,055 → 39,158 | `zig.Ast.renderAlloc`                                           | `/opt/zig/lib/std/zig/Ast.zig`        |
|  -33.1% |  -34.399 MiB | 46.4% → 23.1% |  104 MiB → 69.7 MiB | 44,274 → 38,865 | `zig.Ast.Render.renderMembers`                                  | `/opt/zig/lib/std/zig/Ast/Render.zig` |
| removed |  -31.053 MiB |  13.8% → 0.0% |      31.1 MiB → 0 B |       1,385 → 0 | `array_list.AlignedManaged(u8,null).ensureTotalCapacityPrecise` | `/opt/zig/lib/std/array_list.zig`     |
| removed |  -31.053 MiB |  13.8% → 0.0% |      31.1 MiB → 0 B |       1,385 → 0 | `fs.File.readToEndAllocOptions__anon_2451`                      | `/opt/zig/lib/std/fs/File.zig`        |
| removed |  -31.053 MiB |  13.8% → 0.0% |      31.1 MiB → 0 B |       1,385 → 0 | `fs.Dir.readFileAllocOptions__anon_2384`                        | `/opt/zig/lib/std/fs/Dir.zig`         |
|  -42.2% |  -30.785 MiB | 32.5% → 14.0% | 72.9 MiB → 42.1 MiB | 19,401 → 16,205 | `zig.Ast.Render.finishRenderBlock`                              | `/opt/zig/lib/std/zig/Ast/Render.zig` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `start.main` (`/opt/zig/lib/std/start.zig`)

| Change |      Delta |             % |          Size |    Objects | Callee                   | Location                     |
| -----: | ---------: | ------------: | ------------: | ---------: | ------------------------ | ---------------------------- |
|    new | +299.3 MiB | 0.0% → 100.0% | 0 B → 299 MiB | 0 → 50,531 | `start.callMainWithArgs` | `/opt/zig/lib/std/start.zig` |

##### `heap.c_allocator_impl.alloc` (`/opt/zig/lib/std/heap.zig`)

| Change |      Delta |            % |           Size | Objects | Callee   | Location                                          |
| -----: | ---------: | -----------: | -------------: | ------: | -------- | ------------------------------------------------- |
|    new | +1.968 KiB | 0.0% → <0.1% | 0 B → 1.97 KiB |  0 → 14 | `_start` | `/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |

##### `mem.Allocator.allocBytesWithAlignment__anon_10001` (`/opt/zig/lib/std/mem/Allocator.zig`)

|    Change |        Delta |      % |               Size |        Objects | Callee                   | Location                             |
| --------: | -----------: | -----: | -----------------: | -------------: | ------------------------ | ------------------------------------ |
| +16396.1% | +220.169 MiB | 100.0% | 1.34 MiB → 222 MiB | 16,963 → 8,355 | `mem.Allocator.rawAlloc` | `/opt/zig/lib/std/mem/Allocator.zig` |

##### `0xaaaaaaaaaaaaaaa9` (`<unknown>`)

|     Change |        Delta |            % |               Size |     Objects | Callee               | Location                                          |
| ---------: | -----------: | -----------: | -----------------: | ----------: | -------------------- | ------------------------------------------------- |
|  +70616.6% | +221.345 MiB | 2.0% → 99.9% |  321 KiB → 222 MiB | 327 → 7,961 | `_start`             | `/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
| +448727.7% | +221.296 MiB | 0.3% → 99.7% | 50.5 KiB → 221 MiB | 224 → 7,905 | `0xaaaaaaaaaaaaaaa9` | `<unknown>`                                       |
|    removed |  -12.172 MiB | 77.8% → 0.0% |     12.2 MiB → 0 B |      30 → 0 | `0x5176`             | `<unknown>`                                       |
|    removed |    -1.15 MiB |  7.4% → 0.0% |     1.15 MiB → 0 B |      75 → 0 | `0x2c8`              | `<unknown>`                                       |
|    removed | -377.695 KiB |  2.4% → 0.0% |      378 KiB → 0 B |      75 → 0 | `0xba`               | `<unknown>`                                       |

##### `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).setCapacity` (`/opt/zig/lib/std/multi_array_list.zig`)

|  Change |        Delta |      % |               Size |       Objects | Callee                                  | Location                             |
| ------: | -----------: | -----: | -----------------: | ------------: | --------------------------------------- | ------------------------------------ |
| +318.0% | +168.385 MiB | 100.0% | 52.9 MiB → 221 MiB | 2,305 → 7,875 | `mem.Allocator.alignedAlloc__anon_9848` | `/opt/zig/lib/std/mem/Allocator.zig` |

##### `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).ensureTotalCapacity` (`/opt/zig/lib/std/multi_array_list.zig`)

|  Change |        Delta |      % |               Size |       Objects | Callee                                                                        | Location                                |
| ------: | -----------: | -----: | -----------------: | ------------: | ----------------------------------------------------------------------------- | --------------------------------------- |
| +318.0% | +168.385 MiB | 100.0% | 52.9 MiB → 221 MiB | 2,305 → 7,875 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).setCapacity` | `/opt/zig/lib/std/multi_array_list.zig` |

##### `mem.Allocator.allocWithSizeAndAlignment__anon_9851` (`/opt/zig/lib/std/mem/Allocator.zig`)

|  Change |        Delta |             % |           Size |   Objects | Callee                                              | Location                             |
| ------: | -----------: | ------------: | -------------: | --------: | --------------------------------------------------- | ------------------------------------ |
|     new | +221.441 MiB | 0.0% → 100.0% |  0 B → 221 MiB | 0 → 7,894 | `mem.Allocator.allocBytesWithAlignment__anon_10001` | `/opt/zig/lib/std/mem/Allocator.zig` |
| removed |   -69.73 MiB | 100.0% → 0.0% | 69.7 MiB → 0 B | 2,526 → 0 | `mem.Allocator.allocBytesWithAlignment__anon_14962` | `/opt/zig/lib/std/mem/Allocator.zig` |

##### `mem.Allocator.alignedAlloc__anon_9848` (`/opt/zig/lib/std/mem/Allocator.zig`)

|  Change |       Delta |      % |               Size |       Objects | Callee                                   | Location                             |
| ------: | ----------: | -----: | -----------------: | ------------: | ---------------------------------------- | ------------------------------------ |
| +217.6% | +151.71 MiB | 100.0% | 69.7 MiB → 221 MiB | 2,526 → 7,894 | `mem.Allocator.allocAdvancedWithRetAddr` | `/opt/zig/lib/std/mem/Allocator.zig` |

##### `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig`)

|  Change |        Delta |             % |               Size |     Objects | Callee                                                                                | Location                                |
| ------: | -----------: | ------------: | -----------------: | ----------: | ------------------------------------------------------------------------------------- | --------------------------------------- |
| +807.0% | +196.928 MiB | 30.7% → 96.4% | 24.4 MiB → 221 MiB | 993 → 7,875 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).ensureTotalCapacity` | `/opt/zig/lib/std/multi_array_list.zig` |
| removed |  -28.542 MiB |  35.9% → 0.0% |     28.5 MiB → 0 B |   1,312 → 0 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2572).append`              | `/opt/zig/lib/std/multi_array_list.zig` |
| removed |  -19.851 MiB |  25.0% → 0.0% |     19.9 MiB → 0 B |   6,457 → 0 | `zig.Parse.parseRoot`                                                                 | `/opt/zig/lib/std/zig/Parse.zig`        |
|     new |   +8.164 MiB |   0.0% → 3.6% |     0 B → 8.16 MiB |   0 → 3,617 | `zig.Ast.parseTokens`                                                                 | `/opt/zig/lib/std/zig/Ast.zig`          |
| removed |   -6.744 MiB |   8.5% → 0.0% |     6.74 MiB → 0 B |     131 → 0 | `multi_array_list.MultiArrayList(zig.Ast.Node).ensureTotalCapacity`                   | `/opt/zig/lib/std/multi_array_list.zig` |

##### `_start` (`/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)

|  Change |       Delta |            % |              Size |         Objects | Callee    | Location                                          |
| ------: | ----------: | -----------: | ----------------: | --------------: | --------- | ------------------------------------------------- |
|  +40.7% | +86.554 MiB |       100.0% | 212 MiB → 299 MiB | 54,605 → 49,736 | `0x27817` | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| removed |      -640 B | <0.1% → 0.0% |       640 B → 0 B |           2 → 0 | `_start`  | `/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |

##### `0x27817` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |       Delta |            % |                Size |         Objects | Callee    | Location                                          |
| -----: | ----------: | -----------: | ------------------: | --------------: | --------- | ------------------------------------------------- |
| +40.6% | +86.429 MiB |       100.0% |   213 MiB → 299 MiB | 54,740 → 50,051 | `0x27743` | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -99.8% |  -1.225 MiB | 0.6% → <0.1% | 1.23 MiB → 2.05 KiB |         55 → 15 | `_start`  | `/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |

##### `start.callMain` (`/opt/zig/lib/std/start.zig`)

|  Change |       Delta |            % |              Size |         Objects | Callee           | Location                                          |
| ------: | ----------: | -----------: | ----------------: | --------------: | ---------------- | ------------------------------------------------- |
|  +39.6% | +84.836 MiB |       100.0% | 214 MiB → 299 MiB | 55,132 → 50,531 | `profile.main`   | `./profile.zig`                                   |
| removed | -47.148 KiB | <0.1% → 0.0% |    47.1 KiB → 0 B |           2 → 0 | `0xffffa2190027` | `<unknown>`                                       |
|     new |  +2.337 KiB | 0.0% → <0.1% |    0 B → 2.34 KiB |          0 → 14 | `_start`         | `/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |

##### `start.callMainWithArgs` (`/opt/zig/lib/std/start.zig`)

| Change |       Delta |      % |              Size |         Objects | Callee           | Location                     |
| -----: | ----------: | -----: | ----------------: | --------------: | ---------------- | ---------------------------- |
| +39.6% | +84.836 MiB | 100.0% | 214 MiB → 299 MiB | 55,132 → 50,531 | `start.callMain` | `/opt/zig/lib/std/start.zig` |

##### `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|    Change |        Delta |             % |            Size |    Objects | Callee       | Location                                           |
| --------: | -----------: | ------------: | --------------: | ---------: | ------------ | -------------------------------------------------- |
|       new | +299.174 MiB | 0.0% → 100.0% |   0 B → 299 MiB | 0 → 50,321 | `start.main` | `/opt/zig/lib/std/start.zig`                       |
|   removed | -214.388 MiB | 100.0% → 0.0% |   214 MiB → 0 B | 54,980 → 0 | `main`       | `/opt/zig/lib/std/start.zig`                       |
| +28470.8% | +100.092 KiB |         <0.1% | 360 B → 100 KiB |         15 | `_start`     | `/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`  |
|   removed |   -4.687 KiB |  <0.1% → 0.0% |  4.69 KiB → 0 B |     15 → 0 | `0x2be03`    | `/usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |

##### `profile.main` (`./profile.zig`)

|  Change |        Delta |             % |               Size |         Objects | Callee                                   | Location                       |
| ------: | -----------: | ------------: | -----------------: | --------------: | ---------------------------------------- | ------------------------------ |
| +188.5% | +149.954 MiB | 37.0% → 76.6% | 79.5 MiB → 229 MiB |  8,893 → 11,492 | `zig.Ast.parse`                          | `/opt/zig/lib/std/zig/Ast.zig` |
|  -32.9% |  -34.422 MiB | 48.6% → 23.4% | 104 MiB → 70.1 MiB | 45,055 → 39,158 | `zig.Ast.renderAlloc`                    | `/opt/zig/lib/std/zig/Ast.zig` |
| removed |  -31.053 MiB |  14.4% → 0.0% |     31.1 MiB → 0 B |       1,385 → 0 | `fs.Dir.readFileAllocOptions__anon_2384` | `/opt/zig/lib/std/fs/Dir.zig`  |
|     new |   +4.093 KiB |  0.0% → <0.1% |     0 B → 4.09 KiB |           0 → 1 | `Io.Dir.walk`                            | `/opt/zig/lib/std/Io/Dir.zig`  |
| removed |   -1.125 KiB |  <0.1% → 0.0% |     1.13 KiB → 0 B |           9 → 0 | `fs.Dir.Walker.next`                     | `/opt/zig/lib/std/fs/Dir.zig`  |

##### `heap.c_allocator_impl.remap` (`/opt/zig/lib/std/heap.zig`)

| Change |       Delta |           % |         Size | Objects | Callee    | Location                                           |
| -----: | ----------: | ----------: | -----------: | ------: | --------- | -------------------------------------------------- |
|    new | +80.992 KiB | 0.0% → 0.1% | 0 B → 81 KiB |  0 → 28 | `0x38677` | `/usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |

##### `mem.Allocator.rawRemap` (`/opt/zig/lib/std/mem/Allocator.zig`)

| Change |       Delta |             % |           Size |   Objects | Callee                        | Location                    |
| -----: | ----------: | ------------: | -------------: | --------: | ----------------------------- | --------------------------- |
|    new | +76.877 MiB | 0.0% → 100.0% | 0 B → 76.9 MiB | 0 → 9,282 | `heap.c_allocator_impl.remap` | `/opt/zig/lib/std/heap.zig` |

##### `Io.Writer.Allocating.ensureTotalCapacity` (`/opt/zig/lib/std/Io/Writer.zig`)

| Change |        Delta |             % |           Size |    Objects | Callee                                            | Location                                          |
| -----: | -----------: | ------------: | -------------: | ---------: | ------------------------------------------------- | ------------------------------------------------- |
|    new |  +70.117 MiB | 0.0% → 100.0% | 0 B → 70.1 MiB | 0 → 15,855 | `Io.Writer.Allocating.ensureTotalCapacityPrecise` | `/opt/zig/lib/std/Io/Writer.zig`                  |
|    new | +367.493 KiB |   0.0% → 0.5% |  0 B → 367 KiB |    0 → 184 | `_start`                                          | `/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
|    new |   +1.904 KiB |  0.0% → <0.1% |  0 B → 1.9 KiB |     0 → 15 | `0xffffe8b9e3cf`                                  | `<unknown>`                                       |

##### `Io.Writer.Allocating.ensureUnusedCapacity` (`/opt/zig/lib/std/Io/Writer.zig`)

| Change |       Delta |             % |           Size |    Objects | Callee                                     | Location                         |
| -----: | ----------: | ------------: | -------------: | ---------: | ------------------------------------------ | -------------------------------- |
|    new | +70.122 MiB | 0.0% → 100.0% | 0 B → 70.1 MiB | 0 → 15,888 | `Io.Writer.Allocating.ensureTotalCapacity` | `/opt/zig/lib/std/Io/Writer.zig` |

##### `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`/opt/zig/lib/std/Io/Writer.zig`)

| Change |      Delta |            % |           Size |   Objects | Callee                   | Location                             |
| -----: | ---------: | -----------: | -------------: | --------: | ------------------------ | ------------------------------------ |
|    new | +68.83 MiB | 0.0% → 98.2% | 0 B → 68.8 MiB | 0 → 6,100 | `mem.Allocator.rawRemap` | `/opt/zig/lib/std/mem/Allocator.zig` |
|    new | +1.287 MiB |  0.0% → 1.8% | 0 B → 1.29 MiB | 0 → 9,755 | `mem.Allocator.rawAlloc` | `/opt/zig/lib/std/mem/Allocator.zig` |

##### `zig.Ast.Render.renderBlock` (`/opt/zig/lib/std/zig/Ast/Render.zig`)

|   Change |        Delta |             % |               Size |    Objects | Callee                                          | Location                                          |
| -------: | -----------: | ------------: | -----------------: | ---------: | ----------------------------------------------- | ------------------------------------------------- |
|      new |  +42.137 MiB |  0.0% → 92.5% |     0 B → 42.1 MiB | 0 → 16,205 | `zig.Ast.Render.finishRenderBlock`              | `/opt/zig/lib/std/zig/Ast/Render.zig`             |
|      new |   +3.252 MiB |   0.0% → 7.1% |     0 B → 3.25 MiB |     0 → 15 | `0xffffe8ba3a3f`                                | `<unknown>`                                       |
|  +137.9% | +916.456 KiB | 100.0% → 3.4% | 665 KiB → 1.54 MiB |    65 → 99 | `zig.Ast.Render.renderToken`                    | `/opt/zig/lib/std/zig/Ast/Render.zig`             |
|      new |  +67.617 KiB |   0.0% → 0.1% |     0 B → 67.6 KiB |     0 → 15 | `_start`                                        | `/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
| +1423.4% |   +1.779 KiB |         <0.1% |    128 B → 1.9 KiB |     1 → 15 | `zig.Ast.Render.AutoIndentingStream.pushIndent` | `/opt/zig/lib/std/zig/Ast/Render.zig`             |

##### `zig.Ast.parseTokens` (`/opt/zig/lib/std/zig/Ast.zig`)

| Change |        Delta |            % |           Size |   Objects | Callee                                                              | Location                                |
| -----: | -----------: | -----------: | -------------: | --------: | ------------------------------------------------------------------- | --------------------------------------- |
|    new |   +8.055 MiB | 0.0% → 98.7% | 0 B → 8.06 MiB | 0 → 3,598 | `zig.Parse.parseRoot`                                               | `/opt/zig/lib/std/zig/Parse.zig`        |
|    new | +111.911 KiB |  0.0% → 1.3% |  0 B → 112 KiB |    0 → 19 | `multi_array_list.MultiArrayList(zig.Ast.Node).ensureTotalCapacity` | `/opt/zig/lib/std/multi_array_list.zig` |

##### `mem.Allocator.remap__anon_32898` (`/opt/zig/lib/std/mem/Allocator.zig`)

| Change |      Delta |             % |           Size |   Objects | Callee                   | Location                             |
| -----: | ---------: | ------------: | -------------: | --------: | ------------------------ | ------------------------------------ |
|    new | +7.715 MiB | 0.0% → 100.0% | 0 B → 7.72 MiB | 0 → 2,539 | `mem.Allocator.rawRemap` | `/opt/zig/lib/std/mem/Allocator.zig` |

##### `zig.Ast.Render.renderFor` (`/opt/zig/lib/std/zig/Ast/Render.zig`)

|  Change |        Delta |            % |               Size |   Objects | Callee                            | Location                              |
| ------: | -----------: | -----------: | -----------------: | --------: | --------------------------------- | ------------------------------------- |
|     new |   +3.198 MiB | 0.0% → 72.0% |      0 B → 3.2 MiB | 0 → 1,999 | `zig.Ast.Render.renderThenElse`   | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|     new | +776.167 KiB | 0.0% → 17.1% |      0 B → 776 KiB |    0 → 18 | `zig.Ast.Render.renderIdentifier` | `/opt/zig/lib/std/zig/Ast/Render.zig` |
| +654.0% | +326.534 KiB | 11.8% → 8.3% | 49.9 KiB → 376 KiB |   21 → 22 | `zig.Ast.Render.renderToken`      | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|  -64.1% | -239.133 KiB | 88.2% → 2.9% |  373 KiB → 134 KiB |  180 → 93 | `zig.Ast.Render.renderParamList`  | `/opt/zig/lib/std/zig/Ast/Render.zig` |

##### `heap.CAllocator.alignedAlloc` (`/opt/zig/lib/std/heap.zig`)

|  Change |      Delta |            % |           Size | Objects | Callee           | Location                                          |
| ------: | ---------: | -----------: | -------------: | ------: | ---------------- | ------------------------------------------------- |
| removed |  -12.5 KiB | <0.1% → 0.0% | 12.5 KiB → 0 B | 100 → 0 | `_start`         | `/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
| removed | -4.687 KiB | <0.1% → 0.0% | 4.69 KiB → 0 B |  15 → 0 | `0xffffe609cd03` | `<unknown>`                                       |
| removed | -1.875 KiB | <0.1% → 0.0% | 1.88 KiB → 0 B |  15 → 0 | `0xffffe609c84f` | `<unknown>`                                       |

##### `heap.CAllocator.alloc` (`/opt/zig/lib/std/heap.zig`)

|  Change |        Delta |             % |          Size |    Objects | Callee                         | Location                    |
| ------: | -----------: | ------------: | ------------: | ---------: | ------------------------------ | --------------------------- |
| removed | -224.492 MiB | 100.0% → 0.0% | 224 MiB → 0 B | 56,362 → 0 | `heap.CAllocator.alignedAlloc` | `/opt/zig/lib/std/heap.zig` |

##### `main` (`/opt/zig/lib/std/start.zig`)

|  Change |        Delta |             % |          Size |    Objects | Callee                   | Location                     |
| ------: | -----------: | ------------: | ------------: | ---------: | ------------------------ | ---------------------------- |
| removed | -214.464 MiB | 100.0% → 0.0% | 214 MiB → 0 B | 55,132 → 0 | `start.callMainWithArgs` | `/opt/zig/lib/std/start.zig` |

##### `mem.Allocator.allocWithSizeAndAlignment__anon_10624` (`/opt/zig/lib/std/mem/Allocator.zig`)

|  Change |        Delta |             % |          Size |    Objects | Callee                                              | Location                             |
| ------: | -----------: | ------------: | ------------: | ---------: | --------------------------------------------------- | ------------------------------------ |
| removed | -143.076 MiB | 100.0% → 0.0% | 143 MiB → 0 B | 28,392 → 0 | `mem.Allocator.allocBytesWithAlignment__anon_14770` | `/opt/zig/lib/std/mem/Allocator.zig` |
|     new | +414.937 KiB | 0.0% → 100.0% | 0 B → 415 KiB | 0 → 15,527 | `mem.Allocator.allocBytesWithAlignment__anon_7893`  | `/opt/zig/lib/std/mem/Allocator.zig` |

##### `mem.Allocator.allocBytesWithAlignment__anon_8636` (`/opt/zig/lib/std/mem/Allocator.zig`)

| Change |        Delta |      % |              Size |        Objects | Callee                   | Location                             |
| -----: | -----------: | -----: | ----------------: | -------------: | ------------------------ | ------------------------------------ |
| -99.3% | -142.331 MiB | 100.0% | 143 MiB → 995 KiB | 30,251 → 7,837 | `mem.Allocator.rawAlloc` | `/opt/zig/lib/std/mem/Allocator.zig` |

##### `mem.Allocator.alignedAlloc__anon_31630` (`/opt/zig/lib/std/mem/Allocator.zig`)

| Change |        Delta |      % |              Size |        Objects | Callee                                   | Location                             |
| -----: | -----------: | -----: | ----------------: | -------------: | ---------------------------------------- | ------------------------------------ |
| -99.3% | -142.006 MiB | 100.0% | 143 MiB → 995 KiB | 22,768 → 7,837 | `mem.Allocator.allocAdvancedWithRetAddr` | `/opt/zig/lib/std/mem/Allocator.zig` |

##### `array_list.Aligned(u8,null).ensureUnusedCapacity` (`/opt/zig/lib/std/array_list.zig`)

|  Change |        Delta |             % |           Size |    Objects | Callee                                            | Location                                          |
| ------: | -----------: | ------------: | -------------: | ---------: | ------------------------------------------------- | ------------------------------------------------- |
| removed | -111.925 MiB | 100.0% → 0.0% |  112 MiB → 0 B | 21,383 → 0 | `array_list.Aligned(u8,null).ensureTotalCapacity` | `/opt/zig/lib/std/array_list.zig`                 |
| removed |   -1.207 MiB |   1.1% → 0.0% | 1.21 MiB → 0 B |     67 → 0 | `_start`                                          | `/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |

##### `array_list.Aligned(u8,null).ensureTotalCapacityPrecise` (`/opt/zig/lib/std/array_list.zig`)

|  Change |        Delta |             % |          Size |    Objects | Callee                                  | Location                             |
| ------: | -----------: | ------------: | ------------: | ---------: | --------------------------------------- | ------------------------------------ |
| removed | -111.925 MiB | 100.0% → 0.0% | 112 MiB → 0 B | 21,383 → 0 | `mem.Allocator.alignedAlloc__anon_6559` | `/opt/zig/lib/std/mem/Allocator.zig` |

##### `array_list.Aligned(u8,null).ensureTotalCapacity` (`/opt/zig/lib/std/array_list.zig`)

|  Change |        Delta |             % |          Size |    Objects | Callee                                                   | Location                          |
| ------: | -----------: | ------------: | ------------: | ---------: | -------------------------------------------------------- | --------------------------------- |
| removed | -111.925 MiB | 100.0% → 0.0% | 112 MiB → 0 B | 21,383 → 0 | `array_list.Aligned(u8,null).ensureTotalCapacityPrecise` | `/opt/zig/lib/std/array_list.zig` |

##### `mem.Allocator.allocBytesWithAlignment__anon_7893` (`/opt/zig/lib/std/mem/Allocator.zig`)

| Change |       Delta |      % |               Size |        Objects | Callee                   | Location                             |
| -----: | ----------: | -----: | -----------------: | -------------: | ------------------------ | ------------------------------------ |
| -99.4% | -79.363 MiB | 100.0% | 79.8 MiB → 495 KiB | 9,148 → 16,067 | `mem.Allocator.rawAlloc` | `/opt/zig/lib/std/mem/Allocator.zig` |

##### `0xffffe609d1df` (`<unknown>`)

|  Change |       Delta |            % |           Size | Objects | Callee        | Location                                           |
| ------: | ----------: | -----------: | -------------: | ------: | ------------- | -------------------------------------------------- |
| removed | -11.638 MiB | 22.0% → 0.0% | 11.6 MiB → 0 B | 389 → 0 | `0x3143b`     | `/usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
| removed |  -8.957 MiB | 16.9% → 0.0% | 8.96 MiB → 0 B | 120 → 0 | `0x10000000e` | `<unknown>`                                        |
| removed |  -3.526 MiB |  6.7% → 0.0% | 3.53 MiB → 0 B | 287 → 0 | `0x33ed47ff`  | `<unknown>`                                        |
| removed |  -2.998 MiB |  5.7% → 0.0% |    3 MiB → 0 B |  15 → 0 | `0x10000025d` | `<unknown>`                                        |
| removed |  -1.997 MiB |  3.8% → 0.0% |    2 MiB → 0 B |  15 → 0 | `0x10000351a` | `<unknown>`                                        |

##### `Io.Writer.Allocating.drain` (`/opt/zig/lib/std/Io/Writer.zig`)

|  Change |        Delta |             % |           Size |    Objects | Callee                                             | Location                          |
| ------: | -----------: | ------------: | -------------: | ---------: | -------------------------------------------------- | --------------------------------- |
| removed | -111.924 MiB | 100.0% → 0.0% |  112 MiB → 0 B | 21,389 → 0 | `array_list.Aligned(u8,null).ensureUnusedCapacity` | `/opt/zig/lib/std/array_list.zig` |
|     new |  +70.122 MiB | 0.0% → 100.0% | 0 B → 70.1 MiB | 0 → 15,888 | `Io.Writer.Allocating.ensureUnusedCapacity`        | `/opt/zig/lib/std/Io/Writer.zig`  |

##### `zig.Ast.Render.AutoIndentingStream.writeAll` (`/opt/zig/lib/std/zig/Ast/Render.zig`)

| Change |       Delta |             % |                Size |         Objects | Callee                                           | Location                              |
| -----: | ----------: | ------------: | ------------------: | --------------: | ------------------------------------------------ | ------------------------------------- |
| -38.3% | -31.128 MiB | 81.8% → 79.6% | 81.2 MiB → 50.1 MiB | 19,117 → 14,226 | `Io.Writer.writeAll`                             | `/opt/zig/lib/std/Io/Writer.zig`      |
| -28.9% |  -5.225 MiB | 18.2% → 20.4% | 18.1 MiB → 12.8 MiB |     1,047 → 736 | `zig.Ast.Render.AutoIndentingStream.applyIndent` | `/opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.Render.renderTree` (`/opt/zig/lib/std/zig/Ast/Render.zig`)

| Change |        Delta |             % |               Size |         Objects | Callee                                      | Location                                          |
| -----: | -----------: | ------------: | -----------------: | --------------: | ------------------------------------------- | ------------------------------------------------- |
| -33.1% |  -34.399 MiB | 99.6% → 99.4% | 104 MiB → 69.7 MiB | 44,274 → 38,865 | `zig.Ast.Render.renderMembers`              | `/opt/zig/lib/std/zig/Ast/Render.zig`             |
|    new | +518.291 KiB |   0.0% → 0.7% |      0 B → 518 KiB |         0 → 225 | `_start`                                    | `/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
| -85.0% | -196.214 KiB |  0.2% → <0.1% | 231 KiB → 34.6 KiB |       523 → 105 | `zig.Ast.Render.renderContainerDocComments` | `/opt/zig/lib/std/zig/Ast/Render.zig`             |
| +87.2% | +172.609 KiB |   0.2% → 0.5% |  198 KiB → 371 KiB |       258 → 188 | `zig.Ast.Render.renderComments`             | `/opt/zig/lib/std/zig/Ast/Render.zig`             |

##### `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig`)

| Change |       Delta |      % |               Size |         Objects | Callee                      | Location                              |
| -----: | ----------: | -----: | -----------------: | --------------: | --------------------------- | ------------------------------------- |
| -32.9% | -34.422 MiB | 100.0% | 104 MiB → 70.1 MiB | 45,055 → 39,158 | `zig.Ast.Render.renderTree` | `/opt/zig/lib/std/zig/Ast/Render.zig` |

##### `zig.Ast.renderAlloc` (`/opt/zig/lib/std/zig/Ast.zig`)

| Change |       Delta |      % |               Size |         Objects | Callee           | Location                       |
| -----: | ----------: | -----: | -----------------: | --------------: | ---------------- | ------------------------------ |
| -32.9% | -34.422 MiB | 100.0% | 104 MiB → 70.1 MiB | 45,055 → 39,158 | `zig.Ast.render` | `/opt/zig/lib/std/zig/Ast.zig` |

##### `zig.Ast.Render.renderMembers` (`/opt/zig/lib/std/zig/Ast/Render.zig`)

| Change |       Delta |             % |                Size |         Objects | Callee                              | Location                                          |
| -----: | ----------: | ------------: | ------------------: | --------------: | ----------------------------------- | ------------------------------------------------- |
| -77.8% | -19.155 MiB |  23.7% → 7.9% | 24.6 MiB → 5.47 MiB |   3,072 → 2,069 | `zig.Ast.Render.renderExpression`   | `/opt/zig/lib/std/zig/Ast/Render.zig`             |
| -19.2% | -15.244 MiB | 76.3% → 92.1% | 79.4 MiB → 64.2 MiB | 41,202 → 36,795 | `zig.Ast.Render.renderMember`       | `/opt/zig/lib/std/zig/Ast/Render.zig`             |
| +25.2% |  +2.241 KiB |         <0.1% | 8.91 KiB → 11.1 KiB |              15 | `_start`                            | `/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
|    new |      +618 B |  0.0% → <0.1% |         0 B → 618 B |           0 → 1 | `zig.Ast.Render.renderExtraNewline` | `/opt/zig/lib/std/zig/Ast/Render.zig`             |

##### `array_list.AlignedManaged(u8,null).ensureTotalCapacityPrecise` (`/opt/zig/lib/std/array_list.zig`)

|  Change |       Delta |             % |           Size |   Objects | Callee                                  | Location                             |
| ------: | ----------: | ------------: | -------------: | --------: | --------------------------------------- | ------------------------------------ |
| removed | -31.053 MiB | 100.0% → 0.0% | 31.1 MiB → 0 B | 1,385 → 0 | `mem.Allocator.alignedAlloc__anon_6559` | `/opt/zig/lib/std/mem/Allocator.zig` |

##### `fs.File.readToEndAllocOptions__anon_2451` (`/opt/zig/lib/std/fs/File.zig`)

|  Change |       Delta |            % |           Size |   Objects | Callee                                                                                                                                                                                                                                                                                             | Location                          |
| ------: | ----------: | -----------: | -------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| removed | -29.919 MiB | 96.3% → 0.0% | 29.9 MiB → 0 B | 1,112 → 0 | `array_list.AlignedManaged(u8,null).initCapacity`                                                                                                                                                                                                                                                  | `/opt/zig/lib/std/array_list.zig` |
| removed |  -1.133 MiB |  3.6% → 0.0% | 1.13 MiB → 0 B |   229 → 0 | `Io.GenericReader(fs.File,error{AccessDenied,BrokenPipe,Canceled,ConnectionResetByPeer,ConnectionTimedOut,InputOutput,IsDir,LockViolation,NotOpenForReading,OperationAborted,ProcessNotFound,SocketNotConnected,SystemResources,Unexpected,WouldBlock},(function 'read')).readAllArrayListAligned` | `/opt/zig/lib/std/Io.zig`         |
| removed |      -352 B | <0.1% → 0.0% |    352 B → 0 B |    44 → 0 | `array_list.AlignedManaged(u8,null).toOwnedSliceSentinel__anon_2556`                                                                                                                                                                                                                               | `/opt/zig/lib/std/array_list.zig` |

##### `fs.Dir.readFileAllocOptions__anon_2384` (`/opt/zig/lib/std/fs/Dir.zig`)

|  Change |       Delta |             % |           Size |   Objects | Callee                                     | Location                       |
| ------: | ----------: | ------------: | -------------: | --------: | ------------------------------------------ | ------------------------------ |
| removed | -31.053 MiB | 100.0% → 0.0% | 31.1 MiB → 0 B | 1,385 → 0 | `fs.File.readToEndAllocOptions__anon_2451` | `/opt/zig/lib/std/fs/File.zig` |

##### `zig.Ast.Render.finishRenderBlock` (`/opt/zig/lib/std/zig/Ast/Render.zig`)

|  Change |        Delta |             % |                Size |         Objects | Callee                              | Location                              |
| ------: | -----------: | ------------: | ------------------: | --------------: | ----------------------------------- | ------------------------------------- |
|  -31.7% |  -17.544 MiB | 75.8% → 89.6% | 55.3 MiB → 37.7 MiB | 15,383 → 13,523 | `zig.Ast.Render.renderExpression`   | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|  -55.2% |  -14.446 MiB | 35.9% → 27.9% | 26.2 MiB → 11.7 MiB |   6,253 → 5,053 | `zig.Ast.Render.renderVarDecl`      | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|  +98.4% | +765.262 KiB |   1.0% → 3.6% |  778 KiB → 1.51 MiB |        126 → 91 | `zig.Ast.Render.renderToken`        | `/opt/zig/lib/std/zig/Ast/Render.zig` |
|  -96.7% | -149.134 KiB |  0.2% → <0.1% |  154 KiB → 5.08 KiB |           4 → 2 | `zig.Ast.Render.renderIdentifier`   | `/opt/zig/lib/std/zig/Ast/Render.zig` |
| removed | -101.023 KiB |   0.1% → 0.0% |       101 KiB → 0 B |          31 → 0 | `zig.Ast.Render.renderExtraNewline` | `/opt/zig/lib/std/zig/Ast/Render.zig` |

# Retained heap profile diff

Retained 0 B over 0 objects.

No bytes retained in any object.
