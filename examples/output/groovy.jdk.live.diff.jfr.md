# Sampling profile diff

Collected 342 samples → 329 samples (-13 samples, -3.8%).

| Category         | Change | Delta |             % |   Samples |
| ---------------- | -----: | ----: | ------------: | --------: |
| Standard library |  -3.6% |   -12 | 97.7% → 97.9% | 334 → 322 |
| Ours             | -12.5% |    -1 |   2.3% → 2.1% |     8 → 7 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                    | Location                                                   |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|     new |    +6 | 0.0% → 1.8% |   0 → 6 | `getTreeNode(int, Object)`                                                                  | `java.util.HashMap$TreeNode`                               |
| +500.0% |    +5 | 0.3% → 1.8% |   1 → 6 | `privateGetDeclaredMethods(boolean)`                                                        | `java.lang.Class`                                          |
|     new |    +4 | 0.0% → 1.2% |   0 → 4 | `invokeVirtual(Object, Object, Object)`                                                     | `java.lang.invoke.DirectMethodHandle$Holder`               |
| +400.0% |    +4 | 0.3% → 1.5% |   1 → 5 | `<init>(Method, boolean)`                                                                   | `java.lang.invoke.MemberName`                              |
|     new |    +3 | 0.0% → 0.9% |   0 → 3 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010b2800`       |
|  +75.0% |    +3 | 1.2% → 2.1% |   4 → 7 | `getReachableConfigSet(CharStream, ATNConfigSet, ATNConfigSet, int)`                        | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`      |
| +150.0% |    +3 | 0.6% → 1.5% |   2 → 5 | `init(MemberName, Object)`                                                                  | `java.lang.invoke.MethodHandleNatives`                     |
|  +42.9% |    +3 | 2.0% → 3.0% |  7 → 10 | `getReturnState(int)`                                                                       | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext` |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `invokeExact_MT(Object, Object, Object)`                                                    | `java.lang.invoke.Invokers$Holder`                         |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `expression(int)`                                                                           | `org.apache.groovy.parser.antlr4.GroovyParser`             |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000700118d400`        |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `internKey(ReferencedKeyMap, Object)`                                                       | `jdk.internal.util.ReferencedKeyMap`                       |
|  +33.3% |    +2 | 1.8% → 2.4% |   6 → 8 | `putVal(int, Object, Object, boolean, boolean)`                                             | `java.util.HashMap`                                        |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `join(PredictionContext, PredictionContext)`                                                | `groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache` |
| +100.0% |    +2 | 0.6% → 1.2% |   2 → 4 | `getMethods(Class, String)`                                                                 | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`    |
| +200.0% |    +2 | 0.3% → 0.9% |   1 → 3 | `cast(Object)`                                                                              | `java.lang.Class`                                          |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001002c00`        |
|  +66.7% |    +2 | 0.9% → 1.5% |   3 → 5 | `invokeStatic(Object, Object, Object)`                                                      | `java.lang.invoke.DirectMethodHandle$Holder`               |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `chooseMeta(MetaClassImpl)`                                                                 | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`  |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `removeNode(int, Object, Object, boolean, boolean)`                                         | `java.util.HashMap`                                        |

##### Ours

| Change | Delta |           % | Samples | Function                                          | Location                                                                  |
| -----: | ----: | ----------: | ------: | ------------------------------------------------- | ------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `isChainedUnique(Expression)`                     | `org.codenarc.rule.groovyism.AssignCollectionUniqueAstVisitor`            |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `$getStaticMetaClass()`                           | `org.codenarc.rule.basic.AssertWithinFinallyBlockAstVisitor`              |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `getMagnitude()`                                  | `org.gmetrics.metric.abc.AbcVector`                                       |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `<init>(Metric, MetricLevel, AbcVector, Integer)` | `org.gmetrics.metric.abc.result.AbcMetricResult`                          |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `visitClassComplete(ClassNode)`                   | `org.codenarc.rule.convention.StaticFieldsBeforeInstanceFieldsAstVisitor` |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                                      | Location                                               |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
|  -85.7% |   -12 | 4.1% → 0.6% |  14 → 2 | `getNode(Object)`                                                                                             | `java.util.HashMap`                                    |
| removed |    -9 | 2.6% → 0.0% |   9 → 0 | `matches(Method, String, Class[])`                                                                            | `java.lang.PublicMethods$Key`                          |
|  -40.0% |    -4 | 2.9% → 1.8% |  10 → 6 | `get(Object)`                                                                                                 | `java.util.concurrent.ConcurrentHashMap`               |
| removed |    -4 | 1.2% → 0.0% |   4 → 0 | `hashCodeRange(int, int)`                                                                                     | `java.util.ArrayList`                                  |
|  -30.0% |    -3 | 2.9% → 2.1% |  10 → 7 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
|  -25.0% |    -3 | 3.5% → 2.7% |  12 → 9 | `newInstance(Class, int)`                                                                                     | `java.lang.reflect.Array`                              |
| removed |    -3 | 0.9% → 0.0% |   3 → 0 | `bindArgumentL(int, Object)`                                                                                  | `java.lang.invoke.BoundMethodHandle`                   |
| removed |    -3 | 0.9% → 0.0% |   3 → 0 | `isQualified()`                                                                                               | `java.lang.module.ModuleDescriptor$Exports`            |
|  -75.0% |    -3 | 1.2% → 0.3% |   4 → 1 | `open0(String)`                                                                                               | `java.io.FileInputStream`                              |
| removed |    -3 | 0.9% → 0.0% |   3 → 0 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)`                                     | `java.lang.invoke.MethodHandleImpl`                    |
|  -42.9% |    -3 | 2.0% → 1.2% |   7 → 4 | `getReachableTarget(Transition, int)`                                                                         | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`  |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `invokeExact_MT(Object, Object, Object, Object)`                                                              | `java.lang.invoke.Invokers$Holder`                     |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `getTarget(int)`                                                                                              | `groovyjarjarantlr4.v4.runtime.dfa.DFAState`           |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `getCachedContext(PredictionContext)`                                                                         | `groovyjarjarantlr4.v4.runtime.atn.ATN`                |
|  -66.7% |    -2 | 0.9% → 0.3% |   3 → 1 | `sync(int)`                                                                                                   | `groovyjarjarantlr4.v4.runtime.BufferedTokenStream`    |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `invoke(Object, int)`                                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000700109bc00`    |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `bindArgumentL(BoundMethodHandle, int, Object)`                                                               | `java.lang.invoke.LambdaFormEditor`                    |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `bindTo(Object)`                                                                                              | `java.lang.invoke.MethodHandle`                        |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `lambda$DOT$11(int)`                                                                                          | `java.util.regex.Pattern`                              |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `invoke(Object)`                                                                                              | `java.lang.invoke.LambdaForm$MH.0x00000070010b3400`    |

##### Ours

|  Change | Delta |           % | Samples | Function                                        | Location                                              |
| ------: | ----: | ----------: | ------: | ----------------------------------------------- | ----------------------------------------------------- |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `applyTo(SourceCode, List)`                     | `org.codenarc.rule.AbstractAstVisitorRule`            |
|  -50.0% |    -1 | 0.6% → 0.3% |   2 → 1 | `collectViolations(SourceCode, RuleSet)`        | `org.codenarc.analyzer.AbstractSourceAnalyzer`        |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `applyTo(SourceCode, List)`                     | `org.codenarc.rule.formatting.LineLengthRule`         |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `getMetaClass()`                                | `org.codenarc.rule.basic.DuplicateCaseStatementRule`  |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `getMetaClass()`                                | `org.codenarc.rule.unnecessary.UnnecessarySetterRule` |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `getSuppressWarningsAnnotations(AnnotatedNode)` | `org.codenarc.analyzer.SuppressionAnalyzer`           |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `getTreeNode(int, Object)` (`java.util.HashMap$TreeNode`)

| Change | Delta |             % | Samples | Location                          |
| -----: | ----: | ------------: | ------: | --------------------------------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `java.util.HashMap$TreeNode:2048` |

##### `privateGetDeclaredMethods(boolean)` (`java.lang.Class`)

|  Change | Delta |      % | Samples | Location               |
| ------: | ----: | -----: | ------: | ---------------------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `java.lang.Class:3580` |

##### `<init>(Method, boolean)` (`java.lang.invoke.MemberName`)

|  Change | Delta |      % | Samples | Location                          |
| ------: | ----: | -----: | ------: | --------------------------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `java.lang.invoke.MemberName:535` |

##### `getReachableConfigSet(CharStream, ATNConfigSet, ATNConfigSet, int)` (`groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`)

| Change | Delta |              % | Samples | Location                                                  |
| -----: | ----: | -------------: | ------: | --------------------------------------------------------- |
| +50.0% |    +2 | 100.0% → 85.7% |   4 → 6 | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator:345` |
|    new |    +1 |   0.0% → 14.3% |   0 → 1 | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator:337` |

##### `getReturnState(int)` (`groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext`)

| Change | Delta |      % | Samples | Location                                                      |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------- |
| +42.9% |    +3 | 100.0% |  7 → 10 | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext:50` |

##### `expression(int)` (`org.apache.groovy.parser.antlr4.GroovyParser`)

| Change | Delta |             % | Samples | Location                                            |
| -----: | ----: | ------------: | ------: | --------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `org.apache.groovy.parser.antlr4.GroovyParser:9044` |

##### `internKey(ReferencedKeyMap, Object)` (`jdk.internal.util.ReferencedKeyMap`)

| Change | Delta |             % | Samples | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `jdk.internal.util.ReferencedKeyMap:441` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change | Delta |            % | Samples | Location                |
| ------: | ----: | -----------: | ------: | ----------------------- |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `java.util.HashMap:635` |
|  +33.3% |    +1 |        50.0% |   3 → 4 | `java.util.HashMap:644` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `java.util.HashMap:669` |
|     new |    +1 | 0.0% → 12.5% |   0 → 1 | `java.util.HashMap:641` |
|     new |    +1 | 0.0% → 12.5% |   0 → 1 | `java.util.HashMap:646` |

##### `join(PredictionContext, PredictionContext)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache`)

| Change | Delta |             % | Samples | Location                                                      |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache:79` |

##### `getMethods(Class, String)` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

| Change | Delta |            % | Samples | Location                                                    |
| -----: | ----: | -----------: | ------: | ----------------------------------------------------------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex:202` |

##### `cast(Object)` (`java.lang.Class`)

|  Change | Delta |              % | Samples | Location               |
| ------: | ----: | -------------: | ------: | ---------------------- |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `java.lang.Class:4069` |
|     new |    +1 |   0.0% → 33.3% |   0 → 1 | `java.lang.Class:4068` |

##### `chooseMeta(MetaClassImpl)` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

| Change | Delta |            % | Samples | Location                                                      |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector:597` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector:604` |

##### `removeNode(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

| Change | Delta |            % | Samples | Location                |
| -----: | ----: | -----------: | ------: | ----------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `java.util.HashMap:830` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `java.util.HashMap:853` |

##### `isChainedUnique(Expression)` (`org.codenarc.rule.groovyism.AssignCollectionUniqueAstVisitor`)

| Change | Delta |             % | Samples | Location                                                          |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.rule.groovyism.AssignCollectionUniqueAstVisitor:59` |

##### `getMagnitude()` (`org.gmetrics.metric.abc.AbcVector`)

| Change | Delta |             % | Samples | Location                               |
| -----: | ----: | ------------: | ------: | -------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.gmetrics.metric.abc.AbcVector:44` |

##### `<init>(Metric, MetricLevel, AbcVector, Integer)` (`org.gmetrics.metric.abc.result.AbcMetricResult`)

| Change | Delta |             % | Samples | Location                                            |
| -----: | ----: | ------------: | ------: | --------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.gmetrics.metric.abc.result.AbcMetricResult:40` |

##### `visitClassComplete(ClassNode)` (`org.codenarc.rule.convention.StaticFieldsBeforeInstanceFieldsAstVisitor`)

| Change | Delta |             % | Samples | Location                                                                     |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.rule.convention.StaticFieldsBeforeInstanceFieldsAstVisitor:51` |

##### `getNode(Object)` (`java.util.HashMap`)

|  Change | Delta |            % | Samples | Location                |
| ------: | ----: | -----------: | ------: | ----------------------- |
| removed |   -13 | 92.9% → 0.0% |  13 → 0 | `java.util.HashMap:582` |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `java.util.HashMap:585` |

##### `matches(Method, String, Class[])` (`java.lang.PublicMethods$Key`)

|  Change | Delta |             % | Samples | Location                          |
| ------: | ----: | ------------: | ------: | --------------------------------- |
| removed |    -9 | 100.0% → 0.0% |   9 → 0 | `java.lang.PublicMethods$Key:108` |

##### `get(Object)` (`java.util.concurrent.ConcurrentHashMap`)

| Change | Delta |             % | Samples | Location                                     |
| -----: | ----: | ------------: | ------: | -------------------------------------------- |
| -44.4% |    -4 | 90.0% → 83.3% |   9 → 5 | `java.util.concurrent.ConcurrentHashMap:946` |

##### `hashCodeRange(int, int)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `java.util.ArrayList:677` |

##### `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|  Change | Delta |             % | Samples | Location                                                    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------- |
| removed |    -2 |  20.0% → 0.0% |   2 → 0 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1759` |
| removed |    -2 |  20.0% → 0.0% |   2 → 0 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1789` |
| +200.0% |    +2 | 10.0% → 42.9% |   1 → 3 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1809` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1700` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1703` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

| Change | Delta |      % | Samples | Location                     |
| -----: | ----: | -----: | ------: | ---------------------------- |
| -25.0% |    -3 | 100.0% |  12 → 9 | `java.lang.reflect.Array:78` |

##### `bindArgumentL(int, Object)` (`java.lang.invoke.BoundMethodHandle`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `java.lang.invoke.BoundMethodHandle:72` |

##### `isQualified()` (`java.lang.module.ModuleDescriptor$Exports`)

|  Change | Delta |             % | Samples | Location                                        |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `java.lang.module.ModuleDescriptor$Exports:474` |

##### `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

|  Change | Delta |            % | Samples | Location                                |
| ------: | ----: | -----------: | ------: | --------------------------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `java.lang.invoke.MethodHandleImpl:333` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `java.lang.invoke.MethodHandleImpl:286` |

##### `getReachableTarget(Transition, int)` (`groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`)

| Change | Delta |      % | Samples | Location                                                  |
| -----: | ----: | -----: | ------: | --------------------------------------------------------- |
| -42.9% |    -3 | 100.0% |   7 → 4 | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator:367` |

##### `getTarget(int)` (`groovyjarjarantlr4.v4.runtime.dfa.DFAState`)

|  Change | Delta |             % | Samples | Location                                         |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `groovyjarjarantlr4.v4.runtime.dfa.DFAState:198` |

##### `getCachedContext(PredictionContext)` (`groovyjarjarantlr4.v4.runtime.atn.ATN`)

|  Change | Delta |             % | Samples | Location                                    |
| ------: | ----: | ------------: | ------: | ------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `groovyjarjarantlr4.v4.runtime.atn.ATN:120` |

##### `sync(int)` (`groovyjarjarantlr4.v4.runtime.BufferedTokenStream`)

| Change | Delta |      % | Samples | Location                                                |
| -----: | ----: | -----: | ------: | ------------------------------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `groovyjarjarantlr4.v4.runtime.BufferedTokenStream:153` |

##### `bindArgumentL(BoundMethodHandle, int, Object)` (`java.lang.invoke.LambdaFormEditor`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.lang.invoke.LambdaFormEditor:524` |

##### `bindTo(Object)` (`java.lang.invoke.MethodHandle`)

|  Change | Delta |            % | Samples | Location                             |
| ------: | ----: | -----------: | ------: | ------------------------------------ |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.lang.invoke.MethodHandle:1618` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.lang.invoke.MethodHandle:1619` |

##### `lambda$DOT$11(int)` (`java.util.regex.Pattern`)

|  Change | Delta |             % | Samples | Location                       |
| ------: | ----: | ------------: | ------: | ------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.util.regex.Pattern:5887` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|  Change | Delta |             % | Samples | Location                                      |
| ------: | ----: | ------------: | ------: | --------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.rule.AbstractAstVisitorRule:98` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

| Change | Delta |      % | Samples | Location                                          |
| -----: | ----: | -----: | ------: | ------------------------------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `org.codenarc.analyzer.AbstractSourceAnalyzer:44` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.formatting.LineLengthRule`)

|  Change | Delta |             % | Samples | Location                                         |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.rule.formatting.LineLengthRule:45` |

##### `getSuppressWarningsAnnotations(AnnotatedNode)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|  Change | Delta |             % | Samples | Location                                        |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.analyzer.SuppressionAnalyzer:238` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `getTreeNode(int, Object)` (`java.util.HashMap$TreeNode`)

| Change | Delta |             % | Samples | Caller            | Location            |
| -----: | ----: | ------------: | ------: | ----------------- | ------------------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `getNode(Object)` | `java.util.HashMap` |

##### `privateGetDeclaredMethods(boolean)` (`java.lang.Class`)

|  Change | Delta |      % | Samples | Caller                                          | Location          |
| ------: | ----: | -----: | ------: | ----------------------------------------------- | ----------------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `getMethodsRecursive(String, Class[], boolean)` | `java.lang.Class` |

##### `invokeVirtual(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

| Change | Delta |            % | Samples | Caller                           | Location                                            |
| -----: | ----: | -----------: | ------: | -------------------------------- | --------------------------------------------------- |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001565000` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070014e8000` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070015d0800` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001580800` |

##### `<init>(Method, boolean)` (`java.lang.invoke.MemberName`)

|  Change | Delta |      % | Samples | Caller           | Location                      |
| ------: | ----: | -----: | ------: | ---------------- | ----------------------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `<init>(Method)` | `java.lang.invoke.MemberName` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000070010b2800`)

| Change | Delta |            % | Samples | Caller                           | Location                                            |
| -----: | ----: | -----------: | ------: | -------------------------------- | --------------------------------------------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010bc000` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001115400` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001105400` |

##### `getReachableConfigSet(CharStream, ATNConfigSet, ATNConfigSet, int)` (`groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`)

| Change | Delta |      % | Samples | Caller                                          | Location                                              |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | ----------------------------------------------------- |
| +75.0% |    +3 | 100.0% |   4 → 7 | `computeTargetState(CharStream, DFAState, int)` | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator` |

##### `init(MemberName, Object)` (`java.lang.invoke.MethodHandleNatives`)

|  Change | Delta |      % | Samples | Caller                    | Location                      |
| ------: | ----: | -----: | ------: | ------------------------- | ----------------------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `<init>(Method, boolean)` | `java.lang.invoke.MemberName` |

##### `getReturnState(int)` (`groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext`)

| Change | Delta |      % | Samples | Caller                                                               | Location                                              |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------- | ----------------------------------------------------- |
| +42.9% |    +3 | 100.0% |  7 → 10 | `join(PredictionContext, PredictionContext, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |

##### `invokeExact_MT(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |             % | Samples | Caller                                                                                        | Location                                        |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------- | ----------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `expression(int)` (`org.apache.groovy.parser.antlr4.GroovyParser`)

| Change | Delta |             % | Samples | Caller                | Location                                       |
| -----: | ----: | ------------: | ------: | --------------------- | ---------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `commandExpression()` | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `guard(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700118d400`)

| Change | Delta |             % | Samples | Caller                                     | Location                                            |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | --------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700118d000` |

##### `internKey(ReferencedKeyMap, Object)` (`jdk.internal.util.ReferencedKeyMap`)

| Change | Delta |             % | Samples | Caller                             | Location                             |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ------------------------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `intern(ReferencedKeyMap, Object)` | `jdk.internal.util.ReferencedKeyMap` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller                | Location            |
| -----: | ----: | -----: | ------: | --------------------- | ------------------- |
| +33.3% |    +2 | 100.0% |   6 → 8 | `put(Object, Object)` | `java.util.HashMap` |

##### `join(PredictionContext, PredictionContext)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache`)

| Change | Delta |             % | Samples | Caller                                                               | Location                                              |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------- | ----------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `join(PredictionContext, PredictionContext, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |

##### `getMethods(Class, String)` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

|  Change | Delta |            % | Samples | Caller                                   | Location                    |
| ------: | ----: | -----------: | ------: | ---------------------------------------- | --------------------------- |
|     new |    +3 | 0.0% → 75.0% |   0 → 3 | `getMethods(Class, String, boolean)`     | `groovy.lang.MetaClassImpl` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `retrieveStaticMethod(String, Object[])` | `groovy.lang.MetaClassImpl` |

##### `cast(Object)` (`java.lang.Class`)

|  Change | Delta |      % | Samples | Caller                                  | Location                                     |
| ------: | ----: | -----: | ------: | --------------------------------------- | -------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001002c00`)

| Change | Delta |            % | Samples | Caller                   | Location                                            |
| -----: | ----: | -----------: | ------: | ------------------------ | --------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `invoke(Object, int)`    | `java.lang.invoke.LambdaForm$MH.0x000000700109bc00` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700183f000` |

##### `invokeStatic(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|  Change | Delta |            % | Samples | Caller                           | Location                                            |
| ------: | ----: | -----------: | ------: | -------------------------------- | --------------------------------------------------- |
|     new |    +3 | 0.0% → 60.0% |   0 → 3 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001105800` |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000c801105800` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000c801102c00` |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001102c00` |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001118800` |

##### `chooseMeta(MetaClassImpl)` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

| Change | Delta |             % | Samples | Caller                | Location                                                  |
| -----: | ----: | ------------: | ------: | --------------------- | --------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `setCallSiteTarget()` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `removeNode(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

| Change | Delta |            % | Samples | Caller           | Location                  |
| -----: | ----: | -----------: | ------: | ---------------- | ------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `remove(Object)` | `java.util.HashMap`       |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `get(Object)`    | `java.util.LinkedHashMap` |

##### `isChainedUnique(Expression)` (`org.codenarc.rule.groovyism.AssignCollectionUniqueAstVisitor`)

| Change | Delta |             % | Samples | Caller                                  | Location                                             |
| -----: | ----: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800` |

##### `$getStaticMetaClass()` (`org.codenarc.rule.basic.AssertWithinFinallyBlockAstVisitor`)

| Change | Delta |             % | Samples | Caller     | Location                                            |
| -----: | ----: | ------------: | ------: | ---------- | --------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>()` | `org.codenarc.rule.basic.AbstractFinallyAstVisitor` |

##### `getMagnitude()` (`org.gmetrics.metric.abc.AbcVector`)

| Change | Delta |             % | Samples | Caller                          | Location                                     |
| -----: | ----: | ------------: | ------: | ------------------------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `<init>(Metric, MetricLevel, AbcVector, Integer)` (`org.gmetrics.metric.abc.result.AbcMetricResult`)

| Change | Delta |             % | Samples | Caller                                                     | Location                                             |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------- | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `newInvokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001003400` |

##### `visitClassComplete(ClassNode)` (`org.codenarc.rule.convention.StaticFieldsBeforeInstanceFieldsAstVisitor`)

| Change | Delta |             % | Samples | Caller                  | Location                               |
| -----: | ----: | ------------: | ------: | ----------------------- | -------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `getNode(Object)` (`java.util.HashMap`)

|  Change | Delta |              % | Samples | Caller        | Location                  |
| ------: | ----: | -------------: | ------: | ------------- | ------------------------- |
| removed |    -9 |   64.3% → 0.0% |   9 → 0 | `get(Object)` | `java.util.LinkedHashMap` |
|  -60.0% |    -3 | 35.7% → 100.0% |   5 → 2 | `get(Object)` | `java.util.HashMap`       |

##### `matches(Method, String, Class[])` (`java.lang.PublicMethods$Key`)

|  Change | Delta |             % | Samples | Caller                                       | Location                             |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | ------------------------------------ |
| removed |    -9 | 100.0% → 0.0% |   9 → 0 | `filter(Method[], String, Class[], boolean)` | `java.lang.PublicMethods$MethodList` |

##### `get(Object)` (`java.util.concurrent.ConcurrentHashMap`)

| Change | Delta |             % | Samples | Caller                                                                                  | Location                                               |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| -75.0% |    -3 | 40.0% → 16.7% |   4 → 1 | `getCachedContext(PredictionContext, ConcurrentMap, PredictionContext$IdentityHashMap)` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`  |
| -25.0% |    -1 | 40.0% → 50.0% |   4 → 3 | `getNoCheckStale(Object)`                                                               | `jdk.internal.util.ReferencedKeyMap`                   |
| -50.0% |    -1 | 20.0% → 16.7% |   2 → 1 | `adaptivePredict(TokenStream, int, ParserRuleContext, boolean)`                         | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
|    new |    +1 |  0.0% → 16.7% |   0 → 1 | `getDefinedPackage(String)`                                                             | `java.lang.ClassLoader`                                |

##### `hashCodeRange(int, int)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Caller       | Location              |
| ------: | ----: | ------------: | ------: | ------------ | --------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `hashCode()` | `java.util.ArrayList` |

##### `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|  Change | Delta |              % | Samples | Caller                                                                                                        | Location                                               |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
|  -22.2% |    -2 | 90.0% → 100.0% |   9 → 7 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| removed |    -1 |   10.0% → 0.0% |   1 → 0 | `closure(ATNConfigSet, ATNConfigSet, boolean, boolean, PredictionContextCache, boolean)`                      | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

| Change | Delta |      % | Samples | Caller                              | Location                                             |
| -----: | ----: | -----: | ------: | ----------------------------------- | ---------------------------------------------------- |
| -25.0% |    -3 | 100.0% |  12 → 9 | `invokeStatic(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000700109a000` |

##### `bindArgumentL(int, Object)` (`java.lang.invoke.BoundMethodHandle`)

|  Change | Delta |             % | Samples | Caller                       | Location                        |
| ------: | ----: | ------------: | ------: | ---------------------------- | ------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `bindArgumentL(int, Object)` | `java.lang.invoke.MethodHandle` |

##### `isQualified()` (`java.lang.module.ModuleDescriptor$Exports`)

|  Change | Delta |             % | Samples | Caller                                                  | Location                                |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------- | --------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `lambda$isExported$9(String, ModuleDescriptor$Exports)` | `org.codehaus.groovy.vmplugin.v9.Java9` |

##### `open0(String)` (`java.io.FileInputStream`)

| Change | Delta |      % | Samples | Caller         | Location                  |
| -----: | ----: | -----: | ------: | -------------- | ------------------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `open(String)` | `java.io.FileInputStream` |

##### `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

|  Change | Delta |             % | Samples | Caller                                                            | Location                            |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------- | ----------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `makePairwiseConvert(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `getReachableTarget(Transition, int)` (`groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`)

| Change | Delta |      % | Samples | Caller                                                               | Location                                              |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------- | ----------------------------------------------------- |
| -42.9% |    -3 | 100.0% |   7 → 4 | `getReachableConfigSet(CharStream, ATNConfigSet, ATNConfigSet, int)` | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|  Change | Delta |             % | Samples | Caller                         | Location                                          |
| ------: | ----: | ------------: | ------: | ------------------------------ | ------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `getTarget(int)` (`groovyjarjarantlr4.v4.runtime.dfa.DFAState`)

|  Change | Delta |             % | Samples | Caller                                  | Location                                               |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ------------------------------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `getExistingTargetState(DFAState, int)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `getCachedContext(PredictionContext)` (`groovyjarjarantlr4.v4.runtime.atn.ATN`)

|  Change | Delta |             % | Samples | Caller                          | Location                                         |
| ------: | ----: | ------------: | ------: | ------------------------------- | ------------------------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `optimizeConfigs(ATNSimulator)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet` |

##### `sync(int)` (`groovyjarjarantlr4.v4.runtime.BufferedTokenStream`)

|  Change | Delta |             % | Samples | Caller                             | Location                                            |
| ------: | ----: | ------------: | ------: | ---------------------------------- | --------------------------------------------------- |
| removed |    -2 |  66.7% → 0.0% |   2 → 0 | `nextTokenOnChannel(int, int)`     | `groovyjarjarantlr4.v4.runtime.BufferedTokenStream` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `consume()`                        | `groovyjarjarantlr4.v4.runtime.BufferedTokenStream` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `previousTokenOnChannel(int, int)` | `groovyjarjarantlr4.v4.runtime.BufferedTokenStream` |

##### `invoke(Object, int)` (`java.lang.invoke.LambdaForm$MH.0x000000700109bc00`)

|  Change | Delta |            % | Samples | Caller                                      | Location                                            |
| ------: | ----: | -----------: | ------: | ------------------------------------------- | --------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `collector(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700109c000` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `collector(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001140000` |

##### `bindArgumentL(BoundMethodHandle, int, Object)` (`java.lang.invoke.LambdaFormEditor`)

|  Change | Delta |             % | Samples | Caller                       | Location                             |
| ------: | ----: | ------------: | ------: | ---------------------------- | ------------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `bindArgumentL(int, Object)` | `java.lang.invoke.BoundMethodHandle` |

##### `bindTo(Object)` (`java.lang.invoke.MethodHandle`)

|  Change | Delta |            % | Samples | Caller                                    | Location                                                  |
| ------: | ----: | -----------: | ------: | ----------------------------------------- | --------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `setGuards(Object)`                       | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `setMetaClassCallHandleIfNeeded(boolean)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `lambda$DOT$11(int)` (`java.util.regex.Pattern`)

|  Change | Delta |             % | Samples | Caller    | Location                                             |
| ------: | ----: | ------------: | ------: | --------- | ---------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `is(int)` | `java.util.regex.Pattern$$Lambda.0x000000c8010e89e8` |

##### `invoke(Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010b3400`)

|  Change | Delta |             % | Samples | Caller                           | Location                                            |
| ------: | ----: | ------------: | ------: | -------------------------------- | --------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c801117c00` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|  Change | Delta |             % | Samples | Caller                | Location                         |
| ------: | ----: | ------------: | ------: | --------------------- | -------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `applyTo(SourceCode)` | `org.codenarc.rule.AbstractRule` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

| Change | Delta |      % | Samples | Caller                                          | Location                                             |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010bc800` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.formatting.LineLengthRule`)

|  Change | Delta |             % | Samples | Caller                | Location                         |
| ------: | ----: | ------------: | ------: | --------------------- | -------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `applyTo(SourceCode)` | `org.codenarc.rule.AbstractRule` |

##### `getMetaClass()` (`org.codenarc.rule.basic.DuplicateCaseStatementRule`)

|  Change | Delta |             % | Samples | Caller              | Location                                                  |
| ------: | ----: | ------------: | ------: | ------------------- | --------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `setGuards(Object)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `getMetaClass()` (`org.codenarc.rule.unnecessary.UnnecessarySetterRule`)

|  Change | Delta |             % | Samples | Caller              | Location                                                  |
| ------: | ----: | ------------: | ------: | ------------------- | --------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `setGuards(Object)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `getSuppressWarningsAnnotations(AnnotatedNode)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|  Change | Delta |             % | Samples | Caller                                  | Location                                    |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getSuppressedRuleNames(AnnotatedNode)` | `org.codenarc.analyzer.SuppressionAnalyzer` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

##### Standard library

|    Change | Delta |             % |  Samples | Function                                         | Location                                            |
| --------: | ----: | ------------: | -------: | ------------------------------------------------ | --------------------------------------------------- |
| +11700.0% |  +117 |  0.3% → 35.9% |  1 → 118 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001141000` |
|  +9400.0% |   +94 |  0.3% → 28.9% |   1 → 95 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001140c00` |
|  +8200.0% |   +82 |  0.3% → 25.2% |   1 → 83 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001150800` |
|  +2650.0% |   +53 |  0.6% → 16.7% |   2 → 55 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700138d800` |
|  +5200.0% |   +52 |  0.3% → 16.1% |   1 → 53 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001830400` |
|    +60.0% |   +51 | 24.9% → 41.3% | 85 → 136 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700113fc00` |
|   +165.5% |   +48 |  8.5% → 23.4% |  29 → 77 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070012d8400` |
|   +571.4% |   +40 |  2.0% → 14.3% |   7 → 47 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001117000` |
|   +412.5% |   +33 |  2.3% → 12.5% |   8 → 41 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070012c5c00` |
|   +400.0% |   +24 |   1.8% → 9.1% |   6 → 30 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001145c00` |
|  +1200.0% |   +24 |   0.6% → 7.9% |   2 → 26 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700182b000` |
|  +2300.0% |   +23 |   0.3% → 7.3% |   1 → 24 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070012b8400` |
|    +46.8% |   +22 | 13.7% → 21.0% |  47 → 69 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070013dd400` |
|   +190.9% |   +21 |   3.2% → 9.7% |  11 → 32 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070013dd000` |
|  +2000.0% |   +20 |   0.3% → 6.4% |   1 → 21 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700138c400` |
|   +500.0% |   +15 |   0.9% → 5.5% |   3 → 18 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700160b400` |
|   +185.7% |   +13 |   2.0% → 6.1% |   7 → 20 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001105400` |
|    +12.8% |   +11 | 25.1% → 29.5% |  86 → 97 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070013d3800` |
|   +100.0% |   +10 |   2.9% → 6.1% |  10 → 20 | `invokeVirtual(Object, Object, Object)`          | `java.lang.invoke.DirectMethodHandle$Holder`        |
|   +500.0% |   +10 |   0.6% → 3.6% |   2 → 12 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001105800` |

##### Ours

|  Change | Delta |             % |  Samples | Function                                                | Location                                                                       |
| ------: | ----: | ------------: | -------: | ------------------------------------------------------- | ------------------------------------------------------------------------------ |
|   +9.5% |    +8 | 24.6% → 28.0% |  84 → 92 | `applyTo(SourceCode)`                                   | `org.codenarc.rule.AbstractRule`                                               |
|   +6.3% |    +6 | 28.1% → 31.0% | 96 → 102 | `doCall(Object)`                                        | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`     |
| +600.0% |    +6 |   0.3% → 2.1% |    1 → 7 | `calculate(MethodNode, SourceCode)`                     | `org.gmetrics.metric.abc.AbcMetric`                                            |
| +600.0% |    +6 |   0.3% → 2.1% |    1 → 7 | `addMethodsToMetricResults(SourceCode, ClassNode, Map)` | `org.gmetrics.metric.AbstractMethodMetric`                                     |
| +300.0% |    +6 |   0.6% → 2.4% |    2 → 8 | `buildLookupTable()`                                    | `org.codenarc.plugin.disablerules.LookupTable`                                 |
| +500.0% |    +5 |   0.3% → 1.8% |    1 → 6 | `doCall(Object)`                                        | `org.gmetrics.metric.AbstractMethodMetric$_addMethodsToMetricResults_closure4` |
| +500.0% |    +5 |   0.3% → 1.8% |    1 → 6 | `doCall(Object, Object)`                                | `org.codenarc.plugin.disablerules.LookupTable$_buildLookupTable_closure1`      |
|  +80.0% |    +4 |   1.5% → 2.7% |    5 → 9 | `getAstVisitor()`                                       | `org.codenarc.rule.AbstractAstVisitorRule`                                     |
|  +28.6% |    +4 |   4.1% → 5.5% |  14 → 18 | `doCall(Object)`                                        | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`    |
| +300.0% |    +3 |   0.3% → 1.2% |    1 → 4 | `getLines()`                                            | `org.codenarc.source.AbstractSourceCode`                                       |
|     new |    +3 |   0.0% → 0.9% |    0 → 3 | `main(String[])`                                        | `org.codenarc.CodeNarc`                                                        |
|     new |    +3 |   0.0% → 0.9% |    0 → 3 | `doCall(ClassNode)`                                     | `org.codenarc.rule.formatting.ClassEndsWithBlankLineAstVisitor$_closure1`      |
|     new |    +3 |   0.0% → 0.9% |    0 → 3 | `<init>(Metric, MetricLevel, AbcVector, Integer)`       | `org.gmetrics.metric.abc.result.AbcMetricResult`                               |
|     new |    +3 |   0.0% → 0.9% |    0 → 3 | `isSingleLineClass(ClassNode)`                          | `org.codenarc.rule.formatting.ClassEndsWithBlankLineAstVisitor`                |
| +100.0% |    +2 |   0.6% → 1.2% |    2 → 4 | `doCall(Object)`                                        | `org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`             |
| +200.0% |    +2 |   0.3% → 0.9% |    1 → 3 | `assertClassImplementsRuleInterface(Class)`             | `org.codenarc.ruleset.RuleSetUtil`                                             |
|   +2.7% |    +2 | 21.3% → 22.8% |  73 → 75 | `applyTo(SourceCode, List)`                             | `org.codenarc.rule.AbstractAstVisitorRule`                                     |
| +100.0% |    +2 |   0.6% → 1.2% |    2 → 4 | `super$3$applyTo(SourceCode, List)`                     | `org.codenarc.rule.formatting.IndentationRule`                                 |
| +200.0% |    +2 |   0.3% → 0.9% |    1 → 3 | `findLineWithDeclaration(ASTNode, String)`              | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`            |
| +200.0% |    +2 |   0.3% → 0.9% |    1 → 3 | `checkDeclaration(ASTNode, String, String)`             | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`            |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

##### Standard library

| Change | Delta |             % |   Samples | Function                                                                                         | Location                                                  |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------- |
| -96.9% |   -95 |  28.7% → 0.9% |    98 → 3 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x0000007001105c00`       |
| -98.9% |   -91 |  26.9% → 0.3% |    92 → 1 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000700115c800`       |
| -96.6% |   -86 |  26.0% → 0.9% |    89 → 3 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000007001184c00`       |
| -98.8% |   -79 |  23.4% → 0.3% |    80 → 1 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x0000007001230800`       |
| -86.5% |   -64 |  21.6% → 3.0% |   74 → 10 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000007001133400`       |
| -98.3% |   -57 |  17.0% → 0.3% |    58 → 1 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x0000007001230400`       |
| -40.1% |   -55 | 40.1% → 24.9% |  137 → 82 | `invoke(Object, Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x0000007001142000`       |
| -98.0% |   -49 |  14.6% → 0.3% |    50 → 1 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x0000007001597c00`       |
| -88.4% |   -38 |  12.6% → 1.5% |    43 → 5 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000007001179000`       |
| -75.6% |   -34 |  13.2% → 3.3% |   45 → 11 | `invoke(Object, Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000700118c000`       |
| -91.2% |   -31 |   9.9% → 0.9% |    34 → 3 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x00000070016a6400`       |
| -78.9% |   -30 |  11.1% → 2.4% |    38 → 8 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x0000007001135400`       |
| -24.1% |   -27 | 32.7% → 25.8% |  112 → 85 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x0000007001119400`       |
| -90.5% |   -19 |   6.1% → 0.6% |    21 → 2 | `invoke(Object, Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x000000700141f400`       |
| -85.7% |   -18 |   6.1% → 0.9% |    21 → 3 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x00000070015a2400`       |
| -10.9% |   -16 | 43.0% → 39.8% | 147 → 131 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`           |
|  -5.5% |   -14 | 74.9% → 73.6% | 256 → 242 | `guard(Object, Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x0000007001118400`       |
| -51.9% |   -14 |   7.9% → 4.0% |   27 → 13 | `setGuards(Object)`                                                                              | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| -93.3% |   -14 |   4.4% → 0.3% |    15 → 1 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x00000070015e9000`       |
| -59.1% |   -13 |   6.4% → 2.7% |    22 → 9 | `collector(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x0000007001114c00`       |

##### Ours

|  Change | Delta |             % | Samples | Function                                         | Location                                                                                     |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | -------------------------------------------------------------------------------------------- |
|  -11.9% |   -10 | 24.6% → 22.5% | 84 → 74 | `measureRuleProcessingTime(Rule, Closure)`       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                               |
|  -17.5% |   -10 | 16.7% → 14.3% | 57 → 47 | `collectViolations(SourceCode, RuleSet)`         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                               |
|  -16.3% |    -8 | 14.3% → 12.5% | 49 → 41 | `visitMethod(MethodNode)`                        | `org.codenarc.rule.AbstractAstVisitor`                                                       |
|  -15.1% |    -8 | 15.5% → 13.7% | 53 → 45 | `processFile(String, DirectoryResults, RuleSet)` | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                                             |
|  -10.2% |    -5 | 14.3% → 13.4% | 49 → 44 | `isRuleSuppressed(Rule)`                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                                  |
|   -7.6% |    -5 | 19.3% → 18.5% | 66 → 61 | `visitClass(ClassNode)`                          | `org.codenarc.rule.AbstractAstVisitor`                                                       |
|   -5.0% |    -4 | 23.4% → 23.1% | 80 → 76 | `init()`                                         | `org.codenarc.source.AbstractSourceCode`                                                     |
|   -7.5% |    -4 | 15.5% → 14.9% | 53 → 49 | `getAst()`                                       | `org.codenarc.source.AbstractSourceCode`                                                     |
|   -7.8% |    -4 | 14.9% → 14.3% | 51 → 47 | `init()`                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                                  |
|  -80.0% |    -4 |   1.5% → 0.3% |   5 → 1 | `processSourceLine(String, int)`                 | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`                              |
|  -80.0% |    -4 |   1.5% → 0.3% |   5 → 1 | `doCall(Object)`                                 | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor$_visitClassComplete_closure1` |
| removed |    -4 |   1.2% → 0.0% |   4 → 0 | `<init>(String, boolean)`                        | `org.codenarc.util.WildcardPattern`                                                          |
| removed |    -3 |   0.9% → 0.0% |   3 → 0 | `doCall(Object)`                                 | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor$_visitArgumentlistExpression_closure1`     |
|  -75.0% |    -3 |   1.2% → 0.3% |   4 → 1 | `doCall(Object)`                                 | `org.codenarc.util.WildcardPattern$_closure1`                                                |
| removed |    -3 |   0.9% → 0.0% |   3 → 0 | `doCall(Object)`                                 | `org.codenarc.report.TextReportWriter$_writeFileViolations_closure4`                         |
|  -60.0% |    -3 |   1.5% → 0.6% |   5 → 2 | `writeFileViolations(Writer, FileResults)`       | `org.codenarc.report.TextReportWriter`                                                       |
|  -18.2% |    -2 |   3.2% → 2.7% |  11 → 9 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`                   |
| removed |    -2 |   0.6% → 0.0% |   2 → 0 | `getAstVisitor()`                                | `org.codenarc.rule.convention.HashtableIsObsoleteRule`                                       |
|  -66.7% |    -2 |   0.9% → 0.3% |   3 → 1 | `visitBlockStatement(BlockStatement)`            | `org.codenarc.rule.formatting.IndentationAstVisitor`                                         |
| removed |    -2 |   0.6% → 0.0% |   2 → 0 | `visitConstructorOrMethod(MethodNode, boolean)`  | `org.codenarc.rule.formatting.SpaceAfterMethodDeclarationNameRuleAstVisitor`                 |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001141000`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |   +94 |  0.0% → 79.7% |  0 → 94 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x0000007001118000`  |
|     new |   +25 |  0.0% → 21.2% |  0 → 25 | `delegate(Object, Object, Object)`                                                          | `java.lang.invoke.DelegatingMethodHandle$Holder`     |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000c8010b2800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001140c00`)

|  Change | Delta |             % | Samples | Callee                                   | Location                                             |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | ---------------------------------------------------- |
|     new |   +95 | 0.0% → 100.0% |  0 → 95 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700113fc00`  |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeStatic(Object, Object)`           | `java.lang.invoke.LambdaForm$DMH.0x000000c801001c00` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001150800`)

|  Change | Delta |             % | Samples | Callee                          | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------------------- | --------------------------------------------------- |
|     new |   +83 | 0.0% → 100.0% |  0 → 83 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000c801105800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700138d800`)

|  Change | Delta |             % | Samples | Callee                                             | Location                                            |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | --------------------------------------------------- |
|     new |   +55 | 0.0% → 100.0% |  0 → 55 | `reinvoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700118d000` |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `reinvoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c8012b9c00` |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001830400`)

|  Change | Delta |             % | Samples | Callee                                     | Location                                         |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | ------------------------------------------------ |
|     new |   +53 | 0.0% → 100.0% |  0 → 53 | `delegate(Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700113fc00`)

|  Change | Delta |             % | Samples | Callee                                                    | Location                                             |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | ---------------------------------------------------- |
|     new |  +136 | 0.0% → 100.0% | 0 → 136 | `invokeInterface(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010bd400` |
| removed |   -82 |  96.5% → 0.0% |  82 → 0 | `invokeVirtual(Object, Object, Object, Object)`           | `java.lang.invoke.LambdaForm$DMH.0x000000c80138c800` |
| removed |    -3 |   3.5% → 0.0% |   3 → 0 | `invokeSpecial(Object, Object, Object, Object)`           | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070012d8400`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |   +76 |  0.0% → 98.7% |  0 → 76 | `invokeVirtual(Object, Object, int)`                                                        | `java.lang.invoke.LambdaForm$DMH.0x0000007001152800` |
| removed |   -29 | 100.0% → 0.0% |  29 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000c8010b2800` |
|     new |    +1 |   0.0% → 1.3% |   0 → 1 | `invokeSpecial(Object, Object, int)`                                                        | `java.lang.invoke.LambdaForm$DMH.0x00000070013ea400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001117000`)

|  Change | Delta |            % | Samples | Callee                                          | Location                                             |
| ------: | ----: | -----------: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
|     new |   +46 | 0.0% → 97.9% |  0 → 46 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010bc800` |
| removed |    -5 | 71.4% → 0.0% |   5 → 0 | `newInvokeSpecial(Object, Object)`              | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |    -2 | 28.6% → 0.0% |   2 → 0 | `invokeStatic(Object, Object)`                  | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |    +1 |  0.0% → 2.1% |   0 → 1 | `collector(Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x000000700109c000`  |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070012c5c00`)

|  Change | Delta |             % | Samples | Callee                                  | Location                                             |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
|     new |   +41 | 0.0% → 100.0% |  0 → 41 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001101c00` |
| removed |    -8 | 100.0% → 0.0% |   8 → 0 | `collector(Object, Object, Object)`     | `java.lang.invoke.LambdaForm$MH.0x000000c801114c00`  |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001145c00`)

|  Change | Delta |             % | Samples | Callee                             | Location                                            |
| ------: | ----: | ------------: | ------: | ---------------------------------- | --------------------------------------------------- |
|     new |   +29 |  0.0% → 96.7% |  0 → 29 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001118000` |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `delegate(Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |    +1 |   0.0% → 3.3% |   0 → 1 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700182b000`)

|  Change | Delta |             % | Samples | Callee                                             | Location                                            |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | --------------------------------------------------- |
|     new |   +26 | 0.0% → 100.0% |  0 → 26 | `delegate(Object, Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `reinvoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c8012b9c00` |

##### `invoke(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070012b8400`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |   +24 | 0.0% → 100.0% |  0 → 24 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010b2800` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeSpecial(Object, Object, Object, Object, Object)`                                     | `java.lang.invoke.LambdaForm$DMH.0x000000c80118e800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070013dd400`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |   +69 | 0.0% → 100.0% |  0 → 69 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010b2800` |
| removed |   -47 | 100.0% → 0.0% |  47 → 0 | `invokeVirtual(Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$DMH.0x000000c801101c00` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070013dd000`)

|  Change | Delta |      % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| +190.9% |   +21 | 100.0% | 11 → 32 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010b2800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700138c400`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |   +21 | 0.0% → 100.0% |  0 → 21 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010b2800` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeInterface(Object, Object, int)`                                                      | `java.lang.invoke.LambdaForm$DMH.0x000000c8013cbc00` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700160b400`)

|  Change | Delta |             % | Samples | Callee                                             | Location                                            |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | --------------------------------------------------- |
|     new |   +18 | 0.0% → 100.0% |  0 → 18 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |    -2 |  66.7% → 0.0% |   2 → 0 | `reinvoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000c801118000` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `delegate(Object, Object, Object)`                 | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001105400`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |   +19 |  0.0% → 95.0% |  0 → 19 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010b2800` |
| removed |    -7 | 100.0% → 0.0% |   7 → 0 | `reinvoke(Object, Object, Object, long)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c801396400`  |
|     new |    +1 |   0.0% → 5.0% |   0 → 1 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001002c00`  |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070013d3800`)

|  Change | Delta |             % | Samples | Callee                                  | Location                                             |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
|     new |   +97 | 0.0% → 100.0% |  0 → 97 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |   -86 | 100.0% → 0.0% |  86 → 0 | `invokeVirtual(Object, Object, int)`    | `java.lang.invoke.LambdaForm$DMH.0x000000c801152800` |

##### `invokeVirtual(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|  Change | Delta |             % | Samples | Callee                                                    | Location                                                         |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | ---------------------------------------------------------------- |
| removed |    -2 |  20.0% → 0.0% |   2 → 0 | `super$2$visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`               |
| +200.0% |    +2 | 10.0% → 15.0% |   1 → 3 | `super$3$visitMethod(MethodNode)`                         | `org.gmetrics.metric.abc.AbcAstVisitor`                          |
|     new |    +2 |  0.0% → 10.0% |   0 → 2 | `super$3$visitBlockStatement(BlockStatement)`             | `org.codenarc.rule.formatting.SpaceAfterOpeningBraceAstVisitor`  |
|     new |    +2 |  0.0% → 10.0% |   0 → 2 | `super$3$visitExpressionStatement(ExpressionStatement)`   | `org.codenarc.rule.groovyism.UseCollectNestedAstVisitor`         |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `super$3$visitBlockStatement(BlockStatement)`             | `org.codenarc.rule.formatting.SpaceBeforeOpeningBraceAstVisitor` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001105800`)

|  Change | Delta |             % | Samples | Callee                                                     | Location                                            |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------- | --------------------------------------------------- |
|     new |    +9 |  0.0% → 75.0% |   0 → 9 | `collector(Object, Object)`                                | `java.lang.invoke.LambdaForm$MH.0x000000700109c000` |
|     new |    +3 |  0.0% → 25.0% |   0 → 3 | `invokeStatic(Object, Object, Object)`                     | `java.lang.invoke.DirectMethodHandle$Holder`        |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `delegate(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|  Change | Delta |             % | Samples | Callee                      | Location                                                  |
| ------: | ----: | ------------: | ------: | --------------------------- | --------------------------------------------------------- |
|     new |    +2 |   0.0% → 2.2% |   0 → 2 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.BlankLineBeforePackageRule` |
|   -1.4% |    -1 | 82.1% → 73.9% | 69 → 68 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`                |
|  +50.0% |    +1 |   2.4% → 3.3% |   2 → 3 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.IndentationRule`            |
| +100.0% |    +1 |   1.2% → 2.2% |   1 → 2 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.LineLengthRule`             |
|  -50.0% |    -1 |   2.4% → 1.1% |   2 → 1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.unused.UnusedVariableRule`             |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|  Change | Delta |             % | Samples | Callee                                   | Location                                                                             |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------------ |
|  +12.3% |    +9 | 76.0% → 80.4% | 73 → 82 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                                   |
|   -9.1% |    -2 | 22.9% → 19.6% | 22 → 20 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                                   |
| removed |    -1 |   1.0% → 0.0% |   1 → 0 | `<init>(Object, Object, Reference)`      | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3$_closure7` |

##### `calculate(MethodNode, SourceCode)` (`org.gmetrics.metric.abc.AbcMetric`)

|  Change | Delta |              % | Samples | Callee                                                    | Location                                                 |
| ------: | ----: | -------------: | ------: | --------------------------------------------------------- | -------------------------------------------------------- |
| +300.0% |    +3 | 100.0% → 57.1% |   1 → 4 | `call(Object, Object)`                                    | `org.codehaus.groovy.ast.GroovyClassVisitor$visitMethod` |
|     new |    +3 |   0.0% → 42.9% |   0 → 3 | `callConstructor(Object, Object, Object, Object, Object)` | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`  |

##### `addMethodsToMetricResults(SourceCode, ClassNode, Map)` (`org.gmetrics.metric.AbstractMethodMetric`)

|  Change | Delta |      % | Samples | Callee                 | Location                                                |
| ------: | ----: | -----: | ------: | ---------------------- | ------------------------------------------------------- |
| +600.0% |    +6 | 100.0% |   1 → 7 | `call(Object, Object)` | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |

##### `buildLookupTable()` (`org.codenarc.plugin.disablerules.LookupTable`)

|  Change | Delta |      % | Samples | Callee                                   | Location                           |
| ------: | ----: | -----: | ------: | ---------------------------------------- | ---------------------------------- |
| +300.0% |    +6 | 100.0% |   2 → 8 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.gmetrics.metric.AbstractMethodMetric$_addMethodsToMetricResults_closure4`)

|  Change | Delta |      % | Samples | Callee                                      | Location                                                |
| ------: | ----: | -----: | ------: | ------------------------------------------- | ------------------------------------------------------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `callCurrent(GroovyObject, Object, Object)` | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |

##### `doCall(Object, Object)` (`org.codenarc.plugin.disablerules.LookupTable$_buildLookupTable_closure1`)

|  Change | Delta |              % | Samples | Callee                                   | Location                           |
| ------: | ----: | -------------: | ------: | ---------------------------------------- | ---------------------------------- |
|     new |    +3 |   0.0% → 50.0% |   0 → 3 | `linkToCallSite(Object, int, Object)`    | `java.lang.invoke.Invokers$Holder` |
| +200.0% |    +2 | 100.0% → 50.0% |   1 → 3 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`)

| Change | Delta |              % | Samples | Callee          | Location                                 |
| -----: | ----: | -------------: | ------: | --------------- | ---------------------------------------- |
| +60.0% |    +3 | 100.0% → 88.9% |   5 → 8 | `newInstance()` | `java.lang.Class`                        |
|    new |    +1 |   0.0% → 11.1% |   0 → 1 | `getLines()`    | `org.codenarc.source.AbstractSourceCode` |

##### `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)

|  Change | Delta |             % | Samples | Callee                                                   | Location                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------- | ---------------------------------- |
|  +33.3% |    +4 | 85.7% → 88.9% | 12 → 16 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| removed |    -1 |   7.1% → 0.0% |   1 → 0 | `linkToCallSite(Object, int, Object)`                    | `java.lang.invoke.Invokers$Holder` |
|     new |    +1 |   0.0% → 5.6% |   0 → 1 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |

##### `getLines()` (`org.codenarc.source.AbstractSourceCode`)

|  Change | Delta |             % | Samples | Callee                           | Location                                            |
| ------: | ----: | ------------: | ------: | -------------------------------- | --------------------------------------------------- |
|     new |    +4 | 0.0% → 100.0% |   0 → 4 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `compareEqual(Object, Object)`   | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### `main(String[])` (`org.codenarc.CodeNarc`)

| Change | Delta |            % | Samples | Callee                                   | Location                           |
| -----: | ----: | -----------: | ------: | ---------------------------------------- | ---------------------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `doCall(ClassNode)` (`org.codenarc.rule.formatting.ClassEndsWithBlankLineAstVisitor$_closure1`)

| Change | Delta |             % | Samples | Callee                                   | Location                           |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | ---------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `<init>(Metric, MetricLevel, AbcVector, Integer)` (`org.gmetrics.metric.abc.result.AbcMetricResult`)

| Change | Delta |            % | Samples | Callee                                | Location                                                            |
| -----: | ----: | -----------: | ------: | ------------------------------------- | ------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `callGroovyObjectGetProperty(Object)` | `org.codehaus.groovy.runtime.callsite.GetEffectivePogoPropertySite` |

##### `isSingleLineClass(ClassNode)` (`org.codenarc.rule.formatting.ClassEndsWithBlankLineAstVisitor`)

| Change | Delta |             % | Samples | Callee                                   | Location                           |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | ---------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`)

| Change | Delta |              % | Samples | Callee                                   | Location                           |
| -----: | ----: | -------------: | ------: | ---------------------------------------- | ---------------------------------- |
| +50.0% |    +1 | 100.0% → 75.0% |   2 → 3 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|    new |    +1 |   0.0% → 25.0% |   0 → 1 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `assertClassImplementsRuleInterface(Class)` (`org.codenarc.ruleset.RuleSetUtil`)

|  Change | Delta |      % | Samples | Callee                           | Location                                            |
| ------: | ----: | -----: | ------: | -------------------------------- | --------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `linkToCallSite(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001134800` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|  Change | Delta |             % | Samples | Callee                  | Location                                                |
| ------: | ----: | ------------: | ------: | ----------------------- | ------------------------------------------------------- |
|  +60.0% |    +3 |  6.8% → 10.7% |   5 → 8 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`              |
| removed |    -2 |   2.7% → 0.0% |   2 → 0 | `getAstVisitor()`       | `org.codenarc.rule.convention.HashtableIsObsoleteRule`  |
|  +66.7% |    +2 |   4.1% → 6.7% |   3 → 5 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |
|     new |    +2 |   0.0% → 2.7% |   0 → 2 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor`               |
|   -1.7% |    -1 | 82.2% → 78.7% | 60 → 59 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                  |

##### `super$3$applyTo(SourceCode, List)` (`org.codenarc.rule.formatting.IndentationRule`)

|  Change | Delta |      % | Samples | Callee                      | Location                                   |
| ------: | ----: | -----: | ------: | --------------------------- | ------------------------------------------ |
| +100.0% |    +2 | 100.0% |   2 → 4 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `findLineWithDeclaration(ASTNode, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`)

|  Change | Delta |             % | Samples | Callee                                   | Location                                            |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | --------------------------------------------------- |
|     new |    +2 |  0.0% → 66.7% |   0 → 2 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001134800` |

##### `checkDeclaration(ASTNode, String, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`)

|  Change | Delta |      % | Samples | Callee                                           | Location                           |
| ------: | ----: | -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001105c00`)

|  Change | Delta |            % | Samples | Callee                             | Location                                            |
| ------: | ----: | -----------: | ------: | ---------------------------------- | --------------------------------------------------- |
| removed |   -95 | 96.9% → 0.0% |  95 → 0 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c801118000` |
| removed |    -3 |  3.1% → 0.0% |   3 → 0 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |    +2 | 0.0% → 66.7% |   0 → 2 | `reinvoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001103c00` |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `delegate(Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700115c800`)

|  Change | Delta |             % | Samples | Callee                                  | Location                                             |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
| removed |   -92 | 100.0% → 0.0% |  92 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001001000` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001184c00`)

|  Change | Delta |             % | Samples | Callee                                   | Location                                             |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | ---------------------------------------------------- |
| removed |   -89 | 100.0% → 0.0% |  89 → 0 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c80113fc00`  |
|     new |    +2 |  0.0% → 66.7% |   0 → 2 | `invokeSpecial(Object, Object, Object)`  | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `invokeVirtual(Object, Object, Object)`  | `java.lang.invoke.LambdaForm$DMH.0x00000070010bdc00` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001230800`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |   -80 | 100.0% → 0.0% |  80 → 0 | `invokeSpecial(Object, Object)`                                                             | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010b2800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001133400`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |   -74 | 100.0% → 0.0% |  74 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000c8010b2800` |
|     new |    +6 |  0.0% → 60.0% |   0 → 6 | `invokeSpecial(Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$DMH.0x0000007001001000` |
|     new |    +2 |  0.0% → 20.0% |   0 → 2 | `invokeVirtual(Object, Object, Object)`                                                     | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |    +2 |  0.0% → 20.0% |   0 → 2 | `invokeInterface(Object, Object, Object)`                                                   | `java.lang.invoke.LambdaForm$DMH.0x0000007001170c00` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001230400`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |   -58 | 100.0% → 0.0% |  58 → 0 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000c80118d000`  |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010b2800` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001142000`)

|  Change | Delta |            % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -136 | 99.3% → 0.0% | 136 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000c8010bd400` |
|     new |   +80 | 0.0% → 97.6% |  0 → 80 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010b2800` |
|     new |    +3 |  0.0% → 3.7% |   0 → 3 | `collector(Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x0000007001140000`  |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001597c00`)

|  Change | Delta |             % | Samples | Callee                             | Location                                         |
| ------: | ----: | ------------: | ------: | ---------------------------------- | ------------------------------------------------ |
| removed |   -50 | 100.0% → 0.0% |  50 → 0 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001179000`)

|  Change | Delta |             % | Samples | Callee                                          | Location                                             |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| removed |   -43 | 100.0% → 0.0% |  43 → 0 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000c8010bc800` |
|     new |    +5 | 0.0% → 100.0% |   0 → 5 | `newInvokeSpecial(Object, Object)`              | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700118c000`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |   -45 | 100.0% → 0.0% |  45 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000c8010b2800` |
|     new |   +11 | 0.0% → 100.0% |  0 → 11 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000700113fc00`  |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070016a6400`)

|  Change | Delta |             % | Samples | Callee                                     | Location                                         |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | ------------------------------------------------ |
| removed |   -34 | 100.0% → 0.0% |  34 → 0 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
|     new |    +3 | 0.0% → 100.0% |   0 → 3 | `delegate(Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001135400`)

|  Change | Delta |             % | Samples | Callee                                          | Location                                             |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| removed |   -38 | 100.0% → 0.0% |  38 → 0 | `reinvoke(Object, Object, Object)`              | `java.lang.invoke.LambdaForm$MH.0x000000c801118000`  |
|     new |    +8 | 0.0% → 100.0% |   0 → 8 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010bc800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001119400`)

| Change | Delta |             % | Samples | Callee                             | Location                                            |
| -----: | ----: | ------------: | ------: | ---------------------------------- | --------------------------------------------------- |
| -91.7% |   -22 |  21.4% → 2.4% |  24 → 2 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|  -7.8% |    -7 | 80.4% → 97.6% | 90 → 83 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001118000` |

##### `invoke(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700141f400`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |   -21 | 100.0% → 0.0% |  21 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000c8010b2800` |
|     new |    +2 | 0.0% → 100.0% |   0 → 2 | `invokeSpecial(Object, Object, Object, Object, Object)`                                     | `java.lang.invoke.LambdaForm$DMH.0x000000700118e800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070015a2400`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |   -20 |  95.2% → 0.0% |  20 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000c8010b2800` |
|     new |    +3 | 0.0% → 100.0% |   0 → 3 | `newInvokeSpecial(Object, Object, Object, Object, Object)`                                  | `java.lang.invoke.LambdaForm$DMH.0x0000007001003400` |
| removed |    -1 |   4.8% → 0.0% |   1 → 0 | `collector(Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000c80109c000`  |

##### `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change | Delta |             % |   Samples | Callee                                                                                       | Location                                        |
| -----: | ----: | ------------: | --------: | -------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| -16.1% |   -23 | 97.3% → 91.6% | 143 → 120 | `invokeExact_MT(Object, Object, Object)`                                                     | `java.lang.invoke.Invokers$Holder`              |
| -18.8% |    -6 | 21.8% → 19.8% |   32 → 26 | `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `guard(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001118400`)

|  Change | Delta |             % |   Samples | Callee                             | Location                                            |
| ------: | ----: | ------------: | --------: | ---------------------------------- | --------------------------------------------------- |
|   -4.2% |    -7 | 64.8% → 65.7% | 166 → 159 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001118000` |
|   -4.4% |    -6 | 52.7% → 53.3% | 135 → 129 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |    -2 |   0.8% → 0.0% |     2 → 0 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000c801117c00` |
| removed |    -1 |   0.4% → 0.0% |     1 → 0 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000c801132800` |
| removed |    -1 |   0.4% → 0.0% |     1 → 0 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000c801118800` |

##### `setGuards(Object)` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

|  Change | Delta |             % | Samples | Callee                                      | Location                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | ------------------------------------ |
|  -83.3% |    -5 |  22.2% → 7.7% |   6 → 1 | `bindTo(Object)`                            | `java.lang.invoke.MethodHandle`      |
|  -66.7% |    -4 | 22.2% → 15.4% |   6 → 2 | `guardWithTest(MethodHandle, MethodHandle)` | `java.lang.invoke.SwitchPoint`       |
|  -66.7% |    -2 |  11.1% → 7.7% |   3 → 1 | `anyMatch(Predicate)`                       | `java.util.stream.ReferencePipeline` |
|  -50.0% |    -1 |   7.4% → 7.7% |   2 → 1 | `toArray(IntFunction)`                      | `java.util.stream.ReferencePipeline` |
| removed |    -1 |   3.7% → 0.0% |   1 → 0 | `asType(MethodType)`                        | `java.lang.invoke.MethodHandle`      |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070015e9000`)

|  Change | Delta |             % | Samples | Callee                                             | Location                                         |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | ------------------------------------------------ |
| removed |   -15 | 100.0% → 0.0% |  15 → 0 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `collector(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001114c00`)

|  Change | Delta |              % | Samples | Callee                             | Location                                            |
| ------: | ----: | -------------: | ------: | ---------------------------------- | --------------------------------------------------- |
|  -57.1% |   -12 | 95.5% → 100.0% |  21 → 9 | `invoke(Object, int)`              | `java.lang.invoke.LambdaForm$MH.0x000000700109bc00` |
| removed |    -1 |    4.5% → 0.0% |   1 → 0 | `doMethodInvoke(Object, Object[])` | `org.codehaus.groovy.runtime.dgm$32`                |

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|  Change | Delta |             % | Samples | Callee                                           | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | --------------------------------------------------- |
|   -4.9% |    -3 | 72.6% → 78.4% | 61 → 58 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
|  -37.5% |    -3 |   9.5% → 6.8% |   8 → 5 | `linkToCallSite(Object, Object, long, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000007001394400` |
|  -27.3% |    -3 | 13.1% → 10.8% |  11 → 8 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
| removed |    -1 |   1.2% → 0.0% |   1 → 0 | `linkToCallSite(long, long, Object)`             | `java.lang.invoke.Invokers$Holder`                  |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|  Change | Delta |             % | Samples | Callee                                           | Location                           |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | ---------------------------------- |
|  -32.6% |   -14 | 75.4% → 61.7% | 43 → 29 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| +300.0% |    +6 |  3.5% → 17.0% |   2 → 8 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  -10.0% |    -1 | 17.5% → 19.1% |  10 → 9 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|  Change | Delta |             % | Samples | Callee                            | Location                                                                     |
| ------: | ----: | ------------: | ------: | --------------------------------- | ---------------------------------------------------------------------------- |
|  -27.9% |   -12 | 87.8% → 75.6% | 43 → 31 | `visitMethod(MethodNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                            |
| +100.0% |    +1 |   2.0% → 4.9% |   1 → 2 | `visitMethodEx(MethodNode)`       | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`               |
| removed |    -1 |   2.0% → 0.0% |   1 → 0 | `visitMethodEx(MethodNode)`       | `org.codenarc.rule.formatting.SpaceBeforeOpeningBraceAstVisitor`             |
| removed |    -1 |   2.0% → 0.0% |   1 → 0 | `visitMethodEx(MethodNode)`       | `org.codenarc.rule.FieldReferenceAstVisitor`                                 |
| removed |    -1 |   2.0% → 0.0% |   1 → 0 | `visitMethodComplete(MethodNode)` | `org.codenarc.rule.convention.PublicMethodsBeforeNonPublicMethodsAstVisitor` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|  Change | Delta |              % | Samples | Callee                                           | Location                           |
| ------: | ----: | -------------: | ------: | ------------------------------------------------ | ---------------------------------- |
|  -11.8% |    -6 | 96.2% → 100.0% | 51 → 45 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| removed |    -2 |    3.8% → 0.0% |   2 → 0 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

| Change | Delta |      % | Samples | Callee   | Location                                    |
| -----: | ----: | -----: | ------: | -------- | ------------------------------------------- |
| -10.2% |    -5 | 100.0% | 49 → 44 | `init()` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|  Change | Delta |             % | Samples | Callee                    | Location                                                        |
| ------: | ----: | ------------: | ------: | ------------------------- | --------------------------------------------------------------- |
|  -17.6% |    -9 | 77.3% → 68.9% | 51 → 42 | `visitClass(ClassNode)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`               |
|     new |    +2 |   0.0% → 3.3% |   0 → 2 | `visitClassEx(ClassNode)` | `org.codenarc.rule.formatting.IndentationAstVisitor`            |
| +100.0% |    +1 |   1.5% → 3.3% |   1 → 2 | `visitClassEx(ClassNode)` | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`         |
| +100.0% |    +1 |   1.5% → 3.3% |   1 → 2 | `visitClassEx(ClassNode)` | `org.codenarc.rule.naming.ConfusingMethodNameAstVisitor`        |
| removed |    -1 |   1.5% → 0.0% |   1 → 0 | `visitClassEx(ClassNode)` | `org.codenarc.rule.formatting.SpaceAfterOpeningBraceAstVisitor` |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

| Change | Delta |             % | Samples | Callee                                                           | Location                           |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------- | ---------------------------------- |
| -80.0% |    -4 |   6.3% → 1.3% |   5 → 1 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  +1.4% |    +1 | 87.5% → 93.4% | 70 → 71 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
| -20.0% |    -1 |   6.3% → 5.3% |   5 → 4 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder` |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

| Change | Delta |      % | Samples | Callee                           | Location                           |
| -----: | ----: | -----: | ------: | -------------------------------- | ---------------------------------- |
|  -7.5% |    -4 | 100.0% | 53 → 49 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|  Change | Delta |              % | Samples | Callee                                    | Location                                    |
| ------: | ----: | -------------: | ------: | ----------------------------------------- | ------------------------------------------- |
|   -6.0% |    -3 | 98.0% → 100.0% | 50 → 47 | `getAst()`                                | `org.codenarc.source.AbstractSourceCode`    |
| removed |    -1 |    2.0% → 0.0% |   1 → 0 | `getSuppressionsByLineNumber(ModuleNode)` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `processSourceLine(String, int)` (`org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`)

|  Change | Delta |            % | Samples | Callee                                   | Location                           |
| ------: | ----: | -----------: | ------: | ---------------------------------------- | ---------------------------------- |
| removed |    -3 | 60.0% → 0.0% |   3 → 0 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor$_visitClassComplete_closure1`)

| Change | Delta |      % | Samples | Callee                                           | Location                           |
| -----: | ----: | -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `<init>(String, boolean)` (`org.codenarc.util.WildcardPattern`)

|  Change | Delta |             % | Samples | Callee                                   | Location                           |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | ---------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor$_visitArgumentlistExpression_closure1`)

|  Change | Delta |             % | Samples | Callee                                   | Location                           |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | ---------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.util.WildcardPattern$_closure1`)

|  Change | Delta |              % | Samples | Callee                                   | Location                           |
| ------: | ----: | -------------: | ------: | ---------------------------------------- | ---------------------------------- |
| removed |    -2 |   50.0% → 0.0% |   2 → 0 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  -50.0% |    -1 | 50.0% → 100.0% |   2 → 1 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.report.TextReportWriter$_writeFileViolations_closure4`)

|  Change | Delta |             % | Samples | Callee                           | Location                           |
| ------: | ----: | ------------: | ------: | -------------------------------- | ---------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `writeFileViolations(Writer, FileResults)` (`org.codenarc.report.TextReportWriter`)

| Change | Delta |      % | Samples | Callee                                   | Location                           |
| -----: | ----: | -----: | ------: | ---------------------------------------- | ---------------------------------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)

| Change | Delta |      % | Samples | Callee                                   | Location                           |
| -----: | ----: | -----: | ------: | ---------------------------------------- | ---------------------------------- |
| -18.2% |    -2 | 100.0% |  11 → 9 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `getAstVisitor()` (`org.codenarc.rule.convention.HashtableIsObsoleteRule`)

|  Change | Delta |             % | Samples | Callee                                           | Location                           |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | ---------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `visitBlockStatement(BlockStatement)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

|  Change | Delta |             % | Samples | Callee                                                        | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.formatting.SpaceAfterMethodDeclarationNameRuleAstVisitor`)

|  Change | Delta |            % | Samples | Callee                                                        | Location                                            |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

# Allocated heap profile diff

Allocated 11.9 GiB → 11.8 GiB (-175.936 MiB, -1.4%) over 6,331 samples → 6,230 samples (1.93 MiB per sample).

| Category         | Change |        Delta |             % |                Size |       Samples |
| ---------------- | -----: | -----------: | ------------: | ------------------: | ------------: |
| Standard library |  -1.7% | -205.551 MiB | 99.1% → 98.9% | 11.8 GiB → 11.6 GiB | 6,225 → 6,112 |
| Ours             | +28.3% |  +29.612 MiB |   0.9% → 1.1% |   105 MiB → 134 MiB |       54 → 67 |
| Unknown          |  +4.2% |   +1.468 KiB |         <0.1% | 35.3 KiB → 36.7 KiB |       52 → 51 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|   Change |       Delta |            % |                Size |   Samples | Function                                                                                      | Location                                          |
| -------: | ----------: | -----------: | ------------------: | --------: | --------------------------------------------------------------------------------------------- | ------------------------------------------------- |
|   +96.6% | +98.482 MiB |  0.8% → 1.7% |   102 MiB → 200 MiB |   32 → 38 | `make(byte, Class, MemberName, Class)`                                                        | `java.lang.invoke.DirectMethodHandle`             |
|   +12.3% | +85.014 MiB |  5.6% → 6.4% |   690 MiB → 775 MiB | 351 → 393 | `makeImpl(Class, Class[], boolean)`                                                           | `java.lang.invoke.MethodType`                     |
|   +27.0% | +65.326 MiB |  2.0% → 2.6% |   242 MiB → 308 MiB | 126 → 159 | `lambdaFormEditor(LambdaForm)`                                                                | `java.lang.invoke.LambdaFormEditor`               |
|   +52.4% | +47.404 MiB |  0.7% → 1.1% |  90.4 MiB → 138 MiB |   46 → 47 | `makeGuardWithTest(MethodHandle, MethodHandle, MethodHandle)`                                 | `java.lang.invoke.MethodHandleImpl`               |
|   +59.7% | +37.889 MiB |  0.5% → 0.8% |  63.5 MiB → 101 MiB |   33 → 53 | `copyOf(Object[], int)`                                                                       | `java.util.Arrays`                                |
|    +5.0% |  +32.31 MiB |  5.2% → 5.6% |   641 MiB → 673 MiB | 325 → 340 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`   |
|   +47.7% | +26.681 MiB |  0.5% → 0.7% | 55.9 MiB → 82.6 MiB |   31 → 44 | `newHashMap(int)`                                                                             | `java.util.HashMap`                               |
|    +9.9% | +23.507 MiB |  1.9% → 2.2% |   237 MiB → 261 MiB | 122 → 131 | `newNode(int, Object, Object, HashMap$Node)`                                                  | `java.util.HashMap`                               |
|   +30.5% | +23.377 MiB |  0.6% → 0.8% |  76.6 MiB → 100 MiB |   62 → 70 | `iterator()`                                                                                  | `java.util.ArrayList`                             |
|      new |  +21.97 MiB |  0.0% → 0.2% |        0 B → 22 MiB |     0 → 1 | `iterator()`                                                                                  | `java.util.HashMap$KeySet`                        |
| +1000.0% | +19.989 MiB | <0.1% → 0.2% |      2 MiB → 22 MiB |    1 → 10 | `valueOf(long)`                                                                               | `java.math.BigDecimal`                            |
|    +6.6% | +19.186 MiB |  2.4% → 2.6% |   289 MiB → 308 MiB | 147 → 155 | `newArray(Class, int)`                                                                        | `java.lang.reflect.Array`                         |
|    +6.0% | +16.437 MiB |  2.2% → 2.4% |   272 MiB → 289 MiB | 128 → 144 | `make(MethodType, LambdaForm, Object, Object, Object, Object)`                                | `java.lang.invoke.BoundMethodHandle$Species_LLLL` |
|  +108.7% | +15.209 MiB |  0.1% → 0.2% |   14 MiB → 29.2 MiB |    7 → 18 | `of(byte, int, int, int[])`                                                                   | `java.lang.invoke.LambdaFormEditor$TransformKey`  |
|   +16.9% |  +14.65 MiB |  0.7% → 0.8% |  86.9 MiB → 102 MiB |   44 → 49 | `<init>(Pattern, CharSequence)`                                                               | `java.util.regex.Matcher`                         |
|    +2.6% |  +14.11 MiB |  4.5% → 4.7% |   548 MiB → 562 MiB | 275 → 288 | `fillInStackTrace(int)`                                                                       | `java.lang.Throwable`                             |
|      new | +13.993 MiB |  0.0% → 0.1% |        0 B → 14 MiB |     0 → 7 | `writeViolation(Writer, Violation, String)`                                                   | `org.codenarc.report.TextReportWriter`            |
|   +41.6% | +13.115 MiB |  0.3% → 0.4% | 31.5 MiB → 44.6 MiB |   16 → 25 | `opWrapSink(int, Sink)`                                                                       | `java.util.stream.ReferencePipeline$3`            |
|   +15.3% | +12.336 MiB |  0.7% → 0.8% |   80.6 MiB → 93 MiB |   42 → 46 | `lambda$makeRef$0(MatchOps$MatchKind, Predicate)`                                             | `java.util.stream.MatchOps`                       |
|   +11.9% | +11.383 MiB |  0.8% → 0.9% |  95.8 MiB → 107 MiB |   48 → 55 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)`                     | `java.lang.invoke.MethodHandleImpl`               |

##### Standard library

|   Change |       Delta |            % |                Size |   Samples | Function                                                                                      | Location                                          |
| -------: | ----------: | -----------: | ------------------: | --------: | --------------------------------------------------------------------------------------------- | ------------------------------------------------- |
|   +96.6% | +98.482 MiB |  0.8% → 1.7% |   102 MiB → 200 MiB |   32 → 38 | `make(byte, Class, MemberName, Class)`                                                        | `java.lang.invoke.DirectMethodHandle`             |
|   +12.3% | +85.014 MiB |  5.6% → 6.4% |   690 MiB → 775 MiB | 351 → 393 | `makeImpl(Class, Class[], boolean)`                                                           | `java.lang.invoke.MethodType`                     |
|   +27.0% | +65.326 MiB |  2.0% → 2.6% |   242 MiB → 308 MiB | 126 → 159 | `lambdaFormEditor(LambdaForm)`                                                                | `java.lang.invoke.LambdaFormEditor`               |
|   +52.4% | +47.404 MiB |  0.7% → 1.1% |  90.4 MiB → 138 MiB |   46 → 47 | `makeGuardWithTest(MethodHandle, MethodHandle, MethodHandle)`                                 | `java.lang.invoke.MethodHandleImpl`               |
|   +59.7% | +37.889 MiB |  0.5% → 0.8% |  63.5 MiB → 101 MiB |   33 → 53 | `copyOf(Object[], int)`                                                                       | `java.util.Arrays`                                |
|    +5.0% |  +32.31 MiB |  5.2% → 5.6% |   641 MiB → 673 MiB | 325 → 340 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`   |
|   +47.7% | +26.681 MiB |  0.5% → 0.7% | 55.9 MiB → 82.6 MiB |   31 → 44 | `newHashMap(int)`                                                                             | `java.util.HashMap`                               |
|    +9.9% | +23.507 MiB |  1.9% → 2.2% |   237 MiB → 261 MiB | 122 → 131 | `newNode(int, Object, Object, HashMap$Node)`                                                  | `java.util.HashMap`                               |
|   +30.5% | +23.377 MiB |  0.6% → 0.8% |  76.6 MiB → 100 MiB |   62 → 70 | `iterator()`                                                                                  | `java.util.ArrayList`                             |
|      new |  +21.97 MiB |  0.0% → 0.2% |        0 B → 22 MiB |     0 → 1 | `iterator()`                                                                                  | `java.util.HashMap$KeySet`                        |
| +1000.0% | +19.989 MiB | <0.1% → 0.2% |      2 MiB → 22 MiB |    1 → 10 | `valueOf(long)`                                                                               | `java.math.BigDecimal`                            |
|    +6.6% | +19.186 MiB |  2.4% → 2.6% |   289 MiB → 308 MiB | 147 → 155 | `newArray(Class, int)`                                                                        | `java.lang.reflect.Array`                         |
|    +6.0% | +16.437 MiB |  2.2% → 2.4% |   272 MiB → 289 MiB | 128 → 144 | `make(MethodType, LambdaForm, Object, Object, Object, Object)`                                | `java.lang.invoke.BoundMethodHandle$Species_LLLL` |
|  +108.7% | +15.209 MiB |  0.1% → 0.2% |   14 MiB → 29.2 MiB |    7 → 18 | `of(byte, int, int, int[])`                                                                   | `java.lang.invoke.LambdaFormEditor$TransformKey`  |
|   +16.9% |  +14.65 MiB |  0.7% → 0.8% |  86.9 MiB → 102 MiB |   44 → 49 | `<init>(Pattern, CharSequence)`                                                               | `java.util.regex.Matcher`                         |
|    +2.6% |  +14.11 MiB |  4.5% → 4.7% |   548 MiB → 562 MiB | 275 → 288 | `fillInStackTrace(int)`                                                                       | `java.lang.Throwable`                             |
|   +41.6% | +13.115 MiB |  0.3% → 0.4% | 31.5 MiB → 44.6 MiB |   16 → 25 | `opWrapSink(int, Sink)`                                                                       | `java.util.stream.ReferencePipeline$3`            |
|   +15.3% | +12.336 MiB |  0.7% → 0.8% |   80.6 MiB → 93 MiB |   42 → 46 | `lambda$makeRef$0(MatchOps$MatchKind, Predicate)`                                             | `java.util.stream.MatchOps`                       |
|   +11.9% | +11.383 MiB |  0.8% → 0.9% |  95.8 MiB → 107 MiB |   48 → 55 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)`                     | `java.lang.invoke.MethodHandleImpl`               |
|    +5.2% |  +11.37 MiB |  1.8% → 1.9% |   217 MiB → 229 MiB | 110 → 115 | `optimize(Pattern$Node)`                                                                      | `java.util.regex.Pattern$BnM`                     |

##### Ours

|  Change |       Delta |            % |          Size | Samples | Function                                         | Location                                                                    |
| ------: | ----------: | -----------: | ------------: | ------: | ------------------------------------------------ | --------------------------------------------------------------------------- |
|     new | +13.993 MiB |  0.0% → 0.1% |  0 B → 14 MiB |   0 → 7 | `writeViolation(Writer, Violation, String)`      | `org.codenarc.report.TextReportWriter`                                      |
| +100.0% |  +3.998 MiB | <0.1% → 0.1% | 4 MiB → 8 MiB |   2 → 4 | `<init>()`                                       | `org.codenarc.rule.AbstractAstVisitor`                                      |
|     new |  +3.998 MiB | 0.0% → <0.1% |   0 B → 4 MiB |   0 → 2 | `visitVariableExpression(VariableExpression)`    | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`       |
| +200.0% |  +3.998 MiB |        <0.1% | 2 MiB → 6 MiB |   1 → 3 | `applyTo(SourceCode)`                            | `org.codenarc.rule.AbstractRule`                                            |
|     new |  +3.998 MiB | 0.0% → <0.1% |   0 B → 4 MiB |   0 → 1 | `addViolation(ASTNode, String)`                  | `org.codenarc.rule.AbstractAstVisitor`                                      |
| +200.0% |  +3.998 MiB |        <0.1% | 2 MiB → 6 MiB |   1 → 3 | `isViolationSuppressed(Violation)`               | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
|     new |  +2.302 MiB | 0.0% → <0.1% | 0 B → 2.3 MiB |   0 → 2 | `processMethodOrConstructorCall(MethodCall)`     | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                    |
|     new |  +1.999 MiB | 0.0% → <0.1% |   0 B → 2 MiB |   0 → 1 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.unused.UnusedVariableRule`                               |
|     new |  +1.999 MiB | 0.0% → <0.1% |   0 B → 2 MiB |   0 → 1 | `visitPropertyExpression(PropertyExpression)`    | `org.codenarc.rule.ClassReferenceAstVisitor`                                |
|     new |  +1.999 MiB | 0.0% → <0.1% |   0 B → 2 MiB |   0 → 1 | `addViolationIfDoubleQuoted(ConstantExpression)` | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`                |
|     new |  +1.999 MiB | 0.0% → <0.1% |   0 B → 2 MiB |   0 → 1 | `getAstVisitor()`                                | `org.codenarc.rule.groovyism.ExplicitLinkedHashMapInstantiationRule`        |
| +100.0% |  +1.999 MiB |        <0.1% | 2 MiB → 4 MiB |   1 → 2 | `visitBinaryExpression(BinaryExpression)`        | `org.codenarc.rule.basic.ComparisonOfTwoConstantsAstVisitor`                |
| +100.0% |  +1.999 MiB |        <0.1% | 2 MiB → 4 MiB |   1 → 2 | `<init>(String, boolean)`                        | `org.codenarc.util.WildcardPattern`                                         |
|     new |  +1.999 MiB | 0.0% → <0.1% |   0 B → 2 MiB |   0 → 1 | `visitBinaryExpression(BinaryExpression)`        | `org.codenarc.rule.unnecessary.UnnecessarySelfAssignmentAstVisitor`         |
|     new |  +1.999 MiB | 0.0% → <0.1% |   0 B → 2 MiB |   0 → 1 | `processParameters(Parameter[], String)`         | `org.codenarc.rule.convention.NoDoubleAstVisitor`                           |
|     new |  +1.999 MiB | 0.0% → <0.1% |   0 B → 2 MiB |   0 → 1 | `visitMethodComplete(MethodNode)`                | `org.codenarc.rule.convention.StaticMethodsBeforeInstanceMethodsAstVisitor` |
|     new |  +1.999 MiB | 0.0% → <0.1% |   0 B → 2 MiB |   0 → 1 | `visitClosureExpression(ClosureExpression)`      | `org.codenarc.rule.naming.ParameterNameAstVisitor`                          |
|     new |  +1.999 MiB | 0.0% → <0.1% |   0 B → 2 MiB |   0 → 1 | `visitBinaryExpression(BinaryExpression)`        | `org.gmetrics.metric.cyclomatic.CyclomaticComplexityAstVisitor`             |
|     new |  +1.999 MiB | 0.0% → <0.1% |   0 B → 2 MiB |   0 → 1 | `<init>()`                                       | `org.codenarc.rule.formatting.IndentationAstVisitor`                        |
|     new |  +1.999 MiB | 0.0% → <0.1% |   0 B → 2 MiB |   0 → 1 | `visitImports(ModuleNode)`                       | `org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor`                 |

#### Improvements

Functions with the largest decrease in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Standard library

| Change |       Delta |            % |                Size |   Samples | Function                                                             | Location                                              |
| -----: | ----------: | -----------: | ------------------: | --------: | -------------------------------------------------------------------- | ----------------------------------------------------- |
| -68.0% | -184.58 MiB |  2.2% → 0.7% |  271 MiB → 86.7 MiB |  137 → 44 | `make(MethodType, LambdaForm, Object)`                               | `java.lang.invoke.BoundMethodHandle$Species_L`        |
| -29.7% | -67.446 MiB |  1.9% → 1.3% |   227 MiB → 160 MiB |  106 → 84 | `compile()`                                                          | `java.util.regex.Pattern`                             |
| -24.4% | -35.272 MiB |  1.2% → 0.9% |   145 MiB → 109 MiB |   72 → 54 | `join(PredictionContext, PredictionContext, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |
| -43.7% | -33.215 MiB |  0.6% → 0.4% |   76 MiB → 42.7 MiB |   37 → 22 | `divideOneWord(int, MutableBigInteger)`                              | `java.math.MutableBigInteger`                         |
| -56.6% | -32.024 MiB |  0.5% → 0.2% | 56.6 MiB → 24.5 MiB |   29 → 13 | `<init>(Reader, int)`                                                | `java.io.BufferedReader`                              |
| -66.7% | -31.984 MiB |  0.4% → 0.1% |     48 MiB → 16 MiB |    24 → 8 | `entrySet()`                                                         | `java.util.HashMap`                                   |
|  -7.3% |  -31.43 MiB |  3.5% → 3.3% |   429 MiB → 398 MiB | 178 → 200 | `newInstance(Class, int)`                                            | `java.lang.reflect.Array`                             |
| -10.7% |  -30.21 MiB |  2.3% → 2.1% |   283 MiB → 252 MiB | 121 → 128 | `stream(Spliterator, boolean)`                                       | `java.util.stream.StreamSupport`                      |
| -13.8% | -29.129 MiB |  1.7% → 1.5% |   211 MiB → 182 MiB |  101 → 89 | `allocateInstance(Object)`                                           | `java.lang.invoke.DirectMethodHandle`                 |
| -18.3% | -28.008 MiB |  1.3% → 1.0% |   153 MiB → 125 MiB |   81 → 68 | `resize()`                                                           | `java.util.HashMap`                                   |
| -15.9% | -26.741 MiB |  1.4% → 1.2% |   168 MiB → 141 MiB |   83 → 72 | `parameterArray()`                                                   | `java.lang.invoke.MethodType`                         |
| -20.3% | -26.153 MiB |  1.1% → 0.9% |   129 MiB → 103 MiB |   65 → 50 | `toBigInteger(int)`                                                  | `java.math.MutableBigInteger`                         |
| -17.9% | -25.652 MiB |  1.2% → 1.0% |   144 MiB → 118 MiB |   73 → 61 | `of(byte, int)`                                                      | `java.lang.invoke.LambdaFormEditor$TransformKey`      |
| -10.5% | -25.553 MiB |  2.0% → 1.8% |   244 MiB → 218 MiB | 126 → 107 | `copyOfRange(Object[], int, int)`                                    | `java.util.Arrays`                                    |
| -96.1% | -21.907 MiB | 0.2% → <0.1% |  22.8 MiB → 914 KiB |         1 | `initCEN(int, ZipCoder)`                                             | `java.util.zip.ZipFile$Source`                        |
|  -4.4% | -18.242 MiB |  3.4% → 3.3% |   418 MiB → 399 MiB | 211 → 199 | `makeBlockInliningWrapper(MethodHandle)`                             | `java.lang.invoke.MethodHandleImpl`                   |
| -12.0% | -17.822 MiB |  1.2% → 1.1% |   149 MiB → 131 MiB |   75 → 68 | `valueOf(long)`                                                      | `java.lang.Long`                                      |
| -36.4% | -17.744 MiB |  0.4% → 0.3% |   48.7 MiB → 31 MiB |   26 → 18 | `<init>(int)`                                                        | `java.util.ArrayList`                                 |
| -23.2% | -17.618 MiB |  0.6% → 0.5% |   76 MiB → 58.3 MiB |   37 → 30 | `convertToTypeArray(Object[])`                                       | `org.codehaus.groovy.runtime.MetaClassHelper`         |
| -26.1% | -17.414 MiB |  0.5% → 0.4% | 66.7 MiB → 49.3 MiB |   59 → 52 | `copyOf(byte[], int)`                                                | `java.util.Arrays`                                    |

##### Ours

|  Change |       Delta |            % |             Size | Samples | Function                                                | Location                                                                        |
| ------: | ----------: | -----------: | ---------------: | ------: | ------------------------------------------------------- | ------------------------------------------------------------------------------- |
|  -85.7% | -11.979 MiB | 0.1% → <0.1% |   14 MiB → 2 MiB |   7 → 1 | `matches(String)`                                       | `org.codenarc.util.WildcardPattern`                                             |
| removed |  -3.998 MiB | <0.1% → 0.0% |      4 MiB → 0 B |   2 → 0 | `shouldApplyThisRuleTo(SourceCode)`                     | `org.codenarc.rule.AbstractRule`                                                |
| removed |   -3.69 MiB | <0.1% → 0.0% |   3.69 MiB → 0 B |   2 → 0 | `visitBlockStatement(BlockStatement)`                   | `org.codenarc.rule.formatting.SpaceAfterSemicolonAstVisitor`                    |
|  -35.7% |  -2.217 MiB | 0.1% → <0.1% | 6.22 MiB → 4 MiB |   4 → 2 | `doCall(Object)`                                        | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`      |
| removed |  -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `methodReturnsArray(MethodNode)`                        | `org.codenarc.rule.design.ReturnsNullInsteadOfEmptyArrayAstVisitor`             |
| removed |  -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `visitBinaryExpression(BinaryExpression)`               | `org.codenarc.rule.basic.ComparisonWithSelfAstVisitor`                          |
| removed |  -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `markVariableAsReferenced(String, VariableExpression)`  | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                             |
|  -25.0% |  -1.999 MiB | 0.1% → <0.1% |    8 MiB → 6 MiB |   4 → 3 | `doCall(Object)`                                        | `org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3` |
| removed |  -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `<init>()`                                              | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`                         |
| removed |  -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `visitMethodCallExpression(MethodCallExpression)`       | `org.codenarc.rule.groovyism.CollectAllIsDeprecatedAstVisitor`                  |
| removed |  -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `visitBinaryExpression(BinaryExpression)`               | `org.codenarc.rule.unnecessary.UnnecessaryCallForLastElementAstVisitor`         |
| removed |  -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `visitStatement(Statement)`                             | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`                  |
| removed |  -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `visitConstantExpression(ConstantExpression)`           | `org.codenarc.rule.convention.LongLiteralWithLowerCaseLAstVisitor`              |
| removed |  -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `visitClassExpression(ClassExpression)`                 | `org.codenarc.rule.ClassReferenceAstVisitor`                                    |
| removed |  -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `<init>()`                                              | `org.codenarc.rule.AbstractMethodVisitor`                                       |
| removed |  -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `createAggregateMetricResult(Collection, Integer, Map)` | `org.gmetrics.result.MetricResultBuilder`                                       |
|  -50.0% |  -1.999 MiB |        <0.1% |    4 MiB → 2 MiB |   2 → 1 | `isRuleSuppressed(Rule)`                                | `org.codenarc.analyzer.SuppressionAnalyzer`                                     |
| removed |  -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `visitBinaryExpression(BinaryExpression)`               | `org.codenarc.rule.unnecessary.UnnecessaryModOneAstVisitor`                     |
| removed |  -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `<init>()`                                              | `org.gmetrics.metric.AbstractMetric`                                            |
| removed |  -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `visitMethodEx(MethodNode)`                             | `org.codenarc.rule.formatting.IndentationAstVisitor`                            |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `make(byte, Class, MemberName, Class)` (`java.lang.invoke.DirectMethodHandle`)

|  Change |        Delta |             % |                Size | Samples | Location                                  |
| ------: | -----------: | ------------: | ------------------: | ------: | ----------------------------------------- |
| +175.0% | +103.735 MiB | 58.2% → 81.3% |  59.3 MiB → 163 MiB | 10 → 19 | `java.lang.invoke.DirectMethodHandle:103` |
|  -22.2% |   -3.998 MiB |  17.7% → 7.0% |     18 MiB → 14 MiB |   9 → 7 | `java.lang.invoke.DirectMethodHandle:82`  |
|   -5.1% |   -1.254 MiB | 24.2% → 11.7% | 24.6 MiB → 23.4 MiB | 13 → 12 | `java.lang.invoke.DirectMethodHandle:107` |

##### `makeImpl(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

| Change |       Delta |      % |              Size |   Samples | Location                          |
| -----: | ----------: | -----: | ----------------: | --------: | --------------------------------- |
| +12.3% | +85.014 MiB | 100.0% | 690 MiB → 775 MiB | 351 → 393 | `java.lang.invoke.MethodType:400` |

##### `lambdaFormEditor(LambdaForm)` (`java.lang.invoke.LambdaFormEditor`)

| Change |       Delta |      % |              Size |   Samples | Location                               |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------------------- |
| +27.0% | +65.326 MiB | 100.0% | 242 MiB → 308 MiB | 126 → 159 | `java.lang.invoke.LambdaFormEditor:61` |

##### `makeGuardWithTest(MethodHandle, MethodHandle, MethodHandle)` (`java.lang.invoke.MethodHandleImpl`)

| Change |       Delta |      % |               Size | Samples | Location                                |
| -----: | ----------: | -----: | -----------------: | ------: | --------------------------------------- |
| +52.4% | +47.404 MiB | 100.0% | 90.4 MiB → 138 MiB | 46 → 47 | `java.lang.invoke.MethodHandleImpl:631` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |       Delta |      % |               Size | Samples | Location                |
| -----: | ----------: | -----: | -----------------: | ------: | ----------------------- |
| +59.7% | +37.889 MiB | 100.0% | 63.5 MiB → 101 MiB | 33 → 53 | `java.util.Arrays:3482` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change |      Delta |      % |              Size |   Samples | Location                                            |
| -----: | ---------: | -----: | ----------------: | --------: | --------------------------------------------------- |
|  +5.0% | +32.31 MiB | 100.0% | 641 MiB → 673 MiB | 325 → 340 | `org.codehaus.groovy.vmplugin.v8.IndyInterface:293` |

##### `newHashMap(int)` (`java.util.HashMap`)

| Change |       Delta |      % |                Size | Samples | Location                 |
| -----: | ----------: | -----: | ------------------: | ------: | ------------------------ |
| +47.7% | +26.681 MiB | 100.0% | 55.9 MiB → 82.6 MiB | 31 → 44 | `java.util.HashMap:2584` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |       Delta |      % |              Size |   Samples | Location                 |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------ |
|  +9.9% | +23.507 MiB | 100.0% | 237 MiB → 261 MiB | 122 → 131 | `java.util.HashMap:1909` |

##### `iterator()` (`java.util.ArrayList`)

| Change |       Delta |      % |               Size | Samples | Location                   |
| -----: | ----------: | -----: | -----------------: | ------: | -------------------------- |
| +30.5% | +23.377 MiB | 100.0% | 76.6 MiB → 100 MiB | 62 → 70 | `java.util.ArrayList:1029` |

##### `iterator()` (`java.util.HashMap$KeySet`)

| Change |      Delta |             % |         Size | Samples | Location                       |
| -----: | ---------: | ------------: | -----------: | ------: | ------------------------------ |
|    new | +21.97 MiB | 0.0% → 100.0% | 0 B → 22 MiB |   0 → 1 | `java.util.HashMap$KeySet:991` |

##### `valueOf(long)` (`java.math.BigDecimal`)

|   Change |       Delta |      % |           Size | Samples | Location                    |
| -------: | ----------: | -----: | -------------: | ------: | --------------------------- |
| +1000.0% | +19.989 MiB | 100.0% | 2 MiB → 22 MiB |  1 → 10 | `java.math.BigDecimal:1318` |

##### `of(byte, int, int, int[])` (`java.lang.invoke.LambdaFormEditor$TransformKey`)

|  Change |       Delta |      % |              Size | Samples | Location                                             |
| ------: | ----------: | -----: | ----------------: | ------: | ---------------------------------------------------- |
| +108.7% | +15.209 MiB | 100.0% | 14 MiB → 29.2 MiB |  7 → 18 | `java.lang.invoke.LambdaFormEditor$TransformKey:221` |

##### `<init>(Pattern, CharSequence)` (`java.util.regex.Matcher`)

|  Change |      Delta |             % |                Size | Samples | Location                      |
| ------: | ---------: | ------------: | ------------------: | ------: | ----------------------------- |
| +100.1% | +9.998 MiB | 11.5% → 19.7% |   9.99 MiB → 20 MiB |  5 → 10 | `java.util.regex.Matcher:252` |
|  +80.0% | +7.996 MiB | 11.5% → 17.7% |     10 MiB → 18 MiB |   5 → 7 | `java.util.regex.Matcher:253` |
|   -5.0% | -3.343 MiB | 77.0% → 62.6% | 66.9 MiB → 63.5 MiB | 34 → 32 | `java.util.regex.Matcher:251` |

##### `writeViolation(Writer, Violation, String)` (`org.codenarc.report.TextReportWriter`)

| Change |      Delta |            % |        Size | Samples | Location                                  |
| -----: | ---------: | -----------: | ----------: | ------: | ----------------------------------------- |
|    new | +7.996 MiB | 0.0% → 57.1% | 0 B → 8 MiB |   0 → 4 | `org.codenarc.report.TextReportWriter:91` |
|    new | +3.997 MiB | 0.0% → 28.6% | 0 B → 4 MiB |   0 → 2 | `org.codenarc.report.TextReportWriter:92` |
|    new | +1.999 MiB | 0.0% → 14.3% | 0 B → 2 MiB |   0 → 1 | `org.codenarc.report.TextReportWriter:90` |

##### `opWrapSink(int, Sink)` (`java.util.stream.ReferencePipeline$3`)

| Change |       Delta |      % |                Size | Samples | Location                                   |
| -----: | ----------: | -----: | ------------------: | ------: | ------------------------------------------ |
| +41.6% | +13.115 MiB | 100.0% | 31.5 MiB → 44.6 MiB | 16 → 25 | `java.util.stream.ReferencePipeline$3:194` |

##### `lambda$makeRef$0(MatchOps$MatchKind, Predicate)` (`java.util.stream.MatchOps`)

| Change |       Delta |      % |              Size | Samples | Location                       |
| -----: | ----------: | -----: | ----------------: | ------: | ------------------------------ |
| +15.3% | +12.336 MiB | 100.0% | 80.6 MiB → 93 MiB | 42 → 46 | `java.util.stream.MatchOps:97` |

##### `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

| Change |       Delta |             % |              Size | Samples | Location                                |
| -----: | ----------: | ------------: | ----------------: | ------: | --------------------------------------- |
| +35.4% | +11.335 MiB | 33.4% → 40.4% | 32 MiB → 43.3 MiB | 16 → 22 | `java.lang.invoke.MethodHandleImpl:321` |
|  +0.1% | +49.179 KiB | 66.6% → 59.6% |          63.8 MiB | 32 → 33 | `java.lang.invoke.MethodHandleImpl:298` |

##### `optimize(Pattern$Node)` (`java.util.regex.Pattern$BnM`)

| Change |       Delta |             % |                Size |  Samples | Location                           |
| -----: | ----------: | ------------: | ------------------: | -------: | ---------------------------------- |
|  +8.5% | +16.085 MiB | 87.4% → 90.1% |   190 MiB → 206 MiB | 95 → 104 | `java.util.regex.Pattern$BnM:5658` |
| -34.6% |  -6.685 MiB |   8.9% → 5.5% | 19.3 MiB → 12.7 MiB |   10 → 6 | `java.util.regex.Pattern$BnM:5659` |
| +24.6% |   +1.97 MiB |   3.7% → 4.4% |   8.02 MiB → 10 MiB |        5 | `java.util.regex.Pattern$BnM:5692` |

##### `<init>()` (`org.codenarc.rule.AbstractAstVisitor`)

|  Change |      Delta |             % |          Size | Samples | Location                                  |
| ------: | ---------: | ------------: | ------------: | ------: | ----------------------------------------- |
| +200.0% | +3.998 MiB | 50.0% → 75.0% | 2 MiB → 6 MiB |   1 → 3 | `org.codenarc.rule.AbstractAstVisitor:36` |
|     ~0% |       -8 B | 50.0% → 25.0% |         2 MiB |       1 | `org.codenarc.rule.AbstractAstVisitor:39` |

##### `visitVariableExpression(VariableExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`)

| Change |      Delta |             % |        Size | Samples | Location                                                                 |
| -----: | ---------: | ------------: | ----------: | ------: | ------------------------------------------------------------------------ |
|    new | +3.998 MiB | 0.0% → 100.0% | 0 B → 4 MiB |   0 → 2 | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor:87` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|  Change |      Delta |      % |          Size | Samples | Location                             |
| ------: | ---------: | -----: | ------------: | ------: | ------------------------------------ |
| +200.0% | +3.998 MiB | 100.0% | 2 MiB → 6 MiB |   1 → 3 | `org.codenarc.rule.AbstractRule:141` |

##### `addViolation(ASTNode, String)` (`org.codenarc.rule.AbstractAstVisitor`)

| Change |      Delta |             % |        Size | Samples | Location                                   |
| -----: | ---------: | ------------: | ----------: | ------: | ------------------------------------------ |
|    new | +3.998 MiB | 0.0% → 100.0% | 0 B → 4 MiB |   0 → 1 | `org.codenarc.rule.AbstractAstVisitor:107` |

##### `isViolationSuppressed(Violation)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|  Change |      Delta |      % |          Size | Samples | Location                                       |
| ------: | ---------: | -----: | ------------: | ------: | ---------------------------------------------- |
| +200.0% | +3.998 MiB | 100.0% | 2 MiB → 6 MiB |   1 → 3 | `org.codenarc.analyzer.SuppressionAnalyzer:83` |

##### `processMethodOrConstructorCall(MethodCall)` (`org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`)

| Change |        Delta |            % |          Size | Samples | Location                                                    |
| -----: | -----------: | -----------: | ------------: | ------: | ----------------------------------------------------------- |
|    new |   +1.999 MiB | 0.0% → 86.8% |   0 B → 2 MiB |   0 → 1 | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor:87` |
|    new | +311.171 KiB | 0.0% → 13.2% | 0 B → 311 KiB |   0 → 1 | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor:90` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.unused.UnusedVariableRule`)

| Change |      Delta |             % |        Size | Samples | Location                                         |
| -----: | ---------: | ------------: | ----------: | ------: | ------------------------------------------------ |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `org.codenarc.rule.unused.UnusedVariableRule:52` |

##### `visitPropertyExpression(PropertyExpression)` (`org.codenarc.rule.ClassReferenceAstVisitor`)

| Change |      Delta |             % |        Size | Samples | Location                                        |
| -----: | ---------: | ------------: | ----------: | ------: | ----------------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `org.codenarc.rule.ClassReferenceAstVisitor:79` |

##### `addViolationIfDoubleQuoted(ConstantExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`)

| Change |      Delta |             % |        Size | Samples | Location                                                        |
| -----: | ---------: | ------------: | ----------: | ------: | --------------------------------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor:54` |

##### `getAstVisitor()` (`org.codenarc.rule.groovyism.ExplicitLinkedHashMapInstantiationRule`)

| Change |      Delta |             % |        Size | Samples | Location                                                                |
| -----: | ---------: | ------------: | ----------: | ------: | ----------------------------------------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `org.codenarc.rule.groovyism.ExplicitLinkedHashMapInstantiationRule:33` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.basic.ComparisonOfTwoConstantsAstVisitor`)

|  Change |      Delta |      % |          Size | Samples | Location                                                        |
| ------: | ---------: | -----: | ------------: | ------: | --------------------------------------------------------------- |
| +100.0% | +1.999 MiB | 100.0% | 2 MiB → 4 MiB |   1 → 2 | `org.codenarc.rule.basic.ComparisonOfTwoConstantsAstVisitor:53` |

##### `<init>(String, boolean)` (`org.codenarc.util.WildcardPattern`)

| Change |      Delta |            % |        Size | Samples | Location                               |
| -----: | ---------: | -----------: | ----------: | ------: | -------------------------------------- |
|    new | +1.999 MiB | 0.0% → 50.0% | 0 B → 2 MiB |   0 → 1 | `org.codenarc.util.WildcardPattern:40` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.unnecessary.UnnecessarySelfAssignmentAstVisitor`)

| Change |      Delta |             % |        Size | Samples | Location                                                               |
| -----: | ---------: | ------------: | ----------: | ------: | ---------------------------------------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `org.codenarc.rule.unnecessary.UnnecessarySelfAssignmentAstVisitor:53` |

##### `visitMethodComplete(MethodNode)` (`org.codenarc.rule.convention.StaticMethodsBeforeInstanceMethodsAstVisitor`)

| Change |      Delta |             % |        Size | Samples | Location                                                                       |
| -----: | ---------: | ------------: | ----------: | ------: | ------------------------------------------------------------------------------ |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `org.codenarc.rule.convention.StaticMethodsBeforeInstanceMethodsAstVisitor:76` |

##### `visitClosureExpression(ClosureExpression)` (`org.codenarc.rule.naming.ParameterNameAstVisitor`)

| Change |      Delta |             % |        Size | Samples | Location                                              |
| -----: | ---------: | ------------: | ----------: | ------: | ----------------------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `org.codenarc.rule.naming.ParameterNameAstVisitor:73` |

##### `visitBinaryExpression(BinaryExpression)` (`org.gmetrics.metric.cyclomatic.CyclomaticComplexityAstVisitor`)

| Change |      Delta |             % |        Size | Samples | Location                                                           |
| -----: | ---------: | ------------: | ----------: | ------: | ------------------------------------------------------------------ |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `org.gmetrics.metric.cyclomatic.CyclomaticComplexityAstVisitor:89` |

##### `<init>()` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

| Change |      Delta |             % |        Size | Samples | Location                                                |
| -----: | ---------: | ------------: | ----------: | ------: | ------------------------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `org.codenarc.rule.formatting.IndentationAstVisitor:80` |

##### `visitImports(ModuleNode)` (`org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor`)

| Change |      Delta |             % |        Size | Samples | Location                                                       |
| -----: | ---------: | ------------: | ----------: | ------: | -------------------------------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor:48` |

##### `make(MethodType, LambdaForm, Object)` (`java.lang.invoke.BoundMethodHandle$Species_L`)

| Change |       Delta |      % |               Size |  Samples | Location                                           |
| -----: | ----------: | -----: | -----------------: | -------: | -------------------------------------------------- |
| -68.0% | -184.58 MiB | 100.0% | 271 MiB → 86.7 MiB | 137 → 44 | `java.lang.invoke.BoundMethodHandle$Species_L:225` |

##### `compile()` (`java.util.regex.Pattern`)

|  Change |       Delta |             % |               Size | Samples | Location                       |
| ------: | ----------: | ------------: | -----------------: | ------: | ------------------------------ |
|  -27.8% |  -28.13 MiB | 44.4% → 45.6% | 101 MiB → 72.9 MiB | 51 → 39 | `java.util.regex.Pattern:1934` |
|  -36.5% | -18.364 MiB | 22.1% → 20.0% |  50.3 MiB → 32 MiB | 15 → 16 | `java.util.regex.Pattern:1935` |
|  -66.7% | -11.994 MiB |   7.9% → 3.8% |     18 MiB → 6 MiB |   9 → 3 | `java.util.regex.Pattern:1937` |
| removed |  -5.997 MiB |   2.6% → 0.0% |        6 MiB → 0 B |   3 → 0 | `java.util.regex.Pattern:1967` |
|   -7.4% |  -3.773 MiB | 22.3% → 29.4% |  50.8 MiB → 47 MiB | 27 → 25 | `java.util.regex.Pattern:1915` |

##### `join(PredictionContext, PredictionContext, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContext`)

| Change |       Delta |             % |                Size | Samples | Location                                                  |
| -----: | ----------: | ------------: | ------------------: | ------: | --------------------------------------------------------- |
| -42.4% | -32.306 MiB | 52.8% → 40.2% |   76.3 MiB → 44 MiB | 39 → 21 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext:159` |
| -49.9% |  -5.632 MiB |   7.8% → 5.2% | 11.3 MiB → 5.67 MiB |   6 → 3 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext:227` |
|  +4.7% |  +2.666 MiB | 39.4% → 54.6% |   57 MiB → 59.7 MiB | 27 → 30 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext:160` |

##### `divideOneWord(int, MutableBigInteger)` (`java.math.MutableBigInteger`)

| Change |       Delta |      % |              Size | Samples | Location                           |
| -----: | ----------: | -----: | ----------------: | ------: | ---------------------------------- |
| -43.7% | -33.215 MiB | 100.0% | 76 MiB → 42.7 MiB | 37 → 22 | `java.math.MutableBigInteger:1105` |

##### `<init>(Reader, int)` (`java.io.BufferedReader`)

| Change |       Delta |      % |                Size | Samples | Location                     |
| -----: | ----------: | -----: | ------------------: | ------: | ---------------------------- |
| -56.6% | -32.024 MiB | 100.0% | 56.6 MiB → 24.5 MiB | 29 → 13 | `java.io.BufferedReader:104` |

##### `entrySet()` (`java.util.HashMap`)

| Change |       Delta |      % |            Size | Samples | Location                 |
| -----: | ----------: | -----: | --------------: | ------: | ------------------------ |
| -66.7% | -31.984 MiB | 100.0% | 48 MiB → 16 MiB |  24 → 8 | `java.util.HashMap:1099` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

| Change |      Delta |      % |              Size |   Samples | Location                     |
| -----: | ---------: | -----: | ----------------: | --------: | ---------------------------- |
|  -7.3% | -31.43 MiB | 100.0% | 429 MiB → 398 MiB | 178 → 200 | `java.lang.reflect.Array:78` |

##### `stream(Spliterator, boolean)` (`java.util.stream.StreamSupport`)

| Change |      Delta |      % |              Size |   Samples | Location                            |
| -----: | ---------: | -----: | ----------------: | --------: | ----------------------------------- |
| -10.7% | -30.21 MiB | 100.0% | 283 MiB → 252 MiB | 121 → 128 | `java.util.stream.StreamSupport:69` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change |       Delta |      % |              Size |  Samples | Location                                  |
| -----: | ----------: | -----: | ----------------: | -------: | ----------------------------------------- |
| -13.8% | -29.129 MiB | 100.0% | 211 MiB → 182 MiB | 101 → 89 | `java.lang.invoke.DirectMethodHandle:501` |

##### `resize()` (`java.util.HashMap`)

| Change |       Delta |      % |              Size | Samples | Location                |
| -----: | ----------: | -----: | ----------------: | ------: | ----------------------- |
| -18.3% | -28.008 MiB | 100.0% | 153 MiB → 125 MiB | 81 → 68 | `java.util.HashMap:710` |

##### `parameterArray()` (`java.lang.invoke.MethodType`)

| Change |       Delta |      % |              Size | Samples | Location                          |
| -----: | ----------: | -----: | ----------------: | ------: | --------------------------------- |
| -15.9% | -26.741 MiB | 100.0% | 168 MiB → 141 MiB | 83 → 72 | `java.lang.invoke.MethodType:885` |

##### `toBigInteger(int)` (`java.math.MutableBigInteger`)

| Change |       Delta |      % |              Size | Samples | Location                          |
| -----: | ----------: | -----: | ----------------: | ------: | --------------------------------- |
| -20.3% | -26.153 MiB | 100.0% | 129 MiB → 103 MiB | 65 → 50 | `java.math.MutableBigInteger:191` |

##### `of(byte, int)` (`java.lang.invoke.LambdaFormEditor$TransformKey`)

| Change |       Delta |      % |              Size | Samples | Location                                             |
| -----: | ----------: | -----: | ----------------: | ------: | ---------------------------------------------------- |
| -17.9% | -25.652 MiB | 100.0% | 144 MiB → 118 MiB | 73 → 61 | `java.lang.invoke.LambdaFormEditor$TransformKey:177` |

##### `copyOfRange(Object[], int, int)` (`java.util.Arrays`)

| Change |       Delta |      % |              Size |   Samples | Location                |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------------- |
| -10.5% | -25.553 MiB | 100.0% | 244 MiB → 218 MiB | 126 → 107 | `java.util.Arrays:3768` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |       Delta |      % |               Size | Samples | Location                            |
| -----: | ----------: | -----: | -----------------: | ------: | ----------------------------------- |
| -96.1% | -21.907 MiB | 100.0% | 22.8 MiB → 914 KiB |       1 | `java.util.zip.ZipFile$Source:1733` |

##### `makeBlockInliningWrapper(MethodHandle)` (`java.lang.invoke.MethodHandleImpl`)

| Change |       Delta |      % |              Size |   Samples | Location                                |
| -----: | ----------: | -----: | ----------------: | --------: | --------------------------------------- |
|  -4.4% | -18.242 MiB | 100.0% | 418 MiB → 399 MiB | 211 → 199 | `java.lang.invoke.MethodHandleImpl:667` |

##### `valueOf(long)` (`java.lang.Long`)

| Change |       Delta |      % |              Size | Samples | Location              |
| -----: | ----------: | -----: | ----------------: | ------: | --------------------- |
| -12.0% | -17.822 MiB | 100.0% | 149 MiB → 131 MiB | 75 → 68 | `java.lang.Long:1207` |

##### `<init>(int)` (`java.util.ArrayList`)

| Change |       Delta |      % |              Size | Samples | Location                  |
| -----: | ----------: | -----: | ----------------: | ------: | ------------------------- |
| -36.4% | -17.744 MiB | 100.0% | 48.7 MiB → 31 MiB | 26 → 18 | `java.util.ArrayList:156` |

##### `convertToTypeArray(Object[])` (`org.codehaus.groovy.runtime.MetaClassHelper`)

| Change |       Delta |      % |              Size | Samples | Location                                          |
| -----: | ----------: | -----: | ----------------: | ------: | ------------------------------------------------- |
| -23.2% | -17.618 MiB | 100.0% | 76 MiB → 58.3 MiB | 37 → 30 | `org.codehaus.groovy.runtime.MetaClassHelper:641` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |       Delta |      % |                Size | Samples | Location                |
| -----: | ----------: | -----: | ------------------: | ------: | ----------------------- |
| -26.1% | -17.414 MiB | 100.0% | 66.7 MiB → 49.3 MiB | 59 → 52 | `java.util.Arrays:3541` |

##### `matches(String)` (`org.codenarc.util.WildcardPattern`)

| Change |      Delta |              % |             Size | Samples | Location                               |
| -----: | ---------: | -------------: | ---------------: | ------: | -------------------------------------- |
| -80.0% | -7.981 MiB | 71.4% → 100.0% | 9.98 MiB → 2 MiB |   5 → 1 | `org.codenarc.util.WildcardPattern:75` |

##### `shouldApplyThisRuleTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|  Change |      Delta |             % |        Size | Samples | Location                             |
| ------: | ---------: | ------------: | ----------: | ------: | ------------------------------------ |
| removed | -3.998 MiB | 100.0% → 0.0% | 4 MiB → 0 B |   2 → 0 | `org.codenarc.rule.AbstractRule:253` |

##### `visitBlockStatement(BlockStatement)` (`org.codenarc.rule.formatting.SpaceAfterSemicolonAstVisitor`)

|  Change |      Delta |            % |           Size | Samples | Location                                                        |
| ------: | ---------: | -----------: | -------------: | ------: | --------------------------------------------------------------- |
| removed | -1.999 MiB | 54.2% → 0.0% |    2 MiB → 0 B |   1 → 0 | `org.codenarc.rule.formatting.SpaceAfterSemicolonAstVisitor:53` |
| removed | -1.691 MiB | 45.8% → 0.0% | 1.69 MiB → 0 B |   1 → 0 | `org.codenarc.rule.formatting.SpaceAfterSemicolonAstVisitor:45` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

| Change |      Delta |      % |             Size | Samples | Location                                                                      |
| -----: | ---------: | -----: | ---------------: | ------: | ----------------------------------------------------------------------------- |
| -35.7% | -2.217 MiB | 100.0% | 6.22 MiB → 4 MiB |   4 → 2 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3:47` |

##### `methodReturnsArray(MethodNode)` (`org.codenarc.rule.design.ReturnsNullInsteadOfEmptyArrayAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Location                                                               |
| ------: | ---------: | ------------: | ----------: | ------: | ---------------------------------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `org.codenarc.rule.design.ReturnsNullInsteadOfEmptyArrayAstVisitor:67` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.basic.ComparisonWithSelfAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Location                                                  |
| ------: | ---------: | ------------: | ----------: | ------: | --------------------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `org.codenarc.rule.basic.ComparisonWithSelfAstVisitor:52` |

##### `markVariableAsReferenced(String, VariableExpression)` (`org.codenarc.rule.unused.UnusedVariableAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Location                                                |
| ------: | ---------: | ------------: | ----------: | ------: | ------------------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `org.codenarc.rule.unused.UnusedVariableAstVisitor:158` |

##### `doCall(Object)` (`org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3`)

| Change |      Delta |      % |          Size | Samples | Location                                                                            |
| -----: | ---------: | -----: | ------------: | ------: | ----------------------------------------------------------------------------------- |
| -25.0% | -1.999 MiB | 100.0% | 8 MiB → 6 MiB |   4 → 3 | `org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3:112` |

##### `<init>()` (`org.codenarc.rule.AbstractMethodCallExpressionVisitor`)

|  Change |      Delta |             % |        Size | Samples | Location                                                   |
| ------: | ---------: | ------------: | ----------: | ------: | ---------------------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `org.codenarc.rule.AbstractMethodCallExpressionVisitor:26` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.groovyism.CollectAllIsDeprecatedAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Location                                                          |
| ------: | ---------: | ------------: | ----------: | ------: | ----------------------------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `org.codenarc.rule.groovyism.CollectAllIsDeprecatedAstVisitor:49` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryCallForLastElementAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Location                                                                   |
| ------: | ---------: | ------------: | ----------: | ------: | -------------------------------------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `org.codenarc.rule.unnecessary.UnnecessaryCallForLastElementAstVisitor:63` |

##### `visitStatement(Statement)` (`org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Location                                                          |
| ------: | ---------: | ------------: | ----------: | ------: | ----------------------------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor:91` |

##### `visitConstantExpression(ConstantExpression)` (`org.codenarc.rule.convention.LongLiteralWithLowerCaseLAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Location                                                              |
| ------: | ---------: | ------------: | ----------: | ------: | --------------------------------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `org.codenarc.rule.convention.LongLiteralWithLowerCaseLAstVisitor:42` |

##### `visitClassExpression(ClassExpression)` (`org.codenarc.rule.ClassReferenceAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Location                                        |
| ------: | ---------: | ------------: | ----------: | ------: | ----------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `org.codenarc.rule.ClassReferenceAstVisitor:85` |

##### `<init>()` (`org.codenarc.rule.AbstractMethodVisitor`)

|  Change |      Delta |             % |        Size | Samples | Location                                     |
| ------: | ---------: | ------------: | ----------: | ------: | -------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `org.codenarc.rule.AbstractMethodVisitor:26` |

##### `createAggregateMetricResult(Collection, Integer, Map)` (`org.gmetrics.result.MetricResultBuilder`)

|  Change |      Delta |             % |        Size | Samples | Location                                     |
| ------: | ---------: | ------------: | ----------: | ------: | -------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `org.gmetrics.result.MetricResultBuilder:52` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

| Change |      Delta |      % |          Size | Samples | Location                                       |
| -----: | ---------: | -----: | ------------: | ------: | ---------------------------------------------- |
| -50.0% | -1.999 MiB | 100.0% | 4 MiB → 2 MiB |   2 → 1 | `org.codenarc.analyzer.SuppressionAnalyzer:37` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryModOneAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Location                                                       |
| ------: | ---------: | ------------: | ----------: | ------: | -------------------------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `org.codenarc.rule.unnecessary.UnnecessaryModOneAstVisitor:46` |

##### `<init>()` (`org.gmetrics.metric.AbstractMetric`)

|  Change |      Delta |             % |        Size | Samples | Location                                |
| ------: | ---------: | ------------: | ----------: | ------: | --------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `org.gmetrics.metric.AbstractMetric:36` |

##### `visitMethodEx(MethodNode)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Location                                                 |
| ------: | ---------: | ------------: | ----------: | ------: | -------------------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `org.codenarc.rule.formatting.IndentationAstVisitor:149` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `make(byte, Class, MemberName, Class)` (`java.lang.invoke.DirectMethodHandle`)

| Change |       Delta |      % |              Size | Samples | Caller                                                                                   | Location                                |
| -----: | ----------: | -----: | ----------------: | ------: | ---------------------------------------------------------------------------------------- | --------------------------------------- |
| +96.6% | +98.482 MiB | 100.0% | 102 MiB → 200 MiB | 32 → 38 | `getDirectMethodCommon(byte, Class, MemberName, boolean, boolean, MethodHandles$Lookup)` | `java.lang.invoke.MethodHandles$Lookup` |

##### `makeImpl(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

| Change |        Delta |             % |              Size |   Samples | Caller                                | Location                      |
| -----: | -----------: | ------------: | ----------------: | --------: | ------------------------------------- | ----------------------------- |
| +33.8% | +101.313 MiB | 43.4% → 51.7% | 299 MiB → 401 MiB | 151 → 202 | `insertParameterTypes(int, Class[])`  | `java.lang.invoke.MethodType` |
|  -3.0% |  -10.174 MiB | 49.3% → 42.6% | 340 MiB → 330 MiB | 175 → 169 | `methodType(Class, Class[], boolean)` | `java.lang.invoke.MethodType` |
| -12.3% |   -6.125 MiB |   7.2% → 5.7% | 50 MiB → 43.8 MiB |   25 → 22 | `methodType(Class, Class)`            | `java.lang.invoke.MethodType` |

##### `lambdaFormEditor(LambdaForm)` (`java.lang.invoke.LambdaFormEditor`)

| Change |       Delta |      % |              Size |   Samples | Caller     | Location                      |
| -----: | ----------: | -----: | ----------------: | --------: | ---------- | ----------------------------- |
| +27.0% | +65.326 MiB | 100.0% | 242 MiB → 308 MiB | 126 → 159 | `editor()` | `java.lang.invoke.LambdaForm` |

##### `makeGuardWithTest(MethodHandle, MethodHandle, MethodHandle)` (`java.lang.invoke.MethodHandleImpl`)

| Change |       Delta |      % |               Size | Samples | Caller                                                    | Location                         |
| -----: | ----------: | -----: | -----------------: | ------: | --------------------------------------------------------- | -------------------------------- |
| +52.4% | +47.404 MiB | 100.0% | 90.4 MiB → 138 MiB | 46 → 47 | `guardWithTest(MethodHandle, MethodHandle, MethodHandle)` | `java.lang.invoke.MethodHandles` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|  Change |       Delta |             % |                Size | Samples | Caller                                                               | Location                                              |
| ------: | ----------: | ------------: | ------------------: | ------: | -------------------------------------------------------------------- | ----------------------------------------------------- |
| +152.0% | +31.811 MiB | 33.0% → 52.0% | 20.9 MiB → 52.7 MiB | 11 → 28 | `grow(int)`                                                          | `java.util.ArrayList`                                 |
|  +14.3% |  +4.078 MiB | 45.0% → 32.2% | 28.6 MiB → 32.6 MiB | 15 → 17 | `toArray()`                                                          | `java.util.ArrayList`                                 |
|  +66.7% |  +3.997 MiB |   9.4% → 9.9% |    6 MiB → 9.99 MiB |   3 → 5 | `join(PredictionContext, PredictionContext, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |
|  -50.0% |  -1.998 MiB |   6.3% → 2.0% |       4 MiB → 2 MiB |   2 → 1 | `clone()`                                                            | `java.util.ArrayList`                                 |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change |      Delta |      % |              Size |   Samples | Caller                                                                                      | Location                                             |
| -----: | ---------: | -----: | ----------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|  +5.0% | +32.31 MiB | 100.0% | 641 MiB → 673 MiB | 325 → 340 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010b2800` |

##### `newHashMap(int)` (`java.util.HashMap`)

| Change |       Delta |      % |                Size | Samples | Caller                                                                    | Location                            |
| -----: | ----------: | -----: | ------------------: | ------: | ------------------------------------------------------------------------- | ----------------------------------- |
| +47.7% | +26.681 MiB | 100.0% | 55.9 MiB → 82.6 MiB | 31 → 44 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |       Delta |      % |              Size |   Samples | Caller                                          | Location            |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------------------------------------- | ------------------- |
|  +9.9% | +23.507 MiB | 100.0% | 237 MiB → 261 MiB | 122 → 131 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `iterator()` (`java.util.ArrayList`)

|  Change |       Delta |            % |             Size | Samples | Caller                                                    | Location                                           |
| ------: | ----------: | -----------: | ---------------: | ------: | --------------------------------------------------------- | -------------------------------------------------- |
| +616.3% | +12.319 MiB | 2.6% → 14.3% | 2 MiB → 14.3 MiB |   1 → 3 | `each(Iterable, Closure)`                                 | `org.codehaus.groovy.runtime.DefaultGroovyMethods` |
| +133.3% |  +7.996 MiB | 7.8% → 14.0% |   6 MiB → 14 MiB |   3 → 7 | `visitAnnotations(Iterable)`                              | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`  |
| +200.0% |  +3.998 MiB |  2.6% → 6.0% |    2 MiB → 6 MiB |   1 → 3 | `visitContents(GroovyClassVisitor)`                       | `org.codehaus.groovy.ast.ClassNode`                |
|     new |  +1.999 MiB |  0.0% → 2.0% |      0 B → 2 MiB |   0 → 1 | `visitClass(ClassNode)`                                   | `org.codenarc.rule.AbstractFieldVisitor`           |
| removed |  -1.999 MiB |  2.6% → 0.0% |      2 MiB → 0 B |   1 → 0 | `isMethodCall(MethodCallExpression, List, List, Integer)` | `org.codenarc.util.AstUtil`                        |

##### `iterator()` (`java.util.HashMap$KeySet`)

| Change |      Delta |             % |         Size | Samples | Caller       | Location            |
| -----: | ---------: | ------------: | -----------: | ------: | ------------ | ------------------- |
|    new | +21.97 MiB | 0.0% → 100.0% | 0 B → 22 MiB |   0 → 1 | `iterator()` | `java.util.HashSet` |

##### `valueOf(long)` (`java.math.BigDecimal`)

|   Change |       Delta |      % |           Size | Samples | Caller                 | Location                                              |
| -------: | ----------: | -----: | -------------: | ------: | ---------------------- | ----------------------------------------------------- |
| +1000.0% | +19.989 MiB | 100.0% | 2 MiB → 22 MiB |  1 → 10 | `toBigDecimal(Number)` | `org.codehaus.groovy.runtime.typehandling.NumberMath` |

##### `newArray(Class, int)` (`java.lang.reflect.Array`)

| Change |       Delta |      % |              Size |   Samples | Caller                    | Location                  |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------- | ------------------------- |
|  +6.6% | +19.186 MiB | 100.0% | 289 MiB → 308 MiB | 147 → 155 | `newInstance(Class, int)` | `java.lang.reflect.Array` |

##### `make(MethodType, LambdaForm, Object, Object, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LLLL`)

| Change |       Delta |      % |              Size |   Samples | Caller                                                                 | Location                                     |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------------------------------------------------------- | -------------------------------------------- |
|  +6.0% | +16.437 MiB | 100.0% | 272 MiB → 289 MiB | 128 → 144 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `of(byte, int, int, int[])` (`java.lang.invoke.LambdaFormEditor$TransformKey`)

|  Change |       Delta |      % |              Size | Samples | Caller                                  | Location                            |
| ------: | ----------: | -----: | ----------------: | ------: | --------------------------------------- | ----------------------------------- |
| +108.7% | +15.209 MiB | 100.0% | 14 MiB → 29.2 MiB |  7 → 18 | `collectArgumentsForm(int, MethodType)` | `java.lang.invoke.LambdaFormEditor` |

##### `<init>(Pattern, CharSequence)` (`java.util.regex.Matcher`)

| Change |      Delta |      % |               Size | Samples | Caller                  | Location                  |
| -----: | ---------: | -----: | -----------------: | ------: | ----------------------- | ------------------------- |
| +16.9% | +14.65 MiB | 100.0% | 86.9 MiB → 102 MiB | 44 → 49 | `matcher(CharSequence)` | `java.util.regex.Pattern` |

##### `fillInStackTrace(int)` (`java.lang.Throwable`)

| Change |      Delta |      % |              Size |   Samples | Caller               | Location              |
| -----: | ---------: | -----: | ----------------: | --------: | -------------------- | --------------------- |
|  +2.6% | +14.11 MiB | 100.0% | 548 MiB → 562 MiB | 275 → 288 | `fillInStackTrace()` | `java.lang.Throwable` |

##### `writeViolation(Writer, Violation, String)` (`org.codenarc.report.TextReportWriter`)

| Change |       Delta |             % |         Size | Samples | Caller                                                  | Location                                             |
| -----: | ----------: | ------------: | -----------: | ------: | ------------------------------------------------------- | ---------------------------------------------------- |
|    new | +13.993 MiB | 0.0% → 100.0% | 0 B → 14 MiB |   0 → 7 | `invokeVirtual(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001409000` |

##### `opWrapSink(int, Sink)` (`java.util.stream.ReferencePipeline$3`)

| Change |       Delta |      % |                Size | Samples | Caller           | Location                            |
| -----: | ----------: | -----: | ------------------: | ------: | ---------------- | ----------------------------------- |
| +41.6% | +13.115 MiB | 100.0% | 31.5 MiB → 44.6 MiB | 16 → 25 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `lambda$makeRef$0(MatchOps$MatchKind, Predicate)` (`java.util.stream.MatchOps`)

| Change |       Delta |      % |              Size | Samples | Caller  | Location                                               |
| -----: | ----------: | -----: | ----------------: | ------: | ------- | ------------------------------------------------------ |
| +15.3% | +12.336 MiB | 100.0% | 80.6 MiB → 93 MiB | 42 → 46 | `get()` | `java.util.stream.MatchOps$$Lambda.0x000000700101d478` |

##### `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

| Change |       Delta |      % |               Size | Samples | Caller                                                            | Location                            |
| -----: | ----------: | -----: | -----------------: | ------: | ----------------------------------------------------------------- | ----------------------------------- |
| +11.9% | +11.383 MiB | 100.0% | 95.8 MiB → 107 MiB | 48 → 55 | `makePairwiseConvert(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `optimize(Pattern$Node)` (`java.util.regex.Pattern$BnM`)

| Change |      Delta |      % |              Size |   Samples | Caller      | Location                  |
| -----: | ---------: | -----: | ----------------: | --------: | ----------- | ------------------------- |
|  +5.2% | +11.37 MiB | 100.0% | 217 MiB → 229 MiB | 110 → 115 | `compile()` | `java.util.regex.Pattern` |

##### `<init>()` (`org.codenarc.rule.AbstractAstVisitor`)

|  Change |      Delta |            % |        Size | Samples | Caller     | Location                                                                 |
| ------: | ---------: | -----------: | ----------: | ------: | ---------- | ------------------------------------------------------------------------ |
| removed | -1.999 MiB | 50.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `<init>()` | `org.codenarc.rule.unnecessary.UnnecessaryModOneAstVisitor`              |
|     new | +1.999 MiB | 0.0% → 25.0% | 0 B → 2 MiB |   0 → 1 | `<init>()` | `org.codenarc.rule.formatting.AbstractSingleSpaceAfterKeywordAstVisitor` |
|     new | +1.999 MiB | 0.0% → 25.0% | 0 B → 2 MiB |   0 → 1 | `<init>()` | `org.codenarc.rule.basic.RandomDoubleCoercedToZeroAstVisitor`            |
|     new | +1.999 MiB | 0.0% → 25.0% | 0 B → 2 MiB |   0 → 1 | `<init>()` | `org.codenarc.rule.size.ClassSizeAstVisitor`                             |
|     new | +1.999 MiB | 0.0% → 25.0% | 0 B → 2 MiB |   0 → 1 | `<init>()` | `org.codenarc.rule.design.CloneableWithoutCloneAstVisitor`               |

##### `visitVariableExpression(VariableExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`)

| Change |      Delta |             % |        Size | Samples | Caller                     | Location                                          |
| -----: | ---------: | ------------: | ----------: | ------: | -------------------------- | ------------------------------------------------- |
|    new | +3.998 MiB | 0.0% → 100.0% | 0 B → 4 MiB |   0 → 2 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.VariableExpression` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|  Change |      Delta |      % |          Size | Samples | Caller                                    | Location                                             |
| ------: | ---------: | -----: | ------------: | ------: | ----------------------------------------- | ---------------------------------------------------- |
| +200.0% | +3.998 MiB | 100.0% | 2 MiB → 6 MiB |   1 → 3 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010bd000` |

##### `addViolation(ASTNode, String)` (`org.codenarc.rule.AbstractAstVisitor`)

| Change |      Delta |             % |        Size | Samples | Caller                                          | Location                                             |
| -----: | ---------: | ------------: | ----------: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
|    new | +3.998 MiB | 0.0% → 100.0% | 0 B → 4 MiB |   0 → 1 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000700138c800` |

##### `isViolationSuppressed(Violation)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|  Change |      Delta |      % |          Size | Samples | Caller                                  | Location                                             |
| ------: | ---------: | -----: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
| +200.0% | +3.998 MiB | 100.0% | 2 MiB → 6 MiB |   1 → 3 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001101c00` |

##### `processMethodOrConstructorCall(MethodCall)` (`org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`)

| Change |      Delta |             % |          Size | Samples | Caller                                  | Location                                             |
| -----: | ---------: | ------------: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
|    new | +2.302 MiB | 0.0% → 100.0% | 0 B → 2.3 MiB |   0 → 2 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001001000` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.unused.UnusedVariableRule`)

| Change |      Delta |             % |        Size | Samples | Caller                | Location                         |
| -----: | ---------: | ------------: | ----------: | ------: | --------------------- | -------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `applyTo(SourceCode)` | `org.codenarc.rule.AbstractRule` |

##### `visitPropertyExpression(PropertyExpression)` (`org.codenarc.rule.ClassReferenceAstVisitor`)

| Change |      Delta |             % |        Size | Samples | Caller                     | Location                                          |
| -----: | ---------: | ------------: | ----------: | ------: | -------------------------- | ------------------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.PropertyExpression` |

##### `addViolationIfDoubleQuoted(ConstantExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`)

| Change |      Delta |             % |        Size | Samples | Caller                                  | Location                                             |
| -----: | ---------: | ------------: | ----------: | ------: | --------------------------------------- | ---------------------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001001000` |

##### `getAstVisitor()` (`org.codenarc.rule.groovyism.ExplicitLinkedHashMapInstantiationRule`)

| Change |      Delta |             % |        Size | Samples | Caller                      | Location                                   |
| -----: | ---------: | ------------: | ----------: | ------: | --------------------------- | ------------------------------------------ |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.basic.ComparisonOfTwoConstantsAstVisitor`)

| Change |      Delta |              % |        Size | Samples | Caller                                              | Location                                        |
| -----: | ---------: | -------------: | ----------: | ------: | --------------------------------------------------- | ----------------------------------------------- |
|    new | +1.999 MiB |   0.0% → 50.0% | 0 B → 2 MiB |   0 → 1 | `visitDeclarationExpression(DeclarationExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport`    |
|    ~0% |       -8 B | 100.0% → 50.0% |       2 MiB |       1 | `visit(GroovyCodeVisitor)`                          | `org.codehaus.groovy.ast.expr.BinaryExpression` |

##### `<init>(String, boolean)` (`org.codenarc.util.WildcardPattern`)

|  Change |      Delta |      % |          Size | Samples | Caller                                  | Location                                             |
| ------: | ---------: | -----: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
| +100.0% | +1.999 MiB | 100.0% | 2 MiB → 4 MiB |   1 → 2 | `newInvokeSpecial(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001006800` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.unnecessary.UnnecessarySelfAssignmentAstVisitor`)

| Change |      Delta |             % |        Size | Samples | Caller                     | Location                                        |
| -----: | ---------: | ------------: | ----------: | ------: | -------------------------- | ----------------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.BinaryExpression` |

##### `processParameters(Parameter[], String)` (`org.codenarc.rule.convention.NoDoubleAstVisitor`)

| Change |      Delta |             % |        Size | Samples | Caller                                          | Location                                     |
| -----: | ---------: | ------------: | ----------: | ------: | ----------------------------------------------- | -------------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `visitMethodComplete(MethodNode)` (`org.codenarc.rule.convention.StaticMethodsBeforeInstanceMethodsAstVisitor`)

| Change |      Delta |             % |        Size | Samples | Caller                    | Location                               |
| -----: | ---------: | ------------: | ----------: | ------: | ------------------------- | -------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `visitMethod(MethodNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `visitClosureExpression(ClosureExpression)` (`org.codenarc.rule.naming.ParameterNameAstVisitor`)

| Change |      Delta |             % |        Size | Samples | Caller                     | Location                                         |
| -----: | ---------: | ------------: | ----------: | ------: | -------------------------- | ------------------------------------------------ |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.ClosureExpression` |

##### `visitBinaryExpression(BinaryExpression)` (`org.gmetrics.metric.cyclomatic.CyclomaticComplexityAstVisitor`)

| Change |      Delta |             % |        Size | Samples | Caller                                              | Location                                     |
| -----: | ---------: | ------------: | ----------: | ------: | --------------------------------------------------- | -------------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `visitDeclarationExpression(DeclarationExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport` |

##### `<init>()` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

| Change |      Delta |             % |        Size | Samples | Caller                     | Location                                             |
| -----: | ---------: | ------------: | ----------: | ------: | -------------------------- | ---------------------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `newInvokeSpecial(Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001635800` |

##### `visitImports(ModuleNode)` (`org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor`)

| Change |      Delta |             % |        Size | Samples | Caller                  | Location                                          |
| -----: | ---------: | ------------: | ----------: | ------: | ----------------------- | ------------------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `visitClass(ClassNode)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `make(MethodType, LambdaForm, Object)` (`java.lang.invoke.BoundMethodHandle$Species_L`)

| Change |       Delta |      % |               Size |  Samples | Caller                        | Location                             |
| -----: | ----------: | -----: | -----------------: | -------: | ----------------------------- | ------------------------------------ |
| -68.0% | -184.58 MiB | 100.0% | 271 MiB → 86.7 MiB | 137 → 44 | `makeReinvoker(MethodHandle)` | `java.lang.invoke.BoundMethodHandle` |

##### `compile()` (`java.util.regex.Pattern`)

| Change |       Delta |      % |              Size |  Samples | Caller                | Location                  |
| -----: | ----------: | -----: | ----------------: | -------: | --------------------- | ------------------------- |
| -29.7% | -67.446 MiB | 100.0% | 227 MiB → 160 MiB | 106 → 84 | `<init>(String, int)` | `java.util.regex.Pattern` |

##### `join(PredictionContext, PredictionContext, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContext`)

| Change |       Delta |              % |              Size | Samples | Caller                                       | Location                                                   |
| -----: | ----------: | -------------: | ----------------: | ------: | -------------------------------------------- | ---------------------------------------------------------- |
| -25.8% | -37.271 MiB | 100.0% → 98.2% | 145 MiB → 107 MiB | 72 → 53 | `add(ATNConfig, PredictionContextCache)`     | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`           |
|    new |  +1.999 MiB |    0.0% → 1.8% |       0 B → 2 MiB |   0 → 1 | `join(PredictionContext, PredictionContext)` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache` |

##### `divideOneWord(int, MutableBigInteger)` (`java.math.MutableBigInteger`)

|  Change |       Delta |              % |              Size | Samples | Caller                                                       | Location                      |
| ------: | ----------: | -------------: | ----------------: | ------: | ------------------------------------------------------------ | ----------------------------- |
|  -31.0% | -19.221 MiB | 81.6% → 100.0% | 62 MiB → 42.7 MiB | 31 → 22 | `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)` | `java.math.MutableBigInteger` |
| removed | -13.993 MiB |   18.4% → 0.0% |      14 MiB → 0 B |   6 → 0 | `divide(long, MutableBigInteger)`                            | `java.math.MutableBigInteger` |

##### `<init>(Reader, int)` (`java.io.BufferedReader`)

| Change |       Delta |      % |                Size | Samples | Caller           | Location                 |
| -----: | ----------: | -----: | ------------------: | ------: | ---------------- | ------------------------ |
| -56.6% | -32.024 MiB | 100.0% | 56.6 MiB → 24.5 MiB | 29 → 13 | `<init>(Reader)` | `java.io.BufferedReader` |

##### `entrySet()` (`java.util.HashMap`)

| Change |       Delta |      % |            Size | Samples | Caller                                                                    | Location                            |
| -----: | ----------: | -----: | --------------: | ------: | ------------------------------------------------------------------------- | ----------------------------------- |
| -66.7% | -31.984 MiB | 100.0% | 48 MiB → 16 MiB |  24 → 8 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|  Change |       Delta |             % |              Size |   Samples | Caller                                             | Location                                             |
| ------: | ----------: | ------------: | ----------------: | --------: | -------------------------------------------------- | ---------------------------------------------------- |
|   -7.5% | -32.041 MiB | 99.5% → 99.3% | 427 MiB → 395 MiB | 177 → 198 | `invokeStatic(Object, Object, int)`                | `java.lang.invoke.LambdaForm$DMH.0x000000700109a000` |
| removed |  -1.999 MiB |   0.5% → 0.0% |       2 MiB → 0 B |     1 → 0 | `prepareArray(Object[])`                           | `java.util.HashMap`                                  |
|     new |  +1.998 MiB |   0.0% → 0.5% |       0 B → 2 MiB |     0 → 1 | `<init>(Object[], Comparator, Object[], int, int)` | `java.util.TimSort`                                  |
|     new | +625.32 KiB |   0.0% → 0.2% |     0 B → 625 KiB |     0 → 1 | `copyOfRange(Object[], int, int, Class)`           | `java.util.Arrays`                                   |

##### `stream(Spliterator, boolean)` (`java.util.stream.StreamSupport`)

|  Change |       Delta |             % |              Size |   Samples | Caller                       | Location               |
| ------: | ----------: | ------------: | ----------------: | --------: | ---------------------------- | ---------------------- |
|  -13.6% | -38.206 MiB | 99.3% → 96.0% | 281 MiB → 242 MiB | 120 → 123 | `stream(Object[], int, int)` | `java.util.Arrays`     |
| +400.0% |  +7.995 MiB |   0.7% → 4.0% |  2 MiB → 9.99 MiB |     1 → 5 | `stream()`                   | `java.util.Collection` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|  Change |       Delta |             % |              Size | Samples | Caller                                     | Location                                             |
| ------: | ----------: | ------------: | ----------------: | ------: | ------------------------------------------ | ---------------------------------------------------- |
|  -22.4% | -43.313 MiB | 91.5% → 82.3% | 193 MiB → 150 MiB | 92 → 72 | `newInvokeSpecial(Object, Object)`         | `java.lang.invoke.DirectMethodHandle$Holder`         |
| +509.6% | +10.186 MiB |   0.9% → 6.7% |  2 MiB → 12.2 MiB |   1 → 7 | `newInvokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|  -16.7% |  -1.999 MiB |   5.7% → 5.5% |   12 MiB → 10 MiB |   6 → 5 | `newInvokeSpecial(Object, int)`            | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |  +1.999 MiB |   0.0% → 1.1% |       0 B → 2 MiB |   0 → 1 | `newInvokeSpecial(Object)`                 | `java.lang.invoke.LambdaForm$DMH.0x0000007001728000` |
|     new |  +1.999 MiB |   0.0% → 1.1% |       0 B → 2 MiB |   0 → 1 | `newInvokeSpecial(Object)`                 | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `resize()` (`java.util.HashMap`)

| Change |       Delta |             % |              Size | Samples | Caller                                          | Location            |
| -----: | ----------: | ------------: | ----------------: | ------: | ----------------------------------------------- | ------------------- |
| -18.5% | -28.008 MiB | 98.7% → 98.4% | 151 MiB → 123 MiB | 80 → 67 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
|    ~0% |      -128 B |   1.3% → 1.6% |             2 MiB |       1 | `treeifyBin(HashMap$Node[], int)`               | `java.util.HashMap` |

##### `parameterArray()` (`java.lang.invoke.MethodType`)

| Change |       Delta |             % |                Size | Samples | Caller                      | Location                                                  |
| -----: | ----------: | ------------: | ------------------: | ------: | --------------------------- | --------------------------------------------------------- |
| -42.5% | -18.332 MiB | 25.7% → 17.6% | 43.2 MiB → 24.8 MiB | 22 → 13 | `correctWrapping()`         | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| -15.9% |  -8.138 MiB |         30.6% | 51.3 MiB → 43.1 MiB | 26 → 22 | `setGuards(Object)`         | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| +14.7% |  +6.054 MiB | 24.6% → 33.6% | 41.3 MiB → 47.4 MiB | 20 → 24 | `correctParameterLength()`  | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| -14.3% |  -3.995 MiB | 16.7% → 17.0% |     28 MiB → 24 MiB | 13 → 12 | `correctCoerce()`           | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| -58.3% |  -2.329 MiB |   2.4% → 1.2% |    4 MiB → 1.67 MiB |   2 → 1 | `removeWrapper(MethodType)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `toBigInteger(int)` (`java.math.MutableBigInteger`)

| Change |       Delta |             % |               Size | Samples | Caller                                            | Location               |
| -----: | ----------: | ------------: | -----------------: | ------: | ------------------------------------------------- | ---------------------- |
| -19.7% | -24.154 MiB | 95.3% → 96.1% | 123 MiB → 98.6 MiB | 62 → 48 | `divideAndRemainderKnuth(BigInteger)`             | `java.math.BigInteger` |
| -33.3% |  -1.999 MiB |   4.7% → 3.9% |      6 MiB → 4 MiB |   3 → 2 | `divideAndRound(BigInteger, long, int, int, int)` | `java.math.BigDecimal` |

##### `of(byte, int)` (`java.lang.invoke.LambdaFormEditor$TransformKey`)

| Change |       Delta |      % |              Size | Samples | Caller                  | Location                            |
| -----: | ----------: | -----: | ----------------: | ------: | ----------------------- | ----------------------------------- |
| -17.9% | -25.652 MiB | 100.0% | 144 MiB → 118 MiB | 73 → 61 | `bindArgumentForm(int)` | `java.lang.invoke.LambdaFormEditor` |

##### `copyOfRange(Object[], int, int)` (`java.util.Arrays`)

| Change |       Delta |             % |               Size | Samples | Caller                                                           | Location                         |
| -----: | ----------: | ------------: | -----------------: | ------: | ---------------------------------------------------------------- | -------------------------------- |
| -39.7% | -45.733 MiB | 47.3% → 31.8% | 115 MiB → 69.4 MiB | 59 → 33 | `dropParameterTypes(int, int)`                                   | `java.lang.invoke.MethodType`    |
| +15.7% |  +20.18 MiB | 52.7% → 68.2% |  129 MiB → 149 MiB | 67 → 74 | `dropArgumentsToMatch(MethodHandle, int, Class[], int, boolean)` | `java.lang.invoke.MethodHandles` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |       Delta |      % |               Size | Samples | Caller                                          | Location                       |
| -----: | ----------: | -----: | -----------------: | ------: | ----------------------------------------------- | ------------------------------ |
| -96.1% | -21.907 MiB | 100.0% | 22.8 MiB → 914 KiB |       1 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `makeBlockInliningWrapper(MethodHandle)` (`java.lang.invoke.MethodHandleImpl`)

| Change |       Delta |      % |              Size |   Samples | Caller                  | Location                            |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------------- | ----------------------------------- |
|  -4.4% | -18.242 MiB | 100.0% | 418 MiB → 399 MiB | 211 → 199 | `profile(MethodHandle)` | `java.lang.invoke.MethodHandleImpl` |

##### `valueOf(long)` (`java.lang.Long`)

| Change |      Delta |             % |                Size | Samples | Caller                                   | Location                                         |
| -----: | ---------: | ------------: | ------------------: | ------: | ---------------------------------------- | ------------------------------------------------ |
| -58.8% | -9.501 MiB |  10.9% → 5.1% | 16.2 MiB → 6.65 MiB |   9 → 4 | `boxLong(long)`                          | `sun.invoke.util.ValueConversions`               |
|  -6.3% |  -8.32 MiB | 89.1% → 94.9% |   133 MiB → 124 MiB | 66 → 64 | `add(ATNConfig, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet` |

##### `<init>(int)` (`java.util.ArrayList`)

|  Change |        Delta |             % |              Size | Samples | Caller                         | Location                                                  |
| ------: | -----------: | ------------: | ----------------: | ------: | ------------------------------ | --------------------------------------------------------- |
|  -31.6% |  -13.373 MiB | 86.9% → 93.5% | 42.3 MiB → 29 MiB | 22 → 17 | `compile()`                    | `java.util.regex.Pattern`                                 |
|  -50.0% |   -1.999 MiB |   8.2% → 6.5% |     4 MiB → 2 MiB |   2 → 1 | `createList(Object[])`         | `org.codehaus.groovy.runtime.InvokerHelper`               |
| removed |   -1.998 MiB |   4.1% → 0.0% |       2 MiB → 0 B |   1 → 0 | `createSimilarList(List, int)` | `org.codehaus.groovy.runtime.DefaultGroovyMethodsSupport` |
| removed | -382.351 KiB |   0.8% → 0.0% |     382 KiB → 0 B |   1 → 0 | `initValue()`                  | `org.codehaus.groovy.reflection.CachedClass$3`            |

##### `convertToTypeArray(Object[])` (`org.codehaus.groovy.runtime.MetaClassHelper`)

|  Change |       Delta |             % |              Size | Samples | Caller                                                              | Location                                                 |
| ------: | ----------: | ------------: | ----------------: | ------: | ------------------------------------------------------------------- | -------------------------------------------------------- |
|  -32.1% | -17.991 MiB | 73.7% → 65.1% |   56 MiB → 38 MiB | 27 → 19 | `invokeMethod(Class, Object, String, Object[], boolean, boolean)`   | `org.codehaus.groovy.runtime.metaclass.ClosureMetaClass` |
|  +19.8% |  +2.371 MiB | 15.8% → 24.6% | 12 MiB → 14.4 MiB |   6 → 8 | `getNormalMethodWithCaching(Object[], MetaMethodIndex$Entry)`       | `groovy.lang.MetaClassImpl`                              |
| +100.0% |  +1.999 MiB |   2.6% → 6.9% |     2 MiB → 4 MiB |   1 → 2 | `getSuperMethodWithCaching(Object[], MetaMethodIndex$Entry)`        | `groovy.lang.MetaClassImpl`                              |
| removed |  -1.999 MiB |   2.6% → 0.0% |       2 MiB → 0 B |   1 → 0 | `doInvokeMethod(Class, Object, String, Object[], boolean, boolean)` | `groovy.lang.MetaClassImpl`                              |
|  -50.0% |  -1.999 MiB |   5.3% → 3.4% |     4 MiB → 2 MiB |   2 → 1 | `retrieveStaticMethod(String, Object[])`                            | `groovy.lang.MetaClassImpl`                              |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |       Delta |             % |                Size | Samples | Caller                        | Location                          |
| -----: | ----------: | ------------: | ------------------: | ------: | ----------------------------- | --------------------------------- |
| -39.2% | -20.248 MiB | 77.4% → 63.7% | 51.6 MiB → 31.4 MiB | 36 → 31 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |
| +18.8% |  +2.833 MiB | 22.6% → 36.3% | 15.1 MiB → 17.9 MiB | 23 → 21 | `getBytes()`                  | `jdk.internal.loader.Resource`    |

##### `matches(String)` (`org.codenarc.util.WildcardPattern`)

| Change |       Delta |      % |           Size | Samples | Caller                                  | Location                                             |
| -----: | ----------: | -----: | -------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
| -85.7% | -11.979 MiB | 100.0% | 14 MiB → 2 MiB |   7 → 1 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001101c00` |

##### `shouldApplyThisRuleTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|  Change |      Delta |             % |        Size | Samples | Caller                | Location                         |
| ------: | ---------: | ------------: | ----------: | ------: | --------------------- | -------------------------------- |
| removed | -3.998 MiB | 100.0% → 0.0% | 4 MiB → 0 B |   2 → 0 | `applyTo(SourceCode)` | `org.codenarc.rule.AbstractRule` |

##### `visitBlockStatement(BlockStatement)` (`org.codenarc.rule.formatting.SpaceAfterSemicolonAstVisitor`)

|  Change |     Delta |             % |           Size | Samples | Caller                     | Location                                      |
| ------: | --------: | ------------: | -------------: | ------: | -------------------------- | --------------------------------------------- |
| removed | -3.69 MiB | 100.0% → 0.0% | 3.69 MiB → 0 B |   2 → 0 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.stmt.BlockStatement` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

| Change |      Delta |      % |             Size | Samples | Caller                                  | Location                                     |
| -----: | ---------: | -----: | ---------------: | ------: | --------------------------------------- | -------------------------------------------- |
| -35.7% | -2.217 MiB | 100.0% | 6.22 MiB → 4 MiB |   4 → 2 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `methodReturnsArray(MethodNode)` (`org.codenarc.rule.design.ReturnsNullInsteadOfEmptyArrayAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Caller                         | Location                                     |
| ------: | ---------: | ------------: | ----------: | ------: | ------------------------------ | -------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `invokeStatic(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.basic.ComparisonWithSelfAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Caller                     | Location                                        |
| ------: | ---------: | ------------: | ----------: | ------: | -------------------------- | ----------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.BinaryExpression` |

##### `markVariableAsReferenced(String, VariableExpression)` (`org.codenarc.rule.unused.UnusedVariableAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Caller                                          | Location                                     |
| ------: | ---------: | ------------: | ----------: | ------: | ----------------------------------------------- | -------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `doCall(Object)` (`org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3`)

| Change |      Delta |      % |          Size | Samples | Caller                                  | Location                                     |
| -----: | ---------: | -----: | ------------: | ------: | --------------------------------------- | -------------------------------------------- |
| -25.0% | -1.999 MiB | 100.0% | 8 MiB → 6 MiB |   4 → 3 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `<init>()` (`org.codenarc.rule.AbstractMethodCallExpressionVisitor`)

|  Change |      Delta |             % |        Size | Samples | Caller                | Location                                                     |
| ------: | ---------: | ------------: | ----------: | ------: | --------------------- | ------------------------------------------------------------ |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `<init>(String, int)` | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.groovyism.CollectAllIsDeprecatedAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Caller                     | Location                                            |
| ------: | ---------: | ------------: | ----------: | ------: | -------------------------- | --------------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.MethodCallExpression` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryCallForLastElementAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Caller                                              | Location                                     |
| ------: | ---------: | ------------: | ----------: | ------: | --------------------------------------------------- | -------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `visitDeclarationExpression(DeclarationExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport` |

##### `visitStatement(Statement)` (`org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Caller                                | Location                                          |
| ------: | ---------: | ------------: | ----------: | ------: | ------------------------------------- | ------------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `visitBlockStatement(BlockStatement)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `visitConstantExpression(ConstantExpression)` (`org.codenarc.rule.convention.LongLiteralWithLowerCaseLAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Caller                     | Location                                          |
| ------: | ---------: | ------------: | ----------: | ------: | -------------------------- | ------------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.ConstantExpression` |

##### `visitClassExpression(ClassExpression)` (`org.codenarc.rule.ClassReferenceAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Caller                     | Location                                       |
| ------: | ---------: | ------------: | ----------: | ------: | -------------------------- | ---------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.ClassExpression` |

##### `<init>()` (`org.codenarc.rule.AbstractMethodVisitor`)

|  Change |      Delta |             % |        Size | Samples | Caller     | Location                                                   |
| ------: | ---------: | ------------: | ----------: | ------: | ---------- | ---------------------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `<init>()` | `org.codenarc.rule.basic.EmptyStaticInitializerAstVisitor` |

##### `createAggregateMetricResult(Collection, Integer, Map)` (`org.gmetrics.result.MetricResultBuilder`)

|  Change |      Delta |             % |        Size | Samples | Caller                                             | Location                                  |
| ------: | ---------: | ------------: | ----------: | ------: | -------------------------------------------------- | ----------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `createAggregateMetricResult(Collection, Integer)` | `org.gmetrics.result.MetricResultBuilder` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

| Change |      Delta |      % |          Size | Samples | Caller                                  | Location                                             |
| -----: | ---------: | -----: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
| -50.0% | -1.999 MiB | 100.0% | 4 MiB → 2 MiB |   2 → 1 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001101c00` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryModOneAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Caller                     | Location                                        |
| ------: | ---------: | ------------: | ----------: | ------: | -------------------------- | ----------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.BinaryExpression` |

##### `<init>()` (`org.gmetrics.metric.AbstractMetric`)

|  Change |      Delta |             % |        Size | Samples | Caller     | Location                                   |
| ------: | ---------: | ------------: | ----------: | ------: | ---------- | ------------------------------------------ |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `<init>()` | `org.gmetrics.metric.AbstractMethodMetric` |

##### `visitMethodEx(MethodNode)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Caller                    | Location                               |
| ------: | ---------: | ------------: | ----------: | ------: | ------------------------- | -------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `visitMethod(MethodNode)` | `org.codenarc.rule.AbstractAstVisitor` |

### Total size

#### Regressions

Functions with the largest increase in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Standard library

|     Change |        Delta |             % |                Size |       Samples | Function                                 | Location                                            |
| ---------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------- | --------------------------------------------------- |
| +169704.4% |   +4.531 GiB | <0.1% → 38.6% | 2.73 MiB → 4.53 GiB |     2 → 2,343 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700138d800` |
|   +7232.6% |   +3.269 GiB |  0.4% → 28.2% | 46.3 MiB → 3.31 GiB |    24 → 1,721 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070013d3800` |
|  +18956.6% |   +2.922 GiB |  0.1% → 25.0% | 15.8 MiB → 2.94 GiB |    13 → 1,530 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001140c00` |
|    +886.1% |   +2.816 GiB |  2.7% → 26.7% |  325 MiB → 3.13 GiB |   141 → 1,695 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001141000` |
|  +34350.7% |   +2.682 GiB |  0.1% → 22.9% |    8 MiB → 2.69 GiB |     4 → 1,351 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700182b000` |
|    +796.0% |   +2.336 GiB |  2.5% → 22.4% |  301 MiB → 2.63 GiB |   156 → 1,364 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070013dd400` |
|   +3827.8% |   +1.193 GiB |  0.3% → 10.4% | 31.9 MiB → 1.23 GiB |      17 → 667 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070012c5400` |
|  +25952.2% |   +1.127 GiB |  <0.1% → 9.6% | 4.45 MiB → 1.13 GiB |       4 → 592 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070012d8400` |
|  +38558.2% |  +975.58 MiB |  <0.1% → 8.1% |  2.53 MiB → 978 MiB |       3 → 506 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001150800` |
|  +37396.5% | +747.564 MiB |  <0.1% → 6.2% |     2 MiB → 750 MiB |       1 → 371 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001830400` |
|   +1200.0% | +719.626 MiB |   0.5% → 6.5% |    60 MiB → 780 MiB |      28 → 388 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700160b400` |
|   +5840.0% | +583.708 MiB |   0.1% → 4.9% |    10 MiB → 594 MiB |       5 → 295 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001608800` |
|    +812.2% |  +478.52 MiB |   0.5% → 4.5% |  58.9 MiB → 537 MiB |      31 → 274 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070012c6400` |
|   +6401.8% | +469.705 MiB |   0.1% → 4.0% |  7.34 MiB → 477 MiB |       5 → 242 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700138c400` |
|      +9.5% | +441.638 MiB | 38.1% → 42.3% | 4.54 GiB → 4.97 GiB | 2,328 → 2,563 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001142000` |
|   +1366.3% | +423.518 MiB |   0.3% → 3.8% |    31 MiB → 455 MiB |      15 → 231 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070013ddc00` |
|        new | +413.794 MiB |   0.0% → 3.4% |       0 B → 414 MiB |       0 → 144 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700197d000` |
|        new | +409.796 MiB |   0.0% → 3.4% |       0 B → 410 MiB |       0 → 142 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700197d400` |
|  +10421.1% | +400.252 MiB |  <0.1% → 3.4% |  3.84 MiB → 404 MiB |       4 → 202 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001133400` |
|  +20000.0% | +399.801 MiB |  <0.1% → 3.3% |     2 MiB → 402 MiB |       1 → 138 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700197f400` |

##### Ours

|  Change |       Delta |            % |                Size |   Samples | Function                                                  | Location                                                                                           |
| ------: | ----------: | -----------: | ------------------: | --------: | --------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
|  +28.7% | +91.953 MiB |  2.6% → 3.4% |   320 MiB → 412 MiB | 140 → 143 | `getNumberOfViolationsWithPriority(int, boolean)`         | `org.codenarc.results.FileResults`                                                                 |
|  +28.7% | +91.953 MiB |  2.6% → 3.4% |   320 MiB → 412 MiB | 140 → 143 | `getNumberOfViolationsWithPriority(int)`                  | `org.codenarc.results.FileResults`                                                                 |
|  +28.9% | +91.953 MiB |  2.6% → 3.4% |   318 MiB → 410 MiB | 139 → 142 | `doCall(Object)`                                          | `org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`                     |
| +110.8% | +81.961 MiB |  0.6% → 1.3% |    74 MiB → 156 MiB |   37 → 55 | `doCall(Object)`                                          | `org.codenarc.report.TextReportWriter$_writeFileViolations_closure5`                               |
|  +29.0% |  +57.97 MiB |  1.6% → 2.1% |   200 MiB → 258 MiB |  78 → 102 | `writeFileViolations(Writer, FileResults)`                | `org.codenarc.report.TextReportWriter`                                                             |
|  +38.3% |  +35.98 MiB |  0.8% → 1.1% |    94 MiB → 130 MiB |   47 → 61 | `doCall(Object)`                                          | `org.codenarc.report.TextReportWriter$_writeFileViolations_closure6`                               |
|   +3.5% | +33.046 MiB |  7.6% → 8.0% |   932 MiB → 965 MiB | 480 → 497 | `init()`                                                  | `org.codenarc.source.AbstractSourceCode`                                                           |
|  +34.1% | +29.983 MiB |  0.7% → 1.0% |    88 MiB → 118 MiB |   44 → 55 | `writeViolation(Writer, Violation, String)`               | `org.codenarc.report.TextReportWriter`                                                             |
|  +13.0% | +25.986 MiB |  1.6% → 1.9% |   200 MiB → 226 MiB | 100 → 112 | `doCall(Object)`                                          | `org.codenarc.results.DirectoryResults$_getNumberOfViolationsWithPriority_closure3`                |
|  +54.0% | +22.077 MiB |  0.3% → 0.5% |   40.9 MiB → 63 MiB |   22 → 31 | `eachImportLine(SourceCode, Closure)`                     | `org.codenarc.rule.imports.AbstractImportRule`                                                     |
|  +46.1% | +19.383 MiB |  0.3% → 0.5% |   42 MiB → 61.4 MiB |   22 → 31 | `isCollectMethodCall(Expression)`                         | `org.codenarc.rule.groovyism.UseCollectNestedAstVisitor`                                           |
|  +42.9% | +17.991 MiB |  0.3% → 0.5% |     42 MiB → 60 MiB |   21 → 29 | `doCall(Object)`                                          | `org.codenarc.plugin.disablerules.DisableRulesInCommentsPlugin$_processViolationsForFile_closure1` |
| +110.4% | +17.662 MiB |  0.1% → 0.3% |   16 MiB → 33.7 MiB |    8 → 15 | `visitMethodCallExpression(MethodCallExpression)`         | `org.codenarc.rule.unnecessary.UnnecessaryGetterAstVisitor`                                        |
|  +49.5% |  +16.78 MiB |  0.3% → 0.4% | 33.9 MiB → 50.7 MiB |   17 → 26 | `doCall(Object)`                                          | `org.codenarc.util.WildcardPattern$_closure1`                                                      |
| +116.9% | +16.358 MiB |  0.1% → 0.3% |   14 MiB → 30.4 MiB |    7 → 16 | `visitBinaryExpression(BinaryExpression)`                 | `org.codenarc.rule.convention.ParameterReassignmentAstVisitor`                                     |
|  +40.0% | +15.992 MiB |  0.3% → 0.5% |     40 MiB → 56 MiB |   20 → 27 | `isViolationDisabled(LookupTable, Violation)`             | `org.codenarc.plugin.disablerules.DisableRulesInCommentsPlugin`                                    |
|  +22.7% | +15.957 MiB |  0.6% → 0.7% | 70.3 MiB → 86.3 MiB |   51 → 54 | `getAstVisitor()`                                         | `org.codenarc.rule.AbstractAstVisitorRule`                                                         |
|  +83.9% | +15.086 MiB |  0.1% → 0.3% |   18 MiB → 33.1 MiB |    9 → 16 | `visitBinaryExpression(BinaryExpression)`                 | `org.codenarc.rule.design.InstanceofAstVisitor`                                                    |
| +250.5% |  +15.02 MiB | <0.1% → 0.2% |      6 MiB → 21 MiB |    3 → 11 | `super$2$visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                                           |
| +119.2% | +14.301 MiB |  0.1% → 0.2% |   12 MiB → 26.3 MiB |    6 → 13 | `super$3$visitConstructorOrMethod(MethodNode, boolean)`   | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                                           |

#### Improvements

Functions with the largest decrease in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Standard library

|  Change |        Delta |             % |                Size |       Samples | Function                                 | Location                                            |
| ------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------- | --------------------------------------------------- |
|  -98.9% |   -4.528 GiB |  38.4% → 0.4% | 4.58 GiB → 50.1 MiB |    2,353 → 28 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700118e400` |
| -100.0% |   -3.362 GiB | 28.2% → <0.1% |  3.36 GiB → 551 KiB |     1,768 → 1 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001412c00` |
|  -99.9% |   -2.896 GiB | 24.3% → <0.1% |  2.9 GiB → 3.96 MiB |     1,530 → 6 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001005800` |
|  -98.6% |   -2.729 GiB |  23.2% → 0.3% |   2.77 GiB → 40 MiB |    1,384 → 18 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001828400` |
|  -83.1% |   -2.713 GiB |  27.4% → 4.7% |  3.27 GiB → 565 MiB |   1,781 → 296 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001145c00` |
|  -99.9% |   -2.591 GiB | 21.7% → <0.1% | 2.59 GiB → 1.48 MiB |     1,362 → 1 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001429000` |
|  -96.9% |   -1.074 GiB |   9.3% → 0.3% | 1.11 GiB → 35.5 MiB |      583 → 20 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001179400` |
|  -99.9% |    -1.06 GiB |  8.9% → <0.1% | 1.06 GiB → 1.48 MiB |       535 → 1 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070013d0800` |
|  -99.8% | -985.329 MiB |  8.1% → <0.1% |  987 MiB → 1.95 MiB |       511 → 4 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700115e000` |
|  -99.8% | -847.711 MiB |  7.0% → <0.1% |     850 MiB → 2 MiB |       417 → 1 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700147b000` |
|  -99.2% | -707.565 MiB |  5.8% → <0.1% |     714 MiB → 6 MiB |       355 → 3 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001799000` |
|  -97.6% |  -637.65 MiB |   5.4% → 0.1% |    654 MiB → 16 MiB |       321 → 8 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700150e400` |
|  -10.1% | -525.626 MiB | 42.5% → 38.7% | 5.06 GiB → 4.55 GiB | 2,595 → 2,343 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070012ac800` |
|  -99.8% | -457.167 MiB |  3.8% → <0.1% |   458 MiB → 1.1 MiB |       231 → 1 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700140bc00` |
|  -90.8% | -402.643 MiB |   3.6% → 0.3% |  443 MiB → 40.7 MiB |      228 → 25 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700115c800` |
|  -98.5% |  -327.49 MiB |  2.7% → <0.1% |  332 MiB → 4.83 MiB |       171 → 4 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001185000` |
|  -99.4% | -319.841 MiB |  2.6% → <0.1% |     322 MiB → 2 MiB |       141 → 1 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001804c00` |
|  -99.4% | -313.844 MiB |  2.6% → <0.1% |     316 MiB → 2 MiB |       138 → 1 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001699800` |
|  -54.0% | -308.081 MiB |   4.7% → 2.2% |   571 MiB → 263 MiB |     299 → 140 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001133000` |
|  -99.4% | -307.847 MiB |  2.5% → <0.1% |     310 MiB → 2 MiB |       135 → 1 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700168e800` |

##### Ours

| Change |        Delta |             % |                Size |       Samples | Function                                         | Location                                                                    |
| -----: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------ | --------------------------------------------------------------------------- |
|  -6.3% | -150.286 MiB | 19.6% → 18.6% | 2.34 GiB → 2.19 GiB | 1,216 → 1,139 | `visitClass(ClassNode)`                          | `org.codenarc.rule.AbstractAstVisitor`                                      |
|  -5.4% | -144.587 MiB | 21.9% → 21.0% | 2.61 GiB → 2.47 GiB | 1,374 → 1,295 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
|  -5.2% | -105.774 MiB | 16.6% → 15.9% | 1.98 GiB → 1.87 GiB |   1,028 → 971 | `visitMethod(MethodNode)`                        | `org.codenarc.rule.AbstractAstVisitor`                                      |
|  -2.5% | -105.704 MiB | 34.1% → 33.8% | 4.07 GiB → 3.97 GiB | 2,091 → 2,047 | `collectViolations(SourceCode, RuleSet)`         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|  -2.8% |  -99.257 MiB | 28.8% → 28.4% | 3.44 GiB → 3.34 GiB | 1,778 → 1,726 | `processFile(String, DirectoryResults, RuleSet)` | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| -73.0% |  -91.953 MiB |   1.0% → 0.3% |    126 MiB → 34 MiB |       19 → 17 | `doCall(Object)`                                 | `org.codenarc.report.TextReportWriter$_writePackageViolations_closure2`     |
| -97.8% |  -89.954 MiB |  0.8% → <0.1% |      92 MiB → 2 MiB |         2 → 1 | `writePackageViolations(Writer, Results)`        | `org.codenarc.report.TextReportWriter`                                      |
|  -2.5% |   -69.15 MiB | 22.3% → 22.0% | 2.66 GiB → 2.59 GiB | 1,408 → 1,356 | `applyTo(SourceCode)`                            | `org.codenarc.rule.AbstractRule`                                            |
|  -8.2% |  -65.664 MiB |   6.5% → 6.1% |   800 MiB → 734 MiB |     405 → 376 | `doCall(Object)`                                 | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
| -55.3% |  -41.978 MiB |   0.6% → 0.3% |     76 MiB → 34 MiB |       16 → 17 | `doCall(Object)`                                 | `org.codenarc.report.TextReportWriter$_writeFileViolations_closure4`        |
| -23.6% |  -40.147 MiB |   1.4% → 1.1% |   170 MiB → 130 MiB |       77 → 68 | `visitClassEx(ClassNode)`                        | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`         |
|  -1.1% |   -38.97 MiB | 29.2% → 29.3% | 3.48 GiB → 3.44 GiB | 1,840 → 1,795 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
| -56.6% |  -34.807 MiB |   0.5% → 0.2% | 61.5 MiB → 26.7 MiB |       35 → 14 | `visitConstructorOrMethod(MethodNode, boolean)`  | `org.codenarc.rule.ClassReferenceAstVisitor`                                |
| -28.7% |  -32.284 MiB |   0.9% → 0.7% |  113 MiB → 80.3 MiB |       56 → 41 | `super$3$applyTo(SourceCode, List)`              | `org.codenarc.rule.formatting.IndentationRule`                              |
|  -7.7% |  -31.795 MiB |   3.4% → 3.1% |   410 MiB → 378 MiB |     204 → 191 | `addViolationIfDuplicate(Expression)`            | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                          |
| -10.7% |  -31.065 MiB |   2.4% → 2.1% |   289 MiB → 258 MiB |     137 → 130 | `checkDeclaration(ASTNode, String, String)`      | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`         |
| -10.3% |  -30.754 MiB |   2.4% → 2.2% |   298 MiB → 268 MiB |     150 → 136 | `visitBinaryExpression(BinaryExpression)`        | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                          |
|  -6.7% |  -27.797 MiB |   3.4% → 3.2% |   412 MiB → 384 MiB |     205 → 194 | `addViolationIfDuplicate(Expression, boolean)`   | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                          |
| -31.3% |  -27.337 MiB |   0.7% → 0.5% |   87.3 MiB → 60 MiB |       42 → 30 | `visitBlockStatement(BlockStatement)`            | `org.codenarc.rule.formatting.IndentationAstVisitor`                        |
| -68.1% |  -25.611 MiB |   0.3% → 0.1% |   37.6 MiB → 12 MiB |        21 → 6 | `checkType(String, ASTNode)`                     | `org.codenarc.rule.ClassReferenceAstVisitor`                                |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700138d800`)

|  Change |        Delta |            % |           Size |   Samples | Callee                                                     | Location                                            |
| ------: | -----------: | -----------: | -------------: | --------: | ---------------------------------------------------------- | --------------------------------------------------- |
|     new |   +4.527 GiB | 0.0% → 99.9% | 0 B → 4.53 GiB | 0 → 2,340 | `reinvoke(Object, Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700118d000` |
|     new |   +5.996 MiB |  0.0% → 0.1% |    0 B → 6 MiB |     0 → 3 | `invoke(Object, Object, Object, Object)`                   | `java.lang.invoke.LambdaForm$MH.0x000000700118dc00` |
| removed |   -1.999 MiB | 73.1% → 0.0% |    2 MiB → 0 B |     1 → 0 | `delegate(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |   +1.999 MiB | 0.0% → <0.1% |    0 B → 2 MiB |     0 → 1 | `delegate(Object, Object, Object, Object)`                 | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed | -752.726 KiB | 26.9% → 0.0% |  753 KiB → 0 B |     1 → 0 | `reinvoke(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c8012ce000` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070013d3800`)

|  Change |       Delta |             % |           Size |   Samples | Callee                                  | Location                                     |
| ------: | ----------: | ------------: | -------------: | --------: | --------------------------------------- | -------------------------------------------- |
|     new |  +3.314 GiB | 0.0% → 100.0% | 0 B → 3.31 GiB | 0 → 1,721 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |
| removed | -46.285 MiB | 100.0% → 0.0% | 46.3 MiB → 0 B |    24 → 0 | `invokeStatic(Object, Object)`          | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001140c00`)

|  Change |       Delta |            % |           Size |   Samples | Callee                                   | Location                                             |
| ------: | ----------: | -----------: | -------------: | --------: | ---------------------------------------- | ---------------------------------------------------- |
|     new |  +2.928 GiB | 0.0% → 99.7% | 0 B → 2.93 GiB | 0 → 1,525 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700113fc00`  |
| removed | -13.174 MiB | 83.4% → 0.0% | 13.2 MiB → 0 B |    11 → 0 | `invokeVirtual(Object, Object, Object)`  | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |  +9.995 MiB |  0.0% → 0.3% |   0 B → 10 MiB |     0 → 5 | `collector(Object, Object)`              | `java.lang.invoke.LambdaForm$MH.0x000000700109c000`  |
| removed |  -2.612 MiB | 16.6% → 0.0% | 2.61 MiB → 0 B |     2 → 0 | `invokeSpecial(Object, Object, Object)`  | `java.lang.invoke.LambdaForm$DMH.0x000000c801001000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001141000`)

|   Change |       Delta |             % |                Size |    Samples | Callee                             | Location                                            |
| -------: | ----------: | ------------: | ------------------: | ---------: | ---------------------------------- | --------------------------------------------------- |
| +4128.6% |  +2.762 GiB | 21.1% → 90.3% | 68.5 MiB → 2.83 GiB | 55 → 1,509 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001118000` |
|   +28.9% | +73.625 MiB | 78.3% → 10.2% |   255 MiB → 329 MiB |   85 → 195 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|      new |  +7.996 MiB |   0.0% → 0.2% |         0 B → 8 MiB |      0 → 4 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000007001118800` |
|  removed |  -1.999 MiB |   0.6% → 0.0% |         2 MiB → 0 B |      1 → 0 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000c801118800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700182b000`)

|  Change |      Delta |             % |           Size |   Samples | Callee                                                  | Location                                            |
| ------: | ---------: | ------------: | -------------: | --------: | ------------------------------------------------------- | --------------------------------------------------- |
|     new |  +2.69 GiB | 0.0% → 100.0% | 0 B → 2.69 GiB | 0 → 1,351 | `delegate(Object, Object, Object, Object)`              | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed | -7.995 MiB | 100.0% → 0.0% |    8 MiB → 0 B |     4 → 0 | `delegate(Object, Object, Object, Object, Object, int)` | `java.lang.invoke.LambdaForm$MH.0x000000c8013c2000` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070013dd400`)

|  Change |        Delta |             % |           Size |   Samples | Callee                                                                                      | Location                                             |
| ------: | -----------: | ------------: | -------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |    +2.63 GiB | 0.0% → 100.0% | 0 B → 2.63 GiB | 0 → 1,364 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010b2800` |
| removed | -238.231 MiB |  79.2% → 0.0% |  238 MiB → 0 B |   124 → 0 | `invokeSpecial(Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$DMH.0x000000c801004800` |
| removed |  -58.407 MiB |  19.4% → 0.0% | 58.4 MiB → 0 B |    30 → 0 | `invokeVirtual(Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$DMH.0x000000c801101c00` |
| removed |   -3.998 MiB |   1.3% → 0.0% |    4 MiB → 0 B |     2 → 0 | `invokeInterface(Object, Object, Object)`                                                   | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070012c5400`)

|  Change |        Delta |              % |               Size |  Samples | Callee                                     | Location                                            |
| ------: | -----------: | -------------: | -----------------: | -------: | ------------------------------------------ | --------------------------------------------------- |
|     new | +961.771 MiB |   0.0% → 76.7% |      0 B → 962 MiB |  0 → 473 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| +816.6% | +260.829 MiB | 100.0% → 23.3% | 31.9 MiB → 293 MiB | 17 → 194 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700118d000` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070012d8400`)

|  Change |      Delta |             % |           Size | Samples | Callee                                  | Location                                             |
| ------: | ---------: | ------------: | -------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
|     new | +1.124 GiB |  0.0% → 99.3% | 0 B → 1.12 GiB | 0 → 588 | `invokeVirtual(Object, Object, int)`    | `java.lang.invoke.LambdaForm$DMH.0x0000007001152800` |
|     new | +7.996 MiB |   0.0% → 0.7% |    0 B → 8 MiB |   0 → 4 | `invokeSpecial(Object, Object, int)`    | `java.lang.invoke.LambdaForm$DMH.0x00000070013ea400` |
| removed | -4.448 MiB | 100.0% → 0.0% | 4.45 MiB → 0 B |   4 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001150800`)

|  Change |       Delta |             % |           Size | Samples | Callee                                            | Location                                             |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------------------------- | ---------------------------------------------------- |
|     new | +978.11 MiB | 0.0% → 100.0% |  0 B → 978 MiB | 0 → 506 | `invokeSpecial(Object, Object)`                   | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |   -2.53 MiB | 100.0% → 0.0% | 2.53 MiB → 0 B |   3 → 0 | `invokeInterface(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000c801100000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001830400`)

|  Change |        Delta |             % |          Size | Samples | Callee                             | Location                                            |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------- | --------------------------------------------------- |
|     new | +749.563 MiB | 0.0% → 100.0% | 0 B → 750 MiB | 0 → 371 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |   -1.999 MiB | 100.0% → 0.0% |   2 MiB → 0 B |   1 → 0 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000c801118800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700160b400`)

|  Change |        Delta |             % |          Size | Samples | Callee                                             | Location                                         |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------------------------------- | ------------------------------------------------ |
|     new | +779.597 MiB | 0.0% → 100.0% | 0 B → 780 MiB | 0 → 388 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
| removed |   -59.97 MiB | 100.0% → 0.0% |  60 MiB → 0 B |  28 → 0 | `delegate(Object, Object, Object)`                 | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001608800`)

|  Change |        Delta |             % |          Size | Samples | Callee                                  | Location                                     |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------------- | -------------------------------------------- |
|     new | +593.703 MiB | 0.0% → 100.0% | 0 B → 594 MiB | 0 → 295 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |
| removed |   -9.995 MiB | 100.0% → 0.0% |  10 MiB → 0 B |   5 → 0 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070012c6400`)

|  Change |        Delta |             % |                Size |  Samples | Callee                                     | Location                                            |
| ------: | -----------: | ------------: | ------------------: | -------: | ------------------------------------------ | --------------------------------------------------- |
| +876.7% | +471.035 MiB | 91.2% → 97.6% |  53.7 MiB → 525 MiB | 28 → 267 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700118d000` |
| +105.8% |   +5.486 MiB |   8.8% → 2.0% | 5.18 MiB → 10.7 MiB |    3 → 6 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |   +3.998 MiB |   0.0% → 0.7% |         0 B → 4 MiB |    0 → 2 | `invoke(Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000700118dc00` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700138c400`)

|  Change |        Delta |            % |           Size | Samples | Callee                                                                                      | Location                                             |
| ------: | -----------: | -----------: | -------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new | +475.043 MiB | 0.0% → 99.6% |  0 B → 475 MiB | 0 → 241 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010b2800` |
| removed |   -6.392 MiB | 87.1% → 0.0% | 6.39 MiB → 0 B |   4 → 0 | `invokeVirtual(Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$DMH.0x000000c801101c00` |
|     new |   +1.999 MiB |  0.0% → 0.4% |    0 B → 2 MiB |   0 → 1 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x0000007001114c00`  |
| removed | -966.781 KiB | 12.9% → 0.0% |  967 KiB → 0 B |   1 → 0 | `invokeSpecial(Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$DMH.0x000000c801004800` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001142000`)

|  Change |       Delta |            % |           Size |   Samples | Callee                                                                                      | Location                                             |
| ------: | ----------: | -----------: | -------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |   +4.96 GiB | 0.0% → 99.8% | 0 B → 4.96 GiB | 0 → 2,556 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010b2800` |
| removed |  -4.465 GiB | 98.3% → 0.0% | 4.47 GiB → 0 B | 2,298 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000c80138c800` |
| removed | -77.145 MiB |  1.7% → 0.0% | 77.1 MiB → 0 B |    29 → 0 | `invokeSpecial(Object, Object, Object, Object)`                                             | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new | +18.491 MiB |  0.0% → 0.4% | 0 B → 18.5 MiB |    0 → 10 | `collector(Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x0000007001140000`  |
| removed |  -1.086 MiB | <0.1% → 0.0% | 1.09 MiB → 0 B |     1 → 0 | `invokeInterface(Object, Object, Object, Object)`                                           | `java.lang.invoke.LambdaForm$DMH.0x000000c8012ac400` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070013ddc00`)

|  Change |        Delta |            % |          Size | Samples | Callee                                                                                      | Location                                             |
| ------: | -----------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new | +452.517 MiB | 0.0% → 99.6% | 0 B → 453 MiB | 0 → 230 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010b2800` |
| removed |  -15.992 MiB | 51.6% → 0.0% |  16 MiB → 0 B |   8 → 0 | `invokeStatic(Object, Object, Object)`                                                      | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |  -15.006 MiB | 48.4% → 0.0% |  15 MiB → 0 B |   7 → 0 | `newInvokeSpecial(Object, Object, Object)`                                                  | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |   +1.999 MiB |  0.0% → 0.4% |   0 B → 2 MiB |   0 → 1 | `collector(Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x0000007001140000`  |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700197d000`)

| Change |        Delta |             % |          Size | Samples | Callee                               | Location                                             |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------ | ---------------------------------------------------- |
|    new | +413.794 MiB | 0.0% → 100.0% | 0 B → 414 MiB | 0 → 144 | `invokeVirtual(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000700197c400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700197d400`)

| Change |        Delta |             % |          Size | Samples | Callee                                  | Location                                     |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------- | -------------------------------------------- |
|    new | +409.796 MiB | 0.0% → 100.0% | 0 B → 410 MiB | 0 → 142 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001133400`)

|    Change |       Delta |             % |                Size | Samples | Callee                                    | Location                                             |
| --------: | ----------: | ------------: | ------------------: | ------: | ----------------------------------------- | ---------------------------------------------------- |
| +18262.5% |  +364.9 MiB | 52.0% → 90.8% |     2 MiB → 367 MiB | 1 → 182 | `invokeSpecial(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001001000` |
|       new | +21.981 MiB |   0.0% → 5.4% |        0 B → 22 MiB |  0 → 11 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001170c00` |
|   +725.6% | +13.371 MiB |  48.0% → 3.8% | 1.84 MiB → 15.2 MiB |   3 → 9 | `invokeVirtual(Object, Object, Object)`   | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700197f400`)

|  Change |      Delta |             % |          Size | Samples | Callee                                  | Location                                         |
| ------: | ---------: | ------------: | ------------: | ------: | --------------------------------------- | ------------------------------------------------ |
|     new | +401.8 MiB | 0.0% → 100.0% | 0 B → 402 MiB | 0 → 138 | `delegate(Object, Object, int, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
| removed | -1.999 MiB | 100.0% → 0.0% |   2 MiB → 0 B |   1 → 0 | `delegate(Object, Object, Object)`      | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `getNumberOfViolationsWithPriority(int, boolean)` (`org.codenarc.results.FileResults`)

| Change |       Delta |      % |              Size |   Samples | Callee                                        | Location                                            |
| -----: | ----------: | -----: | ----------------: | --------: | --------------------------------------------- | --------------------------------------------------- |
| +28.7% | +91.953 MiB | 100.0% | 320 MiB → 412 MiB | 140 → 143 | `linkToCallSite(Object, int, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001449c00` |

##### `getNumberOfViolationsWithPriority(int)` (`org.codenarc.results.FileResults`)

| Change |       Delta |      % |              Size |   Samples | Callee                                            | Location                           |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------------------------- | ---------------------------------- |
| +28.7% | +91.953 MiB | 100.0% | 320 MiB → 412 MiB | 140 → 143 | `getNumberOfViolationsWithPriority(int, boolean)` | `org.codenarc.results.FileResults` |

##### `doCall(Object)` (`org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`)

| Change |       Delta |      % |              Size |   Samples | Callee                           | Location                           |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------------- | ---------------------------------- |
| +28.9% | +91.953 MiB | 100.0% | 318 MiB → 410 MiB | 139 → 142 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.report.TextReportWriter$_writeFileViolations_closure5`)

|  Change |       Delta |      % |             Size | Samples | Callee                           | Location                           |
| ------: | ----------: | -----: | ---------------: | ------: | -------------------------------- | ---------------------------------- |
| +110.8% | +81.961 MiB | 100.0% | 74 MiB → 156 MiB | 37 → 55 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `writeFileViolations(Writer, FileResults)` (`org.codenarc.report.TextReportWriter`)

|  Change |       Delta |              % |              Size |  Samples | Callee                                                           | Location                               |
| ------: | ----------: | -------------: | ----------------: | -------: | ---------------------------------------------------------------- | -------------------------------------- |
|  +30.3% | +59.969 MiB | 99.0% → 100.0% | 198 MiB → 258 MiB | 77 → 102 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`     |
| removed |  -1.999 MiB |    1.0% → 0.0% |       2 MiB → 0 B |    1 → 0 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `doCall(Object)` (`org.codenarc.report.TextReportWriter$_writeFileViolations_closure6`)

| Change |       Delta |             % |             Size | Samples | Callee                                                   | Location                           |
| -----: | ----------: | ------------: | ---------------: | ------: | -------------------------------------------------------- | ---------------------------------- |
| +37.8% | +33.981 MiB | 95.7% → 95.4% | 90 MiB → 124 MiB | 45 → 58 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| +50.0% |  +1.999 MiB |   4.3% → 4.6% |    4 MiB → 6 MiB |   2 → 3 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|  Change |       Delta |             % |                Size |   Samples | Callee                                                           | Location                           |
| ------: | ----------: | ------------: | ------------------: | --------: | ---------------------------------------------------------------- | ---------------------------------- |
|   +2.7% | +23.947 MiB | 96.7% → 95.8% |   900 MiB → 924 MiB | 463 → 475 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
| +127.7% | +12.497 MiB |   1.1% → 2.3% | 9.79 MiB → 22.3 MiB |    6 → 13 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| removed |  -1.999 MiB |   0.2% → 0.0% |         2 MiB → 0 B |     1 → 0 | `linkToCallSite(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |
|   -7.2% |  -1.399 MiB |   2.1% → 1.9% |   19.4 MiB → 18 MiB |    10 → 9 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder` |

##### `writeViolation(Writer, Violation, String)` (`org.codenarc.report.TextReportWriter`)

|   Change |       Delta |             % |            Size | Samples | Callee                                           | Location                                            |
| -------: | ----------: | ------------: | --------------: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| +1000.0% |  +19.99 MiB |  2.3% → 18.6% |  2 MiB → 22 MiB |   1 → 7 | `<init>(Object[], String[])`                     | `org.codehaus.groovy.runtime.GStringImpl`           |
|   +45.0% | +17.988 MiB | 45.5% → 49.2% | 40 MiB → 58 MiB | 20 → 29 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                  |
|   -53.3% |  -15.99 MiB | 34.1% → 11.9% | 30 MiB → 14 MiB |  15 → 7 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
|   -66.7% |  -7.996 MiB |  13.6% → 3.4% |  12 MiB → 4 MiB |   6 → 2 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|   +50.0% |  +1.999 MiB |   4.5% → 5.1% |   4 MiB → 6 MiB |   2 → 3 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001134800` |

##### `doCall(Object)` (`org.codenarc.results.DirectoryResults$_getNumberOfViolationsWithPriority_closure3`)

| Change |       Delta |           % |              Size |   Samples | Callee                                   | Location                           |
| -----: | ----------: | ----------: | ----------------: | --------: | ---------------------------------------- | ---------------------------------- |
| +13.0% | +25.986 MiB |      100.0% | 200 MiB → 226 MiB | 100 → 112 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|    new |  +1.999 MiB | 0.0% → 0.9% |       0 B → 2 MiB |     0 → 1 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `eachImportLine(SourceCode, Closure)` (`org.codenarc.rule.imports.AbstractImportRule`)

|  Change |       Delta |             % |              Size | Samples | Callee                                           | Location                           |
| ------: | ----------: | ------------: | ----------------: | ------: | ------------------------------------------------ | ---------------------------------- |
|  +57.5% | +20.078 MiB | 85.3% → 87.3% | 34.9 MiB → 55 MiB | 19 → 28 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| +200.0% |  +3.998 MiB |   4.9% → 9.5% |     2 MiB → 6 MiB |   1 → 2 | `linkToCallSite(Object, int, Object)`            | `java.lang.invoke.Invokers$Holder` |
|     new |  +1.999 MiB |   0.0% → 3.2% |       0 B → 2 MiB |   0 → 1 | `linkToCallSite(int, int, Object)`               | `java.lang.invoke.Invokers$Holder` |
| removed |  -1.999 MiB |   4.9% → 0.0% |       2 MiB → 0 B |   1 → 0 | `linkToCallSite(int, Object)`                    | `java.lang.invoke.Invokers$Holder` |
| removed |  -1.999 MiB |   4.9% → 0.0% |       2 MiB → 0 B |   1 → 0 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `isCollectMethodCall(Expression)` (`org.codenarc.rule.groovyism.UseCollectNestedAstVisitor`)

| Change |       Delta |      % |              Size | Samples | Callee                                                   | Location                           |
| -----: | ----------: | -----: | ----------------: | ------: | -------------------------------------------------------- | ---------------------------------- |
| +46.1% | +19.383 MiB | 100.0% | 42 MiB → 61.4 MiB | 22 → 31 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.plugin.disablerules.DisableRulesInCommentsPlugin$_processViolationsForFile_closure1`)

| Change |       Delta |              % |            Size | Samples | Callee                                           | Location                           |
| -----: | ----------: | -------------: | --------------: | ------: | ------------------------------------------------ | ---------------------------------- |
| +38.1% | +15.992 MiB | 100.0% → 96.7% | 42 MiB → 58 MiB | 21 → 28 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|    new |  +1.999 MiB |    0.0% → 3.3% |     0 B → 2 MiB |   0 → 1 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryGetterAstVisitor`)

|  Change |       Delta |             % |              Size | Samples | Callee                                                        | Location                                            |
| ------: | ----------: | ------------: | ----------------: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
|  +97.7% | +13.664 MiB | 87.5% → 82.2% | 14 MiB → 27.7 MiB |  7 → 12 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |
| +150.0% |  +5.997 MiB | 25.0% → 29.7% |    4 MiB → 10 MiB |   2 → 4 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
| +200.0% |  +3.998 MiB | 12.5% → 17.8% |     2 MiB → 6 MiB |   1 → 3 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x0000007001134800` |

##### `doCall(Object)` (`org.codenarc.util.WildcardPattern$_closure1`)

| Change |       Delta |             % |                Size | Samples | Callee                                   | Location                                            |
| -----: | ----------: | ------------: | ------------------: | ------: | ---------------------------------------- | --------------------------------------------------- |
| +40.0% | +12.785 MiB | 94.1% → 88.2% | 31.9 MiB → 44.7 MiB | 16 → 23 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|    new |  +3.995 MiB |   0.0% → 7.9% |         0 B → 4 MiB |   0 → 2 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001134800` |
|    ~0% |       -24 B |   5.9% → 3.9% |               2 MiB |       1 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.convention.ParameterReassignmentAstVisitor`)

|  Change |      Delta |              % |              Size | Samples | Callee                                                        | Location                                            |
| ------: | ---------: | -------------: | ----------------: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
| +111.9% | +15.66 MiB | 100.0% → 97.7% | 14 MiB → 29.7 MiB |  7 → 15 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |
|     new | +2.696 MiB |    0.0% → 8.9% |     0 B → 2.7 MiB |   0 → 2 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### `isViolationDisabled(LookupTable, Violation)` (`org.codenarc.plugin.disablerules.DisableRulesInCommentsPlugin`)

| Change |      Delta |             % |            Size | Samples | Callee                                   | Location                           |
| -----: | ---------: | ------------: | --------------: | ------: | ---------------------------------------- | ---------------------------------- |
| +71.4% | +19.99 MiB | 70.0% → 85.7% | 28 MiB → 48 MiB | 14 → 23 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
| -33.3% | -3.998 MiB | 30.0% → 14.3% |  12 MiB → 8 MiB |   6 → 4 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`)

| Change |       Delta |      % |                Size | Samples | Callee          | Location          |
| -----: | ----------: | -----: | ------------------: | ------: | --------------- | ----------------- |
| +22.7% | +15.957 MiB | 100.0% | 70.3 MiB → 86.3 MiB | 51 → 54 | `newInstance()` | `java.lang.Class` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.design.InstanceofAstVisitor`)

|  Change |      Delta |             % |             Size | Samples | Callee                                                        | Location                                            |
| ------: | ---------: | ------------: | ---------------: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
|  +88.7% | +7.093 MiB | 44.4% → 45.6% | 8 MiB → 15.1 MiB |   4 → 8 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                  |
|     new | +3.998 MiB |  0.0% → 12.1% |      0 B → 4 MiB |   0 → 2 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x0000007001134800` |
| +155.0% | +3.098 MiB | 11.1% → 15.4% |  2 MiB → 5.1 MiB |   1 → 3 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|  +50.0% | +1.998 MiB | 22.2% → 18.1% |    4 MiB → 6 MiB |   2 → 3 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |
|  +33.3% | +1.996 MiB | 33.3% → 24.2% | 6 MiB → 7.99 MiB |       3 | `linkToCallSite(Object, Object, int, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001142800` |

##### `super$2$visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`)

|  Change |      Delta |      % |           Size | Samples | Callee                                            | Location                                     |
| ------: | ---------: | -----: | -------------: | ------: | ------------------------------------------------- | -------------------------------------------- |
| +250.5% | +15.02 MiB | 100.0% | 6 MiB → 21 MiB |  3 → 11 | `visitMethodCallExpression(MethodCallExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport` |

##### `super$3$visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`)

|  Change |       Delta |      % |              Size | Samples | Callee                                          | Location                                          |
| ------: | ----------: | -----: | ----------------: | ------: | ----------------------------------------------- | ------------------------------------------------- |
| +119.2% | +14.301 MiB | 100.0% | 12 MiB → 26.3 MiB |  6 → 13 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700118e400`)

|  Change |      Delta |              % |              Size |    Samples | Callee                                     | Location                                            |
| ------: | ---------: | -------------: | ----------------: | ---------: | ------------------------------------------ | --------------------------------------------------- |
|  -99.0% | -4.531 GiB | 100.0% → 89.8% | 4.58 GiB → 45 MiB | 2,352 → 25 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700118d000` |
| removed | -3.998 MiB |    0.1% → 0.0% |       4 MiB → 0 B |      2 → 0 | `invoke(Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000c80118dc00` |
|     new | +3.098 MiB |    0.0% → 6.2% |     0 B → 3.1 MiB |      0 → 2 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new | +1.999 MiB |    0.0% → 4.0% |       0 B → 2 MiB |      0 → 1 | `invoke(Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000700118dc00` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001412c00`)

|  Change |        Delta |             % |           Size |   Samples | Callee                                  | Location                                             |
| ------: | -----------: | ------------: | -------------: | --------: | --------------------------------------- | ---------------------------------------------------- |
| removed |   -3.363 GiB | 100.0% → 0.0% | 3.36 GiB → 0 B | 1,768 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new | +550.773 KiB | 0.0% → 100.0% |  0 B → 551 KiB |     0 → 1 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001101c00` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001005800`)

|  Change |      Delta |             % |           Size |   Samples | Callee                                   | Location                                             |
| ------: | ---------: | ------------: | -------------: | --------: | ---------------------------------------- | ---------------------------------------------------- |
| removed | -2.897 GiB |  99.9% → 0.0% |  2.9 GiB → 0 B | 1,528 → 0 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c80113fc00`  |
|     new |  +3.96 MiB | 0.0% → 100.0% | 0 B → 3.96 MiB |     0 → 6 | `invokeVirtual(Object, Object, Object)`  | `java.lang.invoke.LambdaForm$DMH.0x00000070010bdc00` |
| removed | -2.943 MiB |   0.1% → 0.0% | 2.94 MiB → 0 B |     2 → 0 | `collector(Object, Object)`              | `java.lang.invoke.LambdaForm$MH.0x000000c80109c000`  |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001828400`)

|  Change |      Delta |             % |           Size |   Samples | Callee                                     | Location                                         |
| ------: | ---------: | ------------: | -------------: | --------: | ------------------------------------------ | ------------------------------------------------ |
| removed | -2.768 GiB | 100.0% → 0.0% | 2.77 GiB → 0 B | 1,384 → 0 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
|     new | +39.98 MiB | 0.0% → 100.0% |   0 B → 40 MiB |    0 → 18 | `delegate(Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001145c00`)

|  Change |       Delta |             % |               Size |     Samples | Callee                             | Location                                            |
| ------: | ----------: | ------------: | -----------------: | ----------: | ---------------------------------- | --------------------------------------------------- |
|  -81.3% |  -2.389 GiB | 90.0% → 99.6% | 2.94 GiB → 563 MiB | 1,586 → 293 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001118000` |
|  -99.3% | -341.13 MiB |  10.3% → 0.4% | 344 MiB → 2.41 MiB |     201 → 3 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |  -5.366 MiB |   0.2% → 0.0% |     5.37 MiB → 0 B |       4 → 0 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000c801118800` |
|     new |  +1.999 MiB |   0.0% → 0.4% |        0 B → 2 MiB |       0 → 1 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000007001118800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001429000`)

|  Change |      Delta |             % |           Size |   Samples | Callee                                                                                      | Location                                             |
| ------: | ---------: | ------------: | -------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -2.585 GiB |  99.7% → 0.0% | 2.59 GiB → 0 B | 1,358 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000c8010b2800` |
| removed |  -7.42 MiB |   0.3% → 0.0% | 7.42 MiB → 0 B |     4 → 0 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000c801114c00`  |
|     new | +1.479 MiB | 0.0% → 100.0% | 0 B → 1.48 MiB |     0 → 1 | `invokeSpecial(Object, Object, int)`                                                        | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001179400`)

|  Change |       Delta |             % |           Size | Samples | Callee                               | Location                                             |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------------ | ---------------------------------------------------- |
| removed |  -1.101 GiB |  99.4% → 0.0% |  1.1 GiB → 0 B | 579 → 0 | `invokeVirtual(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000c801152800` |
|     new | +35.524 MiB | 0.0% → 100.0% | 0 B → 35.5 MiB |  0 → 20 | `invokeStatic(Object, Object)`       | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |  -7.347 MiB |   0.6% → 0.0% | 7.35 MiB → 0 B |   4 → 0 | `invokeSpecial(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000c8013e9c00` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070013d0800`)

|  Change |      Delta |             % |           Size | Samples | Callee                                   | Location                                            |
| ------: | ---------: | ------------: | -------------: | ------: | ---------------------------------------- | --------------------------------------------------- |
| removed |  -1.06 GiB |  99.8% → 0.0% | 1.06 GiB → 0 B | 534 → 0 | `reinvoke(Object, Object, Object, long)` | `java.lang.invoke.LambdaForm$MH.0x000000c801396400` |
| removed | -9.995 MiB |   0.9% → 0.0% |   10 MiB → 0 B |   5 → 0 | `invoke(Object, Object, Object, long)`   | `java.lang.invoke.LambdaForm$MH.0x000000c801396c00` |
|     new | +1.479 MiB | 0.0% → 100.0% | 0 B → 1.48 MiB |   0 → 1 | `reinvoke(Object, Object, int)`          | `java.lang.invoke.LambdaForm$MH.0x000000700113d800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700115e000`)

|  Change |        Delta |             % |           Size | Samples | Callee                          | Location                                             |
| ------: | -----------: | ------------: | -------------: | ------: | ------------------------------- | ---------------------------------------------------- |
| removed | -987.281 MiB | 100.0% → 0.0% |  987 MiB → 0 B | 511 → 0 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |   +1.952 MiB | 0.0% → 100.0% | 0 B → 1.95 MiB |   0 → 4 | `invokeVirtual(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001150400` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700147b000`)

|  Change |       Delta |             % |          Size | Samples | Callee                                             | Location                                            |
| ------: | ----------: | ------------: | ------------: | ------: | -------------------------------------------------- | --------------------------------------------------- |
| removed | -849.71 MiB | 100.0% → 0.0% | 850 MiB → 0 B | 417 → 0 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |  +1.999 MiB | 0.0% → 100.0% |   0 B → 2 MiB |   0 → 1 | `invoke(Object, Object, Object)`                   | `java.lang.invoke.LambdaForm$MH.0x0000007001118800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001799000`)

|  Change |        Delta |             % |          Size | Samples | Callee                                     | Location                                         |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------ | ------------------------------------------------ |
| removed | -713.562 MiB | 100.0% → 0.0% | 714 MiB → 0 B | 355 → 0 | `delegate(Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |
|     new |   +5.997 MiB | 0.0% → 100.0% |   0 B → 6 MiB |   0 → 3 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700150e400`)

| Change |       Delta |      % |             Size | Samples | Callee                                  | Location                                     |
| -----: | ----------: | -----: | ---------------: | ------: | --------------------------------------- | -------------------------------------------- |
| -97.6% | -637.65 MiB | 100.0% | 654 MiB → 16 MiB | 321 → 8 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070012ac800`)

|  Change |       Delta |            % |           Size |   Samples | Callee                                                                                      | Location                                             |
| ------: | ----------: | -----------: | -------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -5.052 GiB | 99.8% → 0.0% | 5.05 GiB → 0 B | 2,589 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000c8010b2800` |
|     new |  +4.482 GiB | 0.0% → 98.5% | 0 B → 4.48 GiB | 0 → 2,313 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000700138c800` |
|     new | +68.291 MiB |  0.0% → 1.5% | 0 B → 68.3 MiB |    0 → 29 | `invokeSpecial(Object, Object, Object, Object)`                                             | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed | -27.986 MiB |  0.5% → 0.0% |   28 MiB → 0 B |    14 → 0 | `collector(Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x000000c801140000`  |
|     new |  +1.161 MiB | 0.0% → <0.1% | 0 B → 1.16 MiB |     0 → 1 | `invokeInterface(Object, Object, Object, Object)`                                           | `java.lang.invoke.LambdaForm$DMH.0x00000070012ac400` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700140bc00`)

|  Change |        Delta |             % |          Size | Samples | Callee                                                                                      | Location                                             |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -458.266 MiB | 100.0% → 0.0% | 458 MiB → 0 B | 231 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000c8010b2800` |
|     new |   +1.099 MiB | 0.0% → 100.0% | 0 B → 1.1 MiB |   0 → 1 | `invokeSpecial(Object, Object, int, Object)`                                                | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700115c800`)

|  Change |        Delta |             % |           Size | Samples | Callee                                  | Location                                             |
| ------: | -----------: | ------------: | -------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
| removed | -443.311 MiB | 100.0% → 0.0% |  443 MiB → 0 B | 228 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |  +27.414 MiB |  0.0% → 67.4% | 0 B → 27.4 MiB |  0 → 17 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |   +7.257 MiB |  0.0% → 17.8% | 0 B → 7.26 MiB |   0 → 5 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001001000` |
|     new |   +5.996 MiB |  0.0% → 14.7% |    0 B → 6 MiB |   0 → 3 | `invokeVirtual(Object, Object)`         | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001185000`)

|  Change |        Delta |             % |           Size | Samples | Callee                                  | Location                                             |
| ------: | -----------: | ------------: | -------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
| removed | -332.323 MiB | 100.0% → 0.0% |  332 MiB → 0 B | 171 → 0 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000c801101c00` |
|     new |   +4.832 MiB | 0.0% → 100.0% | 0 B → 4.83 MiB |   0 → 4 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001804c00`)

|  Change |       Delta |             % |          Size | Samples | Callee                                  | Location                                             |
| ------: | ----------: | ------------: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
| removed | -321.84 MiB | 100.0% → 0.0% | 322 MiB → 0 B | 141 → 0 | `invokeVirtual(Object, Object, int)`    | `java.lang.invoke.LambdaForm$DMH.0x000000c80197cc00` |
|     new |  +1.998 MiB | 0.0% → 100.0% |   0 B → 2 MiB |   0 → 1 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001699800`)

| Change |        Delta |      % |            Size | Samples | Callee                                  | Location                                     |
| -----: | -----------: | -----: | --------------: | ------: | --------------------------------------- | -------------------------------------------- |
| -99.4% | -313.844 MiB | 100.0% | 316 MiB → 2 MiB | 138 → 1 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001133000`)

|   Change |        Delta |             % |               Size |  Samples | Callee                             | Location                                            |
| -------: | -----------: | ------------: | -----------------: | -------: | ---------------------------------- | --------------------------------------------------- |
|   -83.8% | -473.647 MiB | 99.0% → 34.8% | 565 MiB → 91.4 MiB | 295 → 58 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001118000` |
| +9988.8% | +169.564 MiB |  0.3% → 65.2% |  1.7 MiB → 171 MiB |   2 → 82 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|  removed |   -5.997 MiB |   1.1% → 0.0% |        6 MiB → 0 B |    3 → 0 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000c801118800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700168e800`)

|  Change |        Delta |             % |          Size | Samples | Callee                             | Location                                         |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------- | ------------------------------------------------ |
| removed | -309.846 MiB | 100.0% → 0.0% | 310 MiB → 0 B | 135 → 0 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
|     new |   +1.999 MiB | 0.0% → 100.0% |   0 B → 2 MiB |   0 → 1 | `delegate(Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

| Change |       Delta |             % |                Size |     Samples | Callee                          | Location                                                            |
| -----: | ----------: | ------------: | ------------------: | ----------: | ------------------------------- | ------------------------------------------------------------------- |
|  -4.2% | -86.425 MiB | 85.7% → 87.6% |    2 GiB → 1.92 GiB | 1,044 → 993 | `visitClass(ClassNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
| -24.5% | -41.815 MiB |   7.1% → 5.7% |   170 MiB → 129 MiB |     77 → 67 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
| -75.5% | -15.601 MiB |   0.9% → 0.2% | 20.7 MiB → 5.07 MiB |      11 → 3 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.convention.CompileStaticlVisitor`                |
| -47.1% | -10.661 MiB |   0.9% → 0.5% |   22.7 MiB → 12 MiB |      12 → 6 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.naming.ConfusingMethodNameAstVisitor`            |
| +58.3% | +10.482 MiB |   0.8% → 1.3% |   18 MiB → 28.5 MiB |      9 → 16 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`     |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|  Change |        Delta |             % |                Size |       Samples | Callee                  | Location                                                |
| ------: | -----------: | ------------: | ------------------: | ------------: | ----------------------- | ------------------------------------------------------- |
|   -6.7% | -150.455 MiB | 84.0% → 82.9% | 2.19 GiB → 2.05 GiB | 1,139 → 1,064 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                  |
|   -8.8% |  -25.429 MiB | 10.8% → 10.4% |   289 MiB → 263 MiB |     147 → 133 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |
|  +22.7% |  +15.957 MiB |   2.6% → 3.4% | 70.3 MiB → 86.3 MiB |       51 → 54 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`              |
|  +23.3% |  +11.781 MiB |   1.9% → 2.5% | 50.5 MiB → 62.3 MiB |       26 → 32 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor`               |
| removed |   -1.999 MiB |   0.1% → 0.0% |         2 MiB → 0 B |         1 → 0 | `getAstVisitor()`       | `org.codenarc.rule.convention.VectorIsObsoleteRule`     |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|  Change |        Delta |             % |                Size |   Samples | Callee                            | Location                                                                     |
| ------: | -----------: | ------------: | ------------------: | --------: | --------------------------------- | ---------------------------------------------------------------------------- |
|   -7.0% | -118.969 MiB | 84.5% → 82.9% | 1.67 GiB → 1.55 GiB | 876 → 806 | `visitMethod(MethodNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                            |
|  -66.7% |  -23.988 MiB |   1.8% → 0.6% |     36 MiB → 12 MiB |     8 → 6 | `visitMethodEx(MethodNode)`       | `org.codenarc.rule.formatting.SpaceBeforeOpeningBraceAstVisitor`             |
|  -58.7% |  -11.345 MiB |   1.0% → 0.4% |    19.3 MiB → 8 MiB |    10 → 4 | `visitMethodEx(MethodNode)`       | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`               |
| +240.7% |   +9.623 MiB |   0.2% → 0.7% |    4 MiB → 13.6 MiB |     2 → 7 | `visitMethodComplete(MethodNode)` | `org.codenarc.rule.convention.StaticMethodsBeforeInstanceMethodsAstVisitor`  |
| +102.1% |   +8.161 MiB |   0.4% → 0.8% |    8 MiB → 16.2 MiB |     4 → 9 | `visitMethodEx(MethodNode)`       | `org.codenarc.rule.design.ReturnsNullInsteadOfEmptyCollectionRuleAstVisitor` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

| Change |       Delta |             % |               Size |       Samples | Callee                                           | Location                           |
| -----: | ----------: | ------------: | -----------------: | ------------: | ------------------------------------------------ | ---------------------------------- |
|  -2.5% | -85.831 MiB | 83.2% → 83.3% | 3.39 GiB → 3.3 GiB | 1,732 → 1,699 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  -6.1% | -26.832 MiB | 10.5% → 10.1% |  437 MiB → 410 MiB |     225 → 209 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  +2.3% |  +5.975 MiB |   6.2% → 6.5% |  257 MiB → 263 MiB |     130 → 135 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|  Change |        Delta |             % |                Size |       Samples | Callee                                                   | Location                           |
| ------: | -----------: | ------------: | ------------------: | ------------: | -------------------------------------------------------- | ---------------------------------- |
|   -3.0% | -104.303 MiB | 99.9% → 99.7% | 3.44 GiB → 3.33 GiB | 1,775 → 1,721 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
| +196.5% |   +6.062 MiB |   0.1% → 0.3% | 3.08 MiB → 9.15 MiB |         2 → 5 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |
| removed |   -1.016 MiB |  <0.1% → 0.0% |      1.02 MiB → 0 B |         1 → 0 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.report.TextReportWriter$_writePackageViolations_closure2`)

|  Change |       Delta |              % |            Size | Samples | Callee                                           | Location                           |
| ------: | ----------: | -------------: | --------------: | ------: | ------------------------------------------------ | ---------------------------------- |
| removed | -89.954 MiB |   71.4% → 0.0% |    90 MiB → 0 B |   1 → 0 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |
|   -5.6% |  -1.999 MiB | 28.6% → 100.0% | 36 MiB → 34 MiB | 18 → 17 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `writePackageViolations(Writer, Results)` (`org.codenarc.report.TextReportWriter`)

| Change |       Delta |      % |           Size | Samples | Callee                                   | Location                           |
| -----: | ----------: | -----: | -------------: | ------: | ---------------------------------------- | ---------------------------------- |
| -97.8% | -89.954 MiB | 100.0% | 92 MiB → 2 MiB |   2 → 1 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|  Change |        Delta |             % |                Size |       Samples | Callee                      | Location                                                 |
| ------: | -----------: | ------------: | ------------------: | ------------: | --------------------------- | -------------------------------------------------------- |
|   -4.9% | -115.098 MiB | 86.8% → 84.8% |  2.31 GiB → 2.2 GiB | 1,220 → 1,154 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`               |
|  +16.4% |  +17.617 MiB |   3.9% → 4.7% |   107 MiB → 125 MiB |       56 → 59 | `applyTo(SourceCode, List)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule` |
| +167.3% |  +10.008 MiB |   0.2% → 0.6% |   5.98 MiB → 16 MiB |         3 → 8 | `applyTo(SourceCode, List)` | `org.codenarc.rule.imports.MisorderedStaticImportsRule`  |
| +409.6% |   +8.577 MiB |   0.1% → 0.4% | 2.09 MiB → 10.7 MiB |         2 → 6 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.LineLengthRule`            |
|  +50.1% |   +7.726 MiB |   0.6% → 0.9% | 15.4 MiB → 23.1 MiB |        8 → 12 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.ConsecutiveBlankLinesRule` |

##### `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)

|  Change |       Delta |             % |              Size |   Samples | Callee                                                   | Location                           |
| ------: | ----------: | ------------: | ----------------: | --------: | -------------------------------------------------------- | ---------------------------------- |
|   -7.8% | -61.673 MiB | 99.3% → 99.7% | 794 MiB → 732 MiB | 402 → 375 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| removed |  -1.999 MiB |   0.2% → 0.0% |       2 MiB → 0 B |     1 → 0 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
|  -49.9% |  -1.992 MiB |   0.5% → 0.3% |  3.99 MiB → 2 MiB |     2 → 1 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.report.TextReportWriter$_writeFileViolations_closure4`)

| Change |       Delta |      % |            Size | Samples | Callee                           | Location                           |
| -----: | ----------: | -----: | --------------: | ------: | -------------------------------- | ---------------------------------- |
| -55.3% | -41.978 MiB | 100.0% | 76 MiB → 34 MiB | 16 → 17 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `visitClassEx(ClassNode)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`)

| Change |       Delta |              % |              Size | Samples | Callee                                                   | Location                           |
| -----: | ----------: | -------------: | ----------------: | ------: | -------------------------------------------------------- | ---------------------------------- |
| -24.2% | -41.184 MiB | 100.0% → 99.2% | 170 MiB → 129 MiB | 77 → 67 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|    new |  +1.037 MiB |    0.0% → 0.8% |    0 B → 1.04 MiB |   0 → 1 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

| Change |       Delta |             % |                Size |       Samples | Callee                                   | Location                           |
| -----: | ----------: | ------------: | ------------------: | ------------: | ---------------------------------------- | ---------------------------------- |
|  -2.0% | -52.499 MiB | 73.9% → 73.2% | 2.57 GiB → 2.52 GiB | 1,363 → 1,314 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  +1.7% | +15.747 MiB | 26.0% → 26.7% |   925 MiB → 941 MiB |     473 → 479 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.ClassReferenceAstVisitor`)

|  Change |       Delta |             % |                Size | Samples | Callee                                                        | Location                                            |
| ------: | ----------: | ------------: | ------------------: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
|  -56.1% | -26.388 MiB | 76.6% → 77.5% | 47.1 MiB → 20.7 MiB | 27 → 11 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
| removed | -12.417 MiB |  20.2% → 0.0% |      12.4 MiB → 0 B |   7 → 0 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                  |
|     new |  +1.999 MiB |   0.0% → 7.5% |         0 B → 2 MiB |   0 → 1 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |
|     ~0% |       +40 B |   3.3% → 7.5% |               2 MiB |       1 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                  |

##### `super$3$applyTo(SourceCode, List)` (`org.codenarc.rule.formatting.IndentationRule`)

| Change |       Delta |      % |               Size | Samples | Callee                      | Location                                   |
| -----: | ----------: | -----: | -----------------: | ------: | --------------------------- | ------------------------------------------ |
| -28.7% | -32.284 MiB | 100.0% | 113 MiB → 80.3 MiB | 56 → 41 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `addViolationIfDuplicate(Expression)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

| Change |       Delta |      % |              Size |   Samples | Callee                                         | Location                                           |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------------------------------- | -------------------------------------------------- |
|  -7.7% | -31.795 MiB | 100.0% | 410 MiB → 378 MiB | 204 → 191 | `addViolationIfDuplicate(Expression, boolean)` | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor` |

##### `checkDeclaration(ASTNode, String, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`)

|  Change |       Delta |             % |              Size |   Samples | Callee                                           | Location                                            |
| ------: | ----------: | ------------: | ----------------: | --------: | ------------------------------------------------ | --------------------------------------------------- |
|   -7.9% | -21.721 MiB | 94.7% → 97.7% | 274 MiB → 252 MiB | 129 → 127 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  -55.1% |  -7.344 MiB |   4.6% → 2.3% |  13.3 MiB → 6 MiB |     7 → 3 | `findRegex(Object, Object)`                      | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
| removed |  -1.998 MiB |   0.7% → 0.0% |       2 MiB → 0 B |     1 → 0 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000c801134800` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

|  Change |       Delta |             % |              Size |   Samples | Callee                                                        | Location                                            |
| ------: | ----------: | ------------: | ----------------: | --------: | ------------------------------------------------------------- | --------------------------------------------------- |
|  -15.8% | -44.747 MiB | 94.6% → 88.8% | 282 MiB → 238 MiB | 142 → 121 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |
|  +14.1% |  +8.752 MiB | 20.8% → 26.4% | 62 MiB → 70.7 MiB |   32 → 36 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
| +100.0% |  +1.999 MiB |   0.7% → 1.5% |     2 MiB → 4 MiB |     1 → 2 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                  |

##### `addViolationIfDuplicate(Expression, boolean)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

|  Change |       Delta |             % |               Size |   Samples | Callee                                           | Location                                            |
| ------: | ----------: | ------------: | -----------------: | --------: | ------------------------------------------------ | --------------------------------------------------- |
|  -31.6% | -43.994 MiB | 33.8% → 24.8% | 139 MiB → 95.4 MiB |   70 → 49 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                  |
| +500.0% |  +9.995 MiB |   0.5% → 3.1% |     2 MiB → 12 MiB |     1 → 5 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001134800` |
|   +0.8% |  +2.204 MiB | 65.7% → 71.0% |  271 MiB → 273 MiB | 134 → 138 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
|     new |  +1.999 MiB |   0.0% → 0.5% |        0 B → 2 MiB |     0 → 1 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|     new |  +1.999 MiB |   0.0% → 0.5% |        0 B → 2 MiB |     0 → 1 | `compareEqual(Object, Object)`                   | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### `visitBlockStatement(BlockStatement)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

|  Change |       Delta |             % |              Size | Samples | Callee                                                        | Location                                            |
| ------: | ----------: | ------------: | ----------------: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
|  -48.0% | -31.335 MiB | 74.8% → 56.7% | 65.3 MiB → 34 MiB | 31 → 17 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |
|  +44.4% |  +7.996 MiB | 20.6% → 43.3% |   18 MiB → 26 MiB |  9 → 13 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
| removed |  -1.999 MiB |   2.3% → 0.0% |       2 MiB → 0 B |   1 → 0 | `linkToCallSite(Object, int, Object)`                         | `java.lang.invoke.Invokers$Holder`                  |
|  -50.0% |  -1.998 MiB |   4.6% → 3.3% |     4 MiB → 2 MiB |   2 → 1 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                  |

##### `checkType(String, ASTNode)` (`org.codenarc.rule.ClassReferenceAstVisitor`)

| Change |       Delta |             % |              Size | Samples | Callee                                   | Location                                            |
| -----: | ----------: | ------------: | ----------------: | ------: | ---------------------------------------- | --------------------------------------------------- |
| -71.0% | -24.425 MiB | 91.5% → 83.3% | 34.4 MiB → 10 MiB |  19 → 5 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
| -37.2% |  -1.185 MiB |  8.5% → 16.7% |  3.19 MiB → 2 MiB |   2 → 1 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001134800` |

# Retained heap profile diff

Retained 73.9 KiB → 11.5 KiB (-62.367 KiB, -84.4%) over 131 objects → 126 objects (577 B → 93.5 B per object).

| Category         | Change |       Delta |              % |                Size |   Objects |
| ---------------- | -----: | ----------: | -------------: | ------------------: | --------: |
| Standard library | -84.5% | -62.429 KiB | 100.0% → 99.5% | 73.9 KiB → 11.4 KiB | 131 → 124 |
| Ours             |    new |       +64 B |    0.0% → 0.5% |          0 B → 64 B |     0 → 2 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Standard library

|   Change |      Delta |            % |            Size | Objects | Function                                                                                                | Location                                                |
| -------: | ---------: | -----------: | --------------: | ------: | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| +1507.7% | +4.593 KiB | 0.4% → 42.6% | 312 B → 4.9 KiB |   1 → 2 | `copyOf(Object[], int)`                                                                                 | `java.util.Arrays`                                      |
|  +112.3% |     +512 B |  0.6% → 8.2% |   456 B → 968 B |  7 → 10 | `copyOfRangeByte(byte[], int, int)`                                                                     | `java.util.Arrays`                                      |
|  +100.0% |     +304 B |  0.4% → 5.2% |   304 B → 608 B |   2 → 4 | `getPlainNodeReference(boolean)`                                                                        | `org.codehaus.groovy.ast.ClassNode`                     |
|  +200.0% |     +224 B |  0.1% → 2.9% |   112 B → 336 B |   2 → 6 | `grow(int)`                                                                                             | `java.util.ArrayList`                                   |
|   +25.0% |     +168 B |  0.9% → 7.1% |   672 B → 840 B | 12 → 15 | `getOrPutMethods(String, MetaMethodIndex$Header)`                                                       | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |
|      new |     +168 B |  0.0% → 1.4% |     0 B → 168 B |   0 → 3 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object)`                                  | `java.lang.invoke.BoundMethodHandle$Species_LLLLL`      |
|      new |     +152 B |  0.0% → 1.3% |     0 B → 152 B |   0 → 1 | `makeWithoutCaching(String)`                                                                            | `org.codehaus.groovy.ast.ClassHelper`                   |
|      new |     +144 B |  0.0% → 1.2% |     0 B → 144 B |   0 → 2 | `createCachedClass(Class, ClassInfo)`                                                                   | `org.codehaus.groovy.reflection.ClassInfo`              |
|      new |     +128 B |  0.0% → 1.1% |     0 B → 128 B |   0 → 2 | `newReflectionData(SoftReference, int)`                                                                 | `java.lang.Class`                                       |
|      new |     +112 B |  0.0% → 1.0% |     0 B → 112 B |   0 → 1 | `createNormalMetaClass(Class, MetaClassRegistry)`                                                       | `groovy.lang.MetaClassRegistry$MetaClassCreationHandle` |
|  +137.5% |      +88 B |  0.1% → 1.3% |    64 B → 152 B |   2 → 4 | `set(Method)`                                                                                           | `java.beans.MethodRef`                                  |
|      new |      +80 B |  0.0% → 0.7% |      0 B → 80 B |   0 → 1 | `addConstructor(int, Parameter[], ClassNode[], Statement)`                                              | `org.codehaus.groovy.ast.ClassNode`                     |
|  +100.0% |      +64 B |  0.1% → 1.1% |    64 B → 128 B |   1 → 2 | `<init>(MethodType)`                                                                                    | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`     |
|      new |      +64 B |  0.0% → 0.5% |      0 B → 64 B |   0 → 1 | `<init>(Void, String, ClassLoader)`                                                                     | `java.lang.ClassLoader`                                 |
|      new |      +64 B |  0.0% → 0.5% |      0 B → 64 B |   0 → 1 | `createDotExpression(GroovyParser$PathElementContext, Expression, Expression, GenericsType[], boolean)` | `org.apache.groovy.parser.antlr4.AstBuilder`            |
|  +200.0% |      +48 B | <0.1% → 0.6% |     24 B → 72 B |   1 → 3 | `newString(byte[], int, int)`                                                                           | `java.lang.StringLatin1`                                |
|      new |      +48 B |  0.0% → 0.4% |      0 B → 48 B |   0 → 1 | `postfixExpression()`                                                                                   | `org.apache.groovy.parser.antlr4.GroovyParser`          |
|      new |      +48 B |  0.0% → 0.4% |      0 B → 48 B |   0 → 1 | `methodDeclaration(int, int)`                                                                           | `org.apache.groovy.parser.antlr4.GroovyParser`          |
|      new |      +40 B |  0.0% → 0.3% |      0 B → 40 B |   0 → 1 | `allocateUninitializedArray(Class, int)`                                                                | `jdk.internal.misc.Unsafe`                              |
|      new |      +40 B |  0.0% → 0.3% |      0 B → 40 B |   0 → 1 | `stateFactory(int, int)`                                                                                | `groovyjarjarantlr4.v4.runtime.atn.ATNDeserializer`     |

#### Improvements

Functions with the largest decrease in bytes retained within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Standard library

|  Change |       Delta |            % |             Size | Objects | Function                                                                        | Location                                                      |
| ------: | ----------: | -----------: | ---------------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| removed | -64.015 KiB | 86.7% → 0.0% |     64 KiB → 0 B |   1 → 0 | `<clinit>()`                                                                    | `com.sun.org.apache.xerces.internal.util.XMLChar`             |
| removed |  -2.015 KiB |  2.7% → 0.0% |   2.02 KiB → 0 B |   1 → 0 | `resize(int)`                                                                   | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`       |
|  -91.2% |  -1.296 KiB |  1.9% → 1.1% | 1.42 KiB → 128 B |   5 → 2 | `resize()`                                                                      | `java.util.HashMap`                                           |
|  -56.1% |      -480 B |  1.1% → 3.2% |    856 B → 376 B |  10 → 5 | `getDeclaredMethods0(boolean)`                                                  | `java.lang.Class`                                             |
|  -75.0% |      -480 B |  0.8% → 1.4% |    640 B → 160 B |  16 → 4 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.LinkedHashMap`                                     |
| removed |      -112 B |  0.1% → 0.0% |      112 B → 0 B |   1 → 0 | `initClassName()`                                                               | `java.lang.Class`                                             |
| removed |       -96 B |  0.1% → 0.0% |       96 B → 0 B |   2 → 0 | `create(Tuple2, int, String, int, int, int, int, int)`                          | `groovyjarjarantlr4.v4.runtime.CommonTokenFactory`            |
|  -25.0% |       -88 B |  0.5% → 2.2% |    352 B → 264 B |   4 → 3 | `copy()`                                                                        | `java.lang.reflect.Method`                                    |
|  -78.6% |       -88 B |  0.1% → 0.2% |     112 B → 24 B |       1 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                                       |
| removed |       -80 B |  0.1% → 0.0% |       80 B → 0 B |   2 → 0 | `registerMethods(Class, boolean, boolean, Map)`                                 | `org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl` |
| removed |       -80 B |  0.1% → 0.0% |       80 B → 0 B |   2 → 0 | `make(byte, Class, MemberName, Class)`                                          | `java.lang.invoke.DirectMethodHandle`                         |
| removed |       -72 B |  0.1% → 0.0% |       72 B → 0 B |   1 → 0 | `visitIdentifierPrmrAlt(GroovyParser$IdentifierPrmrAltContext)`                 | `org.apache.groovy.parser.antlr4.AstBuilder`                  |
| removed |       -72 B |  0.1% → 0.0% |       72 B → 0 B |   1 → 0 | `visitVariableDeclarator(GroovyParser$VariableDeclaratorContext)`               | `org.apache.groovy.parser.antlr4.AstBuilder`                  |
|  -38.1% |       -64 B |  0.2% → 0.9% |    168 B → 104 B |   3 → 2 | `clone()`                                                                       | `java.lang.Object`                                            |
| removed |       -64 B |  0.1% → 0.0% |       64 B → 0 B |   1 → 0 | `lambda$initValue$2(Method)`                                                    | `org.codehaus.groovy.reflection.CachedClass$3`                |
|  -66.7% |       -64 B |  0.1% → 0.3% |      96 B → 32 B |   3 → 1 | `putNodeMetaData(Object, Object)`                                               | `org.codehaus.groovy.ast.NodeMetaDataHandler`                 |
| removed |       -64 B |  0.1% → 0.0% |       64 B → 0 B |   1 → 0 | `assertMembers()`                                                               | `org.codehaus.groovy.ast.AnnotationNode`                      |
| removed |       -56 B |  0.1% → 0.0% |       56 B → 0 B |   1 → 0 | `getTargetMethodInfo()`                                                         | `java.beans.Introspector`                                     |
| removed |       -56 B |  0.1% → 0.0% |       56 B → 0 B |   1 → 0 | `visitCreator(GroovyParser$CreatorContext)`                                     | `org.apache.groovy.parser.antlr4.AstBuilder`                  |
| removed |       -48 B |  0.1% → 0.0% |       48 B → 0 B |   2 → 0 | `setParams(Class[])`                                                            | `java.beans.MethodDescriptor`                                 |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|   Change |      Delta |      % |            Size | Objects | Location                |
| -------: | ---------: | -----: | --------------: | ------: | ----------------------- |
| +1507.7% | +4.593 KiB | 100.0% | 312 B → 4.9 KiB |   1 → 2 | `java.util.Arrays:3482` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|  Change |  Delta |      % |          Size | Objects | Location                |
| ------: | -----: | -----: | ------------: | ------: | ----------------------- |
| +112.3% | +512 B | 100.0% | 456 B → 968 B |  7 → 10 | `java.util.Arrays:3863` |

##### `getPlainNodeReference(boolean)` (`org.codehaus.groovy.ast.ClassNode`)

|  Change |  Delta |      % |          Size | Objects | Location                                 |
| ------: | -----: | -----: | ------------: | ------: | ---------------------------------------- |
| +100.0% | +304 B | 100.0% | 304 B → 608 B |   2 → 4 | `org.codehaus.groovy.ast.ClassNode:1531` |

##### `grow(int)` (`java.util.ArrayList`)

|  Change |  Delta |      % |          Size | Objects | Location                  |
| ------: | -----: | -----: | ------------: | ------: | ------------------------- |
| +200.0% | +224 B | 100.0% | 112 B → 336 B |   2 → 6 | `java.util.ArrayList:239` |

##### `getOrPutMethods(String, MetaMethodIndex$Header)` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

| Change |  Delta |      % |          Size | Objects | Location                                                    |
| -----: | -----: | -----: | ------------: | ------: | ----------------------------------------------------------- |
| +25.0% | +168 B | 100.0% | 672 B → 840 B | 12 → 15 | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex:219` |

##### `makeWithoutCaching(String)` (`org.codehaus.groovy.ast.ClassHelper`)

| Change |  Delta |             % |        Size | Objects | Location                                  |
| -----: | -----: | ------------: | ----------: | ------: | ----------------------------------------- |
|    new | +152 B | 0.0% → 100.0% | 0 B → 152 B |   0 → 1 | `org.codehaus.groovy.ast.ClassHelper:281` |

##### `createCachedClass(Class, ClassInfo)` (`org.codehaus.groovy.reflection.ClassInfo`)

| Change |  Delta |             % |        Size | Objects | Location                                       |
| -----: | -----: | ------------: | ----------: | ------: | ---------------------------------------------- |
|    new | +144 B | 0.0% → 100.0% | 0 B → 144 B |   0 → 2 | `org.codehaus.groovy.reflection.ClassInfo:381` |

##### `newReflectionData(SoftReference, int)` (`java.lang.Class`)

| Change |  Delta |             % |        Size | Objects | Location               |
| -----: | -----: | ------------: | ----------: | ------: | ---------------------- |
|    new | +128 B | 0.0% → 100.0% | 0 B → 128 B |   0 → 2 | `java.lang.Class:3404` |

##### `createNormalMetaClass(Class, MetaClassRegistry)` (`groovy.lang.MetaClassRegistry$MetaClassCreationHandle`)

| Change |  Delta |             % |        Size | Objects | Location                                                    |
| -----: | -----: | ------------: | ----------: | ------: | ----------------------------------------------------------- |
|    new | +112 B | 0.0% → 100.0% | 0 B → 112 B |   0 → 1 | `groovy.lang.MetaClassRegistry$MetaClassCreationHandle:166` |

##### `set(Method)` (`java.beans.MethodRef`)

| Change |  Delta |              % |        Size | Objects | Location                  |
| -----: | -----: | -------------: | ----------: | ------: | ------------------------- |
|    new | +120 B |   0.0% → 78.9% | 0 B → 120 B |   0 → 3 | `java.beans.MethodRef:47` |
| -50.0% |  -32 B | 100.0% → 21.1% | 64 B → 32 B |   2 → 1 | `java.beans.MethodRef:48` |

##### `addConstructor(int, Parameter[], ClassNode[], Statement)` (`org.codehaus.groovy.ast.ClassNode`)

| Change | Delta |             % |       Size | Objects | Location                                |
| -----: | ----: | ------------: | ---------: | ------: | --------------------------------------- |
|    new | +80 B | 0.0% → 100.0% | 0 B → 80 B |   0 → 1 | `org.codehaus.groovy.ast.ClassNode:614` |

##### `<init>(MethodType)` (`org.codehaus.groovy.vmplugin.v8.CacheableCallSite`)

|  Change | Delta |      % |         Size | Objects | Location                                               |
| ------: | ----: | -----: | -----------: | ------: | ------------------------------------------------------ |
| +100.0% | +64 B | 100.0% | 64 B → 128 B |   1 → 2 | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite:45` |

##### `<init>(Void, String, ClassLoader)` (`java.lang.ClassLoader`)

| Change | Delta |             % |       Size | Objects | Location                    |
| -----: | ----: | ------------: | ---------: | ------: | --------------------------- |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 1 | `java.lang.ClassLoader:382` |

##### `createDotExpression(GroovyParser$PathElementContext, Expression, Expression, GenericsType[], boolean)` (`org.apache.groovy.parser.antlr4.AstBuilder`)

| Change | Delta |             % |       Size | Objects | Location                                          |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------------------------------- |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 1 | `org.apache.groovy.parser.antlr4.AstBuilder:2707` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

|  Change | Delta |      % |        Size | Objects | Location                     |
| ------: | ----: | -----: | ----------: | ------: | ---------------------------- |
| +200.0% | +48 B | 100.0% | 24 B → 72 B |   1 → 3 | `java.lang.StringLatin1:750` |

##### `postfixExpression()` (`org.apache.groovy.parser.antlr4.GroovyParser`)

| Change | Delta |             % |       Size | Objects | Location                                            |
| -----: | ----: | ------------: | ---------: | ------: | --------------------------------------------------- |
|    new | +48 B | 0.0% → 100.0% | 0 B → 48 B |   0 → 1 | `org.apache.groovy.parser.antlr4.GroovyParser:8269` |

##### `methodDeclaration(int, int)` (`org.apache.groovy.parser.antlr4.GroovyParser`)

| Change | Delta |             % |       Size | Objects | Location                                            |
| -----: | ----: | ------------: | ---------: | ------: | --------------------------------------------------- |
|    new | +48 B | 0.0% → 100.0% | 0 B → 48 B |   0 → 1 | `org.apache.groovy.parser.antlr4.GroovyParser:2296` |

##### `allocateUninitializedArray(Class, int)` (`jdk.internal.misc.Unsafe`)

| Change | Delta |             % |       Size | Objects | Location                        |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------------- |
|    new | +40 B | 0.0% → 100.0% | 0 B → 40 B |   0 → 1 | `jdk.internal.misc.Unsafe:1380` |

##### `stateFactory(int, int)` (`groovyjarjarantlr4.v4.runtime.atn.ATNDeserializer`)

| Change | Delta |             % |       Size | Objects | Location                                                 |
| -----: | ----: | ------------: | ---------: | ------: | -------------------------------------------------------- |
|    new | +40 B | 0.0% → 100.0% | 0 B → 40 B |   0 → 1 | `groovyjarjarantlr4.v4.runtime.atn.ATNDeserializer:1195` |

##### `<clinit>()` (`com.sun.org.apache.xerces.internal.util.XMLChar`)

|  Change |       Delta |             % |         Size | Objects | Location                                             |
| ------: | ----------: | ------------: | -----------: | ------: | ---------------------------------------------------- |
| removed | -64.015 KiB | 100.0% → 0.0% | 64 KiB → 0 B |   1 → 0 | `com.sun.org.apache.xerces.internal.util.XMLChar:56` |

##### `resize(int)` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

|  Change |      Delta |             % |           Size | Objects | Location                                                    |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------------------------------------------------- |
| removed | -2.015 KiB | 100.0% → 0.0% | 2.02 KiB → 0 B |   1 → 0 | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex:135` |

##### `resize()` (`java.util.HashMap`)

| Change |      Delta |      % |             Size | Objects | Location                |
| -----: | ---------: | -----: | ---------------: | ------: | ----------------------- |
| -91.2% | -1.296 KiB | 100.0% | 1.42 KiB → 128 B |   5 → 2 | `java.util.HashMap:710` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.LinkedHashMap`)

| Change |  Delta |      % |          Size | Objects | Location                      |
| -----: | -----: | -----: | ------------: | ------: | ----------------------------- |
| -75.0% | -480 B | 100.0% | 640 B → 160 B |  16 → 4 | `java.util.LinkedHashMap:281` |

##### `create(Tuple2, int, String, int, int, int, int, int)` (`groovyjarjarantlr4.v4.runtime.CommonTokenFactory`)

|  Change | Delta |             % |       Size | Objects | Location                                              |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------------------------------- |
| removed | -96 B | 100.0% → 0.0% | 96 B → 0 B |   2 → 0 | `groovyjarjarantlr4.v4.runtime.CommonTokenFactory:70` |

##### `copy()` (`java.lang.reflect.Method`)

| Change | Delta |      % |          Size | Objects | Location                       |
| -----: | ----: | -----: | ------------: | ------: | ------------------------------ |
| -25.0% | -88 B | 100.0% | 352 B → 264 B |   4 → 3 | `java.lang.reflect.Method:165` |

##### `registerMethods(Class, boolean, boolean, Map)` (`org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl`)

|  Change | Delta |            % |       Size | Objects | Location                                                          |
| ------: | ----: | -----------: | ---------: | ------: | ----------------------------------------------------------------- |
| removed | -56 B | 70.0% → 0.0% | 56 B → 0 B |   1 → 0 | `org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl:214` |
| removed | -24 B | 30.0% → 0.0% | 24 B → 0 B |   1 → 0 | `org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl:222` |

##### `make(byte, Class, MemberName, Class)` (`java.lang.invoke.DirectMethodHandle`)

|  Change | Delta |             % |       Size | Objects | Location                                  |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------------------- |
| removed | -80 B | 100.0% → 0.0% | 80 B → 0 B |   2 → 0 | `java.lang.invoke.DirectMethodHandle:107` |

##### `visitIdentifierPrmrAlt(GroovyParser$IdentifierPrmrAltContext)` (`org.apache.groovy.parser.antlr4.AstBuilder`)

|  Change | Delta |             % |       Size | Objects | Location                                          |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------------- |
| removed | -72 B | 100.0% → 0.0% | 72 B → 0 B |   1 → 0 | `org.apache.groovy.parser.antlr4.AstBuilder:3248` |

##### `visitVariableDeclarator(GroovyParser$VariableDeclaratorContext)` (`org.apache.groovy.parser.antlr4.AstBuilder`)

|  Change | Delta |             % |       Size | Objects | Location                                          |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------------- |
| removed | -72 B | 100.0% → 0.0% | 72 B → 0 B |   1 → 0 | `org.apache.groovy.parser.antlr4.AstBuilder:2198` |

##### `lambda$initValue$2(Method)` (`org.codehaus.groovy.reflection.CachedClass$3`)

|  Change | Delta |             % |       Size | Objects | Location                                          |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `org.codehaus.groovy.reflection.CachedClass$3:87` |

##### `putNodeMetaData(Object, Object)` (`org.codehaus.groovy.ast.NodeMetaDataHandler`)

| Change | Delta |      % |        Size | Objects | Location                                          |
| -----: | ----: | -----: | ----------: | ------: | ------------------------------------------------- |
| -66.7% | -64 B | 100.0% | 96 B → 32 B |   3 → 1 | `org.codehaus.groovy.ast.NodeMetaDataHandler:110` |

##### `assertMembers()` (`org.codehaus.groovy.ast.AnnotationNode`)

|  Change | Delta |             % |       Size | Objects | Location                                    |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `org.codehaus.groovy.ast.AnnotationNode:82` |

##### `getTargetMethodInfo()` (`java.beans.Introspector`)

|  Change | Delta |             % |       Size | Objects | Location                       |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------ |
| removed | -56 B | 100.0% → 0.0% | 56 B → 0 B |   1 → 0 | `java.beans.Introspector:1030` |

##### `visitCreator(GroovyParser$CreatorContext)` (`org.apache.groovy.parser.antlr4.AstBuilder`)

|  Change | Delta |             % |       Size | Objects | Location                                          |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------------- |
| removed | -56 B | 100.0% → 0.0% | 56 B → 0 B |   1 → 0 | `org.apache.groovy.parser.antlr4.AstBuilder:3306` |

##### `setParams(Class[])` (`java.beans.MethodDescriptor`)

|  Change | Delta |            % |       Size | Objects | Location                          |
| ------: | ----: | -----------: | ---------: | ------: | --------------------------------- |
| removed | -32 B | 66.7% → 0.0% | 32 B → 0 B |   1 → 0 | `java.beans.MethodDescriptor:130` |
| removed | -16 B | 33.3% → 0.0% | 16 B → 0 B |   1 → 0 | `java.beans.MethodDescriptor:126` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|   Change |      Delta |      % |            Size | Objects | Caller      | Location              |
| -------: | ---------: | -----: | --------------: | ------: | ----------- | --------------------- |
| +1507.7% | +4.593 KiB | 100.0% | 312 B → 4.9 KiB |   1 → 2 | `grow(int)` | `java.util.ArrayList` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|  Change |  Delta |      % |          Size | Objects | Caller                          | Location           |
| ------: | -----: | -----: | ------------: | ------: | ------------------------------- | ------------------ |
| +112.3% | +512 B | 100.0% | 456 B → 968 B |  7 → 10 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `getPlainNodeReference(boolean)` (`org.codehaus.groovy.ast.ClassNode`)

|  Change |  Delta |      % |          Size | Objects | Caller                    | Location                            |
| ------: | -----: | -----: | ------------: | ------: | ------------------------- | ----------------------------------- |
| +100.0% | +304 B | 100.0% | 304 B → 608 B |   2 → 4 | `getPlainNodeReference()` | `org.codehaus.groovy.ast.ClassNode` |

##### `grow(int)` (`java.util.ArrayList`)

|  Change |  Delta |      % |          Size | Objects | Caller   | Location              |
| ------: | -----: | -----: | ------------: | ------: | -------- | --------------------- |
| +200.0% | +224 B | 100.0% | 112 B → 336 B |   2 → 6 | `grow()` | `java.util.ArrayList` |

##### `getOrPutMethods(String, MetaMethodIndex$Header)` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

|  Change |  Delta |             % |          Size | Objects | Caller                                                                           | Location                                                |
| ------: | -----: | ------------: | ------------: | ------: | -------------------------------------------------------------------------------- | ------------------------------------------------------- |
| +300.0% | +336 B | 16.7% → 53.3% | 112 B → 448 B |   2 → 8 | `copyNonPrivateMethods(MetaMethodIndex$Entry, MetaMethodIndex$Header)`           | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |
|  -40.0% | -224 B | 83.3% → 40.0% | 560 B → 336 B |  10 → 6 | `addMetaMethodToIndex(MetaMethod, MetaMethodIndex$Header)`                       | `groovy.lang.MetaClassImpl`                             |
|     new |  +56 B |   0.0% → 6.7% |    0 B → 56 B |   0 → 1 | `copyNonPrivateNonNewMetaMethods(MetaMethodIndex$Entry, MetaMethodIndex$Header)` | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |

##### `make(MethodType, LambdaForm, Object, Object, Object, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LLLLL`)

| Change |  Delta |             % |        Size | Objects | Caller                                                                         | Location                                     |
| -----: | -----: | ------------: | ----------: | ------: | ------------------------------------------------------------------------------ | -------------------------------------------- |
|    new | +168 B | 0.0% → 100.0% | 0 B → 168 B |   0 → 3 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `makeWithoutCaching(String)` (`org.codehaus.groovy.ast.ClassHelper`)

| Change |  Delta |             % |        Size | Objects | Caller         | Location                              |
| -----: | -----: | ------------: | ----------: | ------: | -------------- | ------------------------------------- |
|    new | +152 B | 0.0% → 100.0% | 0 B → 152 B |   0 → 1 | `make(String)` | `org.codehaus.groovy.ast.ClassHelper` |

##### `createCachedClass(Class, ClassInfo)` (`org.codehaus.groovy.reflection.ClassInfo`)

| Change |  Delta |             % |        Size | Objects | Caller                         | Location                                   |
| -----: | -----: | ------------: | ----------: | ------: | ------------------------------ | ------------------------------------------ |
|    new | +144 B | 0.0% → 100.0% | 0 B → 144 B |   0 → 2 | `access$300(Class, ClassInfo)` | `org.codehaus.groovy.reflection.ClassInfo` |

##### `newReflectionData(SoftReference, int)` (`java.lang.Class`)

| Change |  Delta |             % |        Size | Objects | Caller             | Location          |
| -----: | -----: | ------------: | ----------: | ------: | ------------------ | ----------------- |
|    new | +128 B | 0.0% → 100.0% | 0 B → 128 B |   0 → 2 | `reflectionData()` | `java.lang.Class` |

##### `createNormalMetaClass(Class, MetaClassRegistry)` (`groovy.lang.MetaClassRegistry$MetaClassCreationHandle`)

| Change |  Delta |             % |        Size | Objects | Caller                                             | Location                                                |
| -----: | -----: | ------------: | ----------: | ------: | -------------------------------------------------- | ------------------------------------------------------- |
|    new | +112 B | 0.0% → 100.0% | 0 B → 112 B |   0 → 1 | `createWithCustomLookup(Class, MetaClassRegistry)` | `groovy.lang.MetaClassRegistry$MetaClassCreationHandle` |

##### `set(Method)` (`java.beans.MethodRef`)

| Change | Delta |              % |        Size | Objects | Caller                                       | Location                        |
| -----: | ----: | -------------: | ----------: | ------: | -------------------------------------------- | ------------------------------- |
|    new | +40 B |   0.0% → 26.3% |  0 B → 40 B |   0 → 1 | `<init>(MethodDescriptor, MethodDescriptor)` | `java.beans.MethodDescriptor`   |
|    new | +40 B |   0.0% → 26.3% |  0 B → 40 B |   0 → 1 | `setWriteMethod0(Method)`                    | `java.beans.PropertyDescriptor` |
| +12.5% |  +8 B | 100.0% → 47.4% | 64 B → 72 B |       2 | `setMethod(Method)`                          | `java.beans.MethodDescriptor`   |

##### `addConstructor(int, Parameter[], ClassNode[], Statement)` (`org.codehaus.groovy.ast.ClassNode`)

| Change | Delta |             % |       Size | Objects | Caller                                       | Location                                |
| -----: | ----: | ------------: | ---------: | ------: | -------------------------------------------- | --------------------------------------- |
|    new | +80 B | 0.0% → 100.0% | 0 B → 80 B |   0 → 1 | `configureClassNode(CompileUnit, ClassNode)` | `org.codehaus.groovy.vmplugin.v8.Java8` |

##### `<init>(MethodType)` (`org.codehaus.groovy.vmplugin.v8.CacheableCallSite`)

|  Change | Delta |      % |         Size | Objects | Caller                                                                                    | Location                                        |
| ------: | ----: | -----: | -----------: | ------: | ----------------------------------------------------------------------------------------- | ----------------------------------------------- |
| +100.0% | +64 B | 100.0% | 64 B → 128 B |   1 → 2 | `realBootstrap(MethodHandles$Lookup, String, int, MethodType, boolean, boolean, boolean)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `<init>(Void, String, ClassLoader)` (`java.lang.ClassLoader`)

| Change | Delta |             % |       Size | Objects | Caller                | Location                |
| -----: | ----: | ------------: | ---------: | ------: | --------------------- | ----------------------- |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 1 | `<init>(ClassLoader)` | `java.lang.ClassLoader` |

##### `createDotExpression(GroovyParser$PathElementContext, Expression, Expression, GenericsType[], boolean)` (`org.apache.groovy.parser.antlr4.AstBuilder`)

| Change | Delta |             % |       Size | Objects | Caller                                              | Location                                     |
| -----: | ----: | ------------: | ---------: | ------: | --------------------------------------------------- | -------------------------------------------- |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 1 | `visitPathElement(GroovyParser$PathElementContext)` | `org.apache.groovy.parser.antlr4.AstBuilder` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

|  Change | Delta |              % |        Size | Objects | Caller                | Location                 |
| ------: | ----: | -------------: | ----------: | ------: | --------------------- | ------------------------ |
| +100.0% | +24 B | 100.0% → 66.7% | 24 B → 48 B |   1 → 2 | `substring(int, int)` | `java.lang.String`       |
|     new | +24 B |   0.0% → 33.3% |  0 B → 24 B |   0 → 1 | `trim(byte[])`        | `java.lang.StringLatin1` |

##### `postfixExpression()` (`org.apache.groovy.parser.antlr4.GroovyParser`)

| Change | Delta |             % |       Size | Objects | Caller            | Location                                       |
| -----: | ----: | ------------: | ---------: | ------: | ----------------- | ---------------------------------------------- |
|    new | +48 B | 0.0% → 100.0% | 0 B → 48 B |   0 → 1 | `expression(int)` | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `methodDeclaration(int, int)` (`org.apache.groovy.parser.antlr4.GroovyParser`)

| Change | Delta |             % |       Size | Objects | Caller                   | Location                                       |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------ | ---------------------------------------------- |
|    new | +48 B | 0.0% → 100.0% | 0 B → 48 B |   0 → 1 | `memberDeclaration(int)` | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `allocateUninitializedArray(Class, int)` (`jdk.internal.misc.Unsafe`)

| Change | Delta |             % |       Size | Objects | Caller           | Location                       |
| -----: | ----: | ------------: | ---------: | ------: | ---------------- | ------------------------------ |
|    new | +40 B | 0.0% → 100.0% | 0 B → 40 B |   0 → 1 | `newArray(long)` | `java.lang.StringConcatHelper` |

##### `stateFactory(int, int)` (`groovyjarjarantlr4.v4.runtime.atn.ATNDeserializer`)

| Change | Delta |             % |       Size | Objects | Caller                | Location                                            |
| -----: | ----: | ------------: | ---------: | ------: | --------------------- | --------------------------------------------------- |
|    new | +40 B | 0.0% → 100.0% | 0 B → 40 B |   0 → 1 | `deserialize(char[])` | `groovyjarjarantlr4.v4.runtime.atn.ATNDeserializer` |

##### `<clinit>()` (`com.sun.org.apache.xerces.internal.util.XMLChar`)

|  Change |       Delta |             % |         Size | Objects | Caller                     | Location                                                         |
| ------: | ----------: | ------------: | -----------: | ------: | -------------------------- | ---------------------------------------------------------------- |
| removed | -64.015 KiB | 100.0% → 0.0% | 64 KiB → 0 B |   1 → 0 | `normalize(Object, short)` | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl` |

##### `resize(int)` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

|  Change |      Delta |             % |           Size | Objects | Caller                                            | Location                                                |
| ------: | ---------: | ------------: | -------------: | ------: | ------------------------------------------------- | ------------------------------------------------------- |
| removed | -2.015 KiB | 100.0% → 0.0% | 2.02 KiB → 0 B |   1 → 0 | `getOrPutMethods(String, MetaMethodIndex$Header)` | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |

##### `resize()` (`java.util.HashMap`)

| Change |      Delta |      % |             Size | Objects | Caller                                          | Location            |
| -----: | ---------: | -----: | ---------------: | ------: | ----------------------------------------------- | ------------------- |
| -91.2% | -1.296 KiB | 100.0% | 1.42 KiB → 128 B |   5 → 2 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `getDeclaredMethods0(boolean)` (`java.lang.Class`)

| Change |  Delta |      % |          Size | Objects | Caller                               | Location          |
| -----: | -----: | -----: | ------------: | ------: | ------------------------------------ | ----------------- |
| -56.1% | -480 B | 100.0% | 856 B → 376 B |  10 → 5 | `privateGetDeclaredMethods(boolean)` | `java.lang.Class` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.LinkedHashMap`)

|  Change |  Delta |              % |          Size | Objects | Caller                                          | Location            |
| ------: | -----: | -------------: | ------------: | ------: | ----------------------------------------------- | ------------------- |
|  -71.4% | -400 B | 87.5% → 100.0% | 560 B → 160 B |  14 → 4 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
| removed |  -80 B |   12.5% → 0.0% |    80 B → 0 B |   2 → 0 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |

##### `initClassName()` (`java.lang.Class`)

|  Change |  Delta |             % |        Size | Objects | Caller      | Location          |
| ------: | -----: | ------------: | ----------: | ------: | ----------- | ----------------- |
| removed | -112 B | 100.0% → 0.0% | 112 B → 0 B |   1 → 0 | `getName()` | `java.lang.Class` |

##### `create(Tuple2, int, String, int, int, int, int, int)` (`groovyjarjarantlr4.v4.runtime.CommonTokenFactory`)

|  Change | Delta |             % |       Size | Objects | Caller                                                 | Location                                           |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------------------ | -------------------------------------------------- |
| removed | -96 B | 100.0% → 0.0% | 96 B → 0 B |   2 → 0 | `create(Tuple2, int, String, int, int, int, int, int)` | `groovyjarjarantlr4.v4.runtime.CommonTokenFactory` |

##### `copy()` (`java.lang.reflect.Method`)

| Change | Delta |      % |          Size | Objects | Caller               | Location                          |
| -----: | ----: | -----: | ------------: | ------: | -------------------- | --------------------------------- |
| -25.0% | -88 B | 100.0% | 352 B → 264 B |   4 → 3 | `copyMethod(Method)` | `java.lang.reflect.ReflectAccess` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

| Change | Delta |      % |         Size | Objects | Caller                                                    | Location                |
| -----: | ----: | -----: | -----------: | ------: | --------------------------------------------------------- | ----------------------- |
| -78.6% | -88 B | 100.0% | 112 B → 24 B |       1 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `registerMethods(Class, boolean, boolean, Map)` (`org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl`)

|  Change | Delta |             % |       Size | Objects | Caller                 | Location                                                      |
| ------: | ----: | ------------: | ---------: | ------: | ---------------------- | ------------------------------------------------------------- |
| removed | -80 B | 100.0% → 0.0% | 80 B → 0 B |   2 → 0 | `<init>(int, boolean)` | `org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl` |

##### `make(byte, Class, MemberName, Class)` (`java.lang.invoke.DirectMethodHandle`)

|  Change | Delta |             % |       Size | Objects | Caller                                                                                   | Location                                |
| ------: | ----: | ------------: | ---------: | ------: | ---------------------------------------------------------------------------------------- | --------------------------------------- |
| removed | -80 B | 100.0% → 0.0% | 80 B → 0 B |   2 → 0 | `getDirectMethodCommon(byte, Class, MemberName, boolean, boolean, MethodHandles$Lookup)` | `java.lang.invoke.MethodHandles$Lookup` |

##### `visitIdentifierPrmrAlt(GroovyParser$IdentifierPrmrAltContext)` (`org.apache.groovy.parser.antlr4.AstBuilder`)

|  Change | Delta |             % |       Size | Objects | Caller                                                          | Location                                     |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------------------------------------------- | -------------------------------------------- |
| removed | -72 B | 100.0% → 0.0% | 72 B → 0 B |   1 → 0 | `visitIdentifierPrmrAlt(GroovyParser$IdentifierPrmrAltContext)` | `org.apache.groovy.parser.antlr4.AstBuilder` |

##### `visitVariableDeclarator(GroovyParser$VariableDeclaratorContext)` (`org.apache.groovy.parser.antlr4.AstBuilder`)

|  Change | Delta |             % |       Size | Objects | Caller                                                                                  | Location                                     |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------------------------------------------------------------------- | -------------------------------------------- |
| removed | -72 B | 100.0% → 0.0% | 72 B → 0 B |   1 → 0 | `lambda$visitVariableDeclarators$30(ClassNode, GroovyParser$VariableDeclaratorContext)` | `org.apache.groovy.parser.antlr4.AstBuilder` |

##### `clone()` (`java.lang.Object`)

| Change | Delta |             % |        Size | Objects | Caller                                                                        | Location                      |
| -----: | ----: | ------------: | ----------: | ------: | ----------------------------------------------------------------------------- | ----------------------------- |
| -50.0% | -48 B | 57.1% → 46.2% | 96 B → 48 B |   2 → 1 | `clone()`                                                                     | `java.lang.invoke.MemberName` |
| -22.2% | -16 B | 42.9% → 53.8% | 72 B → 56 B |       1 | `create(int, LambdaForm$Name[], int, boolean, MethodHandle, LambdaForm$Kind)` | `java.lang.invoke.LambdaForm` |

##### `lambda$initValue$2(Method)` (`org.codehaus.groovy.reflection.CachedClass$3`)

|  Change | Delta |             % |       Size | Objects | Caller          | Location                                                                  |
| ------: | ----: | ------------: | ---------: | ------: | --------------- | ------------------------------------------------------------------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `apply(Object)` | `org.codehaus.groovy.reflection.CachedClass$3$$Lambda.0x000000c801086d40` |

##### `putNodeMetaData(Object, Object)` (`org.codehaus.groovy.ast.NodeMetaDataHandler`)

|  Change | Delta |             % |       Size | Objects | Caller                                                        | Location                                     |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------------------------- | -------------------------------------------- |
| removed | -64 B |  66.7% → 0.0% | 64 B → 0 B |   2 → 0 | `dynamicType()`                                               | `org.codehaus.groovy.ast.ClassHelper`        |
| removed | -32 B |  33.3% → 0.0% | 32 B → 0 B |   1 → 0 | `lambda$createPathExpression$48(Object, Object)`              | `org.apache.groovy.parser.antlr4.AstBuilder` |
|     new | +32 B | 0.0% → 100.0% | 0 B → 32 B |   0 → 1 | `visitFieldDeclaration(GroovyParser$FieldDeclarationContext)` | `org.apache.groovy.parser.antlr4.AstBuilder` |

##### `assertMembers()` (`org.codehaus.groovy.ast.AnnotationNode`)

|  Change | Delta |             % |       Size | Objects | Caller                          | Location                                 |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------- | ---------------------------------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `addMember(String, Expression)` | `org.codehaus.groovy.ast.AnnotationNode` |

##### `getTargetMethodInfo()` (`java.beans.Introspector`)

|  Change | Delta |             % |       Size | Objects | Caller          | Location                  |
| ------: | ----: | ------------: | ---------: | ------: | --------------- | ------------------------- |
| removed | -56 B | 100.0% → 0.0% | 56 B → 0 B |   1 → 0 | `getBeanInfo()` | `java.beans.Introspector` |

##### `visitCreator(GroovyParser$CreatorContext)` (`org.apache.groovy.parser.antlr4.AstBuilder`)

|  Change | Delta |             % |       Size | Objects | Caller                                            | Location                                     |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------------- | -------------------------------------------- |
| removed | -56 B | 100.0% → 0.0% | 56 B → 0 B |   1 → 0 | `visitNewPrmrAlt(GroovyParser$NewPrmrAltContext)` | `org.apache.groovy.parser.antlr4.AstBuilder` |

##### `setParams(Class[])` (`java.beans.MethodDescriptor`)

|  Change | Delta |             % |       Size | Objects | Caller              | Location                      |
| ------: | ----: | ------------: | ---------: | ------: | ------------------- | ----------------------------- |
| removed | -48 B | 100.0% → 0.0% | 48 B → 0 B |   2 → 0 | `setMethod(Method)` | `java.beans.MethodDescriptor` |

### Total size

#### Regressions

Functions with the largest increase in bytes retained within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Standard library

|   Change |      Delta |            % |             Size | Objects | Function                         | Location                                            |
| -------: | ---------: | -----------: | ---------------: | ------: | -------------------------------- | --------------------------------------------------- |
| +3122.7% | +5.367 KiB | 0.2% → 48.1% | 176 B → 5.54 KiB |  4 → 28 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001150800` |
|      new | +5.109 KiB | 0.0% → 44.4% |   0 B → 5.11 KiB |  0 → 18 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001830400` |
| +1939.4% |     +5 KiB | 0.3% → 45.7% | 264 B → 5.26 KiB |  6 → 23 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070012d8400` |
| +1162.3% | +4.812 KiB | 0.6% → 45.4% | 424 B → 5.23 KiB |   3 → 8 | `grow(int)`                      | `java.util.ArrayList`                               |
| +1162.3% | +4.812 KiB | 0.6% → 45.4% | 424 B → 5.23 KiB |   3 → 8 | `grow()`                         | `java.util.ArrayList`                               |
| +1162.3% | +4.812 KiB | 0.6% → 45.4% | 424 B → 5.23 KiB |   3 → 8 | `add(Object, Object[], int)`     | `java.util.ArrayList`                               |
| +1162.3% | +4.812 KiB | 0.6% → 45.4% | 424 B → 5.23 KiB |   3 → 8 | `add(Object)`                    | `java.util.ArrayList`                               |
| +1935.5% | +4.687 KiB | 0.3% → 42.8% | 248 B → 4.93 KiB |  7 → 14 | `statement()`                    | `org.apache.groovy.parser.antlr4.GroovyParser`      |
| +1293.5% | +4.648 KiB | 0.5% → 43.5% | 368 B → 5.01 KiB | 10 → 16 | `blockStatements()`              | `org.apache.groovy.parser.antlr4.GroovyParser`      |
| +1293.5% | +4.648 KiB | 0.5% → 43.5% | 368 B → 5.01 KiB | 10 → 16 | `blockStatementsOpt()`           | `org.apache.groovy.parser.antlr4.GroovyParser`      |
| +1293.5% | +4.648 KiB | 0.5% → 43.5% | 368 B → 5.01 KiB | 10 → 16 | `block()`                        | `org.apache.groovy.parser.antlr4.GroovyParser`      |
| +1293.5% | +4.648 KiB | 0.5% → 43.5% | 368 B → 5.01 KiB | 10 → 16 | `methodBody()`                   | `org.apache.groovy.parser.antlr4.GroovyParser`      |
| +1909.7% | +4.625 KiB | 0.3% → 42.3% | 248 B → 4.87 KiB |  7 → 13 | `commandExpression()`            | `org.apache.groovy.parser.antlr4.GroovyParser`      |
| +1909.7% | +4.625 KiB | 0.3% → 42.3% | 248 B → 4.87 KiB |  7 → 13 | `statementExpression()`          | `org.apache.groovy.parser.antlr4.GroovyParser`      |
| +1055.4% | +4.617 KiB | 0.6% → 43.9% | 448 B → 5.05 KiB | 12 → 17 | `methodDeclaration(int, int)`    | `org.apache.groovy.parser.antlr4.GroovyParser`      |
| +1055.4% | +4.617 KiB | 0.6% → 43.9% | 448 B → 5.05 KiB | 12 → 17 | `memberDeclaration(int)`         | `org.apache.groovy.parser.antlr4.GroovyParser`      |
| +1055.4% | +4.617 KiB | 0.6% → 43.9% | 448 B → 5.05 KiB | 12 → 17 | `classBodyDeclaration(int)`      | `org.apache.groovy.parser.antlr4.GroovyParser`      |
| +1055.4% | +4.617 KiB | 0.6% → 43.9% | 448 B → 5.05 KiB | 12 → 17 | `classBody(int)`                 | `org.apache.groovy.parser.antlr4.GroovyParser`      |
| +1055.4% | +4.617 KiB | 0.6% → 43.9% | 448 B → 5.05 KiB | 12 → 17 | `classDeclaration()`             | `org.apache.groovy.parser.antlr4.GroovyParser`      |
| +1055.4% | +4.617 KiB | 0.6% → 43.9% | 448 B → 5.05 KiB | 12 → 17 | `typeDeclaration()`              | `org.apache.groovy.parser.antlr4.GroovyParser`      |

#### Improvements

Functions with the largest decrease in bytes retained within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |       Delta |             % |              Size | Objects | Function                                                            | Location                                                            |
| ------: | ----------: | ------------: | ----------------: | ------: | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
|  -99.6% | -68.312 KiB |  92.9% → 2.4% |  68.6 KiB → 288 B |  67 → 5 | `invoke(Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001133000`                 |
|  -95.1% | -66.578 KiB | 94.8% → 29.7% | 70 KiB → 3.42 KiB | 66 → 57 | `reinvoke(Object, Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x0000007001118000`                 |
|  -99.1% | -66.375 KiB |  90.6% → 5.0% |    67 KiB → 592 B | 36 → 14 | `invoke(Object, Object, Object)`                                    | `java.lang.invoke.LambdaForm$MH.0x00000070012c5c00`                 |
| removed | -64.054 KiB |  86.7% → 0.0% |    64.1 KiB → 0 B |   2 → 0 | `validateXml(String)`                                               | `org.codenarc.ruleset.XmlReaderRuleSet`                             |
| -100.0% | -64.031 KiB |  86.7% → 0.2% |   64.1 KiB → 24 B |   2 → 1 | `ensureClassInitialized0(Class)`                                    | `jdk.internal.misc.Unsafe`                                          |
| -100.0% | -64.031 KiB |  86.7% → 0.2% |   64.1 KiB → 24 B |   2 → 1 | `ensureClassInitialized(Class)`                                     | `jdk.internal.misc.Unsafe`                                          |
| -100.0% | -64.031 KiB |  86.7% → 0.2% |   64.1 KiB → 24 B |   2 → 1 | `ensureClassInitialized(Class)`                                     | `jdk.internal.reflect.MethodHandleAccessorFactory`                  |
| -100.0% | -64.031 KiB |  86.7% → 0.2% |   64.1 KiB → 24 B |   2 → 1 | `newConstructorAccessor(Constructor)`                               | `jdk.internal.reflect.MethodHandleAccessorFactory`                  |
| -100.0% | -64.031 KiB |  86.7% → 0.2% |   64.1 KiB → 24 B |   2 → 1 | `newConstructorAccessor(Constructor)`                               | `jdk.internal.reflect.ReflectionFactory`                            |
| -100.0% | -64.031 KiB |  86.7% → 0.2% |   64.1 KiB → 24 B |   2 → 1 | `acquireConstructorAccessor()`                                      | `java.lang.reflect.Constructor`                                     |
|  -99.8% | -64.023 KiB |  86.8% → 1.2% |  64.2 KiB → 136 B |   4 → 2 | `newInvokeSpecial(Object, Object)`                                  | `java.lang.invoke.DirectMethodHandle$Holder`                        |
| removed | -64.015 KiB |  86.7% → 0.0% |      64 KiB → 0 B |   1 → 0 | `<clinit>()`                                                        | `com.sun.org.apache.xerces.internal.util.XMLChar`                   |
| removed | -64.015 KiB |  86.7% → 0.0% |      64 KiB → 0 B |   1 → 0 | `normalize(Object, short)`                                          | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl`    |
| removed | -64.015 KiB |  86.7% → 0.0% |      64 KiB → 0 B |   1 → 0 | `getActualValue(Object, ValidationContext, ValidatedInfo, boolean)` | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl`    |
| removed | -64.015 KiB |  86.7% → 0.0% |      64 KiB → 0 B |   1 → 0 | `applyFacets(XSFacets, short, short, short, ValidationContext)`     | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl`    |
| removed | -64.015 KiB |  86.7% → 0.0% |      64 KiB → 0 B |   1 → 0 | `applyFacets1(XSFacets, short, short)`                              | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl`    |
| removed | -64.015 KiB |  86.7% → 0.0% |      64 KiB → 0 B |   1 → 0 | `createBuiltInTypes(SymbolHash, XSSimpleTypeDecl)`                  | `com.sun.org.apache.xerces.internal.impl.dv.xs.BaseSchemaDVFactory` |
| removed | -64.015 KiB |  86.7% → 0.0% |      64 KiB → 0 B |   1 → 0 | `createBuiltInTypes()`                                              | `com.sun.org.apache.xerces.internal.impl.dv.xs.SchemaDVFactoryImpl` |
| removed | -64.015 KiB |  86.7% → 0.0% |      64 KiB → 0 B |   1 → 0 | `<clinit>()`                                                        | `com.sun.org.apache.xerces.internal.impl.dv.xs.SchemaDVFactoryImpl` |
| removed | -64.015 KiB |  86.7% → 0.0% |      64 KiB → 0 B |   1 → 0 | `newInstance(String, ClassLoader, boolean)`                         | `com.sun.org.apache.xerces.internal.utils.ObjectFactory`            |

##### Standard library

|  Change |       Delta |             % |              Size | Objects | Function                                                            | Location                                                            |
| ------: | ----------: | ------------: | ----------------: | ------: | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
|  -99.6% | -68.312 KiB |  92.9% → 2.4% |  68.6 KiB → 288 B |  67 → 5 | `invoke(Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001133000`                 |
|  -95.1% | -66.578 KiB | 94.8% → 29.7% | 70 KiB → 3.42 KiB | 66 → 57 | `reinvoke(Object, Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x0000007001118000`                 |
|  -99.1% | -66.375 KiB |  90.6% → 5.0% |    67 KiB → 592 B | 36 → 14 | `invoke(Object, Object, Object)`                                    | `java.lang.invoke.LambdaForm$MH.0x00000070012c5c00`                 |
| -100.0% | -64.031 KiB |  86.7% → 0.2% |   64.1 KiB → 24 B |   2 → 1 | `ensureClassInitialized0(Class)`                                    | `jdk.internal.misc.Unsafe`                                          |
| -100.0% | -64.031 KiB |  86.7% → 0.2% |   64.1 KiB → 24 B |   2 → 1 | `ensureClassInitialized(Class)`                                     | `jdk.internal.misc.Unsafe`                                          |
| -100.0% | -64.031 KiB |  86.7% → 0.2% |   64.1 KiB → 24 B |   2 → 1 | `ensureClassInitialized(Class)`                                     | `jdk.internal.reflect.MethodHandleAccessorFactory`                  |
| -100.0% | -64.031 KiB |  86.7% → 0.2% |   64.1 KiB → 24 B |   2 → 1 | `newConstructorAccessor(Constructor)`                               | `jdk.internal.reflect.MethodHandleAccessorFactory`                  |
| -100.0% | -64.031 KiB |  86.7% → 0.2% |   64.1 KiB → 24 B |   2 → 1 | `newConstructorAccessor(Constructor)`                               | `jdk.internal.reflect.ReflectionFactory`                            |
| -100.0% | -64.031 KiB |  86.7% → 0.2% |   64.1 KiB → 24 B |   2 → 1 | `acquireConstructorAccessor()`                                      | `java.lang.reflect.Constructor`                                     |
|  -99.8% | -64.023 KiB |  86.8% → 1.2% |  64.2 KiB → 136 B |   4 → 2 | `newInvokeSpecial(Object, Object)`                                  | `java.lang.invoke.DirectMethodHandle$Holder`                        |
| removed | -64.015 KiB |  86.7% → 0.0% |      64 KiB → 0 B |   1 → 0 | `<clinit>()`                                                        | `com.sun.org.apache.xerces.internal.util.XMLChar`                   |
| removed | -64.015 KiB |  86.7% → 0.0% |      64 KiB → 0 B |   1 → 0 | `normalize(Object, short)`                                          | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl`    |
| removed | -64.015 KiB |  86.7% → 0.0% |      64 KiB → 0 B |   1 → 0 | `getActualValue(Object, ValidationContext, ValidatedInfo, boolean)` | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl`    |
| removed | -64.015 KiB |  86.7% → 0.0% |      64 KiB → 0 B |   1 → 0 | `applyFacets(XSFacets, short, short, short, ValidationContext)`     | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl`    |
| removed | -64.015 KiB |  86.7% → 0.0% |      64 KiB → 0 B |   1 → 0 | `applyFacets1(XSFacets, short, short)`                              | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl`    |
| removed | -64.015 KiB |  86.7% → 0.0% |      64 KiB → 0 B |   1 → 0 | `createBuiltInTypes(SymbolHash, XSSimpleTypeDecl)`                  | `com.sun.org.apache.xerces.internal.impl.dv.xs.BaseSchemaDVFactory` |
| removed | -64.015 KiB |  86.7% → 0.0% |      64 KiB → 0 B |   1 → 0 | `createBuiltInTypes()`                                              | `com.sun.org.apache.xerces.internal.impl.dv.xs.SchemaDVFactoryImpl` |
| removed | -64.015 KiB |  86.7% → 0.0% |      64 KiB → 0 B |   1 → 0 | `<clinit>()`                                                        | `com.sun.org.apache.xerces.internal.impl.dv.xs.SchemaDVFactoryImpl` |
| removed | -64.015 KiB |  86.7% → 0.0% |      64 KiB → 0 B |   1 → 0 | `newInstance(String, ClassLoader, boolean)`                         | `com.sun.org.apache.xerces.internal.utils.ObjectFactory`            |
| removed | -64.015 KiB |  86.7% → 0.0% |      64 KiB → 0 B |   1 → 0 | `newInstance(String, boolean)`                                      | `com.sun.org.apache.xerces.internal.utils.ObjectFactory`            |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001150800`)

|  Change |      Delta |             % |           Size | Objects | Callee                             | Location                                            |
| ------: | ---------: | ------------: | -------------: | ------: | ---------------------------------- | --------------------------------------------------- |
|     new | +5.539 KiB | 0.0% → 100.0% | 0 B → 5.54 KiB |  0 → 28 | `invokeSpecial(Object, Object)`    | `java.lang.invoke.DirectMethodHandle$Holder`        |
| removed |     -176 B | 100.0% → 0.0% |    176 B → 0 B |   4 → 0 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c801118000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001830400`)

| Change |      Delta |             % |           Size | Objects | Callee                             | Location                                         |
| -----: | ---------: | ------------: | -------------: | ------: | ---------------------------------- | ------------------------------------------------ |
|    new | +5.109 KiB | 0.0% → 100.0% | 0 B → 5.11 KiB |  0 → 18 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070012d8400`)

|  Change |      Delta |             % |           Size | Objects | Callee                                  | Location                                             |
| ------: | ---------: | ------------: | -------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
|     new | +5.257 KiB | 0.0% → 100.0% | 0 B → 5.26 KiB |  0 → 23 | `invokeVirtual(Object, Object, int)`    | `java.lang.invoke.LambdaForm$DMH.0x0000007001152800` |
| removed |     -264 B | 100.0% → 0.0% |    264 B → 0 B |   6 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `grow(int)` (`java.util.ArrayList`)

|   Change |      Delta |             % |            Size | Objects | Callee                  | Location           |
| -------: | ---------: | ------------: | --------------: | ------: | ----------------------- | ------------------ |
| +1507.7% | +4.593 KiB | 73.6% → 93.7% | 312 B → 4.9 KiB |   1 → 2 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `grow()` (`java.util.ArrayList`)

|   Change |      Delta |      % |             Size | Objects | Callee      | Location              |
| -------: | ---------: | -----: | ---------------: | ------: | ----------- | --------------------- |
| +1162.3% | +4.812 KiB | 100.0% | 424 B → 5.23 KiB |   3 → 8 | `grow(int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|   Change |      Delta |      % |             Size | Objects | Callee   | Location              |
| -------: | ---------: | -----: | ---------------: | ------: | -------- | --------------------- |
| +1162.3% | +4.812 KiB | 100.0% | 424 B → 5.23 KiB |   3 → 8 | `grow()` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

|   Change |      Delta |      % |             Size | Objects | Callee                       | Location              |
| -------: | ---------: | -----: | ---------------: | ------: | ---------------------------- | --------------------- |
| +1162.3% | +4.812 KiB | 100.0% | 424 B → 5.23 KiB |   3 → 8 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `statement()` (`org.apache.groovy.parser.antlr4.GroovyParser`)

|   Change |      Delta |             % |             Size | Objects | Callee                                   | Location                                       |
| -------: | ---------: | ------------: | ---------------: | ------: | ---------------------------------------- | ---------------------------------------------- |
| +2284.6% |  +4.64 KiB | 83.9% → 98.3% | 208 B → 4.84 KiB |  6 → 12 | `statementExpression()`                  | `org.apache.groovy.parser.antlr4.GroovyParser` |
| +3458.8% | +4.593 KiB | 54.8% → 95.9% | 136 B → 4.73 KiB |   3 → 9 | `statement()`                            | `org.apache.groovy.parser.antlr4.GroovyParser` |
|  removed |      -56 B |  22.6% → 0.0% |       56 B → 0 B |   1 → 0 | `enterRule(ParserRuleContext, int, int)` | `groovyjarjarantlr4.v4.runtime.Parser`         |
|      new |      +56 B |   0.0% → 1.1% |       0 B → 56 B |   0 → 1 | `localVariableDeclaration()`             | `org.apache.groovy.parser.antlr4.GroovyParser` |
|  removed |      -40 B |  16.1% → 0.0% |       40 B → 0 B |   1 → 0 | `nls()`                                  | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `blockStatements()` (`org.apache.groovy.parser.antlr4.GroovyParser`)

|   Change |      Delta |              % |             Size | Objects | Callee             | Location                                       |
| -------: | ---------: | -------------: | ---------------: | ------: | ------------------ | ---------------------------------------------- |
| +1278.3% | +4.593 KiB | 100.0% → 98.9% | 368 B → 4.95 KiB | 10 → 15 | `blockStatement()` | `org.apache.groovy.parser.antlr4.GroovyParser` |
|      new |      +56 B |    0.0% → 1.1% |       0 B → 56 B |   0 → 1 | `sep()`            | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `blockStatementsOpt()` (`org.apache.groovy.parser.antlr4.GroovyParser`)

|   Change |      Delta |      % |             Size | Objects | Callee              | Location                                       |
| -------: | ---------: | -----: | ---------------: | ------: | ------------------- | ---------------------------------------------- |
| +1293.5% | +4.648 KiB | 100.0% | 368 B → 5.01 KiB | 10 → 16 | `blockStatements()` | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `block()` (`org.apache.groovy.parser.antlr4.GroovyParser`)

|   Change |      Delta |      % |             Size | Objects | Callee                 | Location                                       |
| -------: | ---------: | -----: | ---------------: | ------: | ---------------------- | ---------------------------------------------- |
| +1293.5% | +4.648 KiB | 100.0% | 368 B → 5.01 KiB | 10 → 16 | `blockStatementsOpt()` | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `methodBody()` (`org.apache.groovy.parser.antlr4.GroovyParser`)

|   Change |      Delta |      % |             Size | Objects | Callee    | Location                                       |
| -------: | ---------: | -----: | ---------------: | ------: | --------- | ---------------------------------------------- |
| +1293.5% | +4.648 KiB | 100.0% | 368 B → 5.01 KiB | 10 → 16 | `block()` | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `commandExpression()` (`org.apache.groovy.parser.antlr4.GroovyParser`)

|   Change |      Delta |              % |             Size | Objects | Callee                                   | Location                                       |
| -------: | ---------: | -------------: | ---------------: | ------: | ---------------------------------------- | ---------------------------------------------- |
| +1864.5% | +4.515 KiB | 100.0% → 97.8% | 248 B → 4.76 KiB |   7 → 9 | `expression(int)`                        | `org.apache.groovy.parser.antlr4.GroovyParser` |
|      new |      +88 B |    0.0% → 1.8% |       0 B → 88 B |   0 → 3 | `argumentList()`                         | `org.apache.groovy.parser.antlr4.GroovyParser` |
|      new |      +24 B |    0.0% → 0.5% |       0 B → 24 B |   0 → 1 | `enterRule(ParserRuleContext, int, int)` | `groovyjarjarantlr4.v4.runtime.Parser`         |

##### `statementExpression()` (`org.apache.groovy.parser.antlr4.GroovyParser`)

|   Change |      Delta |      % |             Size | Objects | Callee                | Location                                       |
| -------: | ---------: | -----: | ---------------: | ------: | --------------------- | ---------------------------------------------- |
| +1909.7% | +4.625 KiB | 100.0% | 248 B → 4.87 KiB |  7 → 13 | `commandExpression()` | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `methodDeclaration(int, int)` (`org.apache.groovy.parser.antlr4.GroovyParser`)

|   Change |      Delta |             % |             Size | Objects | Callee           | Location                                       |
| -------: | ---------: | ------------: | ---------------: | ------: | ---------------- | ---------------------------------------------- |
| +1293.5% | +4.648 KiB | 82.1% → 99.1% | 368 B → 5.01 KiB | 10 → 16 | `methodBody()`   | `org.apache.groovy.parser.antlr4.GroovyParser` |
|  removed |      -80 B |  17.9% → 0.0% |       80 B → 0 B |   2 → 0 | `modifiersOpt()` | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `memberDeclaration(int)` (`org.apache.groovy.parser.antlr4.GroovyParser`)

|   Change |      Delta |      % |             Size | Objects | Callee                        | Location                                       |
| -------: | ---------: | -----: | ---------------: | ------: | ----------------------------- | ---------------------------------------------- |
| +1055.4% | +4.617 KiB | 100.0% | 448 B → 5.05 KiB | 12 → 17 | `methodDeclaration(int, int)` | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `classBodyDeclaration(int)` (`org.apache.groovy.parser.antlr4.GroovyParser`)

|   Change |      Delta |      % |             Size | Objects | Callee                   | Location                                       |
| -------: | ---------: | -----: | ---------------: | ------: | ------------------------ | ---------------------------------------------- |
| +1055.4% | +4.617 KiB | 100.0% | 448 B → 5.05 KiB | 12 → 17 | `memberDeclaration(int)` | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `classBody(int)` (`org.apache.groovy.parser.antlr4.GroovyParser`)

|   Change |      Delta |      % |             Size | Objects | Callee                      | Location                                       |
| -------: | ---------: | -----: | ---------------: | ------: | --------------------------- | ---------------------------------------------- |
| +1055.4% | +4.617 KiB | 100.0% | 448 B → 5.05 KiB | 12 → 17 | `classBodyDeclaration(int)` | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `classDeclaration()` (`org.apache.groovy.parser.antlr4.GroovyParser`)

|   Change |      Delta |      % |             Size | Objects | Callee           | Location                                       |
| -------: | ---------: | -----: | ---------------: | ------: | ---------------- | ---------------------------------------------- |
| +1055.4% | +4.617 KiB | 100.0% | 448 B → 5.05 KiB | 12 → 17 | `classBody(int)` | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `typeDeclaration()` (`org.apache.groovy.parser.antlr4.GroovyParser`)

|   Change |      Delta |      % |             Size | Objects | Callee               | Location                                       |
| -------: | ---------: | -----: | ---------------: | ------: | -------------------- | ---------------------------------------------- |
| +1055.4% | +4.617 KiB | 100.0% | 448 B → 5.05 KiB | 12 → 17 | `classDeclaration()` | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001133000`)

|  Change |       Delta |              % |             Size | Objects | Callee                             | Location                                            |
| ------: | ----------: | -------------: | ---------------: | ------: | ---------------------------------- | --------------------------------------------------- |
|  -99.6% | -66.445 KiB | 97.3% → 100.0% | 66.7 KiB → 288 B |  42 → 5 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001118000` |
| removed |  -1.867 KiB |    2.7% → 0.0% |   1.87 KiB → 0 B |  25 → 0 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `reinvoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001118000`)

|  Change |       Delta |             % |                Size | Objects | Callee                                   | Location                                            |
| ------: | ----------: | ------------: | ------------------: | ------: | ---------------------------------------- | --------------------------------------------------- |
|  -95.1% | -66.578 KiB |        100.0% |   70 KiB → 3.42 KiB | 66 → 57 | `guardWithCatch(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001117800` |
|  -95.2% | -66.312 KiB | 99.5% → 97.5% | 69.6 KiB → 3.34 KiB | 63 → 56 | `guard(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x0000007001118400` |
|     new |      +720 B |  0.0% → 20.5% |         0 B → 720 B |   0 → 7 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070013dd400` |
|  -76.7% |      -528 B |   1.0% → 4.6% |       688 B → 160 B |   4 → 3 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001115400` |
| removed |      -232 B |   0.3% → 0.0% |         232 B → 0 B |   6 → 0 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000c8013dd400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070012c5c00`)

|  Change |       Delta |              % |             Size | Objects | Callee                                  | Location                                             |
| ------: | ----------: | -------------: | ---------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
|  -99.1% | -63.523 KiB | 95.7% → 100.0% | 64.1 KiB → 592 B |  2 → 14 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001101c00` |
| removed |  -2.851 KiB |    4.3% → 0.0% |   2.85 KiB → 0 B |  34 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `validateXml(String)` (`org.codenarc.ruleset.XmlReaderRuleSet`)

|  Change |       Delta |             % |           Size | Objects | Callee                                   | Location                           |
| ------: | ----------: | ------------: | -------------: | ------: | ---------------------------------------- | ---------------------------------- |
| removed | -64.054 KiB | 100.0% → 0.0% | 64.1 KiB → 0 B |   2 → 0 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `ensureClassInitialized0(Class)` (`jdk.internal.misc.Unsafe`)

|  Change |       Delta |             % |         Size | Objects | Callee       | Location                                                            |
| ------: | ----------: | ------------: | -----------: | ------: | ------------ | ------------------------------------------------------------------- |
| removed | -64.015 KiB |  99.9% → 0.0% | 64 KiB → 0 B |   1 → 0 | `<clinit>()` | `com.sun.org.apache.xerces.internal.impl.dv.xs.SchemaDVFactoryImpl` |
|  -40.0% |       -16 B | 0.1% → 100.0% |  40 B → 24 B |       1 | `<clinit>()` | `org.codehaus.groovy.vmplugin.v9.Java9`                             |

##### `ensureClassInitialized(Class)` (`jdk.internal.misc.Unsafe`)

|  Change |       Delta |      % |            Size | Objects | Callee                           | Location                   |
| ------: | ----------: | -----: | --------------: | ------: | -------------------------------- | -------------------------- |
| -100.0% | -64.031 KiB | 100.0% | 64.1 KiB → 24 B |   2 → 1 | `ensureClassInitialized0(Class)` | `jdk.internal.misc.Unsafe` |

##### `ensureClassInitialized(Class)` (`jdk.internal.reflect.MethodHandleAccessorFactory`)

|  Change |       Delta |      % |            Size | Objects | Callee                          | Location                   |
| ------: | ----------: | -----: | --------------: | ------: | ------------------------------- | -------------------------- |
| -100.0% | -64.031 KiB | 100.0% | 64.1 KiB → 24 B |   2 → 1 | `ensureClassInitialized(Class)` | `jdk.internal.misc.Unsafe` |

##### `newConstructorAccessor(Constructor)` (`jdk.internal.reflect.MethodHandleAccessorFactory`)

|  Change |       Delta |      % |            Size | Objects | Callee                          | Location                                           |
| ------: | ----------: | -----: | --------------: | ------: | ------------------------------- | -------------------------------------------------- |
| -100.0% | -64.031 KiB | 100.0% | 64.1 KiB → 24 B |   2 → 1 | `ensureClassInitialized(Class)` | `jdk.internal.reflect.MethodHandleAccessorFactory` |

##### `newConstructorAccessor(Constructor)` (`jdk.internal.reflect.ReflectionFactory`)

|  Change |       Delta |      % |            Size | Objects | Callee                                | Location                                           |
| ------: | ----------: | -----: | --------------: | ------: | ------------------------------------- | -------------------------------------------------- |
| -100.0% | -64.031 KiB | 100.0% | 64.1 KiB → 24 B |   2 → 1 | `newConstructorAccessor(Constructor)` | `jdk.internal.reflect.MethodHandleAccessorFactory` |

##### `acquireConstructorAccessor()` (`java.lang.reflect.Constructor`)

|  Change |       Delta |      % |            Size | Objects | Callee                                | Location                                 |
| ------: | ----------: | -----: | --------------: | ------: | ------------------------------------- | ---------------------------------------- |
| -100.0% | -64.031 KiB | 100.0% | 64.1 KiB → 24 B |   2 → 1 | `newConstructorAccessor(Constructor)` | `jdk.internal.reflect.ReflectionFactory` |

##### `newInvokeSpecial(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|  Change |       Delta |              % |             Size | Objects | Callee                     | Location                                |
| ------: | ----------: | -------------: | ---------------: | ------: | -------------------------- | --------------------------------------- |
|  -99.8% | -63.921 KiB | 99.8% → 100.0% | 64.1 KiB → 136 B |       2 | `<init>(Reader)`           | `org.codenarc.ruleset.XmlReaderRuleSet` |
| removed |       -88 B |    0.1% → 0.0% |       88 B → 0 B |   1 → 0 | `<init>(File)`             | `org.codenarc.source.SourceFile`        |
|     new |       +48 B |   0.0% → 35.3% |       0 B → 48 B |   0 → 1 | `<init>(String)`           | `org.codenarc.ruleset.XmlFileRuleSet`   |
| removed |       -16 B |   <0.1% → 0.0% |       16 B → 0 B |   1 → 0 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle`   |

##### `normalize(Object, short)` (`com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl`)

|  Change |       Delta |             % |         Size | Objects | Callee       | Location                                          |
| ------: | ----------: | ------------: | -----------: | ------: | ------------ | ------------------------------------------------- |
| removed | -64.015 KiB | 100.0% → 0.0% | 64 KiB → 0 B |   1 → 0 | `<clinit>()` | `com.sun.org.apache.xerces.internal.util.XMLChar` |

##### `getActualValue(Object, ValidationContext, ValidatedInfo, boolean)` (`com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl`)

|  Change |       Delta |             % |         Size | Objects | Callee                     | Location                                                         |
| ------: | ----------: | ------------: | -----------: | ------: | -------------------------- | ---------------------------------------------------------------- |
| removed | -64.015 KiB | 100.0% → 0.0% | 64 KiB → 0 B |   1 → 0 | `normalize(Object, short)` | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl` |

##### `applyFacets(XSFacets, short, short, short, ValidationContext)` (`com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl`)

|  Change |       Delta |             % |         Size | Objects | Callee                                                              | Location                                                         |
| ------: | ----------: | ------------: | -----------: | ------: | ------------------------------------------------------------------- | ---------------------------------------------------------------- |
| removed | -64.015 KiB | 100.0% → 0.0% | 64 KiB → 0 B |   1 → 0 | `getActualValue(Object, ValidationContext, ValidatedInfo, boolean)` | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl` |

##### `applyFacets1(XSFacets, short, short)` (`com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl`)

|  Change |       Delta |             % |         Size | Objects | Callee                                                          | Location                                                         |
| ------: | ----------: | ------------: | -----------: | ------: | --------------------------------------------------------------- | ---------------------------------------------------------------- |
| removed | -64.015 KiB | 100.0% → 0.0% | 64 KiB → 0 B |   1 → 0 | `applyFacets(XSFacets, short, short, short, ValidationContext)` | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl` |

##### `createBuiltInTypes(SymbolHash, XSSimpleTypeDecl)` (`com.sun.org.apache.xerces.internal.impl.dv.xs.BaseSchemaDVFactory`)

|  Change |       Delta |             % |         Size | Objects | Callee                                 | Location                                                         |
| ------: | ----------: | ------------: | -----------: | ------: | -------------------------------------- | ---------------------------------------------------------------- |
| removed | -64.015 KiB | 100.0% → 0.0% | 64 KiB → 0 B |   1 → 0 | `applyFacets1(XSFacets, short, short)` | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl` |

##### `createBuiltInTypes()` (`com.sun.org.apache.xerces.internal.impl.dv.xs.SchemaDVFactoryImpl`)

|  Change |       Delta |             % |         Size | Objects | Callee                                             | Location                                                            |
| ------: | ----------: | ------------: | -----------: | ------: | -------------------------------------------------- | ------------------------------------------------------------------- |
| removed | -64.015 KiB | 100.0% → 0.0% | 64 KiB → 0 B |   1 → 0 | `createBuiltInTypes(SymbolHash, XSSimpleTypeDecl)` | `com.sun.org.apache.xerces.internal.impl.dv.xs.BaseSchemaDVFactory` |

##### `<clinit>()` (`com.sun.org.apache.xerces.internal.impl.dv.xs.SchemaDVFactoryImpl`)

|  Change |       Delta |             % |         Size | Objects | Callee                 | Location                                                            |
| ------: | ----------: | ------------: | -----------: | ------: | ---------------------- | ------------------------------------------------------------------- |
| removed | -64.015 KiB | 100.0% → 0.0% | 64 KiB → 0 B |   1 → 0 | `createBuiltInTypes()` | `com.sun.org.apache.xerces.internal.impl.dv.xs.SchemaDVFactoryImpl` |

##### `newInstance(String, ClassLoader, boolean)` (`com.sun.org.apache.xerces.internal.utils.ObjectFactory`)

|  Change |       Delta |             % |         Size | Objects | Callee                  | Location                        |
| ------: | ----------: | ------------: | -----------: | ------: | ----------------------- | ------------------------------- |
| removed | -64.015 KiB | 100.0% → 0.0% | 64 KiB → 0 B |   1 → 0 | `newInstance(Object[])` | `java.lang.reflect.Constructor` |

##### `newInstance(String, boolean)` (`com.sun.org.apache.xerces.internal.utils.ObjectFactory`)

|  Change |       Delta |             % |         Size | Objects | Callee                                      | Location                                                 |
| ------: | ----------: | ------------: | -----------: | ------: | ------------------------------------------- | -------------------------------------------------------- |
| removed | -64.015 KiB | 100.0% → 0.0% | 64 KiB → 0 B |   1 → 0 | `newInstance(String, ClassLoader, boolean)` | `com.sun.org.apache.xerces.internal.utils.ObjectFactory` |
