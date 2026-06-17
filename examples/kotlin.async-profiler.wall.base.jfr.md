# Sampling profile

Collected 2,694 samples.

| Category |     % | Samples |
| -------- | ----: | ------: |
| ours     | 99.8% |   2,688 |
| stdlib   |  0.2% |       6 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                                                                         | Location                 |
| ----: | ------: | ------------------------------------------------------------------------------------------------ | ------------------------ |
| 47.8% |   1,289 | `__psynch_cvwait()`                                                                              | libsystem_kernel.dylib   |
| 36.3% |     979 | `semaphore_wait_trap()`                                                                          | libsystem_kernel.dylib   |
|  3.5% |      94 | `mach_msg2_trap()`                                                                               | libsystem_kernel.dylib   |
|  3.5% |      93 | `__ulock_wait()`                                                                                 | libsystem_kernel.dylib   |
|  0.3% |       9 | `inflate_fast()`                                                                                 | libzip.dylib             |
|  0.2% |       6 | `PhaseChaitin::Split()`                                                                          | libjvm.dylib             |
|  0.2% |       5 | `IndexSetIterator::advance_and_next()`                                                           | libjvm.dylib             |
|  0.1% |       4 | `InstanceKlass::find_method_index()`                                                             | libjvm.dylib             |
|  0.1% |       4 | `SymbolTable::do_lookup()`                                                                       | libjvm.dylib             |
|  0.1% |       3 | `PhaseChaitin::post_allocate_copy_removal()`                                                     | libjvm.dylib             |
|  0.1% |       3 | `__psynch_mutexwait()`                                                                           | libsystem_kernel.dylib   |
|  0.1% |       3 | `PhaseIdealLoop::build_loop_early()`                                                             | libjvm.dylib             |
|  0.1% |       3 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>()` | libjvm.dylib             |
|  0.1% |       3 | `_platform_memset()`                                                                             | libsystem_platform.dylib |
|  0.1% |       3 | `ClassVerifier::verify_method()`                                                                 | libjvm.dylib             |
|  0.1% |       2 | `Node::clone()`                                                                                  | libjvm.dylib             |
|  0.1% |       2 | `Dict::Insert()`                                                                                 | libjvm.dylib             |
|  0.1% |       2 | `PhaseIFG::re_insert()`                                                                          | libjvm.dylib             |
|  0.1% |       2 | `PhaseIterGVN::add_users_to_worklist()`                                                          | libjvm.dylib             |
|  0.1% |       2 | `Type::cmp()`                                                                                    | libjvm.dylib             |

#### Callers

Callers ranked by contribution to each function's self samples. Caller attribution may be imprecise due to inlining.

##### `__psynch_cvwait()` (libsystem_kernel.dylib)

|     % | Samples | Caller                    | Location               |
| ----: | ------: | ------------------------- | ---------------------- |
| 78.4% |   1,011 | `PlatformMonitor::wait()` | libjvm.dylib           |
|  7.2% |      93 | `Profiler::timerLoop()`   | libasyncProfiler.dylib |
|  7.2% |      93 | `PlatformEvent::park()`   | libjvm.dylib           |
|  7.1% |      92 | `Parker::park()`          | libjvm.dylib           |

##### `semaphore_wait_trap()` (libsystem_kernel.dylib)

|     % | Samples | Caller                             | Location     |
| ----: | ------: | ---------------------------------- | ------------ |
| 89.9% |     880 | `WorkerThread::run()`              | libjvm.dylib |
|  9.5% |      93 | `os::signal_wait()`                | libjvm.dylib |
|  0.4% |       4 | `WorkerThreads::run_task()`        | libjvm.dylib |
|  0.2% |       2 | `GenericWaitBarrier::Cell::wait()` | libjvm.dylib |

##### `mach_msg2_trap()` (libsystem_kernel.dylib)

|     % | Samples | Caller                 | Location               |
| ----: | ------: | ---------------------- | ---------------------- |
| 98.9% |      93 | `mach_msg_overwrite()` | libsystem_kernel.dylib |
|  1.1% |       1 | `thread_info()`        | libsystem_kernel.dylib |

##### `__ulock_wait()` (libsystem_kernel.dylib)

|      % | Samples | Caller                      | Location     |
| -----: | ------: | --------------------------- | ------------ |
| 100.0% |      93 | `CallJavaMainInNewThread()` | libjli.dylib |

##### `inflate_fast()` (libzip.dylib)

|      % | Samples | Caller                                            | Location     |
| -----: | ------: | ------------------------------------------------- | ------------ |
| 100.0% |       9 | `Java_java_util_zip_Inflater_inflateBytesBytes()` | libzip.dylib |

##### `PhaseChaitin::Split()` (libjvm.dylib)

|      % | Samples | Caller                              | Location     |
| -----: | ------: | ----------------------------------- | ------------ |
| 100.0% |       6 | `PhaseChaitin::Register_Allocate()` | libjvm.dylib |

##### `IndexSetIterator::advance_and_next()` (libjvm.dylib)

|     % | Samples | Caller                              | Location     |
| ----: | ------: | ----------------------------------- | ------------ |
| 20.0% |       1 | `PhaseIFG::effective_degree()`      | libjvm.dylib |
| 20.0% |       1 | `PhaseChaitin::build_ifg_virtual()` | libjvm.dylib |
| 20.0% |       1 | `PhaseChaitin::Simplify()`          | libjvm.dylib |
| 20.0% |       1 | `PhaseLive::compute()`              | libjvm.dylib |
| 20.0% |       1 | `PhaseIFG::re_insert()`             | libjvm.dylib |

##### `InstanceKlass::find_method_index()` (libjvm.dylib)

|      % | Samples | Caller                                    | Location     |
| -----: | ------: | ----------------------------------------- | ------------ |
| 100.0% |       4 | `InstanceKlass::uncached_lookup_method()` | libjvm.dylib |

##### `SymbolTable::do_lookup()` (libjvm.dylib)

|     % | Samples | Caller                                           | Location     |
| ----: | ------: | ------------------------------------------------ | ------------ |
| 50.0% |       2 | `SymbolTable::lookup_only()`                     | libjvm.dylib |
| 25.0% |       1 | `SymbolTable::new_symbol()`                      | libjvm.dylib |
| 25.0% |       1 | `ClassFileParser::parse_constant_pool_entries()` | libjvm.dylib |

##### `PhaseChaitin::post_allocate_copy_removal()` (libjvm.dylib)

|      % | Samples | Caller                              | Location     |
| -----: | ------: | ----------------------------------- | ------------ |
| 100.0% |       3 | `PhaseChaitin::Register_Allocate()` | libjvm.dylib |

##### `__psynch_mutexwait()` (libsystem_kernel.dylib)

|      % | Samples | Caller                                | Location                |
| -----: | ------: | ------------------------------------- | ----------------------- |
| 100.0% |       3 | `_pthread_mutex_firstfit_lock_slow()` | libsystem_pthread.dylib |

##### `PhaseIdealLoop::build_loop_early()` (libjvm.dylib)

|      % | Samples | Caller                                 | Location     |
| -----: | ------: | -------------------------------------- | ------------ |
| 100.0% |       3 | `PhaseIdealLoop::build_and_optimize()` | libjvm.dylib |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>()` (libjvm.dylib)

|      % | Samples | Caller                                           | Location     |
| -----: | ------: | ------------------------------------------------ | ------------ |
| 100.0% |       3 | `void G1CMTask::process_grey_task_entry<true>()` | libjvm.dylib |

##### `_platform_memset()` (libsystem_platform.dylib)

|     % | Samples | Caller                                         | Location     |
| ----: | ------: | ---------------------------------------------- | ------------ |
| 33.3% |       1 | `PhaseIdealLoop::clone_loop()`                 | libjvm.dylib |
| 33.3% |       1 | `GlobalValueNumbering::GlobalValueNumbering()` | libjvm.dylib |
| 33.3% |       1 | `InstanceKlass::allocate_instance_klass()`     | libjvm.dylib |

##### `ClassVerifier::verify_method()` (libjvm.dylib)

|      % | Samples | Caller                          | Location     |
| -----: | ------: | ------------------------------- | ------------ |
| 100.0% |       3 | `ClassVerifier::verify_class()` | libjvm.dylib |

##### `Node::clone()` (libjvm.dylib)

|     % | Samples | Caller                  | Location     |
| ----: | ------: | ----------------------- | ------------ |
| 50.0% |       1 | `GraphKit::clone_map()` | libjvm.dylib |
| 50.0% |       1 | `PhaseCFG::build_cfg()` | libjvm.dylib |

##### `Dict::Insert()` (libjvm.dylib)

|      % | Samples | Caller             | Location     |
| -----: | ------: | ------------------ | ------------ |
| 100.0% |       2 | `Type::hashcons()` | libjvm.dylib |

##### `PhaseIFG::re_insert()` (libjvm.dylib)

|      % | Samples | Caller                   | Location     |
| -----: | ------: | ------------------------ | ------------ |
| 100.0% |       2 | `PhaseChaitin::Select()` | libjvm.dylib |

##### `PhaseIterGVN::add_users_to_worklist()` (libjvm.dylib)

|      % | Samples | Caller                          | Location     |
| -----: | ------: | ------------------------------- | ------------ |
| 100.0% |       2 | `PhaseIterGVN::transform_old()` | libjvm.dylib |

##### `Type::cmp()` (libjvm.dylib)

|      % | Samples | Caller           | Location     |
| -----: | ------: | ---------------- | ------------ |
| 100.0% |       2 | `Dict::Insert()` | libjvm.dylib |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                     | Location                |
| ----: | ------: | -------------------------------------------- | ----------------------- |
| 82.9% |   2,234 | `_pthread_start()`                           | libsystem_pthread.dylib |
| 82.9% |   2,234 | `thread_start()`                             | libsystem_pthread.dylib |
| 79.4% |   2,140 | `Thread::call_run()`                         | libjvm.dylib            |
| 79.4% |   2,140 | `thread_native_entry()`                      | libjvm.dylib            |
| 47.8% |   1,289 | `__psynch_cvwait()`                          | libsystem_kernel.dylib  |
| 37.6% |   1,012 | `PlatformMonitor::wait()`                    | libjvm.dylib            |
| 36.3% |     979 | `semaphore_wait_trap()`                      | libsystem_kernel.dylib  |
| 32.9% |     885 | `WorkerThread::run()`                        | libjvm.dylib            |
| 29.4% |     791 | `JavaThread::thread_main_inner()`            | libjvm.dylib            |
| 27.4% |     737 | `Monitor::wait_without_safepoint_check()`    | libjvm.dylib            |
| 12.1% |     327 | `CompileBroker::compiler_thread_loop()`      | libjvm.dylib            |
| 10.4% |     279 | `ConcurrentGCThread::run()`                  | libjvm.dylib            |
| 10.2% |     275 | `Monitor::wait()`                            | libjvm.dylib            |
|  6.9% |     186 | `JLI_Launch()`                               | libjli.dylib            |
|  6.9% |     186 | `main()`                                     | java                    |
|  6.8% |     182 | `CompileQueue::get()`                        | libjvm.dylib            |
|  5.4% |     145 | `CompileBroker::invoke_compiler_on_method()` | libjvm.dylib            |
|  3.6% |      98 | `Compile::Compile()`                         | libjvm.dylib            |
|  3.6% |      98 | `C2Compiler::compile_method()`               | libjvm.dylib            |
|  3.5% |      94 | `mach_msg2_trap()`                           | libsystem_kernel.dylib  |

#### Callees

Callees ranked by contribution to each function's total samples. Callee attribution may be imprecise due to inlining.

##### `_pthread_start()` (libsystem_pthread.dylib)

|     % | Samples | Callee                  | Location     |
| ----: | ------: | ----------------------- | ------------ |
| 95.8% |   2,140 | `thread_native_entry()` | libjvm.dylib |
|  4.2% |      93 | `apple_main()`          | libjli.dylib |
|  0.0% |       1 | `ThreadJavaMain()`      | libjli.dylib |

##### `thread_start()` (libsystem_pthread.dylib)

|      % | Samples | Callee             | Location                |
| -----: | ------: | ------------------ | ----------------------- |
| 100.0% |   2,234 | `_pthread_start()` | libsystem_pthread.dylib |

##### `Thread::call_run()` (libjvm.dylib)

|     % | Samples | Callee                            | Location     |
| ----: | ------: | --------------------------------- | ------------ |
| 41.4% |     885 | `WorkerThread::run()`             | libjvm.dylib |
| 37.0% |     791 | `JavaThread::thread_main_inner()` | libjvm.dylib |
| 13.0% |     279 | `ConcurrentGCThread::run()`       | libjvm.dylib |
|  4.3% |      93 | `VMThread::run()`                 | libjvm.dylib |
|  4.3% |      92 | `WatcherThread::run()`            | libjvm.dylib |

##### `thread_native_entry()` (libjvm.dylib)

|      % | Samples | Callee               | Location     |
| -----: | ------: | -------------------- | ------------ |
| 100.0% |   2,140 | `Thread::call_run()` | libjvm.dylib |

##### `PlatformMonitor::wait()` (libjvm.dylib)

|     % | Samples | Callee              | Location               |
| ----: | ------: | ------------------- | ---------------------- |
| 99.9% |   1,011 | `__psynch_cvwait()` | libsystem_kernel.dylib |
|  0.1% |       1 | `__gettimeofday()`  | libsystem_kernel.dylib |

##### `WorkerThread::run()` (libjvm.dylib)

|     % | Samples | Callee                              | Location               |
| ----: | ------: | ----------------------------------- | ---------------------- |
| 99.4% |     880 | `semaphore_wait_trap()`             | libsystem_kernel.dylib |
|  0.3% |       3 | `G1CMConcurrentMarkingTask::work()` | libjvm.dylib           |
|  0.2% |       2 | `G1RebuildRSAndScrubTask::work()`   | libjvm.dylib           |

##### `JavaThread::thread_main_inner()` (libjvm.dylib)

|     % | Samples | Callee                                                     | Location     |
| ----: | ------: | ---------------------------------------------------------- | ------------ |
| 41.3% |     327 | `CompileBroker::compiler_thread_loop()`                    | libjvm.dylib |
| 11.8% |      93 | `JvmtiAgentThread::start_function_wrapper()`               | libjvm.dylib |
| 11.8% |      93 | `MonitorDeflationThread::monitor_deflation_thread_entry()` | libjvm.dylib |
| 11.8% |      93 | `ServiceThread::service_thread_entry()`                    | libjvm.dylib |
| 11.8% |      93 | `signal_thread_entry()`                                    | libjvm.dylib |

##### `Monitor::wait_without_safepoint_check()` (libjvm.dylib)

|      % | Samples | Callee                    | Location     |
| -----: | ------: | ------------------------- | ------------ |
| 100.0% |     737 | `PlatformMonitor::wait()` | libjvm.dylib |

##### `CompileBroker::compiler_thread_loop()` (libjvm.dylib)

|     % | Samples | Callee                                       | Location     |
| ----: | ------: | -------------------------------------------- | ------------ |
| 55.7% |     182 | `CompileQueue::get()`                        | libjvm.dylib |
| 44.3% |     145 | `CompileBroker::invoke_compiler_on_method()` | libjvm.dylib |

##### `ConcurrentGCThread::run()` (libjvm.dylib)

|     % | Samples | Callee                                    | Location     |
| ----: | ------: | ----------------------------------------- | ------------ |
| 33.3% |      93 | `G1ServiceThread::run_service()`          | libjvm.dylib |
| 33.3% |      93 | `G1ConcurrentMarkThread::run_service()`   | libjvm.dylib |
| 33.3% |      93 | `G1ConcurrentRefineThread::run_service()` | libjvm.dylib |

##### `Monitor::wait()` (libjvm.dylib)

|      % | Samples | Callee                    | Location     |
| -----: | ------: | ------------------------- | ------------ |
| 100.0% |     275 | `PlatformMonitor::wait()` | libjvm.dylib |

##### `JLI_Launch()` (libjli.dylib)

|     % | Samples | Callee                         | Location     |
| ----: | ------: | ------------------------------ | ------------ |
| 50.0% |      93 | `CreateExecutionEnvironment()` | libjli.dylib |
| 50.0% |      93 | `ContinueInNewThread()`        | libjli.dylib |

##### `main()` (java)

|      % | Samples | Callee         | Location     |
| -----: | ------: | -------------- | ------------ |
| 100.0% |     186 | `JLI_Launch()` | libjli.dylib |

##### `CompileQueue::get()` (libjvm.dylib)

|     % | Samples | Callee                          | Location     |
| ----: | ------: | ------------------------------- | ------------ |
| 99.5% |     181 | `Monitor::wait()`               | libjvm.dylib |
|  0.5% |       1 | `methodHandle::~methodHandle()` | libjvm.dylib |

##### `CompileBroker::invoke_compiler_on_method()` (libjvm.dylib)

|     % | Samples | Callee                            | Location     |
| ----: | ------: | --------------------------------- | ------------ |
| 67.6% |      98 | `C2Compiler::compile_method()`    | libjvm.dylib |
| 31.7% |      46 | `Compiler::compile_method()`      | libjvm.dylib |
|  0.7% |       1 | `ciEnv::get_method_from_handle()` | libjvm.dylib |

##### `Compile::Compile()` (libjvm.dylib)

|     % | Samples | Callee                                     | Location     |
| ----: | ------: | ------------------------------------------ | ------------ |
| 51.0% |      50 | `Compile::Code_Gen()`                      | libjvm.dylib |
| 33.7% |      33 | `Compile::Optimize()`                      | libjvm.dylib |
| 14.3% |      14 | `ParseGenerator::generate()`               | libjvm.dylib |
|  1.0% |       1 | `PhaseRemoveUseless::PhaseRemoveUseless()` | libjvm.dylib |

##### `C2Compiler::compile_method()` (libjvm.dylib)

|      % | Samples | Callee               | Location     |
| -----: | ------: | -------------------- | ------------ |
| 100.0% |      98 | `Compile::Compile()` | libjvm.dylib |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 32.7% |     880 | `semaphore_wait_trap()` (libsystem_kernel.dylib) ← `WorkerThread::run()` (libjvm.dylib) ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  6.7% |     180 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `PlatformMonitor::wait()` (libjvm.dylib) ← `Monitor::wait()` ← `CompileQueue::get()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                              |
|  3.5% |      93 | `mach_msg2_trap()` (libsystem_kernel.dylib) ← `mach_msg_overwrite()` ← `mach_msg()` ← `__CFRunLoopServiceMachPort()` (CoreFoundation) ← `__CFRunLoopRun()` ← `CFRunLoopRunSpecific()` ← `CreateExecutionEnvironment()` (libjli.dylib) ← `JLI_Launch()` ← `main()` (java)                                                                                                                                                                                                                                                                                                                                                                                          |
|  3.5% |      93 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `Profiler::timerLoop()` (libasyncProfiler.dylib) ← `JvmtiAgentThread::start_function_wrapper()` (libjvm.dylib) ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                              |
|  3.5% |      93 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `PlatformMonitor::wait()` (libjvm.dylib) ← `Monitor::wait()` ← `JVM_WaitForReferencePendingList()` ← `waitForReferencePendingList()` (java.lang.ref.Reference) ← `processPendingReferences()` ← `run()` (java.lang.ref.Reference$ReferenceHandler)                                                                                                                                                                                                                                                                                                                                                                 |
|  3.5% |      93 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `PlatformMonitor::wait()` (libjvm.dylib) ← `Monitor::wait_without_safepoint_check()` ← `MonitorDeflationThread::monitor_deflation_thread_entry()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                           |
|  3.5% |      93 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `PlatformMonitor::wait()` (libjvm.dylib) ← `Monitor::wait_without_safepoint_check()` ← `G1ServiceThread::wait_for_task()` ← `G1ServiceThread::run_service()` ← `ConcurrentGCThread::run()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                      |
|  3.5% |      93 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `PlatformMonitor::wait()` (libjvm.dylib) ← `Monitor::wait_without_safepoint_check()` ← `ServiceThread::service_thread_entry()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                              |
|  3.5% |      93 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `PlatformMonitor::wait()` (libjvm.dylib) ← `Monitor::wait_without_safepoint_check()` ← `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers()` ← `G1ConcurrentRefineThread::run_service()` ← `ConcurrentGCThread::run()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                |
|  3.5% |      93 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `PlatformEvent::park()` (libjvm.dylib) ← `ObjectMonitor::wait()` ← `ObjectSynchronizer::wait()` ← `JVM_MonitorWait()` ← `wait0(long)` (java.lang.Object) ← `wait(long)` ← `wait()` ← `await()` (java.lang.ref.NativeReferenceQueue) ← `remove0()` (java.lang.ref.ReferenceQueue) ← `remove()` (java.lang.ref.NativeReferenceQueue) ← `run()` (java.lang.ref.Finalizer$FinalizerThread)                                                                                                                                                                                                                             |
|  3.5% |      93 | `semaphore_wait_trap()` (libsystem_kernel.dylib) ← `os::signal_wait()` (libjvm.dylib) ← `signal_thread_entry()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                                                            |
|  3.5% |      93 | `__ulock_wait()` (libsystem_kernel.dylib) ← `CallJavaMainInNewThread()` (libjli.dylib) ← `ContinueInNewThread()` ← `JLI_Launch()` ← `main()` (java) ← `apple_main()` (libjli.dylib) ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                                                                             |
|  3.4% |      92 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `PlatformMonitor::wait()` (libjvm.dylib) ← `Monitor::wait_without_safepoint_check()` ← `WatcherThread::sleep()` ← `WatcherThread::run()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                        |
|  3.4% |      92 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `PlatformMonitor::wait()` (libjvm.dylib) ← `Monitor::wait_without_safepoint_check()` ← `NotificationThread::notification_thread_entry()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                    |
|  3.4% |      92 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `Parker::park()` (libjvm.dylib) ← `Unsafe_Park()` ← `park(boolean, long)` (jdk.internal.misc.Unsafe) ← `parkNanos(Object, long)` (java.util.concurrent.locks.LockSupport) ← `await(long, TimeUnit)` (java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject) ← `await(long)` (java.lang.ref.ReferenceQueue) ← `remove0(long)` ← `remove(long)` ← `run()` (jdk.internal.ref.CleanerImpl) ← `runWith(Object, Runnable)` (java.lang.Thread) ← `run()` ← `run()` (jdk.internal.misc.InnocuousThread)                                                                                                    |
|  3.4% |      91 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `PlatformMonitor::wait()` (libjvm.dylib) ← `Monitor::wait_without_safepoint_check()` ← `VMThread::wait_for_operation()` ← `VMThread::run()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                     |
|  3.3% |      89 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `PlatformMonitor::wait()` (libjvm.dylib) ← `Monitor::wait_without_safepoint_check()` ← `G1ConcurrentMarkThread::run_service()` ← `ConcurrentGCThread::run()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                    |
|  0.3% |       7 | `inflate_fast()` (libzip.dylib) ← `Java_java_util_zip_Inflater_inflateBytesBytes()` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (java.util.zip.Inflater) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (java.util.zip.InflaterInputStream) ← `read(byte[], int, int)` (java.util.zip.ZipInputStream) ← `read(byte[])` (java.io.FilterInputStream) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (org.jetbrains.kotlin.preloading.ClassPreloadingUtils) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (org.jetbrains.kotlin.preloading.Preloader) ← `main(String[])` |
|  0.2% |       6 | `PhaseChaitin::Split()` (libjvm.dylib) ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                      |
|  0.1% |       3 | `PhaseChaitin::post_allocate_copy_removal()` (libjvm.dylib) ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                 |
