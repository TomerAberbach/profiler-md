# Sampling profile

Collected 1,616 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Compiler          | 51.8% |     837 |
| Native            | 30.6% |     495 |
| Standard library  | 16.0% |     258 |
| JIT               |  0.9% |      14 |
| Ours              |  0.7% |      11 |
| Garbage collector |  0.1% |       1 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 1,148 samples (71.0%) Thread::call_run
│   ├── 1,087 samples (67.3%) JavaThread::thread_main_inner
│   │   └── 1,086 samples (67.2%) CompileBroker::compiler_thread_loop
│   │       ├── 1,072 samples (66.3%) CompileBroker::invoke_compiler_on_method
│   │       │   ├── 897 samples (55.5%) C2Compiler::compile_method
│   │       │   │   └── 893 samples (55.3%) Compile::Compile
│   │       │   │       ├── 427 samples (26.4%) Compile::Code_Gen
│   │       │   │       │   ├── 242 samples (15.0%) PhaseChaitin::Register_Allocate
│   │       │   │       │   │   ├── 42 samples (2.6%, self 1.7%) PhaseChaitin::Split
│   │       │   │       │   │   │   └── 6 samples (0.4%) MachNode::rematerialize
│   │       │   │       │   │   └── 200 samples (12.4%) 24 more callees, led by (3.0%) PhaseChaitin::build_ifg_physical
│   │       │   │       │   ├── 50 samples (3.1%) PhaseCFG::do_global_code_motion
│   │       │   │       │   │   └── 47 samples (2.9%) PhaseCFG::global_code_motion
│   │       │   │       │   │       ├── 16 samples (1.0%) PhaseCFG::schedule_late
│   │       │   │       │   │       │   ├── 5 samples (0.3%) Node_Backward_Iterator::next
│   │       │   │       │   │       │   └── 3 samples (0.2%) PhaseCFG::hoist_to_cheaper_block
│   │       │   │       │   │       │       └── 2 samples (0.1%, self 1.7% globally) tlv_get_addr
│   │       │   │       │   │       └── 31 samples (1.9%) 9 more callees, led by (0.6%) PhaseCFG::partial_latency_of_defs
│   │       │   │       │   └── 135 samples (8.4%) 5 more callees, led by (4.0%) Matcher::match
│   │       │   │       ├── 340 samples (21.0%) Compile::Optimize
│   │       │   │       │   └── 340 samples (21.0%) 17 more callees, led by (6.7%) PhaseIdealLoop::optimize
│   │       │   │       ├── 111 samples (6.9%) ParseGenerator::generate
│   │       │   │       │   └── … 111 samples (6.9%) Parse::Parse
│   │       │   │       │       ├── 99 samples (6.1%) Parse::do_all_blocks
│   │       │   │       │       │   └── 98 samples (6.1%) Parse::do_one_block
│   │       │   │       │       │       ├── 50 samples (3.1%) Parse::do_call
│   │       │   │       │       │       │   ├── … 23 samples (1.4%) ciTypeFlow::flow_types
│   │       │   │       │       │       │   │   └── … 16 samples (1.0%) ciTypeFlow::StateVector::apply_one_bytecode
│   │       │   │       │       │       │   │       └── … 5 samples (0.3%, self 1.4% globally) __psynch_mutexwait
│   │       │   │       │       │       │   └── 20 samples (1.2%) 7 more callees, led by (0.4%) PredictedCallGenerator::generate
│   │       │   │       │       │       └── 48 samples (3.0%) 12 more callees, led by (1.4%) Parse::do_field_access
│   │       │   │       │       └── 4 samples (0.2%) Parse::do_exits
│   │       │   │       └── 15 samples (0.9%) 5 more callees, led by (0.6%) PhaseRemoveUseless::PhaseRemoveUseless
│   │       │   └── 175 samples (10.8%) 5 more callees, led by (10.5%) Compiler::compile_method
│   │       └── … 10 samples (0.6%) __psynch_cvwait
│   └── 61 samples (3.8%) 4 more callees, led by (3.6%) WorkerThread::run
├── 445 samples (27.5%) main at org.codenarc.CodeNarc
│   └── 444 samples (27.5%) linkToCallSite at java.lang.invoke.Invokers$Holder
│       └── 444 samples (27.5%) 10 more callees, led by (13.2%) invoke at java.lang.invoke.LambdaForm$MH.0x00000070010a1800
└── 22 samples (1.4%) 6 more root frames, led by (0.8%) <clinit> at org.codenarc.CodeNarc
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|    % | Samples | Function                                                                                                                                                 | Location    |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 1.7% |      28 | `PhaseChaitin::Split`                                                                                                                                    | `<unknown>` |
| 1.7% |      27 | `tlv_get_addr`                                                                                                                                           | `<unknown>` |
| 1.4% |      23 | `__psynch_mutexwait`                                                                                                                                     | `<unknown>` |
| 1.4% |      22 | `PhaseChaitin::build_ifg_physical`                                                                                                                       | `<unknown>` |
| 1.3% |      21 | `IndexSetIterator::advance_and_next`                                                                                                                     | `<unknown>` |
| 1.1% |      18 | `PhaseIdealLoop::build_loop_early`                                                                                                                       | `<unknown>` |
| 1.1% |      17 | `java_lang_Throwable::fill_in_stack_trace`                                                                                                               | `<unknown>` |
| 1.0% |      16 | `pthread_jit_write_protect_np`                                                                                                                           | `<unknown>` |
| 1.0% |      16 | `PhaseChaitin::elide_copy`                                                                                                                               | `<unknown>` |
| 0.9% |      15 | `vmSymbols::find_sid`                                                                                                                                    | `<unknown>` |
| 0.9% |      15 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `<unknown>` |
| 0.9% |      15 | `PhaseLive::add_liveout`                                                                                                                                 | `<unknown>` |
| 0.9% |      14 | `ciObjectFactory::get_metadata`                                                                                                                          | `<unknown>` |
| 0.8% |      13 | `PhaseLive::compute`                                                                                                                                     | `<unknown>` |
| 0.8% |      13 | `__psynch_cvwait`                                                                                                                                        | `<unknown>` |
| 0.8% |      13 | `Arena::contains`                                                                                                                                        | `<unknown>` |
| 0.7% |      12 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                          | `<unknown>` |
| 0.7% |      12 | `PhaseIdealLoop::Dominators`                                                                                                                             | `<unknown>` |
| 0.7% |      12 | `MultiNode::is_CFG`                                                                                                                                      | `<unknown>` |
| 0.7% |      11 | `PhaseIdealLoop::build_loop_late_post_work`                                                                                                              | `<unknown>` |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|    % | Samples | Function                                    | Location    |
| ---: | ------: | ------------------------------------------- | ----------- |
| 1.7% |      28 | `PhaseChaitin::Split`                       | `<unknown>` |
| 1.4% |      22 | `PhaseChaitin::build_ifg_physical`          | `<unknown>` |
| 1.3% |      21 | `IndexSetIterator::advance_and_next`        | `<unknown>` |
| 1.1% |      18 | `PhaseIdealLoop::build_loop_early`          | `<unknown>` |
| 1.0% |      16 | `PhaseChaitin::elide_copy`                  | `<unknown>` |
| 0.9% |      15 | `PhaseLive::add_liveout`                    | `<unknown>` |
| 0.9% |      14 | `ciObjectFactory::get_metadata`             | `<unknown>` |
| 0.8% |      13 | `PhaseLive::compute`                        | `<unknown>` |
| 0.7% |      12 | `PhaseIdealLoop::Dominators`                | `<unknown>` |
| 0.7% |      12 | `MultiNode::is_CFG`                         | `<unknown>` |
| 0.7% |      11 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |
| 0.6% |      10 | `PhaseOutput::BuildOopMaps`                 | `<unknown>` |
| 0.6% |      10 | `PhaseAggressiveCoalesce::insert_copies`    | `<unknown>` |
| 0.6% |      10 | `Compile::identify_useful_nodes`            | `<unknown>` |
| 0.6% |       9 | `NodeHash::hash_find_insert`                | `<unknown>` |
| 0.6% |       9 | `PhaseChaitin::gather_lrg_masks`            | `<unknown>` |
| 0.6% |       9 | `PhaseChaitin::post_allocate_copy_removal`  | `<unknown>` |
| 0.6% |       9 | `PhaseIdealLoop::build_loop_late`           | `<unknown>` |
| 0.6% |       9 | `Matcher::match_tree`                       | `<unknown>` |
| 0.6% |       9 | `Node_Backward_Iterator::next`              | `<unknown>` |

##### Native

|    % | Samples | Function                                                                                                                                                 | Location    |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 1.7% |      27 | `tlv_get_addr`                                                                                                                                           | `<unknown>` |
| 1.4% |      23 | `__psynch_mutexwait`                                                                                                                                     | `<unknown>` |
| 1.1% |      17 | `java_lang_Throwable::fill_in_stack_trace`                                                                                                               | `<unknown>` |
| 1.0% |      16 | `pthread_jit_write_protect_np`                                                                                                                           | `<unknown>` |
| 0.9% |      15 | `vmSymbols::find_sid`                                                                                                                                    | `<unknown>` |
| 0.9% |      15 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `<unknown>` |
| 0.8% |      13 | `__psynch_cvwait`                                                                                                                                        | `<unknown>` |
| 0.8% |      13 | `Arena::contains`                                                                                                                                        | `<unknown>` |
| 0.7% |      12 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                          | `<unknown>` |
| 0.6% |      10 | `InstanceKlass::find_method_index`                                                                                                                       | `<unknown>` |
| 0.6% |       9 | `_platform_memset`                                                                                                                                       | `<unknown>` |
| 0.4% |       7 | `bsearch`                                                                                                                                                | `<unknown>` |
| 0.4% |       7 | `SymbolTable::do_lookup`                                                                                                                                 | `<unknown>` |
| 0.4% |       6 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `<unknown>` |
| 0.4% |       6 | `frame::sender_raw`                                                                                                                                      | `<unknown>` |
| 0.4% |       6 | `sys_icache_invalidate`                                                                                                                                  | `<unknown>` |
| 0.3% |       5 | `BacktraceBuilder::push`                                                                                                                                 | `<unknown>` |
| 0.3% |       5 | `Dict::Insert`                                                                                                                                           | `<unknown>` |
| 0.3% |       5 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                   | `<unknown>` |
| 0.3% |       5 | `inflate_fast`                                                                                                                                           | `<unknown>` |

##### Standard library

|    % | Samples | Function               | Location                                               |
| ---: | ------: | ---------------------- | ------------------------------------------------------ |
| 0.4% |       6 | `invokeStatic`         | `java.lang.invoke.DirectMethodHandle$Holder`           |
| 0.3% |       5 | `invokeBasic`          | `java.lang.invoke.MethodHandle`                        |
| 0.2% |       4 | `closure`              | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| 0.2% |       4 | `cast`                 | `java.lang.Class`                                      |
| 0.2% |       3 | `invokeStatic`         | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800`   |
| 0.2% |       3 | `getNode`              | `java.util.HashMap`                                    |
| 0.2% |       3 | `<init>`               | `java.lang.invoke.MethodHandle`                        |
| 0.2% |       3 | `newInstance`          | `java.lang.reflect.Array`                              |
| 0.2% |       3 | `checkCustomized`      | `java.lang.invoke.Invokers`                            |
| 0.2% |       3 | `equals`               | `java.lang.String`                                     |
| 0.2% |       3 | `collector`            | `java.lang.invoke.LambdaForm$MH.0x00000070010a1000`    |
| 0.1% |       2 | `invokeVirtual`        | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400`   |
| 0.1% |       2 | `invokeMethod`         | `groovy.lang.MetaClassImpl`                            |
| 0.1% |       2 | `invoke`               | `java.lang.invoke.LambdaForm$MH.0x000000700108e000`    |
| 0.1% |       2 | `putVal`               | `java.util.HashMap`                                    |
| 0.1% |       2 | `invoke`               | `java.lang.invoke.LambdaForm$MH.0x000000700109b400`    |
| 0.1% |       2 | `guardWithTest`        | `java.lang.invoke.MethodHandles`                       |
| 0.1% |       2 | `equals`               | `java.util.Objects`                                    |
| 0.1% |       2 | `isParallel`           | `java.util.stream.AbstractPipeline`                    |
| 0.1% |       2 | `insertParameterTypes` | `java.lang.invoke.MethodType`                          |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `PhaseChaitin::Split` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      28 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `tlv_get_addr` (`<unknown>`)

|    % | Samples | Caller                              | Location    |
| ---: | ------: | ----------------------------------- | ----------- |
| 7.4% |       2 | `PhaseCFG::hoist_to_cheaper_block`  | `<unknown>` |
| 3.7% |       1 | `PhaseLive::compute`                | `<unknown>` |
| 3.7% |       1 | `TypeInstPtr::xmeet_helper`         | `<unknown>` |
| 3.7% |       1 | `TypeInterfaces::intersection_with` | `<unknown>` |
| 3.7% |       1 | `GraphKit::add_parse_predicate`     | `<unknown>` |

##### `__psynch_mutexwait` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      23 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      22 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `IndexSetIterator::advance_and_next` (`<unknown>`)

|     % | Samples | Caller                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 23.8% |       5 | `PhaseChaitin::build_ifg_physical` | `<unknown>` |
| 14.3% |       3 | `PhaseIFG::re_insert`              | `<unknown>` |
|  9.5% |       2 | `PhaseChaitin::Simplify`           | `<unknown>` |
|  9.5% |       2 | `PhaseLive::add_liveout`           | `<unknown>` |
|  9.5% |       2 | `PhaseIFG::remove_node`            | `<unknown>` |

##### `PhaseIdealLoop::build_loop_early` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |      18 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `java_lang_Throwable::fill_in_stack_trace` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |      17 | `java_lang_Throwable::fill_in_stack_trace` | `<unknown>` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|     % | Samples | Caller                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 31.3% |       5 | `JVM_NewArray`                  | `<unknown>` |
| 12.5% |       2 | `jni_GetStringUTFLength`        | `<unknown>` |
|  6.3% |       1 | `JVM_FindLoadedClass`           | `<unknown>` |
|  6.3% |       1 | `InterpreterRuntime::anewarray` | `<unknown>` |
|  6.3% |       1 | `Unsafe_AllocateInstance`       | `<unknown>` |

##### `PhaseChaitin::elide_copy` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |      16 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |

##### `vmSymbols::find_sid` (`<unknown>`)

|     % | Samples | Caller                                         | Location    |
| ----: | ------: | ---------------------------------------------- | ----------- |
| 86.7% |      13 | `ciObjectFactory::get_symbol`                  | `<unknown>` |
|  6.7% |       1 | `AnnotationCollector::annotation_index`        | `<unknown>` |
|  6.7% |       1 | `MethodHandles::signature_polymorphic_name_id` | `<unknown>` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`<unknown>`)

|     % | Samples | Caller                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 73.3% |      11 | `DebugInformationRecorder::describe_scope`         | `<unknown>` |
| 26.7% |       4 | `DebugInformationRecorder::serialize_scope_values` | `<unknown>` |

##### `PhaseLive::add_liveout` (`<unknown>`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |      15 | `PhaseLive::compute` | `<unknown>` |

##### `ciObjectFactory::get_metadata` (`<unknown>`)

|     % | Samples | Caller                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 28.6% |       4 | `ciBytecodeStream::get_method`                     | `<unknown>` |
| 14.3% |       2 | `ciEnv::get_klass_by_index_impl`                   | `<unknown>` |
| 14.3% |       2 | `ciReceiverTypeData::translate_receiver_data_from` | `<unknown>` |
|  7.1% |       1 | `ciObjectFactory::get`                             | `<unknown>` |
|  7.1% |       1 | `ciObjectFactory::create_new_metadata`             | `<unknown>` |

##### `PhaseLive::compute` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      13 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `__psynch_cvwait` (`<unknown>`)

|      % | Samples | Caller                  | Location    |
| -----: | ------: | ----------------------- | ----------- |
| 100.0% |      13 | `PlatformMonitor::wait` | `<unknown>` |

##### `Arena::contains` (`<unknown>`)

|      % | Samples | Caller           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |      13 | `Matcher::xform` | `<unknown>` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`<unknown>`)

|     % | Samples | Caller                                                              | Location    |
| ----: | ------: | ------------------------------------------------------------------- | ----------- |
| 75.0% |       9 | `G1ScanHRForRegionClosure::scan_memregion`                          | `<unknown>` |
| 16.7% |       2 | `void G1ParCopyClosure<(G1Barrier)1, false>::do_oop_work<oopDesc*>` | `<unknown>` |
|  8.3% |       1 | `void G1ParCopyClosure<(G1Barrier)0, false>::do_oop_work<oopDesc*>` | `<unknown>` |

##### `PhaseIdealLoop::Dominators` (`<unknown>`)

|     % | Samples | Caller                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 91.7% |      11 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |
|  8.3% |       1 | `PhaseIdealLoop::PhaseIdealLoop`     | `<unknown>` |

##### `MultiNode::is_CFG` (`<unknown>`)

|     % | Samples | Caller                                      | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 66.7% |       8 | `PhaseIdealLoop::build_and_optimize`        | `<unknown>` |
|  8.3% |       1 | `ProjNode::is_uncommon_trap_proj`           | `<unknown>` |
|  8.3% |       1 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |
|  8.3% |       1 | `RegionNode::is_unreachable_from_root`      | `<unknown>` |
|  8.3% |       1 | `PhaseIdealLoop::build_loop_tree`           | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      11 | `PhaseIdealLoop::build_loop_late` | `<unknown>` |

##### `PhaseOutput::BuildOopMaps` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      10 | `PhaseOutput::Output` | `<unknown>` |

##### `PhaseAggressiveCoalesce::insert_copies` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      10 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `Compile::identify_useful_nodes` (`<unknown>`)

|     % | Samples | Caller                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 80.0% |       8 | `PhaseRemoveUseless::PhaseRemoveUseless`      | `<unknown>` |
| 20.0% |       2 | `Matcher::specialize_generic_vector_operands` | `<unknown>` |

##### `InstanceKlass::find_method_index` (`<unknown>`)

|      % | Samples | Caller                                  | Location    |
| -----: | ------: | --------------------------------------- | ----------- |
| 100.0% |      10 | `InstanceKlass::uncached_lookup_method` | `<unknown>` |

##### `NodeHash::hash_find_insert` (`<unknown>`)

|     % | Samples | Caller                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 44.4% |       4 | `PhaseIterGVN::transform_old`    | `<unknown>` |
| 33.3% |       3 | `PhaseGVN::transform_no_reclaim` | `<unknown>` |
| 22.2% |       2 | `PhaseIdealLoop::fix_body_edges` | `<unknown>` |

##### `PhaseChaitin::gather_lrg_masks` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       9 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseChaitin::post_allocate_copy_removal` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       9 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       9 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `Matcher::match_tree` (`<unknown>`)

|      % | Samples | Caller           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |       9 | `Matcher::xform` | `<unknown>` |

##### `Node_Backward_Iterator::next` (`<unknown>`)

|     % | Samples | Caller                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 55.6% |       5 | `PhaseCFG::global_code_motion` | `<unknown>` |
| 44.4% |       4 | `PhaseCFG::schedule_late`      | `<unknown>` |

##### `_platform_memset` (`<unknown>`)

|     % | Samples | Caller                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 11.1% |       1 | `Matcher::xform`                | `<unknown>` |
| 11.1% |       1 | `MergeMemNode::iteration_setup` | `<unknown>` |
| 11.1% |       1 | `MergeMemNode::set_memory_at`   | `<unknown>` |
| 11.1% |       1 | `PhaseCCP::transform`           | `<unknown>` |
| 11.1% |       1 | `Matcher::find_shared`          | `<unknown>` |

##### `bsearch` (`<unknown>`)

|      % | Samples | Caller                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |       7 | `encoding_for_logical_immediate` | `<unknown>` |

##### `SymbolTable::do_lookup` (`<unknown>`)

|     % | Samples | Caller                                         | Location    |
| ----: | ------: | ---------------------------------------------- | ----------- |
| 57.1% |       4 | `SymbolTable::lookup_only`                     | `<unknown>` |
| 28.6% |       2 | `ClassFileParser::parse_constant_pool_entries` | `<unknown>` |
| 14.3% |       1 | `SymbolTable::new_symbol`                      | `<unknown>` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |       6 | `G1ParScanThreadState::trim_queue_to_threshold` | `<unknown>` |

##### `frame::sender_raw` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |       6 | `java_lang_Throwable::fill_in_stack_trace` | `<unknown>` |

##### `sys_icache_invalidate` (`<unknown>`)

|     % | Samples | Caller                                         | Location    |
| ----: | ------: | ---------------------------------------------- | ----------- |
| 33.3% |       2 | `SharedRuntime::reresolve_call_site`           | `<unknown>` |
| 16.7% |       1 | `CompiledDirectStaticCall::set_to_interpreted` | `<unknown>` |
| 16.7% |       1 | `CompiledIC::set_to_clean`                     | `<unknown>` |
| 16.7% |       1 | `nmethod::nmethod`                             | `<unknown>` |
| 16.7% |       1 | `nmethod::oops_do_process_weak`                | `<unknown>` |

##### `invokeStatic` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Caller   | Location                                            |
| ----: | ------: | -------- | --------------------------------------------------- |
| 33.3% |       2 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x0000007001338c00` |
| 33.3% |       2 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000700109b800` |
| 16.7% |       1 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x0000007001188800` |
| 16.7% |       1 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x0000007001515800` |

##### `BacktraceBuilder::push` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |       5 | `java_lang_Throwable::fill_in_stack_trace` | `<unknown>` |

##### `Dict::Insert` (`<unknown>`)

|     % | Samples | Caller                      | Location    |
| ----: | ------: | --------------------------- | ----------- |
| 60.0% |       3 | `Type::hashcons`            | `<unknown>` |
| 20.0% |       1 | `TypeInstPtr::xmeet_helper` | `<unknown>` |
| 20.0% |       1 | `TypeAryPtr::add_offset`    | `<unknown>` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`<unknown>`)

|     % | Samples | Caller                                                                            | Location    |
| ----: | ------: | --------------------------------------------------------------------------------- | ----------- |
| 80.0% |       4 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object`          | `<unknown>` |
| 20.0% |       1 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb` | `<unknown>` |

##### `inflate_fast` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |       5 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `invokeBasic` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Caller            | Location                                             |
| ----: | ------: | ----------------- | ---------------------------------------------------- |
| 20.0% |       1 | `collector`       | `java.lang.invoke.LambdaForm$MH.0x00000070010d2c00`  |
| 20.0% |       1 | `invokeExact_MT`  | `java.lang.invoke.Invokers$Holder`                   |
| 20.0% |       1 | `delegate`        | `java.lang.invoke.LambdaForm$MH.0x0000007001343400`  |
| 20.0% |       1 | `invokeInterface` | `java.lang.invoke.LambdaForm$DMH.0x0000007001095c00` |
| 20.0% |       1 | `invokeStatic`    | `java.lang.invoke.LambdaForm$DMH.0x000000700102b400` |

##### `closure` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       4 | `closure` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `cast` (`java.lang.Class`)

|      % | Samples | Caller          | Location                                     |
| -----: | ------: | --------------- | -------------------------------------------- |
| 100.0% |       4 | `invokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invokeStatic` (`java.lang.invoke.LambdaForm$DMH.0x0000007001088800`)

|     % | Samples | Caller   | Location                                            |
| ----: | ------: | -------- | --------------------------------------------------- |
| 33.3% |       1 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x0000007001336000` |
| 33.3% |       1 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010d8c00` |
| 33.3% |       1 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000700108e000` |

##### `getNode` (`java.util.HashMap`)

|     % | Samples | Caller | Location                  |
| ----: | ------: | ------ | ------------------------- |
| 66.7% |       2 | `get`  | `java.util.HashMap`       |
| 33.3% |       1 | `get`  | `java.util.LinkedHashMap` |

##### `<init>` (`java.lang.invoke.MethodHandle`)

|      % | Samples | Caller   | Location                             |
| -----: | ------: | -------- | ------------------------------------ |
| 100.0% |       3 | `<init>` | `java.lang.invoke.BoundMethodHandle` |

##### `newInstance` (`java.lang.reflect.Array`)

|      % | Samples | Caller         | Location                                             |
| -----: | ------: | -------------- | ---------------------------------------------------- |
| 100.0% |       3 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x000000700102b400` |

##### `checkCustomized` (`java.lang.invoke.Invokers`)

|     % | Samples | Caller           | Location                                            |
| ----: | ------: | ---------------- | --------------------------------------------------- |
| 66.7% |       2 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000700109a400` |
| 33.3% |       1 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder`                  |

##### `equals` (`java.lang.String`)

|     % | Samples | Caller                           | Location                    |
| ----: | ------: | -------------------------------- | --------------------------- |
| 33.3% |       1 | `getNode`                        | `java.util.HashMap`         |
| 33.3% |       1 | `inheritInterfaceNewMetaMethods` | `groovy.lang.MetaClassImpl` |
| 33.3% |       1 | `getProperty`                    | `groovy.lang.Closure`       |

##### `collector` (`java.lang.invoke.LambdaForm$MH.0x00000070010a1000`)

|     % | Samples | Caller   | Location                                            |
| ----: | ------: | -------- | --------------------------------------------------- |
| 66.7% |       2 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800` |
| 33.3% |       1 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000700138cc00` |

##### `invokeVirtual` (`java.lang.invoke.LambdaForm$DMH.0x0000007001094400`)

|     % | Samples | Caller   | Location                                            |
| ----: | ------: | -------- | --------------------------------------------------- |
| 50.0% |       1 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010a9800` |
| 50.0% |       1 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010ca000` |

##### `invokeMethod` (`groovy.lang.MetaClassImpl`)

|      % | Samples | Caller            | Location                                             |
| -----: | ------: | ----------------- | ---------------------------------------------------- |
| 100.0% |       2 | `invokeInterface` | `java.lang.invoke.LambdaForm$DMH.0x0000007001095000` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x000000700108e000`)

|      % | Samples | Caller           | Location                           |
| -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% |       2 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder` |

##### `putVal` (`java.util.HashMap`)

|      % | Samples | Caller | Location            |
| -----: | ------: | ------ | ------------------- |
| 100.0% |       2 | `put`  | `java.util.HashMap` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x000000700109b400`)

|      % | Samples | Caller           | Location                           |
| -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% |       2 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder` |

##### `guardWithTest` (`java.lang.invoke.MethodHandles`)

|     % | Samples | Caller          | Location                                                  |
| ----: | ------: | --------------- | --------------------------------------------------------- |
| 50.0% |       1 | `guardWithTest` | `java.lang.invoke.SwitchPoint`                            |
| 50.0% |       1 | `setGuards`     | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `equals` (`java.util.Objects`)

|      % | Samples | Caller       | Location                                                |
| -----: | ------: | ------------ | ------------------------------------------------------- |
| 100.0% |       2 | `getMethods` | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |

##### `isParallel` (`java.util.stream.AbstractPipeline`)

|      % | Samples | Caller     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |       2 | `evaluate` | `java.util.stream.AbstractPipeline` |

##### `insertParameterTypes` (`java.lang.invoke.MethodType`)

|     % | Samples | Caller                  | Location                         |
| ----: | ------: | ----------------------- | -------------------------------- |
| 50.0% |       1 | `replaceParameterTypes` | `java.lang.invoke.MethodType`    |
| 50.0% |       1 | `dropArgumentsTrusted`  | `java.lang.invoke.MethodHandles` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                   | Location                                             |
| ----: | ------: | ------------------------------------------ | ---------------------------------------------------- |
| 71.1% |   1,149 | `_pthread_start`                           | `<unknown>`                                          |
| 71.1% |   1,149 | `thread_start`                             | `<unknown>`                                          |
| 71.0% |   1,148 | `Thread::call_run`                         | `<unknown>`                                          |
| 71.0% |   1,148 | `thread_native_entry`                      | `<unknown>`                                          |
| 67.3% |   1,087 | `JavaThread::thread_main_inner`            | `<unknown>`                                          |
| 67.2% |   1,086 | `CompileBroker::compiler_thread_loop`      | `<unknown>`                                          |
| 66.3% |   1,072 | `CompileBroker::invoke_compiler_on_method` | `<unknown>`                                          |
| 55.5% |     897 | `C2Compiler::compile_method`               | `<unknown>`                                          |
| 55.3% |     893 | `Compile::Compile`                         | `<unknown>`                                          |
| 27.5% |     445 | `main`                                     | `org.codenarc.CodeNarc`                              |
| 27.5% |     444 | `fromCache`                                | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| 27.5% |     444 | `linkToCallSite`                           | `java.lang.invoke.Invokers$Holder`                   |
| 27.4% |     443 | `invokeExact_MT`                           | `java.lang.invoke.Invokers$Holder`                   |
| 27.4% |     442 | `invokeStatic`                             | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| 27.3% |     441 | `invoke`                                   | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800`  |
| 27.2% |     440 | `guardWithCatch`                           | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000`  |
| 27.2% |     440 | `guard`                                    | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00`  |
| 27.2% |     440 | `reinvoke`                                 | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800`  |
| 26.6% |     430 | `invokeVirtual`                            | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |
| 26.6% |     430 | `invoke`                                   | `java.lang.invoke.LambdaForm$MH.0x00000070010c7400`  |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|     % | Samples | Function                                   | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 67.2% |   1,086 | `CompileBroker::compiler_thread_loop`      | `<unknown>` |
| 66.3% |   1,072 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
| 55.5% |     897 | `C2Compiler::compile_method`               | `<unknown>` |
| 55.3% |     893 | `Compile::Compile`                         | `<unknown>` |
| 26.4% |     427 | `Compile::Code_Gen`                        | `<unknown>` |
| 21.0% |     340 | `Compile::Optimize`                        | `<unknown>` |
| 15.0% |     242 | `PhaseChaitin::Register_Allocate`          | `<unknown>` |
| 12.4% |     200 | `PhaseIdealLoop::optimize`                 | `<unknown>` |
| 10.6% |     172 | `PhaseIdealLoop::PhaseIdealLoop`           | `<unknown>` |
| 10.6% |     171 | `PhaseIdealLoop::build_and_optimize`       | `<unknown>` |
| 10.5% |     169 | `Compilation::compile_method`              | `<unknown>` |
| 10.5% |     169 | `Compilation::Compilation`                 | `<unknown>` |
|  9.4% |     152 | `Compilation::compile_java_method`         | `<unknown>` |
|  6.9% |     111 | `PhaseIterGVN::optimize`                   | `<unknown>` |
|  6.5% |     105 | `PhaseIterGVN::transform_old`              | `<unknown>` |
|  5.6% |      90 | `Compile::optimize_loops`                  | `<unknown>` |
|  4.6% |      75 | `Compilation::build_hir`                   | `<unknown>` |
|  4.0% |      64 | `Matcher::match`                           | `<unknown>` |
|  3.8% |      62 | `PhaseOutput::Output`                      | `<unknown>` |
|  3.8% |      61 | `GraphBuilder::GraphBuilder`               | `<unknown>` |

##### Native

|     % | Samples | Function                                    | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 71.1% |   1,149 | `_pthread_start`                            | `<unknown>` |
| 71.1% |   1,149 | `thread_start`                              | `<unknown>` |
| 71.0% |   1,148 | `Thread::call_run`                          | `<unknown>` |
| 71.0% |   1,148 | `thread_native_entry`                       | `<unknown>` |
| 67.3% |   1,087 | `JavaThread::thread_main_inner`             | `<unknown>` |
| 10.5% |     170 | `Compiler::compile_method`                  | `<unknown>` |
|  7.0% |     113 | `Parse::Parse`                              | `<unknown>` |
|  7.0% |     113 | `ParseGenerator::generate`                  | `<unknown>` |
|  6.9% |     111 | `Parse::do_one_block`                       | `<unknown>` |
|  6.9% |     111 | `Parse::do_all_blocks`                      | `<unknown>` |
|  6.1% |      98 | `Parse::do_call`                            | `<unknown>` |
|  3.8% |      61 | `IRScope::IRScope`                          | `<unknown>` |
|  3.8% |      61 | `IR::IR`                                    | `<unknown>` |
|  3.8% |      61 | `PredictedCallGenerator::generate`          | `<unknown>` |
|  3.6% |      58 | `WorkerThread::run`                         | `<unknown>` |
|  2.7% |      43 | `JVM_FillInStackTrace`                      | `<unknown>` |
|  2.7% |      43 | `Java_java_lang_Throwable_fillInStackTrace` | `<unknown>` |
|  2.6% |      42 | `java_lang_Throwable::fill_in_stack_trace`  | `<unknown>` |
|  2.4% |      38 | `G1EvacuateRegionsBaseTask::work`           | `<unknown>` |
|  2.2% |      36 | `G1EvacuateRegionsTask::scan_roots`         | `<unknown>` |

##### Standard library

|     % | Samples | Function         | Location                                             |
| ----: | ------: | ---------------- | ---------------------------------------------------- |
| 27.5% |     444 | `fromCache`      | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| 27.5% |     444 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder`                   |
| 27.4% |     443 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder`                   |
| 27.4% |     442 | `invokeStatic`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| 27.3% |     441 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800`  |
| 27.2% |     440 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000`  |
| 27.2% |     440 | `guard`          | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00`  |
| 27.2% |     440 | `reinvoke`       | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800`  |
| 26.6% |     430 | `invokeVirtual`  | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |
| 26.6% |     430 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010c7400`  |
| 26.6% |     430 | `invokeVirtual`  | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 26.6% |     430 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010c6800`  |
| 26.5% |     429 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000700108e000`  |
| 26.5% |     428 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010a9800`  |
| 26.4% |     427 | `invokeSpecial`  | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 26.4% |     426 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x0000007001098400`  |
| 26.4% |     426 | `reinvoke`       | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00`  |
| 26.4% |     426 | `guard`          | `java.lang.invoke.LambdaForm$MH.0x000000700109a000`  |
| 26.2% |     423 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000700102b000`  |
| 26.1% |     422 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000700109bc00`  |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`<unknown>`)

|      % | Samples | Caller         | Location    |
| -----: | ------: | -------------- | ----------- |
| 100.0% |   1,149 | `thread_start` | `<unknown>` |

##### `Thread::call_run` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |   1,148 | `thread_native_entry` | `<unknown>` |

##### `thread_native_entry` (`<unknown>`)

|      % | Samples | Caller           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |   1,148 | `_pthread_start` | `<unknown>` |

##### `JavaThread::thread_main_inner` (`<unknown>`)

|      % | Samples | Caller             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |   1,087 | `Thread::call_run` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop` (`<unknown>`)

|      % | Samples | Caller                          | Location    |
| -----: | ------: | ------------------------------- | ----------- |
| 100.0% |   1,086 | `JavaThread::thread_main_inner` | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method` (`<unknown>`)

|      % | Samples | Caller                                | Location    |
| -----: | ------: | ------------------------------------- | ----------- |
| 100.0% |   1,072 | `CompileBroker::compiler_thread_loop` | `<unknown>` |

##### `C2Compiler::compile_method` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |     897 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |

##### `Compile::Compile` (`<unknown>`)

|      % | Samples | Caller                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |     893 | `C2Compiler::compile_method` | `<unknown>` |

##### `fromCache` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|     % | Samples | Caller             | Location                                             |
| ----: | ------: | ------------------ | ---------------------------------------------------- |
| 99.5% |     442 | `invokeStatic`     | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|  0.7% |       3 | `invokeStaticInit` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088c00` |

##### `linkToCallSite` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller             | Location                                         |
| -----: | ------: | ------------------ | ------------------------------------------------ |
| 100.0% |     444 | `main`             | `org.codenarc.CodeNarc`                          |
|  96.2% |     427 | `execute`          | `org.codenarc.CodeNarc`                          |
|  95.0% |     422 | `execute`          | `org.codenarc.CodeNarcRunner`                    |
|  80.2% |     356 | `processDirectory` | `org.codenarc.analyzer.FilesystemSourceAnalyzer` |
|  80.2% |     356 | `analyze`          | `org.codenarc.analyzer.FilesystemSourceAnalyzer` |

##### `invokeExact_MT` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Caller         | Location                                               |
| ----: | ------: | -------------- | ------------------------------------------------------ |
| 99.8% |     442 | `fromCache`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface`        |
| 95.0% |     421 | `invokeImpl`   | `jdk.internal.reflect.DirectMethodHandleAccessor`      |
| 70.4% |     312 | `selectMethod` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`        |
|  5.9% |      26 | `invokeImpl`   | `jdk.internal.reflect.DirectConstructorHandleAccessor` |
|  0.2% |       1 | `invoke`       | `java.lang.invoke.BootstrapMethodInvoker`              |

##### `invokeStatic` (`java.lang.invoke.LambdaForm$DMH.0x0000007001088800`)

|     % | Samples | Caller   | Location                                            |
| ----: | ------: | -------- | --------------------------------------------------- |
| 99.8% |     441 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800` |
| 96.6% |     427 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000700108e000` |
| 83.0% |     367 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010d8c00` |
| 81.4% |     360 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x0000007001288800` |
| 56.3% |     249 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000700138c800` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010a1800`)

|      % | Samples | Caller           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |     441 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder`                  |
|   8.2% |      36 | `reinvoke`       | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |

##### `guardWithCatch` (`java.lang.invoke.LambdaForm$MH.0x00000070010aa000`)

|      % | Samples | Caller     | Location                                            |
| -----: | ------: | ---------- | --------------------------------------------------- |
| 100.0% |     440 | `reinvoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|  85.7% |     377 | `delegate` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `guard` (`java.lang.invoke.LambdaForm$MH.0x00000070010aac00`)

|      % | Samples | Caller           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |     440 | `reinvoke`       | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|  85.7% |     377 | `delegate`       | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   0.2% |       1 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder`                  |

##### `reinvoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010aa800`)

|      % | Samples | Caller   | Location                                            |
| -----: | ------: | -------- | --------------------------------------------------- |
| 100.0% |     440 | `guard`  | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00` |
|  97.7% |     430 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010c7400` |
|  94.1% |     414 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010d3c00` |
|  50.0% |     220 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010abc00` |
|  14.3% |      63 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010dcc00` |

##### `invokeVirtual` (`java.lang.invoke.LambdaForm$DMH.0x0000007001094400`)

|     % | Samples | Caller           | Location                                            |
| ----: | ------: | ---------------- | --------------------------------------------------- |
| 99.5% |     428 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010a9800` |
| 80.0% |     344 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x00000070010d3000` |
|  2.8% |      12 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010c9c00` |
|  2.3% |      10 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000007001332c00` |
|  1.6% |       7 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070013d2c00` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010c7400`)

|      % | Samples | Caller           | Location                           |
| -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% |     430 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder` |

##### `invokeVirtual` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Caller           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |     430 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010c6800` |
|  98.1% |     422 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000700102b000` |
|  11.2% |      48 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x0000007001098400` |
|   1.4% |       6 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010c7800` |
|   1.2% |       5 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010d8000` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010c6800`)

|      % | Samples | Caller           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |     430 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000` |
|   0.2% |       1 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder`                  |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x000000700108e000`)

|      % | Samples | Caller           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |     429 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder`                  |
|   0.5% |       2 | `reinvoke`       | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010a9800`)

|      % | Samples | Caller           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |     428 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000` |

##### `Compile::Code_Gen` (`<unknown>`)

|      % | Samples | Caller             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |     427 | `Compile::Compile` | `<unknown>` |

##### `invokeSpecial` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Caller           | Location                                            |
| ----: | ------: | ---------------- | --------------------------------------------------- |
| 83.4% |     356 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x00000070010d3000` |
| 82.7% |     353 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000007001296c00` |
| 82.4% |     352 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000007001129800` |
| 50.1% |     214 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000700149d400` |
| 39.8% |     170 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000007001383800` |

##### `guardWithCatch` (`java.lang.invoke.LambdaForm$MH.0x0000007001098400`)

|      % | Samples | Caller     | Location                                            |
| -----: | ------: | ---------- | --------------------------------------------------- |
| 100.0% |     426 | `reinvoke` | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00` |
|   8.7% |      37 | `delegate` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `reinvoke` (`java.lang.invoke.LambdaForm$MH.0x0000007001099c00`)

|      % | Samples | Caller   | Location                                            |
| -----: | ------: | -------- | --------------------------------------------------- |
| 100.0% |     426 | `guard`  | `java.lang.invoke.LambdaForm$MH.0x000000700109a000` |
|  99.1% |     422 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000700109bc00` |
|  18.5% |      79 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000700109ac00` |

##### `guard` (`java.lang.invoke.LambdaForm$MH.0x000000700109a000`)

|      % | Samples | Caller           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |     426 | `reinvoke`       | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00` |
|   9.2% |      39 | `delegate`       | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   2.3% |      10 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder`                  |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x000000700102b000`)

|     % | Samples | Caller           | Location                                            |
| ----: | ------: | ---------------- | --------------------------------------------------- |
| 99.8% |     422 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x0000007001098400` |
|  0.7% |       3 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder`                  |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x000000700109bc00`)

|      % | Samples | Caller           | Location                           |
| -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% |     422 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder` |

##### `Compile::Optimize` (`<unknown>`)

|      % | Samples | Caller             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |     340 | `Compile::Compile` | `<unknown>` |

##### `PhaseChaitin::Register_Allocate` (`<unknown>`)

|      % | Samples | Caller              | Location    |
| -----: | ------: | ------------------- | ----------- |
| 100.0% |     242 | `Compile::Code_Gen` | `<unknown>` |

##### `PhaseIdealLoop::optimize` (`<unknown>`)

|     % | Samples | Caller                    | Location    |
| ----: | ------: | ------------------------- | ----------- |
| 54.5% |     109 | `Compile::Optimize`       | `<unknown>` |
| 45.0% |      90 | `Compile::optimize_loops` | `<unknown>` |
|  0.5% |       1 | `Compile::Compile`        | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`<unknown>`)

|      % | Samples | Caller                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |     172 | `PhaseIdealLoop::optimize` | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize` (`<unknown>`)

|      % | Samples | Caller                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |     171 | `PhaseIdealLoop::PhaseIdealLoop` | `<unknown>` |

##### `Compiler::compile_method` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |     170 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |

##### `Compilation::compile_method` (`<unknown>`)

|      % | Samples | Caller                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |     169 | `Compilation::Compilation` | `<unknown>` |

##### `Compilation::Compilation` (`<unknown>`)

|      % | Samples | Caller                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |     169 | `Compiler::compile_method` | `<unknown>` |

##### `Compilation::compile_java_method` (`<unknown>`)

|      % | Samples | Caller                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |     152 | `Compilation::compile_method` | `<unknown>` |

##### `Parse::Parse` (`<unknown>`)

|      % | Samples | Caller                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |     113 | `ParseGenerator::generate` | `<unknown>` |

##### `ParseGenerator::generate` (`<unknown>`)

|     % | Samples | Caller                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 98.2% |     111 | `Compile::Compile`                     | `<unknown>` |
| 59.3% |      67 | `Parse::do_call`                       | `<unknown>` |
| 51.3% |      58 | `PredictedCallGenerator::generate`     | `<unknown>` |
|  1.8% |       2 | `CallGenerator::do_late_inline_helper` | `<unknown>` |

##### `PhaseIterGVN::optimize` (`<unknown>`)

|     % | Samples | Caller                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 58.6% |      65 | `Compile::Optimize`                        | `<unknown>` |
| 24.3% |      27 | `PhaseIdealLoop::optimize`                 | `<unknown>` |
| 11.7% |      13 | `PhaseMacroExpand::expand_macro_nodes`     | `<unknown>` |
|  3.6% |       4 | `Compile::process_for_post_loop_opts_igvn` | `<unknown>` |
|  1.8% |       2 | `Compile::remove_speculative_types`        | `<unknown>` |

##### `Parse::do_one_block` (`<unknown>`)

|      % | Samples | Caller                 | Location    |
| -----: | ------: | ---------------------- | ----------- |
| 100.0% |     111 | `Parse::do_all_blocks` | `<unknown>` |

##### `Parse::do_all_blocks` (`<unknown>`)

|      % | Samples | Caller         | Location    |
| -----: | ------: | -------------- | ----------- |
| 100.0% |     111 | `Parse::Parse` | `<unknown>` |

##### `PhaseIterGVN::transform_old` (`<unknown>`)

|      % | Samples | Caller                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |     105 | `PhaseIterGVN::optimize` | `<unknown>` |

##### `Parse::do_call` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      98 | `Parse::do_one_block` | `<unknown>` |

##### `Compile::optimize_loops` (`<unknown>`)

|      % | Samples | Caller              | Location    |
| -----: | ------: | ------------------- | ----------- |
| 100.0% |      90 | `Compile::Optimize` | `<unknown>` |

##### `Compilation::build_hir` (`<unknown>`)

|      % | Samples | Caller                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |      75 | `Compilation::compile_java_method` | `<unknown>` |

##### `Matcher::match` (`<unknown>`)

|      % | Samples | Caller              | Location    |
| -----: | ------: | ------------------- | ----------- |
| 100.0% |      64 | `Compile::Code_Gen` | `<unknown>` |

##### `PhaseOutput::Output` (`<unknown>`)

|      % | Samples | Caller              | Location    |
| -----: | ------: | ------------------- | ----------- |
| 100.0% |      62 | `Compile::Code_Gen` | `<unknown>` |

##### `GraphBuilder::GraphBuilder` (`<unknown>`)

|      % | Samples | Caller             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |      61 | `IRScope::IRScope` | `<unknown>` |

##### `IRScope::IRScope` (`<unknown>`)

|      % | Samples | Caller                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |      61 | `IR::IR`                   | `<unknown>` |
|   1.6% |       1 | `GraphBuilder::push_scope` | `<unknown>` |

##### `IR::IR` (`<unknown>`)

|      % | Samples | Caller                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |      61 | `Compilation::build_hir` | `<unknown>` |

##### `PredictedCallGenerator::generate` (`<unknown>`)

|      % | Samples | Caller                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |      61 | `Parse::do_call`                   | `<unknown>` |
|  21.3% |      13 | `PredictedCallGenerator::generate` | `<unknown>` |

##### `WorkerThread::run` (`<unknown>`)

|      % | Samples | Caller             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |      58 | `Thread::call_run` | `<unknown>` |

##### `JVM_FillInStackTrace` (`<unknown>`)

|      % | Samples | Caller                                      | Location    |
| -----: | ------: | ------------------------------------------- | ----------- |
| 100.0% |      43 | `Java_java_lang_Throwable_fillInStackTrace` | `<unknown>` |

##### `Java_java_lang_Throwable_fillInStackTrace` (`<unknown>`)

|      % | Samples | Caller             | Location              |
| -----: | ------: | ------------------ | --------------------- |
| 100.0% |      43 | `fillInStackTrace` | `java.lang.Throwable` |

##### `java_lang_Throwable::fill_in_stack_trace` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |      42 | `JVM_FillInStackTrace`                     | `<unknown>` |
|  97.6% |      41 | `java_lang_Throwable::fill_in_stack_trace` | `<unknown>` |

##### `G1EvacuateRegionsBaseTask::work` (`<unknown>`)

|      % | Samples | Caller              | Location    |
| -----: | ------: | ------------------- | ----------- |
| 100.0% |      38 | `WorkerThread::run` | `<unknown>` |

##### `G1EvacuateRegionsTask::scan_roots` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      36 | `G1EvacuateRegionsBaseTask::work` | `<unknown>` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`<unknown>`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 99.9% |   1,148 | `thread_native_entry` | `<unknown>` |
|  0.1% |       1 | `ThreadJavaMain`      | `<unknown>` |

##### `thread_start` (`<unknown>`)

|      % | Samples | Callee           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |   1,149 | `_pthread_start` | `<unknown>` |

##### `Thread::call_run` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 94.7% |   1,087 | `JavaThread::thread_main_inner` | `<unknown>` |
|  5.1% |      58 | `WorkerThread::run`             | `<unknown>` |
|  0.1% |       1 | `VMThread::run`                 | `<unknown>` |
|  0.1% |       1 | `ConcurrentGCThread::run`       | `<unknown>` |
|  0.1% |       1 | `WatcherThread::run`            | `<unknown>` |

##### `thread_native_entry` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |   1,148 | `Thread::call_run` | `<unknown>` |

##### `JavaThread::thread_main_inner` (`<unknown>`)

|     % | Samples | Callee                                | Location    |
| ----: | ------: | ------------------------------------- | ----------- |
| 99.9% |   1,086 | `CompileBroker::compiler_thread_loop` | `<unknown>` |
|  0.1% |       1 | `ServiceThread::service_thread_entry` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 98.7% |   1,072 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
|  1.3% |      14 | `CompileQueue::get`                        | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 83.7% |     897 | `C2Compiler::compile_method`    | `<unknown>` |
| 15.9% |     170 | `Compiler::compile_method`      | `<unknown>` |
|  0.2% |       2 | `ciEnv::ciEnv`                  | `<unknown>` |
|  0.1% |       1 | `CompilationLog::log_compile`   | `<unknown>` |
|  0.1% |       1 | `ciEnv::get_method_from_handle` | `<unknown>` |

##### `C2Compiler::compile_method` (`<unknown>`)

|     % | Samples | Callee              | Location    |
| ----: | ------: | ------------------- | ----------- |
| 99.6% |     893 | `Compile::Compile`  | `<unknown>` |
|  0.3% |       3 | `Compile::~Compile` | `<unknown>` |
|  0.1% |       1 | `Chunk::next_chop`  | `<unknown>` |

##### `Compile::Compile` (`<unknown>`)

|     % | Samples | Callee                                   | Location    |
| ----: | ------: | ---------------------------------------- | ----------- |
| 47.8% |     427 | `Compile::Code_Gen`                      | `<unknown>` |
| 38.1% |     340 | `Compile::Optimize`                      | `<unknown>` |
| 12.4% |     111 | `ParseGenerator::generate`               | `<unknown>` |
|  1.1% |      10 | `PhaseRemoveUseless::PhaseRemoveUseless` | `<unknown>` |
|  0.2% |       2 | `CallGenerator::for_inline`              | `<unknown>` |

##### `main` (`org.codenarc.CodeNarc`)

|     % | Samples | Callee           | Location                               |
| ----: | ------: | ---------------- | -------------------------------------- |
| 99.8% |     444 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder`     |
|  0.2% |       1 | `linkCallSite`   | `java.lang.invoke.MethodHandleNatives` |

##### `fromCache` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|     % | Samples | Callee               | Location                                        |
| ----: | ------: | -------------------- | ----------------------------------------------- |
| 99.5% |     442 | `invokeExact_MT`     | `java.lang.invoke.Invokers$Holder`              |
| 15.8% |      70 | `doWithCallSite`     | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|  0.5% |       2 | `bypassCache`        | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|  0.2% |       1 | `linkToTargetMethod` | `java.lang.invoke.Invokers$Holder`              |
|  0.2% |       1 | `UncommonTrapBlob`   | `<unknown>`                                     |

##### `linkToCallSite` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Callee   | Location                                            |
| ----: | ------: | -------- | --------------------------------------------------- |
| 99.3% |     441 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800` |
| 96.6% |     429 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000700108e000` |
| 82.7% |     367 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010d8c00` |
| 81.1% |     360 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x0000007001288800` |
|  7.2% |      32 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000700109b400` |

##### `invokeExact_MT` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Callee   | Location                                            |
| ----: | ------: | -------- | --------------------------------------------------- |
| 97.1% |     430 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010c7400` |
| 95.3% |     422 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000700109bc00` |
| 93.5% |     414 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010d3c00` |
| 80.4% |     356 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x0000007001282400` |
| 79.7% |     353 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x0000007001296c00` |

##### `invokeStatic` (`java.lang.invoke.LambdaForm$DMH.0x0000007001088800`)

|      % | Samples | Callee                 | Location                                        |
| -----: | ------: | ---------------------- | ----------------------------------------------- |
| 100.0% |     442 | `fromCache`            | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|  76.5% |     338 | `selectMethod`         | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|   0.5% |       2 | `resolve_static_call`  | `<unknown>`                                     |
|   0.2% |       1 | `g1_post_barrier_slow` | `<unknown>`                                     |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010a1800`)

|      % | Samples | Callee         | Location                                             |
| -----: | ------: | -------------- | ---------------------------------------------------- |
| 100.0% |     441 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|   1.1% |       5 | `collector`    | `java.lang.invoke.LambdaForm$MH.0x00000070010a1000`  |

##### `guardWithCatch` (`java.lang.invoke.LambdaForm$MH.0x00000070010aa000`)

|     % | Samples | Callee            | Location                                             |
| ----: | ------: | ----------------- | ---------------------------------------------------- |
| 97.7% |     430 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000070010c6800`  |
| 97.3% |     428 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000070010a9800`  |
| 81.1% |     357 | `invokeInterface` | `java.lang.invoke.LambdaForm$DMH.0x0000007001094c00` |
| 45.2% |     199 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000070010d3800`  |
| 11.8% |      52 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x0000007001121000`  |

##### `guard` (`java.lang.invoke.LambdaForm$MH.0x00000070010aac00`)

|      % | Samples | Callee     | Location                                            |
| -----: | ------: | ---------- | --------------------------------------------------- |
| 100.0% |     440 | `reinvoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|  85.7% |     377 | `delegate` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   0.5% |       2 | `invoke`   | `java.lang.invoke.LambdaForm$MH.0x00000070010aa400` |

##### `reinvoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010aa800`)

|      % | Samples | Callee           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |     440 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000` |
| 100.0% |     440 | `guard`          | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00` |
|  40.5% |     178 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000700138cc00` |
|   8.2% |      36 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800` |
|   7.3% |      32 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000700132c800` |

##### `invokeVirtual` (`java.lang.invoke.LambdaForm$DMH.0x0000007001094400`)

|     % | Samples | Callee              | Location                                       |
| ----: | ------: | ------------------- | ---------------------------------------------- |
| 82.6% |     355 | `doMethodInvoke`    | `org.codehaus.groovy.runtime.dgm$1076`         |
| 79.8% |     343 | `collectViolations` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |
| 17.9% |      77 | `doMethodInvoke`    | `org.codehaus.groovy.runtime.dgm$207`          |
| 11.9% |      51 | `doMethodInvoke`    | `org.codehaus.groovy.runtime.dgm$251`          |
| 10.2% |      44 | `doMethodInvoke`    | `org.codehaus.groovy.runtime.dgm$1008`         |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010c7400`)

|      % | Samples | Callee     | Location                                            |
| -----: | ------: | ---------- | --------------------------------------------------- |
| 100.0% |     430 | `reinvoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|  84.0% |     361 | `delegate` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invokeVirtual` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Callee                  | Location                                   |
| -----: | ------: | ----------------------- | ------------------------------------------ |
| 100.0% |     430 | `execute`               | `org.codenarc.CodeNarc`                    |
|  98.1% |     422 | `execute`               | `org.codenarc.CodeNarcRunner`              |
|  10.5% |      45 | `createInitialRuleSet`  | `org.codenarc.CodeNarcRunner`              |
|   0.9% |       4 | `parseArgs`             | `org.codenarc.CodeNarc`                    |
|   0.5% |       2 | `getFormattedTimestamp` | `org.codenarc.report.AbstractReportWriter` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010c6800`)

|      % | Samples | Callee          | Location                                             |
| -----: | ------: | --------------- | ---------------------------------------------------- |
| 100.0% |     430 | `invokeVirtual` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|   0.2% |       1 | `invokeSpecial` | `java.lang.invoke.LambdaForm$DMH.0x0000007001084000` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x000000700108e000`)

|     % | Samples | Callee             | Location                                             |
| ----: | ------: | ------------------ | ---------------------------------------------------- |
| 99.5% |     427 | `invokeStatic`     | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|  0.9% |       4 | `collector`        | `java.lang.invoke.LambdaForm$MH.0x0000007001031800`  |
|  0.7% |       3 | `invokeStaticInit` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088c00` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010a9800`)

|      % | Samples | Callee          | Location                                             |
| -----: | ------: | --------------- | ---------------------------------------------------- |
| 100.0% |     428 | `invokeVirtual` | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |

##### `Compile::Code_Gen` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 56.7% |     242 | `PhaseChaitin::Register_Allocate` | `<unknown>` |
| 15.0% |      64 | `Matcher::match`                  | `<unknown>` |
| 14.5% |      62 | `PhaseOutput::Output`             | `<unknown>` |
| 11.7% |      50 | `PhaseCFG::do_global_code_motion` | `<unknown>` |
|  1.2% |       5 | `PhaseOutput::install_code`       | `<unknown>` |

##### `invokeSpecial` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Callee             | Location                                                                    |
| ----: | ------: | ------------------ | --------------------------------------------------------------------------- |
| 83.4% |     356 | `processDirectory` | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 83.1% |     355 | `doCall`           | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
| 44.3% |     189 | `doCall`           | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
| 10.8% |      46 | `doCall`           | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`  |
| 10.5% |      45 | `doCall`           | `org.codenarc.CodeNarcRunner$_createInitialRuleSetFromFiles_closure6`       |

##### `guardWithCatch` (`java.lang.invoke.LambdaForm$MH.0x0000007001098400`)

|     % | Samples | Callee          | Location                                            |
| ----: | ------: | --------------- | --------------------------------------------------- |
| 99.1% |     422 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000700102b000` |
| 11.5% |      49 | `invokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder`        |
| 11.3% |      48 | `invokeVirtual` | `java.lang.invoke.DirectMethodHandle$Holder`        |
| 10.8% |      46 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x0000007001105400` |
|  2.8% |      12 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x00000070010c9c00` |

##### `reinvoke` (`java.lang.invoke.LambdaForm$MH.0x0000007001099c00`)

|      % | Samples | Callee           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |     426 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x0000007001098400` |
| 100.0% |     426 | `guard`          | `java.lang.invoke.LambdaForm$MH.0x000000700109a000` |
|   1.4% |       6 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070011eb800` |
|   0.5% |       2 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000700108e000` |
|   0.2% |       1 | `identity_L`     | `java.lang.invoke.LambdaForm$Holder`                |

##### `guard` (`java.lang.invoke.LambdaForm$MH.0x000000700109a000`)

|      % | Samples | Callee     | Location                                            |
| -----: | ------: | ---------- | --------------------------------------------------- |
| 100.0% |     426 | `reinvoke` | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00` |
|   8.7% |      37 | `delegate` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   0.2% |       1 | `invoke`   | `java.lang.invoke.LambdaForm$MH.0x000000700109a400` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x000000700102b000`)

|     % | Samples | Callee             | Location                                     |
| ----: | ------: | ------------------ | -------------------------------------------- |
| 99.8% |     422 | `invokeVirtual`    | `java.lang.invoke.DirectMethodHandle$Holder` |
|  0.5% |       2 | `invokeSpecial`    | `java.lang.invoke.DirectMethodHandle$Holder` |
|  0.2% |       1 | `newInvokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x000000700109bc00`)

|      % | Samples | Callee     | Location                                            |
| -----: | ------: | ---------- | --------------------------------------------------- |
| 100.0% |     422 | `reinvoke` | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00` |
|   0.7% |       3 | `invoke`   | `java.lang.invoke.LambdaForm$MH.0x000000700109b800` |
|   0.2% |       1 | `delegate` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `Compile::Optimize` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 32.1% |     109 | `PhaseIdealLoop::optimize`     | `<unknown>` |
| 26.5% |      90 | `Compile::optimize_loops`      | `<unknown>` |
| 19.1% |      65 | `PhaseIterGVN::optimize`       | `<unknown>` |
|  5.0% |      17 | `PhaseCCP::PhaseCCP`           | `<unknown>` |
|  3.8% |      13 | `ConnectionGraph::do_analysis` | `<unknown>` |

##### `PhaseChaitin::Register_Allocate` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 19.8% |      48 | `PhaseChaitin::build_ifg_physical`         | `<unknown>` |
| 17.4% |      42 | `PhaseChaitin::Split`                      | `<unknown>` |
| 14.9% |      36 | `PhaseLive::compute`                       | `<unknown>` |
| 11.2% |      27 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |
|  7.9% |      19 | `PhaseChaitin::gather_lrg_masks`           | `<unknown>` |

##### `PhaseIdealLoop::optimize` (`<unknown>`)

|     % | Samples | Callee                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 86.0% |     172 | `PhaseIdealLoop::PhaseIdealLoop` | `<unknown>` |
| 13.5% |      27 | `PhaseIterGVN::optimize`         | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 99.4% |     171 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |
|  0.6% |       1 | `PhaseIdealLoop::Dominators`         | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 24.0% |      41 | `PhaseIdealLoop::build_loop_late`      | `<unknown>` |
| 19.9% |      34 | `PhaseIdealLoop::split_if_with_blocks` | `<unknown>` |
| 12.9% |      22 | `PhaseIdealLoop::build_loop_early`     | `<unknown>` |
| 12.3% |      21 | `PhaseIdealLoop::Dominators`           | `<unknown>` |
|  4.7% |       8 | `MultiNode::is_CFG`                    | `<unknown>` |

##### `Compiler::compile_method` (`<unknown>`)

|     % | Samples | Callee                     | Location    |
| ----: | ------: | -------------------------- | ----------- |
| 99.4% |     169 | `Compilation::Compilation` | `<unknown>` |
|  0.6% |       1 | `Chunk::next_chop`         | `<unknown>` |

##### `Compilation::compile_method` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 89.9% |     152 | `Compilation::compile_java_method`   | `<unknown>` |
|  8.3% |      14 | `ciEnv::register_method`             | `<unknown>` |
|  1.2% |       2 | `Dependencies::assert_common_1`      | `<unknown>` |
|  0.6% |       1 | `Dependencies::encode_content_bytes` | `<unknown>` |

##### `Compilation::Compilation` (`<unknown>`)

|      % | Samples | Callee                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |     169 | `Compilation::compile_method` | `<unknown>` |

##### `Compilation::compile_java_method` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 49.3% |      75 | `Compilation::build_hir`       | `<unknown>` |
| 32.2% |      49 | `Compilation::emit_lir`        | `<unknown>` |
| 16.4% |      25 | `Compilation::emit_code_body`  | `<unknown>` |
|  1.3% |       2 | `ciMethod::ensure_method_data` | `<unknown>` |
|  0.7% |       1 | `FrameMap::FrameMap`           | `<unknown>` |

##### `Parse::Parse` (`<unknown>`)

|     % | Samples | Callee                    | Location    |
| ----: | ------: | ------------------------- | ----------- |
| 98.2% |     111 | `Parse::do_all_blocks`    | `<unknown>` |
|  3.5% |       4 | `Parse::do_exits`         | `<unknown>` |
|  2.7% |       3 | `Parse::build_exits`      | `<unknown>` |
|  0.9% |       1 | `GraphKit::set_map_clone` | `<unknown>` |
|  0.9% |       1 | `Parse::do_method_entry`  | `<unknown>` |

##### `ParseGenerator::generate` (`<unknown>`)

|      % | Samples | Callee         | Location    |
| -----: | ------: | -------------- | ----------- |
| 100.0% |     113 | `Parse::Parse` | `<unknown>` |

##### `PhaseIterGVN::optimize` (`<unknown>`)

|     % | Samples | Callee                                | Location    |
| ----: | ------: | ------------------------------------- | ----------- |
| 94.6% |     105 | `PhaseIterGVN::transform_old`         | `<unknown>` |
|  0.9% |       1 | `PhiNode::hash`                       | `<unknown>` |
|  0.9% |       1 | `PhaseIterGVN::add_users_to_worklist` | `<unknown>` |
|  0.9% |       1 | `CProjNode::hash`                     | `<unknown>` |
|  0.9% |       1 | `RegionNode::hash`                    | `<unknown>` |

##### `Parse::do_one_block` (`<unknown>`)

|     % | Samples | Callee                      | Location    |
| ----: | ------: | --------------------------- | ----------- |
| 88.3% |      98 | `Parse::do_call`            | `<unknown>` |
| 21.6% |      24 | `Parse::do_field_access`    | `<unknown>` |
|  7.2% |       8 | `Parse::do_one_bytecode`    | `<unknown>` |
|  3.6% |       4 | `Parse::do_if`              | `<unknown>` |
|  2.7% |       3 | `GraphKit::access_store_at` | `<unknown>` |

##### `Parse::do_all_blocks` (`<unknown>`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |     111 | `Parse::do_one_block` | `<unknown>` |
|   0.9% |       1 | `Parse::merge_common` | `<unknown>` |

##### `PhaseIterGVN::transform_old` (`<unknown>`)

|     % | Samples | Callee                       | Location    |
| ----: | ------: | ---------------------------- | ----------- |
| 12.4% |      13 | `NodeHash::hash_find_insert` | `<unknown>` |
|  9.5% |      10 | `RegionNode::Ideal`          | `<unknown>` |
|  9.5% |      10 | `PhaseIterGVN::subsume_node` | `<unknown>` |
|  8.6% |       9 | `PhiNode::Ideal`             | `<unknown>` |
|  6.7% |       7 | `StoreNode::Ideal`           | `<unknown>` |

##### `Parse::do_call` (`<unknown>`)

|     % | Samples | Callee                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 68.4% |      67 | `ParseGenerator::generate`         | `<unknown>` |
| 62.2% |      61 | `PredictedCallGenerator::generate` | `<unknown>` |
| 31.6% |      31 | `Compile::call_generator`          | `<unknown>` |
|  6.1% |       6 | `LibraryIntrinsic::generate`       | `<unknown>` |
|  2.0% |       2 | `ciBytecodeStream::get_method`     | `<unknown>` |

##### `Compile::optimize_loops` (`<unknown>`)

|      % | Samples | Callee                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |      90 | `PhaseIdealLoop::optimize` | `<unknown>` |

##### `Compilation::build_hir` (`<unknown>`)

|     % | Samples | Callee                                       | Location    |
| ----: | ------: | -------------------------------------------- | ----------- |
| 81.3% |      61 | `IR::IR`                                     | `<unknown>` |
|  5.3% |       4 | `GlobalValueNumbering::GlobalValueNumbering` | `<unknown>` |
|  4.0% |       3 | `IR::compute_use_counts`                     | `<unknown>` |
|  4.0% |       3 | `IR::eliminate_null_checks`                  | `<unknown>` |
|  2.7% |       2 | `IR::split_critical_edges`                   | `<unknown>` |

##### `Matcher::match` (`<unknown>`)

|     % | Samples | Callee                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 71.9% |      46 | `Matcher::xform`                              | `<unknown>` |
| 14.1% |       9 | `Matcher::find_shared`                        | `<unknown>` |
|  6.3% |       4 | `Matcher::specialize_generic_vector_operands` | `<unknown>` |
|  3.1% |       2 | `Matcher::Fixup_Save_On_Entry`                | `<unknown>` |
|  1.6% |       1 | `DecodeNNode::Opcode`                         | `<unknown>` |

##### `PhaseOutput::Output` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 29.0% |      18 | `PhaseOutput::fill_buffer`      | `<unknown>` |
| 24.2% |      15 | `PhaseOutput::BuildOopMaps`     | `<unknown>` |
| 21.0% |      13 | `Scheduling::DoScheduling`      | `<unknown>` |
| 12.9% |       8 | `PhaseOutput::shorten_branches` | `<unknown>` |
|  3.2% |       2 | `RetNode::pipeline`             | `<unknown>` |

##### `GraphBuilder::GraphBuilder` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 91.8% |      56 | `GraphBuilder::iterate_all_blocks`   | `<unknown>` |
|  4.9% |       3 | `BlockListBuilder::BlockListBuilder` | `<unknown>` |
|  1.6% |       1 | `GraphBuilder::setup_start_block`    | `<unknown>` |
|  1.6% |       1 | `BlockBegin::iterate_preorder`       | `<unknown>` |

##### `IRScope::IRScope` (`<unknown>`)

|      % | Samples | Callee                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |      61 | `GraphBuilder::GraphBuilder` | `<unknown>` |
|   1.6% |       1 | `resource_allocate_bytes`    | `<unknown>` |

##### `IR::IR` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |      61 | `IRScope::IRScope` | `<unknown>` |

##### `PredictedCallGenerator::generate` (`<unknown>`)

|     % | Samples | Callee                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 95.1% |      58 | `ParseGenerator::generate`         | `<unknown>` |
| 21.3% |      13 | `PredictedCallGenerator::generate` | `<unknown>` |
|  3.3% |       2 | `GraphKit::subtype_check_receiver` | `<unknown>` |
|  1.6% |       1 | `TypePtr::speculative_maybe_null`  | `<unknown>` |
|  1.6% |       1 | `GraphKit::null_check_common`      | `<unknown>` |

##### `WorkerThread::run` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 65.5% |      38 | `G1EvacuateRegionsBaseTask::work` | `<unknown>` |
| 12.1% |       7 | `G1RebuildRSAndScrubTask::work`   | `<unknown>` |
| 10.3% |       6 | `G1CMConcurrentMarkingTask::work` | `<unknown>` |
|  8.6% |       5 | `G1ParallelCleaningTask::work`    | `<unknown>` |
|  3.4% |       2 | `G1CMRootRegionScanTask::work`    | `<unknown>` |

##### `JVM_FillInStackTrace` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 97.7% |      42 | `java_lang_Throwable::fill_in_stack_trace` | `<unknown>` |
|  2.3% |       1 | `Chunk::next_chop`                         | `<unknown>` |

##### `Java_java_lang_Throwable_fillInStackTrace` (`<unknown>`)

|      % | Samples | Callee                 | Location    |
| -----: | ------: | ---------------------- | ----------- |
| 100.0% |      43 | `JVM_FillInStackTrace` | `<unknown>` |

##### `java_lang_Throwable::fill_in_stack_trace` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 97.6% |      41 | `java_lang_Throwable::fill_in_stack_trace` | `<unknown>` |
| 19.0% |       8 | `BacktraceBuilder::push`                   | `<unknown>` |
| 14.3% |       6 | `frame::sender_raw`                        | `<unknown>` |
|  9.5% |       4 | `frame::sender_for_compiled_frame`         | `<unknown>` |
|  9.5% |       4 | `frame::sender_for_interpreter_frame`      | `<unknown>` |

##### `G1EvacuateRegionsBaseTask::work` (`<unknown>`)

|     % | Samples | Callee                                         | Location    |
| ----: | ------: | ---------------------------------------------- | ----------- |
| 94.7% |      36 | `G1EvacuateRegionsTask::scan_roots`            | `<unknown>` |
|  5.3% |       2 | `G1EvacuateRegionsTask::evacuate_live_objects` | `<unknown>` |

##### `G1EvacuateRegionsTask::scan_roots` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 66.7% |      24 | `G1RemSet::scan_heap_roots`       | `<unknown>` |
| 33.3% |      12 | `G1RootProcessor::evacuate_roots` | `<unknown>` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

Common call stack: `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.7% |      28 | `PhaseChaitin::Split` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                  |
| 1.4% |      22 | `PhaseChaitin::build_ifg_physical` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                     |
| 1.0% |      16 | `PhaseChaitin::elide_copy` ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                |
| 0.9% |      15 | `PhaseLive::add_liveout` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                        |
| 0.8% |      13 | `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                   |
| 0.8% |      13 | `Arena::contains` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                    |
| 0.6% |      10 | `__psynch_cvwait` ← `PlatformMonitor::wait` ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                               |
| 0.6% |      10 | `PhaseIdealLoop::build_loop_early` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                      |
| 0.6% |      10 | `PhaseAggressiveCoalesce::insert_copies` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                               |
| 0.6% |      10 | `PhaseOutput::BuildOopMaps` ← `PhaseOutput::Output` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                        |
| 0.6% |       9 | `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                             |
| 0.6% |       9 | `PhaseIdealLoop::build_loop_late_post_work` ← `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                     |
| 0.6% |       9 | `PhaseChaitin::gather_lrg_masks` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                       |
| 0.6% |       9 | `G1ParScanThreadState::trim_queue_to_threshold` ← `G1ScanHRForRegionClosure::scan_memregion` ← `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` ← `G1ScanHRForRegionClosure::scan_heap_roots` ← `G1ScanHRForRegionClosure::do_heap_region` ← `G1RemSet::scan_heap_roots` ← `G1EvacuateRegionsTask::scan_roots` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run`                                                     |
| 0.6% |       9 | `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                |
| 0.5% |       8 | `PhaseIdealLoop::build_loop_early` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                  |
| 0.4% |       7 | `LinearScanWalker::free_collect_inactive_fixed` ← `LinearScanWalker::alloc_free_reg` ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                   |
| 0.4% |       6 | `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                            |
| 0.3% |       5 | `G1ParScanThreadState::do_copy_to_survivor_space` ← `G1ParScanThreadState::trim_queue_to_threshold` ← `G1ScanHRForRegionClosure::scan_memregion` ← `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` ← `G1ScanHRForRegionClosure::scan_heap_roots` ← `G1ScanHRForRegionClosure::do_heap_region` ← `G1RemSet::scan_heap_roots` ← `G1EvacuateRegionsTask::scan_roots` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` |
| 0.3% |       5 | `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                        |
