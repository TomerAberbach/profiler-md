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

| Change |        Delta |            % |           Size |    Objects | Function                      | Location                      |
| -----: | -----------: | -----------: | -------------: | ---------: | ----------------------------- | ----------------------------- |
|    new | +224.254 MiB | 0.0% → 74.5% |  0 B → 224 MiB | 0 → 42,029 | `heap.c_allocator_impl.alloc` | `../opt/zig/lib/std/heap.zig` |
|    new |  +76.877 MiB | 0.0% → 25.5% | 0 B → 76.9 MiB |  0 → 9,282 | `heap.c_allocator_impl.remap` | `../opt/zig/lib/std/heap.zig` |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

##### Standard library

|  Change |        Delta |             % |          Size |    Objects | Function                       | Location                      |
| ------: | -----------: | ------------: | ------------: | ---------: | ------------------------------ | ----------------------------- |
| removed | -224.492 MiB | 100.0% → 0.0% | 224 MiB → 0 B | 56,362 → 0 | `heap.CAllocator.alignedAlloc` | `../opt/zig/lib/std/heap.zig` |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `heap.c_allocator_impl.alloc` (`../opt/zig/lib/std/heap.zig`)

| Change |        Delta |             % |          Size |    Objects | Location                          |
| -----: | -----------: | ------------: | ------------: | ---------: | --------------------------------- |
|    new | +224.254 MiB | 0.0% → 100.0% | 0 B → 224 MiB | 0 → 42,029 | `../opt/zig/lib/std/heap.zig:232` |

##### `heap.c_allocator_impl.remap` (`../opt/zig/lib/std/heap.zig`)

| Change |       Delta |             % |           Size |   Objects | Location                          |
| -----: | ----------: | ------------: | -------------: | --------: | --------------------------------- |
|    new | +76.877 MiB | 0.0% → 100.0% | 0 B → 76.9 MiB | 0 → 9,282 | `../opt/zig/lib/std/heap.zig:309` |

##### `heap.CAllocator.alignedAlloc` (`../opt/zig/lib/std/heap.zig`)

|  Change |        Delta |             % |          Size |    Objects | Location                          |
| ------: | -----------: | ------------: | ------------: | ---------: | --------------------------------- |
| removed | -224.492 MiB | 100.0% → 0.0% | 224 MiB → 0 B | 56,362 → 0 | `../opt/zig/lib/std/heap.zig:165` |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|    Change |        Delta |             % |               Size |         Objects | Function                                                                              | Location                                            |
| --------: | -----------: | ------------: | -----------------: | --------------: | ------------------------------------------------------------------------------------- | --------------------------------------------------- |
|       new |   +299.3 MiB |  0.0% → 99.4% |      0 B → 299 MiB |      0 → 50,531 | `start.main`                                                                          | `../opt/zig/lib/std/start.zig`                      |
|       new | +224.254 MiB |  0.0% → 74.5% |      0 B → 224 MiB |      0 → 42,029 | `heap.c_allocator_impl.alloc`                                                         | `../opt/zig/lib/std/heap.zig`                       |
| +16396.1% | +220.169 MiB |  0.6% → 73.6% | 1.34 MiB → 222 MiB |  16,963 → 8,355 | `mem.Allocator.allocBytesWithAlignment__anon_10001`                                   | `../opt/zig/lib/std/mem/Allocator.zig`              |
|  +1318.5% | +206.264 MiB |  7.0% → 73.7% | 15.6 MiB → 222 MiB |     911 → 8,019 | `0xaaaaaaaaaaaaaaa9`                                                                  | `<unknown>`                                         |
|   +318.0% | +168.385 MiB | 23.6% → 73.5% | 52.9 MiB → 221 MiB |   2,305 → 7,875 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).setCapacity`         | `../opt/zig/lib/std/multi_array_list.zig`           |
|   +318.0% | +168.385 MiB | 23.6% → 73.5% | 52.9 MiB → 221 MiB |   2,305 → 7,875 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).ensureTotalCapacity` | `../opt/zig/lib/std/multi_array_list.zig`           |
|   +217.6% |  +151.71 MiB | 31.1% → 73.5% | 69.7 MiB → 221 MiB |   2,526 → 7,894 | `mem.Allocator.allocWithSizeAndAlignment__anon_9851`                                  | `../opt/zig/lib/std/mem/Allocator.zig`              |
|   +217.6% |  +151.71 MiB | 31.1% → 73.5% | 69.7 MiB → 221 MiB |   2,526 → 7,894 | `mem.Allocator.alignedAlloc__anon_9848`                                               | `../opt/zig/lib/std/mem/Allocator.zig`              |
|   +188.5% | +149.954 MiB | 35.4% → 76.2% | 79.5 MiB → 229 MiB |  8,893 → 11,492 | `zig.Ast.parse`                                                                       | `../opt/zig/lib/std/zig/Ast.zig`                    |
|    +40.7% |  +86.554 MiB | 94.6% → 99.3% |  212 MiB → 299 MiB | 54,605 → 49,736 | `_start`                                                                              | `../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
|    +40.6% |  +86.429 MiB | 94.7% → 99.3% |  213 MiB → 299 MiB | 54,740 → 50,051 | `0x27817`                                                                             | `../usr/lib/aarch64-linux-gnu/libc.so.6`            |
|    +39.6% |  +84.836 MiB | 95.5% → 99.4% |  214 MiB → 299 MiB | 55,132 → 50,531 | `start.callMain`                                                                      | `../opt/zig/lib/std/start.zig`                      |
|    +39.6% |  +84.836 MiB | 95.5% → 99.4% |  214 MiB → 299 MiB | 55,132 → 50,531 | `start.callMainWithArgs`                                                              | `../opt/zig/lib/std/start.zig`                      |
|    +39.5% |  +84.786 MiB | 95.5% → 99.4% |  214 MiB → 299 MiB | 54,980 → 50,321 | `0x27743`                                                                             | `../usr/lib/aarch64-linux-gnu/libc.so.6`            |
|    +39.3% |  +84.482 MiB | 95.8% → 99.5% |  215 MiB → 300 MiB | 55,342 → 50,651 | `profile.main`                                                                        | `profile.zig`                                       |
|       new |  +76.877 MiB |  0.0% → 25.5% |     0 B → 76.9 MiB |       0 → 9,282 | `heap.c_allocator_impl.remap`                                                         | `../opt/zig/lib/std/heap.zig`                       |
|       new |  +76.877 MiB |  0.0% → 25.5% |     0 B → 76.9 MiB |       0 → 9,282 | `mem.Allocator.rawRemap`                                                              | `../opt/zig/lib/std/mem/Allocator.zig`              |
|       new |  +70.122 MiB |  0.0% → 23.3% |     0 B → 70.1 MiB |      0 → 15,888 | `Io.Writer.Allocating.ensureTotalCapacity`                                            | `../opt/zig/lib/std/Io/Writer.zig`                  |
|       new |  +70.122 MiB |  0.0% → 23.3% |     0 B → 70.1 MiB |      0 → 15,888 | `Io.Writer.Allocating.ensureUnusedCapacity`                                           | `../opt/zig/lib/std/Io/Writer.zig`                  |
|       new |  +70.117 MiB |  0.0% → 23.3% |     0 B → 70.1 MiB |      0 → 15,855 | `Io.Writer.Allocating.ensureTotalCapacityPrecise`                                     | `../opt/zig/lib/std/Io/Writer.zig`                  |

##### Standard library

|    Change |        Delta |             % |               Size |         Objects | Function                                                                              | Location                                            |
| --------: | -----------: | ------------: | -----------------: | --------------: | ------------------------------------------------------------------------------------- | --------------------------------------------------- |
|       new |   +299.3 MiB |  0.0% → 99.4% |      0 B → 299 MiB |      0 → 50,531 | `start.main`                                                                          | `../opt/zig/lib/std/start.zig`                      |
|       new | +224.254 MiB |  0.0% → 74.5% |      0 B → 224 MiB |      0 → 42,029 | `heap.c_allocator_impl.alloc`                                                         | `../opt/zig/lib/std/heap.zig`                       |
| +16396.1% | +220.169 MiB |  0.6% → 73.6% | 1.34 MiB → 222 MiB |  16,963 → 8,355 | `mem.Allocator.allocBytesWithAlignment__anon_10001`                                   | `../opt/zig/lib/std/mem/Allocator.zig`              |
|   +318.0% | +168.385 MiB | 23.6% → 73.5% | 52.9 MiB → 221 MiB |   2,305 → 7,875 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).setCapacity`         | `../opt/zig/lib/std/multi_array_list.zig`           |
|   +318.0% | +168.385 MiB | 23.6% → 73.5% | 52.9 MiB → 221 MiB |   2,305 → 7,875 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).ensureTotalCapacity` | `../opt/zig/lib/std/multi_array_list.zig`           |
|   +217.6% |  +151.71 MiB | 31.1% → 73.5% | 69.7 MiB → 221 MiB |   2,526 → 7,894 | `mem.Allocator.allocWithSizeAndAlignment__anon_9851`                                  | `../opt/zig/lib/std/mem/Allocator.zig`              |
|   +217.6% |  +151.71 MiB | 31.1% → 73.5% | 69.7 MiB → 221 MiB |   2,526 → 7,894 | `mem.Allocator.alignedAlloc__anon_9848`                                               | `../opt/zig/lib/std/mem/Allocator.zig`              |
|   +188.5% | +149.954 MiB | 35.4% → 76.2% | 79.5 MiB → 229 MiB |  8,893 → 11,492 | `zig.Ast.parse`                                                                       | `../opt/zig/lib/std/zig/Ast.zig`                    |
|    +40.7% |  +86.554 MiB | 94.6% → 99.3% |  212 MiB → 299 MiB | 54,605 → 49,736 | `_start`                                                                              | `../opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
|    +39.6% |  +84.836 MiB | 95.5% → 99.4% |  214 MiB → 299 MiB | 55,132 → 50,531 | `start.callMain`                                                                      | `../opt/zig/lib/std/start.zig`                      |
|    +39.6% |  +84.836 MiB | 95.5% → 99.4% |  214 MiB → 299 MiB | 55,132 → 50,531 | `start.callMainWithArgs`                                                              | `../opt/zig/lib/std/start.zig`                      |
|       new |  +76.877 MiB |  0.0% → 25.5% |     0 B → 76.9 MiB |       0 → 9,282 | `heap.c_allocator_impl.remap`                                                         | `../opt/zig/lib/std/heap.zig`                       |
|       new |  +76.877 MiB |  0.0% → 25.5% |     0 B → 76.9 MiB |       0 → 9,282 | `mem.Allocator.rawRemap`                                                              | `../opt/zig/lib/std/mem/Allocator.zig`              |
|       new |  +70.122 MiB |  0.0% → 23.3% |     0 B → 70.1 MiB |      0 → 15,888 | `Io.Writer.Allocating.ensureTotalCapacity`                                            | `../opt/zig/lib/std/Io/Writer.zig`                  |
|       new |  +70.122 MiB |  0.0% → 23.3% |     0 B → 70.1 MiB |      0 → 15,888 | `Io.Writer.Allocating.ensureUnusedCapacity`                                           | `../opt/zig/lib/std/Io/Writer.zig`                  |
|       new |  +70.117 MiB |  0.0% → 23.3% |     0 B → 70.1 MiB |      0 → 15,855 | `Io.Writer.Allocating.ensureTotalCapacityPrecise`                                     | `../opt/zig/lib/std/Io/Writer.zig`                  |
|  +6917.9% |  +44.916 MiB |  0.3% → 15.1% | 665 KiB → 45.6 MiB |     66 → 16,268 | `zig.Ast.Render.renderBlock`                                                          | `../opt/zig/lib/std/zig/Ast/Render.zig`             |
|       new |   +8.164 MiB |   0.0% → 2.7% |     0 B → 8.16 MiB |       0 → 3,617 | `zig.Ast.parseTokens`                                                                 | `../opt/zig/lib/std/zig/Ast.zig`                    |
|       new |   +7.715 MiB |   0.0% → 2.6% |     0 B → 7.72 MiB |       0 → 2,539 | `mem.Allocator.remap__anon_32898`                                                     | `../opt/zig/lib/std/mem/Allocator.zig`              |
|   +974.7% |   +4.027 MiB |   0.2% → 1.5% | 423 KiB → 4.44 MiB |     201 → 2,097 | `zig.Ast.Render.renderFor`                                                            | `../opt/zig/lib/std/zig/Ast/Render.zig`             |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |         Objects | Function                                                        | Location                                |
| ------: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------------- | --------------------------------------- |
| removed | -224.492 MiB | 100.0% → 0.0% |       224 MiB → 0 B |      56,362 → 0 | `heap.CAllocator.alignedAlloc`                                  | `../opt/zig/lib/std/heap.zig`           |
| removed | -224.492 MiB | 100.0% → 0.0% |       224 MiB → 0 B |      56,362 → 0 | `heap.CAllocator.alloc`                                         | `../opt/zig/lib/std/heap.zig`           |
| removed | -214.464 MiB |  95.5% → 0.0% |       214 MiB → 0 B |      55,132 → 0 | `main`                                                          | `../opt/zig/lib/std/start.zig`          |
|  -99.7% | -142.671 MiB |  63.7% → 0.1% |   143 MiB → 415 KiB | 28,392 → 15,527 | `mem.Allocator.allocWithSizeAndAlignment__anon_10624`           | `../opt/zig/lib/std/mem/Allocator.zig`  |
|  -99.3% | -142.331 MiB |  63.8% → 0.3% |   143 MiB → 995 KiB |  30,251 → 7,837 | `mem.Allocator.allocBytesWithAlignment__anon_8636`              | `../opt/zig/lib/std/mem/Allocator.zig`  |
|  -99.3% | -142.006 MiB |  63.7% → 0.3% |   143 MiB → 995 KiB |  22,768 → 7,837 | `mem.Allocator.alignedAlloc__anon_31630`                        | `../opt/zig/lib/std/mem/Allocator.zig`  |
| removed | -111.925 MiB |  49.9% → 0.0% |       112 MiB → 0 B |      21,398 → 0 | `array_list.Aligned(u8,null).ensureUnusedCapacity`              | `../opt/zig/lib/std/array_list.zig`     |
| removed | -111.925 MiB |  49.9% → 0.0% |       112 MiB → 0 B |      21,383 → 0 | `array_list.Aligned(u8,null).ensureTotalCapacityPrecise`        | `../opt/zig/lib/std/array_list.zig`     |
| removed | -111.925 MiB |  49.9% → 0.0% |       112 MiB → 0 B |      21,383 → 0 | `array_list.Aligned(u8,null).ensureTotalCapacity`               | `../opt/zig/lib/std/array_list.zig`     |
|  -99.4% |  -79.363 MiB |  35.6% → 0.2% |  79.8 MiB → 495 KiB |  9,148 → 16,067 | `mem.Allocator.allocBytesWithAlignment__anon_7893`              | `../opt/zig/lib/std/mem/Allocator.zig`  |
| removed |  -52.945 MiB |  23.6% → 0.0% |      52.9 MiB → 0 B |       2,305 → 0 | `0xffffe609d1df`                                                | `<unknown>`                             |
|  -37.3% |  -41.802 MiB | 49.9% → 23.3% |  112 MiB → 70.1 MiB | 21,389 → 15,888 | `Io.Writer.Allocating.drain`                                    | `../opt/zig/lib/std/Io/Writer.zig`      |
|  -36.6% |  -36.354 MiB | 44.2% → 20.9% | 99.3 MiB → 62.9 MiB | 20,164 → 14,962 | `zig.Ast.Render.AutoIndentingStream.writeAll`                   | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  -32.9% |  -34.422 MiB | 46.5% → 23.3% |  104 MiB → 70.1 MiB | 45,055 → 39,158 | `zig.Ast.Render.renderTree`                                     | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  -32.9% |  -34.422 MiB | 46.5% → 23.3% |  104 MiB → 70.1 MiB | 45,055 → 39,158 | `zig.Ast.render`                                                | `../opt/zig/lib/std/zig/Ast.zig`        |
|  -32.9% |  -34.422 MiB | 46.5% → 23.3% |  104 MiB → 70.1 MiB | 45,055 → 39,158 | `zig.Ast.renderAlloc`                                           | `../opt/zig/lib/std/zig/Ast.zig`        |
|  -33.1% |  -34.399 MiB | 46.4% → 23.1% |  104 MiB → 69.7 MiB | 44,274 → 38,865 | `zig.Ast.Render.renderMembers`                                  | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| removed |  -31.053 MiB |  13.8% → 0.0% |      31.1 MiB → 0 B |       1,385 → 0 | `array_list.AlignedManaged(u8,null).ensureTotalCapacityPrecise` | `../opt/zig/lib/std/array_list.zig`     |
| removed |  -31.053 MiB |  13.8% → 0.0% |      31.1 MiB → 0 B |       1,385 → 0 | `fs.File.readToEndAllocOptions__anon_2451`                      | `../opt/zig/lib/std/fs/File.zig`        |
| removed |  -31.053 MiB |  13.8% → 0.0% |      31.1 MiB → 0 B |       1,385 → 0 | `fs.Dir.readFileAllocOptions__anon_2384`                        | `../opt/zig/lib/std/fs/Dir.zig`         |

##### Standard library

|  Change |        Delta |             % |                Size |         Objects | Function                                                        | Location                                |
| ------: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------------- | --------------------------------------- |
| removed | -224.492 MiB | 100.0% → 0.0% |       224 MiB → 0 B |      56,362 → 0 | `heap.CAllocator.alignedAlloc`                                  | `../opt/zig/lib/std/heap.zig`           |
| removed | -224.492 MiB | 100.0% → 0.0% |       224 MiB → 0 B |      56,362 → 0 | `heap.CAllocator.alloc`                                         | `../opt/zig/lib/std/heap.zig`           |
| removed | -214.464 MiB |  95.5% → 0.0% |       214 MiB → 0 B |      55,132 → 0 | `main`                                                          | `../opt/zig/lib/std/start.zig`          |
|  -99.7% | -142.671 MiB |  63.7% → 0.1% |   143 MiB → 415 KiB | 28,392 → 15,527 | `mem.Allocator.allocWithSizeAndAlignment__anon_10624`           | `../opt/zig/lib/std/mem/Allocator.zig`  |
|  -99.3% | -142.331 MiB |  63.8% → 0.3% |   143 MiB → 995 KiB |  30,251 → 7,837 | `mem.Allocator.allocBytesWithAlignment__anon_8636`              | `../opt/zig/lib/std/mem/Allocator.zig`  |
|  -99.3% | -142.006 MiB |  63.7% → 0.3% |   143 MiB → 995 KiB |  22,768 → 7,837 | `mem.Allocator.alignedAlloc__anon_31630`                        | `../opt/zig/lib/std/mem/Allocator.zig`  |
| removed | -111.925 MiB |  49.9% → 0.0% |       112 MiB → 0 B |      21,398 → 0 | `array_list.Aligned(u8,null).ensureUnusedCapacity`              | `../opt/zig/lib/std/array_list.zig`     |
| removed | -111.925 MiB |  49.9% → 0.0% |       112 MiB → 0 B |      21,383 → 0 | `array_list.Aligned(u8,null).ensureTotalCapacityPrecise`        | `../opt/zig/lib/std/array_list.zig`     |
| removed | -111.925 MiB |  49.9% → 0.0% |       112 MiB → 0 B |      21,383 → 0 | `array_list.Aligned(u8,null).ensureTotalCapacity`               | `../opt/zig/lib/std/array_list.zig`     |
|  -99.4% |  -79.363 MiB |  35.6% → 0.2% |  79.8 MiB → 495 KiB |  9,148 → 16,067 | `mem.Allocator.allocBytesWithAlignment__anon_7893`              | `../opt/zig/lib/std/mem/Allocator.zig`  |
|  -37.3% |  -41.802 MiB | 49.9% → 23.3% |  112 MiB → 70.1 MiB | 21,389 → 15,888 | `Io.Writer.Allocating.drain`                                    | `../opt/zig/lib/std/Io/Writer.zig`      |
|  -36.6% |  -36.354 MiB | 44.2% → 20.9% | 99.3 MiB → 62.9 MiB | 20,164 → 14,962 | `zig.Ast.Render.AutoIndentingStream.writeAll`                   | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  -32.9% |  -34.422 MiB | 46.5% → 23.3% |  104 MiB → 70.1 MiB | 45,055 → 39,158 | `zig.Ast.Render.renderTree`                                     | `../opt/zig/lib/std/zig/Ast/Render.zig` |
|  -32.9% |  -34.422 MiB | 46.5% → 23.3% |  104 MiB → 70.1 MiB | 45,055 → 39,158 | `zig.Ast.render`                                                | `../opt/zig/lib/std/zig/Ast.zig`        |
|  -32.9% |  -34.422 MiB | 46.5% → 23.3% |  104 MiB → 70.1 MiB | 45,055 → 39,158 | `zig.Ast.renderAlloc`                                           | `../opt/zig/lib/std/zig/Ast.zig`        |
|  -33.1% |  -34.399 MiB | 46.4% → 23.1% |  104 MiB → 69.7 MiB | 44,274 → 38,865 | `zig.Ast.Render.renderMembers`                                  | `../opt/zig/lib/std/zig/Ast/Render.zig` |
| removed |  -31.053 MiB |  13.8% → 0.0% |      31.1 MiB → 0 B |       1,385 → 0 | `array_list.AlignedManaged(u8,null).ensureTotalCapacityPrecise` | `../opt/zig/lib/std/array_list.zig`     |
| removed |  -31.053 MiB |  13.8% → 0.0% |      31.1 MiB → 0 B |       1,385 → 0 | `fs.File.readToEndAllocOptions__anon_2451`                      | `../opt/zig/lib/std/fs/File.zig`        |
| removed |  -31.053 MiB |  13.8% → 0.0% |      31.1 MiB → 0 B |       1,385 → 0 | `fs.Dir.readFileAllocOptions__anon_2384`                        | `../opt/zig/lib/std/fs/Dir.zig`         |
|  -42.2% |  -30.785 MiB | 32.5% → 14.0% | 72.9 MiB → 42.1 MiB | 19,401 → 16,205 | `zig.Ast.Render.finishRenderBlock`                              | `../opt/zig/lib/std/zig/Ast/Render.zig` |

# Retained heap profile diff

Retained 0 B over 0 objects.

No bytes retained in any object.
