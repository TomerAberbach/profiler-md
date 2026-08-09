# Sampling profile diff

5,918 samples → 6,382 samples (+464 samples, +7.8%).

| Category          | Change | Delta |             % |       Samples |
| ----------------- | -----: | ----: | ------------: | ------------: |
| Compiler          |  +1.8% |   +47 | 44.4% → 41.9% | 2,628 → 2,675 |
| Native            | +17.6% |  +300 | 28.7% → 31.4% | 1,701 → 2,001 |
| Standard library  |  +6.5% |   +95 | 24.6% → 24.3% | 1,457 → 1,552 |
| Ours              | +26.6% |   +17 |   1.1% → 1.3% |       64 → 81 |
| JIT               | +15.5% |    +9 |          1.0% |       58 → 67 |
| Garbage collector | -16.7% |    -1 |          0.1% |         6 → 5 |
| Unknown           | -75.0% |    -3 |  0.1% → <0.1% |         4 → 1 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % |   Samples | Function                                       | Location    |
| ------: | ----: | -----------: | --------: | ---------------------------------------------- | ----------- |
|  +16.2% |   +17 |  1.8% → 1.9% | 105 → 122 | `PhaseChaitin::Split`                          | `<unknown>` |
| +123.1% |   +16 |  0.2% → 0.5% |   13 → 29 | `Compile::disconnect_useless_nodes`            | `<unknown>` |
|  +36.7% |   +11 |  0.5% → 0.6% |   30 → 41 | `PhaseLive::add_liveout`                       | `<unknown>` |
|   +9.9% |   +10 |         1.7% | 101 → 111 | `tlv_get_addr`                                 | `<unknown>` |
| +500.0% |   +10 | <0.1% → 0.2% |    2 → 12 | `PhaseIdealLoop::get_early_ctrl`               | `<unknown>` |
|  +33.3% |    +9 |  0.5% → 0.6% |   27 → 36 | `Node::set_req_X`                              | `<unknown>` |
|  +52.9% |    +9 |  0.3% → 0.4% |   17 → 26 | `IndexSet::initialize`                         | `<unknown>` |
|  +30.0% |    +9 |  0.5% → 0.6% |   30 → 39 | `PhaseLive::compute`                           | `<unknown>` |
|  +60.0% |    +9 |  0.3% → 0.4% |   15 → 24 | `Node_Backward_Iterator::next`                 | `<unknown>` |
| +233.3% |    +7 |  0.1% → 0.2% |    3 → 10 | `PhaseIdealLoop::remix_address_expressions`    | `<unknown>` |
| +175.0% |    +7 |  0.1% → 0.2% |    4 → 11 | `LinearScan::compute_local_live_sets`          | `<unknown>` |
|  +63.6% |    +7 |  0.2% → 0.3% |   11 → 18 | `IntervalWalker::walk_to`                      | `<unknown>` |
| +120.0% |    +6 |  0.1% → 0.2% |    5 → 11 | `Scheduling::AddNodeToBundle`                  | `<unknown>` |
|  +85.7% |    +6 |  0.1% → 0.2% |    7 → 13 | `PhiNode::Ideal`                               | `<unknown>` |
|  +75.0% |    +6 |  0.1% → 0.2% |    8 → 14 | `PhiNode::Opcode`                              | `<unknown>` |
|  +19.4% |    +6 |  0.5% → 0.6% |   31 → 37 | `PhaseIdealLoop::build_loop_early`             | `<unknown>` |
| +100.0% |    +6 |  0.1% → 0.2% |    6 → 12 | `LinearScan::build_intervals`                  | `<unknown>` |
|  +11.1% |    +6 |         0.9% |   54 → 60 | `IndexSetIterator::advance_and_next`           | `<unknown>` |
| +166.7% |    +5 |         0.1% |     3 → 8 | `PhaseChaitin::compute_initial_block_pressure` | `<unknown>` |
|   +8.8% |    +5 |         1.0% |   57 → 62 | `PhaseChaitin::build_ifg_physical`             | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % |  Samples | Function                                      | Location    |
| ------: | ----: | -----------: | -------: | --------------------------------------------- | ----------- |
|  -32.4% |   -33 |  1.7% → 1.1% | 102 → 69 | `Node::dominates`                             | `<unknown>` |
|  -47.6% |   -20 |  0.7% → 0.3% |  42 → 22 | `PhaseChaitin::gather_lrg_masks`              | `<unknown>` |
|  -33.3% |   -15 |  0.8% → 0.5% |  45 → 30 | `PhaseChaitin::elide_copy`                    | `<unknown>` |
|  -31.0% |    -9 |  0.5% → 0.3% |  29 → 20 | `PhaseIdealLoop::Dominators`                  | `<unknown>` |
|  -57.1% |    -8 |  0.2% → 0.1% |   14 → 6 | `PhaseChaitin::build_ifg_virtual`             | `<unknown>` |
|  -77.8% |    -7 | 0.2% → <0.1% |    9 → 2 | `I2C/C2I adapters(0xbbbb)`                    | `<unknown>` |
|  -31.8% |    -7 |  0.4% → 0.2% |  22 → 15 | `LinearScanWalker::alloc_free_reg`            | `<unknown>` |
|  -26.1% |    -6 |  0.4% → 0.3% |  23 → 17 | `Unique_Node_List::remove`                    | `<unknown>` |
|  -66.7% |    -6 | 0.2% → <0.1% |    9 → 3 | `IndexSet::alloc_block_containing`            | `<unknown>` |
| removed |    -5 |  0.1% → 0.0% |    5 → 0 | `Node::has_special_unique_user`               | `<unknown>` |
|  -50.0% |    -5 |  0.2% → 0.1% |   10 → 5 | `PhaseIFG::remove_node`                       | `<unknown>` |
|  -38.5% |    -5 |  0.2% → 0.1% |   13 → 8 | `Node::clone`                                 | `<unknown>` |
|  -26.3% |    -5 |  0.3% → 0.2% |  19 → 14 | `Node::is_CFG`                                | `<unknown>` |
|  -83.3% |    -5 | 0.1% → <0.1% |    6 → 1 | `Matcher::specialize_generic_vector_operands` | `<unknown>` |
|  -55.6% |    -5 |  0.2% → 0.1% |    9 → 4 | `PhaseIdealLoop::build_loop_tree_impl`        | `<unknown>` |
|  -41.7% |    -5 |  0.2% → 0.1% |   12 → 7 | `ProjNode::is_CFG`                            | `<unknown>` |
|  -55.6% |    -5 |  0.2% → 0.1% |    9 → 4 | `RegMask::is_bound`                           | `<unknown>` |
|  -38.5% |    -5 |  0.2% → 0.1% |   13 → 8 | `PhaseCFG::schedule_early`                    | `<unknown>` |
|  -57.1% |    -4 | 0.1% → <0.1% |    7 → 3 | `ConnectionGraph::compute_escape`             | `<unknown>` |
|  -80.0% |    -4 | 0.1% → <0.1% |    5 → 1 | `PhaseRemoveUseless::PhaseRemoveUseless`      | `<unknown>` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

| Change | Delta |             % |       Samples | Function                                   | Location                                                                    |
| -----: | ----: | ------------: | ------------: | ------------------------------------------ | --------------------------------------------------------------------------- |
|    new |  +290 |   0.0% → 4.5% |       0 → 290 | `linkToCallSite`                           | `java.lang.invoke.LambdaForm$MH.0x000000a801323800`                         |
|  +6.5% |  +221 | 57.7% → 57.0% | 3,417 → 3,638 | `CompileBroker::compiler_thread_loop`      | `<unknown>`                                                                 |
|  +8.5% |  +182 | 36.3% → 36.5% | 2,150 → 2,332 | `linkToCallSite`                           | `java.lang.invoke.Invokers$Holder`                                          |
|  +8.4% |  +181 | 36.4% → 36.6% | 2,152 → 2,333 | `main`                                     | `org.codenarc.CodeNarc`                                                     |
|  +8.4% |  +179 | 36.1% → 36.3% | 2,139 → 2,318 | `execute`                                  | `org.codenarc.CodeNarc`                                                     |
|  +8.3% |  +177 | 35.9% → 36.0% | 2,123 → 2,300 | `execute`                                  | `org.codenarc.CodeNarcRunner`                                               |
|  +8.5% |  +168 | 33.5% → 33.7% | 1,983 → 2,151 | `processDirectory`                         | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  +8.5% |  +168 | 33.5% → 33.7% | 1,984 → 2,152 | `analyze`                                  | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  +8.4% |  +167 | 33.5% → 33.7% | 1,983 → 2,150 | `doCall`                                   | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|  +8.4% |  +166 | 33.2% → 33.4% | 1,967 → 2,133 | `collectViolations`                        | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|  +8.2% |  +163 | 33.4% → 33.5% | 1,978 → 2,141 | `processFile`                              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  +4.7% |  +159 | 57.0% → 55.4% | 3,375 → 3,534 | `CompileBroker::invoke_compiler_on_method` | `<unknown>`                                                                 |
|  +8.0% |  +131 |         27.7% | 1,638 → 1,769 | `measureRuleProcessingTime`                | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|    new |  +124 |   0.0% → 1.9% |       0 → 124 | `linkToCallSite`                           | `java.lang.invoke.LambdaForm$MH.0x000000a8010c8c00`                         |
|  +6.6% |   +85 | 21.8% → 21.5% | 1,290 → 1,375 | `doCall`                                   | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
| +14.3% |   +85 | 10.0% → 10.6% |     594 → 679 | `Compilation::compile_method`              | `<unknown>`                                                                 |
| +14.1% |   +84 | 10.1% → 10.6% |     595 → 679 | `Compilation::Compilation`                 | `<unknown>`                                                                 |
|  +7.8% |   +75 |         16.3% |   964 → 1,039 | `applyTo`                                  | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
|  +2.7% |   +74 | 46.7% → 44.4% | 2,762 → 2,836 | `C2Compiler::compile_method`               | `<unknown>`                                                                 |
|  +2.6% |   +72 | 46.6% → 44.3% | 2,757 → 2,829 | `Compile::Compile`                         | `<unknown>`                                                                 |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |           % |   Samples | Function                                   | Location                                            |
| ------: | ----: | ----------: | --------: | ------------------------------------------ | --------------------------------------------------- |
| removed |  -274 | 4.6% → 0.0% |   274 → 0 | `linkToCallSite`                           | `java.lang.invoke.LambdaForm$MH.0x0000007001322800` |
| removed |  -109 | 1.8% → 0.0% |   109 → 0 | `linkToCallSite`                           | `java.lang.invoke.LambdaForm$MH.0x00000070010c8c00` |
| removed |   -40 | 0.7% → 0.0% |    40 → 0 | `linkToCallSite`                           | `java.lang.invoke.LambdaForm$MH.0x00000070013da400` |
|  -35.5% |   -38 | 1.8% → 1.1% |  107 → 69 | `MemNode::all_controls_dominate`           | `<unknown>`                                         |
|  -32.4% |   -33 | 1.7% → 1.1% |  102 → 69 | `Node::dominates`                          | `<unknown>`                                         |
|   -8.1% |   -30 | 6.2% → 5.3% | 369 → 339 | `PhaseIterGVN::transform_old`              | `<unknown>`                                         |
|   -7.4% |   -29 | 6.6% → 5.7% | 390 → 361 | `PhaseIterGVN::optimize`                   | `<unknown>`                                         |
|  -30.2% |   -29 | 1.6% → 1.0% |   96 → 67 | `StoreNode::Ideal`                         | `<unknown>`                                         |
|  -29.3% |   -27 | 1.6% → 1.0% |   92 → 65 | `InitializeNode::detect_init_independence` | `<unknown>`                                         |
|  -29.3% |   -27 | 1.6% → 1.0% |   92 → 65 | `InitializeNode::can_capture_store`        | `<unknown>`                                         |
| removed |   -26 | 0.4% → 0.0% |    26 → 0 | `linkToCallSite`                           | `java.lang.invoke.LambdaForm$MH.0x000000700134c800` |
|  -37.5% |   -24 | 1.1% → 0.6% |   64 → 40 | `PhaseChaitin::gather_lrg_masks`           | `<unknown>`                                         |
| removed |   -23 | 0.4% → 0.0% |    23 → 0 | `linkToCallSite`                           | `java.lang.invoke.LambdaForm$MH.0x00000070010d9000` |
| removed |   -23 | 0.4% → 0.0% |    23 → 0 | `linkToCallSite`                           | `java.lang.invoke.LambdaForm$MH.0x00000070013efc00` |
|  -38.8% |   -19 | 0.8% → 0.5% |   49 → 30 | `PhaseMacroExpand::expand_macro_nodes`     | `<unknown>`                                         |
|  -60.9% |   -14 | 0.4% → 0.1% |    23 → 9 | `GraphKit::uncommon_trap`                  | `<unknown>`                                         |
|  -17.3% |   -14 | 1.4% → 1.0% |   81 → 67 | `applyTo`                                  | `org.codenarc.rule.AbstractSharedAstVisitorRule`    |
|  -16.3% |   -14 | 1.5% → 1.1% |   86 → 72 | `PhaseIterGVN::subsume_node`               | `<unknown>`                                         |
|  -41.2% |   -14 | 0.6% → 0.3% |   34 → 20 | `LoadNode::Ideal`                          | `<unknown>`                                         |
| removed |   -13 | 0.2% → 0.0% |    13 → 0 | `linkToCallSite`                           | `java.lang.invoke.LambdaForm$MH.0x000000700131ac00` |
