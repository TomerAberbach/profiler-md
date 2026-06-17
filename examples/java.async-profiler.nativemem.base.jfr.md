# Allocated native memory profile

Allocated 255 MB over 84,474 samples (3.02 kB per sample).

| Category |      % |   Size | Samples |
| -------- | -----: | -----: | ------: |
| ours     | 100.0% | 255 MB |  84,474 |

## Hottest functions

### Self size

Functions ranked by native bytes allocated directly in the function body, excluding callees.

|     % |    Size | Samples | Function         | Location               |
| ----: | ------: | ------: | ---------------- | ---------------------- |
| 99.9% |  255 MB |  83,768 | `malloc_hook()`  | libasyncProfiler.dylib |
|  0.1% |  149 kB |     694 | `realloc_hook()` | libasyncProfiler.dylib |
|  0.0% | 1.34 kB |      12 | `calloc_hook()`  | libasyncProfiler.dylib |

#### Callers

Callers ranked by contribution to each function's self size. Caller attribution may be imprecise due to inlining.

##### `malloc_hook()` (libasyncProfiler.dylib)

|     % |    Size | Samples | Caller                                      | Location      |
| ----: | ------: | ------: | ------------------------------------------- | ------------- |
| 97.1% |  248 MB |  81,397 | `os::malloc()`                              | libjvm.dylib  |
|  2.3% | 5.88 MB |     751 | `Java_java_lang_ClassLoader_defineClass1()` | libjava.dylib |
|  0.3% |  889 kB |      63 | `readBytes()`                               | libjava.dylib |
|  0.2% |  393 kB |      12 | `updatewindow()`                            | libzip.dylib  |
|  0.1% |  182 kB |     236 | `Java_java_lang_ClassLoader_defineClass0()` | libjava.dylib |

##### `realloc_hook()` (libasyncProfiler.dylib)

|      % |   Size | Samples | Caller          | Location     |
| -----: | -----: | ------: | --------------- | ------------ |
| 100.0% | 149 kB |     694 | `os::realloc()` | libjvm.dylib |

##### `calloc_hook()` (libasyncProfiler.dylib)

|      % |    Size | Samples | Caller                               | Location     |
| -----: | ------: | ------: | ------------------------------------ | ------------ |
| 100.0% | 1.34 kB |      12 | `Java_java_util_zip_Inflater_init()` | libzip.dylib |

### Total size

Functions ranked by total native bytes allocated in the function and all its callees.

|     % |   Size | Samples | Function                                     | Location                |
| ----: | -----: | ------: | -------------------------------------------- | ----------------------- |
| 99.9% | 255 MB |  83,768 | `malloc_hook()`                              | libasyncProfiler.dylib  |
| 97.0% | 248 MB |  81,397 | `os::malloc()`                               | libjvm.dylib            |
| 94.7% | 242 MB |  35,527 | `_pthread_start()`                           | libsystem_pthread.dylib |
| 94.7% | 242 MB |  35,527 | `thread_start()`                             | libsystem_pthread.dylib |
| 94.7% | 242 MB |  35,374 | `Thread::call_run()`                         | libjvm.dylib            |
| 94.7% | 242 MB |  35,374 | `thread_native_entry()`                      | libjvm.dylib            |
| 49.6% | 127 MB |  68,108 | `AllocateHeap()`                             | libjvm.dylib            |
| 47.0% | 120 MB |  10,360 | `JavaThread::thread_main_inner()`            | libjvm.dylib            |
| 47.0% | 120 MB |  10,139 | `CompileBroker::compiler_thread_loop()`      | libjvm.dylib            |
| 46.9% | 120 MB |  10,091 | `CompileBroker::invoke_compiler_on_method()` | libjvm.dylib            |
| 46.8% | 120 MB |  10,982 | `VMThread::inner_execute()`                  | libjvm.dylib            |
| 46.8% | 120 MB |  10,982 | `VMThread::run()`                            | libjvm.dylib            |
| 46.8% | 120 MB |  10,817 | `VM_Operation::evaluate()`                   | libjvm.dylib            |
| 46.8% | 120 MB |  10,817 | `VMThread::evaluate_operation()`             | libjvm.dylib            |
| 46.8% | 119 MB |   1,896 | `Chunk::operator new()`                      | libjvm.dylib            |
| 46.8% | 119 MB |   1,825 | `Arena::grow()`                              | libjvm.dylib            |
| 46.1% | 118 MB |   2,563 | `Compile::Compile()`                         | libjvm.dylib            |
| 46.1% | 118 MB |   2,563 | `C2Compiler::compile_method()`               | libjvm.dylib            |
| 44.8% | 114 MB |   2,623 | `G1CollectedHeap::do_full_collection()`      | libjvm.dylib            |
| 44.8% | 114 MB |   2,623 | `VM_G1CollectFull::doit()`                   | libjvm.dylib            |

#### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

##### `os::malloc()` (libjvm.dylib)

|      % |   Size | Samples | Callee          | Location               |
| -----: | -----: | ------: | --------------- | ---------------------- |
| 100.0% | 248 MB |  81,397 | `malloc_hook()` | libasyncProfiler.dylib |
|   0.2% | 385 kB |   1,988 | `os::malloc()`  | libjvm.dylib           |

##### `_pthread_start()` (libsystem_pthread.dylib)

|      % |    Size | Samples | Callee                  | Location     |
| -----: | ------: | ------: | ----------------------- | ------------ |
| 100.0% |  242 MB |  35,374 | `thread_native_entry()` | libjvm.dylib |
|   0.0% | 57.3 kB |     153 | `ThreadJavaMain()`      | libjli.dylib |

##### `thread_start()` (libsystem_pthread.dylib)

|      % |   Size | Samples | Callee             | Location                |
| -----: | -----: | ------: | ------------------ | ----------------------- |
| 100.0% | 242 MB |  35,527 | `_pthread_start()` | libsystem_pthread.dylib |

##### `Thread::call_run()` (libjvm.dylib)

|     % |    Size | Samples | Callee                            | Location     |
| ----: | ------: | ------: | --------------------------------- | ------------ |
| 49.6% |  120 MB |  10,360 | `JavaThread::thread_main_inner()` | libjvm.dylib |
| 49.4% |  120 MB |  10,982 | `VMThread::run()`                 | libjvm.dylib |
|  0.8% | 1.96 MB |  13,234 | `WorkerThread::run()`             | libjvm.dylib |
|  0.1% |  203 kB |     119 | `JavaThread::post_run()`          | libjvm.dylib |
|  0.1% |  199 kB |      72 | `ThreadsSMRSupport::smr_delete()` | libjvm.dylib |

##### `thread_native_entry()` (libjvm.dylib)

|      % |   Size | Samples | Callee               | Location     |
| -----: | -----: | ------: | -------------------- | ------------ |
| 100.0% | 242 MB |  35,374 | `Thread::call_run()` | libjvm.dylib |

##### `AllocateHeap()` (libjvm.dylib)

|      % |   Size | Samples | Callee         | Location     |
| -----: | -----: | ------: | -------------- | ------------ |
| 100.0% | 127 MB |  68,108 | `os::malloc()` | libjvm.dylib |

##### `JavaThread::thread_main_inner()` (libjvm.dylib)

|      % |    Size | Samples | Callee                                  | Location     |
| -----: | ------: | ------: | --------------------------------------- | ------------ |
| 100.0% |  120 MB |  10,139 | `CompileBroker::compiler_thread_loop()` | libjvm.dylib |
|   0.0% | 6.66 kB |     221 | `ServiceThread::service_thread_entry()` | libjvm.dylib |

##### `CompileBroker::compiler_thread_loop()` (libjvm.dylib)

|      % |    Size | Samples | Callee                                           | Location     |
| -----: | ------: | ------: | ------------------------------------------------ | ------------ |
| 100.0% |  120 MB |  10,091 | `CompileBroker::invoke_compiler_on_method()`     | libjvm.dylib |
|   0.0% | 25.2 kB |      48 | `CompileBroker::possibly_add_compiler_threads()` | libjvm.dylib |

##### `CompileBroker::invoke_compiler_on_method()` (libjvm.dylib)

|     % |    Size | Samples | Callee                                | Location     |
| ----: | ------: | ------: | ------------------------------------- | ------------ |
| 98.2% |  118 MB |   2,563 | `C2Compiler::compile_method()`        | libjvm.dylib |
|  1.8% |  2.1 MB |   6,142 | `Compiler::compile_method()`          | libjvm.dylib |
|  0.0% | 15.2 kB |   1,382 | `CompilationLog::log_compile()`       | libjvm.dylib |
|  0.0% |    2 kB |       2 | `ciEnv::ciEnv()`                      | libjvm.dylib |
|  0.0% |   592 B |       2 | `JavaThread::push_jni_handle_block()` | libjvm.dylib |

##### `VMThread::inner_execute()` (libjvm.dylib)

|      % |    Size | Samples | Callee                           | Location     |
| -----: | ------: | ------: | -------------------------------- | ------------ |
| 100.0% |  120 MB |  10,817 | `VMThread::evaluate_operation()` | libjvm.dylib |
|   0.0% | 8.06 kB |      84 | `outputStream::print()`          | libjvm.dylib |
|   0.0% |   486 B |      81 | `SafepointSynchronize::begin()`  | libjvm.dylib |

##### `VMThread::run()` (libjvm.dylib)

|      % |   Size | Samples | Callee                      | Location     |
| -----: | -----: | ------: | --------------------------- | ------------ |
| 100.0% | 120 MB |  10,982 | `VMThread::inner_execute()` | libjvm.dylib |

##### `VM_Operation::evaluate()` (libjvm.dylib)

|     % |    Size | Samples | Callee                              | Location     |
| ----: | ------: | ------: | ----------------------------------- | ------------ |
| 95.7% |  114 MB |   2,623 | `VM_G1CollectFull::doit()`          | libjvm.dylib |
|  4.3% | 5.18 MB |   8,131 | `VM_G1CollectForAllocation::doit()` | libjvm.dylib |
|  0.0% | 1.01 kB |      63 | `VM_HandshakeAllThreads::doit()`    | libjvm.dylib |

##### `VMThread::evaluate_operation()` (libjvm.dylib)

|      % |   Size | Samples | Callee                     | Location     |
| -----: | -----: | ------: | -------------------------- | ------------ |
| 100.0% | 120 MB |  10,817 | `VM_Operation::evaluate()` | libjvm.dylib |

##### `Chunk::operator new()` (libjvm.dylib)

|      % |   Size | Samples | Callee         | Location     |
| -----: | -----: | ------: | -------------- | ------------ |
| 100.0% | 119 MB |   1,896 | `os::malloc()` | libjvm.dylib |

##### `Arena::grow()` (libjvm.dylib)

|      % |   Size | Samples | Callee                  | Location     |
| -----: | -----: | ------: | ----------------------- | ------------ |
| 100.0% | 119 MB |   1,825 | `Chunk::operator new()` | libjvm.dylib |

##### `Compile::Compile()` (libjvm.dylib)

|     % |    Size | Samples | Callee                                     | Location     |
| ----: | ------: | ------: | ------------------------------------------ | ------------ |
| 58.6% |   69 MB |     957 | `Compile::Optimize()`                      | libjvm.dylib |
| 37.3% | 43.9 MB |   1,198 | `Compile::Code_Gen()`                      | libjvm.dylib |
|  3.2% |  3.8 MB |     124 | `ParseGenerator::generate()`               | libjvm.dylib |
|  0.5% |  557 kB |      14 | `PhaseRemoveUseless::PhaseRemoveUseless()` | libjvm.dylib |
|  0.3% |  328 kB |      10 | `NodeHash::NodeHash()`                     | libjvm.dylib |

##### `C2Compiler::compile_method()` (libjvm.dylib)

|      % |   Size | Samples | Callee               | Location     |
| -----: | -----: | ------: | -------------------- | ------------ |
| 100.0% | 118 MB |   2,563 | `Compile::Compile()` | libjvm.dylib |

##### `G1CollectedHeap::do_full_collection()` (libjvm.dylib)

|     % |    Size | Samples | Callee                                   | Location     |
| ----: | ------: | ------: | ---------------------------------------- | ------------ |
| 99.8% |  114 MB |     312 | `G1FullCollector::G1FullCollector()`     | libjvm.dylib |
|  0.2% |  204 kB |     386 | `G1FullCollector::collect()`             | libjvm.dylib |
|  0.1% | 80.5 kB |   1,925 | `G1FullCollector::complete_collection()` | libjvm.dylib |

##### `VM_G1CollectFull::doit()` (libjvm.dylib)

|      % |   Size | Samples | Callee                                  | Location     |
| -----: | -----: | ------: | --------------------------------------- | ------------ |
| 100.0% | 114 MB |   2,623 | `G1CollectedHeap::do_full_collection()` | libjvm.dylib |

## Hottest call stacks

Call stacks ranked by native bytes allocated in their leaf frame.

Common call stack: `Thread::call_run()` (libjvm.dylib) ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`

|     % |    Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 44.4% |  113 MB |      72 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `AllocateHeap()` ← `G1FullGCMarker::G1FullGCMarker()` ← `G1FullCollector::G1FullCollector()` ← `G1CollectedHeap::do_full_collection()` ← `VM_G1CollectFull::doit()` ← `VM_Operation::evaluate()` ← `VMThread::evaluate_operation()` ← `VMThread::inner_execute()` ← `VMThread::run()`                                                                                                                                                                                    |
| 11.3% | 28.8 MB |     260 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `PhaseIdealLoop::Dominators()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop()` ← `PhaseIdealLoop::optimize()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                     |
| 10.9% | 27.9 MB |     321 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `PhaseIFG::init()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                        |
|  9.7% | 24.7 MB |     222 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `PhaseIdealLoop::Dominators()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop()` ← `PhaseIdealLoop::optimize()` ← `Compile::optimize_loops()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                       |
|  2.3% | 5.96 MB |     131 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `PhaseLive::compute()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                    |
|  1.3% | 3.23 MB |      51 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `Matcher::xform()` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                         |
|  0.9% | 2.26 MB |      69 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop()` ← `PhaseIdealLoop::optimize()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                               |
|  0.8% | 2.16 MB |      66 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `Arena::Arealloc()` ← `Node_Array::grow()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop()` ← `PhaseIdealLoop::optimize()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                         |
|  0.7% | 1.77 MB |      36 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `Matcher::find_shared()` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                   |
|  0.6% | 1.57 MB |      48 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop()` ← `PhaseIdealLoop::optimize()` ← `Compile::optimize_loops()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` |
|  0.6% | 1.54 MB |      47 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `Arena::Arealloc()` ← `Node_Array::grow()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop()` ← `PhaseIdealLoop::optimize()` ← `Compile::optimize_loops()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                           |
|  0.6% | 1.54 MB |     450 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `AllocateHeap()` ← `G1RemSetScanState::prepare()` ← `G1YoungCollector::pre_evacuate_collection_set()` ← `G1YoungCollector::collect()` ← `G1CollectedHeap::do_collection_pause_at_safepoint_helper()` ← `G1CollectedHeap::do_collection_pause_at_safepoint()` ← `VM_G1CollectForAllocation::doit()` ← `VM_Operation::evaluate()` ← `VMThread::evaluate_operation()` ← `VMThread::inner_execute()` ← `VMThread::run()`                                                     |
|  0.4% |  918 kB |      27 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `Arena::Arealloc()` ← `Node_Array::grow()` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                 |
|  0.3% |  832 kB |   1,864 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `AllocateHeap()` ← `G1ParScanThreadState::G1ParScanThreadState()` ← `G1ParScanThreadStateSet::state_for_worker()` ← `G1EvacuateRegionsBaseTask::work()` ← `WorkerThread::run()`                                                                                                                                                                                                                                                                                          |
|  0.3% |  754 kB |      22 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `Arena::Arealloc()` ← `Node_Array::grow()` ← `Matcher::ReduceInst()` ← `Matcher::match_tree()` ← `Matcher::xform()` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                        |
|  0.3% |  688 kB |      21 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `Matcher::Label_Root()` ← `Matcher::Label_Root()` ← `Matcher::match_tree()` ← `Matcher::xform()` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                           |
|  0.3% |  656 kB |      20 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `Chunk::operator new()` ← `Arena::grow()` ← `Arena::Arealloc()` ← `Node_Array::grow()` ← `PhaseCCP::transform()` ← `PhaseCCP::do_transform()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                               |
|  0.2% |  614 kB |      75 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `AllocateHeap()` ← `G1EvacFailureRegions::pre_collection()` ← `G1YoungCollector::pre_evacuate_collection_set()` ← `G1YoungCollector::collect()` ← `G1CollectedHeap::do_collection_pause_at_safepoint_helper()` ← `G1CollectedHeap::do_collection_pause_at_safepoint()` ← `VM_G1CollectForAllocation::doit()` ← `VM_Operation::evaluate()` ← `VMThread::evaluate_operation()` ← `VMThread::inner_execute()` ← `VMThread::run()`                                           |
|  0.2% |  614 kB |      75 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `AllocateHeap()` ← `HeapRegionClaimer::HeapRegionClaimer()` ← `G1YoungCollector::pre_evacuate_collection_set()` ← `G1YoungCollector::collect()` ← `G1CollectedHeap::do_collection_pause_at_safepoint_helper()` ← `G1CollectedHeap::do_collection_pause_at_safepoint()` ← `VM_G1CollectForAllocation::doit()` ← `VM_Operation::evaluate()` ← `VMThread::evaluate_operation()` ← `VMThread::inner_execute()` ← `VMThread::run()`                                           |
|  0.2% |  614 kB |      75 | `malloc_hook()` (libasyncProfiler.dylib) ← `os::malloc()` (libjvm.dylib) ← `AllocateHeap()` ← `HeapRegionClaimer::HeapRegionClaimer()` ← `G1RemSet::merge_heap_roots()` ← `G1YoungCollector::evacuate_initial_collection_set()` ← `G1YoungCollector::collect()` ← `G1CollectedHeap::do_collection_pause_at_safepoint_helper()` ← `G1CollectedHeap::do_collection_pause_at_safepoint()` ← `VM_G1CollectForAllocation::doit()` ← `VM_Operation::evaluate()` ← `VMThread::evaluate_operation()` ← `VMThread::inner_execute()` ← `VMThread::run()`      |
