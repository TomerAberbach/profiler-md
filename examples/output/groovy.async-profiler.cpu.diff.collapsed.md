# Sampling profile diff

Collected 5,918 samples → 6,382 samples (+464 samples, +7.8%).

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

##### Compiler

|  Change | Delta |            % |   Samples | Function                                       | Location    |
| ------: | ----: | -----------: | --------: | ---------------------------------------------- | ----------- |
|  +16.2% |   +17 |  1.8% → 1.9% | 105 → 122 | `PhaseChaitin::Split`                          | `<unknown>` |
| +123.1% |   +16 |  0.2% → 0.5% |   13 → 29 | `Compile::disconnect_useless_nodes`            | `<unknown>` |
|  +36.7% |   +11 |  0.5% → 0.6% |   30 → 41 | `PhaseLive::add_liveout`                       | `<unknown>` |
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
|  +41.7% |    +5 |  0.2% → 0.3% |   12 → 17 | `PhaseCFG::partial_latency_of_defs`            | `<unknown>` |

##### Native

|  Change | Delta |            % |   Samples | Function                                    | Location    |
| ------: | ----: | -----------: | --------: | ------------------------------------------- | ----------- |
|   +9.9% |   +10 |         1.7% | 101 → 111 | `tlv_get_addr`                              | `<unknown>` |
|   +3.5% |    +4 |         1.9% | 115 → 119 | `pthread_jit_write_protect_np`              | `<unknown>` |
| +100.0% |    +1 |        <0.1% |     1 → 2 | `InterpreterRuntime::ldc`                   | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `InterpreterRuntime::resolve_invokedynamic` | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `ConstantPool::klass_at_impl`               | `<unknown>` |

##### Ours

| Change | Delta |            % | Samples | Function                           | Location                                                                   |
| -----: | ----: | -----------: | ------: | ---------------------------------- | -------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → <0.1% |   0 → 2 | `writeViolation`                   | `org.codenarc.report.TextReportWriter`                                     |
|    new |    +2 | 0.0% → <0.1% |   0 → 2 | `getName`                          | `org.codenarc.rule.size.CrapMetricRule`                                    |
|    new |    +2 | 0.0% → <0.1% |   0 → 2 | `$getStaticMetaClass`              | `org.codenarc.rule.unused.ReferenceCollector`                              |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `processImports`                   | `org.codenarc.rule.imports.UnusedImportRule`                               |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `doCall`                           | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitMethod`                      | `org.codenarc.rule.AbstractAstVisitor`                                     |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `getAstVisitor`                    | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitClass`                       | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`                    |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `isFirstVisit`                     | `org.codenarc.rule.AbstractAstVisitor`                                     |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `addViolationIfDuplicate`          | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                         |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `processMethodOrConstructorCall`   | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                   |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitMethod`                      | `org.codenarc.rule.naming.MethodNameAstVisitor`                            |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>`                           | `org.codenarc.rule.formatting.IndentationAstVisitor`                       |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `isNotWhitespace`                  | `org.codenarc.rule.formatting.AbstractSpaceAroundBraceAstVisitor`          |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `calculateForClass`                | `org.gmetrics.metric.AbstractMethodMetric`                                 |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `super$3$visitBlockStatement`      | `org.codenarc.rule.formatting.IndentationAstVisitor`                       |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `lastSourceLineOrEmpty`            | `org.codenarc.rule.formatting.AbstractSpaceAroundBraceAstVisitor`          |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `line`                             | `org.codenarc.source.AbstractSourceCode`                                   |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitMethodEx`                    | `org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`           |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `sourceLineAndNumberForStarImport` | `org.codenarc.util.ImportUtil`                                             |

##### JIT

|  Change | Delta |            % | Samples | Function                  | Location    |
| ------: | ----: | -----------: | ------: | ------------------------- | ----------- |
| +500.0% |    +5 | <0.1% → 0.1% |   1 → 6 | `I2C/C2I adapters(0xbbb)` | `<unknown>` |
|  +18.2% |    +4 |         0.4% | 22 → 26 | `itable stub`             | `<unknown>` |
| +150.0% |    +3 | <0.1% → 0.1% |   2 → 5 | `I2C/C2I adapters(0xbb)`  | `<unknown>` |
|  +22.2% |    +2 |         0.2% |  9 → 11 | `vtable stub`             | `<unknown>` |
|  +66.7% |    +2 |         0.1% |   3 → 5 | `zero_blocks`             | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `call_stub`               | `<unknown>` |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `I2C/C2I adapters(0xba)`  | `<unknown>` |

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

##### Compiler

|  Change | Delta |            % |  Samples | Function                                      | Location    |
| ------: | ----: | -----------: | -------: | --------------------------------------------- | ----------- |
|  -32.4% |   -33 |  1.7% → 1.1% | 102 → 69 | `Node::dominates`                             | `<unknown>` |
|  -47.6% |   -20 |  0.7% → 0.3% |  42 → 22 | `PhaseChaitin::gather_lrg_masks`              | `<unknown>` |
|  -33.3% |   -15 |  0.8% → 0.5% |  45 → 30 | `PhaseChaitin::elide_copy`                    | `<unknown>` |
|  -31.0% |    -9 |  0.5% → 0.3% |  29 → 20 | `PhaseIdealLoop::Dominators`                  | `<unknown>` |
|  -57.1% |    -8 |  0.2% → 0.1% |   14 → 6 | `PhaseChaitin::build_ifg_virtual`             | `<unknown>` |
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
| removed |    -4 |  0.1% → 0.0% |    4 → 0 | `GraphKit::kill_dead_locals`                  | `<unknown>` |

##### Native

|  Change | Delta |            % | Samples | Function                                        | Location    |
| ------: | ----: | -----------: | ------: | ----------------------------------------------- | ----------- |
|  -50.0% |    -2 | 0.1% → <0.1% |   4 → 2 | `constantPoolHandle::~constantPoolHandle`       | `<unknown>` |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `InterpreterRuntime::anewarray`                 | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `BarrierSetNMethod::nmethod_stub_entry_barrier` | `<unknown>` |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `os::current_thread_enable_wx`                  | `<unknown>` |

##### Ours

|  Change | Delta |            % | Samples | Function                        | Location                                                                            |
| ------: | ----: | -----------: | ------: | ------------------------------- | ----------------------------------------------------------------------------------- |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `collectViolations`             | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                      |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `getMetaClass`                  | `org.codenarc.rule.convention.VariableTypeRequiredRule`                             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `doCall`                        | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`          |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitExpressionStatement`      | `org.codenarc.rule.unnecessary.UnnecessaryDefInVariableDeclarationAstVisitor`       |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getMetaClass`                  | `org.codenarc.rule.unused.UnusedVariableRule`                                       |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `applyTo`                       | `org.codenarc.rule.unused.UnusedVariableRule`                                       |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getLines`                      | `org.codenarc.source.AbstractSourceCode`                                            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `findFirstNonAnnotationLine`    | `org.codenarc.util.AstUtil`                                                         |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitBlockStatement`           | `org.codenarc.rule.convention.IfStatementCouldBeTernaryAstVisitor`                  |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `lineNumberForMethod`           | `org.gmetrics.metric.AbstractMethodMetric`                                          |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getMetaClass`                  | `org.codenarc.rule.design.LocaleSetDefaultAstVisitor`                               |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitConstantExpression`       | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`                        |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `flexibleCheckForCorrectColumn` | `org.codenarc.rule.formatting.IndentationAstVisitor`                                |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getAstVisitorClass`            | `org.codenarc.rule.formatting.SpaceInsideParenthesesRule`                           |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `resolveLabelIndent`            | `org.codenarc.rule.formatting.IndentationAstVisitor`                                |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitVariableExpression`       | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`                            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `doCall`                        | `org.codenarc.rule.unused.UnusedPrivateFieldRule$_collectAllPrivateFields_closure3` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitBinaryExpression`         | `org.codenarc.rule.unnecessary.UnnecessarySelfAssignmentAstVisitor`                 |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getName`                       | `org.codenarc.rule.basic.ThrowExceptionFromFinallyBlockRule`                        |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `setSourceCode`                 | `org.codenarc.rule.AbstractAstVisitor`                                              |

##### JIT

|  Change | Delta |            % | Samples | Function                     | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------- | ----------- |
|  -77.8% |    -7 | 0.2% → <0.1% |   9 → 2 | `I2C/C2I adapters(0xbbbb)`   | `<unknown>` |
|  -14.3% |    -1 |         0.1% |   7 → 6 | `I2C/C2I adapters(0xb)`      | `<unknown>` |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `I2C/C2I adapters(0xa)`      | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbbbbbb)` | `<unknown>` |

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

##### Compiler

|  Change | Delta |             % |       Samples | Function                                   | Location    |
| ------: | ----: | ------------: | ------------: | ------------------------------------------ | ----------- |
|   +6.5% |  +221 | 57.7% → 57.0% | 3,417 → 3,638 | `CompileBroker::compiler_thread_loop`      | `<unknown>` |
|   +4.7% |  +159 | 57.0% → 55.4% | 3,375 → 3,534 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
|  +14.3% |   +85 | 10.0% → 10.6% |     594 → 679 | `Compilation::compile_method`              | `<unknown>` |
|  +14.1% |   +84 | 10.1% → 10.6% |     595 → 679 | `Compilation::Compilation`                 | `<unknown>` |
|   +2.7% |   +74 | 46.7% → 44.4% | 2,762 → 2,836 | `C2Compiler::compile_method`               | `<unknown>` |
|   +2.6% |   +72 | 46.6% → 44.3% | 2,757 → 2,829 | `Compile::Compile`                         | `<unknown>` |
| +155.0% |   +62 |   0.7% → 1.6% |      40 → 102 | `CompileQueue::get`                        | `<unknown>` |
|   +4.5% |   +59 | 22.1% → 21.4% | 1,308 → 1,367 | `Compile::Code_Gen`                        | `<unknown>` |
|  +13.2% |   +52 |   6.7% → 7.0% |     395 → 447 | `PhaseIdealLoop::PhaseIdealLoop`           | `<unknown>` |
|  +12.7% |   +50 |   6.7% → 7.0% |     395 → 445 | `PhaseIdealLoop::build_and_optimize`       | `<unknown>` |
|   +9.6% |   +46 |   8.1% → 8.3% |     481 → 527 | `PhaseIdealLoop::optimize`                 | `<unknown>` |
|  +56.3% |   +45 |   1.4% → 2.0% |      80 → 125 | `ciEnv::register_method`                   | `<unknown>` |
|   +8.2% |   +44 |   9.0% → 9.1% |     534 → 578 | `Compilation::compile_java_method`         | `<unknown>` |
|  +21.8% |   +39 |   3.0% → 3.4% |     179 → 218 | `Compile::optimize_loops`                  | `<unknown>` |
|  +40.5% |   +32 |   1.3% → 1.7% |      79 → 111 | `PhaseLive::compute`                       | `<unknown>` |
|  +18.5% |   +28 |   2.6% → 2.8% |     151 → 179 | `Matcher::xform`                           | `<unknown>` |
|  +14.3% |   +28 |   3.3% → 3.5% |     196 → 224 | `Compilation::emit_lir`                    | `<unknown>` |
|  +12.1% |   +26 |   3.6% → 3.8% |     215 → 241 | `Matcher::match`                           | `<unknown>` |
|  +43.9% |   +25 |   1.0% → 1.3% |       57 → 82 | `Matcher::match_tree`                      | `<unknown>` |
|  +16.4% |   +24 |   2.5% → 2.7% |     146 → 170 | `PhaseOutput::Output`                      | `<unknown>` |

##### Native

|  Change | Delta |            % |   Samples | Function                                         | Location    |
| ------: | ----: | -----------: | --------: | ------------------------------------------------ | ----------- |
|   +9.9% |   +10 |         1.7% | 101 → 111 | `tlv_get_addr`                                   | `<unknown>` |
| +250.0% |    +5 | <0.1% → 0.1% |     2 → 7 | `InterpreterRuntime::resolve_invokedynamic`      | `<unknown>` |
| +250.0% |    +5 | <0.1% → 0.1% |     2 → 7 | `InterpreterRuntime::_new`                       | `<unknown>` |
|   +3.5% |    +4 |         1.9% | 115 → 119 | `pthread_jit_write_protect_np`                   | `<unknown>` |
|  +44.4% |    +4 |         0.2% |    9 → 13 | `InterpreterRuntime::frequency_counter_overflow` | `<unknown>` |
|  +18.8% |    +3 |         0.3% |   16 → 19 | `resolve_static_call`                            | `<unknown>` |
|  +25.0% |    +2 |  0.1% → 0.2% |    8 → 10 | `BarrierSetNMethod::nmethod_stub_entry_barrier`  | `<unknown>` |
|   +7.1% |    +1 |         0.2% |   14 → 15 | `InterpreterRuntime::resolve_from_cache`         | `<unknown>` |
|  +50.0% |    +1 |        <0.1% |     2 → 3 | `ic_miss_stub`                                   | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `InterpreterRuntime::resolve_ldc`                | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `_new_array_Java`                                | `<unknown>` |

##### Ours

| Change | Delta |             % |       Samples | Function                    | Location                                                                    |
| -----: | ----: | ------------: | ------------: | --------------------------- | --------------------------------------------------------------------------- |
|  +8.4% |  +181 | 36.4% → 36.6% | 2,152 → 2,333 | `main`                      | `org.codenarc.CodeNarc`                                                     |
|  +8.4% |  +179 | 36.1% → 36.3% | 2,139 → 2,318 | `execute`                   | `org.codenarc.CodeNarc`                                                     |
|  +8.3% |  +177 | 35.9% → 36.0% | 2,123 → 2,300 | `execute`                   | `org.codenarc.CodeNarcRunner`                                               |
|  +8.5% |  +168 | 33.5% → 33.7% | 1,983 → 2,151 | `processDirectory`          | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  +8.5% |  +168 | 33.5% → 33.7% | 1,984 → 2,152 | `analyze`                   | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  +8.4% |  +167 | 33.5% → 33.7% | 1,983 → 2,150 | `doCall`                    | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|  +8.4% |  +166 | 33.2% → 33.4% | 1,967 → 2,133 | `collectViolations`         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|  +8.2% |  +163 | 33.4% → 33.5% | 1,978 → 2,141 | `processFile`               | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  +8.0% |  +131 |         27.7% | 1,638 → 1,769 | `measureRuleProcessingTime` | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|  +6.6% |   +85 | 21.8% → 21.5% | 1,290 → 1,375 | `doCall`                    | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
|  +7.8% |   +75 |         16.3% |   964 → 1,039 | `applyTo`                   | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
|  +5.0% |   +59 | 20.0% → 19.5% | 1,185 → 1,244 | `applyTo`                   | `org.codenarc.rule.AbstractRule`                                            |
|  +4.7% |   +43 | 15.6% → 15.1% |     923 → 966 | `visitClass`                | `org.codenarc.rule.AbstractAstVisitor`                                      |
|  +4.1% |   +29 | 11.9% → 11.5% |     703 → 732 | `visitMethod`               | `org.codenarc.rule.AbstractAstVisitor`                                      |
|  +9.5% |   +24 |          4.3% |     253 → 277 | `doCall`                    | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`  |
|  +9.4% |   +22 |   3.9% → 4.0% |     233 → 255 | `isRuleSuppressed`          | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
|  +9.2% |   +21 |          3.9% |     228 → 249 | `init`                      | `org.codenarc.source.AbstractSourceCode`                                    |
|  +9.2% |   +21 |          3.9% |     228 → 249 | `getAst`                    | `org.codenarc.source.AbstractSourceCode`                                    |
|  +8.7% |   +20 |          3.9% |     229 → 249 | `init`                      | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
| +48.7% |   +19 |   0.7% → 0.9% |       39 → 58 | `visitClassEx`              | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`                     |

##### JIT

|  Change | Delta |            % | Samples | Function                  | Location    |
| ------: | ----: | -----------: | ------: | ------------------------- | ----------- |
|  +18.2% |    +4 |         0.4% | 22 → 26 | `itable stub`             | `<unknown>` |
| +200.0% |    +4 | <0.1% → 0.1% |   2 → 6 | `I2C/C2I adapters(0xbbb)` | `<unknown>` |
| +150.0% |    +3 | <0.1% → 0.1% |   2 → 5 | `I2C/C2I adapters(0xbb)`  | `<unknown>` |
|  +22.2% |    +2 |         0.2% |  9 → 11 | `vtable stub`             | `<unknown>` |
|  +66.7% |    +2 |         0.1% |   3 → 5 | `zero_blocks`             | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `call_stub`               | `<unknown>` |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `I2C/C2I adapters(0xba)`  | `<unknown>` |

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

##### Compiler

| Change | Delta |            % |   Samples | Function                                   | Location    |
| -----: | ----: | -----------: | --------: | ------------------------------------------ | ----------- |
| -35.5% |   -38 |  1.8% → 1.1% |  107 → 69 | `MemNode::all_controls_dominate`           | `<unknown>` |
| -32.4% |   -33 |  1.7% → 1.1% |  102 → 69 | `Node::dominates`                          | `<unknown>` |
|  -8.1% |   -30 |  6.2% → 5.3% | 369 → 339 | `PhaseIterGVN::transform_old`              | `<unknown>` |
|  -7.4% |   -29 |  6.6% → 5.7% | 390 → 361 | `PhaseIterGVN::optimize`                   | `<unknown>` |
| -30.2% |   -29 |  1.6% → 1.0% |   96 → 67 | `StoreNode::Ideal`                         | `<unknown>` |
| -29.3% |   -27 |  1.6% → 1.0% |   92 → 65 | `InitializeNode::detect_init_independence` | `<unknown>` |
| -29.3% |   -27 |  1.6% → 1.0% |   92 → 65 | `InitializeNode::can_capture_store`        | `<unknown>` |
| -37.5% |   -24 |  1.1% → 0.6% |   64 → 40 | `PhaseChaitin::gather_lrg_masks`           | `<unknown>` |
| -38.8% |   -19 |  0.8% → 0.5% |   49 → 30 | `PhaseMacroExpand::expand_macro_nodes`     | `<unknown>` |
| -60.9% |   -14 |  0.4% → 0.1% |    23 → 9 | `GraphKit::uncommon_trap`                  | `<unknown>` |
| -16.3% |   -14 |  1.5% → 1.1% |   86 → 72 | `PhaseIterGVN::subsume_node`               | `<unknown>` |
| -41.2% |   -14 |  0.6% → 0.3% |   34 → 20 | `LoadNode::Ideal`                          | `<unknown>` |
| -26.5% |   -13 |  0.8% → 0.6% |   49 → 36 | `PhaseChaitin::elide_copy`                 | `<unknown>` |
| -20.8% |   -10 |  0.8% → 0.6% |   48 → 38 | `PhaseIdealLoop::Dominators`               | `<unknown>` |
| -24.4% |   -10 |  0.7% → 0.5% |   41 → 31 | `LinearScan::assign_reg_num`               | `<unknown>` |
| -75.0% |    -9 | 0.2% → <0.1% |    12 → 3 | `GraphKit::make_runtime_call`              | `<unknown>` |
| -10.8% |    -9 |  1.4% → 1.2% |   83 → 74 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |
| -26.5% |    -9 |  0.6% → 0.4% |   34 → 25 | `PhaseIdealLoop::build_loop_tree`          | `<unknown>` |
| -47.4% |    -9 |  0.3% → 0.2% |   19 → 10 | `PhaseChaitin::build_ifg_virtual`          | `<unknown>` |
| -18.2% |    -8 |  0.7% → 0.6% |   44 → 36 | `LIR_Assembler::emit_slow_case_stubs`      | `<unknown>` |

##### Native

|  Change | Delta |            % | Samples | Function                                  | Location    |
| ------: | ----: | -----------: | ------: | ----------------------------------------- | ----------- |
|  -30.8% |    -4 |  0.2% → 0.1% |  13 → 9 | `resolve_opt_virtual_call`                | `<unknown>` |
|  -28.6% |    -2 |         0.1% |   7 → 5 | `ConstantPool::klass_at_impl`             | `<unknown>` |
|  -66.7% |    -2 | 0.1% → <0.1% |   3 → 1 | `InterpreterRuntime::quicken_io_cc`       | `<unknown>` |
|  -50.0% |    -2 | 0.1% → <0.1% |   4 → 2 | `constantPoolHandle::~constantPoolHandle` | `<unknown>` |
|  -12.5% |    -1 |         0.1% |   8 → 7 | `counter_overflow Runtime1 stub`          | `<unknown>` |
|  -16.7% |    -1 |         0.1% |   6 → 5 | `resolve_virtual_call`                    | `<unknown>` |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `os::current_thread_enable_wx`            | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `java_util_Map$isEmpty.call`              | `<unknown>` |

##### Ours

| Change | Delta |            % | Samples | Function                            | Location                                                                                 |
| -----: | ----: | -----------: | ------: | ----------------------------------- | ---------------------------------------------------------------------------------------- |
| -17.3% |   -14 |  1.4% → 1.0% | 81 → 67 | `applyTo`                           | `org.codenarc.rule.AbstractSharedAstVisitorRule`                                         |
| -70.6% |   -12 |  0.3% → 0.1% |  17 → 5 | `super$3$visitConstructorOrMethod`  | `org.codenarc.rule.ClassReferenceAstVisitor`                                             |
| -81.8% |    -9 | 0.2% → <0.1% |  11 → 2 | `visitDeclarationExpression`        | `org.codenarc.rule.naming.VariableNameAstVisitor`                                        |
| -64.3% |    -9 |  0.2% → 0.1% |  14 → 5 | `sourceLineAndNumberForImport`      | `org.codenarc.util.ImportUtil`                                                           |
| -81.8% |    -9 | 0.2% → <0.1% |  11 → 2 | `visitVariableExpression`           | `org.codenarc.rule.ClassReferenceAstVisitor`                                             |
| -50.0% |    -9 |  0.3% → 0.1% |  18 → 9 | `visitConstructorOrMethod`          | `org.codenarc.rule.ClassReferenceAstVisitor`                                             |
| -40.0% |    -8 |  0.3% → 0.2% | 20 → 12 | `doCall`                            | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor$_visitArgumentlistExpression_closure1` |
| -53.3% |    -8 |  0.3% → 0.1% |  15 → 7 | `visitPropertyExpression`           | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`                                 |
| -50.0% |    -7 |  0.2% → 0.1% |  14 → 7 | `doCall`                            | `org.codenarc.util.ImportUtil$_sortImportsByLineNumber_closure4`                         |
|  -9.4% |    -6 |  1.1% → 0.9% | 64 → 58 | `applyVisitor`                      | `org.codenarc.rule.AbstractSharedAstVisitorRule`                                         |
| -40.0% |    -6 |  0.3% → 0.1% |  15 → 9 | `visitMethodEx`                     | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`                           |
| -33.3% |    -6 |  0.3% → 0.2% | 18 → 12 | `super$2$visitMethodCallExpression` | `org.codenarc.rule.formatting.IndentationAstVisitor`                                     |
| -75.0% |    -6 | 0.1% → <0.1% |   8 → 2 | `getAstVisitor`                     | `org.codenarc.rule.unused.UnusedPrivateMethodRule`                                       |
| -27.3% |    -6 |  0.4% → 0.3% | 22 → 16 | `super$2$visitBinaryExpression`     | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                       |
| -85.7% |    -6 | 0.1% → <0.1% |   7 → 1 | `visitClassEx`                      | `org.codenarc.rule.naming.AbstractTypeNameAstVisitor`                                    |
| -75.0% |    -6 | 0.1% → <0.1% |   8 → 2 | `matches`                           | `org.codenarc.util.WildcardPattern`                                                      |
| -85.7% |    -6 | 0.1% → <0.1% |   7 → 1 | `matches`                           | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                                         |
| -85.7% |    -6 | 0.1% → <0.1% |   7 → 1 | `checkNodeType`                     | `org.codenarc.rule.ClassReferenceAstVisitor`                                             |
| -54.5% |    -6 |  0.2% → 0.1% |  11 → 5 | `applyTo`                           | `org.codenarc.rule.formatting.BlankLineBeforePackageRule`                                |
| -19.2% |    -5 |  0.4% → 0.3% | 26 → 21 | `visitClassComplete`                | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`                          |

##### JIT

|  Change | Delta |            % | Samples | Function                     | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------- | ----------- |
|  -77.8% |    -7 | 0.2% → <0.1% |   9 → 2 | `I2C/C2I adapters(0xbbbb)`   | `<unknown>` |
|  -66.7% |    -2 | 0.1% → <0.1% |   3 → 1 | `I2C/C2I adapters(0xa)`      | `<unknown>` |
|  -14.3% |    -1 |         0.1% |   7 → 6 | `I2C/C2I adapters(0xb)`      | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbbbbbb)` | `<unknown>` |
