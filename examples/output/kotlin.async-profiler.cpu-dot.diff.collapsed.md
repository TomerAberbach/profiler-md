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

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                                                                                                                 | Location    |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  +47.1% |    +8 | 1.3% → 1.9% | 17 → 25 | `SymbolTable::do_lookup`                                                                                                                                 | `<unknown>` |
| +400.0% |    +8 | 0.2% → 0.8% |  2 → 10 | `fwd_copy_again`                                                                                                                                         | `<unknown>` |
| +175.0% |    +7 | 0.3% → 0.8% |  4 → 11 | `LinearScanWalker::alloc_free_reg`                                                                                                                       | `<unknown>` |
|  +87.5% |    +7 | 0.6% → 1.1% |  8 → 15 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `<unknown>` |
| +350.0% |    +7 | 0.2% → 0.7% |   2 → 9 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>`                             | `<unknown>` |
| +600.0% |    +6 | 0.1% → 0.5% |   1 → 7 | `Type::cmp`                                                                                                                                              | `<unknown>` |
| +500.0% |    +5 | 0.1% → 0.5% |   1 → 6 | `I2C/C2I adapters(0xb)`                                                                                                                                  | `<unknown>` |
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
| +500.0% |    +5 | 0.1% → 0.5% |   1 → 6 | `I2C/C2I adapters(0xb)`   | `<unknown>` |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `I2C/C2I adapters(0xbbb)` | `<unknown>` |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `zero_blocks`             | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                         | Location                         |
| ------: | ----: | ----------: | ------: | ------------------------------------------------ | -------------------------------- |
|  -41.7% |   -10 | 1.9% → 1.1% | 24 → 14 | `tlv_get_addr`                                   | `<unknown>`                      |
|  -77.8% |    -7 | 0.7% → 0.2% |   9 → 2 | `_platform_memmove`                              | `<unknown>`                      |
|  -37.5% |    -6 | 1.2% → 0.8% | 16 → 10 | `_platform_memset`                               | `<unknown>`                      |
|  -83.3% |    -5 | 0.5% → 0.1% |   6 → 1 | `I2C/C2I adapters(0xbab)`                        | `<unknown>`                      |
|  -83.3% |    -5 | 0.5% → 0.1% |   6 → 1 | `Compile::disconnect_useless_nodes`              | `<unknown>`                      |
|  -71.4% |    -5 | 0.5% → 0.2% |   7 → 2 | `PhaseIdealLoop::is_dominator`                   | `<unknown>`                      |
|  -66.7% |    -4 | 0.5% → 0.2% |   6 → 2 | `sanitizeStackTrace`                             | `kotlin.jvm.internal.Intrinsics` |
|  -57.1% |    -4 | 0.5% → 0.2% |   7 → 3 | `LinearScan::build_intervals`                    | `<unknown>`                      |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `ClassVerifier::verify_invoke_instructions`      | `<unknown>`                      |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `TypeInstPtr::hash`                              | `<unknown>`                      |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `LIR_Assembler::record_non_safepoint_debug_info` | `<unknown>`                      |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `I2C/C2I adapters(0xbb)`                         | `<unknown>`                      |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `PhaseIdealLoop::compute_lca_of_uses`            | `<unknown>`                      |
|  -37.5% |    -3 | 0.6% → 0.4% |   8 → 5 | `checkNotNullParameter`                          | `kotlin.jvm.internal.Intrinsics` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `PhaseCCP::push_more_uses`                       | `<unknown>`                      |
|   -6.0% |    -3 | 3.9% → 3.6% | 50 → 47 | `inflate_fast`                                   | `<unknown>`                      |
|  -50.0% |    -3 | 0.5% → 0.2% |   6 → 3 | `PhaseLive::add_liveout`                         | `<unknown>`                      |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `posix_madvise`                                  | `<unknown>`                      |
|  -23.1% |    -3 | 1.0% → 0.8% | 13 → 10 | `ciObjectFactory::get_metadata`                  | `<unknown>`                      |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `LIR_Assembler::process_debug_info`              | `<unknown>`                      |

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

| Change | Delta |           % | Samples | Function                  | Location    |
| -----: | ----: | ----------: | ------: | ------------------------- | ----------- |
| -83.3% |    -5 | 0.5% → 0.1% |   6 → 1 | `I2C/C2I adapters(0xbab)` | `<unknown>` |
| -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `I2C/C2I adapters(0xbb)`  | `<unknown>` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                                        | Location                                                           |
| ------: | ----: | ------------: | --------: | ----------------------------------------------- | ------------------------------------------------------------------ |
|     new |  +348 |  0.0% → 26.4% |   0 → 348 | `invokeStatic`                                  | `java.lang.invoke.LambdaForm$DMH.0x000000d801008000`               |
|     new |  +348 |  0.0% → 26.4% |   0 → 348 | `invoke`                                        | `java.lang.invoke.LambdaForm$MH.0x000000d801009400`                |
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

|  Change | Delta |            % | Samples | Function                       | Location                                                |
| ------: | ----: | -----------: | ------: | ------------------------------ | ------------------------------------------------------- |
|     new |  +348 | 0.0% → 26.4% | 0 → 348 | `invokeStatic`                 | `java.lang.invoke.LambdaForm$DMH.0x000000d801008000`    |
|     new |  +348 | 0.0% → 26.4% | 0 → 348 | `invoke`                       | `java.lang.invoke.LambdaForm$MH.0x000000d801009400`     |
|  +21.7% |   +10 |  3.6% → 4.2% | 46 → 56 | `resumeWith`                   | `kotlin.coroutines.jvm.internal.BaseContinuationImpl`   |
|  +20.0% |   +10 |  3.9% → 4.5% | 50 → 60 | `defineClass1`                 | `java.lang.ClassLoader`                                 |
|  +17.5% |   +10 |  4.4% → 5.1% | 57 → 67 | `loadClass`                    | `java.lang.ClassLoader`                                 |
|  +15.1% |    +8 |  4.1% → 4.6% | 53 → 61 | `defineClass`                  | `java.lang.ClassLoader`                                 |
|  +66.7% |    +6 |  0.7% → 1.1% |  9 → 15 | `getValue`                     | `kotlin.UnsafeLazyImpl`                                 |
|     new |    +5 |  0.0% → 0.4% |   0 → 5 | `invokeStatic`                 | `java.lang.invoke.LambdaForm$DMH.0x000000d801230000`    |
| +300.0% |    +3 |  0.1% → 0.3% |   1 → 4 | `generateCustomizedCode`       | `java.lang.invoke.InvokerBytecodeGenerator`             |
| +300.0% |    +3 |  0.1% → 0.3% |   1 → 4 | `compileToBytecode`            | `java.lang.invoke.LambdaForm`                           |
|     new |    +3 |  0.0% → 0.2% |   0 → 3 | `putVal`                       | `java.util.HashMap`                                     |
|  +66.7% |    +2 |  0.2% → 0.4% |   3 → 5 | `linkMethodHandleConstant`     | `java.lang.invoke.MethodHandles$Lookup`                 |
|  +66.7% |    +2 |  0.2% → 0.4% |   3 → 5 | `linkMethodHandleConstant`     | `java.lang.invoke.MethodHandleNatives`                  |
| +200.0% |    +2 |  0.1% → 0.2% |   1 → 3 | `findBootstrapClass`           | `java.lang.ClassLoader`                                 |
| +200.0% |    +2 |  0.1% → 0.2% |   1 → 3 | `findBootstrapClassOrNull`     | `java.lang.ClassLoader`                                 |
| +200.0% |    +2 |  0.1% → 0.2% |   1 → 3 | `updateBytes`                  | `java.util.zip.CRC32`                                   |
| +200.0% |    +2 |  0.1% → 0.2% |   1 → 3 | `update`                       | `java.util.zip.CRC32`                                   |
| +200.0% |    +2 |  0.1% → 0.2% |   1 → 3 | `lambda$getProxyConstructor$0` | `java.lang.reflect.Proxy`                               |
| +200.0% |    +2 |  0.1% → 0.2% |   1 → 3 | `apply`                        | `java.lang.reflect.Proxy$$Lambda.0x000000d801051c10`    |
| +200.0% |    +2 |  0.1% → 0.2% |   1 → 3 | `get`                          | `jdk.internal.loader.AbstractClassLoaderValue$Memoizer` |

##### JIT

|  Change | Delta |           % | Samples | Function                  | Location    |
| ------: | ----: | ----------: | ------: | ------------------------- | ----------- |
| +500.0% |    +5 | 0.1% → 0.5% |   1 → 6 | `I2C/C2I adapters(0xb)`   | `<unknown>` |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `I2C/C2I adapters(0xbbb)` | `<unknown>` |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `zero_blocks`             | `<unknown>` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |            % | Samples | Function                             | Location                                                               |
| ------: | ----: | -----------: | ------: | ------------------------------------ | ---------------------------------------------------------------------- |
| removed |  -348 | 27.1% → 0.0% | 348 → 0 | `invokeStatic`                       | `java.lang.invoke.LambdaForm$DMH.0x0000000301008400`                   |
| removed |  -348 | 27.1% → 0.0% | 348 → 0 | `invoke`                             | `java.lang.invoke.LambdaForm$MH.0x0000000301009800`                    |
|  -31.6% |   -12 |  3.0% → 2.0% | 38 → 26 | `acceptChildren`                     | `org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl`      |
|  -41.7% |   -10 |  1.9% → 1.1% | 24 → 14 | `tlv_get_addr`                       | `<unknown>`                                                            |
|  -42.9% |    -9 |  1.6% → 0.9% | 21 → 12 | `PhaseLive::compute`                 | `<unknown>`                                                            |
|  -47.1% |    -8 |  1.3% → 0.7% |  17 → 9 | `visitJump`                          | `org.jetbrains.kotlin.fir.visitors.FirDefaultVisitor`                  |
|  -47.1% |    -8 |  1.3% → 0.7% |  17 → 9 | `visitReturnExpression`              | `org.jetbrains.kotlin.fir.visitors.FirDefaultVisitor`                  |
|  -25.8% |    -8 |  2.4% → 1.7% | 31 → 23 | `runCompletion`                      | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |
|  -25.8% |    -8 |  2.4% → 1.7% | 31 → 23 | `complete`                           | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |
|  -25.8% |    -8 |  2.4% → 1.7% | 31 → 23 | `runCompletionForCall`               | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`          |
|  -12.3% |    -8 |  5.1% → 4.3% | 65 → 57 | `Parse::do_one_block`                | `<unknown>`                                                            |
|  -12.3% |    -8 |  5.1% → 4.3% | 65 → 57 | `Parse::do_all_blocks`               | `<unknown>`                                                            |
|  -12.3% |    -8 |  5.1% → 4.3% | 65 → 57 | `Parse::Parse`                       | `<unknown>`                                                            |
|  -12.3% |    -8 |  5.1% → 4.3% | 65 → 57 | `ParseGenerator::generate`           | `<unknown>`                                                            |
|  -42.1% |    -8 |  1.5% → 0.8% | 19 → 11 | `LinkResolver::resolve_invoke`       | `<unknown>`                                                            |
|  -40.0% |    -8 |  1.6% → 0.9% | 20 → 12 | `InterpreterRuntime::resolve_invoke` | `<unknown>`                                                            |
|  -20.5% |    -8 |  3.0% → 2.4% | 39 → 31 | `GraphBuilder::try_inline_full`      | `<unknown>`                                                            |
|  -11.7% |    -7 |  4.7% → 4.0% | 60 → 53 | `PhaseIterGVN::optimize`             | `<unknown>`                                                            |
|  -46.7% |    -7 |  1.2% → 0.6% |  15 → 8 | `LinearScan::build_intervals`        | `<unknown>`                                                            |
|  -77.8% |    -7 |  0.7% → 0.2% |   9 → 2 | `_platform_memmove`                  | `<unknown>`                                                            |

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

|  Change | Delta |            % | Samples | Function                  | Location                                             |
| ------: | ----: | -----------: | ------: | ------------------------- | ---------------------------------------------------- |
| removed |  -348 | 27.1% → 0.0% | 348 → 0 | `invokeStatic`            | `java.lang.invoke.LambdaForm$DMH.0x0000000301008400` |
| removed |  -348 | 27.1% → 0.0% | 348 → 0 | `invoke`                  | `java.lang.invoke.LambdaForm$MH.0x0000000301009800`  |
| removed |    -6 |  0.5% → 0.0% |   6 → 0 | `invokeStatic`            | `java.lang.invoke.LambdaForm$DMH.0x0000000301234000` |
|  -42.9% |    -6 |  1.1% → 0.6% |  14 → 8 | `checkNotNullParameter`   | `kotlin.jvm.internal.Intrinsics`                     |
| removed |    -5 |  0.4% → 0.0% |   5 → 0 | `hash`                    | `java.util.HashMap`                                  |
| removed |    -4 |  0.3% → 0.0% |   4 → 0 | `clone`                   | `java.lang.Object`                                   |
|  -66.7% |    -4 |  0.5% → 0.2% |   6 → 2 | `sanitizeStackTrace`      | `kotlin.jvm.internal.Intrinsics`                     |
|  -23.1% |    -3 |  1.0% → 0.8% | 13 → 10 | `getValue`                | `kotlin.SynchronizedLazyImpl`                        |
|  -75.0% |    -3 |  0.3% → 0.1% |   4 → 1 | `defineClass0`            | `java.lang.ClassLoader`                              |
|  -75.0% |    -3 |  0.3% → 0.1% |   4 → 1 | `defineClass`             | `java.lang.System$2`                                 |
|  -75.0% |    -3 |  0.3% → 0.1% |   4 → 1 | `defineClass`             | `java.lang.invoke.MethodHandles$Lookup$ClassDefiner` |
|  -75.0% |    -3 |  0.3% → 0.1% |   4 → 1 | `toByteArray`             | `java.io.ByteArrayOutputStream`                      |
|  -50.0% |    -3 |  0.5% → 0.2% |   6 → 3 | `throwParameterIsNullNPE` | `kotlin.jvm.internal.Intrinsics`                     |
|  -75.0% |    -3 |  0.3% → 0.1% |   4 → 1 | `getNode`                 | `java.util.HashMap`                                  |
|  -50.0% |    -2 |  0.3% → 0.2% |   4 → 2 | `copyOf`                  | `java.util.Arrays`                                   |
|  -25.0% |    -2 |  0.6% → 0.5% |   8 → 6 | `metafactory`             | `java.lang.invoke.LambdaMetafactory`                 |
|  -20.0% |    -2 |  0.8% → 0.6% |  10 → 8 | `linkCallSiteImpl`        | `java.lang.invoke.MethodHandleNatives`               |
|  -20.0% |    -2 |  0.8% → 0.6% |  10 → 8 | `linkCallSite`            | `java.lang.invoke.MethodHandleNatives`               |
|  -14.3% |    -2 |  1.1% → 0.9% | 14 → 12 | `getValue`                | `kotlin.SafePublicationLazyImpl`                     |
|  -66.7% |    -2 |  0.2% → 0.1% |   3 → 1 | `copyOfRange`             | `java.util.Arrays`                                   |

##### JIT

| Change | Delta |           % | Samples | Function                  | Location    |
| -----: | ----: | ----------: | ------: | ------------------------- | ----------- |
| -83.3% |    -5 | 0.5% → 0.1% |   6 → 1 | `I2C/C2I adapters(0xbab)` | `<unknown>` |
| -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `I2C/C2I adapters(0xbb)`  | `<unknown>` |
