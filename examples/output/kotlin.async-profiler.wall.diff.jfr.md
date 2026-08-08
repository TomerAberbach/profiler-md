# Sampling profile diff

2,694 samples → 2,710 samples (+16 samples, +0.6%).

| Category          | Change | Delta |             % |       Samples |
| ----------------- | -----: | ----: | ------------: | ------------: |
| native            |  +0.8% |   +20 | 94.3% → 94.5% | 2,540 → 2,560 |
| compiler          |  -0.9% |    -1 |   4.2% → 4.1% |     112 → 111 |
| ours              | -14.3% |    -4 |   1.0% → 0.9% |       28 → 24 |
| stdlib            | -18.2% |    -2 |   0.4% → 0.3% |        11 → 9 |
| jit               | +66.7% |    +2 |   0.1% → 0.2% |         3 → 5 |
| garbage collector |    new |    +1 |  0.0% → <0.1% |         0 → 1 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % | Samples | Function                                                           | Location                                                        |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------ | --------------------------------------------------------------- |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `LinearScanWalker::free_collect_inactive_fixed`                    | `libjvm.dylib`                                                  |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `I2C/C2I adapters(0xbb)`                                           | `<unknown>`                                                     |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseChaitin::build_ifg_physical`                                 | `libjvm.dylib`                                                  |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `Matcher::Label_Root`                                              | `libjvm.dylib`                                                  |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `Node::remove_dead_region`                                         | `libjvm.dylib`                                                  |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `PhaseChaitin::gather_lrg_masks`                                   | `libjvm.dylib`                                                  |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `checkAssertions()`                                                | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `RegionNode::is_unreachable_from_root`                             | `libjvm.dylib`                                                  |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal`               | `libjvm.dylib`                                                  |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseIdealLoop::compute_lca_of_uses`                              | `libjvm.dylib`                                                  |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `Node::dominates`                                                  | `libjvm.dylib`                                                  |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `libjvm.dylib`                                                  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseCFG::remove_empty_blocks`                                    | `libjvm.dylib`                                                  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseOutput::BuildOopMaps`                                        | `libjvm.dylib`                                                  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `ConnectionGraph::compute_escape`                                  | `libjvm.dylib`                                                  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Scheduling::AddNodeToBundle`                                      | `libjvm.dylib`                                                  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `MethodLiveness::get_liveness_at`                                  | `libjvm.dylib`                                                  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `BlockBegin::iterate_preorder`                                     | `libjvm.dylib`                                                  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `LinearScan::sort_intervals_after_allocation`                      | `libjvm.dylib`                                                  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseCFG::partial_latency_of_defs`                                | `libjvm.dylib`                                                  |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % | Samples | Function                                      | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | -------------- |
|  -60.0% |    -3 |  0.2% → 0.1% |   5 → 2 | `IndexSetIterator::advance_and_next`          | `libjvm.dylib` |
|  -66.7% |    -2 | 0.1% → <0.1% |   3 → 1 | `PhaseChaitin::post_allocate_copy_removal`    | `libjvm.dylib` |
|  -66.7% |    -2 | 0.1% → <0.1% |   3 → 1 | `PhaseIdealLoop::build_loop_early`            | `libjvm.dylib` |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `Type::cmp`                                   | `libjvm.dylib` |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `LinearScan::build_intervals`                 | `libjvm.dylib` |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `LinearScanWalker::free_collect_inactive_any` | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseChaitin::build_ifg_virtual`             | `libjvm.dylib` |
|  -50.0% |    -1 | 0.1% → <0.1% |   2 → 1 | `Node::clone`                                 | `libjvm.dylib` |
|  -16.7% |    -1 |         0.2% |   6 → 5 | `PhaseChaitin::Split`                         | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `TypeTuple::hash`                             | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `IndexSet::initialize`                        | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `IfTrueNode::always_taken`                    | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Compile::flatten_alias_type`                 | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseCCP::transform_once`                    | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseCCP::transform`                         | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `CodeBuffer::relocate_code_to`                | `libjvm.dylib` |
|  -50.0% |    -1 | 0.1% → <0.1% |   2 → 1 | `PhaseIFG::re_insert`                         | `libjvm.dylib` |
|  -50.0% |    -1 | 0.1% → <0.1% |   2 → 1 | `PhaseIterGVN::add_users_to_worklist`         | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Node::nonnull_req`                           | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseCCP::push_catch`                        | `libjvm.dylib` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |            % |  Samples | Function                                        | Location                                                                            |
| ------: | ----: | -----------: | -------: | ----------------------------------------------- | ----------------------------------------------------------------------------------- |
|  +24.2% |    +8 |  1.2% → 1.5% |  33 → 41 | `Compile::Optimize`                             | `libjvm.dylib`                                                                      |
|  +80.0% |    +8 |  0.4% → 0.7% |  10 → 18 | `PhaseIterGVN::transform_old`                   | `libjvm.dylib`                                                                      |
|  +80.0% |    +8 |  0.4% → 0.7% |  10 → 18 | `PhaseIterGVN::optimize`                        | `libjvm.dylib`                                                                      |
|  +43.8% |    +7 |  0.6% → 0.8% |  16 → 23 | `PhaseIdealLoop::optimize`                      | `libjvm.dylib`                                                                      |
| +350.0% |    +7 |  0.1% → 0.3% |    2 → 9 | `ciEnv::register_method`                        | `libjvm.dylib`                                                                      |
|   +5.1% |    +5 |  3.6% → 3.8% | 98 → 103 | `Compile::Compile`                              | `libjvm.dylib`                                                                      |
|   +5.1% |    +5 |  3.6% → 3.8% | 98 → 103 | `C2Compiler::compile_method`                    | `libjvm.dylib`                                                                      |
| +400.0% |    +4 | <0.1% → 0.2% |    1 → 5 | `PhaseChaitin::build_ifg_physical`              | `libjvm.dylib`                                                                      |
|  +30.8% |    +4 |  0.5% → 0.6% |  13 → 17 | `PhaseIdealLoop::build_and_optimize`            | `libjvm.dylib`                                                                      |
|  +30.8% |    +4 |  0.5% → 0.6% |  13 → 17 | `PhaseIdealLoop::PhaseIdealLoop`                | `libjvm.dylib`                                                                      |
| +133.3% |    +4 |  0.1% → 0.3% |    3 → 7 | `PhaseCFG::global_code_motion`                  | `libjvm.dylib`                                                                      |
| +133.3% |    +4 |  0.1% → 0.3% |    3 → 7 | `PhaseCFG::do_global_code_motion`               | `libjvm.dylib`                                                                      |
|     new |    +4 |  0.0% → 0.1% |    0 → 4 | `PhaseIdealLoop::compute_lca_of_uses`           | `libjvm.dylib`                                                                      |
|  +75.0% |    +3 |  0.1% → 0.3% |    4 → 7 | `PhaseIdealLoop::build_loop_late_post_work`     | `libjvm.dylib`                                                                      |
|  +60.0% |    +3 |  0.2% → 0.3% |    5 → 8 | `PhaseIdealLoop::build_loop_late`               | `libjvm.dylib`                                                                      |
| +300.0% |    +3 | <0.1% → 0.1% |    1 → 4 | `MethodLiveness::get_liveness_at`               | `libjvm.dylib`                                                                      |
| +300.0% |    +3 | <0.1% → 0.1% |    1 → 4 | `LinearScanWalker::free_collect_inactive_fixed` | `libjvm.dylib`                                                                      |
| +300.0% |    +3 | <0.1% → 0.1% |    1 → 4 | `I2C/C2I adapters(0xbb)`                        | `<unknown>`                                                                         |
| +100.0% |    +3 |  0.1% → 0.2% |    3 → 6 | `getValue(Object, Object)`                      | `org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCacheWithPostCompute`               |
| +100.0% |    +3 |  0.1% → 0.2% |    3 → 6 | `computeClass(ClassId)`                         | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |            % | Samples | Function                                                                                                             | Location                                                                              |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|  -22.2% |   -10 |  1.7% → 1.3% | 45 → 35 | `Compilation::compile_java_method`                                                                                   | `libjvm.dylib`                                                                        |
|  -29.2% |    -7 |  0.9% → 0.6% | 24 → 17 | `Compilation::emit_lir`                                                                                              | `libjvm.dylib`                                                                        |
|  -63.6% |    -7 |  0.4% → 0.1% |  11 → 4 | `GraphBuilder::iterate_bytecodes_for_block`                                                                          | `libjvm.dylib`                                                                        |
|  -63.6% |    -7 |  0.4% → 0.1% |  11 → 4 | `GraphBuilder::iterate_all_blocks`                                                                                   | `libjvm.dylib`                                                                        |
|  -31.6% |    -6 |  0.7% → 0.5% | 19 → 13 | `LinearScan::do_linear_scan`                                                                                         | `libjvm.dylib`                                                                        |
|  -54.5% |    -6 |  0.4% → 0.2% |  11 → 5 | `GraphBuilder::GraphBuilder`                                                                                         | `libjvm.dylib`                                                                        |
|  -54.5% |    -6 |  0.4% → 0.2% |  11 → 5 | `accept(IrVisitor, Object)`                                                                                          | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`                                     |
|  -17.2% |    -5 |  1.1% → 0.9% | 29 → 24 | `PhaseChaitin::Register_Allocate`                                                                                    | `libjvm.dylib`                                                                        |
|  -83.3% |    -5 | 0.2% → <0.1% |   6 → 1 | `Type::hashcons`                                                                                                     | `libjvm.dylib`                                                                        |
|  -62.5% |    -5 |  0.3% → 0.1% |   8 → 3 | `GraphBuilder::try_inline_full`                                                                                      | `libjvm.dylib`                                                                        |
|  -62.5% |    -5 |  0.3% → 0.1% |   8 → 3 | `GraphBuilder::try_inline`                                                                                           | `libjvm.dylib`                                                                        |
|  -38.5% |    -5 |  0.5% → 0.3% |  13 → 8 | `handleLevel(CandidateCollector, CandidateFactory, CallInfo, ExplicitReceiverKind, TowerGroup, TowerLevel)`          | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelHandler`                      |
|  -38.5% |    -5 |  0.5% → 0.3% |  13 → 8 | `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)`                                 | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`                |
|  -38.5% |    -5 |  0.5% → 0.3% |  13 → 8 | `access$processLevel(FirBaseTowerResolveTask, TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`                |
|  -38.5% |    -5 |  0.5% → 0.3% |  13 → 8 | `resumeTask(TowerResolveManager$SuspendedResolverTask)`                                                              | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`                    |
|  -38.5% |    -5 |  0.5% → 0.3% |  13 → 8 | `runTasks()`                                                                                                         | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`                    |
|  -80.0% |    -4 | 0.2% → <0.1% |   5 → 1 | `PhaseGVN::transform_no_reclaim`                                                                                     | `libjvm.dylib`                                                                        |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `LinearScan::assign_reg_num`                                                                                         | `libjvm.dylib`                                                                        |
|  -50.0% |    -4 |  0.3% → 0.1% |   8 → 4 | `GraphBuilder::invoke`                                                                                               | `libjvm.dylib`                                                                        |
|  -36.4% |    -4 |  0.4% → 0.3% |  11 → 7 | `invokeSuspend(Object)`                                                                                              | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6` |
