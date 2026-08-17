# Allocated heap profile

Allocated 809 MiB over 242,715 objects (3.41 KiB per object).

| Category         |      % |    Size | Objects |
| ---------------- | -----: | ------: | ------: |
| Standard library | 100.0% | 809 MiB | 242,715 |

Paths starting with `./` or `../` are relative to `/out/`.

## Call tree

Call paths to the hottest functions.

```
├── 774 MiB (95.6%) [[via 6 frames]] profile.main  ./profile.zig:12
│   ├── 500 MiB (61.8%) [[via 3 frames]] zig.Ast.Render.renderMembers  /opt/zig/lib/std/zig/Ast/Render.zig:122
│   │   ├── 412 MiB (50.9%) zig.Ast.Render.renderMember  :141
│   │   │   ├── 119 MiB (14.6%) zig.Ast.Render.renderExpression  :314
│   │   │   │   └── 119 MiB (14.6%) 23 more branches, largest zig.Ast.Render.finishRenderBlock (2.7%)  :1967 and zig.Ast.Render.renderIdentifier (2.4%)
│   │   │   ├── 69.2 MiB (8.6%) [[via 3–5 frames]] zig.Ast.Render.renderExpression  /opt/zig/lib/std/zig/Ast/Render.zig:314
│   │   │   │   └── 69.2 MiB (8.6%) 20 more branches, largest zig.Ast.Render.renderIdentifier (2.3%)  /opt/zig/lib/std/zig/Ast/Render.zig:2926 and zig.Ast.Render.finishRenderBlock (1.7%)
│   │   │   ├── 61.7 MiB (7.6%) zig.Ast.Render.renderVarDecl  :1122
│   │   │   │   └── 61.4 MiB (7.6%) zig.Ast.Render.renderVarDeclWithoutFixups  :1140
│   │   │   │       ├── 54.9 MiB (6.8%) zig.Ast.Render.renderExpression  :314
│   │   │   │       │   ├── 32.7 MiB (4.0%) zig.Ast.Render.renderArrayInit  :2067
│   │   │   │       │   │   └── 32.7 MiB (4.0%) 6 more branches, largest mem.Allocator.alloc__anon_24457 (3.1%)  /opt/zig/lib/std/mem/Allocator.zig:180 and zig.Ast.Render.renderToken (0.6%)
│   │   │   │       │   └── 22.3 MiB (2.8%) 13 more branches, largest zig.Ast.Render.renderStructInit (0.9%)  /opt/zig/lib/std/zig/Ast/Render.zig:1995 and zig.Ast.Render.renderIdentifier (0.6%)
│   │   │   │       └── 6.43 MiB (0.8%) 4 more branches, largest zig.Ast.Render.renderToken (0.6%)  :2844
│   │   │   ├── 45.4 MiB (5.6%) [[via 15 frames]] heap.CAllocator.alignedAlloc  /opt/zig/lib/std/heap.zig:157
│   │   │   ├── 41.7 MiB (5.2%) [[via 3–5 frames]] zig.Ast.Render.renderVarDecl  /opt/zig/lib/std/zig/Ast/Render.zig:1122
│   │   │   │   └── 41.7 MiB (5.1%) zig.Ast.Render.renderVarDeclWithoutFixups  :1140
│   │   │   │       ├── 26.8 MiB (3.3%) zig.Ast.Render.renderExpression  :314
│   │   │   │       │   └── 26.8 MiB (3.3%) 10 more branches, largest zig.Ast.Render.renderArrayInit (1.3%)  /opt/zig/lib/std/zig/Ast/Render.zig:2067 and zig.Ast.Render.renderStructInit (0.8%)
│   │   │   │       └── 14.9 MiB (1.8%) 3 more branches, largest zig.Ast.Render.renderToken (1.1%)  :2844 and zig.Ast.Render.renderIdentifier (0.7%)
│   │   │   ├── 41.7 MiB (5.2%) [[via 3–5 frames]] zig.Ast.Render.renderContainerField  /opt/zig/lib/std/zig/Ast/Render.zig:1473
│   │   │   │   ├── 28.8 MiB (3.6%) zig.Ast.Render.renderIdentifier  :2926
│   │   │   │   │   └── 28.7 MiB (3.5%) zig.Ast.Render.renderToken  :2844
│   │   │   │   │       └── 28.7 MiB (3.5%) 2 more branches, largest zig.Ast.Render.AutoIndentingStream.writeAll (2.8%)  :3496 and zig.Ast.Render.renderSpace (0.8%)
│   │   │   │   └── 13 MiB (1.6%) 6 more branches, largest zig.Ast.Render.renderIdentifierComma (0.7%)  :2812
│   │   │   └── 31.4 MiB (3.9%) [[via 5–7 frames]] zig.Ast.Render.AutoIndentingStream.writeAll  /opt/zig/lib/std/zig/Ast/Render.zig:3496
│   │   │       └── 31.4 MiB (3.9%) 2 more branches, largest Io.Writer.writeAll (3.2%)  /opt/zig/lib/std/Io/Writer.zig:530 and zig.Ast.Render.AutoIndentingStream.applyIndent (0.7%)
│   │   └── 88.1 MiB (10.9%) zig.Ast.Render.renderExpression  :314
│   │       ├── 31 MiB (3.8%) [[via 2–4 frames]] zig.Ast.Render.renderArrayInit  /opt/zig/lib/std/zig/Ast/Render.zig:2067
│   │       │   ├── 26.3 MiB (3.2%) zig.Ast.Render.AutoIndentingStream.writeAll  :3496
│   │       │   │   └── 26.3 MiB (3.2%) 2 more branches, largest Io.Writer.writeAll (3.0%)  /opt/zig/lib/std/Io/Writer.zig:530
│   │       │   └── 1.79 MiB (0.2%) zig.Ast.Render.renderToken  :2844
│   │       └── 57.1 MiB (7.0%) 16 more branches, largest zig.Ast.Render.renderStructInit (2.3%)  /opt/zig/lib/std/zig/Ast/Render.zig:1995 and zig.Ast.Render.renderParamList (2.0%)
│   ├── 206 MiB (25.4%) [[via 10 frames]] heap.CAllocator.alignedAlloc  (100.0% self in 2,842 call stacks)  /opt/zig/lib/std/heap.zig:157
│   └── 67.2 MiB (8.3%) [[via 2 frames]] zig.Parse.parseContainerMembers  /opt/zig/lib/std/zig/Parse.zig:235
│       ├── 33.6 MiB (4.1%) zig.Parse.expectTopLevelDeclRecoverable  :658
│       │   └── 33.6 MiB (4.1%) zig.Parse.expectTopLevelDecl  :593
│       │       └── 33.6 MiB (4.1%) 3 more branches, largest zig.Parse.parseBlock (3.0%)  :2079 and zig.Parse.parseGlobalVarDecl (0.7%)
│       └── 33.6 MiB (4.2%) 6 more branches, largest zig.Parse.expectTestDeclRecoverable (2.6%)  :578 and zig.Parse.expectTopLevelDeclRecoverable (1.1%)
└── 35.5 MiB (4.4%) 27 more branches, largest (anonymous) (1.4%) and zig.Ast.Render.renderExpression (1.2%)
```

## Hottest functions

### Self size

Functions with the most bytes allocated within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|      % |    Size | Objects | Function                       | Location                        |
| -----: | ------: | ------: | ------------------------------ | ------------------------------- |
| 100.0% | 809 MiB | 242,715 | `heap.CAllocator.alignedAlloc` | `/opt/zig/lib/std/heap.zig:157` |

#### Lines

Lines with the largest contribution to each function's self size.

##### `heap.CAllocator.alignedAlloc` (`/opt/zig/lib/std/heap.zig:157`)

|      % |    Size | Objects | Location                        |
| -----: | ------: | ------: | ------------------------------- |
| 100.0% | 809 MiB | 242,715 | `/opt/zig/lib/std/heap.zig:165` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `heap.CAllocator.alignedAlloc` (`/opt/zig/lib/std/heap.zig:157`)

|      % |    Size | Objects | Caller                  | Location                        |
| -----: | ------: | ------: | ----------------------- | ------------------------------- |
| 100.0% | 809 MiB | 242,715 | `heap.CAllocator.alloc` | `/opt/zig/lib/std/heap.zig:202` |

### Total size

Functions with the most bytes allocated within the function and its callees.

|      % |    Size | Objects | Function                                                 | Location                                          |
| -----: | ------: | ------: | -------------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 809 MiB | 242,715 | `heap.CAllocator.alignedAlloc`                           | `/opt/zig/lib/std/heap.zig:157`                   |
| 100.0% | 809 MiB | 242,715 | `heap.CAllocator.alloc`                                  | `/opt/zig/lib/std/heap.zig:202`                   |
| 100.0% | 809 MiB | 242,715 | `mem.Allocator.rawAlloc`                                 | `/opt/zig/lib/std/mem/Allocator.zig:128`          |
| 100.0% | 809 MiB | 242,715 | `mem.Allocator.allocAdvancedWithRetAddr`                 | `/opt/zig/lib/std/mem/Allocator.zig:248`          |
|  97.7% | 791 MiB | 238,110 | `profile.main`                                           | `./profile.zig:12`                                |
|  97.3% | 788 MiB | 237,255 | `start.callMain`                                         | `/opt/zig/lib/std/start.zig:613`                  |
|  97.3% | 788 MiB | 237,255 | `start.callMainWithArgs`                                 | `/opt/zig/lib/std/start.zig:580`                  |
|  97.3% | 788 MiB | 237,255 | `main`                                                   | `/opt/zig/lib/std/start.zig:590`                  |
|  97.3% | 787 MiB | 236,565 | `(anonymous)`                                            | `<unknown>`                                       |
|  95.8% | 776 MiB | 235,065 | `__libc_start_main`                                      | `<unknown>`                                       |
|  95.6% | 774 MiB | 233,760 | `_start`                                                 | `/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
|  87.3% | 707 MiB | 166,320 | `mem.Allocator.allocBytesWithAlignment__anon_14770`      | `/opt/zig/lib/std/mem/Allocator.zig:272`          |
|  87.0% | 704 MiB | 148,005 | `mem.Allocator.allocWithSizeAndAlignment__anon_9289`     | `/opt/zig/lib/std/mem/Allocator.zig:261`          |
|  86.9% | 704 MiB | 114,030 | `mem.Allocator.alignedAlloc__anon_6559`                  | `/opt/zig/lib/std/mem/Allocator.zig:238`          |
|  63.5% | 514 MiB | 194,655 | `zig.Ast.Render.renderTree`                              | `/opt/zig/lib/std/zig/Ast/Render.zig:86`          |
|  63.5% | 514 MiB | 194,655 | `zig.Ast.render`                                         | `/opt/zig/lib/std/zig/Ast.zig:217`                |
|  63.5% | 514 MiB | 194,655 | `zig.Ast.renderAlloc`                                    | `/opt/zig/lib/std/zig/Ast.zig:206`                |
|  63.4% | 513 MiB | 193,215 | `zig.Ast.Render.renderMembers`                           | `/opt/zig/lib/std/zig/Ast/Render.zig:122`         |
|  61.5% | 498 MiB | 105,930 | `array_list.Aligned(u8,null).ensureTotalCapacityPrecise` | `/opt/zig/lib/std/array_list.zig:1213`            |
|  61.5% | 498 MiB | 105,930 | `array_list.Aligned(u8,null).ensureTotalCapacity`        | `/opt/zig/lib/std/array_list.zig:1205`            |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|      % |    Size | Objects | Function                                                 | Location                                          |
| -----: | ------: | ------: | -------------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 809 MiB | 242,715 | `heap.CAllocator.alignedAlloc`                           | `/opt/zig/lib/std/heap.zig:157`                   |
| 100.0% | 809 MiB | 242,715 | `heap.CAllocator.alloc`                                  | `/opt/zig/lib/std/heap.zig:202`                   |
| 100.0% | 809 MiB | 242,715 | `mem.Allocator.rawAlloc`                                 | `/opt/zig/lib/std/mem/Allocator.zig:128`          |
| 100.0% | 809 MiB | 242,715 | `mem.Allocator.allocAdvancedWithRetAddr`                 | `/opt/zig/lib/std/mem/Allocator.zig:248`          |
|  97.3% | 788 MiB | 237,255 | `start.callMain`                                         | `/opt/zig/lib/std/start.zig:613`                  |
|  97.3% | 788 MiB | 237,255 | `start.callMainWithArgs`                                 | `/opt/zig/lib/std/start.zig:580`                  |
|  97.3% | 788 MiB | 237,255 | `main`                                                   | `/opt/zig/lib/std/start.zig:590`                  |
|  95.6% | 774 MiB | 233,760 | `_start`                                                 | `/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |
|  87.3% | 707 MiB | 166,320 | `mem.Allocator.allocBytesWithAlignment__anon_14770`      | `/opt/zig/lib/std/mem/Allocator.zig:272`          |
|  87.0% | 704 MiB | 148,005 | `mem.Allocator.allocWithSizeAndAlignment__anon_9289`     | `/opt/zig/lib/std/mem/Allocator.zig:261`          |
|  86.9% | 704 MiB | 114,030 | `mem.Allocator.alignedAlloc__anon_6559`                  | `/opt/zig/lib/std/mem/Allocator.zig:238`          |
|  63.5% | 514 MiB | 194,655 | `zig.Ast.Render.renderTree`                              | `/opt/zig/lib/std/zig/Ast/Render.zig:86`          |
|  63.5% | 514 MiB | 194,655 | `zig.Ast.render`                                         | `/opt/zig/lib/std/zig/Ast.zig:217`                |
|  63.5% | 514 MiB | 194,655 | `zig.Ast.renderAlloc`                                    | `/opt/zig/lib/std/zig/Ast.zig:206`                |
|  63.4% | 513 MiB | 193,215 | `zig.Ast.Render.renderMembers`                           | `/opt/zig/lib/std/zig/Ast/Render.zig:122`         |
|  61.5% | 498 MiB | 105,930 | `array_list.Aligned(u8,null).ensureTotalCapacityPrecise` | `/opt/zig/lib/std/array_list.zig:1213`            |
|  61.5% | 498 MiB | 105,930 | `array_list.Aligned(u8,null).ensureTotalCapacity`        | `/opt/zig/lib/std/array_list.zig:1205`            |
|  61.5% | 498 MiB | 105,930 | `array_list.Aligned(u8,null).ensureUnusedCapacity`       | `/opt/zig/lib/std/array_list.zig:1241`            |
|  61.5% | 498 MiB | 105,915 | `Io.Writer.Allocating.drain`                             | `/opt/zig/lib/std/Io/Writer.zig:2625`             |
|  58.8% | 476 MiB | 183,390 | `zig.Ast.Render.renderExpression`                        | `/opt/zig/lib/std/zig/Ast/Render.zig:314`         |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `heap.CAllocator.alignedAlloc` (`/opt/zig/lib/std/heap.zig:157`)

|      % |    Size | Objects | Caller                  | Location                        |
| -----: | ------: | ------: | ----------------------- | ------------------------------- |
| 100.0% | 809 MiB | 242,715 | `heap.CAllocator.alloc` | `/opt/zig/lib/std/heap.zig:202` |

##### `heap.CAllocator.alloc` (`/opt/zig/lib/std/heap.zig:202`)

|      % |    Size | Objects | Caller                   | Location                                 |
| -----: | ------: | ------: | ------------------------ | ---------------------------------------- |
| 100.0% | 809 MiB | 242,715 | `mem.Allocator.rawAlloc` | `/opt/zig/lib/std/mem/Allocator.zig:128` |

##### `mem.Allocator.rawAlloc` (`/opt/zig/lib/std/mem/Allocator.zig:128`)

|     % |     Size | Objects | Caller                                              | Location                                 |
| ----: | -------: | ------: | --------------------------------------------------- | ---------------------------------------- |
| 87.3% |  707 MiB | 166,320 | `mem.Allocator.allocBytesWithAlignment__anon_14770` | `/opt/zig/lib/std/mem/Allocator.zig:272` |
|  9.1% | 74.1 MiB |  36,660 | `mem.Allocator.allocBytesWithAlignment__anon_14962` | `/opt/zig/lib/std/mem/Allocator.zig:272` |
|  3.6% | 28.8 MiB |  39,735 | `mem.Allocator.allocBytesWithAlignment__anon_8052`  | `/opt/zig/lib/std/mem/Allocator.zig:272` |

##### `mem.Allocator.allocAdvancedWithRetAddr` (`/opt/zig/lib/std/mem/Allocator.zig:248`)

|     % |     Size | Objects | Caller                                   | Location                                 |
| ----: | -------: | ------: | ---------------------------------------- | ---------------------------------------- |
| 86.9% |  704 MiB | 114,030 | `mem.Allocator.alignedAlloc__anon_6559`  | `/opt/zig/lib/std/mem/Allocator.zig:238` |
|  7.1% | 57.1 MiB |  23,130 | `mem.Allocator.alignedAlloc__anon_7235`  | `/opt/zig/lib/std/mem/Allocator.zig:238` |
|  3.5% | 28.4 MiB |  38,280 | `mem.Allocator.alloc__anon_24457`        | `/opt/zig/lib/std/mem/Allocator.zig:180` |
|  1.4% | 11.7 MiB |     225 | `mem.Allocator.alignedAlloc__anon_6613`  | `/opt/zig/lib/std/mem/Allocator.zig:238` |
|  0.7% | 5.29 MiB |  13,305 | `mem.Allocator.alignedAlloc__anon_26111` | `/opt/zig/lib/std/mem/Allocator.zig:238` |

##### `profile.main` (`./profile.zig:12`)

|     % |    Size | Objects | Caller           | Location                         |
| ----: | ------: | ------: | ---------------- | -------------------------------- |
| 99.6% | 788 MiB | 237,255 | `start.callMain` | `/opt/zig/lib/std/start.zig:613` |

##### `start.callMain` (`/opt/zig/lib/std/start.zig:613`)

|      % |    Size | Objects | Caller                   | Location                         |
| -----: | ------: | ------: | ------------------------ | -------------------------------- |
| 100.0% | 788 MiB | 237,255 | `start.callMainWithArgs` | `/opt/zig/lib/std/start.zig:580` |

##### `start.callMainWithArgs` (`/opt/zig/lib/std/start.zig:580`)

|      % |    Size | Objects | Caller | Location                         |
| -----: | ------: | ------: | ------ | -------------------------------- |
| 100.0% | 788 MiB | 237,255 | `main` | `/opt/zig/lib/std/start.zig:590` |

##### `main` (`/opt/zig/lib/std/start.zig:590`)

|     % |    Size | Objects | Caller        | Location    |
| ----: | ------: | ------: | ------------- | ----------- |
| 99.9% | 787 MiB | 236,565 | `(anonymous)` | `<unknown>` |

##### `(anonymous)` (`<unknown>`)

|     % |    Size | Objects | Caller              | Location    |
| ----: | ------: | ------: | ------------------- | ----------- |
| 98.5% | 776 MiB | 235,065 | `__libc_start_main` | `<unknown>` |

##### `__libc_start_main` (`<unknown>`)

|     % |    Size | Objects | Caller   | Location                                          |
| ----: | ------: | ------: | -------- | ------------------------------------------------- |
| 99.8% | 774 MiB | 233,760 | `_start` | `/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S` |

##### `mem.Allocator.allocBytesWithAlignment__anon_14770` (`/opt/zig/lib/std/mem/Allocator.zig:272`)

|     % |     Size | Objects | Caller                                                | Location                                 |
| ----: | -------: | ------: | ----------------------------------------------------- | ---------------------------------------- |
| 99.7% |  704 MiB | 148,005 | `mem.Allocator.allocWithSizeAndAlignment__anon_9289`  | `/opt/zig/lib/std/mem/Allocator.zig:261` |
|  0.3% | 2.24 MiB |  18,315 | `mem.Allocator.allocWithSizeAndAlignment__anon_28172` | `/opt/zig/lib/std/mem/Allocator.zig:261` |

##### `mem.Allocator.allocWithSizeAndAlignment__anon_9289` (`/opt/zig/lib/std/mem/Allocator.zig:261`)

|      % |    Size | Objects | Caller                                   | Location                                 |
| -----: | ------: | ------: | ---------------------------------------- | ---------------------------------------- |
| 100.0% | 704 MiB | 148,005 | `mem.Allocator.allocAdvancedWithRetAddr` | `/opt/zig/lib/std/mem/Allocator.zig:248` |

##### `mem.Allocator.alignedAlloc__anon_6559` (`/opt/zig/lib/std/mem/Allocator.zig:238`)

|     % |    Size | Objects | Caller                                                          | Location                               |
| ----: | ------: | ------: | --------------------------------------------------------------- | -------------------------------------- |
| 70.8% | 498 MiB | 105,930 | `array_list.Aligned(u8,null).ensureTotalCapacityPrecise`        | `/opt/zig/lib/std/array_list.zig:1213` |
| 29.2% | 206 MiB |   8,100 | `array_list.AlignedManaged(u8,null).ensureTotalCapacityPrecise` | `/opt/zig/lib/std/array_list.zig:450`  |

##### `zig.Ast.Render.renderTree` (`/opt/zig/lib/std/zig/Ast/Render.zig:86`)

|      % |    Size | Objects | Caller           | Location                           |
| -----: | ------: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 514 MiB | 194,655 | `zig.Ast.render` | `/opt/zig/lib/std/zig/Ast.zig:217` |

##### `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:217`)

|      % |    Size | Objects | Caller                | Location                           |
| -----: | ------: | ------: | --------------------- | ---------------------------------- |
| 100.0% | 514 MiB | 194,655 | `zig.Ast.renderAlloc` | `/opt/zig/lib/std/zig/Ast.zig:206` |

##### `zig.Ast.renderAlloc` (`/opt/zig/lib/std/zig/Ast.zig:206`)

|      % |    Size | Objects | Caller         | Location           |
| -----: | ------: | ------: | -------------- | ------------------ |
| 100.0% | 514 MiB | 194,655 | `profile.main` | `./profile.zig:12` |

##### `zig.Ast.Render.renderMembers` (`/opt/zig/lib/std/zig/Ast/Render.zig:122`)

|      % |    Size | Objects | Caller                      | Location                                 |
| -----: | ------: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% | 513 MiB | 193,215 | `zig.Ast.Render.renderTree` | `/opt/zig/lib/std/zig/Ast/Render.zig:86` |

##### `array_list.Aligned(u8,null).ensureTotalCapacityPrecise` (`/opt/zig/lib/std/array_list.zig:1213`)

|      % |    Size | Objects | Caller                                            | Location                               |
| -----: | ------: | ------: | ------------------------------------------------- | -------------------------------------- |
| 100.0% | 498 MiB | 105,930 | `array_list.Aligned(u8,null).ensureTotalCapacity` | `/opt/zig/lib/std/array_list.zig:1205` |

##### `array_list.Aligned(u8,null).ensureTotalCapacity` (`/opt/zig/lib/std/array_list.zig:1205`)

|      % |    Size | Objects | Caller                                             | Location                               |
| -----: | ------: | ------: | -------------------------------------------------- | -------------------------------------- |
| 100.0% | 498 MiB | 105,930 | `array_list.Aligned(u8,null).ensureUnusedCapacity` | `/opt/zig/lib/std/array_list.zig:1241` |

##### `array_list.Aligned(u8,null).ensureUnusedCapacity` (`/opt/zig/lib/std/array_list.zig:1241`)

|      % |     Size | Objects | Caller                       | Location                              |
| -----: | -------: | ------: | ---------------------------- | ------------------------------------- |
| 100.0% |  498 MiB | 105,915 | `Io.Writer.Allocating.drain` | `/opt/zig/lib/std/Io/Writer.zig:2625` |
|  <0.1% | 1.88 KiB |      15 | `fs.Dir.Walker.next`         | `/opt/zig/lib/std/fs/Dir.zig:689`     |

##### `Io.Writer.Allocating.drain` (`/opt/zig/lib/std/Io/Writer.zig:2625`)

|     % |     Size | Objects | Caller                 | Location                             |
| ----: | -------: | ------: | ---------------------- | ------------------------------------ |
| 76.4% |  381 MiB |  95,970 | `Io.Writer.write`      | `/opt/zig/lib/std/Io/Writer.zig:518` |
| 17.5% |   87 MiB |   5,940 | `Io.Writer.writeSplat` | `/opt/zig/lib/std/Io/Writer.zig:179` |
|  6.1% | 30.3 MiB |   4,005 | `Io.Writer.writeByte`  | `/opt/zig/lib/std/Io/Writer.zig:724` |

##### `zig.Ast.Render.renderExpression` (`/opt/zig/lib/std/zig/Ast/Render.zig:314`)

|     % |     Size | Objects | Caller                                      | Location                                   |
| ----: | -------: | ------: | ------------------------------------------- | ------------------------------------------ |
| 63.4% |  301 MiB | 146,670 | `zig.Ast.Render.renderVarDeclWithoutFixups` | `/opt/zig/lib/std/zig/Ast/Render.zig:1140` |
| 46.7% |  222 MiB |  67,620 | `zig.Ast.Render.finishRenderBlock`          | `/opt/zig/lib/std/zig/Ast/Render.zig:1967` |
| 44.0% |  209 MiB |  55,380 | `zig.Ast.Render.renderMember`               | `/opt/zig/lib/std/zig/Ast/Render.zig:141`  |
| 23.9% |  114 MiB |  34,695 | `zig.Ast.Render.renderExpression`           | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |
| 18.6% | 88.6 MiB |  19,605 | `zig.Ast.Render.renderMembers`              | `/opt/zig/lib/std/zig/Ast/Render.zig:122`  |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `heap.CAllocator.alloc` (`/opt/zig/lib/std/heap.zig:202`)

|      % |    Size | Objects | Callee                         | Location                        |
| -----: | ------: | ------: | ------------------------------ | ------------------------------- |
| 100.0% | 809 MiB | 242,715 | `heap.CAllocator.alignedAlloc` | `/opt/zig/lib/std/heap.zig:157` |

##### `mem.Allocator.rawAlloc` (`/opt/zig/lib/std/mem/Allocator.zig:128`)

|      % |    Size | Objects | Callee                  | Location                        |
| -----: | ------: | ------: | ----------------------- | ------------------------------- |
| 100.0% | 809 MiB | 242,715 | `heap.CAllocator.alloc` | `/opt/zig/lib/std/heap.zig:202` |

##### `mem.Allocator.allocAdvancedWithRetAddr` (`/opt/zig/lib/std/mem/Allocator.zig:248`)

|     % |     Size | Objects | Callee                                                | Location                                 |
| ----: | -------: | ------: | ----------------------------------------------------- | ---------------------------------------- |
| 87.0% |  704 MiB | 148,005 | `mem.Allocator.allocWithSizeAndAlignment__anon_9289`  | `/opt/zig/lib/std/mem/Allocator.zig:261` |
|  7.7% | 62.4 MiB |  36,435 | `mem.Allocator.allocWithSizeAndAlignment__anon_12056` | `/opt/zig/lib/std/mem/Allocator.zig:261` |
|  3.5% | 28.4 MiB |  38,280 | `mem.Allocator.allocWithSizeAndAlignment__anon_26398` | `/opt/zig/lib/std/mem/Allocator.zig:261` |
|  1.4% | 11.7 MiB |     225 | `mem.Allocator.allocWithSizeAndAlignment__anon_10800` | `/opt/zig/lib/std/mem/Allocator.zig:261` |
|  0.3% | 2.24 MiB |  18,315 | `mem.Allocator.allocWithSizeAndAlignment__anon_28172` | `/opt/zig/lib/std/mem/Allocator.zig:261` |

##### `profile.main` (`./profile.zig:12`)

|     % |    Size | Objects | Callee                                   | Location                           |
| ----: | ------: | ------: | ---------------------------------------- | ---------------------------------- |
| 65.0% | 514 MiB | 194,655 | `zig.Ast.renderAlloc`                    | `/opt/zig/lib/std/zig/Ast.zig:206` |
| 26.0% | 206 MiB |   8,100 | `fs.Dir.readFileAllocOptions__anon_2384` | `/opt/zig/lib/std/fs/Dir.zig:1997` |
|  9.0% |  71 MiB |  35,295 | `zig.Ast.parse`                          | `/opt/zig/lib/std/zig/Ast.zig:145` |
| <0.1% | 203 KiB |      60 | `fs.Dir.Walker.next`                     | `/opt/zig/lib/std/fs/Dir.zig:689`  |

##### `start.callMain` (`/opt/zig/lib/std/start.zig:613`)

|      % |    Size | Objects | Callee         | Location           |
| -----: | ------: | ------: | -------------- | ------------------ |
| 100.0% | 788 MiB | 237,255 | `profile.main` | `./profile.zig:12` |

##### `start.callMainWithArgs` (`/opt/zig/lib/std/start.zig:580`)

|      % |    Size | Objects | Callee           | Location                         |
| -----: | ------: | ------: | ---------------- | -------------------------------- |
| 100.0% | 788 MiB | 237,255 | `start.callMain` | `/opt/zig/lib/std/start.zig:613` |

##### `main` (`/opt/zig/lib/std/start.zig:590`)

|      % |    Size | Objects | Callee                   | Location                         |
| -----: | ------: | ------: | ------------------------ | -------------------------------- |
| 100.0% | 788 MiB | 237,255 | `start.callMainWithArgs` | `/opt/zig/lib/std/start.zig:580` |

##### `(anonymous)` (`<unknown>`)

|      % |    Size | Objects | Callee | Location                         |
| -----: | ------: | ------: | ------ | -------------------------------- |
| 100.0% | 787 MiB | 236,565 | `main` | `/opt/zig/lib/std/start.zig:590` |

##### `__libc_start_main` (`<unknown>`)

|      % |    Size | Objects | Callee        | Location    |
| -----: | ------: | ------: | ------------- | ----------- |
| 100.0% | 776 MiB | 235,065 | `(anonymous)` | `<unknown>` |

##### `_start` (`/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)

|      % |    Size | Objects | Callee              | Location    |
| -----: | ------: | ------: | ------------------- | ----------- |
| 100.0% | 774 MiB | 233,760 | `__libc_start_main` | `<unknown>` |

##### `mem.Allocator.allocBytesWithAlignment__anon_14770` (`/opt/zig/lib/std/mem/Allocator.zig:272`)

|      % |    Size | Objects | Callee                   | Location                                 |
| -----: | ------: | ------: | ------------------------ | ---------------------------------------- |
| 100.0% | 707 MiB | 166,320 | `mem.Allocator.rawAlloc` | `/opt/zig/lib/std/mem/Allocator.zig:128` |

##### `mem.Allocator.allocWithSizeAndAlignment__anon_9289` (`/opt/zig/lib/std/mem/Allocator.zig:261`)

|      % |    Size | Objects | Callee                                              | Location                                 |
| -----: | ------: | ------: | --------------------------------------------------- | ---------------------------------------- |
| 100.0% | 704 MiB | 148,005 | `mem.Allocator.allocBytesWithAlignment__anon_14770` | `/opt/zig/lib/std/mem/Allocator.zig:272` |

##### `mem.Allocator.alignedAlloc__anon_6559` (`/opt/zig/lib/std/mem/Allocator.zig:238`)

|      % |    Size | Objects | Callee                                   | Location                                 |
| -----: | ------: | ------: | ---------------------------------------- | ---------------------------------------- |
| 100.0% | 704 MiB | 114,030 | `mem.Allocator.allocAdvancedWithRetAddr` | `/opt/zig/lib/std/mem/Allocator.zig:248` |

##### `zig.Ast.Render.renderTree` (`/opt/zig/lib/std/zig/Ast/Render.zig:86`)

|     % |     Size | Objects | Callee                                             | Location                                   |
| ----: | -------: | ------: | -------------------------------------------------- | ------------------------------------------ |
| 99.8% |  513 MiB | 193,215 | `zig.Ast.Render.renderMembers`                     | `/opt/zig/lib/std/zig/Ast/Render.zig:122`  |
|  0.1% |  756 KiB |   1,365 | `zig.Ast.Render.renderComments`                    | `/opt/zig/lib/std/zig/Ast/Render.zig:3112` |
| <0.1% |  141 KiB |      60 | `zig.Ast.Render.renderContainerDocComments`        | `/opt/zig/lib/std/zig/Ast/Render.zig:3239` |
| <0.1% | 4.69 KiB |      15 | `zig.Ast.Render.AutoIndentingStream.insertNewline` | `/opt/zig/lib/std/zig/Ast/Render.zig:3538` |

##### `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:217`)

|      % |    Size | Objects | Callee                      | Location                                 |
| -----: | ------: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% | 514 MiB | 194,655 | `zig.Ast.Render.renderTree` | `/opt/zig/lib/std/zig/Ast/Render.zig:86` |

##### `zig.Ast.renderAlloc` (`/opt/zig/lib/std/zig/Ast.zig:206`)

|      % |    Size | Objects | Callee           | Location                           |
| -----: | ------: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 514 MiB | 194,655 | `zig.Ast.render` | `/opt/zig/lib/std/zig/Ast.zig:217` |

##### `zig.Ast.Render.renderMembers` (`/opt/zig/lib/std/zig/Ast/Render.zig:122`)

|     % |     Size | Objects | Callee                            | Location                                  |
| ----: | -------: | ------: | --------------------------------- | ----------------------------------------- |
| 82.7% |  425 MiB | 173,610 | `zig.Ast.Render.renderMember`     | `/opt/zig/lib/std/zig/Ast/Render.zig:141` |
| 17.3% | 88.6 MiB |  19,605 | `zig.Ast.Render.renderExpression` | `/opt/zig/lib/std/zig/Ast/Render.zig:314` |

##### `array_list.Aligned(u8,null).ensureTotalCapacityPrecise` (`/opt/zig/lib/std/array_list.zig:1213`)

|      % |    Size | Objects | Callee                                  | Location                                 |
| -----: | ------: | ------: | --------------------------------------- | ---------------------------------------- |
| 100.0% | 498 MiB | 105,930 | `mem.Allocator.alignedAlloc__anon_6559` | `/opt/zig/lib/std/mem/Allocator.zig:238` |

##### `array_list.Aligned(u8,null).ensureTotalCapacity` (`/opt/zig/lib/std/array_list.zig:1205`)

|      % |    Size | Objects | Callee                                                   | Location                               |
| -----: | ------: | ------: | -------------------------------------------------------- | -------------------------------------- |
| 100.0% | 498 MiB | 105,930 | `array_list.Aligned(u8,null).ensureTotalCapacityPrecise` | `/opt/zig/lib/std/array_list.zig:1213` |

##### `array_list.Aligned(u8,null).ensureUnusedCapacity` (`/opt/zig/lib/std/array_list.zig:1241`)

|      % |    Size | Objects | Callee                                            | Location                               |
| -----: | ------: | ------: | ------------------------------------------------- | -------------------------------------- |
| 100.0% | 498 MiB | 105,930 | `array_list.Aligned(u8,null).ensureTotalCapacity` | `/opt/zig/lib/std/array_list.zig:1205` |

##### `Io.Writer.Allocating.drain` (`/opt/zig/lib/std/Io/Writer.zig:2625`)

|      % |    Size | Objects | Callee                                             | Location                               |
| -----: | ------: | ------: | -------------------------------------------------- | -------------------------------------- |
| 100.0% | 498 MiB | 105,915 | `array_list.Aligned(u8,null).ensureUnusedCapacity` | `/opt/zig/lib/std/array_list.zig:1241` |

##### `zig.Ast.Render.renderExpression` (`/opt/zig/lib/std/zig/Ast/Render.zig:314`)

|     % |     Size | Objects | Callee                               | Location                                   |
| ----: | -------: | ------: | ------------------------------------ | ------------------------------------------ |
| 64.6% |  307 MiB |  87,195 | `zig.Ast.Render.finishRenderBlock`   | `/opt/zig/lib/std/zig/Ast/Render.zig:1967` |
| 41.4% |  197 MiB |  79,185 | `zig.Ast.Render.renderContainerDecl` | `/opt/zig/lib/std/zig/Ast/Render.zig:2295` |
| 25.8% |  123 MiB | 154,545 | `zig.Ast.Render.renderArrayInit`     | `/opt/zig/lib/std/zig/Ast/Render.zig:2067` |
| 23.9% |  114 MiB |  34,695 | `zig.Ast.Render.renderExpression`    | `/opt/zig/lib/std/zig/Ast/Render.zig:314`  |
| 18.3% | 87.2 MiB |  84,660 | `zig.Ast.Render.renderParamList`     | `/opt/zig/lib/std/zig/Ast/Render.zig:2728` |

## Hottest call stacks

Call stacks with the most bytes allocated in their leaf frame.

|     % |     Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----: | -------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 25.4% |  206 MiB |   8,100 | `heap.CAllocator.alignedAlloc` (`/opt/zig/lib/std/heap.zig:157`) ← `heap.CAllocator.alloc` (202) ← `mem.Allocator.rawAlloc` (`/opt/zig/lib/std/mem/Allocator.zig:128`) ← `mem.Allocator.allocBytesWithAlignment__anon_14770` (272) ← `mem.Allocator.allocWithSizeAndAlignment__anon_9289` (261) ← `mem.Allocator.allocAdvancedWithRetAddr` (248) ← `mem.Allocator.alignedAlloc__anon_6559` (238) ← `array_list.AlignedManaged(u8,null).ensureTotalCapacityPrecise` (`/opt/zig/lib/std/array_list.zig:450`) ← `array_list.AlignedManaged(u8,null).initCapacity` (55) ← `fs.File.readToEndAllocOptions__anon_2451` (`/opt/zig/lib/std/fs/File.zig:814`) ← `fs.Dir.readFileAllocOptions__anon_2384` (`/opt/zig/lib/std/fs/Dir.zig:1997`) ← `profile.main` (`./profile.zig:12`) ← `start.callMain` (`/opt/zig/lib/std/start.zig:613`) ← `start.callMainWithArgs` (580) ← `main` (590) ← `(anonymous)` ← `__libc_start_main` ← `_start` (`/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  5.6% | 45.4 MiB |   4,620 | `heap.CAllocator.alignedAlloc` (`/opt/zig/lib/std/heap.zig:157`) ← `heap.CAllocator.alloc` (202) ← `mem.Allocator.rawAlloc` (`/opt/zig/lib/std/mem/Allocator.zig:128`) ← `mem.Allocator.allocBytesWithAlignment__anon_14770` (272) ← `mem.Allocator.allocWithSizeAndAlignment__anon_9289` (261) ← `mem.Allocator.allocAdvancedWithRetAddr` (248) ← `mem.Allocator.alignedAlloc__anon_6559` (238) ← `array_list.Aligned(u8,null).ensureTotalCapacityPrecise` (`/opt/zig/lib/std/array_list.zig:1213`) ← `array_list.Aligned(u8,null).ensureTotalCapacity` (1205) ← `array_list.Aligned(u8,null).ensureUnusedCapacity` (1241) ← `Io.Writer.Allocating.drain` (`/opt/zig/lib/std/Io/Writer.zig:2625`) ← `Io.Writer.write` (518) ← `Io.Writer.writeAll` (530) ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`/opt/zig/lib/std/zig/Ast/Render.zig:3496`) ← `zig.Ast.Render.renderToken` (2844) ← `zig.Ast.Render.renderDocComments` (3208) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:217`) ← `zig.Ast.renderAlloc` (206) ← `profile.main` (`./profile.zig:12`) ← `start.callMain` (`/opt/zig/lib/std/start.zig:613`) ← `start.callMainWithArgs` (580) ← `main` (590) ← `(anonymous)` ← `__libc_start_main` ← `_start` (`/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  3.1% | 24.9 MiB |  10,635 | `heap.CAllocator.alignedAlloc` (`/opt/zig/lib/std/heap.zig:157`) ← `heap.CAllocator.alloc` (202) ← `mem.Allocator.rawAlloc` (`/opt/zig/lib/std/mem/Allocator.zig:128`) ← `mem.Allocator.allocBytesWithAlignment__anon_8052` (272) ← `mem.Allocator.allocWithSizeAndAlignment__anon_26398` (261) ← `mem.Allocator.allocAdvancedWithRetAddr` (248) ← `mem.Allocator.alloc__anon_24457` (180) ← `zig.Ast.Render.renderArrayInit` (`/opt/zig/lib/std/zig/Ast/Render.zig:2067`) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1140) ← `zig.Ast.Render.renderVarDecl` (1122) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:217`) ← `zig.Ast.renderAlloc` (206) ← `profile.main` (`./profile.zig:12`) ← `start.callMain` (`/opt/zig/lib/std/start.zig:613`) ← `start.callMainWithArgs` (580) ← `main` (590) ← `(anonymous)` ← `__libc_start_main` ← `_start` (`/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  3.0% | 24.4 MiB |     330 | `heap.CAllocator.alignedAlloc` (`/opt/zig/lib/std/heap.zig:157`) ← `heap.CAllocator.alloc` (202) ← `mem.Allocator.rawAlloc` (`/opt/zig/lib/std/mem/Allocator.zig:128`) ← `mem.Allocator.allocBytesWithAlignment__anon_14770` (272) ← `mem.Allocator.allocWithSizeAndAlignment__anon_9289` (261) ← `mem.Allocator.allocAdvancedWithRetAddr` (248) ← `mem.Allocator.alignedAlloc__anon_6559` (238) ← `array_list.Aligned(u8,null).ensureTotalCapacityPrecise` (`/opt/zig/lib/std/array_list.zig:1213`) ← `array_list.Aligned(u8,null).ensureTotalCapacity` (1205) ← `array_list.Aligned(u8,null).ensureUnusedCapacity` (1241) ← `Io.Writer.Allocating.drain` (`/opt/zig/lib/std/Io/Writer.zig:2625`) ← `Io.Writer.write` (518) ← `Io.Writer.writeAll` (530) ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`/opt/zig/lib/std/zig/Ast/Render.zig:3496`) ← `zig.Ast.Render.renderArrayInit` (2067) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1140) ← `zig.Ast.Render.renderVarDecl` (1122) ← `zig.Ast.Render.finishRenderBlock` (1967) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:217`) ← `zig.Ast.renderAlloc` (206) ← `profile.main` (`./profile.zig:12`) ← `start.callMain` (`/opt/zig/lib/std/start.zig:613`) ← `start.callMainWithArgs` (580) ← `main` (590) ← `(anonymous)` ← `__libc_start_main` ← `_start` (`/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  2.3% |   19 MiB |     855 | `heap.CAllocator.alignedAlloc` (`/opt/zig/lib/std/heap.zig:157`) ← `heap.CAllocator.alloc` (202) ← `mem.Allocator.rawAlloc` (`/opt/zig/lib/std/mem/Allocator.zig:128`) ← `mem.Allocator.allocBytesWithAlignment__anon_14770` (272) ← `mem.Allocator.allocWithSizeAndAlignment__anon_9289` (261) ← `mem.Allocator.allocAdvancedWithRetAddr` (248) ← `mem.Allocator.alignedAlloc__anon_6559` (238) ← `array_list.Aligned(u8,null).ensureTotalCapacityPrecise` (`/opt/zig/lib/std/array_list.zig:1213`) ← `array_list.Aligned(u8,null).ensureTotalCapacity` (1205) ← `array_list.Aligned(u8,null).ensureUnusedCapacity` (1241) ← `Io.Writer.Allocating.drain` (`/opt/zig/lib/std/Io/Writer.zig:2625`) ← `Io.Writer.write` (518) ← `Io.Writer.writeAll` (530) ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`/opt/zig/lib/std/zig/Ast/Render.zig:3496`) ← `zig.Ast.Render.renderToken` (2844) ← `zig.Ast.Render.renderDocComments` (3208) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderContainerDecl` (2295) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1140) ← `zig.Ast.Render.renderVarDecl` (1122) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:217`) ← `zig.Ast.renderAlloc` (206) ← `profile.main` (`./profile.zig:12`) ← `start.callMain` (`/opt/zig/lib/std/start.zig:613`) ← `start.callMainWithArgs` (580) ← `main` (590) ← `(anonymous)` ← `__libc_start_main` ← `_start` (`/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  2.1% | 17.2 MiB |     525 | `heap.CAllocator.alignedAlloc` (`/opt/zig/lib/std/heap.zig:157`) ← `heap.CAllocator.alloc` (202) ← `mem.Allocator.rawAlloc` (`/opt/zig/lib/std/mem/Allocator.zig:128`) ← `mem.Allocator.allocBytesWithAlignment__anon_14770` (272) ← `mem.Allocator.allocWithSizeAndAlignment__anon_9289` (261) ← `mem.Allocator.allocAdvancedWithRetAddr` (248) ← `mem.Allocator.alignedAlloc__anon_6559` (238) ← `array_list.Aligned(u8,null).ensureTotalCapacityPrecise` (`/opt/zig/lib/std/array_list.zig:1213`) ← `array_list.Aligned(u8,null).ensureTotalCapacity` (1205) ← `array_list.Aligned(u8,null).ensureUnusedCapacity` (1241) ← `Io.Writer.Allocating.drain` (`/opt/zig/lib/std/Io/Writer.zig:2625`) ← `Io.Writer.write` (518) ← `Io.Writer.writeAll` (530) ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`/opt/zig/lib/std/zig/Ast/Render.zig:3496`) ← `zig.Ast.Render.renderToken` (2844) ← `zig.Ast.Render.renderExpressionFixup` (924) ← `zig.Ast.Render.renderStructInit` (1995) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderArrayInit` (2067) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1140) ← `zig.Ast.Render.renderVarDecl` (1122) ← `zig.Ast.Render.finishRenderBlock` (1967) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:217`) ← `zig.Ast.renderAlloc` (206) ← `profile.main` (`./profile.zig:12`) ← `start.callMain` (`/opt/zig/lib/std/start.zig:613`) ← `start.callMainWithArgs` (580) ← `main` (590) ← `(anonymous)` ← `__libc_start_main` ← `_start` (`/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                            |
|  1.3% | 10.5 MiB |     630 | `heap.CAllocator.alignedAlloc` (`/opt/zig/lib/std/heap.zig:157`) ← `heap.CAllocator.alloc` (202) ← `mem.Allocator.rawAlloc` (`/opt/zig/lib/std/mem/Allocator.zig:128`) ← `mem.Allocator.allocBytesWithAlignment__anon_14770` (272) ← `mem.Allocator.allocWithSizeAndAlignment__anon_9289` (261) ← `mem.Allocator.allocAdvancedWithRetAddr` (248) ← `mem.Allocator.alignedAlloc__anon_6559` (238) ← `array_list.Aligned(u8,null).ensureTotalCapacityPrecise` (`/opt/zig/lib/std/array_list.zig:1213`) ← `array_list.Aligned(u8,null).ensureTotalCapacity` (1205) ← `array_list.Aligned(u8,null).ensureUnusedCapacity` (1241) ← `Io.Writer.Allocating.drain` (`/opt/zig/lib/std/Io/Writer.zig:2625`) ← `Io.Writer.write` (518) ← `Io.Writer.writeAll` (530) ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`/opt/zig/lib/std/zig/Ast/Render.zig:3496`) ← `zig.Ast.Render.renderToken` (2844) ← `zig.Ast.Render.renderIdentifier` (2926) ← `zig.Ast.Render.renderContainerField` (1473) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderContainerDecl` (2295) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1140) ← `zig.Ast.Render.renderVarDecl` (1122) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:217`) ← `zig.Ast.renderAlloc` (206) ← `profile.main` (`./profile.zig:12`) ← `start.callMain` (`/opt/zig/lib/std/start.zig:613`) ← `start.callMainWithArgs` (580) ← `main` (590) ← `(anonymous)` ← `__libc_start_main` ← `_start` (`/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.0% | 8.11 MiB |      15 | `heap.CAllocator.alignedAlloc` (`/opt/zig/lib/std/heap.zig:157`) ← `heap.CAllocator.alloc` (202) ← `mem.Allocator.rawAlloc` (`/opt/zig/lib/std/mem/Allocator.zig:128`) ← `mem.Allocator.allocBytesWithAlignment__anon_14770` (272) ← `mem.Allocator.allocWithSizeAndAlignment__anon_9289` (261) ← `mem.Allocator.allocAdvancedWithRetAddr` (248) ← `mem.Allocator.alignedAlloc__anon_6559` (238) ← `array_list.Aligned(u8,null).ensureTotalCapacityPrecise` (`/opt/zig/lib/std/array_list.zig:1213`) ← `array_list.Aligned(u8,null).ensureTotalCapacity` (1205) ← `array_list.Aligned(u8,null).ensureUnusedCapacity` (1241) ← `Io.Writer.Allocating.drain` (`/opt/zig/lib/std/Io/Writer.zig:2625`) ← `Io.Writer.writeSplat` (179) ← `Io.Writer.splatByte` (793) ← `Io.Writer.splatByteAll` (751) ← `zig.Ast.Render.AutoIndentingStream.applyIndent` (`/opt/zig/lib/std/zig/Ast/Render.zig:3671`) ← `zig.Ast.Render.AutoIndentingStream.writeAll` (3496) ← `zig.Ast.Render.renderArrayInit` (2067) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderParamList` (2728) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderExpressions` (305) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.finishRenderBlock` (1967) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderExpressions` (305) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.finishRenderBlock` (1967) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderThenElse` (1340) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.finishRenderBlock` (1967) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderThenElse` (1340) ← `zig.Ast.Render.renderWhile` (1278) ← `zig.Ast.Render.renderIf` (1259) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.finishRenderBlock` (1967) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderThenElse` (1340) ← `zig.Ast.Render.renderExpression` (314)             |
|  0.9% | 7.61 MiB |     795 | `heap.CAllocator.alignedAlloc` (`/opt/zig/lib/std/heap.zig:157`) ← `heap.CAllocator.alloc` (202) ← `mem.Allocator.rawAlloc` (`/opt/zig/lib/std/mem/Allocator.zig:128`) ← `mem.Allocator.allocBytesWithAlignment__anon_14770` (272) ← `mem.Allocator.allocWithSizeAndAlignment__anon_9289` (261) ← `mem.Allocator.allocAdvancedWithRetAddr` (248) ← `mem.Allocator.alignedAlloc__anon_6559` (238) ← `array_list.Aligned(u8,null).ensureTotalCapacityPrecise` (`/opt/zig/lib/std/array_list.zig:1213`) ← `array_list.Aligned(u8,null).ensureTotalCapacity` (1205) ← `array_list.Aligned(u8,null).ensureUnusedCapacity` (1241) ← `Io.Writer.Allocating.drain` (`/opt/zig/lib/std/Io/Writer.zig:2625`) ← `Io.Writer.write` (518) ← `Io.Writer.writeAll` (530) ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`/opt/zig/lib/std/zig/Ast/Render.zig:3496`) ← `zig.Ast.Render.renderToken` (2844) ← `zig.Ast.Render.renderIdentifier` (2926) ← `zig.Ast.Render.renderFnProto` (1660) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:217`) ← `zig.Ast.renderAlloc` (206) ← `profile.main` (`./profile.zig:12`) ← `start.callMain` (`/opt/zig/lib/std/start.zig:613`) ← `start.callMainWithArgs` (580) ← `main` (590) ← `(anonymous)` ← `__libc_start_main` ← `_start` (`/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.8% | 6.42 MiB |     270 | `heap.CAllocator.alignedAlloc` (`/opt/zig/lib/std/heap.zig:157`) ← `heap.CAllocator.alloc` (202) ← `mem.Allocator.rawAlloc` (`/opt/zig/lib/std/mem/Allocator.zig:128`) ← `mem.Allocator.allocBytesWithAlignment__anon_14770` (272) ← `mem.Allocator.allocWithSizeAndAlignment__anon_9289` (261) ← `mem.Allocator.allocAdvancedWithRetAddr` (248) ← `mem.Allocator.alignedAlloc__anon_6559` (238) ← `array_list.Aligned(u8,null).ensureTotalCapacityPrecise` (`/opt/zig/lib/std/array_list.zig:1213`) ← `array_list.Aligned(u8,null).ensureTotalCapacity` (1205) ← `array_list.Aligned(u8,null).ensureUnusedCapacity` (1241) ← `Io.Writer.Allocating.drain` (`/opt/zig/lib/std/Io/Writer.zig:2625`) ← `Io.Writer.write` (518) ← `Io.Writer.writeAll` (530) ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`/opt/zig/lib/std/zig/Ast/Render.zig:3496`) ← `zig.Ast.Render.renderToken` (2844) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1140) ← `zig.Ast.Render.renderVarDecl` (1122) ← `zig.Ast.Render.finishRenderBlock` (1967) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:217`) ← `zig.Ast.renderAlloc` (206) ← `profile.main` (`./profile.zig:12`) ← `start.callMain` (`/opt/zig/lib/std/start.zig:613`) ← `start.callMainWithArgs` (580) ← `main` (590) ← `(anonymous)` ← `__libc_start_main` ← `_start` (`/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.8% | 6.26 MiB |   1,890 | `heap.CAllocator.alignedAlloc` (`/opt/zig/lib/std/heap.zig:157`) ← `heap.CAllocator.alloc` (202) ← `mem.Allocator.rawAlloc` (`/opt/zig/lib/std/mem/Allocator.zig:128`) ← `mem.Allocator.allocBytesWithAlignment__anon_14962` (272) ← `mem.Allocator.allocWithSizeAndAlignment__anon_12056` (261) ← `mem.Allocator.allocAdvancedWithRetAddr` (248) ← `mem.Allocator.alignedAlloc__anon_7235` (238) ← `array_list.Aligned(u32,null).ensureTotalCapacityPrecise` (`/opt/zig/lib/std/array_list.zig:1213`) ← `array_list.Aligned(u32,null).ensureTotalCapacity` (1205) ← `array_list.Aligned(u32,null).ensureUnusedCapacity` (1241) ← `array_list.Aligned(u32,null).appendSlice` (974) ← `zig.Parse.listToSpan` (`/opt/zig/lib/std/zig/Parse.zig:55`) ← `zig.Parse.parseBlock` (2079) ← `zig.Parse.expectTopLevelDecl` (593) ← `zig.Parse.expectTopLevelDeclRecoverable` (658) ← `zig.Parse.parseContainerMembers` (235) ← `zig.Parse.parseRoot` (192) ← `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`) ← `profile.main` (`./profile.zig:12`) ← `start.callMain` (`/opt/zig/lib/std/start.zig:613`) ← `start.callMainWithArgs` (580) ← `main` (590) ← `(anonymous)` ← `__libc_start_main` ← `_start` (`/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.7% | 5.94 MiB |     210 | `heap.CAllocator.alignedAlloc` (`/opt/zig/lib/std/heap.zig:157`) ← `heap.CAllocator.alloc` (202) ← `mem.Allocator.rawAlloc` (`/opt/zig/lib/std/mem/Allocator.zig:128`) ← `mem.Allocator.allocBytesWithAlignment__anon_14770` (272) ← `mem.Allocator.allocWithSizeAndAlignment__anon_9289` (261) ← `mem.Allocator.allocAdvancedWithRetAddr` (248) ← `mem.Allocator.alignedAlloc__anon_6559` (238) ← `array_list.Aligned(u8,null).ensureTotalCapacityPrecise` (`/opt/zig/lib/std/array_list.zig:1213`) ← `array_list.Aligned(u8,null).ensureTotalCapacity` (1205) ← `array_list.Aligned(u8,null).ensureUnusedCapacity` (1241) ← `Io.Writer.Allocating.drain` (`/opt/zig/lib/std/Io/Writer.zig:2625`) ← `Io.Writer.write` (518) ← `Io.Writer.writeAll` (530) ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`/opt/zig/lib/std/zig/Ast/Render.zig:3496`) ← `zig.Ast.Render.renderToken` (2844) ← `zig.Ast.Render.renderDocComments` (3208) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderContainerDecl` (2295) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1140) ← `zig.Ast.Render.renderVarDecl` (1122) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderContainerDecl` (2295) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1140) ← `zig.Ast.Render.renderVarDecl` (1122) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:217`) ← `zig.Ast.renderAlloc` (206) ← `profile.main` (`./profile.zig:12`) ← `start.callMain` (`/opt/zig/lib/std/start.zig:613`) ← `start.callMainWithArgs` (580) ← `main` (590) ← `(anonymous)` ← `__libc_start_main` ← `_start` (`/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                               |
|  0.7% | 5.63 MiB |      60 | `heap.CAllocator.alignedAlloc` (`/opt/zig/lib/std/heap.zig:157`) ← `heap.CAllocator.alloc` (202) ← `mem.Allocator.rawAlloc` (`/opt/zig/lib/std/mem/Allocator.zig:128`) ← `mem.Allocator.allocBytesWithAlignment__anon_14770` (272) ← `mem.Allocator.allocWithSizeAndAlignment__anon_9289` (261) ← `mem.Allocator.allocAdvancedWithRetAddr` (248) ← `mem.Allocator.alignedAlloc__anon_6559` (238) ← `array_list.Aligned(u8,null).ensureTotalCapacityPrecise` (`/opt/zig/lib/std/array_list.zig:1213`) ← `array_list.Aligned(u8,null).ensureTotalCapacity` (1205) ← `array_list.Aligned(u8,null).ensureUnusedCapacity` (1241) ← `Io.Writer.Allocating.drain` (`/opt/zig/lib/std/Io/Writer.zig:2625`) ← `Io.Writer.write` (518) ← `Io.Writer.writeAll` (530) ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`/opt/zig/lib/std/zig/Ast/Render.zig:3496`) ← `zig.Ast.Render.renderToken` (2844) ← `zig.Ast.Render.renderContainerDecl` (2295) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1140) ← `zig.Ast.Render.renderVarDecl` (1122) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderContainerDecl` (2295) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1140) ← `zig.Ast.Render.renderVarDecl` (1122) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:217`) ← `zig.Ast.renderAlloc` (206) ← `profile.main` (`./profile.zig:12`) ← `start.callMain` (`/opt/zig/lib/std/start.zig:613`) ← `start.callMainWithArgs` (580) ← `main` (590) ← `(anonymous)` ← `__libc_start_main` ← `_start` (`/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                 |
|  0.7% | 5.41 MiB |      15 | `heap.CAllocator.alignedAlloc` (`/opt/zig/lib/std/heap.zig:157`) ← `heap.CAllocator.alloc` (202) ← `mem.Allocator.rawAlloc` (`/opt/zig/lib/std/mem/Allocator.zig:128`) ← `mem.Allocator.allocBytesWithAlignment__anon_14770` (272) ← `mem.Allocator.allocWithSizeAndAlignment__anon_9289` (261) ← `mem.Allocator.allocAdvancedWithRetAddr` (248) ← `mem.Allocator.alignedAlloc__anon_6559` (238) ← `array_list.Aligned(u8,null).ensureTotalCapacityPrecise` (`/opt/zig/lib/std/array_list.zig:1213`) ← `array_list.Aligned(u8,null).ensureTotalCapacity` (1205) ← `array_list.Aligned(u8,null).ensureUnusedCapacity` (1241) ← `Io.Writer.Allocating.drain` (`/opt/zig/lib/std/Io/Writer.zig:2625`) ← `Io.Writer.write` (518) ← `Io.Writer.writeAll` (530) ← `Io.Writer.alignBufferOptions` (1006) ← `Io.Writer.printValue__anon_7753` (1032) ← `Io.Writer.print__anon_4254` (593) ← `zig.Ast.Render.AutoIndentingStream.print__anon_18468` (`/opt/zig/lib/std/zig/Ast/Render.zig:3505`) ← `zig.Ast.Render.renderComments` (3112) ← `zig.Ast.Render.renderSpace` (2862) ← `zig.Ast.Render.renderToken` (2844) ← `zig.Ast.Render.renderSpace` (2862) ← `zig.Ast.Render.renderToken` (2844) ← `zig.Ast.Render.renderIdentifier` (2926) ← `zig.Ast.Render.renderContainerField` (1473) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderContainerDecl` (2295) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderExpressions` (305) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1140) ← `zig.Ast.Render.renderVarDecl` (1122) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:217`) ← `zig.Ast.renderAlloc` (206) ← `profile.main` (`./profile.zig:12`) ← `start.callMain` (`/opt/zig/lib/std/start.zig:613`) ← `start.callMainWithArgs` (580) ← `main` (590) ← `(anonymous)` ← `__libc_start_main` ← `_start` (`/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`) |
|  0.7% | 5.41 MiB |      15 | `heap.CAllocator.alignedAlloc` (`/opt/zig/lib/std/heap.zig:157`) ← `heap.CAllocator.alloc` (202) ← `mem.Allocator.rawAlloc` (`/opt/zig/lib/std/mem/Allocator.zig:128`) ← `mem.Allocator.allocBytesWithAlignment__anon_14770` (272) ← `mem.Allocator.allocWithSizeAndAlignment__anon_9289` (261) ← `mem.Allocator.allocAdvancedWithRetAddr` (248) ← `mem.Allocator.alignedAlloc__anon_6559` (238) ← `array_list.Aligned(u8,null).ensureTotalCapacityPrecise` (`/opt/zig/lib/std/array_list.zig:1213`) ← `array_list.Aligned(u8,null).ensureTotalCapacity` (1205) ← `array_list.Aligned(u8,null).ensureUnusedCapacity` (1241) ← `Io.Writer.Allocating.drain` (`/opt/zig/lib/std/Io/Writer.zig:2625`) ← `Io.Writer.write` (518) ← `Io.Writer.writeAll` (530) ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`/opt/zig/lib/std/zig/Ast/Render.zig:3496`) ← `zig.Ast.Render.renderToken` (2844) ← `zig.Ast.Render.renderSpace` (2862) ← `zig.Ast.Render.renderToken` (2844) ← `zig.Ast.Render.renderIdentifier` (2926) ← `zig.Ast.Render.renderSwitchCase` (1881) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderExpressions` (305) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.finishRenderBlock` (1967) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:217`) ← `zig.Ast.renderAlloc` (206) ← `profile.main` (`./profile.zig:12`) ← `start.callMain` (`/opt/zig/lib/std/start.zig:613`) ← `start.callMainWithArgs` (580) ← `main` (590) ← `(anonymous)` ← `__libc_start_main` ← `_start` (`/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                          |
|  0.6% | 4.95 MiB |     525 | `heap.CAllocator.alignedAlloc` (`/opt/zig/lib/std/heap.zig:157`) ← `heap.CAllocator.alloc` (202) ← `mem.Allocator.rawAlloc` (`/opt/zig/lib/std/mem/Allocator.zig:128`) ← `mem.Allocator.allocBytesWithAlignment__anon_14770` (272) ← `mem.Allocator.allocWithSizeAndAlignment__anon_9289` (261) ← `mem.Allocator.allocAdvancedWithRetAddr` (248) ← `mem.Allocator.alignedAlloc__anon_6559` (238) ← `array_list.Aligned(u8,null).ensureTotalCapacityPrecise` (`/opt/zig/lib/std/array_list.zig:1213`) ← `array_list.Aligned(u8,null).ensureTotalCapacity` (1205) ← `array_list.Aligned(u8,null).ensureUnusedCapacity` (1241) ← `Io.Writer.Allocating.drain` (`/opt/zig/lib/std/Io/Writer.zig:2625`) ← `Io.Writer.writeSplat` (179) ← `Io.Writer.splatByte` (793) ← `Io.Writer.splatByteAll` (751) ← `zig.Ast.Render.AutoIndentingStream.applyIndent` (`/opt/zig/lib/std/zig/Ast/Render.zig:3671`) ← `zig.Ast.Render.AutoIndentingStream.writeAll` (3496) ← `zig.Ast.Render.renderToken` (2844) ← `zig.Ast.Render.renderIdentifier` (2926) ← `zig.Ast.Render.renderContainerField` (1473) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderContainerDecl` (2295) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1140) ← `zig.Ast.Render.renderVarDecl` (1122) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:217`) ← `zig.Ast.renderAlloc` (206) ← `profile.main` (`./profile.zig:12`) ← `start.callMain` (`/opt/zig/lib/std/start.zig:613`) ← `start.callMainWithArgs` (580) ← `main` (590) ← `(anonymous)` ← `__libc_start_main` ← `_start` (`/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                           |
|  0.6% | 4.66 MiB |     135 | `heap.CAllocator.alignedAlloc` (`/opt/zig/lib/std/heap.zig:157`) ← `heap.CAllocator.alloc` (202) ← `mem.Allocator.rawAlloc` (`/opt/zig/lib/std/mem/Allocator.zig:128`) ← `mem.Allocator.allocBytesWithAlignment__anon_14770` (272) ← `mem.Allocator.allocWithSizeAndAlignment__anon_9289` (261) ← `mem.Allocator.allocAdvancedWithRetAddr` (248) ← `mem.Allocator.alignedAlloc__anon_6559` (238) ← `array_list.Aligned(u8,null).ensureTotalCapacityPrecise` (`/opt/zig/lib/std/array_list.zig:1213`) ← `array_list.Aligned(u8,null).ensureTotalCapacity` (1205) ← `array_list.Aligned(u8,null).ensureUnusedCapacity` (1241) ← `Io.Writer.Allocating.drain` (`/opt/zig/lib/std/Io/Writer.zig:2625`) ← `Io.Writer.write` (518) ← `Io.Writer.writeAll` (530) ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`/opt/zig/lib/std/zig/Ast/Render.zig:3496`) ← `zig.Ast.Render.renderToken` (2844) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1140) ← `zig.Ast.Render.renderVarDecl` (1122) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderContainerDecl` (2295) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1140) ← `zig.Ast.Render.renderVarDecl` (1122) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:217`) ← `zig.Ast.renderAlloc` (206) ← `profile.main` (`./profile.zig:12`) ← `start.callMain` (`/opt/zig/lib/std/start.zig:613`) ← `start.callMainWithArgs` (580) ← `main` (590) ← `(anonymous)` ← `__libc_start_main` ← `_start` (`/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.6% | 4.46 MiB |     240 | `heap.CAllocator.alignedAlloc` (`/opt/zig/lib/std/heap.zig:157`) ← `heap.CAllocator.alloc` (202) ← `mem.Allocator.rawAlloc` (`/opt/zig/lib/std/mem/Allocator.zig:128`) ← `mem.Allocator.allocBytesWithAlignment__anon_14770` (272) ← `mem.Allocator.allocWithSizeAndAlignment__anon_9289` (261) ← `mem.Allocator.allocAdvancedWithRetAddr` (248) ← `mem.Allocator.alignedAlloc__anon_6559` (238) ← `array_list.Aligned(u8,null).ensureTotalCapacityPrecise` (`/opt/zig/lib/std/array_list.zig:1213`) ← `array_list.Aligned(u8,null).ensureTotalCapacity` (1205) ← `array_list.Aligned(u8,null).ensureUnusedCapacity` (1241) ← `Io.Writer.Allocating.drain` (`/opt/zig/lib/std/Io/Writer.zig:2625`) ← `Io.Writer.write` (518) ← `Io.Writer.writeAll` (530) ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`/opt/zig/lib/std/zig/Ast/Render.zig:3496`) ← `zig.Ast.Render.renderToken` (2844) ← `zig.Ast.Render.renderIdentifier` (2926) ← `zig.Ast.Render.renderStructInit` (1995) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.finishRenderBlock` (1967) ← `zig.Ast.Render.renderExpression` (314) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1140) ← `zig.Ast.Render.renderVarDecl` (1122) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:217`) ← `zig.Ast.renderAlloc` (206) ← `profile.main` (`./profile.zig:12`) ← `start.callMain` (`/opt/zig/lib/std/start.zig:613`) ← `start.callMainWithArgs` (580) ← `main` (590) ← `(anonymous)` ← `__libc_start_main` ← `_start` (`/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.5% | 4.29 MiB |   6,585 | `heap.CAllocator.alignedAlloc` (`/opt/zig/lib/std/heap.zig:157`) ← `heap.CAllocator.alloc` (202) ← `mem.Allocator.rawAlloc` (`/opt/zig/lib/std/mem/Allocator.zig:128`) ← `mem.Allocator.allocBytesWithAlignment__anon_14770` (272) ← `mem.Allocator.allocWithSizeAndAlignment__anon_9289` (261) ← `mem.Allocator.allocAdvancedWithRetAddr` (248) ← `mem.Allocator.alignedAlloc__anon_6559` (238) ← `array_list.Aligned(u8,null).ensureTotalCapacityPrecise` (`/opt/zig/lib/std/array_list.zig:1213`) ← `array_list.Aligned(u8,null).ensureTotalCapacity` (1205) ← `array_list.Aligned(u8,null).ensureUnusedCapacity` (1241) ← `Io.Writer.Allocating.drain` (`/opt/zig/lib/std/Io/Writer.zig:2625`) ← `Io.Writer.write` (518) ← `Io.Writer.writeAll` (530) ← `zig.Ast.Render.AutoIndentingStream.writeAll` (`/opt/zig/lib/std/zig/Ast/Render.zig:3496`) ← `zig.Ast.Render.renderToken` (2844) ← `zig.Ast.Render.renderVarDeclWithoutFixups` (1140) ← `zig.Ast.Render.renderVarDecl` (1122) ← `zig.Ast.Render.renderMember` (141) ← `zig.Ast.Render.renderMembers` (122) ← `zig.Ast.Render.renderTree` (86) ← `zig.Ast.render` (`/opt/zig/lib/std/zig/Ast.zig:217`) ← `zig.Ast.renderAlloc` (206) ← `profile.main` (`./profile.zig:12`) ← `start.callMain` (`/opt/zig/lib/std/start.zig:613`) ← `start.callMainWithArgs` (580) ← `main` (590) ← `(anonymous)` ← `__libc_start_main` ← `_start` (`/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.5% | 4.17 MiB |     975 | `heap.CAllocator.alignedAlloc` (`/opt/zig/lib/std/heap.zig:157`) ← `heap.CAllocator.alloc` (202) ← `mem.Allocator.rawAlloc` (`/opt/zig/lib/std/mem/Allocator.zig:128`) ← `mem.Allocator.allocBytesWithAlignment__anon_14962` (272) ← `mem.Allocator.allocWithSizeAndAlignment__anon_12056` (261) ← `mem.Allocator.allocAdvancedWithRetAddr` (248) ← `mem.Allocator.alignedAlloc__anon_7235` (238) ← `array_list.Aligned(u32,null).ensureTotalCapacityPrecise` (`/opt/zig/lib/std/array_list.zig:1213`) ← `array_list.Aligned(u32,null).ensureTotalCapacity` (1205) ← `array_list.Aligned(u32,null).ensureUnusedCapacity` (1241) ← `array_list.Aligned(u32,null).appendSlice` (974) ← `zig.Parse.listToSpan` (`/opt/zig/lib/std/zig/Parse.zig:55`) ← `zig.Parse.parseBlock` (2079) ← `zig.Parse.expectTestDecl` (561) ← `zig.Parse.expectTestDeclRecoverable` (578) ← `zig.Parse.parseContainerMembers` (235) ← `zig.Parse.parseRoot` (192) ← `zig.Ast.parse` (`/opt/zig/lib/std/zig/Ast.zig:145`) ← `profile.main` (`./profile.zig:12`) ← `start.callMain` (`/opt/zig/lib/std/start.zig:613`) ← `start.callMainWithArgs` (580) ← `main` (590) ← `(anonymous)` ← `__libc_start_main` ← `_start` (`/opt/zig/lib/libc/glibc/sysdeps/aarch64/start.S`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

# Retained heap profile

Retained 0 B over 0 objects.

Paths starting with `./` or `../` are relative to `/out/`.

No bytes retained in any object.
