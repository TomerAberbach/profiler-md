# Sampling profile

Collected 26,323 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Native            | 94.7% |  24,934 |
| Compiler          |  2.8% |     746 |
| Standard library  |  2.2% |     566 |
| Ours              |  0.1% |      33 |
| JIT               |  0.1% |      21 |
| Unknown           |  0.1% |      21 |
| Garbage collector | <0.1% |       2 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                                                                                                                                 | Location                        |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| 45.5% |  11,969 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`        |
| 40.1% |  10,561 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`        |
|  3.4% |     886 | `mach_msg2_trap`                                                                                                                                         | `libsystem_kernel.dylib`        |
|  3.4% |     886 | `__ulock_wait`                                                                                                                                           | `libsystem_kernel.dylib`        |
|  0.4% |     109 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`        |
|  0.2% |      51 | `cast(Object)`                                                                                                                                           | `java.lang.Class`               |
|  0.1% |      33 | `PhaseChaitin::Split`                                                                                                                                    | `libjvm.dylib`                  |
|  0.1% |      32 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`       |
|  0.1% |      31 | `java_lang_Throwable::fill_in_stack_trace`                                                                                                               | `libjvm.dylib`                  |
|  0.1% |      27 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`                 |
|  0.1% |      22 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`                  |
|  0.1% |      22 | `newInstance(Class, int)`                                                                                                                                | `java.lang.reflect.Array`       |
|  0.1% |      21 | `(anonymous)`                                                                                                                                            | `<unknown>`                     |
|  0.1% |      17 | `invokeBasic(Object[])`                                                                                                                                  | `java.lang.invoke.MethodHandle` |
|  0.1% |      15 | `Node::dominates`                                                                                                                                        | `libjvm.dylib`                  |
|  0.1% |      15 | `Node::set_req_X`                                                                                                                                        | `libjvm.dylib`                  |
|  0.1% |      15 | `vmSymbols::find_sid`                                                                                                                                    | `libjvm.dylib`                  |
|  0.1% |      14 | `PhaseChaitin::gather_lrg_masks`                                                                                                                         | `libjvm.dylib`                  |
|  0.1% |      14 | `IndexSetIterator::advance_and_next`                                                                                                                     | `libjvm.dylib`                  |
|  0.1% |      14 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`                  |

#### Categories

##### Native

|     % | Samples | Function                                                                                                                                                 | Location                   |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 45.5% |  11,969 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 40.1% |  10,561 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`   |
|  3.4% |     886 | `mach_msg2_trap`                                                                                                                                         | `libsystem_kernel.dylib`   |
|  3.4% |     886 | `__ulock_wait`                                                                                                                                           | `libsystem_kernel.dylib`   |
|  0.4% |     109 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
|  0.1% |      32 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
|  0.1% |      31 | `java_lang_Throwable::fill_in_stack_trace`                                                                                                               | `libjvm.dylib`             |
|  0.1% |      27 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
|  0.1% |      22 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`             |
|  0.1% |      15 | `vmSymbols::find_sid`                                                                                                                                    | `libjvm.dylib`             |
|  0.1% |      14 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| <0.1% |      13 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
| <0.1% |      11 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                   | `libjvm.dylib`             |
| <0.1% |      10 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                           | `libjvm.dylib`             |
| <0.1% |      10 | `frame::sender_for_compiled_frame`                                                                                                                       | `libjvm.dylib`             |
| <0.1% |       8 | `nmethod::is_unloading`                                                                                                                                  | `libjvm.dylib`             |
| <0.1% |       7 | `bsearch`                                                                                                                                                | `libsystem_c.dylib`        |
| <0.1% |       7 | `posix_madvise`                                                                                                                                          | `libsystem_kernel.dylib`   |
| <0.1% |       6 | `SignatureStream::next`                                                                                                                                  | `libjvm.dylib`             |
| <0.1% |       6 | `_platform_bzero`                                                                                                                                        | `libsystem_platform.dylib` |

##### Compiler

|     % | Samples | Function                                 | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
|  0.1% |      33 | `PhaseChaitin::Split`                    | `libjvm.dylib` |
|  0.1% |      15 | `Node::dominates`                        | `libjvm.dylib` |
|  0.1% |      15 | `Node::set_req_X`                        | `libjvm.dylib` |
|  0.1% |      14 | `PhaseChaitin::gather_lrg_masks`         | `libjvm.dylib` |
|  0.1% |      14 | `IndexSetIterator::advance_and_next`     | `libjvm.dylib` |
|  0.1% |      14 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |
| <0.1% |      11 | `ciObjectFactory::get_metadata`          | `libjvm.dylib` |
| <0.1% |      10 | `PhaseOutput::BuildOopMaps`              | `libjvm.dylib` |
| <0.1% |      10 | `PhaseChaitin::elide_copy`               | `libjvm.dylib` |
| <0.1% |       9 | `PhaseIterGVN::subsume_node`             | `libjvm.dylib` |
| <0.1% |       9 | `PhaseChaitin::build_ifg_physical`       | `libjvm.dylib` |
| <0.1% |       9 | `PhaseIdealLoop::build_loop_late`        | `libjvm.dylib` |
| <0.1% |       9 | `PhaseLive::compute`                     | `libjvm.dylib` |
| <0.1% |       9 | `PhaseIdealLoop::is_dominator`           | `libjvm.dylib` |
| <0.1% |       9 | `Type::cmp`                              | `libjvm.dylib` |
| <0.1% |       8 | `Node_Backward_Iterator::next`           | `libjvm.dylib` |
| <0.1% |       8 | `ConnectionGraph::compute_escape`        | `libjvm.dylib` |
| <0.1% |       8 | `IntervalWalker::walk_to`                | `libjvm.dylib` |
| <0.1% |       7 | `PhaseIdealLoop::build_loop_early`       | `libjvm.dylib` |
| <0.1% |       7 | `PhiNode::Ideal`                         | `libjvm.dylib` |

##### Standard library

|     % | Samples | Function                                                                                      | Location                                                |
| ----: | ------: | --------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|  0.2% |      51 | `cast(Object)`                                                                                | `java.lang.Class`                                       |
|  0.1% |      22 | `newInstance(Class, int)`                                                                     | `java.lang.reflect.Array`                               |
|  0.1% |      17 | `invokeBasic(Object[])`                                                                       | `java.lang.invoke.MethodHandle`                         |
| <0.1% |      13 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800`    |
| <0.1% |      11 | `collector(Object, Object)`                                                                   | `java.lang.invoke.LambdaForm$MH.0x0000007001031800`     |
| <0.1% |      10 | `equals(Object)`                                                                              | `java.lang.String`                                      |
| <0.1% |       9 | `getNode(Object)`                                                                             | `java.util.HashMap`                                     |
| <0.1% |       8 | `invokeVirtual(Object, Object)`                                                               | `java.lang.invoke.DirectMethodHandle$Holder`            |
| <0.1% |       7 | `getAndPut(String, MemoizeCache$ValueProvider)`                                               | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`     |
| <0.1% |       6 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000700102ac00`     |
| <0.1% |       6 | `getMethods(Class, String)`                                                                   | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |
| <0.1% |       6 | `equals(Object, Object)`                                                                      | `java.util.Objects`                                     |
| <0.1% |       5 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`         |
| <0.1% |       5 | `<init>(MethodType, LambdaForm)`                                                              | `java.lang.invoke.MethodHandle`                         |
| <0.1% |       5 | `join(PredictionContext, PredictionContext, PredictionContextCache)`                          | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`   |
| <0.1% |       5 | `checkCustomized(MethodHandle)`                                                               | `java.lang.invoke.Invokers`                             |
| <0.1% |       5 | `collector(Object, Object, Object)`                                                           | `java.lang.invoke.LambdaForm$MH.0x00000070010a8c00`     |
| <0.1% |       5 | `get()`                                                                                       | `java.lang.ref.SoftReference`                           |
| <0.1% |       4 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x00000070010ac800`     |
| <0.1% |       4 | `guard(Object, Object)`                                                                       | `java.lang.invoke.LambdaForm$MH.0x0000007001098400`     |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `cast(Object)` (`java.lang.Class`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |      51 | `java.lang.Class:4068` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|      % | Samples | Location                     |
| -----: | ------: | ---------------------------- |
| 100.0% |      22 | `java.lang.reflect.Array:78` |

##### `equals(Object)` (`java.lang.String`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 40.0% |       4 | `java.lang.String:1852` |
| 30.0% |       3 | `java.lang.String:1847` |
| 30.0% |       3 | `java.lang.String:1850` |

##### `getNode(Object)` (`java.util.HashMap`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 22.2% |       2 | `java.util.HashMap:576` |
| 22.2% |       2 | `java.util.HashMap:582` |
| 22.2% |       2 | `java.util.HashMap:580` |
| 11.1% |       1 | `java.util.HashMap:587` |
| 11.1% |       1 | `java.util.HashMap:585` |

##### `getAndPut(String, MemoizeCache$ValueProvider)` (`org.codehaus.groovy.vmplugin.v8.CacheableCallSite`)

|     % | Samples | Location                                               |
| ----: | ------: | ------------------------------------------------------ |
| 42.9% |       3 | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite:62` |
| 28.6% |       2 | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite:63` |
| 14.3% |       1 | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite:74` |
| 14.3% |       1 | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite:78` |

##### `getMethods(Class, String)` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

|     % | Samples | Location                                                    |
| ----: | ------: | ----------------------------------------------------------- |
| 66.7% |       4 | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex:202` |
| 33.3% |       2 | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex:201` |

##### `equals(Object, Object)` (`java.util.Objects`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       6 | `java.util.Objects:64` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|     % | Samples | Location                                            |
| ----: | ------: | --------------------------------------------------- |
| 40.0% |       2 | `org.codehaus.groovy.vmplugin.v8.IndyInterface:298` |
| 40.0% |       2 | `org.codehaus.groovy.vmplugin.v8.IndyInterface:321` |
| 20.0% |       1 | `org.codehaus.groovy.vmplugin.v8.IndyInterface:314` |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Location                            |
| ----: | ------: | ----------------------------------- |
| 60.0% |       3 | `java.lang.invoke.MethodHandle:479` |
| 40.0% |       2 | `java.lang.invoke.MethodHandle:480` |

##### `join(PredictionContext, PredictionContext, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContext`)

|     % | Samples | Location                                                  |
| ----: | ------: | --------------------------------------------------------- |
| 20.0% |       1 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext:174` |
| 20.0% |       1 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext:166` |
| 20.0% |       1 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext:192` |
| 20.0% |       1 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext:167` |
| 20.0% |       1 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext:165` |

##### `checkCustomized(MethodHandle)` (`java.lang.invoke.Invokers`)

|     % | Samples | Location                        |
| ----: | ------: | ------------------------------- |
| 60.0% |       3 | `java.lang.invoke.Invokers:627` |
| 20.0% |       1 | `java.lang.invoke.Invokers:629` |
| 20.0% |       1 | `java.lang.invoke.Invokers:623` |

##### `get()` (`java.lang.ref.SoftReference`)

|     % | Samples | Location                          |
| ----: | ------: | --------------------------------- |
| 40.0% |       2 | `java.lang.ref.SoftReference:116` |
| 40.0% |       2 | `java.lang.ref.SoftReference:113` |
| 20.0% |       1 | `java.lang.ref.SoftReference:115` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location                 |
| ----: | ------: | ----------------------- | ------------------------ |
| 77.8% |   9,312 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  7.4% |     886 | `PlatformEvent::park`   | `libjvm.dylib`           |
|  7.4% |     886 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |
|  7.4% |     885 | `Parker::park`          | `libjvm.dylib`           |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 90.9% |   9,600 | `WorkerThread::run`              | `libjvm.dylib` |
|  8.4% |     886 | `os::signal_wait`                | `libjvm.dylib` |
|  0.4% |      40 | `WorkerThreads::run_task`        | `libjvm.dylib` |
|  0.3% |      35 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

|      % | Samples | Caller               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |     886 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `__ulock_wait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |     886 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |     109 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `cast(Object)` (`java.lang.Class`)

|      % | Samples | Caller                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |      51 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      33 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 62.5% |      20 | `JVM_NewArray`                  | `libjvm.dylib` |
|  9.4% |       3 | `JVM_FillInStackTrace`          | `libjvm.dylib` |
|  3.1% |       1 | `JVM_GetClassInterfaces`        | `libjvm.dylib` |
|  3.1% |       1 | `InterpreterRuntime::anewarray` | `libjvm.dylib` |
|  3.1% |       1 | `JVM_Clone`                     | `libjvm.dylib` |

##### `java_lang_Throwable::fill_in_stack_trace` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |      31 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|     % | Samples | Caller                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 11.1% |       3 | `ciBytecodeStream::get_method`         | `libjvm.dylib` |
|  7.4% |       2 | `ValueStack::ValueStack`               | `libjvm.dylib` |
|  7.4% |       2 | `ciObjectFactory::create_new_metadata` | `libjvm.dylib` |
|  3.7% |       1 | `MulNode::Value`                       | `libjvm.dylib` |
|  3.7% |       1 | `PhaseLive::add_liveout`               | `libjvm.dylib` |

##### `Arena::contains` (`libjvm.dylib`)

|     % | Samples | Caller           | Location       |
| ----: | ------: | ---------------- | -------------- |
| 95.5% |      21 | `Matcher::xform` | `libjvm.dylib` |
|  4.5% |       1 | `Matcher::match` | `libjvm.dylib` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|      % | Samples | Caller                              | Location                                             |
| -----: | ------: | ----------------------------------- | ---------------------------------------------------- |
| 100.0% |      22 | `invokeStatic(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000700102b400` |

##### `invokeBasic(Object[])` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Caller                                                                 | Location                                            |
| ----: | ------: | ---------------------------------------------------------------------- | --------------------------------------------------- |
| 11.8% |       2 | `invoke(Object, Object)`                                               | `java.lang.invoke.LambdaForm$MH.0x00000070010ad800` |
| 11.8% |       2 | `invoke(Object, int)`                                                  | `java.lang.invoke.LambdaForm$MH.0x0000007001031400` |
|  5.9% |       1 | `invoke(Object, Object)`                                               | `java.lang.invoke.LambdaForm$MH.0x000000700102ac00` |
|  5.9% |       1 | `invoke(Object, Object)`                                               | `java.lang.invoke.LambdaForm$MH.0x000000700140ac00` |
|  5.9% |       1 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |

##### `Node::dominates` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |      15 | `MemNode::all_controls_dominate` | `libjvm.dylib` |

##### `Node::set_req_X` (`libjvm.dylib`)

|     % | Samples | Caller                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 80.0% |      12 | `Node::replace_edge`          | `libjvm.dylib` |
| 13.3% |       2 | `MergeMemNode::Ideal`         | `libjvm.dylib` |
|  6.7% |       1 | `PhaseIdealLoop::do_split_if` | `libjvm.dylib` |

##### `vmSymbols::find_sid` (`libjvm.dylib`)

|     % | Samples | Caller                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 80.0% |      12 | `ciObjectFactory::get_symbol`                  | `libjvm.dylib` |
| 20.0% |       3 | `MethodHandles::signature_polymorphic_name_id` | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      14 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                                                             | Location       |
| ----: | ------: | ------------------------------------------------------------------ | -------------- |
| 35.7% |       5 | `PhaseChaitin::build_ifg_physical`                                 | `libjvm.dylib` |
| 21.4% |       3 | `PhaseLive::add_liveout`                                           | `libjvm.dylib` |
| 14.3% |       2 | `PhaseIFG::effective_degree`                                       | `libjvm.dylib` |
|  7.1% |       1 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `libjvm.dylib` |
|  7.1% |       1 | `PhaseChaitin::compute_initial_block_pressure`                     | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 85.7% |      12 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
| 14.3% |       2 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      14 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 15.4% |       2 | `PhaseIdealLoop::build_and_optimize`          | `libjvm.dylib` |
|  7.7% |       1 | `PhaseIdealLoop::compute_early_ctrl`          | `libjvm.dylib` |
|  7.7% |       1 | `MethodLiveness::BasicBlock::get_liveness_at` | `libjvm.dylib` |
|  7.7% |       1 | `GraphKit::transfer_exceptions_into_jvms`     | `libjvm.dylib` |
|  7.7% |       1 | `BlockBegin::try_merge`                       | `libjvm.dylib` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001088800`)

|     % | Samples | Caller                                   | Location                                            |
| ----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 30.8% |       4 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001092000` |
| 23.1% |       3 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010a9400` |
| 15.4% |       2 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010d5c00` |
| 15.4% |       2 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001099800` |
|  7.7% |       1 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010c8000` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                                                   | Location       |
| -----: | ------: | ------------------------------------------------------------------------ | -------------- |
| 100.0% |      11 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 27.3% |       3 | `ciBytecodeStream::get_method`   | `libjvm.dylib` |
| 18.2% |       2 | `ciEnv::get_klass_by_index_impl` | `libjvm.dylib` |
| 18.2% |       2 | `ciObjectFactory::get`           | `libjvm.dylib` |
|  9.1% |       1 | `ciEnv::get_klass_by_name_impl`  | `libjvm.dylib` |
|  9.1% |       1 | `ciMethod::ensure_method_data`   | `libjvm.dylib` |

##### `collector(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001031800`)

|     % | Samples | Caller                           | Location                                            |
| ----: | ------: | -------------------------------- | --------------------------------------------------- |
| 54.5% |       6 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001092000` |
| 27.3% |       3 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00` |
| 18.2% |       2 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010ab400` |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                         | Location       |
| -----: | ------: | ---------------------------------------------- | -------------- |
| 100.0% |      10 | `void G1CMTask::process_grey_task_entry<true>` | `libjvm.dylib` |

##### `frame::sender_for_compiled_frame` (`libjvm.dylib`)

|     % | Samples | Caller                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 70.0% |       7 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |
| 10.0% |       1 | `Runtime1::counter_overflow`               | `libjvm.dylib` |
| 10.0% |       1 | `vframeArray::unpack_to_stack`             | `libjvm.dylib` |
| 10.0% |       1 | `vframeStreamCommon::next`                 | `libjvm.dylib` |

##### `PhaseOutput::BuildOopMaps` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |      10 | `PhaseOutput::Output` | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |      10 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `equals(Object)` (`java.lang.String`)

|     % | Samples | Caller                                                    | Location                                 |
| ----: | ------: | --------------------------------------------------------- | ---------------------------------------- |
| 40.0% |       4 | `matches(Method, String, Class[])`                        | `java.lang.PublicMethods$Key`            |
| 20.0% |       2 | `equals(Object, Object)`                                  | `java.util.Objects`                      |
| 20.0% |       2 | `computeIfAbsent(Object, Function)`                       | `java.util.concurrent.ConcurrentHashMap` |
| 10.0% |       1 | `indexOfRange(Object, int, int)`                          | `java.util.ArrayList`                    |
| 10.0% |       1 | `getMetaMethod(Class, Object, String, boolean, Object[])` | `groovy.lang.MetaClassImpl`              |

##### `PhaseIterGVN::subsume_node` (`libjvm.dylib`)

|     % | Samples | Caller                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 88.9% |       8 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |
| 11.1% |       1 | `RegionNode::Ideal`           | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       9 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       9 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       9 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::is_dominator` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 88.9% |       8 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep`      | `libjvm.dylib` |
| 11.1% |       1 | `PhaseIdealLoop::loop_predication_follow_branches` | `libjvm.dylib` |

##### `Type::cmp` (`libjvm.dylib`)

|     % | Samples | Caller                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 77.8% |       7 | `Dict::Insert`                           | `libjvm.dylib` |
| 11.1% |       1 | `ConstraintCastNode::higher_equal_types` | `libjvm.dylib` |
| 11.1% |       1 | `Type::hashcons`                         | `libjvm.dylib` |

##### `getNode(Object)` (`java.util.HashMap`)

|     % | Samples | Caller        | Location                  |
| ----: | ------: | ------------- | ------------------------- |
| 88.9% |       8 | `get(Object)` | `java.util.LinkedHashMap` |
| 11.1% |       1 | `get(Object)` | `java.util.HashMap`       |

##### `nmethod::is_unloading` (`libjvm.dylib`)

|     % | Samples | Caller                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 87.5% |       7 | `DependencyContext::add_dependent_nmethod` | `libjvm.dylib` |
| 12.5% |       1 | `nmethodBucket::next_not_unloading`        | `libjvm.dylib` |

##### `Node_Backward_Iterator::next` (`libjvm.dylib`)

|     % | Samples | Caller                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 62.5% |       5 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |
| 37.5% |       3 | `PhaseCFG::schedule_late`      | `libjvm.dylib` |

##### `ConnectionGraph::compute_escape` (`libjvm.dylib`)

|      % | Samples | Caller                         | Location       |
| -----: | ------: | ------------------------------ | -------------- |
| 100.0% |       8 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |       8 | `IntervalWalker::walk_to` | `libjvm.dylib` |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Caller                           | Location                                            |
| ----: | ------: | -------------------------------- | --------------------------------------------------- |
| 87.5% |       7 | `invoke(Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001089400` |
| 12.5% |       1 | `guardWithCatch(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001096800` |

##### `bsearch` (`libsystem_c.dylib`)

|     % | Samples | Caller                                           | Location       |
| ----: | ------: | ------------------------------------------------ | -------------- |
| 85.7% |       6 | `encoding_for_logical_immediate`                 | `libjvm.dylib` |
| 14.3% |       1 | `Assembler::operand_valid_for_logical_immediate` | `libjvm.dylib` |

##### `posix_madvise` (`libsystem_kernel.dylib`)

|      % | Samples | Caller        | Location                 |
| -----: | ------: | ------------- | ------------------------ |
| 100.0% |       7 | `free_medium` | `libsystem_malloc.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       7 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhiNode::Ideal` (`libjvm.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 71.4% |       5 | `PhaseIterGVN::transform_old`    | `libjvm.dylib` |
| 14.3% |       1 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |
| 14.3% |       1 | `Parse::do_exits`                | `libjvm.dylib` |

##### `getAndPut(String, MemoizeCache$ValueProvider)` (`org.codehaus.groovy.vmplugin.v8.CacheableCallSite`)

|      % | Samples | Caller                                                                          | Location                                        |
| -----: | ------: | ------------------------------------------------------------------------------- | ----------------------------------------------- |
| 100.0% |       7 | `lambda$fromCache$2(IndyInterface$FallbackSupplier, CacheableCallSite, Object)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `SignatureStream::next` (`libjvm.dylib`)

|     % | Samples | Caller                                                    | Location       |
| ----: | ------: | --------------------------------------------------------- | -------------- |
| 50.0% |       3 | `SignatureStream::SignatureStream`                        | `libjvm.dylib` |
| 33.3% |       2 | `ciSignature::ciSignature`                                | `libjvm.dylib` |
| 16.7% |       1 | `void SignatureIterator::do_parameters_on<ArgumentCount>` | `libjvm.dylib` |

##### `_platform_bzero` (`libsystem_platform.dylib`)

|     % | Samples | Caller                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 33.3% |       2 | `PhaseChaitin::Register_Allocate`    | `libjvm.dylib` |
| 16.7% |       1 | `GraphBuilder::state_at_entry`       | `libjvm.dylib` |
| 16.7% |       1 | `LinearScan::do_linear_scan`         | `libjvm.dylib` |
| 16.7% |       1 | `ciMethod::get_method_blocks`        | `libjvm.dylib` |
| 16.7% |       1 | `GraphKit::combine_exception_states` | `libjvm.dylib` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700102ac00`)

|     % | Samples | Caller                   | Location                                            |
| ----: | ------: | ------------------------ | --------------------------------------------------- |
| 66.7% |       4 | `invoke(Object, int)`    | `java.lang.invoke.LambdaForm$MH.0x0000007001031400` |
| 16.7% |       1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010d4c00` |
| 16.7% |       1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010ad800` |

##### `getMethods(Class, String)` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

|     % | Samples | Caller                                                   | Location                    |
| ----: | ------: | -------------------------------------------------------- | --------------------------- |
| 83.3% |       5 | `getMethodWithCaching(Class, String, Object[], boolean)` | `groovy.lang.MetaClassImpl` |
| 16.7% |       1 | `getMethods(Class, String, boolean)`                     | `groovy.lang.MetaClassImpl` |

##### `equals(Object, Object)` (`java.util.Objects`)

|     % | Samples | Caller                       | Location                               |
| ----: | ------: | ---------------------------- | -------------------------------------- |
| 83.3% |       5 | `equals(Object)`             | `jdk.internal.util.StrongReferenceKey` |
| 16.7% |       1 | `equals(Object[], Object[])` | `java.util.Arrays`                     |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|      % | Samples | Caller                                                                                      | Location                                             |
| -----: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |       5 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Caller                                                | Location                                  |
| ----: | ------: | ----------------------------------------------------- | ----------------------------------------- |
| 60.0% |       3 | `<init>(MethodType, LambdaForm)`                      | `java.lang.invoke.BoundMethodHandle`      |
| 20.0% |       1 | `<init>(MethodType, LambdaForm, MemberName, boolean)` | `java.lang.invoke.DirectMethodHandle`     |
| 20.0% |       1 | `<init>(MethodType, LambdaForm)`                      | `java.lang.invoke.DelegatingMethodHandle` |

##### `join(PredictionContext, PredictionContext, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContext`)

|      % | Samples | Caller                                   | Location                                         |
| -----: | ------: | ---------------------------------------- | ------------------------------------------------ |
| 100.0% |       5 | `add(ATNConfig, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet` |

##### `checkCustomized(MethodHandle)` (`java.lang.invoke.Invokers`)

|     % | Samples | Caller                                   | Location                                            |
| ----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 60.0% |       3 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001098800` |
| 40.0% |       2 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |

##### `collector(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010a8c00`)

|     % | Samples | Caller                           | Location                                            |
| ----: | ------: | -------------------------------- | --------------------------------------------------- |
| 60.0% |       3 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010a9400` |
| 40.0% |       2 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010acc00` |

##### `get()` (`java.lang.ref.SoftReference`)

|     % | Samples | Caller                                          | Location                                            |
| ----: | ------: | ----------------------------------------------- | --------------------------------------------------- |
| 40.0% |       2 | `getAndPut(String, MemoizeCache$ValueProvider)` | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite` |
| 40.0% |       2 | `get()`                                         | `org.codehaus.groovy.util.ManagedReference`         |
| 20.0% |       1 | `getInCache(LambdaFormEditor$TransformKey)`     | `java.lang.invoke.LambdaFormEditor`                 |

##### `guard(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010ac800`)

|      % | Samples | Caller                             | Location                                         |
| -----: | ------: | ---------------------------------- | ------------------------------------------------ |
| 100.0% |       4 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `guard(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001098400`)

|     % | Samples | Caller                     | Location                                            |
| ----: | ------: | -------------------------- | --------------------------------------------------- |
| 75.0% |       3 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| 25.0% |       1 | `reinvoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001098000` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                   | Location                  |
| ----: | ------: | ------------------------------------------ | ------------------------- |
| 83.1% |  21,874 | `_pthread_start`                           | `libsystem_pthread.dylib` |
| 83.1% |  21,874 | `thread_start`                             | `libsystem_pthread.dylib` |
| 79.7% |  20,987 | `Thread::call_run`                         | `libjvm.dylib`            |
| 79.7% |  20,987 | `thread_native_entry`                      | `libjvm.dylib`            |
| 45.5% |  11,969 | `__psynch_cvwait`                          | `libsystem_kernel.dylib`  |
| 40.1% |  10,561 | `semaphore_wait_trap`                      | `libsystem_kernel.dylib`  |
| 36.7% |   9,664 | `WorkerThread::run`                        | `libjvm.dylib`            |
| 35.4% |   9,321 | `PlatformMonitor::wait`                    | `libjvm.dylib`            |
| 26.7% |   7,030 | `Monitor::wait_without_safepoint_check`    | `libjvm.dylib`            |
| 26.2% |   6,892 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
| 10.1% |   2,658 | `ConcurrentGCThread::run`                  | `libjvm.dylib`            |
|  9.4% |   2,463 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
|  8.7% |   2,292 | `Monitor::wait`                            | `libjvm.dylib`            |
|  6.7% |   1,772 | `JLI_Launch`                               | `libjli.dylib`            |
|  6.7% |   1,772 | `main`                                     | `java`                    |
|  5.3% |   1,386 | `CompileQueue::get`                        | `libjvm.dylib`            |
|  4.1% |   1,072 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  3.4% |     892 | `unknown`                                  | `<unknown>`               |
|  3.4% |     886 | `mach_msg2_trap`                           | `libsystem_kernel.dylib`  |
|  3.4% |     886 | `mach_msg_overwrite`                       | `libsystem_kernel.dylib`  |

#### Categories

##### Native

|     % | Samples | Function                                | Location                  |
| ----: | ------: | --------------------------------------- | ------------------------- |
| 83.1% |  21,874 | `_pthread_start`                        | `libsystem_pthread.dylib` |
| 83.1% |  21,874 | `thread_start`                          | `libsystem_pthread.dylib` |
| 79.7% |  20,987 | `Thread::call_run`                      | `libjvm.dylib`            |
| 79.7% |  20,987 | `thread_native_entry`                   | `libjvm.dylib`            |
| 45.5% |  11,969 | `__psynch_cvwait`                       | `libsystem_kernel.dylib`  |
| 40.1% |  10,561 | `semaphore_wait_trap`                   | `libsystem_kernel.dylib`  |
| 36.7% |   9,664 | `WorkerThread::run`                     | `libjvm.dylib`            |
| 35.4% |   9,321 | `PlatformMonitor::wait`                 | `libjvm.dylib`            |
| 26.7% |   7,030 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib`            |
| 26.2% |   6,892 | `JavaThread::thread_main_inner`         | `libjvm.dylib`            |
| 10.1% |   2,658 | `ConcurrentGCThread::run`               | `libjvm.dylib`            |
|  8.7% |   2,292 | `Monitor::wait`                         | `libjvm.dylib`            |
|  6.7% |   1,772 | `JLI_Launch`                            | `libjli.dylib`            |
|  6.7% |   1,772 | `main`                                  | `java`                    |
|  3.4% |     892 | `unknown`                               | `<unknown>`               |
|  3.4% |     886 | `mach_msg2_trap`                        | `libsystem_kernel.dylib`  |
|  3.4% |     886 | `mach_msg_overwrite`                    | `libsystem_kernel.dylib`  |
|  3.4% |     886 | `mach_msg`                              | `libsystem_kernel.dylib`  |
|  3.4% |     886 | `__CFRunLoopServiceMachPort`            | `CoreFoundation`          |
|  3.4% |     886 | `__CFRunLoopRun`                        | `CoreFoundation`          |

##### Compiler

|    % | Samples | Function                                   | Location       |
| ---: | ------: | ------------------------------------------ | -------------- |
| 9.4% |   2,463 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
| 5.3% |   1,386 | `CompileQueue::get`                        | `libjvm.dylib` |
| 4.1% |   1,072 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
| 3.2% |     842 | `C2Compiler::compile_method`               | `libjvm.dylib` |
| 3.2% |     839 | `Compile::Compile`                         | `libjvm.dylib` |
| 1.5% |     388 | `Compile::Code_Gen`                        | `libjvm.dylib` |
| 1.2% |     321 | `Compile::Optimize`                        | `libjvm.dylib` |
| 0.8% |     213 | `Compilation::compile_method`              | `libjvm.dylib` |
| 0.8% |     213 | `Compilation::Compilation`                 | `libjvm.dylib` |
| 0.8% |     204 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
| 0.7% |     187 | `Compilation::compile_java_method`         | `libjvm.dylib` |
| 0.5% |     125 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
| 0.5% |     119 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
| 0.4% |     115 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |
| 0.4% |     106 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
| 0.4% |     106 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
| 0.3% |      81 | `Compilation::build_hir`                   | `libjvm.dylib` |
| 0.3% |      76 | `Compilation::emit_lir`                    | `libjvm.dylib` |
| 0.3% |      68 | `Matcher::match`                           | `libjvm.dylib` |
| 0.3% |      66 | `GraphBuilder::GraphBuilder`               | `libjvm.dylib` |

##### Standard library

|    % | Samples | Function                        | Location                                                                |
| ---: | ------: | ------------------------------- | ----------------------------------------------------------------------- |
| 3.4% |     886 | `waitForReferencePendingList()` | `java.lang.ref.Reference`                                               |
| 3.4% |     886 | `processPendingReferences()`    | `java.lang.ref.Reference`                                               |
| 3.4% |     886 | `run()`                         | `java.lang.ref.Reference$ReferenceHandler`                              |
| 3.4% |     886 | `wait0(long)`                   | `java.lang.Object`                                                      |
| 3.4% |     886 | `wait(long)`                    | `java.lang.Object`                                                      |
| 3.4% |     886 | `wait()`                        | `java.lang.Object`                                                      |
| 3.4% |     886 | `await()`                       | `java.lang.ref.NativeReferenceQueue`                                    |
| 3.4% |     886 | `remove0()`                     | `java.lang.ref.ReferenceQueue`                                          |
| 3.4% |     886 | `remove()`                      | `java.lang.ref.NativeReferenceQueue`                                    |
| 3.4% |     886 | `run()`                         | `java.lang.ref.Finalizer$FinalizerThread`                               |
| 3.4% |     885 | `park(boolean, long)`           | `jdk.internal.misc.Unsafe`                                              |
| 3.4% |     885 | `parkNanos(Object, long)`       | `java.util.concurrent.locks.LockSupport`                                |
| 3.4% |     885 | `await(long, TimeUnit)`         | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
| 3.4% |     885 | `await(long)`                   | `java.lang.ref.ReferenceQueue`                                          |
| 3.4% |     885 | `remove0(long)`                 | `java.lang.ref.ReferenceQueue`                                          |
| 3.4% |     885 | `remove(long)`                  | `java.lang.ref.ReferenceQueue`                                          |
| 3.4% |     885 | `run()`                         | `jdk.internal.ref.CleanerImpl`                                          |
| 3.4% |     885 | `runWith(Object, Runnable)`     | `java.lang.Thread`                                                      |
| 3.4% |     885 | `run()`                         | `java.lang.Thread`                                                      |
| 3.4% |     885 | `run()`                         | `jdk.internal.misc.InnocuousThread`                                     |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 95.9% |  20,987 | `thread_native_entry` | `libjvm.dylib` |
|  4.1% |     886 | `apple_main`          | `libjli.dylib` |
| <0.1% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |  21,874 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 46.0% |   9,664 | `WorkerThread::run`             | `libjvm.dylib` |
| 32.8% |   6,892 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| 12.7% |   2,658 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  4.2% |     886 | `VMThread::run`                 | `libjvm.dylib` |
|  4.2% |     886 | `WatcherThread::run`            | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |  20,987 | `Thread::call_run` | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 99.3% |   9,600 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
|  0.3% |      26 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib`           |
|  0.2% |      16 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
|  0.1% |      14 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib`           |
| <0.1% |       3 | `G1ParallelCleaningTask::work`    | `libjvm.dylib`           |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Callee               | Location                  |
| ----: | ------: | -------------------- | ------------------------- |
| 99.9% |   9,312 | `__psynch_cvwait`    | `libsystem_kernel.dylib`  |
|  0.1% |       9 | `_pthread_cond_wait` | `libsystem_pthread.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |   7,030 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                                   | Location       |
| ----: | ------: | -------------------------------------------------------- | -------------- |
| 35.7% |   2,463 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib` |
| 12.9% |     886 | `signal_thread_entry`                                    | `libjvm.dylib` |
| 12.9% |     886 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |
| 12.9% |     886 | `JvmtiAgentThread::start_function_wrapper`               | `libjvm.dylib` |
| 12.8% |     885 | `NotificationThread::notification_thread_entry`          | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 33.3% |     886 | `G1ServiceThread::run_service`          | `libjvm.dylib` |
| 33.3% |     886 | `G1ConcurrentMarkThread::run_service`   | `libjvm.dylib` |
| 33.3% |     886 | `G1ConcurrentRefineThread::run_service` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 56.3% |   1,386 | `CompileQueue::get`                            | `libjvm.dylib` |
| 43.5% |   1,072 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  0.1% |       3 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |
| <0.1% |       1 | `Mutex::lock`                                  | `libjvm.dylib` |
| <0.1% |       1 | `AbstractCompiler::on_empty_queue`             | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|      % | Samples | Callee                                                                        | Location       |
| -----: | ------: | ----------------------------------------------------------------------------- | -------------- |
| 100.0% |   2,291 | `PlatformMonitor::wait`                                                       | `libjvm.dylib` |
|  <0.1% |       1 | `ThreadBlockInVMPreprocess<InFlightMutexRelease>::~ThreadBlockInVMPreprocess` | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 50.0% |     886 | `CreateExecutionEnvironment` | `libjli.dylib` |
| 50.0% |     886 | `ContinueInNewThread`        | `libjli.dylib` |

##### `main` (`java`)

|      % | Samples | Callee       | Location       |
| -----: | ------: | ------------ | -------------- |
| 100.0% |   1,772 | `JLI_Launch` | `libjli.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 99.9% |   1,384 | `Monitor::wait`                  | `libjvm.dylib` |
|  0.1% |       1 | `CompilationPolicy::select_task` | `libjvm.dylib` |
|  0.1% |       1 | `Mutex::lock`                    | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 78.5% |     842 | `C2Compiler::compile_method`    | `libjvm.dylib` |
| 19.9% |     213 | `Compiler::compile_method`      | `libjvm.dylib` |
|  0.9% |      10 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |
|  0.4% |       4 | `ciEnv::ciEnv`                  | `libjvm.dylib` |
|  0.1% |       1 | `ciEnv::cache_jvmti_state`      | `libjvm.dylib` |

##### `unknown` (`<unknown>`)

|     % | Samples | Callee                                                                                        | Location                                            |
| ----: | ------: | --------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| 99.3% |     886 | `main`                                                                                        | `java`                                              |
|  0.2% |       2 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`     |
|  0.1% |       1 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000700161a800` |
|  0.1% |       1 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x00000070016bb000` |
|  0.1% |       1 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000700174c400` |

##### `mach_msg_overwrite` (`libsystem_kernel.dylib`)

|      % | Samples | Callee           | Location                 |
| -----: | ------: | ---------------- | ------------------------ |
| 100.0% |     886 | `mach_msg2_trap` | `libsystem_kernel.dylib` |

##### `mach_msg` (`libsystem_kernel.dylib`)

|      % | Samples | Callee               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |     886 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `__CFRunLoopServiceMachPort` (`CoreFoundation`)

|      % | Samples | Callee     | Location                 |
| -----: | ------: | ---------- | ------------------------ |
| 100.0% |     886 | `mach_msg` | `libsystem_kernel.dylib` |

##### `__CFRunLoopRun` (`CoreFoundation`)

|      % | Samples | Callee                       | Location         |
| -----: | ------: | ---------------------------- | ---------------- |
| 100.0% |     886 | `__CFRunLoopServiceMachPort` | `CoreFoundation` |

##### `waitForReferencePendingList()` (`java.lang.ref.Reference`)

|      % | Samples | Callee                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |     886 | `JVM_WaitForReferencePendingList` | `libjvm.dylib` |

##### `processPendingReferences()` (`java.lang.ref.Reference`)

|      % | Samples | Callee                          | Location                  |
| -----: | ------: | ------------------------------- | ------------------------- |
| 100.0% |     886 | `waitForReferencePendingList()` | `java.lang.ref.Reference` |

##### `run()` (`java.lang.ref.Reference$ReferenceHandler`)

|      % | Samples | Callee                       | Location                  |
| -----: | ------: | ---------------------------- | ------------------------- |
| 100.0% |     886 | `processPendingReferences()` | `java.lang.ref.Reference` |

##### `wait0(long)` (`java.lang.Object`)

|      % | Samples | Callee            | Location       |
| -----: | ------: | ----------------- | -------------- |
| 100.0% |     886 | `JVM_MonitorWait` | `libjvm.dylib` |

##### `wait(long)` (`java.lang.Object`)

|      % | Samples | Callee        | Location           |
| -----: | ------: | ------------- | ------------------ |
| 100.0% |     886 | `wait0(long)` | `java.lang.Object` |

##### `wait()` (`java.lang.Object`)

|      % | Samples | Callee       | Location           |
| -----: | ------: | ------------ | ------------------ |
| 100.0% |     886 | `wait(long)` | `java.lang.Object` |

##### `await()` (`java.lang.ref.NativeReferenceQueue`)

|      % | Samples | Callee   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |     886 | `wait()` | `java.lang.Object` |

##### `remove0()` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee    | Location                             |
| -----: | ------: | --------- | ------------------------------------ |
| 100.0% |     886 | `await()` | `java.lang.ref.NativeReferenceQueue` |

##### `remove()` (`java.lang.ref.NativeReferenceQueue`)

|      % | Samples | Callee      | Location                       |
| -----: | ------: | ----------- | ------------------------------ |
| 100.0% |     886 | `remove0()` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`java.lang.ref.Finalizer$FinalizerThread`)

|      % | Samples | Callee     | Location                             |
| -----: | ------: | ---------- | ------------------------------------ |
| 100.0% |     886 | `remove()` | `java.lang.ref.NativeReferenceQueue` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|      % | Samples | Callee        | Location       |
| -----: | ------: | ------------- | -------------- |
| 100.0% |     885 | `Unsafe_Park` | `libjvm.dylib` |

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

|      % | Samples | Callee                | Location                   |
| -----: | ------: | --------------------- | -------------------------- |
| 100.0% |     885 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

|      % | Samples | Callee                    | Location                                 |
| -----: | ------: | ------------------------- | ---------------------------------------- |
| 100.0% |     885 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `await(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee                  | Location                                                                |
| -----: | ------: | ----------------------- | ----------------------------------------------------------------------- |
| 100.0% |     885 | `await(long, TimeUnit)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `remove0(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee        | Location                       |
| -----: | ------: | ------------- | ------------------------------ |
| 100.0% |     885 | `await(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee          | Location                       |
| -----: | ------: | --------------- | ------------------------------ |
| 100.0% |     885 | `remove0(long)` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`jdk.internal.ref.CleanerImpl`)

|      % | Samples | Callee         | Location                       |
| -----: | ------: | -------------- | ------------------------------ |
| 100.0% |     885 | `remove(long)` | `java.lang.ref.ReferenceQueue` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % | Samples | Callee  | Location                       |
| -----: | ------: | ------- | ------------------------------ |
| 100.0% |     885 | `run()` | `jdk.internal.ref.CleanerImpl` |

##### `run()` (`java.lang.Thread`)

|      % | Samples | Callee                      | Location           |
| -----: | ------: | --------------------------- | ------------------ |
| 100.0% |     885 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `run()` (`jdk.internal.misc.InnocuousThread`)

|      % | Samples | Callee  | Location           |
| -----: | ------: | ------- | ------------------ |
| 100.0% |     885 | `run()` | `java.lang.Thread` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee              | Location       |
| ----: | ------: | ------------------- | -------------- |
| 99.6% |     839 | `Compile::Compile`  | `libjvm.dylib` |
|  0.2% |       2 | `Compile::~Compile` | `libjvm.dylib` |
|  0.1% |       1 | `Chunk::next_chop`  | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 46.2% |     388 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 38.3% |     321 | `Compile::Optimize`                      | `libjvm.dylib` |
| 13.5% |     113 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  1.3% |      11 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.5% |       4 | `CallGenerator::for_inline`              | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 52.6% |     204 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 17.5% |      68 | `Matcher::match`                  | `libjvm.dylib` |
| 14.2% |      55 | `PhaseOutput::Output`             | `libjvm.dylib` |
| 11.3% |      44 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  2.1% |       8 | `PhaseOutput::install_code`       | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 23.7% |      76 | `PhaseIdealLoop::optimize`      | `libjvm.dylib` |
| 22.7% |      73 | `PhaseIterGVN::optimize`        | `libjvm.dylib` |
| 15.3% |      49 | `Compile::optimize_loops`       | `libjvm.dylib` |
| 10.9% |      35 | `ConnectionGraph::do_analysis`  | `libjvm.dylib` |
|  6.9% |      22 | `Compile::inline_incrementally` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 87.8% |     187 | `Compilation::compile_java_method` | `libjvm.dylib` |
| 11.7% |      25 | `ciEnv::register_method`           | `libjvm.dylib` |
|  0.5% |       1 | `Dependencies::assert_common_1`    | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     213 | `Compilation::compile_method` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 27.0% |      55 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| 12.3% |      25 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| 10.3% |      21 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |
|  8.8% |      18 | `PhaseLive::compute`                       | `libjvm.dylib` |
|  7.8% |      16 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 43.3% |      81 | `Compilation::build_hir`       | `libjvm.dylib` |
| 40.6% |      76 | `Compilation::emit_lir`        | `libjvm.dylib` |
| 13.9% |      26 | `Compilation::emit_code_body`  | `libjvm.dylib` |
|  2.1% |       4 | `ciMethod::ensure_method_data` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 84.8% |     106 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| 12.8% |      16 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |
|  2.4% |       3 | `Chunk::next_chop`               | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                    | Location       |
| ----: | ------: | ----------------------------------------- | -------------- |
| 96.6% |     115 | `PhaseIterGVN::transform_old`             | `libjvm.dylib` |
|  1.7% |       2 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |
|  0.8% |       1 | `LoadNode::Value`                         | `libjvm.dylib` |
|  0.8% |       1 | `CProjNode::hash`                         | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 18.3% |      21 | `PhaseIterGVN::subsume_node` | `libjvm.dylib` |
| 10.4% |      12 | `PhiNode::Ideal`             | `libjvm.dylib` |
|  7.8% |       9 | `StoreNode::Ideal`           | `libjvm.dylib` |
|  6.1% |       7 | `LoadNode::Ideal`            | `libjvm.dylib` |
|  6.1% |       7 | `CallDynamicJavaNode::Ideal` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 32.1% |      34 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 28.3% |      30 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| 10.4% |      11 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
|  7.5% |       8 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
|  2.8% |       3 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Callee                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |     106 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|     % | Samples | Callee                                       | Location       |
| ----: | ------: | -------------------------------------------- | -------------- |
| 82.7% |      67 | `IR::IR`                                     | `libjvm.dylib` |
|  6.2% |       5 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |
|  3.7% |       3 | `IR::eliminate_null_checks`                  | `libjvm.dylib` |
|  2.5% |       2 | `IR::compute_use_counts`                     | `libjvm.dylib` |
|  1.2% |       1 | `LogicOp::hash`                              | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 80.3% |      61 | `LinearScan::do_linear_scan` | `libjvm.dylib` |
| 19.7% |      15 | `BlockList::iterate_forward` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 79.4% |      54 | `Matcher::xform`                              | `libjvm.dylib` |
|  8.8% |       6 | `Matcher::find_shared`                        | `libjvm.dylib` |
|  2.9% |       2 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |
|  1.5% |       1 | `AddINode::Opcode`                            | `libjvm.dylib` |
|  1.5% |       1 | `InitializeNode::Opcode`                      | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 93.9% |      62 | `GraphBuilder::iterate_all_blocks`   | `libjvm.dylib` |
|  3.0% |       2 | `BlockBegin::iterate_preorder`       | `libjvm.dylib` |
|  1.5% |       1 | `BlockListBuilder::BlockListBuilder` | `libjvm.dylib` |
|  1.5% |       1 | `GraphBuilder::state_at_entry`       | `libjvm.dylib` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 36.5% |   9,600 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`) ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                       |
|  5.2% |   1,377 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                     |
|  3.4% |     886 | `mach_msg2_trap` (`libsystem_kernel.dylib`) ← `mach_msg_overwrite` ← `mach_msg` ← `__CFRunLoopServiceMachPort` (`CoreFoundation`) ← `__CFRunLoopRun` ← `CFRunLoopRunSpecific` ← `CreateExecutionEnvironment` (`libjli.dylib`) ← `JLI_Launch` ← `main` (`java`) ← `unknown`                                                                                                                                                                                                                                                                                                 |
|  3.4% |     886 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ServiceThread::wait_for_task` ← `G1ServiceThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                             |
|  3.4% |     886 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `WatcherThread::sleep` ← `WatcherThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                             |
|  3.4% |     886 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `os::signal_wait` (`libjvm.dylib`) ← `signal_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                               |
|  3.4% |     886 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `MonitorDeflationThread::monitor_deflation_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                |
|  3.4% |     886 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformEvent::park` (`libjvm.dylib`) ← `ObjectMonitor::wait` ← `ObjectSynchronizer::wait` ← `JVM_MonitorWait` ← `wait0(long)` (`java.lang.Object`) ← `wait(long)` ← `wait()` ← `await()` (`java.lang.ref.NativeReferenceQueue`) ← `remove0()` (`java.lang.ref.ReferenceQueue`) ← `remove()` (`java.lang.ref.NativeReferenceQueue`) ← `run()` (`java.lang.ref.Finalizer$FinalizerThread`)                                                                                                                                  |
|  3.4% |     886 | `__ulock_wait` (`libsystem_kernel.dylib`) ← `CallJavaMainInNewThread` (`libjli.dylib`) ← `ContinueInNewThread` ← `JLI_Launch` ← `main` (`java`) ← `apple_main` (`libjli.dylib`) ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                            |
|  3.4% |     886 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Profiler::timerLoop` (`libasyncProfiler.dylib`) ← `JvmtiAgentThread::start_function_wrapper` (`libjvm.dylib`) ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                               |
|  3.4% |     885 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `NotificationThread::notification_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                         |
|  3.4% |     885 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `JVM_WaitForReferencePendingList` ← `waitForReferencePendingList()` (`java.lang.ref.Reference`) ← `processPendingReferences()` ← `run()` (`java.lang.ref.Reference$ReferenceHandler`)                                                                                                                                                                                                                                                                          |
|  3.4% |     885 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `await(long)` (`java.lang.ref.ReferenceQueue`) ← `remove0(long)` ← `remove(long)` ← `run()` (`jdk.internal.ref.CleanerImpl`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` ← `run()` (`jdk.internal.misc.InnocuousThread`) |
|  3.3% |     877 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` ← `G1ConcurrentRefineThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                       |
|  3.3% |     872 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `ServiceThread::service_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                   |
|  3.3% |     864 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `VMThread::wait_for_operation` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                          |
|  3.3% |     863 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ConcurrentMarkThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                         |
|  0.1% |      33 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                   |
|  0.1% |      21 | `Arena::contains` (`libjvm.dylib`) ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                     |
|  0.1% |      14 | `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                        |
