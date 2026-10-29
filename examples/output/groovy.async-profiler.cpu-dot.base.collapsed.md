# Sampling profile

Collected 1,576 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Compiler         | 53.0% |     835 |
| Native           | 28.2% |     444 |
| Standard library | 17.3% |     273 |
| JIT              |  0.9% |      14 |
| Ours             |  0.6% |      10 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 1,124 samples (71.3%) Thread::call_run
│   ├── 1,066 samples (67.6%) JavaThread::thread_main_inner
│   │   └── 1,065 samples (67.6%) CompileBroker::compiler_thread_loop
│   │       ├── 1,055 samples (66.9%) CompileBroker::invoke_compiler_on_method
│   │       │   ├── 888 samples (56.3%) C2Compiler::compile_method
│   │       │   │   └── 888 samples (56.3%) Compile::Compile
│   │       │   │       ├── 419 samples (26.6%) Compile::Code_Gen
│   │       │   │       │   ├── 249 samples (15.8%) PhaseChaitin::Register_Allocate
│   │       │   │       │   │   ├── 45 samples (2.9%, self 1.9%) PhaseChaitin::Split
│   │       │   │       │   │   │   └── 15 samples (1.0%) 8 more callees, led by (0.3%) MachNode::rematerialize
│   │       │   │       │   │   ├── 44 samples (2.8%, self 1.3%) PhaseChaitin::build_ifg_physical
│   │       │   │       │   │   │   ├── 5 samples (0.3%, self 1.3% globally) IndexSetIterator::advance_and_next
│   │       │   │       │   │   │   └── 18 samples (1.1%) 7 more callees, led by (0.3%) PhaseChaitin::remove_bound_register_from_interfering_live_ranges
│   │       │   │       │   │   └── 159 samples (10.1%) 26 more callees, led by (2.0%) PhaseLive::compute
│   │       │   │       │   ├── 66 samples (4.2%) Matcher::match
│   │       │   │       │   │   ├── 49 samples (3.1%, self 0.6%) Matcher::xform
│   │       │   │       │   │   │   ├── 17 samples (1.1%) Matcher::match_tree
│   │       │   │       │   │   │   │   ├── 10 samples (0.6%) Matcher::Label_Root
│   │       │   │       │   │   │   │   └── … 2 samples (0.1%, self 2.1% globally) tlv_get_addr
│   │       │   │       │   │   │   └── 16 samples (1.0%) Arena::contains
│   │       │   │       │   │   └── 17 samples (1.1%) 6 more callees, led by (0.7%) Matcher::find_shared
│   │       │   │       │   └── 104 samples (6.6%) 6 more callees, led by (3.2%) PhaseCFG::do_global_code_motion
│   │       │   │       ├── 362 samples (23.0%) Compile::Optimize
│   │       │   │       │   ├── 66 samples (4.2%) PhaseIterGVN::optimize
│   │       │   │       │   │   └── 58 samples (3.7%) PhaseIterGVN::transform_old
│   │       │   │       │   │       ├── … 10 samples (0.6%, self 1.1% globally) Node::dominates
│   │       │   │       │   │       ├── … 4 samples (0.3%) Unique_Node_List::remove
│   │       │   │       │   │       └── 38 samples (2.4%) 20 more callees, led by (0.5%) PhaseIterGVN::subsume_node
│   │       │   │       │   └── 296 samples (18.8%) 14 more callees, led by (6.7%) PhaseIdealLoop::optimize
│   │       │   │       └── 107 samples (6.8%) 8 more callees, led by (5.8%) ParseGenerator::generate
│   │       │   └── 166 samples (10.5%) 5 more callees, led by (10.1%) Compiler::compile_method
│   │       └── … 9 samples (0.6%) __psynch_cvwait
│   └── 58 samples (3.7%) 2 more callees, led by (3.6%) WorkerThread::run
├── 426 samples (27.0%) main at org.codenarc.CodeNarc
│   └── 424 samples (26.9%) linkToCallSite at java.lang.invoke.Invokers$Holder
│       ├── … 211 samples (13.4%) invoke at java.lang.invoke.LambdaForm$MH.0x00000008010a1800
│       │   ├── … 203 samples (12.9%) invokeStatic at java.lang.invoke.LambdaForm$DMH.0x0000000801088800 …
│       │   └── … 2 samples (0.1%, self 1.5% globally) pthread_jit_write_protect_np
│       └── 212 samples (13.5%) 9 more callees, led by (6.3%) invoke at java.lang.invoke.LambdaForm$MH.0x00000008010d8c00
└── 25 samples (1.6%) 8 more root frames, led by (0.8%) <clinit> at org.codenarc.CodeNarc
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|    % | Samples | Function                                                                                                                                                 | Location    |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 2.1% |      33 | `tlv_get_addr`                                                                                                                                           | `<unknown>` |
| 1.9% |      30 | `PhaseChaitin::Split`                                                                                                                                    | `<unknown>` |
| 1.5% |      23 | `pthread_jit_write_protect_np`                                                                                                                           | `<unknown>` |
| 1.3% |      21 | `PhaseChaitin::build_ifg_physical`                                                                                                                       | `<unknown>` |
| 1.3% |      20 | `IndexSetIterator::advance_and_next`                                                                                                                     | `<unknown>` |
| 1.1% |      18 | `Node::dominates`                                                                                                                                        | `<unknown>` |
| 1.0% |      16 | `java_lang_Throwable::fill_in_stack_trace`                                                                                                               | `<unknown>` |
| 1.0% |      16 | `Arena::contains`                                                                                                                                        | `<unknown>` |
| 1.0% |      15 | `PhaseIdealLoop::build_loop_early`                                                                                                                       | `<unknown>` |
| 1.0% |      15 | `__psynch_mutexwait`                                                                                                                                     | `<unknown>` |
| 0.9% |      14 | `PhaseIdealLoop::build_loop_late`                                                                                                                        | `<unknown>` |
| 0.8% |      12 | `PhaseChaitin::post_allocate_copy_removal`                                                                                                               | `<unknown>` |
| 0.8% |      12 | `__psynch_cvwait`                                                                                                                                        | `<unknown>` |
| 0.7% |      11 | `InstanceKlass::find_method_index`                                                                                                                       | `<unknown>` |
| 0.7% |      11 | `PhaseChaitin::elide_copy`                                                                                                                               | `<unknown>` |
| 0.7% |      11 | `PhaseLive::add_liveout`                                                                                                                                 | `<unknown>` |
| 0.7% |      11 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>`                             | `<unknown>` |
| 0.6% |      10 | `Matcher::xform`                                                                                                                                         | `<unknown>` |
| 0.6% |      10 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `<unknown>` |
| 0.6% |      10 | `PhaseLive::compute`                                                                                                                                     | `<unknown>` |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|    % | Samples | Function                                    | Location    |
| ---: | ------: | ------------------------------------------- | ----------- |
| 1.9% |      30 | `PhaseChaitin::Split`                       | `<unknown>` |
| 1.3% |      21 | `PhaseChaitin::build_ifg_physical`          | `<unknown>` |
| 1.3% |      20 | `IndexSetIterator::advance_and_next`        | `<unknown>` |
| 1.1% |      18 | `Node::dominates`                           | `<unknown>` |
| 1.0% |      15 | `PhaseIdealLoop::build_loop_early`          | `<unknown>` |
| 0.9% |      14 | `PhaseIdealLoop::build_loop_late`           | `<unknown>` |
| 0.8% |      12 | `PhaseChaitin::post_allocate_copy_removal`  | `<unknown>` |
| 0.7% |      11 | `PhaseChaitin::elide_copy`                  | `<unknown>` |
| 0.7% |      11 | `PhaseLive::add_liveout`                    | `<unknown>` |
| 0.6% |      10 | `Matcher::xform`                            | `<unknown>` |
| 0.6% |      10 | `PhaseLive::compute`                        | `<unknown>` |
| 0.6% |       9 | `PhaseIdealLoop::Dominators`                | `<unknown>` |
| 0.6% |       9 | `PhaseIterGVN::add_users_to_worklist`       | `<unknown>` |
| 0.6% |       9 | `Unique_Node_List::remove`                  | `<unknown>` |
| 0.5% |       8 | `Node::is_CFG`                              | `<unknown>` |
| 0.5% |       8 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |
| 0.5% |       8 | `MultiNode::is_CFG`                         | `<unknown>` |
| 0.5% |       8 | `RegionNode::is_CFG`                        | `<unknown>` |
| 0.5% |       8 | `PhaseIFG::SquareUp`                        | `<unknown>` |
| 0.5% |       8 | `PhaseIdealLoop::is_dominator`              | `<unknown>` |

##### Native

|    % | Samples | Function                                                                                                                                                 | Location    |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 2.1% |      33 | `tlv_get_addr`                                                                                                                                           | `<unknown>` |
| 1.5% |      23 | `pthread_jit_write_protect_np`                                                                                                                           | `<unknown>` |
| 1.0% |      16 | `java_lang_Throwable::fill_in_stack_trace`                                                                                                               | `<unknown>` |
| 1.0% |      16 | `Arena::contains`                                                                                                                                        | `<unknown>` |
| 1.0% |      15 | `__psynch_mutexwait`                                                                                                                                     | `<unknown>` |
| 0.8% |      12 | `__psynch_cvwait`                                                                                                                                        | `<unknown>` |
| 0.7% |      11 | `InstanceKlass::find_method_index`                                                                                                                       | `<unknown>` |
| 0.7% |      11 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>`                             | `<unknown>` |
| 0.6% |      10 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `<unknown>` |
| 0.6% |      10 | `_platform_memset`                                                                                                                                       | `<unknown>` |
| 0.3% |       5 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                          | `<unknown>` |
| 0.3% |       5 | `sys_icache_invalidate`                                                                                                                                  | `<unknown>` |
| 0.3% |       5 | `frame::sender_for_compiled_frame`                                                                                                                       | `<unknown>` |
| 0.3% |       5 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                           | `<unknown>` |
| 0.3% |       4 | `ClassLoaderDataGraphKlassIteratorAtomic::next_klass`                                                                                                    | `<unknown>` |
| 0.3% |       4 | `bsearch`                                                                                                                                                | `<unknown>` |
| 0.3% |       4 | `SymbolTable::new_symbol`                                                                                                                                | `<unknown>` |
| 0.3% |       4 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                   | `<unknown>` |
| 0.3% |       4 | `posix_madvise`                                                                                                                                          | `<unknown>` |
| 0.2% |       3 | `stat64`                                                                                                                                                 | `<unknown>` |

##### Standard library

|    % | Samples | Function               | Location                                                  |
| ---: | ------: | ---------------------- | --------------------------------------------------------- |
| 0.4% |       6 | `equals`               | `java.util.Arrays`                                        |
| 0.4% |       6 | `newInstance`          | `java.lang.reflect.Array`                                 |
| 0.3% |       5 | `invoke`               | `java.lang.invoke.LambdaForm$MH.0x000000080102ac00`       |
| 0.3% |       4 | `<init>`               | `java.lang.invoke.MethodHandle`                           |
| 0.3% |       4 | `cast`                 | `java.lang.Class`                                         |
| 0.2% |       3 | `fromCache`            | `org.codehaus.groovy.vmplugin.v8.IndyInterface`           |
| 0.2% |       3 | `invokeStatic`         | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800`      |
| 0.2% |       3 | `invokeVirtual`        | `java.lang.invoke.DirectMethodHandle$Holder`              |
| 0.2% |       3 | `equals`               | `java.util.Objects`                                       |
| 0.2% |       3 | `setGuards`            | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| 0.2% |       3 | `hash`                 | `java.util.HashMap`                                       |
| 0.2% |       3 | `collector`            | `java.lang.invoke.LambdaForm$MH.0x00000008010a1000`       |
| 0.2% |       3 | `startsWith`           | `java.lang.String`                                        |
| 0.2% |       3 | `equals`               | `java.lang.invoke.LambdaFormEditor$Transform`             |
| 0.2% |       3 | `invokeBasic`          | `java.lang.invoke.MethodHandle`                           |
| 0.1% |       2 | `guard`                | `java.lang.invoke.LambdaForm$MH.0x000000080109a000`       |
| 0.1% |       2 | `doMethodInvoke`       | `org.codehaus.groovy.runtime.dgm$650`                     |
| 0.1% |       2 | `equals`               | `java.lang.invoke.MethodType`                             |
| 0.1% |       2 | `insertParameterTypes` | `java.lang.invoke.MethodType`                             |
| 0.1% |       2 | `collector`            | `java.lang.invoke.LambdaForm$MH.0x0000000801031800`       |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `tlv_get_addr` (`<unknown>`)

|    % | Samples | Caller                               | Location    |
| ---: | ------: | ------------------------------------ | ----------- |
| 6.1% |       2 | `TypeAryPtr::xmeet_helper`           | `<unknown>` |
| 6.1% |       2 | `TypeInstPtr::make`                  | `<unknown>` |
| 6.1% |       2 | `BlockListBuilder::BlockListBuilder` | `<unknown>` |
| 6.1% |       2 | `State::MachOperGenerator`           | `<unknown>` |
| 3.0% |       1 | `PhaseIFG::init`                     | `<unknown>` |

##### `PhaseChaitin::Split` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      30 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|     % | Samples | Caller                                           | Location    |
| ----: | ------: | ------------------------------------------------ | ----------- |
| 30.4% |       7 | `JVM_NewArray`                                   | `<unknown>` |
| 13.0% |       3 | `Unsafe_AllocateInstance`                        | `<unknown>` |
|  8.7% |       2 | `JVM_IsArrayClass`                               | `<unknown>` |
|  4.3% |       1 | `MHN_setCallSiteTargetNormal`                    | `<unknown>` |
|  4.3% |       1 | `InterpreterRuntime::frequency_counter_overflow` | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      21 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `IndexSetIterator::advance_and_next` (`<unknown>`)

|     % | Samples | Caller                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 25.0% |       5 | `PhaseChaitin::build_ifg_physical` | `<unknown>` |
| 25.0% |       5 | `PhaseLive::add_liveout`           | `<unknown>` |
| 10.0% |       2 | `PhaseChaitin::Simplify`           | `<unknown>` |
| 10.0% |       2 | `PhaseIFG::SquareUp`               | `<unknown>` |
| 10.0% |       2 | `PhaseChaitin::Select`             | `<unknown>` |

##### `Node::dominates` (`<unknown>`)

|      % | Samples | Caller                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |      18 | `MemNode::all_controls_dominate` | `<unknown>` |

##### `java_lang_Throwable::fill_in_stack_trace` (`<unknown>`)

|     % | Samples | Caller                                      | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 93.8% |      15 | `java_lang_Throwable::fill_in_stack_trace`  | `<unknown>` |
|  6.3% |       1 | `Java_java_lang_Throwable_fillInStackTrace` | `<unknown>` |

##### `Arena::contains` (`<unknown>`)

|      % | Samples | Caller           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |      16 | `Matcher::xform` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_early` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |      15 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `__psynch_mutexwait` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      15 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |      14 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `PhaseChaitin::post_allocate_copy_removal` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      12 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `__psynch_cvwait` (`<unknown>`)

|      % | Samples | Caller                  | Location    |
| -----: | ------: | ----------------------- | ----------- |
| 100.0% |      12 | `PlatformMonitor::wait` | `<unknown>` |

##### `InstanceKlass::find_method_index` (`<unknown>`)

|     % | Samples | Caller                                  | Location    |
| ----: | ------: | --------------------------------------- | ----------- |
| 81.8% |       9 | `InstanceKlass::uncached_lookup_method` | `<unknown>` |
|  9.1% |       1 | `InstanceKlass::find_method`            | `<unknown>` |
|  9.1% |       1 | `LinkResolver::resolve_method`          | `<unknown>` |

##### `PhaseChaitin::elide_copy` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |      11 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |

##### `PhaseLive::add_liveout` (`<unknown>`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |      11 | `PhaseLive::compute` | `<unknown>` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`<unknown>`)

|     % | Samples | Caller                                            | Location    |
| ----: | ------: | ------------------------------------------------- | ----------- |
| 90.9% |      10 | `G1ParScanThreadState::do_copy_to_survivor_space` | `<unknown>` |
|  9.1% |       1 | `G1ParScanThreadState::trim_queue_to_threshold`   | `<unknown>` |

##### `Matcher::xform` (`<unknown>`)

|      % | Samples | Caller           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |      10 | `Matcher::match` | `<unknown>` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`<unknown>`)

|     % | Samples | Caller                                           | Location    |
| ----: | ------: | ------------------------------------------------ | ----------- |
| 80.0% |       8 | `DebugInformationRecorder::describe_scope`       | `<unknown>` |
| 10.0% |       1 | `LIR_Assembler::record_non_safepoint_debug_info` | `<unknown>` |
| 10.0% |       1 | `IRScopeDebugInfo::record_debug_info`            | `<unknown>` |

##### `PhaseLive::compute` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      10 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `_platform_memset` (`<unknown>`)

|     % | Samples | Caller                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 10.0% |       1 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `<unknown>` |
| 10.0% |       1 | `PhaseIdealLoop::build_loop_early`            | `<unknown>` |
| 10.0% |       1 | `PhaseIdealLoop::create_new_if_for_predicate` | `<unknown>` |
| 10.0% |       1 | `MemAllocator::allocate`                      | `<unknown>` |
| 10.0% |       1 | `Parse::create_entry_map`                     | `<unknown>` |

##### `PhaseIdealLoop::Dominators` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       9 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `PhaseIterGVN::add_users_to_worklist` (`<unknown>`)

|     % | Samples | Caller                                | Location    |
| ----: | ------: | ------------------------------------- | ----------- |
| 44.4% |       4 | `PhaseIterGVN::transform_old`         | `<unknown>` |
| 22.2% |       2 | `PhaseIterGVN::PhaseIterGVN`          | `<unknown>` |
| 11.1% |       1 | `ConnectionGraph::split_unique_types` | `<unknown>` |
| 11.1% |       1 | `Node::set_req_X`                     | `<unknown>` |
| 11.1% |       1 | `RegionNode::Ideal`                   | `<unknown>` |

##### `Unique_Node_List::remove` (`<unknown>`)

|     % | Samples | Caller                                    | Location    |
| ----: | ------: | ----------------------------------------- | ----------- |
| 88.9% |       8 | `PhaseIterGVN::remove_globally_dead_node` | `<unknown>` |
| 11.1% |       1 | `PhaseIdealLoop::split_thru_phi`          | `<unknown>` |

##### `Node::is_CFG` (`<unknown>`)

|     % | Samples | Caller                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 37.5% |       3 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |
| 12.5% |       1 | `PhaseIdealLoop::Dominators`         | `<unknown>` |
| 12.5% |       1 | `PhaseIdealLoop::build_loop_tree`    | `<unknown>` |
| 12.5% |       1 | `PhaseIdealLoop::build_loop_late`    | `<unknown>` |
| 12.5% |       1 | `PhaseIdealLoop::build_loop_early`   | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`<unknown>`)

|     % | Samples | Caller                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 87.5% |       7 | `PhaseIdealLoop::build_loop_late`    | `<unknown>` |
| 12.5% |       1 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `MultiNode::is_CFG` (`<unknown>`)

|     % | Samples | Caller                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 37.5% |       3 | `PhaseIdealLoop::Dominators`         | `<unknown>` |
| 25.0% |       2 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |
| 12.5% |       1 | `PhaseIdealLoop::build_loop_late`    | `<unknown>` |
| 12.5% |       1 | `ProjNode::is_uncommon_trap_proj`    | `<unknown>` |
| 12.5% |       1 | `RegionNode::is_unreachable_region`  | `<unknown>` |

##### `RegionNode::is_CFG` (`<unknown>`)

|     % | Samples | Caller                                      | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 50.0% |       4 | `PhaseIdealLoop::build_and_optimize`        | `<unknown>` |
| 12.5% |       1 | `PhaseIdealLoop::try_sink_out_of_loop`      | `<unknown>` |
| 12.5% |       1 | `PhaseIdealLoop::build_loop_tree_impl`      | `<unknown>` |
| 12.5% |       1 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |
| 12.5% |       1 | `PhaseIdealLoop::Dominators`                | `<unknown>` |

##### `PhaseIFG::SquareUp` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       8 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseIdealLoop::is_dominator` (`<unknown>`)

|     % | Samples | Caller                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 75.0% |       6 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep`      | `<unknown>` |
| 12.5% |       1 | `PhaseIdealLoop::loop_predication_follow_branches` | `<unknown>` |
| 12.5% |       1 | `PhaseIdealLoop::build_loop_late_post_work`        | `<unknown>` |

##### `equals` (`java.util.Arrays`)

|     % | Samples | Caller                 | Location                         |
| ----: | ------: | ---------------------- | -------------------------------- |
| 33.3% |       2 | `equals`               | `java.lang.invoke.MethodType`    |
| 33.3% |       2 | `matches`              | `java.lang.PublicMethods$Key`    |
| 33.3% |       2 | `dropArgumentsToMatch` | `java.lang.invoke.MethodHandles` |

##### `newInstance` (`java.lang.reflect.Array`)

|      % | Samples | Caller         | Location                                             |
| -----: | ------: | -------------- | ---------------------------------------------------- |
| 100.0% |       6 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x000000080102b400` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`<unknown>`)

|     % | Samples | Caller                                                              | Location    |
| ----: | ------: | ------------------------------------------------------------------- | ----------- |
| 40.0% |       2 | `G1ScanHRForRegionClosure::scan_memregion`                          | `<unknown>` |
| 20.0% |       1 | `G1ParEvacuateFollowersClosure::do_void`                            | `<unknown>` |
| 20.0% |       1 | `G1ParScanThreadState::steal_and_trim_queue`                        | `<unknown>` |
| 20.0% |       1 | `void G1ParCopyClosure<(G1Barrier)1, false>::do_oop_work<oopDesc*>` | `<unknown>` |

##### `sys_icache_invalidate` (`<unknown>`)

|     % | Samples | Caller                              | Location    |
| ----: | ------: | ----------------------------------- | ----------- |
| 60.0% |       3 | `nmethod::oops_do_process_weak`     | `<unknown>` |
| 20.0% |       1 | `SharedRuntime::resolve_sub_helper` | `<unknown>` |
| 20.0% |       1 | `nmethod::nmethod`                  | `<unknown>` |

##### `frame::sender_for_compiled_frame` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |       5 | `java_lang_Throwable::fill_in_stack_trace` | `<unknown>` |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`<unknown>`)

|      % | Samples | Caller                                         | Location    |
| -----: | ------: | ---------------------------------------------- | ----------- |
| 100.0% |       5 | `void G1CMTask::process_grey_task_entry<true>` | `<unknown>` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x000000080102ac00`)

|     % | Samples | Caller   | Location                                            |
| ----: | ------: | -------- | --------------------------------------------------- |
| 60.0% |       3 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x0000000801031400` |
| 20.0% |       1 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x0000000801104c00` |
| 20.0% |       1 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000008015d6800` |

##### `ClassLoaderDataGraphKlassIteratorAtomic::next_klass` (`<unknown>`)

|      % | Samples | Caller                    | Location    |
| -----: | ------: | ------------------------- | ----------- |
| 100.0% |       4 | `KlassCleaningTask::work` | `<unknown>` |

##### `bsearch` (`<unknown>`)

|      % | Samples | Caller                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |       4 | `encoding_for_logical_immediate` | `<unknown>` |

##### `SymbolTable::new_symbol` (`<unknown>`)

|     % | Samples | Caller                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 25.0% |       1 | `JVM_FindLoadedClass`           | `<unknown>` |
| 25.0% |       1 | `SignatureStream::find_symbol`  | `<unknown>` |
| 25.0% |       1 | `SignatureStream::as_klass`     | `<unknown>` |
| 25.0% |       1 | `ciEnv::get_klass_by_name_impl` | `<unknown>` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`<unknown>`)

|      % | Samples | Caller                                                                   | Location    |
| -----: | ------: | ------------------------------------------------------------------------ | ----------- |
| 100.0% |       4 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` | `<unknown>` |

##### `posix_madvise` (`<unknown>`)

|      % | Samples | Caller        | Location    |
| -----: | ------: | ------------- | ----------- |
| 100.0% |       4 | `free_medium` | `<unknown>` |

##### `<init>` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Caller   | Location                                  |
| ----: | ------: | -------- | ----------------------------------------- |
| 75.0% |       3 | `<init>` | `java.lang.invoke.BoundMethodHandle`      |
| 25.0% |       1 | `<init>` | `java.lang.invoke.DelegatingMethodHandle` |

##### `cast` (`java.lang.Class`)

|      % | Samples | Caller          | Location                                     |
| -----: | ------: | --------------- | -------------------------------------------- |
| 100.0% |       4 | `invokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `stat64` (`<unknown>`)

|      % | Samples | Caller                  | Location                 |
| -----: | ------: | ----------------------- | ------------------------ |
| 100.0% |       3 | `getBooleanAttributes0` | `java.io.UnixFileSystem` |

##### `fromCache` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|      % | Samples | Caller         | Location                                             |
| -----: | ------: | -------------- | ---------------------------------------------------- |
| 100.0% |       3 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800` |

##### `invokeStatic` (`java.lang.invoke.LambdaForm$DMH.0x0000000801088800`)

|     % | Samples | Caller   | Location                                            |
| ----: | ------: | -------- | --------------------------------------------------- |
| 33.3% |       1 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000008010d8c00` |
| 33.3% |       1 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000008010c8c00` |
| 33.3% |       1 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000080109b400` |

##### `invokeVirtual` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Caller   | Location                                            |
| -----: | ------: | -------- | --------------------------------------------------- |
| 100.0% |       3 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x0000000801089400` |

##### `equals` (`java.util.Objects`)

|      % | Samples | Caller   | Location                               |
| -----: | ------: | -------- | -------------------------------------- |
| 100.0% |       3 | `equals` | `jdk.internal.util.StrongReferenceKey` |

##### `setGuards` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

|     % | Samples | Caller              | Location                                                  |
| ----: | ------: | ------------------- | --------------------------------------------------------- |
| 66.7% |       2 | `setCallSiteTarget` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| 33.3% |       1 | `castAndSetGuards`  | `org.codehaus.groovy.vmplugin.v8.Selector$CastSelector`   |

##### `hash` (`java.util.HashMap`)

|      % | Samples | Caller    | Location            |
| -----: | ------: | --------- | ------------------- |
| 100.0% |       3 | `getNode` | `java.util.HashMap` |

##### `collector` (`java.lang.invoke.LambdaForm$MH.0x00000008010a1000`)

|     % | Samples | Caller   | Location                                            |
| ----: | ------: | -------- | --------------------------------------------------- |
| 33.3% |       1 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000008010a1800` |
| 33.3% |       1 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000008010cc400` |
| 33.3% |       1 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x0000000801328800` |

##### `startsWith` (`java.lang.String`)

|     % | Samples | Caller                      | Location                                       |
| ----: | ------: | --------------------------- | ---------------------------------------------- |
| 33.3% |       1 | `applyStrayPropertyMethods` | `groovy.lang.MetaClassImpl`                    |
| 33.3% |       1 | `endsWith`                  | `java.lang.String`                             |
| 33.3% |       1 | `initValue`                 | `org.codehaus.groovy.reflection.CachedClass$3` |

##### `equals` (`java.lang.invoke.LambdaFormEditor$Transform`)

|      % | Samples | Caller       | Location                            |
| -----: | ------: | ------------ | ----------------------------------- |
| 100.0% |       3 | `getInCache` | `java.lang.invoke.LambdaFormEditor` |

##### `invokeBasic` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Caller           | Location                                             |
| ----: | ------: | ---------------- | ---------------------------------------------------- |
| 33.3% |       1 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder`                   |
| 33.3% |       1 | `invokeSpecial`  | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 33.3% |       1 | `invokeVirtual`  | `java.lang.invoke.LambdaForm$DMH.0x0000000801328c00` |

##### `guard` (`java.lang.invoke.LambdaForm$MH.0x000000080109a000`)

|     % | Samples | Caller     | Location                                            |
| ----: | ------: | ---------- | --------------------------------------------------- |
| 50.0% |       1 | `reinvoke` | `java.lang.invoke.LambdaForm$MH.0x0000000801099c00` |
| 50.0% |       1 | `delegate` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `doMethodInvoke` (`org.codehaus.groovy.runtime.dgm$650`)

|      % | Samples | Caller          | Location                                             |
| -----: | ------: | --------------- | ---------------------------------------------------- |
| 100.0% |       2 | `invokeVirtual` | `java.lang.invoke.LambdaForm$DMH.0x0000000801094400` |

##### `equals` (`java.lang.invoke.MethodType`)

|     % | Samples | Caller   | Location                      |
| ----: | ------: | -------- | ----------------------------- |
| 50.0% |       1 | `equals` | `java.lang.invoke.MethodType` |
| 50.0% |       1 | `equals` | `java.util.Objects`           |

##### `insertParameterTypes` (`java.lang.invoke.MethodType`)

|      % | Samples | Caller                 | Location                         |
| -----: | ------: | ---------------------- | -------------------------------- |
| 100.0% |       2 | `dropArgumentsTrusted` | `java.lang.invoke.MethodHandles` |

##### `collector` (`java.lang.invoke.LambdaForm$MH.0x0000000801031800`)

|     % | Samples | Caller   | Location                                            |
| ----: | ------: | -------- | --------------------------------------------------- |
| 50.0% |       1 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000080108e000` |
| 50.0% |       1 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000080109b800` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                   | Location                                             |
| ----: | ------: | ------------------------------------------ | ---------------------------------------------------- |
| 71.4% |   1,125 | `_pthread_start`                           | `<unknown>`                                          |
| 71.4% |   1,125 | `thread_start`                             | `<unknown>`                                          |
| 71.3% |   1,124 | `Thread::call_run`                         | `<unknown>`                                          |
| 71.3% |   1,124 | `thread_native_entry`                      | `<unknown>`                                          |
| 67.6% |   1,066 | `JavaThread::thread_main_inner`            | `<unknown>`                                          |
| 67.6% |   1,065 | `CompileBroker::compiler_thread_loop`      | `<unknown>`                                          |
| 66.9% |   1,055 | `CompileBroker::invoke_compiler_on_method` | `<unknown>`                                          |
| 56.3% |     888 | `Compile::Compile`                         | `<unknown>`                                          |
| 56.3% |     888 | `C2Compiler::compile_method`               | `<unknown>`                                          |
| 27.0% |     426 | `main`                                     | `org.codenarc.CodeNarc`                              |
| 27.0% |     425 | `fromCache`                                | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| 26.9% |     424 | `invokeExact_MT`                           | `java.lang.invoke.Invokers$Holder`                   |
| 26.9% |     424 | `linkToCallSite`                           | `java.lang.invoke.Invokers$Holder`                   |
| 26.8% |     423 | `invokeStatic`                             | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800` |
| 26.8% |     422 | `invoke`                                   | `java.lang.invoke.LambdaForm$MH.0x00000008010a1800`  |
| 26.7% |     421 | `guardWithCatch`                           | `java.lang.invoke.LambdaForm$MH.0x00000008010aa000`  |
| 26.7% |     421 | `reinvoke`                                 | `java.lang.invoke.LambdaForm$MH.0x00000008010aa800`  |
| 26.7% |     421 | `guard`                                    | `java.lang.invoke.LambdaForm$MH.0x00000008010aac00`  |
| 26.6% |     419 | `Compile::Code_Gen`                        | `<unknown>`                                          |
| 26.3% |     415 | `invokeVirtual`                            | `java.lang.invoke.LambdaForm$DMH.0x0000000801094400` |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|     % | Samples | Function                                   | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 67.6% |   1,065 | `CompileBroker::compiler_thread_loop`      | `<unknown>` |
| 66.9% |   1,055 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
| 56.3% |     888 | `Compile::Compile`                         | `<unknown>` |
| 56.3% |     888 | `C2Compiler::compile_method`               | `<unknown>` |
| 26.6% |     419 | `Compile::Code_Gen`                        | `<unknown>` |
| 23.0% |     362 | `Compile::Optimize`                        | `<unknown>` |
| 15.8% |     249 | `PhaseChaitin::Register_Allocate`          | `<unknown>` |
| 13.1% |     206 | `PhaseIdealLoop::optimize`                 | `<unknown>` |
| 11.6% |     183 | `PhaseIdealLoop::build_and_optimize`       | `<unknown>` |
| 11.6% |     183 | `PhaseIdealLoop::PhaseIdealLoop`           | `<unknown>` |
| 10.1% |     159 | `Compilation::compile_method`              | `<unknown>` |
| 10.1% |     159 | `Compilation::Compilation`                 | `<unknown>` |
|  9.3% |     146 | `Compilation::compile_java_method`         | `<unknown>` |
|  6.5% |     103 | `PhaseIterGVN::optimize`                   | `<unknown>` |
|  6.5% |     103 | `Compile::optimize_loops`                  | `<unknown>` |
|  5.8% |      91 | `PhaseIterGVN::transform_old`              | `<unknown>` |
|  4.2% |      66 | `PhaseIdealLoop::build_loop_late`          | `<unknown>` |
|  4.2% |      66 | `Matcher::match`                           | `<unknown>` |
|  3.7% |      59 | `Compilation::build_hir`                   | `<unknown>` |
|  3.6% |      57 | `Compilation::emit_lir`                    | `<unknown>` |

##### Native

|     % | Samples | Function                                    | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 71.4% |   1,125 | `_pthread_start`                            | `<unknown>` |
| 71.4% |   1,125 | `thread_start`                              | `<unknown>` |
| 71.3% |   1,124 | `Thread::call_run`                          | `<unknown>` |
| 71.3% |   1,124 | `thread_native_entry`                       | `<unknown>` |
| 67.6% |   1,066 | `JavaThread::thread_main_inner`             | `<unknown>` |
| 10.1% |     159 | `Compiler::compile_method`                  | `<unknown>` |
|  6.0% |      94 | `Parse::Parse`                              | `<unknown>` |
|  6.0% |      94 | `ParseGenerator::generate`                  | `<unknown>` |
|  5.8% |      92 | `Parse::do_one_block`                       | `<unknown>` |
|  5.8% |      92 | `Parse::do_all_blocks`                      | `<unknown>` |
|  5.3% |      83 | `Parse::do_call`                            | `<unknown>` |
|  3.6% |      57 | `WorkerThread::run`                         | `<unknown>` |
|  3.4% |      53 | `PredictedCallGenerator::generate`          | `<unknown>` |
|  3.0% |      48 | `IRScope::IRScope`                          | `<unknown>` |
|  3.0% |      48 | `IR::IR`                                    | `<unknown>` |
|  3.0% |      47 | `Java_java_lang_Throwable_fillInStackTrace` | `<unknown>` |
|  2.9% |      45 | `JVM_FillInStackTrace`                      | `<unknown>` |
|  2.8% |      44 | `java_lang_Throwable::fill_in_stack_trace`  | `<unknown>` |
|  2.1% |      33 | `tlv_get_addr`                              | `<unknown>` |
|  1.9% |      30 | `G1EvacuateRegionsBaseTask::work`           | `<unknown>` |

##### Standard library

|     % | Samples | Function         | Location                                             |
| ----: | ------: | ---------------- | ---------------------------------------------------- |
| 27.0% |     425 | `fromCache`      | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| 26.9% |     424 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder`                   |
| 26.9% |     424 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder`                   |
| 26.8% |     423 | `invokeStatic`   | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800` |
| 26.8% |     422 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000008010a1800`  |
| 26.7% |     421 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x00000008010aa000`  |
| 26.7% |     421 | `reinvoke`       | `java.lang.invoke.LambdaForm$MH.0x00000008010aa800`  |
| 26.7% |     421 | `guard`          | `java.lang.invoke.LambdaForm$MH.0x00000008010aac00`  |
| 26.3% |     415 | `invokeVirtual`  | `java.lang.invoke.LambdaForm$DMH.0x0000000801094400` |
| 26.1% |     412 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000008010a9800`  |
| 26.1% |     411 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000008010c7400`  |
| 26.1% |     411 | `invokeVirtual`  | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 26.1% |     411 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000080108e000`  |
| 26.1% |     411 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000008010c6800`  |
| 26.0% |     410 | `invokeSpecial`  | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 25.9% |     408 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x0000000801098400`  |
| 25.9% |     408 | `reinvoke`       | `java.lang.invoke.LambdaForm$MH.0x0000000801099c00`  |
| 25.9% |     408 | `guard`          | `java.lang.invoke.LambdaForm$MH.0x000000080109a000`  |
| 25.7% |     405 | `invokeImpl`     | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| 25.7% |     405 | `invoke`         | `jdk.internal.reflect.DirectMethodHandleAccessor`    |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`<unknown>`)

|      % | Samples | Caller         | Location    |
| -----: | ------: | -------------- | ----------- |
| 100.0% |   1,125 | `thread_start` | `<unknown>` |

##### `Thread::call_run` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |   1,124 | `thread_native_entry` | `<unknown>` |

##### `thread_native_entry` (`<unknown>`)

|      % | Samples | Caller           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |   1,124 | `_pthread_start` | `<unknown>` |

##### `JavaThread::thread_main_inner` (`<unknown>`)

|      % | Samples | Caller             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |   1,066 | `Thread::call_run` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop` (`<unknown>`)

|      % | Samples | Caller                          | Location    |
| -----: | ------: | ------------------------------- | ----------- |
| 100.0% |   1,065 | `JavaThread::thread_main_inner` | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method` (`<unknown>`)

|      % | Samples | Caller                                | Location    |
| -----: | ------: | ------------------------------------- | ----------- |
| 100.0% |   1,055 | `CompileBroker::compiler_thread_loop` | `<unknown>` |

##### `Compile::Compile` (`<unknown>`)

|      % | Samples | Caller                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |     888 | `C2Compiler::compile_method` | `<unknown>` |

##### `C2Compiler::compile_method` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |     888 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |

##### `fromCache` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|     % | Samples | Caller             | Location                                             |
| ----: | ------: | ------------------ | ---------------------------------------------------- |
| 99.5% |     423 | `invokeStatic`     | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800` |
|  0.5% |       2 | `invokeStaticInit` | `java.lang.invoke.LambdaForm$DMH.0x0000000801088c00` |
|  0.2% |       1 | `[unknown]`        | `<unknown>`                                          |

##### `invokeExact_MT` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller         | Location                                               |
| -----: | ------: | -------------- | ------------------------------------------------------ |
| 100.0% |     424 | `fromCache`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface`        |
|  95.5% |     405 | `invokeImpl`   | `jdk.internal.reflect.DirectMethodHandleAccessor`      |
|  67.9% |     288 | `selectMethod` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`        |
|   4.0% |      17 | `invokeImpl`   | `jdk.internal.reflect.DirectConstructorHandleAccessor` |
|   0.2% |       1 | `invoke`       | `java.lang.invoke.BootstrapMethodInvoker`              |

##### `linkToCallSite` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller    | Location                                                                    |
| -----: | ------: | --------- | --------------------------------------------------------------------------- |
| 100.0% |     424 | `main`    | `org.codenarc.CodeNarc`                                                     |
|  96.5% |     409 | `execute` | `org.codenarc.CodeNarc`                                                     |
|  95.3% |     404 | `execute` | `org.codenarc.CodeNarcRunner`                                               |
|  79.5% |     337 | `analyze` | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  79.2% |     336 | `doCall`  | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |

##### `invokeStatic` (`java.lang.invoke.LambdaForm$DMH.0x0000000801088800`)

|     % | Samples | Caller   | Location                                            |
| ----: | ------: | -------- | --------------------------------------------------- |
| 99.8% |     422 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000008010a1800` |
| 96.7% |     409 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000080108e000` |
| 81.6% |     345 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000008010d8c00` |
| 79.9% |     338 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x0000000801283800` |
| 57.0% |     241 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x0000000801386c00` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000008010a1800`)

|      % | Samples | Caller           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |     422 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder`                  |
|   9.0% |      38 | `reinvoke`       | `java.lang.invoke.LambdaForm$MH.0x00000008010aa800` |

##### `guardWithCatch` (`java.lang.invoke.LambdaForm$MH.0x00000008010aa000`)

|      % | Samples | Caller     | Location                                            |
| -----: | ------: | ---------- | --------------------------------------------------- |
| 100.0% |     421 | `reinvoke` | `java.lang.invoke.LambdaForm$MH.0x00000008010aa800` |
|  88.1% |     371 | `delegate` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `reinvoke` (`java.lang.invoke.LambdaForm$MH.0x00000008010aa800`)

|      % | Samples | Caller   | Location                                            |
| -----: | ------: | -------- | --------------------------------------------------- |
| 100.0% |     421 | `guard`  | `java.lang.invoke.LambdaForm$MH.0x00000008010aac00` |
|  97.6% |     411 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000008010c7400` |
|  94.1% |     396 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000008010d3c00` |
|  51.8% |     218 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000008010abc00` |
|  15.4% |      65 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000008010c8000` |

##### `guard` (`java.lang.invoke.LambdaForm$MH.0x00000008010aac00`)

|      % | Samples | Caller     | Location                                            |
| -----: | ------: | ---------- | --------------------------------------------------- |
| 100.0% |     421 | `reinvoke` | `java.lang.invoke.LambdaForm$MH.0x00000008010aa800` |
|  88.1% |     371 | `delegate` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `Compile::Code_Gen` (`<unknown>`)

|      % | Samples | Caller             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |     419 | `Compile::Compile` | `<unknown>` |

##### `invokeVirtual` (`java.lang.invoke.LambdaForm$DMH.0x0000000801094400`)

|     % | Samples | Caller           | Location                                            |
| ----: | ------: | ---------------- | --------------------------------------------------- |
| 99.3% |     412 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000008010a9800` |
| 78.1% |     324 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x00000008010d3000` |
|  1.9% |       8 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000080128dc00` |
|  1.4% |       6 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000008010c9c00` |
|  1.0% |       4 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000000801291400` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000008010a9800`)

|      % | Samples | Caller           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |     412 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x00000008010aa000` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000008010c7400`)

|      % | Samples | Caller           | Location                           |
| -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% |     411 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder` |

##### `invokeVirtual` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Caller           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |     411 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000008010c6800` |
|  98.3% |     404 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000080102b000` |
|  11.9% |      49 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x0000000801098400` |
|   1.2% |       5 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000008010c7800` |
|   1.2% |       5 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000008010d8000` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x000000080108e000`)

|      % | Samples | Caller           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |     411 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder`                  |
|   0.7% |       3 | `reinvoke`       | `java.lang.invoke.LambdaForm$MH.0x0000000801099c00` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000008010c6800`)

|      % | Samples | Caller           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |     411 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x00000008010aa000` |
|   0.2% |       1 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder`                  |

##### `invokeSpecial` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Caller           | Location                                            |
| ----: | ------: | ---------------- | --------------------------------------------------- |
| 82.0% |     336 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x00000008010d3000` |
| 81.2% |     333 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000000801296800` |
| 81.0% |     332 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000080128dc00` |
| 48.5% |     199 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000080149c000` |
| 39.3% |     161 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000080137dc00` |

##### `guardWithCatch` (`java.lang.invoke.LambdaForm$MH.0x0000000801098400`)

|      % | Samples | Caller     | Location                                            |
| -----: | ------: | ---------- | --------------------------------------------------- |
| 100.0% |     408 | `reinvoke` | `java.lang.invoke.LambdaForm$MH.0x0000000801099c00` |
|   8.6% |      35 | `delegate` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `reinvoke` (`java.lang.invoke.LambdaForm$MH.0x0000000801099c00`)

|      % | Samples | Caller   | Location                                            |
| -----: | ------: | -------- | --------------------------------------------------- |
| 100.0% |     408 | `guard`  | `java.lang.invoke.LambdaForm$MH.0x000000080109a000` |
|  99.0% |     404 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000080109bc00` |
|  20.3% |      83 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000080109ac00` |

##### `guard` (`java.lang.invoke.LambdaForm$MH.0x000000080109a000`)

|      % | Samples | Caller           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |     408 | `reinvoke`       | `java.lang.invoke.LambdaForm$MH.0x0000000801099c00` |
|   9.3% |      38 | `delegate`       | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   1.5% |       6 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder`                  |

##### `invokeImpl` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Caller   | Location                                          |
| -----: | ------: | -------- | ------------------------------------------------- |
| 100.0% |     405 | `invoke` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Caller   | Location                   |
| -----: | ------: | -------- | -------------------------- |
| 100.0% |     405 | `invoke` | `java.lang.reflect.Method` |

##### `Compile::Optimize` (`<unknown>`)

|      % | Samples | Caller             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |     362 | `Compile::Compile` | `<unknown>` |

##### `PhaseChaitin::Register_Allocate` (`<unknown>`)

|      % | Samples | Caller              | Location    |
| -----: | ------: | ------------------- | ----------- |
| 100.0% |     249 | `Compile::Code_Gen` | `<unknown>` |

##### `PhaseIdealLoop::optimize` (`<unknown>`)

|     % | Samples | Caller                    | Location    |
| ----: | ------: | ------------------------- | ----------- |
| 51.5% |     106 | `Compile::Optimize`       | `<unknown>` |
| 48.5% |     100 | `Compile::optimize_loops` | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize` (`<unknown>`)

|      % | Samples | Caller                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |     183 | `PhaseIdealLoop::PhaseIdealLoop` | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`<unknown>`)

|      % | Samples | Caller                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |     183 | `PhaseIdealLoop::optimize` | `<unknown>` |

##### `Compilation::compile_method` (`<unknown>`)

|      % | Samples | Caller                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |     159 | `Compilation::Compilation` | `<unknown>` |

##### `Compilation::Compilation` (`<unknown>`)

|      % | Samples | Caller                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |     159 | `Compiler::compile_method` | `<unknown>` |

##### `Compiler::compile_method` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |     159 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |

##### `Compilation::compile_java_method` (`<unknown>`)

|      % | Samples | Caller                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |     146 | `Compilation::compile_method` | `<unknown>` |

##### `PhaseIterGVN::optimize` (`<unknown>`)

|     % | Samples | Caller                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 64.1% |      66 | `Compile::Optimize`                        | `<unknown>` |
| 21.4% |      22 | `PhaseIdealLoop::optimize`                 | `<unknown>` |
| 10.7% |      11 | `PhaseMacroExpand::expand_macro_nodes`     | `<unknown>` |
|  2.9% |       3 | `Compile::remove_speculative_types`        | `<unknown>` |
|  1.0% |       1 | `Compile::process_for_post_loop_opts_igvn` | `<unknown>` |

##### `Compile::optimize_loops` (`<unknown>`)

|     % | Samples | Caller              | Location    |
| ----: | ------: | ------------------- | ----------- |
| 99.0% |     102 | `Compile::Optimize` | `<unknown>` |
|  1.0% |       1 | `Compile::Compile`  | `<unknown>` |

##### `Parse::Parse` (`<unknown>`)

|      % | Samples | Caller                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |      94 | `ParseGenerator::generate` | `<unknown>` |

##### `ParseGenerator::generate` (`<unknown>`)

|     % | Samples | Caller                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 97.9% |      92 | `Compile::Compile`                     | `<unknown>` |
| 54.3% |      51 | `PredictedCallGenerator::generate`     | `<unknown>` |
| 46.8% |      44 | `Parse::do_call`                       | `<unknown>` |
|  1.1% |       1 | `CallGenerator::do_late_inline_helper` | `<unknown>` |

##### `Parse::do_one_block` (`<unknown>`)

|      % | Samples | Caller                 | Location    |
| -----: | ------: | ---------------------- | ----------- |
| 100.0% |      92 | `Parse::do_all_blocks` | `<unknown>` |

##### `Parse::do_all_blocks` (`<unknown>`)

|      % | Samples | Caller         | Location    |
| -----: | ------: | -------------- | ----------- |
| 100.0% |      92 | `Parse::Parse` | `<unknown>` |

##### `PhaseIterGVN::transform_old` (`<unknown>`)

|     % | Samples | Caller                   | Location    |
| ----: | ------: | ------------------------ | ----------- |
| 98.9% |      90 | `PhaseIterGVN::optimize` | `<unknown>` |
|  2.2% |       2 | `PhiNode::Ideal`         | `<unknown>` |
|  1.1% |       1 | `Compile::Optimize`      | `<unknown>` |
|  1.1% |       1 | `IfNode::Ideal_common`   | `<unknown>` |
|  1.1% |       1 | `split_if`               | `<unknown>` |

##### `Parse::do_call` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      83 | `Parse::do_one_block` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |      66 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `Matcher::match` (`<unknown>`)

|      % | Samples | Caller              | Location    |
| -----: | ------: | ------------------- | ----------- |
| 100.0% |      66 | `Compile::Code_Gen` | `<unknown>` |

##### `Compilation::build_hir` (`<unknown>`)

|      % | Samples | Caller                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |      59 | `Compilation::compile_java_method` | `<unknown>` |

##### `Compilation::emit_lir` (`<unknown>`)

|      % | Samples | Caller                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |      57 | `Compilation::compile_java_method` | `<unknown>` |

##### `WorkerThread::run` (`<unknown>`)

|      % | Samples | Caller             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |      57 | `Thread::call_run` | `<unknown>` |

##### `PredictedCallGenerator::generate` (`<unknown>`)

|     % | Samples | Caller                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 98.1% |      52 | `Parse::do_call`                       | `<unknown>` |
| 32.1% |      17 | `PredictedCallGenerator::generate`     | `<unknown>` |
|  1.9% |       1 | `CallGenerator::do_late_inline_helper` | `<unknown>` |

##### `IRScope::IRScope` (`<unknown>`)

|      % | Samples | Caller   | Location    |
| -----: | ------: | -------- | ----------- |
| 100.0% |      48 | `IR::IR` | `<unknown>` |

##### `IR::IR` (`<unknown>`)

|      % | Samples | Caller                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |      48 | `Compilation::build_hir` | `<unknown>` |

##### `Java_java_lang_Throwable_fillInStackTrace` (`<unknown>`)

|     % | Samples | Caller                | Location              |
| ----: | ------: | --------------------- | --------------------- |
| 97.9% |      46 | `fillInStackTrace`    | `java.lang.Throwable` |
|  2.1% |       1 | `[break_stack_range]` | `<unknown>`           |

##### `JVM_FillInStackTrace` (`<unknown>`)

|      % | Samples | Caller                                      | Location    |
| -----: | ------: | ------------------------------------------- | ----------- |
| 100.0% |      45 | `Java_java_lang_Throwable_fillInStackTrace` | `<unknown>` |

##### `java_lang_Throwable::fill_in_stack_trace` (`<unknown>`)

|     % | Samples | Caller                                      | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 97.7% |      43 | `JVM_FillInStackTrace`                      | `<unknown>` |
| 93.2% |      41 | `java_lang_Throwable::fill_in_stack_trace`  | `<unknown>` |
|  2.3% |       1 | `Java_java_lang_Throwable_fillInStackTrace` | `<unknown>` |

##### `tlv_get_addr` (`<unknown>`)

|    % | Samples | Caller                               | Location    |
| ---: | ------: | ------------------------------------ | ----------- |
| 6.1% |       2 | `TypeAryPtr::xmeet_helper`           | `<unknown>` |
| 6.1% |       2 | `TypeInstPtr::make`                  | `<unknown>` |
| 6.1% |       2 | `BlockListBuilder::BlockListBuilder` | `<unknown>` |
| 6.1% |       2 | `State::MachOperGenerator`           | `<unknown>` |
| 3.0% |       1 | `PhaseIFG::init`                     | `<unknown>` |

##### `G1EvacuateRegionsBaseTask::work` (`<unknown>`)

|      % | Samples | Caller              | Location    |
| -----: | ------: | ------------------- | ----------- |
| 100.0% |      30 | `WorkerThread::run` | `<unknown>` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`<unknown>`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 99.9% |   1,124 | `thread_native_entry` | `<unknown>` |
|  0.1% |       1 | `ThreadJavaMain`      | `<unknown>` |

##### `thread_start` (`<unknown>`)

|      % | Samples | Callee           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |   1,125 | `_pthread_start` | `<unknown>` |

##### `Thread::call_run` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 94.8% |   1,066 | `JavaThread::thread_main_inner` | `<unknown>` |
|  5.1% |      57 | `WorkerThread::run`             | `<unknown>` |
|  0.1% |       1 | `WatcherThread::run`            | `<unknown>` |

##### `thread_native_entry` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |   1,124 | `Thread::call_run` | `<unknown>` |

##### `JavaThread::thread_main_inner` (`<unknown>`)

|     % | Samples | Callee                                | Location    |
| ----: | ------: | ------------------------------------- | ----------- |
| 99.9% |   1,065 | `CompileBroker::compiler_thread_loop` | `<unknown>` |
|  0.1% |       1 | `ServiceThread::service_thread_entry` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 99.1% |   1,055 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
|  0.9% |      10 | `CompileQueue::get`                        | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method` (`<unknown>`)

|     % | Samples | Callee                        | Location    |
| ----: | ------: | ----------------------------- | ----------- |
| 84.2% |     888 | `C2Compiler::compile_method`  | `<unknown>` |
| 15.1% |     159 | `Compiler::compile_method`    | `<unknown>` |
|  0.3% |       3 | `ciEnv::~ciEnv`               | `<unknown>` |
|  0.2% |       2 | `ciEnv::ciEnv`                | `<unknown>` |
|  0.1% |       1 | `CompilationLog::log_compile` | `<unknown>` |

##### `Compile::Compile` (`<unknown>`)

|     % | Samples | Callee                                   | Location    |
| ----: | ------: | ---------------------------------------- | ----------- |
| 47.2% |     419 | `Compile::Code_Gen`                      | `<unknown>` |
| 40.8% |     362 | `Compile::Optimize`                      | `<unknown>` |
| 10.4% |      92 | `ParseGenerator::generate`               | `<unknown>` |
|  0.7% |       6 | `PhaseRemoveUseless::PhaseRemoveUseless` | `<unknown>` |
|  0.3% |       3 | `CallGenerator::for_inline`              | `<unknown>` |

##### `C2Compiler::compile_method` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |     888 | `Compile::Compile` | `<unknown>` |

##### `main` (`org.codenarc.CodeNarc`)

|     % | Samples | Callee           | Location                               |
| ----: | ------: | ---------------- | -------------------------------------- |
| 99.5% |     424 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder`     |
|  0.2% |       1 | `loadClass`      | `java.lang.ClassLoader`                |
|  0.2% |       1 | `linkCallSite`   | `java.lang.invoke.MethodHandleNatives` |

##### `fromCache` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|     % | Samples | Callee               | Location                                                         |
| ----: | ------: | -------------------- | ---------------------------------------------------------------- |
| 99.8% |     424 | `invokeExact_MT`     | `java.lang.invoke.Invokers$Holder`                               |
| 15.1% |      64 | `doWithCallSite`     | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                  |
|  0.5% |       2 | `linkToTargetMethod` | `java.lang.invoke.Invokers$Holder`                               |
|  0.2% |       1 | `<init>`             | `org.codehaus.groovy.vmplugin.v8.IndyInterface$FallbackSupplier` |

##### `invokeExact_MT` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Callee   | Location                                            |
| ----: | ------: | -------- | --------------------------------------------------- |
| 96.9% |     411 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000008010c7400` |
| 95.3% |     404 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000080109bc00` |
| 93.4% |     396 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000008010d3c00` |
| 79.5% |     337 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000080128d400` |
| 79.2% |     336 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000080126a400` |

##### `linkToCallSite` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Callee   | Location                                            |
| ----: | ------: | -------- | --------------------------------------------------- |
| 99.5% |     422 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000008010a1800` |
| 96.9% |     411 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000080108e000` |
| 81.4% |     345 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000008010d8c00` |
| 79.7% |     338 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x0000000801283800` |
|  5.2% |      22 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000080109b400` |

##### `invokeStatic` (`java.lang.invoke.LambdaForm$DMH.0x0000000801088800`)

|      % | Samples | Callee         | Location                                        |
| -----: | ------: | -------------- | ----------------------------------------------- |
| 100.0% |     423 | `fromCache`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|  77.3% |     327 | `selectMethod` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000008010a1800`)

|      % | Samples | Callee         | Location                                             |
| -----: | ------: | -------------- | ---------------------------------------------------- |
| 100.0% |     422 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800` |
|   1.9% |       8 | `collector`    | `java.lang.invoke.LambdaForm$MH.0x00000008010a1000`  |

##### `guardWithCatch` (`java.lang.invoke.LambdaForm$MH.0x00000008010aa000`)

|     % | Samples | Callee            | Location                                             |
| ----: | ------: | ----------------- | ---------------------------------------------------- |
| 97.9% |     412 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000008010a9800`  |
| 97.6% |     411 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000008010c6800`  |
| 80.0% |     337 | `invokeInterface` | `java.lang.invoke.LambdaForm$DMH.0x0000000801094c00` |
| 45.1% |     190 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000008010d3800`  |
| 13.5% |      57 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x0000000801121000`  |

##### `reinvoke` (`java.lang.invoke.LambdaForm$MH.0x00000008010aa800`)

|      % | Samples | Callee           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |     421 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x00000008010aa000` |
| 100.0% |     421 | `guard`          | `java.lang.invoke.LambdaForm$MH.0x00000008010aac00` |
|  40.6% |     171 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000000801387000` |
|   9.0% |      38 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000008010a1800` |
|   7.6% |      32 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000000801328800` |

##### `guard` (`java.lang.invoke.LambdaForm$MH.0x00000008010aac00`)

|      % | Samples | Callee     | Location                                            |
| -----: | ------: | ---------- | --------------------------------------------------- |
| 100.0% |     421 | `reinvoke` | `java.lang.invoke.LambdaForm$MH.0x00000008010aa800` |
|  88.1% |     371 | `delegate` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   0.2% |       1 | `invoke`   | `java.lang.invoke.LambdaForm$MH.0x00000008010c6c00` |

##### `Compile::Code_Gen` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 59.4% |     249 | `PhaseChaitin::Register_Allocate` | `<unknown>` |
| 15.8% |      66 | `Matcher::match`                  | `<unknown>` |
| 11.9% |      50 | `PhaseCFG::do_global_code_motion` | `<unknown>` |
|  9.5% |      40 | `PhaseOutput::Output`             | `<unknown>` |
|  1.4% |       6 | `PhaseOutput::install_code`       | `<unknown>` |

##### `invokeVirtual` (`java.lang.invoke.LambdaForm$DMH.0x0000000801094400`)

|     % | Samples | Callee              | Location                                       |
| ----: | ------: | ------------------- | ---------------------------------------------- |
| 81.0% |     336 | `doMethodInvoke`    | `org.codehaus.groovy.runtime.dgm$1076`         |
| 78.1% |     324 | `collectViolations` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |
| 21.0% |      87 | `doMethodInvoke`    | `org.codehaus.groovy.runtime.dgm$207`          |
| 12.0% |      50 | `doMethodInvoke`    | `org.codehaus.groovy.runtime.dgm$251`          |
| 10.8% |      45 | `doMethodInvoke`    | `org.codehaus.groovy.runtime.dgm$1008`         |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000008010a9800`)

|      % | Samples | Callee          | Location                                             |
| -----: | ------: | --------------- | ---------------------------------------------------- |
| 100.0% |     412 | `invokeVirtual` | `java.lang.invoke.LambdaForm$DMH.0x0000000801094400` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000008010c7400`)

|      % | Samples | Callee     | Location                                            |
| -----: | ------: | ---------- | --------------------------------------------------- |
| 100.0% |     411 | `reinvoke` | `java.lang.invoke.LambdaForm$MH.0x00000008010aa800` |
|  83.0% |     341 | `delegate` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invokeVirtual` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Callee                 | Location                                      |
| -----: | ------: | ---------------------- | --------------------------------------------- |
| 100.0% |     411 | `execute`              | `org.codenarc.CodeNarc`                       |
|  98.3% |     404 | `execute`              | `org.codenarc.CodeNarcRunner`                 |
|  11.2% |      46 | `createInitialRuleSet` | `org.codenarc.CodeNarcRunner`                 |
|   0.7% |       3 | `parseArgs`            | `org.codenarc.CodeNarc`                       |
|   0.5% |       2 | `visit`                | `org.codehaus.groovy.ast.stmt.BlockStatement` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x000000080108e000`)

|     % | Samples | Callee             | Location                                             |
| ----: | ------: | ------------------ | ---------------------------------------------------- |
| 99.5% |     409 | `invokeStatic`     | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800` |
|  1.0% |       4 | `collector`        | `java.lang.invoke.LambdaForm$MH.0x0000000801031800`  |
|  0.5% |       2 | `invokeStaticInit` | `java.lang.invoke.LambdaForm$DMH.0x0000000801088c00` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000008010c6800`)

|      % | Samples | Callee          | Location                                             |
| -----: | ------: | --------------- | ---------------------------------------------------- |
| 100.0% |     411 | `invokeVirtual` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|   0.2% |       1 | `invokeSpecial` | `java.lang.invoke.LambdaForm$DMH.0x0000000801084000` |

##### `invokeSpecial` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Callee             | Location                                                                    |
| ----: | ------: | ------------------ | --------------------------------------------------------------------------- |
| 82.0% |     336 | `doCall`           | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
| 82.0% |     336 | `processDirectory` | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 43.7% |     179 | `doCall`           | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
| 11.5% |      47 | `buildRuleSet`     | `org.codenarc.CodeNarcRunner`                                               |
| 11.5% |      47 | `doCall`           | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`  |

##### `guardWithCatch` (`java.lang.invoke.LambdaForm$MH.0x0000000801098400`)

|     % | Samples | Callee          | Location                                            |
| ----: | ------: | --------------- | --------------------------------------------------- |
| 99.0% |     404 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000080102b000` |
| 12.3% |      50 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x0000000801105400` |
| 12.0% |      49 | `invokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder`        |
| 12.0% |      49 | `invokeVirtual` | `java.lang.invoke.DirectMethodHandle$Holder`        |
|  2.9% |      12 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x0000000801018400` |

##### `reinvoke` (`java.lang.invoke.LambdaForm$MH.0x0000000801099c00`)

|      % | Samples | Callee           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |     408 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x0000000801098400` |
| 100.0% |     408 | `guard`          | `java.lang.invoke.LambdaForm$MH.0x000000080109a000` |
|   0.7% |       3 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000080108e000` |
|   0.5% |       2 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000008011eb400` |

##### `guard` (`java.lang.invoke.LambdaForm$MH.0x000000080109a000`)

|      % | Samples | Callee     | Location                                            |
| -----: | ------: | ---------- | --------------------------------------------------- |
| 100.0% |     408 | `reinvoke` | `java.lang.invoke.LambdaForm$MH.0x0000000801099c00` |
|   8.8% |      36 | `delegate` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   0.7% |       3 | `invoke`   | `java.lang.invoke.LambdaForm$MH.0x000000080109a400` |

##### `invokeImpl` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |     405 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder`                  |
|  84.9% |     344 | `invokeExact_MT` | `java.lang.invoke.LambdaForm$MH.0x0000000801120c00` |
|  82.2% |     333 | `invokeExact_MT` | `java.lang.invoke.LambdaForm$MH.0x000000080103c000` |

##### `invoke` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee       | Location                                          |
| -----: | ------: | ------------ | ------------------------------------------------- |
| 100.0% |     405 | `invokeImpl` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `Compile::Optimize` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 29.3% |     106 | `PhaseIdealLoop::optimize`             | `<unknown>` |
| 28.2% |     102 | `Compile::optimize_loops`              | `<unknown>` |
| 18.2% |      66 | `PhaseIterGVN::optimize`               | `<unknown>` |
|  7.7% |      28 | `PhaseCCP::PhaseCCP`                   | `<unknown>` |
|  4.7% |      17 | `PhaseMacroExpand::expand_macro_nodes` | `<unknown>` |

##### `PhaseChaitin::Register_Allocate` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 18.1% |      45 | `PhaseChaitin::Split`                      | `<unknown>` |
| 17.7% |      44 | `PhaseChaitin::build_ifg_physical`         | `<unknown>` |
| 12.4% |      31 | `PhaseLive::compute`                       | `<unknown>` |
| 11.2% |      28 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |
|  6.8% |      17 | `PhaseChaitin::Select`                     | `<unknown>` |

##### `PhaseIdealLoop::optimize` (`<unknown>`)

|     % | Samples | Callee                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 88.8% |     183 | `PhaseIdealLoop::PhaseIdealLoop` | `<unknown>` |
| 10.7% |      22 | `PhaseIterGVN::optimize`         | `<unknown>` |
|  0.5% |       1 | `Chunk::next_chop`               | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 36.1% |      66 | `PhaseIdealLoop::build_loop_late`      | `<unknown>` |
| 14.8% |      27 | `PhaseIdealLoop::split_if_with_blocks` | `<unknown>` |
| 12.6% |      23 | `PhaseIdealLoop::build_loop_early`     | `<unknown>` |
| 10.9% |      20 | `PhaseIdealLoop::Dominators`           | `<unknown>` |
|  6.0% |      11 | `PhaseIdealLoop::build_loop_tree`      | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`<unknown>`)

|      % | Samples | Callee                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |     183 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `Compilation::compile_method` (`<unknown>`)

|     % | Samples | Callee                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 91.8% |     146 | `Compilation::compile_java_method` | `<unknown>` |
|  7.5% |      12 | `ciEnv::register_method`           | `<unknown>` |
|  0.6% |       1 | `Dependencies::assert_common_1`    | `<unknown>` |

##### `Compilation::Compilation` (`<unknown>`)

|      % | Samples | Callee                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |     159 | `Compilation::compile_method` | `<unknown>` |

##### `Compiler::compile_method` (`<unknown>`)

|      % | Samples | Callee                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |     159 | `Compilation::Compilation` | `<unknown>` |

##### `Compilation::compile_java_method` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 40.4% |      59 | `Compilation::build_hir`       | `<unknown>` |
| 39.0% |      57 | `Compilation::emit_lir`        | `<unknown>` |
| 18.5% |      27 | `Compilation::emit_code_body`  | `<unknown>` |
|  2.1% |       3 | `ciMethod::ensure_method_data` | `<unknown>` |

##### `PhaseIterGVN::optimize` (`<unknown>`)

|     % | Samples | Callee                        | Location    |
| ----: | ------: | ----------------------------- | ----------- |
| 87.4% |      90 | `PhaseIterGVN::transform_old` | `<unknown>` |
|  1.0% |       1 | `TypePtr::singleton`          | `<unknown>` |
|  1.0% |       1 | `TypeTuple::singleton`        | `<unknown>` |
|  1.0% |       1 | `NodeHash::hash_find_insert`  | `<unknown>` |
|  1.0% |       1 | `PhiNode::hash`               | `<unknown>` |

##### `Compile::optimize_loops` (`<unknown>`)

|     % | Samples | Callee                     | Location    |
| ----: | ------: | -------------------------- | ----------- |
| 97.1% |     100 | `PhaseIdealLoop::optimize` | `<unknown>` |
|  1.9% |       2 | `Compile::print_method`    | `<unknown>` |

##### `Parse::Parse` (`<unknown>`)

|     % | Samples | Callee                    | Location    |
| ----: | ------: | ------------------------- | ----------- |
| 97.9% |      92 | `Parse::do_all_blocks`    | `<unknown>` |
|  3.2% |       3 | `Parse::do_exits`         | `<unknown>` |
|  2.1% |       2 | `ciMethod::method_data`   | `<unknown>` |
|  2.1% |       2 | `Parse::do_method_entry`  | `<unknown>` |
|  2.1% |       2 | `Parse::create_entry_map` | `<unknown>` |

##### `ParseGenerator::generate` (`<unknown>`)

|      % | Samples | Callee         | Location    |
| -----: | ------: | -------------- | ----------- |
| 100.0% |      94 | `Parse::Parse` | `<unknown>` |

##### `Parse::do_one_block` (`<unknown>`)

|     % | Samples | Callee                   | Location    |
| ----: | ------: | ------------------------ | ----------- |
| 90.2% |      83 | `Parse::do_call`         | `<unknown>` |
| 23.9% |      22 | `Parse::do_field_access` | `<unknown>` |
|  5.4% |       5 | `Parse::array_load`      | `<unknown>` |
|  4.3% |       4 | `Parse::do_if`           | `<unknown>` |
|  3.3% |       3 | `Parse::do_one_bytecode` | `<unknown>` |

##### `Parse::do_all_blocks` (`<unknown>`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      92 | `Parse::do_one_block` | `<unknown>` |
|   2.2% |       2 | `Parse::merge_common` | `<unknown>` |

##### `PhaseIterGVN::transform_old` (`<unknown>`)

|     % | Samples | Callee                       | Location    |
| ----: | ------: | ---------------------------- | ----------- |
| 13.2% |      12 | `PhaseIterGVN::subsume_node` | `<unknown>` |
| 13.2% |      12 | `StoreNode::Ideal`           | `<unknown>` |
|  8.8% |       8 | `RegionNode::Ideal`          | `<unknown>` |
|  7.7% |       7 | `NodeHash::hash_find_insert` | `<unknown>` |
|  7.7% |       7 | `IfNode::Ideal`              | `<unknown>` |

##### `Parse::do_call` (`<unknown>`)

|     % | Samples | Callee                                                | Location    |
| ----: | ------: | ----------------------------------------------------- | ----------- |
| 62.7% |      52 | `PredictedCallGenerator::generate`                    | `<unknown>` |
| 53.0% |      44 | `ParseGenerator::generate`                            | `<unknown>` |
| 20.5% |      17 | `Compile::call_generator`                             | `<unknown>` |
|  6.0% |       5 | `ciBytecodeStream::get_method`                        | `<unknown>` |
|  6.0% |       5 | `GraphKit::record_profiled_arguments_for_speculation` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late` (`<unknown>`)

|     % | Samples | Callee                                      | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 66.7% |      44 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |
|  3.0% |       2 | `ProjNode::is_uncommon_trap_proj`           | `<unknown>` |
|  1.5% |       1 | `MultiNode::is_CFG`                         | `<unknown>` |
|  1.5% |       1 | `Node::unique_ctrl_out_or_null`             | `<unknown>` |
|  1.5% |       1 | `Node::is_CFG`                              | `<unknown>` |

##### `Matcher::match` (`<unknown>`)

|     % | Samples | Callee                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 74.2% |      49 | `Matcher::xform`                              | `<unknown>` |
| 16.7% |      11 | `Matcher::find_shared`                        | `<unknown>` |
|  3.0% |       2 | `Matcher::specialize_generic_vector_operands` | `<unknown>` |
|  1.5% |       1 | `Matcher::find_shared_post_visit`             | `<unknown>` |
|  1.5% |       1 | `ConLNode::Opcode`                            | `<unknown>` |

##### `Compilation::build_hir` (`<unknown>`)

|     % | Samples | Callee                                       | Location    |
| ----: | ------: | -------------------------------------------- | ----------- |
| 81.4% |      48 | `IR::IR`                                     | `<unknown>` |
| 10.2% |       6 | `GlobalValueNumbering::GlobalValueNumbering` | `<unknown>` |
|  5.1% |       3 | `IR::eliminate_null_checks`                  | `<unknown>` |
|  3.4% |       2 | `IR::compute_use_counts`                     | `<unknown>` |

##### `Compilation::emit_lir` (`<unknown>`)

|     % | Samples | Callee                       | Location    |
| ----: | ------: | ---------------------------- | ----------- |
| 75.4% |      43 | `LinearScan::do_linear_scan` | `<unknown>` |
| 24.6% |      14 | `BlockList::iterate_forward` | `<unknown>` |

##### `WorkerThread::run` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 52.6% |      30 | `G1EvacuateRegionsBaseTask::work` | `<unknown>` |
| 19.3% |      11 | `G1RebuildRSAndScrubTask::work`   | `<unknown>` |
| 14.0% |       8 | `KlassCleaningTask::work`         | `<unknown>` |
| 14.0% |       8 | `G1CMConcurrentMarkingTask::work` | `<unknown>` |

##### `PredictedCallGenerator::generate` (`<unknown>`)

|     % | Samples | Callee                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 96.2% |      51 | `ParseGenerator::generate`         | `<unknown>` |
| 32.1% |      17 | `PredictedCallGenerator::generate` | `<unknown>` |
|  3.8% |       2 | `GraphKit::subtype_check_receiver` | `<unknown>` |
|  1.9% |       1 | `GraphKit::null_check_common`      | `<unknown>` |

##### `IRScope::IRScope` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 97.9% |      47 | `GraphBuilder::GraphBuilder`         | `<unknown>` |
|  2.1% |       1 | `BlockListBuilder::BlockListBuilder` | `<unknown>` |

##### `IR::IR` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |      48 | `IRScope::IRScope` | `<unknown>` |

##### `Java_java_lang_Throwable_fillInStackTrace` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 95.7% |      45 | `JVM_FillInStackTrace`                     | `<unknown>` |
|  2.1% |       1 | `java_lang_Throwable::fill_in_stack_trace` | `<unknown>` |

##### `JVM_FillInStackTrace` (`<unknown>`)

|     % | Samples | Callee                                         | Location    |
| ----: | ------: | ---------------------------------------------- | ----------- |
| 95.6% |      43 | `java_lang_Throwable::fill_in_stack_trace`     | `<unknown>` |
|  2.2% |       1 | `Chunk::next_chop`                             | `<unknown>` |
|  2.2% |       1 | `PreserveExceptionMark::PreserveExceptionMark` | `<unknown>` |

##### `java_lang_Throwable::fill_in_stack_trace` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 93.2% |      41 | `java_lang_Throwable::fill_in_stack_trace` | `<unknown>` |
| 15.9% |       7 | `BacktraceBuilder::push`                   | `<unknown>` |
| 13.6% |       6 | `frame::sender_for_compiled_frame`         | `<unknown>` |
|  6.8% |       3 | `frame::sender_for_interpreter_frame`      | `<unknown>` |
|  6.8% |       3 | `nmethod::metadata_at`                     | `<unknown>` |

##### `G1EvacuateRegionsBaseTask::work` (`<unknown>`)

|     % | Samples | Callee                                         | Location    |
| ----: | ------: | ---------------------------------------------- | ----------- |
| 46.7% |      14 | `G1EvacuateRegionsTask::scan_roots`            | `<unknown>` |
| 43.3% |      13 | `G1EvacuateRegionsTask::evacuate_live_objects` | `<unknown>` |
| 10.0% |       3 | `G1RemSet::scan_collection_set_code_roots`     | `<unknown>` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

Common call stack: `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.9% |      30 | `PhaseChaitin::Split` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                                                                                                                |
| 1.3% |      21 | `PhaseChaitin::build_ifg_physical` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                                                                                                   |
| 1.0% |      16 | `Arena::contains` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                                                                                                                  |
| 0.8% |      12 | `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                                                                                           |
| 0.7% |      11 | `PhaseChaitin::elide_copy` ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                                                              |
| 0.7% |      11 | `PhaseLive::add_liveout` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                                                                                      |
| 0.6% |      10 | `Node::dominates` ← `MemNode::all_controls_dominate` ← `InitializeNode::detect_init_independence` ← `InitializeNode::can_capture_store` ← `StoreNode::Ideal` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                  |
| 0.6% |      10 | `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                                                                                                                                      |
| 0.6% |      10 | `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                                                                                                                 |
| 0.6% |       9 | `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                                 |
| 0.6% |       9 | `__psynch_cvwait` ← `PlatformMonitor::wait` ← `Monitor::wait` ← `CompileQueue::get`                                                                                                                                                                                                                                                                                                                                             |
| 0.5% |       8 | `PhaseIdealLoop::build_loop_early` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                                |
| 0.5% |       8 | `PhaseIFG::SquareUp` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                                                                                                                 |
| 0.5% |       8 | `PhaseAggressiveCoalesce::insert_copies` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                                                                                             |
| 0.4% |       7 | `PhaseIdealLoop::build_loop_early` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                    |
| 0.4% |       7 | `PhaseChaitin::Select` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                                                                                                               |
| 0.4% |       6 | `PhaseChaitin::gather_lrg_masks` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                                                                                                     |
| 0.4% |       6 | `PhaseChaitin::build_ifg_virtual` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                                                                                                    |
| 0.4% |       6 | `LinearScanWalker::free_collect_inactive_fixed` ← `LinearScanWalker::alloc_free_reg` ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` |
| 0.3% |       5 | `PhaseIdealLoop::build_loop_tree` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                                 |
