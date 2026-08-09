# Allocated heap profile diff

Allocated 9.18 MiB → 7.94 MiB (-1.234 MiB, -13.5%) over 24,242 samples (397 B → 344 B per sample).

| Category         | Change |      Delta |     % |                Size |         Samples |
| ---------------- | -----: | ---------: | ----: | ------------------: | --------------: |
| Standard library | -13.5% | -1.234 MiB | 99.9% | 9.17 MiB → 7.94 MiB | 24,027 → 24,039 |
| Ours             |  -2.7% |     -208 B |  0.1% | 7.61 KiB → 7.41 KiB |       215 → 203 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |  Delta |            % |                Size |   Samples | Function                                                | Location                                                                        |
| ------: | -----: | -----------: | ------------------: | --------: | ------------------------------------------------------- | ------------------------------------------------------------------------------- |
|   +9.5% | +880 B |         0.1% | 9.02 KiB → 9.88 KiB | 105 → 115 | `compile(String)`                                       | `java.util.regex.Pattern`                                                       |
|  +70.0% | +392 B |        <0.1% |       560 B → 952 B |   10 → 17 | `doCall(Object)`                                        | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`      |
| +142.9% | +160 B |        <0.1% |       112 B → 272 B |     2 → 6 | `visitConstantExpression(ConstantExpression)`           | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`                    |
|  +66.7% | +160 B |        <0.1% |       240 B → 400 B |    6 → 10 | `createRange(Object, Object, boolean, boolean)`         | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                             |
|     new | +128 B | 0.0% → <0.1% |         0 B → 128 B |     0 → 4 | `convertStringWithWildcardsToRegex(String)`             | `org.codenarc.util.WildcardPattern`                                             |
|  +70.0% | +112 B |        <0.1% |       160 B → 272 B |     4 → 6 | `markVariableAsReferenced(String, VariableExpression)`  | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                             |
|     new | +104 B | 0.0% → <0.1% |         0 B → 104 B |     0 → 3 | `visitMethodEx(MethodNode)`                             | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`                  |
| +166.7% |  +80 B |        <0.1% |        48 B → 128 B |     1 → 4 | `<init>(String, boolean)`                               | `org.codenarc.util.WildcardPattern`                                             |
|     new |  +80 B | 0.0% → <0.1% |          0 B → 80 B |     0 → 2 | `visitDeclarationExpression(DeclarationExpression)`     | `org.codenarc.rule.naming.VariableNameAstVisitor`                               |
|  +14.3% |  +72 B |        <0.1% |       504 B → 576 B |     7 → 8 | `doCall(Object)`                                        | `org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3` |
|     new |  +72 B | 0.0% → <0.1% |          0 B → 72 B |     0 → 3 | `visitVariableExpression(VariableExpression)`           | `org.codenarc.rule.convention.NoFloatAstVisitor`                                |
|     new |  +64 B | 0.0% → <0.1% |          0 B → 64 B |     0 → 2 | `addViolation(ASTNode, String)`                         | `org.codenarc.rule.AbstractAstVisitor`                                          |
|  +50.0% |  +64 B |        <0.1% |       128 B → 192 B |     5 → 7 | `getViolationLocationString(Violation, String)`         | `org.codenarc.report.TextReportWriter`                                          |
|  +25.0% |  +56 B |        <0.1% |       224 B → 280 B |     4 → 5 | `filter(Predicate)`                                     | `java.util.stream.ReferencePipeline`                                            |
| +100.0% |  +56 B |        <0.1% |        56 B → 112 B |     1 → 2 | `addMethodsToMetricResults(SourceCode, ClassNode, Map)` | `org.gmetrics.metric.AbstractMethodMetric`                                      |
|     new |  +56 B | 0.0% → <0.1% |          0 B → 56 B |     0 → 1 | `visitConstructorOrMethod(MethodNode, boolean)`         | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`                      |
| +100.0% |  +56 B |        <0.1% |        56 B → 112 B |     1 → 2 | `visitBlockStatement(BlockStatement)`                   | `org.codenarc.rule.formatting.IndentationAstVisitor`                            |
|     new |  +56 B | 0.0% → <0.1% |          0 B → 56 B |     0 → 2 | `visitMethodEx(MethodNode)`                             | `org.codenarc.rule.convention.ImplicitReturnStatementAstVisitor`                |
|     new |  +56 B | 0.0% → <0.1% |          0 B → 56 B |     0 → 1 | `visitClassComplete(ClassNode)`                         | `org.codenarc.rule.convention.StaticFieldsBeforeInstanceFieldsAstVisitor`       |
| +100.0% |  +56 B |        <0.1% |        56 B → 112 B |     1 → 2 | `removeAnyViolationsForSameLine(int)`                   | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`                  |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |      Delta |            % |                Size |   Samples | Function                                                      | Location                                                 |
| ------: | ---------: | -----------: | ------------------: | --------: | ------------------------------------------------------------- | -------------------------------------------------------- |
|  -15.1% | -1.484 KiB |         0.1% | 9.84 KiB → 8.36 KiB | 126 → 107 | `matcher(CharSequence)`                                       | `java.util.regex.Pattern`                                |
|  -14.6% |     -336 B |        <0.1% | 2.25 KiB → 1.92 KiB |   48 → 41 | `<init>()`                                                    | `java.util.HashSet`                                      |
|  -41.7% |     -320 B |        <0.1% |       768 B → 448 B |    12 → 7 | `collectViolations(SourceCode, RuleSet)`                      | `org.codenarc.analyzer.AbstractSourceAnalyzer`           |
|  -29.0% |     -288 B |        <0.1% |       992 B → 704 B |   20 → 16 | `matches(String)`                                             | `org.codenarc.util.WildcardPattern`                      |
|  -36.4% |     -224 B |        <0.1% |       616 B → 392 B |   20 → 12 | `writeViolation(Writer, Violation, String)`                   | `org.codenarc.report.TextReportWriter`                   |
|  -38.1% |     -192 B |        <0.1% |       504 B → 312 B |   21 → 13 | `isCase(Object, Object)`                                      | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`      |
| removed |     -192 B | <0.1% → 0.0% |         192 B → 0 B |     6 → 0 | `shouldApplyThisRuleTo(SourceCode)`                           | `org.codenarc.rule.AbstractRule`                         |
|  -83.3% |     -160 B |        <0.1% |        192 B → 32 B |     6 → 1 | `checkForCorrectColumn(ASTNode, String, int)`                 | `org.codenarc.rule.formatting.IndentationAstVisitor`     |
|  -25.6% |     -160 B |        <0.1% |       624 B → 464 B |   39 → 29 | `valueOf(int)`                                                | `java.lang.Integer`                                      |
|  -57.1% |     -128 B |        <0.1% |        224 B → 96 B |    10 → 4 | `<init>()`                                                    | `org.codenarc.rule.AbstractAstVisitor`                   |
|  -83.3% |      -80 B |        <0.1% |         96 B → 16 B |     6 → 1 | `applyTo(SourceCode, List)`                                   | `org.codenarc.rule.AbstractAstVisitorRule`               |
|  -76.9% |      -80 B |        <0.1% |        104 B → 24 B |     3 → 1 | `processMethodOrConstructorCall(MethodCall)`                  | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor` |
|   -8.3% |      -72 B |        <0.1% |       864 B → 792 B |   36 → 33 | `toString()`                                                  | `java.lang.StringBuilder`                                |
|  -75.0% |      -72 B |        <0.1% |         96 B → 24 B |     4 → 1 | `applyTo(SourceCode)`                                         | `org.codenarc.rule.AbstractRule`                         |
| removed |      -72 B | <0.1% → 0.0% |          72 B → 0 B |     1 → 0 | `findReference(SourceCode, String, String)`                   | `org.codenarc.rule.imports.UnusedImportRule`             |
|  -60.0% |      -72 B |        <0.1% |        120 B → 48 B |     5 → 2 | `visitVariableExpression(VariableExpression)`                 | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor` |
| removed |      -56 B | <0.1% → 0.0% |          56 B → 0 B |     1 → 0 | `collectAllPrivateFields(ModuleNode)`                         | `org.codenarc.rule.unused.UnusedPrivateFieldRule`        |
| removed |      -56 B | <0.1% → 0.0% |          56 B → 0 B |     1 → 0 | `processImports(SourceCode, List)`                            | `org.codenarc.rule.imports.UnusedImportRule`             |
| removed |      -56 B | <0.1% → 0.0% |          56 B → 0 B |     1 → 0 | `getViolations(AstVisitor, SourceCode)`                       | `org.codenarc.rule.unused.UnusedPrivateFieldRule`        |
| removed |      -48 B | <0.1% → 0.0% |          48 B → 0 B |     1 → 0 | `addClosureFieldsToMetricResults(SourceCode, ClassNode, Map)` | `org.gmetrics.metric.AbstractMethodMetric`               |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|  Change |        Delta |           % |                Size |   Samples | Function                                                      | Location                                                              |
| ------: | -----------: | ----------: | ------------------: | --------: | ------------------------------------------------------------- | --------------------------------------------------------------------- |
|     new | +238.539 KiB | 0.0% → 2.9% |       0 B → 239 KiB | 0 → 2,213 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x0000000301322800`                   |
|  +34.2% | +182.531 KiB | 5.7% → 8.8% |   534 KiB → 717 KiB |   44 → 55 | `getText()`                                                   | `org.codenarc.source.SourceFile`                                      |
|     new | +111.414 KiB | 0.0% → 1.4% |       0 B → 111 KiB |   0 → 575 | `linkToCallSite(Object, Object, Object, int, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000030134c800`                   |
|  +42.4% | +104.484 KiB | 2.6% → 4.3% |   246 KiB → 351 KiB |   24 → 25 | `<init>(Object, Object)`                                      | `groovy.lang.Closure`                                                 |
|  +42.5% | +104.203 KiB | 2.6% → 4.3% |   245 KiB → 350 KiB |   15 → 16 | `<clinit>()`                                                  | `groovy.lang.Closure`                                                 |
|  +41.7% | +102.812 KiB | 2.6% → 4.3% |   247 KiB → 350 KiB |        16 | `<clinit>()`                                                  | `org.codenarc.CodeNarc`                                               |
|  +54.2% |  +89.296 KiB | 1.8% → 3.1% |   165 KiB → 254 KiB | 832 → 788 | `put(Object, Object)`                                         | `java.util.HashMap`                                                   |
| +149.7% |  +48.062 KiB | 0.3% → 1.0% | 32.1 KiB → 80.2 KiB |     5 → 8 | `getRawLine(SourceCode, int)`                                 | `org.codenarc.util.AstUtil`                                           |
| +149.4% |  +48.015 KiB | 0.3% → 1.0% | 32.1 KiB → 80.2 KiB |     6 → 8 | `findFirstNonAnnotationLine(ASTNode, SourceCode)`             | `org.codenarc.util.AstUtil`                                           |
|  +33.0% |  +47.843 KiB | 1.5% → 2.4% |   145 KiB → 193 KiB |   27 → 35 | `getLines()`                                                  | `org.codenarc.source.AbstractSourceCode`                              |
| +103.8% |  +46.992 KiB | 0.5% → 1.1% | 45.3 KiB → 92.3 KiB | 127 → 139 | `buildRuleSet()`                                              | `org.codenarc.CodeNarcRunner`                                         |
| +100.8% |  +45.468 KiB | 0.5% → 1.1% | 45.1 KiB → 90.6 KiB | 123 → 138 | `doCall(Object)`                                              | `org.codenarc.CodeNarcRunner$_createInitialRuleSetFromFiles_closure6` |
| +100.8% |  +45.468 KiB | 0.5% → 1.1% | 45.1 KiB → 90.6 KiB | 123 → 138 | `createInitialRuleSetFromFiles()`                             | `org.codenarc.CodeNarcRunner`                                         |
| +100.8% |  +45.468 KiB | 0.5% → 1.1% | 45.1 KiB → 90.6 KiB | 123 → 138 | `createInitialRuleSet()`                                      | `org.codenarc.CodeNarcRunner`                                         |
|  +98.5% |  +44.445 KiB | 0.5% → 1.1% | 45.1 KiB → 89.5 KiB | 122 → 136 | `<init>(String)`                                              | `org.codenarc.ruleset.XmlFileRuleSet`                                 |
|  +98.5% |  +44.445 KiB | 0.5% → 1.1% | 45.1 KiB → 89.5 KiB | 122 → 136 | `loadRuleSetFile(String)`                                     | `org.codenarc.ruleset.RuleSetUtil`                                    |
|  +98.6% |  +44.429 KiB | 0.5% → 1.1% | 45.1 KiB → 89.5 KiB | 121 → 135 | `<init>(Reader)`                                              | `org.codenarc.ruleset.XmlReaderRuleSet`                               |
|  +98.5% |  +44.406 KiB | 0.5% → 1.1% | 45.1 KiB → 89.5 KiB | 122 → 135 | `doCall(Object)`                                              | `org.codenarc.ruleset.XmlFileRuleSet$_closure1`                       |
|     new |  +43.414 KiB | 0.0% → 0.5% |      0 B → 43.4 KiB |   0 → 178 | `linkToCallSite(Object, Object, Object, Object, int, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301400400`                   |
|     new |  +35.828 KiB | 0.0% → 0.4% |      0 B → 35.8 KiB | 0 → 1,337 | `linkToCallSite(Object, long, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000030131ac00`                   |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |         Samples | Function                                                 | Location                                                                    |
| ------: | -----------: | ------------: | ------------------: | --------------: | -------------------------------------------------------- | --------------------------------------------------------------------------- |
|   -8.1% | -516.117 KiB | 68.2% → 72.4% | 6.25 MiB → 5.75 MiB | 24,167 → 24,166 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                                          |
|   -8.0% | -509.414 KiB | 67.9% → 72.2% | 6.23 MiB → 5.73 MiB | 23,905 → 23,883 | `execute()`                                              | `org.codenarc.CodeNarcRunner`                                               |
|   -7.9% | -503.726 KiB | 68.0% → 72.4% | 6.24 MiB → 5.75 MiB | 24,173 → 24,174 | `execute(String[])`                                      | `org.codenarc.CodeNarc`                                                     |
|   -7.8% | -469.453 KiB | 63.8% → 67.9% |  5.86 MiB → 5.4 MiB | 22,335 → 22,295 | `processFile(String, DirectoryResults, RuleSet)`         | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|   -7.8% | -468.531 KiB | 63.8% → 67.9% | 5.85 MiB → 5.39 MiB | 22,306 → 22,276 | `collectViolations(SourceCode, RuleSet)`                 | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|   -7.8% | -465.078 KiB | 63.8% → 68.0% |  5.86 MiB → 5.4 MiB | 22,354 → 22,316 | `doCall(Object)`                                         | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|   -7.7% | -463.695 KiB | 63.8% → 68.0% |  5.86 MiB → 5.4 MiB | 22,357 → 22,318 | `processDirectory(String, RuleSet)`                      | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|   -7.7% | -461.375 KiB | 63.8% → 68.1% | 5.86 MiB → 5.41 MiB | 22,361 → 22,323 | `analyze(RuleSet)`                                       | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|   -7.5% | -456.742 KiB | 64.5% → 68.9% | 5.92 MiB → 5.47 MiB | 23,261 → 23,242 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                          |
|   -6.2% | -451.429 KiB | 77.9% → 84.5% | 7.15 MiB → 6.71 MiB | 24,223 → 24,224 | `main(String[])`                                         | `org.codenarc.CodeNarc`                                                     |
|   -7.4% | -448.406 KiB | 64.5% → 69.0% | 5.92 MiB → 5.48 MiB | 23,399 → 23,397 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                          |
|   -6.0% | -439.609 KiB | 77.8% → 84.5% | 7.14 MiB → 6.71 MiB |          24,217 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                          |
|  -10.2% | -402.578 KiB | 42.2% → 43.8% | 3.87 MiB → 3.48 MiB |        109 → 95 | `loadClass(String)`                                      | `java.lang.ClassLoader`                                                     |
|  -17.4% | -398.382 KiB | 24.4% → 23.3% | 2.24 MiB → 1.85 MiB |   3,366 → 3,345 | `init()`                                                 | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
|  -17.3% | -398.335 KiB | 24.4% → 23.3% | 2.24 MiB → 1.85 MiB |   3,407 → 3,388 | `isRuleSuppressed(Rule)`                                 | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
|  -17.4% | -398.203 KiB | 24.4% → 23.3% | 2.24 MiB → 1.85 MiB |   3,356 → 3,342 | `init()`                                                 | `org.codenarc.source.AbstractSourceCode`                                    |
|  -17.4% | -398.179 KiB | 24.4% → 23.3% | 2.24 MiB → 1.85 MiB |   3,357 → 3,344 | `getAst()`                                               | `org.codenarc.source.AbstractSourceCode`                                    |
|  -17.1% |  -396.71 KiB | 24.7% → 23.7% | 2.27 MiB → 1.88 MiB |   4,148 → 4,194 | `doCall(Object)`                                         | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`  |
| removed | -223.632 KiB |   2.4% → 0.0% |       224 KiB → 0 B |       2,176 → 0 | `linkToCallSite(Object, Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x0000009001323400`                         |
|   -5.7% | -127.164 KiB | 23.6% → 25.7% | 2.17 MiB → 2.04 MiB |           8 → 5 | `callGetProperty(Object)`                                | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`                     |

# Retained heap profile diff

Retained 1.32 MiB → 958 KiB (-393.906 KiB, -29.1%) over 677 samples → 655 samples (2 KiB → 1.46 KiB per sample).

| Category         | Change |        Delta |      % |               Size |   Samples |
| ---------------- | -----: | -----------: | -----: | -----------------: | --------: |
| Standard library | -29.1% | -393.875 KiB | 100.0% | 1.32 MiB → 958 KiB | 673 → 652 |
| Ours             | -26.7% |        -32 B |  <0.1% |       120 B → 88 B |     4 → 3 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

| Change | Delta |            % |       Size | Samples | Function                        | Location                               |
| -----: | ----: | -----------: | ---------: | ------: | ------------------------------- | -------------------------------------- |
|    new | +64 B | 0.0% → <0.1% | 0 B → 64 B |   0 → 2 | `addViolation(ASTNode, String)` | `org.codenarc.rule.AbstractAstVisitor` |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

|  Change | Delta |            % |       Size | Samples | Function                                                   | Location                               |
| ------: | ----: | -----------: | ---------: | ------: | ---------------------------------------------------------- | -------------------------------------- |
| removed | -96 B | <0.1% → 0.0% | 96 B → 0 B |   2 → 0 | `<init>()`                                                 | `java.util.HashSet`                    |
| removed | -64 B | <0.1% → 0.0% | 64 B → 0 B |   2 → 0 | `writeViolation(Writer, Violation, String)`                | `org.codenarc.report.TextReportWriter` |
| removed | -32 B | <0.1% → 0.0% | 32 B → 0 B |   1 → 0 | `createViolationForImport(SourceCode, ImportNode, String)` | `org.codenarc.rule.AbstractRule`       |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

|  Change |       Delta |            % |               Size | Samples | Function                                                      | Location                                                           |
| ------: | ----------: | -----------: | -----------------: | ------: | ------------------------------------------------------------- | ------------------------------------------------------------------ |
|     new | +10.937 KiB |  0.0% → 1.1% |     0 B → 10.9 KiB | 0 → 281 | `linkToCallSite(Object, int, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000003013dac00`                |
|     new | +10.937 KiB |  0.0% → 1.1% |     0 B → 10.9 KiB | 0 → 281 | `linkToCallSite(Object, int, int, Object)`                    | `java.lang.invoke.LambdaForm$MH.0x00000003013f5400`                |
|     new | +10.937 KiB |  0.0% → 1.1% |     0 B → 10.9 KiB | 0 → 281 | `linkToCallSite(Object, Object, int, int, Object)`            | `java.lang.invoke.LambdaForm$MH.0x0000000301940400`                |
|     new |  +4.046 KiB |  0.0% → 0.4% |     0 B → 4.05 KiB |   0 → 2 | `<init>(String)`                                              | `org.codenarc.rule.groovyism.ExplicitTypeInstantiationAstVisitor`  |
|     new |  +4.015 KiB |  0.0% → 0.4% |     0 B → 4.02 KiB |   0 → 1 | `$getStaticMetaClass()`                                       | `org.codenarc.rule.groovyism.ExplicitArrayListInstantiationRule$1` |
|     new |  +4.015 KiB |  0.0% → 0.4% |     0 B → 4.02 KiB |   0 → 1 | `<init>(ExplicitArrayListInstantiationRule, Object)`          | `org.codenarc.rule.groovyism.ExplicitArrayListInstantiationRule$1` |
|     new |  +4.015 KiB |  0.0% → 0.4% |     0 B → 4.02 KiB |   0 → 1 | `getAstVisitor()`                                             | `org.codenarc.rule.groovyism.ExplicitArrayListInstantiationRule`   |
|     new |   +2.07 KiB |  0.0% → 0.2% |     0 B → 2.07 KiB |  0 → 27 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x00000003010c8400`                |
|  +32.0% |      +592 B |  0.1% → 0.2% | 1.8 KiB → 2.38 KiB | 27 → 30 | `doCall(Object)`                                              | `org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2` |
|  +32.0% |      +592 B |  0.1% → 0.2% | 1.8 KiB → 2.38 KiB | 27 → 30 | `loadRuleElements(Node)`                                      | `org.codenarc.ruleset.XmlReaderRuleSet`                            |
|  +54.4% |      +496 B |         0.1% |   912 B → 1.38 KiB | 13 → 18 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                |
|  +19.5% |      +440 B |  0.2% → 0.3% | 2.2 KiB → 2.63 KiB | 37 → 39 | `visitClass(ClassNode)`                                       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                  |
| +211.5% |      +440 B | <0.1% → 0.1% |      208 B → 648 B |   1 → 4 | `initializeDefaultResourceBundle()`                           | `org.codenarc.report.AbstractReportWriter`                         |
| +211.5% |      +440 B | <0.1% → 0.1% |      208 B → 648 B |   1 → 4 | `doCall(Object)`                                              | `org.codenarc.report.AbstractReportWriter$_closure2`               |
| +211.5% |      +440 B | <0.1% → 0.1% |      208 B → 648 B |   1 → 4 | `doCall()`                                                    | `org.codenarc.report.AbstractReportWriter$_closure2`               |
|     new |      +440 B | 0.0% → <0.1% |        0 B → 440 B |   0 → 2 | `$getStaticMetaClass()`                                       | `org.codenarc.rule.design.OptionalCollectionReturnTypeAstVisitor`  |
|     new |      +440 B | 0.0% → <0.1% |        0 B → 440 B |   0 → 2 | `<init>()`                                                    | `org.codenarc.rule.design.OptionalCollectionReturnTypeAstVisitor`  |
|  +20.7% |      +424 B |  0.1% → 0.3% |   2 KiB → 2.41 KiB | 28 → 31 | `<init>(Reader)`                                              | `org.codenarc.ruleset.XmlReaderRuleSet`                            |
|  +20.7% |      +424 B |  0.1% → 0.3% |   2 KiB → 2.41 KiB | 28 → 31 | `doCall(Object)`                                              | `org.codenarc.ruleset.XmlFileRuleSet$_closure1`                    |
|  +20.7% |      +424 B |  0.1% → 0.3% |   2 KiB → 2.41 KiB | 28 → 31 | `<init>(String)`                                              | `org.codenarc.ruleset.XmlFileRuleSet`                              |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |        Delta |             % |               Size |   Samples | Function                                                 | Location                                                                    |
| ------: | -----------: | ------------: | -----------------: | --------: | -------------------------------------------------------- | --------------------------------------------------------------------------- |
|  -92.9% | -394.695 KiB |  31.4% → 3.1% | 425 KiB → 30.1 KiB | 373 → 327 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                          |
|  -92.9% |  -394.57 KiB |  31.4% → 3.1% | 425 KiB → 30.1 KiB | 370 → 327 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                          |
|  -92.3% | -394.226 KiB |  31.6% → 3.4% | 427 KiB → 32.8 KiB | 405 → 362 | `execute()`                                              | `org.codenarc.CodeNarcRunner`                                               |
|  -90.0% | -394.101 KiB |  32.4% → 4.6% | 438 KiB → 43.7 KiB | 662 → 639 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                                          |
|  -89.9% | -394.054 KiB |  32.4% → 4.6% |   438 KiB → 44 KiB | 674 → 650 | `main(String[])`                                         | `org.codenarc.CodeNarc`                                                     |
|  -90.0% | -394.031 KiB |  32.4% → 4.6% | 438 KiB → 43.8 KiB | 667 → 646 | `execute(String[])`                                      | `org.codenarc.CodeNarc`                                                     |
|  -89.9% | -393.984 KiB |  32.4% → 4.6% |   438 KiB → 44 KiB | 672 → 650 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                          |
|  -94.4% | -389.906 KiB |  30.5% → 2.4% |   413 KiB → 23 KiB | 241 → 217 | `processDirectory(String, RuleSet)`                      | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  -94.4% | -389.906 KiB |  30.5% → 2.4% |   413 KiB → 23 KiB | 241 → 217 | `analyze(RuleSet)`                                       | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  -94.4% | -389.828 KiB |  30.5% → 2.4% |   413 KiB → 23 KiB | 239 → 217 | `doCall(Object)`                                         | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|  -94.4% | -389.781 KiB |  30.5% → 2.4% |   413 KiB → 23 KiB | 238 → 217 | `processFile(String, DirectoryResults, RuleSet)`         | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  -94.4% | -389.648 KiB |  30.5% → 2.4% | 413 KiB → 22.9 KiB | 236 → 216 | `collectViolations(SourceCode, RuleSet)`                 | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|  -96.6% | -382.734 KiB |  29.3% → 1.4% | 396 KiB → 13.5 KiB | 134 → 120 | `init()`                                                 | `org.codenarc.source.AbstractSourceCode`                                    |
|  -96.6% | -382.734 KiB |  29.3% → 1.4% | 396 KiB → 13.5 KiB | 134 → 120 | `getAst()`                                               | `org.codenarc.source.AbstractSourceCode`                                    |
|  -96.6% | -382.734 KiB |  29.3% → 1.4% | 396 KiB → 13.5 KiB | 134 → 120 | `init()`                                                 | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
|  -96.6% | -382.734 KiB |  29.3% → 1.4% | 396 KiB → 13.5 KiB | 134 → 120 | `isRuleSuppressed(Rule)`                                 | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
|  -96.6% | -382.734 KiB |  29.3% → 1.4% | 396 KiB → 13.5 KiB | 134 → 120 | `doCall(Object)`                                         | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`  |
|   -6.4% |  -62.101 KiB | 72.2% → 95.4% |  976 KiB → 914 KiB |     3 → 4 | `loadClass(String)`                                      | `java.lang.ClassLoader`                                                     |
| removed |   -10.64 KiB |   0.8% → 0.0% |     10.6 KiB → 0 B |   256 → 0 | `linkToCallSite(Object, int, Object, Object)`            | `java.lang.invoke.LambdaForm$MH.0x00000090013e0800`                         |
| removed |  -10.617 KiB |   0.8% → 0.0% |     10.6 KiB → 0 B |   256 → 0 | `linkToCallSite(Object, Object, int, int, Object)`       | `java.lang.invoke.LambdaForm$MH.0x0000009001936800`                         |
