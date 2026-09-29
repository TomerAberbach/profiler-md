# Allocated native memory profile

Allocated 1.09 GiB over 169,581 samples (6.72 KiB per sample).

| Category |      % |     Size | Samples |
| -------- | -----: | -------: | ------: |
| Native   | 100.0% | 1.09 GiB | 169,581 |

## Hottest functions

### Self size

Functions ranked by native bytes allocated directly in the function body, excluding callees.

#### Categories

##### Native

|      % |     Size | Samples | Function       | Location                 |
| -----: | -------: | ------: | -------------- | ------------------------ |
| 100.0% | 1.09 GiB | 168,691 | `malloc_hook`  | `libasyncProfiler.dylib` |
|  <0.1% |  193 KiB |     845 | `realloc_hook` | `libasyncProfiler.dylib` |
|  <0.1% |  122 KiB |      45 | `calloc_hook`  | `libasyncProfiler.dylib` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location        |
| ----: | -------: | ------: | ----------------------------------------- | --------------- |
| 99.2% | 1.08 GiB | 157,685 | `os::malloc`                              | `libjvm.dylib`  |
|  0.5% | 5.92 MiB |   1,329 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |
|  0.1% | 1.15 MiB |   1,181 | `Java_java_lang_ClassLoader_defineClass0` | `libjava.dylib` |
| <0.1% |  384 KiB |      12 | `updatewindow`                            | `libzip.dylib`  |
| <0.1% |  313 KiB |   2,639 | `getStringPlatformChars0`                 | `libjava.dylib` |

##### `realloc_hook` (`libasyncProfiler.dylib`)

|      % |    Size | Samples | Caller        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 193 KiB |     845 | `os::realloc` | `libjvm.dylib` |

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
| 100.0% | 1.09 GiB | 168,691 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
|  99.2% | 1.08 GiB | 157,685 | `os::malloc`                               | `libjvm.dylib`            |
|  98.1% | 1.07 GiB |  55,877 | `_pthread_start`                           | `libsystem_pthread.dylib` |
|  98.1% | 1.07 GiB |  55,877 | `thread_start`                             | `libsystem_pthread.dylib` |
|  98.1% | 1.07 GiB |  55,724 | `Thread::call_run`                         | `libjvm.dylib`            |
|  98.1% | 1.07 GiB |  55,724 | `thread_native_entry`                      | `libjvm.dylib`            |
|  98.1% | 1.07 GiB |  52,411 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
|  98.1% | 1.07 GiB |  51,967 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
|  98.1% | 1.07 GiB |  51,913 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  97.9% | 1.06 GiB |  13,320 | `Chunk::operator new`                      | `libjvm.dylib`            |
|  97.9% | 1.06 GiB |  13,277 | `Arena::grow`                              | `libjvm.dylib`            |
|  97.2% | 1.06 GiB |  17,476 | `Compile::Compile`                         | `libjvm.dylib`            |
|  97.2% | 1.06 GiB |  17,476 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  56.0% |  623 MiB |   7,679 | `Compile::Optimize`                        | `libjvm.dylib`            |
|  51.7% |  576 MiB |   6,668 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib`            |
|  51.1% |  569 MiB |   6,562 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib`            |
|  51.1% |  569 MiB |   6,562 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib`            |
|  38.5% |  429 MiB |   7,980 | `Compile::Code_Gen`                        | `libjvm.dylib`            |
|  35.3% |  393 MiB |   2,602 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`            |
|  29.9% |  332 MiB |   3,145 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib`            |

#### Categories

##### Native

|      % |     Size | Samples | Function                                                             | Location                  |
| -----: | -------: | ------: | -------------------------------------------------------------------- | ------------------------- |
| 100.0% | 1.09 GiB | 168,691 | `malloc_hook`                                                        | `libasyncProfiler.dylib`  |
|  99.2% | 1.08 GiB | 157,685 | `os::malloc`                                                         | `libjvm.dylib`            |
|  98.1% | 1.07 GiB |  55,877 | `_pthread_start`                                                     | `libsystem_pthread.dylib` |
|  98.1% | 1.07 GiB |  55,877 | `thread_start`                                                       | `libsystem_pthread.dylib` |
|  98.1% | 1.07 GiB |  55,724 | `Thread::call_run`                                                   | `libjvm.dylib`            |
|  98.1% | 1.07 GiB |  55,724 | `thread_native_entry`                                                | `libjvm.dylib`            |
|  98.1% | 1.07 GiB |  52,411 | `JavaThread::thread_main_inner`                                      | `libjvm.dylib`            |
|  97.9% | 1.06 GiB |  13,320 | `Chunk::operator new`                                                | `libjvm.dylib`            |
|  97.9% | 1.06 GiB |  13,277 | `Arena::grow`                                                        | `libjvm.dylib`            |
|  15.6% |  174 MiB |   3,734 | `Arena::Arealloc`                                                    | `libjvm.dylib`            |
|   3.6% | 39.7 MiB |     893 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to`   | `libjvm.dylib`            |
|   2.9% | 32.2 MiB |     793 | `IdealLoopTree::loop_predication`                                    | `libjvm.dylib`            |
|   1.9% |   21 MiB |     531 | `Parse::Parse`                                                       | `libjvm.dylib`            |
|   1.9% |   21 MiB |     531 | `ParseGenerator::generate`                                           | `libjvm.dylib`            |
|   1.9% |   21 MiB |     504 | `Parse::do_one_block`                                                | `libjvm.dylib`            |
|   1.9% |   21 MiB |     504 | `Parse::do_all_blocks`                                               | `libjvm.dylib`            |
|   1.7% | 19.3 MiB |     465 | `Parse::do_call`                                                     | `libjvm.dylib`            |
|   1.7% | 18.4 MiB |     468 | `PathFrequency::to`                                                  | `libjvm.dylib`            |
|   1.6% | 17.8 MiB |     448 | `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` | `libjvm.dylib`            |
|   1.4% | 15.3 MiB |     379 | `PredictedCallGenerator::generate`                                   | `libjvm.dylib`            |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `os::malloc` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location                 |
| -----: | -------: | ------: | ------------- | ------------------------ |
| 100.0% | 1.08 GiB | 157,685 | `malloc_hook` | `libasyncProfiler.dylib` |
|   0.1% | 1.18 MiB |   3,860 | `os::malloc`  | `libjvm.dylib`           |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |     Size | Samples | Callee                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 1.07 GiB |  55,724 | `thread_native_entry` | `libjvm.dylib` |
|  <0.1% |   56 KiB |     153 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % |     Size | Samples | Callee           | Location                  |
| -----: | -------: | ------: | ---------------- | ------------------------- |
| 100.0% | 1.07 GiB |  55,877 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                          | Location       |
| ----: | -------: | ------: | ------------------------------- | -------------- |
| 99.9% | 1.07 GiB |  52,411 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| <0.1% |  398 KiB |   1,193 | `VMThread::run`                 | `libjvm.dylib` |
| <0.1% |  250 KiB |   2,038 | `WorkerThread::run`             | `libjvm.dylib` |
| <0.1% | 22.7 KiB |      46 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
| <0.1% | 8.23 KiB |       5 | `JavaThread::post_run`          | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |     Size | Samples | Callee             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.07 GiB |  55,724 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                | Location       |
| -----: | -------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 1.07 GiB |  51,967 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |
|  <0.1% | 37.8 KiB |     444 | `ServiceThread::service_thread_entry` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                         | Location       |
| -----: | -------: | ------: | ---------------------------------------------- | -------------- |
| 100.0% | 1.07 GiB |  51,913 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  <0.1% | 24.8 KiB |      50 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |
|  <0.1% |   24 KiB |       3 | `CompileQueue::get`                            | `libjvm.dylib` |
|  <0.1% |  1,000 B |       1 | `CompileBroker::init_compiler_runtime`         | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                              | Location       |
| ----: | -------: | ------: | ----------------------------------- | -------------- |
| 99.1% | 1.06 GiB |  17,476 | `C2Compiler::compile_method`        | `libjvm.dylib` |
|  0.8% | 9.18 MiB |  28,629 | `Compiler::compile_method`          | `libjvm.dylib` |
| <0.1% |  161 KiB |       6 | `ciEnv::ciEnv`                      | `libjvm.dylib` |
| <0.1% | 65.3 KiB |   5,799 | `CompilationLog::log_compile`       | `libjvm.dylib` |
| <0.1% |    592 B |       2 | `JavaThread::push_jni_handle_block` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |     Size | Samples | Callee       | Location       |
| -----: | -------: | ------: | ------------ | -------------- |
| 100.0% | 1.06 GiB |  13,320 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 1.06 GiB |  13,277 | `Chunk::operator new` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 57.6% |  623 MiB |   7,679 | `Compile::Optimize`                      | `libjvm.dylib` |
| 39.6% |  429 MiB |   7,980 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  1.9% | 20.7 MiB |     525 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.6% | 6.97 MiB |     120 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.2% | 1.69 MiB |      41 | `NodeHash::NodeHash`                     | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |     Size | Samples | Callee             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.06 GiB |  17,476 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                         | Location       |
| ----: | -------: | ------: | ------------------------------ | -------------- |
| 46.4% |  289 MiB |   3,567 | `PhaseIdealLoop::optimize`     | `libjvm.dylib` |
| 46.0% |  287 MiB |   3,101 | `Compile::optimize_loops`      | `libjvm.dylib` |
|  1.7% | 10.6 MiB |     254 | `PhaseCCP::do_transform`       | `libjvm.dylib` |
|  1.5% |  9.6 MiB |     173 | `PhaseIterGVN::optimize`       | `libjvm.dylib` |
|  1.4% | 9.02 MiB |     195 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 98.9% |  569 MiB |   6,562 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  1.1% | 6.48 MiB |     106 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                                             | Location       |
| ----: | -------: | ------: | ------------------------------------------------------------------ | -------------- |
| 69.0% |  393 MiB |   2,602 | `PhaseIdealLoop::Dominators`                                       | `libjvm.dylib` |
|  7.0% | 39.7 MiB |     896 | `Node_Array::grow`                                                 | `libjvm.dylib` |
|  7.0% | 39.6 MiB |     891 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib` |
|  5.7% | 32.2 MiB |     793 | `IdealLoopTree::loop_predication`                                  | `libjvm.dylib` |
|  4.7% | 26.7 MiB |     540 | `Arena::grow`                                                      | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 569 MiB |   6,562 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                            | Location       |
| ----: | -------: | ------: | --------------------------------- | -------------- |
| 77.5% |  332 MiB |   3,145 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 17.8% | 76.2 MiB |   1,187 | `Matcher::match`                  | `libjvm.dylib` |
|  2.0% | 8.61 MiB |     173 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  1.3% | 5.37 MiB |     333 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  1.1% | 4.71 MiB |      99 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                 | Location       |
| -----: | ------: | ------: | ---------------------- | -------------- |
| 100.0% | 393 MiB |   2,601 | `Arena::grow`          | `libjvm.dylib` |
|  <0.1% |  32 KiB |       1 | `VectorSet::VectorSet` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 71.1% |  236 MiB |   1,834 | `PhaseIFG::init`                         | `libjvm.dylib` |
| 24.3% | 80.8 MiB |     952 | `PhaseLive::compute`                     | `libjvm.dylib` |
|  2.7% | 9.13 MiB |     217 | `PhaseChaitin::Split`                    | `libjvm.dylib` |
|  0.6% | 2.09 MiB |      52 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |
|  0.5% | 1.77 MiB |      32 | `PhaseRegAlloc::alloc_node_regs`         | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 174 MiB |   3,734 | `Arena::grow` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 39.7 MiB |     893 | `Arena::grow` | `libjvm.dylib` |

##### `IdealLoopTree::loop_predication` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                  | Location       |
| -----: | -------: | ------: | --------------------------------------- | -------------- |
| 100.0% | 32.2 MiB |     793 | `PhaseIdealLoop::loop_predication_impl` | `libjvm.dylib` |
|  45.2% | 14.6 MiB |     365 | `IdealLoopTree::loop_predication`       | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                    | Location       |
| -----: | ------: | ------: | ------------------------- | -------------- |
| 100.0% |  21 MiB |     504 | `Parse::do_all_blocks`    | `libjvm.dylib` |
|   4.5% | 960 KiB |      24 | `Parse::build_exits`      | `libjvm.dylib` |
|   2.4% | 512 KiB |      14 | `GraphKit::set_map_clone` | `libjvm.dylib` |
|   0.7% | 160 KiB |       4 | `Parse::do_exits`         | `libjvm.dylib` |
|   0.3% |  64 KiB |       2 | `Parse::create_entry_map` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % |   Size | Samples | Callee         | Location       |
| -----: | -----: | ------: | -------------- | -------------- |
| 100.0% | 21 MiB |     531 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                   | Location       |
| ----: | -------: | ------: | ------------------------ | -------------- |
| 91.8% | 19.3 MiB |     465 | `Parse::do_call`         | `libjvm.dylib` |
| 26.9% | 5.66 MiB |     119 | `Parse::do_field_access` | `libjvm.dylib` |
| 11.9% |  2.5 MiB |      49 | `Parse::do_one_bytecode` | `libjvm.dylib` |
|  8.5% | 1.78 MiB |      42 | `Parse::do_if`           | `libjvm.dylib` |
|  5.4% | 1.13 MiB |      20 | `Parse::return_current`  | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                          | Location       |
| -----: | ------: | ------: | ------------------------------- | -------------- |
| 100.0% |  21 MiB |     504 | `Parse::do_one_block`           | `libjvm.dylib` |
|   1.5% | 320 KiB |       8 | `Parse::merge_common`           | `libjvm.dylib` |
|   1.0% | 224 KiB |       6 | `Parse::ensure_phis_everywhere` | `libjvm.dylib` |
|   0.3% |  64 KiB |       2 | `GraphKit::clone_map`           | `libjvm.dylib` |
|   0.1% |  32 KiB |       1 | `GraphKit::uncommon_trap`       | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                                | Location       |
| ----: | -------: | ------: | ----------------------------------------------------- | -------------- |
| 79.3% | 15.3 MiB |     378 | `PredictedCallGenerator::generate`                    | `libjvm.dylib` |
| 60.8% | 11.7 MiB |     248 | `ParseGenerator::generate`                            | `libjvm.dylib` |
|  3.2% |  640 KiB |      15 | `LibraryIntrinsic::generate`                          | `libjvm.dylib` |
|  1.3% |  261 KiB |      42 | `Compile::call_generator`                             | `libjvm.dylib` |
|  1.1% |  224 KiB |       7 | `GraphKit::record_profiled_arguments_for_speculation` | `libjvm.dylib` |

##### `PathFrequency::to` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                                               | Location       |
| ----: | -------: | ------: | -------------------------------------------------------------------- | -------------- |
| 96.6% | 17.8 MiB |     448 | `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` | `libjvm.dylib` |
|  3.4% |  640 KiB |      20 | `Node_Stack::grow`                                                   | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 17.8 MiB |     448 | `Arena::grow` | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                               | Location       |
| ----: | -------: | ------: | ------------------------------------ | -------------- |
| 96.9% | 14.9 MiB |     367 | `ParseGenerator::generate`           | `libjvm.dylib` |
| 41.0% | 6.29 MiB |     163 | `PredictedCallGenerator::generate`   | `libjvm.dylib` |
|  3.9% |  608 KiB |      13 | `GraphKit::subtype_check_receiver`   | `libjvm.dylib` |
|  2.9% |  448 KiB |      10 | `PreserveJVMState::PreserveJVMState` | `libjvm.dylib` |
|  2.4% |  384 KiB |      10 | `GraphKit::type_check_receiver`      | `libjvm.dylib` |

## Hottest call stacks

Call stacks ranked by native bytes allocated in their leaf frame.

Common call stack: `Compile::Compile` (`libjvm.dylib`) ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 21.2% |  236 MiB |   1,834 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                                            |
| 17.7% |  197 MiB |   1,248 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                                 |
| 17.6% |  195 MiB |   1,353 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                             |
|  7.2% | 80.2 MiB |     935 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                                        |
|  2.4% | 26.2 MiB |     259 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                                             |
|  1.8% | 20.3 MiB |     252 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                                       |
|  1.8% | 19.9 MiB |     410 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                           |
|  1.8% | 19.8 MiB |     407 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                       |
|  1.8% | 19.8 MiB |     489 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                   |
|  1.8% | 19.6 MiB |     481 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                       |
|  1.5% | 16.3 MiB |     322 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                                                                |
|  0.9% | 10.5 MiB |     250 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize`                                                                                                                                                                                       |
|  0.9% | 10.4 MiB |     218 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                                                            |
|  0.7% | 8.03 MiB |     172 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                       |
|  0.7% | 7.38 MiB |     121 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize`                                                                                                                                                                                         |
|  0.7% | 7.35 MiB |     151 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                    |
|  0.6% | 6.97 MiB |     120 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless`                                                                                                                                                                                  |
|  0.5% | 5.06 MiB |      87 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node::out_grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                      |
|  0.4% | 4.91 MiB |     111 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` ← `PathFrequency::to` ← `PhaseIdealLoop::loop_predication_impl` ← `IdealLoopTree::loop_predication` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` |
|  0.4% | 4.35 MiB |     111 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseIdealLoop::set_idom` ← `PhaseIdealLoop::split_thru_region` ← `PhaseIdealLoop::do_split_if` ← `PhaseIdealLoop::split_if_with_blocks` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`            |
