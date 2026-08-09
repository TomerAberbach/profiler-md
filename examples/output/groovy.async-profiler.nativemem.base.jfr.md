# Allocated native memory profile

Allocated 1.11 GiB over 169,916 samples (6.87 KiB per sample).

| Category |      % |     Size | Samples |
| -------- | -----: | -------: | ------: |
| Native   | 100.0% | 1.11 GiB | 169,916 |

## Hottest functions

### Self size

Functions ranked by native bytes allocated directly in the function body, excluding callees.

#### Categories

##### Native

|      % |     Size | Samples | Function       | Location                 |
| -----: | -------: | ------: | -------------- | ------------------------ |
| 100.0% | 1.11 GiB | 169,020 | `malloc_hook`  | `libasyncProfiler.dylib` |
|  <0.1% |  194 KiB |     851 | `realloc_hook` | `libasyncProfiler.dylib` |
|  <0.1% |  122 KiB |      45 | `calloc_hook`  | `libasyncProfiler.dylib` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location        |
| ----: | -------: | ------: | ----------------------------------------- | --------------- |
| 99.3% |  1.1 GiB | 158,011 | `os::malloc`                              | `libjvm.dylib`  |
|  0.5% | 5.92 MiB |   1,329 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |
|  0.1% | 1.15 MiB |   1,181 | `Java_java_lang_ClassLoader_defineClass0` | `libjava.dylib` |
| <0.1% |  384 KiB |      12 | `updatewindow`                            | `libzip.dylib`  |
| <0.1% |  313 KiB |   2,639 | `getStringPlatformChars0`                 | `libjava.dylib` |

##### `realloc_hook` (`libasyncProfiler.dylib`)

|      % |    Size | Samples | Caller        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 194 KiB |     851 | `os::realloc` | `libjvm.dylib` |

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
| 100.0% | 1.11 GiB | 169,020 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
|  99.2% |  1.1 GiB | 158,011 | `os::malloc`                               | `libjvm.dylib`            |
|  98.2% | 1.09 GiB |  55,895 | `_pthread_start`                           | `libsystem_pthread.dylib` |
|  98.2% | 1.09 GiB |  55,895 | `thread_start`                             | `libsystem_pthread.dylib` |
|  98.2% | 1.09 GiB |  55,742 | `Thread::call_run`                         | `libjvm.dylib`            |
|  98.2% | 1.09 GiB |  55,742 | `thread_native_entry`                      | `libjvm.dylib`            |
|  98.1% | 1.09 GiB |  52,462 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
|  98.1% | 1.09 GiB |  52,015 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
|  98.1% | 1.09 GiB |  51,962 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  98.0% | 1.09 GiB |  13,514 | `Chunk::operator new`                      | `libjvm.dylib`            |
|  98.0% | 1.09 GiB |  13,470 | `Arena::grow`                              | `libjvm.dylib`            |
|  97.4% | 1.08 GiB |  17,791 | `Compile::Compile`                         | `libjvm.dylib`            |
|  97.4% | 1.08 GiB |  17,791 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  55.8% |  636 MiB |   7,792 | `Compile::Optimize`                        | `libjvm.dylib`            |
|  51.6% |  588 MiB |   6,786 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib`            |
|  51.1% |  582 MiB |   6,687 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib`            |
|  51.1% |  582 MiB |   6,686 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib`            |
|  38.9% |  443 MiB |   8,141 | `Compile::Code_Gen`                        | `libjvm.dylib`            |
|  35.4% |  404 MiB |   2,727 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`            |
|  30.3% |  346 MiB |   3,232 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib`            |

#### Categories

##### Native

|      % |     Size | Samples | Function                                                             | Location                  |
| -----: | -------: | ------: | -------------------------------------------------------------------- | ------------------------- |
| 100.0% | 1.11 GiB | 169,020 | `malloc_hook`                                                        | `libasyncProfiler.dylib`  |
|  99.2% |  1.1 GiB | 158,011 | `os::malloc`                                                         | `libjvm.dylib`            |
|  98.2% | 1.09 GiB |  55,895 | `_pthread_start`                                                     | `libsystem_pthread.dylib` |
|  98.2% | 1.09 GiB |  55,895 | `thread_start`                                                       | `libsystem_pthread.dylib` |
|  98.2% | 1.09 GiB |  55,742 | `Thread::call_run`                                                   | `libjvm.dylib`            |
|  98.2% | 1.09 GiB |  55,742 | `thread_native_entry`                                                | `libjvm.dylib`            |
|  98.1% | 1.09 GiB |  52,462 | `JavaThread::thread_main_inner`                                      | `libjvm.dylib`            |
|  98.0% | 1.09 GiB |  13,514 | `Chunk::operator new`                                                | `libjvm.dylib`            |
|  98.0% | 1.09 GiB |  13,470 | `Arena::grow`                                                        | `libjvm.dylib`            |
|  15.3% |  175 MiB |   3,745 | `Arena::Arealloc`                                                    | `libjvm.dylib`            |
|   3.5% | 39.6 MiB |     874 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to`   | `libjvm.dylib`            |
|   2.7% | 31.1 MiB |     760 | `IdealLoopTree::loop_predication`                                    | `libjvm.dylib`            |
|   1.8% |   21 MiB |     537 | `Parse::Parse`                                                       | `libjvm.dylib`            |
|   1.8% |   21 MiB |     537 | `ParseGenerator::generate`                                           | `libjvm.dylib`            |
|   1.8% |   21 MiB |     505 | `Parse::do_all_blocks`                                               | `libjvm.dylib`            |
|   1.8% | 20.8 MiB |     502 | `Parse::do_one_block`                                                | `libjvm.dylib`            |
|   1.7% | 19.4 MiB |     473 | `Parse::do_call`                                                     | `libjvm.dylib`            |
|   1.6% | 17.8 MiB |     446 | `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` | `libjvm.dylib`            |
|   1.6% | 17.8 MiB |     446 | `PathFrequency::to`                                                  | `libjvm.dylib`            |
|   1.5% | 16.7 MiB |     313 | `IdealLoopTree::iteration_split`                                     | `libjvm.dylib`            |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `os::malloc` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location                 |
| -----: | -------: | ------: | ------------- | ------------------------ |
| 100.0% |  1.1 GiB | 158,011 | `malloc_hook` | `libasyncProfiler.dylib` |
|   0.1% | 1.18 MiB |   3,860 | `os::malloc`  | `libjvm.dylib`           |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |     Size | Samples | Callee                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 1.09 GiB |  55,742 | `thread_native_entry` | `libjvm.dylib` |
|  <0.1% |   56 KiB |     153 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % |     Size | Samples | Callee           | Location                  |
| -----: | -------: | ------: | ---------------- | ------------------------- |
| 100.0% | 1.09 GiB |  55,895 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                          | Location       |
| ----: | -------: | ------: | ------------------------------- | -------------- |
| 99.9% | 1.09 GiB |  52,462 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| <0.1% |  399 KiB |   1,168 | `VMThread::run`                 | `libjvm.dylib` |
| <0.1% |  257 KiB |   2,028 | `WorkerThread::run`             | `libjvm.dylib` |
| <0.1% | 22.9 KiB |      48 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
| <0.1% | 8.23 KiB |       5 | `JavaThread::post_run`          | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |     Size | Samples | Callee             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.09 GiB |  55,742 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                | Location       |
| -----: | -------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 1.09 GiB |  52,015 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |
|  <0.1% | 37.8 KiB |     447 | `ServiceThread::service_thread_entry` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                         | Location       |
| -----: | -------: | ------: | ---------------------------------------------- | -------------- |
| 100.0% | 1.09 GiB |  51,962 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  <0.1% | 24.8 KiB |      50 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |
|  <0.1% |   24 KiB |       3 | `CompileQueue::get`                            | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                              | Location       |
| ----: | -------: | ------: | ----------------------------------- | -------------- |
| 99.2% | 1.08 GiB |  17,791 | `C2Compiler::compile_method`        | `libjvm.dylib` |
|  0.8% |  8.7 MiB |  28,347 | `Compiler::compile_method`          | `libjvm.dylib` |
| <0.1% | 65.4 KiB |   5,819 | `CompilationLog::log_compile`       | `libjvm.dylib` |
| <0.1% | 64.9 KiB |       3 | `ciEnv::ciEnv`                      | `libjvm.dylib` |
| <0.1% |    592 B |       2 | `JavaThread::push_jni_handle_block` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |     Size | Samples | Callee       | Location       |
| -----: | -------: | ------: | ------------ | -------------- |
| 100.0% | 1.09 GiB |  13,514 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 1.09 GiB |  13,470 | `Chunk::operator new` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 57.3% |  636 MiB |   7,792 | `Compile::Optimize`                      | `libjvm.dylib` |
| 39.9% |  443 MiB |   8,141 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  1.9% | 20.7 MiB |     530 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.6% |  7.1 MiB |     120 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.2% | 1.72 MiB |      43 | `NodeHash::NodeHash`                     | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |     Size | Samples | Callee             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.08 GiB |  17,791 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                         | Location       |
| ----: | -------: | ------: | ------------------------------ | -------------- |
| 47.3% |  301 MiB |   3,224 | `Compile::optimize_loops`      | `libjvm.dylib` |
| 45.2% |  288 MiB |   3,562 | `PhaseIdealLoop::optimize`     | `libjvm.dylib` |
|  1.7% | 10.5 MiB |     252 | `PhaseCCP::do_transform`       | `libjvm.dylib` |
|  1.5% | 9.81 MiB |     173 | `PhaseIterGVN::optimize`       | `libjvm.dylib` |
|  1.4% | 8.58 MiB |     176 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 99.0% |  582 MiB |   6,687 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  1.0% | 5.95 MiB |      99 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 582 MiB |   6,686 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
|  <0.1% |  32 KiB |       1 | `Arena::grow`                        | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                                             | Location       |
| ----: | -------: | ------: | ------------------------------------------------------------------ | -------------- |
| 69.3% |  404 MiB |   2,727 | `PhaseIdealLoop::Dominators`                                       | `libjvm.dylib` |
|  6.8% | 39.7 MiB |     878 | `Node_Array::grow`                                                 | `libjvm.dylib` |
|  6.8% | 39.5 MiB |     871 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib` |
|  5.3% | 31.1 MiB |     760 | `IdealLoopTree::loop_predication`                                  | `libjvm.dylib` |
|  4.7% | 27.3 MiB |     557 | `Arena::grow`                                                      | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                            | Location       |
| ----: | -------: | ------: | --------------------------------- | -------------- |
| 78.0% |  346 MiB |   3,232 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 17.0% | 75.2 MiB |   1,141 | `Matcher::match`                  | `libjvm.dylib` |
|  2.1% | 9.26 MiB |     194 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  1.4% | 6.04 MiB |     354 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  1.2% | 5.21 MiB |     108 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                 | Location       |
| -----: | ------: | ------: | ---------------------- | -------------- |
| 100.0% | 404 MiB |   2,726 | `Arena::grow`          | `libjvm.dylib` |
|  <0.1% |  32 KiB |       1 | `VectorSet::VectorSet` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 71.0% |  245 MiB |   1,844 | `PhaseIFG::init`                         | `libjvm.dylib` |
| 23.7% | 82.1 MiB |     937 | `PhaseLive::compute`                     | `libjvm.dylib` |
|  3.0% | 10.5 MiB |     265 | `PhaseChaitin::Split`                    | `libjvm.dylib` |
|  0.7% | 2.25 MiB |      57 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |
|  0.6% | 1.91 MiB |      35 | `PhaseRegAlloc::alloc_node_regs`         | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 175 MiB |   3,745 | `Arena::grow` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 39.6 MiB |     874 | `Arena::grow` | `libjvm.dylib` |

##### `IdealLoopTree::loop_predication` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                  | Location       |
| -----: | -------: | ------: | --------------------------------------- | -------------- |
| 100.0% | 31.1 MiB |     760 | `PhaseIdealLoop::loop_predication_impl` | `libjvm.dylib` |
|  44.8% | 13.9 MiB |     355 | `IdealLoopTree::loop_predication`       | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                    | Location       |
| -----: | -------: | ------: | ------------------------- | -------------- |
| 100.0% |   21 MiB |     505 | `Parse::do_all_blocks`    | `libjvm.dylib` |
|   8.8% | 1.84 MiB |      39 | `Parse::build_exits`      | `libjvm.dylib` |
|   2.4% |  512 KiB |      15 | `GraphKit::set_map_clone` | `libjvm.dylib` |
|   0.4% |   96 KiB |       2 | `Parse::do_exits`         | `libjvm.dylib` |
|   0.4% |   96 KiB |       3 | `Parse::create_entry_map` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % |   Size | Samples | Callee         | Location       |
| -----: | -----: | ------: | -------------- | -------------- |
| 100.0% | 21 MiB |     537 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                          | Location       |
| ----: | -------: | ------: | ------------------------------- | -------------- |
| 99.0% | 20.8 MiB |     502 | `Parse::do_one_block`           | `libjvm.dylib` |
|  2.1% |  448 KiB |       8 | `Parse::ensure_phis_everywhere` | `libjvm.dylib` |
|  0.7% |  160 KiB |       4 | `Parse::merge_common`           | `libjvm.dylib` |
|  0.3% |   64 KiB |       2 | `GraphKit::clone_map`           | `libjvm.dylib` |
|  0.1% |   32 KiB |       1 | `GraphKit::uncommon_trap`       | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                   | Location       |
| ----: | -------: | ------: | ------------------------ | -------------- |
| 93.4% | 19.4 MiB |     473 | `Parse::do_call`         | `libjvm.dylib` |
| 22.3% | 4.63 MiB |     110 | `Parse::do_field_access` | `libjvm.dylib` |
|  9.8% | 2.03 MiB |      47 | `Parse::do_if`           | `libjvm.dylib` |
|  9.6% |    2 MiB |      43 | `Parse::do_one_bytecode` | `libjvm.dylib` |
|  8.0% | 1.66 MiB |      22 | `Parse::return_current`  | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                                | Location       |
| ----: | -------: | ------: | ----------------------------------------------------- | -------------- |
| 79.9% | 15.5 MiB |     388 | `PredictedCallGenerator::generate`                    | `libjvm.dylib` |
| 56.0% | 10.9 MiB |     222 | `ParseGenerator::generate`                            | `libjvm.dylib` |
|  3.4% |  672 KiB |      20 | `LibraryIntrinsic::generate`                          | `libjvm.dylib` |
|  1.6% |  320 KiB |      10 | `GraphKit::record_profiled_arguments_for_speculation` | `libjvm.dylib` |
|  1.3% |  261 KiB |      39 | `Compile::call_generator`                             | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 17.8 MiB |     446 | `Arena::grow` | `libjvm.dylib` |

##### `PathFrequency::to` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                                               | Location       |
| -----: | -------: | ------: | -------------------------------------------------------------------- | -------------- |
| 100.0% | 17.8 MiB |     446 | `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` | `libjvm.dylib` |

##### `IdealLoopTree::iteration_split` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                | Location       |
| ----: | -------: | ------: | ------------------------------------- | -------------- |
| 92.7% | 15.5 MiB |     285 | `IdealLoopTree::iteration_split`      | `libjvm.dylib` |
| 85.1% | 14.2 MiB |     258 | `IdealLoopTree::iteration_split_impl` | `libjvm.dylib` |
| 14.9% |  2.5 MiB |      55 | `PhaseIdealLoop::do_unswitching`      | `libjvm.dylib` |

## Hottest call stacks

Call stacks ranked by native bytes allocated in their leaf frame.

Common call stack: `Compile::Compile` (`libjvm.dylib`) ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 21.5% |  245 MiB |   1,844 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                                            |
| 18.2% |  207 MiB |   1,322 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                                 |
| 17.2% |  196 MiB |   1,404 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                             |
|  7.2% | 81.6 MiB |     922 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                                        |
|  2.3% | 26.5 MiB |     259 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                                             |
|  1.8% | 20.7 MiB |     253 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                                       |
|  1.8% | 20.6 MiB |     412 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                           |
|  1.8% | 20.6 MiB |     411 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                       |
|  1.7% | 19.1 MiB |     467 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                   |
|  1.7% | 18.9 MiB |     459 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                       |
|  1.5% |   17 MiB |     338 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                                                                |
|  0.9% | 10.3 MiB |     219 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                                                            |
|  0.9% | 10.3 MiB |     247 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize`                                                                                                                                                                                       |
|  0.7% | 7.91 MiB |     169 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                       |
|  0.7% | 7.75 MiB |     125 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize`                                                                                                                                                                                         |
|  0.6% | 7.22 MiB |     147 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                    |
|  0.6% |    7 MiB |     117 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless`                                                                                                                                                                                  |
|  0.4% | 5.13 MiB |      91 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node::out_grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                      |
|  0.4% | 4.85 MiB |     108 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` ← `PathFrequency::to` ← `PhaseIdealLoop::loop_predication_impl` ← `IdealLoopTree::loop_predication` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` |
|  0.4% | 4.38 MiB |      91 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseCFG::build_cfg` ← `PhaseCFG::PhaseCFG` ← `Compile::Code_Gen`                                                                                                                                                                                                                |
