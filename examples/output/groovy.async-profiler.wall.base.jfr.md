# Sampling profile

Collected 6,374 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Native           | 94.1% |   5,998 |
| Compiler         |  4.2% |     266 |
| Standard library |  1.5% |      97 |
| JIT              |  0.1% |       7 |
| Ours             |  0.1% |       6 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 5,321 samples (83.5%) thread_start at libsystem_pthread.dylib
│   └── 5,321 samples (83.5%) _pthread_start
│       ├── 5,109 samples (80.2%) thread_native_entry at libjvm.dylib
│       │   └── 5,109 samples (80.2%) Thread::call_run
│       │       ├── 2,159 samples (33.9%) WorkerThread::run
│       │       │   └── 2,143 samples (33.6%, self 37.0% globally) semaphore_wait_trap at libsystem_kernel.dylib
│       │       ├── 1,895 samples (29.7%) JavaThread::thread_main_inner
│       │       │   ├── 841 samples (13.2%) CompileBroker::compiler_thread_loop
│       │       │   │   ├── … 469 samples (7.4%) PlatformMonitor::wait at libjvm.dylib
│       │       │   │   │   ├── 464 samples (7.3%, self 47.0% globally) __psynch_cvwait at libsystem_kernel.dylib
│       │       │   │   │   └── … 5 samples (0.1%, self 1.1% globally) __psynch_mutexwait at libsystem_kernel.dylib
│       │       │   │   └── 369 samples (5.8%) CompileBroker::invoke_compiler_on_method
│       │       │   │       ├── 320 samples (5.0%) C2Compiler::compile_method
│       │       │   │       │   └── 316 samples (5.0%) Compile::Compile
│       │       │   │       │       ├── 145 samples (2.3%) Compile::Code_Gen
│       │       │   │       │       │   ├── 77 samples (1.2%) PhaseChaitin::Register_Allocate
│       │       │   │       │       │   │   ├── 14 samples (0.2%) PhaseChaitin::Split
│       │       │   │       │       │   │   ├── 13 samples (0.2%) PhaseChaitin::build_ifg_physical
│       │       │   │       │       │   │   ├── 8 samples (0.1%) PhaseChaitin::post_allocate_copy_removal
│       │       │   │       │       │   │   │   └── 5 samples (0.1%) PhaseChaitin::elide_copy
│       │       │   │       │       │   │   └── 42 samples (0.7%) 17 more callees, led by (0.1%) PhaseAggressiveCoalesce::insert_copies
│       │       │   │       │       │   ├── … 5 samples (0.1%) Pipeline_Use::full_latency at libjvm.dylib
│       │       │   │       │       │   └── … 4 samples (0.1%) Node_Backward_Iterator::next at libjvm.dylib
│       │       │   │       │       ├── 121 samples (1.9%) Compile::Optimize
│       │       │   │       │       │   ├── … 10 samples (0.2%) PhaseIdealLoop::build_loop_late at libjvm.dylib
│       │       │   │       │       │   │   └── 8 samples (0.1%) PhaseIdealLoop::build_loop_late_post_work
│       │       │   │       │       │   └── 81 samples (1.3%) 11 more callees, led by (0.5%) PhaseIdealLoop::optimize
│       │       │   │       │       └── 50 samples (0.8%) 7 more callees, led by (0.6%) ParseGenerator::generate
│       │       │   │       └── 49 samples (0.8%) 3 more callees, led by (0.7%) Compiler::compile_method
│       │       │   └── 1,054 samples (16.5%) 5 more callees, led by (3.3%) signal_thread_entry
│       │       ├── 633 samples (9.9%) ConcurrentGCThread::run
│       │       │   └── 633 samples (9.9%) 3 more callees, led by (3.3%) G1ConcurrentMarkThread::run_service
│       │       └── 422 samples (6.6%) 2 more callees, led by (3.3%) WatcherThread::run
│       └── … 211 samples (3.3%) __ulock_wait at libsystem_kernel.dylib
├── … 211 samples (3.3%) mach_msg2_trap at libsystem_kernel.dylib
├── … 194 samples (3.0%) invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object) at java.lang.invoke.LambdaForm$DMH.0x0000007001088800
│   ├── … 31 samples (0.5%) setCallSiteTarget() at org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector
│   │   └── … 16 samples (0.3%) java_lang_Throwable::fill_in_stack_trace at libjvm.dylib
│   └── 137 samples (2.1%) 2 more callees, led by (2.1%) fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[]) at org.codehaus.groovy.vmplugin.v8.IndyInterface
└── 640 samples (10.0%) 5 more root frames, led by (3.3%) run() at java.lang.ref.Finalizer$FinalizerThread
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|     % | Samples | Function                                    | Location                   |
| ----: | ------: | ------------------------------------------- | -------------------------- |
| 47.0% |   2,994 | `__psynch_cvwait`                           | `libsystem_kernel.dylib`   |
| 37.0% |   2,360 | `semaphore_wait_trap`                       | `libsystem_kernel.dylib`   |
|  3.3% |     211 | `__ulock_wait`                              | `libsystem_kernel.dylib`   |
|  3.3% |     211 | `mach_msg2_trap`                            | `libsystem_kernel.dylib`   |
|  1.1% |      72 | `__psynch_mutexwait`                        | `libsystem_kernel.dylib`   |
|  0.2% |      11 | `PhaseChaitin::Split`                       | `libjvm.dylib`             |
|  0.1% |       7 | `InstanceKlass::find_method_index`          | `libjvm.dylib`             |
|  0.1% |       6 | `PhaseChaitin::build_ifg_physical`          | `libjvm.dylib`             |
|  0.1% |       6 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib`             |
|  0.1% |       6 | `pthread_jit_write_protect_np`              | `libsystem_pthread.dylib`  |
|  0.1% |       6 | `java_lang_Throwable::fill_in_stack_trace`  | `libjvm.dylib`             |
|  0.1% |       5 | `PhaseChaitin::elide_copy`                  | `libjvm.dylib`             |
|  0.1% |       5 | `tlv_get_addr`                              | `libdyld.dylib`            |
|  0.1% |       5 | `Node_Backward_Iterator::next`              | `libjvm.dylib`             |
|  0.1% |       5 | `Pipeline_Use::full_latency`                | `libjvm.dylib`             |
|  0.1% |       5 | `Compile::identify_useful_nodes`            | `libjvm.dylib`             |
|  0.1% |       5 | `PhaseAggressiveCoalesce::insert_copies`    | `libjvm.dylib`             |
|  0.1% |       5 | `sys_icache_invalidate`                     | `libsystem_platform.dylib` |
|  0.1% |       4 | `PhaseIterGVN::transform_old`               | `libjvm.dylib`             |
|  0.1% |       4 | `IndexSetIterator::advance_and_next`        | `libjvm.dylib`             |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Native

|     % | Samples | Function                                                                                                                                                 | Location                   |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 47.0% |   2,994 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 37.0% |   2,360 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`   |
|  3.3% |     211 | `__ulock_wait`                                                                                                                                           | `libsystem_kernel.dylib`   |
|  3.3% |     211 | `mach_msg2_trap`                                                                                                                                         | `libsystem_kernel.dylib`   |
|  1.1% |      72 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
|  0.1% |       7 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
|  0.1% |       6 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
|  0.1% |       6 | `java_lang_Throwable::fill_in_stack_trace`                                                                                                               | `libjvm.dylib`             |
|  0.1% |       5 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
|  0.1% |       5 | `Pipeline_Use::full_latency`                                                                                                                             | `libjvm.dylib`             |
|  0.1% |       5 | `sys_icache_invalidate`                                                                                                                                  | `libsystem_platform.dylib` |
|  0.1% |       4 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
|  0.1% |       4 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`             |
| <0.1% |       3 | `_platform_bzero`                                                                                                                                        | `libsystem_platform.dylib` |
| <0.1% |       3 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| <0.1% |       3 | `frame::sender_for_compiled_frame`                                                                                                                       | `libjvm.dylib`             |
| <0.1% |       2 | `swtch_pri`                                                                                                                                              | `libsystem_kernel.dylib`   |
| <0.1% |       2 | `_platform_memmove`                                                                                                                                      | `libsystem_platform.dylib` |
| <0.1% |       2 | `Dict::Insert`                                                                                                                                           | `libjvm.dylib`             |
| <0.1% |       2 | `__mmap`                                                                                                                                                 | `libsystem_kernel.dylib`   |

##### Compiler

|     % | Samples | Function                                    | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
|  0.2% |      11 | `PhaseChaitin::Split`                       | `libjvm.dylib` |
|  0.1% |       6 | `PhaseChaitin::build_ifg_physical`          | `libjvm.dylib` |
|  0.1% |       6 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
|  0.1% |       5 | `PhaseChaitin::elide_copy`                  | `libjvm.dylib` |
|  0.1% |       5 | `Node_Backward_Iterator::next`              | `libjvm.dylib` |
|  0.1% |       5 | `Compile::identify_useful_nodes`            | `libjvm.dylib` |
|  0.1% |       5 | `PhaseAggressiveCoalesce::insert_copies`    | `libjvm.dylib` |
|  0.1% |       4 | `PhaseIterGVN::transform_old`               | `libjvm.dylib` |
|  0.1% |       4 | `IndexSetIterator::advance_and_next`        | `libjvm.dylib` |
| <0.1% |       3 | `PhaseIdealLoop::build_loop_late`           | `libjvm.dylib` |
| <0.1% |       3 | `Type::cmp`                                 | `libjvm.dylib` |
| <0.1% |       3 | `PhaseLive::compute`                        | `libjvm.dylib` |
| <0.1% |       3 | `Node::is_CFG`                              | `libjvm.dylib` |
| <0.1% |       3 | `Node::dominates`                           | `libjvm.dylib` |
| <0.1% |       2 | `RegionNode::is_CFG`                        | `libjvm.dylib` |
| <0.1% |       2 | `Node::latency`                             | `libjvm.dylib` |
| <0.1% |       2 | `PhaseCFG::partial_latency_of_defs`         | `libjvm.dylib` |
| <0.1% |       2 | `PhaseIdealLoop::try_sink_out_of_loop`      | `libjvm.dylib` |
| <0.1% |       2 | `PhaseChaitin::post_allocate_copy_removal`  | `libjvm.dylib` |
| <0.1% |       2 | `Node::pinned`                              | `libjvm.dylib` |

##### Standard library

|     % | Samples | Function                                                                                    | Location                                             |
| ----: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| <0.1% |       3 | `equals(Object, Object)`                                                                    | `java.util.Objects`                                  |
| <0.1% |       2 | `forEachWithCancel(Spliterator, Sink)`                                                      | `java.util.stream.ReferencePipeline`                 |
| <0.1% |       2 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| <0.1% |       2 | `<init>(MethodType, LambdaForm)`                                                            | `java.lang.invoke.MethodHandle`                      |
| <0.1% |       2 | `asCollectorType(Class, int, int)`                                                          | `java.lang.invoke.MethodType`                        |
| <0.1% |       2 | `newInstance(Class, int)`                                                                   | `java.lang.reflect.Array`                            |
| <0.1% |       2 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x00000070010a1000`  |
| <0.1% |       2 | `invokeBasic(Object[])`                                                                     | `java.lang.invoke.MethodHandle`                      |
| <0.1% |       2 | `getOrTransformMetaMethod(MetaClass, Class, CachedMethod)`                                  | `org.codehaus.groovy.vmplugin.v9.Java9`              |
| <0.1% |       2 | `cast(Object)`                                                                              | `java.lang.Class`                                    |
| <0.1% |       1 | `getZipEntry(String, int)`                                                                  | `java.util.zip.ZipFile`                              |
| <0.1% |       1 | `<init>(Object, Object)`                                                                    | `groovy.lang.Closure`                                |
| <0.1% |       1 | `get(Object)`                                                                               | `java.util.concurrent.ConcurrentHashMap`             |
| <0.1% |       1 | `isResolved()`                                                                              | `java.lang.invoke.MemberName`                        |
| <0.1% |       1 | `hashCode()`                                                                                | `java.lang.invoke.MemberName`                        |
| <0.1% |       1 | `populateMethods(List, CachedClass)`                                                        | `groovy.lang.MetaClassImpl`                          |
| <0.1% |       1 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000700109a000`  |
| <0.1% |       1 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800`  |
| <0.1% |       1 | `<init>(Charset, byte[], int, int)`                                                         | `java.lang.String`                                   |
| <0.1% |       1 | `replaceParameterTypes(int, int, Class[])`                                                  | `java.lang.invoke.MethodType`                        |

#### Lines

Lines with the largest contribution to each function's self samples.

##### `equals(Object, Object)` (`java.util.Objects`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       3 | `java.util.Objects:64` |

##### `forEachWithCancel(Spliterator, Sink)` (`java.util.stream.ReferencePipeline`)

|      % | Samples | Location                                 |
| -----: | ------: | ---------------------------------------- |
| 100.0% |       2 | `java.util.stream.ReferencePipeline:129` |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       2 | `java.lang.invoke.MethodHandle:479` |

##### `asCollectorType(Class, int, int)` (`java.lang.invoke.MethodType`)

|     % | Samples | Location                          |
| ----: | ------: | --------------------------------- |
| 50.0% |       1 | `java.lang.invoke.MethodType:647` |
| 50.0% |       1 | `java.lang.invoke.MethodType:654` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|      % | Samples | Location                     |
| -----: | ------: | ---------------------------- |
| 100.0% |       2 | `java.lang.reflect.Array:78` |

##### `getOrTransformMetaMethod(MetaClass, Class, CachedMethod)` (`org.codehaus.groovy.vmplugin.v9.Java9`)

|      % | Samples | Location                                    |
| -----: | ------: | ------------------------------------------- |
| 100.0% |       2 | `org.codehaus.groovy.vmplugin.v9.Java9:252` |

##### `cast(Object)` (`java.lang.Class`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       2 | `java.lang.Class:4068` |

##### `getZipEntry(String, int)` (`java.util.zip.ZipFile`)

|      % | Samples | Location                    |
| -----: | ------: | --------------------------- |
| 100.0% |       1 | `java.util.zip.ZipFile:703` |

##### `<init>(Object, Object)` (`groovy.lang.Closure`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |       1 | `groovy.lang.Closure:215` |

##### `get(Object)` (`java.util.concurrent.ConcurrentHashMap`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `java.util.concurrent.ConcurrentHashMap:936` |

##### `isResolved()` (`java.lang.invoke.MemberName`)

|      % | Samples | Location                          |
| -----: | ------: | --------------------------------- |
| 100.0% |       1 | `java.lang.invoke.MemberName:798` |

##### `hashCode()` (`java.lang.invoke.MemberName`)

|      % | Samples | Location                          |
| -----: | ------: | --------------------------------- |
| 100.0% |       1 | `java.lang.invoke.MemberName:723` |

##### `populateMethods(List, CachedClass)` (`groovy.lang.MetaClassImpl`)

|      % | Samples | Location                        |
| -----: | ------: | ------------------------------- |
| 100.0% |       1 | `groovy.lang.MetaClassImpl:413` |

##### `<init>(Charset, byte[], int, int)` (`java.lang.String`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       1 | `java.lang.String:531` |

##### `replaceParameterTypes(int, int, Class[])` (`java.lang.invoke.MethodType`)

|      % | Samples | Location                          |
| -----: | ------: | --------------------------------- |
| 100.0% |       1 | `java.lang.invoke.MethodType:568` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location                 |
| ----: | ------: | ----------------------- | ------------------------ |
| 78.9% |   2,362 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  7.0% |     211 | `PlatformEvent::park`   | `libjvm.dylib`           |
|  7.0% |     211 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |
|  7.0% |     210 | `Parker::park`          | `libjvm.dylib`           |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 90.8% |   2,143 | `WorkerThread::run`              | `libjvm.dylib` |
|  8.9% |     211 | `os::signal_wait`                | `libjvm.dylib` |
|  0.2% |       4 | `WorkerThreads::run_task`        | `libjvm.dylib` |
|  0.1% |       2 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |

##### `__ulock_wait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |     211 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

|      % | Samples | Caller               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |     211 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |      72 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      11 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 85.7% |       6 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |
| 14.3% |       1 | `LinkResolver::resolve_method`          | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       6 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|     % | Samples | Caller                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 83.3% |       5 | `PhaseIdealLoop::build_loop_late`    | `libjvm.dylib` |
| 16.7% |       1 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                                      | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
| 33.3% |       2 | `JVM_NewArray`                              | `libjvm.dylib` |
| 16.7% |       1 | `SharedRuntime::resolve_opt_virtual_call_C` | `libjvm.dylib` |
| 16.7% |       1 | `JVM_Clone`                                 | `libjvm.dylib` |
| 16.7% |       1 | `JVM_GetClassConstantPool`                  | `libjvm.dylib` |
| 16.7% |       1 | `InterpreterRuntime::ldc`                   | `libjvm.dylib` |

##### `java_lang_Throwable::fill_in_stack_trace` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       6 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       5 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|     % | Samples | Caller                                           | Location       |
| ----: | ------: | ------------------------------------------------ | -------------- |
| 20.0% |       1 | `PhaseChaitin::stretch_base_pointer_live_ranges` | `libjvm.dylib` |
| 20.0% |       1 | `TypeInstPtr::add_offset`                        | `libjvm.dylib` |
| 20.0% |       1 | `GraphKit::cast_not_null`                        | `libjvm.dylib` |
| 20.0% |       1 | `Parse::ensure_memory_phi`                       | `libjvm.dylib` |
| 20.0% |       1 | `Compile::flatten_alias_type`                    | `libjvm.dylib` |

##### `Node_Backward_Iterator::next` (`libjvm.dylib`)

|     % | Samples | Caller                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 60.0% |       3 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |
| 40.0% |       2 | `PhaseCFG::schedule_late`      | `libjvm.dylib` |

##### `Pipeline_Use::full_latency` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |       5 | `Scheduling::AddNodeToBundle` | `libjvm.dylib` |

##### `Compile::identify_useful_nodes` (`libjvm.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 60.0% |       3 | `PhaseRemoveUseless::PhaseRemoveUseless`      | `libjvm.dylib` |
| 40.0% |       2 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       5 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `sys_icache_invalidate` (`libsystem_platform.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 80.0% |       4 | `nmethod::oops_do_process_weak`  | `libjvm.dylib` |
| 20.0% |       1 | `CompiledIC::set_to_megamorphic` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |       4 | `PhaseIterGVN::optimize` | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 25.0% |       1 | `IndexSet::lrg_union`                          | `libjvm.dylib` |
| 25.0% |       1 | `PhaseIFG::SquareUp`                           | `libjvm.dylib` |
| 25.0% |       1 | `PhaseIFG::re_insert`                          | `libjvm.dylib` |
| 25.0% |       1 | `PhaseChaitin::compute_initial_block_pressure` | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|     % | Samples | Caller                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 25.0% |       1 | `MemAllocator::allocate`             | `libjvm.dylib` |
| 25.0% |       1 | `Method::print_short_name`           | `libjvm.dylib` |
| 25.0% |       1 | `PhaseChaitin::Register_Allocate`    | `libjvm.dylib` |
| 25.0% |       1 | `PhaseIdealLoop::compute_early_ctrl` | `libjvm.dylib` |

##### `Arena::contains` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       4 | `Matcher::xform` | `libjvm.dylib` |

##### `_platform_bzero` (`libsystem_platform.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 33.3% |       1 | `Matcher::xform`                 | `libjvm.dylib` |
| 33.3% |       1 | `Matcher::Label_Root`            | `libjvm.dylib` |
| 33.3% |       1 | `PhaseIdealLoop::split_thru_phi` | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       3 | `DebugInformationRecorder::describe_scope` | `libjvm.dylib` |

##### `frame::sender_for_compiled_frame` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       3 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       3 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Type::cmp` (`libjvm.dylib`)

|      % | Samples | Caller         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |       3 | `Dict::Insert` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       3 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Node::is_CFG` (`libjvm.dylib`)

|     % | Samples | Caller                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 66.7% |       2 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
| 33.3% |       1 | `PhaseIdealLoop::build_loop_late`    | `libjvm.dylib` |

##### `Node::dominates` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |       3 | `MemNode::all_controls_dominate` | `libjvm.dylib` |

##### `equals(Object, Object)` (`java.util.Objects`)

|      % | Samples | Caller           | Location                               |
| -----: | ------: | ---------------- | -------------------------------------- |
| 100.0% |       3 | `equals(Object)` | `jdk.internal.util.StrongReferenceKey` |

##### `swtch_pri` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |       2 | `GlobalCounter::write_synchronize` | `libjvm.dylib` |

##### `_platform_memmove` (`libsystem_platform.dylib`)

|     % | Samples | Caller             | Location       |
| ----: | ------: | ------------------ | -------------- |
| 50.0% |       1 | `Node_Array::grow` | `libjvm.dylib` |
| 50.0% |       1 | `VectorSet::grow`  | `libjvm.dylib` |

##### `Dict::Insert` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       2 | `Type::hashcons` | `libjvm.dylib` |

##### `__mmap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                   | Location       |
| ----: | ------: | ------------------------ | -------------- |
| 50.0% |       1 | `os::pd_commit_memory`   | `libjvm.dylib` |
| 50.0% |       1 | `os::pd_uncommit_memory` | `libjvm.dylib` |

##### `RegionNode::is_CFG` (`libjvm.dylib`)

|     % | Samples | Caller                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 50.0% |       1 | `PhaseIdealLoop::build_loop_tree` | `libjvm.dylib` |
| 50.0% |       1 | `PhaseIdealLoop::Dominators`      | `libjvm.dylib` |

##### `Node::latency` (`libjvm.dylib`)

|      % | Samples | Caller                              | Location       |
| -----: | ------: | ----------------------------------- | -------------- |
| 100.0% |       2 | `PhaseCFG::partial_latency_of_defs` | `libjvm.dylib` |

##### `PhaseCFG::partial_latency_of_defs` (`libjvm.dylib`)

|      % | Samples | Caller                         | Location       |
| -----: | ------: | ------------------------------ | -------------- |
| 100.0% |       2 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `PhaseIdealLoop::try_sink_out_of_loop` (`libjvm.dylib`)

|     % | Samples | Caller                                      | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
| 50.0% |       1 | `PhaseIdealLoop::split_if_with_blocks`      | `libjvm.dylib` |
| 50.0% |       1 | `PhaseIdealLoop::split_if_with_blocks_post` | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Node::pinned` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       2 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `forEachWithCancel(Spliterator, Sink)` (`java.util.stream.ReferencePipeline`)

|      % | Samples | Caller                                  | Location                            |
| -----: | ------: | --------------------------------------- | ----------------------------------- |
| 100.0% |       2 | `copyIntoWithCancel(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001088800`)

|     % | Samples | Caller                           | Location                                            |
| ----: | ------: | -------------------------------- | --------------------------------------------------- |
| 50.0% |       1 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700108e000` |
| 50.0% |       1 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800` |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

|      % | Samples | Caller                           | Location                             |
| -----: | ------: | -------------------------------- | ------------------------------------ |
| 100.0% |       2 | `<init>(MethodType, LambdaForm)` | `java.lang.invoke.BoundMethodHandle` |

##### `asCollectorType(Class, int, int)` (`java.lang.invoke.MethodType`)

|      % | Samples | Caller                         | Location                        |
| -----: | ------: | ------------------------------ | ------------------------------- |
| 100.0% |       2 | `asCollector(int, Class, int)` | `java.lang.invoke.MethodHandle` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|      % | Samples | Caller                              | Location                                             |
| -----: | ------: | ----------------------------------- | ---------------------------------------------------- |
| 100.0% |       2 | `invokeStatic(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000700102b400` |

##### `collector(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010a1000`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |       2 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800` |

##### `invokeBasic(Object[])` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Caller                                  | Location                                             |
| ----: | ------: | --------------------------------------- | ---------------------------------------------------- |
| 50.0% |       1 | `invoke(Object, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000700109ac00`  |
| 50.0% |       1 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001030400` |

##### `getOrTransformMetaMethod(MetaClass, Class, CachedMethod)` (`org.codehaus.groovy.vmplugin.v9.Java9`)

|      % | Samples | Caller                                              | Location                                |
| -----: | ------: | --------------------------------------------------- | --------------------------------------- |
| 100.0% |       2 | `transformMetaMethod(MetaClass, MetaMethod, Class)` | `org.codehaus.groovy.vmplugin.v9.Java9` |

##### `cast(Object)` (`java.lang.Class`)

|      % | Samples | Caller                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |       2 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `getZipEntry(String, int)` (`java.util.zip.ZipFile`)

|      % | Samples | Caller             | Location                |
| -----: | ------: | ------------------ | ----------------------- |
| 100.0% |       1 | `getEntry(String)` | `java.util.zip.ZipFile` |

##### `<init>(Object, Object)` (`groovy.lang.Closure`)

|      % | Samples | Caller                              | Location                                                                             |
| -----: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------ |
| 100.0% |       1 | `<init>(Object, Object, Reference)` | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3$_closure7` |

##### `get(Object)` (`java.util.concurrent.ConcurrentHashMap`)

|      % | Samples | Caller                     | Location                                 |
| -----: | ------: | -------------------------- | ---------------------------------------- |
| 100.0% |       1 | `findLoadedModule(String)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `isResolved()` (`java.lang.invoke.MemberName`)

|      % | Samples | Caller                                               | Location                              |
| -----: | ------: | ---------------------------------------------------- | ------------------------------------- |
| 100.0% |       1 | `resolveOrFail(byte, MemberName, Class, int, Class)` | `java.lang.invoke.MemberName$Factory` |

##### `hashCode()` (`java.lang.invoke.MemberName`)

|      % | Samples | Caller        | Location                                 |
| -----: | ------: | ------------- | ---------------------------------------- |
| 100.0% |       1 | `get(Object)` | `java.util.concurrent.ConcurrentHashMap` |

##### `populateMethods(List, CachedClass)` (`groovy.lang.MetaClassImpl`)

|      % | Samples | Caller              | Location                    |
| -----: | ------: | ------------------- | --------------------------- |
| 100.0% |       1 | `fillMethodIndex()` | `groovy.lang.MetaClassImpl` |

##### `guard(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700109a000`)

|      % | Samples | Caller                     | Location                                         |
| -----: | ------: | -------------------------- | ------------------------------------------------ |
| 100.0% |       1 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010a1800`)

|      % | Samples | Caller                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |       1 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `<init>(Charset, byte[], int, int)` (`java.lang.String`)

|      % | Samples | Caller                    | Location           |
| -----: | ------: | ------------------------- | ------------------ |
| 100.0% |       1 | `<init>(byte[], Charset)` | `java.lang.String` |

##### `replaceParameterTypes(int, int, Class[])` (`java.lang.invoke.MethodType`)

|      % | Samples | Caller                        | Location                        |
| -----: | ------: | ----------------------------- | ------------------------------- |
| 100.0% |       1 | `asSpreader(int, Class, int)` | `java.lang.invoke.MethodHandle` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                   | Location                  |
| ----: | ------: | ------------------------------------------ | ------------------------- |
| 83.5% |   5,321 | `_pthread_start`                           | `libsystem_pthread.dylib` |
| 83.5% |   5,321 | `thread_start`                             | `libsystem_pthread.dylib` |
| 80.2% |   5,109 | `Thread::call_run`                         | `libjvm.dylib`            |
| 80.2% |   5,109 | `thread_native_entry`                      | `libjvm.dylib`            |
| 47.0% |   2,994 | `__psynch_cvwait`                          | `libsystem_kernel.dylib`  |
| 37.1% |   2,367 | `PlatformMonitor::wait`                    | `libjvm.dylib`            |
| 37.0% |   2,360 | `semaphore_wait_trap`                      | `libsystem_kernel.dylib`  |
| 33.9% |   2,159 | `WorkerThread::run`                        | `libjvm.dylib`            |
| 29.7% |   1,895 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
| 26.4% |   1,683 | `Monitor::wait_without_safepoint_check`    | `libjvm.dylib`            |
| 13.2% |     841 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
| 10.7% |     684 | `Monitor::wait`                            | `libjvm.dylib`            |
|  9.9% |     633 | `ConcurrentGCThread::run`                  | `libjvm.dylib`            |
|  7.4% |     472 | `CompileQueue::get`                        | `libjvm.dylib`            |
|  6.6% |     422 | `JLI_Launch`                               | `libjli.dylib`            |
|  6.6% |     422 | `main`                                     | `java`                    |
|  5.8% |     369 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  5.0% |     320 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  5.0% |     316 | `Compile::Compile`                         | `libjvm.dylib`            |
|  3.3% |     213 | `unknown`                                  | `<unknown>`               |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Native

|     % | Samples | Function                                | Location                  |
| ----: | ------: | --------------------------------------- | ------------------------- |
| 83.5% |   5,321 | `_pthread_start`                        | `libsystem_pthread.dylib` |
| 83.5% |   5,321 | `thread_start`                          | `libsystem_pthread.dylib` |
| 80.2% |   5,109 | `Thread::call_run`                      | `libjvm.dylib`            |
| 80.2% |   5,109 | `thread_native_entry`                   | `libjvm.dylib`            |
| 47.0% |   2,994 | `__psynch_cvwait`                       | `libsystem_kernel.dylib`  |
| 37.1% |   2,367 | `PlatformMonitor::wait`                 | `libjvm.dylib`            |
| 37.0% |   2,360 | `semaphore_wait_trap`                   | `libsystem_kernel.dylib`  |
| 33.9% |   2,159 | `WorkerThread::run`                     | `libjvm.dylib`            |
| 29.7% |   1,895 | `JavaThread::thread_main_inner`         | `libjvm.dylib`            |
| 26.4% |   1,683 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib`            |
| 10.7% |     684 | `Monitor::wait`                         | `libjvm.dylib`            |
|  9.9% |     633 | `ConcurrentGCThread::run`               | `libjvm.dylib`            |
|  6.6% |     422 | `JLI_Launch`                            | `libjli.dylib`            |
|  6.6% |     422 | `main`                                  | `java`                    |
|  3.3% |     213 | `unknown`                               | `<unknown>`               |
|  3.3% |     211 | `__ulock_wait`                          | `libsystem_kernel.dylib`  |
|  3.3% |     211 | `CallJavaMainInNewThread`               | `libjli.dylib`            |
|  3.3% |     211 | `ContinueInNewThread`                   | `libjli.dylib`            |
|  3.3% |     211 | `apple_main`                            | `libjli.dylib`            |
|  3.3% |     211 | `os::signal_wait`                       | `libjvm.dylib`            |

##### Compiler

|     % | Samples | Function                                   | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 13.2% |     841 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
|  7.4% |     472 | `CompileQueue::get`                        | `libjvm.dylib` |
|  5.8% |     369 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  5.0% |     320 | `C2Compiler::compile_method`               | `libjvm.dylib` |
|  5.0% |     316 | `Compile::Compile`                         | `libjvm.dylib` |
|  2.3% |     145 | `Compile::Code_Gen`                        | `libjvm.dylib` |
|  1.9% |     121 | `Compile::Optimize`                        | `libjvm.dylib` |
|  1.2% |      77 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
|  1.1% |      70 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|  0.9% |      59 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
|  0.9% |      58 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
|  0.7% |      45 | `Compilation::compile_method`              | `libjvm.dylib` |
|  0.7% |      45 | `Compilation::Compilation`                 | `libjvm.dylib` |
|  0.7% |      43 | `Compilation::compile_java_method`         | `libjvm.dylib` |
|  0.6% |      40 | `Compile::optimize_loops`                  | `libjvm.dylib` |
|  0.5% |      35 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
|  0.5% |      34 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |
|  0.4% |      27 | `Matcher::match`                           | `libjvm.dylib` |
|  0.3% |      22 | `PhaseCFG::global_code_motion`             | `libjvm.dylib` |
|  0.3% |      22 | `PhaseCFG::do_global_code_motion`          | `libjvm.dylib` |

##### Standard library

|    % | Samples | Function                        | Location                                                                |
| ---: | ------: | ------------------------------- | ----------------------------------------------------------------------- |
| 3.3% |     211 | `wait0(long)`                   | `java.lang.Object`                                                      |
| 3.3% |     211 | `wait(long)`                    | `java.lang.Object`                                                      |
| 3.3% |     211 | `wait()`                        | `java.lang.Object`                                                      |
| 3.3% |     211 | `await()`                       | `java.lang.ref.NativeReferenceQueue`                                    |
| 3.3% |     211 | `remove0()`                     | `java.lang.ref.ReferenceQueue`                                          |
| 3.3% |     211 | `remove()`                      | `java.lang.ref.NativeReferenceQueue`                                    |
| 3.3% |     211 | `run()`                         | `java.lang.ref.Finalizer$FinalizerThread`                               |
| 3.3% |     211 | `waitForReferencePendingList()` | `java.lang.ref.Reference`                                               |
| 3.3% |     211 | `processPendingReferences()`    | `java.lang.ref.Reference`                                               |
| 3.3% |     211 | `run()`                         | `java.lang.ref.Reference$ReferenceHandler`                              |
| 3.3% |     210 | `park(boolean, long)`           | `jdk.internal.misc.Unsafe`                                              |
| 3.3% |     210 | `parkNanos(Object, long)`       | `java.util.concurrent.locks.LockSupport`                                |
| 3.3% |     210 | `await(long, TimeUnit)`         | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
| 3.3% |     210 | `await(long)`                   | `java.lang.ref.ReferenceQueue`                                          |
| 3.3% |     210 | `remove0(long)`                 | `java.lang.ref.ReferenceQueue`                                          |
| 3.3% |     210 | `remove(long)`                  | `java.lang.ref.ReferenceQueue`                                          |
| 3.3% |     210 | `run()`                         | `jdk.internal.ref.CleanerImpl`                                          |
| 3.3% |     210 | `runWith(Object, Runnable)`     | `java.lang.Thread`                                                      |
| 3.3% |     210 | `run()`                         | `java.lang.Thread`                                                      |
| 3.3% |     210 | `run()`                         | `jdk.internal.misc.InnocuousThread`                                     |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Caller         | Location                  |
| -----: | ------: | -------------- | ------------------------- |
| 100.0% |   5,321 | `thread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |   5,109 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Caller           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   5,109 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location                 |
| ----: | ------: | ----------------------- | ------------------------ |
| 78.9% |   2,362 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  7.0% |     211 | `PlatformEvent::park`   | `libjvm.dylib`           |
|  7.0% |     211 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |
|  7.0% |     210 | `Parker::park`          | `libjvm.dylib`           |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 71.1% |   1,683 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |
| 28.9% |     684 | `Monitor::wait`                         | `libjvm.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 90.8% |   2,143 | `WorkerThread::run`              | `libjvm.dylib` |
|  8.9% |     211 | `os::signal_wait`                | `libjvm.dylib` |
|  0.2% |       4 | `WorkerThreads::run_task`        | `libjvm.dylib` |
|  0.1% |       2 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   2,159 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   1,895 | `Thread::call_run` | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|     % | Samples | Caller                                                   | Location       |
| ----: | ------: | -------------------------------------------------------- | -------------- |
| 12.5% |     211 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |
| 12.5% |     211 | `WatcherThread::sleep`                                   | `libjvm.dylib` |
| 12.5% |     211 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |
| 12.5% |     210 | `G1ServiceThread::wait_for_task`                         | `libjvm.dylib` |
| 12.5% |     210 | `VMThread::wait_for_operation`                           | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |     841 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|     % | Samples | Caller                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 68.6% |     469 | `CompileQueue::get`               | `libjvm.dylib` |
| 30.8% |     211 | `JVM_WaitForReferencePendingList` | `libjvm.dylib` |
|  0.6% |       4 | `VMThread::wait_until_executed`   | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     633 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |     472 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

|      % | Samples | Caller | Location |
| -----: | ------: | ------ | -------- |
| 100.0% |     422 | `main` | `java`   |

##### `main` (`java`)

|     % | Samples | Caller       | Location       |
| ----: | ------: | ------------ | -------------- |
| 50.0% |     211 | `apple_main` | `libjli.dylib` |
| 50.0% |     211 | `unknown`    | `<unknown>`    |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |     369 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |     320 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |     316 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `__ulock_wait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |     211 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `CallJavaMainInNewThread` (`libjli.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |     211 | `ContinueInNewThread` | `libjli.dylib` |

##### `ContinueInNewThread` (`libjli.dylib`)

|      % | Samples | Caller       | Location       |
| -----: | ------: | ------------ | -------------- |
| 100.0% |     211 | `JLI_Launch` | `libjli.dylib` |

##### `apple_main` (`libjli.dylib`)

|      % | Samples | Caller           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |     211 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `os::signal_wait` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |     211 | `signal_thread_entry` | `libjvm.dylib` |

##### `wait0(long)` (`java.lang.Object`)

|      % | Samples | Caller       | Location           |
| -----: | ------: | ------------ | ------------------ |
| 100.0% |     211 | `wait(long)` | `java.lang.Object` |

##### `wait(long)` (`java.lang.Object`)

|      % | Samples | Caller   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |     211 | `wait()` | `java.lang.Object` |

##### `wait()` (`java.lang.Object`)

|      % | Samples | Caller    | Location                             |
| -----: | ------: | --------- | ------------------------------------ |
| 100.0% |     211 | `await()` | `java.lang.ref.NativeReferenceQueue` |

##### `await()` (`java.lang.ref.NativeReferenceQueue`)

|      % | Samples | Caller      | Location                       |
| -----: | ------: | ----------- | ------------------------------ |
| 100.0% |     211 | `remove0()` | `java.lang.ref.ReferenceQueue` |

##### `remove0()` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Caller     | Location                             |
| -----: | ------: | ---------- | ------------------------------------ |
| 100.0% |     211 | `remove()` | `java.lang.ref.NativeReferenceQueue` |

##### `remove()` (`java.lang.ref.NativeReferenceQueue`)

|      % | Samples | Caller  | Location                                  |
| -----: | ------: | ------- | ----------------------------------------- |
| 100.0% |     211 | `run()` | `java.lang.ref.Finalizer$FinalizerThread` |

##### `waitForReferencePendingList()` (`java.lang.ref.Reference`)

|      % | Samples | Caller                       | Location                  |
| -----: | ------: | ---------------------------- | ------------------------- |
| 100.0% |     211 | `processPendingReferences()` | `java.lang.ref.Reference` |

##### `processPendingReferences()` (`java.lang.ref.Reference`)

|      % | Samples | Caller  | Location                                   |
| -----: | ------: | ------- | ------------------------------------------ |
| 100.0% |     211 | `run()` | `java.lang.ref.Reference$ReferenceHandler` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|      % | Samples | Caller                    | Location                                 |
| -----: | ------: | ------------------------- | ---------------------------------------- |
| 100.0% |     210 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

|      % | Samples | Caller                  | Location                                                                |
| -----: | ------: | ----------------------- | ----------------------------------------------------------------------- |
| 100.0% |     210 | `await(long, TimeUnit)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

|      % | Samples | Caller        | Location                       |
| -----: | ------: | ------------- | ------------------------------ |
| 100.0% |     210 | `await(long)` | `java.lang.ref.ReferenceQueue` |

##### `await(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Caller          | Location                       |
| -----: | ------: | --------------- | ------------------------------ |
| 100.0% |     210 | `remove0(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove0(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Caller         | Location                       |
| -----: | ------: | -------------- | ------------------------------ |
| 100.0% |     210 | `remove(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Caller  | Location                       |
| -----: | ------: | ------- | ------------------------------ |
| 100.0% |     210 | `run()` | `jdk.internal.ref.CleanerImpl` |

##### `run()` (`jdk.internal.ref.CleanerImpl`)

|      % | Samples | Caller                      | Location           |
| -----: | ------: | --------------------------- | ------------------ |
| 100.0% |     210 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % | Samples | Caller  | Location           |
| -----: | ------: | ------- | ------------------ |
| 100.0% |     210 | `run()` | `java.lang.Thread` |

##### `run()` (`java.lang.Thread`)

|      % | Samples | Caller  | Location                            |
| -----: | ------: | ------- | ----------------------------------- |
| 100.0% |     210 | `run()` | `jdk.internal.misc.InnocuousThread` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     145 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     121 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      77 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 57.1% |      40 | `Compile::optimize_loops` | `libjvm.dylib` |
| 42.9% |      30 | `Compile::Optimize`       | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      59 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |      58 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      45 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      45 | `Compiler::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |      43 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      40 | `Compile::Optimize` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 60.0% |      21 | `Compile::Optimize`                    | `libjvm.dylib` |
| 28.6% |      10 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| 11.4% |       4 | `PhaseMacroExpand::expand_macro_nodes` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |      34 | `PhaseIterGVN::optimize` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      27 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseCFG::global_code_motion` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      22 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |

##### `PhaseCFG::do_global_code_motion` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      22 | `Compile::Code_Gen` | `libjvm.dylib` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 96.0% |   5,109 | `thread_native_entry` | `libjvm.dylib` |
|  4.0% |     211 | `apple_main`          | `libjli.dylib` |
| <0.1% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   5,321 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 42.3% |   2,159 | `WorkerThread::run`             | `libjvm.dylib` |
| 37.1% |   1,895 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| 12.4% |     633 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  4.1% |     211 | `WatcherThread::run`            | `libjvm.dylib` |
|  4.1% |     211 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   5,109 | `Thread::call_run` | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Callee               | Location                  |
| ----: | ------: | -------------------- | ------------------------- |
| 99.8% |   2,362 | `__psynch_cvwait`    | `libsystem_kernel.dylib`  |
|  0.2% |       5 | `_pthread_cond_wait` | `libsystem_pthread.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 99.3% |   2,143 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
|  0.5% |      10 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
|  0.1% |       3 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib`           |
|  0.1% |       2 | `G1BatchedTask::work`             | `libjvm.dylib`           |
| <0.1% |       1 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib`           |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                                   | Location       |
| ----: | ------: | -------------------------------------------------------- | -------------- |
| 44.4% |     841 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib` |
| 11.1% |     211 | `signal_thread_entry`                                    | `libjvm.dylib` |
| 11.1% |     211 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |
| 11.1% |     211 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |
| 11.1% |     211 | `JvmtiAgentThread::start_function_wrapper`               | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |   1,683 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 56.1% |     472 | `CompileQueue::get`                        | `libjvm.dylib` |
| 43.9% |     369 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |     684 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 33.3% |     211 | `G1ConcurrentMarkThread::run_service`   | `libjvm.dylib` |
| 33.3% |     211 | `G1ServiceThread::run_service`          | `libjvm.dylib` |
| 33.3% |     211 | `G1ConcurrentRefineThread::run_service` | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|     % | Samples | Callee          | Location       |
| ----: | ------: | --------------- | -------------- |
| 99.4% |     469 | `Monitor::wait` | `libjvm.dylib` |
|  0.6% |       3 | `Mutex::lock`   | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 50.0% |     211 | `ContinueInNewThread`        | `libjli.dylib` |
| 50.0% |     211 | `CreateExecutionEnvironment` | `libjli.dylib` |

##### `main` (`java`)

|      % | Samples | Callee       | Location       |
| -----: | ------: | ------------ | -------------- |
| 100.0% |     422 | `JLI_Launch` | `libjli.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 86.7% |     320 | `C2Compiler::compile_method`  | `libjvm.dylib` |
| 12.2% |      45 | `Compiler::compile_method`    | `libjvm.dylib` |
|  0.8% |       3 | `ciEnv::ciEnv`                | `libjvm.dylib` |
|  0.3% |       1 | `CompilationLog::log_compile` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 98.8% |     316 | `Compile::Compile`             | `libjvm.dylib` |
|  0.9% |       3 | `Compile::~Compile`            | `libjvm.dylib` |
|  0.3% |       1 | `PhaseValues::init_con_caches` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 45.9% |     145 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 38.3% |     121 | `Compile::Optimize`                      | `libjvm.dylib` |
| 12.7% |      40 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.9% |       3 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.9% |       3 | `CallGenerator::for_inline`              | `libjvm.dylib` |

##### `unknown` (`<unknown>`)

|     % | Samples | Callee                                                                                        | Location                                          |
| ----: | ------: | --------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| 99.1% |     211 | `main`                                                                                        | `java`                                            |
|  0.5% |       1 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`   |
|  0.5% |       1 | `applyTo(SourceCode, List)`                                                                   | `org.codenarc.rule.imports.NoWildcardImportsRule` |

##### `CallJavaMainInNewThread` (`libjli.dylib`)

|      % | Samples | Callee         | Location                 |
| -----: | ------: | -------------- | ------------------------ |
| 100.0% |     211 | `__ulock_wait` | `libsystem_kernel.dylib` |

##### `ContinueInNewThread` (`libjli.dylib`)

|      % | Samples | Callee                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |     211 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `apple_main` (`libjli.dylib`)

|      % | Samples | Callee | Location |
| -----: | ------: | ------ | -------- |
| 100.0% |     211 | `main` | `java`   |

##### `os::signal_wait` (`libjvm.dylib`)

|      % | Samples | Callee                | Location                 |
| -----: | ------: | --------------------- | ------------------------ |
| 100.0% |     211 | `semaphore_wait_trap` | `libsystem_kernel.dylib` |

##### `wait0(long)` (`java.lang.Object`)

|      % | Samples | Callee            | Location       |
| -----: | ------: | ----------------- | -------------- |
| 100.0% |     211 | `JVM_MonitorWait` | `libjvm.dylib` |

##### `wait(long)` (`java.lang.Object`)

|      % | Samples | Callee        | Location           |
| -----: | ------: | ------------- | ------------------ |
| 100.0% |     211 | `wait0(long)` | `java.lang.Object` |

##### `wait()` (`java.lang.Object`)

|      % | Samples | Callee       | Location           |
| -----: | ------: | ------------ | ------------------ |
| 100.0% |     211 | `wait(long)` | `java.lang.Object` |

##### `await()` (`java.lang.ref.NativeReferenceQueue`)

|      % | Samples | Callee   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |     211 | `wait()` | `java.lang.Object` |

##### `remove0()` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee    | Location                             |
| -----: | ------: | --------- | ------------------------------------ |
| 100.0% |     211 | `await()` | `java.lang.ref.NativeReferenceQueue` |

##### `remove()` (`java.lang.ref.NativeReferenceQueue`)

|      % | Samples | Callee      | Location                       |
| -----: | ------: | ----------- | ------------------------------ |
| 100.0% |     211 | `remove0()` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`java.lang.ref.Finalizer$FinalizerThread`)

|      % | Samples | Callee     | Location                             |
| -----: | ------: | ---------- | ------------------------------------ |
| 100.0% |     211 | `remove()` | `java.lang.ref.NativeReferenceQueue` |

##### `waitForReferencePendingList()` (`java.lang.ref.Reference`)

|      % | Samples | Callee                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |     211 | `JVM_WaitForReferencePendingList` | `libjvm.dylib` |

##### `processPendingReferences()` (`java.lang.ref.Reference`)

|      % | Samples | Callee                          | Location                  |
| -----: | ------: | ------------------------------- | ------------------------- |
| 100.0% |     211 | `waitForReferencePendingList()` | `java.lang.ref.Reference` |

##### `run()` (`java.lang.ref.Reference$ReferenceHandler`)

|      % | Samples | Callee                       | Location                  |
| -----: | ------: | ---------------------------- | ------------------------- |
| 100.0% |     211 | `processPendingReferences()` | `java.lang.ref.Reference` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|      % | Samples | Callee        | Location       |
| -----: | ------: | ------------- | -------------- |
| 100.0% |     210 | `Unsafe_Park` | `libjvm.dylib` |

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

|      % | Samples | Callee                | Location                   |
| -----: | ------: | --------------------- | -------------------------- |
| 100.0% |     210 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

|      % | Samples | Callee                    | Location                                 |
| -----: | ------: | ------------------------- | ---------------------------------------- |
| 100.0% |     210 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `await(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee                  | Location                                                                |
| -----: | ------: | ----------------------- | ----------------------------------------------------------------------- |
| 100.0% |     210 | `await(long, TimeUnit)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `remove0(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee        | Location                       |
| -----: | ------: | ------------- | ------------------------------ |
| 100.0% |     210 | `await(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee          | Location                       |
| -----: | ------: | --------------- | ------------------------------ |
| 100.0% |     210 | `remove0(long)` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`jdk.internal.ref.CleanerImpl`)

|      % | Samples | Callee         | Location                       |
| -----: | ------: | -------------- | ------------------------------ |
| 100.0% |     210 | `remove(long)` | `java.lang.ref.ReferenceQueue` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % | Samples | Callee  | Location                       |
| -----: | ------: | ------- | ------------------------------ |
| 100.0% |     210 | `run()` | `jdk.internal.ref.CleanerImpl` |

##### `run()` (`java.lang.Thread`)

|      % | Samples | Callee                      | Location           |
| -----: | ------: | --------------------------- | ------------------ |
| 100.0% |     210 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `run()` (`jdk.internal.misc.InnocuousThread`)

|      % | Samples | Callee  | Location           |
| -----: | ------: | ------- | ------------------ |
| 100.0% |     210 | `run()` | `java.lang.Thread` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 53.1% |      77 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 18.6% |      27 | `Matcher::match`                  | `libjvm.dylib` |
| 15.2% |      22 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
| 11.0% |      16 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  0.7% |       1 | `PhaseCFG::fixup_flow`            | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 33.1% |      40 | `Compile::optimize_loops`              | `libjvm.dylib` |
| 24.8% |      30 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| 17.4% |      21 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |
|  6.6% |       8 | `PhaseCCP::PhaseCCP`                   | `libjvm.dylib` |
|  5.0% |       6 | `PhaseMacroExpand::expand_macro_nodes` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 18.2% |      14 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| 16.9% |      13 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| 10.4% |       8 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  7.8% |       6 | `PhaseAggressiveCoalesce::insert_copies`   | `libjvm.dylib` |
|  6.5% |       5 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 84.3% |      59 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| 14.3% |      10 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |
|  1.4% |       1 | `Chunk::next_chop`               | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 98.3% |      58 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
|  1.7% |       1 | `Arena::grow`                        | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 31.0% |      18 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 22.4% |      13 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| 10.3% |       6 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
|  5.2% |       3 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
|  5.2% |       3 | `IdealLoopTree::policy_range_check`    | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 95.6% |      43 | `Compilation::compile_java_method` | `libjvm.dylib` |
|  4.4% |       2 | `ciEnv::register_method`           | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |      45 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 44.2% |      19 | `Compilation::build_hir`      | `libjvm.dylib` |
| 30.2% |      13 | `Compilation::emit_code_body` | `libjvm.dylib` |
| 25.6% |      11 | `Compilation::emit_lir`       | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      40 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 97.1% |      34 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |
|  2.9% |       1 | `StoreNode::hash`             | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|    % | Samples | Callee                       | Location       |
| ---: | ------: | ---------------------------- | -------------- |
| 8.8% |       3 | `PhaseIterGVN::subsume_node` | `libjvm.dylib` |
| 8.8% |       3 | `RegionNode::Ideal`          | `libjvm.dylib` |
| 5.9% |       2 | `CallDynamicJavaNode::Ideal` | `libjvm.dylib` |
| 5.9% |       2 | `MemBarNode::Ideal`          | `libjvm.dylib` |
| 5.9% |       2 | `IfNode::Ideal`              | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 74.1% |      20 | `Matcher::xform`                              | `libjvm.dylib` |
| 11.1% |       3 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |
| 11.1% |       3 | `Matcher::find_shared`                        | `libjvm.dylib` |
|  3.7% |       1 | `PhiNode::Opcode`                             | `libjvm.dylib` |

##### `PhaseCFG::global_code_motion` (`libjvm.dylib`)

|     % | Samples | Callee                              | Location       |
| ----: | ------: | ----------------------------------- | -------------- |
| 27.3% |       6 | `PhaseCFG::schedule_late`           | `libjvm.dylib` |
| 22.7% |       5 | `PhaseCFG::partial_latency_of_defs` | `libjvm.dylib` |
| 18.2% |       4 | `Node_Backward_Iterator::next`      | `libjvm.dylib` |
| 13.6% |       3 | `PhaseCFG::schedule_local`          | `libjvm.dylib` |
|  9.1% |       2 | `PhaseCFG::schedule_pinned_nodes`   | `libjvm.dylib` |

##### `PhaseCFG::do_global_code_motion` (`libjvm.dylib`)

|      % | Samples | Callee                         | Location       |
| -----: | ------: | ------------------------------ | -------------- |
| 100.0% |      22 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 33.6% |   2,143 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`) ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                       |
|  7.3% |     464 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                     |
|  3.3% |     211 | `__ulock_wait` (`libsystem_kernel.dylib`) ← `CallJavaMainInNewThread` (`libjli.dylib`) ← `ContinueInNewThread` ← `JLI_Launch` ← `main` (`java`) ← `apple_main` (`libjli.dylib`) ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                            |
|  3.3% |     211 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `os::signal_wait` (`libjvm.dylib`) ← `signal_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                               |
|  3.3% |     211 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `ServiceThread::service_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                   |
|  3.3% |     211 | `mach_msg2_trap` (`libsystem_kernel.dylib`) ← `mach_msg_overwrite` ← `mach_msg` ← `__CFRunLoopServiceMachPort` (`CoreFoundation`) ← `__CFRunLoopRun` ← `CFRunLoopRunSpecific` ← `CreateExecutionEnvironment` (`libjli.dylib`) ← `JLI_Launch` ← `main` (`java`) ← `unknown`                                                                                                                                                                                                                                                                                                 |
|  3.3% |     211 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformEvent::park` (`libjvm.dylib`) ← `ObjectMonitor::wait` ← `ObjectSynchronizer::wait` ← `JVM_MonitorWait` ← `wait0(long)` (`java.lang.Object`) ← `wait(long)` ← `wait()` ← `await()` (`java.lang.ref.NativeReferenceQueue`) ← `remove0()` (`java.lang.ref.ReferenceQueue`) ← `remove()` (`java.lang.ref.NativeReferenceQueue`) ← `run()` (`java.lang.ref.Finalizer$FinalizerThread`)                                                                                                                                  |
|  3.3% |     211 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `WatcherThread::sleep` ← `WatcherThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                             |
|  3.3% |     211 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `JVM_WaitForReferencePendingList` ← `waitForReferencePendingList()` (`java.lang.ref.Reference`) ← `processPendingReferences()` ← `run()` (`java.lang.ref.Reference$ReferenceHandler`)                                                                                                                                                                                                                                                                          |
|  3.3% |     211 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `MonitorDeflationThread::monitor_deflation_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                |
|  3.3% |     211 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Profiler::timerLoop` (`libasyncProfiler.dylib`) ← `JvmtiAgentThread::start_function_wrapper` (`libjvm.dylib`) ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                               |
|  3.3% |     210 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ServiceThread::wait_for_task` ← `G1ServiceThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                             |
|  3.3% |     210 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `VMThread::wait_for_operation` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                          |
|  3.3% |     210 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `await(long)` (`java.lang.ref.ReferenceQueue`) ← `remove0(long)` ← `remove(long)` ← `run()` (`jdk.internal.ref.CleanerImpl`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` ← `run()` (`jdk.internal.misc.InnocuousThread`) |
|  3.3% |     210 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `NotificationThread::notification_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                         |
|  3.3% |     208 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ConcurrentMarkThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                         |
|  3.2% |     207 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` ← `G1ConcurrentRefineThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                       |
|  0.2% |      11 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                   |
|  0.1% |       6 | `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                      |
|  0.1% |       5 | `PhaseChaitin::elide_copy` (`libjvm.dylib`) ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                 |
