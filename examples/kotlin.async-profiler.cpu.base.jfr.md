# Sampling profile

Collected 1,307 samples.

| Category |     % | Samples |
| -------- | ----: | ------: |
| ours     | 98.9% |   1,293 |
| stdlib   |  1.1% |      14 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                      | Location                 |
| ---: | ------: | --------------------------------------------- | ------------------------ |
| 4.1% |      54 | `inflate_fast()`                              | libzip.dylib             |
| 1.7% |      22 | `IndexSetIterator::advance_and_next()`        | libjvm.dylib             |
| 1.6% |      21 | `__psynch_cvwait()`                           | libsystem_kernel.dylib   |
| 1.6% |      21 | `tlv_get_addr()`                              | libdyld.dylib            |
| 1.6% |      21 | `SymbolTable::do_lookup()`                    | libjvm.dylib             |
| 1.2% |      16 | `PhaseChaitin::Split()`                       | libjvm.dylib             |
| 1.0% |      13 | `__psynch_mutexwait()`                        | libsystem_kernel.dylib   |
| 0.9% |      12 | `_platform_memset()`                          | libsystem_platform.dylib |
| 0.9% |      12 | `PhaseChaitin::build_ifg_physical()`          | libjvm.dylib             |
| 0.8% |      11 | `PhaseChaitin::gather_lrg_masks()`            | libjvm.dylib             |
| 0.8% |      10 | `PhaseAggressiveCoalesce::insert_copies()`    | libjvm.dylib             |
| 0.7% |       9 | `PhaseLive::compute()`                        | libjvm.dylib             |
| 0.7% |       9 | `MultiNode::is_CFG()`                         | libjvm.dylib             |
| 0.7% |       9 | `PhaseIdealLoop::build_loop_early()`          | libjvm.dylib             |
| 0.7% |       9 | `PhaseIdealLoop::build_loop_late()`           | libjvm.dylib             |
| 0.7% |       9 | `PhaseIdealLoop::build_loop_late_post_work()` | libjvm.dylib             |
| 0.7% |       9 | `Node::dominates()`                           | libjvm.dylib             |
| 0.7% |       9 | `pthread_jit_write_protect_np()`              | libsystem_pthread.dylib  |
| 0.6% |       8 | `LinearScanWalker::alloc_free_reg()`          | libjvm.dylib             |
| 0.6% |       8 | `PhaseLive::add_liveout()`                    | libjvm.dylib             |

#### Callers

Callers ranked by contribution to each function's self samples. Caller attribution may be imprecise due to inlining.

##### `inflate_fast()` (libzip.dylib)

|      % | Samples | Caller                                            | Location     |
| -----: | ------: | ------------------------------------------------- | ------------ |
| 100.0% |      54 | `Java_java_util_zip_Inflater_inflateBytesBytes()` | libzip.dylib |

##### `IndexSetIterator::advance_and_next()` (libjvm.dylib)

|     % | Samples | Caller                               | Location     |
| ----: | ------: | ------------------------------------ | ------------ |
| 27.3% |       6 | `PhaseChaitin::Select()`             | libjvm.dylib |
| 18.2% |       4 | `PhaseIFG::re_insert()`              | libjvm.dylib |
| 13.6% |       3 | `PhaseIFG::remove_node()`            | libjvm.dylib |
|  9.1% |       2 | `PhaseIFG::SquareUp()`               | libjvm.dylib |
|  9.1% |       2 | `PhaseChaitin::build_ifg_physical()` | libjvm.dylib |

##### `__psynch_cvwait()` (libsystem_kernel.dylib)

|     % | Samples | Caller                    | Location               |
| ----: | ------: | ------------------------- | ---------------------- |
| 95.2% |      20 | `PlatformMonitor::wait()` | libjvm.dylib           |
|  4.8% |       1 | `Profiler::timerLoop()`   | libasyncProfiler.dylib |

##### `tlv_get_addr()` (libdyld.dylib)

|    % | Samples | Caller                              | Location     |
| ---: | ------: | ----------------------------------- | ------------ |
| 4.8% |       1 | `CmpINode::Ideal()`                 | libjvm.dylib |
| 4.8% |       1 | `BlockListBuilder::make_block_at()` | libjvm.dylib |
| 4.8% |       1 | `ResourceBitMap::ResourceBitMap()`  | libjvm.dylib |
| 4.8% |       1 | `LIRGenerator::block_do()`          | libjvm.dylib |
| 4.8% |       1 | `OopMap::deep_copy()`               | libjvm.dylib |

##### `SymbolTable::do_lookup()` (libjvm.dylib)

|     % | Samples | Caller                                           | Location     |
| ----: | ------: | ------------------------------------------------ | ------------ |
| 71.4% |      15 | `SymbolTable::lookup_only()`                     | libjvm.dylib |
| 14.3% |       3 | `SymbolTable::new_symbol()`                      | libjvm.dylib |
|  9.5% |       2 | `ClassFileParser::parse_constant_pool_entries()` | libjvm.dylib |
|  4.8% |       1 | `SignatureStream::find_symbol()`                 | libjvm.dylib |

##### `PhaseChaitin::Split()` (libjvm.dylib)

|      % | Samples | Caller                              | Location     |
| -----: | ------: | ----------------------------------- | ------------ |
| 100.0% |      16 | `PhaseChaitin::Register_Allocate()` | libjvm.dylib |

##### `__psynch_mutexwait()` (libsystem_kernel.dylib)

|      % | Samples | Caller                                | Location                |
| -----: | ------: | ------------------------------------- | ----------------------- |
| 100.0% |      13 | `_pthread_mutex_firstfit_lock_slow()` | libsystem_pthread.dylib |

##### `_platform_memset()` (libsystem_platform.dylib)

|     % | Samples | Caller                                          | Location     |
| ----: | ------: | ----------------------------------------------- | ------------ |
| 16.7% |       2 | `MemAllocator::allocate()`                      | libjvm.dylib |
|  8.3% |       1 | `ThreadsSMRSupport::add_thread()`               | libjvm.dylib |
|  8.3% |       1 | `MethodLiveness::BasicBlock::get_liveness_at()` | libjvm.dylib |
|  8.3% |       1 | `Compilation::build_hir()`                      | libjvm.dylib |
|  8.3% |       1 | `Invariance::clone_nodes()`                     | libjvm.dylib |

##### `PhaseChaitin::build_ifg_physical()` (libjvm.dylib)

|      % | Samples | Caller                              | Location     |
| -----: | ------: | ----------------------------------- | ------------ |
| 100.0% |      12 | `PhaseChaitin::Register_Allocate()` | libjvm.dylib |

##### `PhaseChaitin::gather_lrg_masks()` (libjvm.dylib)

|      % | Samples | Caller                              | Location     |
| -----: | ------: | ----------------------------------- | ------------ |
| 100.0% |      11 | `PhaseChaitin::Register_Allocate()` | libjvm.dylib |

##### `PhaseAggressiveCoalesce::insert_copies()` (libjvm.dylib)

|      % | Samples | Caller                              | Location     |
| -----: | ------: | ----------------------------------- | ------------ |
| 100.0% |      10 | `PhaseChaitin::Register_Allocate()` | libjvm.dylib |

##### `PhaseLive::compute()` (libjvm.dylib)

|      % | Samples | Caller                              | Location     |
| -----: | ------: | ----------------------------------- | ------------ |
| 100.0% |       9 | `PhaseChaitin::Register_Allocate()` | libjvm.dylib |

##### `MultiNode::is_CFG()` (libjvm.dylib)

|     % | Samples | Caller                                   | Location     |
| ----: | ------: | ---------------------------------------- | ------------ |
| 33.3% |       3 | `PhaseIdealLoop::build_and_optimize()`   | libjvm.dylib |
| 22.2% |       2 | `RegionNode::is_unreachable_region()`    | libjvm.dylib |
| 11.1% |       1 | `PhaseIdealLoop::build_loop_tree()`      | libjvm.dylib |
| 11.1% |       1 | `PhaseIdealLoop::Dominators()`           | libjvm.dylib |
| 11.1% |       1 | `RegionNode::is_unreachable_from_root()` | libjvm.dylib |

##### `PhaseIdealLoop::build_loop_early()` (libjvm.dylib)

|      % | Samples | Caller                                 | Location     |
| -----: | ------: | -------------------------------------- | ------------ |
| 100.0% |       9 | `PhaseIdealLoop::build_and_optimize()` | libjvm.dylib |

##### `PhaseIdealLoop::build_loop_late()` (libjvm.dylib)

|      % | Samples | Caller                                 | Location     |
| -----: | ------: | -------------------------------------- | ------------ |
| 100.0% |       9 | `PhaseIdealLoop::build_and_optimize()` | libjvm.dylib |

##### `PhaseIdealLoop::build_loop_late_post_work()` (libjvm.dylib)

|      % | Samples | Caller                              | Location     |
| -----: | ------: | ----------------------------------- | ------------ |
| 100.0% |       9 | `PhaseIdealLoop::build_loop_late()` | libjvm.dylib |

##### `Node::dominates()` (libjvm.dylib)

|      % | Samples | Caller                             | Location     |
| -----: | ------: | ---------------------------------- | ------------ |
| 100.0% |       9 | `MemNode::all_controls_dominate()` | libjvm.dylib |

##### `pthread_jit_write_protect_np()` (libsystem_pthread.dylib)

|     % | Samples | Caller                                        | Location     |
| ----: | ------: | --------------------------------------------- | ------------ |
| 22.2% |       2 | `jni_GetPrimitiveArrayCritical()`             | libjvm.dylib |
| 11.1% |       1 | `JVM_IsArrayClass()`                          | libjvm.dylib |
| 11.1% |       1 | `Unsafe_AllocateInstance()`                   | libjvm.dylib |
| 11.1% |       1 | `InterpreterRuntime::build_method_counters()` | libjvm.dylib |
| 11.1% |       1 | `JVM_IHashCode()`                             | libjvm.dylib |

##### `LinearScanWalker::alloc_free_reg()` (libjvm.dylib)

|      % | Samples | Caller                                 | Location     |
| -----: | ------: | -------------------------------------- | ------------ |
| 100.0% |       8 | `LinearScanWalker::activate_current()` | libjvm.dylib |

##### `PhaseLive::add_liveout()` (libjvm.dylib)

|     % | Samples | Caller                              | Location     |
| ----: | ------: | ----------------------------------- | ------------ |
| 87.5% |       7 | `PhaseLive::compute()`              | libjvm.dylib |
| 12.5% |       1 | `PhaseChaitin::Register_Allocate()` | libjvm.dylib |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                 | Location                                             |
| ----: | ------: | -------------------------------------------------------- | ---------------------------------------------------- |
| 67.3% |     879 | `_pthread_start()`                                       | libsystem_pthread.dylib                              |
| 67.3% |     879 | `thread_start()`                                         | libsystem_pthread.dylib                              |
| 67.2% |     878 | `Thread::call_run()`                                     | libjvm.dylib                                         |
| 67.2% |     878 | `thread_native_entry()`                                  | libjvm.dylib                                         |
| 62.1% |     812 | `JavaThread::thread_main_inner()`                        | libjvm.dylib                                         |
| 62.0% |     810 | `CompileBroker::compiler_thread_loop()`                  | libjvm.dylib                                         |
| 60.6% |     792 | `CompileBroker::invoke_compiler_on_method()`             | libjvm.dylib                                         |
| 42.2% |     552 | `C2Compiler::compile_method()`                           | libjvm.dylib                                         |
| 42.0% |     549 | `Compile::Compile()`                                     | libjvm.dylib                                         |
| 31.9% |     417 | `run(String[])`                                          | org.jetbrains.kotlin.preloading.Preloader            |
| 31.9% |     417 | `main(String[])`                                         | org.jetbrains.kotlin.preloading.Preloader            |
| 26.1% |     341 | `main(String[])`                                         | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion |
| 26.1% |     341 | `main(String[])`                                         | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler           |
| 26.1% |     341 | `invokeStatic(Object, Object)`                           | java.lang.invoke.LambdaForm$DMH.0x000000e801008000   |
| 26.1% |     341 | `invoke(Object, Object, Object)`                         | java.lang.invoke.LambdaForm$MH.0x000000e801009400    |
| 26.1% |     341 | `invokeExact_MT(Object, Object, Object, Object)`         | java.lang.invoke.Invokers$Holder                     |
| 26.1% |     341 | `invokeImpl(Object, Object[])`                           | jdk.internal.reflect.DirectMethodHandleAccessor      |
| 26.1% |     341 | `invoke(Object, Object[])`                               | jdk.internal.reflect.DirectMethodHandleAccessor      |
| 26.1% |     341 | `invoke(Object, Object[])`                               | java.lang.reflect.Method                             |
| 25.9% |     339 | `exec(PrintStream, Services, MessageRenderer, String[])` | org.jetbrains.kotlin.cli.common.CLICompiler          |

#### Callees

Callees ranked by contribution to each function's total samples. Callee attribution may be imprecise due to inlining.

##### `_pthread_start()` (libsystem_pthread.dylib)

|     % | Samples | Callee                  | Location     |
| ----: | ------: | ----------------------- | ------------ |
| 99.9% |     878 | `thread_native_entry()` | libjvm.dylib |
|  0.1% |       1 | `ThreadJavaMain()`      | libjli.dylib |

##### `thread_start()` (libsystem_pthread.dylib)

|      % | Samples | Callee             | Location                |
| -----: | ------: | ------------------ | ----------------------- |
| 100.0% |     879 | `_pthread_start()` | libsystem_pthread.dylib |

##### `Thread::call_run()` (libjvm.dylib)

|     % | Samples | Callee                            | Location     |
| ----: | ------: | --------------------------------- | ------------ |
| 92.5% |     812 | `JavaThread::thread_main_inner()` | libjvm.dylib |
|  6.3% |      55 | `WorkerThread::run()`             | libjvm.dylib |
|  0.9% |       8 | `VMThread::run()`                 | libjvm.dylib |
|  0.2% |       2 | `WatcherThread::run()`            | libjvm.dylib |
|  0.1% |       1 | `ConcurrentGCThread::run()`       | libjvm.dylib |

##### `thread_native_entry()` (libjvm.dylib)

|      % | Samples | Callee               | Location     |
| -----: | ------: | -------------------- | ------------ |
| 100.0% |     878 | `Thread::call_run()` | libjvm.dylib |

##### `JavaThread::thread_main_inner()` (libjvm.dylib)

|     % | Samples | Callee                                       | Location     |
| ----: | ------: | -------------------------------------------- | ------------ |
| 99.8% |     810 | `CompileBroker::compiler_thread_loop()`      | libjvm.dylib |
|  0.1% |       1 | `JvmtiAgentThread::start_function_wrapper()` | libjvm.dylib |
|  0.1% |       1 | `ServiceThread::service_thread_entry()`      | libjvm.dylib |

##### `CompileBroker::compiler_thread_loop()` (libjvm.dylib)

|     % | Samples | Callee                                           | Location     |
| ----: | ------: | ------------------------------------------------ | ------------ |
| 97.8% |     792 | `CompileBroker::invoke_compiler_on_method()`     | libjvm.dylib |
|  2.1% |      17 | `CompileQueue::get()`                            | libjvm.dylib |
|  0.1% |       1 | `CompileBroker::possibly_add_compiler_threads()` | libjvm.dylib |

##### `CompileBroker::invoke_compiler_on_method()` (libjvm.dylib)

|     % | Samples | Callee                                | Location     |
| ----: | ------: | ------------------------------------- | ------------ |
| 69.7% |     552 | `C2Compiler::compile_method()`        | libjvm.dylib |
| 29.4% |     233 | `Compiler::compile_method()`          | libjvm.dylib |
|  0.5% |       4 | `ciEnv::get_method_from_handle()`     | libjvm.dylib |
|  0.1% |       1 | `CompileBroker::collect_statistics()` | libjvm.dylib |
|  0.1% |       1 | `TraceTime::~TraceTime()`             | libjvm.dylib |

##### `C2Compiler::compile_method()` (libjvm.dylib)

|     % | Samples | Callee                | Location     |
| ----: | ------: | --------------------- | ------------ |
| 99.5% |     549 | `Compile::Compile()`  | libjvm.dylib |
|  0.2% |       1 | `Chunk::next_chop()`  | libjvm.dylib |
|  0.2% |       1 | `Compile::~Compile()` | libjvm.dylib |
|  0.2% |       1 | `Arena::Arena()`      | libjvm.dylib |

##### `Compile::Compile()` (libjvm.dylib)

|     % | Samples | Callee                                     | Location     |
| ----: | ------: | ------------------------------------------ | ------------ |
| 50.1% |     275 | `Compile::Code_Gen()`                      | libjvm.dylib |
| 36.6% |     201 | `Compile::Optimize()`                      | libjvm.dylib |
| 11.7% |      64 | `ParseGenerator::generate()`               | libjvm.dylib |
|  0.9% |       5 | `PhaseRemoveUseless::PhaseRemoveUseless()` | libjvm.dylib |
|  0.4% |       2 | `CallGenerator::for_inline()`              | libjvm.dylib |

##### `run(String[])` (org.jetbrains.kotlin.preloading.Preloader)

|     % | Samples | Callee                                                                       | Location                                             |
| ----: | ------: | ---------------------------------------------------------------------------- | ---------------------------------------------------- |
| 81.8% |     341 | `invoke(Object, Object[])`                                                   | java.lang.reflect.Method                             |
| 17.7% |      74 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | org.jetbrains.kotlin.preloading.ClassPreloadingUtils |
|  0.2% |       1 | `loadClass(String)`                                                          | java.lang.ClassLoader                                |
|  0.2% |       1 | `getMethod(String, Class[])`                                                 | java.lang.Class                                      |

##### `main(String[])` (org.jetbrains.kotlin.preloading.Preloader)

|      % | Samples | Callee          | Location                                  |
| -----: | ------: | --------------- | ----------------------------------------- |
| 100.0% |     417 | `run(String[])` | org.jetbrains.kotlin.preloading.Preloader |

##### `main(String[])` (org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion)

|     % | Samples | Callee                          | Location                                              |
| ----: | ------: | ------------------------------- | ----------------------------------------------------- |
| 99.4% |     339 | `doMain(CLICompiler, String[])` | org.jetbrains.kotlin.cli.common.CLICompiler$Companion |
|  0.6% |       2 | `<init>()`                      | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler            |

##### `main(String[])` (org.jetbrains.kotlin.cli.jvm.K2JVMCompiler)

|      % | Samples | Callee           | Location                                             |
| -----: | ------: | ---------------- | ---------------------------------------------------- |
| 100.0% |     341 | `main(String[])` | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion |

##### `invokeStatic(Object, Object)` (java.lang.invoke.LambdaForm$DMH.0x000000e801008000)

|      % | Samples | Callee           | Location                                   |
| -----: | ------: | ---------------- | ------------------------------------------ |
| 100.0% |     341 | `main(String[])` | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler |

##### `invoke(Object, Object, Object)` (java.lang.invoke.LambdaForm$MH.0x000000e801009400)

|      % | Samples | Callee                         | Location                                           |
| -----: | ------: | ------------------------------ | -------------------------------------------------- |
| 100.0% |     341 | `invokeStatic(Object, Object)` | java.lang.invoke.LambdaForm$DMH.0x000000e801008000 |

##### `invokeExact_MT(Object, Object, Object, Object)` (java.lang.invoke.Invokers$Holder)

|      % | Samples | Callee                           | Location                                          |
| -----: | ------: | -------------------------------- | ------------------------------------------------- |
| 100.0% |     341 | `invoke(Object, Object, Object)` | java.lang.invoke.LambdaForm$MH.0x000000e801009400 |

##### `invokeImpl(Object, Object[])` (jdk.internal.reflect.DirectMethodHandleAccessor)

|      % | Samples | Callee                                           | Location                         |
| -----: | ------: | ------------------------------------------------ | -------------------------------- |
| 100.0% |     341 | `invokeExact_MT(Object, Object, Object, Object)` | java.lang.invoke.Invokers$Holder |

##### `invoke(Object, Object[])` (jdk.internal.reflect.DirectMethodHandleAccessor)

|      % | Samples | Callee                         | Location                                        |
| -----: | ------: | ------------------------------ | ----------------------------------------------- |
| 100.0% |     341 | `invokeImpl(Object, Object[])` | jdk.internal.reflect.DirectMethodHandleAccessor |

##### `invoke(Object, Object[])` (java.lang.reflect.Method)

|      % | Samples | Callee                     | Location                                        |
| -----: | ------: | -------------------------- | ----------------------------------------------- |
| 100.0% |     341 | `invoke(Object, Object[])` | jdk.internal.reflect.DirectMethodHandleAccessor |
|   0.9% |       3 | `acquireMethodAccessor()`  | java.lang.reflect.Method                        |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (org.jetbrains.kotlin.cli.common.CLICompiler)

|     % | Samples | Callee                                                                               | Location                                                              |
| ----: | ------: | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| 98.2% |     333 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | org.jetbrains.kotlin.cli.common.CLICompiler                           |
|  1.5% |       5 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt |
|  0.3% |       1 | `InterpreterRuntime::resolve_from_cache()`                                           | libjvm.dylib                                                          |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.9% |      51 | `inflate_fast()` (libzip.dylib) ← `Java_java_util_zip_Inflater_inflateBytesBytes()` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (java.util.zip.Inflater) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (java.util.zip.InflaterInputStream) ← `read(byte[], int, int)` (java.util.zip.ZipInputStream) ← `read(byte[])` (java.io.FilterInputStream) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (org.jetbrains.kotlin.preloading.ClassPreloadingUtils) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (org.jetbrains.kotlin.preloading.Preloader) ← `main(String[])`       |
| 1.2% |      16 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `PlatformMonitor::wait()` (libjvm.dylib) ← `Monitor::wait()` ← `CompileQueue::get()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                    |
| 1.2% |      16 | `PhaseChaitin::Split()` (libjvm.dylib) ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                            |
| 0.9% |      12 | `PhaseChaitin::build_ifg_physical()` (libjvm.dylib) ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                               |
| 0.8% |      11 | `PhaseChaitin::gather_lrg_masks()` (libjvm.dylib) ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                 |
| 0.8% |      10 | `PhaseAggressiveCoalesce::insert_copies()` (libjvm.dylib) ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                         |
| 0.7% |       9 | `PhaseLive::compute()` (libjvm.dylib) ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                             |
| 0.6% |       8 | `LinearScanWalker::alloc_free_reg()` (libjvm.dylib) ← `LinearScanWalker::activate_current()` ← `IntervalWalker::walk_to()` ← `LinearScan::allocate_registers()` ← `LinearScan::do_linear_scan()` ← `Compilation::emit_lir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation()` ← `Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                     |
| 0.5% |       7 | `PhaseIdealLoop::build_loop_early()` (libjvm.dylib) ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop()` ← `PhaseIdealLoop::optimize()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                        |
| 0.5% |       7 | `PhaseLive::add_liveout()` (libjvm.dylib) ← `PhaseLive::compute()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                |
| 0.5% |       7 | `PhaseIdealLoop::build_loop_late_post_work()` (libjvm.dylib) ← `PhaseIdealLoop::build_loop_late()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop()` ← `PhaseIdealLoop::optimize()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                         |
| 0.5% |       6 | `LinearScanWalker::free_collect_inactive_fixed()` (libjvm.dylib) ← `LinearScanWalker::alloc_free_reg()` ← `LinearScanWalker::activate_current()` ← `IntervalWalker::walk_to()` ← `LinearScan::allocate_registers()` ← `LinearScan::do_linear_scan()` ← `Compilation::emit_lir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation()` ← `Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()` |
| 0.5% |       6 | `PhaseChaitin::elide_copy()` (libjvm.dylib) ← `PhaseChaitin::post_allocate_copy_removal()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                        |
| 0.5% |       6 | `LinearScan::build_intervals()` (libjvm.dylib) ← `LinearScan::do_linear_scan()` ← `Compilation::emit_lir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation()` ← `Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                      |
| 0.5% |       6 | `IndexSetIterator::advance_and_next()` (libjvm.dylib) ← `PhaseChaitin::Select()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                  |
| 0.5% |       6 | `PhaseIdealLoop::build_loop_late()` (libjvm.dylib) ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop()` ← `PhaseIdealLoop::optimize()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                         |
| 0.5% |       6 | `semaphore_wait_trap()` (libsystem_kernel.dylib) ← `WorkerThread::run()` (libjvm.dylib) ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.4% |       5 | `IntervalWalker::walk_to()` (libjvm.dylib) ← `IntervalWalker::walk_to()` ← `LinearScan::allocate_registers()` ← `LinearScan::do_linear_scan()` ← `Compilation::emit_lir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation()` ← `Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                       |
| 0.4% |       5 | `PhaseOutput::BuildOopMaps()` (libjvm.dylib) ← `PhaseOutput::Output()` ← `Compile::Code_Gen()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                  |
| 0.4% |       5 | `Compile::final_graph_reshaping_walk()` (libjvm.dylib) ← `Compile::final_graph_reshaping()` ← `Compile::Optimize()` ← `Compile::Compile()` ← `C2Compiler::compile_method()` ← `CompileBroker::invoke_compiler_on_method()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                             |
