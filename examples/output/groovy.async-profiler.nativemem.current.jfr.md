# Allocated native memory profile

Allocated 1.33 GiB over 8,502 samples (164 KiB per sample).

| Category |      % |     Size | Samples |
| -------- | -----: | -------: | ------: |
| Native   | 100.0% | 1.33 GiB |   8,502 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
└── … 1.32 GiB (99.5%) Compile::Compile at libjvm.dylib
    ├── 734 MiB (54.1%) Compile::Optimize
    │   ├── 358 MiB (26.4%) PhaseIdealLoop::optimize
    │   │   └── 355 MiB (26.1%) PhaseIdealLoop::PhaseIdealLoop
    │   │       └── 355 MiB (26.1%) PhaseIdealLoop::build_and_optimize
    │   │           ├── … 309 MiB (22.7%) malloc_hook at libasyncProfiler.dylib
    │   │           ├── … 11 MiB (0.8%) malloc_hook at libasyncProfiler.dylib
    │   │           ├── … 9.63 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
    │   │           ├── 6.37 MiB (0.5%) Arena::grow
    │   │           ├── … 5.53 MiB (0.4%) PhaseIdealLoop::loop_predication_impl_helper at libjvm.dylib
    │   │           └── 4.03 MiB (0.3%) PhaseIdealLoop::split_if_with_blocks
    │   ├── … 339 MiB (25.0%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
    │   │   ├── … 300 MiB (22.1%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 10.8 MiB (0.8%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 9.94 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 8.08 MiB (0.6%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── 4.13 MiB (0.3%) IdealLoopTree::iteration_split
    │   │   └── 2.59 MiB (0.2%) IdealLoopTree::loop_predication
    │   ├── … 8.44 MiB (0.6%) malloc_hook at libasyncProfiler.dylib
    │   ├── 6.21 MiB (0.5%) ConnectionGraph::do_analysis
    │   ├── 5.63 MiB (0.4%) PhaseCCP::do_transform
    │   ├── 5.3 MiB (0.4%) PhaseRenumberLive::PhaseRenumberLive
    │   └── 3.34 MiB (0.2%) PhaseMacroExpand::expand_macro_nodes
    ├── 586 MiB (43.2%) Compile::Code_Gen
    │   ├── 487 MiB (35.8%) PhaseChaitin::Register_Allocate
    │   │   ├── … 378 MiB (27.8%, self 100.0% globally) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 101 MiB (7.4%) malloc_hook at libasyncProfiler.dylib
    │   │   └── 4.94 MiB (0.4%) PhaseChaitin::Split
    │   ├── 86.7 MiB (6.4%) Matcher::match
    │   │   ├── 54.2 MiB (4.0%) Matcher::xform
    │   │   │   ├── … 39.5 MiB (2.9%) malloc_hook at libasyncProfiler.dylib
    │   │   │   └── … 8.88 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
    │   │   └── … 25.8 MiB (1.9%) malloc_hook at libasyncProfiler.dylib
    │   ├── 5.23 MiB (0.4%) PhaseCFG::do_global_code_motion
    │   └── 3.73 MiB (0.3%) PhaseOutput::Output
    ├── … 15.2 MiB (1.1%) Parse::do_one_block at libjvm.dylib
    │   ├── 4.25 MiB (0.3%) Parse::do_field_access
    │   ├── 3.63 MiB (0.3%) Parse::do_call
    │   └── 1.66 MiB (0.1%) Parse::do_if
    └── … 8.91 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
```

## Hottest functions

### Self size

Functions with the most native bytes allocated within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self size.

##### Native

|      % |     Size | Samples | Function       | Location                 |
| -----: | -------: | ------: | -------------- | ------------------------ |
| 100.0% | 1.33 GiB |   8,498 | `malloc_hook`  | `libasyncProfiler.dylib` |
|  <0.1% |    8 KiB |       1 | `calloc_hook`  | `libasyncProfiler.dylib` |
|  <0.1% |    704 B |       3 | `realloc_hook` | `libasyncProfiler.dylib` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location          |
| ----: | -------: | ------: | ----------------------------------------- | ----------------- |
| 99.8% | 1.32 GiB |   8,423 | `os::malloc`                              | `libjvm.dylib`    |
|  0.2% | 2.57 MiB |      33 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |
| <0.1% |  256 KiB |       8 | `updatewindow`                            | `libzip.dylib`    |
| <0.1% |  169 KiB |       8 | `CCalloc`                                 | `libverify.dylib` |
| <0.1% | 32.3 KiB |      22 | `Java_java_lang_ClassLoader_defineClass0` | `libjava.dylib`   |

##### `calloc_hook` (`libasyncProfiler.dylib`)

|      % |  Size | Samples | Caller                      | Location          |
| -----: | ----: | ------: | --------------------------- | ----------------- |
| 100.0% | 8 KiB |       1 | `make_class_info_from_name` | `libverify.dylib` |

##### `realloc_hook` (`libasyncProfiler.dylib`)

|      % |  Size | Samples | Caller        | Location       |
| -----: | ----: | ------: | ------------- | -------------- |
| 100.0% | 704 B |       3 | `os::realloc` | `libjvm.dylib` |

### Total size

Functions with the most native bytes allocated within the function and its callees.

|      % |     Size | Samples | Function                                   | Location                  |
| -----: | -------: | ------: | ------------------------------------------ | ------------------------- |
| 100.0% | 1.33 GiB |   8,498 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
|  99.8% | 1.32 GiB |   8,423 | `os::malloc`                               | `libjvm.dylib`            |
|  99.7% | 1.32 GiB |   8,303 | `Chunk::operator new`                      | `libjvm.dylib`            |
|  99.7% | 1.32 GiB |   8,303 | `Arena::grow`                              | `libjvm.dylib`            |
|  99.7% | 1.32 GiB |   8,320 | `Thread::call_run`                         | `libjvm.dylib`            |
|  99.7% | 1.32 GiB |   8,320 | `thread_native_entry`                      | `libjvm.dylib`            |
|  99.7% | 1.32 GiB |   8,320 | `_pthread_start`                           | `libsystem_pthread.dylib` |
|  99.7% | 1.32 GiB |   8,320 | `thread_start`                             | `libsystem_pthread.dylib` |
|  99.7% | 1.32 GiB |   8,310 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
|  99.7% | 1.32 GiB |   8,309 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  99.7% | 1.32 GiB |   8,309 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
|  99.5% | 1.32 GiB |   8,228 | `Compile::Compile`                         | `libjvm.dylib`            |
|  99.5% | 1.32 GiB |   8,228 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  54.1% |  734 MiB |   4,435 | `Compile::Optimize`                        | `libjvm.dylib`            |
|  51.5% |  699 MiB |   3,949 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib`            |
|  51.1% |  695 MiB |   3,910 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib`            |
|  51.1% |  695 MiB |   3,910 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib`            |
|  44.8% |  608 MiB |   2,453 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`            |
|  43.2% |  586 MiB |   3,450 | `Compile::Code_Gen`                        | `libjvm.dylib`            |
|  35.8% |  487 MiB |   2,564 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib`            |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Native

|      % |     Size | Samples | Function                                                           | Location                  |
| -----: | -------: | ------: | ------------------------------------------------------------------ | ------------------------- |
| 100.0% | 1.33 GiB |   8,498 | `malloc_hook`                                                      | `libasyncProfiler.dylib`  |
|  99.8% | 1.32 GiB |   8,423 | `os::malloc`                                                       | `libjvm.dylib`            |
|  99.7% | 1.32 GiB |   8,303 | `Chunk::operator new`                                              | `libjvm.dylib`            |
|  99.7% | 1.32 GiB |   8,303 | `Arena::grow`                                                      | `libjvm.dylib`            |
|  99.7% | 1.32 GiB |   8,320 | `Thread::call_run`                                                 | `libjvm.dylib`            |
|  99.7% | 1.32 GiB |   8,320 | `thread_native_entry`                                              | `libjvm.dylib`            |
|  99.7% | 1.32 GiB |   8,320 | `_pthread_start`                                                   | `libsystem_pthread.dylib` |
|  99.7% | 1.32 GiB |   8,320 | `thread_start`                                                     | `libsystem_pthread.dylib` |
|  99.7% | 1.32 GiB |   8,310 | `JavaThread::thread_main_inner`                                    | `libjvm.dylib`            |
|   8.8% |  119 MiB |   1,670 | `Arena::Arealloc`                                                  | `libjvm.dylib`            |
|   1.5% | 20.4 MiB |     327 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib`            |
|   1.4% |   19 MiB |     240 | `Parse::do_all_blocks`                                             | `libjvm.dylib`            |
|   1.4% |   19 MiB |     240 | `Parse::Parse`                                                     | `libjvm.dylib`            |
|   1.4% |   19 MiB |     240 | `ParseGenerator::generate`                                         | `libjvm.dylib`            |
|   1.4% |   19 MiB |     239 | `Parse::do_one_block`                                              | `libjvm.dylib`            |
|   1.3% | 18.1 MiB |     223 | `Parse::do_call`                                                   | `libjvm.dylib`            |
|   1.1% | 14.3 MiB |     177 | `PredictedCallGenerator::generate`                                 | `libjvm.dylib`            |
|   1.0% | 13.2 MiB |     144 | `Type_Array::grow`                                                 | `libjvm.dylib`            |
|   0.8% | 11.2 MiB |     217 | `IdealLoopTree::loop_predication`                                  | `libjvm.dylib`            |
|   0.5% | 6.98 MiB |     112 | `IdealLoopTree::iteration_split`                                   | `libjvm.dylib`            |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location          |
| ----: | -------: | ------: | ----------------------------------------- | ----------------- |
| 99.8% | 1.32 GiB |   8,423 | `os::malloc`                              | `libjvm.dylib`    |
|  0.2% | 2.57 MiB |      33 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |
| <0.1% |  256 KiB |       8 | `updatewindow`                            | `libzip.dylib`    |
| <0.1% |  169 KiB |       8 | `CCalloc`                                 | `libverify.dylib` |
| <0.1% | 32.3 KiB |      22 | `Java_java_lang_ClassLoader_defineClass0` | `libjava.dylib`   |

##### `os::malloc` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                   | Location       |
| ----: | -------: | ------: | ------------------------ | -------------- |
| 99.9% | 1.32 GiB |   8,303 | `Chunk::operator new`    | `libjvm.dylib` |
|  0.1% |  914 KiB |       1 | `os::malloc`             | `libjvm.dylib` |
|  0.1% |  914 KiB |       1 | `Unsafe_AllocateMemory0` | `libjvm.dylib` |
| <0.1% |  342 KiB |     109 | `AllocateHeap`           | `libjvm.dylib` |
| <0.1% |    720 B |       9 | `AnyObj::operator new`   | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |     Size | Samples | Caller        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 1.32 GiB |   8,303 | `Arena::grow` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                       | Location       |
| ----: | -------: | ------: | ---------------------------- | -------------- |
| 44.9% |  608 MiB |   2,453 | `PhaseIdealLoop::Dominators` | `libjvm.dylib` |
| 27.9% |  378 MiB |   1,656 | `PhaseIFG::init`             | `libjvm.dylib` |
|  8.8% |  119 MiB |   1,670 | `Arena::Arealloc`            | `libjvm.dylib` |
|  7.4% |  101 MiB |     787 | `PhaseLive::compute`         | `libjvm.dylib` |
|  2.9% | 39.5 MiB |     205 | `Matcher::xform`             | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 1.32 GiB |   8,320 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |     Size | Samples | Caller           | Location                  |
| -----: | -------: | ------: | ---------------- | ------------------------- |
| 100.0% | 1.32 GiB |   8,320 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |     Size | Samples | Caller         | Location                  |
| -----: | -------: | ------: | -------------- | ------------------------- |
| 100.0% | 1.32 GiB |   8,320 | `thread_start` | `libsystem_pthread.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |     Size | Samples | Caller             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.32 GiB |   8,310 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                                | Location       |
| -----: | -------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 1.32 GiB |   8,309 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                          | Location       |
| -----: | -------: | ------: | ------------------------------- | -------------- |
| 100.0% | 1.32 GiB |   8,309 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                       | Location       |
| -----: | -------: | ------: | ---------------------------- | -------------- |
| 100.0% | 1.32 GiB |   8,228 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                                     | Location       |
| -----: | -------: | ------: | ------------------------------------------ | -------------- |
| 100.0% | 1.32 GiB |   8,228 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 734 MiB |   4,435 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |    Size | Samples | Caller                    | Location       |
| ----: | ------: | ------: | ------------------------- | -------------- |
| 51.3% | 358 MiB |   2,163 | `Compile::Optimize`       | `libjvm.dylib` |
| 48.7% | 341 MiB |   1,786 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                           | Location       |
| -----: | ------: | ------: | -------------------------------- | -------------- |
| 100.0% | 695 MiB |   3,910 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                     | Location       |
| -----: | ------: | ------: | -------------------------- | -------------- |
| 100.0% | 695 MiB |   3,910 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 608 MiB |   2,453 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 586 MiB |   3,450 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % |    Size | Samples | Caller              | Location       |
| -----: | ------: | ------: | ------------------- | -------------- |
| 100.0% | 487 MiB |   2,564 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 56.9% | 67.7 MiB |   1,010 | `Node_Array::grow`               | `libjvm.dylib` |
| 11.1% | 13.2 MiB |     144 | `Type_Array::grow`               | `libjvm.dylib` |
| 10.9% |   13 MiB |     224 | `PhaseIdealLoop::set_idom`       | `libjvm.dylib` |
|  7.7% | 9.13 MiB |      83 | `Node::out_grow`                 | `libjvm.dylib` |
|  4.1% | 4.81 MiB |      53 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                               | Location       |
| -----: | -------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 20.4 MiB |     327 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % |   Size | Samples | Caller         | Location       |
| -----: | -----: | ------: | -------------- | -------------- |
| 100.0% | 19 MiB |     240 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % |   Size | Samples | Caller                     | Location       |
| -----: | -----: | ------: | -------------------------- | -------------- |
| 100.0% | 19 MiB |     240 | `ParseGenerator::generate` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                                 | Location       |
| ----: | -------: | ------: | -------------------------------------- | -------------- |
| 98.9% | 18.8 MiB |     237 | `Compile::Compile`                     | `libjvm.dylib` |
| 74.2% | 14.1 MiB |     173 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
| 71.1% | 13.5 MiB |     158 | `Parse::do_call`                       | `libjvm.dylib` |
|  0.3% |   64 KiB |       1 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|      % |   Size | Samples | Caller                 | Location       |
| -----: | -----: | ------: | ---------------------- | -------------- |
| 100.0% | 19 MiB |     239 | `Parse::do_all_blocks` | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 18.1 MiB |     223 | `Parse::do_one_block` | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                                 | Location       |
| -----: | -------: | ------: | -------------------------------------- | -------------- |
| 100.0% | 14.3 MiB |     177 | `Parse::do_call`                       | `libjvm.dylib` |
|  33.4% | 4.78 MiB |      50 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
|   1.1% |  160 KiB |       2 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

##### `Type_Array::grow` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                         | Location       |
| ----: | -------: | ------: | ------------------------------ | -------------- |
| 21.1% | 2.78 MiB |      39 | `PhaseValues::set_type_bottom` | `libjvm.dylib` |
| 19.2% | 2.53 MiB |      32 | `GraphKit::clone_map`          | `libjvm.dylib` |
| 16.4% | 2.16 MiB |      22 | `IdealKit::delay_transform`    | `libjvm.dylib` |
|  9.7% | 1.28 MiB |      14 | `Parse::return_current`        | `libjvm.dylib` |
|  7.4% |  992 KiB |       6 | `Parse::build_exits`           | `libjvm.dylib` |

##### `IdealLoopTree::loop_predication` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                               | Location       |
| -----: | -------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 11.2 MiB |     217 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
|  45.5% |  5.1 MiB |      96 | `IdealLoopTree::loop_predication`    | `libjvm.dylib` |

##### `IdealLoopTree::iteration_split` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                               | Location       |
| -----: | -------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 6.98 MiB |     112 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
|  94.6% |  6.6 MiB |     104 | `IdealLoopTree::iteration_split`     | `libjvm.dylib` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `os::malloc` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location                 |
| -----: | -------: | ------: | ------------- | ------------------------ |
| 100.0% | 1.32 GiB |   8,423 | `malloc_hook` | `libasyncProfiler.dylib` |
|   0.1% |  914 KiB |       1 | `os::malloc`  | `libjvm.dylib`           |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |     Size | Samples | Callee       | Location       |
| -----: | -------: | ------: | ------------ | -------------- |
| 100.0% | 1.32 GiB |   8,303 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 1.32 GiB |   8,303 | `Chunk::operator new` | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                          | Location       |
| -----: | -------: | ------: | ------------------------------- | -------------- |
| 100.0% | 1.32 GiB |   8,310 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  <0.1% |   66 KiB |       3 | `WorkerThread::run`             | `libjvm.dylib` |
|  <0.1% |   50 KiB |       7 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |     Size | Samples | Callee             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.32 GiB |   8,320 | `Thread::call_run` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |     Size | Samples | Callee                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 1.32 GiB |   8,320 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % |     Size | Samples | Callee           | Location                  |
| -----: | -------: | ------: | ---------------- | ------------------------- |
| 100.0% | 1.32 GiB |   8,320 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                | Location       |
| -----: | -------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 1.32 GiB |   8,309 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |
|  <0.1% |   32 KiB |       1 | `ServiceThread::service_thread_entry` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                        | Location       |
| ----: | -------: | ------: | ----------------------------- | -------------- |
| 99.8% | 1.32 GiB |   8,228 | `C2Compiler::compile_method`  | `libjvm.dylib` |
|  0.2% | 2.91 MiB |      80 | `Compiler::compile_method`    | `libjvm.dylib` |
| <0.1% |     20 B |       1 | `CompilationLog::log_compile` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                     | Location       |
| -----: | -------: | ------: | ------------------------------------------ | -------------- |
| 100.0% | 1.32 GiB |   8,309 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 54.4% |  734 MiB |   4,435 | `Compile::Optimize`                      | `libjvm.dylib` |
| 43.4% |  586 MiB |   3,450 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  1.4% | 18.8 MiB |     237 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.7% | 8.91 MiB |      81 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.1% | 1.56 MiB |      13 | `Compile::inline_string_calls`           | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |     Size | Samples | Callee             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.32 GiB |   8,228 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                         | Location       |
| ----: | -------: | ------: | ------------------------------ | -------------- |
| 48.8% |  358 MiB |   2,163 | `PhaseIdealLoop::optimize`     | `libjvm.dylib` |
| 46.4% |  341 MiB |   1,786 | `Compile::optimize_loops`      | `libjvm.dylib` |
|  1.3% | 9.25 MiB |      96 | `PhaseIterGVN::optimize`       | `libjvm.dylib` |
|  0.8% | 6.21 MiB |      89 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |
|  0.8% | 5.63 MiB |     101 | `PhaseCCP::do_transform`       | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 99.4% |  695 MiB |   3,910 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  0.6% | 4.38 MiB |      39 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                                             | Location       |
| ----: | -------: | ------: | ------------------------------------------------------------------ | -------------- |
| 87.6% |  608 MiB |   2,453 | `PhaseIdealLoop::Dominators`                                       | `libjvm.dylib` |
|  3.0% | 20.9 MiB |     335 | `Node_Array::grow`                                                 | `libjvm.dylib` |
|  2.9% | 20.4 MiB |     327 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib` |
|  2.1% | 14.5 MiB |     245 | `Arena::grow`                                                      | `libjvm.dylib` |
|  1.6% | 11.2 MiB |     217 | `IdealLoopTree::loop_predication`                                  | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 695 MiB |   3,910 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 608 MiB |   2,453 | `Arena::grow` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                            | Location       |
| ----: | -------: | ------: | --------------------------------- | -------------- |
| 83.0% |  487 MiB |   2,564 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 14.8% | 86.7 MiB |     671 | `Matcher::match`                  | `libjvm.dylib` |
|  0.9% | 5.23 MiB |      84 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  0.6% | 3.73 MiB |      65 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  0.6% | 3.36 MiB |      54 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 77.7% |  378 MiB |   1,656 | `PhaseIFG::init`                         | `libjvm.dylib` |
| 20.7% |  101 MiB |     788 | `PhaseLive::compute`                     | `libjvm.dylib` |
|  1.0% | 4.94 MiB |      63 | `PhaseChaitin::Split`                    | `libjvm.dylib` |
|  0.3% | 1.47 MiB |      28 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |
|  0.1% |  676 KiB |      13 | `PhaseRegAlloc::alloc_node_regs`         | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 119 MiB |   1,670 | `Arena::grow` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 20.4 MiB |     327 | `Arena::grow` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|     % |    Size | Samples | Callee                          | Location       |
| ----: | ------: | ------: | ------------------------------- | -------------- |
| 99.7% |  19 MiB |     239 | `Parse::do_one_block`           | `libjvm.dylib` |
|  1.3% | 256 KiB |       4 | `Parse::merge_common`           | `libjvm.dylib` |
|  0.7% | 128 KiB |       2 | `GraphKit::clone_map`           | `libjvm.dylib` |
|  0.3% |  64 KiB |       1 | `Parse::ensure_phis_everywhere` | `libjvm.dylib` |
|  0.2% |  32 KiB |       1 | `GraphKit::uncommon_trap`       | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                    | Location       |
| -----: | -------: | ------: | ------------------------- | -------------- |
| 100.0% |   19 MiB |     240 | `Parse::do_all_blocks`    | `libjvm.dylib` |
|   9.7% | 1.84 MiB |      16 | `Parse::build_exits`      | `libjvm.dylib` |
|   3.3% |  640 KiB |       7 | `GraphKit::set_map_clone` | `libjvm.dylib` |
|   2.0% |  384 KiB |       6 | `Parse::do_exits`         | `libjvm.dylib` |
|   1.3% |  256 KiB |       3 | `Parse::create_entry_map` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % |   Size | Samples | Callee         | Location       |
| -----: | -----: | ------: | -------------- | -------------- |
| 100.0% | 19 MiB |     240 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                   | Location       |
| ----: | -------: | ------: | ------------------------ | -------------- |
| 95.2% | 18.1 MiB |     223 | `Parse::do_call`         | `libjvm.dylib` |
| 22.7% | 4.31 MiB |      52 | `Parse::do_field_access` | `libjvm.dylib` |
|  8.7% | 1.66 MiB |      22 | `Parse::do_if`           | `libjvm.dylib` |
|  7.9% |  1.5 MiB |      20 | `Parse::do_one_bytecode` | `libjvm.dylib` |
|  7.2% | 1.38 MiB |      16 | `Parse::return_current`  | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                                | Location       |
| ----: | -------: | ------: | ----------------------------------------------------- | -------------- |
| 79.2% | 14.3 MiB |     177 | `PredictedCallGenerator::generate`                    | `libjvm.dylib` |
| 74.9% | 13.5 MiB |     158 | `ParseGenerator::generate`                            | `libjvm.dylib` |
|  8.1% | 1.47 MiB |      15 | `LibraryIntrinsic::generate`                          | `libjvm.dylib` |
|  1.0% |  192 KiB |       3 | `DirectCallGenerator::generate`                       | `libjvm.dylib` |
|  0.5% |   96 KiB |       2 | `GraphKit::record_profiled_arguments_for_speculation` | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                               | Location       |
| ----: | -------: | ------: | ------------------------------------ | -------------- |
| 98.7% | 14.1 MiB |     173 | `ParseGenerator::generate`           | `libjvm.dylib` |
| 33.4% | 4.78 MiB |      50 | `PredictedCallGenerator::generate`   | `libjvm.dylib` |
|  4.8% |  704 KiB |       7 | `PreserveJVMState::PreserveJVMState` | `libjvm.dylib` |
|  3.5% |  512 KiB |       5 | `GraphKit::null_check_common`        | `libjvm.dylib` |
|  2.0% |  288 KiB |       5 | `DirectCallGenerator::generate`      | `libjvm.dylib` |

##### `Type_Array::grow` (`libjvm.dylib`)

|      % |     Size | Samples | Callee            | Location       |
| -----: | -------: | ------: | ----------------- | -------------- |
| 100.0% | 13.2 MiB |     144 | `Arena::Arealloc` | `libjvm.dylib` |

##### `IdealLoopTree::loop_predication` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                  | Location       |
| -----: | -------: | ------: | --------------------------------------- | -------------- |
| 100.0% | 11.2 MiB |     217 | `PhaseIdealLoop::loop_predication_impl` | `libjvm.dylib` |
|  45.5% |  5.1 MiB |      96 | `IdealLoopTree::loop_predication`       | `libjvm.dylib` |

##### `IdealLoopTree::iteration_split` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                | Location       |
| ----: | -------: | ------: | ------------------------------------- | -------------- |
| 94.6% |  6.6 MiB |     104 | `IdealLoopTree::iteration_split`      | `libjvm.dylib` |
| 89.2% | 6.23 MiB |      97 | `IdealLoopTree::iteration_split_impl` | `libjvm.dylib` |
| 10.8% |  768 KiB |      15 | `PhaseIdealLoop::do_unswitching`      | `libjvm.dylib` |

## Hottest call stacks

Call stacks with the most native bytes allocated in their leaf frame.

Common call stack: `Compile::Compile` (`libjvm.dylib`) ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                     |
| ----: | -------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 27.8% |  378 MiB |   1,656 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                  |
| 22.7% |  309 MiB |   1,328 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                   |
| 22.1% |  300 MiB |   1,125 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                       |
|  7.4% |  101 MiB |     787 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                              |
|  2.9% | 39.5 MiB |     205 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                   |
|  1.9% | 25.8 MiB |     193 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                             |
|  0.8% |   11 MiB |     175 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                         |
|  0.8% | 10.8 MiB |     165 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` |
|  0.7% | 9.94 MiB |     160 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                             |
|  0.7% | 9.63 MiB |     162 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                             |
|  0.7% | 8.91 MiB |      81 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless`                                                                                                        |
|  0.7% | 8.88 MiB |      77 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node::out_grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                            |
|  0.6% | 8.31 MiB |      76 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize`                                                                                                               |
|  0.6% | 8.08 MiB |     141 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                      |
|  0.5% | 6.37 MiB |     104 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                  |
|  0.4% |  5.6 MiB |     100 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize`                                                                                                             |
|  0.4% | 5.44 MiB |      78 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                             |
|  0.3% | 3.78 MiB |      54 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                          |
|  0.2% |    3 MiB |      25 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                  |
|  0.2% | 2.97 MiB |      37 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseCFG::build_dominator_tree` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen`                                                                                                                                  |
