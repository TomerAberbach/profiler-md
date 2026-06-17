# Allocated native memory profile

Allocated 1.69 GB over 625,321 samples (2.7 kB per sample).

| Category |      % |    Size | Samples |
| -------- | -----: | ------: | ------: |
| ours     | 100.0% | 1.69 GB | 625,321 |

## Hottest functions

### Self size

Functions ranked by native bytes allocated directly in the function body, excluding callees.

|     % |    Size | Samples | Function         | Location               |
| ----: | ------: | ------: | ---------------- | ---------------------- |
| 99.8% | 1.69 GB | 614,723 | `malloc_hook()`  | libasyncProfiler.dylib |
|  0.1% | 2.25 MB |   9,861 | `realloc_hook()` | libasyncProfiler.dylib |
|  0.1% |  1.3 MB |     737 | `calloc_hook()`  | libasyncProfiler.dylib |

#### Callers

Callers ranked by contribution to each function's self size. Caller attribution may be imprecise due to inlining.

##### `malloc_hook()` (libasyncProfiler.dylib)

|     % |    Size | Samples | Caller                                      | Location        |
| ----: | ------: | ------: | ------------------------------------------- | --------------- |
| 90.6% | 1.53 GB | 548,882 | `os::malloc()`                              | libjvm.dylib    |
|  4.1% |   69 MB |  10,151 | `Java_java_lang_ClassLoader_defineClass1()` | libjava.dylib   |
|  4.0% | 67.2 MB |     133 | `readBytes()`                               | libjava.dylib   |
|  0.8% | 13.1 MB |     401 | `updatewindow()`                            | libzip.dylib    |
|  0.2% | 3.23 MB |     538 | `CCalloc()`                                 | libverify.dylib |

##### `realloc_hook()` (libasyncProfiler.dylib)

|      % |    Size | Samples | Caller          | Location     |
| -----: | ------: | ------: | --------------- | ------------ |
| 100.0% | 2.25 MB |   9,861 | `os::realloc()` | libjvm.dylib |

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
| 99.8% | 1.69 GB | 614,723 | `malloc_hook()`                              | libasyncProfiler.dylib  |
| 90.4% | 1.53 GB | 548,882 | `os::malloc()`                               | libjvm.dylib            |
| 87.2% | 1.47 GB | 134,727 | `_pthread_start()`                           | libsystem_pthread.dylib |
| 87.2% | 1.47 GB | 134,727 | `thread_start()`                             | libsystem_pthread.dylib |
| 87.2% | 1.47 GB | 134,574 | `Thread::call_run()`                         | libjvm.dylib            |
| 87.2% | 1.47 GB | 134,574 | `thread_native_entry()`                      | libjvm.dylib            |
| 87.0% | 1.47 GB | 108,736 | `JavaThread::thread_main_inner()`            | libjvm.dylib            |
| 87.0% | 1.47 GB | 107,917 | `CompileBroker::compiler_thread_loop()`      | libjvm.dylib            |
| 87.0% | 1.47 GB | 107,661 | `CompileBroker::invoke_compiler_on_method()` | libjvm.dylib            |
| 86.5% | 1.46 GB |  17,307 | `Chunk::operator new()`                      | libjvm.dylib            |
| 86.5% | 1.46 GB |  17,251 | `Arena::grow()`                              | libjvm.dylib            |
| 85.7% | 1.45 GB |  26,868 | `Compile::Compile()`                         | libjvm.dylib            |
| 85.7% | 1.45 GB |  26,868 | `C2Compiler::compile_method()`               | libjvm.dylib            |
| 45.1% |  762 MB |   8,863 | `Compile::Optimize()`                        | libjvm.dylib            |
| 40.9% |  691 MB |   7,461 | `PhaseIdealLoop::optimize()`                 | libjvm.dylib            |
| 40.5% |  685 MB |   7,350 | `PhaseIdealLoop::PhaseIdealLoop()`           | libjvm.dylib            |
| 40.5% |  685 MB |   7,349 | `PhaseIdealLoop::build_and_optimize()`       | libjvm.dylib            |
| 37.6% |  636 MB |  15,069 | `Compile::Code_Gen()`                        | libjvm.dylib            |
| 29.0% |  491 MB |   4,789 | `PhaseChaitin::Register_Allocate()`          | libjvm.dylib            |
| 28.6% |  483 MB |   3,079 | `PhaseIdealLoop::Dominators()`               | libjvm.dylib            |

#### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

##### `os::malloc()` (libjvm.dylib)

|      % |    Size | Samples | Callee          | Location               |
| -----: | ------: | ------: | --------------- | ---------------------- |
| 100.0% | 1.53 GB | 548,882 | `malloc_hook()` | libasyncProfiler.dylib |
|   0.1% |    1 MB |  11,894 | `os::malloc()`  | libjvm.dylib           |

##### `_pthread_start()` (libsystem_pthread.dylib)

|      % |    Size | Samples | Callee                  | Location     |
| -----: | ------: | ------: | ----------------------- | ------------ |
| 100.0% | 1.47 GB | 134,574 | `thread_native_entry()` | libjvm.dylib |
|   0.0% | 57.4 kB |     153 | `ThreadJavaMain()`      | libjli.dylib |

##### `thread_start()` (libsystem_pthread.dylib)

|      % |    Size | Samples | Callee             | Location                |
| -----: | ------: | ------: | ------------------ | ----------------------- |
| 100.0% | 1.47 GB | 134,727 | `_pthread_start()` | libsystem_pthread.dylib |

##### `Thread::call_run()` (libjvm.dylib)

|     % |    Size | Samples | Callee                            | Location     |
| ----: | ------: | ------: | --------------------------------- | ------------ |
| 99.7% | 1.47 GB | 108,736 | `JavaThread::thread_main_inner()` | libjvm.dylib |
|  0.2% | 2.58 MB |  16,922 | `WorkerThread::run()`             | libjvm.dylib |
|  0.1% | 1.39 MB |   8,625 | `VMThread::run()`                 | libjvm.dylib |
|  0.0% |   84 kB |      41 | `JavaThread::post_run()`          | libjvm.dylib |
|  0.0% | 83.1 kB |      30 | `ThreadsSMRSupport::smr_delete()` | libjvm.dylib |

##### `thread_native_entry()` (libjvm.dylib)

|      % |    Size | Samples | Callee               | Location     |
| -----: | ------: | ------: | -------------------- | ------------ |
| 100.0% | 1.47 GB | 134,574 | `Thread::call_run()` | libjvm.dylib |

##### `JavaThread::thread_main_inner()` (libjvm.dylib)

|      % |    Size | Samples | Callee                                  | Location     |
| -----: | ------: | ------: | --------------------------------------- | ------------ |
| 100.0% | 1.47 GB | 107,917 | `CompileBroker::compiler_thread_loop()` | libjvm.dylib |
|   0.0% | 40.4 kB |     819 | `ServiceThread::service_thread_entry()` | libjvm.dylib |

##### `CompileBroker::compiler_thread_loop()` (libjvm.dylib)

|      % |    Size | Samples | Callee                                           | Location     |
| -----: | ------: | ------: | ------------------------------------------------ | ------------ |
| 100.0% | 1.47 GB | 107,661 | `CompileBroker::invoke_compiler_on_method()`     | libjvm.dylib |
|   0.0% |  132 kB |     254 | `CompileBroker::possibly_add_compiler_threads()` | libjvm.dylib |
|   0.0% | 16.4 kB |       2 | `CompileQueue::get()`                            | libjvm.dylib |

##### `CompileBroker::invoke_compiler_on_method()` (libjvm.dylib)

|     % |    Size | Samples | Callee                                | Location     |
| ----: | ------: | ------: | ------------------------------------- | ------------ |
| 98.5% | 1.45 GB |  26,868 | `C2Compiler::compile_method()`        | libjvm.dylib |
|  1.5% | 21.7 MB |  68,186 | `Compiler::compile_method()`          | libjvm.dylib |
|  0.0% |  188 kB |  12,589 | `CompilationLog::log_compile()`       | libjvm.dylib |
|  0.0% | 34.7 kB |       3 | `ciEnv::ciEnv()`                      | libjvm.dylib |
|  0.0% | 3.26 kB |      11 | `JavaThread::push_jni_handle_block()` | libjvm.dylib |

##### `Chunk::operator new()` (libjvm.dylib)

|      % |    Size | Samples | Callee         | Location     |
| -----: | ------: | ------: | -------------- | ------------ |
| 100.0% | 1.46 GB |  17,307 | `os::malloc()` | libjvm.dylib |

##### `Arena::grow()` (libjvm.dylib)

|      % |    Size | Samples | Callee                  | Location     |
| -----: | ------: | ------: | ----------------------- | ------------ |
| 100.0% | 1.46 GB |  17,251 | `Chunk::operator new()` | libjvm.dylib |

##### `Compile::Compile()` (libjvm.dylib)

|     % |    Size | Samples | Callee                                     | Location     |
| ----: | ------: | ------: | ------------------------------------------ | ------------ |
| 52.7% |  762 MB |   8,863 | `Compile::Optimize()`                      | libjvm.dylib |
| 43.9% |  636 MB |  15,069 | `Compile::Code_Gen()`                      | libjvm.dylib |
|  2.3% | 32.9 MB |     750 | `ParseGenerator::generate()`               | libjvm.dylib |
|  0.8% |   12 MB |     187 | `PhaseRemoveUseless::PhaseRemoveUseless()` | libjvm.dylib |
|  0.2% | 3.02 MB |      51 | `NodeHash::NodeHash()`                     | libjvm.dylib |

##### `C2Compiler::compile_method()` (libjvm.dylib)

|      % |    Size | Samples | Callee               | Location     |
| -----: | ------: | ------: | -------------------- | ------------ |
| 100.0% | 1.45 GB |  26,868 | `Compile::Compile()` | libjvm.dylib |

##### `Compile::Optimize()` (libjvm.dylib)

|     % |    Size | Samples | Callee                                   | Location     |
| ----: | ------: | ------: | ---------------------------------------- | ------------ |
| 50.6% |  386 MB |   4,423 | `PhaseIdealLoop::optimize()`             | libjvm.dylib |
| 40.0% |  305 MB |   3,038 | `Compile::optimize_loops()`              | libjvm.dylib |
|  2.1% | 15.7 MB |     356 | `PhaseCCP::do_transform()`               | libjvm.dylib |
|  1.7% | 12.9 MB |     218 | `PhaseIterGVN::optimize()`               | libjvm.dylib |
|  1.6% | 12.6 MB |     250 | `PhaseRenumberLive::PhaseRenumberLive()` | libjvm.dylib |

##### `PhaseIdealLoop::optimize()` (libjvm.dylib)

|     % |   Size | Samples | Callee                             | Location     |
| ----: | -----: | ------: | ---------------------------------- | ------------ |
| 99.1% | 685 MB |   7,350 | `PhaseIdealLoop::PhaseIdealLoop()` | libjvm.dylib |
|  0.9% | 6.4 MB |     111 | `PhaseIterGVN::optimize()`         | libjvm.dylib |

##### `PhaseIdealLoop::PhaseIdealLoop()` (libjvm.dylib)

|      % |    Size | Samples | Callee                                 | Location     |
| -----: | ------: | ------: | -------------------------------------- | ------------ |
| 100.0% |  685 MB |   7,349 | `PhaseIdealLoop::build_and_optimize()` | libjvm.dylib |
|   0.0% | 32.7 kB |       1 | `Arena::grow()`                        | libjvm.dylib |

##### `PhaseIdealLoop::build_and_optimize()` (libjvm.dylib)

|     % |    Size | Samples | Callee                                                               | Location     |
| ----: | ------: | ------: | -------------------------------------------------------------------- | ------------ |
| 70.6% |  483 MB |   3,079 | `PhaseIdealLoop::Dominators()`                                       | libjvm.dylib |
|  6.9% | 47.6 MB |   1,028 | `Node_Array::grow()`                                                 | libjvm.dylib |
|  6.7% |   46 MB |     982 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to()` | libjvm.dylib |
|  4.6% | 31.6 MB |     580 | `Arena::grow()`                                                      | libjvm.dylib |
|  4.5% | 30.7 MB |     685 | `IdealLoopTree::loop_predication()`                                  | libjvm.dylib |

##### `Compile::Code_Gen()` (libjvm.dylib)

|     % |    Size | Samples | Callee                              | Location     |
| ----: | ------: | ------: | ----------------------------------- | ------------ |
| 77.1% |  491 MB |   4,789 | `PhaseChaitin::Register_Allocate()` | libjvm.dylib |
| 18.4% |  117 MB |   1,761 | `Matcher::match()`                  | libjvm.dylib |
|  1.9% | 12.1 MB |     227 | `PhaseCFG::do_global_code_motion()` | libjvm.dylib |
|  1.1% | 7.13 MB |     481 | `PhaseOutput::Output()`             | libjvm.dylib |
|  1.1% | 6.76 MB |     131 | `PhaseCFG::PhaseCFG()`              | libjvm.dylib |

##### `PhaseChaitin::Register_Allocate()` (libjvm.dylib)

|     % |    Size | Samples | Callee                                       | Location     |
| ----: | ------: | ------: | -------------------------------------------- | ------------ |
| 71.2% |  349 MB |   2,877 | `PhaseIFG::init()`                           | libjvm.dylib |
| 24.6% |  121 MB |   1,502 | `PhaseLive::compute()`                       | libjvm.dylib |
|  2.1% | 10.1 MB |     182 | `PhaseChaitin::Split()`                      | libjvm.dylib |
|  0.6% | 3.01 MB |      92 | `PhaseChaitin::post_allocate_copy_removal()` | libjvm.dylib |
|  0.5% | 2.66 MB |      55 | `PhaseAggressiveCoalesce::insert_copies()`   | libjvm.dylib |

##### `PhaseIdealLoop::Dominators()` (libjvm.dylib)

|      % |   Size | Samples | Callee          | Location     |
| -----: | -----: | ------: | --------------- | ------------ |
| 100.0% | 483 MB |   3,079 | `Arena::grow()` | libjvm.dylib |

## Hottest call stacks

Call stacks ranked by native bytes allocated in their leaf frame.

|     % |    Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 20.7% |  349 MB |   2,877 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `PhaseIFG::init()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                                |
| 15.8% |  267 MB |   1,786 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `PhaseIdealLoop::Dominators()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop()` ← `PhaseIdealLoop::optimize()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                             |
| 12.8% |  216 MB |   1,293 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `PhaseIdealLoop::Dominators()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop()` ← `PhaseIdealLoop::optimize()` ← `Compile::optimize_loops()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                               |
|  7.1% |  121 MB |   1,496 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `PhaseLive::compute()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                            |
|  3.4% | 57.7 MB |     110 | `malloc_hook()` (libasyncProfiler.dylib) ← `readBytes()` (libjava.dylib) ← `readBytes(byte[], int, int)` (java.io.FileInputStream) ← `read(byte[], int, int)` ← `fill()` (java.io.BufferedInputStream) ← `read1(byte[], int, int)` ← `implRead(byte[], int, int)` ← `read(byte[], int, int)` ← `read(byte[], int, int)` (java.io.FilterInputStream) ← `read(byte[], int, int)` (java.io.PushbackInputStream) ← `fill()` (java.util.zip.InflaterInputStream) ← `read(byte[], int, int)` ← `read(byte[], int, int)` (java.util.zip.ZipInputStream) ← `read(byte[])` (java.io.FilterInputStream) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (org.jetbrains.kotlin.preloading.ClassPreloadingUtils) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (org.jetbrains.kotlin.preloading.Preloader) ← `main(String[])` |
|  2.4% |   41 MB |     413 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `Matcher::xform()` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.9% | 31.4 MB |     405 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `Matcher::find_shared()` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                                           |
|  1.5% | 26.2 MB |     605 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `Arena::Arealloc()` ← `Node_Array::grow()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop()` ← `PhaseIdealLoop::optimize()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                 |
|  1.5% | 24.6 MB |     560 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop()` ← `PhaseIdealLoop::optimize()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                       |
|  1.3% | 21.4 MB |     423 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `Arena::Arealloc()` ← `Node_Array::grow()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop()` ← `PhaseIdealLoop::optimize()` ← `Compile::optimize_loops()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                   |
|  1.3% | 21.3 MB |     422 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop()` ← `PhaseIdealLoop::optimize()` ← `Compile::optimize_loops()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                         |
|  1.0% | 16.4 MB |     294 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop()` ← `PhaseIdealLoop::optimize()` ← `Compile::optimize_loops()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                |
|  0.9% | 15.4 MB |     348 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `Arena::Arealloc()` ← `Node_Array::grow()` ← `PhaseCCP::transform()` ← `PhaseCCP::do_transform()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                       |
|  0.9% | 15.2 MB |     286 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop()` ← `PhaseIdealLoop::optimize()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                              |
|  0.7% | 12.4 MB |     266 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `Arena::Arealloc()` ← `Node_Array::grow()` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                         |
|  0.7% | 11.9 MB |     185 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `Arena::Arealloc()` ← `Node_Array::grow()` ← `Compile::identify_useful_nodes()` ← `PhaseRemoveUseless::PhaseRemoveUseless()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                    |
|  0.6% | 10.4 MB |     233 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `Arena::Arealloc()` ← `Node_Array::grow()` ← `Matcher::ReduceInst()` ← `Matcher::match_tree()` ← `Matcher::xform()` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                |
|  0.6% | 9.83 MB |     157 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `NodeHash::hash_find_insert()` ← `PhaseIterGVN::transform_old()` ← `PhaseIterGVN::optimize()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                           |
|  0.6% | 9.54 MB |     140 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `Arena::Arealloc()` ← `Node::out_grow()` ← `Matcher::xform()` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                      |
|  0.5% | 7.67 MB |     168 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `Arena::Arealloc()` ← `PhaseIdealLoop::set_idom()` ← `PhaseIdealLoop::split_thru_region()` ← `PhaseIdealLoop::do_split_if()` ← `PhaseIdealLoop::split_if_with_blocks()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop()` ← `PhaseIdealLoop::optimize()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                    |
