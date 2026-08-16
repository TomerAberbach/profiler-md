# Sampling profile diff

Collected 368 samples → 327 samples (-41 samples, -11.1%).

| Category         | Change | Delta |             % |   Samples |
| ---------------- | -----: | ----: | ------------: | --------: |
| Standard library |  -9.0% |   -32 | 96.7% → 99.1% | 356 → 324 |
| Ours             | -75.0% |    -9 |   3.3% → 0.9% |    12 → 3 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                                                     | Location                                                       |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| +450.0% |    +9 | 0.5% → 3.4% |  2 → 11 | `resize()`                                                                                   | `java.util.HashMap`                                            |
| +600.0% |    +6 | 0.3% → 2.1% |   1 → 7 | `getReturnState(int)`                                                                        | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext`     |
|     new |    +6 | 0.0% → 1.8% |   0 → 6 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`  | `java.lang.invoke.LambdaForm$DMH.0x000000c0010b2800`           |
|     new |    +5 | 0.0% → 1.5% |   0 → 5 | `equals(Object, Object)`                                                                     | `groovyjarjarantlr4.v4.runtime.misc.ObjectEqualityComparator`  |
| +400.0% |    +4 | 0.3% → 1.5% |   1 → 5 | `add(ATNConfig, PredictionContextCache)`                                                     | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`               |
|  +80.0% |    +4 | 1.4% → 2.8% |   5 → 9 | `getEpsilonTarget(ATNConfig, Transition, boolean, boolean, PredictionContextCache, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`         |
|  +42.9% |    +3 | 1.9% → 3.1% |  7 → 10 | `get(Object)`                                                                                | `java.util.concurrent.ConcurrentHashMap`                       |
|     new |    +3 | 0.0% → 0.9% |   0 → 3 | `list0(File)`                                                                                | `java.io.UnixFileSystem`                                       |
|     new |    +3 | 0.0% → 0.9% |   0 → 3 | `equals(Object)`                                                                             | `groovyjarjarantlr4.v4.runtime.atn.SingletonPredictionContext` |
| +200.0% |    +2 | 0.3% → 0.9% |   1 → 3 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                                | `java.util.zip.Inflater`                                       |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `collectViolations(SourceCode, RuleSet)`                                                     | `org.codenarc.analyzer.AbstractSourceAnalyzer`                 |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `invokeVirtual(Object, Object, Object)`                                                      | `java.lang.invoke.DirectMethodHandle$Holder`                   |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `expression(int)`                                                                            | `org.apache.groovy.parser.antlr4.GroovyParser`                 |
| +200.0% |    +2 | 0.3% → 0.9% |   1 → 3 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)`                    | `java.lang.invoke.MethodHandleImpl`                            |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `equals(MethodType)`                                                                         | `java.lang.invoke.MethodType`                                  |
| +200.0% |    +2 | 0.3% → 0.9% |   1 → 3 | `<init>(Method, boolean)`                                                                    | `java.lang.invoke.MemberName`                                  |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `getMethodsRecursive(String, Class[], boolean)`                                              | `java.lang.Class`                                              |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `toArray(IntFunction)`                                                                       | `java.util.stream.ReferencePipeline`                           |
| +200.0% |    +2 | 0.3% → 0.9% |   1 → 3 | `sameClasses(Class[], Object[], boolean)`                                                    | `org.codehaus.groovy.runtime.MetaClassHelper`                  |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `nextNode()`                                                                                 | `java.util.HashMap$HashIterator`                               |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                     | Location                                                       |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| +450.0% |    +9 | 0.5% → 3.4% |  2 → 11 | `resize()`                                                                                   | `java.util.HashMap`                                            |
| +600.0% |    +6 | 0.3% → 2.1% |   1 → 7 | `getReturnState(int)`                                                                        | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext`     |
|     new |    +6 | 0.0% → 1.8% |   0 → 6 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`  | `java.lang.invoke.LambdaForm$DMH.0x000000c0010b2800`           |
|     new |    +5 | 0.0% → 1.5% |   0 → 5 | `equals(Object, Object)`                                                                     | `groovyjarjarantlr4.v4.runtime.misc.ObjectEqualityComparator`  |
| +400.0% |    +4 | 0.3% → 1.5% |   1 → 5 | `add(ATNConfig, PredictionContextCache)`                                                     | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`               |
|  +80.0% |    +4 | 1.4% → 2.8% |   5 → 9 | `getEpsilonTarget(ATNConfig, Transition, boolean, boolean, PredictionContextCache, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`         |
|  +42.9% |    +3 | 1.9% → 3.1% |  7 → 10 | `get(Object)`                                                                                | `java.util.concurrent.ConcurrentHashMap`                       |
|     new |    +3 | 0.0% → 0.9% |   0 → 3 | `list0(File)`                                                                                | `java.io.UnixFileSystem`                                       |
|     new |    +3 | 0.0% → 0.9% |   0 → 3 | `equals(Object)`                                                                             | `groovyjarjarantlr4.v4.runtime.atn.SingletonPredictionContext` |
| +200.0% |    +2 | 0.3% → 0.9% |   1 → 3 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                                | `java.util.zip.Inflater`                                       |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `invokeVirtual(Object, Object, Object)`                                                      | `java.lang.invoke.DirectMethodHandle$Holder`                   |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `expression(int)`                                                                            | `org.apache.groovy.parser.antlr4.GroovyParser`                 |
| +200.0% |    +2 | 0.3% → 0.9% |   1 → 3 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)`                    | `java.lang.invoke.MethodHandleImpl`                            |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `equals(MethodType)`                                                                         | `java.lang.invoke.MethodType`                                  |
| +200.0% |    +2 | 0.3% → 0.9% |   1 → 3 | `<init>(Method, boolean)`                                                                    | `java.lang.invoke.MemberName`                                  |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `getMethodsRecursive(String, Class[], boolean)`                                              | `java.lang.Class`                                              |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `toArray(IntFunction)`                                                                       | `java.util.stream.ReferencePipeline`                           |
| +200.0% |    +2 | 0.3% → 0.9% |   1 → 3 | `sameClasses(Class[], Object[], boolean)`                                                    | `org.codehaus.groovy.runtime.MetaClassHelper`                  |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `nextNode()`                                                                                 | `java.util.HashMap$HashIterator`                               |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `isQualified()`                                                                              | `java.lang.module.ModuleDescriptor$Exports`                    |

##### Ours

| Change | Delta |           % | Samples | Function                                 | Location                                       |
| -----: | ----: | ----------: | ------: | ---------------------------------------- | ---------------------------------------------- |
|    new |    +2 | 0.0% → 0.6% |   0 → 2 | `collectViolations(SourceCode, RuleSet)` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `<init>()`                               | `org.codenarc.rule.Violation`                  |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                                                      | Location                                                                   |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
|  -44.0% |   -22 | 13.6% → 8.6% | 50 → 28 | `newArray(Class, int)`                                                                                        | `java.lang.reflect.Array`                                                  |
| removed |    -6 |  1.6% → 0.0% |   6 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x000000a8010b2800`                       |
|  -60.0% |    -6 |  2.7% → 1.2% |  10 → 4 | `putVal(int, Object, Object, boolean, boolean)`                                                               | `java.util.HashMap`                                                        |
|  -85.7% |    -6 |  1.9% → 0.3% |   7 → 1 | `getReachableTarget(Transition, int)`                                                                         | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`                      |
|  -66.7% |    -4 |  1.6% → 0.6% |   6 → 2 | `join(PredictionContext, PredictionContext, PredictionContextCache)`                                          | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`                      |
|  -57.1% |    -4 |  1.9% → 0.9% |   7 → 3 | `getReachableConfigSet(CharStream, ATNConfigSet, ATNConfigSet, int)`                                          | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`                      |
| removed |    -3 |  0.8% → 0.0% |   3 → 0 | `apply(Object, Object)`                                                                                       | `org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x000000a80118ab48` |
| removed |    -3 |  0.8% → 0.0% |   3 → 0 | `cast(Object)`                                                                                                | `java.lang.Class`                                                          |
|  -37.5% |    -3 |  2.2% → 1.5% |   8 → 5 | `prepare()`                                                                                                   | `java.lang.invoke.LambdaForm`                                              |
|  -75.0% |    -3 |  1.1% → 0.3% |   4 → 1 | `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)`                                                  | `java.math.MutableBigInteger`                                              |
|  -75.0% |    -3 |  1.1% → 0.3% |   4 → 1 | `divideOneWord(int, MutableBigInteger)`                                                                       | `java.math.MutableBigInteger`                                              |
| removed |    -2 |  0.5% → 0.0% |   2 → 0 | `invokeMethod(Class, Object, String, Object[], boolean, boolean)`                                             | `org.codehaus.groovy.runtime.metaclass.ClosureMetaClass`                   |
|  -20.0% |    -2 |  2.7% → 2.4% |  10 → 8 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`                     |
|  -16.7% |    -2 |  3.3% → 3.1% | 12 → 10 | `getNode(Object)`                                                                                             | `java.util.HashMap`                                                        |
| removed |    -2 |  0.5% → 0.0% |   2 → 0 | `compare(Method, Method)`                                                                                     | `com.sun.beans.introspect.MethodInfo$MethodOrder`                          |
|  -50.0% |    -2 |  1.1% → 0.6% |   4 → 2 | `valueConversion(Class, Class, boolean, boolean)`                                                             | `java.lang.invoke.MethodHandleImpl`                                        |
|  -66.7% |    -2 |  0.8% → 0.3% |   3 → 1 | `equals(Object[], Object[])`                                                                                  | `java.util.Arrays`                                                         |
|  -66.7% |    -2 |  0.8% → 0.3% |   3 → 1 | `init(MemberName, Object)`                                                                                    | `java.lang.invoke.MethodHandleNatives`                                     |
|  -66.7% |    -2 |  0.8% → 0.3% |   3 → 1 | `makeReinvokerForm(MethodHandle, int, Object, boolean, LambdaForm$NamedFunction, LambdaForm$NamedFunction)`   | `java.lang.invoke.DelegatingMethodHandle`                                  |
| removed |    -2 |  0.5% → 0.0% |   2 → 0 | `getChild(Class, int)`                                                                                        | `groovyjarjarantlr4.v4.runtime.ParserRuleContext`                          |

##### Ours

|  Change | Delta |           % | Samples | Function                                                         | Location                                                                                 |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `init()`                                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                              |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `applyTo(SourceCode, List)`                                      | `org.codenarc.rule.AbstractAstVisitorRule`                                               |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `getMetaClass()`                                                 | `org.codenarc.rule.unnecessary.UnnecessaryCastRule`                                      |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `flexibleCheckForCorrectColumn(ASTNode, String, BlockStatement)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                                     |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `super$2$visitClosureExpression(ClosureExpression)`              | `org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`                         |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `getName()`                                                      | `org.codenarc.rule.basic.ConstantTernaryExpressionRule`                                  |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `visitBinaryExpression(BinaryExpression)`                        | `org.codenarc.rule.unnecessary.UnnecessaryCallForLastElementAstVisitor`                  |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `<init>(Object, Object)`                                         | `org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor$_visitClassComplete_closure5` |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `getMetaClass()`                                                 | `org.codenarc.rule.basic.DuplicateMapKeyRule`                                            |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `super$4$visitClassEx(ClassNode)`                                | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`                    |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `call(Object)`                                                   | `java_util_Map$isEmpty`                                                                  |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `visitNotExpression(NotExpression)`                              | `org.codenarc.rule.basic.MultipleUnaryOperatorsAstVisitor`                               |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

##### Standard library

| Change | Delta |            % | Samples | Function                                                                                    | Location                                             |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new |  +284 | 0.0% → 86.9% | 0 → 284 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000c0010b2800` |
|    new |  +233 | 0.0% → 71.3% | 0 → 233 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c001117800`  |
|    new |  +231 | 0.0% → 70.6% | 0 → 231 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000c001118400`  |
|    new |  +218 | 0.0% → 66.7% | 0 → 218 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000c001115400`  |
|    new |  +167 | 0.0% → 51.1% | 0 → 167 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000c001118000`  |
|    new |  +124 | 0.0% → 37.9% | 0 → 124 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000c0010bd400` |
|    new |  +121 | 0.0% → 37.0% | 0 → 121 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000c001140400`  |
|    new |  +120 | 0.0% → 36.7% | 0 → 120 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c00113fc00`  |
|    new |  +115 | 0.0% → 35.2% | 0 → 115 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000c00118d400`  |
|    new |  +104 | 0.0% → 31.8% | 0 → 104 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000c0010bc800` |
|    new |  +102 | 0.0% → 31.2% | 0 → 102 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c001141000`  |
|    new |   +99 | 0.0% → 30.3% |  0 → 99 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000c00118d000`  |
|    new |   +93 | 0.0% → 28.4% |  0 → 93 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000c00138cc00` |
|    new |   +92 | 0.0% → 28.1% |  0 → 92 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000c001102400`  |
|    new |   +87 | 0.0% → 26.6% |  0 → 87 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000c001104000`  |
|    new |   +86 | 0.0% → 26.3% |  0 → 86 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c0012ac800`  |
|    new |   +85 | 0.0% → 26.0% |  0 → 85 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000c0013d3000`  |
|    new |   +83 | 0.0% → 25.4% |  0 → 83 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c001142000`  |
|    new |   +82 | 0.0% → 25.1% |  0 → 82 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c001150800`  |
|    new |   +79 | 0.0% → 24.2% |  0 → 79 | `invokeVirtual(Object, Object, int)`                                                        | `java.lang.invoke.LambdaForm$DMH.0x000000c001152800` |

##### Ours

|  Change | Delta |           % | Samples | Function                                     | Location                                                                                          |
| ------: | ----: | ----------: | ------: | -------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  +90.9% |   +10 | 3.0% → 6.4% | 11 → 21 | `doCall(Object)`                             | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`                       |
|     new |    +7 | 0.0% → 2.1% |   0 → 7 | `checkDeclaration(ASTNode, String, String)`  | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`                               |
|     new |    +6 | 0.0% → 1.8% |   0 → 6 | `processDirectory(String, RuleSet)`          | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                                                  |
|     new |    +6 | 0.0% → 1.8% |   0 → 6 | `findLineWithDeclaration(ASTNode, String)`   | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`                               |
|     new |    +6 | 0.0% → 1.8% |   0 → 6 | `calculate(MethodNode, SourceCode)`          | `org.gmetrics.metric.abc.AbcMetric`                                                               |
| +500.0% |    +5 | 0.3% → 1.8% |   1 → 6 | `doCall(Object)`                             | `org.gmetrics.metric.AbstractMethodMetric$_addMethodsToMetricResults_closure4`                    |
| +400.0% |    +4 | 0.3% → 1.5% |   1 → 5 | `visitClass(ClassNode)`                      | `org.codenarc.rule.AbstractMethodVisitor`                                                         |
|     new |    +4 | 0.0% → 1.2% |   0 → 4 | `visitMethodEx(MethodNode)`                  | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`                               |
|     new |    +4 | 0.0% → 1.2% |   0 → 4 | `visitClassEx(ClassNode)`                    | `org.codenarc.rule.formatting.IndentationAstVisitor`                                              |
| +300.0% |    +3 | 0.3% → 1.2% |   1 → 4 | `line(int)`                                  | `org.codenarc.source.AbstractSourceCode`                                                          |
|     new |    +3 | 0.0% → 0.9% |   0 → 3 | `visitClassEx(ClassNode)`                    | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`                               |
|     new |    +3 | 0.0% → 0.9% |   0 → 3 | `doCall(Object)`                             | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor$_processMethodOrConstructorCall_closure3` |
|     new |    +3 | 0.0% → 0.9% |   0 → 3 | `processMethodOrConstructorCall(MethodCall)` | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                                          |
| +200.0% |    +2 | 0.3% → 0.9% |   1 → 3 | `doCall(Object)`                             | `org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`                                |
|  +66.7% |    +2 | 0.8% → 1.5% |   3 → 5 | `getText()`                                  | `org.codenarc.source.SourceFile`                                                                  |
| +200.0% |    +2 | 0.3% → 0.9% |   1 → 3 | `addViolation(ASTNode, String)`              | `org.codenarc.rule.AbstractAstVisitor`                                                            |
| +200.0% |    +2 | 0.3% → 0.9% |   1 → 3 | `checkNode(ASTNode)`                         | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`                                    |
| +200.0% |    +2 | 0.3% → 0.9% |   1 → 3 | `super$3$applyTo(SourceCode, List)`          | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`                                          |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `<clinit>()`                                 | `org.codenarc.CodeNarc`                                                                           |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `getLines()`                                 | `org.codenarc.source.AbstractSourceCode`                                                          |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                                    | Location                                             |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -335 | 91.0% → 0.0% | 335 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a8010b2800` |
| removed |  -272 | 73.9% → 0.0% | 272 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a801117800`  |
| removed |  -272 | 73.9% → 0.0% | 272 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000a801118400`  |
| removed |  -269 | 73.1% → 0.0% | 269 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a801115400`  |
| removed |  -204 | 55.4% → 0.0% | 204 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000a801118000`  |
| removed |  -159 | 43.2% → 0.0% | 159 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000a8010bd400` |
| removed |  -156 | 42.4% → 0.0% | 156 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a80113fc00`  |
| removed |  -151 | 41.0% → 0.0% | 151 → 0 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000a801140400`  |
| removed |  -147 | 39.9% → 0.0% | 147 → 0 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000a80118d400`  |
| removed |  -132 | 35.9% → 0.0% | 132 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a801141000`  |
| removed |  -127 | 34.5% → 0.0% | 127 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000a80138cc00` |
| removed |  -119 | 32.3% → 0.0% | 119 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000a8010bc800` |
| removed |  -119 | 32.3% → 0.0% | 119 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a8013d3000`  |
| removed |  -117 | 31.8% → 0.0% | 117 → 0 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000a80118d000`  |
| removed |  -116 | 31.5% → 0.0% | 116 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a8012ac800`  |
| removed |  -111 | 30.2% → 0.0% | 111 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a801119400`  |
| removed |  -107 | 29.1% → 0.0% | 107 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a801140c00`  |
| removed |  -105 | 28.5% → 0.0% | 105 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a801142000`  |
| removed |  -104 | 28.3% → 0.0% | 104 → 0 | `invokeInterface(Object, Object, Object)`                                                   | `java.lang.invoke.LambdaForm$DMH.0x000000a8010bd000` |
| removed |  -101 | 27.4% → 0.0% | 101 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a8013dd000`  |

##### Ours

|  Change | Delta |             % |  Samples | Function                                                         | Location                                                                   |
| ------: | ----: | ------------: | -------: | ---------------------------------------------------------------- | -------------------------------------------------------------------------- |
|  -31.0% |   -36 | 31.5% → 24.5% | 116 → 80 | `measureRuleProcessingTime(Rule, Closure)`                       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
|  -26.2% |   -33 | 34.2% → 28.4% | 126 → 93 | `doCall(Object)`                                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
|  -30.1% |   -31 | 28.0% → 22.0% | 103 → 72 | `applyTo(SourceCode)`                                            | `org.codenarc.rule.AbstractRule`                                           |
|  -27.9% |   -24 | 23.4% → 19.0% |  86 → 62 | `applyTo(SourceCode, List)`                                      | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
|  -27.8% |   -20 | 19.6% → 15.9% |  72 → 52 | `collectViolations(SourceCode, RuleSet)`                         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
|  -25.0% |   -19 | 20.7% → 17.4% |  76 → 57 | `visitClass(ClassNode)`                                          | `org.codenarc.rule.AbstractAstVisitor`                                     |
|  -30.5% |   -18 | 16.0% → 12.5% |  59 → 41 | `visitMethod(MethodNode)`                                        | `org.codenarc.rule.AbstractAstVisitor`                                     |
|  -12.1% |    -7 | 15.8% → 15.6% |  58 → 51 | `processFile(String, DirectoryResults, RuleSet)`                 | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                           |
|  -10.9% |    -6 | 14.9% → 15.0% |  55 → 49 | `getAst()`                                                       | `org.codenarc.source.AbstractSourceCode`                                   |
|  -11.5% |    -6 |         14.1% |  52 → 46 | `isRuleSuppressed(Rule)`                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
|  -50.0% |    -6 |   3.3% → 1.8% |   12 → 6 | `doCall(Object)`                                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1` |
| removed |    -5 |   1.4% → 0.0% |    5 → 0 | `doCall(Object, Object)`                                         | `org.codenarc.plugin.disablerules.LookupTable$_buildLookupTable_closure1`  |
| removed |    -5 |   1.4% → 0.0% |    5 → 0 | `buildLookupTable()`                                             | `org.codenarc.plugin.disablerules.LookupTable`                             |
|   -7.8% |    -4 | 13.9% → 14.4% |  51 → 47 | `init()`                                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
| removed |    -4 |   1.1% → 0.0% |    4 → 0 | `checkStatementIndent(Statement, BlockStatement)`                | `org.codenarc.rule.formatting.IndentationAstVisitor`                       |
| removed |    -3 |   0.8% → 0.0% |    3 → 0 | `applyToClass(ClassNode, SourceCode)`                            | `org.gmetrics.metric.AbstractMetric`                                       |
| removed |    -3 |   0.8% → 0.0% |    3 → 0 | `doCall(Object)`                                                 | `org.codenarc.util.WildcardPattern$_matches_closure2`                      |
| removed |    -3 |   0.8% → 0.0% |    3 → 0 | `matches(String)`                                                | `org.codenarc.util.WildcardPattern`                                        |
| removed |    -3 |   0.8% → 0.0% |    3 → 0 | `matches(SourceCode)`                                            | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                           |
| removed |    -3 |   0.8% → 0.0% |    3 → 0 | `flexibleCheckForCorrectColumn(ASTNode, String, BlockStatement)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                       |

# Allocated heap profile diff

Allocated 12 GiB → 11.9 GiB (-73.473 MiB, -0.6%) over 6,318 samples → 6,306 samples (1.94 MiB → 1.93 MiB per sample).

| Category         | Change |       Delta |     % |                Size |       Samples |
| ---------------- | -----: | ----------: | ----: | ------------------: | ------------: |
| Standard library |  -0.6% | -72.717 MiB | 99.1% | 11.9 GiB → 11.8 GiB | 6,212 → 6,199 |
| Ours             |  -0.7% |    -771 KiB |  0.9% |   107 MiB → 106 MiB |       55 → 53 |
| Unknown          |  -8.6% |   -3.21 KiB | <0.1% | 37.4 KiB → 34.2 KiB |       51 → 54 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

##### Standard library

|  Change |        Delta |            % |                Size |   Samples | Function                                                                                      | Location                                             |
| ------: | -----------: | -----------: | ------------------: | --------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|  +45.9% | +104.184 MiB |  1.9% → 2.7% |   227 MiB → 331 MiB | 115 → 121 | `insertParameterTypes(int, Class[])`                                                          | `java.lang.invoke.MethodType`                        |
|  +26.2% |  +81.331 MiB |  2.5% → 3.2% |   310 MiB → 391 MiB | 152 → 180 | `make(MethodType, LambdaForm, Object, Object)`                                                | `java.lang.invoke.BoundMethodHandle$Species_LL`      |
|  +12.9% |  +77.578 MiB |  4.9% → 5.6% |   601 MiB → 678 MiB | 304 → 333 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
|  +23.2% |  +68.233 MiB |  2.4% → 3.0% |   294 MiB → 362 MiB | 150 → 180 | `newArray(Class, int)`                                                                        | `java.lang.reflect.Array`                            |
|  +40.6% |  +52.128 MiB |  1.0% → 1.5% |   128 MiB → 181 MiB |   65 → 56 | `getSelector(MutableCallSite, Class, String, int, boolean, boolean, boolean, Object[])`       | `org.codehaus.groovy.vmplugin.v8.Selector`           |
|  +51.0% |  +37.988 MiB |  0.6% → 0.9% |  74.5 MiB → 113 MiB |   38 → 57 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)`                     | `java.lang.invoke.MethodHandleImpl`                  |
|  +12.7% |  +29.168 MiB |  1.9% → 2.1% |   229 MiB → 258 MiB | 114 → 132 | `transform(ATNState, PredictionContext, SemanticContext, boolean, LexerActionExecutor)`       | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`        |
|  +36.2% |  +29.092 MiB |  0.7% → 0.9% |  80.3 MiB → 109 MiB |   41 → 56 | `newHashMap(int)`                                                                             | `java.util.HashMap`                                  |
|  +56.4% |  +29.082 MiB |  0.4% → 0.7% | 51.5 MiB → 80.6 MiB |   27 → 43 | `divideOneWord(int, MutableBigInteger)`                                                       | `java.math.MutableBigInteger`                        |
|   +7.2% |  +28.108 MiB |  3.2% → 3.4% |   392 MiB → 420 MiB | 201 → 205 | `makeBlockInliningWrapper(MethodHandle)`                                                      | `java.lang.invoke.MethodHandleImpl`                  |
|  +58.7% |  +23.559 MiB |  0.3% → 0.5% | 40.1 MiB → 63.7 MiB |   21 → 32 | `<init>(int)`                                                                                 | `java.util.ArrayList`                                |
|  +11.1% |  +21.894 MiB |  1.6% → 1.8% |   198 MiB → 220 MiB |  87 → 109 | `allocateInstance(Object)`                                                                    | `java.lang.invoke.DirectMethodHandle`                |
| +737.4% |  +19.798 MiB | <0.1% → 0.2% | 2.69 MiB → 22.5 MiB |     3 → 2 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`               | `java.lang.ClassLoader`                              |
|  +33.2% |  +19.664 MiB |  0.5% → 0.6% | 59.2 MiB → 78.9 MiB |   29 → 40 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object, Object)`                | `java.lang.invoke.BoundMethodHandle$Species_LLLLLL`  |
|  +44.6% |  +18.598 MiB |  0.3% → 0.5% | 41.7 MiB → 60.3 MiB |   21 → 30 | `builder(long, IntFunction)`                                                                  | `java.util.stream.Nodes`                             |
|  +38.0% |  +18.567 MiB |  0.4% → 0.6% | 48.9 MiB → 67.5 MiB |   25 → 35 | `put(Object, Object)`                                                                         | `groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap` |
|  +57.5% |  +14.961 MiB |  0.2% → 0.3% |     26 MiB → 41 MiB |   18 → 26 | `copy()`                                                                                      | `java.lang.reflect.Method`                           |
|  +27.6% |  +14.688 MiB |  0.4% → 0.6% |   53.3 MiB → 68 MiB |   27 → 34 | `newSlice(int[], int, boolean)`                                                               | `java.util.regex.Pattern`                            |
|   +9.9% |  +13.476 MiB |  1.1% → 1.2% |   136 MiB → 149 MiB |   64 → 75 | `make(MethodType, LambdaForm, Object, Object, Object)`                                        | `java.lang.invoke.BoundMethodHandle$Species_LLL`     |
| +389.9% |  +12.727 MiB | <0.1% → 0.1% |   3.26 MiB → 16 MiB |     2 → 8 | `<init>(int)`                                                                                 | `org.codehaus.groovy.util.ListHashMap`               |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

##### Standard library

|  Change |       Delta |           % |                Size |   Samples | Function                                                               | Location                                             |
| ------: | ----------: | ----------: | ------------------: | --------: | ---------------------------------------------------------------------- | ---------------------------------------------------- |
|  -34.0% | -98.361 MiB | 2.4% → 1.6% |   289 MiB → 191 MiB |  150 → 97 | `make(MethodType, LambdaForm, Object)`                                 | `java.lang.invoke.BoundMethodHandle$Species_L`       |
|  -28.3% | -98.251 MiB | 2.8% → 2.0% |   348 MiB → 249 MiB |       128 | `stream(Spliterator, boolean)`                                         | `java.util.stream.StreamSupport`                     |
|  -41.4% | -55.813 MiB | 1.1% → 0.6% |    135 MiB → 79 MiB |   68 → 39 | `makeGuardWithTest(MethodHandle, MethodHandle, MethodHandle)`          | `java.lang.invoke.MethodHandleImpl`                  |
| removed | -53.973 MiB | 0.4% → 0.0% |        54 MiB → 0 B |     1 → 0 | `toStringMarkedPure(Class)`                                            | `org.codehaus.groovy.runtime.GStringImpl`            |
|  -16.0% | -45.671 MiB | 2.3% → 2.0% |   285 MiB → 239 MiB | 143 → 122 | `make(MethodType, LambdaForm, Object, Object, Object, Object)`         | `java.lang.invoke.BoundMethodHandle$Species_LLLL`    |
|  -23.9% | -36.934 MiB | 1.3% → 1.0% |   154 MiB → 117 MiB |   78 → 60 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object)` | `java.lang.invoke.BoundMethodHandle$Species_LLLLL`   |
|  -12.7% | -34.818 MiB | 2.2% → 2.0% |   275 MiB → 240 MiB | 139 → 125 | `of(byte, int, int)`                                                   | `java.lang.invoke.LambdaFormEditor$TransformKey`     |
|  -27.0% | -26.099 MiB | 0.8% → 0.6% | 96.7 MiB → 70.6 MiB |   45 → 37 | `copyWith(MethodType, LambdaForm)`                                     | `java.lang.invoke.BoundMethodHandle$Species_L`       |
|  -10.4% |  -22.64 MiB | 1.8% → 1.6% |   218 MiB → 196 MiB |   91 → 99 | `spliterator(Object[], int, int, int)`                                 | `java.util.Spliterators`                             |
|  -18.3% | -21.971 MiB | 1.0% → 0.8% |  120 MiB → 98.2 MiB |   57 → 50 | `toBigInteger(int)`                                                    | `java.math.MutableBigInteger`                        |
|  -30.8% | -21.336 MiB | 0.6% → 0.4% |   69.3 MiB → 48 MiB |   34 → 23 | `createEntryListArray(int)`                                            | `groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap` |
|  -32.8% | -20.136 MiB | 0.5% → 0.3% | 61.4 MiB → 41.3 MiB |   32 → 22 | `compile(String)`                                                      | `java.util.regex.Pattern`                            |
|  -74.0% |  -19.93 MiB | 0.2% → 0.1% | 26.9 MiB → 6.99 MiB |     4 → 5 | `putVal(Object, Object, boolean)`                                      | `java.util.concurrent.ConcurrentHashMap`             |
|   -9.3% | -19.116 MiB | 1.7% → 1.5% |   205 MiB → 186 MiB |  103 → 95 | `compile()`                                                            | `java.util.regex.Pattern`                            |
|   -7.5% |   -18.5 MiB | 2.0% → 1.9% |   247 MiB → 228 MiB | 122 → 112 | `optimize(Pattern$Node)`                                               | `java.util.regex.Pattern$BnM`                        |
|  -11.9% | -18.476 MiB | 1.3% → 1.1% |   156 MiB → 137 MiB |   82 → 69 | `valueOf(long)`                                                        | `java.lang.Long`                                     |
|  -60.0% | -17.994 MiB | 0.2% → 0.1% |     30 MiB → 12 MiB |    15 → 6 | `tuple(Object, Object)`                                                | `groovy.lang.Tuple`                                  |
|  -41.3% | -16.859 MiB | 0.3% → 0.2% |   40.8 MiB → 24 MiB |   21 → 12 | `<init>()`                                                             | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`     |
|  -23.5% | -15.992 MiB | 0.6% → 0.4% |     68 MiB → 52 MiB |   33 → 26 | `convertToTypeArray(Object[])`                                         | `org.codehaus.groovy.runtime.MetaClassHelper`        |
|  -11.5% | -15.977 MiB | 1.1% → 1.0% |   139 MiB → 123 MiB |   71 → 63 | `of(byte, int)`                                                        | `java.lang.invoke.LambdaFormEditor$TransformKey`     |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

##### Standard library

| Change |       Delta |            % |           Size |   Samples | Function                                                                                    | Location                                             |
| -----: | ----------: | -----------: | -------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new | +11.146 GiB | 0.0% → 93.8% | 0 B → 11.1 GiB | 0 → 5,827 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000c0010b2800` |
|    new |  +7.611 GiB | 0.0% → 64.0% | 0 B → 7.61 GiB | 0 → 3,975 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000c001115400`  |
|    new |  +7.507 GiB | 0.0% → 63.2% | 0 B → 7.51 GiB | 0 → 3,907 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c001117800`  |
|    new |  +7.422 GiB | 0.0% → 62.5% | 0 B → 7.42 GiB | 0 → 3,869 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000c001118400`  |
|    new |  +6.592 GiB | 0.0% → 55.5% | 0 B → 6.59 GiB | 0 → 3,422 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000c001140400`  |
|    new |  +6.513 GiB | 0.0% → 54.8% | 0 B → 6.51 GiB | 0 → 3,381 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000c00118d400`  |
|    new |  +5.857 GiB | 0.0% → 49.3% | 0 B → 5.86 GiB | 0 → 3,150 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000c001118000`  |
|    new |  +5.507 GiB | 0.0% → 46.3% | 0 B → 5.51 GiB | 0 → 2,878 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000c00118d000`  |
|    new |  +5.482 GiB | 0.0% → 46.1% | 0 B → 5.48 GiB | 0 → 2,814 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000c0010bc800` |
|    new |  +5.155 GiB | 0.0% → 43.4% | 0 B → 5.16 GiB | 0 → 2,703 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000c0010bd400` |
|    new |  +5.058 GiB | 0.0% → 42.6% | 0 B → 5.06 GiB | 0 → 2,557 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000c00138cc00` |
|    new |  +4.997 GiB | 0.0% → 42.1% |    0 B → 5 GiB | 0 → 2,606 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c001142000`  |
|    new |  +4.867 GiB | 0.0% → 41.0% | 0 B → 4.87 GiB | 0 → 2,542 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c00113fc00`  |
|    new |  +4.609 GiB | 0.0% → 38.8% | 0 B → 4.61 GiB | 0 → 2,389 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c00138d800`  |
|    new |   +4.56 GiB | 0.0% → 38.4% | 0 B → 4.56 GiB | 0 → 2,366 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c0012ac800`  |
|    new |  +3.657 GiB | 0.0% → 30.8% | 0 B → 3.66 GiB | 0 → 1,896 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c0013dcc00`  |
|    new |  +3.581 GiB | 0.0% → 30.1% | 0 B → 3.58 GiB | 0 → 1,871 | `invokeSpecial(Object, Object, Object, Object, Object)`                                     | `java.lang.invoke.LambdaForm$DMH.0x000000c00118e800` |
|    new |   +3.41 GiB | 0.0% → 28.7% | 0 B → 3.41 GiB | 0 → 1,772 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000c0013d3000`  |
|    new |  +3.291 GiB | 0.0% → 27.7% | 0 B → 3.29 GiB | 0 → 1,776 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c001119400`  |
|    new |  +3.253 GiB | 0.0% → 27.4% | 0 B → 3.25 GiB | 0 → 1,702 | `invokeExact_MT(Object, Object, Object, Object, Object, Object)`                            | `java.lang.invoke.LambdaForm$MH.0x000000c001004000`  |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Standard library

|  Change |       Delta |            % |           Size |   Samples | Function                                                                                    | Location                                             |
| ------: | ----------: | -----------: | -------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -11.265 GiB | 94.2% → 0.0% | 11.3 GiB → 0 B | 5,866 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a8010b2800` |
| removed |  -7.736 GiB | 64.7% → 0.0% | 7.74 GiB → 0 B | 4,041 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a801115400`  |
| removed |  -7.579 GiB | 63.4% → 0.0% | 7.58 GiB → 0 B | 3,957 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a801117800`  |
| removed |  -7.495 GiB | 62.7% → 0.0% |  7.5 GiB → 0 B | 3,914 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000a801118400`  |
| removed |  -6.717 GiB | 56.2% → 0.0% | 6.72 GiB → 0 B | 3,460 → 0 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000a801140400`  |
| removed |  -6.627 GiB | 55.4% → 0.0% | 6.63 GiB → 0 B | 3,413 → 0 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000a80118d400`  |
| removed |  -5.991 GiB | 50.1% → 0.0% | 5.99 GiB → 0 B | 3,198 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000a801118000`  |
| removed |  -5.647 GiB | 47.2% → 0.0% | 5.65 GiB → 0 B | 2,922 → 0 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000a80118d000`  |
| removed |  -5.506 GiB | 46.1% → 0.0% | 5.51 GiB → 0 B | 2,802 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000a8010bc800` |
| removed |  -5.295 GiB | 44.3% → 0.0% |  5.3 GiB → 0 B | 2,739 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000a8010bd400` |
| removed |  -5.141 GiB | 43.0% → 0.0% | 5.14 GiB → 0 B | 2,574 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000a80138cc00` |
| removed |  -5.116 GiB | 42.8% → 0.0% | 5.12 GiB → 0 B | 2,634 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a801142000`  |
| removed |  -4.972 GiB | 41.6% → 0.0% | 4.97 GiB → 0 B | 2,567 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a80113fc00`  |
| removed |  -4.637 GiB | 38.8% → 0.0% | 4.64 GiB → 0 B | 2,386 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a8012ac800`  |
| removed |  -4.631 GiB | 38.7% → 0.0% | 4.63 GiB → 0 B | 2,383 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a80138d800`  |
| removed |  -3.772 GiB | 31.6% → 0.0% | 3.77 GiB → 0 B | 1,938 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a8013dcc00`  |
| removed |  -3.674 GiB | 30.7% → 0.0% | 3.67 GiB → 0 B | 1,881 → 0 | `invokeSpecial(Object, Object, Object, Object, Object)`                                     | `java.lang.invoke.LambdaForm$DMH.0x000000a80118e800` |
| removed |  -3.504 GiB | 29.3% → 0.0% |  3.5 GiB → 0 B | 1,823 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a8013d3000`  |
| removed |  -3.456 GiB | 28.9% → 0.0% | 3.46 GiB → 0 B | 1,850 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a801119400`  |
| removed |  -3.408 GiB | 28.5% → 0.0% | 3.41 GiB → 0 B | 1,718 → 0 | `invokeExact_MT(Object, Object, Object, Object, Object, Object)`                            | `java.lang.invoke.LambdaForm$MH.0x000000a801004000`  |

# Retained heap profile diff

Retained 263 KiB → 18.4 KiB (-244.578 KiB, -93.0%) over 105 objects → 115 objects (2.5 KiB → 164 B per object).

| Category         |  Change |        Delta |            % |               Size |   Objects |
| ---------------- | ------: | -----------: | -----------: | -----------------: | --------: |
| Standard library |  -93.0% | -244.484 KiB |       100.0% | 263 KiB → 18.4 KiB | 104 → 115 |
| Ours             | removed |        -96 B | <0.1% → 0.0% |         96 B → 0 B |     1 → 0 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

##### Standard library

|   Change |      Delta |            % |             Size | Objects | Function                                                                                                            | Location                                                 |
| -------: | ---------: | -----------: | ---------------: | ------: | ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
|      new | +4.015 KiB | 0.0% → 21.8% |   0 B → 4.02 KiB |   0 → 1 | `resize(int)`                                                                                                       | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`  |
| +1562.5% | +3.906 KiB | 0.1% → 22.6% | 256 B → 4.16 KiB |   3 → 2 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`                                     | `java.lang.ClassLoader`                                  |
|      new | +2.875 KiB | 0.0% → 15.6% |   0 B → 2.88 KiB |   0 → 2 | `copyOfRange(byte[], int, int)`                                                                                     | `java.util.Arrays`                                       |
|  +514.3% |     +576 B | <0.1% → 3.6% |    112 B → 688 B |       2 | `getTargetMethodInfo()`                                                                                             | `java.beans.Introspector`                                |
|      new |     +448 B |  0.0% → 2.4% |      0 B → 448 B |   0 → 1 | `<init>(Object[])`                                                                                                  | `java.util.ImmutableCollections$SetN`                    |
|   +42.4% |     +224 B |  0.2% → 4.0% |    528 B → 752 B |   1 → 3 | `resize()`                                                                                                          | `java.util.HashMap`                                      |
|      new |     +216 B |  0.0% → 1.1% |      0 B → 216 B |   0 → 3 | `copy()`                                                                                                            | `java.lang.reflect.Field`                                |
|      new |     +192 B |  0.0% → 1.0% |      0 B → 192 B |   0 → 6 | `<init>(int)`                                                                                                       | `org.codehaus.groovy.util.ListHashMap`                   |
|      new |     +168 B |  0.0% → 0.9% |      0 B → 168 B |   0 → 3 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object)`                                              | `java.lang.invoke.BoundMethodHandle$Species_LLLLL`       |
|  +133.3% |     +160 B | <0.1% → 1.5% |    120 B → 280 B |   3 → 7 | `newNode(int, Object, Object, HashMap$Node)`                                                                        | `java.util.LinkedHashMap`                                |
|      new |     +152 B |  0.0% → 0.8% |      0 B → 152 B |   0 → 1 | `makeWithoutCaching(String)`                                                                                        | `org.codehaus.groovy.ast.ClassHelper`                    |
|      new |     +144 B |  0.0% → 0.8% |      0 B → 144 B |   0 → 1 | `sizeCache(int)`                                                                                                    | `java.lang.ClassValue$ClassValueMap`                     |
|      new |     +144 B |  0.0% → 0.8% |      0 B → 144 B |   0 → 1 | `init(int)`                                                                                                         | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`  |
|      new |     +112 B |  0.0% → 0.6% |      0 B → 112 B |   0 → 3 | `set(Method)`                                                                                                       | `java.beans.MethodRef`                                   |
|   +28.6% |     +112 B |  0.1% → 2.7% |    392 B → 504 B |   7 → 9 | `getOrPutMethods(String, MetaMethodIndex$Header)`                                                                   | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`  |
|      new |      +96 B |  0.0% → 0.5% |       0 B → 96 B |   0 → 3 | `add(Object)`                                                                                                       | `org.codehaus.groovy.util.FastArray`                     |
|      new |      +80 B |  0.0% → 0.4% |       0 B → 80 B |   0 → 2 | `nls()`                                                                                                             | `org.apache.groovy.parser.antlr4.GroovyParser`           |
|      new |      +80 B |  0.0% → 0.4% |       0 B → 80 B |   0 → 1 | `decompress(ByteBuffer, int)`                                                                                       | `jdk.internal.jimage.ImageLocation`                      |
|      new |      +80 B |  0.0% → 0.4% |       0 B → 80 B |   0 → 1 | `make(MethodType, LambdaForm, Object, Object, Object, Object, int, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.BoundMethodHandle$Species_LLLLILLLLLL` |
|  +100.0% |      +64 B | <0.1% → 0.7% |     64 B → 128 B |   1 → 2 | `createDotExpression(GroovyParser$PathElementContext, Expression, Expression, GenericsType[], boolean)`             | `org.apache.groovy.parser.antlr4.AstBuilder`             |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

|  Change |        Delta |            % |          Size | Objects | Function                                                                                                    | Location                                                            |
| ------: | -----------: | -----------: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| removed | -256.015 KiB | 97.3% → 0.0% | 256 KiB → 0 B |   1 → 0 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])`                                              | `java.util.concurrent.ConcurrentHashMap`                            |
| removed |       -424 B |  0.2% → 0.0% |   424 B → 0 B |   1 → 0 | `copyOf(Object[], int)`                                                                                     | `java.util.Arrays`                                                  |
|  -50.0% |       -304 B |  0.2% → 1.6% | 608 B → 304 B |   4 → 2 | `getPlainNodeReference(boolean)`                                                                            | `org.codehaus.groovy.ast.ClassNode`                                 |
| removed |       -200 B |  0.1% → 0.0% |   200 B → 0 B |   1 → 0 | `createBuiltInTypes(SymbolHash, XSSimpleTypeDecl)`                                                          | `com.sun.org.apache.xerces.internal.impl.dv.xs.BaseSchemaDVFactory` |
| removed |       -168 B |  0.1% → 0.0% |   168 B → 0 B |   3 → 0 | `clone()`                                                                                                   | `java.lang.Object`                                                  |
|  -20.5% |       -144 B |  0.3% → 3.0% | 704 B → 560 B |   6 → 5 | `copyOfRangeByte(byte[], int, int)`                                                                         | `java.util.Arrays`                                                  |
|  -66.7% |       -144 B |  0.1% → 0.4% |  216 B → 72 B |   3 → 1 | `visitIdentifierPrmrAlt(GroovyParser$IdentifierPrmrAltContext)`                                             | `org.apache.groovy.parser.antlr4.AstBuilder`                        |
|  -48.4% |       -120 B |  0.1% → 0.7% | 248 B → 128 B |   4 → 2 | `compress(char[], int, int)`                                                                                | `java.lang.StringUTF16`                                             |
| removed |       -112 B | <0.1% → 0.0% |   112 B → 0 B |   1 → 0 | `resetCachedMetaClasses()`                                                                                  | `org.codehaus.groovy.runtime.metaclass.ClosureMetaClass`            |
| removed |        -96 B | <0.1% → 0.0% |    96 B → 0 B |   1 → 0 | `<init>()`                                                                                                  | `org.codenarc.CodeNarc`                                             |
|  -39.3% |        -88 B |  0.1% → 0.7% | 224 B → 136 B |   4 → 3 | `getDeclaredMethods0(boolean)`                                                                              | `java.lang.Class`                                                   |
|  -25.0% |        -88 B |  0.1% → 1.4% | 352 B → 264 B |   4 → 3 | `copy()`                                                                                                    | `java.lang.reflect.Method`                                          |
| removed |        -80 B | <0.1% → 0.0% |    80 B → 0 B |   1 → 0 | `join(PredictionContext, PredictionContext, PredictionContextCache)`                                        | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`               |
| removed |        -72 B | <0.1% → 0.0% |    72 B → 0 B |   1 → 0 | `make(MethodType, LambdaForm, Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.BoundMethodHandle$Species_LLLLILLLLL`             |
| removed |        -72 B | <0.1% → 0.0% |    72 B → 0 B |   1 → 0 | `getDeclaredFields0(boolean)`                                                                               | `java.lang.Class`                                                   |
| removed |        -64 B | <0.1% → 0.0% |    64 B → 0 B |   1 → 0 | `<init>(MethodType)`                                                                                        | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`                 |
| removed |        -64 B | <0.1% → 0.0% |    64 B → 0 B |   1 → 0 | `visitShiftExprAlt(GroovyParser$ShiftExprAltContext)`                                                       | `org.apache.groovy.parser.antlr4.AstBuilder`                        |
| removed |        -64 B | <0.1% → 0.0% |    64 B → 0 B |   1 → 0 | `<init>(Void, String, ClassLoader)`                                                                         | `java.lang.ClassLoader`                                             |
| removed |        -64 B | <0.1% → 0.0% |    64 B → 0 B |   1 → 0 | `<init>(ClassLoader, Class, boolean)`                                                                       | `jdk.internal.loader.NativeLibraries`                               |
|  -16.7% |        -56 B |  0.1% → 1.5% | 336 B → 280 B |   6 → 5 | `grow(int)`                                                                                                 | `java.util.ArrayList`                                               |

##### Standard library

|  Change |        Delta |            % |          Size | Objects | Function                                                                                                    | Location                                                            |
| ------: | -----------: | -----------: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| removed | -256.015 KiB | 97.3% → 0.0% | 256 KiB → 0 B |   1 → 0 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])`                                              | `java.util.concurrent.ConcurrentHashMap`                            |
| removed |       -424 B |  0.2% → 0.0% |   424 B → 0 B |   1 → 0 | `copyOf(Object[], int)`                                                                                     | `java.util.Arrays`                                                  |
|  -50.0% |       -304 B |  0.2% → 1.6% | 608 B → 304 B |   4 → 2 | `getPlainNodeReference(boolean)`                                                                            | `org.codehaus.groovy.ast.ClassNode`                                 |
| removed |       -200 B |  0.1% → 0.0% |   200 B → 0 B |   1 → 0 | `createBuiltInTypes(SymbolHash, XSSimpleTypeDecl)`                                                          | `com.sun.org.apache.xerces.internal.impl.dv.xs.BaseSchemaDVFactory` |
| removed |       -168 B |  0.1% → 0.0% |   168 B → 0 B |   3 → 0 | `clone()`                                                                                                   | `java.lang.Object`                                                  |
|  -20.5% |       -144 B |  0.3% → 3.0% | 704 B → 560 B |   6 → 5 | `copyOfRangeByte(byte[], int, int)`                                                                         | `java.util.Arrays`                                                  |
|  -66.7% |       -144 B |  0.1% → 0.4% |  216 B → 72 B |   3 → 1 | `visitIdentifierPrmrAlt(GroovyParser$IdentifierPrmrAltContext)`                                             | `org.apache.groovy.parser.antlr4.AstBuilder`                        |
|  -48.4% |       -120 B |  0.1% → 0.7% | 248 B → 128 B |   4 → 2 | `compress(char[], int, int)`                                                                                | `java.lang.StringUTF16`                                             |
| removed |       -112 B | <0.1% → 0.0% |   112 B → 0 B |   1 → 0 | `resetCachedMetaClasses()`                                                                                  | `org.codehaus.groovy.runtime.metaclass.ClosureMetaClass`            |
|  -39.3% |        -88 B |  0.1% → 0.7% | 224 B → 136 B |   4 → 3 | `getDeclaredMethods0(boolean)`                                                                              | `java.lang.Class`                                                   |
|  -25.0% |        -88 B |  0.1% → 1.4% | 352 B → 264 B |   4 → 3 | `copy()`                                                                                                    | `java.lang.reflect.Method`                                          |
| removed |        -80 B | <0.1% → 0.0% |    80 B → 0 B |   1 → 0 | `join(PredictionContext, PredictionContext, PredictionContextCache)`                                        | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`               |
| removed |        -72 B | <0.1% → 0.0% |    72 B → 0 B |   1 → 0 | `make(MethodType, LambdaForm, Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.BoundMethodHandle$Species_LLLLILLLLL`             |
| removed |        -72 B | <0.1% → 0.0% |    72 B → 0 B |   1 → 0 | `getDeclaredFields0(boolean)`                                                                               | `java.lang.Class`                                                   |
| removed |        -64 B | <0.1% → 0.0% |    64 B → 0 B |   1 → 0 | `<init>(MethodType)`                                                                                        | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`                 |
| removed |        -64 B | <0.1% → 0.0% |    64 B → 0 B |   1 → 0 | `visitShiftExprAlt(GroovyParser$ShiftExprAltContext)`                                                       | `org.apache.groovy.parser.antlr4.AstBuilder`                        |
| removed |        -64 B | <0.1% → 0.0% |    64 B → 0 B |   1 → 0 | `<init>(Void, String, ClassLoader)`                                                                         | `java.lang.ClassLoader`                                             |
| removed |        -64 B | <0.1% → 0.0% |    64 B → 0 B |   1 → 0 | `<init>(ClassLoader, Class, boolean)`                                                                       | `jdk.internal.loader.NativeLibraries`                               |
|  -16.7% |        -56 B |  0.1% → 1.5% | 336 B → 280 B |   6 → 5 | `grow(int)`                                                                                                 | `java.util.ArrayList`                                               |
| removed |        -48 B | <0.1% → 0.0% |    48 B → 0 B |   1 → 0 | `<init>(Class)`                                                                                             | `org.codehaus.groovy.reflection.ClassInfo`                          |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

|  Change |       Delta |            % |                Size | Objects | Function                                                                                         | Location                                                                   |
| ------: | ----------: | -----------: | ------------------: | ------: | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
|     new | +12.656 KiB | 0.0% → 68.7% |      0 B → 12.7 KiB |  0 → 90 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`      | `java.lang.invoke.LambdaForm$DMH.0x000000c0010b2800`                       |
|     new | +12.429 KiB | 0.0% → 67.5% |      0 B → 12.4 KiB |  0 → 83 | `guardWithCatch(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000c001117800`                        |
|     new | +12.406 KiB | 0.0% → 67.3% |      0 B → 12.4 KiB |  0 → 82 | `guard(Object, Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x000000c001118400`                        |
|     new | +11.125 KiB | 0.0% → 60.4% |      0 B → 11.1 KiB |  0 → 60 | `reinvoke(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x000000c001118000`                        |
|     new |  +9.312 KiB | 0.0% → 50.6% |      0 B → 9.31 KiB |  0 → 80 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000c001115400`                        |
|     new |  +8.382 KiB | 0.0% → 45.5% |      0 B → 8.38 KiB |  0 → 58 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000c001141000`                        |
| +403.8% |  +7.539 KiB | 0.7% → 51.1% | 1.87 KiB → 9.41 KiB | 34 → 44 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                            |
|     new |  +6.734 KiB | 0.0% → 36.6% |      0 B → 6.73 KiB |  0 → 30 | `invokeInterface(Object, Object, Object)`                                                        | `java.lang.invoke.LambdaForm$DMH.0x000000c0010bd000`                       |
|     new |  +6.023 KiB | 0.0% → 32.7% |      0 B → 6.02 KiB |  0 → 26 | `invokeInterface(Object, Object, Object, Object, Object)`                                        | `java.lang.invoke.LambdaForm$DMH.0x000000c0010bd400`                       |
|     new |   +5.96 KiB | 0.0% → 32.4% |      0 B → 5.96 KiB |  0 → 25 | `invoke(Object, Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000c00113fc00`                        |
|     new |  +5.867 KiB | 0.0% → 31.8% |      0 B → 5.87 KiB |  0 → 23 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000c001140c00`                        |
|     new |  +5.742 KiB | 0.0% → 31.2% |      0 B → 5.74 KiB |  0 → 18 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000c0013d3000`                        |
|     new |  +5.484 KiB | 0.0% → 29.8% |      0 B → 5.48 KiB |  0 → 22 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000c001119400`                        |
| +206.1% |   +5.25 KiB | 1.0% → 42.3% |  2.55 KiB → 7.8 KiB | 40 → 53 | `getMetaClassUnderLock()`                                                                        | `org.codehaus.groovy.reflection.ClassInfo`                                 |
| +206.1% |   +5.25 KiB | 1.0% → 42.3% |  2.55 KiB → 7.8 KiB | 40 → 53 | `getMetaClass()`                                                                                 | `org.codehaus.groovy.reflection.ClassInfo`                                 |
| +219.2% |  +5.085 KiB | 0.9% → 40.2% | 2.32 KiB → 7.41 KiB | 35 → 51 | `reinitialize()`                                                                                 | `groovy.lang.MetaClassImpl`                                                |
| +219.2% |  +5.085 KiB | 0.9% → 40.2% | 2.32 KiB → 7.41 KiB | 35 → 51 | `initialize()`                                                                                   | `groovy.lang.MetaClassImpl`                                                |
| +310.8% |  +4.953 KiB | 0.6% → 35.5% | 1.59 KiB → 6.55 KiB | 18 → 27 | `doCall(Object)`                                                                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
| +292.1% |  +4.906 KiB | 0.6% → 35.8% | 1.68 KiB → 6.59 KiB | 19 → 27 | `applyTo(SourceCode, List)`                                                                      | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
| +263.7% |  +4.882 KiB | 0.7% → 36.6% | 1.85 KiB → 6.73 KiB | 22 → 30 | `applyTo(SourceCode)`                                                                            | `org.codenarc.rule.AbstractRule`                                           |

##### Standard library

|   Change |       Delta |            % |                Size | Objects | Function                                                                                         | Location                                             |
| -------: | ----------: | -----------: | ------------------: | ------: | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
|      new | +12.656 KiB | 0.0% → 68.7% |      0 B → 12.7 KiB |  0 → 90 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`      | `java.lang.invoke.LambdaForm$DMH.0x000000c0010b2800` |
|      new | +12.429 KiB | 0.0% → 67.5% |      0 B → 12.4 KiB |  0 → 83 | `guardWithCatch(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000c001117800`  |
|      new | +12.406 KiB | 0.0% → 67.3% |      0 B → 12.4 KiB |  0 → 82 | `guard(Object, Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x000000c001118400`  |
|      new | +11.125 KiB | 0.0% → 60.4% |      0 B → 11.1 KiB |  0 → 60 | `reinvoke(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x000000c001118000`  |
|      new |  +9.312 KiB | 0.0% → 50.6% |      0 B → 9.31 KiB |  0 → 80 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000c001115400`  |
|      new |  +8.382 KiB | 0.0% → 45.5% |      0 B → 8.38 KiB |  0 → 58 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000c001141000`  |
|  +403.8% |  +7.539 KiB | 0.7% → 51.1% | 1.87 KiB → 9.41 KiB | 34 → 44 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
|      new |  +6.734 KiB | 0.0% → 36.6% |      0 B → 6.73 KiB |  0 → 30 | `invokeInterface(Object, Object, Object)`                                                        | `java.lang.invoke.LambdaForm$DMH.0x000000c0010bd000` |
|      new |  +6.023 KiB | 0.0% → 32.7% |      0 B → 6.02 KiB |  0 → 26 | `invokeInterface(Object, Object, Object, Object, Object)`                                        | `java.lang.invoke.LambdaForm$DMH.0x000000c0010bd400` |
|      new |   +5.96 KiB | 0.0% → 32.4% |      0 B → 5.96 KiB |  0 → 25 | `invoke(Object, Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000c00113fc00`  |
|      new |  +5.867 KiB | 0.0% → 31.8% |      0 B → 5.87 KiB |  0 → 23 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000c001140c00`  |
|      new |  +5.742 KiB | 0.0% → 31.2% |      0 B → 5.74 KiB |  0 → 18 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000c0013d3000`  |
|      new |  +5.484 KiB | 0.0% → 29.8% |      0 B → 5.48 KiB |  0 → 22 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000c001119400`  |
|  +206.1% |   +5.25 KiB | 1.0% → 42.3% |  2.55 KiB → 7.8 KiB | 40 → 53 | `getMetaClassUnderLock()`                                                                        | `org.codehaus.groovy.reflection.ClassInfo`           |
|  +206.1% |   +5.25 KiB | 1.0% → 42.3% |  2.55 KiB → 7.8 KiB | 40 → 53 | `getMetaClass()`                                                                                 | `org.codehaus.groovy.reflection.ClassInfo`           |
|  +219.2% |  +5.085 KiB | 0.9% → 40.2% | 2.32 KiB → 7.41 KiB | 35 → 51 | `reinitialize()`                                                                                 | `groovy.lang.MetaClassImpl`                          |
|  +219.2% |  +5.085 KiB | 0.9% → 40.2% | 2.32 KiB → 7.41 KiB | 35 → 51 | `initialize()`                                                                                   | `groovy.lang.MetaClassImpl`                          |
|  +153.5% |  +4.843 KiB | 1.2% → 43.4% |    3.16 KiB → 8 KiB | 44 → 52 | `invokeSpecial(Object, Object, Object)`                                                          | `java.lang.invoke.DirectMethodHandle$Holder`         |
|  +632.0% |  +4.789 KiB | 0.3% → 30.1% |    776 B → 5.55 KiB | 11 → 17 | `newInstanceWithCaller(Object[], boolean, Class)`                                                | `java.lang.reflect.Constructor`                      |
| +1038.6% |  +4.625 KiB | 0.2% → 27.5% |    456 B → 5.07 KiB |  8 → 15 | `invokeExact_MT(Object, Object)`                                                                 | `java.lang.invoke.Invokers$Holder`                   |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

##### Standard library

|  Change |        Delta |            % |            Size | Objects | Function                                                                                    | Location                                               |
| ------: | -----------: | -----------: | --------------: | ------: | ------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| removed | -261.187 KiB | 99.3% → 0.0% |   261 KiB → 0 B |  79 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a8010b2800`   |
| removed | -260.898 KiB | 99.2% → 0.0% |   261 KiB → 0 B |  77 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a801117800`    |
| removed | -260.875 KiB | 99.2% → 0.0% |   261 KiB → 0 B |  76 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000a801118400`    |
| removed | -260.507 KiB | 99.1% → 0.0% |   261 KiB → 0 B |  70 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a801115400`    |
| removed | -259.171 KiB | 98.5% → 0.0% |   259 KiB → 0 B |  47 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a801141000`    |
| removed | -257.671 KiB | 98.0% → 0.0% |   258 KiB → 0 B |  28 → 0 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a801102400`    |
| removed | -257.203 KiB | 97.8% → 0.0% |   257 KiB → 0 B |  21 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a801150800`    |
| removed | -257.164 KiB | 97.8% → 0.0% |   257 KiB → 0 B |  21 → 0 | `invokeVirtual(Object, Object, int)`                                                        | `java.lang.invoke.LambdaForm$DMH.0x000000a801152800`   |
| removed | -257.164 KiB | 97.8% → 0.0% |   257 KiB → 0 B |  21 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a8012d8000`    |
|  -99.8% | -256.609 KiB | 97.8% → 2.8% | 257 KiB → 520 B | 19 → 12 | `buildCST(PredictionMode)`                                                                  | `org.apache.groovy.parser.antlr4.AstBuilder`           |
|  -99.8% | -256.609 KiB | 97.8% → 2.8% | 257 KiB → 520 B | 19 → 12 | `buildCST()`                                                                                | `org.apache.groovy.parser.antlr4.AstBuilder`           |
|  -99.8% | -256.585 KiB | 97.8% → 2.9% | 257 KiB → 544 B | 19 → 13 | `classBody(int)`                                                                            | `org.apache.groovy.parser.antlr4.GroovyParser`         |
|  -99.8% | -256.585 KiB | 97.8% → 2.9% | 257 KiB → 544 B | 19 → 13 | `classDeclaration()`                                                                        | `org.apache.groovy.parser.antlr4.GroovyParser`         |
|  -99.8% | -256.585 KiB | 97.8% → 2.9% | 257 KiB → 544 B | 19 → 13 | `typeDeclaration()`                                                                         | `org.apache.groovy.parser.antlr4.GroovyParser`         |
|  -99.8% | -256.585 KiB | 97.8% → 2.9% | 257 KiB → 544 B | 19 → 13 | `scriptStatement()`                                                                         | `org.apache.groovy.parser.antlr4.GroovyParser`         |
|  -99.8% | -256.585 KiB | 97.8% → 2.9% | 257 KiB → 544 B | 19 → 13 | `scriptStatements()`                                                                        | `org.apache.groovy.parser.antlr4.GroovyParser`         |
|  -99.8% | -256.585 KiB | 97.8% → 2.9% | 257 KiB → 544 B | 19 → 13 | `compilationUnit()`                                                                         | `org.apache.groovy.parser.antlr4.GroovyParser`         |
|  -99.8% | -256.562 KiB | 97.8% → 2.9% | 257 KiB → 544 B | 18 → 13 | `memberDeclaration(int)`                                                                    | `org.apache.groovy.parser.antlr4.GroovyParser`         |
|  -99.8% | -256.562 KiB | 97.8% → 2.9% | 257 KiB → 544 B | 18 → 13 | `classBodyDeclaration(int)`                                                                 | `org.apache.groovy.parser.antlr4.GroovyParser`         |
| -100.0% | -256.523 KiB | 97.6% → 0.4% |  257 KiB → 80 B |   6 → 3 | `execDFA(DFA, TokenStream, int, SimulatorState)`                                            | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
