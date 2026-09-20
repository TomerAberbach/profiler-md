# Allocated native memory profile

Allocated 1.11 GiB over 170,231 samples (6.81 KiB per sample).

| Category |      % |     Size | Samples |
| -------- | -----: | -------: | ------: |
| Native   | 100.0% | 1.11 GiB | 170,231 |

## Hottest functions

### Self size

Functions ranked by native bytes allocated directly in the function body, excluding callees.

#### Categories

##### Native

|      % |     Size | Samples | Function       | Location                 |
| -----: | -------: | ------: | -------------- | ------------------------ |
| 100.0% | 1.11 GiB | 169,334 | `malloc_hook`  | `libasyncProfiler.dylib` |
|  <0.1% |  195 KiB |     852 | `realloc_hook` | `libasyncProfiler.dylib` |
|  <0.1% |  122 KiB |      45 | `calloc_hook`  | `libasyncProfiler.dylib` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location        |
| ----: | -------: | ------: | ----------------------------------------- | --------------- |
| 99.3% |  1.1 GiB | 158,319 | `os::malloc`                              | `libjvm.dylib`  |
|  0.5% | 5.92 MiB |   1,329 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |
|  0.1% | 1.16 MiB |   1,185 | `Java_java_lang_ClassLoader_defineClass0` | `libjava.dylib` |
| <0.1% |  384 KiB |      12 | `updatewindow`                            | `libzip.dylib`  |
| <0.1% |  313 KiB |   2,639 | `getStringPlatformChars0`                 | `libjava.dylib` |

##### `realloc_hook` (`libasyncProfiler.dylib`)

|      % |    Size | Samples | Caller        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 195 KiB |     852 | `os::realloc` | `libjvm.dylib` |

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
| 100.0% | 1.11 GiB | 169,334 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
|  99.2% |  1.1 GiB | 158,319 | `os::malloc`                               | `libjvm.dylib`            |
|  98.1% | 1.08 GiB |  56,330 | `_pthread_start`                           | `libsystem_pthread.dylib` |
|  98.1% | 1.08 GiB |  56,330 | `thread_start`                             | `libsystem_pthread.dylib` |
|  98.1% | 1.08 GiB |  56,177 | `Thread::call_run`                         | `libjvm.dylib`            |
|  98.1% | 1.08 GiB |  56,177 | `thread_native_entry`                      | `libjvm.dylib`            |
|  98.1% | 1.08 GiB |  52,860 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
|  98.1% | 1.08 GiB |  52,411 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
|  98.0% | 1.08 GiB |  52,358 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  98.0% | 1.08 GiB |  13,610 | `Chunk::operator new`                      | `libjvm.dylib`            |
|  98.0% | 1.08 GiB |  13,567 | `Arena::grow`                              | `libjvm.dylib`            |
|  97.2% | 1.07 GiB |  17,853 | `Compile::Compile`                         | `libjvm.dylib`            |
|  97.2% | 1.07 GiB |  17,853 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  55.5% |  628 MiB |   7,751 | `Compile::Optimize`                        | `libjvm.dylib`            |
|  51.1% |  579 MiB |   6,678 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib`            |
|  50.6% |  573 MiB |   6,579 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib`            |
|  50.6% |  573 MiB |   6,579 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib`            |
|  38.9% |  441 MiB |   8,250 | `Compile::Code_Gen`                        | `libjvm.dylib`            |
|  35.1% |  398 MiB |   2,659 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`            |
|  29.9% |  339 MiB |   3,186 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib`            |

#### Categories

##### Native

|      % |     Size | Samples | Function                                                             | Location                  |
| -----: | -------: | ------: | -------------------------------------------------------------------- | ------------------------- |
| 100.0% | 1.11 GiB | 169,334 | `malloc_hook`                                                        | `libasyncProfiler.dylib`  |
|  99.2% |  1.1 GiB | 158,319 | `os::malloc`                                                         | `libjvm.dylib`            |
|  98.1% | 1.08 GiB |  56,330 | `_pthread_start`                                                     | `libsystem_pthread.dylib` |
|  98.1% | 1.08 GiB |  56,330 | `thread_start`                                                       | `libsystem_pthread.dylib` |
|  98.1% | 1.08 GiB |  56,177 | `Thread::call_run`                                                   | `libjvm.dylib`            |
|  98.1% | 1.08 GiB |  56,177 | `thread_native_entry`                                                | `libjvm.dylib`            |
|  98.1% | 1.08 GiB |  52,860 | `JavaThread::thread_main_inner`                                      | `libjvm.dylib`            |
|  98.0% | 1.08 GiB |  13,610 | `Chunk::operator new`                                                | `libjvm.dylib`            |
|  98.0% | 1.08 GiB |  13,567 | `Arena::grow`                                                        | `libjvm.dylib`            |
|  15.6% |  176 MiB |   3,813 | `Arena::Arealloc`                                                    | `libjvm.dylib`            |
|   3.5% | 39.8 MiB |     891 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to`   | `libjvm.dylib`            |
|   2.7% |   31 MiB |     767 | `IdealLoopTree::loop_predication`                                    | `libjvm.dylib`            |
|   1.9% | 21.6 MiB |     542 | `Parse::Parse`                                                       | `libjvm.dylib`            |
|   1.9% | 21.6 MiB |     542 | `ParseGenerator::generate`                                           | `libjvm.dylib`            |
|   1.9% | 21.6 MiB |     512 | `Parse::do_one_block`                                                | `libjvm.dylib`            |
|   1.9% | 21.6 MiB |     512 | `Parse::do_all_blocks`                                               | `libjvm.dylib`            |
|   1.8% | 19.9 MiB |     475 | `Parse::do_call`                                                     | `libjvm.dylib`            |
|   1.6% | 17.7 MiB |     441 | `PathFrequency::to`                                                  | `libjvm.dylib`            |
|   1.5% | 17.2 MiB |     427 | `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` | `libjvm.dylib`            |
|   1.4% | 15.9 MiB |     390 | `PredictedCallGenerator::generate`                                   | `libjvm.dylib`            |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `os::malloc` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location                 |
| -----: | -------: | ------: | ------------- | ------------------------ |
| 100.0% |  1.1 GiB | 158,319 | `malloc_hook` | `libasyncProfiler.dylib` |
|   0.1% | 1.18 MiB |   3,864 | `os::malloc`  | `libjvm.dylib`           |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |     Size | Samples | Callee                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 1.08 GiB |  56,177 | `thread_native_entry` | `libjvm.dylib` |
|  <0.1% |   56 KiB |     153 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % |     Size | Samples | Callee           | Location                  |
| -----: | -------: | ------: | ---------------- | ------------------------- |
| 100.0% | 1.08 GiB |  56,330 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                          | Location       |
| ----: | -------: | ------: | ------------------------------- | -------------- |
| 99.9% | 1.08 GiB |  52,860 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| <0.1% |  401 KiB |   1,188 | `VMThread::run`                 | `libjvm.dylib` |
| <0.1% |  267 KiB |   2,047 | `WorkerThread::run`             | `libjvm.dylib` |
| <0.1% | 22.7 KiB |      46 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
| <0.1% | 8.23 KiB |       5 | `JavaThread::post_run`          | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |     Size | Samples | Callee             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.08 GiB |  56,177 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                | Location       |
| -----: | -------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 1.08 GiB |  52,411 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |
|  <0.1% | 37.8 KiB |     449 | `ServiceThread::service_thread_entry` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                         | Location       |
| -----: | -------: | ------: | ---------------------------------------------- | -------------- |
| 100.0% | 1.08 GiB |  52,358 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  <0.1% | 24.8 KiB |      50 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |
|  <0.1% |   24 KiB |       3 | `CompileQueue::get`                            | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                              | Location       |
| ----: | -------: | ------: | ----------------------------------- | -------------- |
| 99.1% | 1.07 GiB |  17,853 | `C2Compiler::compile_method`        | `libjvm.dylib` |
|  0.8% | 9.27 MiB |  28,660 | `Compiler::compile_method`          | `libjvm.dylib` |
| <0.1% |  258 KiB |      10 | `ciEnv::ciEnv`                      | `libjvm.dylib` |
| <0.1% | 65.9 KiB |   5,832 | `CompilationLog::log_compile`       | `libjvm.dylib` |
| <0.1% |    592 B |       2 | `JavaThread::push_jni_handle_block` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |     Size | Samples | Callee       | Location       |
| -----: | -------: | ------: | ------------ | -------------- |
| 100.0% | 1.08 GiB |  13,610 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 1.08 GiB |  13,567 | `Chunk::operator new` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 57.1% |  628 MiB |   7,751 | `Compile::Optimize`                      | `libjvm.dylib` |
| 40.0% |  441 MiB |   8,250 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  1.9% | 21.3 MiB |     536 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.7% | 7.16 MiB |     123 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.2% | 1.69 MiB |      42 | `NodeHash::NodeHash`                     | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |     Size | Samples | Callee             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.07 GiB |  17,853 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                         | Location       |
| ----: | -------: | ------: | ------------------------------ | -------------- |
| 46.4% |  291 MiB |   3,608 | `PhaseIdealLoop::optimize`     | `libjvm.dylib` |
| 45.7% |  287 MiB |   3,070 | `Compile::optimize_loops`      | `libjvm.dylib` |
|  1.7% | 10.6 MiB |     256 | `PhaseCCP::do_transform`       | `libjvm.dylib` |
|  1.7% | 10.4 MiB |     228 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |
|  1.6% | 10.2 MiB |     175 | `PhaseIterGVN::optimize`       | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 99.0% |  573 MiB |   6,579 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  1.0% | 6.01 MiB |      99 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                                             | Location       |
| ----: | -------: | ------: | ------------------------------------------------------------------ | -------------- |
| 69.4% |  398 MiB |   2,659 | `PhaseIdealLoop::Dominators`                                       | `libjvm.dylib` |
|  7.0% | 39.9 MiB |     894 | `Node_Array::grow`                                                 | `libjvm.dylib` |
|  6.9% | 39.7 MiB |     888 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib` |
|  5.4% |   31 MiB |     767 | `IdealLoopTree::loop_predication`                                  | `libjvm.dylib` |
|  4.7% | 26.8 MiB |     549 | `Arena::grow`                                                      | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 573 MiB |   6,579 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                            | Location       |
| ----: | -------: | ------: | --------------------------------- | -------------- |
| 76.9% |  339 MiB |   3,186 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 18.1% | 79.7 MiB |   1,275 | `Matcher::match`                  | `libjvm.dylib` |
|  2.1% | 9.18 MiB |     189 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  1.4% |  6.1 MiB |     365 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  1.2% | 5.09 MiB |     106 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 398 MiB |   2,659 | `Arena::grow` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 71.5% |  242 MiB |   1,878 | `PhaseIFG::init`                         | `libjvm.dylib` |
| 24.3% | 82.4 MiB |     974 | `PhaseLive::compute`                     | `libjvm.dylib` |
|  2.4% | 8.06 MiB |     195 | `PhaseChaitin::Split`                    | `libjvm.dylib` |
|  0.6% | 1.88 MiB |      44 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |
|  0.5% | 1.82 MiB |      34 | `PhaseRegAlloc::alloc_node_regs`         | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 176 MiB |   3,813 | `Arena::grow` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 39.8 MiB |     891 | `Arena::grow` | `libjvm.dylib` |

##### `IdealLoopTree::loop_predication` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                  | Location       |
| -----: | -------: | ------: | --------------------------------------- | -------------- |
| 100.0% |   31 MiB |     767 | `PhaseIdealLoop::loop_predication_impl` | `libjvm.dylib` |
|  42.6% | 13.2 MiB |     344 | `IdealLoopTree::loop_predication`       | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                    | Location       |
| -----: | -------: | ------: | ------------------------- | -------------- |
| 100.0% | 21.6 MiB |     512 | `Parse::do_all_blocks`    | `libjvm.dylib` |
|   5.9% | 1.28 MiB |      26 | `Parse::build_exits`      | `libjvm.dylib` |
|   3.6% |  800 KiB |      15 | `GraphKit::set_map_clone` | `libjvm.dylib` |
|   1.0% |  224 KiB |       6 | `Parse::do_exits`         | `libjvm.dylib` |
|   0.3% |   64 KiB |       2 | `Parse::create_entry_map` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % |     Size | Samples | Callee         | Location       |
| -----: | -------: | ------: | -------------- | -------------- |
| 100.0% | 21.6 MiB |     542 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                   | Location       |
| ----: | -------: | ------: | ------------------------ | -------------- |
| 92.3% | 19.9 MiB |     475 | `Parse::do_call`         | `libjvm.dylib` |
| 30.5% |  6.6 MiB |     131 | `Parse::do_field_access` | `libjvm.dylib` |
| 11.4% | 2.47 MiB |      51 | `Parse::do_one_bytecode` | `libjvm.dylib` |
|  9.1% | 1.97 MiB |      45 | `Parse::do_if`           | `libjvm.dylib` |
|  4.6% |    1 MiB |      25 | `Parse::return_current`  | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                          | Location       |
| -----: | -------: | ------: | ------------------------------- | -------------- |
| 100.0% | 21.6 MiB |     512 | `Parse::do_one_block`           | `libjvm.dylib` |
|   0.9% |  192 KiB |       5 | `Parse::merge_common`           | `libjvm.dylib` |
|   0.9% |  192 KiB |       5 | `Parse::ensure_phis_everywhere` | `libjvm.dylib` |
|   0.3% |   64 KiB |       2 | `GraphKit::clone_map`           | `libjvm.dylib` |
|   0.1% |   32 KiB |       1 | `GraphKit::uncommon_trap`       | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                             | Location       |
| ----: | -------: | ------: | ---------------------------------- | -------------- |
| 79.6% | 15.9 MiB |     390 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
| 59.9% | 11.9 MiB |     239 | `ParseGenerator::generate`         | `libjvm.dylib` |
|  2.4% |  480 KiB |      14 | `LibraryIntrinsic::generate`       | `libjvm.dylib` |
|  1.4% |  288 KiB |       7 | `DirectCallGenerator::generate`    | `libjvm.dylib` |
|  1.3% |  261 KiB |      42 | `Compile::call_generator`          | `libjvm.dylib` |

##### `PathFrequency::to` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                                               | Location       |
| ----: | -------: | ------: | -------------------------------------------------------------------- | -------------- |
| 97.5% | 17.2 MiB |     427 | `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` | `libjvm.dylib` |
|  2.5% |  448 KiB |      14 | `Node_Stack::grow`                                                   | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 17.2 MiB |     427 | `Arena::grow` | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                               | Location       |
| ----: | -------: | ------: | ------------------------------------ | -------------- |
| 96.9% | 15.4 MiB |     377 | `ParseGenerator::generate`           | `libjvm.dylib` |
| 37.6% | 5.97 MiB |     164 | `PredictedCallGenerator::generate`   | `libjvm.dylib` |
|  3.7% |  608 KiB |      13 | `GraphKit::subtype_check_receiver`   | `libjvm.dylib` |
|  2.6% |  416 KiB |       9 | `PreserveJVMState::PreserveJVMState` | `libjvm.dylib` |
|  1.8% |  288 KiB |       8 | `DirectCallGenerator::generate`      | `libjvm.dylib` |

## Hottest call stacks

Call stacks ranked by native bytes allocated in their leaf frame.

Common call stack: `Compile::Compile` (`libjvm.dylib`) ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 21.4% |  242 MiB |   1,878 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                                            |
| 17.6% |  200 MiB |   1,271 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                                 |
| 17.5% |  198 MiB |   1,388 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                             |
|  7.2% | 81.9 MiB |     959 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                                        |
|  2.4% | 26.9 MiB |     265 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                                             |
|  1.8% | 20.9 MiB |     258 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                                       |
|  1.8% |   20 MiB |     411 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                           |
|  1.8% |   20 MiB |     410 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                       |
|  1.8% | 19.9 MiB |     484 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                   |
|  1.7% | 19.7 MiB |     477 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                       |
|  1.4% | 16.1 MiB |     319 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                                                                |
|  0.9% | 10.7 MiB |     230 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                                                            |
|  0.9% | 10.5 MiB |     252 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize`                                                                                                                                                                                       |
|  0.7% | 8.22 MiB |     129 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize`                                                                                                                                                                                         |
|  0.7% | 8.13 MiB |     175 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                       |
|  0.6% | 7.35 MiB |     154 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                    |
|  0.6% | 7.13 MiB |     122 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless`                                                                                                                                                                                  |
|  0.5% | 5.31 MiB |     100 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node::out_grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                      |
|  0.4% | 4.91 MiB |     110 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` ← `PathFrequency::to` ← `PhaseIdealLoop::loop_predication_impl` ← `IdealLoopTree::loop_predication` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` |
|  0.4% | 4.75 MiB |     118 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseIdealLoop::set_idom` ← `PhaseIdealLoop::split_thru_region` ← `PhaseIdealLoop::do_split_if` ← `PhaseIdealLoop::split_if_with_blocks` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`            |
