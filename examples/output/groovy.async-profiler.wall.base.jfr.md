# Sampling profile

Collected 14,309 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Native            | 93.9% |  13,436 |
| Compiler          |  3.8% |     539 |
| Standard library  |  2.1% |     299 |
| Ours              |  0.1% |      20 |
| JIT               |  0.1% |      14 |
| Garbage collector | <0.1% |       1 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                                                                                                                                 | Location                  |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| 45.5% |   6,517 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`  |
| 38.8% |   5,556 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`  |
|  3.3% |     472 | `mach_msg2_trap`                                                                                                                                         | `libsystem_kernel.dylib`  |
|  3.3% |     472 | `__ulock_wait`                                                                                                                                           | `libsystem_kernel.dylib`  |
|  0.3% |      47 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`  |
|  0.2% |      31 | `Node::dominates`                                                                                                                                        | `libjvm.dylib`            |
|  0.2% |      23 | `PhaseChaitin::Split`                                                                                                                                    | `libjvm.dylib`            |
|  0.1% |      21 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib` |
|  0.1% |      18 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`            |
|  0.1% |      18 | `cast(Object)`                                                                                                                                           | `java.lang.Class`         |
|  0.1% |      18 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `libjvm.dylib`            |
|  0.1% |      16 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`           |
|  0.1% |      14 | `PhaseChaitin::build_ifg_physical`                                                                                                                       | `libjvm.dylib`            |
|  0.1% |      14 | `java_lang_Throwable::fill_in_stack_trace`                                                                                                               | `libjvm.dylib`            |
|  0.1% |      13 | `PhaseAggressiveCoalesce::insert_copies`                                                                                                                 | `libjvm.dylib`            |
|  0.1% |      13 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`            |
|  0.1% |      10 | `PhaseChaitin::elide_copy`                                                                                                                               | `libjvm.dylib`            |
|  0.1% |      10 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                           | `libjvm.dylib`            |
|  0.1% |      10 | `newInstance(Class, int)`                                                                                                                                | `java.lang.reflect.Array` |
|  0.1% |       9 | `IndexSetIterator::advance_and_next`                                                                                                                     | `libjvm.dylib`            |

#### Categories

##### Native

|     % | Samples | Function                                                                                                                                                 | Location                   |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 45.5% |   6,517 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 38.8% |   5,556 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`   |
|  3.3% |     472 | `mach_msg2_trap`                                                                                                                                         | `libsystem_kernel.dylib`   |
|  3.3% |     472 | `__ulock_wait`                                                                                                                                           | `libsystem_kernel.dylib`   |
|  0.3% |      47 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
|  0.1% |      21 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
|  0.1% |      18 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`             |
|  0.1% |      18 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `libjvm.dylib`             |
|  0.1% |      16 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
|  0.1% |      14 | `java_lang_Throwable::fill_in_stack_trace`                                                                                                               | `libjvm.dylib`             |
|  0.1% |      13 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
|  0.1% |      10 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                           | `libjvm.dylib`             |
|  0.1% |       9 | `vmSymbols::find_sid`                                                                                                                                    | `libjvm.dylib`             |
|  0.1% |       9 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                   | `libjvm.dylib`             |
|  0.1% |       8 | `frame::sender_for_compiled_frame`                                                                                                                       | `libjvm.dylib`             |
| <0.1% |       6 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
| <0.1% |       6 | `CodeCache::find_blob`                                                                                                                                   | `libjvm.dylib`             |
| <0.1% |       6 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>`                             | `libjvm.dylib`             |
| <0.1% |       5 | `posix_madvise`                                                                                                                                          | `libsystem_kernel.dylib`   |
| <0.1% |       5 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>`                                                   | `libjvm.dylib`             |

##### Compiler

|     % | Samples | Function                                      | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
|  0.2% |      31 | `Node::dominates`                             | `libjvm.dylib` |
|  0.2% |      23 | `PhaseChaitin::Split`                         | `libjvm.dylib` |
|  0.1% |      14 | `PhaseChaitin::build_ifg_physical`            | `libjvm.dylib` |
|  0.1% |      13 | `PhaseAggressiveCoalesce::insert_copies`      | `libjvm.dylib` |
|  0.1% |      10 | `PhaseChaitin::elide_copy`                    | `libjvm.dylib` |
|  0.1% |       9 | `IndexSetIterator::advance_and_next`          | `libjvm.dylib` |
|  0.1% |       8 | `Node_Backward_Iterator::next`                | `libjvm.dylib` |
|  0.1% |       8 | `PhaseIdealLoop::build_loop_late_post_work`   | `libjvm.dylib` |
|  0.1% |       8 | `PhaseLive::add_liveout`                      | `libjvm.dylib` |
| <0.1% |       7 | `PhaseIdealLoop::Dominators`                  | `libjvm.dylib` |
| <0.1% |       6 | `PhaseOutput::BuildOopMaps`                   | `libjvm.dylib` |
| <0.1% |       6 | `NodeHash::hash_find_insert`                  | `libjvm.dylib` |
| <0.1% |       6 | `Compile::identify_useful_nodes`              | `libjvm.dylib` |
| <0.1% |       5 | `PhaseLive::compute`                          | `libjvm.dylib` |
| <0.1% |       5 | `ciObjectFactory::get_metadata`               | `libjvm.dylib` |
| <0.1% |       5 | `PhaseCFG::partial_latency_of_defs`           | `libjvm.dylib` |
| <0.1% |       5 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `libjvm.dylib` |
| <0.1% |       5 | `PhaseIdealLoop::is_dominator`                | `libjvm.dylib` |
| <0.1% |       4 | `PhaseChaitin::gather_lrg_masks`              | `libjvm.dylib` |
| <0.1% |       4 | `PhaseChaitin::post_allocate_copy_removal`    | `libjvm.dylib` |

##### Standard library

|     % | Samples | Function                                                                                                      | Location                                               |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
|  0.1% |      18 | `cast(Object)`                                                                                                | `java.lang.Class`                                      |
|  0.1% |      10 | `newInstance(Class, int)`                                                                                     | `java.lang.reflect.Array`                              |
|  0.1% |       8 | `invokeBasic(Object[])`                                                                                       | `java.lang.invoke.MethodHandle`                        |
| <0.1% |       7 | `invokeVirtual(Object, Object)`                                                                               | `java.lang.invoke.DirectMethodHandle$Holder`           |
| <0.1% |       5 | `<init>(MethodType, LambdaForm)`                                                                              | `java.lang.invoke.MethodHandle`                        |
| <0.1% |       5 | `collector(Object, Object, Object)`                                                                           | `java.lang.invoke.LambdaForm$MH.0x000000a0010a8c00`    |
| <0.1% |       5 | `collector(Object, Object)`                                                                                   | `java.lang.invoke.LambdaForm$MH.0x000000a001031800`    |
| <0.1% |       4 | `internalMemberName(Object)`                                                                                  | `java.lang.invoke.DirectMethodHandle`                  |
| <0.1% |       4 | `equals(Object, Object)`                                                                                      | `java.util.Objects`                                    |
| <0.1% |       3 | `guard(Object, Object)`                                                                                       | `java.lang.invoke.LambdaForm$MH.0x000000a001098400`    |
| <0.1% |       3 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| <0.1% |       3 | `invokeStatic(Object, Object, Object)`                                                                        | `java.lang.invoke.DirectMethodHandle$Holder`           |
| <0.1% |       3 | `getNode(Object)`                                                                                             | `java.util.HashMap`                                    |
| <0.1% |       3 | `equals(LambdaFormEditor$TransformKey)`                                                                       | `java.lang.invoke.LambdaFormEditor$Transform`          |
| <0.1% |       3 | `join(PredictionContext, PredictionContext, PredictionContextCache)`                                          | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`  |
| <0.1% |       3 | `boxInteger(int)`                                                                                             | `sun.invoke.util.ValueConversions`                     |
| <0.1% |       3 | `equals(Object)`                                                                                              | `java.lang.String`                                     |
| <0.1% |       3 | `get()`                                                                                                       | `java.lang.ref.SoftReference`                          |
| <0.1% |       2 | `invokeExact_MT(Object, Object, Object)`                                                                      | `java.lang.invoke.Invokers$Holder`                     |
| <0.1% |       2 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`                 | `org.codehaus.groovy.vmplugin.v8.IndyInterface`        |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `cast(Object)` (`java.lang.Class`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |      18 | `java.lang.Class:4068` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|      % | Samples | Location                     |
| -----: | ------: | ---------------------------- |
| 100.0% |      10 | `java.lang.reflect.Array:78` |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Location                            |
| ----: | ------: | ----------------------------------- |
| 80.0% |       4 | `java.lang.invoke.MethodHandle:479` |
| 20.0% |       1 | `java.lang.invoke.MethodHandle:480` |

##### `internalMemberName(Object)` (`java.lang.invoke.DirectMethodHandle`)

|      % | Samples | Location                                  |
| -----: | ------: | ----------------------------------------- |
| 100.0% |       4 | `java.lang.invoke.DirectMethodHandle:327` |

##### `equals(Object, Object)` (`java.util.Objects`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       4 | `java.util.Objects:64` |

##### `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|     % | Samples | Location                                                    |
| ----: | ------: | ----------------------------------------------------------- |
| 33.3% |       1 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1821` |
| 33.3% |       1 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1716` |
| 33.3% |       1 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1700` |

##### `getNode(Object)` (`java.util.HashMap`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 66.7% |       2 | `java.util.HashMap:576` |
| 33.3% |       1 | `java.util.HashMap:580` |

##### `equals(LambdaFormEditor$TransformKey)` (`java.lang.invoke.LambdaFormEditor$Transform`)

|      % | Samples | Location                                          |
| -----: | ------: | ------------------------------------------------- |
| 100.0% |       3 | `java.lang.invoke.LambdaFormEditor$Transform:111` |

##### `join(PredictionContext, PredictionContext, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContext`)

|     % | Samples | Location                                                  |
| ----: | ------: | --------------------------------------------------------- |
| 66.7% |       2 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext:167` |
| 33.3% |       1 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext:175` |

##### `boxInteger(int)` (`sun.invoke.util.ValueConversions`)

|      % | Samples | Location                               |
| -----: | ------: | -------------------------------------- |
| 100.0% |       3 | `sun.invoke.util.ValueConversions:280` |

##### `equals(Object)` (`java.lang.String`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       3 | `java.lang.String:1852` |

##### `get()` (`java.lang.ref.SoftReference`)

|     % | Samples | Location                          |
| ----: | ------: | --------------------------------- |
| 66.7% |       2 | `java.lang.ref.SoftReference:113` |
| 33.3% |       1 | `java.lang.ref.SoftReference:116` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|     % | Samples | Location                                            |
| ----: | ------: | --------------------------------------------------- |
| 50.0% |       1 | `org.codehaus.groovy.vmplugin.v8.IndyInterface:293` |
| 50.0% |       1 | `org.codehaus.groovy.vmplugin.v8.IndyInterface:298` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location                 |
| ----: | ------: | ----------------------- | ------------------------ |
| 78.3% |   5,103 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  7.2% |     472 | `PlatformEvent::park`   | `libjvm.dylib`           |
|  7.2% |     471 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |
|  7.2% |     471 | `Parker::park`          | `libjvm.dylib`           |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 90.6% |   5,036 | `WorkerThread::run`              | `libjvm.dylib` |
|  8.5% |     472 | `os::signal_wait`                | `libjvm.dylib` |
|  0.6% |      32 | `WorkerThreads::run_task`        | `libjvm.dylib` |
|  0.3% |      16 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

|      % | Samples | Caller               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |     472 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `__ulock_wait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |     472 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |      47 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `Node::dominates` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |      31 | `MemNode::all_controls_dominate` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      23 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 61.9% |      13 | `JVM_NewArray`            | `libjvm.dylib` |
| 14.3% |       3 | `InterpreterRuntime::ldc` | `libjvm.dylib` |
|  9.5% |       2 | `Unsafe_AllocateInstance` | `libjvm.dylib` |
|  4.8% |       1 | `JVM_FillInStackTrace`    | `libjvm.dylib` |
|  4.8% |       1 | `JavaCalls::call_helper`  | `libjvm.dylib` |

##### `Arena::contains` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |      18 | `Matcher::xform` | `libjvm.dylib` |

##### `cast(Object)` (`java.lang.Class`)

|      % | Samples | Caller                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |      18 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|     % | Samples | Caller                                                             | Location       |
| ----: | ------: | ------------------------------------------------------------------ | -------------- |
| 94.4% |      17 | `G1ParScanThreadState::trim_queue_to_threshold`                    | `libjvm.dylib` |
|  5.6% |       1 | `void G1ParCopyClosure<(G1Barrier)0, true>::do_oop_work<oopDesc*>` | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 12.5% |       2 | `Parse::Parse`                          | `libjvm.dylib` |
| 12.5% |       2 | `TypeInstPtr::add_offset`               | `libjvm.dylib` |
| 12.5% |       2 | `PhaseChaitin::build_ifg_physical`      | `libjvm.dylib` |
| 12.5% |       2 | `CollectedHeap::array_allocate`         | `libjvm.dylib` |
|  6.3% |       1 | `CallGenerator::for_method_handle_call` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      14 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `java_lang_Throwable::fill_in_stack_trace` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |      14 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      13 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |      13 | `DebugInformationRecorder::describe_scope` | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |      10 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                         | Location       |
| -----: | ------: | ---------------------------------------------- | -------------- |
| 100.0% |      10 | `void G1CMTask::process_grey_task_entry<true>` | `libjvm.dylib` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|      % | Samples | Caller                              | Location                                             |
| -----: | ------: | ----------------------------------- | ---------------------------------------------------- |
| 100.0% |      10 | `invokeStatic(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000a00102b400` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                   | Location       |
| ----: | ------: | ------------------------ | -------------- |
| 33.3% |       3 | `PhaseIFG::re_insert`    | `libjvm.dylib` |
| 22.2% |       2 | `PhaseLive::add_liveout` | `libjvm.dylib` |
| 11.1% |       1 | `PhaseIFG::remove_node`  | `libjvm.dylib` |
| 11.1% |       1 | `PhaseIFG::SquareUp`     | `libjvm.dylib` |
| 11.1% |       1 | `PhaseChaitin::Simplify` | `libjvm.dylib` |

##### `vmSymbols::find_sid` (`libjvm.dylib`)

|     % | Samples | Caller                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 88.9% |       8 | `ciObjectFactory::get_symbol`                  | `libjvm.dylib` |
| 11.1% |       1 | `MethodHandles::signature_polymorphic_name_id` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|     % | Samples | Caller                                                                            | Location       |
| ----: | ------: | --------------------------------------------------------------------------------- | -------------- |
| 88.9% |       8 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object`          | `libjvm.dylib` |
| 11.1% |       1 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb` | `libjvm.dylib` |

##### `frame::sender_for_compiled_frame` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       8 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `Node_Backward_Iterator::next` (`libjvm.dylib`)

|     % | Samples | Caller                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 62.5% |       5 | `PhaseCFG::schedule_late`      | `libjvm.dylib` |
| 37.5% |       3 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|     % | Samples | Caller                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 75.0% |       6 | `PhaseIdealLoop::build_loop_late`    | `libjvm.dylib` |
| 25.0% |       2 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseLive::add_liveout` (`libjvm.dylib`)

|      % | Samples | Caller               | Location       |
| -----: | ------: | -------------------- | -------------- |
| 100.0% |       8 | `PhaseLive::compute` | `libjvm.dylib` |

##### `invokeBasic(Object[])` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Caller                              | Location                                             |
| ----: | ------: | ----------------------------------- | ---------------------------------------------------- |
| 12.5% |       1 | `invoke(Object, Object)`            | `java.lang.invoke.LambdaForm$MH.0x000000a001092000`  |
| 12.5% |       1 | `collector(Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000a0010c8c00`  |
| 12.5% |       1 | `invoke(Object, Object, Object)`    | `java.lang.invoke.LambdaForm$MH.0x000000a0010acc00`  |
| 12.5% |       1 | `invokeVirtual(Object, Object)`     | `java.lang.invoke.LambdaForm$DMH.0x000000a001105800` |
| 12.5% |       1 | `collector(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a0010a8c00`  |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       7 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Caller                           | Location                                            |
| ----: | ------: | -------------------------------- | --------------------------------------------------- |
| 85.7% |       6 | `invoke(Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000a001089400` |
| 14.3% |       1 | `guardWithCatch(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a001096800` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                       | Location       |
| ----: | ------: | -------------------------------------------- | -------------- |
| 16.7% |       1 | `Matcher::xform`                             | `libjvm.dylib` |
| 16.7% |       1 | `PhaseIdealLoop::build_and_optimize`         | `libjvm.dylib` |
| 16.7% |       1 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |
| 16.7% |       1 | `GraphBuilder::try_inline_full`              | `libjvm.dylib` |
| 16.7% |       1 | `IRScope::IRScope`                           | `libjvm.dylib` |

##### `CodeCache::find_blob` (`libjvm.dylib`)

|     % | Samples | Caller                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 66.7% |       4 | `frame::sender_for_interpreter_frame` | `libjvm.dylib` |
| 16.7% |       1 | `JavaThread::pd_last_frame`           | `libjvm.dylib` |
| 16.7% |       1 | `NativeCall::set_destination_mt_safe` | `libjvm.dylib` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                            | Location       |
| -----: | ------: | ------------------------------------------------- | -------------- |
| 100.0% |       6 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib` |

##### `PhaseOutput::BuildOopMaps` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |       6 | `PhaseOutput::Output` | `libjvm.dylib` |

##### `NodeHash::hash_find_insert` (`libjvm.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 66.7% |       4 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |
| 33.3% |       2 | `PhaseIterGVN::transform_old`    | `libjvm.dylib` |

##### `Compile::identify_useful_nodes` (`libjvm.dylib`)

|      % | Samples | Caller                                   | Location       |
| -----: | ------: | ---------------------------------------- | -------------- |
| 100.0% |       6 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `posix_madvise` (`libsystem_kernel.dylib`)

|      % | Samples | Caller        | Location                 |
| -----: | ------: | ------------- | ------------------------ |
| 100.0% |       5 | `free_medium` | `libsystem_malloc.dylib` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                                                   | Location       |
| -----: | ------: | ------------------------------------------------------------------------ | -------------- |
| 100.0% |       5 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       5 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|     % | Samples | Caller                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 40.0% |       2 | `ciBytecodeStream::get_method`         | `libjvm.dylib` |
| 20.0% |       1 | `ciObjectFactory::get`                 | `libjvm.dylib` |
| 20.0% |       1 | `ciParametersTypeData::translate_from` | `libjvm.dylib` |
| 20.0% |       1 | `ciObjectFactory::create_new_metadata` | `libjvm.dylib` |

##### `PhaseCFG::partial_latency_of_defs` (`libjvm.dylib`)

|      % | Samples | Caller                         | Location       |
| -----: | ------: | ------------------------------ | -------------- |
| 100.0% |       5 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `PhaseIdealLoop::get_late_ctrl_with_anti_dep` (`libjvm.dylib`)

|      % | Samples | Caller                                      | Location       |
| -----: | ------: | ------------------------------------------- | -------------- |
| 100.0% |       5 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |

##### `PhaseIdealLoop::is_dominator` (`libjvm.dylib`)

|      % | Samples | Caller                                        | Location       |
| -----: | ------: | --------------------------------------------- | -------------- |
| 100.0% |       5 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `libjvm.dylib` |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Caller                                                | Location                              |
| ----: | ------: | ----------------------------------------------------- | ------------------------------------- |
| 80.0% |       4 | `<init>(MethodType, LambdaForm)`                      | `java.lang.invoke.BoundMethodHandle`  |
| 20.0% |       1 | `<init>(MethodType, LambdaForm, MemberName, boolean)` | `java.lang.invoke.DirectMethodHandle` |

##### `collector(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a0010a8c00`)

|     % | Samples | Caller                           | Location                                            |
| ----: | ------: | -------------------------------- | --------------------------------------------------- |
| 80.0% |       4 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a0010a9400` |
| 20.0% |       1 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a0014ac400` |

##### `collector(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a001031800`)

|     % | Samples | Caller                   | Location                                            |
| ----: | ------: | ------------------------ | --------------------------------------------------- |
| 60.0% |       3 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a001099c00` |
| 40.0% |       2 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a001092000` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       4 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       4 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `internalMemberName(Object)` (`java.lang.invoke.DirectMethodHandle`)

|     % | Samples | Caller                                                                 | Location                                             |
| ----: | ------: | ---------------------------------------------------------------------- | ---------------------------------------------------- |
| 25.0% |       1 | `invokeStatic(Object, Object, int)`                                    | `java.lang.invoke.LambdaForm$DMH.0x000000a00102b400` |
| 25.0% |       1 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 25.0% |       1 | `invokeVirtual(Object, Object, Object, Object)`                        | `java.lang.invoke.LambdaForm$DMH.0x000000a001092800` |
| 25.0% |       1 | `invokeInterface(Object, Object)`                                      | `java.lang.invoke.LambdaForm$DMH.0x000000a001108400` |

##### `equals(Object, Object)` (`java.util.Objects`)

|      % | Samples | Caller           | Location                               |
| -----: | ------: | ---------------- | -------------------------------------- |
| 100.0% |       4 | `equals(Object)` | `jdk.internal.util.StrongReferenceKey` |

##### `guard(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a001098400`)

|     % | Samples | Caller                     | Location                                            |
| ----: | ------: | -------------------------- | --------------------------------------------------- |
| 66.7% |       2 | `reinvoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a001098000` |
| 33.3% |       1 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|      % | Samples | Caller                                                                                                        | Location                                               |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       3 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `invokeStatic(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Caller                                 | Location                                            |
| ----: | ------: | -------------------------------------- | --------------------------------------------------- |
| 33.3% |       1 | `invoke(Object, Object, Object, long)` | `java.lang.invoke.LambdaForm$MH.0x000000a001322c00` |
| 33.3% |       1 | `invoke(Object, Object)`               | `java.lang.invoke.LambdaForm$MH.0x000000a001097000` |
| 33.3% |       1 | `invoke(Object, Object, Object)`       | `java.lang.invoke.LambdaForm$MH.0x000000a0010acc00` |

##### `getNode(Object)` (`java.util.HashMap`)

|     % | Samples | Caller        | Location                  |
| ----: | ------: | ------------- | ------------------------- |
| 66.7% |       2 | `get(Object)` | `java.util.LinkedHashMap` |
| 33.3% |       1 | `get(Object)` | `java.util.HashMap`       |

##### `equals(LambdaFormEditor$TransformKey)` (`java.lang.invoke.LambdaFormEditor$Transform`)

|      % | Samples | Caller                                      | Location                            |
| -----: | ------: | ------------------------------------------- | ----------------------------------- |
| 100.0% |       3 | `getInCache(LambdaFormEditor$TransformKey)` | `java.lang.invoke.LambdaFormEditor` |

##### `join(PredictionContext, PredictionContext, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContext`)

|     % | Samples | Caller                                       | Location                                                   |
| ----: | ------: | -------------------------------------------- | ---------------------------------------------------------- |
| 66.7% |       2 | `add(ATNConfig, PredictionContextCache)`     | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`           |
| 33.3% |       1 | `join(PredictionContext, PredictionContext)` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache` |

##### `boxInteger(int)` (`sun.invoke.util.ValueConversions`)

|      % | Samples | Caller                      | Location                                     |
| -----: | ------: | --------------------------- | -------------------------------------------- |
| 100.0% |       3 | `invokeStatic(Object, int)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `equals(Object)` (`java.lang.String`)

|     % | Samples | Caller                             | Location                      |
| ----: | ------: | ---------------------------------- | ----------------------------- |
| 66.7% |       2 | `equals(Object, Object)`           | `java.util.Objects`           |
| 33.3% |       1 | `matches(Method, String, Class[])` | `java.lang.PublicMethods$Key` |

##### `get()` (`java.lang.ref.SoftReference`)

|     % | Samples | Caller                                      | Location                            |
| ----: | ------: | ------------------------------------------- | ----------------------------------- |
| 33.3% |       1 | `getInCache(LambdaFormEditor$TransformKey)` | `java.lang.invoke.LambdaFormEditor` |
| 33.3% |       1 | `cachedLambdaForm(int)`                     | `java.lang.invoke.MethodTypeForm`   |
| 33.3% |       1 | `reflectionData()`                          | `java.lang.Class`                   |

##### `invokeExact_MT(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                                                                                        | Location                                        |
| -----: | ------: | --------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| 100.0% |       2 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|      % | Samples | Caller                                                                                      | Location                                             |
| -----: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |       2 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a001088800` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                   | Location                  |
| ----: | ------: | ------------------------------------------ | ------------------------- |
| 83.5% |  11,951 | `_pthread_start`                           | `libsystem_pthread.dylib` |
| 83.5% |  11,951 | `thread_start`                             | `libsystem_pthread.dylib` |
| 80.2% |  11,478 | `Thread::call_run`                         | `libjvm.dylib`            |
| 80.2% |  11,478 | `thread_native_entry`                      | `libjvm.dylib`            |
| 45.5% |   6,517 | `__psynch_cvwait`                          | `libsystem_kernel.dylib`  |
| 38.8% |   5,556 | `semaphore_wait_trap`                      | `libsystem_kernel.dylib`  |
| 35.8% |   5,127 | `WorkerThread::run`                        | `libjvm.dylib`            |
| 35.7% |   5,112 | `PlatformMonitor::wait`                    | `libjvm.dylib`            |
| 27.9% |   3,991 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
| 26.1% |   3,736 | `Monitor::wait_without_safepoint_check`    | `libjvm.dylib`            |
| 11.4% |   1,633 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
|  9.9% |   1,416 | `ConcurrentGCThread::run`                  | `libjvm.dylib`            |
|  9.6% |   1,376 | `Monitor::wait`                            | `libjvm.dylib`            |
|  6.6% |     944 | `JLI_Launch`                               | `libjli.dylib`            |
|  6.6% |     944 | `main`                                     | `java`                    |
|  6.3% |     896 | `CompileQueue::get`                        | `libjvm.dylib`            |
|  5.1% |     736 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  4.2% |     604 | `Compile::Compile`                         | `libjvm.dylib`            |
|  4.2% |     604 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  3.3% |     472 | `G1ConcurrentMarkThread::run_service`      | `libjvm.dylib`            |

#### Categories

##### Native

|     % | Samples | Function                                | Location                  |
| ----: | ------: | --------------------------------------- | ------------------------- |
| 83.5% |  11,951 | `_pthread_start`                        | `libsystem_pthread.dylib` |
| 83.5% |  11,951 | `thread_start`                          | `libsystem_pthread.dylib` |
| 80.2% |  11,478 | `Thread::call_run`                      | `libjvm.dylib`            |
| 80.2% |  11,478 | `thread_native_entry`                   | `libjvm.dylib`            |
| 45.5% |   6,517 | `__psynch_cvwait`                       | `libsystem_kernel.dylib`  |
| 38.8% |   5,556 | `semaphore_wait_trap`                   | `libsystem_kernel.dylib`  |
| 35.8% |   5,127 | `WorkerThread::run`                     | `libjvm.dylib`            |
| 35.7% |   5,112 | `PlatformMonitor::wait`                 | `libjvm.dylib`            |
| 27.9% |   3,991 | `JavaThread::thread_main_inner`         | `libjvm.dylib`            |
| 26.1% |   3,736 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib`            |
|  9.9% |   1,416 | `ConcurrentGCThread::run`               | `libjvm.dylib`            |
|  9.6% |   1,376 | `Monitor::wait`                         | `libjvm.dylib`            |
|  6.6% |     944 | `JLI_Launch`                            | `libjli.dylib`            |
|  6.6% |     944 | `main`                                  | `java`                    |
|  3.3% |     472 | `G1ConcurrentMarkThread::run_service`   | `libjvm.dylib`            |
|  3.3% |     472 | `mach_msg2_trap`                        | `libsystem_kernel.dylib`  |
|  3.3% |     472 | `mach_msg_overwrite`                    | `libsystem_kernel.dylib`  |
|  3.3% |     472 | `mach_msg`                              | `libsystem_kernel.dylib`  |
|  3.3% |     472 | `__CFRunLoopServiceMachPort`            | `CoreFoundation`          |
|  3.3% |     472 | `__CFRunLoopRun`                        | `CoreFoundation`          |

##### Compiler

|     % | Samples | Function                                   | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 11.4% |   1,633 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
|  6.3% |     896 | `CompileQueue::get`                        | `libjvm.dylib` |
|  5.1% |     736 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  4.2% |     604 | `Compile::Compile`                         | `libjvm.dylib` |
|  4.2% |     604 | `C2Compiler::compile_method`               | `libjvm.dylib` |
|  2.1% |     294 | `Compile::Code_Gen`                        | `libjvm.dylib` |
|  1.5% |     215 | `Compile::Optimize`                        | `libjvm.dylib` |
|  1.2% |     169 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
|  0.9% |     131 | `Compilation::compile_method`              | `libjvm.dylib` |
|  0.9% |     131 | `Compilation::Compilation`                 | `libjvm.dylib` |
|  0.8% |     113 | `Compilation::compile_java_method`         | `libjvm.dylib` |
|  0.7% |     103 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|  0.6% |      84 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
|  0.6% |      84 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
|  0.5% |      78 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
|  0.5% |      75 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |
|  0.3% |      49 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
|  0.3% |      48 | `Compilation::emit_lir`                    | `libjvm.dylib` |
|  0.3% |      47 | `Matcher::match`                           | `libjvm.dylib` |
|  0.3% |      43 | `PhaseOutput::Output`                      | `libjvm.dylib` |

##### Standard library

|    % | Samples | Function                        | Location                                                                |
| ---: | ------: | ------------------------------- | ----------------------------------------------------------------------- |
| 3.3% |     472 | `wait0(long)`                   | `java.lang.Object`                                                      |
| 3.3% |     472 | `wait(long)`                    | `java.lang.Object`                                                      |
| 3.3% |     472 | `wait()`                        | `java.lang.Object`                                                      |
| 3.3% |     472 | `await()`                       | `java.lang.ref.NativeReferenceQueue`                                    |
| 3.3% |     472 | `remove0()`                     | `java.lang.ref.ReferenceQueue`                                          |
| 3.3% |     472 | `remove()`                      | `java.lang.ref.NativeReferenceQueue`                                    |
| 3.3% |     472 | `run()`                         | `java.lang.ref.Finalizer$FinalizerThread`                               |
| 3.3% |     472 | `waitForReferencePendingList()` | `java.lang.ref.Reference`                                               |
| 3.3% |     472 | `processPendingReferences()`    | `java.lang.ref.Reference`                                               |
| 3.3% |     472 | `run()`                         | `java.lang.ref.Reference$ReferenceHandler`                              |
| 3.3% |     471 | `park(boolean, long)`           | `jdk.internal.misc.Unsafe`                                              |
| 3.3% |     471 | `parkNanos(Object, long)`       | `java.util.concurrent.locks.LockSupport`                                |
| 3.3% |     471 | `await(long, TimeUnit)`         | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
| 3.3% |     471 | `await(long)`                   | `java.lang.ref.ReferenceQueue`                                          |
| 3.3% |     471 | `remove0(long)`                 | `java.lang.ref.ReferenceQueue`                                          |
| 3.3% |     471 | `remove(long)`                  | `java.lang.ref.ReferenceQueue`                                          |
| 3.3% |     471 | `run()`                         | `jdk.internal.ref.CleanerImpl`                                          |
| 3.3% |     471 | `runWith(Object, Runnable)`     | `java.lang.Thread`                                                      |
| 3.3% |     471 | `run()`                         | `java.lang.Thread`                                                      |
| 3.3% |     471 | `run()`                         | `jdk.internal.misc.InnocuousThread`                                     |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 96.0% |  11,478 | `thread_native_entry` | `libjvm.dylib` |
|  3.9% |     472 | `apple_main`          | `libjli.dylib` |
| <0.1% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |  11,951 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 44.7% |   5,127 | `WorkerThread::run`             | `libjvm.dylib` |
| 34.8% |   3,991 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| 12.3% |   1,416 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  4.1% |     472 | `WatcherThread::run`            | `libjvm.dylib` |
|  4.1% |     472 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |  11,478 | `Thread::call_run` | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 98.2% |   5,036 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
|  0.8% |      41 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
|  0.4% |      21 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib`           |
|  0.4% |      18 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib`           |
|  0.2% |       9 | `KlassCleaningTask::work`         | `libjvm.dylib`           |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Callee               | Location                  |
| ----: | ------: | -------------------- | ------------------------- |
| 99.8% |   5,103 | `__psynch_cvwait`    | `libsystem_kernel.dylib`  |
|  0.2% |       9 | `_pthread_cond_wait` | `libsystem_pthread.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                                   | Location       |
| ----: | ------: | -------------------------------------------------------- | -------------- |
| 40.9% |   1,633 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib` |
| 11.8% |     472 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |
| 11.8% |     472 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |
| 11.8% |     472 | `signal_thread_entry`                                    | `libjvm.dylib` |
| 11.8% |     471 | `JvmtiAgentThread::start_function_wrapper`               | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |   3,736 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 54.9% |     896 | `CompileQueue::get`                            | `libjvm.dylib` |
| 45.1% |     736 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  0.1% |       1 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 33.3% |     472 | `G1ConcurrentMarkThread::run_service`   | `libjvm.dylib` |
| 33.3% |     472 | `G1ServiceThread::run_service`          | `libjvm.dylib` |
| 33.3% |     472 | `G1ConcurrentRefineThread::run_service` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |   1,376 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 50.0% |     472 | `CreateExecutionEnvironment` | `libjli.dylib` |
| 50.0% |     472 | `ContinueInNewThread`        | `libjli.dylib` |

##### `main` (`java`)

|      % | Samples | Callee       | Location       |
| -----: | ------: | ------------ | -------------- |
| 100.0% |     944 | `JLI_Launch` | `libjli.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|     % | Samples | Callee          | Location       |
| ----: | ------: | --------------- | -------------- |
| 99.8% |     894 | `Monitor::wait` | `libjvm.dylib` |
|  0.2% |       2 | `Mutex::lock`   | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 82.1% |     604 | `C2Compiler::compile_method` | `libjvm.dylib` |
| 17.8% |     131 | `Compiler::compile_method`   | `libjvm.dylib` |
|  0.1% |       1 | `ciEnv::ciEnv`               | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 48.7% |     294 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 35.6% |     215 | `Compile::Optimize`                      | `libjvm.dylib` |
| 14.4% |      87 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.7% |       4 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.3% |       2 | `Compile::inline_string_calls`           | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     604 | `Compile::Compile` | `libjvm.dylib` |

##### `G1ConcurrentMarkThread::run_service` (`libjvm.dylib`)

|     % | Samples | Callee                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 94.3% |     445 | `Monitor::wait_without_safepoint_check`            | `libjvm.dylib` |
|  5.7% |      27 | `G1ConcurrentMarkThread::concurrent_mark_cycle_do` | `libjvm.dylib` |

##### `mach_msg_overwrite` (`libsystem_kernel.dylib`)

|      % | Samples | Callee           | Location                 |
| -----: | ------: | ---------------- | ------------------------ |
| 100.0% |     472 | `mach_msg2_trap` | `libsystem_kernel.dylib` |

##### `mach_msg` (`libsystem_kernel.dylib`)

|      % | Samples | Callee               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |     472 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `__CFRunLoopServiceMachPort` (`CoreFoundation`)

|      % | Samples | Callee     | Location                 |
| -----: | ------: | ---------- | ------------------------ |
| 100.0% |     472 | `mach_msg` | `libsystem_kernel.dylib` |

##### `__CFRunLoopRun` (`CoreFoundation`)

|      % | Samples | Callee                       | Location         |
| -----: | ------: | ---------------------------- | ---------------- |
| 100.0% |     472 | `__CFRunLoopServiceMachPort` | `CoreFoundation` |

##### `wait0(long)` (`java.lang.Object`)

|      % | Samples | Callee            | Location       |
| -----: | ------: | ----------------- | -------------- |
| 100.0% |     472 | `JVM_MonitorWait` | `libjvm.dylib` |

##### `wait(long)` (`java.lang.Object`)

|      % | Samples | Callee        | Location           |
| -----: | ------: | ------------- | ------------------ |
| 100.0% |     472 | `wait0(long)` | `java.lang.Object` |

##### `wait()` (`java.lang.Object`)

|      % | Samples | Callee       | Location           |
| -----: | ------: | ------------ | ------------------ |
| 100.0% |     472 | `wait(long)` | `java.lang.Object` |

##### `await()` (`java.lang.ref.NativeReferenceQueue`)

|      % | Samples | Callee   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |     472 | `wait()` | `java.lang.Object` |

##### `remove0()` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee    | Location                             |
| -----: | ------: | --------- | ------------------------------------ |
| 100.0% |     472 | `await()` | `java.lang.ref.NativeReferenceQueue` |

##### `remove()` (`java.lang.ref.NativeReferenceQueue`)

|      % | Samples | Callee      | Location                       |
| -----: | ------: | ----------- | ------------------------------ |
| 100.0% |     472 | `remove0()` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`java.lang.ref.Finalizer$FinalizerThread`)

|      % | Samples | Callee     | Location                             |
| -----: | ------: | ---------- | ------------------------------------ |
| 100.0% |     472 | `remove()` | `java.lang.ref.NativeReferenceQueue` |

##### `waitForReferencePendingList()` (`java.lang.ref.Reference`)

|      % | Samples | Callee                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |     472 | `JVM_WaitForReferencePendingList` | `libjvm.dylib` |

##### `processPendingReferences()` (`java.lang.ref.Reference`)

|      % | Samples | Callee                          | Location                  |
| -----: | ------: | ------------------------------- | ------------------------- |
| 100.0% |     472 | `waitForReferencePendingList()` | `java.lang.ref.Reference` |

##### `run()` (`java.lang.ref.Reference$ReferenceHandler`)

|      % | Samples | Callee                       | Location                  |
| -----: | ------: | ---------------------------- | ------------------------- |
| 100.0% |     472 | `processPendingReferences()` | `java.lang.ref.Reference` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|      % | Samples | Callee        | Location       |
| -----: | ------: | ------------- | -------------- |
| 100.0% |     471 | `Unsafe_Park` | `libjvm.dylib` |

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

|      % | Samples | Callee                | Location                   |
| -----: | ------: | --------------------- | -------------------------- |
| 100.0% |     471 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

|      % | Samples | Callee                    | Location                                 |
| -----: | ------: | ------------------------- | ---------------------------------------- |
| 100.0% |     471 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `await(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee                  | Location                                                                |
| -----: | ------: | ----------------------- | ----------------------------------------------------------------------- |
| 100.0% |     471 | `await(long, TimeUnit)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `remove0(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee        | Location                       |
| -----: | ------: | ------------- | ------------------------------ |
| 100.0% |     471 | `await(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee          | Location                       |
| -----: | ------: | --------------- | ------------------------------ |
| 100.0% |     471 | `remove0(long)` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`jdk.internal.ref.CleanerImpl`)

|      % | Samples | Callee         | Location                       |
| -----: | ------: | -------------- | ------------------------------ |
| 100.0% |     471 | `remove(long)` | `java.lang.ref.ReferenceQueue` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % | Samples | Callee  | Location                       |
| -----: | ------: | ------- | ------------------------------ |
| 100.0% |     471 | `run()` | `jdk.internal.ref.CleanerImpl` |

##### `run()` (`java.lang.Thread`)

|      % | Samples | Callee                      | Location           |
| -----: | ------: | --------------------------- | ------------------ |
| 100.0% |     471 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `run()` (`jdk.internal.misc.InnocuousThread`)

|      % | Samples | Callee  | Location           |
| -----: | ------: | ------- | ------------------ |
| 100.0% |     471 | `run()` | `java.lang.Thread` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 57.5% |     169 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 16.0% |      47 | `Matcher::match`                  | `libjvm.dylib` |
| 14.6% |      43 | `PhaseOutput::Output`             | `libjvm.dylib` |
| 10.2% |      30 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  0.7% |       2 | `PhaseOutput::install_code`       | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 30.2% |      65 | `PhaseIdealLoop::optimize`      | `libjvm.dylib` |
| 19.1% |      41 | `PhaseIterGVN::optimize`        | `libjvm.dylib` |
| 17.7% |      38 | `Compile::optimize_loops`       | `libjvm.dylib` |
|  7.4% |      16 | `Compile::inline_incrementally` | `libjvm.dylib` |
|  5.6% |      12 | `PhaseCCP::PhaseCCP`            | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 29.0% |      49 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| 13.0% |      22 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| 10.7% |      18 | `PhaseLive::compute`                       | `libjvm.dylib` |
|  9.5% |      16 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  9.5% |      16 | `PhaseAggressiveCoalesce::insert_copies`   | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 86.3% |     113 | `Compilation::compile_java_method` | `libjvm.dylib` |
| 12.2% |      16 | `ciEnv::register_method`           | `libjvm.dylib` |
|  1.5% |       2 | `Dependencies::assert_common_1`    | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     131 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 42.5% |      48 | `Compilation::emit_lir`        | `libjvm.dylib` |
| 33.6% |      38 | `Compilation::build_hir`       | `libjvm.dylib` |
| 23.0% |      26 | `Compilation::emit_code_body`  | `libjvm.dylib` |
|  0.9% |       1 | `ciMethod::ensure_method_data` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 81.6% |      84 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| 18.4% |      19 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 35.7% |      30 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 19.0% |      16 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| 11.9% |      10 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
|  8.3% |       7 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
|  4.8% |       4 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Callee                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      84 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 96.2% |      75 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |
|  1.3% |       1 | `ConstraintCastNode::hash`    | `libjvm.dylib` |
|  1.3% |       1 | `RangeCheckNode::Ideal`       | `libjvm.dylib` |
|  1.3% |       1 | `MultiNode::hash`             | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 25.3% |      19 | `StoreNode::Ideal`           | `libjvm.dylib` |
| 13.3% |      10 | `RegionNode::Ideal`          | `libjvm.dylib` |
| 10.7% |       8 | `PhaseIterGVN::subsume_node` | `libjvm.dylib` |
|  9.3% |       7 | `LoadNode::Ideal`            | `libjvm.dylib` |
|  9.3% |       7 | `NodeHash::hash_find_insert` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|     % | Samples | Callee                              | Location       |
| ----: | ------: | ----------------------------------- | -------------- |
| 22.4% |      11 | `MachNode::rematerialize`           | `libjvm.dylib` |
|  8.2% |       4 | `Node::rematerialize`               | `libjvm.dylib` |
|  4.1% |       2 | `PhaseChaitin::split_DEF`           | `libjvm.dylib` |
|  4.1% |       2 | `PhaseChaitin::split_Rematerialize` | `libjvm.dylib` |
|  2.0% |       1 | `MachCallJavaNode::in_RegMask`      | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 64.6% |      31 | `LinearScan::do_linear_scan`     | `libjvm.dylib` |
| 31.3% |      15 | `BlockList::iterate_forward`     | `libjvm.dylib` |
|  2.1% |       1 | `Base::as_Base`                  | `libjvm.dylib` |
|  2.1% |       1 | `ControlFlowOptimizer::optimize` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 76.6% |      36 | `Matcher::xform`                              | `libjvm.dylib` |
| 12.8% |       6 | `Matcher::find_shared`                        | `libjvm.dylib` |
|  2.1% |       1 | `ProjNode::Opcode`                            | `libjvm.dylib` |
|  2.1% |       1 | `CallStaticJavaNode::Opcode`                  | `libjvm.dylib` |
|  2.1% |       1 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |

##### `PhaseOutput::Output` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 44.2% |      19 | `PhaseOutput::fill_buffer`      | `libjvm.dylib` |
| 23.3% |      10 | `Scheduling::DoScheduling`      | `libjvm.dylib` |
| 16.3% |       7 | `PhaseOutput::BuildOopMaps`     | `libjvm.dylib` |
|  7.0% |       3 | `PhaseOutput::shorten_branches` | `libjvm.dylib` |
|  2.3% |       1 | `PhaseOutput::init_buffer`      | `libjvm.dylib` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 35.2% |   5,036 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`) ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                       |
|  6.2% |     886 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                     |
|  3.3% |     472 | `mach_msg2_trap` (`libsystem_kernel.dylib`) ← `mach_msg_overwrite` ← `mach_msg` ← `__CFRunLoopServiceMachPort` (`CoreFoundation`) ← `__CFRunLoopRun` ← `CFRunLoopRunSpecific` ← `CreateExecutionEnvironment` (`libjli.dylib`) ← `JLI_Launch` ← `main` (`java`) ← `unknown`                                                                                                                                                                                                                                                                                                 |
|  3.3% |     472 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `WatcherThread::sleep` ← `WatcherThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                             |
|  3.3% |     472 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `MonitorDeflationThread::monitor_deflation_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                |
|  3.3% |     472 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformEvent::park` (`libjvm.dylib`) ← `ObjectMonitor::wait` ← `ObjectSynchronizer::wait` ← `JVM_MonitorWait` ← `wait0(long)` (`java.lang.Object`) ← `wait(long)` ← `wait()` ← `await()` (`java.lang.ref.NativeReferenceQueue`) ← `remove0()` (`java.lang.ref.ReferenceQueue`) ← `remove()` (`java.lang.ref.NativeReferenceQueue`) ← `run()` (`java.lang.ref.Finalizer$FinalizerThread`)                                                                                                                                  |
|  3.3% |     472 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ServiceThread::wait_for_task` ← `G1ServiceThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                             |
|  3.3% |     472 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` ← `G1ConcurrentRefineThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                       |
|  3.3% |     472 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `os::signal_wait` (`libjvm.dylib`) ← `signal_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                               |
|  3.3% |     472 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `JVM_WaitForReferencePendingList` ← `waitForReferencePendingList()` (`java.lang.ref.Reference`) ← `processPendingReferences()` ← `run()` (`java.lang.ref.Reference$ReferenceHandler`)                                                                                                                                                                                                                                                                          |
|  3.3% |     472 | `__ulock_wait` (`libsystem_kernel.dylib`) ← `CallJavaMainInNewThread` (`libjli.dylib`) ← `ContinueInNewThread` ← `JLI_Launch` ← `main` (`java`) ← `apple_main` (`libjli.dylib`) ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                            |
|  3.3% |     471 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Profiler::timerLoop` (`libasyncProfiler.dylib`) ← `JvmtiAgentThread::start_function_wrapper` (`libjvm.dylib`) ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                               |
|  3.3% |     471 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `await(long)` (`java.lang.ref.ReferenceQueue`) ← `remove0(long)` ← `remove(long)` ← `run()` (`jdk.internal.ref.CleanerImpl`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` ← `run()` (`jdk.internal.misc.InnocuousThread`) |
|  3.3% |     471 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `NotificationThread::notification_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                         |
|  3.3% |     469 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `ServiceThread::service_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                   |
|  3.2% |     460 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `VMThread::wait_for_operation` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                          |
|  3.1% |     445 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ConcurrentMarkThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                         |
|  0.2% |      23 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                   |
|  0.1% |      18 | `Arena::contains` (`libjvm.dylib`) ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                     |
|  0.1% |      15 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThreads::run_task` (`libjvm.dylib`) ← `G1ConcurrentMark::mark_from_roots` ← `G1ConcurrentMarkThread::subphase_mark_from_roots` ← `G1ConcurrentMarkThread::phase_mark_loop` ← `G1ConcurrentMarkThread::concurrent_mark_cycle_do` ← `G1ConcurrentMarkThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                 |
