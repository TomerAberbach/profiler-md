# Allocated native memory profile

Allocated 1.13 GiB over 170,038 samples (6.94 KiB per sample).

| Category |      % |     Size | Samples |
| -------- | -----: | -------: | ------: |
| Native   | 100.0% | 1.13 GiB | 170,038 |

## Hottest functions

### Self size

Functions ranked by native bytes allocated directly in the function body, excluding callees.

#### Categories

##### Native

|      % |     Size | Samples | Function       | Location                 |
| -----: | -------: | ------: | -------------- | ------------------------ |
| 100.0% | 1.13 GiB | 169,159 | `malloc_hook`  | `libasyncProfiler.dylib` |
|  <0.1% |  190 KiB |     834 | `realloc_hook` | `libasyncProfiler.dylib` |
|  <0.1% |  122 KiB |      45 | `calloc_hook`  | `libasyncProfiler.dylib` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location        |
| ----: | -------: | ------: | ----------------------------------------- | --------------- |
| 99.3% | 1.12 GiB | 158,149 | `os::malloc`                              | `libjvm.dylib`  |
|  0.5% | 5.92 MiB |   1,329 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |
|  0.1% | 1.15 MiB |   1,181 | `Java_java_lang_ClassLoader_defineClass0` | `libjava.dylib` |
| <0.1% |  384 KiB |      12 | `updatewindow`                            | `libzip.dylib`  |
| <0.1% |  313 KiB |   2,639 | `getStringPlatformChars0`                 | `libjava.dylib` |

##### `realloc_hook` (`libasyncProfiler.dylib`)

|      % |    Size | Samples | Caller        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 190 KiB |     834 | `os::realloc` | `libjvm.dylib` |

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
| 100.0% | 1.13 GiB | 169,159 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
|  99.2% | 1.12 GiB | 158,149 | `os::malloc`                               | `libjvm.dylib`            |
|  98.2% |  1.1 GiB |  56,295 | `_pthread_start`                           | `libsystem_pthread.dylib` |
|  98.2% |  1.1 GiB |  56,295 | `thread_start`                             | `libsystem_pthread.dylib` |
|  98.2% |  1.1 GiB |  56,142 | `Thread::call_run`                         | `libjvm.dylib`            |
|  98.2% |  1.1 GiB |  56,142 | `thread_native_entry`                      | `libjvm.dylib`            |
|  98.1% |  1.1 GiB |  52,760 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
|  98.1% |  1.1 GiB |  52,312 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
|  98.1% |  1.1 GiB |  52,236 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  98.0% |  1.1 GiB |  13,609 | `Chunk::operator new`                      | `libjvm.dylib`            |
|  98.0% |  1.1 GiB |  13,566 | `Arena::grow`                              | `libjvm.dylib`            |
|  97.3% | 1.09 GiB |  17,697 | `Compile::Compile`                         | `libjvm.dylib`            |
|  97.3% | 1.09 GiB |  17,697 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  56.2% |  648 MiB |   7,891 | `Compile::Optimize`                        | `libjvm.dylib`            |
|  51.7% |  596 MiB |   6,816 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib`            |
|  51.2% |  590 MiB |   6,718 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib`            |
|  51.2% |  590 MiB |   6,718 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib`            |
|  38.1% |  439 MiB |   7,948 | `Compile::Code_Gen`                        | `libjvm.dylib`            |
|  35.1% |  404 MiB |   2,634 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`            |
|  29.5% |  340 MiB |   3,122 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib`            |

#### Categories

##### Native

|      % |     Size | Samples | Function                                                             | Location                  |
| -----: | -------: | ------: | -------------------------------------------------------------------- | ------------------------- |
| 100.0% | 1.13 GiB | 169,159 | `malloc_hook`                                                        | `libasyncProfiler.dylib`  |
|  99.2% | 1.12 GiB | 158,149 | `os::malloc`                                                         | `libjvm.dylib`            |
|  98.2% |  1.1 GiB |  56,295 | `_pthread_start`                                                     | `libsystem_pthread.dylib` |
|  98.2% |  1.1 GiB |  56,295 | `thread_start`                                                       | `libsystem_pthread.dylib` |
|  98.2% |  1.1 GiB |  56,142 | `Thread::call_run`                                                   | `libjvm.dylib`            |
|  98.2% |  1.1 GiB |  56,142 | `thread_native_entry`                                                | `libjvm.dylib`            |
|  98.1% |  1.1 GiB |  52,760 | `JavaThread::thread_main_inner`                                      | `libjvm.dylib`            |
|  98.0% |  1.1 GiB |  13,609 | `Chunk::operator new`                                                | `libjvm.dylib`            |
|  98.0% |  1.1 GiB |  13,566 | `Arena::grow`                                                        | `libjvm.dylib`            |
|  16.0% |  185 MiB |   3,889 | `Arena::Arealloc`                                                    | `libjvm.dylib`            |
|   3.5% | 40.9 MiB |     892 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to`   | `libjvm.dylib`            |
|   2.9% | 33.3 MiB |     831 | `IdealLoopTree::loop_predication`                                    | `libjvm.dylib`            |
|   2.1% | 24.2 MiB |     582 | `Parse::Parse`                                                       | `libjvm.dylib`            |
|   2.1% | 24.2 MiB |     582 | `ParseGenerator::generate`                                           | `libjvm.dylib`            |
|   2.1% | 24.2 MiB |     556 | `Parse::do_all_blocks`                                               | `libjvm.dylib`            |
|   2.1% |   24 MiB |     554 | `Parse::do_one_block`                                                | `libjvm.dylib`            |
|   1.9% | 22.2 MiB |     515 | `Parse::do_call`                                                     | `libjvm.dylib`            |
|   1.7% | 19.1 MiB |     485 | `PathFrequency::to`                                                  | `libjvm.dylib`            |
|   1.6% | 18.7 MiB |     474 | `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` | `libjvm.dylib`            |
|   1.6% | 18.4 MiB |     431 | `PredictedCallGenerator::generate`                                   | `libjvm.dylib`            |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `os::malloc` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location                 |
| -----: | -------: | ------: | ------------- | ------------------------ |
| 100.0% | 1.12 GiB | 158,149 | `malloc_hook` | `libasyncProfiler.dylib` |
|   0.1% | 1.18 MiB |   3,860 | `os::malloc`  | `libjvm.dylib`           |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Callee                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 1.1 GiB |  56,142 | `thread_native_entry` | `libjvm.dylib` |
|  <0.1% |  56 KiB |     153 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Callee           | Location                  |
| -----: | ------: | ------: | ---------------- | ------------------------- |
| 100.0% | 1.1 GiB |  56,295 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                          | Location       |
| ----: | -------: | ------: | ------------------------------- | -------------- |
| 99.9% |  1.1 GiB |  52,760 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| <0.1% |  400 KiB |   1,181 | `VMThread::run`                 | `libjvm.dylib` |
| <0.1% |  362 KiB |   2,107 | `WorkerThread::run`             | `libjvm.dylib` |
| <0.1% | 22.9 KiB |      48 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
| <0.1% | 16.4 KiB |       9 | `JavaThread::post_run`          | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |    Size | Samples | Callee             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 1.1 GiB |  56,142 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                | Location       |
| -----: | -------: | ------: | ------------------------------------- | -------------- |
| 100.0% |  1.1 GiB |  52,312 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |
|  <0.1% | 37.8 KiB |     448 | `ServiceThread::service_thread_entry` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                         | Location       |
| -----: | -------: | ------: | ---------------------------------------------- | -------------- |
| 100.0% |  1.1 GiB |  52,236 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  <0.1% |   36 KiB |      72 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |
|  <0.1% |   16 KiB |       2 | `CompileQueue::get`                            | `libjvm.dylib` |
|  <0.1% | 1.95 KiB |       2 | `CompileBroker::init_compiler_runtime`         | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                              | Location       |
| ----: | -------: | ------: | ----------------------------------- | -------------- |
| 99.2% | 1.09 GiB |  17,697 | `C2Compiler::compile_method`        | `libjvm.dylib` |
|  0.8% | 9.02 MiB |  28,697 | `Compiler::compile_method`          | `libjvm.dylib` |
| <0.1% |  226 KiB |       9 | `ciEnv::ciEnv`                      | `libjvm.dylib` |
| <0.1% | 65.6 KiB |   5,829 | `CompilationLog::log_compile`       | `libjvm.dylib` |
| <0.1% |    888 B |       3 | `JavaThread::push_jni_handle_block` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |    Size | Samples | Callee       | Location       |
| -----: | ------: | ------: | ------------ | -------------- |
| 100.0% | 1.1 GiB |  13,609 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 1.1 GiB |  13,566 | `Chunk::operator new` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 57.8% |  648 MiB |   7,891 | `Compile::Optimize`                      | `libjvm.dylib` |
| 39.2% |  439 MiB |   7,948 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  2.1% | 23.8 MiB |     575 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.7% | 7.78 MiB |     121 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.2% | 1.69 MiB |      41 | `NodeHash::NodeHash`                     | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |     Size | Samples | Callee             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.09 GiB |  17,697 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                         | Location       |
| ----: | -------: | ------: | ------------------------------ | -------------- |
| 46.2% |  299 MiB |   3,666 | `PhaseIdealLoop::optimize`     | `libjvm.dylib` |
| 45.8% |  296 MiB |   3,150 | `Compile::optimize_loops`      | `libjvm.dylib` |
|  1.7% | 11.3 MiB |     266 | `PhaseCCP::do_transform`       | `libjvm.dylib` |
|  1.6% | 10.5 MiB |     179 | `PhaseIterGVN::optimize`       | `libjvm.dylib` |
|  1.5% | 9.65 MiB |     201 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 99.0% |  590 MiB |   6,718 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  1.0% | 6.11 MiB |      98 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                                             | Location       |
| ----: | -------: | ------: | ------------------------------------------------------------------ | -------------- |
| 68.5% |  404 MiB |   2,634 | `PhaseIdealLoop::Dominators`                                       | `libjvm.dylib` |
|  6.9% | 40.8 MiB |     894 | `Node_Array::grow`                                                 | `libjvm.dylib` |
|  6.9% | 40.7 MiB |     889 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib` |
|  5.6% | 33.3 MiB |     831 | `IdealLoopTree::loop_predication`                                  | `libjvm.dylib` |
|  5.0% | 29.3 MiB |     592 | `Arena::grow`                                                      | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 590 MiB |   6,718 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                            | Location       |
| ----: | -------: | ------: | --------------------------------- | -------------- |
| 77.3% |  340 MiB |   3,122 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 17.6% | 77.2 MiB |   1,169 | `Matcher::match`                  | `libjvm.dylib` |
|  2.1% | 9.06 MiB |     183 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  1.5% | 6.72 MiB |     365 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  1.2% | 5.17 MiB |     106 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % |    Size | Samples | Callee         | Location       |
| -----: | ------: | ------: | -------------- | -------------- |
| 100.0% | 404 MiB |   2,633 | `Arena::grow`  | `libjvm.dylib` |
|  <0.1% |  32 KiB |       1 | `NTarjan::DFS` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 71.1% |  241 MiB |   1,816 | `PhaseIFG::init`                         | `libjvm.dylib` |
| 24.3% | 82.4 MiB |     932 | `PhaseLive::compute`                     | `libjvm.dylib` |
|  2.8% | 9.44 MiB |     233 | `PhaseChaitin::Split`                    | `libjvm.dylib` |
|  0.6% | 1.94 MiB |      46 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |
|  0.6% |  1.9 MiB |      35 | `PhaseRegAlloc::alloc_node_regs`         | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 185 MiB |   3,889 | `Arena::grow` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 40.9 MiB |     892 | `Arena::grow` | `libjvm.dylib` |

##### `IdealLoopTree::loop_predication` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                  | Location       |
| -----: | -------: | ------: | --------------------------------------- | -------------- |
| 100.0% | 33.3 MiB |     831 | `PhaseIdealLoop::loop_predication_impl` | `libjvm.dylib` |
|  45.3% | 15.1 MiB |     388 | `IdealLoopTree::loop_predication`       | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                    | Location       |
| -----: | -------: | ------: | ------------------------- | -------------- |
| 100.0% | 24.2 MiB |     556 | `Parse::do_all_blocks`    | `libjvm.dylib` |
|   7.8% | 1.88 MiB |      32 | `Parse::build_exits`      | `libjvm.dylib` |
|   1.6% |  384 KiB |      12 | `GraphKit::set_map_clone` | `libjvm.dylib` |
|   1.0% |  256 KiB |       6 | `Parse::do_exits`         | `libjvm.dylib` |
|   0.4% |   96 KiB |       3 | `Parse::create_entry_map` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % |     Size | Samples | Callee         | Location       |
| -----: | -------: | ------: | -------------- | -------------- |
| 100.0% | 24.2 MiB |     582 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|     % |    Size | Samples | Callee                          | Location       |
| ----: | ------: | ------: | ------------------------------- | -------------- |
| 99.2% |  24 MiB |     554 | `Parse::do_one_block`           | `libjvm.dylib` |
|  2.1% | 512 KiB |      10 | `Parse::ensure_phis_everywhere` | `libjvm.dylib` |
|  0.8% | 192 KiB |       5 | `Parse::merge_common`           | `libjvm.dylib` |
|  0.1% |  32 KiB |       1 | `GraphKit::uncommon_trap`       | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                   | Location       |
| ----: | -------: | ------: | ------------------------ | -------------- |
| 92.6% | 22.2 MiB |     515 | `Parse::do_call`         | `libjvm.dylib` |
| 26.3% | 6.31 MiB |     128 | `Parse::do_field_access` | `libjvm.dylib` |
|  9.4% | 2.25 MiB |      54 | `Parse::do_if`           | `libjvm.dylib` |
|  8.9% | 2.13 MiB |      47 | `Parse::do_one_bytecode` | `libjvm.dylib` |
|  7.0% | 1.69 MiB |      24 | `Parse::return_current`  | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                                | Location       |
| ----: | -------: | ------: | ----------------------------------------------------- | -------------- |
| 82.7% | 18.4 MiB |     430 | `PredictedCallGenerator::generate`                    | `libjvm.dylib` |
| 58.2% | 12.9 MiB |     261 | `ParseGenerator::generate`                            | `libjvm.dylib` |
|  2.8% |  640 KiB |      19 | `LibraryIntrinsic::generate`                          | `libjvm.dylib` |
|  1.4% |  325 KiB |      44 | `Compile::call_generator`                             | `libjvm.dylib` |
|  1.3% |  288 KiB |       9 | `GraphKit::record_profiled_arguments_for_speculation` | `libjvm.dylib` |

##### `PathFrequency::to` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                                               | Location       |
| ----: | -------: | ------: | -------------------------------------------------------------------- | -------------- |
| 98.2% | 18.7 MiB |     474 | `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` | `libjvm.dylib` |
|  1.8% |  352 KiB |      11 | `Node_Stack::grow`                                                   | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 18.7 MiB |     474 | `Arena::grow` | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                               | Location       |
| ----: | -------: | ------: | ------------------------------------ | -------------- |
| 96.8% | 17.8 MiB |     415 | `ParseGenerator::generate`           | `libjvm.dylib` |
| 44.2% | 8.13 MiB |     198 | `PredictedCallGenerator::generate`   | `libjvm.dylib` |
|  4.3% |  800 KiB |      17 | `GraphKit::subtype_check_receiver`   | `libjvm.dylib` |
|  3.4% |  640 KiB |      15 | `PreserveJVMState::PreserveJVMState` | `libjvm.dylib` |
|  1.9% |  352 KiB |       9 | `GraphKit::null_check_common`        | `libjvm.dylib` |

## Hottest call stacks

Call stacks ranked by native bytes allocated in their leaf frame.

Common call stack: `Compile::Compile` (`libjvm.dylib`) ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 21.0% |  241 MiB |   1,816 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                                            |
| 17.7% |  204 MiB |   1,268 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                                 |
| 17.4% |  200 MiB |   1,365 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                             |
|  7.1% | 82.2 MiB |     926 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                                        |
|  2.3% | 26.6 MiB |     257 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                                             |
|  1.8% | 20.8 MiB |     416 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                           |
|  1.8% | 20.7 MiB |     248 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                                       |
|  1.8% | 20.7 MiB |     413 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                       |
|  1.7% | 20.1 MiB |     481 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                   |
|  1.7% | 19.9 MiB |     473 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                       |
|  1.5% | 17.7 MiB |     349 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                                                                |
|  1.0% | 11.6 MiB |     243 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                                                            |
|  1.0% | 11.2 MiB |     262 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize`                                                                                                                                                                                       |
|  0.7% | 8.25 MiB |     173 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                       |
|  0.7% | 8.06 MiB |     128 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize`                                                                                                                                                                                         |
|  0.7% | 7.75 MiB |     120 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless`                                                                                                                                                                                  |
|  0.7% | 7.56 MiB |     151 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                    |
|  0.5% |  5.5 MiB |      97 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node::out_grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                      |
|  0.5% | 5.44 MiB |     125 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` ← `PathFrequency::to` ← `PhaseIdealLoop::loop_predication_impl` ← `IdealLoopTree::loop_predication` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` |
|  0.4% | 4.85 MiB |     119 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseIdealLoop::set_idom` ← `PhaseIdealLoop::split_thru_region` ← `PhaseIdealLoop::do_split_if` ← `PhaseIdealLoop::split_if_with_blocks` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`            |
