# Sampling profile

Collected 1,505 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Compiler          | 53.8% |     810 |
| Native            | 27.5% |     414 |
| Standard library  | 16.9% |     255 |
| JIT               |  0.8% |      12 |
| Ours              |  0.7% |      10 |
| Garbage collector |  0.3% |       4 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 1,065 samples (70.8%) Thread::call_run at libjvm.dylib
│   ├── 1,015 samples (67.4%) JavaThread::thread_main_inner
│   │   └── 1,013 samples (67.3%) CompileBroker::compiler_thread_loop
│   │       ├── 998 samples (66.3%) CompileBroker::invoke_compiler_on_method
│   │       │   ├── 826 samples (54.9%) C2Compiler::compile_method
│   │       │   │   └── 825 samples (54.8%) Compile::Compile
│   │       │   │       ├── 400 samples (26.6%) Compile::Code_Gen
│   │       │   │       │   ├── 245 samples (16.3%) PhaseChaitin::Register_Allocate
│   │       │   │       │   │   ├── 43 samples (2.9%, self 1.8%) PhaseChaitin::Split
│   │       │   │       │   │   │   └── 16 samples (1.1%) 9 more callees, led by (0.3%) PhaseChaitin::split_DEF
│   │       │   │       │   │   ├── 41 samples (2.7%, self 1.8%) PhaseChaitin::build_ifg_physical
│   │       │   │       │   │   │   └── 14 samples (0.9%) 9 more callees, led by (0.2%) PhaseChaitin::remove_bound_register_from_interfering_live_ranges
│   │       │   │       │   │   ├── 26 samples (1.7%, self 0.5%) PhaseLive::compute
│   │       │   │       │   │   │   └── 17 samples (1.1%, self 0.7%) PhaseLive::add_liveout
│   │       │   │       │   │   │       └── 5 samples (0.3%, self 1.2% globally) IndexSetIterator::advance_and_next
│   │       │   │       │   │   ├── 12 samples (0.8%) PhaseAggressiveCoalesce::insert_copies
│   │       │   │       │   │   └── 121 samples (8.0%) 23 more callees, led by (1.7%) PhaseChaitin::post_allocate_copy_removal
│   │       │   │       │   └── 155 samples (10.3%) 10 more callees, led by (3.7%) Matcher::match
│   │       │   │       ├── 329 samples (21.9%) Compile::Optimize
│   │       │   │       │   └── 329 samples (21.9%) 17 more callees, led by (7.6%) PhaseIdealLoop::optimize
│   │       │   │       ├── 83 samples (5.5%) ParseGenerator::generate
│   │       │   │       │   └── … 83 samples (5.5%) Parse::Parse at libjvm.dylib
│   │       │   │       │       ├── 73 samples (4.9%) Parse::do_all_blocks
│   │       │   │       │       │   └── 72 samples (4.8%) Parse::do_one_block
│   │       │   │       │       │       ├── 14 samples (0.9%) Parse::do_field_access
│   │       │   │       │       │       │   └── … 1 sample (0.1%, self 1.8% globally) tlv_get_addr at libdyld.dylib
│   │       │   │       │       │       └── 58 samples (3.9%) 12 more callees, led by (2.3%) Parse::do_call
│   │       │   │       │       └── 4 samples (0.3%) Parse::do_exits
│   │       │   │       └── 13 samples (0.9%) 4 more callees, led by (0.5%) PhaseRemoveUseless::PhaseRemoveUseless
│   │       │   └── 166 samples (11.0%) Compiler::compile_method
│   │       │       └── 166 samples (11.0%) 2 more callees, led by (11.0%) Compilation::Compilation
│   │       └── … 12 samples (0.8%) __psynch_cvwait at libsystem_kernel.dylib
│   └── 50 samples (3.3%) 3 more callees, led by (3.1%) WorkerThread::run
├── … 416 samples (27.6%) invoke(Object, Object, Object) at java.lang.invoke.LambdaForm$MH.0x00000070010a1800
│   ├── … 413 samples (27.4%) invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object) at java.lang.invoke.LambdaForm$DMH.0x0000007001088800
│   │   ├── … 295 samples (19.6%) fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[]) at org.codehaus.groovy.vmplugin.v8.IndyInterface
│   │   │   └── 294 samples (19.5%) 5 more callees, led by (15.6%) invokeExact_MT(Object, Object, Object) at java.lang.invoke.Invokers$Holder
│   │   └── … 114 samples (7.6%) selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[]) at org.codehaus.groovy.vmplugin.v8.IndyInterface …
│   └── … 2 samples (0.1%, self 1.6% globally) pthread_jit_write_protect_np at libsystem_pthread.dylib
└── 19 samples (1.3%) 6 more root frames, led by (0.8%) <clinit>() at org.codenarc.CodeNarc
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|    % | Samples | Function                                                                                                                                                 | Location                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 1.8% |      27 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
| 1.8% |      27 | `PhaseChaitin::build_ifg_physical`                                                                                                                       | `libjvm.dylib`             |
| 1.8% |      27 | `PhaseChaitin::Split`                                                                                                                                    | `libjvm.dylib`             |
| 1.6% |      24 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
| 1.5% |      23 | `PhaseIdealLoop::build_loop_early`                                                                                                                       | `libjvm.dylib`             |
| 1.2% |      18 | `PhaseIdealLoop::Dominators`                                                                                                                             | `libjvm.dylib`             |
| 1.2% |      18 | `IndexSetIterator::advance_and_next`                                                                                                                     | `libjvm.dylib`             |
| 1.1% |      17 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| 1.1% |      16 | `PhaseChaitin::gather_lrg_masks`                                                                                                                         | `libjvm.dylib`             |
| 1.1% |      16 | `PhaseChaitin::elide_copy`                                                                                                                               | `libjvm.dylib`             |
| 0.9% |      13 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 0.9% |      13 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 0.9% |      13 | `Node::dominates`                                                                                                                                        | `libjvm.dylib`             |
| 0.8% |      12 | `PhaseIdealLoop::build_loop_late_post_work`                                                                                                              | `libjvm.dylib`             |
| 0.8% |      12 | `PhaseAggressiveCoalesce::insert_copies`                                                                                                                 | `libjvm.dylib`             |
| 0.7% |      11 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
| 0.7% |      11 | `java_lang_Throwable::fill_in_stack_trace`                                                                                                               | `libjvm.dylib`             |
| 0.7% |      10 | `PhaseLive::add_liveout`                                                                                                                                 | `libjvm.dylib`             |
| 0.7% |      10 | `Compile::identify_useful_nodes`                                                                                                                         | `libjvm.dylib`             |
| 0.7% |      10 | `Unique_Node_List::remove`                                                                                                                               | `libjvm.dylib`             |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|    % | Samples | Function                                             | Location       |
| ---: | ------: | ---------------------------------------------------- | -------------- |
| 1.8% |      27 | `PhaseChaitin::build_ifg_physical`                   | `libjvm.dylib` |
| 1.8% |      27 | `PhaseChaitin::Split`                                | `libjvm.dylib` |
| 1.5% |      23 | `PhaseIdealLoop::build_loop_early`                   | `libjvm.dylib` |
| 1.2% |      18 | `PhaseIdealLoop::Dominators`                         | `libjvm.dylib` |
| 1.2% |      18 | `IndexSetIterator::advance_and_next`                 | `libjvm.dylib` |
| 1.1% |      16 | `PhaseChaitin::gather_lrg_masks`                     | `libjvm.dylib` |
| 1.1% |      16 | `PhaseChaitin::elide_copy`                           | `libjvm.dylib` |
| 0.9% |      13 | `Node::dominates`                                    | `libjvm.dylib` |
| 0.8% |      12 | `PhaseIdealLoop::build_loop_late_post_work`          | `libjvm.dylib` |
| 0.8% |      12 | `PhaseAggressiveCoalesce::insert_copies`             | `libjvm.dylib` |
| 0.7% |      10 | `PhaseLive::add_liveout`                             | `libjvm.dylib` |
| 0.7% |      10 | `Compile::identify_useful_nodes`                     | `libjvm.dylib` |
| 0.7% |      10 | `Unique_Node_List::remove`                           | `libjvm.dylib` |
| 0.7% |      10 | `Node::is_CFG`                                       | `libjvm.dylib` |
| 0.7% |      10 | `Matcher::xform`                                     | `libjvm.dylib` |
| 0.6% |       9 | `MultiNode::is_CFG`                                  | `libjvm.dylib` |
| 0.5% |       8 | `PhaseLive::compute`                                 | `libjvm.dylib` |
| 0.5% |       8 | `PhaseChaitin::merge_multidefs`                      | `libjvm.dylib` |
| 0.5% |       8 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `libjvm.dylib` |
| 0.5% |       8 | `PhaseChaitin::post_allocate_copy_removal`           | `libjvm.dylib` |

##### Native

|    % | Samples | Function                                                                                                                                                 | Location                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 1.8% |      27 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
| 1.6% |      24 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
| 1.1% |      17 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| 0.9% |      13 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 0.9% |      13 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 0.7% |      11 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
| 0.7% |      11 | `java_lang_Throwable::fill_in_stack_trace`                                                                                                               | `libjvm.dylib`             |
| 0.6% |       9 | `sys_icache_invalidate`                                                                                                                                  | `libsystem_platform.dylib` |
| 0.6% |       9 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
| 0.5% |       8 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>`                             | `libjvm.dylib`             |
| 0.5% |       8 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`             |
| 0.5% |       7 | `Dict::Insert`                                                                                                                                           | `libjvm.dylib`             |
| 0.4% |       6 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                          | `libjvm.dylib`             |
| 0.3% |       5 | `__psynch_mutexdrop`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 0.3% |       4 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                           | `libjvm.dylib`             |
| 0.3% |       4 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `libjvm.dylib`             |
| 0.3% |       4 | `_platform_memmove`                                                                                                                                      | `libsystem_platform.dylib` |
| 0.3% |       4 | `frame::sender_for_compiled_frame`                                                                                                                       | `libjvm.dylib`             |
| 0.3% |       4 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
| 0.2% |       3 | `posix_madvise`                                                                                                                                          | `libsystem_kernel.dylib`   |

##### Standard library

|    % | Samples | Function                                                                                                      | Location                                               |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 0.6% |       9 | `cast(Object)`                                                                                                | `java.lang.Class`                                      |
| 0.4% |       6 | `<init>(MethodType, LambdaForm)`                                                                              | `java.lang.invoke.MethodHandle`                        |
| 0.4% |       6 | `getNode(Object)`                                                                                             | `java.util.HashMap`                                    |
| 0.3% |       5 | `invokeBasic(Object[])`                                                                                       | `java.lang.invoke.MethodHandle`                        |
| 0.3% |       5 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| 0.3% |       5 | `equals(Object, Object)`                                                                                      | `java.util.Objects`                                    |
| 0.3% |       4 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800`   |
| 0.3% |       4 | `equals(Object)`                                                                                              | `java.lang.String`                                     |
| 0.3% |       4 | `putVal(int, Object, Object, boolean, boolean)`                                                               | `java.util.HashMap`                                    |
| 0.3% |       4 | `internalMemberName(Object)`                                                                                  | `java.lang.invoke.DirectMethodHandle`                  |
| 0.2% |       3 | `trySetAccessible()`                                                                                          | `java.lang.reflect.AccessibleObject`                   |
| 0.2% |       3 | `<init>()`                                                                                                    | `java.math.MutableBigInteger`                          |
| 0.2% |       3 | `getInCache(LambdaFormEditor$TransformKey)`                                                                   | `java.lang.invoke.LambdaFormEditor`                    |
| 0.1% |       2 | `uncustomize()`                                                                                               | `java.lang.invoke.LambdaForm`                          |
| 0.1% |       2 | `invokeVirtual(Object, Object)`                                                                               | `java.lang.invoke.DirectMethodHandle$Holder`           |
| 0.1% |       2 | `isNullConversion(Class, Class, boolean)`                                                                     | `sun.invoke.util.VerifyType`                           |
| 0.1% |       2 | `checkCustomized(MethodHandle)`                                                                               | `java.lang.invoke.Invokers`                            |
| 0.1% |       2 | `computeIfAbsent(Object, Function)`                                                                           | `java.util.concurrent.ConcurrentHashMap`               |
| 0.1% |       2 | `isLatin1()`                                                                                                  | `java.lang.String`                                     |
| 0.1% |       2 | `getEpsilonTarget(ATNConfig, Transition, boolean, boolean, PredictionContextCache, boolean)`                  | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

#### Lines

Lines with the largest contribution to each function's self samples.

##### `cast(Object)` (`java.lang.Class`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       9 | `java.lang.Class:4068` |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Location                            |
| ----: | ------: | ----------------------------------- |
| 83.3% |       5 | `java.lang.invoke.MethodHandle:479` |
| 16.7% |       1 | `java.lang.invoke.MethodHandle:480` |

##### `getNode(Object)` (`java.util.HashMap`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 66.7% |       4 | `java.util.HashMap:585` |
| 16.7% |       1 | `java.util.HashMap:576` |
| 16.7% |       1 | `java.util.HashMap:582` |

##### `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|     % | Samples | Location                                                    |
| ----: | ------: | ----------------------------------------------------------- |
| 40.0% |       2 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1847` |
| 20.0% |       1 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1787` |
| 20.0% |       1 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1789` |
| 20.0% |       1 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1754` |

##### `equals(Object, Object)` (`java.util.Objects`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       5 | `java.util.Objects:64` |

##### `equals(Object)` (`java.lang.String`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       4 | `java.lang.String:1852` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 25.0% |       1 | `java.util.HashMap:670` |
| 25.0% |       1 | `java.util.HashMap:668` |
| 25.0% |       1 | `java.util.HashMap:636` |
| 25.0% |       1 | `java.util.HashMap:635` |

##### `internalMemberName(Object)` (`java.lang.invoke.DirectMethodHandle`)

|      % | Samples | Location                                  |
| -----: | ------: | ----------------------------------------- |
| 100.0% |       4 | `java.lang.invoke.DirectMethodHandle:327` |

##### `trySetAccessible()` (`java.lang.reflect.AccessibleObject`)

|      % | Samples | Location                                 |
| -----: | ------: | ---------------------------------------- |
| 100.0% |       3 | `java.lang.reflect.AccessibleObject:290` |

##### `<init>()` (`java.math.MutableBigInteger`)

|      % | Samples | Location                          |
| -----: | ------: | --------------------------------- |
| 100.0% |       3 | `java.math.MutableBigInteger:103` |

##### `getInCache(LambdaFormEditor$TransformKey)` (`java.lang.invoke.LambdaFormEditor`)

|     % | Samples | Location                                |
| ----: | ------: | --------------------------------------- |
| 66.7% |       2 | `java.lang.invoke.LambdaFormEditor:397` |
| 33.3% |       1 | `java.lang.invoke.LambdaFormEditor:396` |

##### `uncustomize()` (`java.lang.invoke.LambdaForm`)

|      % | Samples | Location                          |
| -----: | ------: | --------------------------------- |
| 100.0% |       2 | `java.lang.invoke.LambdaForm:476` |

##### `isNullConversion(Class, Class, boolean)` (`sun.invoke.util.VerifyType`)

|     % | Samples | Location                        |
| ----: | ------: | ------------------------------- |
| 50.0% |       1 | `sun.invoke.util.VerifyType:71` |
| 50.0% |       1 | `sun.invoke.util.VerifyType:76` |

##### `checkCustomized(MethodHandle)` (`java.lang.invoke.Invokers`)

|      % | Samples | Location                        |
| -----: | ------: | ------------------------------- |
| 100.0% |       2 | `java.lang.invoke.Invokers:626` |

##### `computeIfAbsent(Object, Function)` (`java.util.concurrent.ConcurrentHashMap`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       2 | `java.util.concurrent.ConcurrentHashMap:1692` |

##### `isLatin1()` (`java.lang.String`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       2 | `java.lang.String:4811` |

##### `getEpsilonTarget(ATNConfig, Transition, boolean, boolean, PredictionContextCache, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|      % | Samples | Location                                                    |
| -----: | ------: | ----------------------------------------------------------- |
| 100.0% |       2 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1860` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `tlv_get_addr` (`libdyld.dylib`)

|    % | Samples | Caller                          | Location       |
| ---: | ------: | ------------------------------- | -------------- |
| 7.4% |       2 | `TypeInstPtr::xmeet_helper`     | `libjvm.dylib` |
| 7.4% |       2 | `ciObjectFactory::get_metadata` | `libjvm.dylib` |
| 3.7% |       1 | `TypeInstPtr::add_offset`       | `libjvm.dylib` |
| 3.7% |       1 | `OopMap::OopMap`                | `libjvm.dylib` |
| 3.7% |       1 | `PhaseValues::uncached_makecon` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      27 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      27 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 29.2% |       7 | `JVM_NewArray`                           | `libjvm.dylib` |
| 12.5% |       3 | `InterpreterRuntime::resolve_from_cache` | `libjvm.dylib` |
|  8.3% |       2 | `MHN_init_Mem`                           | `libjvm.dylib` |
|  4.2% |       1 | `Unsafe_GetShort`                        | `libjvm.dylib` |
|  4.2% |       1 | `JVM_IHashCode`                          | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      23 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      18 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 27.8% |       5 | `PhaseLive::add_liveout`           | `libjvm.dylib` |
| 16.7% |       3 | `PhaseIFG::re_insert`              | `libjvm.dylib` |
| 16.7% |       3 | `PhaseIFG::SquareUp`               | `libjvm.dylib` |
| 16.7% |       3 | `PhaseIFG::effective_degree`       | `libjvm.dylib` |
| 11.1% |       2 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 70.6% |      12 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
| 17.6% |       3 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |
|  5.9% |       1 | `LIR_Assembler::record_non_safepoint_debug_info`   | `libjvm.dylib` |
|  5.9% |       1 | `DebugInformationRecorder::create_scope_values`    | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      16 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |      16 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location                 |
| ----: | ------: | ----------------------- | ------------------------ |
| 92.3% |      12 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  7.7% |       1 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |      13 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `Node::dominates` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |      13 | `MemNode::all_controls_dominate` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|     % | Samples | Caller                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 83.3% |      10 | `PhaseIdealLoop::build_loop_late`    | `libjvm.dylib` |
| 16.7% |       2 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      12 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                            | Location       |
| ----: | ------: | ------------------------------------------------- | -------------- |
| 18.2% |       2 | `PhaseChaitin::Register_Allocate`                 | `libjvm.dylib` |
| 18.2% |       2 | `LinearScan::do_linear_scan`                      | `libjvm.dylib` |
|  9.1% |       1 | `PhaseIdealLoop::build_and_optimize`              | `libjvm.dylib` |
|  9.1% |       1 | `MemNode::all_controls_dominate`                  | `libjvm.dylib` |
|  9.1% |       1 | `GraphBuilder::copy_state_for_exception_with_bci` | `libjvm.dylib` |

##### `java_lang_Throwable::fill_in_stack_trace` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |      11 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `PhaseLive::add_liveout` (`libjvm.dylib`)

|      % | Samples | Caller               | Location       |
| -----: | ------: | -------------------- | -------------- |
| 100.0% |      10 | `PhaseLive::compute` | `libjvm.dylib` |

##### `Compile::identify_useful_nodes` (`libjvm.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 70.0% |       7 | `PhaseRemoveUseless::PhaseRemoveUseless`      | `libjvm.dylib` |
| 30.0% |       3 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |

##### `Unique_Node_List::remove` (`libjvm.dylib`)

|      % | Samples | Caller                                    | Location       |
| -----: | ------: | ----------------------------------------- | -------------- |
| 100.0% |      10 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |

##### `Node::is_CFG` (`libjvm.dylib`)

|     % | Samples | Caller                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 70.0% |       7 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
| 10.0% |       1 | `PhaseIdealLoop::build_loop_tree`    | `libjvm.dylib` |
| 10.0% |       1 | `ProjNode::is_uncommon_trap_proj`    | `libjvm.dylib` |
| 10.0% |       1 | `PhaseIdealLoop::Dominators`         | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |      10 | `Matcher::match` | `libjvm.dylib` |

##### `MultiNode::is_CFG` (`libjvm.dylib`)

|     % | Samples | Caller                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 66.7% |       6 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
| 11.1% |       1 | `PhaseIdealLoop::build_loop_late`    | `libjvm.dylib` |
| 11.1% |       1 | `PhaseIdealLoop::Dominators`         | `libjvm.dylib` |
| 11.1% |       1 | `NTarjan::DFS`                       | `libjvm.dylib` |

##### `sys_icache_invalidate` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 44.4% |       4 | `nmethod::oops_do_process_weak`               | `libjvm.dylib` |
| 33.3% |       3 | `nmethod::nmethod`                            | `libjvm.dylib` |
| 11.1% |       1 | `InlineCacheBuffer::create_transition_stub`   | `libjvm.dylib` |
| 11.1% |       1 | `CodeCache::make_marked_nmethods_deoptimized` | `libjvm.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|      % | Samples | Caller                                  | Location       |
| -----: | ------: | --------------------------------------- | -------------- |
| 100.0% |       9 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |

##### `cast(Object)` (`java.lang.Class`)

|      % | Samples | Caller                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |       9 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       8 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::merge_multidefs` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       8 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` (`libjvm.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 87.5% |       7 | `PhaseIdealLoop::compute_lca_of_uses`         | `libjvm.dylib` |
| 12.5% |       1 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       8 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                            | Location       |
| -----: | ------: | ------------------------------------------------- | -------------- |
| 100.0% |       8 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib` |

##### `Arena::contains` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       8 | `Matcher::xform` | `libjvm.dylib` |

##### `Dict::Insert` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       7 | `Type::hashcons` | `libjvm.dylib` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

|     % | Samples | Caller                                                              | Location       |
| ----: | ------: | ------------------------------------------------------------------- | -------------- |
| 66.7% |       4 | `G1ScanHRForRegionClosure::scan_memregion`                          | `libjvm.dylib` |
| 16.7% |       1 | `void G1ParCopyClosure<(G1Barrier)1, false>::do_oop_work<oopDesc*>` | `libjvm.dylib` |
| 16.7% |       1 | `G1ParEvacuateFollowersClosure::do_void`                            | `libjvm.dylib` |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Caller                                                | Location                              |
| ----: | ------: | ----------------------------------------------------- | ------------------------------------- |
| 83.3% |       5 | `<init>(MethodType, LambdaForm)`                      | `java.lang.invoke.BoundMethodHandle`  |
| 16.7% |       1 | `<init>(MethodType, LambdaForm, MemberName, boolean)` | `java.lang.invoke.DirectMethodHandle` |

##### `getNode(Object)` (`java.util.HashMap`)

|     % | Samples | Caller        | Location                  |
| ----: | ------: | ------------- | ------------------------- |
| 66.7% |       4 | `get(Object)` | `java.util.LinkedHashMap` |
| 33.3% |       2 | `get(Object)` | `java.util.HashMap`       |

##### `__psynch_mutexdrop` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                                | Location                  |
| -----: | ------: | ------------------------------------- | ------------------------- |
| 100.0% |       5 | `_pthread_mutex_firstfit_unlock_slow` | `libsystem_pthread.dylib` |

##### `invokeBasic(Object[])` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Caller                                                                                                                      | Location                                             |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 20.0% |       1 | `invokeVirtual(Object, Object)`                                                                                             | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 20.0% |       1 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object, Object, Object)`                                      | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 20.0% |       1 | `invoke(Object, Object)`                                                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000700102ac00`  |
| 20.0% |       1 | `invoke(Object, Object, Object)`                                                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010aa400`  |
| 20.0% |       1 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object, int, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000700109b000` |

##### `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|     % | Samples | Caller                                                                                                        | Location                                               |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 80.0% |       4 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| 20.0% |       1 | `closure(ATNConfigSet, ATNConfigSet, boolean, boolean, PredictionContextCache, boolean)`                      | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `equals(Object, Object)` (`java.util.Objects`)

|      % | Samples | Caller           | Location                               |
| -----: | ------: | ---------------- | -------------------------------------- |
| 100.0% |       5 | `equals(Object)` | `jdk.internal.util.StrongReferenceKey` |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                         | Location       |
| -----: | ------: | ---------------------------------------------- | -------------- |
| 100.0% |       4 | `void G1CMTask::process_grey_task_entry<true>` | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       4 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |

##### `_platform_memmove` (`libsystem_platform.dylib`)

|     % | Samples | Caller                      | Location       |
| ----: | ------: | --------------------------- | -------------- |
| 25.0% |       1 | `Node::out_grow`            | `libjvm.dylib` |
| 25.0% |       1 | `Type::Initialize`          | `libjvm.dylib` |
| 25.0% |       1 | `JVM_ConstantPoolGetUTF8At` | `libjvm.dylib` |
| 25.0% |       1 | `PhaseIdealLoop::set_idom`  | `libjvm.dylib` |

##### `frame::sender_for_compiled_frame` (`libjvm.dylib`)

|     % | Samples | Caller                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 75.0% |       3 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |
| 25.0% |       1 | `vframeStreamCommon::next`                 | `libjvm.dylib` |

##### `SymbolTable::do_lookup` (`libjvm.dylib`)

|     % | Samples | Caller                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 50.0% |       2 | `SymbolTable::new_symbol`                      | `libjvm.dylib` |
| 25.0% |       1 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |
| 25.0% |       1 | `SymbolTable::lookup_only`                     | `libjvm.dylib` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001088800`)

|     % | Samples | Caller                        | Location                                            |
| ----: | ------: | ----------------------------- | --------------------------------------------------- |
| 50.0% |       2 | `invoke(Object, Object)`      | `java.lang.invoke.LambdaForm$MH.0x000000700108e000` |
| 25.0% |       1 | `invoke(Object, Object)`      | `java.lang.invoke.LambdaForm$MH.0x000000700109b400` |
| 25.0% |       1 | `invoke(Object, Object, int)` | `java.lang.invoke.LambdaForm$MH.0x00000070010cb800` |

##### `equals(Object)` (`java.lang.String`)

|     % | Samples | Caller                             | Location                                                  |
| ----: | ------: | ---------------------------------- | --------------------------------------------------------- |
| 50.0% |       2 | `matches(Method, String, Class[])` | `java.lang.PublicMethods$Key`                             |
| 25.0% |       1 | `addType(String)`                  | `jdk.internal.org.objectweb.asm.SymbolTable`              |
| 25.0% |       1 | `setHandleForMetaMethod()`         | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|      % | Samples | Caller                | Location            |
| -----: | ------: | --------------------- | ------------------- |
| 100.0% |       4 | `put(Object, Object)` | `java.util.HashMap` |

##### `internalMemberName(Object)` (`java.lang.invoke.DirectMethodHandle`)

|     % | Samples | Caller                                                                                 | Location                                     |
| ----: | ------: | -------------------------------------------------------------------------------------- | -------------------------------------------- |
| 75.0% |       3 | `invokeSpecial(Object, Object, Object)`                                                | `java.lang.invoke.DirectMethodHandle$Holder` |
| 25.0% |       1 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `posix_madvise` (`libsystem_kernel.dylib`)

|      % | Samples | Caller        | Location                 |
| -----: | ------: | ------------- | ------------------------ |
| 100.0% |       3 | `free_medium` | `libsystem_malloc.dylib` |

##### `trySetAccessible()` (`java.lang.reflect.AccessibleObject`)

|      % | Samples | Caller                               | Location                                |
| -----: | ------: | ------------------------------------ | --------------------------------------- |
| 100.0% |       3 | `trySetAccessible(AccessibleObject)` | `org.codehaus.groovy.vmplugin.v9.Java9` |

##### `<init>()` (`java.math.MutableBigInteger`)

|      % | Samples | Caller                                | Location               |
| -----: | ------: | ------------------------------------- | ---------------------- |
| 100.0% |       3 | `divideAndRemainderKnuth(BigInteger)` | `java.math.BigInteger` |

##### `getInCache(LambdaFormEditor$TransformKey)` (`java.lang.invoke.LambdaFormEditor`)

|     % | Samples | Caller                                       | Location                            |
| ----: | ------: | -------------------------------------------- | ----------------------------------- |
| 66.7% |       2 | `addArgumentForm(int, LambdaForm$BasicType)` | `java.lang.invoke.LambdaFormEditor` |
| 33.3% |       1 | `spreadArgumentsForm(int, Class, int)`       | `java.lang.invoke.LambdaFormEditor` |

##### `uncustomize()` (`java.lang.invoke.LambdaForm`)

|     % | Samples | Caller                           | Location                            |
| ----: | ------: | -------------------------------- | ----------------------------------- |
| 50.0% |       1 | `<init>(MethodType, LambdaForm)` | `java.lang.invoke.MethodHandle`     |
| 50.0% |       1 | `lambdaFormEditor(LambdaForm)`   | `java.lang.invoke.LambdaFormEditor` |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Caller           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |       2 | `invoke(Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001089400` |

##### `isNullConversion(Class, Class, boolean)` (`sun.invoke.util.VerifyType`)

|      % | Samples | Caller                                                              | Location                            |
| -----: | ------: | ------------------------------------------------------------------- | ----------------------------------- |
| 100.0% |       2 | `computeValueConversions(MethodType, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `checkCustomized(MethodHandle)` (`java.lang.invoke.Invokers`)

|      % | Samples | Caller                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |       2 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `computeIfAbsent(Object, Function)` (`java.util.concurrent.ConcurrentHashMap`)

|      % | Samples | Caller                | Location                            |
| -----: | ------: | --------------------- | ----------------------------------- |
| 100.0% |       2 | `findSpecies(Object)` | `java.lang.invoke.ClassSpecializer` |

##### `isLatin1()` (`java.lang.String`)

|     % | Samples | Caller                | Location           |
| ----: | ------: | --------------------- | ------------------ |
| 50.0% |       1 | `charAt(int)`         | `java.lang.String` |
| 50.0% |       1 | `toUpperCase(Locale)` | `java.lang.String` |

##### `getEpsilonTarget(ATNConfig, Transition, boolean, boolean, PredictionContextCache, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|      % | Samples | Caller                                                                                                        | Location                                               |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       2 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                                                                      | Location                                             |
| ----: | ------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 70.8% |   1,066 | `_pthread_start`                                                                              | `libsystem_pthread.dylib`                            |
| 70.8% |   1,066 | `thread_start`                                                                                | `libsystem_pthread.dylib`                            |
| 70.8% |   1,065 | `Thread::call_run`                                                                            | `libjvm.dylib`                                       |
| 70.8% |   1,065 | `thread_native_entry`                                                                         | `libjvm.dylib`                                       |
| 67.4% |   1,015 | `JavaThread::thread_main_inner`                                                               | `libjvm.dylib`                                       |
| 67.3% |   1,013 | `CompileBroker::compiler_thread_loop`                                                         | `libjvm.dylib`                                       |
| 66.3% |     998 | `CompileBroker::invoke_compiler_on_method`                                                    | `libjvm.dylib`                                       |
| 54.9% |     826 | `C2Compiler::compile_method`                                                                  | `libjvm.dylib`                                       |
| 54.8% |     825 | `Compile::Compile`                                                                            | `libjvm.dylib`                                       |
| 27.9% |     420 | `main(String[])`                                                                              | `org.codenarc.CodeNarc`                              |
| 27.8% |     419 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| 27.7% |     417 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| 27.7% |     417 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 27.6% |     416 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800`  |
| 27.6% |     416 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 27.6% |     415 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000`  |
| 27.6% |     415 | `reinvoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800`  |
| 27.6% |     415 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00`  |
| 27.1% |     408 | `invokeVirtual(Object, Object, Object, Object)`                                               | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |
| 27.0% |     406 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000070010a9800`  |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|     % | Samples | Function                                   | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 67.3% |   1,013 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
| 66.3% |     998 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
| 54.9% |     826 | `C2Compiler::compile_method`               | `libjvm.dylib` |
| 54.8% |     825 | `Compile::Compile`                         | `libjvm.dylib` |
| 26.6% |     400 | `Compile::Code_Gen`                        | `libjvm.dylib` |
| 21.9% |     329 | `Compile::Optimize`                        | `libjvm.dylib` |
| 16.3% |     245 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
| 12.8% |     192 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
| 11.6% |     175 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
| 11.6% |     175 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
| 11.0% |     165 | `Compilation::compile_method`              | `libjvm.dylib` |
| 11.0% |     165 | `Compilation::Compilation`                 | `libjvm.dylib` |
| 10.3% |     155 | `Compilation::compile_java_method`         | `libjvm.dylib` |
|  6.2% |      93 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
|  5.7% |      86 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |
|  5.2% |      78 | `Compile::optimize_loops`                  | `libjvm.dylib` |
|  4.9% |      74 | `Compilation::build_hir`                   | `libjvm.dylib` |
|  3.7% |      56 | `Matcher::match`                           | `libjvm.dylib` |
|  3.7% |      56 | `Compilation::emit_lir`                    | `libjvm.dylib` |
|  3.5% |      52 | `GraphBuilder::GraphBuilder`               | `libjvm.dylib` |

##### Native

|     % | Samples | Function                                    | Location                  |
| ----: | ------: | ------------------------------------------- | ------------------------- |
| 70.8% |   1,066 | `_pthread_start`                            | `libsystem_pthread.dylib` |
| 70.8% |   1,066 | `thread_start`                              | `libsystem_pthread.dylib` |
| 70.8% |   1,065 | `Thread::call_run`                          | `libjvm.dylib`            |
| 70.8% |   1,065 | `thread_native_entry`                       | `libjvm.dylib`            |
| 67.4% |   1,015 | `JavaThread::thread_main_inner`             | `libjvm.dylib`            |
| 11.0% |     166 | `Compiler::compile_method`                  | `libjvm.dylib`            |
|  5.6% |      84 | `Parse::Parse`                              | `libjvm.dylib`            |
|  5.6% |      84 | `ParseGenerator::generate`                  | `libjvm.dylib`            |
|  5.4% |      81 | `Parse::do_all_blocks`                      | `libjvm.dylib`            |
|  5.3% |      80 | `Parse::do_one_block`                       | `libjvm.dylib`            |
|  5.0% |      76 | `Parse::do_call`                            | `libjvm.dylib`            |
|  3.9% |      58 | `PredictedCallGenerator::generate`          | `libjvm.dylib`            |
|  3.5% |      53 | `IRScope::IRScope`                          | `libjvm.dylib`            |
|  3.5% |      53 | `IR::IR`                                    | `libjvm.dylib`            |
|  3.1% |      47 | `WorkerThread::run`                         | `libjvm.dylib`            |
|  2.0% |      30 | `G1EvacuateRegionsBaseTask::work`           | `libjvm.dylib`            |
|  1.9% |      28 | `java_lang_Throwable::fill_in_stack_trace`  | `libjvm.dylib`            |
|  1.9% |      28 | `JVM_FillInStackTrace`                      | `libjvm.dylib`            |
|  1.9% |      28 | `Java_java_lang_Throwable_fillInStackTrace` | `libjava.dylib`           |
|  1.8% |      27 | `tlv_get_addr`                              | `libdyld.dylib`           |

##### Standard library

|     % | Samples | Function                                                                                      | Location                                             |
| ----: | ------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 27.8% |     419 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| 27.7% |     417 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| 27.7% |     417 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 27.6% |     416 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800`  |
| 27.6% |     416 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 27.6% |     415 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000`  |
| 27.6% |     415 | `reinvoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800`  |
| 27.6% |     415 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00`  |
| 27.1% |     408 | `invokeVirtual(Object, Object, Object, Object)`                                               | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |
| 27.0% |     406 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000070010a9800`  |
| 27.0% |     406 | `invokeVirtual(Object, Object, Object)`                                                       | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 27.0% |     406 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000070010c6400`  |
| 27.0% |     406 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x00000070010c7000`  |
| 26.8% |     403 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000700108e000`  |
| 26.8% |     403 | `linkToCallSite(Object, Object)`                                                              | `java.lang.invoke.Invokers$Holder`                   |
| 26.7% |     402 | `guardWithCatch(Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x0000007001098400`  |
| 26.7% |     402 | `reinvoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00`  |
| 26.7% |     402 | `guard(Object, Object)`                                                                       | `java.lang.invoke.LambdaForm$MH.0x000000700109a000`  |
| 26.6% |     400 | `invokeVirtual(Object, Object)`                                                               | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 26.5% |     399 | `invokeSpecial(Object, Object, Object)`                                                       | `java.lang.invoke.DirectMethodHandle$Holder`         |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Caller         | Location                  |
| -----: | ------: | -------------- | ------------------------- |
| 100.0% |   1,066 | `thread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |   1,065 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Caller           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   1,065 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   1,015 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |   1,013 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |     998 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |     826 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |     825 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|     % | Samples | Caller                                                                                          | Location                                             |
| ----: | ------: | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 99.5% |     417 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`     | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|  0.5% |       2 | `invokeStaticInit(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088c00` |
|  0.2% |       1 | `unknown`                                                                                       | `<unknown>`                                          |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001088800`)

|     % | Samples | Caller                                           | Location                                            |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 99.8% |     416 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800` |
| 96.4% |     402 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700108e000` |
| 82.7% |     345 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010d5c00` |
| 80.8% |     337 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001288800` |
| 57.3% |     239 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700138c400` |

##### `invokeExact_MT(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                                                                                           | Location                                               |
| -----: | ------: | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| 100.0% |     417 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface`        |
|  72.9% |     304 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`        |
|   1.0% |       4 | `invokeImpl(Object, Object[])`                                                                   | `jdk.internal.reflect.DirectMethodHandleAccessor`      |
|   0.2% |       1 | `invokeImpl(Object[])`                                                                           | `jdk.internal.reflect.DirectConstructorHandleAccessor` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010a1800`)

|      % | Samples | Caller                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     416 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|   8.4% |      35 | `reinvoke(Object, Object, Object)`       | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                                     | Location                                                                   |
| -----: | ------: | ------------------------------------------ | -------------------------------------------------------------------------- |
| 100.0% |     416 | `main(String[])`                           | `org.codenarc.CodeNarc`                                                    |
|  82.0% |     341 | `execute()`                                | `org.codenarc.CodeNarcRunner`                                              |
|  80.3% |     334 | `processDirectory(String, RuleSet)`        | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                           |
|  44.7% |     186 | `measureRuleProcessingTime(Rule, Closure)` | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
|  39.9% |     166 | `doCall(Object)`                           | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |

##### `guardWithCatch(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010aa000`)

|      % | Samples | Caller                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     415 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|  86.0% |     357 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `reinvoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010aa800`)

|      % | Samples | Caller                          | Location                                            |
| -----: | ------: | ------------------------------- | --------------------------------------------------- |
| 100.0% |     415 | `guard(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00` |
|  97.8% |     406 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x00000070010c7000` |
|  94.0% |     390 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x00000070010d4c00` |
|  50.8% |     211 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x00000070010abc00` |
|  15.9% |      66 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x00000070010d9c00` |

##### `guard(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010aac00`)

|      % | Samples | Caller                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     415 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|  86.0% |     357 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invokeVirtual(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001094400`)

|     % | Samples | Caller                                           | Location                                            |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 99.5% |     406 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010a9800` |
| 79.7% |     325 | `guardWithCatch(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010d4000` |
|  2.0% |       8 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010c9000` |
|  1.7% |       7 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070013dc400` |
|  1.0% |       4 | `invoke(Object, Object, long)`                   | `java.lang.invoke.LambdaForm$MH.0x0000007001332000` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010a9800`)

|      % | Samples | Caller                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     406 | `guardWithCatch(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000` |

##### `invokeVirtual(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     406 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010c6400` |
|   1.5% |       6 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010c7400` |
|   0.7% |       3 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010d5000` |
|   0.7% |       3 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700110e800` |
|   0.7% |       3 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001121800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010c6400`)

|      % | Samples | Caller                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     406 | `guardWithCatch(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010c7000`)

|      % | Samples | Caller                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |     406 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700108e000`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     403 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|   1.0% |       4 | `reinvoke(Object, Object)`       | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00` |

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Caller                   | Location                                 |
| ----: | ------: | ------------------------ | ---------------------------------------- |
| 99.3% |     400 | `execute(String[])`      | `org.codenarc.CodeNarc`                  |
| 12.4% |      50 | `getAst()`               | `org.codenarc.source.AbstractSourceCode` |
| 12.2% |      49 | `execute()`              | `org.codenarc.CodeNarcRunner`            |
| 10.7% |      43 | `createInitialRuleSet()` | `org.codenarc.CodeNarcRunner`            |
| 10.7% |      43 | `buildRuleSet()`         | `org.codenarc.CodeNarcRunner`            |

##### `guardWithCatch(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001098400`)

|      % | Samples | Caller                     | Location                                            |
| -----: | ------: | -------------------------- | --------------------------------------------------- |
| 100.0% |     402 | `reinvoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00` |
|  11.2% |      45 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `reinvoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001099c00`)

|      % | Samples | Caller                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |     402 | `guard(Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x000000700109a000` |
|  99.3% |     399 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700109bc00` |
|  17.9% |      72 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700109ac00` |

##### `guard(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700109a000`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     402 | `reinvoke(Object, Object)`       | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00` |
|  11.9% |      48 | `delegate(Object, Object)`       | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   4.0% |      16 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     400 | `Compile::Compile` | `libjvm.dylib` |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Caller                           | Location                                            |
| ----: | ------: | -------------------------------- | --------------------------------------------------- |
| 99.8% |     399 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700102b000` |
| 12.0% |      48 | `guardWithCatch(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001098400` |
|  0.8% |       3 | `invoke(Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001089400` |
|  0.3% |       1 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070015e0800` |
|  0.3% |       1 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700110e800` |

##### `invokeSpecial(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Caller                           | Location                                            |
| ----: | ------: | -------------------------------- | --------------------------------------------------- |
| 83.2% |     332 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001299800` |
| 40.4% |     161 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001383c00` |
| 28.3% |     113 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010c7800` |
|  9.5% |      38 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700132c000` |
|  3.5% |      14 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070011e0c00` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     329 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |     245 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 59.4% |     114 | `Compile::Optimize`       | `libjvm.dylib` |
| 40.6% |      78 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |     175 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     175 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |     166 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     165 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     165 | `Compiler::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     155 | `Compilation::compile_method` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 63.4% |      59 | `Compile::Optimize`                     | `libjvm.dylib` |
| 16.1% |      15 | `PhaseIdealLoop::optimize`              | `libjvm.dylib` |
| 15.1% |      14 | `PhaseMacroExpand::expand_macro_nodes`  | `libjvm.dylib` |
|  3.2% |       3 | `Compile::remove_speculative_types`     | `libjvm.dylib` |
|  1.1% |       1 | `Compile::inline_incrementally_cleanup` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |      86 | `PhaseIterGVN::optimize` | `libjvm.dylib` |
|   1.2% |       1 | `BoolNode::Ideal`        | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      84 | `ParseGenerator::generate` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|     % | Samples | Caller                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 98.8% |      83 | `Compile::Compile`                     | `libjvm.dylib` |
| 66.7% |      56 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
| 50.0% |      42 | `Parse::do_call`                       | `libjvm.dylib` |
|  1.2% |       1 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % | Samples | Caller         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |      81 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|      % | Samples | Caller                 | Location       |
| -----: | ------: | ---------------------- | -------------- |
| 100.0% |      80 | `Parse::do_all_blocks` | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      78 | `Compile::Optimize` | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |      76 | `Parse::do_one_block` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      74 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|     % | Samples | Caller                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 98.3% |      57 | `Parse::do_call`                       | `libjvm.dylib` |
| 31.0% |      18 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
|  1.7% |       1 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      56 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      56 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      53 | `IR::IR`                   | `libjvm.dylib` |
|   1.9% |       1 | `GraphBuilder::push_scope` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |      53 | `Compilation::build_hir` | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      52 | `IRScope::IRScope` | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      47 | `Thread::call_run` | `libjvm.dylib` |

##### `G1EvacuateRegionsBaseTask::work` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      30 | `WorkerThread::run` | `libjvm.dylib` |

##### `java_lang_Throwable::fill_in_stack_trace` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |      28 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |
| 100.0% |      28 | `JVM_FillInStackTrace`                     | `libjvm.dylib` |

##### `JVM_FillInStackTrace` (`libjvm.dylib`)

|      % | Samples | Caller                                      | Location        |
| -----: | ------: | ------------------------------------------- | --------------- |
| 100.0% |      28 | `Java_java_lang_Throwable_fillInStackTrace` | `libjava.dylib` |

##### `Java_java_lang_Throwable_fillInStackTrace` (`libjava.dylib`)

|      % | Samples | Caller                  | Location              |
| -----: | ------: | ----------------------- | --------------------- |
| 100.0% |      28 | `fillInStackTrace(int)` | `java.lang.Throwable` |

##### `tlv_get_addr` (`libdyld.dylib`)

|    % | Samples | Caller                          | Location       |
| ---: | ------: | ------------------------------- | -------------- |
| 7.4% |       2 | `TypeInstPtr::xmeet_helper`     | `libjvm.dylib` |
| 7.4% |       2 | `ciObjectFactory::get_metadata` | `libjvm.dylib` |
| 3.7% |       1 | `TypeInstPtr::add_offset`       | `libjvm.dylib` |
| 3.7% |       1 | `OopMap::OopMap`                | `libjvm.dylib` |
| 3.7% |       1 | `PhaseValues::uncached_makecon` | `libjvm.dylib` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 99.9% |   1,065 | `thread_native_entry` | `libjvm.dylib` |
|  0.1% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   1,066 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 95.3% |   1,015 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  4.4% |      47 | `WorkerThread::run`             | `libjvm.dylib` |
|  0.2% |       2 | `VMThread::run`                 | `libjvm.dylib` |
|  0.1% |       1 | `WatcherThread::run`            | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   1,065 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 99.8% |   1,013 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
|  0.1% |       1 | `JvmtiAgentThread::start_function_wrapper` | `libjvm.dylib` |
|  0.1% |       1 | `ServiceThread::service_thread_entry`      | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 98.5% |     998 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  1.5% |      15 | `CompileQueue::get`                        | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 82.8% |     826 | `C2Compiler::compile_method`    | `libjvm.dylib` |
| 16.6% |     166 | `Compiler::compile_method`      | `libjvm.dylib` |
|  0.3% |       3 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |
|  0.2% |       2 | `ciEnv::ciEnv`                  | `libjvm.dylib` |
|  0.1% |       1 | `CompilationLog::log_compile`   | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee              | Location       |
| ----: | ------: | ------------------- | -------------- |
| 99.9% |     825 | `Compile::Compile`  | `libjvm.dylib` |
|  0.1% |       1 | `Compile::~Compile` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 48.5% |     400 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 39.9% |     329 | `Compile::Optimize`                      | `libjvm.dylib` |
| 10.1% |      83 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  1.0% |       8 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.2% |       2 | `Type::Initialize`                       | `libjvm.dylib` |

##### `main(String[])` (`org.codenarc.CodeNarc`)

|     % | Samples | Callee                                                           | Location                               |
| ----: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| 99.0% |     416 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`     |
|  0.5% |       2 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |
|  0.5% |       2 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`     |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|     % | Samples | Callee                                                  | Location                                              |
| ----: | ------: | ------------------------------------------------------- | ----------------------------------------------------- |
| 99.5% |     417 | `invokeExact_MT(Object, Object, Object)`                | `java.lang.invoke.Invokers$Holder`                    |
| 13.8% |      58 | `doWithCallSite(MutableCallSite, Object[], BiFunction)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`       |
|  0.2% |       1 | `getLatestHitCount()`                                   | `org.codehaus.groovy.vmplugin.v8.MethodHandleWrapper` |
|  0.2% |       1 | `setTarget(MethodHandle)`                               | `java.lang.invoke.MutableCallSite`                    |
|  0.2% |       1 | `bypassCache(Boolean, Object[])`                        | `org.codehaus.groovy.vmplugin.v8.IndyInterface`       |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001088800`)

|      % | Samples | Callee                                                                                           | Location                                        |
| -----: | ------: | ------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| 100.0% |     417 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|  78.9% |     329 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `invokeExact_MT(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Callee                   | Location                                            |
| ----: | ------: | ------------------------ | --------------------------------------------------- |
| 97.4% |     406 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010c7000` |
| 95.7% |     399 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700109bc00` |
| 93.5% |     390 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010d4c00` |
| 80.1% |     334 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001282400` |
| 79.4% |     331 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070012a3c00` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010a1800`)

|      % | Samples | Callee                                                                                      | Location                                             |
| -----: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     416 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|   0.7% |       3 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x00000070010a1000`  |

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     416 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800` |

##### `guardWithCatch(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010aa000`)

|     % | Samples | Callee                                    | Location                                             |
| ----: | ------: | ----------------------------------------- | ---------------------------------------------------- |
| 97.8% |     406 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000070010a9800`  |
| 97.8% |     406 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000070010c6400`  |
| 80.5% |     334 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001094c00` |
| 45.3% |     188 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000070010d4800`  |
| 13.3% |      55 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x0000007001104000`  |

##### `reinvoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010aa800`)

|      % | Samples | Callee                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     415 | `guardWithCatch(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000` |
| 100.0% |     415 | `guard(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00` |
|  40.2% |     167 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700138c800` |
|   9.2% |      38 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700132c800` |
|   8.4% |      35 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800` |

##### `guard(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010aac00`)

|      % | Samples | Callee                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     415 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|  86.0% |     357 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   0.5% |       2 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x00000070010aa400` |

##### `invokeVirtual(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001094400`)

|     % | Samples | Callee                                   | Location                                       |
| ----: | ------: | ---------------------------------------- | ---------------------------------------------- |
| 81.9% |     334 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$1076`         |
| 79.7% |     325 | `collectViolations(SourceCode, RuleSet)` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |
| 19.1% |      78 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$207`          |
| 13.7% |      56 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$251`          |
| 10.5% |      43 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$1008`         |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010a9800`)

|      % | Samples | Callee                                          | Location                                             |
| -----: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     406 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |
|   0.2% |       1 | `collector(Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x0000007001031800`  |

##### `invokeVirtual(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Callee                           | Location                               |
| -----: | ------: | -------------------------------- | -------------------------------------- |
| 100.0% |     406 | `execute(String[])`              | `org.codenarc.CodeNarc`                |
|   1.0% |       4 | `parseArgs(String[])`            | `org.codenarc.CodeNarc`                |
|   0.7% |       3 | `validate(Source)`               | `javax.xml.validation.Validator`       |
|   0.5% |       2 | `writeTitle(Writer)`             | `org.codenarc.report.TextReportWriter` |
|   0.2% |       1 | `registerPlugin(CodeNarcPlugin)` | `org.codenarc.CodeNarcRunner`          |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010c6400`)

|      % | Samples | Callee                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |     406 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010c7000`)

|      % | Samples | Callee                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     406 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|  83.5% |     339 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700108e000`)

|     % | Samples | Callee                                                                                          | Location                                             |
| ----: | ------: | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 99.8% |     402 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`     | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|  1.0% |       4 | `collector(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x0000007001031800`  |
|  0.5% |       2 | `invokeStaticInit(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088c00` |

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |     403 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700108e000` |
|   5.0% |      20 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700109b400` |
|   4.0% |      16 | `guard(Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x000000700109a000` |

##### `guardWithCatch(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001098400`)

|     % | Samples | Callee                          | Location                                            |
| ----: | ------: | ------------------------------- | --------------------------------------------------- |
| 99.3% |     399 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000700102b000` |
| 14.2% |      57 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x0000007001105400` |
| 11.9% |      48 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
| 11.2% |      45 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
|  2.0% |       8 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x0000007001018400` |

##### `reinvoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001099c00`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     402 | `guardWithCatch(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001098400` |
| 100.0% |     402 | `guard(Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000700109a000` |
|   1.0% |       4 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700108e000` |
|   0.7% |       3 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070011eb400` |
|   0.2% |       1 | `identity_L(Object, Object)`     | `java.lang.invoke.LambdaForm$Holder`                |

##### `guard(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700109a000`)

|      % | Samples | Callee                     | Location                                            |
| -----: | ------: | -------------------------- | --------------------------------------------------- |
| 100.0% |     402 | `reinvoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00` |
|  11.7% |      47 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   0.2% |       1 | `invoke(Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000700109a400` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 61.3% |     245 | `PhaseChaitin::Register_Allocate`    | `libjvm.dylib` |
| 14.0% |      56 | `Matcher::match`                     | `libjvm.dylib` |
| 11.5% |      46 | `PhaseCFG::do_global_code_motion`    | `libjvm.dylib` |
| 10.0% |      40 | `PhaseOutput::Output`                | `libjvm.dylib` |
|  1.0% |       4 | `PhaseBlockLayout::PhaseBlockLayout` | `libjvm.dylib` |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Callee                    | Location                                   |
| ----: | ------: | ------------------------- | ------------------------------------------ |
| 99.8% |     399 | `execute()`               | `org.codenarc.CodeNarcRunner`              |
| 10.8% |      43 | `createInitialRuleSet()`  | `org.codenarc.CodeNarcRunner`              |
|  0.5% |       2 | `getFormattedTimestamp()` | `org.codenarc.report.AbstractReportWriter` |
|  0.3% |       1 | `createSourceAnalyzer()`  | `org.codenarc.CodeNarc`                    |
|  0.3% |       1 | `invokeBasic(Object[])`   | `java.lang.invoke.MethodHandle`            |

##### `invokeSpecial(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Callee           | Location                                                                    |
| ----: | ------: | ---------------- | --------------------------------------------------------------------------- |
| 83.7% |     334 | `doCall(Object)` | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
| 45.1% |     180 | `doCall(Object)` | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
| 13.0% |      52 | `doCall(Object)` | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`  |
| 10.8% |      43 | `doCall(Object)` | `org.codenarc.ruleset.XmlFileRuleSet$_closure1`                             |
| 10.8% |      43 | `doCall(Object)` | `org.codenarc.CodeNarcRunner$_createInitialRuleSetFromFiles_closure6`       |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 34.7% |     114 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| 23.7% |      78 | `Compile::optimize_loops`              | `libjvm.dylib` |
| 17.9% |      59 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |
|  5.8% |      19 | `PhaseMacroExpand::expand_macro_nodes` | `libjvm.dylib` |
|  5.5% |      18 | `PhaseCCP::PhaseCCP`                   | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 17.6% |      43 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| 16.7% |      41 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| 10.6% |      26 | `PhaseLive::compute`                       | `libjvm.dylib` |
| 10.6% |      26 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  9.8% |      24 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 91.1% |     175 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  7.8% |      15 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |
|  1.0% |       2 | `Chunk::next_chop`               | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 24.6% |      43 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 17.7% |      31 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
| 15.4% |      27 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
| 15.4% |      27 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
|  4.0% |       7 | `Node::is_CFG`                         | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Callee                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |     175 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                     | Location       |
| ----: | ------: | -------------------------- | -------------- |
| 99.4% |     165 | `Compilation::Compilation` | `libjvm.dylib` |
|  0.6% |       1 | `Chunk::next_chop`         | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 93.9% |     155 | `Compilation::compile_java_method` | `libjvm.dylib` |
|  5.5% |       9 | `ciEnv::register_method`           | `libjvm.dylib` |
|  0.6% |       1 | `Dependencies::assert_common_1`    | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     165 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 47.7% |      74 | `Compilation::build_hir`       | `libjvm.dylib` |
| 36.1% |      56 | `Compilation::emit_lir`        | `libjvm.dylib` |
| 13.5% |      21 | `Compilation::emit_code_body`  | `libjvm.dylib` |
|  1.9% |       3 | `ciMethod::ensure_method_data` | `libjvm.dylib` |
|  0.6% |       1 | `LinearScan::do_linear_scan`   | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 92.5% |      86 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |
|  1.1% |       1 | `RegionNode::Identity`        | `libjvm.dylib` |
|  1.1% |       1 | `PhiNode::Value`              | `libjvm.dylib` |
|  1.1% |       1 | `CProjNode::hash`             | `libjvm.dylib` |
|  1.1% |       1 | `MultiNode::hash`             | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 14.0% |      12 | `StoreNode::Ideal`           | `libjvm.dylib` |
| 11.6% |      10 | `PhaseIterGVN::subsume_node` | `libjvm.dylib` |
|  9.3% |       8 | `PhiNode::Ideal`             | `libjvm.dylib` |
|  9.3% |       8 | `IfNode::Ideal`              | `libjvm.dylib` |
|  9.3% |       8 | `RegionNode::Ideal`          | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|     % | Samples | Callee                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 96.4% |      81 | `Parse::do_all_blocks`    | `libjvm.dylib` |
|  4.8% |       4 | `Parse::do_exits`         | `libjvm.dylib` |
|  1.2% |       1 | `ciMethod::has_loops`     | `libjvm.dylib` |
|  1.2% |       1 | `JVMState::clone_shallow` | `libjvm.dylib` |
|  1.2% |       1 | `Parse::do_method_entry`  | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % | Samples | Callee         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |      84 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 98.8% |      80 | `Parse::do_one_block`           | `libjvm.dylib` |
|  1.2% |       1 | `Parse::ensure_phis_everywhere` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|     % | Samples | Callee                   | Location       |
| ----: | ------: | ------------------------ | -------------- |
| 95.0% |      76 | `Parse::do_call`         | `libjvm.dylib` |
| 17.5% |      14 | `Parse::do_field_access` | `libjvm.dylib` |
|  8.8% |       7 | `Parse::do_if`           | `libjvm.dylib` |
|  6.3% |       5 | `Parse::do_one_bytecode` | `libjvm.dylib` |
|  3.8% |       3 | `Parse::return_current`  | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      78 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|     % | Samples | Callee                                                | Location       |
| ----: | ------: | ----------------------------------------------------- | -------------- |
| 75.0% |      57 | `PredictedCallGenerator::generate`                    | `libjvm.dylib` |
| 55.3% |      42 | `ParseGenerator::generate`                            | `libjvm.dylib` |
| 21.1% |      16 | `Compile::call_generator`                             | `libjvm.dylib` |
|  5.3% |       4 | `ciBytecodeStream::get_method`                        | `libjvm.dylib` |
|  3.9% |       3 | `GraphKit::record_profiled_arguments_for_speculation` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|     % | Samples | Callee                                       | Location       |
| ----: | ------: | -------------------------------------------- | -------------- |
| 71.6% |      53 | `IR::IR`                                     | `libjvm.dylib` |
| 10.8% |       8 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |
|  5.4% |       4 | `IR::eliminate_null_checks`                  | `libjvm.dylib` |
|  4.1% |       3 | `RangeCheckElimination::eliminate`           | `libjvm.dylib` |
|  4.1% |       3 | `IR::compute_use_counts`                     | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 96.6% |      56 | `ParseGenerator::generate`         | `libjvm.dylib` |
| 31.0% |      18 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
|  5.2% |       3 | `GraphKit::subtype_check_receiver` | `libjvm.dylib` |
|  1.7% |       1 | `GraphKit::null_check_common`      | `libjvm.dylib` |
|  1.7% |       1 | `DirectCallGenerator::generate`    | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 69.6% |      39 | `Matcher::xform`                              | `libjvm.dylib` |
| 10.7% |       6 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |
| 10.7% |       6 | `Matcher::find_shared`                        | `libjvm.dylib` |
|  1.8% |       1 | `DecodeNNode::Opcode`                         | `libjvm.dylib` |
|  1.8% |       1 | `Matcher::find_shared_visit`                  | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 91.1% |      51 | `LinearScan::do_linear_scan` | `libjvm.dylib` |
|  8.9% |       5 | `BlockList::iterate_forward` | `libjvm.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 98.1% |      52 | `GraphBuilder::GraphBuilder` | `libjvm.dylib` |
|  1.9% |       1 | `XHandlers::XHandlers`       | `libjvm.dylib` |
|  1.9% |       1 | `resource_allocate_bytes`    | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      53 | `IRScope::IRScope` | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location        |
| ----: | ------: | ------------------------------------ | --------------- |
| 92.3% |      48 | `GraphBuilder::iterate_all_blocks`   | `libjvm.dylib`  |
|  3.8% |       2 | `BlockListBuilder::BlockListBuilder` | `libjvm.dylib`  |
|  1.9% |       1 | `GraphBuilder::setup_start_block`    | `libjvm.dylib`  |
|  1.9% |       1 | `tlv_get_addr`                       | `libdyld.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 63.8% |      30 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib` |
| 12.8% |       6 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib` |
| 10.6% |       5 | `G1ParallelCleaningTask::work`    | `libjvm.dylib` |
|  8.5% |       4 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib` |
|  4.3% |       2 | `G1CMRootRegionScanTask::work`    | `libjvm.dylib` |

##### `G1EvacuateRegionsBaseTask::work` (`libjvm.dylib`)

|     % | Samples | Callee                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 63.3% |      19 | `G1EvacuateRegionsTask::scan_roots`            | `libjvm.dylib` |
| 20.0% |       6 | `G1RemSet::scan_collection_set_code_roots`     | `libjvm.dylib` |
| 16.7% |       5 | `G1EvacuateRegionsTask::evacuate_live_objects` | `libjvm.dylib` |

##### `java_lang_Throwable::fill_in_stack_trace` (`libjvm.dylib`)

|      % | Samples | Callee                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |      28 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |
|  17.9% |       5 | `BacktraceBuilder::push`                   | `libjvm.dylib` |
|  10.7% |       3 | `frame::sender_for_compiled_frame`         | `libjvm.dylib` |
|   7.1% |       2 | `frame::sender_raw`                        | `libjvm.dylib` |
|   7.1% |       2 | `nmethod::metadata_at`                     | `libjvm.dylib` |

##### `JVM_FillInStackTrace` (`libjvm.dylib`)

|      % | Samples | Callee                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |      28 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `Java_java_lang_Throwable_fillInStackTrace` (`libjava.dylib`)

|      % | Samples | Callee                 | Location       |
| -----: | ------: | ---------------------- | -------------- |
| 100.0% |      28 | `JVM_FillInStackTrace` | `libjvm.dylib` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

Common call stack: `CompileBroker::compiler_thread_loop` (`libjvm.dylib`) ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                     |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1.8% |      27 | `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                 |
| 1.8% |      27 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                              |
| 1.1% |      16 | `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                   |
| 1.1% |      16 | `PhaseChaitin::elide_copy` (`libjvm.dylib`) ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                            |
| 0.8% |      12 | `PhaseIdealLoop::Dominators` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                    |
| 0.8% |      12 | `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                              |
| 0.8% |      12 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get`                                                                                                                                                                                                |
| 0.8% |      12 | `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                           |
| 0.7% |      11 | `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                  |
| 0.7% |      10 | `PhaseLive::add_liveout` (`libjvm.dylib`) ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                    |
| 0.7% |      10 | `Matcher::xform` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                    |
| 0.5% |       8 | `PhaseLive::compute` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                               |
| 0.5% |       8 | `PhaseChaitin::merge_multidefs` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                    |
| 0.5% |       8 | `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                         |
| 0.5% |       8 | `PhaseIFG::remove_node` (`libjvm.dylib`) ← `PhaseChaitin::Simplify` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                 |
| 0.5% |       8 | `Arena::contains` (`libjvm.dylib`) ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                |
| 0.5% |       7 | `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`) ← `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` |
| 0.4% |       6 | `Compile::identify_useful_nodes` (`libjvm.dylib`) ← `PhaseRemoveUseless::PhaseRemoveUseless` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                  |
| 0.4% |       6 | `PhaseIdealLoop::Dominators` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                        |
| 0.4% |       6 | `PhaseCFG::partial_latency_of_defs` (`libjvm.dylib`) ← `PhaseCFG::global_code_motion` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                               |
