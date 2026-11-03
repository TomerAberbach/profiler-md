# Sampling profile

Collected 1,627 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Compiler          | 51.3% |     834 |
| Native            | 29.3% |     477 |
| Standard library  | 17.5% |     284 |
| JIT               |  1.0% |      17 |
| Ours              |  0.9% |      14 |
| Garbage collector |  0.1% |       1 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 1,142 samples (70.2%) Thread::call_run at libjvm.dylib
│   ├── 1,092 samples (67.1%) JavaThread::thread_main_inner
│   │   └── 1,089 samples (66.9%) CompileBroker::compiler_thread_loop
│   │       ├── 1,068 samples (65.6%) CompileBroker::invoke_compiler_on_method
│   │       │   ├── 898 samples (55.2%) C2Compiler::compile_method
│   │       │   │   └── 897 samples (55.1%) Compile::Compile
│   │       │   │       ├── 459 samples (28.2%) Compile::Code_Gen
│   │       │   │       │   ├── 249 samples (15.3%) PhaseChaitin::Register_Allocate
│   │       │   │       │   │   ├── 47 samples (2.9%, self 1.7%) PhaseChaitin::Split
│   │       │   │       │   │   │   └── 19 samples (1.2%) 9 more callees, led by (0.3%) MachNode::rematerialize
│   │       │   │       │   │   ├── 37 samples (2.3%, self 1.1%) PhaseChaitin::build_ifg_physical
│   │       │   │       │   │   │   ├── 7 samples (0.4%, self 1.6% globally) IndexSetIterator::advance_and_next
│   │       │   │       │   │   │   └── 4 samples (0.2%) PhaseChaitin::compute_initial_block_pressure
│   │       │   │       │   │   ├── 30 samples (1.8%, self 1.0%) PhaseChaitin::post_allocate_copy_removal
│   │       │   │       │   │   │   └── 13 samples (0.8%) PhaseChaitin::elide_copy
│   │       │   │       │   │   ├── 25 samples (1.5%, self 0.9%) PhaseChaitin::gather_lrg_masks
│   │       │   │       │   │   │   └── 3 samples (0.2%) MachNode::ideal_reg
│   │       │   │       │   │   └── 110 samples (6.8%) 22 more callees, led by (1.5%) PhaseLive::compute
│   │       │   │       │   └── 210 samples (12.9%) 7 more callees, led by (5.0%) Matcher::match
│   │       │   │       ├── 327 samples (20.1%) Compile::Optimize
│   │       │   │       │   └── 326 samples (20.0%) 15 more callees, led by (6.5%) PhaseIdealLoop::optimize
│   │       │   │       ├── 94 samples (5.8%) ParseGenerator::generate
│   │       │   │       │   └── … 93 samples (5.7%) Parse::Parse at libjvm.dylib
│   │       │   │       │       ├── 82 samples (5.0%) Parse::do_all_blocks
│   │       │   │       │       │   └── 81 samples (5.0%) Parse::do_one_block
│   │       │   │       │       │       ├── … 1 sample (0.1%, self 1.3% globally) tlv_get_addr at libdyld.dylib
│   │       │   │       │       │       └── 80 samples (4.9%) 13 more callees, led by (2.2%) Parse::do_call
│   │       │   │       │       └── 4 samples (0.2%) Parse::do_exits
│   │       │   │       └── 17 samples (1.0%) 4 more callees, led by (0.5%) PhaseRemoveUseless::PhaseRemoveUseless
│   │       │   └── 170 samples (10.4%) 4 more callees, led by (10.2%) Compiler::compile_method
│   │       └── … 19 samples (1.2%) PlatformMonitor::wait at libjvm.dylib
│   │           ├── 15 samples (0.9%) __psynch_cvwait at libsystem_kernel.dylib
│   │           └── … 4 samples (0.2%, self 1.5% globally) __psynch_mutexwait at libsystem_kernel.dylib
│   └── 50 samples (3.1%) WorkerThread::run …
├── … 454 samples (27.9%) invoke(Object, Object, Object) at java.lang.invoke.LambdaForm$MH.0x00000078010a1800
│   └── 448 samples (27.5%) invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object) at java.lang.invoke.LambdaForm$DMH.0x0000007801088800
│       ├── … 323 samples (19.9%) fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[]) at org.codehaus.groovy.vmplugin.v8.IndyInterface
│       │   └── 322 samples (19.8%) 3 more callees, led by (16.2%) invokeExact_MT(Object, Object, Object) at java.lang.invoke.Invokers$Holder
│       └── 124 samples (7.6%) 2 more callees, led by (7.5%) selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[]) at org.codehaus.groovy.vmplugin.v8.IndyInterface
└── 24 samples (1.5%) 8 more root frames, led by (0.7%) <clinit>() at org.codenarc.CodeNarc
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|    % | Samples | Function                                                                                                                                                 | Location                  |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| 1.7% |      28 | `PhaseChaitin::Split`                                                                                                                                    | `libjvm.dylib`            |
| 1.6% |      26 | `IndexSetIterator::advance_and_next`                                                                                                                     | `libjvm.dylib`            |
| 1.5% |      24 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`  |
| 1.3% |      21 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`           |
| 1.2% |      19 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`            |
| 1.1% |      18 | `PhaseChaitin::build_ifg_physical`                                                                                                                       | `libjvm.dylib`            |
| 1.1% |      18 | `PhaseIdealLoop::build_loop_late_post_work`                                                                                                              | `libjvm.dylib`            |
| 1.0% |      17 | `PhaseChaitin::post_allocate_copy_removal`                                                                                                               | `libjvm.dylib`            |
| 1.0% |      16 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`  |
| 1.0% |      16 | `Node::dominates`                                                                                                                                        | `libjvm.dylib`            |
| 0.9% |      15 | `PhaseChaitin::gather_lrg_masks`                                                                                                                         | `libjvm.dylib`            |
| 0.9% |      15 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib` |
| 0.9% |      14 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`            |
| 0.9% |      14 | `PhaseChaitin::elide_copy`                                                                                                                               | `libjvm.dylib`            |
| 0.9% |      14 | `java_lang_Throwable::fill_in_stack_trace`                                                                                                               | `libjvm.dylib`            |
| 0.8% |      13 | `PhaseLive::compute`                                                                                                                                     | `libjvm.dylib`            |
| 0.7% |      12 | `ciObjectFactory::get_metadata`                                                                                                                          | `libjvm.dylib`            |
| 0.7% |      12 | `PhaseIdealLoop::build_loop_early`                                                                                                                       | `libjvm.dylib`            |
| 0.7% |      11 | `PhaseAggressiveCoalesce::insert_copies`                                                                                                                 | `libjvm.dylib`            |
| 0.6% |      10 | `PhaseIdealLoop::build_loop_late`                                                                                                                        | `libjvm.dylib`            |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|    % | Samples | Function                                    | Location       |
| ---: | ------: | ------------------------------------------- | -------------- |
| 1.7% |      28 | `PhaseChaitin::Split`                       | `libjvm.dylib` |
| 1.6% |      26 | `IndexSetIterator::advance_and_next`        | `libjvm.dylib` |
| 1.1% |      18 | `PhaseChaitin::build_ifg_physical`          | `libjvm.dylib` |
| 1.1% |      18 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
| 1.0% |      17 | `PhaseChaitin::post_allocate_copy_removal`  | `libjvm.dylib` |
| 1.0% |      16 | `Node::dominates`                           | `libjvm.dylib` |
| 0.9% |      15 | `PhaseChaitin::gather_lrg_masks`            | `libjvm.dylib` |
| 0.9% |      14 | `PhaseChaitin::elide_copy`                  | `libjvm.dylib` |
| 0.8% |      13 | `PhaseLive::compute`                        | `libjvm.dylib` |
| 0.7% |      12 | `ciObjectFactory::get_metadata`             | `libjvm.dylib` |
| 0.7% |      12 | `PhaseIdealLoop::build_loop_early`          | `libjvm.dylib` |
| 0.7% |      11 | `PhaseAggressiveCoalesce::insert_copies`    | `libjvm.dylib` |
| 0.6% |      10 | `PhaseIdealLoop::build_loop_late`           | `libjvm.dylib` |
| 0.6% |      10 | `Node_Backward_Iterator::next`              | `libjvm.dylib` |
| 0.6% |      10 | `PhaseIdealLoop::Dominators`                | `libjvm.dylib` |
| 0.6% |       9 | `Unique_Node_List::remove`                  | `libjvm.dylib` |
| 0.6% |       9 | `RegionNode::is_CFG`                        | `libjvm.dylib` |
| 0.5% |       8 | `NodeHash::hash_find_insert`                | `libjvm.dylib` |
| 0.5% |       8 | `Matcher::xform`                            | `libjvm.dylib` |
| 0.4% |       7 | `PhaseIFG::effective_degree`                | `libjvm.dylib` |

##### Native

|    % | Samples | Function                                                                                                                                                 | Location                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 1.5% |      24 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 1.3% |      21 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
| 1.2% |      19 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| 1.0% |      16 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 0.9% |      15 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
| 0.9% |      14 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`             |
| 0.9% |      14 | `java_lang_Throwable::fill_in_stack_trace`                                                                                                               | `libjvm.dylib`             |
| 0.6% |       9 | `_platform_memmove`                                                                                                                                      | `libsystem_platform.dylib` |
| 0.6% |       9 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `libjvm.dylib`             |
| 0.5% |       8 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
| 0.4% |       7 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
| 0.4% |       7 | `sys_icache_invalidate`                                                                                                                                  | `libsystem_platform.dylib` |
| 0.4% |       7 | `frame::sender_for_compiled_frame`                                                                                                                       | `libjvm.dylib`             |
| 0.4% |       6 | `posix_madvise`                                                                                                                                          | `libsystem_kernel.dylib`   |
| 0.4% |       6 | `bsearch`                                                                                                                                                | `libsystem_c.dylib`        |
| 0.3% |       5 | `vmSymbols::find_sid`                                                                                                                                    | `libjvm.dylib`             |
| 0.3% |       5 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>`                             | `libjvm.dylib`             |
| 0.2% |       4 | `Dict::Insert`                                                                                                                                           | `libjvm.dylib`             |
| 0.2% |       4 | `ResourceBitMap::ResourceBitMap`                                                                                                                         | `libjvm.dylib`             |
| 0.2% |       4 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |

##### Standard library

|    % | Samples | Function                                                                                                      | Location                                                         |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 0.6% |      10 | `cast(Object)`                                                                                                | `java.lang.Class`                                                |
| 0.6% |       9 | `invokeBasic(Object[])`                                                                                       | `java.lang.invoke.MethodHandle`                                  |
| 0.3% |       5 | `newInstance(Class, int)`                                                                                     | `java.lang.reflect.Array`                                        |
| 0.2% |       4 | `collector(Object, Object, Object)`                                                                           | `java.lang.invoke.LambdaForm$MH.0x00000078010a1000`              |
| 0.2% |       4 | `collector(Object, Object)`                                                                                   | `java.lang.invoke.LambdaForm$MH.0x0000007801031800`              |
| 0.2% |       3 | `<init>(MethodType, LambdaForm)`                                                                              | `java.lang.invoke.MethodHandle`                                  |
| 0.2% |       3 | `invokeVirtual(Object, Object)`                                                                               | `java.lang.invoke.DirectMethodHandle$Holder`                     |
| 0.2% |       3 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`           |
| 0.2% |       3 | `sameClasses(Class[], Object[])`                                                                              | `org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures` |
| 0.2% |       3 | `of(byte, int, int)`                                                                                          | `java.lang.invoke.LambdaFormEditor$TransformKey`                 |
| 0.2% |       3 | `getMethods(Class, String)`                                                                                   | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`          |
| 0.1% |       2 | `setCallSiteTarget()`                                                                                         | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`        |
| 0.1% |       2 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)`                                     | `java.lang.invoke.MethodHandleImpl`                              |
| 0.1% |       2 | `reinvoke(Object, Object, Object)`                                                                            | `java.lang.invoke.LambdaForm$MH.0x00000078010aa800`              |
| 0.1% |       2 | `invokeMethod(Class, Object, String, Object[], boolean, boolean)`                                             | `org.codehaus.groovy.runtime.metaclass.ClosureMetaClass`         |
| 0.1% |       2 | `invokeMethod(Object, String, Object[])`                                                                      | `groovy.lang.MetaClassImpl`                                      |
| 0.1% |       2 | `compile()`                                                                                                   | `java.util.regex.Pattern`                                        |
| 0.1% |       2 | `dropArgumentsToMatch(MethodHandle, int, Class[], int, boolean)`                                              | `java.lang.invoke.MethodHandles`                                 |
| 0.1% |       2 | `putVal(Object, Object, boolean)`                                                                             | `java.util.concurrent.ConcurrentHashMap`                         |
| 0.1% |       2 | `invoke(Object, Object, Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x00000078010d5c00`              |

##### JIT

|    % | Samples | Function                      | Location    |
| ---: | ------: | ----------------------------- | ----------- |
| 0.2% |       4 | `I2C/C2I adapters(0xb)`       | `<unknown>` |
| 0.2% |       4 | `itable stub`                 | `<unknown>` |
| 0.1% |       2 | `I2C/C2I adapters(0xbb)`      | `<unknown>` |
| 0.1% |       2 | `zero_blocks`                 | `<unknown>` |
| 0.1% |       2 | `I2C/C2I adapters(0xba)`      | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbaabbbb)` | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbbb)`    | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbb)`     | `<unknown>` |

#### Lines

Lines with the largest contribution to each function's self samples.

##### `cast(Object)` (`java.lang.Class`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |      10 | `java.lang.Class:4068` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|      % | Samples | Location                     |
| -----: | ------: | ---------------------------- |
| 100.0% |       5 | `java.lang.reflect.Array:78` |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Location                            |
| ----: | ------: | ----------------------------------- |
| 66.7% |       2 | `java.lang.invoke.MethodHandle:479` |
| 33.3% |       1 | `java.lang.invoke.MethodHandle:480` |

##### `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|     % | Samples | Location                                                    |
| ----: | ------: | ----------------------------------------------------------- |
| 66.7% |       2 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1785` |
| 33.3% |       1 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1795` |

##### `sameClasses(Class[], Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures`)

|      % | Samples | Location                                                             |
| -----: | ------: | -------------------------------------------------------------------- |
| 100.0% |       3 | `org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures:224` |

##### `of(byte, int, int)` (`java.lang.invoke.LambdaFormEditor$TransformKey`)

|      % | Samples | Location                                             |
| -----: | ------: | ---------------------------------------------------- |
| 100.0% |       3 | `java.lang.invoke.LambdaFormEditor$TransformKey:183` |

##### `getMethods(Class, String)` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

|     % | Samples | Location                                                    |
| ----: | ------: | ----------------------------------------------------------- |
| 66.7% |       2 | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex:202` |
| 33.3% |       1 | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex:201` |

##### `setCallSiteTarget()` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 50.0% |       1 | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector:1024` |
| 50.0% |       1 | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector:1023` |

##### `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

|     % | Samples | Location                                |
| ----: | ------: | --------------------------------------- |
| 50.0% |       1 | `java.lang.invoke.MethodHandleImpl:355` |
| 50.0% |       1 | `java.lang.invoke.MethodHandleImpl:318` |

##### `invokeMethod(Class, Object, String, Object[], boolean, boolean)` (`org.codehaus.groovy.runtime.metaclass.ClosureMetaClass`)

|     % | Samples | Location                                                     |
| ----: | ------: | ------------------------------------------------------------ |
| 50.0% |       1 | `org.codehaus.groovy.runtime.metaclass.ClosureMetaClass:264` |
| 50.0% |       1 | `org.codehaus.groovy.runtime.metaclass.ClosureMetaClass:251` |

##### `invokeMethod(Object, String, Object[])` (`groovy.lang.MetaClassImpl`)

|      % | Samples | Location                         |
| -----: | ------: | -------------------------------- |
| 100.0% |       2 | `groovy.lang.MetaClassImpl:1007` |

##### `compile()` (`java.util.regex.Pattern`)

|     % | Samples | Location                       |
| ----: | ------: | ------------------------------ |
| 50.0% |       1 | `java.util.regex.Pattern:1922` |
| 50.0% |       1 | `java.util.regex.Pattern:1920` |

##### `dropArgumentsToMatch(MethodHandle, int, Class[], int, boolean)` (`java.lang.invoke.MethodHandles`)

|     % | Samples | Location                              |
| ----: | ------: | ------------------------------------- |
| 50.0% |       1 | `java.lang.invoke.MethodHandles:5479` |
| 50.0% |       1 | `java.lang.invoke.MethodHandles:5452` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

|     % | Samples | Location                                      |
| ----: | ------: | --------------------------------------------- |
| 50.0% |       1 | `java.util.concurrent.ConcurrentHashMap:1037` |
| 50.0% |       1 | `java.util.concurrent.ConcurrentHashMap:1011` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      28 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 26.9% |       7 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |
| 19.2% |       5 | `PhaseIFG::SquareUp`               | `libjvm.dylib` |
| 19.2% |       5 | `PhaseIFG::effective_degree`       | `libjvm.dylib` |
| 15.4% |       4 | `PhaseLive::add_liveout`           | `libjvm.dylib` |
|  3.8% |       1 | `PhaseIFG::remove_node`            | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |      24 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|    % | Samples | Caller                             | Location       |
| ---: | ------: | ---------------------------------- | -------------- |
| 4.8% |       1 | `Compile::flatten_alias_type`      | `libjvm.dylib` |
| 4.8% |       1 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |
| 4.8% |       1 | `GraphKit::gen_subtype_check`      | `libjvm.dylib` |
| 4.8% |       1 | `PhaseChaitin::get_spillcopy_wide` | `libjvm.dylib` |
| 4.8% |       1 | `Node::clone`                      | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 63.2% |      12 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
| 36.8% |       7 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      18 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|     % | Samples | Caller                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 94.4% |      17 | `PhaseIdealLoop::build_loop_late`    | `libjvm.dylib` |
|  5.6% |       1 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      17 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |      16 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `Node::dominates` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |      16 | `MemNode::all_controls_dominate` | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      15 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                                   | Location                                                                      |
| ----: | ------: | ---------------------------------------- | ----------------------------------------------------------------------------- |
| 20.0% |       3 | `JVM_NewArray`                           | `libjvm.dylib`                                                                |
| 13.3% |       2 | `Unsafe_AllocateInstance`                | `libjvm.dylib`                                                                |
| 13.3% |       2 | `InterpreterRuntime::ldc`                | `libjvm.dylib`                                                                |
|  6.7% |       1 | `Unsafe_CompareAndSetReference`          | `libjvm.dylib`                                                                |
|  6.7% |       1 | `<init>(XSDHandler, XSAttributeChecker)` | `com.sun.org.apache.xerces.internal.impl.xs.traversers.XSDAttributeTraverser` |

##### `Arena::contains` (`libjvm.dylib`)

|     % | Samples | Caller           | Location       |
| ----: | ------: | ---------------- | -------------- |
| 92.9% |      13 | `Matcher::xform` | `libjvm.dylib` |
|  7.1% |       1 | `Matcher::match` | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|     % | Samples | Caller                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 92.9% |      13 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  7.1% |       1 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |

##### `java_lang_Throwable::fill_in_stack_trace` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |      14 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      13 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|     % | Samples | Caller                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 41.7% |       5 | `ciEnv::get_klass_by_index_impl`       | `libjvm.dylib` |
| 16.7% |       2 | `ciMethod::method_data`                | `libjvm.dylib` |
|  8.3% |       1 | `ciObjectFactory::create_new_metadata` | `libjvm.dylib` |
|  8.3% |       1 | `ciMethod::ensure_method_data`         | `libjvm.dylib` |
|  8.3% |       1 | `ciEnv::get_klass_by_name_impl`        | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      12 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      11 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      10 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Node_Backward_Iterator::next` (`libjvm.dylib`)

|     % | Samples | Caller                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 80.0% |       8 | `PhaseCFG::schedule_late`         | `libjvm.dylib` |
| 10.0% |       1 | `PhaseCFG::global_code_motion`    | `libjvm.dylib` |
| 10.0% |       1 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      10 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `cast(Object)` (`java.lang.Class`)

|      % | Samples | Caller                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |      10 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `Unique_Node_List::remove` (`libjvm.dylib`)

|      % | Samples | Caller                                    | Location       |
| -----: | ------: | ----------------------------------------- | -------------- |
| 100.0% |       9 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |

##### `RegionNode::is_CFG` (`libjvm.dylib`)

|     % | Samples | Caller                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 44.4% |       4 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
| 22.2% |       2 | `PhaseIdealLoop::Dominators`         | `libjvm.dylib` |
| 22.2% |       2 | `ProjNode::is_uncommon_trap_proj`    | `libjvm.dylib` |
| 11.1% |       1 | `Node::unique_ctrl_out_or_null`      | `libjvm.dylib` |

##### `_platform_memmove` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                    | Location            |
| ----: | ------: | ----------------------------------------- | ------------------- |
| 33.3% |       3 | `__vfprintf`                              | `libsystem_c.dylib` |
| 11.1% |       1 | `Node::add_req_batch`                     | `libjvm.dylib`      |
| 11.1% |       1 | `Java_java_lang_ClassLoader_defineClass0` | `libjava.dylib`     |
| 11.1% |       1 | `nmethod::nmethod`                        | `libjvm.dylib`      |
| 11.1% |       1 | `os::strdup`                              | `libjvm.dylib`      |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|     % | Samples | Caller                                                              | Location       |
| ----: | ------: | ------------------------------------------------------------------- | -------------- |
| 66.7% |       6 | `G1ParScanThreadState::trim_queue_to_threshold`                     | `libjvm.dylib` |
| 11.1% |       1 | `G1ParScanThreadState::steal_and_trim_queue`                        | `libjvm.dylib` |
| 11.1% |       1 | `void G1ParCopyClosure<(G1Barrier)1, false>::do_oop_work<oopDesc*>` | `libjvm.dylib` |
| 11.1% |       1 | `G1ScanHRForRegionClosure::scan_memregion`                          | `libjvm.dylib` |

##### `invokeBasic(Object[])` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Caller                                                  | Location                                             |
| ----: | ------: | ------------------------------------------------------- | ---------------------------------------------------- |
| 22.2% |       2 | `invokeExact_MT(Object, Object, Object)`                | `java.lang.invoke.Invokers$Holder`                   |
| 11.1% |       1 | `makeGuardWithCatch(MethodHandle, Class, MethodHandle)` | `java.lang.invoke.MethodHandleImpl`                  |
| 11.1% |       1 | `invokeExact_MT(Object, Object, Object, Object)`        | `java.lang.invoke.Invokers$Holder`                   |
| 11.1% |       1 | `linkToCallSite(Object, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x00000078010c8400`  |
| 11.1% |       1 | `invokeVirtual(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$DMH.0x0000007801097c00` |

##### `NodeHash::hash_find_insert` (`libjvm.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 62.5% |       5 | `PhaseIterGVN::transform_old`    | `libjvm.dylib` |
| 37.5% |       3 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       8 | `Matcher::match` | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|     % | Samples | Caller                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 25.0% |       2 | `MemAllocator::allocate`          | `libjvm.dylib` |
| 12.5% |       1 | `PhaseCFG::build_cfg`             | `libjvm.dylib` |
| 12.5% |       1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 12.5% |       1 | `GraphKit::make_slow_call_ex`     | `libjvm.dylib` |
| 12.5% |       1 | `ConstMethod::copy_stackmap_data` | `libjvm.dylib` |

##### `PhaseIFG::effective_degree` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       7 | `PhaseIFG::Compute_Effective_Degree` | `libjvm.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|      % | Samples | Caller                                  | Location       |
| -----: | ------: | --------------------------------------- | -------------- |
| 100.0% |       7 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |

##### `sys_icache_invalidate` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                      | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
| 42.9% |       3 | `nmethod::nmethod`                          | `libjvm.dylib` |
| 28.6% |       2 | `nmethod::oops_do_process_weak`             | `libjvm.dylib` |
| 14.3% |       1 | `InlineCacheBuffer::create_transition_stub` | `libjvm.dylib` |
| 14.3% |       1 | `SharedRuntime::reresolve_call_site`        | `libjvm.dylib` |

##### `frame::sender_for_compiled_frame` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       7 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `posix_madvise` (`libsystem_kernel.dylib`)

|      % | Samples | Caller        | Location                 |
| -----: | ------: | ------------- | ------------------------ |
| 100.0% |       6 | `free_medium` | `libsystem_malloc.dylib` |

##### `bsearch` (`libsystem_c.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |       6 | `encoding_for_logical_immediate` | `libjvm.dylib` |

##### `vmSymbols::find_sid` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |       5 | `ciObjectFactory::get_symbol` | `libjvm.dylib` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                            | Location       |
| -----: | ------: | ------------------------------------------------- | -------------- |
| 100.0% |       5 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|      % | Samples | Caller                              | Location                                             |
| -----: | ------: | ----------------------------------- | ---------------------------------------------------- |
| 100.0% |       5 | `invokeStatic(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000780102b400` |

##### `Dict::Insert` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       4 | `Type::hashcons` | `libjvm.dylib` |

##### `ResourceBitMap::ResourceBitMap` (`libjvm.dylib`)

|     % | Samples | Caller                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 25.0% |       1 | `MethodLiveness::get_liveness_at`  | `libjvm.dylib` |
| 25.0% |       1 | `Parse::Parse`                     | `libjvm.dylib` |
| 25.0% |       1 | `BlockListBuilder::make_block_at`  | `libjvm.dylib` |
| 25.0% |       1 | `Optimizer::eliminate_null_checks` | `libjvm.dylib` |

##### `inflate_fast` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       4 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `collector(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000078010a1000`)

|     % | Samples | Caller                                   | Location                                            |
| ----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 25.0% |       1 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007801292000` |
| 25.0% |       1 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000078010a1800` |
| 25.0% |       1 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000078010ab000` |
| 25.0% |       1 | `invoke(Object, Object, int)`            | `java.lang.invoke.LambdaForm$MH.0x00000078010cb800` |

##### `collector(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007801031800`)

|     % | Samples | Caller                   | Location                                            |
| ----: | ------: | ------------------------ | --------------------------------------------------- |
| 50.0% |       2 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000780109b800` |
| 25.0% |       1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000780109b400` |
| 25.0% |       1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000780108e000` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|     % | Samples | Caller                            | Location                                             |
| ----: | ------: | --------------------------------- | ---------------------------------------------------- |
| 25.0% |       1 | `calcFirstGroovySuperClass(List)` | `groovy.lang.MetaClassImpl`                          |
| 25.0% |       1 | `isValidMethod(Class[])`          | `org.codehaus.groovy.reflection.ParameterTypes`      |
| 25.0% |       1 | `<init>()`                        | `org.codenarc.rule.formatting.IndentationAstVisitor` |

##### `itable stub` (`<unknown>`)

|     % | Samples | Caller                                        | Location                                                         |
| ----: | ------: | --------------------------------------------- | ---------------------------------------------------------------- |
| 25.0% |       1 | `accept(Object)`                              | `java.util.stream.ReferencePipeline$3$1`                         |
| 25.0% |       1 | `visit(GroovyCodeVisitor)`                    | `org.codehaus.groovy.ast.stmt.BlockStatement`                    |
| 25.0% |       1 | `isSameMetaClass(MetaClass, Object)`          | `org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures` |
| 25.0% |       1 | `evaluate(Spliterator, boolean, IntFunction)` | `java.util.stream.AbstractPipeline`                              |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

|      % | Samples | Caller                           | Location                             |
| -----: | ------: | -------------------------------- | ------------------------------------ |
| 100.0% |       3 | `<init>(MethodType, LambdaForm)` | `java.lang.invoke.BoundMethodHandle` |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Caller           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |       3 | `invoke(Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007801089400` |

##### `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|      % | Samples | Caller                                                                                                        | Location                                               |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       3 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `sameClasses(Class[], Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures`)

|      % | Samples | Caller                                 | Location                                     |
| -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% |       3 | `invokeStatic(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `of(byte, int, int)` (`java.lang.invoke.LambdaFormEditor$TransformKey`)

|      % | Samples | Caller                                       | Location                            |
| -----: | ------: | -------------------------------------------- | ----------------------------------- |
| 100.0% |       3 | `addArgumentForm(int, LambdaForm$BasicType)` | `java.lang.invoke.LambdaFormEditor` |

##### `getMethods(Class, String)` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

|      % | Samples | Caller                                                   | Location                    |
| -----: | ------: | -------------------------------------------------------- | --------------------------- |
| 100.0% |       3 | `getMethodWithCaching(Class, String, Object[], boolean)` | `groovy.lang.MetaClassImpl` |

##### `setCallSiteTarget()` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

|      % | Samples | Caller                                                                                       | Location                                        |
| -----: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| 100.0% |       2 | `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

|      % | Samples | Caller                                                            | Location                            |
| -----: | ------: | ----------------------------------------------------------------- | ----------------------------------- |
| 100.0% |       2 | `makePairwiseConvert(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `reinvoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000078010aa800`)

|      % | Samples | Caller                          | Location                                            |
| -----: | ------: | ------------------------------- | --------------------------------------------------- |
| 100.0% |       2 | `guard(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000078010aac00` |

##### `invokeMethod(Class, Object, String, Object[], boolean, boolean)` (`org.codehaus.groovy.runtime.metaclass.ClosureMetaClass`)

|      % | Samples | Caller                                   | Location                    |
| -----: | ------: | ---------------------------------------- | --------------------------- |
| 100.0% |       2 | `invokeMethod(Object, String, Object[])` | `groovy.lang.MetaClassImpl` |

##### `invokeMethod(Object, String, Object[])` (`groovy.lang.MetaClassImpl`)

|      % | Samples | Caller                                                    | Location                                             |
| -----: | ------: | --------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |       2 | `invokeInterface(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007801095000` |

##### `compile()` (`java.util.regex.Pattern`)

|      % | Samples | Caller                | Location                  |
| -----: | ------: | --------------------- | ------------------------- |
| 100.0% |       2 | `<init>(String, int)` | `java.util.regex.Pattern` |

##### `dropArgumentsToMatch(MethodHandle, int, Class[], int, boolean)` (`java.lang.invoke.MethodHandles`)

|     % | Samples | Caller                                                    | Location                         |
| ----: | ------: | --------------------------------------------------------- | -------------------------------- |
| 50.0% |       1 | `catchException(MethodHandle, Class, MethodHandle)`       | `java.lang.invoke.MethodHandles` |
| 50.0% |       1 | `guardWithTest(MethodHandle, MethodHandle, MethodHandle)` | `java.lang.invoke.MethodHandles` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

|      % | Samples | Caller                        | Location                                 |
| -----: | ------: | ----------------------------- | ---------------------------------------- |
| 100.0% |       2 | `putIfAbsent(Object, Object)` | `java.util.concurrent.ConcurrentHashMap` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000078010d5c00`)

|      % | Samples | Caller                                           | Location                           |
| -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |       2 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|     % | Samples | Caller                               | Location                     |
| ----: | ------: | ------------------------------------ | ---------------------------- |
| 50.0% |       1 | `<init>(ClassValue$Version, Object)` | `java.lang.ClassValue$Entry` |

##### `zero_blocks` (`<unknown>`)

|     % | Samples | Caller                                   | Location                                    |
| ----: | ------: | ---------------------------------------- | ------------------------------------------- |
| 50.0% |       1 | `enlarge(int)`                           | `jdk.internal.org.objectweb.asm.ByteVector` |
| 50.0% |       1 | `allocateUninitializedArray(Class, int)` | `jdk.internal.misc.Unsafe`                  |

##### `I2C/C2I adapters(0xba)` (`<unknown>`)

|     % | Samples | Caller                   | Location                                            |
| ----: | ------: | ------------------------ | --------------------------------------------------- |
| 50.0% |       1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007801344800` |
| 50.0% |       1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000780136e800` |

##### `I2C/C2I adapters(0xbaabbbb)` (`<unknown>`)

|      % | Samples | Caller                 | Location                                       |
| -----: | ------: | ---------------------- | ---------------------------------------------- |
| 100.0% |       1 | `generateInnerClass()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `I2C/C2I adapters(0xbbbb)` (`<unknown>`)

|      % | Samples | Caller                                   | Location                                       |
| -----: | ------: | ---------------------------------------- | ---------------------------------------------- |
| 100.0% |       1 | `collectViolations(SourceCode, RuleSet)` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |

##### `I2C/C2I adapters(0xbbb)` (`<unknown>`)

|      % | Samples | Caller                                                                                                        | Location                                               |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       1 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                                                                      | Location                                             |
| ----: | ------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 70.3% |   1,143 | `_pthread_start`                                                                              | `libsystem_pthread.dylib`                            |
| 70.3% |   1,143 | `thread_start`                                                                                | `libsystem_pthread.dylib`                            |
| 70.2% |   1,142 | `Thread::call_run`                                                                            | `libjvm.dylib`                                       |
| 70.2% |   1,142 | `thread_native_entry`                                                                         | `libjvm.dylib`                                       |
| 67.1% |   1,092 | `JavaThread::thread_main_inner`                                                               | `libjvm.dylib`                                       |
| 66.9% |   1,089 | `CompileBroker::compiler_thread_loop`                                                         | `libjvm.dylib`                                       |
| 65.6% |   1,068 | `CompileBroker::invoke_compiler_on_method`                                                    | `libjvm.dylib`                                       |
| 55.3% |     899 | `C2Compiler::compile_method`                                                                  | `libjvm.dylib`                                       |
| 55.1% |     897 | `Compile::Compile`                                                                            | `libjvm.dylib`                                       |
| 28.3% |     460 | `main(String[])`                                                                              | `org.codenarc.CodeNarc`                              |
| 28.3% |     460 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| 28.2% |     459 | `Compile::Code_Gen`                                                                           | `libjvm.dylib`                                       |
| 28.1% |     458 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007801088800` |
| 28.1% |     457 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 28.0% |     456 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000078010a1800`  |
| 28.0% |     456 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 27.9% |     454 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x00000078010aa000`  |
| 27.9% |     454 | `reinvoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000078010aa800`  |
| 27.9% |     454 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x00000078010aac00`  |
| 27.4% |     446 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000780108e000`  |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|     % | Samples | Function                                   | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 66.9% |   1,089 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
| 65.6% |   1,068 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
| 55.3% |     899 | `C2Compiler::compile_method`               | `libjvm.dylib` |
| 55.1% |     897 | `Compile::Compile`                         | `libjvm.dylib` |
| 28.2% |     459 | `Compile::Code_Gen`                        | `libjvm.dylib` |
| 20.1% |     327 | `Compile::Optimize`                        | `libjvm.dylib` |
| 15.3% |     249 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
| 11.6% |     188 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
| 10.2% |     166 | `Compilation::compile_method`              | `libjvm.dylib` |
| 10.2% |     166 | `Compilation::Compilation`                 | `libjvm.dylib` |
| 10.1% |     165 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
| 10.1% |     165 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
|  9.0% |     147 | `Compilation::compile_java_method`         | `libjvm.dylib` |
|  6.5% |     105 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
|  6.0% |      97 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |
|  5.1% |      83 | `Compile::optimize_loops`                  | `libjvm.dylib` |
|  5.0% |      82 | `Matcher::match`                           | `libjvm.dylib` |
|  4.0% |      65 | `Compilation::build_hir`                   | `libjvm.dylib` |
|  3.6% |      58 | `Matcher::xform`                           | `libjvm.dylib` |
|  3.5% |      57 | `PhaseOutput::Output`                      | `libjvm.dylib` |

##### Native

|     % | Samples | Function                                    | Location                  |
| ----: | ------: | ------------------------------------------- | ------------------------- |
| 70.3% |   1,143 | `_pthread_start`                            | `libsystem_pthread.dylib` |
| 70.3% |   1,143 | `thread_start`                              | `libsystem_pthread.dylib` |
| 70.2% |   1,142 | `Thread::call_run`                          | `libjvm.dylib`            |
| 70.2% |   1,142 | `thread_native_entry`                       | `libjvm.dylib`            |
| 67.1% |   1,092 | `JavaThread::thread_main_inner`             | `libjvm.dylib`            |
| 10.2% |     166 | `Compiler::compile_method`                  | `libjvm.dylib`            |
|  5.8% |      94 | `Parse::Parse`                              | `libjvm.dylib`            |
|  5.8% |      94 | `ParseGenerator::generate`                  | `libjvm.dylib`            |
|  5.7% |      92 | `Parse::do_one_block`                       | `libjvm.dylib`            |
|  5.7% |      92 | `Parse::do_all_blocks`                      | `libjvm.dylib`            |
|  5.2% |      85 | `Parse::do_call`                            | `libjvm.dylib`            |
|  3.5% |      57 | `PredictedCallGenerator::generate`          | `libjvm.dylib`            |
|  3.3% |      53 | `IR::IR`                                    | `libjvm.dylib`            |
|  3.2% |      52 | `IRScope::IRScope`                          | `libjvm.dylib`            |
|  3.1% |      50 | `WorkerThread::run`                         | `libjvm.dylib`            |
|  2.4% |      39 | `JVM_FillInStackTrace`                      | `libjvm.dylib`            |
|  2.4% |      39 | `Java_java_lang_Throwable_fillInStackTrace` | `libjava.dylib`           |
|  2.3% |      38 | `java_lang_Throwable::fill_in_stack_trace`  | `libjvm.dylib`            |
|  2.0% |      32 | `G1EvacuateRegionsBaseTask::work`           | `libjvm.dylib`            |
|  1.5% |      25 | `Dict::Insert`                              | `libjvm.dylib`            |

##### Standard library

|     % | Samples | Function                                                                                      | Location                                             |
| ----: | ------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 28.3% |     460 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| 28.1% |     458 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007801088800` |
| 28.1% |     457 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 28.0% |     456 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000078010a1800`  |
| 28.0% |     456 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 27.9% |     454 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x00000078010aa000`  |
| 27.9% |     454 | `reinvoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000078010aa800`  |
| 27.9% |     454 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x00000078010aac00`  |
| 27.4% |     446 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000780108e000`  |
| 27.4% |     446 | `linkToCallSite(Object, Object)`                                                              | `java.lang.invoke.Invokers$Holder`                   |
| 27.4% |     446 | `invokeVirtual(Object, Object, Object, Object)`                                               | `java.lang.invoke.LambdaForm$DMH.0x0000007801094400` |
| 27.4% |     445 | `invokeVirtual(Object, Object, Object)`                                                       | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 27.4% |     445 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000078010c6400`  |
| 27.4% |     445 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x00000078010c7000`  |
| 27.3% |     444 | `guardWithCatch(Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x0000007801098400`  |
| 27.3% |     444 | `reinvoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000007801099c00`  |
| 27.3% |     444 | `guard(Object, Object)`                                                                       | `java.lang.invoke.LambdaForm$MH.0x000000780109a000`  |
| 27.3% |     444 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000078010a9800`  |
| 27.0% |     440 | `invokeVirtual(Object, Object)`                                                               | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 27.0% |     440 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000780109bc00`  |

##### JIT

|    % | Samples | Function                      | Location    |
| ---: | ------: | ----------------------------- | ----------- |
| 0.2% |       4 | `I2C/C2I adapters(0xb)`       | `<unknown>` |
| 0.2% |       4 | `itable stub`                 | `<unknown>` |
| 0.1% |       2 | `I2C/C2I adapters(0xbb)`      | `<unknown>` |
| 0.1% |       2 | `zero_blocks`                 | `<unknown>` |
| 0.1% |       2 | `I2C/C2I adapters(0xba)`      | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbaabbbb)` | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbbb)`    | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbb)`     | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Caller         | Location                  |
| -----: | ------: | -------------- | ------------------------- |
| 100.0% |   1,143 | `thread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |   1,142 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Caller           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   1,142 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   1,092 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |   1,089 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |   1,068 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Caller                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 99.9% |     898 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  0.1% |       1 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |     897 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|     % | Samples | Caller                                                                                          | Location                                             |
| ----: | ------: | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 99.6% |     458 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`     | `java.lang.invoke.LambdaForm$DMH.0x0000007801088800` |
|  0.7% |       3 | `invokeStaticInit(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007801088c00` |
|  0.2% |       1 | `unknown`                                                                                       | `<unknown>`                                          |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     459 | `Compile::Compile` | `libjvm.dylib` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007801088800`)

|     % | Samples | Caller                                           | Location                                            |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 99.6% |     456 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000078010a1800` |
| 97.2% |     445 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000780108e000` |
| 84.1% |     385 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000078010d5c00` |
| 81.7% |     374 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007801288800` |
| 59.6% |     273 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000780138cc00` |

##### `invokeExact_MT(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                                                                                           | Location                                               |
| -----: | ------: | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| 100.0% |     457 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface`        |
|  73.3% |     335 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`        |
|   1.3% |       6 | `invokeImpl(Object, Object[])`                                                                   | `jdk.internal.reflect.DirectMethodHandleAccessor`      |
|   0.9% |       4 | `invokeImpl(Object[])`                                                                           | `jdk.internal.reflect.DirectConstructorHandleAccessor` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000078010a1800`)

|      % | Samples | Caller                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     456 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|   8.6% |      39 | `reinvoke(Object, Object, Object)`       | `java.lang.invoke.LambdaForm$MH.0x00000078010aa800` |

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                                     | Location                                                                   |
| -----: | ------: | ------------------------------------------ | -------------------------------------------------------------------------- |
| 100.0% |     456 | `main(String[])`                           | `org.codenarc.CodeNarc`                                                    |
|  83.3% |     380 | `execute()`                                | `org.codenarc.CodeNarcRunner`                                              |
|  81.1% |     370 | `processDirectory(String, RuleSet)`        | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                           |
|  46.7% |     213 | `measureRuleProcessingTime(Rule, Closure)` | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
|  40.6% |     185 | `doCall(Object)`                           | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |

##### `guardWithCatch(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000078010aa000`)

|      % | Samples | Caller                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     454 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000078010aa800` |
|  86.6% |     393 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `reinvoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000078010aa800`)

|      % | Samples | Caller                          | Location                                            |
| -----: | ------: | ------------------------------- | --------------------------------------------------- |
| 100.0% |     454 | `guard(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000078010aac00` |
|  98.0% |     445 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x00000078010c7000` |
|  94.7% |     430 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x00000078010d4c00` |
|  52.9% |     240 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x00000078010abc00` |
|  12.3% |      56 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x00000078010d9c00` |

##### `guard(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000078010aac00`)

|      % | Samples | Caller                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     454 | `reinvoke(Object, Object, Object)`       | `java.lang.invoke.LambdaForm$MH.0x00000078010aa800` |
|  86.6% |     393 | `delegate(Object, Object, Object)`       | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   0.2% |       1 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000780108e000`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     446 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|   1.1% |       5 | `reinvoke(Object, Object)`       | `java.lang.invoke.LambdaForm$MH.0x0000007801099c00` |

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Caller                   | Location                                 |
| ----: | ------: | ------------------------ | ---------------------------------------- |
| 98.9% |     441 | `execute(String[])`      | `org.codenarc.CodeNarc`                  |
| 11.0% |      49 | `execute()`              | `org.codenarc.CodeNarcRunner`            |
| 10.5% |      47 | `getAst()`               | `org.codenarc.source.AbstractSourceCode` |
|  9.9% |      44 | `createInitialRuleSet()` | `org.codenarc.CodeNarcRunner`            |
|  9.9% |      44 | `buildRuleSet()`         | `org.codenarc.CodeNarcRunner`            |

##### `invokeVirtual(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007801094400`)

|     % | Samples | Caller                                           | Location                                            |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 99.6% |     444 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000078010a9800` |
| 79.8% |     356 | `guardWithCatch(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000078010d4000` |
|  2.0% |       9 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000078010c9000` |
|  0.9% |       4 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000078013dc000` |
|  0.9% |       4 | `invoke(Object, Object, int, Object)`            | `java.lang.invoke.LambdaForm$MH.0x0000007801292400` |

##### `invokeVirtual(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     445 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000078010c6400` |
|   1.3% |       6 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000078010c7400` |
|   1.1% |       5 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000078010d5000` |
|   0.7% |       3 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007801121800` |
|   0.2% |       1 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000780153fc00` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000078010c6400`)

|      % | Samples | Caller                                           | Location                                            |
| -----: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 100.0% |     445 | `guardWithCatch(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000078010aa000` |
|   0.2% |       1 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000078010c7000`)

|      % | Samples | Caller                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |     445 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `guardWithCatch(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007801098400`)

|      % | Samples | Caller                     | Location                                            |
| -----: | ------: | -------------------------- | --------------------------------------------------- |
| 100.0% |     444 | `reinvoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007801099c00` |
|  10.4% |      46 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `reinvoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007801099c00`)

|      % | Samples | Caller                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |     444 | `guard(Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x000000780109a000` |
|  98.9% |     439 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000780109bc00` |
|  17.6% |      78 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000780109ac00` |

##### `guard(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000780109a000`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     444 | `reinvoke(Object, Object)`       | `java.lang.invoke.LambdaForm$MH.0x0000007801099c00` |
|  11.5% |      51 | `delegate(Object, Object)`       | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   3.6% |      16 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000078010a9800`)

|      % | Samples | Caller                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     444 | `guardWithCatch(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000078010aa000` |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Caller                           | Location                                            |
| ----: | ------: | -------------------------------- | --------------------------------------------------- |
| 99.8% |     439 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000780102b000` |
| 10.9% |      48 | `guardWithCatch(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007801098400` |
|  0.7% |       3 | `invoke(Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007801089400` |
|  0.5% |       2 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000078015dc800` |
|  0.2% |       1 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000078015e2c00` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000780109bc00`)

|      % | Samples | Caller                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |     440 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     327 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |     249 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 55.9% |     105 | `Compile::Optimize`       | `libjvm.dylib` |
| 44.1% |      83 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     166 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     166 | `Compiler::compile_method` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |     166 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |     165 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     165 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     147 | `Compilation::compile_method` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 61.9% |      65 | `Compile::Optimize`                        | `libjvm.dylib` |
| 19.0% |      20 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
| 11.4% |      12 | `PhaseMacroExpand::expand_macro_nodes`     | `libjvm.dylib` |
|  5.7% |       6 | `Compile::remove_speculative_types`        | `libjvm.dylib` |
|  1.9% |       2 | `Compile::process_for_post_loop_opts_igvn` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|     % | Samples | Caller                                            | Location       |
| ----: | ------: | ------------------------------------------------- | -------------- |
| 99.0% |      96 | `PhaseIterGVN::optimize`                          | `libjvm.dylib` |
|  1.0% |       1 | `PhaseIdealLoop::has_dominating_loop_limit_check` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      94 | `ParseGenerator::generate` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      94 | `Compile::Compile`                 | `libjvm.dylib` |
|  59.6% |      56 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
|  51.1% |      48 | `Parse::do_call`                   | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|      % | Samples | Caller                 | Location       |
| -----: | ------: | ---------------------- | -------------- |
| 100.0% |      92 | `Parse::do_all_blocks` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % | Samples | Caller         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |      92 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |      85 | `Parse::do_one_block` | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      83 | `Compile::Optimize` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      82 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      65 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |      58 | `Matcher::match` | `libjvm.dylib` |

##### `PhaseOutput::Output` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      57 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      57 | `Parse::do_call`                   | `libjvm.dylib` |
|  24.6% |      14 | `PredictedCallGenerator::generate` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |      53 | `Compilation::build_hir` | `libjvm.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

|      % | Samples | Caller   | Location       |
| -----: | ------: | -------- | -------------- |
| 100.0% |      52 | `IR::IR` | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      50 | `Thread::call_run` | `libjvm.dylib` |

##### `JVM_FillInStackTrace` (`libjvm.dylib`)

|      % | Samples | Caller                                      | Location        |
| -----: | ------: | ------------------------------------------- | --------------- |
| 100.0% |      39 | `Java_java_lang_Throwable_fillInStackTrace` | `libjava.dylib` |

##### `Java_java_lang_Throwable_fillInStackTrace` (`libjava.dylib`)

|      % | Samples | Caller                  | Location              |
| -----: | ------: | ----------------------- | --------------------- |
| 100.0% |      39 | `fillInStackTrace(int)` | `java.lang.Throwable` |

##### `java_lang_Throwable::fill_in_stack_trace` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |      38 | `JVM_FillInStackTrace`                     | `libjvm.dylib` |
|  97.4% |      37 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `G1EvacuateRegionsBaseTask::work` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      32 | `WorkerThread::run` | `libjvm.dylib` |

##### `Dict::Insert` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |      25 | `Type::hashcons` | `libjvm.dylib` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|     % | Samples | Caller                            | Location                                             |
| ----: | ------: | --------------------------------- | ---------------------------------------------------- |
| 25.0% |       1 | `calcFirstGroovySuperClass(List)` | `groovy.lang.MetaClassImpl`                          |
| 25.0% |       1 | `isValidMethod(Class[])`          | `org.codehaus.groovy.reflection.ParameterTypes`      |
| 25.0% |       1 | `<init>()`                        | `org.codenarc.rule.formatting.IndentationAstVisitor` |

##### `itable stub` (`<unknown>`)

|     % | Samples | Caller                                        | Location                                                         |
| ----: | ------: | --------------------------------------------- | ---------------------------------------------------------------- |
| 25.0% |       1 | `accept(Object)`                              | `java.util.stream.ReferencePipeline$3$1`                         |
| 25.0% |       1 | `visit(GroovyCodeVisitor)`                    | `org.codehaus.groovy.ast.stmt.BlockStatement`                    |
| 25.0% |       1 | `isSameMetaClass(MetaClass, Object)`          | `org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures` |
| 25.0% |       1 | `evaluate(Spliterator, boolean, IntFunction)` | `java.util.stream.AbstractPipeline`                              |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|     % | Samples | Caller                               | Location                     |
| ----: | ------: | ------------------------------------ | ---------------------------- |
| 50.0% |       1 | `<init>(ClassValue$Version, Object)` | `java.lang.ClassValue$Entry` |

##### `zero_blocks` (`<unknown>`)

|     % | Samples | Caller                                   | Location                                    |
| ----: | ------: | ---------------------------------------- | ------------------------------------------- |
| 50.0% |       1 | `enlarge(int)`                           | `jdk.internal.org.objectweb.asm.ByteVector` |
| 50.0% |       1 | `allocateUninitializedArray(Class, int)` | `jdk.internal.misc.Unsafe`                  |

##### `I2C/C2I adapters(0xba)` (`<unknown>`)

|     % | Samples | Caller                   | Location                                            |
| ----: | ------: | ------------------------ | --------------------------------------------------- |
| 50.0% |       1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007801344800` |
| 50.0% |       1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000780136e800` |

##### `I2C/C2I adapters(0xbaabbbb)` (`<unknown>`)

|      % | Samples | Caller                 | Location                                       |
| -----: | ------: | ---------------------- | ---------------------------------------------- |
| 100.0% |       1 | `generateInnerClass()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `I2C/C2I adapters(0xbbbb)` (`<unknown>`)

|      % | Samples | Caller                                   | Location                                       |
| -----: | ------: | ---------------------------------------- | ---------------------------------------------- |
| 100.0% |       1 | `collectViolations(SourceCode, RuleSet)` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |

##### `I2C/C2I adapters(0xbbb)` (`<unknown>`)

|      % | Samples | Caller                                                                                                        | Location                                               |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       1 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 99.9% |   1,142 | `thread_native_entry` | `libjvm.dylib` |
|  0.1% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   1,143 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 95.6% |   1,092 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  4.4% |      50 | `WorkerThread::run`             | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   1,142 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 99.7% |   1,089 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |
|  0.3% |       3 | `ServiceThread::service_thread_entry` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 98.1% |   1,068 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  1.7% |      19 | `CompileQueue::get`                        | `libjvm.dylib` |
|  0.1% |       1 | `C2Compiler::compile_method`               | `libjvm.dylib` |
|  0.1% |       1 | `ciEnv::ciEnv`                             | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                              | Location       |
| ----: | ------: | ----------------------------------- | -------------- |
| 84.1% |     898 | `C2Compiler::compile_method`        | `libjvm.dylib` |
| 15.5% |     166 | `Compiler::compile_method`          | `libjvm.dylib` |
|  0.2% |       2 | `ciEnv::get_method_from_handle`     | `libjvm.dylib` |
|  0.1% |       1 | `CompileBroker::collect_statistics` | `libjvm.dylib` |
|  0.1% |       1 | `ciEnv::ciEnv`                      | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                  | Location       |
| ----: | ------: | ----------------------- | -------------- |
| 99.8% |     897 | `Compile::Compile`      | `libjvm.dylib` |
|  0.1% |       1 | `RootNode::bottom_type` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 51.2% |     459 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 36.5% |     327 | `Compile::Optimize`                      | `libjvm.dylib` |
| 10.5% |      94 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.9% |       8 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.4% |       4 | `Compile::inline_string_calls`           | `libjvm.dylib` |

##### `main(String[])` (`org.codenarc.CodeNarc`)

|     % | Samples | Callee                                                           | Location                               |
| ----: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| 99.1% |     456 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`     |
|  0.7% |       3 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`     |
|  0.2% |       1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|     % | Samples | Callee                                                  | Location                                              |
| ----: | ------: | ------------------------------------------------------- | ----------------------------------------------------- |
| 99.3% |     457 | `invokeExact_MT(Object, Object, Object)`                | `java.lang.invoke.Invokers$Holder`                    |
| 12.8% |      59 | `doWithCallSite(MutableCallSite, Object[], BiFunction)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`       |
|  0.2% |       1 | `getTargetMethodHandle()`                               | `org.codehaus.groovy.vmplugin.v8.MethodHandleWrapper` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 54.2% |     249 | `PhaseChaitin::Register_Allocate`    | `libjvm.dylib` |
| 17.9% |      82 | `Matcher::match`                     | `libjvm.dylib` |
| 12.4% |      57 | `PhaseOutput::Output`                | `libjvm.dylib` |
| 11.3% |      52 | `PhaseCFG::do_global_code_motion`    | `libjvm.dylib` |
|  1.7% |       8 | `PhaseBlockLayout::PhaseBlockLayout` | `libjvm.dylib` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007801088800`)

|      % | Samples | Callee                                                                                           | Location                                        |
| -----: | ------: | ------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| 100.0% |     458 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|  78.2% |     358 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|   0.4% |       2 | `resolve_static_call`                                                                            | `<unknown>`                                     |

##### `invokeExact_MT(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Callee                   | Location                                            |
| ----: | ------: | ------------------------ | --------------------------------------------------- |
| 97.4% |     445 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000078010c7000` |
| 96.3% |     440 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000780109bc00` |
| 94.1% |     430 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000078010d4c00` |
| 81.2% |     371 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007801282400` |
| 80.1% |     366 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007801290000` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000078010a1800`)

|      % | Samples | Callee                                                                                      | Location                                             |
| -----: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     456 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007801088800` |
|   1.3% |       6 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x00000078010a1000`  |

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     456 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000078010a1800` |
|   0.2% |       1 | `guard(Object, Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x00000078010aac00` |

##### `guardWithCatch(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000078010aa000`)

|     % | Samples | Callee                                    | Location                                             |
| ----: | ------: | ----------------------------------------- | ---------------------------------------------------- |
| 98.0% |     445 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000078010c6400`  |
| 97.8% |     444 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000078010a9800`  |
| 81.9% |     372 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007801094c00` |
| 46.7% |     212 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000078010d4800`  |
| 11.9% |      54 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x0000007801130000`  |

##### `reinvoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000078010aa800`)

|      % | Samples | Callee                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     454 | `guardWithCatch(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000078010aa000` |
| 100.0% |     454 | `guard(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000078010aac00` |
|  42.1% |     191 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000780138d000` |
|   8.6% |      39 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000078010a1800` |
|   7.0% |      32 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000780132c800` |

##### `guard(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000078010aac00`)

|      % | Samples | Callee                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     454 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000078010aa800` |
|  86.6% |     393 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   0.4% |       2 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x00000078010aa400` |
|   0.2% |       1 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x00000078010ab000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000780108e000`)

|     % | Samples | Callee                                                                                          | Location                                             |
| ----: | ------: | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 99.8% |     445 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`     | `java.lang.invoke.LambdaForm$DMH.0x0000007801088800` |
|  1.3% |       6 | `collector(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x0000007801031800`  |
|  0.7% |       3 | `invokeStaticInit(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007801088c00` |

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |     446 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000780108e000` |
|   4.3% |      19 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000780109b400` |
|   3.6% |      16 | `guard(Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x000000780109a000` |

##### `invokeVirtual(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007801094400`)

|     % | Samples | Callee                                   | Location                                       |
| ----: | ------: | ---------------------------------------- | ---------------------------------------------- |
| 83.0% |     370 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$1076`         |
| 79.8% |     356 | `collectViolations(SourceCode, RuleSet)` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |
| 18.4% |      82 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$207`          |
| 12.8% |      57 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$251`          |
|  9.4% |      42 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$1008`         |

##### `invokeVirtual(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Callee                              | Location                                                  |
| -----: | ------: | ----------------------------------- | --------------------------------------------------------- |
| 100.0% |     445 | `execute(String[])`                 | `org.codenarc.CodeNarc`                                   |
|   0.7% |       3 | `parseArgs(String[])`               | `org.codenarc.CodeNarc`                                   |
|   0.4% |       2 | `calculateFunctions(Collection)`    | `org.gmetrics.metric.abc.result.AggregateAbcMetricResult` |
|   0.4% |       2 | `visitContents(GroovyClassVisitor)` | `org.codehaus.groovy.ast.ClassNode`                       |
|   0.4% |       2 | `writeTitle(Writer)`                | `org.codenarc.report.TextReportWriter`                    |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000078010c6400`)

|      % | Samples | Callee                                  | Location                                             |
| -----: | ------: | --------------------------------------- | ---------------------------------------------------- |
| 100.0% |     445 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|   0.2% |       1 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007801084000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000078010c7000`)

|      % | Samples | Callee                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     445 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000078010aa800` |
|  84.5% |     376 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   0.2% |       1 | `wrong_method_stub`                | `<unknown>`                                         |

##### `guardWithCatch(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007801098400`)

|     % | Samples | Callee                          | Location                                            |
| ----: | ------: | ------------------------------- | --------------------------------------------------- |
| 98.9% |     439 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000780102b000` |
| 12.8% |      57 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x0000007801105400` |
| 10.8% |      48 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
| 10.4% |      46 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
|  2.0% |       9 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x0000007801018400` |

##### `reinvoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007801099c00`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     444 | `guardWithCatch(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007801098400` |
| 100.0% |     444 | `guard(Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000780109a000` |
|   1.1% |       5 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000780108e000` |
|   0.9% |       4 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000078011eb400` |
|   0.2% |       1 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007801115c00` |

##### `guard(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000780109a000`)

|      % | Samples | Callee                     | Location                                            |
| -----: | ------: | -------------------------- | --------------------------------------------------- |
| 100.0% |     444 | `reinvoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007801099c00` |
|  11.0% |      49 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   0.5% |       2 | `invoke(Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000780109a400` |
|   0.2% |       1 | `invoke(Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000780109b800` |
|   0.2% |       1 | `invoke(Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000007801098c00` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000078010a9800`)

|      % | Samples | Callee                                          | Location                                             |
| -----: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     444 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007801094400` |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Callee                    | Location                                   |
| ----: | ------: | ------------------------- | ------------------------------------------ |
| 99.8% |     439 | `execute()`               | `org.codenarc.CodeNarcRunner`              |
| 10.0% |      44 | `createInitialRuleSet()`  | `org.codenarc.CodeNarcRunner`              |
|  0.5% |       2 | `getMagnitude()`          | `org.gmetrics.metric.abc.AbcVector`        |
|  0.5% |       2 | `getFormattedTimestamp()` | `org.codenarc.report.AbstractReportWriter` |
|  0.2% |       1 | `createSourceAnalyzer()`  | `org.codenarc.CodeNarc`                    |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000780109bc00`)

|     % | Samples | Callee                     | Location                                            |
| ----: | ------: | -------------------------- | --------------------------------------------------- |
| 99.8% |     439 | `reinvoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007801099c00` |
|  0.9% |       4 | `invoke(Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000780109b800` |
|  0.2% |       1 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 32.1% |     105 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| 25.4% |      83 | `Compile::optimize_loops`              | `libjvm.dylib` |
| 19.9% |      65 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |
|  4.6% |      15 | `ConnectionGraph::do_analysis`         | `libjvm.dylib` |
|  3.7% |      12 | `PhaseMacroExpand::expand_macro_nodes` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 18.9% |      47 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| 14.9% |      37 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| 12.0% |      30 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
| 10.0% |      25 | `PhaseLive::compute`                       | `libjvm.dylib` |
| 10.0% |      25 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 87.8% |     165 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| 10.6% |      20 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |
|  1.6% |       3 | `Chunk::next_chop`               | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 88.6% |     147 | `Compilation::compile_java_method` | `libjvm.dylib` |
| 10.8% |      18 | `ciEnv::register_method`           | `libjvm.dylib` |
|  0.6% |       1 | `Dependencies::assert_common_1`    | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     166 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     166 | `Compilation::Compilation` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 32.7% |      54 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 15.8% |      26 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| 15.2% |      25 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
| 10.9% |      18 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
|  6.7% |      11 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Callee                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |     165 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 44.2% |      65 | `Compilation::build_hir`       | `libjvm.dylib` |
| 31.3% |      46 | `Compilation::emit_lir`        | `libjvm.dylib` |
| 21.8% |      32 | `Compilation::emit_code_body`  | `libjvm.dylib` |
|  2.7% |       4 | `ciMethod::ensure_method_data` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                    | Location       |
| ----: | ------: | ----------------------------------------- | -------------- |
| 91.4% |      96 | `PhaseIterGVN::transform_old`             | `libjvm.dylib` |
|  2.9% |       3 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |
|  1.0% |       1 | `PhiNode::Ideal`                          | `libjvm.dylib` |
|  1.0% |       1 | `TypeInt::singleton`                      | `libjvm.dylib` |
|  1.0% |       1 | `LoopNode::Ideal`                         | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 12.4% |      12 | `LoadNode::Ideal`            | `libjvm.dylib` |
| 11.3% |      11 | `PhaseIterGVN::subsume_node` | `libjvm.dylib` |
|  9.3% |       9 | `NodeHash::hash_find_insert` | `libjvm.dylib` |
|  9.3% |       9 | `RegionNode::Ideal`          | `libjvm.dylib` |
|  8.2% |       8 | `StoreNode::Ideal`           | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 97.9% |      92 | `Parse::do_all_blocks`           | `libjvm.dylib` |
|  4.3% |       4 | `Parse::do_exits`                | `libjvm.dylib` |
|  1.1% |       1 | `Dependencies::assert_common_1`  | `libjvm.dylib` |
|  1.1% |       1 | `ciMethod::method_data`          | `libjvm.dylib` |
|  1.1% |       1 | `ResourceBitMap::ResourceBitMap` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % | Samples | Callee                                    | Location       |
| -----: | ------: | ----------------------------------------- | -------------- |
| 100.0% |      94 | `Parse::Parse`                            | `libjvm.dylib` |
|   1.1% |       1 | `GraphKit::transfer_exceptions_into_jvms` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|     % | Samples | Callee                   | Location       |
| ----: | ------: | ------------------------ | -------------- |
| 92.4% |      85 | `Parse::do_call`         | `libjvm.dylib` |
| 18.5% |      17 | `Parse::do_field_access` | `libjvm.dylib` |
|  7.6% |       7 | `Parse::do_if`           | `libjvm.dylib` |
|  7.6% |       7 | `Parse::do_one_bytecode` | `libjvm.dylib` |
|  3.3% |       3 | `Parse::do_exceptions`   | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % | Samples | Callee                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |      92 | `Parse::do_one_block`     | `libjvm.dylib` |
|   1.1% |       1 | `JVMState::clone_shallow` | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|     % | Samples | Callee                                                | Location       |
| ----: | ------: | ----------------------------------------------------- | -------------- |
| 67.1% |      57 | `PredictedCallGenerator::generate`                    | `libjvm.dylib` |
| 56.5% |      48 | `ParseGenerator::generate`                            | `libjvm.dylib` |
| 21.2% |      18 | `Compile::call_generator`                             | `libjvm.dylib` |
|  5.9% |       5 | `LibraryIntrinsic::generate`                          | `libjvm.dylib` |
|  2.4% |       2 | `GraphKit::record_profiled_arguments_for_speculation` | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      83 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 70.7% |      58 | `Matcher::xform`                              | `libjvm.dylib` |
| 11.0% |       9 | `Matcher::find_shared`                        | `libjvm.dylib` |
|  3.7% |       3 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |
|  2.4% |       2 | `Matcher::find_shared_visit`                  | `libjvm.dylib` |
|  1.2% |       1 | `StoreINode::Opcode`                          | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|     % | Samples | Callee                                       | Location       |
| ----: | ------: | -------------------------------------------- | -------------- |
| 81.5% |      53 | `IR::IR`                                     | `libjvm.dylib` |
|  6.2% |       4 | `IR::eliminate_null_checks`                  | `libjvm.dylib` |
|  6.2% |       4 | `IR::compute_use_counts`                     | `libjvm.dylib` |
|  4.6% |       3 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |
|  1.5% |       1 | `RangeCheckElimination::eliminate`           | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|     % | Samples | Callee                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 53.4% |      31 | `Matcher::match_tree`     | `libjvm.dylib` |
| 22.4% |      13 | `Arena::contains`         | `libjvm.dylib` |
|  5.2% |       3 | `Matcher::match_sfpt`     | `libjvm.dylib` |
|  3.4% |       2 | `Node::clone`             | `libjvm.dylib` |
|  1.7% |       1 | `CheckCastPPNode::Opcode` | `libjvm.dylib` |

##### `PhaseOutput::Output` (`libjvm.dylib`)

|     % | Samples | Callee                              | Location       |
| ----: | ------: | ----------------------------------- | -------------- |
| 49.1% |      28 | `PhaseOutput::fill_buffer`          | `libjvm.dylib` |
| 19.3% |      11 | `PhaseOutput::BuildOopMaps`         | `libjvm.dylib` |
| 14.0% |       8 | `PhaseOutput::shorten_branches`     | `libjvm.dylib` |
| 14.0% |       8 | `Scheduling::DoScheduling`          | `libjvm.dylib` |
|  1.8% |       1 | `PhaseOutput::estimate_buffer_size` | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 98.2% |      56 | `ParseGenerator::generate`         | `libjvm.dylib` |
| 24.6% |      14 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
|  3.5% |       2 | `GraphKit::type_check_receiver`    | `libjvm.dylib` |
|  3.5% |       2 | `GraphKit::subtype_check_receiver` | `libjvm.dylib` |
|  1.8% |       1 | `DirectCallGenerator::generate`    | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 98.1% |      52 | `IRScope::IRScope`                | `libjvm.dylib` |
|  1.9% |       1 | `ciMethod::has_balanced_monitors` | `libjvm.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

|      % | Samples | Callee                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |      52 | `GraphBuilder::GraphBuilder` | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 64.0% |      32 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib` |
| 20.0% |      10 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib` |
| 12.0% |       6 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib` |
|  4.0% |       2 | `G1CMRootRegionScanTask::work`    | `libjvm.dylib` |

##### `JVM_FillInStackTrace` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 97.4% |      38 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |
|  2.6% |       1 | `Universe::should_fill_in_stack_trace`     | `libjvm.dylib` |

##### `Java_java_lang_Throwable_fillInStackTrace` (`libjava.dylib`)

|      % | Samples | Callee                 | Location       |
| -----: | ------: | ---------------------- | -------------- |
| 100.0% |      39 | `JVM_FillInStackTrace` | `libjvm.dylib` |

##### `java_lang_Throwable::fill_in_stack_trace` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 97.4% |      37 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |
| 28.9% |      11 | `BacktraceBuilder::push`                   | `libjvm.dylib` |
| 21.1% |       8 | `frame::sender_for_compiled_frame`         | `libjvm.dylib` |
|  7.9% |       3 | `frame::sender_raw`                        | `libjvm.dylib` |
|  2.6% |       1 | `nmethod::scopes_pcs_end`                  | `libjvm.dylib` |

##### `G1EvacuateRegionsBaseTask::work` (`libjvm.dylib`)

|     % | Samples | Callee                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 65.6% |      21 | `G1EvacuateRegionsTask::scan_roots`            | `libjvm.dylib` |
| 21.9% |       7 | `G1EvacuateRegionsTask::evacuate_live_objects` | `libjvm.dylib` |
| 12.5% |       4 | `G1RemSet::scan_collection_set_code_roots`     | `libjvm.dylib` |

##### `Dict::Insert` (`libjvm.dylib`)

|     % | Samples | Callee                 | Location       |
| ----: | ------: | ---------------------- | -------------- |
| 72.0% |      18 | `Type::cmp`            | `libjvm.dylib` |
|  4.0% |       1 | `TypeNarrowPtr::hash`  | `libjvm.dylib` |
|  4.0% |       1 | `TypeInterfaces::hash` | `libjvm.dylib` |
|  4.0% |       1 | `Dict::doubhash`       | `libjvm.dylib` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

Common call stack: `CompileBroker::compiler_thread_loop` (`libjvm.dylib`) ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                     |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1.7% |      28 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                              |
| 1.1% |      18 | `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                 |
| 1.0% |      17 | `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                         |
| 0.9% |      15 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get`                                                                                                                                                                                                |
| 0.9% |      15 | `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                   |
| 0.8% |      13 | `PhaseLive::compute` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                               |
| 0.8% |      13 | `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`) ← `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` |
| 0.8% |      13 | `Arena::contains` (`libjvm.dylib`) ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                |
| 0.8% |      13 | `PhaseChaitin::elide_copy` (`libjvm.dylib`) ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                            |
| 0.7% |      11 | `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                           |
| 0.5% |       8 | `Node_Backward_Iterator::next` (`libjvm.dylib`) ← `PhaseCFG::schedule_late` ← `PhaseCFG::global_code_motion` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                        |
| 0.5% |       8 | `PhaseIdealLoop::Dominators` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                    |
| 0.5% |       8 | `Matcher::xform` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                    |
| 0.4% |       7 | `PhaseIFG::effective_degree` (`libjvm.dylib`) ← `PhaseIFG::Compute_Effective_Degree` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                |
| 0.4% |       7 | `PhaseOutput::BuildOopMaps` (`libjvm.dylib`) ← `PhaseOutput::Output` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                    |
| 0.4% |       7 | `IndexSetIterator::advance_and_next` (`libjvm.dylib`) ← `PhaseChaitin::build_ifg_physical` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                          |
| 0.4% |       7 | `PhaseIFG::SquareUp` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                               |
| 0.4% |       6 | `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                  |
| 0.4% |       6 | `PhaseLive::add_liveout` (`libjvm.dylib`) ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                    |
| 0.4% |       6 | `PhaseCFG::schedule_pinned_nodes` (`libjvm.dylib`) ← `PhaseCFG::global_code_motion` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                 |
