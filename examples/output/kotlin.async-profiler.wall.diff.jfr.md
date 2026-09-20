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

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |            % |   Samples | Function                                             | Location                                                                                                 |
| ------: | ----: | -----------: | --------: | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
|     new |   +75 |  0.0% → 2.8% |    0 → 75 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x0000000701008400`                                                     |
|     new |   +75 |  0.0% → 2.8% |    0 → 75 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x0000000701009800`                                                      |
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

|  Change | Delta |            % | Samples | Function                                                                                                                               | Location                                                                                                                  |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| +400.0% |    +4 | <0.1% → 0.2% |   1 → 5 | `transformResult(FirTransformer, Object)`                                                                                              | `org.jetbrains.kotlin.fir.expressions.impl.FirRegularWhenBranch`                                                          |
| +200.0% |    +4 |  0.1% → 0.2% |   2 → 6 | `transformWhenBranch(FirWhenBranch, ResolutionMode)`                                                                                   | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer`                   |
| +200.0% |    +4 |  0.1% → 0.2% |   2 → 6 | `transformWhenBranch(FirWhenBranch, ResolutionMode)`                                                                                   | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`                  |
| +200.0% |    +4 |  0.1% → 0.2% |   2 → 6 | `transformWhenBranch(FirWhenBranch, Object)`                                                                                           | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`                  |
| +200.0% |    +4 |  0.1% → 0.2% |   2 → 6 | `transform(FirTransformer, Object)`                                                                                                    | `org.jetbrains.kotlin.fir.expressions.FirWhenBranch`                                                                      |
| +200.0% |    +4 |  0.1% → 0.2% |   2 → 6 | `transformBranches(FirTransformer, Object)`                                                                                            | `org.jetbrains.kotlin.fir.expressions.impl.FirWhenExpressionImpl`                                                         |
|  +33.3% |    +3 |  0.3% → 0.4% |  9 → 12 | `transformSingle(FirElement, FirTransformer, Object)`                                                                                  | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`                                                                  |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode, boolean, boolean, boolean)`                          | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`                             |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)`                                                     | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`                             |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)`                                                       | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`                  |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `transformPropertyAccessExpression(FirPropertyAccessExpression, Object)`                                                               | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`                  |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `transform(FirTransformer, Object)`                                                                                                    | `org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression`                                                        |
| +150.0% |    +3 |  0.1% → 0.2% |   2 → 5 | `transformBody(FirTransformer, Object)`                                                                                                | `org.jetbrains.kotlin.fir.declarations.impl.FirAnonymousFunctionImpl`                                                     |
| +150.0% |    +3 |  0.1% → 0.2% |   2 → 5 | `transformAnonymousFunctionBody$lambda$0(FirDeclarationsResolveTransformer, FirAnonymousFunction, FirTypeRef)`                         | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`                            |
| +150.0% |    +3 |  0.1% → 0.2% |   2 → 5 | `invoke()`                                                                                                                             | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x0000000701685978` |
| +150.0% |    +3 |  0.1% → 0.2% |   2 → 5 | `withAnonymousFunction(FirAnonymousFunction, SessionAndScopeSessionHolder, Function0)`                                                 | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext`                                           |
| +150.0% |    +3 |  0.1% → 0.2% |   2 → 5 | `transformAnonymousFunctionBody(FirAnonymousFunction, FirTypeRef)`                                                                     | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`                            |
| +150.0% |    +3 |  0.1% → 0.2% |   2 → 5 | `doTransformAnonymousFunctionBodyFromCallCompletion$org_jetbrains_kotlin_resolve(FirAnonymousFunctionExpression, FirResolvedTypeRef)`  | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`                            |
| +150.0% |    +3 |  0.1% → 0.2% |   2 → 5 | `analyzeAndGetLambdaReturnArguments$lambda$5$2(FirDeclarationsResolveTransformer, FirAnonymousFunctionExpression, FirResolvedTypeRef)` | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter$LambdaAnalyzerImpl`                                          |
| +150.0% |    +3 |  0.1% → 0.2% |   2 → 5 | `invoke()`                                                                                                                             | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter$LambdaAnalyzerImpl$$Lambda.0x0000000701685740`               |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |       Samples | Function                                | Location                                             |
| ------: | ----: | ------------: | ------------: | --------------------------------------- | ---------------------------------------------------- |
| removed |   -75 |   2.8% → 0.0% |        75 → 0 | `invokeStatic(Object, Object)`          | `java.lang.invoke.LambdaForm$DMH.0x000000f001008400` |
| removed |   -75 |   2.8% → 0.0% |        75 → 0 | `invoke(Object, Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000f001009800`  |
|   -1.9% |   -25 | 47.7% → 47.3% | 1,299 → 1,274 | `__psynch_cvwait`                       | `libsystem_kernel.dylib`                             |
|   -1.0% |   -23 |         82.6% | 2,251 → 2,228 | `_pthread_start`                        | `libsystem_pthread.dylib`                            |
|   -1.0% |   -23 |         82.6% | 2,251 → 2,228 | `thread_start`                          | `libsystem_pthread.dylib`                            |
|   -2.2% |   -22 | 37.4% → 37.0% |   1,019 → 997 | `PlatformMonitor::wait`                 | `libjvm.dylib`                                       |
|   -1.0% |   -22 | 79.1% → 79.2% | 2,156 → 2,134 | `Thread::call_run`                      | `libjvm.dylib`                                       |
|   -1.0% |   -22 | 79.1% → 79.2% | 2,156 → 2,134 | `thread_native_entry`                   | `libjvm.dylib`                                       |
|   -4.8% |   -13 |  10.0% → 9.6% |     272 → 259 | `Monitor::wait`                         | `libjvm.dylib`                                       |
|   -1.0% |   -10 |         35.9% |     979 → 969 | `semaphore_wait_trap`                   | `libsystem_kernel.dylib`                             |
|  -18.9% |   -10 |   1.9% → 1.6% |       53 → 43 | `Compiler::compile_method`              | `libjvm.dylib`                                       |
|   -1.2% |    -9 |         27.4% |     747 → 738 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib`                                       |
|   -1.0% |    -9 |         32.6% |     887 → 878 | `WorkerThread::run`                     | `libjvm.dylib`                                       |
|   -5.1% |    -9 |   6.5% → 6.2% |     177 → 168 | `CompileQueue::get`                     | `libjvm.dylib`                                       |
|  -69.2% |    -9 |   0.5% → 0.1% |        13 → 4 | `PhaseIterGVN::optimize`                | `libjvm.dylib`                                       |
|  -17.3% |    -9 |   1.9% → 1.6% |       52 → 43 | `Compilation::compile_method`           | `libjvm.dylib`                                       |
|  -17.3% |    -9 |   1.9% → 1.6% |       52 → 43 | `Compilation::Compilation`              | `libjvm.dylib`                                       |
|   -1.0% |    -8 |         29.3% |     799 → 791 | `JavaThread::thread_main_inner`         | `libjvm.dylib`                                       |
|  -66.7% |    -8 |   0.4% → 0.1% |        12 → 4 | `PhaseIterGVN::transform_old`           | `libjvm.dylib`                                       |
|  -38.9% |    -7 |   0.7% → 0.4% |       18 → 11 | `LinearScan::do_linear_scan`            | `libjvm.dylib`                                       |

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
