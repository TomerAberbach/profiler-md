# Sampling profile

Collected 5,469 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Native           | 93.6% |   5,121 |
| Compiler         |  4.5% |     247 |
| Standard library |  1.7% |      94 |
| Ours             |  0.1% |       4 |
| JIT              |  0.1% |       3 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 4,561 samples (83.4%) thread_start at libsystem_pthread.dylib
│   └── 4,561 samples (83.4%) _pthread_start
│       ├── 4,378 samples (80.1%) thread_native_entry at libjvm.dylib
│       │   └── 4,378 samples (80.1%) Thread::call_run
│       │       ├── 1,846 samples (33.8%) WorkerThread::run
│       │       │   └── 1,835 samples (33.6%, self 37.2% globally) semaphore_wait_trap at libsystem_kernel.dylib
│       │       ├── 1,622 samples (29.7%) JavaThread::thread_main_inner
│       │       │   ├── 713 samples (13.0%) CompileBroker::compiler_thread_loop
│       │       │   │   ├── 400 samples (7.3%) CompileBroker::invoke_compiler_on_method
│       │       │   │   │   ├── 329 samples (6.0%) C2Compiler::compile_method
│       │       │   │   │   │   └── 328 samples (6.0%) Compile::Compile
│       │       │   │   │   │       ├── 155 samples (2.8%) Compile::Code_Gen
│       │       │   │   │   │       │   ├── 58 samples (1.1%) PhaseChaitin::Register_Allocate
│       │       │   │   │   │       │   │   ├── 12 samples (0.2%) PhaseChaitin::Split
│       │       │   │   │   │       │   │   ├── 8 samples (0.1%) PhaseChaitin::post_allocate_copy_removal
│       │       │   │   │   │       │   │   │   └── 5 samples (0.1%) PhaseChaitin::elide_copy
│       │       │   │   │   │       │   │   └── 38 samples (0.7%) 19 more callees, led by (0.1%) PhaseLive::compute
│       │       │   │   │   │       │   ├── 39 samples (0.7%) Matcher::match
│       │       │   │   │   │       │   │   └── 30 samples (0.5%) Matcher::xform
│       │       │   │   │   │       │   │       └── 5 samples (0.1%) Arena::contains
│       │       │   │   │   │       │   ├── … 8 samples (0.1%) PhaseOutput::scratch_emit_size at libjvm.dylib
│       │       │   │   │   │       │   └── … 3 samples (0.1%) Node_Backward_Iterator::next at libjvm.dylib
│       │       │   │   │   │       ├── 111 samples (2.0%) Compile::Optimize
│       │       │   │   │   │       │   ├── … 28 samples (0.5%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
│       │       │   │   │   │       │   │   └── 3 samples (0.1%) PhaseIdealLoop::build_loop_early
│       │       │   │   │   │       │   ├── … 27 samples (0.5%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
│       │       │   │   │   │       │   │   └── 5 samples (0.1%) PhaseIdealLoop::build_loop_tree
│       │       │   │   │   │       │   ├── 14 samples (0.3%) PhaseIterGVN::optimize
│       │       │   │   │   │       │   └── 9 samples (0.2%) ConnectionGraph::do_analysis
│       │       │   │   │   │       └── … 29 samples (0.5%) Parse::do_call at libjvm.dylib
│       │       │   │   │   │           └── … 6 samples (0.1%, self 1.5% globally) __psynch_mutexwait at libsystem_kernel.dylib
│       │       │   │   │   └── 71 samples (1.3%) 5 more callees, led by (1.1%) Compiler::compile_method
│       │       │   │   └── … 303 samples (5.5%, self 45.4% globally) __psynch_cvwait at libsystem_kernel.dylib
│       │       │   └── 909 samples (16.6%) 5 more callees, led by (3.3%) signal_thread_entry
│       │       ├── 546 samples (10.0%) ConcurrentGCThread::run
│       │       │   └── 546 samples (10.0%) 3 more callees, led by (3.3%) G1ServiceThread::run_service
│       │       └── 364 samples (6.7%) 2 more callees, led by (3.3%) WatcherThread::run
│       └── … 182 samples (3.3%) __ulock_wait at libsystem_kernel.dylib
├── … 182 samples (3.3%) mach_msg2_trap at libsystem_kernel.dylib
└── 726 samples (13.3%) 7 more root frames, led by (3.3%) run() at java.lang.ref.Finalizer$FinalizerThread
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|     % | Samples | Function                           | Location                  |
| ----: | ------: | ---------------------------------- | ------------------------- |
| 45.4% |   2,485 | `__psynch_cvwait`                  | `libsystem_kernel.dylib`  |
| 37.2% |   2,035 | `semaphore_wait_trap`              | `libsystem_kernel.dylib`  |
|  3.3% |     182 | `mach_msg2_trap`                   | `libsystem_kernel.dylib`  |
|  3.3% |     182 | `__ulock_wait`                     | `libsystem_kernel.dylib`  |
|  1.5% |      83 | `__psynch_mutexwait`               | `libsystem_kernel.dylib`  |
|  0.1% |       8 | `PhaseChaitin::Split`              | `libjvm.dylib`            |
|  0.1% |       8 | `tlv_get_addr`                     | `libdyld.dylib`           |
|  0.1% |       8 | `pthread_jit_write_protect_np`     | `libsystem_pthread.dylib` |
|  0.1% |       7 | `InstanceKlass::find_method_index` | `libjvm.dylib`            |
|  0.1% |       6 | `Arena::contains`                  | `libjvm.dylib`            |
|  0.1% |       5 | `Matcher::xform`                   | `libjvm.dylib`            |
|  0.1% |       5 | `Type::cmp`                        | `libjvm.dylib`            |
|  0.1% |       5 | `PhaseChaitin::elide_copy`         | `libjvm.dylib`            |
|  0.1% |       4 | `PhaseIterGVN::optimize`           | `libjvm.dylib`            |
|  0.1% |       4 | `PhaseIdealLoop::build_loop_tree`  | `libjvm.dylib`            |
|  0.1% |       4 | `PhaseIdealLoop::build_loop_early` | `libjvm.dylib`            |
|  0.1% |       4 | `Node_Backward_Iterator::next`     | `libjvm.dylib`            |
|  0.1% |       4 | `PhaseIdealLoop::Dominators`       | `libjvm.dylib`            |
|  0.1% |       4 | `PhaseLive::add_liveout`           | `libjvm.dylib`            |
|  0.1% |       4 | `swtch_pri`                        | `libsystem_kernel.dylib`  |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Native

|     % | Samples | Function                                                                                                                                                 | Location                   |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 45.4% |   2,485 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 37.2% |   2,035 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`   |
|  3.3% |     182 | `mach_msg2_trap`                                                                                                                                         | `libsystem_kernel.dylib`   |
|  3.3% |     182 | `__ulock_wait`                                                                                                                                           | `libsystem_kernel.dylib`   |
|  1.5% |      83 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
|  0.1% |       8 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
|  0.1% |       8 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
|  0.1% |       7 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
|  0.1% |       6 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`             |
|  0.1% |       4 | `swtch_pri`                                                                                                                                              | `libsystem_kernel.dylib`   |
|  0.1% |       4 | `java_lang_Throwable::fill_in_stack_trace`                                                                                                               | `libjvm.dylib`             |
|  0.1% |       3 | `vmSymbols::find_sid`                                                                                                                                    | `libjvm.dylib`             |
|  0.1% |       3 | `__psynch_mutexdrop`                                                                                                                                     | `libsystem_kernel.dylib`   |
|  0.1% |       3 | `frame::sender_for_compiled_frame`                                                                                                                       | `libjvm.dylib`             |
|  0.1% |       3 | `__mmap`                                                                                                                                                 | `libsystem_kernel.dylib`   |
| <0.1% |       2 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| <0.1% |       2 | `Chunk::chop`                                                                                                                                            | `libjvm.dylib`             |
| <0.1% |       2 | `Dict::Insert`                                                                                                                                           | `libjvm.dylib`             |
| <0.1% |       2 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
| <0.1% |       2 | `bsearch`                                                                                                                                                | `libsystem_c.dylib`        |

##### Compiler

|     % | Samples | Function                                 | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
|  0.1% |       8 | `PhaseChaitin::Split`                    | `libjvm.dylib` |
|  0.1% |       5 | `Matcher::xform`                         | `libjvm.dylib` |
|  0.1% |       5 | `Type::cmp`                              | `libjvm.dylib` |
|  0.1% |       5 | `PhaseChaitin::elide_copy`               | `libjvm.dylib` |
|  0.1% |       4 | `PhaseIterGVN::optimize`                 | `libjvm.dylib` |
|  0.1% |       4 | `PhaseIdealLoop::build_loop_tree`        | `libjvm.dylib` |
|  0.1% |       4 | `PhaseIdealLoop::build_loop_early`       | `libjvm.dylib` |
|  0.1% |       4 | `Node_Backward_Iterator::next`           | `libjvm.dylib` |
|  0.1% |       4 | `PhaseIdealLoop::Dominators`             | `libjvm.dylib` |
|  0.1% |       4 | `PhaseLive::add_liveout`                 | `libjvm.dylib` |
|  0.1% |       3 | `PhaseLive::compute`                     | `libjvm.dylib` |
|  0.1% |       3 | `PhaseChaitin::build_ifg_physical`       | `libjvm.dylib` |
|  0.1% |       3 | `PhaseIdealLoop::build_loop_late`        | `libjvm.dylib` |
|  0.1% |       3 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |
|  0.1% |       3 | `PhaseOutput::BuildOopMaps`              | `libjvm.dylib` |
|  0.1% |       3 | `NodeHash::hash_find_insert`             | `libjvm.dylib` |
|  0.1% |       3 | `Compile::identify_useful_nodes`         | `libjvm.dylib` |
|  0.1% |       3 | `LinearScan::build_intervals`            | `libjvm.dylib` |
| <0.1% |       2 | `PhiNode::wait_for_region_igvn`          | `libjvm.dylib` |
| <0.1% |       2 | `PhaseIdealLoop::try_sink_out_of_loop`   | `libjvm.dylib` |

##### Standard library

|     % | Samples | Function                                                            | Location                                                  |
| ----: | ------: | ------------------------------------------------------------------- | --------------------------------------------------------- |
|  0.1% |       4 | `equals(Object)`                                                    | `java.lang.String`                                        |
| <0.1% |       2 | `setCallSiteTarget()`                                               | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| <0.1% |       2 | `doInvokeMethod(Class, Object, String, Object[], boolean, boolean)` | `groovy.lang.MetaClassImpl`                               |
| <0.1% |       2 | `invoke(Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x00000004010c8400`       |
| <0.1% |       2 | `getInCache(LambdaFormEditor$TransformKey)`                         | `java.lang.invoke.LambdaFormEditor`                       |
| <0.1% |       2 | `removeStaleReferences()`                                           | `jdk.internal.util.ReferencedKeyMap`                      |
| <0.1% |       1 | `checkResource(String, boolean, JarEntry)`                          | `jdk.internal.loader.URLClassPath$JarLoader`              |
| <0.1% |       1 | `accept(Object)`                                                    | `java.util.stream.MatchOps$1MatchSink`                    |
| <0.1% |       1 | `methodType(Class, Class[], boolean)`                               | `java.lang.invoke.MethodType`                             |
| <0.1% |       1 | `generateLookupAccessor()`                                          | `java.lang.reflect.ProxyGenerator`                        |
| <0.1% |       1 | `viewAsType(MethodType, boolean)`                                   | `java.lang.invoke.DirectMethodHandle$Constructor`         |
| <0.1% |       1 | `invoke(Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000040108e000`       |
| <0.1% |       1 | `guardWithCatch(Object, Object, Object)`                            | `java.lang.invoke.LambdaForm$MH.0x00000004010aa000`       |
| <0.1% |       1 | `getResource(ImageLocation)`                                        | `jdk.internal.jimage.BasicImageReader`                    |
| <0.1% |       1 | `stringFromByteBuffer(ByteBuffer, int)`                             | `jdk.internal.jimage.ImageStringsReader`                  |
| <0.1% |       1 | `correctClassForNameAndUnReflectOtherwise(Method)`                  | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| <0.1% |       1 | `inheritInterfaceNewMetaMethods(Set)`                               | `groovy.lang.MetaClassImpl`                               |
| <0.1% |       1 | `invokeSpecial(Object, Object, Object)`                             | `java.lang.invoke.DirectMethodHandle$Holder`              |
| <0.1% |       1 | `invokeMethod(Object, String, Object[])`                            | `groovy.lang.MetaClassImpl`                               |
| <0.1% |       1 | `call(Object)`                                                      | `groovy.lang.Closure`                                     |

#### Lines

Lines with the largest contribution to each function's self samples.

##### `equals(Object)` (`java.lang.String`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 50.0% |       2 | `java.lang.String:1847` |
| 50.0% |       2 | `java.lang.String:1852` |

##### `setCallSiteTarget()` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 50.0% |       1 | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector:1037` |
| 50.0% |       1 | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector:1019` |

##### `doInvokeMethod(Class, Object, String, Object[], boolean, boolean)` (`groovy.lang.MetaClassImpl`)

|     % | Samples | Location                         |
| ----: | ------: | -------------------------------- |
| 50.0% |       1 | `groovy.lang.MetaClassImpl:1201` |
| 50.0% |       1 | `groovy.lang.MetaClassImpl:1286` |

##### `getInCache(LambdaFormEditor$TransformKey)` (`java.lang.invoke.LambdaFormEditor`)

|     % | Samples | Location                                |
| ----: | ------: | --------------------------------------- |
| 50.0% |       1 | `java.lang.invoke.LambdaFormEditor:403` |
| 50.0% |       1 | `java.lang.invoke.LambdaFormEditor:395` |

##### `removeStaleReferences()` (`jdk.internal.util.ReferencedKeyMap`)

|     % | Samples | Location                                 |
| ----: | ------: | ---------------------------------------- |
| 50.0% |       1 | `jdk.internal.util.ReferencedKeyMap:343` |
| 50.0% |       1 | `jdk.internal.util.ReferencedKeyMap:338` |

##### `checkResource(String, boolean, JarEntry)` (`jdk.internal.loader.URLClassPath$JarLoader`)

|      % | Samples | Location                                         |
| -----: | ------: | ------------------------------------------------ |
| 100.0% |       1 | `jdk.internal.loader.URLClassPath$JarLoader:849` |

##### `accept(Object)` (`java.util.stream.MatchOps$1MatchSink`)

|      % | Samples | Location                                  |
| -----: | ------: | ----------------------------------------- |
| 100.0% |       1 | `java.util.stream.MatchOps$1MatchSink:90` |

##### `methodType(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

|      % | Samples | Location                          |
| -----: | ------: | --------------------------------- |
| 100.0% |       1 | `java.lang.invoke.MethodType:368` |

##### `generateLookupAccessor()` (`java.lang.reflect.ProxyGenerator`)

|      % | Samples | Location                               |
| -----: | ------: | -------------------------------------- |
| 100.0% |       1 | `java.lang.reflect.ProxyGenerator:660` |

##### `viewAsType(MethodType, boolean)` (`java.lang.invoke.DirectMethodHandle$Constructor`)

|      % | Samples | Location                                              |
| -----: | ------: | ----------------------------------------------------- |
| 100.0% |       1 | `java.lang.invoke.DirectMethodHandle$Constructor:487` |

##### `getResource(ImageLocation)` (`jdk.internal.jimage.BasicImageReader`)

|      % | Samples | Location                                   |
| -----: | ------: | ------------------------------------------ |
| 100.0% |       1 | `jdk.internal.jimage.BasicImageReader:413` |

##### `stringFromByteBuffer(ByteBuffer, int)` (`jdk.internal.jimage.ImageStringsReader`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `jdk.internal.jimage.ImageStringsReader:266` |

##### `correctClassForNameAndUnReflectOtherwise(Method)` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |       1 | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector:689` |

##### `inheritInterfaceNewMetaMethods(Set)` (`groovy.lang.MetaClassImpl`)

|      % | Samples | Location                        |
| -----: | ------: | ------------------------------- |
| 100.0% |       1 | `groovy.lang.MetaClassImpl:607` |

##### `invokeMethod(Object, String, Object[])` (`groovy.lang.MetaClassImpl`)

|      % | Samples | Location                         |
| -----: | ------: | -------------------------------- |
| 100.0% |       1 | `groovy.lang.MetaClassImpl:1007` |

##### `call(Object)` (`groovy.lang.Closure`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |       1 | `groovy.lang.Closure:422` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location                 |
| ----: | ------: | ----------------------- | ------------------------ |
| 78.1% |   1,940 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  7.3% |     182 | `PlatformEvent::park`   | `libjvm.dylib`           |
|  7.3% |     182 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |
|  7.3% |     181 | `Parker::park`          | `libjvm.dylib`           |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 90.2% |   1,835 | `WorkerThread::run`              | `libjvm.dylib` |
|  8.9% |     182 | `os::signal_wait`                | `libjvm.dylib` |
|  0.5% |      11 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |
|  0.3% |       7 | `WorkerThreads::run_task`        | `libjvm.dylib` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

|      % | Samples | Caller               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |     182 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `__ulock_wait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |     182 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |      83 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       8 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 12.5% |       1 | `CompileQueue::get`                     | `libjvm.dylib` |
| 12.5% |       1 | `Compile::flatten_alias_type`           | `libjvm.dylib` |
| 12.5% |       1 | `LinearScan::assign_reg_num`            | `libjvm.dylib` |
| 12.5% |       1 | `LIRGenerator::increment_event_counter` | `libjvm.dylib` |
| 12.5% |       1 | `ciMethodData::data_from`               | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 25.0% |       2 | `InterpreterRuntime::ldc`          | `libjvm.dylib` |
| 25.0% |       2 | `JVM_NewArray`                     | `libjvm.dylib` |
| 12.5% |       1 | `JVM_InitClassName`                | `libjvm.dylib` |
| 12.5% |       1 | `JavaCallWrapper::JavaCallWrapper` | `libjvm.dylib` |
| 12.5% |       1 | `JVM_IHashCode`                    | `libjvm.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|      % | Samples | Caller                                  | Location       |
| -----: | ------: | --------------------------------------- | -------------- |
| 100.0% |       7 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |

##### `Arena::contains` (`libjvm.dylib`)

|     % | Samples | Caller           | Location       |
| ----: | ------: | ---------------- | -------------- |
| 83.3% |       5 | `Matcher::xform` | `libjvm.dylib` |
| 16.7% |       1 | `Matcher::match` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       5 | `Matcher::match` | `libjvm.dylib` |

##### `Type::cmp` (`libjvm.dylib`)

|      % | Samples | Caller         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |       5 | `Dict::Insert` | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|     % | Samples | Caller                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 80.0% |       4 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
| 20.0% |       1 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                     | Location       |
| ----: | ------: | -------------------------- | -------------- |
| 50.0% |       2 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |
| 50.0% |       2 | `Compile::Optimize`        | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_tree` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       4 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       4 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Node_Backward_Iterator::next` (`libjvm.dylib`)

|     % | Samples | Caller                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 75.0% |       3 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |
| 25.0% |       1 | `PhaseCFG::schedule_late`      | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       4 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseLive::add_liveout` (`libjvm.dylib`)

|     % | Samples | Caller                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 75.0% |       3 | `PhaseLive::compute`              | `libjvm.dylib` |
| 25.0% |       1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `swtch_pri` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                              | Location       |
| ----: | ------: | ----------------------------------- | -------------- |
| 75.0% |       3 | `TaskTerminator::offer_termination` | `libjvm.dylib` |
| 25.0% |       1 | `CompileBroker::make_thread`        | `libjvm.dylib` |

##### `java_lang_Throwable::fill_in_stack_trace` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       4 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `equals(Object)` (`java.lang.String`)

|     % | Samples | Caller                                                            | Location                                                 |
| ----: | ------: | ----------------------------------------------------------------- | -------------------------------------------------------- |
| 25.0% |       1 | `invokeMethod(Class, Object, String, Object[], boolean, boolean)` | `org.codehaus.groovy.runtime.metaclass.ClosureMetaClass` |
| 25.0% |       1 | `computeIfAbsent(Object, Function)`                               | `java.util.concurrent.ConcurrentHashMap`                 |
| 25.0% |       1 | `inheritInterfaceNewMetaMethods(Set)`                             | `groovy.lang.MetaClassImpl`                              |
| 25.0% |       1 | `getProperty(String)`                                             | `groovy.lang.Closure`                                    |

##### `vmSymbols::find_sid` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |       3 | `ciObjectFactory::get_symbol` | `libjvm.dylib` |

##### `__psynch_mutexdrop` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                                | Location                  |
| -----: | ------: | ------------------------------------- | ------------------------- |
| 100.0% |       3 | `_pthread_mutex_firstfit_unlock_slow` | `libsystem_pthread.dylib` |

##### `frame::sender_for_compiled_frame` (`libjvm.dylib`)

|     % | Samples | Caller                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 66.7% |       2 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |
| 33.3% |       1 | `SharedRuntime::resolve_helper`            | `libjvm.dylib` |

##### `__mmap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                   | Location       |
| ----: | ------: | ------------------------ | -------------- |
| 66.7% |       2 | `os::pd_commit_memory`   | `libjvm.dylib` |
| 33.3% |       1 | `os::pd_uncommit_memory` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       3 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       3 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       3 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       3 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseOutput::BuildOopMaps` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |       3 | `PhaseOutput::Output` | `libjvm.dylib` |

##### `NodeHash::hash_find_insert` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |       3 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

##### `Compile::identify_useful_nodes` (`libjvm.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 66.7% |       2 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |
| 33.3% |       1 | `PhaseRemoveUseless::PhaseRemoveUseless`      | `libjvm.dylib` |

##### `LinearScan::build_intervals` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |       3 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       2 | `DebugInformationRecorder::describe_scope` | `libjvm.dylib` |

##### `Chunk::chop` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |       2 | `Chunk::next_chop` | `libjvm.dylib` |

##### `Dict::Insert` (`libjvm.dylib`)

|     % | Samples | Caller                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 50.0% |       1 | `Type::hashcons`              | `libjvm.dylib` |
| 50.0% |       1 | `Compile::flatten_alias_type` | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 50.0% |       1 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| 50.0% |       1 | `GraphBuilder::handle_exception`       | `libjvm.dylib` |

##### `bsearch` (`libsystem_c.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 50.0% |       1 | `encoding_for_logical_immediate` | `libjvm.dylib` |
| 50.0% |       1 | `Assembler::andw`                | `libjvm.dylib` |

##### `PhiNode::wait_for_region_igvn` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       2 | `PhiNode::Ideal` | `libjvm.dylib` |

##### `PhaseIdealLoop::try_sink_out_of_loop` (`libjvm.dylib`)

|      % | Samples | Caller                                      | Location       |
| -----: | ------: | ------------------------------------------- | -------------- |
| 100.0% |       2 | `PhaseIdealLoop::split_if_with_blocks_post` | `libjvm.dylib` |

##### `setCallSiteTarget()` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

|      % | Samples | Caller                                                                                       | Location                                        |
| -----: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| 100.0% |       2 | `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `doInvokeMethod(Class, Object, String, Object[], boolean, boolean)` (`groovy.lang.MetaClassImpl`)

|      % | Samples | Caller                                                            | Location                    |
| -----: | ------: | ----------------------------------------------------------------- | --------------------------- |
| 100.0% |       2 | `invokeMethod(Class, Object, String, Object[], boolean, boolean)` | `groovy.lang.MetaClassImpl` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000004010c8400`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |       2 | `linkToCallSite(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000004010c8800` |

##### `getInCache(LambdaFormEditor$TransformKey)` (`java.lang.invoke.LambdaFormEditor`)

|     % | Samples | Caller                                       | Location                            |
| ----: | ------: | -------------------------------------------- | ----------------------------------- |
| 50.0% |       1 | `addArgumentForm(int, LambdaForm$BasicType)` | `java.lang.invoke.LambdaFormEditor` |
| 50.0% |       1 | `collectArgumentsForm(int, MethodType)`      | `java.lang.invoke.LambdaFormEditor` |

##### `removeStaleReferences()` (`jdk.internal.util.ReferencedKeyMap`)

|      % | Samples | Caller        | Location                             |
| -----: | ------: | ------------- | ------------------------------------ |
| 100.0% |       2 | `get(Object)` | `jdk.internal.util.ReferencedKeyMap` |

##### `checkResource(String, boolean, JarEntry)` (`jdk.internal.loader.URLClassPath$JarLoader`)

|      % | Samples | Caller                         | Location                                     |
| -----: | ------: | ------------------------------ | -------------------------------------------- |
| 100.0% |       1 | `getResource(String, boolean)` | `jdk.internal.loader.URLClassPath$JarLoader` |

##### `accept(Object)` (`java.util.stream.MatchOps$1MatchSink`)

|      % | Samples | Caller                 | Location                                     |
| -----: | ------: | ---------------------- | -------------------------------------------- |
| 100.0% |       1 | `tryAdvance(Consumer)` | `java.util.Spliterators$IteratorSpliterator` |

##### `methodType(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

|      % | Samples | Caller                       | Location                      |
| -----: | ------: | ---------------------------- | ----------------------------- |
| 100.0% |       1 | `methodType(Class, Class[])` | `java.lang.invoke.MethodType` |

##### `generateLookupAccessor()` (`java.lang.reflect.ProxyGenerator`)

|      % | Samples | Caller                | Location                           |
| -----: | ------: | --------------------- | ---------------------------------- |
| 100.0% |       1 | `generateClassFile()` | `java.lang.reflect.ProxyGenerator` |

##### `viewAsType(MethodType, boolean)` (`java.lang.invoke.DirectMethodHandle$Constructor`)

|      % | Samples | Caller                                                                    | Location                            |
| -----: | ------: | ------------------------------------------------------------------------- | ----------------------------------- |
| 100.0% |       1 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000040108e000`)

|      % | Samples | Caller                           | Location                           |
| -----: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% |       1 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `guardWithCatch(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000004010aa000`)

|      % | Samples | Caller                             | Location                                         |
| -----: | ------: | ---------------------------------- | ------------------------------------------------ |
| 100.0% |       1 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `getResource(ImageLocation)` (`jdk.internal.jimage.BasicImageReader`)

|      % | Samples | Caller                                                                        | Location                                            |
| -----: | ------: | ----------------------------------------------------------------------------- | --------------------------------------------------- |
| 100.0% |       1 | `visitLocation(ImageLocation, ImageReader$SharedImageReader$LocationVisitor)` | `jdk.internal.jimage.ImageReader$SharedImageReader` |

##### `stringFromByteBuffer(ByteBuffer, int)` (`jdk.internal.jimage.ImageStringsReader`)

|      % | Samples | Caller           | Location                               |
| -----: | ------: | ---------------- | -------------------------------------- |
| 100.0% |       1 | `getString(int)` | `jdk.internal.jimage.BasicImageReader` |

##### `correctClassForNameAndUnReflectOtherwise(Method)` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

|      % | Samples | Caller                     | Location                                                  |
| -----: | ------: | -------------------------- | --------------------------------------------------------- |
| 100.0% |       1 | `setHandleForMetaMethod()` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `inheritInterfaceNewMetaMethods(Set)` (`groovy.lang.MetaClassImpl`)

|      % | Samples | Caller              | Location                    |
| -----: | ------: | ------------------- | --------------------------- |
| 100.0% |       1 | `fillMethodIndex()` | `groovy.lang.MetaClassImpl` |

##### `invokeSpecial(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |       1 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000040138a000` |

##### `invokeMethod(Object, String, Object[])` (`groovy.lang.MetaClassImpl`)

|      % | Samples | Caller                                                    | Location                                             |
| -----: | ------: | --------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |       1 | `invokeInterface(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000401095000` |

##### `call(Object)` (`groovy.lang.Closure`)

|      % | Samples | Caller                    | Location                                           |
| -----: | ------: | ------------------------- | -------------------------------------------------- |
| 100.0% |       1 | `each(Iterator, Closure)` | `org.codehaus.groovy.runtime.DefaultGroovyMethods` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                   | Location                  |
| ----: | ------: | ------------------------------------------ | ------------------------- |
| 83.4% |   4,561 | `_pthread_start`                           | `libsystem_pthread.dylib` |
| 83.4% |   4,561 | `thread_start`                             | `libsystem_pthread.dylib` |
| 80.1% |   4,378 | `Thread::call_run`                         | `libjvm.dylib`            |
| 80.1% |   4,378 | `thread_native_entry`                      | `libjvm.dylib`            |
| 45.4% |   2,485 | `__psynch_cvwait`                          | `libsystem_kernel.dylib`  |
| 37.2% |   2,035 | `semaphore_wait_trap`                      | `libsystem_kernel.dylib`  |
| 35.5% |   1,944 | `PlatformMonitor::wait`                    | `libjvm.dylib`            |
| 33.8% |   1,846 | `WorkerThread::run`                        | `libjvm.dylib`            |
| 29.7% |   1,622 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
| 26.5% |   1,449 | `Monitor::wait_without_safepoint_check`    | `libjvm.dylib`            |
| 13.0% |     713 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
| 10.0% |     546 | `ConcurrentGCThread::run`                  | `libjvm.dylib`            |
|  9.1% |     496 | `Monitor::wait`                            | `libjvm.dylib`            |
|  7.3% |     400 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  6.7% |     364 | `JLI_Launch`                               | `libjli.dylib`            |
|  6.7% |     364 | `main`                                     | `java`                    |
|  6.0% |     329 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  6.0% |     328 | `Compile::Compile`                         | `libjvm.dylib`            |
|  5.7% |     310 | `CompileQueue::get`                        | `libjvm.dylib`            |
|  3.3% |     183 | `unknown`                                  | `<unknown>`               |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Native

|     % | Samples | Function                                | Location                  |
| ----: | ------: | --------------------------------------- | ------------------------- |
| 83.4% |   4,561 | `_pthread_start`                        | `libsystem_pthread.dylib` |
| 83.4% |   4,561 | `thread_start`                          | `libsystem_pthread.dylib` |
| 80.1% |   4,378 | `Thread::call_run`                      | `libjvm.dylib`            |
| 80.1% |   4,378 | `thread_native_entry`                   | `libjvm.dylib`            |
| 45.4% |   2,485 | `__psynch_cvwait`                       | `libsystem_kernel.dylib`  |
| 37.2% |   2,035 | `semaphore_wait_trap`                   | `libsystem_kernel.dylib`  |
| 35.5% |   1,944 | `PlatformMonitor::wait`                 | `libjvm.dylib`            |
| 33.8% |   1,846 | `WorkerThread::run`                     | `libjvm.dylib`            |
| 29.7% |   1,622 | `JavaThread::thread_main_inner`         | `libjvm.dylib`            |
| 26.5% |   1,449 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib`            |
| 10.0% |     546 | `ConcurrentGCThread::run`               | `libjvm.dylib`            |
|  9.1% |     496 | `Monitor::wait`                         | `libjvm.dylib`            |
|  6.7% |     364 | `JLI_Launch`                            | `libjli.dylib`            |
|  6.7% |     364 | `main`                                  | `java`                    |
|  3.3% |     183 | `unknown`                               | `<unknown>`               |
|  3.3% |     182 | `PlatformEvent::park`                   | `libjvm.dylib`            |
|  3.3% |     182 | `ObjectMonitor::wait`                   | `libjvm.dylib`            |
|  3.3% |     182 | `ObjectSynchronizer::wait`              | `libjvm.dylib`            |
|  3.3% |     182 | `JVM_MonitorWait`                       | `libjvm.dylib`            |
|  3.3% |     182 | `os::signal_wait`                       | `libjvm.dylib`            |

##### Compiler

|     % | Samples | Function                                   | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 13.0% |     713 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
|  7.3% |     400 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  6.0% |     329 | `C2Compiler::compile_method`               | `libjvm.dylib` |
|  6.0% |     328 | `Compile::Compile`                         | `libjvm.dylib` |
|  5.7% |     310 | `CompileQueue::get`                        | `libjvm.dylib` |
|  2.8% |     155 | `Compile::Code_Gen`                        | `libjvm.dylib` |
|  2.0% |     111 | `Compile::Optimize`                        | `libjvm.dylib` |
|  1.2% |      67 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|  1.1% |      60 | `Compilation::compile_method`              | `libjvm.dylib` |
|  1.1% |      60 | `Compilation::Compilation`                 | `libjvm.dylib` |
|  1.1% |      58 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
|  1.0% |      56 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
|  1.0% |      55 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
|  1.0% |      53 | `Compilation::compile_java_method`         | `libjvm.dylib` |
|  0.7% |      39 | `Matcher::match`                           | `libjvm.dylib` |
|  0.6% |      33 | `Compile::optimize_loops`                  | `libjvm.dylib` |
|  0.6% |      31 | `PhaseOutput::Output`                      | `libjvm.dylib` |
|  0.5% |      30 | `Matcher::xform`                           | `libjvm.dylib` |
|  0.5% |      30 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
|  0.5% |      26 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |

##### Standard library

|    % | Samples | Function                        | Location                                                                |
| ---: | ------: | ------------------------------- | ----------------------------------------------------------------------- |
| 3.3% |     182 | `wait0(long)`                   | `java.lang.Object`                                                      |
| 3.3% |     182 | `wait(long)`                    | `java.lang.Object`                                                      |
| 3.3% |     182 | `wait()`                        | `java.lang.Object`                                                      |
| 3.3% |     182 | `await()`                       | `java.lang.ref.NativeReferenceQueue`                                    |
| 3.3% |     182 | `remove0()`                     | `java.lang.ref.ReferenceQueue`                                          |
| 3.3% |     182 | `remove()`                      | `java.lang.ref.NativeReferenceQueue`                                    |
| 3.3% |     182 | `run()`                         | `java.lang.ref.Finalizer$FinalizerThread`                               |
| 3.3% |     182 | `waitForReferencePendingList()` | `java.lang.ref.Reference`                                               |
| 3.3% |     182 | `processPendingReferences()`    | `java.lang.ref.Reference`                                               |
| 3.3% |     182 | `run()`                         | `java.lang.ref.Reference$ReferenceHandler`                              |
| 3.3% |     181 | `park(boolean, long)`           | `jdk.internal.misc.Unsafe`                                              |
| 3.3% |     181 | `parkNanos(Object, long)`       | `java.util.concurrent.locks.LockSupport`                                |
| 3.3% |     181 | `await(long, TimeUnit)`         | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
| 3.3% |     181 | `await(long)`                   | `java.lang.ref.ReferenceQueue`                                          |
| 3.3% |     181 | `remove0(long)`                 | `java.lang.ref.ReferenceQueue`                                          |
| 3.3% |     181 | `remove(long)`                  | `java.lang.ref.ReferenceQueue`                                          |
| 3.3% |     181 | `run()`                         | `jdk.internal.ref.CleanerImpl`                                          |
| 3.3% |     181 | `runWith(Object, Runnable)`     | `java.lang.Thread`                                                      |
| 3.3% |     181 | `run()`                         | `java.lang.Thread`                                                      |
| 3.3% |     181 | `run()`                         | `jdk.internal.misc.InnocuousThread`                                     |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Caller         | Location                  |
| -----: | ------: | -------------- | ------------------------- |
| 100.0% |   4,561 | `thread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |   4,378 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Caller           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   4,378 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location                 |
| ----: | ------: | ----------------------- | ------------------------ |
| 78.1% |   1,940 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  7.3% |     182 | `PlatformEvent::park`   | `libjvm.dylib`           |
|  7.3% |     182 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |
|  7.3% |     181 | `Parker::park`          | `libjvm.dylib`           |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 90.2% |   1,835 | `WorkerThread::run`              | `libjvm.dylib` |
|  8.9% |     182 | `os::signal_wait`                | `libjvm.dylib` |
|  0.5% |      11 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |
|  0.3% |       7 | `WorkerThreads::run_task`        | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 74.5% |   1,449 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |
| 25.5% |     495 | `Monitor::wait`                         | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   1,846 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   1,622 | `Thread::call_run` | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|     % | Samples | Caller                                                        | Location       |
| ----: | ------: | ------------------------------------------------------------- | -------------- |
| 12.6% |     182 | `WatcherThread::sleep`                                        | `libjvm.dylib` |
| 12.6% |     182 | `MonitorDeflationThread::monitor_deflation_thread_entry`      | `libjvm.dylib` |
| 12.6% |     182 | `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` | `libjvm.dylib` |
| 12.6% |     182 | `ServiceThread::service_thread_entry`                         | `libjvm.dylib` |
| 12.5% |     181 | `G1ServiceThread::wait_for_task`                              | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |     713 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     546 | `Thread::call_run` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|     % | Samples | Caller                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 61.7% |     306 | `CompileQueue::get`               | `libjvm.dylib` |
| 36.7% |     182 | `JVM_WaitForReferencePendingList` | `libjvm.dylib` |
|  1.6% |       8 | `VMThread::wait_until_executed`   | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |     400 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

|      % | Samples | Caller | Location |
| -----: | ------: | ------ | -------- |
| 100.0% |     364 | `main` | `java`   |

##### `main` (`java`)

|     % | Samples | Caller       | Location       |
| ----: | ------: | ------------ | -------------- |
| 50.0% |     182 | `unknown`    | `<unknown>`    |
| 50.0% |     182 | `apple_main` | `libjli.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |     329 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |     328 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |     310 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `unknown` (`<unknown>`)

|    % | Samples | Caller                 | Location       |
| ---: | ------: | ---------------------- | -------------- |
| 0.5% |       1 | `unknown`              | `<unknown>`    |
| 0.5% |       1 | `JVM_FindLibraryEntry` | `libjvm.dylib` |

##### `PlatformEvent::park` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |     182 | `ObjectMonitor::wait` | `libjvm.dylib` |

##### `ObjectMonitor::wait` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     182 | `ObjectSynchronizer::wait` | `libjvm.dylib` |

##### `ObjectSynchronizer::wait` (`libjvm.dylib`)

|      % | Samples | Caller            | Location       |
| -----: | ------: | ----------------- | -------------- |
| 100.0% |     182 | `JVM_MonitorWait` | `libjvm.dylib` |

##### `JVM_MonitorWait` (`libjvm.dylib`)

|      % | Samples | Caller        | Location           |
| -----: | ------: | ------------- | ------------------ |
| 100.0% |     182 | `wait0(long)` | `java.lang.Object` |

##### `os::signal_wait` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |     182 | `signal_thread_entry` | `libjvm.dylib` |

##### `wait0(long)` (`java.lang.Object`)

|      % | Samples | Caller       | Location           |
| -----: | ------: | ------------ | ------------------ |
| 100.0% |     182 | `wait(long)` | `java.lang.Object` |

##### `wait(long)` (`java.lang.Object`)

|      % | Samples | Caller   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |     182 | `wait()` | `java.lang.Object` |

##### `wait()` (`java.lang.Object`)

|      % | Samples | Caller    | Location                             |
| -----: | ------: | --------- | ------------------------------------ |
| 100.0% |     182 | `await()` | `java.lang.ref.NativeReferenceQueue` |

##### `await()` (`java.lang.ref.NativeReferenceQueue`)

|      % | Samples | Caller      | Location                       |
| -----: | ------: | ----------- | ------------------------------ |
| 100.0% |     182 | `remove0()` | `java.lang.ref.ReferenceQueue` |

##### `remove0()` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Caller     | Location                             |
| -----: | ------: | ---------- | ------------------------------------ |
| 100.0% |     182 | `remove()` | `java.lang.ref.NativeReferenceQueue` |

##### `remove()` (`java.lang.ref.NativeReferenceQueue`)

|      % | Samples | Caller  | Location                                  |
| -----: | ------: | ------- | ----------------------------------------- |
| 100.0% |     182 | `run()` | `java.lang.ref.Finalizer$FinalizerThread` |

##### `waitForReferencePendingList()` (`java.lang.ref.Reference`)

|      % | Samples | Caller                       | Location                  |
| -----: | ------: | ---------------------------- | ------------------------- |
| 100.0% |     182 | `processPendingReferences()` | `java.lang.ref.Reference` |

##### `processPendingReferences()` (`java.lang.ref.Reference`)

|      % | Samples | Caller  | Location                                   |
| -----: | ------: | ------- | ------------------------------------------ |
| 100.0% |     182 | `run()` | `java.lang.ref.Reference$ReferenceHandler` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|      % | Samples | Caller                    | Location                                 |
| -----: | ------: | ------------------------- | ---------------------------------------- |
| 100.0% |     181 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

|      % | Samples | Caller                  | Location                                                                |
| -----: | ------: | ----------------------- | ----------------------------------------------------------------------- |
| 100.0% |     181 | `await(long, TimeUnit)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

|      % | Samples | Caller        | Location                       |
| -----: | ------: | ------------- | ------------------------------ |
| 100.0% |     181 | `await(long)` | `java.lang.ref.ReferenceQueue` |

##### `await(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Caller          | Location                       |
| -----: | ------: | --------------- | ------------------------------ |
| 100.0% |     181 | `remove0(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove0(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Caller         | Location                       |
| -----: | ------: | -------------- | ------------------------------ |
| 100.0% |     181 | `remove(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Caller  | Location                       |
| -----: | ------: | ------- | ------------------------------ |
| 100.0% |     181 | `run()` | `jdk.internal.ref.CleanerImpl` |

##### `run()` (`jdk.internal.ref.CleanerImpl`)

|      % | Samples | Caller                      | Location           |
| -----: | ------: | --------------------------- | ------------------ |
| 100.0% |     181 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % | Samples | Caller  | Location           |
| -----: | ------: | ------- | ------------------ |
| 100.0% |     181 | `run()` | `java.lang.Thread` |

##### `run()` (`java.lang.Thread`)

|      % | Samples | Caller  | Location                            |
| -----: | ------: | ------- | ----------------------------------- |
| 100.0% |     181 | `run()` | `jdk.internal.misc.InnocuousThread` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     155 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     111 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 50.7% |      34 | `Compile::Optimize`       | `libjvm.dylib` |
| 49.3% |      33 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      60 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      60 | `Compiler::compile_method` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      58 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      56 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |      55 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |      53 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      39 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      33 | `Compile::Optimize` | `libjvm.dylib` |

##### `PhaseOutput::Output` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      31 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |      30 | `Matcher::match` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 46.7% |      14 | `Compile::Optimize`                        | `libjvm.dylib` |
| 36.7% |      11 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|  6.7% |       2 | `Compile::process_for_post_loop_opts_igvn` | `libjvm.dylib` |
|  6.7% |       2 | `PhaseMacroExpand::expand_macro_nodes`     | `libjvm.dylib` |
|  3.3% |       1 | `Compile::inline_incrementally_cleanup`    | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |      26 | `PhaseIterGVN::optimize` | `libjvm.dylib` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 96.0% |   4,378 | `thread_native_entry` | `libjvm.dylib` |
|  4.0% |     182 | `apple_main`          | `libjli.dylib` |
| <0.1% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   4,561 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 42.2% |   1,846 | `WorkerThread::run`             | `libjvm.dylib` |
| 37.0% |   1,622 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| 12.5% |     546 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  4.2% |     182 | `WatcherThread::run`            | `libjvm.dylib` |
|  4.2% |     182 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   4,378 | `Thread::call_run` | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Callee               | Location                  |
| ----: | ------: | -------------------- | ------------------------- |
| 99.8% |   1,940 | `__psynch_cvwait`    | `libsystem_kernel.dylib`  |
|  0.2% |       4 | `_pthread_cond_wait` | `libsystem_pthread.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 99.4% |   1,835 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
|  0.3% |       6 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
|  0.1% |       2 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib`           |
|  0.1% |       1 | `G1CMRemarkTask::work`            | `libjvm.dylib`           |
|  0.1% |       1 | `G1ParallelCleaningTask::work`    | `libjvm.dylib`           |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                                   | Location       |
| ----: | ------: | -------------------------------------------------------- | -------------- |
| 44.0% |     713 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib` |
| 11.2% |     182 | `signal_thread_entry`                                    | `libjvm.dylib` |
| 11.2% |     182 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |
| 11.2% |     182 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |
| 11.2% |     182 | `JvmtiAgentThread::start_function_wrapper`               | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |   1,449 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 56.1% |     400 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
| 43.5% |     310 | `CompileQueue::get`                            | `libjvm.dylib` |
|  0.1% |       1 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |
|  0.1% |       1 | `CompileTask::print_ul`                        | `libjvm.dylib` |
|  0.1% |       1 | `TraceTime::TraceTime`                         | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 33.3% |     182 | `G1ServiceThread::run_service`          | `libjvm.dylib` |
| 33.3% |     182 | `G1ConcurrentMarkThread::run_service`   | `libjvm.dylib` |
| 33.3% |     182 | `G1ConcurrentRefineThread::run_service` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|     % | Samples | Callee                                                                        | Location       |
| ----: | ------: | ----------------------------------------------------------------------------- | -------------- |
| 99.8% |     495 | `PlatformMonitor::wait`                                                       | `libjvm.dylib` |
|  0.2% |       1 | `ThreadBlockInVMPreprocess<InFlightMutexRelease>::~ThreadBlockInVMPreprocess` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 82.3% |     329 | `C2Compiler::compile_method`    | `libjvm.dylib` |
| 15.0% |      60 | `Compiler::compile_method`      | `libjvm.dylib` |
|  1.0% |       4 | `ciEnv::ciEnv`                  | `libjvm.dylib` |
|  1.0% |       4 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |
|  0.5% |       2 | `CompilationLog::log_compile`   | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 50.0% |     182 | `CreateExecutionEnvironment` | `libjli.dylib` |
| 50.0% |     182 | `ContinueInNewThread`        | `libjli.dylib` |

##### `main` (`java`)

|      % | Samples | Callee       | Location       |
| -----: | ------: | ------------ | -------------- |
| 100.0% |     364 | `JLI_Launch` | `libjli.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee             | Location       |
| ----: | ------: | ------------------ | -------------- |
| 99.7% |     328 | `Compile::Compile` | `libjvm.dylib` |
|  0.3% |       1 | `Chunk::next_chop` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                      | Location       |
| ----: | ------: | --------------------------- | -------------- |
| 47.3% |     155 | `Compile::Code_Gen`         | `libjvm.dylib` |
| 33.8% |     111 | `Compile::Optimize`         | `libjvm.dylib` |
| 15.9% |      52 | `ParseGenerator::generate`  | `libjvm.dylib` |
|  1.5% |       5 | `CallGenerator::for_inline` | `libjvm.dylib` |
|  0.9% |       3 | `Compile::Init`             | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|     % | Samples | Callee          | Location        |
| ----: | ------: | --------------- | --------------- |
| 98.7% |     306 | `Monitor::wait` | `libjvm.dylib`  |
|  0.6% |       2 | `Mutex::lock`   | `libjvm.dylib`  |
|  0.3% |       1 | `tlv_get_addr`  | `libdyld.dylib` |

##### `unknown` (`<unknown>`)

|     % | Samples | Callee    | Location    |
| ----: | ------: | --------- | ----------- |
| 99.5% |     182 | `main`    | `java`      |
|  0.5% |       1 | `unknown` | `<unknown>` |

##### `PlatformEvent::park` (`libjvm.dylib`)

|      % | Samples | Callee            | Location                 |
| -----: | ------: | ----------------- | ------------------------ |
| 100.0% |     182 | `__psynch_cvwait` | `libsystem_kernel.dylib` |

##### `ObjectMonitor::wait` (`libjvm.dylib`)

|      % | Samples | Callee                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |     182 | `PlatformEvent::park` | `libjvm.dylib` |

##### `ObjectSynchronizer::wait` (`libjvm.dylib`)

|      % | Samples | Callee                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |     182 | `ObjectMonitor::wait` | `libjvm.dylib` |

##### `JVM_MonitorWait` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     182 | `ObjectSynchronizer::wait` | `libjvm.dylib` |

##### `os::signal_wait` (`libjvm.dylib`)

|      % | Samples | Callee                | Location                 |
| -----: | ------: | --------------------- | ------------------------ |
| 100.0% |     182 | `semaphore_wait_trap` | `libsystem_kernel.dylib` |

##### `wait0(long)` (`java.lang.Object`)

|      % | Samples | Callee            | Location       |
| -----: | ------: | ----------------- | -------------- |
| 100.0% |     182 | `JVM_MonitorWait` | `libjvm.dylib` |

##### `wait(long)` (`java.lang.Object`)

|      % | Samples | Callee        | Location           |
| -----: | ------: | ------------- | ------------------ |
| 100.0% |     182 | `wait0(long)` | `java.lang.Object` |

##### `wait()` (`java.lang.Object`)

|      % | Samples | Callee       | Location           |
| -----: | ------: | ------------ | ------------------ |
| 100.0% |     182 | `wait(long)` | `java.lang.Object` |

##### `await()` (`java.lang.ref.NativeReferenceQueue`)

|      % | Samples | Callee   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |     182 | `wait()` | `java.lang.Object` |

##### `remove0()` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee    | Location                             |
| -----: | ------: | --------- | ------------------------------------ |
| 100.0% |     182 | `await()` | `java.lang.ref.NativeReferenceQueue` |

##### `remove()` (`java.lang.ref.NativeReferenceQueue`)

|      % | Samples | Callee      | Location                       |
| -----: | ------: | ----------- | ------------------------------ |
| 100.0% |     182 | `remove0()` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`java.lang.ref.Finalizer$FinalizerThread`)

|      % | Samples | Callee     | Location                             |
| -----: | ------: | ---------- | ------------------------------------ |
| 100.0% |     182 | `remove()` | `java.lang.ref.NativeReferenceQueue` |

##### `waitForReferencePendingList()` (`java.lang.ref.Reference`)

|      % | Samples | Callee                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |     182 | `JVM_WaitForReferencePendingList` | `libjvm.dylib` |

##### `processPendingReferences()` (`java.lang.ref.Reference`)

|      % | Samples | Callee                          | Location                  |
| -----: | ------: | ------------------------------- | ------------------------- |
| 100.0% |     182 | `waitForReferencePendingList()` | `java.lang.ref.Reference` |

##### `run()` (`java.lang.ref.Reference$ReferenceHandler`)

|      % | Samples | Callee                       | Location                  |
| -----: | ------: | ---------------------------- | ------------------------- |
| 100.0% |     182 | `processPendingReferences()` | `java.lang.ref.Reference` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|      % | Samples | Callee        | Location       |
| -----: | ------: | ------------- | -------------- |
| 100.0% |     181 | `Unsafe_Park` | `libjvm.dylib` |

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

|      % | Samples | Callee                | Location                   |
| -----: | ------: | --------------------- | -------------------------- |
| 100.0% |     181 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

|      % | Samples | Callee                    | Location                                 |
| -----: | ------: | ------------------------- | ---------------------------------------- |
| 100.0% |     181 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `await(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee                  | Location                                                                |
| -----: | ------: | ----------------------- | ----------------------------------------------------------------------- |
| 100.0% |     181 | `await(long, TimeUnit)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `remove0(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee        | Location                       |
| -----: | ------: | ------------- | ------------------------------ |
| 100.0% |     181 | `await(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee          | Location                       |
| -----: | ------: | --------------- | ------------------------------ |
| 100.0% |     181 | `remove0(long)` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`jdk.internal.ref.CleanerImpl`)

|      % | Samples | Callee         | Location                       |
| -----: | ------: | -------------- | ------------------------------ |
| 100.0% |     181 | `remove(long)` | `java.lang.ref.ReferenceQueue` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % | Samples | Callee  | Location                       |
| -----: | ------: | ------- | ------------------------------ |
| 100.0% |     181 | `run()` | `jdk.internal.ref.CleanerImpl` |

##### `run()` (`java.lang.Thread`)

|      % | Samples | Callee                      | Location           |
| -----: | ------: | --------------------------- | ------------------ |
| 100.0% |     181 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `run()` (`jdk.internal.misc.InnocuousThread`)

|      % | Samples | Callee  | Location           |
| -----: | ------: | ------- | ------------------ |
| 100.0% |     181 | `run()` | `java.lang.Thread` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 37.4% |      58 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 25.2% |      39 | `Matcher::match`                  | `libjvm.dylib` |
| 20.0% |      31 | `PhaseOutput::Output`             | `libjvm.dylib` |
| 10.3% |      16 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  1.9% |       3 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 30.6% |      34 | `PhaseIdealLoop::optimize`     | `libjvm.dylib` |
| 29.7% |      33 | `Compile::optimize_loops`      | `libjvm.dylib` |
| 12.6% |      14 | `PhaseIterGVN::optimize`       | `libjvm.dylib` |
|  8.1% |       9 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |
|  7.2% |       8 | `PhaseCCP::PhaseCCP`           | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 83.6% |      56 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| 16.4% |      11 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                                               | Location       |
| ----: | ------: | ---------------------------------------------------- | -------------- |
| 88.3% |      53 | `Compilation::compile_java_method`                   | `libjvm.dylib` |
| 10.0% |       6 | `ciEnv::register_method`                             | `libjvm.dylib` |
|  1.7% |       1 | `DebugInformationRecorder::DebugInformationRecorder` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |      60 | `Compilation::compile_method` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 20.7% |      12 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| 13.8% |       8 | `PhaseLive::compute`                       | `libjvm.dylib` |
| 13.8% |       8 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
| 12.1% |       7 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
|  6.9% |       4 | `PhaseAggressiveCoalesce::insert_copies`   | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location                   |
| ----: | ------: | ------------------------------------ | -------------------------- |
| 98.2% |      55 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib`             |
|  1.8% |       1 | `_platform_bzero`                    | `libsystem_platform.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 25.5% |      14 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| 21.8% |      12 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 10.9% |       6 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |
| 10.9% |       6 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
| 10.9% |       6 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 45.3% |      24 | `Compilation::build_hir`       | `libjvm.dylib` |
| 39.6% |      21 | `Compilation::emit_lir`        | `libjvm.dylib` |
| 11.3% |       6 | `Compilation::emit_code_body`  | `libjvm.dylib` |
|  3.8% |       2 | `ciMethod::ensure_method_data` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 76.9% |      30 | `Matcher::xform`                              | `libjvm.dylib` |
| 10.3% |       4 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |
|  7.7% |       3 | `Matcher::find_shared`                        | `libjvm.dylib` |
|  2.6% |       1 | `IfFalseNode::Opcode`                         | `libjvm.dylib` |
|  2.6% |       1 | `Arena::contains`                             | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      33 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `PhaseOutput::Output` (`libjvm.dylib`)

|     % | Samples | Callee                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 29.0% |       9 | `PhaseOutput::shorten_branches`         | `libjvm.dylib` |
| 19.4% |       6 | `PhaseOutput::init_scratch_buffer_blob` | `libjvm.dylib` |
| 19.4% |       6 | `Scheduling::DoScheduling`              | `libjvm.dylib` |
| 16.1% |       5 | `PhaseOutput::fill_buffer`              | `libjvm.dylib` |
| 12.9% |       4 | `PhaseOutput::BuildOopMaps`             | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 63.3% |      19 | `Matcher::match_tree` | `libjvm.dylib` |
| 16.7% |       5 | `Arena::contains`     | `libjvm.dylib` |
|  3.3% |       1 | `Matcher::match_sfpt` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 86.7% |      26 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 19.2% |       5 | `PhiNode::Ideal`             | `libjvm.dylib` |
| 11.5% |       3 | `NodeHash::hash_find_insert` | `libjvm.dylib` |
|  7.7% |       2 | `CallDynamicJavaNode::Ideal` | `libjvm.dylib` |
|  7.7% |       2 | `LoadNode::Ideal`            | `libjvm.dylib` |
|  3.8% |       1 | `AndINode::Ideal`            | `libjvm.dylib` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 33.6% |   1,835 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`) ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                     |
|  5.5% |     303 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                   |
|  3.3% |     182 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformEvent::park` (`libjvm.dylib`) ← `ObjectMonitor::wait` ← `ObjectSynchronizer::wait` ← `JVM_MonitorWait` ← `wait0(long)` (`java.lang.Object`) ← `wait(long)` ← `wait()` ← `await()` (`java.lang.ref.NativeReferenceQueue`) ← `remove0()` (`java.lang.ref.ReferenceQueue`) ← `remove()` (`java.lang.ref.NativeReferenceQueue`) ← `run()` (`java.lang.ref.Finalizer$FinalizerThread`)                                                                                                                                                                |
|  3.3% |     182 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `os::signal_wait` (`libjvm.dylib`) ← `signal_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                             |
|  3.3% |     182 | `mach_msg2_trap` (`libsystem_kernel.dylib`) ← `mach_msg_overwrite` ← `mach_msg` ← `__CFRunLoopServiceMachPort` (`CoreFoundation`) ← `__CFRunLoopRun` ← `CFRunLoopRunSpecific` ← `CreateExecutionEnvironment` (`libjli.dylib`) ← `JLI_Launch` ← `main` (`java`) ← `unknown`                                                                                                                                                                                                                                                                                                                               |
|  3.3% |     182 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `WatcherThread::sleep` ← `WatcherThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                           |
|  3.3% |     182 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `JVM_WaitForReferencePendingList` ← `waitForReferencePendingList()` (`java.lang.ref.Reference`) ← `processPendingReferences()` ← `run()` (`java.lang.ref.Reference$ReferenceHandler`)                                                                                                                                                                                                                                                                                                        |
|  3.3% |     182 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `MonitorDeflationThread::monitor_deflation_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                              |
|  3.3% |     182 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` ← `G1ConcurrentRefineThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                     |
|  3.3% |     182 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Profiler::timerLoop` (`libasyncProfiler.dylib`) ← `JvmtiAgentThread::start_function_wrapper` (`libjvm.dylib`) ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                             |
|  3.3% |     182 | `__ulock_wait` (`libsystem_kernel.dylib`) ← `CallJavaMainInNewThread` (`libjli.dylib`) ← `ContinueInNewThread` ← `JLI_Launch` ← `main` (`java`) ← `apple_main` (`libjli.dylib`) ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                          |
|  3.3% |     181 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ServiceThread::wait_for_task` ← `G1ServiceThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                           |
|  3.3% |     181 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `await(long)` (`java.lang.ref.ReferenceQueue`) ← `remove0(long)` ← `remove(long)` ← `run()` (`jdk.internal.ref.CleanerImpl`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` ← `run()` (`jdk.internal.misc.InnocuousThread`)                               |
|  3.3% |     181 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `NotificationThread::notification_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                       |
|  3.3% |     180 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `ServiceThread::service_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                 |
|  3.3% |     179 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ConcurrentMarkThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                       |
|  3.2% |     176 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `VMThread::wait_for_operation` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                        |
|  0.1% |       8 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                 |
|  0.1% |       5 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `GenericWaitBarrier::Cell::wait` (`libjvm.dylib`) ← `GenericWaitBarrier::wait` ← `SafepointSynchronize::block` ← `SafepointMechanism::process` ← `BufferBlob::create` ← `PhaseOutput::init_scratch_buffer_blob` ← `PhaseOutput::Output` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start` |
|  0.1% |       5 | `Matcher::xform` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                       |
