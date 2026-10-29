# Sampling profile

Collected 1,580 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Compiler          | 54.0% |     853 |
| Native            | 26.7% |     422 |
| Standard library  | 17.6% |     278 |
| JIT               |  0.9% |      14 |
| Ours              |  0.7% |      11 |
| Unknown           |  0.1% |       1 |
| Garbage collector |  0.1% |       1 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 1,117 samples (70.7%) Thread::call_run
│   ├── 1,055 samples (66.8%) JavaThread::thread_main_inner
│   │   └── 1,054 samples (66.7%) CompileBroker::compiler_thread_loop
│   │       ├── 1,045 samples (66.1%) CompileBroker::invoke_compiler_on_method
│   │       │   ├── 872 samples (55.2%) C2Compiler::compile_method
│   │       │   │   └── 872 samples (55.2%) Compile::Compile
│   │       │   │       ├── 440 samples (27.8%) Compile::Code_Gen
│   │       │   │       │   ├── 258 samples (16.3%) PhaseChaitin::Register_Allocate
│   │       │   │       │   │   ├── 49 samples (3.1%, self 1.5%) PhaseChaitin::build_ifg_physical
│   │       │   │       │   │   │   ├── 10 samples (0.6%, self 1.4% globally) IndexSetIterator::advance_and_next
│   │       │   │       │   │   │   └── 16 samples (1.0%) 6 more callees, led by (0.4%) PhaseChaitin::compute_initial_block_pressure
│   │       │   │       │   │   ├── 42 samples (2.7%, self 1.6%) PhaseChaitin::Split
│   │       │   │       │   │   │   └── 16 samples (1.0%) 9 more callees, led by (0.3%) MachNode::rematerialize
│   │       │   │       │   │   ├── 29 samples (1.8%, self 1.2%) PhaseChaitin::gather_lrg_masks
│   │       │   │       │   │   │   └── 4 samples (0.3%) RegMask::is_misaligned_pair
│   │       │   │       │   │   ├── 25 samples (1.6%, self 0.7%) PhaseLive::compute
│   │       │   │       │   │   │   └── 10 samples (0.6%) PhaseLive::add_liveout
│   │       │   │       │   │   │       └── 2 samples (0.1%, self 1.1% globally) tlv_get_addr
│   │       │   │       │   │   ├── 14 samples (0.9%, self 0.8%) PhaseAggressiveCoalesce::insert_copies
│   │       │   │       │   │   └── 98 samples (6.2%) 24 more callees, led by (1.9%) PhaseChaitin::post_allocate_copy_removal
│   │       │   │       │   └── 182 samples (11.5%) 8 more callees, led by (4.1%) PhaseCFG::do_global_code_motion
│   │       │   │       ├── 340 samples (21.5%) Compile::Optimize
│   │       │   │       │   └── 340 samples (21.5%) 16 more callees, led by (7.3%) PhaseIdealLoop::optimize
│   │       │   │       └── 92 samples (5.8%) 5 more callees, led by (5.1%) ParseGenerator::generate
│   │       │   └── 173 samples (10.9%) 4 more callees, led by (10.4%) Compiler::compile_method
│   │       └── … 7 samples (0.4%) __psynch_cvwait
│   └── 61 samples (3.9%) WorkerThread::run
│       ├── 47 samples (3.0%) G1EvacuateRegionsBaseTask::work
│       │   ├── … 26 samples (1.6%) nmethod::oops_do_process_weak
│       │   │   ├── 16 samples (1.0%) sys_icache_invalidate
│       │   │   └── 5 samples (0.3%) nmethod::fix_oop_relocations
│       │   └── 21 samples (1.3%) G1EvacuateRegionsTask::scan_roots …
│       └── 14 samples (0.9%) 2 more callees, led by (0.5%) G1CMConcurrentMarkingTask::work
├── 441 samples (27.9%) main at org.codenarc.CodeNarc
│   └── 440 samples (27.8%) linkToCallSite at java.lang.invoke.Invokers$Holder
│       ├── … 74 samples (4.7%) invoke at java.lang.invoke.LambdaForm$MH.0x000000700108e000
│       │   ├── … 2 samples (0.1%, self 1.5% globally) pthread_jit_write_protect_np
│       │   └── 66 samples (4.2%) 2 more callees, led by (4.1%) invokeStatic at java.lang.invoke.LambdaForm$DMH.0x0000007001088800
│       └── 365 samples (23.1%) 8 more callees, led by (13.9%) invoke at java.lang.invoke.LambdaForm$MH.0x00000070010a1800
└── 21 samples (1.3%) 6 more root frames, led by (0.8%) <clinit> at org.codenarc.CodeNarc
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|    % | Samples | Function                                    | Location    |
| ---: | ------: | ------------------------------------------- | ----------- |
| 1.6% |      26 | `PhaseChaitin::Split`                       | `<unknown>` |
| 1.5% |      24 | `pthread_jit_write_protect_np`              | `<unknown>` |
| 1.5% |      23 | `PhaseChaitin::build_ifg_physical`          | `<unknown>` |
| 1.4% |      22 | `IndexSetIterator::advance_and_next`        | `<unknown>` |
| 1.2% |      19 | `sys_icache_invalidate`                     | `<unknown>` |
| 1.2% |      19 | `PhaseChaitin::gather_lrg_masks`            | `<unknown>` |
| 1.1% |      17 | `tlv_get_addr`                              | `<unknown>` |
| 1.0% |      16 | `Node_Backward_Iterator::next`              | `<unknown>` |
| 0.9% |      15 | `PhaseChaitin::post_allocate_copy_removal`  | `<unknown>` |
| 0.9% |      15 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |
| 0.9% |      15 | `InstanceKlass::find_method_index`          | `<unknown>` |
| 0.9% |      14 | `PhaseIdealLoop::build_loop_late`           | `<unknown>` |
| 0.8% |      13 | `__psynch_mutexwait`                        | `<unknown>` |
| 0.8% |      12 | `PhaseIdealLoop::build_loop_early`          | `<unknown>` |
| 0.8% |      12 | `java_lang_Throwable::fill_in_stack_trace`  | `<unknown>` |
| 0.8% |      12 | `_platform_memset`                          | `<unknown>` |
| 0.8% |      12 | `PhaseAggressiveCoalesce::insert_copies`    | `<unknown>` |
| 0.7% |      11 | `PhaseLive::compute`                        | `<unknown>` |
| 0.6% |      10 | `Node::dominates`                           | `<unknown>` |
| 0.6% |      10 | `PhaseIdealLoop::Dominators`                | `<unknown>` |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|    % | Samples | Function                                    | Location    |
| ---: | ------: | ------------------------------------------- | ----------- |
| 1.6% |      26 | `PhaseChaitin::Split`                       | `<unknown>` |
| 1.5% |      23 | `PhaseChaitin::build_ifg_physical`          | `<unknown>` |
| 1.4% |      22 | `IndexSetIterator::advance_and_next`        | `<unknown>` |
| 1.2% |      19 | `PhaseChaitin::gather_lrg_masks`            | `<unknown>` |
| 1.0% |      16 | `Node_Backward_Iterator::next`              | `<unknown>` |
| 0.9% |      15 | `PhaseChaitin::post_allocate_copy_removal`  | `<unknown>` |
| 0.9% |      15 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |
| 0.9% |      14 | `PhaseIdealLoop::build_loop_late`           | `<unknown>` |
| 0.8% |      12 | `PhaseIdealLoop::build_loop_early`          | `<unknown>` |
| 0.8% |      12 | `PhaseAggressiveCoalesce::insert_copies`    | `<unknown>` |
| 0.7% |      11 | `PhaseLive::compute`                        | `<unknown>` |
| 0.6% |      10 | `Node::dominates`                           | `<unknown>` |
| 0.6% |      10 | `PhaseIdealLoop::Dominators`                | `<unknown>` |
| 0.6% |      10 | `ciObjectFactory::get_metadata`             | `<unknown>` |
| 0.6% |       9 | `PhaseChaitin::merge_multidefs`             | `<unknown>` |
| 0.6% |       9 | `PhaseChaitin::elide_copy`                  | `<unknown>` |
| 0.5% |       8 | `PhaseLive::add_liveout`                    | `<unknown>` |
| 0.4% |       7 | `PhaseIterGVN::transform_old`               | `<unknown>` |
| 0.4% |       7 | `PhaseOutput::BuildOopMaps`                 | `<unknown>` |
| 0.4% |       7 | `NodeHash::hash_find_insert`                | `<unknown>` |

##### Native

|    % | Samples | Function                                                                                                                                                 | Location    |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 1.5% |      24 | `pthread_jit_write_protect_np`                                                                                                                           | `<unknown>` |
| 1.2% |      19 | `sys_icache_invalidate`                                                                                                                                  | `<unknown>` |
| 1.1% |      17 | `tlv_get_addr`                                                                                                                                           | `<unknown>` |
| 0.9% |      15 | `InstanceKlass::find_method_index`                                                                                                                       | `<unknown>` |
| 0.8% |      13 | `__psynch_mutexwait`                                                                                                                                     | `<unknown>` |
| 0.8% |      12 | `java_lang_Throwable::fill_in_stack_trace`                                                                                                               | `<unknown>` |
| 0.8% |      12 | `_platform_memset`                                                                                                                                       | `<unknown>` |
| 0.5% |       8 | `frame::sender_for_compiled_frame`                                                                                                                       | `<unknown>` |
| 0.4% |       7 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `<unknown>` |
| 0.4% |       7 | `__psynch_cvwait`                                                                                                                                        | `<unknown>` |
| 0.4% |       6 | `Arena::contains`                                                                                                                                        | `<unknown>` |
| 0.4% |       6 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `<unknown>` |
| 0.3% |       5 | `SignatureStream::next`                                                                                                                                  | `<unknown>` |
| 0.3% |       5 | `vmSymbols::find_sid`                                                                                                                                    | `<unknown>` |
| 0.3% |       4 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                          | `<unknown>` |
| 0.3% |       4 | `__vfprintf`                                                                                                                                             | `<unknown>` |
| 0.3% |       4 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>`                                                                                                 | `<unknown>` |
| 0.3% |       4 | `_platform_memmove`                                                                                                                                      | `<unknown>` |
| 0.3% |       4 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>`                             | `<unknown>` |
| 0.2% |       3 | `Dict::doubhash`                                                                                                                                         | `<unknown>` |

##### Standard library

|    % | Samples | Function                          | Location                                                  |
| ---: | ------: | --------------------------------- | --------------------------------------------------------- |
| 0.6% |       9 | `invokeBasic`                     | `java.lang.invoke.MethodHandle`                           |
| 0.4% |       6 | `newInstance`                     | `java.lang.reflect.Array`                                 |
| 0.3% |       4 | `invokeVirtual`                   | `java.lang.invoke.DirectMethodHandle$Holder`              |
| 0.3% |       4 | `cast`                            | `java.lang.Class`                                         |
| 0.3% |       4 | `equals`                          | `java.util.Objects`                                       |
| 0.3% |       4 | `putVal`                          | `java.util.HashMap`                                       |
| 0.3% |       4 | `collector`                       | `java.lang.invoke.LambdaForm$MH.0x0000007001031800`       |
| 0.2% |       3 | `closure`                         | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`    |
| 0.2% |       3 | `getAndPut`                       | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`       |
| 0.2% |       3 | `resize`                          | `java.util.HashMap`                                       |
| 0.2% |       3 | `equals`                          | `java.lang.String`                                        |
| 0.1% |       2 | `delegate`                        | `java.lang.invoke.DelegatingMethodHandle$Holder`          |
| 0.1% |       2 | `invoke`                          | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800`       |
| 0.1% |       2 | `collector`                       | `java.lang.invoke.LambdaForm$MH.0x00000070010a1000`       |
| 0.1% |       2 | `compile`                         | `java.util.regex.Pattern`                                 |
| 0.1% |       2 | `setGuards`                       | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| 0.1% |       2 | `getApproximateCommonClassLoader` | `java.lang.invoke.MethodHandle`                           |
| 0.1% |       2 | `invokeStatic`                    | `java.lang.invoke.LambdaForm$DMH.0x000000700102b400`      |
| 0.1% |       2 | `removeStaleReferences`           | `jdk.internal.util.ReferencedKeyMap`                      |
| 0.1% |       2 | `pop`                             | `jdk.internal.org.objectweb.asm.Frame`                    |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `PhaseChaitin::Split` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      26 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|     % | Samples | Caller                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 25.0% |       6 | `JVM_NewArray`                  | `<unknown>` |
| 12.5% |       3 | `JVM_Clone`                     | `<unknown>` |
| 12.5% |       3 | `Unsafe_AllocateInstance`       | `<unknown>` |
|  8.3% |       2 | `InterpreterRuntime::anewarray` | `<unknown>` |
|  8.3% |       2 | `JVM_FindLoadedClass`           | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      23 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `IndexSetIterator::advance_and_next` (`<unknown>`)

|     % | Samples | Caller                                                             | Location    |
| ----: | ------: | ------------------------------------------------------------------ | ----------- |
| 45.5% |      10 | `PhaseChaitin::build_ifg_physical`                                 | `<unknown>` |
|  9.1% |       2 | `PhaseChaitin::Select`                                             | `<unknown>` |
|  9.1% |       2 | `PhaseChaitin::compute_initial_block_pressure`                     | `<unknown>` |
|  9.1% |       2 | `PhaseIFG::remove_node`                                            | `<unknown>` |
|  9.1% |       2 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `<unknown>` |

##### `sys_icache_invalidate` (`<unknown>`)

|     % | Samples | Caller                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 84.2% |      16 | `nmethod::oops_do_process_weak` | `<unknown>` |
| 15.8% |       3 | `CodeBuffer::copy_code_to`      | `<unknown>` |

##### `PhaseChaitin::gather_lrg_masks` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      19 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `tlv_get_addr` (`<unknown>`)

|     % | Samples | Caller                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 11.8% |       2 | `PhaseLive::add_liveout`                        | `<unknown>` |
|  5.9% |       1 | `Matcher::match_sfpt`                           | `<unknown>` |
|  5.9% |       1 | `PhaseIdealLoop::spinup`                        | `<unknown>` |
|  5.9% |       1 | `PhaseIdealLoop::push_pinned_nodes_thru_region` | `<unknown>` |
|  5.9% |       1 | `GraphBuilder::iterate_bytecodes_for_block`     | `<unknown>` |

##### `Node_Backward_Iterator::next` (`<unknown>`)

|     % | Samples | Caller                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 56.3% |       9 | `PhaseCFG::schedule_late`      | `<unknown>` |
| 43.8% |       7 | `PhaseCFG::global_code_motion` | `<unknown>` |

##### `PhaseChaitin::post_allocate_copy_removal` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      15 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      15 | `PhaseIdealLoop::build_loop_late` | `<unknown>` |

##### `InstanceKlass::find_method_index` (`<unknown>`)

|     % | Samples | Caller                                  | Location    |
| ----: | ------: | --------------------------------------- | ----------- |
| 86.7% |      13 | `InstanceKlass::uncached_lookup_method` | `<unknown>` |
|  6.7% |       1 | `InstanceKlass::find_method`            | `<unknown>` |
|  6.7% |       1 | `InstanceKlass::initialize_impl`        | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |      14 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `__psynch_mutexwait` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      13 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_early` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |      12 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `java_lang_Throwable::fill_in_stack_trace` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |      12 | `java_lang_Throwable::fill_in_stack_trace` | `<unknown>` |

##### `_platform_memset` (`<unknown>`)

|    % | Samples | Caller                               | Location    |
| ---: | ------: | ------------------------------------ | ----------- |
| 8.3% |       1 | `LinearScan::do_linear_scan`         | `<unknown>` |
| 8.3% |       1 | `Matcher::Label_Root`                | `<unknown>` |
| 8.3% |       1 | `ciEnv::ciEnv`                       | `<unknown>` |
| 8.3% |       1 | `PhaseIdealLoop::PhaseIdealLoop`     | `<unknown>` |
| 8.3% |       1 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `PhaseAggressiveCoalesce::insert_copies` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      12 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseLive::compute` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      11 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `Node::dominates` (`<unknown>`)

|      % | Samples | Caller                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |      10 | `MemNode::all_controls_dominate` | `<unknown>` |

##### `PhaseIdealLoop::Dominators` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |      10 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `ciObjectFactory::get_metadata` (`<unknown>`)

|     % | Samples | Caller                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 20.0% |       2 | `ciBytecodeStream::get_method`       | `<unknown>` |
| 20.0% |       2 | `ciEnv::get_klass_by_index_impl`     | `<unknown>` |
| 20.0% |       2 | `ciEnv::get_klass_by_name_impl`      | `<unknown>` |
| 10.0% |       1 | `ciMethodHandle::get_vmtarget`       | `<unknown>` |
| 10.0% |       1 | `ciTypeFlow::StateVector::do_invoke` | `<unknown>` |

##### `PhaseChaitin::merge_multidefs` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       9 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseChaitin::elide_copy` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |       9 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |

##### `invokeBasic` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Caller           | Location                                             |
| ----: | ------: | ---------------- | ---------------------------------------------------- |
| 11.1% |       1 | `invokeVirtual`  | `java.lang.invoke.LambdaForm$DMH.0x0000007001095800` |
| 11.1% |       1 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000007001031400`  |
| 11.1% |       1 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010abc00`  |
| 11.1% |       1 | `guard`          | `java.lang.invoke.LambdaForm$MH.0x000000700109a000`  |
| 11.1% |       1 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder`                   |

##### `PhaseLive::add_liveout` (`<unknown>`)

|     % | Samples | Caller                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 87.5% |       7 | `PhaseLive::compute`              | `<unknown>` |
| 12.5% |       1 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `frame::sender_for_compiled_frame` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |       8 | `java_lang_Throwable::fill_in_stack_trace` | `<unknown>` |

##### `PhaseIterGVN::transform_old` (`<unknown>`)

|     % | Samples | Caller                     | Location    |
| ----: | ------: | -------------------------- | ----------- |
| 85.7% |       6 | `PhaseIterGVN::optimize`   | `<unknown>` |
| 14.3% |       1 | `PhaseIdealLoop::optimize` | `<unknown>` |

##### `PhaseOutput::BuildOopMaps` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |       7 | `PhaseOutput::Output` | `<unknown>` |

##### `NodeHash::hash_find_insert` (`<unknown>`)

|     % | Samples | Caller                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 85.7% |       6 | `PhaseIterGVN::transform_old`    | `<unknown>` |
| 14.3% |       1 | `PhaseGVN::transform_no_reclaim` | `<unknown>` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`<unknown>`)

|     % | Samples | Caller                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 85.7% |       6 | `DebugInformationRecorder::describe_scope`         | `<unknown>` |
| 14.3% |       1 | `DebugInformationRecorder::serialize_scope_values` | `<unknown>` |

##### `__psynch_cvwait` (`<unknown>`)

|      % | Samples | Caller                  | Location    |
| -----: | ------: | ----------------------- | ----------- |
| 100.0% |       7 | `PlatformMonitor::wait` | `<unknown>` |

##### `Arena::contains` (`<unknown>`)

|      % | Samples | Caller           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |       6 | `Matcher::xform` | `<unknown>` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |       6 | `G1ParScanThreadState::trim_queue_to_threshold` | `<unknown>` |

##### `newInstance` (`java.lang.reflect.Array`)

|      % | Samples | Caller         | Location                                             |
| -----: | ------: | -------------- | ---------------------------------------------------- |
| 100.0% |       6 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x000000700102b400` |

##### `SignatureStream::next` (`<unknown>`)

|      % | Samples | Caller                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |       5 | `SignatureStream::SignatureStream` | `<unknown>` |

##### `vmSymbols::find_sid` (`<unknown>`)

|      % | Samples | Caller                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |       5 | `ciObjectFactory::get_symbol` | `<unknown>` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`<unknown>`)

|     % | Samples | Caller                                                              | Location    |
| ----: | ------: | ------------------------------------------------------------------- | ----------- |
| 75.0% |       3 | `G1ScanHRForRegionClosure::scan_memregion`                          | `<unknown>` |
| 25.0% |       1 | `void G1ParCopyClosure<(G1Barrier)1, false>::do_oop_work<oopDesc*>` | `<unknown>` |

##### `__vfprintf` (`<unknown>`)

|      % | Samples | Caller       | Location    |
| -----: | ------: | ------------ | ----------- |
| 100.0% |       4 | `_vsnprintf` | `<unknown>` |

##### `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>` (`<unknown>`)

|     % | Samples | Caller                                            | Location    |
| ----: | ------: | ------------------------------------------------- | ----------- |
| 50.0% |       2 | `G1ParScanThreadState::do_partial_array`          | `<unknown>` |
| 50.0% |       2 | `G1ParScanThreadState::do_copy_to_survivor_space` | `<unknown>` |

##### `_platform_memmove` (`<unknown>`)

|     % | Samples | Caller                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 50.0% |       2 | `PhaseOutput::Output` | `<unknown>` |
| 25.0% |       1 | `Node::out_grow`      | `<unknown>` |
| 25.0% |       1 | `nmethod::nmethod`    | `<unknown>` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`<unknown>`)

|      % | Samples | Caller                                            | Location    |
| -----: | ------: | ------------------------------------------------- | ----------- |
| 100.0% |       4 | `G1ParScanThreadState::do_copy_to_survivor_space` | `<unknown>` |

##### `invokeVirtual` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Caller   | Location                                            |
| -----: | ------: | -------- | --------------------------------------------------- |
| 100.0% |       4 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x0000007001089400` |

##### `cast` (`java.lang.Class`)

|      % | Samples | Caller          | Location                                     |
| -----: | ------: | --------------- | -------------------------------------------- |
| 100.0% |       4 | `invokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `equals` (`java.util.Objects`)

|      % | Samples | Caller   | Location                               |
| -----: | ------: | -------- | -------------------------------------- |
| 100.0% |       4 | `equals` | `jdk.internal.util.StrongReferenceKey` |

##### `putVal` (`java.util.HashMap`)

|      % | Samples | Caller | Location            |
| -----: | ------: | ------ | ------------------- |
| 100.0% |       4 | `put`  | `java.util.HashMap` |

##### `collector` (`java.lang.invoke.LambdaForm$MH.0x0000007001031800`)

|     % | Samples | Caller   | Location                                            |
| ----: | ------: | -------- | --------------------------------------------------- |
| 50.0% |       2 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000700108e000` |
| 25.0% |       1 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010a9800` |
| 25.0% |       1 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010c8800` |

##### `Dict::doubhash` (`<unknown>`)

|      % | Samples | Caller         | Location    |
| -----: | ------: | -------------- | ----------- |
| 100.0% |       3 | `Dict::Insert` | `<unknown>` |

##### `closure` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       3 | `closure` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `getAndPut` (`org.codehaus.groovy.vmplugin.v8.CacheableCallSite`)

|      % | Samples | Caller               | Location                                        |
| -----: | ------: | -------------------- | ----------------------------------------------- |
| 100.0% |       3 | `lambda$fromCache$2` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `resize` (`java.util.HashMap`)

|      % | Samples | Caller   | Location            |
| -----: | ------: | -------- | ------------------- |
| 100.0% |       3 | `putVal` | `java.util.HashMap` |

##### `equals` (`java.lang.String`)

|      % | Samples | Caller    | Location                      |
| -----: | ------: | --------- | ----------------------------- |
| 100.0% |       3 | `matches` | `java.lang.PublicMethods$Key` |

##### `delegate` (`java.lang.invoke.DelegatingMethodHandle$Holder`)

|     % | Samples | Caller   | Location                                            |
| ----: | ------: | -------- | --------------------------------------------------- |
| 50.0% |       1 | `guard`  | `java.lang.invoke.LambdaForm$MH.0x000000700109a000` |
| 50.0% |       1 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000700129c000` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010a1800`)

|      % | Samples | Caller           | Location                           |
| -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% |       2 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder` |

##### `collector` (`java.lang.invoke.LambdaForm$MH.0x00000070010a1000`)

|     % | Samples | Caller   | Location                                            |
| ----: | ------: | -------- | --------------------------------------------------- |
| 50.0% |       1 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010ab000` |
| 50.0% |       1 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800` |

##### `compile` (`java.util.regex.Pattern`)

|      % | Samples | Caller   | Location                  |
| -----: | ------: | -------- | ------------------------- |
| 100.0% |       2 | `<init>` | `java.util.regex.Pattern` |

##### `setGuards` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |       2 | `setCallSiteTarget` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `getApproximateCommonClassLoader` (`java.lang.invoke.MethodHandle`)

|      % | Samples | Caller          | Location                        |
| -----: | ------: | --------------- | ------------------------------- |
| 100.0% |       2 | `isSafeToCache` | `java.lang.invoke.MethodHandle` |

##### `invokeStatic` (`java.lang.invoke.LambdaForm$DMH.0x000000700102b400`)

|      % | Samples | Caller   | Location                                            |
| -----: | ------: | -------- | --------------------------------------------------- |
| 100.0% |       2 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x0000007001031400` |

##### `removeStaleReferences` (`jdk.internal.util.ReferencedKeyMap`)

|      % | Samples | Caller | Location                             |
| -----: | ------: | ------ | ------------------------------------ |
| 100.0% |       2 | `get`  | `jdk.internal.util.ReferencedKeyMap` |

##### `pop` (`jdk.internal.org.objectweb.asm.Frame`)

|     % | Samples | Caller    | Location                               |
| ----: | ------: | --------- | -------------------------------------- |
| 50.0% |       1 | `pop`     | `jdk.internal.org.objectweb.asm.Frame` |
| 50.0% |       1 | `execute` | `jdk.internal.org.objectweb.asm.Frame` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                   | Location                                             |
| ----: | ------: | ------------------------------------------ | ---------------------------------------------------- |
| 70.8% |   1,118 | `_pthread_start`                           | `<unknown>`                                          |
| 70.8% |   1,118 | `thread_start`                             | `<unknown>`                                          |
| 70.7% |   1,117 | `Thread::call_run`                         | `<unknown>`                                          |
| 70.7% |   1,117 | `thread_native_entry`                      | `<unknown>`                                          |
| 66.8% |   1,055 | `JavaThread::thread_main_inner`            | `<unknown>`                                          |
| 66.7% |   1,054 | `CompileBroker::compiler_thread_loop`      | `<unknown>`                                          |
| 66.1% |   1,045 | `CompileBroker::invoke_compiler_on_method` | `<unknown>`                                          |
| 55.2% |     872 | `Compile::Compile`                         | `<unknown>`                                          |
| 55.2% |     872 | `C2Compiler::compile_method`               | `<unknown>`                                          |
| 28.0% |     442 | `invokeExact_MT`                           | `java.lang.invoke.Invokers$Holder`                   |
| 27.9% |     441 | `main`                                     | `org.codenarc.CodeNarc`                              |
| 27.8% |     440 | `Compile::Code_Gen`                        | `<unknown>`                                          |
| 27.8% |     440 | `fromCache`                                | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| 27.8% |     440 | `linkToCallSite`                           | `java.lang.invoke.Invokers$Holder`                   |
| 27.8% |     439 | `invokeStatic`                             | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| 27.7% |     437 | `invoke`                                   | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800`  |
| 27.6% |     436 | `guardWithCatch`                           | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000`  |
| 27.6% |     436 | `guard`                                    | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00`  |
| 27.6% |     436 | `reinvoke`                                 | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800`  |
| 27.2% |     430 | `invokeVirtual`                            | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|     % | Samples | Function                                   | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 66.7% |   1,054 | `CompileBroker::compiler_thread_loop`      | `<unknown>` |
| 66.1% |   1,045 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
| 55.2% |     872 | `Compile::Compile`                         | `<unknown>` |
| 55.2% |     872 | `C2Compiler::compile_method`               | `<unknown>` |
| 27.8% |     440 | `Compile::Code_Gen`                        | `<unknown>` |
| 21.5% |     340 | `Compile::Optimize`                        | `<unknown>` |
| 16.3% |     258 | `PhaseChaitin::Register_Allocate`          | `<unknown>` |
| 12.3% |     195 | `PhaseIdealLoop::optimize`                 | `<unknown>` |
| 11.1% |     175 | `PhaseIdealLoop::PhaseIdealLoop`           | `<unknown>` |
| 10.9% |     173 | `PhaseIdealLoop::build_and_optimize`       | `<unknown>` |
| 10.4% |     164 | `Compilation::compile_method`              | `<unknown>` |
| 10.4% |     164 | `Compilation::Compilation`                 | `<unknown>` |
|  9.4% |     149 | `Compilation::compile_java_method`         | `<unknown>` |
|  6.1% |      96 | `PhaseIterGVN::optimize`                   | `<unknown>` |
|  5.4% |      85 | `PhaseIterGVN::transform_old`              | `<unknown>` |
|  5.0% |      79 | `Compile::optimize_loops`                  | `<unknown>` |
|  4.1% |      65 | `Compilation::build_hir`                   | `<unknown>` |
|  4.1% |      64 | `PhaseCFG::do_global_code_motion`          | `<unknown>` |
|  4.0% |      63 | `PhaseCFG::global_code_motion`             | `<unknown>` |
|  4.0% |      63 | `PhaseIdealLoop::build_loop_late`          | `<unknown>` |

##### Native

|     % | Samples | Function                                    | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 70.8% |   1,118 | `_pthread_start`                            | `<unknown>` |
| 70.8% |   1,118 | `thread_start`                              | `<unknown>` |
| 70.7% |   1,117 | `Thread::call_run`                          | `<unknown>` |
| 70.7% |   1,117 | `thread_native_entry`                       | `<unknown>` |
| 66.8% |   1,055 | `JavaThread::thread_main_inner`             | `<unknown>` |
| 10.4% |     164 | `Compiler::compile_method`                  | `<unknown>` |
|  5.3% |      83 | `Parse::Parse`                              | `<unknown>` |
|  5.3% |      83 | `ParseGenerator::generate`                  | `<unknown>` |
|  5.2% |      82 | `Parse::do_all_blocks`                      | `<unknown>` |
|  5.1% |      81 | `Parse::do_one_block`                       | `<unknown>` |
|  4.8% |      76 | `Parse::do_call`                            | `<unknown>` |
|  3.9% |      61 | `WorkerThread::run`                         | `<unknown>` |
|  3.4% |      54 | `PredictedCallGenerator::generate`          | `<unknown>` |
|  3.0% |      47 | `IRScope::IRScope`                          | `<unknown>` |
|  3.0% |      47 | `IR::IR`                                    | `<unknown>` |
|  3.0% |      47 | `G1EvacuateRegionsBaseTask::work`           | `<unknown>` |
|  1.8% |      29 | `JVM_FillInStackTrace`                      | `<unknown>` |
|  1.8% |      29 | `Java_java_lang_Throwable_fillInStackTrace` | `<unknown>` |
|  1.7% |      27 | `java_lang_Throwable::fill_in_stack_trace`  | `<unknown>` |
|  1.6% |      26 | `nmethod::oops_do_process_weak`             | `<unknown>` |

##### Standard library

|     % | Samples | Function         | Location                                             |
| ----: | ------: | ---------------- | ---------------------------------------------------- |
| 28.0% |     442 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder`                   |
| 27.8% |     440 | `fromCache`      | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| 27.8% |     440 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder`                   |
| 27.8% |     439 | `invokeStatic`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| 27.7% |     437 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800`  |
| 27.6% |     436 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000`  |
| 27.6% |     436 | `guard`          | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00`  |
| 27.6% |     436 | `reinvoke`       | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800`  |
| 27.2% |     430 | `invokeVirtual`  | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |
| 27.1% |     428 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010a9800`  |
| 27.0% |     426 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010c7000`  |
| 27.0% |     426 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000700108e000`  |
| 27.0% |     426 | `invokeVirtual`  | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 27.0% |     426 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010c6400`  |
| 26.9% |     425 | `invokeSpecial`  | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 26.8% |     423 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x0000007001098400`  |
| 26.8% |     423 | `reinvoke`       | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00`  |
| 26.8% |     423 | `guard`          | `java.lang.invoke.LambdaForm$MH.0x000000700109a000`  |
| 26.6% |     420 | `invokeImpl`     | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| 26.6% |     420 | `invoke`         | `jdk.internal.reflect.DirectMethodHandleAccessor`    |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`<unknown>`)

|      % | Samples | Caller         | Location    |
| -----: | ------: | -------------- | ----------- |
| 100.0% |   1,118 | `thread_start` | `<unknown>` |

##### `Thread::call_run` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |   1,117 | `thread_native_entry` | `<unknown>` |

##### `thread_native_entry` (`<unknown>`)

|      % | Samples | Caller           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |   1,117 | `_pthread_start` | `<unknown>` |

##### `JavaThread::thread_main_inner` (`<unknown>`)

|      % | Samples | Caller             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |   1,055 | `Thread::call_run` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop` (`<unknown>`)

|      % | Samples | Caller                          | Location    |
| -----: | ------: | ------------------------------- | ----------- |
| 100.0% |   1,054 | `JavaThread::thread_main_inner` | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method` (`<unknown>`)

|      % | Samples | Caller                                | Location    |
| -----: | ------: | ------------------------------------- | ----------- |
| 100.0% |   1,045 | `CompileBroker::compiler_thread_loop` | `<unknown>` |

##### `Compile::Compile` (`<unknown>`)

|      % | Samples | Caller                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |     872 | `C2Compiler::compile_method` | `<unknown>` |

##### `C2Compiler::compile_method` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |     872 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |

##### `invokeExact_MT` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Caller         | Location                                               |
| ----: | ------: | -------------- | ------------------------------------------------------ |
| 99.1% |     438 | `fromCache`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface`        |
| 94.8% |     419 | `invokeImpl`   | `jdk.internal.reflect.DirectMethodHandleAccessor`      |
| 71.5% |     316 | `selectMethod` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`        |
|  5.7% |      25 | `invokeImpl`   | `jdk.internal.reflect.DirectConstructorHandleAccessor` |
|  0.9% |       4 | `invoke`       | `java.lang.invoke.BootstrapMethodInvoker`              |

##### `Compile::Code_Gen` (`<unknown>`)

|      % | Samples | Caller             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |     440 | `Compile::Compile` | `<unknown>` |

##### `fromCache` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|     % | Samples | Caller             | Location                                             |
| ----: | ------: | ------------------ | ---------------------------------------------------- |
| 99.8% |     439 | `invokeStatic`     | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|  0.7% |       3 | `invokeStaticInit` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088c00` |

##### `linkToCallSite` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller             | Location                                         |
| -----: | ------: | ------------------ | ------------------------------------------------ |
| 100.0% |     440 | `main`             | `org.codenarc.CodeNarc`                          |
|  96.4% |     424 | `execute`          | `org.codenarc.CodeNarc`                          |
|  95.2% |     419 | `execute`          | `org.codenarc.CodeNarcRunner`                    |
|  80.2% |     353 | `analyze`          | `org.codenarc.analyzer.FilesystemSourceAnalyzer` |
|  80.0% |     352 | `processDirectory` | `org.codenarc.analyzer.FilesystemSourceAnalyzer` |

##### `invokeStatic` (`java.lang.invoke.LambdaForm$DMH.0x0000007001088800`)

|     % | Samples | Caller   | Location                                            |
| ----: | ------: | -------- | --------------------------------------------------- |
| 99.5% |     437 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800` |
| 96.8% |     425 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000700108e000` |
| 82.7% |     363 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010d8800` |
| 80.9% |     355 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x0000007001288400` |
| 56.7% |     249 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000700138c000` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010a1800`)

|      % | Samples | Caller           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |     437 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder`                  |
|   8.7% |      38 | `reinvoke`       | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |

##### `guardWithCatch` (`java.lang.invoke.LambdaForm$MH.0x00000070010aa000`)

|      % | Samples | Caller     | Location                                            |
| -----: | ------: | ---------- | --------------------------------------------------- |
| 100.0% |     436 | `reinvoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|  87.8% |     383 | `delegate` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `guard` (`java.lang.invoke.LambdaForm$MH.0x00000070010aac00`)

|      % | Samples | Caller     | Location                                            |
| -----: | ------: | ---------- | --------------------------------------------------- |
| 100.0% |     436 | `reinvoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|  87.8% |     383 | `delegate` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `reinvoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010aa800`)

|      % | Samples | Caller   | Location                                            |
| -----: | ------: | -------- | --------------------------------------------------- |
| 100.0% |     436 | `guard`  | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00` |
|  97.7% |     426 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010c7000` |
|  93.8% |     409 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010d3800` |
|  51.4% |     224 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010abc00` |
|  14.7% |      64 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010dcc00` |

##### `invokeVirtual` (`java.lang.invoke.LambdaForm$DMH.0x0000007001094400`)

|     % | Samples | Caller           | Location                                            |
| ----: | ------: | ---------------- | --------------------------------------------------- |
| 99.5% |     428 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010a9800` |
| 77.9% |     335 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x00000070010d2c00` |
|  2.6% |      11 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000007001332000` |
|  2.1% |       9 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010c9800` |
|  1.4% |       6 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070013d8800` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010a9800`)

|      % | Samples | Caller           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |     428 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010c7000`)

|      % | Samples | Caller           | Location                           |
| -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% |     426 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x000000700108e000`)

|      % | Samples | Caller           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |     426 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder`                  |
|   0.5% |       2 | `reinvoke`       | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00` |

##### `invokeVirtual` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Caller           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |     426 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010c6400` |
|  98.4% |     419 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000700102b000` |
|  11.0% |      47 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x0000007001098400` |
|   1.6% |       7 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010c7400` |
|   1.6% |       7 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010d3c00` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010c6400`)

|      % | Samples | Caller           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |     426 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000` |

##### `invokeSpecial` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Caller           | Location                                            |
| ----: | ------: | ---------------- | --------------------------------------------------- |
| 82.8% |     352 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x00000070010d2c00` |
| 82.1% |     349 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000007001297800` |
| 81.9% |     348 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000007001290c00` |
| 48.0% |     204 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000700149d400` |
| 40.7% |     173 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000007001383400` |

##### `guardWithCatch` (`java.lang.invoke.LambdaForm$MH.0x0000007001098400`)

|      % | Samples | Caller     | Location                                            |
| -----: | ------: | ---------- | --------------------------------------------------- |
| 100.0% |     423 | `reinvoke` | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00` |
|   9.9% |      42 | `delegate` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `reinvoke` (`java.lang.invoke.LambdaForm$MH.0x0000007001099c00`)

|      % | Samples | Caller   | Location                                            |
| -----: | ------: | -------- | --------------------------------------------------- |
| 100.0% |     423 | `guard`  | `java.lang.invoke.LambdaForm$MH.0x000000700109a000` |
|  99.1% |     419 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000700109bc00` |
|  18.9% |      80 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000700109ac00` |

##### `guard` (`java.lang.invoke.LambdaForm$MH.0x000000700109a000`)

|      % | Samples | Caller           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |     423 | `reinvoke`       | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00` |
|  11.1% |      47 | `delegate`       | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   3.5% |      15 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder`                  |

##### `invokeImpl` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Caller   | Location                                          |
| -----: | ------: | -------- | ------------------------------------------------- |
| 100.0% |     420 | `invoke` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Caller   | Location                   |
| -----: | ------: | -------- | -------------------------- |
| 100.0% |     420 | `invoke` | `java.lang.reflect.Method` |

##### `Compile::Optimize` (`<unknown>`)

|      % | Samples | Caller             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |     340 | `Compile::Compile` | `<unknown>` |

##### `PhaseChaitin::Register_Allocate` (`<unknown>`)

|      % | Samples | Caller              | Location    |
| -----: | ------: | ------------------- | ----------- |
| 100.0% |     258 | `Compile::Code_Gen` | `<unknown>` |

##### `PhaseIdealLoop::optimize` (`<unknown>`)

|     % | Samples | Caller                    | Location    |
| ----: | ------: | ------------------------- | ----------- |
| 59.5% |     116 | `Compile::Optimize`       | `<unknown>` |
| 40.5% |      79 | `Compile::optimize_loops` | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`<unknown>`)

|      % | Samples | Caller                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |     175 | `PhaseIdealLoop::optimize` | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize` (`<unknown>`)

|      % | Samples | Caller                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |     173 | `PhaseIdealLoop::PhaseIdealLoop` | `<unknown>` |

##### `Compilation::compile_method` (`<unknown>`)

|      % | Samples | Caller                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |     164 | `Compilation::Compilation` | `<unknown>` |

##### `Compilation::Compilation` (`<unknown>`)

|      % | Samples | Caller                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |     164 | `Compiler::compile_method` | `<unknown>` |

##### `Compiler::compile_method` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |     164 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |

##### `Compilation::compile_java_method` (`<unknown>`)

|      % | Samples | Caller                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |     149 | `Compilation::compile_method` | `<unknown>` |

##### `PhaseIterGVN::optimize` (`<unknown>`)

|     % | Samples | Caller                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 67.7% |      65 | `Compile::Optimize`                        | `<unknown>` |
| 18.8% |      18 | `PhaseIdealLoop::optimize`                 | `<unknown>` |
| 10.4% |      10 | `PhaseMacroExpand::expand_macro_nodes`     | `<unknown>` |
|  2.1% |       2 | `Compile::remove_speculative_types`        | `<unknown>` |
|  1.0% |       1 | `Compile::process_for_post_loop_opts_igvn` | `<unknown>` |

##### `PhaseIterGVN::transform_old` (`<unknown>`)

|     % | Samples | Caller                     | Location    |
| ----: | ------: | -------------------------- | ----------- |
| 98.8% |      84 | `PhaseIterGVN::optimize`   | `<unknown>` |
|  1.2% |       1 | `PhaseIdealLoop::optimize` | `<unknown>` |

##### `Parse::Parse` (`<unknown>`)

|      % | Samples | Caller                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |      83 | `ParseGenerator::generate` | `<unknown>` |

##### `ParseGenerator::generate` (`<unknown>`)

|     % | Samples | Caller                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 96.4% |      80 | `Compile::Compile`                     | `<unknown>` |
| 61.4% |      51 | `PredictedCallGenerator::generate`     | `<unknown>` |
| 45.8% |      38 | `Parse::do_call`                       | `<unknown>` |
|  2.4% |       2 | `CallGenerator::do_late_inline_helper` | `<unknown>` |

##### `Parse::do_all_blocks` (`<unknown>`)

|      % | Samples | Caller         | Location    |
| -----: | ------: | -------------- | ----------- |
| 100.0% |      82 | `Parse::Parse` | `<unknown>` |

##### `Parse::do_one_block` (`<unknown>`)

|      % | Samples | Caller                 | Location    |
| -----: | ------: | ---------------------- | ----------- |
| 100.0% |      81 | `Parse::do_all_blocks` | `<unknown>` |

##### `Compile::optimize_loops` (`<unknown>`)

|      % | Samples | Caller              | Location    |
| -----: | ------: | ------------------- | ----------- |
| 100.0% |      79 | `Compile::Optimize` | `<unknown>` |

##### `Parse::do_call` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      76 | `Parse::do_one_block` | `<unknown>` |

##### `Compilation::build_hir` (`<unknown>`)

|      % | Samples | Caller                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |      65 | `Compilation::compile_java_method` | `<unknown>` |

##### `PhaseCFG::do_global_code_motion` (`<unknown>`)

|      % | Samples | Caller              | Location    |
| -----: | ------: | ------------------- | ----------- |
| 100.0% |      64 | `Compile::Code_Gen` | `<unknown>` |

##### `PhaseCFG::global_code_motion` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      63 | `PhaseCFG::do_global_code_motion` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |      63 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `WorkerThread::run` (`<unknown>`)

|      % | Samples | Caller             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |      61 | `Thread::call_run` | `<unknown>` |

##### `PredictedCallGenerator::generate` (`<unknown>`)

|     % | Samples | Caller                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 98.1% |      53 | `Parse::do_call`                       | `<unknown>` |
| 37.0% |      20 | `PredictedCallGenerator::generate`     | `<unknown>` |
|  1.9% |       1 | `CallGenerator::do_late_inline_helper` | `<unknown>` |

##### `IRScope::IRScope` (`<unknown>`)

|      % | Samples | Caller   | Location    |
| -----: | ------: | -------- | ----------- |
| 100.0% |      47 | `IR::IR` | `<unknown>` |

##### `IR::IR` (`<unknown>`)

|      % | Samples | Caller                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |      47 | `Compilation::build_hir` | `<unknown>` |

##### `G1EvacuateRegionsBaseTask::work` (`<unknown>`)

|      % | Samples | Caller              | Location    |
| -----: | ------: | ------------------- | ----------- |
| 100.0% |      47 | `WorkerThread::run` | `<unknown>` |

##### `JVM_FillInStackTrace` (`<unknown>`)

|      % | Samples | Caller                                      | Location    |
| -----: | ------: | ------------------------------------------- | ----------- |
| 100.0% |      29 | `Java_java_lang_Throwable_fillInStackTrace` | `<unknown>` |

##### `Java_java_lang_Throwable_fillInStackTrace` (`<unknown>`)

|      % | Samples | Caller             | Location              |
| -----: | ------: | ------------------ | --------------------- |
| 100.0% |      29 | `fillInStackTrace` | `java.lang.Throwable` |

##### `java_lang_Throwable::fill_in_stack_trace` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |      27 | `JVM_FillInStackTrace`                     | `<unknown>` |
|  92.6% |      25 | `java_lang_Throwable::fill_in_stack_trace` | `<unknown>` |

##### `nmethod::oops_do_process_weak` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      26 | `G1CodeBlobClosure::do_code_blob` | `<unknown>` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`<unknown>`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 99.9% |   1,117 | `thread_native_entry` | `<unknown>` |
|  0.1% |       1 | `ThreadJavaMain`      | `<unknown>` |

##### `thread_start` (`<unknown>`)

|      % | Samples | Callee           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |   1,118 | `_pthread_start` | `<unknown>` |

##### `Thread::call_run` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 94.4% |   1,055 | `JavaThread::thread_main_inner` | `<unknown>` |
|  5.5% |      61 | `WorkerThread::run`             | `<unknown>` |
|  0.1% |       1 | `VMThread::run`                 | `<unknown>` |

##### `thread_native_entry` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |   1,117 | `Thread::call_run` | `<unknown>` |

##### `JavaThread::thread_main_inner` (`<unknown>`)

|     % | Samples | Callee                                | Location    |
| ----: | ------: | ------------------------------------- | ----------- |
| 99.9% |   1,054 | `CompileBroker::compiler_thread_loop` | `<unknown>` |
|  0.1% |       1 | `CompileQueue::get`                   | `<unknown>` |

##### `CompileBroker::compiler_thread_loop` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 99.1% |   1,045 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
|  0.8% |       8 | `CompileQueue::get`                        | `<unknown>` |
|  0.1% |       1 | `CompileTaskWrapper::~CompileTaskWrapper`  | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 83.4% |     872 | `C2Compiler::compile_method`    | `<unknown>` |
| 15.7% |     164 | `Compiler::compile_method`      | `<unknown>` |
|  0.5% |       5 | `ciEnv::get_method_from_handle` | `<unknown>` |
|  0.2% |       2 | `ciEnv::ciEnv`                  | `<unknown>` |
|  0.2% |       2 | `CompilationLog::log_compile`   | `<unknown>` |

##### `Compile::Compile` (`<unknown>`)

|     % | Samples | Callee                                   | Location    |
| ----: | ------: | ---------------------------------------- | ----------- |
| 50.5% |     440 | `Compile::Code_Gen`                      | `<unknown>` |
| 39.0% |     340 | `Compile::Optimize`                      | `<unknown>` |
|  9.2% |      80 | `ParseGenerator::generate`               | `<unknown>` |
|  0.7% |       6 | `PhaseRemoveUseless::PhaseRemoveUseless` | `<unknown>` |
|  0.3% |       3 | `CallGenerator::for_inline`              | `<unknown>` |

##### `C2Compiler::compile_method` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |     872 | `Compile::Compile` | `<unknown>` |

##### `invokeExact_MT` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Callee   | Location                                            |
| ----: | ------: | -------- | --------------------------------------------------- |
| 96.4% |     426 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010c7000` |
| 94.8% |     419 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000700109bc00` |
| 92.5% |     409 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010d3800` |
| 79.6% |     352 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x0000007001282000` |
| 79.0% |     349 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x0000007001297800` |

##### `main` (`org.codenarc.CodeNarc`)

|     % | Samples | Callee           | Location                               |
| ----: | ------: | ---------------- | -------------------------------------- |
| 99.8% |     440 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder`     |
|  0.2% |       1 | `linkCallSite`   | `java.lang.invoke.MethodHandleNatives` |

##### `Compile::Code_Gen` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 58.6% |     258 | `PhaseChaitin::Register_Allocate`    | `<unknown>` |
| 14.5% |      64 | `PhaseCFG::do_global_code_motion`    | `<unknown>` |
| 13.0% |      57 | `PhaseOutput::Output`                | `<unknown>` |
| 11.4% |      50 | `Matcher::match`                     | `<unknown>` |
|  0.7% |       3 | `PhaseBlockLayout::PhaseBlockLayout` | `<unknown>` |

##### `fromCache` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|     % | Samples | Callee           | Location                                                         |
| ----: | ------: | ---------------- | ---------------------------------------------------------------- |
| 99.5% |     438 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder`                               |
| 13.2% |      58 | `doWithCallSite` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                  |
|  0.5% |       2 | `setTarget`      | `java.lang.invoke.MutableCallSite`                               |
|  0.2% |       1 | `<init>`         | `org.codehaus.groovy.vmplugin.v8.IndyInterface$FallbackSupplier` |
|  0.2% |       1 | `bypassCache`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                  |

##### `linkToCallSite` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Callee   | Location                                            |
| ----: | ------: | -------- | --------------------------------------------------- |
| 99.3% |     437 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800` |
| 96.8% |     426 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000700108e000` |
| 82.5% |     363 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010d8800` |
| 80.7% |     355 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x0000007001288400` |
|  4.5% |      20 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000700109b400` |

##### `invokeStatic` (`java.lang.invoke.LambdaForm$DMH.0x0000007001088800`)

|      % | Samples | Callee         | Location                                        |
| -----: | ------: | -------------- | ----------------------------------------------- |
| 100.0% |     439 | `fromCache`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|  78.8% |     346 | `selectMethod` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010a1800`)

|      % | Samples | Callee         | Location                                             |
| -----: | ------: | -------------- | ---------------------------------------------------- |
| 100.0% |     437 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|   1.1% |       5 | `collector`    | `java.lang.invoke.LambdaForm$MH.0x00000070010a1000`  |

##### `guardWithCatch` (`java.lang.invoke.LambdaForm$MH.0x00000070010aa000`)

|     % | Samples | Callee            | Location                                             |
| ----: | ------: | ----------------- | ---------------------------------------------------- |
| 98.2% |     428 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000070010a9800`  |
| 97.7% |     426 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000070010c6400`  |
| 81.0% |     353 | `invokeInterface` | `java.lang.invoke.LambdaForm$DMH.0x0000007001094c00` |
| 46.6% |     203 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000070010d3400`  |
| 13.3% |      58 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x0000007001121000`  |

##### `guard` (`java.lang.invoke.LambdaForm$MH.0x00000070010aac00`)

|      % | Samples | Callee     | Location                                            |
| -----: | ------: | ---------- | --------------------------------------------------- |
| 100.0% |     436 | `reinvoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|  87.8% |     383 | `delegate` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   0.2% |       1 | `invoke`   | `java.lang.invoke.LambdaForm$MH.0x00000070010aa400` |
|   0.2% |       1 | `invoke`   | `java.lang.invoke.LambdaForm$MH.0x00000070010c6800` |

##### `reinvoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010aa800`)

|      % | Samples | Callee           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |     436 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000` |
| 100.0% |     436 | `guard`          | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00` |
|  40.8% |     178 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000700138c400` |
|   8.7% |      38 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000700132c800` |
|   8.7% |      38 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800` |

##### `invokeVirtual` (`java.lang.invoke.LambdaForm$DMH.0x0000007001094400`)

|     % | Samples | Callee              | Location                                       |
| ----: | ------: | ------------------- | ---------------------------------------------- |
| 81.9% |     352 | `doMethodInvoke`    | `org.codehaus.groovy.runtime.dgm$1076`         |
| 77.9% |     335 | `collectViolations` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |
| 18.8% |      81 | `doMethodInvoke`    | `org.codehaus.groovy.runtime.dgm$207`          |
| 12.8% |      55 | `doMethodInvoke`    | `org.codehaus.groovy.runtime.dgm$251`          |
|  9.8% |      42 | `doMethodInvoke`    | `org.codehaus.groovy.runtime.dgm$1008`         |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010a9800`)

|      % | Samples | Callee          | Location                                             |
| -----: | ------: | --------------- | ---------------------------------------------------- |
| 100.0% |     428 | `invokeVirtual` | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |
|   0.5% |       2 | `collector`     | `java.lang.invoke.LambdaForm$MH.0x0000007001031800`  |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010c7000`)

|      % | Samples | Callee     | Location                                            |
| -----: | ------: | ---------- | --------------------------------------------------- |
| 100.0% |     426 | `reinvoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|  83.8% |     357 | `delegate` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x000000700108e000`)

|     % | Samples | Callee             | Location                                             |
| ----: | ------: | ------------------ | ---------------------------------------------------- |
| 99.8% |     425 | `invokeStatic`     | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|  1.9% |       8 | `collector`        | `java.lang.invoke.LambdaForm$MH.0x0000007001031800`  |
|  0.7% |       3 | `invokeStaticInit` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088c00` |

##### `invokeVirtual` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Callee                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |     426 | `execute`              | `org.codenarc.CodeNarc`             |
|  98.4% |     419 | `execute`              | `org.codenarc.CodeNarcRunner`       |
|  10.3% |      44 | `createInitialRuleSet` | `org.codenarc.CodeNarcRunner`       |
|   0.9% |       4 | `parseArgs`            | `org.codenarc.CodeNarc`             |
|   0.7% |       3 | `visitContents`        | `org.codehaus.groovy.ast.ClassNode` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010c6400`)

|      % | Samples | Callee          | Location                                     |
| -----: | ------: | --------------- | -------------------------------------------- |
| 100.0% |     426 | `invokeVirtual` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invokeSpecial` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Callee             | Location                                                                    |
| ----: | ------: | ------------------ | --------------------------------------------------------------------------- |
| 82.8% |     352 | `processDirectory` | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 82.6% |     351 | `doCall`           | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
| 45.4% |     193 | `doCall`           | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
| 12.5% |      53 | `doCall`           | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`  |
| 11.8% |      50 | `init`             | `org.codenarc.source.AbstractSourceCode`                                    |

##### `guardWithCatch` (`java.lang.invoke.LambdaForm$MH.0x0000007001098400`)

|     % | Samples | Callee          | Location                                            |
| ----: | ------: | --------------- | --------------------------------------------------- |
| 99.1% |     419 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000700102b000` |
| 13.9% |      59 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x0000007001105400` |
| 11.1% |      47 | `invokeVirtual` | `java.lang.invoke.DirectMethodHandle$Holder`        |
| 10.9% |      46 | `invokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder`        |
|  2.4% |      10 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x00000070010c9800` |

##### `reinvoke` (`java.lang.invoke.LambdaForm$MH.0x0000007001099c00`)

|      % | Samples | Callee              | Location                                            |
| -----: | ------: | ------------------- | --------------------------------------------------- |
| 100.0% |     423 | `guardWithCatch`    | `java.lang.invoke.LambdaForm$MH.0x0000007001098400` |
| 100.0% |     423 | `guard`             | `java.lang.invoke.LambdaForm$MH.0x000000700109a000` |
|   0.7% |       3 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x00000070011eb400` |
|   0.5% |       2 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x000000700108e000` |
|   0.2% |       1 | `maybeStopCounting` | `java.lang.invoke.MethodHandleImpl$CountingWrapper` |

##### `guard` (`java.lang.invoke.LambdaForm$MH.0x000000700109a000`)

|      % | Samples | Callee        | Location                                            |
| -----: | ------: | ------------- | --------------------------------------------------- |
| 100.0% |     423 | `reinvoke`    | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00` |
|  10.2% |      43 | `delegate`    | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   0.5% |       2 | `invoke`      | `java.lang.invoke.LambdaForm$MH.0x000000700109a400` |
|   0.2% |       1 | `invokeBasic` | `java.lang.invoke.MethodHandle`                     |

##### `invokeImpl` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|     % | Samples | Callee           | Location                                            |
| ----: | ------: | ---------------- | --------------------------------------------------- |
| 99.8% |     419 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder`                  |
| 86.4% |     363 | `invokeExact_MT` | `java.lang.invoke.LambdaForm$MH.0x0000007001120c00` |
| 83.1% |     349 | `invokeExact_MT` | `java.lang.invoke.LambdaForm$MH.0x000000700103c000` |

##### `invoke` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee       | Location                                          |
| -----: | ------: | ------------ | ------------------------------------------------- |
| 100.0% |     420 | `invokeImpl` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `Compile::Optimize` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 34.1% |     116 | `PhaseIdealLoop::optimize`             | `<unknown>` |
| 23.2% |      79 | `Compile::optimize_loops`              | `<unknown>` |
| 19.1% |      65 | `PhaseIterGVN::optimize`               | `<unknown>` |
|  5.0% |      17 | `PhaseCCP::PhaseCCP`                   | `<unknown>` |
|  4.1% |      14 | `PhaseMacroExpand::expand_macro_nodes` | `<unknown>` |

##### `PhaseChaitin::Register_Allocate` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 19.0% |      49 | `PhaseChaitin::build_ifg_physical`         | `<unknown>` |
| 16.3% |      42 | `PhaseChaitin::Split`                      | `<unknown>` |
| 11.6% |      30 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |
| 11.2% |      29 | `PhaseChaitin::gather_lrg_masks`           | `<unknown>` |
|  9.7% |      25 | `PhaseLive::compute`                       | `<unknown>` |

##### `PhaseIdealLoop::optimize` (`<unknown>`)

|     % | Samples | Callee                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 89.7% |     175 | `PhaseIdealLoop::PhaseIdealLoop` | `<unknown>` |
|  9.2% |      18 | `PhaseIterGVN::optimize`         | `<unknown>` |
|  0.5% |       1 | `PhaseIterGVN::transform_old`    | `<unknown>` |
|  0.5% |       1 | `Chunk::next_chop`               | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 98.9% |     173 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |
|  0.6% |       1 | `_platform_bzero`                    | `<unknown>` |
|  0.6% |       1 | `_platform_memset`                   | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 36.4% |      63 | `PhaseIdealLoop::build_loop_late`      | `<unknown>` |
| 14.5% |      25 | `PhaseIdealLoop::split_if_with_blocks` | `<unknown>` |
|  8.7% |      15 | `PhaseIdealLoop::build_loop_early`     | `<unknown>` |
|  8.1% |      14 | `PhaseIdealLoop::Dominators`           | `<unknown>` |
|  7.5% |      13 | `PhaseIdealLoop::build_loop_tree`      | `<unknown>` |

##### `Compilation::compile_method` (`<unknown>`)

|     % | Samples | Callee                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 90.9% |     149 | `Compilation::compile_java_method` | `<unknown>` |
|  7.9% |      13 | `ciEnv::register_method`           | `<unknown>` |
|  1.2% |       2 | `Dependencies::assert_common_1`    | `<unknown>` |

##### `Compilation::Compilation` (`<unknown>`)

|      % | Samples | Callee                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |     164 | `Compilation::compile_method` | `<unknown>` |

##### `Compiler::compile_method` (`<unknown>`)

|      % | Samples | Callee                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |     164 | `Compilation::Compilation` | `<unknown>` |

##### `Compilation::compile_java_method` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 43.6% |      65 | `Compilation::build_hir`       | `<unknown>` |
| 36.9% |      55 | `Compilation::emit_lir`        | `<unknown>` |
| 17.4% |      26 | `Compilation::emit_code_body`  | `<unknown>` |
|  1.3% |       2 | `ciMethod::ensure_method_data` | `<unknown>` |
|  0.7% |       1 | `FrameMap::FrameMap`           | `<unknown>` |

##### `PhaseIterGVN::optimize` (`<unknown>`)

|     % | Samples | Callee                        | Location    |
| ----: | ------: | ----------------------------- | ----------- |
| 87.5% |      84 | `PhaseIterGVN::transform_old` | `<unknown>` |
|  2.1% |       2 | `BoolNode::hash`              | `<unknown>` |
|  1.0% |       1 | `CallStaticJavaNode::Ideal`   | `<unknown>` |
|  1.0% |       1 | `CProjNode::hash`             | `<unknown>` |
|  1.0% |       1 | `ConstraintCastNode::hash`    | `<unknown>` |

##### `PhaseIterGVN::transform_old` (`<unknown>`)

|     % | Samples | Callee                       | Location    |
| ----: | ------: | ---------------------------- | ----------- |
| 16.5% |      14 | `RegionNode::Ideal`          | `<unknown>` |
| 12.9% |      11 | `NodeHash::hash_find_insert` | `<unknown>` |
|  9.4% |       8 | `StoreNode::Ideal`           | `<unknown>` |
|  8.2% |       7 | `PhiNode::Ideal`             | `<unknown>` |
|  8.2% |       7 | `PhaseIterGVN::subsume_node` | `<unknown>` |

##### `Parse::Parse` (`<unknown>`)

|     % | Samples | Callee                 | Location    |
| ----: | ------: | ---------------------- | ----------- |
| 98.8% |      82 | `Parse::do_all_blocks` | `<unknown>` |
|  2.4% |       2 | `Parse::build_exits`   | `<unknown>` |
|  1.2% |       1 | `Parse::merge_common`  | `<unknown>` |
|  1.2% |       1 | `Parse::init_blocks`   | `<unknown>` |
|  1.2% |       1 | `Parse::do_exits`      | `<unknown>` |

##### `ParseGenerator::generate` (`<unknown>`)

|      % | Samples | Callee                                    | Location    |
| -----: | ------: | ----------------------------------------- | ----------- |
| 100.0% |      83 | `Parse::Parse`                            | `<unknown>` |
|   1.2% |       1 | `GraphKit::transfer_exceptions_into_jvms` | `<unknown>` |

##### `Parse::do_all_blocks` (`<unknown>`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 98.8% |      81 | `Parse::do_one_block` | `<unknown>` |
|  2.4% |       2 | `Parse::merge_common` | `<unknown>` |

##### `Parse::do_one_block` (`<unknown>`)

|     % | Samples | Callee                   | Location    |
| ----: | ------: | ------------------------ | ----------- |
| 93.8% |      76 | `Parse::do_call`         | `<unknown>` |
| 22.2% |      18 | `Parse::do_field_access` | `<unknown>` |
|  6.2% |       5 | `Parse::do_one_bytecode` | `<unknown>` |
|  2.5% |       2 | `Parse::do_if`           | `<unknown>` |
|  2.5% |       2 | `Parse::return_current`  | `<unknown>` |

##### `Compile::optimize_loops` (`<unknown>`)

|      % | Samples | Callee                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |      79 | `PhaseIdealLoop::optimize` | `<unknown>` |

##### `Parse::do_call` (`<unknown>`)

|     % | Samples | Callee                                                | Location    |
| ----: | ------: | ----------------------------------------------------- | ----------- |
| 69.7% |      53 | `PredictedCallGenerator::generate`                    | `<unknown>` |
| 50.0% |      38 | `ParseGenerator::generate`                            | `<unknown>` |
| 23.7% |      18 | `Compile::call_generator`                             | `<unknown>` |
|  6.6% |       5 | `GraphKit::record_profiled_arguments_for_speculation` | `<unknown>` |
|  2.6% |       2 | `GraphKit::kill_dead_locals`                          | `<unknown>` |

##### `Compilation::build_hir` (`<unknown>`)

|     % | Samples | Callee                                       | Location    |
| ----: | ------: | -------------------------------------------- | ----------- |
| 72.3% |      47 | `IR::IR`                                     | `<unknown>` |
|  7.7% |       5 | `GlobalValueNumbering::GlobalValueNumbering` | `<unknown>` |
|  6.2% |       4 | `IR::eliminate_null_checks`                  | `<unknown>` |
|  4.6% |       3 | `IR::compute_use_counts`                     | `<unknown>` |
|  3.1% |       2 | `IR::compute_code`                           | `<unknown>` |

##### `PhaseCFG::do_global_code_motion` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 98.4% |      63 | `PhaseCFG::global_code_motion`       | `<unknown>` |
|  1.6% |       1 | `PhaseCFG::estimate_block_frequency` | `<unknown>` |

##### `PhaseCFG::global_code_motion` (`<unknown>`)

|     % | Samples | Callee                              | Location    |
| ----: | ------: | ----------------------------------- | ----------- |
| 31.7% |      20 | `PhaseCFG::schedule_late`           | `<unknown>` |
| 17.5% |      11 | `PhaseCFG::partial_latency_of_defs` | `<unknown>` |
| 12.7% |       8 | `Node_Backward_Iterator::next`      | `<unknown>` |
| 11.1% |       7 | `PhaseCFG::schedule_local`          | `<unknown>` |
|  7.9% |       5 | `PhaseCFG::schedule_pinned_nodes`   | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late` (`<unknown>`)

|     % | Samples | Callee                                      | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 73.0% |      46 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |
|  1.6% |       1 | `ParsePredicateNode::Opcode`                | `<unknown>` |
|  1.6% |       1 | `ProjNode::is_CFG`                          | `<unknown>` |
|  1.6% |       1 | `IfNode::Opcode`                            | `<unknown>` |

##### `WorkerThread::run` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 77.0% |      47 | `G1EvacuateRegionsBaseTask::work` | `<unknown>` |
| 13.1% |       8 | `G1CMConcurrentMarkingTask::work` | `<unknown>` |
|  9.8% |       6 | `G1RebuildRSAndScrubTask::work`   | `<unknown>` |

##### `PredictedCallGenerator::generate` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 94.4% |      51 | `ParseGenerator::generate`           | `<unknown>` |
| 37.0% |      20 | `PredictedCallGenerator::generate`   | `<unknown>` |
|  3.7% |       2 | `PreserveJVMState::PreserveJVMState` | `<unknown>` |
|  3.7% |       2 | `GraphKit::subtype_check_receiver`   | `<unknown>` |
|  3.7% |       2 | `GraphKit::null_check_common`        | `<unknown>` |

##### `IRScope::IRScope` (`<unknown>`)

|      % | Samples | Callee                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |      47 | `GraphBuilder::GraphBuilder` | `<unknown>` |

##### `IR::IR` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |      47 | `IRScope::IRScope` | `<unknown>` |

##### `G1EvacuateRegionsBaseTask::work` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 55.3% |      26 | `G1RemSet::scan_collection_set_code_roots` | `<unknown>` |
| 44.7% |      21 | `G1EvacuateRegionsTask::scan_roots`        | `<unknown>` |

##### `JVM_FillInStackTrace` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 93.1% |      27 | `java_lang_Throwable::fill_in_stack_trace` | `<unknown>` |
|  6.9% |       2 | `Chunk::next_chop`                         | `<unknown>` |

##### `Java_java_lang_Throwable_fillInStackTrace` (`<unknown>`)

|      % | Samples | Callee                 | Location    |
| -----: | ------: | ---------------------- | ----------- |
| 100.0% |      29 | `JVM_FillInStackTrace` | `<unknown>` |

##### `java_lang_Throwable::fill_in_stack_trace` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 92.6% |      25 | `java_lang_Throwable::fill_in_stack_trace` | `<unknown>` |
| 33.3% |       9 | `frame::sender_for_compiled_frame`         | `<unknown>` |
|  7.4% |       2 | `BacktraceBuilder::push`                   | `<unknown>` |
|  7.4% |       2 | `frame::sender_raw`                        | `<unknown>` |
|  3.7% |       1 | `BacktraceBuilder::expand`                 | `<unknown>` |

##### `nmethod::oops_do_process_weak` (`<unknown>`)

|     % | Samples | Callee                                      | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 61.5% |      16 | `sys_icache_invalidate`                     | `<unknown>` |
| 19.2% |       5 | `nmethod::fix_oop_relocations`              | `<unknown>` |
| 19.2% |       5 | `G1NmethodProcessor::do_regular_processing` | `<unknown>` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

Common call stack: `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.6% |      26 | `PhaseChaitin::Split` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                              |
| 1.5% |      23 | `PhaseChaitin::build_ifg_physical` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                 |
| 1.2% |      19 | `PhaseChaitin::gather_lrg_masks` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                   |
| 1.0% |      16 | `sys_icache_invalidate` ← `nmethod::oops_do_process_weak` ← `G1CodeBlobClosure::do_code_blob` ← `G1ScanAndCountCodeBlobClosure::do_code_blob` ← `void ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::ScanTask::do_safepoint_scan<G1CodeRootSetHashTable::iterate_at_safepoint(CodeBlobClosure*)::'lambda'(nmethod**)>` ← `G1CodeRootSet::nmethods_do` ← `G1ScanCodeRootsClosure::do_heap_region` ← `G1CollectedHeap::par_iterate_regions_array` ← `G1RemSet::scan_collection_set_code_roots` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` |
| 0.9% |      15 | `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                         |
| 0.8% |      12 | `PhaseAggressiveCoalesce::insert_copies` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                           |
| 0.7% |      11 | `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                               |
| 0.6% |      10 | `IndexSetIterator::advance_and_next` ← `PhaseChaitin::build_ifg_physical` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                          |
| 0.6% |       9 | `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                    |
| 0.6% |       9 | `PhaseChaitin::merge_multidefs` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                    |
| 0.6% |       9 | `PhaseChaitin::elide_copy` ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                            |
| 0.6% |       9 | `Node_Backward_Iterator::next` ← `PhaseCFG::schedule_late` ← `PhaseCFG::global_code_motion` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                        |
| 0.5% |       8 | `PhaseIdealLoop::build_loop_late_post_work` ← `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                     |
| 0.5% |       8 | `PhaseIdealLoop::build_loop_early` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                              |
| 0.5% |       8 | `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                               |
| 0.4% |       7 | `PhaseLive::add_liveout` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                    |
| 0.4% |       7 | `__psynch_cvwait` ← `PlatformMonitor::wait` ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.4% |       7 | `PhaseIdealLoop::build_loop_late_post_work` ← `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                 |
| 0.4% |       7 | `PhaseOutput::BuildOopMaps` ← `PhaseOutput::Output` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                    |
| 0.4% |       7 | `Node_Backward_Iterator::next` ← `PhaseCFG::global_code_motion` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                    |
