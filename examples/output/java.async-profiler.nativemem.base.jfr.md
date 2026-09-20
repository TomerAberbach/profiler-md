# Allocated native memory profile

Allocated 251 MiB over 84,387 samples (3.05 KiB per sample).

| Category |      % |    Size | Samples |
| -------- | -----: | ------: | ------: |
| Native   | 100.0% | 251 MiB |  84,387 |

## Hottest functions

### Self size

Functions ranked by native bytes allocated directly in the function body, excluding callees.

#### Categories

##### Native

|     % |     Size | Samples | Function       | Location                 |
| ----: | -------: | ------: | -------------- | ------------------------ |
| 99.9% |  251 MiB |  83,679 | `malloc_hook`  | `libasyncProfiler.dylib` |
|  0.1% |  145 KiB |     696 | `realloc_hook` | `libasyncProfiler.dylib` |
| <0.1% | 1.31 KiB |      12 | `calloc_hook`  | `libasyncProfiler.dylib` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location        |
| ----: | -------: | ------: | ----------------------------------------- | --------------- |
| 97.2% |  244 MiB |  81,309 | `os::malloc`                              | `libjvm.dylib`  |
|  2.2% | 5.61 MiB |     751 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |
|  0.3% |  868 KiB |      63 | `readBytes`                               | `libjava.dylib` |
|  0.1% |  384 KiB |      12 | `updatewindow`                            | `libzip.dylib`  |
|  0.1% |  177 KiB |     235 | `Java_java_lang_ClassLoader_defineClass0` | `libjava.dylib` |

##### `realloc_hook` (`libasyncProfiler.dylib`)

|      % |    Size | Samples | Caller        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 145 KiB |     696 | `os::realloc` | `libjvm.dylib` |

##### `calloc_hook` (`libasyncProfiler.dylib`)

|      % |     Size | Samples | Caller                             | Location       |
| -----: | -------: | ------: | ---------------------------------- | -------------- |
| 100.0% | 1.31 KiB |      12 | `Java_java_util_zip_Inflater_init` | `libzip.dylib` |

### Total size

Functions ranked by total native bytes allocated in the function and all its callees.

|     % |    Size | Samples | Function                                   | Location                  |
| ----: | ------: | ------: | ------------------------------------------ | ------------------------- |
| 99.9% | 251 MiB |  83,679 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
| 97.1% | 244 MiB |  81,309 | `os::malloc`                               | `libjvm.dylib`            |
| 94.9% | 238 MiB |  35,351 | `_pthread_start`                           | `libsystem_pthread.dylib` |
| 94.9% | 238 MiB |  35,351 | `thread_start`                             | `libsystem_pthread.dylib` |
| 94.9% | 238 MiB |  35,198 | `Thread::call_run`                         | `libjvm.dylib`            |
| 94.9% | 238 MiB |  35,198 | `thread_native_entry`                      | `libjvm.dylib`            |
| 48.5% | 122 MiB |  10,584 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
| 48.5% | 122 MiB |  10,363 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
| 48.5% | 122 MiB |  10,315 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
| 48.4% | 122 MiB |   1,996 | `Chunk::operator new`                      | `libjvm.dylib`            |
| 48.4% | 122 MiB |   1,927 | `Arena::grow`                              | `libjvm.dylib`            |
| 48.2% | 121 MiB |  67,927 | `AllocateHeap`                             | `libjvm.dylib`            |
| 47.8% | 120 MiB |   2,683 | `Compile::Compile`                         | `libjvm.dylib`            |
| 47.8% | 120 MiB |   2,683 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
| 45.4% | 114 MiB |  10,686 | `VMThread::inner_execute`                  | `libjvm.dylib`            |
| 45.4% | 114 MiB |  10,686 | `VMThread::run`                            | `libjvm.dylib`            |
| 45.4% | 114 MiB |  10,517 | `VM_Operation::evaluate`                   | `libjvm.dylib`            |
| 45.4% | 114 MiB |  10,517 | `VMThread::evaluate_operation`             | `libjvm.dylib`            |
| 43.4% | 109 MiB |   2,628 | `G1CollectedHeap::do_full_collection`      | `libjvm.dylib`            |
| 43.4% | 109 MiB |   2,628 | `VM_G1CollectFull::doit`                   | `libjvm.dylib`            |

#### Categories

##### Native

|     % |     Size | Samples | Function                                  | Location                  |
| ----: | -------: | ------: | ----------------------------------------- | ------------------------- |
| 99.9% |  251 MiB |  83,679 | `malloc_hook`                             | `libasyncProfiler.dylib`  |
| 97.1% |  244 MiB |  81,309 | `os::malloc`                              | `libjvm.dylib`            |
| 94.9% |  238 MiB |  35,351 | `_pthread_start`                          | `libsystem_pthread.dylib` |
| 94.9% |  238 MiB |  35,351 | `thread_start`                            | `libsystem_pthread.dylib` |
| 94.9% |  238 MiB |  35,198 | `Thread::call_run`                        | `libjvm.dylib`            |
| 94.9% |  238 MiB |  35,198 | `thread_native_entry`                     | `libjvm.dylib`            |
| 48.5% |  122 MiB |  10,584 | `JavaThread::thread_main_inner`           | `libjvm.dylib`            |
| 48.4% |  122 MiB |   1,996 | `Chunk::operator new`                     | `libjvm.dylib`            |
| 48.4% |  122 MiB |   1,927 | `Arena::grow`                             | `libjvm.dylib`            |
| 48.2% |  121 MiB |  67,927 | `AllocateHeap`                            | `libjvm.dylib`            |
| 45.4% |  114 MiB |  10,686 | `VMThread::inner_execute`                 | `libjvm.dylib`            |
| 45.4% |  114 MiB |  10,686 | `VMThread::run`                           | `libjvm.dylib`            |
| 45.4% |  114 MiB |  10,517 | `VM_Operation::evaluate`                  | `libjvm.dylib`            |
| 45.4% |  114 MiB |  10,517 | `VMThread::evaluate_operation`            | `libjvm.dylib`            |
| 43.4% |  109 MiB |   2,628 | `G1CollectedHeap::do_full_collection`     | `libjvm.dylib`            |
| 43.4% |  109 MiB |   2,628 | `VM_G1CollectFull::doit`                  | `libjvm.dylib`            |
| 43.3% |  109 MiB |     312 | `G1FullCollector::G1FullCollector`        | `libjvm.dylib`            |
| 43.2% |  109 MiB |     108 | `G1FullGCMarker::G1FullGCMarker`          | `libjvm.dylib`            |
|  5.6% | 14.1 MiB |     427 | `Arena::Arealloc`                         | `libjvm.dylib`            |
|  3.3% | 8.33 MiB |  22,423 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`           |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `os::malloc` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location                 |
| -----: | ------: | ------: | ------------- | ------------------------ |
| 100.0% | 244 MiB |  81,309 | `malloc_hook` | `libasyncProfiler.dylib` |
|   0.2% | 376 KiB |   1,982 | `os::malloc`  | `libjvm.dylib`           |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Callee                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 238 MiB |  35,198 | `thread_native_entry` | `libjvm.dylib` |
|  <0.1% |  56 KiB |     153 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Callee           | Location                  |
| -----: | ------: | ------: | ---------------- | ------------------------- |
| 100.0% | 238 MiB |  35,351 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                          | Location       |
| ----: | -------: | ------: | ------------------------------- | -------------- |
| 51.2% |  122 MiB |  10,584 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| 47.8% |  114 MiB |  10,686 | `VMThread::run`                 | `libjvm.dylib` |
|  0.8% | 1.96 MiB |  13,130 | `WorkerThread::run`             | `libjvm.dylib` |
|  0.1% |  182 KiB |     111 | `JavaThread::post_run`          | `libjvm.dylib` |
|  0.1% |  179 KiB |      78 | `ThreadsSMRSupport::smr_delete` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |    Size | Samples | Callee             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 238 MiB |  35,198 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                                | Location       |
| -----: | ------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 122 MiB |  10,363 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |
|  <0.1% | 6.5 KiB |     221 | `ServiceThread::service_thread_entry` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                         | Location       |
| -----: | -------: | ------: | ---------------------------------------------- | -------------- |
| 100.0% |  122 MiB |  10,315 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  <0.1% | 24.6 KiB |      48 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                              | Location       |
| ----: | -------: | ------: | ----------------------------------- | -------------- |
| 98.6% |  120 MiB |   2,683 | `C2Compiler::compile_method`        | `libjvm.dylib` |
|  1.4% | 1.73 MiB |   6,231 | `Compiler::compile_method`          | `libjvm.dylib` |
| <0.1% |   15 KiB |   1,397 | `CompilationLog::log_compile`       | `libjvm.dylib` |
| <0.1% | 1.95 KiB |       2 | `ciEnv::ciEnv`                      | `libjvm.dylib` |
| <0.1% |    592 B |       2 | `JavaThread::push_jni_handle_block` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |    Size | Samples | Callee       | Location       |
| -----: | ------: | ------: | ------------ | -------------- |
| 100.0% | 122 MiB |   1,996 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 122 MiB |   1,927 | `Chunk::operator new` | `libjvm.dylib` |

##### `AllocateHeap` (`libjvm.dylib`)

|      % |    Size | Samples | Callee       | Location       |
| -----: | ------: | ------: | ------------ | -------------- |
| 100.0% | 121 MiB |  67,927 | `os::malloc` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 58.2% |   70 MiB |     998 | `Compile::Optimize`                      | `libjvm.dylib` |
| 37.6% | 45.3 MiB |   1,262 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  3.2% | 3.91 MiB |     135 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.5% |  576 KiB |      15 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.3% |  384 KiB |      12 | `NodeHash::NodeHash`                     | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |    Size | Samples | Callee             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 120 MiB |   2,683 | `Compile::Compile` | `libjvm.dylib` |

##### `VMThread::inner_execute` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                         | Location       |
| -----: | -------: | ------: | ------------------------------ | -------------- |
| 100.0% |  114 MiB |  10,517 | `VMThread::evaluate_operation` | `libjvm.dylib` |
|  <0.1% | 8.06 KiB |      86 | `outputStream::print`          | `libjvm.dylib` |
|  <0.1% |    498 B |      83 | `SafepointSynchronize::begin`  | `libjvm.dylib` |

##### `VMThread::run` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                    | Location       |
| -----: | ------: | ------: | ------------------------- | -------------- |
| 100.0% | 114 MiB |  10,686 | `VMThread::inner_execute` | `libjvm.dylib` |

##### `VM_Operation::evaluate` (`libjvm.dylib`)

|     % |    Size | Samples | Callee                            | Location       |
| ----: | ------: | ------: | --------------------------------- | -------------- |
| 95.6% | 109 MiB |   2,628 | `VM_G1CollectFull::doit`          | `libjvm.dylib` |
|  4.4% |   5 MiB |   7,828 | `VM_G1CollectForAllocation::doit` | `libjvm.dylib` |
| <0.1% |   976 B |      61 | `VM_HandshakeAllThreads::doit`    | `libjvm.dylib` |

##### `VMThread::evaluate_operation` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                   | Location       |
| -----: | ------: | ------: | ------------------------ | -------------- |
| 100.0% | 114 MiB |  10,517 | `VM_Operation::evaluate` | `libjvm.dylib` |

##### `G1CollectedHeap::do_full_collection` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                 | Location       |
| ----: | -------: | ------: | -------------------------------------- | -------------- |
| 99.8% |  109 MiB |     312 | `G1FullCollector::G1FullCollector`     | `libjvm.dylib` |
|  0.2% |  199 KiB |     386 | `G1FullCollector::collect`             | `libjvm.dylib` |
|  0.1% | 75.6 KiB |   1,930 | `G1FullCollector::complete_collection` | `libjvm.dylib` |

##### `VM_G1CollectFull::doit` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                                | Location       |
| -----: | ------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 109 MiB |   2,628 | `G1CollectedHeap::do_full_collection` | `libjvm.dylib` |

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
| 100.0% | 14.1 MiB |     427 | `Arena::grow` | `libjvm.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|     % |     Size | Samples | Callee                      | Location                 |
| ----: | -------: | ------: | --------------------------- | ------------------------ |
| 67.3% | 5.61 MiB |     751 | `malloc_hook`               | `libasyncProfiler.dylib` |
| 32.7% | 2.72 MiB |  21,672 | `JVM_DefineClassWithSource` | `libjvm.dylib`           |

## Hottest call stacks

Call stacks ranked by native bytes allocated in their leaf frame.

Common call stack: `Thread::call_run` (`libjvm.dylib`) ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 43.0% |  108 MiB |      72 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `AllocateHeap` ← `G1FullGCMarker::G1FullGCMarker` ← `G1FullCollector::G1FullCollector` ← `G1CollectedHeap::do_full_collection` ← `VM_G1CollectFull::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run`                                                                                                                                                                                                                            |
| 11.8% | 29.6 MiB |     277 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                   |
| 11.6% |   29 MiB |     351 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                  |
|  9.8% | 24.7 MiB |     236 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                       |
|  2.5% | 6.18 MiB |     146 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                              |
|  1.3% | 3.27 MiB |      53 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                   |
|  0.9% | 2.38 MiB |      73 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                         |
|  0.9% | 2.31 MiB |      71 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                             |
|  0.7% | 1.85 MiB |      40 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                             |
|  0.7% | 1.69 MiB |      51 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                 |
|  0.7% | 1.66 MiB |      50 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                             |
|  0.6% | 1.51 MiB |     462 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `AllocateHeap` ← `G1RemSetScanState::prepare` ← `G1YoungCollector::pre_evacuate_collection_set` ← `G1YoungCollector::collect` ← `G1CollectedHeap::do_collection_pause_at_safepoint_helper` ← `G1CollectedHeap::do_collection_pause_at_safepoint` ← `VM_G1CollectForAllocation::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run`                                                                                                 |
|  0.4% |  960 KiB |      29 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                             |
|  0.3% |  821 KiB |   1,974 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `AllocateHeap` ← `G1ParScanThreadState::G1ParScanThreadState` ← `G1ParScanThreadStateSet::state_for_worker` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run`                                                                                                                                                                                                                                                                                                                          |
|  0.3% |  800 KiB |      24 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                          |
|  0.3% |  768 KiB |      23 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                             |
|  0.2% |  616 KiB |      77 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `AllocateHeap` ← `G1EvacFailureRegions::pre_collection` ← `G1YoungCollector::pre_evacuate_collection_set` ← `G1YoungCollector::collect` ← `G1CollectedHeap::do_collection_pause_at_safepoint_helper` ← `G1CollectedHeap::do_collection_pause_at_safepoint` ← `VM_G1CollectForAllocation::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run`                                                                                       |
|  0.2% |  616 KiB |      77 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `AllocateHeap` ← `HeapRegionClaimer::HeapRegionClaimer` ← `G1YoungCollector::pre_evacuate_collection_set` ← `G1YoungCollector::collect` ← `G1CollectedHeap::do_collection_pause_at_safepoint_helper` ← `G1CollectedHeap::do_collection_pause_at_safepoint` ← `VM_G1CollectForAllocation::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run`                                                                                       |
|  0.2% |  616 KiB |      77 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `AllocateHeap` ← `HeapRegionClaimer::HeapRegionClaimer` ← `G1RemSet::merge_heap_roots` ← `G1YoungCollector::evacuate_initial_collection_set` ← `G1YoungCollector::collect` ← `G1CollectedHeap::do_collection_pause_at_safepoint_helper` ← `G1CollectedHeap::do_collection_pause_at_safepoint` ← `VM_G1CollectForAllocation::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run`                                                    |
|  0.2% |  616 KiB |      77 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `AllocateHeap` ← `HeapRegionClaimer::HeapRegionClaimer` ← `G1PostEvacuateCollectionSetCleanupTask2::G1PostEvacuateCollectionSetCleanupTask2` ← `G1YoungCollector::post_evacuate_collection_set` ← `G1YoungCollector::collect` ← `G1CollectedHeap::do_collection_pause_at_safepoint_helper` ← `G1CollectedHeap::do_collection_pause_at_safepoint` ← `VM_G1CollectForAllocation::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run` |
