# Allocated native memory profile

Allocated 1.34 GiB over 8,540 samples (165 KiB per sample).

| Category |      % |     Size | Samples |
| -------- | -----: | -------: | ------: |
| Native   | 100.0% | 1.34 GiB |   8,540 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
└── … 1.33 GiB (99.5%) Compile::Compile at libjvm.dylib
    ├── 739 MiB (53.9%) Compile::Optimize
    │   ├── … 352 MiB (25.7%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
    │   │   ├── … 310 MiB (22.6%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 11.9 MiB (0.9%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 9.81 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 9.15 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── 3.63 MiB (0.3%) IdealLoopTree::iteration_split
    │   │   └── 3.47 MiB (0.3%) IdealLoopTree::loop_predication
    │   ├── … 349 MiB (25.4%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
    │   │   ├── … 304 MiB (22.1%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 9.41 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 9.07 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 7.3 MiB (0.5%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 6 MiB (0.4%) PhaseIdealLoop::loop_predication_impl_helper at libjvm.dylib
    │   │   ├── 3.76 MiB (0.3%) PhaseIdealLoop::split_if_with_blocks
    │   │   └── 6.98 MiB (0.5%) 5 more callees, led by (0.2%) IdealLoopTree::counted_loop
    │   ├── … 8.19 MiB (0.6%) malloc_hook at libasyncProfiler.dylib
    │   ├── 5.75 MiB (0.4%) PhaseRenumberLive::PhaseRenumberLive
    │   ├── 5.67 MiB (0.4%) PhaseCCP::do_transform
    │   ├── 5.48 MiB (0.4%) ConnectionGraph::do_analysis
    │   └── 4.14 MiB (0.3%) PhaseMacroExpand::expand_macro_nodes
    ├── 596 MiB (43.4%) Compile::Code_Gen
    │   ├── 495 MiB (36.1%) PhaseChaitin::Register_Allocate
    │   │   ├── … 381 MiB (27.8%, self 100.0% globally) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 103 MiB (7.5%) malloc_hook at libasyncProfiler.dylib
    │   │   └── 6.16 MiB (0.4%) PhaseChaitin::Split
    │   ├── 88.2 MiB (6.4%) Matcher::match
    │   │   ├── 54.9 MiB (4.0%) Matcher::xform
    │   │   │   ├── … 39.7 MiB (2.9%) malloc_hook at libasyncProfiler.dylib
    │   │   │   ├── … 7.78 MiB (0.6%) malloc_hook at libasyncProfiler.dylib
    │   │   │   └── 6.91 MiB (0.5%) Matcher::match_tree
    │   │   │       └── 6.22 MiB (0.5%) Matcher::ReduceInst
    │   │   └── … 26.6 MiB (1.9%) malloc_hook at libasyncProfiler.dylib
    │   ├── 4.99 MiB (0.4%) PhaseCFG::do_global_code_motion
    │   └── 4.33 MiB (0.3%) PhaseCFG::PhaseCFG
    ├── … 14.1 MiB (1.0%) Parse::do_one_block at libjvm.dylib
    │   ├── 4.81 MiB (0.4%) Parse::do_field_access
    │   └── 3.97 MiB (0.3%) Parse::do_call
    └── … 8.22 MiB (0.6%) malloc_hook at libasyncProfiler.dylib
```

## Hottest functions

### Self size

Functions with the most native bytes allocated within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self size.

##### Native

|      % |     Size | Samples | Function      | Location                 |
| -----: | -------: | ------: | ------------- | ------------------------ |
| 100.0% | 1.34 GiB |   8,539 | `malloc_hook` | `libasyncProfiler.dylib` |
|  <0.1% |    2 KiB |       1 | `calloc_hook` | `libasyncProfiler.dylib` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location          |
| ----: | -------: | ------: | ----------------------------------------- | ----------------- |
| 99.8% | 1.34 GiB |   8,475 | `os::malloc`                              | `libjvm.dylib`    |
|  0.2% |  2.4 MiB |      32 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |
| <0.1% |  288 KiB |       9 | `updatewindow`                            | `libzip.dylib`    |
| <0.1% | 70.8 KiB |       6 | `CCalloc`                                 | `libverify.dylib` |
| <0.1% |   28 KiB |       4 | `inflateInit2_`                           | `libzip.dylib`    |

##### `calloc_hook` (`libasyncProfiler.dylib`)

|      % |  Size | Samples | Caller                       | Location          |
| -----: | ----: | ------: | ---------------------------- | ----------------- |
| 100.0% | 2 KiB |       1 | `VerifyClassForMajorVersion` | `libverify.dylib` |

### Total size

Functions with the most native bytes allocated within the function and its callees.

|      % |     Size | Samples | Function                                   | Location                  |
| -----: | -------: | ------: | ------------------------------------------ | ------------------------- |
| 100.0% | 1.34 GiB |   8,539 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
|  99.8% | 1.34 GiB |   8,475 | `os::malloc`                               | `libjvm.dylib`            |
|  99.7% | 1.34 GiB |   8,342 | `Chunk::operator new`                      | `libjvm.dylib`            |
|  99.7% | 1.34 GiB |   8,342 | `Arena::grow`                              | `libjvm.dylib`            |
|  99.7% | 1.34 GiB |   8,361 | `Thread::call_run`                         | `libjvm.dylib`            |
|  99.7% | 1.34 GiB |   8,361 | `thread_native_entry`                      | `libjvm.dylib`            |
|  99.7% | 1.34 GiB |   8,361 | `_pthread_start`                           | `libsystem_pthread.dylib` |
|  99.7% | 1.34 GiB |   8,361 | `thread_start`                             | `libsystem_pthread.dylib` |
|  99.7% | 1.34 GiB |   8,349 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
|  99.7% | 1.34 GiB |   8,348 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  99.7% | 1.34 GiB |   8,348 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
|  99.5% | 1.33 GiB |   8,265 | `Compile::Compile`                         | `libjvm.dylib`            |
|  99.5% | 1.33 GiB |   8,265 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  53.9% |  739 MiB |   4,435 | `Compile::Optimize`                        | `libjvm.dylib`            |
|  51.4% |  705 MiB |   3,960 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib`            |
|  51.1% |  701 MiB |   3,926 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib`            |
|  51.1% |  701 MiB |   3,926 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib`            |
|  44.7% |  613 MiB |   2,435 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`            |
|  43.4% |  596 MiB |   3,483 | `Compile::Code_Gen`                        | `libjvm.dylib`            |
|  36.1% |  495 MiB |   2,573 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib`            |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Native

|      % |     Size | Samples | Function                                                           | Location                  |
| -----: | -------: | ------: | ------------------------------------------------------------------ | ------------------------- |
| 100.0% | 1.34 GiB |   8,539 | `malloc_hook`                                                      | `libasyncProfiler.dylib`  |
|  99.8% | 1.34 GiB |   8,475 | `os::malloc`                                                       | `libjvm.dylib`            |
|  99.7% | 1.34 GiB |   8,342 | `Chunk::operator new`                                              | `libjvm.dylib`            |
|  99.7% | 1.34 GiB |   8,342 | `Arena::grow`                                                      | `libjvm.dylib`            |
|  99.7% | 1.34 GiB |   8,361 | `Thread::call_run`                                                 | `libjvm.dylib`            |
|  99.7% | 1.34 GiB |   8,361 | `thread_native_entry`                                              | `libjvm.dylib`            |
|  99.7% | 1.34 GiB |   8,361 | `_pthread_start`                                                   | `libsystem_pthread.dylib` |
|  99.7% | 1.34 GiB |   8,361 | `thread_start`                                                     | `libsystem_pthread.dylib` |
|  99.7% | 1.34 GiB |   8,349 | `JavaThread::thread_main_inner`                                    | `libjvm.dylib`            |
|   8.5% |  117 MiB |   1,639 | `Arena::Arealloc`                                                  | `libjvm.dylib`            |
|   1.6% | 21.3 MiB |     326 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib`            |
|   1.4% | 18.7 MiB |     242 | `Parse::do_one_block`                                              | `libjvm.dylib`            |
|   1.4% | 18.7 MiB |     242 | `Parse::do_all_blocks`                                             | `libjvm.dylib`            |
|   1.4% | 18.7 MiB |     242 | `Parse::Parse`                                                     | `libjvm.dylib`            |
|   1.4% | 18.7 MiB |     242 | `ParseGenerator::generate`                                         | `libjvm.dylib`            |
|   1.3% | 17.5 MiB |     227 | `Parse::do_call`                                                   | `libjvm.dylib`            |
|   1.0% | 13.8 MiB |     178 | `PredictedCallGenerator::generate`                                 | `libjvm.dylib`            |
|   0.9% | 11.9 MiB |     238 | `IdealLoopTree::loop_predication`                                  | `libjvm.dylib`            |
|   0.8% | 10.7 MiB |     110 | `Type_Array::grow`                                                 | `libjvm.dylib`            |
|   0.5% | 6.41 MiB |     102 | `IdealLoopTree::iteration_split`                                   | `libjvm.dylib`            |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location          |
| ----: | -------: | ------: | ----------------------------------------- | ----------------- |
| 99.8% | 1.34 GiB |   8,475 | `os::malloc`                              | `libjvm.dylib`    |
|  0.2% |  2.4 MiB |      32 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |
| <0.1% |  288 KiB |       9 | `updatewindow`                            | `libzip.dylib`    |
| <0.1% | 70.8 KiB |       6 | `CCalloc`                                 | `libverify.dylib` |
| <0.1% |   28 KiB |       4 | `inflateInit2_`                           | `libzip.dylib`    |

##### `os::malloc` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                      | Location       |
| ----: | -------: | ------: | --------------------------- | -------------- |
| 99.9% | 1.34 GiB |   8,342 | `Chunk::operator new`       | `libjvm.dylib` |
|  0.1% |  915 KiB |       7 | `os::malloc`                | `libjvm.dylib` |
|  0.1% |  914 KiB |       1 | `Unsafe_AllocateMemory0`    | `libjvm.dylib` |
| <0.1% |  225 KiB |     116 | `AllocateHeap`              | `libjvm.dylib` |
| <0.1% |  1.4 KiB |       6 | `JvmtiEnv::GetClassMethods` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |     Size | Samples | Caller        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 1.34 GiB |   8,342 | `Arena::grow` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                       | Location       |
| ----: | -------: | ------: | ---------------------------- | -------------- |
| 44.8% |  613 MiB |   2,434 | `PhaseIdealLoop::Dominators` | `libjvm.dylib` |
| 27.8% |  381 MiB |   1,630 | `PhaseIFG::init`             | `libjvm.dylib` |
|  8.5% |  117 MiB |   1,639 | `Arena::Arealloc`            | `libjvm.dylib` |
|  7.6% |  103 MiB |     778 | `PhaseLive::compute`         | `libjvm.dylib` |
|  2.9% | 39.7 MiB |     213 | `Matcher::xform`             | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 1.34 GiB |   8,361 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |     Size | Samples | Caller           | Location                  |
| -----: | -------: | ------: | ---------------- | ------------------------- |
| 100.0% | 1.34 GiB |   8,361 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |     Size | Samples | Caller         | Location                  |
| -----: | -------: | ------: | -------------- | ------------------------- |
| 100.0% | 1.34 GiB |   8,361 | `thread_start` | `libsystem_pthread.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |     Size | Samples | Caller             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.34 GiB |   8,349 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                                | Location       |
| -----: | -------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 1.34 GiB |   8,348 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                          | Location       |
| -----: | -------: | ------: | ------------------------------- | -------------- |
| 100.0% | 1.34 GiB |   8,348 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                       | Location       |
| -----: | -------: | ------: | ---------------------------- | -------------- |
| 100.0% | 1.33 GiB |   8,265 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                                     | Location       |
| -----: | -------: | ------: | ------------------------------------------ | -------------- |
| 100.0% | 1.33 GiB |   8,265 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 739 MiB |   4,435 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |    Size | Samples | Caller                    | Location       |
| ----: | ------: | ------: | ------------------------- | -------------- |
| 50.1% | 353 MiB |   1,818 | `Compile::optimize_loops` | `libjvm.dylib` |
| 49.9% | 351 MiB |   2,142 | `Compile::Optimize`       | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                           | Location       |
| -----: | ------: | ------: | -------------------------------- | -------------- |
| 100.0% | 701 MiB |   3,926 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                     | Location       |
| -----: | ------: | ------: | -------------------------- | -------------- |
| 100.0% | 701 MiB |   3,926 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 613 MiB |   2,435 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 596 MiB |   3,483 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % |    Size | Samples | Caller              | Location       |
| -----: | ------: | ------: | ------------------- | -------------- |
| 100.0% | 495 MiB |   2,573 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 56.2% | 65.6 MiB |     991 | `Node_Array::grow`               | `libjvm.dylib` |
| 11.5% | 13.5 MiB |     223 | `PhaseIdealLoop::set_idom`       | `libjvm.dylib` |
|  9.1% | 10.7 MiB |     110 | `Type_Array::grow`               | `libjvm.dylib` |
|  6.8% | 7.94 MiB |      76 | `Node::out_grow`                 | `libjvm.dylib` |
|  5.2% | 6.13 MiB |      62 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                                               | Location       |
| ----: | -------: | ------: | ---------------------------------------------------- | -------------- |
| 99.9% | 21.3 MiB |     325 | `PhaseIdealLoop::build_and_optimize`                 | `libjvm.dylib` |
|  0.1% |   32 KiB |       1 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                 | Location       |
| -----: | -------: | ------: | ---------------------- | -------------- |
| 100.0% | 18.7 MiB |     242 | `Parse::do_all_blocks` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % |     Size | Samples | Caller         | Location       |
| -----: | -------: | ------: | -------------- | -------------- |
| 100.0% | 18.7 MiB |     242 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                     | Location       |
| -----: | -------: | ------: | -------------------------- | -------------- |
| 100.0% | 18.7 MiB |     242 | `ParseGenerator::generate` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                             | Location       |
| ----: | -------: | ------: | ---------------------------------- | -------------- |
| 99.0% | 18.5 MiB |     240 | `Compile::Compile`                 | `libjvm.dylib` |
| 72.0% | 13.4 MiB |     161 | `Parse::do_call`                   | `libjvm.dylib` |
| 68.8% | 12.8 MiB |     164 | `PredictedCallGenerator::generate` | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 17.5 MiB |     227 | `Parse::do_one_block` | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                                 | Location       |
| -----: | -------: | ------: | -------------------------------------- | -------------- |
| 100.0% | 13.8 MiB |     178 | `Parse::do_call`                       | `libjvm.dylib` |
|  33.2% | 4.56 MiB |      48 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
|   1.4% |  192 KiB |       2 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

##### `IdealLoopTree::loop_predication` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                               | Location       |
| -----: | -------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 11.9 MiB |     238 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
|  42.9% |  5.1 MiB |      97 | `IdealLoopTree::loop_predication`    | `libjvm.dylib` |

##### `Type_Array::grow` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 25.4% | 2.72 MiB |      30 | `PhaseValues::set_type_bottom`   | `libjvm.dylib` |
| 20.2% | 2.16 MiB |      21 | `IdealKit::delay_transform`      | `libjvm.dylib` |
| 19.0% | 2.03 MiB |      19 | `GraphKit::clone_map`            | `libjvm.dylib` |
| 15.2% | 1.63 MiB |      12 | `Parse::build_exits`             | `libjvm.dylib` |
|  4.4% |  480 KiB |       5 | `PhaseIdealLoop::split_thru_phi` | `libjvm.dylib` |

##### `IdealLoopTree::iteration_split` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                               | Location       |
| -----: | -------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 6.41 MiB |     102 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
|  93.7% |    6 MiB |      94 | `IdealLoopTree::iteration_split`     | `libjvm.dylib` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `os::malloc` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location                 |
| -----: | -------: | ------: | ------------- | ------------------------ |
| 100.0% | 1.34 GiB |   8,475 | `malloc_hook` | `libasyncProfiler.dylib` |
|   0.1% |  915 KiB |       7 | `os::malloc`  | `libjvm.dylib`           |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |     Size | Samples | Callee       | Location       |
| -----: | -------: | ------: | ------------ | -------------- |
| 100.0% | 1.34 GiB |   8,342 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 1.34 GiB |   8,342 | `Chunk::operator new` | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                          | Location       |
| -----: | -------: | ------: | ------------------------------- | -------------- |
| 100.0% | 1.34 GiB |   8,349 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  <0.1% | 48.4 KiB |       7 | `VMThread::run`                 | `libjvm.dylib` |
|  <0.1% |    8 KiB |       1 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  <0.1% | 2.95 KiB |       4 | `WorkerThread::run`             | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |     Size | Samples | Callee             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.34 GiB |   8,361 | `Thread::call_run` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |     Size | Samples | Callee                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 1.34 GiB |   8,361 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % |     Size | Samples | Callee           | Location                  |
| -----: | -------: | ------: | ---------------- | ------------------------- |
| 100.0% | 1.34 GiB |   8,361 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                | Location       |
| -----: | -------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 1.34 GiB |   8,348 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |
|  <0.1% |   32 KiB |       1 | `ServiceThread::service_thread_entry` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                       | Location       |
| ----: | -------: | ------: | ---------------------------- | -------------- |
| 99.8% | 1.33 GiB |   8,265 | `C2Compiler::compile_method` | `libjvm.dylib` |
|  0.2% |    3 MiB |      83 | `Compiler::compile_method`   | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                     | Location       |
| -----: | -------: | ------: | ------------------------------------------ | -------------- |
| 100.0% | 1.34 GiB |   8,348 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 54.2% |  739 MiB |   4,435 | `Compile::Optimize`                      | `libjvm.dylib` |
| 43.7% |  596 MiB |   3,483 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  1.4% | 18.5 MiB |     240 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.6% | 8.22 MiB |      76 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.2% | 2.19 MiB |      16 | `Compile::inline_string_calls`           | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |     Size | Samples | Callee             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.33 GiB |   8,265 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                 | Location       |
| ----: | -------: | ------: | -------------------------------------- | -------------- |
| 47.8% |  353 MiB |   1,818 | `Compile::optimize_loops`              | `libjvm.dylib` |
| 47.5% |  351 MiB |   2,142 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
|  1.2% | 9.19 MiB |      84 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |
|  0.8% | 5.75 MiB |      92 | `PhaseRenumberLive::PhaseRenumberLive` | `libjvm.dylib` |
|  0.8% | 5.67 MiB |     100 | `PhaseCCP::do_transform`               | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 99.5% |  701 MiB |   3,926 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  0.5% | 3.81 MiB |      34 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                                             | Location       |
| ----: | -------: | ------: | ------------------------------------------------------------------ | -------------- |
| 87.5% |  613 MiB |   2,435 | `PhaseIdealLoop::Dominators`                                       | `libjvm.dylib` |
|  3.0% | 21.3 MiB |     325 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib` |
|  2.7% | 18.9 MiB |     325 | `Node_Array::grow`                                                 | `libjvm.dylib` |
|  2.3% | 16.5 MiB |     280 | `Arena::grow`                                                      | `libjvm.dylib` |
|  1.7% | 11.9 MiB |     238 | `IdealLoopTree::loop_predication`                                  | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 701 MiB |   3,926 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % |    Size | Samples | Callee         | Location       |
| -----: | ------: | ------: | -------------- | -------------- |
| 100.0% | 613 MiB |   2,434 | `Arena::grow`  | `libjvm.dylib` |
|  <0.1% |  32 KiB |       1 | `NTarjan::DFS` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                            | Location       |
| ----: | -------: | ------: | --------------------------------- | -------------- |
| 83.0% |  495 MiB |   2,573 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 14.8% | 88.2 MiB |     695 | `Matcher::match`                  | `libjvm.dylib` |
|  0.8% | 4.99 MiB |      82 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  0.7% | 4.33 MiB |      61 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |
|  0.5% | 3.23 MiB |      56 | `PhaseOutput::Output`             | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                           | Location       |
| ----: | -------: | ------: | ------------------------------------------------ | -------------- |
| 77.0% |  381 MiB |   1,632 | `PhaseIFG::init`                                 | `libjvm.dylib` |
| 21.0% |  104 MiB |     788 | `PhaseLive::compute`                             | `libjvm.dylib` |
|  1.2% | 6.16 MiB |      83 | `PhaseChaitin::Split`                            | `libjvm.dylib` |
|  0.3% |  1.6 MiB |      26 | `PhaseRegAlloc::alloc_node_regs`                 | `libjvm.dylib` |
|  0.2% | 1.17 MiB |      19 | `PhaseChaitin::stretch_base_pointer_live_ranges` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 117 MiB |   1,639 | `Arena::grow` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 21.3 MiB |     326 | `Arena::grow` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                   | Location       |
| ----: | -------: | ------: | ------------------------ | -------------- |
| 94.0% | 17.5 MiB |     227 | `Parse::do_call`         | `libjvm.dylib` |
| 25.8% | 4.81 MiB |      68 | `Parse::do_field_access` | `libjvm.dylib` |
|  5.2% |  992 KiB |      16 | `Parse::do_one_bytecode` | `libjvm.dylib` |
|  5.2% |  992 KiB |      13 | `Parse::do_if`           | `libjvm.dylib` |
|  4.5% |  864 KiB |       6 | `Parse::do_instanceof`   | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                          | Location       |
| -----: | -------: | ------: | ------------------------------- | -------------- |
| 100.0% | 18.7 MiB |     242 | `Parse::do_one_block`           | `libjvm.dylib` |
|   2.3% |  448 KiB |       3 | `GraphKit::clone_map`           | `libjvm.dylib` |
|   2.2% |  416 KiB |       6 | `Parse::merge_common`           | `libjvm.dylib` |
|   0.7% |  128 KiB |       1 | `Parse::ensure_phis_everywhere` | `libjvm.dylib` |
|   0.2% |   32 KiB |       1 | `Node_Array::grow`              | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                    | Location       |
| -----: | -------: | ------: | ------------------------- | -------------- |
| 100.0% | 18.7 MiB |     242 | `Parse::do_all_blocks`    | `libjvm.dylib` |
|  14.6% | 2.72 MiB |      24 | `Parse::build_exits`      | `libjvm.dylib` |
|   1.8% |  352 KiB |       3 | `Parse::do_exits`         | `libjvm.dylib` |
|   0.7% |  128 KiB |       3 | `GraphKit::set_map_clone` | `libjvm.dylib` |
|   0.5% |   96 KiB |       2 | `Parse::create_entry_map` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % |     Size | Samples | Callee         | Location       |
| -----: | -------: | ------: | -------------- | -------------- |
| 100.0% | 18.7 MiB |     242 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                     | Location       |
| ----: | -------: | ------: | ------------------------------------------ | -------------- |
| 78.4% | 13.8 MiB |     178 | `PredictedCallGenerator::generate`         | `libjvm.dylib` |
| 76.6% | 13.4 MiB |     161 | `ParseGenerator::generate`                 | `libjvm.dylib` |
|  7.7% | 1.34 MiB |      10 | `LibraryIntrinsic::generate`               | `libjvm.dylib` |
|  0.9% |  160 KiB |       2 | `LateInlineVirtualCallGenerator::generate` | `libjvm.dylib` |
|  0.9% |  160 KiB |       2 | `DirectCallGenerator::generate`            | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                             | Location       |
| ----: | -------: | ------: | ---------------------------------- | -------------- |
| 93.4% | 12.8 MiB |     164 | `ParseGenerator::generate`         | `libjvm.dylib` |
| 33.2% | 4.56 MiB |      48 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
|  6.1% |  864 KiB |      10 | `GraphKit::subtype_check_receiver` | `libjvm.dylib` |
|  4.3% |  608 KiB |       7 | `DirectCallGenerator::generate`    | `libjvm.dylib` |
|  1.6% |  224 KiB |       3 | `GraphKit::type_check_receiver`    | `libjvm.dylib` |

##### `IdealLoopTree::loop_predication` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                  | Location       |
| -----: | -------: | ------: | --------------------------------------- | -------------- |
| 100.0% | 11.9 MiB |     238 | `PhaseIdealLoop::loop_predication_impl` | `libjvm.dylib` |
|  42.9% |  5.1 MiB |      97 | `IdealLoopTree::loop_predication`       | `libjvm.dylib` |

##### `Type_Array::grow` (`libjvm.dylib`)

|      % |     Size | Samples | Callee            | Location       |
| -----: | -------: | ------: | ----------------- | -------------- |
| 100.0% | 10.7 MiB |     110 | `Arena::Arealloc` | `libjvm.dylib` |

##### `IdealLoopTree::iteration_split` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                | Location       |
| ----: | -------: | ------: | ------------------------------------- | -------------- |
| 93.7% |    6 MiB |      94 | `IdealLoopTree::iteration_split`      | `libjvm.dylib` |
| 90.2% | 5.78 MiB |      89 | `IdealLoopTree::iteration_split_impl` | `libjvm.dylib` |
|  9.8% |  640 KiB |      13 | `PhaseIdealLoop::do_unswitching`      | `libjvm.dylib` |

## Hottest call stacks

Call stacks with the most native bytes allocated in their leaf frame.

Common call stack: `Compile::Compile` (`libjvm.dylib`) ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                     |
| ----: | -------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 27.8% |  381 MiB |   1,630 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                  |
| 22.6% |  310 MiB |   1,119 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                       |
| 22.1% |  304 MiB |   1,315 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                   |
|  7.5% |  103 MiB |     778 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                              |
|  2.9% | 39.7 MiB |     213 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                   |
|  1.9% | 26.6 MiB |     208 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                             |
|  0.9% | 11.9 MiB |     169 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` |
|  0.7% | 9.81 MiB |     159 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                             |
|  0.7% | 9.41 MiB |     156 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                             |
|  0.7% | 9.15 MiB |     153 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                      |
|  0.7% | 9.07 MiB |     166 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                         |
|  0.6% | 8.22 MiB |      76 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless`                                                                                                        |
|  0.6% | 8.06 MiB |      71 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize`                                                                                                               |
|  0.6% | 7.78 MiB |      72 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node::out_grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                            |
|  0.5% |  7.3 MiB |     127 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                  |
|  0.4% |  5.6 MiB |      98 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize`                                                                                                             |
|  0.4% |  5.5 MiB |      69 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                             |
|  0.4% | 4.84 MiB |      62 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                          |
|  0.3% | 3.94 MiB |      54 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseCFG::build_cfg` ← `PhaseCFG::PhaseCFG` ← `Compile::Code_Gen`                                                                                                                                      |
|  0.2% | 2.84 MiB |      41 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `ConnectionGraph::compute_escape` ← `ConnectionGraph::do_analysis` ← `Compile::Optimize`                                                                                           |
