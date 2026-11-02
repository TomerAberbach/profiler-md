# Allocated native memory profile

Allocated 1.33 GiB over 8,665 samples (161 KiB per sample).

| Category |      % |     Size | Samples |
| -------- | -----: | -------: | ------: |
| Native   | 100.0% | 1.33 GiB |   8,665 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
└── … 1.32 GiB (99.4%) Compile::Compile at libjvm.dylib
    ├── 747 MiB (54.8%) Compile::Optimize
    │   ├── 362 MiB (26.5%) PhaseIdealLoop::optimize
    │   │   └── 359 MiB (26.3%) PhaseIdealLoop::PhaseIdealLoop
    │   │       └── 359 MiB (26.3%) PhaseIdealLoop::build_and_optimize
    │   │           ├── … 314 MiB (23.0%) malloc_hook at libasyncProfiler.dylib
    │   │           ├── … 10.1 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
    │   │           ├── … 8.72 MiB (0.6%) malloc_hook at libasyncProfiler.dylib
    │   │           ├── 6.12 MiB (0.4%) Arena::grow
    │   │           ├── … 4.97 MiB (0.4%) PhaseIdealLoop::loop_predication_impl_helper at libjvm.dylib
    │   │           ├── 4.54 MiB (0.3%) PhaseIdealLoop::split_if_with_blocks
    │   │           └── 3.25 MiB (0.2%) IdealLoopTree::iteration_split
    │   ├── … 350 MiB (25.7%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
    │   │   ├── … 309 MiB (22.7%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 11.7 MiB (0.9%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 11.3 MiB (0.8%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 7.79 MiB (0.6%) malloc_hook at libasyncProfiler.dylib
    │   │   └── 3.73 MiB (0.3%) IdealLoopTree::iteration_split
    │   ├── … 8.19 MiB (0.6%) malloc_hook at libasyncProfiler.dylib
    │   ├── 6.48 MiB (0.5%) ConnectionGraph::do_analysis
    │   ├── 5.25 MiB (0.4%) PhaseRenumberLive::PhaseRenumberLive
    │   ├── 5.16 MiB (0.4%) PhaseCCP::do_transform
    │   └── 3.79 MiB (0.3%) PhaseMacroExpand::expand_macro_nodes
    ├── 577 MiB (42.3%) Compile::Code_Gen
    │   ├── 480 MiB (35.2%) PhaseChaitin::Register_Allocate
    │   │   ├── … 376 MiB (27.6%, self 100.0% globally) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 95.6 MiB (7.0%) malloc_hook at libasyncProfiler.dylib
    │   │   └── 5.34 MiB (0.4%) PhaseChaitin::Split
    │   ├── 85.5 MiB (6.3%) Matcher::match
    │   │   ├── 53.2 MiB (3.9%) Matcher::xform
    │   │   │   ├── … 38.8 MiB (2.8%) malloc_hook at libasyncProfiler.dylib
    │   │   │   └── … 8.38 MiB (0.6%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 25.3 MiB (1.9%) malloc_hook at libasyncProfiler.dylib
    │   │   └── 5.22 MiB (0.4%) Node_Array::grow
    │   └── 4.79 MiB (0.4%) PhaseCFG::do_global_code_motion
    ├── … 15.3 MiB (1.1%) Parse::do_one_block at libjvm.dylib
    │   ├── 4.06 MiB (0.3%) Parse::do_field_access
    │   ├── 2.97 MiB (0.2%) Parse::do_call
    │   └── 2.09 MiB (0.2%) Parse::do_one_bytecode
    └── … 8.56 MiB (0.6%) malloc_hook at libasyncProfiler.dylib
```

## Hottest functions

### Self size

Functions with the most native bytes allocated within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self size.

##### Native

|      % |     Size | Samples | Function       | Location                 |
| -----: | -------: | ------: | -------------- | ------------------------ |
| 100.0% | 1.33 GiB |   8,663 | `malloc_hook`  | `libasyncProfiler.dylib` |
|  <0.1% |    8 KiB |       1 | `calloc_hook`  | `libasyncProfiler.dylib` |
|  <0.1% |    256 B |       1 | `realloc_hook` | `libasyncProfiler.dylib` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location          |
| ----: | -------: | ------: | ----------------------------------------- | ----------------- |
| 99.8% | 1.33 GiB |   8,587 | `os::malloc`                              | `libjvm.dylib`    |
|  0.2% | 2.62 MiB |      38 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |
| <0.1% |  160 KiB |       5 | `updatewindow`                            | `libzip.dylib`    |
| <0.1% |  110 KiB |       6 | `CCalloc`                                 | `libverify.dylib` |
| <0.1% | 29.7 KiB |      21 | `Java_java_lang_ClassLoader_defineClass0` | `libjava.dylib`   |

##### `calloc_hook` (`libasyncProfiler.dylib`)

|      % |  Size | Samples | Caller                      | Location          |
| -----: | ----: | ------: | --------------------------- | ----------------- |
| 100.0% | 8 KiB |       1 | `make_class_info_from_name` | `libverify.dylib` |

##### `realloc_hook` (`libasyncProfiler.dylib`)

|      % |  Size | Samples | Caller        | Location       |
| -----: | ----: | ------: | ------------- | -------------- |
| 100.0% | 256 B |       1 | `os::realloc` | `libjvm.dylib` |

### Total size

Functions with the most native bytes allocated within the function and its callees.

|      % |     Size | Samples | Function                                   | Location                  |
| -----: | -------: | ------: | ------------------------------------------ | ------------------------- |
| 100.0% | 1.33 GiB |   8,663 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
|  99.8% | 1.33 GiB |   8,587 | `os::malloc`                               | `libjvm.dylib`            |
|  99.7% | 1.33 GiB |   8,465 | `Chunk::operator new`                      | `libjvm.dylib`            |
|  99.7% | 1.33 GiB |   8,464 | `Arena::grow`                              | `libjvm.dylib`            |
|  99.7% | 1.33 GiB |   8,486 | `Thread::call_run`                         | `libjvm.dylib`            |
|  99.7% | 1.33 GiB |   8,486 | `thread_native_entry`                      | `libjvm.dylib`            |
|  99.7% | 1.33 GiB |   8,486 | `_pthread_start`                           | `libsystem_pthread.dylib` |
|  99.7% | 1.33 GiB |   8,486 | `thread_start`                             | `libsystem_pthread.dylib` |
|  99.7% | 1.33 GiB |   8,477 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
|  99.7% | 1.33 GiB |   8,477 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
|  99.7% | 1.33 GiB |   8,476 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  99.4% | 1.32 GiB |   8,356 | `Compile::Compile`                         | `libjvm.dylib`            |
|  99.4% | 1.32 GiB |   8,356 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  54.8% |  747 MiB |   4,528 | `Compile::Optimize`                        | `libjvm.dylib`            |
|  52.3% |  713 MiB |   4,041 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib`            |
|  52.0% |  709 MiB |   4,001 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib`            |
|  52.0% |  709 MiB |   4,000 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib`            |
|  45.7% |  623 MiB |   2,538 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`            |
|  42.3% |  577 MiB |   3,443 | `Compile::Code_Gen`                        | `libjvm.dylib`            |
|  35.2% |  480 MiB |   2,568 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib`            |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Native

|      % |     Size | Samples | Function                                                           | Location                  |
| -----: | -------: | ------: | ------------------------------------------------------------------ | ------------------------- |
| 100.0% | 1.33 GiB |   8,663 | `malloc_hook`                                                      | `libasyncProfiler.dylib`  |
|  99.8% | 1.33 GiB |   8,587 | `os::malloc`                                                       | `libjvm.dylib`            |
|  99.7% | 1.33 GiB |   8,465 | `Chunk::operator new`                                              | `libjvm.dylib`            |
|  99.7% | 1.33 GiB |   8,464 | `Arena::grow`                                                      | `libjvm.dylib`            |
|  99.7% | 1.33 GiB |   8,486 | `Thread::call_run`                                                 | `libjvm.dylib`            |
|  99.7% | 1.33 GiB |   8,486 | `thread_native_entry`                                              | `libjvm.dylib`            |
|  99.7% | 1.33 GiB |   8,486 | `_pthread_start`                                                   | `libsystem_pthread.dylib` |
|  99.7% | 1.33 GiB |   8,486 | `thread_start`                                                     | `libsystem_pthread.dylib` |
|  99.7% | 1.33 GiB |   8,477 | `JavaThread::thread_main_inner`                                    | `libjvm.dylib`            |
|   8.6% |  117 MiB |   1,701 | `Arena::Arealloc`                                                  | `libjvm.dylib`            |
|   1.5% | 20.1 MiB |     302 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib`            |
|   1.4% | 19.7 MiB |     278 | `Parse::do_one_block`                                              | `libjvm.dylib`            |
|   1.4% | 19.7 MiB |     278 | `Parse::do_all_blocks`                                             | `libjvm.dylib`            |
|   1.4% | 19.7 MiB |     278 | `Parse::Parse`                                                     | `libjvm.dylib`            |
|   1.4% | 19.7 MiB |     278 | `ParseGenerator::generate`                                         | `libjvm.dylib`            |
|   1.3% | 18.4 MiB |     256 | `Parse::do_call`                                                   | `libjvm.dylib`            |
|   1.1% | 14.6 MiB |     205 | `PredictedCallGenerator::generate`                                 | `libjvm.dylib`            |
|   0.9% | 12.9 MiB |     132 | `Type_Array::grow`                                                 | `libjvm.dylib`            |
|   0.7% | 9.97 MiB |     208 | `IdealLoopTree::loop_predication`                                  | `libjvm.dylib`            |
|   0.5% | 6.98 MiB |     111 | `IdealLoopTree::iteration_split`                                   | `libjvm.dylib`            |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location          |
| ----: | -------: | ------: | ----------------------------------------- | ----------------- |
| 99.8% | 1.33 GiB |   8,587 | `os::malloc`                              | `libjvm.dylib`    |
|  0.2% | 2.62 MiB |      38 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |
| <0.1% |  160 KiB |       5 | `updatewindow`                            | `libzip.dylib`    |
| <0.1% |  110 KiB |       6 | `CCalloc`                                 | `libverify.dylib` |
| <0.1% | 29.7 KiB |      21 | `Java_java_lang_ClassLoader_defineClass0` | `libjava.dylib`   |

##### `os::malloc` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                   | Location       |
| ----: | -------: | ------: | ------------------------ | -------------- |
| 99.9% | 1.33 GiB |   8,465 | `Chunk::operator new`    | `libjvm.dylib` |
|  0.1% |  914 KiB |       2 | `os::malloc`             | `libjvm.dylib` |
|  0.1% |  914 KiB |       1 | `Unsafe_AllocateMemory0` | `libjvm.dylib` |
| <0.1% |  238 KiB |     110 | `AllocateHeap`           | `libjvm.dylib` |
| <0.1% |    720 B |       9 | `AnyObj::operator new`   | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |     Size | Samples | Caller         | Location       |
| -----: | -------: | ------: | -------------- | -------------- |
| 100.0% | 1.33 GiB |   8,464 | `Arena::grow`  | `libjvm.dylib` |
|  <0.1% |  1,000 B |       1 | `Arena::Arena` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                       | Location       |
| ----: | -------: | ------: | ---------------------------- | -------------- |
| 45.8% |  623 MiB |   2,537 | `PhaseIdealLoop::Dominators` | `libjvm.dylib` |
| 27.7% |  376 MiB |   1,656 | `PhaseIFG::init`             | `libjvm.dylib` |
|  8.6% |  117 MiB |   1,701 | `Arena::Arealloc`            | `libjvm.dylib` |
|  7.0% | 95.6 MiB |     763 | `PhaseLive::compute`         | `libjvm.dylib` |
|  2.9% | 38.8 MiB |     207 | `Matcher::xform`             | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 1.33 GiB |   8,486 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |     Size | Samples | Caller           | Location                  |
| -----: | -------: | ------: | ---------------- | ------------------------- |
| 100.0% | 1.33 GiB |   8,486 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |     Size | Samples | Caller         | Location                  |
| -----: | -------: | ------: | -------------- | ------------------------- |
| 100.0% | 1.33 GiB |   8,486 | `thread_start` | `libsystem_pthread.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                          | Location       |
| -----: | -------: | ------: | ------------------------------- | -------------- |
| 100.0% | 1.33 GiB |   8,477 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |     Size | Samples | Caller             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.33 GiB |   8,477 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                                | Location       |
| -----: | -------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 1.33 GiB |   8,476 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                       | Location       |
| -----: | -------: | ------: | ---------------------------- | -------------- |
| 100.0% | 1.32 GiB |   8,356 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                                     | Location       |
| -----: | -------: | ------: | ------------------------------------------ | -------------- |
| 100.0% | 1.32 GiB |   8,356 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 747 MiB |   4,528 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |    Size | Samples | Caller                    | Location       |
| ----: | ------: | ------: | ------------------------- | -------------- |
| 50.7% | 362 MiB |   2,220 | `Compile::Optimize`       | `libjvm.dylib` |
| 49.3% | 351 MiB |   1,821 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                     | Location       |
| -----: | ------: | ------: | -------------------------- | -------------- |
| 100.0% | 709 MiB |   4,001 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                           | Location       |
| -----: | ------: | ------: | -------------------------------- | -------------- |
| 100.0% | 709 MiB |   4,000 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 623 MiB |   2,538 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 577 MiB |   3,443 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % |    Size | Samples | Caller              | Location       |
| -----: | ------: | ------: | ------------------- | -------------- |
| 100.0% | 480 MiB |   2,568 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 58.2% | 68.4 MiB |   1,053 | `Node_Array::grow`               | `libjvm.dylib` |
| 11.4% | 13.3 MiB |     229 | `PhaseIdealLoop::set_idom`       | `libjvm.dylib` |
| 11.0% | 12.9 MiB |     132 | `Type_Array::grow`               | `libjvm.dylib` |
|  7.3% | 8.63 MiB |      80 | `Node::out_grow`                 | `libjvm.dylib` |
|  3.3% | 3.91 MiB |      47 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|     % |    Size | Samples | Caller                                               | Location       |
| ----: | ------: | ------: | ---------------------------------------------------- | -------------- |
| 99.4% |  20 MiB |     301 | `PhaseIdealLoop::build_and_optimize`                 | `libjvm.dylib` |
|  0.6% | 128 KiB |       1 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                 | Location       |
| -----: | -------: | ------: | ---------------------- | -------------- |
| 100.0% | 19.7 MiB |     278 | `Parse::do_all_blocks` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % |     Size | Samples | Caller         | Location       |
| -----: | -------: | ------: | -------------- | -------------- |
| 100.0% | 19.7 MiB |     278 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                     | Location       |
| -----: | -------: | ------: | -------------------------- | -------------- |
| 100.0% | 19.7 MiB |     278 | `ParseGenerator::generate` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                                 | Location       |
| ----: | -------: | ------: | -------------------------------------- | -------------- |
| 99.2% | 19.5 MiB |     275 | `Compile::Compile`                     | `libjvm.dylib` |
| 74.1% | 14.6 MiB |     183 | `Parse::do_call`                       | `libjvm.dylib` |
| 69.7% | 13.7 MiB |     196 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
|  0.3% |   64 KiB |       1 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 18.4 MiB |     256 | `Parse::do_one_block` | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                                 | Location       |
| ----: | -------: | ------: | -------------------------------------- | -------------- |
| 98.3% | 14.3 MiB |     204 | `Parse::do_call`                       | `libjvm.dylib` |
| 31.1% | 4.53 MiB |      54 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
|  2.4% |  352 KiB |       3 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

##### `Type_Array::grow` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 24.6% | 3.19 MiB |      32 | `GraphKit::clone_map`            | `libjvm.dylib` |
| 20.3% | 2.63 MiB |      29 | `PhaseValues::set_type_bottom`   | `libjvm.dylib` |
| 19.1% | 2.47 MiB |      24 | `IdealKit::delay_transform`      | `libjvm.dylib` |
|  7.2% |  960 KiB |       8 | `Parse::return_current`          | `libjvm.dylib` |
|  4.8% |  640 KiB |       9 | `PhaseIdealLoop::split_thru_phi` | `libjvm.dylib` |

##### `IdealLoopTree::loop_predication` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                               | Location       |
| -----: | -------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 9.97 MiB |     208 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
|  48.9% | 4.88 MiB |     103 | `IdealLoopTree::loop_predication`    | `libjvm.dylib` |

##### `IdealLoopTree::iteration_split` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                               | Location       |
| -----: | -------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 6.98 MiB |     111 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
|  91.9% | 6.42 MiB |     102 | `IdealLoopTree::iteration_split`     | `libjvm.dylib` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `os::malloc` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location                 |
| -----: | -------: | ------: | ------------- | ------------------------ |
| 100.0% | 1.33 GiB |   8,587 | `malloc_hook` | `libasyncProfiler.dylib` |
|   0.1% |  914 KiB |       2 | `os::malloc`  | `libjvm.dylib`           |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |     Size | Samples | Callee       | Location       |
| -----: | -------: | ------: | ------------ | -------------- |
| 100.0% | 1.33 GiB |   8,465 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 1.33 GiB |   8,464 | `Chunk::operator new` | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                          | Location       |
| -----: | -------: | ------: | ------------------------------- | -------------- |
| 100.0% | 1.33 GiB |   8,477 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  <0.1% |   48 KiB |       6 | `VMThread::run`                 | `libjvm.dylib` |
|  <0.1% |    8 KiB |       1 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  <0.1% | 2.27 KiB |       2 | `WorkerThread::run`             | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |     Size | Samples | Callee             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.33 GiB |   8,486 | `Thread::call_run` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |     Size | Samples | Callee                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 1.33 GiB |   8,486 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % |     Size | Samples | Callee           | Location                  |
| -----: | -------: | ------: | ---------------- | ------------------------- |
| 100.0% | 1.33 GiB |   8,486 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                         | Location       |
| -----: | -------: | ------: | ---------------------------------------------- | -------------- |
| 100.0% | 1.33 GiB |   8,476 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  <0.1% |    456 B |       1 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                | Location       |
| -----: | -------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 1.33 GiB |   8,477 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                       | Location       |
| ----: | -------: | ------: | ---------------------------- | -------------- |
| 99.7% | 1.32 GiB |   8,356 | `C2Compiler::compile_method` | `libjvm.dylib` |
|  0.3% | 3.82 MiB |     120 | `Compiler::compile_method`   | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 55.1% |  747 MiB |   4,528 | `Compile::Optimize`                      | `libjvm.dylib` |
| 42.6% |  577 MiB |   3,443 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  1.4% | 19.5 MiB |     275 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.6% | 8.56 MiB |      78 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.1% | 1.53 MiB |      12 | `Compile::inline_string_calls`           | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |     Size | Samples | Callee             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.32 GiB |   8,356 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                 | Location       |
| ----: | -------: | ------: | -------------------------------------- | -------------- |
| 48.4% |  362 MiB |   2,220 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| 47.0% |  351 MiB |   1,821 | `Compile::optimize_loops`              | `libjvm.dylib` |
|  1.2% | 8.97 MiB |      92 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |
|  0.9% | 6.48 MiB |      99 | `ConnectionGraph::do_analysis`         | `libjvm.dylib` |
|  0.7% | 5.25 MiB |      87 | `PhaseRenumberLive::PhaseRenumberLive` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 99.4% |  709 MiB |   4,001 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  0.6% | 4.13 MiB |      40 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 709 MiB |   4,000 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
|  <0.1% |  32 KiB |       1 | `Arena::grow`                        | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                                             | Location       |
| ----: | -------: | ------: | ------------------------------------------------------------------ | -------------- |
| 87.9% |  623 MiB |   2,538 | `PhaseIdealLoop::Dominators`                                       | `libjvm.dylib` |
|  3.1% | 21.8 MiB |     353 | `Node_Array::grow`                                                 | `libjvm.dylib` |
|  2.8% |   20 MiB |     301 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib` |
|  2.0% | 13.9 MiB |     248 | `Arena::grow`                                                      | `libjvm.dylib` |
|  1.4% | 9.97 MiB |     208 | `IdealLoopTree::loop_predication`                                  | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % |    Size | Samples | Callee         | Location       |
| -----: | ------: | ------: | -------------- | -------------- |
| 100.0% | 623 MiB |   2,537 | `Arena::grow`  | `libjvm.dylib` |
|  <0.1% |  32 KiB |       1 | `NTarjan::DFS` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                            | Location       |
| ----: | -------: | ------: | --------------------------------- | -------------- |
| 83.2% |  480 MiB |   2,568 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 14.8% | 85.5 MiB |     678 | `Matcher::match`                  | `libjvm.dylib` |
|  0.8% | 4.79 MiB |      81 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  0.6% | 3.43 MiB |      52 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |
|  0.5% | 2.81 MiB |      51 | `PhaseOutput::Output`             | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                           | Location       |
| ----: | -------: | ------: | ------------------------------------------------ | -------------- |
| 78.3% |  376 MiB |   1,657 | `PhaseIFG::init`                                 | `libjvm.dylib` |
| 19.9% | 95.8 MiB |     769 | `PhaseLive::compute`                             | `libjvm.dylib` |
|  1.1% | 5.34 MiB |      85 | `PhaseChaitin::Split`                            | `libjvm.dylib` |
|  0.2% | 1.19 MiB |      17 | `PhaseRegAlloc::alloc_node_regs`                 | `libjvm.dylib` |
|  0.2% |  808 KiB |      15 | `PhaseChaitin::stretch_base_pointer_live_ranges` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 117 MiB |   1,701 | `Arena::grow` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 20.1 MiB |     302 | `Arena::grow` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                   | Location       |
| ----: | -------: | ------: | ------------------------ | -------------- |
| 93.3% | 18.4 MiB |     256 | `Parse::do_call`         | `libjvm.dylib` |
| 20.8% | 4.09 MiB |      63 | `Parse::do_field_access` | `libjvm.dylib` |
| 11.0% | 2.16 MiB |      21 | `Parse::do_one_bytecode` | `libjvm.dylib` |
| 10.0% | 1.97 MiB |      31 | `Parse::do_if`           | `libjvm.dylib` |
|  7.0% | 1.38 MiB |      16 | `Parse::return_current`  | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                          | Location       |
| -----: | -------: | ------: | ------------------------------- | -------------- |
| 100.0% | 19.7 MiB |     278 | `Parse::do_one_block`           | `libjvm.dylib` |
|   3.7% |  736 KiB |       7 | `Parse::merge_common`           | `libjvm.dylib` |
|   0.8% |  160 KiB |       2 | `Parse::ensure_phis_everywhere` | `libjvm.dylib` |
|   0.3% |   64 KiB |       1 | `GraphKit::clone_map`           | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                    | Location       |
| -----: | -------: | ------: | ------------------------- | -------------- |
| 100.0% | 19.7 MiB |     278 | `Parse::do_all_blocks`    | `libjvm.dylib` |
|   8.1% | 1.59 MiB |      17 | `Parse::build_exits`      | `libjvm.dylib` |
|   6.5% | 1.28 MiB |      16 | `GraphKit::set_map_clone` | `libjvm.dylib` |
|   0.8% |  160 KiB |       2 | `Parse::create_entry_map` | `libjvm.dylib` |
|   0.8% |  160 KiB |       5 | `Parse::do_exits`         | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % |     Size | Samples | Callee         | Location       |
| -----: | -------: | ------: | -------------- | -------------- |
| 100.0% | 19.7 MiB |     278 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                             | Location       |
| ----: | -------: | ------: | ---------------------------------- | -------------- |
| 79.4% | 14.6 MiB |     183 | `ParseGenerator::generate`         | `libjvm.dylib` |
| 77.9% | 14.3 MiB |     204 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
|  2.4% |  448 KiB |       5 | `LibraryIntrinsic::generate`       | `libjvm.dylib` |
|  2.0% |  384 KiB |       2 | `PhaseValues::uncached_makecon`    | `libjvm.dylib` |
|  0.7% |  128 KiB |       4 | `Compile::call_generator`          | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                               | Location       |
| ----: | -------: | ------: | ------------------------------------ | -------------- |
| 94.2% | 13.7 MiB |     196 | `ParseGenerator::generate`           | `libjvm.dylib` |
| 31.1% | 4.53 MiB |      54 | `PredictedCallGenerator::generate`   | `libjvm.dylib` |
|  4.7% |  704 KiB |       7 | `PreserveJVMState::PreserveJVMState` | `libjvm.dylib` |
|  3.9% |  576 KiB |      10 | `DirectCallGenerator::generate`      | `libjvm.dylib` |
|  3.2% |  480 KiB |       7 | `GraphKit::subtype_check_receiver`   | `libjvm.dylib` |

##### `Type_Array::grow` (`libjvm.dylib`)

|      % |     Size | Samples | Callee            | Location       |
| -----: | -------: | ------: | ----------------- | -------------- |
| 100.0% | 12.9 MiB |     132 | `Arena::Arealloc` | `libjvm.dylib` |

##### `IdealLoopTree::loop_predication` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                  | Location       |
| -----: | -------: | ------: | --------------------------------------- | -------------- |
| 100.0% | 9.97 MiB |     208 | `PhaseIdealLoop::loop_predication_impl` | `libjvm.dylib` |
|  48.9% | 4.88 MiB |     103 | `IdealLoopTree::loop_predication`       | `libjvm.dylib` |

##### `IdealLoopTree::iteration_split` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                | Location       |
| ----: | -------: | ------: | ------------------------------------- | -------------- |
| 91.9% | 6.42 MiB |     102 | `IdealLoopTree::iteration_split`      | `libjvm.dylib` |
| 88.8% |  6.2 MiB |      97 | `IdealLoopTree::iteration_split_impl` | `libjvm.dylib` |
| 11.2% |  800 KiB |      14 | `PhaseIdealLoop::do_unswitching`      | `libjvm.dylib` |

## Hottest call stacks

Call stacks with the most native bytes allocated in their leaf frame.

Common call stack: `Compile::Compile` (`libjvm.dylib`) ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 27.6% |  376 MiB |   1,656 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                                 |
| 23.0% |  314 MiB |   1,381 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                  |
| 22.7% |  309 MiB |   1,156 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                      |
|  7.0% | 95.6 MiB |     763 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                             |
|  2.8% | 38.8 MiB |     207 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                                  |
|  1.9% | 25.3 MiB |     205 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                            |
|  0.9% | 11.7 MiB |     169 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                            |
|  0.8% | 11.3 MiB |     162 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                |
|  0.7% | 10.1 MiB |     184 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                        |
|  0.6% | 8.72 MiB |     139 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                            |
|  0.6% | 8.56 MiB |      78 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless`                                                                                                                                                                       |
|  0.6% | 8.38 MiB |      72 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node::out_grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                           |
|  0.6% | 8.19 MiB |      76 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize`                                                                                                                                                                              |
|  0.6% | 7.79 MiB |     137 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                                                     |
|  0.4% | 6.12 MiB |     111 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                                                 |
|  0.4% | 5.22 MiB |      69 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                            |
|  0.4% | 5.13 MiB |     100 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize`                                                                                                                                                                            |
|  0.3% | 3.81 MiB |      61 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                         |
|  0.2% | 3.09 MiB |      44 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `ConnectionGraph::compute_escape` ← `ConnectionGraph::do_analysis` ← `Compile::Optimize`                                                                                                                                                          |
|  0.2% | 3.03 MiB |      51 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseIdealLoop::set_idom` ← `PhaseIdealLoop::split_thru_region` ← `PhaseIdealLoop::do_split_if` ← `PhaseIdealLoop::split_if_with_blocks` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` |
