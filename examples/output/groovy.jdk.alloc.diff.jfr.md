# Sampling profile diff

Collected 313 samples → 291 samples (-22 samples, -7.0%).

| Category         |  Change | Delta |             % |   Samples |
| ---------------- | ------: | ----: | ------------: | --------: |
| Standard library |   -9.0% |   -28 | 99.0% → 96.9% | 310 → 282 |
| Ours             | +200.0% |    +6 |   1.0% → 3.1% |     3 → 9 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                     | Location                                                                   |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| +350.0% |    +7 | 0.6% → 3.1% |   2 → 9 | `getReachableConfigSet(CharStream, ATNConfigSet, ATNConfigSet, int)`                         | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`                      |
|     new |    +4 | 0.0% → 1.4% |   0 → 4 | `internalMemberName(Object)`                                                                 | `java.lang.invoke.DirectMethodHandle`                                      |
| +300.0% |    +3 | 0.3% → 1.4% |   1 → 4 | `matches(Method, String, Class[])`                                                           | `java.lang.PublicMethods$Key`                                              |
|     new |    +3 | 0.0% → 1.0% |   0 → 3 | `getMethods(Class, String)`                                                                  | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`                    |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `invokeVirtual(Object, Object, Object, Object)`                                              | `java.lang.invoke.LambdaForm$DMH.0x000000b8010bc800`                       |
|  +40.0% |    +2 | 1.6% → 2.4% |   5 → 7 | `putVal(int, Object, Object, boolean, boolean)`                                              | `java.util.HashMap`                                                        |
| +200.0% |    +2 | 0.3% → 1.0% |   1 → 3 | `provide(Object)`                                                                            | `org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x000000b8010b6d70` |
| +200.0% |    +2 | 0.3% → 1.0% |   1 → 3 | `getEpsilonTarget(ATNConfig, Transition, boolean, boolean, PredictionContextCache, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`                     |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `equals(Object)`                                                                             | `groovyjarjarantlr4.v4.runtime.atn.SingletonPredictionContext`             |
| +200.0% |    +2 | 0.3% → 1.0% |   1 → 3 | `addFirst(Object)`                                                                           | `java.util.ArrayDeque`                                                     |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `equals(Object[], Object[])`                                                                 | `java.util.Arrays`                                                         |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `put(Object, Object)`                                                                        | `groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap`                       |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `transform(ATNState, PredictionContext, boolean)`                                            | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`                              |
|     new |    +2 | 0.0% → 0.7% |   0 → 2 | `execute(Lexer, CharStream, int)`                                                            | `groovyjarjarantlr4.v4.runtime.atn.LexerActionExecutor`                    |
|     new |    +1 | 0.0% → 0.3% |   0 → 1 | `copyInto(Sink, Spliterator)`                                                                | `java.util.stream.AbstractPipeline`                                        |
|     new |    +1 | 0.0% → 0.3% |   0 → 1 | `invoke(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000b801119400`                        |
| +100.0% |    +1 | 0.3% → 0.7% |   1 → 2 | `invokeSpecial(Object, Object, Object)`                                                      | `java.lang.invoke.DirectMethodHandle$Holder`                               |
|     new |    +1 | 0.0% → 0.3% |   0 → 1 | `invokeExact_MT(Object, Object, Object, Object)`                                             | `java.lang.invoke.Invokers$Holder`                                         |
| +100.0% |    +1 | 0.3% → 0.7% |   1 → 2 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                                | `java.util.zip.Inflater`                                                   |
| +100.0% |    +1 | 0.3% → 0.7% |   1 → 2 | `closure(ATNConfigSet, ATNConfigSet, boolean, boolean, PredictionContextCache, boolean)`     | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`                     |

##### Ours

| Change | Delta |           % | Samples | Function                                                         | Location                                                                          |
| -----: | ----: | ----------: | ------: | ---------------------------------------------------------------- | --------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `<init>(Object, Object, Reference)`                              | `org.codenarc.rule.design.CloneableWithoutCloneAstVisitor$_visitClassEx_closure1` |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `visitField(FieldNode)`                                          | `org.codenarc.rule.naming.FieldNameAstVisitor`                                    |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `$getCallSiteArray()`                                            | `org.gmetrics.util.Calculator`                                                    |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `visitField(FieldNode)`                                          | `org.codenarc.rule.unnecessary.UnnecessaryDefInFieldDeclarationAstVisitor`        |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `call(Object, Object, Object)`                                   | `org.gmetrics.util.AstUtil$isFinalVariable$1`                                     |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `<init>(String, List, SourceCode)`                               | `org.codenarc.results.FileResults`                                                |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `flexibleCheckForCorrectColumn(ASTNode, String, BlockStatement)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                              |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `super$3$shouldApplyThisRuleTo(ClassNode)`                       | `org.codenarc.rule.unused.UnusedPrivateFieldRule`                                 |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `violationMessage(String, String, String)`                       | `org.codenarc.rule.formatting.SpaceAroundMapEntryColonAstVisitor`                 |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                    | Location                                                   |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  -50.0% |    -5 | 3.2% → 1.7% |  10 → 5 | `getNode(Object)`                                                                           | `java.util.HashMap`                                        |
|  -50.0% |    -5 | 3.2% → 1.7% |  10 → 5 | `getReachableTarget(Transition, int)`                                                       | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`      |
|  -66.7% |    -4 | 1.9% → 0.7% |   6 → 2 | `invokeVirtual(Object, Object, Object)`                                                     | `java.lang.invoke.DirectMethodHandle$Holder`               |
|  -80.0% |    -4 | 1.6% → 0.3% |   5 → 1 | `hashCodeRange(int, int)`                                                                   | `java.util.ArrayList`                                      |
|  -75.0% |    -3 | 1.3% → 0.3% |   4 → 1 | `toArray(IntFunction)`                                                                      | `java.util.stream.ReferencePipeline`                       |
|  -75.0% |    -3 | 1.3% → 0.3% |   4 → 1 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b8010b2800`       |
|  -37.5% |    -3 | 2.6% → 1.7% |   8 → 5 | `get(Object)`                                                                               | `java.util.concurrent.ConcurrentHashMap`                   |
|  -60.0% |    -3 | 1.6% → 0.7% |   5 → 2 | `getReturnState(int)`                                                                       | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext` |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `invokeStatic(Object, Object, Object)`                                                      | `java.lang.invoke.DirectMethodHandle$Holder`               |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `isAssignableFrom(Class)`                                                                   | `java.lang.Class`                                          |
|  -33.3% |    -2 | 1.9% → 1.4% |   6 → 4 | `resize()`                                                                                  | `java.util.HashMap`                                        |
|   -7.1% |    -2 |        8.9% | 28 → 26 | `newArray(Class, int)`                                                                      | `java.lang.reflect.Array`                                  |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)`                   | `java.lang.invoke.MethodHandleImpl`                        |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `hashCode()`                                                                                | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`              |
|  -66.7% |    -2 | 1.0% → 0.3% |   3 → 1 | `checkCustomized(MethodHandle)`                                                             | `java.lang.invoke.Invokers`                                |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `sync(int)`                                                                                 | `groovyjarjarantlr4.v4.runtime.BufferedTokenStream`        |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `wrapSink(Sink)`                                                                            | `java.util.stream.AbstractPipeline`                        |
|  -50.0% |    -2 | 1.3% → 0.7% |   4 → 2 | `<init>(Method, boolean)`                                                                   | `java.lang.invoke.MemberName`                              |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `gallopRight(Object, Object[], int, int, int, Comparator)`                                  | `java.util.TimSort`                                        |
|  -66.7% |    -2 | 1.0% → 0.3% |   3 → 1 | `getCachedContext(PredictionContext, ConcurrentMap, PredictionContext$IdentityHashMap)`     | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`      |

##### Ours

|  Change | Delta |           % | Samples | Function                                 | Location                                                            |
| ------: | ----: | ----------: | ------: | ---------------------------------------- | ------------------------------------------------------------------- |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `collectViolations(SourceCode, RuleSet)` | `org.codenarc.analyzer.AbstractSourceAnalyzer`                      |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `visitClass(ClassNode)`                  | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`             |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `doCall(ClassNode)`                      | `org.codenarc.rule.formatting.BracesForClassRule$_applyTo_closure1` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|   Change | Delta |             % |   Samples | Function                                                                                         | Location                                             |
| -------: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| +3300.0% |   +66 |  0.6% → 23.4% |    2 → 68 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000b80138dc00`  |
| +5800.0% |   +58 |  0.3% → 20.3% |    1 → 59 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000b80182e800`  |
| +5600.0% |   +56 |  0.3% → 19.6% |    1 → 57 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000b8013dc000`  |
| +4000.0% |   +40 |  0.3% → 14.1% |    1 → 41 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000b801829400`  |
| +4000.0% |   +40 |  0.3% → 14.1% |    1 → 41 | `invoke(Object, Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x000000b80160c800`  |
|   +42.6% |   +26 | 19.5% → 29.9% |   61 → 87 | `reinvoke(Object, Object, Object, Object)`                                                       | `java.lang.invoke.LambdaForm$MH.0x000000b80118d000`  |
|   +62.5% |   +20 | 10.2% → 17.9% |   32 → 52 | `invoke(Object, Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000b8013dbc00`  |
|   +52.8% |   +19 | 11.5% → 18.9% |   36 → 55 | `invokeSpecial(Object, Object, Object, Object, Object)`                                          | `java.lang.invoke.LambdaForm$DMH.0x000000b80118e800` |
|   +26.7% |   +16 | 19.2% → 26.1% |   60 → 76 | `invoke(Object, Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000b801142000`  |
|   +25.8% |   +16 | 19.8% → 26.8% |   62 → 78 | `linkToCallSite(Object, Object, Object, Object)`                                                 | `java.lang.invoke.Invokers$Holder`                   |
|   +24.6% |   +15 | 19.5% → 26.1% |   61 → 76 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000b8012d8000`  |
|   +35.9% |   +14 | 12.5% → 18.2% |   39 → 53 | `collectViolations(SourceCode, RuleSet)`                                                         | `org.codenarc.analyzer.AbstractSourceAnalyzer`       |
|   +37.1% |   +13 | 11.2% → 16.5% |   35 → 48 | `processFile(String, DirectoryResults, RuleSet)`                                                 | `org.codenarc.analyzer.FilesystemSourceAnalyzer`     |
|   +33.3% |   +13 | 12.5% → 17.9% |   39 → 52 | `invokeExact_MT(Object, Object, Object, Object, Object, Object)`                                 | `java.lang.invoke.LambdaForm$MH.0x000000b801004000`  |
|  +433.3% |   +13 |   1.0% → 5.5% |    3 → 16 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000b8012c6400`  |
| +1200.0% |   +12 |   0.3% → 4.5% |    1 → 13 | `invoke(Object, Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000b8013dc800`  |
|   +58.8% |   +10 |   5.4% → 9.3% |   17 → 27 | `guard(Object, Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000b8012b9c00`  |
|   +42.9% |    +9 |  6.7% → 10.3% |   21 → 30 | `guardWithCatch(Object, Object, Object, Object, Object)`                                         | `java.lang.invoke.LambdaForm$MH.0x000000b8012b8c00`  |
|    +7.0% |    +8 | 36.7% → 42.3% | 115 → 123 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
|   +18.2% |    +8 | 14.1% → 17.9% |   44 → 52 | `expression(int)`                                                                                | `org.apache.groovy.parser.antlr4.GroovyParser`       |

##### Standard library

|   Change | Delta |             % |   Samples | Function                                                                                         | Location                                             |
| -------: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| +3300.0% |   +66 |  0.6% → 23.4% |    2 → 68 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000b80138dc00`  |
| +5800.0% |   +58 |  0.3% → 20.3% |    1 → 59 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000b80182e800`  |
| +5600.0% |   +56 |  0.3% → 19.6% |    1 → 57 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000b8013dc000`  |
| +4000.0% |   +40 |  0.3% → 14.1% |    1 → 41 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000b801829400`  |
| +4000.0% |   +40 |  0.3% → 14.1% |    1 → 41 | `invoke(Object, Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x000000b80160c800`  |
|   +42.6% |   +26 | 19.5% → 29.9% |   61 → 87 | `reinvoke(Object, Object, Object, Object)`                                                       | `java.lang.invoke.LambdaForm$MH.0x000000b80118d000`  |
|   +62.5% |   +20 | 10.2% → 17.9% |   32 → 52 | `invoke(Object, Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000b8013dbc00`  |
|   +52.8% |   +19 | 11.5% → 18.9% |   36 → 55 | `invokeSpecial(Object, Object, Object, Object, Object)`                                          | `java.lang.invoke.LambdaForm$DMH.0x000000b80118e800` |
|   +26.7% |   +16 | 19.2% → 26.1% |   60 → 76 | `invoke(Object, Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000b801142000`  |
|   +25.8% |   +16 | 19.8% → 26.8% |   62 → 78 | `linkToCallSite(Object, Object, Object, Object)`                                                 | `java.lang.invoke.Invokers$Holder`                   |
|   +24.6% |   +15 | 19.5% → 26.1% |   61 → 76 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000b8012d8000`  |
|   +33.3% |   +13 | 12.5% → 17.9% |   39 → 52 | `invokeExact_MT(Object, Object, Object, Object, Object, Object)`                                 | `java.lang.invoke.LambdaForm$MH.0x000000b801004000`  |
|  +433.3% |   +13 |   1.0% → 5.5% |    3 → 16 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000b8012c6400`  |
| +1200.0% |   +12 |   0.3% → 4.5% |    1 → 13 | `invoke(Object, Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000b8013dc800`  |
|   +58.8% |   +10 |   5.4% → 9.3% |   17 → 27 | `guard(Object, Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000b8012b9c00`  |
|   +42.9% |    +9 |  6.7% → 10.3% |   21 → 30 | `guardWithCatch(Object, Object, Object, Object, Object)`                                         | `java.lang.invoke.LambdaForm$MH.0x000000b8012b8c00`  |
|    +7.0% |    +8 | 36.7% → 42.3% | 115 → 123 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
|   +18.2% |    +8 | 14.1% → 17.9% |   44 → 52 | `expression(int)`                                                                                | `org.apache.groovy.parser.antlr4.GroovyParser`       |
|  +800.0% |    +8 |   0.3% → 3.1% |     1 → 9 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000b80160c400`  |
|    +8.1% |    +7 | 27.5% → 32.0% |   86 → 93 | `invokeVirtual(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$DMH.0x000000b8010bc800` |

##### Ours

|  Change | Delta |             % | Samples | Function                                                         | Location                                                                           |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
|  +35.9% |   +14 | 12.5% → 18.2% | 39 → 53 | `collectViolations(SourceCode, RuleSet)`                         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                     |
|  +37.1% |   +13 | 11.2% → 16.5% | 35 → 48 | `processFile(String, DirectoryResults, RuleSet)`                 | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                                   |
|   +7.7% |    +5 | 20.8% → 24.1% | 65 → 70 | `measureRuleProcessingTime(Rule, Closure)`                       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                     |
|     new |    +5 |   0.0% → 1.7% |   0 → 5 | `doCall(Object)`                                                 | `org.codenarc.rule.formatting.IndentationAstVisitor$_visitBlockStatement_closure7` |
|     new |    +4 |   0.0% → 1.4% |   0 → 4 | `checkDeclaration(ASTNode, String, String)`                      | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`                |
|     new |    +4 |   0.0% → 1.4% |   0 → 4 | `checkStatementIndent(Statement, BlockStatement)`                | `org.codenarc.rule.formatting.IndentationAstVisitor`                               |
|     new |    +3 |   0.0% → 1.0% |   0 → 3 | `findLineWithDeclaration(ASTNode, String)`                       | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`                |
|     new |    +3 |   0.0% → 1.0% |   0 → 3 | `doCall(Object)`                                                 | `org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`     |
| +200.0% |    +2 |   0.3% → 1.0% |   1 → 3 | `visitClassEx(ClassNode)`                                        | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`                |
| +200.0% |    +2 |   0.3% → 1.0% |   1 → 3 | `visitClass(ClassNode)`                                          | `org.codenarc.rule.AbstractMethodVisitor`                                          |
|     new |    +2 |   0.0% → 0.7% |   0 → 2 | `line(int)`                                                      | `org.codenarc.source.AbstractSourceCode`                                           |
|     new |    +2 |   0.0% → 0.7% |   0 → 2 | `sourceLineTrimmed(ASTNode)`                                     | `org.codenarc.rule.AbstractAstVisitor`                                             |
|     new |    +2 |   0.0% → 0.7% |   0 → 2 | `addViolation(ASTNode, String)`                                  | `org.codenarc.rule.AbstractAstVisitor`                                             |
|     new |    +2 |   0.0% → 0.7% |   0 → 2 | `visitConstantExpression(ConstantExpression)`                    | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor`              |
|     new |    +2 |   0.0% → 0.7% |   0 → 2 | `visitMethod(MethodNode)`                                        | `org.codenarc.rule.unnecessary.UnnecessaryOverridingMethodAstVisitor`              |
|     new |    +2 |   0.0% → 0.7% |   0 → 2 | `super$2$visitMethodCallExpression(MethodCallExpression)`        | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                                |
|     new |    +2 |   0.0% → 0.7% |   0 → 2 | `flexibleCheckForCorrectColumn(ASTNode, String, BlockStatement)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                               |
|     new |    +2 |   0.0% → 0.7% |   0 → 2 | `visitBlockStatement(BlockStatement)`                            | `org.codenarc.rule.unnecessary.UnnecessaryIfStatementAstVisitor`                   |
|     new |    +2 |   0.0% → 0.7% |   0 → 2 | `super$3$visitBlockStatement(BlockStatement)`                    | `org.codenarc.rule.unnecessary.UnnecessaryIfStatementAstVisitor`                   |
|     new |    +2 |   0.0% → 0.7% |   0 → 2 | `doCall(Object, Object)`                                         | `org.codenarc.rule.formatting.TrailingWhitespaceRule$_applyTo_closure1`            |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |   Samples | Function                                                                                      | Location                                             |
| -----: | ----: | ------------: | --------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| -98.8% |   -81 |  26.2% → 0.3% |    82 → 1 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000b801184800`  |
| -98.2% |   -56 |  18.2% → 0.3% |    57 → 1 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000b8017c2000`  |
| -98.0% |   -50 |  16.3% → 0.3% |    51 → 1 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000b8012d0c00`  |
| -17.4% |   -42 | 77.0% → 68.4% | 241 → 199 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000b801115400`  |
| -17.5% |   -42 | 76.7% → 68.0% | 240 → 198 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| -16.1% |   -40 | 79.2% → 71.5% | 248 → 208 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x000000b801117800`  |
| -16.2% |   -40 | 78.9% → 71.1% | 247 → 207 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x000000b801118400`  |
| -19.5% |   -34 | 55.6% → 48.1% | 174 → 140 | `reinvoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000b801118000`  |
| -29.6% |   -34 | 36.7% → 27.8% |  115 → 81 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000b801141000`  |
| -29.0% |   -27 | 29.7% → 22.7% |   93 → 66 | `applyTo(SourceCode)`                                                                         | `org.codenarc.rule.AbstractRule`                     |
| -87.1% |   -27 |   9.9% → 1.4% |    31 → 4 | `invoke(Object, Object, Object, Object, Object)`                                              | `java.lang.invoke.LambdaForm$MH.0x000000b80144c000`  |
| -28.6% |   -26 | 29.1% → 22.3% |   91 → 65 | `invokeInterface(Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$DMH.0x000000b8010bd000` |
|  -9.1% |   -25 | 88.2% → 86.3% | 276 → 251 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x000000b8010b2800` |
| -96.2% |   -25 |   8.3% → 0.3% |    26 → 1 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000b801787c00`  |
| -17.9% |   -24 | 42.8% → 37.8% | 134 → 110 | `linkToCallSite(Object, Object)`                                                              | `java.lang.invoke.Invokers$Holder`                   |
|  -8.3% |   -23 | 88.5% → 87.3% | 277 → 254 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| -12.5% |   -23 | 58.8% → 55.3% | 184 → 161 | `invoke(Object, Object[])`                                                                    | `org.codehaus.groovy.reflection.CachedMethod`        |
| -12.2% |   -22 | 57.5% → 54.3% | 180 → 158 | `doMethodInvoke(Object, Object[])`                                                            | `groovy.lang.MetaMethod`                             |
| -14.1% |   -22 | 49.8% → 46.0% | 156 → 134 | `invokeMethod(Object, String, Object[])`                                                      | `groovy.lang.MetaClassImpl`                          |
| -13.2% |   -20 | 48.6% → 45.4% | 152 → 132 | `invokeExact_MT(Object, Object, Object, Object)`                                              | `java.lang.invoke.Invokers$Holder`                   |

##### Standard library

| Change | Delta |             % |   Samples | Function                                                                                      | Location                                             |
| -----: | ----: | ------------: | --------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| -98.8% |   -81 |  26.2% → 0.3% |    82 → 1 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000b801184800`  |
| -98.2% |   -56 |  18.2% → 0.3% |    57 → 1 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000b8017c2000`  |
| -98.0% |   -50 |  16.3% → 0.3% |    51 → 1 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000b8012d0c00`  |
| -17.4% |   -42 | 77.0% → 68.4% | 241 → 199 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000b801115400`  |
| -17.5% |   -42 | 76.7% → 68.0% | 240 → 198 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| -16.1% |   -40 | 79.2% → 71.5% | 248 → 208 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x000000b801117800`  |
| -16.2% |   -40 | 78.9% → 71.1% | 247 → 207 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x000000b801118400`  |
| -19.5% |   -34 | 55.6% → 48.1% | 174 → 140 | `reinvoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000b801118000`  |
| -29.6% |   -34 | 36.7% → 27.8% |  115 → 81 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000b801141000`  |
| -87.1% |   -27 |   9.9% → 1.4% |    31 → 4 | `invoke(Object, Object, Object, Object, Object)`                                              | `java.lang.invoke.LambdaForm$MH.0x000000b80144c000`  |
| -28.6% |   -26 | 29.1% → 22.3% |   91 → 65 | `invokeInterface(Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$DMH.0x000000b8010bd000` |
|  -9.1% |   -25 | 88.2% → 86.3% | 276 → 251 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x000000b8010b2800` |
| -96.2% |   -25 |   8.3% → 0.3% |    26 → 1 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000b801787c00`  |
| -17.9% |   -24 | 42.8% → 37.8% | 134 → 110 | `linkToCallSite(Object, Object)`                                                              | `java.lang.invoke.Invokers$Holder`                   |
|  -8.3% |   -23 | 88.5% → 87.3% | 277 → 254 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| -12.5% |   -23 | 58.8% → 55.3% | 184 → 161 | `invoke(Object, Object[])`                                                                    | `org.codehaus.groovy.reflection.CachedMethod`        |
| -12.2% |   -22 | 57.5% → 54.3% | 180 → 158 | `doMethodInvoke(Object, Object[])`                                                            | `groovy.lang.MetaMethod`                             |
| -14.1% |   -22 | 49.8% → 46.0% | 156 → 134 | `invokeMethod(Object, String, Object[])`                                                      | `groovy.lang.MetaClassImpl`                          |
| -13.2% |   -20 | 48.6% → 45.4% | 152 → 132 | `invokeExact_MT(Object, Object, Object, Object)`                                              | `java.lang.invoke.Invokers$Holder`                   |
| -35.7% |   -20 | 17.9% → 12.4% |   56 → 36 | `visitMethods(GroovyClassVisitor)`                                                            | `org.codehaus.groovy.ast.ClassNode`                  |

##### Ours

|  Change | Delta |             % | Samples | Function                                        | Location                                                                                           |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | -------------------------------------------------------------------------------------------------- |
|  -29.0% |   -27 | 29.7% → 22.7% | 93 → 66 | `applyTo(SourceCode)`                           | `org.codenarc.rule.AbstractRule`                                                                   |
|  -35.7% |   -20 | 17.9% → 12.4% | 56 → 36 | `visitMethod(MethodNode)`                       | `org.codenarc.rule.AbstractAstVisitor`                                                             |
|  -18.8% |   -18 | 30.7% → 26.8% | 96 → 78 | `doCall(Object)`                                | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`                         |
|  -22.7% |   -17 | 24.0% → 19.9% | 75 → 58 | `applyTo(SourceCode, List)`                     | `org.codenarc.rule.AbstractAstVisitorRule`                                                         |
|  -23.9% |   -17 | 22.7% → 18.6% | 71 → 54 | `visitClass(ClassNode)`                         | `org.codenarc.rule.AbstractAstVisitor`                                                             |
|  -19.3% |   -16 | 26.5% → 23.0% | 83 → 67 | `init()`                                        | `org.codenarc.source.AbstractSourceCode`                                                           |
|  -23.2% |   -13 | 17.9% → 14.8% | 56 → 43 | `getAst()`                                      | `org.codenarc.source.AbstractSourceCode`                                                           |
|  -24.1% |   -13 | 17.3% → 14.1% | 54 → 41 | `init()`                                        | `org.codenarc.analyzer.SuppressionAnalyzer`                                                        |
|  -23.5% |   -12 | 16.3% → 13.4% | 51 → 39 | `isRuleSuppressed(Rule)`                        | `org.codenarc.analyzer.SuppressionAnalyzer`                                                        |
|  -66.7% |    -4 |   1.9% → 0.7% |   6 → 2 | `getText()`                                     | `org.codenarc.source.SourceFile`                                                                   |
| removed |    -3 |   1.0% → 0.0% |   3 → 0 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.BracesForMethodAstVisitor`                                           |
| removed |    -3 |   1.0% → 0.0% |   3 → 0 | `visitMethodComplete(MethodNode)`               | `org.codenarc.rule.convention.NoFloatAstVisitor`                                                   |
| removed |    -3 |   1.0% → 0.0% |   3 → 0 | `eachImportLine(SourceCode, Closure)`           | `org.codenarc.rule.imports.AbstractImportRule`                                                     |
| removed |    -3 |   1.0% → 0.0% |   3 → 0 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.unnecessary.UnnecessaryDefInMethodDeclarationAstVisitor`                        |
|  -42.9% |    -3 |   2.2% → 1.4% |   7 → 4 | `applyTo(SourceCode, List)`                     | `org.codenarc.rule.AbstractSharedAstVisitorRule`                                                   |
| removed |    -3 |   1.0% → 0.0% |   3 → 0 | `doCall(Object)`                                | `org.codenarc.plugin.disablerules.DisableRulesInCommentsPlugin$_processViolationsForFile_closure1` |
|  -66.7% |    -2 |   1.0% → 0.3% |   3 → 1 | `matchesAndNotWithinString(String, String)`     | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`                                    |
| removed |    -2 |   0.6% → 0.0% |   2 → 0 | `hasSpaceAfterOpeningParenthesis(String)`       | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`                                    |
|  -40.0% |    -2 |   1.6% → 1.0% |   5 → 3 | `processSourceLine(String, int)`                | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`                                    |
|  -66.7% |    -2 |   1.0% → 0.3% |   3 → 1 | `visitClass(ClassNode)`                         | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`                                            |

# Allocated heap profile diff

Allocated 11.9 GiB (+62.511 MiB, +0.5%) over 6,332 samples → 6,322 samples (1.92 MiB → 1.93 MiB per sample).

| Category         | Change |       Delta |             % |                Size |       Samples |
| ---------------- | -----: | ----------: | ------------: | ------------------: | ------------: |
| Standard library |  +0.2% | +25.453 MiB | 99.1% → 98.8% |            11.8 GiB | 6,229 → 6,202 |
| Ours             | +35.0% | +37.059 MiB |   0.9% → 1.2% |   106 MiB → 143 MiB |       54 → 69 |
| Unknown          |  -3.6% |  -1.351 KiB |         <0.1% | 37.2 KiB → 35.8 KiB |       49 → 51 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |           % |                Size |   Samples | Function                                                                                      | Location                                            |
| ------: | -----------: | ----------: | ------------------: | --------: | --------------------------------------------------------------------------------------------- | --------------------------------------------------- |
|  +47.4% | +110.409 MiB | 1.9% → 2.8% |   233 MiB → 343 MiB | 120 → 124 | `make(MethodType, LambdaForm, Object, Object, Object, Object)`                                | `java.lang.invoke.BoundMethodHandle$Species_LLLL`   |
|  +41.6% |  +47.204 MiB | 0.9% → 1.3% |   114 MiB → 161 MiB |   58 → 80 | `getSelector(MutableCallSite, Class, String, int, boolean, boolean, boolean, Object[])`       | `org.codehaus.groovy.vmplugin.v8.Selector`          |
|  +31.7% |  +44.563 MiB | 1.2% → 1.5% |   141 MiB → 185 MiB |   70 → 92 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object)`                        | `java.lang.invoke.BoundMethodHandle$Species_LLLLL`  |
|  +37.7% |  +42.678 MiB | 0.9% → 1.3% |   113 MiB → 156 MiB |   57 → 77 | `make(MethodType, LambdaForm, Object, Object, Object)`                                        | `java.lang.invoke.BoundMethodHandle$Species_LLL`    |
|   +5.6% |  +33.259 MiB | 4.9% → 5.1% |   591 MiB → 624 MiB | 301 → 307 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`     |
|  +25.2% |  +32.479 MiB | 1.1% → 1.3% |   129 MiB → 161 MiB |   66 → 79 | `parameterArray()`                                                                            | `java.lang.invoke.MethodType`                       |
|  +14.6% |  +31.229 MiB | 1.8% → 2.0% |   213 MiB → 245 MiB | 107 → 118 | `optimize(Pattern$Node)`                                                                      | `java.util.regex.Pattern$BnM`                       |
|  +47.9% |   +28.32 MiB | 0.5% → 0.7% | 59.1 MiB → 87.4 MiB |   30 → 44 | `divideOneWord(int, MutableBigInteger)`                                                       | `java.math.MutableBigInteger`                       |
|  +62.4% |  +28.176 MiB | 0.4% → 0.6% | 45.1 MiB → 73.3 MiB |   23 → 31 | `matcher(CharSequence)`                                                                       | `java.util.regex.Pattern`                           |
|  +31.3% |  +25.742 MiB | 0.7% → 0.9% |  82.2 MiB → 108 MiB |   43 → 52 | `toBigInteger(int)`                                                                           | `java.math.MutableBigInteger`                       |
| +114.6% |  +25.274 MiB | 0.2% → 0.4% |   22 MiB → 47.3 MiB |   12 → 24 | `asSpreader(int, Class, int)`                                                                 | `java.lang.invoke.MethodHandle`                     |
|  +18.7% |  +21.255 MiB | 0.9% → 1.1% |   114 MiB → 135 MiB |   57 → 70 | `<init>()`                                                                                    | `java.math.MutableBigInteger`                       |
|   +7.9% |  +20.349 MiB | 2.1% → 2.3% |   257 MiB → 278 MiB | 128 → 143 | `transform(ATNState, PredictionContext, SemanticContext, boolean, LexerActionExecutor)`       | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`       |
|   +6.1% |   +17.78 MiB | 2.4% → 2.5% |   290 MiB → 308 MiB | 147 → 157 | `stream(Spliterator, boolean)`                                                                | `java.util.stream.StreamSupport`                    |
| +107.9% |  +17.257 MiB | 0.1% → 0.3% |   16 MiB → 33.3 MiB |    8 → 17 | `getInvocationType()`                                                                         | `java.lang.invoke.MemberName`                       |
|  +10.4% |  +17.143 MiB | 1.4% → 1.5% |   164 MiB → 182 MiB |   86 → 92 | `spliterator(Object[], int, int, int)`                                                        | `java.util.Spliterators`                            |
|  +31.3% |  +16.714 MiB | 0.4% → 0.6% | 53.4 MiB → 70.1 MiB |   27 → 37 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object, Object)`                | `java.lang.invoke.BoundMethodHandle$Species_LLLLLL` |
|  +74.1% |  +16.559 MiB | 0.2% → 0.3% | 22.3 MiB → 38.9 MiB |   11 → 20 | `<init>()`                                                                                    | `java.util.ArrayDeque`                              |
|  +32.0% |  +16.479 MiB | 0.4% → 0.6% |   51.5 MiB → 68 MiB |   27 → 33 | `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`  | `org.codehaus.groovy.vmplugin.v8.IndyInterface`     |
|     new |  +15.992 MiB | 0.0% → 0.1% |        0 B → 16 MiB |     0 → 8 | `<init>()`                                                                                    | `org.codenarc.rule.AbstractAstVisitor`              |

##### Standard library

|  Change |        Delta |           % |                Size |   Samples | Function                                                                                      | Location                                            |
| ------: | -----------: | ----------: | ------------------: | --------: | --------------------------------------------------------------------------------------------- | --------------------------------------------------- |
|  +47.4% | +110.409 MiB | 1.9% → 2.8% |   233 MiB → 343 MiB | 120 → 124 | `make(MethodType, LambdaForm, Object, Object, Object, Object)`                                | `java.lang.invoke.BoundMethodHandle$Species_LLLL`   |
|  +41.6% |  +47.204 MiB | 0.9% → 1.3% |   114 MiB → 161 MiB |   58 → 80 | `getSelector(MutableCallSite, Class, String, int, boolean, boolean, boolean, Object[])`       | `org.codehaus.groovy.vmplugin.v8.Selector`          |
|  +31.7% |  +44.563 MiB | 1.2% → 1.5% |   141 MiB → 185 MiB |   70 → 92 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object)`                        | `java.lang.invoke.BoundMethodHandle$Species_LLLLL`  |
|  +37.7% |  +42.678 MiB | 0.9% → 1.3% |   113 MiB → 156 MiB |   57 → 77 | `make(MethodType, LambdaForm, Object, Object, Object)`                                        | `java.lang.invoke.BoundMethodHandle$Species_LLL`    |
|   +5.6% |  +33.259 MiB | 4.9% → 5.1% |   591 MiB → 624 MiB | 301 → 307 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`     |
|  +25.2% |  +32.479 MiB | 1.1% → 1.3% |   129 MiB → 161 MiB |   66 → 79 | `parameterArray()`                                                                            | `java.lang.invoke.MethodType`                       |
|  +14.6% |  +31.229 MiB | 1.8% → 2.0% |   213 MiB → 245 MiB | 107 → 118 | `optimize(Pattern$Node)`                                                                      | `java.util.regex.Pattern$BnM`                       |
|  +47.9% |   +28.32 MiB | 0.5% → 0.7% | 59.1 MiB → 87.4 MiB |   30 → 44 | `divideOneWord(int, MutableBigInteger)`                                                       | `java.math.MutableBigInteger`                       |
|  +62.4% |  +28.176 MiB | 0.4% → 0.6% | 45.1 MiB → 73.3 MiB |   23 → 31 | `matcher(CharSequence)`                                                                       | `java.util.regex.Pattern`                           |
|  +31.3% |  +25.742 MiB | 0.7% → 0.9% |  82.2 MiB → 108 MiB |   43 → 52 | `toBigInteger(int)`                                                                           | `java.math.MutableBigInteger`                       |
| +114.6% |  +25.274 MiB | 0.2% → 0.4% |   22 MiB → 47.3 MiB |   12 → 24 | `asSpreader(int, Class, int)`                                                                 | `java.lang.invoke.MethodHandle`                     |
|  +18.7% |  +21.255 MiB | 0.9% → 1.1% |   114 MiB → 135 MiB |   57 → 70 | `<init>()`                                                                                    | `java.math.MutableBigInteger`                       |
|   +7.9% |  +20.349 MiB | 2.1% → 2.3% |   257 MiB → 278 MiB | 128 → 143 | `transform(ATNState, PredictionContext, SemanticContext, boolean, LexerActionExecutor)`       | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`       |
|   +6.1% |   +17.78 MiB | 2.4% → 2.5% |   290 MiB → 308 MiB | 147 → 157 | `stream(Spliterator, boolean)`                                                                | `java.util.stream.StreamSupport`                    |
| +107.9% |  +17.257 MiB | 0.1% → 0.3% |   16 MiB → 33.3 MiB |    8 → 17 | `getInvocationType()`                                                                         | `java.lang.invoke.MemberName`                       |
|  +10.4% |  +17.143 MiB | 1.4% → 1.5% |   164 MiB → 182 MiB |   86 → 92 | `spliterator(Object[], int, int, int)`                                                        | `java.util.Spliterators`                            |
|  +31.3% |  +16.714 MiB | 0.4% → 0.6% | 53.4 MiB → 70.1 MiB |   27 → 37 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object, Object)`                | `java.lang.invoke.BoundMethodHandle$Species_LLLLLL` |
|  +74.1% |  +16.559 MiB | 0.2% → 0.3% | 22.3 MiB → 38.9 MiB |   11 → 20 | `<init>()`                                                                                    | `java.util.ArrayDeque`                              |
|  +32.0% |  +16.479 MiB | 0.4% → 0.6% |   51.5 MiB → 68 MiB |   27 → 33 | `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`  | `org.codehaus.groovy.vmplugin.v8.IndyInterface`     |
|  +29.4% |  +15.299 MiB | 0.4% → 0.6% |   52 MiB → 67.3 MiB |   26 → 32 | `newSlice(int[], int, boolean)`                                                               | `java.util.regex.Pattern`                           |

##### Ours

|  Change |       Delta |            % |             Size | Samples | Function                                               | Location                                                                    |
| ------: | ----------: | -----------: | ---------------: | ------: | ------------------------------------------------------ | --------------------------------------------------------------------------- |
|     new | +15.992 MiB |  0.0% → 0.1% |     0 B → 16 MiB |   0 → 8 | `<init>()`                                             | `org.codenarc.rule.AbstractAstVisitor`                                      |
|     new |  +7.996 MiB |  0.0% → 0.1% |      0 B → 8 MiB |   0 → 1 | `filterSuppressedViolations(Iterable)`                 | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
| +400.0% |  +7.995 MiB | <0.1% → 0.1% | 2 MiB → 9.99 MiB |   1 → 5 | `markVariableAsReferenced(String, VariableExpression)` | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                         |
|  +66.9% |  +5.347 MiB |         0.1% | 8 MiB → 13.3 MiB |   4 → 6 | `collectViolations(SourceCode, RuleSet)`               | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|     new |  +3.998 MiB | 0.0% → <0.1% |      0 B → 4 MiB |   0 → 2 | `getViolationLocationString(Violation, String)`        | `org.codenarc.report.TextReportWriter`                                      |
|     new |  +3.998 MiB | 0.0% → <0.1% |      0 B → 4 MiB |   0 → 2 | `visitConstantExpression(ConstantExpression)`          | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`                |
|     new |  +3.998 MiB | 0.0% → <0.1% |      0 B → 4 MiB |   0 → 2 | `visitMethodCallExpression(MethodCallExpression)`      | `org.codenarc.rule.unnecessary.UnnecessaryGetterAstVisitor`                 |
| +100.0% |  +1.999 MiB |        <0.1% |    2 MiB → 4 MiB |   1 → 2 | `applyTo(SourceCode)`                                  | `org.codenarc.rule.AbstractRule`                                            |
|     new |  +1.999 MiB | 0.0% → <0.1% |      0 B → 2 MiB |   0 → 1 | `visitMethodCallExpression(MethodCallExpression)`      | `org.codenarc.rule.design.LocaleSetDefaultAstVisitor`                       |
|     new |  +1.999 MiB | 0.0% → <0.1% |      0 B → 2 MiB |   0 → 1 | `convertStringWithWildcardsToRegex(String)`            | `org.codenarc.util.WildcardPattern`                                         |
|     new |  +1.999 MiB | 0.0% → <0.1% |      0 B → 2 MiB |   0 → 1 | `doCall(List)`                                         | `org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1` |
|     new |  +1.999 MiB | 0.0% → <0.1% |      0 B → 2 MiB |   0 → 1 | `checkForCorrectColumn(ASTNode, String, int)`          | `org.codenarc.rule.formatting.IndentationAstVisitor`                        |
|     new |  +1.999 MiB | 0.0% → <0.1% |      0 B → 2 MiB |   0 → 1 | `checkStatementIndent(Statement, BlockStatement)`      | `org.codenarc.rule.formatting.IndentationAstVisitor`                        |
|     new |  +1.999 MiB | 0.0% → <0.1% |      0 B → 2 MiB |   0 → 1 | `visitClassEx(ClassNode)`                              | `org.codenarc.rule.convention.CompileStaticlVisitor`                        |
|     new |  +1.999 MiB | 0.0% → <0.1% |      0 B → 2 MiB |   0 → 1 | `visitBinaryExpression(BinaryExpression)`              | `org.codenarc.rule.unnecessary.UnnecessarySelfAssignmentAstVisitor`         |
|     new |  +1.999 MiB | 0.0% → <0.1% |      0 B → 2 MiB |   0 → 1 | `shouldApplyThisRuleTo(SourceCode)`                    | `org.codenarc.rule.AbstractRule`                                            |
|     new |  +1.999 MiB | 0.0% → <0.1% |      0 B → 2 MiB |   0 → 1 | `visitMethodEx(MethodNode)`                            | `org.codenarc.rule.convention.ImplicitReturnStatementAstVisitor`            |
|     new |  +1.999 MiB | 0.0% → <0.1% |      0 B → 2 MiB |   0 → 1 | `visitClosureExpression(ClosureExpression)`            | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                    |
|     new |  +1.999 MiB | 0.0% → <0.1% |      0 B → 2 MiB |   0 → 1 | `<init>()`                                             | `org.gmetrics.metric.AbstractAstVisitor`                                    |
|     new |  +1.999 MiB | 0.0% → <0.1% |      0 B → 2 MiB |   0 → 1 | `applyTo(SourceCode, List)`                            | `org.codenarc.rule.AbstractAstVisitorRule`                                  |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

##### Standard library

| Change |        Delta |           % |                Size |   Samples | Function                                                                  | Location                                                  |
| -----: | -----------: | ----------: | ------------------: | --------: | ------------------------------------------------------------------------- | --------------------------------------------------------- |
| -28.9% | -132.534 MiB | 3.8% → 2.7% |   458 MiB → 326 MiB | 205 → 161 | `make(MethodType, LambdaForm, Object, Object)`                            | `java.lang.invoke.BoundMethodHandle$Species_LL`           |
| -16.4% |  -77.238 MiB | 3.9% → 3.2% |   471 MiB → 394 MiB | 234 → 200 | `makeBlockInliningWrapper(MethodHandle)`                                  | `java.lang.invoke.MethodHandleImpl`                       |
| -23.6% |  -65.232 MiB | 2.3% → 1.7% |   277 MiB → 212 MiB |  136 → 95 | `insertParameterTypes(int, Class[])`                                      | `java.lang.invoke.MethodType`                             |
| -25.7% |  -28.835 MiB | 0.9% → 0.7% |  112 MiB → 83.2 MiB |   58 → 41 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl`                       |
| -57.7% |  -27.133 MiB | 0.4% → 0.2% |   47 MiB → 19.9 MiB |   24 → 11 | `lambda$setGuards$1(int)`                                                 | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| -13.1% |  -26.801 MiB | 1.7% → 1.5% |   204 MiB → 178 MiB |  100 → 86 | `allocateInstance(Object)`                                                | `java.lang.invoke.DirectMethodHandle`                     |
| -32.1% |  -24.499 MiB | 0.6% → 0.4% | 76.4 MiB → 51.9 MiB |   37 → 26 | `make(byte, Class, MemberName, Class)`                                    | `java.lang.invoke.DirectMethodHandle`                     |
|  -6.2% |  -23.356 MiB | 3.1% → 2.9% |   376 MiB → 352 MiB | 191 → 181 | `newInstance(Class, int)`                                                 | `java.lang.reflect.Array`                                 |
|  -2.8% |  -22.196 MiB | 6.5% → 6.3% |   796 MiB → 773 MiB | 374 → 373 | `makeImpl(Class, Class[], boolean)`                                       | `java.lang.invoke.MethodType`                             |
| -10.4% |  -21.595 MiB | 1.7% → 1.5% |   208 MiB → 186 MiB |  107 → 96 | `compile()`                                                               | `java.util.regex.Pattern`                                 |
| -25.5% |  -21.446 MiB | 0.7% → 0.5% |   84 MiB → 62.5 MiB |   42 → 29 | `createEntryListArray(int)`                                               | `groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap`      |
|  -8.0% |  -20.698 MiB | 2.1% → 2.0% |   259 MiB → 239 MiB | 130 → 122 | `newNode(int, Object, Object, HashMap$Node)`                              | `java.util.HashMap`                                       |
| -21.1% |  -20.645 MiB | 0.8% → 0.6% |   98 MiB → 77.3 MiB |   48 → 40 | `map(Function)`                                                           | `java.util.stream.ReferencePipeline`                      |
| -16.5% |  -20.472 MiB | 1.0% → 0.8% |   124 MiB → 104 MiB |   62 → 53 | `makeGuardWithTest(MethodHandle, MethodHandle, MethodHandle)`             | `java.lang.invoke.MethodHandleImpl`                       |
| -12.3% |  -18.032 MiB | 1.2% → 1.0% |   146 MiB → 128 MiB |   77 → 66 | `valueOf(long)`                                                           | `java.lang.Long`                                          |
| -34.5% |  -16.919 MiB | 0.4% → 0.3% |   49 MiB → 32.1 MiB |   26 → 19 | `grow(int)`                                                               | `java.util.ArrayList`                                     |
| -32.1% |   -16.13 MiB | 0.4% → 0.3% | 50.2 MiB → 34.1 MiB |   25 → 18 | `of(byte, int, int, int)`                                                 | `java.lang.invoke.LambdaFormEditor$TransformKey`          |
| -20.3% |  -15.058 MiB | 0.6% → 0.5% | 74.1 MiB → 59.1 MiB |   50 → 42 | `copyOfRangeByte(byte[], int, int)`                                       | `java.util.Arrays`                                        |
| -31.4% |  -11.977 MiB | 0.3% → 0.2% | 38.2 MiB → 26.2 MiB |   18 → 14 | `getParameterTypes()`                                                     | `java.lang.reflect.Method`                                |
| -56.2% |  -11.448 MiB | 0.2% → 0.1% | 20.4 MiB → 8.92 MiB |    11 → 6 | `toString()`                                                              | `java.lang.StringBuilder`                                 |

##### Ours

|  Change |      Delta |            % |           Size | Samples | Function                                                                | Location                                                                        |
| ------: | ---------: | -----------: | -------------: | ------: | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
|  -40.0% | -3.998 MiB | 0.1% → <0.1% | 10 MiB → 6 MiB |   5 → 3 | `writeViolation(Writer, Violation, String)`                             | `org.codenarc.report.TextReportWriter`                                          |
| removed | -3.997 MiB | <0.1% → 0.0% |    4 MiB → 0 B |   2 → 0 | `visitConstructorOrMethod(MethodNode, boolean)`                         | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`                      |
|  -50.0% | -1.999 MiB |        <0.1% |  4 MiB → 2 MiB |   2 → 1 | `doCall(Object)`                                                        | `org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3` |
| removed | -1.999 MiB | <0.1% → 0.0% |    2 MiB → 0 B |   1 → 0 | `visitVariableExpression(VariableExpression)`                           | `org.codenarc.rule.ClassReferenceAstVisitor`                                    |
| removed | -1.999 MiB | <0.1% → 0.0% |    2 MiB → 0 B |   1 → 0 | `addOrderingViolations(SourceCode, String, String, String)`             | `org.codenarc.rule.imports.MisorderedStaticImportsRule`                         |
| removed | -1.999 MiB | <0.1% → 0.0% |    2 MiB → 0 B |   1 → 0 | `visitMethodCallExpression(MethodCallExpression)`                       | `org.codenarc.rule.basic.ParameterAssignmentInFilterClosureAstVisitor`          |
| removed | -1.999 MiB | <0.1% → 0.0% |    2 MiB → 0 B |   1 → 0 | `visitVariableExpression(VariableExpression)`                           | `org.codenarc.rule.FieldReferenceAstVisitor`                                    |
| removed | -1.999 MiB | <0.1% → 0.0% |    2 MiB → 0 B |   1 → 0 | `applyTo(SourceCode, List)`                                             | `org.codenarc.rule.imports.NoWildcardImportsRule`                               |
| removed | -1.999 MiB | <0.1% → 0.0% |    2 MiB → 0 B |   1 → 0 | `addChildrenToAbcVector(Object)`                                        | `org.gmetrics.metric.abc.result.AggregateAbcMetricResult`                       |
| removed | -1.999 MiB | <0.1% → 0.0% |    2 MiB → 0 B |   1 → 0 | `visitMethodCallExpression(MethodCallExpression)`                       | `org.gmetrics.metric.abc.AbcAstVisitor`                                         |
| removed | -1.999 MiB | <0.1% → 0.0% |    2 MiB → 0 B |   1 → 0 | `setDisabledRulesByLine(int)`                                           | `org.codenarc.plugin.disablerules.LookupTable`                                  |
| removed | -1.999 MiB | <0.1% → 0.0% |    2 MiB → 0 B |   1 → 0 | `visitMethodEx(MethodNode)`                                             | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`                  |
| removed | -1.999 MiB | <0.1% → 0.0% |    2 MiB → 0 B |   1 → 0 | `visitConstantExpression(ConstantExpression)`                           | `org.codenarc.rule.convention.LongLiteralWithLowerCaseLAstVisitor`              |
| removed | -1.999 MiB | <0.1% → 0.0% |    2 MiB → 0 B |   1 → 0 | `recordMethodColumnAndSourceLineForClosureBlocks(MethodCallExpression)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                            |
| removed | -1.999 MiB | <0.1% → 0.0% |    2 MiB → 0 B |   1 → 0 | `visitMethodEx(MethodNode)`                                             | `org.codenarc.rule.design.AssignmentToStaticFieldFromInstanceMethodAstVisitor`  |
| removed | -1.999 MiB | <0.1% → 0.0% |    2 MiB → 0 B |   1 → 0 | `<init>(MethodNode)`                                                    | `org.gmetrics.result.MethodKey`                                                 |
| removed | -1.999 MiB | <0.1% → 0.0% |    2 MiB → 0 B |   1 → 0 | `visitBinaryExpression(BinaryExpression)`                               | `org.codenarc.rule.unnecessary.UnnecessaryCallForLastElementAstVisitor`         |
| removed | -1.999 MiB | <0.1% → 0.0% |    2 MiB → 0 B |   1 → 0 | `calculate(MethodNode, SourceCode)`                                     | `org.gmetrics.metric.abc.AbcMetric`                                             |
| removed | -1.999 MiB | <0.1% → 0.0% |    2 MiB → 0 B |   1 → 0 | `visitConstructorOrMethod(MethodNode, boolean)`                         | `org.codenarc.rule.unnecessary.UnnecessaryDefInMethodDeclarationAstVisitor`     |
| removed | -1.999 MiB | <0.1% → 0.0% |    2 MiB → 0 B |   1 → 0 | `visitBinaryExpression(BinaryExpression)`                               | `org.codenarc.rule.unnecessary.UnnecessaryBooleanExpressionAstVisitor`          |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

##### Standard library

|     Change |          Delta |             % |                Size |       Samples | Function                                         | Location                                            |
| ---------: | -------------: | ------------: | ------------------: | ------------: | ------------------------------------------------ | --------------------------------------------------- |
| +109236.9% |     +4.552 GiB | <0.1% → 38.2% | 4.27 MiB → 4.56 GiB |     3 → 2,354 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000b80138dc00` |
| +512334.5% |     +3.691 GiB | <0.1% → 30.9% |  756 KiB → 3.69 GiB |     1 → 1,911 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000b8013dbc00` |
| +238844.0% |     +3.033 GiB | <0.1% → 25.4% |  1.3 MiB → 3.04 GiB |     1 → 1,529 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b80160c800` |
|  +47259.7% |     +2.767 GiB | <0.1% → 23.2% |    6 MiB → 2.77 GiB |     3 → 1,399 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000b801829400` |
|    +485.6% |     +2.196 GiB |  3.8% → 22.2% |  463 MiB → 2.65 GiB |   240 → 1,373 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000b8013dc000` |
|  +13133.8% |       +1.1 GiB |   0.1% → 9.3% | 8.58 MiB → 1.11 GiB |       5 → 578 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000b8012d8000` |
|   +3023.2% | +1,005.623 MiB |   0.3% → 8.5% | 33.3 MiB → 1.01 GiB |      25 → 526 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000b801398000` |
|  +22801.8% |   +911.538 MiB |  <0.1% → 7.5% |     4 MiB → 916 MiB |       2 → 451 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000b80160c400` |
|   +9027.3% |   +721.826 MiB |   0.1% → 6.0% |     8 MiB → 730 MiB |       4 → 360 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000b80182e800` |
|   +3090.9% |   +679.652 MiB |   0.2% → 5.7% |    22 MiB → 702 MiB |      11 → 347 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000b801609800` |
|     +23.5% |   +656.795 MiB | 23.0% → 28.2% | 2.73 GiB → 3.37 GiB | 1,420 → 1,737 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000b8013d2400` |
|  +44238.1% |   +450.927 MiB |  <0.1% → 3.7% |  1.02 MiB → 452 MiB |       1 → 230 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000b80138c800` |
|    +721.7% |   +365.485 MiB |   0.4% → 3.4% |  50.6 MiB → 416 MiB |      26 → 212 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000b8013dc800` |
|    +397.7% |   +331.138 MiB |   0.7% → 3.4% |  83.3 MiB → 414 MiB |      43 → 210 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000b80138c000` |
|  +16307.7% |   +325.836 MiB |  <0.1% → 2.7% |     2 MiB → 328 MiB |       1 → 150 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000b8018a3c00` |
|  +15899.9% |   +317.839 MiB |  <0.1% → 2.6% |     2 MiB → 320 MiB |       1 → 146 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000b8018b1800` |
|   +5233.3% |   +313.841 MiB |  <0.1% → 2.6% |     6 MiB → 320 MiB |       3 → 146 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000b8018b1c00` |
|  +13699.6% |   +273.858 MiB |  <0.1% → 2.3% |     2 MiB → 276 MiB |       1 → 136 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000b80182a000` |
|   +2120.2% |   +267.863 MiB |   0.1% → 2.3% |  12.6 MiB → 280 MiB |       9 → 130 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b80144c000` |
|  +11800.0% |   +235.882 MiB |  <0.1% → 1.9% |     2 MiB → 238 MiB |        1 → 51 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000b801914000` |

##### Ours

|  Change |        Delta |             % |                Size |       Samples | Function                                                  | Location                                                                            |
| ------: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|   +3.0% | +100.528 MiB | 28.0% → 28.6% | 3.32 GiB → 3.42 GiB | 1,728 → 1,770 | `processFile(String, DirectoryResults, RuleSet)`          | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                                    |
|  +11.6% |  +90.817 MiB |   6.4% → 7.1% |   782 MiB → 873 MiB |     397 → 443 | `doCall(Object)`                                          | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`         |
|  +42.1% |  +79.962 MiB |   1.6% → 2.2% |   190 MiB → 270 MiB |       95 → 67 | `writeFileViolations(Writer, FileResults)`                | `org.codenarc.report.TextReportWriter`                                              |
|   +1.9% |  +77.806 MiB | 33.6% → 34.0% | 3.99 GiB → 4.06 GiB | 2,069 → 2,105 | `collectViolations(SourceCode, RuleSet)`                  | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                      |
|  +23.3% |  +61.969 MiB |   2.2% → 2.7% |   266 MiB → 328 MiB |     129 → 150 | `doCall(Object)`                                          | `org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`      |
|  +22.2% |   +59.97 MiB |   2.2% → 2.7% |   270 MiB → 330 MiB |     131 → 151 | `getNumberOfViolationsWithPriority(int, boolean)`         | `org.codenarc.results.FileResults`                                                  |
|  +22.2% |   +59.97 MiB |   2.2% → 2.7% |   270 MiB → 330 MiB |     131 → 151 | `getNumberOfViolationsWithPriority(int)`                  | `org.codenarc.results.FileResults`                                                  |
|  +49.1% |  +55.972 MiB |   0.9% → 1.4% |   114 MiB → 170 MiB |       57 → 38 | `doCall(Object)`                                          | `org.codenarc.report.TextReportWriter$_writeFileViolations_closure5`                |
|  +26.7% |   +53.97 MiB |   1.7% → 2.1% |   202 MiB → 256 MiB |      97 → 114 | `doCall(Object)`                                          | `org.codenarc.results.DirectoryResults$_getNumberOfViolationsWithPriority_closure3` |
|   +1.5% |    +39.4 MiB | 22.1% → 22.3% | 2.62 GiB → 2.66 GiB |         1,384 | `applyTo(SourceCode)`                                     | `org.codenarc.rule.AbstractRule`                                                    |
| +150.0% |  +35.981 MiB |   0.2% → 0.5% |     24 MiB → 60 MiB |        12 → 9 | `doCall(Object)`                                          | `org.codenarc.report.TextReportWriter$_writeFileViolations_closure4`                |
|  +34.2% |  +28.386 MiB |   0.7% → 0.9% |  82.9 MiB → 111 MiB |       42 → 54 | `isMethodNamed(MethodCallExpression, String)`             | `org.codenarc.util.AstUtil`                                                         |
|   +1.1% |  +28.076 MiB | 21.1% → 21.3% | 2.51 GiB → 2.54 GiB | 1,324 → 1,319 | `applyTo(SourceCode, List)`                               | `org.codenarc.rule.AbstractAstVisitorRule`                                          |
| +140.7% |  +24.109 MiB |   0.1% → 0.3% | 17.1 MiB → 41.2 MiB |        9 → 21 | `visitBinaryExpression(BinaryExpression)`                 | `org.codenarc.rule.unnecessary.UnnecessarySelfAssignmentAstVisitor`                 |
| +142.1% |  +24.066 MiB |   0.1% → 0.3% |   16.9 MiB → 41 MiB |        9 → 20 | `super$3$visitExpressionStatement(ExpressionStatement)`   | `org.codenarc.rule.groovyism.UseCollectNestedAstVisitor`                            |
|   +1.0% |  +24.003 MiB | 19.2% → 19.3% |  2.28 GiB → 2.3 GiB | 1,187 → 1,180 | `visitClass(ClassNode)`                                   | `org.codenarc.rule.AbstractAstVisitor`                                              |
|  +36.1% |  +23.419 MiB |   0.5% → 0.7% | 64.9 MiB → 88.3 MiB |       33 → 44 | `visitExpressionStatement(ExpressionStatement)`           | `org.codenarc.rule.groovyism.UseCollectNestedAstVisitor`                            |
|  +96.2% |  +22.067 MiB |   0.2% → 0.4% |   22.9 MiB → 45 MiB |       12 → 22 | `visitMethodCallExpression(MethodCallExpression)`         | `org.codenarc.rule.groovyism.UseCollectNestedAstVisitor`                            |
|  +20.7% |  +21.995 MiB |   0.9% → 1.0% |   106 MiB → 128 MiB |       54 → 65 | `applyTo(SourceCode, List)`                               | `org.codenarc.rule.AbstractSharedAstVisitorRule`                                    |
|  +87.1% |  +21.407 MiB |   0.2% → 0.4% |   24.6 MiB → 46 MiB |       13 → 22 | `super$2$visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`                            |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Standard library

|  Change |        Delta |             % |                Size |       Samples | Function                                         | Location                                            |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------ | --------------------------------------------------- |
|  -99.2% |   -4.553 GiB |  38.7% → 0.3% | 4.59 GiB → 35.3 MiB |    2,380 → 19 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000b8012b2800` |
| -100.0% |   -3.682 GiB | 31.0% → <0.1% |  3.68 GiB → 951 KiB |     1,906 → 1 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000b8013a3800` |
|  -99.7% |   -3.355 GiB |  28.4% → 0.1% | 3.37 GiB → 10.7 MiB |     1,754 → 6 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000b8012b0000` |
|  -99.3% |   -2.926 GiB |  24.8% → 0.2% |   2.95 GiB → 20 MiB |    1,481 → 10 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b801694800` |
|  -99.9% |   -2.731 GiB | 23.0% → <0.1% |    2.73 GiB → 2 MiB |     1,370 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000b801484400` |
|  -99.9% |   -1.151 GiB |  9.7% → <0.1% |  1.15 GiB → 634 KiB |       601 → 1 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000b801183400` |
|  -99.4% |   -1.107 GiB |   9.4% → 0.1% |    1.11 GiB → 7 MiB |       572 → 5 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000b8012d0c00` |
|  -99.7% | -793.597 MiB |  6.5% → <0.1% |     796 MiB → 2 MiB |       393 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000b801491400` |
|  -99.5% | -783.512 MiB |  6.5% → <0.1% |     788 MiB → 4 MiB |       388 → 2 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000b801518400` |
|  -92.5% | -591.691 MiB |   5.3% → 0.4% |    640 MiB → 48 MiB |      315 → 24 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000b8014c1c00` |
|  -98.7% | -400.963 MiB |  3.3% → <0.1% |  406 MiB → 5.27 MiB |       210 → 4 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000b8013a0400` |
|  -85.0% | -370.371 MiB |   3.6% → 0.5% |  436 MiB → 65.3 MiB |      221 → 33 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000b8014e1c00` |
|  -99.3% | -269.863 MiB |  2.2% → <0.1% |     272 MiB → 2 MiB |       132 → 1 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000b80190c800` |
|   -7.3% | -264.146 MiB | 29.7% → 27.4% | 3.52 GiB → 3.26 GiB | 1,879 → 1,749 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000b801119400` |
|  -98.5% | -261.867 MiB |  2.2% → <0.1% |     266 MiB → 4 MiB |       129 → 2 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000b8018cb400` |
|  -99.2% | -259.868 MiB |  2.2% → <0.1% |     262 MiB → 2 MiB |       127 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000b801913000` |
|  -99.5% | -259.546 MiB |  2.1% → <0.1% |  261 MiB → 1.34 MiB |       133 → 1 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b80143d800` |
|  -92.5% | -245.929 MiB |   2.2% → 0.2% |  266 MiB → 19.9 MiB |      133 → 10 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000b80182a800` |
|  -77.1% | -201.897 MiB |   2.2% → 0.5% |    262 MiB → 60 MiB |       127 → 9 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000b8018e1000` |
| removed | -195.899 MiB |   1.6% → 0.0% |       196 MiB → 0 B |        40 → 0 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b80198b000` |

##### Ours

| Change |       Delta |             % |                Size |       Samples | Function                                          | Location                                                                                 |
| -----: | ----------: | ------------: | ------------------: | ------------: | ------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| -48.0% |  -97.95 MiB |   1.7% → 0.9% |   204 MiB → 106 MiB |       44 → 53 | `doCall(Object)`                                  | `org.codenarc.report.TextReportWriter$_writeFileViolations_closure6`                     |
| -49.0% | -95.951 MiB |   1.6% → 0.8% |  196 MiB → 99.9 MiB |       40 → 50 | `writeViolation(Writer, Violation, String)`       | `org.codenarc.report.TextReportWriter`                                                   |
|  -1.8% | -85.419 MiB | 38.0% → 37.1% | 4.52 GiB → 4.43 GiB | 2,339 → 2,296 | `measureRuleProcessingTime(Rule, Closure)`        | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                           |
|  -6.5% | -66.983 MiB |   8.5% → 7.9% |  1.01 GiB → 966 MiB |     532 → 492 | `init()`                                          | `org.codenarc.source.AbstractSourceCode`                                                 |
| -19.0% |  -35.53 MiB |   1.5% → 1.2% |   187 MiB → 151 MiB |       96 → 78 | `super$3$applyTo(SourceCode, List)`               | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`                                 |
| -22.7% | -32.089 MiB |   1.2% → 0.9% |   141 MiB → 109 MiB |       69 → 54 | `doCall(Object)`                                  | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor$_visitArgumentlistExpression_closure1` |
| -14.5% |   -31.2 MiB |   1.8% → 1.5% |   215 MiB → 184 MiB |      110 → 91 | `visitStatement(Statement)`                       | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`                           |
|  -7.4% | -30.966 MiB |   3.5% → 3.2% |   420 MiB → 389 MiB |     217 → 201 | `isRuleSuppressed(Rule)`                          | `org.codenarc.analyzer.SuppressionAnalyzer`                                              |
| -69.4% | -27.174 MiB |   0.3% → 0.1% |   39.2 MiB → 12 MiB |        20 → 6 | `visitBinaryExpression(BinaryExpression)`         | `org.codenarc.rule.unnecessary.AddEmptyStringAstVisitor`                                 |
|  -5.5% | -24.024 MiB |   3.6% → 3.4% |   438 MiB → 414 MiB |     225 → 212 | `init()`                                          | `org.codenarc.analyzer.SuppressionAnalyzer`                                              |
| -18.5% | -23.771 MiB |   1.1% → 0.9% |   129 MiB → 105 MiB |       66 → 54 | `applyTo(SourceCode, List)`                       | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`                                 |
| -36.6% | -21.591 MiB |   0.5% → 0.3% | 58.9 MiB → 37.3 MiB |       31 → 19 | `checkForCorrectColumn(ASTNode, String, int)`     | `org.codenarc.rule.formatting.IndentationAstVisitor`                                     |
|  -8.1% | -21.527 MiB |   2.2% → 2.0% |   265 MiB → 243 MiB |     131 → 121 | `visitClass(ClassNode)`                           | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`                                  |
|  -4.7% | -20.733 MiB |   3.6% → 3.4% |   439 MiB → 419 MiB |     221 → 210 | `addViolationIfDuplicate(Expression, boolean)`    | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                       |
|  -4.5% | -19.579 MiB |   3.6% → 3.4% |   432 MiB → 413 MiB |     217 → 207 | `addViolationIfDuplicate(Expression)`             | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                       |
| -52.0% |  -17.34 MiB |   0.3% → 0.1% |   33.3 MiB → 16 MiB |        17 → 8 | `visitConstantExpression(ConstantExpression)`     | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`                             |
| -38.0% | -17.134 MiB |   0.4% → 0.2% |   45.1 MiB → 28 MiB |       22 → 14 | `visitBinaryExpression(BinaryExpression)`         | `org.codenarc.rule.basic.ComparisonWithSelfAstVisitor`                                   |
| -13.6% | -17.041 MiB |   1.0% → 0.9% |   125 MiB → 108 MiB |       61 → 54 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`                             |
| -83.3% | -16.642 MiB |  0.2% → <0.1% |   20 MiB → 3.35 MiB |        10 → 2 | `visitBlockStatement(BlockStatement)`             | `org.codenarc.rule.unused.AbstractLastStatementInBlockAstVisitor`                        |
| -67.4% | -16.501 MiB |   0.2% → 0.1% |    24.5 MiB → 8 MiB |        14 → 4 | `doCall(Object)`                                  | `org.codenarc.rule.imports.UnusedImportRule$_processImports_closure1`                    |

# Retained heap profile diff

Retained 78.1 KiB → 27.1 KiB (-50.992 KiB, -65.3%) over 129 objects → 97 objects (620 B → 286 B per object).

| Category         | Change |      Delta |     % |            Size |  Objects |
| ---------------- | -----: | ---------: | ----: | --------------: | -------: |
| Standard library | -65.3% | -50.96 KiB | 99.9% | 78 KiB → 27 KiB | 127 → 96 |
| Ours             | -50.0% |      -32 B |  0.1% |     64 B → 32 B |    2 → 1 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

##### Standard library

|   Change |       Delta |            % |             Size | Objects | Function                                                                                                 | Location                                                |
| -------: | ----------: | -----------: | ---------------: | ------: | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|      new | +16.015 KiB | 0.0% → 59.2% |     0 B → 16 KiB |   0 → 1 | `<init>(boolean, String, XMLResourceIdentifier, InputStream, Reader, String, boolean, boolean, boolean)` | `com.sun.xml.internal.stream.Entity$ScannedEntity`      |
| +3700.0% |  +4.046 KiB | 0.1% → 15.4% | 112 B → 4.16 KiB |   1 → 2 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`                          | `java.lang.ClassLoader`                                 |
|   +66.7% |      +304 B |  0.6% → 2.7% |    456 B → 760 B |   3 → 5 | `getPlainNodeReference(boolean)`                                                                         | `org.codehaus.groovy.ast.ClassNode`                     |
|      new |      +152 B |  0.0% → 0.5% |      0 B → 152 B |   0 → 1 | `makeWithoutCaching(String)`                                                                             | `org.codehaus.groovy.ast.ClassHelper`                   |
|      new |      +104 B |  0.0% → 0.4% |      0 B → 104 B |   0 → 1 | `getDeclaredConstructors0(boolean)`                                                                      | `java.lang.Class`                                       |
|      new |       +96 B |  0.0% → 0.3% |       0 B → 96 B |   0 → 2 | `getTable()`                                                                                             | `java.beans.FeatureDescriptor`                          |
|      new |       +96 B |  0.0% → 0.3% |       0 B → 96 B |   0 → 2 | `<init>(Class, ClassInfo)`                                                                               | `org.codehaus.groovy.reflection.CachedClass`            |
|   +20.0% |       +72 B |  0.5% → 1.6% |    360 B → 432 B |   4 → 5 | `copyOfRangeByte(byte[], int, int)`                                                                      | `java.util.Arrays`                                      |
|      new |       +72 B |  0.0% → 0.3% |       0 B → 72 B |   0 → 1 | `createMethodCallExpression(Expression, Expression)`                                                     | `org.apache.groovy.parser.antlr4.AstBuilder`            |
|      new |       +72 B |  0.0% → 0.3% |       0 B → 72 B |   0 → 1 | `getDeclaredFields0(boolean)`                                                                            | `java.lang.Class`                                       |
|      new |       +64 B |  0.0% → 0.2% |       0 B → 64 B |   0 → 2 | `putNodeMetaData(Object, Object)`                                                                        | `org.codehaus.groovy.ast.NodeMetaDataHandler`           |
|      new |       +64 B |  0.0% → 0.2% |       0 B → 64 B |   0 → 1 | `lambda$inheritFields$19(CachedClass)`                                                                   | `groovy.lang.MetaClassImpl`                             |
|      new |       +64 B |  0.0% → 0.2% |       0 B → 64 B |   0 → 1 | `<init>(SourceUnit)`                                                                                     | `org.codehaus.groovy.ast.ModuleNode`                    |
|      new |       +56 B |  0.0% → 0.2% |       0 B → 56 B |   0 → 1 | `realBootstrap(MethodHandles$Lookup, String, int, MethodType, boolean, boolean, boolean)`                | `org.codehaus.groovy.vmplugin.v8.IndyInterface`         |
|      new |       +56 B |  0.0% → 0.2% |       0 B → 56 B |   0 → 1 | `visitCreator(GroovyParser$CreatorContext)`                                                              | `org.apache.groovy.parser.antlr4.AstBuilder`            |
|      new |       +48 B |  0.0% → 0.2% |       0 B → 48 B |   0 → 1 | `pathExpression()`                                                                                       | `org.apache.groovy.parser.antlr4.GroovyParser`          |
|      new |       +48 B |  0.0% → 0.2% |       0 B → 48 B |   0 → 2 | `addMethodToList(Object, MetaMethod)`                                                                    | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |
|      new |       +48 B |  0.0% → 0.2% |       0 B → 48 B |   0 → 1 | `make(MethodType, LambdaForm, Object, Object, Object, Object)`                                           | `java.lang.invoke.BoundMethodHandle$Species_LLLL`       |
|  +100.0% |       +40 B |  0.1% → 0.3% |      40 B → 80 B |   1 → 2 | `getAndPut(String, MemoizeCache$ValueProvider)`                                                          | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`     |
|      new |       +40 B |  0.0% → 0.1% |       0 B → 40 B |   0 → 1 | `enhancedStatementExpression()`                                                                          | `org.apache.groovy.parser.antlr4.GroovyParser`          |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |       Delta |            % |                Size | Objects | Function                                                                                                            | Location                                                 |
| ------: | ----------: | -----------: | ------------------: | ------: | ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| removed | -64.015 KiB | 82.0% → 0.0% |        64 KiB → 0 B |   1 → 0 | `<clinit>()`                                                                                                        | `com.sun.org.apache.xerces.internal.util.XMLChar`        |
|  -91.8% |  -3.148 KiB |  4.4% → 1.0% |    3.43 KiB → 288 B |       1 | `copyOfRange(byte[], int, int)`                                                                                     | `java.util.Arrays`                                       |
| removed |      -608 B |  0.8% → 0.0% |         608 B → 0 B |   2 → 0 | `resize()`                                                                                                          | `java.util.HashMap`                                      |
|  -19.8% |      -512 B |  3.2% → 7.5% | 2.53 KiB → 2.03 KiB |       2 | `resize(int)`                                                                                                       | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`  |
|  -53.3% |      -448 B |  1.1% → 1.4% |       840 B → 392 B |  15 → 7 | `getOrPutMethods(String, MetaMethodIndex$Header)`                                                                   | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`  |
| removed |      -416 B |  0.5% → 0.0% |         416 B → 0 B |   1 → 0 | `newInstance(Class, int)`                                                                                           | `java.lang.reflect.Array`                                |
| removed |      -352 B |  0.4% → 0.0% |         352 B → 0 B |   4 → 0 | `copy()`                                                                                                            | `java.lang.reflect.Method`                               |
|  -56.1% |      -296 B |  0.7% → 0.8% |       528 B → 232 B |   6 → 3 | `getDeclaredMethods0(boolean)`                                                                                      | `java.lang.Class`                                        |
| removed |      -280 B |  0.4% → 0.0% |         280 B → 0 B |   1 → 0 | `<init>(MethodType)`                                                                                                | `java.lang.invoke.Invokers`                              |
|  -55.6% |      -280 B |  0.6% → 0.8% |       504 B → 224 B |   9 → 4 | `grow(int)`                                                                                                         | `java.util.ArrayList`                                    |
| removed |      -256 B |  0.3% → 0.0% |         256 B → 0 B |   1 → 0 | `getTargetMethodInfo()`                                                                                             | `java.beans.Introspector`                                |
| removed |      -200 B |  0.3% → 0.0% |         200 B → 0 B |   2 → 0 | `initClassName()`                                                                                                   | `java.lang.Class`                                        |
|  -66.7% |      -144 B |         0.3% |        216 B → 72 B |   3 → 1 | `copy()`                                                                                                            | `java.lang.reflect.Field`                                |
| removed |      -144 B |  0.2% → 0.0% |         144 B → 0 B |   2 → 0 | `visitIdentifierPrmrAlt(GroovyParser$IdentifierPrmrAltContext)`                                                     | `org.apache.groovy.parser.antlr4.AstBuilder`             |
| removed |       -96 B |  0.1% → 0.0% |          96 B → 0 B |   2 → 0 | `unreflect(Method)`                                                                                                 | `java.lang.invoke.MethodHandles$Lookup`                  |
|  -73.3% |       -88 B |  0.2% → 0.1% |        120 B → 32 B |       1 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)`                | `java.lang.ClassLoader`                                  |
| removed |       -80 B |  0.1% → 0.0% |          80 B → 0 B |   1 → 0 | `decompress(ByteBuffer, int)`                                                                                       | `jdk.internal.jimage.ImageLocation`                      |
| removed |       -80 B |  0.1% → 0.0% |          80 B → 0 B |   1 → 0 | `make(MethodType, LambdaForm, Object, Object, Object, Object, int, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.BoundMethodHandle$Species_LLLLILLLLLL` |
| removed |       -80 B |  0.1% → 0.0% |          80 B → 0 B |   2 → 0 | `identifier()`                                                                                                      | `org.apache.groovy.parser.antlr4.GroovyParser`           |
| removed |       -72 B |  0.1% → 0.0% |          72 B → 0 B |   1 → 0 | `createMethodCallExpression(PropertyExpression, Expression)`                                                        | `org.apache.groovy.parser.antlr4.AstBuilder`             |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

|    Change |       Delta |             % |                Size | Objects | Function                                                                                                 | Location                                                              |
| --------: | ----------: | ------------: | ------------------: | ------: | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
|   +509.3% | +16.671 KiB |  4.2% → 73.7% | 3.27 KiB → 19.9 KiB | 50 → 40 | `invoke(Object, Object[])`                                                                               | `org.codehaus.groovy.reflection.CachedMethod`                         |
|   +497.2% | +16.625 KiB |  4.3% → 73.8% |   3.34 KiB → 20 KiB | 51 → 42 | `invokeExact_MT(Object, Object, Object, Object)`                                                         | `java.lang.invoke.Invokers$Holder`                                    |
|   +507.6% | +16.617 KiB |  4.2% → 73.5% | 3.27 KiB → 19.9 KiB | 50 → 39 | `doMethodInvoke(Object, Object[])`                                                                       | `groovy.lang.MetaMethod`                                              |
|   +493.7% | +16.585 KiB |  4.3% → 73.7% | 3.36 KiB → 19.9 KiB | 51 → 40 | `invoke(Object, Object[])`                                                                               | `java.lang.reflect.Method`                                            |
|   +477.9% | +16.539 KiB |  4.4% → 73.9% |   3.46 KiB → 20 KiB | 52 → 42 | `invoke(Object, Object[])`                                                                               | `jdk.internal.reflect.DirectMethodHandleAccessor`                     |
|   +427.5% | +16.265 KiB |  4.9% → 74.2% |  3.8 KiB → 20.1 KiB | 56 → 43 | `invokeImpl(Object, Object[])`                                                                           | `jdk.internal.reflect.DirectMethodHandleAccessor`                     |
|       new | +16.015 KiB |  0.0% → 59.2% |        0 B → 16 KiB |   0 → 1 | `<init>(boolean, String, XMLResourceIdentifier, InputStream, Reader, String, boolean, boolean, boolean)` | `com.sun.xml.internal.stream.Entity$ScannedEntity`                    |
|       new | +16.015 KiB |  0.0% → 59.2% |        0 B → 16 KiB |   0 → 1 | `setupCurrentEntity(boolean, String, XMLInputSource, boolean, boolean)`                                  | `com.sun.org.apache.xerces.internal.impl.XMLEntityManager`            |
|       new | +16.015 KiB |  0.0% → 59.2% |        0 B → 16 KiB |   0 → 1 | `determineDocVersion(XMLInputSource)`                                                                    | `com.sun.org.apache.xerces.internal.impl.XMLVersionDetector`          |
|       new | +16.015 KiB |  0.0% → 59.2% |        0 B → 16 KiB |   0 → 1 | `parse(boolean)`                                                                                         | `com.sun.org.apache.xerces.internal.impl.xs.opti.SchemaParsingConfig` |
|       new | +16.015 KiB |  0.0% → 59.2% |        0 B → 16 KiB |   0 → 1 | `parse(XMLInputSource)`                                                                                  | `com.sun.org.apache.xerces.internal.impl.xs.opti.SchemaParsingConfig` |
|       new | +16.015 KiB |  0.0% → 59.2% |        0 B → 16 KiB |   0 → 1 | `parse(XMLInputSource)`                                                                                  | `com.sun.org.apache.xerces.internal.impl.xs.opti.SchemaDOMParser`     |
|       new | +16.015 KiB |  0.0% → 59.2% |        0 B → 16 KiB |   0 → 1 | `getSchemaDocument(String, XMLInputSource, boolean, short, Element)`                                     | `com.sun.org.apache.xerces.internal.impl.xs.traversers.XSDHandler`    |
|       new | +16.015 KiB |  0.0% → 59.2% |        0 B → 16 KiB |   0 → 1 | `parseSchema(XMLInputSource, XSDDescription, Map)`                                                       | `com.sun.org.apache.xerces.internal.impl.xs.traversers.XSDHandler`    |
|       new | +16.015 KiB |  0.0% → 59.2% |        0 B → 16 KiB |   0 → 1 | `loadSchema(XSDDescription, XMLInputSource, Map)`                                                        | `com.sun.org.apache.xerces.internal.impl.xs.XMLSchemaLoader`          |
| +29185.7% |  +15.96 KiB |  0.1% → 59.2% |       56 B → 16 KiB |       1 | `doCall(Object)`                                                                                         | `org.codenarc.ruleset.XmlFileRuleSet$_closure1`                       |
|   +280.2% | +14.687 KiB |  6.7% → 73.6% | 5.24 KiB → 19.9 KiB | 49 → 41 | `invokeSpecial(Object, Object, Object)`                                                                  | `java.lang.invoke.DirectMethodHandle$Holder`                          |
| +13000.0% |  +4.062 KiB | <0.1% → 15.1% |     32 B → 4.09 KiB |   1 → 3 | `forName0(String, boolean, ClassLoader, Class)`                                                          | `java.lang.Class`                                                     |
| +13000.0% |  +4.062 KiB | <0.1% → 15.1% |     32 B → 4.09 KiB |   1 → 3 | `forName(String, boolean, ClassLoader, Class)`                                                           | `java.lang.Class`                                                     |
| +13000.0% |  +4.062 KiB | <0.1% → 15.1% |     32 B → 4.09 KiB |   1 → 3 | `forName(String, boolean, ClassLoader)`                                                                  | `java.lang.Class`                                                     |

##### Standard library

|    Change |       Delta |             % |                Size | Objects | Function                                                                                                 | Location                                                              |
| --------: | ----------: | ------------: | ------------------: | ------: | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
|   +509.3% | +16.671 KiB |  4.2% → 73.7% | 3.27 KiB → 19.9 KiB | 50 → 40 | `invoke(Object, Object[])`                                                                               | `org.codehaus.groovy.reflection.CachedMethod`                         |
|   +497.2% | +16.625 KiB |  4.3% → 73.8% |   3.34 KiB → 20 KiB | 51 → 42 | `invokeExact_MT(Object, Object, Object, Object)`                                                         | `java.lang.invoke.Invokers$Holder`                                    |
|   +507.6% | +16.617 KiB |  4.2% → 73.5% | 3.27 KiB → 19.9 KiB | 50 → 39 | `doMethodInvoke(Object, Object[])`                                                                       | `groovy.lang.MetaMethod`                                              |
|   +493.7% | +16.585 KiB |  4.3% → 73.7% | 3.36 KiB → 19.9 KiB | 51 → 40 | `invoke(Object, Object[])`                                                                               | `java.lang.reflect.Method`                                            |
|   +477.9% | +16.539 KiB |  4.4% → 73.9% |   3.46 KiB → 20 KiB | 52 → 42 | `invoke(Object, Object[])`                                                                               | `jdk.internal.reflect.DirectMethodHandleAccessor`                     |
|   +427.5% | +16.265 KiB |  4.9% → 74.2% |  3.8 KiB → 20.1 KiB | 56 → 43 | `invokeImpl(Object, Object[])`                                                                           | `jdk.internal.reflect.DirectMethodHandleAccessor`                     |
|       new | +16.015 KiB |  0.0% → 59.2% |        0 B → 16 KiB |   0 → 1 | `<init>(boolean, String, XMLResourceIdentifier, InputStream, Reader, String, boolean, boolean, boolean)` | `com.sun.xml.internal.stream.Entity$ScannedEntity`                    |
|       new | +16.015 KiB |  0.0% → 59.2% |        0 B → 16 KiB |   0 → 1 | `setupCurrentEntity(boolean, String, XMLInputSource, boolean, boolean)`                                  | `com.sun.org.apache.xerces.internal.impl.XMLEntityManager`            |
|       new | +16.015 KiB |  0.0% → 59.2% |        0 B → 16 KiB |   0 → 1 | `determineDocVersion(XMLInputSource)`                                                                    | `com.sun.org.apache.xerces.internal.impl.XMLVersionDetector`          |
|       new | +16.015 KiB |  0.0% → 59.2% |        0 B → 16 KiB |   0 → 1 | `parse(boolean)`                                                                                         | `com.sun.org.apache.xerces.internal.impl.xs.opti.SchemaParsingConfig` |
|       new | +16.015 KiB |  0.0% → 59.2% |        0 B → 16 KiB |   0 → 1 | `parse(XMLInputSource)`                                                                                  | `com.sun.org.apache.xerces.internal.impl.xs.opti.SchemaParsingConfig` |
|       new | +16.015 KiB |  0.0% → 59.2% |        0 B → 16 KiB |   0 → 1 | `parse(XMLInputSource)`                                                                                  | `com.sun.org.apache.xerces.internal.impl.xs.opti.SchemaDOMParser`     |
|       new | +16.015 KiB |  0.0% → 59.2% |        0 B → 16 KiB |   0 → 1 | `getSchemaDocument(String, XMLInputSource, boolean, short, Element)`                                     | `com.sun.org.apache.xerces.internal.impl.xs.traversers.XSDHandler`    |
|       new | +16.015 KiB |  0.0% → 59.2% |        0 B → 16 KiB |   0 → 1 | `parseSchema(XMLInputSource, XSDDescription, Map)`                                                       | `com.sun.org.apache.xerces.internal.impl.xs.traversers.XSDHandler`    |
|       new | +16.015 KiB |  0.0% → 59.2% |        0 B → 16 KiB |   0 → 1 | `loadSchema(XSDDescription, XMLInputSource, Map)`                                                        | `com.sun.org.apache.xerces.internal.impl.xs.XMLSchemaLoader`          |
|   +280.2% | +14.687 KiB |  6.7% → 73.6% | 5.24 KiB → 19.9 KiB | 49 → 41 | `invokeSpecial(Object, Object, Object)`                                                                  | `java.lang.invoke.DirectMethodHandle$Holder`                          |
| +13000.0% |  +4.062 KiB | <0.1% → 15.1% |     32 B → 4.09 KiB |   1 → 3 | `forName0(String, boolean, ClassLoader, Class)`                                                          | `java.lang.Class`                                                     |
| +13000.0% |  +4.062 KiB | <0.1% → 15.1% |     32 B → 4.09 KiB |   1 → 3 | `forName(String, boolean, ClassLoader, Class)`                                                           | `java.lang.Class`                                                     |
| +13000.0% |  +4.062 KiB | <0.1% → 15.1% |     32 B → 4.09 KiB |   1 → 3 | `forName(String, boolean, ClassLoader)`                                                                  | `java.lang.Class`                                                     |
|  +3700.0% |  +4.046 KiB |  0.1% → 15.4% |    112 B → 4.16 KiB |   1 → 2 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`                          | `java.lang.ClassLoader`                                               |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

##### Standard library

|  Change |       Delta |            % |             Size | Objects | Function                                                            | Location                                                            |
| ------: | ----------: | -----------: | ---------------: | ------: | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
|  -99.3% | -64.703 KiB | 83.4% → 1.6% | 65.1 KiB → 440 B | 12 → 10 | `newInstanceWithCaller(Object[], boolean, Class)`                   | `java.lang.reflect.Constructor`                                     |
|  -99.9% | -64.632 KiB | 82.9% → 0.2% |  64.7 KiB → 48 B |   4 → 2 | `newInstance(Object[])`                                             | `java.lang.reflect.Constructor`                                     |
| -100.0% |  -64.57 KiB | 82.8% → 0.1% |  64.6 KiB → 24 B |   3 → 1 | `ensureClassInitialized0(Class)`                                    | `jdk.internal.misc.Unsafe`                                          |
| -100.0% |  -64.57 KiB | 82.8% → 0.1% |  64.6 KiB → 24 B |   3 → 1 | `ensureClassInitialized(Class)`                                     | `jdk.internal.misc.Unsafe`                                          |
| -100.0% |  -64.57 KiB | 82.8% → 0.1% |  64.6 KiB → 24 B |   3 → 1 | `ensureClassInitialized(Class)`                                     | `jdk.internal.reflect.MethodHandleAccessorFactory`                  |
| -100.0% |  -64.57 KiB | 82.8% → 0.1% |  64.6 KiB → 24 B |   3 → 1 | `newConstructorAccessor(Constructor)`                               | `jdk.internal.reflect.MethodHandleAccessorFactory`                  |
| -100.0% |  -64.57 KiB | 82.8% → 0.1% |  64.6 KiB → 24 B |   3 → 1 | `newConstructorAccessor(Constructor)`                               | `jdk.internal.reflect.ReflectionFactory`                            |
| -100.0% |  -64.57 KiB | 82.8% → 0.1% |  64.6 KiB → 24 B |   3 → 1 | `acquireConstructorAccessor()`                                      | `java.lang.reflect.Constructor`                                     |
| removed | -64.015 KiB | 82.0% → 0.0% |     64 KiB → 0 B |   1 → 0 | `<clinit>()`                                                        | `com.sun.org.apache.xerces.internal.util.XMLChar`                   |
| removed | -64.015 KiB | 82.0% → 0.0% |     64 KiB → 0 B |   1 → 0 | `normalize(Object, short)`                                          | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl`    |
| removed | -64.015 KiB | 82.0% → 0.0% |     64 KiB → 0 B |   1 → 0 | `getActualValue(Object, ValidationContext, ValidatedInfo, boolean)` | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl`    |
| removed | -64.015 KiB | 82.0% → 0.0% |     64 KiB → 0 B |   1 → 0 | `applyFacets(XSFacets, short, short, short, ValidationContext)`     | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl`    |
| removed | -64.015 KiB | 82.0% → 0.0% |     64 KiB → 0 B |   1 → 0 | `applyFacets1(XSFacets, short, short)`                              | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl`    |
| removed | -64.015 KiB | 82.0% → 0.0% |     64 KiB → 0 B |   1 → 0 | `createBuiltInTypes(SymbolHash, XSSimpleTypeDecl)`                  | `com.sun.org.apache.xerces.internal.impl.dv.xs.BaseSchemaDVFactory` |
| removed | -64.015 KiB | 82.0% → 0.0% |     64 KiB → 0 B |   1 → 0 | `createBuiltInTypes()`                                              | `com.sun.org.apache.xerces.internal.impl.dv.xs.SchemaDVFactoryImpl` |
| removed | -64.015 KiB | 82.0% → 0.0% |     64 KiB → 0 B |   1 → 0 | `<clinit>()`                                                        | `com.sun.org.apache.xerces.internal.impl.dv.xs.SchemaDVFactoryImpl` |
| removed | -64.015 KiB | 82.0% → 0.0% |     64 KiB → 0 B |   1 → 0 | `newInstance(String, ClassLoader, boolean)`                         | `com.sun.org.apache.xerces.internal.utils.ObjectFactory`            |
| removed | -64.015 KiB | 82.0% → 0.0% |     64 KiB → 0 B |   1 → 0 | `newInstance(String, boolean)`                                      | `com.sun.org.apache.xerces.internal.utils.ObjectFactory`            |
| removed | -64.015 KiB | 82.0% → 0.0% |     64 KiB → 0 B |   1 → 0 | `getInstance(String)`                                               | `com.sun.org.apache.xerces.internal.impl.dv.SchemaDVFactory`        |
| removed | -64.015 KiB | 82.0% → 0.0% |     64 KiB → 0 B |   1 → 0 | `getInstance()`                                                     | `com.sun.org.apache.xerces.internal.impl.dv.SchemaDVFactory`        |
