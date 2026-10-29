# Sampling profile

Collected 1,563 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Compiler         | 53.5% |     836 |
| Native           | 27.8% |     435 |
| Standard library | 17.5% |     273 |
| JIT              |  0.6% |      10 |
| Ours             |  0.6% |       9 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 1,102 samples (70.5%) Thread::call_run
│   ├── 1,056 samples (67.6%) JavaThread::thread_main_inner
│   │   └── 1,055 samples (67.5%) CompileBroker::compiler_thread_loop
│   │       ├── 1,037 samples (66.3%) CompileBroker::invoke_compiler_on_method
│   │       │   ├── 878 samples (56.2%) C2Compiler::compile_method
│   │       │   │   └── 877 samples (56.1%) Compile::Compile
│   │       │   │       ├── 419 samples (26.8%) Compile::Code_Gen
│   │       │   │       │   ├── 224 samples (14.3%) PhaseChaitin::Register_Allocate
│   │       │   │       │   │   ├── 46 samples (2.9%, self 2.0%) PhaseChaitin::Split
│   │       │   │       │   │   │   └── 15 samples (1.0%) 10 more callees, led by (0.3%) MachNode::rematerialize
│   │       │   │       │   │   ├── 42 samples (2.7%, self 1.3%) PhaseChaitin::build_ifg_physical
│   │       │   │       │   │   │   └── 22 samples (1.4%) 8 more callees, led by (0.3%) PhaseChaitin::compute_initial_block_pressure
│   │       │   │       │   │   ├── 27 samples (1.7%, self 0.7%) PhaseLive::compute
│   │       │   │       │   │   │   ├── 11 samples (0.7%) PhaseLive::add_liveout
│   │       │   │       │   │   │   └── 2 samples (0.1%, self 1.2% globally) tlv_get_addr
│   │       │   │       │   │   └── 109 samples (7.0%) 21 more callees, led by (1.7%) PhaseChaitin::post_allocate_copy_removal
│   │       │   │       │   ├── 65 samples (4.2%) Matcher::match
│   │       │   │       │   │   ├── 38 samples (2.4%, self 0.6%) Matcher::xform
│   │       │   │       │   │   │   ├── 17 samples (1.1%) Matcher::match_tree
│   │       │   │       │   │   │   │   └── 10 samples (0.6%) Matcher::Label_Root
│   │       │   │       │   │   │   │       ├── … 3 samples (0.2%) State::DFA
│   │       │   │       │   │   │   │       └── 2 samples (0.1%, self 1.0% globally) _platform_memset
│   │       │   │       │   │   │   └── 7 samples (0.4%) Arena::contains
│   │       │   │       │   │   └── 27 samples (1.7%) 8 more callees, led by (0.9%) Matcher::find_shared
│   │       │   │       │   └── 130 samples (8.3%) 6 more callees, led by (4.4%) PhaseOutput::Output
│   │       │   │       ├── 337 samples (21.6%) Compile::Optimize
│   │       │   │       │   └── 337 samples (21.6%) 18 more callees, led by (6.1%) PhaseIdealLoop::optimize
│   │       │   │       └── 121 samples (7.7%) 5 more callees, led by (6.5%) ParseGenerator::generate
│   │       │   └── 159 samples (10.2%) 4 more callees, led by (9.9%) Compiler::compile_method
│   │       └── … 17 samples (1.1%) PlatformMonitor::wait
│   │           ├── 10 samples (0.6%) __psynch_cvwait
│   │           └── … 5 samples (0.3%, self 1.0% globally) __psynch_mutexwait
│   └── 46 samples (2.9%) 4 more callees, led by (2.5%) WorkerThread::run
├── 432 samples (27.6%) main at org.codenarc.CodeNarc
│   └── 431 samples (27.6%) linkToCallSite at java.lang.invoke.Invokers$Holder
│       ├── … 91 samples (5.8%) invoke at java.lang.invoke.LambdaForm$MH.0x00000070010d8800
│       │   ├── 89 samples (5.7%) invokeStatic at java.lang.invoke.LambdaForm$DMH.0x0000007001088800 …
│       │   └── … 2 samples (0.1%, self 1.4% globally) pthread_jit_write_protect_np
│       └── 339 samples (21.7%) 8 more callees, led by (14.1%) invoke at java.lang.invoke.LambdaForm$MH.0x00000070010a1800
└── 28 samples (1.8%) 9 more root frames, led by (0.8%) <clinit> at org.codenarc.CodeNarc
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|    % | Samples | Function                                    | Location          |
| ---: | ------: | ------------------------------------------- | ----------------- |
| 2.0% |      31 | `PhaseChaitin::Split`                       | `<unknown>`       |
| 1.4% |      22 | `pthread_jit_write_protect_np`              | `<unknown>`       |
| 1.3% |      20 | `PhaseChaitin::build_ifg_physical`          | `<unknown>`       |
| 1.2% |      18 | `tlv_get_addr`                              | `<unknown>`       |
| 1.0% |      16 | `_platform_memset`                          | `<unknown>`       |
| 1.0% |      16 | `__psynch_mutexwait`                        | `<unknown>`       |
| 1.0% |      15 | `IndexSetIterator::advance_and_next`        | `<unknown>`       |
| 1.0% |      15 | `Node::dominates`                           | `<unknown>`       |
| 0.9% |      14 | `__psynch_cvwait`                           | `<unknown>`       |
| 0.9% |      14 | `PhaseIdealLoop::build_loop_early`          | `<unknown>`       |
| 0.8% |      13 | `PhaseChaitin::elide_copy`                  | `<unknown>`       |
| 0.8% |      12 | `java_lang_Throwable::fill_in_stack_trace`  | `<unknown>`       |
| 0.8% |      12 | `cast`                                      | `java.lang.Class` |
| 0.8% |      12 | `PhaseChaitin::gather_lrg_masks`            | `<unknown>`       |
| 0.8% |      12 | `PhaseChaitin::post_allocate_copy_removal`  | `<unknown>`       |
| 0.8% |      12 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>`       |
| 0.7% |      11 | `PhaseLive::compute`                        | `<unknown>`       |
| 0.7% |      11 | `Unique_Node_List::remove`                  | `<unknown>`       |
| 0.6% |      10 | `Compile::identify_useful_nodes`            | `<unknown>`       |
| 0.6% |      10 | `InstanceKlass::find_method_index`          | `<unknown>`       |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|    % | Samples | Function                                    | Location    |
| ---: | ------: | ------------------------------------------- | ----------- |
| 2.0% |      31 | `PhaseChaitin::Split`                       | `<unknown>` |
| 1.3% |      20 | `PhaseChaitin::build_ifg_physical`          | `<unknown>` |
| 1.0% |      15 | `IndexSetIterator::advance_and_next`        | `<unknown>` |
| 1.0% |      15 | `Node::dominates`                           | `<unknown>` |
| 0.9% |      14 | `PhaseIdealLoop::build_loop_early`          | `<unknown>` |
| 0.8% |      13 | `PhaseChaitin::elide_copy`                  | `<unknown>` |
| 0.8% |      12 | `PhaseChaitin::gather_lrg_masks`            | `<unknown>` |
| 0.8% |      12 | `PhaseChaitin::post_allocate_copy_removal`  | `<unknown>` |
| 0.8% |      12 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |
| 0.7% |      11 | `PhaseLive::compute`                        | `<unknown>` |
| 0.7% |      11 | `Unique_Node_List::remove`                  | `<unknown>` |
| 0.6% |      10 | `Compile::identify_useful_nodes`            | `<unknown>` |
| 0.6% |       9 | `Matcher::xform`                            | `<unknown>` |
| 0.6% |       9 | `ciObjectFactory::get_metadata`             | `<unknown>` |
| 0.6% |       9 | `PhaseIdealLoop::Dominators`                | `<unknown>` |
| 0.6% |       9 | `IntervalWalker::walk_to`                   | `<unknown>` |
| 0.6% |       9 | `NodeHash::hash_find_insert`                | `<unknown>` |
| 0.6% |       9 | `PhaseAggressiveCoalesce::insert_copies`    | `<unknown>` |
| 0.5% |       8 | `PhaseIdealLoop::build_loop_late`           | `<unknown>` |
| 0.5% |       8 | `PhaseOutput::BuildOopMaps`                 | `<unknown>` |

##### Native

|    % | Samples | Function                                                                                                                                                 | Location    |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 1.4% |      22 | `pthread_jit_write_protect_np`                                                                                                                           | `<unknown>` |
| 1.2% |      18 | `tlv_get_addr`                                                                                                                                           | `<unknown>` |
| 1.0% |      16 | `_platform_memset`                                                                                                                                       | `<unknown>` |
| 1.0% |      16 | `__psynch_mutexwait`                                                                                                                                     | `<unknown>` |
| 0.9% |      14 | `__psynch_cvwait`                                                                                                                                        | `<unknown>` |
| 0.8% |      12 | `java_lang_Throwable::fill_in_stack_trace`                                                                                                               | `<unknown>` |
| 0.6% |      10 | `InstanceKlass::find_method_index`                                                                                                                       | `<unknown>` |
| 0.6% |       9 | `vmSymbols::find_sid`                                                                                                                                    | `<unknown>` |
| 0.6% |       9 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `<unknown>` |
| 0.4% |       7 | `_platform_memmove`                                                                                                                                      | `<unknown>` |
| 0.4% |       7 | `SignatureStream::next`                                                                                                                                  | `<unknown>` |
| 0.4% |       7 | `Arena::contains`                                                                                                                                        | `<unknown>` |
| 0.4% |       6 | `sys_icache_invalidate`                                                                                                                                  | `<unknown>` |
| 0.3% |       5 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `<unknown>` |
| 0.3% |       5 | `frame::sender_for_compiled_frame`                                                                                                                       | `<unknown>` |
| 0.3% |       4 | `SymbolTable::do_lookup`                                                                                                                                 | `<unknown>` |
| 0.3% |       4 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>`                             | `<unknown>` |
| 0.3% |       4 | `_platform_memcmp`                                                                                                                                       | `<unknown>` |
| 0.3% |       4 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                   | `<unknown>` |
| 0.3% |       4 | `frame::sender_raw`                                                                                                                                      | `<unknown>` |

##### Standard library

|    % | Samples | Function             | Location                                               |
| ---: | ------: | -------------------- | ------------------------------------------------------ |
| 0.8% |      12 | `cast`               | `java.lang.Class`                                      |
| 0.4% |       6 | `collector`          | `java.lang.invoke.LambdaForm$MH.0x00000070010a1000`    |
| 0.3% |       5 | `newInstance`        | `java.lang.reflect.Array`                              |
| 0.3% |       4 | `getNode`            | `java.util.HashMap`                                    |
| 0.3% |       4 | `equals`             | `java.util.Objects`                                    |
| 0.3% |       4 | `invokeBasic`        | `java.lang.invoke.MethodHandle`                        |
| 0.3% |       4 | `closure`            | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| 0.2% |       3 | `invokeSpecial`      | `java.lang.invoke.DirectMethodHandle$Holder`           |
| 0.2% |       3 | `<init>`             | `java.lang.invoke.MethodHandle`                        |
| 0.2% |       3 | `invoke`             | `java.lang.invoke.LambdaForm$MH.0x000000700102ac00`    |
| 0.2% |       3 | `collector`          | `java.lang.invoke.LambdaForm$MH.0x0000007001031800`    |
| 0.2% |       3 | `internalMemberName` | `java.lang.invoke.DirectMethodHandle`                  |
| 0.2% |       3 | `putVal`             | `java.util.HashMap`                                    |
| 0.1% |       2 | `invokeStatic`       | `java.lang.invoke.DirectMethodHandle$Holder`           |
| 0.1% |       2 | `invokeVirtual`      | `java.lang.invoke.DirectMethodHandle$Holder`           |
| 0.1% |       2 | `invoke`             | `java.lang.invoke.LambdaForm$MH.0x00000070010abc00`    |
| 0.1% |       2 | `guard`              | `java.lang.invoke.LambdaForm$MH.0x000000700109a000`    |
| 0.1% |       2 | `invoke`             | `java.lang.invoke.LambdaForm$MH.0x000000700109bc00`    |
| 0.1% |       2 | `forEachRemaining`   | `java.util.Spliterators$ArraySpliterator`              |
| 0.1% |       2 | `visitContents`      | `org.codehaus.groovy.ast.ClassNode`                    |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `PhaseChaitin::Split` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      31 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|     % | Samples | Caller                    | Location           |
| ----: | ------: | ------------------------- | ------------------ |
| 31.8% |       7 | `JVM_NewArray`            | `<unknown>`        |
|  9.1% |       2 | `InterpreterRuntime::ldc` | `<unknown>`        |
|  9.1% |       2 | `JVM_Clone`               | `<unknown>`        |
|  4.5% |       1 | `jni_GetArrayLength`      | `<unknown>`        |
|  4.5% |       1 | `arraycopy`               | `java.lang.System` |

##### `PhaseChaitin::build_ifg_physical` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      20 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `tlv_get_addr` (`<unknown>`)

|     % | Samples | Caller                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 11.1% |       2 | `ResourceBitMap::ResourceBitMap` | `<unknown>` |
| 11.1% |       2 | `PhaseLive::compute`             | `<unknown>` |
| 11.1% |       2 | `GraphBuilder::invoke`           | `<unknown>` |
| 11.1% |       2 | `PhaseCFG::schedule_late`        | `<unknown>` |
|  5.6% |       1 | `PhaseLive::add_liveout`         | `<unknown>` |

##### `_platform_memset` (`<unknown>`)

|     % | Samples | Caller                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 12.5% |       2 | `Matcher::Label_Root`            | `<unknown>` |
| 12.5% |       2 | `Matcher::match_tree`            | `<unknown>` |
| 12.5% |       2 | `PhaseOutput::Output`            | `<unknown>` |
|  6.3% |       1 | `Matcher::xform`                 | `<unknown>` |
|  6.3% |       1 | `Compile::identify_useful_nodes` | `<unknown>` |

##### `__psynch_mutexwait` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      16 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `IndexSetIterator::advance_and_next` (`<unknown>`)

|     % | Samples | Caller                                                             | Location    |
| ----: | ------: | ------------------------------------------------------------------ | ----------- |
| 26.7% |       4 | `PhaseChaitin::build_ifg_physical`                                 | `<unknown>` |
| 20.0% |       3 | `PhaseLive::add_liveout`                                           | `<unknown>` |
| 13.3% |       2 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `<unknown>` |
| 13.3% |       2 | `PhaseIFG::re_insert`                                              | `<unknown>` |
| 13.3% |       2 | `PhaseIFG::SquareUp`                                               | `<unknown>` |

##### `Node::dominates` (`<unknown>`)

|      % | Samples | Caller                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |      15 | `MemNode::all_controls_dominate` | `<unknown>` |

##### `__psynch_cvwait` (`<unknown>`)

|      % | Samples | Caller                  | Location    |
| -----: | ------: | ----------------------- | ----------- |
| 100.0% |      14 | `PlatformMonitor::wait` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_early` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |      14 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `PhaseChaitin::elide_copy` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |      13 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |

##### `java_lang_Throwable::fill_in_stack_trace` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |      12 | `java_lang_Throwable::fill_in_stack_trace` | `<unknown>` |

##### `cast` (`java.lang.Class`)

|      % | Samples | Caller          | Location                                     |
| -----: | ------: | --------------- | -------------------------------------------- |
| 100.0% |      12 | `invokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `PhaseChaitin::gather_lrg_masks` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      12 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseChaitin::post_allocate_copy_removal` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      12 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      12 | `PhaseIdealLoop::build_loop_late` | `<unknown>` |

##### `PhaseLive::compute` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      11 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `Unique_Node_List::remove` (`<unknown>`)

|      % | Samples | Caller                                    | Location    |
| -----: | ------: | ----------------------------------------- | ----------- |
| 100.0% |      11 | `PhaseIterGVN::remove_globally_dead_node` | `<unknown>` |

##### `Compile::identify_useful_nodes` (`<unknown>`)

|     % | Samples | Caller                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 60.0% |       6 | `PhaseRemoveUseless::PhaseRemoveUseless`      | `<unknown>` |
| 40.0% |       4 | `Matcher::specialize_generic_vector_operands` | `<unknown>` |

##### `InstanceKlass::find_method_index` (`<unknown>`)

|     % | Samples | Caller                                  | Location    |
| ----: | ------: | --------------------------------------- | ----------- |
| 80.0% |       8 | `InstanceKlass::uncached_lookup_method` | `<unknown>` |
| 20.0% |       2 | `InstanceKlass::find_method`            | `<unknown>` |

##### `Matcher::xform` (`<unknown>`)

|      % | Samples | Caller           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |       9 | `Matcher::match` | `<unknown>` |

##### `ciObjectFactory::get_metadata` (`<unknown>`)

|     % | Samples | Caller                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 33.3% |       3 | `ciBytecodeStream::get_method`                     | `<unknown>` |
| 33.3% |       3 | `ciEnv::get_klass_by_index_impl`                   | `<unknown>` |
| 11.1% |       1 | `ciReceiverTypeData::translate_receiver_data_from` | `<unknown>` |
| 11.1% |       1 | `ciEnv::get_klass_by_name_impl`                    | `<unknown>` |
| 11.1% |       1 | `ciObjArrayKlass::make`                            | `<unknown>` |

##### `PhaseIdealLoop::Dominators` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       9 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `IntervalWalker::walk_to` (`<unknown>`)

|     % | Samples | Caller                        | Location    |
| ----: | ------: | ----------------------------- | ----------- |
| 88.9% |       8 | `IntervalWalker::walk_to`     | `<unknown>` |
| 11.1% |       1 | `LinearScan::compute_oop_map` | `<unknown>` |

##### `NodeHash::hash_find_insert` (`<unknown>`)

|     % | Samples | Caller                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 55.6% |       5 | `PhaseIterGVN::transform_old`    | `<unknown>` |
| 44.4% |       4 | `PhaseGVN::transform_no_reclaim` | `<unknown>` |

##### `PhaseAggressiveCoalesce::insert_copies` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       9 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `vmSymbols::find_sid` (`<unknown>`)

|     % | Samples | Caller                                         | Location    |
| ----: | ------: | ---------------------------------------------- | ----------- |
| 88.9% |       8 | `ciObjectFactory::get_symbol`                  | `<unknown>` |
| 11.1% |       1 | `MethodHandles::signature_polymorphic_name_id` | `<unknown>` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`<unknown>`)

|     % | Samples | Caller                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 77.8% |       7 | `DebugInformationRecorder::describe_scope`         | `<unknown>` |
| 22.2% |       2 | `DebugInformationRecorder::serialize_scope_values` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       8 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `PhaseOutput::BuildOopMaps` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |       8 | `PhaseOutput::Output` | `<unknown>` |

##### `_platform_memmove` (`<unknown>`)

|     % | Samples | Caller                                       | Location    |
| ----: | ------: | -------------------------------------------- | ----------- |
| 14.3% |       1 | `Type_Array::grow`                           | `<unknown>` |
| 14.3% |       1 | `MethodHandles::lookup_basic_type_signature` | `<unknown>` |
| 14.3% |       1 | `__vfprintf`                                 | `<unknown>` |
| 14.3% |       1 | `nmethod::nmethod`                           | `<unknown>` |
| 14.3% |       1 | `outputStream::print`                        | `<unknown>` |

##### `SignatureStream::next` (`<unknown>`)

|     % | Samples | Caller                                                             | Location    |
| ----: | ------: | ------------------------------------------------------------------ | ----------- |
| 28.6% |       2 | `ciSignature::ciSignature`                                         | `<unknown>` |
| 28.6% |       2 | `SignatureStream::SignatureStream`                                 | `<unknown>` |
| 14.3% |       1 | `StackMapFrame::set_locals_from_arg`                               | `<unknown>` |
| 14.3% |       1 | `void SignatureIterator::do_parameters_on<ArgumentOffsetComputer>` | `<unknown>` |
| 14.3% |       1 | `void SignatureIterator::do_parameters_on<ReferenceArgumentCount>` | `<unknown>` |

##### `Arena::contains` (`<unknown>`)

|      % | Samples | Caller           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |       7 | `Matcher::xform` | `<unknown>` |

##### `sys_icache_invalidate` (`<unknown>`)

|     % | Samples | Caller                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 33.3% |       2 | `nmethod::nmethod`               | `<unknown>` |
| 33.3% |       2 | `nmethod::oops_do_process_weak`  | `<unknown>` |
| 16.7% |       1 | `CompiledIC::set_to_monomorphic` | `<unknown>` |
| 16.7% |       1 | `CodeBuffer::copy_code_to`       | `<unknown>` |

##### `collector` (`java.lang.invoke.LambdaForm$MH.0x00000070010a1000`)

|     % | Samples | Caller   | Location                                            |
| ----: | ------: | -------- | --------------------------------------------------- |
| 50.0% |       3 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010ab000` |
| 33.3% |       2 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800` |
| 16.7% |       1 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010cc000` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |       5 | `G1ParScanThreadState::trim_queue_to_threshold` | `<unknown>` |

##### `frame::sender_for_compiled_frame` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |       5 | `java_lang_Throwable::fill_in_stack_trace` | `<unknown>` |

##### `newInstance` (`java.lang.reflect.Array`)

|      % | Samples | Caller         | Location                                             |
| -----: | ------: | -------------- | ---------------------------------------------------- |
| 100.0% |       5 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x000000700102b400` |

##### `SymbolTable::do_lookup` (`<unknown>`)

|     % | Samples | Caller                                         | Location    |
| ----: | ------: | ---------------------------------------------- | ----------- |
| 50.0% |       2 | `SymbolTable::new_symbol`                      | `<unknown>` |
| 25.0% |       1 | `SymbolTable::lookup_only`                     | `<unknown>` |
| 25.0% |       1 | `ClassFileParser::parse_constant_pool_entries` | `<unknown>` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`<unknown>`)

|      % | Samples | Caller                                            | Location    |
| -----: | ------: | ------------------------------------------------- | ----------- |
| 100.0% |       4 | `G1ParScanThreadState::do_copy_to_survivor_space` | `<unknown>` |

##### `_platform_memcmp` (`<unknown>`)

|     % | Samples | Caller                     | Location    |
| ----: | ------: | -------------------------- | ----------- |
| 50.0% |       2 | `SymbolTable::lookup_only` | `<unknown>` |
| 50.0% |       2 | `SymbolTable::new_symbol`  | `<unknown>` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`<unknown>`)

|      % | Samples | Caller                                                                   | Location    |
| -----: | ------: | ------------------------------------------------------------------------ | ----------- |
| 100.0% |       4 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` | `<unknown>` |

##### `frame::sender_raw` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |       4 | `java_lang_Throwable::fill_in_stack_trace` | `<unknown>` |

##### `getNode` (`java.util.HashMap`)

|     % | Samples | Caller        | Location                  |
| ----: | ------: | ------------- | ------------------------- |
| 75.0% |       3 | `get`         | `java.util.LinkedHashMap` |
| 25.0% |       1 | `containsKey` | `java.util.HashMap`       |

##### `equals` (`java.util.Objects`)

|      % | Samples | Caller   | Location                               |
| -----: | ------: | -------- | -------------------------------------- |
| 100.0% |       4 | `equals` | `jdk.internal.util.StrongReferenceKey` |

##### `invokeBasic` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Caller          | Location                                            |
| ----: | ------: | --------------- | --------------------------------------------------- |
| 25.0% |       1 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000700109b800` |
| 25.0% |       1 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000700102ac00` |
| 25.0% |       1 | `invokeVirtual` | `java.lang.invoke.DirectMethodHandle$Holder`        |
| 25.0% |       1 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x0000007001089400` |

##### `closure` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       4 | `closure` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `invokeSpecial` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Caller   | Location                                            |
| ----: | ------: | -------- | --------------------------------------------------- |
| 66.7% |       2 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000700102ac00` |
| 33.3% |       1 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000700162fc00` |

##### `<init>` (`java.lang.invoke.MethodHandle`)

|      % | Samples | Caller   | Location                             |
| -----: | ------: | -------- | ------------------------------------ |
| 100.0% |       3 | `<init>` | `java.lang.invoke.BoundMethodHandle` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x000000700102ac00`)

|     % | Samples | Caller   | Location                                            |
| ----: | ------: | -------- | --------------------------------------------------- |
| 33.3% |       1 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x0000007001031400` |
| 33.3% |       1 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000700102b000` |
| 33.3% |       1 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x0000007001104c00` |

##### `collector` (`java.lang.invoke.LambdaForm$MH.0x0000007001031800`)

|     % | Samples | Caller   | Location                                            |
| ----: | ------: | -------- | --------------------------------------------------- |
| 66.7% |       2 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000700109b800` |
| 33.3% |       1 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000700108e000` |

##### `internalMemberName` (`java.lang.invoke.DirectMethodHandle`)

|     % | Samples | Caller          | Location                                             |
| ----: | ------: | --------------- | ---------------------------------------------------- |
| 33.3% |       1 | `invokeSpecial` | `java.lang.invoke.LambdaForm$DMH.0x0000007001030400` |
| 33.3% |       1 | `invokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 33.3% |       1 | `invokeVirtual` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `putVal` (`java.util.HashMap`)

|      % | Samples | Caller | Location            |
| -----: | ------: | ------ | ------------------- |
| 100.0% |       3 | `put`  | `java.util.HashMap` |

##### `invokeStatic` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Caller   | Location                                            |
| ----: | ------: | -------- | --------------------------------------------------- |
| 50.0% |       1 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x0000007001104000` |
| 50.0% |       1 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010ab000` |

##### `invokeVirtual` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Caller   | Location                                            |
| -----: | ------: | -------- | --------------------------------------------------- |
| 100.0% |       2 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x0000007001089400` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010abc00`)

|      % | Samples | Caller           | Location                           |
| -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% |       2 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder` |

##### `guard` (`java.lang.invoke.LambdaForm$MH.0x000000700109a000`)

|      % | Samples | Caller           | Location                           |
| -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% |       2 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x000000700109bc00`)

|      % | Samples | Caller           | Location                           |
| -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% |       2 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder` |

##### `forEachRemaining` (`java.util.Spliterators$ArraySpliterator`)

|      % | Samples | Caller     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |       2 | `copyInto` | `java.util.stream.AbstractPipeline` |

##### `visitContents` (`org.codehaus.groovy.ast.ClassNode`)

|      % | Samples | Caller       | Location                                          |
| -----: | ------: | ------------ | ------------------------------------------------- |
| 100.0% |       2 | `visitClass` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                   | Location                                             |
| ----: | ------: | ------------------------------------------ | ---------------------------------------------------- |
| 70.6% |   1,103 | `_pthread_start`                           | `<unknown>`                                          |
| 70.6% |   1,103 | `thread_start`                             | `<unknown>`                                          |
| 70.5% |   1,102 | `Thread::call_run`                         | `<unknown>`                                          |
| 70.5% |   1,102 | `thread_native_entry`                      | `<unknown>`                                          |
| 67.6% |   1,056 | `JavaThread::thread_main_inner`            | `<unknown>`                                          |
| 67.5% |   1,055 | `CompileBroker::compiler_thread_loop`      | `<unknown>`                                          |
| 66.3% |   1,037 | `CompileBroker::invoke_compiler_on_method` | `<unknown>`                                          |
| 56.2% |     878 | `C2Compiler::compile_method`               | `<unknown>`                                          |
| 56.1% |     877 | `Compile::Compile`                         | `<unknown>`                                          |
| 27.6% |     432 | `invokeExact_MT`                           | `java.lang.invoke.Invokers$Holder`                   |
| 27.6% |     432 | `fromCache`                                | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| 27.6% |     432 | `main`                                     | `org.codenarc.CodeNarc`                              |
| 27.6% |     431 | `linkToCallSite`                           | `java.lang.invoke.Invokers$Holder`                   |
| 27.5% |     430 | `invokeStatic`                             | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| 27.4% |     429 | `invoke`                                   | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800`  |
| 27.4% |     428 | `guardWithCatch`                           | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000`  |
| 27.4% |     428 | `reinvoke`                                 | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800`  |
| 27.4% |     428 | `guard`                                    | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00`  |
| 27.1% |     423 | `invokeVirtual`                            | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |
| 26.9% |     421 | `invoke`                                   | `java.lang.invoke.LambdaForm$MH.0x00000070010a9800`  |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|     % | Samples | Function                                   | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 67.5% |   1,055 | `CompileBroker::compiler_thread_loop`      | `<unknown>` |
| 66.3% |   1,037 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
| 56.2% |     878 | `C2Compiler::compile_method`               | `<unknown>` |
| 56.1% |     877 | `Compile::Compile`                         | `<unknown>` |
| 26.8% |     419 | `Compile::Code_Gen`                        | `<unknown>` |
| 21.6% |     337 | `Compile::Optimize`                        | `<unknown>` |
| 14.3% |     224 | `PhaseChaitin::Register_Allocate`          | `<unknown>` |
| 11.6% |     182 | `PhaseIdealLoop::optimize`                 | `<unknown>` |
|  9.9% |     154 | `Compilation::compile_method`              | `<unknown>` |
|  9.9% |     154 | `Compilation::Compilation`                 | `<unknown>` |
|  9.8% |     153 | `PhaseIdealLoop::build_and_optimize`       | `<unknown>` |
|  9.8% |     153 | `PhaseIdealLoop::PhaseIdealLoop`           | `<unknown>` |
|  8.8% |     137 | `Compilation::compile_java_method`         | `<unknown>` |
|  6.7% |     105 | `PhaseIterGVN::optimize`                   | `<unknown>` |
|  6.3% |      99 | `PhaseIterGVN::transform_old`              | `<unknown>` |
|  5.5% |      86 | `Compile::optimize_loops`                  | `<unknown>` |
|  4.4% |      69 | `PhaseOutput::Output`                      | `<unknown>` |
|  4.2% |      65 | `Matcher::match`                           | `<unknown>` |
|  3.9% |      61 | `Compilation::emit_lir`                    | `<unknown>` |
|  3.4% |      53 | `Compilation::build_hir`                   | `<unknown>` |

##### Native

|     % | Samples | Function                                    | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 70.6% |   1,103 | `_pthread_start`                            | `<unknown>` |
| 70.6% |   1,103 | `thread_start`                              | `<unknown>` |
| 70.5% |   1,102 | `Thread::call_run`                          | `<unknown>` |
| 70.5% |   1,102 | `thread_native_entry`                       | `<unknown>` |
| 67.6% |   1,056 | `JavaThread::thread_main_inner`             | `<unknown>` |
|  9.9% |     154 | `Compiler::compile_method`                  | `<unknown>` |
|  6.5% |     102 | `Parse::Parse`                              | `<unknown>` |
|  6.5% |     102 | `ParseGenerator::generate`                  | `<unknown>` |
|  6.3% |      98 | `Parse::do_one_block`                       | `<unknown>` |
|  6.3% |      98 | `Parse::do_all_blocks`                      | `<unknown>` |
|  5.9% |      92 | `Parse::do_call`                            | `<unknown>` |
|  4.0% |      62 | `PredictedCallGenerator::generate`          | `<unknown>` |
|  2.7% |      42 | `IRScope::IRScope`                          | `<unknown>` |
|  2.7% |      42 | `IR::IR`                                    | `<unknown>` |
|  2.6% |      41 | `JVM_FillInStackTrace`                      | `<unknown>` |
|  2.6% |      41 | `Java_java_lang_Throwable_fillInStackTrace` | `<unknown>` |
|  2.6% |      40 | `java_lang_Throwable::fill_in_stack_trace`  | `<unknown>` |
|  2.5% |      39 | `WorkerThread::run`                         | `<unknown>` |
|  1.6% |      25 | `InlineTree::ok_to_inline`                  | `<unknown>` |
|  1.4% |      22 | `pthread_jit_write_protect_np`              | `<unknown>` |

##### Standard library

|     % | Samples | Function         | Location                                             |
| ----: | ------: | ---------------- | ---------------------------------------------------- |
| 27.6% |     432 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder`                   |
| 27.6% |     432 | `fromCache`      | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| 27.6% |     431 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder`                   |
| 27.5% |     430 | `invokeStatic`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| 27.4% |     429 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800`  |
| 27.4% |     428 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000`  |
| 27.4% |     428 | `reinvoke`       | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800`  |
| 27.4% |     428 | `guard`          | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00`  |
| 27.1% |     423 | `invokeVirtual`  | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |
| 26.9% |     421 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010a9800`  |
| 26.8% |     419 | `invokeVirtual`  | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 26.8% |     419 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010c7000`  |
| 26.8% |     419 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010c6400`  |
| 26.7% |     417 | `invokeSpecial`  | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 26.6% |     415 | `invokeMethod`   | `groovy.lang.MetaClassImpl`                          |
| 26.6% |     415 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000700108e000`  |
| 26.5% |     414 | `invokeImpl`     | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| 26.5% |     414 | `invoke`         | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| 26.5% |     414 | `invoke`         | `java.lang.reflect.Method`                           |
| 26.5% |     414 | `invoke`         | `org.codehaus.groovy.reflection.CachedMethod`        |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`<unknown>`)

|      % | Samples | Caller         | Location    |
| -----: | ------: | -------------- | ----------- |
| 100.0% |   1,103 | `thread_start` | `<unknown>` |

##### `Thread::call_run` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |   1,102 | `thread_native_entry` | `<unknown>` |

##### `thread_native_entry` (`<unknown>`)

|      % | Samples | Caller           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |   1,102 | `_pthread_start` | `<unknown>` |

##### `JavaThread::thread_main_inner` (`<unknown>`)

|      % | Samples | Caller             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |   1,056 | `Thread::call_run` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop` (`<unknown>`)

|      % | Samples | Caller                          | Location    |
| -----: | ------: | ------------------------------- | ----------- |
| 100.0% |   1,055 | `JavaThread::thread_main_inner` | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method` (`<unknown>`)

|      % | Samples | Caller                                | Location    |
| -----: | ------: | ------------------------------------- | ----------- |
| 100.0% |   1,037 | `CompileBroker::compiler_thread_loop` | `<unknown>` |

##### `C2Compiler::compile_method` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |     878 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |

##### `Compile::Compile` (`<unknown>`)

|      % | Samples | Caller                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |     877 | `C2Compiler::compile_method` | `<unknown>` |

##### `invokeExact_MT` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Caller         | Location                                               |
| ----: | ------: | -------------- | ------------------------------------------------------ |
| 99.8% |     431 | `fromCache`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface`        |
| 95.8% |     414 | `invokeImpl`   | `jdk.internal.reflect.DirectMethodHandleAccessor`      |
| 71.1% |     307 | `selectMethod` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`        |
|  5.8% |      25 | `invokeImpl`   | `jdk.internal.reflect.DirectConstructorHandleAccessor` |
|  0.5% |       2 | `invoke`       | `java.lang.invoke.BootstrapMethodInvoker`              |

##### `fromCache` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|     % | Samples | Caller             | Location                                             |
| ----: | ------: | ------------------ | ---------------------------------------------------- |
| 99.5% |     430 | `invokeStatic`     | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|  0.5% |       2 | `invokeStaticInit` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088c00` |
|  0.2% |       1 | `[unknown]`        | `<unknown>`                                          |

##### `linkToCallSite` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller    | Location                                                                    |
| -----: | ------: | --------- | --------------------------------------------------------------------------- |
| 100.0% |     431 | `main`    | `org.codenarc.CodeNarc`                                                     |
|  96.5% |     416 | `execute` | `org.codenarc.CodeNarc`                                                     |
|  95.4% |     411 | `execute` | `org.codenarc.CodeNarcRunner`                                               |
|  80.5% |     347 | `analyze` | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  80.3% |     346 | `doCall`  | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |

##### `invokeStatic` (`java.lang.invoke.LambdaForm$DMH.0x0000007001088800`)

|     % | Samples | Caller   | Location                                            |
| ----: | ------: | -------- | --------------------------------------------------- |
| 99.8% |     429 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800` |
| 96.3% |     414 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000700108e000` |
| 83.0% |     357 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010d8800` |
| 80.9% |     348 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x0000007001288400` |
| 56.5% |     243 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000700138c000` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010a1800`)

|      % | Samples | Caller           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |     429 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder`                  |
|   7.7% |      33 | `reinvoke`       | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |

##### `guardWithCatch` (`java.lang.invoke.LambdaForm$MH.0x00000070010aa000`)

|      % | Samples | Caller     | Location                                            |
| -----: | ------: | ---------- | --------------------------------------------------- |
| 100.0% |     428 | `reinvoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|  87.1% |     373 | `delegate` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `reinvoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010aa800`)

|      % | Samples | Caller   | Location                                            |
| -----: | ------: | -------- | --------------------------------------------------- |
| 100.0% |     428 | `guard`  | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00` |
|  97.9% |     419 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010c7000` |
|  94.4% |     404 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010d3800` |
|  52.6% |     225 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010abc00` |
|  15.9% |      68 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010dcc00` |

##### `guard` (`java.lang.invoke.LambdaForm$MH.0x00000070010aac00`)

|      % | Samples | Caller           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |     428 | `reinvoke`       | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|  87.1% |     373 | `delegate`       | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   0.2% |       1 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder`                  |

##### `invokeVirtual` (`java.lang.invoke.LambdaForm$DMH.0x0000007001094400`)

|     % | Samples | Caller           | Location                                            |
| ----: | ------: | ---------------- | --------------------------------------------------- |
| 99.5% |     421 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010a9800` |
| 79.0% |     334 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x00000070010d2c00` |
|  1.9% |       8 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010c9800` |
|  1.2% |       5 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070013d8800` |
|  0.9% |       4 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000007001292400` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010a9800`)

|      % | Samples | Caller           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |     421 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000` |

##### `Compile::Code_Gen` (`<unknown>`)

|      % | Samples | Caller             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |     419 | `Compile::Compile` | `<unknown>` |

##### `invokeVirtual` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Caller           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |     419 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010c6400` |
|  98.1% |     411 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000700102b000` |
|  11.5% |      48 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x0000007001098400` |
|   1.4% |       6 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010c7400` |
|   1.2% |       5 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010d3c00` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010c7000`)

|      % | Samples | Caller           | Location                           |
| -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% |     419 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010c6400`)

|      % | Samples | Caller           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |     419 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000` |
|   0.2% |       1 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder`                  |

##### `invokeSpecial` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Caller           | Location                                            |
| ----: | ------: | ---------------- | --------------------------------------------------- |
| 83.0% |     346 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x00000070010d2c00` |
| 82.3% |     343 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000007001297800` |
| 82.0% |     342 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000007001290c00` |
| 48.7% |     203 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000700149e400` |
| 42.9% |     179 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000007001383400` |

##### `invokeMethod` (`groovy.lang.MetaClassImpl`)

|     % | Samples | Caller            | Location                                                 |
| ----: | ------: | ----------------- | -------------------------------------------------------- |
| 99.5% |     413 | `call`            | `groovy.lang.Closure`                                    |
| 87.2% |     362 | `invokeInterface` | `java.lang.invoke.LambdaForm$DMH.0x0000007001095000`     |
| 16.6% |      69 | `call`            | `org.codehaus.groovy.runtime.callsite.PogoMetaClassSite` |
|  8.4% |      35 | `invokeMethod`    | `groovy.lang.MetaClassImpl`                              |
|  8.0% |      33 | `invokeMethod`    | `groovy.lang.DelegatingMetaClass`                        |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x000000700108e000`)

|      % | Samples | Caller           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |     415 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder`                  |
|   0.7% |       3 | `reinvoke`       | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00` |

##### `invokeImpl` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Caller   | Location                                          |
| -----: | ------: | -------- | ------------------------------------------------- |
| 100.0% |     414 | `invoke` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Caller   | Location                   |
| -----: | ------: | -------- | -------------------------- |
| 100.0% |     414 | `invoke` | `java.lang.reflect.Method` |

##### `invoke` (`java.lang.reflect.Method`)

|      % | Samples | Caller     | Location                                                         |
| -----: | ------: | ---------- | ---------------------------------------------------------------- |
| 100.0% |     414 | `invoke`   | `org.codehaus.groovy.reflection.CachedMethod`                    |
|   2.2% |       9 | `doInvoke` | `org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite` |

##### `invoke` (`org.codehaus.groovy.reflection.CachedMethod`)

|      % | Samples | Caller           | Location                 |
| -----: | ------: | ---------------- | ------------------------ |
| 100.0% |     414 | `doMethodInvoke` | `groovy.lang.MetaMethod` |

##### `Compile::Optimize` (`<unknown>`)

|      % | Samples | Caller             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |     337 | `Compile::Compile` | `<unknown>` |

##### `PhaseChaitin::Register_Allocate` (`<unknown>`)

|      % | Samples | Caller              | Location    |
| -----: | ------: | ------------------- | ----------- |
| 100.0% |     224 | `Compile::Code_Gen` | `<unknown>` |

##### `PhaseIdealLoop::optimize` (`<unknown>`)

|     % | Samples | Caller                    | Location    |
| ----: | ------: | ------------------------- | ----------- |
| 52.7% |      96 | `Compile::Optimize`       | `<unknown>` |
| 47.3% |      86 | `Compile::optimize_loops` | `<unknown>` |

##### `Compilation::compile_method` (`<unknown>`)

|      % | Samples | Caller                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |     154 | `Compilation::Compilation` | `<unknown>` |

##### `Compilation::Compilation` (`<unknown>`)

|      % | Samples | Caller                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |     154 | `Compiler::compile_method` | `<unknown>` |

##### `Compiler::compile_method` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |     154 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize` (`<unknown>`)

|      % | Samples | Caller                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |     153 | `PhaseIdealLoop::PhaseIdealLoop` | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`<unknown>`)

|      % | Samples | Caller                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |     153 | `PhaseIdealLoop::optimize` | `<unknown>` |

##### `Compilation::compile_java_method` (`<unknown>`)

|      % | Samples | Caller                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |     137 | `Compilation::compile_method` | `<unknown>` |

##### `PhaseIterGVN::optimize` (`<unknown>`)

|     % | Samples | Caller                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 63.8% |      67 | `Compile::Optimize`                        | `<unknown>` |
| 25.7% |      27 | `PhaseIdealLoop::optimize`                 | `<unknown>` |
|  7.6% |       8 | `PhaseMacroExpand::expand_macro_nodes`     | `<unknown>` |
|  1.0% |       1 | `Compile::inline_incrementally_cleanup`    | `<unknown>` |
|  1.0% |       1 | `Compile::process_for_post_loop_opts_igvn` | `<unknown>` |

##### `Parse::Parse` (`<unknown>`)

|      % | Samples | Caller                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |     102 | `ParseGenerator::generate` | `<unknown>` |

##### `ParseGenerator::generate` (`<unknown>`)

|     % | Samples | Caller                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 99.0% |     101 | `Compile::Compile`                 | `<unknown>` |
| 57.8% |      59 | `Parse::do_call`                   | `<unknown>` |
| 57.8% |      59 | `PredictedCallGenerator::generate` | `<unknown>` |

##### `PhaseIterGVN::transform_old` (`<unknown>`)

|     % | Samples | Caller                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 98.0% |      97 | `PhaseIterGVN::optimize`               | `<unknown>` |
|  1.0% |       1 | `Compile::Optimize`                    | `<unknown>` |
|  1.0% |       1 | `PhaseMacroExpand::expand_macro_nodes` | `<unknown>` |

##### `Parse::do_one_block` (`<unknown>`)

|      % | Samples | Caller                 | Location    |
| -----: | ------: | ---------------------- | ----------- |
| 100.0% |      98 | `Parse::do_all_blocks` | `<unknown>` |

##### `Parse::do_all_blocks` (`<unknown>`)

|      % | Samples | Caller         | Location    |
| -----: | ------: | -------------- | ----------- |
| 100.0% |      98 | `Parse::Parse` | `<unknown>` |

##### `Parse::do_call` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      92 | `Parse::do_one_block` | `<unknown>` |

##### `Compile::optimize_loops` (`<unknown>`)

|      % | Samples | Caller              | Location    |
| -----: | ------: | ------------------- | ----------- |
| 100.0% |      86 | `Compile::Optimize` | `<unknown>` |

##### `PhaseOutput::Output` (`<unknown>`)

|      % | Samples | Caller              | Location    |
| -----: | ------: | ------------------- | ----------- |
| 100.0% |      69 | `Compile::Code_Gen` | `<unknown>` |

##### `Matcher::match` (`<unknown>`)

|      % | Samples | Caller              | Location    |
| -----: | ------: | ------------------- | ----------- |
| 100.0% |      65 | `Compile::Code_Gen` | `<unknown>` |

##### `PredictedCallGenerator::generate` (`<unknown>`)

|     % | Samples | Caller                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 98.4% |      61 | `Parse::do_call`                       | `<unknown>` |
| 33.9% |      21 | `PredictedCallGenerator::generate`     | `<unknown>` |
|  1.6% |       1 | `CallGenerator::do_late_inline_helper` | `<unknown>` |

##### `Compilation::emit_lir` (`<unknown>`)

|      % | Samples | Caller                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |      61 | `Compilation::compile_java_method` | `<unknown>` |

##### `Compilation::build_hir` (`<unknown>`)

|      % | Samples | Caller                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |      53 | `Compilation::compile_java_method` | `<unknown>` |

##### `IRScope::IRScope` (`<unknown>`)

|      % | Samples | Caller   | Location    |
| -----: | ------: | -------- | ----------- |
| 100.0% |      42 | `IR::IR` | `<unknown>` |

##### `IR::IR` (`<unknown>`)

|      % | Samples | Caller                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |      42 | `Compilation::build_hir` | `<unknown>` |

##### `JVM_FillInStackTrace` (`<unknown>`)

|      % | Samples | Caller                                      | Location    |
| -----: | ------: | ------------------------------------------- | ----------- |
| 100.0% |      41 | `Java_java_lang_Throwable_fillInStackTrace` | `<unknown>` |

##### `Java_java_lang_Throwable_fillInStackTrace` (`<unknown>`)

|      % | Samples | Caller             | Location              |
| -----: | ------: | ------------------ | --------------------- |
| 100.0% |      41 | `fillInStackTrace` | `java.lang.Throwable` |

##### `java_lang_Throwable::fill_in_stack_trace` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |      40 | `JVM_FillInStackTrace`                     | `<unknown>` |
|  95.0% |      38 | `java_lang_Throwable::fill_in_stack_trace` | `<unknown>` |

##### `WorkerThread::run` (`<unknown>`)

|      % | Samples | Caller             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |      39 | `Thread::call_run` | `<unknown>` |

##### `InlineTree::ok_to_inline` (`<unknown>`)

|      % | Samples | Caller                    | Location    |
| -----: | ------: | ------------------------- | ----------- |
| 100.0% |      25 | `Compile::call_generator` | `<unknown>` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|     % | Samples | Caller                    | Location           |
| ----: | ------: | ------------------------- | ------------------ |
| 31.8% |       7 | `JVM_NewArray`            | `<unknown>`        |
|  9.1% |       2 | `InterpreterRuntime::ldc` | `<unknown>`        |
|  9.1% |       2 | `JVM_Clone`               | `<unknown>`        |
|  4.5% |       1 | `jni_GetArrayLength`      | `<unknown>`        |
|  4.5% |       1 | `arraycopy`               | `java.lang.System` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`<unknown>`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 99.9% |   1,102 | `thread_native_entry` | `<unknown>` |
|  0.1% |       1 | `ThreadJavaMain`      | `<unknown>` |

##### `thread_start` (`<unknown>`)

|      % | Samples | Callee           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |   1,103 | `_pthread_start` | `<unknown>` |

##### `Thread::call_run` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 95.8% |   1,056 | `JavaThread::thread_main_inner` | `<unknown>` |
|  3.5% |      39 | `WorkerThread::run`             | `<unknown>` |
|  0.4% |       4 | `ConcurrentGCThread::run`       | `<unknown>` |
|  0.2% |       2 | `VMThread::run`                 | `<unknown>` |
|  0.1% |       1 | `WatcherThread::run`            | `<unknown>` |

##### `thread_native_entry` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |   1,102 | `Thread::call_run` | `<unknown>` |

##### `JavaThread::thread_main_inner` (`<unknown>`)

|     % | Samples | Callee                                | Location    |
| ----: | ------: | ------------------------------------- | ----------- |
| 99.9% |   1,055 | `CompileBroker::compiler_thread_loop` | `<unknown>` |
|  0.1% |       1 | `ServiceThread::service_thread_entry` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 98.3% |   1,037 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
|  1.6% |      17 | `CompileQueue::get`                        | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method` (`<unknown>`)

|     % | Samples | Callee                                    | Location    |
| ----: | ------: | ----------------------------------------- | ----------- |
| 84.7% |     878 | `C2Compiler::compile_method`              | `<unknown>` |
| 14.9% |     154 | `Compiler::compile_method`                | `<unknown>` |
|  0.2% |       2 | `ciEnv::get_method_from_handle`           | `<unknown>` |
|  0.2% |       2 | `CompilationLog::log_compile`             | `<unknown>` |
|  0.1% |       1 | `CompileBroker::update_compile_perf_data` | `<unknown>` |

##### `C2Compiler::compile_method` (`<unknown>`)

|     % | Samples | Callee             | Location    |
| ----: | ------: | ------------------ | ----------- |
| 99.9% |     877 | `Compile::Compile` | `<unknown>` |
|  0.1% |       1 | `Chunk::next_chop` | `<unknown>` |

##### `Compile::Compile` (`<unknown>`)

|     % | Samples | Callee                                   | Location    |
| ----: | ------: | ---------------------------------------- | ----------- |
| 47.8% |     419 | `Compile::Code_Gen`                      | `<unknown>` |
| 38.4% |     337 | `Compile::Optimize`                      | `<unknown>` |
| 11.5% |     101 | `ParseGenerator::generate`               | `<unknown>` |
|  1.8% |      16 | `PhaseRemoveUseless::PhaseRemoveUseless` | `<unknown>` |
|  0.2% |       2 | `Compile::inline_string_calls`           | `<unknown>` |

##### `invokeExact_MT` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Callee   | Location                                            |
| ----: | ------: | -------- | --------------------------------------------------- |
| 97.0% |     419 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010c7000` |
| 95.1% |     411 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000700109bc00` |
| 93.5% |     404 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010d3800` |
| 80.1% |     346 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x0000007001282000` |
| 79.4% |     343 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x0000007001297800` |

##### `fromCache` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|     % | Samples | Callee               | Location                                        |
| ----: | ------: | -------------------- | ----------------------------------------------- |
| 99.8% |     431 | `invokeExact_MT`     | `java.lang.invoke.Invokers$Holder`              |
| 15.5% |      67 | `doWithCallSite`     | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|  0.2% |       1 | `linkToTargetMethod` | `java.lang.invoke.Invokers$Holder`              |

##### `main` (`org.codenarc.CodeNarc`)

|     % | Samples | Callee           | Location                               |
| ----: | ------: | ---------------- | -------------------------------------- |
| 99.8% |     431 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder`     |
|  0.2% |       1 | `linkCallSite`   | `java.lang.invoke.MethodHandleNatives` |

##### `linkToCallSite` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Callee   | Location                                            |
| ----: | ------: | -------- | --------------------------------------------------- |
| 99.5% |     429 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800` |
| 96.3% |     415 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000700108e000` |
| 82.8% |     357 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010d8800` |
| 80.7% |     348 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x0000007001288400` |
|  5.6% |      24 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000700109b400` |

##### `invokeStatic` (`java.lang.invoke.LambdaForm$DMH.0x0000007001088800`)

|      % | Samples | Callee         | Location                                        |
| -----: | ------: | -------------- | ----------------------------------------------- |
| 100.0% |     430 | `fromCache`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|  77.7% |     334 | `selectMethod` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010a1800`)

|      % | Samples | Callee         | Location                                             |
| -----: | ------: | -------------- | ---------------------------------------------------- |
| 100.0% |     429 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|   2.6% |      11 | `collector`    | `java.lang.invoke.LambdaForm$MH.0x00000070010a1000`  |

##### `guardWithCatch` (`java.lang.invoke.LambdaForm$MH.0x00000070010aa000`)

|     % | Samples | Callee            | Location                                             |
| ----: | ------: | ----------------- | ---------------------------------------------------- |
| 98.4% |     421 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000070010a9800`  |
| 97.9% |     419 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000070010c6400`  |
| 81.1% |     347 | `invokeInterface` | `java.lang.invoke.LambdaForm$DMH.0x0000007001094c00` |
| 48.6% |     208 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000070010d3400`  |
| 13.6% |      58 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x0000007001104000`  |

##### `reinvoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010aa800`)

|      % | Samples | Callee           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |     428 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000` |
| 100.0% |     428 | `guard`          | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00` |
|  42.3% |     181 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000700138c400` |
|   8.9% |      38 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000700132c800` |
|   7.7% |      33 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800` |

##### `guard` (`java.lang.invoke.LambdaForm$MH.0x00000070010aac00`)

|      % | Samples | Callee     | Location                                            |
| -----: | ------: | ---------- | --------------------------------------------------- |
| 100.0% |     428 | `reinvoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|  87.1% |     373 | `delegate` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   0.7% |       3 | `invoke`   | `java.lang.invoke.LambdaForm$MH.0x00000070010aa400` |
|   0.2% |       1 | `invoke`   | `java.lang.invoke.LambdaForm$MH.0x00000070010ab000` |

##### `invokeVirtual` (`java.lang.invoke.LambdaForm$DMH.0x0000007001094400`)

|     % | Samples | Callee              | Location                                       |
| ----: | ------: | ------------------- | ---------------------------------------------- |
| 81.8% |     346 | `doMethodInvoke`    | `org.codehaus.groovy.runtime.dgm$1076`         |
| 78.7% |     333 | `collectViolations` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |
| 18.4% |      78 | `doMethodInvoke`    | `org.codehaus.groovy.runtime.dgm$207`          |
| 14.7% |      62 | `doMethodInvoke`    | `org.codehaus.groovy.runtime.dgm$251`          |
| 10.2% |      43 | `doMethodInvoke`    | `org.codehaus.groovy.runtime.dgm$1008`         |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010a9800`)

|      % | Samples | Callee          | Location                                             |
| -----: | ------: | --------------- | ---------------------------------------------------- |
| 100.0% |     421 | `invokeVirtual` | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |

##### `Compile::Code_Gen` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 53.5% |     224 | `PhaseChaitin::Register_Allocate` | `<unknown>` |
| 16.5% |      69 | `PhaseOutput::Output`             | `<unknown>` |
| 15.5% |      65 | `Matcher::match`                  | `<unknown>` |
| 11.9% |      50 | `PhaseCFG::do_global_code_motion` | `<unknown>` |
|  1.4% |       6 | `PhaseOutput::install_code`       | `<unknown>` |

##### `invokeVirtual` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Callee                 | Location                         |
| -----: | ------: | ---------------------- | -------------------------------- |
| 100.0% |     419 | `execute`              | `org.codenarc.CodeNarc`          |
|  98.1% |     411 | `execute`              | `org.codenarc.CodeNarcRunner`    |
|  10.5% |      44 | `createInitialRuleSet` | `org.codenarc.CodeNarcRunner`    |
|   1.0% |       4 | `parseArgs`            | `org.codenarc.CodeNarc`          |
|   0.7% |       3 | `validate`             | `javax.xml.validation.Validator` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010c7000`)

|      % | Samples | Callee     | Location                                            |
| -----: | ------: | ---------- | --------------------------------------------------- |
| 100.0% |     419 | `reinvoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|  83.5% |     350 | `delegate` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010c6400`)

|      % | Samples | Callee          | Location                                             |
| -----: | ------: | --------------- | ---------------------------------------------------- |
| 100.0% |     419 | `invokeVirtual` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|   0.2% |       1 | `invokeSpecial` | `java.lang.invoke.LambdaForm$DMH.0x0000007001084000` |

##### `invokeSpecial` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Callee             | Location                                                                    |
| ----: | ------: | ------------------ | --------------------------------------------------------------------------- |
| 83.0% |     346 | `doCall`           | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
| 83.0% |     346 | `processDirectory` | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 47.5% |     198 | `doCall`           | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
| 13.9% |      58 | `doCall`           | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`  |
| 11.8% |      49 | `init`             | `org.codenarc.source.AbstractSourceCode`                                    |

##### `invokeMethod` (`groovy.lang.MetaClassImpl`)

|     % | Samples | Callee                   | Location                                                 |
| ----: | ------: | ------------------------ | -------------------------------------------------------- |
| 99.8% |     414 | `invokeMethod`           | `org.codehaus.groovy.runtime.metaclass.ClosureMetaClass` |
| 13.5% |      56 | `doInvokeMethod`         | `groovy.lang.MetaClassImpl`                              |
|  8.4% |      35 | `invokeMethod`           | `groovy.lang.MetaClassImpl`                              |
|  0.2% |       1 | `loadClass`              | `java.lang.ClassLoader`                                  |
|  0.2% |       1 | `I2C/C2I adapters(0xbb)` | `<unknown>`                                              |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x000000700108e000`)

|     % | Samples | Callee             | Location                                             |
| ----: | ------: | ------------------ | ---------------------------------------------------- |
| 99.8% |     414 | `invokeStatic`     | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|  0.5% |       2 | `collector`        | `java.lang.invoke.LambdaForm$MH.0x0000007001031800`  |
|  0.5% |       2 | `invokeStaticInit` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088c00` |

##### `invokeImpl` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |     414 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder`                  |
|  86.0% |     356 | `invokeExact_MT` | `java.lang.invoke.LambdaForm$MH.0x0000007001120c00` |
|  82.6% |     342 | `invokeExact_MT` | `java.lang.invoke.LambdaForm$MH.0x000000700103c000` |

##### `invoke` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee       | Location                                          |
| -----: | ------: | ------------ | ------------------------------------------------- |
| 100.0% |     414 | `invokeImpl` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke` (`java.lang.reflect.Method`)

|      % | Samples | Callee                  | Location                                          |
| -----: | ------: | ----------------------- | ------------------------------------------------- |
| 100.0% |     414 | `invoke`                | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|   0.2% |       1 | `acquireMethodAccessor` | `java.lang.reflect.Method`                        |

##### `invoke` (`org.codehaus.groovy.reflection.CachedMethod`)

|      % | Samples | Callee   | Location                   |
| -----: | ------: | -------- | -------------------------- |
| 100.0% |     414 | `invoke` | `java.lang.reflect.Method` |

##### `Compile::Optimize` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 28.5% |      96 | `PhaseIdealLoop::optimize`     | `<unknown>` |
| 25.5% |      86 | `Compile::optimize_loops`      | `<unknown>` |
| 19.9% |      67 | `PhaseIterGVN::optimize`       | `<unknown>` |
|  7.4% |      25 | `PhaseCCP::PhaseCCP`           | `<unknown>` |
|  4.5% |      15 | `ConnectionGraph::do_analysis` | `<unknown>` |

##### `PhaseChaitin::Register_Allocate` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 20.5% |      46 | `PhaseChaitin::Split`                      | `<unknown>` |
| 18.8% |      42 | `PhaseChaitin::build_ifg_physical`         | `<unknown>` |
| 12.1% |      27 | `PhaseLive::compute`                       | `<unknown>` |
| 11.6% |      26 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |
|  8.9% |      20 | `PhaseChaitin::gather_lrg_masks`           | `<unknown>` |

##### `PhaseIdealLoop::optimize` (`<unknown>`)

|     % | Samples | Callee                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 84.1% |     153 | `PhaseIdealLoop::PhaseIdealLoop` | `<unknown>` |
| 14.8% |      27 | `PhaseIterGVN::optimize`         | `<unknown>` |
|  1.1% |       2 | `Chunk::next_chop`               | `<unknown>` |

##### `Compilation::compile_method` (`<unknown>`)

|     % | Samples | Callee                                               | Location    |
| ----: | ------: | ---------------------------------------------------- | ----------- |
| 89.0% |     137 | `Compilation::compile_java_method`                   | `<unknown>` |
| 10.4% |      16 | `ciEnv::register_method`                             | `<unknown>` |
|  0.6% |       1 | `DebugInformationRecorder::DebugInformationRecorder` | `<unknown>` |

##### `Compilation::Compilation` (`<unknown>`)

|      % | Samples | Callee                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |     154 | `Compilation::compile_method` | `<unknown>` |

##### `Compiler::compile_method` (`<unknown>`)

|      % | Samples | Callee                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |     154 | `Compilation::Compilation` | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 28.8% |      44 | `PhaseIdealLoop::build_loop_late`      | `<unknown>` |
| 22.2% |      34 | `PhaseIdealLoop::split_if_with_blocks` | `<unknown>` |
| 13.1% |      20 | `PhaseIdealLoop::build_loop_early`     | `<unknown>` |
|  9.2% |      14 | `PhaseIdealLoop::Dominators`           | `<unknown>` |
|  5.2% |       8 | `PhaseIdealLoop::build_loop_tree`      | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`<unknown>`)

|      % | Samples | Callee                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |     153 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `Compilation::compile_java_method` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 44.5% |      61 | `Compilation::emit_lir`        | `<unknown>` |
| 38.7% |      53 | `Compilation::build_hir`       | `<unknown>` |
| 13.9% |      19 | `Compilation::emit_code_body`  | `<unknown>` |
|  2.9% |       4 | `ciMethod::ensure_method_data` | `<unknown>` |

##### `PhaseIterGVN::optimize` (`<unknown>`)

|     % | Samples | Callee                                    | Location    |
| ----: | ------: | ----------------------------------------- | ----------- |
| 92.4% |      97 | `PhaseIterGVN::transform_old`             | `<unknown>` |
|  1.9% |       2 | `RegionNode::hash`                        | `<unknown>` |
|  1.9% |       2 | `ProjNode::Value`                         | `<unknown>` |
|  1.9% |       2 | `PhaseIterGVN::remove_globally_dead_node` | `<unknown>` |
|  1.0% |       1 | `MultiNode::hash`                         | `<unknown>` |

##### `Parse::Parse` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 96.1% |      98 | `Parse::do_all_blocks`          | `<unknown>` |
|  2.0% |       2 | `Parse::init_blocks`            | `<unknown>` |
|  2.0% |       2 | `Parse::do_exits`               | `<unknown>` |
|  2.0% |       2 | `Dependencies::assert_common_1` | `<unknown>` |
|  1.0% |       1 | `Parse::merge_common`           | `<unknown>` |

##### `ParseGenerator::generate` (`<unknown>`)

|      % | Samples | Callee         | Location    |
| -----: | ------: | -------------- | ----------- |
| 100.0% |     102 | `Parse::Parse` | `<unknown>` |

##### `PhaseIterGVN::transform_old` (`<unknown>`)

|     % | Samples | Callee                       | Location    |
| ----: | ------: | ---------------------------- | ----------- |
| 13.1% |      13 | `RegionNode::Ideal`          | `<unknown>` |
| 12.1% |      12 | `PhiNode::Ideal`             | `<unknown>` |
| 11.1% |      11 | `StoreNode::Ideal`           | `<unknown>` |
|  9.1% |       9 | `IfNode::Ideal`              | `<unknown>` |
|  9.1% |       9 | `NodeHash::hash_find_insert` | `<unknown>` |

##### `Parse::do_one_block` (`<unknown>`)

|     % | Samples | Callee                      | Location    |
| ----: | ------: | --------------------------- | ----------- |
| 93.9% |      92 | `Parse::do_call`            | `<unknown>` |
| 12.2% |      12 | `Parse::do_field_access`    | `<unknown>` |
|  9.2% |       9 | `Parse::do_one_bytecode`    | `<unknown>` |
|  3.1% |       3 | `Parse::do_if`              | `<unknown>` |
|  2.0% |       2 | `GraphKit::access_store_at` | `<unknown>` |

##### `Parse::do_all_blocks` (`<unknown>`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      98 | `Parse::do_one_block` | `<unknown>` |
|   2.0% |       2 | `Parse::merge_common` | `<unknown>` |

##### `Parse::do_call` (`<unknown>`)

|     % | Samples | Callee                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 66.3% |      61 | `PredictedCallGenerator::generate` | `<unknown>` |
| 64.1% |      59 | `ParseGenerator::generate`         | `<unknown>` |
| 32.6% |      30 | `Compile::call_generator`          | `<unknown>` |
|  4.3% |       4 | `Compile::optimize_inlining`       | `<unknown>` |
|  3.3% |       3 | `ciBytecodeStream::get_method`     | `<unknown>` |

##### `Compile::optimize_loops` (`<unknown>`)

|      % | Samples | Callee                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |      86 | `PhaseIdealLoop::optimize` | `<unknown>` |

##### `PhaseOutput::Output` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 31.9% |      22 | `Scheduling::DoScheduling`      | `<unknown>` |
| 26.1% |      18 | `PhaseOutput::fill_buffer`      | `<unknown>` |
| 17.4% |      12 | `PhaseOutput::BuildOopMaps`     | `<unknown>` |
| 10.1% |       7 | `PhaseOutput::shorten_branches` | `<unknown>` |
|  2.9% |       2 | `PhaseOutput::init_buffer`      | `<unknown>` |

##### `Matcher::match` (`<unknown>`)

|     % | Samples | Callee                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 58.5% |      38 | `Matcher::xform`                              | `<unknown>` |
| 21.5% |      14 | `Matcher::find_shared`                        | `<unknown>` |
| 10.8% |       7 | `Matcher::specialize_generic_vector_operands` | `<unknown>` |
|  1.5% |       1 | `MachHaltNode::jvms`                          | `<unknown>` |
|  1.5% |       1 | `CMoveINode::Opcode`                          | `<unknown>` |

##### `PredictedCallGenerator::generate` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 95.2% |      59 | `ParseGenerator::generate`           | `<unknown>` |
| 33.9% |      21 | `PredictedCallGenerator::generate`   | `<unknown>` |
|  3.2% |       2 | `GraphKit::subtype_check_receiver`   | `<unknown>` |
|  1.6% |       1 | `GraphKit::null_check_common`        | `<unknown>` |
|  1.6% |       1 | `PreserveJVMState::PreserveJVMState` | `<unknown>` |

##### `Compilation::emit_lir` (`<unknown>`)

|     % | Samples | Callee                       | Location    |
| ----: | ------: | ---------------------------- | ----------- |
| 78.7% |      48 | `LinearScan::do_linear_scan` | `<unknown>` |
| 21.3% |      13 | `BlockList::iterate_forward` | `<unknown>` |

##### `Compilation::build_hir` (`<unknown>`)

|     % | Samples | Callee                                       | Location    |
| ----: | ------: | -------------------------------------------- | ----------- |
| 79.2% |      42 | `IR::IR`                                     | `<unknown>` |
|  9.4% |       5 | `IR::eliminate_null_checks`                  | `<unknown>` |
|  3.8% |       2 | `GlobalValueNumbering::GlobalValueNumbering` | `<unknown>` |
|  1.9% |       1 | `IR::compute_code`                           | `<unknown>` |
|  1.9% |       1 | `IR::split_critical_edges`                   | `<unknown>` |

##### `IRScope::IRScope` (`<unknown>`)

|      % | Samples | Callee                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |      42 | `GraphBuilder::GraphBuilder` | `<unknown>` |

##### `IR::IR` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |      42 | `IRScope::IRScope` | `<unknown>` |

##### `JVM_FillInStackTrace` (`<unknown>`)

|     % | Samples | Callee                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 97.6% |      40 | `java_lang_Throwable::fill_in_stack_trace`      | `<unknown>` |
|  2.4% |       1 | `PreserveExceptionMark::~PreserveExceptionMark` | `<unknown>` |

##### `Java_java_lang_Throwable_fillInStackTrace` (`<unknown>`)

|      % | Samples | Callee                 | Location    |
| -----: | ------: | ---------------------- | ----------- |
| 100.0% |      41 | `JVM_FillInStackTrace` | `<unknown>` |

##### `java_lang_Throwable::fill_in_stack_trace` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 95.0% |      38 | `java_lang_Throwable::fill_in_stack_trace` | `<unknown>` |
| 22.5% |       9 | `frame::sender_for_compiled_frame`         | `<unknown>` |
| 12.5% |       5 | `frame::sender_raw`                        | `<unknown>` |
|  7.5% |       3 | `nmethod::metadata_at`                     | `<unknown>` |
|  7.5% |       3 | `BacktraceBuilder::push`                   | `<unknown>` |

##### `WorkerThread::run` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 53.8% |      21 | `G1EvacuateRegionsBaseTask::work` | `<unknown>` |
| 25.6% |      10 | `G1RebuildRSAndScrubTask::work`   | `<unknown>` |
| 15.4% |       6 | `G1CMConcurrentMarkingTask::work` | `<unknown>` |
|  5.1% |       2 | `G1CMRootRegionScanTask::work`    | `<unknown>` |

##### `InlineTree::ok_to_inline` (`<unknown>`)

|     % | Samples | Callee                        | Location    |
| ----: | ------: | ----------------------------- | ----------- |
| 92.0% |      23 | `ciMethod::get_flow_analysis` | `<unknown>` |
|  4.0% |       1 | `ciMethod::is_accessor`       | `<unknown>` |
|  4.0% |       1 | `InlineTree::try_to_inline`   | `<unknown>` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

Common call stack: `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                    |
| ---: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.0% |      31 | `PhaseChaitin::Split` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                                                              |
| 1.3% |      20 | `PhaseChaitin::build_ifg_physical` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                                                 |
| 0.8% |      13 | `PhaseChaitin::elide_copy` ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                            |
| 0.8% |      12 | `PhaseChaitin::gather_lrg_masks` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                                                   |
| 0.8% |      12 | `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                                         |
| 0.7% |      11 | `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                                                               |
| 0.6% |      10 | `PhaseIdealLoop::build_loop_early` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                              |
| 0.6% |      10 | `__psynch_cvwait` ← `PlatformMonitor::wait` ← `Monitor::wait` ← `CompileQueue::get`                                                                                                                                                                                                                                                                                           |
| 0.6% |       9 | `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                                                                                    |
| 0.6% |       9 | `PhaseAggressiveCoalesce::insert_copies` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                                           |
| 0.6% |       9 | `PhaseIdealLoop::build_loop_late_post_work` ← `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                 |
| 0.5% |       8 | `PhaseOutput::BuildOopMaps` ← `PhaseOutput::Output` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                                                                    |
| 0.4% |       7 | `PhaseCFG::schedule_early` ← `PhaseCFG::global_code_motion` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                        |
| 0.4% |       7 | `IntervalWalker::walk_to` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                 |
| 0.4% |       7 | `PhaseCFG::partial_latency_of_defs` ← `PhaseCFG::global_code_motion` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                               |
| 0.4% |       7 | `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                                                                              |
| 0.4% |       7 | `Arena::contains` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                                                                |
| 0.4% |       7 | `LinearScanWalker::alloc_free_reg` ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` |
| 0.4% |       6 | `PhaseChaitin::build_ifg_virtual` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                                                  |
| 0.3% |       5 | `Scheduling::AddNodeToBundle` ← `Scheduling::DoScheduling` ← `PhaseOutput::Output` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                                     |
