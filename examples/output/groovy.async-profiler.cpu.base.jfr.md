# Sampling profile

Collected 6,001 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Compiler          | 44.3% |   2,661 |
| Native            | 28.1% |   1,685 |
| Standard library  | 25.6% |   1,535 |
| Ours              |  1.0% |      59 |
| JIT               |  1.0% |      58 |
| Garbage collector | <0.1% |       3 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

#### Categories

##### Compiler

|    % | Samples | Function                                    | Location       |
| ---: | ------: | ------------------------------------------- | -------------- |
| 2.0% |     120 | `PhaseChaitin::Split`                       | `libjvm.dylib` |
| 1.6% |      99 | `Node::dominates`                           | `libjvm.dylib` |
| 1.1% |      64 | `IndexSetIterator::advance_and_next`        | `libjvm.dylib` |
| 1.0% |      63 | `PhaseChaitin::build_ifg_physical`          | `libjvm.dylib` |
| 0.7% |      42 | `ciObjectFactory::get_metadata`             | `libjvm.dylib` |
| 0.7% |      41 | `PhaseChaitin::elide_copy`                  | `libjvm.dylib` |
| 0.7% |      41 | `PhaseAggressiveCoalesce::insert_copies`    | `libjvm.dylib` |
| 0.6% |      35 | `Compile::identify_useful_nodes`            | `libjvm.dylib` |
| 0.5% |      33 | `Matcher::xform`                            | `libjvm.dylib` |
| 0.5% |      30 | `PhaseIdealLoop::Dominators`                | `libjvm.dylib` |
| 0.5% |      29 | `PhaseIdealLoop::is_dominator`              | `libjvm.dylib` |
| 0.5% |      29 | `PhaseChaitin::gather_lrg_masks`            | `libjvm.dylib` |
| 0.5% |      29 | `PhaseLive::compute`                        | `libjvm.dylib` |
| 0.5% |      29 | `Type::cmp`                                 | `libjvm.dylib` |
| 0.5% |      28 | `NodeHash::hash_find_insert`                | `libjvm.dylib` |
| 0.4% |      27 | `PhaseIdealLoop::build_loop_late`           | `libjvm.dylib` |
| 0.4% |      27 | `PhaseIdealLoop::build_loop_early`          | `libjvm.dylib` |
| 0.4% |      26 | `PhaseIterGVN::add_users_to_worklist`       | `libjvm.dylib` |
| 0.4% |      25 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
| 0.4% |      24 | `Unique_Node_List::remove`                  | `libjvm.dylib` |

##### Ours

|     % | Samples | Function                                          | Location                                                                                    |
| ----: | ------: | ------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| <0.1% |       3 | `<init>()`                                        | `org.codenarc.rule.AbstractAstVisitor`                                                      |
| <0.1% |       2 | `visitClass(ClassNode)`                           | `org.codenarc.rule.AbstractAstVisitor`                                                      |
| <0.1% |       2 | `getMetaClass()`                                  | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`                                    |
| <0.1% |       1 | `init()`                                          | `org.codenarc.source.AbstractSourceCode`                                                    |
| <0.1% |       1 | `getAst()`                                        | `org.codenarc.source.AbstractSourceCode`                                                    |
| <0.1% |       1 | `applyTo(SourceCode)`                             | `org.codenarc.rule.AbstractRule`                                                            |
| <0.1% |       1 | `measureRuleProcessingTime(Rule, Closure)`        | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                              |
| <0.1% |       1 | `visitMethod(MethodNode)`                         | `org.codenarc.rule.AbstractAstVisitor`                                                      |
| <0.1% |       1 | `isViolationSuppressed(Violation)`                | `org.codenarc.analyzer.SuppressionAnalyzer`                                                 |
| <0.1% |       1 | `matches(String)`                                 | `org.codenarc.util.WildcardPattern`                                                         |
| <0.1% |       1 | `visitClosureExpression(ClosureExpression)`       | `org.codenarc.rule.formatting.ClosureStatementOnOpeningLineOfMultipleLineClosureAstVisitor` |
| <0.1% |       1 | `<init>(String, String)`                          | `org.codenarc.rule.ClassReferenceAstVisitor`                                                |
| <0.1% |       1 | `processSourceLine(String, int)`                  | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`                             |
| <0.1% |       1 | `visitConstructorOrMethod(MethodNode, boolean)`   | `org.codenarc.rule.unnecessary.UnnecessaryDefInMethodDeclarationAstVisitor`                 |
| <0.1% |       1 | `addViolationIfDuplicate(Expression, boolean)`    | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                          |
| <0.1% |       1 | `visitVariableExpression(VariableExpression)`     | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`                                    |
| <0.1% |       1 | `getViolations()`                                 | `org.codenarc.rule.AbstractAstVisitor`                                                      |
| <0.1% |       1 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.groovyism.UseCollectManyAstVisitor`                                      |
| <0.1% |       1 | `<init>(SourceCode)`                              | `org.codenarc.analyzer.SuppressionAnalyzer`                                                 |
| <0.1% |       1 | `visitIfElse(IfStatement)`                        | `org.codenarc.rule.formatting.SpaceAfterIfAstVisitor`                                       |

##### JIT

|     % | Samples | Function                         | Location    |
| ----: | ------: | -------------------------------- | ----------- |
|  0.2% |      15 | `itable stub`                    | `<unknown>` |
|  0.2% |      13 | `I2C/C2I adapters(0xbb)`         | `<unknown>` |
|  0.2% |      12 | `vtable stub`                    | `<unknown>` |
|  0.1% |       6 | `I2C/C2I adapters(0xbbb)`        | `<unknown>` |
|  0.1% |       4 | `I2C/C2I adapters(0xb)`          | `<unknown>` |
| <0.1% |       2 | `I2C/C2I adapters(0xbbbbb)`      | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbbbba)`      | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbeabeabeb)`  | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbbbb)`       | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbbbbab)`     | `<unknown>` |
| <0.1% |       1 | `zero_blocks`                    | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbbbbabbbbb)` | `<unknown>` |

##### Standard library

|     % | Samples | Function                                          | Location                                                             |
| ----: | ------: | ------------------------------------------------- | -------------------------------------------------------------------- |
|  0.2% |      15 | `equals(Object)`                                  | `java.lang.String`                                                   |
| <0.1% |       3 | `next()`                                          | `java.util.ArrayList$Itr`                                            |
| <0.1% |       3 | `visitMethodCallExpression(MethodCallExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport`                         |
| <0.1% |       2 | `<init>(Object, Object)`                          | `groovy.lang.Closure`                                                |
| <0.1% |       2 | `hasNext()`                                       | `java.util.ArrayList$Itr`                                            |
| <0.1% |       2 | `visitBlockStatement(BlockStatement)`             | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                    |
| <0.1% |       1 | `iterator()`                                      | `java.util.ArrayList`                                                |
| <0.1% |       1 | `linkToCallSite(Object, Object, Object)`          | `java.lang.invoke.Invokers$Holder`                                   |
| <0.1% |       1 | `visitBinaryExpression(BinaryExpression)`         | `org.codehaus.groovy.ast.CodeVisitorSupport`                         |
| <0.1% |       1 | `visitAnnotations(AnnotatedNode)`                 | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                    |
| <0.1% |       1 | `add(Object)`                                     | `java.util.HashSet`                                                  |
| <0.1% |       1 | `booleanUnbox(Object)`                            | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation` |
| <0.1% |       1 | `visitListExpression(ListExpression)`             | `org.codehaus.groovy.ast.CodeVisitorSupport`                         |
| <0.1% |       1 | `compareLessThan(Object, Object)`                 | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                  |
| <0.1% |       1 | `<init>()`                                        | `java.util.HashSet`                                                  |
| <0.1% |       1 | `valueOf(boolean)`                                | `java.lang.Boolean`                                                  |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `equals(Object)` (`java.lang.String`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 46.7% |       7 | `java.lang.String:1852` |
| 33.3% |       5 | `java.lang.String:1850` |
| 20.0% |       3 | `java.lang.String:1847` |

##### `<init>()` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Location                                  |
| ----: | ------: | ----------------------------------------- |
| 66.7% |       2 | `org.codenarc.rule.AbstractAstVisitor:36` |
| 33.3% |       1 | `org.codenarc.rule.AbstractAstVisitor:39` |

##### `next()` (`java.util.ArrayList$Itr`)

|     % | Samples | Location                       |
| ----: | ------: | ------------------------------ |
| 66.7% |       2 | `java.util.ArrayList$Itr:1054` |
| 33.3% |       1 | `java.util.ArrayList$Itr:1049` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codehaus.groovy.ast.CodeVisitorSupport`)

|     % | Samples | Location                                         |
| ----: | ------: | ------------------------------------------------ |
| 33.3% |       1 | `org.codehaus.groovy.ast.CodeVisitorSupport:186` |
| 33.3% |       1 | `org.codehaus.groovy.ast.CodeVisitorSupport:185` |
| 33.3% |       1 | `org.codehaus.groovy.ast.CodeVisitorSupport:184` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Location                                   |
| ----: | ------: | ------------------------------------------ |
| 50.0% |       1 | `org.codenarc.rule.AbstractAstVisitor:131` |
| 50.0% |       1 | `org.codenarc.rule.AbstractAstVisitor:130` |

##### `<init>(Object, Object)` (`groovy.lang.Closure`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |       2 | `groovy.lang.Closure:218` |

##### `hasNext()` (`java.util.ArrayList$Itr`)

|      % | Samples | Location                       |
| -----: | ------: | ------------------------------ |
| 100.0% |       2 | `java.util.ArrayList$Itr:1044` |

##### `visitBlockStatement(BlockStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % | Samples | Location                                              |
| ----: | ------: | ----------------------------------------------------- |
| 50.0% |       1 | `org.codehaus.groovy.ast.ClassCodeVisitorSupport:168` |
| 50.0% |       1 | `org.codehaus.groovy.ast.ClassCodeVisitorSupport:167` |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|      % | Samples | Location                                    |
| -----: | ------: | ------------------------------------------- |
| 100.0% |       1 | `org.codenarc.source.AbstractSourceCode:91` |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

|      % | Samples | Location                                    |
| -----: | ------: | ------------------------------------------- |
| 100.0% |       1 | `org.codenarc.source.AbstractSourceCode:86` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       1 | `org.codenarc.rule.AbstractRule:143` |

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|      % | Samples | Location                                          |
| -----: | ------: | ------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.analyzer.AbstractSourceAnalyzer:59` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|      % | Samples | Location                                   |
| -----: | ------: | ------------------------------------------ |
| 100.0% |       1 | `org.codenarc.rule.AbstractAstVisitor:146` |

##### `isViolationSuppressed(Violation)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Location                                       |
| -----: | ------: | ---------------------------------------------- |
| 100.0% |       1 | `org.codenarc.analyzer.SuppressionAnalyzer:57` |

##### `matches(String)` (`org.codenarc.util.WildcardPattern`)

|      % | Samples | Location                               |
| -----: | ------: | -------------------------------------- |
| 100.0% |       1 | `org.codenarc.util.WildcardPattern:72` |

##### `visitClosureExpression(ClosureExpression)` (`org.codenarc.rule.formatting.ClosureStatementOnOpeningLineOfMultipleLineClosureAstVisitor`)

|      % | Samples | Location                                                                                       |
| -----: | ------: | ---------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.formatting.ClosureStatementOnOpeningLineOfMultipleLineClosureAstVisitor:43` |

##### `<init>(String, String)` (`org.codenarc.rule.ClassReferenceAstVisitor`)

|      % | Samples | Location                                        |
| -----: | ------: | ----------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.ClassReferenceAstVisitor:53` |

##### `processSourceLine(String, int)` (`org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`)

|      % | Samples | Location                                                           |
| -----: | ------: | ------------------------------------------------------------------ |
| 100.0% |       1 | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor:81` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.unnecessary.UnnecessaryDefInMethodDeclarationAstVisitor`)

|      % | Samples | Location                                                                       |
| -----: | ------: | ------------------------------------------------------------------------------ |
| 100.0% |       1 | `org.codenarc.rule.unnecessary.UnnecessaryDefInMethodDeclarationAstVisitor:55` |

##### `addViolationIfDuplicate(Expression, boolean)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

|      % | Samples | Location                                               |
| -----: | ------: | ------------------------------------------------------ |
| 100.0% |       1 | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor:132` |

##### `visitVariableExpression(VariableExpression)` (`org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`)

|      % | Samples | Location                                                     |
| -----: | ------: | ------------------------------------------------------------ |
| 100.0% |       1 | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor:138` |

##### `getViolations()` (`org.codenarc.rule.AbstractAstVisitor`)

|      % | Samples | Location                                   |
| -----: | ------: | ------------------------------------------ |
| 100.0% |       1 | `org.codenarc.rule.AbstractAstVisitor:181` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.groovyism.UseCollectManyAstVisitor`)

|      % | Samples | Location                                                  |
| -----: | ------: | --------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.groovyism.UseCollectManyAstVisitor:50` |

##### `<init>(SourceCode)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Location                                       |
| -----: | ------: | ---------------------------------------------- |
| 100.0% |       1 | `org.codenarc.analyzer.SuppressionAnalyzer:31` |

##### `visitIfElse(IfStatement)` (`org.codenarc.rule.formatting.SpaceAfterIfAstVisitor`)

|      % | Samples | Location                                                 |
| -----: | ------: | -------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.formatting.SpaceAfterIfAstVisitor:38` |

##### `iterator()` (`java.util.ArrayList`)

|      % | Samples | Location                   |
| -----: | ------: | -------------------------- |
| 100.0% |       1 | `java.util.ArrayList:1029` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codehaus.groovy.ast.CodeVisitorSupport`)

|      % | Samples | Location                                         |
| -----: | ------: | ------------------------------------------------ |
| 100.0% |       1 | `org.codehaus.groovy.ast.CodeVisitorSupport:201` |

##### `visitAnnotations(AnnotatedNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|      % | Samples | Location                                             |
| -----: | ------: | ---------------------------------------------------- |
| 100.0% |       1 | `org.codehaus.groovy.ast.ClassCodeVisitorSupport:57` |

##### `add(Object)` (`java.util.HashSet`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.HashSet:229` |

##### `booleanUnbox(Object)` (`org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation`)

|      % | Samples | Location                                                                |
| -----: | ------: | ----------------------------------------------------------------------- |
| 100.0% |       1 | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation:86` |

##### `visitListExpression(ListExpression)` (`org.codehaus.groovy.ast.CodeVisitorSupport`)

|      % | Samples | Location                                         |
| -----: | ------: | ------------------------------------------------ |
| 100.0% |       1 | `org.codehaus.groovy.ast.CodeVisitorSupport:254` |

##### `compareLessThan(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|      % | Samples | Location                                                |
| -----: | ------: | ------------------------------------------------------- |
| 100.0% |       1 | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter:782` |

##### `<init>()` (`java.util.HashSet`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.HashSet:107` |

##### `valueOf(boolean)` (`java.lang.Boolean`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.lang.Boolean:179` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |     120 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Node::dominates` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |      99 | `MemNode::all_controls_dominate` | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 25.0% |      16 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |
| 10.9% |       7 | `PhaseChaitin::Simplify`           | `libjvm.dylib` |
| 10.9% |       7 | `PhaseIFG::SquareUp`               | `libjvm.dylib` |
|  9.4% |       6 | `PhaseLive::add_liveout`           | `libjvm.dylib` |
|  9.4% |       6 | `PhaseIFG::re_insert`              | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      63 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|     % | Samples | Caller                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 26.2% |      11 | `ciBytecodeStream::get_method`         | `libjvm.dylib` |
| 19.0% |       8 | `ciEnv::get_klass_by_index_impl`       | `libjvm.dylib` |
| 11.9% |       5 | `ciMethodHandle::get_vmtarget`         | `libjvm.dylib` |
|  7.1% |       3 | `ciObjectFactory::create_new_metadata` | `libjvm.dylib` |
|  7.1% |       3 | `ciEnv::get_klass_by_name_impl`        | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|     % | Samples | Caller                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 95.1% |      39 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  4.9% |       2 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      41 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Compile::identify_useful_nodes` (`libjvm.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 65.7% |      23 | `PhaseRemoveUseless::PhaseRemoveUseless`      | `libjvm.dylib` |
| 34.3% |      12 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |      33 | `Matcher::match` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      30 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::is_dominator` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 82.8% |      24 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep`      | `libjvm.dylib` |
| 10.3% |       3 | `PhaseIdealLoop::compute_early_ctrl`               | `libjvm.dylib` |
|  3.4% |       1 | `PhaseIdealLoop::build_loop_late_post_work`        | `libjvm.dylib` |
|  3.4% |       1 | `PhaseIdealLoop::loop_predication_follow_branches` | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      29 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      29 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Type::cmp` (`libjvm.dylib`)

|    % | Samples | Caller                  | Location       |
| ---: | ------: | ----------------------- | -------------- |
| 3.4% |       1 | `MemNode::Ideal_common` | `libjvm.dylib` |

##### `NodeHash::hash_find_insert` (`libjvm.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 78.6% |      22 | `PhaseIterGVN::transform_old`    | `libjvm.dylib` |
| 10.7% |       3 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |
|  7.1% |       2 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |
|  3.6% |       1 | `GraphKit::create_and_xform_if`  | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      27 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      27 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIterGVN::add_users_to_worklist` (`libjvm.dylib`)

|     % | Samples | Caller                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 61.5% |      16 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |
| 11.5% |       3 | `PhaseIterGVN::PhaseIterGVN`               | `libjvm.dylib` |
|  3.8% |       1 | `PhaseIdealLoop::do_split_if`              | `libjvm.dylib` |
|  3.8% |       1 | `PhaseMacroExpand::expand_allocate_common` | `libjvm.dylib` |
|  3.8% |       1 | `IfNode::dominated_by`                     | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|     % | Samples | Caller                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 88.0% |      22 | `PhaseIdealLoop::build_loop_late`    | `libjvm.dylib` |
| 12.0% |       3 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Unique_Node_List::remove` (`libjvm.dylib`)

|     % | Samples | Caller                                    | Location       |
| ----: | ------: | ----------------------------------------- | -------------- |
| 91.7% |      22 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |
|  8.3% |       2 | `Node::remove_dead_region`                | `libjvm.dylib` |

##### `itable stub` (`<unknown>`)

|    % | Samples | Caller                      | Location                                   |
| ---: | ------: | --------------------------- | ------------------------------------------ |
| 6.7% |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `equals(Object)` (`java.lang.String`)

|    % | Samples | Caller                                      | Location                    |
| ---: | ------: | ------------------------------------------- | --------------------------- |
| 6.7% |       1 | `classNodeImplementsType(ClassNode, Class)` | `org.codenarc.util.AstUtil` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|    % | Samples | Caller                                                      | Location                                                |
| ---: | ------: | ----------------------------------------------------------- | ------------------------------------------------------- |
| 7.7% |       1 | `addOrderingViolations(SourceCode, String, String, String)` | `org.codenarc.rule.imports.MisorderedStaticImportsRule` |

##### `vtable stub` (`<unknown>`)

|     % | Samples | Caller                                            | Location                                          |
| ----: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 16.7% |       2 | `visitExpressionStatement(ExpressionStatement)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |
|  8.3% |       1 | `visitMethodCallExpression(MethodCallExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport`      |

##### `I2C/C2I adapters(0xbbb)` (`<unknown>`)

|     % | Samples | Caller            | Location                                                     |
| ----: | ------: | ----------------- | ------------------------------------------------------------ |
| 16.7% |       1 | `getAstVisitor()` | `org.codenarc.rule.exceptions.ThrowNullPointerExceptionRule` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|     % | Samples | Caller                    | Location                                          |
| ----: | ------: | ------------------------- | ------------------------------------------------- |
| 25.0% |       1 | `visitMethod(MethodNode)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `<init>()` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Caller     | Location                                                 |
| ----: | ------: | ---------- | -------------------------------------------------------- |
| 33.3% |       1 | `<init>()` | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor` |
| 33.3% |       1 | `<init>()` | `org.codenarc.rule.basic.EqualsAndHashCodeAstVisitor`    |
| 33.3% |       1 | `<init>()` | `org.codenarc.rule.design.OptionalFieldAstVisitor`       |

##### `next()` (`java.util.ArrayList$Itr`)

|     % | Samples | Caller                                   | Location                                       |
| ----: | ------: | ---------------------------------------- | ---------------------------------------------- |
| 33.3% |       1 | `collectViolations(SourceCode, RuleSet)` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codehaus.groovy.ast.CodeVisitorSupport`)

|     % | Samples | Caller                                                    | Location                                                                    |
| ----: | ------: | --------------------------------------------------------- | --------------------------------------------------------------------------- |
| 33.3% |       1 | `super$2$visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.FieldReferenceAstVisitor`                                |
| 33.3% |       1 | `super$2$visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.unnecessary.UnnecessarySafeNavigationOperatorAstVisitor` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|      % | Samples | Caller                      | Location                                   |
| -----: | ------: | --------------------------- | ------------------------------------------ |
| 100.0% |       2 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `<init>(Object, Object)` (`groovy.lang.Closure`)

|     % | Samples | Caller                                                               | Location                                                                                    |
| ----: | ------: | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 50.0% |       1 | `<init>(Object, Object, Reference, Reference, Reference, Reference)` | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`                  |
| 50.0% |       1 | `<init>(Object, Object, Reference, Reference)`                       | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor$_visitConstructorOrMethod_closure1` |

##### `hasNext()` (`java.util.ArrayList$Itr`)

|     % | Samples | Caller                  | Location                                 |
| ----: | ------: | ----------------------- | ---------------------------------------- |
| 50.0% |       1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractFieldVisitor` |

##### `visitBlockStatement(BlockStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % | Samples | Caller                                        | Location                                                        |
| ----: | ------: | --------------------------------------------- | --------------------------------------------------------------- |
| 50.0% |       1 | `super$3$visitBlockStatement(BlockStatement)` | `org.codenarc.rule.formatting.BlockEndsWithBlankLineAstVisitor` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.unnecessary.UnnecessaryDefInMethodDeclarationAstVisitor`)

|      % | Samples | Caller                    | Location                                          |
| -----: | ------: | ------------------------- | ------------------------------------------------- |
| 100.0% |       1 | `visitMethod(MethodNode)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `getViolations()` (`org.codenarc.rule.AbstractAstVisitor`)

|      % | Samples | Caller                      | Location                                   |
| -----: | ------: | --------------------------- | ------------------------------------------ |
| 100.0% |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `iterator()` (`java.util.ArrayList`)

|      % | Samples | Caller                                                    | Location                    |
| -----: | ------: | --------------------------------------------------------- | --------------------------- |
| 100.0% |       1 | `isMethodCall(MethodCallExpression, List, List, Integer)` | `org.codenarc.util.AstUtil` |

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                   | Location                                                                       |
| -----: | ------: | ------------------------ | ------------------------------------------------------------------------------ |
| 100.0% |       1 | `doCall(Object, Object)` | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor$_checkMethods_closure1` |

##### `visitAnnotations(AnnotatedNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|      % | Samples | Caller                                          | Location                                          |
| -----: | ------: | ----------------------------------------------- | ------------------------------------------------- |
| 100.0% |       1 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `booleanUnbox(Object)` (`org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation`)

|      % | Samples | Caller                                          | Location                                                        |
| -----: | ------: | ----------------------------------------------- | --------------------------------------------------------------- |
| 100.0% |       1 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.BlockEndsWithBlankLineAstVisitor` |

##### `compareLessThan(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|      % | Samples | Caller                      | Location                                                 |
| -----: | ------: | --------------------------- | -------------------------------------------------------- |
| 100.0% |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.ConsecutiveBlankLinesRule` |

##### `<init>()` (`java.util.HashSet`)

|      % | Samples | Caller     | Location                               |
| -----: | ------: | ---------- | -------------------------------------- |
| 100.0% |       1 | `<init>()` | `org.codenarc.rule.AbstractAstVisitor` |

##### `valueOf(boolean)` (`java.lang.Boolean`)

|      % | Samples | Caller                                | Location                                                                     |
| -----: | ------: | ------------------------------------- | ---------------------------------------------------------------------------- |
| 100.0% |       1 | `methodReturnsCollection(MethodNode)` | `org.codenarc.rule.design.ReturnsNullInsteadOfEmptyCollectionRuleAstVisitor` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                 | Location                                                                    |
| ----: | ------: | -------------------------------------------------------- | --------------------------------------------------------------------------- |
| 58.0% |   3,479 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib`                                                              |
| 57.2% |   3,430 | `CompileBroker::invoke_compiler_on_method`               | `libjvm.dylib`                                                              |
| 46.4% |   2,787 | `C2Compiler::compile_method`                             | `libjvm.dylib`                                                              |
| 46.4% |   2,785 | `Compile::Compile`                                       | `libjvm.dylib`                                                              |
| 36.5% |   2,191 | `main(String[])`                                         | `org.codenarc.CodeNarc`                                                     |
| 36.4% |   2,187 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                          |
| 36.3% |   2,178 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                                          |
| 36.3% |   2,177 | `execute(String[])`                                      | `org.codenarc.CodeNarc`                                                     |
| 36.0% |   2,162 | `execute()`                                              | `org.codenarc.CodeNarcRunner`                                               |
| 34.7% |   2,082 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                          |
| 34.4% |   2,063 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                          |
| 33.6% |   2,017 | `analyze(RuleSet)`                                       | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 33.6% |   2,016 | `doCall(Object)`                                         | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
| 33.6% |   2,016 | `processDirectory(String, RuleSet)`                      | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 33.4% |   2,007 | `processFile(String, DirectoryResults, RuleSet)`         | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 33.2% |   1,994 | `collectViolations(SourceCode, RuleSet)`                 | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 27.7% |   1,662 | `measureRuleProcessingTime(Rule, Closure)`               | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 22.3% |   1,339 | `Compile::Code_Gen`                                      | `libjvm.dylib`                                                              |
| 21.1% |   1,265 | `doCall(Object)`                                         | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
| 19.0% |   1,143 | `applyTo(SourceCode)`                                    | `org.codenarc.rule.AbstractRule`                                            |

#### Categories

##### Compiler

|     % | Samples | Function                                   | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 58.0% |   3,479 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
| 57.2% |   3,430 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
| 46.4% |   2,787 | `C2Compiler::compile_method`               | `libjvm.dylib` |
| 46.4% |   2,785 | `Compile::Compile`                         | `libjvm.dylib` |
| 22.3% |   1,339 | `Compile::Code_Gen`                        | `libjvm.dylib` |
| 18.0% |   1,082 | `Compile::Optimize`                        | `libjvm.dylib` |
| 12.5% |     753 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
| 10.4% |     626 | `Compilation::compile_method`              | `libjvm.dylib` |
| 10.4% |     626 | `Compilation::Compilation`                 | `libjvm.dylib` |
|  9.2% |     552 | `Compilation::compile_java_method`         | `libjvm.dylib` |
|  8.5% |     508 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|  6.8% |     411 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
|  6.8% |     409 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
|  6.6% |     395 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
|  6.3% |     377 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |
|  4.1% |     246 | `Matcher::match`                           | `libjvm.dylib` |
|  3.9% |     233 | `Compilation::build_hir`                   | `libjvm.dylib` |
|  3.7% |     225 | `Compilation::emit_lir`                    | `libjvm.dylib` |
|  3.4% |     205 | `Compile::optimize_loops`                  | `libjvm.dylib` |
|  3.1% |     188 | `GraphBuilder::GraphBuilder`               | `libjvm.dylib` |

##### Ours

|     % | Samples | Function                                         | Location                                                                    |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------------------------------- |
| 36.5% |   2,191 | `main(String[])`                                 | `org.codenarc.CodeNarc`                                                     |
| 36.3% |   2,177 | `execute(String[])`                              | `org.codenarc.CodeNarc`                                                     |
| 36.0% |   2,162 | `execute()`                                      | `org.codenarc.CodeNarcRunner`                                               |
| 33.6% |   2,017 | `analyze(RuleSet)`                               | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 33.6% |   2,016 | `doCall(Object)`                                 | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
| 33.6% |   2,016 | `processDirectory(String, RuleSet)`              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 33.4% |   2,007 | `processFile(String, DirectoryResults, RuleSet)` | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 33.2% |   1,994 | `collectViolations(SourceCode, RuleSet)`         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 27.7% |   1,662 | `measureRuleProcessingTime(Rule, Closure)`       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 21.1% |   1,265 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
| 19.0% |   1,143 | `applyTo(SourceCode)`                            | `org.codenarc.rule.AbstractRule`                                            |
| 15.9% |     953 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
| 14.8% |     887 | `visitClass(ClassNode)`                          | `org.codenarc.rule.AbstractAstVisitor`                                      |
| 11.2% |     674 | `visitMethod(MethodNode)`                        | `org.codenarc.rule.AbstractAstVisitor`                                      |
|  4.3% |     260 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`  |
|  3.9% |     236 | `isRuleSuppressed(Rule)`                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
|  3.9% |     235 | `getAst()`                                       | `org.codenarc.source.AbstractSourceCode`                                    |
|  3.9% |     232 | `init()`                                         | `org.codenarc.source.AbstractSourceCode`                                    |
|  3.9% |     232 | `init()`                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
|  1.1% |      67 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractSharedAstVisitorRule`                            |

##### JIT

|     % | Samples | Function                         | Location    |
| ----: | ------: | -------------------------------- | ----------- |
|  0.2% |      15 | `itable stub`                    | `<unknown>` |
|  0.2% |      13 | `I2C/C2I adapters(0xbb)`         | `<unknown>` |
|  0.2% |      12 | `vtable stub`                    | `<unknown>` |
|  0.1% |       6 | `I2C/C2I adapters(0xbbb)`        | `<unknown>` |
|  0.1% |       4 | `I2C/C2I adapters(0xb)`          | `<unknown>` |
| <0.1% |       2 | `I2C/C2I adapters(0xbbbbb)`      | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbab)`        | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbbbba)`      | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbeabeabeb)`  | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbbbb)`       | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbbbbab)`     | `<unknown>` |
| <0.1% |       1 | `zero_blocks`                    | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbbbbabbbbb)` | `<unknown>` |

##### Standard library

|     % | Samples | Function                                                      | Location                                            |
| ----: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
| 36.4% |   2,187 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |
| 36.3% |   2,178 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                  |
| 34.7% |   2,082 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                  |
| 34.4% |   2,063 | `linkToCallSite(Object, Object, Object, Object, Object)`      | `java.lang.invoke.Invokers$Holder`                  |
| 12.1% |     728 | `visitClass(ClassNode)`                                       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  9.6% |     576 | `visitMethod(MethodNode)`                                     | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  8.7% |     524 | `visitConstructorOrMethod(MethodNode, boolean)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  7.8% |     471 | `visitBlockStatement(BlockStatement)`                         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  7.0% |     423 | `visitExpressionStatement(ExpressionStatement)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  5.0% |     299 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|  4.7% |     285 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000f001320400` |
|  2.7% |     163 | `visitMethodCallExpression(MethodCallExpression)`             | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  2.6% |     157 | `visitBinaryExpression(BinaryExpression)`                     | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  2.1% |     125 | `visitArgumentlistExpression(ArgumentListExpression)`         | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  1.8% |     106 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x000000f0010c8400` |
|  1.5% |      92 | `visitDeclarationExpression(DeclarationExpression)`           | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  1.4% |      85 | `visitClosureExpression(ClosureExpression)`                   | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  0.9% |      56 | `getMetaClass()`                                              | `org.codehaus.groovy.reflection.ClassInfo`          |
|  0.8% |      50 | `newInstance()`                                               | `java.lang.Class`                                   |
|  0.6% |      38 | `linkToCallSite(Object, int, Object)`                         | `java.lang.invoke.Invokers$Holder`                  |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 98.6% |   3,430 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  1.3% |      46 | `CompileQueue::get`                        | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                                    | Location       |
| ----: | ------: | ----------------------------------------- | -------------- |
| 81.3% |   2,787 | `C2Compiler::compile_method`              | `libjvm.dylib` |
|  0.2% |       6 | `ciEnv::get_method_from_handle`           | `libjvm.dylib` |
|  0.1% |       5 | `ciEnv::ciEnv`                            | `libjvm.dylib` |
| <0.1% |       1 | `CompilationLog::log_compile`             | `libjvm.dylib` |
| <0.1% |       1 | `CompileBroker::update_compile_perf_data` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee              | Location       |
| ----: | ------: | ------------------- | -------------- |
| 99.9% |   2,785 | `Compile::Compile`  | `libjvm.dylib` |
| <0.1% |       1 | `Compile::~Compile` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 48.1% |   1,339 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 38.9% |   1,082 | `Compile::Optimize`                      | `libjvm.dylib` |
|  0.9% |      25 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.1% |       3 | `ciMethod::ensure_method_data`           | `libjvm.dylib` |
| <0.1% |       1 | `Compile::build_start_state`             | `libjvm.dylib` |

##### `main(String[])` (`org.codenarc.CodeNarc`)

|     % | Samples | Callee                                                           | Location                               |
| ----: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| 99.8% |   2,187 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`     |
|  0.1% |       3 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`     |
| <0.1% |       1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `execute(String[])` (`org.codenarc.CodeNarc`)

|     % | Samples | Callee                                             | Location                                            |
| ----: | ------: | -------------------------------------------------- | --------------------------------------------------- |
| 99.4% |   2,164 | `linkToCallSite(Object, Object)`                   | `java.lang.invoke.Invokers$Holder`                  |
|  0.5% |      10 | `linkToCallSite(Object, Object, int, int, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f00191dc00` |
|  0.1% |       3 | `linkToCallSite(Object, Object, Object)`           | `java.lang.invoke.Invokers$Holder`                  |

##### `execute()` (`org.codenarc.CodeNarcRunner`)

|     % | Samples | Callee                                           | Location                           |
| ----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 95.1% |   2,057 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  2.5% |      55 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  2.3% |      50 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|      % | Samples | Callee                                           | Location                           |
| -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |   2,016 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  <0.1% |       1 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)

|      % | Samples | Callee                                                   | Location                                            |
| -----: | ------: | -------------------------------------------------------- | --------------------------------------------------- |
| 100.0% |   2,015 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
|  99.6% |   2,008 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|   0.1% |       3 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                  |
|  <0.1% |       1 | `linkToCallSite(Object, int, Object)`                    | `java.lang.invoke.Invokers$Holder`                  |
|  <0.1% |       1 | `getField(Class, Object, String)`                        | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|      % | Samples | Callee                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |   2,016 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|     % | Samples | Callee                                                   | Location                           |
| ----: | ------: | -------------------------------------------------------- | ---------------------------------- |
| 99.4% |   1,995 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  0.5% |      10 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |
|  0.1% |       2 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Callee                                                               | Location                                                                   |
| ----: | ------: | -------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 85.4% |   1,702 | `linkToCallSite(Object, Object, Object, Object)`                     | `java.lang.invoke.Invokers$Holder`                                         |
| 13.4% |     268 | `linkToCallSite(Object, Object, Object)`                             | `java.lang.invoke.Invokers$Holder`                                         |
|  1.1% |      22 | `linkToCallSite(Object, Object)`                                     | `java.lang.invoke.Invokers$Holder`                                         |
|  0.1% |       1 | `next()`                                                             | `java.util.ArrayList$Itr`                                                  |
|  0.1% |       1 | `<init>(Object, Object, Reference, Reference, Reference, Reference)` | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                                            |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 78.6% |   1,306 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| 17.1% |     285 | `linkToCallSite(Object, Object, long, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000f001320400` |
|  2.5% |      41 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  1.5% |      25 | `linkToCallSite(Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000f00131c800` |
|  0.2% |       3 | `linkToCallSite(long, long, Object)`             | `java.lang.invoke.Invokers$Holder`                  |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 56.2% |     753 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 18.4% |     246 | `Matcher::match`                  | `libjvm.dylib` |
| 11.1% |     148 | `PhaseOutput::Output`             | `libjvm.dylib` |
| 10.2% |     137 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  1.8% |      24 | `PhaseOutput::install_code`       | `libjvm.dylib` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|     % | Samples | Callee                                   | Location                           |
| ----: | ------: | ---------------------------------------- | ---------------------------------- |
| 94.5% |   1,195 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  5.5% |      70 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|     % | Samples | Callee                      | Location                                                 |
| ----: | ------: | --------------------------- | -------------------------------------------------------- |
| 75.9% |     867 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`               |
|  5.9% |      67 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`         |
|  5.5% |      63 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.IndentationRule`           |
|  2.5% |      29 | `applyTo(SourceCode, List)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule` |
|  2.1% |      24 | `applyTo(SourceCode, List)` | `org.codenarc.rule.unused.UnusedVariableRule`            |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 28.0% |     303 | `PhaseIdealLoop::optimize`      | `libjvm.dylib` |
| 20.0% |     216 | `PhaseIterGVN::optimize`        | `libjvm.dylib` |
| 18.9% |     205 | `Compile::optimize_loops`       | `libjvm.dylib` |
|  7.5% |      81 | `Compile::inline_incrementally` | `libjvm.dylib` |
|  6.9% |      75 | `ConnectionGraph::do_analysis`  | `libjvm.dylib` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % | Samples | Callee                  | Location                                                |
| ----: | ------: | ----------------------- | ------------------------------------------------------- |
| 85.2% |     812 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                  |
|  5.4% |      51 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`              |
|  3.6% |      34 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor`               |
|  3.1% |      30 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |
|  0.4% |       4 | `getAstVisitor()`       | `org.codenarc.rule.convention.VectorIsObsoleteRule`     |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Callee                          | Location                                                            |
| ----: | ------: | ------------------------------- | ------------------------------------------------------------------- |
| 81.8% |     726 | `visitClass(ClassNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
|  5.2% |      46 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`             |
|  2.1% |      19 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`     |
|  1.8% |      16 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.naming.ConfusingMethodNameAstVisitor`            |
|  1.2% |      11 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 23.4% |     176 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| 16.5% |     124 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
|  9.7% |      73 | `PhaseLive::compute`                       | `libjvm.dylib` |
|  9.2% |      69 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  8.6% |      65 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |

##### `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % | Samples | Callee                            | Location                                                              |
| ---: | ------: | --------------------------------- | --------------------------------------------------------------------- |
| 1.4% |      10 | `visitAnnotations(AnnotatedNode)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                     |
| 1.0% |       7 | `visitImports(ModuleNode)`        | `org.codenarc.rule.ClassReferenceAstVisitor`                          |
| 0.4% |       3 | `visitImports(ModuleNode)`        | `org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor`           |
| 0.1% |       1 | `visitAnnotations(AnnotatedNode)` | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |
| 0.1% |       1 | `visitImports(ModuleNode)`        | `org.codenarc.rule.convention.NoJavaUtilDateAstVisitor`               |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Callee                      | Location                                                                     |
| ----: | ------: | --------------------------- | ---------------------------------------------------------------------------- |
| 84.1% |     567 | `visitMethod(MethodNode)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                            |
|  1.9% |      13 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`               |
|  1.2% |       8 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.design.ReturnsNullInsteadOfEmptyCollectionRuleAstVisitor` |
|  1.2% |       8 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`          |
|  1.0% |       7 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.SpaceAfterOpeningBraceAstVisitor`              |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 88.2% |     552 | `Compilation::compile_java_method` | `libjvm.dylib` |
| 11.5% |      72 | `ciEnv::register_method`           | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     626 | `Compilation::compile_method` | `libjvm.dylib` |

##### `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % | Samples | Callee                                          | Location                                                     |
| ----: | ------: | ----------------------------------------------- | ------------------------------------------------------------ |
| 80.2% |     462 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`            |
|  3.8% |      22 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`     |
|  3.8% |      22 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor` |
|  2.1% |      12 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`   |
|  1.7% |      10 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.ClassReferenceAstVisitor`                 |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 42.2% |     233 | `Compilation::build_hir`       | `libjvm.dylib` |
| 40.8% |     225 | `Compilation::emit_lir`        | `libjvm.dylib` |
| 15.4% |      85 | `Compilation::emit_code_body`  | `libjvm.dylib` |
|  1.4% |       8 | `ciMethod::ensure_method_data` | `libjvm.dylib` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % | Samples | Callee                            | Location                                                              |
| ---: | ------: | --------------------------------- | --------------------------------------------------------------------- |
| 1.1% |       6 | `visitAnnotations(AnnotatedNode)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                     |
| 0.4% |       2 | `visitAnnotations(AnnotatedNode)` | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 80.9% |     411 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| 18.5% |      94 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `visitBlockStatement(BlockStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % | Samples | Callee                      | Location                                                       |
| ---: | ------: | --------------------------- | -------------------------------------------------------------- |
| 2.1% |      10 | `visitStatement(Statement)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor` |

##### `visitExpressionStatement(ExpressionStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % | Samples | Callee                      | Location                                                       |
| ---: | ------: | --------------------------- | -------------------------------------------------------------- |
| 2.4% |      10 | `visitStatement(Statement)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor` |
| 0.5% |       2 | `vtable stub`               | `<unknown>`                                                    |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 99.5% |     409 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 33.0% |     135 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 19.1% |      78 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| 11.2% |      46 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
|  8.8% |      36 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
|  6.4% |      26 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                    | Location       |
| ----: | ------: | ----------------------------------------- | -------------- |
| 94.9% |     375 | `PhaseIterGVN::transform_old`             | `libjvm.dylib` |
|  0.5% |       2 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |
|  0.5% |       2 | `NodeHash::hash_find_insert`              | `libjvm.dylib` |
|  0.5% |       2 | `IfNode::Ideal`                           | `libjvm.dylib` |
|  0.3% |       1 | `PhiNode::hash`                           | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 19.9% |      75 | `StoreNode::Ideal`           | `libjvm.dylib` |
| 10.9% |      41 | `RegionNode::Ideal`          | `libjvm.dylib` |
|  9.0% |      34 | `PhaseIterGVN::subsume_node` | `libjvm.dylib` |
|  8.0% |      30 | `NodeHash::hash_find_insert` | `libjvm.dylib` |
|  7.4% |      28 | `PhiNode::Ideal`             | `libjvm.dylib` |

##### `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|    % | Samples | Callee           | Location                                                               |
| ---: | ------: | ---------------- | ---------------------------------------------------------------------- |
| 0.3% |       1 | `getMetaClass()` | `org.codenarc.rule.basic.ParameterAssignmentInFilterClosureAstVisitor` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)

|      % | Samples | Callee                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |     260 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `Matcher::match` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 74.8% |     184 | `Matcher::xform`                              | `libjvm.dylib` |
| 10.2% |      25 | `Matcher::find_shared`                        | `libjvm.dylib` |
|  6.9% |      17 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |
|  0.8% |       2 | `DecodeNKlassNode::Opcode`                    | `libjvm.dylib` |
|  0.8% |       2 | `ProjNode::Opcode`                            | `libjvm.dylib` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|     % | Samples | Callee      | Location                                                        |
| ----: | ------: | ----------- | --------------------------------------------------------------- |
| 98.3% |     232 | `init()`    | `org.codenarc.analyzer.SuppressionAnalyzer`                     |
|  0.4% |       1 | `getName()` | `org.codenarc.rule.unnecessary.UnnecessaryObjectReferencesRule` |
|  0.4% |       1 | `getName()` | `org.codenarc.rule.unnecessary.UnnecessaryCollectionCallRule`   |
|  0.4% |       1 | `getName()` | `org.codenarc.rule.formatting.ClassStartsWithBlankLineRule`     |
|  0.4% |       1 | `getName()` | `org.codenarc.rule.unnecessary.UnnecessaryIfStatementRule`      |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

|     % | Samples | Callee                           | Location                           |
| ----: | ------: | -------------------------------- | ---------------------------------- |
| 99.6% |     234 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|     % | Samples | Callee                                                           | Location                           |
| ----: | ------: | ---------------------------------------------------------------- | ---------------------------------- |
| 86.6% |     201 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
|  7.3% |      17 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  4.7% |      11 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder` |
|  0.9% |       2 | `linkToCallSite(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|     % | Samples | Callee                                    | Location                                    |
| ----: | ------: | ----------------------------------------- | ------------------------------------------- |
| 99.6% |     231 | `getAst()`                                | `org.codenarc.source.AbstractSourceCode`    |
|  0.4% |       1 | `getSuppressionsByLineNumber(ModuleNode)` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 77.3% |     174 | `LinearScan::do_linear_scan` | `libjvm.dylib` |
| 22.2% |      50 | `BlockList::iterate_forward` | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     205 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 95.7% |     180 | `GraphBuilder::iterate_all_blocks`   | `libjvm.dylib` |
|  2.7% |       5 | `BlockListBuilder::BlockListBuilder` | `libjvm.dylib` |
|  1.1% |       2 | `BlockBegin::iterate_preorder`       | `libjvm.dylib` |
|  0.5% |       1 | `ciMethod::liveness_at_bci`          | `libjvm.dylib` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codehaus.groovy.ast.CodeVisitorSupport`)

|    % | Samples | Callee        | Location    |
| ---: | ------: | ------------- | ----------- |
| 0.6% |       1 | `vtable stub` | `<unknown>` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractSharedAstVisitorRule`)

|     % | Samples | Callee                                  | Location                                           |
| ----: | ------: | --------------------------------------- | -------------------------------------------------- |
| 83.6% |      56 | `applyVisitor(AstVisitor, SourceCode)`  | `org.codenarc.rule.AbstractSharedAstVisitorRule`   |
|  7.5% |       5 | `getAstVisitor(SourceCode)`             | `org.codenarc.rule.unused.UnusedPrivateFieldRule`  |
|  6.0% |       4 | `getAstVisitor(SourceCode)`             | `org.codenarc.rule.unused.UnusedPrivateMethodRule` |
|  1.5% |       1 | `isValid()`                             | `org.codenarc.source.AbstractSourceCode`           |
|  1.5% |       1 | `getViolations(AstVisitor, SourceCode)` | `org.codenarc.rule.unused.UnusedPrivateMethodRule` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame. `…` stands for frames the entry filter hides.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2.4% |     142 | `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001320400`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute()` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute(String[])` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                      |
| 2.0% |     122 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 2.0% |     120 | `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001320400`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute()` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute(String[])` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.7% |     100 | `Matcher::xform` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.2% |      75 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute()` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute(String[])` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`) |
| 1.1% |      67 | `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.9% |      54 | `ciEnv::register_method` (`libjvm.dylib`) ← `Compilation::compile_method` ← `Compilation::Compilation` ← … ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.9% |      53 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute()` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute(String[])` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                           |
| 0.7% |      45 | `CompileQueue::get` (`libjvm.dylib`) ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.7% |      42 | `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.6% |      39 | `PhaseChaitin::elide_copy` (`libjvm.dylib`) ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.6% |      38 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute()` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute(String[])` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                 |
| 0.6% |      36 | `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.5% |      32 | `PhaseLive::compute` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.4% |      27 | `Compile::Compile` (`libjvm.dylib`) ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.4% |      26 | `PhaseLive::add_liveout` (`libjvm.dylib`) ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.4% |      25 | `Node::dominates` (`libjvm.dylib`) ← `MemNode::all_controls_dominate` ← `InitializeNode::detect_init_independence` ← `InitializeNode::can_capture_store` ← `StoreNode::Ideal` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.4% |      24 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute()` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute(String[])` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                             |
| 0.4% |      23 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute()` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute(String[])` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                         |
| 0.4% |      23 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute()` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute(String[])` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
