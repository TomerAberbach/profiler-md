# Sampling profile diff

1,353 samples → 1,356 samples (+3 samples, +0.2%).

| Category | Change | Delta |             % |       Samples |
| -------- | -----: | ----: | ------------: | ------------: |
| native   |  -0.8% |    -9 | 84.7% → 83.8% | 1,146 → 1,137 |
| ours     |  +5.2% |    +7 |  9.9% → 10.4% |     134 → 141 |
| stdlib   |  +3.3% |    +2 |   4.4% → 4.6% |       60 → 62 |
| jit      | +23.1% |    +3 |   1.0% → 1.2% |       13 → 16 |

Hidden functions account for 88.0% of samples taken, so the hottest are also shown.

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                          | Location                                                                                      |
| ------: | ----: | ----------: | ------: | ------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|  +69.2% |    +9 | 1.0% → 1.6% | 13 → 22 | `IndexSetIterator::advance_and_next`              | `<unknown>`                                                                                   |
|  +50.0% |    +8 | 1.2% → 1.8% | 16 → 24 | `__psynch_mutexwait`                              | `<unknown>`                                                                                   |
| +150.0% |    +6 | 0.3% → 0.7% |  4 → 10 | `LinearScanWalker::free_collect_inactive_fixed`   | `<unknown>`                                                                                   |
|  +71.4% |    +5 | 0.5% → 0.9% |  7 → 12 | `_platform_memset`                                | `<unknown>`                                                                                   |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `I2C/C2I adapters(0xb)`                           | `<unknown>`                                                                                   |
|  +57.1% |    +4 | 0.5% → 0.8% |  7 → 11 | `G1ParScanThreadState::do_copy_to_survivor_space` | `<unknown>`                                                                                   |
|  +30.0% |    +3 | 0.7% → 1.0% | 10 → 13 | `InstanceKlass::find_method_index`                | `<unknown>`                                                                                   |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `I2C/C2I adapters(0xbb)`                          | `<unknown>`                                                                                   |
| +100.0% |    +2 | 0.1% → 0.3% |   2 → 4 | `checkNotNullParameter`                           | `kotlin.jvm.internal.Intrinsics`                                                              |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `readUTF8`                                        | `org.jetbrains.org.objectweb.asm.ClassReader`                                                 |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `balanceWhiteSpaces`                              | `com.intellij.lang.impl.PsiBuilderImpl`                                                       |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `iterator`                                        | `java.util.ArrayList`                                                                         |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `slow_subtype_check Runtime1 stub`                | `<unknown>`                                                                                   |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `readSourceFileWithMapping`                       | `org.jetbrains.kotlin.KtSourceFileLinesMappingKt`                                             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `visitPropertyAccessExpression`                   | `org.jetbrains.kotlin.fir.analysis.checkers.expression.ExpressionCheckersDiagnosticComponent` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `accept`                                          | `org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression`                            |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `acceptChildren`                                  | `org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl`                             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `accept`                                          | `org.jetbrains.org.objectweb.asm.tree.InsnList`                                               |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `accept`                                          | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                                             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `accept`                                          | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`                                             |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                                                               | Location                                                                          |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
|  -32.1% |    -9 | 2.1% → 1.4% | 28 → 19 | `SymbolTable::do_lookup`                                                                               | `<unknown>`                                                                       |
|  -80.0% |    -8 | 0.7% → 0.1% |  10 → 2 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `<unknown>`                                                                       |
|  -37.5% |    -6 | 1.2% → 0.7% | 16 → 10 | `PhaseChaitin::build_ifg_physical`                                                                     | `<unknown>`                                                                       |
|  -25.0% |    -6 | 1.8% → 1.3% | 24 → 18 | `tlv_get_addr`                                                                                         | `<unknown>`                                                                       |
|  -60.0% |    -6 | 0.7% → 0.3% |  10 → 4 | `Compile::identify_useful_nodes`                                                                       | `<unknown>`                                                                       |
|  -45.5% |    -5 | 0.8% → 0.4% |  11 → 6 | `PhaseChaitin::gather_lrg_masks`                                                                       | `<unknown>`                                                                       |
|  -83.3% |    -5 | 0.4% → 0.1% |   6 → 1 | `I2C/C2I adapters(0xbbab)`                                                                             | `<unknown>`                                                                       |
|  -33.3% |    -4 | 0.9% → 0.6% |  12 → 8 | `PhaseIdealLoop::build_loop_late`                                                                      | `<unknown>`                                                                       |
|  -19.0% |    -4 | 1.6% → 1.3% | 21 → 17 | `PhaseChaitin::Split`                                                                                  | `<unknown>`                                                                       |
|  -27.3% |    -3 | 0.8% → 0.6% |  11 → 8 | `IntervalWalker::walk_to`                                                                              | `<unknown>`                                                                       |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `getKey`                                                                                               | `java.util.HashMap$Node`                                                          |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `applyArgumentsWithReorderingIfNeeded`                                                                 | `org.jetbrains.kotlin.fir.backend.generators.CallAndReferenceGenerator`           |
|  -20.0% |    -2 | 0.7% → 0.6% |  10 → 8 | `inflate`                                                                                              | `<unknown>`                                                                       |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `asReadOnlyStorage`                                                                                    | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`      |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `I2C/C2I adapters(0xaa)`                                                                               | `<unknown>`                                                                       |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `hasNext`                                                                                              | `kotlin.collections.EmptyIterator`                                                |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `transform`                                                                                            | `org.jetbrains.kotlin.codegen.optimization.RedundantGotoMethodTransformer`        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `visitNamedFunction`                                                                                   | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `visitJumpInsn`                                                                                        | `org.jetbrains.org.objectweb.asm.MethodVisitor`                                   |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>`                                                                                               | `org.jetbrains.kotlin.utils.ThreadLocalDelegate`                                  |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |           % | Samples | Function                                                     | Location                                                                                                 |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
|  +58.3% |   +14 | 1.8% → 2.8% | 24 → 38 | `IntervalWalker::walk_to`                                    | `<unknown>`                                                                                              |
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

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |           % | Samples | Function                                                                                               | Location                                                                                                 |
| -----: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| -45.2% |   -14 | 2.3% → 1.3% | 31 → 17 | `processCandidate`                                                                                     | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`                                    |
| -45.2% |   -14 | 2.3% → 1.3% | 31 → 17 | `processCandidate$default`                                                                             | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`                                    |
| -46.7% |   -14 | 2.2% → 1.2% | 30 → 16 | `consumeCandidate`                                                                                     | `org.jetbrains.kotlin.fir.resolve.calls.candidate.CandidateCollector`                                    |
| -45.2% |   -14 | 2.3% → 1.3% | 31 → 17 | `consumeCandidate`                                                                                     | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor`                                       |
| -45.2% |   -14 | 2.3% → 1.3% | 31 → 17 | `consumeCandidate$default`                                                                             | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor`                                       |
| -44.8% |   -13 | 2.1% → 1.2% | 29 → 16 | `invokeSuspend`                                                                                        | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                 |
| -26.0% |   -13 | 3.7% → 2.7% | 50 → 37 | `handleLevel`                                                                                          | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelHandler`                                         |
| -60.0% |   -12 | 1.5% → 0.6% |  20 → 8 | `transformProperty`                                                                                    | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`           |
| -60.0% |   -12 | 1.5% → 0.6% |  20 → 8 | `transformProperty`                                                                                    | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
| -54.5% |   -12 | 1.6% → 0.7% | 22 → 10 | `transform`                                                                                            | `org.jetbrains.kotlin.fir.declarations.FirProperty`                                                      |
| -70.6% |   -12 | 1.3% → 0.4% |  17 → 5 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `<unknown>`                                                                                              |
| -20.0% |   -11 | 4.1% → 3.2% | 55 → 44 | `resumeWith`                                                                                           | `kotlin.coroutines.jvm.internal.BaseContinuationImpl`                                                    |
| -22.0% |   -11 | 3.7% → 2.9% | 50 → 39 | `processLevel`                                                                                         | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`                                   |
| -22.0% |   -11 | 3.7% → 2.9% | 50 → 39 | `access$processLevel`                                                                                  | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`                                   |
| -21.2% |   -11 | 3.8% → 3.0% | 52 → 41 | `resumeTask`                                                                                           | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`                                       |
| -19.2% |   -10 | 3.8% → 3.1% | 52 → 42 | `runTasks`                                                                                             | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`                                       |
| -17.3% |    -9 | 3.8% → 3.2% | 52 → 43 | `runResolver`                                                                                          | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`                                          |
| -16.7% |    -9 | 4.0% → 3.3% | 54 → 45 | `runResolver$default`                                                                                  | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`                                          |
| -52.9% |    -9 | 1.3% → 0.6% |  17 → 8 | `transformLocalVariable`                                                                               | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`           |
| -32.1% |    -9 | 2.1% → 1.4% | 28 → 19 | `SymbolTable::do_lookup`                                                                               | `<unknown>`                                                                                              |
