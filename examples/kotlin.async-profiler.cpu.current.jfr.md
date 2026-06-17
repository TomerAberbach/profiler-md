# Sampling profile

Collected 1,331 samples.

| Category |     % | Samples |
| -------- | ----: | ------: |
| ours     | 98.3% |   1,308 |
| stdlib   |  1.7% |      23 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                                                                                                                                   | Location                 |
| ---: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| 3.8% |      50 | `inflate_fast()`                                                                                                                                           | libzip.dylib             |
| 2.2% |      29 | `SymbolTable::do_lookup()`                                                                                                                                 | libjvm.dylib             |
| 2.0% |      26 | `tlv_get_addr()`                                                                                                                                           | libdyld.dylib            |
| 1.5% |      20 | `PhaseChaitin::Split()`                                                                                                                                    | libjvm.dylib             |
| 1.4% |      19 | `PhaseChaitin::build_ifg_physical()`                                                                                                                       | libjvm.dylib             |
| 1.4% |      18 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>()` | libjvm.dylib             |
| 1.2% |      16 | `IndexSetIterator::advance_and_next()`                                                                                                                     | libjvm.dylib             |
| 1.0% |      13 | `LinearScanWalker::free_collect_inactive_fixed()`                                                                                                          | libjvm.dylib             |
| 0.9% |      12 | `__psynch_cvwait()`                                                                                                                                        | libsystem_kernel.dylib   |
| 0.9% |      12 | `__psynch_mutexwait()`                                                                                                                                     | libsystem_kernel.dylib   |
| 0.8% |      11 | `PhaseChaitin::gather_lrg_masks()`                                                                                                                         | libjvm.dylib             |
| 0.8% |      11 | `PhaseLive::add_liveout()`                                                                                                                                 | libjvm.dylib             |
| 0.8% |      11 | `PhaseChaitin::elide_copy()`                                                                                                                               | libjvm.dylib             |
| 0.8% |      10 | `trampoline_stub_Relocation::get_trampoline_for()`                                                                                                         | libjvm.dylib             |
| 0.7% |       9 | `InstanceKlass::find_method_index()`                                                                                                                       | libjvm.dylib             |
| 0.7% |       9 | `PhaseIdealLoop::Dominators()`                                                                                                                             | libjvm.dylib             |
| 0.6% |       8 | `_platform_memmove()`                                                                                                                                      | libsystem_platform.dylib |
| 0.6% |       8 | `_platform_memset()`                                                                                                                                       | libsystem_platform.dylib |
| 0.6% |       8 | `LinearScanWalker::alloc_free_reg()`                                                                                                                       | libjvm.dylib             |
| 0.6% |       8 | `PhaseIdealLoop::build_loop_early()`                                                                                                                       | libjvm.dylib             |

#### Callers

Callers ranked by contribution to each function's self samples. Caller attribution may be imprecise due to inlining.

##### `inflate_fast()` (libzip.dylib)

|      % | Samples | Caller                                            | Location     |
| -----: | ------: | ------------------------------------------------- | ------------ |
| 100.0% |      50 | `Java_java_util_zip_Inflater_inflateBytesBytes()` | libzip.dylib |

##### `SymbolTable::do_lookup()` (libjvm.dylib)

|     % | Samples | Caller                                           | Location     |
| ----: | ------: | ------------------------------------------------ | ------------ |
| 65.5% |      19 | `SymbolTable::lookup_only()`                     | libjvm.dylib |
| 17.2% |       5 | `ClassFileParser::parse_constant_pool_entries()` | libjvm.dylib |
| 17.2% |       5 | `SymbolTable::new_symbol()`                      | libjvm.dylib |

##### `tlv_get_addr()` (libdyld.dylib)

|    % | Samples | Caller                                          | Location     |
| ---: | ------: | ----------------------------------------------- | ------------ |
| 3.8% |       1 | `G1CardSet::add_card()`                         | libjvm.dylib |
| 3.8% |       1 | `G1CardSet::transfer_cards_in_howl()`           | libjvm.dylib |
| 3.8% |       1 | `DefaultICProtectionBehaviour::lock()`          | libjvm.dylib |
| 3.8% |       1 | `Rewriter::Rewriter()`                          | libjvm.dylib |
| 3.8% |       1 | `CodeCache::make_marked_nmethods_deoptimized()` | libjvm.dylib |

##### `PhaseChaitin::Split()` (libjvm.dylib)

|      % | Samples | Caller                              | Location     |
| -----: | ------: | ----------------------------------- | ------------ |
| 100.0% |      20 | `PhaseChaitin::Register_Allocate()` | libjvm.dylib |

##### `PhaseChaitin::build_ifg_physical()` (libjvm.dylib)

|      % | Samples | Caller                              | Location     |
| -----: | ------: | ----------------------------------- | ------------ |
| 100.0% |      19 | `PhaseChaitin::Register_Allocate()` | libjvm.dylib |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>()` (libjvm.dylib)

|     % | Samples | Caller                                               | Location     |
| ----: | ------: | ---------------------------------------------------- | ------------ |
| 61.1% |      11 | `DebugInformationRecorder::describe_scope()`         | libjvm.dylib |
| 33.3% |       6 | `DebugInformationRecorder::serialize_scope_values()` | libjvm.dylib |
|  5.6% |       1 | `IRScopeDebugInfo::record_debug_info()`              | libjvm.dylib |

##### `IndexSetIterator::advance_and_next()` (libjvm.dylib)

|     % | Samples | Caller                               | Location     |
| ----: | ------: | ------------------------------------ | ------------ |
| 18.8% |       3 | `PhaseIFG::effective_degree()`       | libjvm.dylib |
| 18.8% |       3 | `PhaseChaitin::Select()`             | libjvm.dylib |
| 12.5% |       2 | `PhaseChaitin::build_ifg_physical()` | libjvm.dylib |
| 12.5% |       2 | `PhaseIFG::re_insert()`              | libjvm.dylib |
| 12.5% |       2 | `PhaseLive::add_liveout()`           | libjvm.dylib |

##### `LinearScanWalker::free_collect_inactive_fixed()` (libjvm.dylib)

|      % | Samples | Caller                               | Location     |
| -----: | ------: | ------------------------------------ | ------------ |
| 100.0% |      13 | `LinearScanWalker::alloc_free_reg()` | libjvm.dylib |

##### `__psynch_cvwait()` (libsystem_kernel.dylib)

|      % | Samples | Caller                    | Location     |
| -----: | ------: | ------------------------- | ------------ |
| 100.0% |      12 | `PlatformMonitor::wait()` | libjvm.dylib |

##### `__psynch_mutexwait()` (libsystem_kernel.dylib)

|      % | Samples | Caller                                | Location                |
| -----: | ------: | ------------------------------------- | ----------------------- |
| 100.0% |      12 | `_pthread_mutex_firstfit_lock_slow()` | libsystem_pthread.dylib |

##### `PhaseChaitin::gather_lrg_masks()` (libjvm.dylib)

|      % | Samples | Caller                              | Location     |
| -----: | ------: | ----------------------------------- | ------------ |
| 100.0% |      11 | `PhaseChaitin::Register_Allocate()` | libjvm.dylib |

##### `PhaseLive::add_liveout()` (libjvm.dylib)

|     % | Samples | Caller                              | Location     |
| ----: | ------: | ----------------------------------- | ------------ |
| 90.9% |      10 | `PhaseLive::compute()`              | libjvm.dylib |
|  9.1% |       1 | `PhaseChaitin::Register_Allocate()` | libjvm.dylib |

##### `PhaseChaitin::elide_copy()` (libjvm.dylib)

|      % | Samples | Caller                                       | Location     |
| -----: | ------: | -------------------------------------------- | ------------ |
| 100.0% |      11 | `PhaseChaitin::post_allocate_copy_removal()` | libjvm.dylib |

##### `trampoline_stub_Relocation::get_trampoline_for()` (libjvm.dylib)

|      % | Samples | Caller                                  | Location     |
| -----: | ------: | --------------------------------------- | ------------ |
| 100.0% |      10 | `NativeCall::set_destination_mt_safe()` | libjvm.dylib |

##### `InstanceKlass::find_method_index()` (libjvm.dylib)

|     % | Samples | Caller                                    | Location     |
| ----: | ------: | ----------------------------------------- | ------------ |
| 77.8% |       7 | `InstanceKlass::uncached_lookup_method()` | libjvm.dylib |
| 22.2% |       2 | `InstanceKlass::find_method()`            | libjvm.dylib |

##### `PhaseIdealLoop::Dominators()` (libjvm.dylib)

|      % | Samples | Caller                                 | Location     |
| -----: | ------: | -------------------------------------- | ------------ |
| 100.0% |       9 | `PhaseIdealLoop::build_and_optimize()` | libjvm.dylib |

##### `_platform_memmove()` (libsystem_platform.dylib)

|     % | Samples | Caller                                      | Location      |
| ----: | ------: | ------------------------------------------- | ------------- |
| 25.0% |       2 | `Node::out_grow()`                          | libjvm.dylib  |
| 12.5% |       1 | `Java_java_lang_ClassLoader_defineClass1()` | libjava.dylib |
| 12.5% |       1 | `SymbolTable::do_add_if_needed()`           | libjvm.dylib  |
| 12.5% |       1 | `ClassFileParser::parse_methods()`          | libjvm.dylib  |
| 12.5% |       1 | `CodeSection::expand_locs()`                | libjvm.dylib  |

##### `_platform_memset()` (libsystem_platform.dylib)

|     % | Samples | Caller                                     | Location     |
| ----: | ------: | ------------------------------------------ | ------------ |
| 12.5% |       1 | `InstanceKlass::allocate_instance_klass()` | libjvm.dylib |
| 12.5% |       1 | `BlockBegin::try_merge()`                  | libjvm.dylib |
| 12.5% |       1 | `LinearScan::compute_local_live_sets()`    | libjvm.dylib |
| 12.5% |       1 | `GraphBuilder::throw_op()`                 | libjvm.dylib |
| 12.5% |       1 | `Parse::build_exits()`                     | libjvm.dylib |

##### `LinearScanWalker::alloc_free_reg()` (libjvm.dylib)

|      % | Samples | Caller                                 | Location     |
| -----: | ------: | -------------------------------------- | ------------ |
| 100.0% |       8 | `LinearScanWalker::activate_current()` | libjvm.dylib |

##### `PhaseIdealLoop::build_loop_early()` (libjvm.dylib)

|      % | Samples | Caller                                 | Location     |
| -----: | ------: | -------------------------------------- | ------------ |
| 100.0% |       8 | `PhaseIdealLoop::build_and_optimize()` | libjvm.dylib |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                                                           | Location                                              |
| ----: | ------: | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 66.8% |     889 | `_pthread_start()`                                                                                 | libsystem_pthread.dylib                               |
| 66.8% |     889 | `thread_start()`                                                                                   | libsystem_pthread.dylib                               |
| 66.7% |     888 | `Thread::call_run()`                                                                               | libjvm.dylib                                          |
| 66.7% |     888 | `thread_native_entry()`                                                                            | libjvm.dylib                                          |
| 62.1% |     826 | `CompileBroker::compiler_thread_loop()`                                                            | libjvm.dylib                                          |
| 62.1% |     826 | `JavaThread::thread_main_inner()`                                                                  | libjvm.dylib                                          |
| 61.1% |     813 | `CompileBroker::invoke_compiler_on_method()`                                                       | libjvm.dylib                                          |
| 42.5% |     566 | `Compile::Compile()`                                                                               | libjvm.dylib                                          |
| 42.5% |     566 | `C2Compiler::compile_method()`                                                                     | libjvm.dylib                                          |
| 32.5% |     433 | `run(String[])`                                                                                    | org.jetbrains.kotlin.preloading.Preloader             |
| 32.5% |     433 | `main(String[])`                                                                                   | org.jetbrains.kotlin.preloading.Preloader             |
| 27.0% |     360 | `main(String[])`                                                                                   | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion  |
| 27.0% |     360 | `main(String[])`                                                                                   | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler            |
| 27.0% |     360 | `invokeStatic(Object, Object)`                                                                     | java.lang.invoke.LambdaForm$DMH.0x000000a801008000    |
| 27.0% |     360 | `invoke(Object, Object, Object)`                                                                   | java.lang.invoke.LambdaForm$MH.0x000000a801009400     |
| 27.0% |     360 | `invokeExact_MT(Object, Object, Object, Object)`                                                   | java.lang.invoke.Invokers$Holder                      |
| 27.0% |     360 | `invokeImpl(Object, Object[])`                                                                     | jdk.internal.reflect.DirectMethodHandleAccessor       |
| 27.0% |     360 | `invoke(Object, Object[])`                                                                         | jdk.internal.reflect.DirectMethodHandleAccessor       |
| 27.0% |     360 | `invoke(Object, Object[])`                                                                         | java.lang.reflect.Method                              |
| 27.0% |     359 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | org.jetbrains.kotlin.cli.common.CLICompiler$Companion |

#### Callees

Callees ranked by contribution to each function's total samples. Callee attribution may be imprecise due to inlining.

##### `_pthread_start()` (libsystem_pthread.dylib)

|     % | Samples | Callee                  | Location     |
| ----: | ------: | ----------------------- | ------------ |
| 99.9% |     888 | `thread_native_entry()` | libjvm.dylib |
|  0.1% |       1 | `ThreadJavaMain()`      | libjli.dylib |

##### `thread_start()` (libsystem_pthread.dylib)

|      % | Samples | Callee             | Location                |
| -----: | ------: | ------------------ | ----------------------- |
| 100.0% |     889 | `_pthread_start()` | libsystem_pthread.dylib |

##### `Thread::call_run()` (libjvm.dylib)

|     % | Samples | Callee                            | Location     |
| ----: | ------: | --------------------------------- | ------------ |
| 93.0% |     826 | `JavaThread::thread_main_inner()` | libjvm.dylib |
|  6.6% |      59 | `WorkerThread::run()`             | libjvm.dylib |
|  0.3% |       3 | `VMThread::run()`                 | libjvm.dylib |

##### `thread_native_entry()` (libjvm.dylib)

|      % | Samples | Callee               | Location     |
| -----: | ------: | -------------------- | ------------ |
| 100.0% |     888 | `Thread::call_run()` | libjvm.dylib |

##### `CompileBroker::compiler_thread_loop()` (libjvm.dylib)

|     % | Samples | Callee                                       | Location     |
| ----: | ------: | -------------------------------------------- | ------------ |
| 98.4% |     813 | `CompileBroker::invoke_compiler_on_method()` | libjvm.dylib |
|  1.5% |      12 | `CompileQueue::get()`                        | libjvm.dylib |
|  0.1% |       1 | `CompileTaskWrapper::~CompileTaskWrapper()`  | libjvm.dylib |

##### `JavaThread::thread_main_inner()` (libjvm.dylib)

|      % | Samples | Callee                                  | Location     |
| -----: | ------: | --------------------------------------- | ------------ |
| 100.0% |     826 | `CompileBroker::compiler_thread_loop()` | libjvm.dylib |

##### `CompileBroker::invoke_compiler_on_method()` (libjvm.dylib)

|     % | Samples | Callee                            | Location     |
| ----: | ------: | --------------------------------- | ------------ |
| 69.6% |     566 | `C2Compiler::compile_method()`    | libjvm.dylib |
| 29.2% |     237 | `Compiler::compile_method()`      | libjvm.dylib |
|  0.7% |       6 | `ciEnv::get_method_from_handle()` | libjvm.dylib |
|  0.2% |       2 | `ciEnv::~ciEnv()`                 | libjvm.dylib |
|  0.1% |       1 | `CompilationLog::log_compile()`   | libjvm.dylib |

##### `Compile::Compile()` (libjvm.dylib)

|     % | Samples | Callee                                     | Location     |
| ----: | ------: | ------------------------------------------ | ------------ |
| 53.0% |     300 | `Compile::Code_Gen()`                      | libjvm.dylib |
| 36.4% |     206 | `Compile::Optimize()`                      | libjvm.dylib |
|  8.8% |      50 | `ParseGenerator::generate()`               | libjvm.dylib |
|  1.1% |       6 | `PhaseRemoveUseless::PhaseRemoveUseless()` | libjvm.dylib |
|  0.4% |       2 | `TypeFunc::make()`                         | libjvm.dylib |

##### `C2Compiler::compile_method()` (libjvm.dylib)

|      % | Samples | Callee               | Location     |
| -----: | ------: | -------------------- | ------------ |
| 100.0% |     566 | `Compile::Compile()` | libjvm.dylib |

##### `run(String[])` (org.jetbrains.kotlin.preloading.Preloader)

|     % | Samples | Callee                                                                       | Location                                             |
| ----: | ------: | ---------------------------------------------------------------------------- | ---------------------------------------------------- |
| 83.1% |     360 | `invoke(Object, Object[])`                                                   | java.lang.reflect.Method                             |
| 16.9% |      73 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | org.jetbrains.kotlin.preloading.ClassPreloadingUtils |

##### `main(String[])` (org.jetbrains.kotlin.preloading.Preloader)

|      % | Samples | Callee          | Location                                  |
| -----: | ------: | --------------- | ----------------------------------------- |
| 100.0% |     433 | `run(String[])` | org.jetbrains.kotlin.preloading.Preloader |

##### `main(String[])` (org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion)

|     % | Samples | Callee                          | Location                                              |
| ----: | ------: | ------------------------------- | ----------------------------------------------------- |
| 99.7% |     359 | `doMain(CLICompiler, String[])` | org.jetbrains.kotlin.cli.common.CLICompiler$Companion |
|  0.3% |       1 | `<init>()`                      | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler            |

##### `main(String[])` (org.jetbrains.kotlin.cli.jvm.K2JVMCompiler)

|      % | Samples | Callee           | Location                                             |
| -----: | ------: | ---------------- | ---------------------------------------------------- |
| 100.0% |     360 | `main(String[])` | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion |

##### `invokeStatic(Object, Object)` (java.lang.invoke.LambdaForm$DMH.0x000000a801008000)

|      % | Samples | Callee           | Location                                   |
| -----: | ------: | ---------------- | ------------------------------------------ |
| 100.0% |     360 | `main(String[])` | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler |

##### `invoke(Object, Object, Object)` (java.lang.invoke.LambdaForm$MH.0x000000a801009400)

|      % | Samples | Callee                         | Location                                           |
| -----: | ------: | ------------------------------ | -------------------------------------------------- |
| 100.0% |     360 | `invokeStatic(Object, Object)` | java.lang.invoke.LambdaForm$DMH.0x000000a801008000 |

##### `invokeExact_MT(Object, Object, Object, Object)` (java.lang.invoke.Invokers$Holder)

|      % | Samples | Callee                           | Location                                          |
| -----: | ------: | -------------------------------- | ------------------------------------------------- |
| 100.0% |     360 | `invoke(Object, Object, Object)` | java.lang.invoke.LambdaForm$MH.0x000000a801009400 |

##### `invokeImpl(Object, Object[])` (jdk.internal.reflect.DirectMethodHandleAccessor)

|      % | Samples | Callee                                           | Location                         |
| -----: | ------: | ------------------------------------------------ | -------------------------------- |
| 100.0% |     360 | `invokeExact_MT(Object, Object, Object, Object)` | java.lang.invoke.Invokers$Holder |

##### `invoke(Object, Object[])` (jdk.internal.reflect.DirectMethodHandleAccessor)

|      % | Samples | Callee                         | Location                                        |
| -----: | ------: | ------------------------------ | ----------------------------------------------- |
| 100.0% |     360 | `invokeImpl(Object, Object[])` | jdk.internal.reflect.DirectMethodHandleAccessor |

##### `invoke(Object, Object[])` (java.lang.reflect.Method)

|      % | Samples | Callee                            | Location                                        |
| -----: | ------: | --------------------------------- | ----------------------------------------------- |
| 100.0% |     360 | `invoke(Object, Object[])`        | jdk.internal.reflect.DirectMethodHandleAccessor |
|   0.6% |       2 | `acquireMethodAccessor()`         | java.lang.reflect.Method                        |
|   0.3% |       1 | `invoke(Object, Object[], Class)` | jdk.internal.reflect.DirectMethodHandleAccessor |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (org.jetbrains.kotlin.cli.common.CLICompiler$Companion)

|     % | Samples | Callee                                                 | Location                                              |
| ----: | ------: | ------------------------------------------------------ | ----------------------------------------------------- |
| 99.4% |     357 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | org.jetbrains.kotlin.cli.common.CLICompiler$Companion |
|  0.6% |       2 | `defaultMessageRenderer()`                             | org.jetbrains.kotlin.cli.common.CLICompiler$Companion |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 3.3% |      44 | `inflate_fast()` (libzip.dylib) ← `Java_java_util_zip_Inflater_inflateBytesBytes()` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (java.util.zip.Inflater) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (java.util.zip.InflaterInputStream) ← `read(byte[], int, int)` (java.util.zip.ZipInputStream) ← `read(byte[])` (java.io.FilterInputStream) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (org.jetbrains.kotlin.preloading.ClassPreloadingUtils) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (org.jetbrains.kotlin.preloading.Preloader) ← `main(String[])`                                                                                |
| 1.5% |      20 | `PhaseChaitin::Split()` (libjvm.dylib) ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                     |
| 1.4% |      19 | `PhaseChaitin::build_ifg_physical()` (libjvm.dylib) ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                        |
| 1.0% |      13 | `LinearScanWalker::free_collect_inactive_fixed()` (libjvm.dylib) ← `LinearScanWalker::alloc_free_reg()` ← `LinearScanWalker::activate_current()` ← `IntervalWalker::walk_to()` ← `LinearScan::allocate_registers()` ← `LinearScan::do_linear_scan()` ← `Compilation::emit_lir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation()` ← `Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                          |
| 0.8% |      11 | `PhaseChaitin::gather_lrg_masks()` (libjvm.dylib) ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                          |
| 0.8% |      11 | `PhaseChaitin::elide_copy()` (libjvm.dylib) ← `PhaseChaitin::post_allocate_copy_removal()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                 |
| 0.8% |      10 | `PhaseLive::add_liveout()` (libjvm.dylib) ← `PhaseLive::compute()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                         |
| 0.7% |       9 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `PlatformMonitor::wait()` (libjvm.dylib) ← `Monitor::wait()` ← `CompileQueue::get()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.6% |       8 | `LinearScanWalker::alloc_free_reg()` (libjvm.dylib) ← `LinearScanWalker::activate_current()` ← `IntervalWalker::walk_to()` ← `LinearScan::allocate_registers()` ← `LinearScan::do_linear_scan()` ← `Compilation::emit_lir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation()` ← `Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                              |
| 0.6% |       8 | `PhaseLive::compute()` (libjvm.dylib) ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                      |
| 0.6% |       8 | `PhaseAggressiveCoalesce::insert_copies()` (libjvm.dylib) ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                  |
| 0.5% |       7 | `Matcher::xform()` (libjvm.dylib) ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                           |
| 0.5% |       6 | `inflate()` (libzip.dylib) ← `Java_java_util_zip_Inflater_inflateBytesBytes()` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (java.util.zip.Inflater) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (java.util.zip.InflaterInputStream) ← `read(byte[], int, int)` (java.util.zip.ZipInputStream) ← `read(byte[])` (java.io.FilterInputStream) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (org.jetbrains.kotlin.preloading.ClassPreloadingUtils) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (org.jetbrains.kotlin.preloading.Preloader) ← `main(String[])`                                                                                     |
| 0.5% |       6 | `PhaseIdealLoop::build_loop_late_post_work()` (libjvm.dylib) ← `PhaseIdealLoop::build_loop_late()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop()` ← `PhaseIdealLoop::optimize()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                  |
| 0.5% |       6 | `PhaseIdealLoop::Dominators()` (libjvm.dylib) ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop()` ← `PhaseIdealLoop::optimize()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                       |
| 0.5% |       6 | `PhaseOutput::BuildOopMaps()` (libjvm.dylib) ← `PhaseOutput::Output()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                           |
| 0.4% |       5 | `inflate_table()` (libzip.dylib) ← `inflate()` ← `Java_java_util_zip_Inflater_inflateBytesBytes()` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (java.util.zip.Inflater) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (java.util.zip.InflaterInputStream) ← `read(byte[], int, int)` (java.util.zip.ZipInputStream) ← `read(byte[])` (java.io.FilterInputStream) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (org.jetbrains.kotlin.preloading.ClassPreloadingUtils) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (org.jetbrains.kotlin.preloading.Preloader) ← `main(String[])`                                                                 |
| 0.4% |       5 | `Arena::contains()` (libjvm.dylib) ← `Matcher::xform()` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                     |
| 0.3% |       4 | `inflate_fast()` (libzip.dylib) ← `Java_java_util_zip_Inflater_inflateBytesBytes()` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (java.util.zip.Inflater) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (java.util.zip.InflaterInputStream) ← `read(byte[], int, int)` (java.util.zip.ZipInputStream) ← `read(byte[])` (java.io.FilterInputStream) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (org.jetbrains.kotlin.preloading.ClassPreloadingUtils) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (org.jetbrains.kotlin.preloading.Preloader) ← `main(String[])` |
| 0.3% |       4 | `LinearScan::assign_reg_num()` (libjvm.dylib) ← `LinearScan::do_linear_scan()` ← `Compilation::emit_lir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation()` ← `Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                |
