# Sampling profile

Collected 1,624 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Compiler         | 53.1% |     863 |
| Native           | 28.6% |     464 |
| Standard library | 16.6% |     269 |
| JIT              |  1.1% |      18 |
| Ours             |  0.6% |      10 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 1,151 samples (70.9%) Thread::call_run at libjvm.dylib
│   ├── 1,066 samples (65.6%) JavaThread::thread_main_inner
│   │   └── 1,065 samples (65.6%) CompileBroker::compiler_thread_loop
│   │       ├── 1,049 samples (64.6%) CompileBroker::invoke_compiler_on_method
│   │       │   ├── 864 samples (53.2%) C2Compiler::compile_method
│   │       │   │   └── 864 samples (53.2%) Compile::Compile
│   │       │   │       ├── 412 samples (25.4%) Compile::Code_Gen
│   │       │   │       │   ├── 233 samples (14.3%) PhaseChaitin::Register_Allocate
│   │       │   │       │   │   ├── 47 samples (2.9%, self 1.5%) PhaseChaitin::build_ifg_physical
│   │       │   │       │   │   │   └── 22 samples (1.4%) 8 more callees, led by (0.4%) PhaseChaitin::remove_bound_register_from_interfering_live_ranges
│   │       │   │       │   │   ├── 38 samples (2.3%, self 1.6%) PhaseChaitin::Split
│   │       │   │       │   │   │   └── 12 samples (0.7%) 10 more callees, led by (0.2%) MachNode::rematerialize
│   │       │   │       │   │   ├── 23 samples (1.4%) PhaseLive::compute
│   │       │   │       │   │   │   └── 14 samples (0.9%) PhaseLive::add_liveout
│   │       │   │       │   │   └── 124 samples (7.6%) 30 more callees, led by (1.3%) PhaseChaitin::post_allocate_copy_removal
│   │       │   │       │   └── 179 samples (11.0%) 8 more callees, led by (4.2%) Matcher::match
│   │       │   │       ├── 331 samples (20.4%) Compile::Optimize
│   │       │   │       │   └── 331 samples (20.4%) 14 more callees, led by (6.0%) PhaseIdealLoop::optimize
│   │       │   │       ├── 108 samples (6.7%) ParseGenerator::generate
│   │       │   │       │   └── … 108 samples (6.7%) Parse::Parse at libjvm.dylib
│   │       │   │       │       ├── 99 samples (6.1%) Parse::do_all_blocks
│   │       │   │       │       │   └── 96 samples (5.9%) Parse::do_one_block
│   │       │   │       │       │       ├── 40 samples (2.5%) Parse::do_call
│   │       │   │       │       │       │   ├── … 14 samples (0.9%) ciTypeFlow::flow_types at libjvm.dylib
│   │       │   │       │       │       │   │   └── … 3 samples (0.2%, self 1.4% globally) __psynch_mutexwait at libsystem_kernel.dylib
│   │       │   │       │       │       │   └── 19 samples (1.2%) 10 more callees, led by (0.3%) PredictedCallGenerator::generate
│   │       │   │       │       │       └── 56 samples (3.4%) 13 more callees, led by (1.2%) Parse::do_field_access
│   │       │   │       │       └── 3 samples (0.2%) Parse::do_exits
│   │       │   │       └── 7 samples (0.4%) PhaseRemoveUseless::PhaseRemoveUseless
│   │       │   └── 185 samples (11.4%) 5 more callees, led by (10.7%) Compiler::compile_method
│   │       └── … 11 samples (0.7%) __psynch_cvwait at libsystem_kernel.dylib
│   └── 85 samples (5.2%) 3 more callees, led by (5.0%) WorkerThread::run
├── … 441 samples (27.2%) invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object) at java.lang.invoke.LambdaForm$DMH.0x0000000301088800
│   ├── … 323 samples (19.9%) fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[]) at org.codehaus.groovy.vmplugin.v8.IndyInterface
│   │   └── 323 samples (19.9%) 4 more callees, led by (15.3%) invokeExact_MT(Object, Object, Object) at java.lang.invoke.Invokers$Holder
│   └── … 113 samples (7.0%) selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[]) at org.codehaus.groovy.vmplugin.v8.IndyInterface
│       └── 113 samples (7.0%) 2 more callees, led by (5.9%) fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])
├── … 9 samples (0.6%) registerMethods(Class, boolean, boolean, Map) at org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl
│   └── … 1 sample (0.1%, self 1.2% globally) pthread_jit_write_protect_np at libsystem_pthread.dylib
└── 4 samples (0.2%) break_stack_range
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|    % | Samples | Function                                                                                                                                                 | Location                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 1.6% |      26 | `PhaseChaitin::Split`                                                                                                                                    | `libjvm.dylib`             |
| 1.6% |      26 | `PhaseChaitin::build_ifg_physical`                                                                                                                       | `libjvm.dylib`             |
| 1.4% |      23 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 1.3% |      21 | `java_lang_Throwable::fill_in_stack_trace`                                                                                                               | `libjvm.dylib`             |
| 1.2% |      20 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
| 1.2% |      19 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 1.2% |      19 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
| 1.0% |      16 | `PhaseIdealLoop::build_loop_early`                                                                                                                       | `libjvm.dylib`             |
| 1.0% |      16 | `Node::dominates`                                                                                                                                        | `libjvm.dylib`             |
| 0.9% |      15 | `PhaseLive::add_liveout`                                                                                                                                 | `libjvm.dylib`             |
| 0.9% |      14 | `PhaseIdealLoop::Dominators`                                                                                                                             | `libjvm.dylib`             |
| 0.9% |      14 | `Matcher::xform`                                                                                                                                         | `libjvm.dylib`             |
| 0.7% |      12 | `PhaseChaitin::elide_copy`                                                                                                                               | `libjvm.dylib`             |
| 0.7% |      11 | `IndexSetIterator::advance_and_next`                                                                                                                     | `libjvm.dylib`             |
| 0.7% |      11 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>`                             | `libjvm.dylib`             |
| 0.7% |      11 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `libjvm.dylib`             |
| 0.7% |      11 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
| 0.7% |      11 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| 0.7% |      11 | `sys_icache_invalidate`                                                                                                                                  | `libsystem_platform.dylib` |
| 0.6% |      10 | `ciObjectFactory::get_metadata`                                                                                                                          | `libjvm.dylib`             |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|    % | Samples | Function                                    | Location       |
| ---: | ------: | ------------------------------------------- | -------------- |
| 1.6% |      26 | `PhaseChaitin::Split`                       | `libjvm.dylib` |
| 1.6% |      26 | `PhaseChaitin::build_ifg_physical`          | `libjvm.dylib` |
| 1.0% |      16 | `PhaseIdealLoop::build_loop_early`          | `libjvm.dylib` |
| 1.0% |      16 | `Node::dominates`                           | `libjvm.dylib` |
| 0.9% |      15 | `PhaseLive::add_liveout`                    | `libjvm.dylib` |
| 0.9% |      14 | `PhaseIdealLoop::Dominators`                | `libjvm.dylib` |
| 0.9% |      14 | `Matcher::xform`                            | `libjvm.dylib` |
| 0.7% |      12 | `PhaseChaitin::elide_copy`                  | `libjvm.dylib` |
| 0.7% |      11 | `IndexSetIterator::advance_and_next`        | `libjvm.dylib` |
| 0.6% |      10 | `ciObjectFactory::get_metadata`             | `libjvm.dylib` |
| 0.6% |      10 | `PhaseChaitin::gather_lrg_masks`            | `libjvm.dylib` |
| 0.6% |      10 | `PhaseAggressiveCoalesce::insert_copies`    | `libjvm.dylib` |
| 0.6% |       9 | `PhaseIterGVN::add_users_to_worklist`       | `libjvm.dylib` |
| 0.6% |       9 | `PhaseIdealLoop::build_loop_late`           | `libjvm.dylib` |
| 0.5% |       8 | `MultiNode::is_CFG`                         | `libjvm.dylib` |
| 0.5% |       8 | `Type::cmp`                                 | `libjvm.dylib` |
| 0.5% |       8 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
| 0.4% |       7 | `Node_Backward_Iterator::next`              | `libjvm.dylib` |
| 0.4% |       7 | `PhaseIterGVN::transform_old`               | `libjvm.dylib` |
| 0.4% |       7 | `Compile::disconnect_useless_nodes`         | `libjvm.dylib` |

##### Native

|    % | Samples | Function                                                                                                                                                 | Location                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 1.4% |      23 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 1.3% |      21 | `java_lang_Throwable::fill_in_stack_trace`                                                                                                               | `libjvm.dylib`             |
| 1.2% |      20 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
| 1.2% |      19 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 1.2% |      19 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
| 0.7% |      11 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>`                             | `libjvm.dylib`             |
| 0.7% |      11 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `libjvm.dylib`             |
| 0.7% |      11 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
| 0.7% |      11 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| 0.7% |      11 | `sys_icache_invalidate`                                                                                                                                  | `libsystem_platform.dylib` |
| 0.6% |      10 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
| 0.6% |      10 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`   |
| 0.6% |       9 | `frame::sender_for_compiled_frame`                                                                                                                       | `libjvm.dylib`             |
| 0.4% |       7 | `vmSymbols::find_sid`                                                                                                                                    | `libjvm.dylib`             |
| 0.4% |       6 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`             |
| 0.4% |       6 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                          | `libjvm.dylib`             |
| 0.4% |       6 | `bsearch`                                                                                                                                                | `libsystem_c.dylib`        |
| 0.3% |       5 | `compare_immediate_pair`                                                                                                                                 | `libjvm.dylib`             |
| 0.2% |       4 | `Dict::Insert`                                                                                                                                           | `libjvm.dylib`             |
| 0.2% |       4 | `posix_madvise`                                                                                                                                          | `libsystem_kernel.dylib`   |

##### Standard library

|    % | Samples | Function                                                                                                      | Location                                                  |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| 0.6% |       9 | `invokeBasic(Object[])`                                                                                       | `java.lang.invoke.MethodHandle`                           |
| 0.4% |       6 | `collector(Object, Object)`                                                                                   | `java.lang.invoke.LambdaForm$MH.0x0000000301031800`       |
| 0.3% |       5 | `invokeVirtual(Object, Object)`                                                                               | `java.lang.invoke.DirectMethodHandle$Holder`              |
| 0.3% |       5 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`    |
| 0.3% |       5 | `cast(Object)`                                                                                                | `java.lang.Class`                                         |
| 0.2% |       4 | `newInstance(Class, int)`                                                                                     | `java.lang.reflect.Array`                                 |
| 0.2% |       4 | `getNode(Object)`                                                                                             | `java.util.HashMap`                                       |
| 0.2% |       4 | `equals(Object)`                                                                                              | `java.lang.String`                                        |
| 0.2% |       3 | `bindTo(Object)`                                                                                              | `java.lang.invoke.MethodHandle`                           |
| 0.2% |       3 | `getMetaClass()`                                                                                              | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| 0.2% |       3 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x0000000301088800`      |
| 0.2% |       3 | `getInCache(LambdaFormEditor$TransformKey)`                                                                   | `java.lang.invoke.LambdaFormEditor`                       |
| 0.2% |       3 | `methodType(Class, Class[], boolean)`                                                                         | `java.lang.invoke.MethodType`                             |
| 0.2% |       3 | `equals(Object, Object)`                                                                                      | `java.util.Objects`                                       |
| 0.1% |       2 | `<init>(MethodType, LambdaForm)`                                                                              | `java.lang.invoke.MethodHandle`                           |
| 0.1% |       2 | `invoke(Object, Object)`                                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000030109a400`       |
| 0.1% |       2 | `getRoot()`                                                                                                   | `java.lang.reflect.Method`                                |
| 0.1% |       2 | `<init>(int, Object, Object)`                                                                                 | `java.util.concurrent.ConcurrentHashMap$Node`             |
| 0.1% |       2 | `collector(Object, Object, Object)`                                                                           | `java.lang.invoke.LambdaForm$MH.0x00000003010a1000`       |
| 0.1% |       2 | `wrapSink(Sink)`                                                                                              | `java.util.stream.AbstractPipeline`                       |

##### JIT

|    % | Samples | Function                      | Location    |
| ---: | ------: | ----------------------------- | ----------- |
| 0.2% |       4 | `I2C/C2I adapters(0xb)`       | `<unknown>` |
| 0.2% |       3 | `itable stub`                 | `<unknown>` |
| 0.1% |       2 | `I2C/C2I adapters(0xbb)`      | `<unknown>` |
| 0.1% |       2 | `I2C/C2I adapters(0xbbb)`     | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xa)`       | `<unknown>` |
| 0.1% |       1 | `zero_blocks`                 | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbbbbbb)` | `<unknown>` |
| 0.1% |       1 | `vtable stub`                 | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbbb)`    | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbba)`    | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbbbb)`   | `<unknown>` |

#### Lines

Lines with the largest contribution to each function's self samples.

##### `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|     % | Samples | Location                                                    |
| ----: | ------: | ----------------------------------------------------------- |
| 20.0% |       1 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1754` |
| 20.0% |       1 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1708` |
| 20.0% |       1 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1709` |
| 20.0% |       1 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1785` |
| 20.0% |       1 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1759` |

##### `cast(Object)` (`java.lang.Class`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       5 | `java.lang.Class:4068` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|      % | Samples | Location                     |
| -----: | ------: | ---------------------------- |
| 100.0% |       4 | `java.lang.reflect.Array:78` |

##### `getNode(Object)` (`java.util.HashMap`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 50.0% |       2 | `java.util.HashMap:580` |
| 25.0% |       1 | `java.util.HashMap:576` |
| 25.0% |       1 | `java.util.HashMap:577` |

##### `equals(Object)` (`java.lang.String`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 50.0% |       2 | `java.lang.String:1852` |
| 50.0% |       2 | `java.lang.String:1850` |

##### `bindTo(Object)` (`java.lang.invoke.MethodHandle`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       3 | `java.lang.invoke.MethodHandle:1618` |

##### `getMetaClass()` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

|     % | Samples | Location                                                      |
| ----: | ------: | ------------------------------------------------------------- |
| 66.7% |       2 | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector:568` |
| 33.3% |       1 | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector:581` |

##### `getInCache(LambdaFormEditor$TransformKey)` (`java.lang.invoke.LambdaFormEditor`)

|     % | Samples | Location                                |
| ----: | ------: | --------------------------------------- |
| 33.3% |       1 | `java.lang.invoke.LambdaFormEditor:399` |
| 33.3% |       1 | `java.lang.invoke.LambdaFormEditor:385` |
| 33.3% |       1 | `java.lang.invoke.LambdaFormEditor:396` |

##### `methodType(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

|     % | Samples | Location                          |
| ----: | ------: | --------------------------------- |
| 66.7% |       2 | `java.lang.invoke.MethodType:374` |
| 33.3% |       1 | `java.lang.invoke.MethodType:368` |

##### `equals(Object, Object)` (`java.util.Objects`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       3 | `java.util.Objects:64` |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       2 | `java.lang.invoke.MethodHandle:479` |

##### `getRoot()` (`java.lang.reflect.Method`)

|      % | Samples | Location                      |
| -----: | ------: | ----------------------------- |
| 100.0% |       2 | `java.lang.reflect.Method:72` |

##### `<init>(int, Object, Object)` (`java.util.concurrent.ConcurrentHashMap$Node`)

|      % | Samples | Location                                          |
| -----: | ------: | ------------------------------------------------- |
| 100.0% |       2 | `java.util.concurrent.ConcurrentHashMap$Node:634` |

##### `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`)

|     % | Samples | Location                                |
| ----: | ------: | --------------------------------------- |
| 50.0% |       1 | `java.util.stream.AbstractPipeline:547` |
| 50.0% |       1 | `java.util.stream.AbstractPipeline:546` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      26 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|     % | Samples | Caller                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 96.2% |      25 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
|  3.8% |       1 | `Compile::Code_Gen`               | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |      23 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `java_lang_Throwable::fill_in_stack_trace` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |      21 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|    % | Samples | Caller                          | Location       |
| ---: | ------: | ------------------------------- | -------------- |
| 5.0% |       1 | `AddNode::Identity`             | `libjvm.dylib` |
| 5.0% |       1 | `TypeInstPtr::xmeet_helper`     | `libjvm.dylib` |
| 5.0% |       1 | `TypeAryPtr::xmeet_helper`      | `libjvm.dylib` |
| 5.0% |       1 | `TypeInstPtr::make`             | `libjvm.dylib` |
| 5.0% |       1 | `CollectedHeap::array_allocate` | `libjvm.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |      19 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 21.1% |       4 | `InterpreterRuntime::ldc` | `libjvm.dylib` |
| 15.8% |       3 | `JVM_NewArray`            | `libjvm.dylib` |
| 10.5% |       2 | `jni_GetObjectClass`      | `libjvm.dylib` |
| 10.5% |       2 | `MHN_init_Mem`            | `libjvm.dylib` |
|  5.3% |       1 | `JVM_ArrayCopy`           | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      16 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Node::dominates` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |      16 | `MemNode::all_controls_dominate` | `libjvm.dylib` |

##### `PhaseLive::add_liveout` (`libjvm.dylib`)

|     % | Samples | Caller                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 93.3% |      14 | `PhaseLive::compute`              | `libjvm.dylib` |
|  6.7% |       1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      14 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |      14 | `Matcher::match` | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |      12 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                                                             | Location       |
| ----: | ------: | ------------------------------------------------------------------ | -------------- |
| 27.3% |       3 | `PhaseChaitin::Select`                                             | `libjvm.dylib` |
| 18.2% |       2 | `PhaseIFG::effective_degree`                                       | `libjvm.dylib` |
| 18.2% |       2 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `libjvm.dylib` |
|  9.1% |       1 | `PhaseChaitin::build_ifg_physical`                                 | `libjvm.dylib` |
|  9.1% |       1 | `PhaseChaitin::Simplify`                                           | `libjvm.dylib` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                            | Location       |
| -----: | ------: | ------------------------------------------------- | -------------- |
| 100.0% |      11 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|     % | Samples | Caller                                          | Location       |
| ----: | ------: | ----------------------------------------------- | -------------- |
| 90.9% |      10 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |
|  9.1% |       1 | `G1ScanHRForRegionClosure::scan_memregion`      | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|     % | Samples | Caller                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 18.2% |       2 | `Matcher::Label_Root`         | `libjvm.dylib` |
|  9.1% |       1 | `Matcher::match`              | `libjvm.dylib` |
|  9.1% |       1 | `PhiNode::make`               | `libjvm.dylib` |
|  9.1% |       1 | `ConstantPoolCache::allocate` | `libjvm.dylib` |
|  9.1% |       1 | `Matcher::xform`              | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 90.9% |      10 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
|  9.1% |       1 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |

##### `sys_icache_invalidate` (`libsystem_platform.dylib`)

|     % | Samples | Caller                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 54.5% |       6 | `nmethod::oops_do_process_weak` | `libjvm.dylib` |
| 36.4% |       4 | `nmethod::nmethod`              | `libjvm.dylib` |
|  9.1% |       1 | `CodeBuffer::copy_code_to`      | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|     % | Samples | Caller                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 30.0% |       3 | `ciEnv::get_klass_by_name_impl`        | `libjvm.dylib` |
| 20.0% |       2 | `ciBytecodeStream::get_method`         | `libjvm.dylib` |
| 20.0% |       2 | `ciEnv::get_klass_by_index_impl`       | `libjvm.dylib` |
| 10.0% |       1 | `ciEnv::get_method_from_handle`        | `libjvm.dylib` |
| 10.0% |       1 | `ciObjectFactory::create_new_metadata` | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      10 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      10 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|      % | Samples | Caller                                  | Location       |
| -----: | ------: | --------------------------------------- | -------------- |
| 100.0% |      10 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 90.0% |       9 | `WorkerThread::run`              | `libjvm.dylib` |
| 10.0% |       1 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |

##### `PhaseIterGVN::add_users_to_worklist` (`libjvm.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 22.2% |       2 | `PhaseIterGVN::PhaseIterGVN`                  | `libjvm.dylib` |
| 22.2% |       2 | `Node::remove_dead_region`                    | `libjvm.dylib` |
| 22.2% |       2 | `PhaseIterGVN::transform_old`                 | `libjvm.dylib` |
| 11.1% |       1 | `PhaseIdealLoop::clone_loop_handle_data_uses` | `libjvm.dylib` |
| 11.1% |       1 | `PhaseIterGVN::replace_node`                  | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       9 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `frame::sender_for_compiled_frame` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       9 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `invokeBasic(Object[])` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Caller                                                                                      | Location                                             |
| ----: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 22.2% |       2 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000301088800` |
| 22.2% |       2 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000030102ac00`  |
| 11.1% |       1 | `invokeStatic(Object, Object, int)`                                                         | `java.lang.invoke.LambdaForm$DMH.0x000000030102b400` |
| 11.1% |       1 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000301108800`  |
| 11.1% |       1 | `delegate(Object, Object)`                                                                  | `java.lang.invoke.DelegatingMethodHandle$Holder`     |

##### `MultiNode::is_CFG` (`libjvm.dylib`)

|     % | Samples | Caller                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 62.5% |       5 | `PhaseIdealLoop::build_and_optimize`   | `libjvm.dylib` |
| 12.5% |       1 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
| 12.5% |       1 | `ProjNode::is_uncommon_trap_proj`      | `libjvm.dylib` |
| 12.5% |       1 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |

##### `Type::cmp` (`libjvm.dylib`)

|      % | Samples | Caller         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |       8 | `Dict::Insert` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|     % | Samples | Caller                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 87.5% |       7 | `PhaseIdealLoop::build_loop_late`    | `libjvm.dylib` |
| 12.5% |       1 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Node_Backward_Iterator::next` (`libjvm.dylib`)

|     % | Samples | Caller                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 71.4% |       5 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |
| 28.6% |       2 | `PhaseCFG::schedule_late`      | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |       7 | `PhaseIterGVN::optimize` | `libjvm.dylib` |

##### `Compile::disconnect_useless_nodes` (`libjvm.dylib`)

|      % | Samples | Caller                                   | Location       |
| -----: | ------: | ---------------------------------------- | -------------- |
| 100.0% |       7 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `vmSymbols::find_sid` (`libjvm.dylib`)

|     % | Samples | Caller                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 85.7% |       6 | `ciObjectFactory::get_symbol` | `libjvm.dylib` |
| 14.3% |       1 | `ciKlass::ciKlass`            | `libjvm.dylib` |

##### `Arena::contains` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       6 | `Matcher::xform` | `libjvm.dylib` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

|     % | Samples | Caller                                                              | Location       |
| ----: | ------: | ------------------------------------------------------------------- | -------------- |
| 50.0% |       3 | `G1ScanHRForRegionClosure::scan_memregion`                          | `libjvm.dylib` |
| 16.7% |       1 | `G1ParScanThreadState::steal_and_trim_queue`                        | `libjvm.dylib` |
| 16.7% |       1 | `void G1ParCopyClosure<(G1Barrier)1, false>::do_oop_work<oopDesc*>` | `libjvm.dylib` |
| 16.7% |       1 | `G1ParEvacuateFollowersClosure::do_void`                            | `libjvm.dylib` |

##### `bsearch` (`libsystem_c.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |       6 | `encoding_for_logical_immediate` | `libjvm.dylib` |

##### `collector(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301031800`)

|     % | Samples | Caller                           | Location                                            |
| ----: | ------: | -------------------------------- | --------------------------------------------------- |
| 50.0% |       3 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000030109b800` |
| 16.7% |       1 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000030109b400` |
| 16.7% |       1 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003010a9800` |
| 16.7% |       1 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000030108e000` |

##### `compare_immediate_pair` (`libjvm.dylib`)

|      % | Samples | Caller    | Location            |
| -----: | ------: | --------- | ------------------- |
| 100.0% |       5 | `bsearch` | `libsystem_c.dylib` |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Caller                           | Location                                            |
| ----: | ------: | -------------------------------- | --------------------------------------------------- |
| 40.0% |       2 | `guardWithCatch(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301098400` |
| 40.0% |       2 | `invoke(Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000301089400` |
| 20.0% |       1 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000030102b000` |

##### `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|     % | Samples | Caller                                                                                                        | Location                                               |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 80.0% |       4 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| 20.0% |       1 | `closure(ATNConfigSet, ATNConfigSet, boolean, boolean, PredictionContextCache, boolean)`                      | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `cast(Object)` (`java.lang.Class`)

|      % | Samples | Caller                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |       5 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `Dict::Insert` (`libjvm.dylib`)

|     % | Samples | Caller                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 50.0% |       2 | `Type::hashcons`      | `libjvm.dylib` |
| 50.0% |       2 | `TypePtr::interfaces` | `libjvm.dylib` |

##### `posix_madvise` (`libsystem_kernel.dylib`)

|      % | Samples | Caller        | Location                 |
| -----: | ------: | ------------- | ------------------------ |
| 100.0% |       4 | `free_medium` | `libsystem_malloc.dylib` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|      % | Samples | Caller                              | Location                                             |
| -----: | ------: | ----------------------------------- | ---------------------------------------------------- |
| 100.0% |       4 | `invokeStatic(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000030102b400` |

##### `getNode(Object)` (`java.util.HashMap`)

|     % | Samples | Caller        | Location                  |
| ----: | ------: | ------------- | ------------------------- |
| 75.0% |       3 | `get(Object)` | `java.util.LinkedHashMap` |
| 25.0% |       1 | `get(Object)` | `java.util.HashMap`       |

##### `equals(Object)` (`java.lang.String`)

|     % | Samples | Caller                              | Location                                 |
| ----: | ------: | ----------------------------------- | ---------------------------------------- |
| 25.0% |       1 | `computeIfAbsent(Object, Function)` | `java.util.concurrent.ConcurrentHashMap` |
| 25.0% |       1 | `indexOf(Object)`                   | `java.util.Arrays$ArrayList`             |
| 25.0% |       1 | `indexOfRange(Object, int, int)`    | `java.util.ArrayList`                    |
| 25.0% |       1 | `matches(Method, String, Class[])`  | `java.lang.PublicMethods$Key`            |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|     % | Samples | Caller                                                                                       | Location                                               |
| ----: | ------: | -------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 25.0% |       1 | `computeTargetState(DFA, DFAState, ParserRuleContext, int, boolean, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| 25.0% |       1 | `asUnmodifiable(Map)`                                                                        | `org.codehaus.groovy.runtime.DefaultGroovyMethods`     |
| 25.0% |       1 | `getPrecedenceStartState(int, boolean)`                                                      | `groovyjarjarantlr4.v4.runtime.dfa.DFA`                |
| 25.0% |       1 | `<init>(Expression, Token, Expression)`                                                      | `org.codehaus.groovy.ast.expr.DeclarationExpression`   |

##### `bindTo(Object)` (`java.lang.invoke.MethodHandle`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |       3 | `setGuards(Object)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `getMetaClass()` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

|      % | Samples | Caller                | Location                                                  |
| -----: | ------: | --------------------- | --------------------------------------------------------- |
| 100.0% |       3 | `setCallSiteTarget()` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000301088800`)

|     % | Samples | Caller                                        | Location                                            |
| ----: | ------: | --------------------------------------------- | --------------------------------------------------- |
| 33.3% |       1 | `invoke(Object, Object, Object)`              | `java.lang.invoke.LambdaForm$MH.0x00000003010a1800` |
| 33.3% |       1 | `invoke(Object, Object, Object, Object)`      | `java.lang.invoke.LambdaForm$MH.0x00000003010d5c00` |
| 33.3% |       1 | `invoke(Object, Object, Object, Object, int)` | `java.lang.invoke.LambdaForm$MH.0x000000030133dc00` |

##### `getInCache(LambdaFormEditor$TransformKey)` (`java.lang.invoke.LambdaFormEditor`)

|     % | Samples | Caller                                          | Location                            |
| ----: | ------: | ----------------------------------------------- | ----------------------------------- |
| 33.3% |       1 | `addArgumentForm(int, LambdaForm$BasicType)`    | `java.lang.invoke.LambdaFormEditor` |
| 33.3% |       1 | `filterArgumentForm(int, LambdaForm$BasicType)` | `java.lang.invoke.LambdaFormEditor` |
| 33.3% |       1 | `collectArgumentsForm(int, MethodType)`         | `java.lang.invoke.LambdaFormEditor` |

##### `methodType(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

|     % | Samples | Caller                                                                    | Location                            |
| ----: | ------: | ------------------------------------------------------------------------- | ----------------------------------- |
| 66.7% |       2 | `dropParameterTypes(int, int)`                                            | `java.lang.invoke.MethodType`       |
| 33.3% |       1 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `equals(Object, Object)` (`java.util.Objects`)

|      % | Samples | Caller           | Location                               |
| -----: | ------: | ---------------- | -------------------------------------- |
| 100.0% |       3 | `equals(Object)` | `jdk.internal.util.StrongReferenceKey` |

##### `itable stub` (`<unknown>`)

|     % | Samples | Caller                                | Location                                                  |
| ----: | ------: | ------------------------------------- | --------------------------------------------------------- |
| 33.3% |       1 | `accept(Object)`                      | `java.util.stream.ReferencePipeline$3$1`                  |
| 33.3% |       1 | `setGuards(Object)`                   | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| 33.3% |       1 | `exactOutputSizeIfKnown(Spliterator)` | `java.util.stream.AbstractPipeline`                       |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

|      % | Samples | Caller                           | Location                             |
| -----: | ------: | -------------------------------- | ------------------------------------ |
| 100.0% |       2 | `<init>(MethodType, LambdaForm)` | `java.lang.invoke.BoundMethodHandle` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000030109a400`)

|     % | Samples | Caller                   | Location                                            |
| ----: | ------: | ------------------------ | --------------------------------------------------- |
| 50.0% |       1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000030109ac00` |
| 50.0% |       1 | `guard(Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x00000003010ca800` |

##### `getRoot()` (`java.lang.reflect.Method`)

|     % | Samples | Caller                      | Location                          |
| ----: | ------: | --------------------------- | --------------------------------- |
| 50.0% |       1 | `declaredAnnotations()`     | `java.lang.reflect.Executable`    |
| 50.0% |       1 | `getRoot(AccessibleObject)` | `java.lang.reflect.ReflectAccess` |

##### `<init>(int, Object, Object)` (`java.util.concurrent.ConcurrentHashMap$Node`)

|      % | Samples | Caller                            | Location                                 |
| -----: | ------: | --------------------------------- | ---------------------------------------- |
| 100.0% |       2 | `putVal(Object, Object, boolean)` | `java.util.concurrent.ConcurrentHashMap` |

##### `collector(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003010a1000`)

|      % | Samples | Caller                       | Location                                            |
| -----: | ------: | ---------------------------- | --------------------------------------------------- |
| 100.0% |       2 | `invoke(Object, long, long)` | `java.lang.invoke.LambdaForm$MH.0x000000030132c800` |

##### `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`)

|      % | Samples | Caller                               | Location                            |
| -----: | ------: | ------------------------------------ | ----------------------------------- |
| 100.0% |       2 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|     % | Samples | Caller                                          | Location                                     |
| ----: | ------: | ----------------------------------------------- | -------------------------------------------- |
| 50.0% |       1 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |
| 50.0% |       1 | `invokeSpecial(Object, Object, Object)`         | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `I2C/C2I adapters(0xbbb)` (`<unknown>`)

|     % | Samples | Caller                                          | Location                                     |
| ----: | ------: | ----------------------------------------------- | -------------------------------------------- |
| 50.0% |       1 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `I2C/C2I adapters(0xa)` (`<unknown>`)

|      % | Samples | Caller                                                                                           | Location                                             |
| -----: | ------: | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| 100.0% |       1 | `scanAttributeValue(XMLString, XMLString, String, XMLAttributes, int, boolean, String, boolean)` | `com.sun.org.apache.xerces.internal.impl.XMLScanner` |

##### `zero_blocks` (`<unknown>`)

|      % | Samples | Caller                                                               | Location                                              |
| -----: | ------: | -------------------------------------------------------------------- | ----------------------------------------------------- |
| 100.0% |       1 | `join(PredictionContext, PredictionContext, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |

##### `I2C/C2I adapters(0xbbbbbbb)` (`<unknown>`)

|      % | Samples | Caller                                   | Location                                       |
| -----: | ------: | ---------------------------------------- | ---------------------------------------------- |
| 100.0% |       1 | `collectViolations(SourceCode, RuleSet)` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |

##### `vtable stub` (`<unknown>`)

|      % | Samples | Caller                                | Location                                              |
| -----: | ------: | ------------------------------------- | ----------------------------------------------------- |
| 100.0% |       1 | `getReachableTarget(Transition, int)` | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator` |

##### `I2C/C2I adapters(0xbbbb)` (`<unknown>`)

|      % | Samples | Caller                         | Location                                     |
| -----: | ------: | ------------------------------ | -------------------------------------------- |
| 100.0% |       1 | `invokeStatic(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `I2C/C2I adapters(0xbbba)` (`<unknown>`)

|      % | Samples | Caller                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |       1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003013a9000` |

##### `I2C/C2I adapters(0xbbbbb)` (`<unknown>`)

|      % | Samples | Caller                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |       1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301372800` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                                                                      | Location                                             |
| ----: | ------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 70.9% |   1,152 | `_pthread_start`                                                                              | `libsystem_pthread.dylib`                            |
| 70.9% |   1,152 | `thread_start`                                                                                | `libsystem_pthread.dylib`                            |
| 70.9% |   1,151 | `Thread::call_run`                                                                            | `libjvm.dylib`                                       |
| 70.9% |   1,151 | `thread_native_entry`                                                                         | `libjvm.dylib`                                       |
| 65.6% |   1,066 | `JavaThread::thread_main_inner`                                                               | `libjvm.dylib`                                       |
| 65.6% |   1,065 | `CompileBroker::compiler_thread_loop`                                                         | `libjvm.dylib`                                       |
| 64.6% |   1,049 | `CompileBroker::invoke_compiler_on_method`                                                    | `libjvm.dylib`                                       |
| 53.2% |     864 | `Compile::Compile`                                                                            | `libjvm.dylib`                                       |
| 53.2% |     864 | `C2Compiler::compile_method`                                                                  | `libjvm.dylib`                                       |
| 27.5% |     447 | `main(String[])`                                                                              | `org.codenarc.CodeNarc`                              |
| 27.5% |     447 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| 27.4% |     445 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000000301088800` |
| 27.3% |     444 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 27.3% |     444 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000003010a1800`  |
| 27.3% |     444 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 27.2% |     442 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x00000003010aa000`  |
| 27.2% |     442 | `reinvoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000003010aa800`  |
| 27.2% |     442 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x00000003010aac00`  |
| 26.7% |     433 | `invokeVirtual(Object, Object, Object)`                                                       | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 26.7% |     433 | `execute(String[])`                                                                           | `org.codenarc.CodeNarc`                              |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|     % | Samples | Function                                   | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 65.6% |   1,065 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
| 64.6% |   1,049 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
| 53.2% |     864 | `Compile::Compile`                         | `libjvm.dylib` |
| 53.2% |     864 | `C2Compiler::compile_method`               | `libjvm.dylib` |
| 25.4% |     412 | `Compile::Code_Gen`                        | `libjvm.dylib` |
| 20.4% |     331 | `Compile::Optimize`                        | `libjvm.dylib` |
| 14.3% |     233 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
| 11.8% |     192 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
| 10.7% |     174 | `Compilation::Compilation`                 | `libjvm.dylib` |
| 10.7% |     173 | `Compilation::compile_method`              | `libjvm.dylib` |
| 10.1% |     164 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
| 10.1% |     164 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
|  9.8% |     159 | `Compilation::compile_java_method`         | `libjvm.dylib` |
|  6.1% |      99 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
|  5.8% |      95 | `Compile::optimize_loops`                  | `libjvm.dylib` |
|  5.8% |      95 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |
|  4.2% |      69 | `Matcher::match`                           | `libjvm.dylib` |
|  4.1% |      67 | `Compilation::emit_lir`                    | `libjvm.dylib` |
|  3.2% |      52 | `PhaseCFG::do_global_code_motion`          | `libjvm.dylib` |
|  3.2% |      52 | `LinearScan::do_linear_scan`               | `libjvm.dylib` |

##### Native

|     % | Samples | Function                                    | Location                  |
| ----: | ------: | ------------------------------------------- | ------------------------- |
| 70.9% |   1,152 | `_pthread_start`                            | `libsystem_pthread.dylib` |
| 70.9% |   1,152 | `thread_start`                              | `libsystem_pthread.dylib` |
| 70.9% |   1,151 | `Thread::call_run`                          | `libjvm.dylib`            |
| 70.9% |   1,151 | `thread_native_entry`                       | `libjvm.dylib`            |
| 65.6% |   1,066 | `JavaThread::thread_main_inner`             | `libjvm.dylib`            |
| 10.7% |     174 | `Compiler::compile_method`                  | `libjvm.dylib`            |
|  6.7% |     109 | `Parse::Parse`                              | `libjvm.dylib`            |
|  6.7% |     109 | `ParseGenerator::generate`                  | `libjvm.dylib`            |
|  6.5% |     105 | `Parse::do_one_block`                       | `libjvm.dylib`            |
|  6.5% |     105 | `Parse::do_all_blocks`                      | `libjvm.dylib`            |
|  5.7% |      92 | `Parse::do_call`                            | `libjvm.dylib`            |
|  5.0% |      81 | `WorkerThread::run`                         | `libjvm.dylib`            |
|  3.8% |      62 | `PredictedCallGenerator::generate`          | `libjvm.dylib`            |
|  3.1% |      50 | `G1EvacuateRegionsBaseTask::work`           | `libjvm.dylib`            |
|  3.0% |      49 | `java_lang_Throwable::fill_in_stack_trace`  | `libjvm.dylib`            |
|  3.0% |      49 | `JVM_FillInStackTrace`                      | `libjvm.dylib`            |
|  3.0% |      49 | `Java_java_lang_Throwable_fillInStackTrace` | `libjava.dylib`           |
|  2.1% |      34 | `IRScope::IRScope`                          | `libjvm.dylib`            |
|  2.1% |      34 | `IR::IR`                                    | `libjvm.dylib`            |
|  1.8% |      30 | `G1EvacuateRegionsTask::scan_roots`         | `libjvm.dylib`            |

##### Standard library

|     % | Samples | Function                                                                                      | Location                                             |
| ----: | ------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 27.5% |     447 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| 27.4% |     445 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000000301088800` |
| 27.3% |     444 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 27.3% |     444 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000003010a1800`  |
| 27.3% |     444 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 27.2% |     442 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x00000003010aa000`  |
| 27.2% |     442 | `reinvoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000003010aa800`  |
| 27.2% |     442 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x00000003010aac00`  |
| 26.7% |     433 | `invokeVirtual(Object, Object, Object)`                                                       | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 26.7% |     433 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000003010c6400`  |
| 26.7% |     433 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x00000003010c7000`  |
| 26.6% |     432 | `invokeVirtual(Object, Object, Object, Object)`                                               | `java.lang.invoke.LambdaForm$DMH.0x0000000301094400` |
| 26.5% |     430 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000030108e000`  |
| 26.5% |     430 | `linkToCallSite(Object, Object)`                                                              | `java.lang.invoke.Invokers$Holder`                   |
| 26.4% |     429 | `guardWithCatch(Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x0000000301098400`  |
| 26.4% |     429 | `reinvoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000301099c00`  |
| 26.4% |     429 | `guard(Object, Object)`                                                                       | `java.lang.invoke.LambdaForm$MH.0x000000030109a000`  |
| 26.4% |     429 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000003010a9800`  |
| 26.2% |     426 | `invokeVirtual(Object, Object)`                                                               | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 26.2% |     425 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000030102b000`  |

##### JIT

|    % | Samples | Function                      | Location    |
| ---: | ------: | ----------------------------- | ----------- |
| 0.3% |       5 | `I2C/C2I adapters(0xb)`       | `<unknown>` |
| 0.2% |       3 | `itable stub`                 | `<unknown>` |
| 0.1% |       2 | `I2C/C2I adapters(0xbb)`      | `<unknown>` |
| 0.1% |       2 | `I2C/C2I adapters(0xbbb)`     | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xa)`       | `<unknown>` |
| 0.1% |       1 | `zero_blocks`                 | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbbbbbb)` | `<unknown>` |
| 0.1% |       1 | `vtable stub`                 | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbbb)`    | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbba)`    | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbbbb)`   | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Caller         | Location                  |
| -----: | ------: | -------------- | ------------------------- |
| 100.0% |   1,152 | `thread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |   1,151 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Caller           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   1,151 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   1,066 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |   1,065 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |   1,049 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |     864 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |     864 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|     % | Samples | Caller                                                                                          | Location                                             |
| ----: | ------: | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 99.6% |     445 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`     | `java.lang.invoke.LambdaForm$DMH.0x0000000301088800` |
|  0.4% |       2 | `invokeStaticInit(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000301088c00` |
|  0.2% |       1 | `unknown`                                                                                       | `<unknown>`                                          |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000301088800`)

|     % | Samples | Caller                                           | Location                                            |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 99.8% |     444 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000003010a1800` |
| 96.4% |     429 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000030108e000` |
| 83.4% |     371 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000003010d5c00` |
| 80.4% |     358 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301288800` |
| 58.0% |     258 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000000301388000` |

##### `invokeExact_MT(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                                                                                           | Location                                               |
| -----: | ------: | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| 100.0% |     444 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface`        |
|  73.6% |     327 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`        |
|   0.7% |       3 | `invokeImpl(Object, Object[])`                                                                   | `jdk.internal.reflect.DirectMethodHandleAccessor`      |
|   0.5% |       2 | `invokeImpl(Object[])`                                                                           | `jdk.internal.reflect.DirectConstructorHandleAccessor` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003010a1800`)

|      % | Samples | Caller                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     444 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|   8.1% |      36 | `reinvoke(Object, Object, Object)`       | `java.lang.invoke.LambdaForm$MH.0x00000003010aa800` |

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                                     | Location                                                                   |
| -----: | ------: | ------------------------------------------ | -------------------------------------------------------------------------- |
| 100.0% |     444 | `main(String[])`                           | `org.codenarc.CodeNarc`                                                    |
|  82.2% |     365 | `execute()`                                | `org.codenarc.CodeNarcRunner`                                              |
|  80.2% |     356 | `processDirectory(String, RuleSet)`        | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                           |
|  48.4% |     215 | `measureRuleProcessingTime(Rule, Closure)` | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
|  42.1% |     187 | `doCall(Object)`                           | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |

##### `guardWithCatch(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003010aa000`)

|      % | Samples | Caller                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     442 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003010aa800` |
|  87.1% |     385 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `reinvoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003010aa800`)

|      % | Samples | Caller                          | Location                                            |
| -----: | ------: | ------------------------------- | --------------------------------------------------- |
| 100.0% |     442 | `guard(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003010aac00` |
|  98.0% |     433 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x00000003010c7000` |
|  94.1% |     416 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x00000003010d4c00` |
|  54.8% |     242 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x00000003010abc00` |
|  12.7% |      56 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x00000003010d9c00` |

##### `guard(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003010aac00`)

|      % | Samples | Caller                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     442 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003010aa800` |
|  87.1% |     385 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invokeVirtual(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     433 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003010c6400` |
|   0.9% |       4 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003010c7400` |
|   0.9% |       4 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003010d5000` |
|   0.7% |       3 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301121800` |
|   0.7% |       3 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000030110b400` |

##### `execute(String[])` (`org.codenarc.CodeNarc`)

|      % | Samples | Caller                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |     433 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003010c6400`)

|      % | Samples | Caller                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     433 | `guardWithCatch(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003010aa000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003010c7000`)

|      % | Samples | Caller                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |     433 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeVirtual(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000301094400`)

|     % | Samples | Caller                                           | Location                                            |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 99.3% |     429 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000003010a9800` |
| 79.4% |     343 | `guardWithCatch(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003010d4000` |
|  2.3% |      10 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000003010c9000` |
|  1.9% |       8 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000003013d4400` |
|  1.2% |       5 | `invoke(Object, Object, int, Object)`            | `java.lang.invoke.LambdaForm$MH.0x0000000301292400` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000030108e000`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     430 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|   0.2% |       1 | `reinvoke(Object, Object)`       | `java.lang.invoke.LambdaForm$MH.0x0000000301099c00` |

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Caller                   | Location                                 |
| ----: | ------: | ------------------------ | ---------------------------------------- |
| 99.3% |     427 | `execute(String[])`      | `org.codenarc.CodeNarc`                  |
| 11.6% |      50 | `execute()`              | `org.codenarc.CodeNarcRunner`            |
| 10.7% |      46 | `createInitialRuleSet()` | `org.codenarc.CodeNarcRunner`            |
| 10.7% |      46 | `buildRuleSet()`         | `org.codenarc.CodeNarcRunner`            |
|  9.8% |      42 | `getAst()`               | `org.codenarc.source.AbstractSourceCode` |

##### `guardWithCatch(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301098400`)

|      % | Samples | Caller                     | Location                                            |
| -----: | ------: | -------------------------- | --------------------------------------------------- |
| 100.0% |     429 | `reinvoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301099c00` |
|   9.8% |      42 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `reinvoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301099c00`)

|      % | Samples | Caller                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |     429 | `guard(Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x000000030109a000` |
|  99.1% |     425 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000030109bc00` |
|  18.2% |      78 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000030109ac00` |

##### `guard(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000030109a000`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     429 | `reinvoke(Object, Object)`       | `java.lang.invoke.LambdaForm$MH.0x0000000301099c00` |
|  10.5% |      45 | `delegate(Object, Object)`       | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   3.0% |      13 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003010a9800`)

|      % | Samples | Caller                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     429 | `guardWithCatch(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003010aa000` |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Caller                           | Location                                            |
| ----: | ------: | -------------------------------- | --------------------------------------------------- |
| 99.8% |     425 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000030102b000` |
| 11.7% |      50 | `guardWithCatch(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301098400` |
|  0.7% |       3 | `invoke(Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000301089400` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000030102b000`)

|      % | Samples | Caller                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     425 | `guardWithCatch(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000000301098400` |
|   0.7% |       3 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     412 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     331 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |     233 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 50.5% |      97 | `Compile::Optimize`       | `libjvm.dylib` |
| 49.5% |      95 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     174 | `Compiler::compile_method` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |     174 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     173 | `Compilation::Compilation` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |     164 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     164 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     159 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     109 | `ParseGenerator::generate` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|     % | Samples | Caller                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 99.1% |     108 | `Compile::Compile`                     | `libjvm.dylib` |
| 55.0% |      60 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
| 49.5% |      54 | `Parse::do_call`                       | `libjvm.dylib` |
|  0.9% |       1 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|      % | Samples | Caller                 | Location       |
| -----: | ------: | ---------------------- | -------------- |
| 100.0% |     105 | `Parse::do_all_blocks` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % | Samples | Caller         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |     105 | `Parse::Parse` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 54.5% |      54 | `Compile::Optimize`                        | `libjvm.dylib` |
| 27.3% |      27 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|  9.1% |       9 | `PhaseMacroExpand::expand_macro_nodes`     | `libjvm.dylib` |
|  5.1% |       5 | `Compile::process_for_post_loop_opts_igvn` | `libjvm.dylib` |
|  3.0% |       3 | `Compile::remove_speculative_types`        | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      95 | `Compile::Optimize` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |      95 | `PhaseIterGVN::optimize` | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |      92 | `Parse::do_one_block` | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      81 | `Thread::call_run` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      69 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      67 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      62 | `Parse::do_call`                   | `libjvm.dylib` |
|  32.3% |      20 | `PredictedCallGenerator::generate` | `libjvm.dylib` |

##### `PhaseCFG::do_global_code_motion` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      52 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|      % | Samples | Caller                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |      52 | `Compilation::emit_lir` | `libjvm.dylib` |

##### `G1EvacuateRegionsBaseTask::work` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      50 | `WorkerThread::run` | `libjvm.dylib` |

##### `java_lang_Throwable::fill_in_stack_trace` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |      49 | `JVM_FillInStackTrace`                     | `libjvm.dylib` |
|  95.9% |      47 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `JVM_FillInStackTrace` (`libjvm.dylib`)

|      % | Samples | Caller                                      | Location        |
| -----: | ------: | ------------------------------------------- | --------------- |
| 100.0% |      49 | `Java_java_lang_Throwable_fillInStackTrace` | `libjava.dylib` |

##### `Java_java_lang_Throwable_fillInStackTrace` (`libjava.dylib`)

|      % | Samples | Caller                  | Location              |
| -----: | ------: | ----------------------- | --------------------- |
| 100.0% |      49 | `fillInStackTrace(int)` | `java.lang.Throwable` |

##### `IRScope::IRScope` (`libjvm.dylib`)

|      % | Samples | Caller   | Location       |
| -----: | ------: | -------- | -------------- |
| 100.0% |      34 | `IR::IR` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |      34 | `Compilation::build_hir` | `libjvm.dylib` |

##### `G1EvacuateRegionsTask::scan_roots` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      30 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|     % | Samples | Caller                                                                                       | Location                                               |
| ----: | ------: | -------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 20.0% |       1 | `computeTargetState(DFA, DFAState, ParserRuleContext, int, boolean, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| 20.0% |       1 | `asUnmodifiable(Map)`                                                                        | `org.codehaus.groovy.runtime.DefaultGroovyMethods`     |
| 20.0% |       1 | `getPrecedenceStartState(int, boolean)`                                                      | `groovyjarjarantlr4.v4.runtime.dfa.DFA`                |
| 20.0% |       1 | `make(String)`                                                                               | `org.codehaus.groovy.ast.ClassHelper`                  |
| 20.0% |       1 | `<init>(Expression, Token, Expression)`                                                      | `org.codehaus.groovy.ast.expr.DeclarationExpression`   |

##### `itable stub` (`<unknown>`)

|     % | Samples | Caller                                | Location                                                  |
| ----: | ------: | ------------------------------------- | --------------------------------------------------------- |
| 33.3% |       1 | `accept(Object)`                      | `java.util.stream.ReferencePipeline$3$1`                  |
| 33.3% |       1 | `setGuards(Object)`                   | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| 33.3% |       1 | `exactOutputSizeIfKnown(Spliterator)` | `java.util.stream.AbstractPipeline`                       |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|     % | Samples | Caller                                          | Location                                     |
| ----: | ------: | ----------------------------------------------- | -------------------------------------------- |
| 50.0% |       1 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |
| 50.0% |       1 | `invokeSpecial(Object, Object, Object)`         | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `I2C/C2I adapters(0xbbb)` (`<unknown>`)

|     % | Samples | Caller                                          | Location                                     |
| ----: | ------: | ----------------------------------------------- | -------------------------------------------- |
| 50.0% |       1 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `I2C/C2I adapters(0xa)` (`<unknown>`)

|      % | Samples | Caller                                                                                           | Location                                             |
| -----: | ------: | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| 100.0% |       1 | `scanAttributeValue(XMLString, XMLString, String, XMLAttributes, int, boolean, String, boolean)` | `com.sun.org.apache.xerces.internal.impl.XMLScanner` |

##### `zero_blocks` (`<unknown>`)

|      % | Samples | Caller                                                               | Location                                              |
| -----: | ------: | -------------------------------------------------------------------- | ----------------------------------------------------- |
| 100.0% |       1 | `join(PredictionContext, PredictionContext, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |

##### `I2C/C2I adapters(0xbbbbbbb)` (`<unknown>`)

|      % | Samples | Caller                                   | Location                                       |
| -----: | ------: | ---------------------------------------- | ---------------------------------------------- |
| 100.0% |       1 | `collectViolations(SourceCode, RuleSet)` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |

##### `vtable stub` (`<unknown>`)

|      % | Samples | Caller                                | Location                                              |
| -----: | ------: | ------------------------------------- | ----------------------------------------------------- |
| 100.0% |       1 | `getReachableTarget(Transition, int)` | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator` |

##### `I2C/C2I adapters(0xbbbb)` (`<unknown>`)

|      % | Samples | Caller                         | Location                                     |
| -----: | ------: | ------------------------------ | -------------------------------------------- |
| 100.0% |       1 | `invokeStatic(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `I2C/C2I adapters(0xbbba)` (`<unknown>`)

|      % | Samples | Caller                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |       1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003013a9000` |

##### `I2C/C2I adapters(0xbbbbb)` (`<unknown>`)

|      % | Samples | Caller                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |       1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301372800` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 99.9% |   1,151 | `thread_native_entry` | `libjvm.dylib` |
|  0.1% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   1,152 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 92.6% |   1,066 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  7.0% |      81 | `WorkerThread::run`             | `libjvm.dylib` |
|  0.3% |       3 | `VMThread::run`                 | `libjvm.dylib` |
|  0.1% |       1 | `WatcherThread::run`            | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   1,151 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 99.9% |   1,065 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |
|  0.1% |       1 | `ServiceThread::service_thread_entry` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 98.5% |   1,049 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  1.5% |      16 | `CompileQueue::get`                        | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 82.4% |     864 | `C2Compiler::compile_method`    | `libjvm.dylib` |
| 16.6% |     174 | `Compiler::compile_method`      | `libjvm.dylib` |
|  0.5% |       5 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |
|  0.3% |       3 | `ciEnv::ciEnv`                  | `libjvm.dylib` |
|  0.2% |       2 | `CompilationLog::log_compile`   | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 47.7% |     412 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 38.3% |     331 | `Compile::Optimize`                      | `libjvm.dylib` |
| 12.5% |     108 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.8% |       7 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.3% |       3 | `CallGenerator::for_inline`              | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     864 | `Compile::Compile` | `libjvm.dylib` |

##### `main(String[])` (`org.codenarc.CodeNarc`)

|     % | Samples | Callee                                                           | Location                               |
| ----: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| 99.3% |     444 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`     |
|  0.4% |       2 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`     |
|  0.2% |       1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|     % | Samples | Callee                                                  | Location                                        |
| ----: | ------: | ------------------------------------------------------- | ----------------------------------------------- |
| 99.3% |     444 | `invokeExact_MT(Object, Object, Object)`                | `java.lang.invoke.Invokers$Holder`              |
| 16.8% |      75 | `doWithCallSite(MutableCallSite, Object[], BiFunction)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|  0.2% |       1 | `setTarget(MethodHandle)`                               | `java.lang.invoke.MutableCallSite`              |
|  0.2% |       1 | `bypassCache(Boolean, Object[])`                        | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000301088800`)

|      % | Samples | Callee                                                                                           | Location                                        |
| -----: | ------: | ------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| 100.0% |     445 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|  79.6% |     354 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|   0.4% |       2 | `invokeBasic(Object[])`                                                                          | `java.lang.invoke.MethodHandle`                 |

##### `invokeExact_MT(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Callee                   | Location                                            |
| ----: | ------: | ------------------------ | --------------------------------------------------- |
| 97.5% |     433 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003010c7000` |
| 95.7% |     425 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000030109bc00` |
| 93.7% |     416 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003010d4c00` |
| 80.2% |     356 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301282400` |
| 79.1% |     351 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301290000` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003010a1800`)

|      % | Samples | Callee                                                                                      | Location                                             |
| -----: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     444 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000301088800` |
|   0.7% |       3 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x00000003010a1000`  |

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     444 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003010a1800` |

##### `guardWithCatch(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003010aa000`)

|     % | Samples | Callee                                    | Location                                             |
| ----: | ------: | ----------------------------------------- | ---------------------------------------------------- |
| 98.0% |     433 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000003010c6400`  |
| 97.1% |     429 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000003010a9800`  |
| 80.5% |     356 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000301094c00` |
| 49.1% |     217 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000003010d4800`  |
| 12.9% |      57 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x0000000301104000`  |

##### `reinvoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003010aa800`)

|      % | Samples | Callee                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     442 | `guardWithCatch(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003010aa000` |
| 100.0% |     442 | `guard(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000003010aac00` |
|  43.4% |     192 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000000301388400` |
|   8.1% |      36 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000003010a1800` |
|   7.7% |      34 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000003011e1000` |

##### `guard(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003010aac00`)

|      % | Samples | Callee                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     442 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003010aa800` |
|  87.1% |     385 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   0.2% |       1 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x00000003010aa400` |

##### `invokeVirtual(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Callee                                        | Location                                            |
| -----: | ------: | --------------------------------------------- | --------------------------------------------------- |
| 100.0% |     433 | `execute(String[])`                           | `org.codenarc.CodeNarc`                             |
|   0.9% |       4 | `parseArgs(String[])`                         | `org.codenarc.CodeNarc`                             |
|   0.5% |       2 | `super$3$visitMethod(MethodNode)`             | `org.gmetrics.metric.abc.AbcAstVisitor`             |
|   0.2% |       1 | `load(InputStream)`                           | `java.util.Properties`                              |
|   0.2% |       1 | `super$3$visitBlockStatement(BlockStatement)` | `org.codenarc.rule.size.NestedBlockDepthAstVisitor` |

##### `execute(String[])` (`org.codenarc.CodeNarc`)

|     % | Samples | Callee                                             | Location                                            |
| ----: | ------: | -------------------------------------------------- | --------------------------------------------------- |
| 98.6% |     427 | `linkToCallSite(Object, Object)`                   | `java.lang.invoke.Invokers$Holder`                  |
|  0.9% |       4 | `linkToCallSite(Object, Object, Object)`           | `java.lang.invoke.Invokers$Holder`                  |
|  0.5% |       2 | `linkToCallSite(Object, Object, int, int, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301640000` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003010c6400`)

|      % | Samples | Callee                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |     433 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003010c7000`)

|      % | Samples | Callee                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     433 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003010aa800` |
|  83.4% |     361 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invokeVirtual(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000301094400`)

|     % | Samples | Callee                                   | Location                                       |
| ----: | ------: | ---------------------------------------- | ---------------------------------------------- |
| 82.2% |     355 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$1076`         |
| 79.4% |     343 | `collectViolations(SourceCode, RuleSet)` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |
| 19.2% |      83 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$207`          |
| 11.6% |      50 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$251`          |
| 10.4% |      45 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$1008`         |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000030108e000`)

|     % | Samples | Callee                                                                                          | Location                                             |
| ----: | ------: | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 99.8% |     429 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`     | `java.lang.invoke.LambdaForm$DMH.0x0000000301088800` |
|  1.2% |       5 | `collector(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x0000000301031800`  |
|  0.5% |       2 | `invokeStaticInit(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000301088c00` |

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |     430 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000030108e000` |
|   4.2% |      18 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000030109b400` |
|   3.0% |      13 | `guard(Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x000000030109a000` |

##### `guardWithCatch(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301098400`)

|     % | Samples | Callee                          | Location                                            |
| ----: | ------: | ------------------------------- | --------------------------------------------------- |
| 99.1% |     425 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000030102b000` |
| 12.4% |      53 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x0000000301105400` |
| 11.7% |      50 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
| 11.4% |      49 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
|  2.3% |      10 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x00000003010c9000` |

##### `reinvoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301099c00`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     429 | `guardWithCatch(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301098400` |
| 100.0% |     429 | `guard(Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000030109a000` |
|   0.9% |       4 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000003011eb400` |
|   0.2% |       1 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000030108e000` |

##### `guard(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000030109a000`)

|      % | Samples | Callee                     | Location                                            |
| -----: | ------: | -------------------------- | --------------------------------------------------- |
| 100.0% |     429 | `reinvoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301099c00` |
|  10.3% |      44 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   0.5% |       2 | `invoke(Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000000301098c00` |
|   0.5% |       2 | `invoke(Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000030109a400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003010a9800`)

|      % | Samples | Callee                                          | Location                                             |
| -----: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     429 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000301094400` |
|   0.5% |       2 | `collector(Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x0000000301031800`  |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Callee                   | Location                                     |
| ----: | ------: | ------------------------ | -------------------------------------------- |
| 99.8% |     425 | `execute()`              | `org.codenarc.CodeNarcRunner`                |
| 10.8% |      46 | `createInitialRuleSet()` | `org.codenarc.CodeNarcRunner`                |
|  0.5% |       2 | `createMetric()`         | `org.codenarc.rule.size.AbcMetricAstVisitor` |
|  0.5% |       2 | `getMagnitude()`         | `org.gmetrics.metric.abc.AbcVector`          |
|  0.2% |       1 | `createSourceAnalyzer()` | `org.codenarc.CodeNarc`                      |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000030102b000`)

|      % | Samples | Callee                          | Location                                     |
| -----: | ------: | ------------------------------- | -------------------------------------------- |
| 100.0% |     425 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |
|   0.2% |       1 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 56.6% |     233 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 16.7% |      69 | `Matcher::match`                  | `libjvm.dylib` |
| 12.6% |      52 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
| 11.4% |      47 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  1.2% |       5 | `PhaseOutput::install_code`       | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 29.3% |      97 | `PhaseIdealLoop::optimize`     | `libjvm.dylib` |
| 28.7% |      95 | `Compile::optimize_loops`      | `libjvm.dylib` |
| 16.3% |      54 | `PhaseIterGVN::optimize`       | `libjvm.dylib` |
|  6.3% |      21 | `PhaseCCP::PhaseCCP`           | `libjvm.dylib` |
|  4.2% |      14 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 20.2% |      47 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| 16.3% |      38 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
|  9.9% |      23 | `PhaseLive::compute`                       | `libjvm.dylib` |
|  9.0% |      21 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  9.0% |      21 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 85.4% |     164 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| 14.1% |      27 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |
|  0.5% |       1 | `Chunk::next_chop`               | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 99.4% |     173 | `Compilation::compile_method` | `libjvm.dylib` |
|  0.6% |       1 | `Dependencies::initialize`    | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     174 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 91.9% |     159 | `Compilation::compile_java_method` | `libjvm.dylib` |
|  7.5% |      13 | `ciEnv::register_method`           | `libjvm.dylib` |
|  0.6% |       1 | `Dependencies::assert_common_1`    | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 27.4% |      45 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 20.1% |      33 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| 13.4% |      22 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
| 12.2% |      20 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
|  6.7% |      11 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Callee                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |     164 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 42.1% |      67 | `Compilation::emit_lir`        | `libjvm.dylib` |
| 29.6% |      47 | `Compilation::build_hir`       | `libjvm.dylib` |
| 27.0% |      43 | `Compilation::emit_code_body`  | `libjvm.dylib` |
|  0.6% |       1 | `ciMethod::ensure_method_data` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|     % | Samples | Callee                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 96.3% |     105 | `Parse::do_all_blocks`    | `libjvm.dylib` |
|  2.8% |       3 | `Parse::do_exits`         | `libjvm.dylib` |
|  1.8% |       2 | `Parse::do_method_entry`  | `libjvm.dylib` |
|  0.9% |       1 | `GraphKit::set_map_clone` | `libjvm.dylib` |
|  0.9% |       1 | `ciMethod::method_data`   | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % | Samples | Callee         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |     109 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|     % | Samples | Callee                   | Location       |
| ----: | ------: | ------------------------ | -------------- |
| 87.6% |      92 | `Parse::do_call`         | `libjvm.dylib` |
| 19.0% |      20 | `Parse::do_field_access` | `libjvm.dylib` |
|  8.6% |       9 | `Parse::do_one_bytecode` | `libjvm.dylib` |
|  7.6% |       8 | `Parse::do_if`           | `libjvm.dylib` |
|  4.8% |       5 | `Parse::do_instanceof`   | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % | Samples | Callee                 | Location       |
| -----: | ------: | ---------------------- | -------------- |
| 100.0% |     105 | `Parse::do_one_block`  | `libjvm.dylib` |
|   1.0% |       1 | `Parse::do_exceptions` | `libjvm.dylib` |
|   1.0% |       1 | `Parse::merge_common`  | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                    | Location       |
| ----: | ------: | ----------------------------------------- | -------------- |
| 96.0% |      95 | `PhaseIterGVN::transform_old`             | `libjvm.dylib` |
|  1.0% |       1 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |
|  1.0% |       1 | `LoadNode::hash`                          | `libjvm.dylib` |
|  1.0% |       1 | `ConstraintCastNode::hash`                | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      95 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 14.7% |      14 | `StoreNode::Ideal`           | `libjvm.dylib` |
| 10.5% |      10 | `PhiNode::Ideal`             | `libjvm.dylib` |
| 10.5% |      10 | `PhaseIterGVN::subsume_node` | `libjvm.dylib` |
|  7.4% |       7 | `NodeHash::hash_find_insert` | `libjvm.dylib` |
|  6.3% |       6 | `CallStaticJavaNode::Ideal`  | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|     % | Samples | Callee                                                | Location       |
| ----: | ------: | ----------------------------------------------------- | -------------- |
| 67.4% |      62 | `PredictedCallGenerator::generate`                    | `libjvm.dylib` |
| 58.7% |      54 | `ParseGenerator::generate`                            | `libjvm.dylib` |
| 22.8% |      21 | `Compile::call_generator`                             | `libjvm.dylib` |
|  4.3% |       4 | `GraphKit::record_profiled_arguments_for_speculation` | `libjvm.dylib` |
|  3.3% |       3 | `LibraryIntrinsic::generate`                          | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 61.7% |      50 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
| 11.1% |       9 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
|  9.9% |       8 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib`           |
|  7.4% |       6 | `G1ParallelCleaningTask::work`    | `libjvm.dylib`           |
|  7.4% |       6 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib`           |

##### `Matcher::match` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 63.8% |      44 | `Matcher::xform`                              | `libjvm.dylib` |
| 15.9% |      11 | `Matcher::find_shared`                        | `libjvm.dylib` |
|  5.8% |       4 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |
|  2.9% |       2 | `ConINode::Opcode`                            | `libjvm.dylib` |
|  1.4% |       1 | `RegionNode::Opcode`                          | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location                   |
| ----: | ------: | ---------------------------- | -------------------------- |
| 77.6% |      52 | `LinearScan::do_linear_scan` | `libjvm.dylib`             |
| 20.9% |      14 | `BlockList::iterate_forward` | `libjvm.dylib`             |
|  1.5% |       1 | `_platform_memset`           | `libsystem_platform.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 96.8% |      60 | `ParseGenerator::generate`         | `libjvm.dylib` |
| 32.3% |      20 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
|  4.8% |       3 | `GraphKit::subtype_check_receiver` | `libjvm.dylib` |
|  3.2% |       2 | `GraphKit::null_check_common`      | `libjvm.dylib` |

##### `PhaseCFG::do_global_code_motion` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 92.3% |      48 | `PhaseCFG::global_code_motion`       | `libjvm.dylib` |
|  3.8% |       2 | `PhaseCFG::build_dominator_tree`     | `libjvm.dylib` |
|  3.8% |       2 | `PhaseCFG::estimate_block_frequency` | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|     % | Samples | Callee                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 36.5% |      19 | `LinearScan::allocate_registers`      | `libjvm.dylib` |
| 19.2% |      10 | `LinearScan::build_intervals`         | `libjvm.dylib` |
| 19.2% |      10 | `LinearScan::assign_reg_num`          | `libjvm.dylib` |
|  7.7% |       4 | `LinearScan::compute_local_live_sets` | `libjvm.dylib` |
|  5.8% |       3 | `LinearScan::resolve_data_flow`       | `libjvm.dylib` |

##### `G1EvacuateRegionsBaseTask::work` (`libjvm.dylib`)

|     % | Samples | Callee                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 60.0% |      30 | `G1EvacuateRegionsTask::scan_roots`            | `libjvm.dylib` |
| 28.0% |      14 | `G1EvacuateRegionsTask::evacuate_live_objects` | `libjvm.dylib` |
| 12.0% |       6 | `G1RemSet::scan_collection_set_code_roots`     | `libjvm.dylib` |

##### `java_lang_Throwable::fill_in_stack_trace` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 95.9% |      47 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |
| 20.4% |      10 | `frame::sender_for_compiled_frame`         | `libjvm.dylib` |
| 18.4% |       9 | `BacktraceBuilder::push`                   | `libjvm.dylib` |
|  6.1% |       3 | `frame::sender_for_interpreter_frame`      | `libjvm.dylib` |
|  4.1% |       2 | `PcDescContainer::find_pc_desc_internal`   | `libjvm.dylib` |

##### `JVM_FillInStackTrace` (`libjvm.dylib`)

|      % | Samples | Callee                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |      49 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `Java_java_lang_Throwable_fillInStackTrace` (`libjava.dylib`)

|      % | Samples | Callee                 | Location       |
| -----: | ------: | ---------------------- | -------------- |
| 100.0% |      49 | `JVM_FillInStackTrace` | `libjvm.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

|      % | Samples | Callee                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |      34 | `GraphBuilder::GraphBuilder` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      34 | `IRScope::IRScope` | `libjvm.dylib` |

##### `G1EvacuateRegionsTask::scan_roots` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 66.7% |      20 | `G1RemSet::scan_heap_roots`       | `libjvm.dylib` |
| 33.3% |      10 | `G1RootProcessor::evacuate_roots` | `libjvm.dylib` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|     % | Samples | Callee                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 20.0% |       1 | `SharedRuntime::fixup_callers_callsite` | `libjvm.dylib` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

Common call stack: `Thread::call_run` (`libjvm.dylib`) ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.6% |      26 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.5% |      25 | `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.9% |      14 | `PhaseLive::add_liveout` (`libjvm.dylib`) ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.9% |      14 | `Matcher::xform` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.7% |      12 | `PhaseChaitin::elide_copy` (`libjvm.dylib`) ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                               |
| 0.7% |      11 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.6% |      10 | `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.6% |      10 | `PhaseIdealLoop::Dominators` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                       |
| 0.6% |      10 | `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.6% |       9 | `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                 |
| 0.6% |       9 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.5% |       8 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`libjvm.dylib`) ← `G1ParScanThreadState::do_copy_to_survivor_space` ← `G1ParScanThreadState::trim_queue_to_threshold` ← `G1ScanHRForRegionClosure::scan_memregion` ← `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` ← `G1ScanHRForRegionClosure::scan_heap_roots` ← `G1ScanHRForRegionClosure::do_heap_region` ← `G1RemSet::scan_heap_roots` ← `G1EvacuateRegionsTask::scan_roots` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` |
| 0.4% |       7 | `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                     |
| 0.4% |       7 | `Node::dominates` (`libjvm.dylib`) ← `MemNode::all_controls_dominate` ← `InitializeNode::detect_init_independence` ← `InitializeNode::can_capture_store` ← `StoreNode::Ideal` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                   |
| 0.4% |       7 | `LinearScanWalker::free_collect_inactive_fixed` (`libjvm.dylib`) ← `LinearScanWalker::alloc_free_reg` ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                  |
| 0.4% |       6 | `Arena::contains` (`libjvm.dylib`) ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.4% |       6 | `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                      |
| 0.4% |       6 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `TaskTerminator::offer_termination` ← `G1ParEvacuateFollowersClosure::offer_termination` ← `G1ParEvacuateFollowersClosure::do_void` ← `G1EvacuateRegionsTask::evacuate_live_objects` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run`                                                                                                                                                                                                                                                                                                          |
| 0.4% |       6 | `PhaseCFG::schedule_pinned_nodes` (`libjvm.dylib`) ← `PhaseCFG::global_code_motion` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                    |
| 0.4% |       6 | `Compile::final_graph_reshaping_walk` (`libjvm.dylib`) ← `Compile::final_graph_reshaping` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                                  |
