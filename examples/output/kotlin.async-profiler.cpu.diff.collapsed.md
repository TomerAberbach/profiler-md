# Sampling profile diff

Collected 1,353 samples → 1,356 samples (+3 samples, +0.2%).

| Category         | Change | Delta |             % |   Samples |
| ---------------- | -----: | ----: | ------------: | --------: |
| Compiler         |  +0.2% |    +1 |         45.6% | 617 → 618 |
| Native           |  -1.9% |   -10 | 39.0% → 38.2% | 528 → 518 |
| Ours             |  +5.2% |    +7 |  9.9% → 10.4% | 134 → 141 |
| Standard library |  +3.3% |    +2 |   4.4% → 4.6% |   60 → 62 |
| JIT              | +23.1% |    +3 |   1.0% → 1.2% |   13 → 16 |
| Unknown          |   0.0% |     0 |          0.1% |         1 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                          | Location    |
| ------: | ----: | ----------: | ------: | ------------------------------------------------- | ----------- |
|  +69.2% |    +9 | 1.0% → 1.6% | 13 → 22 | `IndexSetIterator::advance_and_next`              | `<unknown>` |
|  +50.0% |    +8 | 1.2% → 1.8% | 16 → 24 | `__psynch_mutexwait`                              | `<unknown>` |
| +350.0% |    +7 | 0.1% → 0.7% |   2 → 9 | `PhaseLive::add_liveout`                          | `<unknown>` |
| +600.0% |    +6 | 0.1% → 0.5% |   1 → 7 | `__psynch_mutexdrop`                              | `<unknown>` |
| +150.0% |    +6 | 0.3% → 0.7% |  4 → 10 | `LinearScanWalker::free_collect_inactive_fixed`   | `<unknown>` |
| +125.0% |    +5 | 0.3% → 0.7% |   4 → 9 | `Matcher::xform`                                  | `<unknown>` |
|  +71.4% |    +5 | 0.5% → 0.9% |  7 → 12 | `_platform_memset`                                | `<unknown>` |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `LinearScan::eliminate_spill_moves`               | `<unknown>` |
| +100.0% |    +4 | 0.3% → 0.6% |   4 → 8 | `bsearch`                                         | `<unknown>` |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `PhaseChaitin::stretch_base_pointer_live_ranges`  | `<unknown>` |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `I2C/C2I adapters(0xb)`                           | `<unknown>` |
|  +57.1% |    +4 | 0.5% → 0.8% |  7 → 11 | `G1ParScanThreadState::do_copy_to_survivor_space` | `<unknown>` |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `void G1ScanCardClosure::do_oop_work<narrowOop>`  | `<unknown>` |
|  +30.0% |    +3 | 0.7% → 1.0% | 10 → 13 | `InstanceKlass::find_method_index`                | `<unknown>` |
| +150.0% |    +3 | 0.1% → 0.4% |   2 → 5 | `PhaseIterGVN::transform_old`                     | `<unknown>` |
| +100.0% |    +3 | 0.2% → 0.4% |   3 → 6 | `LinearScanWalker::split_before_usage`            | `<unknown>` |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `Matcher::find_shared`                            | `<unknown>` |
|  +75.0% |    +3 | 0.3% → 0.5% |   4 → 7 | `_platform_memmove`                               | `<unknown>` |
|  +60.0% |    +3 | 0.4% → 0.6% |   5 → 8 | `LinearScanWalker::alloc_free_reg`                | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `I2C/C2I adapters(0xbb)`                          | `<unknown>` |

##### Compiler

|  Change | Delta |           % | Samples | Function                                         | Location    |
| ------: | ----: | ----------: | ------: | ------------------------------------------------ | ----------- |
|  +69.2% |    +9 | 1.0% → 1.6% | 13 → 22 | `IndexSetIterator::advance_and_next`             | `<unknown>` |
| +350.0% |    +7 | 0.1% → 0.7% |   2 → 9 | `PhaseLive::add_liveout`                         | `<unknown>` |
| +150.0% |    +6 | 0.3% → 0.7% |  4 → 10 | `LinearScanWalker::free_collect_inactive_fixed`  | `<unknown>` |
| +125.0% |    +5 | 0.3% → 0.7% |   4 → 9 | `Matcher::xform`                                 | `<unknown>` |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `LinearScan::eliminate_spill_moves`              | `<unknown>` |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `PhaseChaitin::stretch_base_pointer_live_ranges` | `<unknown>` |
| +150.0% |    +3 | 0.1% → 0.4% |   2 → 5 | `PhaseIterGVN::transform_old`                    | `<unknown>` |
| +100.0% |    +3 | 0.2% → 0.4% |   3 → 6 | `LinearScanWalker::split_before_usage`           | `<unknown>` |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `Matcher::find_shared`                           | `<unknown>` |
|  +60.0% |    +3 | 0.4% → 0.6% |   5 → 8 | `LinearScanWalker::alloc_free_reg`               | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhaseChaitin::Simplify`                         | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhaseIdealLoop::compute_lca_of_uses`            | `<unknown>` |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `Node::rematerialize`                            | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `Unique_Node_List::remove_useless_nodes`         | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `RegionNode::is_CFG`                             | `<unknown>` |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `TypeInstPtr::hash`                              | `<unknown>` |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `NodeHash::hash_delete`                          | `<unknown>` |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `Type::hashcons`                                 | `<unknown>` |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `MemNode::find_previous_store`                   | `<unknown>` |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `PhaseGVN::transform_no_reclaim`                 | `<unknown>` |

##### Native

|  Change | Delta |           % | Samples | Function                                                                                                      | Location    |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------- | ----------- |
|  +50.0% |    +8 | 1.2% → 1.8% | 16 → 24 | `__psynch_mutexwait`                                                                                          | `<unknown>` |
| +600.0% |    +6 | 0.1% → 0.5% |   1 → 7 | `__psynch_mutexdrop`                                                                                          | `<unknown>` |
|  +71.4% |    +5 | 0.5% → 0.9% |  7 → 12 | `_platform_memset`                                                                                            | `<unknown>` |
| +100.0% |    +4 | 0.3% → 0.6% |   4 → 8 | `bsearch`                                                                                                     | `<unknown>` |
|  +57.1% |    +4 | 0.5% → 0.8% |  7 → 11 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                             | `<unknown>` |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `void G1ScanCardClosure::do_oop_work<narrowOop>`                                                              | `<unknown>` |
|  +30.0% |    +3 | 0.7% → 1.0% | 10 → 13 | `InstanceKlass::find_method_index`                                                                            | `<unknown>` |
|  +75.0% |    +3 | 0.3% → 0.5% |   4 → 7 | `_platform_memmove`                                                                                           | `<unknown>` |
|  +42.9% |    +3 | 0.5% → 0.7% |  7 → 10 | `__psynch_cvwait`                                                                                             | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `Klass::hash_secondary_supers`                                                                                | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `_platform_memchr`                                                                                            | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `tiny_malloc_from_free_list`                                                                                  | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `void OopOopIterateBoundedDispatch<G1CMOopClosure>::Table::oop_oop_iterate_bounded<ObjArrayKlass, narrowOop>` | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `BytecodeStream::next`                                                                                        | `<unknown>` |
| +100.0% |    +2 | 0.1% → 0.3% |   2 → 4 | `SymbolTable::lookup_only`                                                                                    | `<unknown>` |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `LinkResolver::check_method_accessability`                                                                    | `<unknown>` |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `LinkResolver::resolve_virtual_call`                                                                          | `<unknown>` |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `G1CMBitMap::iterate`                                                                                         | `<unknown>` |
| +100.0% |    +2 | 0.1% → 0.3% |   2 → 4 | `SymbolTable::lookup_shared`                                                                                  | `<unknown>` |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `SignatureStream::next`                                                                                       | `<unknown>` |

##### Ours

| Change | Delta |           % | Samples | Function                                                     | Location                                                                                      |
| -----: | ----: | ----------: | ------: | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 0.1% |   0 → 2 | `readUTF8`                                                   | `org.jetbrains.org.objectweb.asm.ClassReader`                                                 |
|    new |    +2 | 0.0% → 0.1% |   0 → 2 | `balanceWhiteSpaces`                                         | `com.intellij.lang.impl.PsiBuilderImpl`                                                       |
|    new |    +2 | 0.0% → 0.1% |   0 → 2 | `readSourceFileWithMapping`                                  | `org.jetbrains.kotlin.KtSourceFileLinesMappingKt`                                             |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `visitPropertyAccessExpression`                              | `org.jetbrains.kotlin.fir.analysis.checkers.expression.ExpressionCheckersDiagnosticComponent` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `accept`                                                     | `org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression`                            |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `acceptChildren`                                             | `org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl`                             |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `accept`                                                     | `org.jetbrains.org.objectweb.asm.tree.InsnList`                                               |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `accept`                                                     | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                                             |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `accept`                                                     | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`                                             |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `visitFunction`                                              | `org.jetbrains.kotlin.backend.common.IrElementTransformerVoidWithContext`                     |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `runTasks`                                                   | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`                            |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `transformFunctionCallInternal$org_jetbrains_kotlin_resolve` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `completeCall`                                               | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`                                 |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `mayHaveTopLevelClassifier`                                  | `org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`                           |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `parsePartialFrom`                                           | `org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`                                           |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `addSubtypeConstraint`                                       | `org.jetbrains.kotlin.resolve.calls.inference.components.TypeCheckerStateForConstraintSystem` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `prepareType`                                                | `org.jetbrains.kotlin.fir.types.ConeTypePreparator`                                           |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `collectDslMarkerAnnotations`                                | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckDslScopeViolation`                        |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `isVisible$default`                                          | `org.jetbrains.kotlin.fir.FirVisibilityChecker`                                               |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `fastCorrespondingSupertypes`                                | `org.jetbrains.kotlin.fir.types.ConeTypeContext`                                              |

##### Standard library

|  Change | Delta |           % | Samples | Function                | Location                                                                 |
| ------: | ----: | ----------: | ------: | ----------------------- | ------------------------------------------------------------------------ |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `allocateInstance`      | `jdk.internal.misc.Unsafe`                                               |
|  +66.7% |    +2 | 0.2% → 0.4% |   3 → 5 | `sanitizeStackTrace`    | `kotlin.jvm.internal.Intrinsics`                                         |
| +100.0% |    +2 | 0.1% → 0.3% |   2 → 4 | `checkNotNullParameter` | `kotlin.jvm.internal.Intrinsics`                                         |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `iterator`              | `java.util.ArrayList`                                                    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `hash`                  | `java.util.HashMap`                                                      |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `toByteArray`           | `jdk.internal.org.objectweb.asm.ClassWriter`                             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `getMethod`             | `java.lang.Class`                                                        |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `indexOf`               | `java.util.ArrayList`                                                    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `append`                | `java.lang.StringBuilder`                                                |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>`                | `java.io.ByteArrayOutputStream`                                          |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `hashCode`              | `java.lang.Object`                                                       |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `generate`              | `java.lang.invoke.InnerClassLambdaMetafactory$ForwardingMethodGenerator` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `build`                 | `kotlin.collections.SetsKt__SetsJVMKt`                                   |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `hasNext`               | `java.util.LinkedHashMap$LinkedHashIterator`                             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `resolve`               | `java.lang.invoke.MemberName$Factory`                                    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>`                | `jdk.internal.org.objectweb.asm.SymbolTable$Entry`                       |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>`                | `java.util.LinkedHashMap`                                                |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `makePairwiseConvert`   | `java.lang.invoke.MethodHandleImpl`                                      |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `substring`             | `java.lang.String`                                                       |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `getLocationIndex`      | `jdk.internal.jimage.BasicImageReader`                                   |

##### JIT

|  Change | Delta |           % | Samples | Function                   | Location    |
| ------: | ----: | ----------: | ------: | -------------------------- | ----------- |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `I2C/C2I adapters(0xb)`    | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `I2C/C2I adapters(0xbb)`   | `<unknown>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `I2C/C2I adapters(0xbbbb)` | `<unknown>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `itable stub`              | `<unknown>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `I2C/C2I adapters(0x)`     | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                                                               | Location    |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------ | ----------- |
|  -32.1% |    -9 | 2.1% → 1.4% | 28 → 19 | `SymbolTable::do_lookup`                                                                               | `<unknown>` |
|  -80.0% |    -8 | 0.7% → 0.1% |  10 → 2 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `<unknown>` |
|  -37.5% |    -6 | 1.2% → 0.7% | 16 → 10 | `PhaseChaitin::build_ifg_physical`                                                                     | `<unknown>` |
|  -25.0% |    -6 | 1.8% → 1.3% | 24 → 18 | `tlv_get_addr`                                                                                         | `<unknown>` |
|  -60.0% |    -6 | 0.7% → 0.3% |  10 → 4 | `Compile::identify_useful_nodes`                                                                       | `<unknown>` |
|  -71.4% |    -5 | 0.5% → 0.1% |   7 → 2 | `vmSymbols::find_sid`                                                                                  | `<unknown>` |
|  -45.5% |    -5 | 0.8% → 0.4% |  11 → 6 | `PhaseChaitin::gather_lrg_masks`                                                                       | `<unknown>` |
|  -83.3% |    -5 | 0.4% → 0.1% |   6 → 1 | `I2C/C2I adapters(0xbbab)`                                                                             | `<unknown>` |
|  -55.6% |    -5 | 0.7% → 0.3% |   9 → 4 | `PhaseAggressiveCoalesce::insert_copies`                                                               | `<unknown>` |
|  -57.1% |    -4 | 0.5% → 0.2% |   7 → 3 | `Node_Backward_Iterator::next`                                                                         | `<unknown>` |
|  -33.3% |    -4 | 0.9% → 0.6% |  12 → 8 | `PhaseIdealLoop::build_loop_late`                                                                      | `<unknown>` |
|  -19.0% |    -4 | 1.6% → 1.3% | 21 → 17 | `PhaseChaitin::Split`                                                                                  | `<unknown>` |
|  -44.4% |    -4 | 0.7% → 0.4% |   9 → 5 | `LIR_OpVisitState::visit`                                                                              | `<unknown>` |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `posix_madvise`                                                                                        | `<unknown>` |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `pthread_mutex_lock`                                                                                   | `<unknown>` |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `PhaseCFG::schedule_local`                                                                             | `<unknown>` |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `inflate_table`                                                                                        | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `PhaseChaitin::Register_Allocate`                                                                      | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `Node::latency`                                                                                        | `<unknown>` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `PhaseIdealLoop::split_if_with_blocks_pre`                                                             | `<unknown>` |

##### Compiler

|  Change | Delta |           % | Samples | Function                                                           | Location    |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------ | ----------- |
|  -37.5% |    -6 | 1.2% → 0.7% | 16 → 10 | `PhaseChaitin::build_ifg_physical`                                 | `<unknown>` |
|  -60.0% |    -6 | 0.7% → 0.3% |  10 → 4 | `Compile::identify_useful_nodes`                                   | `<unknown>` |
|  -45.5% |    -5 | 0.8% → 0.4% |  11 → 6 | `PhaseChaitin::gather_lrg_masks`                                   | `<unknown>` |
|  -55.6% |    -5 | 0.7% → 0.3% |   9 → 4 | `PhaseAggressiveCoalesce::insert_copies`                           | `<unknown>` |
|  -57.1% |    -4 | 0.5% → 0.2% |   7 → 3 | `Node_Backward_Iterator::next`                                     | `<unknown>` |
|  -33.3% |    -4 | 0.9% → 0.6% |  12 → 8 | `PhaseIdealLoop::build_loop_late`                                  | `<unknown>` |
|  -19.0% |    -4 | 1.6% → 1.3% | 21 → 17 | `PhaseChaitin::Split`                                              | `<unknown>` |
|  -44.4% |    -4 | 0.7% → 0.4% |   9 → 5 | `LIR_OpVisitState::visit`                                          | `<unknown>` |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `PhaseCFG::schedule_local`                                         | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `PhaseChaitin::Register_Allocate`                                  | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `Node::latency`                                                    | `<unknown>` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `PhaseIdealLoop::split_if_with_blocks_pre`                         | `<unknown>` |
|  -50.0% |    -3 | 0.4% → 0.2% |   6 → 3 | `Unique_Node_List::remove`                                         | `<unknown>` |
|  -42.9% |    -3 | 0.5% → 0.3% |   7 → 4 | `PhaseChaitin::post_allocate_copy_removal`                         | `<unknown>` |
|  -27.3% |    -3 | 0.8% → 0.6% |  11 → 8 | `IntervalWalker::walk_to`                                          | `<unknown>` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `LinearScan::assign_reg_num`                                       | `<unknown>` |
|  -33.3% |    -3 | 0.7% → 0.4% |   9 → 6 | `PhaseLive::compute`                                               | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `Compile::final_graph_reshaping_walk`                              | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `ConLNode::Opcode`                                                 | `<unknown>` |

##### Native

|  Change | Delta |           % | Samples | Function                                                                                               | Location    |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------ | ----------- |
|  -32.1% |    -9 | 2.1% → 1.4% | 28 → 19 | `SymbolTable::do_lookup`                                                                               | `<unknown>` |
|  -80.0% |    -8 | 0.7% → 0.1% |  10 → 2 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `<unknown>` |
|  -25.0% |    -6 | 1.8% → 1.3% | 24 → 18 | `tlv_get_addr`                                                                                         | `<unknown>` |
|  -71.4% |    -5 | 0.5% → 0.1% |   7 → 2 | `vmSymbols::find_sid`                                                                                  | `<unknown>` |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `posix_madvise`                                                                                        | `<unknown>` |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `pthread_mutex_lock`                                                                                   | `<unknown>` |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `inflate_table`                                                                                        | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `__psynch_cvbroad`                                                                                     | `<unknown>` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `ClassFileParser::skip_over_field_signature`                                                           | `<unknown>` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `mach_absolute_time`                                                                                   | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `Symbol::decrement_refcount`                                                                           | `<unknown>` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `Rewriter::compute_index_maps`                                                                         | `<unknown>` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `ResourceBitMap::ResourceBitMap`                                                                       | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>`         | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `PhiSimplifier::block_do`                                                                              | `<unknown>` |
|  -40.0% |    -2 | 0.4% → 0.2% |   5 → 3 | `CodeCache::make_marked_nmethods_deoptimized`                                                          | `<unknown>` |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `__vfprintf`                                                                                           | `<unknown>` |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `trampoline_stub_Relocation::get_trampoline_for`                                                       | `<unknown>` |
|  -20.0% |    -2 | 0.7% → 0.6% |  10 → 8 | `inflate`                                                                                              | `<unknown>` |
|  -40.0% |    -2 | 0.4% → 0.2% |   5 → 3 | `ClassVerifier::verify_method`                                                                         | `<unknown>` |

##### Ours

|  Change | Delta |           % | Samples | Function                                                         | Location                                                                                                                            |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `applyArgumentsWithReorderingIfNeeded`                           | `org.jetbrains.kotlin.fir.backend.generators.CallAndReferenceGenerator`                                                             |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `asReadOnlyStorage`                                              | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`                                                        |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `transform`                                                      | `org.jetbrains.kotlin.codegen.optimization.RedundantGotoMethodTransformer`                                                          |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `visitNamedFunction`                                             | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                                                   |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `visitJumpInsn`                                                  | `org.jetbrains.org.objectweb.asm.MethodVisitor`                                                                                     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>`                                                         | `org.jetbrains.kotlin.utils.ThreadLocalDelegate`                                                                                    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `buildSimpleArray`                                               | `org.jetbrains.kotlin.backend.jvm.ir.IrArrayBuilder`                                                                                |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `isContainedInInvariantOrContravariantPositionsWithDependencies` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CollectTypeVariableUsagesInfo`                                                       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `check`                                                          | `org.jetbrains.kotlin.fir.resolve.calls.stages.CollectTypeVariableUsagesInfo`                                                       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `incorporate`                                                    | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintIncorporator`                                                    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `processGivenConstraints`                                        | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                                                        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `addConstraintIfCompatible`                                      | `org.jetbrains.kotlin.resolve.calls.inference.ConstraintSystemBuilderKt`                                                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `resolveExtensionReceiver`                                       | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckExtensionReceiver`                                                              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `transformElement`                                               | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer$transformArgumentList$ArgumentTransformer` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `createLibrarySession$lambda$0`                                  | `org.jetbrains.kotlin.fir.session.FirJvmSessionFactory`                                                                             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `acceptChildren`                                                 | `org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl`                                                                     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getUseSiteMemberScope`                                          | `org.jetbrains.kotlin.fir.scopes.FirKotlinScopeProvider`                                                                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>`                                                         | `org.jetbrains.kotlin.resolve.calls.inference.model.Constraint`                                                                     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `visitNamedFunction`                                             | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.DeclarationCheckersDiagnosticComponent`                                     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `createMethodReplacement$lambda$0`                               | `org.jetbrains.kotlin.backend.jvm.MemoizedInlineClassReplacements`                                                                  |

##### Standard library

|  Change | Delta |           % | Samples | Function                     | Location                                      |
| ------: | ----: | ----------: | ------: | ---------------------------- | --------------------------------------------- |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `getKey`                     | `java.util.HashMap$Node`                      |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `hasNext`                    | `kotlin.collections.EmptyIterator`            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `invokeExact_MT`             | `java.lang.invoke.Invokers$Holder`            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>`                     | `kotlin.sequences.FilteringSequence`          |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `newNode`                    | `java.util.LinkedHashMap`                     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `verifyCurrentThreadCpuTime` | `sun.management.ThreadImpl`                   |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>`                     | `java.lang.invoke.DirectMethodHandle`         |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `releaseInflater`            | `java.util.zip.ZipFile$CleanableResource`     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>`                     | `java.lang.String`                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `get`                        | `java.util.HashMap`                           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `copyOf`                     | `java.util.Arrays`                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `replace`                    | `java.lang.StringLatin1`                      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `removeStaleReferences`      | `jdk.internal.util.ReferencedKeyMap`          |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `contains$default`           | `kotlin.text.StringsKt__StringsKt`            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `isEmpty`                    | `kotlin.collections.EmptyList`                |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `hasFrames`                  | `jdk.internal.org.objectweb.asm.MethodWriter` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `tabAt`                      | `java.util.concurrent.ConcurrentHashMap`      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getBufIfOpen`               | `java.io.BufferedInputStream`                 |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `indexOf`                    | `kotlin.text.StringsKt__StringsKt`            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `mapOf`                      | `kotlin.collections.MapsKt__MapsJVMKt`        |

##### JIT

| Change | Delta |           % | Samples | Function                   | Location    |
| -----: | ----: | ----------: | ------: | -------------------------- | ----------- |
| -83.3% |    -5 | 0.4% → 0.1% |   6 → 1 | `I2C/C2I adapters(0xbbab)` | `<unknown>` |
| -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `I2C/C2I adapters(0xaa)`   | `<unknown>` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                                                     | Location                                                                                                 |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
|     new |  +363 |  0.0% → 26.8% |   0 → 363 | `invokeStatic`                                               | `java.lang.invoke.LambdaForm$DMH.0x000000e001008000`                                                     |
|     new |  +363 |  0.0% → 26.8% |   0 → 363 | `invoke`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000e001009400`                                                      |
| +130.8% |   +17 |   1.0% → 2.2% |   13 → 30 | `LinearScanWalker::activate_current`                         | `<unknown>`                                                                                              |
|   +2.0% |   +16 | 60.2% → 61.3% | 815 → 831 | `CompileBroker::invoke_compiler_on_method`                   | `<unknown>`                                                                                              |
|   +1.9% |   +16 | 61.0% → 62.0% | 825 → 841 | `CompileBroker::compiler_thread_loop`                        | `<unknown>`                                                                                              |
|   +1.9% |   +16 | 61.0% → 62.0% | 825 → 841 | `JavaThread::thread_main_inner`                              | `<unknown>`                                                                                              |
|  +84.2% |   +16 |   1.4% → 2.6% |   19 → 35 | `LinearScan::allocate_registers`                             | `<unknown>`                                                                                              |
|   +6.6% |   +14 | 15.6% → 16.6% | 211 → 225 | `Compilation::compile_java_method`                           | `<unknown>`                                                                                              |
|  +58.3% |   +14 |   1.8% → 2.8% |   24 → 38 | `IntervalWalker::walk_to`                                    | `<unknown>`                                                                                              |
|  +18.8% |   +13 |   5.1% → 6.0% |   69 → 82 | `transformFunctionCallInternal$org_jetbrains_kotlin_resolve` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`            |
|  +20.0% |   +13 |   4.8% → 5.8% |   65 → 78 | `transformFunctionCall`                                      | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`            |
|  +20.0% |   +13 |   4.8% → 5.8% |   65 → 78 | `transform`                                                  | `org.jetbrains.kotlin.fir.expressions.FirFunctionCall`                                                   |
|   +5.0% |   +12 | 17.8% → 18.7% | 241 → 253 | `Compilation::Compilation`                                   | `<unknown>`                                                                                              |
|  +18.8% |   +12 |   4.7% → 5.6% |   64 → 76 | `transformFunctionCall`                                      | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
|  +36.4% |   +12 |   2.4% → 3.3% |   33 → 45 | `Matcher::xform`                                             | `<unknown>`                                                                                              |
|  +26.7% |   +12 |   3.3% → 4.2% |   45 → 57 | `Matcher::match`                                             | `<unknown>`                                                                                              |
| +133.3% |   +12 |   0.7% → 1.5% |    9 → 21 | `LinearScanWalker::alloc_free_reg`                           | `<unknown>`                                                                                              |
|   +4.6% |   +11 | 17.8% → 18.6% | 241 → 252 | `Compilation::compile_method`                                | `<unknown>`                                                                                              |
|  +40.7% |   +11 |   2.0% → 2.8% |   27 → 38 | `accept`                                                     | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`                                                        |
| +110.0% |   +11 |   0.7% → 1.5% |   10 → 21 | `transformResult`                                            | `org.jetbrains.kotlin.fir.expressions.impl.FirRegularWhenBranch`                                         |

##### Compiler

|  Change | Delta |             % |   Samples | Function                                   | Location    |
| ------: | ----: | ------------: | --------: | ------------------------------------------ | ----------- |
| +130.8% |   +17 |   1.0% → 2.2% |   13 → 30 | `LinearScanWalker::activate_current`       | `<unknown>` |
|   +2.0% |   +16 | 60.2% → 61.3% | 815 → 831 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
|   +1.9% |   +16 | 61.0% → 62.0% | 825 → 841 | `CompileBroker::compiler_thread_loop`      | `<unknown>` |
|  +84.2% |   +16 |   1.4% → 2.6% |   19 → 35 | `LinearScan::allocate_registers`           | `<unknown>` |
|   +6.6% |   +14 | 15.6% → 16.6% | 211 → 225 | `Compilation::compile_java_method`         | `<unknown>` |
|  +58.3% |   +14 |   1.8% → 2.8% |   24 → 38 | `IntervalWalker::walk_to`                  | `<unknown>` |
|   +5.0% |   +12 | 17.8% → 18.7% | 241 → 253 | `Compilation::Compilation`                 | `<unknown>` |
|  +36.4% |   +12 |   2.4% → 3.3% |   33 → 45 | `Matcher::xform`                           | `<unknown>` |
|  +26.7% |   +12 |   3.3% → 4.2% |   45 → 57 | `Matcher::match`                           | `<unknown>` |
| +133.3% |   +12 |   0.7% → 1.5% |    9 → 21 | `LinearScanWalker::alloc_free_reg`         | `<unknown>` |
|   +4.6% |   +11 | 17.8% → 18.6% | 241 → 252 | `Compilation::compile_method`              | `<unknown>` |
|   +1.8% |   +10 | 41.5% → 42.1% | 561 → 571 | `C2Compiler::compile_method`               | `<unknown>` |
|  +15.2% |   +10 |   4.9% → 5.6% |   66 → 76 | `LinearScan::do_linear_scan`               | `<unknown>` |
|   +1.6% |    +9 | 41.5% → 42.0% | 561 → 570 | `Compile::Compile`                         | `<unknown>` |
| +112.5% |    +9 |   0.6% → 1.3% |    8 → 17 | `Matcher::Label_Root`                      | `<unknown>` |
|  +64.3% |    +9 |   1.0% → 1.7% |   14 → 23 | `PhaseIdealLoop::split_if_with_blocks`     | `<unknown>` |
|  +69.2% |    +9 |   1.0% → 1.6% |   13 → 22 | `IndexSetIterator::advance_and_next`       | `<unknown>` |
|   +9.6% |    +8 |   6.1% → 6.7% |   83 → 91 | `Compilation::emit_lir`                    | `<unknown>` |
|  +20.5% |    +8 |   2.9% → 3.5% |   39 → 47 | `Compilation::emit_code_body`              | `<unknown>` |
|  +35.0% |    +7 |   1.5% → 2.0% |   20 → 27 | `Matcher::match_tree`                      | `<unknown>` |

##### Native

|  Change | Delta |             % |   Samples | Function                                                                                                                                                        | Location    |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|   +1.9% |   +16 | 61.0% → 62.0% | 825 → 841 | `JavaThread::thread_main_inner`                                                                                                                                 | `<unknown>` |
|   +4.1% |   +10 | 18.0% → 18.7% | 243 → 253 | `Compiler::compile_method`                                                                                                                                      | `<unknown>` |
|  +90.9% |   +10 |   0.8% → 1.5% |   11 → 21 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` | `<unknown>` |
|  +81.8% |    +9 |   0.8% → 1.5% |   11 → 20 | `G1ScanHRForRegionClosure::scan_memregion`                                                                                                                      | `<unknown>` |
|  +50.0% |    +8 |   1.2% → 1.8% |   16 → 24 | `__psynch_mutexwait`                                                                                                                                            | `<unknown>` |
|  +50.0% |    +8 |   1.2% → 1.8% |   16 → 24 | `_pthread_mutex_firstfit_lock_slow`                                                                                                                             | `<unknown>` |
|  +88.9% |    +8 |   0.7% → 1.3% |    9 → 17 | `LinkResolver::resolve_static_call`                                                                                                                             | `<unknown>` |
|  +61.5% |    +8 |   1.0% → 1.5% |   13 → 21 | `G1ScanHRForRegionClosure::scan_heap_roots`                                                                                                                     | `<unknown>` |
| +400.0% |    +8 |   0.1% → 0.7% |    2 → 10 | `State::DFA`                                                                                                                                                    | `<unknown>` |
|  +50.0% |    +7 |   1.0% → 1.5% |   14 → 21 | `G1ScanHRForRegionClosure::do_heap_region`                                                                                                                      | `<unknown>` |
|  +50.0% |    +7 |   1.0% → 1.5% |   14 → 21 | `G1RemSet::scan_heap_roots`                                                                                                                                     | `<unknown>` |
|  +31.6% |    +6 |   1.4% → 1.8% |   19 → 25 | `InterpreterRuntime::_new`                                                                                                                                      | `<unknown>` |
| +600.0% |    +6 |   0.1% → 0.5% |     1 → 7 | `__psynch_mutexdrop`                                                                                                                                            | `<unknown>` |
| +600.0% |    +6 |   0.1% → 0.5% |     1 → 7 | `_pthread_mutex_firstfit_unlock_slow`                                                                                                                           | `<unknown>` |
| +600.0% |    +6 |   0.1% → 0.5% |     1 → 7 | `MethodData::allocate`                                                                                                                                          | `<unknown>` |
| +600.0% |    +6 |   0.1% → 0.5% |     1 → 7 | `Method::build_profiling_method_data`                                                                                                                           | `<unknown>` |
|  +25.0% |    +5 |   1.5% → 1.8% |   20 → 25 | `G1EvacuateRegionsTask::scan_roots`                                                                                                                             | `<unknown>` |
|  +71.4% |    +5 |   0.5% → 0.9% |    7 → 12 | `_platform_memset`                                                                                                                                              | `<unknown>` |
|  +12.1% |    +4 |   2.4% → 2.7% |   33 → 37 | `InstanceKlass::link_class_impl`                                                                                                                                | `<unknown>` |
| +200.0% |    +4 |   0.1% → 0.4% |     2 → 6 | `SymbolTable::new_symbols`                                                                                                                                      | `<unknown>` |

##### Ours

|  Change | Delta |           % | Samples | Function                                                     | Location                                                                                                 |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
|  +18.8% |   +13 | 5.1% → 6.0% | 69 → 82 | `transformFunctionCallInternal$org_jetbrains_kotlin_resolve` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`            |
|  +20.0% |   +13 | 4.8% → 5.8% | 65 → 78 | `transformFunctionCall`                                      | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`            |
|  +20.0% |   +13 | 4.8% → 5.8% | 65 → 78 | `transform`                                                  | `org.jetbrains.kotlin.fir.expressions.FirFunctionCall`                                                   |
|  +18.8% |   +12 | 4.7% → 5.6% | 64 → 76 | `transformFunctionCall`                                      | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
|  +40.7% |   +11 | 2.0% → 2.8% | 27 → 38 | `accept`                                                     | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`                                                        |
| +110.0% |   +11 | 0.7% → 1.5% | 10 → 21 | `transformResult`                                            | `org.jetbrains.kotlin.fir.expressions.impl.FirRegularWhenBranch`                                         |
|  +68.8% |   +11 | 1.2% → 2.0% | 16 → 27 | `transformWhenBranch`                                        | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer`  |
|  +68.8% |   +11 | 1.2% → 2.0% | 16 → 27 | `transformWhenBranch`                                        | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
|  +68.8% |   +11 | 1.2% → 2.0% | 16 → 27 | `transform`                                                  | `org.jetbrains.kotlin.fir.expressions.FirWhenBranch`                                                     |
|  +68.8% |   +11 | 1.2% → 2.0% | 16 → 27 | `transformBranches`                                          | `org.jetbrains.kotlin.fir.expressions.impl.FirWhenExpressionImpl`                                        |
|  +23.8% |   +10 | 3.1% → 3.8% | 42 → 52 | `transformResult`                                            | `org.jetbrains.kotlin.fir.expressions.impl.FirReturnExpressionImpl`                                      |
|  +23.8% |   +10 | 3.1% → 3.8% | 42 → 52 | `transformChildren`                                          | `org.jetbrains.kotlin.fir.expressions.impl.FirReturnExpressionImpl`                                      |
|  +23.8% |   +10 | 3.1% → 3.8% | 42 → 52 | `transformExpression`                                        | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`            |
|  +23.8% |   +10 | 3.1% → 3.8% | 42 → 52 | `transformExpression`                                        | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
|  +23.8% |   +10 | 3.1% → 3.8% | 42 → 52 | `transformJump`                                              | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer`  |
|  +23.8% |   +10 | 3.1% → 3.8% | 42 → 52 | `transformReturnExpression`                                  | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer`  |
|  +23.8% |   +10 | 3.1% → 3.8% | 42 → 52 | `transformReturnExpression`                                  | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
|  +23.8% |   +10 | 3.1% → 3.8% | 42 → 52 | `transform`                                                  | `org.jetbrains.kotlin.fir.expressions.FirReturnExpression`                                               |
|  +42.9% |    +9 | 1.6% → 2.2% | 21 → 30 | `transform`                                                  | `org.jetbrains.kotlin.fir.expressions.FirWhenExpression`                                                 |
|  +42.9% |    +9 | 1.6% → 2.2% | 21 → 30 | `transformWhenExpression$lambda$1`                           | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer`  |

##### Standard library

| Change | Delta |             % |   Samples | Function                | Location                                             |
| -----: | ----: | ------------: | --------: | ----------------------- | ---------------------------------------------------- |
|    new |  +363 |  0.0% → 26.8% |   0 → 363 | `invokeStatic`          | `java.lang.invoke.LambdaForm$DMH.0x000000e001008000` |
|    new |  +363 |  0.0% → 26.8% |   0 → 363 | `invoke`                | `java.lang.invoke.LambdaForm$MH.0x000000e001009400`  |
|    new |    +8 |   0.0% → 0.6% |     0 → 8 | `invokeStatic`          | `java.lang.invoke.LambdaForm$DMH.0x000000e001230000` |
| +46.2% |    +6 |   1.0% → 1.4% |   13 → 19 | `getValue`              | `kotlin.SynchronizedLazyImpl`                        |
|  +1.4% |    +5 | 26.5% → 26.8% | 359 → 364 | `invokeExact_MT`        | `java.lang.invoke.Invokers$Holder`                   |
|  +1.1% |    +4 | 26.5% → 26.8% | 359 → 363 | `invokeImpl`            | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +1.1% |    +4 | 26.5% → 26.8% | 359 → 363 | `invoke`                | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +1.1% |    +4 | 26.5% → 26.8% | 359 → 363 | `invoke`                | `java.lang.reflect.Method`                           |
| +57.1% |    +4 |   0.5% → 0.8% |    7 → 11 | `buildCallSite`         | `java.lang.invoke.InnerClassLambdaMetafactory`       |
| +57.1% |    +4 |   0.5% → 0.8% |    7 → 11 | `metafactory`           | `java.lang.invoke.LambdaMetafactory`                 |
| +57.1% |    +4 |   0.5% → 0.8% |    7 → 11 | `invoke`                | `java.lang.invoke.BootstrapMethodInvoker`            |
| +57.1% |    +4 |   0.5% → 0.8% |    7 → 11 | `makeSite`              | `java.lang.invoke.CallSite`                          |
| +57.1% |    +4 |   0.5% → 0.8% |    7 → 11 | `linkCallSiteImpl`      | `java.lang.invoke.MethodHandleNatives`               |
| +57.1% |    +4 |   0.5% → 0.8% |    7 → 11 | `linkCallSite`          | `java.lang.invoke.MethodHandleNatives`               |
| +80.0% |    +4 |   0.4% → 0.7% |     5 → 9 | `checkNotNullParameter` | `kotlin.jvm.internal.Intrinsics`                     |
|    new |    +4 |   0.0% → 0.3% |     0 → 4 | `resolve`               | `java.lang.invoke.MemberName$Factory`                |
|    new |    +4 |   0.0% → 0.3% |     0 → 4 | `resolveOrFail`         | `java.lang.invoke.MethodHandles$Lookup`              |
|    new |    +4 |   0.0% → 0.3% |     0 → 4 | `makePairwiseConvert`   | `java.lang.invoke.MethodHandleImpl`                  |
|    new |    +4 |   0.0% → 0.3% |     0 → 4 | `asTypeUncached`        | `java.lang.invoke.MethodHandle`                      |
|    new |    +4 |   0.0% → 0.3% |     0 → 4 | `asType`                | `java.lang.invoke.MethodHandle`                      |

##### JIT

|  Change | Delta |           % | Samples | Function                   | Location    |
| ------: | ----: | ----------: | ------: | -------------------------- | ----------- |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `I2C/C2I adapters(0xb)`    | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `I2C/C2I adapters(0xbb)`   | `<unknown>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `I2C/C2I adapters(0xbbbb)` | `<unknown>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `itable stub`              | `<unknown>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `I2C/C2I adapters(0x)`     | `<unknown>` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |            % | Samples | Function                                                                                               | Location                                                                                                 |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| removed |  -359 | 26.5% → 0.0% | 359 → 0 | `invokeStatic`                                                                                         | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000`                                                     |
| removed |  -359 | 26.5% → 0.0% | 359 → 0 | `invoke`                                                                                               | `java.lang.invoke.LambdaForm$MH.0x0000007001009400`                                                      |
|  -18.8% |   -15 |  5.9% → 4.8% | 80 → 65 | `WorkerThread::run`                                                                                    | `<unknown>`                                                                                              |
|  -45.2% |   -14 |  2.3% → 1.3% | 31 → 17 | `processCandidate`                                                                                     | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`                                    |
|  -45.2% |   -14 |  2.3% → 1.3% | 31 → 17 | `processCandidate$default`                                                                             | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`                                    |
|  -46.7% |   -14 |  2.2% → 1.2% | 30 → 16 | `consumeCandidate`                                                                                     | `org.jetbrains.kotlin.fir.resolve.calls.candidate.CandidateCollector`                                    |
|  -45.2% |   -14 |  2.3% → 1.3% | 31 → 17 | `consumeCandidate`                                                                                     | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor`                                       |
|  -45.2% |   -14 |  2.3% → 1.3% | 31 → 17 | `consumeCandidate$default`                                                                             | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor`                                       |
|  -44.8% |   -13 |  2.1% → 1.2% | 29 → 16 | `invokeSuspend`                                                                                        | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                 |
|  -26.0% |   -13 |  3.7% → 2.7% | 50 → 37 | `handleLevel`                                                                                          | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelHandler`                                         |
|  -60.0% |   -12 |  1.5% → 0.6% |  20 → 8 | `transformProperty`                                                                                    | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`           |
|  -60.0% |   -12 |  1.5% → 0.6% |  20 → 8 | `transformProperty`                                                                                    | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
|  -54.5% |   -12 |  1.6% → 0.7% | 22 → 10 | `transform`                                                                                            | `org.jetbrains.kotlin.fir.declarations.FirProperty`                                                      |
|  -50.0% |   -12 |  1.8% → 0.9% | 24 → 12 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region`                     | `<unknown>`                                                                                              |
|  -50.0% |   -12 |  1.8% → 0.9% | 24 → 12 | `HeapRegionManager::par_iterate`                                                                       | `<unknown>`                                                                                              |
|  -50.0% |   -12 |  1.8% → 0.9% | 24 → 12 | `G1RebuildRSAndScrubTask::work`                                                                        | `<unknown>`                                                                                              |
|  -70.6% |   -12 |  1.3% → 0.4% |  17 → 5 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `<unknown>`                                                                                              |
|  -20.0% |   -11 |  4.1% → 3.2% | 55 → 44 | `resumeWith`                                                                                           | `kotlin.coroutines.jvm.internal.BaseContinuationImpl`                                                    |
|  -22.0% |   -11 |  3.7% → 2.9% | 50 → 39 | `processLevel`                                                                                         | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`                                   |
|  -22.0% |   -11 |  3.7% → 2.9% | 50 → 39 | `access$processLevel`                                                                                  | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`                                   |

##### Compiler

| Change | Delta |           % | Samples | Function                              | Location    |
| -----: | ----: | ----------: | ------: | ------------------------------------- | ----------- |
| -14.1% |   -10 | 5.2% → 4.5% | 71 → 61 | `GraphBuilder::GraphBuilder`          | `<unknown>` |
| -25.6% |   -10 | 2.9% → 2.1% | 39 → 29 | `PhaseCFG::do_global_code_motion`     | `<unknown>` |
| -24.3% |    -9 | 2.7% → 2.1% | 37 → 28 | `PhaseCFG::global_code_motion`        | `<unknown>` |
| -22.9% |    -8 | 2.6% → 2.0% | 35 → 27 | `PhaseChaitin::build_ifg_physical`    | `<unknown>` |
| -53.3% |    -8 | 1.1% → 0.5% |  15 → 7 | `GraphBuilder::access_field`          | `<unknown>` |
| -22.2% |    -8 | 2.7% → 2.1% | 36 → 28 | `PhaseIdealLoop::build_loop_late`     | `<unknown>` |
| -53.8% |    -7 | 1.0% → 0.4% |  13 → 6 | `LinearScan::build_intervals`         | `<unknown>` |
| -53.8% |    -7 | 1.0% → 0.4% |  13 → 6 | `ciEnv::get_field_by_index_impl`      | `<unknown>` |
| -53.8% |    -7 | 1.0% → 0.4% |  13 → 6 | `ciEnv::get_field_by_index`           | `<unknown>` |
| -38.9% |    -7 | 1.3% → 0.8% | 18 → 11 | `Compile::call_generator`             | `<unknown>` |
| -60.0% |    -6 | 0.7% → 0.3% |  10 → 4 | `ciObjectFactory::get_symbol`         | `<unknown>` |
| -75.0% |    -6 | 0.6% → 0.1% |   8 → 2 | `CompileBroker::compile_method_base`  | `<unknown>` |
| -75.0% |    -6 | 0.6% → 0.1% |   8 → 2 | `CompileBroker::compile_method`       | `<unknown>` |
| -42.9% |    -6 | 1.0% → 0.6% |  14 → 8 | `PhaseCFG::schedule_late`             | `<unknown>` |
| -60.0% |    -6 | 0.7% → 0.3% |  10 → 4 | `Compile::identify_useful_nodes`      | `<unknown>` |
|  -5.6% |    -5 | 6.6% → 6.2% | 89 → 84 | `Compilation::build_hir`              | `<unknown>` |
| -33.3% |    -5 | 1.1% → 0.7% | 15 → 10 | `ciMethod::get_flow_analysis`         | `<unknown>` |
| -29.4% |    -5 | 1.3% → 0.9% | 17 → 12 | `LinearScan::assign_reg_num`          | `<unknown>` |
| -71.4% |    -5 | 0.5% → 0.1% |   7 → 2 | `Compile::final_graph_reshaping_walk` | `<unknown>` |
| -71.4% |    -5 | 0.5% → 0.1% |   7 → 2 | `Compile::final_graph_reshaping`      | `<unknown>` |

##### Native

|  Change | Delta |           % | Samples | Function                                                                                               | Location    |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------ | ----------- |
|  -18.8% |   -15 | 5.9% → 4.8% | 80 → 65 | `WorkerThread::run`                                                                                    | `<unknown>` |
|  -50.0% |   -12 | 1.8% → 0.9% | 24 → 12 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region`                     | `<unknown>` |
|  -50.0% |   -12 | 1.8% → 0.9% | 24 → 12 | `HeapRegionManager::par_iterate`                                                                       | `<unknown>` |
|  -50.0% |   -12 | 1.8% → 0.9% | 24 → 12 | `G1RebuildRSAndScrubTask::work`                                                                        | `<unknown>` |
|  -70.6% |   -12 | 1.3% → 0.4% |  17 → 5 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `<unknown>` |
|  -14.1% |   -10 | 5.2% → 4.5% | 71 → 61 | `IRScope::IRScope`                                                                                     | `<unknown>` |
|  -14.1% |   -10 | 5.2% → 4.5% | 71 → 61 | `IR::IR`                                                                                               | `<unknown>` |
|  -45.5% |   -10 | 1.6% → 0.9% | 22 → 12 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object`                               | `<unknown>` |
|  -32.1% |    -9 | 2.1% → 1.4% | 28 → 19 | `SymbolTable::do_lookup`                                                                               | `<unknown>` |
|  -44.4% |    -8 | 1.3% → 0.7% | 18 → 10 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb`                      | `<unknown>` |
|  -28.0% |    -7 | 1.8% → 1.3% | 25 → 18 | `InterpreterRuntime::resolve_from_cache`                                                               | `<unknown>` |
| removed |    -7 | 0.5% → 0.0% |   7 → 0 | `CodeCacheUnloadingTask::work`                                                                         | `<unknown>` |
| removed |    -7 | 0.5% → 0.0% |   7 → 0 | `G1ParallelCleaningTask::work`                                                                         | `<unknown>` |
|  -43.8% |    -7 | 1.2% → 0.7% |  16 → 9 | `inflate`                                                                                              | `<unknown>` |
|  -58.3% |    -7 | 0.9% → 0.4% |  12 → 5 | `InterpreterRuntime::resolve_get_put`                                                                  | `<unknown>` |
|  -43.8% |    -7 | 1.2% → 0.7% |  16 → 9 | `G1ParScanThreadState::steal_and_trim_queue`                                                           | `<unknown>` |
|  -54.5% |    -6 | 0.8% → 0.4% |  11 → 5 | `LinkResolver::resolve_field_access`                                                                   | `<unknown>` |
|  -25.0% |    -6 | 1.8% → 1.3% | 24 → 18 | `tlv_get_addr`                                                                                         | `<unknown>` |
|  -37.5% |    -6 | 1.2% → 0.7% | 16 → 10 | `G1ParEvacuateFollowersClosure::do_void`                                                               | `<unknown>` |
|  -37.5% |    -6 | 1.2% → 0.7% | 16 → 10 | `G1EvacuateRegionsTask::evacuate_live_objects`                                                         | `<unknown>` |

##### Ours

| Change | Delta |           % | Samples | Function                   | Location                                                                                                 |
| -----: | ----: | ----------: | ------: | -------------------------- | -------------------------------------------------------------------------------------------------------- |
| -45.2% |   -14 | 2.3% → 1.3% | 31 → 17 | `processCandidate`         | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`                                    |
| -45.2% |   -14 | 2.3% → 1.3% | 31 → 17 | `processCandidate$default` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`                                    |
| -46.7% |   -14 | 2.2% → 1.2% | 30 → 16 | `consumeCandidate`         | `org.jetbrains.kotlin.fir.resolve.calls.candidate.CandidateCollector`                                    |
| -45.2% |   -14 | 2.3% → 1.3% | 31 → 17 | `consumeCandidate`         | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor`                                       |
| -45.2% |   -14 | 2.3% → 1.3% | 31 → 17 | `consumeCandidate$default` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor`                                       |
| -44.8% |   -13 | 2.1% → 1.2% | 29 → 16 | `invokeSuspend`            | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                 |
| -26.0% |   -13 | 3.7% → 2.7% | 50 → 37 | `handleLevel`              | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelHandler`                                         |
| -60.0% |   -12 | 1.5% → 0.6% |  20 → 8 | `transformProperty`        | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`           |
| -60.0% |   -12 | 1.5% → 0.6% |  20 → 8 | `transformProperty`        | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
| -54.5% |   -12 | 1.6% → 0.7% | 22 → 10 | `transform`                | `org.jetbrains.kotlin.fir.declarations.FirProperty`                                                      |
| -22.0% |   -11 | 3.7% → 2.9% | 50 → 39 | `processLevel`             | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`                                   |
| -22.0% |   -11 | 3.7% → 2.9% | 50 → 39 | `access$processLevel`      | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`                                   |
| -21.2% |   -11 | 3.8% → 3.0% | 52 → 41 | `resumeTask`               | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`                                       |
| -19.2% |   -10 | 3.8% → 3.1% | 52 → 42 | `runTasks`                 | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`                                       |
| -17.3% |    -9 | 3.8% → 3.2% | 52 → 43 | `runResolver`              | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`                                          |
| -16.7% |    -9 | 4.0% → 3.3% | 54 → 45 | `runResolver$default`      | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`                                          |
| -52.9% |    -9 | 1.3% → 0.6% |  17 → 8 | `transformLocalVariable`   | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`           |
| -11.1% |    -8 | 5.3% → 4.7% | 72 → 64 | `loadClass`                | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`                                                 |
| -21.1% |    -8 | 2.8% → 2.2% | 38 → 30 | `invokeSuspend`            | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`                    |
| -50.0% |    -8 | 1.2% → 0.6% |  16 → 8 | `transformInitializer`     | `org.jetbrains.kotlin.fir.declarations.impl.FirPropertyImpl`                                             |

##### Standard library

|  Change | Delta |            % | Samples | Function            | Location                                              |
| ------: | ----: | -----------: | ------: | ------------------- | ----------------------------------------------------- |
| removed |  -359 | 26.5% → 0.0% | 359 → 0 | `invokeStatic`      | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000`  |
| removed |  -359 | 26.5% → 0.0% | 359 → 0 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x0000007001009400`   |
|  -20.0% |   -11 |  4.1% → 3.2% | 55 → 44 | `resumeWith`        | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|   -8.6% |    -6 |  5.2% → 4.7% | 70 → 64 | `read`              | `java.io.FilterInputStream`                           |
| removed |    -6 |  0.4% → 0.0% |   6 → 0 | `postDefineClass`   | `java.lang.ClassLoader`                               |
|   -6.8% |    -5 |  5.5% → 5.1% | 74 → 69 | `loadClass`         | `java.lang.ClassLoader`                               |
| removed |    -5 |  0.4% → 0.0% |   5 → 0 | `invokeStatic`      | `java.lang.invoke.LambdaForm$DMH.0x0000007001230000`  |
|   -7.2% |    -5 |  5.1% → 4.7% | 69 → 64 | `inflateBytesBytes` | `java.util.zip.Inflater`                              |
|   -7.2% |    -5 |  5.1% → 4.7% | 69 → 64 | `inflate`           | `java.util.zip.Inflater`                              |
|   -7.1% |    -5 |  5.2% → 4.8% | 70 → 65 | `read`              | `java.util.zip.InflaterInputStream`                   |
|   -7.2% |    -5 |  5.1% → 4.7% | 69 → 64 | `read`              | `java.util.zip.ZipInputStream`                        |
|  -27.8% |    -5 |  1.3% → 1.0% | 18 → 13 | `getValue`          | `kotlin.SafePublicationLazyImpl`                      |
| removed |    -5 |  0.4% → 0.0% |   5 → 0 | `get`               | `java.util.concurrent.ConcurrentHashMap`              |
|   -5.8% |    -4 |  5.1% → 4.8% | 69 → 65 | `defineClass`       | `java.lang.ClassLoader`                               |
| removed |    -4 |  0.3% → 0.0% |   4 → 0 | `initClassName`     | `java.lang.Class`                                     |
| removed |    -4 |  0.3% → 0.0% |   4 → 0 | `getName`           | `java.lang.Class`                                     |
|  -80.0% |    -4 |  0.4% → 0.1% |   5 → 1 | `getPackageName`    | `java.lang.Class`                                     |
| removed |    -3 |  0.2% → 0.0% |   3 → 0 | `read1`             | `java.io.BufferedInputStream`                         |
| removed |    -3 |  0.2% → 0.0% |   3 → 0 | `implRead`          | `java.io.BufferedInputStream`                         |
| removed |    -3 |  0.2% → 0.0% |   3 → 0 | `read`              | `java.io.BufferedInputStream`                         |

##### JIT

| Change | Delta |           % | Samples | Function                   | Location    |
| -----: | ----: | ----------: | ------: | -------------------------- | ----------- |
| -83.3% |    -5 | 0.4% → 0.1% |   6 → 1 | `I2C/C2I adapters(0xbbab)` | `<unknown>` |
| -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `I2C/C2I adapters(0xaa)`   | `<unknown>` |
