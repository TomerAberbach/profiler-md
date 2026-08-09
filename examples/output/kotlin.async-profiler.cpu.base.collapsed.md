# Sampling profile

Collected 1,353 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Compiler         | 45.6% |     617 |
| Native           | 39.0% |     528 |
| Ours             |  9.9% |     134 |
| Standard library |  4.4% |      60 |
| JIT              |  1.0% |      13 |
| Unknown          |  0.1% |       1 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                                                                                                                                 | Location    |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 3.7% |      50 | `inflate_fast`                                                                                                                                           | `<unknown>` |
| 2.1% |      28 | `SymbolTable::do_lookup`                                                                                                                                 | `<unknown>` |
| 1.8% |      24 | `tlv_get_addr`                                                                                                                                           | `<unknown>` |
| 1.6% |      21 | `PhaseChaitin::Split`                                                                                                                                    | `<unknown>` |
| 1.3% |      18 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `<unknown>` |
| 1.2% |      16 | `PhaseChaitin::build_ifg_physical`                                                                                                                       | `<unknown>` |
| 1.2% |      16 | `__psynch_mutexwait`                                                                                                                                     | `<unknown>` |
| 1.0% |      14 | `pthread_jit_write_protect_np`                                                                                                                           | `<unknown>` |
| 1.0% |      13 | `ciObjectFactory::get_metadata`                                                                                                                          | `<unknown>` |
| 1.0% |      13 | `IndexSetIterator::advance_and_next`                                                                                                                     | `<unknown>` |
| 0.9% |      12 | `PhaseIdealLoop::build_loop_late`                                                                                                                        | `<unknown>` |
| 0.8% |      11 | `IntervalWalker::walk_to`                                                                                                                                | `<unknown>` |
| 0.8% |      11 | `PhaseChaitin::gather_lrg_masks`                                                                                                                         | `<unknown>` |
| 0.7% |      10 | `InstanceKlass::find_method_index`                                                                                                                       | `<unknown>` |
| 0.7% |      10 | `inflate`                                                                                                                                                | `<unknown>` |
| 0.7% |      10 | `Compile::identify_useful_nodes`                                                                                                                         | `<unknown>` |
| 0.7% |      10 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                   | `<unknown>` |
| 0.7% |       9 | `LIR_OpVisitState::visit`                                                                                                                                | `<unknown>` |
| 0.7% |       9 | `PhaseLive::compute`                                                                                                                                     | `<unknown>` |
| 0.7% |       9 | `PhaseAggressiveCoalesce::insert_copies`                                                                                                                 | `<unknown>` |

#### Categories

##### Compiler

|    % | Samples | Function                                    | Location    |
| ---: | ------: | ------------------------------------------- | ----------- |
| 1.6% |      21 | `PhaseChaitin::Split`                       | `<unknown>` |
| 1.2% |      16 | `PhaseChaitin::build_ifg_physical`          | `<unknown>` |
| 1.0% |      13 | `ciObjectFactory::get_metadata`             | `<unknown>` |
| 1.0% |      13 | `IndexSetIterator::advance_and_next`        | `<unknown>` |
| 0.9% |      12 | `PhaseIdealLoop::build_loop_late`           | `<unknown>` |
| 0.8% |      11 | `IntervalWalker::walk_to`                   | `<unknown>` |
| 0.8% |      11 | `PhaseChaitin::gather_lrg_masks`            | `<unknown>` |
| 0.7% |      10 | `Compile::identify_useful_nodes`            | `<unknown>` |
| 0.7% |       9 | `LIR_OpVisitState::visit`                   | `<unknown>` |
| 0.7% |       9 | `PhaseLive::compute`                        | `<unknown>` |
| 0.7% |       9 | `PhaseAggressiveCoalesce::insert_copies`    | `<unknown>` |
| 0.7% |       9 | `PhaseIdealLoop::build_loop_early`          | `<unknown>` |
| 0.6% |       8 | `PhaseChaitin::elide_copy`                  | `<unknown>` |
| 0.5% |       7 | `Node_Backward_Iterator::next`              | `<unknown>` |
| 0.5% |       7 | `Node::dominates`                           | `<unknown>` |
| 0.5% |       7 | `PhaseChaitin::post_allocate_copy_removal`  | `<unknown>` |
| 0.4% |       6 | `Unique_Node_List::remove`                  | `<unknown>` |
| 0.4% |       6 | `RelocIterator::set_limits`                 | `<unknown>` |
| 0.4% |       6 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |
| 0.4% |       6 | `PhaseIdealLoop::is_dominator`              | `<unknown>` |

##### Native

|    % | Samples | Function                                                                                                                                                 | Location    |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 3.7% |      50 | `inflate_fast`                                                                                                                                           | `<unknown>` |
| 2.1% |      28 | `SymbolTable::do_lookup`                                                                                                                                 | `<unknown>` |
| 1.8% |      24 | `tlv_get_addr`                                                                                                                                           | `<unknown>` |
| 1.3% |      18 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `<unknown>` |
| 1.2% |      16 | `__psynch_mutexwait`                                                                                                                                     | `<unknown>` |
| 1.0% |      14 | `pthread_jit_write_protect_np`                                                                                                                           | `<unknown>` |
| 0.7% |      10 | `InstanceKlass::find_method_index`                                                                                                                       | `<unknown>` |
| 0.7% |      10 | `inflate`                                                                                                                                                | `<unknown>` |
| 0.7% |      10 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                   | `<unknown>` |
| 0.5% |       7 | `vmSymbols::find_sid`                                                                                                                                    | `<unknown>` |
| 0.5% |       7 | `_platform_memset`                                                                                                                                       | `<unknown>` |
| 0.5% |       7 | `__psynch_cvwait`                                                                                                                                        | `<unknown>` |
| 0.5% |       7 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `<unknown>` |
| 0.5% |       7 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>`                             | `<unknown>` |
| 0.4% |       6 | `sys_icache_invalidate`                                                                                                                                  | `<unknown>` |
| 0.4% |       6 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                           | `<unknown>` |
| 0.4% |       6 | `Arena::contains`                                                                                                                                        | `<unknown>` |
| 0.4% |       5 | `CodeCache::make_marked_nmethods_deoptimized`                                                                                                            | `<unknown>` |
| 0.4% |       5 | `ClassVerifier::verify_method`                                                                                                                           | `<unknown>` |
| 0.4% |       5 | `fwd_copy_again`                                                                                                                                         | `<unknown>` |

##### Ours

|    % | Samples | Function                                                         | Location                                                                                                                            |
| ---: | ------: | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 0.1% |       2 | `applyArgumentsWithReorderingIfNeeded`                           | `org.jetbrains.kotlin.fir.backend.generators.CallAndReferenceGenerator`                                                             |
| 0.1% |       2 | `asReadOnlyStorage`                                              | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`                                                        |
| 0.1% |       2 | `transform`                                                      | `org.jetbrains.kotlin.codegen.optimization.RedundantGotoMethodTransformer`                                                          |
| 0.1% |       1 | `visitNamedFunction`                                             | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                                                   |
| 0.1% |       1 | `visitJumpInsn`                                                  | `org.jetbrains.org.objectweb.asm.MethodVisitor`                                                                                     |
| 0.1% |       1 | `<init>`                                                         | `org.jetbrains.kotlin.utils.ThreadLocalDelegate`                                                                                    |
| 0.1% |       1 | `buildSimpleArray`                                               | `org.jetbrains.kotlin.backend.jvm.ir.IrArrayBuilder`                                                                                |
| 0.1% |       1 | `isContainedInInvariantOrContravariantPositionsWithDependencies` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CollectTypeVariableUsagesInfo`                                                       |
| 0.1% |       1 | `check`                                                          | `org.jetbrains.kotlin.fir.resolve.calls.stages.CollectTypeVariableUsagesInfo`                                                       |
| 0.1% |       1 | `processCandidate`                                               | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`                                                               |
| 0.1% |       1 | `incorporate`                                                    | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintIncorporator`                                                    |
| 0.1% |       1 | `processGivenConstraints`                                        | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                                                        |
| 0.1% |       1 | `addConstraintIfCompatible`                                      | `org.jetbrains.kotlin.resolve.calls.inference.ConstraintSystemBuilderKt`                                                            |
| 0.1% |       1 | `resolveExtensionReceiver`                                       | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckExtensionReceiver`                                                              |
| 0.1% |       1 | `transformElement`                                               | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer$transformArgumentList$ArgumentTransformer` |
| 0.1% |       1 | `createLibrarySession$lambda$0`                                  | `org.jetbrains.kotlin.fir.session.FirJvmSessionFactory`                                                                             |
| 0.1% |       1 | `acceptChildren`                                                 | `org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl`                                                                     |
| 0.1% |       1 | `getUseSiteMemberScope`                                          | `org.jetbrains.kotlin.fir.scopes.FirKotlinScopeProvider`                                                                            |
| 0.1% |       1 | `<init>`                                                         | `org.jetbrains.kotlin.resolve.calls.inference.model.Constraint`                                                                     |
| 0.1% |       1 | `visitNamedFunction`                                             | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.DeclarationCheckersDiagnosticComponent`                                     |

##### Standard library

|    % | Samples | Function                     | Location                                      |
| ---: | ------: | ---------------------------- | --------------------------------------------- |
| 0.2% |       3 | `sanitizeStackTrace`         | `kotlin.jvm.internal.Intrinsics`              |
| 0.1% |       2 | `getKey`                     | `java.util.HashMap$Node`                      |
| 0.1% |       2 | `getNode`                    | `java.util.HashMap`                           |
| 0.1% |       2 | `checkNotNullParameter`      | `kotlin.jvm.internal.Intrinsics`              |
| 0.1% |       2 | `hasNext`                    | `kotlin.collections.EmptyIterator`            |
| 0.1% |       1 | `invokeExact_MT`             | `java.lang.invoke.Invokers$Holder`            |
| 0.1% |       1 | `<init>`                     | `kotlin.sequences.FilteringSequence`          |
| 0.1% |       1 | `newNode`                    | `java.util.LinkedHashMap`                     |
| 0.1% |       1 | `verifyCurrentThreadCpuTime` | `sun.management.ThreadImpl`                   |
| 0.1% |       1 | `<init>`                     | `java.lang.invoke.DirectMethodHandle`         |
| 0.1% |       1 | `releaseInflater`            | `java.util.zip.ZipFile$CleanableResource`     |
| 0.1% |       1 | `<init>`                     | `java.lang.String`                            |
| 0.1% |       1 | `get`                        | `java.util.HashMap`                           |
| 0.1% |       1 | `copyOf`                     | `java.util.Arrays`                            |
| 0.1% |       1 | `replace`                    | `java.lang.StringLatin1`                      |
| 0.1% |       1 | `removeStaleReferences`      | `jdk.internal.util.ReferencedKeyMap`          |
| 0.1% |       1 | `contains$default`           | `kotlin.text.StringsKt__StringsKt`            |
| 0.1% |       1 | `isEmpty`                    | `kotlin.collections.EmptyList`                |
| 0.1% |       1 | `resize`                     | `java.util.HashMap`                           |
| 0.1% |       1 | `hasFrames`                  | `jdk.internal.org.objectweb.asm.MethodWriter` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `inflate_fast` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |      50 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `SymbolTable::do_lookup` (`<unknown>`)

|     % | Samples | Caller                                         | Location    |
| ----: | ------: | ---------------------------------------------- | ----------- |
| 75.0% |      21 | `SymbolTable::lookup_only`                     | `<unknown>` |
| 14.3% |       4 | `ClassFileParser::parse_constant_pool_entries` | `<unknown>` |
| 10.7% |       3 | `SymbolTable::new_symbol`                      | `<unknown>` |

##### `tlv_get_addr` (`<unknown>`)

|    % | Samples | Caller                             | Location    |
| ---: | ------: | ---------------------------------- | ----------- |
| 8.3% |       2 | `LIRGenerator::state_for`          | `<unknown>` |
| 8.3% |       2 | `GraphBuilder::try_inline_full`    | `<unknown>` |
| 4.2% |       1 | `PhaseChaitin::Split`              | `<unknown>` |
| 4.2% |       1 | `State::MachNodeGenerator`         | `<unknown>` |
| 4.2% |       1 | `Optimizer::eliminate_null_checks` | `<unknown>` |

##### `PhaseChaitin::Split` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      21 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`<unknown>`)

|     % | Samples | Caller                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 77.8% |      14 | `DebugInformationRecorder::describe_scope`         | `<unknown>` |
| 22.2% |       4 | `DebugInformationRecorder::serialize_scope_values` | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      16 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `__psynch_mutexwait` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      16 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|     % | Samples | Caller                                      | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 14.3% |       2 | `Unsafe_AllocateInstance`                   | `<unknown>` |
| 14.3% |       2 | `jni_GetObjectClass`                        | `<unknown>` |
| 14.3% |       2 | `jni_ReleasePrimitiveArrayCritical`         | `<unknown>` |
|  7.1% |       1 | `JVM_ReferenceClear`                        | `<unknown>` |
|  7.1% |       1 | `InterpreterRuntime::build_method_counters` | `<unknown>` |

##### `ciObjectFactory::get_metadata` (`<unknown>`)

|     % | Samples | Caller                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 15.4% |       2 | `ciBytecodeStream::get_method`                     | `<unknown>` |
| 15.4% |       2 | `ciEnv::get_klass_by_index_impl`                   | `<unknown>` |
| 15.4% |       2 | `ciObjectFactory::create_new_metadata`             | `<unknown>` |
| 15.4% |       2 | `ciEnv::get_klass_by_name_impl`                    | `<unknown>` |
|  7.7% |       1 | `ciReceiverTypeData::translate_receiver_data_from` | `<unknown>` |

##### `IndexSetIterator::advance_and_next` (`<unknown>`)

|     % | Samples | Caller                                           | Location    |
| ----: | ------: | ------------------------------------------------ | ----------- |
| 23.1% |       3 | `PhaseChaitin::build_ifg_physical`               | `<unknown>` |
| 23.1% |       3 | `PhaseLive::add_liveout`                         | `<unknown>` |
|  7.7% |       1 | `PhaseChaitin::stretch_base_pointer_live_ranges` | `<unknown>` |
|  7.7% |       1 | `PhaseIFG::remove_node`                          | `<unknown>` |
|  7.7% |       1 | `PhaseChaitin::compute_initial_block_pressure`   | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |      12 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `IntervalWalker::walk_to` (`<unknown>`)

|     % | Samples | Caller                        | Location    |
| ----: | ------: | ----------------------------- | ----------- |
| 90.9% |      10 | `IntervalWalker::walk_to`     | `<unknown>` |
|  9.1% |       1 | `LinearScan::compute_oop_map` | `<unknown>` |

##### `PhaseChaitin::gather_lrg_masks` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      11 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `InstanceKlass::find_method_index` (`<unknown>`)

|     % | Samples | Caller                                  | Location    |
| ----: | ------: | --------------------------------------- | ----------- |
| 80.0% |       8 | `InstanceKlass::uncached_lookup_method` | `<unknown>` |
| 10.0% |       1 | `InstanceKlass::find_method`            | `<unknown>` |
| 10.0% |       1 | `InstanceKlass::find_local_method`      | `<unknown>` |

##### `inflate` (`<unknown>`)

|     % | Samples | Caller                                          | Location                 |
| ----: | ------: | ----------------------------------------------- | ------------------------ |
| 90.0% |       9 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>`              |
| 10.0% |       1 | `inflateBytesBytes`                             | `java.util.zip.Inflater` |

##### `Compile::identify_useful_nodes` (`<unknown>`)

|     % | Samples | Caller                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 80.0% |       8 | `PhaseRemoveUseless::PhaseRemoveUseless`      | `<unknown>` |
| 20.0% |       2 | `Matcher::specialize_generic_vector_operands` | `<unknown>` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`<unknown>`)

|     % | Samples | Caller                                                                            | Location    |
| ----: | ------: | --------------------------------------------------------------------------------- | ----------- |
| 90.0% |       9 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object`          | `<unknown>` |
| 10.0% |       1 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb` | `<unknown>` |

##### `LIR_OpVisitState::visit` (`<unknown>`)

|     % | Samples | Caller                                | Location    |
| ----: | ------: | ------------------------------------- | ----------- |
| 33.3% |       3 | `LinearScan::build_intervals`         | `<unknown>` |
| 22.2% |       2 | `LinearScan::compute_local_live_sets` | `<unknown>` |
| 22.2% |       2 | `LinearScan::assign_reg_num`          | `<unknown>` |
| 22.2% |       2 | `LinearScan::do_linear_scan`          | `<unknown>` |

##### `PhaseLive::compute` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       9 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseAggressiveCoalesce::insert_copies` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       9 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_early` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       9 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `PhaseChaitin::elide_copy` (`<unknown>`)

|     % | Samples | Caller                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 87.5% |       7 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |
| 12.5% |       1 | `PhaseChaitin::Register_Allocate`          | `<unknown>` |

##### `Node_Backward_Iterator::next` (`<unknown>`)

|     % | Samples | Caller                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 85.7% |       6 | `PhaseCFG::schedule_late`      | `<unknown>` |
| 14.3% |       1 | `PhaseCFG::global_code_motion` | `<unknown>` |

##### `Node::dominates` (`<unknown>`)

|      % | Samples | Caller                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |       7 | `MemNode::all_controls_dominate` | `<unknown>` |

##### `PhaseChaitin::post_allocate_copy_removal` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       7 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `vmSymbols::find_sid` (`<unknown>`)

|      % | Samples | Caller                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |       7 | `ciObjectFactory::get_symbol` | `<unknown>` |

##### `_platform_memset` (`<unknown>`)

|     % | Samples | Caller                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 14.3% |       1 | `CompileBroker::update_compile_perf_data`     | `<unknown>` |
| 14.3% |       1 | `InstanceKlass::allocate_instance_klass`      | `<unknown>` |
| 14.3% |       1 | `Parse::create_entry_map`                     | `<unknown>` |
| 14.3% |       1 | `MethodLiveness::BasicBlock::get_liveness_at` | `<unknown>` |
| 14.3% |       1 | `Compile::Init`                               | `<unknown>` |

##### `__psynch_cvwait` (`<unknown>`)

|      % | Samples | Caller                  | Location    |
| -----: | ------: | ----------------------- | ----------- |
| 100.0% |       7 | `PlatformMonitor::wait` | `<unknown>` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |       7 | `G1ParScanThreadState::trim_queue_to_threshold` | `<unknown>` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`<unknown>`)

|      % | Samples | Caller                                            | Location    |
| -----: | ------: | ------------------------------------------------- | ----------- |
| 100.0% |       7 | `G1ParScanThreadState::do_copy_to_survivor_space` | `<unknown>` |

##### `Unique_Node_List::remove` (`<unknown>`)

|      % | Samples | Caller                                    | Location    |
| -----: | ------: | ----------------------------------------- | ----------- |
| 100.0% |       6 | `PhaseIterGVN::remove_globally_dead_node` | `<unknown>` |

##### `RelocIterator::set_limits` (`<unknown>`)

|     % | Samples | Caller                                           | Location    |
| ----: | ------: | ------------------------------------------------ | ----------- |
| 50.0% |       3 | `NativeMovConstReg::set_data`                    | `<unknown>` |
| 33.3% |       2 | `trampoline_stub_Relocation::get_trampoline_for` | `<unknown>` |
| 16.7% |       1 | `CompiledIC::CompiledIC`                         | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       6 | `PhaseIdealLoop::build_loop_late` | `<unknown>` |

##### `PhaseIdealLoop::is_dominator` (`<unknown>`)

|      % | Samples | Caller                                        | Location    |
| -----: | ------: | --------------------------------------------- | ----------- |
| 100.0% |       6 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `<unknown>` |

##### `sys_icache_invalidate` (`<unknown>`)

|     % | Samples | Caller                                      | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 66.7% |       4 | `nmethod::nmethod`                          | `<unknown>` |
| 16.7% |       1 | `InlineCacheBuffer::create_transition_stub` | `<unknown>` |
| 16.7% |       1 | `ICStub::finalize`                          | `<unknown>` |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`<unknown>`)

|      % | Samples | Caller                                         | Location    |
| -----: | ------: | ---------------------------------------------- | ----------- |
| 100.0% |       6 | `void G1CMTask::process_grey_task_entry<true>` | `<unknown>` |

##### `Arena::contains` (`<unknown>`)

|      % | Samples | Caller           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |       6 | `Matcher::xform` | `<unknown>` |

##### `CodeCache::make_marked_nmethods_deoptimized` (`<unknown>`)

|      % | Samples | Caller                                  | Location    |
| -----: | ------: | --------------------------------------- | ----------- |
| 100.0% |       5 | `Deoptimization::deoptimize_all_marked` | `<unknown>` |

##### `ClassVerifier::verify_method` (`<unknown>`)

|      % | Samples | Caller                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |       5 | `ClassVerifier::verify_class` | `<unknown>` |

##### `fwd_copy_again` (`<unknown>`)

|     % | Samples | Caller                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 80.0% |       4 | `G1ParScanThreadState::trim_queue_to_threshold` | `<unknown>` |
| 20.0% |       1 | `LinearScan::compute_global_live_sets`          | `<unknown>` |

##### `sanitizeStackTrace` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Caller                    | Location                         |
| -----: | ------: | ------------------------- | -------------------------------- |
| 100.0% |       3 | `throwParameterIsNullNPE` | `kotlin.jvm.internal.Intrinsics` |

##### `applyArgumentsWithReorderingIfNeeded` (`org.jetbrains.kotlin.fir.backend.generators.CallAndReferenceGenerator`)

|      % | Samples | Caller               | Location                                                                |
| -----: | ------: | -------------------- | ----------------------------------------------------------------------- |
| 100.0% |       2 | `applyCallArguments` | `org.jetbrains.kotlin.fir.backend.generators.CallAndReferenceGenerator` |

##### `asReadOnlyStorage` (`org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`)

|     % | Samples | Caller            | Location                                                                      |
| ----: | ------: | ----------------- | ----------------------------------------------------------------------------- |
| 50.0% |       1 | `completeCall`    | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`                 |
| 50.0% |       1 | `buildBaseSystem` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.CandidateFactory$Companion` |

##### `transform` (`org.jetbrains.kotlin.codegen.optimization.RedundantGotoMethodTransformer`)

|      % | Samples | Caller      | Location                                                                           |
| -----: | ------: | ----------- | ---------------------------------------------------------------------------------- |
| 100.0% |       2 | `transform` | `org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer` |

##### `getKey` (`java.util.HashMap$Node`)

|     % | Samples | Caller               | Location                                                                     |
| ----: | ------: | -------------------- | ---------------------------------------------------------------------------- |
| 50.0% |       1 | `prepareTransaction` | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl` |
| 50.0% |       1 | `getModuleData`      | `org.jetbrains.kotlin.fir.deserialization.MultipleModuleDataProvider`        |

##### `getNode` (`java.util.HashMap`)

|     % | Samples | Caller        | Location            |
| ----: | ------: | ------------- | ------------------- |
| 50.0% |       1 | `get`         | `java.util.HashMap` |
| 50.0% |       1 | `containsKey` | `java.util.HashMap` |

##### `checkNotNullParameter` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Caller                       | Location                                                                                       |
| ----: | ------: | ---------------------------- | ---------------------------------------------------------------------------------------------- |
| 50.0% |       1 | `check`                      | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirIncompatibleClassExpressionChecker`  |
| 50.0% |       1 | `transformReceiverParameter` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |

##### `hasNext` (`kotlin.collections.EmptyIterator`)

|     % | Samples | Caller                                      | Location                                                                                                         |
| ----: | ------: | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 50.0% |       1 | `refineTypeArgumentsOfTypeAliasConstructor` | `org.jetbrains.kotlin.fir.backend.generators.CallAndReferenceGenerator`                                          |
| 50.0% |       1 | `check`                                     | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirCoroutineContextAsContextParameterDeclarationChecker` |

##### `visitNamedFunction` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`)

|      % | Samples | Caller               | Location                                                                          |
| -----: | ------: | -------------------- | --------------------------------------------------------------------------------- |
| 100.0% |       1 | `visitNamedFunction` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |

##### `visitJumpInsn` (`org.jetbrains.org.objectweb.asm.MethodVisitor`)

|      % | Samples | Caller | Location                                                     |
| -----: | ------: | ------ | ------------------------------------------------------------ |
| 100.0% |       1 | `ifeq` | `org.jetbrains.org.objectweb.asm.commons.InstructionAdapter` |

##### `<init>` (`org.jetbrains.kotlin.utils.ThreadLocalDelegate`)

|      % | Samples | Caller        | Location                                   |
| -----: | ------: | ------------- | ------------------------------------------ |
| 100.0% |       1 | `threadLocal` | `org.jetbrains.kotlin.utils.ThreadLocalKt` |

##### `buildSimpleArray` (`org.jetbrains.kotlin.backend.jvm.ir.IrArrayBuilder`)

|      % | Samples | Caller  | Location                                             |
| -----: | ------: | ------- | ---------------------------------------------------- |
| 100.0% |       1 | `build` | `org.jetbrains.kotlin.backend.jvm.ir.IrArrayBuilder` |

##### `isContainedInInvariantOrContravariantPositionsWithDependencies` (`org.jetbrains.kotlin.fir.resolve.calls.stages.CollectTypeVariableUsagesInfo`)

|      % | Samples | Caller  | Location                                                                      |
| -----: | ------: | ------- | ----------------------------------------------------------------------------- |
| 100.0% |       1 | `check` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CollectTypeVariableUsagesInfo` |

##### `check` (`org.jetbrains.kotlin.fir.resolve.calls.stages.CollectTypeVariableUsagesInfo`)

|      % | Samples | Caller          | Location                                                                                 |
| -----: | ------: | --------------- | ---------------------------------------------------------------------------------------- |
| 100.0% |       1 | `invokeSuspend` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1` |

##### `processCandidate` (`org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`)

|      % | Samples | Caller                     | Location                                                              |
| -----: | ------: | -------------------------- | --------------------------------------------------------------------- |
| 100.0% |       1 | `processCandidate$default` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner` |

##### `incorporate` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintIncorporator`)

|      % | Samples | Caller                    | Location                                                                     |
| -----: | ------: | ------------------------- | ---------------------------------------------------------------------------- |
| 100.0% |       1 | `processGivenConstraints` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector` |

##### `processGivenConstraints` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`)

|      % | Samples | Caller                                | Location                                                                     |
| -----: | ------: | ------------------------------------- | ---------------------------------------------------------------------------- |
| 100.0% |       1 | `processConstraintsIgnoringForksData` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector` |

##### `addConstraintIfCompatible` (`org.jetbrains.kotlin.resolve.calls.inference.ConstraintSystemBuilderKt`)

|      % | Samples | Caller                             | Location                                                                 |
| -----: | ------: | ---------------------------------- | ------------------------------------------------------------------------ |
| 100.0% |       1 | `addSubtypeConstraintIfCompatible` | `org.jetbrains.kotlin.resolve.calls.inference.ConstraintSystemBuilderKt` |

##### `resolveExtensionReceiver` (`org.jetbrains.kotlin.fir.resolve.calls.stages.CheckExtensionReceiver`)

|      % | Samples | Caller  | Location                                                               |
| -----: | ------: | ------- | ---------------------------------------------------------------------- |
| 100.0% |       1 | `check` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckExtensionReceiver` |

##### `transformElement` (`org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer$transformArgumentList$ArgumentTransformer`)

|      % | Samples | Caller                               | Location                                           |
| -----: | ------: | ------------------------------------ | -------------------------------------------------- |
| 100.0% |       1 | `transformVarargArgumentsExpression` | `org.jetbrains.kotlin.fir.visitors.FirTransformer` |

##### `createLibrarySession$lambda$0` (`org.jetbrains.kotlin.fir.session.FirJvmSessionFactory`)

|      % | Samples | Caller   | Location                                                                           |
| -----: | ------: | -------- | ---------------------------------------------------------------------------------- |
| 100.0% |       1 | `invoke` | `org.jetbrains.kotlin.fir.session.FirJvmSessionFactory$$Lambda.0x0000007001477c50` |

##### `acceptChildren` (`org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl`)

|      % | Samples | Caller         | Location                                                                                                                |
| -----: | ------: | -------------- | ----------------------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `visitElement` | `org.jetbrains.kotlin.fir.analysis.collectors.components.ControlFlowAnalysisDiagnosticComponent$LocalPropertyCollector` |

##### `getUseSiteMemberScope` (`org.jetbrains.kotlin.fir.scopes.FirKotlinScopeProvider`)

|      % | Samples | Caller               | Location                                                   |
| -----: | ------: | -------------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `unsubstitutedScope` | `org.jetbrains.kotlin.fir.scopes.FirKotlinScopeProviderKt` |

##### `<init>` (`org.jetbrains.kotlin.resolve.calls.inference.model.Constraint`)

|      % | Samples | Caller                         | Location                                                                                                           |
| -----: | ------: | ------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| 100.0% |       1 | `addNewIncorporatedConstraint` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector` |

##### `visitNamedFunction` (`org.jetbrains.kotlin.fir.analysis.checkers.declaration.DeclarationCheckersDiagnosticComponent`)

|      % | Samples | Caller               | Location                                                                                        |
| -----: | ------: | -------------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `visitNamedFunction` | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.DeclarationCheckersDiagnosticComponent` |

##### `invokeExact_MT` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller          | Location                                       |
| -----: | ------: | --------------- | ---------------------------------------------- |
| 100.0% |       1 | `buildCallSite` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `<init>` (`kotlin.sequences.FilteringSequence`)

|      % | Samples | Caller   | Location                                     |
| -----: | ------: | -------- | -------------------------------------------- |
| 100.0% |       1 | `filter` | `kotlin.sequences.SequencesKt___SequencesKt` |

##### `newNode` (`java.util.LinkedHashMap`)

|      % | Samples | Caller   | Location            |
| -----: | ------: | -------- | ------------------- |
| 100.0% |       1 | `putVal` | `java.util.HashMap` |

##### `verifyCurrentThreadCpuTime` (`sun.management.ThreadImpl`)

|      % | Samples | Caller                     | Location                    |
| -----: | ------: | -------------------------- | --------------------------- |
| 100.0% |       1 | `getCurrentThreadUserTime` | `sun.management.ThreadImpl` |

##### `<init>` (`java.lang.invoke.DirectMethodHandle`)

|      % | Samples | Caller | Location                              |
| -----: | ------: | ------ | ------------------------------------- |
| 100.0% |       1 | `make` | `java.lang.invoke.DirectMethodHandle` |

##### `releaseInflater` (`java.util.zip.ZipFile$CleanableResource`)

|      % | Samples | Caller | Location                                      |
| -----: | ------: | ------ | --------------------------------------------- |
| 100.0% |       1 | `run`  | `java.util.zip.ZipFile$InflaterCleanupAction` |

##### `<init>` (`java.lang.String`)

|      % | Samples | Caller      | Location                 |
| -----: | ------: | ----------- | ------------------------ |
| 100.0% |       1 | `newString` | `java.lang.StringLatin1` |

##### `get` (`java.util.HashMap`)

|      % | Samples | Caller | Location                                                            |
| -----: | ------: | ------ | ------------------------------------------------------------------- |
| 100.0% |       1 | `get`  | `org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndexImpl$Cache` |

##### `copyOf` (`java.util.Arrays`)

|      % | Samples | Caller   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |       1 | `copyOf` | `java.util.Arrays` |

##### `replace` (`java.lang.StringLatin1`)

|      % | Samples | Caller    | Location           |
| -----: | ------: | --------- | ------------------ |
| 100.0% |       1 | `replace` | `java.lang.String` |

##### `removeStaleReferences` (`jdk.internal.util.ReferencedKeyMap`)

|      % | Samples | Caller | Location                             |
| -----: | ------: | ------ | ------------------------------------ |
| 100.0% |       1 | `get`  | `jdk.internal.util.ReferencedKeyMap` |

##### `contains$default` (`kotlin.text.StringsKt__StringsKt`)

|      % | Samples | Caller                                                              | Location                                                                               |
| -----: | ------: | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| 100.0% |       1 | `mapInternalNameToClassId$org_jetbrains_kotlin_frontend_common_jvm` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.ClassifierResolutionContext` |

##### `isEmpty` (`kotlin.collections.EmptyList`)

|      % | Samples | Caller                            | Location                                            |
| -----: | ------: | --------------------------------- | --------------------------------------------------- |
| 100.0% |       1 | `resolveAnnotationsWithArguments` | `org.jetbrains.kotlin.fir.symbols.FirBasedSymbolKt` |

##### `resize` (`java.util.HashMap`)

|      % | Samples | Caller   | Location            |
| -----: | ------: | -------- | ------------------- |
| 100.0% |       1 | `putVal` | `java.util.HashMap` |

##### `hasFrames` (`jdk.internal.org.objectweb.asm.MethodWriter`)

|      % | Samples | Caller        | Location                                     |
| -----: | ------: | ------------- | -------------------------------------------- |
| 100.0% |       1 | `toByteArray` | `jdk.internal.org.objectweb.asm.ClassWriter` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                   | Location                                                |
| ----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 67.4% |     912 | `_pthread_start`                           | `<unknown>`                                             |
| 67.4% |     912 | `thread_start`                             | `<unknown>`                                             |
| 67.3% |     911 | `Thread::call_run`                         | `<unknown>`                                             |
| 67.3% |     911 | `thread_native_entry`                      | `<unknown>`                                             |
| 61.0% |     825 | `CompileBroker::compiler_thread_loop`      | `<unknown>`                                             |
| 61.0% |     825 | `JavaThread::thread_main_inner`            | `<unknown>`                                             |
| 60.2% |     815 | `CompileBroker::invoke_compiler_on_method` | `<unknown>`                                             |
| 41.5% |     561 | `Compile::Compile`                         | `<unknown>`                                             |
| 41.5% |     561 | `C2Compiler::compile_method`               | `<unknown>`                                             |
| 32.2% |     435 | `run`                                      | `org.jetbrains.kotlin.preloading.Preloader`             |
| 32.2% |     435 | `main`                                     | `org.jetbrains.kotlin.preloading.Preloader`             |
| 26.5% |     359 | `main`                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 26.5% |     359 | `main`                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 26.5% |     359 | `invokeStatic`                             | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000`    |
| 26.5% |     359 | `invoke`                                   | `java.lang.invoke.LambdaForm$MH.0x0000007001009400`     |
| 26.5% |     359 | `invokeExact_MT`                           | `java.lang.invoke.Invokers$Holder`                      |
| 26.5% |     359 | `invokeImpl`                               | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 26.5% |     359 | `invoke`                                   | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 26.5% |     359 | `invoke`                                   | `java.lang.reflect.Method`                              |
| 26.4% |     357 | `doMainNoExit$default`                     | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

#### Categories

##### Compiler

|     % | Samples | Function                                    | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 61.0% |     825 | `CompileBroker::compiler_thread_loop`       | `<unknown>` |
| 60.2% |     815 | `CompileBroker::invoke_compiler_on_method`  | `<unknown>` |
| 41.5% |     561 | `Compile::Compile`                          | `<unknown>` |
| 41.5% |     561 | `C2Compiler::compile_method`                | `<unknown>` |
| 20.8% |     281 | `Compile::Code_Gen`                         | `<unknown>` |
| 17.8% |     241 | `Compilation::compile_method`               | `<unknown>` |
| 17.8% |     241 | `Compilation::Compilation`                  | `<unknown>` |
| 15.6% |     211 | `Compilation::compile_java_method`          | `<unknown>` |
| 14.6% |     198 | `Compile::Optimize`                         | `<unknown>` |
| 11.5% |     155 | `PhaseChaitin::Register_Allocate`           | `<unknown>` |
|  7.9% |     107 | `PhaseIdealLoop::optimize`                  | `<unknown>` |
|  6.7% |      90 | `PhaseIdealLoop::build_and_optimize`        | `<unknown>` |
|  6.7% |      90 | `PhaseIdealLoop::PhaseIdealLoop`            | `<unknown>` |
|  6.6% |      89 | `Compilation::build_hir`                    | `<unknown>` |
|  6.1% |      83 | `Compilation::emit_lir`                     | `<unknown>` |
|  5.2% |      71 | `GraphBuilder::GraphBuilder`                | `<unknown>` |
|  4.9% |      66 | `LinearScan::do_linear_scan`                | `<unknown>` |
|  4.4% |      60 | `GraphBuilder::iterate_bytecodes_for_block` | `<unknown>` |
|  4.4% |      59 | `GraphBuilder::iterate_all_blocks`          | `<unknown>` |
|  4.3% |      58 | `PhaseIterGVN::optimize`                    | `<unknown>` |

##### Native

|     % | Samples | Function                                        | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 67.4% |     912 | `_pthread_start`                                | `<unknown>` |
| 67.4% |     912 | `thread_start`                                  | `<unknown>` |
| 67.3% |     911 | `Thread::call_run`                              | `<unknown>` |
| 67.3% |     911 | `thread_native_entry`                           | `<unknown>` |
| 61.0% |     825 | `JavaThread::thread_main_inner`                 | `<unknown>` |
| 18.0% |     243 | `Compiler::compile_method`                      | `<unknown>` |
|  5.9% |      80 | `WorkerThread::run`                             | `<unknown>` |
|  5.2% |      71 | `IRScope::IRScope`                              | `<unknown>` |
|  5.2% |      71 | `IR::IR`                                        | `<unknown>` |
|  5.1% |      69 | `Parse::Parse`                                  | `<unknown>` |
|  5.1% |      69 | `ParseGenerator::generate`                      | `<unknown>` |
|  5.0% |      68 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |
|  5.0% |      67 | `Parse::do_one_block`                           | `<unknown>` |
|  5.0% |      67 | `Parse::do_all_blocks`                          | `<unknown>` |
|  4.7% |      63 | `Parse::do_call`                                | `<unknown>` |
|  4.6% |      62 | `Java_java_lang_ClassLoader_defineClass1`       | `<unknown>` |
|  4.5% |      61 | `SystemDictionary::resolve_class_from_stream`   | `<unknown>` |
|  4.5% |      61 | `jvm_define_class_common`                       | `<unknown>` |
|  4.5% |      61 | `JVM_DefineClassWithSource`                     | `<unknown>` |
|  4.4% |      60 | `KlassFactory::create_from_stream`              | `<unknown>` |

##### Ours

|     % | Samples | Function                                   | Location                                                         |
| ----: | ------: | ------------------------------------------ | ---------------------------------------------------------------- |
| 32.2% |     435 | `run`                                      | `org.jetbrains.kotlin.preloading.Preloader`                      |
| 32.2% |     435 | `main`                                     | `org.jetbrains.kotlin.preloading.Preloader`                      |
| 26.5% |     359 | `main`                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`           |
| 26.5% |     359 | `main`                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                     |
| 26.4% |     357 | `doMainNoExit$default`                     | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`          |
| 26.4% |     357 | `doMain`                                   | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`          |
| 26.3% |     356 | `exec`                                     | `org.jetbrains.kotlin.cli.common.CLICompiler`                    |
| 26.3% |     356 | `doMainNoExit`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`          |
| 25.2% |     341 | `doExecutePhased`                          | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                     |
| 25.2% |     341 | `execImpl`                                 | `org.jetbrains.kotlin.cli.common.CLICompiler`                    |
| 25.1% |     340 | `executeAndReturnPipeLineArtifact`         | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`          |
| 25.1% |     340 | `executeAndReturnPipeLineArtifact$default` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`          |
| 25.1% |     340 | `execute`                                  | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`          |
| 25.0% |     338 | `runPhasedPipeline`                        | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`          |
| 24.9% |     337 | `phaseBody`                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
| 24.9% |     337 | `invoke`                                   | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`          |
| 24.9% |     337 | `invoke`                                   | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase`      |
| 24.9% |     337 | `invokeToplevel`                           | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`             |
| 16.7% |     226 | `executePhase`                             | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |
| 12.2% |     165 | `resolveAndCheckFir`                       | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`                   |

##### Standard library

|     % | Samples | Function                 | Location                                                |
| ----: | ------: | ------------------------ | ------------------------------------------------------- |
| 26.5% |     359 | `invokeStatic`           | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000`    |
| 26.5% |     359 | `invoke`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001009400`     |
| 26.5% |     359 | `invokeExact_MT`         | `java.lang.invoke.Invokers$Holder`                      |
| 26.5% |     359 | `invokeImpl`             | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 26.5% |     359 | `invoke`                 | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 26.5% |     359 | `invoke`                 | `java.lang.reflect.Method`                              |
|  5.5% |      74 | `loadClass`              | `java.lang.ClassLoader`                                 |
|  5.2% |      70 | `read`                   | `java.util.zip.InflaterInputStream`                     |
|  5.2% |      70 | `read`                   | `java.io.FilterInputStream`                             |
|  5.1% |      69 | `defineClass`            | `java.lang.ClassLoader`                                 |
|  5.1% |      69 | `inflateBytesBytes`      | `java.util.zip.Inflater`                                |
|  5.1% |      69 | `inflate`                | `java.util.zip.Inflater`                                |
|  5.1% |      69 | `read`                   | `java.util.zip.ZipInputStream`                          |
|  4.8% |      65 | `defineClass1`           | `java.lang.ClassLoader`                                 |
|  4.1% |      55 | `resumeWith`             | `kotlin.coroutines.jvm.internal.BaseContinuationImpl`   |
|  1.3% |      18 | `getValue`               | `kotlin.SafePublicationLazyImpl`                        |
|  1.0% |      14 | `getValue`               | `kotlin.UnsafeLazyImpl`                                 |
|  1.0% |      13 | `getValue`               | `kotlin.SynchronizedLazyImpl`                           |
|  0.7% |       9 | `getProperties`          | `kotlin.reflect.jvm.internal.KClassImpl`                |
|  0.7% |       9 | `findPropertyDescriptor` | `kotlin.reflect.jvm.internal.KDeclarationContainerImpl` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_pthread_start` (`<unknown>`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 99.9% |     911 | `thread_native_entry` | `<unknown>` |
|  0.1% |       1 | `ThreadJavaMain`      | `<unknown>` |

##### `thread_start` (`<unknown>`)

|      % | Samples | Callee           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |     912 | `_pthread_start` | `<unknown>` |

##### `Thread::call_run` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 90.6% |     825 | `JavaThread::thread_main_inner` | `<unknown>` |
|  8.8% |      80 | `WorkerThread::run`             | `<unknown>` |
|  0.4% |       4 | `VMThread::run`                 | `<unknown>` |
|  0.2% |       2 | `WatcherThread::run`            | `<unknown>` |

##### `thread_native_entry` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |     911 | `Thread::call_run` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 98.8% |     815 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
|  1.2% |      10 | `CompileQueue::get`                        | `<unknown>` |

##### `JavaThread::thread_main_inner` (`<unknown>`)

|      % | Samples | Callee                                | Location    |
| -----: | ------: | ------------------------------------- | ----------- |
| 100.0% |     825 | `CompileBroker::compiler_thread_loop` | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 68.8% |     561 | `C2Compiler::compile_method`    | `<unknown>` |
| 29.8% |     243 | `Compiler::compile_method`      | `<unknown>` |
|  0.5% |       4 | `ciEnv::~ciEnv`                 | `<unknown>` |
|  0.4% |       3 | `ciEnv::get_method_from_handle` | `<unknown>` |
|  0.2% |       2 | `CompilationLog::log_compile`   | `<unknown>` |

##### `Compile::Compile` (`<unknown>`)

|     % | Samples | Callee                                   | Location    |
| ----: | ------: | ---------------------------------------- | ----------- |
| 50.1% |     281 | `Compile::Code_Gen`                      | `<unknown>` |
| 35.3% |     198 | `Compile::Optimize`                      | `<unknown>` |
| 12.1% |      68 | `ParseGenerator::generate`               | `<unknown>` |
|  1.4% |       8 | `PhaseRemoveUseless::PhaseRemoveUseless` | `<unknown>` |
|  0.4% |       2 | `Type::Initialize`                       | `<unknown>` |

##### `C2Compiler::compile_method` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |     561 | `Compile::Compile` | `<unknown>` |

##### `run` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % | Samples | Callee           | Location                                               |
| ----: | ------: | ---------------- | ------------------------------------------------------ |
| 82.5% |     359 | `invoke`         | `java.lang.reflect.Method`                             |
| 17.2% |      75 | `preloadClasses` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|  0.2% |       1 | `getMethod`      | `java.lang.Class`                                      |

##### `main` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Callee | Location                                    |
| -----: | ------: | ------ | ------------------------------------------- |
| 100.0% |     435 | `run`  | `org.jetbrains.kotlin.preloading.Preloader` |

##### `main` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|     % | Samples | Callee   | Location                                                |
| ----: | ------: | -------- | ------------------------------------------------------- |
| 99.4% |     357 | `doMain` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.6% |       2 | `<init>` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee | Location                                               |
| -----: | ------: | ------ | ------------------------------------------------------ |
| 100.0% |     359 | `main` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `invokeStatic` (`java.lang.invoke.LambdaForm$DMH.0x0000007001008000`)

|      % | Samples | Callee | Location                                     |
| -----: | ------: | ------ | -------------------------------------------- |
| 100.0% |     359 | `main` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000007001009400`)

|      % | Samples | Callee         | Location                                             |
| -----: | ------: | -------------- | ---------------------------------------------------- |
| 100.0% |     359 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000` |

##### `invokeExact_MT` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee         | Location                                             |
| -----: | ------: | -------------- | ---------------------------------------------------- |
| 100.0% |     359 | `invoke`       | `java.lang.invoke.LambdaForm$MH.0x0000007001009400`  |
|   1.4% |       5 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x0000007001230000` |
|   0.6% |       2 | `invokeStatic` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invokeImpl` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee           | Location                           |
| -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% |     359 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder` |

##### `invoke` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee       | Location                                          |
| -----: | ------: | ------------ | ------------------------------------------------- |
| 100.0% |     359 | `invokeImpl` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke` (`java.lang.reflect.Method`)

|      % | Samples | Callee              | Location                                          |
| -----: | ------: | ------------------- | ------------------------------------------------- |
| 100.0% |     359 | `invoke`            | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|   0.3% |       1 | `isCallerSensitive` | `java.lang.reflect.Method`                        |

##### `doMainNoExit$default` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % | Samples | Callee                   | Location                                                |
| ----: | ------: | ------------------------ | ------------------------------------------------------- |
| 99.7% |     356 | `doMainNoExit`           | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `defaultMessageRenderer` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                 | Location                                                |
| -----: | ------: | ---------------------- | ------------------------------------------------------- |
| 100.0% |     357 | `doMainNoExit$default` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                              | Location                                                                |
| -----: | ------: | ----------------------------------- | ----------------------------------------------------------------------- |
| 100.0% |     356 | `exec`                              | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|  95.8% |     341 | `execImpl`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|   2.5% |       9 | `<clinit>`                          | `org.jetbrains.kotlin.cli.common.ArgumentsKt`                           |
|   1.4% |       5 | `parseCommandLineArguments$default` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |
|   0.3% |       1 | `createArguments`                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                            |

##### `doMainNoExit` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee | Location                                      |
| -----: | ------: | ------ | --------------------------------------------- |
| 100.0% |     356 | `exec` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doExecutePhased` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee                         | Location                                                |
| -----: | ------: | ------------------------------ | ------------------------------------------------------- |
| 100.0% |     341 | `doExecutePhased`              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
|  99.7% |     340 | `execute`                      | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|   0.3% |       1 | `getDefaultPerformanceManager` | `org.jetbrains.kotlin.cli.common.CLICompiler`           |

##### `execImpl` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee            | Location                                     |
| -----: | ------: | ----------------- | -------------------------------------------- |
| 100.0% |     341 | `doExecutePhased` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `executeAndReturnPipeLineArtifact` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                     | Location                                                            |
| ----: | ------: | -------------------------- | ------------------------------------------------------------------- |
| 99.4% |     338 | `runPhasedPipeline`        | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`             |
|  0.3% |       1 | `disposeRootInWriteAction` | `org.jetbrains.kotlin.cli.common.UtilsKt`                           |
|  0.3% |       1 | `<init>`                   | `org.jetbrains.kotlin.cli.common.messages.GroupingMessageCollector` |

##### `executeAndReturnPipeLineArtifact$default` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                             | Location                                                |
| -----: | ------: | ---------------------------------- | ------------------------------------------------------- |
| 100.0% |     340 | `executeAndReturnPipeLineArtifact` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                     | Location                                                |
| -----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 100.0% |     340 | `executeAndReturnPipeLineArtifact$default` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `runPhasedPipeline` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                     | Location                                                                    |
| ----: | ------: | -------------------------- | --------------------------------------------------------------------------- |
| 99.7% |     337 | `invokeToplevel`           | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
|  0.3% |       1 | `reportToMessageCollector` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |

##### `phaseBody` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Callee         | Location                                                              |
| -----: | ------: | -------------- | --------------------------------------------------------------------- |
| 100.0% |     337 | `phaseBody`    | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                     |
|  67.1% |     226 | `executePhase` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
|  22.8% |      77 | `executePhase` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
|   8.9% |      30 | `executePhase` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
|   1.2% |       4 | `executePhase` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |

##### `invoke` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Callee      | Location                                                         |
| -----: | ------: | ----------- | ---------------------------------------------------------------- |
| 100.0% |     337 | `phaseBody` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
|   5.0% |      17 | `phaseBody` | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |
|   1.2% |       4 | `phaseBody` | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |
|   0.3% |       1 | `runBefore` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`          |
|   0.3% |       1 | `isEnabled` | `org.jetbrains.kotlin.config.phaser.PhaseConfig`                 |

##### `invoke` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`)

|      % | Samples | Callee   | Location                                                |
| -----: | ------: | -------- | ------------------------------------------------------- |
| 100.0% |     337 | `invoke` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invokeToplevel` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`)

|      % | Samples | Callee   | Location                                                    |
| -----: | ------: | -------- | ----------------------------------------------------------- |
| 100.0% |     337 | `invoke` | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase` |

##### `Compile::Code_Gen` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 55.2% |     155 | `PhaseChaitin::Register_Allocate`    | `<unknown>` |
| 16.0% |      45 | `Matcher::match`                     | `<unknown>` |
| 13.9% |      39 | `PhaseCFG::do_global_code_motion`    | `<unknown>` |
| 11.0% |      31 | `PhaseOutput::Output`                | `<unknown>` |
|  1.8% |       5 | `PhaseBlockLayout::PhaseBlockLayout` | `<unknown>` |

##### `Compiler::compile_method` (`<unknown>`)

|     % | Samples | Callee                      | Location    |
| ----: | ------: | --------------------------- | ----------- |
| 99.2% |     241 | `Compilation::Compilation`  | `<unknown>` |
|  0.8% |       2 | `Compilation::~Compilation` | `<unknown>` |

##### `Compilation::compile_method` (`<unknown>`)

|     % | Samples | Callee                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 87.6% |     211 | `Compilation::compile_java_method` | `<unknown>` |
| 11.2% |      27 | `ciEnv::register_method`           | `<unknown>` |
|  1.2% |       3 | `Dependencies::assert_common_1`    | `<unknown>` |

##### `Compilation::Compilation` (`<unknown>`)

|      % | Samples | Callee                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |     241 | `Compilation::compile_method` | `<unknown>` |

##### `executePhase` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`)

|      % | Samples | Callee                        | Location                                                         |
| -----: | ------: | ----------------------------- | ---------------------------------------------------------------- |
| 100.0% |     226 | `executePhase`                | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |
|  73.0% |     165 | `resolveAndCheckFir`          | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`                   |
|  10.2% |      23 | `createEnvironmentAndSources` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |
|   7.5% |      17 | `prepareJvmSessions`          | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |
|   6.6% |      15 | `buildFirViaLightTree`        | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`                   |

##### `Compilation::compile_java_method` (`<unknown>`)

|     % | Samples | Callee                        | Location    |
| ----: | ------: | ----------------------------- | ----------- |
| 42.2% |      89 | `Compilation::build_hir`      | `<unknown>` |
| 39.3% |      83 | `Compilation::emit_lir`       | `<unknown>` |
| 18.5% |      39 | `Compilation::emit_code_body` | `<unknown>` |

##### `Compile::Optimize` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 32.3% |      64 | `PhaseIdealLoop::optimize`             | `<unknown>` |
| 21.7% |      43 | `Compile::optimize_loops`              | `<unknown>` |
| 17.7% |      35 | `PhaseIterGVN::optimize`               | `<unknown>` |
|  7.6% |      15 | `PhaseCCP::PhaseCCP`                   | `<unknown>` |
|  5.6% |      11 | `PhaseMacroExpand::expand_macro_nodes` | `<unknown>` |

##### `resolveAndCheckFir` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`)

|     % | Samples | Callee          | Location                                      |
| ----: | ------: | --------------- | --------------------------------------------- |
| 74.5% |     123 | `runResolution` | `org.jetbrains.kotlin.fir.pipeline.AnalyseKt` |
| 25.5% |      42 | `runCheckers`   | `org.jetbrains.kotlin.fir.pipeline.AnalyseKt` |

##### `PhaseChaitin::Register_Allocate` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 22.6% |      35 | `PhaseChaitin::build_ifg_physical`         | `<unknown>` |
| 18.1% |      28 | `PhaseChaitin::Split`                      | `<unknown>` |
| 11.0% |      17 | `PhaseLive::compute`                       | `<unknown>` |
| 10.3% |      16 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |
|  8.4% |      13 | `PhaseChaitin::gather_lrg_masks`           | `<unknown>` |

##### `PhaseIdealLoop::optimize` (`<unknown>`)

|     % | Samples | Callee                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 84.1% |      90 | `PhaseIdealLoop::PhaseIdealLoop` | `<unknown>` |
| 15.0% |      16 | `PhaseIterGVN::optimize`         | `<unknown>` |
|  0.9% |       1 | `Chunk::next_chop`               | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 40.0% |      36 | `PhaseIdealLoop::build_loop_late`      | `<unknown>` |
| 15.6% |      14 | `PhaseIdealLoop::split_if_with_blocks` | `<unknown>` |
| 10.0% |       9 | `PhaseIdealLoop::build_loop_early`     | `<unknown>` |
|  8.9% |       8 | `PhaseIdealLoop::build_loop_tree`      | `<unknown>` |
|  7.8% |       7 | `PhaseIdealLoop::Dominators`           | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`<unknown>`)

|      % | Samples | Callee                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |      90 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `Compilation::build_hir` (`<unknown>`)

|     % | Samples | Callee                                       | Location    |
| ----: | ------: | -------------------------------------------- | ----------- |
| 79.8% |      71 | `IR::IR`                                     | `<unknown>` |
|  9.0% |       8 | `GlobalValueNumbering::GlobalValueNumbering` | `<unknown>` |
|  5.6% |       5 | `IR::eliminate_null_checks`                  | `<unknown>` |
|  1.1% |       1 | `IR::compute_code`                           | `<unknown>` |
|  1.1% |       1 | `Goto::visit`                                | `<unknown>` |

##### `Compilation::emit_lir` (`<unknown>`)

|     % | Samples | Callee                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 79.5% |      66 | `LinearScan::do_linear_scan`     | `<unknown>` |
| 19.3% |      16 | `BlockList::iterate_forward`     | `<unknown>` |
|  1.2% |       1 | `ControlFlowOptimizer::optimize` | `<unknown>` |

##### `WorkerThread::run` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 45.0% |      36 | `G1EvacuateRegionsBaseTask::work` | `<unknown>` |
| 30.0% |      24 | `G1RebuildRSAndScrubTask::work`   | `<unknown>` |
| 15.0% |      12 | `G1CMConcurrentMarkingTask::work` | `<unknown>` |
|  8.8% |       7 | `G1ParallelCleaningTask::work`    | `<unknown>` |
|  1.3% |       1 | `semaphore_wait_trap`             | `<unknown>` |

##### `loadClass` (`java.lang.ClassLoader`)

|     % | Samples | Callee                     | Location                                                 |
| ----: | ------: | -------------------------- | -------------------------------------------------------- |
| 93.2% |      69 | `findClass`                | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  2.7% |       2 | `findClass`                | `java.net.URLClassLoader`                                |
|  2.7% |       2 | `loadClass`                | `java.lang.ClassLoader`                                  |
|  2.7% |       2 | `findBootstrapClassOrNull` | `java.lang.ClassLoader`                                  |
|  1.4% |       1 | `findLoadedClass`          | `java.lang.ClassLoader`                                  |

##### `GraphBuilder::GraphBuilder` (`<unknown>`)

|     % | Samples | Callee                                      | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 83.1% |      59 | `GraphBuilder::iterate_all_blocks`          | `<unknown>` |
|  7.0% |       5 | `BlockListBuilder::BlockListBuilder`        | `<unknown>` |
|  5.6% |       4 | `BlockBegin::iterate_preorder`              | `<unknown>` |
|  1.4% |       1 | `GraphBuilder::state_at_entry`              | `<unknown>` |
|  1.4% |       1 | `GraphBuilder::iterate_bytecodes_for_block` | `<unknown>` |

##### `IRScope::IRScope` (`<unknown>`)

|      % | Samples | Callee                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |      71 | `GraphBuilder::GraphBuilder` | `<unknown>` |

##### `IR::IR` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |      71 | `IRScope::IRScope` | `<unknown>` |

##### `read` (`java.util.zip.InflaterInputStream`)

|     % | Samples | Callee    | Location                            |
| ----: | ------: | --------- | ----------------------------------- |
| 97.1% |      68 | `inflate` | `java.util.zip.Inflater`            |
|  2.9% |       2 | `fill`    | `java.util.zip.InflaterInputStream` |

##### `read` (`java.io.FilterInputStream`)

|     % | Samples | Callee | Location                       |
| ----: | ------: | ------ | ------------------------------ |
| 98.6% |      69 | `read` | `java.util.zip.ZipInputStream` |
|  4.3% |       3 | `read` | `java.io.BufferedInputStream`  |

##### `Parse::Parse` (`<unknown>`)

|     % | Samples | Callee                    | Location    |
| ----: | ------: | ------------------------- | ----------- |
| 97.1% |      67 | `Parse::do_all_blocks`    | `<unknown>` |
|  5.8% |       4 | `Parse::do_exits`         | `<unknown>` |
|  2.9% |       2 | `Parse::build_exits`      | `<unknown>` |
|  1.4% |       1 | `Parse::init_blocks`      | `<unknown>` |
|  1.4% |       1 | `Parse::create_entry_map` | `<unknown>` |

##### `ParseGenerator::generate` (`<unknown>`)

|      % | Samples | Callee         | Location    |
| -----: | ------: | -------------- | ----------- |
| 100.0% |      69 | `Parse::Parse` | `<unknown>` |

##### `defineClass` (`java.lang.ClassLoader`)

|     % | Samples | Callee            | Location                |
| ----: | ------: | ----------------- | ----------------------- |
| 98.6% |      68 | `defineClass`     | `java.lang.ClassLoader` |
| 94.2% |      65 | `defineClass1`    | `java.lang.ClassLoader` |
|  8.7% |       6 | `postDefineClass` | `java.lang.ClassLoader` |

##### `inflateBytesBytes` (`java.util.zip.Inflater`)

|     % | Samples | Callee                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 98.6% |      68 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |
|  1.4% |       1 | `inflate`                                       | `<unknown>` |

##### `inflate` (`java.util.zip.Inflater`)

|      % | Samples | Callee              | Location                 |
| -----: | ------: | ------------------- | ------------------------ |
| 100.0% |      69 | `inflateBytesBytes` | `java.util.zip.Inflater` |
|   1.4% |       1 | `inflate`           | `java.util.zip.Inflater` |

##### `read` (`java.util.zip.ZipInputStream`)

|     % | Samples | Callee   | Location                            |
| ----: | ------: | -------- | ----------------------------------- |
| 98.6% |      68 | `read`   | `java.util.zip.InflaterInputStream` |
|  1.4% |       1 | `update` | `java.util.zip.CRC32`               |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`<unknown>`)

|     % | Samples | Callee                              | Location    |
| ----: | ------: | ----------------------------------- | ----------- |
| 73.5% |      50 | `inflate_fast`                      | `<unknown>` |
| 22.1% |      15 | `inflate`                           | `<unknown>` |
|  2.9% |       2 | `jni_ReleasePrimitiveArrayCritical` | `<unknown>` |
|  1.5% |       1 | `jni_GetPrimitiveArrayCritical`     | `<unknown>` |

##### `Parse::do_one_block` (`<unknown>`)

|     % | Samples | Callee                   | Location    |
| ----: | ------: | ------------------------ | ----------- |
| 94.0% |      63 | `Parse::do_call`         | `<unknown>` |
| 13.4% |       9 | `Parse::do_field_access` | `<unknown>` |
|  6.0% |       4 | `Parse::do_one_bytecode` | `<unknown>` |
|  3.0% |       2 | `Parse::do_if`           | `<unknown>` |
|  3.0% |       2 | `Parse::do_checkcast`    | `<unknown>` |

##### `Parse::do_all_blocks` (`<unknown>`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      67 | `Parse::do_one_block` | `<unknown>` |
|   1.5% |       1 | `Parse::merge_common` | `<unknown>` |

##### `LinearScan::do_linear_scan` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 28.8% |      19 | `LinearScan::allocate_registers`       | `<unknown>` |
| 25.8% |      17 | `LinearScan::assign_reg_num`           | `<unknown>` |
| 19.7% |      13 | `LinearScan::build_intervals`          | `<unknown>` |
|  7.6% |       5 | `LinearScan::compute_local_live_sets`  | `<unknown>` |
|  4.5% |       3 | `LinearScan::compute_global_live_sets` | `<unknown>` |

##### `defineClass1` (`java.lang.ClassLoader`)

|     % | Samples | Callee                                    | Location                                                 |
| ----: | ------: | ----------------------------------------- | -------------------------------------------------------- |
| 95.4% |      62 | `Java_java_lang_ClassLoader_defineClass1` | `<unknown>`                                              |
| 24.6% |      16 | `loadClass`                               | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  1.5% |       1 | `loadClass`                               | `java.lang.ClassLoader`                                  |

##### `Parse::do_call` (`<unknown>`)

|     % | Samples | Callee                                                | Location    |
| ----: | ------: | ----------------------------------------------------- | ----------- |
| 63.5% |      40 | `PredictedCallGenerator::generate`                    | `<unknown>` |
| 58.7% |      37 | `ParseGenerator::generate`                            | `<unknown>` |
| 28.6% |      18 | `Compile::call_generator`                             | `<unknown>` |
|  4.8% |       3 | `GraphKit::record_profiled_arguments_for_speculation` | `<unknown>` |
|  3.2% |       2 | `ciBytecodeStream::get_method`                        | `<unknown>` |

##### `Java_java_lang_ClassLoader_defineClass1` (`<unknown>`)

|     % | Samples | Callee                      | Location    |
| ----: | ------: | --------------------------- | ----------- |
| 98.4% |      61 | `JVM_DefineClassWithSource` | `<unknown>` |
|  1.6% |       1 | `jni_GetByteArrayRegion`    | `<unknown>` |

##### `SystemDictionary::resolve_class_from_stream` (`<unknown>`)

|     % | Samples | Callee                                    | Location    |
| ----: | ------: | ----------------------------------------- | ----------- |
| 93.4% |      57 | `KlassFactory::create_from_stream`        | `<unknown>` |
|  6.6% |       4 | `SystemDictionary::define_instance_class` | `<unknown>` |

##### `jvm_define_class_common` (`<unknown>`)

|      % | Samples | Callee                                        | Location    |
| -----: | ------: | --------------------------------------------- | ----------- |
| 100.0% |      61 | `SystemDictionary::resolve_class_from_stream` | `<unknown>` |

##### `JVM_DefineClassWithSource` (`<unknown>`)

|      % | Samples | Callee                    | Location    |
| -----: | ------: | ------------------------- | ----------- |
| 100.0% |      61 | `jvm_define_class_common` | `<unknown>` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`<unknown>`)

|     % | Samples | Callee                        | Location    |
| ----: | ------: | ----------------------------- | ----------- |
| 83.3% |      50 | `GraphBuilder::invoke`        | `<unknown>` |
| 25.0% |      15 | `GraphBuilder::access_field`  | `<unknown>` |
|  5.0% |       3 | `GraphBuilder::new_instance`  | `<unknown>` |
|  1.7% |       1 | `GraphBuilder::method_return` | `<unknown>` |
|  1.7% |       1 | `ValueStack::push`            | `<unknown>` |

##### `KlassFactory::create_from_stream` (`<unknown>`)

|     % | Samples | Callee                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 91.7% |      55 | `ClassFileParser::ClassFileParser`            | `<unknown>` |
|  5.0% |       3 | `ClassFileParser::create_instance_klass`      | `<unknown>` |
|  1.7% |       1 | `ClassFileParser::~ClassFileParser`           | `<unknown>` |
|  1.7% |       1 | `ClassFileParser::post_process_parsed_stream` | `<unknown>` |

##### `GraphBuilder::iterate_all_blocks` (`<unknown>`)

|      % | Samples | Callee                                      | Location    |
| -----: | ------: | ------------------------------------------- | ----------- |
| 100.0% |      59 | `GraphBuilder::iterate_bytecodes_for_block` | `<unknown>` |

##### `PhaseIterGVN::optimize` (`<unknown>`)

|     % | Samples | Callee                        | Location    |
| ----: | ------: | ----------------------------- | ----------- |
| 94.8% |      55 | `PhaseIterGVN::transform_old` | `<unknown>` |
|  1.7% |       1 | `ProjNode::hash`              | `<unknown>` |
|  1.7% |       1 | `ConNode::hash`               | `<unknown>` |

##### `resumeWith` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % | Samples | Callee          | Location                                                                                 |
| ----: | ------: | --------------- | ---------------------------------------------------------------------------------------- |
| 69.1% |      38 | `invokeSuspend` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`    |
| 52.7% |      29 | `invokeSuspend` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1` |
| 12.7% |       7 | `invokeSuspend` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2` |
|  5.5% |       3 | `invokeSuspend` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$4` |
|  3.6% |       2 | `invokeSuspend` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$1` |

##### `getValue` (`kotlin.SafePublicationLazyImpl`)

|     % | Samples | Callee   | Location                                                                                                   |
| ----: | ------: | -------- | ---------------------------------------------------------------------------------------------------------- |
| 50.0% |       9 | `invoke` | `kotlin.reflect.jvm.internal.DescriptorKProperty$$Lambda$0`                                                |
| 16.7% |       3 | `invoke` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer$$Lambda.0x00000070015d74a0` |
| 16.7% |       3 | `invoke` | `org.jetbrains.kotlin.fir.resolve.calls.ImplicitReceiverValue$$Lambda.0x0000007001655c20`                  |
|  5.6% |       1 | `invoke` | `org.jetbrains.kotlin.fir.resolve.calls.ImplicitReceiverValue$$Lambda.0x00000070016d06c0`                  |
|  5.6% |       1 | `invoke` | `org.jetbrains.kotlin.fir.java.enhancement.FirLazyJavaAnnotationList$$Lambda.0x000000700160df88`           |

##### `getValue` (`kotlin.UnsafeLazyImpl`)

|     % | Samples | Callee   | Location                                                                                                                                                   |
| ----: | ------: | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 78.6% |      11 | `invoke` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver$$Lambda.0x0000007001688d28`                                                                        |
| 14.3% |       2 | `invoke` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate$$Lambda.0x0000007001674000`                                                                    |
|  7.1% |       1 | `invoke` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser$$Lambda.0x000000700160b4b8`                                           |
|  7.1% |       1 | `invoke` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformer$BodyResolveTransformerComponents$$Lambda.0x0000007001595f20` |

##### `getValue` (`kotlin.SynchronizedLazyImpl`)

|     % | Samples | Callee   | Location                                                                                         |
| ----: | ------: | -------- | ------------------------------------------------------------------------------------------------ |
| 30.8% |       4 | `invoke` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x000000700160f940`             |
| 23.1% |       3 | `invoke` | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$$Lambda.0x00000070017539f8`                       |
|  7.7% |       1 | `invoke` | `org.jetbrains.kotlin.diagnostics.KtDiagnosticFactoryToRendererMapKt$$Lambda.0x0000007001141e48` |
|  7.7% |       1 | `invoke` | `org.jetbrains.kotlin.backend.jvm.JvmSymbols$$Lambda.0x000000700180bb68`                         |
|  7.7% |       1 | `invoke` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x0000007001819420`                |

##### `getProperties` (`kotlin.reflect.jvm.internal.KClassImpl`)

|     % | Samples | Callee                             | Location                                                                                                                              |
| ----: | ------: | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| 66.7% |       6 | `getMemberScope$kotlin_reflection` | `kotlin.reflect.jvm.internal.KClassImpl`                                                                                              |
| 33.3% |       3 | `getContributedVariables`          | `kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedClassDescriptor$DeserializedClassMemberScope` |

##### `findPropertyDescriptor` (`kotlin.reflect.jvm.internal.KDeclarationContainerImpl`)

|      % | Samples | Callee          | Location                                 |
| -----: | ------: | --------------- | ---------------------------------------- |
| 100.0% |       9 | `getProperties` | `kotlin.reflect.jvm.internal.KClassImpl` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.1% |      42 | `inflate_fast` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes` (`java.util.zip.Inflater`) ← `inflate` ← `read` (`java.util.zip.InflaterInputStream`) ← `read` (`java.util.zip.ZipInputStream`) ← `read` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses` ← `run` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main`                                                                                                    |
| 1.6% |      21 | `PhaseChaitin::Split` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                            |
| 1.2% |      16 | `PhaseChaitin::build_ifg_physical` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                               |
| 0.8% |      11 | `PhaseChaitin::gather_lrg_masks` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                 |
| 0.7% |       9 | `inflate` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes` (`java.util.zip.Inflater`) ← `inflate` ← `read` (`java.util.zip.InflaterInputStream`) ← `read` (`java.util.zip.ZipInputStream`) ← `read` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses` ← `run` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main`                                                                                                         |
| 0.7% |       9 | `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                             |
| 0.7% |       9 | `PhaseAggressiveCoalesce::insert_copies` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                         |
| 0.6% |       8 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` ← `HeapRegionManager::par_iterate` ← `G1RebuildRSAndScrubTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start` |
| 0.5% |       7 | `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                       |
| 0.5% |       7 | `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                |
| 0.5% |       7 | `PhaseChaitin::elide_copy` ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                          |
| 0.4% |       6 | `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                             |
| 0.4% |       6 | `__psynch_cvwait` ← `PlatformMonitor::wait` ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                         |
| 0.4% |       6 | `PhaseIdealLoop::build_loop_early` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                            |
| 0.4% |       6 | `Node_Backward_Iterator::next` ← `PhaseCFG::schedule_late` ← `PhaseCFG::global_code_motion` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                      |
| 0.4% |       6 | `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                 |
| 0.4% |       6 | `Arena::contains` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                              |
| 0.4% |       6 | `IntervalWalker::walk_to` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                               |
| 0.4% |       5 | `inflate_fast` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes` (`java.util.zip.Inflater`) ← `inflate` ← `read` (`java.util.zip.InflaterInputStream`) ← `read` (`java.util.zip.ZipInputStream`) ← `read` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses` ← `preloadClasses` ← `run` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main`                                                                                 |
| 0.4% |       5 | `PhaseCFG::schedule_early` ← `PhaseCFG::global_code_motion` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                      |
