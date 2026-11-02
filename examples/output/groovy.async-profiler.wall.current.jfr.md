# Sampling profile

Collected 2,895 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Native           | 91.2% |   2,640 |
| Compiler         |  5.9% |     170 |
| Standard library |  1.8% |      52 |
| Unknown          |  0.9% |      26 |
| JIT              |  0.1% |       4 |
| Ours             |  0.1% |       3 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 2,392 samples (82.6%) thread_start at libsystem_pthread.dylib
│   └── 2,392 samples (82.6%) _pthread_start
│       ├── 2,295 samples (79.3%) thread_native_entry at libjvm.dylib
│       │   └── 2,295 samples (79.3%) Thread::call_run
│       │       ├── 965 samples (33.3%) WorkerThread::run
│       │       │   └── 960 samples (33.2%, self 36.7% globally) semaphore_wait_trap at libsystem_kernel.dylib
│       │       ├── 850 samples (29.4%) JavaThread::thread_main_inner
│       │       │   ├── 378 samples (13.1%) CompileBroker::compiler_thread_loop
│       │       │   │   ├── 223 samples (7.7%) CompileBroker::invoke_compiler_on_method
│       │       │   │   │   ├── 187 samples (6.5%) C2Compiler::compile_method
│       │       │   │   │   │   └── 186 samples (6.4%) Compile::Compile
│       │       │   │   │   │       ├── 83 samples (2.9%) Compile::Code_Gen
│       │       │   │   │   │       │   ├── 42 samples (1.5%) PhaseChaitin::Register_Allocate
│       │       │   │   │   │       │   │   ├── 9 samples (0.3%) PhaseChaitin::build_ifg_physical
│       │       │   │   │   │       │   │   ├── 6 samples (0.2%) PhaseChaitin::Split
│       │       │   │   │   │       │   │   ├── 4 samples (0.1%) PhaseAggressiveCoalesce::insert_copies
│       │       │   │   │   │       │   │   └── 23 samples (0.8%) 12 more callees, led by (0.2%) PhaseChaitin::gather_lrg_masks
│       │       │   │   │   │       │   └── 41 samples (1.4%) 6 more callees, led by (0.7%) Matcher::match
│       │       │   │   │   │       ├── 72 samples (2.5%) Compile::Optimize
│       │       │   │   │   │       │   ├── … 20 samples (0.7%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
│       │       │   │   │   │       │   │   ├── 5 samples (0.2%) PhaseIdealLoop::build_loop_early
│       │       │   │   │   │       │   │   └── 5 samples (0.2%) PhaseIdealLoop::build_loop_late
│       │       │   │   │   │       │   ├── … 6 samples (0.2%) PhaseIdealLoop::build_loop_late at libjvm.dylib
│       │       │   │   │   │       │   └── 27 samples (0.9%) 9 more callees, led by (0.3%) PhaseIterGVN::optimize
│       │       │   │   │   │       └── 31 samples (1.1%) 2 more callees, led by (1.0%) ParseGenerator::generate
│       │       │   │   │   ├── 33 samples (1.1%) Compiler::compile_method …
│       │       │   │   │   └── … 2 samples (0.1%) __psynch_mutexwait at libsystem_kernel.dylib
│       │       │   │   └── … 154 samples (5.3%, self 44.7% globally) __psynch_cvwait at libsystem_kernel.dylib
│       │       │   └── 472 samples (16.3%) 5 more callees, led by (3.3%) signal_thread_entry
│       │       ├── 288 samples (9.9%) ConcurrentGCThread::run
│       │       │   └── 288 samples (9.9%) 3 more callees, led by (3.3%) G1ConcurrentMarkThread::run_service
│       │       └── 192 samples (6.6%) 2 more callees, led by (3.3%) VMThread::run
│       └── … 96 samples (3.3%) __ulock_wait at libsystem_kernel.dylib
├── … 96 samples (3.3%) mach_msg2_trap at libsystem_kernel.dylib
├── … 90 samples (3.1%) invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object) at java.lang.invoke.LambdaForm$DMH.0x0000000401088800
│   ├── … 65 samples (2.2%) fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[]) at org.codehaus.groovy.vmplugin.v8.IndyInterface …
│   └── … 14 samples (0.5%) setCallSiteTarget() at org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector
│       └── … 5 samples (0.2%) java_lang_Throwable::fill_in_stack_trace at libjvm.dylib
├── 26 samples (0.9%) (anonymous)
└── 289 samples (10.0%) 5 more root frames, led by (3.3%) run() at java.lang.ref.Reference$ReferenceHandler
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|     % | Samples | Function                                   | Location                  |
| ----: | ------: | ------------------------------------------ | ------------------------- |
| 44.7% |   1,294 | `__psynch_cvwait`                          | `libsystem_kernel.dylib`  |
| 36.7% |   1,063 | `semaphore_wait_trap`                      | `libsystem_kernel.dylib`  |
|  3.3% |      96 | `mach_msg2_trap`                           | `libsystem_kernel.dylib`  |
|  3.3% |      96 | `__ulock_wait`                             | `libsystem_kernel.dylib`  |
|  0.9% |      26 | `(anonymous)`                              | `<unknown>`               |
|  0.3% |       8 | `__psynch_mutexwait`                       | `libsystem_kernel.dylib`  |
|  0.2% |       5 | `PhaseIdealLoop::build_loop_late`          | `libjvm.dylib`            |
|  0.2% |       5 | `PhaseChaitin::Split`                      | `libjvm.dylib`            |
|  0.2% |       5 | `pthread_jit_write_protect_np`             | `libsystem_pthread.dylib` |
|  0.1% |       4 | `PhaseAggressiveCoalesce::insert_copies`   | `libjvm.dylib`            |
|  0.1% |       4 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib`            |
|  0.1% |       4 | `PhaseIdealLoop::build_loop_early`         | `libjvm.dylib`            |
|  0.1% |       4 | `tlv_get_addr`                             | `libdyld.dylib`           |
|  0.1% |       4 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib`            |
|  0.1% |       3 | `PhaseIterGVN::transform_old`              | `libjvm.dylib`            |
|  0.1% |       3 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`            |
|  0.1% |       3 | `IndexSetIterator::advance_and_next`       | `libjvm.dylib`            |
|  0.1% |       3 | `Compile::identify_useful_nodes`           | `libjvm.dylib`            |
|  0.1% |       2 | `Unique_Node_List::remove`                 | `libjvm.dylib`            |
|  0.1% |       2 | `Matcher::find_shared`                     | `libjvm.dylib`            |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Native

|     % | Samples | Function                                                                                                                                                 | Location                   |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 44.7% |   1,294 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 36.7% |   1,063 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`   |
|  3.3% |      96 | `mach_msg2_trap`                                                                                                                                         | `libsystem_kernel.dylib`   |
|  3.3% |      96 | `__ulock_wait`                                                                                                                                           | `libsystem_kernel.dylib`   |
|  0.3% |       8 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
|  0.2% |       5 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
|  0.1% |       4 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
|  0.1% |       4 | `java_lang_Throwable::fill_in_stack_trace`                                                                                                               | `libjvm.dylib`             |
|  0.1% |       2 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
|  0.1% |       2 | `_platform_memmove`                                                                                                                                      | `libsystem_platform.dylib` |
|  0.1% |       2 | `__psynch_cvbroad`                                                                                                                                       | `libsystem_kernel.dylib`   |
|  0.1% |       2 | `nmethod::fix_oop_relocations`                                                                                                                           | `libjvm.dylib`             |
|  0.1% |       2 | `Parse::merge_memory_edges`                                                                                                                              | `libjvm.dylib`             |
|  0.1% |       2 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
|  0.1% |       2 | `sys_icache_invalidate`                                                                                                                                  | `libsystem_platform.dylib` |
| <0.1% |       1 | `iRegINoSpOper::opcode`                                                                                                                                  | `libjvm.dylib`             |
| <0.1% |       1 | `posix_madvise`                                                                                                                                          | `libsystem_kernel.dylib`   |
| <0.1% |       1 | `State::MachOperGenerator`                                                                                                                               | `libjvm.dylib`             |
| <0.1% |       1 | `Arena::Arealloc`                                                                                                                                        | `libjvm.dylib`             |
| <0.1% |       1 | `Parse::do_one_block`                                                                                                                                    | `libjvm.dylib`             |

##### Compiler

|    % | Samples | Function                                                           | Location       |
| ---: | ------: | ------------------------------------------------------------------ | -------------- |
| 0.2% |       5 | `PhaseIdealLoop::build_loop_late`                                  | `libjvm.dylib` |
| 0.2% |       5 | `PhaseChaitin::Split`                                              | `libjvm.dylib` |
| 0.1% |       4 | `PhaseAggressiveCoalesce::insert_copies`                           | `libjvm.dylib` |
| 0.1% |       4 | `PhaseChaitin::build_ifg_physical`                                 | `libjvm.dylib` |
| 0.1% |       4 | `PhaseIdealLoop::build_loop_early`                                 | `libjvm.dylib` |
| 0.1% |       3 | `PhaseIterGVN::transform_old`                                      | `libjvm.dylib` |
| 0.1% |       3 | `PhaseIdealLoop::Dominators`                                       | `libjvm.dylib` |
| 0.1% |       3 | `IndexSetIterator::advance_and_next`                               | `libjvm.dylib` |
| 0.1% |       3 | `Compile::identify_useful_nodes`                                   | `libjvm.dylib` |
| 0.1% |       2 | `Unique_Node_List::remove`                                         | `libjvm.dylib` |
| 0.1% |       2 | `Matcher::find_shared`                                             | `libjvm.dylib` |
| 0.1% |       2 | `Node::set_req_X`                                                  | `libjvm.dylib` |
| 0.1% |       2 | `CProjNode::is_block_proj`                                         | `libjvm.dylib` |
| 0.1% |       2 | `Compile::disconnect_useless_nodes`                                | `libjvm.dylib` |
| 0.1% |       2 | `Matcher::xform`                                                   | `libjvm.dylib` |
| 0.1% |       2 | `PhaseIterGVN::add_users_to_worklist`                              | `libjvm.dylib` |
| 0.1% |       2 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal`               | `libjvm.dylib` |
| 0.1% |       2 | `IndexSet::IndexSet`                                               | `libjvm.dylib` |
| 0.1% |       2 | `PhaseChaitin::post_allocate_copy_removal`                         | `libjvm.dylib` |
| 0.1% |       2 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `libjvm.dylib` |

##### Standard library

|     % | Samples | Function                                                                                      | Location                                                         |
| ----: | ------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
|  0.1% |       2 | `newInstance(Class, int)`                                                                     | `java.lang.reflect.Array`                                        |
|  0.1% |       2 | `computeValueConversions(MethodType, MethodType, boolean, boolean)`                           | `java.lang.invoke.MethodHandleImpl`                              |
|  0.1% |       2 | `invokeBasic(Object[])`                                                                       | `java.lang.invoke.MethodHandle`                                  |
|  0.1% |       2 | `sameClasses(Class[], Object[])`                                                              | `org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures` |
|  0.1% |       2 | `isSameMetaClass(MetaClass, Object)`                                                          | `org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures` |
| <0.1% |       1 | `evaluateToArrayNode(IntFunction)`                                                            | `java.util.stream.AbstractPipeline`                              |
| <0.1% |       1 | `copyInto(Object[], int)`                                                                     | `java.util.stream.SpinedBuffer`                                  |
| <0.1% |       1 | `<init>()`                                                                                    | `java.lang.Object`                                               |
| <0.1% |       1 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                  |
| <0.1% |       1 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000000401088800`             |
| <0.1% |       1 | `decompress(ByteBuffer, int)`                                                                 | `jdk.internal.jimage.ImageLocation`                              |
| <0.1% |       1 | `<init>(MethodType, LambdaForm)`                                                              | `java.lang.invoke.MethodHandle`                                  |
| <0.1% |       1 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x0000000401105400`              |
| <0.1% |       1 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x00000004010d4c00`              |
| <0.1% |       1 | `isLatin1()`                                                                                  | `java.lang.AbstractStringBuilder`                                |
| <0.1% |       1 | `isMatchingMethod(MetaMethod, MetaMethod)`                                                    | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`          |
| <0.1% |       1 | `putVal(int, Object, Object, boolean, boolean)`                                               | `java.util.HashMap`                                              |
| <0.1% |       1 | `bindArgumentForm(int)`                                                                       | `java.lang.invoke.LambdaFormEditor`                              |
| <0.1% |       1 | `forName(String, Class)`                                                                      | `java.lang.Class`                                                |
| <0.1% |       1 | `checkIndex(int, int)`                                                                        | `java.lang.String`                                               |

#### Lines

Lines with the largest contribution to each function's self samples.

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|      % | Samples | Location                     |
| -----: | ------: | ---------------------------- |
| 100.0% |       2 | `java.lang.reflect.Array:78` |

##### `computeValueConversions(MethodType, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

|     % | Samples | Location                                |
| ----: | ------: | --------------------------------------- |
| 50.0% |       1 | `java.lang.invoke.MethodHandleImpl:371` |
| 50.0% |       1 | `java.lang.invoke.MethodHandleImpl:370` |

##### `sameClasses(Class[], Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures`)

|     % | Samples | Location                                                             |
| ----: | ------: | -------------------------------------------------------------------- |
| 50.0% |       1 | `org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures:224` |
| 50.0% |       1 | `org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures:226` |

##### `isSameMetaClass(MetaClass, Object)` (`org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures`)

|      % | Samples | Location                                                             |
| -----: | ------: | -------------------------------------------------------------------- |
| 100.0% |       2 | `org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures:171` |

##### `evaluateToArrayNode(IntFunction)` (`java.util.stream.AbstractPipeline`)

|      % | Samples | Location                                |
| -----: | ------: | --------------------------------------- |
| 100.0% |       1 | `java.util.stream.AbstractPipeline:245` |

##### `copyInto(Object[], int)` (`java.util.stream.SpinedBuffer`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       1 | `java.util.stream.SpinedBuffer:188` |

##### `<init>()` (`java.lang.Object`)

|      % | Samples | Location              |
| -----: | ------: | --------------------- |
| 100.0% |       1 | `java.lang.Object:45` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|      % | Samples | Location                                            |
| -----: | ------: | --------------------------------------------------- |
| 100.0% |       1 | `org.codehaus.groovy.vmplugin.v8.IndyInterface:314` |

##### `decompress(ByteBuffer, int)` (`jdk.internal.jimage.ImageLocation`)

|      % | Samples | Location                               |
| -----: | ------: | -------------------------------------- |
| 100.0% |       1 | `jdk.internal.jimage.ImageLocation:79` |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       1 | `java.lang.invoke.MethodHandle:479` |

##### `isLatin1()` (`java.lang.AbstractStringBuilder`)

|      % | Samples | Location                               |
| -----: | ------: | -------------------------------------- |
| 100.0% |       1 | `java.lang.AbstractStringBuilder:1697` |

##### `isMatchingMethod(MetaMethod, MetaMethod)` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

|      % | Samples | Location                                                    |
| -----: | ------: | ----------------------------------------------------------- |
| 100.0% |       1 | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex:435` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.HashMap:634` |

##### `bindArgumentForm(int)` (`java.lang.invoke.LambdaFormEditor`)

|      % | Samples | Location                                |
| -----: | ------: | --------------------------------------- |
| 100.0% |       1 | `java.lang.invoke.LambdaFormEditor:569` |

##### `forName(String, Class)` (`java.lang.Class`)

|      % | Samples | Location              |
| -----: | ------: | --------------------- |
| 100.0% |       1 | `java.lang.Class:421` |

##### `checkIndex(int, int)` (`java.lang.String`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.lang.String:4822` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location                 |
| ----: | ------: | ----------------------- | ------------------------ |
| 78.0% |   1,009 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  7.4% |      96 | `PlatformEvent::park`   | `libjvm.dylib`           |
|  7.3% |      95 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |
|  7.3% |      94 | `Parker::park`          | `libjvm.dylib`           |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 90.3% |     960 | `WorkerThread::run`              | `libjvm.dylib` |
|  9.0% |      96 | `os::signal_wait`                | `libjvm.dylib` |
|  0.5% |       5 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |
|  0.2% |       2 | `WorkerThreads::run_task`        | `libjvm.dylib` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

|      % | Samples | Caller               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |      96 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `__ulock_wait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |      96 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |       8 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       5 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       5 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                     | Location                               |
| ----: | ------: | -------------------------- | -------------------------------------- |
| 40.0% |       2 | `InterpreterRuntime::ldc`  | `libjvm.dylib`                         |
| 20.0% |       1 | `JVM_NewArray`             | `libjvm.dylib`                         |
| 20.0% |       1 | `JVM_GetCallerClass`       | `libjvm.dylib`                         |
| 20.0% |       1 | `init(MemberName, Object)` | `java.lang.invoke.MethodHandleNatives` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       4 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       4 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       4 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 25.0% |       1 | `TypeInstPtr::cast_to_exactness` | `libjvm.dylib` |
| 25.0% |       1 | `GraphKit::clone_map`            | `libjvm.dylib` |
| 25.0% |       1 | `TypeInstPtr::add_offset`        | `libjvm.dylib` |
| 25.0% |       1 | `TypePtr::interfaces`            | `libjvm.dylib` |

##### `java_lang_Throwable::fill_in_stack_trace` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       4 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |       3 | `PhaseIterGVN::optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       3 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 33.3% |       1 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |
| 33.3% |       1 | `PhaseIFG::re_insert`              | `libjvm.dylib` |
| 33.3% |       1 | `PhaseIFG::effective_degree`       | `libjvm.dylib` |

##### `Compile::identify_useful_nodes` (`libjvm.dylib`)

|      % | Samples | Caller                                        | Location       |
| -----: | ------: | --------------------------------------------- | -------------- |
| 100.0% |       3 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |

##### `Unique_Node_List::remove` (`libjvm.dylib`)

|      % | Samples | Caller                                    | Location       |
| -----: | ------: | ----------------------------------------- | -------------- |
| 100.0% |       2 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |

##### `Matcher::find_shared` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       2 | `Matcher::match` | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 50.0% |       1 | `PhaseIterGVN::add_users_to_worklist` | `libjvm.dylib` |
| 50.0% |       1 | `PhaseChaitin::Register_Allocate`     | `libjvm.dylib` |

##### `_platform_memmove` (`libsystem_platform.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 50.0% |       1 | `PhaseIdealLoop::set_idom`       | `libjvm.dylib` |
| 50.0% |       1 | `ClassFileParser::parse_methods` | `libjvm.dylib` |

##### `__psynch_cvbroad` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 50.0% |       1 | `ServiceThread::enqueue_deferred_event` | `libjvm.dylib` |
| 50.0% |       1 | `CompileBroker::create_compile_task`    | `libjvm.dylib` |

##### `nmethod::fix_oop_relocations` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |       2 | `nmethod::oops_do_process_weak` | `libjvm.dylib` |

##### `Parse::merge_memory_edges` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |       2 | `Parse::merge_common` | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       2 | `DebugInformationRecorder::describe_scope` | `libjvm.dylib` |

##### `sys_icache_invalidate` (`libsystem_platform.dylib`)

|     % | Samples | Caller                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 50.0% |       1 | `nmethod::nmethod`              | `libjvm.dylib` |
| 50.0% |       1 | `nmethod::oops_do_process_weak` | `libjvm.dylib` |

##### `Node::set_req_X` (`libjvm.dylib`)

|      % | Samples | Caller               | Location       |
| -----: | ------: | -------------------- | -------------- |
| 100.0% |       2 | `Node::replace_edge` | `libjvm.dylib` |

##### `CProjNode::is_block_proj` (`libjvm.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 50.0% |       1 | `PhaseCFG::PhaseCFG`      | `libjvm.dylib` |
| 50.0% |       1 | `PhaseCFG::schedule_late` | `libjvm.dylib` |

##### `Compile::disconnect_useless_nodes` (`libjvm.dylib`)

|      % | Samples | Caller                                   | Location       |
| -----: | ------: | ---------------------------------------- | -------------- |
| 100.0% |       2 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       2 | `Matcher::match` | `libjvm.dylib` |

##### `PhaseIterGVN::add_users_to_worklist` (`libjvm.dylib`)

|     % | Samples | Caller                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 50.0% |       1 | `Node::set_req_X`             | `libjvm.dylib` |
| 50.0% |       1 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

##### `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |       2 | `PhaseIdealLoop::compute_lca_of_uses` | `libjvm.dylib` |

##### `IndexSet::IndexSet` (`libjvm.dylib`)

|     % | Samples | Caller                                           | Location       |
| ----: | ------: | ------------------------------------------------ | -------------- |
| 50.0% |       1 | `PhaseChaitin::build_ifg_physical`               | `libjvm.dylib` |
| 50.0% |       1 | `PhaseChaitin::stretch_base_pointer_live_ranges` | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |       2 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|      % | Samples | Caller                              | Location                                             |
| -----: | ------: | ----------------------------------- | ---------------------------------------------------- |
| 100.0% |       2 | `invokeStatic(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000040102b400` |

##### `computeValueConversions(MethodType, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

|      % | Samples | Caller                                                                    | Location                            |
| -----: | ------: | ------------------------------------------------------------------------- | ----------------------------------- |
| 100.0% |       2 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `invokeBasic(Object[])` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Caller                   | Location                                            |
| ----: | ------: | ------------------------ | --------------------------------------------------- |
| 50.0% |       1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000401124400` |
| 50.0% |       1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000040102ac00` |

##### `sameClasses(Class[], Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures`)

|      % | Samples | Caller                                 | Location                                     |
| -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% |       2 | `invokeStatic(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `isSameMetaClass(MetaClass, Object)` (`org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures`)

|      % | Samples | Caller                                 | Location                                     |
| -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% |       2 | `invokeStatic(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `iRegINoSpOper::opcode` (`libjvm.dylib`)

|      % | Samples | Caller                                        | Location       |
| -----: | ------: | --------------------------------------------- | -------------- |
| 100.0% |       1 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |

##### `posix_madvise` (`libsystem_kernel.dylib`)

|      % | Samples | Caller        | Location                 |
| -----: | ------: | ------------- | ------------------------ |
| 100.0% |       1 | `free_medium` | `libsystem_malloc.dylib` |

##### `State::MachOperGenerator` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |       1 | `Matcher::ReduceInst` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|      % | Samples | Caller            | Location       |
| -----: | ------: | ----------------- | -------------- |
| 100.0% |       1 | `VectorSet::grow` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|      % | Samples | Caller                 | Location       |
| -----: | ------: | ---------------------- | -------------- |
| 100.0% |       1 | `Parse::do_all_blocks` | `libjvm.dylib` |

##### `evaluateToArrayNode(IntFunction)` (`java.util.stream.AbstractPipeline`)

|      % | Samples | Caller                 | Location                             |
| -----: | ------: | ---------------------- | ------------------------------------ |
| 100.0% |       1 | `toArray(IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `copyInto(Object[], int)` (`java.util.stream.SpinedBuffer`)

|      % | Samples | Caller                    | Location                                   |
| -----: | ------: | ------------------------- | ------------------------------------------ |
| 100.0% |       1 | `copyInto(Object[], int)` | `java.util.stream.Nodes$SpinedNodeBuilder` |

##### `<init>()` (`java.lang.Object`)

|      % | Samples | Caller            | Location                         |
| -----: | ------: | ----------------- | -------------------------------- |
| 100.0% |       1 | `<init>(HashMap)` | `java.util.HashMap$HashIterator` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|      % | Samples | Caller                                                                                      | Location                                             |
| -----: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |       1 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000401088800` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000401088800`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |       1 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000004010a1800` |

##### `decompress(ByteBuffer, int)` (`jdk.internal.jimage.ImageLocation`)

|      % | Samples | Caller               | Location                               |
| -----: | ------: | -------------------- | -------------------------------------- |
| 100.0% |       1 | `getAttributes(int)` | `jdk.internal.jimage.BasicImageReader` |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

|      % | Samples | Caller                           | Location                             |
| -----: | ------: | -------------------------------- | ------------------------------------ |
| 100.0% |       1 | `<init>(MethodType, LambdaForm)` | `java.lang.invoke.BoundMethodHandle` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000401105400`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |       1 | `guardWithCatch(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000401098400` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000004010d4c00`)

|      % | Samples | Caller                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |       1 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `isLatin1()` (`java.lang.AbstractStringBuilder`)

|      % | Samples | Caller         | Location                          |
| -----: | ------: | -------------- | --------------------------------- |
| 100.0% |       1 | `append(char)` | `java.lang.AbstractStringBuilder` |

##### `isMatchingMethod(MetaMethod, MetaMethod)` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

|      % | Samples | Caller                                | Location                                                |
| -----: | ------: | ------------------------------------- | ------------------------------------------------------- |
| 100.0% |       1 | `addMethodToList(Object, MetaMethod)` | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|      % | Samples | Caller                | Location            |
| -----: | ------: | --------------------- | ------------------- |
| 100.0% |       1 | `put(Object, Object)` | `java.util.HashMap` |

##### `bindArgumentForm(int)` (`java.lang.invoke.LambdaFormEditor`)

|      % | Samples | Caller                                          | Location                            |
| -----: | ------: | ----------------------------------------------- | ----------------------------------- |
| 100.0% |       1 | `bindArgumentL(BoundMethodHandle, int, Object)` | `java.lang.invoke.LambdaFormEditor` |

##### `forName(String, Class)` (`java.lang.Class`)

|      % | Samples | Caller            | Location          |
| -----: | ------: | ----------------- | ----------------- |
| 100.0% |       1 | `forName(String)` | `java.lang.Class` |

##### `checkIndex(int, int)` (`java.lang.String`)

|      % | Samples | Caller                | Location                 |
| -----: | ------: | --------------------- | ------------------------ |
| 100.0% |       1 | `charAt(byte[], int)` | `java.lang.StringLatin1` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                   | Location                  |
| ----: | ------: | ------------------------------------------ | ------------------------- |
| 82.6% |   2,392 | `_pthread_start`                           | `libsystem_pthread.dylib` |
| 82.6% |   2,392 | `thread_start`                             | `libsystem_pthread.dylib` |
| 79.3% |   2,295 | `Thread::call_run`                         | `libjvm.dylib`            |
| 79.3% |   2,295 | `thread_native_entry`                      | `libjvm.dylib`            |
| 44.7% |   1,294 | `__psynch_cvwait`                          | `libsystem_kernel.dylib`  |
| 36.7% |   1,063 | `semaphore_wait_trap`                      | `libsystem_kernel.dylib`  |
| 34.9% |   1,010 | `PlatformMonitor::wait`                    | `libjvm.dylib`            |
| 33.3% |     965 | `WorkerThread::run`                        | `libjvm.dylib`            |
| 29.4% |     850 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
| 26.2% |     759 | `Monitor::wait_without_safepoint_check`    | `libjvm.dylib`            |
| 13.1% |     378 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
|  9.9% |     288 | `ConcurrentGCThread::run`                  | `libjvm.dylib`            |
|  8.7% |     251 | `Monitor::wait`                            | `libjvm.dylib`            |
|  7.7% |     223 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  6.6% |     192 | `JLI_Launch`                               | `libjli.dylib`            |
|  6.6% |     192 | `main`                                     | `java`                    |
|  6.5% |     187 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  6.4% |     186 | `Compile::Compile`                         | `libjvm.dylib`            |
|  5.4% |     155 | `CompileQueue::get`                        | `libjvm.dylib`            |
|  3.3% |      96 | `G1ConcurrentMarkThread::run_service`      | `libjvm.dylib`            |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Native

|     % | Samples | Function                                | Location                  |
| ----: | ------: | --------------------------------------- | ------------------------- |
| 82.6% |   2,392 | `_pthread_start`                        | `libsystem_pthread.dylib` |
| 82.6% |   2,392 | `thread_start`                          | `libsystem_pthread.dylib` |
| 79.3% |   2,295 | `Thread::call_run`                      | `libjvm.dylib`            |
| 79.3% |   2,295 | `thread_native_entry`                   | `libjvm.dylib`            |
| 44.7% |   1,294 | `__psynch_cvwait`                       | `libsystem_kernel.dylib`  |
| 36.7% |   1,063 | `semaphore_wait_trap`                   | `libsystem_kernel.dylib`  |
| 34.9% |   1,010 | `PlatformMonitor::wait`                 | `libjvm.dylib`            |
| 33.3% |     965 | `WorkerThread::run`                     | `libjvm.dylib`            |
| 29.4% |     850 | `JavaThread::thread_main_inner`         | `libjvm.dylib`            |
| 26.2% |     759 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib`            |
|  9.9% |     288 | `ConcurrentGCThread::run`               | `libjvm.dylib`            |
|  8.7% |     251 | `Monitor::wait`                         | `libjvm.dylib`            |
|  6.6% |     192 | `JLI_Launch`                            | `libjli.dylib`            |
|  6.6% |     192 | `main`                                  | `java`                    |
|  3.3% |      96 | `G1ConcurrentMarkThread::run_service`   | `libjvm.dylib`            |
|  3.3% |      96 | `VMThread::run`                         | `libjvm.dylib`            |
|  3.3% |      96 | `mach_msg2_trap`                        | `libsystem_kernel.dylib`  |
|  3.3% |      96 | `mach_msg_overwrite`                    | `libsystem_kernel.dylib`  |
|  3.3% |      96 | `mach_msg`                              | `libsystem_kernel.dylib`  |
|  3.3% |      96 | `__CFRunLoopServiceMachPort`            | `CoreFoundation`          |

##### Compiler

|     % | Samples | Function                                   | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 13.1% |     378 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
|  7.7% |     223 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  6.5% |     187 | `C2Compiler::compile_method`               | `libjvm.dylib` |
|  6.4% |     186 | `Compile::Compile`                         | `libjvm.dylib` |
|  5.4% |     155 | `CompileQueue::get`                        | `libjvm.dylib` |
|  2.9% |      83 | `Compile::Code_Gen`                        | `libjvm.dylib` |
|  2.5% |      72 | `Compile::Optimize`                        | `libjvm.dylib` |
|  1.6% |      45 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|  1.5% |      42 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
|  1.4% |      40 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
|  1.4% |      40 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
|  1.1% |      33 | `Compilation::compile_method`              | `libjvm.dylib` |
|  1.1% |      33 | `Compilation::Compilation`                 | `libjvm.dylib` |
|  1.1% |      32 | `Compilation::compile_java_method`         | `libjvm.dylib` |
|  0.7% |      20 | `Matcher::match`                           | `libjvm.dylib` |
|  0.7% |      20 | `Compile::optimize_loops`                  | `libjvm.dylib` |
|  0.6% |      16 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |
|  0.6% |      16 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
|  0.4% |      12 | `Compilation::emit_lir`                    | `libjvm.dylib` |
|  0.4% |      11 | `PhaseIdealLoop::build_loop_late`          | `libjvm.dylib` |

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
| 3.2% |      94 | `park(boolean, long)`           | `jdk.internal.misc.Unsafe`                                              |
| 3.2% |      94 | `parkNanos(Object, long)`       | `java.util.concurrent.locks.LockSupport`                                |
| 3.2% |      94 | `await(long, TimeUnit)`         | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
| 3.2% |      94 | `await(long)`                   | `java.lang.ref.ReferenceQueue`                                          |
| 3.2% |      94 | `remove0(long)`                 | `java.lang.ref.ReferenceQueue`                                          |
| 3.2% |      94 | `remove(long)`                  | `java.lang.ref.ReferenceQueue`                                          |
| 3.2% |      94 | `run()`                         | `jdk.internal.ref.CleanerImpl`                                          |
| 3.2% |      94 | `runWith(Object, Runnable)`     | `java.lang.Thread`                                                      |
| 3.2% |      94 | `run()`                         | `java.lang.Thread`                                                      |
| 3.2% |      94 | `run()`                         | `jdk.internal.misc.InnocuousThread`                                     |

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
| 78.0% |   1,009 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  7.4% |      96 | `PlatformEvent::park`   | `libjvm.dylib`           |
|  7.3% |      95 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |
|  7.3% |      94 | `Parker::park`          | `libjvm.dylib`           |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 90.3% |     960 | `WorkerThread::run`              | `libjvm.dylib` |
|  9.0% |      96 | `os::signal_wait`                | `libjvm.dylib` |
|  0.5% |       5 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |
|  0.2% |       2 | `WorkerThreads::run_task`        | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 75.1% |     759 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |
| 24.9% |     251 | `Monitor::wait`                         | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     965 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     850 | `Thread::call_run` | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|     % | Samples | Caller                                                        | Location       |
| ----: | ------: | ------------------------------------------------------------- | -------------- |
| 12.6% |      96 | `G1ServiceThread::wait_for_task`                              | `libjvm.dylib` |
| 12.6% |      96 | `WatcherThread::sleep`                                        | `libjvm.dylib` |
| 12.6% |      96 | `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` | `libjvm.dylib` |
| 12.6% |      96 | `ServiceThread::service_thread_entry`                         | `libjvm.dylib` |
| 12.5% |      95 | `G1ConcurrentMarkThread::run_service`                         | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |     378 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     288 | `Thread::call_run` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|     % | Samples | Caller                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 61.4% |     154 | `CompileQueue::get`               | `libjvm.dylib` |
| 38.2% |      96 | `JVM_WaitForReferencePendingList` | `libjvm.dylib` |
|  0.4% |       1 | `VMThread::wait_until_executed`   | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |     223 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

|      % | Samples | Caller | Location |
| -----: | ------: | ------ | -------- |
| 100.0% |     192 | `main` | `java`   |

##### `main` (`java`)

|     % | Samples | Caller       | Location       |
| ----: | ------: | ------------ | -------------- |
| 50.0% |      96 | `unknown`    | `<unknown>`    |
| 50.0% |      96 | `apple_main` | `libjli.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |     187 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |     186 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |     155 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `G1ConcurrentMarkThread::run_service` (`libjvm.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |      96 | `ConcurrentGCThread::run` | `libjvm.dylib` |

##### `VMThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      96 | `Thread::call_run` | `libjvm.dylib` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

|      % | Samples | Caller               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |      96 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `mach_msg_overwrite` (`libsystem_kernel.dylib`)

|      % | Samples | Caller     | Location                 |
| -----: | ------: | ---------- | ------------------------ |
| 100.0% |      96 | `mach_msg` | `libsystem_kernel.dylib` |

##### `mach_msg` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                       | Location         |
| -----: | ------: | ---------------------------- | ---------------- |
| 100.0% |      96 | `__CFRunLoopServiceMachPort` | `CoreFoundation` |

##### `__CFRunLoopServiceMachPort` (`CoreFoundation`)

|      % | Samples | Caller           | Location         |
| -----: | ------: | ---------------- | ---------------- |
| 100.0% |      96 | `__CFRunLoopRun` | `CoreFoundation` |

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
| 100.0% |      94 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

|      % | Samples | Caller                  | Location                                                                |
| -----: | ------: | ----------------------- | ----------------------------------------------------------------------- |
| 100.0% |      94 | `await(long, TimeUnit)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

|      % | Samples | Caller        | Location                       |
| -----: | ------: | ------------- | ------------------------------ |
| 100.0% |      94 | `await(long)` | `java.lang.ref.ReferenceQueue` |

##### `await(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Caller          | Location                       |
| -----: | ------: | --------------- | ------------------------------ |
| 100.0% |      94 | `remove0(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove0(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Caller         | Location                       |
| -----: | ------: | -------------- | ------------------------------ |
| 100.0% |      94 | `remove(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Caller  | Location                       |
| -----: | ------: | ------- | ------------------------------ |
| 100.0% |      94 | `run()` | `jdk.internal.ref.CleanerImpl` |

##### `run()` (`jdk.internal.ref.CleanerImpl`)

|      % | Samples | Caller                      | Location           |
| -----: | ------: | --------------------------- | ------------------ |
| 100.0% |      94 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % | Samples | Caller  | Location           |
| -----: | ------: | ------- | ------------------ |
| 100.0% |      94 | `run()` | `java.lang.Thread` |

##### `run()` (`java.lang.Thread`)

|      % | Samples | Caller  | Location                            |
| -----: | ------: | ------- | ----------------------------------- |
| 100.0% |      94 | `run()` | `jdk.internal.misc.InnocuousThread` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      83 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      72 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 55.6% |      25 | `Compile::Optimize`       | `libjvm.dylib` |
| 44.4% |      20 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      42 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |      40 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      40 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      33 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      33 | `Compiler::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |      32 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      20 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      20 | `Compile::Optimize` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |      16 | `PhaseIterGVN::optimize` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 56.3% |       9 | `Compile::Optimize`                    | `libjvm.dylib` |
| 31.3% |       5 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
|  6.3% |       1 | `PhaseMacroExpand::expand_macro_nodes` | `libjvm.dylib` |
|  6.3% |       1 | `Compile::remove_speculative_types`    | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      12 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      11 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

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
| 37.0% |     850 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| 12.5% |     288 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  4.2% |      96 | `VMThread::run`                 | `libjvm.dylib` |
|  4.2% |      96 | `WatcherThread::run`            | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   2,295 | `Thread::call_run` | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Callee               | Location                  |
| ----: | ------: | -------------------- | ------------------------- |
| 99.9% |   1,009 | `__psynch_cvwait`    | `libsystem_kernel.dylib`  |
|  0.1% |       1 | `_pthread_cond_wait` | `libsystem_pthread.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 99.5% |     960 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
|  0.4% |       4 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
|  0.1% |       1 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib`           |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                          | Location       |
| ----: | ------: | ----------------------------------------------- | -------------- |
| 44.5% |     378 | `CompileBroker::compiler_thread_loop`           | `libjvm.dylib` |
| 11.3% |      96 | `signal_thread_entry`                           | `libjvm.dylib` |
| 11.3% |      96 | `ServiceThread::service_thread_entry`           | `libjvm.dylib` |
| 11.2% |      95 | `JvmtiAgentThread::start_function_wrapper`      | `libjvm.dylib` |
| 11.1% |      94 | `NotificationThread::notification_thread_entry` | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |     759 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 59.0% |     223 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
| 41.0% |     155 | `CompileQueue::get`                        | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 33.3% |      96 | `G1ConcurrentMarkThread::run_service`   | `libjvm.dylib` |
| 33.3% |      96 | `G1ServiceThread::run_service`          | `libjvm.dylib` |
| 33.3% |      96 | `G1ConcurrentRefineThread::run_service` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |     251 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 83.9% |     187 | `C2Compiler::compile_method` | `libjvm.dylib` |
| 14.8% |      33 | `Compiler::compile_method`   | `libjvm.dylib` |
|  1.3% |       3 | `ciEnv::ciEnv`               | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 50.0% |      96 | `CreateExecutionEnvironment` | `libjli.dylib` |
| 50.0% |      96 | `ContinueInNewThread`        | `libjli.dylib` |

##### `main` (`java`)

|      % | Samples | Callee       | Location       |
| -----: | ------: | ------------ | -------------- |
| 100.0% |     192 | `JLI_Launch` | `libjli.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee             | Location       |
| ----: | ------: | ------------------ | -------------- |
| 99.5% |     186 | `Compile::Compile` | `libjvm.dylib` |
|  0.5% |       1 | `Chunk::next_chop` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 44.6% |      83 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 38.7% |      72 | `Compile::Optimize`                      | `libjvm.dylib` |
| 15.6% |      29 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  1.1% |       2 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 99.4% |     154 | `Monitor::wait`                  | `libjvm.dylib` |
|  0.6% |       1 | `CompilationPolicy::select_task` | `libjvm.dylib` |

##### `G1ConcurrentMarkThread::run_service` (`libjvm.dylib`)

|     % | Samples | Callee                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 99.0% |      95 | `Monitor::wait_without_safepoint_check`            | `libjvm.dylib` |
|  1.0% |       1 | `G1ConcurrentMarkThread::concurrent_mark_cycle_do` | `libjvm.dylib` |

##### `VMThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 99.0% |      95 | `VMThread::wait_for_operation` | `libjvm.dylib` |
|  1.0% |       1 | `VMThread::inner_execute`      | `libjvm.dylib` |

##### `mach_msg_overwrite` (`libsystem_kernel.dylib`)

|      % | Samples | Callee           | Location                 |
| -----: | ------: | ---------------- | ------------------------ |
| 100.0% |      96 | `mach_msg2_trap` | `libsystem_kernel.dylib` |

##### `mach_msg` (`libsystem_kernel.dylib`)

|      % | Samples | Callee               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |      96 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `__CFRunLoopServiceMachPort` (`CoreFoundation`)

|      % | Samples | Callee     | Location                 |
| -----: | ------: | ---------- | ------------------------ |
| 100.0% |      96 | `mach_msg` | `libsystem_kernel.dylib` |

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
| 100.0% |      94 | `Unsafe_Park` | `libjvm.dylib` |

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

|      % | Samples | Callee                | Location                   |
| -----: | ------: | --------------------- | -------------------------- |
| 100.0% |      94 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

|      % | Samples | Callee                    | Location                                 |
| -----: | ------: | ------------------------- | ---------------------------------------- |
| 100.0% |      94 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `await(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee                  | Location                                                                |
| -----: | ------: | ----------------------- | ----------------------------------------------------------------------- |
| 100.0% |      94 | `await(long, TimeUnit)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `remove0(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee        | Location                       |
| -----: | ------: | ------------- | ------------------------------ |
| 100.0% |      94 | `await(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee          | Location                       |
| -----: | ------: | --------------- | ------------------------------ |
| 100.0% |      94 | `remove0(long)` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`jdk.internal.ref.CleanerImpl`)

|      % | Samples | Callee         | Location                       |
| -----: | ------: | -------------- | ------------------------------ |
| 100.0% |      94 | `remove(long)` | `java.lang.ref.ReferenceQueue` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % | Samples | Callee  | Location                       |
| -----: | ------: | ------- | ------------------------------ |
| 100.0% |      94 | `run()` | `jdk.internal.ref.CleanerImpl` |

##### `run()` (`java.lang.Thread`)

|      % | Samples | Callee                      | Location           |
| -----: | ------: | --------------------------- | ------------------ |
| 100.0% |      94 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `run()` (`jdk.internal.misc.InnocuousThread`)

|      % | Samples | Callee  | Location           |
| -----: | ------: | ------- | ------------------ |
| 100.0% |      94 | `run()` | `java.lang.Thread` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 50.6% |      42 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 24.1% |      20 | `Matcher::match`                  | `libjvm.dylib` |
| 10.8% |       9 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  8.4% |       7 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  2.4% |       2 | `PhaseOutput::install_code`       | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 34.7% |      25 | `PhaseIdealLoop::optimize`     | `libjvm.dylib` |
| 27.8% |      20 | `Compile::optimize_loops`      | `libjvm.dylib` |
| 12.5% |       9 | `PhaseIterGVN::optimize`       | `libjvm.dylib` |
|  8.3% |       6 | `PhaseCCP::PhaseCCP`           | `libjvm.dylib` |
|  4.2% |       3 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 88.9% |      40 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| 11.1% |       5 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 21.4% |       9 | `PhaseChaitin::build_ifg_physical`       | `libjvm.dylib` |
| 14.3% |       6 | `PhaseChaitin::Split`                    | `libjvm.dylib` |
| 11.9% |       5 | `PhaseChaitin::gather_lrg_masks`         | `libjvm.dylib` |
|  9.5% |       4 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |
|  9.5% |       4 | `PhaseChaitin::Select`                   | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 27.5% |      11 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 17.5% |       7 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| 15.0% |       6 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
| 12.5% |       5 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
| 10.0% |       4 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Callee                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      40 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 97.0% |      32 | `Compilation::compile_java_method` | `libjvm.dylib` |
|  3.0% |       1 | `Dependencies::assert_common_1`    | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |      33 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 37.5% |      12 | `Compilation::emit_lir`       | `libjvm.dylib` |
| 34.4% |      11 | `Compilation::build_hir`      | `libjvm.dylib` |
| 28.1% |       9 | `Compilation::emit_code_body` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 50.0% |      10 | `Matcher::xform`                              | `libjvm.dylib` |
| 20.0% |       4 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |
| 20.0% |       4 | `Matcher::find_shared`                        | `libjvm.dylib` |
|  5.0% |       1 | `StoreINode::Opcode`                          | `libjvm.dylib` |
|  5.0% |       1 | `Node_Array::grow`                            | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      20 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|     % | Samples | Callee                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 31.3% |       5 | `PhaseIterGVN::subsume_node`          | `libjvm.dylib` |
| 12.5% |       2 | `NodeHash::hash_find_insert`          | `libjvm.dylib` |
| 12.5% |       2 | `PhaseIterGVN::add_users_to_worklist` | `libjvm.dylib` |
|  6.3% |       1 | `PhiNode::Opcode`                     | `libjvm.dylib` |
|  6.3% |       1 | `LoadNode::Ideal`                     | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |      16 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 83.3% |      10 | `LinearScan::do_linear_scan` | `libjvm.dylib` |
| 16.7% |       2 | `BlockList::iterate_forward` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|     % | Samples | Callee                                      | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
| 54.5% |       6 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 33.2% |     960 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`) ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                       |
|  5.3% |     154 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                     |
|  3.3% |      96 | `mach_msg2_trap` (`libsystem_kernel.dylib`) ← `mach_msg_overwrite` ← `mach_msg` ← `__CFRunLoopServiceMachPort` (`CoreFoundation`) ← `__CFRunLoopRun` ← `CFRunLoopRunSpecific` ← `CreateExecutionEnvironment` (`libjli.dylib`) ← `JLI_Launch` ← `main` (`java`) ← `unknown`                                                                                                                                                                                                                                                                                                 |
|  3.3% |      96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ServiceThread::wait_for_task` ← `G1ServiceThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                             |
|  3.3% |      96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `WatcherThread::sleep` ← `WatcherThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                             |
|  3.3% |      96 | `__ulock_wait` (`libsystem_kernel.dylib`) ← `CallJavaMainInNewThread` (`libjli.dylib`) ← `ContinueInNewThread` ← `JLI_Launch` ← `main` (`java`) ← `apple_main` (`libjli.dylib`) ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                            |
|  3.3% |      96 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `os::signal_wait` (`libjvm.dylib`) ← `signal_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                               |
|  3.3% |      96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` ← `G1ConcurrentRefineThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                       |
|  3.3% |      96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `JVM_WaitForReferencePendingList` ← `waitForReferencePendingList()` (`java.lang.ref.Reference`) ← `processPendingReferences()` ← `run()` (`java.lang.ref.Reference$ReferenceHandler`)                                                                                                                                                                                                                                                                          |
|  3.3% |      96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformEvent::park` (`libjvm.dylib`) ← `ObjectMonitor::wait` ← `ObjectSynchronizer::wait` ← `JVM_MonitorWait` ← `wait0(long)` (`java.lang.Object`) ← `wait(long)` ← `wait()` ← `await()` (`java.lang.ref.NativeReferenceQueue`) ← `remove0()` (`java.lang.ref.ReferenceQueue`) ← `remove()` (`java.lang.ref.NativeReferenceQueue`) ← `run()` (`java.lang.ref.Finalizer$FinalizerThread`)                                                                                                                                  |
|  3.3% |      95 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ConcurrentMarkThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                         |
|  3.3% |      95 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `VMThread::wait_for_operation` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                          |
|  3.3% |      95 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Profiler::timerLoop` (`libasyncProfiler.dylib`) ← `JvmtiAgentThread::start_function_wrapper` (`libjvm.dylib`) ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                               |
|  3.3% |      95 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `ServiceThread::service_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                   |
|  3.2% |      94 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `await(long)` (`java.lang.ref.ReferenceQueue`) ← `remove0(long)` ← `remove(long)` ← `run()` (`jdk.internal.ref.CleanerImpl`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` ← `run()` (`jdk.internal.misc.InnocuousThread`) |
|  3.2% |      94 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `NotificationThread::notification_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                         |
|  3.1% |      91 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `MonitorDeflationThread::monitor_deflation_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                |
|  0.2% |       5 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                   |
|  0.1% |       4 | `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                |
|  0.1% |       4 | `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                      |
