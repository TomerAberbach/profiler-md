# Sampling profile diff

Collected 310 samples → 334 samples (+24 samples, +7.7%).

| Category         | Change | Delta |             % |   Samples |
| ---------------- | -----: | ----: | ------------: | --------: |
| Standard library |  +7.2% |   +22 | 98.1% → 97.6% | 304 → 326 |
| Ours             | +33.3% |    +2 |   1.9% → 2.4% |     6 → 8 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

##### Standard library

|  Change | Delta |            % | Samples | Function                                                      | Location                                                          |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------- | ----------------------------------------------------------------- |
| +126.7% |   +19 | 4.8% → 10.2% | 15 → 34 | `newArray(Class, int)`                                        | `java.lang.reflect.Array`                                         |
| +114.3% |    +8 |  2.3% → 4.5% |  7 → 15 | `putVal(int, Object, Object, boolean, boolean)`               | `java.util.HashMap`                                               |
| +250.0% |    +5 |  0.6% → 2.1% |   2 → 7 | `resize()`                                                    | `java.util.HashMap`                                               |
|     new |    +4 |  0.0% → 1.2% |   0 → 4 | `getCachedContext(PredictionContext)`                         | `groovyjarjarantlr4.v4.runtime.atn.ATN`                           |
| +300.0% |    +3 |  0.3% → 1.2% |   1 → 4 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                                          |
|     new |    +3 |  0.0% → 0.9% |   0 → 3 | `chooseMeta(MetaClassImpl)`                                   | `org.codehaus.groovy.vmplugin.v8.Selector$PropertySelector`       |
|     new |    +3 |  0.0% → 0.9% |   0 → 3 | `transform(ATNState, boolean)`                                | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`                     |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `invokeSpecial(Object, Object, Object)`                       | `java.lang.invoke.DirectMethodHandle$Holder`                      |
|  +20.0% |    +2 |  3.2% → 3.6% | 10 → 12 | `getNode(Object)`                                             | `java.util.HashMap`                                               |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `add(ATNConfig, PredictionContextCache)`                      | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`                  |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `insertParameterTypes(int, Class[])`                          | `java.lang.invoke.MethodType`                                     |
|  +33.3% |    +2 |  1.9% → 2.4% |   6 → 8 | `getReturnState(int)`                                         | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext`        |
|  +50.0% |    +2 |  1.3% → 1.8% |   4 → 6 | `matches(Method, String, Class[])`                            | `java.lang.PublicMethods$Key`                                     |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `getMethodsRecursive(String, Class[], boolean)`               | `java.lang.Class`                                                 |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `compile()`                                                   | `java.util.regex.Pattern`                                         |
| +100.0% |    +2 |  0.6% → 1.2% |   2 → 4 | `compare(MutableBigInteger)`                                  | `java.math.MutableBigInteger`                                     |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `getInfoNullable()`                                           | `org.codehaus.groovy.runtime.GroovyCategorySupport$MyThreadLocal` |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `readBytes0(byte[], int, int)`                                | `java.io.RandomAccessFile`                                        |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `getExactSizeIfKnown()`                                       | `java.util.Spliterator`                                           |
|     new |    +2 |  0.0% → 0.6% |   0 → 2 | `asCollector(int, Class, int)`                                | `java.lang.invoke.MethodHandle`                                   |

##### Ours

| Change | Delta |           % | Samples | Function                                                 | Location                                                                              |
| -----: | ----: | ----------: | ------: | -------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `collectViolations(SourceCode, RuleSet)`                 | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                        |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `addViolationForSunImport(ImportNode, SourceCode, List)` | `org.codenarc.rule.imports.ImportFromSunPackagesRule`                                 |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `matches(SourceCode)`                                    | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                                      |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `visitClassComplete(ClassNode)`                          | `org.codenarc.rule.convention.StaticFieldsBeforeInstanceFieldsAstVisitor`             |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `<init>()`                                               | `org.codenarc.rule.AbstractAstVisitor`                                                |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `doCall(Object)`                                         | `org.codenarc.rule.unused.UnusedPrivateMethodRule$_collectAllPrivateMethods_closure2` |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `visitPropertyExpression(PropertyExpression)`            | `org.gmetrics.metric.abc.AbcAstVisitor`                                               |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `getMetaClass()`                                         | `org.codenarc.rule.formatting.ClassStartsWithBlankLineRule`                           |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                      | Location                                                                   |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
|  -70.0% |    -7 | 3.2% → 0.9% |  10 → 3 | `get(Object)`                                                                                 | `java.util.concurrent.ConcurrentHashMap`                                   |
|  -42.9% |    -3 | 2.3% → 1.2% |   7 → 4 | `getReachableTarget(Transition, int)`                                                         | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`                      |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `join(PredictionContext, PredictionContext, PredictionContextCache)`                          | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`                      |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)`                                  | `java.math.MutableBigInteger`                                              |
| removed |    -3 | 1.0% → 0.0% |   3 → 0 | `invokeStatic(Object, Object, Object)`                                                        | `java.lang.invoke.DirectMethodHandle$Holder`                               |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `evaluateToArrayNode(IntFunction)`                                                            | `java.util.stream.AbstractPipeline`                                        |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                                         |
|  -66.7% |    -2 | 1.0% → 0.3% |   3 → 1 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                            |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `invokeVirtual(Object, Object)`                                                               | `java.lang.invoke.DirectMethodHandle$Holder`                               |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `invokeMethod(Class, Object, String, Object[], boolean, boolean)`                             | `groovy.lang.MetaClassImpl`                                                |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `binarySearch(Object[], Object, Comparator)`                                                  | `java.util.Arrays`                                                         |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `provide(Object)`                                                                             | `org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x000000a8010b6d70` |
|  -66.7% |    -2 | 1.0% → 0.3% |   3 → 1 | `isAssignableFrom(Class)`                                                                     | `java.lang.Class`                                                          |
|  -66.7% |    -2 | 1.0% → 0.3% |   3 → 1 | `checkCustomized(MethodHandle)`                                                               | `java.lang.invoke.Invokers`                                                |
|  -66.7% |    -2 | 1.0% → 0.3% |   3 → 1 | `valueConversion(Class, Class, boolean, boolean)`                                             | `java.lang.invoke.MethodHandleImpl`                                        |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000a801476800`                        |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `equals(Object[], Object[])`                                                                  | `java.util.Arrays`                                                         |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `equals(MethodType)`                                                                          | `java.lang.invoke.MethodType`                                              |
|  -66.7% |    -2 | 1.0% → 0.3% |   3 → 1 | `hashCodeRange(int, int)`                                                                     | `java.util.ArrayList`                                                      |
| removed |    -2 | 0.6% → 0.0% |   2 → 0 | `put(Object, Object)`                                                                         | `groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap`                       |

##### Ours

|  Change | Delta |           % | Samples | Function                                                  | Location                                                                                 |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `processMethodNode(MethodNode)`                           | `org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`                         |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `calculate(MethodNode, SourceCode)`                       | `org.gmetrics.metric.abc.AbcMetric`                                                      |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `<init>(Object, Object, Reference)`                       | `org.codenarc.rule.design.OptionalMethodParameterAstVisitor$_processParameters_closure1` |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `<init>(Object, Object, Reference, Reference, Reference)` | `org.codenarc.rule.unused.UnusedPrivateMethodRule$_getViolations_closure1`               |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `addViolation(String, int)`                               | `org.codenarc.rule.formatting.ClassStartsWithBlankLineAstVisitor`                        |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `getMetaClass()`                                          | `org.codenarc.rule.unnecessary.UnnecessaryTernaryExpressionRule`                         |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
|     new |    +4 |  0.0% → 26.7% |   0 → 4 | `java.util.HashMap:644` |
| +200.0% |    +2 | 14.3% → 20.0% |   1 → 3 | `java.util.HashMap:635` |
| +100.0% |    +1 | 14.3% → 13.3% |   1 → 2 | `java.util.HashMap:641` |
|  -33.3% |    -1 | 42.9% → 13.3% |   3 → 2 | `java.util.HashMap:670` |
|     new |    +1 |   0.0% → 6.7% |   0 → 1 | `java.util.HashMap:648` |

##### `resize()` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| +300.0% |    +3 | 50.0% → 57.1% |   1 → 4 | `java.util.HashMap:741` |
|     new |    +3 |  0.0% → 42.9% |   0 → 3 | `java.util.HashMap:710` |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `java.util.HashMap:720` |

##### `getCachedContext(PredictionContext)` (`groovyjarjarantlr4.v4.runtime.atn.ATN`)

| Change | Delta |             % | Samples | Location                                    |
| -----: | ----: | ------------: | ------: | ------------------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `groovyjarjarantlr4.v4.runtime.atn.ATN:120` |

##### `chooseMeta(MetaClassImpl)` (`org.codehaus.groovy.vmplugin.v8.Selector$PropertySelector`)

| Change | Delta |            % | Samples | Location                                                        |
| -----: | ----: | -----------: | ------: | --------------------------------------------------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `org.codehaus.groovy.vmplugin.v8.Selector$PropertySelector:317` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `org.codehaus.groovy.vmplugin.v8.Selector$PropertySelector:327` |

##### `transform(ATNState, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfig`)

| Change | Delta |             % | Samples | Location                                          |
| -----: | ----: | ------------: | ------: | ------------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig:203` |

##### `getNode(Object)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
|  +25.0% |    +2 | 80.0% → 83.3% |  8 → 10 | `java.util.HashMap:582` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `java.util.HashMap:578` |
| +100.0% |    +1 | 10.0% → 16.7% |   1 → 2 | `java.util.HashMap:587` |

##### `add(ATNConfig, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`)

| Change | Delta |             % | Samples | Location                                             |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet:254` |

##### `insertParameterTypes(int, Class[])` (`java.lang.invoke.MethodType`)

| Change | Delta |             % | Samples | Location                          |
| -----: | ----: | ------------: | ------: | --------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.lang.invoke.MethodType:508` |

##### `getReturnState(int)` (`groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext`)

| Change | Delta |      % | Samples | Location                                                      |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------- |
| +33.3% |    +2 | 100.0% |   6 → 8 | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext:50` |

##### `matches(Method, String, Class[])` (`java.lang.PublicMethods$Key`)

| Change | Delta |      % | Samples | Location                          |
| -----: | ----: | -----: | ------: | --------------------------------- |
| +50.0% |    +2 | 100.0% |   4 → 6 | `java.lang.PublicMethods$Key:108` |

##### `getMethodsRecursive(String, Class[], boolean)` (`java.lang.Class`)

| Change | Delta |             % | Samples | Location               |
| -----: | ----: | ------------: | ------: | ---------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.lang.Class:3735` |

##### `compile()` (`java.util.regex.Pattern`)

| Change | Delta |            % | Samples | Location                       |
| -----: | ----: | -----------: | ------: | ------------------------------ |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `java.util.regex.Pattern:1931` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `java.util.regex.Pattern:1975` |

##### `compare(MutableBigInteger)` (`java.math.MutableBigInteger`)

| Change | Delta |              % | Samples | Location                          |
| -----: | ----: | -------------: | ------: | --------------------------------- |
| +50.0% |    +1 | 100.0% → 75.0% |   2 → 3 | `java.math.MutableBigInteger:274` |
|    new |    +1 |   0.0% → 25.0% |   0 → 1 | `java.math.MutableBigInteger:279` |

##### `getInfoNullable()` (`org.codehaus.groovy.runtime.GroovyCategorySupport$MyThreadLocal`)

| Change | Delta |             % | Samples | Location                                                              |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `org.codehaus.groovy.runtime.GroovyCategorySupport$MyThreadLocal:351` |

##### `getExactSizeIfKnown()` (`java.util.Spliterator`)

| Change | Delta |             % | Samples | Location                    |
| -----: | ----: | ------------: | ------: | --------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.util.Spliterator:414` |

##### `asCollector(int, Class, int)` (`java.lang.invoke.MethodHandle`)

| Change | Delta |            % | Samples | Location                             |
| -----: | ----: | -----------: | ------: | ------------------------------------ |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `java.lang.invoke.MethodHandle:1332` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `java.lang.invoke.MethodHandle:1336` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

| Change | Delta |             % | Samples | Location                                          |
| -----: | ----: | ------------: | ------: | ------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.analyzer.AbstractSourceAnalyzer:43` |

##### `addViolationForSunImport(ImportNode, SourceCode, List)` (`org.codenarc.rule.imports.ImportFromSunPackagesRule`)

| Change | Delta |             % | Samples | Location                                                 |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.rule.imports.ImportFromSunPackagesRule:45` |

##### `matches(SourceCode)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

| Change | Delta |             % | Samples | Location                                             |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.analyzer.FilesystemSourceAnalyzer:143` |

##### `<init>()` (`org.codenarc.rule.AbstractAstVisitor`)

| Change | Delta |             % | Samples | Location                                  |
| -----: | ----: | ------------: | ------: | ----------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.rule.AbstractAstVisitor:39` |

##### `doCall(Object)` (`org.codenarc.rule.unused.UnusedPrivateMethodRule$_collectAllPrivateMethods_closure2`)

| Change | Delta |             % | Samples | Location                                                                                 |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.rule.unused.UnusedPrivateMethodRule$_collectAllPrivateMethods_closure2:76` |

##### `visitPropertyExpression(PropertyExpression)` (`org.gmetrics.metric.abc.AbcAstVisitor`)

| Change | Delta |             % | Samples | Location                                   |
| -----: | ----: | ------------: | ------: | ------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.gmetrics.metric.abc.AbcAstVisitor:76` |

##### `get(Object)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change | Delta |             % | Samples | Location                                     |
| ------: | ----: | ------------: | ------: | -------------------------------------------- |
|  -75.0% |    -3 | 40.0% → 33.3% |   4 → 1 | `java.util.concurrent.ConcurrentHashMap:940` |
| removed |    -2 |  20.0% → 0.0% |   2 → 0 | `java.util.concurrent.ConcurrentHashMap:943` |
|  -50.0% |    -2 | 40.0% → 66.7% |   4 → 2 | `java.util.concurrent.ConcurrentHashMap:946` |

##### `getReachableTarget(Transition, int)` (`groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`)

| Change | Delta |      % | Samples | Location                                                  |
| -----: | ----: | -----: | ------: | --------------------------------------------------------- |
| -42.9% |    -3 | 100.0% |   7 → 4 | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator:367` |

##### `join(PredictionContext, PredictionContext, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContext`)

|  Change | Delta |            % | Samples | Location                                                  |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext:141` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext:148` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext:188` |

##### `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)` (`java.math.MutableBigInteger`)

|  Change | Delta |             % | Samples | Location                           |
| ------: | ----: | ------------: | ------: | ---------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `java.math.MutableBigInteger:1208` |

##### `evaluateToArrayNode(IntFunction)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.util.stream.AbstractPipeline:260` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change | Delta |      % | Samples | Location                                            |
| -----: | ----: | -----: | ------: | --------------------------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `org.codehaus.groovy.vmplugin.v8.IndyInterface:298` |

##### `invokeMethod(Class, Object, String, Object[], boolean, boolean)` (`groovy.lang.MetaClassImpl`)

|  Change | Delta |             % | Samples | Location                         |
| ------: | ----: | ------------: | ------: | -------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `groovy.lang.MetaClassImpl:1088` |

##### `binarySearch(Object[], Object, Comparator)` (`java.util.Arrays`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.util.Arrays:2278` |

##### `checkCustomized(MethodHandle)` (`java.lang.invoke.Invokers`)

| Change | Delta |      % | Samples | Location                        |
| -----: | ----: | -----: | ------: | ------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `java.lang.invoke.Invokers:627` |

##### `valueConversion(Class, Class, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

| Change | Delta |      % | Samples | Location                                |
| -----: | ----: | -----: | ------: | --------------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `java.lang.invoke.MethodHandleImpl:404` |

##### `equals(Object[], Object[])` (`java.util.Arrays`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.util.Arrays:2979` |

##### `equals(MethodType)` (`java.lang.invoke.MethodType`)

|  Change | Delta |             % | Samples | Location                          |
| ------: | ----: | ------------: | ------: | --------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.lang.invoke.MethodType:908` |

##### `hashCodeRange(int, int)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Location                  |
| -----: | ----: | -----: | ------: | ------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `java.util.ArrayList:677` |

##### `put(Object, Object)` (`groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap`)

|  Change | Delta |             % | Samples | Location                                                 |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap:108` |

##### `processMethodNode(MethodNode)` (`org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`)

|  Change | Delta |             % | Samples | Location                                                             |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor:110` |

##### `calculate(MethodNode, SourceCode)` (`org.gmetrics.metric.abc.AbcMetric`)

|  Change | Delta |             % | Samples | Location                               |
| ------: | ----: | ------------: | ------: | -------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.gmetrics.metric.abc.AbcMetric:65` |

##### `addViolation(String, int)` (`org.codenarc.rule.formatting.ClassStartsWithBlankLineAstVisitor`)

|  Change | Delta |             % | Samples | Location                                                              |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.rule.formatting.ClassStartsWithBlankLineAstVisitor:152` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `newArray(Class, int)` (`java.lang.reflect.Array`)

|  Change | Delta |      % | Samples | Caller                    | Location                  |
| ------: | ----: | -----: | ------: | ------------------------- | ------------------------- |
| +126.7% |   +19 | 100.0% | 15 → 34 | `newInstance(Class, int)` | `java.lang.reflect.Array` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change | Delta |      % | Samples | Caller                | Location            |
| ------: | ----: | -----: | ------: | --------------------- | ------------------- |
| +114.3% |    +8 | 100.0% |  7 → 15 | `put(Object, Object)` | `java.util.HashMap` |

##### `resize()` (`java.util.HashMap`)

|  Change | Delta |      % | Samples | Caller                                          | Location            |
| ------: | ----: | -----: | ------: | ----------------------------------------------- | ------------------- |
| +250.0% |    +5 | 100.0% |   2 → 7 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `getCachedContext(PredictionContext)` (`groovyjarjarantlr4.v4.runtime.atn.ATN`)

| Change | Delta |             % | Samples | Caller                          | Location                                         |
| -----: | ----: | ------------: | ------: | ------------------------------- | ------------------------------------------------ |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `optimizeConfigs(ATNSimulator)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|  Change | Delta |      % | Samples | Caller                      | Location                 |
| ------: | ----: | -----: | ------: | --------------------------- | ------------------------ |
| +300.0% |    +3 | 100.0% |   1 → 4 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |

##### `chooseMeta(MetaClassImpl)` (`org.codehaus.groovy.vmplugin.v8.Selector$PropertySelector`)

| Change | Delta |             % | Samples | Caller                | Location                                                  |
| -----: | ----: | ------------: | ------: | --------------------- | --------------------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `setCallSiteTarget()` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `transform(ATNState, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfig`)

| Change | Delta |            % | Samples | Caller                                                                                       | Location                                               |
| -----: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `getEpsilonTarget(ATNConfig, Transition, boolean, boolean, PredictionContextCache, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `actionTransition(ATNConfig, ActionTransition)`                                              | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `invokeSpecial(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

| Change | Delta |             % | Samples | Caller                   | Location                                            |
| -----: | ----: | ------------: | ------: | ------------------------ | --------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a801002c00` |

##### `getNode(Object)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller        | Location                  |
| ------: | ----: | ------------: | ------: | ------------- | ------------------------- |
| +100.0% |    +3 | 30.0% → 50.0% |   3 → 6 | `get(Object)` | `java.util.LinkedHashMap` |
|  -14.3% |    -1 | 70.0% → 50.0% |   7 → 6 | `get(Object)` | `java.util.HashMap`       |

##### `add(ATNConfig, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`)

| Change | Delta |             % | Samples | Caller                                                                                                        | Location                                               |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `insertParameterTypes(int, Class[])` (`java.lang.invoke.MethodType`)

| Change | Delta |            % | Samples | Caller                                             | Location                         |
| -----: | ----: | -----------: | ------: | -------------------------------------------------- | -------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `dropArgumentsTrusted(MethodHandle, int, Class[])` | `java.lang.invoke.MethodHandles` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `replaceParameterTypes(int, int, Class[])`         | `java.lang.invoke.MethodType`    |

##### `getReturnState(int)` (`groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext`)

| Change | Delta |      % | Samples | Caller                                                               | Location                                              |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------- | ----------------------------------------------------- |
| +33.3% |    +2 | 100.0% |   6 → 8 | `join(PredictionContext, PredictionContext, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |

##### `matches(Method, String, Class[])` (`java.lang.PublicMethods$Key`)

| Change | Delta |      % | Samples | Caller                                       | Location                             |
| -----: | ----: | -----: | ------: | -------------------------------------------- | ------------------------------------ |
| +50.0% |    +2 | 100.0% |   4 → 6 | `filter(Method[], String, Class[], boolean)` | `java.lang.PublicMethods$MethodList` |

##### `getMethodsRecursive(String, Class[], boolean)` (`java.lang.Class`)

| Change | Delta |             % | Samples | Caller                                          | Location          |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | ----------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `getMethodsRecursive(String, Class[], boolean)` | `java.lang.Class` |

##### `compile()` (`java.util.regex.Pattern`)

| Change | Delta |             % | Samples | Caller                | Location                  |
| -----: | ----: | ------------: | ------: | --------------------- | ------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `<init>(String, int)` | `java.util.regex.Pattern` |

##### `compare(MutableBigInteger)` (`java.math.MutableBigInteger`)

|  Change | Delta |      % | Samples | Caller                                                       | Location                      |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------ | ----------------------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)` | `java.math.MutableBigInteger` |

##### `getInfoNullable()` (`org.codehaus.groovy.runtime.GroovyCategorySupport$MyThreadLocal`)

| Change | Delta |             % | Samples | Caller                       | Location                                            |
| -----: | ----: | ------------: | ------: | ---------------------------- | --------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `getCategoryMethods(String)` | `org.codehaus.groovy.runtime.GroovyCategorySupport` |

##### `readBytes0(byte[], int, int)` (`java.io.RandomAccessFile`)

| Change | Delta |             % | Samples | Caller                        | Location                   |
| -----: | ----: | ------------: | ------: | ----------------------------- | -------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `readBytes(byte[], int, int)` | `java.io.RandomAccessFile` |

##### `getExactSizeIfKnown()` (`java.util.Spliterator`)

| Change | Delta |            % | Samples | Caller                                  | Location                            |
| -----: | ----: | -----------: | ------: | --------------------------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `copyIntoWithCancel(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `copyInto(Sink, Spliterator)`           | `java.util.stream.AbstractPipeline` |

##### `asCollector(int, Class, int)` (`java.lang.invoke.MethodHandle`)

| Change | Delta |             % | Samples | Caller                    | Location                        |
| -----: | ----: | ------------: | ------: | ------------------------- | ------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `asCollector(Class, int)` | `java.lang.invoke.MethodHandle` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

| Change | Delta |             % | Samples | Caller                                          | Location                                             |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a8010bc800` |

##### `addViolationForSunImport(ImportNode, SourceCode, List)` (`org.codenarc.rule.imports.ImportFromSunPackagesRule`)

| Change | Delta |             % | Samples | Caller                                                  | Location                                             |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------- | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeVirtual(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a801409000` |

##### `matches(SourceCode)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

| Change | Delta |             % | Samples | Caller                                  | Location                                             |
| -----: | ----: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a801101c00` |

##### `visitClassComplete(ClassNode)` (`org.codenarc.rule.convention.StaticFieldsBeforeInstanceFieldsAstVisitor`)

| Change | Delta |             % | Samples | Caller                  | Location                               |
| -----: | ----: | ------------: | ------: | ----------------------- | -------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `<init>()` (`org.codenarc.rule.AbstractAstVisitor`)

| Change | Delta |             % | Samples | Caller     | Location                                                          |
| -----: | ----: | ------------: | ------: | ---------- | ----------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>()` | `org.codenarc.rule.basic.HardCodedWindowsFileSeparatorAstVisitor` |

##### `doCall(Object)` (`org.codenarc.rule.unused.UnusedPrivateMethodRule$_collectAllPrivateMethods_closure2`)

| Change | Delta |             % | Samples | Caller                                  | Location                                     |
| -----: | ----: | ------------: | ------: | --------------------------------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `visitPropertyExpression(PropertyExpression)` (`org.gmetrics.metric.abc.AbcAstVisitor`)

| Change | Delta |             % | Samples | Caller                     | Location                                          |
| -----: | ----: | ------------: | ------: | -------------------------- | ------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.PropertyExpression` |

##### `getMetaClass()` (`org.codenarc.rule.formatting.ClassStartsWithBlankLineRule`)

| Change | Delta |             % | Samples | Caller              | Location                                                  |
| -----: | ----: | ------------: | ------: | ------------------- | --------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `setGuards(Object)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `get(Object)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change | Delta |             % | Samples | Caller                                                                                  | Location                                               |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------- | ------------------------------------------------------ |
|  -50.0% |    -2 | 40.0% → 66.7% |   4 → 2 | `getCachedContext(PredictionContext, ConcurrentMap, PredictionContext$IdentityHashMap)` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`  |
|  -66.7% |    -2 | 30.0% → 33.3% |   3 → 1 | `getNoCheckStale(Object)`                                                               | `jdk.internal.util.ReferencedKeyMap`                   |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `addDFAState(DFA, ATNConfigSet, PredictionContextCache)`                                | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `isViolationSuppressed(Violation)`                                                      | `org.codenarc.analyzer.SuppressionAnalyzer`            |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `adaptivePredict(TokenStream, int, ParserRuleContext, boolean)`                         | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `getReachableTarget(Transition, int)` (`groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`)

| Change | Delta |      % | Samples | Caller                                                               | Location                                              |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------- | ----------------------------------------------------- |
| -42.9% |    -3 | 100.0% |   7 → 4 | `getReachableConfigSet(CharStream, ATNConfigSet, ATNConfigSet, int)` | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator` |

##### `join(PredictionContext, PredictionContext, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContext`)

|  Change | Delta |            % | Samples | Caller                                       | Location                                                   |
| ------: | ----: | -----------: | ------: | -------------------------------------------- | ---------------------------------------------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `add(ATNConfig, PredictionContextCache)`     | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`           |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `join(PredictionContext, PredictionContext)` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache` |

##### `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)` (`java.math.MutableBigInteger`)

|  Change | Delta |             % | Samples | Caller                                              | Location                      |
| ------: | ----: | ------------: | ------: | --------------------------------------------------- | ----------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `divideKnuth(MutableBigInteger, MutableBigInteger)` | `java.math.MutableBigInteger` |

##### `invokeStatic(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|  Change | Delta |            % | Samples | Caller                                   | Location                                            |
| ------: | ----: | -----------: | ------: | ---------------------------------------- | --------------------------------------------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700118dc00` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001118800` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001102c00` |

##### `evaluateToArrayNode(IntFunction)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |             % | Samples | Caller                 | Location                             |
| ------: | ----: | ------------: | ------: | ---------------------- | ------------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `toArray(IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `invokeExact_MT(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|  Change | Delta |             % | Samples | Caller                                                                                        | Location                                        |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change | Delta |      % | Samples | Caller                                                                                      | Location                                             |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a8010b2800` |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|  Change | Delta |             % | Samples | Caller           | Location                                            |
| ------: | ----: | ------------: | ------: | ---------------- | --------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `invoke(Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010b3400` |

##### `invokeMethod(Class, Object, String, Object[], boolean, boolean)` (`groovy.lang.MetaClassImpl`)

|  Change | Delta |             % | Samples | Caller                                   | Location                    |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | --------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `invokeMethod(Object, String, Object[])` | `groovy.lang.MetaClassImpl` |

##### `binarySearch(Object[], Object, Comparator)` (`java.util.Arrays`)

|  Change | Delta |             % | Samples | Caller                              | Location                             |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ------------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `mopArrayIndex(MetaMethod, String)` | `groovy.lang.MetaClassImpl$1MOPIter` |

##### `provide(Object)` (`org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x000000a8010b6d70`)

|  Change | Delta |             % | Samples | Caller                                          | Location                                            |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | --------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `getAndPut(String, MemoizeCache$ValueProvider)` | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite` |

##### `isAssignableFrom(Class)` (`java.lang.Class`)

|  Change | Delta |             % | Samples | Caller                                    | Location                                                             |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | -------------------------------------------------------------------- |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `inheritInterfaceNewMetaMethods(Set)`     | `groovy.lang.MetaClassImpl`                                          |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `continueCastOnCollection(Object, Class)` | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `invokeSpecial(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800`                 |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `checkReceiver(Object)`                   | `jdk.internal.reflect.DirectMethodHandleAccessor`                    |

##### `checkCustomized(MethodHandle)` (`java.lang.invoke.Invokers`)

|  Change | Delta |             % | Samples | Caller                                   | Location                                            |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | --------------------------------------------------- |
| removed |    -2 |  66.7% → 0.0% |   2 → 0 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001117c00` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001104400` |

##### `valueConversion(Class, Class, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

| Change | Delta |      % | Samples | Caller                                                              | Location                            |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------- | ----------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `computeValueConversions(MethodType, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801476800`)

|  Change | Delta |             % | Samples | Caller                | Location                                            |
| ------: | ----: | ------------: | ------: | --------------------- | --------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `invoke(Object, int)` | `java.lang.invoke.LambdaForm$MH.0x000000700109bc00` |

##### `equals(Object[], Object[])` (`java.util.Arrays`)

|  Change | Delta |            % | Samples | Caller               | Location                                                |
| ------: | ----: | -----------: | ------: | -------------------- | ------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `equals(Object)`     | `groovyjarjarantlr4.v4.runtime.atn.LexerActionExecutor` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `equals(MethodType)` | `java.lang.invoke.MethodType`                           |

##### `equals(MethodType)` (`java.lang.invoke.MethodType`)

|  Change | Delta |             % | Samples | Caller           | Location                      |
| ------: | ----: | ------------: | ------: | ---------------- | ----------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `equals(Object)` | `java.lang.invoke.MethodType` |

##### `hashCodeRange(int, int)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Caller       | Location              |
| -----: | ----: | -----: | ------: | ------------ | --------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `hashCode()` | `java.util.ArrayList` |

##### `put(Object, Object)` (`groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap`)

|  Change | Delta |             % | Samples | Caller                                                                                  | Location                                              |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `getCachedContext(PredictionContext, ConcurrentMap, PredictionContext$IdentityHashMap)` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |

##### `processMethodNode(MethodNode)` (`org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`)

|  Change | Delta |             % | Samples | Caller                                  | Location                                             |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001001000` |

##### `calculate(MethodNode, SourceCode)` (`org.gmetrics.metric.abc.AbcMetric`)

|  Change | Delta |             % | Samples | Caller                                          | Location                                             |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a8010bc800` |

##### `<init>(Object, Object, Reference)` (`org.codenarc.rule.design.OptionalMethodParameterAstVisitor$_processParameters_closure1`)

|  Change | Delta |             % | Samples | Caller                                   | Location                                                     |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | ------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `processParameters(Parameter[], String)` | `org.codenarc.rule.design.OptionalMethodParameterAstVisitor` |

##### `<init>(Object, Object, Reference, Reference, Reference)` (`org.codenarc.rule.unused.UnusedPrivateMethodRule$_getViolations_closure1`)

|  Change | Delta |             % | Samples | Caller                                  | Location                                           |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getViolations(AstVisitor, SourceCode)` | `org.codenarc.rule.unused.UnusedPrivateMethodRule` |

##### `addViolation(String, int)` (`org.codenarc.rule.formatting.ClassStartsWithBlankLineAstVisitor`)

|  Change | Delta |             % | Samples | Caller                                       | Location                                             |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | ---------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeSpecial(Object, Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001152c00` |

##### `getMetaClass()` (`org.codenarc.rule.unnecessary.UnnecessaryTernaryExpressionRule`)

|  Change | Delta |             % | Samples | Caller              | Location                                                  |
| ------: | ----: | ------------: | ------: | ------------------- | --------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `setGuards(Object)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

##### Standard library

|   Change | Delta |             % |   Samples | Function                                                  | Location                                             |
| -------: | ----: | ------------: | --------: | --------------------------------------------------------- | ---------------------------------------------------- |
| +4150.0% |   +83 |  0.6% → 25.4% |    2 → 85 | `invoke(Object, Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x000000a801142000`  |
|  +625.0% |   +75 |  3.9% → 26.0% |   12 → 87 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x000000a801140c00`  |
| +1800.0% |   +72 |  1.3% → 22.8% |    4 → 76 | `invoke(Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x000000a801150800`  |
| +7100.0% |   +71 |  0.3% → 21.6% |    1 → 72 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x000000a8012d8400`  |
| +7000.0% |   +70 |  0.3% → 21.3% |    1 → 71 | `invoke(Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x000000a80138dc00`  |
|  +100.0% |   +68 | 21.9% → 40.7% |  68 → 136 | `invoke(Object, Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x000000a80113bc00`  |
|  +182.4% |   +62 | 11.0% → 28.7% |   34 → 96 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x000000a8013d2000`  |
| +5000.0% |   +50 |  0.3% → 15.3% |    1 → 51 | `invoke(Object, Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x000000a8013db800`  |
|      new |   +49 |  0.0% → 14.7% |    0 → 49 | `invoke(Object, int)`                                     | `java.lang.invoke.LambdaForm$MH.0x000000a80109bc00`  |
| +4800.0% |   +48 |  0.3% → 14.7% |    1 → 49 | `invoke(Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x000000a80182f000`  |
| +1125.0% |   +45 |  1.3% → 14.7% |    4 → 49 | `invoke(Object, Object, Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000a80160ac00`  |
| +3300.0% |   +33 |  0.3% → 10.2% |    1 → 34 | `invoke(Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x000000a801829c00`  |
| +1500.0% |   +30 |   0.6% → 9.6% |    2 → 32 | `invoke(Object, Object, Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000a8012b8800`  |
|   +31.8% |   +27 | 27.4% → 33.5% |  85 → 112 | `invokeVirtual(Object, Object, Object, Object)`           | `java.lang.invoke.LambdaForm$DMH.0x000000a8010bc800` |
|  +866.7% |   +26 |   1.0% → 8.7% |    3 → 29 | `invoke(Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x000000a801145c00`  |
|   +12.8% |   +23 | 57.7% → 60.5% | 179 → 202 | `doMethodInvoke(Object, Object[])`                        | `groovy.lang.MetaMethod`                             |
|   +19.3% |   +23 | 38.4% → 42.5% | 119 → 142 | `invokeInterface(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a8010bd400` |
|   +12.5% |   +22 | 56.8% → 59.3% | 176 → 198 | `invoke(Object, Object[])`                                | `org.codehaus.groovy.reflection.CachedMethod`        |
|   +95.5% |   +21 |  7.1% → 12.9% |   22 → 43 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x000000a801117000`  |
|   +10.9% |   +21 | 61.9% → 63.8% | 192 → 213 | `invokeImpl(Object, Object[])`                            | `jdk.internal.reflect.DirectMethodHandleAccessor`    |

##### Ours

|  Change | Delta |             % | Samples | Function                                          | Location                                                                                     |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- | -------------------------------------------------------------------------------------------- |
|  +23.9% |   +16 | 21.6% → 24.9% | 67 → 83 | `measureRuleProcessingTime(Rule, Closure)`        | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                               |
|  +28.3% |   +13 | 14.8% → 17.7% | 46 → 59 | `collectViolations(SourceCode, RuleSet)`          | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                               |
|  +24.4% |   +11 | 14.5% → 16.8% | 45 → 56 | `processFile(String, DirectoryResults, RuleSet)`  | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                                             |
| +300.0% |    +3 |   0.3% → 1.2% |   1 → 4 | `<clinit>()`                                      | `org.codenarc.CodeNarc`                                                                      |
|     new |    +3 |   0.0% → 0.9% |   0 → 3 | `processSourceLine(String, int)`                  | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`                              |
|     new |    +3 |   0.0% → 0.9% |   0 → 3 | `doCall(Object)`                                  | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor$_visitClassComplete_closure1` |
|     new |    +3 |   0.0% → 0.9% |   0 → 3 | `visitClassEx(ClassNode)`                         | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`                                      |
|     new |    +3 |   0.0% → 0.9% |   0 → 3 | `visitMethodEx(MethodNode)`                       | `org.codenarc.rule.design.ReturnsNullInsteadOfEmptyArrayAstVisitor`                          |
|     new |    +3 |   0.0% → 0.9% |   0 → 3 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                           |
|     new |    +3 |   0.0% → 0.9% |   0 → 3 | `super$2$visitBinaryExpression(BinaryExpression)` | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                           |
|     new |    +3 |   0.0% → 0.9% |   0 → 3 | `visitBlockStatement(BlockStatement)`             | `org.codenarc.rule.formatting.IndentationAstVisitor`                                         |
|     new |    +3 |   0.0% → 0.9% |   0 → 3 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.basic.ExplicitGarbageCollectionAstVisitor`                                |
| +200.0% |    +2 |   0.3% → 0.9% |   1 → 3 | `main(String[])`                                  | `org.codenarc.CodeNarc`                                                                      |
|   +2.1% |    +2 | 30.3% → 28.7% | 94 → 96 | `doCall(Object)`                                  | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`                   |
|  +50.0% |    +2 |   1.3% → 1.8% |   4 → 6 | `calculate(MethodNode, SourceCode)`               | `org.gmetrics.metric.abc.AbcMetric`                                                          |
| +200.0% |    +2 |   0.3% → 0.9% |   1 → 3 | `visitBinaryExpression(BinaryExpression)`         | `org.gmetrics.metric.abc.AbcAstVisitor`                                                      |
| +200.0% |    +2 |   0.3% → 0.9% |   1 → 3 | `super$3$visitMethod(MethodNode)`                 | `org.gmetrics.metric.abc.AbcAstVisitor`                                                      |
| +200.0% |    +2 |   0.3% → 0.9% |   1 → 3 | `visitMethod(MethodNode)`                         | `org.gmetrics.metric.abc.AbcAstVisitor`                                                      |
|     new |    +2 |   0.0% → 0.6% |   0 → 2 | `visitPropertyExpression(PropertyExpression)`     | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`                                     |
|     new |    +2 |   0.0% → 0.6% |   0 → 2 | `doCall(Object)`                                  | `org.codenarc.rule.imports.ImportFromSunPackagesRule$_applyTo_closure1`                      |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

##### Standard library

| Change | Delta |             % |  Samples | Function                                         | Location                                            |
| -----: | ----: | ------------: | -------: | ------------------------------------------------ | --------------------------------------------------- |
| -99.1% |  -111 |  36.1% → 0.3% |  112 → 1 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000a80118f800` |
| -96.6% |   -84 |  28.1% → 0.9% |   87 → 3 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000a801184c00` |
| -96.8% |   -60 |  20.0% → 0.6% |   62 → 2 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000a801453c00` |
| -92.2% |   -59 |  20.6% → 1.5% |   64 → 5 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000a80115c800` |
| -98.3% |   -57 |  18.7% → 0.3% |   58 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000a801105c00` |
| -60.9% |   -53 | 28.1% → 10.2% |  87 → 34 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000a8012c5c00` |
| -98.1% |   -53 |  17.4% → 0.3% |   54 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000a8014b2c00` |
| -97.6% |   -41 |  13.5% → 0.3% |   42 → 1 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a801485c00` |
| -97.4% |   -38 |  12.6% → 0.3% |   39 → 1 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000a8014b2400` |
| -97.2% |   -35 |  11.6% → 0.3% |   36 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000a8010b1400` |
| -27.6% |   -32 | 37.4% → 25.1% | 116 → 84 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000a801119400` |
| -93.5% |   -29 |  10.0% → 0.6% |   31 → 2 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000a8013db000` |
| -32.6% |   -28 | 27.7% → 17.4% |  86 → 58 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000a8010bc000` |
| -96.3% |   -26 |   8.7% → 0.3% |   27 → 1 | `invoke(Object, int)`                            | `java.lang.invoke.LambdaForm$MH.0x000000a801278400` |
| -95.8% |   -23 |   7.7% → 0.3% |   24 → 1 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a80141f400` |
| -22.8% |   -21 | 29.7% → 21.3% |  92 → 71 | `guard(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x000000a801104000` |
| -95.5% |   -21 |   7.1% → 0.3% |   22 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000a801185400` |
| -19.5% |   -16 | 26.5% → 19.8% |  82 → 66 | `compilationUnit()`                              | `org.apache.groovy.parser.antlr4.GroovyParser`      |
| -19.5% |   -16 | 26.5% → 19.8% |  82 → 66 | `buildCST(PredictionMode)`                       | `org.apache.groovy.parser.antlr4.AstBuilder`        |
| -21.9% |   -16 | 23.5% → 17.1% |  73 → 57 | `classBodyDeclaration(int)`                      | `org.apache.groovy.parser.antlr4.GroovyParser`      |

##### Ours

|  Change | Delta |             % | Samples | Function                                                | Location                                                                    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------- | --------------------------------------------------------------------------- |
|  -14.0% |   -12 | 27.7% → 22.2% | 86 → 74 | `init()`                                                | `org.codenarc.source.AbstractSourceCode`                                    |
|  -13.2% |   -12 | 29.4% → 23.7% | 91 → 79 | `applyTo(SourceCode)`                                   | `org.codenarc.rule.AbstractRule`                                            |
|  -13.9% |   -11 | 25.5% → 20.4% | 79 → 68 | `applyTo(SourceCode, List)`                             | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
|  -19.2% |   -10 | 16.8% → 12.6% | 52 → 42 | `getAst()`                                              | `org.codenarc.source.AbstractSourceCode`                                    |
|  -18.4% |    -9 | 15.8% → 12.0% | 49 → 40 | `init()`                                                | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
|  -20.5% |    -9 | 14.2% → 10.5% | 44 → 35 | `isRuleSuppressed(Rule)`                                | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
|  -12.5% |    -9 | 23.2% → 18.9% | 72 → 63 | `visitClass(ClassNode)`                                 | `org.codenarc.rule.AbstractAstVisitor`                                      |
|  -42.1% |    -8 |   6.1% → 3.3% | 19 → 11 | `doCall(Object)`                                        | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|   -9.8% |    -5 | 16.5% → 13.8% | 51 → 46 | `visitMethod(MethodNode)`                               | `org.codenarc.rule.AbstractAstVisitor`                                      |
|  -36.4% |    -4 |   3.5% → 2.1% |  11 → 7 | `doCall(Object)`                                        | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`  |
|  -66.7% |    -4 |   1.9% → 0.6% |   6 → 2 | `getAstVisitor()`                                       | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
| removed |    -4 |   1.3% → 0.0% |   4 → 0 | `line(int)`                                             | `org.codenarc.source.AbstractSourceCode`                                    |
|  -75.0% |    -3 |   1.3% → 0.3% |   4 → 1 | `addMethodsToMetricResults(SourceCode, ClassNode, Map)` | `org.gmetrics.metric.AbstractMethodMetric`                                  |
|  -75.0% |    -3 |   1.3% → 0.3% |   4 → 1 | `doCall(Object)`                                        | `org.codenarc.rule.unused.UnusedVariableRule$_applyTo_closure2`             |
| removed |    -3 |   1.0% → 0.0% |   3 → 0 | `visitMethodEx(MethodNode)`                             | `org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`            |
|  -50.0% |    -3 |   1.9% → 0.9% |   6 → 3 | `applyVisitor(AstVisitor, SourceCode)`                  | `org.codenarc.rule.AbstractSharedAstVisitorRule`                            |
|  -75.0% |    -3 |   1.3% → 0.3% |   4 → 1 | `visitConstructorOrMethod(MethodNode, boolean)`         | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`                |
| removed |    -3 |   1.0% → 0.0% |   3 → 0 | `super$3$visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`                |
|  -50.0% |    -3 |   1.9% → 0.9% |   6 → 3 | `getNumberOfViolationsWithPriority(int, boolean)`       | `org.codenarc.results.FileResults`                                          |
|  -50.0% |    -3 |   1.9% → 0.9% |   6 → 3 | `getNumberOfViolationsWithPriority(int)`                | `org.codenarc.results.FileResults`                                          |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801142000`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |   +83 |  0.0% → 97.6% |  0 → 83 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a8010b2800` |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `invokeSpecial(Object, Object, Object, Object)`                                             | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |    +2 |   0.0% → 2.4% |   0 → 2 | `collector(Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x000000a801140000`  |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801140c00`)

|  Change | Delta |             % | Samples | Callee                                   | Location                                             |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | ---------------------------------------------------- |
|     new |   +87 | 0.0% → 100.0% |  0 → 87 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a80113bc00`  |
| removed |   -10 |  83.3% → 0.0% |  10 → 0 | `invokeSpecial(Object, Object, Object)`  | `java.lang.invoke.LambdaForm$DMH.0x0000007001001000` |
| removed |    -2 |  16.7% → 0.0% |   2 → 0 | `invokeVirtual(Object, Object, Object)`  | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801150800`)

|  Change | Delta |             % | Samples | Callee                          | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------------------- | --------------------------------------------------- |
|     new |   +76 | 0.0% → 100.0% |  0 → 76 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `reinvoke(Object, Object)`      | `java.lang.invoke.LambdaForm$MH.0x0000007001136800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8012d8400`)

|  Change | Delta |             % | Samples | Callee                                  | Location                                             |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
|     new |   +71 |  0.0% → 98.6% |  0 → 71 | `invokeVirtual(Object, Object, int)`    | `java.lang.invoke.LambdaForm$DMH.0x000000a801152800` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |    +1 |   0.0% → 1.4% |   0 → 1 | `invokeSpecial(Object, Object, int)`    | `java.lang.invoke.LambdaForm$DMH.0x000000a8013e9c00` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a80138dc00`)

|   Change | Delta |              % | Samples | Callee                                     | Location                                            |
| -------: | ----: | -------------: | ------: | ------------------------------------------ | --------------------------------------------------- |
| +6800.0% |   +68 | 100.0% → 97.2% |  1 → 69 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a80118d000` |
|      new |    +1 |    0.0% → 1.4% |   0 → 1 | `invoke(Object, Object)`                   | `java.lang.invoke.LambdaForm$MH.0x000000a801002c00` |
|      new |    +1 |    0.0% → 1.4% |   0 → 1 | `invoke(Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000a80118dc00` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a80113bc00`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |  +136 | 0.0% → 100.0% | 0 → 136 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000a8010bd400` |
| removed |   -68 | 100.0% → 0.0% |  68 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010b2800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8013d2000`)

|  Change | Delta |             % | Samples | Callee                                  | Location                                             |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
|     new |   +96 | 0.0% → 100.0% |  0 → 96 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |   -34 | 100.0% → 0.0% |  34 → 0 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001101c00` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8013db800`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |   +51 | 0.0% → 100.0% |  0 → 51 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a8010b2800` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeSpecial(Object, Object, Object, Object)`                                             | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, int)` (`java.lang.invoke.LambdaForm$MH.0x000000a80109bc00`)

| Change | Delta |            % | Samples | Callee                              | Location                                             |
| -----: | ----: | -----------: | ------: | ----------------------------------- | ---------------------------------------------------- |
|    new |   +44 | 0.0% → 89.8% |  0 → 44 | `invokeStatic(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000a80109a000` |
|    new |    +3 |  0.0% → 6.1% |   0 → 3 | `invoke(Object, Object)`            | `java.lang.invoke.LambdaForm$MH.0x000000a801002c00`  |
|    new |    +1 |  0.0% → 2.0% |   0 → 1 | `doMethodInvoke(Object, Object[])`  | `org.codehaus.groovy.runtime.dgm$1308`               |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a80182f000`)

|   Change | Delta |      % | Samples | Callee                             | Location                                         |
| -------: | ----: | -----: | ------: | ---------------------------------- | ------------------------------------------------ |
| +4800.0% |   +48 | 100.0% |  1 → 49 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a80160ac00`)

|   Change | Delta |      % | Samples | Callee                                                  | Location                                             |
| -------: | ----: | -----: | ------: | ------------------------------------------------------- | ---------------------------------------------------- |
| +1125.0% |   +45 | 100.0% |  4 → 49 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a80118e800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801829c00`)

|  Change | Delta |             % | Samples | Callee                                     | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | --------------------------------------------------- |
|     new |   +34 | 0.0% → 100.0% |  0 → 34 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invoke(Object, Object, Object)`           | `java.lang.invoke.LambdaForm$MH.0x0000007001118800` |

##### `invoke(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8012b8800`)

|  Change | Delta |             % | Samples | Callee                                                  | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------- | ---------------------------------------------------- |
|     new |   +32 | 0.0% → 100.0% |  0 → 32 | `invoke(Object, Object, Object, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000a80113bc00`  |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000700118e800` |

##### `invokeVirtual(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000a8010bc800`)

|  Change | Delta |             % | Samples | Callee                                     | Location                                       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | ---------------------------------------------- |
| +187.5% |   +15 |  9.4% → 20.5% |  8 → 23 | `doMethodInvoke(Object, Object[])`         | `org.codehaus.groovy.runtime.dgm$207`          |
|  +26.1% |   +12 | 54.1% → 51.8% | 46 → 58 | `collectViolations(SourceCode, RuleSet)`   | `org.codenarc.analyzer.AbstractSourceAnalyzer` |
|  -50.0% |    -3 |   7.1% → 2.7% |   6 → 3 | `doMethodInvoke(Object, Object[])`         | `org.codehaus.groovy.runtime.dgm$751`          |
|  +50.0% |    +2 |   4.7% → 5.4% |   4 → 6 | `calculate(MethodNode, SourceCode)`        | `org.gmetrics.metric.abc.AbcMetric`            |
|  -50.0% |    -2 |   4.7% → 1.8% |   4 → 2 | `calculateForClass(ClassNode, SourceCode)` | `org.gmetrics.metric.AbstractMethodMetric`     |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801145c00`)

|  Change | Delta |             % | Samples | Callee                             | Location                                            |
| ------: | ----: | ------------: | ------: | ---------------------------------- | --------------------------------------------------- |
|     new |   +29 | 0.0% → 100.0% |  0 → 29 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a801118000` |
| removed |    -2 |  66.7% → 0.0% |   2 → 0 | `invokeVirtual(Object, Object)`    | `java.lang.invoke.DirectMethodHandle$Holder`        |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `invokeSpecial(Object, Object)`    | `java.lang.invoke.DirectMethodHandle$Holder`        |

##### `doMethodInvoke(Object, Object[])` (`groovy.lang.MetaMethod`)

| Change | Delta |             % |   Samples | Callee                     | Location                                      |
| -----: | ----: | ------------: | --------: | -------------------------- | --------------------------------------------- |
| +13.3% |   +23 | 96.6% → 97.0% | 173 → 196 | `invoke(Object, Object[])` | `org.codehaus.groovy.reflection.CachedMethod` |

##### `invokeInterface(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000a8010bd400`)

| Change | Delta |              % |   Samples | Callee                                   | Location                    |
| -----: | ----: | -------------: | --------: | ---------------------------------------- | --------------------------- |
| +20.3% |   +24 | 99.2% → 100.0% | 118 → 142 | `invokeMethod(Object, String, Object[])` | `groovy.lang.MetaClassImpl` |

##### `invoke(Object, Object[])` (`org.codehaus.groovy.reflection.CachedMethod`)

| Change | Delta |      % |   Samples | Callee                     | Location                   |
| -----: | ----: | -----: | --------: | -------------------------- | -------------------------- |
| +12.5% |   +22 | 100.0% | 176 → 198 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801117000`)

| Change | Delta |              % | Samples | Callee                                          | Location                                             |
| -----: | ----: | -------------: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| +90.9% |   +20 | 100.0% → 97.7% | 22 → 42 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a8010bc800` |
|    new |    +1 |    0.0% → 2.3% |   0 → 1 | `collector(Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x000000a80109c000`  |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |             % |   Samples | Callee                                                           | Location                                            |
| -----: | ----: | ------------: | --------: | ---------------------------------------------------------------- | --------------------------------------------------- |
| +68.4% |   +13 |  9.9% → 15.0% |   19 → 32 | `invokeExact_MT(Object, Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000a80116d000` |
|  +5.8% |    +9 | 81.3% → 77.5% | 156 → 165 | `invokeExact_MT(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                  |
| +13.5% |    +7 | 27.1% → 27.7% |   52 → 59 | `invokeExact_MT(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a801004000` |
| -50.0% |    -3 |   3.1% → 1.4% |     6 → 3 | `invokeExact_MT(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                  |

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|  Change | Delta |             % | Samples | Callee                                           | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | --------------------------------------------------- |
|  +17.4% |    +8 | 68.7% → 65.1% | 46 → 54 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| +100.0% |    +8 | 11.9% → 19.3% |  8 → 16 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  -16.7% |    -1 |   9.0% → 6.0% |   6 → 5 | `linkToCallSite(Object, Object, long, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000a801394800` |
|  +14.3% |    +1 |  10.4% → 9.6% |   7 → 8 | `linkToCallSite(Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000a801390c00` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|  Change | Delta |             % | Samples | Callee                                                               | Location                                                                   |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------- | -------------------------------------------------------------------------- |
|  +40.6% |   +13 | 69.6% → 76.3% | 32 → 45 | `linkToCallSite(Object, Object, Object, Object)`                     | `java.lang.invoke.Invokers$Holder`                                         |
|  -23.1% |    -3 | 28.3% → 16.9% | 13 → 10 | `linkToCallSite(Object, Object)`                                     | `java.lang.invoke.Invokers$Holder`                                         |
|     new |    +3 |   0.0% → 5.1% |   0 → 3 | `linkToCallSite(Object, Object, Object)`                             | `java.lang.invoke.Invokers$Holder`                                         |
| removed |    -1 |   2.2% → 0.0% |   1 → 0 | `<init>(Object, Object, Reference, Reference, Reference, Reference)` | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

| Change | Delta |              % | Samples | Callee                                           | Location                           |
| -----: | ----: | -------------: | ------: | ------------------------------------------------ | ---------------------------------- |
| +22.2% |   +10 | 100.0% → 98.2% | 45 → 55 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|    new |    +1 |    0.0% → 1.8% |   0 → 1 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `<clinit>()` (`org.codenarc.CodeNarc`)

|  Change | Delta |      % | Samples | Callee       | Location              |
| ------: | ----: | -----: | ------: | ------------ | --------------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `<clinit>()` | `groovy.lang.Closure` |

##### `processSourceLine(String, int)` (`org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`)

| Change | Delta |            % | Samples | Callee                                   | Location                                                             |
| -----: | ----: | -----------: | ------: | ---------------------------------------- | -------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                   |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `booleanUnbox(Object)`                   | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation` |

##### `doCall(Object)` (`org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor$_visitClassComplete_closure1`)

| Change | Delta |             % | Samples | Callee                                           | Location                           |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ | ---------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `visitClassEx(ClassNode)` (`org.codenarc.rule.size.AbstractMethodMetricAstVisitor`)

| Change | Delta |             % | Samples | Callee                                           | Location                           |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ | ---------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `visitMethodEx(MethodNode)` (`org.codenarc.rule.design.ReturnsNullInsteadOfEmptyArrayAstVisitor`)

| Change | Delta |            % | Samples | Callee                                                        | Location                                            |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

| Change | Delta |            % | Samples | Callee                                                        | Location                                            |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                  |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### `super$2$visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

| Change | Delta |             % | Samples | Callee                                    | Location                                     |
| -----: | ----: | ------------: | ------: | ----------------------------------------- | -------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `visitBinaryExpression(BinaryExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport` |

##### `visitBlockStatement(BlockStatement)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

| Change | Delta |            % | Samples | Callee                                                        | Location                                            |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.basic.ExplicitGarbageCollectionAstVisitor`)

| Change | Delta |            % | Samples | Callee                                                        | Location                                            |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `linkToCallSite(Object, Object, Object, Object, int, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a801470c00` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `linkToCallSite(Object, Object, Object, int, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000a8013b9000` |

##### `main(String[])` (`org.codenarc.CodeNarc`)

| Change | Delta |            % | Samples | Callee                           | Location                           |
| -----: | ----: | -----------: | ------: | -------------------------------- | ---------------------------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `loadClass(String)`              | `java.lang.ClassLoader`            |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

| Change | Delta |             % | Samples | Callee                                   | Location                                                                             |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------------ |
| +28.6% |    +4 | 14.9% → 18.8% | 14 → 18 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                                   |
|  -3.8% |    -3 | 85.1% → 80.2% | 80 → 77 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                                   |
|    new |    +1 |   0.0% → 1.0% |   0 → 1 | `<init>(Object, Object, Reference)`      | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3$_closure7` |

##### `calculate(MethodNode, SourceCode)` (`org.gmetrics.metric.abc.AbcMetric`)

|  Change | Delta |             % | Samples | Callee                                                    | Location                                                            |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------- |
| +200.0% |    +2 | 25.0% → 50.0% |   1 → 3 | `call(Object, Object)`                                    | `org.codehaus.groovy.ast.GroovyClassVisitor$visitMethod`            |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `callGetProperty(Object)`                                 | `org.codehaus.groovy.runtime.callsite.GetEffectivePogoPropertySite` |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `callConstructor(Object, Object)`                         | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`             |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `callConstructor(Object, Object, Object, Object, Object)` | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`             |

##### `visitBinaryExpression(BinaryExpression)` (`org.gmetrics.metric.abc.AbcAstVisitor`)

|  Change | Delta |              % | Samples | Callee                                                        | Location                                                |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------------- | ------------------------------------------------------- |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `callCurrent(GroovyObject, Object)`                           | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |
|     new |    +1 |   0.0% → 33.3% |   0 → 1 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`     |

##### `super$3$visitMethod(MethodNode)` (`org.gmetrics.metric.abc.AbcAstVisitor`)

|  Change | Delta |      % | Samples | Callee                    | Location                                          |
| ------: | ----: | -----: | ------: | ------------------------- | ------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `visitMethod(MethodNode)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `visitMethod(MethodNode)` (`org.gmetrics.metric.abc.AbcAstVisitor`)

|  Change | Delta |      % | Samples | Callee                                                        | Location                                            |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### `visitPropertyExpression(PropertyExpression)` (`org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`)

| Change | Delta |            % | Samples | Callee                                                        | Location                                            |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### `doCall(Object)` (`org.codenarc.rule.imports.ImportFromSunPackagesRule$_applyTo_closure1`)

| Change | Delta |            % | Samples | Callee                                                   | Location                           |
| -----: | ----: | -----------: | ------: | -------------------------------------------------------- | ---------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a80118f800`)

|  Change | Delta |             % | Samples | Callee                                                    | Location                                             |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -112 | 100.0% → 0.0% | 112 → 0 | `invokeInterface(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010bd400` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeSpecial(Object, Object, Object, Object)`           | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801184c00`)

| Change | Delta |              % | Samples | Callee                                  | Location                                             |
| -----: | ----: | -------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
| -97.7% |   -85 | 100.0% → 66.7% |  87 → 2 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|    new |    +1 |   0.0% → 33.3% |   0 → 1 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a8010bdc00` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801453c00`)

|  Change | Delta |             % | Samples | Callee                                     | Location                                         |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | ------------------------------------------------ |
| removed |   -62 | 100.0% → 0.0% |  62 → 0 | `delegate(Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |
|     new |    +2 | 0.0% → 100.0% |   0 → 2 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a80115c800`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |   -64 | 100.0% → 0.0% |  64 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010b2800` |
|     new |    +3 |  0.0% → 60.0% |   0 → 3 | `invokeVirtual(Object, Object, Object)`                                                     | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `invokeSpecial(Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$DMH.0x000000a801001000` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `invokeVirtual(Object, Object)`                                                             | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801105c00`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |   -50 |  86.2% → 0.0% |  50 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010b2800` |
| removed |    -8 |  13.8% → 0.0% |   8 → 0 | `collector(Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000700109c000`  |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `reinvoke(Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x000000a801103c00`  |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8012c5c00`)

|  Change | Delta |             % | Samples | Callee                                  | Location                                             |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
| removed |   -87 | 100.0% → 0.0% |  87 → 0 | `invokeVirtual(Object, Object, int)`    | `java.lang.invoke.LambdaForm$DMH.0x0000007001152800` |
|     new |   +34 | 0.0% → 100.0% |  0 → 34 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a801101c00` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8014b2c00`)

|  Change | Delta |             % | Samples | Callee                                                  | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------- | --------------------------------------------------- |
| removed |   -54 | 100.0% → 0.0% |  54 → 0 | `reinvoke(Object, Object, Object, Object)`              | `java.lang.invoke.LambdaForm$MH.0x000000700118d000` |
| removed |    -1 |   1.9% → 0.0% |   1 → 0 | `invoke(Object, Object, Object, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000700118dc00` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `delegate(Object, Object, Object, int, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a801461800` |

##### `invoke(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801485c00`)

|  Change | Delta |             % | Samples | Callee                                                  | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------- | ---------------------------------------------------- |
| removed |   -42 | 100.0% → 0.0% |  42 → 0 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000700118e800` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8014b2400`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |   -39 | 100.0% → 0.0% |  39 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010b2800` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeSpecial(Object, Object, int, Object)`                                                | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8010b1400`)

|  Change | Delta |             % | Samples | Callee                                     | Location                                         |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | ------------------------------------------------ |
| removed |   -36 | 100.0% → 0.0% |  36 → 0 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeStatic(Object, Object, int)`        | `java.lang.invoke.DirectMethodHandle$Holder`     |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801119400`)

| Change | Delta |             % | Samples | Callee                             | Location                                            |
| -----: | ----: | ------------: | ------: | ---------------------------------- | --------------------------------------------------- |
| -94.4% |   -17 |  15.5% → 1.2% |  18 → 1 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| -15.3% |   -15 | 84.5% → 98.8% | 98 → 83 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a801118000` |
|    new |    +1 |   0.0% → 1.2% |   0 → 1 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000a801118800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8013db000`)

|  Change | Delta |             % | Samples | Callee                             | Location                                            |
| ------: | ----: | ------------: | ------: | ---------------------------------- | --------------------------------------------------- |
| removed |   -31 | 100.0% → 0.0% |  31 → 0 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001118000` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `delegate(Object, Object, long)`   | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8010bc000`)

|  Change | Delta |            % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |   -83 | 96.5% → 0.0% |  83 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x0000007001118000`  |
|     new |   +46 | 0.0% → 79.3% |  0 → 46 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a8010b2800` |
|     new |   +11 | 0.0% → 19.0% |  0 → 11 | `collector(Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000a80109c000`  |
| removed |    -5 |  5.8% → 0.0% |   5 → 0 | `delegate(Object, Object, Object)`                                                          | `java.lang.invoke.DelegatingMethodHandle$Holder`     |
| removed |    -1 |  1.2% → 0.0% |   1 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001118800`  |

##### `invoke(Object, int)` (`java.lang.invoke.LambdaForm$MH.0x000000a801278400`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |   -24 |  88.9% → 0.0% |  24 → 0 | `invokeStatic(Object, Object, int)`                                                         | `java.lang.invoke.LambdaForm$DMH.0x000000700109a000` |
| removed |    -2 |   7.4% → 0.0% |   2 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001002c00`  |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a8010b2800` |

##### `invoke(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a80141f400`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |   -24 | 100.0% → 0.0% |  24 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010b2800` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeSpecial(Object, Object, Object, Object, Object)`                                     | `java.lang.invoke.LambdaForm$DMH.0x000000a80118e800` |

##### `guard(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801104000`)

|  Change | Delta |             % | Samples | Callee                     | Location                                            |
| ------: | ----: | ------------: | ------: | -------------------------- | --------------------------------------------------- |
|  -16.3% |   -13 | 87.0% → 94.4% | 80 → 67 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|  -55.6% |    -5 |   9.8% → 5.6% |   9 → 4 | `reinvoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a801103c00` |
| removed |    -2 |   2.2% → 0.0% |   2 → 0 | `invoke(Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000007001104400` |
| removed |    -1 |   1.1% → 0.0% |   1 → 0 | `invoke(Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000007001105800` |
| removed |    -1 |   1.1% → 0.0% |   1 → 0 | `invoke(Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000007001102c00` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801185400`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |   -21 |  95.5% → 0.0% |  21 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010b2800` |
| removed |    -1 |   4.5% → 0.0% |   1 → 0 | `collector(Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000700109c000`  |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a80113bc00`  |

##### `compilationUnit()` (`org.apache.groovy.parser.antlr4.GroovyParser`)

|  Change | Delta |             % | Samples | Callee                                   | Location                                       |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | ---------------------------------------------- |
|  -17.7% |   -14 | 96.3% → 98.5% | 79 → 65 | `scriptStatements()`                     | `org.apache.groovy.parser.antlr4.GroovyParser` |
| removed |    -1 |   1.2% → 0.0% |   1 → 0 | `nls()`                                  | `org.apache.groovy.parser.antlr4.GroovyParser` |
| removed |    -1 |   1.2% → 0.0% |   1 → 0 | `packageDeclaration()`                   | `org.apache.groovy.parser.antlr4.GroovyParser` |
| removed |    -1 |   1.2% → 0.0% |   1 → 0 | `enterRule(ParserRuleContext, int, int)` | `groovyjarjarantlr4.v4.runtime.Parser`         |
|     new |    +1 |   0.0% → 1.5% |   0 → 1 | `sep()`                                  | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `buildCST(PredictionMode)` (`org.apache.groovy.parser.antlr4.AstBuilder`)

| Change | Delta |      % | Samples | Callee              | Location                                       |
| -----: | ----: | -----: | ------: | ------------------- | ---------------------------------------------- |
| -19.5% |   -16 | 100.0% | 82 → 66 | `compilationUnit()` | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `classBodyDeclaration(int)` (`org.apache.groovy.parser.antlr4.GroovyParser`)

| Change | Delta |      % | Samples | Callee                   | Location                                       |
| -----: | ----: | -----: | ------: | ------------------------ | ---------------------------------------------- |
| -21.9% |   -16 | 100.0% | 73 → 57 | `memberDeclaration(int)` | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|  Change | Delta |             % | Samples | Callee                                                           | Location                           |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------- | ---------------------------------- |
|  -16.9% |   -14 | 96.5% → 93.2% | 83 → 69 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
|  +50.0% |    +1 |   2.3% → 4.1% |   2 → 3 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| +100.0% |    +1 |   1.2% → 2.7% |   1 → 2 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|  Change | Delta |             % | Samples | Callee                      | Location                                              |
| ------: | ----: | ------------: | ------: | --------------------------- | ----------------------------------------------------- |
|  -15.8% |   -12 | 83.5% → 81.0% | 76 → 64 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`            |
|  -28.6% |    -2 |   7.7% → 6.3% |   7 → 5 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`      |
| removed |    -2 |   2.2% → 0.0% |   2 → 0 | `applyTo(SourceCode, List)` | `org.codenarc.rule.unused.UnusedVariableRule`         |
|     new |    +2 |   0.0% → 2.5% |   0 → 2 | `applyTo(SourceCode, List)` | `org.codenarc.rule.imports.ImportFromSunPackagesRule` |
| removed |    -1 |   1.1% → 0.0% |   1 → 0 | `applyTo(SourceCode, List)` | `org.codenarc.rule.imports.DuplicateImportRule`       |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|  Change | Delta |             % | Samples | Callee                  | Location                                                             |
| ------: | ----: | ------------: | ------: | ----------------------- | -------------------------------------------------------------------- |
|   -7.8% |    -5 | 81.0% → 86.8% | 64 → 59 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                               |
|  -66.7% |    -4 |   7.6% → 2.9% |   6 → 2 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`                           |
| removed |    -2 |   2.5% → 0.0% |   2 → 0 | `getAstVisitor()`       | `org.codenarc.rule.exceptions.ThrowErrorRule`                        |
|  -50.0% |    -1 |   2.5% → 1.5% |   2 → 1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor`                            |
|     new |    +1 |   0.0% → 1.5% |   0 → 1 | `getAstVisitor()`       | `org.codenarc.rule.groovyism.ExplicitLinkedHashMapInstantiationRule` |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

| Change | Delta |      % | Samples | Callee                           | Location                           |
| -----: | ----: | -----: | ------: | -------------------------------- | ---------------------------------- |
| -19.2% |   -10 | 100.0% | 52 → 42 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

| Change | Delta |      % | Samples | Callee     | Location                                 |
| -----: | ----: | -----: | ------: | ---------- | ---------------------------------------- |
| -18.4% |    -9 | 100.0% | 49 → 40 | `getAst()` | `org.codenarc.source.AbstractSourceCode` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

| Change | Delta |      % | Samples | Callee   | Location                                    |
| -----: | ----: | -----: | ------: | -------- | ------------------------------------------- |
| -20.5% |    -9 | 100.0% | 44 → 35 | `init()` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|  Change | Delta |             % | Samples | Callee                    | Location                                                            |
| ------: | ----: | ------------: | ------: | ------------------------- | ------------------------------------------------------------------- |
|   -9.3% |    -5 | 75.0% → 77.8% | 54 → 49 | `visitClass(ClassNode)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
|     new |    +3 |   0.0% → 4.8% |   0 → 3 | `visitClassEx(ClassNode)` | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`             |
| removed |    -2 |   2.8% → 0.0% |   2 → 0 | `visitClassEx(ClassNode)` | `org.codenarc.rule.groovyism.ConfusingMultipleReturnsAstVisitor`    |
|  -40.0% |    -2 |   6.9% → 4.8% |   5 → 3 | `visitClassEx(ClassNode)` | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
| removed |    -2 |   2.8% → 0.0% |   2 → 0 | `visitClassEx(ClassNode)` | `org.codenarc.rule.convention.CompileStaticlVisitor`                |

##### `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)

|  Change | Delta |             % | Samples | Callee                                                   | Location                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------- | ---------------------------------- |
|  -41.2% |    -7 | 89.5% → 90.9% | 17 → 10 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| removed |    -2 |  10.5% → 0.0% |   2 → 0 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
|     new |    +1 |   0.0% → 9.1% |   0 → 1 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |
|     new |    +1 |   0.0% → 9.1% |   0 → 1 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|  Change | Delta |             % | Samples | Callee                            | Location                                                                       |
| ------: | ----: | ------------: | ------: | --------------------------------- | ------------------------------------------------------------------------------ |
|  -16.3% |    -7 | 84.3% → 78.3% | 43 → 36 | `visitMethod(MethodNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                              |
| removed |    -3 |   5.9% → 0.0% |   3 → 0 | `visitMethodEx(MethodNode)`       | `org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`               |
|     new |    +3 |   0.0% → 6.5% |   0 → 3 | `visitMethodEx(MethodNode)`       | `org.codenarc.rule.design.ReturnsNullInsteadOfEmptyArrayAstVisitor`            |
| removed |    -1 |   2.0% → 0.0% |   1 → 0 | `visitMethodComplete(MethodNode)` | `org.codenarc.rule.design.AssignmentToStaticFieldFromInstanceMethodAstVisitor` |
| removed |    -1 |   2.0% → 0.0% |   1 → 0 | `visitMethodEx(MethodNode)`       | `org.codenarc.rule.design.OptionalMethodParameterAstVisitor`                   |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)

| Change | Delta |      % | Samples | Callee                                   | Location                           |
| -----: | ----: | -----: | ------: | ---------------------------------------- | ---------------------------------- |
| -36.4% |    -4 | 100.0% |  11 → 7 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`)

| Change | Delta |      % | Samples | Callee          | Location          |
| -----: | ----: | -----: | ------: | --------------- | ----------------- |
| -66.7% |    -4 | 100.0% |   6 → 2 | `newInstance()` | `java.lang.Class` |

##### `line(int)` (`org.codenarc.source.AbstractSourceCode`)

|  Change | Delta |            % | Samples | Callee                                | Location                           |
| ------: | ----: | -----------: | ------: | ------------------------------------- | ---------------------------------- |
| removed |    -3 | 75.0% → 0.0% |   3 → 0 | `linkToCallSite(Object, Object)`      | `java.lang.invoke.Invokers$Holder` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `linkToCallSite(Object, int, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `addMethodsToMetricResults(SourceCode, ClassNode, Map)` (`org.gmetrics.metric.AbstractMethodMetric`)

| Change | Delta |      % | Samples | Callee                 | Location                                                |
| -----: | ----: | -----: | ------: | ---------------------- | ------------------------------------------------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `call(Object, Object)` | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |

##### `doCall(Object)` (`org.codenarc.rule.unused.UnusedVariableRule$_applyTo_closure2`)

|  Change | Delta |              % | Samples | Callee                                       | Location                                            |
| ------: | ----: | -------------: | ------: | -------------------------------------------- | --------------------------------------------------- |
| removed |    -2 |   50.0% → 0.0% |   2 → 0 | `setProperty(Object, Class, Object, String)` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|  -50.0% |    -1 | 50.0% → 100.0% |   2 → 1 | `linkToCallSite(Object, Object, Object)`     | `java.lang.invoke.Invokers$Holder`                  |

##### `visitMethodEx(MethodNode)` (`org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`)

|  Change | Delta |             % | Samples | Callee                                   | Location                           |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | ---------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `applyVisitor(AstVisitor, SourceCode)` (`org.codenarc.rule.AbstractSharedAstVisitorRule`)

| Change | Delta |      % | Samples | Callee                  | Location                               |
| -----: | ----: | -----: | ------: | ----------------------- | -------------------------------------- |
| -50.0% |    -3 | 100.0% |   6 → 3 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`)

|  Change | Delta |              % | Samples | Callee                                                        | Location                                            |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
|  -66.7% |    -2 | 75.0% → 100.0% |   3 → 1 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                  |

##### `super$3$visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`)

|  Change | Delta |             % | Samples | Callee                                          | Location                                          |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ------------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `getNumberOfViolationsWithPriority(int, boolean)` (`org.codenarc.results.FileResults`)

| Change | Delta |      % | Samples | Callee                                        | Location                                            |
| -----: | ----: | -----: | ------: | --------------------------------------------- | --------------------------------------------------- |
| -50.0% |    -3 | 100.0% |   6 → 3 | `linkToCallSite(Object, int, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a80144dc00` |

##### `getNumberOfViolationsWithPriority(int)` (`org.codenarc.results.FileResults`)

| Change | Delta |      % | Samples | Callee                                            | Location                           |
| -----: | ----: | -----: | ------: | ------------------------------------------------- | ---------------------------------- |
| -50.0% |    -3 | 100.0% |   6 → 3 | `getNumberOfViolationsWithPriority(int, boolean)` | `org.codenarc.results.FileResults` |

# Allocated heap profile diff

Allocated 11.8 GiB → 12 GiB (+167.918 MiB, +1.4%) over 6,262 samples → 6,345 samples (1.93 MiB per sample).

| Category         | Change |        Delta |     % |                Size |       Samples |
| ---------------- | -----: | -----------: | ----: | ------------------: | ------------: |
| Standard library |  +1.4% | +163.498 MiB | 99.1% | 11.7 GiB → 11.9 GiB | 6,156 → 6,243 |
| Ours             |  +4.1% |    +4.42 MiB |  0.9% |   107 MiB → 111 MiB |       53 → 56 |
| Unknown          |  -2.0% |       -744 B | <0.1% | 37.2 KiB → 36.4 KiB |       53 → 46 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Standard library

|   Change |       Delta |            % |                Size |   Samples | Function                                                                       | Location                                                   |
| -------: | ----------: | -----------: | ------------------: | --------: | ------------------------------------------------------------------------------ | ---------------------------------------------------------- |
|   +44.3% | +91.575 MiB |  1.7% → 2.4% |   207 MiB → 298 MiB | 106 → 155 | `copyOfRange(Object[], int, int)`                                              | `java.util.Arrays`                                         |
|   +31.7% | +88.066 MiB |  2.3% → 3.0% |   278 MiB → 366 MiB | 140 → 122 | `make(MethodType, LambdaForm, Object, Object, Object, Object)`                 | `java.lang.invoke.BoundMethodHandle$Species_LLLL`          |
|  +250.0% |  +79.96 MiB |  0.3% → 0.9% |    32 MiB → 112 MiB |   16 → 26 | `unreflect(Method)`                                                            | `java.lang.invoke.MethodHandles$Lookup`                    |
|   +92.0% | +44.066 MiB |  0.4% → 0.7% |   47.9 MiB → 92 MiB |   23 → 45 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.BoundMethodHandle$Species_LLLLLL`        |
|   +13.0% | +43.452 MiB |  2.8% → 3.1% |   333 MiB → 377 MiB | 171 → 194 | `make(MethodType, LambdaForm, Object, Object)`                                 | `java.lang.invoke.BoundMethodHandle$Species_LL`            |
|   +41.4% |  +38.18 MiB |  0.8% → 1.1% |  92.3 MiB → 130 MiB |   46 → 64 | `toBigInteger(int)`                                                            | `java.math.MutableBigInteger`                              |
|   +19.9% | +35.468 MiB |  1.5% → 1.7% |   178 MiB → 214 MiB |  90 → 106 | `optimize(Pattern$Node)`                                                       | `java.util.regex.Pattern$BnM`                              |
|  +305.7% | +30.558 MiB |  0.1% → 0.3% |   10 MiB → 40.6 MiB |    5 → 20 | `valueOf(int)`                                                                 | `java.lang.Integer`                                        |
|  +131.1% | +28.577 MiB |  0.2% → 0.4% | 21.8 MiB → 50.4 MiB |   15 → 22 | `copy()`                                                                       | `java.lang.reflect.Method`                                 |
|   +61.4% |     +26 MiB |  0.3% → 0.6% | 42.4 MiB → 68.4 MiB |   21 → 35 | `matcher(CharSequence)`                                                        | `java.util.regex.Pattern`                                  |
|   +21.6% | +25.964 MiB |  1.0% → 1.2% |   120 MiB → 146 MiB |   64 → 76 | `resize()`                                                                     | `java.util.HashMap`                                        |
|   +10.5% | +21.971 MiB |  1.7% → 1.9% |   210 MiB → 232 MiB | 107 → 120 | `newNode(int, Object, Object, HashMap$Node)`                                   | `java.util.HashMap`                                        |
| +2455.1% | +21.907 MiB | <0.1% → 0.2% |  914 KiB → 22.8 MiB |         1 | `initCEN(int, ZipCoder)`                                                       | `java.util.zip.ZipFile$Source`                             |
|    +8.1% | +20.632 MiB |  2.1% → 2.2% |   255 MiB → 276 MiB | 132 → 143 | `lambdaFormEditor(LambdaForm)`                                                 | `java.lang.invoke.LambdaFormEditor`                        |
|   +24.8% | +18.325 MiB |  0.6% → 0.8% |   74 MiB → 92.4 MiB |   37 → 44 | `map(Function)`                                                                | `java.util.stream.ReferencePipeline`                       |
|    +8.1% |  +18.32 MiB |  1.9% → 2.0% |   227 MiB → 245 MiB | 116 → 125 | `of(byte, int, int)`                                                           | `java.lang.invoke.LambdaFormEditor$TransformKey`           |
|   +83.9% | +17.332 MiB |  0.2% → 0.3% |   20.6 MiB → 38 MiB |   11 → 18 | `<init>(Method, boolean)`                                                      | `java.lang.invoke.MemberName`                              |
|   +57.0% | +16.199 MiB |  0.2% → 0.4% | 28.4 MiB → 44.6 MiB |   15 → 21 | `getChild(PredictionContext, int)`                                             | `groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache` |
|   +71.8% |  +16.11 MiB |  0.2% → 0.3% | 22.4 MiB → 38.6 MiB |   11 → 20 | `basicTypesOrd(Class[])`                                                       | `java.lang.invoke.LambdaForm$BasicType`                    |
|   +88.9% | +15.994 MiB |  0.1% → 0.3% |     18 MiB → 34 MiB |    9 → 17 | `<init>()`                                                                     | `java.util.regex.Pattern$BitClass`                         |

#### Improvements

Functions with the largest decrease in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Standard library

|  Change |        Delta |            % |                Size |   Samples | Function                                                                                      | Location                                                   |
| ------: | -----------: | -----------: | ------------------: | --------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  -13.1% | -107.555 MiB |  6.8% → 5.8% |   821 MiB → 713 MiB | 369 → 357 | `makeImpl(Class, Class[], boolean)`                                                           | `java.lang.invoke.MethodType`                              |
|  -21.6% | -106.835 MiB |  4.1% → 3.2% |   495 MiB → 388 MiB | 199 → 202 | `makeBlockInliningWrapper(MethodHandle)`                                                      | `java.lang.invoke.MethodHandleImpl`                        |
|  -11.0% |  -70.305 MiB |  5.3% → 4.6% |   639 MiB → 569 MiB | 323 → 288 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`            |
|  -22.7% |  -60.012 MiB |  2.2% → 1.7% |   265 MiB → 205 MiB | 134 → 109 | `insertParameterTypes(int, Class[])`                                                          | `java.lang.invoke.MethodType`                              |
|  -56.2% |  -43.208 MiB |  0.6% → 0.3% | 76.8 MiB → 33.6 MiB |   37 → 17 | `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`  | `org.codehaus.groovy.vmplugin.v8.IndyInterface`            |
|  -10.0% |  -38.302 MiB |  3.2% → 2.8% |   384 MiB → 346 MiB | 199 → 174 | `newInstance(Class, int)`                                                                     | `java.lang.reflect.Array`                                  |
|   -5.0% |    -28.8 MiB |  4.7% → 4.4% |   572 MiB → 543 MiB | 303 → 288 | `fillInStackTrace(int)`                                                                       | `java.lang.Throwable`                                      |
|  -72.9% |  -23.323 MiB |  0.3% → 0.1% |   32 MiB → 8.66 MiB |    16 → 5 | `join(PredictionContext, PredictionContext)`                                                  | `groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache` |
|  -30.0% |  -23.027 MiB |  0.6% → 0.4% | 76.7 MiB → 53.7 MiB |   37 → 27 | `newSlice(int[], int, boolean)`                                                               | `java.util.regex.Pattern`                                  |
|  -14.0% |  -22.265 MiB |  1.3% → 1.1% |   159 MiB → 136 MiB |   80 → 68 | `make(MethodType, LambdaForm, Object, Object, Object)`                                        | `java.lang.invoke.BoundMethodHandle$Species_LLL`           |
| removed |  -22.063 MiB |  0.2% → 0.0% |      22.1 MiB → 0 B |     2 → 0 | `initTable()`                                                                                 | `java.util.concurrent.ConcurrentHashMap`                   |
|  -29.0% |  -20.301 MiB |  0.6% → 0.4% |   70 MiB → 49.7 MiB |   35 → 26 | `convertToTypeArray(Object[])`                                                                | `org.codehaus.groovy.runtime.MetaClassHelper`              |
|  -76.9% |   -19.99 MiB | 0.2% → <0.1% |      26 MiB → 6 MiB |    12 → 3 | `<init>(Object, Object)`                                                                      | `groovy.lang.Tuple2`                                       |
|  -11.6% |  -19.603 MiB |  1.4% → 1.2% |   169 MiB → 149 MiB |   88 → 75 | `valueOf(long)`                                                                               | `java.lang.Long`                                           |
|   -6.1% |  -19.269 MiB |  2.6% → 2.4% |   317 MiB → 298 MiB | 141 → 152 | `stream(Spliterator, boolean)`                                                                | `java.util.stream.StreamSupport`                           |
|   -6.1% |  -19.008 MiB |  2.6% → 2.4% |   312 MiB → 293 MiB | 151 → 145 | `newArray(Class, int)`                                                                        | `java.lang.reflect.Array`                                  |
|  -28.2% |   -18.63 MiB |  0.5% → 0.4% |   66 MiB → 47.3 MiB |   33 → 25 | `make(byte, Class, MemberName, Class)`                                                        | `java.lang.invoke.DirectMethodHandle`                      |
|  -81.8% |   -17.99 MiB | 0.2% → <0.1% |      22 MiB → 4 MiB |    11 → 2 | `getPlainNodeReference(boolean)`                                                              | `org.codehaus.groovy.ast.ClassNode`                        |
|  -24.8% |  -17.447 MiB |  0.6% → 0.4% |   70.4 MiB → 53 MiB |   34 → 27 | `lambda$makeRef$0(MatchOps$MatchKind, Predicate)`                                             | `java.util.stream.MatchOps`                                |
|  -29.7% |   -17.14 MiB |  0.5% → 0.3% | 57.7 MiB → 40.6 MiB |   30 → 21 | `getParameterTypes()`                                                                         | `java.lang.reflect.Method`                                 |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `copyOfRange(Object[], int, int)` (`java.util.Arrays`)

| Change |       Delta |      % |              Size |   Samples | Location                |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------------- |
| +44.3% | +91.575 MiB | 100.0% | 207 MiB → 298 MiB | 106 → 155 | `java.util.Arrays:3768` |

##### `unreflect(Method)` (`java.lang.invoke.MethodHandles$Lookup`)

|  Change |      Delta |      % |             Size | Samples | Location                                     |
| ------: | ---------: | -----: | ---------------: | ------: | -------------------------------------------- |
| +250.0% | +79.96 MiB | 100.0% | 32 MiB → 112 MiB | 16 → 26 | `java.lang.invoke.MethodHandles$Lookup:3444` |

##### `toBigInteger(int)` (`java.math.MutableBigInteger`)

| Change |      Delta |      % |               Size | Samples | Location                          |
| -----: | ---------: | -----: | -----------------: | ------: | --------------------------------- |
| +41.4% | +38.18 MiB | 100.0% | 92.3 MiB → 130 MiB | 46 → 64 | `java.math.MutableBigInteger:191` |

##### `optimize(Pattern$Node)` (`java.util.regex.Pattern$BnM`)

| Change |       Delta |             % |              Size | Samples | Location                           |
| -----: | ----------: | ------------: | ----------------: | ------: | ---------------------------------- |
| +34.6% | +46.747 MiB | 75.7% → 85.0% | 135 MiB → 182 MiB | 68 → 90 | `java.util.regex.Pattern$BnM:5658` |
| -50.0% |  -7.996 MiB |   9.0% → 3.7% |    16 MiB → 8 MiB |   8 → 4 | `java.util.regex.Pattern$BnM:5692` |
| -12.0% |  -3.283 MiB | 15.3% → 11.2% | 27.3 MiB → 24 MiB | 14 → 12 | `java.util.regex.Pattern$BnM:5659` |

##### `valueOf(int)` (`java.lang.Integer`)

|  Change |       Delta |      % |              Size | Samples | Location                 |
| ------: | ----------: | -----: | ----------------: | ------: | ------------------------ |
| +305.7% | +30.558 MiB | 100.0% | 10 MiB → 40.6 MiB |  5 → 20 | `java.lang.Integer:1083` |

##### `copy()` (`java.lang.reflect.Method`)

|  Change |       Delta |      % |                Size | Samples | Location                       |
| ------: | ----------: | -----: | ------------------: | ------: | ------------------------------ |
| +131.1% | +28.577 MiB | 100.0% | 21.8 MiB → 50.4 MiB | 15 → 22 | `java.lang.reflect.Method:165` |

##### `matcher(CharSequence)` (`java.util.regex.Pattern`)

| Change |   Delta |      % |                Size | Samples | Location                       |
| -----: | ------: | -----: | ------------------: | ------: | ------------------------------ |
| +61.4% | +26 MiB | 100.0% | 42.4 MiB → 68.4 MiB | 21 → 35 | `java.util.regex.Pattern:1180` |

##### `resize()` (`java.util.HashMap`)

| Change |       Delta |      % |              Size | Samples | Location                |
| -----: | ----------: | -----: | ----------------: | ------: | ----------------------- |
| +21.6% | +25.964 MiB | 100.0% | 120 MiB → 146 MiB | 64 → 76 | `java.util.HashMap:710` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |       Delta |      % |              Size |   Samples | Location                 |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------ |
| +10.5% | +21.971 MiB | 100.0% | 210 MiB → 232 MiB | 107 → 120 | `java.util.HashMap:1909` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|   Change |       Delta |      % |               Size | Samples | Location                            |
| -------: | ----------: | -----: | -----------------: | ------: | ----------------------------------- |
| +2455.1% | +21.907 MiB | 100.0% | 914 KiB → 22.8 MiB |       1 | `java.util.zip.ZipFile$Source:1733` |

##### `lambdaFormEditor(LambdaForm)` (`java.lang.invoke.LambdaFormEditor`)

| Change |       Delta |      % |              Size |   Samples | Location                               |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------------------- |
|  +8.1% | +20.632 MiB | 100.0% | 255 MiB → 276 MiB | 132 → 143 | `java.lang.invoke.LambdaFormEditor:61` |

##### `map(Function)` (`java.util.stream.ReferencePipeline`)

| Change |       Delta |      % |              Size | Samples | Location                                 |
| -----: | ----------: | -----: | ----------------: | ------: | ---------------------------------------- |
| +24.8% | +18.325 MiB | 100.0% | 74 MiB → 92.4 MiB | 37 → 44 | `java.util.stream.ReferencePipeline:190` |

##### `of(byte, int, int)` (`java.lang.invoke.LambdaFormEditor$TransformKey`)

| Change |      Delta |      % |              Size |   Samples | Location                                             |
| -----: | ---------: | -----: | ----------------: | --------: | ---------------------------------------------------- |
|  +8.1% | +18.32 MiB | 100.0% | 227 MiB → 245 MiB | 116 → 125 | `java.lang.invoke.LambdaFormEditor$TransformKey:183` |

##### `<init>(Method, boolean)` (`java.lang.invoke.MemberName`)

| Change |       Delta |      % |              Size | Samples | Location                          |
| -----: | ----------: | -----: | ----------------: | ------: | --------------------------------- |
| +83.9% | +17.332 MiB | 100.0% | 20.6 MiB → 38 MiB | 11 → 18 | `java.lang.invoke.MemberName:564` |

##### `getChild(PredictionContext, int)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache`)

| Change |       Delta |      % |                Size | Samples | Location                                                      |
| -----: | ----------: | -----: | ------------------: | ------: | ------------------------------------------------------------- |
| +57.0% | +16.199 MiB | 100.0% | 28.4 MiB → 44.6 MiB | 15 → 21 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache:57` |

##### `basicTypesOrd(Class[])` (`java.lang.invoke.LambdaForm$BasicType`)

| Change |      Delta |      % |                Size | Samples | Location                                    |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------------------- |
| +71.8% | +16.11 MiB | 100.0% | 22.4 MiB → 38.6 MiB | 11 → 20 | `java.lang.invoke.LambdaForm$BasicType:211` |

##### `<init>()` (`java.util.regex.Pattern$BitClass`)

| Change |       Delta |      % |            Size | Samples | Location                                |
| -----: | ----------: | -----: | --------------: | ------: | --------------------------------------- |
| +88.9% | +15.994 MiB | 100.0% | 18 MiB → 34 MiB |  9 → 17 | `java.util.regex.Pattern$BitClass:3665` |

##### `makeImpl(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

| Change |        Delta |      % |              Size |   Samples | Location                          |
| -----: | -----------: | -----: | ----------------: | --------: | --------------------------------- |
| -13.1% | -107.555 MiB | 100.0% | 821 MiB → 713 MiB | 369 → 357 | `java.lang.invoke.MethodType:400` |

##### `makeBlockInliningWrapper(MethodHandle)` (`java.lang.invoke.MethodHandleImpl`)

| Change |        Delta |      % |              Size |   Samples | Location                                |
| -----: | -----------: | -----: | ----------------: | --------: | --------------------------------------- |
| -21.6% | -106.835 MiB | 100.0% | 495 MiB → 388 MiB | 199 → 202 | `java.lang.invoke.MethodHandleImpl:667` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change |       Delta |      % |              Size |   Samples | Location                                            |
| -----: | ----------: | -----: | ----------------: | --------: | --------------------------------------------------- |
| -11.0% | -70.305 MiB | 100.0% | 639 MiB → 569 MiB | 323 → 288 | `org.codehaus.groovy.vmplugin.v8.IndyInterface:293` |

##### `insertParameterTypes(int, Class[])` (`java.lang.invoke.MethodType`)

| Change |       Delta |      % |              Size |   Samples | Location                          |
| -----: | ----------: | -----: | ----------------: | --------: | --------------------------------- |
| -22.7% | -60.012 MiB | 100.0% | 265 MiB → 205 MiB | 134 → 109 | `java.lang.invoke.MethodType:500` |

##### `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change |       Delta |      % |                Size | Samples | Location                                            |
| -----: | ----------: | -----: | ------------------: | ------: | --------------------------------------------------- |
| -56.2% | -43.208 MiB | 100.0% | 76.8 MiB → 33.6 MiB | 37 → 17 | `org.codehaus.groovy.vmplugin.v8.IndyInterface:362` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

| Change |       Delta |      % |              Size |   Samples | Location                     |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------------- |
| -10.0% | -38.302 MiB | 100.0% | 384 MiB → 346 MiB | 199 → 174 | `java.lang.reflect.Array:78` |

##### `join(PredictionContext, PredictionContext)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache`)

| Change |       Delta |      % |              Size | Samples | Location                                                      |
| -----: | ----------: | -----: | ----------------: | ------: | ------------------------------------------------------------- |
| -72.9% | -23.323 MiB | 100.0% | 32 MiB → 8.66 MiB |  16 → 5 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache:73` |

##### `newSlice(int[], int, boolean)` (`java.util.regex.Pattern`)

| Change |       Delta |             % |                Size | Samples | Location                       |
| -----: | ----------: | ------------: | ------------------: | ------: | ------------------------------ |
| -52.6% | -13.333 MiB | 33.0% → 22.3% |   25.3 MiB → 12 MiB |  12 → 6 | `java.util.regex.Pattern:3708` |
| -18.9% |  -9.694 MiB | 67.0% → 77.7% | 51.4 MiB → 41.7 MiB | 25 → 21 | `java.util.regex.Pattern:3691` |

##### `initTable()` (`java.util.concurrent.ConcurrentHashMap`)

|  Change |       Delta |             % |           Size | Samples | Location                                      |
| ------: | ----------: | ------------: | -------------: | ------: | --------------------------------------------- |
| removed | -22.063 MiB | 100.0% → 0.0% | 22.1 MiB → 0 B |   2 → 0 | `java.util.concurrent.ConcurrentHashMap:2301` |

##### `convertToTypeArray(Object[])` (`org.codehaus.groovy.runtime.MetaClassHelper`)

| Change |       Delta |      % |              Size | Samples | Location                                          |
| -----: | ----------: | -----: | ----------------: | ------: | ------------------------------------------------- |
| -29.0% | -20.301 MiB | 100.0% | 70 MiB → 49.7 MiB | 35 → 26 | `org.codehaus.groovy.runtime.MetaClassHelper:641` |

##### `<init>(Object, Object)` (`groovy.lang.Tuple2`)

| Change |      Delta |      % |           Size | Samples | Location                |
| -----: | ---------: | -----: | -------------: | ------: | ----------------------- |
| -76.9% | -19.99 MiB | 100.0% | 26 MiB → 6 MiB |  12 → 3 | `groovy.lang.Tuple2:30` |

##### `valueOf(long)` (`java.lang.Long`)

| Change |       Delta |      % |              Size | Samples | Location              |
| -----: | ----------: | -----: | ----------------: | ------: | --------------------- |
| -11.6% | -19.603 MiB | 100.0% | 169 MiB → 149 MiB | 88 → 75 | `java.lang.Long:1207` |

##### `stream(Spliterator, boolean)` (`java.util.stream.StreamSupport`)

| Change |       Delta |      % |              Size |   Samples | Location                            |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------------------------- |
|  -6.1% | -19.269 MiB | 100.0% | 317 MiB → 298 MiB | 141 → 152 | `java.util.stream.StreamSupport:69` |

##### `make(byte, Class, MemberName, Class)` (`java.lang.invoke.DirectMethodHandle`)

| Change |      Delta |             % |              Size | Samples | Location                                  |
| -----: | ---------: | ------------: | ----------------: | ------: | ----------------------------------------- |
| -35.7% | -9.995 MiB | 42.4% → 38.0% |   28 MiB → 18 MiB |  14 → 9 | `java.lang.invoke.DirectMethodHandle:103` |
| -21.2% | -4.665 MiB | 33.3% → 36.6% | 22 MiB → 17.3 MiB |  11 → 9 | `java.lang.invoke.DirectMethodHandle:107` |
| -24.8% | -3.969 MiB | 24.2% → 25.4% |   16 MiB → 12 MiB |   8 → 7 | `java.lang.invoke.DirectMethodHandle:82`  |

##### `getPlainNodeReference(boolean)` (`org.codehaus.groovy.ast.ClassNode`)

| Change |      Delta |      % |           Size | Samples | Location                                 |
| -----: | ---------: | -----: | -------------: | ------: | ---------------------------------------- |
| -81.8% | -17.99 MiB | 100.0% | 22 MiB → 4 MiB |  11 → 2 | `org.codehaus.groovy.ast.ClassNode:1531` |

##### `lambda$makeRef$0(MatchOps$MatchKind, Predicate)` (`java.util.stream.MatchOps`)

| Change |       Delta |      % |              Size | Samples | Location                       |
| -----: | ----------: | -----: | ----------------: | ------: | ------------------------------ |
| -24.8% | -17.447 MiB | 100.0% | 70.4 MiB → 53 MiB | 34 → 27 | `java.util.stream.MatchOps:97` |

##### `getParameterTypes()` (`java.lang.reflect.Method`)

| Change |      Delta |      % |                Size | Samples | Location                       |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------ |
| -29.7% | -17.14 MiB | 100.0% | 57.7 MiB → 40.6 MiB | 30 → 21 | `java.lang.reflect.Method:318` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `copyOfRange(Object[], int, int)` (`java.util.Arrays`)

|  Change |       Delta |             % |               Size | Samples | Caller                                                           | Location                         |
| ------: | ----------: | ------------: | -----------------: | ------: | ---------------------------------------------------------------- | -------------------------------- |
| +131.2% | +87.388 MiB | 32.2% → 51.6% | 66.6 MiB → 154 MiB | 35 → 82 | `dropParameterTypes(int, int)`                                   | `java.lang.invoke.MethodType`    |
|   +3.0% |  +4.187 MiB | 67.8% → 48.4% |  140 MiB → 144 MiB | 71 → 73 | `dropArgumentsToMatch(MethodHandle, int, Class[], int, boolean)` | `java.lang.invoke.MethodHandles` |

##### `make(MethodType, LambdaForm, Object, Object, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LLLL`)

| Change |       Delta |      % |              Size |   Samples | Caller                                                                 | Location                                     |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| +31.7% | +88.066 MiB | 100.0% | 278 MiB → 366 MiB | 140 → 122 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `unreflect(Method)` (`java.lang.invoke.MethodHandles$Lookup`)

|  Change |      Delta |      % |             Size | Samples | Caller                                             | Location                                                  |
| ------: | ---------: | -----: | ---------------: | ------: | -------------------------------------------------- | --------------------------------------------------------- |
| +250.0% | +79.96 MiB | 100.0% | 32 MiB → 112 MiB | 16 → 26 | `correctClassForNameAndUnReflectOtherwise(Method)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `make(MethodType, LambdaForm, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LLLLLL`)

| Change |       Delta |      % |              Size | Samples | Caller                                                                                 | Location                                     |
| -----: | ----------: | -----: | ----------------: | ------: | -------------------------------------------------------------------------------------- | -------------------------------------------- |
| +92.0% | +44.066 MiB | 100.0% | 47.9 MiB → 92 MiB | 23 → 45 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `make(MethodType, LambdaForm, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LL`)

| Change |       Delta |      % |              Size |   Samples | Caller                                                 | Location                                     |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------------------------------ | -------------------------------------------- |
| +13.0% | +43.452 MiB | 100.0% | 333 MiB → 377 MiB | 171 → 194 | `invokeStatic(Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `toBigInteger(int)` (`java.math.MutableBigInteger`)

| Change |       Delta |             % |               Size | Samples | Caller                                            | Location               |
| -----: | ----------: | ------------: | -----------------: | ------: | ------------------------------------------------- | ---------------------- |
| +46.5% | +40.179 MiB | 93.5% → 96.9% | 86.3 MiB → 126 MiB | 43 → 62 | `divideAndRemainderKnuth(BigInteger)`             | `java.math.BigInteger` |
| -33.3% |  -1.999 MiB |   6.5% → 3.1% |      6 MiB → 4 MiB |   3 → 2 | `divideAndRound(BigInteger, long, int, int, int)` | `java.math.BigDecimal` |

##### `optimize(Pattern$Node)` (`java.util.regex.Pattern$BnM`)

| Change |       Delta |      % |              Size |  Samples | Caller      | Location                  |
| -----: | ----------: | -----: | ----------------: | -------: | ----------- | ------------------------- |
| +19.9% | +35.468 MiB | 100.0% | 178 MiB → 214 MiB | 90 → 106 | `compile()` | `java.util.regex.Pattern` |

##### `valueOf(int)` (`java.lang.Integer`)

|  Change |       Delta |             % |             Size | Samples | Caller                                                          | Location                                               |
| ------: | ----------: | ------------: | ---------------: | ------: | --------------------------------------------------------------- | ------------------------------------------------------ |
| +214.2% | +12.844 MiB | 60.0% → 46.5% | 6 MiB → 18.8 MiB |   3 → 9 | `adaptivePredict(TokenStream, int, ParserRuleContext, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| +600.0% | +11.994 MiB | 20.0% → 34.5% |   2 MiB → 14 MiB |   1 → 7 | `boxInteger(int)`                                               | `sun.invoke.util.ValueConversions`                     |
|     new |  +1.999 MiB |   0.0% → 4.9% |      0 B → 2 MiB |   0 → 1 | `callClosureForLine(Closure, String, int)`                      | `org.codehaus.groovy.runtime.DefaultGroovyMethods`     |
|     new |  +1.999 MiB |   0.0% → 4.9% |      0 B → 2 MiB |   0 → 1 | `execATN(DFA, TokenStream, int, SimulatorState)`                | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
|     new |  +1.999 MiB |   0.0% → 4.9% |      0 B → 2 MiB |   0 → 1 | `addImpl(Number, Number)`                                       | `org.codehaus.groovy.runtime.typehandling.IntegerMath` |

##### `copy()` (`java.lang.reflect.Method`)

|  Change |       Delta |      % |                Size | Samples | Caller               | Location                          |
| ------: | ----------: | -----: | ------------------: | ------: | -------------------- | --------------------------------- |
| +131.1% | +28.577 MiB | 100.0% | 21.8 MiB → 50.4 MiB | 15 → 22 | `copyMethod(Method)` | `java.lang.reflect.ReflectAccess` |

##### `matcher(CharSequence)` (`java.util.regex.Pattern`)

|  Change |       Delta |             % |              Size | Samples | Caller                              | Location                                    |
| ------: | ----------: | ------------: | ----------------: | ------: | ----------------------------------- | ------------------------------------------- |
| +100.1% | +24.002 MiB | 56.6% → 70.2% |   24 MiB → 48 MiB | 11 → 24 | `matches(String, CharSequence)`     | `java.util.regex.Pattern`                   |
| removed |  -5.997 MiB |  14.2% → 0.0% |       6 MiB → 0 B |   3 → 0 | `replaceAll(String, String)`        | `java.lang.String`                          |
|  +50.0% |  +5.996 MiB | 28.3% → 26.3% |   12 MiB → 18 MiB |   6 → 9 | `findRegex(Object, Object)`         | `org.codehaus.groovy.runtime.InvokerHelper` |
|     new |  +1.999 MiB |   0.0% → 2.9% |       0 B → 2 MiB |   0 → 1 | `replaceFirst(String, String)`      | `java.lang.String`                          |
|   -0.3% |   -1.25 KiB |   0.9% → 0.5% | 384 KiB → 382 KiB |       1 | `split(CharSequence, int, boolean)` | `java.util.regex.Pattern`                   |

##### `resize()` (`java.util.HashMap`)

|  Change |        Delta |             % |              Size | Samples | Caller                                          | Location            |
| ------: | -----------: | ------------: | ----------------: | ------: | ----------------------------------------------- | ------------------- |
|  +23.5% |  +27.725 MiB | 98.0% → 99.6% | 118 MiB → 146 MiB | 62 → 75 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
| removed |   -1.998 MiB |   1.7% → 0.0% |       2 MiB → 0 B |   1 → 0 | `treeifyBin(HashMap$Node[], int)`               | `java.util.HashMap` |
|  +63.6% | +243.632 KiB |   0.3% → 0.4% | 383 KiB → 627 KiB |       1 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |       Delta |      % |              Size |   Samples | Caller                                          | Location            |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------------------------------------- | ------------------- |
| +10.5% | +21.971 MiB | 100.0% | 210 MiB → 232 MiB | 107 → 120 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|   Change |       Delta |      % |               Size | Samples | Caller                                          | Location                       |
| -------: | ----------: | -----: | -----------------: | ------: | ----------------------------------------------- | ------------------------------ |
| +2455.1% | +21.907 MiB | 100.0% | 914 KiB → 22.8 MiB |       1 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `lambdaFormEditor(LambdaForm)` (`java.lang.invoke.LambdaFormEditor`)

| Change |       Delta |      % |              Size |   Samples | Caller     | Location                      |
| -----: | ----------: | -----: | ----------------: | --------: | ---------- | ----------------------------- |
|  +8.1% | +20.632 MiB | 100.0% | 255 MiB → 276 MiB | 132 → 143 | `editor()` | `java.lang.invoke.LambdaForm` |

##### `map(Function)` (`java.util.stream.ReferencePipeline`)

| Change |       Delta |              % |              Size | Samples | Caller                                                          | Location                                                  |
| -----: | ----------: | -------------: | ----------------: | ------: | --------------------------------------------------------------- | --------------------------------------------------------- |
| +16.7% | +12.328 MiB | 100.0% → 93.5% | 74 MiB → 86.4 MiB | 37 → 41 | `setGuards(Object)`                                             | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
|    new |  +1.998 MiB |    0.0% → 2.2% |       0 B → 2 MiB |   0 → 1 | `getAnnotations()`                                              | `org.apache.groovy.parser.antlr4.ModifierManager`         |
|    new |  +1.998 MiB |    0.0% → 2.2% |       0 B → 2 MiB |   0 → 1 | `createPathExpression(Expression, List)`                        | `org.apache.groovy.parser.antlr4.AstBuilder`              |
|    new |  +1.998 MiB |    0.0% → 2.2% |       0 B → 2 MiB |   0 → 1 | `visitCommandExpression(GroovyParser$CommandExpressionContext)` | `org.apache.groovy.parser.antlr4.AstBuilder`              |

##### `of(byte, int, int)` (`java.lang.invoke.LambdaFormEditor$TransformKey`)

| Change |       Delta |             % |                Size | Samples | Caller                                            | Location                            |
| -----: | ----------: | ------------: | ------------------: | ------: | ------------------------------------------------- | ----------------------------------- |
| +20.6% | +27.112 MiB | 57.9% → 64.6% |   131 MiB → 159 MiB | 66 → 82 | `addArgumentForm(int, LambdaForm$BasicType)`      | `java.lang.invoke.LambdaFormEditor` |
| -20.6% | -16.788 MiB | 35.9% → 26.4% | 81.6 MiB → 64.8 MiB | 43 → 32 | `filterArgumentForm(int, LambdaForm$BasicType)`   | `java.lang.invoke.LambdaFormEditor` |
| +57.1% |  +7.996 MiB |   6.2% → 9.0% |     14 MiB → 22 MiB |  7 → 11 | `filterReturnForm(LambdaForm$BasicType, boolean)` | `java.lang.invoke.LambdaFormEditor` |

##### `<init>(Method, boolean)` (`java.lang.invoke.MemberName`)

| Change |       Delta |      % |              Size | Samples | Caller           | Location                      |
| -----: | ----------: | -----: | ----------------: | ------: | ---------------- | ----------------------------- |
| +83.9% | +17.332 MiB | 100.0% | 20.6 MiB → 38 MiB | 11 → 18 | `<init>(Method)` | `java.lang.invoke.MemberName` |

##### `getChild(PredictionContext, int)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache`)

| Change |       Delta |      % |                Size | Samples | Caller                                                              | Location                                               |
| -----: | ----------: | -----: | ------------------: | ------: | ------------------------------------------------------------------- | ------------------------------------------------------ |
| +57.0% | +16.199 MiB | 100.0% | 28.4 MiB → 44.6 MiB | 15 → 21 | `ruleTransition(ATNConfig, RuleTransition, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `basicTypesOrd(Class[])` (`java.lang.invoke.LambdaForm$BasicType`)

| Change |      Delta |      % |                Size | Samples | Caller                                  | Location                            |
| -----: | ---------: | -----: | ------------------: | ------: | --------------------------------------- | ----------------------------------- |
| +71.8% | +16.11 MiB | 100.0% | 22.4 MiB → 38.6 MiB | 11 → 20 | `collectArgumentsForm(int, MethodType)` | `java.lang.invoke.LambdaFormEditor` |

##### `<init>()` (`java.util.regex.Pattern$BitClass`)

| Change |       Delta |      % |            Size | Samples | Caller           | Location                  |
| -----: | ----------: | -----: | --------------: | ------: | ---------------- | ------------------------- |
| +88.9% | +15.994 MiB | 100.0% | 18 MiB → 34 MiB |  9 → 17 | `clazz(boolean)` | `java.util.regex.Pattern` |

##### `makeImpl(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

| Change |       Delta |             % |              Size |   Samples | Caller                                | Location                      |
| -----: | ----------: | ------------: | ----------------: | --------: | ------------------------------------- | ----------------------------- |
| -10.1% | -42.616 MiB | 51.6% → 53.4% | 423 MiB → 381 MiB | 172 → 188 | `methodType(Class, Class[], boolean)` | `java.lang.invoke.MethodType` |
| -12.4% |   -41.8 MiB | 41.2% → 41.6% | 338 MiB → 296 MiB | 169 → 151 | `insertParameterTypes(int, Class[])`  | `java.lang.invoke.MethodType` |
| -42.5% | -25.137 MiB |   7.2% → 4.8% | 59.1 MiB → 34 MiB |   28 → 17 | `methodType(Class, Class)`            | `java.lang.invoke.MethodType` |
|    new |  +1.998 MiB |   0.0% → 0.3% |       0 B → 2 MiB |     0 → 1 | `changeParameterType(int, Class)`     | `java.lang.invoke.MethodType` |

##### `makeBlockInliningWrapper(MethodHandle)` (`java.lang.invoke.MethodHandleImpl`)

| Change |        Delta |      % |              Size |   Samples | Caller                  | Location                            |
| -----: | -----------: | -----: | ----------------: | --------: | ----------------------- | ----------------------------------- |
| -21.6% | -106.835 MiB | 100.0% | 495 MiB → 388 MiB | 199 → 202 | `profile(MethodHandle)` | `java.lang.invoke.MethodHandleImpl` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change |       Delta |      % |              Size |   Samples | Caller                                                                                      | Location                                             |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| -11.0% | -70.305 MiB | 100.0% | 639 MiB → 569 MiB | 323 → 288 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a8010b2800` |

##### `insertParameterTypes(int, Class[])` (`java.lang.invoke.MethodType`)

| Change |       Delta |             % |                Size | Samples | Caller                                             | Location                              |
| -----: | ----------: | ------------: | ------------------: | ------: | -------------------------------------------------- | ------------------------------------- |
| -40.7% | -51.728 MiB | 48.1% → 36.9% |  127 MiB → 75.4 MiB | 65 → 40 | `dropArgumentsTrusted(MethodHandle, int, Class[])` | `java.lang.invoke.MethodHandles`      |
| -54.7% | -19.305 MiB |  13.3% → 7.8% |   35.3 MiB → 16 MiB |  18 → 8 | `getInvocationType()`                              | `java.lang.invoke.MemberName`         |
| +92.2% | +14.472 MiB |  5.9% → 14.8% | 15.7 MiB → 30.2 MiB |  9 → 16 | `make(byte, Class, MemberName, Class)`             | `java.lang.invoke.DirectMethodHandle` |
| -15.1% |  -7.318 MiB | 18.3% → 20.1% | 48.4 MiB → 41.1 MiB |      23 | `replaceParameterTypes(int, int, Class[])`         | `java.lang.invoke.MethodType`         |
| +15.7% |  +5.015 MiB | 12.1% → 18.1% |     32 MiB → 37 MiB | 16 → 19 | `invokerType()`                                    | `java.lang.invoke.MethodType`         |

##### `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change |       Delta |             % |              Size | Samples | Caller                                                                                           | Location                                        |
| -----: | ----------: | ------------: | ----------------: | ------: | ------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| -81.7% | -26.846 MiB | 42.8% → 17.8% |  32.8 MiB → 6 MiB |  15 → 3 | `access$000(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`   | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
| -37.2% | -16.361 MiB | 57.2% → 82.2% | 44 MiB → 27.6 MiB | 22 → 14 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

| Change |       Delta |             % |              Size |   Samples | Caller                                             | Location                                             |
| -----: | ----------: | ------------: | ----------------: | --------: | -------------------------------------------------- | ---------------------------------------------------- |
|  -9.5% | -36.303 MiB | 99.0% → 99.4% | 380 MiB → 344 MiB | 197 → 173 | `invokeStatic(Object, Object, int)`                | `java.lang.invoke.LambdaForm$DMH.0x000000a80109a000` |
| -50.0% |  -1.999 MiB |   1.0% → 0.6% |     4 MiB → 2 MiB |     2 → 1 | `<init>(Object[], Comparator, Object[], int, int)` | `java.util.TimSort`                                  |

##### `fillInStackTrace(int)` (`java.lang.Throwable`)

| Change |     Delta |      % |              Size |   Samples | Caller               | Location              |
| -----: | --------: | -----: | ----------------: | --------: | -------------------- | --------------------- |
|  -5.0% | -28.8 MiB | 100.0% | 572 MiB → 543 MiB | 303 → 288 | `fillInStackTrace()` | `java.lang.Throwable` |

##### `join(PredictionContext, PredictionContext)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache`)

|  Change |       Delta |              % |              Size | Samples | Caller                                                               | Location                                               |
| ------: | ----------: | -------------: | ----------------: | ------: | -------------------------------------------------------------------- | ------------------------------------------------------ |
|  -69.1% | -19.325 MiB | 87.5% → 100.0% | 28 MiB → 8.66 MiB |  14 → 5 | `join(PredictionContext, PredictionContext, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`  |
| removed |  -3.998 MiB |   12.5% → 0.0% |       4 MiB → 0 B |   2 → 0 | `isConflicted(ATNConfigSet, PredictionContextCache)`                 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `newSlice(int[], int, boolean)` (`java.util.regex.Pattern`)

| Change |       Delta |      % |                Size | Samples | Caller   | Location                  |
| -----: | ----------: | -----: | ------------------: | ------: | -------- | ------------------------- |
| -30.0% | -23.027 MiB | 100.0% | 76.7 MiB → 53.7 MiB | 37 → 27 | `atom()` | `java.util.regex.Pattern` |

##### `make(MethodType, LambdaForm, Object, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LLL`)

| Change |       Delta |      % |              Size | Samples | Caller                                                         | Location                                     |
| -----: | ----------: | -----: | ----------------: | ------: | -------------------------------------------------------------- | -------------------------------------------- |
| -14.0% | -22.265 MiB | 100.0% | 159 MiB → 136 MiB | 80 → 68 | `invokeStatic(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `initTable()` (`java.util.concurrent.ConcurrentHashMap`)

|  Change |       Delta |             % |           Size | Samples | Caller                            | Location                                 |
| ------: | ----------: | ------------: | -------------: | ------: | --------------------------------- | ---------------------------------------- |
| removed | -22.063 MiB | 100.0% → 0.0% | 22.1 MiB → 0 B |   2 → 0 | `putVal(Object, Object, boolean)` | `java.util.concurrent.ConcurrentHashMap` |

##### `convertToTypeArray(Object[])` (`org.codehaus.groovy.runtime.MetaClassHelper`)

| Change |       Delta |             % |              Size | Samples | Caller                                                            | Location                                                 |
| -----: | ----------: | ------------: | ----------------: | ------: | ----------------------------------------------------------------- | -------------------------------------------------------- |
| -40.2% | -20.893 MiB | 74.3% → 62.6% | 52 MiB → 31.1 MiB | 26 → 16 | `invokeMethod(Class, Object, String, Object[], boolean, boolean)` | `org.codehaus.groovy.runtime.metaclass.ClosureMetaClass` |
|    new |  +3.998 MiB |   0.0% → 8.1% |       0 B → 4 MiB |   0 → 2 | `getSuperMethodWithCaching(Object[], MetaMethodIndex$Entry)`      | `groovy.lang.MetaClassImpl`                              |
| -24.3% |  -3.405 MiB | 20.0% → 21.3% | 14 MiB → 10.6 MiB |   7 → 6 | `getNormalMethodWithCaching(Object[], MetaMethodIndex$Entry)`     | `groovy.lang.MetaClassImpl`                              |
|    ~0% |       +24 B |   5.7% → 8.1% |             4 MiB |       2 | `retrieveStaticMethod(String, Object[])`                          | `groovy.lang.MetaClassImpl`                              |

##### `<init>(Object, Object)` (`groovy.lang.Tuple2`)

| Change |      Delta |      % |           Size | Samples | Caller                  | Location            |
| -----: | ---------: | -----: | -------------: | ------: | ----------------------- | ------------------- |
| -76.9% | -19.99 MiB | 100.0% | 26 MiB → 6 MiB |  12 → 3 | `tuple(Object, Object)` | `groovy.lang.Tuple` |

##### `valueOf(long)` (`java.lang.Long`)

| Change |       Delta |             % |              Size | Samples | Caller                                   | Location                                         |
| -----: | ----------: | ------------: | ----------------: | ------: | ---------------------------------------- | ------------------------------------------------ |
| -13.6% | -21.607 MiB | 94.1% → 92.0% | 159 MiB → 137 MiB | 82 → 70 | `add(ATNConfig, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet` |
| +20.1% |  +2.003 MiB |   5.9% → 8.0% | 9.99 MiB → 12 MiB |   6 → 5 | `boxLong(long)`                          | `sun.invoke.util.ValueConversions`               |

##### `stream(Spliterator, boolean)` (`java.util.stream.StreamSupport`)

| Change |      Delta |             % |                Size |   Samples | Caller                       | Location               |
| -----: | ---------: | ------------: | ------------------: | --------: | ---------------------------- | ---------------------- |
|  -6.6% | -20.73 MiB | 98.4% → 97.8% |   312 MiB → 292 MiB | 138 → 148 | `stream(Object[], int, int)` | `java.util.Arrays`     |
| +28.4% | +1.461 MiB |   1.6% → 2.2% | 5.15 MiB → 6.61 MiB |     3 → 4 | `stream()`                   | `java.util.Collection` |

##### `newArray(Class, int)` (`java.lang.reflect.Array`)

| Change |       Delta |      % |              Size |   Samples | Caller                    | Location                  |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------- | ------------------------- |
|  -6.1% | -19.008 MiB | 100.0% | 312 MiB → 293 MiB | 151 → 145 | `newInstance(Class, int)` | `java.lang.reflect.Array` |

##### `make(byte, Class, MemberName, Class)` (`java.lang.invoke.DirectMethodHandle`)

| Change |      Delta |      % |              Size | Samples | Caller                                                                                   | Location                                |
| -----: | ---------: | -----: | ----------------: | ------: | ---------------------------------------------------------------------------------------- | --------------------------------------- |
| -28.2% | -18.63 MiB | 100.0% | 66 MiB → 47.3 MiB | 33 → 25 | `getDirectMethodCommon(byte, Class, MemberName, boolean, boolean, MethodHandles$Lookup)` | `java.lang.invoke.MethodHandles$Lookup` |

##### `getPlainNodeReference(boolean)` (`org.codehaus.groovy.ast.ClassNode`)

| Change |      Delta |      % |           Size | Samples | Caller                    | Location                            |
| -----: | ---------: | -----: | -------------: | ------: | ------------------------- | ----------------------------------- |
| -81.8% | -17.99 MiB | 100.0% | 22 MiB → 4 MiB |  11 → 2 | `getPlainNodeReference()` | `org.codehaus.groovy.ast.ClassNode` |

##### `lambda$makeRef$0(MatchOps$MatchKind, Predicate)` (`java.util.stream.MatchOps`)

| Change |       Delta |      % |              Size | Samples | Caller  | Location                                               |
| -----: | ----------: | -----: | ----------------: | ------: | ------- | ------------------------------------------------------ |
| -24.8% | -17.447 MiB | 100.0% | 70.4 MiB → 53 MiB | 34 → 27 | `get()` | `java.util.stream.MatchOps$$Lambda.0x000000a80101d268` |

##### `getParameterTypes()` (`java.lang.reflect.Method`)

|  Change |        Delta |             % |              Size | Samples | Caller                                             | Location                                                  |
| ------: | -----------: | ------------: | ----------------: | ------: | -------------------------------------------------- | --------------------------------------------------------- |
|  -42.2% |  -13.143 MiB | 53.9% → 44.3% | 31.1 MiB → 18 MiB |  16 → 9 | `correctClassForNameAndUnReflectOtherwise(Method)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
|  -15.4% |   -3.998 MiB | 45.0% → 54.2% |   26 MiB → 22 MiB | 13 → 11 | `<init>(Method, boolean)`                          | `java.lang.invoke.MemberName`                             |
|     new |  +626.64 KiB |   0.0% → 1.5% |     0 B → 627 KiB |   0 → 1 | `getGenericParameterTypes()`                       | `java.lang.reflect.Executable`                            |
| removed | -625.171 KiB |   1.1% → 0.0% |     625 KiB → 0 B |   1 → 0 | `compareToMethod(Method)`                          | `org.codehaus.groovy.reflection.CachedMethod`             |

### Total size

#### Regressions

Functions with the largest increase in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Standard library

|     Change |        Delta |             % |               Size |     Samples | Function                                         | Location                                            |
| ---------: | -----------: | ------------: | -----------------: | ----------: | ------------------------------------------------ | --------------------------------------------------- |
|    +877.8% |   +3.368 GiB |  3.2% → 31.3% | 393 MiB → 3.75 GiB | 198 → 1,935 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000a8013db800` |
|   +1180.0% |   +3.083 GiB |  2.2% → 27.9% | 268 MiB → 3.34 GiB | 139 → 1,743 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000a8013d2000` |
|  +13004.8% |   +2.973 GiB |  0.2% → 25.0% |   23.4 MiB → 3 GiB |  12 → 1,499 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a80160ac00` |
|  +30276.1% |   +2.961 GiB |  0.1% → 24.8% |  10 MiB → 2.97 GiB |  11 → 1,558 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000a801140c00` |
| +144596.1% |   +2.822 GiB | <0.1% → 23.6% |   2 MiB → 2.82 GiB |   1 → 1,412 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000a801829c00` |
|    +465.4% |   +2.668 GiB |  4.9% → 27.1% | 587 MiB → 3.24 GiB | 302 → 1,763 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000a801141000` |
|  +27754.4% |    +1.11 GiB |  <0.1% → 9.3% | 4.1 MiB → 1.11 GiB |     4 → 576 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000a8012d8400` |
| +117271.5% |   +1.076 GiB |  <0.1% → 9.0% | 962 KiB → 1.08 GiB |     1 → 558 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000a801398000` |
|  +14007.3% | +839.561 MiB |  <0.1% → 6.9% | 5.99 MiB → 846 MiB |     3 → 418 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000a80160a800` |
|    +227.6% | +677.811 MiB |   2.5% → 8.0% |  298 MiB → 976 MiB |   150 → 502 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000a801150800` |
|   +8199.7% | +655.654 MiB |   0.1% → 5.4% |    8 MiB → 664 MiB |     4 → 328 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000a801607c00` |
|    +175.7% | +590.058 MiB |   2.8% → 7.5% |  336 MiB → 926 MiB |   167 → 471 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000a801105400` |
|  +56528.3% | +531.195 MiB |  <0.1% → 4.3% |  962 KiB → 532 MiB |     1 → 272 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000a80138c800` |
|  +11476.8% | +485.928 MiB |  <0.1% → 4.0% | 4.23 MiB → 490 MiB |     3 → 250 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000a8012c6400` |
|   +8280.5% | +409.966 MiB |  <0.1% → 3.4% | 4.95 MiB → 415 MiB |     4 → 211 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000a8013dc400` |
|        new | +395.803 MiB |   0.0% → 3.2% |      0 B → 396 MiB |     0 → 168 | `invoke(Object, Object, int, Object)`            | `java.lang.invoke.LambdaForm$MH.0x000000a80146c800` |
|  +19399.9% | +387.807 MiB |  <0.1% → 3.2% |    2 MiB → 390 MiB |     1 → 165 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000a80197d000` |
|  +18800.0% | +375.813 MiB |  <0.1% → 3.1% |    2 MiB → 378 MiB |     1 → 159 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000a80197d400` |
|  +18800.0% | +375.813 MiB |  <0.1% → 3.1% |    2 MiB → 378 MiB |     1 → 159 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000a80197f400` |
|  +18799.9% | +375.813 MiB |  <0.1% → 3.1% |    2 MiB → 378 MiB |     1 → 159 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000a80197f000` |

#### Improvements

Functions with the largest decrease in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Standard library

|  Change |        Delta |             % |                Size |       Samples | Function                                         | Location                                            |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------ | --------------------------------------------------- |
|  -88.0% |    -3.18 GiB |  30.6% → 3.6% |  3.62 GiB → 446 MiB |   1,849 → 226 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000a80118c000` |
|  -99.4% |   -3.055 GiB |  26.0% → 0.2% | 3.07 GiB → 18.6 MiB |    1,617 → 15 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000a801141400` |
|  -98.8% |   -2.808 GiB |  24.1% → 0.3% | 2.84 GiB → 35.9 MiB |    1,412 → 18 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a801537400` |
|  -87.7% |   -2.788 GiB |  26.9% → 3.3% |  3.18 GiB → 399 MiB |   1,737 → 158 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000a801133000` |
|  -99.7% |   -2.723 GiB |  23.1% → 0.1% | 2.73 GiB → 8.23 MiB |     1,415 → 4 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000a8013a0400` |
|  -72.0% |   -1.889 GiB |  22.2% → 6.1% |  2.62 GiB → 752 MiB |   1,300 → 368 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000a80182f000` |
|  -95.0% |   -1.055 GiB |   9.4% → 0.5% | 1.11 GiB → 56.5 MiB |      577 → 30 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000a801179400` |
|  -98.4% | -950.895 MiB |   8.0% → 0.1% |  966 MiB → 15.3 MiB |       484 → 8 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000a80116c000` |
|  -68.3% | -877.934 MiB |  10.6% → 3.3% |  1.26 GiB → 408 MiB |     695 → 202 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000a8012ae000` |
|  -99.1% | -861.467 MiB |   7.2% → 0.1% |     869 MiB → 8 MiB |       414 → 4 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000a8014dec00` |
|  -22.9% |  -817.06 MiB | 29.4% → 22.4% | 3.48 GiB → 2.68 GiB | 1,816 → 1,381 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000a8013dbc00` |
|  -99.5% |  -733.56 MiB |  6.1% → <0.1% |     738 MiB → 4 MiB |       363 → 2 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000a80156d400` |
|  -92.2% | -641.579 MiB |   5.7% → 0.4% |    696 MiB → 54 MiB |      328 → 26 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000a80155d800` |
|  -99.6% |  -484.48 MiB |  4.0% → <0.1% |  486 MiB → 1.72 MiB |       235 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000a8014a2400` |
|  -38.3% | -391.405 MiB |   8.4% → 5.1% | 1,021 MiB → 629 MiB |     522 → 327 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000a801145c00` |
|  -88.5% | -371.195 MiB |   3.5% → 0.4% |  420 MiB → 48.4 MiB |      213 → 24 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000a801184c00` |
|  -99.7% | -349.556 MiB |  2.9% → <0.1% |  351 MiB → 1.09 MiB |       176 → 1 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000a801185000` |
|  -72.5% | -323.062 MiB |   3.7% → 1.0% |   446 MiB → 123 MiB |      213 → 62 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000a801398c00` |
|  -99.4% | -319.841 MiB |  2.7% → <0.1% |     322 MiB → 2 MiB |       140 → 1 | `invoke(Object, Object, int, Object)`            | `java.lang.invoke.LambdaForm$MH.0x000000a801450400` |
| removed | -319.841 MiB |   2.6% → 0.0% |       320 MiB → 0 B |       139 → 0 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700149d800` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8013db800`)

|  Change |       Delta |             % |           Size |   Samples | Callee                                                                                      | Location                                             |
| ------: | ----------: | ------------: | -------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |  +3.748 GiB |  0.0% → 99.9% | 0 B → 3.75 GiB | 0 → 1,933 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a8010b2800` |
| removed | -392.93 MiB | 100.0% → 0.0% |  393 MiB → 0 B |   198 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000700113fc00`  |
|     new |  +3.998 MiB |   0.0% → 0.1% |    0 B → 4 MiB |     0 → 2 | `collector(Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x000000a801140000`  |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8013d2000`)

|  Change |        Delta |             % |           Size |   Samples | Callee                                    | Location                                             |
| ------: | -----------: | ------------: | -------------: | --------: | ----------------------------------------- | ---------------------------------------------------- |
|     new |   +3.344 GiB | 0.0% → 100.0% | 0 B → 3.34 GiB | 0 → 1,743 | `invokeSpecial(Object, Object, Object)`   | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed | -219.124 MiB |  81.9% → 0.0% |  219 MiB → 0 B |   114 → 0 | `invokeSpecial(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800` |
| removed |  -41.972 MiB |  15.7% → 0.0% |   42 MiB → 0 B |    21 → 0 | `invokeVirtual(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001101c00` |
| removed |   -6.451 MiB |   2.4% → 0.0% | 6.45 MiB → 0 B |     4 → 0 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a80160ac00`)

|    Change |      Delta |      % |             Size |    Samples | Callee                                                  | Location                                             |
| --------: | ---------: | -----: | ---------------: | ---------: | ------------------------------------------------------- | ---------------------------------------------------- |
| +13004.8% | +2.973 GiB | 100.0% | 23.4 MiB → 3 GiB | 12 → 1,499 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a80118e800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801140c00`)

|  Change |      Delta |            % |           Size |   Samples | Callee                                   | Location                                             |
| ------: | ---------: | -----------: | -------------: | --------: | ---------------------------------------- | ---------------------------------------------------- |
|     new | +2.965 GiB | 0.0% → 99.8% | 0 B → 2.97 GiB | 0 → 1,555 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a80113bc00`  |
|     new | +5.807 MiB |  0.0% → 0.2% | 0 B → 5.81 MiB |     0 → 3 | `collector(Object, Object)`              | `java.lang.invoke.LambdaForm$MH.0x000000a80109c000`  |
| removed |  -5.41 MiB | 54.0% → 0.0% | 5.41 MiB → 0 B |     5 → 0 | `invokeSpecial(Object, Object, Object)`  | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed | -4.604 MiB | 46.0% → 0.0% |  4.6 MiB → 0 B |     6 → 0 | `invokeVirtual(Object, Object, Object)`  | `java.lang.invoke.LambdaForm$DMH.0x00000070010bdc00` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801829c00`)

|  Change |      Delta |             % |           Size |   Samples | Callee                                     | Location                                         |
| ------: | ---------: | ------------: | -------------: | --------: | ------------------------------------------ | ------------------------------------------------ |
|     new | +2.824 GiB | 0.0% → 100.0% | 0 B → 2.82 GiB | 0 → 1,412 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
| removed | -1.999 MiB | 100.0% → 0.0% |    2 MiB → 0 B |     1 → 0 | `delegate(Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801141000`)

|   Change |        Delta |             % |               Size |     Samples | Callee                             | Location                                            |
| -------: | -----------: | ------------: | -----------------: | ----------: | ---------------------------------- | --------------------------------------------------- |
|  +424.7% |   +2.367 GiB | 97.2% → 90.2% | 571 MiB → 2.92 GiB | 291 → 1,578 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a801118000` |
| +5020.4% | +346.891 MiB |  1.2% → 10.7% | 6.91 MiB → 354 MiB |     6 → 202 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|  removed |   -9.419 MiB |   1.6% → 0.0% |     9.42 MiB → 0 B |       5 → 0 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000007001118800` |
|      new |   +5.997 MiB |   0.0% → 0.2% |        0 B → 6 MiB |       0 → 3 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000a801118800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8012d8400`)

|  Change |      Delta |             % |          Size | Samples | Callee                                  | Location                                             |
| ------: | ---------: | ------------: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
|     new | +1.104 GiB |  0.0% → 99.1% | 0 B → 1.1 GiB | 0 → 571 | `invokeVirtual(Object, Object, int)`    | `java.lang.invoke.LambdaForm$DMH.0x000000a801152800` |
|     new | +9.995 MiB |   0.0% → 0.9% |  0 B → 10 MiB |   0 → 5 | `invokeSpecial(Object, Object, int)`    | `java.lang.invoke.LambdaForm$DMH.0x000000a8013e9c00` |
| removed | -4.098 MiB | 100.0% → 0.0% | 4.1 MiB → 0 B |   4 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801398000`)

|  Change |       Delta |             % |           Size | Samples | Callee                                                  | Location                                            |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------------------------------- | --------------------------------------------------- |
|     new |  +1.069 GiB |  0.0% → 99.3% | 0 B → 1.07 GiB | 0 → 554 | `reinvoke(Object, Object, Object, long)`                | `java.lang.invoke.LambdaForm$MH.0x000000a801396800` |
|     new |  +7.996 MiB |   0.0% → 0.7% |    0 B → 8 MiB |   0 → 4 | `invoke(Object, Object, Object, long)`                  | `java.lang.invoke.LambdaForm$MH.0x000000a801397000` |
| removed | -962.25 KiB | 100.0% → 0.0% |  962 KiB → 0 B |   1 → 0 | `reinvoke(Object, Object, Object, int, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001408000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a80160a800`)

|  Change |        Delta |             % |           Size | Samples | Callee                                             | Location                                         |
| ------: | -----------: | ------------: | -------------: | ------: | -------------------------------------------------- | ------------------------------------------------ |
|     new | +845.554 MiB | 0.0% → 100.0% |  0 B → 846 MiB | 0 → 418 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
| removed |   -5.993 MiB | 100.0% → 0.0% | 5.99 MiB → 0 B |   3 → 0 | `delegate(Object, Object, Object)`                 | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801150800`)

|  Change |        Delta |            % |           Size | Samples | Callee                             | Location                                             |
| ------: | -----------: | -----------: | -------------: | ------: | ---------------------------------- | ---------------------------------------------------- |
|     new | +975.025 MiB | 0.0% → 99.9% |  0 B → 975 MiB | 0 → 501 | `invokeSpecial(Object, Object)`    | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed | -232.364 MiB | 78.0% → 0.0% |  232 MiB → 0 B | 122 → 0 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001118000`  |
| removed |  -63.461 MiB | 21.3% → 0.0% | 63.5 MiB → 0 B |  27 → 0 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`     |
| removed |   -1.999 MiB |  0.7% → 0.0% |    2 MiB → 0 B |   1 → 0 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000007001118800`  |
|     new | +626.632 KiB |  0.0% → 0.1% |  0 B → 627 KiB |   0 → 1 | `invokeVirtual(Object, Object)`    | `java.lang.invoke.LambdaForm$DMH.0x000000a801150400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801607c00`)

|  Change |       Delta |             % |          Size | Samples | Callee                                  | Location                                     |
| ------: | ----------: | ------------: | ------------: | ------: | --------------------------------------- | -------------------------------------------- |
|     new | +663.65 MiB | 0.0% → 100.0% | 0 B → 664 MiB | 0 → 328 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |
| removed |  -7.996 MiB | 100.0% → 0.0% |   8 MiB → 0 B |   4 → 0 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801105400`)

|  Change |        Delta |            % |           Size | Samples | Callee                                                                                      | Location                                             |
| ------: | -----------: | -----------: | -------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |  +896.41 MiB | 0.0% → 96.8% |  0 B → 896 MiB | 0 → 456 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a8010b2800` |
| removed | -313.799 MiB | 93.5% → 0.0% |  314 MiB → 0 B | 156 → 0 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000700118d000`  |
|     new |  +29.428 MiB |  0.0% → 3.2% | 0 B → 29.4 MiB |  0 → 15 | `collector(Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000a80109c000`  |
| removed |  -21.981 MiB |  6.5% → 0.0% |   22 MiB → 0 B |  11 → 0 | `delegate(Object, Object, Object, Object)`                                                  | `java.lang.invoke.DelegatingMethodHandle$Holder`     |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a80138c800`)

|  Change |        Delta |             % |          Size | Samples | Callee                                                                                      | Location                                             |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new | +532.134 MiB | 0.0% → 100.0% | 0 B → 532 MiB | 0 → 272 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a8010b2800` |
| removed |  -962.25 KiB | 100.0% → 0.0% | 962 KiB → 0 B |   1 → 0 | `invokeSpecial(Object, Object, Object, int, Object, Object)`                                | `java.lang.invoke.LambdaForm$DMH.0x00000070013d7400` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8012c6400`)

|  Change |        Delta |             % |           Size | Samples | Callee                                     | Location                                            |
| ------: | -----------: | ------------: | -------------: | ------: | ------------------------------------------ | --------------------------------------------------- |
|     new | +466.183 MiB |  0.0% → 95.1% |  0 B → 466 MiB | 0 → 238 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a80118d000` |
|     new |  +13.984 MiB |   0.0% → 2.9% |   0 B → 14 MiB |   0 → 7 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |  +11.994 MiB |   0.0% → 2.4% |   0 B → 12 MiB |   0 → 6 | `invoke(Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000a80118dc00` |
| removed |   -4.234 MiB | 100.0% → 0.0% | 4.23 MiB → 0 B |   3 → 0 | `invokeStatic(Object, Object, Object)`     | `java.lang.invoke.DirectMethodHandle$Holder`        |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8013dc400`)

|  Change |        Delta |             % |           Size | Samples | Callee                                                                                      | Location                                             |
| ------: | -----------: | ------------: | -------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new | +414.917 MiB | 0.0% → 100.0% |  0 B → 415 MiB | 0 → 211 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a8010b2800` |
| removed |   -2.951 MiB |  59.6% → 0.0% | 2.95 MiB → 0 B |   3 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x00000070010bc800` |
| removed |   -1.998 MiB |  40.4% → 0.0% |    2 MiB → 0 B |   1 → 0 | `invokeSpecial(Object, Object, Object, Object)`                                             | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object, int, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a80146c800`)

| Change |        Delta |            % |          Size | Samples | Callee                                          | Location                                             |
| -----: | -----------: | -----------: | ------------: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
|    new | +393.804 MiB | 0.0% → 99.5% | 0 B → 394 MiB | 0 → 167 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a8010bc800` |
|    new |   +1.999 MiB |  0.0% → 0.5% |   0 B → 2 MiB |   0 → 1 | `collector(Object, Object, Object)`             | `java.lang.invoke.LambdaForm$MH.0x000000a801114c00`  |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a80197d000`)

|  Change |        Delta |             % |          Size | Samples | Callee                                  | Location                                             |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
|     new | +389.806 MiB | 0.0% → 100.0% | 0 B → 390 MiB | 0 → 165 | `invokeVirtual(Object, Object, int)`    | `java.lang.invoke.LambdaForm$DMH.0x000000a80197c400` |
| removed |   -1.999 MiB | 100.0% → 0.0% |   2 MiB → 0 B |   1 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a80197d400`)

|  Change |        Delta |             % |          Size | Samples | Callee                                  | Location                                     |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------------- | -------------------------------------------- |
|     new | +377.812 MiB | 0.0% → 100.0% | 0 B → 378 MiB | 0 → 159 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |
| removed |   -1.999 MiB | 100.0% → 0.0% |   2 MiB → 0 B |   1 → 0 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a80197f400`)

|  Change |        Delta |             % |          Size | Samples | Callee                                  | Location                                         |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------------- | ------------------------------------------------ |
|     new | +377.812 MiB | 0.0% → 100.0% | 0 B → 378 MiB | 0 → 159 | `delegate(Object, Object, int, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
| removed |   -1.999 MiB | 100.0% → 0.0% |   2 MiB → 0 B |   1 → 0 | `delegate(Object, Object, Object)`      | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a80197f000`)

|  Change |        Delta |             % |          Size | Samples | Callee                             | Location                                         |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------- | ------------------------------------------------ |
|     new | +377.812 MiB | 0.0% → 100.0% | 0 B → 378 MiB | 0 → 159 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
| removed |   -1.999 MiB | 100.0% → 0.0% |   2 MiB → 0 B |   1 → 0 | `delegate(Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a80118c000`)

|  Change |        Delta |             % |           Size |   Samples | Callee                                                                                      | Location                                             |
| ------: | -----------: | ------------: | -------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |   -3.615 GiB | 100.0% → 0.0% | 3.62 GiB → 0 B | 1,849 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010b2800` |
|     new | +439.506 MiB |  0.0% → 98.7% |  0 B → 440 MiB |   0 → 223 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a80113bc00`  |
|     new |   +7.996 MiB |   0.0% → 1.8% |    0 B → 8 MiB |     0 → 4 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000a801114c00`  |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801141400`)

|  Change |      Delta |            % |           Size |   Samples | Callee                                   | Location                                             |
| ------: | ---------: | -----------: | -------------: | --------: | ---------------------------------------- | ---------------------------------------------------- |
| removed | -3.069 GiB | 99.9% → 0.0% | 3.07 GiB → 0 B | 1,615 → 0 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700113fc00`  |
|     new | +13.82 MiB | 0.0% → 74.2% | 0 B → 13.8 MiB |     0 → 9 | `invokeVirtual(Object, Object, Object)`  | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new | +4.798 MiB | 0.0% → 25.8% |  0 B → 4.8 MiB |     0 → 6 | `invokeSpecial(Object, Object, Object)`  | `java.lang.invoke.LambdaForm$DMH.0x000000a801001000` |
| removed | -3.998 MiB |  0.1% → 0.0% |    4 MiB → 0 B |     2 → 0 | `collector(Object, Object)`              | `java.lang.invoke.LambdaForm$MH.0x000000700109c000`  |

##### `invoke(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801537400`)

|  Change |      Delta |             % |           Size |   Samples | Callee                                                                                      | Location                                             |
| ------: | ---------: | ------------: | -------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -2.843 GiB | 100.0% → 0.0% | 2.84 GiB → 0 B | 1,412 → 0 | `invokeSpecial(Object, Object, Object, Object, Object)`                                     | `java.lang.invoke.LambdaForm$DMH.0x000000700118e800` |
|     new | +35.94 MiB | 0.0% → 100.0% | 0 B → 35.9 MiB |    0 → 18 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a8010b2800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801133000`)

|  Change |        Delta |             % |               Size |    Samples | Callee                             | Location                                            |
| ------: | -----------: | ------------: | -----------------: | ---------: | ---------------------------------- | --------------------------------------------------- |
|  -93.2% |   -2.666 GiB | 90.1% → 50.3% | 2.86 GiB → 201 MiB | 1,552 → 61 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a801118000` |
|  -43.7% | -152.568 MiB | 10.7% → 49.3% |  349 MiB → 197 MiB |   199 → 96 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |  -15.142 MiB |   0.5% → 0.0% |     15.1 MiB → 0 B |      8 → 0 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000007001118800` |
|     new |   +1.721 MiB |   0.0% → 0.4% |     0 B → 1.72 MiB |      0 → 1 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000a801118800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8013a0400`)

|  Change |      Delta |             % |           Size |   Samples | Callee                                                                                      | Location                                             |
| ------: | ---------: | ------------: | -------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -2.728 GiB |  99.9% → 0.0% | 2.73 GiB → 0 B | 1,413 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010b2800` |
|     new | +8.226 MiB | 0.0% → 100.0% | 0 B → 8.23 MiB |     0 → 4 | `invokeVirtual(Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$DMH.0x000000a801101c00` |
| removed | -3.423 MiB |   0.1% → 0.0% | 3.42 MiB → 0 B |     2 → 0 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x0000007001114c00`  |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a80182f000`)

|  Change |        Delta |             % |           Size |   Samples | Callee                                     | Location                                         |
| ------: | -----------: | ------------: | -------------: | --------: | ------------------------------------------ | ------------------------------------------------ |
| removed |   -2.623 GiB | 100.0% → 0.0% | 2.62 GiB → 0 B | 1,300 → 0 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
|     new | +751.588 MiB | 0.0% → 100.0% |  0 B → 752 MiB |   0 → 368 | `delegate(Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801179400`)

|  Change |       Delta |             % |           Size | Samples | Callee                               | Location                                             |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------------ | ---------------------------------------------------- |
| removed |  -1.102 GiB |  99.3% → 0.0% |  1.1 GiB → 0 B | 574 → 0 | `invokeVirtual(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001152800` |
|     new | +56.482 MiB | 0.0% → 100.0% | 0 B → 56.5 MiB |  0 → 30 | `invokeStatic(Object, Object)`       | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |  -7.995 MiB |   0.7% → 0.0% |    8 MiB → 0 B |   3 → 0 | `invokeSpecial(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x00000070013f0000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a80116c000`)

|  Change |        Delta |             % |           Size | Samples | Callee                                                                                      | Location                                             |
| ------: | -----------: | ------------: | -------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -932.235 MiB |  96.5% → 0.0% |  932 MiB → 0 B | 467 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010b2800` |
| removed |  -33.983 MiB |   3.5% → 0.0% |   34 MiB → 0 B |  17 → 0 | `collector(Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000700109c000`  |
|     new |  +15.324 MiB | 0.0% → 100.0% | 0 B → 15.3 MiB |   0 → 8 | `invokeStatic(Object, Object, Object)`                                                      | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8012ae000`)

| Change |        Delta |             % |              Size |   Samples | Callee                                     | Location                                            |
| -----: | -----------: | ------------: | ----------------: | --------: | ------------------------------------------ | --------------------------------------------------- |
| -96.8% | -911.235 MiB |  73.2% → 7.3% |  941 MiB → 30 MiB |  460 → 15 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|  +9.7% |    +33.3 MiB | 26.8% → 92.7% | 345 MiB → 378 MiB | 235 → 187 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a80118d000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8014dec00`)

|  Change |        Delta |             % |          Size | Samples | Callee                                             | Location                                         |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------------------------------- | ------------------------------------------------ |
| removed | -869.462 MiB | 100.0% → 0.0% | 869 MiB → 0 B | 414 → 0 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
|     new |   +7.995 MiB | 0.0% → 100.0% |   0 B → 8 MiB |   0 → 4 | `delegate(Object, Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8013dbc00`)

|  Change |      Delta |             % |           Size |   Samples | Callee                                                                                      | Location                                             |
| ------: | ---------: | ------------: | -------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -3.48 GiB | 100.0% → 0.0% | 3.48 GiB → 0 B | 1,816 → 0 | `invokeSpecial(Object, Object, Object)`                                                     | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |  +2.68 GiB |  0.0% → 99.9% | 0 B → 2.68 GiB | 0 → 1,380 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a8010b2800` |
|     new | +1.999 MiB |   0.0% → 0.1% |    0 B → 2 MiB |     0 → 1 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000a801114c00`  |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a80156d400`)

|  Change |        Delta |             % |          Size | Samples | Callee                                          | Location                                            |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------- | --------------------------------------------------- |
| removed | -737.558 MiB | 100.0% → 0.0% | 738 MiB → 0 B | 363 → 0 | `delegate(Object, Object, Object)`              | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |   +3.998 MiB | 0.0% → 100.0% |   0 B → 4 MiB |   0 → 2 | `delegate(Object, Object, Object, Object, int)` | `java.lang.invoke.LambdaForm$MH.0x000000a801143400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a80155d800`)

| Change |        Delta |      % |             Size |  Samples | Callee                                  | Location                                     |
| -----: | -----------: | -----: | ---------------: | -------: | --------------------------------------- | -------------------------------------------- |
| -92.2% | -641.579 MiB | 100.0% | 696 MiB → 54 MiB | 328 → 26 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8014a2400`)

|  Change |        Delta |             % |           Size | Samples | Callee                                     | Location                                            |
| ------: | -----------: | ------------: | -------------: | ------: | ------------------------------------------ | --------------------------------------------------- |
| removed | -479.834 MiB |  98.7% → 0.0% |  480 MiB → 0 B | 231 → 0 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700118d000` |
| removed |   -7.996 MiB |   1.6% → 0.0% |    8 MiB → 0 B |   4 → 0 | `invoke(Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000700118dc00` |
| removed |   -2.369 MiB |   0.5% → 0.0% | 2.37 MiB → 0 B |   2 → 0 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |   +1.721 MiB | 0.0% → 100.0% | 0 B → 1.72 MiB |   0 → 1 | `delegate(Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801145c00`)

|  Change |          Delta |            % |            Size | Samples | Callee                             | Location                                             |
| ------: | -------------: | -----------: | --------------: | ------: | ---------------------------------- | ---------------------------------------------------- |
| removed | -1,020.261 MiB | 99.9% → 0.0% | 1,020 MiB → 0 B | 521 → 0 | `invokeSpecial(Object, Object)`    | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |   +622.402 MiB | 0.0% → 98.9% |   0 B → 622 MiB | 0 → 323 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a801118000`  |
|     new |     +7.996 MiB |  0.0% → 1.3% |     0 B → 8 MiB |   0 → 4 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000a801118800`  |
|     new |     +3.084 MiB |  0.0% → 0.5% |  0 B → 3.08 MiB |   0 → 2 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`     |
| removed |   -644.875 KiB |  0.1% → 0.0% |   645 KiB → 0 B |   1 → 0 | `invokeVirtual(Object, Object)`    | `java.lang.invoke.LambdaForm$DMH.0x0000007001150400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801184c00`)

| Change |        Delta |              % |               Size | Samples | Callee                                  | Location                                             |
| -----: | -----------: | -------------: | -----------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
| -95.5% | -400.902 MiB | 100.0% → 38.7% | 420 MiB → 18.7 MiB | 213 → 9 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|    new |  +29.707 MiB |   0.0% → 61.3% |     0 B → 29.7 MiB |  0 → 15 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a8010bdc00` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801185000`)

|  Change |        Delta |             % |           Size | Samples | Callee                                    | Location                                             |
| ------: | -----------: | ------------: | -------------: | ------: | ----------------------------------------- | ---------------------------------------------------- |
| removed | -348.644 MiB |  99.4% → 0.0% |  349 MiB → 0 B | 175 → 0 | `invokeVirtual(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001101c00` |
| removed |   -1.998 MiB |   0.6% → 0.0% |    2 MiB → 0 B |   1 → 0 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |   +1.086 MiB | 0.0% → 100.0% | 0 B → 1.09 MiB |   0 → 1 | `invokeSpecial(Object, Object, Object)`   | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801398c00`)

|  Change |        Delta |             % |          Size | Samples | Callee                                                                                      | Location                                             |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -441.837 MiB |  99.1% → 0.0% | 442 MiB → 0 B | 211 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010b2800` |
|     new | +122.773 MiB | 0.0% → 100.0% | 0 B → 123 MiB |  0 → 62 | `invokeStatic(Object, Object, Object)`                                                      | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |   -3.998 MiB |   0.9% → 0.0% |   4 MiB → 0 B |   2 → 0 | `collector(Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x0000007001140000`  |

##### `invoke(Object, Object, int, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801450400`)

|  Change |        Delta |             % |          Size | Samples | Callee                                          | Location                                             |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| removed | -319.841 MiB |  99.4% → 0.0% | 320 MiB → 0 B | 139 → 0 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010bc800` |
| removed |   -1.999 MiB |   0.6% → 0.0% |   2 MiB → 0 B |   1 → 0 | `collector(Object, Object, Object)`             | `java.lang.invoke.LambdaForm$MH.0x0000007001114c00`  |
|     new |   +1.999 MiB | 0.0% → 100.0% |   0 B → 2 MiB |   0 → 1 | `collector(Object, Object, Object, Object)`     | `java.lang.invoke.LambdaForm$MH.0x000000a801140000`  |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700149d800`)

|  Change |        Delta |             % |          Size | Samples | Callee                               | Location                                             |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------ | ---------------------------------------------------- |
| removed | -319.841 MiB | 100.0% → 0.0% | 320 MiB → 0 B | 139 → 0 | `invokeVirtual(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001975000` |

# Retained heap profile diff

Retained 280 KiB → 71.9 KiB (-207.773 KiB, -74.3%) over 106 objects → 115 objects (2.64 KiB → 641 B per object).

| Category         | Change |        Delta |              % |               Size |   Objects |
| ---------------- | -----: | -----------: | -------------: | -----------------: | --------: |
| Standard library | -74.3% | -207.757 KiB | 100.0% → 99.9% | 280 KiB → 71.9 KiB | 104 → 114 |
| Ours             | -28.6% |        -16 B |   <0.1% → 0.1% |        56 B → 40 B |     2 → 1 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Standard library

|  Change |       Delta |            % |           Size | Objects | Function                                                                                                | Location                                                |
| ------: | ----------: | -----------: | -------------: | ------: | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|     new | +64.015 KiB | 0.0% → 89.0% |   0 B → 64 KiB |   0 → 1 | `<clinit>()`                                                                                            | `com.sun.org.apache.xerces.internal.util.XMLChar`       |
|     new |  +1.015 KiB |  0.0% → 1.4% | 0 B → 1.02 KiB |   0 → 1 | `resize(int)`                                                                                           | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |
|     new |      +536 B |  0.0% → 0.7% |    0 B → 536 B |   0 → 2 | `copyOf(Object[], int)`                                                                                 | `java.util.Arrays`                                      |
|  +65.4% |      +272 B |  0.1% → 0.9% |  416 B → 688 B |   2 → 3 | `resize()`                                                                                              | `java.util.HashMap`                                     |
| +150.0% |      +264 B |  0.1% → 0.6% |  176 B → 440 B |   2 → 5 | `copy()`                                                                                                | `java.lang.reflect.Method`                              |
|     new |      +208 B |  0.0% → 0.3% |    0 B → 208 B |   0 → 1 | `copyOfRange(byte[], int, int)`                                                                         | `java.util.Arrays`                                      |
|     new |      +192 B |  0.0% → 0.3% |    0 B → 192 B |   0 → 4 | `<init>(Class, ClassInfo)`                                                                              | `org.codehaus.groovy.reflection.CachedClass`            |
|  +42.9% |      +168 B |  0.1% → 0.8% |  392 B → 560 B |  7 → 10 | `getOrPutMethods(String, MetaMethodIndex$Header)`                                                       | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |
| +400.0% |      +128 B | <0.1% → 0.2% |   32 B → 160 B |   1 → 5 | `<init>(int)`                                                                                           | `org.codehaus.groovy.util.ListHashMap`                  |
|     new |      +128 B |  0.0% → 0.2% |    0 B → 128 B |   0 → 2 | `lambda$initValue$2(Method)`                                                                            | `org.codehaus.groovy.reflection.CachedClass$3`          |
| +100.0% |      +120 B | <0.1% → 0.3% |  120 B → 240 B |   1 → 2 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)`    | `java.lang.ClassLoader`                                 |
|     new |      +120 B |  0.0% → 0.2% |    0 B → 120 B |   0 → 3 | `make(MethodType, LambdaForm, Object, Object)`                                                          | `java.lang.invoke.BoundMethodHandle$Species_LL`         |
|     new |      +120 B |  0.0% → 0.2% |    0 B → 120 B |   0 → 1 | `newInstance()`                                                                                         | `javax.xml.parsers.SAXParserFactory`                    |
|     new |       +96 B |  0.0% → 0.1% |     0 B → 96 B |   0 → 1 | `compress(char[], int, int)`                                                                            | `java.lang.StringUTF16`                                 |
| +366.7% |       +88 B | <0.1% → 0.2% |   24 B → 112 B |       1 | `initClassName()`                                                                                       | `java.lang.Class`                                       |
|     new |       +80 B |  0.0% → 0.1% |     0 B → 80 B |   0 → 1 | `decompress(ByteBuffer, int)`                                                                           | `jdk.internal.jimage.ImageLocation`                     |
|     new |       +64 B |  0.0% → 0.1% |     0 B → 64 B |   0 → 1 | `newModuleDescriptor(String, ModuleDescriptor$Version, Set, Set, Set, Set, Set, Set, Set, String, int)` | `java.lang.module.ModuleDescriptor$1`                   |
|     new |       +64 B |  0.0% → 0.1% |     0 B → 64 B |   0 → 2 | `<init>(int)`                                                                                           | `java.util.ArrayList`                                   |
|     new |       +64 B |  0.0% → 0.1% |     0 B → 64 B |   0 → 1 | `lambda$inheritFields$19(CachedClass)`                                                                  | `groovy.lang.MetaClassImpl`                             |
|     new |       +64 B |  0.0% → 0.1% |     0 B → 64 B |   0 → 1 | `lambda$inheritStaticInterfaceFields$17(CachedClass)`                                                   | `groovy.lang.MetaClassImpl`                             |

#### Improvements

Functions with the largest decrease in bytes retained within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Standard library

|  Change |        Delta |            % |          Size | Objects | Function                                                                                                            | Location                                                 |
| ------: | -----------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| removed | -256.015 KiB | 91.5% → 0.0% | 256 KiB → 0 B |   1 → 0 | `initTable()`                                                                                                       | `java.util.concurrent.ConcurrentHashMap`                 |
| removed |  -16.015 KiB |  5.7% → 0.0% |  16 KiB → 0 B |   1 → 0 | `<init>(int, int, MemorySegment)`                                                                                   | `java.nio.HeapByteBuffer`                                |
|  -80.0% |       -608 B |  0.3% → 0.2% | 760 B → 152 B |   5 → 1 | `getPlainNodeReference(boolean)`                                                                                    | `org.codehaus.groovy.ast.ClassNode`                      |
| removed |       -528 B |  0.2% → 0.0% |   528 B → 0 B |   1 → 0 | `<init>(int)`                                                                                                       | `java.util.concurrent.atomic.AtomicIntegerArray`         |
| removed |       -528 B |  0.2% → 0.0% |   528 B → 0 B |   1 → 0 | `<init>(HashEdgeMap, int)`                                                                                          | `groovyjarjarantlr4.v4.runtime.dfa.HashEdgeMap`          |
|  -69.1% |       -448 B |  0.2% → 0.3% | 648 B → 200 B |   5 → 3 | `getDeclaredMethods0(boolean)`                                                                                      | `java.lang.Class`                                        |
| removed |       -376 B |  0.1% → 0.0% |   376 B → 0 B |   1 → 0 | `toArray()`                                                                                                         | `java.lang.PublicMethods`                                |
|  -89.7% |       -208 B | 0.1% → <0.1% |  232 B → 24 B |   2 → 1 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`                                     | `java.lang.ClassLoader`                                  |
|  -33.3% |       -168 B |  0.2% → 0.5% | 504 B → 336 B |   9 → 6 | `grow(int)`                                                                                                         | `java.util.ArrayList`                                    |
| removed |       -160 B |  0.1% → 0.0% |   160 B → 0 B |   2 → 0 | `make(MethodType, LambdaForm, Object, Object, Object, Object, int, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.BoundMethodHandle$Species_LLLLILLLLLL` |
| removed |       -128 B | <0.1% → 0.0% |   128 B → 0 B |   2 → 0 | `clone()`                                                                                                           | `java.lang.Object`                                       |
|  -66.7% |        -80 B | <0.1% → 0.1% |  120 B → 40 B |   3 → 1 | `set(Method)`                                                                                                       | `java.beans.MethodRef`                                   |
| removed |        -80 B | <0.1% → 0.0% |    80 B → 0 B |   3 → 0 | `setParams(Class[])`                                                                                                | `java.beans.MethodDescriptor`                            |
| removed |        -64 B | <0.1% → 0.0% |    64 B → 0 B |   1 → 0 | `lambda$applyStrayPropertyMethods$20(CachedClass)`                                                                  | `groovy.lang.MetaClassImpl`                              |
| removed |        -64 B | <0.1% → 0.0% |    64 B → 0 B |   1 → 0 | `initializeMap(Class)`                                                                                              | `java.lang.ClassValue`                                   |
| removed |        -64 B | <0.1% → 0.0% |    64 B → 0 B |   1 → 0 | `<init>(CachedClass)`                                                                                               | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`  |
| removed |        -64 B | <0.1% → 0.0% |    64 B → 0 B |   1 → 0 | `lambda$inheritFields$18(CachedClass)`                                                                              | `groovy.lang.MetaClassImpl`                              |
| removed |        -64 B | <0.1% → 0.0% |    64 B → 0 B |   1 → 0 | `<init>(int, float)`                                                                                                | `java.util.Hashtable`                                    |
| removed |        -56 B | <0.1% → 0.0% |    56 B → 0 B |   1 → 0 | `computeValue(Class)`                                                                                               | `org.codehaus.groovy.reflection.ClassInfo$1`             |
| removed |        -56 B | <0.1% → 0.0% |    56 B → 0 B |   1 → 0 | `visitStringLiteral(GroovyParser$StringLiteralContext)`                                                             | `org.apache.groovy.parser.antlr4.AstBuilder`             |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `<clinit>()` (`com.sun.org.apache.xerces.internal.util.XMLChar`)

| Change |       Delta |             % |         Size | Objects | Location                                             |
| -----: | ----------: | ------------: | -----------: | ------: | ---------------------------------------------------- |
|    new | +64.015 KiB | 0.0% → 100.0% | 0 B → 64 KiB |   0 → 1 | `com.sun.org.apache.xerces.internal.util.XMLChar:56` |

##### `resize(int)` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

| Change |      Delta |             % |           Size | Objects | Location                                                    |
| -----: | ---------: | ------------: | -------------: | ------: | ----------------------------------------------------------- |
|    new | +1.015 KiB | 0.0% → 100.0% | 0 B → 1.02 KiB |   0 → 1 | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex:135` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |  Delta |             % |        Size | Objects | Location                |
| -----: | -----: | ------------: | ----------: | ------: | ----------------------- |
|    new | +536 B | 0.0% → 100.0% | 0 B → 536 B |   0 → 2 | `java.util.Arrays:3482` |

##### `resize()` (`java.util.HashMap`)

| Change |  Delta |      % |          Size | Objects | Location                |
| -----: | -----: | -----: | ------------: | ------: | ----------------------- |
| +65.4% | +272 B | 100.0% | 416 B → 688 B |   2 → 3 | `java.util.HashMap:710` |

##### `copy()` (`java.lang.reflect.Method`)

|  Change |  Delta |      % |          Size | Objects | Location                       |
| ------: | -----: | -----: | ------------: | ------: | ------------------------------ |
| +150.0% | +264 B | 100.0% | 176 B → 440 B |   2 → 5 | `java.lang.reflect.Method:165` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

| Change |  Delta |             % |        Size | Objects | Location                |
| -----: | -----: | ------------: | ----------: | ------: | ----------------------- |
|    new | +208 B | 0.0% → 100.0% | 0 B → 208 B |   0 → 1 | `java.util.Arrays:3856` |

##### `<init>(Class, ClassInfo)` (`org.codehaus.groovy.reflection.CachedClass`)

| Change | Delta |            % |       Size | Objects | Location                                         |
| -----: | ----: | -----------: | ---------: | ------: | ------------------------------------------------ |
|    new | +48 B | 0.0% → 25.0% | 0 B → 48 B |   0 → 1 | `org.codehaus.groovy.reflection.CachedClass:63`  |
|    new | +48 B | 0.0% → 25.0% | 0 B → 48 B |   0 → 1 | `org.codehaus.groovy.reflection.CachedClass:121` |
|    new | +48 B | 0.0% → 25.0% | 0 B → 48 B |   0 → 1 | `org.codehaus.groovy.reflection.CachedClass:163` |
|    new | +48 B | 0.0% → 25.0% | 0 B → 48 B |   0 → 1 | `org.codehaus.groovy.reflection.CachedClass:194` |

##### `getOrPutMethods(String, MetaMethodIndex$Header)` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

| Change |  Delta |      % |          Size | Objects | Location                                                    |
| -----: | -----: | -----: | ------------: | ------: | ----------------------------------------------------------- |
| +42.9% | +168 B | 100.0% | 392 B → 560 B |  7 → 10 | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex:219` |

##### `<init>(int)` (`org.codehaus.groovy.util.ListHashMap`)

|  Change |  Delta |      % |         Size | Objects | Location                                  |
| ------: | -----: | -----: | -----------: | ------: | ----------------------------------------- |
| +400.0% | +128 B | 100.0% | 32 B → 160 B |   1 → 5 | `org.codehaus.groovy.util.ListHashMap:51` |

##### `lambda$initValue$2(Method)` (`org.codehaus.groovy.reflection.CachedClass$3`)

| Change |  Delta |             % |        Size | Objects | Location                                          |
| -----: | -----: | ------------: | ----------: | ------: | ------------------------------------------------- |
|    new | +128 B | 0.0% → 100.0% | 0 B → 128 B |   0 → 2 | `org.codehaus.groovy.reflection.CachedClass$3:87` |

##### `newInstance()` (`javax.xml.parsers.SAXParserFactory`)

| Change |  Delta |             % |        Size | Objects | Location                                 |
| -----: | -----: | ------------: | ----------: | ------: | ---------------------------------------- |
|    new | +120 B | 0.0% → 100.0% | 0 B → 120 B |   0 → 1 | `javax.xml.parsers.SAXParserFactory:181` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

| Change | Delta |             % |       Size | Objects | Location                    |
| -----: | ----: | ------------: | ---------: | ------: | --------------------------- |
|    new | +96 B | 0.0% → 100.0% | 0 B → 96 B |   0 → 1 | `java.lang.StringUTF16:211` |

##### `decompress(ByteBuffer, int)` (`jdk.internal.jimage.ImageLocation`)

| Change | Delta |             % |       Size | Objects | Location                               |
| -----: | ----: | ------------: | ---------: | ------: | -------------------------------------- |
|    new | +80 B | 0.0% → 100.0% | 0 B → 80 B |   0 → 1 | `jdk.internal.jimage.ImageLocation:64` |

##### `newModuleDescriptor(String, ModuleDescriptor$Version, Set, Set, Set, Set, Set, Set, Set, String, int)` (`java.lang.module.ModuleDescriptor$1`)

| Change | Delta |             % |       Size | Objects | Location                                   |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------------------------ |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 1 | `java.lang.module.ModuleDescriptor$1:2745` |

##### `<init>(int)` (`java.util.ArrayList`)

| Change | Delta |             % |       Size | Objects | Location                  |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------- |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 2 | `java.util.ArrayList:156` |

##### `lambda$inheritFields$19(CachedClass)` (`groovy.lang.MetaClassImpl`)

| Change | Delta |             % |       Size | Objects | Location                         |
| -----: | ----: | ------------: | ---------: | ------: | -------------------------------- |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 1 | `groovy.lang.MetaClassImpl:2559` |

##### `lambda$inheritStaticInterfaceFields$17(CachedClass)` (`groovy.lang.MetaClassImpl`)

| Change | Delta |             % |       Size | Objects | Location                         |
| -----: | ----: | ------------: | ---------: | ------: | -------------------------------- |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 1 | `groovy.lang.MetaClassImpl:2546` |

##### `initTable()` (`java.util.concurrent.ConcurrentHashMap`)

|  Change |        Delta |             % |          Size | Objects | Location                                      |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------------------- |
| removed | -256.015 KiB | 100.0% → 0.0% | 256 KiB → 0 B |   1 → 0 | `java.util.concurrent.ConcurrentHashMap:2301` |

##### `<init>(int, int, MemorySegment)` (`java.nio.HeapByteBuffer`)

|  Change |       Delta |             % |         Size | Objects | Location                     |
| ------: | ----------: | ------------: | -----------: | ------: | ---------------------------- |
| removed | -16.015 KiB | 100.0% → 0.0% | 16 KiB → 0 B |   1 → 0 | `java.nio.HeapByteBuffer:71` |

##### `getPlainNodeReference(boolean)` (`org.codehaus.groovy.ast.ClassNode`)

| Change |  Delta |      % |          Size | Objects | Location                                 |
| -----: | -----: | -----: | ------------: | ------: | ---------------------------------------- |
| -80.0% | -608 B | 100.0% | 760 B → 152 B |   5 → 1 | `org.codehaus.groovy.ast.ClassNode:1531` |

##### `<init>(int)` (`java.util.concurrent.atomic.AtomicIntegerArray`)

|  Change |  Delta |             % |        Size | Objects | Location                                            |
| ------: | -----: | ------------: | ----------: | ------: | --------------------------------------------------- |
| removed | -528 B | 100.0% → 0.0% | 528 B → 0 B |   1 → 0 | `java.util.concurrent.atomic.AtomicIntegerArray:63` |

##### `<init>(HashEdgeMap, int)` (`groovyjarjarantlr4.v4.runtime.dfa.HashEdgeMap`)

|  Change |  Delta |             % |        Size | Objects | Location                                           |
| ------: | -----: | ------------: | ----------: | ------: | -------------------------------------------------- |
| removed | -528 B | 100.0% → 0.0% | 528 B → 0 B |   1 → 0 | `groovyjarjarantlr4.v4.runtime.dfa.HashEdgeMap:46` |

##### `toArray()` (`java.lang.PublicMethods`)

|  Change |  Delta |             % |        Size | Objects | Location                     |
| ------: | -----: | ------------: | ----------: | ------: | ---------------------------- |
| removed | -376 B | 100.0% → 0.0% | 376 B → 0 B |   1 → 0 | `java.lang.PublicMethods:77` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |  Delta |      % |          Size | Objects | Location                  |
| -----: | -----: | -----: | ------------: | ------: | ------------------------- |
| -33.3% | -168 B | 100.0% | 504 B → 336 B |   9 → 6 | `java.util.ArrayList:239` |

##### `set(Method)` (`java.beans.MethodRef`)

| Change | Delta |      % |         Size | Objects | Location                  |
| -----: | ----: | -----: | -----------: | ------: | ------------------------- |
| -66.7% | -80 B | 100.0% | 120 B → 40 B |   3 → 1 | `java.beans.MethodRef:47` |

##### `setParams(Class[])` (`java.beans.MethodDescriptor`)

|  Change | Delta |            % |       Size | Objects | Location                          |
| ------: | ----: | -----------: | ---------: | ------: | --------------------------------- |
| removed | -32 B | 40.0% → 0.0% | 32 B → 0 B |   1 → 0 | `java.beans.MethodDescriptor:130` |
| removed | -24 B | 30.0% → 0.0% | 24 B → 0 B |   1 → 0 | `java.beans.MethodDescriptor:126` |
| removed | -24 B | 30.0% → 0.0% | 24 B → 0 B |   1 → 0 | `java.beans.MethodDescriptor:127` |

##### `lambda$applyStrayPropertyMethods$20(CachedClass)` (`groovy.lang.MetaClassImpl`)

|  Change | Delta |             % |       Size | Objects | Location                         |
| ------: | ----: | ------------: | ---------: | ------: | -------------------------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `groovy.lang.MetaClassImpl:2587` |

##### `initializeMap(Class)` (`java.lang.ClassValue`)

|  Change | Delta |             % |       Size | Objects | Location                   |
| ------: | ----: | ------------: | ---------: | ------: | -------------------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `java.lang.ClassValue:381` |

##### `<init>(CachedClass)` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

|  Change | Delta |             % |       Size | Objects | Location                                                   |
| ------: | ----: | ------------: | ---------: | ------: | ---------------------------------------------------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex:33` |

##### `lambda$inheritFields$18(CachedClass)` (`groovy.lang.MetaClassImpl`)

|  Change | Delta |             % |       Size | Objects | Location                         |
| ------: | ----: | ------------: | ---------: | ------: | -------------------------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `groovy.lang.MetaClassImpl:2555` |

##### `<init>(int, float)` (`java.util.Hashtable`)

|  Change | Delta |             % |       Size | Objects | Location                  |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `java.util.Hashtable:196` |

##### `computeValue(Class)` (`org.codehaus.groovy.reflection.ClassInfo$1`)

|  Change | Delta |             % |       Size | Objects | Location                                        |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------------------------- |
| removed | -56 B | 100.0% → 0.0% | 56 B → 0 B |   1 → 0 | `org.codehaus.groovy.reflection.ClassInfo$1:95` |

##### `visitStringLiteral(GroovyParser$StringLiteralContext)` (`org.apache.groovy.parser.antlr4.AstBuilder`)

|  Change | Delta |             % |       Size | Objects | Location                                          |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------------- |
| removed | -56 B | 100.0% → 0.0% | 56 B → 0 B |   1 → 0 | `org.apache.groovy.parser.antlr4.AstBuilder:2842` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `<clinit>()` (`com.sun.org.apache.xerces.internal.util.XMLChar`)

| Change |       Delta |             % |         Size | Objects | Caller                     | Location                                                         |
| -----: | ----------: | ------------: | -----------: | ------: | -------------------------- | ---------------------------------------------------------------- |
|    new | +64.015 KiB | 0.0% → 100.0% | 0 B → 64 KiB |   0 → 1 | `normalize(Object, short)` | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl` |

##### `resize(int)` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

| Change |      Delta |             % |           Size | Objects | Caller                                            | Location                                                |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------------------------------------- | ------------------------------------------------------- |
|    new | +1.015 KiB | 0.0% → 100.0% | 0 B → 1.02 KiB |   0 → 1 | `getOrPutMethods(String, MetaMethodIndex$Header)` | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |  Delta |             % |        Size | Objects | Caller      | Location              |
| -----: | -----: | ------------: | ----------: | ------: | ----------- | --------------------- |
|    new | +536 B | 0.0% → 100.0% | 0 B → 536 B |   0 → 2 | `grow(int)` | `java.util.ArrayList` |

##### `resize()` (`java.util.HashMap`)

| Change |  Delta |              % |          Size | Objects | Caller                                          | Location            |
| -----: | -----: | -------------: | ------------: | ------: | ----------------------------------------------- | ------------------- |
| +46.2% | +192 B | 100.0% → 88.4% | 416 B → 608 B |       2 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
|    new |  +80 B |   0.0% → 11.6% |    0 B → 80 B |   0 → 1 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |

##### `copy()` (`java.lang.reflect.Method`)

|  Change |  Delta |      % |          Size | Objects | Caller               | Location                          |
| ------: | -----: | -----: | ------------: | ------: | -------------------- | --------------------------------- |
| +150.0% | +264 B | 100.0% | 176 B → 440 B |   2 → 5 | `copyMethod(Method)` | `java.lang.reflect.ReflectAccess` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

| Change |  Delta |             % |        Size | Objects | Caller                                | Location           |
| -----: | -----: | ------------: | ----------: | ------: | ------------------------------------- | ------------------ |
|    new | +208 B | 0.0% → 100.0% | 0 B → 208 B |   0 → 1 | `<init>(AbstractStringBuilder, Void)` | `java.lang.String` |

##### `<init>(Class, ClassInfo)` (`org.codehaus.groovy.reflection.CachedClass`)

| Change | Delta |            % |       Size | Objects | Caller                                | Location                                                       |
| -----: | ----: | -----------: | ---------: | ------: | ------------------------------------- | -------------------------------------------------------------- |
|    new | +96 B | 0.0% → 50.0% | 0 B → 96 B |   0 → 2 | `<init>(Class, ClassInfo)`            | `org.codehaus.groovy.reflection.stdclasses.CachedClosureClass` |
|    new | +48 B | 0.0% → 25.0% | 0 B → 48 B |   0 → 1 | `createCachedClass(Class, ClassInfo)` | `org.codehaus.groovy.reflection.ClassInfo`                     |
|    new | +48 B | 0.0% → 25.0% | 0 B → 48 B |   0 → 1 | `<init>(Class, ClassInfo)`            | `org.codehaus.groovy.reflection.stdclasses.CachedSAMClass`     |

##### `getOrPutMethods(String, MetaMethodIndex$Header)` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

|  Change | Delta |             % |          Size | Objects | Caller                                                                           | Location                                                |
| ------: | ----: | ------------: | ------------: | ------: | -------------------------------------------------------------------------------- | ------------------------------------------------------- |
|  +16.7% | +56 B | 85.7% → 70.0% | 336 B → 392 B |   6 → 7 | `addMetaMethodToIndex(MetaMethod, MetaMethodIndex$Header)`                       | `groovy.lang.MetaClassImpl`                             |
| +100.0% | +56 B | 14.3% → 20.0% |  56 B → 112 B |   1 → 2 | `copyNonPrivateMethods(MetaMethodIndex$Entry, MetaMethodIndex$Header)`           | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |
|     new | +56 B |  0.0% → 10.0% |    0 B → 56 B |   0 → 1 | `copyNonPrivateNonNewMetaMethods(MetaMethodIndex$Entry, MetaMethodIndex$Header)` | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |

##### `<init>(int)` (`org.codehaus.groovy.util.ListHashMap`)

|  Change |  Delta |      % |         Size | Objects | Caller     | Location                               |
| ------: | -----: | -----: | -----------: | ------: | ---------- | -------------------------------------- |
| +400.0% | +128 B | 100.0% | 32 B → 160 B |   1 → 5 | `<init>()` | `org.codehaus.groovy.util.ListHashMap` |

##### `lambda$initValue$2(Method)` (`org.codehaus.groovy.reflection.CachedClass$3`)

| Change |  Delta |             % |        Size | Objects | Caller          | Location                                                                  |
| -----: | -----: | ------------: | ----------: | ------: | --------------- | ------------------------------------------------------------------------- |
|    new | +128 B | 0.0% → 100.0% | 0 B → 128 B |   0 → 2 | `apply(Object)` | `org.codehaus.groovy.reflection.CachedClass$3$$Lambda.0x000000a801086d40` |

##### `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` (`java.lang.ClassLoader`)

|  Change |  Delta |      % |          Size | Objects | Caller                                                                                    | Location             |
| ------: | -----: | -----: | ------------: | ------: | ----------------------------------------------------------------------------------------- | -------------------- |
| +100.0% | +120 B | 100.0% | 120 B → 240 B |   1 → 2 | `defineClass(ClassLoader, Class, String, byte[], ProtectionDomain, boolean, int, Object)` | `java.lang.System$2` |

##### `make(MethodType, LambdaForm, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LL`)

| Change |  Delta |             % |        Size | Objects | Caller                                                 | Location                                     |
| -----: | -----: | ------------: | ----------: | ------: | ------------------------------------------------------ | -------------------------------------------- |
|    new | +120 B | 0.0% → 100.0% | 0 B → 120 B |   0 → 3 | `invokeStatic(Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `newInstance()` (`javax.xml.parsers.SAXParserFactory`)

| Change |  Delta |             % |        Size | Objects | Caller  | Location                                               |
| -----: | -----: | ------------: | ----------: | ------: | ------- | ------------------------------------------------------ |
|    new | +120 B | 0.0% → 100.0% | 0 B → 120 B |   0 → 1 | `run()` | `groovy.xml.FactorySupport$$Lambda.0x000000a80117ad98` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

| Change | Delta |             % |       Size | Objects | Caller                           | Location           |
| -----: | ----: | ------------: | ---------: | ------: | -------------------------------- | ------------------ |
|    new | +96 B | 0.0% → 100.0% | 0 B → 96 B |   0 → 1 | `<init>(char[], int, int, Void)` | `java.lang.String` |

##### `initClassName()` (`java.lang.Class`)

|  Change | Delta |      % |         Size | Objects | Caller      | Location          |
| ------: | ----: | -----: | -----------: | ------: | ----------- | ----------------- |
| +366.7% | +88 B | 100.0% | 24 B → 112 B |       1 | `getName()` | `java.lang.Class` |

##### `decompress(ByteBuffer, int)` (`jdk.internal.jimage.ImageLocation`)

| Change | Delta |             % |       Size | Objects | Caller               | Location                               |
| -----: | ----: | ------------: | ---------: | ------: | -------------------- | -------------------------------------- |
|    new | +80 B | 0.0% → 100.0% | 0 B → 80 B |   0 → 1 | `getAttributes(int)` | `jdk.internal.jimage.BasicImageReader` |

##### `newModuleDescriptor(String, ModuleDescriptor$Version, Set, Set, Set, Set, Set, Set, Set, String, int)` (`java.lang.module.ModuleDescriptor$1`)

| Change | Delta |             % |       Size | Objects | Caller       | Location                      |
| -----: | ----: | ------------: | ---------: | ------: | ------------ | ----------------------------- |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 1 | `build(int)` | `jdk.internal.module.Builder` |

##### `<init>(int)` (`java.util.ArrayList`)

| Change | Delta |            % |       Size | Objects | Caller                      | Location                                      |
| -----: | ----: | -----------: | ---------: | ------: | --------------------------- | --------------------------------------------- |
|    new | +40 B | 0.0% → 62.5% | 0 B → 40 B |   0 → 1 | `parseClassTypeSignature()` | `sun.reflect.generics.parser.SignatureParser` |
|    new | +24 B | 0.0% → 37.5% | 0 B → 24 B |   0 → 1 | `setParams(Class[])`        | `java.beans.MethodDescriptor`                 |

##### `lambda$inheritFields$19(CachedClass)` (`groovy.lang.MetaClassImpl`)

| Change | Delta |             % |       Size | Objects | Caller          | Location                                               |
| -----: | ----: | ------------: | ---------: | ------: | --------------- | ------------------------------------------------------ |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 1 | `apply(Object)` | `groovy.lang.MetaClassImpl$$Lambda.0x000000a8010ae000` |

##### `lambda$inheritStaticInterfaceFields$17(CachedClass)` (`groovy.lang.MetaClassImpl`)

| Change | Delta |             % |       Size | Objects | Caller          | Location                                               |
| -----: | ----: | ------------: | ---------: | ------: | --------------- | ------------------------------------------------------ |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 1 | `apply(Object)` | `groovy.lang.MetaClassImpl$$Lambda.0x000000a8010ab980` |

##### `initTable()` (`java.util.concurrent.ConcurrentHashMap`)

|  Change |        Delta |             % |          Size | Objects | Caller                            | Location                                 |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------- | ---------------------------------------- |
| removed | -256.015 KiB | 100.0% → 0.0% | 256 KiB → 0 B |   1 → 0 | `putVal(Object, Object, boolean)` | `java.util.concurrent.ConcurrentHashMap` |

##### `<init>(int, int, MemorySegment)` (`java.nio.HeapByteBuffer`)

|  Change |       Delta |             % |         Size | Objects | Caller          | Location              |
| ------: | ----------: | ------------: | -----------: | ------: | --------------- | --------------------- |
| removed | -16.015 KiB | 100.0% → 0.0% | 16 KiB → 0 B |   1 → 0 | `allocate(int)` | `java.nio.ByteBuffer` |

##### `getPlainNodeReference(boolean)` (`org.codehaus.groovy.ast.ClassNode`)

| Change |  Delta |      % |          Size | Objects | Caller                    | Location                            |
| -----: | -----: | -----: | ------------: | ------: | ------------------------- | ----------------------------------- |
| -80.0% | -608 B | 100.0% | 760 B → 152 B |   5 → 1 | `getPlainNodeReference()` | `org.codehaus.groovy.ast.ClassNode` |

##### `<init>(int)` (`java.util.concurrent.atomic.AtomicIntegerArray`)

|  Change |  Delta |             % |        Size | Objects | Caller                     | Location                                        |
| ------: | -----: | ------------: | ----------: | ------: | -------------------------- | ----------------------------------------------- |
| removed | -528 B | 100.0% → 0.0% | 528 B → 0 B |   1 → 0 | `<init>(HashEdgeMap, int)` | `groovyjarjarantlr4.v4.runtime.dfa.HashEdgeMap` |

##### `<init>(HashEdgeMap, int)` (`groovyjarjarantlr4.v4.runtime.dfa.HashEdgeMap`)

|  Change |  Delta |             % |        Size | Objects | Caller             | Location                                        |
| ------: | -----: | ------------: | ----------: | ------: | ------------------ | ----------------------------------------------- |
| removed | -528 B | 100.0% → 0.0% | 528 B → 0 B |   1 → 0 | `put(int, Object)` | `groovyjarjarantlr4.v4.runtime.dfa.HashEdgeMap` |

##### `getDeclaredMethods0(boolean)` (`java.lang.Class`)

| Change |  Delta |      % |          Size | Objects | Caller                               | Location          |
| -----: | -----: | -----: | ------------: | ------: | ------------------------------------ | ----------------- |
| -69.1% | -448 B | 100.0% | 648 B → 200 B |   5 → 3 | `privateGetDeclaredMethods(boolean)` | `java.lang.Class` |

##### `toArray()` (`java.lang.PublicMethods`)

|  Change |  Delta |             % |        Size | Objects | Caller                      | Location          |
| ------: | -----: | ------------: | ----------: | ------: | --------------------------- | ----------------- |
| removed | -376 B | 100.0% → 0.0% | 376 B → 0 B |   1 → 0 | `privateGetPublicMethods()` | `java.lang.Class` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

| Change |  Delta |      % |         Size | Objects | Caller                                                    | Location                |
| -----: | -----: | -----: | -----------: | ------: | --------------------------------------------------------- | ----------------------- |
| -89.7% | -208 B | 100.0% | 232 B → 24 B |   2 → 1 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |  Delta |      % |          Size | Objects | Caller   | Location              |
| -----: | -----: | -----: | ------------: | ------: | -------- | --------------------- |
| -33.3% | -168 B | 100.0% | 504 B → 336 B |   9 → 6 | `grow()` | `java.util.ArrayList` |

##### `make(MethodType, LambdaForm, Object, Object, Object, Object, int, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LLLLILLLLLL`)

|  Change |  Delta |             % |        Size | Objects | Caller                                                                                                                      | Location                                             |
| ------: | -----: | ------------: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -160 B | 100.0% → 0.0% | 160 B → 0 B |   2 → 0 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object, int, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001105000` |

##### `clone()` (`java.lang.Object`)

|  Change | Delta |            % |       Size | Objects | Caller                                                                        | Location                      |
| ------: | ----: | -----------: | ---------: | ------: | ----------------------------------------------------------------------------- | ----------------------------- |
| removed | -80 B | 62.5% → 0.0% | 80 B → 0 B |   1 → 0 | `create(int, LambdaForm$Name[], int, boolean, MethodHandle, LambdaForm$Kind)` | `java.lang.invoke.LambdaForm` |
| removed | -48 B | 37.5% → 0.0% | 48 B → 0 B |   1 → 0 | `clone()`                                                                     | `java.lang.invoke.MemberName` |

##### `set(Method)` (`java.beans.MethodRef`)

|  Change | Delta |            % |       Size | Objects | Caller                   | Location                        |
| ------: | ----: | -----------: | ---------: | ------: | ------------------------ | ------------------------------- |
| removed | -40 B | 33.3% → 0.0% | 40 B → 0 B |   1 → 0 | `setMethod(Method)`      | `java.beans.MethodDescriptor`   |
| removed | -40 B | 33.3% → 0.0% | 40 B → 0 B |   1 → 0 | `setReadMethod0(Method)` | `java.beans.PropertyDescriptor` |

##### `setParams(Class[])` (`java.beans.MethodDescriptor`)

|  Change | Delta |             % |       Size | Objects | Caller              | Location                      |
| ------: | ----: | ------------: | ---------: | ------: | ------------------- | ----------------------------- |
| removed | -80 B | 100.0% → 0.0% | 80 B → 0 B |   3 → 0 | `setMethod(Method)` | `java.beans.MethodDescriptor` |

##### `lambda$applyStrayPropertyMethods$20(CachedClass)` (`groovy.lang.MetaClassImpl`)

|  Change | Delta |             % |       Size | Objects | Caller          | Location                                               |
| ------: | ----: | ------------: | ---------: | ------: | --------------- | ------------------------------------------------------ |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `apply(Object)` | `groovy.lang.MetaClassImpl$$Lambda.0x00000070010aee50` |

##### `initializeMap(Class)` (`java.lang.ClassValue`)

|  Change | Delta |             % |       Size | Objects | Caller          | Location               |
| ------: | ----: | ------------: | ---------: | ------: | --------------- | ---------------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `getMap(Class)` | `java.lang.ClassValue` |

##### `<init>(CachedClass)` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

|  Change | Delta |             % |       Size | Objects | Caller                        | Location                    |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------- | --------------------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `<init>(Class, MetaMethod[])` | `groovy.lang.MetaClassImpl` |

##### `lambda$inheritFields$18(CachedClass)` (`groovy.lang.MetaClassImpl`)

|  Change | Delta |             % |       Size | Objects | Caller          | Location                                               |
| ------: | ----: | ------------: | ---------: | ------: | --------------- | ------------------------------------------------------ |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `apply(Object)` | `groovy.lang.MetaClassImpl$$Lambda.0x00000070010abbd0` |

##### `<init>(int, float)` (`java.util.Hashtable`)

|  Change | Delta |             % |       Size | Objects | Caller     | Location              |
| ------: | ----: | ------------: | ---------: | ------: | ---------- | --------------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `<init>()` | `java.util.Hashtable` |

##### `computeValue(Class)` (`org.codehaus.groovy.reflection.ClassInfo$1`)

|  Change | Delta |             % |       Size | Objects | Caller                | Location                                     |
| ------: | ----: | ------------: | ---------: | ------: | --------------------- | -------------------------------------------- |
| removed | -56 B | 100.0% → 0.0% | 56 B → 0 B |   1 → 0 | `computeValue(Class)` | `org.codehaus.groovy.reflection.ClassInfo$1` |

##### `visitStringLiteral(GroovyParser$StringLiteralContext)` (`org.apache.groovy.parser.antlr4.AstBuilder`)

|  Change | Delta |             % |       Size | Objects | Caller                                                  | Location                                     |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------------------- | -------------------------------------------- |
| removed | -56 B | 100.0% → 0.0% | 56 B → 0 B |   1 → 0 | `visitStringLiteral(GroovyParser$StringLiteralContext)` | `org.apache.groovy.parser.antlr4.AstBuilder` |

### Total size

#### Regressions

Functions with the largest increase in bytes retained within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|     Change |       Delta |             % |                Size | Objects | Function                                                            | Location                                                            |
| ---------: | ----------: | ------------: | ------------------: | ------: | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
|  +24040.5% | +69.492 KiB |  0.1% → 97.0% |    296 B → 69.8 KiB |  7 → 85 | `invoke(Object, Object, Object)`                                    | `java.lang.invoke.LambdaForm$MH.0x000000a801115400`                 |
|   +6302.9% | +66.968 KiB |  0.4% → 94.6% |   1.06 KiB → 68 KiB | 20 → 51 | `invoke(Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000a801141000`                 |
|  +25828.1% |  +64.57 KiB |  0.1% → 90.1% |    256 B → 64.8 KiB |   3 → 9 | `newInstance(Object[])`                                             | `java.lang.reflect.Constructor`                                     |
|   +5737.5% | +64.546 KiB |  0.4% → 91.3% | 1.13 KiB → 65.7 KiB | 15 → 18 | `newInstanceWithCaller(Object[], boolean, Class)`                   | `java.lang.reflect.Constructor`                                     |
|  +58992.9% | +64.523 KiB | <0.1% → 89.8% |    112 B → 64.6 KiB |   2 → 4 | `newConstructorAccessor(Constructor)`                               | `jdk.internal.reflect.MethodHandleAccessorFactory`                  |
|  +58992.9% | +64.523 KiB | <0.1% → 89.8% |    112 B → 64.6 KiB |   2 → 4 | `newConstructorAccessor(Constructor)`                               | `jdk.internal.reflect.ReflectionFactory`                            |
|  +58992.9% | +64.523 KiB | <0.1% → 89.8% |    112 B → 64.6 KiB |   2 → 4 | `acquireConstructorAccessor()`                                      | `java.lang.reflect.Constructor`                                     |
|  +58957.1% | +64.484 KiB | <0.1% → 89.8% |    112 B → 64.6 KiB |   2 → 3 | `ensureClassInitialized0(Class)`                                    | `jdk.internal.misc.Unsafe`                                          |
|  +58957.1% | +64.484 KiB | <0.1% → 89.8% |    112 B → 64.6 KiB |   2 → 3 | `ensureClassInitialized(Class)`                                     | `jdk.internal.misc.Unsafe`                                          |
|  +58957.1% | +64.484 KiB | <0.1% → 89.8% |    112 B → 64.6 KiB |   2 → 3 | `ensureClassInitialized(Class)`                                     | `jdk.internal.reflect.MethodHandleAccessorFactory`                  |
|  +63238.5% | +64.226 KiB | <0.1% → 89.4% |    104 B → 64.3 KiB |   2 → 6 | `newInvokeSpecial(Object, Object)`                                  | `java.lang.invoke.DirectMethodHandle$Holder`                        |
| +102675.0% | +64.171 KiB | <0.1% → 89.3% |     64 B → 64.2 KiB |   1 → 4 | `<init>(Reader)`                                                    | `org.codenarc.ruleset.XmlReaderRuleSet`                             |
|  +51331.3% | +64.164 KiB | <0.1% → 89.4% |    128 B → 64.3 KiB |   3 → 6 | `invokeSpecial(Object, Object, Object)`                             | `java.lang.invoke.LambdaForm$DMH.0x000000a801001000`                |
|        new | +64.046 KiB |  0.0% → 89.0% |        0 B → 64 KiB |   0 → 2 | `validateXml(String)`                                               | `org.codenarc.ruleset.XmlReaderRuleSet`                             |
|        new | +64.015 KiB |  0.0% → 89.0% |        0 B → 64 KiB |   0 → 1 | `<clinit>()`                                                        | `com.sun.org.apache.xerces.internal.util.XMLChar`                   |
|        new | +64.015 KiB |  0.0% → 89.0% |        0 B → 64 KiB |   0 → 1 | `normalize(Object, short)`                                          | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl`    |
|        new | +64.015 KiB |  0.0% → 89.0% |        0 B → 64 KiB |   0 → 1 | `getActualValue(Object, ValidationContext, ValidatedInfo, boolean)` | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl`    |
|        new | +64.015 KiB |  0.0% → 89.0% |        0 B → 64 KiB |   0 → 1 | `applyFacets(XSFacets, short, short, short, ValidationContext)`     | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl`    |
|        new | +64.015 KiB |  0.0% → 89.0% |        0 B → 64 KiB |   0 → 1 | `applyFacets1(XSFacets, short, short)`                              | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl`    |
|        new | +64.015 KiB |  0.0% → 89.0% |        0 B → 64 KiB |   0 → 1 | `createBuiltInTypes(SymbolHash, XSSimpleTypeDecl)`                  | `com.sun.org.apache.xerces.internal.impl.dv.xs.BaseSchemaDVFactory` |

##### Standard library

|    Change |       Delta |             % |                Size | Objects | Function                                                            | Location                                                            |
| --------: | ----------: | ------------: | ------------------: | ------: | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| +24040.5% | +69.492 KiB |  0.1% → 97.0% |    296 B → 69.8 KiB |  7 → 85 | `invoke(Object, Object, Object)`                                    | `java.lang.invoke.LambdaForm$MH.0x000000a801115400`                 |
|  +6302.9% | +66.968 KiB |  0.4% → 94.6% |   1.06 KiB → 68 KiB | 20 → 51 | `invoke(Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000a801141000`                 |
| +25828.1% |  +64.57 KiB |  0.1% → 90.1% |    256 B → 64.8 KiB |   3 → 9 | `newInstance(Object[])`                                             | `java.lang.reflect.Constructor`                                     |
|  +5737.5% | +64.546 KiB |  0.4% → 91.3% | 1.13 KiB → 65.7 KiB | 15 → 18 | `newInstanceWithCaller(Object[], boolean, Class)`                   | `java.lang.reflect.Constructor`                                     |
| +58992.9% | +64.523 KiB | <0.1% → 89.8% |    112 B → 64.6 KiB |   2 → 4 | `newConstructorAccessor(Constructor)`                               | `jdk.internal.reflect.MethodHandleAccessorFactory`                  |
| +58992.9% | +64.523 KiB | <0.1% → 89.8% |    112 B → 64.6 KiB |   2 → 4 | `newConstructorAccessor(Constructor)`                               | `jdk.internal.reflect.ReflectionFactory`                            |
| +58992.9% | +64.523 KiB | <0.1% → 89.8% |    112 B → 64.6 KiB |   2 → 4 | `acquireConstructorAccessor()`                                      | `java.lang.reflect.Constructor`                                     |
| +58957.1% | +64.484 KiB | <0.1% → 89.8% |    112 B → 64.6 KiB |   2 → 3 | `ensureClassInitialized0(Class)`                                    | `jdk.internal.misc.Unsafe`                                          |
| +58957.1% | +64.484 KiB | <0.1% → 89.8% |    112 B → 64.6 KiB |   2 → 3 | `ensureClassInitialized(Class)`                                     | `jdk.internal.misc.Unsafe`                                          |
| +58957.1% | +64.484 KiB | <0.1% → 89.8% |    112 B → 64.6 KiB |   2 → 3 | `ensureClassInitialized(Class)`                                     | `jdk.internal.reflect.MethodHandleAccessorFactory`                  |
| +63238.5% | +64.226 KiB | <0.1% → 89.4% |    104 B → 64.3 KiB |   2 → 6 | `newInvokeSpecial(Object, Object)`                                  | `java.lang.invoke.DirectMethodHandle$Holder`                        |
| +51331.3% | +64.164 KiB | <0.1% → 89.4% |    128 B → 64.3 KiB |   3 → 6 | `invokeSpecial(Object, Object, Object)`                             | `java.lang.invoke.LambdaForm$DMH.0x000000a801001000`                |
|       new | +64.015 KiB |  0.0% → 89.0% |        0 B → 64 KiB |   0 → 1 | `<clinit>()`                                                        | `com.sun.org.apache.xerces.internal.util.XMLChar`                   |
|       new | +64.015 KiB |  0.0% → 89.0% |        0 B → 64 KiB |   0 → 1 | `normalize(Object, short)`                                          | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl`    |
|       new | +64.015 KiB |  0.0% → 89.0% |        0 B → 64 KiB |   0 → 1 | `getActualValue(Object, ValidationContext, ValidatedInfo, boolean)` | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl`    |
|       new | +64.015 KiB |  0.0% → 89.0% |        0 B → 64 KiB |   0 → 1 | `applyFacets(XSFacets, short, short, short, ValidationContext)`     | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl`    |
|       new | +64.015 KiB |  0.0% → 89.0% |        0 B → 64 KiB |   0 → 1 | `applyFacets1(XSFacets, short, short)`                              | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl`    |
|       new | +64.015 KiB |  0.0% → 89.0% |        0 B → 64 KiB |   0 → 1 | `createBuiltInTypes(SymbolHash, XSSimpleTypeDecl)`                  | `com.sun.org.apache.xerces.internal.impl.dv.xs.BaseSchemaDVFactory` |
|       new | +64.015 KiB |  0.0% → 89.0% |        0 B → 64 KiB |   0 → 1 | `createBuiltInTypes()`                                              | `com.sun.org.apache.xerces.internal.impl.dv.xs.SchemaDVFactoryImpl` |
|       new | +64.015 KiB |  0.0% → 89.0% |        0 B → 64 KiB |   0 → 1 | `<clinit>()`                                                        | `com.sun.org.apache.xerces.internal.impl.dv.xs.SchemaDVFactoryImpl` |

#### Improvements

Functions with the largest decrease in bytes retained within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |             % |                Size | Objects | Function                                                                          | Location                                            |
| ------: | -----------: | ------------: | ------------------: | ------: | --------------------------------------------------------------------------------- | --------------------------------------------------- |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `initTable()`                                                                     | `java.util.concurrent.ConcurrentHashMap`            |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `put(Object, Object)`                                                             | `java.util.concurrent.ConcurrentHashMap`            |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `storeString(String)`                                                             | `jdk.jfr.internal.StringPool`                       |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `addString(String)`                                                               | `jdk.jfr.internal.StringPool`                       |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `putString(String)`                                                               | `jdk.jfr.internal.event.EventWriter`                |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `commit(long, long, long, String, String, boolean, long, long, long, long, long)` | `jdk.jfr.events.ActiveRecordingEvent`               |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `writeMetaEvents()`                                                               | `jdk.jfr.internal.PlatformRecorder`                 |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `start(PlatformRecording)`                                                        | `jdk.jfr.internal.PlatformRecorder`                 |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `start()`                                                                         | `jdk.jfr.internal.PlatformRecording`                |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `start()`                                                                         | `jdk.jfr.Recording`                                 |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `execute(ArgumentParser)`                                                         | `jdk.jfr.internal.dcmd.DCmdStart`                   |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `execute(String, String, char)`                                                   | `jdk.jfr.internal.dcmd.AbstractDCmd`                |
| -100.0% | -255.984 KiB | 91.5% → <0.1% |      256 KiB → 32 B |       1 | `putVal(Object, Object, boolean)`                                                 | `java.util.concurrent.ConcurrentHashMap`            |
|  -97.6% |  -21.093 KiB |   7.7% → 0.7% |    21.6 KiB → 528 B |  77 → 6 | `invoke(Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000a801117000` |
|  -99.3% |  -17.906 KiB |   6.4% → 0.2% |      18 KiB → 120 B |  21 → 1 | `invoke(Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000a801183400` |
|  -94.1% |  -17.312 KiB |   6.6% → 1.5% | 18.4 KiB → 1.08 KiB | 28 → 23 | `invokeSpecial(Object, Object)`                                                   | `java.lang.invoke.DirectMethodHandle$Holder`        |
|  -95.3% |  -17.234 KiB |   6.5% → 1.2% |    18.1 KiB → 872 B | 22 → 20 | `init()`                                                                          | `org.codenarc.source.AbstractSourceCode`            |
|  -91.6% |  -17.156 KiB |   6.7% → 2.2% | 18.7 KiB → 1.57 KiB | 35 → 33 | `guard(Object, Object)`                                                           | `java.lang.invoke.LambdaForm$MH.0x000000a801104000` |
|  -94.9% |  -17.085 KiB |   6.4% → 1.3% |      18 KiB → 936 B | 21 → 20 | `delegate(Object, Object)`                                                        | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|  -94.5% |  -17.031 KiB |   6.4% → 1.4% |    18 KiB → 1,016 B |      21 | `forEach(Consumer)`                                                               | `java.util.stream.ReferencePipeline$Head`           |

##### Standard library

|  Change |        Delta |             % |                Size | Objects | Function                                                                          | Location                                            |
| ------: | -----------: | ------------: | ------------------: | ------: | --------------------------------------------------------------------------------- | --------------------------------------------------- |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `initTable()`                                                                     | `java.util.concurrent.ConcurrentHashMap`            |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `put(Object, Object)`                                                             | `java.util.concurrent.ConcurrentHashMap`            |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `storeString(String)`                                                             | `jdk.jfr.internal.StringPool`                       |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `addString(String)`                                                               | `jdk.jfr.internal.StringPool`                       |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `putString(String)`                                                               | `jdk.jfr.internal.event.EventWriter`                |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `commit(long, long, long, String, String, boolean, long, long, long, long, long)` | `jdk.jfr.events.ActiveRecordingEvent`               |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `writeMetaEvents()`                                                               | `jdk.jfr.internal.PlatformRecorder`                 |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `start(PlatformRecording)`                                                        | `jdk.jfr.internal.PlatformRecorder`                 |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `start()`                                                                         | `jdk.jfr.internal.PlatformRecording`                |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `start()`                                                                         | `jdk.jfr.Recording`                                 |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `execute(ArgumentParser)`                                                         | `jdk.jfr.internal.dcmd.DCmdStart`                   |
| removed | -256.015 KiB |  91.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `execute(String, String, char)`                                                   | `jdk.jfr.internal.dcmd.AbstractDCmd`                |
| -100.0% | -255.984 KiB | 91.5% → <0.1% |      256 KiB → 32 B |       1 | `putVal(Object, Object, boolean)`                                                 | `java.util.concurrent.ConcurrentHashMap`            |
|  -97.6% |  -21.093 KiB |   7.7% → 0.7% |    21.6 KiB → 528 B |  77 → 6 | `invoke(Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000a801117000` |
|  -99.3% |  -17.906 KiB |   6.4% → 0.2% |      18 KiB → 120 B |  21 → 1 | `invoke(Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000a801183400` |
|  -94.1% |  -17.312 KiB |   6.6% → 1.5% | 18.4 KiB → 1.08 KiB | 28 → 23 | `invokeSpecial(Object, Object)`                                                   | `java.lang.invoke.DirectMethodHandle$Holder`        |
|  -91.6% |  -17.156 KiB |   6.7% → 2.2% | 18.7 KiB → 1.57 KiB | 35 → 33 | `guard(Object, Object)`                                                           | `java.lang.invoke.LambdaForm$MH.0x000000a801104000` |
|  -94.9% |  -17.085 KiB |   6.4% → 1.3% |      18 KiB → 936 B | 21 → 20 | `delegate(Object, Object)`                                                        | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|  -94.5% |  -17.031 KiB |   6.4% → 1.4% |    18 KiB → 1,016 B |      21 | `forEach(Consumer)`                                                               | `java.util.stream.ReferencePipeline$Head`           |
|  -94.5% |  -17.031 KiB |   6.4% → 1.4% |    18 KiB → 1,016 B |      21 | `compile(int)`                                                                    | `org.codehaus.groovy.control.CompilationUnit`       |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801115400`)

|  Change |       Delta |             % |           Size | Objects | Callee                                                                                      | Location                                             |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new | +69.781 KiB | 0.0% → 100.0% | 0 B → 69.8 KiB |  0 → 85 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a8010b2800` |
| removed |      -296 B | 100.0% → 0.0% |    296 B → 0 B |   7 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x00000070010bc800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801141000`)

|  Change |      Delta |             % |           Size | Objects | Callee                             | Location                                            |
| ------: | ---------: | ------------: | -------------: | ------: | ---------------------------------- | --------------------------------------------------- |
|     new | +66.14 KiB |  0.0% → 97.2% | 0 B → 66.1 KiB |  0 → 34 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a801118000` |
|     new | +2.007 KiB |   0.0% → 3.0% | 0 B → 2.01 KiB |  0 → 18 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed | -1.062 KiB | 100.0% → 0.0% | 1.06 KiB → 0 B |  20 → 0 | `reinvoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001136800` |

##### `newInstance(Object[])` (`java.lang.reflect.Constructor`)

|    Change |      Delta |      % |             Size | Objects | Callee                                            | Location                        |
| --------: | ---------: | -----: | ---------------: | ------: | ------------------------------------------------- | ------------------------------- |
| +25828.1% | +64.57 KiB | 100.0% | 256 B → 64.8 KiB |   3 → 9 | `newInstanceWithCaller(Object[], boolean, Class)` | `java.lang.reflect.Constructor` |

##### `newInstanceWithCaller(Object[], boolean, Class)` (`java.lang.reflect.Constructor`)

|    Change |       Delta |            % |                Size | Objects | Callee                         | Location                                               |
| --------: | ----------: | -----------: | ------------------: | ------: | ------------------------------ | ------------------------------------------------------ |
| +58992.9% | +64.523 KiB | 9.7% → 98.4% |    112 B → 64.6 KiB |   2 → 4 | `acquireConstructorAccessor()` | `java.lang.reflect.Constructor`                        |
|     +2.3% |       +24 B | 90.3% → 1.6% | 1.02 KiB → 1.04 KiB | 13 → 14 | `newInstance(Object[])`        | `jdk.internal.reflect.DirectConstructorHandleAccessor` |

##### `newConstructorAccessor(Constructor)` (`jdk.internal.reflect.MethodHandleAccessorFactory`)

|    Change |       Delta |              % |             Size | Objects | Callee                          | Location                                           |
| --------: | ----------: | -------------: | ---------------: | ------: | ------------------------------- | -------------------------------------------------- |
| +58957.1% | +64.484 KiB | 100.0% → 99.9% | 112 B → 64.6 KiB |   2 → 3 | `ensureClassInitialized(Class)` | `jdk.internal.reflect.MethodHandleAccessorFactory` |
|       new |       +40 B |    0.0% → 0.1% |       0 B → 40 B |   0 → 1 | `asSpreader(Class, int)`        | `java.lang.invoke.MethodHandle`                    |

##### `newConstructorAccessor(Constructor)` (`jdk.internal.reflect.ReflectionFactory`)

|    Change |       Delta |      % |             Size | Objects | Callee                                | Location                                           |
| --------: | ----------: | -----: | ---------------: | ------: | ------------------------------------- | -------------------------------------------------- |
| +58992.9% | +64.523 KiB | 100.0% | 112 B → 64.6 KiB |   2 → 4 | `newConstructorAccessor(Constructor)` | `jdk.internal.reflect.MethodHandleAccessorFactory` |

##### `acquireConstructorAccessor()` (`java.lang.reflect.Constructor`)

|    Change |       Delta |      % |             Size | Objects | Callee                                | Location                                 |
| --------: | ----------: | -----: | ---------------: | ------: | ------------------------------------- | ---------------------------------------- |
| +58992.9% | +64.523 KiB | 100.0% | 112 B → 64.6 KiB |   2 → 4 | `newConstructorAccessor(Constructor)` | `jdk.internal.reflect.ReflectionFactory` |

##### `ensureClassInitialized0(Class)` (`jdk.internal.misc.Unsafe`)

|  Change |       Delta |            % |         Size | Objects | Callee       | Location                                                            |
| ------: | ----------: | -----------: | -----------: | ------: | ------------ | ------------------------------------------------------------------- |
|     new | +64.015 KiB | 0.0% → 99.1% | 0 B → 64 KiB |   0 → 1 | `<clinit>()` | `com.sun.org.apache.xerces.internal.impl.dv.xs.SchemaDVFactoryImpl` |
|     new |      +592 B |  0.0% → 0.9% |  0 B → 592 B |   0 → 2 | `<clinit>()` | `org.codehaus.groovy.vmplugin.v9.Java9`                             |
| removed |       -88 B | 78.6% → 0.0% |   88 B → 0 B |   1 → 0 | `<clinit>()` | `jdk.proxy2.$Proxy31`                                               |
| removed |       -24 B | 21.4% → 0.0% |   24 B → 0 B |   1 → 0 | `<clinit>()` | `org.codenarc.rule.dry.DuplicateNumberLiteralRule`                  |

##### `ensureClassInitialized(Class)` (`jdk.internal.misc.Unsafe`)

|    Change |       Delta |      % |             Size | Objects | Callee                           | Location                   |
| --------: | ----------: | -----: | ---------------: | ------: | -------------------------------- | -------------------------- |
| +58957.1% | +64.484 KiB | 100.0% | 112 B → 64.6 KiB |   2 → 3 | `ensureClassInitialized0(Class)` | `jdk.internal.misc.Unsafe` |

##### `ensureClassInitialized(Class)` (`jdk.internal.reflect.MethodHandleAccessorFactory`)

|    Change |       Delta |      % |             Size | Objects | Callee                          | Location                   |
| --------: | ----------: | -----: | ---------------: | ------: | ------------------------------- | -------------------------- |
| +58957.1% | +64.484 KiB | 100.0% | 112 B → 64.6 KiB |   2 → 3 | `ensureClassInitialized(Class)` | `jdk.internal.misc.Unsafe` |

##### `newInvokeSpecial(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     Change |       Delta |             % |            Size | Objects | Callee                     | Location                                |
| ---------: | ----------: | ------------: | --------------: | ------: | -------------------------- | --------------------------------------- |
| +102675.0% | +64.171 KiB | 61.5% → 99.9% | 64 B → 64.2 KiB |   1 → 4 | `<init>(Reader)`           | `org.codenarc.ruleset.XmlReaderRuleSet` |
|        new |       +80 B |   0.0% → 0.1% |      0 B → 80 B |   0 → 1 | `<init>(MethodNode)`       | `org.gmetrics.result.MethodKey`         |
|    removed |       -64 B |  61.5% → 0.0% |      64 B → 0 B |   1 → 0 | `<init>(String)`           | `org.codenarc.ruleset.XmlFileRuleSet`   |
|    removed |       -40 B |  38.5% → 0.0% |      40 B → 0 B |   1 → 0 | `<init>(List)`             | `org.codenarc.ruleset.ListRuleSet`      |
|        new |       +16 B |  0.0% → <0.1% |      0 B → 16 B |   0 → 1 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle`   |

##### `<init>(Reader)` (`org.codenarc.ruleset.XmlReaderRuleSet`)

|  Change |       Delta |             % |           Size | Objects | Callee                                                           | Location                               |
| ------: | ----------: | ------------: | -------------: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
|     new | +64.117 KiB |  0.0% → 99.8% | 0 B → 64.1 KiB |   0 → 3 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`     |
|     new |      +120 B |   0.0% → 0.2% |    0 B → 120 B |   0 → 1 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`     |
| removed |       -64 B | 100.0% → 0.0% |     64 B → 0 B |   1 → 0 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `invokeSpecial(Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000a801001000`)

|  Change |       Delta |            % |         Size | Objects | Callee                                           | Location                                                          |
| ------: | ----------: | -----------: | -----------: | ------: | ------------------------------------------------ | ----------------------------------------------------------------- |
|     new | +64.046 KiB | 0.0% → 99.6% | 0 B → 64 KiB |   0 → 2 | `validateXml(String)`                            | `org.codenarc.ruleset.XmlReaderRuleSet`                           |
|     new |      +136 B |  0.0% → 0.2% |  0 B → 136 B |   0 → 1 | `addViolationIfDoubleQuoted(ConstantExpression)` | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`      |
|     new |       +80 B |  0.0% → 0.1% |   0 B → 80 B |   0 → 2 | `parseReport(String)`                            | `org.codenarc.CodeNarc`                                           |
| removed |       -64 B | 50.0% → 0.0% |   64 B → 0 B |   1 → 0 | `statementForcesMethodReturn(Statement)`         | `org.codenarc.rule.basic.DeadCodeAstVisitor`                      |
| removed |       -40 B | 31.3% → 0.0% |   40 B → 0 B |   1 → 0 | `isSingleLineClass(ClassNode)`                   | `org.codenarc.rule.formatting.ClassStartsWithBlankLineAstVisitor` |

##### `validateXml(String)` (`org.codenarc.ruleset.XmlReaderRuleSet`)

| Change |       Delta |             % |         Size | Objects | Callee                                   | Location                           |
| -----: | ----------: | ------------: | -----------: | ------: | ---------------------------------------- | ---------------------------------- |
|    new | +64.046 KiB | 0.0% → 100.0% | 0 B → 64 KiB |   0 → 2 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `normalize(Object, short)` (`com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl`)

| Change |       Delta |             % |         Size | Objects | Callee       | Location                                          |
| -----: | ----------: | ------------: | -----------: | ------: | ------------ | ------------------------------------------------- |
|    new | +64.015 KiB | 0.0% → 100.0% | 0 B → 64 KiB |   0 → 1 | `<clinit>()` | `com.sun.org.apache.xerces.internal.util.XMLChar` |

##### `getActualValue(Object, ValidationContext, ValidatedInfo, boolean)` (`com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl`)

| Change |       Delta |             % |         Size | Objects | Callee                     | Location                                                         |
| -----: | ----------: | ------------: | -----------: | ------: | -------------------------- | ---------------------------------------------------------------- |
|    new | +64.015 KiB | 0.0% → 100.0% | 0 B → 64 KiB |   0 → 1 | `normalize(Object, short)` | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl` |

##### `applyFacets(XSFacets, short, short, short, ValidationContext)` (`com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl`)

| Change |       Delta |             % |         Size | Objects | Callee                                                              | Location                                                         |
| -----: | ----------: | ------------: | -----------: | ------: | ------------------------------------------------------------------- | ---------------------------------------------------------------- |
|    new | +64.015 KiB | 0.0% → 100.0% | 0 B → 64 KiB |   0 → 1 | `getActualValue(Object, ValidationContext, ValidatedInfo, boolean)` | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl` |

##### `applyFacets1(XSFacets, short, short)` (`com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl`)

| Change |       Delta |             % |         Size | Objects | Callee                                                          | Location                                                         |
| -----: | ----------: | ------------: | -----------: | ------: | --------------------------------------------------------------- | ---------------------------------------------------------------- |
|    new | +64.015 KiB | 0.0% → 100.0% | 0 B → 64 KiB |   0 → 1 | `applyFacets(XSFacets, short, short, short, ValidationContext)` | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl` |

##### `createBuiltInTypes(SymbolHash, XSSimpleTypeDecl)` (`com.sun.org.apache.xerces.internal.impl.dv.xs.BaseSchemaDVFactory`)

| Change |       Delta |             % |         Size | Objects | Callee                                 | Location                                                         |
| -----: | ----------: | ------------: | -----------: | ------: | -------------------------------------- | ---------------------------------------------------------------- |
|    new | +64.015 KiB | 0.0% → 100.0% | 0 B → 64 KiB |   0 → 1 | `applyFacets1(XSFacets, short, short)` | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl` |

##### `createBuiltInTypes()` (`com.sun.org.apache.xerces.internal.impl.dv.xs.SchemaDVFactoryImpl`)

| Change |       Delta |             % |         Size | Objects | Callee                                             | Location                                                            |
| -----: | ----------: | ------------: | -----------: | ------: | -------------------------------------------------- | ------------------------------------------------------------------- |
|    new | +64.015 KiB | 0.0% → 100.0% | 0 B → 64 KiB |   0 → 1 | `createBuiltInTypes(SymbolHash, XSSimpleTypeDecl)` | `com.sun.org.apache.xerces.internal.impl.dv.xs.BaseSchemaDVFactory` |

##### `<clinit>()` (`com.sun.org.apache.xerces.internal.impl.dv.xs.SchemaDVFactoryImpl`)

| Change |       Delta |             % |         Size | Objects | Callee                 | Location                                                            |
| -----: | ----------: | ------------: | -----------: | ------: | ---------------------- | ------------------------------------------------------------------- |
|    new | +64.015 KiB | 0.0% → 100.0% | 0 B → 64 KiB |   0 → 1 | `createBuiltInTypes()` | `com.sun.org.apache.xerces.internal.impl.dv.xs.SchemaDVFactoryImpl` |

##### `put(Object, Object)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change |        Delta |             % |          Size | Objects | Callee                            | Location                                 |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------- | ---------------------------------------- |
| removed | -256.015 KiB | 100.0% → 0.0% | 256 KiB → 0 B |   1 → 0 | `putVal(Object, Object, boolean)` | `java.util.concurrent.ConcurrentHashMap` |

##### `storeString(String)` (`jdk.jfr.internal.StringPool`)

|  Change |        Delta |             % |          Size | Objects | Callee                | Location                                 |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------- | ---------------------------------------- |
| removed | -256.015 KiB | 100.0% → 0.0% | 256 KiB → 0 B |   1 → 0 | `put(Object, Object)` | `java.util.concurrent.ConcurrentHashMap` |

##### `addString(String)` (`jdk.jfr.internal.StringPool`)

|  Change |        Delta |             % |          Size | Objects | Callee                | Location                      |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------- | ----------------------------- |
| removed | -256.015 KiB | 100.0% → 0.0% | 256 KiB → 0 B |   1 → 0 | `storeString(String)` | `jdk.jfr.internal.StringPool` |

##### `putString(String)` (`jdk.jfr.internal.event.EventWriter`)

|  Change |        Delta |             % |          Size | Objects | Callee              | Location                      |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------- | ----------------------------- |
| removed | -256.015 KiB | 100.0% → 0.0% | 256 KiB → 0 B |   1 → 0 | `addString(String)` | `jdk.jfr.internal.StringPool` |

##### `commit(long, long, long, String, String, boolean, long, long, long, long, long)` (`jdk.jfr.events.ActiveRecordingEvent`)

|  Change |        Delta |             % |          Size | Objects | Callee              | Location                             |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------- | ------------------------------------ |
| removed | -256.015 KiB | 100.0% → 0.0% | 256 KiB → 0 B |   1 → 0 | `putString(String)` | `jdk.jfr.internal.event.EventWriter` |

##### `writeMetaEvents()` (`jdk.jfr.internal.PlatformRecorder`)

|  Change |        Delta |             % |          Size | Objects | Callee                                                                            | Location                              |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------------------------------------------------------- | ------------------------------------- |
| removed | -256.015 KiB | 100.0% → 0.0% | 256 KiB → 0 B |   1 → 0 | `commit(long, long, long, String, String, boolean, long, long, long, long, long)` | `jdk.jfr.events.ActiveRecordingEvent` |

##### `start(PlatformRecording)` (`jdk.jfr.internal.PlatformRecorder`)

|  Change |        Delta |             % |          Size | Objects | Callee              | Location                            |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------- | ----------------------------------- |
| removed | -256.015 KiB | 100.0% → 0.0% | 256 KiB → 0 B |   1 → 0 | `writeMetaEvents()` | `jdk.jfr.internal.PlatformRecorder` |

##### `start()` (`jdk.jfr.internal.PlatformRecording`)

|  Change |        Delta |             % |          Size | Objects | Callee                     | Location                            |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------- | ----------------------------------- |
| removed | -256.015 KiB | 100.0% → 0.0% | 256 KiB → 0 B |   1 → 0 | `start(PlatformRecording)` | `jdk.jfr.internal.PlatformRecorder` |

##### `start()` (`jdk.jfr.Recording`)

|  Change |        Delta |             % |          Size | Objects | Callee    | Location                             |
| ------: | -----------: | ------------: | ------------: | ------: | --------- | ------------------------------------ |
| removed | -256.015 KiB | 100.0% → 0.0% | 256 KiB → 0 B |   1 → 0 | `start()` | `jdk.jfr.internal.PlatformRecording` |

##### `execute(ArgumentParser)` (`jdk.jfr.internal.dcmd.DCmdStart`)

|  Change |        Delta |             % |          Size | Objects | Callee    | Location            |
| ------: | -----------: | ------------: | ------------: | ------: | --------- | ------------------- |
| removed | -256.015 KiB | 100.0% → 0.0% | 256 KiB → 0 B |   1 → 0 | `start()` | `jdk.jfr.Recording` |

##### `execute(String, String, char)` (`jdk.jfr.internal.dcmd.AbstractDCmd`)

|  Change |        Delta |             % |          Size | Objects | Callee                    | Location                          |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------- | --------------------------------- |
| removed | -256.015 KiB | 100.0% → 0.0% | 256 KiB → 0 B |   1 → 0 | `execute(ArgumentParser)` | `jdk.jfr.internal.dcmd.DCmdStart` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change |        Delta |             % |          Size | Objects | Callee        | Location                                 |
| ------: | -----------: | ------------: | ------------: | ------: | ------------- | ---------------------------------------- |
| removed | -256.015 KiB | 100.0% → 0.0% | 256 KiB → 0 B |   1 → 0 | `initTable()` | `java.util.concurrent.ConcurrentHashMap` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801117000`)

|  Change |       Delta |             % |           Size | Objects | Callee                                                                                      | Location                                             |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -21.609 KiB | 100.0% → 0.0% | 21.6 KiB → 0 B |  77 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070010b2800` |
|     new |      +528 B | 0.0% → 100.0% |    0 B → 528 B |   0 → 6 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000a8010bc800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801183400`)

|  Change |       Delta |             % |         Size | Objects | Callee                               | Location                                             |
| ------: | ----------: | ------------: | -----------: | ------: | ------------------------------------ | ---------------------------------------------------- |
| removed | -18.023 KiB | 100.0% → 0.0% | 18 KiB → 0 B |  21 → 0 | `invokeVirtual(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001152800` |
|     new |      +120 B | 0.0% → 100.0% |  0 B → 120 B |   0 → 1 | `newInvokeSpecial(Object)`           | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invokeSpecial(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|  Change |       Delta |             % |             Size | Objects | Callee           | Location                                                                                       |
| ------: | ----------: | ------------: | ---------------: | ------: | ---------------- | ---------------------------------------------------------------------------------------------- |
|  -95.3% | -17.234 KiB | 98.3% → 79.0% | 18.1 KiB → 872 B | 22 → 20 | `init()`         | `org.codenarc.source.AbstractSourceCode`                                                       |
|     new |      +136 B |  0.0% → 12.3% |      0 B → 136 B |   0 → 1 | `doCall()`       | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor$_visitConstantExpression_closure1` |
|  -61.1% |       -88 B |   0.8% → 5.1% |     144 B → 56 B |   2 → 1 | `trim()`         | `java.lang.String`                                                                             |
| removed |       -80 B |   0.4% → 0.0% |       80 B → 0 B |   1 → 0 | `afterBlock()`   | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                                            |
| removed |       -40 B |   0.2% → 0.0% |       40 B → 0 B |   1 → 0 | `buildRuleSet()` | `org.codenarc.CodeNarcRunner`                                                                  |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|  Change |       Delta |              % |           Size | Objects | Callee                                                           | Location                           |
| ------: | ----------: | -------------: | -------------: | ------: | ---------------------------------------------------------------- | ---------------------------------- |
|  -95.3% | -17.117 KiB | 99.4% → 100.0% | 18 KiB → 872 B |      20 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
| removed |       -64 B |    0.3% → 0.0% |     64 B → 0 B |   1 → 0 | `linkToCallSite(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |
| removed |       -56 B |    0.3% → 0.0% |     56 B → 0 B |   1 → 0 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `guard(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801104000`)

| Change |       Delta |             % |           Size | Objects | Callee                     | Location                                         |
| -----: | ----------: | ------------: | -------------: | ------: | -------------------------- | ------------------------------------------------ |
| -94.9% | -17.062 KiB | 96.0% → 58.2% | 18 KiB → 936 B |      20 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `delegate(Object, Object)` (`java.lang.invoke.DelegatingMethodHandle$Holder`)

| Change |       Delta |             % |           Size | Objects | Callee                           | Location                                            |
| -----: | ----------: | ------------: | -------------: | ------: | -------------------------------- | --------------------------------------------------- |
| -94.9% | -17.085 KiB |        100.0% | 18 KiB → 936 B | 21 → 20 | `guardWithCatch(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a801102400` |
| -95.1% |  -17.07 KiB | 99.7% → 96.6% | 18 KiB → 904 B |      19 | `guard(Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000a801104000` |

##### `forEach(Consumer)` (`java.util.stream.ReferencePipeline$Head`)

| Change |       Delta |      % |             Size | Objects | Callee                       | Location                                     |
| -----: | ----------: | -----: | ---------------: | ------: | ---------------------------- | -------------------------------------------- |
| -94.5% | -17.031 KiB | 100.0% | 18 KiB → 1,016 B |      21 | `forEachRemaining(Consumer)` | `java.util.Spliterators$IteratorSpliterator` |

##### `compile(int)` (`org.codehaus.groovy.control.CompilationUnit`)

| Change |       Delta |      % |             Size | Objects | Callee              | Location                                  |
| -----: | ----------: | -----: | ---------------: | ------: | ------------------- | ----------------------------------------- |
| -94.5% | -17.031 KiB | 100.0% | 18 KiB → 1,016 B |      21 | `forEach(Consumer)` | `java.util.stream.ReferencePipeline$Head` |
