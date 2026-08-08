# Profile diff

6,001 samples → 5,827 samples (-174 samples, -2.9%).

| Category          | Change | Delta |             % |       Samples |
| ----------------- | -----: | ----: | ------------: | ------------: |
| Compiler          |  -2.8% |   -75 | 44.3% → 44.4% | 2,661 → 2,586 |
| Native            |  -2.3% |   -39 | 28.1% → 28.2% | 1,685 → 1,646 |
| Standard library  |  -5.0% |   -76 | 25.6% → 25.0% | 1,535 → 1,459 |
| Ours              | +22.0% |   +13 |   1.0% → 1.2% |       59 → 72 |
| JIT               |  +1.7% |    +1 |          1.0% |       58 → 59 |
| Garbage collector | +66.7% |    +2 |  <0.1% → 0.1% |         3 → 5 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % | Samples | Function                                   | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------ | -------------- |
|  +48.3% |   +14 |  0.5% → 0.7% | 29 → 43 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |
|  +48.1% |   +13 |  0.4% → 0.7% | 27 → 40 | `PhaseIdealLoop::build_loop_early`         | `libjvm.dylib` |
|  +52.4% |   +11 |  0.3% → 0.5% | 21 → 32 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  +61.1% |   +11 |  0.3% → 0.5% | 18 → 29 | `Node::set_req_X`                          | `libjvm.dylib` |
|     new |   +11 |  0.0% → 0.2% |  0 → 11 | `I2C/C2I adapters(0xbb)`                   | `<unknown>`    |
| +100.0% |   +10 |  0.2% → 0.3% | 10 → 20 | `PhaseOutput::BuildOopMaps`                | `libjvm.dylib` |
|  +80.0% |    +8 |  0.2% → 0.3% | 10 → 18 | `IndexSet::initialize`                     | `libjvm.dylib` |
|  +57.1% |    +8 |  0.2% → 0.4% | 14 → 22 | `Compile::disconnect_useless_nodes`        | `libjvm.dylib` |
| +160.0% |    +8 |  0.1% → 0.2% |  5 → 13 | `ValueStack::values_do`                    | `libjvm.dylib` |
| +140.0% |    +7 |  0.1% → 0.2% |  5 → 12 | `RegionNode::is_unreachable_from_root`     | `libjvm.dylib` |
|  +50.0% |    +7 |  0.2% → 0.4% | 14 → 21 | `LIR_OpVisitState::visit`                  | `libjvm.dylib` |
| +233.3% |    +7 | <0.1% → 0.2% |  3 → 10 | `CallStaticJavaNode::Opcode`               | `libjvm.dylib` |
| +700.0% |    +7 | <0.1% → 0.1% |   1 → 8 | `TypeNode::bottom_type`                    | `libjvm.dylib` |
|  +60.0% |    +6 |  0.2% → 0.3% | 10 → 16 | `PhaseIFG::effective_degree`               | `libjvm.dylib` |
|  +75.0% |    +6 |  0.1% → 0.2% |  8 → 14 | `PhaseCFG::partial_latency_of_defs`        | `libjvm.dylib` |
|     new |    +6 |  0.0% → 0.1% |   0 → 6 | `LIRGenerator::state_for`                  | `libjvm.dylib` |
| +600.0% |    +6 | <0.1% → 0.1% |   1 → 7 | `MergeMemNode::iteration_setup`            | `libjvm.dylib` |
| +150.0% |    +6 |  0.1% → 0.2% |  4 → 10 | `I2C/C2I adapters(0xb)`                    | `<unknown>`    |
| +125.0% |    +5 |  0.1% → 0.2% |   4 → 9 | `Node::add_req`                            | `libjvm.dylib` |
| +125.0% |    +5 |  0.1% → 0.2% |   4 → 9 | `ciInstanceKlass::get_field_by_offset`     | `libjvm.dylib` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                   | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------ | -------------- |
|  +48.3% |   +14 |  0.5% → 0.7% | 29 → 43 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |
|  +48.1% |   +13 |  0.4% → 0.7% | 27 → 40 | `PhaseIdealLoop::build_loop_early`         | `libjvm.dylib` |
|  +52.4% |   +11 |  0.3% → 0.5% | 21 → 32 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  +61.1% |   +11 |  0.3% → 0.5% | 18 → 29 | `Node::set_req_X`                          | `libjvm.dylib` |
| +100.0% |   +10 |  0.2% → 0.3% | 10 → 20 | `PhaseOutput::BuildOopMaps`                | `libjvm.dylib` |
|  +80.0% |    +8 |  0.2% → 0.3% | 10 → 18 | `IndexSet::initialize`                     | `libjvm.dylib` |
|  +57.1% |    +8 |  0.2% → 0.4% | 14 → 22 | `Compile::disconnect_useless_nodes`        | `libjvm.dylib` |
| +160.0% |    +8 |  0.1% → 0.2% |  5 → 13 | `ValueStack::values_do`                    | `libjvm.dylib` |
| +140.0% |    +7 |  0.1% → 0.2% |  5 → 12 | `RegionNode::is_unreachable_from_root`     | `libjvm.dylib` |
|  +50.0% |    +7 |  0.2% → 0.4% | 14 → 21 | `LIR_OpVisitState::visit`                  | `libjvm.dylib` |
| +233.3% |    +7 | <0.1% → 0.2% |  3 → 10 | `CallStaticJavaNode::Opcode`               | `libjvm.dylib` |
| +700.0% |    +7 | <0.1% → 0.1% |   1 → 8 | `TypeNode::bottom_type`                    | `libjvm.dylib` |
|  +60.0% |    +6 |  0.2% → 0.3% | 10 → 16 | `PhaseIFG::effective_degree`               | `libjvm.dylib` |
|  +75.0% |    +6 |  0.1% → 0.2% |  8 → 14 | `PhaseCFG::partial_latency_of_defs`        | `libjvm.dylib` |
|     new |    +6 |  0.0% → 0.1% |   0 → 6 | `LIRGenerator::state_for`                  | `libjvm.dylib` |
| +600.0% |    +6 | <0.1% → 0.1% |   1 → 7 | `MergeMemNode::iteration_setup`            | `libjvm.dylib` |
| +125.0% |    +5 |  0.1% → 0.2% |   4 → 9 | `Node::add_req`                            | `libjvm.dylib` |
| +125.0% |    +5 |  0.1% → 0.2% |   4 → 9 | `ciInstanceKlass::get_field_by_offset`     | `libjvm.dylib` |
| +250.0% |    +5 | <0.1% → 0.1% |   2 → 7 | `PhaseCFG::select`                         | `libjvm.dylib` |
|  +50.0% |    +5 |  0.2% → 0.3% | 10 → 15 | `PhaseCFG::schedule_pinned_nodes`          | `libjvm.dylib` |

##### Ours

|  Change | Delta |            % | Samples | Function                                                    | Location                                                                                                       |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `doCall(Object)`                                            | `org.codenarc.util.WildcardPattern$_closure1`                                                                  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `isRuleSuppressed(Rule)`                                    | `org.codenarc.analyzer.SuppressionAnalyzer`                                                                    |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `collectViolations(SourceCode, RuleSet)`                    | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                                                 |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `getAstVisitor()`                                           | `org.codenarc.rule.AbstractAstVisitorRule`                                                                     |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `eachImportLine(SourceCode, Closure)`                       | `org.codenarc.rule.imports.AbstractImportRule`                                                                 |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `applyTo(SourceCode, List)`                                 | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`                                                       |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `super$3$visitBlockStatement(BlockStatement)`               | `org.codenarc.rule.convention.IfStatementCouldBeTernaryAstVisitor`                                             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>(Collection)`                                        | `org.codenarc.rule.FieldReferenceAstVisitor`                                                                   |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitVariableExpression(VariableExpression)`               | `org.codenarc.rule.FieldReferenceAstVisitor`                                                                   |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitConstructorOrMethod(MethodNode, boolean)`             | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`                                                     |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `codeReturnsBoolean(Statement)`                             | `org.codenarc.rule.design.BooleanMethodReturnsNullAstVisitor`                                                  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitConstructorCallExpression(ConstructorCallExpression)` | `org.codenarc.rule.unnecessary.UnnecessaryInstantiationAstVisitor`                                             |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `isMethodCallOnObject(Expression, String)`                  | `org.codenarc.util.AstUtil`                                                                                    |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitClassEx(ClassNode)`                                   | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`                                          |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `collectAllPrivateMethods(ModuleNode)`                      | `org.codenarc.rule.unused.UnusedPrivateMethodRule`                                                             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `isChainedMethodCallOnDifferentLine(MethodCallExpression)`  | `org.codenarc.rule.formatting.IndentationAstVisitor`                                                           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitMethodCallExpression(MethodCallExpression)`           | `org.codenarc.rule.unnecessary.UnnecessaryGetterAstVisitor`                                                    |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `doCall(Object)`                                            | `org.codenarc.rule.formatting.IndentationAstVisitor$_recordMethodColumnAndSourceLineForClosureBlocks_closure6` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitMethod(MethodNode)`                                   | `org.gmetrics.metric.cyclomatic.CyclomaticComplexityAstVisitor`                                                |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `processMethodNode(MethodNode, String)`                     | `org.codenarc.rule.formatting.SpaceBeforeOpeningBraceAstVisitor`                                               |

##### JIT

|  Change | Delta |            % | Samples | Function                  | Location    |
| ------: | ----: | -----------: | ------: | ------------------------- | ----------- |
|     new |   +11 |  0.0% → 0.2% |  0 → 11 | `I2C/C2I adapters(0xbb)`  | `<unknown>` |
| +150.0% |    +6 |  0.1% → 0.2% |  4 → 10 | `I2C/C2I adapters(0xb)`   | `<unknown>` |
|  +26.7% |    +4 |  0.2% → 0.3% | 15 → 19 | `itable stub`             | `<unknown>` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `I2C/C2I adapters(0xbbb)` | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `call_stub`               | `<unknown>` |

##### Standard library

| Change | Delta |            % | Samples | Function                                          | Location                                                             |
| -----: | ----: | -----------: | ------: | ------------------------------------------------- | -------------------------------------------------------------------- |
|    new |    +3 |  0.0% → 0.1% |   0 → 3 | `intUnbox(Object)`                                | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation` |
|    new |    +2 | 0.0% → <0.1% |   0 → 2 | `getInterfaces()`                                 | `org.codehaus.groovy.ast.ClassNode`                                  |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `linkToCallSite(Object, Object)`                  | `java.lang.invoke.Invokers$Holder`                                   |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `isCase(Object, Object)`                          | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                  |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitExpressionStatement(ExpressionStatement)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                    |
|  +6.7% |    +1 |  0.2% → 0.3% | 15 → 16 | `equals(Object)`                                  | `java.lang.String`                                                   |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitClosureExpression(ClosureExpression)`       | `org.codehaus.groovy.ast.CodeVisitorSupport`                         |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `callGetProperty(Object)`                         | `org.codehaus.groovy.runtime.callsite.GetEffectivePogoPropertySite`  |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitField(FieldNode)`                           | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                    |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `compareEqual(Object, Object)`                    | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                  |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `linkToCallSite(Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x000000b8010c8400`                  |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `callConstructor(Object, Object, Object, Object)` | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`              |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `valueOf(int)`                                    | `java.lang.Integer`                                                  |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % |  Samples | Function                               | Location       |
| ------: | ----: | -----------: | -------: | -------------------------------------- | -------------- |
|  -19.2% |   -23 |  2.0% → 1.7% | 120 → 97 | `PhaseChaitin::Split`                  | `libjvm.dylib` |
|  -22.2% |   -22 |  1.6% → 1.3% |  99 → 77 | `Node::dominates`                      | `libjvm.dylib` |
|  -34.1% |   -14 |  0.7% → 0.5% |  41 → 27 | `PhaseChaitin::elide_copy`             | `libjvm.dylib` |
|  -44.8% |   -13 |  0.5% → 0.3% |  29 → 16 | `Type::cmp`                            | `libjvm.dylib` |
|  -31.0% |   -13 |  0.7% → 0.5% |  42 → 29 | `ciObjectFactory::get_metadata`        | `libjvm.dylib` |
|  -18.8% |   -12 |  1.1% → 0.9% |  64 → 52 | `IndexSetIterator::advance_and_next`   | `libjvm.dylib` |
|  -92.3% |   -12 | 0.2% → <0.1% |   13 → 1 | `I2C/C2I adapters(0xbaa)`              | `<unknown>`    |
|  -41.7% |   -10 |  0.4% → 0.2% |  24 → 14 | `PhaseLive::add_liveout`               | `libjvm.dylib` |
|  -35.7% |   -10 |  0.5% → 0.3% |  28 → 18 | `NodeHash::hash_find_insert`           | `libjvm.dylib` |
|  -38.5% |   -10 |  0.4% → 0.3% |  26 → 16 | `PhaseIterGVN::add_users_to_worklist`  | `libjvm.dylib` |
|  -26.7% |    -8 |  0.5% → 0.4% |  30 → 22 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
|  -21.2% |    -7 |  0.5% → 0.4% |  33 → 26 | `Matcher::xform`                       | `libjvm.dylib` |
|  -77.8% |    -7 | 0.1% → <0.1% |    9 → 2 | `LinearScanWalker::split_before_usage` | `libjvm.dylib` |
|  -33.3% |    -6 |  0.3% → 0.2% |  18 → 12 | `PhaseIterGVN::transform_old`          | `libjvm.dylib` |
|   -9.5% |    -6 |         1.0% |  63 → 57 | `PhaseChaitin::build_ifg_physical`     | `libjvm.dylib` |
|  -54.5% |    -6 |  0.2% → 0.1% |   11 → 5 | `Matcher::Label_Root`                  | `libjvm.dylib` |
|  -33.3% |    -6 |  0.3% → 0.2% |  18 → 12 | `Node::is_CFG`                         | `libjvm.dylib` |
| removed |    -6 |  0.1% → 0.0% |    6 → 0 | `Scheduling::ComputeUseCount`          | `libjvm.dylib` |
|  -33.3% |    -6 |  0.3% → 0.2% |  18 → 12 | `LinearScan::assign_reg_num`           | `libjvm.dylib` |
|  -20.8% |    -5 |  0.4% → 0.3% |  24 → 19 | `Unique_Node_List::remove`             | `libjvm.dylib` |

##### Compiler

|  Change | Delta |            % |  Samples | Function                                  | Location       |
| ------: | ----: | -----------: | -------: | ----------------------------------------- | -------------- |
|  -19.2% |   -23 |  2.0% → 1.7% | 120 → 97 | `PhaseChaitin::Split`                     | `libjvm.dylib` |
|  -22.2% |   -22 |  1.6% → 1.3% |  99 → 77 | `Node::dominates`                         | `libjvm.dylib` |
|  -34.1% |   -14 |  0.7% → 0.5% |  41 → 27 | `PhaseChaitin::elide_copy`                | `libjvm.dylib` |
|  -44.8% |   -13 |  0.5% → 0.3% |  29 → 16 | `Type::cmp`                               | `libjvm.dylib` |
|  -31.0% |   -13 |  0.7% → 0.5% |  42 → 29 | `ciObjectFactory::get_metadata`           | `libjvm.dylib` |
|  -18.8% |   -12 |  1.1% → 0.9% |  64 → 52 | `IndexSetIterator::advance_and_next`      | `libjvm.dylib` |
|  -41.7% |   -10 |  0.4% → 0.2% |  24 → 14 | `PhaseLive::add_liveout`                  | `libjvm.dylib` |
|  -35.7% |   -10 |  0.5% → 0.3% |  28 → 18 | `NodeHash::hash_find_insert`              | `libjvm.dylib` |
|  -38.5% |   -10 |  0.4% → 0.3% |  26 → 16 | `PhaseIterGVN::add_users_to_worklist`     | `libjvm.dylib` |
|  -26.7% |    -8 |  0.5% → 0.4% |  30 → 22 | `PhaseIdealLoop::Dominators`              | `libjvm.dylib` |
|  -21.2% |    -7 |  0.5% → 0.4% |  33 → 26 | `Matcher::xform`                          | `libjvm.dylib` |
|  -77.8% |    -7 | 0.1% → <0.1% |    9 → 2 | `LinearScanWalker::split_before_usage`    | `libjvm.dylib` |
|  -33.3% |    -6 |  0.3% → 0.2% |  18 → 12 | `PhaseIterGVN::transform_old`             | `libjvm.dylib` |
|   -9.5% |    -6 |         1.0% |  63 → 57 | `PhaseChaitin::build_ifg_physical`        | `libjvm.dylib` |
|  -54.5% |    -6 |  0.2% → 0.1% |   11 → 5 | `Matcher::Label_Root`                     | `libjvm.dylib` |
|  -33.3% |    -6 |  0.3% → 0.2% |  18 → 12 | `Node::is_CFG`                            | `libjvm.dylib` |
| removed |    -6 |  0.1% → 0.0% |    6 → 0 | `Scheduling::ComputeUseCount`             | `libjvm.dylib` |
|  -33.3% |    -6 |  0.3% → 0.2% |  18 → 12 | `LinearScan::assign_reg_num`              | `libjvm.dylib` |
|  -20.8% |    -5 |  0.4% → 0.3% |  24 → 19 | `Unique_Node_List::remove`                | `libjvm.dylib` |
|  -83.3% |    -5 | 0.1% → <0.1% |    6 → 1 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |

##### Ours

|  Change | Delta |            % | Samples | Function                                          | Location                                                                                    |
| ------: | ----: | -----------: | ------: | ------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `<init>()`                                        | `org.codenarc.rule.AbstractAstVisitor`                                                      |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `getMetaClass()`                                  | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`                                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getAst()`                                        | `org.codenarc.source.AbstractSourceCode`                                                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `applyTo(SourceCode)`                             | `org.codenarc.rule.AbstractRule`                                                            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `measureRuleProcessingTime(Rule, Closure)`        | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                              |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitMethod(MethodNode)`                         | `org.codenarc.rule.AbstractAstVisitor`                                                      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `matches(String)`                                 | `org.codenarc.util.WildcardPattern`                                                         |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitClosureExpression(ClosureExpression)`       | `org.codenarc.rule.formatting.ClosureStatementOnOpeningLineOfMultipleLineClosureAstVisitor` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>(String, String)`                          | `org.codenarc.rule.ClassReferenceAstVisitor`                                                |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `processSourceLine(String, int)`                  | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`                             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `addViolationIfDuplicate(Expression, boolean)`    | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                          |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitVariableExpression(VariableExpression)`     | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`                                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getViolations()`                                 | `org.codenarc.rule.AbstractAstVisitor`                                                      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.groovyism.UseCollectManyAstVisitor`                                      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>(SourceCode)`                              | `org.codenarc.analyzer.SuppressionAnalyzer`                                                 |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitIfElse(IfStatement)`                        | `org.codenarc.rule.formatting.SpaceAfterIfAstVisitor`                                       |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `doCall(ImportNode)`                              | `org.codenarc.rule.convention.NoJavaUtilDateAstVisitor$_visitImports_closure1`              |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `isReady()`                                       | `org.codenarc.rule.AbstractRule`                                                            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitExpressionStatement(ExpressionStatement)`   | `org.codenarc.rule.groovyism.UseCollectNestedAstVisitor`                                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getMetaClass()`                                  | `org.codenarc.rule.convention.CouldBeElvisRule`                                             |

##### JIT

|  Change | Delta |            % | Samples | Function                         | Location    |
| ------: | ----: | -----------: | ------: | -------------------------------- | ----------- |
|  -92.3% |   -12 | 0.2% → <0.1% |  13 → 1 | `I2C/C2I adapters(0xbaa)`        | `<unknown>` |
|  -66.7% |    -4 | 0.1% → <0.1% |   6 → 2 | `I2C/C2I adapters(0xba)`         | `<unknown>` |
|  -33.3% |    -4 |  0.2% → 0.1% |  12 → 8 | `vtable stub`                    | `<unknown>` |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `I2C/C2I adapters(0xab)`         | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbbbbab)`     | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbbbbabbbbb)` | `<unknown>` |

##### Standard library

|  Change | Delta |            % | Samples | Function                                          | Location                                                             |
| ------: | ----: | -----------: | ------: | ------------------------------------------------- | -------------------------------------------------------------------- |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `visitBlockStatement(BlockStatement)`             | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                    |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `visitMethodCallExpression(MethodCallExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport`                         |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `iterator()`                                      | `java.util.ArrayList`                                                |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `hasNext()`                                       | `java.util.ArrayList$Itr`                                            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitBinaryExpression(BinaryExpression)`         | `org.codehaus.groovy.ast.CodeVisitorSupport`                         |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `add(Object)`                                     | `java.util.HashSet`                                                  |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `booleanUnbox(Object)`                            | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitListExpression(ListExpression)`             | `org.codehaus.groovy.ast.CodeVisitorSupport`                         |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `compareLessThan(Object, Object)`                 | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                  |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>()`                                        | `java.util.HashSet`                                                  |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

| Change | Delta |           % |   Samples | Function                                              | Location                                                        |
| -----: | ----: | ----------: | --------: | ----------------------------------------------------- | --------------------------------------------------------------- |
|    new |  +260 | 0.0% → 4.5% |   0 → 260 | `linkToCallSite(Object, Object, long, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000b801320400`             |
|    new |  +115 | 0.0% → 2.0% |   0 → 115 | `linkToCallSite(Object, Object)`                      | `java.lang.invoke.LambdaForm$MH.0x000000b8010c8400`             |
|    new |   +36 | 0.0% → 0.6% |    0 → 36 | `linkToCallSite(Object, int, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000b8013d6800`             |
|    new |   +26 | 0.0% → 0.4% |    0 → 26 | `linkToCallSite(Object, Object, int, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000b8010d6400`             |
| +16.1% |   +22 | 2.3% → 2.7% | 137 → 159 | `PhaseCFG::do_global_code_motion`                     | `libjvm.dylib`                                                  |
|    new |   +21 | 0.0% → 0.4% |    0 → 21 | `linkToCallSite(Object, int, int, Object)`            | `java.lang.invoke.LambdaForm$MH.0x000000b8013f0c00`             |
|    new |   +19 | 0.0% → 0.3% |    0 → 19 | `linkToCallSite(Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000b80131c800`             |
|    new |   +19 | 0.0% → 0.3% |    0 → 19 | `linkToCallSite(Object, Object, Object, int, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b80134c800`             |
| +29.3% |   +17 | 1.0% → 1.3% |   58 → 75 | `Compile::call_generator`                             | `libjvm.dylib`                                                  |
| +31.3% |   +15 | 0.8% → 1.1% |   48 → 63 | `LIR_Assembler::emit_lir_list`                        | `libjvm.dylib`                                                  |
| +29.4% |   +15 | 0.8% → 1.1% |   51 → 66 | `getAstVisitor()`                                     | `org.codenarc.rule.AbstractAstVisitorRule`                      |
| +10.7% |   +14 | 2.2% → 2.5% | 131 → 145 | `PhaseCFG::global_code_motion`                        | `libjvm.dylib`                                                  |
| +38.9% |   +14 | 0.6% → 0.9% |   36 → 50 | `PhaseIdealLoop::build_loop_early`                    | `libjvm.dylib`                                                  |
| +28.0% |   +14 | 0.8% → 1.1% |   50 → 64 | `LIR_Assembler::emit_code`                            | `libjvm.dylib`                                                  |
|  +5.9% |   +14 | 3.9% → 4.3% | 236 → 250 | `isRuleSuppressed(Rule)`                              | `org.codenarc.analyzer.SuppressionAnalyzer`                     |
| +73.7% |   +14 | 0.3% → 0.6% |   19 → 33 | `visitClassComplete(ClassNode)`                       | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor` |
| +92.9% |   +13 | 0.2% → 0.5% |   14 → 27 | `PhaseIFG::effective_degree`                          | `libjvm.dylib`                                                  |
|  +8.1% |   +12 | 2.5% → 2.7% | 148 → 160 | `PhaseOutput::Output`                                 | `libjvm.dylib`                                                  |
| +21.4% |   +12 | 0.9% → 1.2% |   56 → 68 | `PhaseOutput::fill_buffer`                            | `libjvm.dylib`                                                  |
| +80.0% |   +12 | 0.2% → 0.5% |   15 → 27 | `PhaseIdealLoop::split_if_with_blocks_pre`            | `libjvm.dylib`                                                  |

##### Compiler

|  Change | Delta |           % |   Samples | Function                                      | Location       |
| ------: | ----: | ----------: | --------: | --------------------------------------------- | -------------- |
|  +16.1% |   +22 | 2.3% → 2.7% | 137 → 159 | `PhaseCFG::do_global_code_motion`             | `libjvm.dylib` |
|  +29.3% |   +17 | 1.0% → 1.3% |   58 → 75 | `Compile::call_generator`                     | `libjvm.dylib` |
|  +31.3% |   +15 | 0.8% → 1.1% |   48 → 63 | `LIR_Assembler::emit_lir_list`                | `libjvm.dylib` |
|  +10.7% |   +14 | 2.2% → 2.5% | 131 → 145 | `PhaseCFG::global_code_motion`                | `libjvm.dylib` |
|  +38.9% |   +14 | 0.6% → 0.9% |   36 → 50 | `PhaseIdealLoop::build_loop_early`            | `libjvm.dylib` |
|  +28.0% |   +14 | 0.8% → 1.1% |   50 → 64 | `LIR_Assembler::emit_code`                    | `libjvm.dylib` |
|  +92.9% |   +13 | 0.2% → 0.5% |   14 → 27 | `PhaseIFG::effective_degree`                  | `libjvm.dylib` |
|   +8.1% |   +12 | 2.5% → 2.7% | 148 → 160 | `PhaseOutput::Output`                         | `libjvm.dylib` |
|  +21.4% |   +12 | 0.9% → 1.2% |   56 → 68 | `PhaseOutput::fill_buffer`                    | `libjvm.dylib` |
|  +80.0% |   +12 | 0.2% → 0.5% |   15 → 27 | `PhaseIdealLoop::split_if_with_blocks_pre`    | `libjvm.dylib` |
| +109.1% |   +12 | 0.2% → 0.4% |   11 → 23 | `BlockBegin::iterate_preorder`                | `libjvm.dylib` |
|  +33.3% |   +11 | 0.5% → 0.8% |   33 → 44 | `Matcher::Label_Root`                         | `libjvm.dylib` |
|  +30.6% |   +11 | 0.6% → 0.8% |   36 → 47 | `ciObjectFactory::create_new_metadata`        | `libjvm.dylib` |
|  +78.6% |   +11 | 0.2% → 0.4% |   14 → 25 | `LIR_OpVisitState::visit`                     | `libjvm.dylib` |
|  +71.4% |   +10 | 0.2% → 0.4% |   14 → 24 | `PhaseIFG::Compute_Effective_Degree`          | `libjvm.dylib` |
|  +14.1% |   +10 | 1.2% → 1.4% |   71 → 81 | `Matcher::match_tree`                         | `libjvm.dylib` |
|  +11.8% |   +10 | 1.4% → 1.6% |   85 → 95 | `Compilation::emit_code_body`                 | `libjvm.dylib` |
| +166.7% |   +10 | 0.1% → 0.3% |    6 → 16 | `MethodLiveness::BasicBlock::get_liveness_at` | `libjvm.dylib` |
|   +6.7% |    +9 | 2.2% → 2.5% | 135 → 144 | `PhaseIdealLoop::build_loop_late`             | `libjvm.dylib` |
|   +2.2% |    +9 | 6.8% → 7.2% | 409 → 418 | `PhaseIdealLoop::build_and_optimize`          | `libjvm.dylib` |

##### Ours

|  Change | Delta |            % |   Samples | Function                                          | Location                                                                                     |
| ------: | ----: | -----------: | --------: | ------------------------------------------------- | -------------------------------------------------------------------------------------------- |
|  +29.4% |   +15 |  0.8% → 1.1% |   51 → 66 | `getAstVisitor()`                                 | `org.codenarc.rule.AbstractAstVisitorRule`                                                   |
|   +5.9% |   +14 |  3.9% → 4.3% | 236 → 250 | `isRuleSuppressed(Rule)`                          | `org.codenarc.analyzer.SuppressionAnalyzer`                                                  |
|  +73.7% |   +14 |  0.3% → 0.6% |   19 → 33 | `visitClassComplete(ClassNode)`                   | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`                              |
|   +5.2% |   +12 |  3.9% → 4.2% | 232 → 244 | `init()`                                          | `org.codenarc.source.AbstractSourceCode`                                                     |
|   +5.2% |   +12 |  3.9% → 4.2% | 232 → 244 | `init()`                                          | `org.codenarc.analyzer.SuppressionAnalyzer`                                                  |
|  +63.2% |   +12 |  0.3% → 0.5% |   19 → 31 | `doCall(Object)`                                  | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor$_visitClassComplete_closure1` |
|   +4.3% |   +10 |  3.9% → 4.2% | 235 → 245 | `getAst()`                                        | `org.codenarc.source.AbstractSourceCode`                                                     |
|  +16.1% |   +10 |  1.0% → 1.2% |   62 → 72 | `super$3$applyTo(SourceCode, List)`               | `org.codenarc.rule.formatting.IndentationRule`                                               |
| +200.0% |   +10 |  0.1% → 0.3% |    5 → 15 | `calculate(MethodNode, SourceCode)`               | `org.gmetrics.metric.abc.AbcMetric`                                                          |
| +500.0% |   +10 | <0.1% → 0.2% |    2 → 12 | `visitClassComplete(ClassNode)`                   | `org.codenarc.rule.formatting.ClassEndsWithBlankLineAstVisitor`                              |
|   +3.5% |    +9 |  4.3% → 4.6% | 260 → 269 | `doCall(Object)`                                  | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`                   |
|  +14.3% |    +9 |  1.0% → 1.2% |   63 → 72 | `applyTo(SourceCode, List)`                       | `org.codenarc.rule.formatting.IndentationRule`                                               |
| +100.0% |    +9 |  0.1% → 0.3% |    9 → 18 | `visitConstructorOrMethod(MethodNode, boolean)`   | `org.codenarc.rule.unnecessary.UnnecessaryDefInMethodDeclarationAstVisitor`                  |
|  +32.1% |    +9 |  0.5% → 0.6% |   28 → 37 | `visitBinaryExpression(BinaryExpression)`         | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                           |
|  +90.0% |    +9 |  0.2% → 0.3% |   10 → 19 | `super$2$visitBinaryExpression(BinaryExpression)` | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                           |
|  +29.6% |    +8 |  0.4% → 0.6% |   27 → 35 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                                         |
|  +38.9% |    +7 |  0.3% → 0.4% |   18 → 25 | `processSourceLine(String, int)`                  | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`                              |
|  +28.6% |    +6 |  0.3% → 0.5% |   21 → 27 | `visitStatement(Statement)`                       | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`                               |
|  +50.0% |    +6 |  0.2% → 0.3% |   12 → 18 | `checkNode(ASTNode)`                              | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`                               |
| +200.0% |    +6 | <0.1% → 0.2% |     3 → 9 | `checkImport(String, int, Set, List)`             | `org.codenarc.rule.imports.DuplicateImportRule`                                              |

##### JIT

|   Change | Delta |            % | Samples | Function                  | Location    |
| -------: | ----: | -----------: | ------: | ------------------------- | ----------- |
| +1000.0% |   +10 | <0.1% → 0.2% |  1 → 11 | `I2C/C2I adapters(0xbb)`  | `<unknown>` |
|  +150.0% |    +6 |  0.1% → 0.2% |  4 → 10 | `I2C/C2I adapters(0xb)`   | `<unknown>` |
|   +26.7% |    +4 |  0.2% → 0.3% | 15 → 19 | `itable stub`             | `<unknown>` |
|  +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `I2C/C2I adapters(0xbbb)` | `<unknown>` |
|      new |    +1 | 0.0% → <0.1% |   0 → 1 | `call_stub`               | `<unknown>` |

##### Standard library

| Change | Delta |            % |   Samples | Function                                                      | Location                                                            |
| -----: | ----: | -----------: | --------: | ------------------------------------------------------------- | ------------------------------------------------------------------- |
|    new |  +260 |  0.0% → 4.5% |   0 → 260 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000b801320400`                 |
|    new |  +115 |  0.0% → 2.0% |   0 → 115 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x000000b8010c8400`                 |
|    new |   +36 |  0.0% → 0.6% |    0 → 36 | `linkToCallSite(Object, int, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000b8013d6800`                 |
|    new |   +26 |  0.0% → 0.4% |    0 → 26 | `linkToCallSite(Object, Object, int, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000b8010d6400`                 |
|    new |   +21 |  0.0% → 0.4% |    0 → 21 | `linkToCallSite(Object, int, int, Object)`                    | `java.lang.invoke.LambdaForm$MH.0x000000b8013f0c00`                 |
|    new |   +19 |  0.0% → 0.3% |    0 → 19 | `linkToCallSite(Object, long, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000b80131c800`                 |
|    new |   +19 |  0.0% → 0.3% |    0 → 19 | `linkToCallSite(Object, Object, Object, int, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000b80134c800`                 |
|    new |   +12 |  0.0% → 0.2% |    0 → 12 | `linkToCallSite(Object, Object, int, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b80138e400`                 |
|    new |    +9 |  0.0% → 0.2% |     0 → 9 | `linkToCallSite(Object, Object, Object, Object, int, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b8013fc400`                 |
|    new |    +9 |  0.0% → 0.2% |     0 → 9 | `linkToCallSite(Object, Object, int, int, Object)`            | `java.lang.invoke.LambdaForm$MH.0x000000b801951c00`                 |
| +14.0% |    +7 |  0.8% → 1.0% |   50 → 57 | `newInstance()`                                               | `java.lang.Class`                                                   |
|  +0.9% |    +5 | 9.6% → 10.0% | 576 → 581 | `visitMethod(MethodNode)`                                     | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
| +26.3% |    +5 |  0.3% → 0.4% |   19 → 24 | `call(Object, Object)`                                        | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`             |
|    new |    +5 |  0.0% → 0.1% |     0 → 5 | `callGroovyObjectGetProperty(Object)`                         | `org.codehaus.groovy.runtime.callsite.GetEffectivePogoPropertySite` |
| +13.8% |    +4 |  0.5% → 0.6% |   29 → 33 | `loadClass(String)`                                           | `java.lang.ClassLoader`                                             |
| +17.4% |    +4 |  0.4% → 0.5% |   23 → 27 | `doPrivileged(PrivilegedAction)`                              | `java.security.AccessController`                                    |
| +33.3% |    +4 |  0.2% → 0.3% |   12 → 16 | `newInstance(Object[])`                                       | `java.lang.reflect.Constructor`                                     |
|  +1.3% |    +4 |  5.0% → 5.2% | 299 → 303 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                 |
| +15.4% |    +4 |  0.4% → 0.5% |   26 → 30 | `callCurrent(GroovyObject, Object, Object, Object)`           | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`             |
| +66.7% |    +4 |  0.1% → 0.2% |    6 → 10 | `callConstructor(Object, Object, Object, Object, Object)`     | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`             |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |       Samples | Function                                                 | Location                                            |
| ------: | ----: | ------------: | ------------: | -------------------------------------------------------- | --------------------------------------------------- |
| removed |  -285 |   4.7% → 0.0% |       285 → 0 | `linkToCallSite(Object, Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000f001320400` |
|   -4.0% |  -139 | 58.0% → 57.3% | 3,479 → 3,340 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib`                                      |
|   -3.6% |  -122 | 57.2% → 56.8% | 3,430 → 3,308 | `CompileBroker::invoke_compiler_on_method`               | `libjvm.dylib`                                      |
|   -4.0% |  -112 | 46.4% → 45.9% | 2,785 → 2,673 | `Compile::Compile`                                       | `libjvm.dylib`                                      |
|   -4.0% |  -111 | 46.4% → 45.9% | 2,787 → 2,676 | `C2Compiler::compile_method`                             | `libjvm.dylib`                                      |
| removed |  -106 |   1.8% → 0.0% |       106 → 0 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f0010c8400` |
|   -7.8% |   -84 | 18.0% → 17.1% |   1,082 → 998 | `Compile::Optimize`                                      | `libjvm.dylib`                                      |
|   -7.6% |   -57 | 12.5% → 11.9% |     753 → 696 | `PhaseChaitin::Register_Allocate`                        | `libjvm.dylib`                                      |
|  -14.6% |   -55 |   6.3% → 5.5% |     377 → 322 | `PhaseIterGVN::transform_old`                            | `libjvm.dylib`                                      |
|   -2.5% |   -55 | 36.3% → 36.4% | 2,178 → 2,123 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                  |
|  -13.7% |   -54 |   6.6% → 5.9% |     395 → 341 | `PhaseIterGVN::optimize`                                 | `libjvm.dylib`                                      |
|   -2.4% |   -52 | 36.5% → 36.7% | 2,191 → 2,139 | `main(String[])`                                         | `org.codenarc.CodeNarc`                             |
|   -2.4% |   -52 | 36.4% → 36.6% | 2,187 → 2,135 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                  |
|   -2.4% |   -52 | 36.3% → 36.5% | 2,177 → 2,125 | `execute(String[])`                                      | `org.codenarc.CodeNarc`                             |
|   -2.4% |   -51 | 36.0% → 36.2% | 2,162 → 2,111 | `execute()`                                              | `org.codenarc.CodeNarcRunner`                       |
|   -3.1% |   -51 | 27.7% → 27.6% | 1,662 → 1,611 | `measureRuleProcessingTime(Rule, Closure)`               | `org.codenarc.analyzer.AbstractSourceAnalyzer`      |
|   -2.4% |   -50 | 34.4% → 34.5% | 2,063 → 2,013 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|   -2.2% |   -45 | 34.7% → 35.0% | 2,082 → 2,037 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
|   -2.2% |   -45 | 33.6% → 33.8% | 2,017 → 1,972 | `analyze(RuleSet)`                                       | `org.codenarc.analyzer.FilesystemSourceAnalyzer`    |
|   -2.2% |   -45 | 33.4% → 33.7% | 2,007 → 1,962 | `processFile(String, DirectoryResults, RuleSet)`         | `org.codenarc.analyzer.FilesystemSourceAnalyzer`    |

##### Compiler

| Change | Delta |             % |       Samples | Function                                    | Location       |
| -----: | ----: | ------------: | ------------: | ------------------------------------------- | -------------- |
|  -4.0% |  -139 | 58.0% → 57.3% | 3,479 → 3,340 | `CompileBroker::compiler_thread_loop`       | `libjvm.dylib` |
|  -3.6% |  -122 | 57.2% → 56.8% | 3,430 → 3,308 | `CompileBroker::invoke_compiler_on_method`  | `libjvm.dylib` |
|  -4.0% |  -112 | 46.4% → 45.9% | 2,785 → 2,673 | `Compile::Compile`                          | `libjvm.dylib` |
|  -4.0% |  -111 | 46.4% → 45.9% | 2,787 → 2,676 | `C2Compiler::compile_method`                | `libjvm.dylib` |
|  -7.8% |   -84 | 18.0% → 17.1% |   1,082 → 998 | `Compile::Optimize`                         | `libjvm.dylib` |
|  -7.6% |   -57 | 12.5% → 11.9% |     753 → 696 | `PhaseChaitin::Register_Allocate`           | `libjvm.dylib` |
| -14.6% |   -55 |   6.3% → 5.5% |     377 → 322 | `PhaseIterGVN::transform_old`               | `libjvm.dylib` |
| -13.7% |   -54 |   6.6% → 5.9% |     395 → 341 | `PhaseIterGVN::optimize`                    | `libjvm.dylib` |
|  -3.1% |   -41 |         22.3% | 1,339 → 1,298 | `Compile::Code_Gen`                         | `libjvm.dylib` |
| -16.8% |   -30 |   3.0% → 2.6% |     179 → 149 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
| -16.7% |   -30 |   3.0% → 2.6% |     180 → 150 | `GraphBuilder::iterate_all_blocks`          | `libjvm.dylib` |
| -14.4% |   -27 |   3.1% → 2.8% |     188 → 161 | `GraphBuilder::GraphBuilder`                | `libjvm.dylib` |
| -15.3% |   -25 |   2.7% → 2.4% |     163 → 138 | `GraphBuilder::invoke`                      | `libjvm.dylib` |
| -23.5% |   -24 |   1.7% → 1.3% |      102 → 78 | `MemNode::all_controls_dominate`            | `libjvm.dylib` |
| -24.2% |   -24 |   1.6% → 1.3% |       99 → 75 | `InitializeNode::detect_init_independence`  | `libjvm.dylib` |
| -24.0% |   -24 |   1.7% → 1.3% |      100 → 76 | `InitializeNode::can_capture_store`         | `libjvm.dylib` |
| -15.7% |   -24 |   2.5% → 2.2% |     153 → 129 | `GraphBuilder::try_inline`                  | `libjvm.dylib` |
| -22.1% |   -23 |   1.7% → 1.4% |      104 → 81 | `StoreNode::Ideal`                          | `libjvm.dylib` |
| -22.2% |   -22 |   1.6% → 1.3% |       99 → 77 | `Node::dominates`                           | `libjvm.dylib` |
| -15.0% |   -22 |   2.4% → 2.1% |     147 → 125 | `GraphBuilder::try_inline_full`             | `libjvm.dylib` |

##### Ours

| Change | Delta |             % |       Samples | Function                                                    | Location                                                                                          |
| -----: | ----: | ------------: | ------------: | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  -2.4% |   -52 | 36.5% → 36.7% | 2,191 → 2,139 | `main(String[])`                                            | `org.codenarc.CodeNarc`                                                                           |
|  -2.4% |   -52 | 36.3% → 36.5% | 2,177 → 2,125 | `execute(String[])`                                         | `org.codenarc.CodeNarc`                                                                           |
|  -2.4% |   -51 | 36.0% → 36.2% | 2,162 → 2,111 | `execute()`                                                 | `org.codenarc.CodeNarcRunner`                                                                     |
|  -3.1% |   -51 | 27.7% → 27.6% | 1,662 → 1,611 | `measureRuleProcessingTime(Rule, Closure)`                  | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                                    |
|  -2.2% |   -45 | 33.6% → 33.8% | 2,017 → 1,972 | `analyze(RuleSet)`                                          | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                                                  |
|  -2.2% |   -45 | 33.4% → 33.7% | 2,007 → 1,962 | `processFile(String, DirectoryResults, RuleSet)`            | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                                                  |
|  -2.2% |   -45 | 33.6% → 33.8% | 2,016 → 1,971 | `doCall(Object)`                                            | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`                       |
|  -2.2% |   -45 | 33.6% → 33.8% | 2,016 → 1,971 | `processDirectory(String, RuleSet)`                         | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                                                  |
|  -1.9% |   -37 | 33.2% → 33.6% | 1,994 → 1,957 | `collectViolations(SourceCode, RuleSet)`                    | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                                    |
| -40.0% |   -12 |   0.5% → 0.3% |       30 → 18 | `visitConstantExpression(ConstantExpression)`               | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`                                      |
| -32.4% |   -11 |   0.6% → 0.4% |       34 → 23 | `visitClass(ClassNode)`                                     | `org.codenarc.rule.AbstractMethodVisitor`                                                         |
|  -1.5% |   -10 | 11.2% → 11.4% |     674 → 664 | `visitMethod(MethodNode)`                                   | `org.codenarc.rule.AbstractAstVisitor`                                                            |
| -60.0% |    -9 |   0.2% → 0.1% |        15 → 6 | `suppressException(Class, Closure)`                         | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`                                      |
| -66.7% |    -8 |   0.2% → 0.1% |        12 → 4 | `applyTo(SourceCode, List)`                                 | `org.codenarc.rule.imports.MisorderedStaticImportsRule`                                           |
| -50.0% |    -8 |   0.3% → 0.1% |        16 → 8 | `doCall(Object)`                                            | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor$_processMethodOrConstructorCall_closure3` |
| -88.9% |    -8 |  0.1% → <0.1% |         9 → 1 | `visitClassEx(ClassNode)`                                   | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`                             |
| -32.0% |    -8 |   0.4% → 0.3% |       25 → 17 | `doCall(Object)`                                            | `org.codenarc.report.TextReportWriter$_writeFileViolations_closure6`                              |
| -70.0% |    -7 |   0.2% → 0.1% |        10 → 3 | `addOrderingViolations(SourceCode, String, String, String)` | `org.codenarc.rule.imports.MisorderedStaticImportsRule`                                           |
| -43.8% |    -7 |   0.3% → 0.2% |        16 → 9 | `visitClassEx(ClassNode)`                                   | `org.codenarc.rule.naming.ConfusingMethodNameAstVisitor`                                          |
| -53.8% |    -7 |   0.2% → 0.1% |        13 → 6 | `doCall(Object)`                                            | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor$_visitConstantExpression_closure1`    |

##### JIT

|  Change | Delta |            % | Samples | Function                         | Location    |
| ------: | ----: | -----------: | ------: | -------------------------------- | ----------- |
|  -92.3% |   -12 | 0.2% → <0.1% |  13 → 1 | `I2C/C2I adapters(0xbaa)`        | `<unknown>` |
|  -66.7% |    -4 | 0.1% → <0.1% |   6 → 2 | `I2C/C2I adapters(0xba)`         | `<unknown>` |
|  -33.3% |    -4 |  0.2% → 0.1% |  12 → 8 | `vtable stub`                    | `<unknown>` |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `I2C/C2I adapters(0xab)`         | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbbbbab)`     | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbbbbabbbbb)` | `<unknown>` |

##### Standard library

|  Change | Delta |             % |       Samples | Function                                                 | Location                                            |
| ------: | ----: | ------------: | ------------: | -------------------------------------------------------- | --------------------------------------------------- |
| removed |  -285 |   4.7% → 0.0% |       285 → 0 | `linkToCallSite(Object, Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000f001320400` |
| removed |  -106 |   1.8% → 0.0% |       106 → 0 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f0010c8400` |
|   -2.5% |   -55 | 36.3% → 36.4% | 2,178 → 2,123 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                  |
|   -2.4% |   -52 | 36.4% → 36.6% | 2,187 → 2,135 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                  |
|   -2.4% |   -50 | 34.4% → 34.5% | 2,063 → 2,013 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|   -2.2% |   -45 | 34.7% → 35.0% | 2,082 → 2,037 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| removed |   -35 |   0.6% → 0.0% |        35 → 0 | `linkToCallSite(Object, int, Object, Object)`            | `java.lang.invoke.LambdaForm$MH.0x000000f0013d9800` |
| removed |   -25 |   0.4% → 0.0% |        25 → 0 | `linkToCallSite(Object, long, Object)`                   | `java.lang.invoke.LambdaForm$MH.0x000000f00131c800` |
| removed |   -24 |   0.4% → 0.0% |        24 → 0 | `linkToCallSite(Object, Object, Object, int, Object)`    | `java.lang.invoke.LambdaForm$MH.0x000000f00134c800` |
| removed |   -23 |   0.4% → 0.0% |        23 → 0 | `linkToCallSite(Object, int, int, Object)`               | `java.lang.invoke.LambdaForm$MH.0x000000f0013f5000` |
| removed |   -21 |   0.3% → 0.0% |        21 → 0 | `linkToCallSite(Object, Object, int, Object)`            | `java.lang.invoke.LambdaForm$MH.0x000000f0010d6400` |
|  -11.7% |   -19 |   2.7% → 2.5% |     163 → 144 | `visitMethodCallExpression(MethodCallExpression)`        | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  -10.4% |   -13 |   2.1% → 1.9% |     125 → 112 | `visitArgumentlistExpression(ArgumentListExpression)`    | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  -34.2% |   -13 |   0.6% → 0.4% |       38 → 25 | `linkToCallSite(Object, int, Object)`                    | `java.lang.invoke.Invokers$Holder`                  |
|   -1.6% |   -12 | 12.1% → 12.3% |     728 → 716 | `visitClass(ClassNode)`                                  | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|   -7.0% |   -11 |   2.6% → 2.5% |     157 → 146 | `visitBinaryExpression(BinaryExpression)`                | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  -10.9% |   -10 |   1.5% → 1.4% |       92 → 82 | `visitDeclarationExpression(DeclarationExpression)`      | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  -40.0% |   -10 |   0.4% → 0.3% |       25 → 15 | `visitPropertyExpression(PropertyExpression)`            | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  -11.8% |   -10 |   1.4% → 1.3% |       85 → 75 | `visitClosureExpression(ClosureExpression)`              | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
| removed |   -10 |   0.2% → 0.0% |        10 → 0 | `linkToCallSite(Object, Object, int, int, Object)`       | `java.lang.invoke.LambdaForm$MH.0x000000f00191dc00` |
