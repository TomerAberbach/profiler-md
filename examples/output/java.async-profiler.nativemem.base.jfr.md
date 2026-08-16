# Allocated native memory profile

Allocated 243 MiB over 84,474 samples (2.95 KiB per sample).

| Category |      % |    Size | Samples |
| -------- | -----: | ------: | ------: |
| Native   | 100.0% | 243 MiB |  84,474 |

## Hottest functions

### Self size

Functions ranked by native bytes allocated directly in the function body, excluding callees.

#### Categories

##### Native

|     % |     Size | Samples | Function       | Location                 |
| ----: | -------: | ------: | -------------- | ------------------------ |
| 99.9% |  243 MiB |  83,768 | `malloc_hook`  | `libasyncProfiler.dylib` |
|  0.1% |  145 KiB |     694 | `realloc_hook` | `libasyncProfiler.dylib` |
| <0.1% | 1.31 KiB |      12 | `calloc_hook`  | `libasyncProfiler.dylib` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location        |
| ----: | -------: | ------: | ----------------------------------------- | --------------- |
| 97.1% |  236 MiB |  81,397 | `os::malloc`                              | `libjvm.dylib`  |
|  2.3% | 5.61 MiB |     751 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |
|  0.3% |  868 KiB |      63 | `readBytes`                               | `libjava.dylib` |
|  0.2% |  384 KiB |      12 | `updatewindow`                            | `libzip.dylib`  |
|  0.1% |  178 KiB |     236 | `Java_java_lang_ClassLoader_defineClass0` | `libjava.dylib` |

##### `realloc_hook` (`libasyncProfiler.dylib`)

|      % |    Size | Samples | Caller        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 145 KiB |     694 | `os::realloc` | `libjvm.dylib` |

##### `calloc_hook` (`libasyncProfiler.dylib`)

|      % |     Size | Samples | Caller                             | Location       |
| -----: | -------: | ------: | ---------------------------------- | -------------- |
| 100.0% | 1.31 KiB |      12 | `Java_java_util_zip_Inflater_init` | `libzip.dylib` |

### Total size

Functions ranked by total native bytes allocated in the function and all its callees.

|     % |    Size | Samples | Function                                   | Location                  |
| ----: | ------: | ------: | ------------------------------------------ | ------------------------- |
| 99.9% | 243 MiB |  83,768 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
| 97.0% | 236 MiB |  81,397 | `os::malloc`                               | `libjvm.dylib`            |
| 94.7% | 231 MiB |  35,527 | `_pthread_start`                           | `libsystem_pthread.dylib` |
| 94.7% | 231 MiB |  35,527 | `thread_start`                             | `libsystem_pthread.dylib` |
| 94.7% | 231 MiB |  35,374 | `Thread::call_run`                         | `libjvm.dylib`            |
| 94.7% | 231 MiB |  35,374 | `thread_native_entry`                      | `libjvm.dylib`            |
| 49.6% | 121 MiB |  68,108 | `AllocateHeap`                             | `libjvm.dylib`            |
| 47.0% | 114 MiB |  10,360 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
| 47.0% | 114 MiB |  10,139 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
| 46.9% | 114 MiB |  10,091 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
| 46.8% | 114 MiB |  10,982 | `VMThread::inner_execute`                  | `libjvm.dylib`            |
| 46.8% | 114 MiB |  10,982 | `VMThread::run`                            | `libjvm.dylib`            |
| 46.8% | 114 MiB |  10,817 | `VM_Operation::evaluate`                   | `libjvm.dylib`            |
| 46.8% | 114 MiB |  10,817 | `VMThread::evaluate_operation`             | `libjvm.dylib`            |
| 46.8% | 114 MiB |   1,896 | `Chunk::operator new`                      | `libjvm.dylib`            |
| 46.8% | 114 MiB |   1,825 | `Arena::grow`                              | `libjvm.dylib`            |
| 46.1% | 112 MiB |   2,563 | `Compile::Compile`                         | `libjvm.dylib`            |
| 46.1% | 112 MiB |   2,563 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
| 44.8% | 109 MiB |   2,623 | `G1CollectedHeap::do_full_collection`      | `libjvm.dylib`            |
| 44.8% | 109 MiB |   2,623 | `VM_G1CollectFull::doit`                   | `libjvm.dylib`            |

#### Categories

##### Native

|     % |     Size | Samples | Function                                  | Location                  |
| ----: | -------: | ------: | ----------------------------------------- | ------------------------- |
| 99.9% |  243 MiB |  83,768 | `malloc_hook`                             | `libasyncProfiler.dylib`  |
| 97.0% |  236 MiB |  81,397 | `os::malloc`                              | `libjvm.dylib`            |
| 94.7% |  231 MiB |  35,527 | `_pthread_start`                          | `libsystem_pthread.dylib` |
| 94.7% |  231 MiB |  35,527 | `thread_start`                            | `libsystem_pthread.dylib` |
| 94.7% |  231 MiB |  35,374 | `Thread::call_run`                        | `libjvm.dylib`            |
| 94.7% |  231 MiB |  35,374 | `thread_native_entry`                     | `libjvm.dylib`            |
| 49.6% |  121 MiB |  68,108 | `AllocateHeap`                            | `libjvm.dylib`            |
| 47.0% |  114 MiB |  10,360 | `JavaThread::thread_main_inner`           | `libjvm.dylib`            |
| 46.8% |  114 MiB |  10,982 | `VMThread::inner_execute`                 | `libjvm.dylib`            |
| 46.8% |  114 MiB |  10,982 | `VMThread::run`                           | `libjvm.dylib`            |
| 46.8% |  114 MiB |  10,817 | `VM_Operation::evaluate`                  | `libjvm.dylib`            |
| 46.8% |  114 MiB |  10,817 | `VMThread::evaluate_operation`            | `libjvm.dylib`            |
| 46.8% |  114 MiB |   1,896 | `Chunk::operator new`                     | `libjvm.dylib`            |
| 46.8% |  114 MiB |   1,825 | `Arena::grow`                             | `libjvm.dylib`            |
| 44.8% |  109 MiB |   2,623 | `G1CollectedHeap::do_full_collection`     | `libjvm.dylib`            |
| 44.8% |  109 MiB |   2,623 | `VM_G1CollectFull::doit`                  | `libjvm.dylib`            |
| 44.7% |  109 MiB |     312 | `G1FullCollector::G1FullCollector`        | `libjvm.dylib`            |
| 44.6% |  109 MiB |     108 | `G1FullGCMarker::G1FullGCMarker`          | `libjvm.dylib`            |
|  5.4% | 13.1 MiB |     404 | `Arena::Arealloc`                         | `libjvm.dylib`            |
|  3.4% | 8.33 MiB |  22,421 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`           |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `os::malloc` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location                 |
| -----: | ------: | ------: | ------------- | ------------------------ |
| 100.0% | 236 MiB |  81,397 | `malloc_hook` | `libasyncProfiler.dylib` |
|   0.2% | 376 KiB |   1,988 | `os::malloc`  | `libjvm.dylib`           |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Callee                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 231 MiB |  35,374 | `thread_native_entry` | `libjvm.dylib` |
|  <0.1% |  56 KiB |     153 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Callee           | Location                  |
| -----: | ------: | ------: | ---------------- | ------------------------- |
| 100.0% | 231 MiB |  35,527 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                          | Location       |
| ----: | -------: | ------: | ------------------------------- | -------------- |
| 49.6% |  114 MiB |  10,360 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| 49.4% |  114 MiB |  10,982 | `VMThread::run`                 | `libjvm.dylib` |
|  0.8% | 1.87 MiB |  13,234 | `WorkerThread::run`             | `libjvm.dylib` |
|  0.1% |  199 KiB |     119 | `JavaThread::post_run`          | `libjvm.dylib` |
|  0.1% |  195 KiB |      72 | `ThreadsSMRSupport::smr_delete` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |    Size | Samples | Callee             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 231 MiB |  35,374 | `Thread::call_run` | `libjvm.dylib` |

##### `AllocateHeap` (`libjvm.dylib`)

|      % |    Size | Samples | Callee       | Location       |
| -----: | ------: | ------: | ------------ | -------------- |
| 100.0% | 121 MiB |  68,108 | `os::malloc` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                                | Location       |
| -----: | ------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 114 MiB |  10,139 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |
|  <0.1% | 6.5 KiB |     221 | `ServiceThread::service_thread_entry` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                         | Location       |
| -----: | -------: | ------: | ---------------------------------------------- | -------------- |
| 100.0% |  114 MiB |  10,091 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  <0.1% | 24.6 KiB |      48 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                              | Location       |
| ----: | -------: | ------: | ----------------------------------- | -------------- |
| 98.2% |  112 MiB |   2,563 | `C2Compiler::compile_method`        | `libjvm.dylib` |
|  1.8% |    2 MiB |   6,142 | `Compiler::compile_method`          | `libjvm.dylib` |
| <0.1% | 14.8 KiB |   1,382 | `CompilationLog::log_compile`       | `libjvm.dylib` |
| <0.1% | 1.95 KiB |       2 | `ciEnv::ciEnv`                      | `libjvm.dylib` |
| <0.1% |    592 B |       2 | `JavaThread::push_jni_handle_block` | `libjvm.dylib` |

##### `VMThread::inner_execute` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                         | Location       |
| -----: | -------: | ------: | ------------------------------ | -------------- |
| 100.0% |  114 MiB |  10,817 | `VMThread::evaluate_operation` | `libjvm.dylib` |
|  <0.1% | 7.88 KiB |      84 | `outputStream::print`          | `libjvm.dylib` |
|  <0.1% |    486 B |      81 | `SafepointSynchronize::begin`  | `libjvm.dylib` |

##### `VMThread::run` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                    | Location       |
| -----: | ------: | ------: | ------------------------- | -------------- |
| 100.0% | 114 MiB |  10,982 | `VMThread::inner_execute` | `libjvm.dylib` |

##### `VM_Operation::evaluate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                            | Location       |
| ----: | -------: | ------: | --------------------------------- | -------------- |
| 95.7% |  109 MiB |   2,623 | `VM_G1CollectFull::doit`          | `libjvm.dylib` |
|  4.3% | 4.94 MiB |   8,131 | `VM_G1CollectForAllocation::doit` | `libjvm.dylib` |
| <0.1% |   1008 B |      63 | `VM_HandshakeAllThreads::doit`    | `libjvm.dylib` |

##### `VMThread::evaluate_operation` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                   | Location       |
| -----: | ------: | ------: | ------------------------ | -------------- |
| 100.0% | 114 MiB |  10,817 | `VM_Operation::evaluate` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |    Size | Samples | Callee       | Location       |
| -----: | ------: | ------: | ------------ | -------------- |
| 100.0% | 114 MiB |   1,896 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 114 MiB |   1,825 | `Chunk::operator new` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 58.6% | 65.8 MiB |     957 | `Compile::Optimize`                      | `libjvm.dylib` |
| 37.3% | 41.9 MiB |   1,198 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  3.2% | 3.62 MiB |     124 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.5% |  544 KiB |      14 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.3% |  320 KiB |      10 | `NodeHash::NodeHash`                     | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |    Size | Samples | Callee             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 112 MiB |   2,563 | `Compile::Compile` | `libjvm.dylib` |

##### `G1CollectedHeap::do_full_collection` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                 | Location       |
| ----: | -------: | ------: | -------------------------------------- | -------------- |
| 99.8% |  109 MiB |     312 | `G1FullCollector::G1FullCollector`     | `libjvm.dylib` |
|  0.2% |  199 KiB |     386 | `G1FullCollector::collect`             | `libjvm.dylib` |
|  0.1% | 78.6 KiB |   1,925 | `G1FullCollector::complete_collection` | `libjvm.dylib` |

##### `VM_G1CollectFull::doit` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                                | Location       |
| -----: | ------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 109 MiB |   2,623 | `G1CollectedHeap::do_full_collection` | `libjvm.dylib` |

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
| 100.0% | 13.1 MiB |     404 | `Arena::grow` | `libjvm.dylib` |

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
| 44.4% |  108 MiB |      72 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `AllocateHeap` ← `G1FullGCMarker::G1FullGCMarker` ← `G1FullCollector::G1FullCollector` ← `G1CollectedHeap::do_full_collection` ← `VM_G1CollectFull::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run`                                                                                                                                                                            |
| 11.3% | 27.5 MiB |     260 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                   |
| 10.9% | 26.6 MiB |     321 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                  |
|  9.7% | 23.6 MiB |     222 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                       |
|  2.3% | 5.68 MiB |     131 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                              |
|  1.3% | 3.08 MiB |      51 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                   |
|  0.9% | 2.16 MiB |      69 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                             |
|  0.8% | 2.06 MiB |      66 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                         |
|  0.7% | 1.69 MiB |      36 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                             |
|  0.6% |  1.5 MiB |      48 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` |
|  0.6% | 1.47 MiB |      47 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                             |
|  0.6% | 1.47 MiB |     450 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `AllocateHeap` ← `G1RemSetScanState::prepare` ← `G1YoungCollector::pre_evacuate_collection_set` ← `G1YoungCollector::collect` ← `G1CollectedHeap::do_collection_pause_at_safepoint_helper` ← `G1CollectedHeap::do_collection_pause_at_safepoint` ← `VM_G1CollectForAllocation::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run`                                                 |
|  0.4% |  896 KiB |      27 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                             |
|  0.3% |  812 KiB |   1,864 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `AllocateHeap` ← `G1ParScanThreadState::G1ParScanThreadState` ← `G1ParScanThreadStateSet::state_for_worker` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run`                                                                                                                                                                                                                                                                          |
|  0.3% |  736 KiB |      22 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                          |
|  0.3% |  672 KiB |      21 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::Label_Root` ← `Matcher::Label_Root` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                           |
|  0.3% |  640 KiB |      20 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                             |
|  0.2% |  600 KiB |      75 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `AllocateHeap` ← `G1EvacFailureRegions::pre_collection` ← `G1YoungCollector::pre_evacuate_collection_set` ← `G1YoungCollector::collect` ← `G1CollectedHeap::do_collection_pause_at_safepoint_helper` ← `G1CollectedHeap::do_collection_pause_at_safepoint` ← `VM_G1CollectForAllocation::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run`                                       |
|  0.2% |  600 KiB |      75 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `AllocateHeap` ← `HeapRegionClaimer::HeapRegionClaimer` ← `G1YoungCollector::pre_evacuate_collection_set` ← `G1YoungCollector::collect` ← `G1CollectedHeap::do_collection_pause_at_safepoint_helper` ← `G1CollectedHeap::do_collection_pause_at_safepoint` ← `VM_G1CollectForAllocation::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run`                                       |
|  0.2% |  600 KiB |      75 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `AllocateHeap` ← `HeapRegionClaimer::HeapRegionClaimer` ← `G1RemSet::merge_heap_roots` ← `G1YoungCollector::evacuate_initial_collection_set` ← `G1YoungCollector::collect` ← `G1CollectedHeap::do_collection_pause_at_safepoint_helper` ← `G1CollectedHeap::do_collection_pause_at_safepoint` ← `VM_G1CollectForAllocation::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run`    |
