# Allocated native memory profile

Allocated 1.06 GiB over 169,813 samples (6.56 KiB per sample).

| Category |      % |     Size | Samples |
| -------- | -----: | -------: | ------: |
| Native   | 100.0% | 1.06 GiB | 169,813 |

## Hottest functions

### Self size

Functions ranked by native bytes allocated directly in the function body, excluding callees.

#### Categories

##### Native

|      % |     Size | Samples | Function       | Location                 |
| -----: | -------: | ------: | -------------- | ------------------------ |
| 100.0% | 1.06 GiB | 168,923 | `malloc_hook`  | `libasyncProfiler.dylib` |
|  <0.1% |  194 KiB |     845 | `realloc_hook` | `libasyncProfiler.dylib` |
|  <0.1% |  122 KiB |      45 | `calloc_hook`  | `libasyncProfiler.dylib` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location        |
| ----: | -------: | ------: | ----------------------------------------- | --------------- |
| 99.2% | 1.05 GiB | 157,921 | `os::malloc`                              | `libjvm.dylib`  |
|  0.5% | 5.92 MiB |   1,329 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |
|  0.1% | 1.14 MiB |   1,175 | `Java_java_lang_ClassLoader_defineClass0` | `libjava.dylib` |
| <0.1% |  384 KiB |      12 | `updatewindow`                            | `libzip.dylib`  |
| <0.1% |  313 KiB |   2,639 | `getStringPlatformChars0`                 | `libjava.dylib` |

##### `realloc_hook` (`libasyncProfiler.dylib`)

|      % |    Size | Samples | Caller        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 194 KiB |     845 | `os::realloc` | `libjvm.dylib` |

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
| 100.0% | 1.06 GiB | 168,923 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
|  99.2% | 1.05 GiB | 157,921 | `os::malloc`                               | `libjvm.dylib`            |
|  98.1% | 1.04 GiB |  55,999 | `_pthread_start`                           | `libsystem_pthread.dylib` |
|  98.1% | 1.04 GiB |  55,999 | `thread_start`                             | `libsystem_pthread.dylib` |
|  98.1% | 1.04 GiB |  55,846 | `Thread::call_run`                         | `libjvm.dylib`            |
|  98.1% | 1.04 GiB |  55,846 | `thread_native_entry`                      | `libjvm.dylib`            |
|  98.0% | 1.04 GiB |  52,202 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
|  98.0% | 1.04 GiB |  51,756 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
|  98.0% | 1.04 GiB |  51,679 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  97.9% | 1.04 GiB |  13,109 | `Chunk::operator new`                      | `libjvm.dylib`            |
|  97.9% | 1.04 GiB |  13,066 | `Arena::grow`                              | `libjvm.dylib`            |
|  97.1% | 1.03 GiB |  17,221 | `Compile::Compile`                         | `libjvm.dylib`            |
|  97.1% | 1.03 GiB |  17,221 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  55.6% |  605 MiB |   7,456 | `Compile::Optimize`                        | `libjvm.dylib`            |
|  51.3% |  558 MiB |   6,461 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib`            |
|  50.8% |  552 MiB |   6,363 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib`            |
|  50.8% |  552 MiB |   6,363 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib`            |
|  38.8% |  422 MiB |   7,964 | `Compile::Code_Gen`                        | `libjvm.dylib`            |
|  35.4% |  385 MiB |   2,589 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`            |
|  30.0% |  327 MiB |   3,112 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib`            |

#### Categories

##### Native

|      % |     Size | Samples | Function                                                             | Location                  |
| -----: | -------: | ------: | -------------------------------------------------------------------- | ------------------------- |
| 100.0% | 1.06 GiB | 168,923 | `malloc_hook`                                                        | `libasyncProfiler.dylib`  |
|  99.2% | 1.05 GiB | 157,921 | `os::malloc`                                                         | `libjvm.dylib`            |
|  98.1% | 1.04 GiB |  55,999 | `_pthread_start`                                                     | `libsystem_pthread.dylib` |
|  98.1% | 1.04 GiB |  55,999 | `thread_start`                                                       | `libsystem_pthread.dylib` |
|  98.1% | 1.04 GiB |  55,846 | `Thread::call_run`                                                   | `libjvm.dylib`            |
|  98.1% | 1.04 GiB |  55,846 | `thread_native_entry`                                                | `libjvm.dylib`            |
|  98.0% | 1.04 GiB |  52,202 | `JavaThread::thread_main_inner`                                      | `libjvm.dylib`            |
|  97.9% | 1.04 GiB |  13,109 | `Chunk::operator new`                                                | `libjvm.dylib`            |
|  97.9% | 1.04 GiB |  13,066 | `Arena::grow`                                                        | `libjvm.dylib`            |
|  15.5% |  168 MiB |   3,676 | `Arena::Arealloc`                                                    | `libjvm.dylib`            |
|   3.5% | 38.4 MiB |     866 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to`   | `libjvm.dylib`            |
|   2.7% | 29.1 MiB |     719 | `IdealLoopTree::loop_predication`                                    | `libjvm.dylib`            |
|   1.9% | 20.5 MiB |     521 | `Parse::Parse`                                                       | `libjvm.dylib`            |
|   1.9% | 20.5 MiB |     521 | `ParseGenerator::generate`                                           | `libjvm.dylib`            |
|   1.9% | 20.5 MiB |     492 | `Parse::do_all_blocks`                                               | `libjvm.dylib`            |
|   1.9% | 20.3 MiB |     489 | `Parse::do_one_block`                                                | `libjvm.dylib`            |
|   1.7% | 18.6 MiB |     452 | `Parse::do_call`                                                     | `libjvm.dylib`            |
|   1.5% | 15.8 MiB |     397 | `PathFrequency::to`                                                  | `libjvm.dylib`            |
|   1.4% | 15.6 MiB |     389 | `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` | `libjvm.dylib`            |
|   1.4% | 15.2 MiB |     372 | `PredictedCallGenerator::generate`                                   | `libjvm.dylib`            |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `os::malloc` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location                 |
| -----: | -------: | ------: | ------------- | ------------------------ |
| 100.0% | 1.05 GiB | 157,921 | `malloc_hook` | `libasyncProfiler.dylib` |
|   0.1% | 1.18 MiB |   3,860 | `os::malloc`  | `libjvm.dylib`           |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |     Size | Samples | Callee                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 1.04 GiB |  55,846 | `thread_native_entry` | `libjvm.dylib` |
|  <0.1% |   56 KiB |     153 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % |     Size | Samples | Callee           | Location                  |
| -----: | -------: | ------: | ---------------- | ------------------------- |
| 100.0% | 1.04 GiB |  55,999 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                          | Location       |
| ----: | -------: | ------: | ------------------------------- | -------------- |
| 99.9% | 1.04 GiB |  52,202 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| <0.1% |  454 KiB |   1,216 | `VMThread::run`                 | `libjvm.dylib` |
| <0.1% |  266 KiB |   2,330 | `WorkerThread::run`             | `libjvm.dylib` |
| <0.1% | 22.9 KiB |      52 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
| <0.1% | 16.4 KiB |       9 | `JavaThread::post_run`          | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |     Size | Samples | Callee             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.04 GiB |  55,846 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                | Location       |
| -----: | -------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 1.04 GiB |  51,756 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |
|  <0.1% | 37.8 KiB |     446 | `ServiceThread::service_thread_entry` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                         | Location       |
| -----: | -------: | ------: | ---------------------------------------------- | -------------- |
| 100.0% | 1.04 GiB |  51,679 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  <0.1% |   36 KiB |      72 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |
|  <0.1% |   24 KiB |       3 | `CompileQueue::get`                            | `libjvm.dylib` |
|  <0.1% | 1.95 KiB |       2 | `CompileBroker::init_compiler_runtime`         | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                              | Location       |
| ----: | -------: | ------: | ----------------------------------- | -------------- |
| 99.0% | 1.03 GiB |  17,221 | `C2Compiler::compile_method`        | `libjvm.dylib` |
|  0.9% | 10.1 MiB |  28,654 | `Compiler::compile_method`          | `libjvm.dylib` |
| <0.1% | 97.9 KiB |       5 | `ciEnv::ciEnv`                      | `libjvm.dylib` |
| <0.1% | 65.3 KiB |   5,795 | `CompilationLog::log_compile`       | `libjvm.dylib` |
| <0.1% |    888 B |       3 | `JavaThread::push_jni_handle_block` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |     Size | Samples | Callee       | Location       |
| -----: | -------: | ------: | ------------ | -------------- |
| 100.0% | 1.04 GiB |  13,109 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 1.04 GiB |  13,066 | `Chunk::operator new` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 57.2% |  605 MiB |   7,456 | `Compile::Optimize`                      | `libjvm.dylib` |
| 40.0% |  422 MiB |   7,964 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  1.9% | 19.9 MiB |     513 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.7% | 6.94 MiB |     117 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.2% | 1.72 MiB |      42 | `NodeHash::NodeHash`                     | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |     Size | Samples | Callee             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.03 GiB |  17,221 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                         | Location       |
| ----: | -------: | ------: | ------------------------------ | -------------- |
| 46.3% |  280 MiB |   3,462 | `PhaseIdealLoop::optimize`     | `libjvm.dylib` |
| 46.1% |  279 MiB |   2,999 | `Compile::optimize_loops`      | `libjvm.dylib` |
|  1.7% | 10.2 MiB |     248 | `PhaseCCP::do_transform`       | `libjvm.dylib` |
|  1.6% | 9.53 MiB |     169 | `PhaseIterGVN::optimize`       | `libjvm.dylib` |
|  1.4% | 8.62 MiB |     178 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 98.9% |  552 MiB |   6,363 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  1.1% | 6.04 MiB |      98 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                                             | Location       |
| ----: | -------: | ------: | ------------------------------------------------------------------ | -------------- |
| 69.8% |  385 MiB |   2,589 | `PhaseIdealLoop::Dominators`                                       | `libjvm.dylib` |
|  6.9% | 38.4 MiB |     867 | `Node_Array::grow`                                                 | `libjvm.dylib` |
|  6.9% | 38.3 MiB |     863 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib` |
|  5.3% | 29.1 MiB |     719 | `IdealLoopTree::loop_predication`                                  | `libjvm.dylib` |
|  4.4% | 24.6 MiB |     510 | `Arena::grow`                                                      | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 552 MiB |   6,363 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                            | Location       |
| ----: | -------: | ------: | --------------------------------- | -------------- |
| 77.3% |  327 MiB |   3,112 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 17.7% | 74.7 MiB |   1,175 | `Matcher::match`                  | `libjvm.dylib` |
|  2.1% | 8.94 MiB |     192 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  1.4% | 5.78 MiB |     346 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  1.2% | 4.86 MiB |     103 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 385 MiB |   2,589 | `Arena::grow` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 71.2% |  233 MiB |   1,799 | `PhaseIFG::init`                         | `libjvm.dylib` |
| 23.9% | 78.2 MiB |     920 | `PhaseLive::compute`                     | `libjvm.dylib` |
|  2.6% | 8.48 MiB |     222 | `PhaseChaitin::Split`                    | `libjvm.dylib` |
|  0.8% |  2.5 MiB |      54 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |
|  0.5% | 1.75 MiB |      33 | `PhaseRegAlloc::alloc_node_regs`         | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 168 MiB |   3,676 | `Arena::grow` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 38.4 MiB |     866 | `Arena::grow` | `libjvm.dylib` |

##### `IdealLoopTree::loop_predication` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                  | Location       |
| -----: | -------: | ------: | --------------------------------------- | -------------- |
| 100.0% | 29.1 MiB |     719 | `PhaseIdealLoop::loop_predication_impl` | `libjvm.dylib` |
|  45.6% | 13.3 MiB |     339 | `IdealLoopTree::loop_predication`       | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                    | Location       |
| -----: | -------: | ------: | ------------------------- | -------------- |
| 100.0% | 20.5 MiB |     492 | `Parse::do_all_blocks`    | `libjvm.dylib` |
|   6.7% | 1.38 MiB |      29 | `Parse::build_exits`      | `libjvm.dylib` |
|   1.7% |  352 KiB |      11 | `GraphKit::set_map_clone` | `libjvm.dylib` |
|   0.8% |  160 KiB |       4 | `Parse::do_exits`         | `libjvm.dylib` |
|   0.5% |   96 KiB |       2 | `Parse::merge_common`     | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % |     Size | Samples | Callee         | Location       |
| -----: | -------: | ------: | -------------- | -------------- |
| 100.0% | 20.5 MiB |     521 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                          | Location       |
| ----: | -------: | ------: | ------------------------------- | -------------- |
| 98.9% | 20.3 MiB |     489 | `Parse::do_one_block`           | `libjvm.dylib` |
|  2.3% |  480 KiB |       9 | `Parse::ensure_phis_everywhere` | `libjvm.dylib` |
|  1.4% |  288 KiB |       5 | `Parse::merge_common`           | `libjvm.dylib` |
|  0.2% |   32 KiB |       1 | `Type_Array::grow`              | `libjvm.dylib` |
|  0.2% |   32 KiB |       1 | `GraphKit::uncommon_trap`       | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                   | Location       |
| ----: | -------: | ------: | ------------------------ | -------------- |
| 91.5% | 18.6 MiB |     452 | `Parse::do_call`         | `libjvm.dylib` |
| 23.7% | 4.81 MiB |     111 | `Parse::do_field_access` | `libjvm.dylib` |
| 10.6% | 2.16 MiB |      45 | `Parse::do_if`           | `libjvm.dylib` |
|  9.6% | 1.94 MiB |      42 | `Parse::do_one_bytecode` | `libjvm.dylib` |
|  5.4% | 1.09 MiB |      10 | `Parse::do_exceptions`   | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                                | Location       |
| ----: | -------: | ------: | ----------------------------------------------------- | -------------- |
| 81.8% | 15.2 MiB |     371 | `PredictedCallGenerator::generate`                    | `libjvm.dylib` |
| 55.5% | 10.3 MiB |     216 | `ParseGenerator::generate`                            | `libjvm.dylib` |
|  4.0% |  768 KiB |      16 | `LibraryIntrinsic::generate`                          | `libjvm.dylib` |
|  1.7% |  324 KiB |      34 | `Compile::call_generator`                             | `libjvm.dylib` |
|  1.5% |  288 KiB |       9 | `GraphKit::record_profiled_arguments_for_speculation` | `libjvm.dylib` |

##### `PathFrequency::to` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                                               | Location       |
| ----: | -------: | ------: | -------------------------------------------------------------------- | -------------- |
| 98.4% | 15.6 MiB |     389 | `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` | `libjvm.dylib` |
|  1.6% |  256 KiB |       8 | `Node_Stack::grow`                                                   | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 15.6 MiB |     389 | `Arena::grow` | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                               | Location       |
| ----: | -------: | ------: | ------------------------------------ | -------------- |
| 96.3% | 14.7 MiB |     357 | `ParseGenerator::generate`           | `libjvm.dylib` |
| 35.1% | 5.35 MiB |     139 | `PredictedCallGenerator::generate`   | `libjvm.dylib` |
|  3.3% |  512 KiB |      12 | `PreserveJVMState::PreserveJVMState` | `libjvm.dylib` |
|  2.5% |  384 KiB |      10 | `GraphKit::subtype_check_receiver`   | `libjvm.dylib` |
|  2.3% |  352 KiB |       8 | `GraphKit::null_check_common`        | `libjvm.dylib` |

## Hottest call stacks

Call stacks ranked by native bytes allocated in their leaf frame.

Common call stack: `Compile::Compile` (`libjvm.dylib`) ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 21.4% |  233 MiB |   1,799 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                                            |
| 17.8% |  194 MiB |   1,241 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                                 |
| 17.6% |  192 MiB |   1,348 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                             |
|  7.1% | 77.4 MiB |     896 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                                        |
|  2.4% | 25.7 MiB |     259 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                                             |
|  1.8% | 19.6 MiB |     403 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                           |
|  1.8% | 19.6 MiB |     238 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                                       |
|  1.8% | 19.5 MiB |     401 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                       |
|  1.7% | 18.9 MiB |     466 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                   |
|  1.7% | 18.7 MiB |     460 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                       |
|  1.4% |   15 MiB |     305 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                                                                |
|  0.9% | 10.1 MiB |     245 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize`                                                                                                                                                                                       |
|  0.9% |  9.6 MiB |     205 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                                                            |
|  0.7% | 7.69 MiB |     167 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                       |
|  0.7% | 7.22 MiB |     120 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize`                                                                                                                                                                                         |
|  0.6% |    7 MiB |     147 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                    |
|  0.6% | 6.88 MiB |     115 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless`                                                                                                                                                                                  |
|  0.5% | 5.41 MiB |      98 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node::out_grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                      |
|  0.4% | 4.81 MiB |     107 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` ← `PathFrequency::to` ← `PhaseIdealLoop::loop_predication_impl` ← `IdealLoopTree::loop_predication` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` |
|  0.4% | 4.35 MiB |     112 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseIdealLoop::set_idom` ← `PhaseIdealLoop::split_thru_region` ← `PhaseIdealLoop::do_split_if` ← `PhaseIdealLoop::split_if_with_blocks` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`            |
