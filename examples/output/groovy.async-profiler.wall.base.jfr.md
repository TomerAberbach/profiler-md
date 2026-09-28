# Sampling profile

Collected 14,141 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Native            | 93.6% |  13,241 |
| Compiler          |  3.8% |     541 |
| Standard library  |  2.3% |     321 |
| Ours              |  0.1% |      19 |
| JIT               |  0.1% |      17 |
| Garbage collector | <0.1% |       2 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                    | Location                                     |
| ----: | ------: | ------------------------------------------- | -------------------------------------------- |
| 46.0% |   6,509 | `__psynch_cvwait`                           | `libsystem_kernel.dylib`                     |
| 39.0% |   5,519 | `semaphore_wait_trap`                       | `libsystem_kernel.dylib`                     |
|  3.3% |     466 | `__ulock_wait`                              | `libsystem_kernel.dylib`                     |
|  3.3% |     466 | `mach_msg2_trap`                            | `libsystem_kernel.dylib`                     |
|  0.2% |      27 | `PhaseChaitin::Split`                       | `libjvm.dylib`                               |
|  0.1% |      19 | `tlv_get_addr`                              | `libdyld.dylib`                              |
|  0.1% |      19 | `Node::dominates`                           | `libjvm.dylib`                               |
|  0.1% |      19 | `pthread_jit_write_protect_np`              | `libsystem_pthread.dylib`                    |
|  0.1% |      17 | `Arena::contains`                           | `libjvm.dylib`                               |
|  0.1% |      16 | `PhaseChaitin::build_ifg_physical`          | `libjvm.dylib`                               |
|  0.1% |      16 | `cast(Object)`                              | `java.lang.Class`                            |
|  0.1% |      15 | `newInstance(Class, int)`                   | `java.lang.reflect.Array`                    |
|  0.1% |      14 | `IndexSetIterator::advance_and_next`        | `libjvm.dylib`                               |
|  0.1% |      11 | `_platform_memset`                          | `libsystem_platform.dylib`                   |
|  0.1% |      10 | `NodeHash::hash_find_insert`                | `libjvm.dylib`                               |
|  0.1% |      10 | `getNode(Object)`                           | `java.util.HashMap`                          |
|  0.1% |       9 | `ciObjectFactory::get_metadata`             | `libjvm.dylib`                               |
|  0.1% |       9 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib`                               |
|  0.1% |       9 | `__psynch_mutexwait`                        | `libsystem_kernel.dylib`                     |
|  0.1% |       9 | `invokeVirtual(Object, Object)`             | `java.lang.invoke.DirectMethodHandle$Holder` |

#### Categories

##### Native

|     % | Samples | Function                                                                                                                                                 | Location                   |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 46.0% |   6,509 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 39.0% |   5,519 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`   |
|  3.3% |     466 | `__ulock_wait`                                                                                                                                           | `libsystem_kernel.dylib`   |
|  3.3% |     466 | `mach_msg2_trap`                                                                                                                                         | `libsystem_kernel.dylib`   |
|  0.1% |      19 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
|  0.1% |      19 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
|  0.1% |      17 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`             |
|  0.1% |      11 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
|  0.1% |       9 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
|  0.1% |       8 | `java_lang_Throwable::fill_in_stack_trace`                                                                                                               | `libjvm.dylib`             |
| <0.1% |       7 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| <0.1% |       6 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `libjvm.dylib`             |
| <0.1% |       5 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
| <0.1% |       4 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>`                             | `libjvm.dylib`             |
| <0.1% |       4 | `vmSymbols::find_sid`                                                                                                                                    | `libjvm.dylib`             |
| <0.1% |       4 | `_platform_memmove`                                                                                                                                      | `libsystem_platform.dylib` |
| <0.1% |       4 | `BacktraceBuilder::push`                                                                                                                                 | `libjvm.dylib`             |
| <0.1% |       3 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                          | `libjvm.dylib`             |
| <0.1% |       3 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                   | `libjvm.dylib`             |
| <0.1% |       3 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                           | `libjvm.dylib`             |

##### Compiler

|     % | Samples | Function                                    | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
|  0.2% |      27 | `PhaseChaitin::Split`                       | `libjvm.dylib` |
|  0.1% |      19 | `Node::dominates`                           | `libjvm.dylib` |
|  0.1% |      16 | `PhaseChaitin::build_ifg_physical`          | `libjvm.dylib` |
|  0.1% |      14 | `IndexSetIterator::advance_and_next`        | `libjvm.dylib` |
|  0.1% |      10 | `NodeHash::hash_find_insert`                | `libjvm.dylib` |
|  0.1% |       9 | `ciObjectFactory::get_metadata`             | `libjvm.dylib` |
|  0.1% |       9 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
|  0.1% |       8 | `PhaseChaitin::elide_copy`                  | `libjvm.dylib` |
| <0.1% |       7 | `PhaseChaitin::post_allocate_copy_removal`  | `libjvm.dylib` |
| <0.1% |       7 | `Type::cmp`                                 | `libjvm.dylib` |
| <0.1% |       6 | `Compile::identify_useful_nodes`            | `libjvm.dylib` |
| <0.1% |       6 | `PhaseIdealLoop::build_loop_late`           | `libjvm.dylib` |
| <0.1% |       6 | `Node::set_req_X`                           | `libjvm.dylib` |
| <0.1% |       6 | `PhaseOutput::BuildOopMaps`                 | `libjvm.dylib` |
| <0.1% |       5 | `PhaseIdealLoop::build_loop_early`          | `libjvm.dylib` |
| <0.1% |       5 | `PhaseIterGVN::subsume_node`                | `libjvm.dylib` |
| <0.1% |       5 | `PhaseAggressiveCoalesce::insert_copies`    | `libjvm.dylib` |
| <0.1% |       5 | `PhaseIFG::SquareUp`                        | `libjvm.dylib` |
| <0.1% |       5 | `PhaseLive::compute`                        | `libjvm.dylib` |
| <0.1% |       5 | `PhaseIdealLoop::is_dominator`              | `libjvm.dylib` |

##### Standard library

|     % | Samples | Function                                                                                                      | Location                                               |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
|  0.1% |      16 | `cast(Object)`                                                                                                | `java.lang.Class`                                      |
|  0.1% |      15 | `newInstance(Class, int)`                                                                                     | `java.lang.reflect.Array`                              |
|  0.1% |      10 | `getNode(Object)`                                                                                             | `java.util.HashMap`                                    |
|  0.1% |       9 | `invokeVirtual(Object, Object)`                                                                               | `java.lang.invoke.DirectMethodHandle$Holder`           |
|  0.1% |       8 | `collector(Object, Object, Object)`                                                                           | `java.lang.invoke.LambdaForm$MH.0x00000070010a1000`    |
| <0.1% |       6 | `collector(Object, Object)`                                                                                   | `java.lang.invoke.LambdaForm$MH.0x0000007001031800`    |
| <0.1% |       6 | `invokeStatic(Object, Object, Object)`                                                                        | `java.lang.invoke.DirectMethodHandle$Holder`           |
| <0.1% |       6 | `getInCache(LambdaFormEditor$TransformKey)`                                                                   | `java.lang.invoke.LambdaFormEditor`                    |
| <0.1% |       5 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800`   |
| <0.1% |       5 | `equals(Object)`                                                                                              | `java.lang.String`                                     |
| <0.1% |       4 | `invokeBasic(Object[])`                                                                                       | `java.lang.invoke.MethodHandle`                        |
| <0.1% |       3 | `map(Function)`                                                                                               | `java.util.stream.ReferencePipeline`                   |
| <0.1% |       3 | `isNullConversion(Class, Class, boolean)`                                                                     | `sun.invoke.util.VerifyType`                           |
| <0.1% |       3 | `boxInteger(int)`                                                                                             | `sun.invoke.util.ValueConversions`                     |
| <0.1% |       2 | `makeReinvokerForm(MethodHandle, int, Object, boolean, LambdaForm$NamedFunction, LambdaForm$NamedFunction)`   | `java.lang.invoke.DelegatingMethodHandle`              |
| <0.1% |       2 | `forEachRemaining(Consumer)`                                                                                  | `java.util.Spliterators$ArraySpliterator`              |
| <0.1% |       2 | `putVal(Object, Object, boolean)`                                                                             | `java.util.concurrent.ConcurrentHashMap`               |
| <0.1% |       2 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)`                                     | `java.lang.invoke.MethodHandleImpl`                    |
| <0.1% |       2 | `invokeExact_MT(Object, Object, Object)`                                                                      | `java.lang.invoke.Invokers$Holder`                     |
| <0.1% |       2 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `cast(Object)` (`java.lang.Class`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |      16 | `java.lang.Class:4068` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|      % | Samples | Location                     |
| -----: | ------: | ---------------------------- |
| 100.0% |      15 | `java.lang.reflect.Array:78` |

##### `getNode(Object)` (`java.util.HashMap`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 30.0% |       3 | `java.util.HashMap:587` |
| 30.0% |       3 | `java.util.HashMap:576` |
| 10.0% |       1 | `java.util.HashMap:579` |
| 10.0% |       1 | `java.util.HashMap:580` |
| 10.0% |       1 | `java.util.HashMap:585` |

##### `getInCache(LambdaFormEditor$TransformKey)` (`java.lang.invoke.LambdaFormEditor`)

|     % | Samples | Location                                |
| ----: | ------: | --------------------------------------- |
| 33.3% |       2 | `java.lang.invoke.LambdaFormEditor:383` |
| 16.7% |       1 | `java.lang.invoke.LambdaFormEditor:391` |
| 16.7% |       1 | `java.lang.invoke.LambdaFormEditor:397` |
| 16.7% |       1 | `java.lang.invoke.LambdaFormEditor:396` |
| 16.7% |       1 | `java.lang.invoke.LambdaFormEditor:403` |

##### `equals(Object)` (`java.lang.String`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 40.0% |       2 | `java.lang.String:1847` |
| 40.0% |       2 | `java.lang.String:1852` |
| 20.0% |       1 | `java.lang.String:1850` |

##### `map(Function)` (`java.util.stream.ReferencePipeline`)

|     % | Samples | Location                                 |
| ----: | ------: | ---------------------------------------- |
| 66.7% |       2 | `java.util.stream.ReferencePipeline:189` |
| 33.3% |       1 | `java.util.stream.ReferencePipeline:190` |

##### `isNullConversion(Class, Class, boolean)` (`sun.invoke.util.VerifyType`)

|     % | Samples | Location                        |
| ----: | ------: | ------------------------------- |
| 66.7% |       2 | `sun.invoke.util.VerifyType:71` |
| 33.3% |       1 | `sun.invoke.util.VerifyType:68` |

##### `boxInteger(int)` (`sun.invoke.util.ValueConversions`)

|      % | Samples | Location                               |
| -----: | ------: | -------------------------------------- |
| 100.0% |       3 | `sun.invoke.util.ValueConversions:280` |

##### `makeReinvokerForm(MethodHandle, int, Object, boolean, LambdaForm$NamedFunction, LambdaForm$NamedFunction)` (`java.lang.invoke.DelegatingMethodHandle`)

|     % | Samples | Location                                      |
| ----: | ------: | --------------------------------------------- |
| 50.0% |       1 | `java.lang.invoke.DelegatingMethodHandle:133` |
| 50.0% |       1 | `java.lang.invoke.DelegatingMethodHandle:129` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterators$ArraySpliterator`)

|     % | Samples | Location                                       |
| ----: | ------: | ---------------------------------------------- |
| 50.0% |       1 | `java.util.Spliterators$ArraySpliterator:1020` |
| 50.0% |       1 | `java.util.Spliterators$ArraySpliterator:1022` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

|     % | Samples | Location                                      |
| ----: | ------: | --------------------------------------------- |
| 50.0% |       1 | `java.util.concurrent.ConcurrentHashMap:1018` |
| 50.0% |       1 | `java.util.concurrent.ConcurrentHashMap:1039` |

##### `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

|     % | Samples | Location                                |
| ----: | ------: | --------------------------------------- |
| 50.0% |       1 | `java.lang.invoke.MethodHandleImpl:282` |
| 50.0% |       1 | `java.lang.invoke.MethodHandleImpl:333` |

##### `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|     % | Samples | Location                                                    |
| ----: | ------: | ----------------------------------------------------------- |
| 50.0% |       1 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1716` |
| 50.0% |       1 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1754` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location                 |
| ----: | ------: | ----------------------- | ------------------------ |
| 78.5% |   5,112 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  7.2% |     466 | `PlatformEvent::park`   | `libjvm.dylib`           |
|  7.2% |     466 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |
|  7.1% |     465 | `Parker::park`          | `libjvm.dylib`           |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 91.0% |   5,024 | `WorkerThread::run`              | `libjvm.dylib` |
|  8.4% |     466 | `os::signal_wait`                | `libjvm.dylib` |
|  0.3% |      17 | `WorkerThreads::run_task`        | `libjvm.dylib` |
|  0.2% |      12 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |

##### `__ulock_wait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |     466 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

|      % | Samples | Caller               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |     466 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      27 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|     % | Samples | Caller                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 10.5% |       2 | `LIRGenerator::block_do`                       | `libjvm.dylib` |
|  5.3% |       1 | `TypeInstPtr::make`                            | `libjvm.dylib` |
|  5.3% |       1 | `PhaseLive::compute`                           | `libjvm.dylib` |
|  5.3% |       1 | `GraphBuilder::access_field`                   | `libjvm.dylib` |
|  5.3% |       1 | `LinkResolver::runtime_resolve_special_method` | `libjvm.dylib` |

##### `Node::dominates` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |      19 | `MemNode::all_controls_dominate` | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                                 | Location                  |
| ----: | ------: | -------------------------------------- | ------------------------- |
| 63.2% |      12 | `JVM_NewArray`                         | `libjvm.dylib`            |
| 10.5% |       2 | `newArray(Class, int)`                 | `java.lang.reflect.Array` |
|  5.3% |       1 | `InterpreterRuntime::ldc`              | `libjvm.dylib`            |
|  5.3% |       1 | `SharedRuntime::resolve_static_call_C` | `libjvm.dylib`            |
|  5.3% |       1 | `JVM_GetCallerClass`                   | `libjvm.dylib`            |

##### `Arena::contains` (`libjvm.dylib`)

|     % | Samples | Caller           | Location       |
| ----: | ------: | ---------------- | -------------- |
| 94.1% |      16 | `Matcher::xform` | `libjvm.dylib` |
|  5.9% |       1 | `Matcher::match` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      16 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `cast(Object)` (`java.lang.Class`)

|     % | Samples | Caller                                  | Location                                             |
| ----: | ------: | --------------------------------------- | ---------------------------------------------------- |
| 93.8% |      15 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|  6.3% |       1 | `checkCast(Object)`                     | `java.lang.invoke.DirectMethodHandle$StaticAccessor` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|      % | Samples | Caller                              | Location                                             |
| -----: | ------: | ----------------------------------- | ---------------------------------------------------- |
| 100.0% |      15 | `invokeStatic(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000700102b400` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 28.6% |       4 | `PhaseIFG::SquareUp`               | `libjvm.dylib` |
| 14.3% |       2 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |
| 14.3% |       2 | `PhaseLive::add_liveout`           | `libjvm.dylib` |
|  7.1% |       1 | `PhaseChaitin::Select`             | `libjvm.dylib` |
|  7.1% |       1 | `PhaseIFG::effective_degree`       | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 27.3% |       3 | `MemAllocator::allocate`                 | `libjvm.dylib` |
|  9.1% |       1 | `ConNode::make`                          | `libjvm.dylib` |
|  9.1% |       1 | `InstanceKlass::allocate_instance_klass` | `libjvm.dylib` |
|  9.1% |       1 | `GraphKit::gen_checkcast`                | `libjvm.dylib` |
|  9.1% |       1 | `ConnectionGraph::do_analysis`           | `libjvm.dylib` |

##### `NodeHash::hash_find_insert` (`libjvm.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 50.0% |       5 | `PhaseIterGVN::transform_old`    | `libjvm.dylib` |
| 50.0% |       5 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |

##### `getNode(Object)` (`java.util.HashMap`)

|     % | Samples | Caller                | Location                  |
| ----: | ------: | --------------------- | ------------------------- |
| 80.0% |       8 | `get(Object)`         | `java.util.LinkedHashMap` |
| 10.0% |       1 | `get(Object)`         | `java.util.HashMap`       |
| 10.0% |       1 | `containsKey(Object)` | `java.util.HashMap`       |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|     % | Samples | Caller                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 22.2% |       2 | `ciBytecodeStream::get_method`         | `libjvm.dylib` |
| 22.2% |       2 | `ciObjectFactory::create_new_metadata` | `libjvm.dylib` |
| 11.1% |       1 | `ciObjectFactory::get`                 | `libjvm.dylib` |
| 11.1% |       1 | `ciEnv::get_klass_by_index_impl`       | `libjvm.dylib` |
| 11.1% |       1 | `ciMethod::ensure_method_data`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|     % | Samples | Caller                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 88.9% |       8 | `PhaseIdealLoop::build_loop_late`    | `libjvm.dylib` |
| 11.1% |       1 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |       9 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Caller                           | Location                                            |
| ----: | ------: | -------------------------------- | --------------------------------------------------- |
| 88.9% |       8 | `invoke(Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001089400` |
| 11.1% |       1 | `guardWithCatch(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001098400` |

##### `java_lang_Throwable::fill_in_stack_trace` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       8 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|     % | Samples | Caller                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 87.5% |       7 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
| 12.5% |       1 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |

##### `collector(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010a1000`)

|     % | Samples | Caller                           | Location                                            |
| ----: | ------: | -------------------------------- | --------------------------------------------------- |
| 50.0% |       4 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800` |
| 25.0% |       2 | `invoke(Object, Object, int)`    | `java.lang.invoke.LambdaForm$MH.0x00000070010cbc00` |
| 12.5% |       1 | `invoke(Object, Object, long)`   | `java.lang.invoke.LambdaForm$MH.0x000000700134b800` |
| 12.5% |       1 | `invoke(Object, Object, int)`    | `java.lang.invoke.LambdaForm$MH.0x00000070010d2000` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 57.1% |       4 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
| 42.9% |       3 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       7 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Type::cmp` (`libjvm.dylib`)

|      % | Samples | Caller         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |       7 | `Dict::Insert` | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       6 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |

##### `Compile::identify_useful_nodes` (`libjvm.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 50.0% |       3 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |
| 50.0% |       3 | `PhaseRemoveUseless::PhaseRemoveUseless`      | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       6 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Node::set_req_X` (`libjvm.dylib`)

|     % | Samples | Caller                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 83.3% |       5 | `Node::replace_edge`  | `libjvm.dylib` |
| 16.7% |       1 | `MergeMemNode::Ideal` | `libjvm.dylib` |

##### `PhaseOutput::BuildOopMaps` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |       6 | `PhaseOutput::Output` | `libjvm.dylib` |

##### `collector(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001031800`)

|     % | Samples | Caller                           | Location                                            |
| ----: | ------: | -------------------------------- | --------------------------------------------------- |
| 50.0% |       3 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700109b800` |
| 33.3% |       2 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700108e000` |
| 16.7% |       1 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010a9800` |

##### `invokeStatic(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Caller                                           | Location                                            |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 33.3% |       2 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700109b800` |
| 33.3% |       2 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070012b8400` |
| 16.7% |       1 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010ab000` |
| 16.7% |       1 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070011c8800` |

##### `getInCache(LambdaFormEditor$TransformKey)` (`java.lang.invoke.LambdaFormEditor`)

|     % | Samples | Caller                                          | Location                            |
| ----: | ------: | ----------------------------------------------- | ----------------------------------- |
| 33.3% |       2 | `filterArgumentForm(int, LambdaForm$BasicType)` | `java.lang.invoke.LambdaFormEditor` |
| 33.3% |       2 | `bindArgumentForm(int)`                         | `java.lang.invoke.LambdaFormEditor` |
| 33.3% |       2 | `addArgumentForm(int, LambdaForm$BasicType)`    | `java.lang.invoke.LambdaFormEditor` |

##### `SymbolTable::do_lookup` (`libjvm.dylib`)

|     % | Samples | Caller                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 80.0% |       4 | `SymbolTable::new_symbol`             | `libjvm.dylib` |
| 20.0% |       1 | `java_lang_String::as_symbol_or_null` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       5 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIterGVN::subsume_node` (`libjvm.dylib`)

|     % | Samples | Caller                                          | Location       |
| ----: | ------: | ----------------------------------------------- | -------------- |
| 80.0% |       4 | `PhaseIterGVN::transform_old`                   | `libjvm.dylib` |
| 20.0% |       1 | `PhaseMacroExpand::process_users_of_allocation` | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       5 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIFG::SquareUp` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       5 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       5 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::is_dominator` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 80.0% |       4 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep`      | `libjvm.dylib` |
| 20.0% |       1 | `PhaseIdealLoop::loop_predication_follow_branches` | `libjvm.dylib` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001088800`)

|     % | Samples | Caller                                   | Location                                            |
| ----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 20.0% |       1 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800` |
| 20.0% |       1 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700108e000` |
| 20.0% |       1 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010c8400` |
| 20.0% |       1 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010d6000` |
| 20.0% |       1 | `invoke(Object, Object, Object, int)`    | `java.lang.invoke.LambdaForm$MH.0x00000070010d6400` |

##### `equals(Object)` (`java.lang.String`)

|     % | Samples | Caller                                 | Location                                    |
| ----: | ------: | -------------------------------------- | ------------------------------------------- |
| 60.0% |       3 | `matches(Method, String, Class[])`     | `java.lang.PublicMethods$Key`               |
| 20.0% |       1 | `equals(Object, Object)`               | `java.util.Objects`                         |
| 20.0% |       1 | `invokeMethod(Object, String, Object)` | `org.codehaus.groovy.runtime.InvokerHelper` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                            | Location       |
| -----: | ------: | ------------------------------------------------- | -------------- |
| 100.0% |       4 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib` |

##### `vmSymbols::find_sid` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |       4 | `ciObjectFactory::get_symbol` | `libjvm.dylib` |

##### `_platform_memmove` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 25.0% |       1 | `XHandlers::XHandlers`                 | `libjvm.dylib` |
| 25.0% |       1 | `CodeSection::expand_locs`             | `libjvm.dylib` |
| 25.0% |       1 | `SharedRuntime::handle_ic_miss_helper` | `libjvm.dylib` |
| 25.0% |       1 | `JVM_GetCallerClass`                   | `libjvm.dylib` |

##### `BacktraceBuilder::push` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       4 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `invokeBasic(Object[])` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Caller                                                                 | Location                                            |
| ----: | ------: | ---------------------------------------------------------------------- | --------------------------------------------------- |
| 25.0% |       1 | `invoke(Object, Object, Object)`                                       | `java.lang.invoke.LambdaForm$MH.0x00000070010aa400` |
| 25.0% |       1 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
| 25.0% |       1 | `invokeSpecial(Object, Object, Object, Object)`                        | `java.lang.invoke.DirectMethodHandle$Holder`        |
| 25.0% |       1 | `invokeExact_MT(Object, Object, Object)`                               | `java.lang.invoke.Invokers$Holder`                  |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       3 | `G1ScanHRForRegionClosure::scan_memregion` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                                                   | Location       |
| -----: | ------: | ------------------------------------------------------------------------ | -------------- |
| 100.0% |       3 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                         | Location       |
| -----: | ------: | ---------------------------------------------- | -------------- |
| 100.0% |       3 | `void G1CMTask::process_grey_task_entry<true>` | `libjvm.dylib` |

##### `map(Function)` (`java.util.stream.ReferencePipeline`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |       3 | `setGuards(Object)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `isNullConversion(Class, Class, boolean)` (`sun.invoke.util.VerifyType`)

|      % | Samples | Caller                                                              | Location                            |
| -----: | ------: | ------------------------------------------------------------------- | ----------------------------------- |
| 100.0% |       3 | `computeValueConversions(MethodType, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `boxInteger(int)` (`sun.invoke.util.ValueConversions`)

|      % | Samples | Caller                      | Location                                     |
| -----: | ------: | --------------------------- | -------------------------------------------- |
| 100.0% |       3 | `invokeStatic(Object, int)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `makeReinvokerForm(MethodHandle, int, Object, boolean, LambdaForm$NamedFunction, LambdaForm$NamedFunction)` (`java.lang.invoke.DelegatingMethodHandle`)

|      % | Samples | Caller                                                                   | Location                                  |
| -----: | ------: | ------------------------------------------------------------------------ | ----------------------------------------- |
| 100.0% |       2 | `makeReinvokerForm(MethodHandle, int, Object, LambdaForm$NamedFunction)` | `java.lang.invoke.DelegatingMethodHandle` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterators$ArraySpliterator`)

|      % | Samples | Caller                        | Location                            |
| -----: | ------: | ----------------------------- | ----------------------------------- |
| 100.0% |       2 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

|     % | Samples | Caller                        | Location                                 |
| ----: | ------: | ----------------------------- | ---------------------------------------- |
| 50.0% |       1 | `putIfAbsent(Object, Object)` | `java.util.concurrent.ConcurrentHashMap` |
| 50.0% |       1 | `put(Object, Object)`         | `java.util.concurrent.ConcurrentHashMap` |

##### `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

|      % | Samples | Caller                                                            | Location                            |
| -----: | ------: | ----------------------------------------------------------------- | ----------------------------------- |
| 100.0% |       2 | `makePairwiseConvert(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `invokeExact_MT(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                                                                                        | Location                                        |
| -----: | ------: | --------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| 100.0% |       2 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|      % | Samples | Caller                                                                                                        | Location                                               |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       2 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                   | Location                  |
| ----: | ------: | ------------------------------------------ | ------------------------- |
| 83.5% |  11,813 | `_pthread_start`                           | `libsystem_pthread.dylib` |
| 83.5% |  11,813 | `thread_start`                             | `libsystem_pthread.dylib` |
| 80.2% |  11,346 | `Thread::call_run`                         | `libjvm.dylib`            |
| 80.2% |  11,346 | `thread_native_entry`                      | `libjvm.dylib`            |
| 46.0% |   6,509 | `__psynch_cvwait`                          | `libsystem_kernel.dylib`  |
| 39.0% |   5,519 | `semaphore_wait_trap`                      | `libsystem_kernel.dylib`  |
| 36.2% |   5,116 | `PlatformMonitor::wait`                    | `libjvm.dylib`            |
| 35.8% |   5,066 | `WorkerThread::run`                        | `libjvm.dylib`            |
| 27.9% |   3,951 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
| 26.2% |   3,706 | `Monitor::wait_without_safepoint_check`    | `libjvm.dylib`            |
| 11.5% |   1,622 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
| 10.0% |   1,410 | `Monitor::wait`                            | `libjvm.dylib`            |
|  9.9% |   1,397 | `ConcurrentGCThread::run`                  | `libjvm.dylib`            |
|  6.6% |     938 | `CompileQueue::get`                        | `libjvm.dylib`            |
|  6.6% |     932 | `JLI_Launch`                               | `libjli.dylib`            |
|  6.6% |     932 | `main`                                     | `java`                    |
|  4.8% |     684 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  3.9% |     550 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  3.9% |     549 | `Compile::Compile`                         | `libjvm.dylib`            |
|  3.3% |     467 | `unknown`                                  | `<unknown>`               |

#### Categories

##### Native

|     % | Samples | Function                                | Location                  |
| ----: | ------: | --------------------------------------- | ------------------------- |
| 83.5% |  11,813 | `_pthread_start`                        | `libsystem_pthread.dylib` |
| 83.5% |  11,813 | `thread_start`                          | `libsystem_pthread.dylib` |
| 80.2% |  11,346 | `Thread::call_run`                      | `libjvm.dylib`            |
| 80.2% |  11,346 | `thread_native_entry`                   | `libjvm.dylib`            |
| 46.0% |   6,509 | `__psynch_cvwait`                       | `libsystem_kernel.dylib`  |
| 39.0% |   5,519 | `semaphore_wait_trap`                   | `libsystem_kernel.dylib`  |
| 36.2% |   5,116 | `PlatformMonitor::wait`                 | `libjvm.dylib`            |
| 35.8% |   5,066 | `WorkerThread::run`                     | `libjvm.dylib`            |
| 27.9% |   3,951 | `JavaThread::thread_main_inner`         | `libjvm.dylib`            |
| 26.2% |   3,706 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib`            |
| 10.0% |   1,410 | `Monitor::wait`                         | `libjvm.dylib`            |
|  9.9% |   1,397 | `ConcurrentGCThread::run`               | `libjvm.dylib`            |
|  6.6% |     932 | `JLI_Launch`                            | `libjli.dylib`            |
|  6.6% |     932 | `main`                                  | `java`                    |
|  3.3% |     467 | `unknown`                               | `<unknown>`               |
|  3.3% |     466 | `__ulock_wait`                          | `libsystem_kernel.dylib`  |
|  3.3% |     466 | `CallJavaMainInNewThread`               | `libjli.dylib`            |
|  3.3% |     466 | `ContinueInNewThread`                   | `libjli.dylib`            |
|  3.3% |     466 | `apple_main`                            | `libjli.dylib`            |
|  3.3% |     466 | `G1ConcurrentMarkThread::run_service`   | `libjvm.dylib`            |

##### Compiler

|     % | Samples | Function                                   | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 11.5% |   1,622 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
|  6.6% |     938 | `CompileQueue::get`                        | `libjvm.dylib` |
|  4.8% |     684 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  3.9% |     550 | `C2Compiler::compile_method`               | `libjvm.dylib` |
|  3.9% |     549 | `Compile::Compile`                         | `libjvm.dylib` |
|  1.8% |     254 | `Compile::Code_Gen`                        | `libjvm.dylib` |
|  1.5% |     218 | `Compile::Optimize`                        | `libjvm.dylib` |
|  1.0% |     145 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
|  0.9% |     130 | `Compilation::compile_method`              | `libjvm.dylib` |
|  0.9% |     130 | `Compilation::Compilation`                 | `libjvm.dylib` |
|  0.8% |     118 | `Compilation::compile_java_method`         | `libjvm.dylib` |
|  0.7% |     103 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|  0.6% |      85 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
|  0.6% |      85 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
|  0.5% |      71 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
|  0.5% |      69 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |
|  0.4% |      51 | `Compilation::build_hir`                   | `libjvm.dylib` |
|  0.4% |      50 | `Compile::optimize_loops`                  | `libjvm.dylib` |
|  0.3% |      47 | `Matcher::match`                           | `libjvm.dylib` |
|  0.3% |      45 | `Compilation::emit_lir`                    | `libjvm.dylib` |

##### Standard library

|    % | Samples | Function                        | Location                                                                |
| ---: | ------: | ------------------------------- | ----------------------------------------------------------------------- |
| 3.3% |     466 | `wait0(long)`                   | `java.lang.Object`                                                      |
| 3.3% |     466 | `wait(long)`                    | `java.lang.Object`                                                      |
| 3.3% |     466 | `wait()`                        | `java.lang.Object`                                                      |
| 3.3% |     466 | `await()`                       | `java.lang.ref.NativeReferenceQueue`                                    |
| 3.3% |     466 | `remove0()`                     | `java.lang.ref.ReferenceQueue`                                          |
| 3.3% |     466 | `remove()`                      | `java.lang.ref.NativeReferenceQueue`                                    |
| 3.3% |     466 | `run()`                         | `java.lang.ref.Finalizer$FinalizerThread`                               |
| 3.3% |     466 | `waitForReferencePendingList()` | `java.lang.ref.Reference`                                               |
| 3.3% |     466 | `processPendingReferences()`    | `java.lang.ref.Reference`                                               |
| 3.3% |     466 | `run()`                         | `java.lang.ref.Reference$ReferenceHandler`                              |
| 3.3% |     465 | `park(boolean, long)`           | `jdk.internal.misc.Unsafe`                                              |
| 3.3% |     465 | `parkNanos(Object, long)`       | `java.util.concurrent.locks.LockSupport`                                |
| 3.3% |     465 | `await(long, TimeUnit)`         | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
| 3.3% |     465 | `await(long)`                   | `java.lang.ref.ReferenceQueue`                                          |
| 3.3% |     465 | `remove0(long)`                 | `java.lang.ref.ReferenceQueue`                                          |
| 3.3% |     465 | `remove(long)`                  | `java.lang.ref.ReferenceQueue`                                          |
| 3.3% |     465 | `run()`                         | `jdk.internal.ref.CleanerImpl`                                          |
| 3.3% |     465 | `runWith(Object, Runnable)`     | `java.lang.Thread`                                                      |
| 3.3% |     465 | `run()`                         | `java.lang.Thread`                                                      |
| 3.3% |     465 | `run()`                         | `jdk.internal.misc.InnocuousThread`                                     |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 96.0% |  11,346 | `thread_native_entry` | `libjvm.dylib` |
|  3.9% |     466 | `apple_main`          | `libjli.dylib` |
| <0.1% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |  11,813 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 44.7% |   5,066 | `WorkerThread::run`             | `libjvm.dylib` |
| 34.8% |   3,951 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| 12.3% |   1,397 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  4.1% |     466 | `WatcherThread::run`            | `libjvm.dylib` |
|  4.1% |     466 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |  11,346 | `Thread::call_run` | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Callee               | Location                  |
| ----: | ------: | -------------------- | ------------------------- |
| 99.9% |   5,112 | `__psynch_cvwait`    | `libsystem_kernel.dylib`  |
|  0.1% |       4 | `_pthread_cond_wait` | `libsystem_pthread.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 99.2% |   5,024 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
|  0.4% |      21 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
|  0.2% |       8 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib`           |
|  0.1% |       7 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib`           |
|  0.1% |       6 | `G1ParallelCleaningTask::work`    | `libjvm.dylib`           |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                                   | Location       |
| ----: | ------: | -------------------------------------------------------- | -------------- |
| 41.1% |   1,622 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib` |
| 11.8% |     466 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |
| 11.8% |     466 | `signal_thread_entry`                                    | `libjvm.dylib` |
| 11.8% |     466 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |
| 11.8% |     466 | `JvmtiAgentThread::start_function_wrapper`               | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |   3,706 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 57.8% |     938 | `CompileQueue::get`                        | `libjvm.dylib` |
| 42.2% |     684 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |   1,410 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 33.4% |     466 | `G1ConcurrentMarkThread::run_service`   | `libjvm.dylib` |
| 33.4% |     466 | `G1ServiceThread::run_service`          | `libjvm.dylib` |
| 33.3% |     465 | `G1ConcurrentRefineThread::run_service` | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|      % | Samples | Callee          | Location       |
| -----: | ------: | --------------- | -------------- |
| 100.0% |     938 | `Monitor::wait` | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 50.0% |     466 | `ContinueInNewThread`        | `libjli.dylib` |
| 50.0% |     466 | `CreateExecutionEnvironment` | `libjli.dylib` |

##### `main` (`java`)

|      % | Samples | Callee       | Location       |
| -----: | ------: | ------------ | -------------- |
| 100.0% |     932 | `JLI_Launch` | `libjli.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 80.4% |     550 | `C2Compiler::compile_method`    | `libjvm.dylib` |
| 19.0% |     130 | `Compiler::compile_method`      | `libjvm.dylib` |
|  0.3% |       2 | `ciEnv::~ciEnv`                 | `libjvm.dylib` |
|  0.1% |       1 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |
|  0.1% |       1 | `CompilationLog::log_compile`   | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee             | Location       |
| ----: | ------: | ------------------ | -------------- |
| 99.8% |     549 | `Compile::Compile` | `libjvm.dylib` |
|  0.2% |       1 | `Chunk::next_chop` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 46.3% |     254 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 39.7% |     218 | `Compile::Optimize`                      | `libjvm.dylib` |
| 12.6% |      69 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.7% |       4 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.5% |       3 | `CallGenerator::for_inline`              | `libjvm.dylib` |

##### `unknown` (`<unknown>`)

|     % | Samples | Callee                      | Location                                                |
| ----: | ------: | --------------------------- | ------------------------------------------------------- |
| 99.8% |     466 | `main`                      | `java`                                                  |
|  0.2% |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.imports.UnnecessaryGroovyImportRule` |

##### `CallJavaMainInNewThread` (`libjli.dylib`)

|      % | Samples | Callee         | Location                 |
| -----: | ------: | -------------- | ------------------------ |
| 100.0% |     466 | `__ulock_wait` | `libsystem_kernel.dylib` |

##### `ContinueInNewThread` (`libjli.dylib`)

|      % | Samples | Callee                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |     466 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `apple_main` (`libjli.dylib`)

|      % | Samples | Callee | Location |
| -----: | ------: | ------ | -------- |
| 100.0% |     466 | `main` | `java`   |

##### `G1ConcurrentMarkThread::run_service` (`libjvm.dylib`)

|     % | Samples | Callee                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 97.9% |     456 | `Monitor::wait_without_safepoint_check`            | `libjvm.dylib` |
|  2.1% |      10 | `G1ConcurrentMarkThread::concurrent_mark_cycle_do` | `libjvm.dylib` |

##### `wait0(long)` (`java.lang.Object`)

|      % | Samples | Callee            | Location       |
| -----: | ------: | ----------------- | -------------- |
| 100.0% |     466 | `JVM_MonitorWait` | `libjvm.dylib` |

##### `wait(long)` (`java.lang.Object`)

|      % | Samples | Callee        | Location           |
| -----: | ------: | ------------- | ------------------ |
| 100.0% |     466 | `wait0(long)` | `java.lang.Object` |

##### `wait()` (`java.lang.Object`)

|      % | Samples | Callee       | Location           |
| -----: | ------: | ------------ | ------------------ |
| 100.0% |     466 | `wait(long)` | `java.lang.Object` |

##### `await()` (`java.lang.ref.NativeReferenceQueue`)

|      % | Samples | Callee   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |     466 | `wait()` | `java.lang.Object` |

##### `remove0()` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee    | Location                             |
| -----: | ------: | --------- | ------------------------------------ |
| 100.0% |     466 | `await()` | `java.lang.ref.NativeReferenceQueue` |

##### `remove()` (`java.lang.ref.NativeReferenceQueue`)

|      % | Samples | Callee      | Location                       |
| -----: | ------: | ----------- | ------------------------------ |
| 100.0% |     466 | `remove0()` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`java.lang.ref.Finalizer$FinalizerThread`)

|      % | Samples | Callee     | Location                             |
| -----: | ------: | ---------- | ------------------------------------ |
| 100.0% |     466 | `remove()` | `java.lang.ref.NativeReferenceQueue` |

##### `waitForReferencePendingList()` (`java.lang.ref.Reference`)

|      % | Samples | Callee                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |     466 | `JVM_WaitForReferencePendingList` | `libjvm.dylib` |

##### `processPendingReferences()` (`java.lang.ref.Reference`)

|      % | Samples | Callee                          | Location                  |
| -----: | ------: | ------------------------------- | ------------------------- |
| 100.0% |     466 | `waitForReferencePendingList()` | `java.lang.ref.Reference` |

##### `run()` (`java.lang.ref.Reference$ReferenceHandler`)

|      % | Samples | Callee                       | Location                  |
| -----: | ------: | ---------------------------- | ------------------------- |
| 100.0% |     466 | `processPendingReferences()` | `java.lang.ref.Reference` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|      % | Samples | Callee        | Location       |
| -----: | ------: | ------------- | -------------- |
| 100.0% |     465 | `Unsafe_Park` | `libjvm.dylib` |

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

|      % | Samples | Callee                | Location                   |
| -----: | ------: | --------------------- | -------------------------- |
| 100.0% |     465 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

|      % | Samples | Callee                    | Location                                 |
| -----: | ------: | ------------------------- | ---------------------------------------- |
| 100.0% |     465 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `await(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee                  | Location                                                                |
| -----: | ------: | ----------------------- | ----------------------------------------------------------------------- |
| 100.0% |     465 | `await(long, TimeUnit)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `remove0(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee        | Location                       |
| -----: | ------: | ------------- | ------------------------------ |
| 100.0% |     465 | `await(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee          | Location                       |
| -----: | ------: | --------------- | ------------------------------ |
| 100.0% |     465 | `remove0(long)` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`jdk.internal.ref.CleanerImpl`)

|      % | Samples | Callee         | Location                       |
| -----: | ------: | -------------- | ------------------------------ |
| 100.0% |     465 | `remove(long)` | `java.lang.ref.ReferenceQueue` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % | Samples | Callee  | Location                       |
| -----: | ------: | ------- | ------------------------------ |
| 100.0% |     465 | `run()` | `jdk.internal.ref.CleanerImpl` |

##### `run()` (`java.lang.Thread`)

|      % | Samples | Callee                      | Location           |
| -----: | ------: | --------------------------- | ------------------ |
| 100.0% |     465 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `run()` (`jdk.internal.misc.InnocuousThread`)

|      % | Samples | Callee  | Location           |
| -----: | ------: | ------- | ------------------ |
| 100.0% |     465 | `run()` | `java.lang.Thread` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 57.1% |     145 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 18.5% |      47 | `Matcher::match`                  | `libjvm.dylib` |
| 11.4% |      29 | `PhaseOutput::Output`             | `libjvm.dylib` |
| 11.0% |      28 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  1.2% |       3 | `PhaseOutput::install_code`       | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 24.3% |      53 | `PhaseIdealLoop::optimize`      | `libjvm.dylib` |
| 22.9% |      50 | `Compile::optimize_loops`       | `libjvm.dylib` |
| 15.1% |      33 | `PhaseIterGVN::optimize`        | `libjvm.dylib` |
|  8.7% |      19 | `ConnectionGraph::do_analysis`  | `libjvm.dylib` |
|  6.4% |      14 | `Compile::inline_incrementally` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 24.1% |      35 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| 13.1% |      19 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| 11.0% |      16 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  8.3% |      12 | `PhaseLive::compute`                       | `libjvm.dylib` |
|  6.2% |       9 | `PhaseIFG::SquareUp`                       | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 90.8% |     118 | `Compilation::compile_java_method` | `libjvm.dylib` |
|  9.2% |      12 | `ciEnv::register_method`           | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     130 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 43.2% |      51 | `Compilation::build_hir`      | `libjvm.dylib` |
| 38.1% |      45 | `Compilation::emit_lir`       | `libjvm.dylib` |
| 18.6% |      22 | `Compilation::emit_code_body` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 82.5% |      85 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| 17.5% |      18 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 29.4% |      25 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| 29.4% |      25 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
|  9.4% |       8 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |
|  7.1% |       6 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
|  4.7% |       4 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Callee                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      85 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 97.2% |      69 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |
|  1.4% |       1 | `ProjNode::hash`              | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 21.7% |      15 | `StoreNode::Ideal`           | `libjvm.dylib` |
| 17.4% |      12 | `PhaseIterGVN::subsume_node` | `libjvm.dylib` |
| 10.1% |       7 | `NodeHash::hash_find_insert` | `libjvm.dylib` |
|  7.2% |       5 | `RegionNode::Ideal`          | `libjvm.dylib` |
|  5.8% |       4 | `IfNode::Ideal`              | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|     % | Samples | Callee                                       | Location       |
| ----: | ------: | -------------------------------------------- | -------------- |
| 76.5% |      39 | `IR::IR`                                     | `libjvm.dylib` |
| 13.7% |       7 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |
|  5.9% |       3 | `IR::eliminate_null_checks`                  | `libjvm.dylib` |
|  3.9% |       2 | `IR::compute_use_counts`                     | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      50 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 61.7% |      29 | `Matcher::xform`                              | `libjvm.dylib` |
| 19.1% |       9 | `Matcher::find_shared`                        | `libjvm.dylib` |
| 10.6% |       5 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |
|  2.1% |       1 | `ConINode::Opcode`                            | `libjvm.dylib` |
|  2.1% |       1 | `Arena::contains`                             | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 77.8% |      35 | `LinearScan::do_linear_scan`     | `libjvm.dylib` |
| 17.8% |       8 | `BlockList::iterate_forward`     | `libjvm.dylib` |
|  4.4% |       2 | `ControlFlowOptimizer::optimize` | `libjvm.dylib` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 35.5% |   5,024 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`) ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                       |
|  6.6% |     934 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                     |
|  3.3% |     466 | `__ulock_wait` (`libsystem_kernel.dylib`) ← `CallJavaMainInNewThread` (`libjli.dylib`) ← `ContinueInNewThread` ← `JLI_Launch` ← `main` (`java`) ← `apple_main` (`libjli.dylib`) ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                            |
|  3.3% |     466 | `mach_msg2_trap` (`libsystem_kernel.dylib`) ← `mach_msg_overwrite` ← `mach_msg` ← `__CFRunLoopServiceMachPort` (`CoreFoundation`) ← `__CFRunLoopRun` ← `CFRunLoopRunSpecific` ← `CreateExecutionEnvironment` (`libjli.dylib`) ← `JLI_Launch` ← `main` (`java`) ← `unknown`                                                                                                                                                                                                                                                                                                 |
|  3.3% |     466 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `WatcherThread::sleep` ← `WatcherThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                             |
|  3.3% |     466 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `os::signal_wait` (`libjvm.dylib`) ← `signal_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                               |
|  3.3% |     466 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ServiceThread::wait_for_task` ← `G1ServiceThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                             |
|  3.3% |     466 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformEvent::park` (`libjvm.dylib`) ← `ObjectMonitor::wait` ← `ObjectSynchronizer::wait` ← `JVM_MonitorWait` ← `wait0(long)` (`java.lang.Object`) ← `wait(long)` ← `wait()` ← `await()` (`java.lang.ref.NativeReferenceQueue`) ← `remove0()` (`java.lang.ref.ReferenceQueue`) ← `remove()` (`java.lang.ref.NativeReferenceQueue`) ← `run()` (`java.lang.ref.Finalizer$FinalizerThread`)                                                                                                                                  |
|  3.3% |     466 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `MonitorDeflationThread::monitor_deflation_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                |
|  3.3% |     466 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `JVM_WaitForReferencePendingList` ← `waitForReferencePendingList()` (`java.lang.ref.Reference`) ← `processPendingReferences()` ← `run()` (`java.lang.ref.Reference$ReferenceHandler`)                                                                                                                                                                                                                                                                          |
|  3.3% |     466 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Profiler::timerLoop` (`libasyncProfiler.dylib`) ← `JvmtiAgentThread::start_function_wrapper` (`libjvm.dylib`) ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                               |
|  3.3% |     465 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `NotificationThread::notification_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                         |
|  3.3% |     465 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `await(long)` (`java.lang.ref.ReferenceQueue`) ← `remove0(long)` ← `remove(long)` ← `run()` (`jdk.internal.ref.CleanerImpl`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` ← `run()` (`jdk.internal.misc.InnocuousThread`) |
|  3.3% |     465 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` ← `G1ConcurrentRefineThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                       |
|  3.3% |     464 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `ServiceThread::service_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                   |
|  3.2% |     456 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ConcurrentMarkThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                         |
|  3.2% |     456 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `VMThread::wait_for_operation` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                          |
|  0.2% |      27 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                   |
|  0.1% |      16 | `Arena::contains` (`libjvm.dylib`) ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                     |
|  0.1% |      16 | `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                      |
