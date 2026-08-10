# Profile diff

6,237 samples → 8,604 samples (+2,367 samples, +38.0%).

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

# Lock contention profile diff

Blocked 2.3ms → 4.2ms (+1.90ms, +84.0%) over 35 samples → 32 samples (64.7µs → 130.1µs per sample).

| Category         | Change |   Delta |      % |          Time | Samples |
| ---------------- | -----: | ------: | -----: | ------------: | ------: |
| Standard library | +84.0% | +1.90ms | 100.0% | 2.3ms → 4.2ms | 35 → 32 |

## Hottest functions

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

|   Change |   Delta |             % |          Time | Samples | Function                                                 | Location                                                                    |
| -------: | ------: | ------------: | ------------: | ------: | -------------------------------------------------------- | --------------------------------------------------------------------------- |
|  +216.2% | +0.99ms | 20.3% → 34.9% | 0.5ms → 1.5ms | 17 → 14 | `collectViolations(SourceCode, RuleSet)`                 | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|  +216.2% | +0.99ms | 20.3% → 34.9% | 0.5ms → 1.5ms | 17 → 14 | `processFile(String, DirectoryResults, RuleSet)`         | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  +216.2% | +0.99ms | 20.3% → 34.9% | 0.5ms → 1.5ms | 17 → 14 | `doCall(Object)`                                         | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|  +216.2% | +0.99ms | 20.3% → 34.9% | 0.5ms → 1.5ms | 17 → 14 | `processDirectory(String, RuleSet)`                      | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  +216.2% | +0.99ms | 20.3% → 34.9% | 0.5ms → 1.5ms | 17 → 14 | `analyze(RuleSet)`                                       | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  +194.4% | +0.96ms | 21.8% → 34.9% | 0.5ms → 1.5ms | 18 → 14 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                                          |
|  +194.4% | +0.96ms | 21.8% → 34.9% | 0.5ms → 1.5ms | 18 → 14 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                          |
|  +194.4% | +0.96ms | 21.8% → 34.9% | 0.5ms → 1.5ms | 18 → 14 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                          |
|  +194.4% | +0.96ms | 21.8% → 34.9% | 0.5ms → 1.5ms | 18 → 14 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                          |
|  +194.4% | +0.96ms | 21.8% → 34.9% | 0.5ms → 1.5ms | 18 → 14 | `execute()`                                              | `org.codenarc.CodeNarcRunner`                                               |
|  +194.4% | +0.96ms | 21.8% → 34.9% | 0.5ms → 1.5ms | 18 → 14 | `execute(String[])`                                      | `org.codenarc.CodeNarc`                                                     |
|  +194.4% | +0.96ms | 21.8% → 34.9% | 0.5ms → 1.5ms | 18 → 14 | `main(String[])`                                         | `org.codenarc.CodeNarc`                                                     |
| +1070.8% | +0.69ms |  2.9% → 18.2% | 0.1ms → 0.8ms |   3 → 4 | `visitConstructorOrMethod(MethodNode, boolean)`          | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
| +1070.8% | +0.69ms |  2.9% → 18.2% | 0.1ms → 0.8ms |   3 → 4 | `visitMethod(MethodNode)`                                | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
| +1070.8% | +0.69ms |  2.9% → 18.2% | 0.1ms → 0.8ms |   3 → 4 | `visitMethod(MethodNode)`                                | `org.codenarc.rule.AbstractAstVisitor`                                      |
| +1070.8% | +0.69ms |  2.9% → 18.2% | 0.1ms → 0.8ms |   3 → 4 | `visitClass(ClassNode)`                                  | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
| +1070.8% | +0.69ms |  2.9% → 18.2% | 0.1ms → 0.8ms |   3 → 4 | `visitClass(ClassNode)`                                  | `org.codenarc.rule.AbstractAstVisitor`                                      |
| +1070.8% | +0.69ms |  2.9% → 18.2% | 0.1ms → 0.8ms |   3 → 4 | `applyTo(SourceCode, List)`                              | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
| +1070.8% | +0.69ms |  2.9% → 18.2% | 0.1ms → 0.8ms |   3 → 4 | `applyTo(SourceCode)`                                    | `org.codenarc.rule.AbstractRule`                                            |
|  +382.8% | +0.65ms |  7.6% → 19.8% | 0.2ms → 0.8ms |   7 → 6 | `doCall(Object)`                                         | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

|  Change |   Delta |           % |         Time | Samples | Function                                             | Location                                                                |
| ------: | ------: | ----------: | -----------: | ------: | ---------------------------------------------------- | ----------------------------------------------------------------------- |
|  -55.0% | -0.08ms | 6.5% → 1.6% |        0.1ms |   5 → 2 | `linkToCallSite(Object, Object, long, Object)`       | `java.lang.invoke.LambdaForm$MH.0x0000000401323400`                     |
| removed | -0.03ms | 1.5% → 0.0% | 34.2µs → 0ms |   1 → 0 | `visitStatement(Statement)`                          | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`          |
| removed | -0.03ms | 1.5% → 0.0% | 34.2µs → 0ms |   1 → 0 | `super$3$applyTo(SourceCode, List)`                  | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`                |
| removed | -0.03ms | 1.5% → 0.0% | 34.2µs → 0ms |   1 → 0 | `applyTo(SourceCode, List)`                          | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`                |
| removed | -0.03ms | 1.5% → 0.0% | 34.0µs → 0ms |   1 → 0 | `writeViolation(Writer, Violation, String)`          | `org.codenarc.report.TextReportWriter`                                  |
| removed | -0.03ms | 1.5% → 0.0% | 34.0µs → 0ms |   1 → 0 | `doCall(Object)`                                     | `org.codenarc.report.TextReportWriter$_writeFileViolations_closure6`    |
| removed | -0.03ms | 1.5% → 0.0% | 34.0µs → 0ms |   1 → 0 | `writeFileViolations(Writer, FileResults)`           | `org.codenarc.report.TextReportWriter`                                  |
| removed | -0.03ms | 1.5% → 0.0% | 34.0µs → 0ms |   1 → 0 | `doCall(Object)`                                     | `org.codenarc.report.TextReportWriter$_writePackageViolations_closure2` |
| removed | -0.03ms | 1.5% → 0.0% | 34.0µs → 0ms |   1 → 0 | `writePackageViolations(Writer, Results)`            | `org.codenarc.report.TextReportWriter`                                  |
| removed | -0.03ms | 1.5% → 0.0% | 34.0µs → 0ms |   1 → 0 | `writeReport(Writer, AnalysisContext, Results)`      | `org.codenarc.report.TextReportWriter`                                  |
| removed | -0.03ms | 1.5% → 0.0% | 34.0µs → 0ms |   1 → 0 | `writeReportToStandardOut(AnalysisContext, Results)` | `org.codenarc.report.AbstractReportWriter`                              |
| removed | -0.03ms | 1.5% → 0.0% | 34.0µs → 0ms |   1 → 0 | `writeReport(AnalysisContext, Results)`              | `org.codenarc.report.AbstractReportWriter`                              |
| removed | -0.03ms | 1.5% → 0.0% | 34.0µs → 0ms |   1 → 0 | `doCall(Object)`                                     | `org.codenarc.CodeNarcRunner$_writeReports_closure8`                    |
| removed | -0.03ms | 1.5% → 0.0% | 34.0µs → 0ms |   1 → 0 | `writeReports(AnalysisContext, Results)`             | `org.codenarc.CodeNarcRunner`                                           |
| removed | -0.01ms | 0.6% → 0.0% | 13.3µs → 0ms |   1 → 0 | `visitBinaryExpression(BinaryExpression)`            | `org.codenarc.rule.convention.ParameterReassignmentAstVisitor`          |
