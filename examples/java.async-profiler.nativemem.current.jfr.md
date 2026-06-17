# Allocated native memory profile

Allocated 258 MB over 82,688 samples (3.12 kB per sample).

| Category |      % |   Size | Samples |
| -------- | -----: | -----: | ------: |
| ours     | 100.0% | 258 MB |  82,688 |

## Hottest functions

### Self size

Functions ranked by native bytes allocated directly in the function body, excluding callees.

|     % |    Size | Samples | Function         | Location               |
| ----: | ------: | ------: | ---------------- | ---------------------- |
| 99.9% |  258 MB |  81,982 | `malloc_hook()`  | libasyncProfiler.dylib |
|  0.1% |  145 kB |     694 | `realloc_hook()` | libasyncProfiler.dylib |
|  0.0% | 1.34 kB |      12 | `calloc_hook()`  | libasyncProfiler.dylib |

#### Callers

Callers ranked by contribution to each function's self size. Caller attribution may be imprecise due to inlining.

##### `malloc_hook()` (libasyncProfiler.dylib)

|     % |    Size | Samples | Caller                                      | Location      |
| ----: | ------: | ------: | ------------------------------------------- | ------------- |
| 97.1% |  250 MB |  79,610 | `os::malloc()`                              | libjvm.dylib  |
|  2.3% | 5.88 MB |     751 | `Java_java_lang_ClassLoader_defineClass1()` | libjava.dylib |
|  0.3% |  889 kB |      63 | `readBytes()`                               | libjava.dylib |
|  0.2% |  393 kB |      12 | `updatewindow()`                            | libzip.dylib  |
|  0.1% |  184 kB |     238 | `Java_java_lang_ClassLoader_defineClass0()` | libjava.dylib |

##### `realloc_hook()` (libasyncProfiler.dylib)

|      % |   Size | Samples | Caller          | Location     |
| -----: | -----: | ------: | --------------- | ------------ |
| 100.0% | 145 kB |     694 | `os::realloc()` | libjvm.dylib |

##### `calloc_hook()` (libasyncProfiler.dylib)

|      % |    Size | Samples | Caller                               | Location     |
| -----: | ------: | ------: | ------------------------------------ | ------------ |
| 100.0% | 1.34 kB |      12 | `Java_java_util_zip_Inflater_init()` | libzip.dylib |

### Total size

Functions ranked by total native bytes allocated in the function and all its callees.

|     % |   Size | Samples | Function                                     | Location                |
| ----: | -----: | ------: | -------------------------------------------- | ----------------------- |
| 99.9% | 258 MB |  81,982 | `malloc_hook()`                              | libasyncProfiler.dylib  |
| 97.0% | 250 MB |  79,610 | `os::malloc()`                               | libjvm.dylib            |
| 94.7% | 244 MB |  33,575 | `_pthread_start()`                           | libsystem_pthread.dylib |
| 94.7% | 244 MB |  33,575 | `thread_start()`                             | libsystem_pthread.dylib |
| 94.7% | 244 MB |  33,422 | `Thread::call_run()`                         | libjvm.dylib            |
| 94.7% | 244 MB |  33,422 | `thread_native_entry()`                      | libjvm.dylib            |
| 49.2% | 127 MB |  66,489 | `AllocateHeap()`                             | libjvm.dylib            |
| 47.3% | 122 MB |  10,348 | `JavaThread::thread_main_inner()`            | libjvm.dylib            |
| 47.3% | 122 MB |  10,128 | `CompileBroker::compiler_thread_loop()`      | libjvm.dylib            |
| 47.3% | 122 MB |  10,080 | `CompileBroker::invoke_compiler_on_method()` | libjvm.dylib            |
| 47.2% | 122 MB |   1,918 | `Chunk::operator new()`                      | libjvm.dylib            |
| 47.2% | 122 MB |   1,846 | `Arena::grow()`                              | libjvm.dylib            |
| 46.6% | 120 MB |   2,569 | `Compile::Compile()`                         | libjvm.dylib            |
| 46.6% | 120 MB |   2,569 | `C2Compiler::compile_method()`               | libjvm.dylib            |
| 46.4% | 120 MB |   9,171 | `VMThread::inner_execute()`                  | libjvm.dylib            |
| 46.4% | 120 MB |   9,171 | `VMThread::run()`                            | libjvm.dylib            |
| 46.4% | 120 MB |   8,994 | `VM_Operation::evaluate()`                   | libjvm.dylib            |
| 46.4% | 120 MB |   8,994 | `VMThread::evaluate_operation()`             | libjvm.dylib            |
| 44.4% | 114 MB |   2,611 | `G1CollectedHeap::do_full_collection()`      | libjvm.dylib            |
| 44.4% | 114 MB |   2,611 | `VM_G1CollectFull::doit()`                   | libjvm.dylib            |

#### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

##### `os::malloc()` (libjvm.dylib)

|      % |   Size | Samples | Callee          | Location               |
| -----: | -----: | ------: | --------------- | ---------------------- |
| 100.0% | 250 MB |  79,610 | `malloc_hook()` | libasyncProfiler.dylib |
|   0.2% | 385 kB |   1,987 | `os::malloc()`  | libjvm.dylib           |

##### `_pthread_start()` (libsystem_pthread.dylib)

|      % |    Size | Samples | Callee                  | Location     |
| -----: | ------: | ------: | ----------------------- | ------------ |
| 100.0% |  244 MB |  33,422 | `thread_native_entry()` | libjvm.dylib |
|   0.0% | 57.4 kB |     153 | `ThreadJavaMain()`      | libjli.dylib |

##### `thread_start()` (libsystem_pthread.dylib)

|      % |   Size | Samples | Callee             | Location                |
| -----: | -----: | ------: | ------------------ | ----------------------- |
| 100.0% | 244 MB |  33,575 | `_pthread_start()` | libsystem_pthread.dylib |

##### `Thread::call_run()` (libjvm.dylib)

|     % |    Size | Samples | Callee                            | Location     |
| ----: | ------: | ------: | --------------------------------- | ------------ |
| 50.0% |  122 MB |  10,348 | `JavaThread::thread_main_inner()` | libjvm.dylib |
| 49.0% |  120 MB |   9,171 | `VMThread::run()`                 | libjvm.dylib |
|  0.9% | 2.15 MB |  13,081 | `WorkerThread::run()`             | libjvm.dylib |
|  0.1% |  195 kB |     115 | `JavaThread::post_run()`          | libjvm.dylib |
|  0.1% |  191 kB |      69 | `ThreadsSMRSupport::smr_delete()` | libjvm.dylib |

##### `thread_native_entry()` (libjvm.dylib)

|      % |   Size | Samples | Callee               | Location     |
| -----: | -----: | ------: | -------------------- | ------------ |
| 100.0% | 244 MB |  33,422 | `Thread::call_run()` | libjvm.dylib |

##### `AllocateHeap()` (libjvm.dylib)

|      % |   Size | Samples | Callee         | Location     |
| -----: | -----: | ------: | -------------- | ------------ |
| 100.0% | 127 MB |  66,489 | `os::malloc()` | libjvm.dylib |

##### `JavaThread::thread_main_inner()` (libjvm.dylib)

|      % |    Size | Samples | Callee                                  | Location     |
| -----: | ------: | ------: | --------------------------------------- | ------------ |
| 100.0% |  122 MB |  10,128 | `CompileBroker::compiler_thread_loop()` | libjvm.dylib |
|   0.0% | 6.64 kB |     220 | `ServiceThread::service_thread_entry()` | libjvm.dylib |

##### `CompileBroker::compiler_thread_loop()` (libjvm.dylib)

|      % |    Size | Samples | Callee                                           | Location     |
| -----: | ------: | ------: | ------------------------------------------------ | ------------ |
| 100.0% |  122 MB |  10,080 | `CompileBroker::invoke_compiler_on_method()`     | libjvm.dylib |
|   0.0% | 25.2 kB |      48 | `CompileBroker::possibly_add_compiler_threads()` | libjvm.dylib |

##### `CompileBroker::invoke_compiler_on_method()` (libjvm.dylib)

|     % |    Size | Samples | Callee                                | Location     |
| ----: | ------: | ------: | ------------------------------------- | ------------ |
| 98.5% |  120 MB |   2,569 | `C2Compiler::compile_method()`        | libjvm.dylib |
|  1.5% | 1.77 MB |   6,121 | `Compiler::compile_method()`          | libjvm.dylib |
|  0.0% | 15.3 kB |   1,383 | `CompilationLog::log_compile()`       | libjvm.dylib |
|  0.0% |    5 kB |       5 | `ciEnv::ciEnv()`                      | libjvm.dylib |
|  0.0% |   592 B |       2 | `JavaThread::push_jni_handle_block()` | libjvm.dylib |

##### `Chunk::operator new()` (libjvm.dylib)

|      % |   Size | Samples | Callee         | Location     |
| -----: | -----: | ------: | -------------- | ------------ |
| 100.0% | 122 MB |   1,918 | `os::malloc()` | libjvm.dylib |

##### `Arena::grow()` (libjvm.dylib)

|      % |   Size | Samples | Callee                  | Location     |
| -----: | -----: | ------: | ----------------------- | ------------ |
| 100.0% | 122 MB |   1,846 | `Chunk::operator new()` | libjvm.dylib |

##### `Compile::Compile()` (libjvm.dylib)

|     % |    Size | Samples | Callee                                     | Location     |
| ----: | ------: | ------: | ------------------------------------------ | ------------ |
| 57.9% | 69.6 MB |     940 | `Compile::Optimize()`                      | libjvm.dylib |
| 37.7% | 45.3 MB |   1,210 | `Compile::Code_Gen()`                      | libjvm.dylib |
|  3.5% | 4.23 MB |     138 | `ParseGenerator::generate()`               | libjvm.dylib |
|  0.5% |  590 kB |      15 | `PhaseRemoveUseless::PhaseRemoveUseless()` | libjvm.dylib |
|  0.3% |  361 kB |      11 | `NodeHash::NodeHash()`                     | libjvm.dylib |

##### `C2Compiler::compile_method()` (libjvm.dylib)

|      % |   Size | Samples | Callee               | Location     |
| -----: | -----: | ------: | -------------------- | ------------ |
| 100.0% | 120 MB |   2,569 | `Compile::Compile()` | libjvm.dylib |

##### `VMThread::inner_execute()` (libjvm.dylib)

|      % |    Size | Samples | Callee                           | Location     |
| -----: | ------: | ------: | -------------------------------- | ------------ |
| 100.0% |  120 MB |   8,994 | `VMThread::evaluate_operation()` | libjvm.dylib |
|   0.0% | 8.64 kB |      90 | `outputStream::print()`          | libjvm.dylib |
|   0.0% |   522 B |      87 | `SafepointSynchronize::begin()`  | libjvm.dylib |

##### `VMThread::run()` (libjvm.dylib)

|      % |   Size | Samples | Callee                      | Location     |
| -----: | -----: | ------: | --------------------------- | ------------ |
| 100.0% | 120 MB |   9,171 | `VMThread::inner_execute()` | libjvm.dylib |

##### `VM_Operation::evaluate()` (libjvm.dylib)

|     % |    Size | Samples | Callee                              | Location     |
| ----: | ------: | ------: | ----------------------------------- | ------------ |
| 95.6% |  114 MB |   2,611 | `VM_G1CollectFull::doit()`          | libjvm.dylib |
|  4.4% | 5.22 MB |   6,322 | `VM_G1CollectForAllocation::doit()` | libjvm.dylib |
|  0.0% |   976 B |      61 | `VM_HandshakeAllThreads::doit()`    | libjvm.dylib |

##### `VMThread::evaluate_operation()` (libjvm.dylib)

|      % |   Size | Samples | Callee                     | Location     |
| -----: | -----: | ------: | -------------------------- | ------------ |
| 100.0% | 120 MB |   8,994 | `VM_Operation::evaluate()` | libjvm.dylib |

##### `G1CollectedHeap::do_full_collection()` (libjvm.dylib)

|     % |    Size | Samples | Callee                                   | Location     |
| ----: | ------: | ------: | ---------------------------------------- | ------------ |
| 99.7% |  114 MB |     312 | `G1FullCollector::G1FullCollector()`     | libjvm.dylib |
|  0.2% |  199 kB |     379 | `G1FullCollector::collect()`             | libjvm.dylib |
|  0.1% | 94.7 kB |   1,920 | `G1FullCollector::complete_collection()` | libjvm.dylib |

##### `VM_G1CollectFull::doit()` (libjvm.dylib)

|      % |   Size | Samples | Callee                                  | Location     |
| -----: | -----: | ------: | --------------------------------------- | ------------ |
| 100.0% | 114 MB |   2,611 | `G1CollectedHeap::do_full_collection()` | libjvm.dylib |

## Hottest call stacks

Call stacks ranked by native bytes allocated in their leaf frame.

Common call stack: `Thread::call_run()` (libjvm.dylib) ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`

|     % |    Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 43.9% |  113 MB |      72 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `AllocateHeap()` ← `G1FullGCMarker::G1FullGCMarker()` ← `G1FullCollector::G1FullCollector()` ← `G1CollectedHeap::do_full_collection()` ← `VM_G1CollectFull::doit()` ← `VM_Operation::evaluate()` ← `VMThread::evaluate_operation()` ← `VMThread::inner_execute()` ← `VMThread::run()`                                                                                                                                                                                    |
| 11.3% | 29.2 MB |     267 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `PhaseIdealLoop::Dominators()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop()` ← `PhaseIdealLoop::optimize()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                     |
| 11.2% |   29 MB |     333 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `PhaseIFG::init()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                        |
|  9.9% | 25.6 MB |     239 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `PhaseIdealLoop::Dominators()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop()` ← `PhaseIdealLoop::optimize()` ← `Compile::optimize_loops()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                       |
|  2.4% | 6.14 MB |     140 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `PhaseLive::compute()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                    |
|  1.3% | 3.26 MB |      52 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `Matcher::xform()` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                         |
|  0.9% | 2.26 MB |      66 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `Arena::Arealloc()` ← `Node_Array::grow()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop()` ← `PhaseIdealLoop::optimize()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                         |
|  0.9% | 2.26 MB |      66 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop()` ← `PhaseIdealLoop::optimize()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                               |
|  0.7% | 1.92 MB |      41 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `Matcher::find_shared()` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                   |
|  0.6% | 1.66 MB |     486 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `AllocateHeap()` ← `G1RemSetScanState::prepare()` ← `G1YoungCollector::pre_evacuate_collection_set()` ← `G1YoungCollector::collect()` ← `G1CollectedHeap::do_collection_pause_at_safepoint_helper()` ← `G1CollectedHeap::do_collection_pause_at_safepoint()` ← `VM_G1CollectForAllocation::doit()` ← `VM_Operation::evaluate()` ← `VMThread::evaluate_operation()` ← `VMThread::inner_execute()` ← `VMThread::run()`                                                     |
|  0.6% | 1.57 MB |      45 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `Arena::Arealloc()` ← `Node_Array::grow()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop()` ← `PhaseIdealLoop::optimize()` ← `Compile::optimize_loops()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                           |
|  0.6% | 1.57 MB |      45 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop()` ← `PhaseIdealLoop::optimize()` ← `Compile::optimize_loops()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` |
|  0.4% |  918 kB |      27 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `Arena::Arealloc()` ← `Node_Array::grow()` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                 |
|  0.3% |  884 kB |      27 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `Matcher::Label_Root()` ← `Matcher::Label_Root()` ← `Matcher::match_tree()` ← `Matcher::xform()` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                           |
|  0.3% |  835 kB |   1,986 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `AllocateHeap()` ← `G1ParScanThreadState::G1ParScanThreadState()` ← `G1ParScanThreadStateSet::state_for_worker()` ← `G1EvacuateRegionsBaseTask::work()` ← `WorkerThread::run()`                                                                                                                                                                                                                                                                                          |
|  0.3% |  721 kB |      21 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `Arena::Arealloc()` ← `Node_Array::grow()` ← `PhaseCCP::transform()` ← `PhaseCCP::do_transform()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                               |
|  0.3% |  688 kB |      20 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `Arena::Arealloc()` ← `Node_Array::grow()` ← `Matcher::ReduceInst()` ← `Matcher::match_tree()` ← `Matcher::xform()` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                        |
|  0.3% |  664 kB |      81 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `AllocateHeap()` ← `G1EvacFailureRegions::pre_collection()` ← `G1YoungCollector::pre_evacuate_collection_set()` ← `G1YoungCollector::collect()` ← `G1CollectedHeap::do_collection_pause_at_safepoint_helper()` ← `G1CollectedHeap::do_collection_pause_at_safepoint()` ← `VM_G1CollectForAllocation::doit()` ← `VM_Operation::evaluate()` ← `VMThread::evaluate_operation()` ← `VMThread::inner_execute()` ← `VMThread::run()`                                           |
|  0.3% |  664 kB |      81 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `AllocateHeap()` ← `HeapRegionClaimer::HeapRegionClaimer()` ← `G1YoungCollector::pre_evacuate_collection_set()` ← `G1YoungCollector::collect()` ← `G1CollectedHeap::do_collection_pause_at_safepoint_helper()` ← `G1CollectedHeap::do_collection_pause_at_safepoint()` ← `VM_G1CollectForAllocation::doit()` ← `VM_Operation::evaluate()` ← `VMThread::evaluate_operation()` ← `VMThread::inner_execute()` ← `VMThread::run()`                                           |
|  0.3% |  664 kB |      81 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `AllocateHeap()` ← `HeapRegionClaimer::HeapRegionClaimer()` ← `G1RemSet::merge_heap_roots()` ← `G1YoungCollector::evacuate_initial_collection_set()` ← `G1YoungCollector::collect()` ← `G1CollectedHeap::do_collection_pause_at_safepoint_helper()` ← `G1CollectedHeap::do_collection_pause_at_safepoint()` ← `VM_G1CollectForAllocation::doit()` ← `VM_Operation::evaluate()` ← `VMThread::evaluate_operation()` ← `VMThread::inner_execute()` ← `VMThread::run()`      |
