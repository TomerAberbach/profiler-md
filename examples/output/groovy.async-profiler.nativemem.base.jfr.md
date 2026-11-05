# Allocated native memory profile

Allocated 1.3 GiB over 8,454 samples (161 KiB per sample).

| Category |      % |    Size | Samples |
| -------- | -----: | ------: | ------: |
| Native   | 100.0% | 1.3 GiB |   8,454 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
└── … 1.29 GiB (99.4%) C2Compiler::compile_method at libjvm.dylib
    └── 1.29 GiB (99.4%) Compile::Compile
        ├── 714 MiB (53.6%) Compile::Optimize
        │   ├── 347 MiB (26.1%) PhaseIdealLoop::optimize
        │   │   └── 344 MiB (25.8%) PhaseIdealLoop::PhaseIdealLoop
        │   │       └── 344 MiB (25.8%) PhaseIdealLoop::build_and_optimize
        │   │           ├── … 301 MiB (22.6%) malloc_hook at libasyncProfiler.dylib
        │   │           ├── … 9.5 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
        │   │           ├── … 9.03 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
        │   │           ├── 5.82 MiB (0.4%) Arena::grow
        │   │           ├── … 5.31 MiB (0.4%) PhaseIdealLoop::loop_predication_impl_helper at libjvm.dylib
        │   │           ├── 3.84 MiB (0.3%) PhaseIdealLoop::split_if_with_blocks
        │   │           └── 2.97 MiB (0.2%) IdealLoopTree::iteration_split
        │   ├── … 334 MiB (25.1%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
        │   │   ├── … 296 MiB (22.2%) malloc_hook at libasyncProfiler.dylib
        │   │   ├── … 9.91 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
        │   │   ├── … 9.38 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
        │   │   ├── … 7.74 MiB (0.6%) malloc_hook at libasyncProfiler.dylib
        │   │   ├── 4.06 MiB (0.3%) IdealLoopTree::iteration_split
        │   │   └── 2.94 MiB (0.2%) IdealLoopTree::loop_predication
        │   ├── … 8.13 MiB (0.6%) malloc_hook at libasyncProfiler.dylib
        │   ├── 5.31 MiB (0.4%) ConnectionGraph::do_analysis
        │   ├── 4.72 MiB (0.4%) PhaseCCP::do_transform
        │   ├── 4.31 MiB (0.3%) PhaseRenumberLive::PhaseRenumberLive
        │   └── 3.68 MiB (0.3%) PhaseMacroExpand::expand_macro_nodes
        ├── 583 MiB (43.7%) Compile::Code_Gen
        │   ├── 487 MiB (36.6%) PhaseChaitin::Register_Allocate
        │   │   ├── … 383 MiB (28.7%, self 100.0% globally) malloc_hook at libasyncProfiler.dylib
        │   │   ├── … 96.6 MiB (7.2%) malloc_hook at libasyncProfiler.dylib
        │   │   └── 4.94 MiB (0.4%) PhaseChaitin::Split
        │   ├── 83.6 MiB (6.3%) Matcher::match
        │   │   ├── 53 MiB (4.0%) Matcher::xform
        │   │   │   ├── … 39.2 MiB (2.9%) malloc_hook at libasyncProfiler.dylib
        │   │   │   └── … 8.25 MiB (0.6%) malloc_hook at libasyncProfiler.dylib
        │   │   └── … 24.4 MiB (1.8%) malloc_hook at libasyncProfiler.dylib
        │   └── 5.7 MiB (0.4%) PhaseCFG::do_global_code_motion
        ├── … 14 MiB (1.1%) Parse::do_one_block at libjvm.dylib
        │   ├── 3.97 MiB (0.3%) Parse::do_call
        │   └── 3.63 MiB (0.3%) Parse::do_field_access
        └── … 7.03 MiB (0.5%) malloc_hook at libasyncProfiler.dylib
```

## Hottest functions

### Self size

Functions with the most native bytes allocated within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self size.

##### Native

|      % |    Size | Samples | Function       | Location                 |
| -----: | ------: | ------: | -------------- | ------------------------ |
| 100.0% | 1.3 GiB |   8,449 | `malloc_hook`  | `libasyncProfiler.dylib` |
|  <0.1% |  16 KiB |       2 | `calloc_hook`  | `libasyncProfiler.dylib` |
|  <0.1% |   704 B |       3 | `realloc_hook` | `libasyncProfiler.dylib` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location          |
| ----: | -------: | ------: | ----------------------------------------- | ----------------- |
| 99.8% |  1.3 GiB |   8,366 | `os::malloc`                              | `libjvm.dylib`    |
|  0.2% | 2.42 MiB |      38 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |
| <0.1% |  256 KiB |       8 | `updatewindow`                            | `libzip.dylib`    |
| <0.1% | 35.1 KiB |      25 | `Java_java_lang_ClassLoader_defineClass0` | `libjava.dylib`   |
| <0.1% | 29.2 KiB |       6 | `CCalloc`                                 | `libverify.dylib` |

##### `calloc_hook` (`libasyncProfiler.dylib`)

|      % |   Size | Samples | Caller                      | Location          |
| -----: | -----: | ------: | --------------------------- | ----------------- |
| 100.0% | 16 KiB |       2 | `make_class_info_from_name` | `libverify.dylib` |

##### `realloc_hook` (`libasyncProfiler.dylib`)

|      % |  Size | Samples | Caller        | Location       |
| -----: | ----: | ------: | ------------- | -------------- |
| 100.0% | 704 B |       3 | `os::realloc` | `libjvm.dylib` |

### Total size

Functions with the most native bytes allocated within the function and its callees.

|      % |     Size | Samples | Function                                   | Location                  |
| -----: | -------: | ------: | ------------------------------------------ | ------------------------- |
| 100.0% |  1.3 GiB |   8,449 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
|  99.8% |  1.3 GiB |   8,366 | `os::malloc`                               | `libjvm.dylib`            |
|  99.7% |  1.3 GiB |   8,246 | `Chunk::operator new`                      | `libjvm.dylib`            |
|  99.7% |  1.3 GiB |   8,246 | `Arena::grow`                              | `libjvm.dylib`            |
|  99.7% |  1.3 GiB |   8,268 | `Thread::call_run`                         | `libjvm.dylib`            |
|  99.7% |  1.3 GiB |   8,268 | `thread_native_entry`                      | `libjvm.dylib`            |
|  99.7% |  1.3 GiB |   8,268 | `_pthread_start`                           | `libsystem_pthread.dylib` |
|  99.7% |  1.3 GiB |   8,268 | `thread_start`                             | `libsystem_pthread.dylib` |
|  99.7% |  1.3 GiB |   8,257 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
|  99.7% |  1.3 GiB |   8,257 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
|  99.7% |  1.3 GiB |   8,256 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  99.4% | 1.29 GiB |   8,166 | `Compile::Compile`                         | `libjvm.dylib`            |
|  99.4% | 1.29 GiB |   8,166 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  53.6% |  714 MiB |   4,358 | `Compile::Optimize`                        | `libjvm.dylib`            |
|  51.3% |  683 MiB |   3,899 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib`            |
|  50.9% |  678 MiB |   3,855 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib`            |
|  50.9% |  678 MiB |   3,855 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib`            |
|  44.8% |  597 MiB |   2,438 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`            |
|  43.7% |  583 MiB |   3,454 | `Compile::Code_Gen`                        | `libjvm.dylib`            |
|  36.6% |  487 MiB |   2,581 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib`            |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Native

|      % |     Size | Samples | Function                                                           | Location                  |
| -----: | -------: | ------: | ------------------------------------------------------------------ | ------------------------- |
| 100.0% |  1.3 GiB |   8,449 | `malloc_hook`                                                      | `libasyncProfiler.dylib`  |
|  99.8% |  1.3 GiB |   8,366 | `os::malloc`                                                       | `libjvm.dylib`            |
|  99.7% |  1.3 GiB |   8,246 | `Chunk::operator new`                                              | `libjvm.dylib`            |
|  99.7% |  1.3 GiB |   8,246 | `Arena::grow`                                                      | `libjvm.dylib`            |
|  99.7% |  1.3 GiB |   8,268 | `Thread::call_run`                                                 | `libjvm.dylib`            |
|  99.7% |  1.3 GiB |   8,268 | `thread_native_entry`                                              | `libjvm.dylib`            |
|  99.7% |  1.3 GiB |   8,268 | `_pthread_start`                                                   | `libsystem_pthread.dylib` |
|  99.7% |  1.3 GiB |   8,268 | `thread_start`                                                     | `libsystem_pthread.dylib` |
|  99.7% |  1.3 GiB |   8,257 | `JavaThread::thread_main_inner`                                    | `libjvm.dylib`            |
|   8.1% |  107 MiB |   1,568 | `Arena::Arealloc`                                                  | `libjvm.dylib`            |
|   1.4% | 19.1 MiB |     328 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib`            |
|   1.3% | 17.6 MiB |     254 | `Parse::do_all_blocks`                                             | `libjvm.dylib`            |
|   1.3% | 17.6 MiB |     254 | `Parse::Parse`                                                     | `libjvm.dylib`            |
|   1.3% | 17.6 MiB |     254 | `ParseGenerator::generate`                                         | `libjvm.dylib`            |
|   1.3% | 17.5 MiB |     253 | `Parse::do_one_block`                                              | `libjvm.dylib`            |
|   1.2% | 16.2 MiB |     231 | `Parse::do_call`                                                   | `libjvm.dylib`            |
|   1.0% |   13 MiB |     187 | `PredictedCallGenerator::generate`                                 | `libjvm.dylib`            |
|   0.8% | 10.8 MiB |     210 | `IdealLoopTree::loop_predication`                                  | `libjvm.dylib`            |
|   0.6% | 8.28 MiB |      97 | `Type_Array::grow`                                                 | `libjvm.dylib`            |
|   0.5% | 7.03 MiB |     108 | `IdealLoopTree::iteration_split`                                   | `libjvm.dylib`            |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location          |
| ----: | -------: | ------: | ----------------------------------------- | ----------------- |
| 99.8% |  1.3 GiB |   8,366 | `os::malloc`                              | `libjvm.dylib`    |
|  0.2% | 2.42 MiB |      38 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |
| <0.1% |  256 KiB |       8 | `updatewindow`                            | `libzip.dylib`    |
| <0.1% | 35.1 KiB |      25 | `Java_java_lang_ClassLoader_defineClass0` | `libjava.dylib`   |
| <0.1% | 29.2 KiB |       6 | `CCalloc`                                 | `libverify.dylib` |

##### `os::malloc` (`libjvm.dylib`)

|     % |    Size | Samples | Caller                   | Location       |
| ----: | ------: | ------: | ------------------------ | -------------- |
| 99.9% | 1.3 GiB |   8,246 | `Chunk::operator new`    | `libjvm.dylib` |
|  0.1% | 914 KiB |       3 | `os::malloc`             | `libjvm.dylib` |
|  0.1% | 914 KiB |       1 | `Unsafe_AllocateMemory0` | `libjvm.dylib` |
| <0.1% | 316 KiB |     104 | `AllocateHeap`           | `libjvm.dylib` |
| <0.1% |   960 B |      12 | `AnyObj::operator new`   | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |    Size | Samples | Caller        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 1.3 GiB |   8,246 | `Arena::grow` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                       | Location       |
| ----: | -------: | ------: | ---------------------------- | -------------- |
| 44.9% |  597 MiB |   2,438 | `PhaseIdealLoop::Dominators` | `libjvm.dylib` |
| 28.8% |  383 MiB |   1,687 | `PhaseIFG::init`             | `libjvm.dylib` |
|  8.1% |  107 MiB |   1,568 | `Arena::Arealloc`            | `libjvm.dylib` |
|  7.3% | 96.6 MiB |     772 | `PhaseLive::compute`         | `libjvm.dylib` |
|  3.0% | 39.2 MiB |     215 | `Matcher::xform`             | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 1.3 GiB |   8,268 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |    Size | Samples | Caller           | Location                  |
| -----: | ------: | ------: | ---------------- | ------------------------- |
| 100.0% | 1.3 GiB |   8,268 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Caller         | Location                  |
| -----: | ------: | ------: | -------------- | ------------------------- |
| 100.0% | 1.3 GiB |   8,268 | `thread_start` | `libsystem_pthread.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                          | Location       |
| -----: | ------: | ------: | ------------------------------- | -------------- |
| 100.0% | 1.3 GiB |   8,257 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 1.3 GiB |   8,257 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                                | Location       |
| -----: | ------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 1.3 GiB |   8,256 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                       | Location       |
| -----: | -------: | ------: | ---------------------------- | -------------- |
| 100.0% | 1.29 GiB |   8,166 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                                     | Location       |
| -----: | -------: | ------: | ------------------------------------------ | -------------- |
| 100.0% | 1.29 GiB |   8,166 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 714 MiB |   4,358 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |    Size | Samples | Caller                    | Location       |
| ----: | ------: | ------: | ------------------------- | -------------- |
| 50.9% | 347 MiB |   2,132 | `Compile::Optimize`       | `libjvm.dylib` |
| 49.1% | 335 MiB |   1,767 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                           | Location       |
| -----: | ------: | ------: | -------------------------------- | -------------- |
| 100.0% | 678 MiB |   3,855 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                     | Location       |
| -----: | ------: | ------: | -------------------------- | -------------- |
| 100.0% | 678 MiB |   3,855 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 597 MiB |   2,438 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 583 MiB |   3,454 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % |    Size | Samples | Caller              | Location       |
| -----: | ------: | ------: | ------------------- | -------------- |
| 100.0% | 487 MiB |   2,581 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 57.1% | 61.2 MiB |     951 | `Node_Array::grow`               | `libjvm.dylib` |
| 12.2% | 13.1 MiB |     226 | `PhaseIdealLoop::set_idom`       | `libjvm.dylib` |
|  7.8% | 8.41 MiB |      79 | `Node::out_grow`                 | `libjvm.dylib` |
|  7.7% | 8.28 MiB |      97 | `Type_Array::grow`               | `libjvm.dylib` |
|  5.3% | 5.66 MiB |      58 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                                               | Location       |
| ----: | -------: | ------: | ---------------------------------------------------- | -------------- |
| 99.3% | 18.9 MiB |     326 | `PhaseIdealLoop::build_and_optimize`                 | `libjvm.dylib` |
|  0.7% |  128 KiB |       2 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % |     Size | Samples | Caller         | Location       |
| -----: | -------: | ------: | -------------- | -------------- |
| 100.0% | 17.6 MiB |     254 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                     | Location       |
| -----: | -------: | ------: | -------------------------- | -------------- |
| 100.0% | 17.6 MiB |     254 | `ParseGenerator::generate` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                                 | Location       |
| ----: | -------: | ------: | -------------------------------------- | -------------- |
| 98.4% | 17.3 MiB |     249 | `Compile::Compile`                     | `libjvm.dylib` |
| 71.5% | 12.6 MiB |     160 | `Parse::do_call`                       | `libjvm.dylib` |
| 70.6% | 12.4 MiB |     179 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
|  0.2% |   32 KiB |       1 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                 | Location       |
| -----: | -------: | ------: | ---------------------- | -------------- |
| 100.0% | 17.5 MiB |     253 | `Parse::do_all_blocks` | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 16.2 MiB |     231 | `Parse::do_one_block` | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                                 | Location       |
| ----: | -------: | ------: | -------------------------------------- | -------------- |
| 99.5% | 12.9 MiB |     185 | `Parse::do_call`                       | `libjvm.dylib` |
| 24.1% | 3.13 MiB |      40 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
|  1.9% |  256 KiB |       4 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

##### `IdealLoopTree::loop_predication` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                               | Location       |
| -----: | -------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 10.8 MiB |     210 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
|  49.3% | 5.35 MiB |      91 | `IdealLoopTree::loop_predication`    | `libjvm.dylib` |

##### `Type_Array::grow` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                         | Location       |
| ----: | -------: | ------: | ------------------------------ | -------------- |
| 21.9% | 1.81 MiB |      26 | `PhaseValues::set_type_bottom` | `libjvm.dylib` |
| 18.9% | 1.56 MiB |      21 | `GraphKit::clone_map`          | `libjvm.dylib` |
| 14.0% | 1.16 MiB |      13 | `IdealKit::delay_transform`    | `libjvm.dylib` |
| 10.6% |  896 KiB |      10 | `Parse::build_exits`           | `libjvm.dylib` |
|  7.9% |  672 KiB |       5 | `Parse::return_current`        | `libjvm.dylib` |

##### `IdealLoopTree::iteration_split` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                               | Location       |
| -----: | -------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 7.03 MiB |     108 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
|  90.2% | 6.34 MiB |      96 | `IdealLoopTree::iteration_split`     | `libjvm.dylib` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `os::malloc` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location                 |
| -----: | ------: | ------: | ------------- | ------------------------ |
| 100.0% | 1.3 GiB |   8,366 | `malloc_hook` | `libasyncProfiler.dylib` |
|   0.1% | 914 KiB |       3 | `os::malloc`  | `libjvm.dylib`           |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |    Size | Samples | Callee       | Location       |
| -----: | ------: | ------: | ------------ | -------------- |
| 100.0% | 1.3 GiB |   8,246 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 1.3 GiB |   8,246 | `Chunk::operator new` | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                          | Location       |
| -----: | -------: | ------: | ------------------------------- | -------------- |
| 100.0% |  1.3 GiB |   8,257 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  <0.1% |   40 KiB |       5 | `VMThread::run`                 | `libjvm.dylib` |
|  <0.1% | 35.6 KiB |       6 | `WorkerThread::run`             | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |    Size | Samples | Callee             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 1.3 GiB |   8,268 | `Thread::call_run` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Callee                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 1.3 GiB |   8,268 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Callee           | Location                  |
| -----: | ------: | ------: | ---------------- | ------------------------- |
| 100.0% | 1.3 GiB |   8,268 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                         | Location       |
| -----: | -------: | ------: | ---------------------------------------------- | -------------- |
| 100.0% |  1.3 GiB |   8,256 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  <0.1% | 1.77 KiB |       1 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                                | Location       |
| -----: | ------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 1.3 GiB |   8,257 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                        | Location       |
| ----: | -------: | ------: | ----------------------------- | -------------- |
| 99.8% | 1.29 GiB |   8,166 | `C2Compiler::compile_method`  | `libjvm.dylib` |
|  0.2% | 3.14 MiB |      87 | `Compiler::compile_method`    | `libjvm.dylib` |
| <0.1% |   64 KiB |       2 | `ciEnv::ciEnv`                | `libjvm.dylib` |
| <0.1% |      7 B |       1 | `CompilationLog::log_compile` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 53.9% |  714 MiB |   4,358 | `Compile::Optimize`                      | `libjvm.dylib` |
| 44.0% |  583 MiB |   3,454 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  1.3% | 17.3 MiB |     249 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.5% | 7.06 MiB |      70 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.2% | 2.31 MiB |      20 | `Compile::inline_string_calls`           | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |     Size | Samples | Callee             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.29 GiB |   8,166 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                         | Location       |
| ----: | -------: | ------: | ------------------------------ | -------------- |
| 48.6% |  347 MiB |   2,132 | `PhaseIdealLoop::optimize`     | `libjvm.dylib` |
| 47.0% |  335 MiB |   1,767 | `Compile::optimize_loops`      | `libjvm.dylib` |
|  1.3% | 9.03 MiB |      99 | `PhaseIterGVN::optimize`       | `libjvm.dylib` |
|  0.7% | 5.31 MiB |      89 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |
|  0.7% | 4.72 MiB |      81 | `PhaseCCP::do_transform`       | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 99.4% |  678 MiB |   3,855 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  0.6% | 4.33 MiB |      44 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                                             | Location       |
| ----: | -------: | ------: | ------------------------------------------------------------------ | -------------- |
| 88.0% |  597 MiB |   2,438 | `PhaseIdealLoop::Dominators`                                       | `libjvm.dylib` |
|  2.8% | 18.9 MiB |     326 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib` |
|  2.8% | 18.9 MiB |     307 | `Node_Array::grow`                                                 | `libjvm.dylib` |
|  2.0% | 13.6 MiB |     238 | `Arena::grow`                                                      | `libjvm.dylib` |
|  1.6% | 10.8 MiB |     210 | `IdealLoopTree::loop_predication`                                  | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 678 MiB |   3,855 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 597 MiB |   2,438 | `Arena::grow` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                            | Location       |
| ----: | -------: | ------: | --------------------------------- | -------------- |
| 83.7% |  487 MiB |   2,581 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 14.4% | 83.6 MiB |     669 | `Matcher::match`                  | `libjvm.dylib` |
|  1.0% |  5.7 MiB |      92 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  0.5% | 2.85 MiB |      53 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  0.5% | 2.71 MiB |      47 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 78.6% |  383 MiB |   1,687 | `PhaseIFG::init`                         | `libjvm.dylib` |
| 19.8% | 96.7 MiB |     778 | `PhaseLive::compute`                     | `libjvm.dylib` |
|  1.0% | 4.94 MiB |      61 | `PhaseChaitin::Split`                    | `libjvm.dylib` |
|  0.2% | 1.08 MiB |      19 | `PhaseRegAlloc::alloc_node_regs`         | `libjvm.dylib` |
|  0.2% | 1.03 MiB |      20 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 107 MiB |   1,568 | `Arena::grow` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 19.1 MiB |     328 | `Arena::grow` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                          | Location       |
| ----: | -------: | ------: | ------------------------------- | -------------- |
| 99.6% | 17.5 MiB |     253 | `Parse::do_one_block`           | `libjvm.dylib` |
|  3.2% |  576 KiB |      10 | `Parse::merge_common`           | `libjvm.dylib` |
|  0.9% |  160 KiB |       3 | `GraphKit::clone_map`           | `libjvm.dylib` |
|  0.4% |   64 KiB |       1 | `Parse::ensure_phis_everywhere` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                    | Location       |
| -----: | -------: | ------: | ------------------------- | -------------- |
| 100.0% | 17.6 MiB |     254 | `Parse::do_all_blocks`    | `libjvm.dylib` |
|  10.9% | 1.91 MiB |      24 | `Parse::build_exits`      | `libjvm.dylib` |
|   3.0% |  544 KiB |       8 | `GraphKit::set_map_clone` | `libjvm.dylib` |
|   0.7% |  128 KiB |       4 | `Parse::create_entry_map` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % |     Size | Samples | Callee         | Location       |
| -----: | -------: | ------: | -------------- | -------------- |
| 100.0% | 17.6 MiB |     254 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                   | Location       |
| ----: | -------: | ------: | ------------------------ | -------------- |
| 92.3% | 16.2 MiB |     231 | `Parse::do_call`         | `libjvm.dylib` |
| 20.9% | 3.66 MiB |      55 | `Parse::do_field_access` | `libjvm.dylib` |
|  9.1% | 1.59 MiB |      19 | `Parse::do_if`           | `libjvm.dylib` |
|  6.4% | 1.13 MiB |      12 | `Parse::return_current`  | `libjvm.dylib` |
|  6.1% | 1.06 MiB |      13 | `Parse::do_one_bytecode` | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                     | Location       |
| ----: | -------: | ------: | ------------------------------------------ | -------------- |
| 79.9% | 12.9 MiB |     185 | `PredictedCallGenerator::generate`         | `libjvm.dylib` |
| 77.8% | 12.6 MiB |     160 | `ParseGenerator::generate`                 | `libjvm.dylib` |
|  7.2% | 1.16 MiB |      14 | `LibraryIntrinsic::generate`               | `libjvm.dylib` |
|  1.5% |  256 KiB |       3 | `LateInlineVirtualCallGenerator::generate` | `libjvm.dylib` |
|  0.8% |  128 KiB |       3 | `DirectCallGenerator::generate`            | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                             | Location       |
| ----: | -------: | ------: | ---------------------------------- | -------------- |
| 95.7% | 12.4 MiB |     179 | `ParseGenerator::generate`         | `libjvm.dylib` |
| 24.1% | 3.13 MiB |      40 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
|  7.0% |  928 KiB |       8 | `DirectCallGenerator::generate`    | `libjvm.dylib` |
|  2.7% |  352 KiB |       6 | `GraphKit::subtype_check_receiver` | `libjvm.dylib` |
|  2.4% |  320 KiB |       4 | `GraphKit::type_check_receiver`    | `libjvm.dylib` |

##### `IdealLoopTree::loop_predication` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                  | Location       |
| -----: | -------: | ------: | --------------------------------------- | -------------- |
| 100.0% | 10.8 MiB |     210 | `PhaseIdealLoop::loop_predication_impl` | `libjvm.dylib` |
|  49.3% | 5.35 MiB |      91 | `IdealLoopTree::loop_predication`       | `libjvm.dylib` |

##### `Type_Array::grow` (`libjvm.dylib`)

|      % |     Size | Samples | Callee            | Location       |
| -----: | -------: | ------: | ----------------- | -------------- |
| 100.0% | 8.28 MiB |      97 | `Arena::Arealloc` | `libjvm.dylib` |

##### `IdealLoopTree::iteration_split` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                | Location       |
| ----: | -------: | ------: | ------------------------------------- | -------------- |
| 90.2% | 6.34 MiB |      96 | `IdealLoopTree::iteration_split`      | `libjvm.dylib` |
| 86.2% | 6.06 MiB |      91 | `IdealLoopTree::iteration_split_impl` | `libjvm.dylib` |
| 13.8% |  992 KiB |      17 | `PhaseIdealLoop::do_unswitching`      | `libjvm.dylib` |

## Hottest call stacks

Call stacks with the most native bytes allocated in their leaf frame.

Common call stack: `Compile::Compile` (`libjvm.dylib`) ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                     |
| ----: | -------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 28.7% |  383 MiB |   1,687 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                  |
| 22.6% |  301 MiB |   1,304 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                   |
| 22.2% |  296 MiB |   1,134 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                       |
|  7.2% | 96.6 MiB |     772 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                              |
|  2.9% | 39.2 MiB |     215 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                   |
|  1.8% | 24.4 MiB |     194 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                             |
|  0.7% | 9.91 MiB |     160 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` |
|  0.7% |  9.5 MiB |     175 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                         |
|  0.7% | 9.38 MiB |     132 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                             |
|  0.7% | 9.03 MiB |     166 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                             |
|  0.6% | 8.25 MiB |      74 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node::out_grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                            |
|  0.6% | 8.06 MiB |      84 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize`                                                                                                               |
|  0.6% | 7.74 MiB |     139 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                      |
|  0.5% | 7.03 MiB |      69 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless`                                                                                                        |
|  0.4% | 5.82 MiB |      99 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                  |
|  0.4% | 4.84 MiB |      67 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                             |
|  0.4% | 4.72 MiB |      81 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize`                                                                                                             |
|  0.3% | 3.66 MiB |      62 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                          |
|  0.2% | 3.14 MiB |      39 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseCFG::build_dominator_tree` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen`                                                                                                                                  |
|  0.2% | 2.78 MiB |      25 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                  |
