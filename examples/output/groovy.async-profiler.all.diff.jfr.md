# Sampling profile diff

6,237 samples → 8,604 samples (+2,367 samples, +38.0%).

| Category          | Change |  Delta |             % |       Samples |
| ----------------- | -----: | -----: | ------------: | ------------: |
| native            | +43.6% | +1,982 | 72.8% → 75.8% | 4,543 → 6,525 |
| stdlib            | +24.5% |   +377 | 24.6% → 22.2% | 1,536 → 1,913 |
| ours              |  -2.0% |     -2 |   1.6% → 1.1% |       99 → 97 |
| jit               | +17.9% |    +10 |   0.9% → 0.8% |       56 → 66 |
| garbage collector |   0.0% |      0 |         <0.1% |             3 |

Hidden functions account for 97.5% of samples taken, so the hottest are also shown.

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|   Change | Delta |            % |   Samples | Function                                   | Location                               |
| -------: | ----: | -----------: | --------: | ------------------------------------------ | -------------------------------------- |
|  +793.0% |  +341 |  0.7% → 4.5% |  43 → 384 | `__psynch_cvwait`                          | `libsystem_kernel.dylib`               |
|  +583.0% |  +274 |  0.8% → 3.7% |  47 → 321 | `__psynch_mutexwait`                       | `libsystem_kernel.dylib`               |
| +1083.3% |   +65 |  0.1% → 0.8% |    6 → 71 | `semaphore_wait_trap`                      | `libsystem_kernel.dylib`               |
|   +68.6% |   +35 |  0.8% → 1.0% |   51 → 86 | `_platform_memmove`                        | `libsystem_platform.dylib`             |
|   +57.7% |   +30 |  0.8% → 1.0% |   52 → 82 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib`                         |
|   +37.7% |   +23 |         1.0% |   61 → 84 | `IndexSetIterator::advance_and_next`       | `libjvm.dylib`                         |
|   +19.6% |   +22 |  1.8% → 1.6% | 112 → 134 | `Node::dominates`                          | `libjvm.dylib`                         |
|   +20.2% |   +20 |  1.6% → 1.4% |  99 → 119 | `pthread_jit_write_protect_np`             | `libsystem_pthread.dylib`              |
|   +15.8% |   +19 |  1.9% → 1.6% | 120 → 139 | `PhaseChaitin::Split`                      | `libjvm.dylib`                         |
|   +28.4% |   +19 |  1.1% → 1.0% |   67 → 86 | `Arena::contains`                          | `libjvm.dylib`                         |
|   +45.0% |   +18 |  0.6% → 0.7% |   40 → 58 | `PhaseAggressiveCoalesce::insert_copies`   | `libjvm.dylib`                         |
|   +17.2% |   +16 |  1.5% → 1.3% |  93 → 109 | `cast(Object)`                             | `java.lang.Class`                      |
|   +16.3% |   +14 |  1.4% → 1.2% |  86 → 100 | `RegisterMap::RegisterMap`                 | `libjvm.dylib`                         |
|   +19.7% |   +13 |  1.1% → 0.9% |   66 → 79 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib`                         |
|  +500.0% |   +10 | <0.1% → 0.1% |    2 → 12 | `I2C/C2I adapters(0xbb)`                   | `<unknown>`                            |
|   +21.6% |    +8 |  0.6% → 0.5% |   37 → 45 | `PhaseLive::compute`                       | `libjvm.dylib`                         |
|  +500.0% |    +5 | <0.1% → 0.1% |     1 → 6 | `I2C/C2I adapters(0xbbb)`                  | `<unknown>`                            |
|  +100.0% |    +4 |         0.1% |     4 → 8 | `I2C/C2I adapters(0xb)`                    | `<unknown>`                            |
|      new |    +4 | 0.0% → <0.1% |     0 → 4 | `<init>()`                                 | `org.codenarc.rule.AbstractAstVisitor` |
|    +6.5% |    +3 |  0.7% → 0.6% |   46 → 49 | `PhaseIdealLoop::build_loop_late`          | `libjvm.dylib`                         |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % |  Samples | Function                                                                                                                                                 | Location                                                        |
| ------: | ----: | -----------: | -------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
|  -12.4% |   -14 |  1.8% → 1.2% | 113 → 99 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`                                                 |
|   -9.3% |    -5 |  0.9% → 0.6% |  54 → 49 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`                                                  |
|  -71.4% |    -5 | 0.1% → <0.1% |    7 → 2 | `I2C/C2I adapters(0xbbbb)`                                                                                                                               | `<unknown>`                                                     |
|   -5.1% |    -4 |  1.3% → 0.9% |  78 → 74 | `newInstance(Class, int)`                                                                                                                                | `java.lang.reflect.Array`                                       |
| removed |    -2 | <0.1% → 0.0% |    2 → 0 | `<init>(Object, Object)`                                                                                                                                 | `groovy.lang.Closure`                                           |
| removed |    -2 | <0.1% → 0.0% |    2 → 0 | `applyTo(SourceCode, List)`                                                                                                                              | `org.codenarc.rule.AbstractAstVisitorRule`                      |
|   -5.4% |    -2 |  0.6% → 0.4% |  37 → 35 | `invokeBasic(Object[])`                                                                                                                                  | `java.lang.invoke.MethodHandle`                                 |
|  -50.0% |    -2 | 0.1% → <0.1% |    4 → 2 | `visit(GroovyCodeVisitor)`                                                                                                                               | `org.codehaus.groovy.ast.expr.MethodCallExpression`             |
| removed |    -2 | <0.1% → 0.0% |    2 → 0 | `checkNode(ASTNode)`                                                                                                                                     | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`  |
| removed |    -2 | <0.1% → 0.0% |    2 → 0 | `visitBlockStatement(BlockStatement)`                                                                                                                    | `org.codenarc.rule.formatting.SpaceAfterClosingBraceAstVisitor` |
| removed |    -2 | <0.1% → 0.0% |    2 → 0 | `getCompilerPhase()`                                                                                                                                     | `org.codenarc.rule.AbstractRule`                                |
| removed |    -2 | <0.1% → 0.0% |    2 → 0 | `writeViolation(Writer, Violation, String)`                                                                                                              | `org.codenarc.report.TextReportWriter`                          |
|  -50.0% |    -1 |        <0.1% |    2 → 1 | `I2C/C2I adapters(0xbbba)`                                                                                                                               | `<unknown>`                                                     |
|  -33.3% |    -1 |        <0.1% |    3 → 2 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`                                                            | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                 |
| removed |    -1 | <0.1% → 0.0% |    1 → 0 | `linkToCallSite(Object, Object)`                                                                                                                         | `java.lang.invoke.Invokers$Holder`                              |
| removed |    -1 | <0.1% → 0.0% |    1 → 0 | `linkToCallSite(Object, Object, int, Object)`                                                                                                            | `java.lang.invoke.LambdaForm$MH.0x00000004010d8c00`             |
| removed |    -1 | <0.1% → 0.0% |    1 → 0 | `I2C/C2I adapters(0x)`                                                                                                                                   | `<unknown>`                                                     |
| removed |    -1 | <0.1% → 0.0% |    1 → 0 | `init()`                                                                                                                                                 | `org.codenarc.source.AbstractSourceCode`                        |
| removed |    -1 | <0.1% → 0.0% |    1 → 0 | `getAst()`                                                                                                                                               | `org.codenarc.source.AbstractSourceCode`                        |
|   -9.1% |    -1 |  0.2% → 0.1% |  11 → 10 | `vtable stub`                                                                                                                                            | `<unknown>`                                                     |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |       Samples | Function                                                                                      | Location                                                                    |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
|  +30.5% |  +748 | 39.3% → 37.2% | 2,454 → 3,202 | `main(String[])`                                                                              | `org.codenarc.CodeNarc`                                                     |
|  +30.4% |  +746 | 39.4% → 37.2% | 2,457 → 3,203 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                             |
|  +30.4% |  +745 | 39.3% → 37.1% | 2,450 → 3,195 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                                          |
|  +30.2% |  +736 | 39.1% → 36.9% | 2,439 → 3,175 | `execute(String[])`                                                                           | `org.codenarc.CodeNarc`                                                     |
|  +30.1% |  +734 | 39.1% → 36.9% | 2,439 → 3,173 | `linkToCallSite(Object, Object)`                                                              | `java.lang.invoke.Invokers$Holder`                                          |
|  +30.2% |  +731 | 38.8% → 36.6% | 2,421 → 3,152 | `execute()`                                                                                   | `org.codenarc.CodeNarcRunner`                                               |
|  +29.9% |  +702 | 37.6% → 35.4% | 2,345 → 3,047 | `linkToCallSite(Object, Object, Object, Object)`                                              | `java.lang.invoke.Invokers$Holder`                                          |
|  +30.1% |  +698 | 37.2% → 35.1% | 2,318 → 3,016 | `linkToCallSite(Object, Object, Object, Object, Object)`                                      | `java.lang.invoke.Invokers$Holder`                                          |
|  +30.2% |  +685 | 36.3% → 34.3% | 2,266 → 2,951 | `analyze(RuleSet)`                                                                            | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  +30.2% |  +685 | 36.3% → 34.3% | 2,265 → 2,950 | `processDirectory(String, RuleSet)`                                                           | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  +30.2% |  +684 | 36.3% → 34.3% | 2,265 → 2,949 | `doCall(Object)`                                                                              | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|  +30.2% |  +682 | 36.2% → 34.1% | 2,256 → 2,938 | `processFile(String, DirectoryResults, RuleSet)`                                              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  +30.0% |  +674 | 36.0% → 34.0% | 2,248 → 2,922 | `collectViolations(SourceCode, RuleSet)`                                                      | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|  +31.9% |  +585 | 29.4% → 28.1% | 1,836 → 2,421 | `measureRuleProcessingTime(Rule, Closure)`                                                    | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|  +29.5% |  +423 | 23.0% → 21.6% | 1,436 → 1,859 | `doCall(Object)`                                                                              | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
| +793.0% |  +341 |   0.7% → 4.5% |      43 → 384 | `__psynch_cvwait`                                                                             | `libsystem_kernel.dylib`                                                    |
|  +26.3% |  +340 | 20.7% → 19.0% | 1,294 → 1,634 | `applyTo(SourceCode)`                                                                         | `org.codenarc.rule.AbstractRule`                                            |
|  +28.2% |  +307 | 17.4% → 16.2% | 1,087 → 1,394 | `applyTo(SourceCode, List)`                                                                   | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
|  +28.3% |  +290 | 16.4% → 15.3% | 1,023 → 1,313 | `visitClass(ClassNode)`                                                                       | `org.codenarc.rule.AbstractAstVisitor`                                      |
| +583.0% |  +274 |   0.8% → 3.7% |      47 → 321 | `__psynch_mutexwait`                                                                          | `libsystem_kernel.dylib`                                                    |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |            % |  Samples | Function                                                                                                                                                 | Location                                                                     |
| ------: | ----: | -----------: | -------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| removed |   -42 |  0.7% → 0.0% |   42 → 0 | `linkToCallSite(Object, int, Object, Object)`                                                                                                            | `java.lang.invoke.LambdaForm$MH.0x00000004013d8c00`                          |
| removed |   -26 |  0.4% → 0.0% |   26 → 0 | `linkToCallSite(Object, int, int, Object)`                                                                                                               | `java.lang.invoke.LambdaForm$MH.0x00000004013ef800`                          |
| removed |   -16 |  0.3% → 0.0% |   16 → 0 | `linkToCallSite(Object, Object, Object, int, Object)`                                                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000040134bc00`                          |
|  -12.4% |   -14 |  1.8% → 1.2% | 113 → 99 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`                                                              |
| removed |   -12 |  0.2% → 0.0% |   12 → 0 | `linkToCallSite(Object, Object, int, int, Object)`                                                                                                       | `java.lang.invoke.LambdaForm$MH.0x0000000401929400`                          |
|  -81.8% |    -9 | 0.2% → <0.1% |   11 → 2 | `visitBlockStatement(BlockStatement)`                                                                                                                    | `org.codenarc.rule.unnecessary.UnnecessaryIfStatementAstVisitor`             |
|  -47.1% |    -8 |  0.3% → 0.1% |   17 → 9 | `super$3$visitDeclarationExpression(DeclarationExpression)`                                                                                              | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`                 |
|  -47.1% |    -8 |  0.3% → 0.1% |   17 → 9 | `visitDeclarationExpression(DeclarationExpression)`                                                                                                      | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`                 |
|  -53.8% |    -7 |  0.2% → 0.1% |   13 → 6 | `booleanUnbox(Object)`                                                                                                                                   | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation`         |
|  -53.8% |    -7 |  0.2% → 0.1% |   13 → 6 | `applyTo(SourceCode, List)`                                                                                                                              | `org.codenarc.rule.formatting.ConsecutiveBlankLinesRule`                     |
|  -10.9% |    -6 |  0.9% → 0.6% |  55 → 49 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`                                                               |
|  -37.5% |    -6 |  0.3% → 0.1% |  16 → 10 | `visitConstructorOrMethod(MethodNode, boolean)`                                                                                                          | `org.codenarc.rule.formatting.BracesForMethodAstVisitor`                     |
|  -13.3% |    -6 |  0.7% → 0.5% |  45 → 39 | `applyTo(SourceCode, List)`                                                                                                                              | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`                     |
| removed |    -6 |  0.1% → 0.0% |    6 → 0 | `visitMethodComplete(MethodNode)`                                                                                                                        | `org.codenarc.rule.convention.PublicMethodsBeforeNonPublicMethodsAstVisitor` |
|  -42.9% |    -6 |  0.2% → 0.1% |   14 → 8 | `visitMethodEx(MethodNode)`                                                                                                                              | `org.codenarc.rule.formatting.IndentationAstVisitor`                         |
|  -26.1% |    -6 |  0.4% → 0.2% |  23 → 17 | `visitConstructorOrMethod(MethodNode, boolean)`                                                                                                          | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`                   |
|  -71.4% |    -5 | 0.1% → <0.1% |    7 → 2 | `I2C/C2I adapters(0xbbbb)`                                                                                                                               | `<unknown>`                                                                  |
|  -14.3% |    -5 |  0.6% → 0.3% |  35 → 30 | `visitConstructorOrMethod(MethodNode, boolean)`                                                                                                          | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`                 |
|  -23.8% |    -5 |  0.3% → 0.2% |  21 → 16 | `visitMethodCallExpression(MethodCallExpression)`                                                                                                        | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                     |
|  -45.5% |    -5 |  0.2% → 0.1% |   11 → 6 | `visitClassComplete(ClassNode)`                                                                                                                          | `org.codenarc.rule.formatting.ClassStartsWithBlankLineAstVisitor`            |

# Allocated heap profile diff

Allocated 9.43 MiB → 7.34 MiB (-2.095 MiB, -22.2%) over 24,506 samples → 24,284 samples (404 B → 317 B per sample).

| Category | Change |      Delta |     % |                Size |         Samples |
| -------- | -----: | ---------: | ----: | ------------------: | --------------: |
| stdlib   | -22.2% | -2.095 MiB | 99.9% | 9.43 MiB → 7.33 MiB | 24,311 → 24,084 |
| ours     |  +5.0% |     +352 B |  0.1% | 6.88 KiB → 7.22 KiB |       195 → 200 |

Hidden functions account for 99.7% of bytes allocated, so the hottest are also shown.

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

|  Change |       Delta |             % |               Size |   Samples | Function                                               | Location                                                                   |
| ------: | ----------: | ------------: | -----------------: | --------: | ------------------------------------------------------ | -------------------------------------------------------------------------- |
|  -23.7% | -800.64 KiB | 35.0% → 34.3% | 3.3 MiB → 2.52 MiB | 149 → 156 | `copyOf(byte[], int)`                                  | `java.util.Arrays`                                                         |
|  -12.7% |      -672 B |          0.1% | 5.16 KiB → 4.5 KiB | 165 → 144 | `iterator()`                                           | `java.util.ArrayList`                                                      |
|  -75.6% |      -248 B |         <0.1% |       328 B → 80 B |     7 → 2 | `markVariableAsReferenced(String, VariableExpression)` | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                        |
|  -40.0% |      -224 B |         <0.1% |      560 B → 336 B |    10 → 6 | `doCall(Object)`                                       | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
|  -57.1% |      -224 B |         <0.1% |      392 B → 168 B |     7 → 3 | `filter(Predicate)`                                    | `java.util.stream.ReferencePipeline`                                       |
|  -85.7% |      -192 B |         <0.1% |       224 B → 32 B |     7 → 1 | `shouldApplyThisRuleTo(SourceCode)`                    | `org.codenarc.rule.AbstractRule`                                           |
|  -30.8% |      -160 B |         <0.1% |      520 B → 360 B |    13 → 9 | `createRange(Object, Object, boolean, boolean)`        | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                        |
|  -15.9% |      -112 B |         <0.1% |      704 B → 592 B |   16 → 14 | `matches(String)`                                      | `org.codenarc.util.WildcardPattern`                                        |
| removed |      -112 B |  <0.1% → 0.0% |        112 B → 0 B |     2 → 0 | `processMethodOrConstructorCall(MethodCall)`           | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                   |
|  -85.7% |       -96 B |         <0.1% |       112 B → 16 B |     2 → 1 | `convertStringWithWildcardsToRegex(String)`            | `org.codenarc.util.WildcardPattern`                                        |
|  -50.0% |       -96 B |         <0.1% |       192 B → 96 B |     8 → 4 | `applyTo(SourceCode)`                                  | `org.codenarc.rule.AbstractRule`                                           |
|  -80.0% |       -96 B |         <0.1% |       120 B → 24 B |     2 → 1 | `applyTo(SourceCode, List)`                            | `org.codenarc.rule.unused.UnusedVariableRule`                              |
| removed |       -96 B |  <0.1% → 0.0% |         96 B → 0 B |     2 → 0 | `hasOpeningBraceOnSameLine(MethodNode)`                | `org.codenarc.rule.formatting.BracesForMethodAstVisitor`                   |
|  -15.8% |       -96 B |         <0.1% |      608 B → 512 B |   38 → 32 | `valueOf(int)`                                         | `java.lang.Integer`                                                        |
|  -55.6% |       -80 B |         <0.1% |       144 B → 64 B |     3 → 2 | `isViolationSuppressed(Violation)`                     | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
|  -71.4% |       -80 B |         <0.1% |       112 B → 32 B |     4 → 1 | `getViolationLocationString(Violation, String)`        | `org.codenarc.report.TextReportWriter`                                     |
| removed |       -64 B |  <0.1% → 0.0% |         64 B → 0 B |     2 → 0 | `visitMethod(MethodNode)`                              | `org.codenarc.rule.naming.MethodNameAstVisitor`                            |
| removed |       -64 B |  <0.1% → 0.0% |         64 B → 0 B |     4 → 0 | `<init>(int, int, int)`                                | `org.gmetrics.metric.abc.AbcVector`                                        |
| removed |       -56 B |  <0.1% → 0.0% |         56 B → 0 B |     1 → 0 | `lineNumberForMethod(MethodNode, SourceCode)`          | `org.gmetrics.metric.AbstractMethodMetric`                                 |
| removed |       -56 B |  <0.1% → 0.0% |         56 B → 0 B |     1 → 0 | `visitConstructorOrMethod(MethodNode, boolean)`        | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                   |

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
| -23.7% | -800.617 KiB | 35.0% → 34.3% |  3.3 MiB → 2.52 MiB |       149 → 157 | `copyOf(byte[], int)`                                    | `java.util.Arrays`                                                          |
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

# Lock contention profile diff

Blocked 2.3ms → 4.2ms (+1.90ms, +84.0%) over 35 samples → 32 samples (64.7µs → 130.1µs per sample).

| Category | Change |   Delta |      % |          Time | Samples |
| -------- | -----: | ------: | -----: | ------------: | ------: |
| stdlib   | +84.0% | +1.90ms | 100.0% | 2.3ms → 4.2ms | 35 → 32 |

Hidden functions account for 100.0% of time blocked, so the hottest are also shown.

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked directly in the function body, excluding callees.

| Change |   Delta |             % |          Time | Samples | Function             | Location                             |
| -----: | ------: | ------------: | ------------: | ------: | -------------------- | ------------------------------------ |
| +53.1% | +0.94ms | 78.2% → 65.1% | 1.8ms → 2.7ms | 17 → 18 | `enqueue(Reference)` | `java.lang.ref.NativeReferenceQueue` |

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
|   +53.1% | +0.94ms | 78.2% → 65.1% | 1.8ms → 2.7ms | 17 → 18 | `enqueue(Reference)`                                     | `java.lang.ref.NativeReferenceQueue`                                        |
| +1070.8% | +0.69ms |  2.9% → 18.2% | 0.1ms → 0.8ms |   3 → 4 | `visitConstructorOrMethod(MethodNode, boolean)`          | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
| +1070.8% | +0.69ms |  2.9% → 18.2% | 0.1ms → 0.8ms |   3 → 4 | `visitMethod(MethodNode)`                                | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
| +1070.8% | +0.69ms |  2.9% → 18.2% | 0.1ms → 0.8ms |   3 → 4 | `visitMethod(MethodNode)`                                | `org.codenarc.rule.AbstractAstVisitor`                                      |
| +1070.8% | +0.69ms |  2.9% → 18.2% | 0.1ms → 0.8ms |   3 → 4 | `visitClass(ClassNode)`                                  | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
| +1070.8% | +0.69ms |  2.9% → 18.2% | 0.1ms → 0.8ms |   3 → 4 | `visitClass(ClassNode)`                                  | `org.codenarc.rule.AbstractAstVisitor`                                      |
| +1070.8% | +0.69ms |  2.9% → 18.2% | 0.1ms → 0.8ms |   3 → 4 | `applyTo(SourceCode, List)`                              | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
| +1070.8% | +0.69ms |  2.9% → 18.2% | 0.1ms → 0.8ms |   3 → 4 | `applyTo(SourceCode)`                                    | `org.codenarc.rule.AbstractRule`                                            |

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
