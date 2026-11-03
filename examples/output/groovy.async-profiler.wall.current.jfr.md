# Sampling profile

Collected 2,910 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Native            | 92.1% |   2,680 |
| Compiler          |  6.0% |     174 |
| Standard library  |  1.8% |      53 |
| JIT               |  0.1% |       2 |
| Garbage collector | <0.1% |       1 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 2,432 samples (83.6%) thread_start at libsystem_pthread.dylib
│   └── 2,432 samples (83.6%) _pthread_start
│       ├── 2,335 samples (80.2%) thread_native_entry at libjvm.dylib
│       │   └── 2,335 samples (80.2%) Thread::call_run
│       │       ├── 995 samples (34.2%) WorkerThread::run
│       │       │   └── 992 samples (34.1%, self 37.5% globally) semaphore_wait_trap at libsystem_kernel.dylib
│       │       ├── 860 samples (29.6%) JavaThread::thread_main_inner
│       │       │   ├── 382 samples (13.1%) CompileBroker::compiler_thread_loop
│       │       │   │   ├── 216 samples (7.4%) CompileBroker::invoke_compiler_on_method
│       │       │   │   │   ├── 182 samples (6.3%) C2Compiler::compile_method
│       │       │   │   │   │   └── 180 samples (6.2%) Compile::Compile
│       │       │   │   │   │       ├── 84 samples (2.9%) Compile::Code_Gen
│       │       │   │   │   │       │   ├── 46 samples (1.6%) PhaseChaitin::Register_Allocate
│       │       │   │   │   │       │   │   ├── 9 samples (0.3%) PhaseChaitin::Split
│       │       │   │   │   │       │   │   ├── 6 samples (0.2%) PhaseLive::compute
│       │       │   │   │   │       │   │   └── 31 samples (1.1%) 12 more callees, led by (0.2%) PhaseChaitin::gather_lrg_masks
│       │       │   │   │   │       │   └── 38 samples (1.3%) 6 more callees, led by (0.5%) Matcher::match
│       │       │   │   │   │       ├── 79 samples (2.7%) Compile::Optimize
│       │       │   │   │   │       │   ├── … 21 samples (0.7%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
│       │       │   │   │   │       │   │   └── 7 samples (0.2%) PhaseIdealLoop::Dominators
│       │       │   │   │   │       │   ├── 18 samples (0.6%) PhaseIterGVN::optimize
│       │       │   │   │   │       │   │   └── 18 samples (0.6%) PhaseIterGVN::transform_old
│       │       │   │   │   │       │   │       └── 2 samples (0.1%) NodeHash::hash_find_insert
│       │       │   │   │   │       │   └── 38 samples (1.3%) 8 more callees, led by (0.5%) Compile::optimize_loops
│       │       │   │   │   │       └── 17 samples (0.6%) 2 more callees, led by (0.5%) ParseGenerator::generate
│       │       │   │   │   └── 34 samples (1.2%) 2 more callees, led by (1.1%) Compiler::compile_method
│       │       │   │   └── … 165 samples (5.7%) PlatformMonitor::wait at libjvm.dylib
│       │       │   │       ├── 160 samples (5.5%, self 44.9% globally) __psynch_cvwait at libsystem_kernel.dylib
│       │       │   │       └── … 4 samples (0.1%) __psynch_mutexwait at libsystem_kernel.dylib
│       │       │   └── 478 samples (16.4%) 5 more callees, led by (3.3%) MonitorDeflationThread::monitor_deflation_thread_entry
│       │       ├── 288 samples (9.9%) ConcurrentGCThread::run
│       │       │   └── 288 samples (9.9%) 3 more callees, led by (3.3%) G1ServiceThread::run_service
│       │       └── 192 samples (6.6%) 2 more callees, led by (3.3%) WatcherThread::run
│       └── … 96 samples (3.3%) __ulock_wait at libsystem_kernel.dylib
├── … 96 samples (3.3%) mach_msg2_trap at libsystem_kernel.dylib
├── … 91 samples (3.1%) invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object) at java.lang.invoke.LambdaForm$DMH.0x0000007001088800
│   ├── … 21 samples (0.7%) setCallSiteTarget() at org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector
│   │   └── … 10 samples (0.3%) java_lang_Throwable::fill_in_stack_trace at libjvm.dylib
│   └── 60 samples (2.1%) 2 more callees, led by (2.0%) fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[]) at org.codehaus.groovy.vmplugin.v8.IndyInterface
└── 290 samples (10.0%) 5 more root frames, led by (3.3%) run() at java.lang.ref.Finalizer$FinalizerThread
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|     % | Samples | Function                                    | Location                 |
| ----: | ------: | ------------------------------------------- | ------------------------ |
| 44.9% |   1,307 | `__psynch_cvwait`                           | `libsystem_kernel.dylib` |
| 37.5% |   1,090 | `semaphore_wait_trap`                       | `libsystem_kernel.dylib` |
|  3.3% |      96 | `__ulock_wait`                              | `libsystem_kernel.dylib` |
|  3.3% |      96 | `mach_msg2_trap`                            | `libsystem_kernel.dylib` |
|  0.4% |      12 | `__psynch_mutexwait`                        | `libsystem_kernel.dylib` |
|  0.2% |       7 | `PhaseChaitin::Split`                       | `libjvm.dylib`           |
|  0.2% |       6 | `PhaseIdealLoop::Dominators`                | `libjvm.dylib`           |
|  0.2% |       5 | `IndexSetIterator::advance_and_next`        | `libjvm.dylib`           |
|  0.2% |       5 | `PhaseLive::compute`                        | `libjvm.dylib`           |
|  0.2% |       5 | `java_lang_Throwable::fill_in_stack_trace`  | `libjvm.dylib`           |
|  0.1% |       4 | `PhaseIterGVN::transform_old`               | `libjvm.dylib`           |
|  0.1% |       4 | `tlv_get_addr`                              | `libdyld.dylib`          |
|  0.1% |       4 | `PhaseOutput::BuildOopMaps`                 | `libjvm.dylib`           |
|  0.1% |       4 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib`           |
|  0.1% |       4 | `PhaseIdealLoop::build_loop_late`           | `libjvm.dylib`           |
|  0.1% |       4 | `PhaseIdealLoop::build_loop_early`          | `libjvm.dylib`           |
|  0.1% |       4 | `Arena::contains`                           | `libjvm.dylib`           |
|  0.1% |       4 | `PhaseAggressiveCoalesce::insert_copies`    | `libjvm.dylib`           |
|  0.1% |       3 | `NodeHash::hash_find_insert`                | `libjvm.dylib`           |
|  0.1% |       3 | `Type::cmp`                                 | `libjvm.dylib`           |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Native

|     % | Samples | Function                                     | Location                   |
| ----: | ------: | -------------------------------------------- | -------------------------- |
| 44.9% |   1,307 | `__psynch_cvwait`                            | `libsystem_kernel.dylib`   |
| 37.5% |   1,090 | `semaphore_wait_trap`                        | `libsystem_kernel.dylib`   |
|  3.3% |      96 | `__ulock_wait`                               | `libsystem_kernel.dylib`   |
|  3.3% |      96 | `mach_msg2_trap`                             | `libsystem_kernel.dylib`   |
|  0.4% |      12 | `__psynch_mutexwait`                         | `libsystem_kernel.dylib`   |
|  0.2% |       5 | `java_lang_Throwable::fill_in_stack_trace`   | `libjvm.dylib`             |
|  0.1% |       4 | `tlv_get_addr`                               | `libdyld.dylib`            |
|  0.1% |       4 | `Arena::contains`                            | `libjvm.dylib`             |
|  0.1% |       2 | `Dict::Insert`                               | `libjvm.dylib`             |
|  0.1% |       2 | `ValueRecorder<Metadata*>::maybe_find_index` | `libjvm.dylib`             |
|  0.1% |       2 | `_platform_memset`                           | `libsystem_platform.dylib` |
|  0.1% |       2 | `InstanceKlass::find_method_index`           | `libjvm.dylib`             |
|  0.1% |       2 | `__vfprintf`                                 | `libsystem_c.dylib`        |
|  0.1% |       2 | `BacktraceBuilder::push`                     | `libjvm.dylib`             |
|  0.1% |       2 | `pthread_jit_write_protect_np`               | `libsystem_pthread.dylib`  |
|  0.1% |       2 | `frame::sender_for_compiled_frame`           | `libjvm.dylib`             |
|  0.1% |       2 | `vmSymbols::find_sid`                        | `libjvm.dylib`             |
|  0.1% |       2 | `posix_madvise`                              | `libsystem_kernel.dylib`   |
| <0.1% |       1 | `ImmutableOopMapSet::find_slot_for_offset`   | `libjvm.dylib`             |
| <0.1% |       1 | `free`                                       | `libsystem_malloc.dylib`   |

##### Compiler

|    % | Samples | Function                                    | Location       |
| ---: | ------: | ------------------------------------------- | -------------- |
| 0.2% |       7 | `PhaseChaitin::Split`                       | `libjvm.dylib` |
| 0.2% |       6 | `PhaseIdealLoop::Dominators`                | `libjvm.dylib` |
| 0.2% |       5 | `IndexSetIterator::advance_and_next`        | `libjvm.dylib` |
| 0.2% |       5 | `PhaseLive::compute`                        | `libjvm.dylib` |
| 0.1% |       4 | `PhaseIterGVN::transform_old`               | `libjvm.dylib` |
| 0.1% |       4 | `PhaseOutput::BuildOopMaps`                 | `libjvm.dylib` |
| 0.1% |       4 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
| 0.1% |       4 | `PhaseIdealLoop::build_loop_late`           | `libjvm.dylib` |
| 0.1% |       4 | `PhaseIdealLoop::build_loop_early`          | `libjvm.dylib` |
| 0.1% |       4 | `PhaseAggressiveCoalesce::insert_copies`    | `libjvm.dylib` |
| 0.1% |       3 | `NodeHash::hash_find_insert`                | `libjvm.dylib` |
| 0.1% |       3 | `Type::cmp`                                 | `libjvm.dylib` |
| 0.1% |       3 | `PhaseChaitin::gather_lrg_masks`            | `libjvm.dylib` |
| 0.1% |       3 | `Compile::identify_useful_nodes`            | `libjvm.dylib` |
| 0.1% |       3 | `PhaseChaitin::build_ifg_physical`          | `libjvm.dylib` |
| 0.1% |       3 | `Node::dominates`                           | `libjvm.dylib` |
| 0.1% |       2 | `PhaseCCP::transform`                       | `libjvm.dylib` |
| 0.1% |       2 | `Node::Node`                                | `libjvm.dylib` |
| 0.1% |       2 | `DebugInformationRecorder::describe_scope`  | `libjvm.dylib` |
| 0.1% |       2 | `PhaseChaitin::elide_copy`                  | `libjvm.dylib` |

##### Standard library

|     % | Samples | Function                                                                                    | Location                                                    |
| ----: | ------: | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
|  0.1% |       2 | `<init>(MethodType, LambdaForm)`                                                            | `java.lang.invoke.MethodHandle`                             |
|  0.1% |       2 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)`                   | `java.lang.invoke.MethodHandleImpl`                         |
|  0.1% |       2 | `collector(Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000007001031800`         |
|  0.1% |       2 | `cast(Object)`                                                                              | `java.lang.Class`                                           |
|  0.1% |       2 | `invokeBasic(Object[])`                                                                     | `java.lang.invoke.MethodHandle`                             |
|  0.1% |       2 | `checkCanSetAccessible(Class, Class, boolean)`                                              | `java.lang.reflect.AccessibleObject`                        |
| <0.1% |       1 | `addConstantUtf8(String)`                                                                   | `jdk.internal.org.objectweb.asm.SymbolTable`                |
| <0.1% |       1 | `initValue()`                                                                               | `org.codehaus.groovy.reflection.CachedClass$3`              |
| <0.1% |       1 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800`        |
| <0.1% |       1 | `<clinit>()`                                                                                | `org.codehaus.groovy.ast.ClassHelper`                       |
| <0.1% |       1 | `linkToCallSite(Object, Object)`                                                            | `java.lang.invoke.Invokers$Holder`                          |
| <0.1% |       1 | `mismatch(byte[], int, byte[], int, int)`                                                   | `jdk.internal.util.ArraysSupport`                           |
| <0.1% |       1 | `valuesToArray(Object[])`                                                                   | `java.util.HashMap`                                         |
| <0.1% |       1 | `getParameterTypes()`                                                                       | `org.codehaus.groovy.reflection.ParameterTypes`             |
| <0.1% |       1 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070010d9c00`         |
| <0.1% |       1 | `charAt(byte[], int)`                                                                       | `java.lang.StringLatin1`                                    |
| <0.1% |       1 | `getAugmentations(int)`                                                                     | `com.sun.org.apache.xerces.internal.util.XMLAttributesImpl` |
| <0.1% |       1 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070010d5c00`         |
| <0.1% |       1 | `matchRegex(Object, Object)`                                                                | `org.codehaus.groovy.runtime.InvokerHelper`                 |
| <0.1% |       1 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001290000`         |

#### Lines

Lines with the largest contribution to each function's self samples.

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Location                            |
| ----: | ------: | ----------------------------------- |
| 50.0% |       1 | `java.lang.invoke.MethodHandle:479` |
| 50.0% |       1 | `java.lang.invoke.MethodHandle:480` |

##### `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

|     % | Samples | Location                                |
| ----: | ------: | --------------------------------------- |
| 50.0% |       1 | `java.lang.invoke.MethodHandleImpl:294` |
| 50.0% |       1 | `java.lang.invoke.MethodHandleImpl:289` |

##### `cast(Object)` (`java.lang.Class`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       2 | `java.lang.Class:4068` |

##### `checkCanSetAccessible(Class, Class, boolean)` (`java.lang.reflect.AccessibleObject`)

|      % | Samples | Location                                 |
| -----: | ------: | ---------------------------------------- |
| 100.0% |       2 | `java.lang.reflect.AccessibleObject:343` |

##### `addConstantUtf8(String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|      % | Samples | Location                                         |
| -----: | ------: | ------------------------------------------------ |
| 100.0% |       1 | `jdk.internal.org.objectweb.asm.SymbolTable:807` |

##### `initValue()` (`org.codehaus.groovy.reflection.CachedClass$3`)

|      % | Samples | Location                                          |
| -----: | ------: | ------------------------------------------------- |
| 100.0% |       1 | `org.codehaus.groovy.reflection.CachedClass$3:95` |

##### `<clinit>()` (`org.codehaus.groovy.ast.ClassHelper`)

|      % | Samples | Location                                  |
| -----: | ------: | ----------------------------------------- |
| 100.0% |       1 | `org.codehaus.groovy.ast.ClassHelper:146` |

##### `mismatch(byte[], int, byte[], int, int)` (`jdk.internal.util.ArraysSupport`)

|      % | Samples | Location                              |
| -----: | ------: | ------------------------------------- |
| 100.0% |       1 | `jdk.internal.util.ArraysSupport:402` |

##### `valuesToArray(Object[])` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.HashMap:975` |

##### `getParameterTypes()` (`org.codehaus.groovy.reflection.ParameterTypes`)

|      % | Samples | Location                                           |
| -----: | ------: | -------------------------------------------------- |
| 100.0% |       1 | `org.codehaus.groovy.reflection.ParameterTypes:65` |

##### `charAt(byte[], int)` (`java.lang.StringLatin1`)

|      % | Samples | Location                    |
| -----: | ------: | --------------------------- |
| 100.0% |       1 | `java.lang.StringLatin1:46` |

##### `getAugmentations(int)` (`com.sun.org.apache.xerces.internal.util.XMLAttributesImpl`)

|      % | Samples | Location                                                         |
| -----: | ------: | ---------------------------------------------------------------- |
| 100.0% |       1 | `com.sun.org.apache.xerces.internal.util.XMLAttributesImpl:1128` |

##### `matchRegex(Object, Object)` (`org.codehaus.groovy.runtime.InvokerHelper`)

|      % | Samples | Location                                        |
| -----: | ------: | ----------------------------------------------- |
| 100.0% |       1 | `org.codehaus.groovy.runtime.InvokerHelper:342` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location                 |
| ----: | ------: | ----------------------- | ------------------------ |
| 78.1% |   1,021 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  7.3% |      96 | `PlatformEvent::park`   | `libjvm.dylib`           |
|  7.3% |      95 | `Parker::park`          | `libjvm.dylib`           |
|  7.3% |      95 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 91.0% |     992 | `WorkerThread::run`       | `libjvm.dylib` |
|  8.8% |      96 | `os::signal_wait`         | `libjvm.dylib` |
|  0.2% |       2 | `WorkerThreads::run_task` | `libjvm.dylib` |

##### `__ulock_wait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |      96 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

|      % | Samples | Caller               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |      96 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |      12 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       7 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       6 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 20.0% |       1 | `PhaseChaitin::Simplify`     | `libjvm.dylib` |
| 20.0% |       1 | `PhaseIFG::SquareUp`         | `libjvm.dylib` |
| 20.0% |       1 | `PhaseIFG::effective_degree` | `libjvm.dylib` |
| 20.0% |       1 | `PhaseIFG::remove_node`      | `libjvm.dylib` |
| 20.0% |       1 | `PhaseLive::add_liveout`     | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       5 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `java_lang_Throwable::fill_in_stack_trace` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       5 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |       4 | `PhaseIterGVN::optimize` | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|     % | Samples | Caller                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 25.0% |       1 | `ciMethod::get_method_at_bci`                  | `libjvm.dylib` |
| 25.0% |       1 | `GraphKit::gen_checkcast`                      | `libjvm.dylib` |
| 25.0% |       1 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |
| 25.0% |       1 | `State::MachNodeGenerator`                     | `libjvm.dylib` |

##### `PhaseOutput::BuildOopMaps` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |       4 | `PhaseOutput::Output` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       4 | `PhaseIdealLoop::build_loop_late` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       4 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       4 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Arena::contains` (`libjvm.dylib`)

|     % | Samples | Caller           | Location       |
| ----: | ------: | ---------------- | -------------- |
| 75.0% |       3 | `Matcher::xform` | `libjvm.dylib` |
| 25.0% |       1 | `Matcher::match` | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       4 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `NodeHash::hash_find_insert` (`libjvm.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 66.7% |       2 | `PhaseIterGVN::transform_old`    | `libjvm.dylib` |
| 33.3% |       1 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |

##### `Type::cmp` (`libjvm.dylib`)

|      % | Samples | Caller         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |       3 | `Dict::Insert` | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       3 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Compile::identify_useful_nodes` (`libjvm.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 66.7% |       2 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |
| 33.3% |       1 | `PhaseRemoveUseless::PhaseRemoveUseless`      | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       3 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Node::dominates` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |       3 | `MemNode::all_controls_dominate` | `libjvm.dylib` |

##### `Dict::Insert` (`libjvm.dylib`)

|     % | Samples | Caller                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 50.0% |       1 | `Type::hashcons`              | `libjvm.dylib` |
| 50.0% |       1 | `Compile::flatten_alias_type` | `libjvm.dylib` |

##### `ValueRecorder<Metadata*>::maybe_find_index` (`libjvm.dylib`)

|     % | Samples | Caller                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 50.0% |       1 | `OopRecorder::find_index`      | `libjvm.dylib` |
| 50.0% |       1 | `MacroAssembler::mov_metadata` | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|     % | Samples | Caller                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 50.0% |       1 | `Matcher::Label_Root`           | `libjvm.dylib` |
| 50.0% |       1 | `ThreadsSMRSupport::add_thread` | `libjvm.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|      % | Samples | Caller                                  | Location       |
| -----: | ------: | --------------------------------------- | -------------- |
| 100.0% |       2 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |

##### `__vfprintf` (`libsystem_c.dylib`)

|      % | Samples | Caller       | Location            |
| -----: | ------: | ------------ | ------------------- |
| 100.0% |       2 | `_vsnprintf` | `libsystem_c.dylib` |

##### `BacktraceBuilder::push` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       2 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 50.0% |       1 | `JVM_GetClassAccessFlags` | `libjvm.dylib` |
| 50.0% |       1 | `JVM_NewArray`            | `libjvm.dylib` |

##### `frame::sender_for_compiled_frame` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       2 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `vmSymbols::find_sid` (`libjvm.dylib`)

|     % | Samples | Caller                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 50.0% |       1 | `ciObjectFactory::get_symbol`                  | `libjvm.dylib` |
| 50.0% |       1 | `MethodHandles::signature_polymorphic_name_id` | `libjvm.dylib` |

##### `posix_madvise` (`libsystem_kernel.dylib`)

|      % | Samples | Caller        | Location                 |
| -----: | ------: | ------------- | ------------------------ |
| 100.0% |       2 | `free_medium` | `libsystem_malloc.dylib` |

##### `PhaseCCP::transform` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |       2 | `PhaseCCP::do_transform` | `libjvm.dylib` |

##### `Node::Node` (`libjvm.dylib`)

|     % | Samples | Caller                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 50.0% |       1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 50.0% |       1 | `IdealKit::Bool`                  | `libjvm.dylib` |

##### `DebugInformationRecorder::describe_scope` (`libjvm.dylib`)

|     % | Samples | Caller                                    | Location       |
| ----: | ------: | ----------------------------------------- | -------------- |
| 50.0% |       1 | `PhaseOutput::Process_OopMap_Node`        | `libjvm.dylib` |
| 50.0% |       1 | `NonSafepointEmitter::emit_non_safepoint` | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       2 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

|      % | Samples | Caller                           | Location                             |
| -----: | ------: | -------------------------------- | ------------------------------------ |
| 100.0% |       2 | `<init>(MethodType, LambdaForm)` | `java.lang.invoke.BoundMethodHandle` |

##### `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

|      % | Samples | Caller                                                            | Location                            |
| -----: | ------: | ----------------------------------------------------------------- | ----------------------------------- |
| 100.0% |       2 | `makePairwiseConvert(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `collector(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001031800`)

|      % | Samples | Caller                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |       2 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700109b800` |

##### `cast(Object)` (`java.lang.Class`)

|      % | Samples | Caller                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |       2 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invokeBasic(Object[])` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Caller                                  | Location                                     |
| ----: | ------: | --------------------------------------- | -------------------------------------------- |
| 50.0% |       1 | `invokeVirtual(Object, Object)`         | `java.lang.invoke.DirectMethodHandle$Holder` |
| 50.0% |       1 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `checkCanSetAccessible(Class, Class, boolean)` (`java.lang.reflect.AccessibleObject`)

|      % | Samples | Caller               | Location                             |
| -----: | ------: | -------------------- | ------------------------------------ |
| 100.0% |       2 | `trySetAccessible()` | `java.lang.reflect.AccessibleObject` |

##### `ImmutableOopMapSet::find_slot_for_offset` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |       1 | `nmethod::finalize_relocations` | `libjvm.dylib` |

##### `free` (`libsystem_malloc.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |       1 | `Chunk::next_chop` | `libjvm.dylib` |

##### `addConstantUtf8(String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|      % | Samples | Caller                    | Location                                      |
| -----: | ------: | ------------------------- | --------------------------------------------- |
| 100.0% |       1 | `computeMethodInfoSize()` | `jdk.internal.org.objectweb.asm.MethodWriter` |

##### `initValue()` (`org.codehaus.groovy.reflection.CachedClass$3`)

|      % | Samples | Caller        | Location                                       |
| -----: | ------: | ------------- | ---------------------------------------------- |
| 100.0% |       1 | `initValue()` | `org.codehaus.groovy.reflection.CachedClass$3` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001088800`)

|      % | Samples | Caller                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |       1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010c8000` |

##### `<clinit>()` (`org.codehaus.groovy.ast.ClassHelper`)

|      % | Samples | Caller       | Location                                             |
| -----: | ------: | ------------ | ---------------------------------------------------- |
| 100.0% |       1 | `<clinit>()` | `org.apache.groovy.ast.tools.ImmutablePropertyUtils` |

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                                   | Location                                       |
| -----: | ------: | ---------------------------------------- | ---------------------------------------------- |
| 100.0% |       1 | `collectViolations(SourceCode, RuleSet)` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |

##### `mismatch(byte[], int, byte[], int, int)` (`jdk.internal.util.ArraysSupport`)

|      % | Samples | Caller                    | Location           |
| -----: | ------: | ------------------------- | ------------------ |
| 100.0% |       1 | `startsWith(String, int)` | `java.lang.String` |

##### `valuesToArray(Object[])` (`java.util.HashMap`)

|      % | Samples | Caller              | Location                   |
| -----: | ------: | ------------------- | -------------------------- |
| 100.0% |       1 | `toArray(Object[])` | `java.util.HashMap$Values` |

##### `getParameterTypes()` (`org.codehaus.groovy.reflection.ParameterTypes`)

|      % | Samples | Caller                                     | Location                                                |
| -----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 100.0% |       1 | `isMatchingMethod(MetaMethod, MetaMethod)` | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010d9c00`)

|      % | Samples | Caller                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |       1 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `charAt(byte[], int)` (`java.lang.StringLatin1`)

|      % | Samples | Caller        | Location           |
| -----: | ------: | ------------- | ------------------ |
| 100.0% |       1 | `charAt(int)` | `java.lang.String` |

##### `getAugmentations(int)` (`com.sun.org.apache.xerces.internal.util.XMLAttributesImpl`)

|      % | Samples | Caller                                                          | Location                                                        |
| -----: | ------: | --------------------------------------------------------------- | --------------------------------------------------------------- |
| 100.0% |       1 | `processAttributes(QName, XMLAttributes, XSAttributeGroupDecl)` | `com.sun.org.apache.xerces.internal.impl.xs.XMLSchemaValidator` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010d5c00`)

|      % | Samples | Caller                                           | Location                           |
| -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |       1 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `matchRegex(Object, Object)` (`org.codehaus.groovy.runtime.InvokerHelper`)

|      % | Samples | Caller                       | Location                                            |
| -----: | ------: | ---------------------------- | --------------------------------------------------- |
| 100.0% |       1 | `matchRegex(Object, Object)` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001290000`)

|      % | Samples | Caller                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |       1 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                                 | Location                  |
| ----: | ------: | -------------------------------------------------------- | ------------------------- |
| 83.6% |   2,432 | `_pthread_start`                                         | `libsystem_pthread.dylib` |
| 83.6% |   2,432 | `thread_start`                                           | `libsystem_pthread.dylib` |
| 80.2% |   2,335 | `Thread::call_run`                                       | `libjvm.dylib`            |
| 80.2% |   2,335 | `thread_native_entry`                                    | `libjvm.dylib`            |
| 44.9% |   1,307 | `__psynch_cvwait`                                        | `libsystem_kernel.dylib`  |
| 37.5% |   1,090 | `semaphore_wait_trap`                                    | `libsystem_kernel.dylib`  |
| 35.3% |   1,026 | `PlatformMonitor::wait`                                  | `libjvm.dylib`            |
| 34.2% |     995 | `WorkerThread::run`                                      | `libjvm.dylib`            |
| 29.6% |     860 | `JavaThread::thread_main_inner`                          | `libjvm.dylib`            |
| 26.3% |     765 | `Monitor::wait_without_safepoint_check`                  | `libjvm.dylib`            |
| 13.1% |     382 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib`            |
|  9.9% |     288 | `ConcurrentGCThread::run`                                | `libjvm.dylib`            |
|  9.0% |     261 | `Monitor::wait`                                          | `libjvm.dylib`            |
|  7.4% |     216 | `CompileBroker::invoke_compiler_on_method`               | `libjvm.dylib`            |
|  6.6% |     192 | `JLI_Launch`                                             | `libjli.dylib`            |
|  6.6% |     192 | `main`                                                   | `java`                    |
|  6.3% |     182 | `C2Compiler::compile_method`                             | `libjvm.dylib`            |
|  6.2% |     180 | `Compile::Compile`                                       | `libjvm.dylib`            |
|  5.7% |     166 | `CompileQueue::get`                                      | `libjvm.dylib`            |
|  3.3% |      96 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib`            |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Native

|     % | Samples | Function                                                 | Location                  |
| ----: | ------: | -------------------------------------------------------- | ------------------------- |
| 83.6% |   2,432 | `_pthread_start`                                         | `libsystem_pthread.dylib` |
| 83.6% |   2,432 | `thread_start`                                           | `libsystem_pthread.dylib` |
| 80.2% |   2,335 | `Thread::call_run`                                       | `libjvm.dylib`            |
| 80.2% |   2,335 | `thread_native_entry`                                    | `libjvm.dylib`            |
| 44.9% |   1,307 | `__psynch_cvwait`                                        | `libsystem_kernel.dylib`  |
| 37.5% |   1,090 | `semaphore_wait_trap`                                    | `libsystem_kernel.dylib`  |
| 35.3% |   1,026 | `PlatformMonitor::wait`                                  | `libjvm.dylib`            |
| 34.2% |     995 | `WorkerThread::run`                                      | `libjvm.dylib`            |
| 29.6% |     860 | `JavaThread::thread_main_inner`                          | `libjvm.dylib`            |
| 26.3% |     765 | `Monitor::wait_without_safepoint_check`                  | `libjvm.dylib`            |
|  9.9% |     288 | `ConcurrentGCThread::run`                                | `libjvm.dylib`            |
|  9.0% |     261 | `Monitor::wait`                                          | `libjvm.dylib`            |
|  6.6% |     192 | `JLI_Launch`                                             | `libjli.dylib`            |
|  6.6% |     192 | `main`                                                   | `java`                    |
|  3.3% |      96 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib`            |
|  3.3% |      96 | `__ulock_wait`                                           | `libsystem_kernel.dylib`  |
|  3.3% |      96 | `CallJavaMainInNewThread`                                | `libjli.dylib`            |
|  3.3% |      96 | `ContinueInNewThread`                                    | `libjli.dylib`            |
|  3.3% |      96 | `apple_main`                                             | `libjli.dylib`            |
|  3.3% |      96 | `os::signal_wait`                                        | `libjvm.dylib`            |

##### Compiler

|     % | Samples | Function                                   | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 13.1% |     382 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
|  7.4% |     216 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  6.3% |     182 | `C2Compiler::compile_method`               | `libjvm.dylib` |
|  6.2% |     180 | `Compile::Compile`                         | `libjvm.dylib` |
|  5.7% |     166 | `CompileQueue::get`                        | `libjvm.dylib` |
|  2.9% |      84 | `Compile::Code_Gen`                        | `libjvm.dylib` |
|  2.7% |      79 | `Compile::Optimize`                        | `libjvm.dylib` |
|  1.6% |      46 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
|  1.3% |      39 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|  1.2% |      36 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
|  1.2% |      36 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
|  1.1% |      33 | `Compilation::compile_method`              | `libjvm.dylib` |
|  1.1% |      33 | `Compilation::Compilation`                 | `libjvm.dylib` |
|  1.1% |      32 | `Compilation::compile_java_method`         | `libjvm.dylib` |
|  0.9% |      26 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
|  0.9% |      25 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |
|  0.5% |      16 | `Matcher::match`                           | `libjvm.dylib` |
|  0.5% |      16 | `Compile::optimize_loops`                  | `libjvm.dylib` |
|  0.5% |      14 | `PhaseOutput::Output`                      | `libjvm.dylib` |
|  0.4% |      13 | `Compilation::emit_lir`                    | `libjvm.dylib` |

##### Standard library

|    % | Samples | Function                        | Location                                                                |
| ---: | ------: | ------------------------------- | ----------------------------------------------------------------------- |
| 3.3% |      96 | `wait0(long)`                   | `java.lang.Object`                                                      |
| 3.3% |      96 | `wait(long)`                    | `java.lang.Object`                                                      |
| 3.3% |      96 | `wait()`                        | `java.lang.Object`                                                      |
| 3.3% |      96 | `await()`                       | `java.lang.ref.NativeReferenceQueue`                                    |
| 3.3% |      96 | `remove0()`                     | `java.lang.ref.ReferenceQueue`                                          |
| 3.3% |      96 | `remove()`                      | `java.lang.ref.NativeReferenceQueue`                                    |
| 3.3% |      96 | `run()`                         | `java.lang.ref.Finalizer$FinalizerThread`                               |
| 3.3% |      96 | `waitForReferencePendingList()` | `java.lang.ref.Reference`                                               |
| 3.3% |      96 | `processPendingReferences()`    | `java.lang.ref.Reference`                                               |
| 3.3% |      96 | `run()`                         | `java.lang.ref.Reference$ReferenceHandler`                              |
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

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Caller         | Location                  |
| -----: | ------: | -------------- | ------------------------- |
| 100.0% |   2,432 | `thread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |   2,335 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Caller           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   2,335 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location                 |
| ----: | ------: | ----------------------- | ------------------------ |
| 78.1% |   1,021 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  7.3% |      96 | `PlatformEvent::park`   | `libjvm.dylib`           |
|  7.3% |      95 | `Parker::park`          | `libjvm.dylib`           |
|  7.3% |      95 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 91.0% |     992 | `WorkerThread::run`       | `libjvm.dylib` |
|  8.8% |      96 | `os::signal_wait`         | `libjvm.dylib` |
|  0.2% |       2 | `WorkerThreads::run_task` | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 74.6% |     765 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |
| 25.4% |     261 | `Monitor::wait`                         | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     995 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     860 | `Thread::call_run` | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|     % | Samples | Caller                                                        | Location       |
| ----: | ------: | ------------------------------------------------------------- | -------------- |
| 12.5% |      96 | `MonitorDeflationThread::monitor_deflation_thread_entry`      | `libjvm.dylib` |
| 12.5% |      96 | `G1ServiceThread::wait_for_task`                              | `libjvm.dylib` |
| 12.5% |      96 | `ServiceThread::service_thread_entry`                         | `libjvm.dylib` |
| 12.5% |      96 | `WatcherThread::sleep`                                        | `libjvm.dylib` |
| 12.5% |      96 | `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |     382 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     288 | `Thread::call_run` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|     % | Samples | Caller                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 63.2% |     165 | `CompileQueue::get`               | `libjvm.dylib` |
| 36.8% |      96 | `JVM_WaitForReferencePendingList` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |     216 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

|      % | Samples | Caller | Location |
| -----: | ------: | ------ | -------- |
| 100.0% |     192 | `main` | `java`   |

##### `main` (`java`)

|     % | Samples | Caller       | Location       |
| ----: | ------: | ------------ | -------------- |
| 50.0% |      96 | `apple_main` | `libjli.dylib` |
| 50.0% |      96 | `unknown`    | `<unknown>`    |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |     182 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |     180 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |     166 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `MonitorDeflationThread::monitor_deflation_thread_entry` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |      96 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

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

##### `os::signal_wait` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |      96 | `signal_thread_entry` | `libjvm.dylib` |

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

##### `waitForReferencePendingList()` (`java.lang.ref.Reference`)

|      % | Samples | Caller                       | Location                  |
| -----: | ------: | ---------------------------- | ------------------------- |
| 100.0% |      96 | `processPendingReferences()` | `java.lang.ref.Reference` |

##### `processPendingReferences()` (`java.lang.ref.Reference`)

|      % | Samples | Caller  | Location                                   |
| -----: | ------: | ------- | ------------------------------------------ |
| 100.0% |      96 | `run()` | `java.lang.ref.Reference$ReferenceHandler` |

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
| 100.0% |      84 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      79 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      46 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 59.0% |      23 | `Compile::Optimize`       | `libjvm.dylib` |
| 41.0% |      16 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |      36 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      36 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

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

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 69.2% |      18 | `Compile::Optimize`                    | `libjvm.dylib` |
| 19.2% |       5 | `PhaseMacroExpand::expand_macro_nodes` | `libjvm.dylib` |
| 11.5% |       3 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |      25 | `PhaseIterGVN::optimize` | `libjvm.dylib` |
|   4.0% |       1 | `BoolNode::Ideal`        | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      16 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      16 | `Compile::Optimize` | `libjvm.dylib` |

##### `PhaseOutput::Output` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      14 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      13 | `Compilation::compile_java_method` | `libjvm.dylib` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 96.0% |   2,335 | `thread_native_entry` | `libjvm.dylib` |
|  3.9% |      96 | `apple_main`          | `libjli.dylib` |
| <0.1% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   2,432 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 42.6% |     995 | `WorkerThread::run`             | `libjvm.dylib` |
| 36.8% |     860 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| 12.3% |     288 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  4.1% |      96 | `WatcherThread::run`            | `libjvm.dylib` |
|  4.1% |      96 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   2,335 | `Thread::call_run` | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Callee               | Location                  |
| ----: | ------: | -------------------- | ------------------------- |
| 99.5% |   1,021 | `__psynch_cvwait`    | `libsystem_kernel.dylib`  |
|  0.4% |       4 | `_pthread_cond_wait` | `libsystem_pthread.dylib` |
|  0.1% |       1 | `__gettimeofday`     | `libsystem_kernel.dylib`  |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 99.7% |     992 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
|  0.2% |       2 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib`           |
|  0.1% |       1 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib`           |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                                   | Location       |
| ----: | ------: | -------------------------------------------------------- | -------------- |
| 44.4% |     382 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib` |
| 11.2% |      96 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |
| 11.2% |      96 | `signal_thread_entry`                                    | `libjvm.dylib` |
| 11.2% |      96 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |
| 11.0% |      95 | `JvmtiAgentThread::start_function_wrapper`               | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |     765 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 56.5% |     216 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
| 43.5% |     166 | `CompileQueue::get`                        | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 33.3% |      96 | `G1ServiceThread::run_service`          | `libjvm.dylib` |
| 33.3% |      96 | `G1ConcurrentMarkThread::run_service`   | `libjvm.dylib` |
| 33.3% |      96 | `G1ConcurrentRefineThread::run_service` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |     261 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 84.3% |     182 | `C2Compiler::compile_method` | `libjvm.dylib` |
| 15.3% |      33 | `Compiler::compile_method`   | `libjvm.dylib` |
|  0.5% |       1 | `ciEnv::ciEnv`               | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 50.0% |      96 | `ContinueInNewThread`        | `libjli.dylib` |
| 50.0% |      96 | `CreateExecutionEnvironment` | `libjli.dylib` |

##### `main` (`java`)

|      % | Samples | Callee       | Location       |
| -----: | ------: | ------------ | -------------- |
| 100.0% |     192 | `JLI_Launch` | `libjli.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee              | Location       |
| ----: | ------: | ------------------- | -------------- |
| 98.9% |     180 | `Compile::Compile`  | `libjvm.dylib` |
|  0.5% |       1 | `Compile::~Compile` | `libjvm.dylib` |
|  0.5% |       1 | `Chunk::next_chop`  | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 46.7% |      84 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 43.9% |      79 | `Compile::Optimize`                      | `libjvm.dylib` |
|  8.3% |      15 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  1.1% |       2 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 99.4% |     165 | `Monitor::wait`                  | `libjvm.dylib` |
|  0.6% |       1 | `CompilationPolicy::select_task` | `libjvm.dylib` |

##### `MonitorDeflationThread::monitor_deflation_thread_entry` (`libjvm.dylib`)

|      % | Samples | Callee                                  | Location       |
| -----: | ------: | --------------------------------------- | -------------- |
| 100.0% |      96 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |

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

##### `os::signal_wait` (`libjvm.dylib`)

|      % | Samples | Callee                | Location                 |
| -----: | ------: | --------------------- | ------------------------ |
| 100.0% |      96 | `semaphore_wait_trap` | `libsystem_kernel.dylib` |

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
| 54.8% |      46 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 19.0% |      16 | `Matcher::match`                  | `libjvm.dylib` |
| 16.7% |      14 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  6.0% |       5 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  1.2% |       1 | `PhaseOutput::install_code`       | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 29.1% |      23 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| 22.8% |      18 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |
| 20.3% |      16 | `Compile::optimize_loops`              | `libjvm.dylib` |
|  8.9% |       7 | `PhaseMacroExpand::expand_macro_nodes` | `libjvm.dylib` |
|  6.3% |       5 | `PhaseCCP::do_transform`               | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 19.6% |       9 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| 13.0% |       6 | `PhaseLive::compute`                       | `libjvm.dylib` |
| 13.0% |       6 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |
| 10.9% |       5 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
|  8.7% |       4 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 92.3% |      36 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  7.7% |       3 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                                             | Location       |
| ----: | ------: | ------------------------------------------------------------------ | -------------- |
| 33.3% |      12 | `PhaseIdealLoop::build_loop_late`                                  | `libjvm.dylib` |
| 19.4% |       7 | `PhaseIdealLoop::Dominators`                                       | `libjvm.dylib` |
| 19.4% |       7 | `PhaseIdealLoop::build_loop_early`                                 | `libjvm.dylib` |
| 19.4% |       7 | `PhaseIdealLoop::split_if_with_blocks`                             | `libjvm.dylib` |
|  2.8% |       1 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Callee                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      36 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 97.0% |      32 | `Compilation::compile_java_method` | `libjvm.dylib` |
|  3.0% |       1 | `ciEnv::register_method`           | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |      33 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 40.6% |      13 | `Compilation::emit_lir`       | `libjvm.dylib` |
| 31.3% |      10 | `Compilation::emit_code_body` | `libjvm.dylib` |
| 28.1% |       9 | `Compilation::build_hir`      | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 96.2% |      25 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |
|  3.8% |       1 | `StoreNode::hash`             | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 16.0% |       4 | `NodeHash::hash_find_insert` | `libjvm.dylib` |
| 12.0% |       3 | `LoadNode::Ideal`            | `libjvm.dylib` |
|  8.0% |       2 | `RegionNode::Ideal`          | `libjvm.dylib` |
|  8.0% |       2 | `PhaseIterGVN::subsume_node` | `libjvm.dylib` |
|  8.0% |       2 | `StoreNode::Ideal`           | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 62.5% |      10 | `Matcher::xform`                              | `libjvm.dylib` |
| 18.8% |       3 | `Matcher::find_shared`                        | `libjvm.dylib` |
| 12.5% |       2 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |
|  6.3% |       1 | `Arena::contains`                             | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      16 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `PhaseOutput::Output` (`libjvm.dylib`)

|     % | Samples | Callee                                          | Location       |
| ----: | ------: | ----------------------------------------------- | -------------- |
| 42.9% |       6 | `PhaseOutput::fill_buffer`                      | `libjvm.dylib` |
| 28.6% |       4 | `PhaseOutput::BuildOopMaps`                     | `libjvm.dylib` |
| 14.3% |       2 | `Scheduling::DoScheduling`                      | `libjvm.dylib` |
|  7.1% |       1 | `PhaseOutput::shorten_branches`                 | `libjvm.dylib` |
|  7.1% |       1 | `far_cmpI_branch_bitNode::short_branch_version` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 69.2% |       9 | `LinearScan::do_linear_scan` | `libjvm.dylib` |
| 30.8% |       4 | `BlockList::iterate_forward` | `libjvm.dylib` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 34.1% |     992 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`) ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                       |
|  5.5% |     160 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                     |
|  3.3% |      96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `MonitorDeflationThread::monitor_deflation_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                |
|  3.3% |      96 | `__ulock_wait` (`libsystem_kernel.dylib`) ← `CallJavaMainInNewThread` (`libjli.dylib`) ← `ContinueInNewThread` ← `JLI_Launch` ← `main` (`java`) ← `apple_main` (`libjli.dylib`) ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                            |
|  3.3% |      96 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `os::signal_wait` (`libjvm.dylib`) ← `signal_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                               |
|  3.3% |      96 | `mach_msg2_trap` (`libsystem_kernel.dylib`) ← `mach_msg_overwrite` ← `mach_msg` ← `__CFRunLoopServiceMachPort` (`CoreFoundation`) ← `__CFRunLoopRun` ← `CFRunLoopRunSpecific` ← `CreateExecutionEnvironment` (`libjli.dylib`) ← `JLI_Launch` ← `main` (`java`) ← `unknown`                                                                                                                                                                                                                                                                                                 |
|  3.3% |      96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ServiceThread::wait_for_task` ← `G1ServiceThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                             |
|  3.3% |      96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformEvent::park` (`libjvm.dylib`) ← `ObjectMonitor::wait` ← `ObjectSynchronizer::wait` ← `JVM_MonitorWait` ← `wait0(long)` (`java.lang.Object`) ← `wait(long)` ← `wait()` ← `await()` (`java.lang.ref.NativeReferenceQueue`) ← `remove0()` (`java.lang.ref.ReferenceQueue`) ← `remove()` (`java.lang.ref.NativeReferenceQueue`) ← `run()` (`java.lang.ref.Finalizer$FinalizerThread`)                                                                                                                                  |
|  3.3% |      96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `JVM_WaitForReferencePendingList` ← `waitForReferencePendingList()` (`java.lang.ref.Reference`) ← `processPendingReferences()` ← `run()` (`java.lang.ref.Reference$ReferenceHandler`)                                                                                                                                                                                                                                                                          |
|  3.3% |      96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `ServiceThread::service_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                   |
|  3.3% |      96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `WatcherThread::sleep` ← `WatcherThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                             |
|  3.3% |      96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` ← `G1ConcurrentRefineThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                       |
|  3.3% |      96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `VMThread::wait_for_operation` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                          |
|  3.3% |      95 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `await(long)` (`java.lang.ref.ReferenceQueue`) ← `remove0(long)` ← `remove(long)` ← `run()` (`jdk.internal.ref.CleanerImpl`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` ← `run()` (`jdk.internal.misc.InnocuousThread`) |
|  3.3% |      95 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Profiler::timerLoop` (`libasyncProfiler.dylib`) ← `JvmtiAgentThread::start_function_wrapper` (`libjvm.dylib`) ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                               |
|  3.3% |      95 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `NotificationThread::notification_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                         |
|  3.2% |      94 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ConcurrentMarkThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                         |
|  0.2% |       7 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                   |
|  0.2% |       6 | `PhaseIdealLoop::Dominators` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                         |
|  0.2% |       5 | `PhaseLive::compute` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                    |
