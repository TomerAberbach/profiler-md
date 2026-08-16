# Allocated native memory profile

Allocated 1.15 GiB over 170,620 samples (7.05 KiB per sample).

| Category |      % |     Size | Samples |
| -------- | -----: | -------: | ------: |
| Native   | 100.0% | 1.15 GiB | 170,620 |

## Hottest functions

### Self size

Functions ranked by native bytes allocated directly in the function body, excluding callees.

#### Categories

##### Native

|      % |     Size | Samples | Function       | Location                 |
| -----: | -------: | ------: | -------------- | ------------------------ |
| 100.0% | 1.15 GiB | 169,736 | `malloc_hook`  | `libasyncProfiler.dylib` |
|  <0.1% |  192 KiB |     839 | `realloc_hook` | `libasyncProfiler.dylib` |
|  <0.1% |  122 KiB |      45 | `calloc_hook`  | `libasyncProfiler.dylib` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location        |
| ----: | -------: | ------: | ----------------------------------------- | --------------- |
| 99.3% | 1.14 GiB | 158,728 | `os::malloc`                              | `libjvm.dylib`  |
|  0.5% | 5.92 MiB |   1,329 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |
|  0.1% | 1.15 MiB |   1,181 | `Java_java_lang_ClassLoader_defineClass0` | `libjava.dylib` |
| <0.1% |  384 KiB |      12 | `updatewindow`                            | `libzip.dylib`  |
| <0.1% |  313 KiB |   2,639 | `getStringPlatformChars0`                 | `libjava.dylib` |

##### `realloc_hook` (`libasyncProfiler.dylib`)

|      % |    Size | Samples | Caller        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 192 KiB |     839 | `os::realloc` | `libjvm.dylib` |

##### `calloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                             | Location          |
| ----: | -------: | ------: | ---------------------------------- | ----------------- |
| 72.1% |   88 KiB |      11 | `make_class_info_from_name`        | `libverify.dylib` |
| 26.9% | 32.8 KiB |      22 | `VerifyClassForMajorVersion`       | `libverify.dylib` |
|  1.1% | 1.31 KiB |      12 | `Java_java_util_zip_Inflater_init` | `libzip.dylib`    |

### Total size

Functions ranked by total native bytes allocated in the function and all its callees.

|      % |     Size | Samples | Function                                   | Location                  |
| -----: | -------: | ------: | ------------------------------------------ | ------------------------- |
| 100.0% | 1.15 GiB | 169,736 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
|  99.3% | 1.14 GiB | 158,728 | `os::malloc`                               | `libjvm.dylib`            |
|  98.2% | 1.13 GiB |  56,552 | `_pthread_start`                           | `libsystem_pthread.dylib` |
|  98.2% | 1.13 GiB |  56,552 | `thread_start`                             | `libsystem_pthread.dylib` |
|  98.2% | 1.13 GiB |  56,399 | `Thread::call_run`                         | `libjvm.dylib`            |
|  98.2% | 1.13 GiB |  56,399 | `thread_native_entry`                      | `libjvm.dylib`            |
|  98.2% | 1.13 GiB |  53,094 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
|  98.2% | 1.13 GiB |  52,648 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
|  98.2% | 1.13 GiB |  52,575 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  98.0% | 1.12 GiB |  13,869 | `Chunk::operator new`                      | `libjvm.dylib`            |
|  98.0% | 1.12 GiB |  13,826 | `Arena::grow`                              | `libjvm.dylib`            |
|  97.4% | 1.12 GiB |  18,187 | `Compile::Compile`                         | `libjvm.dylib`            |
|  97.4% | 1.12 GiB |  18,187 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  56.0% |  657 MiB |   8,050 | `Compile::Optimize`                        | `libjvm.dylib`            |
|  51.7% |  607 MiB |   6,981 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib`            |
|  51.2% |  601 MiB |   6,886 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib`            |
|  51.2% |  601 MiB |   6,886 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib`            |
|  38.7% |  454 MiB |   8,288 | `Compile::Code_Gen`                        | `libjvm.dylib`            |
|  35.2% |  413 MiB |   2,716 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`            |
|  29.9% |  351 MiB |   3,234 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib`            |

#### Categories

##### Native

|      % |     Size | Samples | Function                                                             | Location                  |
| -----: | -------: | ------: | -------------------------------------------------------------------- | ------------------------- |
| 100.0% | 1.15 GiB | 169,736 | `malloc_hook`                                                        | `libasyncProfiler.dylib`  |
|  99.3% | 1.14 GiB | 158,728 | `os::malloc`                                                         | `libjvm.dylib`            |
|  98.2% | 1.13 GiB |  56,552 | `_pthread_start`                                                     | `libsystem_pthread.dylib` |
|  98.2% | 1.13 GiB |  56,552 | `thread_start`                                                       | `libsystem_pthread.dylib` |
|  98.2% | 1.13 GiB |  56,399 | `Thread::call_run`                                                   | `libjvm.dylib`            |
|  98.2% | 1.13 GiB |  56,399 | `thread_native_entry`                                                | `libjvm.dylib`            |
|  98.2% | 1.13 GiB |  53,094 | `JavaThread::thread_main_inner`                                      | `libjvm.dylib`            |
|  98.0% | 1.12 GiB |  13,869 | `Chunk::operator new`                                                | `libjvm.dylib`            |
|  98.0% | 1.12 GiB |  13,826 | `Arena::grow`                                                        | `libjvm.dylib`            |
|  15.7% |  184 MiB |   3,942 | `Arena::Arealloc`                                                    | `libjvm.dylib`            |
|   3.5% | 41.5 MiB |     922 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to`   | `libjvm.dylib`            |
|   2.8% | 33.4 MiB |     828 | `IdealLoopTree::loop_predication`                                    | `libjvm.dylib`            |
|   1.9% | 21.9 MiB |     533 | `Parse::Parse`                                                       | `libjvm.dylib`            |
|   1.9% | 21.9 MiB |     533 | `ParseGenerator::generate`                                           | `libjvm.dylib`            |
|   1.9% | 21.9 MiB |     506 | `Parse::do_all_blocks`                                               | `libjvm.dylib`            |
|   1.9% | 21.8 MiB |     504 | `Parse::do_one_block`                                                | `libjvm.dylib`            |
|   1.7% | 19.9 MiB |     461 | `Parse::do_call`                                                     | `libjvm.dylib`            |
|   1.7% | 19.7 MiB |     498 | `PathFrequency::to`                                                  | `libjvm.dylib`            |
|   1.7% | 19.5 MiB |     490 | `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` | `libjvm.dylib`            |
|   1.5% | 17.6 MiB |     322 | `IdealLoopTree::iteration_split`                                     | `libjvm.dylib`            |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `os::malloc` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location                 |
| -----: | -------: | ------: | ------------- | ------------------------ |
| 100.0% | 1.14 GiB | 158,728 | `malloc_hook` | `libasyncProfiler.dylib` |
|   0.1% | 1.18 MiB |   3,860 | `os::malloc`  | `libjvm.dylib`           |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |     Size | Samples | Callee                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 1.13 GiB |  56,399 | `thread_native_entry` | `libjvm.dylib` |
|  <0.1% |   56 KiB |     153 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % |     Size | Samples | Callee           | Location                  |
| -----: | -------: | ------: | ---------------- | ------------------------- |
| 100.0% | 1.13 GiB |  56,552 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                          | Location       |
| ----: | -------: | ------: | ------------------------------- | -------------- |
| 99.9% | 1.13 GiB |  53,094 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| <0.1% |  399 KiB |   1,175 | `VMThread::run`                 | `libjvm.dylib` |
| <0.1% |  272 KiB |   2,036 | `WorkerThread::run`             | `libjvm.dylib` |
| <0.1% | 22.9 KiB |      48 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
| <0.1% | 16.4 KiB |       9 | `JavaThread::post_run`          | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |     Size | Samples | Callee             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.13 GiB |  56,399 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                | Location       |
| -----: | -------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 1.13 GiB |  52,648 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |
|  <0.1% | 37.8 KiB |     446 | `ServiceThread::service_thread_entry` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                         | Location       |
| -----: | -------: | ------: | ---------------------------------------------- | -------------- |
| 100.0% | 1.13 GiB |  52,575 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  <0.1% |   36 KiB |      72 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |
|  <0.1% | 8.02 KiB |       1 | `CompileQueue::get`                            | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                              | Location       |
| ----: | -------: | ------: | ----------------------------------- | -------------- |
| 99.2% | 1.12 GiB |  18,187 | `C2Compiler::compile_method`        | `libjvm.dylib` |
|  0.7% |  8.4 MiB |  28,517 | `Compiler::compile_method`          | `libjvm.dylib` |
| <0.1% |  194 KiB |       8 | `ciEnv::ciEnv`                      | `libjvm.dylib` |
| <0.1% | 66.1 KiB |   5,859 | `CompilationLog::log_compile`       | `libjvm.dylib` |
| <0.1% |    888 B |       3 | `JavaThread::push_jni_handle_block` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |     Size | Samples | Callee       | Location       |
| -----: | -------: | ------: | ------------ | -------------- |
| 100.0% | 1.12 GiB |  13,869 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 1.12 GiB |  13,826 | `Chunk::operator new` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 57.5% |  657 MiB |   8,050 | `Compile::Optimize`                      | `libjvm.dylib` |
| 39.7% |  454 MiB |   8,288 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  1.9% | 21.5 MiB |     522 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.7% | 7.47 MiB |     126 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.2% | 1.81 MiB |      46 | `NodeHash::NodeHash`                     | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |     Size | Samples | Callee             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.12 GiB |  18,187 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                         | Location       |
| ----: | -------: | ------: | ------------------------------ | -------------- |
| 46.7% |  307 MiB |   3,261 | `Compile::optimize_loops`      | `libjvm.dylib` |
| 45.6% |  300 MiB |   3,720 | `PhaseIdealLoop::optimize`     | `libjvm.dylib` |
|  1.7% |   11 MiB |     264 | `PhaseCCP::do_transform`       | `libjvm.dylib` |
|  1.6% | 10.8 MiB |     185 | `PhaseIterGVN::optimize`       | `libjvm.dylib` |
|  1.4% | 8.96 MiB |     191 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 99.0% |  601 MiB |   6,886 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  1.0% | 6.14 MiB |      95 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                                             | Location       |
| ----: | -------: | ------: | ------------------------------------------------------------------ | -------------- |
| 68.8% |  413 MiB |   2,716 | `PhaseIdealLoop::Dominators`                                       | `libjvm.dylib` |
|  6.9% | 41.6 MiB |     924 | `Node_Array::grow`                                                 | `libjvm.dylib` |
|  6.9% | 41.5 MiB |     920 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib` |
|  5.6% | 33.4 MiB |     828 | `IdealLoopTree::loop_predication`                                  | `libjvm.dylib` |
|  4.7% | 28.4 MiB |     576 | `Arena::grow`                                                      | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 601 MiB |   6,886 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                            | Location       |
| ----: | -------: | ------: | --------------------------------- | -------------- |
| 77.4% |  351 MiB |   3,234 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 17.6% | 79.9 MiB |   1,214 | `Matcher::match`                  | `libjvm.dylib` |
|  2.1% | 9.41 MiB |     190 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  1.4% | 6.39 MiB |     366 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  1.2% | 5.46 MiB |     113 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                 | Location       |
| -----: | ------: | ------: | ---------------------- | -------------- |
| 100.0% | 413 MiB |   2,715 | `Arena::grow`          | `libjvm.dylib` |
|  <0.1% |  32 KiB |       1 | `VectorSet::VectorSet` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 71.2% |  250 MiB |   1,889 | `PhaseIFG::init`                         | `libjvm.dylib` |
| 24.5% |   86 MiB |     984 | `PhaseLive::compute`                     | `libjvm.dylib` |
|  2.6% | 9.07 MiB |     220 | `PhaseChaitin::Split`                    | `libjvm.dylib` |
|  0.6% | 2.04 MiB |      38 | `PhaseRegAlloc::alloc_node_regs`         | `libjvm.dylib` |
|  0.5% | 1.78 MiB |      43 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 184 MiB |   3,942 | `Arena::grow` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 41.5 MiB |     922 | `Arena::grow` | `libjvm.dylib` |

##### `IdealLoopTree::loop_predication` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                  | Location       |
| -----: | -------: | ------: | --------------------------------------- | -------------- |
| 100.0% | 33.4 MiB |     828 | `PhaseIdealLoop::loop_predication_impl` | `libjvm.dylib` |
|  43.1% | 14.4 MiB |     367 | `IdealLoopTree::loop_predication`       | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                    | Location       |
| -----: | -------: | ------: | ------------------------- | -------------- |
| 100.0% | 21.9 MiB |     506 | `Parse::do_all_blocks`    | `libjvm.dylib` |
|   6.6% | 1.44 MiB |      32 | `Parse::build_exits`      | `libjvm.dylib` |
|   1.3% |  288 KiB |       9 | `GraphKit::set_map_clone` | `libjvm.dylib` |
|   0.9% |  192 KiB |       6 | `Parse::do_exits`         | `libjvm.dylib` |
|   0.7% |  160 KiB |       5 | `Parse::create_entry_map` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % |     Size | Samples | Callee         | Location       |
| -----: | -------: | ------: | -------------- | -------------- |
| 100.0% | 21.9 MiB |     533 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                          | Location       |
| ----: | -------: | ------: | ------------------------------- | -------------- |
| 99.1% | 21.8 MiB |     504 | `Parse::do_one_block`           | `libjvm.dylib` |
|  1.7% |  384 KiB |       7 | `Parse::ensure_phis_everywhere` | `libjvm.dylib` |
|  0.9% |  192 KiB |       5 | `Parse::merge_common`           | `libjvm.dylib` |
|  0.1% |   32 KiB |       1 | `GraphKit::uncommon_trap`       | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                   | Location       |
| ----: | -------: | ------: | ------------------------ | -------------- |
| 91.4% | 19.9 MiB |     461 | `Parse::do_call`         | `libjvm.dylib` |
| 29.4% | 6.41 MiB |     132 | `Parse::do_field_access` | `libjvm.dylib` |
| 10.6% | 2.31 MiB |      47 | `Parse::do_one_bytecode` | `libjvm.dylib` |
|  9.8% | 2.13 MiB |      47 | `Parse::do_if`           | `libjvm.dylib` |
|  8.3% | 1.81 MiB |      27 | `Parse::return_current`  | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                                | Location       |
| ----: | -------: | ------: | ----------------------------------------------------- | -------------- |
| 82.2% | 16.4 MiB |     388 | `PredictedCallGenerator::generate`                    | `libjvm.dylib` |
| 59.7% | 11.9 MiB |     238 | `ParseGenerator::generate`                            | `libjvm.dylib` |
|  2.8% |  576 KiB |      16 | `LibraryIntrinsic::generate`                          | `libjvm.dylib` |
|  1.6% |  320 KiB |      10 | `GraphKit::record_profiled_arguments_for_speculation` | `libjvm.dylib` |
|  1.1% |  224 KiB |       5 | `DirectCallGenerator::generate`                       | `libjvm.dylib` |

##### `PathFrequency::to` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                                               | Location       |
| ----: | -------: | ------: | -------------------------------------------------------------------- | -------------- |
| 98.7% | 19.5 MiB |     490 | `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` | `libjvm.dylib` |
|  1.3% |  256 KiB |       8 | `Node_Stack::grow`                                                   | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 19.5 MiB |     490 | `Arena::grow` | `libjvm.dylib` |

##### `IdealLoopTree::iteration_split` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                | Location       |
| ----: | -------: | ------: | ------------------------------------- | -------------- |
| 93.2% | 16.4 MiB |     295 | `IdealLoopTree::iteration_split`      | `libjvm.dylib` |
| 85.8% | 15.1 MiB |     267 | `IdealLoopTree::iteration_split_impl` | `libjvm.dylib` |
| 14.2% |  2.5 MiB |      55 | `PhaseIdealLoop::do_unswitching`      | `libjvm.dylib` |

## Hottest call stacks

Call stacks ranked by native bytes allocated in their leaf frame.

Common call stack: `Compile::Compile` (`libjvm.dylib`) ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 21.3% |  250 MiB |   1,889 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                                            |
| 18.0% |  211 MiB |   1,311 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                                 |
| 17.2% |  202 MiB |   1,404 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                             |
|  7.3% | 85.8 MiB |     979 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                                        |
|  2.4% | 27.8 MiB |     268 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                                             |
|  1.9% | 21.8 MiB |     264 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                                       |
|  1.8% | 21.5 MiB |     433 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                       |
|  1.8% | 21.5 MiB |     433 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                           |
|  1.7% | 20.1 MiB |     491 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                   |
|  1.7% | 19.9 MiB |     487 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                       |
|  1.5% | 17.5 MiB |     345 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                                                                |
|  0.9% | 10.9 MiB |     231 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                                                            |
|  0.9% | 10.8 MiB |     260 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize`                                                                                                                                                                                       |
|  0.7% | 8.38 MiB |     179 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                       |
|  0.7% | 8.03 MiB |     129 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize`                                                                                                                                                                                         |
|  0.6% |  7.6 MiB |     156 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                    |
|  0.6% | 7.41 MiB |     124 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless`                                                                                                                                                                                  |
|  0.5% | 5.63 MiB |     102 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node::out_grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                      |
|  0.5% | 5.56 MiB |     125 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` ← `PathFrequency::to` ← `PhaseIdealLoop::loop_predication_impl` ← `IdealLoopTree::loop_predication` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` |
|  0.4% | 4.85 MiB |     122 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseIdealLoop::set_idom` ← `PhaseIdealLoop::split_thru_region` ← `PhaseIdealLoop::do_split_if` ← `PhaseIdealLoop::split_if_with_blocks` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`            |
