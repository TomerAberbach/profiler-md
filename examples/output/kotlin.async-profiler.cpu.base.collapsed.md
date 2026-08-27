# Sampling profile

Collected 1,672 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Native           | 45.9% |     768 |
| Compiler         | 39.4% |     658 |
| Ours             |  8.9% |     149 |
| Standard library |  4.9% |      82 |
| JIT              |  0.9% |      15 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                                                                                                                                 | Location    |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 4.6% |      77 | `__psynch_mutexwait`                                                                                                                                     | `<unknown>` |
| 4.2% |      70 | `inflate_fast`                                                                                                                                           | `<unknown>` |
| 3.7% |      62 | `__psynch_cvwait`                                                                                                                                        | `<unknown>` |
| 1.3% |      22 | `_platform_memset`                                                                                                                                       | `<unknown>` |
| 1.2% |      20 | `SymbolTable::do_lookup`                                                                                                                                 | `<unknown>` |
| 1.1% |      19 | `tlv_get_addr`                                                                                                                                           | `<unknown>` |
| 1.1% |      18 | `IndexSetIterator::advance_and_next`                                                                                                                     | `<unknown>` |
| 1.0% |      16 | `PhaseChaitin::Split`                                                                                                                                    | `<unknown>` |
| 1.0% |      16 | `PhaseChaitin::build_ifg_physical`                                                                                                                       | `<unknown>` |
| 0.9% |      15 | `PhaseChaitin::elide_copy`                                                                                                                               | `<unknown>` |
| 0.8% |      14 | `InstanceKlass::find_method_index`                                                                                                                       | `<unknown>` |
| 0.8% |      14 | `semaphore_wait_trap`                                                                                                                                    | `<unknown>` |
| 0.8% |      13 | `LinearScanWalker::alloc_free_reg`                                                                                                                       | `<unknown>` |
| 0.7% |      12 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `<unknown>` |
| 0.7% |      11 | `PhaseChaitin::gather_lrg_masks`                                                                                                                         | `<unknown>` |
| 0.7% |      11 | `PhaseLive::compute`                                                                                                                                     | `<unknown>` |
| 0.6% |      10 | `IntervalWalker::walk_to`                                                                                                                                | `<unknown>` |
| 0.6% |      10 | `inflate`                                                                                                                                                | `<unknown>` |
| 0.6% |      10 | `PhaseIdealLoop::build_loop_late`                                                                                                                        | `<unknown>` |
| 0.5% |       9 | `Dictionary::find`                                                                                                                                       | `<unknown>` |

#### Categories

##### Native

|    % | Samples | Function                                                                                                                                                 | Location    |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 4.6% |      77 | `__psynch_mutexwait`                                                                                                                                     | `<unknown>` |
| 4.2% |      70 | `inflate_fast`                                                                                                                                           | `<unknown>` |
| 3.7% |      62 | `__psynch_cvwait`                                                                                                                                        | `<unknown>` |
| 1.3% |      22 | `_platform_memset`                                                                                                                                       | `<unknown>` |
| 1.2% |      20 | `SymbolTable::do_lookup`                                                                                                                                 | `<unknown>` |
| 1.1% |      19 | `tlv_get_addr`                                                                                                                                           | `<unknown>` |
| 0.8% |      14 | `InstanceKlass::find_method_index`                                                                                                                       | `<unknown>` |
| 0.8% |      14 | `semaphore_wait_trap`                                                                                                                                    | `<unknown>` |
| 0.7% |      12 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `<unknown>` |
| 0.6% |      10 | `inflate`                                                                                                                                                | `<unknown>` |
| 0.5% |       9 | `Dictionary::find`                                                                                                                                       | `<unknown>` |
| 0.5% |       9 | `swtch_pri`                                                                                                                                              | `<unknown>` |
| 0.5% |       8 | `bsearch`                                                                                                                                                | `<unknown>` |
| 0.5% |       8 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>`                             | `<unknown>` |
| 0.5% |       8 | `inflate_table`                                                                                                                                          | `<unknown>` |
| 0.5% |       8 | `pthread_jit_write_protect_np`                                                                                                                           | `<unknown>` |
| 0.5% |       8 | `vmSymbols::find_sid`                                                                                                                                    | `<unknown>` |
| 0.5% |       8 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                   | `<unknown>` |
| 0.5% |       8 | `CodeCache::make_marked_nmethods_deoptimized`                                                                                                            | `<unknown>` |
| 0.4% |       7 | `fwd_copy_again`                                                                                                                                         | `<unknown>` |

##### Compiler

|    % | Samples | Function                                        | Location    |
| ---: | ------: | ----------------------------------------------- | ----------- |
| 1.1% |      18 | `IndexSetIterator::advance_and_next`            | `<unknown>` |
| 1.0% |      16 | `PhaseChaitin::Split`                           | `<unknown>` |
| 1.0% |      16 | `PhaseChaitin::build_ifg_physical`              | `<unknown>` |
| 0.9% |      15 | `PhaseChaitin::elide_copy`                      | `<unknown>` |
| 0.8% |      13 | `LinearScanWalker::alloc_free_reg`              | `<unknown>` |
| 0.7% |      11 | `PhaseChaitin::gather_lrg_masks`                | `<unknown>` |
| 0.7% |      11 | `PhaseLive::compute`                            | `<unknown>` |
| 0.6% |      10 | `IntervalWalker::walk_to`                       | `<unknown>` |
| 0.6% |      10 | `PhaseIdealLoop::build_loop_late`               | `<unknown>` |
| 0.5% |       8 | `LinearScanWalker::split_before_usage`          | `<unknown>` |
| 0.5% |       8 | `PhaseIdealLoop::Dominators`                    | `<unknown>` |
| 0.5% |       8 | `Compile::disconnect_useless_nodes`             | `<unknown>` |
| 0.4% |       7 | `ciObjectFactory::get_metadata`                 | `<unknown>` |
| 0.4% |       7 | `PhaseIdealLoop::build_loop_late_post_work`     | `<unknown>` |
| 0.4% |       7 | `PhaseCFG::partial_latency_of_defs`             | `<unknown>` |
| 0.4% |       7 | `LinearScanWalker::free_collect_inactive_fixed` | `<unknown>` |
| 0.4% |       7 | `PhaseIdealLoop::build_loop_early`              | `<unknown>` |
| 0.4% |       6 | `MultiNode::is_CFG`                             | `<unknown>` |
| 0.4% |       6 | `PhaseOutput::BuildOopMaps`                     | `<unknown>` |
| 0.4% |       6 | `LinearScan::assign_reg_num`                    | `<unknown>` |

##### Ours

|    % | Samples | Function                                                              | Location                                                                                           |
| ---: | ------: | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 0.2% |       3 | `loadAllClassesFromJars`                                              | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                             |
| 0.1% |       2 | `analyzeMainLoop`                                                     | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`                                    |
| 0.1% |       2 | `getApplicability`                                                    | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver$ResolutionResult`                          |
| 0.1% |       1 | `isSubtypeOf$default`                                                 | `org.jetbrains.kotlin.types.AbstractTypeChecker`                                                   |
| 0.1% |       1 | `completeIsSubTypeOf`                                                 | `org.jetbrains.kotlin.types.AbstractTypeChecker`                                                   |
| 0.1% |       1 | `transformStatementsIndexed`                                          | `org.jetbrains.kotlin.fir.expressions.FirExpressionUtilKt`                                         |
| 0.1% |       1 | `possibleGetMethodNames`                                              | `org.jetbrains.kotlin.load.java.PropertiesConventionUtilKt`                                        |
| 0.1% |       1 | `copyTo$default`                                                      | `org.jetbrains.kotlin.ir.util.IrUtilsKt`                                                           |
| 0.1% |       1 | `addEdge$default`                                                     | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraphBuilder`                                 |
| 0.1% |       1 | `mayHaveTopLevelClassifier`                                           | `org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`                                |
| 0.1% |       1 | `tryToSetSourceForImplicitReceiver$tryToSetSourceForImplicitReceiver` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate`                                       |
| 0.1% |       1 | `invoke`                                                              | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl$$Lambda.0x000000e0015c5258`   |
| 0.1% |       1 | `forEachArgument`                                                     | `org.jetbrains.kotlin.fir.analysis.cfa.FirCallsEffectAnalyzer`                                     |
| 0.1% |       1 | `getArguments`                                                        | `org.jetbrains.kotlin.fir.expressions.FirEmptyArgumentList`                                        |
| 0.1% |       1 | `checkParameterBounds`                                                | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirExposedVisibilityDeclarationChecker`    |
| 0.1% |       1 | `deserializeClassToSymbol`                                            | `org.jetbrains.kotlin.fir.deserialization.ClassDeserializationKt`                                  |
| 0.1% |       1 | `charAt`                                                              | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence`                                |
| 0.1% |       1 | `processConstraintStorageFromAtom`                                    | `org.jetbrains.kotlin.fir.resolve.calls.candidate.CandidateFactoryKt`                              |
| 0.1% |       1 | `getContext`                                                          | `org.jetbrains.kotlin.fir.builder.AbstractRawFirBuilder`                                           |
| 0.1% |       1 | `transform`                                                           | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |

##### Standard library

|    % | Samples | Function                | Location                                                |
| ---: | ------: | ----------------------- | ------------------------------------------------------- |
| 0.4% |       7 | `sanitizeStackTrace`    | `kotlin.jvm.internal.Intrinsics`                        |
| 0.4% |       7 | `getNode`               | `java.util.HashMap`                                     |
| 0.2% |       4 | `checkNotNullParameter` | `kotlin.jvm.internal.Intrinsics`                        |
| 0.1% |       2 | `inflate`               | `java.util.zip.Inflater`                                |
| 0.1% |       2 | `nextNode`              | `java.util.HashMap$HashIterator`                        |
| 0.1% |       1 | `formatUnsignedInt`     | `java.lang.Integer`                                     |
| 0.1% |       1 | `mutableMapOf`          | `kotlin.collections.MapsKt__MapsKt`                     |
| 0.1% |       1 | `getValue`              | `kotlin.SynchronizedLazyImpl`                           |
| 0.1% |       1 | `read`                  | `java.util.zip.InflaterInputStream`                     |
| 0.1% |       1 | `next`                  | `java.util.HashMap$ValueIterator`                       |
| 0.1% |       1 | `getInt`                | `jdk.internal.misc.ScopedMemoryAccess`                  |
| 0.1% |       1 | `replace`               | `java.lang.StringLatin1`                                |
| 0.1% |       1 | `<init>`                | `java.util.concurrent.locks.AbstractQueuedSynchronizer` |
| 0.1% |       1 | `generateInnerClass`    | `java.lang.invoke.InnerClassLambdaMetafactory`          |
| 0.1% |       1 | `getPackageName`        | `java.lang.Class`                                       |
| 0.1% |       1 | `copyOf`                | `java.util.Arrays`                                      |
| 0.1% |       1 | `size`                  | `java.util.Collections$SingletonSet`                    |
| 0.1% |       1 | `linkToTargetMethod`    | `java.lang.invoke.LambdaForm$MH.0x000000e0015ec800`     |
| 0.1% |       1 | `decompress`            | `jdk.internal.jimage.ImageLocation`                     |
| 0.1% |       1 | `get`                   | `java.util.concurrent.ConcurrentHashMap`                |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_mutexwait` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      77 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `inflate_fast` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |      70 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `__psynch_cvwait` (`<unknown>`)

|      % | Samples | Caller                  | Location    |
| -----: | ------: | ----------------------- | ----------- |
| 100.0% |      62 | `PlatformMonitor::wait` | `<unknown>` |

##### `_platform_memset` (`<unknown>`)

|     % | Samples | Caller                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 22.7% |       5 | `MemAllocator::allocate`                      | `<unknown>` |
| 13.6% |       3 | `MarkBitMap::do_clear`                        | `<unknown>` |
|  9.1% |       2 | `MethodLiveness::BasicBlock::get_liveness_at` | `<unknown>` |
|  9.1% |       2 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `<unknown>` |
|  4.5% |       1 | `GraphBuilder::copy_state_before_with_bci`    | `<unknown>` |

##### `SymbolTable::do_lookup` (`<unknown>`)

|     % | Samples | Caller                                         | Location    |
| ----: | ------: | ---------------------------------------------- | ----------- |
| 50.0% |      10 | `SymbolTable::lookup_only`                     | `<unknown>` |
| 30.0% |       6 | `ClassFileParser::parse_constant_pool_entries` | `<unknown>` |
| 20.0% |       4 | `SymbolTable::new_symbol`                      | `<unknown>` |

##### `tlv_get_addr` (`<unknown>`)

|     % | Samples | Caller                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 10.5% |       2 | `PhaseLive::compute`            | `<unknown>` |
|  5.3% |       1 | `LIRGenerator::do_StoreField`   | `<unknown>` |
|  5.3% |       1 | `GraphKit::make_slow_call_ex`   | `<unknown>` |
|  5.3% |       1 | `PhaseValues::uncached_makecon` | `<unknown>` |
|  5.3% |       1 | `TypeAryPtr::xmeet_helper`      | `<unknown>` |

##### `IndexSetIterator::advance_and_next` (`<unknown>`)

|     % | Samples | Caller                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 22.2% |       4 | `PhaseChaitin::build_ifg_physical` | `<unknown>` |
| 22.2% |       4 | `PhaseIFG::SquareUp`               | `<unknown>` |
| 16.7% |       3 | `PhaseChaitin::Select`             | `<unknown>` |
| 11.1% |       2 | `PhaseLive::add_liveout`           | `<unknown>` |
|  5.6% |       1 | `PhaseChaitin::Simplify`           | `<unknown>` |

##### `PhaseChaitin::Split` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      16 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      16 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseChaitin::elide_copy` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |      15 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |

##### `InstanceKlass::find_method_index` (`<unknown>`)

|     % | Samples | Caller                                  | Location    |
| ----: | ------: | --------------------------------------- | ----------- |
| 92.9% |      13 | `InstanceKlass::uncached_lookup_method` | `<unknown>` |
|  7.1% |       1 | `InstanceKlass::find_method`            | `<unknown>` |

##### `semaphore_wait_trap` (`<unknown>`)

|     % | Samples | Caller                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 64.3% |       9 | `WorkerThread::run`              | `<unknown>` |
| 14.3% |       2 | `WorkerThreads::run_task`        | `<unknown>` |
| 14.3% |       2 | `GenericWaitBarrier::Cell::wait` | `<unknown>` |
|  7.1% |       1 | `SafepointSynchronize::begin`    | `<unknown>` |

##### `LinearScanWalker::alloc_free_reg` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |      13 | `LinearScanWalker::activate_current` | `<unknown>` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`<unknown>`)

|     % | Samples | Caller                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 91.7% |      11 | `DebugInformationRecorder::describe_scope`         | `<unknown>` |
|  8.3% |       1 | `DebugInformationRecorder::serialize_scope_values` | `<unknown>` |

##### `PhaseChaitin::gather_lrg_masks` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      11 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseLive::compute` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      11 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `IntervalWalker::walk_to` (`<unknown>`)

|     % | Samples | Caller                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 90.0% |       9 | `IntervalWalker::walk_to`        | `<unknown>` |
| 10.0% |       1 | `LinearScan::allocate_registers` | `<unknown>` |

##### `inflate` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |      10 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |      10 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `Dictionary::find` (`<unknown>`)

|     % | Samples | Caller                                                       | Location    |
| ----: | ------: | ------------------------------------------------------------ | ----------- |
| 66.7% |       6 | `SystemDictionary::resolve_instance_class_or_null`           | `<unknown>` |
| 33.3% |       3 | `SystemDictionary::find_constrained_instance_or_array_klass` | `<unknown>` |

##### `swtch_pri` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                                                                                                                                                                                                                           | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| 55.6% |       5 | `bool ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::internal_insert_get<G1CodeRootSetHashTable::HashTableLookUp, bool ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::insert<G1CodeRootSetHashTable::HashTableLookUp>(Thread*, G1CodeRootSetHashTable::HashTableLookUp&, nmethod* const&, bool*, bool*)::NOP>` | `<unknown>` |
| 44.4% |       4 | `TaskTerminator::offer_termination`                                                                                                                                                                                                                                                                                                              | `<unknown>` |

##### `bsearch` (`<unknown>`)

|      % | Samples | Caller                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |       8 | `encoding_for_logical_immediate` | `<unknown>` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`<unknown>`)

|     % | Samples | Caller                                            | Location    |
| ----: | ------: | ------------------------------------------------- | ----------- |
| 87.5% |       7 | `G1ParScanThreadState::do_copy_to_survivor_space` | `<unknown>` |
| 12.5% |       1 | `G1ParScanThreadState::trim_queue_to_threshold`   | `<unknown>` |

##### `inflate_table` (`<unknown>`)

|      % | Samples | Caller    | Location    |
| -----: | ------: | --------- | ----------- |
| 100.0% |       8 | `inflate` | `<unknown>` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|     % | Samples | Caller                                           | Location                                                  |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------------- |
| 25.0% |       2 | `InterpreterRuntime::frequency_counter_overflow` | `<unknown>`                                               |
| 12.5% |       1 | `<clinit>`                                       | `org.jetbrains.kotlin.fir.analysis.diagnostics.FirErrors` |
| 12.5% |       1 | `jni_ReleasePrimitiveArrayCritical`              | `<unknown>`                                               |
| 12.5% |       1 | `jni_GetPrimitiveArrayCritical`                  | `<unknown>`                                               |
| 12.5% |       1 | `JVM_IsArrayClass`                               | `<unknown>`                                               |

##### `vmSymbols::find_sid` (`<unknown>`)

|      % | Samples | Caller                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |       8 | `ciObjectFactory::get_symbol` | `<unknown>` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`<unknown>`)

|      % | Samples | Caller                                                                   | Location    |
| -----: | ------: | ------------------------------------------------------------------------ | ----------- |
| 100.0% |       8 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` | `<unknown>` |

##### `CodeCache::make_marked_nmethods_deoptimized` (`<unknown>`)

|      % | Samples | Caller                                  | Location    |
| -----: | ------: | --------------------------------------- | ----------- |
| 100.0% |       8 | `Deoptimization::deoptimize_all_marked` | `<unknown>` |

##### `LinearScanWalker::split_before_usage` (`<unknown>`)

|     % | Samples | Caller                                       | Location    |
| ----: | ------: | -------------------------------------------- | ----------- |
| 62.5% |       5 | `LinearScanWalker::alloc_free_reg`           | `<unknown>` |
| 37.5% |       3 | `LinearScanWalker::split_and_spill_interval` | `<unknown>` |

##### `PhaseIdealLoop::Dominators` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       8 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `Compile::disconnect_useless_nodes` (`<unknown>`)

|     % | Samples | Caller                                   | Location    |
| ----: | ------: | ---------------------------------------- | ----------- |
| 87.5% |       7 | `PhaseRemoveUseless::PhaseRemoveUseless` | `<unknown>` |
| 12.5% |       1 | `PhaseCCP::transform`                    | `<unknown>` |

##### `fwd_copy_again` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |       7 | `G1ParScanThreadState::trim_queue_to_threshold` | `<unknown>` |

##### `ciObjectFactory::get_metadata` (`<unknown>`)

|     % | Samples | Caller                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 42.9% |       3 | `ciBytecodeStream::get_method`  | `<unknown>` |
| 28.6% |       2 | `ciMethod::ensure_method_data`  | `<unknown>` |
| 14.3% |       1 | `ciEnv::get_method_from_handle` | `<unknown>` |
| 14.3% |       1 | `ciMethod::method_data`         | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       7 | `PhaseIdealLoop::build_loop_late` | `<unknown>` |

##### `PhaseCFG::partial_latency_of_defs` (`<unknown>`)

|      % | Samples | Caller                         | Location    |
| -----: | ------: | ------------------------------ | ----------- |
| 100.0% |       7 | `PhaseCFG::global_code_motion` | `<unknown>` |

##### `LinearScanWalker::free_collect_inactive_fixed` (`<unknown>`)

|      % | Samples | Caller                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |       7 | `LinearScanWalker::alloc_free_reg` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_early` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       7 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `sanitizeStackTrace` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Caller                    | Location                         |
| -----: | ------: | ------------------------- | -------------------------------- |
| 100.0% |       7 | `throwParameterIsNullNPE` | `kotlin.jvm.internal.Intrinsics` |

##### `getNode` (`java.util.HashMap`)

|     % | Samples | Caller | Location                  |
| ----: | ------: | ------ | ------------------------- |
| 85.7% |       6 | `get`  | `java.util.HashMap`       |
| 14.3% |       1 | `get`  | `java.util.LinkedHashMap` |

##### `MultiNode::is_CFG` (`<unknown>`)

|     % | Samples | Caller                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 50.0% |       3 | `PhaseIdealLoop::build_and_optimize`   | `<unknown>` |
| 33.3% |       2 | `PhaseIdealLoop::Dominators`           | `<unknown>` |
| 16.7% |       1 | `PhaseIdealLoop::build_loop_tree_impl` | `<unknown>` |

##### `PhaseOutput::BuildOopMaps` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |       6 | `PhaseOutput::Output` | `<unknown>` |

##### `LinearScan::assign_reg_num` (`<unknown>`)

|      % | Samples | Caller                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |       6 | `LinearScan::do_linear_scan` | `<unknown>` |

##### `checkNotNullParameter` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Caller                    | Location                                                               |
| ----: | ------: | ------------------------- | ---------------------------------------------------------------------- |
| 25.0% |       1 | `getChildren`             | `org.jetbrains.kotlin.util.LightTreeUtilsKt`                           |
| 25.0% |       1 | `checkAndCommitReportsOn` | `org.jetbrains.kotlin.diagnostics.impl.PendingDiagnosticsReporterImpl` |
| 25.0% |       1 | `firstOrNull`             | `kotlin.collections.CollectionsKt___CollectionsKt`                     |
| 25.0% |       1 | `get`                     | `org.jetbrains.kotlin.fir.declarations.impl.FirDeclarationStatusImpl`  |

##### `loadAllClassesFromJars` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|      % | Samples | Caller           | Location                                               |
| -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% |       3 | `preloadClasses` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `analyzeMainLoop` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`)

|      % | Samples | Caller    | Location                                                        |
| -----: | ------: | --------- | --------------------------------------------------------------- |
| 100.0% |       2 | `analyze` | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer` |

##### `getApplicability` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver$ResolutionResult`)

|      % | Samples | Caller                          | Location                                                 |
| -----: | ------: | ------------------------------- | -------------------------------------------------------- |
| 100.0% |       2 | `resolveCallAndSelectCandidate` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver` |

##### `inflate` (`java.util.zip.Inflater`)

|      % | Samples | Caller | Location                            |
| -----: | ------: | ------ | ----------------------------------- |
| 100.0% |       2 | `read` | `java.util.zip.InflaterInputStream` |

##### `nextNode` (`java.util.HashMap$HashIterator`)

|      % | Samples | Caller | Location                          |
| -----: | ------: | ------ | --------------------------------- |
| 100.0% |       2 | `next` | `java.util.HashMap$ValueIterator` |

##### `isSubtypeOf$default` (`org.jetbrains.kotlin.types.AbstractTypeChecker`)

|      % | Samples | Caller                        | Location                                         |
| -----: | ------: | ----------------------------- | ------------------------------------------------ |
| 100.0% |       1 | `isSubtypeForSameConstructor` | `org.jetbrains.kotlin.types.AbstractTypeChecker` |

##### `completeIsSubTypeOf` (`org.jetbrains.kotlin.types.AbstractTypeChecker`)

|      % | Samples | Caller        | Location                                         |
| -----: | ------: | ------------- | ------------------------------------------------ |
| 100.0% |       1 | `isSubtypeOf` | `org.jetbrains.kotlin.types.AbstractTypeChecker` |

##### `transformStatementsIndexed` (`org.jetbrains.kotlin.fir.expressions.FirExpressionUtilKt`)

|      % | Samples | Caller                                                      | Location                                                                                      |
| -----: | ------: | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `transformBlockInCurrentScope$org_jetbrains_kotlin_resolve` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `possibleGetMethodNames` (`org.jetbrains.kotlin.load.java.PropertiesConventionUtilKt`)

|      % | Samples | Caller                              | Location                                                         |
| -----: | ------: | ----------------------------------- | ---------------------------------------------------------------- |
| 100.0% |       1 | `possibleGetterNamesByPropertyName` | `org.jetbrains.kotlin.fir.resolve.FirJavaSyntheticNamesProvider` |

##### `copyTo$default` (`org.jetbrains.kotlin.ir.util.IrUtilsKt`)

|      % | Samples | Caller        | Location                                                              |
| -----: | ------: | ------------- | --------------------------------------------------------------------- |
| 100.0% |       1 | `addFunction` | `org.jetbrains.kotlin.ir.builders.declarations.DeclarationBuildersKt` |

##### `addEdge$default` (`org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraphBuilder`)

|      % | Samples | Caller             | Location                                                           |
| -----: | ------: | ------------------ | ------------------------------------------------------------------ |
| 100.0% |       1 | `addNewSimpleNode` | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraphBuilder` |

##### `mayHaveTopLevelClassifier` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`)

|      % | Samples | Caller                        | Location                                                                            |
| -----: | ------: | ----------------------------- | ----------------------------------------------------------------------------------- |
| 100.0% |       1 | `getClassLikeSymbolByClassId` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider` |

##### `tryToSetSourceForImplicitReceiver$tryToSetSourceForImplicitReceiver` (`org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate`)

|      % | Samples | Caller                              | Location                                                     |
| -----: | ------: | ----------------------------------- | ------------------------------------------------------------ |
| 100.0% |       1 | `tryToSetSourceForImplicitReceiver` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate` |

##### `invoke` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl$$Lambda.0x000000e0015c5258`)

|      % | Samples | Caller                          | Location                                                              |
| -----: | ------: | ------------------------------- | --------------------------------------------------------------------- |
| 100.0% |       1 | `iterateScopesWithSubstitution` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl` |

##### `forEachArgument` (`org.jetbrains.kotlin.fir.analysis.cfa.FirCallsEffectAnalyzer`)

|      % | Samples | Caller                      | Location                                                       |
| -----: | ------: | --------------------------- | -------------------------------------------------------------- |
| 100.0% |       1 | `findNonInPlaceUsesOf$scan` | `org.jetbrains.kotlin.fir.analysis.cfa.FirCallsEffectAnalyzer` |

##### `getArguments` (`org.jetbrains.kotlin.fir.expressions.FirEmptyArgumentList`)

|      % | Samples | Caller         | Location                                                    |
| -----: | ------: | -------------- | ----------------------------------------------------------- |
| 100.0% |       1 | `getArguments` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.CallInfo` |

##### `checkParameterBounds` (`org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirExposedVisibilityDeclarationChecker`)

|      % | Samples | Caller          | Location                                                                                        |
| -----: | ------: | --------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `checkFunction` | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirExposedVisibilityDeclarationChecker` |

##### `deserializeClassToSymbol` (`org.jetbrains.kotlin.fir.deserialization.ClassDeserializationKt`)

|      % | Samples | Caller                | Location                                                                                                          |
| -----: | ------: | --------------------- | ----------------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `classCache$lambda$1` | `org.jetbrains.kotlin.fir.resolve.providers.impl.AbstractFirBuiltinSymbolProvider$BuiltInsPackageFragmentWrapper` |

##### `charAt` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence`)

|      % | Samples | Caller      | Location                                                     |
| -----: | ------: | ----------- | ------------------------------------------------------------ |
| 100.0% |       1 | `splitPath` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler` |

##### `processConstraintStorageFromAtom` (`org.jetbrains.kotlin.fir.resolve.calls.candidate.CandidateFactoryKt`)

|      % | Samples | Caller                 | Location                                                              |
| -----: | ------: | ---------------------- | --------------------------------------------------------------------- |
| 100.0% |       1 | `addSubsystemFromAtom` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.CandidateFactoryKt` |

##### `getContext` (`org.jetbrains.kotlin.fir.builder.AbstractRawFirBuilder`)

|      % | Samples | Caller                       | Location                                                                         |
| -----: | ------: | ---------------------------- | -------------------------------------------------------------------------------- |
| 100.0% |       1 | `convertFunctionDeclaration` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder` |

##### `transform` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

|      % | Samples | Caller      | Location                                                                           |
| -----: | ------: | ----------- | ---------------------------------------------------------------------------------- |
| 100.0% |       1 | `transform` | `org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer` |

##### `formatUnsignedInt` (`java.lang.Integer`)

|      % | Samples | Caller              | Location            |
| -----: | ------: | ------------------- | ------------------- |
| 100.0% |       1 | `toUnsignedString0` | `java.lang.Integer` |

##### `mutableMapOf` (`kotlin.collections.MapsKt__MapsKt`)

|      % | Samples | Caller               | Location                                           |
| -----: | ------: | -------------------- | -------------------------------------------------- |
| 100.0% |       1 | `insertIncomingEdge` | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.CFGNode` |

##### `getValue` (`kotlin.SynchronizedLazyImpl`)

|      % | Samples | Caller          | Location                                                  |
| -----: | ------: | --------------- | --------------------------------------------------------- |
| 100.0% |       1 | `getMyChildren` | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile` |

##### `read` (`java.util.zip.InflaterInputStream`)

|      % | Samples | Caller | Location                       |
| -----: | ------: | ------ | ------------------------------ |
| 100.0% |       1 | `read` | `java.util.zip.ZipInputStream` |

##### `next` (`java.util.HashMap$ValueIterator`)

|      % | Samples | Caller                   | Location                                               |
| -----: | ------: | ------------------------ | ------------------------------------------------------ |
| 100.0% |       1 | `loadAllClassesFromJars` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `getInt` (`jdk.internal.misc.ScopedMemoryAccess`)

|      % | Samples | Caller | Location                    |
| -----: | ------: | ------ | --------------------------- |
| 100.0% |       1 | `get`  | `java.nio.DirectIntBufferU` |

##### `replace` (`java.lang.StringLatin1`)

|      % | Samples | Caller    | Location           |
| -----: | ------: | --------- | ------------------ |
| 100.0% |       1 | `replace` | `java.lang.String` |

##### `<init>` (`java.util.concurrent.locks.AbstractQueuedSynchronizer`)

|      % | Samples | Caller   | Location                                        |
| -----: | ------: | -------- | ----------------------------------------------- |
| 100.0% |       1 | `<init>` | `java.util.concurrent.locks.ReentrantLock$Sync` |

##### `generateInnerClass` (`java.lang.invoke.InnerClassLambdaMetafactory`)

|      % | Samples | Caller           | Location                                       |
| -----: | ------: | ---------------- | ---------------------------------------------- |
| 100.0% |       1 | `spinInnerClass` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `getPackageName` (`java.lang.Class`)

|      % | Samples | Caller            | Location                |
| -----: | ------: | ----------------- | ----------------------- |
| 100.0% |       1 | `postDefineClass` | `java.lang.ClassLoader` |

##### `copyOf` (`java.util.Arrays`)

|      % | Samples | Caller   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |       1 | `copyOf` | `java.util.Arrays` |

##### `size` (`java.util.Collections$SingletonSet`)

|      % | Samples | Caller             | Location                                                                                 |
| -----: | ------: | ------------------ | ---------------------------------------------------------------------------------------- |
| 100.0% |       1 | `reduceCandidates` | `org.jetbrains.kotlin.fir.resolve.calls.overloads.FirOverloadByLambdaReturnTypeResolver` |

##### `linkToTargetMethod` (`java.lang.invoke.LambdaForm$MH.0x000000e0015ec800`)

|      % | Samples | Caller                       | Location                                                                          |
| -----: | ------: | ---------------------------- | --------------------------------------------------------------------------------- |
| 100.0% |       1 | `setLazyPublishedVisibility` | `org.jetbrains.kotlin.fir.resolve.transformers.PublishedApiEffectiveVisibilityKt` |

##### `decompress` (`jdk.internal.jimage.ImageLocation`)

|      % | Samples | Caller          | Location                               |
| -----: | ------: | --------------- | -------------------------------------- |
| 100.0% |       1 | `getAttributes` | `jdk.internal.jimage.BasicImageReader` |

##### `get` (`java.util.concurrent.ConcurrentHashMap`)

|      % | Samples | Caller            | Location                             |
| -----: | ------: | ----------------- | ------------------------------------ |
| 100.0% |       1 | `getNoCheckStale` | `jdk.internal.util.ReferencedKeyMap` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                   | Location                                                |
| ----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 66.3% |   1,108 | `_pthread_start`                           | `<unknown>`                                             |
| 66.3% |   1,108 | `thread_start`                             | `<unknown>`                                             |
| 66.2% |   1,107 | `thread_native_entry`                      | `<unknown>`                                             |
| 66.1% |   1,106 | `Thread::call_run`                         | `<unknown>`                                             |
| 57.8% |     966 | `JavaThread::thread_main_inner`            | `<unknown>`                                             |
| 57.4% |     959 | `CompileBroker::compiler_thread_loop`      | `<unknown>`                                             |
| 54.8% |     916 | `CompileBroker::invoke_compiler_on_method` | `<unknown>`                                             |
| 37.3% |     624 | `C2Compiler::compile_method`               | `<unknown>`                                             |
| 37.1% |     621 | `Compile::Compile`                         | `<unknown>`                                             |
| 32.8% |     548 | `run`                                      | `org.jetbrains.kotlin.preloading.Preloader`             |
| 32.8% |     548 | `main`                                     | `org.jetbrains.kotlin.preloading.Preloader`             |
| 24.9% |     417 | `invokeImpl`                               | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 24.9% |     417 | `invoke`                                   | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 24.9% |     417 | `invoke`                                   | `java.lang.reflect.Method`                              |
| 24.9% |     416 | `main`                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 24.9% |     416 | `main`                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 24.9% |     416 | `invokeStatic`                             | `java.lang.invoke.LambdaForm$DMH.0x000000e001008000`    |
| 24.9% |     416 | `invoke`                                   | `java.lang.invoke.LambdaForm$MH.0x000000e001009400`     |
| 24.9% |     416 | `invokeExact_MT`                           | `java.lang.invoke.Invokers$Holder`                      |
| 24.8% |     415 | `doMain`                                   | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

#### Categories

##### Native

|     % | Samples | Function                                        | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 66.3% |   1,108 | `_pthread_start`                                | `<unknown>` |
| 66.3% |   1,108 | `thread_start`                                  | `<unknown>` |
| 66.2% |   1,107 | `thread_native_entry`                           | `<unknown>` |
| 66.1% |   1,106 | `Thread::call_run`                              | `<unknown>` |
| 57.8% |     966 | `JavaThread::thread_main_inner`                 | `<unknown>` |
| 16.3% |     272 | `Compiler::compile_method`                      | `<unknown>` |
|  6.8% |     114 | `WorkerThread::run`                             | `<unknown>` |
|  5.5% |      92 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |
|  5.1% |      86 | `Parse::Parse`                                  | `<unknown>` |
|  5.1% |      86 | `ParseGenerator::generate`                      | `<unknown>` |
|  5.0% |      84 | `Parse::do_all_blocks`                          | `<unknown>` |
|  5.0% |      83 | `Parse::do_one_block`                           | `<unknown>` |
|  4.8% |      80 | `IRScope::IRScope`                              | `<unknown>` |
|  4.8% |      80 | `IR::IR`                                        | `<unknown>` |
|  4.6% |      77 | `__psynch_mutexwait`                            | `<unknown>` |
|  4.6% |      77 | `_pthread_mutex_firstfit_lock_slow`             | `<unknown>` |
|  4.4% |      73 | `jvm_define_class_common`                       | `<unknown>` |
|  4.4% |      73 | `JVM_DefineClassWithSource`                     | `<unknown>` |
|  4.4% |      73 | `Java_java_lang_ClassLoader_defineClass1`       | `<unknown>` |
|  4.3% |      72 | `SystemDictionary::resolve_class_from_stream`   | `<unknown>` |

##### Compiler

|     % | Samples | Function                                    | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 57.4% |     959 | `CompileBroker::compiler_thread_loop`       | `<unknown>` |
| 54.8% |     916 | `CompileBroker::invoke_compiler_on_method`  | `<unknown>` |
| 37.3% |     624 | `C2Compiler::compile_method`                | `<unknown>` |
| 37.1% |     621 | `Compile::Compile`                          | `<unknown>` |
| 18.7% |     313 | `Compile::Code_Gen`                         | `<unknown>` |
| 16.2% |     271 | `Compilation::Compilation`                  | `<unknown>` |
| 16.1% |     270 | `Compilation::compile_method`               | `<unknown>` |
| 15.0% |     250 | `Compilation::compile_java_method`          | `<unknown>` |
| 12.2% |     204 | `Compile::Optimize`                         | `<unknown>` |
|  9.8% |     164 | `PhaseChaitin::Register_Allocate`           | `<unknown>` |
|  6.9% |     115 | `PhaseIdealLoop::optimize`                  | `<unknown>` |
|  6.1% |     102 | `Compilation::build_hir`                    | `<unknown>` |
|  6.0% |     100 | `Compilation::emit_lir`                     | `<unknown>` |
|  5.9% |      98 | `PhaseIdealLoop::PhaseIdealLoop`            | `<unknown>` |
|  5.8% |      97 | `PhaseIdealLoop::build_and_optimize`        | `<unknown>` |
|  5.0% |      83 | `LinearScan::do_linear_scan`                | `<unknown>` |
|  4.8% |      80 | `GraphBuilder::GraphBuilder`                | `<unknown>` |
|  4.5% |      75 | `GraphBuilder::iterate_all_blocks`          | `<unknown>` |
|  4.4% |      73 | `GraphBuilder::iterate_bytecodes_for_block` | `<unknown>` |
|  3.6% |      61 | `GraphBuilder::invoke`                      | `<unknown>` |

##### Ours

|     % | Samples | Function                                   | Location                                                         |
| ----: | ------: | ------------------------------------------ | ---------------------------------------------------------------- |
| 32.8% |     548 | `run`                                      | `org.jetbrains.kotlin.preloading.Preloader`                      |
| 32.8% |     548 | `main`                                     | `org.jetbrains.kotlin.preloading.Preloader`                      |
| 24.9% |     416 | `main`                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`           |
| 24.9% |     416 | `main`                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                     |
| 24.8% |     415 | `doMain`                                   | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`          |
| 24.8% |     414 | `doMainNoExit$default`                     | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`          |
| 24.7% |     413 | `exec`                                     | `org.jetbrains.kotlin.cli.common.CLICompiler`                    |
| 24.7% |     413 | `doMainNoExit`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`          |
| 23.6% |     394 | `doExecutePhased`                          | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                     |
| 23.6% |     394 | `execImpl`                                 | `org.jetbrains.kotlin.cli.common.CLICompiler`                    |
| 23.4% |     392 | `runPhasedPipeline`                        | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`          |
| 23.4% |     392 | `executeAndReturnPipeLineArtifact`         | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`          |
| 23.4% |     392 | `executeAndReturnPipeLineArtifact$default` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`          |
| 23.4% |     392 | `execute`                                  | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`          |
| 23.2% |     388 | `phaseBody`                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
| 23.2% |     388 | `invoke`                                   | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`          |
| 23.2% |     388 | `invoke`                                   | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase`      |
| 23.2% |     388 | `invokeToplevel`                           | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`             |
| 16.4% |     274 | `executePhase`                             | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |
| 11.4% |     191 | `resolveAndCheckFir`                       | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`                   |

##### Standard library

|     % | Samples | Function            | Location                                                    |
| ----: | ------: | ------------------- | ----------------------------------------------------------- |
| 24.9% |     417 | `invokeImpl`        | `jdk.internal.reflect.DirectMethodHandleAccessor`           |
| 24.9% |     417 | `invoke`            | `jdk.internal.reflect.DirectMethodHandleAccessor`           |
| 24.9% |     417 | `invoke`            | `java.lang.reflect.Method`                                  |
| 24.9% |     416 | `invokeStatic`      | `java.lang.invoke.LambdaForm$DMH.0x000000e001008000`        |
| 24.9% |     416 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x000000e001009400`         |
| 24.9% |     416 | `invokeExact_MT`    | `java.lang.invoke.Invokers$Holder`                          |
|  5.8% |      97 | `read`              | `java.util.zip.InflaterInputStream`                         |
|  5.8% |      97 | `read`              | `java.util.zip.ZipInputStream`                              |
|  5.8% |      97 | `read`              | `java.io.FilterInputStream`                                 |
|  5.7% |      95 | `inflate`           | `java.util.zip.Inflater`                                    |
|  5.6% |      93 | `inflateBytesBytes` | `java.util.zip.Inflater`                                    |
|  5.2% |      87 | `loadClass`         | `java.lang.ClassLoader`                                     |
|  4.6% |      77 | `defineClass`       | `java.lang.ClassLoader`                                     |
|  4.5% |      75 | `defineClass1`      | `java.lang.ClassLoader`                                     |
|  3.1% |      52 | `resumeWith`        | `kotlin.coroutines.jvm.internal.BaseContinuationImpl`       |
|  1.6% |      26 | `getValue`          | `kotlin.SynchronizedLazyImpl`                               |
|  1.0% |      17 | `getValue`          | `kotlin.UnsafeLazyImpl`                                     |
|  1.0% |      16 | `getValue`          | `kotlin.SafePublicationLazyImpl`                            |
|  0.7% |      12 | `invoke`            | `kotlin.reflect.jvm.internal.ReflectProperties$LazySoftVal` |
|  0.7% |      12 | `getValue`          | `kotlin.reflect.jvm.internal.ReflectProperties$Val`         |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_pthread_start` (`<unknown>`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 99.9% |   1,107 | `thread_native_entry` | `<unknown>` |
|  0.1% |       1 | `ThreadJavaMain`      | `<unknown>` |

##### `thread_start` (`<unknown>`)

|      % | Samples | Callee           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |   1,108 | `_pthread_start` | `<unknown>` |

##### `thread_native_entry` (`<unknown>`)

|     % | Samples | Callee                                  | Location    |
| ----: | ------: | --------------------------------------- | ----------- |
| 99.9% |   1,106 | `Thread::call_run`                      | `<unknown>` |
|  0.1% |       1 | `Monitor::wait_without_safepoint_check` | `<unknown>` |

##### `Thread::call_run` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 87.3% |     966 | `JavaThread::thread_main_inner` | `<unknown>` |
| 10.3% |     114 | `WorkerThread::run`             | `<unknown>` |
|  1.6% |      18 | `VMThread::run`                 | `<unknown>` |
|  0.5% |       5 | `WatcherThread::run`            | `<unknown>` |
|  0.3% |       3 | `ConcurrentGCThread::run`       | `<unknown>` |

##### `JavaThread::thread_main_inner` (`<unknown>`)

|     % | Samples | Callee                                                   | Location    |
| ----: | ------: | -------------------------------------------------------- | ----------- |
| 99.3% |     959 | `CompileBroker::compiler_thread_loop`                    | `<unknown>` |
|  0.6% |       6 | `ServiceThread::service_thread_entry`                    | `<unknown>` |
|  0.1% |       1 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 95.5% |     916 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
|  4.3% |      41 | `CompileQueue::get`                        | `<unknown>` |
|  0.1% |       1 | `CompileTaskWrapper::~CompileTaskWrapper`  | `<unknown>` |
|  0.1% |       1 | `CompileBroker::init_compiler_runtime`     | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 68.1% |     624 | `C2Compiler::compile_method`    | `<unknown>` |
| 29.7% |     272 | `Compiler::compile_method`      | `<unknown>` |
|  0.7% |       6 | `CompilationLog::log_compile`   | `<unknown>` |
|  0.5% |       5 | `ciEnv::ciEnv`                  | `<unknown>` |
|  0.4% |       4 | `ciEnv::get_method_from_handle` | `<unknown>` |

##### `C2Compiler::compile_method` (`<unknown>`)

|     % | Samples | Callee              | Location    |
| ----: | ------: | ------------------- | ----------- |
| 99.4% |     620 | `Compile::Compile`  | `<unknown>` |
|  0.3% |       2 | `Chunk::next_chop`  | `<unknown>` |
|  0.3% |       2 | `Compile::~Compile` | `<unknown>` |

##### `Compile::Compile` (`<unknown>`)

|     % | Samples | Callee                                   | Location    |
| ----: | ------: | ---------------------------------------- | ----------- |
| 50.4% |     313 | `Compile::Code_Gen`                      | `<unknown>` |
| 32.9% |     204 | `Compile::Optimize`                      | `<unknown>` |
| 13.5% |      84 | `ParseGenerator::generate`               | `<unknown>` |
|  2.1% |      13 | `PhaseRemoveUseless::PhaseRemoveUseless` | `<unknown>` |
|  0.3% |       2 | `CallGenerator::for_inline`              | `<unknown>` |

##### `run` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % | Samples | Callee                            | Location                                               |
| ----: | ------: | --------------------------------- | ------------------------------------------------------ |
| 75.9% |     416 | `invoke`                          | `java.lang.reflect.Method`                             |
| 23.7% |     130 | `preloadClasses`                  | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|  0.2% |       1 | `InterpreterRuntime::resolve_ldc` | `<unknown>`                                            |
|  0.2% |       1 | `stream`                          | `java.util.Collection`                                 |

##### `main` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Callee | Location                                    |
| -----: | ------: | ------ | ------------------------------------------- |
| 100.0% |     548 | `run`  | `org.jetbrains.kotlin.preloading.Preloader` |

##### `invokeImpl` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|     % | Samples | Callee           | Location                               |
| ----: | ------: | ---------------- | -------------------------------------- |
| 99.8% |     416 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder`     |
|  0.2% |       1 | `linkMethod`     | `java.lang.invoke.MethodHandleNatives` |

##### `invoke` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee       | Location                                          |
| -----: | ------: | ------------ | ------------------------------------------------- |
| 100.0% |     417 | `invokeImpl` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke` (`java.lang.reflect.Method`)

|      % | Samples | Callee   | Location                                          |
| -----: | ------: | -------- | ------------------------------------------------- |
| 100.0% |     417 | `invoke` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `main` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|     % | Samples | Callee   | Location                                                |
| ----: | ------: | -------- | ------------------------------------------------------- |
| 99.8% |     415 | `doMain` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.2% |       1 | `<init>` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee | Location                                               |
| -----: | ------: | ------ | ------------------------------------------------------ |
| 100.0% |     416 | `main` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `invokeStatic` (`java.lang.invoke.LambdaForm$DMH.0x000000e001008000`)

|      % | Samples | Callee | Location                                     |
| -----: | ------: | ------ | -------------------------------------------- |
| 100.0% |     416 | `main` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x000000e001009400`)

|      % | Samples | Callee         | Location                                             |
| -----: | ------: | -------------- | ---------------------------------------------------- |
| 100.0% |     416 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x000000e001008000` |

##### `invokeExact_MT` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee         | Location                                             |
| -----: | ------: | -------------- | ---------------------------------------------------- |
| 100.0% |     416 | `invoke`       | `java.lang.invoke.LambdaForm$MH.0x000000e001009400`  |
|   1.7% |       7 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x000000e001230000` |
|   0.5% |       2 | `invokeStatic` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `doMain` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % | Samples | Callee                 | Location                                                   |
| ----: | ------: | ---------------------- | ---------------------------------------------------------- |
| 99.8% |     414 | `doMainNoExit$default` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`    |
|  0.2% |       1 | `getValue`             | `org.jetbrains.kotlin.cli.common.CompilerSystemProperties` |

##### `doMainNoExit$default` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % | Samples | Callee                   | Location                                                |
| ----: | ------: | ------------------------ | ------------------------------------------------------- |
| 99.8% |     413 | `doMainNoExit`           | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.2% |       1 | `defaultMessageRenderer` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                              | Location                                                                |
| -----: | ------: | ----------------------------------- | ----------------------------------------------------------------------- |
| 100.0% |     413 | `exec`                              | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|  95.4% |     394 | `execImpl`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|   3.1% |      13 | `<clinit>`                          | `org.jetbrains.kotlin.cli.common.ArgumentsKt`                           |
|   1.2% |       5 | `parseCommandLineArguments$default` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |
|   0.2% |       1 | `createArguments`                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                            |

##### `doMainNoExit` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee | Location                                      |
| -----: | ------: | ------ | --------------------------------------------- |
| 100.0% |     413 | `exec` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doExecutePhased` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee                         | Location                                                |
| -----: | ------: | ------------------------------ | ------------------------------------------------------- |
| 100.0% |     394 | `doExecutePhased`              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
|  99.5% |     392 | `execute`                      | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|   0.5% |       2 | `getDefaultPerformanceManager` | `org.jetbrains.kotlin.cli.common.CLICompiler`           |

##### `execImpl` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee            | Location                                     |
| -----: | ------: | ----------------- | -------------------------------------------- |
| 100.0% |     394 | `doExecutePhased` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `runPhasedPipeline` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                     | Location                                                                    |
| ----: | ------: | -------------------------- | --------------------------------------------------------------------------- |
| 99.0% |     388 | `invokeToplevel`           | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
|  0.5% |       2 | `reportToMessageCollector` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |
|  0.5% |       2 | `createCompoundPhase`      | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmCliPipeline`                      |

##### `executeAndReturnPipeLineArtifact` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee              | Location                                                |
| -----: | ------: | ------------------- | ------------------------------------------------------- |
| 100.0% |     392 | `runPhasedPipeline` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                             | Location                                                |
| -----: | ------: | ---------------------------------- | ------------------------------------------------------- |
| 100.0% |     392 | `executeAndReturnPipeLineArtifact` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                     | Location                                                |
| -----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 100.0% |     392 | `executeAndReturnPipeLineArtifact$default` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `phaseBody` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Callee         | Location                                                              |
| -----: | ------: | -------------- | --------------------------------------------------------------------- |
| 100.0% |     388 | `phaseBody`    | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                     |
|  70.6% |     274 | `executePhase` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
|  20.6% |      80 | `executePhase` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
|   7.2% |      28 | `executePhase` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
|   1.3% |       5 | `executePhase` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |

##### `invoke` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Callee      | Location                                                         |
| -----: | ------: | ----------- | ---------------------------------------------------------------- |
| 100.0% |     388 | `phaseBody` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
|   4.6% |      18 | `phaseBody` | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |
|   1.3% |       5 | `phaseBody` | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |
|   0.3% |       1 | `runBefore` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`          |

##### `invoke` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`)

|      % | Samples | Callee   | Location                                                |
| -----: | ------: | -------- | ------------------------------------------------------- |
| 100.0% |     388 | `invoke` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invokeToplevel` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`)

|      % | Samples | Callee   | Location                                                    |
| -----: | ------: | -------- | ----------------------------------------------------------- |
| 100.0% |     388 | `invoke` | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase` |

##### `Compile::Code_Gen` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 52.4% |     164 | `PhaseChaitin::Register_Allocate` | `<unknown>` |
| 15.3% |      48 | `PhaseCFG::do_global_code_motion` | `<unknown>` |
| 15.0% |      47 | `PhaseOutput::Output`             | `<unknown>` |
| 12.5% |      39 | `Matcher::match`                  | `<unknown>` |
|  1.9% |       6 | `PhaseOutput::install_code`       | `<unknown>` |

##### `executePhase` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`)

|      % | Samples | Callee                        | Location                                                         |
| -----: | ------: | ----------------------------- | ---------------------------------------------------------------- |
| 100.0% |     274 | `executePhase`                | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |
|  69.7% |     191 | `resolveAndCheckFir`          | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`                   |
|  11.7% |      32 | `createEnvironmentAndSources` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |
|   8.8% |      24 | `prepareJvmSessions`          | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |
|   7.3% |      20 | `buildFirViaLightTree`        | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`                   |

##### `Compiler::compile_method` (`<unknown>`)

|     % | Samples | Callee                      | Location    |
| ----: | ------: | --------------------------- | ----------- |
| 99.6% |     271 | `Compilation::Compilation`  | `<unknown>` |
|  0.4% |       1 | `Compilation::~Compilation` | `<unknown>` |

##### `Compilation::Compilation` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 99.6% |     270 | `Compilation::compile_method`     | `<unknown>` |
|  0.4% |       1 | `ciMethodData::set_would_profile` | `<unknown>` |

##### `Compilation::compile_method` (`<unknown>`)

|     % | Samples | Callee                                               | Location    |
| ----: | ------: | ---------------------------------------------------- | ----------- |
| 92.6% |     250 | `Compilation::compile_java_method`                   | `<unknown>` |
|  6.3% |      17 | `ciEnv::register_method`                             | `<unknown>` |
|  0.7% |       2 | `Dependencies::assert_common_1`                      | `<unknown>` |
|  0.4% |       1 | `DebugInformationRecorder::DebugInformationRecorder` | `<unknown>` |

##### `Compilation::compile_java_method` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 40.8% |     102 | `Compilation::build_hir`       | `<unknown>` |
| 40.0% |     100 | `Compilation::emit_lir`        | `<unknown>` |
| 17.6% |      44 | `Compilation::emit_code_body`  | `<unknown>` |
|  0.8% |       2 | `ciMethod::ensure_method_data` | `<unknown>` |
|  0.4% |       1 | `LIR_Assembler::LIR_Assembler` | `<unknown>` |

##### `Compile::Optimize` (`<unknown>`)

|     % | Samples | Callee                     | Location    |
| ----: | ------: | -------------------------- | ----------- |
| 33.8% |      69 | `PhaseIdealLoop::optimize` | `<unknown>` |
| 23.0% |      47 | `Compile::optimize_loops`  | `<unknown>` |
| 14.7% |      30 | `PhaseIterGVN::optimize`   | `<unknown>` |
|  7.4% |      15 | `PhaseCCP::PhaseCCP`       | `<unknown>` |
|  4.9% |      10 | `PhaseCCP::do_transform`   | `<unknown>` |

##### `resolveAndCheckFir` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`)

|     % | Samples | Callee          | Location                                      |
| ----: | ------: | --------------- | --------------------------------------------- |
| 77.5% |     148 | `runResolution` | `org.jetbrains.kotlin.fir.pipeline.AnalyseKt` |
| 22.5% |      43 | `runCheckers`   | `org.jetbrains.kotlin.fir.pipeline.AnalyseKt` |

##### `PhaseChaitin::Register_Allocate` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 17.1% |      28 | `PhaseChaitin::build_ifg_physical`         | `<unknown>` |
| 16.5% |      27 | `PhaseLive::compute`                       | `<unknown>` |
| 15.9% |      26 | `PhaseChaitin::Split`                      | `<unknown>` |
| 13.4% |      22 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |
| 11.6% |      19 | `PhaseChaitin::gather_lrg_masks`           | `<unknown>` |

##### `PhaseIdealLoop::optimize` (`<unknown>`)

|     % | Samples | Callee                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 85.2% |      98 | `PhaseIdealLoop::PhaseIdealLoop` | `<unknown>` |
| 13.9% |      16 | `PhaseIterGVN::optimize`         | `<unknown>` |
|  0.9% |       1 | `Chunk::next_chop`               | `<unknown>` |

##### `WorkerThread::run` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 47.4% |      54 | `G1EvacuateRegionsBaseTask::work` | `<unknown>` |
| 25.4% |      29 | `G1RebuildRSAndScrubTask::work`   | `<unknown>` |
| 12.3% |      14 | `G1CMConcurrentMarkingTask::work` | `<unknown>` |
|  7.9% |       9 | `semaphore_wait_trap`             | `<unknown>` |
|  3.5% |       4 | `G1ClearBitMapTask::work`         | `<unknown>` |

##### `Compilation::build_hir` (`<unknown>`)

|     % | Samples | Callee                                       | Location    |
| ----: | ------: | -------------------------------------------- | ----------- |
| 78.4% |      80 | `IR::IR`                                     | `<unknown>` |
|  8.8% |       9 | `GlobalValueNumbering::GlobalValueNumbering` | `<unknown>` |
|  3.9% |       4 | `IR::compute_use_counts`                     | `<unknown>` |
|  2.9% |       3 | `IR::compute_code`                           | `<unknown>` |
|  2.9% |       3 | `IR::eliminate_null_checks`                  | `<unknown>` |

##### `Compilation::emit_lir` (`<unknown>`)

|     % | Samples | Callee                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 83.0% |      83 | `LinearScan::do_linear_scan`     | `<unknown>` |
| 16.0% |      16 | `BlockList::iterate_forward`     | `<unknown>` |
|  1.0% |       1 | `ControlFlowOptimizer::optimize` | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 99.0% |      97 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |
|  1.0% |       1 | `_platform_bzero`                    | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 28.9% |      28 | `PhaseIdealLoop::build_loop_late`      | `<unknown>` |
| 20.6% |      20 | `PhaseIdealLoop::split_if_with_blocks` | `<unknown>` |
| 15.5% |      15 | `PhaseIdealLoop::Dominators`           | `<unknown>` |
|  9.3% |       9 | `PhaseIdealLoop::build_loop_tree`      | `<unknown>` |
|  8.2% |       8 | `PhaseIdealLoop::build_loop_early`     | `<unknown>` |

##### `read` (`java.util.zip.InflaterInputStream`)

|     % | Samples | Callee    | Location                                           |
| ----: | ------: | --------- | -------------------------------------------------- |
| 93.8% |      91 | `inflate` | `java.util.zip.Inflater`                           |
|  4.1% |       4 | `fill`    | `java.util.zip.InflaterInputStream`                |
|  1.0% |       1 | `fill`    | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `read` (`java.util.zip.ZipInputStream`)

|     % | Samples | Callee   | Location                            |
| ----: | ------: | -------- | ----------------------------------- |
| 96.9% |      94 | `read`   | `java.util.zip.InflaterInputStream` |
|  3.1% |       3 | `update` | `java.util.zip.CRC32`               |

##### `read` (`java.io.FilterInputStream`)

|      % | Samples | Callee | Location                       |
| -----: | ------: | ------ | ------------------------------ |
| 100.0% |      97 | `read` | `java.util.zip.ZipInputStream` |
|   3.1% |       3 | `read` | `java.io.BufferedInputStream`  |

##### `inflate` (`java.util.zip.Inflater`)

|     % | Samples | Callee              | Location                 |
| ----: | ------: | ------------------- | ------------------------ |
| 97.9% |      93 | `inflateBytesBytes` | `java.util.zip.Inflater` |
|  4.2% |       4 | `inflate`           | `java.util.zip.Inflater` |

##### `inflateBytesBytes` (`java.util.zip.Inflater`)

|     % | Samples | Callee                                           | Location    |
| ----: | ------: | ------------------------------------------------ | ----------- |
| 98.9% |      92 | `Java_java_util_zip_Inflater_inflateBytesBytes`  | `<unknown>` |
|  1.1% |       1 | `InterpreterRuntime::frequency_counter_overflow` | `<unknown>` |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`<unknown>`)

|     % | Samples | Callee                              | Location    |
| ----: | ------: | ----------------------------------- | ----------- |
| 76.1% |      70 | `inflate_fast`                      | `<unknown>` |
| 19.6% |      18 | `inflate`                           | `<unknown>` |
|  2.2% |       2 | `jni_ReleasePrimitiveArrayCritical` | `<unknown>` |
|  2.2% |       2 | `jni_GetPrimitiveArrayCritical`     | `<unknown>` |

##### `loadClass` (`java.lang.ClassLoader`)

|     % | Samples | Callee                     | Location                                                 |
| ----: | ------: | -------------------------- | -------------------------------------------------------- |
| 89.7% |      78 | `findClass`                | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  3.4% |       3 | `findBootstrapClassOrNull` | `java.lang.ClassLoader`                                  |
|  3.4% |       3 | `loadClass`                | `jdk.internal.jrtfs.JrtFileSystemProvider$JrtFsLoader`   |
|  2.3% |       2 | `loadClass`                | `java.lang.ClassLoader`                                  |
|  2.3% |       2 | `loadClass`                | `jdk.internal.loader.ClassLoaders$AppClassLoader`        |

##### `Parse::Parse` (`<unknown>`)

|     % | Samples | Callee                    | Location    |
| ----: | ------: | ------------------------- | ----------- |
| 97.7% |      84 | `Parse::do_all_blocks`    | `<unknown>` |
|  4.7% |       4 | `Parse::do_exits`         | `<unknown>` |
|  2.3% |       2 | `ciMethod::method_data`   | `<unknown>` |
|  1.2% |       1 | `GraphKit::set_map_clone` | `<unknown>` |
|  1.2% |       1 | `ciMethod::has_loops`     | `<unknown>` |

##### `ParseGenerator::generate` (`<unknown>`)

|      % | Samples | Callee         | Location    |
| -----: | ------: | -------------- | ----------- |
| 100.0% |      86 | `Parse::Parse` | `<unknown>` |

##### `Parse::do_all_blocks` (`<unknown>`)

|     % | Samples | Callee                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 98.8% |      83 | `Parse::do_one_block`            | `<unknown>` |
|  3.6% |       3 | `Parse::merge_common`            | `<unknown>` |
|  1.2% |       1 | `JVMState::clone_shallow`        | `<unknown>` |
|  1.2% |       1 | `GraphKit::add_parse_predicates` | `<unknown>` |

##### `Parse::do_one_block` (`<unknown>`)

|     % | Samples | Callee                   | Location    |
| ----: | ------: | ------------------------ | ----------- |
| 83.1% |      69 | `Parse::do_call`         | `<unknown>` |
| 12.0% |      10 | `Parse::do_field_access` | `<unknown>` |
| 10.8% |       9 | `Parse::do_if`           | `<unknown>` |
|  8.4% |       7 | `Parse::do_one_bytecode` | `<unknown>` |
|  4.8% |       4 | `Parse::array_load`      | `<unknown>` |

##### `LinearScan::do_linear_scan` (`<unknown>`)

|     % | Samples | Callee                                | Location    |
| ----: | ------: | ------------------------------------- | ----------- |
| 48.2% |      40 | `LinearScan::allocate_registers`      | `<unknown>` |
| 22.9% |      19 | `LinearScan::assign_reg_num`          | `<unknown>` |
|  7.2% |       6 | `LinearScan::build_intervals`         | `<unknown>` |
|  7.2% |       6 | `LinearScan::compute_local_live_sets` | `<unknown>` |
|  4.8% |       4 | `LinearScan::resolve_data_flow`       | `<unknown>` |

##### `IRScope::IRScope` (`<unknown>`)

|      % | Samples | Callee                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |      80 | `GraphBuilder::GraphBuilder` | `<unknown>` |
|   1.3% |       1 | `XHandlers::XHandlers`       | `<unknown>` |

##### `IR::IR` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |      80 | `IRScope::IRScope` | `<unknown>` |

##### `GraphBuilder::GraphBuilder` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 93.8% |      75 | `GraphBuilder::iterate_all_blocks`   | `<unknown>` |
|  3.8% |       3 | `BlockBegin::iterate_preorder`       | `<unknown>` |
|  2.5% |       2 | `BlockListBuilder::BlockListBuilder` | `<unknown>` |

##### `_pthread_mutex_firstfit_lock_slow` (`<unknown>`)

|      % | Samples | Callee               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |      77 | `__psynch_mutexwait` | `<unknown>` |

##### `defineClass` (`java.lang.ClassLoader`)

|      % | Samples | Callee            | Location                |
| -----: | ------: | ----------------- | ----------------------- |
| 100.0% |      77 | `defineClass`     | `java.lang.ClassLoader` |
|  97.4% |      75 | `defineClass1`    | `java.lang.ClassLoader` |
|   2.6% |       2 | `postDefineClass` | `java.lang.ClassLoader` |
|   1.3% |       1 | `preDefineClass`  | `java.lang.ClassLoader` |

##### `GraphBuilder::iterate_all_blocks` (`<unknown>`)

|     % | Samples | Callee                                      | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 97.3% |      73 | `GraphBuilder::iterate_bytecodes_for_block` | `<unknown>` |
|  2.7% |       2 | `ValueMap::kill_all`                        | `<unknown>` |

##### `defineClass1` (`java.lang.ClassLoader`)

|     % | Samples | Callee                                    | Location                                                 |
| ----: | ------: | ----------------------------------------- | -------------------------------------------------------- |
| 97.3% |      73 | `Java_java_lang_ClassLoader_defineClass1` | `<unknown>`                                              |
| 14.7% |      11 | `loadClass`                               | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `jvm_define_class_common` (`<unknown>`)

|     % | Samples | Callee                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 98.6% |      72 | `SystemDictionary::resolve_class_from_stream` | `<unknown>` |
|  1.4% |       1 | `SymbolTable::new_symbol`                     | `<unknown>` |

##### `JVM_DefineClassWithSource` (`<unknown>`)

|      % | Samples | Callee                    | Location    |
| -----: | ------: | ------------------------- | ----------- |
| 100.0% |      73 | `jvm_define_class_common` | `<unknown>` |

##### `Java_java_lang_ClassLoader_defineClass1` (`<unknown>`)

|      % | Samples | Callee                      | Location    |
| -----: | ------: | --------------------------- | ----------- |
| 100.0% |      73 | `JVM_DefineClassWithSource` | `<unknown>` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`<unknown>`)

|     % | Samples | Callee                        | Location    |
| ----: | ------: | ----------------------------- | ----------- |
| 83.6% |      61 | `GraphBuilder::invoke`        | `<unknown>` |
| 16.4% |      12 | `GraphBuilder::access_field`  | `<unknown>` |
|  4.1% |       3 | `BlockBegin::try_merge`       | `<unknown>` |
|  2.7% |       2 | `GraphBuilder::load_constant` | `<unknown>` |
|  1.4% |       1 | `Instruction::can_trap`       | `<unknown>` |

##### `SystemDictionary::resolve_class_from_stream` (`<unknown>`)

|     % | Samples | Callee                                    | Location    |
| ----: | ------: | ----------------------------------------- | ----------- |
| 84.7% |      61 | `KlassFactory::create_from_stream`        | `<unknown>` |
| 15.3% |      11 | `SystemDictionary::define_instance_class` | `<unknown>` |

##### `GraphBuilder::invoke` (`<unknown>`)

|     % | Samples | Callee                                         | Location    |
| ----: | ------: | ---------------------------------------------- | ----------- |
| 78.7% |      48 | `GraphBuilder::try_inline`                     | `<unknown>` |
| 32.8% |      20 | `ciBytecodeStream::get_method`                 | `<unknown>` |
|  4.9% |       3 | `ciMethod::find_monomorphic_target`            | `<unknown>` |
|  1.6% |       1 | `ciBytecodeStream::get_declared_method_holder` | `<unknown>` |
|  1.6% |       1 | `Instruction::exact_type`                      | `<unknown>` |

##### `resumeWith` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % | Samples | Callee          | Location                                                                                                      |
| ----: | ------: | --------------- | ------------------------------------------------------------------------------------------------------------- |
| 75.0% |      39 | `invokeSuspend` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`                         |
| 44.2% |      23 | `invokeSuspend` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                      |
|  9.6% |       5 | `invokeSuspend` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2`                      |
|  3.8% |       2 | `invokeSuspend` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension$enqueueResolverTasksForInvoke$3` |
|  3.8% |       2 | `invokeSuspend` | `com.intellij.ide.plugins.PluginDescriptorLoader$loadForCoreEnv$1`                                            |

##### `getValue` (`kotlin.SynchronizedLazyImpl`)

|     % | Samples | Callee   | Location                                                                                         |
| ----: | ------: | -------- | ------------------------------------------------------------------------------------------------ |
| 23.1% |       6 | `invoke` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x000000e00160f940`             |
| 15.4% |       4 | `invoke` | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile$$Lambda.0x000000e001390000`             |
| 11.5% |       3 | `invoke` | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$$Lambda.0x000000e001756758`                       |
|  7.7% |       2 | `invoke` | `org.jetbrains.kotlin.diagnostics.KtDiagnosticFactoryToRendererMapKt$$Lambda.0x000000e001141e48` |
|  7.7% |       2 | `invoke` | `org.jetbrains.kotlin.cli.common.CLICompiler$$Lambda.0x000000e00100a000`                         |

##### `getValue` (`kotlin.UnsafeLazyImpl`)

|     % | Samples | Callee   | Location                                                                                                                                                   |
| ----: | ------: | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 47.1% |       8 | `invoke` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver$$Lambda.0x000000e001682b10`                                                                        |
| 11.8% |       2 | `invoke` | `org.jetbrains.kotlin.fir.analysis.cfa.util.PropertyInitializationInfoData$$Lambda.0x000000e001718c88`                                                     |
|  5.9% |       1 | `invoke` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformer$BodyResolveTransformerComponents$$Lambda.0x000000e0015953e0` |
|  5.9% |       1 | `invoke` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformer$BodyResolveTransformerComponents$$Lambda.0x000000e001597d38` |
|  5.9% |       1 | `invoke` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate$$Lambda.0x000000e0016704a0`                                                                    |

##### `getValue` (`kotlin.SafePublicationLazyImpl`)

|     % | Samples | Callee   | Location                                                                                          |
| ----: | ------: | -------- | ------------------------------------------------------------------------------------------------- |
| 75.0% |      12 | `invoke` | `kotlin.reflect.jvm.internal.DescriptorKProperty$$Lambda$0`                                       |
| 12.5% |       2 | `invoke` | `org.jetbrains.kotlin.fir.java.FirLazyJavaDeclarationList$$Lambda.0x000000e00160f098`             |
| 12.5% |       2 | `invoke` | `org.jetbrains.kotlin.fir.scopes.impl.FirClassDeclaredMemberScopeImpl$$Lambda.0x000000e001627d80` |
|  6.3% |       1 | `invoke` | `org.jetbrains.kotlin.fir.scopes.impl.AbstractFirUseSiteMemberScope$$Lambda.0x000000e00162f928`   |
|  6.3% |       1 | `invoke` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x000000e00160fdb0`              |

##### `invoke` (`kotlin.reflect.jvm.internal.ReflectProperties$LazySoftVal`)

|      % | Samples | Callee   | Location                                                               |
| -----: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% |      12 | `invoke` | `kotlin.reflect.jvm.internal.DescriptorKProperty$$Lambda$1`            |
|  50.0% |       6 | `invoke` | `kotlin.reflect.jvm.internal.KClassImpl$Data$$Lambda$1`                |
|  33.3% |       4 | `invoke` | `kotlin.reflect.jvm.internal.KDeclarationContainerImpl$Data$$Lambda$0` |

##### `getValue` (`kotlin.reflect.jvm.internal.ReflectProperties$Val`)

|      % | Samples | Callee   | Location                                                    |
| -----: | ------: | -------- | ----------------------------------------------------------- |
| 100.0% |      12 | `invoke` | `kotlin.reflect.jvm.internal.ReflectProperties$LazySoftVal` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 3.6% |      61 | `inflate_fast` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes` (`java.util.zip.Inflater`) ← `inflate` ← `read` (`java.util.zip.InflaterInputStream`) ← `read` (`java.util.zip.ZipInputStream`) ← `read` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses` ← `run` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main`                                                                                                                                                        |
| 2.0% |      33 | `__psynch_cvwait` ← `PlatformMonitor::wait` ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                             |
| 1.0% |      16 | `PhaseChaitin::Split` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                |
| 1.0% |      16 | `PhaseChaitin::build_ifg_physical` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                   |
| 0.9% |      15 | `PhaseChaitin::elide_copy` ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                              |
| 0.8% |      13 | `LinearScanWalker::alloc_free_reg` ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                   |
| 0.7% |      11 | `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                 |
| 0.7% |      11 | `PhaseChaitin::gather_lrg_masks` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                     |
| 0.5% |       9 | `semaphore_wait_trap` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.4% |       7 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` ← `HeapRegionManager::par_iterate` ← `G1RebuildRSAndScrubTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                     |
| 0.4% |       7 | `__psynch_cvwait` ← `PlatformMonitor::wait` ← `Monitor::wait_without_safepoint_check` ← `TaskTerminator::offer_termination` ← `G1ParEvacuateFollowersClosure::offer_termination` ← `G1ParEvacuateFollowersClosure::do_void` ← `G1EvacuateRegionsTask::evacuate_live_objects` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                    |
| 0.4% |       7 | `LinearScanWalker::free_collect_inactive_fixed` ← `LinearScanWalker::alloc_free_reg` ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start` |
| 0.4% |       7 | `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                 |
| 0.4% |       7 | `PhaseCFG::partial_latency_of_defs` ← `PhaseCFG::global_code_motion` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                 |
| 0.4% |       6 | `inflate_table` ← `inflate` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes` (`java.util.zip.Inflater`) ← `inflate` ← `read` (`java.util.zip.InflaterInputStream`) ← `read` (`java.util.zip.ZipInputStream`) ← `read` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses` ← `run` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main`                                                                                                                                           |
| 0.4% |       6 | `getNode` (`java.util.HashMap`) ← `get` ← `loadAllClassesFromJars` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses` ← `run` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main`                                                                                                                                                                                                                                                                                                                                                                              |
| 0.4% |       6 | `IntervalWalker::walk_to` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                   |
| 0.4% |       6 | `inflate_fast` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes` (`java.util.zip.Inflater`) ← `inflate` ← `read` (`java.util.zip.InflaterInputStream`) ← `read` (`java.util.zip.ZipInputStream`) ← `read` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses` ← `preloadClasses` ← `run` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main`                                                                                                                                     |
| 0.4% |       6 | `LinearScan::assign_reg_num` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                               |
| 0.4% |       6 | `Compile::disconnect_useless_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                 |
