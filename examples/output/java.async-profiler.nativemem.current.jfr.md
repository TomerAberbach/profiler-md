# Allocated native memory profile

Allocated 246 MiB over 82,688 samples (3.04 KiB per sample).

| Category |      % |    Size | Samples |
| -------- | -----: | ------: | ------: |
| Native   | 100.0% | 246 MiB |  82,688 |

## Hottest functions

### Self size

Functions ranked by native bytes allocated directly in the function body, excluding callees.

#### Categories

##### Native

|     % |     Size | Samples | Function       | Location                 |
| ----: | -------: | ------: | -------------- | ------------------------ |
| 99.9% |  246 MiB |  81,982 | `malloc_hook`  | `libasyncProfiler.dylib` |
|  0.1% |  142 KiB |     694 | `realloc_hook` | `libasyncProfiler.dylib` |
| <0.1% | 1.31 KiB |      12 | `calloc_hook`  | `libasyncProfiler.dylib` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location        |
| ----: | -------: | ------: | ----------------------------------------- | --------------- |
| 97.1% |  239 MiB |  79,610 | `os::malloc`                              | `libjvm.dylib`  |
|  2.3% | 5.61 MiB |     751 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |
|  0.3% |  868 KiB |      63 | `readBytes`                               | `libjava.dylib` |
|  0.2% |  384 KiB |      12 | `updatewindow`                            | `libzip.dylib`  |
|  0.1% |  180 KiB |     238 | `Java_java_lang_ClassLoader_defineClass0` | `libjava.dylib` |

##### `realloc_hook` (`libasyncProfiler.dylib`)

|      % |    Size | Samples | Caller        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 142 KiB |     694 | `os::realloc` | `libjvm.dylib` |

##### `calloc_hook` (`libasyncProfiler.dylib`)

|      % |     Size | Samples | Caller                             | Location       |
| -----: | -------: | ------: | ---------------------------------- | -------------- |
| 100.0% | 1.31 KiB |      12 | `Java_java_util_zip_Inflater_init` | `libzip.dylib` |

### Total size

Functions ranked by total native bytes allocated in the function and all its callees.

|     % |    Size | Samples | Function                                   | Location                  |
| ----: | ------: | ------: | ------------------------------------------ | ------------------------- |
| 99.9% | 246 MiB |  81,982 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
| 97.0% | 239 MiB |  79,610 | `os::malloc`                               | `libjvm.dylib`            |
| 94.7% | 233 MiB |  33,575 | `_pthread_start`                           | `libsystem_pthread.dylib` |
| 94.7% | 233 MiB |  33,575 | `thread_start`                             | `libsystem_pthread.dylib` |
| 94.7% | 233 MiB |  33,422 | `Thread::call_run`                         | `libjvm.dylib`            |
| 94.7% | 233 MiB |  33,422 | `thread_native_entry`                      | `libjvm.dylib`            |
| 49.2% | 121 MiB |  66,489 | `AllocateHeap`                             | `libjvm.dylib`            |
| 47.3% | 116 MiB |  10,348 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
| 47.3% | 116 MiB |  10,128 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
| 47.3% | 116 MiB |  10,080 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
| 47.2% | 116 MiB |   1,918 | `Chunk::operator new`                      | `libjvm.dylib`            |
| 47.2% | 116 MiB |   1,846 | `Arena::grow`                              | `libjvm.dylib`            |
| 46.6% | 115 MiB |   2,569 | `Compile::Compile`                         | `libjvm.dylib`            |
| 46.6% | 115 MiB |   2,569 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
| 46.4% | 114 MiB |   9,171 | `VMThread::inner_execute`                  | `libjvm.dylib`            |
| 46.4% | 114 MiB |   9,171 | `VMThread::run`                            | `libjvm.dylib`            |
| 46.4% | 114 MiB |   8,994 | `VM_Operation::evaluate`                   | `libjvm.dylib`            |
| 46.4% | 114 MiB |   8,994 | `VMThread::evaluate_operation`             | `libjvm.dylib`            |
| 44.4% | 109 MiB |   2,611 | `G1CollectedHeap::do_full_collection`      | `libjvm.dylib`            |
| 44.4% | 109 MiB |   2,611 | `VM_G1CollectFull::doit`                   | `libjvm.dylib`            |

#### Categories

##### Native

|     % |     Size | Samples | Function                                  | Location                  |
| ----: | -------: | ------: | ----------------------------------------- | ------------------------- |
| 99.9% |  246 MiB |  81,982 | `malloc_hook`                             | `libasyncProfiler.dylib`  |
| 97.0% |  239 MiB |  79,610 | `os::malloc`                              | `libjvm.dylib`            |
| 94.7% |  233 MiB |  33,575 | `_pthread_start`                          | `libsystem_pthread.dylib` |
| 94.7% |  233 MiB |  33,575 | `thread_start`                            | `libsystem_pthread.dylib` |
| 94.7% |  233 MiB |  33,422 | `Thread::call_run`                        | `libjvm.dylib`            |
| 94.7% |  233 MiB |  33,422 | `thread_native_entry`                     | `libjvm.dylib`            |
| 49.2% |  121 MiB |  66,489 | `AllocateHeap`                            | `libjvm.dylib`            |
| 47.3% |  116 MiB |  10,348 | `JavaThread::thread_main_inner`           | `libjvm.dylib`            |
| 47.2% |  116 MiB |   1,918 | `Chunk::operator new`                     | `libjvm.dylib`            |
| 47.2% |  116 MiB |   1,846 | `Arena::grow`                             | `libjvm.dylib`            |
| 46.4% |  114 MiB |   9,171 | `VMThread::inner_execute`                 | `libjvm.dylib`            |
| 46.4% |  114 MiB |   9,171 | `VMThread::run`                           | `libjvm.dylib`            |
| 46.4% |  114 MiB |   8,994 | `VM_Operation::evaluate`                  | `libjvm.dylib`            |
| 46.4% |  114 MiB |   8,994 | `VMThread::evaluate_operation`            | `libjvm.dylib`            |
| 44.4% |  109 MiB |   2,611 | `G1CollectedHeap::do_full_collection`     | `libjvm.dylib`            |
| 44.4% |  109 MiB |   2,611 | `VM_G1CollectFull::doit`                  | `libjvm.dylib`            |
| 44.2% |  109 MiB |     312 | `G1FullCollector::G1FullCollector`        | `libjvm.dylib`            |
| 44.2% |  109 MiB |     108 | `G1FullGCMarker::G1FullGCMarker`          | `libjvm.dylib`            |
|  5.2% | 12.8 MiB |     386 | `Arena::Arealloc`                         | `libjvm.dylib`            |
|  3.4% | 8.33 MiB |  22,421 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`           |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `os::malloc` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location                 |
| -----: | ------: | ------: | ------------- | ------------------------ |
| 100.0% | 239 MiB |  79,610 | `malloc_hook` | `libasyncProfiler.dylib` |
|   0.2% | 376 KiB |   1,987 | `os::malloc`  | `libjvm.dylib`           |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Callee                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 233 MiB |  33,422 | `thread_native_entry` | `libjvm.dylib` |
|  <0.1% |  56 KiB |     153 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Callee           | Location                  |
| -----: | ------: | ------: | ---------------- | ------------------------- |
| 100.0% | 233 MiB |  33,575 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                          | Location       |
| ----: | -------: | ------: | ------------------------------- | -------------- |
| 50.0% |  116 MiB |  10,348 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| 49.0% |  114 MiB |   9,171 | `VMThread::run`                 | `libjvm.dylib` |
|  0.9% | 2.05 MiB |  13,081 | `WorkerThread::run`             | `libjvm.dylib` |
|  0.1% |  190 KiB |     115 | `JavaThread::post_run`          | `libjvm.dylib` |
|  0.1% |  187 KiB |      69 | `ThreadsSMRSupport::smr_delete` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |    Size | Samples | Callee             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 233 MiB |  33,422 | `Thread::call_run` | `libjvm.dylib` |

##### `AllocateHeap` (`libjvm.dylib`)

|      % |    Size | Samples | Callee       | Location       |
| -----: | ------: | ------: | ------------ | -------------- |
| 100.0% | 121 MiB |  66,489 | `os::malloc` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                | Location       |
| -----: | -------: | ------: | ------------------------------------- | -------------- |
| 100.0% |  116 MiB |  10,128 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |
|  <0.1% | 6.49 KiB |     220 | `ServiceThread::service_thread_entry` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                         | Location       |
| -----: | -------: | ------: | ---------------------------------------------- | -------------- |
| 100.0% |  116 MiB |  10,080 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  <0.1% | 24.6 KiB |      48 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                              | Location       |
| ----: | -------: | ------: | ----------------------------------- | -------------- |
| 98.5% |  115 MiB |   2,569 | `C2Compiler::compile_method`        | `libjvm.dylib` |
|  1.5% | 1.69 MiB |   6,121 | `Compiler::compile_method`          | `libjvm.dylib` |
| <0.1% | 14.9 KiB |   1,383 | `CompilationLog::log_compile`       | `libjvm.dylib` |
| <0.1% | 4.88 KiB |       5 | `ciEnv::ciEnv`                      | `libjvm.dylib` |
| <0.1% |    592 B |       2 | `JavaThread::push_jni_handle_block` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |    Size | Samples | Callee       | Location       |
| -----: | ------: | ------: | ------------ | -------------- |
| 100.0% | 116 MiB |   1,918 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 116 MiB |   1,846 | `Chunk::operator new` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 57.9% | 66.4 MiB |     940 | `Compile::Optimize`                      | `libjvm.dylib` |
| 37.7% | 43.2 MiB |   1,210 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  3.5% | 4.03 MiB |     138 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.5% |  576 KiB |      15 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.3% |  352 KiB |      11 | `NodeHash::NodeHash`                     | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |    Size | Samples | Callee             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 115 MiB |   2,569 | `Compile::Compile` | `libjvm.dylib` |

##### `VMThread::inner_execute` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                         | Location       |
| -----: | -------: | ------: | ------------------------------ | -------------- |
| 100.0% |  114 MiB |   8,994 | `VMThread::evaluate_operation` | `libjvm.dylib` |
|  <0.1% | 8.44 KiB |      90 | `outputStream::print`          | `libjvm.dylib` |
|  <0.1% |    522 B |      87 | `SafepointSynchronize::begin`  | `libjvm.dylib` |

##### `VMThread::run` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                    | Location       |
| -----: | ------: | ------: | ------------------------- | -------------- |
| 100.0% | 114 MiB |   9,171 | `VMThread::inner_execute` | `libjvm.dylib` |

##### `VM_Operation::evaluate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                            | Location       |
| ----: | -------: | ------: | --------------------------------- | -------------- |
| 95.6% |  109 MiB |   2,611 | `VM_G1CollectFull::doit`          | `libjvm.dylib` |
|  4.4% | 4.98 MiB |   6,322 | `VM_G1CollectForAllocation::doit` | `libjvm.dylib` |
| <0.1% |    976 B |      61 | `VM_HandshakeAllThreads::doit`    | `libjvm.dylib` |

##### `VMThread::evaluate_operation` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                   | Location       |
| -----: | ------: | ------: | ------------------------ | -------------- |
| 100.0% | 114 MiB |   8,994 | `VM_Operation::evaluate` | `libjvm.dylib` |

##### `G1CollectedHeap::do_full_collection` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                 | Location       |
| ----: | -------: | ------: | -------------------------------------- | -------------- |
| 99.7% |  109 MiB |     312 | `G1FullCollector::G1FullCollector`     | `libjvm.dylib` |
|  0.2% |  195 KiB |     379 | `G1FullCollector::collect`             | `libjvm.dylib` |
|  0.1% | 92.5 KiB |   1,920 | `G1FullCollector::complete_collection` | `libjvm.dylib` |

##### `VM_G1CollectFull::doit` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                                | Location       |
| -----: | ------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 109 MiB |   2,611 | `G1CollectedHeap::do_full_collection` | `libjvm.dylib` |

##### `G1FullCollector::G1FullCollector` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                             | Location       |
| ----: | -------: | ------: | -------------------------------------------------- | -------------- |
| 99.8% |  109 MiB |     108 | `G1FullGCMarker::G1FullGCMarker`                   | `libjvm.dylib` |
|  0.1% |  165 KiB |     100 | `AllocateHeap`                                     | `libjvm.dylib` |
| <0.1% |   12 KiB |      88 | `G1FullGCCompactionPoint::G1FullGCCompactionPoint` | `libjvm.dylib` |
| <0.1% | 9.28 KiB |       4 | `PreservedMarksSet::init`                          | `libjvm.dylib` |
| <0.1% | 8.25 KiB |       4 | `G1BiasedMappedArrayBase::create_new_base_array`   | `libjvm.dylib` |

##### `G1FullGCMarker::G1FullGCMarker` (`libjvm.dylib`)

|     % |    Size | Samples | Callee                                           | Location       |
| ----: | ------: | ------: | ------------------------------------------------ | -------------- |
| 99.5% | 108 MiB |      72 | `AllocateHeap`                                   | `libjvm.dylib` |
|  0.5% | 576 KiB |      36 | `G1RegionMarkStatsCache::G1RegionMarkStatsCache` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 12.8 MiB |     386 | `Arena::grow` | `libjvm.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|     % |     Size | Samples | Callee                      | Location                 |
| ----: | -------: | ------: | --------------------------- | ------------------------ |
| 67.3% | 5.61 MiB |     751 | `malloc_hook`               | `libasyncProfiler.dylib` |
| 32.7% | 2.72 MiB |  21,670 | `JVM_DefineClassWithSource` | `libjvm.dylib`           |

## Hottest call stacks

Call stacks ranked by native bytes allocated in their leaf frame.

Common call stack: `Thread::call_run` (`libjvm.dylib`) ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 43.9% |  108 MiB |      72 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `AllocateHeap` ← `G1FullGCMarker::G1FullGCMarker` ← `G1FullCollector::G1FullCollector` ← `G1CollectedHeap::do_full_collection` ← `VM_G1CollectFull::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run`                                                                                                                                                                            |
| 11.3% | 27.9 MiB |     267 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                   |
| 11.2% | 27.6 MiB |     333 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                  |
|  9.9% | 24.4 MiB |     239 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                       |
|  2.4% | 5.85 MiB |     140 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                              |
|  1.3% | 3.11 MiB |      52 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                   |
|  0.9% | 2.16 MiB |      66 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                         |
|  0.9% | 2.16 MiB |      66 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                             |
|  0.7% | 1.83 MiB |      41 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                             |
|  0.6% | 1.59 MiB |     486 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `AllocateHeap` ← `G1RemSetScanState::prepare` ← `G1YoungCollector::pre_evacuate_collection_set` ← `G1YoungCollector::collect` ← `G1CollectedHeap::do_collection_pause_at_safepoint_helper` ← `G1CollectedHeap::do_collection_pause_at_safepoint` ← `VM_G1CollectForAllocation::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run`                                                 |
|  0.6% |  1.5 MiB |      45 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                             |
|  0.6% |  1.5 MiB |      45 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` |
|  0.4% |  896 KiB |      27 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                             |
|  0.3% |  863 KiB |      27 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::Label_Root` ← `Matcher::Label_Root` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                           |
|  0.3% |  815 KiB |   1,986 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `AllocateHeap` ← `G1ParScanThreadState::G1ParScanThreadState` ← `G1ParScanThreadStateSet::state_for_worker` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run`                                                                                                                                                                                                                                                                          |
|  0.3% |  704 KiB |      21 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                             |
|  0.3% |  672 KiB |      20 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                          |
|  0.3% |  648 KiB |      81 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `AllocateHeap` ← `G1EvacFailureRegions::pre_collection` ← `G1YoungCollector::pre_evacuate_collection_set` ← `G1YoungCollector::collect` ← `G1CollectedHeap::do_collection_pause_at_safepoint_helper` ← `G1CollectedHeap::do_collection_pause_at_safepoint` ← `VM_G1CollectForAllocation::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run`                                       |
|  0.3% |  648 KiB |      81 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `AllocateHeap` ← `HeapRegionClaimer::HeapRegionClaimer` ← `G1YoungCollector::pre_evacuate_collection_set` ← `G1YoungCollector::collect` ← `G1CollectedHeap::do_collection_pause_at_safepoint_helper` ← `G1CollectedHeap::do_collection_pause_at_safepoint` ← `VM_G1CollectForAllocation::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run`                                       |
|  0.3% |  648 KiB |      81 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `AllocateHeap` ← `HeapRegionClaimer::HeapRegionClaimer` ← `G1RemSet::merge_heap_roots` ← `G1YoungCollector::evacuate_initial_collection_set` ← `G1YoungCollector::collect` ← `G1CollectedHeap::do_collection_pause_at_safepoint_helper` ← `G1CollectedHeap::do_collection_pause_at_safepoint` ← `VM_G1CollectForAllocation::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run`    |
