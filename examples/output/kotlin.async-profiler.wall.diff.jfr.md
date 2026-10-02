# Sampling profile diff

Collected 2,725 samples → 2,696 samples (-29 samples, -1.1%).

| Category         | Change | Delta |             % |       Samples |
| ---------------- | -----: | ----: | ------------: | ------------: |
| Native           |  -1.6% |   -42 | 94.5% → 94.0% | 2,576 → 2,534 |
| Compiler         |  +9.7% |   +10 |   3.8% → 4.2% |     103 → 113 |
| Ours             | +25.9% |    +7 |   1.0% → 1.3% |       27 → 34 |
| Unknown          | -12.5% |    -1 |          0.3% |         8 → 7 |
| Standard library | -25.0% |    -2 |   0.3% → 0.2% |         8 → 6 |
| JIT              | -33.3% |    -1 |          0.1% |         3 → 2 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % | Samples | Function                                                                                                                                                 | Location                                               |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
|     new |    +5 |  0.0% → 0.2% |   0 → 5 | `PhaseChaitin::elide_copy`                                                                                                                               | `libjvm.dylib`                                         |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `PhaseChaitin::build_ifg_physical`                                                                                                                       | `libjvm.dylib`                                         |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `Dictionary::find`                                                                                                                                       | `libjvm.dylib`                                         |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`                                         |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `PhaseCCP::analyze`                                                                                                                                      | `libjvm.dylib`                                         |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                   | `libjvm.dylib`                                         |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `sanitizeStackTrace(Throwable)`                                                                                                                          | `kotlin.jvm.internal.Intrinsics`                       |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `__psynch_mutexdrop`                                                                                                                                     | `libsystem_kernel.dylib`                               |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges`                                                                                       | `libjvm.dylib`                                         |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `unknown`                                                                                                                                                | `<unknown>`                                            |
|  +20.0% |    +1 |         0.2% |   5 → 6 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`                                         |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `DebugInformationRecorder::describe_scope`                                                                                                               | `libjvm.dylib`                                         |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseOutput::Output`                                                                                                                                    | `libjvm.dylib`                                         |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Arena::Arealloc`                                                                                                                                        | `libjvm.dylib`                                         |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseRemoveUseless::PhaseRemoveUseless`                                                                                                                 | `libjvm.dylib`                                         |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `IndexSetIterator::advance_and_next`                                                                                                                     | `libjvm.dylib`                                         |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                                  | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `AllocateHeap`                                                                                                                                           | `libjvm.dylib`                                         |
|  +20.0% |    +1 |         0.2% |   5 → 6 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`                                         |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `SymbolTable::lookup_only`                                                                                                                               | `libjvm.dylib`                                         |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                                                                                 | Location                 |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `Dictionary::find`                                                                                                                                       | `libjvm.dylib`           |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`           |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                   | `libjvm.dylib`           |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `__psynch_mutexdrop`                                                                                                                                     | `libsystem_kernel.dylib` |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `unknown`                                                                                                                                                | `<unknown>`              |
|  +20.0% |    +1 |         0.2% |   5 → 6 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Arena::Arealloc`                                                                                                                                        | `libjvm.dylib`           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `AllocateHeap`                                                                                                                                           | `libjvm.dylib`           |
|  +20.0% |    +1 |         0.2% |   5 → 6 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `SymbolTable::lookup_only`                                                                                                                               | `libjvm.dylib`           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `ConstantPool::klass_at_impl`                                                                                                                            | `libjvm.dylib`           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `ClassVerifier::verify_method`                                                                                                                           | `libjvm.dylib`           |
|  +25.0% |    +1 |  0.1% → 0.2% |   4 → 5 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`          |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `posix_madvise`                                                                                                                                          | `libsystem_kernel.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Mutex::lock_without_safepoint_check`                                                                                                                    | `libjvm.dylib`           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PathFrequency::to`                                                                                                                                      | `libjvm.dylib`           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `IRScopeDebugInfo::record_debug_info`                                                                                                                    | `libjvm.dylib`           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `__bsdthread_create`                                                                                                                                     | `libsystem_kernel.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `nanov2_find_block_and_allocate`                                                                                                                         | `libsystem_malloc.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `__open`                                                                                                                                                 | `libsystem_kernel.dylib` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                                           | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------ | -------------- |
|     new |    +5 |  0.0% → 0.2% |   0 → 5 | `PhaseChaitin::elide_copy`                                         | `libjvm.dylib` |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `PhaseChaitin::build_ifg_physical`                                 | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `PhaseCCP::analyze`                                                | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `DebugInformationRecorder::describe_scope`                         | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseOutput::Output`                                              | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseRemoveUseless::PhaseRemoveUseless`                           | `libjvm.dylib` |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `IndexSetIterator::advance_and_next`                               | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIdealLoop::build_loop_late`                                  | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Matcher::match_tree`                                              | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `NodeHash::hash_find_insert`                                       | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `LoadNode::Identity`                                               | `libjvm.dylib` |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `Node_Backward_Iterator::next`                                     | `libjvm.dylib` |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `PhaseIdealLoop::build_loop_late_post_work`                        | `libjvm.dylib` |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `PhaseChaitin::post_allocate_copy_removal`                         | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseCCP::transform`                                              | `libjvm.dylib` |
|  +50.0% |    +1 |         0.1% |   2 → 3 | `PhaseLive::compute`                                               | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `MethodLiveness::get_liveness_at`                                  | `libjvm.dylib` |
|  +50.0% |    +1 |         0.1% |   2 → 3 | `IntervalWalker::walk_to`                                          | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `GraphBuilder::append_with_bci`                                    | `libjvm.dylib` |

##### Ours

|  Change | Delta |            % | Samples | Function                                                                                                                                                                     | Location                                                                                          |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                                                      | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                            |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `transformFunctionCallInternal$org_jetbrains_kotlin_resolve(FirFunctionCall, ResolutionMode, FirExpressionsResolveTransformer$CallResolutionMode)`                           | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`     |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `transformStatementsIndexed(FirBlock, FirTransformer, Function1)`                                                                                                            | `org.jetbrains.kotlin.fir.expressions.FirExpressionUtilKt`                                        |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `runCompletion(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)` | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`                            |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitElement(FirElement, Void)`                                                                                                                                             | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                 |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `preprocessSuspendMarkers(MethodNode, boolean, boolean)`                                                                                                                     | `org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`                                        |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>(CodedInputStream, ExtensionRegistryLite)`                                                                                                                            | `org.jetbrains.kotlin.metadata.ProtoBuf$Function`                                                 |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `convertTypeParameter(LighterASTNode, List, FirBasedSymbol)`                                                                                                                 | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`                  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `constructType(FirClassifierSymbol, ConeTypeProjection[], boolean, ConeAttributes)`                                                                                          | `org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt`                                          |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `create(List)`                                                                                                                                                               | `org.jetbrains.kotlin.fir.types.ConeAttributes$Companion`                                         |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `newTypeCheckerState(TypeSystemContext, boolean, boolean, boolean)`                                                                                                          | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`                      |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `substituteOrSelf(ConeKotlinType)`                                                                                                                                           | `org.jetbrains.kotlin.fir.resolve.substitution.ConeSubstitutor$Empty`                             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `getSymbol()`                                                                                                                                                                | `org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`                                  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>(ConstraintSystemCompleter, ConstraintSystemCompleter$PostponedAtomAnalyzer)`                                                                                         | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter$$Lambda.0x0000000701699e90` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `enqueueResolverTask(TowerGroup, Function1)`                                                                                                                                 | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`                                |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `loadExtensionReceiverParameterAnnotations(DeserializedContainerSource, MessageLite, NameResolver, TypeTable, AnnotationDeserializer$CallableKind)`                          | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer`                   |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `rigidType(ProtoBuf$Type, ConeAttributes)`                                                                                                                                   | `org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer`                                    |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `exitJump(FirJump)`                                                                                                                                                          | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraphBuilder`                                |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>(TypeVariableMarker)`                                                                                                                                                 | `org.jetbrains.kotlin.fir.resolve.inference.model.ConeFixVariableConstraintPosition`              |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `findClass(JavaClassFinder$Request)`                                                                                                                                         | `org.jetbrains.kotlin.load.java.JavaClassFinderImpl`                                              |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |       Samples | Function                                                                 | Location                   |
| ------: | ----: | ------------: | ------------: | ------------------------------------------------------------------------ | -------------------------- |
|   -1.9% |   -25 | 47.7% → 47.3% | 1,299 → 1,274 | `__psynch_cvwait`                                                        | `libsystem_kernel.dylib`   |
|   -1.0% |   -10 |         35.9% |     979 → 969 | `semaphore_wait_trap`                                                    | `libsystem_kernel.dylib`   |
| removed |    -4 |   0.1% → 0.0% |         4 → 0 | `sys_icache_invalidate`                                                  | `libsystem_platform.dylib` |
|  -60.0% |    -3 |   0.2% → 0.1% |         5 → 2 | `InstanceKlass::find_method_index`                                       | `libjvm.dylib`             |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `Matcher::xform`                                                         | `libjvm.dylib`             |
|  -50.0% |    -2 |          0.1% |         4 → 2 | `PhaseChaitin::gather_lrg_masks`                                         | `libjvm.dylib`             |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `Symbol::Symbol`                                                         | `libjvm.dylib`             |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `SymbolTable::new_symbol`                                                | `libjvm.dylib`             |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `NativeNMethodBarrier::NativeNMethodBarrier`                             | `libjvm.dylib`             |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `Symbol::increment_refcount`                                             | `libjvm.dylib`             |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `itable stub`                                                            | `<unknown>`                |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` | `libjvm.dylib`             |
|  -66.7% |    -2 |  0.1% → <0.1% |         3 → 1 | `_platform_memset`                                                       | `libsystem_platform.dylib` |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `OopFlow::compute_reach`                                                 | `libjvm.dylib`             |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `Dependencies::assert_common_1`                                          | `libjvm.dylib`             |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `PhaseIFG::re_insert`                                                    | `libjvm.dylib`             |
|  -66.7% |    -2 |  0.1% → <0.1% |         3 → 1 | `ciObjectFactory::get_metadata`                                          | `libjvm.dylib`             |
|  -66.7% |    -2 |  0.1% → <0.1% |         3 → 1 | `ValueStack::values_do`                                                  | `libjvm.dylib`             |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `BytecodeStream::next`                                                   | `libjvm.dylib`             |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `OopMapValue::write_on`                                                  | `libjvm.dylib`             |

##### Native

|  Change | Delta |             % |       Samples | Function                                                                 | Location                   |
| ------: | ----: | ------------: | ------------: | ------------------------------------------------------------------------ | -------------------------- |
|   -1.9% |   -25 | 47.7% → 47.3% | 1,299 → 1,274 | `__psynch_cvwait`                                                        | `libsystem_kernel.dylib`   |
|   -1.0% |   -10 |         35.9% |     979 → 969 | `semaphore_wait_trap`                                                    | `libsystem_kernel.dylib`   |
| removed |    -4 |   0.1% → 0.0% |         4 → 0 | `sys_icache_invalidate`                                                  | `libsystem_platform.dylib` |
|  -60.0% |    -3 |   0.2% → 0.1% |         5 → 2 | `InstanceKlass::find_method_index`                                       | `libjvm.dylib`             |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `Symbol::Symbol`                                                         | `libjvm.dylib`             |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `SymbolTable::new_symbol`                                                | `libjvm.dylib`             |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `NativeNMethodBarrier::NativeNMethodBarrier`                             | `libjvm.dylib`             |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `Symbol::increment_refcount`                                             | `libjvm.dylib`             |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` | `libjvm.dylib`             |
|  -66.7% |    -2 |  0.1% → <0.1% |         3 → 1 | `_platform_memset`                                                       | `libsystem_platform.dylib` |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `Dependencies::assert_common_1`                                          | `libjvm.dylib`             |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `BytecodeStream::next`                                                   | `libjvm.dylib`             |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>`                 | `libjvm.dylib`             |
|   -1.1% |    -1 |          3.4% |       94 → 93 | `mach_msg2_trap`                                                         | `libsystem_kernel.dylib`   |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `DependencyContext::add_dependent_nmethod`                               | `libjvm.dylib`             |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `medium_free_list_remove_ptr`                                            | `libsystem_malloc.dylib`   |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `mach_absolute_time`                                                     | `libsystem_kernel.dylib`   |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `write`                                                                  | `libsystem_kernel.dylib`   |
|  -12.5% |    -1 |          0.3% |         8 → 7 | `inflate_fast`                                                           | `libzip.dylib`             |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `updateBytesCRC32`                                                       | `<unknown>`                |

##### Compiler

|  Change | Delta |            % | Samples | Function                                    | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------- | -------------- |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `Matcher::xform`                            | `libjvm.dylib` |
|  -50.0% |    -2 |         0.1% |   4 → 2 | `PhaseChaitin::gather_lrg_masks`            | `libjvm.dylib` |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `OopFlow::compute_reach`                    | `libjvm.dylib` |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `PhaseIFG::re_insert`                       | `libjvm.dylib` |
|  -66.7% |    -2 | 0.1% → <0.1% |   3 → 1 | `ciObjectFactory::get_metadata`             | `libjvm.dylib` |
|  -66.7% |    -2 | 0.1% → <0.1% |   3 → 1 | `ValueStack::values_do`                     | `libjvm.dylib` |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `OopMapValue::write_on`                     | `libjvm.dylib` |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `LinearScan::build_intervals`               | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ciObjectFactory::get_symbol`               | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ciTypeFlow::df_flow_types`                 | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhiNode::Ideal`                            | `libjvm.dylib` |
|  -50.0% |    -1 | 0.1% → <0.1% |   2 → 1 | `PhaseAggressiveCoalesce::insert_copies`    | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `MachProjNode::bottom_type`                 | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseIdealLoop::try_move_store_after_loop` | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseIFG::remove_node`                     | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Matcher::collect_null_checks`              | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ciEnv::register_method`                    | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_loop_tree`           | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseIterGVN::subsume_node`                | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Compile::identify_useful_nodes`            | `libjvm.dylib` |

##### Ours

|  Change | Delta |            % | Samples | Function                                                                                  | Location                                                                                  |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `parsePartialFrom(InputStream, ExtensionRegistryLite)`                                    | `org.jetbrains.kotlin.protobuf.AbstractParser`                                            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `mark()`                                                                                  | `com.intellij.lang.impl.PsiBuilderImpl`                                                   |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `processLegacyContractDescription(FirBlock, ConeDiagnostic)`                              | `org.jetbrains.kotlin.fir.builder.ConversionUtilsKt`                                      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `parseAnnotation(KotlinParsing$AnnotationParsingMode)`                                    | `org.jetbrains.kotlin.parsing.KotlinParsing`                                              |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>(KotlinJvmBinaryClass, byte[])`                                                    | `org.jetbrains.kotlin.load.kotlin.KotlinClassFinder$Result$KotlinClass`                   |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ensureResolvedTypeDeclaration(ConeKotlinType, FirSession, FirResolvePhase)`              | `org.jetbrains.kotlin.fir.resolve.transformers.PhaseUtilsKt`                              |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `prepareQualifiedTransform(FirQualifiedAccessExpression, FirNamedReferenceWithCandidate)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `size()`                                                                                  | `org.jetbrains.kotlin.utils.SmartList`                                                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `processNonLambdaArgument(ConeResolutionAtom, boolean)`                                   | `org.jetbrains.kotlin.fir.resolve.calls.stages.FirCallArgumentsProcessor`                 |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `isPreRelease()`                                                                          | `org.jetbrains.kotlin.load.kotlin.header.KotlinClassHeader`                               |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `equals(Object)`                                                                          | `org.jetbrains.kotlin.fir.types.ConeLookupTagBasedType`                                   |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>(ControlFlowGraph, FirFunctionCall, CFGNode, int)`                                 | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.FunctionCallArgumentsExitNode`                  |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `enterCallArguments(FirStatement, List)`                                                  | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`                                |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getMayHaveSyntheticFunctionTypes()`                                                      | `org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`                       |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `interceptTowerGroup(TowerGroup)`                                                         | `org.jetbrains.kotlin.fir.resolve.calls.tower.InvokeReceiverResolveTask`                  |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getLanguageVersionSettings(FirSession)`                                                  | `org.jetbrains.kotlin.fir.FirLanguageSettingsComponentKt`                                 |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getSubGraphs()`                                                                          | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraph`                               |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `asDefinitelyNotNullType(RigidTypeMarker)`                                                | `org.jetbrains.kotlin.fir.types.ConeTypeContext`                                          |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `isMarkedNullable(ConeKotlinType)`                                                        | `org.jetbrains.kotlin.fir.types.ConeTypeUtilsKt`                                          |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `toClassSymbol(ConeClassLikeLookupTag, FirSession)`                                       | `org.jetbrains.kotlin.fir.resolve.ToSymbolUtilsKt`                                        |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `sanitizeStackTrace(Throwable)` (`kotlin.jvm.internal.Intrinsics`)

| Change | Delta |             % | Samples | Location                             |
| -----: | ----: | ------------: | ------: | ------------------------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `kotlin.jvm.internal.Intrinsics:253` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|  Change | Delta |             % | Samples | Location                                                   |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils:184` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils:133` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils:142` |

##### `transformFunctionCallInternal$org_jetbrains_kotlin_resolve(FirFunctionCall, ResolutionMode, FirExpressionsResolveTransformer$CallResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`)

| Change | Delta |             % | Samples | Location                                                                                          |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer:694` |

##### `transformStatementsIndexed(FirBlock, FirTransformer, Function1)` (`org.jetbrains.kotlin.fir.expressions.FirExpressionUtilKt`)

| Change | Delta |             % | Samples | Location                                                       |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.expressions.FirExpressionUtilKt:248` |

##### `runCompletion(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)` (`org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`)

| Change | Delta |             % | Samples | Location                                                                   |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter:186` |

##### `visitElement(FirElement, Void)` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`)

| Change | Delta |             % | Samples | Location                                                                             |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor:56` |

##### `preprocessSuspendMarkers(MethodNode, boolean, boolean)` (`org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`)

| Change | Delta |             % | Samples | Location                                                       |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt:670` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`)

| Change | Delta |             % | Samples | Location                                                |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.metadata.ProtoBuf$Function:16542` |

##### `convertTypeParameter(LighterASTNode, List, FirBasedSymbol)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`)

| Change | Delta |             % | Samples | Location                                                                              |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder:4740` |

##### `constructType(FirClassifierSymbol, ConeTypeProjection[], boolean, ConeAttributes)` (`org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt`)

| Change | Delta |             % | Samples | Location                                                    |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt:52` |

##### `create(List)` (`org.jetbrains.kotlin.fir.types.ConeAttributes$Companion`)

| Change | Delta |             % | Samples | Location                                                     |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.types.ConeAttributes$Companion:86` |

##### `substituteOrSelf(ConeKotlinType)` (`org.jetbrains.kotlin.fir.resolve.substitution.ConeSubstitutor$Empty`)

| Change | Delta |             % | Samples | Location                                                                 |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.substitution.ConeSubstitutor$Empty:19` |

##### `getSymbol()` (`org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`)

| Change | Delta |             % | Samples | Location                                                            |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl:47` |

##### `enqueueResolverTask(TowerGroup, Function1)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`)

| Change | Delta |             % | Samples | Location                                                              |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager:59` |

##### `loadExtensionReceiverParameterAnnotations(DeserializedContainerSource, MessageLite, NameResolver, TypeTable, AnnotationDeserializer$CallableKind)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer`)

| Change | Delta |             % | Samples | Location                                                                            |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer:340` |

##### `rigidType(ProtoBuf$Type, ConeAttributes)` (`org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer`)

| Change | Delta |             % | Samples | Location                                                           |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer:214` |

##### `exitJump(FirJump)` (`org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraphBuilder`)

| Change | Delta |             % | Samples | Location                                                               |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraphBuilder:983` |

##### `<init>(TypeVariableMarker)` (`org.jetbrains.kotlin.fir.resolve.inference.model.ConeFixVariableConstraintPosition`)

| Change | Delta |             % | Samples | Location                                                                                |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.inference.model.ConeFixVariableConstraintPosition:26` |

##### `findClass(JavaClassFinder$Request)` (`org.jetbrains.kotlin.load.java.JavaClassFinderImpl`)

| Change | Delta |             % | Samples | Location                                                |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.load.java.JavaClassFinderImpl:49` |

##### `parsePartialFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.AbstractParser`)

|  Change | Delta |             % | Samples | Location                                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.protobuf.AbstractParser:192` |

##### `mark()` (`com.intellij.lang.impl.PsiBuilderImpl`)

|  Change | Delta |             % | Samples | Location                                    |
| ------: | ----: | ------------: | ------: | ------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `com.intellij.lang.impl.PsiBuilderImpl:883` |

##### `processLegacyContractDescription(FirBlock, ConeDiagnostic)` (`org.jetbrains.kotlin.fir.builder.ConversionUtilsKt`)

|  Change | Delta |             % | Samples | Location                                                 |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.builder.ConversionUtilsKt:545` |

##### `parseAnnotation(KotlinParsing$AnnotationParsingMode)` (`org.jetbrains.kotlin.parsing.KotlinParsing`)

|  Change | Delta |             % | Samples | Location                                         |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.parsing.KotlinParsing:948` |

##### `<init>(KotlinJvmBinaryClass, byte[])` (`org.jetbrains.kotlin.load.kotlin.KotlinClassFinder$Result$KotlinClass`)

|  Change | Delta |             % | Samples | Location                                                                   |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.load.kotlin.KotlinClassFinder$Result$KotlinClass:32` |

##### `ensureResolvedTypeDeclaration(ConeKotlinType, FirSession, FirResolvePhase)` (`org.jetbrains.kotlin.fir.resolve.transformers.PhaseUtilsKt`)

|  Change | Delta |             % | Samples | Location                                                        |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.transformers.PhaseUtilsKt:25` |

##### `prepareQualifiedTransform(FirQualifiedAccessExpression, FirNamedReferenceWithCandidate)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer`)

|  Change | Delta |             % | Samples | Location                                                                                      |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer:193` |

##### `size()` (`org.jetbrains.kotlin.utils.SmartList`)

|  Change | Delta |             % | Samples | Location                                   |
| ------: | ----: | ------------: | ------: | ------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.utils.SmartList:142` |

##### `processNonLambdaArgument(ConeResolutionAtom, boolean)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.FirCallArgumentsProcessor`)

|  Change | Delta |             % | Samples | Location                                                                      |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.calls.stages.FirCallArgumentsProcessor:169` |

##### `isPreRelease()` (`org.jetbrains.kotlin.load.kotlin.header.KotlinClassHeader`)

|  Change | Delta |             % | Samples | Location                                                       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.load.kotlin.header.KotlinClassHeader:65` |

##### `equals(Object)` (`org.jetbrains.kotlin.fir.types.ConeLookupTagBasedType`)

|  Change | Delta |             % | Samples | Location                                                    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.types.ConeLookupTagBasedType:114` |

##### `<init>(ControlFlowGraph, FirFunctionCall, CFGNode, int)` (`org.jetbrains.kotlin.fir.resolve.dfa.cfg.FunctionCallArgumentsExitNode`)

|  Change | Delta |             % | Samples | Location                                                                     |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.FunctionCallArgumentsExitNode:795` |

##### `enterCallArguments(FirStatement, List)` (`org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`)

|  Change | Delta |             % | Samples | Location                                                        |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer:1060` |

##### `getMayHaveSyntheticFunctionTypes()` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`)

|  Change | Delta |             % | Samples | Location                                                               |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider:93` |

##### `interceptTowerGroup(TowerGroup)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.InvokeReceiverResolveTask`)

|  Change | Delta |             % | Samples | Location                                                                     |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.calls.tower.InvokeReceiverResolveTask:443` |

##### `getLanguageVersionSettings(FirSession)` (`org.jetbrains.kotlin.fir.FirLanguageSettingsComponentKt`)

|  Change | Delta |             % | Samples | Location                                                     |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.FirLanguageSettingsComponentKt:19` |

##### `getSubGraphs()` (`org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraph`)

|  Change | Delta |             % | Samples | Location                                                       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraph:27` |

##### `asDefinitelyNotNullType(RigidTypeMarker)` (`org.jetbrains.kotlin.fir.types.ConeTypeContext`)

|  Change | Delta |             % | Samples | Location                                             |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.types.ConeTypeContext:128` |

##### `isMarkedNullable(ConeKotlinType)` (`org.jetbrains.kotlin.fir.types.ConeTypeUtilsKt`)

|  Change | Delta |             % | Samples | Location                                            |
| ------: | ----: | ------------: | ------: | --------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.types.ConeTypeUtilsKt:45` |

##### `toClassSymbol(ConeClassLikeLookupTag, FirSession)` (`org.jetbrains.kotlin.fir.resolve.ToSymbolUtilsKt`)

|  Change | Delta |             % | Samples | Location                                              |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.ToSymbolUtilsKt:93` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                     | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------- | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Dictionary::find` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                                       | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------ | -------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `SystemDictionary::resolve_instance_class_or_null`           | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `SystemDictionary::find_constrained_instance_or_array_klass` | `libjvm.dylib` |

##### `Arena::contains` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller           | Location       |
| -----: | ----: | ------------: | ------: | ---------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `Matcher::xform` | `libjvm.dylib` |

##### `PhaseCCP::analyze` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller               | Location       |
| -----: | ----: | ------------: | ------: | -------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `PhaseCCP::PhaseCCP` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                                                   | Location       |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------ | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` | `libjvm.dylib` |

##### `sanitizeStackTrace(Throwable)` (`kotlin.jvm.internal.Intrinsics`)

| Change | Delta |             % | Samples | Caller                            | Location                         |
| -----: | ----: | ------------: | ------: | --------------------------------- | -------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `throwParameterIsNullNPE(String)` | `kotlin.jvm.internal.Intrinsics` |

##### `__psynch_mutexdrop` (`libsystem_kernel.dylib`)

| Change | Delta |             % | Samples | Caller                                | Location                  |
| -----: | ----: | ------------: | ------: | ------------------------------------- | ------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `_pthread_mutex_firstfit_unlock_slow` | `libsystem_pthread.dylib` |

##### `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                             | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |

##### `unknown` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller    | Location    |
| ------: | ----: | -----: | ------: | --------- | ----------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `unknown` | `<unknown>` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                             | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- | -------------- |
| +66.7% |    +2 | 60.0% → 83.3% |   3 → 5 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
| -50.0% |    -1 | 40.0% → 16.7% |   2 → 1 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |

##### `DebugInformationRecorder::describe_scope` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                              | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `LIR_Assembler::process_debug_info` | `libjvm.dylib` |

##### `PhaseOutput::Output` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller              | Location       |
| -----: | ----: | ------------: | ------: | ------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller             | Location       |
| -----: | ----: | ------------: | ------: | ------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Node_Array::grow` | `libjvm.dylib` |

##### `PhaseRemoveUseless::PhaseRemoveUseless` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller             | Location       |
| -----: | ----: | ------------: | ------: | ------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Compile::Compile` | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseChaitin::Select`             | `libjvm.dylib` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `PhaseIFG::effective_degree`       | `libjvm.dylib` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|  Change | Delta |      % | Samples | Caller                                                                       | Location                                               |
| ------: | ----: | -----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| +100.0% |    +1 | 100.0% |   1 → 2 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `AllocateHeap` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                          | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `SymbolTable::do_add_if_needed` | `libjvm.dylib` |

##### `SymbolTable::do_lookup` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Caller                     | Location       |
| -----: | ----: | -------------: | ------: | -------------------------- | -------------- |
|    new |    +2 |   0.0% → 33.3% |   0 → 2 | `SymbolTable::new_symbol`  | `libjvm.dylib` |
| -20.0% |    -1 | 100.0% → 66.7% |   5 → 4 | `SymbolTable::lookup_only` | `libjvm.dylib` |

##### `SymbolTable::lookup_only` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                         | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |

##### `ConstantPool::klass_at_impl` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                       | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ConstantPool::klass_ref_at` | `libjvm.dylib` |

##### `ClassVerifier::verify_method` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                        | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ClassVerifier::verify_class` | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|  Change | Delta |            % | Samples | Caller                              | Location       |
| ------: | ----: | -----------: | ------: | ----------------------------------- | -------------- |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `Matcher::xform`                    | `libjvm.dylib` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `Matcher::ReduceInst`               | `libjvm.dylib` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `LinearScan::do_linear_scan`        | `libjvm.dylib` |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `TypeInterfaces::intersection_with` | `libjvm.dylib` |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `PhaseLive::compute`                | `libjvm.dylib` |

##### `posix_madvise` (`libsystem_kernel.dylib`)

|  Change | Delta |      % | Samples | Caller        | Location                 |
| ------: | ----: | -----: | ------: | ------------- | ------------------------ |
| +100.0% |    +1 | 100.0% |   1 → 2 | `free_medium` | `libsystem_malloc.dylib` |

##### `Mutex::lock_without_safepoint_check` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                              | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `JNIHandles::is_weak_global_handle` | `libjvm.dylib` |

##### `PathFrequency::to` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                             | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseIdealLoop::loop_predication_follow_branches` | `libjvm.dylib` |

##### `IRScopeDebugInfo::record_debug_info` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `CodeEmitInfo::record_debug_info` | `libjvm.dylib` |

##### `__bsdthread_create` (`libsystem_kernel.dylib`)

| Change | Delta |             % | Samples | Caller              | Location       |
| -----: | ----: | ------------: | ------: | ------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `os::create_thread` | `libjvm.dylib` |

##### `nanov2_find_block_and_allocate` (`libsystem_malloc.dylib`)

| Change | Delta |             % | Samples | Caller                     | Location                 |
| -----: | ----: | ------------: | ------: | -------------------------- | ------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `nanov2_allocate_outlined` | `libsystem_malloc.dylib` |

##### `__open` (`libsystem_kernel.dylib`)

| Change | Delta |             % | Samples | Caller       | Location        |
| -----: | ----: | ------------: | ------: | ------------ | --------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `handleOpen` | `libjava.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                               | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Matcher::match_tree` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller           | Location       |
| -----: | ----: | ------------: | ------: | ---------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Matcher::xform` | `libjvm.dylib` |

##### `NodeHash::hash_find_insert` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                           | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |

##### `LoadNode::Identity` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                           | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |

##### `Node_Backward_Iterator::next` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                    | Location       |
| -----: | ----: | -----------: | ------: | ------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseCFG::schedule_late` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                            | Location       |
| ------: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `PhaseIdealLoop::build_loop_late` | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                            | Location       |
| ------: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseCCP::transform` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                   | Location       |
| -----: | ----: | ------------: | ------: | ------------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseCCP::do_transform` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +50.0% |    +1 | 100.0% |   2 → 3 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `MethodLiveness::get_liveness_at` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                    | Location       |
| -----: | ----: | ------------: | ------: | ------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `LIRGenerator::state_for` | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                        | Location       |
| -----: | ----: | -----------: | ------: | ----------------------------- | -------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `LinearScan::compute_oop_map` | `libjvm.dylib` |

##### `GraphBuilder::append_with_bci` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                  | Location       |
| -----: | ----: | ------------: | ------: | ----------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `GraphBuilder::if_node` | `libjvm.dylib` |

##### `transformFunctionCallInternal$org_jetbrains_kotlin_resolve(FirFunctionCall, ResolutionMode, FirExpressionsResolveTransformer$CallResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`)

| Change | Delta |             % | Samples | Caller                                                   | Location                                                                                      |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `transformFunctionCall(FirFunctionCall, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `transformStatementsIndexed(FirBlock, FirTransformer, Function1)` (`org.jetbrains.kotlin.fir.expressions.FirExpressionUtilKt`)

| Change | Delta |             % | Samples | Caller                                                                                | Location                                                                                      |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `transformBlockInCurrentScope$org_jetbrains_kotlin_resolve(FirBlock, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `runCompletion(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)` (`org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`)

| Change | Delta |             % | Samples | Caller                                                                                                                                                                  | Location                                                               |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `complete(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)` | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |

##### `visitElement(FirElement, Void)` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`)

| Change | Delta |             % | Samples | Caller                                    | Location                                                                          |
| -----: | ----: | ------------: | ------: | ----------------------------------------- | --------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitWithCallOrAssignment(FirStatement)` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |

##### `preprocessSuspendMarkers(MethodNode, boolean, boolean)` (`org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`)

| Change | Delta |             % | Samples | Caller                                     | Location                                                |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | ------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `generateMethod(IrFunction, SourceMapper)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`)

| Change | Delta |             % | Samples | Caller                                                        | Location                                          |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- | ------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Function` |

##### `convertTypeParameter(LighterASTNode, List, FirBasedSymbol)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`)

| Change | Delta |             % | Samples | Caller                                                        | Location                                                                         |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- | -------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `convertTypeParameters(LighterASTNode, List, FirBasedSymbol)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder` |

##### `constructType(FirClassifierSymbol, ConeTypeProjection[], boolean, ConeAttributes)` (`org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt`)

| Change | Delta |             % | Samples | Caller                                                                                                              | Location                                                              |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `resolveUserType(FirUserTypeRef, FirTypeCandidateCollector$TypeResolutionResult, boolean, FirDeclaration, boolean)` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl` |

##### `create(List)` (`org.jetbrains.kotlin.fir.types.ConeAttributes$Companion`)

| Change | Delta |             % | Samples | Caller               | Location                                        |
| -----: | ----: | ------------: | ------: | -------------------- | ----------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `add(ConeAttribute)` | `org.jetbrains.kotlin.fir.types.ConeAttributes` |

##### `newTypeCheckerState(TypeSystemContext, boolean, boolean, boolean)` (`org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`)

| Change | Delta |             % | Samples | Caller                                           | Location                                                                     |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ | ---------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `newTypeCheckerState(boolean, boolean, boolean)` | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl` |

##### `substituteOrSelf(ConeKotlinType)` (`org.jetbrains.kotlin.fir.resolve.substitution.ConeSubstitutor$Empty`)

| Change | Delta |             % | Samples | Caller                                                       | Location                                                                                  |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `substituteType(ConeKotlinType, Candidate, ConeSubstitutor)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer` |

##### `getSymbol()` (`org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`)

| Change | Delta |             % | Samples | Caller        | Location                                                         |
| -----: | ----: | ------------: | ------: | ------------- | ---------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getSymbol()` | `org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl` |

##### `<init>(ConstraintSystemCompleter, ConstraintSystemCompleter$PostponedAtomAnalyzer)` (`org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter$$Lambda.0x0000000701699e90`)

| Change | Delta |             % | Samples | Caller                                     | Location                                     |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `newInvokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `enqueueResolverTask(TowerGroup, Function1)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`)

| Change | Delta |             % | Samples | Caller                                                                                 | Location                                                           |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `enqueueResolverTask$default(TowerResolveManager, TowerGroup, Function1, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager` |

##### `loadExtensionReceiverParameterAnnotations(DeserializedContainerSource, MessageLite, NameResolver, TypeTable, AnnotationDeserializer$CallableKind)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer`)

| Change | Delta |             % | Samples | Caller                                                                                  | Location                                                         |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `loadFunction(ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin)` | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer` |

##### `rigidType(ProtoBuf$Type, ConeAttributes)` (`org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer`)

| Change | Delta |             % | Samples | Caller                                | Location                                                       |
| -----: | ----: | ------------: | ------: | ------------------------------------- | -------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `type(ProtoBuf$Type, ConeAttributes)` | `org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer` |

##### `exitJump(FirJump)` (`org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraphBuilder`)

| Change | Delta |             % | Samples | Caller              | Location                                                   |
| -----: | ----: | ------------: | ------: | ------------------- | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `exitJump(FirJump)` | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer` |

##### `<init>(TypeVariableMarker)` (`org.jetbrains.kotlin.fir.resolve.inference.model.ConeFixVariableConstraintPosition`)

| Change | Delta |             % | Samples | Caller                                                                    | Location                                                               |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `fixVariable(ConstraintSystemCompletionContext, VariableWithConstraints)` | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |

##### `findClass(JavaClassFinder$Request)` (`org.jetbrains.kotlin.load.java.JavaClassFinderImpl`)

| Change | Delta |             % | Samples | Caller                       | Location                                      |
| -----: | ----: | ------------: | ------: | ---------------------------- | --------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `findClass(ClassId, byte[])` | `org.jetbrains.kotlin.fir.java.FirJavaFacade` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

| Change | Delta |             % |     Samples | Caller                  | Location                 |
| -----: | ----: | ------------: | ----------: | ----------------------- | ------------------------ |
|  -2.1% |   -21 | 78.4% → 78.3% | 1,018 → 997 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  -2.1% |    -2 |          7.2% |     94 → 92 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |
|  -1.1% |    -1 |   7.2% → 7.3% |     94 → 93 | `PlatformEvent::park`   | `libjvm.dylib`           |
|  -1.1% |    -1 |          7.2% |     93 → 92 | `Parker::park`          | `libjvm.dylib`           |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

| Change | Delta |             % |   Samples | Caller                           | Location       |
| -----: | ----: | ------------: | --------: | -------------------------------- | -------------- |
|  -1.1% |   -10 | 90.0% → 89.9% | 881 → 871 | `WorkerThread::run`              | `libjvm.dylib` |
|  -1.1% |    -1 |          9.6% |   94 → 93 | `os::signal_wait`                | `libjvm.dylib` |
|    new |    +1 |   0.0% → 0.1% |     0 → 1 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |

##### `sys_icache_invalidate` (`libsystem_platform.dylib`)

|  Change | Delta |            % | Samples | Caller                                         | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------------------- | -------------- |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `nmethod::nmethod`                             | `libjvm.dylib` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `InlineCacheBuffer::create_transition_stub`    | `libjvm.dylib` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `CompiledDirectStaticCall::set_to_interpreted` | `libjvm.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                  | Location       |
| ------: | ----: | -------------: | ------: | --------------------------------------- | -------------- |
|  -50.0% |    -2 | 80.0% → 100.0% |   4 → 2 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |
| removed |    -1 |   20.0% → 0.0% |   1 → 0 | `InstanceKlass::find_local_method`      | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller           | Location       |
| ------: | ----: | ------------: | ------: | ---------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `Matcher::match` | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Symbol::Symbol` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                                                                                                                                                                                                                                   | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `SymbolTable::new_symbols`                                                                                                                                                                                                                               | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::internal_insert_get<SymbolTableLookup, bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::insert<SymbolTableLookup>(Thread*, SymbolTableLookup&, Symbol const&, bool*, bool*)::NOP>` | `libjvm.dylib` |

##### `SymbolTable::new_symbol` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                         | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------ | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `InstanceKlass::set_package`   | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `SignatureStream::find_symbol` | `libjvm.dylib` |

##### `NativeNMethodBarrier::NativeNMethodBarrier` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                               | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------ | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `BarrierSetNMethod::guard_value`     | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `BarrierSetNMethod::set_guard_value` | `libjvm.dylib` |

##### `Symbol::increment_refcount` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                        | Location       |
| ------: | ----: | -----------: | ------: | ----------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PlaceholderTable::get_entry` | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `ciSymbol::ciSymbol`          | `libjvm.dylib` |

##### `itable stub` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                       | Location                                              |
| ------: | ----: | -----------: | ------: | -------------------------------------------- | ----------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `zip(Iterable, Iterable)`                    | `kotlin.collections.CollectionsKt___CollectionsKt`    |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `extractTypeParameters(IrDeclarationParent)` | `org.jetbrains.kotlin.ir.types.IrTypeSystemContextKt` |

##### `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                                                             | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb`  | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|  Change | Delta |             % | Samples | Caller                                           | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | -------------- |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_loop_late`                | `libjvm.dylib` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `PhaseIdealLoop::compute_early_ctrl`             | `libjvm.dylib` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `ciMethod::get_method_blocks`                    | `libjvm.dylib` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `ComputeLinearScanOrder::ComputeLinearScanOrder` | `libjvm.dylib` |

##### `OopFlow::compute_reach` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                      | Location       |
| ------: | ----: | ------------: | ------: | --------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseOutput::BuildOopMaps` | `libjvm.dylib` |

##### `Dependencies::assert_common_1` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                        | Location       |
| ------: | ----: | -----------: | ------: | ----------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `Parse::Parse`                | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `Compilation::compile_method` | `libjvm.dylib` |

##### `PhaseIFG::re_insert` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                 | Location       |
| ------: | ----: | ------------: | ------: | ---------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseChaitin::Select` | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                          | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------- |
| removed |    -2 |  66.7% → 0.0% |   2 → 0 | `ciBytecodeStream::get_method`  | `libjvm.dylib` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `ciMethodData::load_data`       | `libjvm.dylib` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `ciEnv::get_klass_by_name_impl` | `libjvm.dylib` |

##### `ValueStack::values_do` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `BlockBegin::state_values_do`    | `libjvm.dylib` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `Instruction::state_values_do`   | `libjvm.dylib` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `SubstitutionResolver::block_do` | `libjvm.dylib` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `UseCountComputer::block_do`     | `libjvm.dylib` |

##### `BytecodeStream::next` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                        | Location       |
| ------: | ----: | -----------: | ------: | ----------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `MethodData::initialize`      | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `MethodData::post_initialize` | `libjvm.dylib` |

##### `OopMapValue::write_on` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                        | Location       |
| ------: | ----: | -----------: | ------: | ----------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `OopMap::set_oop`             | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `LinearScan::compute_oop_map` | `libjvm.dylib` |

##### `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                                                    | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `void InstanceMirrorKlass::oop_oop_iterate_reverse<narrowOop, G1ScanEvacuatedObjClosure>` | `libjvm.dylib` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller               | Location                 |
| -----: | ----: | -----: | ------: | -------------------- | ------------------------ |
|  -1.1% |    -1 | 100.0% | 94 → 93 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `DependencyContext::add_dependent_nmethod` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                 | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `InstanceKlass::add_dependent_nmethod` | `libjvm.dylib` |

##### `medium_free_list_remove_ptr` (`libsystem_malloc.dylib`)

|  Change | Delta |             % | Samples | Caller                         | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------------ | ------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `medium_malloc_from_free_list` | `libsystem_malloc.dylib` |

##### `mach_absolute_time` (`libsystem_kernel.dylib`)

|  Change | Delta |             % | Samples | Caller                | Location       |
| ------: | ----: | ------------: | ------: | --------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `os::elapsed_counter` | `libjvm.dylib` |

##### `write` (`libsystem_kernel.dylib`)

|  Change | Delta |             % | Samples | Caller                  | Location                 |
| ------: | ----: | ------------: | ------: | ----------------------- | ------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Profiler::runInternal` | `libasyncProfiler.dylib` |

##### `inflate_fast` (`libzip.dylib`)

| Change | Delta |      % | Samples | Caller                                          | Location       |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | -------------- |
| -12.5% |    -1 | 100.0% |   8 → 7 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `updateBytesCRC32` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                               | Location              |
| ------: | ----: | ------------: | ------: | ------------------------------------ | --------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `updateBytes(int, byte[], int, int)` | `java.util.zip.CRC32` |

##### `LinearScan::build_intervals` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                       | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `ciObjectFactory::get_symbol` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ciEnv::get_klass_by_index_impl` | `libjvm.dylib` |

##### `ciTypeFlow::df_flow_types` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                   | Location       |
| ------: | ----: | ------------: | ------: | ------------------------ | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ciTypeFlow::flow_types` | `libjvm.dylib` |

##### `PhiNode::Ideal` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                        | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `MachProjNode::bottom_type` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::try_move_store_after_loop` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIFG::remove_node` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                   | Location       |
| ------: | ----: | ------------: | ------: | ------------------------ | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseChaitin::Simplify` | `libjvm.dylib` |

##### `Matcher::collect_null_checks` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller           | Location       |
| ------: | ----: | ------------: | ------: | ---------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Matcher::xform` | `libjvm.dylib` |

##### `ciEnv::register_method` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                        | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Compilation::compile_method` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_tree` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIterGVN::subsume_node` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                        | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

##### `Compile::identify_useful_nodes` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                   | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `parsePartialFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.AbstractParser`)

|  Change | Delta |             % | Samples | Caller                                          | Location                                       |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ---------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `parseFrom(InputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.protobuf.AbstractParser` |

##### `mark()` (`com.intellij.lang.impl.PsiBuilderImpl`)

|  Change | Delta |             % | Samples | Caller   | Location                                   |
| ------: | ----: | ------------: | ------: | -------- | ------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `mark()` | `com.intellij.lang.impl.PsiBuilderAdapter` |

##### `processLegacyContractDescription(FirBlock, ConeDiagnostic)` (`org.jetbrains.kotlin.fir.builder.ConversionUtilsKt`)

|  Change | Delta |             % | Samples | Caller                                                         | Location                                                                         |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `convertFunctionBody(LighterASTNode, LighterASTNode, boolean)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder` |

##### `parseAnnotation(KotlinParsing$AnnotationParsingMode)` (`org.jetbrains.kotlin.parsing.KotlinParsing`)

|  Change | Delta |             % | Samples | Caller                                                       | Location                                     |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------ | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `parseAnnotationOrList(KotlinParsing$AnnotationParsingMode)` | `org.jetbrains.kotlin.parsing.KotlinParsing` |

##### `<init>(KotlinJvmBinaryClass, byte[])` (`org.jetbrains.kotlin.load.kotlin.KotlinClassFinder$Result$KotlinClass`)

|  Change | Delta |             % | Samples | Caller                                                  | Location                                                          |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------- | ----------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `create$lambda$0(VirtualFile, byte[], MetadataVersion)` | `org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory` |

##### `ensureResolvedTypeDeclaration(ConeKotlinType, FirSession, FirResolvePhase)` (`org.jetbrains.kotlin.fir.resolve.transformers.PhaseUtilsKt`)

|  Change | Delta |             % | Samples | Caller                                                                                            | Location                                                     |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ensureResolvedTypeDeclaration$default(ConeKotlinType, FirSession, FirResolvePhase, int, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.PhaseUtilsKt` |

##### `prepareQualifiedTransform(FirQualifiedAccessExpression, FirNamedReferenceWithCandidate)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer`)

|  Change | Delta |             % | Samples | Caller                                                         | Location                                                                                  |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `transformFunctionCall(FirFunctionCall, ExpectedArgumentType)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer` |

##### `size()` (`org.jetbrains.kotlin.utils.SmartList`)

|  Change | Delta |             % | Samples | Caller      | Location                       |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `isEmpty()` | `java.util.AbstractCollection` |

##### `processNonLambdaArgument(ConeResolutionAtom, boolean)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.FirCallArgumentsProcessor`)

|  Change | Delta |             % | Samples | Caller                            | Location                                                                  |
| ------: | ----: | ------------: | ------: | --------------------------------- | ------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `processNonLambdaArguments(List)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.FirCallArgumentsProcessor` |

##### `isPreRelease()` (`org.jetbrains.kotlin.load.kotlin.header.KotlinClassHeader`)

|  Change | Delta |             % | Samples | Caller                                        | Location                                                                        |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `isPreReleaseInvisible(KotlinJvmBinaryClass)` | `org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider` |

##### `equals(Object)` (`org.jetbrains.kotlin.fir.types.ConeLookupTagBasedType`)

|  Change | Delta |             % | Samples | Caller                     | Location                         |
| ------: | ----: | ------------: | ------: | -------------------------- | -------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `areEqual(Object, Object)` | `kotlin.jvm.internal.Intrinsics` |

##### `<init>(ControlFlowGraph, FirFunctionCall, CFGNode, int)` (`org.jetbrains.kotlin.fir.resolve.dfa.cfg.FunctionCallArgumentsExitNode`)

|  Change | Delta |             % | Samples | Caller                                                                                   | Location                                                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `createFunctionCallArgumentsExitNode(ControlFlowGraphBuilder, FirFunctionCall, CFGNode)` | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraphNodeBuilderKt` |

##### `enterCallArguments(FirStatement, List)` (`org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                             | Location                                                                                      |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `transformFunctionCallInternal$org_jetbrains_kotlin_resolve(FirFunctionCall, ResolutionMode, FirExpressionsResolveTransformer$CallResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `getMayHaveSyntheticFunctionTypes()` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`)

|  Change | Delta |             % | Samples | Caller                               | Location                                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------ | ------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `mayHaveTopLevelClassifier(ClassId)` | `org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider` |

##### `interceptTowerGroup(TowerGroup)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.InvokeReceiverResolveTask`)

|  Change | Delta |             % | Samples | Caller                                                                               | Location                                                               |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask` |

##### `getLanguageVersionSettings(FirSession)` (`org.jetbrains.kotlin.fir.FirLanguageSettingsComponentKt`)

|  Change | Delta |             % | Samples | Caller                                                                                                                      | Location                                                                             |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `computeMustUseReturnValueForCallable(FirSession, FirCallableSymbol, boolean, FirClassLikeSymbol, FirPropertySymbol, List)` | `org.jetbrains.kotlin.fir.declarations.FirMustUseReturnValueStatusComponent$Default` |

##### `getSubGraphs()` (`org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraph`)

|  Change | Delta |             % | Samples | Caller                                     | Location                                                   |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | ---------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `completePostponedNodes(ControlFlowGraph)` | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer` |

##### `asDefinitelyNotNullType(RigidTypeMarker)` (`org.jetbrains.kotlin.fir.types.ConeTypeContext`)

|  Change | Delta |             % | Samples | Caller                                     | Location                                         |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | ------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `asDefinitelyNotNullType(RigidTypeMarker)` | `org.jetbrains.kotlin.fir.types.ConeTypeContext` |

##### `isMarkedNullable(ConeKotlinType)` (`org.jetbrains.kotlin.fir.types.ConeTypeUtilsKt`)

|  Change | Delta |             % | Samples | Caller                                                          | Location                                                                   |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------- | -------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `check(CheckerContext, DiagnosticReporter, FirResolvedTypeRef)` | `org.jetbrains.kotlin.fir.analysis.checkers.type.RedundantNullableChecker` |

##### `toClassSymbol(ConeClassLikeLookupTag, FirSession)` (`org.jetbrains.kotlin.fir.resolve.ToSymbolUtilsKt`)

|  Change | Delta |             % | Samples | Caller                                                 | Location                                           |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------ | -------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `toClassSymbol(SessionHolder, ConeClassLikeLookupTag)` | `org.jetbrains.kotlin.fir.resolve.ToSymbolUtilsKt` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |            % |   Samples | Function                                             | Location                                                                                                 |
| ------: | ----: | -----------: | --------: | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
|  +15.2% |   +15 |  3.6% → 4.2% |  99 → 114 | `C2Compiler::compile_method`                         | `libjvm.dylib`                                                                                           |
|  +14.1% |   +14 |  3.6% → 4.2% |  99 → 113 | `Compile::Compile`                                   | `libjvm.dylib`                                                                                           |
|  +50.0% |   +11 |  0.8% → 1.2% |   22 → 33 | `PhaseChaitin::Register_Allocate`                    | `libjvm.dylib`                                                                                           |
|     new |   +11 |  0.0% → 0.4% |    0 → 11 | `PhaseCCP::PhaseCCP`                                 | `libjvm.dylib`                                                                                           |
|     new |    +9 |  0.0% → 0.3% |     0 → 9 | `PhaseCCP::analyze`                                  | `libjvm.dylib`                                                                                           |
|  +16.3% |    +8 |  1.8% → 2.1% |   49 → 57 | `Compile::Code_Gen`                                  | `libjvm.dylib`                                                                                           |
|   +4.6% |    +7 |  5.6% → 5.9% | 153 → 160 | `CompileBroker::invoke_compiler_on_method`           | `libjvm.dylib`                                                                                           |
| +700.0% |    +7 | <0.1% → 0.3% |     1 → 8 | `PhaseChaitin::build_ifg_physical`                   | `libjvm.dylib`                                                                                           |
| +600.0% |    +6 | <0.1% → 0.3% |     1 → 7 | `PhaseChaitin::post_allocate_copy_removal`           | `libjvm.dylib`                                                                                           |
|  +13.5% |    +5 |  1.4% → 1.6% |   37 → 42 | `Compile::Optimize`                                  | `libjvm.dylib`                                                                                           |
| +500.0% |    +5 | <0.1% → 0.2% |     1 → 6 | `LIRGenerator::block_do`                             | `libjvm.dylib`                                                                                           |
| +500.0% |    +5 | <0.1% → 0.2% |     1 → 6 | `BlockList::iterate_forward`                         | `libjvm.dylib`                                                                                           |
|     new |    +5 |  0.0% → 0.2% |     0 → 5 | `PhaseChaitin::elide_copy`                           | `libjvm.dylib`                                                                                           |
| +133.3% |    +4 |  0.1% → 0.3% |     3 → 7 | `DebugInformationRecorder::describe_scope`           | `libjvm.dylib`                                                                                           |
| +400.0% |    +4 | <0.1% → 0.2% |     1 → 5 | `transformResult(FirTransformer, Object)`            | `org.jetbrains.kotlin.fir.expressions.impl.FirRegularWhenBranch`                                         |
| +200.0% |    +4 |  0.1% → 0.2% |     2 → 6 | `transformWhenBranch(FirWhenBranch, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer`  |
| +200.0% |    +4 |  0.1% → 0.2% |     2 → 6 | `transformWhenBranch(FirWhenBranch, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
| +200.0% |    +4 |  0.1% → 0.2% |     2 → 6 | `transformWhenBranch(FirWhenBranch, Object)`         | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
| +200.0% |    +4 |  0.1% → 0.2% |     2 → 6 | `transform(FirTransformer, Object)`                  | `org.jetbrains.kotlin.fir.expressions.FirWhenBranch`                                                     |
| +200.0% |    +4 |  0.1% → 0.2% |     2 → 6 | `transformBranches(FirTransformer, Object)`          | `org.jetbrains.kotlin.fir.expressions.impl.FirWhenExpressionImpl`                                        |

##### Native

|  Change | Delta |            % | Samples | Function                                           | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------------------------- | -------------- |
|  +75.0% |    +3 |  0.1% → 0.3% |   4 → 7 | `LinkResolver::resolve_invoke`                     | `libjvm.dylib` |
| +150.0% |    +3 |  0.1% → 0.2% |   2 → 5 | `Verifier::verify`                                 | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `Dictionary::find`                                 | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `Arena::contains`                                  | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `G1ConcurrentMarkThread::phase_mark_loop`          | `libjvm.dylib` |
|  +66.7% |    +2 |  0.1% → 0.2% |   3 → 5 | `G1ConcurrentMarkThread::concurrent_mark_cycle_do` | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `ConstantPool::klass_at_impl`                      | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `ConstantPool::klass_ref_at`                       | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `LinkInfo::LinkInfo`                               | `libjvm.dylib` |
|  +50.0% |    +2 |  0.1% → 0.2% |   4 → 6 | `InterpreterRuntime::resolve_invoke`               | `libjvm.dylib` |
| +100.0% |    +2 |         0.1% |   2 → 4 | `SharedRuntime::resolve_sub_helper`                | `libjvm.dylib` |
| +100.0% |    +2 |         0.1% |   2 → 4 | `SharedRuntime::resolve_helper`                    | `libjvm.dylib` |
|  +40.0% |    +2 |  0.2% → 0.3% |   5 → 7 | `InstanceKlass::link_class_impl`                   | `libjvm.dylib` |
|  +40.0% |    +2 |  0.2% → 0.3% |   5 → 7 | `InstanceKlass::initialize_impl`                   | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `CompiledIC::set_to_monomorphic`                   | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `SharedRuntime::resolve_sub_helper_internal`       | `libjvm.dylib` |
| +100.0% |    +2 |         0.1% |   2 → 4 | `ClassVerifier::verify_class`                      | `libjvm.dylib` |
| +100.0% |    +2 |         0.1% |   2 → 4 | `InterpreterRuntime::_new`                         | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `G1CMTask::do_marking_step`                        | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `G1CMConcurrentMarkingTask::work`                  | `libjvm.dylib` |

##### Compiler

|  Change | Delta |            % |   Samples | Function                                   | Location       |
| ------: | ----: | -----------: | --------: | ------------------------------------------ | -------------- |
|  +15.2% |   +15 |  3.6% → 4.2% |  99 → 114 | `C2Compiler::compile_method`               | `libjvm.dylib` |
|  +14.1% |   +14 |  3.6% → 4.2% |  99 → 113 | `Compile::Compile`                         | `libjvm.dylib` |
|  +50.0% |   +11 |  0.8% → 1.2% |   22 → 33 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
|     new |   +11 |  0.0% → 0.4% |    0 → 11 | `PhaseCCP::PhaseCCP`                       | `libjvm.dylib` |
|     new |    +9 |  0.0% → 0.3% |     0 → 9 | `PhaseCCP::analyze`                        | `libjvm.dylib` |
|  +16.3% |    +8 |  1.8% → 2.1% |   49 → 57 | `Compile::Code_Gen`                        | `libjvm.dylib` |
|   +4.6% |    +7 |  5.6% → 5.9% | 153 → 160 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
| +700.0% |    +7 | <0.1% → 0.3% |     1 → 8 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| +600.0% |    +6 | <0.1% → 0.3% |     1 → 7 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  +13.5% |    +5 |  1.4% → 1.6% |   37 → 42 | `Compile::Optimize`                        | `libjvm.dylib` |
| +500.0% |    +5 | <0.1% → 0.2% |     1 → 6 | `LIRGenerator::block_do`                   | `libjvm.dylib` |
| +500.0% |    +5 | <0.1% → 0.2% |     1 → 6 | `BlockList::iterate_forward`               | `libjvm.dylib` |
|     new |    +5 |  0.0% → 0.2% |     0 → 5 | `PhaseChaitin::elide_copy`                 | `libjvm.dylib` |
| +133.3% |    +4 |  0.1% → 0.3% |     3 → 7 | `DebugInformationRecorder::describe_scope` | `libjvm.dylib` |
|     new |    +4 |  0.0% → 0.1% |     0 → 4 | `ciEnv::get_klass_by_name_impl`            | `libjvm.dylib` |
|  +17.6% |    +3 |  0.6% → 0.7% |   17 → 20 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
|  +17.6% |    +3 |  0.6% → 0.7% |   17 → 20 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
|  +60.0% |    +3 |  0.2% → 0.3% |     5 → 8 | `PhaseCFG::global_code_motion`             | `libjvm.dylib` |
|  +60.0% |    +3 |  0.2% → 0.3% |     5 → 8 | `PhaseCFG::do_global_code_motion`          | `libjvm.dylib` |
| +300.0% |    +3 | <0.1% → 0.1% |     1 → 4 | `PhaseGVN::transform_no_reclaim`           | `libjvm.dylib` |

##### Ours

|  Change | Delta |            % | Samples | Function                                                                                                                               | Location                                                                                                                                                                                                                                            |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +400.0% |    +4 | <0.1% → 0.2% |   1 → 5 | `transformResult(FirTransformer, Object)`                                                                                              | `org.jetbrains.kotlin.fir.expressions.impl.FirRegularWhenBranch`                                                                                                                                                                                    |
| +200.0% |    +4 |  0.1% → 0.2% |   2 → 6 | `transformWhenBranch(FirWhenBranch, ResolutionMode)`                                                                                   | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer`                                                                                                                                             |
| +200.0% |    +4 |  0.1% → 0.2% |   2 → 6 | `transformWhenBranch(FirWhenBranch, ResolutionMode)`                                                                                   | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`                                                                                                                                            |
| +200.0% |    +4 |  0.1% → 0.2% |   2 → 6 | `transformWhenBranch(FirWhenBranch, Object)`                                                                                           | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`                                                                                                                                            |
| +200.0% |    +4 |  0.1% → 0.2% |   2 → 6 | `transform(FirTransformer, Object)`                                                                                                    | `org.jetbrains.kotlin.fir.expressions.FirWhenBranch`                                                                                                                                                                                                |
| +200.0% |    +4 |  0.1% → 0.2% |   2 → 6 | `transformBranches(FirTransformer, Object)`                                                                                            | `org.jetbrains.kotlin.fir.expressions.impl.FirWhenExpressionImpl`                                                                                                                                                                                   |
|  +33.3% |    +3 |  0.3% → 0.4% |  9 → 12 | `transformSingle(FirElement, FirTransformer, Object)`                                                                                  | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`                                                                                                                                                                                            |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode, boolean, boolean, boolean)`                          | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`                                                                                                                                                       |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)`                                                     | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`                                                                                                                                                       |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)`                                                       | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`                                                                                                                                            |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `transformPropertyAccessExpression(FirPropertyAccessExpression, Object)`                                                               | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`                                                                                                                                            |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `transform(FirTransformer, Object)`                                                                                                    | `org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression`                                                                                                                                                                                  |
| +150.0% |    +3 |  0.1% → 0.2% |   2 → 5 | `transformBody(FirTransformer, Object)`                                                                                                | `org.jetbrains.kotlin.fir.declarations.impl.FirAnonymousFunctionImpl`                                                                                                                                                                               |
| +150.0% |    +3 |  0.1% → 0.2% |   2 → 5 | `transformAnonymousFunctionBody$lambda$0(FirDeclarationsResolveTransformer, FirAnonymousFunction, FirTypeRef)`                         | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`                                                                                                                                                      |
| +150.0% |    +3 |  0.1% → 0.2% |   2 → 5 | `invoke()`                                                                                                                             | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000f00168ce60 → org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x0000000701685978` |
| +150.0% |    +3 |  0.1% → 0.2% |   2 → 5 | `withAnonymousFunction(FirAnonymousFunction, SessionAndScopeSessionHolder, Function0)`                                                 | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext`                                                                                                                                                                     |
| +150.0% |    +3 |  0.1% → 0.2% |   2 → 5 | `transformAnonymousFunctionBody(FirAnonymousFunction, FirTypeRef)`                                                                     | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`                                                                                                                                                      |
| +150.0% |    +3 |  0.1% → 0.2% |   2 → 5 | `doTransformAnonymousFunctionBodyFromCallCompletion$org_jetbrains_kotlin_resolve(FirAnonymousFunctionExpression, FirResolvedTypeRef)`  | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`                                                                                                                                                      |
| +150.0% |    +3 |  0.1% → 0.2% |   2 → 5 | `analyzeAndGetLambdaReturnArguments$lambda$5$2(FirDeclarationsResolveTransformer, FirAnonymousFunctionExpression, FirResolvedTypeRef)` | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter$LambdaAnalyzerImpl`                                                                                                                                                                    |
| +150.0% |    +3 |  0.1% → 0.2% |   2 → 5 | `invoke()`                                                                                                                             | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter$LambdaAnalyzerImpl$$Lambda.0x000000f00168cc28 → org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter$LambdaAnalyzerImpl$$Lambda.0x0000000701685740`                             |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |       Samples | Function                                | Location                  |
| -----: | ----: | ------------: | ------------: | --------------------------------------- | ------------------------- |
|  -1.9% |   -25 | 47.7% → 47.3% | 1,299 → 1,274 | `__psynch_cvwait`                       | `libsystem_kernel.dylib`  |
|  -1.0% |   -23 |         82.6% | 2,251 → 2,228 | `_pthread_start`                        | `libsystem_pthread.dylib` |
|  -1.0% |   -23 |         82.6% | 2,251 → 2,228 | `thread_start`                          | `libsystem_pthread.dylib` |
|  -2.2% |   -22 | 37.4% → 37.0% |   1,019 → 997 | `PlatformMonitor::wait`                 | `libjvm.dylib`            |
|  -1.0% |   -22 | 79.1% → 79.2% | 2,156 → 2,134 | `Thread::call_run`                      | `libjvm.dylib`            |
|  -1.0% |   -22 | 79.1% → 79.2% | 2,156 → 2,134 | `thread_native_entry`                   | `libjvm.dylib`            |
|  -4.8% |   -13 |  10.0% → 9.6% |     272 → 259 | `Monitor::wait`                         | `libjvm.dylib`            |
|  -1.0% |   -10 |         35.9% |     979 → 969 | `semaphore_wait_trap`                   | `libsystem_kernel.dylib`  |
| -18.9% |   -10 |   1.9% → 1.6% |       53 → 43 | `Compiler::compile_method`              | `libjvm.dylib`            |
|  -1.2% |    -9 |         27.4% |     747 → 738 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib`            |
|  -1.0% |    -9 |         32.6% |     887 → 878 | `WorkerThread::run`                     | `libjvm.dylib`            |
|  -5.1% |    -9 |   6.5% → 6.2% |     177 → 168 | `CompileQueue::get`                     | `libjvm.dylib`            |
| -69.2% |    -9 |   0.5% → 0.1% |        13 → 4 | `PhaseIterGVN::optimize`                | `libjvm.dylib`            |
| -17.3% |    -9 |   1.9% → 1.6% |       52 → 43 | `Compilation::compile_method`           | `libjvm.dylib`            |
| -17.3% |    -9 |   1.9% → 1.6% |       52 → 43 | `Compilation::Compilation`              | `libjvm.dylib`            |
|  -1.0% |    -8 |         29.3% |     799 → 791 | `JavaThread::thread_main_inner`         | `libjvm.dylib`            |
| -66.7% |    -8 |   0.4% → 0.1% |        12 → 4 | `PhaseIterGVN::transform_old`           | `libjvm.dylib`            |
| -38.9% |    -7 |   0.7% → 0.4% |       18 → 11 | `LinearScan::do_linear_scan`            | `libjvm.dylib`            |
| -60.0% |    -6 |   0.4% → 0.1% |        10 → 4 | `GraphBuilder::try_inline_full`         | `libjvm.dylib`            |
| -60.0% |    -6 |   0.4% → 0.1% |        10 → 4 | `GraphBuilder::try_inline`              | `libjvm.dylib`            |

##### Native

|  Change | Delta |             % |       Samples | Function                                | Location                  |
| ------: | ----: | ------------: | ------------: | --------------------------------------- | ------------------------- |
|   -1.9% |   -25 | 47.7% → 47.3% | 1,299 → 1,274 | `__psynch_cvwait`                       | `libsystem_kernel.dylib`  |
|   -1.0% |   -23 |         82.6% | 2,251 → 2,228 | `_pthread_start`                        | `libsystem_pthread.dylib` |
|   -1.0% |   -23 |         82.6% | 2,251 → 2,228 | `thread_start`                          | `libsystem_pthread.dylib` |
|   -2.2% |   -22 | 37.4% → 37.0% |   1,019 → 997 | `PlatformMonitor::wait`                 | `libjvm.dylib`            |
|   -1.0% |   -22 | 79.1% → 79.2% | 2,156 → 2,134 | `Thread::call_run`                      | `libjvm.dylib`            |
|   -1.0% |   -22 | 79.1% → 79.2% | 2,156 → 2,134 | `thread_native_entry`                   | `libjvm.dylib`            |
|   -4.8% |   -13 |  10.0% → 9.6% |     272 → 259 | `Monitor::wait`                         | `libjvm.dylib`            |
|   -1.0% |   -10 |         35.9% |     979 → 969 | `semaphore_wait_trap`                   | `libsystem_kernel.dylib`  |
|  -18.9% |   -10 |   1.9% → 1.6% |       53 → 43 | `Compiler::compile_method`              | `libjvm.dylib`            |
|   -1.2% |    -9 |         27.4% |     747 → 738 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib`            |
|   -1.0% |    -9 |         32.6% |     887 → 878 | `WorkerThread::run`                     | `libjvm.dylib`            |
|   -1.0% |    -8 |         29.3% |     799 → 791 | `JavaThread::thread_main_inner`         | `libjvm.dylib`            |
|  -38.5% |    -5 |   0.5% → 0.3% |        13 → 8 | `ClassFileParser::parse_stream`         | `libjvm.dylib`            |
|  -38.5% |    -5 |   0.5% → 0.3% |        13 → 8 | `ClassFileParser::ClassFileParser`      | `libjvm.dylib`            |
|  -38.5% |    -5 |   0.5% → 0.3% |        13 → 8 | `IRScope::IRScope`                      | `libjvm.dylib`            |
|  -38.5% |    -5 |   0.5% → 0.3% |        13 → 8 | `IR::IR`                                | `libjvm.dylib`            |
| removed |    -4 |   0.1% → 0.0% |         4 → 0 | `InlineTree::check_can_parse`           | `libjvm.dylib`            |
| removed |    -4 |   0.1% → 0.0% |         4 → 0 | `CallGenerator::for_inline`             | `libjvm.dylib`            |
|  -36.4% |    -4 |   0.4% → 0.3% |        11 → 7 | `ClassFileParser::parse_constant_pool`  | `libjvm.dylib`            |
|  -26.7% |    -4 |   0.6% → 0.4% |       15 → 11 | `KlassFactory::create_from_stream`      | `libjvm.dylib`            |

##### Compiler

|  Change | Delta |            % |   Samples | Function                                    | Location       |
| ------: | ----: | -----------: | --------: | ------------------------------------------- | -------------- |
|   -5.1% |    -9 |  6.5% → 6.2% | 177 → 168 | `CompileQueue::get`                         | `libjvm.dylib` |
|  -69.2% |    -9 |  0.5% → 0.1% |    13 → 4 | `PhaseIterGVN::optimize`                    | `libjvm.dylib` |
|  -17.3% |    -9 |  1.9% → 1.6% |   52 → 43 | `Compilation::compile_method`               | `libjvm.dylib` |
|  -17.3% |    -9 |  1.9% → 1.6% |   52 → 43 | `Compilation::Compilation`                  | `libjvm.dylib` |
|  -66.7% |    -8 |  0.4% → 0.1% |    12 → 4 | `PhaseIterGVN::transform_old`               | `libjvm.dylib` |
|  -38.9% |    -7 |  0.7% → 0.4% |   18 → 11 | `LinearScan::do_linear_scan`                | `libjvm.dylib` |
|  -60.0% |    -6 |  0.4% → 0.1% |    10 → 4 | `GraphBuilder::try_inline_full`             | `libjvm.dylib` |
|  -60.0% |    -6 |  0.4% → 0.1% |    10 → 4 | `GraphBuilder::try_inline`                  | `libjvm.dylib` |
|  -50.0% |    -6 |  0.4% → 0.2% |    12 → 6 | `GraphBuilder::invoke`                      | `libjvm.dylib` |
|  -12.8% |    -6 |  1.7% → 1.5% |   47 → 41 | `Compilation::compile_java_method`          | `libjvm.dylib` |
|  -50.0% |    -5 |  0.4% → 0.2% |    10 → 5 | `Compile::optimize_loops`                   | `libjvm.dylib` |
|  -38.5% |    -5 |  0.5% → 0.3% |    13 → 8 | `Matcher::match`                            | `libjvm.dylib` |
|  -41.7% |    -5 |  0.4% → 0.3% |    12 → 7 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
|  -41.7% |    -5 |  0.4% → 0.3% |    12 → 7 | `GraphBuilder::iterate_all_blocks`          | `libjvm.dylib` |
|  -38.5% |    -5 |  0.5% → 0.3% |    13 → 8 | `GraphBuilder::GraphBuilder`                | `libjvm.dylib` |
|  -27.8% |    -5 |  0.7% → 0.5% |   18 → 13 | `Compilation::build_hir`                    | `libjvm.dylib` |
|  -66.7% |    -4 |  0.2% → 0.1% |     6 → 2 | `ciEnv::register_method`                    | `libjvm.dylib` |
| removed |    -4 |  0.1% → 0.0% |     4 → 0 | `PhaseChaitin::Select`                      | `libjvm.dylib` |
|  -80.0% |    -4 | 0.2% → <0.1% |     5 → 1 | `ciMethod::ensure_method_data`              | `libjvm.dylib` |
|  -50.0% |    -4 |  0.3% → 0.1% |     8 → 4 | `LinearScan::assign_reg_num`                | `libjvm.dylib` |

##### Ours

|  Change | Delta |            % | Samples | Function                                                                                                                                             | Location                                                                                                           |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
|  -55.6% |    -5 |  0.3% → 0.1% |   9 → 4 | `getValue(Object, Object)`                                                                                                                           | `org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`                                                             |
|  -83.3% |    -5 | 0.2% → <0.1% |   6 → 1 | `getClassLikeSymbolByClassId(ClassId)`                                                                                                               | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`                                |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `getValue(Object, Object)`                                                                                                                           | `org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCacheWithPostCompute`                                              |
|  -80.0% |    -4 | 0.2% → <0.1% |   5 → 1 | `computeClass(ClassId)`                                                                                                                              | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`                                |
|  -80.0% |    -4 | 0.2% → <0.1% |   5 → 1 | `access$computeClass(FirCachingCompositeSymbolProvider, ClassId)`                                                                                    | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`                                |
|  -80.0% |    -4 | 0.2% → <0.1% |   5 → 1 | `invoke(Object, Void)`                                                                                                                               | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$special$$inlined$createCache$1` |
|  -80.0% |    -4 | 0.2% → <0.1% |   5 → 1 | `invoke(Object, Object)`                                                                                                                             | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$special$$inlined$createCache$1` |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `getClass(ClassId, FirDeserializationContext)`                                                                                                       | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`                                   |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `getClass$default(AbstractFirDeserializedSymbolProvider, ClassId, FirDeserializationContext, int, Object)`                                           | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`                                   |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `getClassLikeSymbolByClassId(ClassId)`                                                                                                               | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`                                   |
|  -66.7% |    -4 |  0.2% → 0.1% |   6 → 2 | `invokeSuspend(Object)`                                                                                                                              | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                           |
|  -66.7% |    -4 |  0.2% → 0.1% |   6 → 2 | `processCandidate(Candidate, ResolutionContext, boolean, boolean)`                                                                                   | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`                                              |
|  -66.7% |    -4 |  0.2% → 0.1% |   6 → 2 | `processCandidate$default(ResolutionStageRunner, Candidate, ResolutionContext, boolean, boolean, int, Object)`                                       | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`                                              |
|  -40.0% |    -4 |  0.4% → 0.2% |  10 → 6 | `resolveCallAndSelectCandidate(FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext)`                                             | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                                           |
|  -40.0% |    -4 |  0.4% → 0.2% |  10 → 6 | `resolveCallAndSelectCandidate$default(FirCallResolver, FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext, int, Object)`       | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                                           |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `consumeCallableCandidate(FirCallableSymbol, CallInfo, TowerLevelProcessor)`                                                                         | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`                                                |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `processFunctionsByName$lambda$0(FirLookupTrackerComponent, CallInfo, Ref$BooleanRef, ScopeBasedTowerLevel, TowerLevelProcessor, FirCallableSymbol)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`                                                |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `invoke(Object)`                                                                                                                                     | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000f001673f80`                     |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `processSymbolsByName$lambda$0(Ref$BooleanRef, Function1, FirCallableSymbol)`                                                                        | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`                                                |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `invoke(Object)`                                                                                                                                     | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$$Lambda.0x000000f0015fe798`                     |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `C2Compiler::compile_method` (`libjvm.dylib`)

| Change | Delta |              % |  Samples | Callee             | Location       |
| -----: | ----: | -------------: | -------: | ------------------ | -------------- |
| +14.1% |   +14 | 100.0% → 99.1% | 99 → 113 | `Compile::Compile` | `libjvm.dylib` |
|    new |    +1 |    0.0% → 0.9% |    0 → 1 | `Chunk::next_chop` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                   | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | -------------- |
|  +16.3% |    +8 | 49.5% → 50.4% | 49 → 57 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  +13.5% |    +5 | 37.4% → 37.2% | 37 → 42 | `Compile::Optimize`                      | `libjvm.dylib` |
| removed |    -4 |   4.0% → 0.0% |   4 → 0 | `CallGenerator::for_inline`              | `libjvm.dylib` |
|  +22.2% |    +2 |   9.1% → 9.7% |  9 → 11 | `ParseGenerator::generate`               | `libjvm.dylib` |
|     new |    +2 |   0.0% → 1.8% |   0 → 2 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                     | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------ | -------------- |
| +700.0% |    +7 | 4.5% → 24.2% |   1 → 8 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| +600.0% |    +6 | 4.5% → 21.2% |   1 → 7 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
| removed |    -4 | 18.2% → 0.0% |   4 → 0 | `PhaseChaitin::Select`                     | `libjvm.dylib` |
|  -50.0% |    -2 | 18.2% → 6.1% |   4 → 2 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |
| +100.0% |    +2 | 9.1% → 12.1% |   2 → 4 | `PhaseLive::compute`                       | `libjvm.dylib` |

##### `PhaseCCP::PhaseCCP` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee              | Location       |
| -----: | ----: | -----------: | ------: | ------------------- | -------------- |
|    new |    +9 | 0.0% → 81.8% |   0 → 9 | `PhaseCCP::analyze` | `libjvm.dylib` |
|    new |    +1 |  0.0% → 9.1% |   0 → 1 | `ProjNode::Value`   | `libjvm.dylib` |
|    new |    +1 |  0.0% → 9.1% |   0 → 1 | `AddPNode::Value`   | `libjvm.dylib` |

##### `PhaseCCP::analyze` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                                   | Location       |
| -----: | ----: | -----------: | ------: | ---------------------------------------- | -------------- |
|    new |    +3 | 0.0% → 33.3% |   0 → 3 | `PhaseCCP::push_child_nodes_to_worklist` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 11.1% |   0 → 1 | `CmpPNode::sub`                          | `libjvm.dylib` |
|    new |    +1 | 0.0% → 11.1% |   0 → 1 | `LoadRangeNode::Opcode`                  | `libjvm.dylib` |
|    new |    +1 | 0.0% → 11.1% |   0 → 1 | `BoolNode::bottom_type`                  | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
|  +50.0% |   +11 | 44.9% → 57.9% | 22 → 33 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
|  -38.5% |    -5 | 26.5% → 14.0% |  13 → 8 | `Matcher::match`                  | `libjvm.dylib` |
|  +60.0% |    +3 | 10.2% → 14.0% |   5 → 8 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  +33.3% |    +2 | 12.2% → 14.0% |   6 → 8 | `PhaseOutput::Output`             | `libjvm.dylib` |
| removed |    -2 |   4.1% → 0.0% |   2 → 0 | `PhaseOutput::install_code`       | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|  Change | Delta |             % |  Samples | Callee                          | Location       |
| ------: | ----: | ------------: | -------: | ------------------------------- | -------------- |
|  +15.2% |   +15 | 64.7% → 71.3% | 99 → 114 | `C2Compiler::compile_method`    | `libjvm.dylib` |
|  -18.9% |   -10 | 34.6% → 26.9% |  53 → 43 | `Compiler::compile_method`      | `libjvm.dylib` |
|     new |    +2 |   0.0% → 1.3% |    0 → 2 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |
| removed |    -1 |   0.7% → 0.0% |    1 → 0 | `CompilationLog::log_compile`   | `libjvm.dylib` |
|     new |    +1 |   0.0% → 0.6% |    0 → 1 | `ciEnv::~ciEnv`                 | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                                             | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------ | -------------- |
|     new |    +2 |  0.0% → 25.0% |   0 → 2 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `libjvm.dylib` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Node::disconnect_inputs`                                          | `libjvm.dylib` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `IndexSetIterator::advance_and_next`                               | `libjvm.dylib` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `PhaseChaitin::compute_initial_block_pressure`                     | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                     | Location       |
| -----: | ----: | -----------: | ------: | -------------------------- | -------------- |
|    new |    +5 | 0.0% → 71.4% |   0 → 5 | `PhaseChaitin::elide_copy` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                 | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
|     new |   +11 |  0.0% → 26.2% |  0 → 11 | `PhaseCCP::PhaseCCP`                   | `libjvm.dylib` |
|  +77.8% |    +7 | 24.3% → 38.1% |  9 → 16 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
|  -50.0% |    -5 | 27.0% → 11.9% |  10 → 5 | `Compile::optimize_loops`              | `libjvm.dylib` |
|  -62.5% |    -5 |  21.6% → 7.1% |   8 → 3 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |
| removed |    -3 |   8.1% → 0.0% |   3 → 0 | `PhaseMacroExpand::expand_macro_nodes` | `libjvm.dylib` |

##### `LIRGenerator::block_do` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                         | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------ | -------------- |
|    new |    +3 | 0.0% → 50.0% |   0 → 3 | `LIRGenerator::do_Invoke`      | `libjvm.dylib` |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `LIRGenerator::do_ProfileCall` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `LIRGenerator::do_LoadField`   | `libjvm.dylib` |

##### `BlockList::iterate_forward` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Callee                   | Location       |
| ------: | ----: | -----: | ------: | ------------------------ | -------------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `LIRGenerator::block_do` | `libjvm.dylib` |

##### `DebugInformationRecorder::describe_scope` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Callee                                                                                                                                                   | Location                   |
| -----: | ----: | -------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| +66.7% |    +2 | 100.0% → 71.4% |   3 → 5 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
|    new |    +1 |   0.0% → 14.3% |   0 → 1 | `_platform_memcmp`                                                                                                                                       | `libsystem_platform.dylib` |

##### `transformResult(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirRegularWhenBranch`)

|  Change | Delta |      % | Samples | Callee                                    | Location                                                         |
| ------: | ----: | -----: | ------: | ----------------------------------------- | ---------------------------------------------------------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `transform(FirTransformer, Object)`       | `org.jetbrains.kotlin.fir.expressions.FirBlock`                  |
| +400.0% |    +4 | 100.0% |   1 → 5 | `transformResult(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.impl.FirRegularWhenBranch` |

##### `transformWhenBranch(FirWhenBranch, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer`)

|  Change | Delta |             % | Samples | Callee                                    | Location                                                         |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | ---------------------------------------------------------------- |
| +400.0% |    +4 | 50.0% → 83.3% |   1 → 5 | `transformResult(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.impl.FirRegularWhenBranch` |

##### `transformWhenBranch(FirWhenBranch, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

|  Change | Delta |      % | Samples | Callee                                               | Location                                                                                                |
| ------: | ----: | -----: | ------: | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| +200.0% |    +4 | 100.0% |   2 → 6 | `transformWhenBranch(FirWhenBranch, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer` |

##### `transformWhenBranch(FirWhenBranch, Object)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

|  Change | Delta |      % | Samples | Callee                                               | Location                                                                                                 |
| ------: | ----: | -----: | ------: | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| +200.0% |    +4 | 100.0% |   2 → 6 | `transformWhenBranch(FirWhenBranch, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirWhenBranch`)

|  Change | Delta |      % | Samples | Callee                                       | Location                                                                                                 |
| ------: | ----: | -----: | ------: | -------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| +200.0% |    +4 | 100.0% |   2 → 6 | `transformWhenBranch(FirWhenBranch, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `transformBranches(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirWhenExpressionImpl`)

|  Change | Delta |      % | Samples | Callee                                           | Location                                                          |
| ------: | ----: | -----: | ------: | ------------------------------------------------ | ----------------------------------------------------------------- |
| +200.0% |    +4 | 100.0% |   2 → 6 | `transformInplace(List, FirTransformer, Object)` | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`          |
| +200.0% |    +4 | 100.0% |   2 → 6 | `transformBranches(FirTransformer, Object)`      | `org.jetbrains.kotlin.fir.expressions.impl.FirWhenExpressionImpl` |

##### `LinkResolver::resolve_invoke` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
| +200.0% |    +2 | 25.0% → 42.9% |   1 → 3 | `LinkInfo::LinkInfo`                 | `libjvm.dylib` |
| +200.0% |    +2 | 25.0% → 42.9% |   1 → 3 | `LinkResolver::resolve_static_call`  | `libjvm.dylib` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `LinkResolver::resolve_virtual_call` | `libjvm.dylib` |

##### `Verifier::verify` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                        | Location       |
| ------: | ----: | -------------: | ------: | ----------------------------- | -------------- |
| +100.0% |    +2 | 100.0% → 80.0% |   2 → 4 | `ClassVerifier::verify_class` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 20.0% |   0 → 1 | `Verifier::inference_verify`  | `libjvm.dylib` |

##### `G1ConcurrentMarkThread::phase_mark_loop` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                             | Location       |
| ------: | ----: | -------------: | ------: | -------------------------------------------------- | -------------- |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `G1ConcurrentMarkThread::subphase_mark_from_roots` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 33.3% |   0 → 1 | `VMThread::execute`                                | `libjvm.dylib` |

##### `G1ConcurrentMarkThread::concurrent_mark_cycle_do` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                    | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | -------------- |
| +200.0% |    +2 | 33.3% → 60.0% |   1 → 3 | `G1ConcurrentMarkThread::phase_mark_loop` | `libjvm.dylib` |

##### `ConstantPool::klass_at_impl` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                              | Location       |
| ------: | ----: | -------------: | ------: | ----------------------------------- | -------------- |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `SystemDictionary::resolve_or_fail` | `libjvm.dylib` |

##### `ConstantPool::klass_ref_at` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Callee                        | Location       |
| ------: | ----: | -----: | ------: | ----------------------------- | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `ConstantPool::klass_at_impl` | `libjvm.dylib` |

##### `LinkInfo::LinkInfo` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Callee                       | Location       |
| ------: | ----: | -----: | ------: | ---------------------------- | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `ConstantPool::klass_ref_at` | `libjvm.dylib` |

##### `InterpreterRuntime::resolve_invoke` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                         | Location       |
| -----: | ----: | -----: | ------: | ------------------------------ | -------------- |
| +50.0% |    +2 | 100.0% |   4 → 6 | `LinkResolver::resolve_invoke` | `libjvm.dylib` |

##### `SharedRuntime::resolve_sub_helper` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                       | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | -------------- |
| +200.0% |    +2 | 50.0% → 75.0% |   1 → 3 | `SharedRuntime::resolve_sub_helper_internal` | `libjvm.dylib` |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `vframeStream::vframeStream`                 | `libjvm.dylib` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `SharedRuntime::find_callee_info_helper`     | `libjvm.dylib` |

##### `SharedRuntime::resolve_helper` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Callee                              | Location       |
| ------: | ----: | -----: | ------: | ----------------------------------- | -------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `SharedRuntime::resolve_sub_helper` | `libjvm.dylib` |

##### `InstanceKlass::link_class_impl` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                                 | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------ | -------------- |
| +150.0% |    +3 | 40.0% → 71.4% |   2 → 5 | `Verifier::verify`                                     | `libjvm.dylib` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `DeoptimizationScope::deoptimize_marked`               | `libjvm.dylib` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `klassVtable::initialize_vtable_and_check_constraints` | `libjvm.dylib` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `InstanceKlass::link_class_impl`                       | `libjvm.dylib` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `JvmtiExport::post_class_prepare`                      | `libjvm.dylib` |

##### `InstanceKlass::initialize_impl` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                           | Location       |
| -----: | ----: | -----: | ------: | -------------------------------- | -------------- |
| +40.0% |    +2 | 100.0% |   5 → 7 | `InstanceKlass::link_class_impl` | `libjvm.dylib` |

##### `CompiledIC::set_to_monomorphic` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                                    | Location       |
| -----: | ----: | -----------: | ------: | ----------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `CompiledIC::internal_set_ic_destination` | `libjvm.dylib` |

##### `SharedRuntime::resolve_sub_helper_internal` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Callee                           | Location       |
| ------: | ----: | -----: | ------: | -------------------------------- | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `CompiledIC::set_to_monomorphic` | `libjvm.dylib` |

##### `ClassVerifier::verify_class` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Callee                             | Location       |
| -----: | ----: | -------------: | ------: | ---------------------------------- | -------------- |
| +50.0% |    +1 | 100.0% → 75.0% |   2 → 3 | `ClassVerifier::verify_method`     | `libjvm.dylib` |
|    new |    +1 |   0.0% → 25.0% |   0 → 1 | `StackMapTable::check_jump_target` | `libjvm.dylib` |

##### `InterpreterRuntime::_new` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Callee                           | Location       |
| ------: | ----: | -----: | ------: | -------------------------------- | -------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `InstanceKlass::initialize_impl` | `libjvm.dylib` |

##### `G1CMTask::do_marking_step` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                         | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | -------------- |
|     new |    +2 |  0.0% → 66.7% |   0 → 2 | `G1CMBitMap::iterate`                          | `libjvm.dylib` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `void G1CMTask::process_grey_task_entry<true>` | `libjvm.dylib` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `G1CMTask::drain_local_queue`                  | `libjvm.dylib` |

##### `G1CMConcurrentMarkingTask::work` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Callee                      | Location       |
| ------: | ----: | -----: | ------: | --------------------------- | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `G1CMTask::do_marking_step` | `libjvm.dylib` |

##### `ciEnv::get_klass_by_name_impl` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                                                       | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------ | -------------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `SystemDictionary::find_constrained_instance_or_array_klass` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `SymbolTable::new_symbol`                                    | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `ciEnv::get_klass_by_name_impl`                              | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `ciObjectFactory::get_metadata`                              | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                      | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | -------------- |
|  +66.7% |    +2 | 17.6% → 25.0% |   3 → 5 | `PhaseIdealLoop::build_loop_late`           | `libjvm.dylib` |
| removed |    -2 |  11.8% → 0.0% |   2 → 0 | `Node::is_CFG`                              | `libjvm.dylib` |
|  +50.0% |    +1 | 11.8% → 15.0% |   2 → 3 | `PhaseIdealLoop::build_loop_early`          | `libjvm.dylib` |
| removed |    -1 |   5.9% → 0.0% |   1 → 0 | `PhaseIdealLoop::try_move_store_after_loop` | `libjvm.dylib` |
|  -33.3% |    -1 | 17.6% → 10.0% |   3 → 2 | `PhaseIdealLoop::split_if_with_blocks`      | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                               | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| +17.6% |    +3 | 100.0% | 17 → 20 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseCFG::global_code_motion` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                              | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
| +200.0% |    +2 | 20.0% → 37.5% |   1 → 3 | `PhaseCFG::schedule_late`           | `libjvm.dylib` |
|  +50.0% |    +1 | 40.0% → 37.5% |   2 → 3 | `PhaseCFG::partial_latency_of_defs` | `libjvm.dylib` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `PhaseCFG::schedule_pinned_nodes`   | `libjvm.dylib` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `Node::latency`                     | `libjvm.dylib` |

##### `PhaseCFG::do_global_code_motion` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                         | Location       |
| -----: | ----: | -----: | ------: | ------------------------------ | -------------- |
| +60.0% |    +3 | 100.0% |   5 → 8 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `PhaseGVN::transform_no_reclaim` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                       | Location       |
| -----: | ----: | -----------: | ------: | ---------------------------- | -------------- |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `AndINode::Ideal`            | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `Type::hashcons`             | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `NodeHash::hash_find_insert` | `libjvm.dylib` |

##### `transformSingle(FirElement, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`)

|  Change | Delta |             % | Samples | Callee                              | Location                                                           |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ------------------------------------------------------------------ |
|  +75.0% |    +3 | 44.4% → 58.3% |   4 → 7 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.FirFunctionCall`             |
| removed |    -1 |  11.1% → 0.0% |   1 → 0 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.declarations.FirNamedFunction`           |
| removed |    -1 |  11.1% → 0.0% |   1 → 0 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.declarations.FirRegularClass`            |
| removed |    -1 |  11.1% → 0.0% |   1 → 0 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.FirWhenExpression`           |
|     new |    +1 |   0.0% → 8.3% |   0 → 1 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression` |

##### `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`)

| Change | Delta |            % | Samples | Callee                                                                                                                 | Location                                                                                      |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`)

|  Change | Delta |      % | Samples | Callee                                                                                                        | Location                                                                                      |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode, boolean, boolean, boolean)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

|  Change | Delta |      % | Samples | Callee                                                                             | Location                                                                                      |
| ------: | ----: | -----: | ------: | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `transformPropertyAccessExpression(FirPropertyAccessExpression, Object)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

|  Change | Delta |      % | Samples | Callee                                                                           | Location                                                                                                 |
| ------: | ----: | -----: | ------: | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression`)

|  Change | Delta |      % | Samples | Callee                                                                   | Location                                                                                                 |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `transformPropertyAccessExpression(FirPropertyAccessExpression, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `transformBody(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirAnonymousFunctionImpl`)

|  Change | Delta |      % | Samples | Callee                                  | Location                                                              |
| ------: | ----: | -----: | ------: | --------------------------------------- | --------------------------------------------------------------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `transform(FirTransformer, Object)`     | `org.jetbrains.kotlin.fir.expressions.FirBlock`                       |
| +150.0% |    +3 | 100.0% |   2 → 5 | `transformBody(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.declarations.impl.FirAnonymousFunctionImpl` |

##### `transformAnonymousFunctionBody$lambda$0(FirDeclarationsResolveTransformer, FirAnonymousFunction, FirTypeRef)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`)

|  Change | Delta |      % | Samples | Callee                                                           | Location                                                                                       |
| ------: | ----: | -----: | ------: | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `transformFunctionContent(FirFunction, ResolutionMode, boolean)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |

##### `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x0000000701685978`)

|  Change | Delta |      % | Samples | Callee                                                                                                         | Location                                                                                       |
| ------: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `transformAnonymousFunctionBody$lambda$0(FirDeclarationsResolveTransformer, FirAnonymousFunction, FirTypeRef)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |

##### `withAnonymousFunction(FirAnonymousFunction, SessionAndScopeSessionHolder, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext`)

|  Change | Delta |      % | Samples | Callee     | Location                                                                                                                                                                                                                                            |
| ------: | ----: | -----: | ------: | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000f00168ce60 → org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x0000000701685978` |

##### `transformAnonymousFunctionBody(FirAnonymousFunction, FirTypeRef)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`)

|  Change | Delta |      % | Samples | Callee                                                                                 | Location                                                                        |
| ------: | ----: | -----: | ------: | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `withAnonymousFunction(FirAnonymousFunction, SessionAndScopeSessionHolder, Function0)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext` |

##### `doTransformAnonymousFunctionBodyFromCallCompletion$org_jetbrains_kotlin_resolve(FirAnonymousFunctionExpression, FirResolvedTypeRef)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`)

|  Change | Delta |      % | Samples | Callee                                                             | Location                                                                                       |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `transformAnonymousFunctionBody(FirAnonymousFunction, FirTypeRef)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |

##### `analyzeAndGetLambdaReturnArguments$lambda$5$2(FirDeclarationsResolveTransformer, FirAnonymousFunctionExpression, FirResolvedTypeRef)` (`org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter$LambdaAnalyzerImpl`)

|  Change | Delta |      % | Samples | Callee                                                                                                                                | Location                                                                                       |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `doTransformAnonymousFunctionBodyFromCallCompletion$org_jetbrains_kotlin_resolve(FirAnonymousFunctionExpression, FirResolvedTypeRef)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |

##### `invoke()` (`org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter$LambdaAnalyzerImpl$$Lambda.0x0000000701685740`)

|  Change | Delta |      % | Samples | Callee                                                                                                                                 | Location                                                                         |
| ------: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `analyzeAndGetLambdaReturnArguments$lambda$5$2(FirDeclarationsResolveTransformer, FirAnonymousFunctionExpression, FirResolvedTypeRef)` | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter$LambdaAnalyzerImpl` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change | Delta |     % |       Samples | Callee                | Location       |
| -----: | ----: | ----: | ------------: | --------------------- | -------------- |
|  -1.0% |   -22 | 95.8% | 2,156 → 2,134 | `thread_native_entry` | `libjvm.dylib` |
|  -1.1% |    -1 |  4.2% |       94 → 93 | `apple_main`          | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

| Change | Delta |      % |       Samples | Callee           | Location                  |
| -----: | ----: | -----: | ------------: | ---------------- | ------------------------- |
|  -1.0% |   -23 | 100.0% | 2,251 → 2,228 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|  Change | Delta |              % |     Samples | Callee               | Location                  |
| ------: | ----: | -------------: | ----------: | -------------------- | ------------------------- |
|   -2.1% |   -21 | 99.9% → 100.0% | 1,018 → 997 | `__psynch_cvwait`    | `libsystem_kernel.dylib`  |
| removed |    -1 |    0.1% → 0.0% |       1 → 0 | `_pthread_cond_wait` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

| Change | Delta |     % |   Samples | Callee                          | Location       |
| -----: | ----: | ----: | --------: | ------------------------------- | -------------- |
|  -1.0% |    -9 | 41.1% | 887 → 878 | `WorkerThread::run`             | `libjvm.dylib` |
|  -1.0% |    -8 | 37.1% | 799 → 791 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  -1.1% |    -3 | 13.1% | 282 → 279 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  -1.1% |    -1 |  4.4% |   94 → 93 | `WatcherThread::run`            | `libjvm.dylib` |
|  -1.1% |    -1 |  4.4% |   94 → 93 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change | Delta |      % |       Samples | Callee             | Location       |
| -----: | ----: | -----: | ------------: | ------------------ | -------------- |
|  -1.0% |   -22 | 100.0% | 2,156 → 2,134 | `Thread::call_run` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Callee                  | Location       |
| -----: | ----: | -----: | --------: | ----------------------- | -------------- |
|  -4.8% |   -13 | 100.0% | 272 → 259 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                     | Location       |
| ------: | ----: | -------------: | ------: | -------------------------- | -------------- |
|  -17.3% |    -9 | 98.1% → 100.0% | 52 → 43 | `Compilation::Compilation` | `libjvm.dylib` |
| removed |    -1 |    1.9% → 0.0% |   1 → 0 | `Chunk::next_chop`         | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Callee                  | Location       |
| -----: | ----: | -----: | --------: | ----------------------- | -------------- |
|  -1.2% |    -9 | 100.0% | 747 → 738 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                            | Location                 |
| ------: | ----: | ------------: | --------: | --------------------------------- | ------------------------ |
|   -1.1% |   -10 | 99.3% → 99.2% | 881 → 871 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
| +200.0% |    +2 |   0.1% → 0.3% |     1 → 3 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib`           |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |

##### `CompileQueue::get` (`libjvm.dylib`)

| Change | Delta |              % |   Samples | Callee                           | Location       |
| -----: | ----: | -------------: | --------: | -------------------------------- | -------------- |
|  -6.2% |   -11 | 100.0% → 98.8% | 177 → 166 | `Monitor::wait`                  | `libjvm.dylib` |
|    new |    +1 |    0.0% → 0.6% |     0 → 1 | `Mutex::lock`                    | `libjvm.dylib` |
|    new |    +1 |    0.0% → 0.6% |     0 → 1 | `CompilationPolicy::select_task` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                        | Location       |
| ------: | ----: | -------------: | ------: | ----------------------------- | -------------- |
|  -66.7% |    -8 | 92.3% → 100.0% |  12 → 4 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |
| removed |    -1 |    7.7% → 0.0% |   1 → 0 | `Type::singleton`             | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
|  -12.8% |    -6 | 90.4% → 95.3% | 47 → 41 | `Compilation::compile_java_method` | `libjvm.dylib` |
|  -50.0% |    -2 |   7.7% → 4.7% |   4 → 2 | `ciEnv::register_method`           | `libjvm.dylib` |
| removed |    -1 |   1.9% → 0.0% |   1 → 0 | `Dependencies::assert_common_1`    | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                        | Location       |
| -----: | ----: | -----: | ------: | ----------------------------- | -------------- |
| -17.3% |    -9 | 100.0% | 52 → 43 | `Compilation::compile_method` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Callee                                                   | Location       |
| -----: | ----: | ------------: | --------: | -------------------------------------------------------- | -------------- |
|  -2.1% |    -2 | 11.8% → 11.6% |   94 → 92 | `JvmtiAgentThread::start_function_wrapper`               | `libjvm.dylib` |
|  -0.6% |    -2 | 41.3% → 41.5% | 330 → 328 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib` |
|  -1.1% |    -1 |         11.6% |   93 → 92 | `NotificationThread::notification_thread_entry`          | `libjvm.dylib` |
|  -1.1% |    -1 |         11.8% |   94 → 93 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |
|  -1.1% |    -1 |         11.8% |   94 → 93 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                       | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------- | -------------- |
| removed |    -2 | 16.7% → 0.0% |   2 → 0 | `PhiNode::Ideal`             | `libjvm.dylib` |
| removed |    -2 | 16.7% → 0.0% |   2 → 0 | `PhaseIterGVN::subsume_node` | `libjvm.dylib` |
| removed |    -1 |  8.3% → 0.0% |   1 → 0 | `NodeHash::hash_find_insert` | `libjvm.dylib` |
| removed |    -1 |  8.3% → 0.0% |   1 → 0 | `BarrierSetC2::ideal_node`   | `libjvm.dylib` |
| removed |    -1 |  8.3% → 0.0% |   1 → 0 | `LoadUBNode::Opcode`         | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                        | Location        |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | --------------- |
|  -50.0% |    -4 | 44.4% → 36.4% |   8 → 4 | `LinearScan::assign_reg_num`                  | `libjvm.dylib`  |
| removed |    -3 |  16.7% → 0.0% |   3 → 0 | `LinearScan::sort_intervals_after_allocation` | `libjvm.dylib`  |
| removed |    -3 |  16.7% → 0.0% |   3 → 0 | `LinearScan::build_intervals`                 | `libjvm.dylib`  |
|     new |    +2 |  0.0% → 18.2% |   0 → 2 | `LinearScan::compute_local_live_sets`         | `libjvm.dylib`  |
| removed |    -1 |   5.6% → 0.0% |   1 → 0 | `tlv_get_addr`                                | `libdyld.dylib` |

##### `GraphBuilder::try_inline_full` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
|  -75.0% |    -3 | 40.0% → 25.0% |   4 → 1 | `ciMethod::ensure_method_data`     | `libjvm.dylib` |
|  -50.0% |    -3 | 60.0% → 75.0% |   6 → 3 | `GraphBuilder::iterate_all_blocks` | `libjvm.dylib` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `GraphBuilder::push_scope`         | `libjvm.dylib` |

##### `GraphBuilder::try_inline` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                   | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------------- | -------------- |
|  -60.0% |    -6 |       100.0% |  10 → 4 | `GraphBuilder::try_inline_full`          | `libjvm.dylib` |
| removed |    -1 | 10.0% → 0.0% |   1 → 0 | `GraphBuilder::try_method_handle_inline` | `libjvm.dylib` |

##### `ClassFileParser::parse_stream` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                 | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
|  -36.4% |    -4 | 84.6% → 87.5% |  11 → 7 | `ClassFileParser::parse_constant_pool` | `libjvm.dylib` |
| removed |    -1 |   7.7% → 0.0% |   1 → 0 | `ClassFileParser::parse_interfaces`    | `libjvm.dylib` |

##### `ClassFileParser::ClassFileParser` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                          | Location       |
| -----: | ----: | -----: | ------: | ------------------------------- | -------------- |
| -38.5% |    -5 | 100.0% |  13 → 8 | `ClassFileParser::parse_stream` | `libjvm.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                       | Location       |
| -----: | ----: | -----: | ------: | ---------------------------- | -------------- |
| -38.5% |    -5 | 100.0% |  13 → 8 | `GraphBuilder::GraphBuilder` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee             | Location       |
| -----: | ----: | -----: | ------: | ------------------ | -------------- |
| -38.5% |    -5 | 100.0% |  13 → 8 | `IRScope::IRScope` | `libjvm.dylib` |

##### `InlineTree::check_can_parse` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                        | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `ciMethod::get_flow_analysis` | `libjvm.dylib` |

##### `CallGenerator::for_inline` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                        | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `InlineTree::check_can_parse` | `libjvm.dylib` |

##### `ClassFileParser::parse_constant_pool` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                           | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------------------ | -------------- |
| removed |    -2 |   18.2% → 0.0% |   2 → 0 | `ClassFileParser::verify_legal_method_signature` | `libjvm.dylib` |
|  -12.5% |    -1 | 72.7% → 100.0% |   8 → 7 | `ClassFileParser::parse_constant_pool_entries`   | `libjvm.dylib` |

##### `KlassFactory::create_from_stream` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                             | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
| -38.5% |    -5 | 86.7% → 72.7% |  13 → 8 | `ClassFileParser::ClassFileParser` | `libjvm.dylib` |

##### `GraphBuilder::invoke` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                              | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
|  -60.0% |    -6 | 83.3% → 66.7% |  10 → 4 | `GraphBuilder::try_inline`          | `libjvm.dylib` |
|  +50.0% |    +1 | 16.7% → 50.0% |   2 → 3 | `ciBytecodeStream::get_method`      | `libjvm.dylib` |
| removed |    -1 |   8.3% → 0.0% |   1 → 0 | `GraphBuilder::profile_return_type` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                         | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------ | -------------- |
|  -27.8% |    -5 | 38.3% → 31.7% | 18 → 13 | `Compilation::build_hir`       | `libjvm.dylib` |
|  +22.2% |    +2 | 19.1% → 26.8% |  9 → 11 | `Compilation::emit_code_body`  | `libjvm.dylib` |
|  -10.5% |    -2 | 40.4% → 41.5% | 19 → 17 | `Compilation::emit_lir`        | `libjvm.dylib` |
| removed |    -1 |   2.1% → 0.0% |   1 → 0 | `ciMethod::ensure_method_data` | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                     | Location       |
| -----: | ----: | -----: | ------: | -------------------------- | -------------- |
| -50.0% |    -5 | 100.0% |  10 → 5 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                        | Location       |
| ------: | ----: | -------------: | ------: | --------------------------------------------- | -------------- |
|  -11.1% |    -1 | 69.2% → 100.0% |   9 → 8 | `Matcher::xform`                              | `libjvm.dylib` |
| removed |    -1 |    7.7% → 0.0% |   1 → 0 | `Node_Array::grow`                            | `libjvm.dylib` |
| removed |    -1 |    7.7% → 0.0% |   1 → 0 | `LoadBNode::Opcode`                           | `libjvm.dylib` |
| removed |    -1 |    7.7% → 0.0% |   1 → 0 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |
| removed |    -1 |    7.7% → 0.0% |   1 → 0 | `Matcher::find_shared`                        | `libjvm.dylib` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                        | Location       |
| ------: | ----: | -------------: | ------: | ----------------------------- | -------------- |
|  -50.0% |    -6 | 100.0% → 85.7% |  12 → 6 | `GraphBuilder::invoke`        | `libjvm.dylib` |
| removed |    -1 |    8.3% → 0.0% |   1 → 0 | `GraphBuilder::check_cast`    | `libjvm.dylib` |
|     new |    +1 |   0.0% → 14.3% |   0 → 1 | `GraphBuilder::method_return` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 14.3% |   0 → 1 | `GraphBuilder::if_node`       | `libjvm.dylib` |

##### `GraphBuilder::iterate_all_blocks` (`libjvm.dylib`)

|  Change | Delta |           % | Samples | Callee                                      | Location       |
| ------: | ----: | ----------: | ------: | ------------------------------------------- | -------------- |
|  -41.7% |    -5 |      100.0% |  12 → 7 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
| removed |    -1 | 8.3% → 0.0% |   1 → 0 | `ValueStack::ValueStack`                    | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
|  -41.7% |    -5 | 92.3% → 87.5% |  12 → 7 | `GraphBuilder::iterate_all_blocks`   | `libjvm.dylib` |
| removed |    -1 |   7.7% → 0.0% |   1 → 0 | `BlockListBuilder::BlockListBuilder` | `libjvm.dylib` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `BlockBegin::iterate_preorder`       | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                       | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | -------------- |
|  -38.5% |    -5 | 72.2% → 61.5% |  13 → 8 | `IR::IR`                                     | `libjvm.dylib` |
|  -50.0% |    -2 | 22.2% → 15.4% |   4 → 2 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |
| removed |    -1 |   5.6% → 0.0% |   1 → 0 | `RangeCheckElimination::eliminate`           | `libjvm.dylib` |
|     new |    +1 |   0.0% → 7.7% |   0 → 1 | `IR::compute_code`                           | `libjvm.dylib` |
|     new |    +1 |   0.0% → 7.7% |   0 → 1 | `IR::eliminate_null_checks`                  | `libjvm.dylib` |

##### `ciEnv::register_method` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Callee                 | Location       |
| -----: | ----: | -------------: | ------: | ---------------------- | -------------- |
| -60.0% |    -3 | 83.3% → 100.0% |   5 → 2 | `nmethod::new_nmethod` | `libjvm.dylib` |

##### `PhaseChaitin::Select` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                               | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------ | -------------- |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `PhaseIFG::re_insert`                | `libjvm.dylib` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `IndexSetIterator::advance_and_next` | `libjvm.dylib` |

##### `ciMethod::ensure_method_data` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------- | -------------- |
|  -75.0% |    -3 | 80.0% → 100.0% |   4 → 1 | `Method::build_profiling_method_data` | `libjvm.dylib` |
|  -75.0% |    -3 | 80.0% → 100.0% |   4 → 1 | `ciMethod::ensure_method_data`        | `libjvm.dylib` |
| removed |    -1 |   20.0% → 0.0% |   1 → 0 | `ciMethodData::load_data`             | `libjvm.dylib` |

##### `LinearScan::assign_reg_num` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                        | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------- |
|  -75.0% |    -3 | 50.0% → 25.0% |   4 → 1 | `LinearScan::compute_oop_map` | `libjvm.dylib` |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `LIR_OprPtr::as_address`      | `libjvm.dylib` |

##### `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`)

|  Change | Delta |             % | Samples | Callee                   | Location                                                                                                                   |
| ------: | ----: | ------------: | ------: | ------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
|  -80.0% |    -4 | 55.6% → 25.0% |   5 → 1 | `invoke(Object, Object)` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$special$$inlined$createCache$1`         |
|     new |    +2 |  0.0% → 50.0% |   0 → 2 | `invoke(Object, Object)` | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$3`            |
|     new |    +2 |  0.0% → 50.0% |   0 → 2 | `invoke(Object, Object)` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$special$$inlined$createCache$3`         |
|  -50.0% |    -1 | 22.2% → 25.0% |   2 → 1 | `invoke(Object, Object)` | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2`            |
| removed |    -1 |  11.1% → 0.0% |   1 → 0 | `invoke(Object, Object)` | `org.jetbrains.kotlin.fir.scopes.impl.FirSubstitutionOverrideStorage$SubstitutionOverrideCache$$Lambda.0x000000f00163e980` |

##### `getClassLikeSymbolByClassId(ClassId)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`)

|  Change | Delta |              % | Samples | Callee                               | Location                                                            |
| ------: | ----: | -------------: | ------: | ------------------------------------ | ------------------------------------------------------------------- |
|  -80.0% |    -4 | 83.3% → 100.0% |   5 → 1 | `getValue(Object, Object)`           | `org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`              |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `mayHaveTopLevelClassifier(ClassId)` | `org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider` |

##### `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCacheWithPostCompute`)

|  Change | Delta |            % | Samples | Callee                           | Location                                                                                                                                     |
| ------: | ----: | -----------: | ------: | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| removed |    -3 | 75.0% → 0.0% |   3 → 0 | `invoke(Object, Object)`         | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$$Lambda.0x000000f0014743b8`                                  |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `invoke(Object, Object, Object)` | `org.jetbrains.kotlin.fir.resolve.providers.impl.AbstractFirBuiltinSymbolProvider$BuiltInsPackageFragmentWrapper$$Lambda.0x000000f0015b58e8` |

##### `computeClass(ClassId)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`)

|  Change | Delta |             % | Samples | Callee                                 | Location                                                                         |
| ------: | ----: | ------------: | ------: | -------------------------------------- | -------------------------------------------------------------------------------- |
| removed |    -4 |  80.0% → 0.0% |   4 → 0 | `getClassLikeSymbolByClassId(ClassId)` | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `getClassLikeSymbolByClassId(ClassId)` | `org.jetbrains.kotlin.fir.java.deserialization.FirJvmBuiltinsSymbolProvider`     |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `getClassLikeSymbolByClassId(ClassId)` | `org.jetbrains.kotlin.fir.java.JavaSymbolProvider`                               |

##### `access$computeClass(FirCachingCompositeSymbolProvider, ClassId)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`)

| Change | Delta |      % | Samples | Callee                  | Location                                                                            |
| -----: | ----: | -----: | ------: | ----------------------- | ----------------------------------------------------------------------------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `computeClass(ClassId)` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider` |

##### `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$special$$inlined$createCache$1`)

| Change | Delta |      % | Samples | Callee                                                            | Location                                                                            |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `access$computeClass(FirCachingCompositeSymbolProvider, ClassId)` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider` |

##### `invoke(Object, Object)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$special$$inlined$createCache$1`)

| Change | Delta |      % | Samples | Callee                 | Location                                                                                                           |
| -----: | ----: | -----: | ------: | ---------------------- | ------------------------------------------------------------------------------------------------------------------ |
| -80.0% |    -4 | 100.0% |   5 → 1 | `invoke(Object, Void)` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$special$$inlined$createCache$1` |

##### `getClass(ClassId, FirDeserializationContext)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`)

|  Change | Delta |            % | Samples | Callee                               | Location                                                              |
| ------: | ----: | -----------: | ------: | ------------------------------------ | --------------------------------------------------------------------- |
| removed |    -3 | 75.0% → 0.0% |   3 → 0 | `getValue(Object, Object)`           | `org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCacheWithPostCompute` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `mayHaveTopLevelClassifier(ClassId)` | `org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`   |

##### `getClass$default(AbstractFirDeserializedSymbolProvider, ClassId, FirDeserializationContext, int, Object)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`)

|  Change | Delta |             % | Samples | Callee                                         | Location                                                                         |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | -------------------------------------------------------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `getClass(ClassId, FirDeserializationContext)` | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider` |

##### `getClassLikeSymbolByClassId(ClassId)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`)

|  Change | Delta |             % | Samples | Callee                                                                                                     | Location                                                                         |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `getClass$default(AbstractFirDeserializedSymbolProvider, ClassId, FirDeserializationContext, int, Object)` | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider` |

##### `invokeSuspend(Object)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`)

|  Change | Delta |            % | Samples | Callee                                                           | Location                                                                      |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| removed |    -2 | 33.3% → 0.0% |   2 → 0 | `check(CheckerSink, ResolutionContext, Candidate, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CollectTypeVariableUsagesInfo` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `check(CheckerSink, ResolutionContext, Candidate, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.MapArguments`                  |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `check(CheckerSink, ResolutionContext, Candidate, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckExtensionReceiver`        |

##### `processCandidate(Candidate, ResolutionContext, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`)

| Change | Delta |      % | Samples | Callee               | Location                                              |
| -----: | ----: | -----: | ------: | -------------------- | ----------------------------------------------------- |
| -66.7% |    -4 | 100.0% |   6 → 2 | `resumeWith(Object)` | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |

##### `processCandidate$default(ResolutionStageRunner, Candidate, ResolutionContext, boolean, boolean, int, Object)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`)

| Change | Delta |      % | Samples | Callee                                                             | Location                                                              |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------ | --------------------------------------------------------------------- |
| -66.7% |    -4 | 100.0% |   6 → 2 | `processCandidate(Candidate, ResolutionContext, boolean, boolean)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner` |

##### `resolveCallAndSelectCandidate(FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

|  Change | Delta |              % | Samples | Callee                                                                                                                                                                                                                                                   | Location                                                 |
| ------: | ----: | -------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
|  -33.3% |    -3 | 90.0% → 100.0% |   9 → 6 | `collectCandidates$default(FirCallResolver, FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver` |
| removed |    -1 |   10.0% → 0.0% |   1 → 0 | `createResolvedNamedReference$default(FirCallResolver, FirReference, Name, CallInfo, Collection, CandidateApplicability, FirExpression, boolean, CallKind, Collection, int, Object)`                                                                     | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver` |

##### `resolveCallAndSelectCandidate$default(FirCallResolver, FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext, int, Object)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

| Change | Delta |      % | Samples | Callee                                                                                                   | Location                                                 |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| -40.0% |    -4 | 100.0% |  10 → 6 | `resolveCallAndSelectCandidate(FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver` |

##### `consumeCallableCandidate(FirCallableSymbol, CallInfo, TowerLevelProcessor)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`)

|  Change | Delta |            % | Samples | Callee                                                                                                                                 | Location                                                            |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| removed |    -3 | 75.0% → 0.0% |   3 → 0 | `consumeCandidate$default(TowerLevelProcessor, FirBasedSymbol, FirExpression, FirExpression, FirScope, boolean, boolean, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor`  |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `shouldSkipCandidateWithInconsistentExtensionReceiver(FirCallableSymbol)`                                                              | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel` |

##### `processFunctionsByName$lambda$0(FirLookupTrackerComponent, CallInfo, Ref$BooleanRef, ScopeBasedTowerLevel, TowerLevelProcessor, FirCallableSymbol)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`)

|  Change | Delta |             % | Samples | Callee                                                                       | Location                                                            |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `consumeCallableCandidate(FirCallableSymbol, CallInfo, TowerLevelProcessor)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel` |

##### `invoke(Object)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000f001673f80`)

|  Change | Delta |             % | Samples | Callee                                                                                                                                               | Location                                                            |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `processFunctionsByName$lambda$0(FirLookupTrackerComponent, CallInfo, Ref$BooleanRef, ScopeBasedTowerLevel, TowerLevelProcessor, FirCallableSymbol)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel` |

##### `processSymbolsByName$lambda$0(Ref$BooleanRef, Function1, FirCallableSymbol)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`)

|  Change | Delta |             % | Samples | Callee           | Location                                                                                       |
| ------: | ----: | ------------: | ------: | ---------------- | ---------------------------------------------------------------------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `invoke(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000f001673f80` |

##### `invoke(Object)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$$Lambda.0x000000f0015fe798`)

|  Change | Delta |             % | Samples | Callee                                                                        | Location                                                            |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `processSymbolsByName$lambda$0(Ref$BooleanRef, Function1, FirCallableSymbol)` | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope` |
