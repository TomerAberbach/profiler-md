# Sampling profile

Collected 13,896 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Native            | 93.9% |  13,054 |
| Compiler          |  3.5% |     492 |
| Standard library  |  2.3% |     325 |
| Ours              |  0.1% |      14 |
| JIT               |  0.1% |      10 |
| Garbage collector | <0.1% |       1 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                                                                                                                                 | Location                  |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| 46.0% |   6,390 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`  |
| 39.2% |   5,449 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`  |
|  3.3% |     459 | `__ulock_wait`                                                                                                                                           | `libsystem_kernel.dylib`  |
|  3.3% |     459 | `mach_msg2_trap`                                                                                                                                         | `libsystem_kernel.dylib`  |
|  0.2% |      26 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib` |
|  0.2% |      25 | `Node::dominates`                                                                                                                                        | `libjvm.dylib`            |
|  0.1% |      19 | `cast(Object)`                                                                                                                                           | `java.lang.Class`         |
|  0.1% |      18 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`           |
|  0.1% |      17 | `IndexSetIterator::advance_and_next`                                                                                                                     | `libjvm.dylib`            |
|  0.1% |      17 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`            |
|  0.1% |      17 | `PhaseChaitin::Split`                                                                                                                                    | `libjvm.dylib`            |
|  0.1% |      13 | `java_lang_Throwable::fill_in_stack_trace`                                                                                                               | `libjvm.dylib`            |
|  0.1% |      12 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`  |
|  0.1% |      12 | `newInstance(Class, int)`                                                                                                                                | `java.lang.reflect.Array` |
|  0.1% |      11 | `PhaseChaitin::gather_lrg_masks`                                                                                                                         | `libjvm.dylib`            |
|  0.1% |      11 | `PhaseChaitin::build_ifg_physical`                                                                                                                       | `libjvm.dylib`            |
|  0.1% |      10 | `PhaseAggressiveCoalesce::insert_copies`                                                                                                                 | `libjvm.dylib`            |
|  0.1% |       9 | `PhaseOutput::BuildOopMaps`                                                                                                                              | `libjvm.dylib`            |
|  0.1% |       8 | `PhaseChaitin::elide_copy`                                                                                                                               | `libjvm.dylib`            |
|  0.1% |       8 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`            |

#### Categories

##### Native

|     % | Samples | Function                                                                                                                                                 | Location                   |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 46.0% |   6,390 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 39.2% |   5,449 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`   |
|  3.3% |     459 | `__ulock_wait`                                                                                                                                           | `libsystem_kernel.dylib`   |
|  3.3% |     459 | `mach_msg2_trap`                                                                                                                                         | `libsystem_kernel.dylib`   |
|  0.2% |      26 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
|  0.1% |      18 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
|  0.1% |      17 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`             |
|  0.1% |      13 | `java_lang_Throwable::fill_in_stack_trace`                                                                                                               | `libjvm.dylib`             |
|  0.1% |      12 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
|  0.1% |       8 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| <0.1% |       5 | `nmethod::is_unloading`                                                                                                                                  | `libjvm.dylib`             |
| <0.1% |       5 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
| <0.1% |       5 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
| <0.1% |       4 | `Dictionary::find`                                                                                                                                       | `libjvm.dylib`             |
| <0.1% |       4 | `__psynch_mutexdrop`                                                                                                                                     | `libsystem_kernel.dylib`   |
| <0.1% |       4 | `sys_icache_invalidate`                                                                                                                                  | `libsystem_platform.dylib` |
| <0.1% |       4 | `nmethodBucket::next_not_unloading`                                                                                                                      | `libjvm.dylib`             |
| <0.1% |       4 | `_platform_memmove`                                                                                                                                      | `libsystem_platform.dylib` |
| <0.1% |       4 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `libjvm.dylib`             |
| <0.1% |       3 | `GrowableArrayWithAllocator<int, GrowableArray<int>>::expand_to`                                                                                         | `libjvm.dylib`             |

##### Compiler

|     % | Samples | Function                                             | Location       |
| ----: | ------: | ---------------------------------------------------- | -------------- |
|  0.2% |      25 | `Node::dominates`                                    | `libjvm.dylib` |
|  0.1% |      17 | `IndexSetIterator::advance_and_next`                 | `libjvm.dylib` |
|  0.1% |      17 | `PhaseChaitin::Split`                                | `libjvm.dylib` |
|  0.1% |      11 | `PhaseChaitin::gather_lrg_masks`                     | `libjvm.dylib` |
|  0.1% |      11 | `PhaseChaitin::build_ifg_physical`                   | `libjvm.dylib` |
|  0.1% |      10 | `PhaseAggressiveCoalesce::insert_copies`             | `libjvm.dylib` |
|  0.1% |       9 | `PhaseOutput::BuildOopMaps`                          | `libjvm.dylib` |
|  0.1% |       8 | `PhaseChaitin::elide_copy`                           | `libjvm.dylib` |
|  0.1% |       8 | `PhaseIdealLoop::is_dominator`                       | `libjvm.dylib` |
|  0.1% |       7 | `PhaseIdealLoop::build_loop_late_post_work`          | `libjvm.dylib` |
|  0.1% |       7 | `PhaseLive::compute`                                 | `libjvm.dylib` |
| <0.1% |       5 | `Compile::identify_useful_nodes`                     | `libjvm.dylib` |
| <0.1% |       5 | `PhaseIterGVN::subsume_node`                         | `libjvm.dylib` |
| <0.1% |       5 | `Matcher::match_tree`                                | `libjvm.dylib` |
| <0.1% |       5 | `MachNode::rematerialize`                            | `libjvm.dylib` |
| <0.1% |       5 | `PhaseIdealLoop::build_loop_early`                   | `libjvm.dylib` |
| <0.1% |       5 | `Node_Backward_Iterator::next`                       | `libjvm.dylib` |
| <0.1% |       5 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `libjvm.dylib` |
| <0.1% |       5 | `Node::set_req_X`                                    | `libjvm.dylib` |
| <0.1% |       4 | `PhaseIdealLoop::build_loop_late`                    | `libjvm.dylib` |

##### Standard library

|     % | Samples | Function                                                                                                      | Location                                                |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|  0.1% |      19 | `cast(Object)`                                                                                                | `java.lang.Class`                                       |
|  0.1% |      12 | `newInstance(Class, int)`                                                                                     | `java.lang.reflect.Array`                               |
|  0.1% |       8 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800`    |
|  0.1% |       7 | `invokeBasic(Object[])`                                                                                       | `java.lang.invoke.MethodHandle`                         |
| <0.1% |       6 | `invokeVirtual(Object, Object)`                                                                               | `java.lang.invoke.DirectMethodHandle$Holder`            |
| <0.1% |       6 | `getNode(Object)`                                                                                             | `java.util.HashMap`                                     |
| <0.1% |       5 | `<init>(MethodType, LambdaForm)`                                                                              | `java.lang.invoke.MethodHandle`                         |
| <0.1% |       5 | `collector(Object, Object, Object)`                                                                           | `java.lang.invoke.LambdaForm$MH.0x00000008010a1000`     |
| <0.1% |       4 | `invoke(Object, int)`                                                                                         | `java.lang.invoke.LambdaForm$MH.0x0000000801031400`     |
| <0.1% |       4 | `collector(Object, Object)`                                                                                   | `java.lang.invoke.LambdaForm$MH.0x0000000801031800`     |
| <0.1% |       4 | `invoke(Object, Object)`                                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000080102ac00`     |
| <0.1% |       4 | `getMethods(Class, String)`                                                                                   | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |
| <0.1% |       4 | `equals(Object, Object)`                                                                                      | `java.util.Objects`                                     |
| <0.1% |       3 | `doWithCallSite(MutableCallSite, Object[], BiFunction)`                                                       | `org.codehaus.groovy.vmplugin.v8.IndyInterface`         |
| <0.1% |       3 | `invokeSpecial(Object, Object, Object)`                                                                       | `java.lang.invoke.DirectMethodHandle$Holder`            |
| <0.1% |       3 | `add(ATNConfig, PredictionContextCache)`                                                                      | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`        |
| <0.1% |       3 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`  |
| <0.1% |       3 | `hashCode()`                                                                                                  | `java.lang.invoke.MethodType`                           |
| <0.1% |       3 | `divideOneWord(int, MutableBigInteger)`                                                                       | `java.math.MutableBigInteger`                           |
| <0.1% |       3 | `equals(Object[], Object[])`                                                                                  | `java.util.Arrays`                                      |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `cast(Object)` (`java.lang.Class`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |      19 | `java.lang.Class:4068` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|      % | Samples | Location                     |
| -----: | ------: | ---------------------------- |
| 100.0% |      12 | `java.lang.reflect.Array:78` |

##### `getNode(Object)` (`java.util.HashMap`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 33.3% |       2 | `java.util.HashMap:582` |
| 16.7% |       1 | `java.util.HashMap:575` |
| 16.7% |       1 | `java.util.HashMap:587` |
| 16.7% |       1 | `java.util.HashMap:576` |
| 16.7% |       1 | `java.util.HashMap:585` |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Location                            |
| ----: | ------: | ----------------------------------- |
| 60.0% |       3 | `java.lang.invoke.MethodHandle:479` |
| 40.0% |       2 | `java.lang.invoke.MethodHandle:480` |

##### `getMethods(Class, String)` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

|      % | Samples | Location                                                    |
| -----: | ------: | ----------------------------------------------------------- |
| 100.0% |       4 | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex:202` |

##### `equals(Object, Object)` (`java.util.Objects`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       4 | `java.util.Objects:64` |

##### `doWithCallSite(MutableCallSite, Object[], BiFunction)` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|      % | Samples | Location                                            |
| -----: | ------: | --------------------------------------------------- |
| 100.0% |       3 | `org.codehaus.groovy.vmplugin.v8.IndyInterface:376` |

##### `add(ATNConfig, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`)

|     % | Samples | Location                                             |
| ----: | ------: | ---------------------------------------------------- |
| 66.7% |       2 | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet:246` |
| 33.3% |       1 | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet:265` |

##### `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|     % | Samples | Location                                                    |
| ----: | ------: | ----------------------------------------------------------- |
| 33.3% |       1 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1847` |
| 33.3% |       1 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1716` |
| 33.3% |       1 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1759` |

##### `hashCode()` (`java.lang.invoke.MethodType`)

|      % | Samples | Location                          |
| -----: | ------: | --------------------------------- |
| 100.0% |       3 | `java.lang.invoke.MethodType:924` |

##### `divideOneWord(int, MutableBigInteger)` (`java.math.MutableBigInteger`)

|     % | Samples | Location                           |
| ----: | ------: | ---------------------------------- |
| 66.7% |       2 | `java.math.MutableBigInteger:1112` |
| 33.3% |       1 | `java.math.MutableBigInteger:1138` |

##### `equals(Object[], Object[])` (`java.util.Arrays`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 33.3% |       1 | `java.util.Arrays:2979` |
| 33.3% |       1 | `java.util.Arrays:2980` |
| 33.3% |       1 | `java.util.Arrays:2975` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location                 |
| ----: | ------: | ----------------------- | ------------------------ |
| 78.5% |   5,014 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  7.2% |     459 | `PlatformEvent::park`   | `libjvm.dylib`           |
|  7.2% |     459 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |
|  7.2% |     458 | `Parker::park`          | `libjvm.dylib`           |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 90.9% |   4,952 | `WorkerThread::run`              | `libjvm.dylib` |
|  8.4% |     459 | `os::signal_wait`                | `libjvm.dylib` |
|  0.4% |      20 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |
|  0.3% |      18 | `WorkerThreads::run_task`        | `libjvm.dylib` |

##### `__ulock_wait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |     459 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

|      % | Samples | Caller               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |     459 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                     | Location                               |
| ----: | ------: | -------------------------- | -------------------------------------- |
| 73.1% |      19 | `JVM_NewArray`             | `libjvm.dylib`                         |
|  7.7% |       2 | `init(MemberName, Object)` | `java.lang.invoke.MethodHandleNatives` |
|  3.8% |       1 | `jni_IsAssignableFrom`     | `libjvm.dylib`                         |
|  3.8% |       1 | `JVM_GetCallerClass`       | `libjvm.dylib`                         |
|  3.8% |       1 | `JVM_FillInStackTrace`     | `libjvm.dylib`                         |

##### `Node::dominates` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |      25 | `MemNode::all_controls_dominate` | `libjvm.dylib` |

##### `cast(Object)` (`java.lang.Class`)

|      % | Samples | Caller                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |      19 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `tlv_get_addr` (`libdyld.dylib`)

|     % | Samples | Caller                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 11.1% |       2 | `ciEnv::get_klass_by_name_impl` | `libjvm.dylib` |
| 11.1% |       2 | `TypeInstPtr::make`             | `libjvm.dylib` |
|  5.6% |       1 | `PhaseIterGVN::subsume_node`    | `libjvm.dylib` |
|  5.6% |       1 | `DataLayout::cell_count`        | `libjvm.dylib` |
|  5.6% |       1 | `LinearScan::add_temp`          | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                                                             | Location       |
| ----: | ------: | ------------------------------------------------------------------ | -------------- |
| 35.3% |       6 | `PhaseChaitin::build_ifg_physical`                                 | `libjvm.dylib` |
| 11.8% |       2 | `PhaseChaitin::Simplify`                                           | `libjvm.dylib` |
| 11.8% |       2 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `libjvm.dylib` |
| 11.8% |       2 | `PhaseIFG::remove_node`                                            | `libjvm.dylib` |
| 11.8% |       2 | `PhaseIFG::effective_degree`                                       | `libjvm.dylib` |

##### `Arena::contains` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |      17 | `Matcher::xform` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      17 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `java_lang_Throwable::fill_in_stack_trace` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |      13 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |      12 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|      % | Samples | Caller                              | Location                                             |
| -----: | ------: | ----------------------------------- | ---------------------------------------------------- |
| 100.0% |      12 | `invokeStatic(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000080102b400` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      11 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      11 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      10 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseOutput::BuildOopMaps` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |       9 | `PhaseOutput::Output` | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       8 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 87.5% |       7 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
| 12.5% |       1 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |

##### `PhaseIdealLoop::is_dominator` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 75.0% |       6 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep`      | `libjvm.dylib` |
| 12.5% |       1 | `PhaseIdealLoop::compute_early_ctrl`               | `libjvm.dylib` |
| 12.5% |       1 | `PhaseIdealLoop::loop_predication_follow_branches` | `libjvm.dylib` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801088800`)

|     % | Samples | Caller                                   | Location                                            |
| ----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 50.0% |       4 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000080108e000` |
| 25.0% |       2 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000008010c8000` |
| 12.5% |       1 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010d5c00` |
| 12.5% |       1 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000080109b400` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       7 | `PhaseIdealLoop::build_loop_late` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       7 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `invokeBasic(Object[])` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Caller                                   | Location                                            |
| ----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 14.3% |       1 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000080102ac00` |
| 14.3% |       1 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
| 14.3% |       1 | `linkToCallSite(int, int, Object)`       | `java.lang.invoke.Invokers$Holder`                  |
| 14.3% |       1 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000000801121800` |
| 14.3% |       1 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000008010aa400` |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Caller                           | Location                                            |
| ----: | ------: | -------------------------------- | --------------------------------------------------- |
| 83.3% |       5 | `invoke(Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000801089400` |
| 16.7% |       1 | `guardWithCatch(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801098400` |

##### `getNode(Object)` (`java.util.HashMap`)

|     % | Samples | Caller        | Location                  |
| ----: | ------: | ------------- | ------------------------- |
| 66.7% |       4 | `get(Object)` | `java.util.HashMap`       |
| 33.3% |       2 | `get(Object)` | `java.util.LinkedHashMap` |

##### `nmethod::is_unloading` (`libjvm.dylib`)

|     % | Samples | Caller                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 80.0% |       4 | `DependencyContext::add_dependent_nmethod` | `libjvm.dylib` |
| 20.0% |       1 | `nmethodBucket::next_not_unloading`        | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|     % | Samples | Caller                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 20.0% |       1 | `Matcher::match_tree`        | `libjvm.dylib` |
| 20.0% |       1 | `PhaseCFG::schedule_late`    | `libjvm.dylib` |
| 20.0% |       1 | `Parse::create_entry_map`    | `libjvm.dylib` |
| 20.0% |       1 | `MemAllocator::allocate`     | `libjvm.dylib` |
| 20.0% |       1 | `G1RemSet::merge_heap_roots` | `libjvm.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|      % | Samples | Caller                                  | Location       |
| -----: | ------: | --------------------------------------- | -------------- |
| 100.0% |       5 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |

##### `Compile::identify_useful_nodes` (`libjvm.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 80.0% |       4 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |
| 20.0% |       1 | `PhaseRemoveUseless::PhaseRemoveUseless`      | `libjvm.dylib` |

##### `PhaseIterGVN::subsume_node` (`libjvm.dylib`)

|     % | Samples | Caller                                          | Location       |
| ----: | ------: | ----------------------------------------------- | -------------- |
| 80.0% |       4 | `PhaseIterGVN::transform_old`                   | `libjvm.dylib` |
| 20.0% |       1 | `PhaseMacroExpand::process_users_of_allocation` | `libjvm.dylib` |

##### `Matcher::match_tree` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       5 | `Matcher::xform` | `libjvm.dylib` |

##### `MachNode::rematerialize` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |       5 | `PhaseChaitin::Split` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       5 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Node_Backward_Iterator::next` (`libjvm.dylib`)

|     % | Samples | Caller                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 80.0% |       4 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |
| 20.0% |       1 | `PhaseCFG::schedule_late`      | `libjvm.dylib` |

##### `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |       5 | `PhaseIdealLoop::compute_lca_of_uses` | `libjvm.dylib` |

##### `Node::set_req_X` (`libjvm.dylib`)

|     % | Samples | Caller                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 80.0% |       4 | `Node::replace_edge`  | `libjvm.dylib` |
| 20.0% |       1 | `MergeMemNode::Ideal` | `libjvm.dylib` |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

|      % | Samples | Caller                           | Location                             |
| -----: | ------: | -------------------------------- | ------------------------------------ |
| 100.0% |       5 | `<init>(MethodType, LambdaForm)` | `java.lang.invoke.BoundMethodHandle` |

##### `collector(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008010a1000`)

|     % | Samples | Caller                           | Location                                            |
| ----: | ------: | -------------------------------- | --------------------------------------------------- |
| 60.0% |       3 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010a1800` |
| 40.0% |       2 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010ab000` |

##### `Dictionary::find` (`libjvm.dylib`)

|     % | Samples | Caller                                                       | Location       |
| ----: | ------: | ------------------------------------------------------------ | -------------- |
| 75.0% |       3 | `SystemDictionary::find_constrained_instance_or_array_klass` | `libjvm.dylib` |
| 25.0% |       1 | `SystemDictionary::resolve_instance_class_or_null`           | `libjvm.dylib` |

##### `__psynch_mutexdrop` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                                | Location                  |
| -----: | ------: | ------------------------------------- | ------------------------- |
| 100.0% |       4 | `_pthread_mutex_firstfit_unlock_slow` | `libsystem_pthread.dylib` |

##### `sys_icache_invalidate` (`libsystem_platform.dylib`)

|     % | Samples | Caller                              | Location       |
| ----: | ------: | ----------------------------------- | -------------- |
| 25.0% |       1 | `nmethod::nmethod`                  | `libjvm.dylib` |
| 25.0% |       1 | `CodeBuffer::copy_code_to`          | `libjvm.dylib` |
| 25.0% |       1 | `CompiledIC::set_to_megamorphic`    | `libjvm.dylib` |
| 25.0% |       1 | `SharedRuntime::resolve_sub_helper` | `libjvm.dylib` |

##### `nmethodBucket::next_not_unloading` (`libjvm.dylib`)

|     % | Samples | Caller                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 50.0% |       2 | `DependencyContext::add_dependent_nmethod` | `libjvm.dylib` |
| 50.0% |       2 | `InstanceKlass::add_dependent_nmethod`     | `libjvm.dylib` |

##### `_platform_memmove` (`libsystem_platform.dylib`)

|     % | Samples | Caller                           | Location            |
| ----: | ------: | -------------------------------- | ------------------- |
| 25.0% |       1 | `PhaseIdealLoop::set_idom`       | `libjvm.dylib`      |
| 25.0% |       1 | `ClassFileParser::parse_methods` | `libjvm.dylib`      |
| 25.0% |       1 | `__vfprintf`                     | `libsystem_c.dylib` |
| 25.0% |       1 | `Node::out_grow`                 | `libjvm.dylib`      |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       4 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       4 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `invoke(Object, int)` (`java.lang.invoke.LambdaForm$MH.0x0000000801031400`)

|     % | Samples | Caller                              | Location                                            |
| ----: | ------: | ----------------------------------- | --------------------------------------------------- |
| 75.0% |       3 | `collector(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000000801031800` |
| 25.0% |       1 | `collector(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010a1000` |

##### `collector(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801031800`)

|     % | Samples | Caller                   | Location                                            |
| ----: | ------: | ------------------------ | --------------------------------------------------- |
| 50.0% |       2 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000080108e000` |
| 25.0% |       1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000080109b400` |
| 25.0% |       1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000080109b800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000080102ac00`)

|     % | Samples | Caller                   | Location                                            |
| ----: | ------: | ------------------------ | --------------------------------------------------- |
| 50.0% |       2 | `invoke(Object, int)`    | `java.lang.invoke.LambdaForm$MH.0x0000000801031400` |
| 25.0% |       1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000080102b000` |
| 25.0% |       1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008017e4400` |

##### `getMethods(Class, String)` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

|      % | Samples | Caller                                                   | Location                    |
| -----: | ------: | -------------------------------------------------------- | --------------------------- |
| 100.0% |       4 | `getMethodWithCaching(Class, String, Object[], boolean)` | `groovy.lang.MetaClassImpl` |

##### `equals(Object, Object)` (`java.util.Objects`)

|      % | Samples | Caller           | Location                               |
| -----: | ------: | ---------------- | -------------------------------------- |
| 100.0% |       4 | `equals(Object)` | `jdk.internal.util.StrongReferenceKey` |

##### `GrowableArrayWithAllocator<int, GrowableArray<int>>::expand_to` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |       3 | `Dependencies::assert_common_1` | `libjvm.dylib` |

##### `doWithCallSite(MutableCallSite, Object[], BiFunction)` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|      % | Samples | Caller                                                                                        | Location                                        |
| -----: | ------: | --------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| 100.0% |       3 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `invokeSpecial(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Caller                           | Location                                            |
| ----: | ------: | -------------------------------- | --------------------------------------------------- |
| 66.7% |       2 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000080102ac00` |
| 33.3% |       1 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801360800` |

##### `add(ATNConfig, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`)

|      % | Samples | Caller                                                                                                        | Location                                               |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       3 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|      % | Samples | Caller                                                                                                        | Location                                               |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       3 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `hashCode()` (`java.lang.invoke.MethodType`)

|      % | Samples | Caller       | Location                               |
| -----: | ------: | ------------ | -------------------------------------- |
| 100.0% |       3 | `hashCode()` | `jdk.internal.util.StrongReferenceKey` |

##### `divideOneWord(int, MutableBigInteger)` (`java.math.MutableBigInteger`)

|      % | Samples | Caller                                                       | Location                      |
| -----: | ------: | ------------------------------------------------------------ | ----------------------------- |
| 100.0% |       3 | `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)` | `java.math.MutableBigInteger` |

##### `equals(Object[], Object[])` (`java.util.Arrays`)

|      % | Samples | Caller               | Location                      |
| -----: | ------: | -------------------- | ----------------------------- |
| 100.0% |       3 | `equals(MethodType)` | `java.lang.invoke.MethodType` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                   | Location                  |
| ----: | ------: | ------------------------------------------ | ------------------------- |
| 83.5% |  11,603 | `_pthread_start`                           | `libsystem_pthread.dylib` |
| 83.5% |  11,603 | `thread_start`                             | `libsystem_pthread.dylib` |
| 80.2% |  11,143 | `Thread::call_run`                         | `libjvm.dylib`            |
| 80.2% |  11,143 | `thread_native_entry`                      | `libjvm.dylib`            |
| 46.0% |   6,390 | `__psynch_cvwait`                          | `libsystem_kernel.dylib`  |
| 39.2% |   5,449 | `semaphore_wait_trap`                      | `libsystem_kernel.dylib`  |
| 36.1% |   5,016 | `PlatformMonitor::wait`                    | `libjvm.dylib`            |
| 35.9% |   4,990 | `WorkerThread::run`                        | `libjvm.dylib`            |
| 27.8% |   3,858 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
| 26.2% |   3,639 | `Monitor::wait_without_safepoint_check`    | `libjvm.dylib`            |
| 11.3% |   1,564 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
|  9.9% |   1,377 | `Monitor::wait`                            | `libjvm.dylib`            |
|  9.9% |   1,377 | `ConcurrentGCThread::run`                  | `libjvm.dylib`            |
|  6.6% |     918 | `JLI_Launch`                               | `libjli.dylib`            |
|  6.6% |     918 | `main`                                     | `java`                    |
|  6.5% |     910 | `CompileQueue::get`                        | `libjvm.dylib`            |
|  4.7% |     654 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  3.8% |     532 | `Compile::Compile`                         | `libjvm.dylib`            |
|  3.8% |     532 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  3.3% |     461 | `unknown`                                  | `<unknown>`               |

#### Categories

##### Native

|     % | Samples | Function                                | Location                  |
| ----: | ------: | --------------------------------------- | ------------------------- |
| 83.5% |  11,603 | `_pthread_start`                        | `libsystem_pthread.dylib` |
| 83.5% |  11,603 | `thread_start`                          | `libsystem_pthread.dylib` |
| 80.2% |  11,143 | `Thread::call_run`                      | `libjvm.dylib`            |
| 80.2% |  11,143 | `thread_native_entry`                   | `libjvm.dylib`            |
| 46.0% |   6,390 | `__psynch_cvwait`                       | `libsystem_kernel.dylib`  |
| 39.2% |   5,449 | `semaphore_wait_trap`                   | `libsystem_kernel.dylib`  |
| 36.1% |   5,016 | `PlatformMonitor::wait`                 | `libjvm.dylib`            |
| 35.9% |   4,990 | `WorkerThread::run`                     | `libjvm.dylib`            |
| 27.8% |   3,858 | `JavaThread::thread_main_inner`         | `libjvm.dylib`            |
| 26.2% |   3,639 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib`            |
|  9.9% |   1,377 | `Monitor::wait`                         | `libjvm.dylib`            |
|  9.9% |   1,377 | `ConcurrentGCThread::run`               | `libjvm.dylib`            |
|  6.6% |     918 | `JLI_Launch`                            | `libjli.dylib`            |
|  6.6% |     918 | `main`                                  | `java`                    |
|  3.3% |     461 | `unknown`                               | `<unknown>`               |
|  3.3% |     459 | `__ulock_wait`                          | `libsystem_kernel.dylib`  |
|  3.3% |     459 | `CallJavaMainInNewThread`               | `libjli.dylib`            |
|  3.3% |     459 | `ContinueInNewThread`                   | `libjli.dylib`            |
|  3.3% |     459 | `apple_main`                            | `libjli.dylib`            |
|  3.3% |     459 | `mach_msg2_trap`                        | `libsystem_kernel.dylib`  |

##### Compiler

|     % | Samples | Function                                   | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 11.3% |   1,564 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
|  6.5% |     910 | `CompileQueue::get`                        | `libjvm.dylib` |
|  4.7% |     654 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  3.8% |     532 | `Compile::Compile`                         | `libjvm.dylib` |
|  3.8% |     532 | `C2Compiler::compile_method`               | `libjvm.dylib` |
|  1.9% |     267 | `Compile::Code_Gen`                        | `libjvm.dylib` |
|  1.4% |     197 | `Compile::Optimize`                        | `libjvm.dylib` |
|  1.1% |     149 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
|  0.9% |     120 | `Compilation::compile_method`              | `libjvm.dylib` |
|  0.9% |     120 | `Compilation::Compilation`                 | `libjvm.dylib` |
|  0.7% |     100 | `Compilation::compile_java_method`         | `libjvm.dylib` |
|  0.7% |      97 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|  0.5% |      74 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
|  0.5% |      73 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
|  0.5% |      73 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
|  0.5% |      73 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |
|  0.3% |      47 | `Matcher::match`                           | `libjvm.dylib` |
|  0.3% |      40 | `Compilation::build_hir`                   | `libjvm.dylib` |
|  0.3% |      40 | `Compilation::emit_lir`                    | `libjvm.dylib` |
|  0.3% |      38 | `Compile::optimize_loops`                  | `libjvm.dylib` |

##### Standard library

|    % | Samples | Function                        | Location                                                                |
| ---: | ------: | ------------------------------- | ----------------------------------------------------------------------- |
| 3.3% |     459 | `wait0(long)`                   | `java.lang.Object`                                                      |
| 3.3% |     459 | `wait(long)`                    | `java.lang.Object`                                                      |
| 3.3% |     459 | `wait()`                        | `java.lang.Object`                                                      |
| 3.3% |     459 | `await()`                       | `java.lang.ref.NativeReferenceQueue`                                    |
| 3.3% |     459 | `remove0()`                     | `java.lang.ref.ReferenceQueue`                                          |
| 3.3% |     459 | `remove()`                      | `java.lang.ref.NativeReferenceQueue`                                    |
| 3.3% |     459 | `run()`                         | `java.lang.ref.Finalizer$FinalizerThread`                               |
| 3.3% |     459 | `waitForReferencePendingList()` | `java.lang.ref.Reference`                                               |
| 3.3% |     459 | `processPendingReferences()`    | `java.lang.ref.Reference`                                               |
| 3.3% |     459 | `run()`                         | `java.lang.ref.Reference$ReferenceHandler`                              |
| 3.3% |     458 | `park(boolean, long)`           | `jdk.internal.misc.Unsafe`                                              |
| 3.3% |     458 | `parkNanos(Object, long)`       | `java.util.concurrent.locks.LockSupport`                                |
| 3.3% |     458 | `await(long, TimeUnit)`         | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
| 3.3% |     458 | `await(long)`                   | `java.lang.ref.ReferenceQueue`                                          |
| 3.3% |     458 | `remove0(long)`                 | `java.lang.ref.ReferenceQueue`                                          |
| 3.3% |     458 | `remove(long)`                  | `java.lang.ref.ReferenceQueue`                                          |
| 3.3% |     458 | `run()`                         | `jdk.internal.ref.CleanerImpl`                                          |
| 3.3% |     458 | `runWith(Object, Runnable)`     | `java.lang.Thread`                                                      |
| 3.3% |     458 | `run()`                         | `java.lang.Thread`                                                      |
| 3.3% |     458 | `run()`                         | `jdk.internal.misc.InnocuousThread`                                     |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 96.0% |  11,143 | `thread_native_entry` | `libjvm.dylib` |
|  4.0% |     459 | `apple_main`          | `libjli.dylib` |
| <0.1% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |  11,603 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 44.8% |   4,990 | `WorkerThread::run`             | `libjvm.dylib` |
| 34.6% |   3,858 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| 12.4% |   1,377 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  4.1% |     459 | `WatcherThread::run`            | `libjvm.dylib` |
|  4.1% |     459 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |  11,143 | `Thread::call_run` | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|      % | Samples | Callee               | Location                  |
| -----: | ------: | -------------------- | ------------------------- |
| 100.0% |   5,014 | `__psynch_cvwait`    | `libsystem_kernel.dylib`  |
|  <0.1% |       1 | `gettimeofday`       | `libsystem_c.dylib`       |
|  <0.1% |       1 | `_pthread_cond_wait` | `libsystem_pthread.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 99.2% |   4,952 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
|  0.3% |      13 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
|  0.2% |      10 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib`           |
|  0.2% |       8 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib`           |
|  0.1% |       6 | `KlassCleaningTask::work`         | `libjvm.dylib`           |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                                   | Location       |
| ----: | ------: | -------------------------------------------------------- | -------------- |
| 40.5% |   1,564 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib` |
| 11.9% |     459 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |
| 11.9% |     459 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |
| 11.9% |     459 | `signal_thread_entry`                                    | `libjvm.dylib` |
| 11.9% |     459 | `JvmtiAgentThread::start_function_wrapper`               | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |   3,639 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 58.2% |     910 | `CompileQueue::get`                        | `libjvm.dylib` |
| 41.8% |     654 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |   1,377 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 33.3% |     459 | `G1ServiceThread::run_service`          | `libjvm.dylib` |
| 33.3% |     459 | `G1ConcurrentMarkThread::run_service`   | `libjvm.dylib` |
| 33.3% |     459 | `G1ConcurrentRefineThread::run_service` | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 50.0% |     459 | `ContinueInNewThread`        | `libjli.dylib` |
| 50.0% |     459 | `CreateExecutionEnvironment` | `libjli.dylib` |

##### `main` (`java`)

|      % | Samples | Callee       | Location       |
| -----: | ------: | ------------ | -------------- |
| 100.0% |     918 | `JLI_Launch` | `libjli.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|      % | Samples | Callee          | Location       |
| -----: | ------: | --------------- | -------------- |
| 100.0% |     910 | `Monitor::wait` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 81.3% |     532 | `C2Compiler::compile_method`    | `libjvm.dylib` |
| 18.3% |     120 | `Compiler::compile_method`      | `libjvm.dylib` |
|  0.2% |       1 | `CompilationLog::log_compile`   | `libjvm.dylib` |
|  0.2% |       1 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 50.2% |     267 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 37.0% |     197 | `Compile::Optimize`                      | `libjvm.dylib` |
| 11.3% |      60 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.6% |       3 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.4% |       2 | `CallGenerator::for_inline`              | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     532 | `Compile::Compile` | `libjvm.dylib` |

##### `unknown` (`<unknown>`)

|     % | Samples | Callee                              | Location                                     |
| ----: | ------: | ----------------------------------- | -------------------------------------------- |
| 99.6% |     459 | `main`                              | `java`                                       |
|  0.2% |       1 | `invokeVirtual(Object, Object)`     | `java.lang.invoke.DirectMethodHandle$Holder` |
|  0.2% |       1 | `makeImpl(Class, Class[], boolean)` | `java.lang.invoke.MethodType`                |

##### `CallJavaMainInNewThread` (`libjli.dylib`)

|      % | Samples | Callee         | Location                 |
| -----: | ------: | -------------- | ------------------------ |
| 100.0% |     459 | `__ulock_wait` | `libsystem_kernel.dylib` |

##### `ContinueInNewThread` (`libjli.dylib`)

|      % | Samples | Callee                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |     459 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `apple_main` (`libjli.dylib`)

|      % | Samples | Callee | Location |
| -----: | ------: | ------ | -------- |
| 100.0% |     459 | `main` | `java`   |

##### `wait0(long)` (`java.lang.Object`)

|      % | Samples | Callee            | Location       |
| -----: | ------: | ----------------- | -------------- |
| 100.0% |     459 | `JVM_MonitorWait` | `libjvm.dylib` |

##### `wait(long)` (`java.lang.Object`)

|      % | Samples | Callee        | Location           |
| -----: | ------: | ------------- | ------------------ |
| 100.0% |     459 | `wait0(long)` | `java.lang.Object` |

##### `wait()` (`java.lang.Object`)

|      % | Samples | Callee       | Location           |
| -----: | ------: | ------------ | ------------------ |
| 100.0% |     459 | `wait(long)` | `java.lang.Object` |

##### `await()` (`java.lang.ref.NativeReferenceQueue`)

|      % | Samples | Callee   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |     459 | `wait()` | `java.lang.Object` |

##### `remove0()` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee    | Location                             |
| -----: | ------: | --------- | ------------------------------------ |
| 100.0% |     459 | `await()` | `java.lang.ref.NativeReferenceQueue` |

##### `remove()` (`java.lang.ref.NativeReferenceQueue`)

|      % | Samples | Callee      | Location                       |
| -----: | ------: | ----------- | ------------------------------ |
| 100.0% |     459 | `remove0()` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`java.lang.ref.Finalizer$FinalizerThread`)

|      % | Samples | Callee     | Location                             |
| -----: | ------: | ---------- | ------------------------------------ |
| 100.0% |     459 | `remove()` | `java.lang.ref.NativeReferenceQueue` |

##### `waitForReferencePendingList()` (`java.lang.ref.Reference`)

|      % | Samples | Callee                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |     459 | `JVM_WaitForReferencePendingList` | `libjvm.dylib` |

##### `processPendingReferences()` (`java.lang.ref.Reference`)

|      % | Samples | Callee                          | Location                  |
| -----: | ------: | ------------------------------- | ------------------------- |
| 100.0% |     459 | `waitForReferencePendingList()` | `java.lang.ref.Reference` |

##### `run()` (`java.lang.ref.Reference$ReferenceHandler`)

|      % | Samples | Callee                       | Location                  |
| -----: | ------: | ---------------------------- | ------------------------- |
| 100.0% |     459 | `processPendingReferences()` | `java.lang.ref.Reference` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|      % | Samples | Callee        | Location       |
| -----: | ------: | ------------- | -------------- |
| 100.0% |     458 | `Unsafe_Park` | `libjvm.dylib` |

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

|      % | Samples | Callee                | Location                   |
| -----: | ------: | --------------------- | -------------------------- |
| 100.0% |     458 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

|      % | Samples | Callee                    | Location                                 |
| -----: | ------: | ------------------------- | ---------------------------------------- |
| 100.0% |     458 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `await(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee                  | Location                                                                |
| -----: | ------: | ----------------------- | ----------------------------------------------------------------------- |
| 100.0% |     458 | `await(long, TimeUnit)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `remove0(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee        | Location                       |
| -----: | ------: | ------------- | ------------------------------ |
| 100.0% |     458 | `await(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee          | Location                       |
| -----: | ------: | --------------- | ------------------------------ |
| 100.0% |     458 | `remove0(long)` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`jdk.internal.ref.CleanerImpl`)

|      % | Samples | Callee         | Location                       |
| -----: | ------: | -------------- | ------------------------------ |
| 100.0% |     458 | `remove(long)` | `java.lang.ref.ReferenceQueue` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % | Samples | Callee  | Location                       |
| -----: | ------: | ------- | ------------------------------ |
| 100.0% |     458 | `run()` | `jdk.internal.ref.CleanerImpl` |

##### `run()` (`java.lang.Thread`)

|      % | Samples | Callee                      | Location           |
| -----: | ------: | --------------------------- | ------------------ |
| 100.0% |     458 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `run()` (`jdk.internal.misc.InnocuousThread`)

|      % | Samples | Callee  | Location           |
| -----: | ------: | ------- | ------------------ |
| 100.0% |     458 | `run()` | `java.lang.Thread` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 55.8% |     149 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 17.6% |      47 | `Matcher::match`                  | `libjvm.dylib` |
| 13.1% |      35 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  8.6% |      23 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  3.0% |       8 | `PhaseOutput::install_code`       | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 30.5% |      60 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| 19.3% |      38 | `Compile::optimize_loops`              | `libjvm.dylib` |
| 19.3% |      38 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |
|  6.6% |      13 | `Compile::inline_incrementally`        | `libjvm.dylib` |
|  5.1% |      10 | `PhaseMacroExpand::expand_macro_nodes` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 22.8% |      34 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| 20.1% |      30 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| 13.4% |      20 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |
|  8.7% |      13 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  7.4% |      11 | `PhaseLive::compute`                       | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 83.3% |     100 | `Compilation::compile_java_method` | `libjvm.dylib` |
| 15.0% |      18 | `ciEnv::register_method`           | `libjvm.dylib` |
|  1.7% |       2 | `Dependencies::assert_common_1`    | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     120 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 40.0% |      40 | `Compilation::build_hir`      | `libjvm.dylib` |
| 40.0% |      40 | `Compilation::emit_lir`       | `libjvm.dylib` |
| 20.0% |      20 | `Compilation::emit_code_body` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 75.3% |      73 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| 23.7% |      23 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |
|  1.0% |       1 | `Chunk::next_chop`               | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 98.6% |      73 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |
|  1.4% |       1 | `Node::hash`                  | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 42.5% |      31 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 17.8% |      13 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| 11.0% |       8 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
|  8.2% |       6 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
|  4.1% |       3 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Callee                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      73 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 26.0% |      19 | `StoreNode::Ideal`           | `libjvm.dylib` |
| 20.5% |      15 | `PhaseIterGVN::subsume_node` | `libjvm.dylib` |
|  9.6% |       7 | `LoadNode::Ideal`            | `libjvm.dylib` |
|  5.5% |       4 | `IfNode::Ideal`              | `libjvm.dylib` |
|  5.5% |       4 | `NodeHash::hash_find_insert` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 76.6% |      36 | `Matcher::xform`                              | `libjvm.dylib` |
| 12.8% |       6 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |
|  4.3% |       2 | `Matcher::find_shared`                        | `libjvm.dylib` |
|  2.1% |       1 | `LoadRangeNode::Opcode`                       | `libjvm.dylib` |
|  2.1% |       1 | `IfFalseNode::Opcode`                         | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|     % | Samples | Callee                                       | Location       |
| ----: | ------: | -------------------------------------------- | -------------- |
| 72.5% |      29 | `IR::IR`                                     | `libjvm.dylib` |
| 15.0% |       6 | `IR::compute_use_counts`                     | `libjvm.dylib` |
| 10.0% |       4 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |
|  2.5% |       1 | `Goto::visit`                                | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 72.5% |      29 | `LinearScan::do_linear_scan` | `libjvm.dylib` |
| 27.5% |      11 | `BlockList::iterate_forward` | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|     % | Samples | Callee                     | Location       |
| ----: | ------: | -------------------------- | -------------- |
| 97.4% |      37 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |
|  2.6% |       1 | `Compile::print_method`    | `libjvm.dylib` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 35.6% |   4,952 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`) ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                       |
|  6.5% |     908 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                     |
|  3.3% |     459 | `__ulock_wait` (`libsystem_kernel.dylib`) ← `CallJavaMainInNewThread` (`libjli.dylib`) ← `ContinueInNewThread` ← `JLI_Launch` ← `main` (`java`) ← `apple_main` (`libjli.dylib`) ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                            |
|  3.3% |     459 | `mach_msg2_trap` (`libsystem_kernel.dylib`) ← `mach_msg_overwrite` ← `mach_msg` ← `__CFRunLoopServiceMachPort` (`CoreFoundation`) ← `__CFRunLoopRun` ← `CFRunLoopRunSpecific` ← `CreateExecutionEnvironment` (`libjli.dylib`) ← `JLI_Launch` ← `main` (`java`) ← `unknown`                                                                                                                                                                                                                                                                                                 |
|  3.3% |     459 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ServiceThread::wait_for_task` ← `G1ServiceThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                             |
|  3.3% |     459 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `WatcherThread::sleep` ← `WatcherThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                             |
|  3.3% |     459 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformEvent::park` (`libjvm.dylib`) ← `ObjectMonitor::wait` ← `ObjectSynchronizer::wait` ← `JVM_MonitorWait` ← `wait0(long)` (`java.lang.Object`) ← `wait(long)` ← `wait()` ← `await()` (`java.lang.ref.NativeReferenceQueue`) ← `remove0()` (`java.lang.ref.ReferenceQueue`) ← `remove()` (`java.lang.ref.NativeReferenceQueue`) ← `run()` (`java.lang.ref.Finalizer$FinalizerThread`)                                                                                                                                  |
|  3.3% |     459 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `MonitorDeflationThread::monitor_deflation_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                |
|  3.3% |     459 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `JVM_WaitForReferencePendingList` ← `waitForReferencePendingList()` (`java.lang.ref.Reference`) ← `processPendingReferences()` ← `run()` (`java.lang.ref.Reference$ReferenceHandler`)                                                                                                                                                                                                                                                                          |
|  3.3% |     459 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `os::signal_wait` (`libjvm.dylib`) ← `signal_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                               |
|  3.3% |     459 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` ← `G1ConcurrentRefineThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                       |
|  3.3% |     459 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Profiler::timerLoop` (`libasyncProfiler.dylib`) ← `JvmtiAgentThread::start_function_wrapper` (`libjvm.dylib`) ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                               |
|  3.3% |     458 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `NotificationThread::notification_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                         |
|  3.3% |     458 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `await(long)` (`java.lang.ref.ReferenceQueue`) ← `remove0(long)` ← `remove(long)` ← `run()` (`jdk.internal.ref.CleanerImpl`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` ← `run()` (`jdk.internal.misc.InnocuousThread`) |
|  3.2% |     450 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `VMThread::wait_for_operation` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                          |
|  3.2% |     448 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `ServiceThread::service_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                   |
|  3.2% |     445 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ConcurrentMarkThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                         |
|  0.1% |      17 | `Arena::contains` (`libjvm.dylib`) ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                     |
|  0.1% |      17 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                   |
|  0.1% |      11 | `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                        |
