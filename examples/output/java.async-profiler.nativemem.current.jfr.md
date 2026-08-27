# Allocated native memory profile

Allocated 250 MiB over 83,149 samples (3.08 KiB per sample).

| Category |      % |    Size | Samples |
| -------- | -----: | ------: | ------: |
| Native   | 100.0% | 250 MiB |  83,149 |

## Hottest functions

### Self size

Functions ranked by native bytes allocated directly in the function body, excluding callees.

#### Categories

##### Native

|     % |     Size | Samples | Function       | Location                 |
| ----: | -------: | ------: | -------------- | ------------------------ |
| 99.9% |  250 MiB |  82,441 | `malloc_hook`  | `libasyncProfiler.dylib` |
|  0.1% |  144 KiB |     696 | `realloc_hook` | `libasyncProfiler.dylib` |
| <0.1% | 1.31 KiB |      12 | `calloc_hook`  | `libasyncProfiler.dylib` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location        |
| ----: | -------: | ------: | ----------------------------------------- | --------------- |
| 97.2% |  243 MiB |  80,074 | `os::malloc`                              | `libjvm.dylib`  |
|  2.2% | 5.61 MiB |     751 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |
|  0.3% |  868 KiB |      63 | `readBytes`                               | `libjava.dylib` |
|  0.1% |  384 KiB |      12 | `updatewindow`                            | `libzip.dylib`  |
|  0.1% |  176 KiB |     231 | `Java_java_lang_ClassLoader_defineClass0` | `libjava.dylib` |

##### `realloc_hook` (`libasyncProfiler.dylib`)

|      % |    Size | Samples | Caller        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 144 KiB |     696 | `os::realloc` | `libjvm.dylib` |

##### `calloc_hook` (`libasyncProfiler.dylib`)

|      % |     Size | Samples | Caller                             | Location       |
| -----: | -------: | ------: | ---------------------------------- | -------------- |
| 100.0% | 1.31 KiB |      12 | `Java_java_util_zip_Inflater_init` | `libzip.dylib` |

### Total size

Functions ranked by total native bytes allocated in the function and all its callees.

|     % |    Size | Samples | Function                                   | Location                  |
| ----: | ------: | ------: | ------------------------------------------ | ------------------------- |
| 99.9% | 250 MiB |  82,441 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
| 97.1% | 243 MiB |  80,074 | `os::malloc`                               | `libjvm.dylib`            |
| 94.9% | 238 MiB |  34,323 | `_pthread_start`                           | `libsystem_pthread.dylib` |
| 94.9% | 238 MiB |  34,323 | `thread_start`                             | `libsystem_pthread.dylib` |
| 94.9% | 238 MiB |  34,170 | `Thread::call_run`                         | `libjvm.dylib`            |
| 94.9% | 238 MiB |  34,170 | `thread_native_entry`                      | `libjvm.dylib`            |
| 48.4% | 121 MiB |  10,454 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
| 48.4% | 121 MiB |  10,232 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
| 48.4% | 121 MiB |  10,183 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
| 48.3% | 121 MiB |  66,820 | `AllocateHeap`                             | `libjvm.dylib`            |
| 48.3% | 121 MiB |   2,011 | `Chunk::operator new`                      | `libjvm.dylib`            |
| 48.2% | 121 MiB |   1,941 | `Arena::grow`                              | `libjvm.dylib`            |
| 47.4% | 119 MiB |   2,665 | `Compile::Compile`                         | `libjvm.dylib`            |
| 47.4% | 119 MiB |   2,665 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
| 45.5% | 114 MiB |   9,896 | `VMThread::inner_execute`                  | `libjvm.dylib`            |
| 45.5% | 114 MiB |   9,896 | `VMThread::run`                            | `libjvm.dylib`            |
| 45.5% | 114 MiB |   9,723 | `VM_Operation::evaluate`                   | `libjvm.dylib`            |
| 45.5% | 114 MiB |   9,723 | `VMThread::evaluate_operation`             | `libjvm.dylib`            |
| 43.5% | 109 MiB |   2,607 | `G1CollectedHeap::do_full_collection`      | `libjvm.dylib`            |
| 43.5% | 109 MiB |   2,607 | `VM_G1CollectFull::doit`                   | `libjvm.dylib`            |

#### Categories

##### Native

|     % |     Size | Samples | Function                                  | Location                  |
| ----: | -------: | ------: | ----------------------------------------- | ------------------------- |
| 99.9% |  250 MiB |  82,441 | `malloc_hook`                             | `libasyncProfiler.dylib`  |
| 97.1% |  243 MiB |  80,074 | `os::malloc`                              | `libjvm.dylib`            |
| 94.9% |  238 MiB |  34,323 | `_pthread_start`                          | `libsystem_pthread.dylib` |
| 94.9% |  238 MiB |  34,323 | `thread_start`                            | `libsystem_pthread.dylib` |
| 94.9% |  238 MiB |  34,170 | `Thread::call_run`                        | `libjvm.dylib`            |
| 94.9% |  238 MiB |  34,170 | `thread_native_entry`                     | `libjvm.dylib`            |
| 48.4% |  121 MiB |  10,454 | `JavaThread::thread_main_inner`           | `libjvm.dylib`            |
| 48.3% |  121 MiB |  66,820 | `AllocateHeap`                            | `libjvm.dylib`            |
| 48.3% |  121 MiB |   2,011 | `Chunk::operator new`                     | `libjvm.dylib`            |
| 48.2% |  121 MiB |   1,941 | `Arena::grow`                             | `libjvm.dylib`            |
| 45.5% |  114 MiB |   9,896 | `VMThread::inner_execute`                 | `libjvm.dylib`            |
| 45.5% |  114 MiB |   9,896 | `VMThread::run`                           | `libjvm.dylib`            |
| 45.5% |  114 MiB |   9,723 | `VM_Operation::evaluate`                  | `libjvm.dylib`            |
| 45.5% |  114 MiB |   9,723 | `VMThread::evaluate_operation`            | `libjvm.dylib`            |
| 43.5% |  109 MiB |   2,607 | `G1CollectedHeap::do_full_collection`     | `libjvm.dylib`            |
| 43.5% |  109 MiB |   2,607 | `VM_G1CollectFull::doit`                  | `libjvm.dylib`            |
| 43.4% |  109 MiB |     312 | `G1FullCollector::G1FullCollector`        | `libjvm.dylib`            |
| 43.3% |  109 MiB |     108 | `G1FullGCMarker::G1FullGCMarker`          | `libjvm.dylib`            |
|  5.5% | 13.9 MiB |     419 | `Arena::Arealloc`                         | `libjvm.dylib`            |
|  3.3% | 8.33 MiB |  22,423 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`           |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `os::malloc` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location                 |
| -----: | ------: | ------: | ------------- | ------------------------ |
| 100.0% | 243 MiB |  80,074 | `malloc_hook` | `libasyncProfiler.dylib` |
|   0.2% | 376 KiB |   1,980 | `os::malloc`  | `libjvm.dylib`           |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Callee                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 238 MiB |  34,170 | `thread_native_entry` | `libjvm.dylib` |
|  <0.1% |  56 KiB |     153 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Callee           | Location                  |
| -----: | ------: | ------: | ---------------- | ------------------------- |
| 100.0% | 238 MiB |  34,323 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                          | Location       |
| ----: | -------: | ------: | ------------------------------- | -------------- |
| 51.0% |  121 MiB |  10,454 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| 48.0% |  114 MiB |   9,896 | `VMThread::run`                 | `libjvm.dylib` |
|  0.9% | 2.03 MiB |  13,009 | `WorkerThread::run`             | `libjvm.dylib` |
|  0.1% |  190 KiB |     116 | `JavaThread::post_run`          | `libjvm.dylib` |
|  0.1% |  187 KiB |      69 | `ThreadsSMRSupport::smr_delete` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |    Size | Samples | Callee             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 238 MiB |  34,170 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                | Location       |
| -----: | -------: | ------: | ------------------------------------- | -------------- |
| 100.0% |  121 MiB |  10,232 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |
|  <0.1% | 6.52 KiB |     222 | `ServiceThread::service_thread_entry` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                         | Location       |
| -----: | -------: | ------: | ---------------------------------------------- | -------------- |
| 100.0% |  121 MiB |  10,183 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  <0.1% | 24.6 KiB |      48 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |
|  <0.1% |   1000 B |       1 | `CompileBroker::init_compiler_runtime`         | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                              | Location       |
| ----: | -------: | ------: | ----------------------------------- | -------------- |
| 98.0% |  119 MiB |   2,665 | `C2Compiler::compile_method`        | `libjvm.dylib` |
|  2.0% | 2.45 MiB |   6,141 | `Compiler::compile_method`          | `libjvm.dylib` |
| <0.1% | 14.8 KiB |   1,373 | `CompilationLog::log_compile`       | `libjvm.dylib` |
| <0.1% | 1.95 KiB |       2 | `ciEnv::ciEnv`                      | `libjvm.dylib` |
| <0.1% |    592 B |       2 | `JavaThread::push_jni_handle_block` | `libjvm.dylib` |

##### `AllocateHeap` (`libjvm.dylib`)

|      % |    Size | Samples | Callee       | Location       |
| -----: | ------: | ------: | ------------ | -------------- |
| 100.0% | 121 MiB |  66,820 | `os::malloc` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |    Size | Samples | Callee       | Location       |
| -----: | ------: | ------: | ------------ | -------------- |
| 100.0% | 121 MiB |   2,011 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 121 MiB |   1,941 | `Chunk::operator new` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 57.5% | 68.3 MiB |     969 | `Compile::Optimize`                      | `libjvm.dylib` |
| 38.1% | 45.2 MiB |   1,271 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  3.5% | 4.16 MiB |     143 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.5% |  640 KiB |      17 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.3% |  352 KiB |      11 | `NodeHash::NodeHash`                     | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |    Size | Samples | Callee             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 119 MiB |   2,665 | `Compile::Compile` | `libjvm.dylib` |

##### `VMThread::inner_execute` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                         | Location       |
| -----: | -------: | ------: | ------------------------------ | -------------- |
| 100.0% |  114 MiB |   9,723 | `VMThread::evaluate_operation` | `libjvm.dylib` |
|  <0.1% | 8.25 KiB |      88 | `outputStream::print`          | `libjvm.dylib` |
|  <0.1% |    510 B |      85 | `SafepointSynchronize::begin`  | `libjvm.dylib` |

##### `VMThread::run` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                    | Location       |
| -----: | ------: | ------: | ------------------------- | -------------- |
| 100.0% | 114 MiB |   9,896 | `VMThread::inner_execute` | `libjvm.dylib` |

##### `VM_Operation::evaluate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                            | Location       |
| ----: | -------: | ------: | --------------------------------- | -------------- |
| 95.6% |  109 MiB |   2,607 | `VM_G1CollectFull::doit`          | `libjvm.dylib` |
|  4.4% | 4.99 MiB |   7,055 | `VM_G1CollectForAllocation::doit` | `libjvm.dylib` |
| <0.1% |    976 B |      61 | `VM_HandshakeAllThreads::doit`    | `libjvm.dylib` |

##### `VMThread::evaluate_operation` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                   | Location       |
| -----: | ------: | ------: | ------------------------ | -------------- |
| 100.0% | 114 MiB |   9,723 | `VM_Operation::evaluate` | `libjvm.dylib` |

##### `G1CollectedHeap::do_full_collection` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                 | Location       |
| ----: | -------: | ------: | -------------------------------------- | -------------- |
| 99.7% |  109 MiB |     312 | `G1FullCollector::G1FullCollector`     | `libjvm.dylib` |
|  0.2% |  199 KiB |     386 | `G1FullCollector::collect`             | `libjvm.dylib` |
|  0.1% | 84.4 KiB |   1,909 | `G1FullCollector::complete_collection` | `libjvm.dylib` |

##### `VM_G1CollectFull::doit` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                                | Location       |
| -----: | ------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 109 MiB |   2,607 | `G1CollectedHeap::do_full_collection` | `libjvm.dylib` |

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
| 100.0% | 13.9 MiB |     419 | `Arena::grow` | `libjvm.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|     % |     Size | Samples | Callee                      | Location                 |
| ----: | -------: | ------: | --------------------------- | ------------------------ |
| 67.3% | 5.61 MiB |     751 | `malloc_hook`               | `libasyncProfiler.dylib` |
| 32.7% | 2.72 MiB |  21,672 | `JVM_DefineClassWithSource` | `libjvm.dylib`           |

## Hottest call stacks

Call stacks ranked by native bytes allocated in their leaf frame.

Common call stack: `Thread::call_run` (`libjvm.dylib`) ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 43.1% |  108 MiB |      72 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `AllocateHeap` ← `G1FullGCMarker::G1FullGCMarker` ← `G1FullCollector::G1FullCollector` ← `G1CollectedHeap::do_full_collection` ← `VM_G1CollectFull::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run`                                                                                                                                                                            |
| 11.3% | 28.2 MiB |     266 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                   |
| 11.0% | 27.6 MiB |     323 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                  |
|  9.9% | 24.8 MiB |     230 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                       |
|  2.6% | 6.45 MiB |     152 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                              |
|  1.3% | 3.22 MiB |      52 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                   |
|  0.9% | 2.16 MiB |      66 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                         |
|  0.8% | 2.13 MiB |      65 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                             |
|  0.8% | 1.98 MiB |      43 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                             |
|  0.6% | 1.63 MiB |      49 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                             |
|  0.6% | 1.63 MiB |      49 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` |
|  0.6% | 1.55 MiB |     474 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `AllocateHeap` ← `G1RemSetScanState::prepare` ← `G1YoungCollector::pre_evacuate_collection_set` ← `G1YoungCollector::collect` ← `G1CollectedHeap::do_collection_pause_at_safepoint_helper` ← `G1CollectedHeap::do_collection_pause_at_safepoint` ← `VM_G1CollectForAllocation::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run`                                                 |
|  0.4% | 1.12 MiB |      36 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::Label_Root` ← `Matcher::Label_Root` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                           |
|  0.4% |  928 KiB |      28 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                             |
|  0.3% |  807 KiB |   1,941 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `AllocateHeap` ← `G1ParScanThreadState::G1ParScanThreadState` ← `G1ParScanThreadStateSet::state_for_worker` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run`                                                                                                                                                                                                                                                                          |
|  0.3% |  704 KiB |      21 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                             |
|  0.3% |  672 KiB |      20 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                          |
|  0.2% |  632 KiB |      79 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `AllocateHeap` ← `G1EvacFailureRegions::pre_collection` ← `G1YoungCollector::pre_evacuate_collection_set` ← `G1YoungCollector::collect` ← `G1CollectedHeap::do_collection_pause_at_safepoint_helper` ← `G1CollectedHeap::do_collection_pause_at_safepoint` ← `VM_G1CollectForAllocation::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run`                                       |
|  0.2% |  632 KiB |      79 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `AllocateHeap` ← `HeapRegionClaimer::HeapRegionClaimer` ← `G1YoungCollector::pre_evacuate_collection_set` ← `G1YoungCollector::collect` ← `G1CollectedHeap::do_collection_pause_at_safepoint_helper` ← `G1CollectedHeap::do_collection_pause_at_safepoint` ← `VM_G1CollectForAllocation::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run`                                       |
|  0.2% |  632 KiB |      79 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `AllocateHeap` ← `HeapRegionClaimer::HeapRegionClaimer` ← `G1RemSet::merge_heap_roots` ← `G1YoungCollector::evacuate_initial_collection_set` ← `G1YoungCollector::collect` ← `G1CollectedHeap::do_collection_pause_at_safepoint_helper` ← `G1CollectedHeap::do_collection_pause_at_safepoint` ← `VM_G1CollectForAllocation::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run`    |
