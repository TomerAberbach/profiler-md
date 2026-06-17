# Allocated native memory profile

Allocated 1.67 GB over 617,888 samples (2.7 kB per sample).

| Category |      % |    Size | Samples |
| -------- | -----: | ------: | ------: |
| ours     | 100.0% | 1.67 GB | 617,888 |

## Hottest functions

### Self size

Functions ranked by native bytes allocated directly in the function body, excluding callees.

|     % |    Size | Samples | Function         | Location               |
| ----: | ------: | ------: | ---------------- | ---------------------- |
| 99.8% | 1.67 GB | 607,294 | `malloc_hook()`  | libasyncProfiler.dylib |
|  0.1% | 2.25 MB |   9,857 | `realloc_hook()` | libasyncProfiler.dylib |
|  0.1% |  1.3 MB |     737 | `calloc_hook()`  | libasyncProfiler.dylib |

#### Callers

Callers ranked by contribution to each function's self size. Caller attribution may be imprecise due to inlining.

##### `malloc_hook()` (libasyncProfiler.dylib)

|     % |    Size | Samples | Caller                                      | Location        |
| ----: | ------: | ------: | ------------------------------------------- | --------------- |
| 90.5% | 1.51 GB | 541,458 | `os::malloc()`                              | libjvm.dylib    |
|  4.1% |   69 MB |  10,151 | `Java_java_lang_ClassLoader_defineClass1()` | libjava.dylib   |
|  4.0% | 67.2 MB |     133 | `readBytes()`                               | libjava.dylib   |
|  0.8% | 13.1 MB |     401 | `updatewindow()`                            | libzip.dylib    |
|  0.2% | 3.23 MB |     538 | `CCalloc()`                                 | libverify.dylib |

##### `realloc_hook()` (libasyncProfiler.dylib)

|      % |    Size | Samples | Caller          | Location     |
| -----: | ------: | ------: | --------------- | ------------ |
| 100.0% | 2.25 MB |   9,857 | `os::realloc()` | libjvm.dylib |

##### `calloc_hook()` (libasyncProfiler.dylib)

|     % |    Size | Samples | Caller                               | Location        |
| ----: | ------: | ------: | ------------------------------------ | --------------- |
| 70.3% |  918 kB |     112 | `make_class_info_from_name()`        | libverify.dylib |
| 26.2% |  342 kB |     224 | `VerifyClassForMajorVersion()`       | libverify.dylib |
|  3.4% | 44.9 kB |     401 | `Java_java_util_zip_Inflater_init()` | libzip.dylib    |

### Total size

Functions ranked by total native bytes allocated in the function and all its callees.

|     % |    Size | Samples | Function                                     | Location                |
| ----: | ------: | ------: | -------------------------------------------- | ----------------------- |
| 99.8% | 1.67 GB | 607,294 | `malloc_hook()`                              | libasyncProfiler.dylib  |
| 90.3% | 1.51 GB | 541,458 | `os::malloc()`                               | libjvm.dylib            |
| 87.1% | 1.45 GB | 127,220 | `_pthread_start()`                           | libsystem_pthread.dylib |
| 87.1% | 1.45 GB | 127,220 | `thread_start()`                             | libsystem_pthread.dylib |
| 87.1% | 1.45 GB | 127,067 | `Thread::call_run()`                         | libjvm.dylib            |
| 87.1% | 1.45 GB | 127,067 | `thread_native_entry()`                      | libjvm.dylib            |
| 86.8% | 1.45 GB | 108,034 | `JavaThread::thread_main_inner()`            | libjvm.dylib            |
| 86.8% | 1.45 GB | 107,222 | `CompileBroker::compiler_thread_loop()`      | libjvm.dylib            |
| 86.8% | 1.45 GB | 106,942 | `CompileBroker::invoke_compiler_on_method()` | libjvm.dylib            |
| 86.4% | 1.44 GB |  17,548 | `Chunk::operator new()`                      | libjvm.dylib            |
| 86.3% | 1.44 GB |  17,479 | `Arena::grow()`                              | libjvm.dylib            |
| 85.1% | 1.42 GB |  26,681 | `Compile::Compile()`                         | libjvm.dylib            |
| 85.1% | 1.42 GB |  26,681 | `C2Compiler::compile_method()`               | libjvm.dylib            |
| 44.6% |  744 MB |   8,774 | `Compile::Optimize()`                        | libjvm.dylib            |
| 40.4% |  675 MB |   7,367 | `PhaseIdealLoop::optimize()`                 | libjvm.dylib            |
| 40.0% |  669 MB |   7,256 | `PhaseIdealLoop::build_and_optimize()`       | libjvm.dylib            |
| 40.0% |  669 MB |   7,256 | `PhaseIdealLoop::PhaseIdealLoop()`           | libjvm.dylib            |
| 37.5% |  626 MB |  14,961 | `Compile::Code_Gen()`                        | libjvm.dylib            |
| 28.8% |  481 MB |   4,736 | `PhaseChaitin::Register_Allocate()`          | libjvm.dylib            |
| 28.4% |  474 MB |   3,016 | `PhaseIdealLoop::Dominators()`               | libjvm.dylib            |

#### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

##### `os::malloc()` (libjvm.dylib)

|      % |    Size | Samples | Callee          | Location               |
| -----: | ------: | ------: | --------------- | ---------------------- |
| 100.0% | 1.51 GB | 541,458 | `malloc_hook()` | libasyncProfiler.dylib |
|   0.1% |    1 MB |  11,894 | `os::malloc()`  | libjvm.dylib           |

##### `_pthread_start()` (libsystem_pthread.dylib)

|      % |    Size | Samples | Callee                  | Location     |
| -----: | ------: | ------: | ----------------------- | ------------ |
| 100.0% | 1.45 GB | 127,067 | `thread_native_entry()` | libjvm.dylib |
|   0.0% | 57.4 kB |     153 | `ThreadJavaMain()`      | libjli.dylib |

##### `thread_start()` (libsystem_pthread.dylib)

|      % |    Size | Samples | Callee             | Location                |
| -----: | ------: | ------: | ------------------ | ----------------------- |
| 100.0% | 1.45 GB | 127,220 | `_pthread_start()` | libsystem_pthread.dylib |

##### `Thread::call_run()` (libjvm.dylib)

|     % |    Size | Samples | Callee                            | Location     |
| ----: | ------: | ------: | --------------------------------- | ------------ |
| 99.7% | 1.45 GB | 108,034 | `JavaThread::thread_main_inner()` | libjvm.dylib |
|  0.1% | 2.17 MB |  10,188 | `WorkerThread::run()`             | libjvm.dylib |
|  0.1% | 1.39 MB |   8,546 | `VMThread::run()`                 | libjvm.dylib |
|  0.0% | 92.4 kB |      45 | `JavaThread::post_run()`          | libjvm.dylib |
|  0.0% | 91.4 kB |      33 | `ThreadsSMRSupport::smr_delete()` | libjvm.dylib |

##### `thread_native_entry()` (libjvm.dylib)

|      % |    Size | Samples | Callee               | Location     |
| -----: | ------: | ------: | -------------------- | ------------ |
| 100.0% | 1.45 GB | 127,067 | `Thread::call_run()` | libjvm.dylib |

##### `JavaThread::thread_main_inner()` (libjvm.dylib)

|      % |    Size | Samples | Callee                                  | Location     |
| -----: | ------: | ------: | --------------------------------------- | ------------ |
| 100.0% | 1.45 GB | 107,222 | `CompileBroker::compiler_thread_loop()` | libjvm.dylib |
|   0.0% | 40.3 kB |     812 | `ServiceThread::service_thread_entry()` | libjvm.dylib |

##### `CompileBroker::compiler_thread_loop()` (libjvm.dylib)

|      % |    Size | Samples | Callee                                           | Location     |
| -----: | ------: | ------: | ------------------------------------------------ | ------------ |
| 100.0% | 1.45 GB | 106,942 | `CompileBroker::invoke_compiler_on_method()`     | libjvm.dylib |
|   0.0% |  144 kB |     278 | `CompileBroker::possibly_add_compiler_threads()` | libjvm.dylib |
|   0.0% | 16.4 kB |       2 | `CompileQueue::get()`                            | libjvm.dylib |

##### `CompileBroker::invoke_compiler_on_method()` (libjvm.dylib)

|     % |    Size | Samples | Callee                                | Location     |
| ----: | ------: | ------: | ------------------------------------- | ------------ |
| 98.0% | 1.42 GB |  26,681 | `C2Compiler::compile_method()`        | libjvm.dylib |
|  2.0% | 28.9 MB |  67,737 | `Compiler::compile_method()`          | libjvm.dylib |
|  0.0% |  232 kB |      10 | `ciEnv::ciEnv()`                      | libjvm.dylib |
|  0.0% |  187 kB |  12,499 | `CompilationLog::log_compile()`       | libjvm.dylib |
|  0.0% | 3.55 kB |      12 | `JavaThread::push_jni_handle_block()` | libjvm.dylib |

##### `Chunk::operator new()` (libjvm.dylib)

|      % |    Size | Samples | Callee         | Location     |
| -----: | ------: | ------: | -------------- | ------------ |
| 100.0% | 1.44 GB |  17,548 | `os::malloc()` | libjvm.dylib |

##### `Arena::grow()` (libjvm.dylib)

|      % |    Size | Samples | Callee                  | Location     |
| -----: | ------: | ------: | ----------------------- | ------------ |
| 100.0% | 1.44 GB |  17,479 | `Chunk::operator new()` | libjvm.dylib |

##### `Compile::Compile()` (libjvm.dylib)

|     % |    Size | Samples | Callee                                     | Location     |
| ----: | ------: | ------: | ------------------------------------------ | ------------ |
| 52.4% |  744 MB |   8,774 | `Compile::Optimize()`                      | libjvm.dylib |
| 44.1% |  626 MB |  14,961 | `Compile::Code_Gen()`                      | libjvm.dylib |
|  2.3% | 33.3 MB |     776 | `ParseGenerator::generate()`               | libjvm.dylib |
|  0.8% | 11.4 MB |     182 | `PhaseRemoveUseless::PhaseRemoveUseless()` | libjvm.dylib |
|  0.2% | 2.95 MB |      50 | `NodeHash::NodeHash()`                     | libjvm.dylib |

##### `C2Compiler::compile_method()` (libjvm.dylib)

|      % |    Size | Samples | Callee               | Location     |
| -----: | ------: | ------: | -------------------- | ------------ |
| 100.0% | 1.42 GB |  26,681 | `Compile::Compile()` | libjvm.dylib |

##### `Compile::Optimize()` (libjvm.dylib)

|     % |    Size | Samples | Callee                                   | Location     |
| ----: | ------: | ------: | ---------------------------------------- | ------------ |
| 49.9% |  371 MB |   4,285 | `PhaseIdealLoop::optimize()`             | libjvm.dylib |
| 40.8% |  304 MB |   3,082 | `Compile::optimize_loops()`              | libjvm.dylib |
|  2.0% | 15.2 MB |     352 | `PhaseCCP::do_transform()`               | libjvm.dylib |
|  1.6% | 12.2 MB |     247 | `PhaseRenumberLive::PhaseRenumberLive()` | libjvm.dylib |
|  1.6% | 11.6 MB |     208 | `PhaseIterGVN::optimize()`               | libjvm.dylib |

##### `PhaseIdealLoop::optimize()` (libjvm.dylib)

|     % |    Size | Samples | Callee                             | Location     |
| ----: | ------: | ------: | ---------------------------------- | ------------ |
| 99.1% |  669 MB |   7,256 | `PhaseIdealLoop::PhaseIdealLoop()` | libjvm.dylib |
|  0.9% | 6.41 MB |     111 | `PhaseIterGVN::optimize()`         | libjvm.dylib |

##### `PhaseIdealLoop::build_and_optimize()` (libjvm.dylib)

|     % |    Size | Samples | Callee                                                               | Location     |
| ----: | ------: | ------: | -------------------------------------------------------------------- | ------------ |
| 70.8% |  474 MB |   3,016 | `PhaseIdealLoop::Dominators()`                                       | libjvm.dylib |
|  7.1% | 47.6 MB |   1,059 | `Node_Array::grow()`                                                 | libjvm.dylib |
|  6.9% | 46.1 MB |   1,016 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to()` | libjvm.dylib |
|  4.4% | 29.3 MB |     557 | `Arena::grow()`                                                      | libjvm.dylib |
|  3.7% | 24.9 MB |     580 | `IdealLoopTree::loop_predication()`                                  | libjvm.dylib |

##### `PhaseIdealLoop::PhaseIdealLoop()` (libjvm.dylib)

|      % |   Size | Samples | Callee                                 | Location     |
| -----: | -----: | ------: | -------------------------------------- | ------------ |
| 100.0% | 669 MB |   7,256 | `PhaseIdealLoop::build_and_optimize()` | libjvm.dylib |

##### `Compile::Code_Gen()` (libjvm.dylib)

|     % |    Size | Samples | Callee                              | Location     |
| ----: | ------: | ------: | ----------------------------------- | ------------ |
| 76.8% |  481 MB |   4,736 | `PhaseChaitin::Register_Allocate()` | libjvm.dylib |
| 18.5% |  116 MB |   1,802 | `Matcher::match()`                  | libjvm.dylib |
|  1.8% | 11.5 MB |     219 | `PhaseCFG::do_global_code_motion()` | libjvm.dylib |
|  1.4% | 8.72 MB |     524 | `PhaseOutput::Output()`             | libjvm.dylib |
|  1.1% | 6.63 MB |     128 | `PhaseCFG::PhaseCFG()`              | libjvm.dylib |

##### `PhaseChaitin::Register_Allocate()` (libjvm.dylib)

|     % |    Size | Samples | Callee                                       | Location     |
| ----: | ------: | ------: | -------------------------------------------- | ------------ |
| 71.3% |  343 MB |   2,837 | `PhaseIFG::init()`                           | libjvm.dylib |
| 24.8% |  119 MB |   1,507 | `PhaseLive::compute()`                       | libjvm.dylib |
|  1.7% | 8.32 MB |     173 | `PhaseChaitin::Split()`                      | libjvm.dylib |
|  0.6% | 2.82 MB |      57 | `PhaseAggressiveCoalesce::insert_copies()`   | libjvm.dylib |
|  0.5% | 2.42 MB |      74 | `PhaseChaitin::post_allocate_copy_removal()` | libjvm.dylib |

##### `PhaseIdealLoop::Dominators()` (libjvm.dylib)

|      % |    Size | Samples | Callee           | Location     |
| -----: | ------: | ------: | ---------------- | ------------ |
| 100.0% |  474 MB |   3,014 | `Arena::grow()`  | libjvm.dylib |
|   0.0% | 65.5 kB |       2 | `NTarjan::DFS()` | libjvm.dylib |

## Hottest call stacks

Call stacks ranked by native bytes allocated in their leaf frame.

|     % |    Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 20.5% |  343 MB |   2,837 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `PhaseIFG::init()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                                |
| 15.5% |  259 MB |   1,730 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `PhaseIdealLoop::Dominators()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop()` ← `PhaseIdealLoop::optimize()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                             |
| 12.9% |  215 MB |   1,284 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `PhaseIdealLoop::Dominators()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop()` ← `PhaseIdealLoop::optimize()` ← `Compile::optimize_loops()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                               |
|  7.1% |  119 MB |   1,482 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `PhaseLive::compute()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                            |
|  3.5% | 57.7 MB |     110 | `malloc_hook()` (libasyncProfiler.dylib) ← `readBytes()` (libjava.dylib) ← `readBytes(byte[], int, int)` (java.io.FileInputStream) ← `read(byte[], int, int)` ← `fill()` (java.io.BufferedInputStream) ← `read1(byte[], int, int)` ← `implRead(byte[], int, int)` ← `read(byte[], int, int)` ← `read(byte[], int, int)` (java.io.FilterInputStream) ← `read(byte[], int, int)` (java.io.PushbackInputStream) ← `fill()` (java.util.zip.InflaterInputStream) ← `read(byte[], int, int)` ← `read(byte[], int, int)` (java.util.zip.ZipInputStream) ← `read(byte[])` (java.io.FilterInputStream) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (org.jetbrains.kotlin.preloading.ClassPreloadingUtils) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (org.jetbrains.kotlin.preloading.Preloader) ← `main(String[])` |
|  2.4% | 39.8 MB |     400 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `Matcher::xform()` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.8% | 30.6 MB |     399 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `Matcher::find_shared()` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                                           |
|  1.5% | 25.9 MB |     614 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `Arena::Arealloc()` ← `Node_Array::grow()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop()` ← `PhaseIdealLoop::optimize()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                 |
|  1.5% | 24.3 MB |     572 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop()` ← `PhaseIdealLoop::optimize()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                       |
|  1.3% | 21.8 MB |     445 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `Arena::Arealloc()` ← `Node_Array::grow()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop()` ← `PhaseIdealLoop::optimize()` ← `Compile::optimize_loops()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                   |
|  1.3% | 21.7 MB |     444 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop()` ← `PhaseIdealLoop::optimize()` ← `Compile::optimize_loops()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                         |
|  0.9% | 15.3 MB |     284 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop()` ← `PhaseIdealLoop::optimize()` ← `Compile::optimize_loops()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                |
|  0.9% | 14.9 MB |     344 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `Arena::Arealloc()` ← `Node_Array::grow()` ← `PhaseCCP::transform()` ← `PhaseCCP::do_transform()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                       |
|  0.8% |   14 MB |     273 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop()` ← `PhaseIdealLoop::optimize()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                              |
|  0.7% | 12.1 MB |     258 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `Arena::Arealloc()` ← `Node_Array::grow()` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                         |
|  0.7% | 11.4 MB |     180 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `Arena::Arealloc()` ← `Node_Array::grow()` ← `Compile::identify_useful_nodes()` ← `PhaseRemoveUseless::PhaseRemoveUseless()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                    |
|  0.6% | 10.2 MB |     228 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `Arena::Arealloc()` ← `Node_Array::grow()` ← `Matcher::ReduceInst()` ← `Matcher::match_tree()` ← `Matcher::xform()` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                |
|  0.5% | 9.11 MB |     154 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `NodeHash::hash_find_insert()` ← `PhaseIterGVN::transform_old()` ← `PhaseIterGVN::optimize()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                           |
|  0.5% | 8.03 MB |     124 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `Arena::Arealloc()` ← `Node::out_grow()` ← `Matcher::xform()` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                      |
|  0.4% | 6.88 MB |     157 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `Arena::Arealloc()` ← `PhaseIdealLoop::set_idom()` ← `PhaseIdealLoop::split_thru_region()` ← `PhaseIdealLoop::do_split_if()` ← `PhaseIdealLoop::split_if_with_blocks()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop()` ← `PhaseIdealLoop::optimize()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                    |
