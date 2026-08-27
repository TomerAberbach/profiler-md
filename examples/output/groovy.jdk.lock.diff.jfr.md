# Sampling profile diff

Collected 294 samples → 290 samples (-4 samples, -1.4%).

| Category         | Change | Delta |             % |   Samples |
| ---------------- | -----: | ----: | ------------: | --------: |
| Standard library |  -1.1% |    -3 | 96.9% → 97.2% | 285 → 282 |
| Ours             | -11.1% |    -1 |   3.1% → 2.8% |     9 → 8 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                      | Location                                                                   |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| +500.0% |    +5 | 0.3% → 2.1% |   1 → 6 | `resize()`                                                                                    | `java.util.HashMap`                                                        |
|  +50.0% |    +4 | 2.7% → 4.1% |  8 → 12 | `putVal(int, Object, Object, boolean, boolean)`                                               | `java.util.HashMap`                                                        |
|     new |    +4 | 0.0% → 1.4% |   0 → 4 | `checkCustomized(MethodHandle)`                                                               | `java.lang.invoke.Invokers`                                                |
| +100.0% |    +3 | 1.0% → 2.1% |   3 → 6 | `prepare()`                                                                                   | `java.lang.invoke.LambdaForm`                                              |
| +300.0% |    +3 | 0.3% → 1.4% |   1 → 4 | `getReachableConfigSet(CharStream, ATNConfigSet, ATNConfigSet, int)`                          | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`                      |
|     new |    +3 | 0.0% → 1.0% |   0 → 3 | `sync(int)`                                                                                   | `groovyjarjarantlr4.v4.runtime.BufferedTokenStream`                        |
| +150.0% |    +3 | 0.7% → 1.7% |   2 → 5 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                                 | `java.util.zip.Inflater`                                                   |
| +300.0% |    +3 | 0.3% → 1.4% |   1 → 4 | `clone()`                                                                                     | `java.lang.Object`                                                         |
| +100.0% |    +3 | 1.0% → 2.1% |   3 → 6 | `hashCodeRange(int, int)`                                                                     | `java.util.ArrayList`                                                      |
|     new |    +3 | 0.0% → 1.0% |   0 → 3 | `hashCode()`                                                                                  | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`                              |
|     new |    +3 | 0.0% → 1.0% |   0 → 3 | `equals(Object)`                                                                              | `groovyjarjarantlr4.v4.runtime.atn.SingletonPredictionContext`             |
|     new |    +3 | 0.0% → 1.0% |   0 → 3 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000e801002c00`                        |
|     new |    +3 | 0.0% → 1.0% |   0 → 3 | `keepsAlive(Class, ClassLoader)`                                                              | `java.lang.invoke.MethodHandle`                                            |
| +200.0% |    +2 | 0.3% → 1.0% |   1 → 3 | `provide(Object)`                                                                             | `org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x000000e8010b6d70` |
| +200.0% |    +2 | 0.3% → 1.0% |   1 → 3 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                            |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `invokeSpecial(Object, Object, Object)`                                                       | `java.lang.invoke.DirectMethodHandle$Holder`                               |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `ensureCapacityInternal(int)`                                                                 | `java.lang.AbstractStringBuilder`                                          |
|  +50.0% |    +2 | 1.4% → 2.1% |   4 → 6 | `newInstance(Class, int)`                                                                     | `java.lang.reflect.Array`                                                  |
|  +33.3% |    +2 | 2.0% → 2.8% |   6 → 8 | `getNode(Object)`                                                                             | `java.util.HashMap`                                                        |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `privateGetDeclaredMethods(boolean)`                                                          | `java.lang.Class`                                                          |

##### Ours

| Change | Delta |           % | Samples | Function                           | Location                                                              |
| -----: | ----: | ----------: | ------: | ---------------------------------- | --------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `init()`                           | `org.codenarc.analyzer.SuppressionAnalyzer`                           |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `applyTo(SourceCode, List)`        | `org.codenarc.rule.naming.ClassNameSameAsFilenameRule`                |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `isAnonymousInnerClass(ClassNode)` | `org.codenarc.rule.basic.EmptyClassAstVisitor`                        |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `getAstVisitor()`                  | `org.codenarc.rule.exceptions.ThrowExceptionRule`                     |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `flagIfPackage(String)`            | `org.codenarc.rule.formatting.LineLengthRule`                         |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `getMetaClass()`                   | `org.codenarc.rule.exceptions.CommonThrowAstVisitor`                  |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `getMetaClass()`                   | `org.codenarc.rule.unnecessary.UnnecessaryDefInMethodDeclarationRule` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % | Samples | Function                                                                                                      | Location                                                                   |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
|  -62.5% |   -10 |  5.4% → 2.1% |  16 → 6 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`                     |
|  -12.9% |    -4 | 10.5% → 9.3% | 31 → 27 | `newArray(Class, int)`                                                                                        | `java.lang.reflect.Array`                                                  |
|  -66.7% |    -4 |  2.0% → 0.7% |   6 → 2 | `init(MemberName, Object)`                                                                                    | `java.lang.invoke.MethodHandleNatives`                                     |
| removed |    -4 |  1.4% → 0.0% |   4 → 0 | `valueConversion(Class, Class, boolean, boolean)`                                                             | `java.lang.invoke.MethodHandleImpl`                                        |
| removed |    -3 |  1.0% → 0.0% |   3 → 0 | `apply(Object, Object)`                                                                                       | `org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x000000e80118a7e8` |
|  -75.0% |    -3 |  1.4% → 0.3% |   4 → 1 | `add(ATNConfig, PredictionContextCache)`                                                                      | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`                           |
| removed |    -3 |  1.0% → 0.0% |   3 → 0 | `getMethods(Class, String)`                                                                                   | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`                    |
| removed |    -3 |  1.0% → 0.0% |   3 → 0 | `hashCode()`                                                                                                  | `java.lang.String`                                                         |
| removed |    -3 |  1.0% → 0.0% |   3 → 0 | `reflectionData()`                                                                                            | `java.lang.Class`                                                          |
| removed |    -3 |  1.0% → 0.0% |   3 → 0 | `filterArgumentForm(int, LambdaForm$BasicType)`                                                               | `java.lang.invoke.LambdaFormEditor`                                        |
| removed |    -3 |  1.0% → 0.0% |   3 → 0 | `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)`                                                  | `java.math.MutableBigInteger`                                              |
| removed |    -2 |  0.7% → 0.0% |   2 → 0 | `isArray()`                                                                                                   | `java.lang.Class`                                                          |
| removed |    -2 |  0.7% → 0.0% |   2 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x000000e0010b2800`                       |
| removed |    -2 |  0.7% → 0.0% |   2 → 0 | `isInterface()`                                                                                               | `java.lang.Class`                                                          |
|  -66.7% |    -2 |  1.0% → 0.3% |   3 → 1 | `isAssignableFrom(Class)`                                                                                     | `java.lang.Class`                                                          |
|  -50.0% |    -2 |  1.4% → 0.7% |   4 → 2 | `closure(ATNConfigSet, ATNConfigSet, boolean, boolean, PredictionContextCache, boolean)`                      | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`                     |
|  -66.7% |    -2 |  1.0% → 0.3% |   3 → 1 | `collectViolations(SourceCode, RuleSet)`                                                                      | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| removed |    -2 |  0.7% → 0.0% |   2 → 0 | `mismatch(byte[], int, byte[], int, int)`                                                                     | `jdk.internal.util.ArraysSupport`                                          |
| removed |    -2 |  0.7% → 0.0% |   2 → 0 | `isSameMetaClass(MetaClass, Object)`                                                                          | `org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures`           |
|  -50.0% |    -2 |  1.4% → 0.7% |   4 → 2 | `get(Object)`                                                                                                 | `java.util.concurrent.ConcurrentHashMap`                                   |

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                                                      | Location                                                                   |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
|  -62.5% |   -10 |  5.4% → 2.1% |  16 → 6 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`                     |
|  -12.9% |    -4 | 10.5% → 9.3% | 31 → 27 | `newArray(Class, int)`                                                                                        | `java.lang.reflect.Array`                                                  |
|  -66.7% |    -4 |  2.0% → 0.7% |   6 → 2 | `init(MemberName, Object)`                                                                                    | `java.lang.invoke.MethodHandleNatives`                                     |
| removed |    -4 |  1.4% → 0.0% |   4 → 0 | `valueConversion(Class, Class, boolean, boolean)`                                                             | `java.lang.invoke.MethodHandleImpl`                                        |
| removed |    -3 |  1.0% → 0.0% |   3 → 0 | `apply(Object, Object)`                                                                                       | `org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x000000e80118a7e8` |
|  -75.0% |    -3 |  1.4% → 0.3% |   4 → 1 | `add(ATNConfig, PredictionContextCache)`                                                                      | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`                           |
| removed |    -3 |  1.0% → 0.0% |   3 → 0 | `getMethods(Class, String)`                                                                                   | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`                    |
| removed |    -3 |  1.0% → 0.0% |   3 → 0 | `hashCode()`                                                                                                  | `java.lang.String`                                                         |
| removed |    -3 |  1.0% → 0.0% |   3 → 0 | `reflectionData()`                                                                                            | `java.lang.Class`                                                          |
| removed |    -3 |  1.0% → 0.0% |   3 → 0 | `filterArgumentForm(int, LambdaForm$BasicType)`                                                               | `java.lang.invoke.LambdaFormEditor`                                        |
| removed |    -3 |  1.0% → 0.0% |   3 → 0 | `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)`                                                  | `java.math.MutableBigInteger`                                              |
| removed |    -2 |  0.7% → 0.0% |   2 → 0 | `isArray()`                                                                                                   | `java.lang.Class`                                                          |
| removed |    -2 |  0.7% → 0.0% |   2 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x000000e0010b2800`                       |
| removed |    -2 |  0.7% → 0.0% |   2 → 0 | `isInterface()`                                                                                               | `java.lang.Class`                                                          |
|  -66.7% |    -2 |  1.0% → 0.3% |   3 → 1 | `isAssignableFrom(Class)`                                                                                     | `java.lang.Class`                                                          |
|  -50.0% |    -2 |  1.4% → 0.7% |   4 → 2 | `closure(ATNConfigSet, ATNConfigSet, boolean, boolean, PredictionContextCache, boolean)`                      | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`                     |
| removed |    -2 |  0.7% → 0.0% |   2 → 0 | `mismatch(byte[], int, byte[], int, int)`                                                                     | `jdk.internal.util.ArraysSupport`                                          |
| removed |    -2 |  0.7% → 0.0% |   2 → 0 | `isSameMetaClass(MetaClass, Object)`                                                                          | `org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures`           |
|  -50.0% |    -2 |  1.4% → 0.7% |   4 → 2 | `get(Object)`                                                                                                 | `java.util.concurrent.ConcurrentHashMap`                                   |
| removed |    -2 |  0.7% → 0.0% |   2 → 0 | `cast(Object)`                                                                                                | `java.lang.Class`                                                          |

##### Ours

|  Change | Delta |           % | Samples | Function                                       | Location                                                                            |
| ------: | ----: | ----------: | ------: | ---------------------------------------------- | ----------------------------------------------------------------------------------- |
|  -66.7% |    -2 | 1.0% → 0.3% |   3 → 1 | `collectViolations(SourceCode, RuleSet)`       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                      |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `<init>(AbstractAstVisitor)`                   | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`                      |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `applyTo(SourceCode, List)`                    | `org.codenarc.rule.formatting.MissingBlankLineAfterPackageRule`                     |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `doCall(Object)`                               | `org.codenarc.rule.unused.UnusedPrivateFieldRule$_collectAllPrivateFields_closure3` |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `violationMessage(String, String, String)`     | `org.codenarc.rule.formatting.SpaceAroundMapEntryColonAstVisitor`                   |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `<init>(Object, Object, Reference, Reference)` | `org.codenarc.rule.imports.UnusedImportRule$_processStaticImports_closure2`         |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `classNodeImplementsType(ClassNode, Class)`    | `org.codenarc.util.AstUtil`                                                         |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

##### Standard library

| Change | Delta |            % | Samples | Function                                                                                    | Location                                             |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new |  +262 | 0.0% → 90.3% | 0 → 262 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800` |
|    new |  +217 | 0.0% → 74.8% | 0 → 217 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e801115400`  |
|    new |  +216 | 0.0% → 74.5% | 0 → 216 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e801117800`  |
|    new |  +215 | 0.0% → 74.1% | 0 → 215 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000e801118400`  |
|    new |  +159 | 0.0% → 54.8% | 0 → 159 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000e801118000`  |
|    new |  +119 | 0.0% → 41.0% | 0 → 119 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000e8010bd400` |
|    new |  +115 | 0.0% → 39.7% | 0 → 115 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e801141000`  |
|    new |  +109 | 0.0% → 37.6% | 0 → 109 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e80113fc00`  |
|    new |  +109 | 0.0% → 37.6% | 0 → 109 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000e801140400`  |
|    new |  +106 | 0.0% → 36.6% | 0 → 106 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000e80118d400`  |
|    new |   +89 | 0.0% → 30.7% |  0 → 89 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000e80138c800` |
|    new |   +89 | 0.0% → 30.7% |  0 → 89 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e8013d2000`  |
|    new |   +87 | 0.0% → 30.0% |  0 → 87 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000e80118d000`  |
|    new |   +86 | 0.0% → 29.7% |  0 → 86 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e801119400`  |
|    new |   +85 | 0.0% → 29.3% |  0 → 85 | `invokeInterface(Object, Object, Object)`                                                   | `java.lang.invoke.LambdaForm$DMH.0x000000e8010bd000` |
|    new |   +84 | 0.0% → 29.0% |  0 → 84 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000e8010bc800` |
|    new |   +83 | 0.0% → 28.6% |  0 → 83 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e8012ac800`  |
|    new |   +80 | 0.0% → 27.6% |  0 → 80 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e801102400`  |
|    new |   +76 | 0.0% → 26.2% |  0 → 76 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000e801104000`  |
|    new |   +75 | 0.0% → 25.9% |  0 → 75 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e801140c00`  |

##### Ours

|  Change | Delta |             % | Samples | Function                                                | Location                                                                   |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------- | -------------------------------------------------------------------------- |
|  +38.7% |   +24 | 21.1% → 29.7% | 62 → 86 | `applyTo(SourceCode)`                                   | `org.codenarc.rule.AbstractRule`                                           |
|  +29.2% |   +21 | 24.5% → 32.1% | 72 → 93 | `doCall(Object)`                                        | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
|  +33.3% |   +21 | 21.4% → 29.0% | 63 → 84 | `measureRuleProcessingTime(Rule, Closure)`              | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
|  +14.8% |    +8 | 18.4% → 21.4% | 54 → 62 | `applyTo(SourceCode, List)`                             | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
| +250.0% |    +5 |   0.7% → 2.4% |   2 → 7 | `doCall(Object)`                                        | `org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`         |
|  +15.2% |    +5 | 11.2% → 13.1% | 33 → 38 | `visitMethod(MethodNode)`                               | `org.codenarc.rule.AbstractAstVisitor`                                     |
|   +8.0% |    +4 | 17.0% → 18.6% | 50 → 54 | `visitClass(ClassNode)`                                 | `org.codenarc.rule.AbstractAstVisitor`                                     |
| +100.0% |    +4 |   1.4% → 2.8% |   4 → 8 | `applyVisitor(AstVisitor, SourceCode)`                  | `org.codenarc.rule.AbstractSharedAstVisitorRule`                           |
|     new |    +4 |   0.0% → 1.4% |   0 → 4 | `applyTo(SourceCode, List)`                             | `org.codenarc.rule.naming.ClassNameSameAsFilenameRule`                     |
|     new |    +4 |   0.0% → 1.4% |   0 → 4 | `visitMethodCallExpression(MethodCallExpression)`       | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                   |
| +300.0% |    +3 |   0.3% → 1.4% |   1 → 4 | `assertClassImplementsRuleInterface(Class)`             | `org.codenarc.ruleset.RuleSetUtil`                                         |
|  +50.0% |    +3 |   2.0% → 3.1% |   6 → 9 | `applyTo(SourceCode, List)`                             | `org.codenarc.rule.AbstractSharedAstVisitorRule`                           |
|     new |    +3 |   0.0% → 1.0% |   0 → 3 | `checkForCorrectColumn(ASTNode, String, int)`           | `org.codenarc.rule.formatting.IndentationAstVisitor`                       |
|     new |    +3 |   0.0% → 1.0% |   0 → 3 | `checkForCorrectColumn(ASTNode, String)`                | `org.codenarc.rule.formatting.IndentationAstVisitor`                       |
|     new |    +3 |   0.0% → 1.0% |   0 → 3 | `super$3$visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                   |
|     new |    +3 |   0.0% → 1.0% |   0 → 3 | `visitConstructorOrMethod(MethodNode, boolean)`         | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                   |
| +200.0% |    +2 |   0.3% → 1.0% |   1 → 3 | `findReference(SourceCode, String, String)`             | `org.codenarc.rule.imports.UnusedImportRule`                               |
| +200.0% |    +2 |   0.3% → 1.0% |   1 → 3 | `visitMethodCallExpression(MethodCallExpression)`       | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`               |
|  +50.0% |    +2 |   1.4% → 2.1% |   4 → 6 | `visitClass(ClassNode)`                                 | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`                    |
| +200.0% |    +2 |   0.3% → 1.0% |   1 → 3 | `processDirectory(String, RuleSet)`                     | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                           |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                                    | Location                                             |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -256 | 87.1% → 0.0% | 256 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000e0010b2800` |
| removed |  -212 | 72.1% → 0.0% | 212 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e001117800`  |
| removed |  -212 | 72.1% → 0.0% | 212 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000e001118400`  |
| removed |  -198 | 67.3% → 0.0% | 198 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e001115400`  |
| removed |  -146 | 49.7% → 0.0% | 146 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000e001118000`  |
| removed |  -116 | 39.5% → 0.0% | 116 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000e0010bd400` |
| removed |  -112 | 38.1% → 0.0% | 112 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e00113fc00`  |
| removed |  -110 | 37.4% → 0.0% | 110 → 0 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000e001140400`  |
| removed |  -106 | 36.1% → 0.0% | 106 → 0 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000e00118d400`  |
| removed |  -100 | 34.0% → 0.0% | 100 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000e0010bc800` |
| removed |   -89 | 30.3% → 0.0% |  89 → 0 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e001102400`  |
| removed |   -87 | 29.6% → 0.0% |  87 → 0 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000e001104000`  |
| removed |   -84 | 28.6% → 0.0% |  84 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e001150800`  |
| removed |   -82 | 27.9% → 0.0% |  82 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e001141000`  |
| removed |   -80 | 27.2% → 0.0% |  80 → 0 | `invokeVirtual(Object, Object, int)`                                                        | `java.lang.invoke.LambdaForm$DMH.0x000000e001152800` |
| removed |   -80 | 27.2% → 0.0% |  80 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e0012d8400`  |
| removed |   -78 | 26.5% → 0.0% |  78 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e001142000`  |
| removed |   -75 | 25.5% → 0.0% |  75 → 0 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000e00118d000`  |
| removed |   -71 | 24.1% → 0.0% |  71 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000e00136cc00` |
| removed |   -68 | 23.1% → 0.0% |  68 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e0013b2400`  |

##### Ours

|  Change | Delta |             % | Samples | Function                                                | Location                                                                                     |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
|  -28.1% |   -16 | 19.4% → 14.1% | 57 → 41 | `getAst()`                                              | `org.codenarc.source.AbstractSourceCode`                                                     |
|  -23.5% |   -12 | 17.3% → 13.4% | 51 → 39 | `init()`                                                | `org.codenarc.analyzer.SuppressionAnalyzer`                                                  |
|  -23.5% |   -12 | 17.3% → 13.4% | 51 → 39 | `isRuleSuppressed(Rule)`                                | `org.codenarc.analyzer.SuppressionAnalyzer`                                                  |
|  -20.8% |   -11 | 18.0% → 14.5% | 53 → 42 | `processFile(String, DirectoryResults, RuleSet)`        | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                                             |
|  -50.0% |   -11 |   7.5% → 3.8% | 22 → 11 | `doCall(Object)`                                        | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`                  |
|  -11.1% |    -9 | 27.6% → 24.8% | 81 → 72 | `init()`                                                | `org.codenarc.source.AbstractSourceCode`                                                     |
|  -12.7% |    -7 | 18.7% → 16.6% | 55 → 48 | `collectViolations(SourceCode, RuleSet)`                | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                               |
|  -45.5% |    -5 |   3.7% → 2.1% |  11 → 6 | `doCall(Object)`                                        | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`                   |
|  -83.3% |    -5 |   2.0% → 0.3% |   6 → 1 | `processSourceLine(String, int)`                        | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`                              |
|  -83.3% |    -5 |   2.0% → 0.3% |   6 → 1 | `doCall(Object)`                                        | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor$_visitClassComplete_closure1` |
|  -80.0% |    -4 |   1.7% → 0.3% |   5 → 1 | `getText()`                                             | `org.codenarc.source.SourceFile`                                                             |
| removed |    -4 |   1.4% → 0.0% |   4 → 0 | `addMethodsToMetricResults(SourceCode, ClassNode, Map)` | `org.gmetrics.metric.AbstractMethodMetric`                                                   |
| removed |    -4 |   1.4% → 0.0% |   4 → 0 | `doCall(Object)`                                        | `org.codenarc.report.TextReportWriter$_writeFileViolations_closure6`                         |
| removed |    -3 |   1.0% → 0.0% |   3 → 0 | `visitClassEx(ClassNode)`                               | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`                                      |
| removed |    -3 |   1.0% → 0.0% |   3 → 0 | `visitConstantExpression(ConstantExpression)`           | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`                                 |
| removed |    -3 |   1.0% → 0.0% |   3 → 0 | `doCall(Object)`                                        | `org.gmetrics.metric.AbstractMethodMetric$_addMethodsToMetricResults_closure4`               |
|  -75.0% |    -3 |   1.4% → 0.3% |   4 → 1 | `matchesAndNotWithinString(String, String)`             | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`                              |
| removed |    -3 |   1.0% → 0.0% |   3 → 0 | `writeViolation(Writer, Violation, String)`             | `org.codenarc.report.TextReportWriter`                                                       |
| removed |    -2 |   0.7% → 0.0% |   2 → 0 | `loadRules()`                                           | `org.codenarc.ruleregistry.PropertiesFileRuleRegistry`                                       |
| removed |    -2 |   0.7% → 0.0% |   2 → 0 | `<init>()`                                              | `org.codenarc.ruleregistry.PropertiesFileRuleRegistry`                                       |

# Allocated heap profile diff

Allocated 11.8 GiB → 12 GiB (+194.271 MiB, +1.6%) over 6,322 samples → 6,344 samples (1.92 MiB → 1.94 MiB per sample).

| Category         | Change |        Delta |             % |                Size |       Samples |
| ---------------- | -----: | -----------: | ------------: | ------------------: | ------------: |
| Standard library |  +1.4% | +168.436 MiB | 99.4% → 99.2% | 11.7 GiB → 11.9 GiB | 6,227 → 6,238 |
| Ours             | +33.6% |  +25.837 MiB |   0.6% → 0.8% |  76.8 MiB → 103 MiB |       40 → 52 |
| Unknown          |  -7.9% |       -3 KiB |         <0.1% | 38.1 KiB → 35.1 KiB |       55 → 54 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

##### Standard library

|   Change |        Delta |            % |                Size |   Samples | Function                                                                                      | Location                                        |
| -------: | -----------: | -----------: | ------------------: | --------: | --------------------------------------------------------------------------------------------- | ----------------------------------------------- |
|  +320.4% | +235.692 MiB |  0.6% → 2.5% |  73.6 MiB → 309 MiB |  39 → 143 | `make(MethodType, LambdaForm, Object)`                                                        | `java.lang.invoke.BoundMethodHandle$Species_L`  |
|   +19.7% | +145.894 MiB |  6.1% → 7.2% |   740 MiB → 886 MiB | 375 → 383 | `makeImpl(Class, Class[], boolean)`                                                           | `java.lang.invoke.MethodType`                   |
|  +315.9% |  +80.002 MiB |  0.2% → 0.9% |  25.3 MiB → 105 MiB |   12 → 20 | `getParameterTypes()`                                                                         | `java.lang.reflect.Method`                      |
|   +12.8% |  +79.207 MiB |  5.1% → 5.7% |   616 MiB → 696 MiB | 315 → 350 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|   +93.1% |  +56.581 MiB |  0.5% → 1.0% |  60.8 MiB → 117 MiB |   33 → 55 | `lambda$makeRef$0(MatchOps$MatchKind, Predicate)`                                             | `java.util.stream.MatchOps`                     |
|   +13.4% |  +56.581 MiB |  3.5% → 3.9% |   421 MiB → 478 MiB | 213 → 237 | `makeBlockInliningWrapper(MethodHandle)`                                                      | `java.lang.invoke.MethodHandleImpl`             |
|   +24.4% |  +42.629 MiB |  1.4% → 1.8% |   175 MiB → 217 MiB |  87 → 105 | `optimize(Pattern$Node)`                                                                      | `java.util.regex.Pattern$BnM`                   |
|  +152.5% |  +36.623 MiB |  0.2% → 0.5% |   24 MiB → 60.6 MiB |   18 → 28 | `copy()`                                                                                      | `java.lang.reflect.Method`                      |
|   +32.0% |  +33.355 MiB |  0.9% → 1.1% |   104 MiB → 138 MiB |   52 → 70 | `parameterArray()`                                                                            | `java.lang.invoke.MethodType`                   |
|   +11.5% |  +23.661 MiB |  1.7% → 1.9% |   205 MiB → 229 MiB | 105 → 115 | `allocateInstance(Object)`                                                                    | `java.lang.invoke.DirectMethodHandle`           |
|   +45.6% |  +22.829 MiB |  0.4% → 0.6% | 50.1 MiB → 72.9 MiB |   48 → 63 | `copyOf(byte[], int)`                                                                         | `java.util.Arrays`                              |
|   +44.7% |  +22.029 MiB |  0.4% → 0.6% | 49.3 MiB → 71.3 MiB |   26 → 37 | `copyOf(Object[], int)`                                                                       | `java.util.Arrays`                              |
| +1779.4% |  +21.482 MiB | <0.1% → 0.2% | 1.21 MiB → 22.7 MiB |     1 → 2 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`               | `java.lang.ClassLoader`                         |
|   +15.4% |  +20.619 MiB |  1.1% → 1.3% |   134 MiB → 155 MiB |   65 → 77 | `<init>()`                                                                                    | `java.math.MutableBigInteger`                   |
|   +45.7% |  +19.923 MiB |  0.4% → 0.5% | 43.6 MiB → 63.5 MiB |   22 → 32 | `compile(String)`                                                                             | `java.util.regex.Pattern`                       |
|    +8.6% |  +18.196 MiB |  1.7% → 1.9% |   211 MiB → 229 MiB | 111 → 120 | `newNode(int, Object, Object, HashMap$Node)`                                                  | `java.util.HashMap`                             |
|   +12.6% |   +17.23 MiB |  1.1% → 1.3% |   137 MiB → 155 MiB |   73 → 78 | `resize()`                                                                                    | `java.util.HashMap`                             |
|  +159.0% |  +17.179 MiB |  0.1% → 0.2% |   10.8 MiB → 28 MiB |    6 → 14 | `iterator()`                                                                                  | `java.util.LinkedHashMap$LinkedValues`          |
|    +6.5% |  +17.147 MiB |  2.2% → 2.3% |   262 MiB → 280 MiB | 140 → 144 | `copyOfRange(Object[], int, int)`                                                             | `java.util.Arrays`                              |
|   +32.0% |  +15.995 MiB |  0.4% → 0.5% |     50 MiB → 66 MiB |   25 → 33 | `newSlice(int[], int, boolean)`                                                               | `java.util.regex.Pattern`                       |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

##### Standard library

|  Change |        Delta |           % |                Size |   Samples | Function                                                                                     | Location                                              |
| ------: | -----------: | ----------: | ------------------: | --------: | -------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
|  -50.4% | -114.485 MiB | 1.9% → 0.9% |   227 MiB → 112 MiB |   51 → 57 | `getSelector(MutableCallSite, Class, String, int, boolean, boolean, boolean, Object[])`      | `org.codehaus.groovy.vmplugin.v8.Selector`            |
|  -21.6% |  -87.276 MiB | 3.3% → 2.6% |   405 MiB → 317 MiB | 182 → 165 | `make(MethodType, LambdaForm, Object, Object)`                                               | `java.lang.invoke.BoundMethodHandle$Species_LL`       |
|  -12.1% |  -77.079 MiB | 5.3% → 4.6% |   638 MiB → 561 MiB | 339 → 292 | `fillInStackTrace(int)`                                                                      | `java.lang.Throwable`                                 |
|  -53.7% |  -49.938 MiB | 0.8% → 0.4% |   93 MiB → 43.1 MiB |   19 → 21 | `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`       |
|  -17.0% |  -36.473 MiB | 1.8% → 1.4% |   214 MiB → 178 MiB |  110 → 90 | `compile()`                                                                                  | `java.util.regex.Pattern`                             |
|  -22.2% |  -33.962 MiB | 1.3% → 1.0% |   153 MiB → 119 MiB |   80 → 60 | `make(MethodType, LambdaForm, Object, Object, Object)`                                       | `java.lang.invoke.BoundMethodHandle$Species_LLL`      |
|  -21.0% |  -33.575 MiB | 1.3% → 1.0% |   160 MiB → 126 MiB |   81 → 66 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object)`                       | `java.lang.invoke.BoundMethodHandle$Species_LLLLL`    |
|  -31.8% |  -32.757 MiB | 0.8% → 0.6% |  103 MiB → 70.1 MiB |   54 → 37 | `newHashMap(int)`                                                                            | `java.util.HashMap`                                   |
|  -34.9% |  -29.698 MiB | 0.7% → 0.4% |   85 MiB → 55.3 MiB |   52 → 35 | `copyOfRangeByte(byte[], int, int)`                                                          | `java.util.Arrays`                                    |
|  -25.4% |  -25.624 MiB | 0.8% → 0.6% |  101 MiB → 75.3 MiB |   43 → 39 | `<init>(Pattern, CharSequence)`                                                              | `java.util.regex.Matcher`                             |
|  -18.3% |  -22.974 MiB | 1.0% → 0.8% |   125 MiB → 102 MiB |   63 → 54 | `toBigInteger(int)`                                                                          | `java.math.MutableBigInteger`                         |
| removed |  -21.848 MiB | 0.2% → 0.0% |      21.8 MiB → 0 B |     1 → 0 | `initTable()`                                                                                | `java.util.concurrent.ConcurrentHashMap`              |
|  -10.3% |  -19.989 MiB | 1.6% → 1.4% |   193 MiB → 173 MiB |  101 → 91 | `valueOf(long)`                                                                              | `java.lang.Long`                                      |
|  -40.5% |  -19.337 MiB | 0.4% → 0.2% | 47.8 MiB → 28.5 MiB |   25 → 16 | `<init>(int)`                                                                                | `java.util.ArrayList`                                 |
|   -6.7% |  -17.125 MiB | 2.1% → 1.9% |   255 MiB → 238 MiB | 130 → 124 | `divideAndRemainderKnuth(BigInteger)`                                                        | `java.math.BigInteger`                                |
|   -8.8% |  -16.066 MiB | 1.5% → 1.3% |   182 MiB → 166 MiB |   95 → 84 | `spliterator(Object[], int, int, int)`                                                       | `java.util.Spliterators`                              |
|  -36.2% |  -15.857 MiB | 0.4% → 0.2% |   43.8 MiB → 28 MiB |   23 → 14 | `of(byte, int, int, int)`                                                                    | `java.lang.invoke.LambdaFormEditor$TransformKey`      |
|  -29.3% |  -15.738 MiB | 0.4% → 0.3% |   53.7 MiB → 38 MiB |   14 → 18 | `<init>(MethodHandle, MethodHandle, boolean)`                                                | `org.codehaus.groovy.vmplugin.v8.MethodHandleWrapper` |
|  -21.7% |  -14.956 MiB | 0.6% → 0.4% |   68.9 MiB → 54 MiB |   57 → 49 | `iterator()`                                                                                 | `java.util.ArrayList`                                 |
|  -16.9% |  -14.631 MiB | 0.7% → 0.6% | 86.6 MiB → 71.9 MiB |   42 → 37 | `put(Object, Object)`                                                                        | `groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap`  |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

##### Standard library

| Change |      Delta |            % |           Size |   Samples | Function                                                                                    | Location                                             |
| -----: | ---------: | -----------: | -------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new |  +11.3 GiB | 0.0% → 94.1% | 0 B → 11.3 GiB | 0 → 5,874 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800` |
|    new | +7.674 GiB | 0.0% → 63.9% | 0 B → 7.67 GiB | 0 → 3,996 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e801115400`  |
|    new | +7.548 GiB | 0.0% → 62.8% | 0 B → 7.55 GiB | 0 → 3,932 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e801117800`  |
|    new | +7.464 GiB | 0.0% → 62.1% | 0 B → 7.46 GiB | 0 → 3,887 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000e801118400`  |
|    new | +6.745 GiB | 0.0% → 56.1% | 0 B → 6.75 GiB | 0 → 3,449 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000e801140400`  |
|    new | +6.596 GiB | 0.0% → 54.9% |  0 B → 6.6 GiB | 0 → 3,404 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000e80118d400`  |
|    new | +5.939 GiB | 0.0% → 49.4% | 0 B → 5.94 GiB | 0 → 3,168 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000e801118000`  |
|    new | +5.759 GiB | 0.0% → 47.9% | 0 B → 5.76 GiB | 0 → 2,912 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000e8010bc800` |
|    new | +5.529 GiB | 0.0% → 46.0% | 0 B → 5.53 GiB | 0 → 2,852 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000e80118d000`  |
|    new | +5.226 GiB | 0.0% → 43.5% | 0 B → 5.23 GiB | 0 → 2,683 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000e8010bd400` |
|    new | +5.151 GiB | 0.0% → 42.9% | 0 B → 5.15 GiB | 0 → 2,655 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e801142000`  |
|    new | +5.012 GiB | 0.0% → 41.7% | 0 B → 5.01 GiB | 0 → 2,558 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000e80138c800` |
|    new | +4.928 GiB | 0.0% → 41.0% | 0 B → 4.93 GiB | 0 → 2,518 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e80113fc00`  |
|    new |  +4.54 GiB | 0.0% → 37.8% | 0 B → 4.54 GiB | 0 → 2,356 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e80138d400`  |
|    new |  +4.53 GiB | 0.0% → 37.7% | 0 B → 4.53 GiB | 0 → 2,353 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e8012ac800`  |
|    new | +3.717 GiB | 0.0% → 30.9% | 0 B → 3.72 GiB | 0 → 1,910 | `invokeSpecial(Object, Object, Object, Object, Object)`                                     | `java.lang.invoke.LambdaForm$DMH.0x000000e80118e800` |
|    new | +3.667 GiB | 0.0% → 30.5% | 0 B → 3.67 GiB | 0 → 1,900 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e8013db800`  |
|    new | +3.451 GiB | 0.0% → 28.7% | 0 B → 3.45 GiB | 0 → 1,766 | `invokeExact_MT(Object, Object, Object, Object, Object, Object)`                            | `java.lang.invoke.LambdaForm$MH.0x000000e801004000`  |
|    new | +3.352 GiB | 0.0% → 27.9% | 0 B → 3.35 GiB | 0 → 1,803 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e801119400`  |
|    new | +3.321 GiB | 0.0% → 27.6% | 0 B → 3.32 GiB | 0 → 1,731 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e8013d2000`  |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Standard library

|  Change |       Delta |            % |           Size |   Samples | Function                                                                                    | Location                                             |
| ------: | ----------: | -----------: | -------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -11.114 GiB | 94.0% → 0.0% | 11.1 GiB → 0 B | 5,844 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000e0010b2800` |
| removed |  -7.522 GiB | 63.6% → 0.0% | 7.52 GiB → 0 B | 3,968 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e001115400`  |
| removed |  -7.485 GiB | 63.3% → 0.0% | 7.49 GiB → 0 B | 3,945 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e001117800`  |
| removed |  -7.385 GiB | 62.5% → 0.0% | 7.39 GiB → 0 B | 3,893 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000e001118400`  |
| removed |  -6.661 GiB | 56.3% → 0.0% | 6.66 GiB → 0 B | 3,448 → 0 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000e001140400`  |
| removed |  -6.577 GiB | 55.6% → 0.0% | 6.58 GiB → 0 B | 3,404 → 0 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000e00118d400`  |
| removed |  -5.779 GiB | 48.9% → 0.0% | 5.78 GiB → 0 B | 3,134 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000e001118000`  |
| removed |  -5.538 GiB | 46.8% → 0.0% | 5.54 GiB → 0 B | 2,836 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000e0010bc800` |
| removed |  -5.524 GiB | 46.7% → 0.0% | 5.52 GiB → 0 B | 2,907 → 0 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000e00118d000`  |
| removed |  -5.176 GiB | 43.8% → 0.0% | 5.18 GiB → 0 B | 2,709 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000e0010bd400` |
| removed |  -5.029 GiB | 42.5% → 0.0% | 5.03 GiB → 0 B | 2,613 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e001142000`  |
| removed |  -4.979 GiB | 42.1% → 0.0% | 4.98 GiB → 0 B | 2,577 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000e00136cc00` |
| removed |  -4.878 GiB | 41.3% → 0.0% | 4.88 GiB → 0 B | 2,543 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e00113fc00`  |
| removed |  -4.564 GiB | 38.6% → 0.0% | 4.56 GiB → 0 B | 2,399 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e0012ac800`  |
| removed |   -4.48 GiB | 37.9% → 0.0% | 4.48 GiB → 0 B | 2,355 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e00136d800`  |
| removed |  -3.656 GiB | 30.9% → 0.0% | 3.66 GiB → 0 B | 1,911 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e0013bb000`  |
| removed |   -3.47 GiB | 29.4% → 0.0% | 3.47 GiB → 0 B | 1,795 → 0 | `invokeSpecial(Object, Object, Object, Object, Object)`                                     | `java.lang.invoke.LambdaForm$DMH.0x000000e00118e800` |
| removed |  -3.351 GiB | 28.3% → 0.0% | 3.35 GiB → 0 B | 1,765 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e0013b2400`  |
| removed |   -3.28 GiB | 27.7% → 0.0% | 3.28 GiB → 0 B | 1,788 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e001119400`  |
| removed |  -3.245 GiB | 27.5% → 0.0% | 3.25 GiB → 0 B | 1,656 → 0 | `invokeExact_MT(Object, Object, Object, Object, Object, Object)`                            | `java.lang.invoke.LambdaForm$MH.0x000000e001004000`  |

# Retained heap profile diff

Retained 333 KiB → 18.3 KiB (-314.89 KiB, -94.5%) over 147 objects → 133 objects (2.27 KiB → 141 B per object).

| Category         | Change |       Delta |      % |               Size |   Objects |
| ---------------- | -----: | ----------: | -----: | -----------------: | --------: |
| Standard library | -94.5% | -314.89 KiB | 100.0% | 333 KiB → 18.3 KiB | 147 → 133 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |      Delta |            % |           Size | Objects | Function                                                                                                    | Location                                                |
| ------: | ---------: | -----------: | -------------: | ------: | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|     new | +4.156 KiB | 0.0% → 22.7% | 0 B → 4.16 KiB |   0 → 2 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`                             | `java.lang.ClassLoader`                                 |
|     new |     +896 B |  0.0% → 4.8% |    0 B → 896 B |   0 → 3 | `copyOf(Object[], int)`                                                                                     | `java.util.Arrays`                                      |
|  +71.4% |     +280 B |  0.1% → 3.6% |  392 B → 672 B |  7 → 12 | `getOrPutMethods(String, MetaMethodIndex$Header)`                                                           | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |
|  +32.5% |     +200 B |  0.2% → 4.4% |  616 B → 816 B |   8 → 7 | `copyOfRangeByte(byte[], int, int)`                                                                         | `java.util.Arrays`                                      |
|  +25.0% |     +152 B |  0.2% → 4.1% |  608 B → 760 B |   4 → 5 | `getPlainNodeReference(boolean)`                                                                            | `org.codehaus.groovy.ast.ClassNode`                     |
|     new |     +152 B |  0.0% → 0.8% |    0 B → 152 B |   0 → 1 | `makeCached(Class)`                                                                                         | `org.codehaus.groovy.ast.ClassHelper`                   |
|     new |     +144 B |  0.0% → 0.8% |    0 B → 144 B |   0 → 2 | `make(MethodType, LambdaForm, Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.BoundMethodHandle$Species_LLLLILLLLL` |
|     new |      +96 B |  0.0% → 0.5% |     0 B → 96 B |   0 → 2 | `getTable()`                                                                                                | `java.beans.FeatureDescriptor`                          |
|  +38.5% |      +80 B |  0.1% → 1.5% |  208 B → 288 B |   1 → 2 | `getTargetMethodInfo()`                                                                                     | `java.beans.Introspector`                               |
|     new |      +72 B |  0.0% → 0.4% |     0 B → 72 B |   0 → 1 | `visitIdentifierPrmrAlt(GroovyParser$IdentifierPrmrAltContext)`                                             | `org.apache.groovy.parser.antlr4.AstBuilder`            |
|     new |      +72 B |  0.0% → 0.4% |     0 B → 72 B |   0 → 3 | `createTerminalNode(ParserRuleContext, Token)`                                                              | `groovyjarjarantlr4.v4.runtime.Parser`                  |
| +200.0% |      +64 B | <0.1% → 0.5% |    32 B → 96 B |   1 → 3 | `putVal(Object, Object, boolean)`                                                                           | `java.util.concurrent.ConcurrentHashMap`                |
|     new |      +64 B |  0.0% → 0.3% |     0 B → 64 B |   0 → 1 | `parseAnnotations2(byte[], ConstantPool, Class, Class[])`                                                   | `sun.reflect.annotation.AnnotationParser`               |
|     new |      +64 B |  0.0% → 0.3% |     0 B → 64 B |   0 → 2 | `getWeakReference(Object)`                                                                                  | `java.beans.FeatureDescriptor`                          |
|     new |      +64 B |  0.0% → 0.3% |     0 B → 64 B |   0 → 1 | `lambda$initValue$2(Method)`                                                                                | `org.codehaus.groovy.reflection.CachedClass$3`          |
|     new |      +64 B |  0.0% → 0.3% |     0 B → 64 B |   0 → 1 | `<init>(Void, String, ClassLoader)`                                                                         | `java.lang.ClassLoader`                                 |
|     new |      +56 B |  0.0% → 0.3% |     0 B → 56 B |   0 → 1 | `computeParameterTypes()`                                                                                   | `sun.reflect.generics.repository.ConstructorRepository` |
|     new |      +56 B |  0.0% → 0.3% |     0 B → 56 B |   0 → 1 | `configureClassNode(CompileUnit, ClassNode)`                                                                | `org.codehaus.groovy.vmplugin.v8.Java8`                 |
| +200.0% |      +48 B | <0.1% → 0.4% |    24 B → 72 B |       1 | `getDeclaredConstructors0(boolean)`                                                                         | `java.lang.Class`                                       |
| +100.0% |      +48 B | <0.1% → 0.5% |    48 B → 96 B |   2 → 4 | `toString()`                                                                                                | `java.lang.StringBuilder`                               |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |        Delta |            % |                Size | Objects | Function                                                                                             | Location                                                |
| ------: | -----------: | -----------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| removed | -256.015 KiB | 76.8% → 0.0% |       256 KiB → 0 B |   1 → 0 | `initTable()`                                                                                        | `java.util.concurrent.ConcurrentHashMap`                |
| removed |  -52.046 KiB | 15.6% → 0.0% |        52 KiB → 0 B |   3 → 0 | `<init>(int, int, MemorySegment)`                                                                    | `java.nio.HeapByteBuffer`                               |
| removed |   -7.773 KiB |  2.3% → 0.0% |      7.77 KiB → 0 B |   1 → 0 | `copyOfRange(byte[], int, int)`                                                                      | `java.util.Arrays`                                      |
|  -49.4% |   -1.984 KiB | 1.2% → 11.1% | 4.02 KiB → 2.03 KiB |   1 → 2 | `resize(int)`                                                                                        | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |
|  -20.2% |   -1.015 KiB | 1.5% → 21.9% | 5.03 KiB → 4.02 KiB |   2 → 1 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])`                                       | `java.util.concurrent.ConcurrentHashMap`                |
| removed |       -376 B |  0.1% → 0.0% |         376 B → 0 B |   1 → 0 | `toArray()`                                                                                          | `java.lang.PublicMethods`                               |
|  -66.7% |       -240 B |  0.1% → 0.6% |       360 B → 120 B |   3 → 1 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | `java.lang.ClassLoader`                                 |
|  -50.0% |       -176 B |  0.1% → 0.9% |       352 B → 176 B |   4 → 2 | `copy()`                                                                                             | `java.lang.reflect.Method`                              |
|  -36.4% |       -160 B |  0.1% → 1.5% |       440 B → 280 B |  11 → 7 | `newNode(int, Object, Object, HashMap$Node)`                                                         | `java.util.LinkedHashMap`                               |
| removed |       -160 B | <0.1% → 0.0% |         160 B → 0 B |   2 → 0 | `decompress(ByteBuffer, int)`                                                                        | `jdk.internal.jimage.ImageLocation`                     |
|  -67.9% |       -152 B |  0.1% → 0.4% |        224 B → 72 B |   3 → 1 | `compress(char[], int, int)`                                                                         | `java.lang.StringUTF16`                                 |
| removed |       -144 B | <0.1% → 0.0% |         144 B → 0 B |   2 → 0 | `copy()`                                                                                             | `java.lang.reflect.Field`                               |
| removed |       -144 B | <0.1% → 0.0% |         144 B → 0 B |   1 → 0 | `sizeCache(int)`                                                                                     | `java.lang.ClassValue$ClassValueMap`                    |
| removed |       -144 B | <0.1% → 0.0% |         144 B → 0 B |   3 → 0 | `makeBlockInliningWrapper(MethodHandle)`                                                             | `java.lang.invoke.MethodHandleImpl`                     |
| removed |       -128 B | <0.1% → 0.0% |         128 B → 0 B |   2 → 0 | `<init>(int, float)`                                                                                 | `java.util.Hashtable`                                   |
|  -28.6% |       -112 B |  0.1% → 1.5% |       392 B → 280 B |   7 → 5 | `grow(int)`                                                                                          | `java.util.ArrayList`                                   |
| removed |        -96 B | <0.1% → 0.0% |          96 B → 0 B |   3 → 0 | `putNodeMetaData(Object, Object)`                                                                    | `org.codehaus.groovy.ast.NodeMetaDataHandler`           |
|  -10.4% |        -80 B |  0.2% → 3.7% |       768 B → 688 B |   4 → 3 | `resize()`                                                                                           | `java.util.HashMap`                                     |
|  -50.0% |        -72 B | <0.1% → 0.4% |        144 B → 72 B |   4 → 2 | `set(Method)`                                                                                        | `java.beans.MethodRef`                                  |
| removed |        -72 B | <0.1% → 0.0% |          72 B → 0 B |   1 → 0 | `getDeclaredFields0(boolean)`                                                                        | `java.lang.Class`                                       |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

##### Standard library

|    Change |      Delta |             % |             Size | Objects | Function                                                                                    | Location                                                       |
| --------: | ---------: | ------------: | ---------------: | ------: | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
|       new | +8.257 KiB |  0.0% → 45.1% |   0 B → 8.26 KiB | 0 → 107 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`           |
|       new |  +7.64 KiB |  0.0% → 41.7% |   0 B → 7.64 KiB |  0 → 98 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e801117800`            |
|       new | +7.539 KiB |  0.0% → 41.2% |   0 B → 7.54 KiB |  0 → 96 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000e801118400`            |
|       new | +7.148 KiB |  0.0% → 39.1% |   0 B → 7.15 KiB |  0 → 92 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e801115400`            |
|  +2050.0% | +4.804 KiB |  0.1% → 27.5% | 240 B → 5.04 KiB |  6 → 10 | `getDefaultMetaClass()`                                                                     | `groovy.lang.GroovyObjectSupport`                              |
|  +2050.0% | +4.804 KiB |  0.1% → 27.5% | 240 B → 5.04 KiB |  6 → 10 | `<init>()`                                                                                  | `groovy.lang.GroovyObjectSupport`                              |
|       new | +4.718 KiB |  0.0% → 25.8% |   0 B → 4.72 KiB |  0 → 73 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000e801118000`            |
|  +2392.0% | +4.671 KiB |  0.1% → 26.6% | 200 B → 4.87 KiB |   5 → 9 | `<init>(Object, Object)`                                                                    | `groovy.lang.Closure`                                          |
|       new | +4.664 KiB |  0.0% → 25.5% |   0 B → 4.66 KiB |  0 → 57 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e801141000`            |
|  +2364.0% | +4.617 KiB |  0.1% → 26.3% | 200 B → 4.81 KiB |   5 → 7 | `<init>(int, boolean)`                                                                      | `org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl`  |
|  +2364.0% | +4.617 KiB |  0.1% → 26.3% | 200 B → 4.81 KiB |   5 → 7 | `<init>()`                                                                                  | `org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl`  |
|  +2364.0% | +4.617 KiB |  0.1% → 26.3% | 200 B → 4.81 KiB |   5 → 7 | `<clinit>()`                                                                                | `groovy.lang.GroovySystem`                                     |
|  +2364.0% | +4.617 KiB |  0.1% → 26.3% | 200 B → 4.81 KiB |   5 → 7 | `<clinit>()`                                                                                | `org.codehaus.groovy.runtime.InvokerHelper`                    |
|  +2364.0% | +4.617 KiB |  0.1% → 26.3% | 200 B → 4.81 KiB |   5 → 7 | `<init>(Object)`                                                                            | `groovy.lang.Closure`                                          |
|  +2364.0% | +4.617 KiB |  0.1% → 26.3% | 200 B → 4.81 KiB |   5 → 7 | `<init>(Object)`                                                                            | `groovy.lang.Closure$1`                                        |
| +14700.0% | +4.593 KiB | <0.1% → 25.3% |  32 B → 4.63 KiB |   1 → 4 | `forEachRemaining(Consumer)`                                                                | `java.util.Spliterators$ArraySpliterator`                      |
| +14650.0% | +4.578 KiB | <0.1% → 25.2% |  32 B → 4.61 KiB |   1 → 4 | `<init>(Class, ClassInfo)`                                                                  | `org.codehaus.groovy.reflection.stdclasses.CachedClosureClass` |
|  +5850.0% |  +4.57 KiB | <0.1% → 25.4% |  80 B → 4.65 KiB |   2 → 5 | `accept(Object)`                                                                            | `java.util.stream.ReferencePipeline$2$1`                       |
|  +8357.1% |  +4.57 KiB | <0.1% → 25.3% |  56 B → 4.63 KiB |   2 → 4 | `evaluate(Spliterator, boolean, IntFunction)`                                               | `java.util.stream.AbstractPipeline`                            |
|  +8357.1% |  +4.57 KiB | <0.1% → 25.3% |  56 B → 4.63 KiB |   2 → 4 | `evaluateToArrayNode(IntFunction)`                                                          | `java.util.stream.AbstractPipeline`                            |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

##### Standard library

|  Change |        Delta |             % |                Size |   Objects | Function                                                                                      | Location                                             |
| ------: | -----------: | ------------: | ------------------: | --------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|  -98.4% | -256.968 KiB | 78.4% → 22.4% |  261 KiB → 4.11 KiB |         4 | `putVal(Object, Object, boolean)`                                                             | `java.util.concurrent.ConcurrentHashMap`             |
|  -98.5% | -256.046 KiB | 78.1% → 21.9% |  260 KiB → 4.02 KiB |     3 → 1 | `put(Object, Object)`                                                                         | `java.util.concurrent.ConcurrentHashMap`             |
| removed | -256.015 KiB |  76.8% → 0.0% |       256 KiB → 0 B |     1 → 0 | `initTable()`                                                                                 | `java.util.concurrent.ConcurrentHashMap`             |
| removed | -256.015 KiB |  76.8% → 0.0% |       256 KiB → 0 B |     1 → 0 | `storeString(String)`                                                                         | `jdk.jfr.internal.StringPool`                        |
| removed | -256.015 KiB |  76.8% → 0.0% |       256 KiB → 0 B |     1 → 0 | `addString(String)`                                                                           | `jdk.jfr.internal.StringPool`                        |
| removed | -256.015 KiB |  76.8% → 0.0% |       256 KiB → 0 B |     1 → 0 | `putString(String)`                                                                           | `jdk.jfr.internal.event.EventWriter`                 |
| removed | -256.015 KiB |  76.8% → 0.0% |       256 KiB → 0 B |     1 → 0 | `commit(long, long, long, String, String, boolean, long, long, long, long, long)`             | `jdk.jfr.events.ActiveRecordingEvent`                |
| removed | -256.015 KiB |  76.8% → 0.0% |       256 KiB → 0 B |     1 → 0 | `writeMetaEvents()`                                                                           | `jdk.jfr.internal.PlatformRecorder`                  |
| removed | -256.015 KiB |  76.8% → 0.0% |       256 KiB → 0 B |     1 → 0 | `start(PlatformRecording)`                                                                    | `jdk.jfr.internal.PlatformRecorder`                  |
| removed | -256.015 KiB |  76.8% → 0.0% |       256 KiB → 0 B |     1 → 0 | `start()`                                                                                     | `jdk.jfr.internal.PlatformRecording`                 |
| removed | -256.015 KiB |  76.8% → 0.0% |       256 KiB → 0 B |     1 → 0 | `start()`                                                                                     | `jdk.jfr.Recording`                                  |
| removed | -256.015 KiB |  76.8% → 0.0% |       256 KiB → 0 B |     1 → 0 | `execute(ArgumentParser)`                                                                     | `jdk.jfr.internal.dcmd.DCmdStart`                    |
| removed | -256.015 KiB |  76.8% → 0.0% |       256 KiB → 0 B |     1 → 0 | `execute(String, String, char)`                                                               | `jdk.jfr.internal.dcmd.AbstractDCmd`                 |
| removed |   -75.71 KiB |  22.7% → 0.0% |      75.7 KiB → 0 B |   121 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x000000e0010b2800` |
| removed |  -75.492 KiB |  22.7% → 0.0% |      75.5 KiB → 0 B |   117 → 0 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x000000e001117800`  |
| removed |   -75.25 KiB |  22.6% → 0.0% |      75.3 KiB → 0 B |   114 → 0 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x000000e001118400`  |
| removed |  -73.281 KiB |  22.0% → 0.0% |      73.3 KiB → 0 B |    84 → 0 | `reinvoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e001118000`  |
|  -89.2% |  -67.593 KiB | 22.7% → 44.5% | 75.7 KiB → 8.15 KiB | 121 → 105 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
|  -89.0% |  -67.406 KiB | 22.7% → 45.4% |  75.7 KiB → 8.3 KiB | 121 → 108 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| removed |  -67.367 KiB |  20.2% → 0.0% |      67.4 KiB → 0 B |   110 → 0 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000e001115400`  |
