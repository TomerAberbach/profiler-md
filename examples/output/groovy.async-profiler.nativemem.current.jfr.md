# Allocated native memory profile

Allocated 1.32 GiB over 8,406 samples (164 KiB per sample).

| Category |      % |     Size | Samples |
| -------- | -----: | -------: | ------: |
| Native   | 100.0% | 1.32 GiB |   8,406 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
└── … 1.31 GiB (99.4%) Compile::Compile at libjvm.dylib
    ├── 735 MiB (54.6%) Compile::Optimize
    │   ├── … 351 MiB (26.1%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
    │   │   ├── … 305 MiB (22.7%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 11.9 MiB (0.9%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 11.2 MiB (0.8%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 9.3 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── 4.92 MiB (0.4%) IdealLoopTree::iteration_split
    │   │   └── 2.66 MiB (0.2%) PhaseIdealLoop::split_if_with_blocks
    │   ├── 347 MiB (25.8%) PhaseIdealLoop::optimize
    │   │   └── 344 MiB (25.6%) PhaseIdealLoop::PhaseIdealLoop
    │   │       └── 344 MiB (25.6%) PhaseIdealLoop::build_and_optimize
    │   │           ├── … 301 MiB (22.3%) malloc_hook at libasyncProfiler.dylib
    │   │           ├── … 10 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
    │   │           ├── … 8.38 MiB (0.6%) malloc_hook at libasyncProfiler.dylib
    │   │           ├── 5.87 MiB (0.4%) Arena::grow
    │   │           ├── … 5.75 MiB (0.4%) PhaseIdealLoop::loop_predication_impl_helper at libjvm.dylib
    │   │           ├── 3.38 MiB (0.3%) PhaseIdealLoop::split_if_with_blocks
    │   │           └── 3.22 MiB (0.2%) IdealLoopTree::iteration_split
    │   ├── … 7.28 MiB (0.5%) malloc_hook at libasyncProfiler.dylib
    │   ├── 6.49 MiB (0.5%) ConnectionGraph::do_analysis
    │   ├── 5.28 MiB (0.4%) PhaseCCP::do_transform
    │   ├── 4.77 MiB (0.4%) PhaseRenumberLive::PhaseRenumberLive
    │   └── 4.72 MiB (0.4%) PhaseMacroExpand::expand_macro_nodes
    ├── 579 MiB (43.0%) Compile::Code_Gen
    │   ├── 482 MiB (35.8%) PhaseChaitin::Register_Allocate
    │   │   ├── … 375 MiB (27.8%, self 100.0% globally) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 98.7 MiB (7.3%) malloc_hook at libasyncProfiler.dylib
    │   │   └── 4.81 MiB (0.4%) PhaseChaitin::Split
    │   ├── 85.8 MiB (6.4%) Matcher::match
    │   │   ├── 53.3 MiB (4.0%) Matcher::xform
    │   │   │   ├── … 37.6 MiB (2.8%) malloc_hook at libasyncProfiler.dylib
    │   │   │   └── … 9.25 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 25 MiB (1.9%) malloc_hook at libasyncProfiler.dylib
    │   │   └── 5.88 MiB (0.4%) Node_Array::grow
    │   └── 5.1 MiB (0.4%) PhaseCFG::do_global_code_motion
    ├── … 12.9 MiB (1.0%) Parse::do_one_block at libjvm.dylib
    │   ├── 3.81 MiB (0.3%) Parse::do_field_access
    │   └── 3.16 MiB (0.2%) Parse::do_call
    └── … 7.88 MiB (0.6%) malloc_hook at libasyncProfiler.dylib
```

## Hottest functions

### Self size

Functions with the most native bytes allocated within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self size.

##### Native

|      % |     Size | Samples | Function      | Location                 |
| -----: | -------: | ------: | ------------- | ------------------------ |
| 100.0% | 1.32 GiB |   8,404 | `malloc_hook` | `libasyncProfiler.dylib` |
|  <0.1% |   16 KiB |       2 | `calloc_hook` | `libasyncProfiler.dylib` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location          |
| ----: | -------: | ------: | ----------------------------------------- | ----------------- |
| 99.8% | 1.31 GiB |   8,330 | `os::malloc`                              | `libjvm.dylib`    |
|  0.2% | 2.76 MiB |      40 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |
| <0.1% |  320 KiB |      10 | `updatewindow`                            | `libzip.dylib`    |
| <0.1% | 24.6 KiB |       5 | `CCalloc`                                 | `libverify.dylib` |
| <0.1% |   21 KiB |       3 | `inflateInit2_`                           | `libzip.dylib`    |

##### `calloc_hook` (`libasyncProfiler.dylib`)

|      % |   Size | Samples | Caller                      | Location          |
| -----: | -----: | ------: | --------------------------- | ----------------- |
| 100.0% | 16 KiB |       2 | `make_class_info_from_name` | `libverify.dylib` |

### Total size

Functions with the most native bytes allocated within the function and its callees.

|      % |     Size | Samples | Function                                   | Location                  |
| -----: | -------: | ------: | ------------------------------------------ | ------------------------- |
| 100.0% | 1.32 GiB |   8,404 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
|  99.8% | 1.31 GiB |   8,330 | `os::malloc`                               | `libjvm.dylib`            |
|  99.7% | 1.31 GiB |   8,212 | `Chunk::operator new`                      | `libjvm.dylib`            |
|  99.7% | 1.31 GiB |   8,212 | `Arena::grow`                              | `libjvm.dylib`            |
|  99.6% | 1.31 GiB |   8,228 | `Thread::call_run`                         | `libjvm.dylib`            |
|  99.6% | 1.31 GiB |   8,228 | `thread_native_entry`                      | `libjvm.dylib`            |
|  99.6% | 1.31 GiB |   8,228 | `_pthread_start`                           | `libsystem_pthread.dylib` |
|  99.6% | 1.31 GiB |   8,228 | `thread_start`                             | `libsystem_pthread.dylib` |
|  99.6% | 1.31 GiB |   8,217 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
|  99.6% | 1.31 GiB |   8,217 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
|  99.6% | 1.31 GiB |   8,216 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  99.4% | 1.31 GiB |   8,126 | `Compile::Compile`                         | `libjvm.dylib`            |
|  99.4% | 1.31 GiB |   8,126 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  54.6% |  735 MiB |   4,426 | `Compile::Optimize`                        | `libjvm.dylib`            |
|  51.9% |  699 MiB |   3,929 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib`            |
|  51.6% |  695 MiB |   3,896 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib`            |
|  51.6% |  695 MiB |   3,896 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib`            |
|  45.0% |  606 MiB |   2,446 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`            |
|  43.0% |  579 MiB |   3,401 | `Compile::Code_Gen`                        | `libjvm.dylib`            |
|  35.8% |  482 MiB |   2,541 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib`            |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Native

|      % |     Size | Samples | Function                                                           | Location                  |
| -----: | -------: | ------: | ------------------------------------------------------------------ | ------------------------- |
| 100.0% | 1.32 GiB |   8,404 | `malloc_hook`                                                      | `libasyncProfiler.dylib`  |
|  99.8% | 1.31 GiB |   8,330 | `os::malloc`                                                       | `libjvm.dylib`            |
|  99.7% | 1.31 GiB |   8,212 | `Chunk::operator new`                                              | `libjvm.dylib`            |
|  99.7% | 1.31 GiB |   8,212 | `Arena::grow`                                                      | `libjvm.dylib`            |
|  99.6% | 1.31 GiB |   8,228 | `Thread::call_run`                                                 | `libjvm.dylib`            |
|  99.6% | 1.31 GiB |   8,228 | `thread_native_entry`                                              | `libjvm.dylib`            |
|  99.6% | 1.31 GiB |   8,228 | `_pthread_start`                                                   | `libsystem_pthread.dylib` |
|  99.6% | 1.31 GiB |   8,228 | `thread_start`                                                     | `libsystem_pthread.dylib` |
|  99.6% | 1.31 GiB |   8,217 | `JavaThread::thread_main_inner`                                    | `libjvm.dylib`            |
|   8.8% |  118 MiB |   1,597 | `Arena::Arealloc`                                                  | `libjvm.dylib`            |
|   1.5% | 19.6 MiB |     315 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib`            |
|   1.2% | 16.3 MiB |     218 | `Parse::do_all_blocks`                                             | `libjvm.dylib`            |
|   1.2% | 16.3 MiB |     218 | `Parse::Parse`                                                     | `libjvm.dylib`            |
|   1.2% | 16.3 MiB |     218 | `ParseGenerator::generate`                                         | `libjvm.dylib`            |
|   1.2% | 16.2 MiB |     217 | `Parse::do_one_block`                                              | `libjvm.dylib`            |
|   1.1% |   15 MiB |     203 | `Parse::do_call`                                                   | `libjvm.dylib`            |
|   0.9% | 11.8 MiB |     116 | `Type_Array::grow`                                                 | `libjvm.dylib`            |
|   0.9% | 11.7 MiB |     168 | `PredictedCallGenerator::generate`                                 | `libjvm.dylib`            |
|   0.9% | 11.5 MiB |     227 | `IdealLoopTree::loop_predication`                                  | `libjvm.dylib`            |
|   0.6% | 8.13 MiB |     110 | `IdealLoopTree::iteration_split`                                   | `libjvm.dylib`            |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location          |
| ----: | -------: | ------: | ----------------------------------------- | ----------------- |
| 99.8% | 1.31 GiB |   8,330 | `os::malloc`                              | `libjvm.dylib`    |
|  0.2% | 2.76 MiB |      40 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |
| <0.1% |  320 KiB |      10 | `updatewindow`                            | `libzip.dylib`    |
| <0.1% | 24.6 KiB |       5 | `CCalloc`                                 | `libverify.dylib` |
| <0.1% |   21 KiB |       3 | `inflateInit2_`                           | `libzip.dylib`    |

##### `os::malloc` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                   | Location       |
| ----: | -------: | ------: | ------------------------ | -------------- |
| 99.9% | 1.31 GiB |   8,212 | `Chunk::operator new`    | `libjvm.dylib` |
|  0.1% |  914 KiB |       2 | `os::malloc`             | `libjvm.dylib` |
|  0.1% |  914 KiB |       1 | `Unsafe_AllocateMemory0` | `libjvm.dylib` |
| <0.1% |  263 KiB |     109 | `AllocateHeap`           | `libjvm.dylib` |
| <0.1% |    480 B |       6 | `AnyObj::operator new`   | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |     Size | Samples | Caller        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 1.31 GiB |   8,212 | `Arena::grow` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                       | Location       |
| ----: | -------: | ------: | ---------------------------- | -------------- |
| 45.1% |  606 MiB |   2,446 | `PhaseIdealLoop::Dominators` | `libjvm.dylib` |
| 27.9% |  375 MiB |   1,658 | `PhaseIFG::init`             | `libjvm.dylib` |
|  8.8% |  118 MiB |   1,597 | `Arena::Arealloc`            | `libjvm.dylib` |
|  7.4% | 98.7 MiB |     751 | `PhaseLive::compute`         | `libjvm.dylib` |
|  2.8% | 37.6 MiB |     200 | `Matcher::xform`             | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 1.31 GiB |   8,228 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |     Size | Samples | Caller           | Location                  |
| -----: | -------: | ------: | ---------------- | ------------------------- |
| 100.0% | 1.31 GiB |   8,228 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |     Size | Samples | Caller         | Location                  |
| -----: | -------: | ------: | -------------- | ------------------------- |
| 100.0% | 1.31 GiB |   8,228 | `thread_start` | `libsystem_pthread.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                          | Location       |
| -----: | -------: | ------: | ------------------------------- | -------------- |
| 100.0% | 1.31 GiB |   8,217 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |     Size | Samples | Caller             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.31 GiB |   8,217 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                                | Location       |
| -----: | -------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 1.31 GiB |   8,216 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                       | Location       |
| -----: | -------: | ------: | ---------------------------- | -------------- |
| 100.0% | 1.31 GiB |   8,126 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                                     | Location       |
| -----: | -------: | ------: | ------------------------------------------ | -------------- |
| 100.0% | 1.31 GiB |   8,126 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 735 MiB |   4,426 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |    Size | Samples | Caller                    | Location       |
| ----: | ------: | ------: | ------------------------- | -------------- |
| 50.3% | 352 MiB |   1,799 | `Compile::optimize_loops` | `libjvm.dylib` |
| 49.7% | 347 MiB |   2,130 | `Compile::Optimize`       | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                           | Location       |
| -----: | ------: | ------: | -------------------------------- | -------------- |
| 100.0% | 695 MiB |   3,896 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                     | Location       |
| -----: | ------: | ------: | -------------------------- | -------------- |
| 100.0% | 695 MiB |   3,896 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 606 MiB |   2,446 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 579 MiB |   3,401 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % |    Size | Samples | Caller              | Location       |
| -----: | ------: | ------: | ------------------- | -------------- |
| 100.0% | 482 MiB |   2,541 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 56.7% | 67.2 MiB |     960 | `Node_Array::grow`               | `libjvm.dylib` |
| 12.5% | 14.8 MiB |     226 | `PhaseIdealLoop::set_idom`       | `libjvm.dylib` |
|  9.9% | 11.8 MiB |     116 | `Type_Array::grow`               | `libjvm.dylib` |
|  8.1% | 9.56 MiB |      87 | `Node::out_grow`                 | `libjvm.dylib` |
|  4.0% | 4.72 MiB |      49 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                                               | Location       |
| ----: | -------: | ------: | ---------------------------------------------------- | -------------- |
| 99.7% | 19.5 MiB |     314 | `PhaseIdealLoop::build_and_optimize`                 | `libjvm.dylib` |
|  0.3% |   64 KiB |       1 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % |     Size | Samples | Caller         | Location       |
| -----: | -------: | ------: | -------------- | -------------- |
| 100.0% | 16.3 MiB |     218 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                     | Location       |
| -----: | -------: | ------: | -------------------------- | -------------- |
| 100.0% | 16.3 MiB |     218 | `ParseGenerator::generate` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                                 | Location       |
| ----: | -------: | ------: | -------------------------------------- | -------------- |
| 97.1% | 15.8 MiB |     207 | `Compile::Compile`                     | `libjvm.dylib` |
| 76.0% | 12.4 MiB |     150 | `Parse::do_call`                       | `libjvm.dylib` |
| 71.2% | 11.6 MiB |     165 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
|  1.3% |  224 KiB |       4 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                 | Location       |
| -----: | -------: | ------: | ---------------------- | -------------- |
| 100.0% | 16.2 MiB |     217 | `Parse::do_all_blocks` | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|      % |   Size | Samples | Caller                | Location       |
| -----: | -----: | ------: | --------------------- | -------------- |
| 100.0% | 15 MiB |     203 | `Parse::do_one_block` | `libjvm.dylib` |

##### `Type_Array::grow` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                         | Location       |
| ----: | -------: | ------: | ------------------------------ | -------------- |
| 31.0% | 3.66 MiB |      39 | `PhaseValues::set_type_bottom` | `libjvm.dylib` |
| 15.4% | 1.81 MiB |      21 | `IdealKit::delay_transform`    | `libjvm.dylib` |
| 13.8% | 1.63 MiB |      16 | `GraphKit::clone_map`          | `libjvm.dylib` |
|  9.8% | 1.16 MiB |       6 | `Parse::return_current`        | `libjvm.dylib` |
|  7.7% |  928 KiB |       5 | `Parse::build_exits`           | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                                 | Location       |
| -----: | -------: | ------: | -------------------------------------- | -------------- |
| 100.0% | 11.7 MiB |     168 | `Parse::do_call`                       | `libjvm.dylib` |
|  36.0% | 4.22 MiB |      50 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
|   2.1% |  256 KiB |       7 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

##### `IdealLoopTree::loop_predication` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                               | Location       |
| -----: | -------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 11.5 MiB |     227 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
|  46.9% | 5.38 MiB |      99 | `IdealLoopTree::loop_predication`    | `libjvm.dylib` |

##### `IdealLoopTree::iteration_split` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                               | Location       |
| -----: | -------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 8.13 MiB |     110 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
|  95.8% | 7.79 MiB |     104 | `IdealLoopTree::iteration_split`     | `libjvm.dylib` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `os::malloc` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location                 |
| -----: | -------: | ------: | ------------- | ------------------------ |
| 100.0% | 1.31 GiB |   8,330 | `malloc_hook` | `libasyncProfiler.dylib` |
|   0.1% |  914 KiB |       2 | `os::malloc`  | `libjvm.dylib`           |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |     Size | Samples | Callee       | Location       |
| -----: | -------: | ------: | ------------ | -------------- |
| 100.0% | 1.31 GiB |   8,212 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 1.31 GiB |   8,212 | `Chunk::operator new` | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                          | Location       |
| -----: | -------: | ------: | ------------------------------- | -------------- |
| 100.0% | 1.31 GiB |   8,217 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  <0.1% | 40.6 KiB |       6 | `WorkerThread::run`             | `libjvm.dylib` |
|  <0.1% | 32.4 KiB |       5 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |     Size | Samples | Callee             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.31 GiB |   8,228 | `Thread::call_run` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |     Size | Samples | Callee                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 1.31 GiB |   8,228 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % |     Size | Samples | Callee           | Location                  |
| -----: | -------: | ------: | ---------------- | ------------------------- |
| 100.0% | 1.31 GiB |   8,228 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                     | Location       |
| -----: | -------: | ------: | ------------------------------------------ | -------------- |
| 100.0% | 1.31 GiB |   8,216 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  <0.1% | 8.02 KiB |       1 | `CompileQueue::get`                        | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                | Location       |
| -----: | -------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 1.31 GiB |   8,217 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                        | Location       |
| ----: | -------: | ------: | ----------------------------- | -------------- |
| 99.8% | 1.31 GiB |   8,126 | `C2Compiler::compile_method`  | `libjvm.dylib` |
|  0.2% | 2.99 MiB |      89 | `Compiler::compile_method`    | `libjvm.dylib` |
| <0.1% |     21 B |       1 | `CompilationLog::log_compile` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 54.9% |  735 MiB |   4,426 | `Compile::Optimize`                      | `libjvm.dylib` |
| 43.2% |  579 MiB |   3,401 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  1.2% | 15.8 MiB |     207 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.6% | 7.88 MiB |      68 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.1% | 1.13 MiB |      11 | `Compile::inline_string_calls`           | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |     Size | Samples | Callee             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.31 GiB |   8,126 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                         | Location       |
| ----: | -------: | ------: | ------------------------------ | -------------- |
| 47.9% |  352 MiB |   1,799 | `Compile::optimize_loops`      | `libjvm.dylib` |
| 47.2% |  347 MiB |   2,130 | `PhaseIdealLoop::optimize`     | `libjvm.dylib` |
|  1.2% | 8.91 MiB |      94 | `PhaseIterGVN::optimize`       | `libjvm.dylib` |
|  0.9% | 6.49 MiB |      97 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |
|  0.7% | 5.28 MiB |      93 | `PhaseCCP::do_transform`       | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 99.5% |  695 MiB |   3,896 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  0.5% | 3.81 MiB |      33 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                                             | Location       |
| ----: | -------: | ------: | ------------------------------------------------------------------ | -------------- |
| 87.1% |  606 MiB |   2,446 | `PhaseIdealLoop::Dominators`                                       | `libjvm.dylib` |
|  3.2% | 21.9 MiB |     327 | `Node_Array::grow`                                                 | `libjvm.dylib` |
|  2.8% | 19.5 MiB |     314 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib` |
|  2.2% | 15.2 MiB |     253 | `Arena::grow`                                                      | `libjvm.dylib` |
|  1.6% | 11.5 MiB |     227 | `IdealLoopTree::loop_predication`                                  | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 695 MiB |   3,896 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 606 MiB |   2,446 | `Arena::grow` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                            | Location       |
| ----: | -------: | ------: | --------------------------------- | -------------- |
| 83.3% |  482 MiB |   2,541 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 14.8% | 85.8 MiB |     673 | `Matcher::match`                  | `libjvm.dylib` |
|  0.9% |  5.1 MiB |      83 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  0.5% | 2.75 MiB |      42 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |
|  0.4% |  2.5 MiB |      48 | `PhaseOutput::Output`             | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 77.8% |  375 MiB |   1,658 | `PhaseIFG::init`                         | `libjvm.dylib` |
| 20.5% | 98.8 MiB |     753 | `PhaseLive::compute`                     | `libjvm.dylib` |
|  1.0% | 4.81 MiB |      67 | `PhaseChaitin::Split`                    | `libjvm.dylib` |
|  0.3% | 1.22 MiB |      23 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |
|  0.2% | 1.19 MiB |      19 | `PhaseRegAlloc::alloc_node_regs`         | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 118 MiB |   1,597 | `Arena::grow` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 19.6 MiB |     315 | `Arena::grow` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                          | Location       |
| ----: | -------: | ------: | ------------------------------- | -------------- |
| 99.6% | 16.2 MiB |     217 | `Parse::do_one_block`           | `libjvm.dylib` |
|  1.7% |  288 KiB |       5 | `Parse::merge_common`           | `libjvm.dylib` |
|  0.6% |   96 KiB |       3 | `Parse::ensure_phis_everywhere` | `libjvm.dylib` |
|  0.2% |   32 KiB |       1 | `GraphKit::uncommon_trap`       | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                    | Location       |
| -----: | -------: | ------: | ------------------------- | -------------- |
| 100.0% | 16.3 MiB |     218 | `Parse::do_all_blocks`    | `libjvm.dylib` |
|   9.2% |  1.5 MiB |      16 | `Parse::build_exits`      | `libjvm.dylib` |
|   2.9% |  480 KiB |       8 | `GraphKit::set_map_clone` | `libjvm.dylib` |
|   2.5% |  416 KiB |       3 | `Parse::do_exits`         | `libjvm.dylib` |
|   0.8% |  128 KiB |       1 | `Parse::merge_common`     | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % |     Size | Samples | Callee         | Location       |
| -----: | -------: | ------: | -------------- | -------------- |
| 100.0% | 16.3 MiB |     218 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                   | Location       |
| ----: | -------: | ------: | ------------------------ | -------------- |
| 92.5% |   15 MiB |     203 | `Parse::do_call`         | `libjvm.dylib` |
| 23.9% | 3.88 MiB |      58 | `Parse::do_field_access` | `libjvm.dylib` |
| 10.6% | 1.72 MiB |      24 | `Parse::do_if`           | `libjvm.dylib` |
|  9.4% | 1.53 MiB |      11 | `Parse::return_current`  | `libjvm.dylib` |
|  6.9% | 1.13 MiB |      14 | `Parse::do_one_bytecode` | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                                | Location       |
| ----: | -------: | ------: | ----------------------------------------------------- | -------------- |
| 82.5% | 12.4 MiB |     150 | `ParseGenerator::generate`                            | `libjvm.dylib` |
| 78.1% | 11.7 MiB |     168 | `PredictedCallGenerator::generate`                    | `libjvm.dylib` |
|  9.0% | 1.34 MiB |      15 | `LibraryIntrinsic::generate`                          | `libjvm.dylib` |
|  1.7% |  256 KiB |       2 | `GraphKit::record_profiled_return_for_speculation`    | `libjvm.dylib` |
|  1.0% |  160 KiB |       4 | `GraphKit::record_profiled_arguments_for_speculation` | `libjvm.dylib` |

##### `Type_Array::grow` (`libjvm.dylib`)

|      % |     Size | Samples | Callee            | Location       |
| -----: | -------: | ------: | ----------------- | -------------- |
| 100.0% | 11.8 MiB |     116 | `Arena::Arealloc` | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                             | Location       |
| ----: | -------: | ------: | ---------------------------------- | -------------- |
| 98.9% | 11.6 MiB |     165 | `ParseGenerator::generate`         | `libjvm.dylib` |
| 36.0% | 4.22 MiB |      50 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
|  3.2% |  384 KiB |       7 | `GraphKit::null_check_common`      | `libjvm.dylib` |
|  2.9% |  352 KiB |       3 | `GraphKit::subtype_check_receiver` | `libjvm.dylib` |
|  1.1% |  128 KiB |       3 | `DirectCallGenerator::generate`    | `libjvm.dylib` |

##### `IdealLoopTree::loop_predication` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                  | Location       |
| -----: | -------: | ------: | --------------------------------------- | -------------- |
| 100.0% | 11.5 MiB |     227 | `PhaseIdealLoop::loop_predication_impl` | `libjvm.dylib` |
|  46.9% | 5.38 MiB |      99 | `IdealLoopTree::loop_predication`       | `libjvm.dylib` |

##### `IdealLoopTree::iteration_split` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                | Location       |
| ----: | -------: | ------: | ------------------------------------- | -------------- |
| 95.8% | 7.79 MiB |     104 | `IdealLoopTree::iteration_split`      | `libjvm.dylib` |
| 90.4% | 7.35 MiB |      96 | `IdealLoopTree::iteration_split_impl` | `libjvm.dylib` |
|  9.6% |  800 KiB |      14 | `PhaseIdealLoop::do_unswitching`      | `libjvm.dylib` |

## Hottest call stacks

Call stacks with the most native bytes allocated in their leaf frame.

Common call stack: `Compile::Compile` (`libjvm.dylib`) ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                     |
| ----: | -------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 27.8% |  375 MiB |   1,658 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                  |
| 22.7% |  305 MiB |   1,129 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                       |
| 22.3% |  301 MiB |   1,317 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                   |
|  7.3% | 98.7 MiB |     751 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                              |
|  2.8% | 37.6 MiB |     200 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                   |
|  1.9% |   25 MiB |     201 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                             |
|  0.9% | 11.9 MiB |     159 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                             |
|  0.8% | 11.2 MiB |     159 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` |
|  0.7% |   10 MiB |     168 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                         |
|  0.7% |  9.3 MiB |     148 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                      |
|  0.7% | 9.25 MiB |      79 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node::out_grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                            |
|  0.6% | 8.38 MiB |     155 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                             |
|  0.6% | 7.88 MiB |      68 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless`                                                                                                        |
|  0.5% | 7.28 MiB |      72 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize`                                                                                                               |
|  0.4% | 5.88 MiB |      71 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                             |
|  0.4% | 5.87 MiB |     105 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                  |
|  0.4% | 5.28 MiB |      93 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize`                                                                                                             |
|  0.3% | 4.41 MiB |      59 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                          |
|  0.2% | 2.89 MiB |      35 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseCFG::build_dominator_tree` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen`                                                                                                                                  |
|  0.2% | 2.66 MiB |      18 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                  |
