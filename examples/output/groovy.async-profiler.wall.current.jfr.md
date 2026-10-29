# Sampling profile

Collected 2,902 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Native           | 91.2% |   2,647 |
| Compiler         |  5.5% |     159 |
| Standard library |  2.0% |      59 |
| Unknown          |  1.1% |      32 |
| Ours             |  0.1% |       4 |
| JIT              | <0.1% |       1 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 2,392 samples (82.4%) thread_start at libsystem_pthread.dylib
│   └── 2,392 samples (82.4%) _pthread_start
│       ├── 2,295 samples (79.1%) thread_native_entry at libjvm.dylib
│       │   └── 2,295 samples (79.1%) Thread::call_run
│       │       ├── 965 samples (33.3%) WorkerThread::run
│       │       │   └── 959 samples (33.0%, self 36.5% globally) semaphore_wait_trap at libsystem_kernel.dylib
│       │       ├── 856 samples (29.5%) JavaThread::thread_main_inner
│       │       │   ├── 382 samples (13.2%) CompileBroker::compiler_thread_loop
│       │       │   │   ├── 204 samples (7.0%) CompileBroker::invoke_compiler_on_method
│       │       │   │   │   ├── 172 samples (5.9%) C2Compiler::compile_method
│       │       │   │   │   │   └── 171 samples (5.9%) Compile::Compile
│       │       │   │   │   │       ├── 80 samples (2.8%) Compile::Code_Gen
│       │       │   │   │   │       │   ├── 45 samples (1.6%) PhaseChaitin::Register_Allocate
│       │       │   │   │   │       │   │   ├── 13 samples (0.4%) PhaseChaitin::Split
│       │       │   │   │   │       │   │   ├── 5 samples (0.2%) PhaseLive::compute
│       │       │   │   │   │       │   │   ├── 5 samples (0.2%) PhaseChaitin::build_ifg_physical
│       │       │   │   │   │       │   │   ├── 4 samples (0.1%) PhaseAggressiveCoalesce::insert_copies
│       │       │   │   │   │       │   │   ├── 4 samples (0.1%) PhaseChaitin::Simplify
│       │       │   │   │   │       │   │   │   └── 2 samples (0.1%) IndexSetIterator::advance_and_next
│       │       │   │   │   │       │   │   └── 2 samples (0.1%) PhaseChaitin::gather_lrg_masks
│       │       │   │   │   │       │   ├── … 3 samples (0.1%) DebugInformationRecorder::describe_scope at libjvm.dylib
│       │       │   │   │   │       │   └── … 3 samples (0.1%) Arena::contains at libjvm.dylib
│       │       │   │   │   │       ├── 68 samples (2.3%) Compile::Optimize
│       │       │   │   │   │       │   ├── … 16 samples (0.6%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
│       │       │   │   │   │       │   │   ├── 4 samples (0.1%) PhaseIdealLoop::Dominators
│       │       │   │   │   │       │   │   └── 4 samples (0.1%) PhaseIdealLoop::build_loop_late
│       │       │   │   │   │       │   ├── … 7 samples (0.2%) PhaseIdealLoop::split_if_with_blocks at libjvm.dylib
│       │       │   │   │   │       │   ├── 5 samples (0.2%) PhaseCCP::PhaseCCP
│       │       │   │   │   │       │   └── … 3 samples (0.1%) MergeMemNode::Ideal at libjvm.dylib
│       │       │   │   │   │       └── 23 samples (0.8%) 6 more callees, led by (0.6%) ParseGenerator::generate
│       │       │   │   │   └── 32 samples (1.1%) Compiler::compile_method …
│       │       │   │   └── … 177 samples (6.1%, self 45.3% globally) __psynch_cvwait at libsystem_kernel.dylib
│       │       │   └── 474 samples (16.3%) 5 more callees, led by (3.3%) ServiceThread::service_thread_entry
│       │       ├── 282 samples (9.7%) ConcurrentGCThread::run
│       │       │   └── 282 samples (9.7%) 3 more callees, led by (3.3%) G1ServiceThread::run_service
│       │       └── 192 samples (6.6%) 2 more callees, led by (3.3%) VMThread::run
│       └── … 96 samples (3.3%) __ulock_wait at libsystem_kernel.dylib
├── … 96 samples (3.3%) mach_msg2_trap at libsystem_kernel.dylib
├── 32 samples (1.1%) (anonymous)
└── 382 samples (13.2%) 6 more root frames, led by (3.3%) run() at java.lang.ref.Reference$ReferenceHandler
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|     % | Samples | Function                                   | Location                 |
| ----: | ------: | ------------------------------------------ | ------------------------ |
| 45.3% |   1,315 | `__psynch_cvwait`                          | `libsystem_kernel.dylib` |
| 36.5% |   1,058 | `semaphore_wait_trap`                      | `libsystem_kernel.dylib` |
|  3.3% |      96 | `__ulock_wait`                             | `libsystem_kernel.dylib` |
|  3.3% |      96 | `mach_msg2_trap`                           | `libsystem_kernel.dylib` |
|  1.1% |      32 | `(anonymous)`                              | `<unknown>`              |
|  0.3% |       9 | `PhaseChaitin::Split`                      | `libjvm.dylib`           |
|  0.2% |       5 | `tlv_get_addr`                             | `libdyld.dylib`          |
|  0.2% |       5 | `__psynch_mutexwait`                       | `libsystem_kernel.dylib` |
|  0.1% |       4 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`           |
|  0.1% |       4 | `PhaseAggressiveCoalesce::insert_copies`   | `libjvm.dylib`           |
|  0.1% |       3 | `MultiNode::is_CFG`                        | `libjvm.dylib`           |
|  0.1% |       3 | `MergeMemNode::Ideal`                      | `libjvm.dylib`           |
|  0.1% |       3 | `PhaseIdealLoop::build_loop_late`          | `libjvm.dylib`           |
|  0.1% |       3 | `DebugInformationRecorder::describe_scope` | `libjvm.dylib`           |
|  0.1% |       3 | `PhaseLive::compute`                       | `libjvm.dylib`           |
|  0.1% |       3 | `IndexSetIterator::advance_and_next`       | `libjvm.dylib`           |
|  0.1% |       3 | `Arena::contains`                          | `libjvm.dylib`           |
|  0.1% |       2 | `PhaseIdealLoop::split_if_with_blocks`     | `libjvm.dylib`           |
|  0.1% |       2 | `PhaseIterGVN::transform_old`              | `libjvm.dylib`           |
|  0.1% |       2 | `Matcher::Label_Root`                      | `libjvm.dylib`           |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Native

|     % | Samples | Function                                                                                                                                                 | Location                   |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 45.3% |   1,315 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 36.5% |   1,058 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`   |
|  3.3% |      96 | `__ulock_wait`                                                                                                                                           | `libsystem_kernel.dylib`   |
|  3.3% |      96 | `mach_msg2_trap`                                                                                                                                         | `libsystem_kernel.dylib`   |
|  0.2% |       5 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
|  0.2% |       5 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
|  0.1% |       3 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`             |
|  0.1% |       2 | `CollectedHeap::array_allocate`                                                                                                                          | `libjvm.dylib`             |
|  0.1% |       2 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
|  0.1% |       2 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>`                             | `libjvm.dylib`             |
| <0.1% |       1 | `Parse::do_one_bytecode`                                                                                                                                 | `libjvm.dylib`             |
| <0.1% |       1 | `IdealLoopTree::record_for_igvn`                                                                                                                         | `libjvm.dylib`             |
| <0.1% |       1 | `pthread_mutex_lock`                                                                                                                                     | `libsystem_pthread.dylib`  |
| <0.1% |       1 | `_platform_bzero`                                                                                                                                        | `libsystem_platform.dylib` |
| <0.1% |       1 | `_platform_memcmp`                                                                                                                                       | `libsystem_platform.dylib` |
| <0.1% |       1 | `Dict::Insert`                                                                                                                                           | `libjvm.dylib`             |
| <0.1% |       1 | `State::_sub_Op_AndL`                                                                                                                                    | `libjvm.dylib`             |
| <0.1% |       1 | `MachOper::reg`                                                                                                                                          | `libjvm.dylib`             |
| <0.1% |       1 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                   | `libjvm.dylib`             |
| <0.1% |       1 | `JVM_GetClassAccessFlags`                                                                                                                                | `libjvm.dylib`             |

##### Compiler

|    % | Samples | Function                                    | Location       |
| ---: | ------: | ------------------------------------------- | -------------- |
| 0.3% |       9 | `PhaseChaitin::Split`                       | `libjvm.dylib` |
| 0.1% |       4 | `PhaseIdealLoop::Dominators`                | `libjvm.dylib` |
| 0.1% |       4 | `PhaseAggressiveCoalesce::insert_copies`    | `libjvm.dylib` |
| 0.1% |       3 | `MultiNode::is_CFG`                         | `libjvm.dylib` |
| 0.1% |       3 | `MergeMemNode::Ideal`                       | `libjvm.dylib` |
| 0.1% |       3 | `PhaseIdealLoop::build_loop_late`           | `libjvm.dylib` |
| 0.1% |       3 | `DebugInformationRecorder::describe_scope`  | `libjvm.dylib` |
| 0.1% |       3 | `PhaseLive::compute`                        | `libjvm.dylib` |
| 0.1% |       3 | `IndexSetIterator::advance_and_next`        | `libjvm.dylib` |
| 0.1% |       2 | `PhaseIdealLoop::split_if_with_blocks`      | `libjvm.dylib` |
| 0.1% |       2 | `PhaseIterGVN::transform_old`               | `libjvm.dylib` |
| 0.1% |       2 | `Matcher::Label_Root`                       | `libjvm.dylib` |
| 0.1% |       2 | `PhaseIdealLoop::build_loop_tree`           | `libjvm.dylib` |
| 0.1% |       2 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
| 0.1% |       2 | `PhaseChaitin::elide_copy`                  | `libjvm.dylib` |
| 0.1% |       2 | `NodeHash::hash_find_insert`                | `libjvm.dylib` |
| 0.1% |       2 | `PhaseChaitin::gather_lrg_masks`            | `libjvm.dylib` |
| 0.1% |       2 | `Compile::identify_useful_nodes`            | `libjvm.dylib` |
| 0.1% |       2 | `Matcher::pd_clone_node`                    | `libjvm.dylib` |
| 0.1% |       2 | `PhaseIdealLoop::is_dominator`              | `libjvm.dylib` |

##### Standard library

|     % | Samples | Function                                                                                  | Location                                             |
| ----: | ------: | ----------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|  0.1% |       2 | `invokeVirtual(Object, Object)`                                                           | `java.lang.invoke.DirectMethodHandle$Holder`         |
|  0.1% |       2 | `checkCustomized(MethodHandle)`                                                           | `java.lang.invoke.Invokers`                          |
|  0.1% |       2 | `invokeStatic(Object, Object, int)`                                                       | `java.lang.invoke.LambdaForm$DMH.0x000000700102b400` |
|  0.1% |       2 | `<init>(MethodType, LambdaForm)`                                                          | `java.lang.invoke.MethodHandle`                      |
|  0.1% |       2 | `forceInterpretation()`                                                                   | `java.lang.invoke.LambdaForm`                        |
| <0.1% |       1 | `readLine()`                                                                              | `java.util.Properties$LineReader`                    |
| <0.1% |       1 | `forEachRemaining(Consumer)`                                                              | `java.util.Spliterators$ArraySpliterator`            |
| <0.1% |       1 | `getAttribute(int)`                                                                       | `jdk.internal.jimage.ImageLocation`                  |
| <0.1% |       1 | `guard(Object, Object)`                                                                   | `java.lang.invoke.LambdaForm$MH.0x000000700109a000`  |
| <0.1% |       1 | `argumentsWithCombinerChecks(int, boolean, MethodType, MethodType, int[])`                | `java.lang.invoke.MethodHandles`                     |
| <0.1% |       1 | `invoke(Class, MethodHandle, String, Object, Object, Class)`                              | `java.lang.invoke.BootstrapMethodInvoker`            |
| <0.1% |       1 | `doMethodInvoke(Object, Object[])`                                                        | `org.codehaus.groovy.runtime.dgm$207`                |
| <0.1% |       1 | `realBootstrap(MethodHandles$Lookup, String, int, MethodType, boolean, boolean, boolean)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| <0.1% |       1 | `putAll(Map)`                                                                             | `java.util.Hashtable`                                |
| <0.1% |       1 | `hasPerInstanceMetaClasses()`                                                             | `org.codehaus.groovy.reflection.ClassInfo`           |
| <0.1% |       1 | `lambda$initValue$2(Method)`                                                              | `org.codehaus.groovy.reflection.CachedClass$3`       |
| <0.1% |       1 | `get(PropertyInfo$Name)`                                                                  | `com.sun.beans.introspect.PropertyInfo`              |
| <0.1% |       1 | `findLoadedModule(String)`                                                                | `jdk.internal.loader.BuiltinClassLoader`             |
| <0.1% |       1 | `getAndPut(String, MemoizeCache$ValueProvider)`                                           | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`  |
| <0.1% |       1 | `maybeCustomize(MethodHandle)`                                                            | `java.lang.invoke.Invokers`                          |

##### Unknown

|    % | Samples | Function      | Location    |
| ---: | ------: | ------------- | ----------- |
| 1.1% |      32 | `(anonymous)` | `<unknown>` |

#### Lines

Lines with the largest contribution to each function's self samples.

##### `checkCustomized(MethodHandle)` (`java.lang.invoke.Invokers`)

|     % | Samples | Location                        |
| ----: | ------: | ------------------------------- |
| 50.0% |       1 | `java.lang.invoke.Invokers:623` |
| 50.0% |       1 | `java.lang.invoke.Invokers:626` |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       2 | `java.lang.invoke.MethodHandle:479` |

##### `forceInterpretation()` (`java.lang.invoke.LambdaForm`)

|      % | Samples | Location                          |
| -----: | ------: | --------------------------------- |
| 100.0% |       2 | `java.lang.invoke.LambdaForm:923` |

##### `readLine()` (`java.util.Properties$LineReader`)

|      % | Samples | Location                              |
| -----: | ------: | ------------------------------------- |
| 100.0% |       1 | `java.util.Properties$LineReader:539` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterators$ArraySpliterator`)

|      % | Samples | Location                                       |
| -----: | ------: | ---------------------------------------------- |
| 100.0% |       1 | `java.util.Spliterators$ArraySpliterator:1024` |

##### `getAttribute(int)` (`jdk.internal.jimage.ImageLocation`)

|      % | Samples | Location                                |
| -----: | ------: | --------------------------------------- |
| 100.0% |       1 | `jdk.internal.jimage.ImageLocation:241` |

##### `argumentsWithCombinerChecks(int, boolean, MethodType, MethodType, int[])` (`java.lang.invoke.MethodHandles`)

|      % | Samples | Location                              |
| -----: | ------: | ------------------------------------- |
| 100.0% |       1 | `java.lang.invoke.MethodHandles:6275` |

##### `invoke(Class, MethodHandle, String, Object, Object, Class)` (`java.lang.invoke.BootstrapMethodInvoker`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `java.lang.invoke.BootstrapMethodInvoker:61` |

##### `realBootstrap(MethodHandles$Lookup, String, int, MethodType, boolean, boolean, boolean)` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|      % | Samples | Location                                            |
| -----: | ------: | --------------------------------------------------- |
| 100.0% |       1 | `org.codehaus.groovy.vmplugin.v8.IndyInterface:230` |

##### `putAll(Map)` (`java.util.Hashtable`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |       1 | `java.util.Hashtable:539` |

##### `hasPerInstanceMetaClasses()` (`org.codehaus.groovy.reflection.ClassInfo`)

|      % | Samples | Location                                       |
| -----: | ------: | ---------------------------------------------- |
| 100.0% |       1 | `org.codehaus.groovy.reflection.ClassInfo:423` |

##### `lambda$initValue$2(Method)` (`org.codehaus.groovy.reflection.CachedClass$3`)

|      % | Samples | Location                                          |
| -----: | ------: | ------------------------------------------------- |
| 100.0% |       1 | `org.codehaus.groovy.reflection.CachedClass$3:87` |

##### `get(PropertyInfo$Name)` (`com.sun.beans.introspect.PropertyInfo`)

|      % | Samples | Location                                    |
| -----: | ------: | ------------------------------------------- |
| 100.0% |       1 | `com.sun.beans.introspect.PropertyInfo:222` |

##### `findLoadedModule(String)` (`jdk.internal.loader.BuiltinClassLoader`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `jdk.internal.loader.BuiltinClassLoader:710` |

##### `getAndPut(String, MemoizeCache$ValueProvider)` (`org.codehaus.groovy.vmplugin.v8.CacheableCallSite`)

|      % | Samples | Location                                               |
| -----: | ------: | ------------------------------------------------------ |
| 100.0% |       1 | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite:74` |

##### `maybeCustomize(MethodHandle)` (`java.lang.invoke.Invokers`)

|      % | Samples | Location                        |
| -----: | ------: | ------------------------------- |
| 100.0% |       1 | `java.lang.invoke.Invokers:633` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location                 |
| ----: | ------: | ----------------------- | ------------------------ |
| 78.2% |   1,028 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  7.3% |      96 | `PlatformEvent::park`   | `libjvm.dylib`           |
|  7.3% |      96 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |
|  7.2% |      95 | `Parker::park`          | `libjvm.dylib`           |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 90.6% |     959 | `WorkerThread::run`              | `libjvm.dylib` |
|  9.1% |      96 | `os::signal_wait`                | `libjvm.dylib` |
|  0.2% |       2 | `WorkerThreads::run_task`        | `libjvm.dylib` |
|  0.1% |       1 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |

##### `__ulock_wait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |      96 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

|      % | Samples | Caller               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |      96 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       9 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|     % | Samples | Caller                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 20.0% |       1 | `TypePtr::xmeet`                   | `libjvm.dylib` |
| 20.0% |       1 | `TypeInstPtr::add_offset`          | `libjvm.dylib` |
| 20.0% |       1 | `PhaseChaitin::get_spillcopy_wide` | `libjvm.dylib` |
| 20.0% |       1 | `PhaseCFG::PhaseCFG`               | `libjvm.dylib` |
| 20.0% |       1 | `TypeInstPtr::make`                | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |       5 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       4 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       4 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `MultiNode::is_CFG` (`libjvm.dylib`)

|     % | Samples | Caller                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 33.3% |       1 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| 33.3% |       1 | `RegionNode::is_unreachable_region`    | `libjvm.dylib` |
| 33.3% |       1 | `RegionNode::is_unreachable_from_root` | `libjvm.dylib` |

##### `MergeMemNode::Ideal` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |       3 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       3 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `DebugInformationRecorder::describe_scope` (`libjvm.dylib`)

|     % | Samples | Caller                                    | Location       |
| ----: | ------: | ----------------------------------------- | -------------- |
| 66.7% |       2 | `NonSafepointEmitter::emit_non_safepoint` | `libjvm.dylib` |
| 33.3% |       1 | `PhaseOutput::Process_OopMap_Node`        | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       3 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                   | Location       |
| ----: | ------: | ------------------------ | -------------- |
| 66.7% |       2 | `PhaseChaitin::Simplify` | `libjvm.dylib` |
| 33.3% |       1 | `PhaseLive::add_liveout` | `libjvm.dylib` |

##### `Arena::contains` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       3 | `Matcher::xform` | `libjvm.dylib` |

##### `PhaseIdealLoop::split_if_with_blocks` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       2 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |       2 | `PhaseIterGVN::optimize` | `libjvm.dylib` |

##### `Matcher::Label_Root` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |       2 | `Matcher::Label_Root` | `libjvm.dylib` |

##### `CollectedHeap::array_allocate` (`libjvm.dylib`)

|     % | Samples | Caller                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 50.0% |       1 | `java_lang_Class::allocate_mirror` | `libjvm.dylib` |
| 50.0% |       1 | `BacktraceBuilder::push`           | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 50.0% |       1 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
| 50.0% |       1 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                            | Location       |
| -----: | ------: | ------------------------------------------------- | -------------- |
| 100.0% |       2 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_tree` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       2 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       2 | `PhaseIdealLoop::build_loop_late` | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       2 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `NodeHash::hash_find_insert` (`libjvm.dylib`)

|     % | Samples | Caller                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 50.0% |       1 | `PhaseIterGVN::transform_old`   | `libjvm.dylib` |
| 50.0% |       1 | `PhaseValues::uncached_makecon` | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Compile::identify_useful_nodes` (`libjvm.dylib`)

|      % | Samples | Caller                                   | Location       |
| -----: | ------: | ---------------------------------------- | -------------- |
| 100.0% |       2 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `Matcher::pd_clone_node` (`libjvm.dylib`)

|     % | Samples | Caller                 | Location       |
| ----: | ------: | ---------------------- | -------------- |
| 50.0% |       1 | `Matcher::find_shared` | `libjvm.dylib` |
| 50.0% |       1 | `Matcher::match`       | `libjvm.dylib` |

##### `PhaseIdealLoop::is_dominator` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       2 | `PhaseIdealLoop::compute_early_ctrl` | `libjvm.dylib` |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Caller           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |       2 | `invoke(Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001089400` |

##### `checkCustomized(MethodHandle)` (`java.lang.invoke.Invokers`)

|     % | Samples | Caller                                           | Location                           |
| ----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 50.0% |       1 | `invokeExact_MT(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |
| 50.0% |       1 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeStatic(Object, Object, int)` (`java.lang.invoke.LambdaForm$DMH.0x000000700102b400`)

|      % | Samples | Caller                | Location                                            |
| -----: | ------: | --------------------- | --------------------------------------------------- |
| 100.0% |       2 | `invoke(Object, int)` | `java.lang.invoke.LambdaForm$MH.0x0000007001031400` |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

|      % | Samples | Caller                           | Location                             |
| -----: | ------: | -------------------------------- | ------------------------------------ |
| 100.0% |       2 | `<init>(MethodType, LambdaForm)` | `java.lang.invoke.BoundMethodHandle` |

##### `forceInterpretation()` (`java.lang.invoke.LambdaForm`)

|      % | Samples | Caller      | Location                      |
| -----: | ------: | ----------- | ----------------------------- |
| 100.0% |       2 | `prepare()` | `java.lang.invoke.LambdaForm` |

##### `Parse::do_one_bytecode` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |       1 | `Parse::do_one_block` | `libjvm.dylib` |

##### `IdealLoopTree::record_for_igvn` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |       1 | `PhaseIdealLoop::do_peeling` | `libjvm.dylib` |

##### `pthread_mutex_lock` (`libsystem_pthread.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |       1 | `ThreadCritical::ThreadCritical` | `libjvm.dylib` |

##### `_platform_bzero` (`libsystem_platform.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `_platform_memcmp` (`libsystem_platform.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       1 | `DebugInformationRecorder::describe_scope` | `libjvm.dylib` |

##### `Dict::Insert` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       1 | `Type::hashcons` | `libjvm.dylib` |

##### `State::_sub_Op_AndL` (`libjvm.dylib`)

|      % | Samples | Caller       | Location       |
| -----: | ------: | ------------ | -------------- |
| 100.0% |       1 | `State::DFA` | `libjvm.dylib` |

##### `MachOper::reg` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |       1 | `storePNode::emit` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                                                   | Location       |
| -----: | ------: | ------------------------------------------------------------------------ | -------------- |
| 100.0% |       1 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` | `libjvm.dylib` |

##### `JVM_GetClassAccessFlags` (`libjvm.dylib`)

|      % | Samples | Caller              | Location    |
| -----: | ------: | ------------------- | ----------- |
| 100.0% |       1 | `break_stack_range` | `<unknown>` |

##### `readLine()` (`java.util.Properties$LineReader`)

|      % | Samples | Caller                         | Location               |
| -----: | ------: | ------------------------------ | ---------------------- |
| 100.0% |       1 | `load0(Properties$LineReader)` | `java.util.Properties` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterators$ArraySpliterator`)

|      % | Samples | Caller                        | Location                            |
| -----: | ------: | ----------------------------- | ----------------------------------- |
| 100.0% |       1 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `getAttribute(int)` (`jdk.internal.jimage.ImageLocation`)

|      % | Samples | Caller              | Location                            |
| -----: | ------: | ------------------- | ----------------------------------- |
| 100.0% |       1 | `getModuleOffset()` | `jdk.internal.jimage.ImageLocation` |

##### `guard(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700109a000`)

|      % | Samples | Caller                     | Location                                         |
| -----: | ------: | -------------------------- | ------------------------------------------------ |
| 100.0% |       1 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `argumentsWithCombinerChecks(int, boolean, MethodType, MethodType, int[])` (`java.lang.invoke.MethodHandles`)

|      % | Samples | Caller                                                                   | Location                         |
| -----: | ------: | ------------------------------------------------------------------------ | -------------------------------- |
| 100.0% |       1 | `argumentsWithCombiner(boolean, MethodHandle, int, MethodHandle, int[])` | `java.lang.invoke.MethodHandles` |

##### `invoke(Class, MethodHandle, String, Object, Object, Class)` (`java.lang.invoke.BootstrapMethodInvoker`)

|      % | Samples | Caller                                                      | Location                    |
| -----: | ------: | ----------------------------------------------------------- | --------------------------- |
| 100.0% |       1 | `makeSite(MethodHandle, String, MethodType, Object, Class)` | `java.lang.invoke.CallSite` |

##### `doMethodInvoke(Object, Object[])` (`org.codehaus.groovy.runtime.dgm$207`)

|      % | Samples | Caller                                          | Location                                             |
| -----: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| 100.0% |       1 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |

##### `realBootstrap(MethodHandles$Lookup, String, int, MethodType, boolean, boolean, boolean)` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|      % | Samples | Caller                                                             | Location                                        |
| -----: | ------: | ------------------------------------------------------------------ | ----------------------------------------------- |
| 100.0% |       1 | `bootstrap(MethodHandles$Lookup, String, MethodType, String, int)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `putAll(Map)` (`java.util.Hashtable`)

|      % | Samples | Caller                | Location                       |
| -----: | ------: | --------------------- | ------------------------------ |
| 100.0% |       1 | `addTable(Hashtable)` | `java.beans.FeatureDescriptor` |

##### `hasPerInstanceMetaClasses()` (`org.codehaus.groovy.reflection.ClassInfo`)

|      % | Samples | Caller                           | Location                                        |
| -----: | ------: | -------------------------------- | ----------------------------------------------- |
| 100.0% |       1 | `bypassCache(Boolean, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `lambda$initValue$2(Method)` (`org.codehaus.groovy.reflection.CachedClass$3`)

|      % | Samples | Caller          | Location                                                                  |
| -----: | ------: | --------------- | ------------------------------------------------------------------------- |
| 100.0% |       1 | `apply(Object)` | `org.codehaus.groovy.reflection.CachedClass$3$$Lambda.0x000000700101c4c0` |

##### `get(PropertyInfo$Name)` (`com.sun.beans.introspect.PropertyInfo`)

|      % | Samples | Caller                  | Location                                |
| -----: | ------: | ----------------------- | --------------------------------------- |
| 100.0% |       1 | `is(PropertyInfo$Name)` | `com.sun.beans.introspect.PropertyInfo` |

##### `findLoadedModule(String)` (`jdk.internal.loader.BuiltinClassLoader`)

|      % | Samples | Caller                             | Location                                 |
| -----: | ------: | ---------------------------------- | ---------------------------------------- |
| 100.0% |       1 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `getAndPut(String, MemoizeCache$ValueProvider)` (`org.codehaus.groovy.vmplugin.v8.CacheableCallSite`)

|      % | Samples | Caller                                                                          | Location                                        |
| -----: | ------: | ------------------------------------------------------------------------------- | ----------------------------------------------- |
| 100.0% |       1 | `lambda$fromCache$2(IndyInterface$FallbackSupplier, CacheableCallSite, Object)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `maybeCustomize(MethodHandle)` (`java.lang.invoke.Invokers`)

|      % | Samples | Caller                          | Location                    |
| -----: | ------: | ------------------------------- | --------------------------- |
| 100.0% |       1 | `checkCustomized(MethodHandle)` | `java.lang.invoke.Invokers` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                   | Location                  |
| ----: | ------: | ------------------------------------------ | ------------------------- |
| 82.4% |   2,392 | `_pthread_start`                           | `libsystem_pthread.dylib` |
| 82.4% |   2,392 | `thread_start`                             | `libsystem_pthread.dylib` |
| 79.1% |   2,295 | `Thread::call_run`                         | `libjvm.dylib`            |
| 79.1% |   2,295 | `thread_native_entry`                      | `libjvm.dylib`            |
| 45.3% |   1,315 | `__psynch_cvwait`                          | `libsystem_kernel.dylib`  |
| 36.5% |   1,058 | `semaphore_wait_trap`                      | `libsystem_kernel.dylib`  |
| 35.5% |   1,029 | `PlatformMonitor::wait`                    | `libjvm.dylib`            |
| 33.3% |     965 | `WorkerThread::run`                        | `libjvm.dylib`            |
| 29.5% |     856 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
| 26.0% |     754 | `Monitor::wait_without_safepoint_check`    | `libjvm.dylib`            |
| 13.2% |     382 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
|  9.7% |     282 | `ConcurrentGCThread::run`                  | `libjvm.dylib`            |
|  9.5% |     275 | `Monitor::wait`                            | `libjvm.dylib`            |
|  7.0% |     204 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  6.6% |     192 | `JLI_Launch`                               | `libjli.dylib`            |
|  6.6% |     192 | `main`                                     | `java`                    |
|  6.1% |     178 | `CompileQueue::get`                        | `libjvm.dylib`            |
|  5.9% |     172 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  5.9% |     171 | `Compile::Compile`                         | `libjvm.dylib`            |
|  3.3% |      96 | `__ulock_wait`                             | `libsystem_kernel.dylib`  |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Native

|     % | Samples | Function                                | Location                  |
| ----: | ------: | --------------------------------------- | ------------------------- |
| 82.4% |   2,392 | `_pthread_start`                        | `libsystem_pthread.dylib` |
| 82.4% |   2,392 | `thread_start`                          | `libsystem_pthread.dylib` |
| 79.1% |   2,295 | `Thread::call_run`                      | `libjvm.dylib`            |
| 79.1% |   2,295 | `thread_native_entry`                   | `libjvm.dylib`            |
| 45.3% |   1,315 | `__psynch_cvwait`                       | `libsystem_kernel.dylib`  |
| 36.5% |   1,058 | `semaphore_wait_trap`                   | `libsystem_kernel.dylib`  |
| 35.5% |   1,029 | `PlatformMonitor::wait`                 | `libjvm.dylib`            |
| 33.3% |     965 | `WorkerThread::run`                     | `libjvm.dylib`            |
| 29.5% |     856 | `JavaThread::thread_main_inner`         | `libjvm.dylib`            |
| 26.0% |     754 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib`            |
|  9.7% |     282 | `ConcurrentGCThread::run`               | `libjvm.dylib`            |
|  9.5% |     275 | `Monitor::wait`                         | `libjvm.dylib`            |
|  6.6% |     192 | `JLI_Launch`                            | `libjli.dylib`            |
|  6.6% |     192 | `main`                                  | `java`                    |
|  3.3% |      96 | `__ulock_wait`                          | `libsystem_kernel.dylib`  |
|  3.3% |      96 | `CallJavaMainInNewThread`               | `libjli.dylib`            |
|  3.3% |      96 | `ContinueInNewThread`                   | `libjli.dylib`            |
|  3.3% |      96 | `apple_main`                            | `libjli.dylib`            |
|  3.3% |      96 | `mach_msg2_trap`                        | `libsystem_kernel.dylib`  |
|  3.3% |      96 | `mach_msg_overwrite`                    | `libsystem_kernel.dylib`  |

##### Compiler

|     % | Samples | Function                                   | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 13.2% |     382 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
|  7.0% |     204 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  6.1% |     178 | `CompileQueue::get`                        | `libjvm.dylib` |
|  5.9% |     172 | `C2Compiler::compile_method`               | `libjvm.dylib` |
|  5.9% |     171 | `Compile::Compile`                         | `libjvm.dylib` |
|  2.8% |      80 | `Compile::Code_Gen`                        | `libjvm.dylib` |
|  2.3% |      68 | `Compile::Optimize`                        | `libjvm.dylib` |
|  1.6% |      45 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
|  1.3% |      39 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|  1.2% |      34 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
|  1.2% |      34 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
|  1.1% |      32 | `Compilation::compile_method`              | `libjvm.dylib` |
|  1.1% |      32 | `Compilation::Compilation`                 | `libjvm.dylib` |
|  1.0% |      30 | `Compilation::compile_java_method`         | `libjvm.dylib` |
|  0.7% |      20 | `Compile::optimize_loops`                  | `libjvm.dylib` |
|  0.7% |      20 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
|  0.7% |      19 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |
|  0.5% |      15 | `Matcher::match`                           | `libjvm.dylib` |
|  0.5% |      14 | `Compilation::build_hir`                   | `libjvm.dylib` |
|  0.4% |      13 | `PhaseChaitin::Split`                      | `libjvm.dylib` |

##### Standard library

|    % | Samples | Function                        | Location                                                                |
| ---: | ------: | ------------------------------- | ----------------------------------------------------------------------- |
| 3.3% |      96 | `waitForReferencePendingList()` | `java.lang.ref.Reference`                                               |
| 3.3% |      96 | `processPendingReferences()`    | `java.lang.ref.Reference`                                               |
| 3.3% |      96 | `run()`                         | `java.lang.ref.Reference$ReferenceHandler`                              |
| 3.3% |      96 | `wait0(long)`                   | `java.lang.Object`                                                      |
| 3.3% |      96 | `wait(long)`                    | `java.lang.Object`                                                      |
| 3.3% |      96 | `wait()`                        | `java.lang.Object`                                                      |
| 3.3% |      96 | `await()`                       | `java.lang.ref.NativeReferenceQueue`                                    |
| 3.3% |      96 | `remove0()`                     | `java.lang.ref.ReferenceQueue`                                          |
| 3.3% |      96 | `remove()`                      | `java.lang.ref.NativeReferenceQueue`                                    |
| 3.3% |      96 | `run()`                         | `java.lang.ref.Finalizer$FinalizerThread`                               |
| 3.3% |      95 | `park(boolean, long)`           | `jdk.internal.misc.Unsafe`                                              |
| 3.3% |      95 | `parkNanos(Object, long)`       | `java.util.concurrent.locks.LockSupport`                                |
| 3.3% |      95 | `await(long, TimeUnit)`         | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
| 3.3% |      95 | `await(long)`                   | `java.lang.ref.ReferenceQueue`                                          |
| 3.3% |      95 | `remove0(long)`                 | `java.lang.ref.ReferenceQueue`                                          |
| 3.3% |      95 | `remove(long)`                  | `java.lang.ref.ReferenceQueue`                                          |
| 3.3% |      95 | `run()`                         | `jdk.internal.ref.CleanerImpl`                                          |
| 3.3% |      95 | `runWith(Object, Runnable)`     | `java.lang.Thread`                                                      |
| 3.3% |      95 | `run()`                         | `java.lang.Thread`                                                      |
| 3.3% |      95 | `run()`                         | `jdk.internal.misc.InnocuousThread`                                     |

##### Unknown

|    % | Samples | Function      | Location    |
| ---: | ------: | ------------- | ----------- |
| 1.1% |      32 | `(anonymous)` | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Caller         | Location                  |
| -----: | ------: | -------------- | ------------------------- |
| 100.0% |   2,392 | `thread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |   2,295 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Caller           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   2,295 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location                 |
| ----: | ------: | ----------------------- | ------------------------ |
| 78.2% |   1,028 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  7.3% |      96 | `PlatformEvent::park`   | `libjvm.dylib`           |
|  7.3% |      96 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |
|  7.2% |      95 | `Parker::park`          | `libjvm.dylib`           |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 90.6% |     959 | `WorkerThread::run`              | `libjvm.dylib` |
|  9.1% |      96 | `os::signal_wait`                | `libjvm.dylib` |
|  0.2% |       2 | `WorkerThreads::run_task`        | `libjvm.dylib` |
|  0.1% |       1 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 73.3% |     754 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |
| 26.7% |     275 | `Monitor::wait`                         | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     965 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     856 | `Thread::call_run` | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|     % | Samples | Caller                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 12.7% |      96 | `G1ServiceThread::wait_for_task`      | `libjvm.dylib` |
| 12.7% |      96 | `WatcherThread::sleep`                | `libjvm.dylib` |
| 12.7% |      96 | `ServiceThread::service_thread_entry` | `libjvm.dylib` |
| 12.6% |      95 | `VMThread::wait_for_operation`        | `libjvm.dylib` |
| 12.6% |      95 | `G1ConcurrentMarkThread::run_service` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |     382 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     282 | `Thread::call_run` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|     % | Samples | Caller                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 64.7% |     178 | `CompileQueue::get`               | `libjvm.dylib` |
| 34.9% |      96 | `JVM_WaitForReferencePendingList` | `libjvm.dylib` |
|  0.4% |       1 | `VMThread::wait_until_executed`   | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |     204 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

|      % | Samples | Caller | Location |
| -----: | ------: | ------ | -------- |
| 100.0% |     192 | `main` | `java`   |

##### `main` (`java`)

|     % | Samples | Caller       | Location       |
| ----: | ------: | ------------ | -------------- |
| 50.0% |      96 | `apple_main` | `libjli.dylib` |
| 50.0% |      96 | `unknown`    | `<unknown>`    |

##### `CompileQueue::get` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |     178 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |     172 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |     171 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `__ulock_wait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |      96 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `CallJavaMainInNewThread` (`libjli.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |      96 | `ContinueInNewThread` | `libjli.dylib` |

##### `ContinueInNewThread` (`libjli.dylib`)

|      % | Samples | Caller       | Location       |
| -----: | ------: | ------------ | -------------- |
| 100.0% |      96 | `JLI_Launch` | `libjli.dylib` |

##### `apple_main` (`libjli.dylib`)

|      % | Samples | Caller           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |      96 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

|      % | Samples | Caller               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |      96 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `mach_msg_overwrite` (`libsystem_kernel.dylib`)

|      % | Samples | Caller     | Location                 |
| -----: | ------: | ---------- | ------------------------ |
| 100.0% |      96 | `mach_msg` | `libsystem_kernel.dylib` |

##### `waitForReferencePendingList()` (`java.lang.ref.Reference`)

|      % | Samples | Caller                       | Location                  |
| -----: | ------: | ---------------------------- | ------------------------- |
| 100.0% |      96 | `processPendingReferences()` | `java.lang.ref.Reference` |

##### `processPendingReferences()` (`java.lang.ref.Reference`)

|      % | Samples | Caller  | Location                                   |
| -----: | ------: | ------- | ------------------------------------------ |
| 100.0% |      96 | `run()` | `java.lang.ref.Reference$ReferenceHandler` |

##### `wait0(long)` (`java.lang.Object`)

|      % | Samples | Caller       | Location           |
| -----: | ------: | ------------ | ------------------ |
| 100.0% |      96 | `wait(long)` | `java.lang.Object` |

##### `wait(long)` (`java.lang.Object`)

|      % | Samples | Caller   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |      96 | `wait()` | `java.lang.Object` |

##### `wait()` (`java.lang.Object`)

|      % | Samples | Caller    | Location                             |
| -----: | ------: | --------- | ------------------------------------ |
| 100.0% |      96 | `await()` | `java.lang.ref.NativeReferenceQueue` |

##### `await()` (`java.lang.ref.NativeReferenceQueue`)

|      % | Samples | Caller      | Location                       |
| -----: | ------: | ----------- | ------------------------------ |
| 100.0% |      96 | `remove0()` | `java.lang.ref.ReferenceQueue` |

##### `remove0()` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Caller     | Location                             |
| -----: | ------: | ---------- | ------------------------------------ |
| 100.0% |      96 | `remove()` | `java.lang.ref.NativeReferenceQueue` |

##### `remove()` (`java.lang.ref.NativeReferenceQueue`)

|      % | Samples | Caller  | Location                                  |
| -----: | ------: | ------- | ----------------------------------------- |
| 100.0% |      96 | `run()` | `java.lang.ref.Finalizer$FinalizerThread` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|      % | Samples | Caller                    | Location                                 |
| -----: | ------: | ------------------------- | ---------------------------------------- |
| 100.0% |      95 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

|      % | Samples | Caller                  | Location                                                                |
| -----: | ------: | ----------------------- | ----------------------------------------------------------------------- |
| 100.0% |      95 | `await(long, TimeUnit)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

|      % | Samples | Caller        | Location                       |
| -----: | ------: | ------------- | ------------------------------ |
| 100.0% |      95 | `await(long)` | `java.lang.ref.ReferenceQueue` |

##### `await(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Caller          | Location                       |
| -----: | ------: | --------------- | ------------------------------ |
| 100.0% |      95 | `remove0(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove0(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Caller         | Location                       |
| -----: | ------: | -------------- | ------------------------------ |
| 100.0% |      95 | `remove(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Caller  | Location                       |
| -----: | ------: | ------- | ------------------------------ |
| 100.0% |      95 | `run()` | `jdk.internal.ref.CleanerImpl` |

##### `run()` (`jdk.internal.ref.CleanerImpl`)

|      % | Samples | Caller                      | Location           |
| -----: | ------: | --------------------------- | ------------------ |
| 100.0% |      95 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % | Samples | Caller  | Location           |
| -----: | ------: | ------- | ------------------ |
| 100.0% |      95 | `run()` | `java.lang.Thread` |

##### `run()` (`java.lang.Thread`)

|      % | Samples | Caller  | Location                            |
| -----: | ------: | ------- | ----------------------------------- |
| 100.0% |      95 | `run()` | `jdk.internal.misc.InnocuousThread` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      80 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      68 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      45 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 51.3% |      20 | `Compile::optimize_loops` | `libjvm.dylib` |
| 48.7% |      19 | `Compile::Optimize`       | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |      34 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      34 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      32 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      32 | `Compiler::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |      30 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      20 | `Compile::Optimize` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 65.0% |      13 | `Compile::Optimize`                    | `libjvm.dylib` |
| 25.0% |       5 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
|  5.0% |       1 | `PhaseMacroExpand::expand_macro_nodes` | `libjvm.dylib` |
|  5.0% |       1 | `Compile::remove_speculative_types`    | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |      19 | `PhaseIterGVN::optimize` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      15 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      14 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      13 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 95.9% |   2,295 | `thread_native_entry` | `libjvm.dylib` |
|  4.0% |      96 | `apple_main`          | `libjli.dylib` |
| <0.1% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   2,392 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 42.0% |     965 | `WorkerThread::run`             | `libjvm.dylib` |
| 37.3% |     856 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| 12.3% |     282 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  4.2% |      96 | `VMThread::run`                 | `libjvm.dylib` |
|  4.2% |      96 | `WatcherThread::run`            | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   2,295 | `Thread::call_run` | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Callee               | Location                  |
| ----: | ------: | -------------------- | ------------------------- |
| 99.9% |   1,028 | `__psynch_cvwait`    | `libsystem_kernel.dylib`  |
|  0.1% |       1 | `_pthread_cond_wait` | `libsystem_pthread.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 99.4% |     959 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
|  0.4% |       4 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
|  0.1% |       1 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib`           |
|  0.1% |       1 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib`           |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                          | Location       |
| ----: | ------: | ----------------------------------------------- | -------------- |
| 44.6% |     382 | `CompileBroker::compiler_thread_loop`           | `libjvm.dylib` |
| 11.2% |      96 | `ServiceThread::service_thread_entry`           | `libjvm.dylib` |
| 11.2% |      96 | `signal_thread_entry`                           | `libjvm.dylib` |
| 11.2% |      96 | `JvmtiAgentThread::start_function_wrapper`      | `libjvm.dylib` |
| 11.1% |      95 | `NotificationThread::notification_thread_entry` | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |     754 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 53.4% |     204 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
| 46.6% |     178 | `CompileQueue::get`                        | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 34.0% |      96 | `G1ServiceThread::run_service`          | `libjvm.dylib` |
| 34.0% |      96 | `G1ConcurrentMarkThread::run_service`   | `libjvm.dylib` |
| 31.9% |      90 | `G1ConcurrentRefineThread::run_service` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |     275 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 84.3% |     172 | `C2Compiler::compile_method` | `libjvm.dylib` |
| 15.7% |      32 | `Compiler::compile_method`   | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 50.0% |      96 | `ContinueInNewThread`        | `libjli.dylib` |
| 50.0% |      96 | `CreateExecutionEnvironment` | `libjli.dylib` |

##### `main` (`java`)

|      % | Samples | Callee       | Location       |
| -----: | ------: | ------------ | -------------- |
| 100.0% |     192 | `JLI_Launch` | `libjli.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|      % | Samples | Callee          | Location       |
| -----: | ------: | --------------- | -------------- |
| 100.0% |     178 | `Monitor::wait` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee             | Location       |
| ----: | ------: | ------------------ | -------------- |
| 99.4% |     171 | `Compile::Compile` | `libjvm.dylib` |
|  0.6% |       1 | `Chunk::next_chop` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 46.8% |      80 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 39.8% |      68 | `Compile::Optimize`                      | `libjvm.dylib` |
| 10.5% |      18 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.6% |       1 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.6% |       1 | `TypeFunc::make`                         | `libjvm.dylib` |

##### `CallJavaMainInNewThread` (`libjli.dylib`)

|      % | Samples | Callee         | Location                 |
| -----: | ------: | -------------- | ------------------------ |
| 100.0% |      96 | `__ulock_wait` | `libsystem_kernel.dylib` |

##### `ContinueInNewThread` (`libjli.dylib`)

|      % | Samples | Callee                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |      96 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `apple_main` (`libjli.dylib`)

|      % | Samples | Callee | Location |
| -----: | ------: | ------ | -------- |
| 100.0% |      96 | `main` | `java`   |

##### `mach_msg_overwrite` (`libsystem_kernel.dylib`)

|      % | Samples | Callee           | Location                 |
| -----: | ------: | ---------------- | ------------------------ |
| 100.0% |      96 | `mach_msg2_trap` | `libsystem_kernel.dylib` |

##### `waitForReferencePendingList()` (`java.lang.ref.Reference`)

|      % | Samples | Callee                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      96 | `JVM_WaitForReferencePendingList` | `libjvm.dylib` |

##### `processPendingReferences()` (`java.lang.ref.Reference`)

|      % | Samples | Callee                          | Location                  |
| -----: | ------: | ------------------------------- | ------------------------- |
| 100.0% |      96 | `waitForReferencePendingList()` | `java.lang.ref.Reference` |

##### `run()` (`java.lang.ref.Reference$ReferenceHandler`)

|      % | Samples | Callee                       | Location                  |
| -----: | ------: | ---------------------------- | ------------------------- |
| 100.0% |      96 | `processPendingReferences()` | `java.lang.ref.Reference` |

##### `wait0(long)` (`java.lang.Object`)

|      % | Samples | Callee            | Location       |
| -----: | ------: | ----------------- | -------------- |
| 100.0% |      96 | `JVM_MonitorWait` | `libjvm.dylib` |

##### `wait(long)` (`java.lang.Object`)

|      % | Samples | Callee        | Location           |
| -----: | ------: | ------------- | ------------------ |
| 100.0% |      96 | `wait0(long)` | `java.lang.Object` |

##### `wait()` (`java.lang.Object`)

|      % | Samples | Callee       | Location           |
| -----: | ------: | ------------ | ------------------ |
| 100.0% |      96 | `wait(long)` | `java.lang.Object` |

##### `await()` (`java.lang.ref.NativeReferenceQueue`)

|      % | Samples | Callee   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |      96 | `wait()` | `java.lang.Object` |

##### `remove0()` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee    | Location                             |
| -----: | ------: | --------- | ------------------------------------ |
| 100.0% |      96 | `await()` | `java.lang.ref.NativeReferenceQueue` |

##### `remove()` (`java.lang.ref.NativeReferenceQueue`)

|      % | Samples | Callee      | Location                       |
| -----: | ------: | ----------- | ------------------------------ |
| 100.0% |      96 | `remove0()` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`java.lang.ref.Finalizer$FinalizerThread`)

|      % | Samples | Callee     | Location                             |
| -----: | ------: | ---------- | ------------------------------------ |
| 100.0% |      96 | `remove()` | `java.lang.ref.NativeReferenceQueue` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|      % | Samples | Callee        | Location       |
| -----: | ------: | ------------- | -------------- |
| 100.0% |      95 | `Unsafe_Park` | `libjvm.dylib` |

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

|      % | Samples | Callee                | Location                   |
| -----: | ------: | --------------------- | -------------------------- |
| 100.0% |      95 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

|      % | Samples | Callee                    | Location                                 |
| -----: | ------: | ------------------------- | ---------------------------------------- |
| 100.0% |      95 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `await(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee                  | Location                                                                |
| -----: | ------: | ----------------------- | ----------------------------------------------------------------------- |
| 100.0% |      95 | `await(long, TimeUnit)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `remove0(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee        | Location                       |
| -----: | ------: | ------------- | ------------------------------ |
| 100.0% |      95 | `await(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee          | Location                       |
| -----: | ------: | --------------- | ------------------------------ |
| 100.0% |      95 | `remove0(long)` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`jdk.internal.ref.CleanerImpl`)

|      % | Samples | Callee         | Location                       |
| -----: | ------: | -------------- | ------------------------------ |
| 100.0% |      95 | `remove(long)` | `java.lang.ref.ReferenceQueue` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % | Samples | Callee  | Location                       |
| -----: | ------: | ------- | ------------------------------ |
| 100.0% |      95 | `run()` | `jdk.internal.ref.CleanerImpl` |

##### `run()` (`java.lang.Thread`)

|      % | Samples | Callee                      | Location           |
| -----: | ------: | --------------------------- | ------------------ |
| 100.0% |      95 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `run()` (`jdk.internal.misc.InnocuousThread`)

|      % | Samples | Callee  | Location           |
| -----: | ------: | ------- | ------------------ |
| 100.0% |      95 | `run()` | `java.lang.Thread` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 56.3% |      45 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 18.8% |      15 | `Matcher::match`                  | `libjvm.dylib` |
| 12.5% |      10 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
| 11.3% |       9 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  1.3% |       1 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                     | Location       |
| ----: | ------: | -------------------------- | -------------- |
| 29.4% |      20 | `Compile::optimize_loops`  | `libjvm.dylib` |
| 27.9% |      19 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |
| 19.1% |      13 | `PhaseIterGVN::optimize`   | `libjvm.dylib` |
|  7.4% |       5 | `PhaseCCP::PhaseCCP`       | `libjvm.dylib` |
|  4.4% |       3 | `PhaseCCP::do_transform`   | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 28.9% |      13 | `PhaseChaitin::Split`                    | `libjvm.dylib` |
| 11.1% |       5 | `PhaseLive::compute`                     | `libjvm.dylib` |
| 11.1% |       5 | `PhaseChaitin::build_ifg_physical`       | `libjvm.dylib` |
|  8.9% |       4 | `PhaseChaitin::Simplify`                 | `libjvm.dylib` |
|  8.9% |       4 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 87.2% |      34 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| 12.8% |       5 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 29.4% |      10 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| 23.5% |       8 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 14.7% |       5 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
| 11.8% |       4 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |
|  5.9% |       2 | `IdealLoopTree::iteration_split`       | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Callee                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      34 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 93.8% |      30 | `Compilation::compile_java_method` | `libjvm.dylib` |
|  6.3% |       2 | `ciEnv::register_method`           | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |      32 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 46.7% |      14 | `Compilation::build_hir`       | `libjvm.dylib` |
| 40.0% |      12 | `Compilation::emit_lir`        | `libjvm.dylib` |
|  6.7% |       2 | `ciMethod::ensure_method_data` | `libjvm.dylib` |
|  6.7% |       2 | `Compilation::emit_code_body`  | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      20 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 95.0% |      19 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |
|  5.0% |       1 | `PhiNode::hash`               | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 15.8% |       3 | `MergeMemNode::Ideal`        | `libjvm.dylib` |
| 15.8% |       3 | `NodeHash::hash_find_insert` | `libjvm.dylib` |
| 15.8% |       3 | `RegionNode::Ideal`          | `libjvm.dylib` |
| 15.8% |       3 | `PhaseIterGVN::subsume_node` | `libjvm.dylib` |
|  5.3% |       1 | `IfFalseNode::Opcode`        | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 73.3% |      11 | `Matcher::xform`             | `libjvm.dylib` |
| 13.3% |       2 | `Matcher::find_shared`       | `libjvm.dylib` |
|  6.7% |       1 | `Matcher::pd_clone_node`     | `libjvm.dylib` |
|  6.7% |       1 | `Matcher::find_shared_visit` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|     % | Samples | Callee                                       | Location       |
| ----: | ------: | -------------------------------------------- | -------------- |
| 50.0% |       7 | `IR::IR`                                     | `libjvm.dylib` |
| 28.6% |       4 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |
| 14.3% |       2 | `IR::eliminate_null_checks`                  | `libjvm.dylib` |
|  7.1% |       1 | `IR::compute_use_counts`                     | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|     % | Samples | Callee                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 15.4% |       2 | `PhaseChaitin::split_USE` | `libjvm.dylib` |
|  7.7% |       1 | `MachNode::rematerialize` | `libjvm.dylib` |
|  7.7% |       1 | `TypeNode::ideal_reg`     | `libjvm.dylib` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 33.0% |     959 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`) ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                       |
|  6.1% |     177 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                     |
|  3.3% |      96 | `__ulock_wait` (`libsystem_kernel.dylib`) ← `CallJavaMainInNewThread` (`libjli.dylib`) ← `ContinueInNewThread` ← `JLI_Launch` ← `main` (`java`) ← `apple_main` (`libjli.dylib`) ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                            |
|  3.3% |      96 | `mach_msg2_trap` (`libsystem_kernel.dylib`) ← `mach_msg_overwrite` ← `mach_msg` ← `__CFRunLoopServiceMachPort` (`CoreFoundation`) ← `__CFRunLoopRun` ← `CFRunLoopRunSpecific` ← `CreateExecutionEnvironment` (`libjli.dylib`) ← `JLI_Launch` ← `main` (`java`) ← `unknown`                                                                                                                                                                                                                                                                                                 |
|  3.3% |      96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `JVM_WaitForReferencePendingList` ← `waitForReferencePendingList()` (`java.lang.ref.Reference`) ← `processPendingReferences()` ← `run()` (`java.lang.ref.Reference$ReferenceHandler`)                                                                                                                                                                                                                                                                          |
|  3.3% |      96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ServiceThread::wait_for_task` ← `G1ServiceThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                             |
|  3.3% |      96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `WatcherThread::sleep` ← `WatcherThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                             |
|  3.3% |      96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `ServiceThread::service_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                   |
|  3.3% |      96 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `os::signal_wait` (`libjvm.dylib`) ← `signal_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                               |
|  3.3% |      96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformEvent::park` (`libjvm.dylib`) ← `ObjectMonitor::wait` ← `ObjectSynchronizer::wait` ← `JVM_MonitorWait` ← `wait0(long)` (`java.lang.Object`) ← `wait(long)` ← `wait()` ← `await()` (`java.lang.ref.NativeReferenceQueue`) ← `remove0()` (`java.lang.ref.ReferenceQueue`) ← `remove()` (`java.lang.ref.NativeReferenceQueue`) ← `run()` (`java.lang.ref.Finalizer$FinalizerThread`)                                                                                                                                  |
|  3.3% |      96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Profiler::timerLoop` (`libasyncProfiler.dylib`) ← `JvmtiAgentThread::start_function_wrapper` (`libjvm.dylib`) ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                               |
|  3.3% |      95 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `VMThread::wait_for_operation` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                          |
|  3.3% |      95 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ConcurrentMarkThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                         |
|  3.3% |      95 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `NotificationThread::notification_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                         |
|  3.3% |      95 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `await(long)` (`java.lang.ref.ReferenceQueue`) ← `remove0(long)` ← `remove(long)` ← `run()` (`jdk.internal.ref.CleanerImpl`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` ← `run()` (`jdk.internal.misc.InnocuousThread`) |
|  3.1% |      91 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `MonitorDeflationThread::monitor_deflation_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                |
|  3.1% |      90 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` ← `G1ConcurrentRefineThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                       |
|  0.3% |       9 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                   |
|  0.1% |       4 | `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                |
|  0.1% |       3 | `MergeMemNode::Ideal` (`libjvm.dylib`) ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                            |
