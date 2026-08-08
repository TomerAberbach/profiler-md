# Profile

Collected 5,827 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Compiler          | 44.4% |   2,586 |
| Native            | 28.2% |   1,646 |
| Standard library  | 25.0% |   1,459 |
| Ours              |  1.2% |      72 |
| JIT               |  1.0% |      59 |
| Garbage collector |  0.1% |       5 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

#### Categories

##### Compiler

|    % | Samples | Function                                    | Location       |
| ---: | ------: | ------------------------------------------- | -------------- |
| 1.7% |      97 | `PhaseChaitin::Split`                       | `libjvm.dylib` |
| 1.3% |      77 | `Node::dominates`                           | `libjvm.dylib` |
| 1.0% |      57 | `PhaseChaitin::build_ifg_physical`          | `libjvm.dylib` |
| 0.9% |      52 | `IndexSetIterator::advance_and_next`        | `libjvm.dylib` |
| 0.7% |      43 | `PhaseChaitin::gather_lrg_masks`            | `libjvm.dylib` |
| 0.7% |      43 | `PhaseAggressiveCoalesce::insert_copies`    | `libjvm.dylib` |
| 0.7% |      40 | `PhaseIdealLoop::build_loop_early`          | `libjvm.dylib` |
| 0.6% |      37 | `Compile::identify_useful_nodes`            | `libjvm.dylib` |
| 0.5% |      32 | `PhaseChaitin::post_allocate_copy_removal`  | `libjvm.dylib` |
| 0.5% |      30 | `PhaseLive::compute`                        | `libjvm.dylib` |
| 0.5% |      29 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
| 0.5% |      29 | `ciObjectFactory::get_metadata`             | `libjvm.dylib` |
| 0.5% |      29 | `Node::set_req_X`                           | `libjvm.dylib` |
| 0.5% |      28 | `PhaseIdealLoop::is_dominator`              | `libjvm.dylib` |
| 0.5% |      27 | `PhaseChaitin::elide_copy`                  | `libjvm.dylib` |
| 0.4% |      26 | `Matcher::xform`                            | `libjvm.dylib` |
| 0.4% |      25 | `MachNode::rematerialize`                   | `libjvm.dylib` |
| 0.4% |      24 | `Node_Backward_Iterator::next`              | `libjvm.dylib` |
| 0.4% |      23 | `PhaseIdealLoop::build_loop_late`           | `libjvm.dylib` |
| 0.4% |      22 | `Compile::disconnect_useless_nodes`         | `libjvm.dylib` |

##### Ours

|     % | Samples | Function                                          | Location                                                                                                       |
| ----: | ------: | ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| <0.1% |       2 | `visitClass(ClassNode)`                           | `org.codenarc.rule.AbstractAstVisitor`                                                                         |
| <0.1% |       2 | `isMethodCallOnObject(Expression, String)`        | `org.codenarc.util.AstUtil`                                                                                    |
| <0.1% |       1 | `doCall(Object)`                                  | `org.codenarc.util.WildcardPattern$_closure1`                                                                  |
| <0.1% |       1 | `collectViolations(SourceCode, RuleSet)`          | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                                                 |
| <0.1% |       1 | `init()`                                          | `org.codenarc.source.AbstractSourceCode`                                                                       |
| <0.1% |       1 | `isRuleSuppressed(Rule)`                          | `org.codenarc.analyzer.SuppressionAnalyzer`                                                                    |
| <0.1% |       1 | `getAstVisitor()`                                 | `org.codenarc.rule.AbstractAstVisitorRule`                                                                     |
| <0.1% |       1 | `codeReturnsBoolean(Statement)`                   | `org.codenarc.rule.design.BooleanMethodReturnsNullAstVisitor`                                                  |
| <0.1% |       1 | `<init>(Class, Set, Closure)`                     | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                                             |
| <0.1% |       1 | `doCall(Object)`                                  | `org.codenarc.rule.imports.UnnecessaryGroovyImportRule$_applyTo_closure1`                                      |
| <0.1% |       1 | `collectAllPrivateMethods(ModuleNode)`            | `org.codenarc.rule.unused.UnusedPrivateMethodRule`                                                             |
| <0.1% |       1 | `doCall(Object)`                                  | `org.codenarc.rule.formatting.IndentationAstVisitor$_recordMethodColumnAndSourceLineForClosureBlocks_closure6` |
| <0.1% |       1 | `eachImportLine(SourceCode, Closure)`             | `org.codenarc.rule.imports.AbstractImportRule`                                                                 |
| <0.1% |       1 | `visitConstructorOrMethod(MethodNode, boolean)`   | `org.codenarc.rule.unnecessary.UnnecessaryDefInMethodDeclarationAstVisitor`                                    |
| <0.1% |       1 | `<init>()`                                        | `org.codenarc.rule.groovyism.ExplicitCallToDivMethodAstVisitor`                                                |
| <0.1% |       1 | `<init>(Object, Object, Reference)`               | `org.codenarc.rule.design.CloneableWithoutCloneAstVisitor$_visitClassEx_closure1`                              |
| <0.1% |       1 | `applyTo(SourceCode, List)`                       | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`                                                       |
| <0.1% |       1 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.unnecessary.UnnecessaryGetterAstVisitor`                                                    |
| <0.1% |       1 | `getMetaClass()`                                  | `org.codenarc.rule.exceptions.CommonCatchAstVisitor`                                                           |
| <0.1% |       1 | `visitClassEx(ClassNode)`                         | `org.codenarc.rule.AbstractAstVisitor`                                                                         |

##### JIT

|     % | Samples | Function                         | Location    |
| ----: | ------: | -------------------------------- | ----------- |
|  0.3% |      19 | `itable stub`                    | `<unknown>` |
|  0.2% |      11 | `I2C/C2I adapters(0xbb)`         | `<unknown>` |
|  0.2% |      10 | `I2C/C2I adapters(0xb)`          | `<unknown>` |
|  0.1% |       8 | `vtable stub`                    | `<unknown>` |
|  0.1% |       3 | `I2C/C2I adapters(0xbbb)`        | `<unknown>` |
| <0.1% |       2 | `I2C/C2I adapters(0xba)`         | `<unknown>` |
| <0.1% |       1 | `call_stub`                      | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbaa)`        | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xab)`         | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbbbb)`       | `<unknown>` |
| <0.1% |       1 | `zero_blocks`                    | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbbbbabbbbb)` | `<unknown>` |

##### Standard library

|     % | Samples | Function                                          | Location                                                             |
| ----: | ------: | ------------------------------------------------- | -------------------------------------------------------------------- |
|  0.3% |      16 | `equals(Object)`                                  | `java.lang.String`                                                   |
|  0.1% |       3 | `intUnbox(Object)`                                | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation` |
|  0.1% |       3 | `next()`                                          | `java.util.ArrayList$Itr`                                            |
| <0.1% |       2 | `<init>(Object, Object)`                          | `groovy.lang.Closure`                                                |
| <0.1% |       2 | `getInterfaces()`                                 | `org.codehaus.groovy.ast.ClassNode`                                  |
| <0.1% |       1 | `linkToCallSite(Object, Object)`                  | `java.lang.invoke.Invokers$Holder`                                   |
| <0.1% |       1 | `linkToCallSite(Object, Object, Object)`          | `java.lang.invoke.Invokers$Holder`                                   |
| <0.1% |       1 | `linkToCallSite(Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x000000b8010c8400`                  |
| <0.1% |       1 | `isCase(Object, Object)`                          | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                  |
| <0.1% |       1 | `visitExpressionStatement(ExpressionStatement)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                    |
| <0.1% |       1 | `visitMethodCallExpression(MethodCallExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport`                         |
| <0.1% |       1 | `visitAnnotations(AnnotatedNode)`                 | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                    |
| <0.1% |       1 | `visitClosureExpression(ClosureExpression)`       | `org.codehaus.groovy.ast.CodeVisitorSupport`                         |
| <0.1% |       1 | `callGetProperty(Object)`                         | `org.codehaus.groovy.runtime.callsite.GetEffectivePogoPropertySite`  |
| <0.1% |       1 | `hasNext()`                                       | `java.util.ArrayList$Itr`                                            |
| <0.1% |       1 | `compareEqual(Object, Object)`                    | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                  |
| <0.1% |       1 | `callConstructor(Object, Object, Object, Object)` | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`              |
| <0.1% |       1 | `valueOf(int)`                                    | `java.lang.Integer`                                                  |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `equals(Object)` (`java.lang.String`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 75.0% |      12 | `java.lang.String:1852` |
| 18.8% |       3 | `java.lang.String:1847` |
|  6.3% |       1 | `java.lang.String:1850` |

##### `intUnbox(Object)` (`org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation`)

|     % | Samples | Location                                                                |
| ----: | ------: | ----------------------------------------------------------------------- |
| 66.7% |       2 | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation:81` |
| 33.3% |       1 | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation:82` |

##### `next()` (`java.util.ArrayList$Itr`)

|     % | Samples | Location                       |
| ----: | ------: | ------------------------------ |
| 33.3% |       1 | `java.util.ArrayList$Itr:1050` |
| 33.3% |       1 | `java.util.ArrayList$Itr:1056` |
| 33.3% |       1 | `java.util.ArrayList$Itr:1054` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Location                                   |
| ----: | ------: | ------------------------------------------ |
| 50.0% |       1 | `org.codenarc.rule.AbstractAstVisitor:131` |
| 50.0% |       1 | `org.codenarc.rule.AbstractAstVisitor:130` |

##### `isMethodCallOnObject(Expression, String)` (`org.codenarc.util.AstUtil`)

|     % | Samples | Location                        |
| ----: | ------: | ------------------------------- |
| 50.0% |       1 | `org.codenarc.util.AstUtil:277` |
| 50.0% |       1 | `org.codenarc.util.AstUtil:272` |

##### `<init>(Object, Object)` (`groovy.lang.Closure`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |       2 | `groovy.lang.Closure:215` |

##### `getInterfaces()` (`org.codehaus.groovy.ast.ClassNode`)

|     % | Samples | Location                                |
| ----: | ------: | --------------------------------------- |
| 50.0% |       1 | `org.codehaus.groovy.ast.ClassNode:378` |
| 50.0% |       1 | `org.codehaus.groovy.ast.ClassNode:377` |

##### `doCall(Object)` (`org.codenarc.util.WildcardPattern$_closure1`)

|      % | Samples | Location                                         |
| -----: | ------: | ------------------------------------------------ |
| 100.0% |       1 | `org.codenarc.util.WildcardPattern$_closure1:55` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|      % | Samples | Location                                          |
| -----: | ------: | ------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.analyzer.AbstractSourceAnalyzer:44` |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `org.codenarc.source.AbstractSourceCode:112` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Location                                       |
| -----: | ------: | ---------------------------------------------- |
| 100.0% |       1 | `org.codenarc.analyzer.SuppressionAnalyzer:36` |

##### `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.AbstractAstVisitorRule:81` |

##### `codeReturnsBoolean(Statement)` (`org.codenarc.rule.design.BooleanMethodReturnsNullAstVisitor`)

|      % | Samples | Location                                                         |
| -----: | ------: | ---------------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.design.BooleanMethodReturnsNullAstVisitor:79` |

##### `<init>(Class, Set, Closure)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

|      % | Samples | Location                                              |
| -----: | ------: | ----------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor:41` |

##### `doCall(Object)` (`org.codenarc.rule.imports.UnnecessaryGroovyImportRule$_applyTo_closure1`)

|      % | Samples | Location                                                                     |
| -----: | ------: | ---------------------------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.imports.UnnecessaryGroovyImportRule$_applyTo_closure1:53` |

##### `collectAllPrivateMethods(ModuleNode)` (`org.codenarc.rule.unused.UnusedPrivateMethodRule`)

|      % | Samples | Location                                              |
| -----: | ------: | ----------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.unused.UnusedPrivateMethodRule:73` |

##### `doCall(Object)` (`org.codenarc.rule.formatting.IndentationAstVisitor$_recordMethodColumnAndSourceLineForClosureBlocks_closure6`)

|      % | Samples | Location                                                                                                           |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------ |
| 100.0% |       1 | `org.codenarc.rule.formatting.IndentationAstVisitor$_recordMethodColumnAndSourceLineForClosureBlocks_closure6:224` |

##### `eachImportLine(SourceCode, Closure)` (`org.codenarc.rule.imports.AbstractImportRule`)

|      % | Samples | Location                                          |
| -----: | ------: | ------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.imports.AbstractImportRule:48` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.unnecessary.UnnecessaryDefInMethodDeclarationAstVisitor`)

|      % | Samples | Location                                                                       |
| -----: | ------: | ------------------------------------------------------------------------------ |
| 100.0% |       1 | `org.codenarc.rule.unnecessary.UnnecessaryDefInMethodDeclarationAstVisitor:46` |

##### `<init>()` (`org.codenarc.rule.groovyism.ExplicitCallToDivMethodAstVisitor`)

|      % | Samples | Location                                                           |
| -----: | ------: | ------------------------------------------------------------------ |
| 100.0% |       1 | `org.codenarc.rule.groovyism.ExplicitCallToDivMethodAstVisitor:38` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`)

|      % | Samples | Location                                                    |
| -----: | ------: | ----------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule:42` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryGetterAstVisitor`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.unnecessary.UnnecessaryGetterAstVisitor:54` |

##### `visitClassEx(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|      % | Samples | Location                                   |
| -----: | ------: | ------------------------------------------ |
| 100.0% |       1 | `org.codenarc.rule.AbstractAstVisitor:139` |

##### `isCase(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|      % | Samples | Location                                                |
| -----: | ------: | ------------------------------------------------------- |
| 100.0% |       1 | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter:717` |

##### `visitExpressionStatement(ExpressionStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|      % | Samples | Location                                              |
| -----: | ------: | ----------------------------------------------------- |
| 100.0% |       1 | `org.codehaus.groovy.ast.ClassCodeVisitorSupport:203` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codehaus.groovy.ast.CodeVisitorSupport`)

|      % | Samples | Location                                         |
| -----: | ------: | ------------------------------------------------ |
| 100.0% |       1 | `org.codehaus.groovy.ast.CodeVisitorSupport:184` |

##### `visitAnnotations(AnnotatedNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|      % | Samples | Location                                             |
| -----: | ------: | ---------------------------------------------------- |
| 100.0% |       1 | `org.codehaus.groovy.ast.ClassCodeVisitorSupport:57` |

##### `visitClosureExpression(ClosureExpression)` (`org.codehaus.groovy.ast.CodeVisitorSupport`)

|      % | Samples | Location                                         |
| -----: | ------: | ------------------------------------------------ |
| 100.0% |       1 | `org.codehaus.groovy.ast.CodeVisitorSupport:239` |

##### `callGetProperty(Object)` (`org.codehaus.groovy.runtime.callsite.GetEffectivePogoPropertySite`)

|      % | Samples | Location                                                               |
| -----: | ------: | ---------------------------------------------------------------------- |
| 100.0% |       1 | `org.codehaus.groovy.runtime.callsite.GetEffectivePogoPropertySite:45` |

##### `hasNext()` (`java.util.ArrayList$Itr`)

|      % | Samples | Location                       |
| -----: | ------: | ------------------------------ |
| 100.0% |       1 | `java.util.ArrayList$Itr:1044` |

##### `compareEqual(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|      % | Samples | Location                                                |
| -----: | ------: | ------------------------------------------------------- |
| 100.0% |       1 | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter:734` |

##### `callConstructor(Object, Object, Object, Object)` (`org.codehaus.groovy.runtime.callsite.AbstractCallSite`)

|      % | Samples | Location                                                    |
| -----: | ------: | ----------------------------------------------------------- |
| 100.0% |       1 | `org.codehaus.groovy.runtime.callsite.AbstractCallSite:291` |

##### `valueOf(int)` (`java.lang.Integer`)

|      % | Samples | Location                 |
| -----: | ------: | ------------------------ |
| 100.0% |       1 | `java.lang.Integer:1081` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      97 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Node::dominates` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |      77 | `MemNode::all_controls_dominate` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      57 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 25.0% |      13 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |
| 21.2% |      11 | `PhaseIFG::effective_degree`       | `libjvm.dylib` |
|  9.6% |       5 | `PhaseIFG::SquareUp`               | `libjvm.dylib` |
|  7.7% |       4 | `PhaseIFG::remove_node`            | `libjvm.dylib` |
|  7.7% |       4 | `PhaseLive::add_liveout`           | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      43 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      43 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      40 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compile::identify_useful_nodes` (`libjvm.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 73.0% |      27 | `PhaseRemoveUseless::PhaseRemoveUseless`      | `libjvm.dylib` |
| 27.0% |      10 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      32 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      30 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|     % | Samples | Caller                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 96.6% |      28 | `PhaseIdealLoop::build_loop_late`    | `libjvm.dylib` |
|  3.4% |       1 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|     % | Samples | Caller                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 24.1% |       7 | `ciBytecodeStream::get_method`         | `libjvm.dylib` |
| 17.2% |       5 | `ciEnv::get_klass_by_index_impl`       | `libjvm.dylib` |
| 13.8% |       4 | `ciObjectFactory::create_new_metadata` | `libjvm.dylib` |
| 10.3% |       3 | `ciEnv::get_klass_by_name_impl`        | `libjvm.dylib` |
|  6.9% |       2 | `ciMethodHandle::get_vmtarget`         | `libjvm.dylib` |

##### `Node::set_req_X` (`libjvm.dylib`)

|     % | Samples | Caller                                    | Location       |
| ----: | ------: | ----------------------------------------- | -------------- |
| 79.3% |      23 | `Node::replace_edge`                      | `libjvm.dylib` |
| 10.3% |       3 | `MergeMemNode::Ideal`                     | `libjvm.dylib` |
|  3.4% |       1 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |
|  3.4% |       1 | `RegionNode::Ideal`                       | `libjvm.dylib` |
|  3.4% |       1 | `PhaseIdealLoop::do_split_if`             | `libjvm.dylib` |

##### `PhaseIdealLoop::is_dominator` (`libjvm.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 92.9% |      26 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `libjvm.dylib` |
|  3.6% |       1 | `PhaseIdealLoop::build_loop_late`             | `libjvm.dylib` |
|  3.6% |       1 | `PhaseIdealLoop::compute_early_ctrl`          | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |      27 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |      26 | `Matcher::match` | `libjvm.dylib` |

##### `MachNode::rematerialize` (`libjvm.dylib`)

|     % | Samples | Caller                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 76.0% |      19 | `PhaseChaitin::Split`              | `libjvm.dylib` |
| 16.0% |       4 | `PhaseChaitin::Register_Allocate`  | `libjvm.dylib` |
|  8.0% |       2 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |

##### `Node_Backward_Iterator::next` (`libjvm.dylib`)

|     % | Samples | Caller                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 62.5% |      15 | `PhaseCFG::schedule_late`      | `libjvm.dylib` |
| 37.5% |       9 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      23 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compile::disconnect_useless_nodes` (`libjvm.dylib`)

|     % | Samples | Caller                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 77.3% |      17 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
| 22.7% |       5 | `PhaseCCP::transform`                    | `libjvm.dylib` |

##### `itable stub` (`<unknown>`)

|     % | Samples | Caller                      | Location                                    |
| ----: | ------: | --------------------------- | ------------------------------------------- |
| 10.5% |       2 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`  |
|  5.3% |       1 | `isRuleSuppressed(Rule)`    | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `equals(Object)` (`java.lang.String`)

|    % | Samples | Caller                                           | Location                    |
| ---: | ------: | ------------------------------------------------ | --------------------------- |
| 6.3% |       1 | `lambda$getAnnotation$0(String, AnnotationNode)` | `org.codenarc.util.AstUtil` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|    % | Samples | Caller                                              | Location                                                                                    |
| ---: | ------: | --------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 9.1% |       1 | `getNonStaticImportsSortedByLineNumber(SourceCode)` | `org.codenarc.util.ImportUtil`                                                              |
| 9.1% |       1 | `isFunctionSpecifiedOrImplied(String)`              | `org.gmetrics.result.MetricResultBuilder`                                                   |
| 9.1% |       1 | `applyVisitor(AstVisitor, SourceCode)`              | `org.codenarc.rule.AbstractSharedAstVisitorRule`                                            |
| 9.1% |       1 | `visitClosureExpression(ClosureExpression)`         | `org.codenarc.rule.formatting.ClosureStatementOnOpeningLineOfMultipleLineClosureAstVisitor` |

##### `vtable stub` (`<unknown>`)

|     % | Samples | Caller                                                | Location                                          |
| ----: | ------: | ----------------------------------------------------- | ------------------------------------------------- |
| 12.5% |       1 | `visitExpressionStatement(ExpressionStatement)`       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |
| 12.5% |       1 | `visitArgumentlistExpression(ArgumentListExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport`      |

##### `intUnbox(Object)` (`org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation`)

|     % | Samples | Caller                                | Location                                             |
| ----: | ------: | ------------------------------------- | ---------------------------------------------------- |
| 33.3% |       1 | `visitBlockStatement(BlockStatement)` | `org.codenarc.rule.formatting.IndentationAstVisitor` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|      % | Samples | Caller                      | Location                                   |
| -----: | ------: | --------------------------- | ------------------------------------------ |
| 100.0% |       2 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `isMethodCallOnObject(Expression, String)` (`org.codenarc.util.AstUtil`)

|     % | Samples | Caller                                                    | Location                    |
| ----: | ------: | --------------------------------------------------------- | --------------------------- |
| 50.0% |       1 | `isMethodCall(MethodCallExpression, List, List, Integer)` | `org.codenarc.util.AstUtil` |

##### `<init>(Object, Object)` (`groovy.lang.Closure`)

|     % | Samples | Caller                                                               | Location                                                                   |
| ----: | ------: | -------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 50.0% |       1 | `<init>(Object, Object, Reference)`                                  | `org.codenarc.util.WildcardPattern$_matches_closure2`                      |
| 50.0% |       1 | `<init>(Object, Object, Reference, Reference, Reference, Reference)` | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |

##### `getInterfaces()` (`org.codehaus.groovy.ast.ClassNode`)

|     % | Samples | Caller                                      | Location                    |
| ----: | ------: | ------------------------------------------- | --------------------------- |
| 50.0% |       1 | `classNodeImplementsType(ClassNode, Class)` | `org.codenarc.util.AstUtil` |

##### `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`)

|      % | Samples | Caller                      | Location                                   |
| -----: | ------: | --------------------------- | ------------------------------------------ |
| 100.0% |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.unnecessary.UnnecessaryDefInMethodDeclarationAstVisitor`)

|      % | Samples | Caller                    | Location                                          |
| -----: | ------: | ------------------------- | ------------------------------------------------- |
| 100.0% |       1 | `visitMethod(MethodNode)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `<init>(Object, Object, Reference)` (`org.codenarc.rule.design.CloneableWithoutCloneAstVisitor$_visitClassEx_closure1`)

|      % | Samples | Caller                    | Location                                                   |
| -----: | ------: | ------------------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `visitClassEx(ClassNode)` | `org.codenarc.rule.design.CloneableWithoutCloneAstVisitor` |

##### `visitClassEx(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|      % | Samples | Caller                  | Location                               |
| -----: | ------: | ----------------------- | -------------------------------------- |
| 100.0% |       1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                                  | Location                                                |
| -----: | ------: | --------------------------------------- | ------------------------------------------------------- |
| 100.0% |       1 | `getViolations(AstVisitor, SourceCode)` | `org.codenarc.rule.design.PrivateFieldCouldBeFinalRule` |

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                                        | Location                                                     |
| -----: | ------: | --------------------------------------------- | ------------------------------------------------------------ |
| 100.0% |       1 | `visitConstantExpression(ConstantExpression)` | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor` |

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b8010c8400`)

|      % | Samples | Caller                          | Location                                                        |
| -----: | ------: | ------------------------------- | --------------------------------------------------------------- |
| 100.0% |       1 | `processMethodNode(MethodNode)` | `org.codenarc.rule.formatting.SpaceAfterClosingBraceAstVisitor` |

##### `isCase(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|      % | Samples | Caller                     | Location                                          |
| -----: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% |       1 | `isDoubleTypeName(String)` | `org.codenarc.rule.convention.NoDoubleAstVisitor` |

##### `callGetProperty(Object)` (`org.codehaus.groovy.runtime.callsite.GetEffectivePogoPropertySite`)

|      % | Samples | Caller           | Location                                                                                   |
| -----: | ------: | ---------------- | ------------------------------------------------------------------------------------------ |
| 100.0% |       1 | `doCall(Object)` | `org.gmetrics.metric.abc.result.AggregateAbcMetricResult$_addChildrenToAbcVector_closure2` |

##### `hasNext()` (`java.util.ArrayList$Itr`)

|      % | Samples | Caller                                   | Location                                       |
| -----: | ------: | ---------------------------------------- | ---------------------------------------------- |
| 100.0% |       1 | `collectViolations(SourceCode, RuleSet)` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |

##### `compareEqual(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|      % | Samples | Caller                            | Location                                            |
| -----: | ------: | --------------------------------- | --------------------------------------------------- |
| 100.0% |       1 | `compareNotEqual(Object, Object)` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### `callConstructor(Object, Object, Object, Object)` (`org.codehaus.groovy.runtime.callsite.AbstractCallSite`)

|      % | Samples | Caller                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |       1 | `calculate(MethodNode, SourceCode)` | `org.gmetrics.metric.abc.AbcMetric` |

##### `valueOf(int)` (`java.lang.Integer`)

|      % | Samples | Caller                                          | Location                                                                     |
| -----: | ------: | ----------------------------------------------- | ---------------------------------------------------------------------------- |
| 100.0% |       1 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAfterMethodDeclarationNameRuleAstVisitor` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                 | Location                                                                    |
| ----: | ------: | -------------------------------------------------------- | --------------------------------------------------------------------------- |
| 57.3% |   3,340 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib`                                                              |
| 56.8% |   3,308 | `CompileBroker::invoke_compiler_on_method`               | `libjvm.dylib`                                                              |
| 45.9% |   2,676 | `C2Compiler::compile_method`                             | `libjvm.dylib`                                                              |
| 45.9% |   2,673 | `Compile::Compile`                                       | `libjvm.dylib`                                                              |
| 36.7% |   2,139 | `main(String[])`                                         | `org.codenarc.CodeNarc`                                                     |
| 36.6% |   2,135 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                          |
| 36.5% |   2,125 | `execute(String[])`                                      | `org.codenarc.CodeNarc`                                                     |
| 36.4% |   2,123 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                                          |
| 36.2% |   2,111 | `execute()`                                              | `org.codenarc.CodeNarcRunner`                                               |
| 35.0% |   2,037 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                          |
| 34.5% |   2,013 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                          |
| 33.8% |   1,972 | `analyze(RuleSet)`                                       | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 33.8% |   1,971 | `doCall(Object)`                                         | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
| 33.8% |   1,971 | `processDirectory(String, RuleSet)`                      | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 33.7% |   1,962 | `processFile(String, DirectoryResults, RuleSet)`         | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 33.6% |   1,957 | `collectViolations(SourceCode, RuleSet)`                 | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 27.6% |   1,611 | `measureRuleProcessingTime(Rule, Closure)`               | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 22.3% |   1,298 | `Compile::Code_Gen`                                      | `libjvm.dylib`                                                              |
| 21.7% |   1,264 | `doCall(Object)`                                         | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
| 19.5% |   1,139 | `applyTo(SourceCode)`                                    | `org.codenarc.rule.AbstractRule`                                            |

#### Categories

##### Compiler

|     % | Samples | Function                                   | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 57.3% |   3,340 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
| 56.8% |   3,308 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
| 45.9% |   2,676 | `C2Compiler::compile_method`               | `libjvm.dylib` |
| 45.9% |   2,673 | `Compile::Compile`                         | `libjvm.dylib` |
| 22.3% |   1,298 | `Compile::Code_Gen`                        | `libjvm.dylib` |
| 17.1% |     998 | `Compile::Optimize`                        | `libjvm.dylib` |
| 11.9% |     696 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
| 10.6% |     617 | `Compilation::compile_method`              | `libjvm.dylib` |
| 10.6% |     617 | `Compilation::Compilation`                 | `libjvm.dylib` |
|  9.3% |     541 | `Compilation::compile_java_method`         | `libjvm.dylib` |
|  8.5% |     496 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|  7.2% |     419 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
|  7.2% |     418 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
|  5.9% |     341 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
|  5.5% |     322 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |
|  3.9% |     230 | `Matcher::match`                           | `libjvm.dylib` |
|  3.8% |     224 | `Compilation::emit_lir`                    | `libjvm.dylib` |
|  3.7% |     215 | `Compilation::build_hir`                   | `libjvm.dylib` |
|  3.6% |     212 | `Compile::optimize_loops`                  | `libjvm.dylib` |
|  3.0% |     174 | `LinearScan::do_linear_scan`               | `libjvm.dylib` |

##### Ours

|     % | Samples | Function                                         | Location                                                                    |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------------------------------- |
| 36.7% |   2,139 | `main(String[])`                                 | `org.codenarc.CodeNarc`                                                     |
| 36.5% |   2,125 | `execute(String[])`                              | `org.codenarc.CodeNarc`                                                     |
| 36.2% |   2,111 | `execute()`                                      | `org.codenarc.CodeNarcRunner`                                               |
| 33.8% |   1,972 | `analyze(RuleSet)`                               | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 33.8% |   1,971 | `doCall(Object)`                                 | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
| 33.8% |   1,971 | `processDirectory(String, RuleSet)`              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 33.7% |   1,962 | `processFile(String, DirectoryResults, RuleSet)` | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 33.6% |   1,957 | `collectViolations(SourceCode, RuleSet)`         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 27.6% |   1,611 | `measureRuleProcessingTime(Rule, Closure)`       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 21.7% |   1,264 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
| 19.5% |   1,139 | `applyTo(SourceCode)`                            | `org.codenarc.rule.AbstractRule`                                            |
| 16.4% |     954 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
| 15.1% |     881 | `visitClass(ClassNode)`                          | `org.codenarc.rule.AbstractAstVisitor`                                      |
| 11.4% |     664 | `visitMethod(MethodNode)`                        | `org.codenarc.rule.AbstractAstVisitor`                                      |
|  4.6% |     269 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`  |
|  4.3% |     250 | `isRuleSuppressed(Rule)`                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
|  4.2% |     245 | `getAst()`                                       | `org.codenarc.source.AbstractSourceCode`                                    |
|  4.2% |     244 | `init()`                                         | `org.codenarc.source.AbstractSourceCode`                                    |
|  4.2% |     244 | `init()`                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
|  1.2% |      72 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractSharedAstVisitorRule`                            |

##### JIT

|     % | Samples | Function                         | Location    |
| ----: | ------: | -------------------------------- | ----------- |
|  0.3% |      19 | `itable stub`                    | `<unknown>` |
|  0.2% |      11 | `I2C/C2I adapters(0xbb)`         | `<unknown>` |
|  0.2% |      10 | `I2C/C2I adapters(0xb)`          | `<unknown>` |
|  0.1% |       8 | `vtable stub`                    | `<unknown>` |
|  0.1% |       3 | `I2C/C2I adapters(0xbbb)`        | `<unknown>` |
| <0.1% |       2 | `I2C/C2I adapters(0xba)`         | `<unknown>` |
| <0.1% |       1 | `call_stub`                      | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbaa)`        | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xab)`         | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbbbb)`       | `<unknown>` |
| <0.1% |       1 | `zero_blocks`                    | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbbbbabbbbb)` | `<unknown>` |

##### Standard library

|     % | Samples | Function                                                      | Location                                            |
| ----: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
| 36.6% |   2,135 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |
| 36.4% |   2,123 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                  |
| 35.0% |   2,037 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                  |
| 34.5% |   2,013 | `linkToCallSite(Object, Object, Object, Object, Object)`      | `java.lang.invoke.Invokers$Holder`                  |
| 12.3% |     716 | `visitClass(ClassNode)`                                       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| 10.0% |     581 | `visitMethod(MethodNode)`                                     | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  8.8% |     515 | `visitConstructorOrMethod(MethodNode, boolean)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  8.0% |     469 | `visitBlockStatement(BlockStatement)`                         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  7.3% |     423 | `visitExpressionStatement(ExpressionStatement)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  5.2% |     303 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|  4.5% |     260 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000b801320400` |
|  2.5% |     146 | `visitBinaryExpression(BinaryExpression)`                     | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  2.5% |     144 | `visitMethodCallExpression(MethodCallExpression)`             | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  2.0% |     115 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x000000b8010c8400` |
|  1.9% |     112 | `visitArgumentlistExpression(ArgumentListExpression)`         | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  1.4% |      82 | `visitDeclarationExpression(DeclarationExpression)`           | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  1.3% |      75 | `visitClosureExpression(ClosureExpression)`                   | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  1.0% |      57 | `newInstance()`                                               | `java.lang.Class`                                   |
|  0.9% |      55 | `getMetaClass()`                                              | `org.codehaus.groovy.reflection.ClassInfo`          |
|  0.6% |      36 | `linkToCallSite(Object, int, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000b8013d6800` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 99.0% |   3,308 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  1.0% |      32 | `CompileQueue::get`                        | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 80.9% |   2,676 | `C2Compiler::compile_method`    | `libjvm.dylib` |
|  0.2% |       5 | `ciEnv::~ciEnv`                 | `libjvm.dylib` |
|  0.1% |       4 | `ciEnv::ciEnv`                  | `libjvm.dylib` |
|  0.1% |       3 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |
| <0.1% |       1 | `CompilationLog::log_compile`   | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                  | Location       |
| ----: | ------: | ----------------------- | -------------- |
| 99.9% |   2,673 | `Compile::Compile`      | `libjvm.dylib` |
| <0.1% |       1 | `RootNode::bottom_type` | `libjvm.dylib` |
| <0.1% |       1 | `Compile::~Compile`     | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 48.6% |   1,298 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 37.3% |     998 | `Compile::Optimize`                      | `libjvm.dylib` |
|  1.3% |      34 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.1% |       3 | `Compile::Init`                          | `libjvm.dylib` |
|  0.1% |       2 | `TypeFunc::make`                         | `libjvm.dylib` |

##### `main(String[])` (`org.codenarc.CodeNarc`)

|     % | Samples | Callee                                                           | Location                               |
| ----: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| 99.8% |   2,135 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`     |
|  0.1% |       3 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`     |
| <0.1% |       1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `execute(String[])` (`org.codenarc.CodeNarc`)

|     % | Samples | Callee                                             | Location                                            |
| ----: | ------: | -------------------------------------------------- | --------------------------------------------------- |
| 99.4% |   2,112 | `linkToCallSite(Object, Object)`                   | `java.lang.invoke.Invokers$Holder`                  |
|  0.4% |       9 | `linkToCallSite(Object, Object, int, int, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b801951c00` |
|  0.2% |       4 | `linkToCallSite(Object, Object, Object)`           | `java.lang.invoke.Invokers$Holder`                  |

##### `execute()` (`org.codenarc.CodeNarcRunner`)

|     % | Samples | Callee                                           | Location                           |
| ----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 95.1% |   2,008 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  2.5% |      52 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |
|  2.4% |      51 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                           |
| ----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 99.9% |   1,971 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  0.1% |       1 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)

|     % | Samples | Callee                                                           | Location                               |
| ----: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| 99.9% |   1,970 | `linkToCallSite(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`     |
| 99.5% |   1,962 | `linkToCallSite(Object, Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`     |
|  0.2% |       4 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`     |
|  0.1% |       2 | `linkToCallSite(Object, int, Object)`                            | `java.lang.invoke.Invokers$Holder`     |
|  0.1% |       1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|      % | Samples | Callee                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |   1,971 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                           |
| ----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 99.7% |   1,957 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  0.2% |       4 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  0.1% |       1 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Callee                                                               | Location                                                                   |
| ----: | ------: | -------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 84.2% |   1,647 | `linkToCallSite(Object, Object, Object, Object)`                     | `java.lang.invoke.Invokers$Holder`                                         |
| 14.1% |     276 | `linkToCallSite(Object, Object, Object)`                             | `java.lang.invoke.Invokers$Holder`                                         |
|  1.6% |      31 | `linkToCallSite(Object, Object)`                                     | `java.lang.invoke.Invokers$Holder`                                         |
|  0.1% |       1 | `hasNext()`                                                          | `java.util.ArrayList$Itr`                                                  |
|  0.1% |       1 | `<init>(Object, Object, Reference, Reference, Reference, Reference)` | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                                                             |
| ----: | ------: | ------------------------------------------------ | -------------------------------------------------------------------- |
| 80.0% |   1,289 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                   |
| 16.1% |     260 | `linkToCallSite(Object, Object, long, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000b801320400`                  |
|  2.2% |      36 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                   |
|  1.2% |      19 | `linkToCallSite(Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000b80131c800`                  |
|  0.2% |       3 | `longUnbox(Object)`                              | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 53.6% |     696 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 17.7% |     230 | `Matcher::match`                  | `libjvm.dylib` |
| 12.3% |     160 | `PhaseOutput::Output`             | `libjvm.dylib` |
| 12.2% |     159 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  2.3% |      30 | `PhaseOutput::install_code`       | `libjvm.dylib` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|     % | Samples | Callee                                   | Location                                                                             |
| ----: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------------ |
| 94.4% |   1,193 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                                   |
|  5.5% |      70 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                                   |
|  0.1% |       1 | `<init>(Object, Object, Reference)`      | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3$_closure7` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|     % | Samples | Callee                      | Location                                                 |
| ----: | ------: | --------------------------- | -------------------------------------------------------- |
| 75.1% |     855 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`               |
|  6.3% |      72 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`         |
|  6.3% |      72 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.IndentationRule`           |
|  2.5% |      29 | `applyTo(SourceCode, List)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule` |
|  1.8% |      21 | `applyTo(SourceCode, List)` | `org.codenarc.rule.unused.UnusedVariableRule`            |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 28.5% |     284 | `PhaseIdealLoop::optimize`      | `libjvm.dylib` |
| 21.2% |     212 | `Compile::optimize_loops`       | `libjvm.dylib` |
| 19.1% |     191 | `PhaseIterGVN::optimize`        | `libjvm.dylib` |
|  6.1% |      61 | `Compile::inline_incrementally` | `libjvm.dylib` |
|  6.1% |      61 | `ConnectionGraph::do_analysis`  | `libjvm.dylib` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % | Samples | Callee                  | Location                                                |
| ----: | ------: | ----------------------- | ------------------------------------------------------- |
| 84.5% |     806 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                  |
|  6.8% |      65 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`              |
|  3.4% |      32 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |
|  2.4% |      23 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor`               |
|  0.4% |       4 | `getAstVisitor()`       | `org.codenarc.rule.convention.HashtableIsObsoleteRule`  |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Callee                          | Location                                                            |
| ----: | ------: | ------------------------------- | ------------------------------------------------------------------- |
| 81.2% |     715 | `visitClass(ClassNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
|  5.3% |      47 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`             |
|  3.7% |      33 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`     |
|  1.4% |      12 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.formatting.ClassEndsWithBlankLineAstVisitor`     |
|  1.2% |      11 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |

##### `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % | Samples | Callee                                        | Location                                                              |
| ---: | ------: | --------------------------------------------- | --------------------------------------------------------------------- |
| 0.7% |       5 | `visitImports(ModuleNode)`                    | `org.codenarc.rule.ClassReferenceAstVisitor`                          |
| 0.4% |       3 | `visitAnnotations(AnnotatedNode)`             | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                     |
| 0.3% |       2 | `visitAnnotations(AnnotatedNode)`             | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |
| 0.1% |       1 | `visitObjectInitializerStatements(ClassNode)` | `org.codenarc.rule.basic.EmptyInstanceInitializerAstVisitor`          |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 22.8% |     159 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| 15.8% |     110 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
|  9.3% |      65 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |
|  8.9% |      62 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  8.6% |      60 | `PhaseLive::compute`                       | `libjvm.dylib` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Callee                            | Location                                                            |
| ----: | ------: | --------------------------------- | ------------------------------------------------------------------- |
| 86.4% |     574 | `visitMethod(MethodNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
|  1.4% |       9 | `visitMethodComplete(MethodNode)` | `org.codenarc.rule.convention.NoDoubleAstVisitor`                   |
|  1.4% |       9 | `visitMethodEx(MethodNode)`       | `org.codenarc.rule.formatting.SpaceAfterClosingBraceAstVisitor`     |
|  1.2% |       8 | `visitMethodEx(MethodNode)`       | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`      |
|  1.1% |       7 | `visitMethodEx(MethodNode)`       | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                                               | Location       |
| ----: | ------: | ---------------------------------------------------- | -------------- |
| 87.7% |     541 | `Compilation::compile_java_method`                   | `libjvm.dylib` |
| 11.7% |      72 | `ciEnv::register_method`                             | `libjvm.dylib` |
|  0.3% |       2 | `DebugInformationRecorder::DebugInformationRecorder` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     617 | `Compilation::compile_method` | `libjvm.dylib` |

##### `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % | Samples | Callee                                          | Location                                                                    |
| ----: | ------: | ----------------------------------------------- | --------------------------------------------------------------------------- |
| 79.2% |     460 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
|  3.6% |      21 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`                |
|  3.1% |      18 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.unnecessary.UnnecessaryDefInMethodDeclarationAstVisitor` |
|  2.8% |      16 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                    |
|  2.1% |      12 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`                  |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 41.4% |     224 | `Compilation::emit_lir`        | `libjvm.dylib` |
| 39.7% |     215 | `Compilation::build_hir`       | `libjvm.dylib` |
| 17.6% |      95 | `Compilation::emit_code_body`  | `libjvm.dylib` |
|  1.3% |       7 | `ciMethod::ensure_method_data` | `libjvm.dylib` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % | Samples | Callee                            | Location                                                              |
| ---: | ------: | --------------------------------- | --------------------------------------------------------------------- |
| 1.2% |       6 | `visitAnnotations(AnnotatedNode)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                     |
| 0.2% |       1 | `visitAnnotations(AnnotatedNode)` | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 84.5% |     419 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| 14.9% |      74 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `visitBlockStatement(BlockStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % | Samples | Callee                      | Location                                                       |
| ---: | ------: | --------------------------- | -------------------------------------------------------------- |
| 2.3% |      11 | `visitStatement(Statement)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor` |

##### `visitExpressionStatement(ExpressionStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % | Samples | Callee                      | Location                                                        |
| ---: | ------: | --------------------------- | --------------------------------------------------------------- |
| 3.8% |      16 | `visitStatement(Statement)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`  |
| 0.2% |       1 | `visitStatement(Statement)` | `org.codenarc.rule.convention.CouldBeSwitchStatementAstVisitor` |
| 0.2% |       1 | `vtable stub`               | `<unknown>`                                                     |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 99.8% |     418 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 34.4% |     144 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 17.7% |      74 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| 12.0% |      50 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
| 10.3% |      43 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
|  5.5% |      23 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                    | Location       |
| ----: | ------: | ----------------------------------------- | -------------- |
| 94.4% |     322 | `PhaseIterGVN::transform_old`             | `libjvm.dylib` |
|  0.6% |       2 | `PhiNode::hash`                           | `libjvm.dylib` |
|  0.6% |       2 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |
|  0.6% |       2 | `MultiNode::hash`                         | `libjvm.dylib` |
|  0.3% |       1 | `BoolNode::Opcode`                        | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 16.1% |      52 | `StoreNode::Ideal`           | `libjvm.dylib` |
| 13.0% |      42 | `PhaseIterGVN::subsume_node` | `libjvm.dylib` |
|  9.9% |      32 | `RegionNode::Ideal`          | `libjvm.dylib` |
|  9.3% |      30 | `PhiNode::Ideal`             | `libjvm.dylib` |
|  6.5% |      21 | `NodeHash::hash_find_insert` | `libjvm.dylib` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)

|     % | Samples | Callee                                   | Location                                            |
| ----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 99.6% |     268 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  0.4% |       1 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000b8010c8400` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|     % | Samples | Callee        | Location                                                    |
| ----: | ------: | ------------- | ----------------------------------------------------------- |
| 97.6% |     244 | `init()`      | `org.codenarc.analyzer.SuppressionAnalyzer`                 |
|  0.4% |       1 | `getName()`   | `org.codenarc.rule.groovyism.ExplicitCallToGetAtMethodRule` |
|  0.4% |       1 | `itable stub` | `<unknown>`                                                 |
|  0.4% |       1 | `getName()`   | `org.codenarc.rule.exceptions.SwallowThreadDeathRule`       |
|  0.4% |       1 | `getName()`   | `org.codenarc.rule.design.CompareToWithoutComparableRule`   |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

|      % | Samples | Callee                           | Location                           |
| -----: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% |     245 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|     % | Samples | Callee                                                           | Location                           |
| ----: | ------: | ---------------------------------------------------------------- | ---------------------------------- |
| 86.5% |     211 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
|  8.2% |      20 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  3.7% |       9 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder` |
|  1.2% |       3 | `linkToCallSite(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Callee     | Location                                 |
| -----: | ------: | ---------- | ---------------------------------------- |
| 100.0% |     244 | `getAst()` | `org.codenarc.source.AbstractSourceCode` |

##### `Matcher::match` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 75.2% |     173 | `Matcher::xform`                              | `libjvm.dylib` |
|  9.6% |      22 | `Matcher::find_shared`                        | `libjvm.dylib` |
|  6.5% |      15 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |
|  0.9% |       2 | `ProjNode::Opcode`                            | `libjvm.dylib` |
|  0.9% |       2 | `ConNode::Opcode`                             | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 77.7% |     174 | `LinearScan::do_linear_scan` | `libjvm.dylib` |
| 21.9% |      49 | `BlockList::iterate_forward` | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     212 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|     % | Samples | Callee                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 35.6% |      62 | `LinearScan::allocate_registers`      | `libjvm.dylib` |
| 20.1% |      35 | `LinearScan::assign_reg_num`          | `libjvm.dylib` |
| 14.4% |      25 | `LinearScan::build_intervals`         | `libjvm.dylib` |
| 13.8% |      24 | `LinearScan::compute_local_live_sets` | `libjvm.dylib` |
|  4.0% |       7 | `LinearScan::resolve_data_flow`       | `libjvm.dylib` |

##### `visitArgumentlistExpression(ArgumentListExpression)` (`org.codehaus.groovy.ast.CodeVisitorSupport`)

|    % | Samples | Callee        | Location    |
| ---: | ------: | ------------- | ----------- |
| 0.9% |       1 | `vtable stub` | `<unknown>` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractSharedAstVisitorRule`)

|     % | Samples | Callee                                  | Location                                                |
| ----: | ------: | --------------------------------------- | ------------------------------------------------------- |
| 77.8% |      56 | `applyVisitor(AstVisitor, SourceCode)`  | `org.codenarc.rule.AbstractSharedAstVisitorRule`        |
|  6.9% |       5 | `getAstVisitor(SourceCode)`             | `org.codenarc.rule.unused.UnusedPrivateFieldRule`       |
|  5.6% |       4 | `getViolations(AstVisitor, SourceCode)` | `org.codenarc.rule.design.PrivateFieldCouldBeFinalRule` |
|  4.2% |       3 | `getAstVisitor(SourceCode)`             | `org.codenarc.rule.unused.UnusedPrivateMethodRule`      |
|  4.2% |       3 | `getViolations(AstVisitor, SourceCode)` | `org.codenarc.rule.unused.UnusedPrivateMethodRule`      |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame. `…` stands for frames the entry filter hides.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2.4% |     137 | `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b801320400`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute()` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute(String[])` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                      |
| 1.7% |      98 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.6% |      91 | `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b801320400`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute()` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute(String[])` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.5% |      88 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute()` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute(String[])` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`) |
| 1.5% |      85 | `Matcher::xform` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.0% |      60 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute()` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute(String[])` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                           |
| 1.0% |      59 | `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.9% |      50 | `ciEnv::register_method` (`libjvm.dylib`) ← `Compilation::compile_method` ← `Compilation::Compilation` ← … ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.8% |      45 | `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.7% |      43 | `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.7% |      39 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute()` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute(String[])` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                 |
| 0.6% |      33 | `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.5% |      32 | `PhaseLive::compute` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.5% |      31 | `CompileQueue::get` (`libjvm.dylib`) ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.5% |      28 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute()` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute(String[])` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                         |
| 0.5% |      27 | `PhaseChaitin::elide_copy` (`libjvm.dylib`) ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.5% |      27 | `Compilation::build_hir` (`libjvm.dylib`) ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← … ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.4% |      25 | `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.4% |      24 | `ciEnv::register_method` (`libjvm.dylib`) ← `PhaseOutput::install_code` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.3% |      20 | `PhaseOutput::BuildOopMaps` (`libjvm.dylib`) ← `PhaseOutput::Output` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
