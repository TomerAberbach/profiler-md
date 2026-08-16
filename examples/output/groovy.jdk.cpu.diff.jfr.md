# Sampling profile diff

Collected 321 samples → 342 samples (+21 samples, +6.5%).

| Category         | Change | Delta |             % |   Samples |
| ---------------- | -----: | ----: | ------------: | --------: |
| Standard library |  +6.1% |   +19 | 97.2% → 96.8% | 312 → 331 |
| Ours             | +22.2% |    +2 |   2.8% → 3.2% |    9 → 11 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                                    | Location                                               |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
|  +36.7% |   +11 | 9.3% → 12.0% | 30 → 41 | `newArray(Class, int)`                                                                      | `java.lang.reflect.Array`                              |
|  +66.7% |    +6 |  2.8% → 4.4% |  9 → 15 | `putVal(int, Object, Object, boolean, boolean)`                                             | `java.util.HashMap`                                    |
|  +50.0% |    +3 |  1.9% → 2.6% |   6 → 9 | `newInstance(Class, int)`                                                                   | `java.lang.reflect.Array`                              |
| +150.0% |    +3 |  0.6% → 1.5% |   2 → 5 | `<init>(Method, boolean)`                                                                   | `java.lang.invoke.MemberName`                          |
|     new |    +3 |  0.0% → 0.9% |   0 → 3 | `createAndStripZerosToMatchScale(BigInteger, int, long)`                                    | `java.math.BigDecimal`                                 |
|     new |    +3 |  0.0% → 0.9% |   0 → 3 | `valueConversion(Class, Class, boolean, boolean)`                                           | `java.lang.invoke.MethodHandleImpl`                    |
| +150.0% |    +3 |  0.6% → 1.5% |   2 → 5 | `resize()`                                                                                  | `java.util.HashMap`                                    |
|     new |    +3 |  0.0% → 0.9% |   0 → 3 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x00000008010bc800`   |
|     new |    +3 |  0.0% → 0.9% |   0 → 3 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x0000000801118400`    |
|     new |    +3 |  0.0% → 0.9% |   0 → 3 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`   |
|     new |    +3 |  0.0% → 0.9% |   0 → 3 | `internalMemberName(Object)`                                                                | `java.lang.invoke.DirectMethodHandle`                  |
|     new |    +3 |  0.0% → 0.9% |   0 → 3 | `getReachableTarget(Transition, int)`                                                       | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`  |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `adaptivePredict(TokenStream, int, ParserRuleContext, boolean)`                             | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| +100.0% |    +2 |  0.6% → 1.2% |   2 → 4 | `prepare()`                                                                                 | `java.lang.invoke.LambdaForm`                          |
| +200.0% |    +2 |  0.3% → 0.9% |   1 → 3 | `equals(Object, Object)`                                                                    | `java.util.Objects`                                    |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)`                                | `java.math.MutableBigInteger`                          |
| +200.0% |    +2 |  0.3% → 0.9% |   1 → 3 | `divideOneWord(int, MutableBigInteger)`                                                     | `java.math.MutableBigInteger`                          |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000080113fc00`    |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `dropParameterTypes(int, int)`                                                              | `java.lang.invoke.MethodType`                          |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `optimize(Pattern$Node)`                                                                    | `java.util.regex.Pattern$BnM`                          |

##### Ours

| Change | Delta |           % | Samples | Function                                       | Location                                                                                 |
| -----: | ----: | ----------: | ------: | ---------------------------------------------- | ---------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `init()`                                       | `org.codenarc.source.AbstractSourceCode`                                                 |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `visitMethod(MethodNode)`                      | `org.codenarc.rule.AbstractAstVisitor`                                                   |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `addViolationIfDuplicate(Expression, boolean)` | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                       |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `visitObjectInitializerStatements(ClassNode)`  | `org.codenarc.rule.basic.EmptyInstanceInitializerAstVisitor`                             |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `<init>()`                                     | `org.gmetrics.metric.AbstractAstVisitor`                                                 |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `doCall(AnnotationNode)`                       | `org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor$_visitClassComplete_closure5` |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `applyTo(SourceCode, List)`                    | `org.codenarc.rule.formatting.BracesForClassRule`                                        |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `visitClassEx(ClassNode)`                      | `org.codenarc.rule.naming.ClassNameSameAsSuperclassAstVisitor`                           |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `getSuppressionsByLineNumber(ModuleNode)`      | `org.codenarc.analyzer.SuppressionAnalyzer`                                              |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `getMetaClass()`                               | `org.codenarc.rule.braces.WhileStatementBracesRule`                                      |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                                      | Location                                               |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
|  -53.8% |    -7 | 4.0% → 1.8% |  13 → 6 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
|  -30.0% |    -3 | 3.1% → 2.0% |  10 → 7 | `matches(Method, String, Class[])`                                                                            | `java.lang.PublicMethods$Key`                          |
| removed |    -3 | 0.9% → 0.0% |   3 → 0 | `getCallerClass()`                                                                                            | `jdk.internal.reflect.Reflection`                      |
| removed |    -3 | 0.9% → 0.0% |   3 → 0 | `isAncestorLoaderOf(ClassLoader, ClassLoader)`                                                                | `java.lang.invoke.MethodHandle`                        |
|  -66.7% |    -2 | 0.9% → 0.3% |   3 → 1 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`                 | `org.codehaus.groovy.vmplugin.v8.IndyInterface`        |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x000000e0010b2800`   |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `<init>(int, float)`                                                                                          | `com.sun.org.apache.xerces.internal.util.SymbolTable`  |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                                                 | `java.util.zip.Inflater`                               |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `chooseMethodInternal(String, Object, Class[])`                                                               | `groovy.lang.MetaClassImpl`                            |
|  -66.7% |    -2 | 0.9% → 0.3% |   3 → 1 | `clone()`                                                                                                     | `java.lang.Object`                                     |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `getInCache(LambdaFormEditor$TransformKey)`                                                                   | `java.lang.invoke.LambdaFormEditor`                    |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `visitMethodCallExpression(MethodCallExpression)`                                                             | `org.codehaus.groovy.ast.CodeVisitorSupport`           |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `convertToTypeArray(Object[])`                                                                                | `org.codehaus.groovy.runtime.MetaClassHelper`          |
|  -40.0% |    -2 | 1.6% → 0.9% |   5 → 3 | `get(Object)`                                                                                                 | `java.util.concurrent.ConcurrentHashMap`               |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `invokeVirtual(Object, Object, Object, int)`                                                                  | `java.lang.invoke.LambdaForm$DMH.0x000000e0013a1400`   |
|  -20.0% |    -2 | 3.1% → 2.3% |  10 → 8 | `getNode(Object)`                                                                                             | `java.util.HashMap`                                    |
|  -66.7% |    -2 | 0.9% → 0.3% |   3 → 1 | `getEpsilonTarget(ATNConfig, Transition, boolean, boolean, PredictionContextCache, boolean)`                  | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `bindArgumentL(int, Object)`                                                                                  | `java.lang.invoke.BoundMethodHandle`                   |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `reflectionData()`                                                                                            | `java.lang.Class`                                      |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `bindArgumentL(BoundMethodHandle, int, Object)`                                                               | `java.lang.invoke.LambdaFormEditor`                    |

##### Ours

|  Change | Delta |           % | Samples | Function                                              | Location                                                             |
| ------: | ----: | ----------: | ------: | ----------------------------------------------------- | -------------------------------------------------------------------- |
|  -50.0% |    -1 | 0.6% → 0.3% |   2 → 1 | `collectViolations(SourceCode, RuleSet)`              | `org.codenarc.analyzer.AbstractSourceAnalyzer`                       |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `getDeclaration(ASTNode, SourceCode)`                 | `org.codenarc.util.AstUtil`                                          |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `doCall(Object)`                                      | `org.codenarc.rule.imports.UnusedImportRule$_findReference_closure3` |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `visitClassEx(ClassNode)`                             | `org.codenarc.rule.design.ConstantsOnlyInterfaceAstVisitor`          |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `propertyExpressionsAreEqual(Expression, Expression)` | `org.codenarc.rule.unnecessary.UnnecessarySelfAssignmentAstVisitor`  |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `$getStaticMetaClass()`                               | `org.codenarc.rule.size.MethodCountAstVisitor`                       |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `removeGrabTransformation(CompilationUnit)`           | `org.codenarc.source.AbstractSourceCode`                             |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `getMetaClass()`                                      | `org.codenarc.analyzer.AbstractSourceAnalyzer`                       |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

##### Standard library

| Change | Delta |            % | Samples | Function                                                                                    | Location                                             |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new |  +307 | 0.0% → 89.8% | 0 → 307 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000008010b2800` |
|    new |  +254 | 0.0% → 74.3% | 0 → 254 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000801117800`  |
|    new |  +254 | 0.0% → 74.3% | 0 → 254 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x0000000801118400`  |
|    new |  +251 | 0.0% → 73.4% | 0 → 251 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000000801115400`  |
|    new |  +191 | 0.0% → 55.8% | 0 → 191 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x0000000801118000`  |
|    new |  +145 | 0.0% → 42.4% | 0 → 145 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x00000008010bd400` |
|    new |  +141 | 0.0% → 41.2% | 0 → 141 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000080113fc00`  |
|    new |  +133 | 0.0% → 38.9% | 0 → 133 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000000801140400`  |
|    new |  +130 | 0.0% → 38.0% | 0 → 130 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000801141000`  |
|    new |  +129 | 0.0% → 37.7% | 0 → 129 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000080118d400`  |
|    new |  +113 | 0.0% → 33.0% | 0 → 113 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x00000008010bc800` |
|    new |  +106 | 0.0% → 31.0% | 0 → 106 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000008013d1c00`  |
|    new |  +102 | 0.0% → 29.8% | 0 → 102 | `invokeInterface(Object, Object, Object)`                                                   | `java.lang.invoke.LambdaForm$DMH.0x00000008010bd000` |
|    new |  +100 | 0.0% → 29.2% | 0 → 100 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000801119400`  |
|    new |   +98 | 0.0% → 28.7% |  0 → 98 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000000801140c00`  |
|    new |   +96 | 0.0% → 28.1% |  0 → 96 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000080138c800` |
|    new |   +94 | 0.0% → 27.5% |  0 → 94 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000801142000`  |
|    new |   +92 | 0.0% → 26.9% |  0 → 92 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000080118d000`  |
|    new |   +91 | 0.0% → 26.6% |  0 → 91 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000008012ac800`  |
|    new |   +82 | 0.0% → 24.0% |  0 → 82 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000008013dbc00`  |

##### Ours

|  Change | Delta |             % |  Samples | Function                                                | Location                                                                    |
| ------: | ----: | ------------: | -------: | ------------------------------------------------------- | --------------------------------------------------------------------------- |
|  +31.8% |   +14 | 13.7% → 17.0% |  44 → 58 | `processFile(String, DirectoryResults, RuleSet)`        | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| +800.0% |    +8 |   0.3% → 2.6% |    1 → 9 | `visitClass(ClassNode)`                                 | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`                     |
|  +11.8% |    +6 | 15.9% → 16.7% |  51 → 57 | `collectViolations(SourceCode, RuleSet)`                | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|  +62.5% |    +5 |   2.5% → 3.8% |   8 → 13 | `doCall(Object)`                                        | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`  |
|   +5.2% |    +5 | 29.9% → 29.5% | 96 → 101 | `applyTo(SourceCode)`                                   | `org.codenarc.rule.AbstractRule`                                            |
|  +33.3% |    +5 |   4.7% → 5.8% |  15 → 20 | `doCall(Object)`                                        | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
| +125.0% |    +5 |   1.2% → 2.6% |    4 → 9 | `applyTo(SourceCode, List)`                             | `org.codenarc.rule.AbstractSharedAstVisitorRule`                            |
| +500.0% |    +5 |   0.3% → 1.8% |    1 → 6 | `applyTo(SourceCode, List)`                             | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`                    |
| +500.0% |    +5 |   0.3% → 1.8% |    1 → 6 | `addViolationIfDuplicate(Expression, boolean)`          | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                          |
| +500.0% |    +5 |   0.3% → 1.8% |    1 → 6 | `addViolationIfDuplicate(Expression)`                   | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                          |
|     new |    +5 |   0.0% → 1.5% |    0 → 5 | `super$3$applyTo(SourceCode, List)`                     | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`                    |
| +400.0% |    +4 |   0.3% → 1.5% |    1 → 5 | `doCall(Object)`                                        | `org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`          |
|     new |    +4 |   0.0% → 1.2% |    0 → 4 | `visitDeclarationExpression(DeclarationExpression)`     | `org.codenarc.rule.convention.NoDefAstVisitor`                              |
|     new |    +4 |   0.0% → 1.2% |    0 → 4 | `super$3$visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.convention.NoDefAstVisitor`                              |
|     new |    +4 |   0.0% → 1.2% |    0 → 4 | `visitMethodCallExpression(MethodCallExpression)`       | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`                |
|  +75.0% |    +3 |   1.2% → 2.0% |    4 → 7 | `applyVisitor(AstVisitor, SourceCode)`                  | `org.codenarc.rule.AbstractSharedAstVisitorRule`                            |
| +300.0% |    +3 |   0.3% → 1.2% |    1 → 4 | `checkForCorrectColumn(ASTNode, String)`                | `org.codenarc.rule.formatting.IndentationAstVisitor`                        |
|     new |    +3 |   0.0% → 0.9% |    0 → 3 | `checkNode(ASTNode)`                                    | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`              |
|     new |    +3 |   0.0% → 0.9% |    0 → 3 | `applyTo(SourceCode, List)`                             | `org.codenarc.rule.naming.ClassNameSameAsFilenameRule`                      |
|     new |    +3 |   0.0% → 0.9% |    0 → 3 | `<init>(File)`                                          | `org.codenarc.source.SourceFile`                                            |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                                    | Location                                             |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -291 | 90.7% → 0.0% | 291 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000e0010b2800` |
| removed |  -250 | 77.9% → 0.0% | 250 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e001117800`  |
| removed |  -248 | 77.3% → 0.0% | 248 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000e001118400`  |
| removed |  -235 | 73.2% → 0.0% | 235 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e001115400`  |
| removed |  -185 | 57.6% → 0.0% | 185 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000e001118000`  |
| removed |  -144 | 44.9% → 0.0% | 144 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000e0010bd400` |
| removed |  -136 | 42.4% → 0.0% | 136 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e00113fc00`  |
| removed |  -123 | 38.3% → 0.0% | 123 → 0 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000e001140400`  |
| removed |  -118 | 36.8% → 0.0% | 118 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e001141000`  |
| removed |  -118 | 36.8% → 0.0% | 118 → 0 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000e00118d400`  |
| removed |  -107 | 33.3% → 0.0% | 107 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e0013d2400`  |
| removed |   -99 | 30.8% → 0.0% |  99 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000e0010bc800` |
| removed |   -98 | 30.5% → 0.0% |  98 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e001119400`  |
| removed |   -94 | 29.3% → 0.0% |  94 → 0 | `invokeInterface(Object, Object, Object)`                                                   | `java.lang.invoke.LambdaForm$DMH.0x000000e0010bd000` |
| removed |   -93 | 29.0% → 0.0% |  93 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e001140c00`  |
| removed |   -90 | 28.0% → 0.0% |  90 → 0 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000e00118d000`  |
| removed |   -89 | 27.7% → 0.0% |  89 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000e00138cc00` |
| removed |   -89 | 27.7% → 0.0% |  89 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e0012ac800`  |
| removed |   -81 | 25.2% → 0.0% |  81 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e001142000`  |
| removed |   -77 | 24.0% → 0.0% |  77 → 0 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000e001104000`  |

##### Ours

|  Change | Delta |             % | Samples | Function                                                 | Location                                                                                     |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
|  -20.4% |   -10 | 15.3% → 11.4% | 49 → 39 | `getAst()`                                               | `org.codenarc.source.AbstractSourceCode`                                                     |
|  -16.7% |    -8 | 15.0% → 11.7% | 48 → 40 | `init()`                                                 | `org.codenarc.analyzer.SuppressionAnalyzer`                                                  |
|  -15.2% |    -7 | 14.3% → 11.4% | 46 → 39 | `isRuleSuppressed(Rule)`                                 | `org.codenarc.analyzer.SuppressionAnalyzer`                                                  |
|   -6.3% |    -5 | 24.9% → 21.9% | 80 → 75 | `visitClass(ClassNode)`                                  | `org.codenarc.rule.AbstractAstVisitor`                                                       |
| removed |    -5 |   1.6% → 0.0% |   5 → 0 | `processSourceLine(String, int)`                         | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`                              |
|   -5.8% |    -4 | 21.5% → 19.0% | 69 → 65 | `init()`                                                 | `org.codenarc.source.AbstractSourceCode`                                                     |
|  -80.0% |    -4 |   1.6% → 0.3% |   5 → 1 | `doCall(Object)`                                         | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor$_visitClassComplete_closure1` |
| removed |    -4 |   1.2% → 0.0% |   4 → 0 | `getNumberOfViolationsWithPriority(int, boolean)`        | `org.codenarc.results.DirectoryResults`                                                      |
|  -75.0% |    -3 |   1.2% → 0.3% |   4 → 1 | `validateXml(String)`                                    | `org.codenarc.ruleset.XmlReaderRuleSet`                                                      |
|  -60.0% |    -3 |   1.6% → 0.6% |   5 → 2 | `<init>(Reader)`                                         | `org.codenarc.ruleset.XmlReaderRuleSet`                                                      |
| removed |    -3 |   0.9% → 0.0% |   3 → 0 | `doCall(Object)`                                         | `org.codenarc.rule.imports.UnusedImportRule$_findReference_closure3`                         |
| removed |    -3 |   0.9% → 0.0% |   3 → 0 | `getNumberOfViolationsWithPriority(int)`                 | `org.codenarc.results.DirectoryResults`                                                      |
|  -60.0% |    -3 |   1.6% → 0.6% |   5 → 2 | `doCall(Object)`                                         | `org.codenarc.results.DirectoryResults$_getNumberOfViolationsWithPriority_closure3`          |
|  -28.6% |    -2 |   2.2% → 1.5% |   7 → 5 | `getAstVisitor()`                                        | `org.codenarc.rule.AbstractAstVisitorRule`                                                   |
|  -50.0% |    -2 |   1.2% → 0.6% |   4 → 2 | `getText()`                                              | `org.codenarc.source.SourceFile`                                                             |
| removed |    -2 |   0.6% → 0.0% |   2 → 0 | `isConstructorCallAViolation(ConstructorCallExpression)` | `org.codenarc.rule.basic.BigDecimalInstantiationAstVisitor`                                  |
| removed |    -2 |   0.6% → 0.0% |   2 → 0 | `visitBlockStatement(BlockStatement)`                    | `org.codenarc.rule.size.NestedBlockDepthAstVisitor`                                          |
| removed |    -2 |   0.6% → 0.0% |   2 → 0 | `super$3$visitBlockStatement(BlockStatement)`            | `org.codenarc.rule.size.NestedBlockDepthAstVisitor`                                          |
| removed |    -2 |   0.6% → 0.0% |   2 → 0 | `getDeclaration(ASTNode, SourceCode)`                    | `org.codenarc.util.AstUtil`                                                                  |
| removed |    -2 |   0.6% → 0.0% |   2 → 0 | `visitField(FieldNode)`                                  | `org.codenarc.rule.unnecessary.UnnecessaryDefInFieldDeclarationAstVisitor`                   |

# Allocated heap profile diff

Allocated 12 GiB → 11.8 GiB (-231.612 MiB, -1.9%) over 6,317 samples → 6,264 samples (1.95 MiB → 1.92 MiB per sample).

| Category         | Change |        Delta |             % |                Size |       Samples |
| ---------------- | -----: | -----------: | ------------: | ------------------: | ------------: |
| Standard library |  -1.7% | -206.847 MiB | 99.0% → 99.2% | 11.9 GiB → 11.7 GiB | 6,204 → 6,165 |
| Ours             | -20.2% |  -24.763 MiB |   1.0% → 0.8% |  122 MiB → 97.6 MiB |       63 → 50 |
| Unknown          |  -5.6% |   -2.007 KiB |         <0.1% | 35.8 KiB → 33.8 KiB |       50 → 49 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

##### Standard library

|  Change |       Delta |            % |                Size |   Samples | Function                                                                                     | Location                                            |
| ------: | ----------: | -----------: | ------------------: | --------: | -------------------------------------------------------------------------------------------- | --------------------------------------------------- |
|  +16.0% | +84.091 MiB |  4.3% → 5.1% |   527 MiB → 611 MiB | 277 → 319 | `fillInStackTrace(int)`                                                                      | `java.lang.Throwable`                               |
|  +25.3% | +69.884 MiB |  2.2% → 2.9% |   276 MiB → 346 MiB | 139 → 132 | `stream(Spliterator, boolean)`                                                               | `java.util.stream.StreamSupport`                    |
|  +25.5% | +63.279 MiB |  2.0% → 2.6% |   248 MiB → 311 MiB | 128 → 143 | `divideAndRemainderKnuth(BigInteger)`                                                        | `java.math.BigInteger`                              |
| +123.4% | +58.514 MiB |  0.4% → 0.9% |  47.4 MiB → 106 MiB |   25 → 32 | `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`     |
|  +28.8% | +54.156 MiB |  1.5% → 2.0% |   188 MiB → 242 MiB |  97 → 125 | `compile()`                                                                                  | `java.util.regex.Pattern`                           |
|  +23.8% | +47.208 MiB |  1.6% → 2.0% |   198 MiB → 246 MiB | 103 → 120 | `insertParameterTypes(int, Class[])`                                                         | `java.lang.invoke.MethodType`                       |
|  +85.3% | +42.851 MiB |  0.4% → 0.8% | 50.2 MiB → 93.1 MiB |   25 → 47 | `newHashMap(int)`                                                                            | `java.util.HashMap`                                 |
| +350.0% | +41.978 MiB |  0.1% → 0.4% |     12 MiB → 54 MiB |     6 → 5 | `write(String, int, int)`                                                                    | `sun.nio.cs.StreamEncoder`                          |
|  +36.7% | +32.292 MiB |  0.7% → 1.0% |    88 MiB → 120 MiB |   44 → 61 | `makeGuardWithTest(MethodHandle, MethodHandle, MethodHandle)`                                | `java.lang.invoke.MethodHandleImpl`                 |
|  +71.3% | +32.277 MiB |  0.4% → 0.6% | 45.3 MiB → 77.6 MiB |   23 → 40 | `make(byte, Class, MemberName, Class)`                                                       | `java.lang.invoke.DirectMethodHandle`               |
| +607.1% | +31.878 MiB | <0.1% → 0.3% | 5.25 MiB → 37.1 MiB |    3 → 18 | `<init>(Object, Object)`                                                                     | `groovy.lang.Tuple2`                                |
|  +58.6% | +29.088 MiB |  0.4% → 0.7% | 49.6 MiB → 78.7 MiB |   37 → 47 | `copyOfRangeByte(byte[], int, int)`                                                          | `java.util.Arrays`                                  |
| +336.3% | +26.824 MiB |  0.1% → 0.3% | 7.98 MiB → 34.8 MiB |    4 → 19 | `<init>(Reader, int)`                                                                        | `java.io.BufferedReader`                            |
| +350.6% | +25.554 MiB |  0.1% → 0.3% | 7.29 MiB → 32.8 MiB |    4 → 16 | `tuple(Object, Object)`                                                                      | `groovy.lang.Tuple`                                 |
| +386.3% | +25.282 MiB |  0.1% → 0.3% | 6.54 MiB → 31.8 MiB |   10 → 14 | `<init>(InputStream, Inflater, int)`                                                         | `java.util.zip.InflaterInputStream`                 |
|  +13.0% |  +23.49 MiB |  1.5% → 1.7% |   180 MiB → 204 MiB |  92 → 102 | `allocateInstance(Object)`                                                                   | `java.lang.invoke.DirectMethodHandle`               |
|  +72.4% |  +22.67 MiB |  0.3% → 0.4% |   31.3 MiB → 54 MiB |   16 → 27 | `asSpreader(int, Class, int)`                                                                | `java.lang.invoke.MethodHandle`                     |
| +112.1% | +20.174 MiB |  0.1% → 0.3% |   18 MiB → 38.2 MiB |    9 → 20 | `linkLast(Object)`                                                                           | `java.util.LinkedList`                              |
| +155.6% | +18.665 MiB |  0.1% → 0.3% |   12 MiB → 30.7 MiB |    6 → 17 | `getAndPut(String, MemoizeCache$ValueProvider)`                                              | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite` |
|  +68.5% | +16.631 MiB |  0.2% → 0.3% | 24.3 MiB → 40.9 MiB |   14 → 20 | `<init>()`                                                                                   | `java.util.ArrayDeque`                              |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

##### Standard library

| Change |        Delta |           % |                Size |   Samples | Function                                                                                      | Location                                                   |
| -----: | -----------: | ----------: | ------------------: | --------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| -76.6% | -213.895 MiB | 2.3% → 0.5% |  279 MiB → 65.4 MiB |  143 → 33 | `make(MethodType, LambdaForm, Object)`                                                        | `java.lang.invoke.BoundMethodHandle$Species_L`             |
| -79.5% | -133.186 MiB | 1.4% → 0.3% |  167 MiB → 34.3 MiB |   28 → 24 | `copy()`                                                                                      | `java.lang.reflect.Method`                                 |
| -23.1% |  -97.609 MiB | 3.4% → 2.7% |   422 MiB → 324 MiB | 189 → 169 | `make(MethodType, LambdaForm, Object, Object)`                                                | `java.lang.invoke.BoundMethodHandle$Species_LL`            |
|  -8.7% |  -72.401 MiB | 6.8% → 6.3% |   837 MiB → 764 MiB | 399 → 393 | `makeImpl(Class, Class[], boolean)`                                                           | `java.lang.invoke.MethodType`                              |
| -58.7% |  -69.329 MiB | 1.0% → 0.4% |  118 MiB → 48.8 MiB |   72 → 50 | `iterator()`                                                                                  | `java.util.ArrayList`                                      |
| -25.5% |  -53.046 MiB | 1.7% → 1.3% |   208 MiB → 155 MiB |   98 → 82 | `spliterator(Object[], int, int, int)`                                                        | `java.util.Spliterators`                                   |
| -13.5% |  -38.399 MiB | 2.3% → 2.0% |   285 MiB → 247 MiB | 145 → 126 | `transform(ATNState, PredictionContext, SemanticContext, boolean, LexerActionExecutor)`       | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`              |
| -24.8% |  -30.635 MiB | 1.0% → 0.8% |  124 MiB → 93.1 MiB |   63 → 49 | `of(byte, int)`                                                                               | `java.lang.invoke.LambdaFormEditor$TransformKey`           |
| -19.5% |  -29.023 MiB | 1.2% → 1.0% |   149 MiB → 120 MiB |   76 → 62 | `make(MethodType, LambdaForm, Object, Object, Object)`                                        | `java.lang.invoke.BoundMethodHandle$Species_LLL`           |
|  -6.5% |  -27.979 MiB | 3.5% → 3.3% |   431 MiB → 403 MiB | 220 → 212 | `newInstance(Class, int)`                                                                     | `java.lang.reflect.Array`                                  |
| -32.4% |  -24.947 MiB | 0.6% → 0.4% |   76.9 MiB → 52 MiB |   40 → 26 | `divideOneWord(int, MutableBigInteger)`                                                       | `java.math.MutableBigInteger`                              |
| -20.1% |  -24.584 MiB | 1.0% → 0.8% |    123 MiB → 98 MiB |   61 → 48 | `toBigInteger(int)`                                                                           | `java.math.MutableBigInteger`                              |
| -14.1% |  -23.775 MiB | 1.4% → 1.2% |   169 MiB → 145 MiB |   84 → 76 | `<init>()`                                                                                    | `java.math.MutableBigInteger`                              |
| -36.1% |  -21.523 MiB | 0.5% → 0.3% | 59.7 MiB → 38.2 MiB |   31 → 20 | `matcher(CharSequence)`                                                                       | `java.util.regex.Pattern`                                  |
| -17.6% |  -21.032 MiB | 1.0% → 0.8% |  119 MiB → 98.3 MiB |   59 → 50 | `getSelector(MutableCallSite, Class, String, int, boolean, boolean, boolean, Object[])`       | `org.codehaus.groovy.vmplugin.v8.Selector`                 |
| -44.3% |  -17.704 MiB | 0.3% → 0.2% |   40 MiB → 22.3 MiB |   19 → 12 | `getChild(PredictionContext, int)`                                                            | `groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache` |
|  -2.6% |  -16.978 MiB |        5.2% |   643 MiB → 626 MiB |       317 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`            |
| -25.9% |  -16.754 MiB | 0.5% → 0.4% | 64.6 MiB → 47.9 MiB |   32 → 26 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object, Object)`                | `java.lang.invoke.BoundMethodHandle$Species_LLLLLL`        |
| -29.6% |  -14.781 MiB | 0.4% → 0.3% |   50 MiB → 35.2 MiB |   25 → 17 | `<init>(MethodHandle, MethodHandle, boolean)`                                                 | `org.codehaus.groovy.vmplugin.v8.MethodHandleWrapper`      |
| -28.7% |  -14.731 MiB | 0.4% → 0.3% | 51.3 MiB → 36.6 MiB |   26 → 20 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object, Object, Object)`        | `java.lang.invoke.BoundMethodHandle$Species_LLLLLLL`       |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

##### Standard library

| Change |       Delta |            % |           Size |   Samples | Function                                                                                    | Location                                             |
| -----: | ----------: | -----------: | -------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new | +11.023 GiB | 0.0% → 93.6% |   0 B → 11 GiB | 0 → 5,785 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000008010b2800` |
|    new |  +7.514 GiB | 0.0% → 63.8% | 0 B → 7.51 GiB | 0 → 3,946 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000000801115400`  |
|    new |  +7.458 GiB | 0.0% → 63.3% | 0 B → 7.46 GiB | 0 → 3,913 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000801117800`  |
|    new |  +7.362 GiB | 0.0% → 62.5% | 0 B → 7.36 GiB | 0 → 3,862 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x0000000801118400`  |
|    new |  +6.561 GiB | 0.0% → 55.7% | 0 B → 6.56 GiB | 0 → 3,408 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000000801140400`  |
|    new |  +6.484 GiB | 0.0% → 55.1% | 0 B → 6.48 GiB | 0 → 3,367 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000080118d400`  |
|    new |   +5.81 GiB | 0.0% → 49.4% | 0 B → 5.81 GiB | 0 → 3,138 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x0000000801118000`  |
|    new |   +5.54 GiB | 0.0% → 47.1% | 0 B → 5.54 GiB | 0 → 2,838 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x00000008010bc800` |
|    new |  +5.473 GiB | 0.0% → 46.5% | 0 B → 5.47 GiB | 0 → 2,864 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000080118d000`  |
|    new |  +5.192 GiB | 0.0% → 44.1% | 0 B → 5.19 GiB | 0 → 2,678 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x00000008010bd400` |
|    new |  +5.013 GiB | 0.0% → 42.6% | 0 B → 5.01 GiB | 0 → 2,602 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000801142000`  |
|    new |  +4.998 GiB | 0.0% → 42.5% |    0 B → 5 GiB | 0 → 2,547 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000080138c800` |
|    new |  +4.859 GiB | 0.0% → 41.3% | 0 B → 4.86 GiB | 0 → 2,495 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000080113fc00`  |
|    new |  +4.566 GiB | 0.0% → 38.8% | 0 B → 4.57 GiB | 0 → 2,372 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000080138d400`  |
|    new |  +4.542 GiB | 0.0% → 38.6% | 0 B → 4.54 GiB | 0 → 2,357 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000008012ac800`  |
|    new |  +3.727 GiB | 0.0% → 31.7% | 0 B → 3.73 GiB | 0 → 1,928 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000008013db800`  |
|    new |  +3.538 GiB | 0.0% → 30.1% | 0 B → 3.54 GiB | 0 → 1,828 | `invokeSpecial(Object, Object, Object, Object, Object)`                                     | `java.lang.invoke.LambdaForm$DMH.0x000000080118e800` |
|    new |  +3.351 GiB | 0.0% → 28.5% | 0 B → 3.35 GiB | 0 → 1,768 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000008013d1c00`  |
|    new |  +3.249 GiB | 0.0% → 27.6% | 0 B → 3.25 GiB | 0 → 1,772 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000801119400`  |
|    new |   +3.24 GiB | 0.0% → 27.5% | 0 B → 3.24 GiB | 0 → 1,765 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000801141000`  |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Standard library

|  Change |       Delta |            % |           Size |   Samples | Function                                                                                    | Location                                             |
| ------: | ----------: | -----------: | -------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -11.264 GiB | 93.9% → 0.0% | 11.3 GiB → 0 B | 5,848 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000e0010b2800` |
| removed |  -7.623 GiB | 63.5% → 0.0% | 7.62 GiB → 0 B | 3,972 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e001117800`  |
| removed |  -7.572 GiB | 63.1% → 0.0% | 7.57 GiB → 0 B | 3,943 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000e001118400`  |
| removed |   -7.54 GiB | 62.8% → 0.0% | 7.54 GiB → 0 B | 3,982 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e001115400`  |
| removed |  -6.703 GiB | 55.9% → 0.0% |  6.7 GiB → 0 B | 3,436 → 0 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000e001140400`  |
| removed |  -6.611 GiB | 55.1% → 0.0% | 6.61 GiB → 0 B | 3,389 → 0 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000e00118d400`  |
| removed |  -5.933 GiB | 49.5% → 0.0% | 5.93 GiB → 0 B | 3,180 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000e001118000`  |
| removed |  -5.635 GiB | 47.0% → 0.0% | 5.64 GiB → 0 B | 2,852 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000e0010bc800` |
| removed |  -5.562 GiB | 46.4% → 0.0% | 5.56 GiB → 0 B | 2,860 → 0 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000e00118d000`  |
| removed |  -5.243 GiB | 43.7% → 0.0% | 5.24 GiB → 0 B | 2,652 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000e0010bd400` |
| removed |  -5.151 GiB | 42.9% → 0.0% | 5.15 GiB → 0 B | 2,649 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e001142000`  |
| removed |  -4.954 GiB | 41.3% → 0.0% | 4.95 GiB → 0 B | 2,525 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000e00138cc00` |
| removed |  -4.942 GiB | 41.2% → 0.0% | 4.94 GiB → 0 B | 2,489 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e00113fc00`  |
| removed |   -4.59 GiB | 38.3% → 0.0% | 4.59 GiB → 0 B | 2,340 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e00138dc00`  |
| removed |  -4.557 GiB | 38.0% → 0.0% | 4.56 GiB → 0 B | 2,332 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e0012ac800`  |
| removed |  -3.694 GiB | 30.8% → 0.0% | 3.69 GiB → 0 B | 1,878 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e0013dbc00`  |
| removed |  -3.642 GiB | 30.4% → 0.0% | 3.64 GiB → 0 B | 1,860 → 0 | `invokeSpecial(Object, Object, Object, Object, Object)`                                     | `java.lang.invoke.LambdaForm$DMH.0x000000e00118e800` |
| removed |  -3.456 GiB | 28.8% → 0.0% | 3.46 GiB → 0 B | 1,784 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e0013d2400`  |
| removed |  -3.441 GiB | 28.7% → 0.0% | 3.44 GiB → 0 B | 1,693 → 0 | `invokeExact_MT(Object, Object, Object, Object, Object, Object)`                            | `java.lang.invoke.LambdaForm$MH.0x000000e001004000`  |
| removed |  -3.335 GiB | 27.8% → 0.0% | 3.34 GiB → 0 B | 1,797 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e001141000`  |

# Retained heap profile diff

Retained 69.3 KiB → 9.88 KiB (-59.375 KiB, -85.7%) over 95 objects → 105 objects (747 B → 96.4 B per object).

| Category         |  Change |       Delta |            % |                Size |  Objects |
| ---------------- | ------: | ----------: | -----------: | ------------------: | -------: |
| Standard library |  -85.7% | -59.343 KiB |       100.0% | 69.2 KiB → 9.88 KiB | 94 → 105 |
| Ours             | removed |       -32 B | <0.1% → 0.0% |          32 B → 0 B |    1 → 0 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |      Delta |            % |           Size | Objects | Function                                                                                                    | Location                                                |
| ------: | ---------: | -----------: | -------------: | ------: | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|     new | +4.015 KiB | 0.0% → 40.6% | 0 B → 4.02 KiB |   0 → 1 | `<init>(int, int, MemorySegment)`                                                                           | `java.nio.HeapByteBuffer`                               |
|     new |     +240 B |  0.0% → 2.4% |    0 B → 240 B |   0 → 2 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)`        | `java.lang.ClassLoader`                                 |
|     new |     +216 B |  0.0% → 2.1% |    0 B → 216 B |   0 → 3 | `make(MethodType, LambdaForm, Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.BoundMethodHandle$Species_LLLLILLLLL` |
|     new |     +192 B |  0.0% → 1.9% |    0 B → 192 B |   0 → 2 | `initClassName()`                                                                                           | `java.lang.Class`                                       |
|  +50.0% |     +176 B |  0.5% → 5.2% |  352 B → 528 B |   4 → 6 | `copy()`                                                                                                    | `java.lang.reflect.Method`                              |
|     new |     +144 B |  0.0% → 1.4% |    0 B → 144 B |   0 → 1 | `sizeCache(int)`                                                                                            | `java.lang.ClassValue$ClassValueMap`                    |
|  +60.0% |     +120 B |  0.3% → 3.2% |  200 B → 320 B |   5 → 8 | `newNode(int, Object, Object, HashMap$Node)`                                                                | `java.util.LinkedHashMap`                               |
| +200.0% |     +112 B |  0.1% → 1.7% |   56 B → 168 B |   1 → 2 | `compress(char[], int, int)`                                                                                | `java.lang.StringUTF16`                                 |
|     new |      +80 B |  0.0% → 0.8% |     0 B → 80 B |   0 → 1 | `decompress(ByteBuffer, int)`                                                                               | `jdk.internal.jimage.ImageLocation`                     |
|     new |      +72 B |  0.0% → 0.7% |     0 B → 72 B |   0 → 1 | `copy()`                                                                                                    | `java.lang.reflect.Field`                               |
|     new |      +64 B |  0.0% → 0.6% |     0 B → 64 B |   0 → 1 | `<init>(Class, MetaMethod[])`                                                                               | `groovy.lang.MetaClassImpl`                             |
|     new |      +64 B |  0.0% → 0.6% |     0 B → 64 B |   0 → 1 | `parseAnnotation2(ByteBuffer, ConstantPool, Class, boolean, Class[])`                                       | `sun.reflect.annotation.AnnotationParser`               |
|     new |      +64 B |  0.0% → 0.6% |     0 B → 64 B |   0 → 1 | `lambda$inheritFields$19(CachedClass)`                                                                      | `groovy.lang.MetaClassImpl`                             |
|     new |      +64 B |  0.0% → 0.6% |     0 B → 64 B |   0 → 1 | `lambda$initValue$2(Method)`                                                                                | `org.codehaus.groovy.reflection.CachedClass$3`          |
|     new |      +64 B |  0.0% → 0.6% |     0 B → 64 B |   0 → 1 | `<init>(MethodType)`                                                                                        | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`     |
|     new |      +64 B |  0.0% → 0.6% |     0 B → 64 B |   0 → 3 | `<init>(String, int, ClassNode, ClassNode[], MixinNode[])`                                                  | `org.codehaus.groovy.ast.ClassNode`                     |
|     new |      +56 B |  0.0% → 0.6% |     0 B → 56 B |   0 → 1 | `addMethod(MethodDescriptor)`                                                                               | `java.beans.Introspector`                               |
|     new |      +56 B |  0.0% → 0.6% |     0 B → 56 B |   0 → 1 | `visitList(GroovyParser$ListContext)`                                                                       | `org.apache.groovy.parser.antlr4.AstBuilder`            |
| +100.0% |      +48 B |  0.1% → 0.9% |    48 B → 96 B |   1 → 2 | `makeBlockInliningWrapper(MethodHandle)`                                                                    | `java.lang.invoke.MethodHandleImpl`                     |
|     new |      +48 B |  0.0% → 0.5% |     0 B → 48 B |   0 → 1 | `postfixExpression()`                                                                                       | `org.apache.groovy.parser.antlr4.GroovyParser`          |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |       Delta |            % |          Size | Objects | Function                                                                                                            | Location                                                 |
| ------: | ----------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| removed | -64.015 KiB | 92.4% → 0.0% |  64 KiB → 0 B |   1 → 0 | `<clinit>()`                                                                                                        | `com.sun.org.apache.xerces.internal.util.XMLChar`        |
|  -32.4% |      -176 B |  0.8% → 3.6% | 544 B → 368 B |   6 → 4 | `copyOfRangeByte(byte[], int, int)`                                                                                 | `java.util.Arrays`                                       |
|  -33.3% |      -152 B |  0.6% → 3.0% | 456 B → 304 B |   3 → 2 | `getPlainNodeReference(boolean)`                                                                                    | `org.codehaus.groovy.ast.ClassNode`                      |
| removed |      -120 B |  0.2% → 0.0% |   120 B → 0 B |   1 → 0 | `lambda$createClassLoader$0()`                                                                                      | `org.codehaus.groovy.control.ProcessingUnit`             |
|  -40.0% |      -112 B |  0.4% → 1.7% | 280 B → 168 B |   5 → 3 | `grow(int)`                                                                                                         | `java.util.ArrayList`                                    |
| removed |       -80 B |  0.1% → 0.0% |    80 B → 0 B |   1 → 0 | `make(MethodType, LambdaForm, Object, Object, Object, Object, int, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.BoundMethodHandle$Species_LLLLILLLLLL` |
| removed |       -80 B |  0.1% → 0.0% |    80 B → 0 B |   2 → 0 | `addEntry(Object, Object, TreeMap$Entry, boolean)`                                                                  | `java.util.TreeMap`                                      |
| removed |       -72 B |  0.1% → 0.0% |    72 B → 0 B |   1 → 0 | `getDeclaredConstructors0(boolean)`                                                                                 | `java.lang.Class`                                        |
| removed |       -64 B |  0.1% → 0.0% |    64 B → 0 B |   1 → 0 | `setupProperties(PropertyDescriptor[])`                                                                             | `groovy.lang.MetaClassImpl`                              |
|  -21.6% |       -64 B |  0.4% → 2.3% | 296 B → 232 B |   3 → 4 | `getDeclaredMethods0(boolean)`                                                                                      | `java.lang.Class`                                        |
| removed |       -64 B |  0.1% → 0.0% |    64 B → 0 B |   1 → 0 | `lambda$inheritStaticInterfaceFields$16(CachedClass)`                                                               | `groovy.lang.MetaClassImpl`                              |
|  -50.0% |       -64 B |  0.2% → 0.6% |  128 B → 64 B |   4 → 2 | `<init>(int)`                                                                                                       | `org.codehaus.groovy.util.ListHashMap`                   |
| removed |       -64 B |  0.1% → 0.0% |    64 B → 0 B |   1 → 0 | `visitVariableDeclarator(GroovyParser$VariableDeclaratorContext)`                                                   | `org.apache.groovy.parser.antlr4.AstBuilder`             |
|  -12.5% |       -56 B |  0.6% → 3.9% | 448 B → 392 B |   8 → 7 | `getOrPutMethods(String, MetaMethodIndex$Header)`                                                                   | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`  |
| removed |       -56 B |  0.1% → 0.0% |    56 B → 0 B |   1 → 0 | `constX(Object)`                                                                                                    | `org.codehaus.groovy.ast.tools.GeneralUtils`             |
| removed |       -48 B |  0.1% → 0.0% |    48 B → 0 B |   1 → 0 | `moduleHashes()`                                                                                                    | `jdk.internal.module.SystemModules$all`                  |
|  -66.7% |       -48 B |  0.1% → 0.2% |   72 B → 24 B |   3 → 1 | `toString()`                                                                                                        | `java.lang.StringBuilder`                                |
| removed |       -48 B |  0.1% → 0.0% |    48 B → 0 B |   1 → 0 | `<init>()`                                                                                                          | `java.util.HashSet`                                      |
| removed |       -48 B |  0.1% → 0.0% |    48 B → 0 B |   2 → 0 | `copy()`                                                                                                            | `org.codehaus.groovy.util.FastArray`                     |
| removed |       -48 B |  0.1% → 0.0% |    48 B → 0 B |   2 → 0 | `addMethodToList(Object, MetaMethod)`                                                                               | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`  |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

|  Change |      Delta |            % |                Size | Objects | Function                                                                                         | Location                                             |
| ------: | ---------: | -----------: | ------------------: | ------: | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
|     new | +9.031 KiB | 0.0% → 91.4% |      0 B → 9.03 KiB |  0 → 89 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`      | `java.lang.invoke.LambdaForm$DMH.0x00000008010b2800` |
|     new | +8.804 KiB | 0.0% → 89.1% |       0 B → 8.8 KiB |  0 → 84 | `guardWithCatch(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x0000000801117800`  |
|     new | +8.804 KiB | 0.0% → 89.1% |       0 B → 8.8 KiB |  0 → 84 | `guard(Object, Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x0000000801118400`  |
|     new |  +8.57 KiB | 0.0% → 86.7% |      0 B → 8.57 KiB |  0 → 81 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000000801115400`  |
|     new | +7.601 KiB | 0.0% → 76.9% |       0 B → 7.6 KiB |  0 → 58 | `reinvoke(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x0000000801118000`  |
|     new |  +5.46 KiB | 0.0% → 55.3% |      0 B → 5.46 KiB |  0 → 31 | `guardWithCatch(Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000000801102400`  |
|     new |  +5.46 KiB | 0.0% → 55.3% |      0 B → 5.46 KiB |  0 → 31 | `guard(Object, Object)`                                                                          | `java.lang.invoke.LambdaForm$MH.0x0000000801104000`  |
|     new | +5.054 KiB | 0.0% → 51.1% |      0 B → 5.05 KiB |  0 → 23 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x0000000801150800`  |
|     new | +4.843 KiB | 0.0% → 49.0% |      0 B → 4.84 KiB |  0 → 20 | `invokeVirtual(Object, Object, int)`                                                             | `java.lang.invoke.LambdaForm$DMH.0x0000000801152800` |
|     new | +4.843 KiB | 0.0% → 49.0% |      0 B → 4.84 KiB |  0 → 20 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x00000008012d8000`  |
| +210.6% |  +4.82 KiB | 3.3% → 71.9% | 2.29 KiB → 7.11 KiB | 40 → 52 | `invokeSpecial(Object, Object, Object)`                                                          | `java.lang.invoke.DirectMethodHandle$Holder`         |
| +213.2% | +4.679 KiB | 3.2% → 69.6% |  2.2 KiB → 6.88 KiB | 40 → 50 | `invokeImpl(Object, Object[])`                                                                   | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|     new | +4.601 KiB | 0.0% → 46.6% |       0 B → 4.6 KiB |  0 → 14 | `invokeVirtual(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$DMH.0x0000000801101c00` |
| +201.4% | +4.593 KiB | 3.3% → 69.6% | 2.28 KiB → 6.88 KiB | 40 → 50 | `invokeExact_MT(Object, Object, Object, Object)`                                                 | `java.lang.invoke.Invokers$Holder`                   |
| +262.3% |  +4.57 KiB | 2.5% → 63.9% | 1.74 KiB → 6.31 KiB | 31 → 38 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
|     new | +4.554 KiB | 0.0% → 46.1% |      0 B → 4.55 KiB |  0 → 13 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x00000008012c5c00`  |
|     new | +4.507 KiB | 0.0% → 45.6% |      0 B → 4.51 KiB |  0 → 12 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x0000000801145c00`  |
|     new | +4.492 KiB | 0.0% → 45.5% |      0 B → 4.49 KiB |  0 → 13 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x0000000801830400`  |
| +345.3% | +4.343 KiB | 1.8% → 56.7% |  1.26 KiB → 5.6 KiB | 24 → 32 | `linkToCallSite(Object, Object)`                                                                 | `java.lang.invoke.Invokers$Holder`                   |
| +916.7% | +4.296 KiB | 0.7% → 48.2% |    480 B → 4.77 KiB |  8 → 16 | `init()`                                                                                         | `org.codenarc.analyzer.SuppressionAnalyzer`          |

##### Standard library

|  Change |      Delta |            % |                Size | Objects | Function                                                                                         | Location                                             |
| ------: | ---------: | -----------: | ------------------: | ------: | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
|     new | +9.031 KiB | 0.0% → 91.4% |      0 B → 9.03 KiB |  0 → 89 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`      | `java.lang.invoke.LambdaForm$DMH.0x00000008010b2800` |
|     new | +8.804 KiB | 0.0% → 89.1% |       0 B → 8.8 KiB |  0 → 84 | `guardWithCatch(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x0000000801117800`  |
|     new | +8.804 KiB | 0.0% → 89.1% |       0 B → 8.8 KiB |  0 → 84 | `guard(Object, Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x0000000801118400`  |
|     new |  +8.57 KiB | 0.0% → 86.7% |      0 B → 8.57 KiB |  0 → 81 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000000801115400`  |
|     new | +7.601 KiB | 0.0% → 76.9% |       0 B → 7.6 KiB |  0 → 58 | `reinvoke(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x0000000801118000`  |
|     new |  +5.46 KiB | 0.0% → 55.3% |      0 B → 5.46 KiB |  0 → 31 | `guardWithCatch(Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000000801102400`  |
|     new |  +5.46 KiB | 0.0% → 55.3% |      0 B → 5.46 KiB |  0 → 31 | `guard(Object, Object)`                                                                          | `java.lang.invoke.LambdaForm$MH.0x0000000801104000`  |
|     new | +5.054 KiB | 0.0% → 51.1% |      0 B → 5.05 KiB |  0 → 23 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x0000000801150800`  |
|     new | +4.843 KiB | 0.0% → 49.0% |      0 B → 4.84 KiB |  0 → 20 | `invokeVirtual(Object, Object, int)`                                                             | `java.lang.invoke.LambdaForm$DMH.0x0000000801152800` |
|     new | +4.843 KiB | 0.0% → 49.0% |      0 B → 4.84 KiB |  0 → 20 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x00000008012d8000`  |
| +210.6% |  +4.82 KiB | 3.3% → 71.9% | 2.29 KiB → 7.11 KiB | 40 → 52 | `invokeSpecial(Object, Object, Object)`                                                          | `java.lang.invoke.DirectMethodHandle$Holder`         |
| +213.2% | +4.679 KiB | 3.2% → 69.6% |  2.2 KiB → 6.88 KiB | 40 → 50 | `invokeImpl(Object, Object[])`                                                                   | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|     new | +4.601 KiB | 0.0% → 46.6% |       0 B → 4.6 KiB |  0 → 14 | `invokeVirtual(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$DMH.0x0000000801101c00` |
| +201.4% | +4.593 KiB | 3.3% → 69.6% | 2.28 KiB → 6.88 KiB | 40 → 50 | `invokeExact_MT(Object, Object, Object, Object)`                                                 | `java.lang.invoke.Invokers$Holder`                   |
| +262.3% |  +4.57 KiB | 2.5% → 63.9% | 1.74 KiB → 6.31 KiB | 31 → 38 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
|     new | +4.554 KiB | 0.0% → 46.1% |      0 B → 4.55 KiB |  0 → 13 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x00000008012c5c00`  |
|     new | +4.507 KiB | 0.0% → 45.6% |      0 B → 4.51 KiB |  0 → 12 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x0000000801145c00`  |
|     new | +4.492 KiB | 0.0% → 45.5% |      0 B → 4.49 KiB |  0 → 13 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x0000000801830400`  |
| +345.3% | +4.343 KiB | 1.8% → 56.7% |  1.26 KiB → 5.6 KiB | 24 → 32 | `linkToCallSite(Object, Object)`                                                                 | `java.lang.invoke.Invokers$Holder`                   |
|     new | +4.187 KiB | 0.0% → 42.4% |      0 B → 4.19 KiB |   0 → 6 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000080138c400`  |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |       Delta |            % |            Size | Objects | Function                                                                                    | Location                                             |
| ------: | ----------: | -----------: | --------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -67.96 KiB | 98.1% → 0.0% |    68 KiB → 0 B |  73 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000e0010b2800` |
| removed | -67.859 KiB | 98.0% → 0.0% |  67.9 KiB → 0 B |  68 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e001117800`  |
| removed | -67.859 KiB | 98.0% → 0.0% |  67.9 KiB → 0 B |  68 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000e001118400`  |
| removed |  -67.75 KiB | 97.8% → 0.0% |  67.8 KiB → 0 B |  66 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e001115400`  |
| removed | -66.539 KiB | 96.1% → 0.0% |  66.5 KiB → 0 B |  47 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e001141000`  |
| removed | -66.226 KiB | 95.6% → 0.0% |  66.2 KiB → 0 B |  40 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000e001118000`  |
| removed | -65.351 KiB | 94.4% → 0.0% |  65.4 KiB → 0 B |  23 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e001005400`  |
| removed | -64.234 KiB | 92.7% → 0.0% |  64.2 KiB → 0 B |   5 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e001145c00`  |
| removed | -64.218 KiB | 92.7% → 0.0% |  64.2 KiB → 0 B |   4 → 0 | `invokeSpecial(Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$DMH.0x000000e001001000` |
| removed | -64.109 KiB | 92.6% → 0.0% |  64.1 KiB → 0 B |   3 → 0 | `newConstructorAccessor(Constructor)`                                                       | `jdk.internal.reflect.MethodHandleAccessorFactory`   |
| removed | -64.109 KiB | 92.6% → 0.0% |  64.1 KiB → 0 B |   3 → 0 | `newConstructorAccessor(Constructor)`                                                       | `jdk.internal.reflect.ReflectionFactory`             |
| removed | -64.109 KiB | 92.6% → 0.0% |  64.1 KiB → 0 B |   3 → 0 | `acquireConstructorAccessor()`                                                              | `java.lang.reflect.Constructor`                      |
| removed | -64.109 KiB | 92.6% → 0.0% |  64.1 KiB → 0 B |   3 → 0 | `newInstance(Object[])`                                                                     | `java.lang.reflect.Constructor`                      |
| removed | -64.101 KiB | 92.6% → 0.0% |  64.1 KiB → 0 B |   2 → 0 | `validateXml(String)`                                                                       | `org.codenarc.ruleset.XmlReaderRuleSet`              |
| removed | -64.101 KiB | 92.6% → 0.0% |  64.1 KiB → 0 B |   2 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e00116d400`  |
|  -99.9% |  -64.07 KiB | 92.6% → 0.6% | 64.1 KiB → 64 B |       2 | `newInvokeSpecial(Object, Object)`                                                          | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed | -64.062 KiB | 92.5% → 0.0% |  64.1 KiB → 0 B |   2 → 0 | `ensureClassInitialized0(Class)`                                                            | `jdk.internal.misc.Unsafe`                           |
| removed | -64.062 KiB | 92.5% → 0.0% |  64.1 KiB → 0 B |   2 → 0 | `ensureClassInitialized(Class)`                                                             | `jdk.internal.misc.Unsafe`                           |
| removed | -64.062 KiB | 92.5% → 0.0% |  64.1 KiB → 0 B |   2 → 0 | `ensureClassInitialized(Class)`                                                             | `jdk.internal.reflect.MethodHandleAccessorFactory`   |
| removed | -64.015 KiB | 92.4% → 0.0% |    64 KiB → 0 B |   1 → 0 | `<clinit>()`                                                                                | `com.sun.org.apache.xerces.internal.util.XMLChar`    |

##### Standard library

|  Change |       Delta |            % |            Size | Objects | Function                                                                                    | Location                                                         |
| ------: | ----------: | -----------: | --------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| removed |  -67.96 KiB | 98.1% → 0.0% |    68 KiB → 0 B |  73 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000e0010b2800`             |
| removed | -67.859 KiB | 98.0% → 0.0% |  67.9 KiB → 0 B |  68 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e001117800`              |
| removed | -67.859 KiB | 98.0% → 0.0% |  67.9 KiB → 0 B |  68 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000e001118400`              |
| removed |  -67.75 KiB | 97.8% → 0.0% |  67.8 KiB → 0 B |  66 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e001115400`              |
| removed | -66.539 KiB | 96.1% → 0.0% |  66.5 KiB → 0 B |  47 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e001141000`              |
| removed | -66.226 KiB | 95.6% → 0.0% |  66.2 KiB → 0 B |  40 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000e001118000`              |
| removed | -65.351 KiB | 94.4% → 0.0% |  65.4 KiB → 0 B |  23 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e001005400`              |
| removed | -64.234 KiB | 92.7% → 0.0% |  64.2 KiB → 0 B |   5 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e001145c00`              |
| removed | -64.218 KiB | 92.7% → 0.0% |  64.2 KiB → 0 B |   4 → 0 | `invokeSpecial(Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$DMH.0x000000e001001000`             |
| removed | -64.109 KiB | 92.6% → 0.0% |  64.1 KiB → 0 B |   3 → 0 | `newConstructorAccessor(Constructor)`                                                       | `jdk.internal.reflect.MethodHandleAccessorFactory`               |
| removed | -64.109 KiB | 92.6% → 0.0% |  64.1 KiB → 0 B |   3 → 0 | `newConstructorAccessor(Constructor)`                                                       | `jdk.internal.reflect.ReflectionFactory`                         |
| removed | -64.109 KiB | 92.6% → 0.0% |  64.1 KiB → 0 B |   3 → 0 | `acquireConstructorAccessor()`                                                              | `java.lang.reflect.Constructor`                                  |
| removed | -64.109 KiB | 92.6% → 0.0% |  64.1 KiB → 0 B |   3 → 0 | `newInstance(Object[])`                                                                     | `java.lang.reflect.Constructor`                                  |
| removed | -64.101 KiB | 92.6% → 0.0% |  64.1 KiB → 0 B |   2 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e00116d400`              |
|  -99.9% |  -64.07 KiB | 92.6% → 0.6% | 64.1 KiB → 64 B |       2 | `newInvokeSpecial(Object, Object)`                                                          | `java.lang.invoke.DirectMethodHandle$Holder`                     |
| removed | -64.062 KiB | 92.5% → 0.0% |  64.1 KiB → 0 B |   2 → 0 | `ensureClassInitialized0(Class)`                                                            | `jdk.internal.misc.Unsafe`                                       |
| removed | -64.062 KiB | 92.5% → 0.0% |  64.1 KiB → 0 B |   2 → 0 | `ensureClassInitialized(Class)`                                                             | `jdk.internal.misc.Unsafe`                                       |
| removed | -64.062 KiB | 92.5% → 0.0% |  64.1 KiB → 0 B |   2 → 0 | `ensureClassInitialized(Class)`                                                             | `jdk.internal.reflect.MethodHandleAccessorFactory`               |
| removed | -64.015 KiB | 92.4% → 0.0% |    64 KiB → 0 B |   1 → 0 | `<clinit>()`                                                                                | `com.sun.org.apache.xerces.internal.util.XMLChar`                |
| removed | -64.015 KiB | 92.4% → 0.0% |    64 KiB → 0 B |   1 → 0 | `normalize(Object, short)`                                                                  | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl` |
