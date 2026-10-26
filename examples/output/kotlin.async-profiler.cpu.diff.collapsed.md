# Sampling profile diff

Collected 1,672 → 1,305 samples (-367 samples, -21.9%).

| Category          | Change | Delta |             % |   Samples |
| ----------------- | -----: | ----: | ------------: | --------: |
| Native            | -34.2% |  -263 | 45.9% → 38.7% | 768 → 505 |
| Compiler          |  -9.3% |   -61 | 39.4% → 45.7% | 658 → 597 |
| Ours              | -16.1% |   -24 |   8.9% → 9.6% | 149 → 125 |
| Standard library  | -29.3% |   -24 |   4.9% → 4.4% |   82 → 58 |
| JIT               | +26.7% |    +4 |   0.9% → 1.5% |   15 → 19 |
| Garbage collector |    new |    +1 |   0.0% → 0.1% |     0 → 1 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |           % | Samples | Function                                                                                       | Location    |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------- | ----------- |
|  +52.6% |   +10 | 1.1% → 2.2% | 19 → 29 | `tlv_get_addr`                                                                                 | `<unknown>` |
| +200.0% |    +6 | 0.2% → 0.7% |   3 → 9 | `Arena::contains`                                                                              | `<unknown>` |
|     new |    +5 | 0.0% → 0.4% |   0 → 5 | `PhaseIdealLoop::split_if_with_blocks`                                                         | `<unknown>` |
|  +62.5% |    +5 | 0.5% → 1.0% |  8 → 13 | `pthread_jit_write_protect_np`                                                                 | `<unknown>` |
|     new |    +5 | 0.0% → 0.4% |   0 → 5 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal`                                           | `<unknown>` |
|  +36.4% |    +4 | 0.7% → 1.1% | 11 → 15 | `PhaseChaitin::gather_lrg_masks`                                                               | `<unknown>` |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `PhaseCFG::schedule_pinned_nodes`                                                              | `<unknown>` |
| +133.3% |    +4 | 0.2% → 0.5% |   3 → 7 | `Matcher::match_tree`                                                                          | `<unknown>` |
|  +57.1% |    +4 | 0.4% → 0.8% |  7 → 11 | `PhaseIdealLoop::build_loop_early`                                                             | `<unknown>` |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `I2C/C2I adapters(0xbb)`                                                                       | `<unknown>` |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `Scheduling::ComputeUseCount`                                                                  | `<unknown>` |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `ClassFileParser::skip_over_field_signature`                                                   | `<unknown>` |
|  +75.0% |    +3 | 0.2% → 0.5% |   4 → 7 | `PhaseIdealLoop::build_loop_tree`                                                              | `<unknown>` |
| +100.0% |    +3 | 0.2% → 0.5% |   3 → 6 | `Matcher::xform`                                                                               | `<unknown>` |
|  +60.0% |    +3 | 0.3% → 0.6% |   5 → 8 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `<unknown>` |
|  +60.0% |    +3 | 0.3% → 0.6% |   5 → 8 | `PhaseChaitin::post_allocate_copy_removal`                                                     | `<unknown>` |
| +150.0% |    +3 | 0.1% → 0.4% |   2 → 5 | `PhaseAggressiveCoalesce::insert_copies`                                                       | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep`                                                  | `<unknown>` |
|  +75.0% |    +3 | 0.2% → 0.5% |   4 → 7 | `Matcher::find_shared`                                                                         | `<unknown>` |
|  +75.0% |    +3 | 0.2% → 0.5% |   4 → 7 | `I2C/C2I adapters(0xb)`                                                                        | `<unknown>` |

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
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `I2C/C2I adapters(0xbb)` | `<unknown>` |
|  +75.0% |    +3 | 0.2% → 0.5% |   4 → 7 | `I2C/C2I adapters(0xb)`  | `<unknown>` |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `I2C/C2I adapters`       | `<unknown>` |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `itable stub`            | `<unknown>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `vtable stub`            | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

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
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `invoke`                                                              | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl$$Lambda`                      |
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
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `linkToTargetMethod` | `java.lang.invoke.LambdaForm$MH`                        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `decompress`         | `jdk.internal.jimage.ImageLocation`                     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `get`                | `java.util.concurrent.ConcurrentHashMap`                |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `parseInt`           | `java.lang.Integer`                                     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getShortUnaligned`  | `jdk.internal.misc.Unsafe`                              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `newInvokeSpecial`   | `java.lang.invoke.LambdaForm$DMH`                       |

##### JIT

|  Change | Delta |           % | Samples | Function               | Location    |
| ------: | ----: | ----------: | ------: | ---------------------- | ----------- |
| removed |    -5 | 0.3% → 0.0% |   5 → 0 | `zero_blocks`          | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0x)` | `<unknown>` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `tlv_get_addr` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                             | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------------- | ----------- |
|     new |    +3 | 0.0% → 10.3% |   0 → 3 | `PhaseChaitin::build_ifg_physical` | `<unknown>` |
|     new |    +2 |  0.0% → 6.9% |   0 → 2 | `TypeInstPtr::add_offset`          | `<unknown>` |
| removed |    -1 |  5.3% → 0.0% |   1 → 0 | `LIRGenerator::do_StoreField`      | `<unknown>` |
| removed |    -1 |  5.3% → 0.0% |   1 → 0 | `GraphKit::make_slow_call_ex`      | `<unknown>` |
| removed |    -1 |  5.3% → 0.0% |   1 → 0 | `PhaseValues::uncached_makecon`    | `<unknown>` |

##### `Arena::contains` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller           | Location    |
| ------: | ----: | -----: | ------: | ---------------- | ----------- |
| +200.0% |    +6 | 100.0% |   3 → 9 | `Matcher::xform` | `<unknown>` |

##### `PhaseIdealLoop::split_if_with_blocks` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                               | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------ | ----------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                          | Location                                                  |
| ------: | ----: | -----------: | ------: | ------------------------------- | --------------------------------------------------------- |
|     new |    +2 | 0.0% → 15.4% |   0 → 2 | `JVM_IHashCode`                 | `<unknown>`                                               |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `<clinit>`                      | `org.jetbrains.kotlin.fir.analysis.diagnostics.FirErrors` |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `JVM_Clone`                     | `<unknown>`                                               |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `Runtime1::counter_overflow`    | `<unknown>`                                               |
|     new |    +1 |  0.0% → 7.7% |   0 → 1 | `InterpreterRuntime::anewarray` | `<unknown>`                                               |

##### `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                        | Location    |
| -----: | ----: | -----------: | ------: | --------------------------------------------- | ----------- |
|    new |    +4 | 0.0% → 80.0% |   0 → 4 | `PhaseIdealLoop::compute_lca_of_uses`         | `<unknown>` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `<unknown>` |

##### `PhaseChaitin::gather_lrg_masks` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                            | Location    |
| -----: | ----: | -----: | ------: | --------------------------------- | ----------- |
| +36.4% |    +4 | 100.0% | 11 → 15 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseCFG::schedule_pinned_nodes` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                         | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------ | ----------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `PhaseCFG::global_code_motion` | `<unknown>` |

##### `Matcher::match_tree` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                | Location    |
| ------: | ----: | -------------: | ------: | --------------------- | ----------- |
| +100.0% |    +3 | 100.0% → 85.7% |   3 → 6 | `Matcher::xform`      | `<unknown>` |
|     new |    +1 |   0.0% → 14.3% |   0 → 1 | `Matcher::match_sfpt` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_early` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                               | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------ | ----------- |
| +57.1% |    +4 | 100.0% |  7 → 11 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                    | Location                                                                                  |
| -----: | ----: | -----------: | ------: | ------------------------- | ----------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `parseMethodDescription`  | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaMethodBase$Companion` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `isInplaceCallEndMarker`  | `org.jetbrains.kotlin.codegen.inline.InlineArgumentsInPlaceKt`                            |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `data$lambda$0`           | `kotlin.reflect.jvm.internal.KClassImpl`                                                  |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `childContext$default`    | `org.jetbrains.kotlin.fir.deserialization.FirDeserializationContext`                      |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `buildSmartCastStatement` | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`                                |

##### `Scheduling::ComputeUseCount` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                     | Location    |
| -----: | ----: | ------------: | ------: | -------------------------- | ----------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `Scheduling::DoScheduling` | `<unknown>` |

##### `ClassFileParser::skip_over_field_signature` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                           | Location    |
| -----: | ----: | -----------: | ------: | ------------------------------------------------ | ----------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `ClassFileParser::parse_localvariable_table`     | `<unknown>` |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `ClassFileParser::verify_legal_method_signature` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_tree` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                               | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------ | ----------- |
| +75.0% |    +3 | 100.0% |   4 → 7 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `Matcher::xform` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller           | Location    |
| ------: | ----: | -----: | ------: | ---------------- | ----------- |
| +100.0% |    +3 | 100.0% |   3 → 6 | `Matcher::match` | `<unknown>` |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                         | Location    |
| -----: | ----: | -----: | ------: | ---------------------------------------------- | ----------- |
| +60.0% |    +3 | 100.0% |   5 → 8 | `void G1CMTask::process_grey_task_entry<true>` | `<unknown>` |

##### `PhaseChaitin::post_allocate_copy_removal` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                            | Location    |
| -----: | ----: | -----: | ------: | --------------------------------- | ----------- |
| +60.0% |    +3 | 100.0% |   5 → 8 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseAggressiveCoalesce::insert_copies` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                            | Location    |
| ------: | ----: | -----: | ------: | --------------------------------- | ----------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseIdealLoop::get_late_ctrl_with_anti_dep` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                      | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------- | ----------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |

##### `Matcher::find_shared` (`<unknown>`)

| Change | Delta |      % | Samples | Caller           | Location    |
| -----: | ----: | -----: | ------: | ---------------- | ----------- |
| +75.0% |    +3 | 100.0% |   4 → 7 | `Matcher::match` | `<unknown>` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                    | Location                                                                             |
| ------: | ----: | -----------: | ------: | ------------------------- | ------------------------------------------------------------------------------------ |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `processPropertiesByName` | `org.jetbrains.kotlin.fir.resolve.calls.tower.DispatchReceiverMemberScopeTowerLevel` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `joinFlow`                | `org.jetbrains.kotlin.fir.resolve.dfa.LogicSystem`                                   |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `leaveTemps`              | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`                           |
|     new |    +1 | 0.0% → 14.3% |   0 → 1 | `<init>`                  | `org.jetbrains.kotlin.resolve.constants.AnnotationValue`                             |
|     new |    +1 | 0.0% → 14.3% |   0 → 1 | `isPrimitiveType`         | `org.jetbrains.kotlin.backend.jvm.mapping.IrTypeCheckerContextForTypeMapping`        |

##### `__vfprintf` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller       | Location    |
| ------: | ----: | -----: | ------: | ------------ | ----------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `_vsnprintf` | `<unknown>` |

##### `SymbolTable::do_lookup` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                         | Location    |
| -----: | ----: | ------------: | ------: | ---------------------------------------------- | ----------- |
| +70.0% |    +7 | 50.0% → 77.3% | 10 → 17 | `SymbolTable::lookup_only`                     | `<unknown>` |
| -66.7% |    -4 |  30.0% → 9.1% |   6 → 2 | `ClassFileParser::parse_constant_pool_entries` | `<unknown>` |
| -25.0% |    -1 | 20.0% → 13.6% |   4 → 3 | `SymbolTable::new_symbol`                      | `<unknown>` |

##### `ClassFileParser::parse_constant_pool_entries` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                 | Location    |
| ------: | ----: | -----: | ------: | -------------------------------------- | ----------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `ClassFileParser::parse_constant_pool` | `<unknown>` |

##### `LinkResolver::resolve_invoke` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                   | Location    |
| -----: | ----: | -----------: | ------: | ---------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `SharedRuntime::find_callee_info_helper` | `<unknown>` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `InterpreterRuntime::resolve_invoke`     | `<unknown>` |

##### `inflate_table` (`<unknown>`)

| Change | Delta |      % | Samples | Caller    | Location    |
| -----: | ----: | -----: | ------: | --------- | ----------- |
| +25.0% |    +2 | 100.0% |  8 → 10 | `inflate` | `<unknown>` |

##### `ClassFileParser::parse_method` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                           | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------- | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `ClassFileParser::parse_methods` | `<unknown>` |

##### `_platform_memchr` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                           | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `StackMapFrame::set_locals_from_arg`                             | `<unknown>` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `SignatureStream::SignatureStream`                               | `<unknown>` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `SignatureIterator::return_type`                                 | `<unknown>` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `void SignatureIterator::do_parameters_on<ArgumentSizeComputer>` | `<unknown>` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                             | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | ----------- |
| +500.0% |    +5 |  8.3% → 42.9% |   1 → 6 | `DebugInformationRecorder::serialize_scope_values` | `<unknown>` |
|  -27.3% |    -3 | 91.7% → 57.1% |  11 → 8 | `DebugInformationRecorder::describe_scope`         | `<unknown>` |

##### `FieldInfoReader::read_field_info` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                             | Location    |
| ------: | ----: | -------------: | ------: | ---------------------------------- | ----------- |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `InstanceKlass::find_local_field`  | `<unknown>` |
|     new |    +1 |   0.0% → 33.3% |   0 → 1 | `JavaFieldStream::JavaFieldStream` | `<unknown>` |

##### `ImmutableOopMap::update_register_map` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                             | Location    |
| ------: | ----: | -----: | ------: | ---------------------------------- | ----------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `frame::sender_for_compiled_frame` | `<unknown>` |

##### `nmethod::oops_do` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                     | Location    |
| -----: | ----: | -----------: | ------: | ------------------------------------------ | ----------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `BarrierSetNMethod::nmethod_entry_barrier` | `<unknown>` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `G1CollectedHeap::register_nmethod`        | `<unknown>` |

##### `pthread_mutex_lock` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------- | ----------- |
|     new |    +3 | 0.0% → 100.0% |   0 → 3 | `Mutex::lock_without_safepoint_check` | `<unknown>` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ThreadCritical::ThreadCritical`      | `<unknown>` |

##### `klassVtable::update_inherited_vtable` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                           | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------- | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `klassVtable::initialize_vtable` | `<unknown>` |

##### `MoveResolver::resolve_mappings` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                          | Location    |
| -----: | ----: | -----------: | ------: | ------------------------------- | ----------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `LinearScan::resolve_data_flow` | `<unknown>` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `LinearScanWalker::insert_move` | `<unknown>` |

##### `nmethod::stub_end` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                      | Location    |
| -----: | ----: | ------------: | ------: | --------------------------- | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `RelocIterator::initialize` | `<unknown>` |

##### `Node_Backward_Iterator::next` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                         | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------ | ----------- |
| +100.0% |    +2 | 50.0% → 57.1% |   2 → 4 | `PhaseCFG::schedule_late`      | `<unknown>` |
|  +50.0% |    +1 | 50.0% → 42.9% |   2 → 3 | `PhaseCFG::global_code_motion` | `<unknown>` |

##### `LinearScan::eliminate_spill_moves` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                       | Location    |
| ------: | ----: | -----: | ------: | ---------------------------- | ----------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `LinearScan::do_linear_scan` | `<unknown>` |

##### `PhaseIFG::SquareUp` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                            | Location    |
| -----: | ----: | ------------: | ------: | --------------------------------- | ----------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `Node::add_req` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                             | Location    |
| -----: | ----: | -----------: | ------: | ---------------------------------- | ----------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `Parse::return_current`            | `<unknown>` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `PhaseChaitin::get_spillcopy_wide` | `<unknown>` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `MergeMemNode::iteration_setup`    | `<unknown>` |

##### `RegionNode::hash` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                   | Location    |
| -----: | ----: | ------------: | ------: | ------------------------ | ----------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `PhaseIterGVN::optimize` | `<unknown>` |

##### `PhaseChaitin::Register_Allocate` (`<unknown>`)

| Change | Delta |             % | Samples | Caller              | Location    |
| -----: | ----: | ------------: | ------: | ------------------- | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `Compile::Code_Gen` | `<unknown>` |

##### `PhaseIdealLoop::Dominators` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                               | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------ | ----------- |
| +25.0% |    +2 | 100.0% |  8 → 10 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `processCandidatesWithGivenImplicitReceiverAsValue` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask`)

| Change | Delta |            % | Samples | Caller                                                     | Location                                                           |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `runResolverForNoReceiver`                                 | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `access$processCandidatesWithGivenImplicitReceiverAsValue` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask` |

##### `shouldWeSkipConstraint` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`)

| Change | Delta |             % | Samples | Caller                    | Location                                                                     |
| -----: | ----: | ------------: | ------: | ------------------------- | ---------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `processGivenConstraints` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector` |

##### `directWithVariable` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintIncorporator`)

| Change | Delta |             % | Samples | Caller        | Location                                                                         |
| -----: | ----: | ------------: | ------: | ------------- | -------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `incorporate` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintIncorporator` |

##### `consumeCandidate` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor`)

| Change | Delta |             % | Samples | Caller                     | Location                                                           |
| -----: | ----: | ------------: | ------: | -------------------------- | ------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `consumeCandidate$default` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor` |

##### `acceptChildren` (`org.jetbrains.kotlin.ir.declarations.IrFunction`)

| Change | Delta |             % | Samples | Caller         | Location                                                       |
| -----: | ----: | ------------: | ------: | -------------- | -------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitElement` | `org.jetbrains.kotlin.backend.jvm.ir.IrInlineReferenceLocator` |

##### `contentsToByteArray` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`)

| Change | Delta |             % | Samples | Caller                | Location                                                     |
| -----: | ----: | ------------: | ------: | --------------------- | ------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `contentsToByteArray` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler` |

##### `processFunctionsByName` (`org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`)

| Change | Delta |             % | Samples | Caller   | Location                                                                                     |
| -----: | ----: | ------------: | ------: | -------- | -------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invoke` | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processFunctionsByName$1` |

##### `transform` (`org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer$Transformer`)

| Change | Delta |             % | Samples | Caller      | Location                                                                             |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `transform` | `org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer` |

##### `transformChildren` (`org.jetbrains.kotlin.ir.declarations.IrFunction`)

| Change | Delta |             % | Samples | Caller             | Location                                                    |
| -----: | ----: | ------------: | ------: | ------------------ | ----------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitDeclaration` | `org.jetbrains.kotlin.ir.visitors.IrElementTransformerVoid` |

##### `inlineCall` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`)

| Change | Delta |             % | Samples | Caller          | Location                                                   |
| -----: | ----: | ------------: | ------: | --------------- | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `genInlineCall` | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen` |

##### `toIrStatement` (`org.jetbrains.kotlin.fir.backend.Fir2IrVisitor`)

| Change | Delta |             % | Samples | Caller             | Location                                         |
| -----: | ----: | ------------: | ------: | ------------------ | ------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `convertToIrBlock` | `org.jetbrains.kotlin.fir.backend.Fir2IrVisitor` |

##### `balanceWhiteSpaces` (`com.intellij.lang.impl.PsiBuilderImpl`)

| Change | Delta |             % | Samples | Caller             | Location                                |
| -----: | ----: | ------------: | ------: | ------------------ | --------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `prepareLightTree` | `com.intellij.lang.impl.PsiBuilderImpl` |

##### `loadFunction$default` (`org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`)

| Change | Delta |             % | Samples | Caller                     | Location                                                          |
| -----: | ----: | ------------: | ------: | -------------------------- | ----------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `deserializeClassToSymbol` | `org.jetbrains.kotlin.fir.deserialization.ClassDeserializationKt` |

##### `addSmartcastIfNeeded` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`)

| Change | Delta |             % | Samples | Caller                                                       | Location                                                                                      |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `transformFunctionCallInternal$org_jetbrains_kotlin_resolve` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `accept` (`org.jetbrains.kotlin.ir.expressions.IrGetValue`)

| Change | Delta |             % | Samples | Caller           | Location                                                       |
| -----: | ----: | ------------: | ------: | ---------------- | -------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `acceptChildren` | `org.jetbrains.kotlin.ir.expressions.IrMemberAccessExpression` |

##### `reversedFilteredLocalScopes_delegate$lambda$0` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerDataElementsForName`)

| Change | Delta |             % | Samples | Caller   | Location                                                                                           |
| -----: | ----: | ------------: | ------: | -------- | -------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invoke` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerDataElementsForName$$Lambda.0x0000007001667c98` |

##### `runResolverForNoReceiver` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask`)

| Change | Delta |             % | Samples | Caller                             | Location                                                           |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `runResolverForNoReceiver$default` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask` |

##### `isKotlinFunctionWithBigArity` (`org.jetbrains.kotlin.builtins.jvm.JavaToKotlinClassMap`)

| Change | Delta |             % | Samples | Caller                                 | Location                                                 |
| -----: | ----: | ------------: | ------: | -------------------------------------- | -------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `isKotlinFunctionWithBigArity$default` | `org.jetbrains.kotlin.builtins.jvm.JavaToKotlinClassMap` |

##### `createToFreshVariableSubstitutorAndAddInitialConstraints` (`org.jetbrains.kotlin.fir.resolve.calls.stages.CreateFreshTypeVariableSubstitutorStage`)

| Change | Delta |             % | Samples | Caller  | Location                                                                                |
| -----: | ----: | ------------: | ------: | ------- | --------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `check` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CreateFreshTypeVariableSubstitutorStage` |

##### `writeGenericType` (`org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper`)

| Change | Delta |             % | Samples | Caller             | Location                                                |
| -----: | ----: | ------------: | ------: | ------------------ | ------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `writeGenericType` | `org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper` |

##### `checkNotNullParameter` (`kotlin.jvm.internal.Intrinsics`)

|  Change | Delta |            % | Samples | Caller                    | Location                                                                                 |
| ------: | ----: | -----------: | ------: | ------------------------- | ---------------------------------------------------------------------------------------- |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `getChildren`             | `org.jetbrains.kotlin.util.LightTreeUtilsKt`                                             |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `checkAndCommitReportsOn` | `org.jetbrains.kotlin.diagnostics.impl.PendingDiagnosticsReporterImpl`                   |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `firstOrNull`             | `kotlin.collections.CollectionsKt___CollectionsKt`                                       |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `get`                     | `org.jetbrains.kotlin.fir.declarations.impl.FirDeclarationStatusImpl`                    |
|     new |    +1 | 0.0% → 16.7% |   0 → 1 | `reduceCandidates`        | `org.jetbrains.kotlin.fir.resolve.calls.overloads.FirOverloadByLambdaReturnTypeResolver` |

##### `hasNext` (`kotlin.collections.ReversedListReadOnly$listIterator$1`)

| Change | Delta |            % | Samples | Caller                                              | Location                                                           |
| -----: | ----: | -----------: | ------: | --------------------------------------------------- | ------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `processCandidatesWithGivenImplicitReceiverAsValue` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `toArray`                                           | `kotlin.jvm.internal.CollectionToArray`                            |

##### `inflateBytesBytes` (`java.util.zip.Inflater`)

| Change | Delta |             % | Samples | Caller    | Location                 |
| -----: | ----: | ------------: | ------: | --------- | ------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `inflate` | `java.util.zip.Inflater` |

##### `areEqual` (`kotlin.jvm.internal.Intrinsics`)

| Change | Delta |             % | Samples | Caller                                       | Location                                                   |
| -----: | ----: | ------------: | ------: | -------------------------------------------- | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `shouldGenerateAnnotationsOnValueParameters` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `getShortUnalignedInternal` (`jdk.internal.misc.ScopedMemoryAccess`)

| Change | Delta |             % | Samples | Caller              | Location                               |
| -----: | ----: | ------------: | ------: | ------------------- | -------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getShortUnaligned` | `jdk.internal.misc.ScopedMemoryAccess` |

##### `visit` (`jdk.internal.org.objectweb.asm.ClassWriter`)

| Change | Delta |             % | Samples | Caller               | Location                                       |
| -----: | ----: | ------------: | ------: | -------------------- | ---------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `generateInnerClass` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `startsWith` (`java.lang.String`)

| Change | Delta |             % | Samples | Caller       | Location           |
| -----: | ----: | ------------: | ------: | ------------ | ------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `startsWith` | `java.lang.String` |

##### `computeAllFrames` (`jdk.internal.org.objectweb.asm.MethodWriter`)

| Change | Delta |             % | Samples | Caller      | Location                                      |
| -----: | ----: | ------------: | ------: | ----------- | --------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitMaxs` | `jdk.internal.org.objectweb.asm.MethodWriter` |

##### `charAt` (`java.lang.String`)

| Change | Delta |             % | Samples | Caller                       | Location                               |
| -----: | ----: | ------------: | ------: | ---------------------------- | -------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getArgumentsAndReturnSizes` | `org.jetbrains.org.objectweb.asm.Type` |

##### `insertParameterTypes` (`java.lang.invoke.MethodType`)

| Change | Delta |             % | Samples | Caller              | Location                      |
| -----: | ----: | ------------: | ------: | ------------------- | ----------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getInvocationType` | `java.lang.invoke.MemberName` |

##### `toString` (`java.util.StringJoiner`)

| Change | Delta |             % | Samples | Caller             | Location                   |
| -----: | ----: | ------------: | ------: | ------------------ | -------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `toShortSignature` | `java.lang.reflect.Method` |

##### `invokeBasic` (`java.lang.invoke.MethodHandle`)

| Change | Delta |             % | Samples | Caller             | Location                                     |
| -----: | ----: | ------------: | ------: | ------------------ | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `newInvokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `linkToTargetMethod` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |             % | Samples | Caller                   | Location                                              |
| -----: | ----: | ------------: | ------: | ------------------------ | ----------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `approximateToSuperType` | `org.jetbrains.kotlin.types.AbstractTypeApproximator` |

##### `singleOrNull` (`kotlin.collections.CollectionsKt___CollectionsKt`)

| Change | Delta |             % | Samples | Caller            | Location                                                          |
| -----: | ----: | ------------: | ------: | ----------------- | ----------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `commonSuperType` | `org.jetbrains.kotlin.resolve.calls.NewCommonSuperTypeCalculator` |

##### `getString` (`jdk.internal.jimage.BasicImageReader`)

| Change | Delta |             % | Samples | Caller | Location                                 |
| -----: | ----: | ------------: | ------: | ------ | ---------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `get`  | `jdk.internal.jimage.ImageStringsReader` |

##### `valueOf` (`java.lang.Integer`)

| Change | Delta |             % | Samples | Caller                      | Location                                          |
| -----: | ----: | ------------: | ------: | --------------------------- | ------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `readSourceFileWithMapping` | `org.jetbrains.kotlin.KtSourceFileLinesMappingKt` |

##### `isInitialized` (`kotlin.reflect.jvm.internal.impl.protobuf.FieldSet`)

| Change | Delta |             % | Samples | Caller                     | Location                                                                           |
| -----: | ----: | ------------: | ------: | -------------------------- | ---------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `extensionsAreInitialized` | `kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite$ExtendableMessage` |

##### `equals` (`java.lang.Object`)

| Change | Delta |             % | Samples | Caller     | Location                         |
| -----: | ----: | ------------: | ------: | ---------- | -------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `areEqual` | `kotlin.jvm.internal.Intrinsics` |

##### `throwOnFailure` (`kotlin.ResultKt`)

| Change | Delta |             % | Samples | Caller  | Location                                                        |
| -----: | ----: | ------------: | ------: | ------- | --------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `check` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckVisibility` |

##### `toString` (`java.lang.Long`)

| Change | Delta |             % | Samples | Caller     | Location         |
| -----: | ----: | ------------: | ------: | ---------- | ---------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `toString` | `java.lang.Long` |

##### `I2C/C2I adapters` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                      | Location                                                                                      |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `casTail`                                                   | `java.util.concurrent.locks.AbstractQueuedSynchronizer`                                       |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `transformBlockInCurrentScope$org_jetbrains_kotlin_resolve` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `visitVarInsn`                                              | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                                             |

##### `itable stub` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                  | Location                                                                                |
| ------: | ----: | -----------: | ------: | ----------------------- | --------------------------------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `checkElement`          | `org.jetbrains.kotlin.fir.analysis.collectors.CheckerRunningDiagnosticCollectorVisitor` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `isClassWithNamePrefix` | `org.jetbrains.kotlin.ir.util.IrTypeUtilsKt`                                            |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `isDeprecatedInJavaDoc` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaModifierListOwner`  |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `addAll`                | `java.util.AbstractCollection`                                                          |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `lookahead`             | `org.jetbrains.kotlin.parsing.AbstractKotlinParsing`                                    |

##### `vtable stub` (`<unknown>`)

| Change | Delta |             % | Samples | Caller   | Location            |
| -----: | ----: | ------------: | ------: | -------- | ------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `putVal` | `java.util.HashMap` |

##### `__psynch_mutexwait` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                              | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------- | ----------- |
| -83.1% |   -64 | 100.0% | 77 → 13 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `__psynch_cvwait` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                  | Location    |
| -----: | ----: | -----: | ------: | ----------------------- | ----------- |
| -80.6% |   -50 | 100.0% | 62 → 12 | `PlatformMonitor::wait` | `<unknown>` |

##### `inflate_fast` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                          | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | ----------- |
| -32.9% |   -23 | 100.0% | 70 → 47 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `_platform_memset` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                        | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | ----------- |
|  -80.0% |    -4 | 22.7% → 14.3% |   5 → 1 | `MemAllocator::allocate`                      | `<unknown>` |
| removed |    -3 |  13.6% → 0.0% |   3 → 0 | `MarkBitMap::do_clear`                        | `<unknown>` |
| removed |    -2 |   9.1% → 0.0% |   2 → 0 | `MethodLiveness::BasicBlock::get_liveness_at` | `<unknown>` |
| removed |    -2 |   9.1% → 0.0% |   2 → 0 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `<unknown>` |
| removed |    -1 |   4.5% → 0.0% |   1 → 0 | `GraphBuilder::copy_state_before_with_bci`    | `<unknown>` |

##### `semaphore_wait_trap` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                           | Location    |
| ------: | ----: | -------------: | ------: | -------------------------------- | ----------- |
|  -66.7% |    -6 | 64.3% → 100.0% |   9 → 3 | `WorkerThread::run`              | `<unknown>` |
| removed |    -2 |   14.3% → 0.0% |   2 → 0 | `WorkerThreads::run_task`        | `<unknown>` |
| removed |    -2 |   14.3% → 0.0% |   2 → 0 | `GenericWaitBarrier::Cell::wait` | `<unknown>` |
| removed |    -1 |    7.1% → 0.0% |   1 → 0 | `SafepointSynchronize::begin`    | `<unknown>` |

##### `LinearScanWalker::alloc_free_reg` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                               | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------ | ----------- |
| -76.9% |   -10 | 100.0% |  13 → 3 | `LinearScanWalker::activate_current` | `<unknown>` |

##### `swtch_pri` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                                                                                                                                                                                                                                                                                                           | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| removed |    -5 | 55.6% → 0.0% |   5 → 0 | `bool ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::internal_insert_get<G1CodeRootSetHashTable::HashTableLookUp, bool ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::insert<G1CodeRootSetHashTable::HashTableLookUp>(Thread*, G1CodeRootSetHashTable::HashTableLookUp&, nmethod* const&, bool*, bool*)::NOP>` | `<unknown>` |
| removed |    -4 | 44.4% → 0.0% |   4 → 0 | `TaskTerminator::offer_termination`                                                                                                                                                                                                                                                                                                              | `<unknown>` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                            | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------------- | ----------- |
| removed |    -7 | 87.5% → 0.0% |   7 → 0 | `G1ParScanThreadState::do_copy_to_survivor_space` | `<unknown>` |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `G1ParScanThreadState::trim_queue_to_threshold`   | `<unknown>` |

##### `IndexSetIterator::advance_and_next` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                         | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | ----------- |
| removed |    -3 |  16.7% → 0.0% |   3 → 0 | `PhaseChaitin::Select`                         | `<unknown>` |
|  -50.0% |    -2 | 22.2% → 18.2% |   4 → 2 | `PhaseChaitin::build_ifg_physical`             | `<unknown>` |
|  -25.0% |    -1 | 22.2% → 27.3% |   4 → 3 | `PhaseIFG::SquareUp`                           | `<unknown>` |
| +100.0% |    +1 |  5.6% → 18.2% |   1 → 2 | `PhaseIFG::effective_degree`                   | `<unknown>` |
| removed |    -1 |   5.6% → 0.0% |   1 → 0 | `PhaseChaitin::compute_initial_block_pressure` | `<unknown>` |

##### `CodeCache::make_marked_nmethods_deoptimized` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                  | Location    |
| -----: | ----: | -----: | ------: | --------------------------------------- | ----------- |
| -87.5% |    -7 | 100.0% |   8 → 1 | `Deoptimization::deoptimize_all_marked` | `<unknown>` |

##### `Dictionary::find` (`<unknown>`)

| Change | Delta |     % | Samples | Caller                                                       | Location    |
| -----: | ----: | ----: | ------: | ------------------------------------------------------------ | ----------- |
| -66.7% |    -4 | 66.7% |   6 → 2 | `SystemDictionary::resolve_instance_class_or_null`           | `<unknown>` |
| -66.7% |    -2 | 33.3% |   3 → 1 | `SystemDictionary::find_constrained_instance_or_array_klass` | `<unknown>` |

##### `getNode` (`java.util.HashMap`)

|  Change | Delta |              % | Samples | Caller | Location                  |
| ------: | ----: | -------------: | ------: | ------ | ------------------------- |
|  -83.3% |    -5 | 85.7% → 100.0% |   6 → 1 | `get`  | `java.util.HashMap`       |
| removed |    -1 |   14.3% → 0.0% |   1 → 0 | `get`  | `java.util.LinkedHashMap` |

##### `zero_blocks` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller   | Location                        |
| ------: | ----: | ------------: | ------: | -------- | ------------------------------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `<init>` | `java.io.ByteArrayOutputStream` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                                                   | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------ | ----------- |
| -62.5% |    -5 | 100.0% |   8 → 3 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                            | Location    |
| -----: | ----: | -----: | ------: | --------------------------------- | ----------- |
| -31.3% |    -5 | 100.0% | 16 → 11 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseChaitin::elide_copy` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                     | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------ | ----------- |
| -33.3% |    -5 | 100.0% | 15 → 10 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |

##### `MultiNode::is_CFG` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                 | Location    |
| ------: | ----: | -------------: | ------: | -------------------------------------- | ----------- |
| removed |    -2 |   33.3% → 0.0% |   2 → 0 | `PhaseIdealLoop::Dominators`           | `<unknown>` |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_loop_tree_impl` | `<unknown>` |
|  -33.3% |    -1 | 50.0% → 100.0% |   3 → 2 | `PhaseIdealLoop::build_and_optimize`   | `<unknown>` |

##### `__psynch_cvbroad` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                               | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------------ | ----------- |
|  -66.7% |    -2 | 60.0% → 100.0% |   3 → 1 | `CompileBroker::create_compile_task` | `<unknown>` |
| removed |    -1 |   20.0% → 0.0% |   1 → 0 | `TaskTerminator::offer_termination`  | `<unknown>` |
| removed |    -1 |   20.0% → 0.0% |   1 → 0 | `VMThread::wait_for_operation`       | `<unknown>` |

##### `inflate` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                          | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | ----------- |
| -40.0% |    -4 | 100.0% |  10 → 6 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                       | Location    |
| ------: | ----: | -------------: | ------: | -------------------------------------------- | ----------- |
| removed |    -2 |   40.0% → 0.0% |   2 → 0 | `G1ScanHRForRegionClosure::scan_memregion`   | `<unknown>` |
| removed |    -1 |   20.0% → 0.0% |   1 → 0 | `G1ParEvacuateFollowersClosure::do_void`     | `<unknown>` |
|  -50.0% |    -1 | 40.0% → 100.0% |   2 → 1 | `G1ParScanThreadState::steal_and_trim_queue` | `<unknown>` |

##### `SignatureStream::next` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                    | Location    |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------- | ----------- |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `void SignatureIterator::do_parameters_on<Fingerprinter>` | `<unknown>` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `SignatureStream::SignatureStream`                        | `<unknown>` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `ciSignature::ciSignature`                                | `<unknown>` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `ArgumentSizeComputer::ArgumentSizeComputer`              | `<unknown>` |

##### `InstanceKlass::find_method_index` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                  | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ----------- |
|  -38.5% |    -5 | 92.9% → 80.0% |  13 → 8 | `InstanceKlass::uncached_lookup_method` | `<unknown>` |
| +100.0% |    +1 |  7.1% → 20.0% |   1 → 2 | `InstanceKlass::find_method`            | `<unknown>` |

##### `forward_copy_longs` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                             | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------------- | ----------- |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `arrayof_jlong_disjoint_arraycopy` | `<unknown>` |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `jbyte_disjoint_arraycopy`         | `<unknown>` |

##### `mach_absolute_time` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                | Location    |
| ------: | ----: | -----------: | ------: | --------------------- | ----------- |
| removed |    -3 | 75.0% → 0.0% |   3 → 0 | `os::elapsed_counter` | `<unknown>` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `os::elapsedTime`     | `<unknown>` |

##### `__psynch_mutexdrop` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------- | ----------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `_pthread_mutex_firstfit_unlock_slow` | `<unknown>` |

##### `G1CardSet::add_to_howl` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                | Location    |
| ------: | ----: | ------------: | ------: | --------------------- | ----------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `G1CardSet::add_card` | `<unknown>` |

##### `fwd_copy_again` (`<unknown>`)

| Change | Delta |              % | Samples | Caller                                          | Location    |
| -----: | ----: | -------------: | ------: | ----------------------------------------------- | ----------- |
| -57.1% |    -4 | 100.0% → 75.0% |   7 → 3 | `G1ParScanThreadState::trim_queue_to_threshold` | `<unknown>` |
|    new |    +1 |   0.0% → 25.0% |   0 → 1 | `CodeBuffer::copy_code_to`                      | `<unknown>` |

##### `PhaseChaitin::Simplify` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                            | Location    |
| -----: | ----: | -----: | ------: | --------------------------------- | ----------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseIterGVN::add_users_to_worklist` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                        | Location    |
| ------: | ----: | -------------: | ------: | ----------------------------- | ----------- |
|  -66.7% |    -2 | 60.0% → 100.0% |   3 → 1 | `PhaseIterGVN::transform_old` | `<unknown>` |
| removed |    -2 |   40.0% → 0.0% |   2 → 0 | `PhaseIterGVN::PhaseIterGVN`  | `<unknown>` |

##### `LinearScanWalker::free_collect_inactive_fixed` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                             | Location    |
| -----: | ----: | -----: | ------: | ---------------------------------- | ----------- |
| -57.1% |    -4 | 100.0% |   7 → 3 | `LinearScanWalker::alloc_free_reg` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_tree_impl` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                            | Location    |
| -----: | ----: | -----: | ------: | --------------------------------- | ----------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `PhaseIdealLoop::build_loop_tree` | `<unknown>` |

##### `PhaseOutput::BuildOopMaps` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                | Location    |
| -----: | ----: | -----: | ------: | --------------------- | ----------- |
| -50.0% |    -3 | 100.0% |   6 → 3 | `PhaseOutput::Output` | `<unknown>` |

##### `PhaseLive::compute` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                            | Location    |
| -----: | ----: | -----: | ------: | --------------------------------- | ----------- |
| -27.3% |    -3 | 100.0% |  11 → 8 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `LinearScanWalker::split_before_usage` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                             | Location    |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ----------- |
| -60.0% |    -3 | 62.5% → 40.0% |   5 → 2 | `LinearScanWalker::alloc_free_reg` | `<unknown>` |

##### `IntervalWalker::walk_to` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                        | Location    |
| -----: | ----: | ------------: | ------: | ----------------------------- | ----------- |
| -44.4% |    -4 | 90.0% → 71.4% |   9 → 5 | `IntervalWalker::walk_to`     | `<unknown>` |
|    new |    +1 |  0.0% → 14.3% |   0 → 1 | `LinearScan::compute_oop_map` | `<unknown>` |

##### `ProjNode::is_CFG` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                               | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------ | ----------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `PhaseIdealLoop::Dominators`         | `<unknown>` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_loop_late`    | `<unknown>` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                               | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------ | ----------- |
| -30.0% |    -3 | 100.0% |  10 → 7 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `ciReceiverTypeData::translate_receiver_data_from` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                    | Location    |
| ------: | ----: | ------------: | ------: | ------------------------- | ----------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `ciMethodData::load_data` | `<unknown>` |

##### `RegionNode::Ideal` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                        | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------- | ----------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `PhaseIterGVN::transform_old` | `<unknown>` |

##### `ciTypeFlow::Block::successors` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                   | Location    |
| ------: | ----: | ------------: | ------: | ------------------------ | ----------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `ciTypeFlow::flow_block` | `<unknown>` |

##### `TypeInstPtr::hash` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                       | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------- | ----------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `Type::hashcons`             | `<unknown>` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `NodeHash::hash_find_insert` | `<unknown>` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `Dict::Insert`               | `<unknown>` |

##### `MethodLiveness::BasicBlock::compute_gen_kill_single` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                               | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------- | ----------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `MethodLiveness::BasicBlock::compute_gen_kill_range` | `<unknown>` |

##### `loadAllClassesFromJars` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

| Change | Delta |      % | Samples | Caller           | Location                                               |
| -----: | ----: | -----: | ------: | ---------------- | ------------------------------------------------------ |
| -66.7% |    -2 | 100.0% |   3 → 1 | `preloadClasses` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `analyzeMainLoop` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`)

|  Change | Delta |             % | Samples | Caller    | Location                                                        |
| ------: | ----: | ------------: | ------: | --------- | --------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `analyze` | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer` |

##### `getApplicability` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver$ResolutionResult`)

|  Change | Delta |             % | Samples | Caller                          | Location                                                 |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `resolveCallAndSelectCandidate` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver` |

##### `isSubtypeOf$default` (`org.jetbrains.kotlin.types.AbstractTypeChecker`)

|  Change | Delta |             % | Samples | Caller                        | Location                                         |
| ------: | ----: | ------------: | ------: | ----------------------------- | ------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `isSubtypeForSameConstructor` | `org.jetbrains.kotlin.types.AbstractTypeChecker` |

##### `completeIsSubTypeOf` (`org.jetbrains.kotlin.types.AbstractTypeChecker`)

|  Change | Delta |             % | Samples | Caller        | Location                                         |
| ------: | ----: | ------------: | ------: | ------------- | ------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `isSubtypeOf` | `org.jetbrains.kotlin.types.AbstractTypeChecker` |

##### `transformStatementsIndexed` (`org.jetbrains.kotlin.fir.expressions.FirExpressionUtilKt`)

|  Change | Delta |             % | Samples | Caller                                                      | Location                                                                                      |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `transformBlockInCurrentScope$org_jetbrains_kotlin_resolve` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `possibleGetMethodNames` (`org.jetbrains.kotlin.load.java.PropertiesConventionUtilKt`)

|  Change | Delta |             % | Samples | Caller                              | Location                                                         |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ---------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `possibleGetterNamesByPropertyName` | `org.jetbrains.kotlin.fir.resolve.FirJavaSyntheticNamesProvider` |

##### `copyTo$default` (`org.jetbrains.kotlin.ir.util.IrUtilsKt`)

|  Change | Delta |             % | Samples | Caller        | Location                                                              |
| ------: | ----: | ------------: | ------: | ------------- | --------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `addFunction` | `org.jetbrains.kotlin.ir.builders.declarations.DeclarationBuildersKt` |

##### `addEdge$default` (`org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraphBuilder`)

|  Change | Delta |             % | Samples | Caller             | Location                                                           |
| ------: | ----: | ------------: | ------: | ------------------ | ------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `addNewSimpleNode` | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraphBuilder` |

##### `mayHaveTopLevelClassifier` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`)

|  Change | Delta |             % | Samples | Caller                        | Location                                                                            |
| ------: | ----: | ------------: | ------: | ----------------------------- | ----------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getClassLikeSymbolByClassId` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider` |

##### `tryToSetSourceForImplicitReceiver$tryToSetSourceForImplicitReceiver` (`org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate`)

|  Change | Delta |             % | Samples | Caller                              | Location                                                     |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `tryToSetSourceForImplicitReceiver` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate` |

##### `invoke` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl$$Lambda`)

|  Change | Delta |             % | Samples | Caller                          | Location                                                              |
| ------: | ----: | ------------: | ------: | ------------------------------- | --------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `iterateScopesWithSubstitution` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl` |

##### `forEachArgument` (`org.jetbrains.kotlin.fir.analysis.cfa.FirCallsEffectAnalyzer`)

|  Change | Delta |             % | Samples | Caller                      | Location                                                       |
| ------: | ----: | ------------: | ------: | --------------------------- | -------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `findNonInPlaceUsesOf$scan` | `org.jetbrains.kotlin.fir.analysis.cfa.FirCallsEffectAnalyzer` |

##### `getArguments` (`org.jetbrains.kotlin.fir.expressions.FirEmptyArgumentList`)

|  Change | Delta |             % | Samples | Caller         | Location                                                    |
| ------: | ----: | ------------: | ------: | -------------- | ----------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getArguments` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.CallInfo` |

##### `checkParameterBounds` (`org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirExposedVisibilityDeclarationChecker`)

|  Change | Delta |             % | Samples | Caller          | Location                                                                                        |
| ------: | ----: | ------------: | ------: | --------------- | ----------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `checkFunction` | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirExposedVisibilityDeclarationChecker` |

##### `deserializeClassToSymbol` (`org.jetbrains.kotlin.fir.deserialization.ClassDeserializationKt`)

|  Change | Delta |             % | Samples | Caller                | Location                                                                                                          |
| ------: | ----: | ------------: | ------: | --------------------- | ----------------------------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `classCache$lambda$1` | `org.jetbrains.kotlin.fir.resolve.providers.impl.AbstractFirBuiltinSymbolProvider$BuiltInsPackageFragmentWrapper` |

##### `charAt` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence`)

|  Change | Delta |             % | Samples | Caller      | Location                                                     |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `splitPath` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler` |

##### `processConstraintStorageFromAtom` (`org.jetbrains.kotlin.fir.resolve.calls.candidate.CandidateFactoryKt`)

|  Change | Delta |             % | Samples | Caller                 | Location                                                              |
| ------: | ----: | ------------: | ------: | ---------------------- | --------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `addSubsystemFromAtom` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.CandidateFactoryKt` |

##### `getContext` (`org.jetbrains.kotlin.fir.builder.AbstractRawFirBuilder`)

|  Change | Delta |             % | Samples | Caller                       | Location                                                                         |
| ------: | ----: | ------------: | ------: | ---------------------------- | -------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `convertFunctionDeclaration` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder` |

##### `transform` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

|  Change | Delta |             % | Samples | Caller      | Location                                                                           |
| ------: | ----: | ------------: | ------: | ----------- | ---------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `transform` | `org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer` |

##### `sanitizeStackTrace` (`kotlin.jvm.internal.Intrinsics`)

| Change | Delta |      % | Samples | Caller                    | Location                         |
| -----: | ----: | -----: | ------: | ------------------------- | -------------------------------- |
| -42.9% |    -3 | 100.0% |   7 → 4 | `throwParameterIsNullNPE` | `kotlin.jvm.internal.Intrinsics` |

##### `inflate` (`java.util.zip.Inflater`)

|  Change | Delta |             % | Samples | Caller | Location                            |
| ------: | ----: | ------------: | ------: | ------ | ----------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `read` | `java.util.zip.InflaterInputStream` |

##### `formatUnsignedInt` (`java.lang.Integer`)

|  Change | Delta |             % | Samples | Caller              | Location            |
| ------: | ----: | ------------: | ------: | ------------------- | ------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `toUnsignedString0` | `java.lang.Integer` |

##### `mutableMapOf` (`kotlin.collections.MapsKt__MapsKt`)

|  Change | Delta |             % | Samples | Caller               | Location                                           |
| ------: | ----: | ------------: | ------: | -------------------- | -------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `insertIncomingEdge` | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.CFGNode` |

##### `getValue` (`kotlin.SynchronizedLazyImpl`)

|  Change | Delta |             % | Samples | Caller          | Location                                                  |
| ------: | ----: | ------------: | ------: | --------------- | --------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getMyChildren` | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile` |

##### `read` (`java.util.zip.InflaterInputStream`)

|  Change | Delta |             % | Samples | Caller | Location                       |
| ------: | ----: | ------------: | ------: | ------ | ------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `read` | `java.util.zip.ZipInputStream` |

##### `nextNode` (`java.util.HashMap$HashIterator`)

| Change | Delta |      % | Samples | Caller | Location                          |
| -----: | ----: | -----: | ------: | ------ | --------------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `next` | `java.util.HashMap$ValueIterator` |

##### `next` (`java.util.HashMap$ValueIterator`)

|  Change | Delta |             % | Samples | Caller                   | Location                                               |
| ------: | ----: | ------------: | ------: | ------------------------ | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `loadAllClassesFromJars` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `getInt` (`jdk.internal.misc.ScopedMemoryAccess`)

|  Change | Delta |             % | Samples | Caller | Location                    |
| ------: | ----: | ------------: | ------: | ------ | --------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `get`  | `java.nio.DirectIntBufferU` |

##### `<init>` (`java.util.concurrent.locks.AbstractQueuedSynchronizer`)

|  Change | Delta |             % | Samples | Caller   | Location                                        |
| ------: | ----: | ------------: | ------: | -------- | ----------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>` | `java.util.concurrent.locks.ReentrantLock$Sync` |

##### `generateInnerClass` (`java.lang.invoke.InnerClassLambdaMetafactory`)

|  Change | Delta |             % | Samples | Caller           | Location                                       |
| ------: | ----: | ------------: | ------: | ---------------- | ---------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `spinInnerClass` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `getPackageName` (`java.lang.Class`)

|  Change | Delta |             % | Samples | Caller            | Location                |
| ------: | ----: | ------------: | ------: | ----------------- | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `postDefineClass` | `java.lang.ClassLoader` |

##### `size` (`java.util.Collections$SingletonSet`)

|  Change | Delta |             % | Samples | Caller             | Location                                                                                 |
| ------: | ----: | ------------: | ------: | ------------------ | ---------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `reduceCandidates` | `org.jetbrains.kotlin.fir.resolve.calls.overloads.FirOverloadByLambdaReturnTypeResolver` |

##### `linkToTargetMethod` (`java.lang.invoke.LambdaForm$MH`)

|  Change | Delta |             % | Samples | Caller                       | Location                                                                          |
| ------: | ----: | ------------: | ------: | ---------------------------- | --------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `setLazyPublishedVisibility` | `org.jetbrains.kotlin.fir.resolve.transformers.PublishedApiEffectiveVisibilityKt` |

##### `decompress` (`jdk.internal.jimage.ImageLocation`)

|  Change | Delta |             % | Samples | Caller          | Location                               |
| ------: | ----: | ------------: | ------: | --------------- | -------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getAttributes` | `jdk.internal.jimage.BasicImageReader` |

##### `get` (`java.util.concurrent.ConcurrentHashMap`)

|  Change | Delta |             % | Samples | Caller            | Location                             |
| ------: | ----: | ------------: | ------: | ----------------- | ------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getNoCheckStale` | `jdk.internal.util.ReferencedKeyMap` |

##### `parseInt` (`java.lang.Integer`)

|  Change | Delta |             % | Samples | Caller   | Location               |
| ------: | ----: | ------------: | ------: | -------- | ---------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>` | `java.math.BigInteger` |

##### `getShortUnaligned` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |             % | Samples | Caller                      | Location                               |
| ------: | ----: | ------------: | ------: | --------------------------- | -------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getShortUnalignedInternal` | `jdk.internal.misc.ScopedMemoryAccess` |

##### `newInvokeSpecial` (`java.lang.invoke.LambdaForm$DMH`)

|  Change | Delta |             % | Samples | Caller               | Location                         |
| ------: | ----: | ------------: | ------: | -------------------- | -------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `linkToTargetMethod` | `java.lang.invoke.LambdaForm$MH` |

##### `I2C/C2I adapters(0x)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller   | Location                                                        |
| ------: | ----: | ------------: | ------: | -------- | --------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>` | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$Builder` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |           % |   Samples | Function                                         | Location                                                 |
| ------: | ----: | ----------: | --------: | ------------------------------------------------ | -------------------------------------------------------- |
|  +41.0% |   +16 | 2.3% → 4.2% |   39 → 55 | `Matcher::match`                                 | `<unknown>`                                              |
|  +31.9% |   +15 | 2.8% → 4.8% |   47 → 62 | `Compile::optimize_loops`                        | `<unknown>`                                              |
|  +53.6% |   +15 | 1.7% → 3.3% |   28 → 43 | `Matcher::xform`                                 | `<unknown>`                                              |
|  +52.6% |   +10 | 1.1% → 2.2% |   19 → 29 | `tlv_get_addr`                                   | `<unknown>`                                              |
|   +8.2% |    +8 | 5.8% → 8.0% |  97 → 105 | `PhaseIdealLoop::build_and_optimize`             | `<unknown>`                                              |
|  +88.9% |    +8 | 0.5% → 1.3% |    9 → 17 | `nmethod::nmethod`                               | `<unknown>`                                              |
|  +50.0% |    +8 | 1.0% → 1.8% |   16 → 24 | `PhaseIdealLoop::build_loop_late_post_work`      | `<unknown>`                                              |
|   +7.1% |    +7 | 5.9% → 8.0% |  98 → 105 | `PhaseIdealLoop::PhaseIdealLoop`                 | `<unknown>`                                              |
|  +50.0% |    +7 | 0.8% → 1.6% |   14 → 21 | `nmethod::new_nmethod`                           | `<unknown>`                                              |
| +100.0% |    +7 | 0.4% → 1.1% |    7 → 14 | `Matcher::Label_Root`                            | `<unknown>`                                              |
|  +38.9% |    +7 | 1.1% → 1.9% |   18 → 25 | `Matcher::match_tree`                            | `<unknown>`                                              |
| +233.3% |    +7 | 0.2% → 0.8% |    3 → 10 | `LIR_Assembler::process_debug_info`              | `<unknown>`                                              |
| +140.0% |    +7 | 0.3% → 0.9% |    5 → 12 | `LIR_Assembler::record_non_safepoint_debug_info` | `<unknown>`                                              |
|  +87.5% |    +7 | 0.5% → 1.1% |    8 → 15 | `PhaseIdealLoop::build_loop_early`               | `<unknown>`                                              |
|   +5.2% |    +6 | 6.9% → 9.3% | 115 → 121 | `PhaseIdealLoop::optimize`                       | `<unknown>`                                              |
|  +11.3% |    +6 | 3.2% → 4.5% |   53 → 59 | `PhaseIterGVN::optimize`                         | `<unknown>`                                              |
| +100.0% |    +6 | 0.4% → 0.9% |    6 → 12 | `accept`                                         | `org.jetbrains.kotlin.ir.declarations.IrFile`            |
| +200.0% |    +6 | 0.2% → 0.7% |     3 → 9 | `State::DFA`                                     | `<unknown>`                                              |
| +300.0% |    +6 | 0.1% → 0.6% |     2 → 8 | `acceptChildren`                                 | `org.jetbrains.kotlin.ir.declarations.IrPackageFragment` |
| +600.0% |    +6 | 0.1% → 0.5% |     1 → 7 | `I2C/C2I adapters(0xbb)`                         | `<unknown>`                                              |

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

|  Change | Delta |           % | Samples | Function                              | Location                                                                          |
| ------: | ----: | ----------: | ------: | ------------------------------------- | --------------------------------------------------------------------------------- |
| +100.0% |    +6 | 0.4% → 0.9% |  6 → 12 | `accept`                              | `org.jetbrains.kotlin.ir.declarations.IrFile`                                     |
| +300.0% |    +6 | 0.1% → 0.6% |   2 → 8 | `acceptChildren`                      | `org.jetbrains.kotlin.ir.declarations.IrPackageFragment`                          |
|     new |    +6 | 0.0% → 0.5% |   0 → 6 | `acceptChildren`                      | `org.jetbrains.kotlin.ir.declarations.IrClass`                                    |
| +250.0% |    +5 | 0.1% → 0.5% |   2 → 7 | `visitAnonymousFunction`              | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |
| +250.0% |    +5 | 0.1% → 0.5% |   2 → 7 | `visitAnonymousFunctionExpression`    | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |
| +166.7% |    +5 | 0.2% → 0.6% |   3 → 8 | `accept`                              | `org.jetbrains.kotlin.fir.expressions.FirAnonymousFunctionExpression`             |
| +166.7% |    +5 | 0.2% → 0.6% |   3 → 8 | `fixVariable`                         | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`            |
| +166.7% |    +5 | 0.2% → 0.6% |   3 → 8 | `fixVariableIfReady`                  | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`            |
| +166.7% |    +5 | 0.2% → 0.6% |   3 → 8 | `mapSignature`                        | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`                  |
| +166.7% |    +5 | 0.2% → 0.6% |   3 → 8 | `mapSignature$default`                | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`                  |
|     new |    +5 | 0.0% → 0.4% |   0 → 5 | `writeParameter`                      | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`                  |
|  +50.0% |    +4 | 0.5% → 0.9% |  8 → 12 | `processGivenConstraints`             | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`      |
|  +50.0% |    +4 | 0.5% → 0.9% |  8 → 12 | `processConstraintsIgnoringForksData` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`      |
|  +50.0% |    +4 | 0.5% → 0.9% |  8 → 12 | `processConstraints`                  | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`      |
|  +66.7% |    +4 | 0.4% → 0.8% |  6 → 10 | `acceptChildren`                      | `org.jetbrains.kotlin.fir.expressions.impl.FirResolvedArgumentList`               |
|  +66.7% |    +4 | 0.4% → 0.8% |  6 → 10 | `visitArgumentList`                   | `org.jetbrains.kotlin.fir.visitors.FirVisitor`                                    |
|  +66.7% |    +4 | 0.4% → 0.8% |  6 → 10 | `accept`                              | `org.jetbrains.kotlin.fir.expressions.FirArgumentList`                            |
| +133.3% |    +4 | 0.2% → 0.5% |   3 → 7 | `visitVariable`                       | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| +100.0% |    +4 | 0.2% → 0.6% |   4 → 8 | `compileInlineFunction`               | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`              |
| +100.0% |    +4 | 0.2% → 0.6% |   4 → 8 | `toIrType`                            | `org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter`                            |

##### Standard library

|  Change | Delta |           % | Samples | Function                      | Location                                                 |
| ------: | ----: | ----------: | ------: | ----------------------------- | -------------------------------------------------------- |
|     new |    +5 | 0.0% → 0.4% |   0 → 5 | `linkToTargetMethod`          | `java.lang.invoke.Invokers$Holder`                       |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `newInvokeSpecial`            | `java.lang.invoke.DirectMethodHandle$Holder`             |
| +100.0% |    +2 | 0.1% → 0.3% |   2 → 4 | `append`                      | `java.lang.StringBuilder`                                |
| +100.0% |    +2 | 0.1% → 0.3% |   2 → 4 | `invokeStatic`                | `java.lang.invoke.DirectMethodHandle$Holder`             |
| +100.0% |    +2 | 0.1% → 0.3% |   2 → 4 | `parseAnnotation2`            | `sun.reflect.annotation.AnnotationParser`                |
| +100.0% |    +2 | 0.1% → 0.3% |   2 → 4 | `parseAnnotations2`           | `sun.reflect.annotation.AnnotationParser`                |
| +100.0% |    +2 | 0.1% → 0.3% |   2 → 4 | `parseAnnotations`            | `sun.reflect.annotation.AnnotationParser`                |
| +100.0% |    +2 | 0.1% → 0.3% |   2 → 4 | `compileToBytecode`           | `java.lang.invoke.LambdaForm`                            |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `addMethod`                   | `java.lang.invoke.InvokerBytecodeGenerator`              |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `generateCustomizedCodeBytes` | `java.lang.invoke.InvokerBytecodeGenerator`              |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `emitStaticInvoke`            | `java.lang.invoke.InvokerBytecodeGenerator`              |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `toString`                    | `java.lang.Long`                                         |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `collectionSizeOrDefault`     | `kotlin.collections.CollectionsKt__IterablesKt`          |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `makePairwiseConvertByEditor` | `java.lang.invoke.MethodHandleImpl`                      |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `makePairwiseConvert`         | `java.lang.invoke.MethodHandleImpl`                      |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `asTypeUncached`              | `java.lang.invoke.MethodHandle`                          |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `asType`                      | `java.lang.invoke.MethodHandle`                          |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `toList`                      | `kotlin.sequences.SequencesKt___SequencesKt`             |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `hasNext`                     | `kotlin.collections.ReversedListReadOnly$listIterator$1` |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `<init>`                      | `java.util.ArrayList`                                    |

##### JIT

|  Change | Delta |           % | Samples | Function                 | Location    |
| ------: | ----: | ----------: | ------: | ------------------------ | ----------- |
| +600.0% |    +6 | 0.1% → 0.5% |   1 → 7 | `I2C/C2I adapters(0xbb)` | `<unknown>` |
|  +75.0% |    +3 | 0.2% → 0.5% |   4 → 7 | `I2C/C2I adapters(0xb)`  | `<unknown>` |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `I2C/C2I adapters`       | `<unknown>` |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `itable stub`            | `<unknown>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `vtable stub`            | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

| Change | Delta |             % |     Samples | Function                                   | Location                                                |
| -----: | ----: | ------------: | ----------: | ------------------------------------------ | ------------------------------------------------------- |
| -21.7% |  -240 | 66.2% → 66.4% | 1,107 → 867 | `thread_native_entry`                      | `<unknown>`                                             |
| -21.7% |  -240 | 66.3% → 66.5% | 1,108 → 868 | `_pthread_start`                           | `<unknown>`                                             |
| -21.7% |  -240 | 66.3% → 66.5% | 1,108 → 868 | `thread_start`                             | `<unknown>`                                             |
| -21.6% |  -239 | 66.1% → 66.4% | 1,106 → 867 | `Thread::call_run`                         | `<unknown>`                                             |
| -15.9% |  -154 | 57.8% → 62.2% |   966 → 812 | `JavaThread::thread_main_inner`            | `<unknown>`                                             |
| -15.3% |  -147 | 57.4% → 62.2% |   959 → 812 | `CompileBroker::compiler_thread_loop`      | `<unknown>`                                             |
| -22.8% |  -125 | 32.8% → 32.4% |   548 → 423 | `run`                                      | `org.jetbrains.kotlin.preloading.Preloader`             |
| -22.8% |  -125 | 32.8% → 32.4% |   548 → 423 | `main`                                     | `org.jetbrains.kotlin.preloading.Preloader`             |
| -12.8% |  -117 | 54.8% → 61.2% |   916 → 799 | `CompileBroker::invoke_compiler_on_method` | `<unknown>`                                             |
| -16.5% |   -69 | 24.9% → 26.7% |   417 → 348 | `invokeImpl`                               | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| -16.5% |   -69 | 24.9% → 26.7% |   417 → 348 | `invoke`                                   | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| -16.5% |   -69 | 24.9% → 26.7% |   417 → 348 | `invoke`                                   | `java.lang.reflect.Method`                              |
| -16.4% |   -68 | 24.8% → 26.6% |   415 → 347 | `doMain`                                   | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| -16.3% |   -68 | 24.9% → 26.7% |   416 → 348 | `main`                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| -16.3% |   -68 | 24.9% → 26.7% |   416 → 348 | `main`                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| -16.3% |   -68 | 24.9% → 26.7% |   416 → 348 | `invokeStatic`                             | `java.lang.invoke.LambdaForm$DMH`                       |
| -16.3% |   -68 | 24.9% → 26.7% |   416 → 348 | `invoke`                                   | `java.lang.invoke.LambdaForm$MH.0x0000007001009800`     |
| -16.3% |   -68 | 24.9% → 26.7% |   416 → 348 | `invokeExact_MT`                           | `java.lang.invoke.Invokers$Holder`                      |
| -16.2% |   -67 | 24.7% → 26.5% |   413 → 346 | `exec`                                     | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| -16.2% |   -67 | 24.7% → 26.5% |   413 → 346 | `doMainNoExit`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

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

|  Change | Delta |             % |   Samples | Function            | Location                                            |
| ------: | ----: | ------------: | --------: | ------------------- | --------------------------------------------------- |
|  -16.5% |   -69 | 24.9% → 26.7% | 417 → 348 | `invokeImpl`        | `jdk.internal.reflect.DirectMethodHandleAccessor`   |
|  -16.5% |   -69 | 24.9% → 26.7% | 417 → 348 | `invoke`            | `jdk.internal.reflect.DirectMethodHandleAccessor`   |
|  -16.5% |   -69 | 24.9% → 26.7% | 417 → 348 | `invoke`            | `java.lang.reflect.Method`                          |
|  -16.3% |   -68 | 24.9% → 26.7% | 416 → 348 | `invokeStatic`      | `java.lang.invoke.LambdaForm$DMH`                   |
|  -16.3% |   -68 | 24.9% → 26.7% | 416 → 348 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x0000007001009800` |
|  -16.3% |   -68 | 24.9% → 26.7% | 416 → 348 | `invokeExact_MT`    | `java.lang.invoke.Invokers$Holder`                  |
|  -28.9% |   -28 |   5.8% → 5.3% |   97 → 69 | `read`              | `java.util.zip.ZipInputStream`                      |
|  -28.9% |   -28 |   5.8% → 5.3% |   97 → 69 | `read`              | `java.io.FilterInputStream`                         |
|  -27.8% |   -27 |   5.8% → 5.4% |   97 → 70 | `read`              | `java.util.zip.InflaterInputStream`                 |
|  -27.4% |   -26 |   5.7% → 5.3% |   95 → 69 | `inflate`           | `java.util.zip.Inflater`                            |
|  -28.7% |   -25 |   5.2% → 4.8% |   87 → 62 | `loadClass`         | `java.lang.ClassLoader`                             |
|  -25.8% |   -24 |   5.6% → 5.3% |   93 → 69 | `inflateBytesBytes` | `java.util.zip.Inflater`                            |
|  -23.4% |   -18 |   4.6% → 4.5% |   77 → 59 | `defineClass`       | `java.lang.ClassLoader`                             |
|  -21.3% |   -16 |          4.5% |   75 → 59 | `defineClass1`      | `java.lang.ClassLoader`                             |
|  -42.3% |   -11 |   1.6% → 1.1% |   26 → 15 | `getValue`          | `kotlin.SynchronizedLazyImpl`                       |
| removed |    -7 |   0.4% → 0.0% |     7 → 0 | `<init>`            | `java.io.ByteArrayOutputStream`                     |
|  -35.3% |    -6 |   1.0% → 0.8% |   17 → 11 | `getValue`          | `kotlin.UnsafeLazyImpl`                             |
|  -75.0% |    -6 |   0.5% → 0.2% |     8 → 2 | `toByteArray`       | `java.io.ByteArrayOutputStream`                     |
|  -85.7% |    -6 |   0.4% → 0.1% |     7 → 1 | `getNode`           | `java.util.HashMap`                                 |
|  -85.7% |    -6 |   0.4% → 0.1% |     7 → 1 | `get`               | `java.util.HashMap`                                 |

##### JIT

|  Change | Delta |           % | Samples | Function               | Location    |
| ------: | ----: | ----------: | ------: | ---------------------- | ----------- |
| removed |    -5 | 0.3% → 0.0% |   5 → 0 | `zero_blocks`          | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0x)` | `<unknown>` |

#### Callers

Callers with the largest change in contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Matcher::match` (`<unknown>`)

| Change | Delta |      % | Samples | Caller              | Location    |
| -----: | ----: | -----: | ------: | ------------------- | ----------- |
| +41.0% |   +16 | 100.0% | 39 → 55 | `Compile::Code_Gen` | `<unknown>` |

##### `Compile::optimize_loops` (`<unknown>`)

| Change | Delta |      % | Samples | Caller              | Location    |
| -----: | ----: | -----: | ------: | ------------------- | ----------- |
| +31.9% |   +15 | 100.0% | 47 → 62 | `Compile::Optimize` | `<unknown>` |

##### `Matcher::xform` (`<unknown>`)

| Change | Delta |      % | Samples | Caller           | Location    |
| -----: | ----: | -----: | ------: | ---------------- | ----------- |
| +53.6% |   +15 | 100.0% | 28 → 43 | `Matcher::match` | `<unknown>` |

##### `tlv_get_addr` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                             | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------------- | ----------- |
|     new |    +3 | 0.0% → 10.3% |   0 → 3 | `PhaseChaitin::build_ifg_physical` | `<unknown>` |
|     new |    +2 |  0.0% → 6.9% |   0 → 2 | `TypeInstPtr::add_offset`          | `<unknown>` |
| removed |    -1 |  5.3% → 0.0% |   1 → 0 | `LIRGenerator::do_StoreField`      | `<unknown>` |
| removed |    -1 |  5.3% → 0.0% |   1 → 0 | `GraphKit::make_slow_call_ex`      | `<unknown>` |
| removed |    -1 |  5.3% → 0.0% |   1 → 0 | `PhaseValues::uncached_makecon`    | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize` (`<unknown>`)

| Change | Delta |      % |  Samples | Caller                           | Location    |
| -----: | ----: | -----: | -------: | -------------------------------- | ----------- |
|  +8.2% |    +8 | 100.0% | 97 → 105 | `PhaseIdealLoop::PhaseIdealLoop` | `<unknown>` |

##### `nmethod::nmethod` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                 | Location    |
| -----: | ----: | -----: | ------: | ---------------------- | ----------- |
| +88.9% |    +8 | 100.0% |  9 → 17 | `nmethod::new_nmethod` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                            | Location    |
| -----: | ----: | -----: | ------: | --------------------------------- | ----------- |
| +50.0% |    +8 | 100.0% | 16 → 24 | `PhaseIdealLoop::build_loop_late` | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`<unknown>`)

| Change | Delta |      % |  Samples | Caller                     | Location    |
| -----: | ----: | -----: | -------: | -------------------------- | ----------- |
|  +7.1% |    +7 | 100.0% | 98 → 105 | `PhaseIdealLoop::optimize` | `<unknown>` |

##### `nmethod::new_nmethod` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                   | Location    |
| -----: | ----: | -----: | ------: | ------------------------ | ----------- |
| +50.0% |    +7 | 100.0% | 14 → 21 | `ciEnv::register_method` | `<unknown>` |

##### `Matcher::Label_Root` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                | Location    |
| ------: | ----: | ------------: | ------: | --------------------- | ----------- |
| +100.0% |    +7 |        100.0% |  7 → 14 | `Matcher::match_tree` | `<unknown>` |
|  +80.0% |    +4 | 71.4% → 64.3% |   5 → 9 | `Matcher::Label_Root` | `<unknown>` |

##### `Matcher::match_tree` (`<unknown>`)

| Change | Delta |              % | Samples | Caller                | Location    |
| -----: | ----: | -------------: | ------: | --------------------- | ----------- |
| +22.2% |    +4 | 100.0% → 88.0% | 18 → 22 | `Matcher::xform`      | `<unknown>` |
|    new |    +3 |   0.0% → 12.0% |   0 → 3 | `Matcher::match_sfpt` | `<unknown>` |

##### `LIR_Assembler::process_debug_info` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                         | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------ | ----------- |
| +200.0% |    +6 | 100.0% → 90.0% |   3 → 9 | `LIR_Assembler::emit_lir_list` | `<unknown>` |
|     new |    +1 |   0.0% → 10.0% |   0 → 1 | `LIR_Assembler::emit_code`     | `<unknown>` |

##### `LIR_Assembler::record_non_safepoint_debug_info` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                              | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ----------- |
| +350.0% |    +7 | 40.0% → 75.0% |   2 → 9 | `LIR_Assembler::process_debug_info` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_early` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                               | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------ | ----------- |
| +87.5% |    +7 | 100.0% |  8 → 15 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `PhaseIdealLoop::optimize` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                    | Location    |
| -----: | ----: | ------------: | ------: | ------------------------- | ----------- |
| +34.8% |   +16 | 40.0% → 51.2% | 46 → 62 | `Compile::optimize_loops` | `<unknown>` |
| -14.5% |   -10 | 60.0% → 48.8% | 69 → 59 | `Compile::Optimize`       | `<unknown>` |

##### `PhaseIterGVN::optimize` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                     | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | ----------- |
|  +23.3% |    +7 | 56.6% → 62.7% | 30 → 37 | `Compile::Optimize`                        | `<unknown>` |
|  -33.3% |    -2 |  11.3% → 6.8% |   6 → 4 | `PhaseMacroExpand::expand_macro_nodes`     | `<unknown>` |
|   -6.3% |    -1 | 30.2% → 25.4% | 16 → 15 | `PhaseIdealLoop::optimize`                 | `<unknown>` |
| +100.0% |    +1 |   1.9% → 3.4% |   1 → 2 | `Compile::process_for_post_loop_opts_igvn` | `<unknown>` |
|     new |    +1 |   0.0% → 1.7% |   0 → 1 | `Compile::inline_incrementally_cleanup`    | `<unknown>` |

##### `accept` (`org.jetbrains.kotlin.ir.declarations.IrFile`)

| Change | Delta |             % | Samples | Caller                | Location                                                                              |
| -----: | ----: | ------------: | ------: | --------------------- | ------------------------------------------------------------------------------------- |
| +33.3% |    +1 | 50.0% → 33.3% |   3 → 4 | `transform`           | `org.jetbrains.kotlin.ir.declarations.IrFile`                                         |
| +50.0% |    +1 | 33.3% → 25.0% |   2 → 3 | `acceptVoid`          | `org.jetbrains.kotlin.ir.visitors.IrVisitorsKt`                                       |
|    new |    +1 |   0.0% → 8.3% |   0 → 1 | `lower`               | `org.jetbrains.kotlin.backend.jvm.lower.RecordEnclosingMethodsLowering`               |
|    new |    +1 |   0.0% → 8.3% |   0 → 1 | `lower`               | `org.jetbrains.kotlin.backend.jvm.lower.FakeLocalVariablesForBytecodeInlinerLowering` |
|    new |    +1 |   0.0% → 8.3% |   0 → 1 | `findInlineCallSites` | `org.jetbrains.kotlin.backend.jvm.ir.IrInlineReferenceLocatorKt`                      |

##### `State::DFA` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                | Location    |
| ------: | ----: | -----: | ------: | --------------------- | ----------- |
| +200.0% |    +6 | 100.0% |   3 → 9 | `Matcher::Label_Root` | `<unknown>` |

##### `acceptChildren` (`org.jetbrains.kotlin.ir.declarations.IrPackageFragment`)

| Change | Delta |              % | Samples | Caller               | Location                                                                        |
| -----: | ----: | -------------: | ------: | -------------------- | ------------------------------------------------------------------------------- |
|    new |    +2 |   0.0% → 25.0% |   0 → 2 | `visitElement`       | `org.jetbrains.kotlin.backend.jvm.ir.IrInlineReferenceLocator`                  |
|    new |    +2 |   0.0% → 25.0% |   0 → 2 | `lower`              | `org.jetbrains.kotlin.backend.jvm.lower.InterfaceObjectCallsLowering`           |
| +50.0% |    +1 | 100.0% → 37.5% |   2 → 3 | `acceptChildrenVoid` | `org.jetbrains.kotlin.ir.visitors.IrVisitorsKt`                                 |
|    new |    +1 |   0.0% → 12.5% |   0 → 1 | `visitElement`       | `org.jetbrains.kotlin.backend.jvm.lower.RecordEnclosingMethodsLowering$lower$1` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                    | Location                                                                                  |
| -----: | ----: | -----------: | ------: | ------------------------- | ----------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 14.3% |   0 → 1 | `parseMethodDescription`  | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaMethodBase$Companion` |
|    new |    +1 | 0.0% → 14.3% |   0 → 1 | `isInplaceCallEndMarker`  | `org.jetbrains.kotlin.codegen.inline.InlineArgumentsInPlaceKt`                            |
|    new |    +1 | 0.0% → 14.3% |   0 → 1 | `addType`                 | `jdk.internal.org.objectweb.asm.SymbolTable`                                              |
|    new |    +1 | 0.0% → 14.3% |   0 → 1 | `containingNonLocalClass` | `org.jetbrains.kotlin.fir.FirVisibilityCheckerKt`                                         |
|    new |    +1 | 0.0% → 14.3% |   0 → 1 | `data$lambda$0`           | `kotlin.reflect.jvm.internal.KClassImpl`                                                  |

##### `Arena::contains` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller           | Location    |
| ------: | ----: | -----: | ------: | ---------------- | ----------- |
| +200.0% |    +6 | 100.0% |   3 → 9 | `Matcher::xform` | `<unknown>` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                          | Location                                                  |
| ------: | ----: | -----------: | ------: | ------------------------------- | --------------------------------------------------------- |
|     new |    +2 | 0.0% → 15.4% |   0 → 2 | `JVM_IHashCode`                 | `<unknown>`                                               |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `<clinit>`                      | `org.jetbrains.kotlin.fir.analysis.diagnostics.FirErrors` |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `JVM_Clone`                     | `<unknown>`                                               |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `Runtime1::counter_overflow`    | `<unknown>`                                               |
|     new |    +1 |  0.0% → 7.7% |   0 → 1 | `InterpreterRuntime::anewarray` | `<unknown>`                                               |

##### `void G1CMTask::process_grey_task_entry<true>` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                        | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------- | ----------- |
|  +60.0% |    +3 | 50.0% → 57.1% |   5 → 8 | `G1CMTask::drain_local_queue` | `<unknown>` |
|  +50.0% |    +2 | 40.0% → 42.9% |   4 → 6 | `G1CMBitMap::iterate`         | `<unknown>` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `G1CMTask::do_marking_step`   | `<unknown>` |

##### `__vfprintf` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller       | Location    |
| ------: | ----: | -----: | ------: | ------------ | ----------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `_vsnprintf` | `<unknown>` |

##### `_vsnprintf` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller          | Location    |
| ------: | ----: | -----: | ------: | --------------- | ----------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `os::vsnprintf` | `<unknown>` |

##### `os::vsnprintf` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                | Location    |
| ------: | ----: | -------------: | ------: | --------------------- | ----------- |
| +100.0% |    +1 | 100.0% → 40.0% |   1 → 2 | `outputStream::print` | `<unknown>` |
|     new |    +1 |   0.0% → 20.0% |   0 → 1 | `jio_vsnprintf`       | `<unknown>` |
|     new |    +1 |   0.0% → 20.0% |   0 → 1 | `os::snprintf`        | `<unknown>` |
|     new |    +1 |   0.0% → 20.0% |   0 → 1 | `jio_snprintf`        | `<unknown>` |

##### `klassVtable::initialize_vtable` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                 | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------ | ----------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `klassVtable::initialize_vtable_and_check_constraints` | `<unknown>` |

##### `klassVtable::initialize_vtable_and_check_constraints` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                           | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------- | ----------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `InstanceKlass::link_class_impl` | `<unknown>` |

##### `Parse::build_exits` (`<unknown>`)

| Change | Delta |             % | Samples | Caller         | Location    |
| -----: | ----: | ------------: | ------: | -------------- | ----------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `Parse::Parse` | `<unknown>` |

##### `MethodData::initialize` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                 | Location    |
| -----: | ----: | ------------: | ------: | ---------------------- | ----------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `MethodData::allocate` | `<unknown>` |

##### `G1CollectedHeap::register_nmethod` (`<unknown>`)

| Change | Delta |             % | Samples | Caller             | Location    |
| -----: | ----: | ------------: | ------: | ------------------ | ----------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `nmethod::nmethod` | `<unknown>` |

##### `ClassFileParser::skip_over_field_signature` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                           | Location    |
| -----: | ----: | -----------: | ------: | ------------------------------------------------ | ----------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `ClassFileParser::parse_localvariable_table`     | `<unknown>` |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `ClassFileParser::verify_legal_method_signature` | `<unknown>` |

##### `State::_sub_Op_ConI` (`<unknown>`)

| Change | Delta |             % | Samples | Caller       | Location    |
| -----: | ----: | ------------: | ------: | ------------ | ----------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `State::DFA` | `<unknown>` |

##### `SymbolTable::lookup_only` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                         | Location    |
| -----: | ----: | -----: | ------: | ---------------------------------------------- | ----------- |
| +15.8% |    +3 | 100.0% | 19 → 22 | `ClassFileParser::parse_constant_pool_entries` | `<unknown>` |

##### `G1CMBitMap::iterate` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                      | Location    |
| -----: | ----: | -----: | ------: | --------------------------- | ----------- |
| +37.5% |    +3 | 100.0% |  8 → 11 | `G1CMTask::do_marking_step` | `<unknown>` |

##### `G1CMTask::drain_local_queue` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                      | Location    |
| ------: | ----: | ------------: | ------: | --------------------------- | ----------- |
| +100.0% |    +2 | 40.0% → 50.0% |   2 → 4 | `G1CMBitMap::iterate`       | `<unknown>` |
|  +33.3% |    +1 | 60.0% → 50.0% |   3 → 4 | `G1CMTask::do_marking_step` | `<unknown>` |

##### `ciEnv::register_method` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                        | Location    |
| -----: | ----: | ------------: | ------: | ----------------------------- | ----------- |
| +41.2% |    +7 | 73.9% → 85.7% | 17 → 24 | `Compilation::compile_method` | `<unknown>` |
| -33.3% |    -2 | 26.1% → 14.3% |   6 → 4 | `PhaseOutput::install_code`   | `<unknown>` |

##### `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                        | Location    |
| -----: | ----: | -----------: | ------: | --------------------------------------------- | ----------- |
|    new |    +4 | 0.0% → 80.0% |   0 → 4 | `PhaseIdealLoop::compute_lca_of_uses`         | `<unknown>` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `<unknown>` |

##### `PhaseIdealLoop::compute_lca_of_uses` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                      | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------- | ----------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |

##### `PhaseCFG::schedule_pinned_nodes` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                         | Location    |
| ------: | ----: | -----: | ------: | ------------------------------ | ----------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `PhaseCFG::global_code_motion` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                               | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------ | ----------- |
| +14.3% |    +4 | 100.0% | 28 → 32 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `LinearScan::compute_debug_info_for_scope` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                     | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | ----------- |
| +133.3% |    +4 |        100.0% |   3 → 7 | `LinearScan::assign_reg_num`               | `<unknown>` |
| +400.0% |    +4 | 33.3% → 71.4% |   1 → 5 | `LinearScan::compute_debug_info_for_scope` | `<unknown>` |

##### `LinearScan::build_intervals` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                       | Location    |
| -----: | ----: | -----: | ------: | ---------------------------- | ----------- |
| +66.7% |    +4 | 100.0% |  6 → 10 | `LinearScan::do_linear_scan` | `<unknown>` |

##### `acceptChildren` (`org.jetbrains.kotlin.ir.declarations.IrClass`)

| Change | Delta |            % | Samples | Caller               | Location                                                                        |
| -----: | ----: | -----------: | ------: | -------------------- | ------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 33.3% |   0 → 2 | `visitElement`       | `org.jetbrains.kotlin.backend.jvm.ir.IrInlineReferenceLocator`                  |
|    new |    +2 | 0.0% → 33.3% |   0 → 2 | `visitElement`       | `org.jetbrains.kotlin.backend.jvm.lower.InterfaceObjectCallsLowering`           |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `visitElement`       | `org.jetbrains.kotlin.backend.jvm.lower.RecordEnclosingMethodsLowering$lower$1` |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `acceptChildrenVoid` | `org.jetbrains.kotlin.ir.visitors.IrVisitorsKt`                                 |

##### `visitAnonymousFunction` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`)

|  Change | Delta |      % | Samples | Caller                             | Location                                                                          |
| ------: | ----: | -----: | ------: | ---------------------------------- | --------------------------------------------------------------------------------- |
| +250.0% |    +5 | 100.0% |   2 → 7 | `visitAnonymousFunctionExpression` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |

##### `visitAnonymousFunctionExpression` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`)

|  Change | Delta |      % | Samples | Caller                             | Location                                                                          |
| ------: | ----: | -----: | ------: | ---------------------------------- | --------------------------------------------------------------------------------- |
| +250.0% |    +5 | 100.0% |   2 → 7 | `visitAnonymousFunctionExpression` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |
| +250.0% |    +5 | 100.0% |   2 → 7 | `accept`                           | `org.jetbrains.kotlin.fir.expressions.FirAnonymousFunctionExpression`             |

##### `accept` (`org.jetbrains.kotlin.fir.expressions.FirAnonymousFunctionExpression`)

|  Change | Delta |             % | Samples | Caller                                              | Location                                                                                           |
| ------: | ----: | ------------: | ------: | --------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| +250.0% |    +5 | 66.7% → 87.5% |   2 → 7 | `acceptChildren`                                    | `org.jetbrains.kotlin.fir.expressions.impl.FirResolvedArgumentList`                                |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `visitFunctionCall`                                 | `org.jetbrains.kotlin.fir.resolve.dfa.FirLocalVariableAssignmentAnalyzer$Companion$MiniCfgBuilder` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `convertToIrExpression$org_jetbrains_kotlin_fir2ir` | `org.jetbrains.kotlin.fir.backend.Fir2IrVisitor`                                                   |

##### `fixVariable` (`org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`)

|  Change | Delta |      % | Samples | Caller               | Location                                                               |
| ------: | ----: | -----: | ------: | -------------------- | ---------------------------------------------------------------------- |
| +166.7% |    +5 | 100.0% |   3 → 8 | `fixVariableIfReady` | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |

##### `fixVariableIfReady` (`org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`)

|  Change | Delta |      % | Samples | Caller          | Location                                                               |
| ------: | ----: | -----: | ------: | --------------- | ---------------------------------------------------------------------- |
| +166.7% |    +5 | 100.0% |   3 → 8 | `runCompletion` | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |

##### `mapSignature` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`)

|  Change | Delta |      % | Samples | Caller                 | Location                                                         |
| ------: | ----: | -----: | ------: | ---------------------- | ---------------------------------------------------------------- |
| +166.7% |    +5 | 100.0% |   3 → 8 | `mapSignature$default` | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |

##### `mapSignature$default` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`)

| Change | Delta |              % | Samples | Caller                                | Location                                                         |
| -----: | ----: | -------------: | ------: | ------------------------------------- | ---------------------------------------------------------------- |
|    new |    +3 |   0.0% → 37.5% |   0 → 3 | `mapSignatureSkipGeneric`             | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |
| +33.3% |    +1 | 100.0% → 50.0% |   3 → 4 | `mapSignatureWithGeneric`             | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |
|    new |    +1 |   0.0% → 12.5% |   0 → 1 | `mapFakeOverrideSignatureSkipGeneric` | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |

##### `writeParameter` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`)

| Change | Delta |             % | Samples | Caller         | Location                                                         |
| -----: | ----: | ------------: | ------: | -------------- | ---------------------------------------------------------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `mapSignature` | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |

##### `processGivenConstraints` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`)

| Change | Delta |      % | Samples | Caller                                | Location                                                                     |
| -----: | ----: | -----: | ------: | ------------------------------------- | ---------------------------------------------------------------------------- |
| +50.0% |    +4 | 100.0% |  8 → 12 | `processConstraintsIgnoringForksData` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector` |

##### `processConstraintsIgnoringForksData` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`)

| Change | Delta |      % | Samples | Caller               | Location                                                                     |
| -----: | ----: | -----: | ------: | -------------------- | ---------------------------------------------------------------------------- |
| +50.0% |    +4 | 100.0% |  8 → 12 | `processConstraints` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector` |

##### `processConstraints` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`)

| Change | Delta |     % | Samples | Caller                                  | Location                                                                     |
| -----: | ----: | ----: | ------: | --------------------------------------- | ---------------------------------------------------------------------------- |
| +50.0% |    +3 | 75.0% |   6 → 9 | `addSubTypeConstraintAndIncorporateIt`  | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector` |
| +50.0% |    +1 | 25.0% |   2 → 3 | `addEqualityConstraintAndIncorporateIt` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector` |

##### `acceptChildren` (`org.jetbrains.kotlin.fir.expressions.impl.FirResolvedArgumentList`)

| Change | Delta |      % | Samples | Caller                | Location                                                                          |
| -----: | ----: | -----: | ------: | --------------------- | --------------------------------------------------------------------------------- |
| +66.7% |    +4 | 100.0% |  6 → 10 | `visitNestedElements` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |

##### `visitArgumentList` (`org.jetbrains.kotlin.fir.visitors.FirVisitor`)

| Change | Delta |      % | Samples | Caller   | Location                                               |
| -----: | ----: | -----: | ------: | -------- | ------------------------------------------------------ |
| +66.7% |    +4 | 100.0% |  6 → 10 | `accept` | `org.jetbrains.kotlin.fir.expressions.FirArgumentList` |

##### `accept` (`org.jetbrains.kotlin.fir.expressions.FirArgumentList`)

|  Change | Delta |             % | Samples | Caller           | Location                                                              |
| ------: | ----: | ------------: | ------: | ---------------- | --------------------------------------------------------------------- |
|  +80.0% |    +4 | 83.3% → 90.0% |   5 → 9 | `acceptChildren` | `org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl`       |
| +100.0% |    +1 | 16.7% → 20.0% |   1 → 2 | `acceptChildren` | `org.jetbrains.kotlin.fir.expressions.impl.FirImplicitInvokeCallImpl` |

##### `visitVariable` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|  Change | Delta |      % | Samples | Caller          | Location                                                     |
| ------: | ----: | -----: | ------: | --------------- | ------------------------------------------------------------ |
| +133.3% |    +4 | 100.0% |   3 → 7 | `visitVariable` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
| +133.3% |    +4 | 100.0% |   3 → 7 | `accept`        | `org.jetbrains.kotlin.ir.declarations.IrVariable`            |

##### `compileInlineFunction` (`org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`)

|  Change | Delta |      % | Samples | Caller          | Location                                                   |
| ------: | ----: | -----: | ------: | --------------- | ---------------------------------------------------------- |
| +100.0% |    +4 | 100.0% |   4 → 8 | `genInlineCall` | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen` |

##### `toIrType` (`org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter`)

|  Change | Delta |             % | Samples | Caller             | Location                                                 |
| ------: | ----: | ------------: | ------: | ------------------ | -------------------------------------------------------- |
| +100.0% |    +4 |        100.0% |   4 → 8 | `toIrType$default` | `org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter`   |
| +400.0% |    +4 | 25.0% → 62.5% |   1 → 5 | `toIrType`         | `org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverterKt` |

##### `linkToTargetMethod` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |            % | Samples | Caller                        | Location                                                                |
| -----: | ----: | -----------: | ------: | ----------------------------- | ----------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 40.0% |   0 → 2 | `toIrType`                    | `org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter`                  |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `approximateToSuperType`      | `org.jetbrains.kotlin.types.AbstractTypeApproximator`                   |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `toInterpolatingCall$default` | `org.jetbrains.kotlin.fir.builder.AbstractRawFirBuilder`                |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `<init>`                      | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerDataElementsForName` |

##### `newInvokeSpecial` (`java.lang.invoke.DirectMethodHandle$Holder`)

| Change | Delta |             % | Samples | Caller               | Location                           |
| -----: | ----: | ------------: | ------: | -------------------- | ---------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `linkToTargetMethod` | `java.lang.invoke.Invokers$Holder` |

##### `append` (`java.lang.StringBuilder`)

|  Change | Delta |            % | Samples | Caller             | Location                                                              |
| ------: | ----: | -----------: | ------: | ------------------ | --------------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `<init>`           | `org.jetbrains.kotlin.descriptors.impl.PackageFragmentDescriptorImpl` |
| +100.0% |    +1 |        50.0% |   1 → 2 | `toString`         | `org.jetbrains.kotlin.config.MavenComparableVersion$ListItem`         |
|     new |    +1 | 0.0% → 25.0% |   0 → 1 | `appendDescriptor` | `org.jetbrains.org.objectweb.asm.Type`                                |
|     new |    +1 | 0.0% → 25.0% |   0 → 1 | `endFormals`       | `org.jetbrains.org.objectweb.asm.signature.SignatureWriter`           |

##### `invokeStatic` (`java.lang.invoke.DirectMethodHandle$Holder`)

| Change | Delta |              % | Samples | Caller            | Location                                          |
| -----: | ----: | -------------: | ------: | ----------------- | ------------------------------------------------- |
| +50.0% |    +1 | 100.0% → 75.0% |   2 → 3 | `invokeExact_MT`  | `java.lang.invoke.Invokers$Holder`                |
|    new |    +1 |   0.0% → 25.0% |   0 → 1 | `copyWithExtendL` | `java.lang.invoke.BoundMethodHandle$Species_LLLL` |

##### `parseAnnotation2` (`sun.reflect.annotation.AnnotationParser`)

|  Change | Delta |            % | Samples | Caller              | Location                                  |
| ------: | ----: | -----------: | ------: | ------------------- | ----------------------------------------- |
| +100.0% |    +2 |       100.0% |   2 → 4 | `parseAnnotations2` | `sun.reflect.annotation.AnnotationParser` |
|     new |    +1 | 0.0% → 25.0% |   0 → 1 | `parseAnnotation`   | `sun.reflect.annotation.AnnotationParser` |

##### `parseAnnotations2` (`sun.reflect.annotation.AnnotationParser`)

|  Change | Delta |      % | Samples | Caller                   | Location                                  |
| ------: | ----: | -----: | ------: | ------------------------ | ----------------------------------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `parseAnnotations`       | `sun.reflect.annotation.AnnotationParser` |
| +100.0% |    +1 |  50.0% |   1 → 2 | `parseSelectAnnotations` | `sun.reflect.annotation.AnnotationParser` |

##### `parseAnnotations` (`sun.reflect.annotation.AnnotationParser`)

| Change | Delta |              % | Samples | Caller                 | Location                  |
| -----: | ----: | -------------: | ------: | ---------------------- | ------------------------- |
| +50.0% |    +1 | 100.0% → 75.0% |   2 → 3 | `declaredAnnotations`  | `java.lang.reflect.Field` |
|    new |    +1 |   0.0% → 25.0% |   0 → 1 | `createAnnotationData` | `java.lang.Class`         |

##### `compileToBytecode` (`java.lang.invoke.LambdaForm`)

| Change | Delta |            % | Samples | Caller         | Location                              |
| -----: | ----: | -----------: | ------: | -------------- | ------------------------------------- |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `maybeCompile` | `java.lang.invoke.DirectMethodHandle` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `prepare`      | `java.lang.invoke.LambdaForm`         |

##### `addMethod` (`java.lang.invoke.InvokerBytecodeGenerator`)

|  Change | Delta |      % | Samples | Caller                        | Location                                    |
| ------: | ----: | -----: | ------: | ----------------------------- | ------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `generateCustomizedCodeBytes` | `java.lang.invoke.InvokerBytecodeGenerator` |

##### `generateCustomizedCodeBytes` (`java.lang.invoke.InvokerBytecodeGenerator`)

|  Change | Delta |      % | Samples | Caller                   | Location                                    |
| ------: | ----: | -----: | ------: | ------------------------ | ------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `generateCustomizedCode` | `java.lang.invoke.InvokerBytecodeGenerator` |

##### `emitStaticInvoke` (`java.lang.invoke.InvokerBytecodeGenerator`)

| Change | Delta |             % | Samples | Caller      | Location                                    |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `addMethod` | `java.lang.invoke.InvokerBytecodeGenerator` |

##### `toString` (`java.lang.Long`)

| Change | Delta |             % | Samples | Caller          | Location               |
| -----: | ----: | ------------: | ------: | --------------- | ---------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `toString`      | `java.lang.Long`       |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `smallToString` | `java.math.BigInteger` |

##### `collectionSizeOrDefault` (`kotlin.collections.CollectionsKt__IterablesKt`)

| Change | Delta |            % | Samples | Caller                   | Location                                                                                  |
| -----: | ----: | -----------: | ------: | ------------------------ | ----------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `rigidType`              | `org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer`                            |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `createArgumentsMapping` | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer` |

##### `makePairwiseConvertByEditor` (`java.lang.invoke.MethodHandleImpl`)

| Change | Delta |             % | Samples | Caller                | Location                            |
| -----: | ----: | ------------: | ------: | --------------------- | ----------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `makePairwiseConvert` | `java.lang.invoke.MethodHandleImpl` |

##### `makePairwiseConvert` (`java.lang.invoke.MethodHandleImpl`)

| Change | Delta |             % | Samples | Caller                | Location                            |
| -----: | ----: | ------------: | ------: | --------------------- | ----------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `makePairwiseConvert` | `java.lang.invoke.MethodHandleImpl` |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `asTypeUncached`      | `java.lang.invoke.MethodHandle`     |

##### `asTypeUncached` (`java.lang.invoke.MethodHandle`)

| Change | Delta |             % | Samples | Caller   | Location                        |
| -----: | ----: | ------------: | ------: | -------- | ------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `asType` | `java.lang.invoke.MethodHandle` |

##### `asType` (`java.lang.invoke.MethodHandle`)

| Change | Delta |            % | Samples | Caller                  | Location                                           |
| -----: | ----: | -----------: | ------: | ----------------------- | -------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `makeSpecializedTarget` | `jdk.internal.reflect.MethodHandleAccessorFactory` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `asSpreader`            | `java.lang.invoke.MethodHandle`                    |

##### `toList` (`kotlin.sequences.SequencesKt___SequencesKt`)

| Change | Delta |            % | Samples | Caller                     | Location                                                                                                              |
| -----: | ----: | -----------: | ------: | -------------------------- | --------------------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `generateBodies`           | `org.jetbrains.kotlin.fir.backend.generators.Fir2IrDataClassGeneratedMemberBodyGenerator$MyDataClassMethodsGenerator` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `createProjectEnvironment` | `org.jetbrains.kotlin.cli.jvm.compiler.legacy.pipeline.JvmCompilerPipelineKt`                                         |

##### `hasNext` (`kotlin.collections.ReversedListReadOnly$listIterator$1`)

| Change | Delta |            % | Samples | Caller                                              | Location                                                           |
| -----: | ----: | -----------: | ------: | --------------------------------------------------- | ------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `processCandidatesWithGivenImplicitReceiverAsValue` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `toArray`                                           | `kotlin.jvm.internal.CollectionToArray`                            |

##### `<init>` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Caller          | Location                                           |
| -----: | ----: | ------------: | ------: | --------------- | -------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `toMutableList` | `kotlin.collections.CollectionsKt___CollectionsKt` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                    | Location                                                                             |
| ------: | ----: | -----------: | ------: | ------------------------- | ------------------------------------------------------------------------------------ |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `processPropertiesByName` | `org.jetbrains.kotlin.fir.resolve.calls.tower.DispatchReceiverMemberScopeTowerLevel` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `joinFlow`                | `org.jetbrains.kotlin.fir.resolve.dfa.LogicSystem`                                   |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `leaveTemps`              | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`                           |
|     new |    +1 | 0.0% → 14.3% |   0 → 1 | `<init>`                  | `org.jetbrains.kotlin.resolve.constants.AnnotationValue`                             |
|     new |    +1 | 0.0% → 14.3% |   0 → 1 | `isPrimitiveType`         | `org.jetbrains.kotlin.backend.jvm.mapping.IrTypeCheckerContextForTypeMapping`        |

##### `I2C/C2I adapters` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                      | Location                                                                                      |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `casTail`                                                   | `java.util.concurrent.locks.AbstractQueuedSynchronizer`                                       |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `transformBlockInCurrentScope$org_jetbrains_kotlin_resolve` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `visitVarInsn`                                              | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                                             |

##### `itable stub` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                  | Location                                                                                |
| ------: | ----: | -----------: | ------: | ----------------------- | --------------------------------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `checkElement`          | `org.jetbrains.kotlin.fir.analysis.collectors.CheckerRunningDiagnosticCollectorVisitor` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `isClassWithNamePrefix` | `org.jetbrains.kotlin.ir.util.IrTypeUtilsKt`                                            |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `isDeprecatedInJavaDoc` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaModifierListOwner`  |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `addAll`                | `java.util.AbstractCollection`                                                          |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `lookahead`             | `org.jetbrains.kotlin.parsing.AbstractKotlinParsing`                                    |

##### `vtable stub` (`<unknown>`)

| Change | Delta |             % | Samples | Caller   | Location            |
| -----: | ----: | ------------: | ------: | -------- | ------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `putVal` | `java.util.HashMap` |

##### `thread_native_entry` (`<unknown>`)

| Change | Delta |      % |     Samples | Caller           | Location    |
| -----: | ----: | -----: | ----------: | ---------------- | ----------- |
| -21.7% |  -240 | 100.0% | 1,107 → 867 | `_pthread_start` | `<unknown>` |

##### `_pthread_start` (`<unknown>`)

| Change | Delta |      % |     Samples | Caller         | Location    |
| -----: | ----: | -----: | ----------: | -------------- | ----------- |
| -21.7% |  -240 | 100.0% | 1,108 → 868 | `thread_start` | `<unknown>` |

##### `Thread::call_run` (`<unknown>`)

| Change | Delta |      % |     Samples | Caller                | Location    |
| -----: | ----: | -----: | ----------: | --------------------- | ----------- |
| -21.6% |  -239 | 100.0% | 1,106 → 867 | `thread_native_entry` | `<unknown>` |

##### `JavaThread::thread_main_inner` (`<unknown>`)

| Change | Delta |      % |   Samples | Caller             | Location    |
| -----: | ----: | -----: | --------: | ------------------ | ----------- |
| -15.9% |  -154 | 100.0% | 966 → 812 | `Thread::call_run` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop` (`<unknown>`)

| Change | Delta |      % |   Samples | Caller                          | Location    |
| -----: | ----: | -----: | --------: | ------------------------------- | ----------- |
| -15.3% |  -147 | 100.0% | 959 → 812 | `JavaThread::thread_main_inner` | `<unknown>` |

##### `run` (`org.jetbrains.kotlin.preloading.Preloader`)

| Change | Delta |      % |   Samples | Caller | Location                                    |
| -----: | ----: | -----: | --------: | ------ | ------------------------------------------- |
| -22.8% |  -125 | 100.0% | 548 → 423 | `main` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `CompileBroker::invoke_compiler_on_method` (`<unknown>`)

| Change | Delta |      % |   Samples | Caller                                | Location    |
| -----: | ----: | -----: | --------: | ------------------------------------- | ----------- |
| -12.8% |  -117 | 100.0% | 916 → 799 | `CompileBroker::compiler_thread_loop` | `<unknown>` |

##### `invokeImpl` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % |   Samples | Caller   | Location                                          |
| -----: | ----: | -----: | --------: | -------- | ------------------------------------------------- |
| -16.5% |   -69 | 100.0% | 417 → 348 | `invoke` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % |   Samples | Caller   | Location                   |
| -----: | ----: | -----: | --------: | -------- | -------------------------- |
| -16.5% |   -69 | 100.0% | 417 → 348 | `invoke` | `java.lang.reflect.Method` |

##### `invoke` (`java.lang.reflect.Method`)

|  Change | Delta |              % |   Samples | Caller                                  | Location                                                                |
| ------: | ----: | -------------: | --------: | --------------------------------------- | ----------------------------------------------------------------------- |
|  -16.3% |   -68 | 99.8% → 100.0% | 416 → 348 | `run`                                   | `org.jetbrains.kotlin.preloading.Preloader`                             |
| removed |    -1 |    0.2% → 0.0% |     1 → 0 | `getEnumConstantsShared`                | `java.lang.Class`                                                       |
|     new |    +1 |    0.0% → 0.3% |     0 → 1 | `parsePreprocessedCommandLineArguments` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |

##### `doMain` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change | Delta |      % |   Samples | Caller | Location                                               |
| -----: | ----: | -----: | --------: | ------ | ------------------------------------------------------ |
| -16.4% |   -68 | 100.0% | 415 → 347 | `main` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `main` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

| Change | Delta |      % |   Samples | Caller | Location                                     |
| -----: | ----: | -----: | --------: | ------ | -------------------------------------------- |
| -16.3% |   -68 | 100.0% | 416 → 348 | `main` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `main` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |      % |   Samples | Caller         | Location                          |
| -----: | ----: | -----: | --------: | -------------- | --------------------------------- |
| -16.3% |   -68 | 100.0% | 416 → 348 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH` |

##### `invokeStatic` (`java.lang.invoke.LambdaForm$DMH`)

| Change | Delta |           % |   Samples | Caller           | Location                                            |
| -----: | ----: | ----------: | --------: | ---------------- | --------------------------------------------------- |
| -16.3% |   -68 |      100.0% | 416 → 348 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000007001009800` |
| -42.9% |    -3 | 1.7% → 1.1% |     7 → 4 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder`                  |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000007001009800`)

| Change | Delta |      % |   Samples | Caller           | Location                           |
| -----: | ----: | -----: | --------: | ---------------- | ---------------------------------- |
| -16.3% |   -68 | 100.0% | 416 → 348 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |           % |   Samples | Caller       | Location                                          |
| -----: | ----: | ----------: | --------: | ------------ | ------------------------------------------------- |
| -16.3% |   -68 |      100.0% | 416 → 348 | `invokeImpl` | `jdk.internal.reflect.DirectMethodHandleAccessor` |
| -22.2% |    -2 | 2.2% → 2.0% |     9 → 7 | `invoke`     | `java.lang.invoke.BootstrapMethodInvoker`         |

##### `exec` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |      % |   Samples | Caller         | Location                                                |
| -----: | ----: | -----: | --------: | -------------- | ------------------------------------------------------- |
| -16.2% |   -67 | 100.0% | 413 → 346 | `exec`         | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| -16.2% |   -67 | 100.0% | 413 → 346 | `doMainNoExit` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMainNoExit` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change | Delta |      % |   Samples | Caller                 | Location                                                |
| -----: | ----: | -----: | --------: | ---------------------- | ------------------------------------------------------- |
| -16.2% |   -67 | 100.0% | 413 → 346 | `doMainNoExit$default` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `__psynch_mutexwait` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                              | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------- | ----------- |
| -83.1% |   -64 | 100.0% | 77 → 13 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `_pthread_mutex_firstfit_lock_slow` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------- | ----------- |
| -85.7% |   -30 | 45.5% → 38.5% |  35 → 5 | `Mutex::lock`                         | `<unknown>` |
| -76.9% |   -20 | 33.8% → 46.2% |  26 → 6 | `ThreadCritical::ThreadCritical`      | `<unknown>` |
| -88.9% |    -8 |  11.7% → 7.7% |   9 → 1 | `_pthread_cond_wait`                  | `<unknown>` |
| -85.7% |    -6 |   9.1% → 7.7% |   7 → 1 | `Mutex::lock_without_safepoint_check` | `<unknown>` |

##### `WorkerThread::run` (`<unknown>`)

| Change | Delta |      % |  Samples | Caller             | Location    |
| -----: | ----: | -----: | -------: | ------------------ | ----------- |
| -54.4% |   -62 | 100.0% | 114 → 52 | `Thread::call_run` | `<unknown>` |

##### `PlatformMonitor::wait` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                  | Location    |
| -----: | ----: | ------------: | ------: | --------------------------------------- | ----------- |
| -73.2% |   -30 | 56.9% → 78.6% | 41 → 11 | `Monitor::wait`                         | `<unknown>` |
| -90.3% |   -28 | 43.1% → 21.4% |  31 → 3 | `Monitor::wait_without_safepoint_check` | `<unknown>` |

##### `__psynch_cvwait` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                  | Location    |
| -----: | ----: | -----: | ------: | ----------------------- | ----------- |
| -80.6% |   -50 | 100.0% | 62 → 12 | `PlatformMonitor::wait` | `<unknown>` |

##### `Compiler::compile_method` (`<unknown>`)

| Change | Delta |      % |   Samples | Caller                                     | Location    |
| -----: | ----: | -----: | --------: | ------------------------------------------ | ----------- |
| -15.1% |   -41 | 100.0% | 272 → 231 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |

##### `G1EvacuateRegionsBaseTask::work` (`<unknown>`)

| Change | Delta |      % | Samples | Caller              | Location    |
| -----: | ----: | -----: | ------: | ------------------- | ----------- |
| -72.2% |   -39 | 100.0% | 54 → 15 | `WorkerThread::run` | `<unknown>` |

##### `Mutex::lock` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                 | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------- | ----------- |
|  -93.8% |   -15 | 44.4% → 20.0% |  16 → 1 | `CompileBroker::compile_method_base`   | `<unknown>` |
| removed |    -4 |  11.1% → 0.0% |   4 → 0 | `InstanceKlass::link_class_impl`       | `<unknown>` |
|  -80.0% |    -4 | 13.9% → 20.0% |   5 → 1 | `InstanceKlass::add_to_hierarchy_impl` | `<unknown>` |
|  -66.7% |    -4 | 16.7% → 40.0% |   6 → 2 | `ciMethod::ciMethod`                   | `<unknown>` |
|  -66.7% |    -2 |  8.3% → 20.0% |   3 → 1 | `ciEnv::register_method`               | `<unknown>` |

##### `Parse::do_all_blocks` (`<unknown>`)

| Change | Delta |      % | Samples | Caller         | Location    |
| -----: | ----: | -----: | ------: | -------------- | ----------- |
| -35.7% |   -30 | 100.0% | 84 → 54 | `Parse::Parse` | `<unknown>` |

##### `Monitor::wait` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                          | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------- | ----------- |
|  -72.5% |   -29 | 97.6% → 100.0% | 40 → 11 | `CompileQueue::get`             | `<unknown>` |
| removed |    -1 |    2.4% → 0.0% |   1 → 0 | `VMThread::wait_until_executed` | `<unknown>` |

##### `Parse::do_one_block` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                 | Location    |
| -----: | ----: | -----: | ------: | ---------------------- | ----------- |
| -34.9% |   -29 | 100.0% | 83 → 54 | `Parse::do_all_blocks` | `<unknown>` |

##### `Parse::Parse` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                     | Location    |
| -----: | ----: | -----: | ------: | -------------------------- | ----------- |
| -33.7% |   -29 | 100.0% | 86 → 57 | `ParseGenerator::generate` | `<unknown>` |

##### `ParseGenerator::generate` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                 | Location    |
| ------: | ----: | -------------: | ------: | -------------------------------------- | ----------- |
|  -32.1% |   -27 | 97.7% → 100.0% | 84 → 57 | `Compile::Compile`                     | `<unknown>` |
|  -34.8% |   -16 |  53.5% → 52.6% | 46 → 30 | `PredictedCallGenerator::generate`     | `<unknown>` |
|  -20.6% |    -7 |  39.5% → 47.4% | 34 → 27 | `Parse::do_call`                       | `<unknown>` |
| removed |    -1 |    1.2% → 0.0% |   1 → 0 | `CallGenerator::do_late_inline_helper` | `<unknown>` |

##### `G1ParEvacuateFollowersClosure::do_void` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                         | Location    |
| -----: | ----: | -----: | ------: | ---------------------------------------------- | ----------- |
| -76.3% |   -29 | 100.0% |  38 → 9 | `G1EvacuateRegionsTask::evacuate_live_objects` | `<unknown>` |

##### `G1EvacuateRegionsTask::evacuate_live_objects` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                            | Location    |
| -----: | ----: | -----: | ------: | --------------------------------- | ----------- |
| -76.3% |   -29 | 100.0% |  38 → 9 | `G1EvacuateRegionsBaseTask::work` | `<unknown>` |

##### `C2Compiler::compile_method` (`<unknown>`)

| Change | Delta |      % |   Samples | Caller                                     | Location    |
| -----: | ----: | -----: | --------: | ------------------------------------------ | ----------- |
| -10.6% |   -66 | 100.0% | 624 → 558 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |

##### `Compile::Compile` (`<unknown>`)

|  Change | Delta |              % |   Samples | Caller                       | Location    |
| ------: | ----: | -------------: | --------: | ---------------------------- | ----------- |
|  -10.3% |   -64 | 99.8% → 100.0% | 620 → 556 | `C2Compiler::compile_method` | `<unknown>` |
| removed |    -1 |    0.2% → 0.0% |     1 → 0 | `OptoRuntime::generate_stub` | `<unknown>` |

##### `Compilation::compile_java_method` (`<unknown>`)

| Change | Delta |      % |   Samples | Caller                        | Location    |
| -----: | ----: | -----: | --------: | ----------------------------- | ----------- |
| -18.4% |   -46 | 100.0% | 250 → 204 | `Compilation::compile_method` | `<unknown>` |

##### `Compilation::Compilation` (`<unknown>`)

| Change | Delta |      % |   Samples | Caller                     | Location    |
| -----: | ----: | -----: | --------: | -------------------------- | ----------- |
| -15.1% |   -41 | 100.0% | 271 → 230 | `Compiler::compile_method` | `<unknown>` |

##### `Compilation::compile_method` (`<unknown>`)

| Change | Delta |      % |   Samples | Caller                     | Location    |
| -----: | ----: | -----: | --------: | -------------------------- | ----------- |
| -14.8% |   -40 | 100.0% | 270 → 230 | `Compilation::Compilation` | `<unknown>` |

##### `Compile::Code_Gen` (`<unknown>`)

| Change | Delta |      % |   Samples | Caller             | Location    |
| -----: | ----: | -----: | --------: | ------------------ | ----------- |
| -10.5% |   -33 | 100.0% | 313 → 280 | `Compile::Compile` | `<unknown>` |

##### `CompileQueue::get` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------- | ----------- |
| -68.3% |   -28 | 100.0% | 41 → 13 | `CompileBroker::compiler_thread_loop` | `<unknown>` |

##### `GraphBuilder::GraphBuilder` (`<unknown>`)

| Change | Delta |      % | Samples | Caller             | Location    |
| -----: | ----: | -----: | ------: | ------------------ | ----------- |
| -28.7% |   -23 | 100.0% | 80 → 57 | `IRScope::IRScope` | `<unknown>` |

##### `Compilation::build_hir` (`<unknown>`)

| Change | Delta |      % |  Samples | Caller                             | Location    |
| -----: | ----: | -----: | -------: | ---------------------------------- | ----------- |
| -22.5% |   -23 | 100.0% | 102 → 79 | `Compilation::compile_java_method` | `<unknown>` |

##### `CompilationPolicy::event` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                 | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------ | ----------- |
| -76.2% |   -16 | 77.8% → 83.3% |  21 → 5 | `InterpreterRuntime::frequency_counter_overflow_inner` | `<unknown>` |
| -83.3% |    -5 | 22.2% → 16.7% |   6 → 1 | `Runtime1::counter_overflow`                           | `<unknown>` |

##### `GraphBuilder::iterate_all_blocks` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                          | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------- | ----------- |
| -26.7% |   -20 |        100.0% | 75 → 55 | `GraphBuilder::GraphBuilder`    | `<unknown>` |
| -25.0% |   -10 | 53.3% → 54.5% | 40 → 30 | `GraphBuilder::try_inline_full` | `<unknown>` |

##### `CompileBroker::compile_method` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                          | Location    |
| -----: | ----: | -----: | ------: | ------------------------------- | ----------- |
| -83.3% |   -20 | 100.0% |  24 → 4 | `CompileBroker::compile_method` | `<unknown>` |
| -83.3% |   -20 | 100.0% |  24 → 4 | `CompilationPolicy::event`      | `<unknown>` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                             | Location    |
| -----: | ----: | -----: | ------: | ---------------------------------- | ----------- |
| -26.0% |   -19 | 100.0% | 73 → 54 | `GraphBuilder::iterate_all_blocks` | `<unknown>` |

##### `CompileBroker::compile_method_base` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                          | Location    |
| -----: | ----: | -----: | ------: | ------------------------------- | ----------- |
| -85.7% |   -18 | 100.0% |  21 → 3 | `CompileBroker::compile_method` | `<unknown>` |

##### `IntervalWalker::walk_to` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                           | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------- | ----------- |
| -40.0% |   -16 | 93.0% → 96.0% | 40 → 24 | `LinearScan::allocate_registers` | `<unknown>` |
| -44.4% |    -4 | 20.9% → 20.0% |   9 → 5 | `IntervalWalker::walk_to`        | `<unknown>` |
| -66.7% |    -2 |   7.0% → 4.0% |   3 → 1 | `LinearScan::compute_oop_map`    | `<unknown>` |

##### `ciBytecodeStream::get_method` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------- | ----------- |
|  -85.7% |   -12 | 37.8% → 10.5% |  14 → 2 | `ciTypeFlow::StateVector::do_invoke`  | `<unknown>` |
|  -35.0% |    -7 | 54.1% → 68.4% | 20 → 13 | `GraphBuilder::invoke`                | `<unknown>` |
|  +50.0% |    +1 |  5.4% → 15.8% |   2 → 3 | `ciMethod::get_method_at_bci`         | `<unknown>` |
| removed |    -1 |   2.7% → 0.0% |   1 → 0 | `Parse::do_call`                      | `<unknown>` |
|     new |    +1 |   0.0% → 5.3% |   0 → 1 | `BCEscapeAnalyzer::iterate_one_block` | `<unknown>` |

##### `Compilation::emit_lir` (`<unknown>`)

| Change | Delta |      % |  Samples | Caller                             | Location    |
| -----: | ----: | -----: | -------: | ---------------------------------- | ----------- |
| -16.0% |   -16 | 100.0% | 100 → 84 | `Compilation::compile_java_method` | `<unknown>` |

##### `LinearScan::allocate_registers` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                       | Location    |
| -----: | ----: | -----: | ------: | ---------------------------- | ----------- |
| -37.5% |   -15 | 100.0% | 40 → 25 | `LinearScan::do_linear_scan` | `<unknown>` |

##### `doMainNoExit$default` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change | Delta |      % |   Samples | Caller   | Location                                                |
| -----: | ----: | -----: | --------: | -------- | ------------------------------------------------------- |
| -16.2% |   -67 | 100.0% | 414 → 347 | `doMain` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `runPhasedPipeline` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |      % |   Samples | Caller                             | Location                                                |
| -----: | ----: | -----: | --------: | ---------------------------------- | ------------------------------------------------------- |
| -16.1% |   -63 | 100.0% | 392 → 329 | `executeAndReturnPipeLineArtifact` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `doExecutePhased` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |      % |   Samples | Caller            | Location                                      |
| -----: | ----: | -----: | --------: | ----------------- | --------------------------------------------- |
| -15.7% |   -62 | 100.0% | 394 → 332 | `doExecutePhased` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`  |
| -15.7% |   -62 | 100.0% | 394 → 332 | `execImpl`        | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `execImpl` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |      % |   Samples | Caller | Location                                      |
| -----: | ----: | -----: | --------: | ------ | --------------------------------------------- |
| -15.7% |   -62 | 100.0% | 394 → 332 | `exec` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `executeAndReturnPipeLineArtifact` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |      % |   Samples | Caller                                     | Location                                                |
| -----: | ----: | -----: | --------: | ------------------------------------------ | ------------------------------------------------------- |
| -15.6% |   -61 | 100.0% | 392 → 331 | `executeAndReturnPipeLineArtifact$default` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |      % |   Samples | Caller    | Location                                                |
| -----: | ----: | -----: | --------: | --------- | ------------------------------------------------------- |
| -15.6% |   -61 | 100.0% | 392 → 331 | `execute` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |      % |   Samples | Caller            | Location                                     |
| -----: | ----: | -----: | --------: | ----------------- | -------------------------------------------- |
| -15.6% |   -61 | 100.0% | 392 → 331 | `doExecutePhased` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `phaseBody` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

| Change | Delta |      % |   Samples | Caller      | Location                                                |
| -----: | ----: | -----: | --------: | ----------- | ------------------------------------------------------- |
| -15.5% |   -60 | 100.0% | 388 → 328 | `phaseBody` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| -15.5% |   -60 | 100.0% | 388 → 328 | `invoke`    | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invoke` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

| Change | Delta |           % |   Samples | Caller     | Location                                                          |
| -----: | ----: | ----------: | --------: | ---------- | ----------------------------------------------------------------- |
| -15.5% |   -60 |      100.0% | 388 → 328 | `invoke`   | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase`       |
| -10.5% |    -2 | 4.9% → 5.2% |   19 → 17 | `invoke`   | `org.jetbrains.kotlin.backend.common.phaser.PerformByIrFilePhase` |
| -20.0% |    -1 | 1.3% → 1.2% |     5 → 4 | `runPhase` | `org.jetbrains.kotlin.backend.common.phaser.PhaseEngine`          |

##### `invoke` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`)

| Change | Delta |      % |   Samples | Caller           | Location                                             |
| -----: | ----: | -----: | --------: | ---------------- | ---------------------------------------------------- |
| -15.5% |   -60 | 100.0% | 388 → 328 | `invokeToplevel` | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt` |

##### `invokeToplevel` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`)

| Change | Delta |      % |   Samples | Caller              | Location                                                |
| -----: | ----: | -----: | --------: | ------------------- | ------------------------------------------------------- |
| -15.5% |   -60 | 100.0% | 388 → 328 | `runPhasedPipeline` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `loadAllClassesFromJars` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

| Change | Delta |      % |  Samples | Caller           | Location                                               |
| -----: | ----: | -----: | -------: | ---------------- | ------------------------------------------------------ |
| -43.1% |   -56 | 100.0% | 130 → 74 | `preloadClasses` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `preloadClasses` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

| Change | Delta |            % |  Samples | Caller           | Location                                               |
| -----: | ----: | -----------: | -------: | ---------------- | ------------------------------------------------------ |
| -43.1% |   -56 |       100.0% | 130 → 74 | `run`            | `org.jetbrains.kotlin.preloading.Preloader`            |
| -50.0% |    -7 | 10.8% → 9.5% |   14 → 7 | `preloadClasses` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `read` (`java.util.zip.ZipInputStream`)

| Change | Delta |      % | Samples | Caller | Location                    |
| -----: | ----: | -----: | ------: | ------ | --------------------------- |
| -28.9% |   -28 | 100.0% | 97 → 69 | `read` | `java.io.FilterInputStream` |

##### `read` (`java.io.FilterInputStream`)

| Change | Delta |           % | Samples | Caller                   | Location                                               |
| -----: | ----: | ----------: | ------: | ------------------------ | ------------------------------------------------------ |
| -28.9% |   -28 |      100.0% | 97 → 69 | `loadAllClassesFromJars` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
| -66.7% |    -2 | 3.1% → 1.4% |   3 → 1 | `read`                   | `java.io.PushbackInputStream`                          |

##### `read` (`java.util.zip.InflaterInputStream`)

| Change | Delta |             % | Samples | Caller     | Location                       |
| -----: | ----: | ------------: | ------: | ---------- | ------------------------------ |
| -26.6% |   -25 | 96.9% → 98.6% | 94 → 69 | `read`     | `java.util.zip.ZipInputStream` |
| -66.7% |    -2 |   3.1% → 1.4% |   3 → 1 | `getBytes` | `jdk.internal.loader.Resource` |

##### `inflate` (`java.util.zip.Inflater`)

| Change | Delta |             % | Samples | Caller                         | Location                                                          |
| -----: | ----: | ------------: | ------: | ------------------------------ | ----------------------------------------------------------------- |
| -25.3% |   -23 | 95.8% → 98.6% | 91 → 68 | `read`                         | `java.util.zip.InflaterInputStream`                               |
| -75.0% |    -3 |   4.2% → 1.4% |   4 → 1 | `inflate`                      | `java.util.zip.Inflater`                                          |
| -75.0% |    -3 |   4.2% → 1.4% |   4 → 1 | `contentsToByteArray$lambda$0` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt` |

##### `loadClass` (`java.lang.ClassLoader`)

|  Change | Delta |             % | Samples | Caller                      | Location                                                                                                |
| ------: | ----: | ------------: | ------: | --------------------------- | ------------------------------------------------------------------------------------------------------- |
|  -24.7% |   -20 | 93.1% → 98.4% | 81 → 61 | `loadClass`                 | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`                                                |
| removed |    -2 |   2.3% → 0.0% |   2 → 0 | `forName0`                  | `java.lang.Class`                                                                                       |
|  -50.0% |    -1 |   2.3% → 1.6% |   2 → 1 | `loadClass`                 | `java.lang.ClassLoader`                                                                                 |
| removed |    -1 |   1.1% → 0.0% |   1 → 0 | `<clinit>`                  | `org.jetbrains.kotlin.scripting.compiler.plugin.services.FirScriptResolutionConfigurationExtensionImpl` |
| removed |    -1 |   1.1% → 0.0% |   1 → 0 | `registerProjectComponents` | `org.jetbrains.kotlin.scripting.compiler.plugin.ScriptingCompilerConfigurationComponentRegistrar`       |

##### `inflateBytesBytes` (`java.util.zip.Inflater`)

| Change | Delta |      % | Samples | Caller    | Location                 |
| -----: | ----: | -----: | ------: | --------- | ------------------------ |
| -25.8% |   -24 | 100.0% | 93 → 69 | `inflate` | `java.util.zip.Inflater` |

##### `defineClass` (`java.lang.ClassLoader`)

| Change | Delta |      % | Samples | Caller        | Location                                                 |
| -----: | ----: | -----: | ------: | ------------- | -------------------------------------------------------- |
| -23.4% |   -18 | 100.0% | 77 → 59 | `defineClass` | `java.lang.ClassLoader`                                  |
| -23.4% |   -18 | 100.0% | 77 → 59 | `findClass`   | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `defineClass1` (`java.lang.ClassLoader`)

| Change | Delta |      % | Samples | Caller        | Location                |
| -----: | ----: | -----: | ------: | ------------- | ----------------------- |
| -21.3% |   -16 | 100.0% | 75 → 59 | `defineClass` | `java.lang.ClassLoader` |

##### `getValue` (`kotlin.SynchronizedLazyImpl`)

|  Change | Delta |             % | Samples | Caller                            | Location                                                                 |
| ------: | ----: | ------------: | ------: | --------------------------------- | ------------------------------------------------------------------------ |
|  -66.7% |    -4 | 23.1% → 13.3% |   6 → 2 | `getSuperTypeRefs`                | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass`                |
|  -60.0% |    -3 | 19.2% → 13.3% |   5 → 2 | `getMyChildren`                   | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile`                |
|  -33.3% |    -1 | 11.5% → 13.3% |   3 → 2 | `getInstance`                     | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$Companion`                |
| removed |    -1 |   3.8% → 0.0% |   1 → 0 | `getConfiguredExtensionFactories` | `org.jetbrains.kotlin.fir.extensions.FirExtensionRegistrar`              |
|  -50.0% |    -1 |   7.7% → 6.7% |   2 → 1 | `getMAP`                          | `org.jetbrains.kotlin.fir.analysis.diagnostics.FirErrorsDefaultMessages` |

##### `<init>` (`java.io.ByteArrayOutputStream`)

|  Change | Delta |             % | Samples | Caller                   | Location                                               |
| ------: | ----: | ------------: | ------: | ------------------------ | ------------------------------------------------------ |
| removed |    -7 | 100.0% → 0.0% |   7 → 0 | `loadAllClassesFromJars` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `getValue` (`kotlin.UnsafeLazyImpl`)

|  Change | Delta |            % | Samples | Caller                                                 | Location                                                                                                                        |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| removed |    -2 | 11.8% → 0.0% |   2 → 0 | `getData`                                              | `org.jetbrains.kotlin.fir.analysis.cfa.util.PropertyInitializationInfoData`                                                     |
| removed |    -1 |  5.9% → 0.0% |   1 → 0 | `getCallResolver`                                      | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformer$BodyResolveTransformerComponents` |
| removed |    -1 |  5.9% → 0.0% |   1 → 0 | `getIntegerLiteralAndOperatorApproximationTransformer` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformer$BodyResolveTransformerComponents` |
| removed |    -1 |  5.9% → 0.0% |   1 → 0 | `getSystem`                                            | `org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate`                                                                    |
| +100.0% |    +1 | 5.9% → 18.2% |   1 → 2 | `getReversedFilteredLocalScopes`                       | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerDataElementsForName`                                                         |

##### `toByteArray` (`java.io.ByteArrayOutputStream`)

| Change | Delta |      % | Samples | Caller                   | Location                                               |
| -----: | ----: | -----: | ------: | ------------------------ | ------------------------------------------------------ |
| -75.0% |    -6 | 100.0% |   8 → 2 | `loadAllClassesFromJars` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `getNode` (`java.util.HashMap`)

|  Change | Delta |              % | Samples | Caller | Location                  |
| ------: | ----: | -------------: | ------: | ------ | ------------------------- |
|  -83.3% |    -5 | 85.7% → 100.0% |   6 → 1 | `get`  | `java.util.HashMap`       |
| removed |    -1 |   14.3% → 0.0% |   1 → 0 | `get`  | `java.util.LinkedHashMap` |

##### `get` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller                   | Location                                                         |
| ------: | ----: | ------------: | ------: | ------------------------ | ---------------------------------------------------------------- |
| removed |    -6 |  85.7% → 0.0% |   6 → 0 | `loadAllClassesFromJars` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`           |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `mapJavaToKotlin`        | `org.jetbrains.kotlin.builtins.jvm.JavaToKotlinClassMap`         |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `getIntrinsic`           | `org.jetbrains.kotlin.backend.jvm.intrinsics.IrIntrinsicMethods` |

##### `zero_blocks` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller   | Location                        |
| ------: | ----: | ------------: | ------: | -------- | ------------------------------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `<init>` | `java.io.ByteArrayOutputStream` |

##### `I2C/C2I adapters(0x)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller   | Location                                                        |
| ------: | ----: | ------------: | ------: | -------- | --------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>` | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$Builder` |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Matcher::match` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                 | Location    |
| ------: | ----: | ------------: | ------: | ---------------------- | ----------- |
|  +53.6% |   +15 | 71.8% → 78.2% | 28 → 43 | `Matcher::xform`       | `<unknown>` |
|  +33.3% |    +2 | 15.4% → 14.5% |   6 → 8 | `Matcher::find_shared` | `<unknown>` |
| removed |    -1 |   2.6% → 0.0% |   1 → 0 | `RegionNode::Opcode`   | `<unknown>` |
| removed |    -1 |   2.6% → 0.0% |   1 → 0 | `IfTrueNode::Opcode`   | `<unknown>` |
|     new |    +1 |   0.0% → 1.8% |   0 → 1 | `DecodeNNode::Opcode`  | `<unknown>` |

##### `Compile::optimize_loops` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                     | Location    |
| ------: | ----: | -------------: | ------: | -------------------------- | ----------- |
|  +34.8% |   +16 | 97.9% → 100.0% | 46 → 62 | `PhaseIdealLoop::optimize` | `<unknown>` |
| removed |    -1 |    2.1% → 0.0% |   1 → 0 | `Compile::print_method`    | `<unknown>` |

##### `Matcher::xform` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                | Location    |
| ------: | ----: | ------------: | ------: | --------------------- | ----------- |
| +200.0% |    +6 | 10.7% → 20.9% |   3 → 9 | `Arena::contains`     | `<unknown>` |
|  +22.2% |    +4 | 64.3% → 51.2% | 18 → 22 | `Matcher::match_tree` | `<unknown>` |
|     new |    +4 |   0.0% → 9.3% |   0 → 4 | `Matcher::match_sfpt` | `<unknown>` |
| removed |    -2 |   7.1% → 0.0% |   2 → 0 | `Node::clone`         | `<unknown>` |
| removed |    -1 |   3.6% → 0.0% |   1 → 0 | `Node::out_grow`      | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                 | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------- | ----------- |
|  +87.5% |    +7 |  8.2% → 14.3% |  8 → 15 | `PhaseIdealLoop::build_loop_early`     | `<unknown>` |
|  +14.3% |    +4 | 28.9% → 30.5% | 28 → 32 | `PhaseIdealLoop::build_loop_late`      | `<unknown>` |
|  +22.2% |    +2 |  9.3% → 10.5% |  9 → 11 | `PhaseIdealLoop::build_loop_tree`      | `<unknown>` |
|  -10.0% |    -2 | 20.6% → 17.1% | 20 → 18 | `PhaseIdealLoop::split_if_with_blocks` | `<unknown>` |
| removed |    -1 |   1.0% → 0.0% |   1 → 0 | `_platform_memset`                     | `<unknown>` |

##### `nmethod::nmethod` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                              | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ----------- |
|     new |    +4 |  0.0% → 23.5% |   0 → 4 | `G1CollectedHeap::register_nmethod` | `<unknown>` |
| +200.0% |    +2 | 11.1% → 17.6% |   1 → 3 | `CodeBuffer::copy_code_to`          | `<unknown>` |
| removed |    -1 |  11.1% → 0.0% |   1 → 0 | `nmethod::fix_oop_relocations`      | `<unknown>` |
|  +25.0% |    +1 | 44.4% → 29.4% |   4 → 5 | `CompiledMethod::CompiledMethod`    | `<unknown>` |
| removed |    -1 |  11.1% → 0.0% |   1 → 0 | `nmethod::finalize_relocations`     | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                                  | Location    |
| ------: | ----: | -----------: | ------: | --------------------------------------- | ----------- |
|     new |    +5 | 0.0% → 20.8% |   0 → 5 | `PhaseIdealLoop::compute_lca_of_uses`   | `<unknown>` |
| removed |    -1 |  6.3% → 0.0% |   1 → 0 | `Node_Array::grow`                      | `<unknown>` |
|     new |    +1 |  0.0% → 4.2% |   0 → 1 | `ProjNode::is_uncommon_trap_if_pattern` | `<unknown>` |
|     new |    +1 |  0.0% → 4.2% |   0 → 1 | `ProjNode::is_uncommon_trap_proj`       | `<unknown>` |
|     new |    +1 |  0.0% → 4.2% |   0 → 1 | `PhiNode::Opcode`                       | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`<unknown>`)

|  Change | Delta |              % |  Samples | Callee                               | Location    |
| ------: | ----: | -------------: | -------: | ------------------------------------ | ----------- |
|   +8.2% |    +8 | 99.0% → 100.0% | 97 → 105 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |
| removed |    -1 |    1.0% → 0.0% |    1 → 0 | `_platform_bzero`                    | `<unknown>` |

##### `nmethod::new_nmethod` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                 | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------- | ----------- |
|  +88.9% |    +8 | 64.3% → 81.0% |  9 → 17 | `nmethod::nmethod`                     | `<unknown>` |
| removed |    -3 |  21.4% → 0.0% |   3 → 0 | `InstanceKlass::add_dependent_nmethod` | `<unknown>` |
| +100.0% |    +1 |   7.1% → 9.5% |   1 → 2 | `CodeCache::allocate`                  | `<unknown>` |
|     new |    +1 |   0.0% → 4.8% |   0 → 1 | `CodeBlob::allocation_size`            | `<unknown>` |

##### `Matcher::Label_Root` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                    | Location    |
| ------: | ----: | ------------: | ------: | ------------------------- | ----------- |
| +200.0% |    +6 | 42.9% → 64.3% |   3 → 9 | `State::DFA`              | `<unknown>` |
|  +80.0% |    +4 | 71.4% → 64.3% |   5 → 9 | `Matcher::Label_Root`     | `<unknown>` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `Arena::grow`             | `<unknown>` |
|     new |    +1 |   0.0% → 7.1% |   0 → 1 | `TypeInstPtr::add_offset` | `<unknown>` |

##### `Matcher::match_tree` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                         | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------ | ----------- |
| +100.0% |    +7 | 38.9% → 56.0% |  7 → 14 | `Matcher::Label_Root`          | `<unknown>` |
|  -75.0% |    -3 |  22.2% → 4.0% |   4 → 1 | `Chunk::next_chop`             | `<unknown>` |
| removed |    -1 |   5.6% → 0.0% |   1 → 0 | `_platform_memset`             | `<unknown>` |
| removed |    -1 |   5.6% → 0.0% |   1 → 0 | `Matcher::ReduceInst_Interior` | `<unknown>` |
|     new |    +1 |   0.0% → 4.0% |   0 → 1 | `Node::match_edge`             | `<unknown>` |

##### `LIR_Assembler::process_debug_info` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                           | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | ----------- |
| +350.0% |    +7 | 66.7% → 90.0% |   2 → 9 | `LIR_Assembler::record_non_safepoint_debug_info` | `<unknown>` |

##### `LIR_Assembler::record_non_safepoint_debug_info` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                        | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | ----------- |
| +125.0% |    +5 | 80.0% → 75.0% |   4 → 9 | `DebugInformationRecorder::describe_scope`    | `<unknown>` |
|     new |    +1 |   0.0% → 8.3% |   0 → 1 | `DebugInformationRecorder::add_non_safepoint` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_early` (`<unknown>`)

| Change | Delta |            % | Samples | Callee             | Location    |
| -----: | ----: | -----------: | ------: | ------------------ | ----------- |
|    new |    +2 | 0.0% → 13.3% |   0 → 2 | `Node::pinned`     | `<unknown>` |
|    new |    +1 |  0.0% → 6.7% |   0 → 1 | `HaltNode::Opcode` | `<unknown>` |

##### `PhaseIdealLoop::optimize` (`<unknown>`)

| Change | Delta |             % |  Samples | Callee                           | Location    |
| -----: | ----: | ------------: | -------: | -------------------------------- | ----------- |
|  +7.1% |    +7 | 85.2% → 86.8% | 98 → 105 | `PhaseIdealLoop::PhaseIdealLoop` | `<unknown>` |
|  -6.3% |    -1 | 13.9% → 12.4% |  16 → 15 | `PhaseIterGVN::optimize`         | `<unknown>` |

##### `PhaseIterGVN::optimize` (`<unknown>`)

|  Change | Delta |           % | Samples | Callee                 | Location    |
| ------: | ----: | ----------: | ------: | ---------------------- | ----------- |
|     new |    +3 | 0.0% → 5.1% |   0 → 3 | `RegionNode::hash`     | `<unknown>` |
| removed |    -1 | 1.9% → 0.0% |   1 → 0 | `IfNode::Ideal`        | `<unknown>` |
| removed |    -1 | 1.9% → 0.0% |   1 → 0 | `LoadNode::hash`       | `<unknown>` |
|     new |    +1 | 0.0% → 1.7% |   0 → 1 | `AddPNode::Value`      | `<unknown>` |
|     new |    +1 | 0.0% → 1.7% |   0 → 1 | `IfProjNode::Identity` | `<unknown>` |

##### `accept` (`org.jetbrains.kotlin.ir.declarations.IrFile`)

|  Change | Delta |             % | Samples | Callee      | Location                                                    |
| ------: | ----: | ------------: | ------: | ----------- | ----------------------------------------------------------- |
|     new |    +3 |  0.0% → 25.0% |   0 → 3 | `visitFile` | `org.jetbrains.kotlin.ir.visitors.IrVisitor`                |
|  +50.0% |    +1 | 33.3% → 25.0% |   2 → 3 | `visitFile` | `org.jetbrains.kotlin.ir.visitors.IrTransformer`            |
| +100.0% |    +1 |         16.7% |   1 → 2 | `visitFile` | `org.jetbrains.kotlin.ir.visitors.IrElementTransformerVoid` |
|  +50.0% |    +1 | 33.3% → 25.0% |   2 → 3 | `visitFile` | `org.jetbrains.kotlin.ir.visitors.IrVisitorVoid`            |

##### `State::DFA` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                              | Location    |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ----------- |
|    new |    +4 |  0.0% → 44.4% |   0 → 4 | `State::_sub_Op_ConI`               | `<unknown>` |
| -50.0% |    -1 | 66.7% → 11.1% |   2 → 1 | `State::_sub_Op_ConL`               | `<unknown>` |
|    new |    +1 |  0.0% → 11.1% |   0 → 1 | `State::_sub_Op_AddP`               | `<unknown>` |
|    new |    +1 |  0.0% → 11.1% |   0 → 1 | `Matcher::scalable_vector_reg_size` | `<unknown>` |
|    new |    +1 |  0.0% → 11.1% |   0 → 1 | `State::_sub_Op_ConP`               | `<unknown>` |

##### `acceptChildren` (`org.jetbrains.kotlin.ir.declarations.IrPackageFragment`)

|  Change | Delta |      % | Samples | Callee   | Location                                       |
| ------: | ----: | -----: | ------: | -------- | ---------------------------------------------- |
| +300.0% |    +6 | 100.0% |   2 → 8 | `accept` | `org.jetbrains.kotlin.ir.declarations.IrClass` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                                  | Location    |
| -----: | ----: | -----------: | ------: | --------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 28.6% |   0 → 2 | `SharedRuntime::fixup_callers_callsite` | `<unknown>` |

##### `void G1CMTask::process_grey_task_entry<true>` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                                         | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------- | ----------- |
| removed |    -3 |  30.0% → 0.0% |   3 → 0 | `G1CMObjArrayProcessor::process_slice`                                                         | `<unknown>` |
|  +60.0% |    +3 | 50.0% → 57.1% |   5 → 8 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `<unknown>` |
| +100.0% |    +1 | 10.0% → 14.3% |   1 → 2 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` | `<unknown>` |
|     new |    +1 |   0.0% → 7.1% |   0 → 1 | `G1CMObjArrayProcessor::process_obj`                                                           | `<unknown>` |
|     new |    +1 |   0.0% → 7.1% |   0 → 1 | `ClassLoaderData::oops_do`                                                                     | `<unknown>` |

##### `__vfprintf` (`<unknown>`)

| Change | Delta |            % | Samples | Callee    | Location    |
| -----: | ----: | -----------: | ------: | --------- | ----------- |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `__ultoa` | `<unknown>` |

##### `_vsnprintf` (`<unknown>`)

|  Change | Delta |      % | Samples | Callee       | Location    |
| ------: | ----: | -----: | ------: | ------------ | ----------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `__vfprintf` | `<unknown>` |

##### `os::vsnprintf` (`<unknown>`)

|  Change | Delta |      % | Samples | Callee       | Location    |
| ------: | ----: | -----: | ------: | ------------ | ----------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `_vsnprintf` | `<unknown>` |

##### `klassVtable::initialize_vtable` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                                 | Location    |
| -----: | ----: | -----------: | ------: | -------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `klassVtable::update_inherited_vtable` | `<unknown>` |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `klassVtable::fill_in_mirandas`        | `<unknown>` |

##### `klassVtable::initialize_vtable_and_check_constraints` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                           | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------- | ----------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `klassVtable::initialize_vtable` | `<unknown>` |

##### `Parse::build_exits` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                     | Location    |
| -----: | ----: | -----------: | ------: | -------------------------- | ----------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `GraphKit::clone_map`      | `<unknown>` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `GraphKit::set_all_memory` | `<unknown>` |

##### `MethodData::initialize` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                        | Location    |
| -----: | ----: | -----------: | ------: | ----------------------------- | ----------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `MethodData::post_initialize` | `<unknown>` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `MethodData::initialize_data` | `<unknown>` |

##### `G1CollectedHeap::register_nmethod` (`<unknown>`)

| Change | Delta |             % | Samples | Callee             | Location    |
| -----: | ----: | ------------: | ------: | ------------------ | ----------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `nmethod::oops_do` | `<unknown>` |

##### `State::_sub_Op_ConI` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                                               | Location    |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `Assembler::operand_valid_for_logical_immediate`     | `<unknown>` |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `Assembler::operand_valid_for_sve_logical_immediate` | `<unknown>` |

##### `SymbolTable::lookup_only` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                       | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------- | ----------- |
|  +54.5% |    +6 | 57.9% → 77.3% | 11 → 17 | `SymbolTable::do_lookup`     | `<unknown>` |
| removed |    -2 |  10.5% → 0.0% |   2 → 0 | `SymbolTable::lookup_shared` | `<unknown>` |
|     new |    +1 |   0.0% → 4.5% |   0 → 1 | `_platform_memcmp`           | `<unknown>` |

##### `G1CMBitMap::iterate` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                         | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | ----------- |
|  +50.0% |    +2 | 50.0% → 54.5% |   4 → 6 | `void G1CMTask::process_grey_task_entry<true>` | `<unknown>` |
| +100.0% |    +2 | 25.0% → 36.4% |   2 → 4 | `G1CMTask::drain_local_queue`                  | `<unknown>` |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `G1CMTask::drain_global_stack`                 | `<unknown>` |

##### `G1CMTask::drain_local_queue` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                                         | Location    |
| -----: | ----: | -----: | ------: | ---------------------------------------------- | ----------- |
| +60.0% |    +3 | 100.0% |   5 → 8 | `void G1CMTask::process_grey_task_entry<true>` | `<unknown>` |

##### `ciEnv::register_method` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------- | ----------- |
|  +50.0% |    +7 | 60.9% → 75.0% | 14 → 21 | `nmethod::new_nmethod`                | `<unknown>` |
|  -66.7% |    -2 |  13.0% → 3.6% |   3 → 1 | `Mutex::lock`                         | `<unknown>` |
|     new |    +2 |   0.0% → 7.1% |   0 → 2 | `Dependencies::encode_content_bytes`  | `<unknown>` |
|  -50.0% |    -1 |   8.7% → 3.6% |   2 → 1 | `_pthread_mutex_firstfit_unlock_slow` | `<unknown>` |
| removed |    -1 |   4.3% → 0.0% |   1 → 0 | `CodeCache::gc_on_allocation`         | `<unknown>` |

##### `PhaseIdealLoop::compute_lca_of_uses` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                                               | Location    |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------- | ----------- |
|    new |    +4 | 0.0% → 80.0% |   0 → 4 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `<unknown>` |

##### `PhaseCFG::schedule_pinned_nodes` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                     | Location    |
| ------: | ----: | ------------: | ------: | -------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `CProjNode::is_block_proj` | `<unknown>` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `ProjNode::pinned`         | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                      | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | ----------- |
|  +50.0% |    +8 | 57.1% → 75.0% | 16 → 24 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |
| removed |    -1 |   3.6% → 0.0% |   1 → 0 | `ProjNode::is_CFG`                          | `<unknown>` |
| removed |    -1 |   3.6% → 0.0% |   1 → 0 | `Node::is_CFG`                              | `<unknown>` |
|     new |    +1 |   0.0% → 3.1% |   0 → 1 | `OrINode::Opcode`                           | `<unknown>` |

##### `LinearScan::compute_debug_info_for_scope` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                       | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | ----------- |
| +400.0% |    +4 | 33.3% → 71.4% |   1 → 5 | `LinearScan::compute_debug_info_for_scope`   | `<unknown>` |
| +200.0% |    +2 | 33.3% → 42.9% |   1 → 3 | `LinearScan::append_scope_value`             | `<unknown>` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `Instruction::as_Constant`                   | `<unknown>` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `LinearScan::append_scope_value_for_operand` | `<unknown>` |

##### `LinearScan::build_intervals` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                           | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------- | ----------- |
|     new |    +2 |  0.0% → 20.0% |   0 → 2 | `LinearScan::add_def`            | `<unknown>` |
| +100.0% |    +1 | 16.7% → 20.0% |   1 → 2 | `LIR_OpVisitState::visit`        | `<unknown>` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `tlv_get_addr`                   | `<unknown>` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `Instruction::as_Constant`       | `<unknown>` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `LIRGenerator::is_vreg_flag_set` | `<unknown>` |

##### `acceptChildren` (`org.jetbrains.kotlin.ir.declarations.IrClass`)

| Change | Delta |             % | Samples | Callee   | Location                                                |
| -----: | ----: | ------------: | ------: | -------- | ------------------------------------------------------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `accept` | `org.jetbrains.kotlin.ir.declarations.IrSimpleFunction` |

##### `visitAnonymousFunction` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`)

|  Change | Delta |              % | Samples | Callee                | Location                                                                          |
| ------: | ----: | -------------: | ------: | --------------------- | --------------------------------------------------------------------------------- |
| +200.0% |    +4 | 100.0% → 85.7% |   2 → 6 | `visitNestedElements` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |
|     new |    +1 |   0.0% → 14.3% |   0 → 1 | `getContext`          | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |
|     new |    +1 |   0.0% → 14.3% |   0 → 1 | `access$checkElement` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |

##### `visitAnonymousFunctionExpression` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`)

|  Change | Delta |      % | Samples | Callee                             | Location                                                                          |
| ------: | ----: | -----: | ------: | ---------------------------------- | --------------------------------------------------------------------------------- |
| +250.0% |    +5 | 100.0% |   2 → 7 | `visitAnonymousFunction`           | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |
| +250.0% |    +5 | 100.0% |   2 → 7 | `visitAnonymousFunctionExpression` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |

##### `accept` (`org.jetbrains.kotlin.fir.expressions.FirAnonymousFunctionExpression`)

|  Change | Delta |             % | Samples | Callee                             | Location                                                                          |
| ------: | ----: | ------------: | ------: | ---------------------------------- | --------------------------------------------------------------------------------- |
| +250.0% |    +5 | 66.7% → 87.5% |   2 → 7 | `visitAnonymousFunctionExpression` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `visitAnonymousFunctionExpression` | `org.jetbrains.kotlin.fir.visitors.FirVisitor`                                    |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `visitAnonymousFunctionExpression` | `org.jetbrains.kotlin.fir.backend.Fir2IrVisitor`                                  |

##### `fixVariable` (`org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`)

|  Change | Delta |             % | Samples | Callee           | Location                                                                     |
| ------: | ----: | ------------: | ------: | ---------------- | ---------------------------------------------------------------------------- |
| +300.0% |    +3 | 33.3% → 50.0% |   1 → 4 | `findResultType` | `org.jetbrains.kotlin.resolve.calls.inference.components.ResultTypeResolver` |
| +100.0% |    +2 | 66.7% → 50.0% |   2 → 4 | `fixVariable`    | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl` |

##### `fixVariableIfReady` (`org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`)

|  Change | Delta |      % | Samples | Callee        | Location                                                               |
| ------: | ----: | -----: | ------: | ------------- | ---------------------------------------------------------------------- |
| +166.7% |    +5 | 100.0% |   3 → 8 | `fixVariable` | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |

##### `mapSignature` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`)

|  Change | Delta |             % | Samples | Callee                      | Location                                                         |
| ------: | ----: | ------------: | ------: | --------------------------- | ---------------------------------------------------------------- |
|     new |    +5 |  0.0% → 62.5% |   0 → 5 | `writeParameter`            | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `writeFormalTypeParameters` | `org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper`          |
|  -50.0% |    -1 | 66.7% → 12.5% |   2 → 1 | `mapReturnType`             | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `mapFunctionName`           | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `makeJvmMethodSignature`    | `org.jetbrains.kotlin.codegen.signature.JvmSignatureWriter`      |

##### `mapSignature$default` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`)

|  Change | Delta |      % | Samples | Callee         | Location                                                         |
| ------: | ----: | -----: | ------: | -------------- | ---------------------------------------------------------------- |
| +166.7% |    +5 | 100.0% |   3 → 8 | `mapSignature` | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |

##### `writeParameter` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`)

| Change | Delta |            % | Samples | Callee                  | Location                                                         |
| -----: | ----: | -----------: | ------: | ----------------------- | ---------------------------------------------------------------- |
|    new |    +3 | 0.0% → 60.0% |   0 → 3 | `writeParameterType`    | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `writeParameterTypeEnd` | `org.jetbrains.kotlin.codegen.signature.JvmSignatureWriter`      |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `writeParameterType`    | `org.jetbrains.kotlin.codegen.signature.BothSignatureWriter`     |

##### `processGivenConstraints` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`)

|  Change | Delta |            % | Samples | Callee                   | Location                                                                            |
| ------: | ----: | -----------: | ------: | ------------------------ | ----------------------------------------------------------------------------------- |
|  +50.0% |    +3 |        75.0% |   6 → 9 | `incorporate`            | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintIncorporator`    |
|     new |    +2 | 0.0% → 16.7% |   0 → 2 | `shouldWeSkipConstraint` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`        |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `addConstraint`          | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableVariableWithConstraints` |

##### `processConstraintsIgnoringForksData` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`)

| Change | Delta |      % | Samples | Callee                    | Location                                                                     |
| -----: | ----: | -----: | ------: | ------------------------- | ---------------------------------------------------------------------------- |
| +50.0% |    +4 | 100.0% |  8 → 12 | `processGivenConstraints` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector` |

##### `processConstraints` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`)

| Change | Delta |      % | Samples | Callee                                | Location                                                                     |
| -----: | ----: | -----: | ------: | ------------------------------------- | ---------------------------------------------------------------------------- |
| +50.0% |    +4 | 100.0% |  8 → 12 | `processConstraintsIgnoringForksData` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector` |

##### `acceptChildren` (`org.jetbrains.kotlin.fir.expressions.impl.FirResolvedArgumentList`)

|  Change | Delta |             % | Samples | Callee   | Location                                                              |
| ------: | ----: | ------------: | ------: | -------- | --------------------------------------------------------------------- |
| +250.0% |    +5 | 33.3% → 70.0% |   2 → 7 | `accept` | `org.jetbrains.kotlin.fir.expressions.FirAnonymousFunctionExpression` |
|  -50.0% |    -1 | 33.3% → 10.0% |   2 → 1 | `accept` | `org.jetbrains.kotlin.fir.expressions.FirFunctionCall`                |

##### `visitArgumentList` (`org.jetbrains.kotlin.fir.visitors.FirVisitor`)

| Change | Delta |      % | Samples | Callee         | Location                                                                          |
| -----: | ----: | -----: | ------: | -------------- | --------------------------------------------------------------------------------- |
| +66.7% |    +4 | 100.0% |  6 → 10 | `visitElement` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |

##### `accept` (`org.jetbrains.kotlin.fir.expressions.FirArgumentList`)

| Change | Delta |      % | Samples | Callee              | Location                                       |
| -----: | ----: | -----: | ------: | ------------------- | ---------------------------------------------- |
| +66.7% |    +4 | 100.0% |  6 → 10 | `visitArgumentList` | `org.jetbrains.kotlin.fir.visitors.FirVisitor` |

##### `visitVariable` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|  Change | Delta |      % | Samples | Callee          | Location                                                     |
| ------: | ----: | -----: | ------: | --------------- | ------------------------------------------------------------ |
| +133.3% |    +4 | 100.0% |   3 → 7 | `accept`        | `org.jetbrains.kotlin.ir.expressions.IrCall`                 |
| +133.3% |    +4 | 100.0% |   3 → 7 | `visitVariable` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `compileInlineFunction` (`org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`)

|  Change | Delta |              % | Samples | Callee               | Location                                                |
| ------: | ----: | -------------: | ------: | -------------------- | ------------------------------------------------------- |
| +166.7% |    +5 | 75.0% → 100.0% |   3 → 8 | `generateMethodNode` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `toIrType` (`org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter`)

|  Change | Delta |             % | Samples | Callee                  | Location                                                                |
| ------: | ----: | ------------: | ------: | ----------------------- | ----------------------------------------------------------------------- |
| +400.0% |    +4 | 25.0% → 62.5% |   1 → 5 | `toIrType$default`      | `org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter`                  |
|     new |    +2 |  0.0% → 25.0% |   0 → 2 | `linkToTargetMethod`    | `java.lang.invoke.Invokers$Holder`                                      |
| +100.0% |    +1 |         25.0% |   1 → 2 | `convertToIrAnnotation` | `org.jetbrains.kotlin.fir.backend.generators.CallAndReferenceGenerator` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `toIrSymbol`            | `org.jetbrains.kotlin.fir.backend.utils.SymbolConversionUtilsKt`        |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `getBuiltInClassSymbol` | `org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter`                  |

##### `linkToTargetMethod` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |            % | Samples | Callee             | Location                                     |
| -----: | ----: | -----------: | ------: | ------------------ | -------------------------------------------- |
|    new |    +4 | 0.0% → 80.0% |   0 → 4 | `newInvokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `newInvokeSpecial` (`java.lang.invoke.DirectMethodHandle$Holder`)

| Change | Delta |            % | Samples | Callee             | Location                                                                            |
| -----: | ----: | -----------: | ------: | ------------------ | ----------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `allocateInstance` | `java.lang.invoke.DirectMethodHandle`                                               |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `invokeBasic`      | `java.lang.invoke.MethodHandle`                                                     |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `<init>`           | `org.jetbrains.kotlin.fir.builder.AbstractRawFirBuilder$$Lambda.0x000000700153fcf8` |

##### `append` (`java.lang.StringBuilder`)

| Change | Delta |            % | Samples | Callee                     | Location                          |
| -----: | ----: | -----------: | ------: | -------------------------- | --------------------------------- |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `append`                   | `java.lang.AbstractStringBuilder` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `resolve_opt_virtual_call` | `<unknown>`                       |

##### `invokeStatic` (`java.lang.invoke.DirectMethodHandle$Holder`)

| Change | Delta |              % | Samples | Callee        | Location                                           |
| -----: | ----: | -------------: | ------: | ------------- | -------------------------------------------------- |
| +50.0% |    +1 | 100.0% → 75.0% |   2 → 3 | `metafactory` | `java.lang.invoke.LambdaMetafactory`               |
|    new |    +1 |   0.0% → 25.0% |   0 → 1 | `make`        | `java.lang.invoke.BoundMethodHandle$Species_LLLLL` |

##### `parseAnnotation2` (`sun.reflect.annotation.AnnotationParser`)

|  Change | Delta |            % | Samples | Callee             | Location                                  |
| ------: | ----: | -----------: | ------: | ------------------ | ----------------------------------------- |
| +100.0% |    +1 |        50.0% |   1 → 2 | `getInstance`      | `sun.reflect.annotation.AnnotationType`   |
| +100.0% |    +1 |        50.0% |   1 → 2 | `parseMemberValue` | `sun.reflect.annotation.AnnotationParser` |
|     new |    +1 | 0.0% → 25.0% |   0 → 1 | `skipAnnotation`   | `sun.reflect.annotation.AnnotationParser` |
|     new |    +1 | 0.0% → 25.0% |   0 → 1 | `parseSig`         | `sun.reflect.annotation.AnnotationParser` |

##### `parseAnnotations2` (`sun.reflect.annotation.AnnotationParser`)

|  Change | Delta |      % | Samples | Callee             | Location                                  |
| ------: | ----: | -----: | ------: | ------------------ | ----------------------------------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `parseAnnotation2` | `sun.reflect.annotation.AnnotationParser` |

##### `parseAnnotations` (`sun.reflect.annotation.AnnotationParser`)

|  Change | Delta |      % | Samples | Callee              | Location                                  |
| ------: | ----: | -----: | ------: | ------------------- | ----------------------------------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `parseAnnotations2` | `sun.reflect.annotation.AnnotationParser` |

##### `compileToBytecode` (`java.lang.invoke.LambdaForm`)

| Change | Delta |              % | Samples | Callee                   | Location                                    |
| -----: | ----: | -------------: | ------: | ------------------------ | ------------------------------------------- |
| +50.0% |    +1 | 100.0% → 75.0% |   2 → 3 | `generateCustomizedCode` | `java.lang.invoke.InvokerBytecodeGenerator` |
|    new |    +1 |   0.0% → 25.0% |   0 → 1 | `methodType`             | `java.lang.invoke.LambdaForm`               |

##### `addMethod` (`java.lang.invoke.InvokerBytecodeGenerator`)

| Change | Delta |            % | Samples | Callee             | Location                                    |
| -----: | ----: | -----------: | ------: | ------------------ | ------------------------------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `emitStaticInvoke` | `java.lang.invoke.InvokerBytecodeGenerator` |

##### `generateCustomizedCodeBytes` (`java.lang.invoke.InvokerBytecodeGenerator`)

|  Change | Delta |      % | Samples | Callee      | Location                                    |
| ------: | ----: | -----: | ------: | ----------- | ------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `addMethod` | `java.lang.invoke.InvokerBytecodeGenerator` |

##### `emitStaticInvoke` (`java.lang.invoke.InvokerBytecodeGenerator`)

| Change | Delta |            % | Samples | Callee              | Location                                      |
| -----: | ----: | -----------: | ------: | ------------------- | --------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `visitMethodInsn`   | `jdk.internal.org.objectweb.asm.MethodWriter` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `emitPushArguments` | `java.lang.invoke.InvokerBytecodeGenerator`   |

##### `toString` (`java.lang.Long`)

| Change | Delta |             % | Samples | Callee     | Location         |
| -----: | ----: | ------------: | ------: | ---------- | ---------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `toString` | `java.lang.Long` |
|    new |    +1 |  0.0% → 50.0% |   0 → 1 | `getChars` | `java.lang.Long` |

##### `collectionSizeOrDefault` (`kotlin.collections.CollectionsKt__IterablesKt`)

| Change | Delta |            % | Samples | Callee | Location                                 |
| -----: | ----: | -----------: | ------: | ------ | ---------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `size` | `kotlin.collections.AbstractMutableList` |

##### `makePairwiseConvertByEditor` (`java.lang.invoke.MethodHandleImpl`)

| Change | Delta |            % | Samples | Callee                    | Location                                          |
| -----: | ----: | -----------: | ------: | ------------------------- | ------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `computeValueConversions` | `java.lang.invoke.MethodHandleImpl`               |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `copyWithExtendL`         | `java.lang.invoke.BoundMethodHandle$Species_LLLL` |

##### `makePairwiseConvert` (`java.lang.invoke.MethodHandleImpl`)

| Change | Delta |             % | Samples | Callee                        | Location                            |
| -----: | ----: | ------------: | ------: | ----------------------------- | ----------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `makePairwiseConvertByEditor` | `java.lang.invoke.MethodHandleImpl` |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `makePairwiseConvert`         | `java.lang.invoke.MethodHandleImpl` |

##### `asTypeUncached` (`java.lang.invoke.MethodHandle`)

| Change | Delta |             % | Samples | Callee                | Location                            |
| -----: | ----: | ------------: | ------: | --------------------- | ----------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `makePairwiseConvert` | `java.lang.invoke.MethodHandleImpl` |

##### `asType` (`java.lang.invoke.MethodHandle`)

| Change | Delta |             % | Samples | Callee           | Location                        |
| -----: | ----: | ------------: | ------: | ---------------- | ------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `asTypeUncached` | `java.lang.invoke.MethodHandle` |

##### `toList` (`kotlin.sequences.SequencesKt___SequencesKt`)

| Change | Delta |            % | Samples | Callee         | Location                                        |
| -----: | ----: | -----------: | ------: | -------------- | ----------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `ic_miss_stub` | `<unknown>`                                     |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `hasNext`      | `kotlin.sequences.FilteringSequence$iterator$1` |

##### `<init>` (`java.util.ArrayList`)

| Change | Delta |            % | Samples | Callee    | Location                                |
| -----: | ----: | -----------: | ------: | --------- | --------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `toArray` | `kotlin.collections.AbstractCollection` |

##### `thread_native_entry` (`<unknown>`)

|  Change | Delta |              % |     Samples | Callee                                  | Location    |
| ------: | ----: | -------------: | ----------: | --------------------------------------- | ----------- |
|  -21.6% |  -239 | 99.9% → 100.0% | 1,106 → 867 | `Thread::call_run`                      | `<unknown>` |
| removed |    -1 |    0.1% → 0.0% |       1 → 0 | `Monitor::wait_without_safepoint_check` | `<unknown>` |

##### `_pthread_start` (`<unknown>`)

| Change | Delta |     % |     Samples | Callee                | Location    |
| -----: | ----: | ----: | ----------: | --------------------- | ----------- |
| -21.7% |  -240 | 99.9% | 1,107 → 867 | `thread_native_entry` | `<unknown>` |

##### `thread_start` (`<unknown>`)

| Change | Delta |      % |     Samples | Callee           | Location    |
| -----: | ----: | -----: | ----------: | ---------------- | ----------- |
| -21.7% |  -240 | 100.0% | 1,108 → 868 | `_pthread_start` | `<unknown>` |

##### `Thread::call_run` (`<unknown>`)

|  Change | Delta |             % |   Samples | Callee                          | Location    |
| ------: | ----: | ------------: | --------: | ------------------------------- | ----------- |
|  -15.9% |  -154 | 87.3% → 93.7% | 966 → 812 | `JavaThread::thread_main_inner` | `<unknown>` |
|  -54.4% |   -62 |  10.3% → 6.0% |  114 → 52 | `WorkerThread::run`             | `<unknown>` |
| removed |   -18 |   1.6% → 0.0% |    18 → 0 | `VMThread::run`                 | `<unknown>` |
|  -60.0% |    -3 |   0.5% → 0.2% |     5 → 2 | `WatcherThread::run`            | `<unknown>` |
|  -66.7% |    -2 |   0.3% → 0.1% |     3 → 1 | `ConcurrentGCThread::run`       | `<unknown>` |

##### `JavaThread::thread_main_inner` (`<unknown>`)

|  Change | Delta |              % |   Samples | Callee                                                   | Location    |
| ------: | ----: | -------------: | --------: | -------------------------------------------------------- | ----------- |
|  -15.3% |  -147 | 99.3% → 100.0% | 959 → 812 | `CompileBroker::compiler_thread_loop`                    | `<unknown>` |
| removed |    -6 |    0.6% → 0.0% |     6 → 0 | `ServiceThread::service_thread_entry`                    | `<unknown>` |
| removed |    -1 |    0.1% → 0.0% |     1 → 0 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop` (`<unknown>`)

|  Change | Delta |             % |   Samples | Callee                                     | Location    |
| ------: | ----: | ------------: | --------: | ------------------------------------------ | ----------- |
|  -12.8% |  -117 | 95.5% → 98.4% | 916 → 799 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
|  -68.3% |   -28 |   4.3% → 1.6% |   41 → 13 | `CompileQueue::get`                        | `<unknown>` |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `CompileTaskWrapper::~CompileTaskWrapper`  | `<unknown>` |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `CompileBroker::init_compiler_runtime`     | `<unknown>` |

##### `run` (`org.jetbrains.kotlin.preloading.Preloader`)

|  Change | Delta |             % |   Samples | Callee                            | Location                                               |
| ------: | ----: | ------------: | --------: | --------------------------------- | ------------------------------------------------------ |
|  -16.3% |   -68 | 75.9% → 82.3% | 416 → 348 | `invoke`                          | `java.lang.reflect.Method`                             |
|  -43.1% |   -56 | 23.7% → 17.5% |  130 → 74 | `preloadClasses`                  | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `InterpreterRuntime::resolve_ldc` | `<unknown>`                                            |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `stream`                          | `java.util.Collection`                                 |
|     new |    +1 |   0.0% → 0.2% |     0 → 1 | `joining`                         | `java.util.stream.Collectors`                          |

##### `main` (`org.jetbrains.kotlin.preloading.Preloader`)

| Change | Delta |      % |   Samples | Callee | Location                                    |
| -----: | ----: | -----: | --------: | ------ | ------------------------------------------- |
| -22.8% |  -125 | 100.0% | 548 → 423 | `run`  | `org.jetbrains.kotlin.preloading.Preloader` |

##### `CompileBroker::invoke_compiler_on_method` (`<unknown>`)

|  Change | Delta |             % |   Samples | Callee                          | Location    |
| ------: | ----: | ------------: | --------: | ------------------------------- | ----------- |
|  -10.6% |   -66 | 68.1% → 69.8% | 624 → 558 | `C2Compiler::compile_method`    | `<unknown>` |
|  -15.1% |   -41 | 29.7% → 28.9% | 272 → 231 | `Compiler::compile_method`      | `<unknown>` |
|  -50.0% |    -3 |   0.7% → 0.4% |     6 → 3 | `CompilationLog::log_compile`   | `<unknown>` |
|  -50.0% |    -2 |   0.4% → 0.3% |     4 → 2 | `ciEnv::get_method_from_handle` | `<unknown>` |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `ciEnv::~ciEnv`                 | `<unknown>` |

##### `invokeImpl` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|  Change | Delta |              % |   Samples | Callee           | Location                               |
| ------: | ----: | -------------: | --------: | ---------------- | -------------------------------------- |
|  -16.3% |   -68 | 99.8% → 100.0% | 416 → 348 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder`     |
| removed |    -1 |    0.2% → 0.0% |     1 → 0 | `linkMethod`     | `java.lang.invoke.MethodHandleNatives` |

##### `invoke` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % |   Samples | Callee       | Location                                          |
| -----: | ----: | -----: | --------: | ------------ | ------------------------------------------------- |
| -16.5% |   -69 | 100.0% | 417 → 348 | `invokeImpl` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke` (`java.lang.reflect.Method`)

| Change | Delta |           % |   Samples | Callee                  | Location                                          |
| -----: | ----: | ----------: | --------: | ----------------------- | ------------------------------------------------- |
| -16.5% |   -69 |      100.0% | 417 → 348 | `invoke`                | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|    new |    +1 | 0.0% → 0.3% |     0 → 1 | `acquireMethodAccessor` | `java.lang.reflect.Method`                        |

##### `doMain` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|  Change | Delta |              % |   Samples | Callee                 | Location                                                   |
| ------: | ----: | -------------: | --------: | ---------------------- | ---------------------------------------------------------- |
|  -16.2% |   -67 | 99.8% → 100.0% | 414 → 347 | `doMainNoExit$default` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`    |
| removed |    -1 |    0.2% → 0.0% |     1 → 0 | `getValue`             | `org.jetbrains.kotlin.cli.common.CompilerSystemProperties` |

##### `main` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

| Change | Delta |             % |   Samples | Callee   | Location                                                |
| -----: | ----: | ------------: | --------: | -------- | ------------------------------------------------------- |
| -16.4% |   -68 | 99.8% → 99.7% | 415 → 347 | `doMain` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `main` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |      % |   Samples | Callee | Location                                               |
| -----: | ----: | -----: | --------: | ------ | ------------------------------------------------------ |
| -16.3% |   -68 | 100.0% | 416 → 348 | `main` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `invokeStatic` (`java.lang.invoke.LambdaForm$DMH`)

| Change | Delta |           % |   Samples | Callee        | Location                                     |
| -----: | ----: | ----------: | --------: | ------------- | -------------------------------------------- |
| -16.3% |   -68 |      100.0% | 416 → 348 | `main`        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |
| -42.9% |    -3 | 1.7% → 1.1% |     7 → 4 | `metafactory` | `java.lang.invoke.LambdaMetafactory`         |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000007001009800`)

| Change | Delta |      % |   Samples | Callee         | Location                          |
| -----: | ----: | -----: | --------: | -------------- | --------------------------------- |
| -16.3% |   -68 | 100.0% | 416 → 348 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH` |

##### `invokeExact_MT` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |           % |   Samples | Callee         | Location                                            |
| -----: | ----: | ----------: | --------: | -------------- | --------------------------------------------------- |
| -16.3% |   -68 |      100.0% | 416 → 348 | `invoke`       | `java.lang.invoke.LambdaForm$MH.0x0000007001009800` |
| -42.9% |    -3 | 1.7% → 1.1% |     7 → 4 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH`                   |
| +50.0% |    +1 | 0.5% → 0.9% |     2 → 3 | `invokeStatic` | `java.lang.invoke.DirectMethodHandle$Holder`        |

##### `exec` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|  Change | Delta |             % |   Samples | Callee            | Location                                                 |
| ------: | ----: | ------------: | --------: | ----------------- | -------------------------------------------------------- |
|  -16.2% |   -67 |        100.0% | 413 → 346 | `exec`            | `org.jetbrains.kotlin.cli.common.CLICompiler`            |
|  -15.7% |   -62 | 95.4% → 96.0% | 394 → 332 | `execImpl`        | `org.jetbrains.kotlin.cli.common.CLICompiler`            |
|  -38.5% |    -5 |   3.1% → 2.3% |    13 → 8 | `<clinit>`        | `org.jetbrains.kotlin.cli.common.ArgumentsKt`            |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `createArguments` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`             |
|     new |    +1 |   0.0% → 0.3% |     0 → 1 | `loadClass`       | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `doMainNoExit` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change | Delta |      % |   Samples | Callee | Location                                      |
| -----: | ----: | -----: | --------: | ------ | --------------------------------------------- |
| -16.2% |   -67 | 100.0% | 413 → 346 | `exec` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `_pthread_mutex_firstfit_lock_slow` (`<unknown>`)

| Change | Delta |      % | Samples | Callee               | Location    |
| -----: | ----: | -----: | ------: | -------------------- | ----------- |
| -83.1% |   -64 | 100.0% | 77 → 13 | `__psynch_mutexwait` | `<unknown>` |

##### `WorkerThread::run` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                            | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------- | ----------- |
|  -72.2% |   -39 | 47.4% → 28.8% | 54 → 15 | `G1EvacuateRegionsBaseTask::work` | `<unknown>` |
|  -37.9% |   -11 | 25.4% → 34.6% | 29 → 18 | `G1RebuildRSAndScrubTask::work`   | `<unknown>` |
|  -66.7% |    -6 |   7.9% → 5.8% |   9 → 3 | `semaphore_wait_trap`             | `<unknown>` |
| removed |    -4 |   3.5% → 0.0% |   4 → 0 | `G1ClearBitMapTask::work`         | `<unknown>` |
| removed |    -3 |   2.6% → 0.0% |   3 → 0 | `G1CMRootRegionScanTask::work`    | `<unknown>` |

##### `PlatformMonitor::wait` (`<unknown>`)

| Change | Delta |             % | Samples | Callee               | Location    |
| -----: | ----: | ------------: | ------: | -------------------- | ----------- |
| -80.6% |   -50 | 86.1% → 85.7% | 62 → 12 | `__psynch_cvwait`    | `<unknown>` |
| -88.9% |    -8 |  12.5% → 7.1% |   9 → 1 | `_pthread_cond_wait` | `<unknown>` |

##### `Compiler::compile_method` (`<unknown>`)

|  Change | Delta |           % |   Samples | Callee                      | Location    |
| ------: | ----: | ----------: | --------: | --------------------------- | ----------- |
|  -15.1% |   -41 |       99.6% | 271 → 230 | `Compilation::Compilation`  | `<unknown>` |
| removed |    -1 | 0.4% → 0.0% |     1 → 0 | `Compilation::~Compilation` | `<unknown>` |
|     new |    +1 | 0.0% → 0.4% |     0 → 1 | `Chunk::next_chop`          | `<unknown>` |

##### `G1EvacuateRegionsBaseTask::work` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                         | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | ----------- |
|  -76.3% |   -29 | 70.4% → 60.0% |  38 → 9 | `G1EvacuateRegionsTask::evacuate_live_objects` | `<unknown>` |
| removed |    -9 |  16.7% → 0.0% |   9 → 0 | `G1RemSet::scan_collection_set_code_roots`     | `<unknown>` |
|  -14.3% |    -1 | 13.0% → 40.0% |   7 → 6 | `G1EvacuateRegionsTask::scan_roots`            | `<unknown>` |

##### `Mutex::lock` (`<unknown>`)

| Change | Delta |              % | Samples | Callee                              | Location    |
| -----: | ----: | -------------: | ------: | ----------------------------------- | ----------- |
| -85.7% |   -30 | 97.2% → 100.0% |  35 → 5 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `Parse::do_all_blocks` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                           | Location    |
| ------: | ----: | -------------: | ------: | -------------------------------- | ----------- |
|  -34.9% |   -29 | 98.8% → 100.0% | 83 → 54 | `Parse::do_one_block`            | `<unknown>` |
|  -66.7% |    -2 |    3.6% → 1.9% |   3 → 1 | `Parse::merge_common`            | `<unknown>` |
| removed |    -1 |    1.2% → 0.0% |   1 → 0 | `JVMState::clone_shallow`        | `<unknown>` |
| removed |    -1 |    1.2% → 0.0% |   1 → 0 | `GraphKit::add_parse_predicates` | `<unknown>` |

##### `Monitor::wait` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                  | Location    |
| -----: | ----: | -----: | ------: | ----------------------- | ----------- |
| -73.2% |   -30 | 100.0% | 41 → 11 | `PlatformMonitor::wait` | `<unknown>` |

##### `Parse::do_one_block` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                   | Location    |
| -----: | ----: | ------------: | ------: | ------------------------ | ----------- |
| -30.4% |   -21 | 83.1% → 88.9% | 69 → 48 | `Parse::do_call`         | `<unknown>` |
| -77.8% |    -7 |  10.8% → 3.7% |   9 → 2 | `Parse::do_if`           | `<unknown>` |
| -57.1% |    -4 |   8.4% → 5.6% |   7 → 3 | `Parse::do_one_bytecode` | `<unknown>` |
| -50.0% |    -2 |   4.8% → 3.7% |   4 → 2 | `Parse::array_load`      | `<unknown>` |
|    new |    +2 |   0.0% → 3.7% |   0 → 2 | `Parse::return_current`  | `<unknown>` |

##### `Parse::Parse` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                  | Location    |
| ------: | ----: | ------------: | ------: | ----------------------- | ----------- |
|  -35.7% |   -30 | 97.7% → 94.7% | 84 → 54 | `Parse::do_all_blocks`  | `<unknown>` |
| removed |    -4 |   4.7% → 0.0% |   4 → 0 | `Parse::do_exits`       | `<unknown>` |
|     new |    +4 |   0.0% → 7.0% |   0 → 4 | `Parse::build_exits`    | `<unknown>` |
| removed |    -1 |   1.2% → 0.0% |   1 → 0 | `ciMethod::has_loops`   | `<unknown>` |
|  -50.0% |    -1 |   2.3% → 1.8% |   2 → 1 | `ciMethod::method_data` | `<unknown>` |

##### `ParseGenerator::generate` (`<unknown>`)

| Change | Delta |      % | Samples | Callee         | Location    |
| -----: | ----: | -----: | ------: | -------------- | ----------- |
| -33.7% |   -29 | 100.0% | 86 → 57 | `Parse::Parse` | `<unknown>` |

##### `G1ParEvacuateFollowersClosure::do_void` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                             | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- | ----------- |
| -88.2% |   -15 | 44.7% → 22.2% |  17 → 2 | `G1ParEvacuateFollowersClosure::offer_termination` | `<unknown>` |
| -77.8% |   -14 | 47.4% → 44.4% |  18 → 4 | `G1ParScanThreadState::steal_and_trim_queue`       | `<unknown>` |

##### `G1EvacuateRegionsTask::evacuate_live_objects` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                                   | Location    |
| -----: | ----: | -----: | ------: | ---------------------------------------- | ----------- |
| -76.3% |   -29 | 100.0% |  38 → 9 | `G1ParEvacuateFollowersClosure::do_void` | `<unknown>` |

##### `C2Compiler::compile_method` (`<unknown>`)

|  Change | Delta |             % |   Samples | Callee              | Location    |
| ------: | ----: | ------------: | --------: | ------------------- | ----------- |
|  -10.3% |   -64 | 99.4% → 99.6% | 620 → 556 | `Compile::Compile`  | `<unknown>` |
| removed |    -2 |   0.3% → 0.0% |     2 → 0 | `Compile::~Compile` | `<unknown>` |

##### `Compile::Compile` (`<unknown>`)

|  Change | Delta |             % |   Samples | Callee                                   | Location    |
| ------: | ----: | ------------: | --------: | ---------------------------------------- | ----------- |
|  -10.5% |   -33 |         50.4% | 313 → 280 | `Compile::Code_Gen`                      | `<unknown>` |
|  -32.1% |   -27 | 13.5% → 10.3% |   84 → 57 | `ParseGenerator::generate`               | `<unknown>` |
|  -38.5% |    -5 |   2.1% → 1.4% |    13 → 8 | `PhaseRemoveUseless::PhaseRemoveUseless` | `<unknown>` |
|   +0.5% |    +1 | 32.9% → 36.9% | 204 → 205 | `Compile::Optimize`                      | `<unknown>` |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `PhaseOutput::PhaseOutput`               | `<unknown>` |

##### `Compilation::compile_java_method` (`<unknown>`)

|  Change | Delta |             % |  Samples | Callee                         | Location    |
| ------: | ----: | ------------: | -------: | ------------------------------ | ----------- |
|  -22.5% |   -23 | 40.8% → 38.7% | 102 → 79 | `Compilation::build_hir`       | `<unknown>` |
|  -16.0% |   -16 | 40.0% → 41.2% | 100 → 84 | `Compilation::emit_lir`        | `<unknown>` |
|  -13.6% |    -6 | 17.6% → 18.6% |  44 → 38 | `Compilation::emit_code_body`  | `<unknown>` |
| removed |    -1 |   0.4% → 0.0% |    1 → 0 | `LIR_Assembler::LIR_Assembler` | `<unknown>` |
| removed |    -1 |   0.4% → 0.0% |    1 → 0 | `TraceTime::TraceTime`         | `<unknown>` |

##### `Compilation::Compilation` (`<unknown>`)

|  Change | Delta |              % |   Samples | Callee                            | Location    |
| ------: | ----: | -------------: | --------: | --------------------------------- | ----------- |
|  -14.8% |   -40 | 99.6% → 100.0% | 270 → 230 | `Compilation::compile_method`     | `<unknown>` |
| removed |    -1 |    0.4% → 0.0% |     1 → 0 | `ciMethodData::set_would_profile` | `<unknown>` |

##### `Compilation::compile_method` (`<unknown>`)

|  Change | Delta |             % |   Samples | Callee                                               | Location    |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------- | ----------- |
|  -18.4% |   -46 | 92.6% → 88.7% | 250 → 204 | `Compilation::compile_java_method`                   | `<unknown>` |
|  +41.2% |    +7 |  6.3% → 10.4% |   17 → 24 | `ciEnv::register_method`                             | `<unknown>` |
|  -50.0% |    -1 |   0.7% → 0.4% |     2 → 1 | `Dependencies::assert_common_1`                      | `<unknown>` |
| removed |    -1 |   0.4% → 0.0% |     1 → 0 | `DebugInformationRecorder::DebugInformationRecorder` | `<unknown>` |
|     new |    +1 |   0.0% → 0.4% |     0 → 1 | `tlv_get_addr`                                       | `<unknown>` |

##### `Compile::Code_Gen` (`<unknown>`)

|  Change | Delta |             % |   Samples | Callee                            | Location    |
| ------: | ----: | ------------: | --------: | --------------------------------- | ----------- |
|  +41.0% |   +16 | 12.5% → 19.6% |   39 → 55 | `Matcher::match`                  | `<unknown>` |
|  -29.2% |   -14 | 15.3% → 12.1% |   48 → 34 | `PhaseCFG::do_global_code_motion` | `<unknown>` |
|  -29.8% |   -14 | 15.0% → 11.8% |   47 → 33 | `PhaseOutput::Output`             | `<unknown>` |
|   -6.1% |   -10 | 52.4% → 55.0% | 164 → 154 | `PhaseChaitin::Register_Allocate` | `<unknown>` |
| removed |    -5 |   1.6% → 0.0% |     5 → 0 | `PhaseCFG::PhaseCFG`              | `<unknown>` |

##### `CompileQueue::get` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                           | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------- | ----------- |
|  -72.5% |   -29 | 97.6% → 84.6% | 40 → 11 | `Monitor::wait`                  | `<unknown>` |
| removed |    -1 |   2.4% → 0.0% |   1 → 0 | `Mutex::lock`                    | `<unknown>` |
|     new |    +1 |   0.0% → 7.7% |   0 → 1 | `tlv_get_addr`                   | `<unknown>` |
|     new |    +1 |   0.0% → 7.7% |   0 → 1 | `CompilationPolicy::select_task` | `<unknown>` |

##### `GraphBuilder::GraphBuilder` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                               | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------ | ----------- |
| -26.7% |   -20 | 93.8% → 96.5% | 75 → 55 | `GraphBuilder::iterate_all_blocks`   | `<unknown>` |
| -66.7% |    -2 |   3.8% → 1.8% |   3 → 1 | `BlockBegin::iterate_preorder`       | `<unknown>` |
| -50.0% |    -1 |   2.5% → 1.8% |   2 → 1 | `BlockListBuilder::BlockListBuilder` | `<unknown>` |

##### `Compilation::build_hir` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                       | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------------------- | ----------- |
| -28.7% |   -23 | 78.4% → 72.2% | 80 → 57 | `IR::IR`                                     | `<unknown>` |
| +33.3% |    +3 |  8.8% → 15.2% |  9 → 12 | `GlobalValueNumbering::GlobalValueNumbering` | `<unknown>` |
| -50.0% |    -2 |   3.9% → 2.5% |   4 → 2 | `IR::compute_use_counts`                     | `<unknown>` |
| -66.7% |    -2 |   2.9% → 1.3% |   3 → 1 | `IR::compute_code`                           | `<unknown>` |
| +66.7% |    +2 |   2.9% → 6.3% |   3 → 5 | `IR::eliminate_null_checks`                  | `<unknown>` |

##### `CompilationPolicy::event` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                               | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------- | ----------- |
|  -83.3% |   -20 | 88.9% → 66.7% |  24 → 4 | `CompileBroker::compile_method`                      | `<unknown>` |
| removed |    -1 |   3.7% → 0.0% |   1 → 0 | `CompLevel CompilationPolicy::common<CallPredicate>` | `<unknown>` |
| +100.0% |    +1 |  3.7% → 33.3% |   1 → 2 | `CompilationPolicy::create_mdo`                      | `<unknown>` |
| removed |    -1 |   3.7% → 0.0% |   1 → 0 | `CompilationPolicy::call_event`                      | `<unknown>` |

##### `GraphBuilder::iterate_all_blocks` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                      | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | ----------- |
|  -26.0% |   -19 | 97.3% → 98.2% | 73 → 54 | `GraphBuilder::iterate_bytecodes_for_block` | `<unknown>` |
| removed |    -2 |   2.7% → 0.0% |   2 → 0 | `ValueMap::kill_all`                        | `<unknown>` |
|     new |    +1 |   0.0% → 1.8% |   0 → 1 | `ValueStack::ValueStack`                    | `<unknown>` |

##### `CompileBroker::compile_method` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                        | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | ----------- |
|  -83.3% |   -20 |        100.0% |  24 → 4 | `CompileBroker::compile_method`               | `<unknown>` |
|  -85.7% |   -18 | 87.5% → 75.0% |  21 → 3 | `CompileBroker::compile_method_base`          | `<unknown>` |
| removed |    -2 |   8.3% → 0.0% |   2 → 0 | `ConstantPool::resolve_string_constants_impl` | `<unknown>` |
| removed |    -1 |   4.2% → 0.0% |   1 → 0 | `Mutex::lock`                                 | `<unknown>` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `Method::load_signature_classes`              | `<unknown>` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                        | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------- | ----------- |
|  -19.7% |   -12 | 83.6% → 90.7% | 61 → 49 | `GraphBuilder::invoke`        | `<unknown>` |
| removed |    -3 |   4.1% → 0.0% |   3 → 0 | `BlockBegin::try_merge`       | `<unknown>` |
|  -16.7% |    -2 | 16.4% → 18.5% | 12 → 10 | `GraphBuilder::access_field`  | `<unknown>` |
|     new |    +2 |   0.0% → 3.7% |   0 → 2 | `GraphBuilder::new_instance`  | `<unknown>` |
|  -50.0% |    -1 |   2.7% → 1.9% |   2 → 1 | `GraphBuilder::load_constant` | `<unknown>` |

##### `CompileBroker::compile_method_base` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------- | ----------- |
|  -93.8% |   -15 | 76.2% → 33.3% |  16 → 1 | `Mutex::lock`                         | `<unknown>` |
|  -50.0% |    -2 | 19.0% → 66.7% |   4 → 2 | `CompileBroker::create_compile_task`  | `<unknown>` |
| removed |    -1 |   4.8% → 0.0% |   1 → 0 | `_pthread_mutex_firstfit_unlock_slow` | `<unknown>` |

##### `IntervalWalker::walk_to` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                               | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------ | ----------- |
|  -43.8% |   -14 | 74.4% → 72.0% | 32 → 18 | `LinearScanWalker::activate_current` | `<unknown>` |
|  -44.4% |    -4 | 20.9% → 20.0% |   9 → 5 | `IntervalWalker::walk_to`            | `<unknown>` |
| removed |    -1 |   2.3% → 0.0% |   1 → 0 | `MoveResolver::add_mapping`          | `<unknown>` |

##### `ciBytecodeStream::get_method` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                  | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ----------- |
|  -46.7% |    -7 | 40.5% → 42.1% |  15 → 8 | `ciObjectFactory::get_metadata`         | `<unknown>` |
|  -37.5% |    -6 | 43.2% → 52.6% | 16 → 10 | `ciEnv::get_method_by_index_impl`       | `<unknown>` |
| removed |    -2 |   5.4% → 0.0% |   2 → 0 | `ciObjectFactory::get_unloaded_method`  | `<unknown>` |
|  -50.0% |    -1 |   5.4% → 5.3% |   2 → 1 | `ciBytecodeStream::has_local_signature` | `<unknown>` |
| removed |    -1 |   2.7% → 0.0% |   1 → 0 | `SafepointMechanism::process`           | `<unknown>` |

##### `Compilation::emit_lir` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                       | Location    |
| -----: | ----: | ------------: | ------: | ---------------------------- | ----------- |
| -56.3% |    -9 |  16.0% → 8.3% |  16 → 7 | `BlockList::iterate_forward` | `<unknown>` |
| -10.8% |    -9 | 83.0% → 88.1% | 83 → 74 | `LinearScan::do_linear_scan` | `<unknown>` |
|    new |    +1 |   0.0% → 1.2% |   0 → 1 | `LinearScan::assign_reg_num` | `<unknown>` |
|    new |    +1 |   0.0% → 1.2% |   0 → 1 | `LIRGenerator::LIRGenerator` | `<unknown>` |

##### `LinearScan::allocate_registers` (`<unknown>`)

| Change | Delta |              % | Samples | Callee                               | Location    |
| -----: | ----: | -------------: | ------: | ------------------------------------ | ----------- |
| -40.0% |   -16 | 100.0% → 96.0% | 40 → 24 | `IntervalWalker::walk_to`            | `<unknown>` |
|    new |    +1 |    0.0% → 4.0% |   0 → 1 | `LinearScanWalker::LinearScanWalker` | `<unknown>` |

##### `doMainNoExit$default` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change | Delta |             % |   Samples | Callee         | Location                                                |
| -----: | ----: | ------------: | --------: | -------------- | ------------------------------------------------------- |
| -16.2% |   -67 | 99.8% → 99.7% | 413 → 346 | `doMainNoExit` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `runPhasedPipeline` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|  Change | Delta |             % |   Samples | Callee                     | Location                                                                    |
| ------: | ----: | ------------: | --------: | -------------------------- | --------------------------------------------------------------------------- |
|  -15.5% |   -60 | 99.0% → 99.7% | 388 → 328 | `invokeToplevel`           | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
| removed |    -2 |   0.5% → 0.0% |     2 → 0 | `createCompoundPhase`      | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmCliPipeline`                      |
|  -50.0% |    -1 |   0.5% → 0.3% |     2 → 1 | `reportToMessageCollector` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |

##### `doExecutePhased` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |             % |   Samples | Callee                         | Location                                                |
| -----: | ----: | ------------: | --------: | ------------------------------ | ------------------------------------------------------- |
| -15.7% |   -62 |        100.0% | 394 → 332 | `doExecutePhased`              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| -15.6% |   -61 | 99.5% → 99.7% | 392 → 331 | `execute`                      | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| -50.0% |    -1 |   0.5% → 0.3% |     2 → 1 | `getDefaultPerformanceManager` | `org.jetbrains.kotlin.cli.common.CLICompiler`           |

##### `execImpl` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |      % |   Samples | Callee            | Location                                     |
| -----: | ----: | -----: | --------: | ----------------- | -------------------------------------------- |
| -15.7% |   -62 | 100.0% | 394 → 332 | `doExecutePhased` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `executeAndReturnPipeLineArtifact` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |              % |   Samples | Callee                     | Location                                                |
| -----: | ----: | -------------: | --------: | -------------------------- | ------------------------------------------------------- |
| -16.1% |   -63 | 100.0% → 99.4% | 392 → 329 | `runPhasedPipeline`        | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|    new |    +1 |    0.0% → 0.3% |     0 → 1 | `disposeRootInWriteAction` | `org.jetbrains.kotlin.cli.common.UtilsKt`               |
|    new |    +1 |    0.0% → 0.3% |     0 → 1 | `<clinit>`                 | `com.intellij.openapi.util.Disposer`                    |

##### `executeAndReturnPipeLineArtifact$default` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |      % |   Samples | Callee                             | Location                                                |
| -----: | ----: | -----: | --------: | ---------------------------------- | ------------------------------------------------------- |
| -15.6% |   -61 | 100.0% | 392 → 331 | `executeAndReturnPipeLineArtifact` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |      % |   Samples | Callee                                     | Location                                                |
| -----: | ----: | -----: | --------: | ------------------------------------------ | ------------------------------------------------------- |
| -15.6% |   -61 | 100.0% | 392 → 331 | `executeAndReturnPipeLineArtifact$default` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `phaseBody` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

| Change | Delta |             % |   Samples | Callee         | Location                                                              |
| -----: | ----: | ------------: | --------: | -------------- | --------------------------------------------------------------------- |
| -15.5% |   -60 |        100.0% | 388 → 328 | `phaseBody`    | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                     |
| -19.7% |   -54 | 70.6% → 67.1% | 274 → 220 | `executePhase` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
|  -5.0% |    -4 | 20.6% → 23.2% |   80 → 76 | `executePhase` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
|  -7.1% |    -2 |   7.2% → 7.9% |   28 → 26 | `executePhase` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
| -20.0% |    -1 |   1.3% → 1.2% |     5 → 4 | `executePhase` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |

##### `invoke` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|  Change | Delta |           % |   Samples | Callee          | Location                                                         |
| ------: | ----: | ----------: | --------: | --------------- | ---------------------------------------------------------------- |
|  -15.5% |   -60 |      100.0% | 388 → 328 | `phaseBody`     | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
|  -11.1% |    -2 | 4.6% → 4.9% |   18 → 16 | `phaseBody`     | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |
|  -20.0% |    -1 | 1.3% → 1.2% |     5 → 4 | `phaseBody`     | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |
| removed |    -1 | 0.3% → 0.0% |     1 → 0 | `runBefore`     | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`          |
|     new |    +1 | 0.0% → 0.3% |     0 → 1 | `setPhaseCount` | `org.jetbrains.kotlin.config.phaser.PhaserState`                 |

##### `invoke` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`)

| Change | Delta |      % |   Samples | Callee   | Location                                                |
| -----: | ----: | -----: | --------: | -------- | ------------------------------------------------------- |
| -15.5% |   -60 | 100.0% | 388 → 328 | `invoke` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invokeToplevel` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`)

| Change | Delta |      % |   Samples | Callee   | Location                                                    |
| -----: | ----: | -----: | --------: | -------- | ----------------------------------------------------------- |
| -15.5% |   -60 | 100.0% | 388 → 328 | `invoke` | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase` |

##### `loadAllClassesFromJars` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|  Change | Delta |             % | Samples | Callee         | Location                        |
| ------: | ----: | ------------: | ------: | -------------- | ------------------------------- |
|  -28.9% |   -28 | 74.6% → 93.2% | 97 → 69 | `read`         | `java.io.FilterInputStream`     |
| removed |    -7 |   5.4% → 0.0% |   7 → 0 | `<init>`       | `java.io.ByteArrayOutputStream` |
|  -75.0% |    -6 |   6.2% → 2.7% |   8 → 2 | `toByteArray`  | `java.io.ByteArrayOutputStream` |
| removed |    -6 |   4.6% → 0.0% |   6 → 0 | `get`          | `java.util.HashMap`             |
| removed |    -4 |   3.1% → 0.0% |   4 → 0 | `getNextEntry` | `java.util.zip.ZipInputStream`  |

##### `preloadClasses` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

| Change | Delta |            % |  Samples | Callee                   | Location                                               |
| -----: | ----: | -----------: | -------: | ------------------------ | ------------------------------------------------------ |
| -43.1% |   -56 |       100.0% | 130 → 74 | `loadAllClassesFromJars` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
| -50.0% |    -7 | 10.8% → 9.5% |   14 → 7 | `preloadClasses`         | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `read` (`java.util.zip.ZipInputStream`)

|  Change | Delta |              % | Samples | Callee   | Location                            |
| ------: | ----: | -------------: | ------: | -------- | ----------------------------------- |
|  -26.6% |   -25 | 96.9% → 100.0% | 94 → 69 | `read`   | `java.util.zip.InflaterInputStream` |
| removed |    -3 |    3.1% → 0.0% |   3 → 0 | `update` | `java.util.zip.CRC32`               |

##### `read` (`java.io.FilterInputStream`)

| Change | Delta |           % | Samples | Callee | Location                       |
| -----: | ----: | ----------: | ------: | ------ | ------------------------------ |
| -28.9% |   -28 |      100.0% | 97 → 69 | `read` | `java.util.zip.ZipInputStream` |
| -66.7% |    -2 | 3.1% → 1.4% |   3 → 1 | `read` | `java.io.BufferedInputStream`  |

##### `read` (`java.util.zip.InflaterInputStream`)

|  Change | Delta |             % | Samples | Callee       | Location                                           |
| ------: | ----: | ------------: | ------: | ------------ | -------------------------------------------------- |
|  -25.3% |   -23 | 93.8% → 97.1% | 91 → 68 | `inflate`    | `java.util.zip.Inflater`                           |
|  -75.0% |    -3 |   4.1% → 1.4% |   4 → 1 | `fill`       | `java.util.zip.InflaterInputStream`                |
| removed |    -1 |   1.0% → 0.0% |   1 → 0 | `fill`       | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |
|     new |    +1 |   0.0% → 1.4% |   0 → 1 | `needsInput` | `java.util.zip.Inflater`                           |

##### `inflate` (`java.util.zip.Inflater`)

| Change | Delta |              % | Samples | Callee              | Location                 |
| -----: | ----: | -------------: | ------: | ------------------- | ------------------------ |
| -25.8% |   -24 | 97.9% → 100.0% | 93 → 69 | `inflateBytesBytes` | `java.util.zip.Inflater` |
| -75.0% |    -3 |    4.2% → 1.4% |   4 → 1 | `inflate`           | `java.util.zip.Inflater` |

##### `loadClass` (`java.lang.ClassLoader`)

|  Change | Delta |             % | Samples | Callee            | Location                                                 |
| ------: | ----: | ------------: | ------: | ----------------- | -------------------------------------------------------- |
|  -24.4% |   -19 | 89.7% → 95.2% | 78 → 59 | `findClass`       | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
| removed |    -3 |   3.4% → 0.0% |   3 → 0 | `loadClass`       | `jdk.internal.jrtfs.JrtFileSystemProvider$JrtFsLoader`   |
| removed |    -2 |   2.3% → 0.0% |   2 → 0 | `loadClass`       | `jdk.internal.loader.ClassLoaders$AppClassLoader`        |
|  -50.0% |    -1 |   2.3% → 1.6% |   2 → 1 | `loadClass`       | `java.lang.ClassLoader`                                  |
| removed |    -1 |   1.1% → 0.0% |   1 → 0 | `findLoadedClass` | `java.lang.ClassLoader`                                  |

##### `inflateBytesBytes` (`java.util.zip.Inflater`)

|  Change | Delta |             % | Samples | Callee                                           | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | ----------- |
|  -26.1% |   -24 | 98.9% → 98.6% | 92 → 68 | `Java_java_util_zip_Inflater_inflateBytesBytes`  | `<unknown>` |
| removed |    -1 |   1.1% → 0.0% |   1 → 0 | `InterpreterRuntime::frequency_counter_overflow` | `<unknown>` |

##### `defineClass` (`java.lang.ClassLoader`)

|  Change | Delta |              % | Samples | Callee            | Location                |
| ------: | ----: | -------------: | ------: | ----------------- | ----------------------- |
|  -23.4% |   -18 |         100.0% | 77 → 59 | `defineClass`     | `java.lang.ClassLoader` |
|  -21.3% |   -16 | 97.4% → 100.0% | 75 → 59 | `defineClass1`    | `java.lang.ClassLoader` |
|  -50.0% |    -1 |    2.6% → 1.7% |   2 → 1 | `postDefineClass` | `java.lang.ClassLoader` |
| removed |    -1 |    1.3% → 0.0% |   1 → 0 | `preDefineClass`  | `java.lang.ClassLoader` |

##### `defineClass1` (`java.lang.ClassLoader`)

| Change | Delta |             % | Samples | Callee                                    | Location                                                 |
| -----: | ----: | ------------: | ------: | ----------------------------------------- | -------------------------------------------------------- |
| -20.5% |   -15 | 97.3% → 98.3% | 73 → 58 | `Java_java_lang_ClassLoader_defineClass1` | `<unknown>`                                              |
| +18.2% |    +2 | 14.7% → 22.0% | 11 → 13 | `loadClass`                               | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `getValue` (`kotlin.SynchronizedLazyImpl`)

|  Change | Delta |             % | Samples | Callee   | Location                                                                                         |
| ------: | ----: | ------------: | ------: | -------- | ------------------------------------------------------------------------------------------------ |
|  -66.7% |    -4 | 23.1% → 13.3% |   6 → 2 | `invoke` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda`                                |
|  -50.0% |    -2 | 15.4% → 13.3% |   4 → 2 | `invoke` | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile$$Lambda.0x0000007001388ad0`             |
|  -33.3% |    -1 | 11.5% → 13.3% |   3 → 2 | `invoke` | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$$Lambda.0x0000007001758000`                       |
| removed |    -1 |   3.8% → 0.0% |   1 → 0 | `invoke` | `org.jetbrains.kotlin.fir.extensions.FirExtensionRegistrar$$Lambda.0x000000e0013704a0`           |
|  -50.0% |    -1 |   7.7% → 6.7% |   2 → 1 | `invoke` | `org.jetbrains.kotlin.diagnostics.KtDiagnosticFactoryToRendererMapKt$$Lambda.0x0000007001144360` |

##### `<init>` (`java.io.ByteArrayOutputStream`)

|  Change | Delta |            % | Samples | Callee                         | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------ | ----------- |
| removed |    -5 | 71.4% → 0.0% |   5 → 0 | `zero_blocks`                  | `<unknown>` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `_new_array_Java`              | `<unknown>` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `new_type_array Runtime1 stub` | `<unknown>` |

##### `getValue` (`kotlin.UnsafeLazyImpl`)

|  Change | Delta |            % | Samples | Callee   | Location                                                                                                                                |
| ------: | ----: | -----------: | ------: | -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| removed |    -2 | 11.8% → 0.0% |   2 → 0 | `invoke` | `org.jetbrains.kotlin.fir.analysis.cfa.util.PropertyInitializationInfoData$$Lambda.0x000000e001718c88`                                  |
|  -50.0% |    -1 | 11.8% → 9.1% |   2 → 1 | `invoke` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformer$BodyResolveTransformerComponents$$Lambda` |
| removed |    -1 |  5.9% → 0.0% |   1 → 0 | `invoke` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate$$Lambda.0x000000e0016704a0`                                                 |
| +100.0% |    +1 | 5.9% → 18.2% |   1 → 2 | `invoke` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerDataElementsForName$$Lambda.0x0000007001667c98`                                      |
| removed |    -1 |  5.9% → 0.0% |   1 → 0 | `invoke` | `org.jetbrains.kotlin.fir.java.enhancement.FirSignatureEnhancement$$Lambda.0x000000e001611fa8`                                          |

##### `toByteArray` (`java.io.ByteArrayOutputStream`)

|  Change | Delta |              % | Samples | Callee                             | Location           |
| ------: | ----: | -------------: | ------: | ---------------------------------- | ------------------ |
|  -71.4% |    -5 | 87.5% → 100.0% |   7 → 2 | `copyOf`                           | `java.util.Arrays` |
| removed |    -1 |   12.5% → 0.0% |   1 → 0 | `arrayof_jlong_disjoint_arraycopy` | `<unknown>`        |

##### `get` (`java.util.HashMap`)

|  Change | Delta |              % | Samples | Callee                     | Location            |
| ------: | ----: | -------------: | ------: | -------------------------- | ------------------- |
|  -83.3% |    -5 | 85.7% → 100.0% |   6 → 1 | `getNode`                  | `java.util.HashMap` |
| removed |    -1 |   14.3% → 0.0% |   1 → 0 | `resolve_opt_virtual_call` | `<unknown>`         |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in samples collected in their leaf frame.

Common call stack: `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`

|  Change | Delta |           % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +200.0% |    +6 | 0.2% → 0.7% |   3 → 9 | `Arena::contains` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                                                                                                                                                                                                                           |
|  +36.4% |    +4 | 0.7% → 1.1% | 11 → 15 | `PhaseChaitin::gather_lrg_masks` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                                                                                                                                                                                                              |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `PhaseIdealLoop::split_if_with_blocks` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                                                                                                         |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `PhaseCFG::schedule_pinned_nodes` ← `PhaseCFG::global_code_motion` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                                                                                                                                                                            |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `DebugInformationRecorder::describe_scope` ← `LIR_Assembler::record_non_safepoint_debug_info` ← `LIR_Assembler::process_debug_info` ← `LIR_Assembler::emit_lir_list` ← `LIR_Assembler::emit_code` ← `Compilation::emit_code_body` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method`                                                                                                                                                            |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `Scheduling::ComputeUseCount` ← `Scheduling::DoScheduling` ← `PhaseOutput::Output` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                                                                                                                                                                                                |
|  +60.0% |    +3 | 0.3% → 0.6% |   5 → 8 | `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                                                                                                                                                                                                    |
| +150.0% |    +3 | 0.1% → 0.4% |   2 → 5 | `PhaseAggressiveCoalesce::insert_copies` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                                                                                                                                                                                                      |
| +100.0% |    +3 | 0.2% → 0.5% |   3 → 6 | `PhaseIdealLoop::build_loop_early` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                                                                                                                                         |
| +100.0% |    +3 | 0.2% → 0.5% |   3 → 6 | `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                                                                                                                                                                                                                       |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` ← `DebugInformationRecorder::describe_scope` ← `LIR_Assembler::record_non_safepoint_debug_info` ← `LIR_Assembler::process_debug_info` ← `LIR_Assembler::emit_lir_list` ← `LIR_Assembler::emit_code` ← `Compilation::emit_code_body` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `LinearScan::eliminate_spill_moves` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method`                                                                                                                                                                                                                                                                                                 |
|  +75.0% |    +3 | 0.2% → 0.5% |   4 → 7 | `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                                                                                                                                                                                                                                         |
| +150.0% |    +3 | 0.1% → 0.4% |   2 → 5 | `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                                                                                                                   |
| +100.0% |    +3 | 0.2% → 0.5% |   3 → 6 | `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                                                                                                                                                                                                                                               |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `Compile::disconnect_useless_nodes` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                                                                                                                                                                                            |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `tlv_get_addr` ← `PhaseChaitin::build_ifg_physical` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                                                                                                                                                                                           |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhaseIFG::SquareUp` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                                                                                                                                                                                                                          |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhaseIdealLoop::build_loop_tree` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                                                                                                              |
|  +66.7% |    +2 | 0.2% → 0.4% |   3 → 5 | `PhaseIFG::effective_degree` ← `PhaseIFG::Compute_Effective_Degree` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                                                                                                                                                                           |

### Improvements

Call stacks with the largest decrease in samples collected in their leaf frame.

|  Change | Delta |           % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------: | ----: | ----------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -72.7% |   -24 | 2.0% → 0.7% |  33 → 9 | `__psynch_cvwait` ← `PlatformMonitor::wait` ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -29.5% |   -18 | 3.6% → 3.3% | 61 → 43 | `inflate_fast` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes` (`java.util.zip.Inflater`) ← `inflate` ← `read` (`java.util.zip.InflaterInputStream`) ← `read` (`java.util.zip.ZipInputStream`) ← `read` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses` ← `run` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  -76.9% |   -10 | 0.8% → 0.2% |  13 → 3 | `LinearScanWalker::alloc_free_reg` ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| removed |    -6 | 0.4% → 0.0% |   6 → 0 | `getNode` (`java.util.HashMap`) ← `get` ← `loadAllClassesFromJars` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses` ← `run` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -85.7% |    -6 | 0.4% → 0.1% |   7 → 1 | `__psynch_cvwait` ← `PlatformMonitor::wait` ← `Monitor::wait_without_safepoint_check` ← `TaskTerminator::offer_termination` ← `G1ParEvacuateFollowersClosure::offer_termination` ← `G1ParEvacuateFollowersClosure::do_void` ← `G1EvacuateRegionsTask::evacuate_live_objects` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed |    -6 | 0.4% → 0.0% |   6 → 0 | `__psynch_cvwait` ← `PlatformMonitor::wait` ← `Monitor::wait_without_safepoint_check` ← `ServiceThread::service_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  -66.7% |    -6 | 0.5% → 0.2% |   9 → 3 | `semaphore_wait_trap` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| removed |    -5 | 0.3% → 0.0% |   5 → 0 | `zero_blocks` ← `<init>` (`java.io.ByteArrayOutputStream`) ← `loadAllClassesFromJars` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses` ← `run` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| removed |    -5 | 0.3% → 0.0% |   5 → 0 | `_platform_memset` ← `MemAllocator::allocate` ← `CollectedHeap::array_allocate` ← `JVM_Clone` ← `clone` (`java.lang.Object`) ← `copyOf` (`java.util.Arrays`) ← `toByteArray` (`java.io.ByteArrayOutputStream`) ← `loadAllClassesFromJars` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses` ← `run` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed |    -5 | 0.3% → 0.0% |   5 → 0 | `__psynch_cvwait` ← `PlatformMonitor::wait` ← `Monitor::wait_without_safepoint_check` ← `VMThread::wait_for_operation` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -33.3% |    -5 | 0.9% → 0.8% | 15 → 10 | `PhaseChaitin::elide_copy` ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -31.3% |    -5 | 1.0% → 0.8% | 16 → 11 | `PhaseChaitin::build_ifg_physical` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| removed |    -5 | 0.3% → 0.0% |   5 → 0 | `swtch_pri` ← `bool ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::internal_insert_get<G1CodeRootSetHashTable::HashTableLookUp, bool ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::insert<G1CodeRootSetHashTable::HashTableLookUp>(Thread*, G1CodeRootSetHashTable::HashTableLookUp&, nmethod* const&, bool*, bool*)::NOP>` ← `G1CodeRootSetHashTable::insert` ← `nmethod::oops_do` ← `G1NmethodProcessor::do_regular_processing` ← `nmethod::oops_do_process_weak` ← `G1CodeBlobClosure::do_code_blob` ← `G1ScanAndCountCodeBlobClosure::do_code_blob` ← `void ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::ScanTask::do_safepoint_scan<G1CodeRootSetHashTable::iterate_at_safepoint(CodeBlobClosure*)::'lambda'(nmethod**)>` ← `G1CodeRootSet::nmethods_do` ← `G1ScanCodeRootsClosure::do_heap_region` ← `G1CollectedHeap::par_iterate_regions_array` ← `G1RemSet::scan_collection_set_code_roots` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start` |
|  -83.3% |    -5 | 0.4% → 0.1% |   6 → 1 | `__psynch_mutexwait` ← `_pthread_mutex_firstfit_lock_slow` ← `_pthread_cond_wait` ← `PlatformMonitor::wait` ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -57.1% |    -4 | 0.4% → 0.2% |   7 → 3 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` ← `HeapRegionManager::par_iterate` ← `G1RebuildRSAndScrubTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  -80.0% |    -4 | 0.3% → 0.1% |   5 → 1 | `G1ParScanThreadState::do_copy_to_survivor_space` ← `G1ParScanThreadState::trim_queue_to_threshold` ← `G1ParScanThreadState::steal_and_trim_queue` ← `G1ParEvacuateFollowersClosure::do_void` ← `G1EvacuateRegionsTask::evacuate_live_objects` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -80.0% |    -4 | 0.3% → 0.1% |   5 → 1 | `PhaseChaitin::Simplify` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -80.0% |    -4 | 0.3% → 0.1% |   5 → 1 | `__psynch_cvwait` ← `PlatformMonitor::wait` ← `Monitor::wait_without_safepoint_check` ← `WatcherThread::sleep` ← `WatcherThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  -66.7% |    -4 | 0.4% → 0.2% |   6 → 2 | `Compile::disconnect_useless_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  -57.1% |    -4 | 0.4% → 0.2% |   7 → 3 | `LinearScanWalker::free_collect_inactive_fixed` ← `LinearScanWalker::alloc_free_reg` ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
