# Sampling profile

Collected 13,708 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Native           | 94.3% |  12,924 |
| Compiler         |  3.4% |     467 |
| Standard library |  2.2% |     297 |
| JIT              |  0.1% |      10 |
| Ours             |  0.1% |      10 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                                                                                                                                 | Location                                            |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| 46.1% |   6,313 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`                            |
| 39.2% |   5,378 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`                            |
|  3.3% |     453 | `mach_msg2_trap`                                                                                                                                         | `libsystem_kernel.dylib`                            |
|  3.3% |     453 | `__ulock_wait`                                                                                                                                           | `libsystem_kernel.dylib`                            |
|  0.1% |      20 | `cast(Object)`                                                                                                                                           | `java.lang.Class`                                   |
|  0.1% |      18 | `Node::dominates`                                                                                                                                        | `libjvm.dylib`                                      |
|  0.1% |      18 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`                            |
|  0.1% |      18 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`                           |
|  0.1% |      16 | `PhaseChaitin::Split`                                                                                                                                    | `libjvm.dylib`                                      |
|  0.1% |      15 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`                                      |
|  0.1% |      15 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`                                     |
|  0.1% |      14 | `newInstance(Class, int)`                                                                                                                                | `java.lang.reflect.Array`                           |
|  0.1% |      12 | `PhaseChaitin::elide_copy`                                                                                                                               | `libjvm.dylib`                                      |
|  0.1% |      12 | `collector(Object, Object)`                                                                                                                              | `java.lang.invoke.LambdaForm$MH.0x0000000301031800` |
|  0.1% |      11 | `PhaseAggressiveCoalesce::insert_copies`                                                                                                                 | `libjvm.dylib`                                      |
|  0.1% |      11 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`                                      |
|  0.1% |      10 | `frame::sender_raw`                                                                                                                                      | `libjvm.dylib`                                      |
|  0.1% |       9 | `IndexSetIterator::advance_and_next`                                                                                                                     | `libjvm.dylib`                                      |
|  0.1% |       9 | `PhaseChaitin::build_ifg_physical`                                                                                                                       | `libjvm.dylib`                                      |
|  0.1% |       9 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`                                      |

#### Categories

##### Native

|     % | Samples | Function                                                                                                                                                 | Location                   |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 46.1% |   6,313 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 39.2% |   5,378 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`   |
|  3.3% |     453 | `mach_msg2_trap`                                                                                                                                         | `libsystem_kernel.dylib`   |
|  3.3% |     453 | `__ulock_wait`                                                                                                                                           | `libsystem_kernel.dylib`   |
|  0.1% |      18 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
|  0.1% |      18 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
|  0.1% |      15 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`             |
|  0.1% |      15 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
|  0.1% |      11 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
|  0.1% |      10 | `frame::sender_raw`                                                                                                                                      | `libjvm.dylib`             |
|  0.1% |       9 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
|  0.1% |       9 | `java_lang_Throwable::fill_in_stack_trace`                                                                                                               | `libjvm.dylib`             |
|  0.1% |       8 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
|  0.1% |       7 | `frame::sender_for_compiled_frame`                                                                                                                       | `libjvm.dylib`             |
| <0.1% |       5 | `posix_madvise`                                                                                                                                          | `libsystem_kernel.dylib`   |
| <0.1% |       5 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                           | `libjvm.dylib`             |
| <0.1% |       4 | `LocationValue::write_on`                                                                                                                                | `libjvm.dylib`             |
| <0.1% |       4 | `vmSymbols::find_sid`                                                                                                                                    | `libjvm.dylib`             |
| <0.1% |       4 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                   | `libjvm.dylib`             |
| <0.1% |       3 | `ValueRecorder<Metadata*>::maybe_find_index`                                                                                                             | `libjvm.dylib`             |

##### Compiler

|     % | Samples | Function                                   | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
|  0.1% |      18 | `Node::dominates`                          | `libjvm.dylib` |
|  0.1% |      16 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
|  0.1% |      12 | `PhaseChaitin::elide_copy`                 | `libjvm.dylib` |
|  0.1% |      11 | `PhaseAggressiveCoalesce::insert_copies`   | `libjvm.dylib` |
|  0.1% |       9 | `IndexSetIterator::advance_and_next`       | `libjvm.dylib` |
|  0.1% |       9 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
|  0.1% |       8 | `PhaseLive::add_liveout`                   | `libjvm.dylib` |
|  0.1% |       7 | `PhaseLive::compute`                       | `libjvm.dylib` |
| <0.1% |       6 | `ciObjectFactory::get_metadata`            | `libjvm.dylib` |
| <0.1% |       6 | `PhaseIdealLoop::split_if_with_blocks`     | `libjvm.dylib` |
| <0.1% |       6 | `IntervalWalker::walk_to`                  | `libjvm.dylib` |
| <0.1% |       6 | `Compile::identify_useful_nodes`           | `libjvm.dylib` |
| <0.1% |       5 | `Node::set_req_X`                          | `libjvm.dylib` |
| <0.1% |       5 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |
| <0.1% |       5 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
| <0.1% |       5 | `PhaseIdealLoop::build_loop_late`          | `libjvm.dylib` |
| <0.1% |       5 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib` |
| <0.1% |       5 | `ConnectionGraph::add_edge`                | `libjvm.dylib` |
| <0.1% |       5 | `PhaseIdealLoop::is_dominator`             | `libjvm.dylib` |
| <0.1% |       5 | `RegionNode::is_CFG`                       | `libjvm.dylib` |

##### Standard library

|     % | Samples | Function                                                                                    | Location                                                         |
| ----: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
|  0.1% |      20 | `cast(Object)`                                                                              | `java.lang.Class`                                                |
|  0.1% |      14 | `newInstance(Class, int)`                                                                   | `java.lang.reflect.Array`                                        |
|  0.1% |      12 | `collector(Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000000301031800`              |
|  0.1% |       8 | `invokeBasic(Object[])`                                                                     | `java.lang.invoke.MethodHandle`                                  |
|  0.1% |       7 | `getNode(Object)`                                                                           | `java.util.HashMap`                                              |
| <0.1% |       5 | `invokeVirtual(Object, Object)`                                                             | `java.lang.invoke.DirectMethodHandle$Holder`                     |
| <0.1% |       5 | `invokeStatic(Object, Object, Object)`                                                      | `java.lang.invoke.DirectMethodHandle$Holder`                     |
| <0.1% |       5 | `putVal(int, Object, Object, boolean, boolean)`                                             | `java.util.HashMap`                                              |
| <0.1% |       4 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x00000003010a1000`              |
| <0.1% |       3 | `<init>(MethodType, LambdaForm)`                                                            | `java.lang.invoke.MethodHandle`                                  |
| <0.1% |       3 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000301088800`             |
| <0.1% |       3 | `setGuards(Object)`                                                                         | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`        |
| <0.1% |       3 | `equals(Object, Object)`                                                                    | `java.util.Objects`                                              |
| <0.1% |       3 | `chooseMeta(MetaClassImpl)`                                                                 | `org.codehaus.groovy.vmplugin.v8.Selector$PropertySelector`      |
| <0.1% |       3 | `checkCustomized(MethodHandle)`                                                             | `java.lang.invoke.Invokers`                                      |
| <0.1% |       3 | `<init>(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`  | `org.codehaus.groovy.vmplugin.v8.IndyInterface$FallbackSupplier` |
| <0.1% |       3 | `getInCache(LambdaFormEditor$TransformKey)`                                                 | `java.lang.invoke.LambdaFormEditor`                              |
| <0.1% |       2 | `findSpecies(Object)`                                                                       | `java.lang.invoke.ClassSpecializer`                              |
| <0.1% |       2 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000030109a000`              |
| <0.1% |       2 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x0000000301188c00`              |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `cast(Object)` (`java.lang.Class`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |      20 | `java.lang.Class:4068` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|      % | Samples | Location                     |
| -----: | ------: | ---------------------------- |
| 100.0% |      14 | `java.lang.reflect.Array:78` |

##### `getNode(Object)` (`java.util.HashMap`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 42.9% |       3 | `java.util.HashMap:576` |
| 28.6% |       2 | `java.util.HashMap:585` |
| 14.3% |       1 | `java.util.HashMap:578` |
| 14.3% |       1 | `java.util.HashMap:584` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 20.0% |       1 | `java.util.HashMap:648` |
| 20.0% |       1 | `java.util.HashMap:668` |
| 20.0% |       1 | `java.util.HashMap:634` |
| 20.0% |       1 | `java.util.HashMap:641` |
| 20.0% |       1 | `java.util.HashMap:637` |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Location                            |
| ----: | ------: | ----------------------------------- |
| 66.7% |       2 | `java.lang.invoke.MethodHandle:479` |
| 33.3% |       1 | `java.lang.invoke.MethodHandle:480` |

##### `setGuards(Object)` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |       3 | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector:960` |

##### `equals(Object, Object)` (`java.util.Objects`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       3 | `java.util.Objects:64` |

##### `chooseMeta(MetaClassImpl)` (`org.codehaus.groovy.vmplugin.v8.Selector$PropertySelector`)

|      % | Samples | Location                                                        |
| -----: | ------: | --------------------------------------------------------------- |
| 100.0% |       3 | `org.codehaus.groovy.vmplugin.v8.Selector$PropertySelector:308` |

##### `checkCustomized(MethodHandle)` (`java.lang.invoke.Invokers`)

|     % | Samples | Location                        |
| ----: | ------: | ------------------------------- |
| 66.7% |       2 | `java.lang.invoke.Invokers:627` |
| 33.3% |       1 | `java.lang.invoke.Invokers:626` |

##### `<init>(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface$FallbackSupplier`)

|     % | Samples | Location                                                             |
| ----: | ------: | -------------------------------------------------------------------- |
| 33.3% |       1 | `org.codehaus.groovy.vmplugin.v8.IndyInterface$FallbackSupplier:271` |
| 33.3% |       1 | `org.codehaus.groovy.vmplugin.v8.IndyInterface$FallbackSupplier:268` |
| 33.3% |       1 | `org.codehaus.groovy.vmplugin.v8.IndyInterface$FallbackSupplier:272` |

##### `getInCache(LambdaFormEditor$TransformKey)` (`java.lang.invoke.LambdaFormEditor`)

|     % | Samples | Location                                |
| ----: | ------: | --------------------------------------- |
| 66.7% |       2 | `java.lang.invoke.LambdaFormEditor:396` |
| 33.3% |       1 | `java.lang.invoke.LambdaFormEditor:395` |

##### `findSpecies(Object)` (`java.lang.invoke.ClassSpecializer`)

|     % | Samples | Location                                |
| ----: | ------: | --------------------------------------- |
| 50.0% |       1 | `java.lang.invoke.ClassSpecializer:184` |
| 50.0% |       1 | `java.lang.invoke.ClassSpecializer:179` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location                 |
| ----: | ------: | ----------------------- | ------------------------ |
| 78.5% |   4,956 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  7.2% |     453 | `PlatformEvent::park`   | `libjvm.dylib`           |
|  7.2% |     452 | `Parker::park`          | `libjvm.dylib`           |
|  7.2% |     452 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 90.9% |   4,888 | `WorkerThread::run`              | `libjvm.dylib` |
|  8.4% |     453 | `os::signal_wait`                | `libjvm.dylib` |
|  0.4% |      20 | `WorkerThreads::run_task`        | `libjvm.dylib` |
|  0.3% |      17 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

|      % | Samples | Caller               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |     453 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `__ulock_wait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |     453 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `cast(Object)` (`java.lang.Class`)

|      % | Samples | Caller                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |      20 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `Node::dominates` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |      18 | `MemNode::all_controls_dominate` | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |      18 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 55.6% |      10 | `JVM_NewArray`            | `libjvm.dylib` |
| 11.1% |       2 | `JVM_IHashCode`           | `libjvm.dylib` |
|  5.6% |       1 | `InterpreterRuntime::ldc` | `libjvm.dylib` |
|  5.6% |       1 | `JVM_FindLoadedClass`     | `libjvm.dylib` |
|  5.6% |       1 | `JVM_Clone`               | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      16 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Arena::contains` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |      15 | `Matcher::xform` | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 20.0% |       3 | `PhaseIterGVN::subsume_node`     | `libjvm.dylib` |
| 13.3% |       2 | `PhaseChaitin::gather_lrg_masks` | `libjvm.dylib` |
| 13.3% |       2 | `TypeInstPtr::add_offset`        | `libjvm.dylib` |
| 13.3% |       2 | `arrayof_oop_disjoint_arraycopy` | `<unknown>`    |
|  6.7% |       1 | `PhaseLive::add_liveout`         | `libjvm.dylib` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|      % | Samples | Caller                              | Location                                             |
| -----: | ------: | ----------------------------------- | ---------------------------------------------------- |
| 100.0% |      14 | `invokeStatic(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000030102b400` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |      12 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `collector(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301031800`)

|     % | Samples | Caller                   | Location                                            |
| ----: | ------: | ------------------------ | --------------------------------------------------- |
| 50.0% |       6 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000030109b800` |
| 25.0% |       3 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000030109b400` |
| 16.7% |       2 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000030108e000` |
|  8.3% |       1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003010c8000` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      11 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|      % | Samples | Caller                                  | Location       |
| -----: | ------: | --------------------------------------- | -------------- |
| 100.0% |      11 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |

##### `frame::sender_raw` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |      10 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 22.2% |       2 | `PhaseChaitin::Select`             | `libjvm.dylib` |
| 22.2% |       2 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |
| 22.2% |       2 | `PhaseLive::add_liveout`           | `libjvm.dylib` |
| 11.1% |       1 | `PhaseIFG::effective_degree`       | `libjvm.dylib` |
| 11.1% |       1 | `PhaseIFG::Union`                  | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       9 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 88.9% |       8 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
| 11.1% |       1 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |

##### `java_lang_Throwable::fill_in_stack_trace` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       9 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                            | Location       |
| ----: | ------: | ------------------------------------------------- | -------------- |
| 25.0% |       2 | `MemAllocator::allocate`                          | `libjvm.dylib` |
| 12.5% |       1 | `Matcher::match_tree`                             | `libjvm.dylib` |
| 12.5% |       1 | `Unique_Node_List::push`                          | `libjvm.dylib` |
| 12.5% |       1 | `MergeMemNode::iteration_setup`                   | `libjvm.dylib` |
| 12.5% |       1 | `GraphBuilder::copy_state_for_exception_with_bci` | `libjvm.dylib` |

##### `PhaseLive::add_liveout` (`libjvm.dylib`)

|      % | Samples | Caller               | Location       |
| -----: | ------: | -------------------- | -------------- |
| 100.0% |       8 | `PhaseLive::compute` | `libjvm.dylib` |

##### `invokeBasic(Object[])` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Caller                                    | Location                                             |
| ----: | ------: | ----------------------------------------- | ---------------------------------------------------- |
| 50.0% |       4 | `invoke(Object, int)`                     | `java.lang.invoke.LambdaForm$MH.0x0000000301031400`  |
| 12.5% |       1 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000301125000` |
| 12.5% |       1 | `invoke(Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x000000030102ac00`  |
| 12.5% |       1 | `invokeSpecial(Object, Object, Object)`   | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 12.5% |       1 | `invoke(Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x00000003010c9400`  |

##### `frame::sender_for_compiled_frame` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       7 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       7 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `getNode(Object)` (`java.util.HashMap`)

|     % | Samples | Caller                | Location                  |
| ----: | ------: | --------------------- | ------------------------- |
| 57.1% |       4 | `get(Object)`         | `java.util.LinkedHashMap` |
| 28.6% |       2 | `containsKey(Object)` | `java.util.HashMap`       |
| 14.3% |       1 | `get(Object)`         | `java.util.HashMap`       |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|     % | Samples | Caller                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 50.0% |       3 | `ciBytecodeStream::get_method`         | `libjvm.dylib` |
| 16.7% |       1 | `ciParametersTypeData::translate_from` | `libjvm.dylib` |
| 16.7% |       1 | `ciMethod::ensure_method_data`         | `libjvm.dylib` |
| 16.7% |       1 | `ciSignature::ciSignature`             | `libjvm.dylib` |

##### `PhaseIdealLoop::split_if_with_blocks` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       6 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |       6 | `IntervalWalker::walk_to` | `libjvm.dylib` |

##### `Compile::identify_useful_nodes` (`libjvm.dylib`)

|      % | Samples | Caller                                   | Location       |
| -----: | ------: | ---------------------------------------- | -------------- |
| 100.0% |       6 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `posix_madvise` (`libsystem_kernel.dylib`)

|      % | Samples | Caller        | Location                 |
| -----: | ------: | ------------- | ------------------------ |
| 100.0% |       5 | `free_medium` | `libsystem_malloc.dylib` |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                         | Location       |
| -----: | ------: | ---------------------------------------------- | -------------- |
| 100.0% |       5 | `void G1CMTask::process_grey_task_entry<true>` | `libjvm.dylib` |

##### `Node::set_req_X` (`libjvm.dylib`)

|     % | Samples | Caller               | Location       |
| ----: | ------: | -------------------- | -------------- |
| 80.0% |       4 | `Node::replace_edge` | `libjvm.dylib` |
| 20.0% |       1 | `PhiNode::Ideal`     | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       5 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       5 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       5 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       5 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `ConnectionGraph::add_edge` (`libjvm.dylib`)

|     % | Samples | Caller                                      | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
| 60.0% |       3 | `ConnectionGraph::add_java_object_edges`    | `libjvm.dylib` |
| 40.0% |       2 | `ConnectionGraph::find_non_escaped_objects` | `libjvm.dylib` |

##### `PhaseIdealLoop::is_dominator` (`libjvm.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 80.0% |       4 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `libjvm.dylib` |
| 20.0% |       1 | `PhaseIdealLoop::try_sink_out_of_loop`        | `libjvm.dylib` |

##### `RegionNode::is_CFG` (`libjvm.dylib`)

|     % | Samples | Caller                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 60.0% |       3 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
| 20.0% |       1 | `PhaseIdealLoop::build_loop_early`   | `libjvm.dylib` |
| 20.0% |       1 | `RegionNode::is_unreachable_region`  | `libjvm.dylib` |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Caller                   | Location                                            |
| ----: | ------: | ------------------------ | --------------------------------------------------- |
| 80.0% |       4 | `invoke(Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000000301089400` |
| 20.0% |       1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000030102b000` |

##### `invokeStatic(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Caller                           | Location                                            |
| ----: | ------: | -------------------------------- | --------------------------------------------------- |
| 60.0% |       3 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000000301098c00` |
| 20.0% |       1 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003010ab000` |
| 20.0% |       1 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000030109b800` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|      % | Samples | Caller                | Location            |
| -----: | ------: | --------------------- | ------------------- |
| 100.0% |       5 | `put(Object, Object)` | `java.util.HashMap` |

##### `LocationValue::write_on` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 50.0% |       2 | `DebugInformationRecorder::create_scope_values`    | `libjvm.dylib` |
| 50.0% |       2 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |

##### `vmSymbols::find_sid` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |       4 | `ciObjectFactory::get_symbol` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                                                   | Location       |
| -----: | ------: | ------------------------------------------------------------------------ | -------------- |
| 100.0% |       4 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` | `libjvm.dylib` |

##### `collector(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003010a1000`)

|     % | Samples | Caller                           | Location                                            |
| ----: | ------: | -------------------------------- | --------------------------------------------------- |
| 75.0% |       3 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003010a1800` |
| 25.0% |       1 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003010ab000` |

##### `ValueRecorder<Metadata*>::maybe_find_index` (`libjvm.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |       3 | `OopRecorder::find_index` | `libjvm.dylib` |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Caller                                                | Location                              |
| ----: | ------: | ----------------------------------------------------- | ------------------------------------- |
| 66.7% |       2 | `<init>(MethodType, LambdaForm)`                      | `java.lang.invoke.BoundMethodHandle`  |
| 33.3% |       1 | `<init>(MethodType, LambdaForm, MemberName, boolean)` | `java.lang.invoke.DirectMethodHandle` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000301088800`)

|     % | Samples | Caller                   | Location                                            |
| ----: | ------: | ------------------------ | --------------------------------------------------- |
| 66.7% |       2 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000030108e000` |
| 33.3% |       1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003010c8000` |

##### `setGuards(Object)` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

|     % | Samples | Caller                | Location                                                  |
| ----: | ------: | --------------------- | --------------------------------------------------------- |
| 66.7% |       2 | `setCallSiteTarget()` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| 33.3% |       1 | `castAndSetGuards()`  | `org.codehaus.groovy.vmplugin.v8.Selector$CastSelector`   |

##### `equals(Object, Object)` (`java.util.Objects`)

|     % | Samples | Caller                       | Location                               |
| ----: | ------: | ---------------------------- | -------------------------------------- |
| 66.7% |       2 | `equals(Object)`             | `jdk.internal.util.StrongReferenceKey` |
| 33.3% |       1 | `equals(Object[], Object[])` | `java.util.Arrays`                     |

##### `chooseMeta(MetaClassImpl)` (`org.codehaus.groovy.vmplugin.v8.Selector$PropertySelector`)

|      % | Samples | Caller                | Location                                                  |
| -----: | ------: | --------------------- | --------------------------------------------------------- |
| 100.0% |       3 | `setCallSiteTarget()` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `checkCustomized(MethodHandle)` (`java.lang.invoke.Invokers`)

|     % | Samples | Caller                                   | Location                                            |
| ----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 33.3% |       1 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
| 33.3% |       1 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000030109a400` |
| 33.3% |       1 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000003010aa400` |

##### `<init>(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface$FallbackSupplier`)

|      % | Samples | Caller                                                                                        | Location                                        |
| -----: | ------: | --------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| 100.0% |       3 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `getInCache(LambdaFormEditor$TransformKey)` (`java.lang.invoke.LambdaFormEditor`)

|     % | Samples | Caller                                          | Location                            |
| ----: | ------: | ----------------------------------------------- | ----------------------------------- |
| 33.3% |       1 | `bindArgumentForm(int)`                         | `java.lang.invoke.LambdaFormEditor` |
| 33.3% |       1 | `filterArgumentForm(int, LambdaForm$BasicType)` | `java.lang.invoke.LambdaFormEditor` |
| 33.3% |       1 | `addArgumentForm(int, LambdaForm$BasicType)`    | `java.lang.invoke.LambdaFormEditor` |

##### `findSpecies(Object)` (`java.lang.invoke.ClassSpecializer`)

|      % | Samples | Caller               | Location                             |
| -----: | ------: | -------------------- | ------------------------------------ |
| 100.0% |       2 | `speciesData_LLLL()` | `java.lang.invoke.BoundMethodHandle` |

##### `guard(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000030109a000`)

|      % | Samples | Caller                     | Location                                         |
| -----: | ------: | -------------------------- | ------------------------------------------------ |
| 100.0% |       2 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `guard(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301188c00`)

|      % | Samples | Caller                                     | Location                                         |
| -----: | ------: | ------------------------------------------ | ------------------------------------------------ |
| 100.0% |       2 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                   | Location                  |
| ----: | ------: | ------------------------------------------ | ------------------------- |
| 83.5% |  11,445 | `_pthread_start`                           | `libsystem_pthread.dylib` |
| 83.5% |  11,445 | `thread_start`                             | `libsystem_pthread.dylib` |
| 80.2% |  10,991 | `Thread::call_run`                         | `libjvm.dylib`            |
| 80.2% |  10,991 | `thread_native_entry`                      | `libjvm.dylib`            |
| 46.1% |   6,313 | `__psynch_cvwait`                          | `libsystem_kernel.dylib`  |
| 39.2% |   5,378 | `semaphore_wait_trap`                      | `libsystem_kernel.dylib`  |
| 36.2% |   4,958 | `PlatformMonitor::wait`                    | `libjvm.dylib`            |
| 35.9% |   4,922 | `WorkerThread::run`                        | `libjvm.dylib`            |
| 27.8% |   3,804 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
| 26.2% |   3,594 | `Monitor::wait_without_safepoint_check`    | `libjvm.dylib`            |
| 11.2% |   1,541 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
| 10.0% |   1,364 | `Monitor::wait`                            | `libjvm.dylib`            |
|  9.9% |   1,359 | `ConcurrentGCThread::run`                  | `libjvm.dylib`            |
|  6.6% |     906 | `JLI_Launch`                               | `libjli.dylib`            |
|  6.6% |     906 | `main`                                     | `java`                    |
|  6.6% |     904 | `CompileQueue::get`                        | `libjvm.dylib`            |
|  4.6% |     637 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  3.8% |     517 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  3.8% |     515 | `Compile::Compile`                         | `libjvm.dylib`            |
|  3.3% |     458 | `unknown`                                  | `<unknown>`               |

#### Categories

##### Native

|     % | Samples | Function                                | Location                  |
| ----: | ------: | --------------------------------------- | ------------------------- |
| 83.5% |  11,445 | `_pthread_start`                        | `libsystem_pthread.dylib` |
| 83.5% |  11,445 | `thread_start`                          | `libsystem_pthread.dylib` |
| 80.2% |  10,991 | `Thread::call_run`                      | `libjvm.dylib`            |
| 80.2% |  10,991 | `thread_native_entry`                   | `libjvm.dylib`            |
| 46.1% |   6,313 | `__psynch_cvwait`                       | `libsystem_kernel.dylib`  |
| 39.2% |   5,378 | `semaphore_wait_trap`                   | `libsystem_kernel.dylib`  |
| 36.2% |   4,958 | `PlatformMonitor::wait`                 | `libjvm.dylib`            |
| 35.9% |   4,922 | `WorkerThread::run`                     | `libjvm.dylib`            |
| 27.8% |   3,804 | `JavaThread::thread_main_inner`         | `libjvm.dylib`            |
| 26.2% |   3,594 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib`            |
| 10.0% |   1,364 | `Monitor::wait`                         | `libjvm.dylib`            |
|  9.9% |   1,359 | `ConcurrentGCThread::run`               | `libjvm.dylib`            |
|  6.6% |     906 | `JLI_Launch`                            | `libjli.dylib`            |
|  6.6% |     906 | `main`                                  | `java`                    |
|  3.3% |     458 | `unknown`                               | `<unknown>`               |
|  3.3% |     453 | `G1ConcurrentMarkThread::run_service`   | `libjvm.dylib`            |
|  3.3% |     453 | `mach_msg2_trap`                        | `libsystem_kernel.dylib`  |
|  3.3% |     453 | `mach_msg_overwrite`                    | `libsystem_kernel.dylib`  |
|  3.3% |     453 | `mach_msg`                              | `libsystem_kernel.dylib`  |
|  3.3% |     453 | `__CFRunLoopServiceMachPort`            | `CoreFoundation`          |

##### Compiler

|     % | Samples | Function                                   | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 11.2% |   1,541 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
|  6.6% |     904 | `CompileQueue::get`                        | `libjvm.dylib` |
|  4.6% |     637 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  3.8% |     517 | `C2Compiler::compile_method`               | `libjvm.dylib` |
|  3.8% |     515 | `Compile::Compile`                         | `libjvm.dylib` |
|  1.7% |     238 | `Compile::Code_Gen`                        | `libjvm.dylib` |
|  1.6% |     216 | `Compile::Optimize`                        | `libjvm.dylib` |
|  1.1% |     144 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
|  0.9% |     118 | `Compilation::compile_method`              | `libjvm.dylib` |
|  0.9% |     118 | `Compilation::Compilation`                 | `libjvm.dylib` |
|  0.8% |     108 | `Compilation::compile_java_method`         | `libjvm.dylib` |
|  0.7% |      96 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|  0.6% |      77 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
|  0.6% |      76 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
|  0.6% |      76 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
|  0.5% |      74 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |
|  0.3% |      45 | `Compilation::build_hir`                   | `libjvm.dylib` |
|  0.3% |      39 | `Matcher::match`                           | `libjvm.dylib` |
|  0.3% |      38 | `Compile::optimize_loops`                  | `libjvm.dylib` |
|  0.3% |      36 | `Compilation::emit_lir`                    | `libjvm.dylib` |

##### Standard library

|    % | Samples | Function                        | Location                                                                |
| ---: | ------: | ------------------------------- | ----------------------------------------------------------------------- |
| 3.3% |     453 | `wait0(long)`                   | `java.lang.Object`                                                      |
| 3.3% |     453 | `wait(long)`                    | `java.lang.Object`                                                      |
| 3.3% |     453 | `wait()`                        | `java.lang.Object`                                                      |
| 3.3% |     453 | `await()`                       | `java.lang.ref.NativeReferenceQueue`                                    |
| 3.3% |     453 | `remove0()`                     | `java.lang.ref.ReferenceQueue`                                          |
| 3.3% |     453 | `remove()`                      | `java.lang.ref.NativeReferenceQueue`                                    |
| 3.3% |     453 | `run()`                         | `java.lang.ref.Finalizer$FinalizerThread`                               |
| 3.3% |     453 | `waitForReferencePendingList()` | `java.lang.ref.Reference`                                               |
| 3.3% |     453 | `processPendingReferences()`    | `java.lang.ref.Reference`                                               |
| 3.3% |     453 | `run()`                         | `java.lang.ref.Reference$ReferenceHandler`                              |
| 3.3% |     452 | `park(boolean, long)`           | `jdk.internal.misc.Unsafe`                                              |
| 3.3% |     452 | `parkNanos(Object, long)`       | `java.util.concurrent.locks.LockSupport`                                |
| 3.3% |     452 | `await(long, TimeUnit)`         | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
| 3.3% |     452 | `await(long)`                   | `java.lang.ref.ReferenceQueue`                                          |
| 3.3% |     452 | `remove0(long)`                 | `java.lang.ref.ReferenceQueue`                                          |
| 3.3% |     452 | `remove(long)`                  | `java.lang.ref.ReferenceQueue`                                          |
| 3.3% |     452 | `run()`                         | `jdk.internal.ref.CleanerImpl`                                          |
| 3.3% |     452 | `runWith(Object, Runnable)`     | `java.lang.Thread`                                                      |
| 3.3% |     452 | `run()`                         | `java.lang.Thread`                                                      |
| 3.3% |     452 | `run()`                         | `jdk.internal.misc.InnocuousThread`                                     |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 96.0% |  10,991 | `thread_native_entry` | `libjvm.dylib` |
|  4.0% |     453 | `apple_main`          | `libjli.dylib` |
| <0.1% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |  11,445 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 44.8% |   4,922 | `WorkerThread::run`             | `libjvm.dylib` |
| 34.6% |   3,804 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| 12.4% |   1,359 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  4.1% |     453 | `WatcherThread::run`            | `libjvm.dylib` |
|  4.1% |     453 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |  10,991 | `Thread::call_run` | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|      % | Samples | Callee               | Location                  |
| -----: | ------: | -------------------- | ------------------------- |
| 100.0% |   4,956 | `__psynch_cvwait`    | `libsystem_kernel.dylib`  |
|  <0.1% |       2 | `_pthread_cond_wait` | `libsystem_pthread.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 99.3% |   4,888 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
|  0.2% |      12 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib`           |
|  0.2% |       9 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
|  0.1% |       7 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib`           |
|  0.1% |       3 | `G1ParallelCleaningTask::work`    | `libjvm.dylib`           |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                                   | Location       |
| ----: | ------: | -------------------------------------------------------- | -------------- |
| 40.5% |   1,541 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib` |
| 11.9% |     453 | `signal_thread_entry`                                    | `libjvm.dylib` |
| 11.9% |     453 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |
| 11.9% |     453 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |
| 11.9% |     452 | `NotificationThread::notification_thread_entry`          | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |   3,594 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 58.7% |     904 | `CompileQueue::get`                        | `libjvm.dylib` |
| 41.3% |     637 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |   1,364 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 33.3% |     453 | `G1ConcurrentMarkThread::run_service`   | `libjvm.dylib` |
| 33.3% |     453 | `G1ServiceThread::run_service`          | `libjvm.dylib` |
| 33.3% |     453 | `G1ConcurrentRefineThread::run_service` | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 50.0% |     453 | `CreateExecutionEnvironment` | `libjli.dylib` |
| 50.0% |     453 | `ContinueInNewThread`        | `libjli.dylib` |

##### `main` (`java`)

|      % | Samples | Callee       | Location       |
| -----: | ------: | ------------ | -------------- |
| 100.0% |     906 | `JLI_Launch` | `libjli.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|      % | Samples | Callee          | Location       |
| -----: | ------: | --------------- | -------------- |
| 100.0% |     904 | `Monitor::wait` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 81.2% |     517 | `C2Compiler::compile_method`    | `libjvm.dylib` |
| 18.5% |     118 | `Compiler::compile_method`      | `libjvm.dylib` |
|  0.2% |       1 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |
|  0.2% |       1 | `ciEnv::ciEnv`                  | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee              | Location       |
| ----: | ------: | ------------------- | -------------- |
| 99.6% |     515 | `Compile::Compile`  | `libjvm.dylib` |
|  0.2% |       1 | `Compile::~Compile` | `libjvm.dylib` |
|  0.2% |       1 | `Type::Initialize`  | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 46.2% |     238 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 41.9% |     216 | `Compile::Optimize`                      | `libjvm.dylib` |
| 10.7% |      55 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  1.0% |       5 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.2% |       1 | `CallGenerator::for_inline`              | `libjvm.dylib` |

##### `unknown` (`<unknown>`)

|     % | Samples | Callee                     | Location                                             |
| ----: | ------: | -------------------------- | ---------------------------------------------------- |
| 98.9% |     453 | `main`                     | `java`                                               |
|  0.2% |       1 | `init()`                   | `org.codenarc.source.AbstractSourceCode`             |
|  0.2% |       1 | `invoke(Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x00000003015e7400`  |
|  0.2% |       1 | `newInvokeSpecial(Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000030169a000` |
|  0.2% |       1 | `<init>(String)`           | `org.codehaus.groovy.ast.ImportNode`                 |

##### `G1ConcurrentMarkThread::run_service` (`libjvm.dylib`)

|     % | Samples | Callee                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 97.1% |     440 | `Monitor::wait_without_safepoint_check`            | `libjvm.dylib` |
|  2.9% |      13 | `G1ConcurrentMarkThread::concurrent_mark_cycle_do` | `libjvm.dylib` |

##### `mach_msg_overwrite` (`libsystem_kernel.dylib`)

|      % | Samples | Callee           | Location                 |
| -----: | ------: | ---------------- | ------------------------ |
| 100.0% |     453 | `mach_msg2_trap` | `libsystem_kernel.dylib` |

##### `mach_msg` (`libsystem_kernel.dylib`)

|      % | Samples | Callee               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |     453 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `__CFRunLoopServiceMachPort` (`CoreFoundation`)

|      % | Samples | Callee     | Location                 |
| -----: | ------: | ---------- | ------------------------ |
| 100.0% |     453 | `mach_msg` | `libsystem_kernel.dylib` |

##### `wait0(long)` (`java.lang.Object`)

|      % | Samples | Callee            | Location       |
| -----: | ------: | ----------------- | -------------- |
| 100.0% |     453 | `JVM_MonitorWait` | `libjvm.dylib` |

##### `wait(long)` (`java.lang.Object`)

|      % | Samples | Callee        | Location           |
| -----: | ------: | ------------- | ------------------ |
| 100.0% |     453 | `wait0(long)` | `java.lang.Object` |

##### `wait()` (`java.lang.Object`)

|      % | Samples | Callee       | Location           |
| -----: | ------: | ------------ | ------------------ |
| 100.0% |     453 | `wait(long)` | `java.lang.Object` |

##### `await()` (`java.lang.ref.NativeReferenceQueue`)

|      % | Samples | Callee   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |     453 | `wait()` | `java.lang.Object` |

##### `remove0()` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee    | Location                             |
| -----: | ------: | --------- | ------------------------------------ |
| 100.0% |     453 | `await()` | `java.lang.ref.NativeReferenceQueue` |

##### `remove()` (`java.lang.ref.NativeReferenceQueue`)

|      % | Samples | Callee      | Location                       |
| -----: | ------: | ----------- | ------------------------------ |
| 100.0% |     453 | `remove0()` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`java.lang.ref.Finalizer$FinalizerThread`)

|      % | Samples | Callee     | Location                             |
| -----: | ------: | ---------- | ------------------------------------ |
| 100.0% |     453 | `remove()` | `java.lang.ref.NativeReferenceQueue` |

##### `waitForReferencePendingList()` (`java.lang.ref.Reference`)

|      % | Samples | Callee                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |     453 | `JVM_WaitForReferencePendingList` | `libjvm.dylib` |

##### `processPendingReferences()` (`java.lang.ref.Reference`)

|      % | Samples | Callee                          | Location                  |
| -----: | ------: | ------------------------------- | ------------------------- |
| 100.0% |     453 | `waitForReferencePendingList()` | `java.lang.ref.Reference` |

##### `run()` (`java.lang.ref.Reference$ReferenceHandler`)

|      % | Samples | Callee                       | Location                  |
| -----: | ------: | ---------------------------- | ------------------------- |
| 100.0% |     453 | `processPendingReferences()` | `java.lang.ref.Reference` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|      % | Samples | Callee        | Location       |
| -----: | ------: | ------------- | -------------- |
| 100.0% |     452 | `Unsafe_Park` | `libjvm.dylib` |

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

|      % | Samples | Callee                | Location                   |
| -----: | ------: | --------------------- | -------------------------- |
| 100.0% |     452 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

|      % | Samples | Callee                    | Location                                 |
| -----: | ------: | ------------------------- | ---------------------------------------- |
| 100.0% |     452 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `await(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee                  | Location                                                                |
| -----: | ------: | ----------------------- | ----------------------------------------------------------------------- |
| 100.0% |     452 | `await(long, TimeUnit)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `remove0(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee        | Location                       |
| -----: | ------: | ------------- | ------------------------------ |
| 100.0% |     452 | `await(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee          | Location                       |
| -----: | ------: | --------------- | ------------------------------ |
| 100.0% |     452 | `remove0(long)` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`jdk.internal.ref.CleanerImpl`)

|      % | Samples | Callee         | Location                       |
| -----: | ------: | -------------- | ------------------------------ |
| 100.0% |     452 | `remove(long)` | `java.lang.ref.ReferenceQueue` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % | Samples | Callee  | Location                       |
| -----: | ------: | ------- | ------------------------------ |
| 100.0% |     452 | `run()` | `jdk.internal.ref.CleanerImpl` |

##### `run()` (`java.lang.Thread`)

|      % | Samples | Callee                      | Location           |
| -----: | ------: | --------------------------- | ------------------ |
| 100.0% |     452 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `run()` (`jdk.internal.misc.InnocuousThread`)

|      % | Samples | Callee  | Location           |
| -----: | ------: | ------- | ------------------ |
| 100.0% |     452 | `run()` | `java.lang.Thread` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 60.5% |     144 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 16.4% |      39 | `Matcher::match`                  | `libjvm.dylib` |
| 10.9% |      26 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  9.2% |      22 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  1.3% |       3 | `PhaseOutput::install_code`       | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 26.9% |      58 | `PhaseIdealLoop::optimize`     | `libjvm.dylib` |
| 19.9% |      43 | `PhaseIterGVN::optimize`       | `libjvm.dylib` |
| 17.6% |      38 | `Compile::optimize_loops`      | `libjvm.dylib` |
|  7.9% |      17 | `PhaseCCP::PhaseCCP`           | `libjvm.dylib` |
|  7.4% |      16 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 19.4% |      28 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| 13.9% |      20 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
| 13.2% |      19 | `PhaseLive::compute`                       | `libjvm.dylib` |
| 10.4% |      15 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |
| 10.4% |      15 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 91.5% |     108 | `Compilation::compile_java_method` | `libjvm.dylib` |
|  8.5% |      10 | `ciEnv::register_method`           | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     118 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 41.7% |      45 | `Compilation::build_hir`      | `libjvm.dylib` |
| 33.3% |      36 | `Compilation::emit_lir`       | `libjvm.dylib` |
| 25.0% |      27 | `Compilation::emit_code_body` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 80.2% |      77 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| 18.8% |      18 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |
|  1.0% |       1 | `Chunk::next_chop`               | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location                   |
| ----: | ------: | ------------------------------------ | -------------------------- |
| 98.7% |      76 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib`             |
|  1.3% |       1 | `_platform_bzero`                    | `libsystem_platform.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 26.3% |      20 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 23.7% |      18 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| 10.5% |       8 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
| 10.5% |       8 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
|  6.6% |       5 | `IdealLoopTree::iteration_split`       | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 97.4% |      74 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |
|  1.3% |       1 | `ConNode::hash`               | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 18.9% |      14 | `StoreNode::Ideal`           | `libjvm.dylib` |
| 13.5% |      10 | `PhaseIterGVN::subsume_node` | `libjvm.dylib` |
| 12.2% |       9 | `RegionNode::Ideal`          | `libjvm.dylib` |
|  8.1% |       6 | `LoadNode::Ideal`            | `libjvm.dylib` |
|  6.8% |       5 | `IfNode::Ideal`              | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|     % | Samples | Callee                                       | Location       |
| ----: | ------: | -------------------------------------------- | -------------- |
| 66.7% |      30 | `IR::IR`                                     | `libjvm.dylib` |
| 13.3% |       6 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |
|  6.7% |       3 | `IR::compute_use_counts`                     | `libjvm.dylib` |
|  6.7% |       3 | `IR::eliminate_null_checks`                  | `libjvm.dylib` |
|  2.2% |       1 | `Constant::visit`                            | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|     % | Samples | Callee                 | Location       |
| ----: | ------: | ---------------------- | -------------- |
| 84.6% |      33 | `Matcher::xform`       | `libjvm.dylib` |
| 10.3% |       4 | `Matcher::find_shared` | `libjvm.dylib` |
|  2.6% |       1 | `ParmNode::Opcode`     | `libjvm.dylib` |
|  2.6% |       1 | `Node::clone`          | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      38 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 66.7% |      24 | `LinearScan::do_linear_scan` | `libjvm.dylib` |
| 33.3% |      12 | `BlockList::iterate_forward` | `libjvm.dylib` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 35.7% |   4,888 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`) ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                       |
|  6.6% |     902 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                     |
|  3.3% |     453 | `mach_msg2_trap` (`libsystem_kernel.dylib`) ← `mach_msg_overwrite` ← `mach_msg` ← `__CFRunLoopServiceMachPort` (`CoreFoundation`) ← `__CFRunLoopRun` ← `CFRunLoopRunSpecific` ← `CreateExecutionEnvironment` (`libjli.dylib`) ← `JLI_Launch` ← `main` (`java`) ← `unknown`                                                                                                                                                                                                                                                                                                 |
|  3.3% |     453 | `__ulock_wait` (`libsystem_kernel.dylib`) ← `CallJavaMainInNewThread` (`libjli.dylib`) ← `ContinueInNewThread` ← `JLI_Launch` ← `main` (`java`) ← `apple_main` (`libjli.dylib`) ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                            |
|  3.3% |     453 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformEvent::park` (`libjvm.dylib`) ← `ObjectMonitor::wait` ← `ObjectSynchronizer::wait` ← `JVM_MonitorWait` ← `wait0(long)` (`java.lang.Object`) ← `wait(long)` ← `wait()` ← `await()` (`java.lang.ref.NativeReferenceQueue`) ← `remove0()` (`java.lang.ref.ReferenceQueue`) ← `remove()` (`java.lang.ref.NativeReferenceQueue`) ← `run()` (`java.lang.ref.Finalizer$FinalizerThread`)                                                                                                                                  |
|  3.3% |     453 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `WatcherThread::sleep` ← `WatcherThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                             |
|  3.3% |     453 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ServiceThread::wait_for_task` ← `G1ServiceThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                             |
|  3.3% |     453 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` ← `G1ConcurrentRefineThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                       |
|  3.3% |     453 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `os::signal_wait` (`libjvm.dylib`) ← `signal_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                               |
|  3.3% |     453 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `JVM_WaitForReferencePendingList` ← `waitForReferencePendingList()` (`java.lang.ref.Reference`) ← `processPendingReferences()` ← `run()` (`java.lang.ref.Reference$ReferenceHandler`)                                                                                                                                                                                                                                                                          |
|  3.3% |     453 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `MonitorDeflationThread::monitor_deflation_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                |
|  3.3% |     452 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `NotificationThread::notification_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                         |
|  3.3% |     452 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `await(long)` (`java.lang.ref.ReferenceQueue`) ← `remove0(long)` ← `remove(long)` ← `run()` (`jdk.internal.ref.CleanerImpl`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` ← `run()` (`jdk.internal.misc.InnocuousThread`) |
|  3.3% |     452 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Profiler::timerLoop` (`libasyncProfiler.dylib`) ← `JvmtiAgentThread::start_function_wrapper` (`libjvm.dylib`) ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                               |
|  3.3% |     446 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `VMThread::wait_for_operation` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                          |
|  3.2% |     443 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `ServiceThread::service_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                   |
|  3.2% |     440 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ConcurrentMarkThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                         |
|  0.1% |      16 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                   |
|  0.1% |      15 | `Arena::contains` (`libjvm.dylib`) ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                     |
|  0.1% |      12 | `PhaseChaitin::elide_copy` (`libjvm.dylib`) ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                 |
