# Allocated heap profile

Allocated 1.56 GiB over 240,915 objects (6.81 KiB per object).

| Category         |      % |     Size | Objects |
| ---------------- | -----: | -------: | ------: |
| Standard library | 100.0% | 1.56 GiB | 240,915 |

Paths starting with `./` or `../` are relative to `/out/`.

## Hottest functions

### Self size

Functions with the most bytes allocated within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|     % |     Size | Objects | Function                      | Location                        |
| ----: | -------: | ------: | ----------------------------- | ------------------------------- |
| 74.5% | 1.17 GiB | 190,395 | `heap.c_allocator_impl.alloc` | `/opt/zig/lib/std/heap.zig:208` |
| 25.5% |  408 MiB |  50,520 | `heap.c_allocator_impl.remap` | `/opt/zig/lib/std/heap.zig:291` |

#### Lines

Lines with the largest contribution to each function's self size.

##### `heap.c_allocator_impl.alloc` (`/opt/zig/lib/std/heap.zig:208`)

|      % |     Size | Objects | Location                        |
| -----: | -------: | ------: | ------------------------------- |
| 100.0% | 1.17 GiB | 190,395 | `/opt/zig/lib/std/heap.zig:232` |

##### `heap.c_allocator_impl.remap` (`/opt/zig/lib/std/heap.zig:291`)

|      % |    Size | Objects | Location                        |
| -----: | ------: | ------: | ------------------------------- |
| 100.0% | 408 MiB |  50,520 | `/opt/zig/lib/std/heap.zig:309` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `heap.c_allocator_impl.alloc` (`/opt/zig/lib/std/heap.zig:208`)

|      % |     Size | Objects | Caller                   | Location                                 |
| -----: | -------: | ------: | ------------------------ | ---------------------------------------- |
| 100.0% | 1.17 GiB | 190,395 | `mem.Allocator.rawAlloc` | `/opt/zig/lib/std/mem/Allocator.zig:141` |

##### `heap.c_allocator_impl.remap` (`/opt/zig/lib/std/heap.zig:291`)

|      % |    Size | Objects | Caller                   | Location                                 |
| -----: | ------: | ------: | ------------------------ | ---------------------------------------- |
| 100.0% | 408 MiB |  50,520 | `mem.Allocator.rawRemap` | `/opt/zig/lib/std/mem/Allocator.zig:153` |

### Total size

Functions with the most bytes allocated within the function and its callees.

|     % |     Size | Objects | Function                                                            | Location                                          |
| ----: | -------: | ------: | ------------------------------------------------------------------- | ------------------------------------------------- |
| 99.3% | 1.55 GiB | 236,835 | `profile.main`                                                      | `./profile.zig:11`                                |
| 99.2% | 1.55 GiB | 236,160 | `start.callMain`                                                    | `/opt/zig/lib/std/start.zig:696`                  |
| 99.2% | 1.55 GiB | 236,160 | `start.callMainWithArgs`                                            | `/opt/zig/lib/std/start.zig:629`                  |
| 99.2% | 1.55 GiB | 236,160 | `main`                                                              | `/opt/zig/lib/std/start.zig:641`                  |
| 99.1% | 1.55 GiB | 235,245 | `(anonymous)`                                                       | `<unknown>`                                       |
| 99.0% | 1.55 GiB | 233,580 | `__libc_start_main`                                                 | `<unknown>`                                       |
| 98.8% | 1.55 GiB | 232,380 | `_start`                                                            | `/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
| 74.5% | 1.17 GiB | 190,395 | `heap.c_allocator_impl.alloc`                                       | `/opt/zig/lib/std/heap.zig:208`                   |
| 74.5% | 1.17 GiB | 190,395 | `mem.Allocator.rawAlloc`                                            | `/opt/zig/lib/std/mem/Allocator.zig:141`          |
| 54.6% |  875 MiB |  45,885 | `zig.Ast.parse`                                                     | `/opt/zig/lib/std/zig/Ast.zig:145`                |
| 52.0% |  833 MiB | 133,755 | `mem.Allocator.allocAdvancedWithRetAddr`                            | `/opt/zig/lib/std/mem/Allocator.zig:265`          |
| 51.5% |  824 MiB |  25,485 | `mem.Allocator.allocBytesWithAlignment__anon_10001`                 | `/opt/zig/lib/std/mem/Allocator.zig:289`          |
| 51.4% |  823 MiB |  20,115 | `mem.Allocator.allocWithSizeAndAlignment__anon_9851`                | `/opt/zig/lib/std/mem/Allocator.zig:278`          |
| 51.4% |  823 MiB |  20,115 | `mem.Allocator.alignedAlloc__anon_9848`                             | `/opt/zig/lib/std/mem/Allocator.zig:255`          |
| 44.7% |  715 MiB |  86,100 | `Io.Writer.Allocating.ensureTotalCapacityPrecise`                   | `/opt/zig/lib/std/Io/Writer.zig:2627`             |
| 44.7% |  715 MiB |  86,100 | `Io.Writer.Allocating.ensureTotalCapacity`                          | `/opt/zig/lib/std/Io/Writer.zig:2620`             |
| 44.7% |  715 MiB |  86,100 | `Io.Writer.Allocating.ensureUnusedCapacity`                         | `/opt/zig/lib/std/Io/Writer.zig:2615`             |
| 35.2% |  563 MiB |  34,020 | `zig.Ast.parseTokens`                                               | `/opt/zig/lib/std/zig/Ast.zig:168`                |
| 31.9% |  512 MiB |   8,250 | `multi_array_list.MultiArrayList(zig.Ast.Node).setCapacity`         | `/opt/zig/lib/std/multi_array_list.zig:540`       |
| 31.9% |  512 MiB |   8,250 | `multi_array_list.MultiArrayList(zig.Ast.Node).ensureTotalCapacity` | `/opt/zig/lib/std/multi_array_list.zig:514`       |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|     % |     Size | Objects | Function                                                            | Location                                          |
| ----: | -------: | ------: | ------------------------------------------------------------------- | ------------------------------------------------- |
| 99.2% | 1.55 GiB | 236,160 | `start.callMain`                                                    | `/opt/zig/lib/std/start.zig:696`                  |
| 99.2% | 1.55 GiB | 236,160 | `start.callMainWithArgs`                                            | `/opt/zig/lib/std/start.zig:629`                  |
| 99.2% | 1.55 GiB | 236,160 | `main`                                                              | `/opt/zig/lib/std/start.zig:641`                  |
| 98.8% | 1.55 GiB | 232,380 | `_start`                                                            | `/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
| 74.5% | 1.17 GiB | 190,395 | `heap.c_allocator_impl.alloc`                                       | `/opt/zig/lib/std/heap.zig:208`                   |
| 74.5% | 1.17 GiB | 190,395 | `mem.Allocator.rawAlloc`                                            | `/opt/zig/lib/std/mem/Allocator.zig:141`          |
| 54.6% |  875 MiB |  45,885 | `zig.Ast.parse`                                                     | `/opt/zig/lib/std/zig/Ast.zig:145`                |
| 52.0% |  833 MiB | 133,755 | `mem.Allocator.allocAdvancedWithRetAddr`                            | `/opt/zig/lib/std/mem/Allocator.zig:265`          |
| 51.5% |  824 MiB |  25,485 | `mem.Allocator.allocBytesWithAlignment__anon_10001`                 | `/opt/zig/lib/std/mem/Allocator.zig:289`          |
| 51.4% |  823 MiB |  20,115 | `mem.Allocator.allocWithSizeAndAlignment__anon_9851`                | `/opt/zig/lib/std/mem/Allocator.zig:278`          |
| 51.4% |  823 MiB |  20,115 | `mem.Allocator.alignedAlloc__anon_9848`                             | `/opt/zig/lib/std/mem/Allocator.zig:255`          |
| 44.7% |  715 MiB |  86,100 | `Io.Writer.Allocating.ensureTotalCapacityPrecise`                   | `/opt/zig/lib/std/Io/Writer.zig:2627`             |
| 44.7% |  715 MiB |  86,100 | `Io.Writer.Allocating.ensureTotalCapacity`                          | `/opt/zig/lib/std/Io/Writer.zig:2620`             |
| 44.7% |  715 MiB |  86,100 | `Io.Writer.Allocating.ensureUnusedCapacity`                         | `/opt/zig/lib/std/Io/Writer.zig:2615`             |
| 35.2% |  563 MiB |  34,020 | `zig.Ast.parseTokens`                                               | `/opt/zig/lib/std/zig/Ast.zig:168`                |
| 31.9% |  512 MiB |   8,250 | `multi_array_list.MultiArrayList(zig.Ast.Node).setCapacity`         | `/opt/zig/lib/std/multi_array_list.zig:540`       |
| 31.9% |  512 MiB |   8,250 | `multi_array_list.MultiArrayList(zig.Ast.Node).ensureTotalCapacity` | `/opt/zig/lib/std/multi_array_list.zig:514`       |
| 25.5% |  408 MiB |  50,520 | `heap.c_allocator_impl.remap`                                       | `/opt/zig/lib/std/heap.zig:291`                   |
| 25.5% |  408 MiB |  50,520 | `mem.Allocator.rawRemap`                                            | `/opt/zig/lib/std/mem/Allocator.zig:153`          |
| 22.7% |  363 MiB | 182,685 | `zig.Ast.Render.renderTree`                                         | `/opt/zig/lib/std/zig/Ast/Render.zig:86`          |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `profile.main` (`./profile.zig:11`)

|     % |     Size | Objects | Caller           | Location                         |
| ----: | -------: | ------: | ---------------- | -------------------------------- |
| 99.9% | 1.55 GiB | 236,160 | `start.callMain` | `/opt/zig/lib/std/start.zig:696` |

##### `start.callMain` (`/opt/zig/lib/std/start.zig:696`)

|      % |     Size | Objects | Caller                   | Location                         |
| -----: | -------: | ------: | ------------------------ | -------------------------------- |
| 100.0% | 1.55 GiB | 236,160 | `start.callMainWithArgs` | `/opt/zig/lib/std/start.zig:629` |

##### `start.callMainWithArgs` (`/opt/zig/lib/std/start.zig:629`)

|      % |     Size | Objects | Caller | Location                         |
| -----: | -------: | ------: | ------ | -------------------------------- |
| 100.0% | 1.55 GiB | 236,160 | `main` | `/opt/zig/lib/std/start.zig:641` |

##### `main` (`/opt/zig/lib/std/start.zig:641`)

|     % |     Size | Objects | Caller        | Location    |
| ----: | -------: | ------: | ------------- | ----------- |
| 99.9% | 1.55 GiB | 235,245 | `(anonymous)` | `<unknown>` |

##### `(anonymous)` (`<unknown>`)

|     % |     Size | Objects | Caller              | Location    |
| ----: | -------: | ------: | ------------------- | ----------- |
| 99.9% | 1.55 GiB | 233,580 | `__libc_start_main` | `<unknown>` |

##### `__libc_start_main` (`<unknown>`)

|     % |     Size | Objects | Caller   | Location                                          |
| ----: | -------: | ------: | -------- | ------------------------------------------------- |
| 99.8% | 1.55 GiB | 232,380 | `_start` | `/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |

##### `heap.c_allocator_impl.alloc` (`/opt/zig/lib/std/heap.zig:208`)

|      % |     Size | Objects | Caller                   | Location                                 |
| -----: | -------: | ------: | ------------------------ | ---------------------------------------- |
| 100.0% | 1.17 GiB | 190,395 | `mem.Allocator.rawAlloc` | `/opt/zig/lib/std/mem/Allocator.zig:141` |

##### `mem.Allocator.rawAlloc` (`/opt/zig/lib/std/mem/Allocator.zig:141`)

|     % |     Size | Objects | Caller                                              | Location                                 |
| ----: | -------: | ------: | --------------------------------------------------- | ---------------------------------------- |
| 69.1% |  824 MiB |  25,485 | `mem.Allocator.allocBytesWithAlignment__anon_10001` | `/opt/zig/lib/std/mem/Allocator.zig:289` |
| 30.2% |  360 MiB |  56,640 | `Io.Writer.Allocating.ensureTotalCapacityPrecise`   | `/opt/zig/lib/std/Io/Writer.zig:2627`    |
|  0.4% | 4.45 MiB |  73,980 | `mem.Allocator.allocBytesWithAlignment__anon_7893`  | `/opt/zig/lib/std/mem/Allocator.zig:289` |
|  0.4% | 4.21 MiB |  34,290 | `mem.Allocator.allocBytesWithAlignment__anon_8636`  | `/opt/zig/lib/std/mem/Allocator.zig:289` |

##### `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`)

|      % |    Size | Objects | Caller         | Location           |
| -----: | ------: | ------: | -------------- | ------------------ |
| 100.0% | 875 MiB |  45,885 | `profile.main` | `./profile.zig:11` |

##### `mem.Allocator.allocAdvancedWithRetAddr` (`/opt/zig/lib/std/mem/Allocator.zig:265`)

|     % |     Size | Objects | Caller                                   | Location                                 |
| ----: | -------: | ------: | ---------------------------------------- | ---------------------------------------- |
| 98.8% |  823 MiB |  20,115 | `mem.Allocator.alignedAlloc__anon_9848`  | `/opt/zig/lib/std/mem/Allocator.zig:255` |
|  0.5% |  4.2 MiB |  33,900 | `mem.Allocator.alignedAlloc__anon_31630` | `/opt/zig/lib/std/mem/Allocator.zig:255` |
|  0.4% | 3.22 MiB |  42,915 | `mem.Allocator.alloc__anon_31120`        | `/opt/zig/lib/std/mem/Allocator.zig:197` |
|  0.2% | 1.29 MiB |   5,250 | `mem.Allocator.alignedAlloc__anon_32903` | `/opt/zig/lib/std/mem/Allocator.zig:255` |
|  0.1% |  728 KiB |   5,175 | `mem.Allocator.alignedAlloc__anon_31457` | `/opt/zig/lib/std/mem/Allocator.zig:255` |

##### `mem.Allocator.allocBytesWithAlignment__anon_10001` (`/opt/zig/lib/std/mem/Allocator.zig:289`)

|     % |    Size | Objects | Caller                                                | Location                                 |
| ----: | ------: | ------: | ----------------------------------------------------- | ---------------------------------------- |
| 99.8% | 823 MiB |  20,115 | `mem.Allocator.allocWithSizeAndAlignment__anon_9851`  | `/opt/zig/lib/std/mem/Allocator.zig:278` |
|  0.2% | 1.3 MiB |   5,370 | `mem.Allocator.allocWithSizeAndAlignment__anon_32916` | `/opt/zig/lib/std/mem/Allocator.zig:278` |

##### `mem.Allocator.allocWithSizeAndAlignment__anon_9851` (`/opt/zig/lib/std/mem/Allocator.zig:278`)

|      % |    Size | Objects | Caller                                   | Location                                 |
| -----: | ------: | ------: | ---------------------------------------- | ---------------------------------------- |
| 100.0% | 823 MiB |  20,115 | `mem.Allocator.allocAdvancedWithRetAddr` | `/opt/zig/lib/std/mem/Allocator.zig:265` |

##### `mem.Allocator.alignedAlloc__anon_9848` (`/opt/zig/lib/std/mem/Allocator.zig:255`)

|     % |    Size | Objects | Caller                                                                        | Location                                    |
| ----: | ------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 62.2% | 512 MiB |   8,250 | `multi_array_list.MultiArrayList(zig.Ast.Node).setCapacity`                   | `/opt/zig/lib/std/multi_array_list.zig:540` |
| 37.8% | 311 MiB |  11,865 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).setCapacity` | `/opt/zig/lib/std/multi_array_list.zig:540` |

##### `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`/opt/zig/lib/std/Io/Writer.zig:2627`)

|      % |    Size | Objects | Caller                                     | Location                              |
| -----: | ------: | ------: | ------------------------------------------ | ------------------------------------- |
| 100.0% | 715 MiB |  86,100 | `Io.Writer.Allocating.ensureTotalCapacity` | `/opt/zig/lib/std/Io/Writer.zig:2620` |

##### `Io.Writer.Allocating.ensureTotalCapacity` (`/opt/zig/lib/std/Io/Writer.zig:2620`)

|      % |    Size | Objects | Caller                                      | Location                              |
| -----: | ------: | ------: | ------------------------------------------- | ------------------------------------- |
| 100.0% | 715 MiB |  86,100 | `Io.Writer.Allocating.ensureUnusedCapacity` | `/opt/zig/lib/std/Io/Writer.zig:2615` |

##### `Io.Writer.Allocating.ensureUnusedCapacity` (`/opt/zig/lib/std/Io/Writer.zig:2615`)

|     % |    Size | Objects | Caller                          | Location                              |
| ----: | ------: | ------: | ------------------------------- | ------------------------------------- |
| 50.6% | 362 MiB |  78,225 | `Io.Writer.Allocating.drain`    | `/opt/zig/lib/std/Io/Writer.zig:2698` |
| 49.4% | 353 MiB |   7,875 | `Io.Writer.Allocating.sendFile` | `/opt/zig/lib/std/Io/Writer.zig:2725` |

##### `zig.Ast.parseTokens` (`/opt/zig/lib/std/zig/Ast.zig:168`)

|      % |    Size | Objects | Caller          | Location                           |
| -----: | ------: | ------: | --------------- | ---------------------------------- |
| 100.0% | 563 MiB |  34,020 | `zig.Ast.parse` | `/opt/zig/lib/std/zig/Ast.zig:145` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).setCapacity` (`/opt/zig/lib/std/multi_array_list.zig:540`)

|      % |    Size | Objects | Caller                                                              | Location                                    |
| -----: | ------: | ------: | ------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 512 MiB |   8,250 | `multi_array_list.MultiArrayList(zig.Ast.Node).ensureTotalCapacity` | `/opt/zig/lib/std/multi_array_list.zig:514` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).ensureTotalCapacity` (`/opt/zig/lib/std/multi_array_list.zig:514`)

|      % |    Size | Objects | Caller                | Location                           |
| -----: | ------: | ------: | --------------------- | ---------------------------------- |
| 100.0% | 512 MiB |   8,250 | `zig.Ast.parseTokens` | `/opt/zig/lib/std/zig/Ast.zig:168` |

##### `heap.c_allocator_impl.remap` (`/opt/zig/lib/std/heap.zig:291`)

|      % |    Size | Objects | Caller                   | Location                                 |
| -----: | ------: | ------: | ------------------------ | ---------------------------------------- |
| 100.0% | 408 MiB |  50,520 | `mem.Allocator.rawRemap` | `/opt/zig/lib/std/mem/Allocator.zig:153` |

##### `mem.Allocator.rawRemap` (`/opt/zig/lib/std/mem/Allocator.zig:153`)

|     % |     Size | Objects | Caller                                            | Location                                 |
| ----: | -------: | ------: | ------------------------------------------------- | ---------------------------------------- |
| 86.9% |  355 MiB |  29,460 | `Io.Writer.Allocating.ensureTotalCapacityPrecise` | `/opt/zig/lib/std/Io/Writer.zig:2627`    |
| 12.0% | 49.1 MiB |  15,270 | `mem.Allocator.remap__anon_32898`                 | `/opt/zig/lib/std/mem/Allocator.zig:354` |
|  1.0% | 4.24 MiB |   5,715 | `mem.Allocator.remap__anon_35520`                 | `/opt/zig/lib/std/mem/Allocator.zig:354` |
| <0.1% |   27 KiB |      75 | `mem.Allocator.remap__anon_31450`                 | `/opt/zig/lib/std/mem/Allocator.zig:354` |

##### `zig.Ast.Render.renderTree` (`/opt/zig/lib/std/zig/Ast/Render.zig:86`)

|      % |    Size | Objects | Caller           | Location                           |
| -----: | ------: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 363 MiB | 182,685 | `zig.Ast.render` | `/opt/zig/lib/std/zig/Ast.zig:228` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `profile.main` (`./profile.zig:11`)

|     % |     Size | Objects | Callee                                   | Location                           |
| ----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 55.0% |  875 MiB |  45,885 | `zig.Ast.parse`                          | `/opt/zig/lib/std/zig/Ast.zig:145` |
| 22.8% |  363 MiB | 182,685 | `zig.Ast.renderAlloc`                    | `/opt/zig/lib/std/zig/Ast.zig:217` |
| 22.2% |  353 MiB |   8,250 | `Io.Dir.readFileAllocOptions__anon_2739` | `/opt/zig/lib/std/Io/Dir.zig:1346` |
| <0.1% | 2.07 KiB |      15 | `Io.Dir.Walker.next`                     | `/opt/zig/lib/std/Io/Dir.zig:365`  |

##### `start.callMain` (`/opt/zig/lib/std/start.zig:696`)

|      % |     Size | Objects | Callee         | Location           |
| -----: | -------: | ------: | -------------- | ------------------ |
| 100.0% | 1.55 GiB | 236,160 | `profile.main` | `./profile.zig:11` |

##### `start.callMainWithArgs` (`/opt/zig/lib/std/start.zig:629`)

|      % |     Size | Objects | Callee           | Location                         |
| -----: | -------: | ------: | ---------------- | -------------------------------- |
| 100.0% | 1.55 GiB | 236,160 | `start.callMain` | `/opt/zig/lib/std/start.zig:696` |

##### `main` (`/opt/zig/lib/std/start.zig:641`)

|      % |     Size | Objects | Callee                   | Location                         |
| -----: | -------: | ------: | ------------------------ | -------------------------------- |
| 100.0% | 1.55 GiB | 236,160 | `start.callMainWithArgs` | `/opt/zig/lib/std/start.zig:629` |

##### `(anonymous)` (`<unknown>`)

|      % |     Size | Objects | Callee | Location                         |
| -----: | -------: | ------: | ------ | -------------------------------- |
| 100.0% | 1.55 GiB | 235,245 | `main` | `/opt/zig/lib/std/start.zig:641` |

##### `__libc_start_main` (`<unknown>`)

|      % |     Size | Objects | Callee        | Location    |
| -----: | -------: | ------: | ------------- | ----------- |
| 100.0% | 1.55 GiB | 233,580 | `(anonymous)` | `<unknown>` |

##### `_start` (`/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)

|      % |     Size | Objects | Callee              | Location    |
| -----: | -------: | ------: | ------------------- | ----------- |
| 100.0% | 1.55 GiB | 232,380 | `__libc_start_main` | `<unknown>` |

##### `mem.Allocator.rawAlloc` (`/opt/zig/lib/std/mem/Allocator.zig:141`)

|      % |     Size | Objects | Callee                        | Location                        |
| -----: | -------: | ------: | ----------------------------- | ------------------------------- |
| 100.0% | 1.17 GiB | 190,395 | `heap.c_allocator_impl.alloc` | `/opt/zig/lib/std/heap.zig:208` |

##### `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`)

|     % |    Size | Objects | Callee                                                                                | Location                                    |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------- | ------------------------------------------- |
| 64.4% | 563 MiB |  34,020 | `zig.Ast.parseTokens`                                                                 | `/opt/zig/lib/std/zig/Ast.zig:168`          |
| 25.3% | 221 MiB |   7,875 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).ensureTotalCapacity` | `/opt/zig/lib/std/multi_array_list.zig:514` |
| 10.3% |  90 MiB |   3,990 | `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).append`              | `/opt/zig/lib/std/multi_array_list.zig:273` |

##### `mem.Allocator.allocAdvancedWithRetAddr` (`/opt/zig/lib/std/mem/Allocator.zig:265`)

|     % |     Size | Objects | Callee                                                | Location                                 |
| ----: | -------: | ------: | ----------------------------------------------------- | ---------------------------------------- |
| 98.8% |  823 MiB |  20,115 | `mem.Allocator.allocWithSizeAndAlignment__anon_9851`  | `/opt/zig/lib/std/mem/Allocator.zig:278` |
|  0.5% |  4.2 MiB |  33,900 | `mem.Allocator.allocWithSizeAndAlignment__anon_31645` | `/opt/zig/lib/std/mem/Allocator.zig:278` |
|  0.4% | 3.74 MiB |  68,805 | `mem.Allocator.allocWithSizeAndAlignment__anon_10624` | `/opt/zig/lib/std/mem/Allocator.zig:278` |
|  0.2% |  1.3 MiB |   5,370 | `mem.Allocator.allocWithSizeAndAlignment__anon_32916` | `/opt/zig/lib/std/mem/Allocator.zig:278` |
|  0.1% |  728 KiB |   5,175 | `mem.Allocator.allocWithSizeAndAlignment__anon_19402` | `/opt/zig/lib/std/mem/Allocator.zig:278` |

##### `mem.Allocator.allocBytesWithAlignment__anon_10001` (`/opt/zig/lib/std/mem/Allocator.zig:289`)

|      % |    Size | Objects | Callee                   | Location                                 |
| -----: | ------: | ------: | ------------------------ | ---------------------------------------- |
| 100.0% | 824 MiB |  25,485 | `mem.Allocator.rawAlloc` | `/opt/zig/lib/std/mem/Allocator.zig:141` |

##### `mem.Allocator.allocWithSizeAndAlignment__anon_9851` (`/opt/zig/lib/std/mem/Allocator.zig:278`)

|      % |    Size | Objects | Callee                                              | Location                                 |
| -----: | ------: | ------: | --------------------------------------------------- | ---------------------------------------- |
| 100.0% | 823 MiB |  20,115 | `mem.Allocator.allocBytesWithAlignment__anon_10001` | `/opt/zig/lib/std/mem/Allocator.zig:289` |

##### `mem.Allocator.alignedAlloc__anon_9848` (`/opt/zig/lib/std/mem/Allocator.zig:255`)

|      % |    Size | Objects | Callee                                   | Location                                 |
| -----: | ------: | ------: | ---------------------------------------- | ---------------------------------------- |
| 100.0% | 823 MiB |  20,115 | `mem.Allocator.allocAdvancedWithRetAddr` | `/opt/zig/lib/std/mem/Allocator.zig:265` |

##### `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`/opt/zig/lib/std/Io/Writer.zig:2627`)

|     % |    Size | Objects | Callee                   | Location                                 |
| ----: | ------: | ------: | ------------------------ | ---------------------------------------- |
| 50.4% | 360 MiB |  56,640 | `mem.Allocator.rawAlloc` | `/opt/zig/lib/std/mem/Allocator.zig:141` |
| 49.6% | 355 MiB |  29,460 | `mem.Allocator.rawRemap` | `/opt/zig/lib/std/mem/Allocator.zig:153` |

##### `Io.Writer.Allocating.ensureTotalCapacity` (`/opt/zig/lib/std/Io/Writer.zig:2620`)

|      % |    Size | Objects | Callee                                            | Location                              |
| -----: | ------: | ------: | ------------------------------------------------- | ------------------------------------- |
| 100.0% | 715 MiB |  86,100 | `Io.Writer.Allocating.ensureTotalCapacityPrecise` | `/opt/zig/lib/std/Io/Writer.zig:2627` |

##### `Io.Writer.Allocating.ensureUnusedCapacity` (`/opt/zig/lib/std/Io/Writer.zig:2615`)

|      % |    Size | Objects | Callee                                     | Location                              |
| -----: | ------: | ------: | ------------------------------------------ | ------------------------------------- |
| 100.0% | 715 MiB |  86,100 | `Io.Writer.Allocating.ensureTotalCapacity` | `/opt/zig/lib/std/Io/Writer.zig:2620` |

##### `zig.Ast.parseTokens` (`/opt/zig/lib/std/zig/Ast.zig:168`)

|     % |     Size | Objects | Callee                                                              | Location                                    |
| ----: | -------: | ------: | ------------------------------------------------------------------- | ------------------------------------------- |
| 90.8% |  512 MiB |   8,250 | `multi_array_list.MultiArrayList(zig.Ast.Node).ensureTotalCapacity` | `/opt/zig/lib/std/multi_array_list.zig:514` |
|  9.2% | 51.7 MiB |  25,770 | `zig.Parse.parseRoot`                                               | `/opt/zig/lib/std/zig/Parse.zig:192`        |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).setCapacity` (`/opt/zig/lib/std/multi_array_list.zig:540`)

|      % |    Size | Objects | Callee                                  | Location                                 |
| -----: | ------: | ------: | --------------------------------------- | ---------------------------------------- |
| 100.0% | 512 MiB |   8,250 | `mem.Allocator.alignedAlloc__anon_9848` | `/opt/zig/lib/std/mem/Allocator.zig:255` |

##### `multi_array_list.MultiArrayList(zig.Ast.Node).ensureTotalCapacity` (`/opt/zig/lib/std/multi_array_list.zig:514`)

|      % |    Size | Objects | Callee                                                      | Location                                    |
| -----: | ------: | ------: | ----------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 512 MiB |   8,250 | `multi_array_list.MultiArrayList(zig.Ast.Node).setCapacity` | `/opt/zig/lib/std/multi_array_list.zig:540` |

##### `mem.Allocator.rawRemap` (`/opt/zig/lib/std/mem/Allocator.zig:153`)

|      % |    Size | Objects | Callee                        | Location                        |
| -----: | ------: | ------: | ----------------------------- | ------------------------------- |
| 100.0% | 408 MiB |  50,520 | `heap.c_allocator_impl.remap` | `/opt/zig/lib/std/heap.zig:291` |

##### `zig.Ast.Render.renderTree` (`/opt/zig/lib/std/zig/Ast/Render.zig:86`)

|     % |     Size | Objects | Callee                                      | Location                                   |
| ----: | -------: | ------: | ------------------------------------------- | ------------------------------------------ |
| 99.4% |  361 MiB | 179,235 | `zig.Ast.Render.renderMembers`              | `/opt/zig/lib/std/zig/Ast/Render.zig:122`  |
|  0.6% | 2.19 MiB |   3,450 | `zig.Ast.Render.renderContainerDocComments` | `/opt/zig/lib/std/zig/Ast/Render.zig:3139` |

## Hottest call stacks

Call stacks with the most bytes allocated in their leaf frame.

Common call stack: `profile.main` (`./profile.zig:11`) ← `start.callMain` (`/opt/zig/lib/std/start.zig:696`) ← `start.callMainWithArgs` (629) ← `main` (641) ← `(anonymous)` ← `__libc_start_main` ← `_start` (`/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)

|     % |     Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 31.9% |  512 MiB |   8,250 | `heap.c_allocator_impl.alloc` (`/opt/zig/lib/std/heap.zig:208`) ← `mem.Allocator.rawAlloc` (`/opt/zig/lib/std/mem/Allocator.zig:141`) ← `mem.Allocator.allocBytesWithAlignment__anon_10001` (289) ← `mem.Allocator.allocWithSizeAndAlignment__anon_9851` (278) ← `mem.Allocator.allocAdvancedWithRetAddr` (265) ← `mem.Allocator.alignedAlloc__anon_9848` (255) ← `multi_array_list.MultiArrayList(zig.Ast.Node).setCapacity` (`/opt/zig/lib/std/multi_array_list.zig:540`) ← `multi_array_list.MultiArrayList(zig.Ast.Node).ensureTotalCapacity` (514) ← `zig.Ast.parseTokens` (`/opt/zig/lib/std/zig/Ast.zig:168`) ← `zig.Ast.parse` (145)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 22.1% |  353 MiB |   7,875 | `heap.c_allocator_impl.alloc` (`/opt/zig/lib/std/heap.zig:208`) ← `mem.Allocator.rawAlloc` (`/opt/zig/lib/std/mem/Allocator.zig:141`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`/opt/zig/lib/std/Io/Writer.zig:2627`) ← `Io.Writer.Allocating.ensureTotalCapacity` (2620) ← `Io.Writer.Allocating.ensureUnusedCapacity` (2615) ← `Io.Writer.Allocating.sendFile` (2725) ← `Io.Writer.sendFile` (919) ← `Io.File.Reader.streamMode` (`/opt/zig/lib/std/Io/File/Reader.zig:205`) ← `Io.File.Reader.stream` (200) ← `Io.Reader.stream` (`/opt/zig/lib/std/Io/Reader.zig:168`) ← `Io.Reader.appendRemainingAligned__anon_35672` (367) ← `Io.Reader.allocRemainingAlignedSentinel__anon_35655` (299) ← `Io.Dir.readFileAllocOptions__anon_2739` (`/opt/zig/lib/std/Io/Dir.zig:1346`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 13.8% |  221 MiB |   7,875 | `heap.c_allocator_impl.alloc` (`/opt/zig/lib/std/heap.zig:208`) ← `mem.Allocator.rawAlloc` (`/opt/zig/lib/std/mem/Allocator.zig:141`) ← `mem.Allocator.allocBytesWithAlignment__anon_10001` (289) ← `mem.Allocator.allocWithSizeAndAlignment__anon_9851` (278) ← `mem.Allocator.allocAdvancedWithRetAddr` (265) ← `mem.Allocator.alignedAlloc__anon_9848` (255) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).setCapacity` (`/opt/zig/lib/std/multi_array_list.zig:540`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).ensureTotalCapacity` (514) ← `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  5.6% |   90 MiB |   3,990 | `heap.c_allocator_impl.alloc` (`/opt/zig/lib/std/heap.zig:208`) ← `mem.Allocator.rawAlloc` (`/opt/zig/lib/std/mem/Allocator.zig:141`) ← `mem.Allocator.allocBytesWithAlignment__anon_10001` (289) ← `mem.Allocator.allocWithSizeAndAlignment__anon_9851` (278) ← `mem.Allocator.allocAdvancedWithRetAddr` (265) ← `mem.Allocator.alignedAlloc__anon_9848` (255) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).setCapacity` (`/opt/zig/lib/std/multi_array_list.zig:540`) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).ensureTotalCapacity` (514) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).ensureUnusedCapacity` (533) ← `multi_array_list.MultiArrayList(zig.Ast.TokenList__struct_2754).append` (273) ← `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.5% | 8.48 MiB |      15 | `heap.c_allocator_impl.remap` (`/opt/zig/lib/std/heap.zig:291`) ← `mem.Allocator.rawRemap` (`/opt/zig/lib/std/mem/Allocator.zig:153`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`/opt/zig/lib/std/Io/Writer.zig:2627`) ← `Io.Writer.Allocating.ensureTotalCapacity` (2620) ← `Io.Writer.Allocating.ensureUnusedCapacity` (2615) ← `Io.Writer.Allocating.drain` (2698) ← `Io.Writer.write` (532) ← `Io.Writer.writeAll` (549) ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`/opt/zig/lib/std/zig/Ast/Render.zig:3353`) ← `zig.Ast.Render.renderToken` (2720) ← `zig.Ast.Render.renderIdentifier` (2812) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderCall` (2591) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderExpressionFixup` (948) ← `zig.Ast.Render.renderStructInit` (2051) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderParamList` (2600) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1253) ← `zig.Ast.Render.renderVarDecl` (1235) ← `zig.Ast.Render.finishRenderBlock` (2023) ← `zig.Ast.Render.renderBlock` (1998) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderExpressions` (305) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.finishRenderBlock` (2023) ← `zig.Ast.Render.renderBlock` (1998) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`) ← `zig.Ast.renderAlloc` (217)                                                                       |
|  0.5% | 8.33 MiB |      45 | `heap.c_allocator_impl.remap` (`/opt/zig/lib/std/heap.zig:291`) ← `mem.Allocator.rawRemap` (`/opt/zig/lib/std/mem/Allocator.zig:153`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`/opt/zig/lib/std/Io/Writer.zig:2627`) ← `Io.Writer.Allocating.ensureTotalCapacity` (2620) ← `Io.Writer.Allocating.ensureUnusedCapacity` (2615) ← `Io.Writer.Allocating.drain` (2698) ← `Io.Writer.write` (532) ← `Io.Writer.writeAll` (549) ← `Io.Writer.alignBufferOptions` (1039) ← `Io.Writer.printValue__anon_6784` (1065) ← `Io.Writer.print__anon_4594` (612) ← `zig.Ast.Render.AutoIndentingStream.print__anon_32570` (`/opt/zig/lib/std/zig/Ast/Render.zig:3362`) ← `zig.Ast.Render.renderComments` (3011) ← `zig.Ast.Render.renderSpace` (2738) ← `zig.Ast.Render.renderToken` (2720) ← `zig.Ast.Render.renderSpace` (2738) ← `zig.Ast.Render.renderToken` (2720) ← `zig.Ast.Render.renderContainerDecl` (2344) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1253) ← `zig.Ast.Render.renderVarDecl` (1235) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`) ← `zig.Ast.renderAlloc` (217)                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.4% | 6.36 MiB |     240 | `heap.c_allocator_impl.remap` (`/opt/zig/lib/std/heap.zig:291`) ← `mem.Allocator.rawRemap` (`/opt/zig/lib/std/mem/Allocator.zig:153`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`/opt/zig/lib/std/Io/Writer.zig:2627`) ← `Io.Writer.Allocating.ensureTotalCapacity` (2620) ← `Io.Writer.Allocating.ensureUnusedCapacity` (2615) ← `Io.Writer.Allocating.drain` (2698) ← `Io.Writer.write` (532) ← `Io.Writer.writeAll` (549) ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`/opt/zig/lib/std/zig/Ast/Render.zig:3353`) ← `zig.Ast.Render.renderToken` (2720) ← `zig.Ast.Render.renderIdentifier` (2812) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1253) ← `zig.Ast.Render.renderVarDecl` (1235) ← `zig.Ast.Render.finishRenderBlock` (2023) ← `zig.Ast.Render.renderBlock` (1998) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`) ← `zig.Ast.renderAlloc` (217)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.4% | 6.02 MiB |     390 | `heap.c_allocator_impl.remap` (`/opt/zig/lib/std/heap.zig:291`) ← `mem.Allocator.rawRemap` (`/opt/zig/lib/std/mem/Allocator.zig:153`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`/opt/zig/lib/std/Io/Writer.zig:2627`) ← `Io.Writer.Allocating.ensureTotalCapacity` (2620) ← `Io.Writer.Allocating.ensureUnusedCapacity` (2615) ← `Io.Writer.Allocating.drain` (2698) ← `Io.Writer.write` (532) ← `Io.Writer.writeAll` (549) ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`/opt/zig/lib/std/zig/Ast/Render.zig:3353`) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderExpressionFixup` (948) ← `zig.Ast.Render.renderStructInit` (2051) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.finishRenderBlock` (2023) ← `zig.Ast.Render.renderBlock` (1998) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1253) ← `zig.Ast.Render.renderVarDecl` (1235) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`) ← `zig.Ast.renderAlloc` (217)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.4% | 5.99 MiB |     135 | `heap.c_allocator_impl.remap` (`/opt/zig/lib/std/heap.zig:291`) ← `mem.Allocator.rawRemap` (`/opt/zig/lib/std/mem/Allocator.zig:153`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`/opt/zig/lib/std/Io/Writer.zig:2627`) ← `Io.Writer.Allocating.ensureTotalCapacity` (2620) ← `Io.Writer.Allocating.ensureUnusedCapacity` (2615) ← `Io.Writer.Allocating.drain` (2698) ← `Io.Writer.write` (532) ← `Io.Writer.writeAll` (549) ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`/opt/zig/lib/std/zig/Ast/Render.zig:3353`) ← `zig.Ast.Render.renderToken` (2720) ← `zig.Ast.Render.renderIdentifier` (2812) ← `zig.Ast.Render.renderParamList` (2600) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.finishRenderBlock` (2023) ← `zig.Ast.Render.renderBlock` (1998) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`) ← `zig.Ast.renderAlloc` (217)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.4% | 5.65 MiB |      15 | `heap.c_allocator_impl.remap` (`/opt/zig/lib/std/heap.zig:291`) ← `mem.Allocator.rawRemap` (`/opt/zig/lib/std/mem/Allocator.zig:153`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`/opt/zig/lib/std/Io/Writer.zig:2627`) ← `Io.Writer.Allocating.ensureTotalCapacity` (2620) ← `Io.Writer.Allocating.ensureUnusedCapacity` (2615) ← `Io.Writer.Allocating.drain` (2698) ← `Io.Writer.write` (532) ← `Io.Writer.writeAll` (549) ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`/opt/zig/lib/std/zig/Ast/Render.zig:3353`) ← `zig.Ast.Render.renderToken` (2720) ← `zig.Ast.Render.renderIdentifier` (2812) ← `zig.Ast.Render.renderWhile` (1393) ← `zig.Ast.Render.renderIf` (1374) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1253) ← `zig.Ast.Render.renderVarDecl` (1235) ← `zig.Ast.Render.finishRenderBlock` (2023) ← `zig.Ast.Render.renderBlock` (1998) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`) ← `zig.Ast.renderAlloc` (217)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.3% | 5.58 MiB |     180 | `heap.c_allocator_impl.remap` (`/opt/zig/lib/std/heap.zig:291`) ← `mem.Allocator.rawRemap` (`/opt/zig/lib/std/mem/Allocator.zig:153`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`/opt/zig/lib/std/Io/Writer.zig:2627`) ← `Io.Writer.Allocating.ensureTotalCapacity` (2620) ← `Io.Writer.Allocating.ensureUnusedCapacity` (2615) ← `Io.Writer.Allocating.drain` (2698) ← `Io.Writer.write` (532) ← `Io.Writer.writeAll` (549) ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`/opt/zig/lib/std/zig/Ast/Render.zig:3353`) ← `zig.Ast.Render.renderToken` (2720) ← `zig.Ast.Render.renderIdentifier` (2812) ← `zig.Ast.Render.renderContainerField` (1577) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderContainerDecl` (2344) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1253) ← `zig.Ast.Render.renderVarDecl` (1235) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`) ← `zig.Ast.renderAlloc` (217)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.3% | 5.27 MiB |     525 | `heap.c_allocator_impl.remap` (`/opt/zig/lib/std/heap.zig:291`) ← `mem.Allocator.rawRemap` (`/opt/zig/lib/std/mem/Allocator.zig:153`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`/opt/zig/lib/std/Io/Writer.zig:2627`) ← `Io.Writer.Allocating.ensureTotalCapacity` (2620) ← `Io.Writer.Allocating.ensureUnusedCapacity` (2615) ← `Io.Writer.Allocating.drain` (2698) ← `Io.Writer.write` (532) ← `Io.Writer.writeAll` (549) ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`/opt/zig/lib/std/zig/Ast/Render.zig:3353`) ← `zig.Ast.Render.renderToken` (2720) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.finishRenderBlock` (2023) ← `zig.Ast.Render.renderBlock` (1998) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`) ← `zig.Ast.renderAlloc` (217)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.3% |  4.8 MiB |      45 | `heap.c_allocator_impl.remap` (`/opt/zig/lib/std/heap.zig:291`) ← `mem.Allocator.rawRemap` (`/opt/zig/lib/std/mem/Allocator.zig:153`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`/opt/zig/lib/std/Io/Writer.zig:2627`) ← `Io.Writer.Allocating.ensureTotalCapacity` (2620) ← `Io.Writer.Allocating.ensureUnusedCapacity` (2615) ← `Io.Writer.Allocating.drain` (2698) ← `Io.Writer.write` (532) ← `Io.Writer.writeAll` (549) ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`/opt/zig/lib/std/zig/Ast/Render.zig:3353`) ← `zig.Ast.Render.renderToken` (2720) ← `zig.Ast.Render.renderIdentifier` (2812) ← `zig.Ast.Render.renderArrayInit` (2110) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderParamList` (2600) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderExpressionFixup` (948) ← `zig.Ast.Render.renderStructInit` (2051) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1253) ← `zig.Ast.Render.renderVarDecl` (1235) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderContainerDecl` (2344) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1253) ← `zig.Ast.Render.renderVarDecl` (1235) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`) ← `zig.Ast.renderAlloc` (217)                                                                                                                                                                                                                                                                        |
|  0.3% | 4.49 MiB |     420 | `heap.c_allocator_impl.remap` (`/opt/zig/lib/std/heap.zig:291`) ← `mem.Allocator.rawRemap` (`/opt/zig/lib/std/mem/Allocator.zig:153`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`/opt/zig/lib/std/Io/Writer.zig:2627`) ← `Io.Writer.Allocating.ensureTotalCapacity` (2620) ← `Io.Writer.Allocating.ensureUnusedCapacity` (2615) ← `Io.Writer.Allocating.drain` (2698) ← `Io.Writer.write` (532) ← `Io.Writer.writeAll` (549) ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`/opt/zig/lib/std/zig/Ast/Render.zig:3353`) ← `zig.Ast.Render.renderToken` (2720) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`) ← `zig.Ast.renderAlloc` (217)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.3% |  4.2 MiB |     675 | `heap.c_allocator_impl.remap` (`/opt/zig/lib/std/heap.zig:291`) ← `mem.Allocator.rawRemap` (`/opt/zig/lib/std/mem/Allocator.zig:153`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`/opt/zig/lib/std/Io/Writer.zig:2627`) ← `Io.Writer.Allocating.ensureTotalCapacity` (2620) ← `Io.Writer.Allocating.ensureUnusedCapacity` (2615) ← `Io.Writer.Allocating.drain` (2698) ← `Io.Writer.write` (532) ← `Io.Writer.writeAll` (549) ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`/opt/zig/lib/std/zig/Ast/Render.zig:3353`) ← `zig.Ast.Render.renderToken` (2720) ← `zig.Ast.Render.renderIdentifier` (2812) ← `zig.Ast.Render.renderFnProto` (1766) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`) ← `zig.Ast.renderAlloc` (217)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.3% | 4.16 MiB |      15 | `heap.c_allocator_impl.remap` (`/opt/zig/lib/std/heap.zig:291`) ← `mem.Allocator.rawRemap` (`/opt/zig/lib/std/mem/Allocator.zig:153`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`/opt/zig/lib/std/Io/Writer.zig:2627`) ← `Io.Writer.Allocating.ensureTotalCapacity` (2620) ← `Io.Writer.Allocating.ensureUnusedCapacity` (2615) ← `Io.Writer.Allocating.drain` (2698) ← `Io.Writer.writeSplat` (181) ← `Io.Writer.splatByte` (812) ← `Io.Writer.splatByteAll` (770) ← `zig.Ast.Render.AutoIndentingStream.applyIndent` (`/opt/zig/lib/std/zig/Ast/Render.zig:3516`) ← `zig.Ast.Render.AutoIndentingStream.writeAll` (3353) ← `zig.Ast.Render.renderToken` (2720) ← `zig.Ast.Render.renderStructInit` (2051) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderParamList` (2600) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderExpressionFixup` (948) ← `zig.Ast.Render.renderStructInit` (2051) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderParamList` (2600) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1253) ← `zig.Ast.Render.renderVarDecl` (1235) ← `zig.Ast.Render.finishRenderBlock` (2023) ← `zig.Ast.Render.renderBlock` (1998) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderContainerDecl` (2344) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1253) ← `zig.Ast.Render.renderVarDecl` (1235) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`) ← `zig.Ast.renderAlloc` (217) |
|  0.3% | 4.09 MiB |      45 | `heap.c_allocator_impl.remap` (`/opt/zig/lib/std/heap.zig:291`) ← `mem.Allocator.rawRemap` (`/opt/zig/lib/std/mem/Allocator.zig:153`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`/opt/zig/lib/std/Io/Writer.zig:2627`) ← `Io.Writer.Allocating.ensureTotalCapacity` (2620) ← `Io.Writer.Allocating.ensureUnusedCapacity` (2615) ← `Io.Writer.Allocating.drain` (2698) ← `Io.Writer.writeSplat` (181) ← `Io.Writer.splatByte` (812) ← `Io.Writer.splatByteAll` (770) ← `zig.Ast.Render.AutoIndentingStream.applyIndent` (`/opt/zig/lib/std/zig/Ast/Render.zig:3516`) ← `zig.Ast.Render.AutoIndentingStream.writeAll` (3353) ← `zig.Ast.Render.renderToken` (2720) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderSwitchCase` (1944) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderExpressions` (305) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.finishRenderBlock` (2023) ← `zig.Ast.Render.renderBlock` (1998) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderThenElse` (1455) ← `zig.Ast.Render.renderWhile` (1393) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.finishRenderBlock` (2023) ← `zig.Ast.Render.renderBlock` (1998) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`) ← `zig.Ast.renderAlloc` (217)                                                                                                                                                                                                                                                 |
|  0.2% | 3.86 MiB |      75 | `heap.c_allocator_impl.remap` (`/opt/zig/lib/std/heap.zig:291`) ← `mem.Allocator.rawRemap` (`/opt/zig/lib/std/mem/Allocator.zig:153`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`/opt/zig/lib/std/Io/Writer.zig:2627`) ← `Io.Writer.Allocating.ensureTotalCapacity` (2620) ← `Io.Writer.Allocating.ensureUnusedCapacity` (2615) ← `Io.Writer.Allocating.drain` (2698) ← `Io.Writer.write` (532) ← `Io.Writer.writeAll` (549) ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`/opt/zig/lib/std/zig/Ast/Render.zig:3353`) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderParamList` (2600) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.finishRenderBlock` (2023) ← `zig.Ast.Render.renderBlock` (1998) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`) ← `zig.Ast.renderAlloc` (217)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.2% | 3.81 MiB |     120 | `heap.c_allocator_impl.remap` (`/opt/zig/lib/std/heap.zig:291`) ← `mem.Allocator.rawRemap` (`/opt/zig/lib/std/mem/Allocator.zig:153`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`/opt/zig/lib/std/Io/Writer.zig:2627`) ← `Io.Writer.Allocating.ensureTotalCapacity` (2620) ← `Io.Writer.Allocating.ensureUnusedCapacity` (2615) ← `Io.Writer.Allocating.drain` (2698) ← `Io.Writer.writeSplat` (181) ← `Io.Writer.splatByte` (812) ← `Io.Writer.splatByteAll` (770) ← `zig.Ast.Render.AutoIndentingStream.applyIndent` (`/opt/zig/lib/std/zig/Ast/Render.zig:3516`) ← `zig.Ast.Render.AutoIndentingStream.writeAll` (3353) ← `zig.Ast.Render.renderToken` (2720) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderArrayInit` (2110) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderParamList` (2600) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderExpressionFixup` (948) ← `zig.Ast.Render.renderStructInit` (2051) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1253) ← `zig.Ast.Render.renderVarDecl` (1235) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderContainerDecl` (2344) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1253) ← `zig.Ast.Render.renderVarDecl` (1235) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`) ← `zig.Ast.renderAlloc` (217)                                                                                                                                                                        |
|  0.2% |  3.3 MiB |      15 | `heap.c_allocator_impl.remap` (`/opt/zig/lib/std/heap.zig:291`) ← `mem.Allocator.rawRemap` (`/opt/zig/lib/std/mem/Allocator.zig:153`) ← `Io.Writer.Allocating.ensureTotalCapacityPrecise` (`/opt/zig/lib/std/Io/Writer.zig:2627`) ← `Io.Writer.Allocating.ensureTotalCapacity` (2620) ← `Io.Writer.Allocating.ensureUnusedCapacity` (2615) ← `Io.Writer.Allocating.drain` (2698) ← `Io.Writer.writeByte` (743) ← `zig.Ast.Render.AutoIndentingStream.insertNewline` (`/opt/zig/lib/std/zig/Ast/Render.zig:3395`) ← `zig.Ast.Render.renderSpace` (2738) ← `zig.Ast.Render.renderToken` (2720) ← `zig.Ast.Render.renderContainerDecl` (2344) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1253) ← `zig.Ast.Render.renderVarDecl` (1235) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderContainerDecl` (2344) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1253) ← `zig.Ast.Render.renderVarDecl` (1235) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:228`) ← `zig.Ast.renderAlloc` (217)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

# Retained heap profile

Retained 0 B over 0 objects.

Paths starting with `./` or `../` are relative to `/out/`.

No bytes retained in any object.
