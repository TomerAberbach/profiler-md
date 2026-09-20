# Sampling profile diff

Collected 1,672 samples → 1,305 samples (-367 samples, -21.9%).

| Category          | Change | Delta |             % |   Samples |
| ----------------- | -----: | ----: | ------------: | --------: |
| Compiler          |  -9.3% |   -61 | 39.4% → 45.7% | 658 → 597 |
| Native            | -34.2% |  -263 | 45.9% → 38.7% | 768 → 505 |
| Ours              | -16.1% |   -24 |   8.9% → 9.6% | 149 → 125 |
| Standard library  | -29.3% |   -24 |   4.9% → 4.4% |   82 → 58 |
| JIT               | +26.7% |    +4 |   0.9% → 1.5% |   15 → 19 |
| Garbage collector |    new |    +1 |   0.0% → 0.1% |     0 → 1 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                                                       | Location    |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------- | ----------- |
|  +52.6% |   +10 | 1.1% → 2.2% | 19 → 29 | `tlv_get_addr`                                                                                 | `<unknown>` |
| +600.0% |    +6 | 0.1% → 0.5% |   1 → 7 | `I2C/C2I adapters(0xb)`                                                                        | `<unknown>` |
| +200.0% |    +6 | 0.2% → 0.7% |   3 → 9 | `Arena::contains`                                                                              | `<unknown>` |
|     new |    +5 | 0.0% → 0.4% |   0 → 5 | `PhaseIdealLoop::split_if_with_blocks`                                                         | `<unknown>` |
|  +62.5% |    +5 | 0.5% → 1.0% |  8 → 13 | `pthread_jit_write_protect_np`                                                                 | `<unknown>` |
|     new |    +5 | 0.0% → 0.4% |   0 → 5 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal`                                           | `<unknown>` |
|  +36.4% |    +4 | 0.7% → 1.1% | 11 → 15 | `PhaseChaitin::gather_lrg_masks`                                                               | `<unknown>` |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `PhaseCFG::schedule_pinned_nodes`                                                              | `<unknown>` |
| +133.3% |    +4 | 0.2% → 0.5% |   3 → 7 | `Matcher::match_tree`                                                                          | `<unknown>` |
|  +57.1% |    +4 | 0.4% → 0.8% |  7 → 11 | `PhaseIdealLoop::build_loop_early`                                                             | `<unknown>` |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `Scheduling::ComputeUseCount`                                                                  | `<unknown>` |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `ClassFileParser::skip_over_field_signature`                                                   | `<unknown>` |
|  +75.0% |    +3 | 0.2% → 0.5% |   4 → 7 | `PhaseIdealLoop::build_loop_tree`                                                              | `<unknown>` |
| +100.0% |    +3 | 0.2% → 0.5% |   3 → 6 | `Matcher::xform`                                                                               | `<unknown>` |
|  +60.0% |    +3 | 0.3% → 0.6% |   5 → 8 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `<unknown>` |
|  +60.0% |    +3 | 0.3% → 0.6% |   5 → 8 | `PhaseChaitin::post_allocate_copy_removal`                                                     | `<unknown>` |
| +150.0% |    +3 | 0.1% → 0.4% |   2 → 5 | `PhaseAggressiveCoalesce::insert_copies`                                                       | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep`                                                  | `<unknown>` |
|  +75.0% |    +3 | 0.2% → 0.5% |   4 → 7 | `Matcher::find_shared`                                                                         | `<unknown>` |
|  +75.0% |    +3 | 0.2% → 0.5% |   4 → 7 | `Node_Backward_Iterator::next`                                                                 | `<unknown>` |

##### Native

|  Change | Delta |           % | Samples | Function                                                                                                                                                 | Location    |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  +52.6% |   +10 | 1.1% → 2.2% | 19 → 29 | `tlv_get_addr`                                                                                                                                           | `<unknown>` |
| +200.0% |    +6 | 0.2% → 0.7% |   3 → 9 | `Arena::contains`                                                                                                                                        | `<unknown>` |
|  +62.5% |    +5 | 0.5% → 1.0% |  8 → 13 | `pthread_jit_write_protect_np`                                                                                                                           | `<unknown>` |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `ClassFileParser::skip_over_field_signature`                                                                                                             | `<unknown>` |
|  +60.0% |    +3 | 0.3% → 0.6% |   5 → 8 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                           | `<unknown>` |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `__vfprintf`                                                                                                                                             | `<unknown>` |
|  +10.0% |    +2 | 1.2% → 1.7% | 20 → 22 | `SymbolTable::do_lookup`                                                                                                                                 | `<unknown>` |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `ClassFileParser::parse_constant_pool_entries`                                                                                                           | `<unknown>` |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `LinkResolver::resolve_invoke`                                                                                                                           | `<unknown>` |
|  +25.0% |    +2 | 0.5% → 0.8% |  8 → 10 | `inflate_table`                                                                                                                                          | `<unknown>` |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `ClassFileParser::parse_method`                                                                                                                          | `<unknown>` |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `_platform_memchr`                                                                                                                                       | `<unknown>` |
|  +16.7% |    +2 | 0.7% → 1.1% | 12 → 14 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `<unknown>` |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `FieldInfoReader::read_field_info`                                                                                                                       | `<unknown>` |
| +100.0% |    +2 | 0.1% → 0.3% |   2 → 4 | `ImmutableOopMap::update_register_map`                                                                                                                   | `<unknown>` |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `nmethod::oops_do`                                                                                                                                       | `<unknown>` |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `pthread_mutex_lock`                                                                                                                                     | `<unknown>` |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `klassVtable::update_inherited_vtable`                                                                                                                   | `<unknown>` |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `MoveResolver::resolve_mappings`                                                                                                                         | `<unknown>` |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `nmethod::stub_end`                                                                                                                                      | `<unknown>` |

##### Compiler

|  Change | Delta |           % | Samples | Function                                             | Location    |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------- | ----------- |
|     new |    +5 | 0.0% → 0.4% |   0 → 5 | `PhaseIdealLoop::split_if_with_blocks`               | `<unknown>` |
|     new |    +5 | 0.0% → 0.4% |   0 → 5 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `<unknown>` |
|  +36.4% |    +4 | 0.7% → 1.1% | 11 → 15 | `PhaseChaitin::gather_lrg_masks`                     | `<unknown>` |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `PhaseCFG::schedule_pinned_nodes`                    | `<unknown>` |
| +133.3% |    +4 | 0.2% → 0.5% |   3 → 7 | `Matcher::match_tree`                                | `<unknown>` |
|  +57.1% |    +4 | 0.4% → 0.8% |  7 → 11 | `PhaseIdealLoop::build_loop_early`                   | `<unknown>` |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `Scheduling::ComputeUseCount`                        | `<unknown>` |
|  +75.0% |    +3 | 0.2% → 0.5% |   4 → 7 | `PhaseIdealLoop::build_loop_tree`                    | `<unknown>` |
| +100.0% |    +3 | 0.2% → 0.5% |   3 → 6 | `Matcher::xform`                                     | `<unknown>` |
|  +60.0% |    +3 | 0.3% → 0.6% |   5 → 8 | `PhaseChaitin::post_allocate_copy_removal`           | `<unknown>` |
| +150.0% |    +3 | 0.1% → 0.4% |   2 → 5 | `PhaseAggressiveCoalesce::insert_copies`             | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep`        | `<unknown>` |
|  +75.0% |    +3 | 0.2% → 0.5% |   4 → 7 | `Matcher::find_shared`                               | `<unknown>` |
|  +75.0% |    +3 | 0.2% → 0.5% |   4 → 7 | `Node_Backward_Iterator::next`                       | `<unknown>` |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `LinearScan::eliminate_spill_moves`                  | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhaseIFG::SquareUp`                                 | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `Node::add_req`                                      | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `RegionNode::hash`                                   | `<unknown>` |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `PhaseChaitin::Register_Allocate`                    | `<unknown>` |
|  +25.0% |    +2 | 0.5% → 0.8% |  8 → 10 | `PhaseIdealLoop::Dominators`                         | `<unknown>` |

##### Ours

| Change | Delta |           % | Samples | Function                                                   | Location                                                                                         |
| -----: | ----: | ----------: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|    new |    +2 | 0.0% → 0.2% |   0 → 2 | `processCandidatesWithGivenImplicitReceiverAsValue`        | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask`                               |
|    new |    +2 | 0.0% → 0.2% |   0 → 2 | `shouldWeSkipConstraint`                                   | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                     |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `directWithVariable`                                       | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintIncorporator`                 |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `consumeCandidate`                                         | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor`                               |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `acceptChildren`                                           | `org.jetbrains.kotlin.ir.declarations.IrFunction`                                                |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `contentsToByteArray`                                      | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`                                |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `processFunctionsByName`                                   | `org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`                   |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `transform`                                                | `org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer$Transformer` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `transformChildren`                                        | `org.jetbrains.kotlin.ir.declarations.IrFunction`                                                |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `inlineCall`                                               | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`                                       |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `toIrStatement`                                            | `org.jetbrains.kotlin.fir.backend.Fir2IrVisitor`                                                 |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `balanceWhiteSpaces`                                       | `com.intellij.lang.impl.PsiBuilderImpl`                                                          |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `loadFunction$default`                                     | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`                                 |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `addSmartcastIfNeeded`                                     | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`    |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `accept`                                                   | `org.jetbrains.kotlin.ir.expressions.IrGetValue`                                                 |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `reversedFilteredLocalScopes_delegate$lambda$0`            | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerDataElementsForName`                          |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `runResolverForNoReceiver`                                 | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask`                               |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `isKotlinFunctionWithBigArity`                             | `org.jetbrains.kotlin.builtins.jvm.JavaToKotlinClassMap`                                         |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `createToFreshVariableSubstitutorAndAddInitialConstraints` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CreateFreshTypeVariableSubstitutorStage`          |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `writeGenericType`                                         | `org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper`                                          |

##### Standard library

| Change | Delta |           % | Samples | Function                    | Location                                                 |
| -----: | ----: | ----------: | ------: | --------------------------- | -------------------------------------------------------- |
| +50.0% |    +2 | 0.2% → 0.5% |   4 → 6 | `checkNotNullParameter`     | `kotlin.jvm.internal.Intrinsics`                         |
|    new |    +2 | 0.0% → 0.2% |   0 → 2 | `hasNext`                   | `kotlin.collections.ReversedListReadOnly$listIterator$1` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `inflateBytesBytes`         | `java.util.zip.Inflater`                                 |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `areEqual`                  | `kotlin.jvm.internal.Intrinsics`                         |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `getShortUnalignedInternal` | `jdk.internal.misc.ScopedMemoryAccess`                   |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `visit`                     | `jdk.internal.org.objectweb.asm.ClassWriter`             |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `startsWith`                | `java.lang.String`                                       |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `computeAllFrames`          | `jdk.internal.org.objectweb.asm.MethodWriter`            |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `charAt`                    | `java.lang.String`                                       |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `insertParameterTypes`      | `java.lang.invoke.MethodType`                            |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `toString`                  | `java.util.StringJoiner`                                 |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `invokeBasic`               | `java.lang.invoke.MethodHandle`                          |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `linkToTargetMethod`        | `java.lang.invoke.Invokers$Holder`                       |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `singleOrNull`              | `kotlin.collections.CollectionsKt___CollectionsKt`       |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `getString`                 | `jdk.internal.jimage.BasicImageReader`                   |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `valueOf`                   | `java.lang.Integer`                                      |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `isInitialized`             | `kotlin.reflect.jvm.internal.impl.protobuf.FieldSet`     |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `equals`                    | `java.lang.Object`                                       |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `throwOnFailure`            | `kotlin.ResultKt`                                        |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `toString`                  | `java.lang.Long`                                         |

##### JIT

|  Change | Delta |           % | Samples | Function                 | Location    |
| ------: | ----: | ----------: | ------: | ------------------------ | ----------- |
| +600.0% |    +6 | 0.1% → 0.5% |   1 → 7 | `I2C/C2I adapters(0xb)`  | `<unknown>` |
|  +25.0% |    +1 | 0.2% → 0.4% |   4 → 5 | `I2C/C2I adapters(0xbb)` | `<unknown>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `I2C/C2I adapters(0xba)` | `<unknown>` |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `itable stub`            | `<unknown>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `vtable stub`            | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                                                                                     | Location            |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | ------------------- |
|  -83.1% |   -64 | 4.6% → 1.0% | 77 → 13 | `__psynch_mutexwait`                                                                                                         | `<unknown>`         |
|  -80.6% |   -50 | 3.7% → 0.9% | 62 → 12 | `__psynch_cvwait`                                                                                                            | `<unknown>`         |
|  -32.9% |   -23 | 4.2% → 3.6% | 70 → 47 | `inflate_fast`                                                                                                               | `<unknown>`         |
|  -68.2% |   -15 | 1.3% → 0.5% |  22 → 7 | `_platform_memset`                                                                                                           | `<unknown>`         |
|  -78.6% |   -11 | 0.8% → 0.2% |  14 → 3 | `semaphore_wait_trap`                                                                                                        | `<unknown>`         |
|  -76.9% |   -10 | 0.8% → 0.2% |  13 → 3 | `LinearScanWalker::alloc_free_reg`                                                                                           | `<unknown>`         |
| removed |    -9 | 0.5% → 0.0% |   9 → 0 | `swtch_pri`                                                                                                                  | `<unknown>`         |
| removed |    -8 | 0.5% → 0.0% |   8 → 0 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` | `<unknown>`         |
|  -38.9% |    -7 | 1.1% → 0.8% | 18 → 11 | `IndexSetIterator::advance_and_next`                                                                                         | `<unknown>`         |
|  -87.5% |    -7 | 0.5% → 0.1% |   8 → 1 | `CodeCache::make_marked_nmethods_deoptimized`                                                                                | `<unknown>`         |
|  -66.7% |    -6 | 0.5% → 0.2% |   9 → 3 | `Dictionary::find`                                                                                                           | `<unknown>`         |
|  -85.7% |    -6 | 0.4% → 0.1% |   7 → 1 | `getNode`                                                                                                                    | `java.util.HashMap` |
| removed |    -5 | 0.3% → 0.0% |   5 → 0 | `zero_blocks`                                                                                                                | `<unknown>`         |
|  -62.5% |    -5 | 0.5% → 0.2% |   8 → 3 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                       | `<unknown>`         |
|  -31.3% |    -5 | 1.0% → 0.8% | 16 → 11 | `PhaseChaitin::build_ifg_physical`                                                                                           | `<unknown>`         |
|  -33.3% |    -5 | 0.9% → 0.8% | 15 → 10 | `PhaseChaitin::elide_copy`                                                                                                   | `<unknown>`         |
|  -66.7% |    -4 | 0.4% → 0.2% |   6 → 2 | `MultiNode::is_CFG`                                                                                                          | `<unknown>`         |
|  -80.0% |    -4 | 0.3% → 0.1% |   5 → 1 | `__psynch_cvbroad`                                                                                                           | `<unknown>`         |
|  -40.0% |    -4 | 0.6% → 0.5% |  10 → 6 | `inflate`                                                                                                                    | `<unknown>`         |
|  -80.0% |    -4 | 0.3% → 0.1% |   5 → 1 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                              | `<unknown>`         |

##### Native

|  Change | Delta |           % | Samples | Function                                                                                                                     | Location    |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -83.1% |   -64 | 4.6% → 1.0% | 77 → 13 | `__psynch_mutexwait`                                                                                                         | `<unknown>` |
|  -80.6% |   -50 | 3.7% → 0.9% | 62 → 12 | `__psynch_cvwait`                                                                                                            | `<unknown>` |
|  -32.9% |   -23 | 4.2% → 3.6% | 70 → 47 | `inflate_fast`                                                                                                               | `<unknown>` |
|  -68.2% |   -15 | 1.3% → 0.5% |  22 → 7 | `_platform_memset`                                                                                                           | `<unknown>` |
|  -78.6% |   -11 | 0.8% → 0.2% |  14 → 3 | `semaphore_wait_trap`                                                                                                        | `<unknown>` |
| removed |    -9 | 0.5% → 0.0% |   9 → 0 | `swtch_pri`                                                                                                                  | `<unknown>` |
| removed |    -8 | 0.5% → 0.0% |   8 → 0 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` | `<unknown>` |
|  -87.5% |    -7 | 0.5% → 0.1% |   8 → 1 | `CodeCache::make_marked_nmethods_deoptimized`                                                                                | `<unknown>` |
|  -66.7% |    -6 | 0.5% → 0.2% |   9 → 3 | `Dictionary::find`                                                                                                           | `<unknown>` |
|  -62.5% |    -5 | 0.5% → 0.2% |   8 → 3 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                       | `<unknown>` |
|  -80.0% |    -4 | 0.3% → 0.1% |   5 → 1 | `__psynch_cvbroad`                                                                                                           | `<unknown>` |
|  -40.0% |    -4 | 0.6% → 0.5% |  10 → 6 | `inflate`                                                                                                                    | `<unknown>` |
|  -80.0% |    -4 | 0.3% → 0.1% |   5 → 1 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                              | `<unknown>` |
| removed |    -4 | 0.2% → 0.0% |   4 → 0 | `SignatureStream::next`                                                                                                      | `<unknown>` |
|  -28.6% |    -4 |        0.8% | 14 → 10 | `InstanceKlass::find_method_index`                                                                                           | `<unknown>` |
| removed |    -4 | 0.2% → 0.0% |   4 → 0 | `forward_copy_longs`                                                                                                         | `<unknown>` |
| removed |    -4 | 0.2% → 0.0% |   4 → 0 | `mach_absolute_time`                                                                                                         | `<unknown>` |
|  -80.0% |    -4 | 0.3% → 0.1% |   5 → 1 | `__psynch_mutexdrop`                                                                                                         | `<unknown>` |
| removed |    -4 | 0.2% → 0.0% |   4 → 0 | `G1CardSet::add_to_howl`                                                                                                     | `<unknown>` |
|  -42.9% |    -3 | 0.4% → 0.3% |   7 → 4 | `fwd_copy_again`                                                                                                             | `<unknown>` |

##### Compiler

|  Change | Delta |           % | Samples | Function                                              | Location    |
| ------: | ----: | ----------: | ------: | ----------------------------------------------------- | ----------- |
|  -76.9% |   -10 | 0.8% → 0.2% |  13 → 3 | `LinearScanWalker::alloc_free_reg`                    | `<unknown>` |
|  -38.9% |    -7 | 1.1% → 0.8% | 18 → 11 | `IndexSetIterator::advance_and_next`                  | `<unknown>` |
|  -31.3% |    -5 | 1.0% → 0.8% | 16 → 11 | `PhaseChaitin::build_ifg_physical`                    | `<unknown>` |
|  -33.3% |    -5 | 0.9% → 0.8% | 15 → 10 | `PhaseChaitin::elide_copy`                            | `<unknown>` |
|  -66.7% |    -4 | 0.4% → 0.2% |   6 → 2 | `MultiNode::is_CFG`                                   | `<unknown>` |
|  -80.0% |    -4 | 0.3% → 0.1% |   5 → 1 | `PhaseChaitin::Simplify`                              | `<unknown>` |
|  -80.0% |    -4 | 0.3% → 0.1% |   5 → 1 | `PhaseIterGVN::add_users_to_worklist`                 | `<unknown>` |
|  -57.1% |    -4 | 0.4% → 0.2% |   7 → 3 | `LinearScanWalker::free_collect_inactive_fixed`       | `<unknown>` |
|  -75.0% |    -3 | 0.2% → 0.1% |   4 → 1 | `PhaseIdealLoop::build_loop_tree_impl`                | `<unknown>` |
|  -50.0% |    -3 | 0.4% → 0.2% |   6 → 3 | `PhaseOutput::BuildOopMaps`                           | `<unknown>` |
|  -27.3% |    -3 | 0.7% → 0.6% |  11 → 8 | `PhaseLive::compute`                                  | `<unknown>` |
|  -37.5% |    -3 | 0.5% → 0.4% |   8 → 5 | `LinearScanWalker::split_before_usage`                | `<unknown>` |
|  -30.0% |    -3 | 0.6% → 0.5% |  10 → 7 | `IntervalWalker::walk_to`                             | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `ProjNode::is_CFG`                                    | `<unknown>` |
|  -30.0% |    -3 | 0.6% → 0.5% |  10 → 7 | `PhaseIdealLoop::build_loop_late`                     | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `ciReceiverTypeData::translate_receiver_data_from`    | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `RegionNode::Ideal`                                   | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `ciTypeFlow::Block::successors`                       | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `TypeInstPtr::hash`                                   | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `MethodLiveness::BasicBlock::compute_gen_kill_single` | `<unknown>` |

##### Ours

|  Change | Delta |           % | Samples | Function                                                              | Location                                                                                           |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `loadAllClassesFromJars`                                              | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                             |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `analyzeMainLoop`                                                     | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`                                    |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `getApplicability`                                                    | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver$ResolutionResult`                          |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `isSubtypeOf$default`                                                 | `org.jetbrains.kotlin.types.AbstractTypeChecker`                                                   |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `completeIsSubTypeOf`                                                 | `org.jetbrains.kotlin.types.AbstractTypeChecker`                                                   |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `transformStatementsIndexed`                                          | `org.jetbrains.kotlin.fir.expressions.FirExpressionUtilKt`                                         |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `possibleGetMethodNames`                                              | `org.jetbrains.kotlin.load.java.PropertiesConventionUtilKt`                                        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `copyTo$default`                                                      | `org.jetbrains.kotlin.ir.util.IrUtilsKt`                                                           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `addEdge$default`                                                     | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraphBuilder`                                 |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `mayHaveTopLevelClassifier`                                           | `org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`                                |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `tryToSetSourceForImplicitReceiver$tryToSetSourceForImplicitReceiver` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate`                                       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `invoke`                                                              | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl$$Lambda.0x000000e0015c5258`   |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `forEachArgument`                                                     | `org.jetbrains.kotlin.fir.analysis.cfa.FirCallsEffectAnalyzer`                                     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getArguments`                                                        | `org.jetbrains.kotlin.fir.expressions.FirEmptyArgumentList`                                        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `checkParameterBounds`                                                | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirExposedVisibilityDeclarationChecker`    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `deserializeClassToSymbol`                                            | `org.jetbrains.kotlin.fir.deserialization.ClassDeserializationKt`                                  |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `charAt`                                                              | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence`                                |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `processConstraintStorageFromAtom`                                    | `org.jetbrains.kotlin.fir.resolve.calls.candidate.CandidateFactoryKt`                              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getContext`                                                          | `org.jetbrains.kotlin.fir.builder.AbstractRawFirBuilder`                                           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `transform`                                                           | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |

##### Standard library

|  Change | Delta |           % | Samples | Function             | Location                                                |
| ------: | ----: | ----------: | ------: | -------------------- | ------------------------------------------------------- |
|  -85.7% |    -6 | 0.4% → 0.1% |   7 → 1 | `getNode`            | `java.util.HashMap`                                     |
|  -42.9% |    -3 | 0.4% → 0.3% |   7 → 4 | `sanitizeStackTrace` | `kotlin.jvm.internal.Intrinsics`                        |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `inflate`            | `java.util.zip.Inflater`                                |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `formatUnsignedInt`  | `java.lang.Integer`                                     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `mutableMapOf`       | `kotlin.collections.MapsKt__MapsKt`                     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getValue`           | `kotlin.SynchronizedLazyImpl`                           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `read`               | `java.util.zip.InflaterInputStream`                     |
|  -50.0% |    -1 |        0.1% |   2 → 1 | `nextNode`           | `java.util.HashMap$HashIterator`                        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `next`               | `java.util.HashMap$ValueIterator`                       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getInt`             | `jdk.internal.misc.ScopedMemoryAccess`                  |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>`             | `java.util.concurrent.locks.AbstractQueuedSynchronizer` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `generateInnerClass` | `java.lang.invoke.InnerClassLambdaMetafactory`          |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getPackageName`     | `java.lang.Class`                                       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `size`               | `java.util.Collections$SingletonSet`                    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `linkToTargetMethod` | `java.lang.invoke.LambdaForm$MH.0x000000e0015ec800`     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `decompress`         | `jdk.internal.jimage.ImageLocation`                     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `get`                | `java.util.concurrent.ConcurrentHashMap`                |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `parseInt`           | `java.lang.Integer`                                     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getShortUnaligned`  | `jdk.internal.misc.Unsafe`                              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `newInvokeSpecial`   | `java.lang.invoke.LambdaForm$DMH.0x000000e0015e4000`    |

##### JIT

|  Change | Delta |           % | Samples | Function               | Location    |
| ------: | ----: | ----------: | ------: | ---------------------- | ----------- |
| removed |    -5 | 0.3% → 0.0% |   5 → 0 | `zero_blocks`          | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0x)` | `<unknown>` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |            % |   Samples | Function                                         | Location                                                                                                                  |
| ------: | ----: | -----------: | --------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
|     new |  +348 | 0.0% → 26.7% |   0 → 348 | `invokeStatic`                                   | `java.lang.invoke.LambdaForm$DMH.0x0000007001008400`                                                                      |
|     new |  +348 | 0.0% → 26.7% |   0 → 348 | `invoke`                                         | `java.lang.invoke.LambdaForm$MH.0x0000007001009800`                                                                       |
| +566.7% |   +17 |  0.2% → 1.5% |    3 → 20 | `invoke`                                         | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x0000007001687c78` |
|  +41.0% |   +16 |  2.3% → 4.2% |   39 → 55 | `Matcher::match`                                 | `<unknown>`                                                                                                               |
|  +31.9% |   +15 |  2.8% → 4.8% |   47 → 62 | `Compile::optimize_loops`                        | `<unknown>`                                                                                                               |
|  +53.6% |   +15 |  1.7% → 3.3% |   28 → 43 | `Matcher::xform`                                 | `<unknown>`                                                                                                               |
|  +52.6% |   +10 |  1.1% → 2.2% |   19 → 29 | `tlv_get_addr`                                   | `<unknown>`                                                                                                               |
|   +8.2% |    +8 |  5.8% → 8.0% |  97 → 105 | `PhaseIdealLoop::build_and_optimize`             | `<unknown>`                                                                                                               |
|  +88.9% |    +8 |  0.5% → 1.3% |    9 → 17 | `nmethod::nmethod`                               | `<unknown>`                                                                                                               |
|  +50.0% |    +8 |  1.0% → 1.8% |   16 → 24 | `PhaseIdealLoop::build_loop_late_post_work`      | `<unknown>`                                                                                                               |
|   +7.1% |    +7 |  5.9% → 8.0% |  98 → 105 | `PhaseIdealLoop::PhaseIdealLoop`                 | `<unknown>`                                                                                                               |
|  +50.0% |    +7 |  0.8% → 1.6% |   14 → 21 | `nmethod::new_nmethod`                           | `<unknown>`                                                                                                               |
| +100.0% |    +7 |  0.4% → 1.1% |    7 → 14 | `Matcher::Label_Root`                            | `<unknown>`                                                                                                               |
|  +38.9% |    +7 |  1.1% → 1.9% |   18 → 25 | `Matcher::match_tree`                            | `<unknown>`                                                                                                               |
| +233.3% |    +7 |  0.2% → 0.8% |    3 → 10 | `LIR_Assembler::process_debug_info`              | `<unknown>`                                                                                                               |
| +140.0% |    +7 |  0.3% → 0.9% |    5 → 12 | `LIR_Assembler::record_non_safepoint_debug_info` | `<unknown>`                                                                                                               |
|  +87.5% |    +7 |  0.5% → 1.1% |    8 → 15 | `PhaseIdealLoop::build_loop_early`               | `<unknown>`                                                                                                               |
|   +5.2% |    +6 |  6.9% → 9.3% | 115 → 121 | `PhaseIdealLoop::optimize`                       | `<unknown>`                                                                                                               |
|  +11.3% |    +6 |  3.2% → 4.5% |   53 → 59 | `PhaseIterGVN::optimize`                         | `<unknown>`                                                                                                               |
| +100.0% |    +6 |  0.4% → 0.9% |    6 → 12 | `accept`                                         | `org.jetbrains.kotlin.ir.declarations.IrFile`                                                                             |

##### Native

|  Change | Delta |           % | Samples | Function                                               | Location    |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------ | ----------- |
|  +52.6% |   +10 | 1.1% → 2.2% | 19 → 29 | `tlv_get_addr`                                         | `<unknown>` |
|  +88.9% |    +8 | 0.5% → 1.3% |  9 → 17 | `nmethod::nmethod`                                     | `<unknown>` |
|  +50.0% |    +7 | 0.8% → 1.6% | 14 → 21 | `nmethod::new_nmethod`                                 | `<unknown>` |
| +200.0% |    +6 | 0.2% → 0.7% |   3 → 9 | `State::DFA`                                           | `<unknown>` |
| +200.0% |    +6 | 0.2% → 0.7% |   3 → 9 | `Arena::contains`                                      | `<unknown>` |
|  +62.5% |    +5 | 0.5% → 1.0% |  8 → 13 | `pthread_jit_write_protect_np`                         | `<unknown>` |
|  +40.0% |    +4 | 0.6% → 1.1% | 10 → 14 | `void G1CMTask::process_grey_task_entry<true>`         | `<unknown>` |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `__vfprintf`                                           | `<unknown>` |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `_vsnprintf`                                           | `<unknown>` |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `os::vsnprintf`                                        | `<unknown>` |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `klassVtable::initialize_vtable`                       | `<unknown>` |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `klassVtable::initialize_vtable_and_check_constraints` | `<unknown>` |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `Parse::build_exits`                                   | `<unknown>` |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `MethodData::initialize`                               | `<unknown>` |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `G1CollectedHeap::register_nmethod`                    | `<unknown>` |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `ClassFileParser::skip_over_field_signature`           | `<unknown>` |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `State::_sub_Op_ConI`                                  | `<unknown>` |
|  +15.8% |    +3 | 1.1% → 1.7% | 19 → 22 | `SymbolTable::lookup_only`                             | `<unknown>` |
|  +37.5% |    +3 | 0.5% → 0.8% |  8 → 11 | `G1CMBitMap::iterate`                                  | `<unknown>` |
|  +60.0% |    +3 | 0.3% → 0.6% |   5 → 8 | `G1CMTask::drain_local_queue`                          | `<unknown>` |

##### Compiler

|  Change | Delta |           % |   Samples | Function                                             | Location    |
| ------: | ----: | ----------: | --------: | ---------------------------------------------------- | ----------- |
|  +41.0% |   +16 | 2.3% → 4.2% |   39 → 55 | `Matcher::match`                                     | `<unknown>` |
|  +31.9% |   +15 | 2.8% → 4.8% |   47 → 62 | `Compile::optimize_loops`                            | `<unknown>` |
|  +53.6% |   +15 | 1.7% → 3.3% |   28 → 43 | `Matcher::xform`                                     | `<unknown>` |
|   +8.2% |    +8 | 5.8% → 8.0% |  97 → 105 | `PhaseIdealLoop::build_and_optimize`                 | `<unknown>` |
|  +50.0% |    +8 | 1.0% → 1.8% |   16 → 24 | `PhaseIdealLoop::build_loop_late_post_work`          | `<unknown>` |
|   +7.1% |    +7 | 5.9% → 8.0% |  98 → 105 | `PhaseIdealLoop::PhaseIdealLoop`                     | `<unknown>` |
| +100.0% |    +7 | 0.4% → 1.1% |    7 → 14 | `Matcher::Label_Root`                                | `<unknown>` |
|  +38.9% |    +7 | 1.1% → 1.9% |   18 → 25 | `Matcher::match_tree`                                | `<unknown>` |
| +233.3% |    +7 | 0.2% → 0.8% |    3 → 10 | `LIR_Assembler::process_debug_info`                  | `<unknown>` |
| +140.0% |    +7 | 0.3% → 0.9% |    5 → 12 | `LIR_Assembler::record_non_safepoint_debug_info`     | `<unknown>` |
|  +87.5% |    +7 | 0.5% → 1.1% |    8 → 15 | `PhaseIdealLoop::build_loop_early`                   | `<unknown>` |
|   +5.2% |    +6 | 6.9% → 9.3% | 115 → 121 | `PhaseIdealLoop::optimize`                           | `<unknown>` |
|  +11.3% |    +6 | 3.2% → 4.5% |   53 → 59 | `PhaseIterGVN::optimize`                             | `<unknown>` |
|  +21.7% |    +5 | 1.4% → 2.1% |   23 → 28 | `ciEnv::register_method`                             | `<unknown>` |
|     new |    +5 | 0.0% → 0.4% |     0 → 5 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `<unknown>` |
|     new |    +5 | 0.0% → 0.4% |     0 → 5 | `PhaseIdealLoop::compute_lca_of_uses`                | `<unknown>` |
| +400.0% |    +4 | 0.1% → 0.4% |     1 → 5 | `PhaseCFG::schedule_pinned_nodes`                    | `<unknown>` |
|  +14.3% |    +4 | 1.7% → 2.5% |   28 → 32 | `PhaseIdealLoop::build_loop_late`                    | `<unknown>` |
| +133.3% |    +4 | 0.2% → 0.5% |     3 → 7 | `LinearScan::compute_debug_info_for_scope`           | `<unknown>` |
|  +66.7% |    +4 | 0.4% → 0.8% |    6 → 10 | `LinearScan::build_intervals`                        | `<unknown>` |

##### Ours

|  Change | Delta |           % | Samples | Function                              | Location                                                                                                                  |
| ------: | ----: | ----------: | ------: | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| +566.7% |   +17 | 0.2% → 1.5% |  3 → 20 | `invoke`                              | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x0000007001687c78` |
| +100.0% |    +6 | 0.4% → 0.9% |  6 → 12 | `accept`                              | `org.jetbrains.kotlin.ir.declarations.IrFile`                                                                             |
| +300.0% |    +6 | 0.1% → 0.6% |   2 → 8 | `acceptChildren`                      | `org.jetbrains.kotlin.ir.declarations.IrPackageFragment`                                                                  |
|     new |    +6 | 0.0% → 0.5% |   0 → 6 | `acceptChildren`                      | `org.jetbrains.kotlin.ir.declarations.IrClass`                                                                            |
| +250.0% |    +5 | 0.1% → 0.5% |   2 → 7 | `visitAnonymousFunction`              | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                                         |
| +250.0% |    +5 | 0.1% → 0.5% |   2 → 7 | `visitAnonymousFunctionExpression`    | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                                         |
| +166.7% |    +5 | 0.2% → 0.6% |   3 → 8 | `accept`                              | `org.jetbrains.kotlin.fir.expressions.FirAnonymousFunctionExpression`                                                     |
| +166.7% |    +5 | 0.2% → 0.6% |   3 → 8 | `fixVariable`                         | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`                                                    |
| +166.7% |    +5 | 0.2% → 0.6% |   3 → 8 | `fixVariableIfReady`                  | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`                                                    |
| +166.7% |    +5 | 0.2% → 0.6% |   3 → 8 | `mapSignature`                        | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`                                                          |
| +166.7% |    +5 | 0.2% → 0.6% |   3 → 8 | `mapSignature$default`                | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`                                                          |
|     new |    +5 | 0.0% → 0.4% |   0 → 5 | `writeParameter`                      | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`                                                          |
|  +50.0% |    +4 | 0.5% → 0.9% |  8 → 12 | `processGivenConstraints`             | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                                              |
|  +50.0% |    +4 | 0.5% → 0.9% |  8 → 12 | `processConstraintsIgnoringForksData` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                                              |
|  +50.0% |    +4 | 0.5% → 0.9% |  8 → 12 | `processConstraints`                  | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                                              |
|  +66.7% |    +4 | 0.4% → 0.8% |  6 → 10 | `acceptChildren`                      | `org.jetbrains.kotlin.fir.expressions.impl.FirResolvedArgumentList`                                                       |
|  +66.7% |    +4 | 0.4% → 0.8% |  6 → 10 | `visitArgumentList`                   | `org.jetbrains.kotlin.fir.visitors.FirVisitor`                                                                            |
|  +66.7% |    +4 | 0.4% → 0.8% |  6 → 10 | `accept`                              | `org.jetbrains.kotlin.fir.expressions.FirArgumentList`                                                                    |
| +133.3% |    +4 | 0.2% → 0.5% |   3 → 7 | `visitVariable`                       | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                                                              |
| +100.0% |    +4 | 0.2% → 0.6% |   4 → 8 | `compileInlineFunction`               | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`                                                      |

##### Standard library

|  Change | Delta |            % | Samples | Function                      | Location                                             |
| ------: | ----: | -----------: | ------: | ----------------------------- | ---------------------------------------------------- |
|     new |  +348 | 0.0% → 26.7% | 0 → 348 | `invokeStatic`                | `java.lang.invoke.LambdaForm$DMH.0x0000007001008400` |
|     new |  +348 | 0.0% → 26.7% | 0 → 348 | `invoke`                      | `java.lang.invoke.LambdaForm$MH.0x0000007001009800`  |
|     new |    +5 |  0.0% → 0.4% |   0 → 5 | `linkToTargetMethod`          | `java.lang.invoke.Invokers$Holder`                   |
|     new |    +4 |  0.0% → 0.3% |   0 → 4 | `newInvokeSpecial`            | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |    +4 |  0.0% → 0.3% |   0 → 4 | `invokeStatic`                | `java.lang.invoke.LambdaForm$DMH.0x0000007001234000` |
| +100.0% |    +2 |  0.1% → 0.3% |   2 → 4 | `append`                      | `java.lang.StringBuilder`                            |
| +100.0% |    +2 |  0.1% → 0.3% |   2 → 4 | `invokeStatic`                | `java.lang.invoke.DirectMethodHandle$Holder`         |
| +100.0% |    +2 |  0.1% → 0.3% |   2 → 4 | `parseAnnotation2`            | `sun.reflect.annotation.AnnotationParser`            |
| +100.0% |    +2 |  0.1% → 0.3% |   2 → 4 | `parseAnnotations2`           | `sun.reflect.annotation.AnnotationParser`            |
| +100.0% |    +2 |  0.1% → 0.3% |   2 → 4 | `parseAnnotations`            | `sun.reflect.annotation.AnnotationParser`            |
| +100.0% |    +2 |  0.1% → 0.3% |   2 → 4 | `compileToBytecode`           | `java.lang.invoke.LambdaForm`                        |
| +200.0% |    +2 |  0.1% → 0.2% |   1 → 3 | `addMethod`                   | `java.lang.invoke.InvokerBytecodeGenerator`          |
| +200.0% |    +2 |  0.1% → 0.2% |   1 → 3 | `generateCustomizedCodeBytes` | `java.lang.invoke.InvokerBytecodeGenerator`          |
|     new |    +2 |  0.0% → 0.2% |   0 → 2 | `emitStaticInvoke`            | `java.lang.invoke.InvokerBytecodeGenerator`          |
|     new |    +2 |  0.0% → 0.2% |   0 → 2 | `toString`                    | `java.lang.Long`                                     |
|     new |    +2 |  0.0% → 0.2% |   0 → 2 | `collectionSizeOrDefault`     | `kotlin.collections.CollectionsKt__IterablesKt`      |
|     new |    +2 |  0.0% → 0.2% |   0 → 2 | `makePairwiseConvertByEditor` | `java.lang.invoke.MethodHandleImpl`                  |
|     new |    +2 |  0.0% → 0.2% |   0 → 2 | `makePairwiseConvert`         | `java.lang.invoke.MethodHandleImpl`                  |
|     new |    +2 |  0.0% → 0.2% |   0 → 2 | `asTypeUncached`              | `java.lang.invoke.MethodHandle`                      |
|     new |    +2 |  0.0% → 0.2% |   0 → 2 | `asType`                      | `java.lang.invoke.MethodHandle`                      |

##### JIT

|  Change | Delta |           % | Samples | Function                 | Location    |
| ------: | ----: | ----------: | ------: | ------------------------ | ----------- |
| +600.0% |    +6 | 0.1% → 0.5% |   1 → 7 | `I2C/C2I adapters(0xb)`  | `<unknown>` |
|  +75.0% |    +3 | 0.2% → 0.5% |   4 → 7 | `I2C/C2I adapters(0xbb)` | `<unknown>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `I2C/C2I adapters(0xba)` | `<unknown>` |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `itable stub`            | `<unknown>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `vtable stub`            | `<unknown>` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |     Samples | Function                                   | Location                                                |
| ------: | ----: | ------------: | ----------: | ------------------------------------------ | ------------------------------------------------------- |
| removed |  -416 |  24.9% → 0.0% |     416 → 0 | `invokeStatic`                             | `java.lang.invoke.LambdaForm$DMH.0x000000e001008000`    |
| removed |  -416 |  24.9% → 0.0% |     416 → 0 | `invoke`                                   | `java.lang.invoke.LambdaForm$MH.0x000000e001009400`     |
|  -21.7% |  -240 | 66.2% → 66.4% | 1,107 → 867 | `thread_native_entry`                      | `<unknown>`                                             |
|  -21.7% |  -240 | 66.3% → 66.5% | 1,108 → 868 | `_pthread_start`                           | `<unknown>`                                             |
|  -21.7% |  -240 | 66.3% → 66.5% | 1,108 → 868 | `thread_start`                             | `<unknown>`                                             |
|  -21.6% |  -239 | 66.1% → 66.4% | 1,106 → 867 | `Thread::call_run`                         | `<unknown>`                                             |
|  -15.9% |  -154 | 57.8% → 62.2% |   966 → 812 | `JavaThread::thread_main_inner`            | `<unknown>`                                             |
|  -15.3% |  -147 | 57.4% → 62.2% |   959 → 812 | `CompileBroker::compiler_thread_loop`      | `<unknown>`                                             |
|  -22.8% |  -125 | 32.8% → 32.4% |   548 → 423 | `run`                                      | `org.jetbrains.kotlin.preloading.Preloader`             |
|  -22.8% |  -125 | 32.8% → 32.4% |   548 → 423 | `main`                                     | `org.jetbrains.kotlin.preloading.Preloader`             |
|  -12.8% |  -117 | 54.8% → 61.2% |   916 → 799 | `CompileBroker::invoke_compiler_on_method` | `<unknown>`                                             |
|  -16.5% |   -69 | 24.9% → 26.7% |   417 → 348 | `invokeImpl`                               | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
|  -16.5% |   -69 | 24.9% → 26.7% |   417 → 348 | `invoke`                                   | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
|  -16.5% |   -69 | 24.9% → 26.7% |   417 → 348 | `invoke`                                   | `java.lang.reflect.Method`                              |
|  -16.4% |   -68 | 24.8% → 26.6% |   415 → 347 | `doMain`                                   | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  -16.3% |   -68 | 24.9% → 26.7% |   416 → 348 | `main`                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
|  -16.3% |   -68 | 24.9% → 26.7% |   416 → 348 | `main`                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
|  -16.3% |   -68 | 24.9% → 26.7% |   416 → 348 | `invokeExact_MT`                           | `java.lang.invoke.Invokers$Holder`                      |
|  -16.2% |   -67 | 24.7% → 26.5% |   413 → 346 | `exec`                                     | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
|  -16.2% |   -67 | 24.7% → 26.5% |   413 → 346 | `doMainNoExit`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### Native

| Change | Delta |             % |     Samples | Function                                       | Location    |
| -----: | ----: | ------------: | ----------: | ---------------------------------------------- | ----------- |
| -21.7% |  -240 | 66.2% → 66.4% | 1,107 → 867 | `thread_native_entry`                          | `<unknown>` |
| -21.7% |  -240 | 66.3% → 66.5% | 1,108 → 868 | `_pthread_start`                               | `<unknown>` |
| -21.7% |  -240 | 66.3% → 66.5% | 1,108 → 868 | `thread_start`                                 | `<unknown>` |
| -21.6% |  -239 | 66.1% → 66.4% | 1,106 → 867 | `Thread::call_run`                             | `<unknown>` |
| -15.9% |  -154 | 57.8% → 62.2% |   966 → 812 | `JavaThread::thread_main_inner`                | `<unknown>` |
| -83.1% |   -64 |   4.6% → 1.0% |     77 → 13 | `__psynch_mutexwait`                           | `<unknown>` |
| -83.1% |   -64 |   4.6% → 1.0% |     77 → 13 | `_pthread_mutex_firstfit_lock_slow`            | `<unknown>` |
| -54.4% |   -62 |   6.8% → 4.0% |    114 → 52 | `WorkerThread::run`                            | `<unknown>` |
| -80.6% |   -58 |   4.3% → 1.1% |     72 → 14 | `PlatformMonitor::wait`                        | `<unknown>` |
| -80.6% |   -50 |   3.7% → 0.9% |     62 → 12 | `__psynch_cvwait`                              | `<unknown>` |
| -15.1% |   -41 | 16.3% → 17.7% |   272 → 231 | `Compiler::compile_method`                     | `<unknown>` |
| -72.2% |   -39 |   3.2% → 1.1% |     54 → 15 | `G1EvacuateRegionsBaseTask::work`              | `<unknown>` |
| -86.1% |   -31 |   2.2% → 0.4% |      36 → 5 | `Mutex::lock`                                  | `<unknown>` |
| -35.7% |   -30 |   5.0% → 4.1% |     84 → 54 | `Parse::do_all_blocks`                         | `<unknown>` |
| -73.2% |   -30 |   2.5% → 0.8% |     41 → 11 | `Monitor::wait`                                | `<unknown>` |
| -34.9% |   -29 |   5.0% → 4.1% |     83 → 54 | `Parse::do_one_block`                          | `<unknown>` |
| -33.7% |   -29 |   5.1% → 4.4% |     86 → 57 | `Parse::Parse`                                 | `<unknown>` |
| -33.7% |   -29 |   5.1% → 4.4% |     86 → 57 | `ParseGenerator::generate`                     | `<unknown>` |
| -76.3% |   -29 |   2.3% → 0.7% |      38 → 9 | `G1ParEvacuateFollowersClosure::do_void`       | `<unknown>` |
| -76.3% |   -29 |   2.3% → 0.7% |      38 → 9 | `G1EvacuateRegionsTask::evacuate_live_objects` | `<unknown>` |

##### Compiler

| Change | Delta |             % |   Samples | Function                                    | Location    |
| -----: | ----: | ------------: | --------: | ------------------------------------------- | ----------- |
| -15.3% |  -147 | 57.4% → 62.2% | 959 → 812 | `CompileBroker::compiler_thread_loop`       | `<unknown>` |
| -12.8% |  -117 | 54.8% → 61.2% | 916 → 799 | `CompileBroker::invoke_compiler_on_method`  | `<unknown>` |
| -10.6% |   -66 | 37.3% → 42.8% | 624 → 558 | `C2Compiler::compile_method`                | `<unknown>` |
| -10.5% |   -65 | 37.1% → 42.6% | 621 → 556 | `Compile::Compile`                          | `<unknown>` |
| -18.4% |   -46 | 15.0% → 15.6% | 250 → 204 | `Compilation::compile_java_method`          | `<unknown>` |
| -15.1% |   -41 | 16.2% → 17.6% | 271 → 230 | `Compilation::Compilation`                  | `<unknown>` |
| -14.8% |   -40 | 16.1% → 17.6% | 270 → 230 | `Compilation::compile_method`               | `<unknown>` |
| -10.5% |   -33 | 18.7% → 21.5% | 313 → 280 | `Compile::Code_Gen`                         | `<unknown>` |
| -68.3% |   -28 |   2.5% → 1.0% |   41 → 13 | `CompileQueue::get`                         | `<unknown>` |
| -28.7% |   -23 |   4.8% → 4.4% |   80 → 57 | `GraphBuilder::GraphBuilder`                | `<unknown>` |
| -22.5% |   -23 |          6.1% |  102 → 79 | `Compilation::build_hir`                    | `<unknown>` |
| -77.8% |   -21 |   1.6% → 0.5% |    27 → 6 | `CompilationPolicy::event`                  | `<unknown>` |
| -26.7% |   -20 |   4.5% → 4.2% |   75 → 55 | `GraphBuilder::iterate_all_blocks`          | `<unknown>` |
| -83.3% |   -20 |   1.4% → 0.3% |    24 → 4 | `CompileBroker::compile_method`             | `<unknown>` |
| -26.0% |   -19 |   4.4% → 4.1% |   73 → 54 | `GraphBuilder::iterate_bytecodes_for_block` | `<unknown>` |
| -85.7% |   -18 |   1.3% → 0.2% |    21 → 3 | `CompileBroker::compile_method_base`        | `<unknown>` |
| -41.9% |   -18 |   2.6% → 1.9% |   43 → 25 | `IntervalWalker::walk_to`                   | `<unknown>` |
| -48.6% |   -18 |   2.2% → 1.5% |   37 → 19 | `ciBytecodeStream::get_method`              | `<unknown>` |
| -16.0% |   -16 |   6.0% → 6.4% |  100 → 84 | `Compilation::emit_lir`                     | `<unknown>` |
| -37.5% |   -15 |   2.4% → 1.9% |   40 → 25 | `LinearScan::allocate_registers`            | `<unknown>` |

##### Ours

| Change | Delta |             % |   Samples | Function                                   | Location                                                    |
| -----: | ----: | ------------: | --------: | ------------------------------------------ | ----------------------------------------------------------- |
| -22.8% |  -125 | 32.8% → 32.4% | 548 → 423 | `run`                                      | `org.jetbrains.kotlin.preloading.Preloader`                 |
| -22.8% |  -125 | 32.8% → 32.4% | 548 → 423 | `main`                                     | `org.jetbrains.kotlin.preloading.Preloader`                 |
| -16.4% |   -68 | 24.8% → 26.6% | 415 → 347 | `doMain`                                   | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`     |
| -16.3% |   -68 | 24.9% → 26.7% | 416 → 348 | `main`                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`      |
| -16.3% |   -68 | 24.9% → 26.7% | 416 → 348 | `main`                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                |
| -16.2% |   -67 | 24.7% → 26.5% | 413 → 346 | `exec`                                     | `org.jetbrains.kotlin.cli.common.CLICompiler`               |
| -16.2% |   -67 | 24.7% → 26.5% | 413 → 346 | `doMainNoExit`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`     |
| -16.2% |   -67 | 24.8% → 26.6% | 414 → 347 | `doMainNoExit$default`                     | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`     |
| -16.1% |   -63 | 23.4% → 25.2% | 392 → 329 | `runPhasedPipeline`                        | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`     |
| -15.7% |   -62 | 23.6% → 25.4% | 394 → 332 | `doExecutePhased`                          | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                |
| -15.7% |   -62 | 23.6% → 25.4% | 394 → 332 | `execImpl`                                 | `org.jetbrains.kotlin.cli.common.CLICompiler`               |
| -15.6% |   -61 | 23.4% → 25.4% | 392 → 331 | `executeAndReturnPipeLineArtifact`         | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`     |
| -15.6% |   -61 | 23.4% → 25.4% | 392 → 331 | `executeAndReturnPipeLineArtifact$default` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`     |
| -15.6% |   -61 | 23.4% → 25.4% | 392 → 331 | `execute`                                  | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`     |
| -15.5% |   -60 | 23.2% → 25.1% | 388 → 328 | `phaseBody`                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`           |
| -15.5% |   -60 | 23.2% → 25.1% | 388 → 328 | `invoke`                                   | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`     |
| -15.5% |   -60 | 23.2% → 25.1% | 388 → 328 | `invoke`                                   | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase` |
| -15.5% |   -60 | 23.2% → 25.1% | 388 → 328 | `invokeToplevel`                           | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`        |
| -43.1% |   -56 |   7.8% → 5.7% |  130 → 74 | `loadAllClassesFromJars`                   | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`      |
| -43.1% |   -56 |   7.8% → 5.7% |  130 → 74 | `preloadClasses`                           | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`      |

##### Standard library

|  Change | Delta |             % |   Samples | Function            | Location                                             |
| ------: | ----: | ------------: | --------: | ------------------- | ---------------------------------------------------- |
| removed |  -416 |  24.9% → 0.0% |   416 → 0 | `invokeStatic`      | `java.lang.invoke.LambdaForm$DMH.0x000000e001008000` |
| removed |  -416 |  24.9% → 0.0% |   416 → 0 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x000000e001009400`  |
|  -16.5% |   -69 | 24.9% → 26.7% | 417 → 348 | `invokeImpl`        | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  -16.5% |   -69 | 24.9% → 26.7% | 417 → 348 | `invoke`            | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  -16.5% |   -69 | 24.9% → 26.7% | 417 → 348 | `invoke`            | `java.lang.reflect.Method`                           |
|  -16.3% |   -68 | 24.9% → 26.7% | 416 → 348 | `invokeExact_MT`    | `java.lang.invoke.Invokers$Holder`                   |
|  -28.9% |   -28 |   5.8% → 5.3% |   97 → 69 | `read`              | `java.util.zip.ZipInputStream`                       |
|  -28.9% |   -28 |   5.8% → 5.3% |   97 → 69 | `read`              | `java.io.FilterInputStream`                          |
|  -27.8% |   -27 |   5.8% → 5.4% |   97 → 70 | `read`              | `java.util.zip.InflaterInputStream`                  |
|  -27.4% |   -26 |   5.7% → 5.3% |   95 → 69 | `inflate`           | `java.util.zip.Inflater`                             |
|  -28.7% |   -25 |   5.2% → 4.8% |   87 → 62 | `loadClass`         | `java.lang.ClassLoader`                              |
|  -25.8% |   -24 |   5.6% → 5.3% |   93 → 69 | `inflateBytesBytes` | `java.util.zip.Inflater`                             |
|  -23.4% |   -18 |   4.6% → 4.5% |   77 → 59 | `defineClass`       | `java.lang.ClassLoader`                              |
|  -21.3% |   -16 |          4.5% |   75 → 59 | `defineClass1`      | `java.lang.ClassLoader`                              |
|  -42.3% |   -11 |   1.6% → 1.1% |   26 → 15 | `getValue`          | `kotlin.SynchronizedLazyImpl`                        |
| removed |    -7 |   0.4% → 0.0% |     7 → 0 | `<init>`            | `java.io.ByteArrayOutputStream`                      |
| removed |    -7 |   0.4% → 0.0% |     7 → 0 | `invokeStatic`      | `java.lang.invoke.LambdaForm$DMH.0x000000e001230000` |
|  -35.3% |    -6 |   1.0% → 0.8% |   17 → 11 | `getValue`          | `kotlin.UnsafeLazyImpl`                              |
|  -75.0% |    -6 |   0.5% → 0.2% |     8 → 2 | `toByteArray`       | `java.io.ByteArrayOutputStream`                      |
|  -85.7% |    -6 |   0.4% → 0.1% |     7 → 1 | `getNode`           | `java.util.HashMap`                                  |

##### JIT

|  Change | Delta |           % | Samples | Function               | Location    |
| ------: | ----: | ----------: | ------: | ---------------------- | ----------- |
| removed |    -5 | 0.3% → 0.0% |   5 → 0 | `zero_blocks`          | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0x)` | `<unknown>` |
