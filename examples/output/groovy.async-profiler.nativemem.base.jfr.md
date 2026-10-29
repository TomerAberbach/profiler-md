# Allocated native memory profile

Allocated 1.43 GiB over 9,003 samples (167 KiB per sample).

| Category |      % |     Size | Samples |
| -------- | -----: | -------: | ------: |
| Native   | 100.0% | 1.43 GiB |   9,003 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
└── … 1.42 GiB (99.4%) Compile::Compile at libjvm.dylib
    ├── 795 MiB (54.2%) Compile::Optimize
    │   ├── … 379 MiB (25.8%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
    │   │   ├── … 332 MiB (22.6%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 12.8 MiB (0.9%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 11.7 MiB (0.8%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 9.29 MiB (0.6%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── 4.81 MiB (0.3%) IdealLoopTree::iteration_split
    │   │   └── 3.38 MiB (0.2%) IdealLoopTree::loop_predication
    │   ├── … 372 MiB (25.4%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
    │   │   ├── … 323 MiB (22.1%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 11.2 MiB (0.8%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 10.3 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── 5.81 MiB (0.4%) Arena::grow
    │   │   ├── … 5.31 MiB (0.4%) PhaseIdealLoop::loop_predication_impl_helper at libjvm.dylib
    │   │   ├── 4.06 MiB (0.3%) PhaseIdealLoop::split_if_with_blocks
    │   │   └── 3.29 MiB (0.2%) IdealLoopTree::counted_loop
    │   ├── … 9.53 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
    │   ├── 6.29 MiB (0.4%) ConnectionGraph::do_analysis
    │   ├── 6.01 MiB (0.4%) PhaseCCP::do_transform
    │   ├── 5.71 MiB (0.4%) PhaseRenumberLive::PhaseRenumberLive
    │   └── 4.01 MiB (0.3%) PhaseMacroExpand::expand_macro_nodes
    ├── 633 MiB (43.2%) Compile::Code_Gen
    │   ├── 528 MiB (36.0%) PhaseChaitin::Register_Allocate
    │   │   ├── … 408 MiB (27.8%, self 100.0% globally) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 110 MiB (7.5%) malloc_hook at libasyncProfiler.dylib
    │   │   └── 7.09 MiB (0.5%) PhaseChaitin::Split
    │   ├── 92.4 MiB (6.3%) Matcher::match
    │   │   ├── 58.1 MiB (4.0%) Matcher::xform
    │   │   │   ├── … 41.4 MiB (2.8%) malloc_hook at libasyncProfiler.dylib
    │   │   │   ├── … 9.25 MiB (0.6%) malloc_hook at libasyncProfiler.dylib
    │   │   │   └── 6.97 MiB (0.5%) Matcher::match_tree
    │   │   ├── … 26.4 MiB (1.8%) malloc_hook at libasyncProfiler.dylib
    │   │   └── 6.16 MiB (0.4%) Node_Array::grow
    │   └── 6 MiB (0.4%) PhaseCFG::do_global_code_motion
    ├── … 13.6 MiB (0.9%) Parse::do_one_block at libjvm.dylib
    │   ├── 3.25 MiB (0.2%) Parse::do_field_access
    │   ├── 2.97 MiB (0.2%) Parse::do_call
    │   └── 1.53 MiB (0.1%) Parse::do_one_bytecode
    └── … 8.38 MiB (0.6%) malloc_hook at libasyncProfiler.dylib
```

## Hottest functions

### Self size

Functions with the most native bytes allocated within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self size.

##### Native

|      % |     Size | Samples | Function      | Location                 |
| -----: | -------: | ------: | ------------- | ------------------------ |
| 100.0% | 1.43 GiB |   9,003 | `malloc_hook` | `libasyncProfiler.dylib` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location          |
| ----: | -------: | ------: | ----------------------------------------- | ----------------- |
| 99.8% | 1.43 GiB |   8,931 | `os::malloc`                              | `libjvm.dylib`    |
|  0.2% |  2.5 MiB |      40 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |
| <0.1% |  320 KiB |      10 | `updatewindow`                            | `libzip.dylib`    |
| <0.1% |  164 KiB |       7 | `CCalloc`                                 | `libverify.dylib` |
| <0.1% | 20.2 KiB |      14 | `Java_java_lang_ClassLoader_defineClass0` | `libjava.dylib`   |

### Total size

Functions with the most native bytes allocated within the function and its callees.

|      % |     Size | Samples | Function                                   | Location                  |
| -----: | -------: | ------: | ------------------------------------------ | ------------------------- |
| 100.0% | 1.43 GiB |   9,003 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
|  99.8% | 1.43 GiB |   8,931 | `os::malloc`                               | `libjvm.dylib`            |
|  99.7% | 1.43 GiB |   8,819 | `Chunk::operator new`                      | `libjvm.dylib`            |
|  99.7% | 1.43 GiB |   8,819 | `Arena::grow`                              | `libjvm.dylib`            |
|  99.7% | 1.43 GiB |   8,826 | `Thread::call_run`                         | `libjvm.dylib`            |
|  99.7% | 1.43 GiB |   8,826 | `thread_native_entry`                      | `libjvm.dylib`            |
|  99.7% | 1.43 GiB |   8,826 | `_pthread_start`                           | `libsystem_pthread.dylib` |
|  99.7% | 1.43 GiB |   8,826 | `thread_start`                             | `libsystem_pthread.dylib` |
|  99.7% | 1.43 GiB |   8,819 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
|  99.7% | 1.43 GiB |   8,819 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
|  99.7% | 1.43 GiB |   8,818 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  99.4% | 1.42 GiB |   8,722 | `Compile::Compile`                         | `libjvm.dylib`            |
|  99.4% | 1.42 GiB |   8,722 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  54.2% |  795 MiB |   4,726 | `Compile::Optimize`                        | `libjvm.dylib`            |
|  51.6% |  755 MiB |   4,198 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib`            |
|  51.2% |  751 MiB |   4,157 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib`            |
|  51.2% |  751 MiB |   4,157 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib`            |
|  44.7% |  655 MiB |   2,565 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`            |
|  43.2% |  633 MiB |   3,651 | `Compile::Code_Gen`                        | `libjvm.dylib`            |
|  36.0% |  528 MiB |   2,724 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib`            |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Native

|      % |     Size | Samples | Function                                                           | Location                  |
| -----: | -------: | ------: | ------------------------------------------------------------------ | ------------------------- |
| 100.0% | 1.43 GiB |   9,003 | `malloc_hook`                                                      | `libasyncProfiler.dylib`  |
|  99.8% | 1.43 GiB |   8,931 | `os::malloc`                                                       | `libjvm.dylib`            |
|  99.7% | 1.43 GiB |   8,819 | `Chunk::operator new`                                              | `libjvm.dylib`            |
|  99.7% | 1.43 GiB |   8,819 | `Arena::grow`                                                      | `libjvm.dylib`            |
|  99.7% | 1.43 GiB |   8,826 | `Thread::call_run`                                                 | `libjvm.dylib`            |
|  99.7% | 1.43 GiB |   8,826 | `thread_native_entry`                                              | `libjvm.dylib`            |
|  99.7% | 1.43 GiB |   8,826 | `_pthread_start`                                                   | `libsystem_pthread.dylib` |
|  99.7% | 1.43 GiB |   8,826 | `thread_start`                                                     | `libsystem_pthread.dylib` |
|  99.7% | 1.43 GiB |   8,819 | `JavaThread::thread_main_inner`                                    | `libjvm.dylib`            |
|   8.6% |  126 MiB |   1,726 | `Arena::Arealloc`                                                  | `libjvm.dylib`            |
|   1.6% |   24 MiB |     374 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib`            |
|   1.3% | 18.4 MiB |     247 | `Parse::do_all_blocks`                                             | `libjvm.dylib`            |
|   1.3% | 18.4 MiB |     247 | `Parse::Parse`                                                     | `libjvm.dylib`            |
|   1.3% | 18.4 MiB |     247 | `ParseGenerator::generate`                                         | `libjvm.dylib`            |
|   1.2% | 18.2 MiB |     245 | `Parse::do_one_block`                                              | `libjvm.dylib`            |
|   1.2% | 17.2 MiB |     225 | `Parse::do_call`                                                   | `libjvm.dylib`            |
|   1.0% | 14.5 MiB |     183 | `PredictedCallGenerator::generate`                                 | `libjvm.dylib`            |
|   0.8% | 12.3 MiB |     249 | `IdealLoopTree::loop_predication`                                  | `libjvm.dylib`            |
|   0.8% | 11.7 MiB |     120 | `Type_Array::grow`                                                 | `libjvm.dylib`            |
|   0.6% | 8.06 MiB |     117 | `IdealLoopTree::iteration_split`                                   | `libjvm.dylib`            |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location          |
| ----: | -------: | ------: | ----------------------------------------- | ----------------- |
| 99.8% | 1.43 GiB |   8,931 | `os::malloc`                              | `libjvm.dylib`    |
|  0.2% |  2.5 MiB |      40 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |
| <0.1% |  320 KiB |      10 | `updatewindow`                            | `libzip.dylib`    |
| <0.1% |  164 KiB |       7 | `CCalloc`                                 | `libverify.dylib` |
| <0.1% | 20.2 KiB |      14 | `Java_java_lang_ClassLoader_defineClass0` | `libjava.dylib`   |

##### `os::malloc` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                   | Location       |
| ----: | -------: | ------: | ------------------------ | -------------- |
| 99.9% | 1.43 GiB |   8,819 | `Chunk::operator new`    | `libjvm.dylib` |
|  0.1% |  914 KiB |       1 | `os::malloc`             | `libjvm.dylib` |
|  0.1% |  914 KiB |       1 | `Unsafe_AllocateMemory0` | `libjvm.dylib` |
| <0.1% |  214 KiB |     100 | `AllocateHeap`           | `libjvm.dylib` |
| <0.1% | 8.61 KiB |       8 | `AnyObj::operator new`   | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |     Size | Samples | Caller        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 1.43 GiB |   8,819 | `Arena::grow` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                       | Location       |
| ----: | -------: | ------: | ---------------------------- | -------------- |
| 44.8% |  655 MiB |   2,565 | `PhaseIdealLoop::Dominators` | `libjvm.dylib` |
| 27.9% |  408 MiB |   1,726 | `PhaseIFG::init`             | `libjvm.dylib` |
|  8.6% |  126 MiB |   1,726 | `Arena::Arealloc`            | `libjvm.dylib` |
|  7.5% |  110 MiB |     827 | `PhaseLive::compute`         | `libjvm.dylib` |
|  2.8% | 41.4 MiB |     216 | `Matcher::xform`             | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 1.43 GiB |   8,826 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |     Size | Samples | Caller           | Location                  |
| -----: | -------: | ------: | ---------------- | ------------------------- |
| 100.0% | 1.43 GiB |   8,826 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |     Size | Samples | Caller         | Location                  |
| -----: | -------: | ------: | -------------- | ------------------------- |
| 100.0% | 1.43 GiB |   8,826 | `thread_start` | `libsystem_pthread.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                          | Location       |
| -----: | -------: | ------: | ------------------------------- | -------------- |
| 100.0% | 1.43 GiB |   8,819 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |     Size | Samples | Caller             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.43 GiB |   8,819 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                                | Location       |
| -----: | -------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 1.43 GiB |   8,818 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                       | Location       |
| -----: | -------: | ------: | ---------------------------- | -------------- |
| 100.0% | 1.42 GiB |   8,722 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                                     | Location       |
| -----: | -------: | ------: | ------------------------------------------ | -------------- |
| 100.0% | 1.42 GiB |   8,722 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 795 MiB |   4,726 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |    Size | Samples | Caller                    | Location       |
| ----: | ------: | ------: | ------------------------- | -------------- |
| 50.3% | 380 MiB |   1,929 | `Compile::optimize_loops` | `libjvm.dylib` |
| 49.7% | 376 MiB |   2,269 | `Compile::Optimize`       | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                           | Location       |
| -----: | ------: | ------: | -------------------------------- | -------------- |
| 100.0% | 751 MiB |   4,157 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                     | Location       |
| -----: | ------: | ------: | -------------------------- | -------------- |
| 100.0% | 751 MiB |   4,157 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 655 MiB |   2,565 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 633 MiB |   3,651 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % |    Size | Samples | Caller              | Location       |
| -----: | ------: | ------: | ------------------- | -------------- |
| 100.0% | 528 MiB |   2,724 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 57.1% | 71.9 MiB |   1,042 | `Node_Array::grow`               | `libjvm.dylib` |
| 11.9% |   15 MiB |     239 | `PhaseIdealLoop::set_idom`       | `libjvm.dylib` |
|  9.3% | 11.7 MiB |     120 | `Type_Array::grow`               | `libjvm.dylib` |
|  7.5% | 9.47 MiB |      91 | `Node::out_grow`                 | `libjvm.dylib` |
|  4.3% | 5.44 MiB |      57 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|      % |   Size | Samples | Caller                               | Location       |
| -----: | -----: | ------: | ------------------------------------ | -------------- |
| 100.0% | 24 MiB |     374 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % |     Size | Samples | Caller         | Location       |
| -----: | -------: | ------: | -------------- | -------------- |
| 100.0% | 18.4 MiB |     247 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                     | Location       |
| -----: | -------: | ------: | -------------------------- | -------------- |
| 100.0% | 18.4 MiB |     247 | `ParseGenerator::generate` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                                 | Location       |
| ----: | -------: | ------: | -------------------------------------- | -------------- |
| 97.6% | 17.9 MiB |     244 | `Compile::Compile`                     | `libjvm.dylib` |
| 77.4% | 14.2 MiB |     177 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
| 74.8% | 13.8 MiB |     168 | `Parse::do_call`                       | `libjvm.dylib` |
|  0.3% |   64 KiB |       1 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                 | Location       |
| -----: | -------: | ------: | ---------------------- | -------------- |
| 100.0% | 18.2 MiB |     245 | `Parse::do_all_blocks` | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 17.2 MiB |     225 | `Parse::do_one_block` | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                                 | Location       |
| -----: | -------: | ------: | -------------------------------------- | -------------- |
| 100.0% | 14.5 MiB |     183 | `Parse::do_call`                       | `libjvm.dylib` |
|  36.9% | 5.34 MiB |      57 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
|   2.6% |  384 KiB |       2 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

##### `IdealLoopTree::loop_predication` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                               | Location       |
| -----: | -------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 12.3 MiB |     249 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
|  40.8% |    5 MiB |     102 | `IdealLoopTree::loop_predication`    | `libjvm.dylib` |

##### `Type_Array::grow` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                         | Location       |
| ----: | -------: | ------: | ------------------------------ | -------------- |
| 29.4% | 3.44 MiB |      37 | `PhaseValues::set_type_bottom` | `libjvm.dylib` |
| 20.9% | 2.44 MiB |      19 | `GraphKit::clone_map`          | `libjvm.dylib` |
| 13.1% | 1.53 MiB |      18 | `IdealKit::delay_transform`    | `libjvm.dylib` |
|  7.2% |  864 KiB |       8 | `Parse::build_exits`           | `libjvm.dylib` |
|  6.7% |  800 KiB |       8 | `Parse::return_current`        | `libjvm.dylib` |

##### `IdealLoopTree::iteration_split` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                               | Location       |
| -----: | -------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 8.06 MiB |     117 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
|  95.0% | 7.65 MiB |     110 | `IdealLoopTree::iteration_split`     | `libjvm.dylib` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `os::malloc` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location                 |
| -----: | -------: | ------: | ------------- | ------------------------ |
| 100.0% | 1.43 GiB |   8,931 | `malloc_hook` | `libasyncProfiler.dylib` |
|   0.1% |  914 KiB |       1 | `os::malloc`  | `libjvm.dylib`           |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |     Size | Samples | Callee       | Location       |
| -----: | -------: | ------: | ------------ | -------------- |
| 100.0% | 1.43 GiB |   8,819 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 1.43 GiB |   8,819 | `Chunk::operator new` | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                          | Location       |
| -----: | -------: | ------: | ------------------------------- | -------------- |
| 100.0% | 1.43 GiB |   8,819 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  <0.1% |   40 KiB |       5 | `VMThread::run`                 | `libjvm.dylib` |
|  <0.1% | 2.14 KiB |       2 | `WorkerThread::run`             | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |     Size | Samples | Callee             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.43 GiB |   8,826 | `Thread::call_run` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |     Size | Samples | Callee                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 1.43 GiB |   8,826 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % |     Size | Samples | Callee           | Location                  |
| -----: | -------: | ------: | ---------------- | ------------------------- |
| 100.0% | 1.43 GiB |   8,826 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                         | Location       |
| -----: | -------: | ------: | ---------------------------------------------- | -------------- |
| 100.0% | 1.43 GiB |   8,818 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  <0.1% | 8.06 KiB |       1 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                | Location       |
| -----: | -------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 1.43 GiB |   8,819 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                       | Location       |
| ----: | -------: | ------: | ---------------------------- | -------------- |
| 99.7% | 1.42 GiB |   8,722 | `C2Compiler::compile_method` | `libjvm.dylib` |
|  0.3% | 3.87 MiB |      95 | `Compiler::compile_method`   | `libjvm.dylib` |
| <0.1% |   32 KiB |       1 | `ciEnv::ciEnv`               | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 54.5% |  795 MiB |   4,726 | `Compile::Optimize`                      | `libjvm.dylib` |
| 43.5% |  633 MiB |   3,651 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  1.2% | 17.9 MiB |     244 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.6% | 8.38 MiB |      75 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.1% | 1.94 MiB |      15 | `Compile::inline_string_calls`           | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |     Size | Samples | Callee             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.42 GiB |   8,722 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                         | Location       |
| ----: | -------: | ------: | ------------------------------ | -------------- |
| 47.8% |  380 MiB |   1,929 | `Compile::optimize_loops`      | `libjvm.dylib` |
| 47.3% |  376 MiB |   2,269 | `PhaseIdealLoop::optimize`     | `libjvm.dylib` |
|  1.4% | 11.2 MiB |     115 | `PhaseIterGVN::optimize`       | `libjvm.dylib` |
|  0.8% | 6.29 MiB |      92 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |
|  0.8% | 6.01 MiB |     106 | `PhaseCCP::do_transform`       | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 99.4% |  751 MiB |   4,157 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  0.6% | 4.66 MiB |      41 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                                             | Location       |
| ----: | -------: | ------: | ------------------------------------------------------------------ | -------------- |
| 87.3% |  655 MiB |   2,565 | `PhaseIdealLoop::Dominators`                                       | `libjvm.dylib` |
|  3.2% |   24 MiB |     374 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib` |
|  2.9% |   22 MiB |     334 | `Node_Array::grow`                                                 | `libjvm.dylib` |
|  2.0% | 15.1 MiB |     264 | `Arena::grow`                                                      | `libjvm.dylib` |
|  1.6% | 12.3 MiB |     249 | `IdealLoopTree::loop_predication`                                  | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 751 MiB |   4,157 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 655 MiB |   2,565 | `Arena::grow` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                            | Location       |
| ----: | -------: | ------: | --------------------------------- | -------------- |
| 83.4% |  528 MiB |   2,724 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 14.6% | 92.4 MiB |     706 | `Matcher::match`                  | `libjvm.dylib` |
|  0.9% |    6 MiB |      96 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  0.5% | 3.15 MiB |      51 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |
|  0.5% | 3.13 MiB |      58 | `PhaseOutput::Output`             | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                           | Location       |
| ----: | -------: | ------: | ------------------------------------------------ | -------------- |
| 77.2% |  408 MiB |   1,726 | `PhaseIFG::init`                                 | `libjvm.dylib` |
| 20.8% |  110 MiB |     833 | `PhaseLive::compute`                             | `libjvm.dylib` |
|  1.3% | 7.09 MiB |     100 | `PhaseChaitin::Split`                            | `libjvm.dylib` |
|  0.3% | 1.73 MiB |      27 | `PhaseRegAlloc::alloc_node_regs`                 | `libjvm.dylib` |
|  0.2% |  927 KiB |      17 | `PhaseChaitin::stretch_base_pointer_live_ranges` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 126 MiB |   1,726 | `Arena::grow` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|      % |   Size | Samples | Callee        | Location       |
| -----: | -----: | ------: | ------------- | -------------- |
| 100.0% | 24 MiB |     374 | `Arena::grow` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                          | Location       |
| ----: | -------: | ------: | ------------------------------- | -------------- |
| 99.0% | 18.2 MiB |     245 | `Parse::do_one_block`           | `libjvm.dylib` |
|  1.4% |  256 KiB |       6 | `Parse::merge_common`           | `libjvm.dylib` |
|  1.4% |  256 KiB |       3 | `Parse::ensure_phis_everywhere` | `libjvm.dylib` |
|  0.3% |   64 KiB |       1 | `GraphKit::clone_map`           | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                    | Location       |
| -----: | -------: | ------: | ------------------------- | -------------- |
| 100.0% | 18.4 MiB |     247 | `Parse::do_all_blocks`    | `libjvm.dylib` |
|  12.8% | 2.34 MiB |      22 | `Parse::build_exits`      | `libjvm.dylib` |
|   3.6% |  672 KiB |       6 | `GraphKit::set_map_clone` | `libjvm.dylib` |
|   2.4% |  448 KiB |       5 | `Parse::do_exits`         | `libjvm.dylib` |
|   1.4% |  256 KiB |       1 | `Parse::merge_common`     | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % |     Size | Samples | Callee         | Location       |
| -----: | -------: | ------: | -------------- | -------------- |
| 100.0% | 18.4 MiB |     247 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                   | Location       |
| ----: | -------: | ------: | ------------------------ | -------------- |
| 94.3% | 17.2 MiB |     225 | `Parse::do_call`         | `libjvm.dylib` |
| 18.2% | 3.31 MiB |      58 | `Parse::do_field_access` | `libjvm.dylib` |
|  8.4% | 1.53 MiB |      18 | `Parse::do_one_bytecode` | `libjvm.dylib` |
|  6.2% | 1.13 MiB |      12 | `Parse::return_current`  | `libjvm.dylib` |
|  5.8% | 1.06 MiB |      10 | `Parse::do_exceptions`   | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                     | Location       |
| ----: | -------: | ------: | ------------------------------------------ | -------------- |
| 84.3% | 14.5 MiB |     183 | `PredictedCallGenerator::generate`         | `libjvm.dylib` |
| 80.1% | 13.8 MiB |     168 | `ParseGenerator::generate`                 | `libjvm.dylib` |
|  6.9% | 1.19 MiB |      17 | `LibraryIntrinsic::generate`               | `libjvm.dylib` |
|  2.0% |  352 KiB |       3 | `LateInlineVirtualCallGenerator::generate` | `libjvm.dylib` |
|  0.7% |  128 KiB |       4 | `Compile::call_generator`                  | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                             | Location       |
| ----: | -------: | ------: | ---------------------------------- | -------------- |
| 98.3% | 14.2 MiB |     177 | `ParseGenerator::generate`         | `libjvm.dylib` |
| 36.9% | 5.34 MiB |      57 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
|  5.6% |  832 KiB |       7 | `GraphKit::subtype_check_receiver` | `libjvm.dylib` |
|  1.5% |  224 KiB |       3 | `GraphKit::null_check_common`      | `libjvm.dylib` |
|  1.3% |  192 KiB |       3 | `GraphKit::type_check_receiver`    | `libjvm.dylib` |

##### `IdealLoopTree::loop_predication` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                  | Location       |
| -----: | -------: | ------: | --------------------------------------- | -------------- |
| 100.0% | 12.3 MiB |     249 | `PhaseIdealLoop::loop_predication_impl` | `libjvm.dylib` |
|  40.8% |    5 MiB |     102 | `IdealLoopTree::loop_predication`       | `libjvm.dylib` |

##### `Type_Array::grow` (`libjvm.dylib`)

|      % |     Size | Samples | Callee            | Location       |
| -----: | -------: | ------: | ----------------- | -------------- |
| 100.0% | 11.7 MiB |     120 | `Arena::Arealloc` | `libjvm.dylib` |

##### `IdealLoopTree::iteration_split` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                | Location       |
| ----: | -------: | ------: | ------------------------------------- | -------------- |
| 95.0% | 7.65 MiB |     110 | `IdealLoopTree::iteration_split`      | `libjvm.dylib` |
| 90.7% | 7.31 MiB |     104 | `IdealLoopTree::iteration_split_impl` | `libjvm.dylib` |
|  9.3% |  768 KiB |      13 | `PhaseIdealLoop::do_unswitching`      | `libjvm.dylib` |

## Hottest call stacks

Call stacks with the most native bytes allocated in their leaf frame.

Common call stack: `Compile::Compile` (`libjvm.dylib`) ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                     |
| ----: | -------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 27.8% |  408 MiB |   1,726 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                  |
| 22.6% |  332 MiB |   1,187 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                       |
| 22.1% |  323 MiB |   1,378 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                   |
|  7.5% |  110 MiB |     827 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                              |
|  2.8% | 41.4 MiB |     216 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                   |
|  1.8% | 26.4 MiB |     198 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                             |
|  0.9% | 12.8 MiB |     185 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` |
|  0.8% | 11.7 MiB |     165 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                             |
|  0.8% | 11.2 MiB |     189 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                             |
|  0.7% | 10.3 MiB |     169 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                         |
|  0.6% | 9.47 MiB |      93 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize`                                                                                                               |
|  0.6% | 9.29 MiB |     162 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                      |
|  0.6% | 9.25 MiB |      85 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node::out_grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                            |
|  0.6% | 8.38 MiB |      75 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless`                                                                                                        |
|  0.4% | 6.16 MiB |      75 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                             |
|  0.4% | 5.94 MiB |     104 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize`                                                                                                             |
|  0.4% | 5.81 MiB |     102 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                  |
|  0.4% | 5.47 MiB |      63 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                          |
|  0.2% | 3.38 MiB |      27 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                  |
|  0.2% | 3.14 MiB |      39 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseCFG::build_dominator_tree` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen`                                                                                                                                  |
