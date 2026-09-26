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
|     new |    +3 | 0.0% → 1.0% |   0 → 3 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000e801002c00`                        |
| +100.0% |    +3 | 1.0% → 2.1% |   3 → 6 | `prepare()`                                                                                   | `java.lang.invoke.LambdaForm`                                              |
| +300.0% |    +3 | 0.3% → 1.4% |   1 → 4 | `getReachableConfigSet(CharStream, ATNConfigSet, ATNConfigSet, int)`                          | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`                      |
|     new |    +3 | 0.0% → 1.0% |   0 → 3 | `sync(int)`                                                                                   | `groovyjarjarantlr4.v4.runtime.BufferedTokenStream`                        |
| +150.0% |    +3 | 0.7% → 1.7% |   2 → 5 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                                 | `java.util.zip.Inflater`                                                   |
| +300.0% |    +3 | 0.3% → 1.4% |   1 → 4 | `clone()`                                                                                     | `java.lang.Object`                                                         |
| +100.0% |    +3 | 1.0% → 2.1% |   3 → 6 | `hashCodeRange(int, int)`                                                                     | `java.util.ArrayList`                                                      |
|     new |    +3 | 0.0% → 1.0% |   0 → 3 | `hashCode()`                                                                                  | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`                              |
|     new |    +3 | 0.0% → 1.0% |   0 → 3 | `equals(Object)`                                                                              | `groovyjarjarantlr4.v4.runtime.atn.SingletonPredictionContext`             |
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
| removed |    -2 |  0.7% → 0.0% |   2 → 0 | `isInterface()`                                                                                               | `java.lang.Class`                                                          |
|  -66.7% |    -2 |  1.0% → 0.3% |   3 → 1 | `isAssignableFrom(Class)`                                                                                     | `java.lang.Class`                                                          |
|  -50.0% |    -2 |  1.4% → 0.7% |   4 → 2 | `closure(ATNConfigSet, ATNConfigSet, boolean, boolean, PredictionContextCache, boolean)`                      | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`                     |
|  -66.7% |    -2 |  1.0% → 0.3% |   3 → 1 | `collectViolations(SourceCode, RuleSet)`                                                                      | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| removed |    -2 |  0.7% → 0.0% |   2 → 0 | `mismatch(byte[], int, byte[], int, int)`                                                                     | `jdk.internal.util.ArraysSupport`                                          |
| removed |    -2 |  0.7% → 0.0% |   2 → 0 | `isSameMetaClass(MetaClass, Object)`                                                                          | `org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures`           |
|  -50.0% |    -2 |  1.4% → 0.7% |   4 → 2 | `get(Object)`                                                                                                 | `java.util.concurrent.ConcurrentHashMap`                                   |
| removed |    -2 |  0.7% → 0.0% |   2 → 0 | `cast(Object)`                                                                                                | `java.lang.Class`                                                          |

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
| removed |    -2 |  0.7% → 0.0% |   2 → 0 | `isInterface()`                                                                                               | `java.lang.Class`                                                          |
|  -66.7% |    -2 |  1.0% → 0.3% |   3 → 1 | `isAssignableFrom(Class)`                                                                                     | `java.lang.Class`                                                          |
|  -50.0% |    -2 |  1.4% → 0.7% |   4 → 2 | `closure(ATNConfigSet, ATNConfigSet, boolean, boolean, PredictionContextCache, boolean)`                      | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`                     |
| removed |    -2 |  0.7% → 0.0% |   2 → 0 | `mismatch(byte[], int, byte[], int, int)`                                                                     | `jdk.internal.util.ArraysSupport`                                          |
| removed |    -2 |  0.7% → 0.0% |   2 → 0 | `isSameMetaClass(MetaClass, Object)`                                                                          | `org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures`           |
|  -50.0% |    -2 |  1.4% → 0.7% |   4 → 2 | `get(Object)`                                                                                                 | `java.util.concurrent.ConcurrentHashMap`                                   |
| removed |    -2 |  0.7% → 0.0% |   2 → 0 | `cast(Object)`                                                                                                | `java.lang.Class`                                                          |
| removed |    -2 |  0.7% → 0.0% |   2 → 0 | `open0(String)`                                                                                               | `java.io.FileInputStream`                                                  |

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

|   Change | Delta |             % |   Samples | Function                                                                                         | Location                                                                   |
| -------: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| +1816.7% |  +109 |  2.0% → 39.7% |   6 → 115 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000e801141000`                        |
| +1012.5% |   +81 |  2.7% → 30.7% |    8 → 89 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000e8013d2000`                        |
| +7300.0% |   +73 |  0.3% → 25.5% |    1 → 74 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000e8012d8400`                        |
| +7200.0% |   +72 |  0.3% → 25.2% |    1 → 73 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000e801150800`                        |
| +1166.7% |   +70 |  2.0% → 26.2% |    6 → 76 | `guard(Object, Object)`                                                                          | `java.lang.invoke.LambdaForm$MH.0x000000e801104000`                        |
| +6500.0% |   +65 |  0.3% → 22.8% |    1 → 66 | `invoke(Object, Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000e801142000`                        |
| +2400.0% |   +48 |  0.7% → 17.2% |    2 → 50 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000e8010bc000`                        |
| +1366.7% |   +41 |  1.0% → 15.2% |    3 → 44 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000e80182f000`                        |
|  +181.8% |   +40 |  7.5% → 21.4% |   22 → 62 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000e80138d400`                        |
|   +72.0% |   +36 | 17.0% → 29.7% |   50 → 86 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000e801119400`                        |
| +3600.0% |   +36 |  0.3% → 12.8% |    1 → 37 | `invoke(Object, Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x000000e80160b800`                        |
|   +39.7% |   +31 | 26.5% → 37.6% |  78 → 109 | `invoke(Object, Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000e80113fc00`                        |
| +3000.0% |   +30 |  0.3% → 10.7% |    1 → 31 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000e801829c00`                        |
|   +27.6% |   +29 | 35.7% → 46.2% | 105 → 134 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                            |
|   +38.7% |   +24 | 21.1% → 29.7% |   62 → 86 | `applyTo(SourceCode)`                                                                            | `org.codenarc.rule.AbstractRule`                                           |
|   +37.1% |   +23 | 21.1% → 29.3% |   62 → 85 | `invokeInterface(Object, Object, Object)`                                                        | `java.lang.invoke.LambdaForm$DMH.0x000000e8010bd000`                       |
|   +29.2% |   +21 | 24.5% → 32.1% |   72 → 93 | `doCall(Object)`                                                                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
|   +33.3% |   +21 | 21.4% → 29.0% |   63 → 84 | `measureRuleProcessingTime(Rule, Closure)`                                                       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
|    +9.6% |   +19 | 67.3% → 74.8% | 198 → 217 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000e801115400`                        |
|   +25.4% |   +18 | 24.1% → 30.7% |   71 → 89 | `invokeVirtual(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$DMH.0x000000e80138c800`                       |

##### Standard library

|   Change | Delta |             % |   Samples | Function                                                                                         | Location                                             |
| -------: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| +1816.7% |  +109 |  2.0% → 39.7% |   6 → 115 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000e801141000`  |
| +1012.5% |   +81 |  2.7% → 30.7% |    8 → 89 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000e8013d2000`  |
| +7300.0% |   +73 |  0.3% → 25.5% |    1 → 74 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000e8012d8400`  |
| +7200.0% |   +72 |  0.3% → 25.2% |    1 → 73 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000e801150800`  |
| +1166.7% |   +70 |  2.0% → 26.2% |    6 → 76 | `guard(Object, Object)`                                                                          | `java.lang.invoke.LambdaForm$MH.0x000000e801104000`  |
| +6500.0% |   +65 |  0.3% → 22.8% |    1 → 66 | `invoke(Object, Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000e801142000`  |
| +2400.0% |   +48 |  0.7% → 17.2% |    2 → 50 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000e8010bc000`  |
| +1366.7% |   +41 |  1.0% → 15.2% |    3 → 44 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000e80182f000`  |
|  +181.8% |   +40 |  7.5% → 21.4% |   22 → 62 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000e80138d400`  |
|   +72.0% |   +36 | 17.0% → 29.7% |   50 → 86 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000e801119400`  |
| +3600.0% |   +36 |  0.3% → 12.8% |    1 → 37 | `invoke(Object, Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x000000e80160b800`  |
|   +39.7% |   +31 | 26.5% → 37.6% |  78 → 109 | `invoke(Object, Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000e80113fc00`  |
| +3000.0% |   +30 |  0.3% → 10.7% |    1 → 31 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000e801829c00`  |
|   +27.6% |   +29 | 35.7% → 46.2% | 105 → 134 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
|   +37.1% |   +23 | 21.1% → 29.3% |   62 → 85 | `invokeInterface(Object, Object, Object)`                                                        | `java.lang.invoke.LambdaForm$DMH.0x000000e8010bd000` |
|    +9.6% |   +19 | 67.3% → 74.8% | 198 → 217 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000e801115400`  |
|   +25.4% |   +18 | 24.1% → 30.7% |   71 → 89 | `invokeVirtual(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$DMH.0x000000e80138c800` |
|  +283.3% |   +17 |   2.0% → 7.9% |    6 → 23 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000e801145c00`  |
|  +850.0% |   +17 |   0.7% → 6.6% |    2 → 19 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000e801105400`  |
| +1700.0% |   +17 |   0.3% → 6.2% |    1 → 18 | `invoke(Object, Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x000000e8012b8800`  |

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

| Change | Delta |             % |  Samples | Function                                                | Location                                             |
| -----: | ----: | ------------: | -------: | ------------------------------------------------------- | ---------------------------------------------------- |
| -98.8% |   -83 |  28.6% → 0.3% |   84 → 1 | `invoke(Object, Object)`                                | `java.lang.invoke.LambdaForm$MH.0x000000e801088000`  |
| -98.8% |   -81 |  27.9% → 0.3% |   82 → 1 | `invoke(Object, Object)`                                | `java.lang.invoke.LambdaForm$MH.0x000000e80122d400`  |
| -90.8% |   -79 |  29.6% → 2.8% |   87 → 8 | `guard(Object, Object)`                                 | `java.lang.invoke.LambdaForm$MH.0x000000e801136c00`  |
| -98.5% |   -65 |  22.4% → 0.3% |   66 → 1 | `invoke(Object, Object, Object, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000e80141c400`  |
| -98.3% |   -58 |  20.1% → 0.3% |   59 → 1 | `invoke(Object, Object)`                                | `java.lang.invoke.LambdaForm$MH.0x000000e8012d0800`  |
| -83.8% |   -57 |  23.1% → 3.8% |  68 → 11 | `invoke(Object, Object, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000e80138c400`  |
| -84.8% |   -56 |  22.4% → 3.4% |  66 → 10 | `invoke(Object, Object)`                                | `java.lang.invoke.LambdaForm$MH.0x000000e801134400`  |
| -96.2% |   -50 |  17.7% → 0.7% |   52 → 2 | `invoke(Object, Object)`                                | `java.lang.invoke.LambdaForm$MH.0x000000e8012c4400`  |
| -83.9% |   -47 |  19.0% → 3.1% |   56 → 9 | `invoke(Object, Object, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000e801179800`  |
| -97.1% |   -33 |  11.6% → 0.3% |   34 → 1 | `invoke(Object, Object, Object, Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000e801421800`  |
| -96.9% |   -31 |  10.9% → 0.3% |   32 → 1 | `invoke(Object, Object)`                                | `java.lang.invoke.LambdaForm$MH.0x000000e801630800`  |
| -96.7% |   -29 |  10.2% → 0.3% |   30 → 1 | `invoke(Object, Object)`                                | `java.lang.invoke.LambdaForm$MH.0x000000e801393400`  |
| -25.9% |   -29 | 38.1% → 28.6% | 112 → 83 | `invoke(Object, Object, Object, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000e8012ac800`  |
| -93.1% |   -27 |   9.9% → 0.7% |   29 → 2 | `invoke(Object, Object, Object, Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000e80147f800`  |
| -52.4% |   -22 |  14.3% → 6.9% |  42 → 20 | `invoke(Object, Object, Object, Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000e8012b8400`  |
| -94.7% |   -18 |   6.5% → 0.3% |   19 → 1 | `invoke(Object, Object)`                                | `java.lang.invoke.LambdaForm$MH.0x000000e801461400`  |
| -28.3% |   -17 | 20.4% → 14.8% |  60 → 43 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000e80118e800` |
| -94.1% |   -16 |   5.8% → 0.3% |   17 → 1 | `invoke(Object, Object)`                                | `java.lang.invoke.LambdaForm$MH.0x000000e801490400`  |
| -16.0% |   -16 | 34.0% → 29.0% | 100 → 84 | `invokeVirtual(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$DMH.0x000000e8010bc800` |
| -19.5% |   -16 | 27.9% → 22.8% |  82 → 66 | `linkToCallSite(Object, Object, Object, Object)`        | `java.lang.invoke.Invokers$Holder`                   |

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

|     Change |        Delta |             % |                Size |     Samples | Function                                 | Location                                            |
| ---------: | -----------: | ------------: | ------------------: | ----------: | ---------------------------------------- | --------------------------------------------------- |
| +114049.8% |   +7.667 GiB |  0.1% → 63.9% | 6.88 MiB → 7.67 GiB |   8 → 3,996 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000e801115400` |
|    +896.7% |   +4.076 GiB |  3.8% → 37.7% |  465 MiB → 4.53 GiB | 208 → 2,353 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000e8012ac800` |
| +288064.2% |   +3.665 GiB | <0.1% → 30.5% |  1.3 MiB → 3.67 GiB |   1 → 1,900 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000e8013db800` |
| +252213.3% |   +3.319 GiB | <0.1% → 27.6% | 1.35 MiB → 3.32 GiB |   2 → 1,731 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000e8013d2000` |
|  +50005.0% |   +2.879 GiB | <0.1% → 24.0% |  5.9 MiB → 2.89 GiB |   9 → 1,513 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000e801140c00` |
|  +72267.4% |   +2.821 GiB | <0.1% → 23.5% |    4 MiB → 2.83 GiB |   1 → 1,403 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000e801829c00` |
|   +5938.9% |   +2.617 GiB |  0.4% → 22.2% | 45.1 MiB → 2.66 GiB |  27 → 1,386 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000e8013dbc00` |
|    +411.8% |   +2.598 GiB |  5.3% → 26.9% |  646 MiB → 3.23 GiB | 322 → 1,742 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000e801141000` |
|    +591.8% |   +1.571 GiB |  2.2% → 15.3% |  272 MiB → 1.84 GiB |   150 → 882 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000e8010bc000` |
|   +1684.3% |   +1.215 GiB |  0.6% → 10.7% | 73.9 MiB → 1.29 GiB |    58 → 718 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000e8012c5400` |
|    +273.2% |   +1.161 GiB |  3.6% → 13.2% |  435 MiB → 1.59 GiB |   220 → 830 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000e801117000` |
|  +85601.9% |   +1.061 GiB |  <0.1% → 8.8% | 1.27 MiB → 1.06 GiB |     1 → 549 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000e801397800` |
|  +27148.8% | +962.406 MiB |  <0.1% → 7.9% |  3.54 MiB → 966 MiB |     4 → 498 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000e801150800` |
|  +22402.9% | +895.541 MiB |  <0.1% → 7.3% |     4 MiB → 900 MiB |     2 → 435 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000e80160b400` |
|  +18248.0% | +729.563 MiB |  <0.1% → 6.0% |     4 MiB → 734 MiB |     1 → 364 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000e80182f000` |
|  +17399.8% | +695.642 MiB |  <0.1% → 5.7% |     4 MiB → 700 MiB |     2 → 341 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000e801608800` |
|  +90284.2% | +671.125 MiB |  <0.1% → 5.5% |   761 KiB → 672 MiB |     1 → 336 | `invoke(Object, int)`                    | `java.lang.invoke.LambdaForm$MH.0x000000e80109bc00` |
|   +1312.7% | +620.456 MiB |   0.4% → 5.4% |  47.3 MiB → 668 MiB |    37 → 341 | `invoke(Object, Object, long)`           | `java.lang.invoke.LambdaForm$MH.0x000000e801390800` |
|   +7671.7% | +513.452 MiB |   0.1% → 4.2% |  6.69 MiB → 520 MiB |     4 → 222 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000e80118c000` |
|   +4421.3% | +503.187 MiB |   0.1% → 4.2% |  11.4 MiB → 515 MiB |     6 → 249 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000e8012c6400` |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Standard library

|  Change |        Delta |             % |                Size |     Samples | Function                                 | Location                                            |
| ------: | -----------: | ------------: | ------------------: | ----------: | ---------------------------------------- | --------------------------------------------------- |
|  -85.4% |   -6.424 GiB |  63.6% → 9.1% |  7.52 GiB → 1.1 GiB | 3,968 → 575 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000e8012d8400` |
| -100.0% |   -4.564 GiB | 38.6% → <0.1% |  4.56 GiB → 306 KiB |   2,399 → 1 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000e80122f400` |
|  -96.4% |   -3.526 GiB |  30.9% → 1.1% |  3.66 GiB → 133 MiB |  1,911 → 33 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000e8013e8000` |
|  -99.6% |   -3.157 GiB |  26.8% → 0.1% | 3.17 GiB → 12.9 MiB |  1,750 → 14 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000e801000400` |
|  -86.5% |   -2.899 GiB |  28.3% → 3.8% |  3.35 GiB → 463 MiB | 1,765 → 234 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000e801133400` |
|  -94.3% |   -2.819 GiB |  25.3% → 1.4% |  2.99 GiB → 174 MiB | 1,597 → 149 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000e801005400` |
|  -99.6% |   -2.701 GiB |  22.9% → 0.1% |   2.71 GiB → 10 MiB |   1,349 → 5 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000e80178d400` |
|  -90.7% |   -2.393 GiB |  22.3% → 2.0% |  2.64 GiB → 251 MiB | 1,392 → 124 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000e801179800` |
|  -99.6% |   -1.256 GiB | 10.7% → <0.1% |  1.26 GiB → 5.7 MiB |     709 → 4 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000e8012d0800` |
|  -66.5% |   -1.183 GiB |  15.1% → 5.0% |  1.78 GiB → 611 MiB |   866 → 319 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000e801145c00` |
|  -97.5% |   -1.087 GiB |   9.4% → 0.2% | 1.12 GiB → 28.5 MiB |    587 → 34 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000e80122c000` |
|  -67.9% |   -1.046 GiB |  13.0% → 4.1% |  1.54 GiB → 508 MiB |   804 → 256 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000e80138c400` |
|  -99.2% | -775.515 MiB |  6.5% → <0.1% |     782 MiB → 6 MiB |     385 → 2 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000e8014b1400` |
|  -99.5% | -731.666 MiB |  6.1% → <0.1% |     736 MiB → 4 MiB |     362 → 2 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000e8017e6c00` |
|  -69.6% | -696.146 MiB |   8.3% → 2.5% | 1,000 MiB → 304 MiB |   519 → 158 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000e801133c00` |
|  -99.1% | -661.271 MiB |  5.5% → <0.1% |     667 MiB → 6 MiB |     333 → 3 | `invoke(Object, int)`                    | `java.lang.invoke.LambdaForm$MH.0x000000e801278400` |
|  -68.3% |  -645.49 MiB |   7.8% → 2.4% |   946 MiB → 300 MiB |   483 → 149 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000e8012ae000` |
|  -91.0% | -632.423 MiB |   5.7% → 0.5% |  695 MiB → 62.4 MiB |    350 → 43 | `invoke(Object, Object, long)`           | `java.lang.invoke.LambdaForm$MH.0x000000e801390000` |
|  -98.7% | -619.592 MiB |   5.2% → 0.1% |     628 MiB → 8 MiB |     308 → 4 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000e80154d400` |
|  -99.0% | -470.709 MiB |  3.9% → <0.1% |  475 MiB → 4.78 MiB |     220 → 5 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000e801185000` |

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

|    Change |      Delta |             % |             Size | Objects | Function                                      | Location                                                                  |
| --------: | ---------: | ------------: | ---------------: | ------: | --------------------------------------------- | ------------------------------------------------------------------------- |
|  +2050.0% | +4.804 KiB |  0.1% → 27.5% | 240 B → 5.04 KiB |  6 → 10 | `getDefaultMetaClass()`                       | `groovy.lang.GroovyObjectSupport`                                         |
|  +2050.0% | +4.804 KiB |  0.1% → 27.5% | 240 B → 5.04 KiB |  6 → 10 | `<init>()`                                    | `groovy.lang.GroovyObjectSupport`                                         |
|  +2392.0% | +4.671 KiB |  0.1% → 26.6% | 200 B → 4.87 KiB |   5 → 9 | `<init>(Object, Object)`                      | `groovy.lang.Closure`                                                     |
|  +2364.0% | +4.617 KiB |  0.1% → 26.3% | 200 B → 4.81 KiB |   5 → 7 | `<init>(int, boolean)`                        | `org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl`             |
|  +2364.0% | +4.617 KiB |  0.1% → 26.3% | 200 B → 4.81 KiB |   5 → 7 | `<init>()`                                    | `org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl`             |
|  +2364.0% | +4.617 KiB |  0.1% → 26.3% | 200 B → 4.81 KiB |   5 → 7 | `<clinit>()`                                  | `groovy.lang.GroovySystem`                                                |
|  +2364.0% | +4.617 KiB |  0.1% → 26.3% | 200 B → 4.81 KiB |   5 → 7 | `<clinit>()`                                  | `org.codehaus.groovy.runtime.InvokerHelper`                               |
|  +2364.0% | +4.617 KiB |  0.1% → 26.3% | 200 B → 4.81 KiB |   5 → 7 | `<init>(Object)`                              | `groovy.lang.Closure`                                                     |
|  +2364.0% | +4.617 KiB |  0.1% → 26.3% | 200 B → 4.81 KiB |   5 → 7 | `<init>(Object)`                              | `groovy.lang.Closure$1`                                                   |
| +14700.0% | +4.593 KiB | <0.1% → 25.3% |  32 B → 4.63 KiB |   1 → 4 | `forEachRemaining(Consumer)`                  | `java.util.Spliterators$ArraySpliterator`                                 |
| +14650.0% | +4.578 KiB | <0.1% → 25.2% |  32 B → 4.61 KiB |   1 → 4 | `<init>(Class, ClassInfo)`                    | `org.codehaus.groovy.reflection.stdclasses.CachedClosureClass`            |
|  +5850.0% |  +4.57 KiB | <0.1% → 25.4% |  80 B → 4.65 KiB |   2 → 5 | `accept(Object)`                              | `java.util.stream.ReferencePipeline$2$1`                                  |
|  +8357.1% |  +4.57 KiB | <0.1% → 25.3% |  56 B → 4.63 KiB |   2 → 4 | `evaluate(Spliterator, boolean, IntFunction)` | `java.util.stream.AbstractPipeline`                                       |
|  +8357.1% |  +4.57 KiB | <0.1% → 25.3% |  56 B → 4.63 KiB |   2 → 4 | `evaluateToArrayNode(IntFunction)`            | `java.util.stream.AbstractPipeline`                                       |
|  +8357.1% |  +4.57 KiB | <0.1% → 25.3% |  56 B → 4.63 KiB |   2 → 4 | `toArray(IntFunction)`                        | `java.util.stream.ReferencePipeline`                                      |
| +14500.0% | +4.531 KiB | <0.1% → 24.9% |  32 B → 4.56 KiB |   1 → 3 | `<clinit>()`                                  | `org.codehaus.groovy.reflection.ReflectionUtils`                          |
| +14500.0% | +4.531 KiB | <0.1% → 24.9% |  32 B → 4.56 KiB |   1 → 3 | `lambda$initValue$1(Method)`                  | `org.codehaus.groovy.reflection.CachedClass$3`                            |
| +14500.0% | +4.531 KiB | <0.1% → 24.9% |  32 B → 4.56 KiB |   1 → 3 | `test(Object)`                                | `org.codehaus.groovy.reflection.CachedClass$3$$Lambda.0x000000e801086ae0` |
|  +3860.0% | +4.523 KiB | <0.1% → 25.4% | 120 B → 4.64 KiB |   2 → 5 | `createCachedClass(Class, ClassInfo)`         | `org.codehaus.groovy.reflection.ClassInfo`                                |
|  +3860.0% | +4.523 KiB | <0.1% → 25.4% | 120 B → 4.64 KiB |   2 → 5 | `access$300(Class, ClassInfo)`                | `org.codehaus.groovy.reflection.ClassInfo`                                |

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
|  -93.6% |  -68.562 KiB | 22.0% → 25.8% | 73.3 KiB → 4.72 KiB |   84 → 73 | `reinvoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e801118000`  |
|  -89.9% |  -67.851 KiB | 22.7% → 41.7% | 75.5 KiB → 7.64 KiB |  117 → 98 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x000000e801117800`  |
|  -90.0% |   -67.71 KiB | 22.6% → 41.2% | 75.3 KiB → 7.54 KiB |  114 → 96 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x000000e801118400`  |
|  -89.2% |  -67.593 KiB | 22.7% → 44.5% | 75.7 KiB → 8.15 KiB | 121 → 105 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
|  -89.1% |  -67.453 KiB | 22.7% → 45.1% | 75.7 KiB → 8.26 KiB | 121 → 107 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800` |
|  -89.0% |  -67.406 KiB | 22.7% → 45.4% |  75.7 KiB → 8.3 KiB | 121 → 108 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
|  -99.8% |  -64.796 KiB |  19.5% → 0.7% |    64.9 KiB → 136 B |    29 → 2 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000e801133c00`  |
