# Sampling profile

Collected 13,813 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Native           | 93.8% |  12,952 |
| Compiler         |  3.9% |     535 |
| Standard library |  2.1% |     296 |
| Ours             |  0.1% |      17 |
| JIT              |  0.1% |       8 |
| Unknown          | <0.1% |       5 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                   | Location                  |
| ----: | ------: | ------------------------------------------ | ------------------------- |
| 46.0% |   6,353 | `__psynch_cvwait`                          | `libsystem_kernel.dylib`  |
| 38.6% |   5,325 | `semaphore_wait_trap`                      | `libsystem_kernel.dylib`  |
|  3.3% |     452 | `__ulock_wait`                             | `libsystem_kernel.dylib`  |
|  3.3% |     452 | `mach_msg2_trap`                           | `libsystem_kernel.dylib`  |
|  0.2% |      28 | `__psynch_mutexwait`                       | `libsystem_kernel.dylib`  |
|  0.2% |      23 | `PhaseChaitin::Split`                      | `libjvm.dylib`            |
|  0.2% |      23 | `Node::dominates`                          | `libjvm.dylib`            |
|  0.1% |      17 | `tlv_get_addr`                             | `libdyld.dylib`           |
|  0.1% |      17 | `pthread_jit_write_protect_np`             | `libsystem_pthread.dylib` |
|  0.1% |      16 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib`            |
|  0.1% |      15 | `PhaseAggressiveCoalesce::insert_copies`   | `libjvm.dylib`            |
|  0.1% |      14 | `Arena::contains`                          | `libjvm.dylib`            |
|  0.1% |      13 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib`            |
|  0.1% |      12 | `newInstance(Class, int)`                  | `java.lang.reflect.Array` |
|  0.1% |      12 | `cast(Object)`                             | `java.lang.Class`         |
|  0.1% |      11 | `ciObjectFactory::get_metadata`            | `libjvm.dylib`            |
|  0.1% |      11 | `IndexSetIterator::advance_and_next`       | `libjvm.dylib`            |
|  0.1% |      11 | `PhaseChaitin::elide_copy`                 | `libjvm.dylib`            |
|  0.1% |      10 | `PhaseLive::compute`                       | `libjvm.dylib`            |
|  0.1% |       9 | `vmSymbols::find_sid`                      | `libjvm.dylib`            |

#### Categories

##### Native

|     % | Samples | Function                                                                                                                                                 | Location                   |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 46.0% |   6,353 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 38.6% |   5,325 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`   |
|  3.3% |     452 | `__ulock_wait`                                                                                                                                           | `libsystem_kernel.dylib`   |
|  3.3% |     452 | `mach_msg2_trap`                                                                                                                                         | `libsystem_kernel.dylib`   |
|  0.2% |      28 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
|  0.1% |      17 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
|  0.1% |      17 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
|  0.1% |      16 | `java_lang_Throwable::fill_in_stack_trace`                                                                                                               | `libjvm.dylib`             |
|  0.1% |      14 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`             |
|  0.1% |       9 | `vmSymbols::find_sid`                                                                                                                                    | `libjvm.dylib`             |
|  0.1% |       9 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                           | `libjvm.dylib`             |
|  0.1% |       8 | `posix_madvise`                                                                                                                                          | `libsystem_kernel.dylib`   |
| <0.1% |       6 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| <0.1% |       6 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
| <0.1% |       5 | `Dict::Insert`                                                                                                                                           | `libjvm.dylib`             |
| <0.1% |       5 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `libjvm.dylib`             |
| <0.1% |       5 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                   | `libjvm.dylib`             |
| <0.1% |       5 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object`                                                                                 | `libjvm.dylib`             |
| <0.1% |       5 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>`                                                   | `libjvm.dylib`             |
| <0.1% |       4 | `resource_allocate_bytes`                                                                                                                                | `libjvm.dylib`             |

##### Compiler

|     % | Samples | Function                                    | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
|  0.2% |      23 | `PhaseChaitin::Split`                       | `libjvm.dylib` |
|  0.2% |      23 | `Node::dominates`                           | `libjvm.dylib` |
|  0.1% |      15 | `PhaseAggressiveCoalesce::insert_copies`    | `libjvm.dylib` |
|  0.1% |      13 | `PhaseChaitin::build_ifg_physical`          | `libjvm.dylib` |
|  0.1% |      11 | `ciObjectFactory::get_metadata`             | `libjvm.dylib` |
|  0.1% |      11 | `IndexSetIterator::advance_and_next`        | `libjvm.dylib` |
|  0.1% |      11 | `PhaseChaitin::elide_copy`                  | `libjvm.dylib` |
|  0.1% |      10 | `PhaseLive::compute`                        | `libjvm.dylib` |
|  0.1% |       7 | `NodeHash::hash_find_insert`                | `libjvm.dylib` |
|  0.1% |       7 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
|  0.1% |       7 | `MultiNode::is_CFG`                         | `libjvm.dylib` |
| <0.1% |       6 | `MachNode::rematerialize`                   | `libjvm.dylib` |
| <0.1% |       6 | `PhaseChaitin::post_allocate_copy_removal`  | `libjvm.dylib` |
| <0.1% |       6 | `Node_Backward_Iterator::next`              | `libjvm.dylib` |
| <0.1% |       6 | `Node::set_req_X`                           | `libjvm.dylib` |
| <0.1% |       5 | `LIR_OpVisitState::visit`                   | `libjvm.dylib` |
| <0.1% |       5 | `Compile::identify_useful_nodes`            | `libjvm.dylib` |
| <0.1% |       5 | `PhaseIterGVN::subsume_node`                | `libjvm.dylib` |
| <0.1% |       5 | `PhaseIdealLoop::split_if_with_blocks`      | `libjvm.dylib` |
| <0.1% |       5 | `Type::cmp`                                 | `libjvm.dylib` |

##### Standard library

|     % | Samples | Function                                                                                    | Location                                                         |
| ----: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
|  0.1% |      12 | `newInstance(Class, int)`                                                                   | `java.lang.reflect.Array`                                        |
|  0.1% |      12 | `cast(Object)`                                                                              | `java.lang.Class`                                                |
| <0.1% |       5 | `collector(Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000000801031800`              |
| <0.1% |       4 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800`             |
| <0.1% |       4 | `invokeVirtual(Object, Object)`                                                             | `java.lang.invoke.DirectMethodHandle$Holder`                     |
| <0.1% |       4 | `equals(Object, Object)`                                                                    | `java.util.Objects`                                              |
| <0.1% |       4 | `resize()`                                                                                  | `java.util.HashMap`                                              |
| <0.1% |       4 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x00000008010a1000`              |
| <0.1% |       4 | `collector(Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x00000008010d3c00`              |
| <0.1% |       3 | `invokeStatic(Object, Object, Object)`                                                      | `java.lang.invoke.DirectMethodHandle$Holder`                     |
| <0.1% |       3 | `getNode(Object)`                                                                           | `java.util.HashMap`                                              |
| <0.1% |       3 | `newNode(int, Object, Object, HashMap$Node)`                                                | `java.util.HashMap`                                              |
| <0.1% |       3 | `invokeBasic(Object[])`                                                                     | `java.lang.invoke.MethodHandle`                                  |
| <0.1% |       3 | `computeIfAbsent(Object, Function)`                                                         | `java.util.concurrent.ConcurrentHashMap`                         |
| <0.1% |       3 | `sameClasses(Class[], Object[])`                                                            | `org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures` |
| <0.1% |       3 | `<init>(MethodType, LambdaForm)`                                                            | `java.lang.invoke.MethodHandle`                                  |
| <0.1% |       3 | `computeValueConversions(MethodType, MethodType, boolean, boolean)`                         | `java.lang.invoke.MethodHandleImpl`                              |
| <0.1% |       3 | `add(ATNConfig, PredictionContextCache)`                                                    | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`                 |
| <0.1% |       3 | `equals(Object)`                                                                            | `java.lang.String`                                               |
| <0.1% |       3 | `isNullConversion(Class, Class, boolean)`                                                   | `sun.invoke.util.VerifyType`                                     |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|      % | Samples | Location                     |
| -----: | ------: | ---------------------------- |
| 100.0% |      12 | `java.lang.reflect.Array:78` |

##### `cast(Object)` (`java.lang.Class`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |      12 | `java.lang.Class:4068` |

##### `equals(Object, Object)` (`java.util.Objects`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       4 | `java.util.Objects:64` |

##### `resize()` (`java.util.HashMap`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 50.0% |       2 | `java.util.HashMap:684` |
| 50.0% |       2 | `java.util.HashMap:711` |

##### `getNode(Object)` (`java.util.HashMap`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 66.7% |       2 | `java.util.HashMap:587` |
| 33.3% |       1 | `java.util.HashMap:585` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|      % | Samples | Location                 |
| -----: | ------: | ------------------------ |
| 100.0% |       3 | `java.util.HashMap:1909` |

##### `computeIfAbsent(Object, Function)` (`java.util.concurrent.ConcurrentHashMap`)

|     % | Samples | Location                                      |
| ----: | ------: | --------------------------------------------- |
| 33.3% |       1 | `java.util.concurrent.ConcurrentHashMap:1694` |
| 33.3% |       1 | `java.util.concurrent.ConcurrentHashMap:1721` |
| 33.3% |       1 | `java.util.concurrent.ConcurrentHashMap:1734` |

##### `sameClasses(Class[], Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures`)

|     % | Samples | Location                                                             |
| ----: | ------: | -------------------------------------------------------------------- |
| 66.7% |       2 | `org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures:226` |
| 33.3% |       1 | `org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures:224` |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Location                            |
| ----: | ------: | ----------------------------------- |
| 66.7% |       2 | `java.lang.invoke.MethodHandle:479` |
| 33.3% |       1 | `java.lang.invoke.MethodHandle:480` |

##### `computeValueConversions(MethodType, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

|     % | Samples | Location                                |
| ----: | ------: | --------------------------------------- |
| 66.7% |       2 | `java.lang.invoke.MethodHandleImpl:375` |
| 33.3% |       1 | `java.lang.invoke.MethodHandleImpl:368` |

##### `add(ATNConfig, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`)

|      % | Samples | Location                                             |
| -----: | ------: | ---------------------------------------------------- |
| 100.0% |       3 | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet:246` |

##### `equals(Object)` (`java.lang.String`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 66.7% |       2 | `java.lang.String:1850` |
| 33.3% |       1 | `java.lang.String:1847` |

##### `isNullConversion(Class, Class, boolean)` (`sun.invoke.util.VerifyType`)

|     % | Samples | Location                        |
| ----: | ------: | ------------------------------- |
| 33.3% |       1 | `sun.invoke.util.VerifyType:68` |
| 33.3% |       1 | `sun.invoke.util.VerifyType:73` |
| 33.3% |       1 | `sun.invoke.util.VerifyType:76` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location                 |
| ----: | ------: | ----------------------- | ------------------------ |
| 78.7% |   4,999 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  7.1% |     452 | `PlatformEvent::park`   | `libjvm.dylib`           |
|  7.1% |     451 | `Parker::park`          | `libjvm.dylib`           |
|  7.1% |     451 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 90.7% |   4,832 | `WorkerThread::run`              | `libjvm.dylib` |
|  8.5% |     452 | `os::signal_wait`                | `libjvm.dylib` |
|  0.6% |      31 | `WorkerThreads::run_task`        | `libjvm.dylib` |
|  0.2% |      10 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |

##### `__ulock_wait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |     452 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

|      % | Samples | Caller               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |     452 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |      28 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      23 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Node::dominates` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |      23 | `MemNode::all_controls_dominate` | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|    % | Samples | Caller                                        | Location       |
| ---: | ------: | --------------------------------------------- | -------------- |
| 5.9% |       1 | `ciSymbol::index_of_at`                       | `libjvm.dylib` |
| 5.9% |       1 | `LinearScan::append_scope_value_for_constant` | `libjvm.dylib` |
| 5.9% |       1 | `BlockBegin::BlockBegin`                      | `libjvm.dylib` |
| 5.9% |       1 | `ciMethodData::data_from`                     | `libjvm.dylib` |
| 5.9% |       1 | `GraphBuilder::invoke`                        | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 76.5% |      13 | `JVM_NewArray`                  | `libjvm.dylib` |
| 11.8% |       2 | `InterpreterRuntime::ldc`       | `libjvm.dylib` |
|  5.9% |       1 | `InterpreterRuntime::anewarray` | `libjvm.dylib` |
|  5.9% |       1 | `jni_GetStringLength`           | `libjvm.dylib` |

##### `java_lang_Throwable::fill_in_stack_trace` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |      16 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      15 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Arena::contains` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |      14 | `Matcher::xform` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      13 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|      % | Samples | Caller                              | Location                                             |
| -----: | ------: | ----------------------------------- | ---------------------------------------------------- |
| 100.0% |      12 | `invokeStatic(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000080102b400` |

##### `cast(Object)` (`java.lang.Class`)

|      % | Samples | Caller                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |      12 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 45.5% |       5 | `ciBytecodeStream::get_method`   | `libjvm.dylib` |
| 18.2% |       2 | `ciEnv::get_klass_by_index_impl` | `libjvm.dylib` |
|  9.1% |       1 | `ciObject::klass`                | `libjvm.dylib` |
|  9.1% |       1 | `ciMethod::ensure_method_data`   | `libjvm.dylib` |
|  9.1% |       1 | `ciCallTypeData::translate_from` | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 27.3% |       3 | `PhaseChaitin::Simplify`                       | `libjvm.dylib` |
| 18.2% |       2 | `PhaseChaitin::compute_initial_block_pressure` | `libjvm.dylib` |
| 18.2% |       2 | `PhaseIFG::re_insert`                          | `libjvm.dylib` |
| 18.2% |       2 | `PhaseChaitin::build_ifg_physical`             | `libjvm.dylib` |
|  9.1% |       1 | `PhaseIFG::remove_node`                        | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |      11 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      10 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `vmSymbols::find_sid` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |       9 | `ciObjectFactory::get_symbol` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                         | Location       |
| -----: | ------: | ---------------------------------------------- | -------------- |
| 100.0% |       9 | `void G1CMTask::process_grey_task_entry<true>` | `libjvm.dylib` |

##### `posix_madvise` (`libsystem_kernel.dylib`)

|      % | Samples | Caller        | Location                 |
| -----: | ------: | ------------- | ------------------------ |
| 100.0% |       8 | `free_medium` | `libsystem_malloc.dylib` |

##### `NodeHash::hash_find_insert` (`libjvm.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 57.1% |       4 | `PhaseIterGVN::transform_old`    | `libjvm.dylib` |
| 42.9% |       3 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       7 | `PhaseIdealLoop::build_loop_late` | `libjvm.dylib` |

##### `MultiNode::is_CFG` (`libjvm.dylib`)

|     % | Samples | Caller                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 71.4% |       5 | `PhaseIdealLoop::build_and_optimize`   | `libjvm.dylib` |
| 14.3% |       1 | `PhaseIdealLoop::try_sink_out_of_loop` | `libjvm.dylib` |
| 14.3% |       1 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       6 | `DebugInformationRecorder::describe_scope` | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|     % | Samples | Caller                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 16.7% |       1 | `PhaseCFG::global_code_motion`    | `libjvm.dylib` |
| 16.7% |       1 | `PhaseIdealLoop::build_loop_late` | `libjvm.dylib` |
| 16.7% |       1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 16.7% |       1 | `Matcher::match`                  | `libjvm.dylib` |
| 16.7% |       1 | `ConnectionGraph::split_AddP`     | `libjvm.dylib` |

##### `MachNode::rematerialize` (`libjvm.dylib`)

|     % | Samples | Caller                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 66.7% |       4 | `PhaseChaitin::Split`              | `libjvm.dylib` |
| 16.7% |       1 | `PhaseChaitin::Register_Allocate`  | `libjvm.dylib` |
| 16.7% |       1 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       6 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Node_Backward_Iterator::next` (`libjvm.dylib`)

|     % | Samples | Caller                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 50.0% |       3 | `PhaseCFG::schedule_late`      | `libjvm.dylib` |
| 50.0% |       3 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `Node::set_req_X` (`libjvm.dylib`)

|     % | Samples | Caller                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 83.3% |       5 | `Node::replace_edge`  | `libjvm.dylib` |
| 16.7% |       1 | `MergeMemNode::Ideal` | `libjvm.dylib` |

##### `Dict::Insert` (`libjvm.dylib`)

|     % | Samples | Caller                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 80.0% |       4 | `Type::hashcons`      | `libjvm.dylib` |
| 20.0% |       1 | `PhaseValues::intcon` | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       5 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                                                   | Location       |
| -----: | ------: | ------------------------------------------------------------------------ | -------------- |
| 100.0% |       5 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` | `libjvm.dylib` |

##### `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` (`libjvm.dylib`)

|     % | Samples | Caller                                                                             | Location       |
| ----: | ------: | ---------------------------------------------------------------------------------- | -------------- |
| 60.0% |       3 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb`  | `libjvm.dylib` |
| 40.0% |       2 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                                                   | Location       |
| -----: | ------: | ------------------------------------------------------------------------ | -------------- |
| 100.0% |       5 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` | `libjvm.dylib` |

##### `LIR_OpVisitState::visit` (`libjvm.dylib`)

|     % | Samples | Caller                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 40.0% |       2 | `LinearScan::compute_local_live_sets` | `libjvm.dylib` |
| 20.0% |       1 | `LinearScan::do_linear_scan`          | `libjvm.dylib` |
| 20.0% |       1 | `LinearScan::build_intervals`         | `libjvm.dylib` |
| 20.0% |       1 | `LinearScan::assign_reg_num`          | `libjvm.dylib` |

##### `Compile::identify_useful_nodes` (`libjvm.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 80.0% |       4 | `PhaseRemoveUseless::PhaseRemoveUseless`      | `libjvm.dylib` |
| 20.0% |       1 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |

##### `PhaseIterGVN::subsume_node` (`libjvm.dylib`)

|     % | Samples | Caller                                          | Location       |
| ----: | ------: | ----------------------------------------------- | -------------- |
| 60.0% |       3 | `PhaseIterGVN::transform_old`                   | `libjvm.dylib` |
| 20.0% |       1 | `PhaseMacroExpand::process_users_of_allocation` | `libjvm.dylib` |
| 20.0% |       1 | `PhaseIdealLoop::lazy_replace`                  | `libjvm.dylib` |

##### `PhaseIdealLoop::split_if_with_blocks` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       5 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Type::cmp` (`libjvm.dylib`)

|      % | Samples | Caller         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |       5 | `Dict::Insert` | `libjvm.dylib` |

##### `collector(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801031800`)

|     % | Samples | Caller                           | Location                                            |
| ----: | ------: | -------------------------------- | --------------------------------------------------- |
| 40.0% |       2 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010a9800` |
| 40.0% |       2 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000080108e000` |
| 20.0% |       1 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000080109b800` |

##### `resource_allocate_bytes` (`libjvm.dylib`)

|     % | Samples | Caller                              | Location       |
| ----: | ------: | ----------------------------------- | -------------- |
| 25.0% |       1 | `ValueStack::ValueStack`            | `libjvm.dylib` |
| 25.0% |       1 | `TypeInterfaces::intersection_with` | `libjvm.dylib` |
| 25.0% |       1 | `ResourceBitMap::ResourceBitMap`    | `libjvm.dylib` |
| 25.0% |       1 | `PhaseOutput::FillLocArray`         | `libjvm.dylib` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801088800`)

|      % | Samples | Caller                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |       4 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000080108e000` |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Caller                   | Location                                            |
| ----: | ------: | ------------------------ | --------------------------------------------------- |
| 75.0% |       3 | `invoke(Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000000801089400` |
| 25.0% |       1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000080102b000` |

##### `equals(Object, Object)` (`java.util.Objects`)

|      % | Samples | Caller           | Location                               |
| -----: | ------: | ---------------- | -------------------------------------- |
| 100.0% |       4 | `equals(Object)` | `jdk.internal.util.StrongReferenceKey` |

##### `resize()` (`java.util.HashMap`)

|      % | Samples | Caller                                          | Location            |
| -----: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% |       4 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `collector(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008010a1000`)

|     % | Samples | Caller                           | Location                                            |
| ----: | ------: | -------------------------------- | --------------------------------------------------- |
| 75.0% |       3 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010ab000` |
| 25.0% |       1 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008015b1c00` |

##### `collector(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008010d3c00`)

|     % | Samples | Caller                                   | Location                                            |
| ----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 75.0% |       3 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801189400` |
| 25.0% |       1 | `invoke(Object, Object, int, Object)`    | `java.lang.invoke.LambdaForm$MH.0x00000008013d8000` |

##### `invokeStatic(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Caller                                   | Location                                            |
| ----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 33.3% |       1 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000008010c6800` |
| 33.3% |       1 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000080109b800` |
| 33.3% |       1 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801188000` |

##### `getNode(Object)` (`java.util.HashMap`)

|     % | Samples | Caller        | Location                  |
| ----: | ------: | ------------- | ------------------------- |
| 66.7% |       2 | `get(Object)` | `java.util.LinkedHashMap` |
| 33.3% |       1 | `get(Object)` | `java.util.HashMap`       |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|      % | Samples | Caller                                          | Location            |
| -----: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% |       3 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `invokeBasic(Object[])` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Caller                                            | Location                                             |
| ----: | ------: | ------------------------------------------------- | ---------------------------------------------------- |
| 33.3% |       1 | `invokeStatic(Object, Object, Object)`            | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 33.3% |       1 | `linkToCallSite(Object, Object, Object, Object)`  | `java.lang.invoke.Invokers$Holder`                   |
| 33.3% |       1 | `invokeInterface(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801095c00` |

##### `computeIfAbsent(Object, Function)` (`java.util.concurrent.ConcurrentHashMap`)

|      % | Samples | Caller                | Location                            |
| -----: | ------: | --------------------- | ----------------------------------- |
| 100.0% |       3 | `findSpecies(Object)` | `java.lang.invoke.ClassSpecializer` |

##### `sameClasses(Class[], Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures`)

|      % | Samples | Caller                                 | Location                                     |
| -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% |       3 | `invokeStatic(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

|      % | Samples | Caller                           | Location                             |
| -----: | ------: | -------------------------------- | ------------------------------------ |
| 100.0% |       3 | `<init>(MethodType, LambdaForm)` | `java.lang.invoke.BoundMethodHandle` |

##### `computeValueConversions(MethodType, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

|      % | Samples | Caller                                                                    | Location                            |
| -----: | ------: | ------------------------------------------------------------------------- | ----------------------------------- |
| 100.0% |       3 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `add(ATNConfig, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`)

|     % | Samples | Caller                                                                                                        | Location                                               |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 66.7% |       2 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| 33.3% |       1 | `add(ATNConfig)`                                                                                              | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`       |

##### `equals(Object)` (`java.lang.String`)

|     % | Samples | Caller                                 | Location                                    |
| ----: | ------: | -------------------------------------- | ------------------------------------------- |
| 33.3% |       1 | `invokeMethod(Object, String, Object)` | `org.codehaus.groovy.runtime.InvokerHelper` |
| 33.3% |       1 | `getNode(Object)`                      | `java.util.HashMap`                         |
| 33.3% |       1 | `canBeCalledVirtual(MemberName)`       | `java.lang.invoke.MethodHandleNatives`      |

##### `isNullConversion(Class, Class, boolean)` (`sun.invoke.util.VerifyType`)

|     % | Samples | Caller                                                              | Location                            |
| ----: | ------: | ------------------------------------------------------------------- | ----------------------------------- |
| 66.7% |       2 | `valueConversion(Class, Class, boolean, boolean)`                   | `java.lang.invoke.MethodHandleImpl` |
| 33.3% |       1 | `computeValueConversions(MethodType, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                   | Location                  |
| ----: | ------: | ------------------------------------------ | ------------------------- |
| 83.6% |  11,550 | `_pthread_start`                           | `libsystem_pthread.dylib` |
| 83.6% |  11,550 | `thread_start`                             | `libsystem_pthread.dylib` |
| 80.3% |  11,097 | `Thread::call_run`                         | `libjvm.dylib`            |
| 80.3% |  11,097 | `thread_native_entry`                      | `libjvm.dylib`            |
| 46.0% |   6,353 | `__psynch_cvwait`                          | `libsystem_kernel.dylib`  |
| 38.6% |   5,325 | `semaphore_wait_trap`                      | `libsystem_kernel.dylib`  |
| 36.2% |   5,000 | `PlatformMonitor::wait`                    | `libjvm.dylib`            |
| 35.6% |   4,911 | `WorkerThread::run`                        | `libjvm.dylib`            |
| 28.4% |   3,926 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
| 25.9% |   3,573 | `Monitor::wait_without_safepoint_check`    | `libjvm.dylib`            |
| 12.1% |   1,673 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
| 10.3% |   1,427 | `Monitor::wait`                            | `libjvm.dylib`            |
|  9.8% |   1,356 | `ConcurrentGCThread::run`                  | `libjvm.dylib`            |
|  7.0% |     969 | `CompileQueue::get`                        | `libjvm.dylib`            |
|  6.5% |     904 | `JLI_Launch`                               | `libjli.dylib`            |
|  6.5% |     904 | `main`                                     | `java`                    |
|  5.1% |     704 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  4.2% |     577 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  4.2% |     576 | `Compile::Compile`                         | `libjvm.dylib`            |
|  3.3% |     459 | `unknown`                                  | `<unknown>`               |

#### Categories

##### Native

|     % | Samples | Function                                | Location                  |
| ----: | ------: | --------------------------------------- | ------------------------- |
| 83.6% |  11,550 | `_pthread_start`                        | `libsystem_pthread.dylib` |
| 83.6% |  11,550 | `thread_start`                          | `libsystem_pthread.dylib` |
| 80.3% |  11,097 | `Thread::call_run`                      | `libjvm.dylib`            |
| 80.3% |  11,097 | `thread_native_entry`                   | `libjvm.dylib`            |
| 46.0% |   6,353 | `__psynch_cvwait`                       | `libsystem_kernel.dylib`  |
| 38.6% |   5,325 | `semaphore_wait_trap`                   | `libsystem_kernel.dylib`  |
| 36.2% |   5,000 | `PlatformMonitor::wait`                 | `libjvm.dylib`            |
| 35.6% |   4,911 | `WorkerThread::run`                     | `libjvm.dylib`            |
| 28.4% |   3,926 | `JavaThread::thread_main_inner`         | `libjvm.dylib`            |
| 25.9% |   3,573 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib`            |
| 10.3% |   1,427 | `Monitor::wait`                         | `libjvm.dylib`            |
|  9.8% |   1,356 | `ConcurrentGCThread::run`               | `libjvm.dylib`            |
|  6.5% |     904 | `JLI_Launch`                            | `libjli.dylib`            |
|  6.5% |     904 | `main`                                  | `java`                    |
|  3.3% |     459 | `unknown`                               | `<unknown>`               |
|  3.3% |     452 | `__ulock_wait`                          | `libsystem_kernel.dylib`  |
|  3.3% |     452 | `CallJavaMainInNewThread`               | `libjli.dylib`            |
|  3.3% |     452 | `ContinueInNewThread`                   | `libjli.dylib`            |
|  3.3% |     452 | `apple_main`                            | `libjli.dylib`            |
|  3.3% |     452 | `mach_msg2_trap`                        | `libsystem_kernel.dylib`  |

##### Compiler

|     % | Samples | Function                                   | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 12.1% |   1,673 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
|  7.0% |     969 | `CompileQueue::get`                        | `libjvm.dylib` |
|  5.1% |     704 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  4.2% |     577 | `C2Compiler::compile_method`               | `libjvm.dylib` |
|  4.2% |     576 | `Compile::Compile`                         | `libjvm.dylib` |
|  2.0% |     280 | `Compile::Code_Gen`                        | `libjvm.dylib` |
|  1.6% |     217 | `Compile::Optimize`                        | `libjvm.dylib` |
|  1.2% |     162 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
|  0.9% |     122 | `Compilation::Compilation`                 | `libjvm.dylib` |
|  0.9% |     120 | `Compilation::compile_method`              | `libjvm.dylib` |
|  0.8% |     106 | `Compilation::compile_java_method`         | `libjvm.dylib` |
|  0.7% |      97 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|  0.6% |      88 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
|  0.6% |      88 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
|  0.6% |      78 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
|  0.5% |      75 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |
|  0.4% |      49 | `Compilation::build_hir`                   | `libjvm.dylib` |
|  0.3% |      45 | `Matcher::match`                           | `libjvm.dylib` |
|  0.3% |      38 | `GraphBuilder::GraphBuilder`               | `libjvm.dylib` |
|  0.3% |      38 | `PhaseChaitin::Split`                      | `libjvm.dylib` |

##### Standard library

|    % | Samples | Function                        | Location                                                                |
| ---: | ------: | ------------------------------- | ----------------------------------------------------------------------- |
| 3.3% |     452 | `wait0(long)`                   | `java.lang.Object`                                                      |
| 3.3% |     452 | `wait(long)`                    | `java.lang.Object`                                                      |
| 3.3% |     452 | `wait()`                        | `java.lang.Object`                                                      |
| 3.3% |     452 | `await()`                       | `java.lang.ref.NativeReferenceQueue`                                    |
| 3.3% |     452 | `remove0()`                     | `java.lang.ref.ReferenceQueue`                                          |
| 3.3% |     452 | `remove()`                      | `java.lang.ref.NativeReferenceQueue`                                    |
| 3.3% |     452 | `run()`                         | `java.lang.ref.Finalizer$FinalizerThread`                               |
| 3.3% |     452 | `waitForReferencePendingList()` | `java.lang.ref.Reference`                                               |
| 3.3% |     452 | `processPendingReferences()`    | `java.lang.ref.Reference`                                               |
| 3.3% |     452 | `run()`                         | `java.lang.ref.Reference$ReferenceHandler`                              |
| 3.3% |     451 | `park(boolean, long)`           | `jdk.internal.misc.Unsafe`                                              |
| 3.3% |     451 | `parkNanos(Object, long)`       | `java.util.concurrent.locks.LockSupport`                                |
| 3.3% |     451 | `await(long, TimeUnit)`         | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
| 3.3% |     451 | `await(long)`                   | `java.lang.ref.ReferenceQueue`                                          |
| 3.3% |     451 | `remove0(long)`                 | `java.lang.ref.ReferenceQueue`                                          |
| 3.3% |     451 | `remove(long)`                  | `java.lang.ref.ReferenceQueue`                                          |
| 3.3% |     451 | `run()`                         | `jdk.internal.ref.CleanerImpl`                                          |
| 3.3% |     451 | `runWith(Object, Runnable)`     | `java.lang.Thread`                                                      |
| 3.3% |     451 | `run()`                         | `java.lang.Thread`                                                      |
| 3.3% |     451 | `run()`                         | `jdk.internal.misc.InnocuousThread`                                     |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 96.1% |  11,097 | `thread_native_entry` | `libjvm.dylib` |
|  3.9% |     452 | `apple_main`          | `libjli.dylib` |
| <0.1% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |  11,550 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 44.3% |   4,911 | `WorkerThread::run`             | `libjvm.dylib` |
| 35.4% |   3,926 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| 12.2% |   1,356 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  4.1% |     452 | `WatcherThread::run`            | `libjvm.dylib` |
|  4.1% |     452 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |  11,097 | `Thread::call_run` | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|      % | Samples | Callee               | Location                  |
| -----: | ------: | -------------------- | ------------------------- |
| 100.0% |   4,999 | `__psynch_cvwait`    | `libsystem_kernel.dylib`  |
|  <0.1% |       1 | `_pthread_cond_wait` | `libsystem_pthread.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 98.4% |   4,832 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
|  0.5% |      24 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
|  0.5% |      23 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib`           |
|  0.4% |      19 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib`           |
|  0.2% |      11 | `G1ParallelCleaningTask::work`    | `libjvm.dylib`           |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                          | Location       |
| ----: | ------: | ----------------------------------------------- | -------------- |
| 42.6% |   1,673 | `CompileBroker::compiler_thread_loop`           | `libjvm.dylib` |
| 11.5% |     452 | `ServiceThread::service_thread_entry`           | `libjvm.dylib` |
| 11.5% |     452 | `signal_thread_entry`                           | `libjvm.dylib` |
| 11.5% |     451 | `NotificationThread::notification_thread_entry` | `libjvm.dylib` |
| 11.5% |     451 | `JvmtiAgentThread::start_function_wrapper`      | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |   3,573 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 57.9% |     969 | `CompileQueue::get`                        | `libjvm.dylib` |
| 42.1% |     704 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |   1,427 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 33.3% |     452 | `G1ConcurrentMarkThread::run_service`   | `libjvm.dylib` |
| 33.3% |     452 | `G1ServiceThread::run_service`          | `libjvm.dylib` |
| 33.3% |     452 | `G1ConcurrentRefineThread::run_service` | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|      % | Samples | Callee          | Location       |
| -----: | ------: | --------------- | -------------- |
| 100.0% |     969 | `Monitor::wait` | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 50.0% |     452 | `ContinueInNewThread`        | `libjli.dylib` |
| 50.0% |     452 | `CreateExecutionEnvironment` | `libjli.dylib` |

##### `main` (`java`)

|      % | Samples | Callee       | Location       |
| -----: | ------: | ------------ | -------------- |
| 100.0% |     904 | `JLI_Launch` | `libjli.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 82.0% |     577 | `C2Compiler::compile_method`    | `libjvm.dylib` |
| 17.5% |     123 | `Compiler::compile_method`      | `libjvm.dylib` |
|  0.3% |       2 | `ciEnv::ciEnv`                  | `libjvm.dylib` |
|  0.1% |       1 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |
|  0.1% |       1 | `ciEnv::~ciEnv`                 | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee             | Location       |
| ----: | ------: | ------------------ | -------------- |
| 99.8% |     576 | `Compile::Compile` | `libjvm.dylib` |
|  0.2% |       1 | `Chunk::next_chop` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 48.6% |     280 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 37.7% |     217 | `Compile::Optimize`                      | `libjvm.dylib` |
| 12.3% |      71 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  1.2% |       7 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.2% |       1 | `Compile::inline_string_calls`           | `libjvm.dylib` |

##### `unknown` (`<unknown>`)

|     % | Samples | Callee                                                                                                        | Location                                               |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 98.5% |     452 | `main`                                                                                                        | `java`                                                 |
|  0.7% |       3 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`                 | `org.codehaus.groovy.vmplugin.v8.IndyInterface`        |
|  0.2% |       1 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
|  0.2% |       1 | `invoke(Object, Object, Object)`                                                                              | `java.lang.invoke.LambdaForm$MH.0x000000080150e800`    |
|  0.2% |       1 | `invoke(Object, Object)`                                                                                      | `java.lang.invoke.LambdaForm$MH.0x00000008015ac400`    |

##### `CallJavaMainInNewThread` (`libjli.dylib`)

|      % | Samples | Callee         | Location                 |
| -----: | ------: | -------------- | ------------------------ |
| 100.0% |     452 | `__ulock_wait` | `libsystem_kernel.dylib` |

##### `ContinueInNewThread` (`libjli.dylib`)

|      % | Samples | Callee                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |     452 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `apple_main` (`libjli.dylib`)

|      % | Samples | Callee | Location |
| -----: | ------: | ------ | -------- |
| 100.0% |     452 | `main` | `java`   |

##### `wait0(long)` (`java.lang.Object`)

|      % | Samples | Callee            | Location       |
| -----: | ------: | ----------------- | -------------- |
| 100.0% |     452 | `JVM_MonitorWait` | `libjvm.dylib` |

##### `wait(long)` (`java.lang.Object`)

|      % | Samples | Callee        | Location           |
| -----: | ------: | ------------- | ------------------ |
| 100.0% |     452 | `wait0(long)` | `java.lang.Object` |

##### `wait()` (`java.lang.Object`)

|      % | Samples | Callee       | Location           |
| -----: | ------: | ------------ | ------------------ |
| 100.0% |     452 | `wait(long)` | `java.lang.Object` |

##### `await()` (`java.lang.ref.NativeReferenceQueue`)

|      % | Samples | Callee   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |     452 | `wait()` | `java.lang.Object` |

##### `remove0()` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee    | Location                             |
| -----: | ------: | --------- | ------------------------------------ |
| 100.0% |     452 | `await()` | `java.lang.ref.NativeReferenceQueue` |

##### `remove()` (`java.lang.ref.NativeReferenceQueue`)

|      % | Samples | Callee      | Location                       |
| -----: | ------: | ----------- | ------------------------------ |
| 100.0% |     452 | `remove0()` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`java.lang.ref.Finalizer$FinalizerThread`)

|      % | Samples | Callee     | Location                             |
| -----: | ------: | ---------- | ------------------------------------ |
| 100.0% |     452 | `remove()` | `java.lang.ref.NativeReferenceQueue` |

##### `waitForReferencePendingList()` (`java.lang.ref.Reference`)

|      % | Samples | Callee                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |     452 | `JVM_WaitForReferencePendingList` | `libjvm.dylib` |

##### `processPendingReferences()` (`java.lang.ref.Reference`)

|      % | Samples | Callee                          | Location                  |
| -----: | ------: | ------------------------------- | ------------------------- |
| 100.0% |     452 | `waitForReferencePendingList()` | `java.lang.ref.Reference` |

##### `run()` (`java.lang.ref.Reference$ReferenceHandler`)

|      % | Samples | Callee                       | Location                  |
| -----: | ------: | ---------------------------- | ------------------------- |
| 100.0% |     452 | `processPendingReferences()` | `java.lang.ref.Reference` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|      % | Samples | Callee        | Location       |
| -----: | ------: | ------------- | -------------- |
| 100.0% |     451 | `Unsafe_Park` | `libjvm.dylib` |

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

|      % | Samples | Callee                | Location                   |
| -----: | ------: | --------------------- | -------------------------- |
| 100.0% |     451 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

|      % | Samples | Callee                    | Location                                 |
| -----: | ------: | ------------------------- | ---------------------------------------- |
| 100.0% |     451 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `await(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee                  | Location                                                                |
| -----: | ------: | ----------------------- | ----------------------------------------------------------------------- |
| 100.0% |     451 | `await(long, TimeUnit)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `remove0(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee        | Location                       |
| -----: | ------: | ------------- | ------------------------------ |
| 100.0% |     451 | `await(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee          | Location                       |
| -----: | ------: | --------------- | ------------------------------ |
| 100.0% |     451 | `remove0(long)` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`jdk.internal.ref.CleanerImpl`)

|      % | Samples | Callee         | Location                       |
| -----: | ------: | -------------- | ------------------------------ |
| 100.0% |     451 | `remove(long)` | `java.lang.ref.ReferenceQueue` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % | Samples | Callee  | Location                       |
| -----: | ------: | ------- | ------------------------------ |
| 100.0% |     451 | `run()` | `jdk.internal.ref.CleanerImpl` |

##### `run()` (`java.lang.Thread`)

|      % | Samples | Callee                      | Location           |
| -----: | ------: | --------------------------- | ------------------ |
| 100.0% |     451 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `run()` (`jdk.internal.misc.InnocuousThread`)

|      % | Samples | Callee  | Location           |
| -----: | ------: | ------- | ------------------ |
| 100.0% |     451 | `run()` | `java.lang.Thread` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 57.9% |     162 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 16.1% |      45 | `Matcher::match`                  | `libjvm.dylib` |
| 12.5% |      35 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
| 11.1% |      31 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  1.4% |       4 | `PhaseOutput::install_code`       | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 28.6% |      62 | `PhaseIdealLoop::optimize`      | `libjvm.dylib` |
| 20.7% |      45 | `PhaseIterGVN::optimize`        | `libjvm.dylib` |
| 16.1% |      35 | `Compile::optimize_loops`       | `libjvm.dylib` |
|  8.3% |      18 | `Compile::inline_incrementally` | `libjvm.dylib` |
|  6.0% |      13 | `PhaseCCP::PhaseCCP`            | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 23.5% |      38 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| 19.1% |      31 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| 10.5% |      17 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  9.3% |      15 | `PhaseAggressiveCoalesce::insert_copies`   | `libjvm.dylib` |
|  8.0% |      13 | `PhaseLive::compute`                       | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|     % | Samples | Callee                                               | Location       |
| ----: | ------: | ---------------------------------------------------- | -------------- |
| 98.4% |     120 | `Compilation::compile_method`                        | `libjvm.dylib` |
|  0.8% |       1 | `DebugInformationRecorder::DebugInformationRecorder` | `libjvm.dylib` |
|  0.8% |       1 | `ciMethodData::set_would_profile`                    | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 88.3% |     106 | `Compilation::compile_java_method` | `libjvm.dylib` |
| 10.8% |      13 | `ciEnv::register_method`           | `libjvm.dylib` |
|  0.8% |       1 | `Dependencies::assert_common_1`    | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 46.2% |      49 | `Compilation::build_hir`       | `libjvm.dylib` |
| 34.0% |      36 | `Compilation::emit_lir`        | `libjvm.dylib` |
| 18.9% |      20 | `Compilation::emit_code_body`  | `libjvm.dylib` |
|  0.9% |       1 | `ciMethod::ensure_method_data` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 90.7% |      88 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  9.3% |       9 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 28.4% |      25 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 25.0% |      22 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
|  9.1% |       8 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
|  8.0% |       7 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
|  5.7% |       5 | `MultiNode::is_CFG`                    | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Callee                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      88 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 96.2% |      75 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |
|  1.3% |       1 | `RegionNode::hash`            | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 26.7% |      20 | `StoreNode::Ideal`           | `libjvm.dylib` |
| 20.0% |      15 | `PhaseIterGVN::subsume_node` | `libjvm.dylib` |
|  6.7% |       5 | `LoadNode::Ideal`            | `libjvm.dylib` |
|  5.3% |       4 | `NodeHash::hash_find_insert` | `libjvm.dylib` |
|  5.3% |       4 | `RegionNode::Ideal`          | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|     % | Samples | Callee                                       | Location       |
| ----: | ------: | -------------------------------------------- | -------------- |
| 77.6% |      38 | `IR::IR`                                     | `libjvm.dylib` |
| 10.2% |       5 | `IR::eliminate_null_checks`                  | `libjvm.dylib` |
|  4.1% |       2 | `RangeCheckElimination::eliminate`           | `libjvm.dylib` |
|  4.1% |       2 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |
|  2.0% |       1 | `NewInstance::visit`                         | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 73.3% |      33 | `Matcher::xform`                              | `libjvm.dylib` |
| 13.3% |       6 | `Matcher::find_shared`                        | `libjvm.dylib` |
|  6.7% |       3 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |
|  2.2% |       1 | `MemBarAcquireNode::Opcode`                   | `libjvm.dylib` |
|  2.2% |       1 | `ProjNode::Opcode`                            | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 89.5% |      34 | `GraphBuilder::iterate_all_blocks`   | `libjvm.dylib` |
|  7.9% |       3 | `BlockListBuilder::BlockListBuilder` | `libjvm.dylib` |
|  2.6% |       1 | `BlockBegin::iterate_preorder`       | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 15.8% |       6 | `MachNode::rematerialize`              | `libjvm.dylib` |
|  2.6% |       1 | `MachNode::in_RegMask`                 | `libjvm.dylib` |
|  2.6% |       1 | `MachSpillCopyNode::MachSpillCopyNode` | `libjvm.dylib` |
|  2.6% |       1 | `Node::rematerialize`                  | `libjvm.dylib` |
|  2.6% |       1 | `PhaseChaitin::split_Rematerialize`    | `libjvm.dylib` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 35.0% |   4,832 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`) ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                       |
|  7.0% |     968 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                     |
|  3.3% |     452 | `__ulock_wait` (`libsystem_kernel.dylib`) ← `CallJavaMainInNewThread` (`libjli.dylib`) ← `ContinueInNewThread` ← `JLI_Launch` ← `main` (`java`) ← `apple_main` (`libjli.dylib`) ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                            |
|  3.3% |     452 | `mach_msg2_trap` (`libsystem_kernel.dylib`) ← `mach_msg_overwrite` ← `mach_msg` ← `__CFRunLoopServiceMachPort` (`CoreFoundation`) ← `__CFRunLoopRun` ← `CFRunLoopRunSpecific` ← `CreateExecutionEnvironment` (`libjli.dylib`) ← `JLI_Launch` ← `main` (`java`) ← `unknown`                                                                                                                                                                                                                                                                                                 |
|  3.3% |     452 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `WatcherThread::sleep` ← `WatcherThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                             |
|  3.3% |     452 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `os::signal_wait` (`libjvm.dylib`) ← `signal_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                               |
|  3.3% |     452 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ServiceThread::wait_for_task` ← `G1ServiceThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                             |
|  3.3% |     452 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformEvent::park` (`libjvm.dylib`) ← `ObjectMonitor::wait` ← `ObjectSynchronizer::wait` ← `JVM_MonitorWait` ← `wait0(long)` (`java.lang.Object`) ← `wait(long)` ← `wait()` ← `await()` (`java.lang.ref.NativeReferenceQueue`) ← `remove0()` (`java.lang.ref.ReferenceQueue`) ← `remove()` (`java.lang.ref.NativeReferenceQueue`) ← `run()` (`java.lang.ref.Finalizer$FinalizerThread`)                                                                                                                                  |
|  3.3% |     452 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `JVM_WaitForReferencePendingList` ← `waitForReferencePendingList()` (`java.lang.ref.Reference`) ← `processPendingReferences()` ← `run()` (`java.lang.ref.Reference$ReferenceHandler`)                                                                                                                                                                                                                                                                          |
|  3.3% |     451 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `NotificationThread::notification_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                         |
|  3.3% |     451 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `await(long)` (`java.lang.ref.ReferenceQueue`) ← `remove0(long)` ← `remove(long)` ← `run()` (`jdk.internal.ref.CleanerImpl`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` ← `run()` (`jdk.internal.misc.InnocuousThread`) |
|  3.3% |     451 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Profiler::timerLoop` (`libasyncProfiler.dylib`) ← `JvmtiAgentThread::start_function_wrapper` (`libjvm.dylib`) ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                               |
|  3.3% |     450 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` ← `G1ConcurrentRefineThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                       |
|  3.2% |     447 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `MonitorDeflationThread::monitor_deflation_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                |
|  3.2% |     446 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `ServiceThread::service_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                   |
|  3.2% |     443 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `VMThread::wait_for_operation` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                          |
|  3.1% |     426 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ConcurrentMarkThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                         |
|  0.2% |      23 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                   |
|  0.1% |      15 | `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                |
|  0.1% |      14 | `Arena::contains` (`libjvm.dylib`) ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                     |
