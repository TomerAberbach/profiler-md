# Sampling profile diff

Collected 1,283 samples → 1,319 samples (+36 samples, +2.8%).

| Category         | Change | Delta |             % |   Samples |
| ---------------- | -----: | ----: | ------------: | --------: |
| Compiler         |  +1.6% |   +10 | 48.2% → 47.7% | 619 → 629 |
| Native           |  +8.7% |   +39 | 34.8% → 36.8% | 447 → 486 |
| Ours             |  -4.9% |    -7 | 11.2% → 10.4% | 144 → 137 |
| Standard library | -10.5% |    -6 |   4.4% → 3.9% |   57 → 51 |
| JIT              |  -6.3% |    -1 |   1.2% → 1.1% |   16 → 15 |
| Unknown          |    new |    +1 |   0.0% → 0.1% |     0 → 1 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |           % | Samples | Function                                                                                                                                                 | Location    |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  +47.1% |    +8 | 1.3% → 1.9% | 17 → 25 | `SymbolTable::do_lookup`                                                                                                                                 | `<unknown>` |
| +400.0% |    +8 | 0.2% → 0.8% |  2 → 10 | `fwd_copy_again`                                                                                                                                         | `<unknown>` |
| +175.0% |    +7 | 0.3% → 0.8% |  4 → 11 | `LinearScanWalker::alloc_free_reg`                                                                                                                       | `<unknown>` |
|  +87.5% |    +7 | 0.6% → 1.1% |  8 → 15 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `<unknown>` |
| +350.0% |    +7 | 0.2% → 0.7% |   2 → 9 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>`                             | `<unknown>` |
| +600.0% |    +6 | 0.1% → 0.5% |   1 → 7 | `Type::cmp`                                                                                                                                              | `<unknown>` |
| +100.0% |    +5 | 0.4% → 0.8% |  5 → 10 | `sys_icache_invalidate`                                                                                                                                  | `<unknown>` |
| +500.0% |    +5 | 0.1% → 0.5% |   1 → 6 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                          | `<unknown>` |
| +250.0% |    +5 | 0.2% → 0.5% |   2 → 7 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `<unknown>` |
| +100.0% |    +5 | 0.4% → 0.8% |  5 → 10 | `Node::dominates`                                                                                                                                        | `<unknown>` |
| +100.0% |    +4 | 0.3% → 0.6% |   4 → 8 | `Compile::identify_useful_nodes`                                                                                                                         | `<unknown>` |
| +133.3% |    +4 | 0.2% → 0.5% |   3 → 7 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                   | `<unknown>` |
|  +44.4% |    +4 | 0.7% → 1.0% |  9 → 13 | `IntervalWalker::walk_to`                                                                                                                                | `<unknown>` |
|  +57.1% |    +4 | 0.5% → 0.8% |  7 → 11 | `PhaseIdealLoop::Dominators`                                                                                                                             | `<unknown>` |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal`                                                                                                     | `<unknown>` |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `semaphore_wait_trap`                                                                                                                                    | `<unknown>` |
|  +37.5% |    +3 | 0.6% → 0.8% |  8 → 11 | `PhaseIdealLoop::build_loop_late`                                                                                                                        | `<unknown>` |
| +100.0% |    +3 | 0.2% → 0.5% |   3 → 6 | `vmSymbols::find_sid`                                                                                                                                    | `<unknown>` |
|  +60.0% |    +3 | 0.4% → 0.6% |   5 → 8 | `inflate`                                                                                                                                                | `<unknown>` |
| +150.0% |    +3 | 0.2% → 0.4% |   2 → 5 | `PhaseIFG::SquareUp`                                                                                                                                     | `<unknown>` |

##### Compiler

|  Change | Delta |           % | Samples | Function                                             | Location    |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------- | ----------- |
| +175.0% |    +7 | 0.3% → 0.8% |  4 → 11 | `LinearScanWalker::alloc_free_reg`                   | `<unknown>` |
| +600.0% |    +6 | 0.1% → 0.5% |   1 → 7 | `Type::cmp`                                          | `<unknown>` |
| +100.0% |    +5 | 0.4% → 0.8% |  5 → 10 | `Node::dominates`                                    | `<unknown>` |
| +100.0% |    +4 | 0.3% → 0.6% |   4 → 8 | `Compile::identify_useful_nodes`                     | `<unknown>` |
|  +44.4% |    +4 | 0.7% → 1.0% |  9 → 13 | `IntervalWalker::walk_to`                            | `<unknown>` |
|  +57.1% |    +4 | 0.5% → 0.8% |  7 → 11 | `PhaseIdealLoop::Dominators`                         | `<unknown>` |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `<unknown>` |
|  +37.5% |    +3 | 0.6% → 0.8% |  8 → 11 | `PhaseIdealLoop::build_loop_late`                    | `<unknown>` |
| +150.0% |    +3 | 0.2% → 0.4% |   2 → 5 | `PhaseIFG::SquareUp`                                 | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhaseCFG::schedule_late`                            | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `LinearScan::compute_debug_info_for_scope`           | `<unknown>` |
|  +21.4% |    +3 | 1.1% → 1.3% | 14 → 17 | `IndexSetIterator::advance_and_next`                 | `<unknown>` |
|  +20.0% |    +3 | 1.2% → 1.4% | 15 → 18 | `PhaseChaitin::Split`                                | `<unknown>` |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `Node::add_req`                                      | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhaseIFG::remove_node`                              | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `NodeHash::hash_delete`                              | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `CmpPNode::Opcode`                                   | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `OopMapValue::write_on`                              | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `Matcher::find_shared_visit`                         | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `AddPNode::Opcode`                                   | `<unknown>` |

##### Native

|  Change | Delta |           % | Samples | Function                                                                                                                                                 | Location    |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  +47.1% |    +8 | 1.3% → 1.9% | 17 → 25 | `SymbolTable::do_lookup`                                                                                                                                 | `<unknown>` |
| +400.0% |    +8 | 0.2% → 0.8% |  2 → 10 | `fwd_copy_again`                                                                                                                                         | `<unknown>` |
|  +87.5% |    +7 | 0.6% → 1.1% |  8 → 15 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `<unknown>` |
| +350.0% |    +7 | 0.2% → 0.7% |   2 → 9 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>`                             | `<unknown>` |
| +100.0% |    +5 | 0.4% → 0.8% |  5 → 10 | `sys_icache_invalidate`                                                                                                                                  | `<unknown>` |
| +500.0% |    +5 | 0.1% → 0.5% |   1 → 6 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                          | `<unknown>` |
| +250.0% |    +5 | 0.2% → 0.5% |   2 → 7 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `<unknown>` |
| +133.3% |    +4 | 0.2% → 0.5% |   3 → 7 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                   | `<unknown>` |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `semaphore_wait_trap`                                                                                                                                    | `<unknown>` |
| +100.0% |    +3 | 0.2% → 0.5% |   3 → 6 | `vmSymbols::find_sid`                                                                                                                                    | `<unknown>` |
|  +60.0% |    +3 | 0.4% → 0.6% |   5 → 8 | `inflate`                                                                                                                                                | `<unknown>` |
| +150.0% |    +3 | 0.2% → 0.4% |   2 → 5 | `SymbolTable::lookup_shared`                                                                                                                             | `<unknown>` |
| +150.0% |    +3 | 0.2% → 0.4% |   2 → 5 | `__psynch_cvbroad`                                                                                                                                       | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `G1CodeRootSet::add`                                                                                                                                     | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `ClassFileParser::verify_legal_class_name`                                                                                                               | `<unknown>` |
|  +22.2% |    +2 | 0.7% → 0.8% |  9 → 11 | `__psynch_mutexwait`                                                                                                                                     | `<unknown>` |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `Dict::Insert`                                                                                                                                           | `<unknown>` |
|  +20.0% |    +2 | 0.8% → 0.9% | 10 → 12 | `__psynch_cvwait`                                                                                                                                        | `<unknown>` |
|  +50.0% |    +2 | 0.3% → 0.5% |   4 → 6 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                           | `<unknown>` |
| +100.0% |    +2 | 0.2% → 0.3% |   2 → 4 | `void G1CMTask::process_grey_task_entry<true>`                                                                                                           | `<unknown>` |

##### Ours

|  Change | Delta |           % | Samples | Function                                                     | Location                                                                                                    |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `resolvePlainArgumentType`                                   | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`                                   |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `processCandidatesWithGivenImplicitReceiverAsValue`          | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask`                                          |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `isArrayType`                                                | `org.jetbrains.kotlin.fir.types.ConeBuiltinTypeUtilsKt`                                                     |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `visitExpression`                                            | `org.jetbrains.kotlin.ir.visitors.IrVisitorVoid`                                                            |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `accept`                                                     | `org.jetbrains.kotlin.ir.expressions.IrGetValue`                                                            |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `acceptChildren`                                             | `org.jetbrains.kotlin.ir.declarations.IrFunction`                                                           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `resolveCallAndSelectCandidate$default`                      | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                                    |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `transformFunctionCallInternal$org_jetbrains_kotlin_resolve` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`               |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `transformBlock`                                             | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `fastCorrespondingSupertypes`                                | `org.jetbrains.kotlin.fir.types.ConeTypeContext`                                                            |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `loadProperty`                                               | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`                                            |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `access$addEqualityConstraintAndIncorporateIt`               | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                                |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `resolveType`                                                | `org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer`                          |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `convertToIrCall$default`                                    | `org.jetbrains.kotlin.fir.backend.generators.CallAndReferenceGenerator`                                     |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `visitCall`                                                  | `org.jetbrains.kotlin.ir.visitors.IrElementTransformerVoid`                                                 |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `computeConstraintEdges`                                     | `org.jetbrains.kotlin.resolve.calls.inference.components.TypeVariableDependencyInformationProvider`         |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `resetSmartCastPositionTo`                                   | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`                                                  |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>`                                                     | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation`                                                         |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `isExtensionFunctionType`                                    | `org.jetbrains.kotlin.fir.types.CompilerConeAttributesKt`                                                   |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `check`                                                      | `org.jetbrains.kotlin.fir.analysis.jvm.checkers.expression.FirJvmModuleAccessibilityQualifiedAccessChecker` |

##### Standard library

|  Change | Delta |           % | Samples | Function                      | Location                                                 |
| ------: | ----: | ----------: | ------: | ----------------------------- | -------------------------------------------------------- |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `putVal`                      | `java.util.HashMap`                                      |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `invokeExact_MT`              | `java.lang.invoke.Invokers$Holder`                       |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `resumeWith`                  | `kotlin.coroutines.jvm.internal.BaseContinuationImpl`    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `getValue`                    | `kotlin.UnsafeLazyImpl`                                  |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `throwParameterIsNullNPE`     | `kotlin.jvm.internal.Intrinsics`                         |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `linkToTargetMethod`          | `java.lang.invoke.Invokers$Holder`                       |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `getNode`                     | `java.util.HashMap`                                      |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>`                      | `kotlin.collections.builders.MapBuilder`                 |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `checkIndex`                  | `java.lang.String`                                       |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `checkAndAddEntry`            | `java.util.zip.ZipFile$Source`                           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `lastIndexOf$default`         | `kotlin.text.StringsKt__StringsKt`                       |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `addElementType`              | `java.lang.reflect.Proxy$ProxyBuilder`                   |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `allocateUninitializedArray0` | `jdk.internal.misc.Unsafe`                               |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `transfer`                    | `java.util.concurrent.ConcurrentHashMap`                 |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `removeLast`                  | `kotlin.collections.CollectionsKt__MutableCollectionsKt` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>`                      | `java.lang.AbstractStringBuilder`                        |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `asReversed`                  | `kotlin.collections.CollectionsKt__ReversedViewsKt`      |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `equals`                      | `java.util.Objects`                                      |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `clinit`                      | `java.lang.invoke.InvokerBytecodeGenerator`              |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `setMajorVersionAndClassName` | `jdk.internal.org.objectweb.asm.SymbolTable`             |

##### JIT

|  Change | Delta |           % | Samples | Function                  | Location    |
| ------: | ----: | ----------: | ------: | ------------------------- | ----------- |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `zero_blocks`             | `<unknown>` |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `I2C/C2I adapters(0xbbb)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |           % | Samples | Function                                         | Location                         |
| ------: | ----: | ----------: | ------: | ------------------------------------------------ | -------------------------------- |
|  -41.7% |   -10 | 1.9% → 1.1% | 24 → 14 | `tlv_get_addr`                                   | `<unknown>`                      |
|  -77.8% |    -7 | 0.7% → 0.2% |   9 → 2 | `_platform_memmove`                              | `<unknown>`                      |
|  -37.5% |    -6 | 1.2% → 0.8% | 16 → 10 | `_platform_memset`                               | `<unknown>`                      |
|  -83.3% |    -5 | 0.5% → 0.1% |   6 → 1 | `Compile::disconnect_useless_nodes`              | `<unknown>`                      |
|  -71.4% |    -5 | 0.5% → 0.2% |   7 → 2 | `PhaseIdealLoop::is_dominator`                   | `<unknown>`                      |
|  -66.7% |    -4 | 0.5% → 0.2% |   6 → 2 | `sanitizeStackTrace`                             | `kotlin.jvm.internal.Intrinsics` |
|  -57.1% |    -4 | 0.5% → 0.2% |   7 → 3 | `LinearScan::build_intervals`                    | `<unknown>`                      |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `ClassVerifier::verify_invoke_instructions`      | `<unknown>`                      |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `TypeInstPtr::hash`                              | `<unknown>`                      |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `LIR_Assembler::record_non_safepoint_debug_info` | `<unknown>`                      |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `PhaseIdealLoop::compute_lca_of_uses`            | `<unknown>`                      |
|  -37.5% |    -3 | 0.6% → 0.4% |   8 → 5 | `checkNotNullParameter`                          | `kotlin.jvm.internal.Intrinsics` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `PhaseCCP::push_more_uses`                       | `<unknown>`                      |
|   -6.0% |    -3 | 3.9% → 3.6% | 50 → 47 | `inflate_fast`                                   | `<unknown>`                      |
|  -50.0% |    -3 | 0.5% → 0.2% |   6 → 3 | `PhaseLive::add_liveout`                         | `<unknown>`                      |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `posix_madvise`                                  | `<unknown>`                      |
|  -23.1% |    -3 | 1.0% → 0.8% | 13 → 10 | `ciObjectFactory::get_metadata`                  | `<unknown>`                      |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `LIR_Assembler::process_debug_info`              | `<unknown>`                      |
|  -21.4% |    -3 | 1.1% → 0.8% | 14 → 11 | `PhaseChaitin::build_ifg_physical`               | `<unknown>`                      |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `compare_immediate_pair`                         | `<unknown>`                      |

##### Compiler

|  Change | Delta |           % | Samples | Function                                                           | Location    |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------ | ----------- |
|  -83.3% |    -5 | 0.5% → 0.1% |   6 → 1 | `Compile::disconnect_useless_nodes`                                | `<unknown>` |
|  -71.4% |    -5 | 0.5% → 0.2% |   7 → 2 | `PhaseIdealLoop::is_dominator`                                     | `<unknown>` |
|  -57.1% |    -4 | 0.5% → 0.2% |   7 → 3 | `LinearScan::build_intervals`                                      | `<unknown>` |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `TypeInstPtr::hash`                                                | `<unknown>` |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `LIR_Assembler::record_non_safepoint_debug_info`                   | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `PhaseIdealLoop::compute_lca_of_uses`                              | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `PhaseCCP::push_more_uses`                                         | `<unknown>` |
|  -50.0% |    -3 | 0.5% → 0.2% |   6 → 3 | `PhaseLive::add_liveout`                                           | `<unknown>` |
|  -23.1% |    -3 | 1.0% → 0.8% | 13 → 10 | `ciObjectFactory::get_metadata`                                    | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `LIR_Assembler::process_debug_info`                                | `<unknown>` |
|  -21.4% |    -3 | 1.1% → 0.8% | 14 → 11 | `PhaseChaitin::build_ifg_physical`                                 | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `RegMask::clear_to_sets`                                           | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `LoadBNode::Opcode`                                                | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `<unknown>` |
|  -60.0% |    -3 | 0.4% → 0.2% |   5 → 2 | `OopMapSort::sort`                                                 | `<unknown>` |
|  -60.0% |    -3 | 0.4% → 0.2% |   5 → 2 | `LinearScanWalker::free_collect_inactive_any`                      | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `IndexSet::initialize`                                             | `<unknown>` |
|  -50.0% |    -2 | 0.3% → 0.2% |   4 → 2 | `Unique_Node_List::remove`                                         | `<unknown>` |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `PhaseIterGVN::optimize`                                           | `<unknown>` |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `OopFlow::compute_reach`                                           | `<unknown>` |

##### Native

|  Change | Delta |           % | Samples | Function                                                                                               | Location    |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------ | ----------- |
|  -41.7% |   -10 | 1.9% → 1.1% | 24 → 14 | `tlv_get_addr`                                                                                         | `<unknown>` |
|  -77.8% |    -7 | 0.7% → 0.2% |   9 → 2 | `_platform_memmove`                                                                                    | `<unknown>` |
|  -37.5% |    -6 | 1.2% → 0.8% | 16 → 10 | `_platform_memset`                                                                                     | `<unknown>` |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `ClassVerifier::verify_invoke_instructions`                                                            | `<unknown>` |
|   -6.0% |    -3 | 3.9% → 3.6% | 50 → 47 | `inflate_fast`                                                                                         | `<unknown>` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `posix_madvise`                                                                                        | `<unknown>` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `compare_immediate_pair`                                                                               | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `FieldInfoReader::read_field_info`                                                                     | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `Arena::Arealloc`                                                                                      | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `__gettimeofday`                                                                                       | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `Symbol::decrement_refcount`                                                                           | `<unknown>` |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `CodeHeap::find_blob`                                                                                  | `<unknown>` |
|  -50.0% |    -2 | 0.3% → 0.2% |   4 → 2 | `SymbolTable::lookup_only`                                                                             | `<unknown>` |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `ClassFileParser::parse_method`                                                                        | `<unknown>` |
|  -25.0% |    -2 | 0.6% → 0.5% |   8 → 6 | `inflate_table`                                                                                        | `<unknown>` |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `MemAllocator::Allocation::notify_allocation`                                                          | `<unknown>` |
|  -40.0% |    -2 | 0.4% → 0.2% |   5 → 3 | `_qsort`                                                                                               | `<unknown>` |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `methodHandle::operator=`                                                                              | `<unknown>` |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `void G1ScanCardClosure::do_oop_work<narrowOop>`                                                       | `<unknown>` |

##### Ours

|  Change | Delta |           % | Samples | Function                      | Location                                                                                       |
| ------: | ----: | ----------: | ------: | ----------------------------- | ---------------------------------------------------------------------------------------------- |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `advance`                     | `org.jetbrains.kotlin.lexer._JetLexer`                                                         |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `create`                      | `org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass`                                        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `asSingleFqName`              | `org.jetbrains.kotlin.name.ClassId`                                                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `flushLastBuffer`             | `org.jetbrains.kotlin.protobuf.ByteString$Output`                                              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `processFunctionsByName`      | `org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`                 |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `runResolver`                 | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`                                |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `transformFunctionContent`    | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `parametersCount`             | `org.jetbrains.kotlin.fir.types.ConeTypeContext`                                               |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `accept`                      | `org.jetbrains.kotlin.ir.expressions.IrTypeOperatorCall`                                       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `readElementValue`            | `org.jetbrains.org.objectweb.asm.ClassReader`                                                  |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getClassLikeSymbolByClassId` | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`               |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `accept`                      | `org.jetbrains.kotlin.fir.declarations.FirNamedFunction`                                       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `check`                       | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckVisibility`                                |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `completeCall`                | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`                                  |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `accept`                      | `org.jetbrains.kotlin.fir.types.FirResolvedTypeRef`                                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `accept`                      | `org.jetbrains.org.objectweb.asm.tree.LabelNode`                                               |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `analyze`                     | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryValsAnalyzer`                |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `processDefaultsAndRunChecks` | `org.jetbrains.kotlin.fir.resolve.calls.stages.FirCallArgumentsProcessor`                      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getProtocol`                 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarFileSystem`                                |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>`                      | `org.jetbrains.kotlin.util.AttributeArrayOwner`                                                |

##### Standard library

|  Change | Delta |           % | Samples | Function                               | Location                                           |
| ------: | ----: | ----------: | ------: | -------------------------------------- | -------------------------------------------------- |
|  -66.7% |    -4 | 0.5% → 0.2% |   6 → 2 | `sanitizeStackTrace`                   | `kotlin.jvm.internal.Intrinsics`                   |
|  -37.5% |    -3 | 0.6% → 0.4% |   8 → 5 | `checkNotNullParameter`                | `kotlin.jvm.internal.Intrinsics`                   |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `hasNext`                              | `kotlin.collections.EmptyIterator`                 |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `linkCallSiteImpl`                     | `java.lang.invoke.MethodHandleNatives`             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `isEmpty`                              | `kotlin.collections.builders.MapBuilder`           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `remove`                               | `java.util.HashMap`                                |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `checkIndex`                           | `java.util.Objects`                                |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `valueOf`                              | `java.lang.String`                                 |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `checkForComodification$kotlin_stdlib` | `kotlin.collections.builders.MapBuilder$Itr`       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `drop`                                 | `kotlin.collections.CollectionsKt___CollectionsKt` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `hasNext`                              | `java.util.LinkedHashMap$LinkedHashIterator`       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `readFullyAt`                          | `java.util.zip.ZipFile$Source`                     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `get`                                  | `java.lang.ThreadLocal`                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>`                               | `java.lang.invoke.MemberName`                      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `equals`                               | `java.lang.String`                                 |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `size`                                 | `java.util.Collections$SingletonList`              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `nextInt`                              | `kotlin.ranges.IntProgressionIterator`             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `isEmpty`                              | `kotlin.collections.EmptyList`                     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `isWhitespace`                         | `java.lang.Character`                              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `remove`                               | `java.util.Collections$SetFromMap`                 |

##### JIT

| Change | Delta |           % | Samples | Function                 | Location    |
| -----: | ----: | ----------: | ------: | ------------------------ | ----------- |
| -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `I2C/C2I adapters(0xbb)` | `<unknown>` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `SymbolTable::do_lookup` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                         | Location    |
| -----: | ----: | ------------: | ------: | ---------------------------------------------- | ----------- |
| +36.4% |    +4 | 64.7% → 60.0% | 11 → 15 | `SymbolTable::lookup_only`                     | `<unknown>` |
| +66.7% |    +2 | 17.6% → 20.0% |   3 → 5 | `ClassFileParser::parse_constant_pool_entries` | `<unknown>` |
| +66.7% |    +2 | 17.6% → 20.0% |   3 → 5 | `SymbolTable::new_symbol`                      | `<unknown>` |

##### `fwd_copy_again` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                          | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ----------- |
| +700.0% |    +7 | 50.0% → 80.0% |   1 → 8 | `G1ParScanThreadState::trim_queue_to_threshold` | `<unknown>` |
|     new |    +1 |  0.0% → 10.0% |   0 → 1 | `ciMethod::ensure_method_data`                  | `<unknown>` |

##### `LinearScanWalker::alloc_free_reg` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                               | Location    |
| ------: | ----: | -----: | ------: | ------------------------------------ | ----------- |
| +175.0% |    +7 | 100.0% |  4 → 11 | `LinearScanWalker::activate_current` | `<unknown>` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                             | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | ----------- |
|  +71.4% |    +5 | 87.5% → 80.0% |  7 → 12 | `DebugInformationRecorder::describe_scope`         | `<unknown>` |
| +200.0% |    +2 | 12.5% → 20.0% |   1 → 3 | `DebugInformationRecorder::serialize_scope_values` | `<unknown>` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                            | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------------------------- | ----------- |
| +300.0% |    +6 | 100.0% → 88.9% |   2 → 8 | `G1ParScanThreadState::do_copy_to_survivor_space` | `<unknown>` |
|     new |    +1 |   0.0% → 11.1% |   0 → 1 | `G1ParScanThreadState::trim_queue_to_threshold`   | `<unknown>` |

##### `Type::cmp` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller         | Location    |
| ------: | ----: | -----: | ------: | -------------- | ----------- |
| +600.0% |    +6 | 100.0% |   1 → 7 | `Dict::Insert` | `<unknown>` |

##### `sys_icache_invalidate` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                      | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | ----------- |
|     new |    +3 |  0.0% → 30.0% |   0 → 3 | `ICStub::finalize`                          | `<unknown>` |
|     new |    +2 |  0.0% → 20.0% |   0 → 2 | `InlineCacheBuffer::create_transition_stub` | `<unknown>` |
|  -50.0% |    -1 | 40.0% → 10.0% |   2 → 1 | `CompiledIC::set_to_monomorphic`            | `<unknown>` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `CodeBuffer::copy_code_to`                  | `<unknown>` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `nmethod::nmethod`                          | `<unknown>` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                       | Location    |
| ------: | ----: | -------------: | ------: | -------------------------------------------- | ----------- |
|     new |    +4 |   0.0% → 66.7% |   0 → 4 | `G1ParScanThreadState::steal_and_trim_queue` | `<unknown>` |
| +100.0% |    +1 | 100.0% → 33.3% |   1 → 2 | `G1ScanHRForRegionClosure::scan_memregion`   | `<unknown>` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                          | Location    |
| ------: | ----: | -----: | ------: | ----------------------------------------------- | ----------- |
| +250.0% |    +5 | 100.0% |   2 → 7 | `G1ParScanThreadState::trim_queue_to_threshold` | `<unknown>` |

##### `Node::dominates` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                           | Location    |
| ------: | ----: | -----: | ------: | -------------------------------- | ----------- |
| +100.0% |    +5 | 100.0% |  5 → 10 | `MemNode::all_controls_dominate` | `<unknown>` |

##### `Compile::identify_useful_nodes` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                        | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | ----------- |
| +400.0% |    +4 | 25.0% → 62.5% |   1 → 5 | `Matcher::specialize_generic_vector_operands` | `<unknown>` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                                                   | Location    |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------ | ----------- |
| +133.3% |    +4 | 100.0% |   3 → 7 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` | `<unknown>` |

##### `IntervalWalker::walk_to` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                           | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------- | ----------- |
|  +28.6% |    +2 | 77.8% → 69.2% |   7 → 9 | `IntervalWalker::walk_to`        | `<unknown>` |
| +100.0% |    +1 | 11.1% → 15.4% |   1 → 2 | `LinearScan::allocate_registers` | `<unknown>` |
| +100.0% |    +1 | 11.1% → 15.4% |   1 → 2 | `LinearScan::compute_oop_map`    | `<unknown>` |

##### `PhaseIdealLoop::Dominators` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                               | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------ | ----------- |
| +57.1% |    +4 | 100.0% |  7 → 11 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                | Location    |
| ------: | ----: | -----: | ------: | ------------------------------------- | ----------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `PhaseIdealLoop::compute_lca_of_uses` | `<unknown>` |

##### `semaphore_wait_trap` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                           | Location    |
| -----: | ----: | -----------: | ------: | -------------------------------- | ----------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `GenericWaitBarrier::Cell::wait` | `<unknown>` |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `WorkerThreads::run_task`        | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                               | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------ | ----------- |
| +37.5% |    +3 | 100.0% |  8 → 11 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `vmSymbols::find_sid` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                  | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ----------- |
| +150.0% |    +3 | 66.7% → 83.3% |   2 → 5 | `ciObjectFactory::get_symbol`           | `<unknown>` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `parse_annotations`                     | `<unknown>` |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `AnnotationCollector::annotation_index` | `<unknown>` |

##### `inflate` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                          | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | ----------- |
| +60.0% |    +3 | 100.0% |   5 → 8 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `PhaseIFG::SquareUp` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                            | Location    |
| ------: | ----: | -----: | ------: | --------------------------------- | ----------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseCFG::schedule_late` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                         | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------ | ----------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `PhaseCFG::global_code_motion` | `<unknown>` |

##### `LinearScan::compute_debug_info_for_scope` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                     | Location    |
| -----: | ----: | -----------: | ------: | ------------------------------------------ | ----------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `LinearScan::compute_debug_info_for_scope` | `<unknown>` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `LinearScan::assign_reg_num`               | `<unknown>` |

##### `IndexSetIterator::advance_and_next` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                       | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------- | ----------- |
|  -66.7% |    -2 |  21.4% → 5.9% |   3 → 1 | `PhaseLive::add_liveout`     | `<unknown>` |
|     new |    +2 |  0.0% → 11.8% |   0 → 2 | `PhaseIFG::SquareUp`         | `<unknown>` |
|  -50.0% |    -1 |  14.3% → 5.9% |   2 → 1 | `PhaseIFG::effective_degree` | `<unknown>` |
|  +50.0% |    +1 | 14.3% → 17.6% |   2 → 3 | `PhaseChaitin::Simplify`     | `<unknown>` |
| +100.0% |    +1 |  7.1% → 11.8% |   1 → 2 | `PhaseIFG::remove_node`      | `<unknown>` |

##### `PhaseChaitin::Split` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                            | Location    |
| -----: | ----: | -----: | ------: | --------------------------------- | ----------- |
| +20.0% |    +3 | 100.0% | 15 → 18 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `Node::add_req` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                             | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Matcher::match_tree`              | `<unknown>` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `Matcher::ReduceOper`              | `<unknown>` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `PhaseChaitin::get_spillcopy_wide` | `<unknown>` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `GraphKit::make_slow_call_ex`      | `<unknown>` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `Matcher::ReduceInst_Interior`     | `<unknown>` |

##### `PhaseIFG::remove_node` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                   | Location    |
| -----: | ----: | ------------: | ------: | ------------------------ | ----------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `PhaseChaitin::Simplify` | `<unknown>` |

##### `NodeHash::hash_delete` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                              | Location    |
| -----: | ----: | -----------: | ------: | ----------------------------------- | ----------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `PhaseIterGVN::rehash_node_delayed` | `<unknown>` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `PhaseIdealLoop::do_split_if`       | `<unknown>` |

##### `CmpPNode::Opcode` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                           | Location    |
| -----: | ----: | -----------: | ------: | -------------------------------- | ----------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `PhaseIterGVN::subsume_node`     | `<unknown>` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `PhaseIterGVN::transform_old`    | `<unknown>` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `IdealLoopTree::iteration_split` | `<unknown>` |

##### `OopMapValue::write_on` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                            | Location    |
| -----: | ----: | -----------: | ------: | --------------------------------- | ----------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `OopMap::OopMap`                  | `<unknown>` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `CodeEmitInfo::record_debug_info` | `<unknown>` |

##### `Matcher::find_shared_visit` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                 | Location    |
| -----: | ----: | -----------: | ------: | ---------------------- | ----------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `Matcher::match`       | `<unknown>` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `Matcher::find_shared` | `<unknown>` |

##### `AddPNode::Opcode` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                      | Location    |
| -----: | ----: | -----------: | ------: | ------------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `PhaseIdealLoop::split_if_with_blocks`      | `<unknown>` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `PhaseIdealLoop::remix_address_expressions` | `<unknown>` |

##### `SymbolTable::lookup_shared` (`<unknown>`)

| Change | Delta |              % | Samples | Caller                     | Location    |
| -----: | ----: | -------------: | ------: | -------------------------- | ----------- |
|    new |    +2 |   0.0% → 40.0% |   0 → 2 | `SymbolTable::new_symbol`  | `<unknown>` |
| +50.0% |    +1 | 100.0% → 60.0% |   2 → 3 | `SymbolTable::lookup_only` | `<unknown>` |

##### `__psynch_cvbroad` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                               | Location    |
| ------: | ----: | -----: | ------: | ------------------------------------ | ----------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `CompileBroker::create_compile_task` | `<unknown>` |

##### `G1CodeRootSet::add` (`<unknown>`)

| Change | Delta |             % | Samples | Caller             | Location    |
| -----: | ----: | ------------: | ------: | ------------------ | ----------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `nmethod::oops_do` | `<unknown>` |

##### `ClassFileParser::verify_legal_class_name` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                 | Location    |
| -----: | ----: | -----------: | ------: | -------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `ClassFileParser::parse_constant_pool` | `<unknown>` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `ClassFileParser::parse_stream`        | `<unknown>` |

##### `__psynch_mutexwait` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                              | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------- | ----------- |
| +22.2% |    +2 | 100.0% |  9 → 11 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `Dict::Insert` (`<unknown>`)

| Change | Delta |             % | Samples | Caller           | Location    |
| -----: | ----: | ------------: | ------: | ---------------- | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `Type::hashcons` | `<unknown>` |

##### `__psynch_cvwait` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                  | Location    |
| -----: | ----: | -----: | ------: | ----------------------- | ----------- |
| +20.0% |    +2 | 100.0% | 10 → 12 | `PlatformMonitor::wait` | `<unknown>` |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                         | Location    |
| -----: | ----: | -----: | ------: | ---------------------------------------------- | ----------- |
| +50.0% |    +2 | 100.0% |   4 → 6 | `void G1CMTask::process_grey_task_entry<true>` | `<unknown>` |

##### `void G1CMTask::process_grey_task_entry<true>` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                        | Location    |
| -----: | ----: | -----------: | ------: | ----------------------------- | ----------- |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `G1CMTask::drain_local_queue` | `<unknown>` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `G1CMTask::do_marking_step`   | `<unknown>` |

##### `resolvePlainArgumentType` (`org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`)

| Change | Delta |            % | Samples | Caller                             | Location                                                                  |
| -----: | ----: | -----------: | ------: | ---------------------------------- | ------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `resolvePlainArgumentType$default` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `resolveExtensionReceiver`         | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckExtensionReceiver`    |

##### `processCandidatesWithGivenImplicitReceiverAsValue` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask`)

| Change | Delta |            % | Samples | Caller                                                     | Location                                                           |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `access$processCandidatesWithGivenImplicitReceiverAsValue` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `runResolverForNoReceiver`                                 | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask` |

##### `isArrayType` (`org.jetbrains.kotlin.fir.types.ConeBuiltinTypeUtilsKt`)

| Change | Delta |             % | Samples | Caller                           | Location                                                |
| -----: | ----: | ------------: | ------: | -------------------------------- | ------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `isArrayTypeOrNullableArrayType` | `org.jetbrains.kotlin.fir.types.ConeBuiltinTypeUtilsKt` |

##### `visitExpression` (`org.jetbrains.kotlin.ir.visitors.IrVisitorVoid`)

| Change | Delta |             % | Samples | Caller                      | Location                                         |
| -----: | ----: | ------------: | ------: | --------------------------- | ------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitDeclarationReference` | `org.jetbrains.kotlin.ir.visitors.IrVisitorVoid` |

##### `accept` (`org.jetbrains.kotlin.ir.expressions.IrGetValue`)

| Change | Delta |             % | Samples | Caller      | Location                                           |
| -----: | ----: | ------------: | ------: | ----------- | -------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `transform` | `org.jetbrains.kotlin.ir.expressions.IrExpression` |

##### `acceptChildren` (`org.jetbrains.kotlin.ir.declarations.IrFunction`)

| Change | Delta |             % | Samples | Caller               | Location                                        |
| -----: | ----: | ------------: | ------: | -------------------- | ----------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `acceptChildrenVoid` | `org.jetbrains.kotlin.ir.visitors.IrVisitorsKt` |

##### `resolveCallAndSelectCandidate$default` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

| Change | Delta |             % | Samples | Caller                                                       | Location                                                                                      |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `transformFunctionCallInternal$org_jetbrains_kotlin_resolve` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `transformFunctionCallInternal$org_jetbrains_kotlin_resolve` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`)

|  Change | Delta |      % | Samples | Caller                  | Location                                                                                      |
| ------: | ----: | -----: | ------: | ----------------------- | --------------------------------------------------------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `transformFunctionCall` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `transformBlock` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change | Delta |             % | Samples | Caller      | Location                                        |
| -----: | ----: | ------------: | ------: | ----------- | ----------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `transform` | `org.jetbrains.kotlin.fir.expressions.FirBlock` |

##### `fastCorrespondingSupertypes` (`org.jetbrains.kotlin.fir.types.ConeTypeContext`)

| Change | Delta |             % | Samples | Caller                        | Location                                                                     |
| -----: | ----: | ------------: | ------: | ----------------------------- | ---------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `fastCorrespondingSupertypes` | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl` |

##### `loadProperty` (`org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`)

| Change | Delta |             % | Samples | Caller                     | Location                                                          |
| -----: | ----: | ------------: | ------: | -------------------------- | ----------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `deserializeClassToSymbol` | `org.jetbrains.kotlin.fir.deserialization.ClassDeserializationKt` |

##### `access$addEqualityConstraintAndIncorporateIt` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`)

| Change | Delta |             % | Samples | Caller                         | Location                                                                     |
| -----: | ----: | ------------: | ------: | ------------------------------ | ---------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `addInitialEqualityConstraint` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector` |

##### `resolveType` (`org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer`)

| Change | Delta |             % | Samples | Caller             | Location                                                                           |
| -----: | ----: | ------------: | ------: | ------------------ | ---------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `transformTypeRef` | `org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer` |

##### `convertToIrCall$default` (`org.jetbrains.kotlin.fir.backend.generators.CallAndReferenceGenerator`)

| Change | Delta |             % | Samples | Caller                                                      | Location                                         |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------- | ------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `convertToIrReceiverExpression$org_jetbrains_kotlin_fir2ir` | `org.jetbrains.kotlin.fir.backend.Fir2IrVisitor` |

##### `visitCall` (`org.jetbrains.kotlin.ir.visitors.IrElementTransformerVoid`)

| Change | Delta |             % | Samples | Caller      | Location                                                    |
| -----: | ----: | ------------: | ------: | ----------- | ----------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitCall` | `org.jetbrains.kotlin.ir.visitors.IrElementTransformerVoid` |

##### `computeConstraintEdges` (`org.jetbrains.kotlin.resolve.calls.inference.components.TypeVariableDependencyInformationProvider`)

| Change | Delta |             % | Samples | Caller   | Location                                                                                            |
| -----: | ----: | ------------: | ------: | -------- | --------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>` | `org.jetbrains.kotlin.resolve.calls.inference.components.TypeVariableDependencyInformationProvider` |

##### `resetSmartCastPositionTo` (`org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`)

| Change | Delta |             % | Samples | Caller              | Location                                                   |
| -----: | ----: | ------------: | ------: | ------------------- | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `exitCallArguments` | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer` |

##### `<init>` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation`)

| Change | Delta |             % | Samples | Caller   | Location                                            |
| -----: | ----: | ------------: | ------: | -------- | --------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation` |

##### `isExtensionFunctionType` (`org.jetbrains.kotlin.fir.types.CompilerConeAttributesKt`)

| Change | Delta |             % | Samples | Caller     | Location                                               |
| -----: | ----: | ------------: | ------: | ---------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `toIrType` | `org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter` |

##### `check` (`org.jetbrains.kotlin.fir.analysis.jvm.checkers.expression.FirJvmModuleAccessibilityQualifiedAccessChecker`)

| Change | Delta |             % | Samples | Caller  | Location                                                                                                    |
| -----: | ----: | ------------: | ------: | ------- | ----------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `check` | `org.jetbrains.kotlin.fir.analysis.jvm.checkers.expression.FirJvmModuleAccessibilityQualifiedAccessChecker` |

##### `putVal` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Caller | Location            |
| -----: | ----: | ------------: | ------: | ------ | ------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `put`  | `java.util.HashMap` |

##### `invokeExact_MT` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |             % | Samples | Caller   | Location                                  |
| -----: | ----: | ------------: | ------: | -------- | ----------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invoke` | `java.lang.invoke.BootstrapMethodInvoker` |

##### `resumeWith` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

| Change | Delta |             % | Samples | Caller       | Location                                                           |
| -----: | ----: | ------------: | ------: | ------------ | ------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `resumeTask` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager` |

##### `getValue` (`kotlin.UnsafeLazyImpl`)

| Change | Delta |             % | Samples | Caller      | Location                                                     |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getSystem` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate` |

##### `throwParameterIsNullNPE` (`kotlin.jvm.internal.Intrinsics`)

| Change | Delta |             % | Samples | Caller                  | Location                         |
| -----: | ----: | ------------: | ------: | ----------------------- | -------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `checkNotNullParameter` | `kotlin.jvm.internal.Intrinsics` |

##### `linkToTargetMethod` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |             % | Samples | Caller                   | Location                                             |
| -----: | ----: | ------------: | ------: | ------------------------ | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `processFunctionsByName` | `org.jetbrains.kotlin.fir.scopes.jvm.JvmMappedScope` |

##### `getNode` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Caller | Location            |
| -----: | ----: | ------------: | ------: | ------ | ------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `get`  | `java.util.HashMap` |

##### `<init>` (`kotlin.collections.builders.MapBuilder`)

| Change | Delta |             % | Samples | Caller   | Location                                 |
| -----: | ----: | ------------: | ------: | -------- | ---------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>` | `kotlin.collections.builders.MapBuilder` |

##### `checkIndex` (`java.lang.String`)

|  Change | Delta |      % | Samples | Caller   | Location                 |
| ------: | ----: | -----: | ------: | -------- | ------------------------ |
| +100.0% |    +1 | 100.0% |   1 → 2 | `charAt` | `java.lang.StringLatin1` |

##### `checkAndAddEntry` (`java.util.zip.ZipFile$Source`)

| Change | Delta |             % | Samples | Caller    | Location                       |
| -----: | ----: | ------------: | ------: | --------- | ------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `initCEN` | `java.util.zip.ZipFile$Source` |

##### `lastIndexOf$default` (`kotlin.text.StringsKt__StringsKt`)

| Change | Delta |             % | Samples | Caller               | Location                           |
| -----: | ----: | ------------: | ------: | -------------------- | ---------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `substringAfterLast` | `kotlin.text.StringsKt__StringsKt` |

##### `addElementType` (`java.lang.reflect.Proxy$ProxyBuilder`)

| Change | Delta |             % | Samples | Caller            | Location                               |
| -----: | ----: | ------------: | ------: | ----------------- | -------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `referencedTypes` | `java.lang.reflect.Proxy$ProxyBuilder` |

##### `allocateUninitializedArray0` (`jdk.internal.misc.Unsafe`)

| Change | Delta |             % | Samples | Caller                       | Location                   |
| -----: | ----: | ------------: | ------: | ---------------------------- | -------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `allocateUninitializedArray` | `jdk.internal.misc.Unsafe` |

##### `transfer` (`java.util.concurrent.ConcurrentHashMap`)

| Change | Delta |             % | Samples | Caller     | Location                                 |
| -----: | ----: | ------------: | ------: | ---------- | ---------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `addCount` | `java.util.concurrent.ConcurrentHashMap` |

##### `removeLast` (`kotlin.collections.CollectionsKt__MutableCollectionsKt`)

| Change | Delta |             % | Samples | Caller                 | Location                                                                   |
| -----: | ----: | ------------: | ------: | ---------------------- | -------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `dropCallOrAssignment` | `org.jetbrains.kotlin.fir.analysis.checkers.context.MutableCheckerContext` |

##### `<init>` (`java.lang.AbstractStringBuilder`)

| Change | Delta |             % | Samples | Caller   | Location                  |
| -----: | ----: | ------------: | ------: | -------- | ------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>` | `java.lang.StringBuilder` |

##### `asReversed` (`kotlin.collections.CollectionsKt__ReversedViewsKt`)

| Change | Delta |             % | Samples | Caller                    | Location                                                                         |
| -----: | ----: | ------------: | ------: | ------------------------- | -------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `isCallTheFirstStatement` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder` |

##### `equals` (`java.util.Objects`)

| Change | Delta |             % | Samples | Caller   | Location                               |
| -----: | ----: | ------------: | ------: | -------- | -------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `equals` | `jdk.internal.util.StrongReferenceKey` |

##### `clinit` (`java.lang.invoke.InvokerBytecodeGenerator`)

| Change | Delta |             % | Samples | Caller                        | Location                                    |
| -----: | ----: | ------------: | ------: | ----------------------------- | ------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `generateCustomizedCodeBytes` | `java.lang.invoke.InvokerBytecodeGenerator` |

##### `setMajorVersionAndClassName` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change | Delta |             % | Samples | Caller  | Location                                     |
| -----: | ----: | ------------: | ------: | ------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visit` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `zero_blocks` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller   | Location                                 |
| ------: | ----: | ------------: | ------: | -------- | ---------------------------------------- |
|     new |    +2 | 0.0% → 100.0% |   0 → 2 | `<init>` | `java.io.ByteArrayOutputStream`          |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>` | `kotlin.collections.builders.MapBuilder` |

##### `I2C/C2I adapters(0xbbb)` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                             | Location                                                                      |
| -----: | ----: | -----------: | ------: | ---------------------------------- | ----------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `visitFunctionCall`                | `org.jetbrains.kotlin.fir.visitors.FirVisitorVoid`                            |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `enqueueResolveTasksForNoReceiver` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension` |

##### `tlv_get_addr` (`<unknown>`)

|  Change | Delta |           % | Samples | Caller                                    | Location    |
| ------: | ----: | ----------: | ------: | ----------------------------------------- | ----------- |
| removed |    -2 | 8.3% → 0.0% |   2 → 0 | `BlockListBuilder::BlockListBuilder`      | `<unknown>` |
| removed |    -2 | 8.3% → 0.0% |   2 → 0 | `GraphBuilder::invoke`                    | `<unknown>` |
| removed |    -2 | 8.3% → 0.0% |   2 → 0 | `TypeInstPtr::make`                       | `<unknown>` |
| removed |    -1 | 4.2% → 0.0% |   1 → 0 | `PhaseValues::intcon`                     | `<unknown>` |
| removed |    -1 | 4.2% → 0.0% |   1 → 0 | `GraphKit::transfer_exceptions_into_jvms` | `<unknown>` |

##### `_platform_memmove` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                     | Location    |
| ------: | ----: | -----------: | ------: | -------------------------- | ----------- |
| removed |    -2 | 22.2% → 0.0% |   2 → 0 | `PhaseIdealLoop::set_idom` | `<unknown>` |
| removed |    -2 | 22.2% → 0.0% |   2 → 0 | `PhaseOutput::Output`      | `<unknown>` |
| removed |    -1 | 11.1% → 0.0% |   1 → 0 | `Node_Array::grow`         | `<unknown>` |
| removed |    -1 | 11.1% → 0.0% |   1 → 0 | `VectorSet::grow`          | `<unknown>` |
| removed |    -1 | 11.1% → 0.0% |   1 → 0 | `nmethod::nmethod`         | `<unknown>` |

##### `_platform_memset` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                          | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------- | ----------- |
| removed |    -2 | 12.5% → 0.0% |   2 → 0 | `GraphBuilder::append_with_bci` | `<unknown>` |
| removed |    -2 | 12.5% → 0.0% |   2 → 0 | `ConNode::make`                 | `<unknown>` |
| removed |    -1 |  6.3% → 0.0% |   1 → 0 | `Matcher::Label_Root`           | `<unknown>` |
| removed |    -1 |  6.3% → 0.0% |   1 → 0 | `Node::Node`                    | `<unknown>` |
| removed |    -1 |  6.3% → 0.0% |   1 → 0 | `MemAllocator::allocate`        | `<unknown>` |

##### `Compile::disconnect_useless_nodes` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                   | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------------------- | ----------- |
| removed |    -5 | 83.3% → 0.0% |   5 → 0 | `PhaseRemoveUseless::PhaseRemoveUseless` | `<unknown>` |

##### `PhaseIdealLoop::is_dominator` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                        | Location    |
| -----: | ----: | -----: | ------: | --------------------------------------------- | ----------- |
| -71.4% |    -5 | 100.0% |   7 → 2 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `<unknown>` |

##### `sanitizeStackTrace` (`kotlin.jvm.internal.Intrinsics`)

| Change | Delta |      % | Samples | Caller                    | Location                         |
| -----: | ----: | -----: | ------: | ------------------------- | -------------------------------- |
| -66.7% |    -4 | 100.0% |   6 → 2 | `throwParameterIsNullNPE` | `kotlin.jvm.internal.Intrinsics` |

##### `LinearScan::build_intervals` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                       | Location    |
| -----: | ----: | -----: | ------: | ---------------------------- | ----------- |
| -57.1% |    -4 | 100.0% |   7 → 3 | `LinearScan::do_linear_scan` | `<unknown>` |

##### `ClassVerifier::verify_invoke_instructions` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                         | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------ | ----------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `ClassVerifier::verify_method` | `<unknown>` |

##### `TypeInstPtr::hash` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                        | Location    |
| ------: | ----: | -----------: | ------: | ----------------------------- | ----------- |
| removed |    -2 | 40.0% → 0.0% |   2 → 0 | `PhaseIterGVN::transform_old` | `<unknown>` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `ConstraintCastNode::hash`    | `<unknown>` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `NodeHash::hash_find_insert`  | `<unknown>` |

##### `LIR_Assembler::record_non_safepoint_debug_info` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                              | Location    |
| ------: | ----: | -----------: | ------: | ----------------------------------- | ----------- |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `LIR_Assembler::process_debug_info` | `<unknown>` |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `LIR_Assembler::add_call_info`      | `<unknown>` |

##### `PhaseIdealLoop::compute_lca_of_uses` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                      | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | ----------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |

##### `checkNotNullParameter` (`kotlin.jvm.internal.Intrinsics`)

|  Change | Delta |            % | Samples | Caller                     | Location                                                           |
| ------: | ----: | -----------: | ------: | -------------------------- | ------------------------------------------------------------------ |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `unwrapVariable`           | `org.jetbrains.kotlin.fir.resolve.dfa.Flow`                        |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `enqueueResolverTask`      | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager` |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `visitReturn`              | `org.jetbrains.kotlin.ir.visitors.IrVisitorVoid`                   |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `getExtensionFunctionType` | `org.jetbrains.kotlin.fir.types.CompilerConeAttributesKt`          |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `getClassId`               | `org.jetbrains.kotlin.fir.types.ConeTypeUtilsKt`                   |

##### `PhaseCCP::push_more_uses` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                   | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------------------- | ----------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `PhaseCCP::push_child_nodes_to_worklist` | `<unknown>` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `PhaseCCP::analyze`                      | `<unknown>` |

##### `inflate_fast` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                          | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | ----------- |
|  -6.0% |    -3 | 100.0% | 50 → 47 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `PhaseLive::add_liveout` (`<unknown>`)

| Change | Delta |      % | Samples | Caller               | Location    |
| -----: | ----: | -----: | ------: | -------------------- | ----------- |
| -50.0% |    -3 | 100.0% |   6 → 3 | `PhaseLive::compute` | `<unknown>` |

##### `posix_madvise` (`<unknown>`)

| Change | Delta |      % | Samples | Caller        | Location    |
| -----: | ----: | -----: | ------: | ------------- | ----------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `free_medium` | `<unknown>` |

##### `ciObjectFactory::get_metadata` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                           | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------- | ----------- |
| +150.0% |    +3 | 15.4% → 50.0% |   2 → 5 | `ciEnv::get_klass_by_name_impl`  | `<unknown>` |
|  -75.0% |    -3 | 30.8% → 10.0% |   4 → 1 | `ciEnv::get_klass_by_index_impl` | `<unknown>` |
| removed |    -1 |   7.7% → 0.0% |   1 → 0 | `ciEnv::get_method_from_handle`  | `<unknown>` |
|  -50.0% |    -1 | 15.4% → 10.0% |   2 → 1 | `ciBytecodeStream::get_method`   | `<unknown>` |
|  -50.0% |    -1 | 15.4% → 10.0% |   2 → 1 | `ciMethod::ensure_method_data`   | `<unknown>` |

##### `LIR_Assembler::process_debug_info` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                         | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------ | ----------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `LIR_Assembler::emit_lir_list` | `<unknown>` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `LIR_Assembler::emit_code`     | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                            | Location    |
| -----: | ----: | -----: | ------: | --------------------------------- | ----------- |
| -21.4% |    -3 | 100.0% | 14 → 11 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `compare_immediate_pair` (`<unknown>`)

| Change | Delta |      % | Samples | Caller    | Location    |
| -----: | ----: | -----: | ------: | --------- | ----------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `bsearch` | `<unknown>` |

##### `RegMask::clear_to_sets` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                           | Location    |
| ------: | ----: | -----------: | ------: | -------------------------------- | ----------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `PhaseChaitin::gather_lrg_masks` | `<unknown>` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `PhaseChaitin::Select`           | `<unknown>` |

##### `LoadBNode::Opcode` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                           | Location    |
| ------: | ----: | -----------: | ------: | -------------------------------- | ----------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `PhaseIdealLoop::split_thru_phi` | `<unknown>` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `PhaseCCP::push_more_uses`       | `<unknown>` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `PhaseCCP::transform`            | `<unknown>` |

##### `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                             | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------- | ----------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `PhaseChaitin::build_ifg_physical` | `<unknown>` |

##### `OopMapSort::sort` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                             | Location    |
| ------: | ----: | -------------: | ------: | ---------------------------------- | ----------- |
|  -50.0% |    -2 | 80.0% → 100.0% |   4 → 2 | `ImmutableOopMap::ImmutableOopMap` | `<unknown>` |
| removed |    -1 |   20.0% → 0.0% |   1 → 0 | `ImmutableOopMapBuilder::build`    | `<unknown>` |

##### `LinearScanWalker::free_collect_inactive_any` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                             | Location    |
| -----: | ----: | -----: | ------: | ---------------------------------- | ----------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `LinearScanWalker::alloc_free_reg` | `<unknown>` |

##### `IndexSet::initialize` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller               | Location    |
| ------: | ----: | ------------: | ------: | -------------------- | ----------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `PhaseLive::compute` | `<unknown>` |

##### `Unique_Node_List::remove` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                    | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------------- | ----------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `PhaseIterGVN::remove_globally_dead_node` | `<unknown>` |

##### `PhaseIterGVN::optimize` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                 | Location    |
| ------: | ----: | -----------: | ------: | -------------------------------------- | ----------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::optimize`             | `<unknown>` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseMacroExpand::expand_macro_nodes` | `<unknown>` |

##### `OopFlow::compute_reach` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                      | Location    |
| -----: | ----: | -----: | ------: | --------------------------- | ----------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `PhaseOutput::BuildOopMaps` | `<unknown>` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                   | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------ | ----------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` | `<unknown>` |

##### `FieldInfoReader::read_field_info` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                             | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------------- | ----------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `JavaFieldStream::JavaFieldStream` | `<unknown>` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `InstanceKlass::find_local_field`  | `<unknown>` |

##### `Arena::Arealloc` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                 | Location    |
| ------: | ----: | -----------: | ------: | ---------------------- | ----------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `Node::add_req`        | `<unknown>` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `Parse::throw_to_exit` | `<unknown>` |

##### `__gettimeofday` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                  | Location    |
| ------: | ----: | ------------: | ------: | ----------------------- | ----------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `PlatformMonitor::wait` | `<unknown>` |

##### `Symbol::decrement_refcount` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                            | Location    |
| ------: | ----: | -----------: | ------: | --------------------------------- | ----------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `ciObjectFactory::remove_symbols` | `<unknown>` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `ciEnv::get_klass_by_name_impl`   | `<unknown>` |

##### `CodeHeap::find_blob` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                      | Location    |
| ------: | ----: | ------------: | ------: | --------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `JavaThread::pd_last_frame` | `<unknown>` |

##### `SymbolTable::lookup_only` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                         | Location    |
| ------: | ----: | -------------: | ------: | ---------------------------------------------- | ----------- |
|  -33.3% |    -1 | 75.0% → 100.0% |   3 → 2 | `ClassFileParser::parse_constant_pool_entries` | `<unknown>` |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `ClassFileParser::parse_constant_pool`         | `<unknown>` |

##### `ClassFileParser::parse_method` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                           | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `ClassFileParser::parse_methods` | `<unknown>` |

##### `inflate_table` (`<unknown>`)

| Change | Delta |      % | Samples | Caller    | Location    |
| -----: | ----: | -----: | ------: | --------- | ----------- |
| -25.0% |    -2 | 100.0% |   8 → 6 | `inflate` | `<unknown>` |

##### `MemAllocator::Allocation::notify_allocation` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                             | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------------- | ----------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `CollectedHeap::array_allocate`    | `<unknown>` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `InstanceKlass::allocate_instance` | `<unknown>` |

##### `_qsort` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                        | Location    |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | ----------- |
| removed |    -3 | 60.0% → 0.0% |   3 → 0 | `TypeInterfaces::make`                        | `<unknown>` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `_qsort`                                      | `<unknown>` |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `LinearScan::sort_intervals_after_allocation` | `<unknown>` |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `Dependencies::sort_all_deps`                 | `<unknown>` |

##### `methodHandle::operator=` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                         | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------------------------- | ----------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `LinkResolver::runtime_resolve_virtual_method` | `<unknown>` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `LinkResolver::resolve_static_call_or_null`    | `<unknown>` |

##### `void G1ScanCardClosure::do_oop_work<narrowOop>` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                                           | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `void OopOopIterateBoundedDispatch<G1ScanCardClosure>::Table::oop_oop_iterate_bounded<ObjArrayKlass, narrowOop>` | `<unknown>` |

##### `advance` (`org.jetbrains.kotlin.lexer._JetLexer`)

|  Change | Delta |             % | Samples | Caller        | Location                         |
| ------: | ----: | ------------: | ------: | ------------- | -------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `locateToken` | `com.intellij.lexer.FlexAdapter` |

##### `create` (`org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass`)

|  Change | Delta |             % | Samples | Caller            | Location                                                          |
| ------: | ----: | ------------: | ------: | ----------------- | ----------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `create$lambda$0` | `org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory` |

##### `asSingleFqName` (`org.jetbrains.kotlin.name.ClassId`)

|  Change | Delta |             % | Samples | Caller                               | Location                                               |
| ------: | ----: | ------------: | ------: | ------------------------------------ | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `appendConeType$appendClassLikeType` | `org.jetbrains.kotlin.fir.scopes.jvm.SignatureUtilsKt` |

##### `flushLastBuffer` (`org.jetbrains.kotlin.protobuf.ByteString$Output`)

|  Change | Delta |             % | Samples | Caller         | Location                                          |
| ------: | ----: | ------------: | ------: | -------------- | ------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `toByteString` | `org.jetbrains.kotlin.protobuf.ByteString$Output` |

##### `processFunctionsByName` (`org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`)

|  Change | Delta |             % | Samples | Caller   | Location                                                                                     |
| ------: | ----: | ------------: | ------: | -------- | -------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invoke` | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processFunctionsByName$1` |

##### `runResolver` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`)

|  Change | Delta |             % | Samples | Caller        | Location                                                        |
| ------: | ----: | ------------: | ------: | ------------- | --------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `runResolver` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver` |

##### `transformFunctionContent` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`)

|  Change | Delta |             % | Samples | Caller                                | Location                                                                                       |
| ------: | ----: | ------------: | ------: | ------------------------------------- | ---------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `transformFunctionWithGivenSignature` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |

##### `parametersCount` (`org.jetbrains.kotlin.fir.types.ConeTypeContext`)

|  Change | Delta |             % | Samples | Caller             | Location                                     |
| ------: | ----: | ------------: | ------: | ------------------ | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `captureArguments` | `org.jetbrains.kotlin.fir.types.TypeUtilsKt` |

##### `accept` (`org.jetbrains.kotlin.ir.expressions.IrTypeOperatorCall`)

|  Change | Delta |             % | Samples | Caller           | Location                                                    |
| ------: | ----: | ------------: | ------: | ---------------- | ----------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `acceptChildren` | `org.jetbrains.kotlin.ir.expressions.IrContainerExpression` |

##### `readElementValue` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|  Change | Delta |             % | Samples | Caller              | Location                                      |
| ------: | ----: | ------------: | ------: | ------------------- | --------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `readElementValues` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `getClassLikeSymbolByClassId` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`)

|  Change | Delta |             % | Samples | Caller         | Location                                                                            |
| ------: | ----: | ------------: | ------: | -------------- | ----------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `computeClass` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider` |

##### `accept` (`org.jetbrains.kotlin.fir.declarations.FirNamedFunction`)

|  Change | Delta |             % | Samples | Caller         | Location                                                                                |
| ------: | ----: | ------------: | ------: | -------------- | --------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `checkElement` | `org.jetbrains.kotlin.fir.analysis.collectors.CheckerRunningDiagnosticCollectorVisitor` |

##### `check` (`org.jetbrains.kotlin.fir.resolve.calls.stages.CheckVisibility`)

|  Change | Delta |             % | Samples | Caller          | Location                                                                                 |
| ------: | ----: | ------------: | ------: | --------------- | ---------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeSuspend` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1` |

##### `completeCall` (`org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`)

|  Change | Delta |             % | Samples | Caller                 | Location                                                      |
| ------: | ----: | ------------: | ------: | ---------------------- | ------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `completeCall$default` | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter` |

##### `accept` (`org.jetbrains.kotlin.fir.types.FirResolvedTypeRef`)

|  Change | Delta |             % | Samples | Caller         | Location                                                                                |
| ------: | ----: | ------------: | ------: | -------------- | --------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `checkElement` | `org.jetbrains.kotlin.fir.analysis.collectors.CheckerRunningDiagnosticCollectorVisitor` |

##### `accept` (`org.jetbrains.org.objectweb.asm.tree.LabelNode`)

|  Change | Delta |             % | Samples | Caller   | Location                                        |
| ------: | ----: | ------------: | ------: | -------- | ----------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `accept` | `org.jetbrains.org.objectweb.asm.tree.InsnList` |

##### `analyze` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryValsAnalyzer`)

|  Change | Delta |             % | Samples | Caller      | Location                                                                                           |
| ------: | ----: | ------------: | ------: | ----------- | -------------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `transform` | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |

##### `processDefaultsAndRunChecks` (`org.jetbrains.kotlin.fir.resolve.calls.stages.FirCallArgumentsProcessor`)

|  Change | Delta |             % | Samples | Caller         | Location                                                                         |
| ------: | ----: | ------------: | ------: | -------------- | -------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `mapArguments` | `org.jetbrains.kotlin.fir.resolve.calls.stages.FirArgumentsToParametersMapperKt` |

##### `getProtocol` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarFileSystem`)

|  Change | Delta |             % | Samples | Caller           | Location                                                     |
| ------: | ----: | ------------: | ------: | ---------------- | ------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `findJavaModule` | `org.jetbrains.kotlin.cli.jvm.modules.CliJavaModuleResolver` |

##### `<init>` (`org.jetbrains.kotlin.util.AttributeArrayOwner`)

|  Change | Delta |             % | Samples | Caller   | Location                                        |
| ------: | ----: | ------------: | ------: | -------- | ----------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>` | `org.jetbrains.kotlin.util.AttributeArrayOwner` |

##### `hasNext` (`kotlin.collections.EmptyIterator`)

|  Change | Delta |            % | Samples | Caller                                  | Location                                                                         |
| ------: | ----: | -----------: | ------: | --------------------------------------- | -------------------------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `flattenTo`                             | `org.jetbrains.kotlin.utils.addToStdlib.AddToStdlibKt`                           |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `loadExperimentalitiesFromAnnotationTo` | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirOptInUsageBaseChecker` |

##### `linkCallSiteImpl` (`java.lang.invoke.MethodHandleNatives`)

|  Change | Delta |             % | Samples | Caller         | Location                               |
| ------: | ----: | ------------: | ------: | -------------- | -------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `linkCallSite` | `java.lang.invoke.MethodHandleNatives` |

##### `isEmpty` (`kotlin.collections.builders.MapBuilder`)

|  Change | Delta |             % | Samples | Caller   | Location                                                                       |
| ------: | ----: | ------------: | ------: | -------- | ------------------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `create` | `org.jetbrains.kotlin.fir.resolve.substitution.ConeSubstitutorByMap$Companion` |

##### `remove` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller   | Location            |
| ------: | ----: | ------------: | ------: | -------- | ------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `remove` | `java.util.HashSet` |

##### `checkIndex` (`java.util.Objects`)

|  Change | Delta |             % | Samples | Caller | Location              |
| ------: | ----: | ------------: | ------: | ------ | --------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `get`  | `java.util.ArrayList` |

##### `valueOf` (`java.lang.String`)

|  Change | Delta |             % | Samples | Caller           | Location                                                                                    |
| ------: | ----: | ------------: | ------: | ---------------- | ------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `checkLightTree` | `org.jetbrains.kotlin.fir.analysis.checkers.syntax.FirUnderscoredTypeArgumentSyntaxChecker` |

##### `checkForComodification$kotlin_stdlib` (`kotlin.collections.builders.MapBuilder$Itr`)

|  Change | Delta |             % | Samples | Caller | Location                                            |
| ------: | ----: | ------------: | ------: | ------ | --------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `next` | `kotlin.collections.builders.MapBuilder$EntriesItr` |

##### `drop` (`kotlin.collections.CollectionsKt___CollectionsKt`)

|  Change | Delta |             % | Samples | Caller                | Location                                                                    |
| ------: | ----: | ------------: | ------: | --------------------- | --------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `capitalizeFirstWord` | `org.jetbrains.kotlin.util.capitalizeDecapitalize.CapitalizeDecapitalizeKt` |

##### `hasNext` (`java.util.LinkedHashMap$LinkedHashIterator`)

|  Change | Delta |             % | Samples | Caller                  | Location                                                                                                |
| ------: | ----: | ------------: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getAssignedProperties` | `org.jetbrains.kotlin.fir.resolve.dfa.FirLocalVariableAssignmentAnalyzer$Companion$VariableAssignments` |

##### `readFullyAt` (`java.util.zip.ZipFile$Source`)

|  Change | Delta |             % | Samples | Caller           | Location                                   |
| ------: | ----: | ------------: | ------: | ---------------- | ------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `initDataOffset` | `java.util.zip.ZipFile$ZipFileInputStream` |

##### `get` (`java.lang.ThreadLocal`)

|  Change | Delta |             % | Samples | Caller | Location                |
| ------: | ----: | ------------: | ------: | ------ | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `get`  | `java.lang.ThreadLocal` |

##### `<init>` (`java.lang.invoke.MemberName`)

|  Change | Delta |             % | Samples | Caller                           | Location                               |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `varHandleOperationLinkerMethod` | `java.lang.invoke.MethodHandleNatives` |

##### `equals` (`java.lang.String`)

|  Change | Delta |             % | Samples | Caller    | Location            |
| ------: | ----: | ------------: | ------: | --------- | ------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getNode` | `java.util.HashMap` |

##### `size` (`java.util.Collections$SingletonList`)

|  Change | Delta |             % | Samples | Caller    | Location                       |
| ------: | ----: | ------------: | ------: | --------- | ------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `isEmpty` | `java.util.AbstractCollection` |

##### `nextInt` (`kotlin.ranges.IntProgressionIterator`)

|  Change | Delta |             % | Samples | Caller | Location                         |
| ------: | ----: | ------------: | ------: | ------ | -------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `next` | `kotlin.collections.IntIterator` |

##### `isEmpty` (`kotlin.collections.EmptyList`)

|  Change | Delta |             % | Samples | Caller             | Location                                                |
| ------: | ----: | ------------: | ------: | ------------------ | ------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `IrSimpleTypeImpl` | `org.jetbrains.kotlin.ir.types.impl.IrSimpleTypeImplKt` |

##### `isWhitespace` (`java.lang.Character`)

|  Change | Delta |             % | Samples | Caller         | Location              |
| ------: | ----: | ------------: | ------: | -------------- | --------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `isWhitespace` | `java.lang.Character` |

##### `remove` (`java.util.Collections$SetFromMap`)

|  Change | Delta |             % | Samples | Caller                | Location    |
| ------: | ----: | ------------: | ------: | --------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `[break_stack_range]` | `<unknown>` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                   | Location                                                                                                                         |
| ------: | ----: | ------------: | ------: | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `invoke`                 | `org.jetbrains.kotlin.backend.common.linkage.issues.SignatureClashDetector$$Lambda.0x00000003018cb2c0`                           |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `functionProto`          | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer`                                                                    |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `revert`                 | `org.jetbrains.kotlin.codegen.optimization.nullCheck.RedundantNullCheckMethodTransformer$TransformerPass$NullabilityAssumptions` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `isEnabledByDefault`     | `org.jetbrains.kotlin.config.LanguageVersionSettingsKt`                                                                          |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `toDeprecationsProvider` | `org.jetbrains.kotlin.fir.declarations.DeprecationAnnotationInfoPerUseSiteStorage`                                               |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |   Samples | Function                                        | Location                                                           |
| ------: | ----: | ------------: | --------: | ----------------------------------------------- | ------------------------------------------------------------------ |
|   +4.3% |   +37 | 66.6% → 67.6% | 854 → 891 | `Thread::call_run`                              | `<unknown>`                                                        |
|   +4.3% |   +37 | 66.6% → 67.6% | 854 → 891 | `thread_native_entry`                           | `<unknown>`                                                        |
|   +4.3% |   +37 | 66.6% → 67.6% | 855 → 892 | `_pthread_start`                                | `<unknown>`                                                        |
|   +4.3% |   +37 | 66.6% → 67.6% | 855 → 892 | `thread_start`                                  | `<unknown>`                                                        |
|  +69.0% |   +29 |   3.3% → 5.4% |   42 → 71 | `WorkerThread::run`                             | `<unknown>`                                                        |
| +178.6% |   +25 |   1.1% → 3.0% |   14 → 39 | `G1EvacuateRegionsBaseTask::work`               | `<unknown>`                                                        |
| +328.6% |   +23 |   0.5% → 2.3% |    7 → 30 | `G1ParScanThreadState::trim_queue_to_threshold` | `<unknown>`                                                        |
|   +6.3% |   +17 | 20.9% → 21.6% | 268 → 285 | `Compile::Code_Gen`                             | `<unknown>`                                                        |
|     new |   +15 |   0.0% → 1.1% |    0 → 15 | `G1ParScanThreadState::steal_and_trim_queue`    | `<unknown>`                                                        |
| +700.0% |   +14 |   0.2% → 1.2% |    2 → 16 | `G1ParEvacuateFollowersClosure::do_void`        | `<unknown>`                                                        |
| +700.0% |   +14 |   0.2% → 1.2% |    2 → 16 | `G1EvacuateRegionsTask::evacuate_live_objects`  | `<unknown>`                                                        |
|  +12.3% |   +13 |   8.3% → 9.0% | 106 → 119 | `PhaseIdealLoop::build_and_optimize`            | `<unknown>`                                                        |
|  +12.3% |   +13 |   8.3% → 9.0% | 106 → 119 | `PhaseIdealLoop::PhaseIdealLoop`                | `<unknown>`                                                        |
|  +28.9% |   +13 |   3.5% → 4.4% |   45 → 58 | `KlassFactory::create_from_stream`              | `<unknown>`                                                        |
|  +26.8% |   +11 |   3.2% → 3.9% |   41 → 52 | `resumeTask`                                    | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager` |
|  +26.8% |   +11 |   3.2% → 3.9% |   41 → 52 | `runTasks`                                      | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager` |
|  +25.6% |   +11 |   3.4% → 4.1% |   43 → 54 | `runResolver`                                   | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`    |
|  +25.0% |   +11 |   3.4% → 4.2% |   44 → 55 | `runResolver$default`                           | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`    |
|  +24.4% |   +11 |   3.5% → 4.2% |   45 → 56 | `collectCandidates`                             | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`           |
|  +24.4% |   +11 |   3.5% → 4.2% |   45 → 56 | `collectCandidates$default`                     | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`           |

##### Compiler

|  Change | Delta |             % |   Samples | Function                                           | Location    |
| ------: | ----: | ------------: | --------: | -------------------------------------------------- | ----------- |
|   +6.3% |   +17 | 20.9% → 21.6% | 268 → 285 | `Compile::Code_Gen`                                | `<unknown>` |
|  +12.3% |   +13 |   8.3% → 9.0% | 106 → 119 | `PhaseIdealLoop::build_and_optimize`               | `<unknown>` |
|  +12.3% |   +13 |   8.3% → 9.0% | 106 → 119 | `PhaseIdealLoop::PhaseIdealLoop`                   | `<unknown>` |
|   +9.1% |   +11 |  9.4% → 10.0% | 121 → 132 | `PhaseIdealLoop::optimize`                         | `<unknown>` |
|   +4.9% |   +10 | 16.0% → 16.3% | 205 → 215 | `Compile::Optimize`                                | `<unknown>` |
| +333.3% |   +10 |   0.2% → 1.0% |    3 → 13 | `StoreNode::Ideal`                                 | `<unknown>` |
| +450.0% |    +9 |   0.2% → 0.8% |    2 → 11 | `InitializeNode::detect_init_independence`         | `<unknown>` |
| +450.0% |    +9 |   0.2% → 0.8% |    2 → 11 | `InitializeNode::can_capture_store`                | `<unknown>` |
| +900.0% |    +9 |   0.1% → 0.8% |    1 → 10 | `GraphKit::access_store_at`                        | `<unknown>` |
|  +80.0% |    +8 |   0.8% → 1.4% |   10 → 18 | `Type::hashcons`                                   | `<unknown>` |
| +400.0% |    +8 |   0.2% → 0.8% |    2 → 10 | `DebugInformationRecorder::serialize_scope_values` | `<unknown>` |
|   +1.3% |    +7 | 43.2% → 42.5% | 554 → 561 | `Compile::Compile`                                 | `<unknown>` |
|  +77.8% |    +7 |   0.7% → 1.2% |    9 → 16 | `PhaseIdealLoop::Dominators`                       | `<unknown>` |
| +140.0% |    +7 |   0.4% → 0.9% |    5 → 12 | `LIR_Assembler::emit_slow_case_stubs`              | `<unknown>` |
| +116.7% |    +7 |   0.5% → 1.0% |    6 → 13 | `Compilation::emit_code_epilog`                    | `<unknown>` |
| +350.0% |    +7 |   0.2% → 0.7% |     2 → 9 | `DebugInformationRecorder::create_scope_values`    | `<unknown>` |
|  +31.8% |    +7 |   1.7% → 2.2% |   22 → 29 | `PhaseChaitin::Split`                              | `<unknown>` |
|   +1.1% |    +6 | 43.3% → 42.5% | 555 → 561 | `C2Compiler::compile_method`                       | `<unknown>` |
|   +0.8% |    +6 | 61.8% → 60.6% | 793 → 799 | `CompileBroker::invoke_compiler_on_method`         | `<unknown>` |
|  +60.0% |    +6 |   0.8% → 1.2% |   10 → 16 | `PhaseOutput::fill_buffer`                         | `<unknown>` |

##### Native

|   Change | Delta |             % |   Samples | Function                                          | Location    |
| -------: | ----: | ------------: | --------: | ------------------------------------------------- | ----------- |
|    +4.3% |   +37 | 66.6% → 67.6% | 854 → 891 | `Thread::call_run`                                | `<unknown>` |
|    +4.3% |   +37 | 66.6% → 67.6% | 854 → 891 | `thread_native_entry`                             | `<unknown>` |
|    +4.3% |   +37 | 66.6% → 67.6% | 855 → 892 | `_pthread_start`                                  | `<unknown>` |
|    +4.3% |   +37 | 66.6% → 67.6% | 855 → 892 | `thread_start`                                    | `<unknown>` |
|   +69.0% |   +29 |   3.3% → 5.4% |   42 → 71 | `WorkerThread::run`                               | `<unknown>` |
|  +178.6% |   +25 |   1.1% → 3.0% |   14 → 39 | `G1EvacuateRegionsBaseTask::work`                 | `<unknown>` |
|  +328.6% |   +23 |   0.5% → 2.3% |    7 → 30 | `G1ParScanThreadState::trim_queue_to_threshold`   | `<unknown>` |
|      new |   +15 |   0.0% → 1.1% |    0 → 15 | `G1ParScanThreadState::steal_and_trim_queue`      | `<unknown>` |
|  +700.0% |   +14 |   0.2% → 1.2% |    2 → 16 | `G1ParEvacuateFollowersClosure::do_void`          | `<unknown>` |
|  +700.0% |   +14 |   0.2% → 1.2% |    2 → 16 | `G1EvacuateRegionsTask::evacuate_live_objects`    | `<unknown>` |
|   +28.9% |   +13 |   3.5% → 4.4% |   45 → 58 | `KlassFactory::create_from_stream`                | `<unknown>` |
|  +275.0% |   +11 |   0.3% → 1.1% |    4 → 15 | `G1ParScanThreadState::do_copy_to_survivor_space` | `<unknown>` |
|   +47.6% |   +10 |   1.6% → 2.4% |   21 → 31 | `ClassFileParser::parse_constant_pool_entries`    | `<unknown>` |
|   +41.7% |   +10 |   1.9% → 2.6% |   24 → 34 | `ClassFileParser::parse_constant_pool`            | `<unknown>` |
| +1000.0% |   +10 |   0.1% → 0.8% |    1 → 11 | `Parse::do_put_xxx`                               | `<unknown>` |
|   +23.1% |    +9 |   3.0% → 3.6% |   39 → 48 | `ClassFileParser::parse_stream`                   | `<unknown>` |
|   +18.8% |    +9 |   3.7% → 4.3% |   48 → 57 | `SystemDictionary::resolve_class_from_stream`     | `<unknown>` |
|  +900.0% |    +9 |   0.1% → 0.8% |    1 → 10 | `BarrierSetC2::store_at`                          | `<unknown>` |
|   +16.3% |    +8 |   3.8% → 4.3% |   49 → 57 | `jvm_define_class_common`                         | `<unknown>` |
|   +16.3% |    +8 |   3.8% → 4.3% |   49 → 57 | `JVM_DefineClassWithSource`                       | `<unknown>` |

##### Ours

|  Change | Delta |           % | Samples | Function                                | Location                                                                                       |
| ------: | ----: | ----------: | ------: | --------------------------------------- | ---------------------------------------------------------------------------------------------- |
|  +26.8% |   +11 | 3.2% → 3.9% | 41 → 52 | `resumeTask`                            | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`                             |
|  +26.8% |   +11 | 3.2% → 3.9% | 41 → 52 | `runTasks`                              | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`                             |
|  +25.6% |   +11 | 3.4% → 4.1% | 43 → 54 | `runResolver`                           | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`                                |
|  +25.0% |   +11 | 3.4% → 4.2% | 44 → 55 | `runResolver$default`                   | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`                                |
|  +24.4% |   +11 | 3.5% → 4.2% | 45 → 56 | `collectCandidates`                     | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                       |
|  +24.4% |   +11 | 3.5% → 4.2% | 45 → 56 | `collectCandidates$default`             | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                       |
|  +55.0% |   +11 | 1.6% → 2.4% | 20 → 31 | `consumeCandidate`                      | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor`                             |
|  +55.0% |   +11 | 1.6% → 2.4% | 20 → 31 | `consumeCandidate$default`              | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor`                             |
|  +37.0% |   +10 | 2.1% → 2.8% | 27 → 37 | `processFunctionsAndConstructorsByName` | `org.jetbrains.kotlin.fir.resolve.calls.ConstructorProcessingKt`                               |
|  +18.2% |   +10 | 4.3% → 4.9% | 55 → 65 | `loadClass`                             | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`                                       |
|  +23.7% |    +9 | 3.0% → 3.6% | 38 → 47 | `handleLevel`                           | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelHandler`                               |
|  +64.3% |    +9 | 1.1% → 1.7% | 14 → 23 | `consumeCallableCandidate`              | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`                            |
|  +40.0% |    +8 | 1.6% → 2.1% | 20 → 28 | `processFunctionsByName`                | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`                            |
|  +20.5% |    +8 | 3.0% → 3.6% | 39 → 47 | `resolveCallAndSelectCandidate$default` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                       |
|  +40.0% |    +8 | 1.6% → 2.1% | 20 → 28 | `consumeCandidate`                      | `org.jetbrains.kotlin.fir.resolve.calls.candidate.CandidateCollector`                          |
|  +61.5% |    +8 | 1.0% → 1.6% | 13 → 21 | `processFunctionsByName$lambda$0`       | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`                            |
|  +61.5% |    +8 | 1.0% → 1.6% | 13 → 21 | `invoke`                                | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000d80166d520` |
| +266.7% |    +8 | 0.2% → 0.8% |  3 → 11 | `mapSignature`                          | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`                               |
| +266.7% |    +8 | 0.2% → 0.8% |  3 → 11 | `mapSignature$default`                  | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`                               |
|  +17.5% |    +7 | 3.1% → 3.6% | 40 → 47 | `processLevel`                          | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`                         |

##### Standard library

|  Change | Delta |           % | Samples | Function                       | Location                                                |
| ------: | ----: | ----------: | ------: | ------------------------------ | ------------------------------------------------------- |
|  +21.7% |   +10 | 3.6% → 4.2% | 46 → 56 | `resumeWith`                   | `kotlin.coroutines.jvm.internal.BaseContinuationImpl`   |
|  +20.0% |   +10 | 3.9% → 4.5% | 50 → 60 | `defineClass1`                 | `java.lang.ClassLoader`                                 |
|  +17.5% |   +10 | 4.4% → 5.1% | 57 → 67 | `loadClass`                    | `java.lang.ClassLoader`                                 |
|  +15.1% |    +8 | 4.1% → 4.6% | 53 → 61 | `defineClass`                  | `java.lang.ClassLoader`                                 |
|  +66.7% |    +6 | 0.7% → 1.1% |  9 → 15 | `getValue`                     | `kotlin.UnsafeLazyImpl`                                 |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `generateCustomizedCode`       | `java.lang.invoke.InvokerBytecodeGenerator`             |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `compileToBytecode`            | `java.lang.invoke.LambdaForm`                           |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `putVal`                       | `java.util.HashMap`                                     |
|  +66.7% |    +2 | 0.2% → 0.4% |   3 → 5 | `linkMethodHandleConstant`     | `java.lang.invoke.MethodHandles$Lookup`                 |
|  +66.7% |    +2 | 0.2% → 0.4% |   3 → 5 | `linkMethodHandleConstant`     | `java.lang.invoke.MethodHandleNatives`                  |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `findBootstrapClass`           | `java.lang.ClassLoader`                                 |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `findBootstrapClassOrNull`     | `java.lang.ClassLoader`                                 |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `updateBytes`                  | `java.util.zip.CRC32`                                   |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `update`                       | `java.util.zip.CRC32`                                   |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `lambda$getProxyConstructor$0` | `java.lang.reflect.Proxy`                               |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `apply`                        | `java.lang.reflect.Proxy$$Lambda.0x000000d801051c10`    |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `get`                          | `jdk.internal.loader.AbstractClassLoaderValue$Memoizer` |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `computeIfAbsent`              | `jdk.internal.loader.AbstractClassLoaderValue`          |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `getProxyConstructor`          | `java.lang.reflect.Proxy`                               |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `newProxyInstance`             | `java.lang.reflect.Proxy`                               |

##### JIT

|  Change | Delta |           % | Samples | Function                  | Location    |
| ------: | ----: | ----------: | ------: | ------------------------- | ----------- |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `zero_blocks`             | `<unknown>` |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `I2C/C2I adapters(0xbbb)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

| Change | Delta |           % | Samples | Function                             | Location                                                               |
| -----: | ----: | ----------: | ------: | ------------------------------------ | ---------------------------------------------------------------------- |
| -31.6% |   -12 | 3.0% → 2.0% | 38 → 26 | `acceptChildren`                     | `org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl`      |
| -41.7% |   -10 | 1.9% → 1.1% | 24 → 14 | `tlv_get_addr`                       | `<unknown>`                                                            |
| -42.9% |    -9 | 1.6% → 0.9% | 21 → 12 | `PhaseLive::compute`                 | `<unknown>`                                                            |
| -47.1% |    -8 | 1.3% → 0.7% |  17 → 9 | `visitJump`                          | `org.jetbrains.kotlin.fir.visitors.FirDefaultVisitor`                  |
| -47.1% |    -8 | 1.3% → 0.7% |  17 → 9 | `visitReturnExpression`              | `org.jetbrains.kotlin.fir.visitors.FirDefaultVisitor`                  |
| -25.8% |    -8 | 2.4% → 1.7% | 31 → 23 | `runCompletion`                      | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |
| -25.8% |    -8 | 2.4% → 1.7% | 31 → 23 | `complete`                           | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |
| -25.8% |    -8 | 2.4% → 1.7% | 31 → 23 | `runCompletionForCall`               | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`          |
| -12.3% |    -8 | 5.1% → 4.3% | 65 → 57 | `Parse::do_one_block`                | `<unknown>`                                                            |
| -12.3% |    -8 | 5.1% → 4.3% | 65 → 57 | `Parse::do_all_blocks`               | `<unknown>`                                                            |
| -12.3% |    -8 | 5.1% → 4.3% | 65 → 57 | `Parse::Parse`                       | `<unknown>`                                                            |
| -12.3% |    -8 | 5.1% → 4.3% | 65 → 57 | `ParseGenerator::generate`           | `<unknown>`                                                            |
| -42.1% |    -8 | 1.5% → 0.8% | 19 → 11 | `LinkResolver::resolve_invoke`       | `<unknown>`                                                            |
| -40.0% |    -8 | 1.6% → 0.9% | 20 → 12 | `InterpreterRuntime::resolve_invoke` | `<unknown>`                                                            |
| -20.5% |    -8 | 3.0% → 2.4% | 39 → 31 | `GraphBuilder::try_inline_full`      | `<unknown>`                                                            |
| -11.7% |    -7 | 4.7% → 4.0% | 60 → 53 | `PhaseIterGVN::optimize`             | `<unknown>`                                                            |
| -46.7% |    -7 | 1.2% → 0.6% |  15 → 8 | `LinearScan::build_intervals`        | `<unknown>`                                                            |
| -77.8% |    -7 | 0.7% → 0.2% |   9 → 2 | `_platform_memmove`                  | `<unknown>`                                                            |
| -87.5% |    -7 | 0.6% → 0.1% |   8 → 1 | `Compile::disconnect_useless_nodes`  | `<unknown>`                                                            |
| -17.9% |    -7 | 3.0% → 2.4% | 39 → 32 | `GraphBuilder::try_inline`           | `<unknown>`                                                            |

##### Compiler

|  Change | Delta |           % | Samples | Function                                      | Location    |
| ------: | ----: | ----------: | ------: | --------------------------------------------- | ----------- |
|  -42.9% |    -9 | 1.6% → 0.9% | 21 → 12 | `PhaseLive::compute`                          | `<unknown>` |
|  -20.5% |    -8 | 3.0% → 2.4% | 39 → 31 | `GraphBuilder::try_inline_full`               | `<unknown>` |
|  -11.7% |    -7 | 4.7% → 4.0% | 60 → 53 | `PhaseIterGVN::optimize`                      | `<unknown>` |
|  -46.7% |    -7 | 1.2% → 0.6% |  15 → 8 | `LinearScan::build_intervals`                 | `<unknown>` |
|  -87.5% |    -7 | 0.6% → 0.1% |   8 → 1 | `Compile::disconnect_useless_nodes`           | `<unknown>` |
|  -17.9% |    -7 | 3.0% → 2.4% | 39 → 32 | `GraphBuilder::try_inline`                    | `<unknown>` |
|  -14.9% |    -7 | 3.7% → 3.0% | 47 → 40 | `GraphBuilder::invoke`                        | `<unknown>` |
|  -50.0% |    -7 | 1.1% → 0.5% |  14 → 7 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `<unknown>` |
|  -10.7% |    -6 | 4.4% → 3.8% | 56 → 50 | `PhaseIterGVN::transform_old`                 | `<unknown>` |
|  -54.5% |    -6 | 0.9% → 0.4% |  11 → 5 | `PhaseRemoveUseless::PhaseRemoveUseless`      | `<unknown>` |
|  -60.0% |    -6 | 0.8% → 0.3% |  10 → 4 | `Matcher::Label_Root`                         | `<unknown>` |
|  -66.7% |    -6 | 0.7% → 0.2% |   9 → 3 | `ciTypeFlow::StateVector::apply_one_bytecode` | `<unknown>` |
|  -66.7% |    -6 | 0.7% → 0.2% |   9 → 3 | `ciTypeFlow::flow_block`                      | `<unknown>` |
|  -20.0% |    -6 | 2.3% → 1.8% | 30 → 24 | `PhaseChaitin::build_ifg_physical`            | `<unknown>` |
|  -11.5% |    -6 | 4.1% → 3.5% | 52 → 46 | `GraphBuilder::iterate_bytecodes_for_block`   | `<unknown>` |
|  -11.5% |    -6 | 4.1% → 3.5% | 52 → 46 | `GraphBuilder::iterate_all_blocks`            | `<unknown>` |
| removed |    -6 | 0.5% → 0.0% |   6 → 0 | `TypeInterfaces::make`                        | `<unknown>` |
|  -50.0% |    -5 | 0.8% → 0.4% |  10 → 5 | `PhaseOutput::BuildOopMaps`                   | `<unknown>` |
|  -16.1% |    -5 | 2.4% → 2.0% | 31 → 26 | `PhaseIdealLoop::build_loop_late_post_work`   | `<unknown>` |
|  -27.8% |    -5 | 1.4% → 1.0% | 18 → 13 | `Matcher::match_tree`                         | `<unknown>` |

##### Native

|  Change | Delta |           % | Samples | Function                                                                                               | Location    |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------ | ----------- |
|  -41.7% |   -10 | 1.9% → 1.1% | 24 → 14 | `tlv_get_addr`                                                                                         | `<unknown>` |
|  -12.3% |    -8 | 5.1% → 4.3% | 65 → 57 | `Parse::do_one_block`                                                                                  | `<unknown>` |
|  -12.3% |    -8 | 5.1% → 4.3% | 65 → 57 | `Parse::do_all_blocks`                                                                                 | `<unknown>` |
|  -12.3% |    -8 | 5.1% → 4.3% | 65 → 57 | `Parse::Parse`                                                                                         | `<unknown>` |
|  -12.3% |    -8 | 5.1% → 4.3% | 65 → 57 | `ParseGenerator::generate`                                                                             | `<unknown>` |
|  -42.1% |    -8 | 1.5% → 0.8% | 19 → 11 | `LinkResolver::resolve_invoke`                                                                         | `<unknown>` |
|  -40.0% |    -8 | 1.6% → 0.9% | 20 → 12 | `InterpreterRuntime::resolve_invoke`                                                                   | `<unknown>` |
|  -77.8% |    -7 | 0.7% → 0.2% |   9 → 2 | `_platform_memmove`                                                                                    | `<unknown>` |
|  -37.5% |    -6 | 1.2% → 0.8% | 16 → 10 | `_platform_memset`                                                                                     | `<unknown>` |
|  -23.1% |    -6 | 2.0% → 1.5% | 26 → 20 | `InterpreterRuntime::resolve_from_cache`                                                               | `<unknown>` |
|  -75.0% |    -6 | 0.6% → 0.2% |   8 → 2 | `ClassVerifier::verify_invoke_instructions`                                                            | `<unknown>` |
|  -71.4% |    -5 | 0.5% → 0.2% |   7 → 2 | `ImmutableOopMapBuilder::build`                                                                        | `<unknown>` |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `JVM_Clone`                                                                                            | `<unknown>` |
|  -30.8% |    -4 | 1.0% → 0.7% |  13 → 9 | `Monitor::wait`                                                                                        | `<unknown>` |
|   -7.1% |    -4 | 4.4% → 3.9% | 56 → 52 | `IRScope::IRScope`                                                                                     | `<unknown>` |
|   -7.1% |    -4 | 4.4% → 3.9% | 56 → 52 | `IR::IR`                                                                                               | `<unknown>` |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` | `<unknown>` |
|  -57.1% |    -4 | 0.5% → 0.2% |   7 → 3 | `ImmutableOopMapSet::build_from`                                                                       | `<unknown>` |
|  -57.1% |    -4 | 0.5% → 0.2% |   7 → 3 | `CodeBlob::CodeBlob`                                                                                   | `<unknown>` |
|  -57.1% |    -4 | 0.5% → 0.2% |   7 → 3 | `CompiledMethod::CompiledMethod`                                                                       | `<unknown>` |

##### Ours

| Change | Delta |           % | Samples | Function                                 | Location                                                                                |
| -----: | ----: | ----------: | ------: | ---------------------------------------- | --------------------------------------------------------------------------------------- |
| -31.6% |   -12 | 3.0% → 2.0% | 38 → 26 | `acceptChildren`                         | `org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl`                       |
| -47.1% |    -8 | 1.3% → 0.7% |  17 → 9 | `visitJump`                              | `org.jetbrains.kotlin.fir.visitors.FirDefaultVisitor`                                   |
| -47.1% |    -8 | 1.3% → 0.7% |  17 → 9 | `visitReturnExpression`                  | `org.jetbrains.kotlin.fir.visitors.FirDefaultVisitor`                                   |
| -25.8% |    -8 | 2.4% → 1.7% | 31 → 23 | `runCompletion`                          | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`                  |
| -25.8% |    -8 | 2.4% → 1.7% | 31 → 23 | `complete`                               | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`                  |
| -25.8% |    -8 | 2.4% → 1.7% | 31 → 23 | `runCompletionForCall`                   | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`                           |
| -13.0% |    -6 | 3.6% → 3.0% | 46 → 40 | `checkElement`                           | `org.jetbrains.kotlin.fir.analysis.collectors.CheckerRunningDiagnosticCollectorVisitor` |
| -20.7% |    -6 | 2.3% → 1.7% | 29 → 23 | `accept`                                 | `org.jetbrains.kotlin.fir.expressions.FirBlock`                                         |
| -40.0% |    -6 | 1.2% → 0.7% |  15 → 9 | `acceptChildren`                         | `org.jetbrains.kotlin.fir.expressions.impl.FirReturnExpressionImpl`                     |
| -10.3% |    -6 | 4.5% → 3.9% | 58 → 52 | `accept`                                 | `org.jetbrains.kotlin.fir.declarations.FirFile`                                         |
| -42.9% |    -6 | 1.1% → 0.6% |  14 → 8 | `visitEnd`                               | `org.jetbrains.kotlin.codegen.TransformationMethodVisitor`                              |
| -42.9% |    -6 | 1.1% → 0.6% |  14 → 8 | `visitEnd`                               | `org.jetbrains.org.objectweb.asm.MethodVisitor`                                         |
| -46.2% |    -6 | 1.0% → 0.5% |  13 → 7 | `performTransformations`                 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`                   |
| -75.0% |    -6 | 0.6% → 0.2% |   8 → 2 | `incorporate`                            | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintIncorporator`        |
| -75.0% |    -6 | 0.6% → 0.2% |   8 → 2 | `processGivenConstraints`                | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`            |
| -75.0% |    -6 | 0.6% → 0.2% |   8 → 2 | `processConstraintsIgnoringForksData`    | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`            |
| -75.0% |    -6 | 0.6% → 0.2% |   8 → 2 | `processConstraints`                     | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`            |
| -66.7% |    -6 | 0.7% → 0.2% |   9 → 3 | `resolvePlainExpressionArgument`         | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`               |
| -66.7% |    -6 | 0.7% → 0.2% |   9 → 3 | `resolvePlainExpressionArgument$default` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`               |
| -60.0% |    -6 | 0.8% → 0.3% |  10 → 4 | `resolveArgumentExpression`              | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`               |

##### Standard library

|  Change | Delta |           % | Samples | Function                  | Location                                             |
| ------: | ----: | ----------: | ------: | ------------------------- | ---------------------------------------------------- |
|  -42.9% |    -6 | 1.1% → 0.6% |  14 → 8 | `checkNotNullParameter`   | `kotlin.jvm.internal.Intrinsics`                     |
| removed |    -5 | 0.4% → 0.0% |   5 → 0 | `hash`                    | `java.util.HashMap`                                  |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `clone`                   | `java.lang.Object`                                   |
|  -66.7% |    -4 | 0.5% → 0.2% |   6 → 2 | `sanitizeStackTrace`      | `kotlin.jvm.internal.Intrinsics`                     |
|  -23.1% |    -3 | 1.0% → 0.8% | 13 → 10 | `getValue`                | `kotlin.SynchronizedLazyImpl`                        |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `defineClass0`            | `java.lang.ClassLoader`                              |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `defineClass`             | `java.lang.System$2`                                 |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `defineClass`             | `java.lang.invoke.MethodHandles$Lookup$ClassDefiner` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `toByteArray`             | `java.io.ByteArrayOutputStream`                      |
|  -50.0% |    -3 | 0.5% → 0.2% |   6 → 3 | `throwParameterIsNullNPE` | `kotlin.jvm.internal.Intrinsics`                     |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `getNode`                 | `java.util.HashMap`                                  |
|  -50.0% |    -2 | 0.3% → 0.2% |   4 → 2 | `copyOf`                  | `java.util.Arrays`                                   |
|  -25.0% |    -2 | 0.6% → 0.5% |   8 → 6 | `metafactory`             | `java.lang.invoke.LambdaMetafactory`                 |
|  -20.0% |    -2 | 0.8% → 0.6% |  10 → 8 | `linkCallSiteImpl`        | `java.lang.invoke.MethodHandleNatives`               |
|  -20.0% |    -2 | 0.8% → 0.6% |  10 → 8 | `linkCallSite`            | `java.lang.invoke.MethodHandleNatives`               |
|  -14.3% |    -2 | 1.1% → 0.9% | 14 → 12 | `getValue`                | `kotlin.SafePublicationLazyImpl`                     |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `copyOfRange`             | `java.util.Arrays`                                   |
|  -40.0% |    -2 | 0.4% → 0.2% |   5 → 3 | `calcNext`                | `kotlin.sequences.FilteringSequence$iterator$1`      |
|  -40.0% |    -2 | 0.4% → 0.2% |   5 → 3 | `hasNext`                 | `kotlin.sequences.FilteringSequence$iterator$1`      |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `remove`                  | `java.util.HashMap`                                  |

##### JIT

| Change | Delta |           % | Samples | Function                 | Location    |
| -----: | ----: | ----------: | ------: | ------------------------ | ----------- |
| -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `I2C/C2I adapters(0xbb)` | `<unknown>` |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Thread::call_run` (`<unknown>`)

|  Change | Delta |             % |   Samples | Callee                          | Location    |
| ------: | ----: | ------------: | --------: | ------------------------------- | ----------- |
|  +69.0% |   +29 |   4.9% → 8.0% |   42 → 71 | `WorkerThread::run`             | `<unknown>` |
| +200.0% |    +4 |   0.2% → 0.7% |     2 → 6 | `VMThread::run`                 | `<unknown>` |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `ConcurrentGCThread::run`       | `<unknown>` |
|   +0.1% |    +1 | 94.6% → 90.8% | 808 → 809 | `JavaThread::thread_main_inner` | `<unknown>` |
|  +50.0% |    +1 |   0.2% → 0.3% |     2 → 3 | `WatcherThread::run`            | `<unknown>` |

##### `thread_native_entry` (`<unknown>`)

| Change | Delta |      % |   Samples | Callee             | Location    |
| -----: | ----: | -----: | --------: | ------------------ | ----------- |
|  +4.3% |   +37 | 100.0% | 854 → 891 | `Thread::call_run` | `<unknown>` |

##### `_pthread_start` (`<unknown>`)

| Change | Delta |     % |   Samples | Callee                | Location    |
| -----: | ----: | ----: | --------: | --------------------- | ----------- |
|  +4.3% |   +37 | 99.9% | 854 → 891 | `thread_native_entry` | `<unknown>` |

##### `thread_start` (`<unknown>`)

| Change | Delta |      % |   Samples | Callee           | Location    |
| -----: | ----: | -----: | --------: | ---------------- | ----------- |
|  +4.3% |   +37 | 100.0% | 855 → 892 | `_pthread_start` | `<unknown>` |

##### `WorkerThread::run` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                            | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------- | ----------- |
| +178.6% |   +25 | 33.3% → 54.9% | 14 → 39 | `G1EvacuateRegionsBaseTask::work` | `<unknown>` |
|  +25.0% |    +4 | 38.1% → 28.2% | 16 → 20 | `G1RebuildRSAndScrubTask::work`   | `<unknown>` |
|  +20.0% |    +2 | 23.8% → 16.9% | 10 → 12 | `G1CMConcurrentMarkingTask::work` | `<unknown>` |
| removed |    -2 |   4.8% → 0.0% |   2 → 0 | `G1CMRootRegionScanTask::work`    | `<unknown>` |

##### `G1EvacuateRegionsBaseTask::work` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                         | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | ----------- |
| +700.0% |   +14 | 14.3% → 41.0% |  2 → 16 | `G1EvacuateRegionsTask::evacuate_live_objects` | `<unknown>` |
|     new |    +6 |  0.0% → 15.4% |   0 → 6 | `G1RemSet::scan_collection_set_code_roots`     | `<unknown>` |
|  +41.7% |    +5 | 85.7% → 43.6% | 12 → 17 | `G1EvacuateRegionsTask::scan_roots`            | `<unknown>` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                                                                       | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | ----------- |
| +275.0% |   +11 | 57.1% → 50.0% |  4 → 15 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                            | `<unknown>` |
| +700.0% |    +7 | 14.3% → 26.7% |   1 → 8 | `fwd_copy_again`                                                                                                             | `<unknown>` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `G1ParScanThreadState::do_partial_array`                                                                                     | `<unknown>` |
|     new |    +1 |   0.0% → 3.3% |   0 → 1 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` | `<unknown>` |

##### `Compile::Code_Gen` (`<unknown>`)

| Change | Delta |             % |   Samples | Callee                               | Location    |
| -----: | ----: | ------------: | --------: | ------------------------------------ | ----------- |
| +14.3% |    +5 | 13.1% → 14.0% |   35 → 40 | `PhaseOutput::Output`                | `<unknown>` |
| +14.7% |    +5 | 12.7% → 13.7% |   34 → 39 | `PhaseCFG::do_global_code_motion`    | `<unknown>` |
| +10.5% |    +4 | 14.2% → 14.7% |   38 → 42 | `Matcher::match`                     | `<unknown>` |
| -66.7% |    -2 |   1.1% → 0.4% |     3 → 1 | `PhaseBlockLayout::PhaseBlockLayout` | `<unknown>` |
|  +0.6% |    +1 | 57.8% → 54.7% | 155 → 156 | `PhaseChaitin::Register_Allocate`    | `<unknown>` |

##### `G1ParScanThreadState::steal_and_trim_queue` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                                                                                                    | Location    |
| -----: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------------------------- | ----------- |
|    new |   +13 | 0.0% → 86.7% |  0 → 13 | `G1ParScanThreadState::trim_queue_to_threshold`                                                           | `<unknown>` |
|    new |    +2 | 0.0% → 13.3% |   0 → 2 | `GenericTaskQueueSet<OverflowTaskQueue<ScannerTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>::steal_best_of_2` | `<unknown>` |

##### `G1ParEvacuateFollowersClosure::do_void` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                             | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | ----------- |
|     new |   +15 |  0.0% → 93.8% |  0 → 15 | `G1ParScanThreadState::steal_and_trim_queue`       | `<unknown>` |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `G1ParEvacuateFollowersClosure::offer_termination` | `<unknown>` |
|     new |    +1 |   0.0% → 6.3% |   0 → 1 | `G1ParScanThreadState::trim_queue_to_threshold`    | `<unknown>` |

##### `G1EvacuateRegionsTask::evacuate_live_objects` (`<unknown>`)

|  Change | Delta |      % | Samples | Callee                                   | Location    |
| ------: | ----: | -----: | ------: | ---------------------------------------- | ----------- |
| +700.0% |   +14 | 100.0% |  2 → 16 | `G1ParEvacuateFollowersClosure::do_void` | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                 | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------- | ----------- |
|  +77.8% |    +7 |  8.5% → 13.4% |  9 → 16 | `PhaseIdealLoop::Dominators`           | `<unknown>` |
|  +60.0% |    +3 |   4.7% → 6.7% |   5 → 8 | `PhaseIdealLoop::build_loop_tree`      | `<unknown>` |
| removed |    -3 |   2.8% → 0.0% |   3 → 0 | `IdealLoopTree::loop_predication`      | `<unknown>` |
|     new |    +3 |   0.0% → 2.5% |   0 → 3 | `IdealLoopTree::iteration_split`       | `<unknown>` |
|  +10.5% |    +2 | 17.9% → 17.6% | 19 → 21 | `PhaseIdealLoop::split_if_with_blocks` | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`<unknown>`)

| Change | Delta |      % |   Samples | Callee                               | Location    |
| -----: | ----: | -----: | --------: | ------------------------------------ | ----------- |
| +12.3% |   +13 | 100.0% | 106 → 119 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `KlassFactory::create_from_stream` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                   | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | ----------- |
|  +16.7% |    +7 | 93.3% → 84.5% | 42 → 49 | `ClassFileParser::ClassFileParser`       | `<unknown>` |
| +200.0% |    +6 |  6.7% → 15.5% |   3 → 9 | `ClassFileParser::create_instance_klass` | `<unknown>` |

##### `resumeTask` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`)

|  Change | Delta |              % | Samples | Callee       | Location                                                             |
| ------: | ----: | -------------: | ------: | ------------ | -------------------------------------------------------------------- |
|  +30.0% |   +12 | 97.6% → 100.0% | 40 → 52 | `resumeWith` | `kotlin.coroutines.jvm.internal.BaseContinuationImpl`                |
| removed |    -1 |    2.4% → 0.0% |   1 → 0 | `invoke`     | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager$1` |

##### `runTasks` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`)

| Change | Delta |      % | Samples | Callee       | Location                                                           |
| -----: | ----: | -----: | ------: | ------------ | ------------------------------------------------------------------ |
| +26.8% |   +11 | 100.0% | 41 → 52 | `resumeTask` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager` |

##### `runResolver` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`)

|  Change | Delta |             % | Samples | Callee                   | Location                                                           |
| ------: | ----: | ------------: | ------: | ------------------------ | ------------------------------------------------------------------ |
|  +26.8% |   +11 | 95.3% → 96.3% | 41 → 52 | `runTasks`               | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager` |
|  +25.6% |   +11 |        100.0% | 43 → 54 | `runResolver`            | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`    |
| +100.0% |    +1 |   2.3% → 3.7% |   1 → 2 | `enqueueResolutionTasks` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`    |

##### `runResolver$default` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`)

| Change | Delta |             % | Samples | Callee        | Location                                                        |
| -----: | ----: | ------------: | ------: | ------------- | --------------------------------------------------------------- |
| +25.6% |   +11 | 97.7% → 98.2% | 43 → 54 | `runResolver` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver` |

##### `collectCandidates` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

|  Change | Delta |             % | Samples | Callee                | Location                                                        |
| ------: | ----: | ------------: | ------: | --------------------- | --------------------------------------------------------------- |
|  +25.0% |   +11 | 97.8% → 98.2% | 44 → 55 | `runResolver$default` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver` |
| removed |    -1 |   2.2% → 0.0% |   1 → 0 | `loadClass`           | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`        |
|     new |    +1 |   0.0% → 1.8% |   0 → 1 | `reduceCandidates`    | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`        |

##### `collectCandidates$default` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

| Change | Delta |      % | Samples | Callee              | Location                                                 |
| -----: | ----: | -----: | ------: | ------------------- | -------------------------------------------------------- |
| +24.4% |   +11 | 100.0% | 45 → 56 | `collectCandidates` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver` |

##### `PhaseIdealLoop::optimize` (`<unknown>`)

| Change | Delta |             % |   Samples | Callee                           | Location    |
| -----: | ----: | ------------: | --------: | -------------------------------- | ----------- |
| +12.3% |   +13 | 87.6% → 90.2% | 106 → 119 | `PhaseIdealLoop::PhaseIdealLoop` | `<unknown>` |
| -13.3% |    -2 |  12.4% → 9.8% |   15 → 13 | `PhaseIterGVN::optimize`         | `<unknown>` |

##### `Compile::Optimize` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                  | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ----------- |
|  +22.0% |   +13 | 28.8% → 33.5% | 59 → 72 | `PhaseIdealLoop::optimize`              | `<unknown>` |
| +140.0% |    +7 |   2.4% → 5.6% |  5 → 12 | `PhaseMacroExpand::expand_macro_nodes`  | `<unknown>` |
|  -14.7% |    -5 | 16.6% → 13.5% | 34 → 29 | `PhaseIterGVN::optimize`                | `<unknown>` |
| +166.7% |    +5 |   1.5% → 3.7% |   3 → 8 | `ConnectionGraph::do_analysis`          | `<unknown>` |
| removed |    -4 |   2.0% → 0.0% |   4 → 0 | `Compile::inline_incrementally_cleanup` | `<unknown>` |

##### `StoreNode::Ideal` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                              | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ----------- |
| +450.0% |    +9 | 66.7% → 84.6% |  2 → 11 | `InitializeNode::can_capture_store` | `<unknown>` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `StorePNode::Opcode`                | `<unknown>` |
|     new |    +1 |   0.0% → 7.7% |   0 → 1 | `Type::meet_helper`                 | `<unknown>` |

##### `InitializeNode::detect_init_independence` (`<unknown>`)

|  Change | Delta |      % | Samples | Callee                           | Location    |
| ------: | ----: | -----: | ------: | -------------------------------- | ----------- |
| +450.0% |    +9 | 100.0% |  2 → 11 | `MemNode::all_controls_dominate` | `<unknown>` |

##### `InitializeNode::can_capture_store` (`<unknown>`)

|  Change | Delta |      % | Samples | Callee                                     | Location    |
| ------: | ----: | -----: | ------: | ------------------------------------------ | ----------- |
| +450.0% |    +9 | 100.0% |  2 → 11 | `InitializeNode::detect_init_independence` | `<unknown>` |

##### `GraphKit::access_store_at` (`<unknown>`)

|  Change | Delta |      % | Samples | Callee                   | Location    |
| ------: | ----: | -----: | ------: | ------------------------ | ----------- |
| +900.0% |    +9 | 100.0% |  1 → 10 | `BarrierSetC2::store_at` | `<unknown>` |

##### `Type::hashcons` (`<unknown>`)

| Change | Delta |             % | Samples | Callee         | Location    |
| -----: | ----: | ------------: | ------: | -------------- | ----------- |
| +77.8% |    +7 | 90.0% → 88.9% |  9 → 16 | `Dict::Insert` | `<unknown>` |

##### `DebugInformationRecorder::serialize_scope_values` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                                                                                                   | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| +300.0% |    +3 | 50.0% → 40.0% |   1 → 4 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `<unknown>` |
|     new |    +1 |  0.0% → 10.0% |   0 → 1 | `ObjectValue::write_on`                                                                                                                                  | `<unknown>` |
|     new |    +1 |  0.0% → 10.0% |   0 → 1 | `Location::write_on`                                                                                                                                     | `<unknown>` |
|     new |    +1 |  0.0% → 10.0% |   0 → 1 | `_platform_memcmp`                                                                                                                                       | `<unknown>` |

##### `Compile::Compile` (`<unknown>`)

| Change | Delta |             % |   Samples | Callee                                   | Location    |
| -----: | ----: | ------------: | --------: | ---------------------------------------- | ----------- |
|  +6.3% |   +17 | 48.4% → 50.8% | 268 → 285 | `Compile::Code_Gen`                      | `<unknown>` |
|  +4.9% |   +10 | 37.0% → 38.3% | 205 → 215 | `Compile::Optimize`                      | `<unknown>` |
| -77.8% |    -7 |   1.6% → 0.4% |     9 → 2 | `PhaseRemoveUseless::PhaseRemoveUseless` | `<unknown>` |
| -11.3% |    -7 |  11.2% → 9.8% |   62 → 55 | `ParseGenerator::generate`               | `<unknown>` |
| -75.0% |    -3 |   0.7% → 0.2% |     4 → 1 | `CallGenerator::for_inline`              | `<unknown>` |

##### `PhaseIdealLoop::Dominators` (`<unknown>`)

| Change | Delta |           % | Samples | Callee              | Location    |
| -----: | ----: | ----------: | ------: | ------------------- | ----------- |
|    new |    +1 | 0.0% → 6.3% |   0 → 1 | `Node::is_CFG`      | `<unknown>` |
|    new |    +1 | 0.0% → 6.3% |   0 → 1 | `CProjNode::is_CFG` | `<unknown>` |
|    new |    +1 | 0.0% → 6.3% |   0 → 1 | `Arena::grow`       | `<unknown>` |

##### `LIR_Assembler::emit_slow_case_stubs` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                             | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------- | ----------- |
|     new |    +5 |  0.0% → 41.7% |   0 → 5 | `ImplicitNullCheckStub::emit_code` | `<unknown>` |
|  +50.0% |    +2 | 80.0% → 50.0% |   4 → 6 | `CounterOverflowStub::emit_code`   | `<unknown>` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `NewInstanceStub::emit_code`       | `<unknown>` |
|     new |    +1 |   0.0% → 8.3% |   0 → 1 | `SimpleExceptionStub::emit_code`   | `<unknown>` |

##### `Compilation::emit_code_epilog` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------- | ----------- |
| +140.0% |    +7 | 83.3% → 92.3% |  5 → 12 | `LIR_Assembler::emit_slow_case_stubs` | `<unknown>` |

##### `DebugInformationRecorder::create_scope_values` (`<unknown>`)

|  Change | Delta |      % | Samples | Callee                                             | Location    |
| ------: | ----: | -----: | ------: | -------------------------------------------------- | ----------- |
| +350.0% |    +7 | 100.0% |   2 → 9 | `DebugInformationRecorder::serialize_scope_values` | `<unknown>` |

##### `PhaseChaitin::Split` (`<unknown>`)

|  Change | Delta |           % | Samples | Callee                        | Location    |
| ------: | ----: | ----------: | ------: | ----------------------------- | ----------- |
| removed |    -2 | 9.1% → 0.0% |   2 → 0 | `PhaseChaitin::split_DEF`     | `<unknown>` |
| +100.0% |    +1 | 4.5% → 6.9% |   1 → 2 | `PhaseChaitin::split_USE`     | `<unknown>` |
|     new |    +1 | 0.0% → 3.4% |   0 → 1 | `Node::rematerialize`         | `<unknown>` |
|     new |    +1 | 0.0% → 3.4% |   0 → 1 | `Matcher::int_pressure_limit` | `<unknown>` |
|     new |    +1 | 0.0% → 3.4% |   0 → 1 | `loadNKlassNode::rule`        | `<unknown>` |

##### `C2Compiler::compile_method` (`<unknown>`)

|  Change | Delta |              % |   Samples | Callee             | Location    |
| ------: | ----: | -------------: | --------: | ------------------ | ----------- |
|   +1.3% |    +7 | 99.8% → 100.0% | 554 → 561 | `Compile::Compile` | `<unknown>` |
| removed |    -1 |    0.2% → 0.0% |     1 → 0 | `Chunk::next_chop` | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method` (`<unknown>`)

|  Change | Delta |             % |   Samples | Callee                                    | Location    |
| ------: | ----: | ------------: | --------: | ----------------------------------------- | ----------- |
|   +1.1% |    +6 | 70.0% → 70.2% | 555 → 561 | `C2Compiler::compile_method`              | `<unknown>` |
|   +1.8% |    +4 | 28.8% → 29.0% | 228 → 232 | `Compiler::compile_method`                | `<unknown>` |
| removed |    -2 |   0.3% → 0.0% |     2 → 0 | `ciEnv::~ciEnv`                           | `<unknown>` |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `CompilationLog::log_compile`             | `<unknown>` |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `CompileBroker::update_compile_perf_data` | `<unknown>` |

##### `PhaseOutput::fill_buffer` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                     | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | ----------- |
|     new |    +4 |  0.0% → 25.0% |   0 → 4 | `PhaseOutput::Process_OopMap_Node`         | `<unknown>` |
|     new |    +2 |  0.0% → 12.5% |   0 → 2 | `CallStaticJavaDirectNode::emit`           | `<unknown>` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `MachPrologNode::emit`                     | `<unknown>` |
|  +33.3% |    +1 | 30.0% → 25.0% |   3 → 4 | `NonSafepointEmitter::observe_instruction` | `<unknown>` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `AbstractAssembler::bind`                  | `<unknown>` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                                                                       | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | ----------- |
| +300.0% |    +6 | 50.0% → 53.3% |   2 → 8 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` | `<unknown>` |

##### `ClassFileParser::parse_constant_pool_entries` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                     | Location    |
| ------: | ----: | ------------: | ------: | -------------------------- | ----------- |
|  +25.0% |    +4 | 76.2% → 64.5% | 16 → 20 | `SymbolTable::lookup_only` | `<unknown>` |
|  +66.7% |    +2 | 14.3% → 16.1% |   3 → 5 | `SymbolTable::do_lookup`   | `<unknown>` |
| +100.0% |    +2 |  9.5% → 12.9% |   2 → 4 | `UTF8::is_legal_utf8`      | `<unknown>` |
|     new |    +2 |   0.0% → 6.5% |   0 → 2 | `SymbolTable::new_symbols` | `<unknown>` |

##### `ClassFileParser::parse_constant_pool` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                          | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ----------- |
|  +47.6% |   +10 | 87.5% → 91.2% | 21 → 31 | `ClassFileParser::parse_constant_pool_entries`  | `<unknown>` |
|     new |    +2 |   0.0% → 5.9% |   0 → 2 | `ClassFileParser::verify_legal_class_name`      | `<unknown>` |
| removed |    -1 |   4.2% → 0.0% |   1 → 0 | `SymbolTable::lookup_only`                      | `<unknown>` |
| removed |    -1 |   4.2% → 0.0% |   1 → 0 | `ClassFileParser::verify_legal_field_signature` | `<unknown>` |

##### `Parse::do_put_xxx` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                           | Location    |
| ------: | ----: | -------------: | ------: | -------------------------------- | ----------- |
| +800.0% |    +8 | 100.0% → 81.8% |   1 → 9 | `GraphKit::access_store_at`      | `<unknown>` |
|     new |    +2 |   0.0% → 18.2% |   0 → 2 | `PhaseGVN::transform_no_reclaim` | `<unknown>` |

##### `ClassFileParser::parse_stream` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                 | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------- | ----------- |
|  +41.7% |   +10 | 61.5% → 70.8% | 24 → 34 | `ClassFileParser::parse_constant_pool` | `<unknown>` |
|  +50.0% |    +4 | 20.5% → 25.0% |  8 → 12 | `ClassFileParser::parse_methods`       | `<unknown>` |
| removed |    -2 |   5.1% → 0.0% |   2 → 0 | `ClassFileParser::parse_fields`        | `<unknown>` |
| removed |    -1 |   2.6% → 0.0% |   1 → 0 | `ClassFileParser::parse_interfaces`    | `<unknown>` |
| removed |    -1 |   2.6% → 0.0% |   1 → 0 | `Metaspace::allocate`                  | `<unknown>` |

##### `SystemDictionary::resolve_class_from_stream` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                     | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | ----------- |
|  +27.9% |   +12 | 89.6% → 96.5% | 43 → 55 | `KlassFactory::create_from_stream`         | `<unknown>` |
|  -50.0% |    -2 |   8.3% → 3.5% |   4 → 2 | `SystemDictionary::define_instance_class`  | `<unknown>` |
| removed |    -1 |   2.1% → 0.0% |   1 → 0 | `SystemDictionary::is_system_class_loader` | `<unknown>` |

##### `BarrierSetC2::store_at` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                                  | Location    |
| ------: | ----: | -------------: | ------: | --------------------------------------- | ----------- |
| +800.0% |    +8 | 100.0% → 90.0% |   1 → 9 | `ModRefBarrierSetC2::store_at_resolved` | `<unknown>` |
|     new |    +1 |   0.0% → 10.0% |   0 → 1 | `BarrierSetC2::store_at_resolved`       | `<unknown>` |

##### `jvm_define_class_common` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                                        | Location    |
| ------: | ----: | -------------: | ------: | --------------------------------------------- | ----------- |
|  +18.8% |    +9 | 98.0% → 100.0% | 48 → 57 | `SystemDictionary::resolve_class_from_stream` | `<unknown>` |
| removed |    -1 |    2.0% → 0.0% |   1 → 0 | `SymbolTable::new_symbol`                     | `<unknown>` |

##### `JVM_DefineClassWithSource` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                    | Location    |
| -----: | ----: | -----: | ------: | ------------------------- | ----------- |
| +16.3% |    +8 | 100.0% | 49 → 57 | `jvm_define_class_common` | `<unknown>` |

##### `consumeCandidate` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor`)

| Change | Delta |              % | Samples | Callee             | Location                                                              |
| -----: | ----: | -------------: | ------: | ------------------ | --------------------------------------------------------------------- |
| +40.0% |    +8 | 100.0% → 90.3% | 20 → 28 | `consumeCandidate` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.CandidateCollector` |
|    new |    +3 |    0.0% → 9.7% |   0 → 3 | `createCandidate`  | `org.jetbrains.kotlin.fir.resolve.calls.candidate.CandidateFactory`   |

##### `consumeCandidate$default` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor`)

| Change | Delta |      % | Samples | Callee             | Location                                                           |
| -----: | ----: | -----: | ------: | ------------------ | ------------------------------------------------------------------ |
| +55.0% |   +11 | 100.0% | 20 → 31 | `consumeCandidate` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor` |

##### `processFunctionsAndConstructorsByName` (`org.jetbrains.kotlin.fir.resolve.calls.ConstructorProcessingKt`)

|  Change | Delta |             % | Samples | Callee                      | Location                                                               |
| ------: | ----: | ------------: | ------: | --------------------------- | ---------------------------------------------------------------------- |
| +200.0% |    +4 |  7.4% → 16.2% |   2 → 6 | `processFunctionsByName`    | `org.jetbrains.kotlin.fir.scopes.impl.FirClassSubstitutionScope`       |
|  +75.0% |    +3 | 14.8% → 18.9% |   4 → 7 | `processConstructorsByName` | `org.jetbrains.kotlin.fir.resolve.calls.ConstructorProcessingKt`       |
|     new |    +3 |   0.0% → 8.1% |   0 → 3 | `processFunctionsByName`    | `org.jetbrains.kotlin.fir.scopes.impl.FirAbstractSimpleImportingScope` |
|  -40.0% |    -2 |  18.5% → 8.1% |   5 → 3 | `processFunctionsByName`    | `org.jetbrains.kotlin.fir.scopes.impl.AbstractFirUseSiteMemberScope`   |
|  +10.0% |    +1 | 37.0% → 29.7% | 10 → 11 | `processFunctionsByName`    | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`    |

##### `loadClass` (`org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`)

| Change | Delta |      % | Samples | Callee      | Location                                                 |
| -----: | ----: | -----: | ------: | ----------- | -------------------------------------------------------- |
| +18.2% |   +10 | 100.0% | 55 → 65 | `loadClass` | `java.lang.ClassLoader`                                  |
| +18.2% |   +10 | 100.0% | 55 → 65 | `loadClass` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `handleLevel` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelHandler`)

| Change | Delta |             % | Samples | Callee                    | Location                                                                             |
| -----: | ----: | ------------: | ------: | ------------------------- | ------------------------------------------------------------------------------------ |
| +40.0% |    +8 | 52.6% → 59.6% | 20 → 28 | `processFunctionsByName`  | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`                  |
| +16.7% |    +1 | 15.8% → 14.9% |   6 → 7 | `processPropertiesByName` | `org.jetbrains.kotlin.fir.resolve.calls.tower.DispatchReceiverMemberScopeTowerLevel` |

##### `consumeCallableCandidate` (`org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`)

| Change | Delta |      % | Samples | Callee                     | Location                                                           |
| -----: | ----: | -----: | ------: | -------------------------- | ------------------------------------------------------------------ |
| +64.3% |    +9 | 100.0% | 14 → 23 | `consumeCandidate$default` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor` |

##### `processFunctionsByName` (`org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`)

| Change | Delta |      % | Samples | Callee                                  | Location                                                         |
| -----: | ----: | -----: | ------: | --------------------------------------- | ---------------------------------------------------------------- |
| +40.0% |    +8 | 100.0% | 20 → 28 | `processFunctionsAndConstructorsByName` | `org.jetbrains.kotlin.fir.resolve.calls.ConstructorProcessingKt` |

##### `resolveCallAndSelectCandidate$default` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

| Change | Delta |              % | Samples | Callee                          | Location                                                 |
| -----: | ----: | -------------: | ------: | ------------------------------- | -------------------------------------------------------- |
| +17.9% |    +7 | 100.0% → 97.9% | 39 → 46 | `resolveCallAndSelectCandidate` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver` |

##### `consumeCandidate` (`org.jetbrains.kotlin.fir.resolve.calls.candidate.CandidateCollector`)

| Change | Delta |      % | Samples | Callee                     | Location                                                              |
| -----: | ----: | -----: | ------: | -------------------------- | --------------------------------------------------------------------- |
| +40.0% |    +8 | 100.0% | 20 → 28 | `processCandidate$default` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner` |

##### `processFunctionsByName$lambda$0` (`org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`)

| Change | Delta |      % | Samples | Callee                     | Location                                                            |
| -----: | ----: | -----: | ------: | -------------------------- | ------------------------------------------------------------------- |
| +61.5% |    +8 | 100.0% | 13 → 21 | `consumeCallableCandidate` | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel` |

##### `invoke` (`org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000d80166d520`)

| Change | Delta |      % | Samples | Callee                            | Location                                                            |
| -----: | ----: | -----: | ------: | --------------------------------- | ------------------------------------------------------------------- |
| +61.5% |    +8 | 100.0% | 13 → 21 | `processFunctionsByName$lambda$0` | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel` |

##### `mapSignature` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`)

|  Change | Delta |             % | Samples | Callee                      | Location                                                         |
| ------: | ----: | ------------: | ------: | --------------------------- | ---------------------------------------------------------------- |
|     new |    +4 |  0.0% → 36.4% |   0 → 4 | `writeFormalTypeParameters` | `org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper`          |
| +150.0% |    +3 | 66.7% → 45.5% |   2 → 5 | `writeParameter`            | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `mapReturnType`             | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |
|     new |    +1 |   0.0% → 9.1% |   0 → 1 | `getNonDispatchParameters`  | `org.jetbrains.kotlin.ir.util.IrUtilsKt`                         |
|     new |    +1 |   0.0% → 9.1% |   0 → 1 | `makeJvmMethodSignature`    | `org.jetbrains.kotlin.codegen.signature.JvmSignatureWriter`      |

##### `mapSignature$default` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`)

|  Change | Delta |      % | Samples | Callee         | Location                                                         |
| ------: | ----: | -----: | ------: | -------------- | ---------------------------------------------------------------- |
| +266.7% |    +8 | 100.0% |  3 → 11 | `mapSignature` | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |

##### `processLevel` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`)

|  Change | Delta |              % | Samples | Callee                | Location                                                                 |
| ------: | ----: | -------------: | ------: | --------------------- | ------------------------------------------------------------------------ |
|  +23.7% |    +9 | 95.0% → 100.0% | 38 → 47 | `handleLevel`         | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelHandler`         |
| removed |    -1 |    2.5% → 0.0% |   1 → 0 | `interceptTowerGroup` | `org.jetbrains.kotlin.fir.resolve.calls.tower.InvokeReceiverResolveTask` |
| removed |    -1 |    2.5% → 0.0% |   1 → 0 | `onSuccessfulLevel`   | `org.jetbrains.kotlin.fir.resolve.calls.tower.InvokeReceiverResolveTask` |

##### `resumeWith` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|  Change | Delta |             % | Samples | Callee          | Location                                                                                                               |
| ------: | ----: | ------------: | ------: | --------------- | ---------------------------------------------------------------------------------------------------------------------- |
|  +26.1% |    +6 | 50.0% → 51.8% | 23 → 29 | `invokeSuspend` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                               |
| +300.0% |    +6 |  4.3% → 14.3% |   2 → 8 | `invokeSuspend` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2`                               |
|  +12.5% |    +4 | 69.6% → 64.3% | 32 → 36 | `invokeSuspend` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`                                  |
|  +50.0% |    +1 |   4.3% → 5.4% |   2 → 3 | `invokeSuspend` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$4`                               |
|  -50.0% |    -1 |   4.3% → 1.8% |   2 → 1 | `invokeSuspend` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask$processCandidatesWithGivenImplicitReceiverAsValue$1` |

##### `defineClass1` (`java.lang.ClassLoader`)

| Change | Delta |              % | Samples | Callee                                    | Location                                                 |
| -----: | ----: | -------------: | ------: | ----------------------------------------- | -------------------------------------------------------- |
| +16.0% |    +8 | 100.0% → 96.7% | 50 → 58 | `Java_java_lang_ClassLoader_defineClass1` | `<unknown>`                                              |
| +66.7% |    +4 |  12.0% → 16.7% |  6 → 10 | `loadClass`                               | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|    new |    +2 |    0.0% → 3.3% |   0 → 2 | `loadClass`                               | `java.lang.ClassLoader`                                  |

##### `loadClass` (`java.lang.ClassLoader`)

|  Change | Delta |             % | Samples | Callee                     | Location                                                 |
| ------: | ----: | ------------: | ------: | -------------------------- | -------------------------------------------------------- |
|  +13.0% |    +7 | 94.7% → 91.0% | 54 → 61 | `findClass`                | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
| +200.0% |    +2 |   1.8% → 4.5% |   1 → 3 | `findBootstrapClassOrNull` | `java.lang.ClassLoader`                                  |
| +100.0% |    +1 |   1.8% → 3.0% |   1 → 2 | `findClass`                | `java.net.URLClassLoader`                                |
| +100.0% |    +1 |   1.8% → 3.0% |   1 → 2 | `loadClass`                | `java.lang.ClassLoader`                                  |
| removed |    -1 |   1.8% → 0.0% |   1 → 0 | `loadClass`                | `jdk.internal.jrtfs.JrtFileSystemProvider$JrtFsLoader`   |

##### `defineClass` (`java.lang.ClassLoader`)

|  Change | Delta |             % | Samples | Callee            | Location                |
| ------: | ----: | ------------: | ------: | ----------------- | ----------------------- |
|  +20.0% |   +10 | 94.3% → 98.4% | 50 → 60 | `defineClass1`    | `java.lang.ClassLoader` |
|  +13.5% |    +7 | 98.1% → 96.7% | 52 → 59 | `defineClass`     | `java.lang.ClassLoader` |
| removed |    -1 |   1.9% → 0.0% |   1 → 0 | `preDefineClass`  | `java.lang.ClassLoader` |
|  -50.0% |    -1 |   3.8% → 1.6% |   2 → 1 | `postDefineClass` | `java.lang.ClassLoader` |

##### `getValue` (`kotlin.UnsafeLazyImpl`)

|  Change | Delta |            % | Samples | Callee   | Location                                                                                                         |
| ------: | ----: | -----------: | ------: | -------- | ---------------------------------------------------------------------------------------------------------------- |
|  +66.7% |    +4 |        66.7% |  6 → 10 | `invoke` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver$$Lambda.0x000000d8016828a0`                              |
| removed |    -1 | 11.1% → 0.0% |   1 → 0 | `invoke` | `org.jetbrains.kotlin.fir.lightTree.fir.ValueParameter$$Lambda.0x000000030152cf10`                               |
| removed |    -1 | 11.1% → 0.0% |   1 → 0 | `invoke` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser$$Lambda.0x0000000301610b38` |
|     new |    +1 |  0.0% → 6.7% |   0 → 1 | `invoke` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate$$Lambda.0x000000d801670000`                          |
|     new |    +1 |  0.0% → 6.7% |   0 → 1 | `invoke` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerDataElementsForName$$Lambda.0x000000d80165fce0`               |

##### `generateCustomizedCode` (`java.lang.invoke.InvokerBytecodeGenerator`)

| Change | Delta |            % | Samples | Callee                        | Location                                    |
| -----: | ----: | -----------: | ------: | ----------------------------- | ------------------------------------------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `generateCustomizedCodeBytes` | `java.lang.invoke.InvokerBytecodeGenerator` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `lookupPregenerated`          | `java.lang.invoke.InvokerBytecodeGenerator` |

##### `compileToBytecode` (`java.lang.invoke.LambdaForm`)

|  Change | Delta |      % | Samples | Callee                   | Location                                    |
| ------: | ----: | -----: | ------: | ------------------------ | ------------------------------------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `generateCustomizedCode` | `java.lang.invoke.InvokerBytecodeGenerator` |

##### `putVal` (`java.util.HashMap`)

| Change | Delta |            % | Samples | Callee   | Location            |
| -----: | ----: | -----------: | ------: | -------- | ------------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `resize` | `java.util.HashMap` |

##### `linkMethodHandleConstant` (`java.lang.invoke.MethodHandles$Lookup`)

| Change | Delta |            % | Samples | Callee          | Location                                |
| -----: | ----: | -----------: | ------: | --------------- | --------------------------------------- |
|    new |    +2 | 0.0% → 40.0% |   0 → 2 | `resolveOrFail` | `java.lang.invoke.MethodHandles$Lookup` |

##### `linkMethodHandleConstant` (`java.lang.invoke.MethodHandleNatives`)

| Change | Delta |      % | Samples | Callee                     | Location                                |
| -----: | ----: | -----: | ------: | -------------------------- | --------------------------------------- |
| +66.7% |    +2 | 100.0% |   3 → 5 | `linkMethodHandleConstant` | `java.lang.invoke.MethodHandles$Lookup` |

##### `findBootstrapClass` (`java.lang.ClassLoader`)

|  Change | Delta |             % | Samples | Callee                                          | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ----------- |
|     new |    +3 | 0.0% → 100.0% |   0 → 3 | `Java_java_lang_ClassLoader_findBootstrapClass` | `<unknown>` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `fixClassname`                                  | `<unknown>` |

##### `findBootstrapClassOrNull` (`java.lang.ClassLoader`)

|  Change | Delta |      % | Samples | Callee               | Location                |
| ------: | ----: | -----: | ------: | -------------------- | ----------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `findBootstrapClass` | `java.lang.ClassLoader` |

##### `updateBytes` (`java.util.zip.CRC32`)

|  Change | Delta |      % | Samples | Callee             | Location    |
| ------: | ----: | -----: | ------: | ------------------ | ----------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `updateBytesCRC32` | `<unknown>` |

##### `update` (`java.util.zip.CRC32`)

|  Change | Delta |      % | Samples | Callee        | Location              |
| ------: | ----: | -----: | ------: | ------------- | --------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `updateBytes` | `java.util.zip.CRC32` |

##### `lambda$getProxyConstructor$0` (`java.lang.reflect.Proxy`)

|  Change | Delta |              % | Samples | Callee   | Location                               |
| ------: | ----: | -------------: | ------: | -------- | -------------------------------------- |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `build`  | `java.lang.reflect.Proxy$ProxyBuilder` |
|     new |    +1 |   0.0% → 33.3% |   0 → 1 | `<init>` | `java.lang.reflect.Proxy$ProxyBuilder` |

##### `apply` (`java.lang.reflect.Proxy$$Lambda.0x000000d801051c10`)

|  Change | Delta |      % | Samples | Callee                         | Location                  |
| ------: | ----: | -----: | ------: | ------------------------------ | ------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `lambda$getProxyConstructor$0` | `java.lang.reflect.Proxy` |

##### `get` (`jdk.internal.loader.AbstractClassLoaderValue$Memoizer`)

|  Change | Delta |      % | Samples | Callee  | Location                                             |
| ------: | ----: | -----: | ------: | ------- | ---------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `apply` | `java.lang.reflect.Proxy$$Lambda.0x000000d801051c10` |

##### `computeIfAbsent` (`jdk.internal.loader.AbstractClassLoaderValue`)

|  Change | Delta |      % | Samples | Callee | Location                                                |
| ------: | ----: | -----: | ------: | ------ | ------------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `get`  | `jdk.internal.loader.AbstractClassLoaderValue$Memoizer` |

##### `getProxyConstructor` (`java.lang.reflect.Proxy`)

|  Change | Delta |      % | Samples | Callee            | Location                                       |
| ------: | ----: | -----: | ------: | ----------------- | ---------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `computeIfAbsent` | `jdk.internal.loader.AbstractClassLoaderValue` |

##### `newProxyInstance` (`java.lang.reflect.Proxy`)

|  Change | Delta |      % | Samples | Callee                | Location                  |
| ------: | ----: | -----: | ------: | --------------------- | ------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `getProxyConstructor` | `java.lang.reflect.Proxy` |

##### `acceptChildren` (`org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl`)

|  Change | Delta |             % | Samples | Callee   | Location                                                  |
| ------: | ----: | ------------: | ------: | -------- | --------------------------------------------------------- |
|  -17.9% |    -5 | 73.7% → 88.5% | 28 → 23 | `accept` | `org.jetbrains.kotlin.fir.expressions.FirBlock`           |
|  -80.0% |    -4 |  13.2% → 3.8% |   5 → 1 | `accept` | `org.jetbrains.kotlin.fir.declarations.FirValueParameter` |
| removed |    -2 |   5.3% → 0.0% |   2 → 0 | `accept` | `org.jetbrains.kotlin.fir.types.FirResolvedTypeRef`       |
|  -50.0% |    -1 |   5.3% → 3.8% |   2 → 1 | `accept` | `org.jetbrains.kotlin.fir.declarations.FirTypeParameter`  |

##### `PhaseLive::compute` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                             | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------- | ----------- |
|  -55.6% |    -5 | 42.9% → 33.3% |   9 → 4 | `PhaseLive::add_liveout`           | `<unknown>` |
| removed |    -3 |  14.3% → 0.0% |   3 → 0 | `IndexSet::initialize`             | `<unknown>` |
|     new |    +1 |   0.0% → 8.3% |   0 → 1 | `IndexSet::alloc_block_containing` | `<unknown>` |

##### `visitJump` (`org.jetbrains.kotlin.fir.visitors.FirDefaultVisitor`)

| Change | Delta |      % | Samples | Callee            | Location                                              |
| -----: | ----: | -----: | ------: | ----------------- | ----------------------------------------------------- |
| -47.1% |    -8 | 100.0% |  17 → 9 | `visitExpression` | `org.jetbrains.kotlin.fir.visitors.FirDefaultVisitor` |

##### `visitReturnExpression` (`org.jetbrains.kotlin.fir.visitors.FirDefaultVisitor`)

| Change | Delta |      % | Samples | Callee      | Location                                              |
| -----: | ----: | -----: | ------: | ----------- | ----------------------------------------------------- |
| -47.1% |    -8 | 100.0% |  17 → 9 | `visitJump` | `org.jetbrains.kotlin.fir.visitors.FirDefaultVisitor` |

##### `runCompletion` (`org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`)

|  Change | Delta |             % | Samples | Callee                                  | Location                                                                                      |
| ------: | ----: | ------------: | ------: | --------------------------------------- | --------------------------------------------------------------------------------------------- |
|  -37.5% |    -3 | 25.8% → 21.7% |   8 → 5 | `fixVariableIfReady`                    | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`                        |
|  -66.7% |    -2 |   9.7% → 4.3% |   3 → 1 | `findFirstVariableForFixation`          | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`                        |
| removed |    -1 |   3.2% → 0.0% |   1 → 0 | `findFirstCollectionLiteralForFixation` | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`                        |
| removed |    -1 |   3.2% → 0.0% |   1 → 0 | `findNextReadyVariableForParameterType` | `org.jetbrains.kotlin.resolve.calls.inference.components.PostponedArgumentInputTypesResolver` |

##### `complete` (`org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`)

| Change | Delta |      % | Samples | Callee          | Location                                                               |
| -----: | ----: | -----: | ------: | --------------- | ---------------------------------------------------------------------- |
| -25.8% |    -8 | 100.0% | 31 → 23 | `runCompletion` | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |

##### `runCompletionForCall` (`org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`)

| Change | Delta |      % | Samples | Callee     | Location                                                               |
| -----: | ----: | -----: | ------: | ---------- | ---------------------------------------------------------------------- |
| -25.8% |    -8 | 100.0% | 31 → 23 | `complete` | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |

##### `Parse::do_one_block` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                   | Location    |
| ------: | ----: | ------------: | ------: | ------------------------ | ----------- |
|  +60.0% |    +6 | 15.4% → 28.1% | 10 → 16 | `Parse::do_field_access` | `<unknown>` |
|  -50.0% |    -2 |   6.2% → 3.5% |   4 → 2 | `Parse::do_one_bytecode` | `<unknown>` |
| removed |    -2 |   3.1% → 0.0% |   2 → 0 | `Parse::array_load`      | `<unknown>` |
| removed |    -2 |   3.1% → 0.0% |   2 → 0 | `Parse::do_exceptions`   | `<unknown>` |
| removed |    -2 |   3.1% → 0.0% |   2 → 0 | `Parse::array_store`     | `<unknown>` |

##### `Parse::do_all_blocks` (`<unknown>`)

|  Change | Delta |           % | Samples | Callee                | Location    |
| ------: | ----: | ----------: | ------: | --------------------- | ----------- |
|  -12.3% |    -8 |      100.0% | 65 → 57 | `Parse::do_one_block` | `<unknown>` |
| removed |    -1 | 1.5% → 0.0% |   1 → 0 | `Parse::merge_common` | `<unknown>` |

##### `Parse::Parse` (`<unknown>`)

|  Change | Delta |           % | Samples | Callee                    | Location    |
| ------: | ----: | ----------: | ------: | ------------------------- | ----------- |
|  -12.3% |    -8 |      100.0% | 65 → 57 | `Parse::do_all_blocks`    | `<unknown>` |
| +300.0% |    +3 | 1.5% → 7.0% |   1 → 4 | `Parse::do_exits`         | `<unknown>` |
| removed |    -1 | 1.5% → 0.0% |   1 → 0 | `GraphKit::set_map_clone` | `<unknown>` |
| +100.0% |    +1 | 1.5% → 3.5% |   1 → 2 | `Parse::build_exits`      | `<unknown>` |
| removed |    -1 | 1.5% → 0.0% |   1 → 0 | `ciMethod::method_data`   | `<unknown>` |

##### `ParseGenerator::generate` (`<unknown>`)

| Change | Delta |      % | Samples | Callee         | Location    |
| -----: | ----: | -----: | ------: | -------------- | ----------- |
| -12.3% |    -8 | 100.0% | 65 → 57 | `Parse::Parse` | `<unknown>` |

##### `LinkResolver::resolve_invoke` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                 | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------- | ----------- |
|  -27.3% |    -3 | 57.9% → 72.7% |  11 → 8 | `LinkResolver::resolve_static_call`    | `<unknown>` |
| removed |    -2 |  10.5% → 0.0% |   2 → 0 | `LinkResolver::resolve_interface_call` | `<unknown>` |
| removed |    -2 |  10.5% → 0.0% |   2 → 0 | `LinkResolver::resolve_special_call`   | `<unknown>` |
| removed |    -1 |   5.3% → 0.0% |   1 → 0 | `LinkResolver::resolve_virtual_call`   | `<unknown>` |

##### `InterpreterRuntime::resolve_invoke` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                               | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------ | ----------- |
| -38.9% |    -7 | 90.0% → 91.7% | 18 → 11 | `LinkResolver::resolve_invoke`       | `<unknown>` |
| -50.0% |    -1 |  10.0% → 8.3% |   2 → 1 | `frame::interpreter_callee_receiver` | `<unknown>` |

##### `GraphBuilder::try_inline_full` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                  | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ----------- |
|  -34.3% |   -12 | 89.7% → 74.2% | 35 → 23 | `GraphBuilder::iterate_all_blocks`      | `<unknown>` |
|  +25.0% |    +1 | 10.3% → 16.1% |   4 → 5 | `GraphBuilder::push_scope`              | `<unknown>` |
|  -14.3% |    -1 | 17.9% → 19.4% |   7 → 6 | `ciMethod::ensure_method_data`          | `<unknown>` |
| removed |    -1 |   2.6% → 0.0% |   1 → 0 | `GraphBuilder::args_list_for_profiling` | `<unknown>` |
| removed |    -1 |   2.6% → 0.0% |   1 → 0 | `GraphBuilder::append_with_bci`         | `<unknown>` |

##### `PhaseIterGVN::optimize` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                        | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------- | ----------- |
|  -10.7% |    -6 | 93.3% → 94.3% | 56 → 50 | `PhaseIterGVN::transform_old` | `<unknown>` |
| removed |    -1 |   1.7% → 0.0% |   1 → 0 | `LoadNode::Value`             | `<unknown>` |
|     new |    +1 |   0.0% → 1.9% |   0 → 1 | `PhiNode::Value`              | `<unknown>` |
|     new |    +1 |   0.0% → 1.9% |   0 → 1 | `PhiNode::hash`               | `<unknown>` |

##### `LinearScan::build_intervals` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                           | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------- | ----------- |
| removed |    -2 |  13.3% → 0.0% |   2 → 0 | `LinearScan::add_use`            | `<unknown>` |
|  -66.7% |    -2 | 20.0% → 12.5% |   3 → 1 | `LinearScan::add_register_hints` | `<unknown>` |
| removed |    -1 |   6.7% → 0.0% |   1 → 0 | `LinearScan::add_def`            | `<unknown>` |
|  -50.0% |    -1 | 13.3% → 12.5% |   2 → 1 | `LIR_OpVisitState::visit`        | `<unknown>` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `Instruction::as_Constant`       | `<unknown>` |

##### `Compile::disconnect_useless_nodes` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                          | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------- | ----------- |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `Node::has_special_unique_user` | `<unknown>` |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `BoolNode::Opcode`              | `<unknown>` |

##### `GraphBuilder::try_inline` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                                   | Location    |
| ------: | ----: | -------------: | ------: | ---------------------------------------- | ----------- |
|  -20.5% |    -8 | 100.0% → 96.9% | 39 → 31 | `GraphBuilder::try_inline_full`          | `<unknown>` |
| removed |    -1 |    2.6% → 0.0% |   1 → 0 | `GraphBuilder::try_method_handle_inline` | `<unknown>` |
|     new |    +1 |    0.0% → 3.1% |   0 → 1 | `DirectiveSet::should_not_inline`        | `<unknown>` |
|     new |    +1 |    0.0% → 3.1% |   0 → 1 | `GraphBuilder::profile_invocation`       | `<unknown>` |

##### `GraphBuilder::invoke` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                              | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ----------- |
|  -17.9% |    -7 | 83.0% → 80.0% | 39 → 32 | `GraphBuilder::try_inline`          | `<unknown>` |
|  +62.5% |    +5 | 17.0% → 32.5% |  8 → 13 | `ciBytecodeStream::get_method`      | `<unknown>` |
| removed |    -2 |   4.3% → 0.0% |   2 → 0 | `tlv_get_addr`                      | `<unknown>` |
| removed |    -1 |   2.1% → 0.0% |   1 → 0 | `ciMethod::find_monomorphic_target` | `<unknown>` |
|  -50.0% |    -1 |   4.3% → 2.5% |   2 → 1 | `GraphBuilder::append_with_bci`     | `<unknown>` |

##### `PhaseIdealLoop::get_late_ctrl_with_anti_dep` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                         | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------ | ----------- |
|  -71.4% |    -5 | 50.0% → 28.6% |   7 → 2 | `PhaseIdealLoop::is_dominator` | `<unknown>` |
| removed |    -2 |  14.3% → 0.0% |   2 → 0 | `MemNode::adr_type`            | `<unknown>` |
| removed |    -1 |   7.1% → 0.0% |   1 → 0 | `VectorSet::grow`              | `<unknown>` |
| +100.0% |    +1 |  7.1% → 28.6% |   1 → 2 | `Compile::find_alias_type`     | `<unknown>` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `_platform_strcmp`             | `<unknown>` |

##### `PhaseIterGVN::transform_old` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                | Location    |
| ------: | ----: | -----------: | ------: | --------------------- | ----------- |
| +250.0% |    +5 | 3.6% → 14.0% |   2 → 7 | `StoreNode::Ideal`    | `<unknown>` |
|  -50.0% |    -3 | 10.7% → 6.0% |   6 → 3 | `RegionNode::Ideal`   | `<unknown>` |
|  -75.0% |    -3 |  7.1% → 2.0% |   4 → 1 | `MergeMemNode::Ideal` | `<unknown>` |
| removed |    -2 |  3.6% → 0.0% |   2 → 0 | `TypeNode::hash`      | `<unknown>` |
| +200.0% |    +2 |  1.8% → 6.0% |   1 → 3 | `PhiNode::Ideal`      | `<unknown>` |

##### `PhaseRemoveUseless::PhaseRemoveUseless` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                              | Location    |
| ------: | ----: | -----------: | ------: | ----------------------------------- | ----------- |
| removed |    -5 | 45.5% → 0.0% |   5 → 0 | `Compile::disconnect_useless_nodes` | `<unknown>` |
| removed |    -1 |  9.1% → 0.0% |   1 → 0 | `Compile::update_dead_node_list`    | `<unknown>` |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `Node::has_special_unique_user`     | `<unknown>` |

##### `Matcher::Label_Root` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                  | Location    |
| ------: | ----: | ------------: | ------: | ----------------------- | ----------- |
|  -60.0% |    -3 |         50.0% |   5 → 2 | `Matcher::Label_Root`   | `<unknown>` |
|  -40.0% |    -2 | 50.0% → 75.0% |   5 → 3 | `State::DFA`            | `<unknown>` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `_platform_memset`      | `<unknown>` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `TypeOopPtr::singleton` | `<unknown>` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `BoolNode::Opcode`      | `<unknown>` |

##### `ciTypeFlow::StateVector::apply_one_bytecode` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                                  | Location    |
| ------: | ----: | -------------: | ------: | --------------------------------------- | ----------- |
|  -40.0% |    -2 | 55.6% → 100.0% |   5 → 3 | `ciTypeFlow::StateVector::do_invoke`    | `<unknown>` |
| removed |    -2 |   22.2% → 0.0% |   2 → 0 | `ciTypeFlow::StateVector::do_getstatic` | `<unknown>` |
| removed |    -1 |   11.1% → 0.0% |   1 → 0 | `ciTypeFlow::StateVector::do_putfield`  | `<unknown>` |
| removed |    -1 |   11.1% → 0.0% |   1 → 0 | `ciTypeFlow::StateVector::do_ldc`       | `<unknown>` |

##### `ciTypeFlow::flow_block` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                                        | Location    |
| -----: | ----: | -----: | ------: | --------------------------------------------- | ----------- |
| -66.7% |    -6 | 100.0% |   9 → 3 | `ciTypeFlow::StateVector::apply_one_bytecode` | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                                                             | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------ | ----------- |
|  -83.3% |    -5 | 20.0% → 4.2% |   6 → 1 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `<unknown>` |
| removed |    -1 |  3.3% → 0.0% |   1 → 0 | `IndexSet::alloc_block_containing`                                 | `<unknown>` |
| removed |    -1 |  3.3% → 0.0% |   1 → 0 | `PhaseChaitin::raise_pressure`                                     | `<unknown>` |
| removed |    -1 |  3.3% → 0.0% |   1 → 0 | `loadRangeNode::rule`                                              | `<unknown>` |
|  -33.3% |    -1 | 10.0% → 8.3% |   3 → 2 | `PhaseChaitin::compute_initial_block_pressure`                     | `<unknown>` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                      | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | ----------- |
|  -14.9% |    -7 | 90.4% → 87.0% | 47 → 40 | `GraphBuilder::invoke`                      | `<unknown>` |
| removed |    -5 |   9.6% → 0.0% |   5 → 0 | `GraphBuilder::method_return`               | `<unknown>` |
| +133.3% |    +4 |  5.8% → 15.2% |   3 → 7 | `GraphBuilder::access_field`                | `<unknown>` |
| removed |    -2 |   3.8% → 0.0% |   2 → 0 | `GraphBuilder::new_instance`                | `<unknown>` |
| removed |    -1 |   1.9% → 0.0% |   1 → 0 | `GraphBuilder::ScopeData::add_to_work_list` | `<unknown>` |

##### `GraphBuilder::iterate_all_blocks` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                                      | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------- | ----------- |
| -11.5% |    -6 | 100.0% | 52 → 46 | `GraphBuilder::iterate_bytecodes_for_block` | `<unknown>` |

##### `TypeInterfaces::make` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                       | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------- | ----------- |
| removed |    -3 | 50.0% → 0.0% |   3 → 0 | `_qsort`                     | `<unknown>` |
| removed |    -2 | 33.3% → 0.0% |   2 → 0 | `TypeInterfaces::initialize` | `<unknown>` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `stub:qsort`                 | `<unknown>` |

##### `PhaseOutput::BuildOopMaps` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                   | Location    |
| ------: | ----: | ------------: | ------: | ------------------------ | ----------- |
|  -80.0% |    -4 | 50.0% → 20.0% |   5 → 1 | `OopFlow::compute_reach` | `<unknown>` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `Node::jvms`             | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                        | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | ----------- |
|  -57.1% |    -8 | 45.2% → 23.1% |  14 → 6 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `<unknown>` |
|  +25.0% |    +1 | 12.9% → 19.2% |   4 → 5 | `PhaseIdealLoop::compute_lca_of_uses`         | `<unknown>` |
| removed |    -1 |   3.2% → 0.0% |   1 → 0 | `PhiNode::Opcode`                             | `<unknown>` |
|     new |    +1 |   0.0% → 3.8% |   0 → 1 | `Node::unique_ctrl_out_or_null`               | `<unknown>` |
|     new |    +1 |   0.0% → 3.8% |   0 → 1 | `MultiNode::is_CFG`                           | `<unknown>` |

##### `Matcher::match_tree` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                         | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------ | ----------- |
|  -60.0% |    -6 | 55.6% → 30.8% |  10 → 4 | `Matcher::Label_Root`          | `<unknown>` |
| removed |    -1 |   5.6% → 0.0% |   1 → 0 | `_platform_memset`             | `<unknown>` |
| removed |    -1 |   5.6% → 0.0% |   1 → 0 | `Node::add_req`                | `<unknown>` |
|     new |    +1 |   0.0% → 7.7% |   0 → 1 | `Arena::set_size_in_bytes`     | `<unknown>` |
|     new |    +1 |   0.0% → 7.7% |   0 → 1 | `Matcher::ReduceInst_Interior` | `<unknown>` |

##### `InterpreterRuntime::resolve_from_cache` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                      | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------- | ----------- |
| -40.0% |    -8 | 76.9% → 60.0% | 20 → 12 | `InterpreterRuntime::resolve_invoke`        | `<unknown>` |
| +50.0% |    +2 | 15.4% → 30.0% |   4 → 6 | `InterpreterRuntime::resolve_get_put`       | `<unknown>` |
| -50.0% |    -1 |   7.7% → 5.0% |   2 → 1 | `InterpreterRuntime::resolve_invokedynamic` | `<unknown>` |

##### `ClassVerifier::verify_invoke_instructions` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                               | Location    |
| -----: | ----: | -----------: | ------: | ------------------------------------ | ----------- |
| -75.0% |    -3 |        50.0% |   4 → 1 | `ClassVerifier::translate_signature` | `<unknown>` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `ClassVerifier::verify_cp_type`      | `<unknown>` |

##### `ImmutableOopMapBuilder::build` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                             | Location    |
| ------: | ----: | -------------: | ------: | ---------------------------------- | ----------- |
|  -60.0% |    -3 | 71.4% → 100.0% |   5 → 2 | `ImmutableOopMap::ImmutableOopMap` | `<unknown>` |
| removed |    -1 |   14.3% → 0.0% |   1 → 0 | `OopMapSort::sort`                 | `<unknown>` |

##### `JVM_Clone` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                                                                                                                                                 | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| removed |    -3 | 75.0% → 0.0% |   3 → 0 | `pthread_jit_write_protect_np`                                                                                                                         | `<unknown>` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<270432ull, G1BarrierSet>, (AccessInternal::BarrierType)9, 270432ull>::access_barrier` | `<unknown>` |

##### `Monitor::wait` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                  | Location    |
| -----: | ----: | -----: | ------: | ----------------------- | ----------- |
| -30.8% |    -4 | 100.0% |  13 → 9 | `PlatformMonitor::wait` | `<unknown>` |

##### `IRScope::IRScope` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                       | Location    |
| -----: | ----: | -----: | ------: | ---------------------------- | ----------- |
|  -7.1% |    -4 | 100.0% | 56 → 52 | `GraphBuilder::GraphBuilder` | `<unknown>` |

##### `IR::IR` (`<unknown>`)

| Change | Delta |      % | Samples | Callee             | Location    |
| -----: | ----: | -----: | ------: | ------------------ | ----------- |
|  -7.1% |    -4 | 100.0% | 56 → 52 | `IRScope::IRScope` | `<unknown>` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                | Location    |
| ------: | ----: | -----------: | ------: | --------------------- | ----------- |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `G1CardSet::add_card` | `<unknown>` |

##### `ImmutableOopMapSet::build_from` (`<unknown>`)

| Change | Delta |              % | Samples | Callee                             | Location    |
| -----: | ----: | -------------: | ------: | ---------------------------------- | ----------- |
| -71.4% |    -5 | 100.0% → 66.7% |   7 → 2 | `ImmutableOopMapBuilder::build`    | `<unknown>` |
|    new |    +1 |   0.0% → 33.3% |   0 → 1 | `ImmutableOopMap::ImmutableOopMap` | `<unknown>` |

##### `CodeBlob::CodeBlob` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                           | Location    |
| -----: | ----: | -----: | ------: | -------------------------------- | ----------- |
| -57.1% |    -4 | 100.0% |   7 → 3 | `ImmutableOopMapSet::build_from` | `<unknown>` |

##### `CompiledMethod::CompiledMethod` (`<unknown>`)

| Change | Delta |      % | Samples | Callee               | Location    |
| -----: | ----: | -----: | ------: | -------------------- | ----------- |
| -57.1% |    -4 | 100.0% |   7 → 3 | `CodeBlob::CodeBlob` | `<unknown>` |

##### `checkElement` (`org.jetbrains.kotlin.fir.analysis.collectors.CheckerRunningDiagnosticCollectorVisitor`)

|  Change | Delta |             % | Samples | Callee   | Location                                                   |
| ------: | ----: | ------------: | ------: | -------- | ---------------------------------------------------------- |
| +266.7% |    +8 |  6.5% → 27.5% |  3 → 11 | `accept` | `org.jetbrains.kotlin.fir.declarations.FirNamedFunction`   |
|  -66.7% |    -4 |  13.0% → 5.0% |   6 → 2 | `accept` | `org.jetbrains.kotlin.fir.types.FirResolvedTypeRef`        |
| removed |    -3 |   6.5% → 0.0% |   3 → 0 | `accept` | `org.jetbrains.kotlin.fir.declarations.FirProperty`        |
|  -20.0% |    -2 | 21.7% → 20.0% |  10 → 8 | `accept` | `org.jetbrains.kotlin.fir.expressions.FirFunctionCall`     |
| removed |    -2 |   4.3% → 0.0% |   2 → 0 | `accept` | `org.jetbrains.kotlin.fir.expressions.FirReturnExpression` |

##### `accept` (`org.jetbrains.kotlin.fir.expressions.FirBlock`)

|  Change | Delta |              % | Samples | Callee       | Location                                                                                           |
| ------: | ----: | -------------: | ------: | ------------ | -------------------------------------------------------------------------------------------------- |
|  -14.8% |    -4 | 93.1% → 100.0% | 27 → 23 | `visitBlock` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                  |
| removed |    -1 |    3.4% → 0.0% |   1 → 0 | `visitBlock` | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirUnusedCheckerBase$UsageVisitorBase`     |
| removed |    -1 |    3.4% → 0.0% |   1 → 0 | `visitBlock` | `org.jetbrains.kotlin.fir.resolve.dfa.FirLocalVariableAssignmentAnalyzer$Companion$MiniCfgBuilder` |
| removed |    -1 |    3.4% → 0.0% |   1 → 0 | `visitBlock` | `org.jetbrains.kotlin.fir.visitors.FirVisitor`                                                     |
|     new |    +1 |    0.0% → 4.3% |   0 → 1 | `visitBlock` | `org.jetbrains.kotlin.fir.analysis.checkers.expression.ExpressionCheckersDiagnosticComponent`      |

##### `acceptChildren` (`org.jetbrains.kotlin.fir.expressions.impl.FirReturnExpressionImpl`)

|  Change | Delta |             % | Samples | Callee   | Location                                                   |
| ------: | ----: | ------------: | ------: | -------- | ---------------------------------------------------------- |
|  -37.5% |    -3 | 53.3% → 55.6% |   8 → 5 | `accept` | `org.jetbrains.kotlin.fir.expressions.FirWhenExpression`   |
|  -33.3% |    -2 | 40.0% → 44.4% |   6 → 4 | `accept` | `org.jetbrains.kotlin.fir.expressions.FirFunctionCall`     |
| removed |    -1 |   6.7% → 0.0% |   1 → 0 | `accept` | `org.jetbrains.kotlin.fir.expressions.FirTypeOperatorCall` |

##### `accept` (`org.jetbrains.kotlin.fir.declarations.FirFile`)

|  Change | Delta |             % | Samples | Callee      | Location                                                                                        |
| ------: | ----: | ------------: | ------: | ----------- | ----------------------------------------------------------------------------------------------- |
|  -10.9% |    -5 | 79.3% → 78.8% | 46 → 41 | `visitFile` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`               |
| removed |    -2 |   3.4% → 0.0% |   2 → 0 | `visitFile` | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.DeclarationCheckersDiagnosticComponent` |
|  -50.0% |    -1 |   3.4% → 1.9% |   2 → 1 | `visitFile` | `org.jetbrains.kotlin.fir.resolve.transformers.FirSupertypeResolverVisitor`                     |

##### `visitEnd` (`org.jetbrains.kotlin.codegen.TransformationMethodVisitor`)

| Change | Delta |             % | Samples | Callee                   | Location                                                              |
| -----: | ----: | ------------: | ------: | ------------------------ | --------------------------------------------------------------------- |
| -46.2% |    -6 | 92.9% → 87.5% |  13 → 7 | `performTransformations` | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor` |

##### `visitEnd` (`org.jetbrains.org.objectweb.asm.MethodVisitor`)

| Change | Delta |      % | Samples | Callee     | Location                                                   |
| -----: | ----: | -----: | ------: | ---------- | ---------------------------------------------------------- |
| -42.9% |    -6 | 100.0% |  14 → 8 | `visitEnd` | `org.jetbrains.kotlin.codegen.TransformationMethodVisitor` |

##### `performTransformations` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`)

| Change | Delta |      % | Samples | Callee      | Location                                                                           |
| -----: | ----: | -----: | ------: | ----------- | ---------------------------------------------------------------------------------- |
| -46.2% |    -6 | 100.0% |  13 → 7 | `transform` | `org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer` |

##### `incorporate` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintIncorporator`)

|  Change | Delta |             % | Samples | Callee                  | Location                                                                         |
| ------: | ----: | ------------: | ------: | ----------------------- | -------------------------------------------------------------------------------- |
|  -83.3% |    -5 | 75.0% → 50.0% |   6 → 1 | `insideOtherConstraint` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintIncorporator` |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `checkCanceled`         | `org.jetbrains.kotlin.progress.ProgressIndicatorAndCompilationCanceledStatus`    |

##### `processGivenConstraints` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`)

| Change | Delta |      % | Samples | Callee        | Location                                                                         |
| -----: | ----: | -----: | ------: | ------------- | -------------------------------------------------------------------------------- |
| -75.0% |    -6 | 100.0% |   8 → 2 | `incorporate` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintIncorporator` |

##### `processConstraintsIgnoringForksData` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`)

| Change | Delta |      % | Samples | Callee                    | Location                                                                     |
| -----: | ----: | -----: | ------: | ------------------------- | ---------------------------------------------------------------------------- |
| -75.0% |    -6 | 100.0% |   8 → 2 | `processGivenConstraints` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector` |

##### `processConstraints` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`)

| Change | Delta |      % | Samples | Callee                                | Location                                                                     |
| -----: | ----: | -----: | ------: | ------------------------------------- | ---------------------------------------------------------------------------- |
| -75.0% |    -6 | 100.0% |   8 → 2 | `processConstraintsIgnoringForksData` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector` |

##### `resolvePlainExpressionArgument` (`org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`)

| Change | Delta |      % | Samples | Callee                             | Location                                                                  |
| -----: | ----: | -----: | ------: | ---------------------------------- | ------------------------------------------------------------------------- |
| -66.7% |    -6 | 100.0% |   9 → 3 | `resolvePlainArgumentType$default` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor` |

##### `resolvePlainExpressionArgument$default` (`org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`)

| Change | Delta |      % | Samples | Callee                           | Location                                                                  |
| -----: | ----: | -----: | ------: | -------------------------------- | ------------------------------------------------------------------------- |
| -66.7% |    -6 | 100.0% |   9 → 3 | `resolvePlainExpressionArgument` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor` |

##### `resolveArgumentExpression` (`org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`)

|  Change | Delta |             % | Samples | Callee                                   | Location                                                                                  |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | ----------------------------------------------------------------------------------------- |
|  -66.7% |    -6 | 90.0% → 75.0% |   9 → 3 | `resolvePlainExpressionArgument$default` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`                 |
|  -66.7% |    -6 | 90.0% → 75.0% |   9 → 3 | `resolveArgumentExpression`              | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`                 |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `<init>`                                 | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor$ArgumentContext` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `getCsBuilder`                           | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleterKt`                  |

##### `checkNotNullParameter` (`kotlin.jvm.internal.Intrinsics`)

| Change | Delta |             % | Samples | Callee                    | Location                         |
| -----: | ----: | ------------: | ------: | ------------------------- | -------------------------------- |
| -50.0% |    -3 | 42.9% → 37.5% |   6 → 3 | `throwParameterIsNullNPE` | `kotlin.jvm.internal.Intrinsics` |

##### `hash` (`java.util.HashMap`)

|  Change | Delta |            % | Samples | Callee     | Location                                                                                              |
| ------: | ----: | -----------: | ------: | ---------- | ----------------------------------------------------------------------------------------------------- |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `hashCode` | `org.jetbrains.kotlin.fir.symbols.impl.ConeClassLikeLookupTagImpl`                                    |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `hashCode` | `java.lang.Object`                                                                                    |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `hashCode` | `org.jetbrains.kotlin.fir.symbols.ConeTypeParameterLookupTag`                                         |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `hashCode` | `org.jetbrains.kotlin.fir.scopes.SubstitutionScopeKeyFactory$Default$DefaultConeSubstitutionScopeKey` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `hashCode` | `kotlin.Pair`                                                                                         |

##### `clone` (`java.lang.Object`)

|  Change | Delta |             % | Samples | Callee      | Location    |
| ------: | ----: | ------------: | ------: | ----------- | ----------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `JVM_Clone` | `<unknown>` |

##### `getValue` (`kotlin.SynchronizedLazyImpl`)

|  Change | Delta |             % | Samples | Callee   | Location                                                                                    |
| ------: | ----: | ------------: | ------: | -------- | ------------------------------------------------------------------------------------------- |
|  -50.0% |    -1 | 15.4% → 10.0% |   2 → 1 | `invoke` | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile$$Lambda.0x000000d801390000`        |
| removed |    -1 |   7.7% → 0.0% |   1 → 0 | `invoke` | `org.jetbrains.kotlin.fir.backend.Fir2IrBuiltinSymbolsContainer$$Lambda.0x0000000301784528` |
|  -50.0% |    -1 | 15.4% → 10.0% |   2 → 1 | `invoke` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x000000d80160f940`        |
| removed |    -1 |   7.7% → 0.0% |   1 → 0 | `invoke` | `org.jetbrains.kotlin.utils.PathUtil$$Lambda.0x00000003011560b8`                            |
|     new |    +1 |  0.0% → 10.0% |   0 → 1 | `invoke` | `org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter$$Lambda.0x000000d801786a30`           |

##### `defineClass0` (`java.lang.ClassLoader`)

| Change | Delta |      % | Samples | Callee                                    | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------------- | ----------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `Java_java_lang_ClassLoader_defineClass0` | `<unknown>` |

##### `defineClass` (`java.lang.System$2`)

| Change | Delta |      % | Samples | Callee         | Location                |
| -----: | ----: | -----: | ------: | -------------- | ----------------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `defineClass0` | `java.lang.ClassLoader` |

##### `defineClass` (`java.lang.invoke.MethodHandles$Lookup$ClassDefiner`)

| Change | Delta |      % | Samples | Callee        | Location             |
| -----: | ----: | -----: | ------: | ------------- | -------------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `defineClass` | `java.lang.System$2` |

##### `toByteArray` (`java.io.ByteArrayOutputStream`)

|  Change | Delta |              % | Samples | Callee                             | Location           |
| ------: | ----: | -------------: | ------: | ---------------------------------- | ------------------ |
|  -66.7% |    -2 | 75.0% → 100.0% |   3 → 1 | `copyOf`                           | `java.util.Arrays` |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `arrayof_jlong_disjoint_arraycopy` | `<unknown>`        |

##### `throwParameterIsNullNPE` (`kotlin.jvm.internal.Intrinsics`)

| Change | Delta |              % | Samples | Callee               | Location                         |
| -----: | ----: | -------------: | ------: | -------------------- | -------------------------------- |
| -66.7% |    -4 | 100.0% → 66.7% |   6 → 2 | `sanitizeStackTrace` | `kotlin.jvm.internal.Intrinsics` |

##### `getNode` (`java.util.HashMap`)

|  Change | Delta |            % | Samples | Callee   | Location            |
| ------: | ----: | -----------: | ------: | -------- | ------------------- |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `hash`   | `java.util.HashMap` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `equals` | `java.lang.String`  |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `equals` | `kotlin.Pair`       |

##### `copyOf` (`java.util.Arrays`)

|  Change | Delta |            % | Samples | Callee                             | Location           |
| ------: | ----: | -----------: | ------: | ---------------------------------- | ------------------ |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `clone`                            | `java.lang.Object` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `arrayof_jlong_disjoint_arraycopy` | `<unknown>`        |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `_new_array_nozero_Java`           | `<unknown>`        |

##### `metafactory` (`java.lang.invoke.LambdaMetafactory`)

| Change | Delta |             % | Samples | Callee          | Location                                       |
| -----: | ----: | ------------: | ------: | --------------- | ---------------------------------------------- |
| -28.6% |    -2 | 87.5% → 83.3% |   7 → 5 | `buildCallSite` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `linkCallSiteImpl` (`java.lang.invoke.MethodHandleNatives`)

| Change | Delta |             % | Samples | Callee     | Location                    |
| -----: | ----: | ------------: | ------: | ---------- | --------------------------- |
| -12.5% |    -1 | 80.0% → 87.5% |   8 → 7 | `makeSite` | `java.lang.invoke.CallSite` |

##### `linkCallSite` (`java.lang.invoke.MethodHandleNatives`)

| Change | Delta |      % | Samples | Callee             | Location                               |
| -----: | ----: | -----: | ------: | ------------------ | -------------------------------------- |
| -20.0% |    -2 | 100.0% |  10 → 8 | `linkCallSiteImpl` | `java.lang.invoke.MethodHandleNatives` |

##### `getValue` (`kotlin.SafePublicationLazyImpl`)

|  Change | Delta |            % | Samples | Callee   | Location                                                                                          |
| ------: | ----: | -----------: | ------: | -------- | ------------------------------------------------------------------------------------------------- |
|  -50.0% |    -1 | 14.3% → 8.3% |   2 → 1 | `invoke` | `org.jetbrains.kotlin.fir.resolve.calls.ImplicitReceiverValue$$Lambda.0x000000d801655c20`         |
| removed |    -1 |  7.1% → 0.0% |   1 → 0 | `invoke` | `org.jetbrains.kotlin.fir.java.FirLazyJavaDeclarationList$$Lambda.0x0000000301614718`             |
| removed |    -1 |  7.1% → 0.0% |   1 → 0 | `invoke` | `org.jetbrains.kotlin.fir.scopes.impl.FirClassDeclaredMemberScopeImpl$$Lambda.0x000000030162d058` |
| removed |    -1 |  7.1% → 0.0% |   1 → 0 | `invoke` | `org.jetbrains.kotlin.fir.scopes.impl.AbstractFirUseSiteMemberScope$$Lambda.0x0000000301634e40`   |

##### `copyOfRange` (`java.util.Arrays`)

|  Change | Delta |            % | Samples | Callee             | Location           |
| ------: | ----: | -----------: | ------: | ------------------ | ------------------ |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `clone`            | `java.lang.Object` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `getComponentType` | `java.lang.Class`  |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `copyOfRange`      | `java.util.Arrays` |

##### `calcNext` (`kotlin.sequences.FilteringSequence$iterator$1`)

|  Change | Delta |              % | Samples | Callee          | Location                                            |
| ------: | ----: | -------------: | ------: | --------------- | --------------------------------------------------- |
|  -25.0% |    -1 | 80.0% → 100.0% |   4 → 3 | `next`          | `kotlin.sequences.TransformingSequence$iterator$1`  |
| removed |    -1 |   20.0% → 0.0% |   1 → 0 | `hasAnnotation` | `org.jetbrains.kotlin.ir.types.IrTypeSystemContext` |
| removed |    -1 |   20.0% → 0.0% |   1 → 0 | `hasNext`       | `kotlin.sequences.TransformingSequence$iterator$1`  |

##### `hasNext` (`kotlin.sequences.FilteringSequence$iterator$1`)

| Change | Delta |      % | Samples | Callee     | Location                                        |
| -----: | ----: | -----: | ------: | ---------- | ----------------------------------------------- |
| -40.0% |    -2 | 100.0% |   5 → 3 | `calcNext` | `kotlin.sequences.FilteringSequence$iterator$1` |

##### `remove` (`java.util.HashMap`)

|  Change | Delta |            % | Samples | Callee       | Location            |
| ------: | ----: | -----------: | ------: | ------------ | ------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `removeNode` | `java.util.HashMap` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in samples collected in their leaf frame.

|  Change | Delta |           % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +175.0% |    +7 | 0.3% → 0.8% |  4 → 11 | `LinearScanWalker::alloc_free_reg` ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                       |
| +500.0% |    +5 | 0.1% → 0.5% |   1 → 6 | `fwd_copy_again` ← `G1ParScanThreadState::trim_queue_to_threshold` ← `G1ScanHRForRegionClosure::scan_memregion` ← `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` ← `G1ScanHRForRegionClosure::scan_heap_roots` ← `G1ScanHRForRegionClosure::do_heap_region` ← `G1RemSet::scan_heap_roots` ← `G1EvacuateRegionsTask::scan_roots` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                    |
|     new |    +5 | 0.0% → 0.4% |   0 → 5 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` ← `G1ParScanThreadState::do_copy_to_survivor_space` ← `G1ParScanThreadState::trim_queue_to_threshold` ← `G1ParScanThreadState::steal_and_trim_queue` ← `G1ParEvacuateFollowersClosure::do_void` ← `G1EvacuateRegionsTask::evacuate_live_objects` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                       |
| +200.0% |    +4 | 0.2% → 0.5% |   2 → 6 | `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                              |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `Compile::identify_useful_nodes` ← `Matcher::specialize_generic_vector_operands` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `G1ParScanThreadState::trim_queue_to_threshold` ← `G1ParScanThreadState::steal_and_trim_queue` ← `G1ParEvacuateFollowersClosure::do_void` ← `G1EvacuateRegionsTask::evacuate_live_objects` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| +150.0% |    +3 | 0.2% → 0.4% |   2 → 5 | `PhaseIFG::SquareUp` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` ← `void G1CMTask::process_grey_task_entry<true>` ← `G1CMBitMap::iterate` ← `G1CMTask::do_marking_step` ← `G1CMConcurrentMarkingTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` ← `PhaseIdealLoop::compute_lca_of_uses` ← `PhaseIdealLoop::build_loop_late_post_work` ← `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                        |
|  +20.0% |    +3 | 1.2% → 1.4% | 15 → 18 | `PhaseChaitin::Split` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` ← `HeapRegionManager::par_iterate` ← `G1RebuildRSAndScrubTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                             |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `updateBytesCRC32` ← `updateBytes` (`java.util.zip.CRC32`) ← `update` ← `read` (`java.util.zip.ZipInputStream`) ← `read` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses` ← `run` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhaseCFG::schedule_late` ← `PhaseCFG::global_code_motion` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` ← `DebugInformationRecorder::describe_scope` ← `IRScopeDebugInfo::record_debug_info` ← `IRScopeDebugInfo::record_debug_info` ← `CodeEmitInfo::record_debug_info` ← `LIR_Assembler::add_call_info` ← `CounterOverflowStub::emit_code` ← `LIR_Assembler::emit_slow_case_stubs` ← `Compilation::emit_code_epilog` ← `Compilation::emit_code_body` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `sys_icache_invalidate` ← `ICStub::finalize` ← `StubQueue::remove_all` ← `InlineCacheBuffer::update_inline_caches` ← `ParallelCleanupTask::work` ← `SafepointSynchronize::do_cleanup_tasks` ← `SafepointSynchronize::begin` ← `VMThread::inner_execute` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhaseIFG::remove_node` ← `PhaseChaitin::Simplify` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  +33.3% |    +2 | 0.5% → 0.6% |   6 → 8 | `PhaseChaitin::elide_copy` ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  +33.3% |    +2 | 0.5% → 0.6% |   6 → 8 | `IntervalWalker::walk_to` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                       |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  +50.0% |    +2 | 0.3% → 0.5% |   4 → 6 | `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                     |

### Improvements

Call stacks with the largest decrease in samples collected in their leaf frame.

|  Change | Delta |           % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed |    -5 | 0.4% → 0.0% |   5 → 0 | `Compile::disconnect_useless_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  -83.3% |    -5 | 0.5% → 0.1% |   6 → 1 | `PhaseIdealLoop::is_dominator` ← `PhaseIdealLoop::get_late_ctrl_with_anti_dep` ← `PhaseIdealLoop::build_loop_late_post_work` ← `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  -50.0% |    -4 | 0.6% → 0.3% |   8 → 4 | `inflate_table` ← `inflate` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes` (`java.util.zip.Inflater`) ← `inflate` ← `read` (`java.util.zip.InflaterInputStream`) ← `read` (`java.util.zip.ZipInputStream`) ← `read` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses` ← `run` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -57.1% |    -4 | 0.5% → 0.2% |   7 → 3 | `LinearScan::build_intervals` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `PhaseIdealLoop::compute_lca_of_uses` ← `PhaseIdealLoop::build_loop_late_post_work` ← `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|   -6.7% |    -3 | 3.5% → 3.2% | 45 → 42 | `inflate_fast` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes` (`java.util.zip.Inflater`) ← `inflate` ← `read` (`java.util.zip.InflaterInputStream`) ← `read` (`java.util.zip.ZipInputStream`) ← `read` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses` ← `run` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  -50.0% |    -3 | 0.5% → 0.2% |   6 → 3 | `PhaseLive::add_liveout` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `__gettimeofday` ← `PlatformMonitor::wait` ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  -60.0% |    -3 | 0.4% → 0.2% |   5 → 2 | `LinearScanWalker::free_collect_inactive_any` ← `LinearScanWalker::alloc_free_reg` ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  -21.4% |    -3 | 1.1% → 0.8% | 14 → 11 | `PhaseChaitin::build_ifg_physical` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` ← `PhaseChaitin::build_ifg_physical` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `IndexSet::initialize` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `OopFlow::compute_reach` ← `PhaseOutput::BuildOopMaps` ← `PhaseOutput::Output` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `advance` (`org.jetbrains.kotlin.lexer._JetLexer`) ← `locateToken` (`com.intellij.lexer.FlexAdapter`) ← `getTokenType` ← `performLexing` (`com.intellij.lang.impl.TokenSequence$Builder`) ← `performLexing` (`com.intellij.lang.impl.TokenSequence`) ← `performLexing` (`com.intellij.lang.impl.PsiBuilderImpl`) ← `<init>` ← `<init>` ← `createBuilder` (`com.intellij.lang.impl.PsiBuilderFactoryImpl`) ← `buildLightTree` (`org.jetbrains.kotlin.parsing.KotlinLightParser`) ← `buildFirFile` (`org.jetbrains.kotlin.fir.lightTree.LightTree2Fir`) ← `buildFirViaLightTree` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`) ← `executePhase` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `executePhase` ← `phaseBody` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody` ← `invoke` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact` ← `executeAndReturnPipeLineArtifact$default` ← `execute` ← `doExecutePhased` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased` ← `execImpl` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec` ← `exec` ← `exec` ← `doMainNoExit` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default` ← `doMain` ← `main` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic` (`java.lang.invoke.LambdaForm$DMH.0x0000000301008400`) ← `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000000301009800`) ← `invokeExact_MT` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke` ← `invoke` (`java.lang.reflect.Method`) ← `run` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main` |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` ← `HeapRegionManager::par_iterate` ← `G1RebuildRSAndScrubTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `MethodLiveness::get_liveness_at` ← `LIRGenerator::state_for` ← `LIRGenerator::do_Invoke` ← `LIRGenerator::block_do` ← `BlockList::iterate_forward` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `_platform_memmove` ← `PhaseIdealLoop::set_idom` ← `PhaseIdealLoop::split_thru_region` ← `PhaseIdealLoop::do_split_if` ← `PhaseIdealLoop::split_if_with_blocks` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `LIR_Assembler::process_debug_info` ← `LIR_Assembler::emit_lir_list` ← `LIR_Assembler::emit_code` ← `Compilation::emit_code_body` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `void G1ScanCardClosure::do_oop_work<narrowOop>` ← `void OopOopIterateBoundedDispatch<G1ScanCardClosure>::Table::oop_oop_iterate_bounded<ObjArrayKlass, narrowOop>` ← `HeapWordImpl** HeapRegion::oops_on_memregion_iterate<G1ScanCardClosure, true>` ← `G1ScanHRForRegionClosure::scan_memregion` ← `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` ← `G1ScanHRForRegionClosure::scan_heap_roots` ← `G1ScanHRForRegionClosure::do_heap_region` ← `G1RemSet::scan_heap_roots` ← `G1EvacuateRegionsTask::scan_roots` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `_platform_memset` ← `GraphBuilder::append_with_bci` ← `GraphBuilder::method_return` ← `GraphBuilder::iterate_bytecodes_for_block` ← `GraphBuilder::iterate_all_blocks` ← `GraphBuilder::try_inline_full` ← `GraphBuilder::try_inline` ← `GraphBuilder::invoke` ← `GraphBuilder::iterate_bytecodes_for_block` ← `GraphBuilder::iterate_all_blocks` ← `GraphBuilder::GraphBuilder` ← `IRScope::IRScope` ← `IR::IR` ← `Compilation::build_hir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
