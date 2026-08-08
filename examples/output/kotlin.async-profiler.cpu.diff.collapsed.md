# Sampling profile diff

1,353 samples → 1,356 samples (+3 samples, +0.2%).

| Category | Change | Delta |             % |   Samples |
| -------- | -----: | ----: | ------------: | --------: |
| compiler |  +0.2% |    +1 |         45.6% | 617 → 618 |
| native   |  -1.9% |   -10 | 39.0% → 38.2% | 528 → 518 |
| ours     |  +5.2% |    +7 |  9.9% → 10.4% | 134 → 141 |
| stdlib   |  +3.3% |    +2 |   4.4% → 4.6% |   60 → 62 |
| jit      | +23.1% |    +3 |   1.0% → 1.2% |   13 → 16 |
| unknown  |   0.0% |     0 |          0.1% |         1 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                         | Location    |
| ------: | ----: | ----------: | ------: | ------------------------------------------------ | ----------- |
|  +69.2% |    +9 | 1.0% → 1.6% | 13 → 22 | `IndexSetIterator::advance_and_next`             | `<unknown>` |
| +350.0% |    +7 | 0.1% → 0.7% |   2 → 9 | `PhaseLive::add_liveout`                         | `<unknown>` |
| +150.0% |    +6 | 0.3% → 0.7% |  4 → 10 | `LinearScanWalker::free_collect_inactive_fixed`  | `<unknown>` |
| +125.0% |    +5 | 0.3% → 0.7% |   4 → 9 | `Matcher::xform`                                 | `<unknown>` |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `LinearScan::eliminate_spill_moves`              | `<unknown>` |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `PhaseChaitin::stretch_base_pointer_live_ranges` | `<unknown>` |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `I2C/C2I adapters(0xb)`                          | `<unknown>` |
| +150.0% |    +3 | 0.1% → 0.4% |   2 → 5 | `PhaseIterGVN::transform_old`                    | `<unknown>` |
| +100.0% |    +3 | 0.2% → 0.4% |   3 → 6 | `LinearScanWalker::split_before_usage`           | `<unknown>` |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `Matcher::find_shared`                           | `<unknown>` |
|  +60.0% |    +3 | 0.4% → 0.6% |   5 → 8 | `LinearScanWalker::alloc_free_reg`               | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `I2C/C2I adapters(0xbb)`                         | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhaseChaitin::Simplify`                         | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhaseIdealLoop::compute_lca_of_uses`            | `<unknown>` |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `Node::rematerialize`                            | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `Unique_Node_List::remove_useless_nodes`         | `<unknown>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `RegionNode::is_CFG`                             | `<unknown>` |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `TypeInstPtr::hash`                              | `<unknown>` |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `NodeHash::hash_delete`                          | `<unknown>` |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `Type::hashcons`                                 | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                           | Location    |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------ | ----------- |
|  -37.5% |    -6 | 1.2% → 0.7% | 16 → 10 | `PhaseChaitin::build_ifg_physical`                                 | `<unknown>` |
|  -60.0% |    -6 | 0.7% → 0.3% |  10 → 4 | `Compile::identify_useful_nodes`                                   | `<unknown>` |
|  -45.5% |    -5 | 0.8% → 0.4% |  11 → 6 | `PhaseChaitin::gather_lrg_masks`                                   | `<unknown>` |
|  -83.3% |    -5 | 0.4% → 0.1% |   6 → 1 | `I2C/C2I adapters(0xbbab)`                                         | `<unknown>` |
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

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                                                     | Location                                                                                                 |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| +130.8% |   +17 |   1.0% → 2.2% |   13 → 30 | `LinearScanWalker::activate_current`                         | `<unknown>`                                                                                              |
|   +2.0% |   +16 | 60.2% → 61.3% | 815 → 831 | `CompileBroker::invoke_compiler_on_method`                   | `<unknown>`                                                                                              |
|   +1.9% |   +16 | 61.0% → 62.0% | 825 → 841 | `CompileBroker::compiler_thread_loop`                        | `<unknown>`                                                                                              |
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
|  +68.8% |   +11 |   1.2% → 2.0% |   16 → 27 | `transformWhenBranch`                                        | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer`  |
|  +68.8% |   +11 |   1.2% → 2.0% |   16 → 27 | `transformWhenBranch`                                        | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
|  +68.8% |   +11 |   1.2% → 2.0% |   16 → 27 | `transform`                                                  | `org.jetbrains.kotlin.fir.expressions.FirWhenBranch`                                                     |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |           % | Samples | Function                          | Location                                                                                                 |
| -----: | ----: | ----------: | ------: | --------------------------------- | -------------------------------------------------------------------------------------------------------- |
| -45.2% |   -14 | 2.3% → 1.3% | 31 → 17 | `processCandidate`                | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`                                    |
| -45.2% |   -14 | 2.3% → 1.3% | 31 → 17 | `processCandidate$default`        | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`                                    |
| -46.7% |   -14 | 2.2% → 1.2% | 30 → 16 | `consumeCandidate`                | `org.jetbrains.kotlin.fir.resolve.calls.candidate.CandidateCollector`                                    |
| -45.2% |   -14 | 2.3% → 1.3% | 31 → 17 | `consumeCandidate`                | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor`                                       |
| -45.2% |   -14 | 2.3% → 1.3% | 31 → 17 | `consumeCandidate$default`        | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor`                                       |
| -44.8% |   -13 | 2.1% → 1.2% | 29 → 16 | `invokeSuspend`                   | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                 |
| -26.0% |   -13 | 3.7% → 2.7% | 50 → 37 | `handleLevel`                     | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelHandler`                                         |
| -60.0% |   -12 | 1.5% → 0.6% |  20 → 8 | `transformProperty`               | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`           |
| -60.0% |   -12 | 1.5% → 0.6% |  20 → 8 | `transformProperty`               | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
| -54.5% |   -12 | 1.6% → 0.7% | 22 → 10 | `transform`                       | `org.jetbrains.kotlin.fir.declarations.FirProperty`                                                      |
| -20.0% |   -11 | 4.1% → 3.2% | 55 → 44 | `resumeWith`                      | `kotlin.coroutines.jvm.internal.BaseContinuationImpl`                                                    |
| -22.0% |   -11 | 3.7% → 2.9% | 50 → 39 | `processLevel`                    | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`                                   |
| -22.0% |   -11 | 3.7% → 2.9% | 50 → 39 | `access$processLevel`             | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`                                   |
| -21.2% |   -11 | 3.8% → 3.0% | 52 → 41 | `resumeTask`                      | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`                                       |
| -14.1% |   -10 | 5.2% → 4.5% | 71 → 61 | `GraphBuilder::GraphBuilder`      | `<unknown>`                                                                                              |
| -19.2% |   -10 | 3.8% → 3.1% | 52 → 42 | `runTasks`                        | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`                                       |
| -25.6% |   -10 | 2.9% → 2.1% | 39 → 29 | `PhaseCFG::do_global_code_motion` | `<unknown>`                                                                                              |
| -17.3% |    -9 | 3.8% → 3.2% | 52 → 43 | `runResolver`                     | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`                                          |
| -16.7% |    -9 | 4.0% → 3.3% | 54 → 45 | `runResolver$default`             | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`                                          |
| -24.3% |    -9 | 2.7% → 2.1% | 37 → 28 | `PhaseCFG::global_code_motion`    | `<unknown>`                                                                                              |
