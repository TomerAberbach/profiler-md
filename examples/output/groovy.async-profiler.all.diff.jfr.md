# Sampling profile diff

Collected 6,237 samples → 8,604 samples (+2,367 samples, +38.0%).

| Category          | Change |  Delta |             % |       Samples |
| ----------------- | -----: | -----: | ------------: | ------------: |
| Compiler          | +25.9% |   +682 | 42.2% → 38.5% | 2,632 → 3,314 |
| Native            | +68.0% | +1,300 | 30.6% → 37.3% | 1,911 → 3,211 |
| Standard library  | +24.5% |   +377 | 24.6% → 22.2% | 1,536 → 1,913 |
| Ours              |  -2.0% |     -2 |   1.6% → 1.1% |       99 → 97 |
| JIT               | +17.9% |    +10 |   0.9% → 0.8% |       56 → 66 |
| Garbage collector |   0.0% |      0 |         <0.1% |             3 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % |   Samples | Function                                 | Location       |
| ------: | ----: | -----------: | --------: | ---------------------------------------- | -------------- |
| +109.5% |   +23 |  0.3% → 0.5% |   21 → 44 | `MachNode::rematerialize`                | `libjvm.dylib` |
|  +37.7% |   +23 |         1.0% |   61 → 84 | `IndexSetIterator::advance_and_next`     | `libjvm.dylib` |
|  +91.7% |   +22 |  0.4% → 0.5% |   24 → 46 | `PhaseChaitin::gather_lrg_masks`         | `libjvm.dylib` |
|  +19.6% |   +22 |  1.8% → 1.6% | 112 → 134 | `Node::dominates`                        | `libjvm.dylib` |
|  +15.8% |   +19 |  1.9% → 1.6% | 120 → 139 | `PhaseChaitin::Split`                    | `libjvm.dylib` |
|  +45.0% |   +18 |  0.6% → 0.7% |   40 → 58 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |
|  +68.0% |   +17 |  0.4% → 0.5% |   25 → 42 | `PhaseChaitin::elide_copy`               | `libjvm.dylib` |
|  +55.2% |   +16 |         0.5% |   29 → 45 | `PhaseIdealLoop::build_loop_early`       | `libjvm.dylib` |
| +100.0% |   +14 |  0.2% → 0.3% |   14 → 28 | `MultiNode::is_CFG`                      | `libjvm.dylib` |
|  +19.7% |   +13 |  1.1% → 0.9% |   66 → 79 | `PhaseChaitin::build_ifg_physical`       | `libjvm.dylib` |
|  +50.0% |   +12 |         0.4% |   24 → 36 | `PhaseIdealLoop::Dominators`             | `libjvm.dylib` |
|  +91.7% |   +11 |  0.2% → 0.3% |   12 → 23 | `PhaseIdealLoop::split_if_with_blocks`   | `libjvm.dylib` |
|  +64.7% |   +11 |         0.3% |   17 → 28 | `Node_Backward_Iterator::next`           | `libjvm.dylib` |
| +500.0% |   +10 | <0.1% → 0.1% |    2 → 12 | `I2C/C2I adapters(0xbb)`                 | `<unknown>`    |
|  +29.4% |   +10 |         0.5% |   34 → 44 | `ciObjectFactory::get_metadata`          | `libjvm.dylib` |
| +125.0% |   +10 |  0.1% → 0.2% |    8 → 18 | `PhaseIterGVN::transform_old`            | `libjvm.dylib` |
|  +64.3% |    +9 |  0.2% → 0.3% |   14 → 23 | `PhaseIterGVN::subsume_node`             | `libjvm.dylib` |
|     new |    +9 |  0.0% → 0.1% |     0 → 9 | `RegMask::is_aligned_pairs`              | `libjvm.dylib` |
|  +72.7% |    +8 |         0.2% |   11 → 19 | `Matcher::match_tree`                    | `libjvm.dylib` |
|  +21.6% |    +8 |  0.6% → 0.5% |   37 → 45 | `PhaseLive::compute`                     | `libjvm.dylib` |

##### Compiler

|  Change | Delta |           % |   Samples | Function                                 | Location       |
| ------: | ----: | ----------: | --------: | ---------------------------------------- | -------------- |
| +109.5% |   +23 | 0.3% → 0.5% |   21 → 44 | `MachNode::rematerialize`                | `libjvm.dylib` |
|  +37.7% |   +23 |        1.0% |   61 → 84 | `IndexSetIterator::advance_and_next`     | `libjvm.dylib` |
|  +91.7% |   +22 | 0.4% → 0.5% |   24 → 46 | `PhaseChaitin::gather_lrg_masks`         | `libjvm.dylib` |
|  +19.6% |   +22 | 1.8% → 1.6% | 112 → 134 | `Node::dominates`                        | `libjvm.dylib` |
|  +15.8% |   +19 | 1.9% → 1.6% | 120 → 139 | `PhaseChaitin::Split`                    | `libjvm.dylib` |
|  +45.0% |   +18 | 0.6% → 0.7% |   40 → 58 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |
|  +68.0% |   +17 | 0.4% → 0.5% |   25 → 42 | `PhaseChaitin::elide_copy`               | `libjvm.dylib` |
|  +55.2% |   +16 |        0.5% |   29 → 45 | `PhaseIdealLoop::build_loop_early`       | `libjvm.dylib` |
| +100.0% |   +14 | 0.2% → 0.3% |   14 → 28 | `MultiNode::is_CFG`                      | `libjvm.dylib` |
|  +19.7% |   +13 | 1.1% → 0.9% |   66 → 79 | `PhaseChaitin::build_ifg_physical`       | `libjvm.dylib` |
|  +50.0% |   +12 |        0.4% |   24 → 36 | `PhaseIdealLoop::Dominators`             | `libjvm.dylib` |
|  +91.7% |   +11 | 0.2% → 0.3% |   12 → 23 | `PhaseIdealLoop::split_if_with_blocks`   | `libjvm.dylib` |
|  +64.7% |   +11 |        0.3% |   17 → 28 | `Node_Backward_Iterator::next`           | `libjvm.dylib` |
|  +29.4% |   +10 |        0.5% |   34 → 44 | `ciObjectFactory::get_metadata`          | `libjvm.dylib` |
| +125.0% |   +10 | 0.1% → 0.2% |    8 → 18 | `PhaseIterGVN::transform_old`            | `libjvm.dylib` |
|  +64.3% |    +9 | 0.2% → 0.3% |   14 → 23 | `PhaseIterGVN::subsume_node`             | `libjvm.dylib` |
|     new |    +9 | 0.0% → 0.1% |     0 → 9 | `RegMask::is_aligned_pairs`              | `libjvm.dylib` |
|  +72.7% |    +8 |        0.2% |   11 → 19 | `Matcher::match_tree`                    | `libjvm.dylib` |
|  +21.6% |    +8 | 0.6% → 0.5% |   37 → 45 | `PhaseLive::compute`                     | `libjvm.dylib` |
|  +53.3% |    +8 | 0.2% → 0.3% |   15 → 23 | `NodeHash::hash_find_insert`             | `libjvm.dylib` |

##### Ours

| Change | Delta |            % | Samples | Function                                                  | Location                                                                              |
| -----: | ----: | -----------: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|    new |    +4 | 0.0% → <0.1% |   0 → 4 | `<init>()`                                                | `org.codenarc.rule.AbstractAstVisitor`                                                |
|    new |    +2 | 0.0% → <0.1% |   0 → 2 | `visitClass(ClassNode)`                                   | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`                               |
|    new |    +2 | 0.0% → <0.1% |   0 → 2 | `isReady()`                                               | `org.codenarc.rule.AbstractRule`                                                      |
|    new |    +2 | 0.0% → <0.1% |   0 → 2 | `getMetaClass()`                                          | `org.codenarc.rule.dry.DuplicateNumberLiteralRule`                                    |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `isRuleSuppressed(Rule)`                                  | `org.codenarc.analyzer.SuppressionAnalyzer`                                           |
| +50.0% |    +1 |        <0.1% |   2 → 3 | `collectViolations(SourceCode, RuleSet)`                  | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                        |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `doCall(Object)`                                          | `org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1$_closure3` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `applyTo(SourceCode)`                                     | `org.codenarc.rule.AbstractRule`                                                      |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitConstructorOrMethod(MethodNode, boolean)`           | `org.codenarc.rule.formatting.BlockEndsWithBlankLineAstVisitor`                       |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `getMetric()`                                             | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`                               |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `calculate(MethodNode, SourceCode)`                       | `org.gmetrics.metric.abc.AbcMetric`                                                   |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `getAstVisitor(SourceCode)`                               | `org.codenarc.rule.unused.UnusedPrivateFieldRule`                                     |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `super$2$visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`                              |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `handleExpressionContainingOperation(Expression)`         | `org.gmetrics.metric.abc.AbcAstVisitor`                                               |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitBinaryExpression(BinaryExpression)`                 | `org.gmetrics.metric.abc.AbcAstVisitor`                                               |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitParameters(Parameter[])`                            | `org.codenarc.rule.convention.NoDefAstVisitor`                                        |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `super$3$visitConstructorOrMethod(MethodNode, boolean)`   | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                              |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitMethodCallExpression(MethodCallExpression)`         | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                    |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitMethodCallExpression(MethodCallExpression)`         | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                                   |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `super$3$visitBlockStatement(BlockStatement)`             | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                                   |

##### JIT

|  Change | Delta |            % | Samples | Function                  | Location    |
| ------: | ----: | -----------: | ------: | ------------------------- | ----------- |
| +500.0% |   +10 | <0.1% → 0.1% |  2 → 12 | `I2C/C2I adapters(0xbb)`  | `<unknown>` |
| +500.0% |    +5 | <0.1% → 0.1% |   1 → 6 | `I2C/C2I adapters(0xbbb)` | `<unknown>` |
| +100.0% |    +4 |         0.1% |   4 → 8 | `I2C/C2I adapters(0xb)`   | `<unknown>` |

##### Standard library

|  Change | Delta |            % | Samples | Function                                              | Location                                                             |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------- | -------------------------------------------------------------------- |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `linkToCallSite(Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                                   |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `visitArgumentlistExpression(ArgumentListExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport`                         |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `visitProperty(PropertyNode)`                         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                    |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `contains(CharSequence)`                              | `java.lang.String`                                                   |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `callGroovyObjectGetProperty(Object)`                 | `org.codehaus.groovy.runtime.callsite.GetEffectivePogoPropertySite`  |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `<init>()`                                            | `java.lang.Object`                                                   |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `linkToCallSite(Object, Object)`                      | `java.lang.invoke.LambdaForm$MH.0x00000004010c8c00`                  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitBlockStatement(BlockStatement)`                 | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                    |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitBinaryExpression(BinaryExpression)`             | `org.codehaus.groovy.ast.CodeVisitorSupport`                         |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitDeclarationExpression(DeclarationExpression)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                    |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `compareEqual(Object, Object)`                        | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitMethodCallExpression(MethodCallExpression)`     | `org.codehaus.groovy.ast.CodeVisitorSupport`                         |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `matches(String)`                                     | `java.lang.String`                                                   |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitPropertyExpression(PropertyExpression)`         | `org.codehaus.groovy.ast.CodeVisitorSupport`                         |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitField(FieldNode)`                               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                    |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `isAssignableFrom(Class)`                             | `java.lang.Class`                                                    |
|  +20.0% |    +1 |         0.1% |   5 → 6 | `get()`                                               | `java.lang.ref.SoftReference`                                        |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `getSuperClass()`                                     | `org.codehaus.groovy.ast.ClassNode`                                  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `findFirst()`                                         | `java.util.stream.ReferencePipeline`                                 |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `longUnbox(Object)`                                   | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % | Samples | Function                                         | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------ | -------------- |
|  -50.0% |    -7 |  0.2% → 0.1% |  14 → 7 | `Node::rematerialize`                            | `libjvm.dylib` |
|  -66.7% |    -6 | 0.1% → <0.1% |   9 → 3 | `ConnectionGraph::compute_escape`                | `libjvm.dylib` |
|  -85.7% |    -6 | 0.1% → <0.1% |   7 → 1 | `PhaseCCP::transform_once`                       | `libjvm.dylib` |
|  -66.7% |    -6 | 0.1% → <0.1% |   9 → 3 | `MergeMemNode::Ideal`                            | `libjvm.dylib` |
|  -41.7% |    -5 |  0.2% → 0.1% |  12 → 7 | `LinearScan::assign_reg_num`                     | `libjvm.dylib` |
|  -71.4% |    -5 | 0.1% → <0.1% |   7 → 2 | `I2C/C2I adapters(0xbbbb)`                       | `<unknown>`    |
|  -71.4% |    -5 | 0.1% → <0.1% |   7 → 2 | `Scheduling::ComputeUseCount`                    | `libjvm.dylib` |
| removed |    -5 |  0.1% → 0.0% |   5 → 0 | `LinearScan::compute_debug_info_for_scope`       | `libjvm.dylib` |
|  -62.5% |    -5 | 0.1% → <0.1% |   8 → 3 | `IfFalseNode::Opcode`                            | `libjvm.dylib` |
|  -27.8% |    -5 |  0.3% → 0.2% | 18 → 13 | `Node::is_CFG`                                   | `libjvm.dylib` |
|  -21.7% |    -5 |  0.4% → 0.2% | 23 → 18 | `PhaseLive::add_liveout`                         | `libjvm.dylib` |
|  -71.4% |    -5 | 0.1% → <0.1% |   7 → 2 | `PhaseIFG::remove_node`                          | `libjvm.dylib` |
|  -83.3% |    -5 | 0.1% → <0.1% |   6 → 1 | `ConnectionGraph::find_inst_mem`                 | `libjvm.dylib` |
|  -50.0% |    -4 | 0.1% → <0.1% |   8 → 4 | `PhaseChaitin::stretch_base_pointer_live_ranges` | `libjvm.dylib` |
|  -66.7% |    -4 | 0.1% → <0.1% |   6 → 2 | `TypeInstPtr::make`                              | `libjvm.dylib` |
|  -80.0% |    -4 | 0.1% → <0.1% |   5 → 1 | `ConnectionGraph::add_fields_to_worklist`        | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `BlockBegin::iterate_preorder`                   | `libjvm.dylib` |
|  -10.3% |    -3 |  0.5% → 0.3% | 29 → 26 | `PhaseChaitin::post_allocate_copy_removal`       | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `MultiNode::hash`                                | `libjvm.dylib` |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `Node::needs_anti_dependence_check`              | `libjvm.dylib` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                         | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------ | -------------- |
|  -50.0% |    -7 |  0.2% → 0.1% |  14 → 7 | `Node::rematerialize`                            | `libjvm.dylib` |
|  -66.7% |    -6 | 0.1% → <0.1% |   9 → 3 | `ConnectionGraph::compute_escape`                | `libjvm.dylib` |
|  -85.7% |    -6 | 0.1% → <0.1% |   7 → 1 | `PhaseCCP::transform_once`                       | `libjvm.dylib` |
|  -66.7% |    -6 | 0.1% → <0.1% |   9 → 3 | `MergeMemNode::Ideal`                            | `libjvm.dylib` |
|  -41.7% |    -5 |  0.2% → 0.1% |  12 → 7 | `LinearScan::assign_reg_num`                     | `libjvm.dylib` |
|  -71.4% |    -5 | 0.1% → <0.1% |   7 → 2 | `Scheduling::ComputeUseCount`                    | `libjvm.dylib` |
| removed |    -5 |  0.1% → 0.0% |   5 → 0 | `LinearScan::compute_debug_info_for_scope`       | `libjvm.dylib` |
|  -62.5% |    -5 | 0.1% → <0.1% |   8 → 3 | `IfFalseNode::Opcode`                            | `libjvm.dylib` |
|  -27.8% |    -5 |  0.3% → 0.2% | 18 → 13 | `Node::is_CFG`                                   | `libjvm.dylib` |
|  -21.7% |    -5 |  0.4% → 0.2% | 23 → 18 | `PhaseLive::add_liveout`                         | `libjvm.dylib` |
|  -71.4% |    -5 | 0.1% → <0.1% |   7 → 2 | `PhaseIFG::remove_node`                          | `libjvm.dylib` |
|  -83.3% |    -5 | 0.1% → <0.1% |   6 → 1 | `ConnectionGraph::find_inst_mem`                 | `libjvm.dylib` |
|  -50.0% |    -4 | 0.1% → <0.1% |   8 → 4 | `PhaseChaitin::stretch_base_pointer_live_ranges` | `libjvm.dylib` |
|  -66.7% |    -4 | 0.1% → <0.1% |   6 → 2 | `TypeInstPtr::make`                              | `libjvm.dylib` |
|  -80.0% |    -4 | 0.1% → <0.1% |   5 → 1 | `ConnectionGraph::add_fields_to_worklist`        | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `BlockBegin::iterate_preorder`                   | `libjvm.dylib` |
|  -10.3% |    -3 |  0.5% → 0.3% | 29 → 26 | `PhaseChaitin::post_allocate_copy_removal`       | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `MultiNode::hash`                                | `libjvm.dylib` |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `Node::needs_anti_dependence_check`              | `libjvm.dylib` |
|  -50.0% |    -3 | 0.1% → <0.1% |   6 → 3 | `TypeInstPtr::eq`                                | `libjvm.dylib` |

##### Ours

|  Change | Delta |            % | Samples | Function                                                         | Location                                                                          |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `applyTo(SourceCode, List)`                                      | `org.codenarc.rule.AbstractAstVisitorRule`                                        |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `checkNode(ASTNode)`                                             | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`                    |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `visitBlockStatement(BlockStatement)`                            | `org.codenarc.rule.formatting.SpaceAfterClosingBraceAstVisitor`                   |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `getCompilerPhase()`                                             | `org.codenarc.rule.AbstractRule`                                                  |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `writeViolation(Writer, Violation, String)`                      | `org.codenarc.report.TextReportWriter`                                            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `init()`                                                         | `org.codenarc.source.AbstractSourceCode`                                          |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getAst()`                                                       | `org.codenarc.source.AbstractSourceCode`                                          |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `$getStaticMetaClass()`                                          | `org.codenarc.rule.formatting.MissingBlankLineBeforeAnnotatedFieldRuleAstVisitor` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getMetaClass()`                                                 | `org.codenarc.rule.naming.ClassNameSameAsSuperclassRule`                          |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitMethodCallExpression(MethodCallExpression)`                | `org.codenarc.rule.basic.RemoveAllOnSelfAstVisitor`                               |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitConstructorOrMethod(MethodNode, boolean)`                  | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`                      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `addViolationIfDuplicate(Expression, boolean)`                   | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `flexibleCheckForCorrectColumn(ASTNode, String, BlockStatement)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                              |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>(Object, Object, Reference)`                              | `org.codenarc.rule.basic.DeadCodeAstVisitor$_visitBlockStatement_closure1`        |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `sourceViolatesLineLengthRule(String)`                           | `org.codenarc.rule.formatting.LineLengthRule`                                     |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `processSourceLine(String, int)`                                 | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`                   |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>(MetricResult, Map)`                                      | `org.gmetrics.result.ClassMetricResult`                                           |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `checkForViolations(ASTNode)`                                    | `org.codenarc.rule.formatting.BlockEndsWithBlankLineAstVisitor`                   |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `call(Object, Object)`                                           | `org.gmetrics.util.AstUtil$isClosureField`                                        |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getLineNumber()`                                                | `org.codenarc.rule.Violation`                                                     |

##### JIT

|  Change | Delta |            % | Samples | Function                   | Location    |
| ------: | ----: | -----------: | ------: | -------------------------- | ----------- |
|  -71.4% |    -5 | 0.1% → <0.1% |   7 → 2 | `I2C/C2I adapters(0xbbbb)` | `<unknown>` |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `I2C/C2I adapters(0xbbba)` | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0x)`     | `<unknown>` |
|   -9.1% |    -1 |  0.2% → 0.1% | 11 → 10 | `vtable stub`              | `<unknown>` |
|  -33.3% |    -1 |        <0.1% |   3 → 2 | `zero_blocks`              | `<unknown>` |

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                                      | Location                                            |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `<init>(Object, Object)`                                                                      | `groovy.lang.Closure`                               |
|  -50.0% |    -2 | 0.1% → <0.1% |   4 → 2 | `visit(GroovyCodeVisitor)`                                                                    | `org.codehaus.groovy.ast.expr.MethodCallExpression` |
|  -33.3% |    -1 |        <0.1% |   3 → 2 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`     |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object)`                                                              | `java.lang.invoke.Invokers$Holder`                  |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object, int, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x00000004010d8c00` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `linkToCallSite(Object, int, Object)`                                                         | `java.lang.invoke.Invokers$Holder`                  |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `get()`                                                                                       | `groovy.lang.Reference`                             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `set(Object)`                                                                                 | `groovy.lang.Reference`                             |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

| Change |  Delta |             % |       Samples | Function                                                                                      | Location                                                                    |
| -----: | -----: | ------------: | ------------: | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| +38.9% | +1,340 | 55.3% → 55.6% | 3,448 → 4,788 | `CompileBroker::compiler_thread_loop`                                                         | `libjvm.dylib`                                                              |
| +31.9% | +1,087 | 54.6% → 52.2% | 3,407 → 4,494 | `CompileBroker::invoke_compiler_on_method`                                                    | `libjvm.dylib`                                                              |
| +31.8% |   +873 | 44.1% → 42.1% | 2,749 → 3,622 | `C2Compiler::compile_method`                                                                  | `libjvm.dylib`                                                              |
| +31.5% |   +864 | 44.0% → 41.9% | 2,744 → 3,608 | `Compile::Compile`                                                                            | `libjvm.dylib`                                                              |
| +30.5% |   +748 | 39.3% → 37.2% | 2,454 → 3,202 | `main(String[])`                                                                              | `org.codenarc.CodeNarc`                                                     |
| +30.4% |   +746 | 39.4% → 37.2% | 2,457 → 3,203 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                             |
| +30.4% |   +745 | 39.3% → 37.1% | 2,450 → 3,195 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                                          |
| +30.2% |   +736 | 39.1% → 36.9% | 2,439 → 3,175 | `execute(String[])`                                                                           | `org.codenarc.CodeNarc`                                                     |
| +30.1% |   +734 | 39.1% → 36.9% | 2,439 → 3,173 | `linkToCallSite(Object, Object)`                                                              | `java.lang.invoke.Invokers$Holder`                                          |
| +30.2% |   +731 | 38.8% → 36.6% | 2,421 → 3,152 | `execute()`                                                                                   | `org.codenarc.CodeNarcRunner`                                               |
| +29.9% |   +702 | 37.6% → 35.4% | 2,345 → 3,047 | `linkToCallSite(Object, Object, Object, Object)`                                              | `java.lang.invoke.Invokers$Holder`                                          |
| +30.1% |   +698 | 37.2% → 35.1% | 2,318 → 3,016 | `linkToCallSite(Object, Object, Object, Object, Object)`                                      | `java.lang.invoke.Invokers$Holder`                                          |
| +30.2% |   +685 | 36.3% → 34.3% | 2,266 → 2,951 | `analyze(RuleSet)`                                                                            | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| +30.2% |   +685 | 36.3% → 34.3% | 2,265 → 2,950 | `processDirectory(String, RuleSet)`                                                           | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| +30.2% |   +684 | 36.3% → 34.3% | 2,265 → 2,949 | `doCall(Object)`                                                                              | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
| +30.2% |   +682 | 36.2% → 34.1% | 2,256 → 2,938 | `processFile(String, DirectoryResults, RuleSet)`                                              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| +30.0% |   +674 | 36.0% → 34.0% | 2,248 → 2,922 | `collectViolations(SourceCode, RuleSet)`                                                      | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| +31.9% |   +585 | 29.4% → 28.1% | 1,836 → 2,421 | `measureRuleProcessingTime(Rule, Closure)`                                                    | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| +29.5% |   +423 | 23.0% → 21.6% | 1,436 → 1,859 | `doCall(Object)`                                                                              | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
| +31.7% |   +414 | 20.9% → 20.0% | 1,306 → 1,720 | `Compile::Code_Gen`                                                                           | `libjvm.dylib`                                                              |

##### Compiler

|  Change |  Delta |             % |       Samples | Function                                    | Location       |
| ------: | -----: | ------------: | ------------: | ------------------------------------------- | -------------- |
|  +38.9% | +1,340 | 55.3% → 55.6% | 3,448 → 4,788 | `CompileBroker::compiler_thread_loop`       | `libjvm.dylib` |
|  +31.9% | +1,087 | 54.6% → 52.2% | 3,407 → 4,494 | `CompileBroker::invoke_compiler_on_method`  | `libjvm.dylib` |
|  +31.8% |   +873 | 44.1% → 42.1% | 2,749 → 3,622 | `C2Compiler::compile_method`                | `libjvm.dylib` |
|  +31.5% |   +864 | 44.0% → 41.9% | 2,744 → 3,608 | `Compile::Compile`                          | `libjvm.dylib` |
|  +31.7% |   +414 | 20.9% → 20.0% | 1,306 → 1,720 | `Compile::Code_Gen`                         | `libjvm.dylib` |
|  +26.7% |   +289 | 17.3% → 15.9% | 1,082 → 1,371 | `Compile::Optimize`                         | `libjvm.dylib` |
| +597.6% |   +245 |   0.7% → 3.3% |      41 → 286 | `CompileQueue::get`                         | `libjvm.dylib` |
|  +23.3% |   +178 | 12.2% → 10.9% |     763 → 941 | `PhaseChaitin::Register_Allocate`           | `libjvm.dylib` |
|  +26.8% |   +173 |  10.3% → 9.5% |     645 → 818 | `Compilation::compile_method`               | `libjvm.dylib` |
|  +26.8% |   +173 |  10.4% → 9.5% |     646 → 819 | `Compilation::Compilation`                  | `libjvm.dylib` |
|  +30.5% |   +153 |   8.0% → 7.6% |     501 → 654 | `PhaseIdealLoop::optimize`                  | `libjvm.dylib` |
|  +23.2% |   +130 |   9.0% → 8.0% |     561 → 691 | `Compilation::compile_java_method`          | `libjvm.dylib` |
|  +32.0% |   +119 |   6.0% → 5.7% |     372 → 491 | `PhaseIterGVN::optimize`                    | `libjvm.dylib` |
|  +26.7% |   +112 |   6.7% → 6.2% |     419 → 531 | `PhaseIdealLoop::PhaseIdealLoop`            | `libjvm.dylib` |
|  +32.1% |   +112 |   5.6% → 5.4% |     349 → 461 | `PhaseIterGVN::transform_old`               | `libjvm.dylib` |
|  +26.3% |   +110 |   6.7% → 6.1% |     418 → 528 | `PhaseIdealLoop::build_and_optimize`        | `libjvm.dylib` |
|  +45.2% |    +98 |   3.5% → 3.7% |     217 → 315 | `Matcher::match`                            | `libjvm.dylib` |
|  +57.6% |    +91 |   2.5% → 2.9% |     158 → 249 | `Matcher::xform`                            | `libjvm.dylib` |
|  +53.1% |    +85 |   2.6% → 2.8% |     160 → 245 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
|  +48.8% |    +84 |   2.8% → 3.0% |     172 → 256 | `GraphBuilder::GraphBuilder`                | `libjvm.dylib` |

##### Ours

| Change | Delta |             % |       Samples | Function                                         | Location                                                                    |
| -----: | ----: | ------------: | ------------: | ------------------------------------------------ | --------------------------------------------------------------------------- |
| +30.5% |  +748 | 39.3% → 37.2% | 2,454 → 3,202 | `main(String[])`                                 | `org.codenarc.CodeNarc`                                                     |
| +30.2% |  +736 | 39.1% → 36.9% | 2,439 → 3,175 | `execute(String[])`                              | `org.codenarc.CodeNarc`                                                     |
| +30.2% |  +731 | 38.8% → 36.6% | 2,421 → 3,152 | `execute()`                                      | `org.codenarc.CodeNarcRunner`                                               |
| +30.2% |  +685 | 36.3% → 34.3% | 2,266 → 2,951 | `analyze(RuleSet)`                               | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| +30.2% |  +685 | 36.3% → 34.3% | 2,265 → 2,950 | `processDirectory(String, RuleSet)`              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| +30.2% |  +684 | 36.3% → 34.3% | 2,265 → 2,949 | `doCall(Object)`                                 | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
| +30.2% |  +682 | 36.2% → 34.1% | 2,256 → 2,938 | `processFile(String, DirectoryResults, RuleSet)` | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| +30.0% |  +674 | 36.0% → 34.0% | 2,248 → 2,922 | `collectViolations(SourceCode, RuleSet)`         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| +31.9% |  +585 | 29.4% → 28.1% | 1,836 → 2,421 | `measureRuleProcessingTime(Rule, Closure)`       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| +29.5% |  +423 | 23.0% → 21.6% | 1,436 → 1,859 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
| +26.3% |  +340 | 20.7% → 19.0% | 1,294 → 1,634 | `applyTo(SourceCode)`                            | `org.codenarc.rule.AbstractRule`                                            |
| +28.2% |  +307 | 17.4% → 16.2% | 1,087 → 1,394 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
| +28.3% |  +290 | 16.4% → 15.3% | 1,023 → 1,313 | `visitClass(ClassNode)`                          | `org.codenarc.rule.AbstractAstVisitor`                                      |
| +23.9% |  +195 | 13.1% → 11.8% |   817 → 1,012 | `visitMethod(MethodNode)`                        | `org.codenarc.rule.AbstractAstVisitor`                                      |
| +27.1% |   +83 |   4.9% → 4.5% |     306 → 389 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`  |
| +28.1% |   +78 |   4.5% → 4.1% |     278 → 356 | `isRuleSuppressed(Rule)`                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
| +27.7% |   +76 |   4.4% → 4.1% |     274 → 350 | `getAst()`                                       | `org.codenarc.source.AbstractSourceCode`                                    |
| +27.5% |   +75 |   4.4% → 4.0% |     273 → 348 | `init()`                                         | `org.codenarc.source.AbstractSourceCode`                                    |
| +27.3% |   +75 |   4.4% → 4.1% |     275 → 350 | `init()`                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
| +36.5% |   +27 |          1.2% |      74 → 101 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractSharedAstVisitorRule`                            |

##### JIT

|  Change | Delta |            % | Samples | Function                    | Location    |
| ------: | ----: | -----------: | ------: | --------------------------- | ----------- |
| +333.3% |   +10 | <0.1% → 0.2% |  3 → 13 | `I2C/C2I adapters(0xbb)`    | `<unknown>` |
| +500.0% |    +5 | <0.1% → 0.1% |   1 → 6 | `I2C/C2I adapters(0xbbb)`   | `<unknown>` |
| +100.0% |    +4 |         0.1% |   4 → 8 | `I2C/C2I adapters(0xb)`     | `<unknown>` |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `I2C/C2I adapters(0xbbbbb)` | `<unknown>` |

##### Standard library

|  Change | Delta |             % |       Samples | Function                                                                                      | Location                                            |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------------------------------------------- | --------------------------------------------------- |
|  +30.4% |  +746 | 39.4% → 37.2% | 2,457 → 3,203 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`     |
|  +30.4% |  +745 | 39.3% → 37.1% | 2,450 → 3,195 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                  |
|  +30.1% |  +734 | 39.1% → 36.9% | 2,439 → 3,173 | `linkToCallSite(Object, Object)`                                                              | `java.lang.invoke.Invokers$Holder`                  |
|  +29.9% |  +702 | 37.6% → 35.4% | 2,345 → 3,047 | `linkToCallSite(Object, Object, Object, Object)`                                              | `java.lang.invoke.Invokers$Holder`                  |
|  +30.1% |  +698 | 37.2% → 35.1% | 2,318 → 3,016 | `linkToCallSite(Object, Object, Object, Object, Object)`                                      | `java.lang.invoke.Invokers$Holder`                  |
|  +26.0% |  +223 | 13.7% → 12.6% |   857 → 1,080 | `visitClass(ClassNode)`                                                                       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  +30.6% |  +191 |  10.0% → 9.5% |     625 → 816 | `visitConstructorOrMethod(MethodNode, boolean)`                                               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  +27.2% |  +190 | 11.2% → 10.3% |     699 → 889 | `visitMethod(MethodNode)`                                                                     | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  +33.8% |  +189 |   9.0% → 8.7% |     559 → 748 | `visitBlockStatement(BlockStatement)`                                                         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  +33.1% |  +167 |   8.1% → 7.8% |     504 → 671 | `visitExpressionStatement(ExpressionStatement)`                                               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  +51.1% |  +134 |   4.2% → 4.6% |     262 → 396 | `linkToCallSite(Object, Object, long, Object)`                                                | `java.lang.invoke.LambdaForm$MH.0x0000000401323400` |
|  +29.5% |   +85 |   4.6% → 4.3% |     288 → 373 | `visit(GroovyCodeVisitor)`                                                                    | `org.codehaus.groovy.ast.expr.MethodCallExpression` |
|  +39.7% |   +75 |   3.0% → 3.1% |     189 → 264 | `visitBinaryExpression(BinaryExpression)`                                                     | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  +18.5% |   +70 |   6.1% → 5.2% |     379 → 449 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])`                                 | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|  +32.6% |   +61 |   3.0% → 2.9% |     187 → 248 | `visitMethodCallExpression(MethodCallExpression)`                                             | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  +56.0% |   +51 |   1.5% → 1.7% |      91 → 142 | `linkToCallSite(Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000004010c8c00` |
|     new |   +46 |   0.0% → 0.5% |        0 → 46 | `linkToCallSite(Object, int, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x00000004013d8800` |
|  +30.1% |   +43 |   2.3% → 2.2% |     143 → 186 | `visitArgumentlistExpression(ArgumentListExpression)`                                         | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  +28.0% |   +35 |   2.0% → 1.9% |     125 → 160 | `visitDeclarationExpression(DeclarationExpression)`                                           | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| +129.2% |   +31 |   0.4% → 0.6% |       24 → 55 | `loadClass(String)`                                                                           | `java.lang.ClassLoader`                             |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |            % | Samples | Function                                                    | Location                                                             |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------- | -------------------------------------------------------------------- |
| removed |   -42 |  0.7% → 0.0% |  42 → 0 | `linkToCallSite(Object, int, Object, Object)`               | `java.lang.invoke.LambdaForm$MH.0x00000004013d8c00`                  |
| removed |   -26 |  0.4% → 0.0% |  26 → 0 | `linkToCallSite(Object, int, int, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x00000004013ef800`                  |
| removed |   -16 |  0.3% → 0.0% |  16 → 0 | `linkToCallSite(Object, Object, Object, int, Object)`       | `java.lang.invoke.LambdaForm$MH.0x000000040134bc00`                  |
| removed |   -12 |  0.2% → 0.0% |  12 → 0 | `linkToCallSite(Object, Object, int, int, Object)`          | `java.lang.invoke.LambdaForm$MH.0x0000000401929400`                  |
|  -45.5% |   -10 |  0.4% → 0.1% | 22 → 12 | `LIR_Assembler::record_non_safepoint_debug_info`            | `libjvm.dylib`                                                       |
|  -81.8% |    -9 | 0.2% → <0.1% |  11 → 2 | `visitBlockStatement(BlockStatement)`                       | `org.codenarc.rule.unnecessary.UnnecessaryIfStatementAstVisitor`     |
|  -53.3% |    -8 |  0.2% → 0.1% |  15 → 7 | `MethodLiveness::BasicBlock::get_liveness_at`               | `libjvm.dylib`                                                       |
|  -47.1% |    -8 |  0.3% → 0.1% |  17 → 9 | `super$3$visitDeclarationExpression(DeclarationExpression)` | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`         |
|  -47.1% |    -8 |  0.3% → 0.1% |  17 → 9 | `visitDeclarationExpression(DeclarationExpression)`         | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`         |
|   -8.8% |    -7 |  1.3% → 0.8% | 80 → 73 | `LIR_Assembler::emit_code`                                  | `libjvm.dylib`                                                       |
|  -38.9% |    -7 |  0.3% → 0.1% | 18 → 11 | `MethodLiveness::get_liveness_at`                           | `libjvm.dylib`                                                       |
|  -70.0% |    -7 | 0.2% → <0.1% |  10 → 3 | `LIR_Assembler::const2reg`                                  | `libjvm.dylib`                                                       |
|  -24.1% |    -7 |  0.5% → 0.3% | 29 → 22 | `PhaseCCP::do_transform`                                    | `libjvm.dylib`                                                       |
|  -53.8% |    -7 |  0.2% → 0.1% |  13 → 6 | `booleanUnbox(Object)`                                      | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation` |
|  -53.8% |    -7 |  0.2% → 0.1% |  13 → 6 | `applyTo(SourceCode, List)`                                 | `org.codenarc.rule.formatting.ConsecutiveBlankLinesRule`             |
|  -25.0% |    -7 |  0.4% → 0.2% | 28 → 21 | `ciEnv::get_klass_by_name_impl`                             | `libjvm.dylib`                                                       |
|  -50.0% |    -7 |  0.2% → 0.1% |  14 → 7 | `Node::rematerialize`                                       | `libjvm.dylib`                                                       |
|  -70.0% |    -7 | 0.2% → <0.1% |  10 → 3 | `PhaseCCP::transform_once`                                  | `libjvm.dylib`                                                       |
|  -77.8% |    -7 | 0.1% → <0.1% |   9 → 2 | `ConnectionGraph::add_field_uses_to_worklist`               | `libjvm.dylib`                                                       |
|   -7.8% |    -6 |  1.2% → 0.8% | 77 → 71 | `LIR_Assembler::emit_lir_list`                              | `libjvm.dylib`                                                       |

##### Compiler

| Change | Delta |            % | Samples | Function                                         | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------------------ | -------------- |
| -45.5% |   -10 |  0.4% → 0.1% | 22 → 12 | `LIR_Assembler::record_non_safepoint_debug_info` | `libjvm.dylib` |
| -53.3% |    -8 |  0.2% → 0.1% |  15 → 7 | `MethodLiveness::BasicBlock::get_liveness_at`    | `libjvm.dylib` |
|  -8.8% |    -7 |  1.3% → 0.8% | 80 → 73 | `LIR_Assembler::emit_code`                       | `libjvm.dylib` |
| -38.9% |    -7 |  0.3% → 0.1% | 18 → 11 | `MethodLiveness::get_liveness_at`                | `libjvm.dylib` |
| -70.0% |    -7 | 0.2% → <0.1% |  10 → 3 | `LIR_Assembler::const2reg`                       | `libjvm.dylib` |
| -24.1% |    -7 |  0.5% → 0.3% | 29 → 22 | `PhaseCCP::do_transform`                         | `libjvm.dylib` |
| -25.0% |    -7 |  0.4% → 0.2% | 28 → 21 | `ciEnv::get_klass_by_name_impl`                  | `libjvm.dylib` |
| -50.0% |    -7 |  0.2% → 0.1% |  14 → 7 | `Node::rematerialize`                            | `libjvm.dylib` |
| -70.0% |    -7 | 0.2% → <0.1% |  10 → 3 | `PhaseCCP::transform_once`                       | `libjvm.dylib` |
| -77.8% |    -7 | 0.1% → <0.1% |   9 → 2 | `ConnectionGraph::add_field_uses_to_worklist`    | `libjvm.dylib` |
|  -7.8% |    -6 |  1.2% → 0.8% | 77 → 71 | `LIR_Assembler::emit_lir_list`                   | `libjvm.dylib` |
| -40.0% |    -6 |  0.2% → 0.1% |  15 → 9 | `LIR_Assembler::process_debug_info`              | `libjvm.dylib` |
| -37.5% |    -6 |  0.3% → 0.1% | 16 → 10 | `ProjNode::is_uncommon_trap_proj`                | `libjvm.dylib` |
| -35.3% |    -6 |  0.3% → 0.1% | 17 → 11 | `PhaseChaitin::merge_multidefs`                  | `libjvm.dylib` |
| -62.5% |    -5 | 0.1% → <0.1% |   8 → 3 | `Scheduling::ComputeUseCount`                    | `libjvm.dylib` |
| -62.5% |    -5 | 0.1% → <0.1% |   8 → 3 | `IfFalseNode::Opcode`                            | `libjvm.dylib` |
| -27.8% |    -5 |  0.3% → 0.2% | 18 → 13 | `Node::is_CFG`                                   | `libjvm.dylib` |
| -17.2% |    -5 |  0.5% → 0.3% | 29 → 24 | `TypeInstPtr::make`                              | `libjvm.dylib` |
| -13.9% |    -5 |  0.6% → 0.4% | 36 → 31 | `ConnectionGraph::split_unique_types`            | `libjvm.dylib` |
| -16.7% |    -4 |  0.4% → 0.2% | 24 → 20 | `BlockBegin::iterate_preorder`                   | `libjvm.dylib` |

##### Ours

|  Change | Delta |            % | Samples | Function                                                    | Location                                                                     |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------- | ---------------------------------------------------------------------------- |
|  -81.8% |    -9 | 0.2% → <0.1% |  11 → 2 | `visitBlockStatement(BlockStatement)`                       | `org.codenarc.rule.unnecessary.UnnecessaryIfStatementAstVisitor`             |
|  -47.1% |    -8 |  0.3% → 0.1% |  17 → 9 | `super$3$visitDeclarationExpression(DeclarationExpression)` | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`                 |
|  -47.1% |    -8 |  0.3% → 0.1% |  17 → 9 | `visitDeclarationExpression(DeclarationExpression)`         | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`                 |
|  -53.8% |    -7 |  0.2% → 0.1% |  13 → 6 | `applyTo(SourceCode, List)`                                 | `org.codenarc.rule.formatting.ConsecutiveBlankLinesRule`                     |
|  -37.5% |    -6 |  0.3% → 0.1% | 16 → 10 | `visitConstructorOrMethod(MethodNode, boolean)`             | `org.codenarc.rule.formatting.BracesForMethodAstVisitor`                     |
|  -13.3% |    -6 |  0.7% → 0.5% | 45 → 39 | `applyTo(SourceCode, List)`                                 | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`                     |
| removed |    -6 |  0.1% → 0.0% |   6 → 0 | `visitMethodComplete(MethodNode)`                           | `org.codenarc.rule.convention.PublicMethodsBeforeNonPublicMethodsAstVisitor` |
|  -42.9% |    -6 |  0.2% → 0.1% |  14 → 8 | `visitMethodEx(MethodNode)`                                 | `org.codenarc.rule.formatting.IndentationAstVisitor`                         |
|  -26.1% |    -6 |  0.4% → 0.2% | 23 → 17 | `visitConstructorOrMethod(MethodNode, boolean)`             | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`                   |
|  -14.3% |    -5 |  0.6% → 0.3% | 35 → 30 | `visitConstructorOrMethod(MethodNode, boolean)`             | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`                 |
|  -23.8% |    -5 |  0.3% → 0.2% | 21 → 16 | `visitMethodCallExpression(MethodCallExpression)`           | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                     |
|  -45.5% |    -5 |  0.2% → 0.1% |  11 → 6 | `visitClassComplete(ClassNode)`                             | `org.codenarc.rule.formatting.ClassStartsWithBlankLineAstVisitor`            |
|  -62.5% |    -5 | 0.1% → <0.1% |   8 → 3 | `visitBinaryExpression(BinaryExpression)`                   | `org.codenarc.rule.convention.ParameterReassignmentAstVisitor`               |
|  -44.4% |    -4 |         0.1% |   9 → 5 | `hasOpeningBraceOnSameLine(MethodNode)`                     | `org.codenarc.rule.formatting.BracesForMethodAstVisitor`                     |
|  -66.7% |    -4 | 0.1% → <0.1% |   6 → 2 | `visitConstructorCallExpression(ConstructorCallExpression)` | `org.codenarc.rule.AbstractConstructorCallAstVisitor`                        |
|  -12.1% |    -4 |  0.5% → 0.3% | 33 → 29 | `visitBinaryExpression(BinaryExpression)`                   | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`                 |
|  -16.7% |    -4 |  0.4% → 0.2% | 24 → 20 | `eachImportLine(SourceCode, Closure)`                       | `org.codenarc.rule.imports.AbstractImportRule`                               |
|  -20.0% |    -4 |  0.3% → 0.2% | 20 → 16 | `applyTo(SourceCode, List)`                                 | `org.codenarc.rule.imports.DuplicateImportRule`                              |
|  -26.7% |    -4 |  0.2% → 0.1% | 15 → 11 | `applyTo(SourceCode, List)`                                 | `org.codenarc.rule.imports.ImportFromSamePackageRule`                        |
|  -30.8% |    -4 |  0.2% → 0.1% |  13 → 9 | `visitMethodEx(MethodNode)`                                 | `org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`             |

##### JIT

|  Change | Delta |            % | Samples | Function                   | Location    |
| ------: | ----: | -----------: | ------: | -------------------------- | ----------- |
|  -71.4% |    -5 | 0.1% → <0.1% |   7 → 2 | `I2C/C2I adapters(0xbbbb)` | `<unknown>` |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `I2C/C2I adapters(0xbbba)` | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0x)`     | `<unknown>` |
|   -9.1% |    -1 |  0.2% → 0.1% | 11 → 10 | `vtable stub`              | `<unknown>` |
|  -33.3% |    -1 |        <0.1% |   3 → 2 | `zero_blocks`              | `<unknown>` |

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                 | Location                                                             |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| removed |   -42 |  0.7% → 0.0% |  42 → 0 | `linkToCallSite(Object, int, Object, Object)`                            | `java.lang.invoke.LambdaForm$MH.0x00000004013d8c00`                  |
| removed |   -26 |  0.4% → 0.0% |  26 → 0 | `linkToCallSite(Object, int, int, Object)`                               | `java.lang.invoke.LambdaForm$MH.0x00000004013ef800`                  |
| removed |   -16 |  0.3% → 0.0% |  16 → 0 | `linkToCallSite(Object, Object, Object, int, Object)`                    | `java.lang.invoke.LambdaForm$MH.0x000000040134bc00`                  |
| removed |   -12 |  0.2% → 0.0% |  12 → 0 | `linkToCallSite(Object, Object, int, int, Object)`                       | `java.lang.invoke.LambdaForm$MH.0x0000000401929400`                  |
|  -53.8% |    -7 |  0.2% → 0.1% |  13 → 6 | `booleanUnbox(Object)`                                                   | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation` |
|  -80.0% |    -4 | 0.1% → <0.1% |   5 → 1 | `callGetProperty(Object)`                                                | `org.codehaus.groovy.runtime.callsite.GetEffectivePogoPropertySite`  |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `visitMapEntryExpression(MapEntryExpression)`                            | `org.codehaus.groovy.ast.CodeVisitorSupport`                         |
|  -22.2% |    -2 |         0.1% |   9 → 7 | `linkToCallSite(int, int, Object)`                                       | `java.lang.invoke.Invokers$Holder`                                   |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `<init>(Object)`                                                         | `groovy.lang.Reference`                                              |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `contains(Object)`                                                       | `java.util.HashSet`                                                  |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `linkToCallSite(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                   |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `replaceFirst(String, String)`                                           | `java.lang.String`                                                   |
|  -12.5% |    -1 |         0.1% |   8 → 7 | `visitConstructorCallExpression(ConstructorCallExpression)`              | `org.codehaus.groovy.ast.CodeVisitorSupport`                         |
|   -5.9% |    -1 |  0.3% → 0.2% | 17 → 16 | `visitAnnotations(AnnotatedNode)`                                        | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `get()`                                                                  | `groovy.lang.Reference`                                              |
|  -12.5% |    -1 |         0.1% |   8 → 7 | `visitReturnStatement(ReturnStatement)`                                  | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `call(Object, Object, Object, Object)`                                   | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`              |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `set(Object)`                                                            | `groovy.lang.Reference`                                              |
|  -14.3% |    -1 |         0.1% |   7 → 6 | `visitConstructor(ConstructorNode)`                                      | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `bitwiseNegate(Object)`                                                  | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                  |

# Allocated heap profile diff

Allocated 9.43 MiB → 7.34 MiB (-2.095 MiB, -22.2%) over 24,506 samples → 24,284 samples (404 B → 317 B per sample).

| Category         | Change |      Delta |     % |                Size |         Samples |
| ---------------- | -----: | ---------: | ----: | ------------------: | --------------: |
| Standard library | -22.2% | -2.095 MiB | 99.9% | 9.43 MiB → 7.33 MiB | 24,311 → 24,084 |
| Ours             |  +5.0% |     +352 B |  0.1% | 6.88 KiB → 7.22 KiB |       195 → 200 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |  Delta |            % |                Size |   Samples | Function                                              | Location                                                                        |
| ------: | -----: | -----------: | ------------------: | --------: | ----------------------------------------------------- | ------------------------------------------------------------------------------- |
|   +9.9% | +800 B |         0.1% | 7.89 KiB → 8.67 KiB | 101 → 111 | `matcher(CharSequence)`                               | `java.util.regex.Pattern`                                                       |
| +110.0% | +704 B |        <0.1% |    640 B → 1.31 KiB |   10 → 21 | `collectViolations(SourceCode, RuleSet)`              | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                  |
| +200.0% | +432 B |        <0.1% |       216 B → 648 B |     3 → 9 | `doCall(Object)`                                      | `org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3` |
|  +75.0% | +288 B |        <0.1% |       384 B → 672 B |   16 → 28 | `isCase(Object, Object)`                              | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                             |
|  +37.0% | +240 B |        <0.1% |       648 B → 888 B |   27 → 37 | `toString()`                                          | `java.lang.StringBuilder`                                                       |
| +400.0% |  +96 B |        <0.1% |        24 B → 120 B |     1 → 5 | `visitVariableExpression(VariableExpression)`         | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`           |
|     new |  +80 B | 0.0% → <0.1% |          0 B → 80 B |     0 → 2 | `visitMethodEx(MethodNode)`                           | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`                  |
|     new |  +80 B | 0.0% → <0.1% |          0 B → 80 B |     0 → 2 | `visitDeclarationExpression(DeclarationExpression)`   | `org.codenarc.rule.naming.VariableNameAstVisitor`                               |
|     new |  +72 B | 0.0% → <0.1% |          0 B → 72 B |     0 → 3 | `visitBinaryExpression(BinaryExpression)`             | `org.codenarc.rule.design.AssignmentToStaticFieldFromInstanceMethodAstVisitor`  |
|  +28.6% |  +64 B |        <0.1% |       224 B → 288 B |    8 → 10 | `<init>(String, boolean)`                             | `org.codenarc.util.WildcardPattern`                                             |
|     new |  +56 B | 0.0% → <0.1% |          0 B → 56 B |     0 → 1 | `methodReturnsCollection(MethodNode)`                 | `org.codenarc.rule.design.ReturnsNullInsteadOfEmptyCollectionRuleAstVisitor`    |
|     new |  +56 B | 0.0% → <0.1% |          0 B → 56 B |     0 → 1 | `visitBlockStatement(BlockStatement)`                 | `org.codenarc.rule.formatting.IndentationAstVisitor`                            |
|     new |  +56 B | 0.0% → <0.1% |          0 B → 56 B |     0 → 1 | `visitClosureExpression(ClosureExpression)`           | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                        |
|     new |  +56 B | 0.0% → <0.1% |          0 B → 56 B |     0 → 1 | `applyTo(SourceCode, List)`                           | `org.codenarc.rule.imports.NoWildcardImportsRule`                               |
|     new |  +56 B | 0.0% → <0.1% |          0 B → 56 B |     0 → 1 | `visitConstructorOrMethod(MethodNode, boolean)`       | `org.codenarc.rule.convention.MethodParameterTypeRequiredAstVisitor`            |
|     new |  +56 B | 0.0% → <0.1% |          0 B → 56 B |     0 → 1 | `applyTo(SourceCode, List)`                           | `org.codenarc.rule.formatting.TrailingWhitespaceRule`                           |
|     new |  +48 B | 0.0% → <0.1% |          0 B → 48 B |     0 → 1 | `getAstVisitor()`                                     | `org.codenarc.rule.groovyism.ExplicitHashSetInstantiationRule`                  |
|     new |  +48 B | 0.0% → <0.1% |          0 B → 48 B |     0 → 1 | `calculateTotal(Collection)`                          | `org.gmetrics.result.MetricResultBuilder`                                       |
|     new |  +48 B | 0.0% → <0.1% |          0 B → 48 B |     0 → 1 | `visitArgumentlistExpression(ArgumentListExpression)` | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                              |
|     new |  +48 B | 0.0% → <0.1% |          0 B → 48 B |     0 → 2 | `visitBinaryExpression(BinaryExpression)`             | `org.codenarc.rule.unnecessary.UnnecessaryInstanceOfCheckAstVisitor`            |

##### Standard library

|  Change |  Delta |            % |                Size |   Samples | Function                                              | Location                                                |
| ------: | -----: | -----------: | ------------------: | --------: | ----------------------------------------------------- | ------------------------------------------------------- |
|   +9.9% | +800 B |         0.1% | 7.89 KiB → 8.67 KiB | 101 → 111 | `matcher(CharSequence)`                               | `java.util.regex.Pattern`                               |
|  +75.0% | +288 B |        <0.1% |       384 B → 672 B |   16 → 28 | `isCase(Object, Object)`                              | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`     |
|  +37.0% | +240 B |        <0.1% |       648 B → 888 B |   27 → 37 | `toString()`                                          | `java.lang.StringBuilder`                               |
| +200.0% |  +48 B |        <0.1% |         24 B → 72 B |     1 → 3 | `record(Object, int)`                                 | `org.codehaus.groovy.runtime.powerassert.ValueRecorder` |
|     new |  +40 B | 0.0% → <0.1% |          0 B → 40 B |     0 → 1 | `createArray(Object, Object, Object, Object, Object)` | `org.codehaus.groovy.runtime.ArrayUtil`                 |
|     new |  +24 B | 0.0% → <0.1% |          0 B → 24 B |     0 → 1 | `synchronizedSet(Set)`                                | `java.util.Collections`                                 |

##### Ours

|  Change |  Delta |            % |             Size | Samples | Function                                              | Location                                                                        |
| ------: | -----: | -----------: | ---------------: | ------: | ----------------------------------------------------- | ------------------------------------------------------------------------------- |
| +110.0% | +704 B |        <0.1% | 640 B → 1.31 KiB | 10 → 21 | `collectViolations(SourceCode, RuleSet)`              | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                  |
| +200.0% | +432 B |        <0.1% |    216 B → 648 B |   3 → 9 | `doCall(Object)`                                      | `org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3` |
| +400.0% |  +96 B |        <0.1% |     24 B → 120 B |   1 → 5 | `visitVariableExpression(VariableExpression)`         | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`           |
|     new |  +80 B | 0.0% → <0.1% |       0 B → 80 B |   0 → 2 | `visitMethodEx(MethodNode)`                           | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`                  |
|     new |  +80 B | 0.0% → <0.1% |       0 B → 80 B |   0 → 2 | `visitDeclarationExpression(DeclarationExpression)`   | `org.codenarc.rule.naming.VariableNameAstVisitor`                               |
|     new |  +72 B | 0.0% → <0.1% |       0 B → 72 B |   0 → 3 | `visitBinaryExpression(BinaryExpression)`             | `org.codenarc.rule.design.AssignmentToStaticFieldFromInstanceMethodAstVisitor`  |
|  +28.6% |  +64 B |        <0.1% |    224 B → 288 B |  8 → 10 | `<init>(String, boolean)`                             | `org.codenarc.util.WildcardPattern`                                             |
|     new |  +56 B | 0.0% → <0.1% |       0 B → 56 B |   0 → 1 | `methodReturnsCollection(MethodNode)`                 | `org.codenarc.rule.design.ReturnsNullInsteadOfEmptyCollectionRuleAstVisitor`    |
|     new |  +56 B | 0.0% → <0.1% |       0 B → 56 B |   0 → 1 | `visitBlockStatement(BlockStatement)`                 | `org.codenarc.rule.formatting.IndentationAstVisitor`                            |
|     new |  +56 B | 0.0% → <0.1% |       0 B → 56 B |   0 → 1 | `visitClosureExpression(ClosureExpression)`           | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                        |
|     new |  +56 B | 0.0% → <0.1% |       0 B → 56 B |   0 → 1 | `applyTo(SourceCode, List)`                           | `org.codenarc.rule.imports.NoWildcardImportsRule`                               |
|     new |  +56 B | 0.0% → <0.1% |       0 B → 56 B |   0 → 1 | `visitConstructorOrMethod(MethodNode, boolean)`       | `org.codenarc.rule.convention.MethodParameterTypeRequiredAstVisitor`            |
|     new |  +56 B | 0.0% → <0.1% |       0 B → 56 B |   0 → 1 | `applyTo(SourceCode, List)`                           | `org.codenarc.rule.formatting.TrailingWhitespaceRule`                           |
|     new |  +48 B | 0.0% → <0.1% |       0 B → 48 B |   0 → 1 | `getAstVisitor()`                                     | `org.codenarc.rule.groovyism.ExplicitHashSetInstantiationRule`                  |
|     new |  +48 B | 0.0% → <0.1% |       0 B → 48 B |   0 → 1 | `calculateTotal(Collection)`                          | `org.gmetrics.result.MetricResultBuilder`                                       |
|     new |  +48 B | 0.0% → <0.1% |       0 B → 48 B |   0 → 1 | `visitArgumentlistExpression(ArgumentListExpression)` | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                              |
|     new |  +48 B | 0.0% → <0.1% |       0 B → 48 B |   0 → 2 | `visitBinaryExpression(BinaryExpression)`             | `org.codenarc.rule.unnecessary.UnnecessaryInstanceOfCheckAstVisitor`            |
|  +17.6% |  +48 B |        <0.1% |    272 B → 320 B | 13 → 16 | `<init>()`                                            | `org.codenarc.rule.AbstractAstVisitor`                                          |
|     new |  +48 B | 0.0% → <0.1% |       0 B → 48 B |   0 → 1 | `visitClassEx(ClassNode)`                             | `org.codenarc.rule.basic.EqualsAndHashCodeAstVisitor`                           |
|     new |  +48 B | 0.0% → <0.1% |       0 B → 48 B |   0 → 1 | `visitClassEx(ClassNode)`                             | `org.codenarc.rule.groovyism.ConfusingMultipleReturnsAstVisitor`                |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |  Delta |            % |               Size |   Samples | Function                                                                | Location                                                                   |
| ------: | -----: | -----------: | -----------------: | --------: | ----------------------------------------------------------------------- | -------------------------------------------------------------------------- |
|  -12.7% | -672 B |         0.1% | 5.16 KiB → 4.5 KiB | 165 → 144 | `iterator()`                                                            | `java.util.ArrayList`                                                      |
|  -75.6% | -248 B |        <0.1% |       328 B → 80 B |     7 → 2 | `markVariableAsReferenced(String, VariableExpression)`                  | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                        |
|  -40.0% | -224 B |        <0.1% |      560 B → 336 B |    10 → 6 | `doCall(Object)`                                                        | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
|  -57.1% | -224 B |        <0.1% |      392 B → 168 B |     7 → 3 | `filter(Predicate)`                                                     | `java.util.stream.ReferencePipeline`                                       |
|  -85.7% | -192 B |        <0.1% |       224 B → 32 B |     7 → 1 | `shouldApplyThisRuleTo(SourceCode)`                                     | `org.codenarc.rule.AbstractRule`                                           |
|  -30.8% | -160 B |        <0.1% |      520 B → 360 B |    13 → 9 | `createRange(Object, Object, boolean, boolean)`                         | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                        |
|  -15.9% | -112 B |        <0.1% |      704 B → 592 B |   16 → 14 | `matches(String)`                                                       | `org.codenarc.util.WildcardPattern`                                        |
| removed | -112 B | <0.1% → 0.0% |        112 B → 0 B |     2 → 0 | `processMethodOrConstructorCall(MethodCall)`                            | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                   |
|  -85.7% |  -96 B |        <0.1% |       112 B → 16 B |     2 → 1 | `convertStringWithWildcardsToRegex(String)`                             | `org.codenarc.util.WildcardPattern`                                        |
|  -50.0% |  -96 B |        <0.1% |       192 B → 96 B |     8 → 4 | `applyTo(SourceCode)`                                                   | `org.codenarc.rule.AbstractRule`                                           |
|  -80.0% |  -96 B |        <0.1% |       120 B → 24 B |     2 → 1 | `applyTo(SourceCode, List)`                                             | `org.codenarc.rule.unused.UnusedVariableRule`                              |
| removed |  -96 B | <0.1% → 0.0% |         96 B → 0 B |     2 → 0 | `hasOpeningBraceOnSameLine(MethodNode)`                                 | `org.codenarc.rule.formatting.BracesForMethodAstVisitor`                   |
|  -15.8% |  -96 B |        <0.1% |      608 B → 512 B |   38 → 32 | `valueOf(int)`                                                          | `java.lang.Integer`                                                        |
|  -55.6% |  -80 B |        <0.1% |       144 B → 64 B |     3 → 2 | `isViolationSuppressed(Violation)`                                      | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
|  -71.4% |  -80 B |        <0.1% |       112 B → 32 B |     4 → 1 | `getViolationLocationString(Violation, String)`                         | `org.codenarc.report.TextReportWriter`                                     |
| removed |  -64 B | <0.1% → 0.0% |         64 B → 0 B |     2 → 0 | `visitMethod(MethodNode)`                                               | `org.codenarc.rule.naming.MethodNameAstVisitor`                            |
| removed |  -64 B | <0.1% → 0.0% |         64 B → 0 B |     4 → 0 | `<init>(int, int, int)`                                                 | `org.gmetrics.metric.abc.AbcVector`                                        |
| removed |  -56 B | <0.1% → 0.0% |         56 B → 0 B |     1 → 0 | `lineNumberForMethod(MethodNode, SourceCode)`                           | `org.gmetrics.metric.AbstractMethodMetric`                                 |
| removed |  -56 B | <0.1% → 0.0% |         56 B → 0 B |     1 → 0 | `visitConstructorOrMethod(MethodNode, boolean)`                         | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                   |
|  -50.0% |  -56 B |        <0.1% |       112 B → 56 B |     2 → 1 | `recordMethodColumnAndSourceLineForClosureBlocks(MethodCallExpression)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                       |

##### Standard library

|  Change |  Delta |            % |               Size |   Samples | Function                                        | Location                                                |
| ------: | -----: | -----------: | -----------------: | --------: | ----------------------------------------------- | ------------------------------------------------------- |
|  -12.7% | -672 B |         0.1% | 5.16 KiB → 4.5 KiB | 165 → 144 | `iterator()`                                    | `java.util.ArrayList`                                   |
|  -57.1% | -224 B |        <0.1% |      392 B → 168 B |     7 → 3 | `filter(Predicate)`                             | `java.util.stream.ReferencePipeline`                    |
|  -30.8% | -160 B |        <0.1% |      520 B → 360 B |    13 → 9 | `createRange(Object, Object, boolean, boolean)` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`     |
|  -15.8% |  -96 B |        <0.1% |      608 B → 512 B |   38 → 32 | `valueOf(int)`                                  | `java.lang.Integer`                                     |
| removed |  -48 B | <0.1% → 0.0% |         48 B → 0 B |     2 → 0 | `getText()`                                     | `org.codehaus.groovy.ast.expr.PropertyExpression`       |
|  -66.7% |  -48 B |        <0.1% |        72 B → 24 B |     3 → 1 | `<init>()`                                      | `org.codehaus.groovy.runtime.powerassert.ValueRecorder` |

##### Ours

|  Change |  Delta |            % |          Size | Samples | Function                                                                | Location                                                                   |
| ------: | -----: | -----------: | ------------: | ------: | ----------------------------------------------------------------------- | -------------------------------------------------------------------------- |
|  -75.6% | -248 B |        <0.1% |  328 B → 80 B |   7 → 2 | `markVariableAsReferenced(String, VariableExpression)`                  | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                        |
|  -40.0% | -224 B |        <0.1% | 560 B → 336 B |  10 → 6 | `doCall(Object)`                                                        | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
|  -85.7% | -192 B |        <0.1% |  224 B → 32 B |   7 → 1 | `shouldApplyThisRuleTo(SourceCode)`                                     | `org.codenarc.rule.AbstractRule`                                           |
|  -15.9% | -112 B |        <0.1% | 704 B → 592 B | 16 → 14 | `matches(String)`                                                       | `org.codenarc.util.WildcardPattern`                                        |
| removed | -112 B | <0.1% → 0.0% |   112 B → 0 B |   2 → 0 | `processMethodOrConstructorCall(MethodCall)`                            | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                   |
|  -85.7% |  -96 B |        <0.1% |  112 B → 16 B |   2 → 1 | `convertStringWithWildcardsToRegex(String)`                             | `org.codenarc.util.WildcardPattern`                                        |
|  -50.0% |  -96 B |        <0.1% |  192 B → 96 B |   8 → 4 | `applyTo(SourceCode)`                                                   | `org.codenarc.rule.AbstractRule`                                           |
|  -80.0% |  -96 B |        <0.1% |  120 B → 24 B |   2 → 1 | `applyTo(SourceCode, List)`                                             | `org.codenarc.rule.unused.UnusedVariableRule`                              |
| removed |  -96 B | <0.1% → 0.0% |    96 B → 0 B |   2 → 0 | `hasOpeningBraceOnSameLine(MethodNode)`                                 | `org.codenarc.rule.formatting.BracesForMethodAstVisitor`                   |
|  -55.6% |  -80 B |        <0.1% |  144 B → 64 B |   3 → 2 | `isViolationSuppressed(Violation)`                                      | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
|  -71.4% |  -80 B |        <0.1% |  112 B → 32 B |   4 → 1 | `getViolationLocationString(Violation, String)`                         | `org.codenarc.report.TextReportWriter`                                     |
| removed |  -64 B | <0.1% → 0.0% |    64 B → 0 B |   2 → 0 | `visitMethod(MethodNode)`                                               | `org.codenarc.rule.naming.MethodNameAstVisitor`                            |
| removed |  -64 B | <0.1% → 0.0% |    64 B → 0 B |   4 → 0 | `<init>(int, int, int)`                                                 | `org.gmetrics.metric.abc.AbcVector`                                        |
| removed |  -56 B | <0.1% → 0.0% |    56 B → 0 B |   1 → 0 | `lineNumberForMethod(MethodNode, SourceCode)`                           | `org.gmetrics.metric.AbstractMethodMetric`                                 |
| removed |  -56 B | <0.1% → 0.0% |    56 B → 0 B |   1 → 0 | `visitConstructorOrMethod(MethodNode, boolean)`                         | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                   |
|  -50.0% |  -56 B |        <0.1% |  112 B → 56 B |   2 → 1 | `recordMethodColumnAndSourceLineForClosureBlocks(MethodCallExpression)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                       |
| removed |  -56 B | <0.1% → 0.0% |    56 B → 0 B |   1 → 0 | `getNumberOfFilesWithViolations(int, boolean)`                          | `org.codenarc.results.FileResults`                                         |
| removed |  -48 B | <0.1% → 0.0% |    48 B → 0 B |   2 → 0 | `isRuleSuppressed(Rule)`                                                | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
| removed |  -48 B | <0.1% → 0.0% |    48 B → 0 B |   1 → 0 | `afterBlock()`                                                          | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                        |
|  -66.7% |  -48 B |        <0.1% |   72 B → 24 B |   3 → 1 | `visitConstantExpression(ConstantExpression)`                           | `org.codenarc.rule.convention.LongLiteralWithLowerCaseLAstVisitor`         |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|    Change |        Delta |            % |                Size |   Samples | Function                                              | Location                                                              |
| --------: | -----------: | -----------: | ------------------: | --------: | ----------------------------------------------------- | --------------------------------------------------------------------- |
|       new | +104.968 KiB |  0.0% → 1.4% |       0 B → 105 KiB |   0 → 573 | `linkToCallSite(Object, Object, Object, int, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000401349800`                   |
|    +54.1% |  +62.242 KiB |  1.2% → 2.4% |   115 KiB → 177 KiB |   34 → 37 | `addViolation(ASTNode, String)`                       | `org.codenarc.rule.AbstractAstVisitor`                                |
| +82525.0% |  +51.578 KiB | <0.1% → 0.7% |     64 B → 51.6 KiB |     1 → 2 | `visitClassEx(ClassNode)`                             | `org.codenarc.rule.exceptions.ExceptionExtendsErrorAstVisitor`        |
|    +33.5% |  +32.453 KiB |  1.0% → 1.7% |  96.7 KiB → 129 KiB |   25 → 29 | `sourceLineTrimmed(ASTNode)`                          | `org.codenarc.rule.AbstractAstVisitor`                                |
|       new |   +32.21 KiB |  0.0% → 0.4% |      0 B → 32.2 KiB |   0 → 836 | `linkToCallSite(Object, int, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000004013d8800`                   |
|    +20.0% |  +32.179 KiB |  1.7% → 2.6% |   161 KiB → 193 KiB |   23 → 22 | `getLines()`                                          | `org.codenarc.source.AbstractSourceCode`                              |
|     +6.6% |  +32.046 KiB |  5.0% → 6.9% |   483 KiB → 515 KiB |   38 → 44 | `getText()`                                           | `org.codenarc.source.SourceFile`                                      |
|       new |  +32.031 KiB |  0.0% → 0.4% |        0 B → 32 KiB |     0 → 2 | `visitIfElse(IfStatement)`                            | `org.codenarc.rule.braces.IfStatementBracesAstVisitor`                |
|    +49.7% |  +32.015 KiB |  0.7% → 1.3% | 64.4 KiB → 96.5 KiB |   14 → 16 | `visitClassEx(ClassNode)`                             | `org.codenarc.rule.convention.CompileStaticlVisitor`                  |
|   +197.8% |  +31.953 KiB |  0.2% → 0.6% | 16.2 KiB → 48.1 KiB |         5 | `getRawLine(SourceCode, int)`                         | `org.codenarc.util.AstUtil`                                           |
|   +197.8% |  +31.953 KiB |  0.2% → 0.6% | 16.2 KiB → 48.1 KiB |         5 | `findFirstNonAnnotationLine(ASTNode, SourceCode)`     | `org.codenarc.util.AstUtil`                                           |
|    +37.1% |  +26.851 KiB |  0.7% → 1.3% | 72.4 KiB → 99.3 KiB | 135 → 129 | `loadRuleSetFile(String)`                             | `org.codenarc.ruleset.RuleSetUtil`                                    |
|    +37.0% |  +26.796 KiB |  0.7% → 1.3% | 72.4 KiB → 99.2 KiB | 135 → 128 | `<init>(String)`                                      | `org.codenarc.ruleset.XmlFileRuleSet`                                 |
|    +37.0% |  +26.773 KiB |  0.7% → 1.3% | 72.4 KiB → 99.2 KiB | 135 → 127 | `<init>(Reader)`                                      | `org.codenarc.ruleset.XmlReaderRuleSet`                               |
|    +37.0% |  +26.773 KiB |  0.7% → 1.3% | 72.4 KiB → 99.2 KiB | 135 → 127 | `doCall(Object)`                                      | `org.codenarc.ruleset.XmlFileRuleSet$_closure1`                       |
|    +43.8% |  +26.234 KiB |  0.6% → 1.1% | 59.8 KiB → 86.1 KiB | 125 → 114 | `loadRuleElements(Node)`                              | `org.codenarc.ruleset.XmlReaderRuleSet`                               |
|    +43.6% |  +26.093 KiB |  0.6% → 1.1% | 59.8 KiB → 85.9 KiB | 125 → 113 | `doCall(Object)`                                      | `org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`    |
|    +31.6% |  +23.867 KiB |  0.8% → 1.3% | 75.4 KiB → 99.3 KiB | 136 → 130 | `createInitialRuleSetFromFiles()`                     | `org.codenarc.CodeNarcRunner`                                         |
|    +31.6% |  +23.867 KiB |  0.8% → 1.3% | 75.4 KiB → 99.3 KiB | 136 → 130 | `createInitialRuleSet()`                              | `org.codenarc.CodeNarcRunner`                                         |
|    +31.6% |  +23.835 KiB |  0.8% → 1.3% | 75.4 KiB → 99.3 KiB | 136 → 129 | `doCall(Object)`                                      | `org.codenarc.CodeNarcRunner$_createInitialRuleSetFromFiles_closure6` |

##### Standard library

|   Change |        Delta |            % |                Size |       Samples | Function                                                      | Location                                            |
| -------: | -----------: | -----------: | ------------------: | ------------: | ------------------------------------------------------------- | --------------------------------------------------- |
|      new | +104.968 KiB |  0.0% → 1.4% |       0 B → 105 KiB |       0 → 573 | `linkToCallSite(Object, Object, Object, int, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000000401349800` |
|      new |   +32.21 KiB |  0.0% → 0.4% |      0 B → 32.2 KiB |       0 → 836 | `linkToCallSite(Object, int, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000004013d8800` |
|    +6.9% |  +23.523 KiB |  3.5% → 4.8% |   341 KiB → 364 KiB | 4,647 → 4,708 | `visitConstructorOrMethod(MethodNode, boolean)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|      new |  +23.289 KiB |  0.0% → 0.3% |      0 B → 23.3 KiB |       0 → 586 | `linkToCallSite(Object, int, int, Object)`                    | `java.lang.invoke.LambdaForm$MH.0x00000004013ef400` |
|    +5.7% |  +20.515 KiB |  3.7% → 5.1% |   362 KiB → 383 KiB | 4,886 → 4,898 | `visitMethod(MethodNode)`                                     | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|    +6.2% |  +20.148 KiB |  3.4% → 4.6% |   327 KiB → 347 KiB | 4,383 → 4,417 | `visitBlockStatement(BlockStatement)`                         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| +1200.0% |  +19.687 KiB | <0.1% → 0.3% | 1.64 KiB → 21.3 KiB |       35 → 36 | `visitTryCatchFinally(TryCatchStatement)`                     | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|      new |    +11.5 KiB |  0.0% → 0.2% |      0 B → 11.5 KiB |       0 → 306 | `linkToCallSite(Object, Object, int, int, Object)`            | `java.lang.invoke.LambdaForm$MH.0x000000040192b400` |
|    +3.7% |   +9.867 KiB |  2.8% → 3.7% |   268 KiB → 278 KiB | 3,918 → 3,961 | `visitExpressionStatement(ExpressionStatement)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|    +4.8% |   +7.257 KiB |  1.6% → 2.1% |   151 KiB → 158 KiB | 2,583 → 2,570 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|    +7.2% |   +7.148 KiB |  1.0% → 1.4% |  99.2 KiB → 106 KiB | 1,463 → 1,464 | `visitMethodCallExpression(MethodCallExpression)`             | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|    +7.1% |   +6.812 KiB |  1.0% → 1.4% |    96 KiB → 103 KiB | 1,650 → 1,720 | `visit(GroovyCodeVisitor)`                                    | `org.codehaus.groovy.ast.expr.BinaryExpression`     |
|    +3.2% |   +6.101 KiB |  2.0% → 2.6% |   191 KiB → 197 KiB | 2,238 → 2,226 | `visit(GroovyCodeVisitor)`                                    | `org.codehaus.groovy.ast.expr.MethodCallExpression` |
|      new |   +4.882 KiB |  0.0% → 0.1% |      0 B → 4.88 KiB |        0 → 18 | `linkToCallSite(Object, Object, Object, int, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000401342800` |
|   +11.0% |   +4.539 KiB |  0.4% → 0.6% | 41.2 KiB → 45.8 KiB |     174 → 185 | `linkToCallSite(Object, Object, Object, Object, int, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000004013fa400` |
|    +5.1% |   +3.867 KiB |  0.8% → 1.1% |   76 KiB → 79.9 KiB | 1,049 → 1,037 | `visitArgumentlistExpression(ArgumentListExpression)`         | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|    +6.2% |   +3.851 KiB |  0.6% → 0.9% | 62.3 KiB → 66.1 KiB |     791 → 788 | `visitClosureExpression(ClosureExpression)`                   | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
| +1192.3% |   +2.421 KiB |        <0.1% |    208 B → 2.63 KiB |             4 | `implementsInterface(ClassNode)`                              | `org.codehaus.groovy.ast.ClassNode`                 |
|  +134.5% |   +2.164 KiB | <0.1% → 0.1% | 1.61 KiB → 3.77 KiB |       37 → 35 | `visitMapExpression(MapExpression)`                           | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|    +1.1% |   +2.117 KiB |  2.0% → 2.7% |   197 KiB → 199 KiB |     927 → 888 | `matches(String)`                                             | `java.lang.String`                                  |

##### Ours

|    Change |       Delta |            % |                Size |   Samples | Function                                          | Location                                                              |
| --------: | ----------: | -----------: | ------------------: | --------: | ------------------------------------------------- | --------------------------------------------------------------------- |
|    +54.1% | +62.242 KiB |  1.2% → 2.4% |   115 KiB → 177 KiB |   34 → 37 | `addViolation(ASTNode, String)`                   | `org.codenarc.rule.AbstractAstVisitor`                                |
| +82525.0% | +51.578 KiB | <0.1% → 0.7% |     64 B → 51.6 KiB |     1 → 2 | `visitClassEx(ClassNode)`                         | `org.codenarc.rule.exceptions.ExceptionExtendsErrorAstVisitor`        |
|    +33.5% | +32.453 KiB |  1.0% → 1.7% |  96.7 KiB → 129 KiB |   25 → 29 | `sourceLineTrimmed(ASTNode)`                      | `org.codenarc.rule.AbstractAstVisitor`                                |
|    +20.0% | +32.179 KiB |  1.7% → 2.6% |   161 KiB → 193 KiB |   23 → 22 | `getLines()`                                      | `org.codenarc.source.AbstractSourceCode`                              |
|     +6.6% | +32.046 KiB |  5.0% → 6.9% |   483 KiB → 515 KiB |   38 → 44 | `getText()`                                       | `org.codenarc.source.SourceFile`                                      |
|       new | +32.031 KiB |  0.0% → 0.4% |        0 B → 32 KiB |     0 → 2 | `visitIfElse(IfStatement)`                        | `org.codenarc.rule.braces.IfStatementBracesAstVisitor`                |
|    +49.7% | +32.015 KiB |  0.7% → 1.3% | 64.4 KiB → 96.5 KiB |   14 → 16 | `visitClassEx(ClassNode)`                         | `org.codenarc.rule.convention.CompileStaticlVisitor`                  |
|   +197.8% | +31.953 KiB |  0.2% → 0.6% | 16.2 KiB → 48.1 KiB |         5 | `getRawLine(SourceCode, int)`                     | `org.codenarc.util.AstUtil`                                           |
|   +197.8% | +31.953 KiB |  0.2% → 0.6% | 16.2 KiB → 48.1 KiB |         5 | `findFirstNonAnnotationLine(ASTNode, SourceCode)` | `org.codenarc.util.AstUtil`                                           |
|    +37.1% | +26.851 KiB |  0.7% → 1.3% | 72.4 KiB → 99.3 KiB | 135 → 129 | `loadRuleSetFile(String)`                         | `org.codenarc.ruleset.RuleSetUtil`                                    |
|    +37.0% | +26.796 KiB |  0.7% → 1.3% | 72.4 KiB → 99.2 KiB | 135 → 128 | `<init>(String)`                                  | `org.codenarc.ruleset.XmlFileRuleSet`                                 |
|    +37.0% | +26.773 KiB |  0.7% → 1.3% | 72.4 KiB → 99.2 KiB | 135 → 127 | `<init>(Reader)`                                  | `org.codenarc.ruleset.XmlReaderRuleSet`                               |
|    +37.0% | +26.773 KiB |  0.7% → 1.3% | 72.4 KiB → 99.2 KiB | 135 → 127 | `doCall(Object)`                                  | `org.codenarc.ruleset.XmlFileRuleSet$_closure1`                       |
|    +43.8% | +26.234 KiB |  0.6% → 1.1% | 59.8 KiB → 86.1 KiB | 125 → 114 | `loadRuleElements(Node)`                          | `org.codenarc.ruleset.XmlReaderRuleSet`                               |
|    +43.6% | +26.093 KiB |  0.6% → 1.1% | 59.8 KiB → 85.9 KiB | 125 → 113 | `doCall(Object)`                                  | `org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`    |
|    +31.6% | +23.867 KiB |  0.8% → 1.3% | 75.4 KiB → 99.3 KiB | 136 → 130 | `createInitialRuleSetFromFiles()`                 | `org.codenarc.CodeNarcRunner`                                         |
|    +31.6% | +23.867 KiB |  0.8% → 1.3% | 75.4 KiB → 99.3 KiB | 136 → 130 | `createInitialRuleSet()`                          | `org.codenarc.CodeNarcRunner`                                         |
|    +31.6% | +23.835 KiB |  0.8% → 1.3% | 75.4 KiB → 99.3 KiB | 136 → 129 | `doCall(Object)`                                  | `org.codenarc.CodeNarcRunner$_createInitialRuleSetFromFiles_closure6` |
|    +29.7% | +22.734 KiB |  0.8% → 1.3% | 76.6 KiB → 99.4 KiB | 140 → 131 | `buildRuleSet()`                                  | `org.codenarc.CodeNarcRunner`                                         |
|       new | +16.593 KiB |  0.0% → 0.2% |      0 B → 16.6 KiB |     0 → 1 | `<init>()`                                        | `org.codenarc.rule.basic.EmptyStaticInitializerRule`                  |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

| Change |        Delta |             % |                Size |         Samples | Function                                                 | Location                                                                    |
| -----: | -----------: | ------------: | ------------------: | --------------: | -------------------------------------------------------- | --------------------------------------------------------------------------- |
| -21.8% |   -1.521 MiB | 74.0% → 74.3% | 6.98 MiB → 5.46 MiB | 24,474 → 24,256 | `main(String[])`                                         | `org.codenarc.CodeNarc`                                                     |
| -21.4% |   -1.485 MiB | 73.5% → 74.3% | 6.94 MiB → 5.45 MiB | 24,467 → 24,247 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                          |
| -21.5% | -963.523 KiB | 46.4% → 46.8% | 4.38 MiB → 3.44 MiB |       107 → 116 | `loadClass(String)`                                      | `java.lang.ClassLoader`                                                     |
| -10.4% | -645.359 KiB | 64.2% → 74.0% | 6.06 MiB → 5.43 MiB | 24,410 → 24,181 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                                          |
| -10.0% | -620.328 KiB | 64.0% → 74.0% | 6.04 MiB → 5.43 MiB | 24,415 → 24,188 | `execute(String[])`                                      | `org.codenarc.CodeNarc`                                                     |
|  -9.9% | -605.546 KiB | 63.6% → 73.7% |    6 MiB → 5.41 MiB | 24,121 → 23,870 | `execute()`                                              | `org.codenarc.CodeNarcRunner`                                               |
| -86.5% |  -596.07 KiB |   7.1% → 1.2% |  689 KiB → 93.3 KiB |         35 → 28 | `<init>(Object, Object)`                                 | `groovy.lang.Closure`                                                       |
| -86.5% |  -595.39 KiB |   7.1% → 1.2% |  688 KiB → 92.8 KiB |         29 → 22 | `<clinit>()`                                             | `groovy.lang.Closure`                                                       |
| -85.5% | -588.265 KiB |   7.1% → 1.3% |   688 KiB → 100 KiB |         29 → 24 | `<clinit>()`                                             | `org.codenarc.CodeNarc`                                                     |
|  -9.0% | -514.218 KiB | 59.3% → 69.4% |   5.6 MiB → 5.1 MiB | 22,378 → 22,288 | `collectViolations(SourceCode, RuleSet)`                 | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|  -8.9% | -512.179 KiB | 59.4% → 69.5% |   5.6 MiB → 5.1 MiB | 22,420 → 22,338 | `analyze(RuleSet)`                                       | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  -8.9% | -512.093 KiB | 59.4% → 69.5% |   5.6 MiB → 5.1 MiB | 22,413 → 22,332 | `doCall(Object)`                                         | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|  -8.9% | -511.976 KiB | 59.4% → 69.5% |   5.6 MiB → 5.1 MiB | 22,415 → 22,334 | `processDirectory(String, RuleSet)`                      | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  -8.9% | -511.859 KiB | 59.3% → 69.5% |   5.6 MiB → 5.1 MiB | 22,401 → 22,319 | `processFile(String, DirectoryResults, RuleSet)`         | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  -8.8% | -511.781 KiB | 60.0% → 70.4% | 5.66 MiB → 5.16 MiB | 23,525 → 23,327 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                          |
|  -8.8% | -510.562 KiB | 60.0% → 70.3% | 5.66 MiB → 5.16 MiB | 23,385 → 23,198 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                          |
| -11.8% | -286.445 KiB | 25.1% → 28.4% | 2.36 MiB → 2.08 MiB |       127 → 114 | `visitClassEx(ClassNode)`                                | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`                     |
| -11.5% | -271.359 KiB | 24.5% → 27.8% | 2.31 MiB → 2.04 MiB |          13 → 4 | `callGetProperty(Object)`                                | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`                     |
|  -7.0% | -267.265 KiB | 39.4% → 47.1% | 3.71 MiB → 3.45 MiB | 16,504 → 16,369 | `measureRuleProcessingTime(Rule, Closure)`               | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|  -7.9% | -265.273 KiB | 34.7% → 41.1% | 3.27 MiB → 3.01 MiB |   8,056 → 7,980 | `applyTo(SourceCode)`                                    | `org.codenarc.rule.AbstractRule`                                            |

##### Standard library

|  Change |        Delta |             % |                Size |         Samples | Function                                                         | Location                                                |
| ------: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------- | ------------------------------------------------------- |
|  -21.4% |   -1.485 MiB | 73.5% → 74.3% | 6.94 MiB → 5.45 MiB | 24,467 → 24,247 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                      |
|  -21.5% | -963.523 KiB | 46.4% → 46.8% | 4.38 MiB → 3.44 MiB |       107 → 116 | `loadClass(String)`                                              | `java.lang.ClassLoader`                                 |
|  -10.4% | -645.359 KiB | 64.2% → 74.0% | 6.06 MiB → 5.43 MiB | 24,410 → 24,181 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`                      |
|  -86.5% |  -596.07 KiB |   7.1% → 1.2% |  689 KiB → 93.3 KiB |         35 → 28 | `<init>(Object, Object)`                                         | `groovy.lang.Closure`                                   |
|  -86.5% |  -595.39 KiB |   7.1% → 1.2% |  688 KiB → 92.8 KiB |         29 → 22 | `<clinit>()`                                                     | `groovy.lang.Closure`                                   |
|   -8.8% | -511.781 KiB | 60.0% → 70.4% | 5.66 MiB → 5.16 MiB | 23,525 → 23,327 | `linkToCallSite(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                      |
|   -8.8% | -510.562 KiB | 60.0% → 70.3% | 5.66 MiB → 5.16 MiB | 23,385 → 23,198 | `linkToCallSite(Object, Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                      |
|  -11.5% | -271.359 KiB | 24.5% → 27.8% | 2.31 MiB → 2.04 MiB |          13 → 4 | `callGetProperty(Object)`                                        | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |
|  -10.9% | -255.015 KiB | 24.3% → 27.8% | 2.29 MiB → 2.04 MiB |           3 → 2 | `callStatic(Class, Object, Object, Object)`                      | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |
|  -62.6% | -220.617 KiB |   3.6% → 1.8% |   352 KiB → 132 KiB |         95 → 86 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                      |
| removed | -102.187 KiB |   1.1% → 0.0% |       102 KiB → 0 B |         575 → 0 | `linkToCallSite(Object, Object, Object, int, Object)`            | `java.lang.invoke.LambdaForm$MH.0x000000040134bc00`     |
|  -86.0% |  -43.968 KiB |   0.5% → 0.1% | 51.1 KiB → 7.15 KiB |           4 → 2 | `call(Object)`                                                   | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |
|  -83.0% |   -43.64 KiB |   0.5% → 0.1% | 52.6 KiB → 8.95 KiB |         28 → 21 | `callCurrent(GroovyObject, Object)`                              | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |
|  -60.1% |  -43.125 KiB |   0.7% → 0.4% | 71.8 KiB → 28.7 KiB |         86 → 74 | `callCurrent(GroovyObject, Object, Object)`                      | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |
| removed |   -37.57 KiB |   0.4% → 0.0% |      37.6 KiB → 0 B |         899 → 0 | `linkToCallSite(Object, int, Object, Object)`                    | `java.lang.invoke.LambdaForm$MH.0x00000004013d8c00`     |
|  -39.6% |   -26.39 KiB |   0.7% → 0.5% | 66.7 KiB → 40.3 KiB |       301 → 271 | `getMetaClass()`                                                 | `org.codehaus.groovy.reflection.ClassInfo`              |
|  -73.6% |  -23.929 KiB |   0.3% → 0.1% | 32.5 KiB → 8.59 KiB |       192 → 180 | `linkToCallSite(Object, int, Object)`                            | `java.lang.invoke.Invokers$Holder`                      |
| removed |  -21.953 KiB |   0.2% → 0.0% |        22 KiB → 0 B |         606 → 0 | `linkToCallSite(Object, int, int, Object)`                       | `java.lang.invoke.LambdaForm$MH.0x00000004013ef800`     |
|  -96.6% |  -17.171 KiB |  0.2% → <0.1% |    17.8 KiB → 624 B |         18 → 13 | `callConstructor(Object, Object)`                                | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |
|  -97.2% |  -15.898 KiB |  0.2% → <0.1% |    16.4 KiB → 464 B |           5 → 8 | `callConstructor(Object, Object[])`                              | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |

##### Ours

| Change |        Delta |             % |                Size |         Samples | Function                                         | Location                                                                    |
| -----: | -----------: | ------------: | ------------------: | --------------: | ------------------------------------------------ | --------------------------------------------------------------------------- |
| -21.8% |   -1.521 MiB | 74.0% → 74.3% | 6.98 MiB → 5.46 MiB | 24,474 → 24,256 | `main(String[])`                                 | `org.codenarc.CodeNarc`                                                     |
| -10.0% | -620.328 KiB | 64.0% → 74.0% | 6.04 MiB → 5.43 MiB | 24,415 → 24,188 | `execute(String[])`                              | `org.codenarc.CodeNarc`                                                     |
|  -9.9% | -605.546 KiB | 63.6% → 73.7% |    6 MiB → 5.41 MiB | 24,121 → 23,870 | `execute()`                                      | `org.codenarc.CodeNarcRunner`                                               |
| -85.5% | -588.265 KiB |   7.1% → 1.3% |   688 KiB → 100 KiB |         29 → 24 | `<clinit>()`                                     | `org.codenarc.CodeNarc`                                                     |
|  -9.0% | -514.218 KiB | 59.3% → 69.4% |   5.6 MiB → 5.1 MiB | 22,378 → 22,288 | `collectViolations(SourceCode, RuleSet)`         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|  -8.9% | -512.179 KiB | 59.4% → 69.5% |   5.6 MiB → 5.1 MiB | 22,420 → 22,338 | `analyze(RuleSet)`                               | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  -8.9% | -512.093 KiB | 59.4% → 69.5% |   5.6 MiB → 5.1 MiB | 22,413 → 22,332 | `doCall(Object)`                                 | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|  -8.9% | -511.976 KiB | 59.4% → 69.5% |   5.6 MiB → 5.1 MiB | 22,415 → 22,334 | `processDirectory(String, RuleSet)`              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  -8.9% | -511.859 KiB | 59.3% → 69.5% |   5.6 MiB → 5.1 MiB | 22,401 → 22,319 | `processFile(String, DirectoryResults, RuleSet)` | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| -11.8% | -286.445 KiB | 25.1% → 28.4% | 2.36 MiB → 2.08 MiB |       127 → 114 | `visitClassEx(ClassNode)`                        | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`                     |
|  -7.0% | -267.265 KiB | 39.4% → 47.1% | 3.71 MiB → 3.45 MiB | 16,504 → 16,369 | `measureRuleProcessingTime(Rule, Closure)`       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|  -7.9% | -265.273 KiB | 34.7% → 41.1% | 3.27 MiB → 3.01 MiB |   8,056 → 7,980 | `applyTo(SourceCode)`                            | `org.codenarc.rule.AbstractRule`                                            |
|  -7.6% | -264.375 KiB | 35.8% → 42.5% | 3.38 MiB → 3.12 MiB | 10,978 → 10,890 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
| -10.9% | -255.015 KiB | 24.3% → 27.8% | 2.29 MiB → 2.04 MiB |           3 → 2 | `<clinit>()`                                     | `org.gmetrics.metric.MetricLevel`                                           |
| -10.9% | -255.015 KiB | 24.3% → 27.8% | 2.29 MiB → 2.04 MiB |           3 → 2 | `<init>()`                                       | `org.gmetrics.metric.AbstractMethodMetric`                                  |
| -10.9% | -255.015 KiB | 24.3% → 27.8% | 2.29 MiB → 2.04 MiB |           3 → 2 | `<init>()`                                       | `org.gmetrics.metric.abc.AbcMetric`                                         |
| -13.6% | -249.242 KiB | 19.0% → 21.1% | 1.79 MiB → 1.55 MiB |   3,409 → 3,392 | `isRuleSuppressed(Rule)`                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
| -13.5% | -248.726 KiB | 19.0% → 21.1% | 1.79 MiB → 1.55 MiB |   3,364 → 3,358 | `init()`                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
| -13.5% | -248.601 KiB | 19.0% → 21.1% | 1.79 MiB → 1.55 MiB |   3,355 → 3,352 | `init()`                                         | `org.codenarc.source.AbstractSourceCode`                                    |
| -13.5% | -248.578 KiB | 19.0% → 21.1% | 1.79 MiB → 1.55 MiB |   3,358 → 3,355 | `getAst()`                                       | `org.codenarc.source.AbstractSourceCode`                                    |

# Lock contention profile diff

Blocked 2.3ms → 4.2ms (+1.90ms, +84.0%) over 35 contentions → 32 contentions (64.7µs → 130.1µs per contention).

| Category         | Change |   Delta |      % |          Time | Contentions |
| ---------------- | -----: | ------: | -----: | ------------: | ----------: |
| Standard library | +84.0% | +1.90ms | 100.0% | 2.3ms → 4.2ms |     35 → 32 |

## Hottest functions

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

|   Change |   Delta |             % |          Time | Contentions | Function                                                 | Location                                                                    |
| -------: | ------: | ------------: | ------------: | ----------: | -------------------------------------------------------- | --------------------------------------------------------------------------- |
|  +216.2% | +0.99ms | 20.3% → 34.9% | 0.5ms → 1.5ms |     17 → 14 | `collectViolations(SourceCode, RuleSet)`                 | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|  +216.2% | +0.99ms | 20.3% → 34.9% | 0.5ms → 1.5ms |     17 → 14 | `processFile(String, DirectoryResults, RuleSet)`         | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  +216.2% | +0.99ms | 20.3% → 34.9% | 0.5ms → 1.5ms |     17 → 14 | `doCall(Object)`                                         | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|  +216.2% | +0.99ms | 20.3% → 34.9% | 0.5ms → 1.5ms |     17 → 14 | `processDirectory(String, RuleSet)`                      | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  +216.2% | +0.99ms | 20.3% → 34.9% | 0.5ms → 1.5ms |     17 → 14 | `analyze(RuleSet)`                                       | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  +194.4% | +0.96ms | 21.8% → 34.9% | 0.5ms → 1.5ms |     18 → 14 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                                          |
|  +194.4% | +0.96ms | 21.8% → 34.9% | 0.5ms → 1.5ms |     18 → 14 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                          |
|  +194.4% | +0.96ms | 21.8% → 34.9% | 0.5ms → 1.5ms |     18 → 14 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                          |
|  +194.4% | +0.96ms | 21.8% → 34.9% | 0.5ms → 1.5ms |     18 → 14 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                          |
|  +194.4% | +0.96ms | 21.8% → 34.9% | 0.5ms → 1.5ms |     18 → 14 | `execute()`                                              | `org.codenarc.CodeNarcRunner`                                               |
|  +194.4% | +0.96ms | 21.8% → 34.9% | 0.5ms → 1.5ms |     18 → 14 | `execute(String[])`                                      | `org.codenarc.CodeNarc`                                                     |
|  +194.4% | +0.96ms | 21.8% → 34.9% | 0.5ms → 1.5ms |     18 → 14 | `main(String[])`                                         | `org.codenarc.CodeNarc`                                                     |
| +1070.8% | +0.69ms |  2.9% → 18.2% | 0.1ms → 0.8ms |       3 → 4 | `visitConstructorOrMethod(MethodNode, boolean)`          | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
| +1070.8% | +0.69ms |  2.9% → 18.2% | 0.1ms → 0.8ms |       3 → 4 | `visitMethod(MethodNode)`                                | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
| +1070.8% | +0.69ms |  2.9% → 18.2% | 0.1ms → 0.8ms |       3 → 4 | `visitMethod(MethodNode)`                                | `org.codenarc.rule.AbstractAstVisitor`                                      |
| +1070.8% | +0.69ms |  2.9% → 18.2% | 0.1ms → 0.8ms |       3 → 4 | `visitClass(ClassNode)`                                  | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
| +1070.8% | +0.69ms |  2.9% → 18.2% | 0.1ms → 0.8ms |       3 → 4 | `visitClass(ClassNode)`                                  | `org.codenarc.rule.AbstractAstVisitor`                                      |
| +1070.8% | +0.69ms |  2.9% → 18.2% | 0.1ms → 0.8ms |       3 → 4 | `applyTo(SourceCode, List)`                              | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
| +1070.8% | +0.69ms |  2.9% → 18.2% | 0.1ms → 0.8ms |       3 → 4 | `applyTo(SourceCode)`                                    | `org.codenarc.rule.AbstractRule`                                            |
|  +382.8% | +0.65ms |  7.6% → 19.8% | 0.2ms → 0.8ms |       7 → 6 | `doCall(Object)`                                         | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

|  Change |   Delta |           % |         Time | Contentions | Function                                             | Location                                                                |
| ------: | ------: | ----------: | -----------: | ----------: | ---------------------------------------------------- | ----------------------------------------------------------------------- |
|  -55.0% | -0.08ms | 6.5% → 1.6% |        0.1ms |       5 → 2 | `linkToCallSite(Object, Object, long, Object)`       | `java.lang.invoke.LambdaForm$MH.0x0000000401323400`                     |
| removed | -0.03ms | 1.5% → 0.0% | 34.2µs → 0ms |       1 → 0 | `visitStatement(Statement)`                          | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`          |
| removed | -0.03ms | 1.5% → 0.0% | 34.2µs → 0ms |       1 → 0 | `super$3$applyTo(SourceCode, List)`                  | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`                |
| removed | -0.03ms | 1.5% → 0.0% | 34.2µs → 0ms |       1 → 0 | `applyTo(SourceCode, List)`                          | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`                |
| removed | -0.03ms | 1.5% → 0.0% | 34.0µs → 0ms |       1 → 0 | `writeViolation(Writer, Violation, String)`          | `org.codenarc.report.TextReportWriter`                                  |
| removed | -0.03ms | 1.5% → 0.0% | 34.0µs → 0ms |       1 → 0 | `doCall(Object)`                                     | `org.codenarc.report.TextReportWriter$_writeFileViolations_closure6`    |
| removed | -0.03ms | 1.5% → 0.0% | 34.0µs → 0ms |       1 → 0 | `writeFileViolations(Writer, FileResults)`           | `org.codenarc.report.TextReportWriter`                                  |
| removed | -0.03ms | 1.5% → 0.0% | 34.0µs → 0ms |       1 → 0 | `doCall(Object)`                                     | `org.codenarc.report.TextReportWriter$_writePackageViolations_closure2` |
| removed | -0.03ms | 1.5% → 0.0% | 34.0µs → 0ms |       1 → 0 | `writePackageViolations(Writer, Results)`            | `org.codenarc.report.TextReportWriter`                                  |
| removed | -0.03ms | 1.5% → 0.0% | 34.0µs → 0ms |       1 → 0 | `writeReport(Writer, AnalysisContext, Results)`      | `org.codenarc.report.TextReportWriter`                                  |
| removed | -0.03ms | 1.5% → 0.0% | 34.0µs → 0ms |       1 → 0 | `writeReportToStandardOut(AnalysisContext, Results)` | `org.codenarc.report.AbstractReportWriter`                              |
| removed | -0.03ms | 1.5% → 0.0% | 34.0µs → 0ms |       1 → 0 | `writeReport(AnalysisContext, Results)`              | `org.codenarc.report.AbstractReportWriter`                              |
| removed | -0.03ms | 1.5% → 0.0% | 34.0µs → 0ms |       1 → 0 | `doCall(Object)`                                     | `org.codenarc.CodeNarcRunner$_writeReports_closure8`                    |
| removed | -0.03ms | 1.5% → 0.0% | 34.0µs → 0ms |       1 → 0 | `writeReports(AnalysisContext, Results)`             | `org.codenarc.CodeNarcRunner`                                           |
| removed | -0.01ms | 0.6% → 0.0% | 13.3µs → 0ms |       1 → 0 | `visitBinaryExpression(BinaryExpression)`            | `org.codenarc.rule.convention.ParameterReassignmentAstVisitor`          |
