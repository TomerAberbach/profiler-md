# Sampling profile diff

Collected 313 samples → 291 samples (-22 samples, -7.0%).

| Category         |  Change | Delta |             % |   Samples |
| ---------------- | ------: | ----: | ------------: | --------: |
| Standard library |   -9.0% |   -28 | 99.0% → 96.9% | 310 → 282 |
| Ours             | +200.0% |    +6 |   1.0% → 3.1% |     3 → 9 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

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

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

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

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `getReachableConfigSet(CharStream, ATNConfigSet, ATNConfigSet, int)` (`groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`)

|  Change | Delta |             % | Samples | Location                                                  |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- |
| +700.0% |    +7 | 50.0% → 88.9% |   1 → 8 | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator:345` |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator:337` |
|     new |    +1 |  0.0% → 11.1% |   0 → 1 | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator:326` |

##### `internalMemberName(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change | Delta |             % | Samples | Location                                  |
| -----: | ----: | ------------: | ------: | ----------------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `java.lang.invoke.DirectMethodHandle:327` |

##### `matches(Method, String, Class[])` (`java.lang.PublicMethods$Key`)

|  Change | Delta |      % | Samples | Location                          |
| ------: | ----: | -----: | ------: | --------------------------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `java.lang.PublicMethods$Key:108` |

##### `getMethods(Class, String)` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

| Change | Delta |            % | Samples | Location                                                    |
| -----: | ----: | -----------: | ------: | ----------------------------------------------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex:201` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex:202` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| +100.0% |    +1 | 20.0% → 28.6% |   1 → 2 | `java.util.HashMap:635` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `java.util.HashMap:637` |
| +100.0% |    +1 | 20.0% → 28.6% |   1 → 2 | `java.util.HashMap:644` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `java.util.HashMap:654` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `java.util.HashMap:669` |

##### `getEpsilonTarget(ATNConfig, Transition, boolean, boolean, PredictionContextCache, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

| Change | Delta |            % | Samples | Location                                                    |
| -----: | ----: | -----------: | ------: | ----------------------------------------------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1860` |

##### `equals(Object)` (`groovyjarjarantlr4.v4.runtime.atn.SingletonPredictionContext`)

| Change | Delta |            % | Samples | Location                                                          |
| -----: | ----: | -----------: | ------: | ----------------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `groovyjarjarantlr4.v4.runtime.atn.SingletonPredictionContext:87` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `groovyjarjarantlr4.v4.runtime.atn.SingletonPredictionContext:88` |

##### `addFirst(Object)` (`java.util.ArrayDeque`)

|  Change | Delta |      % | Samples | Location                   |
| ------: | ----: | -----: | ------: | -------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `java.util.ArrayDeque:288` |

##### `equals(Object[], Object[])` (`java.util.Arrays`)

| Change | Delta |             % | Samples | Location                |
| -----: | ----: | ------------: | ------: | ----------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.util.Arrays:2979` |

##### `put(Object, Object)` (`groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap`)

| Change | Delta |             % | Samples | Location                                                 |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap:108` |

##### `transform(ATNState, PredictionContext, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfig`)

| Change | Delta |             % | Samples | Location                                          |
| -----: | ----: | ------------: | ------: | ------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig:211` |

##### `execute(Lexer, CharStream, int)` (`groovyjarjarantlr4.v4.runtime.atn.LexerActionExecutor`)

| Change | Delta |             % | Samples | Location                                                    |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `groovyjarjarantlr4.v4.runtime.atn.LexerActionExecutor:167` |

##### `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

| Change | Delta |             % | Samples | Location                                |
| -----: | ----: | ------------: | ------: | --------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.stream.AbstractPipeline:509` |

##### `closure(ATNConfigSet, ATNConfigSet, boolean, boolean, PredictionContextCache, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|  Change | Delta |      % | Samples | Location                                                    |
| ------: | ----: | -----: | ------: | ----------------------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1681` |

##### `visitField(FieldNode)` (`org.codenarc.rule.naming.FieldNameAstVisitor`)

| Change | Delta |             % | Samples | Location                                          |
| -----: | ----: | ------------: | ------: | ------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.rule.naming.FieldNameAstVisitor:88` |

##### `visitField(FieldNode)` (`org.codenarc.rule.unnecessary.UnnecessaryDefInFieldDeclarationAstVisitor`)

| Change | Delta |             % | Samples | Location                                                                      |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.rule.unnecessary.UnnecessaryDefInFieldDeclarationAstVisitor:42` |

##### `<init>(String, List, SourceCode)` (`org.codenarc.results.FileResults`)

| Change | Delta |             % | Samples | Location                              |
| -----: | ----: | ------------: | ------: | ------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.results.FileResults:37` |

##### `flexibleCheckForCorrectColumn(ASTNode, String, BlockStatement)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

| Change | Delta |             % | Samples | Location                                                 |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.rule.formatting.IndentationAstVisitor:356` |

##### `violationMessage(String, String, String)` (`org.codenarc.rule.formatting.SpaceAroundMapEntryColonAstVisitor`)

| Change | Delta |             % | Samples | Location                                                             |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.rule.formatting.SpaceAroundMapEntryColonAstVisitor:80` |

##### `getNode(Object)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
|  -55.6% |    -5 | 90.0% → 80.0% |   9 → 4 | `java.util.HashMap:582` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `java.util.HashMap:578` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `java.util.HashMap:587` |

##### `getReachableTarget(Transition, int)` (`groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`)

| Change | Delta |      % | Samples | Location                                                  |
| -----: | ----: | -----: | ------: | --------------------------------------------------------- |
| -50.0% |    -5 | 100.0% |  10 → 5 | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator:367` |

##### `hashCodeRange(int, int)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Location                  |
| -----: | ----: | -----: | ------: | ------------------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `java.util.ArrayList:677` |

##### `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`)

| Change | Delta |      % | Samples | Location                                 |
| -----: | ----: | -----: | ------: | ---------------------------------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `java.util.stream.ReferencePipeline:616` |

##### `get(Object)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change | Delta |            % | Samples | Location                                     |
| ------: | ----: | -----------: | ------: | -------------------------------------------- |
| removed |    -2 | 25.0% → 0.0% |   2 → 0 | `java.util.concurrent.ConcurrentHashMap:940` |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `java.util.concurrent.ConcurrentHashMap:943` |

##### `getReturnState(int)` (`groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext`)

| Change | Delta |      % | Samples | Location                                                      |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext:50` |

##### `resize()` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Location                |
| -----: | ----: | ------------: | ------: | ----------------------- |
| -50.0% |    -1 | 33.3% → 25.0% |   2 → 1 | `java.util.HashMap:720` |
| -33.3% |    -1 |         50.0% |   3 → 2 | `java.util.HashMap:741` |

##### `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.lang.invoke.MethodHandleImpl:333` |

##### `hashCode()` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfig`)

|  Change | Delta |             % | Samples | Location                                          |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig:385` |

##### `checkCustomized(MethodHandle)` (`java.lang.invoke.Invokers`)

| Change | Delta |      % | Samples | Location                        |
| -----: | ----: | -----: | ------: | ------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `java.lang.invoke.Invokers:627` |

##### `sync(int)` (`groovyjarjarantlr4.v4.runtime.BufferedTokenStream`)

|  Change | Delta |             % | Samples | Location                                                |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `groovyjarjarantlr4.v4.runtime.BufferedTokenStream:153` |

##### `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.util.stream.AbstractPipeline:547` |

##### `<init>(Method, boolean)` (`java.lang.invoke.MemberName`)

| Change | Delta |      % | Samples | Location                          |
| -----: | ----: | -----: | ------: | --------------------------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `java.lang.invoke.MemberName:535` |

##### `gallopRight(Object, Object[], int, int, int, Comparator)` (`java.util.TimSort`)

|  Change | Delta |            % | Samples | Location                |
| ------: | ----: | -----------: | ------: | ----------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.TimSort:617` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.TimSort:623` |

##### `getCachedContext(PredictionContext, ConcurrentMap, PredictionContext$IdentityHashMap)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContext`)

|  Change | Delta |              % | Samples | Location                                                  |
| ------: | ----: | -------------: | ------: | --------------------------------------------------------- |
| removed |    -1 |   33.3% → 0.0% |   1 → 0 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext:257` |
|  -50.0% |    -1 | 66.7% → 100.0% |   2 → 1 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext:258` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|  Change | Delta |             % | Samples | Location                                          |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.analyzer.AbstractSourceAnalyzer:44` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractMethodCallExpressionVisitor`)

|  Change | Delta |             % | Samples | Location                                                   |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.rule.AbstractMethodCallExpressionVisitor:39` |

##### `doCall(ClassNode)` (`org.codenarc.rule.formatting.BracesForClassRule$_applyTo_closure1`)

|  Change | Delta |             % | Samples | Location                                                               |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.rule.formatting.BracesForClassRule$_applyTo_closure1:41` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `getReachableConfigSet(CharStream, ATNConfigSet, ATNConfigSet, int)` (`groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`)

|  Change | Delta |      % | Samples | Caller                                          | Location                                              |
| ------: | ----: | -----: | ------: | ----------------------------------------------- | ----------------------------------------------------- |
| +350.0% |    +7 | 100.0% |   2 → 9 | `computeTargetState(CharStream, DFAState, int)` | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator` |

##### `internalMemberName(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change | Delta |            % | Samples | Caller                                                                 | Location                                             |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------------------------- | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `invokeSpecial(Object, Object, Object)`                                | `java.lang.invoke.DirectMethodHandle$Holder`         |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `invokeStatic(Object, int)`                                            | `java.lang.invoke.DirectMethodHandle$Holder`         |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `invokeVirtual(Object, Object, Object, Object)`                        | `java.lang.invoke.LambdaForm$DMH.0x000000b80138cc00` |

##### `matches(Method, String, Class[])` (`java.lang.PublicMethods$Key`)

|  Change | Delta |      % | Samples | Caller                                       | Location                             |
| ------: | ----: | -----: | ------: | -------------------------------------------- | ------------------------------------ |
| +300.0% |    +3 | 100.0% |   1 → 4 | `filter(Method[], String, Class[], boolean)` | `java.lang.PublicMethods$MethodList` |

##### `getMethods(Class, String)` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

| Change | Delta |             % | Samples | Caller                                                   | Location                    |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------- | --------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `getMethodWithCaching(Class, String, Object[], boolean)` | `groovy.lang.MetaClassImpl` |

##### `invokeVirtual(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000b8010bc800`)

| Change | Delta |             % | Samples | Caller                           | Location                                            |
| -----: | ----: | ------------: | ------: | -------------------------------- | --------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b801117000` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller                | Location            |
| -----: | ----: | -----: | ------: | --------------------- | ------------------- |
| +40.0% |    +2 | 100.0% |   5 → 7 | `put(Object, Object)` | `java.util.HashMap` |

##### `provide(Object)` (`org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x000000b8010b6d70`)

|  Change | Delta |      % | Samples | Caller                                          | Location                                            |
| ------: | ----: | -----: | ------: | ----------------------------------------------- | --------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `getAndPut(String, MemoizeCache$ValueProvider)` | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite` |

##### `getEpsilonTarget(ATNConfig, Transition, boolean, boolean, PredictionContextCache, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|  Change | Delta |      % | Samples | Caller                                                                                                        | Location                                               |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| +200.0% |    +2 | 100.0% |   1 → 3 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `equals(Object)` (`groovyjarjarantlr4.v4.runtime.atn.SingletonPredictionContext`)

| Change | Delta |            % | Samples | Caller              | Location                                                       |
| -----: | ----: | -----------: | ------: | ------------------- | -------------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `equals(Object)`    | `groovyjarjarantlr4.v4.runtime.atn.SingletonPredictionContext` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `equals(ATNConfig)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`                  |

##### `addFirst(Object)` (`java.util.ArrayDeque`)

|  Change | Delta |      % | Samples | Caller         | Location               |
| ------: | ----: | -----: | ------: | -------------- | ---------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `push(Object)` | `java.util.ArrayDeque` |

##### `equals(Object[], Object[])` (`java.util.Arrays`)

| Change | Delta |             % | Samples | Caller               | Location                      |
| -----: | ----: | ------------: | ------: | -------------------- | ----------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `equals(MethodType)` | `java.lang.invoke.MethodType` |

##### `put(Object, Object)` (`groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap`)

| Change | Delta |             % | Samples | Caller                                                                                  | Location                                              |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------- | ----------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `getCachedContext(PredictionContext, ConcurrentMap, PredictionContext$IdentityHashMap)` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |

##### `transform(ATNState, PredictionContext, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfig`)

| Change | Delta |             % | Samples | Caller                                                              | Location                                               |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------- | ------------------------------------------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `ruleTransition(ATNConfig, RuleTransition, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `execute(Lexer, CharStream, int)` (`groovyjarjarantlr4.v4.runtime.atn.LexerActionExecutor`)

| Change | Delta |             % | Samples | Caller                                                        | Location                                              |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- | ----------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `accept(CharStream, LexerActionExecutor, int, int, int, int)` | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator` |

##### `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

| Change | Delta |             % | Samples | Caller                               | Location                            |
| -----: | ----: | ------------: | ------: | ------------------------------------ | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b801119400`)

| Change | Delta |             % | Samples | Caller                                   | Location                           |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | ---------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeSpecial(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|  Change | Delta |      % | Samples | Caller                   | Location                                            |
| ------: | ----: | -----: | ------: | ------------------------ | --------------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b801002c00` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |             % | Samples | Caller                         | Location                                          |
| -----: | ----: | ------------: | ------: | ------------------------------ | ------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|  Change | Delta |      % | Samples | Caller                      | Location                 |
| ------: | ----: | -----: | ------: | --------------------------- | ------------------------ |
| +100.0% |    +1 | 100.0% |   1 → 2 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |

##### `closure(ATNConfigSet, ATNConfigSet, boolean, boolean, PredictionContextCache, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|  Change | Delta |      % | Samples | Caller                                                                                       | Location                                               |
| ------: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| +100.0% |    +1 | 100.0% |   1 → 2 | `computeTargetState(DFA, DFAState, ParserRuleContext, int, boolean, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `<init>(Object, Object, Reference)` (`org.codenarc.rule.design.CloneableWithoutCloneAstVisitor$_visitClassEx_closure1`)

| Change | Delta |             % | Samples | Caller                    | Location                                                   |
| -----: | ----: | ------------: | ------: | ------------------------- | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitClassEx(ClassNode)` | `org.codenarc.rule.design.CloneableWithoutCloneAstVisitor` |

##### `visitField(FieldNode)` (`org.codenarc.rule.naming.FieldNameAstVisitor`)

| Change | Delta |             % | Samples | Caller                              | Location                            |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitContents(GroovyClassVisitor)` | `org.codehaus.groovy.ast.ClassNode` |

##### `$getCallSiteArray()` (`org.gmetrics.util.Calculator`)

| Change | Delta |             % | Samples | Caller                                   | Location                       |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | ------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `calculateAverage(BigDecimal, int, int)` | `org.gmetrics.util.Calculator` |

##### `visitField(FieldNode)` (`org.codenarc.rule.unnecessary.UnnecessaryDefInFieldDeclarationAstVisitor`)

| Change | Delta |             % | Samples | Caller                  | Location                                 |
| -----: | ----: | ------------: | ------: | ----------------------- | ---------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractFieldVisitor` |

##### `call(Object, Object, Object)` (`org.gmetrics.util.AstUtil$isFinalVariable$1`)

| Change | Delta |             % | Samples | Caller                               | Location                                |
| -----: | ----: | ------------: | ------: | ------------------------------------ | --------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `isFinalVariableDeclaration(Object)` | `org.gmetrics.metric.abc.AbcAstVisitor` |

##### `<init>(String, List, SourceCode)` (`org.codenarc.results.FileResults`)

| Change | Delta |             % | Samples | Caller                                             | Location                                     |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `newInvokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `flexibleCheckForCorrectColumn(ASTNode, String, BlockStatement)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

| Change | Delta |             % | Samples | Caller                                                  | Location                                             |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------- | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b80118e800` |

##### `super$3$shouldApplyThisRuleTo(ClassNode)` (`org.codenarc.rule.unused.UnusedPrivateFieldRule`)

| Change | Delta |             % | Samples | Caller                                  | Location                                             |
| -----: | ----: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b801101c00` |

##### `violationMessage(String, String, String)` (`org.codenarc.rule.formatting.SpaceAroundMapEntryColonAstVisitor`)

| Change | Delta |             % | Samples | Caller                                                  | Location                                     |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `getNode(Object)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Caller        | Location                  |
| -----: | ----: | ------------: | ------: | ------------- | ------------------------- |
| -42.9% |    -3 | 70.0% → 80.0% |   7 → 4 | `get(Object)` | `java.util.HashMap`       |
| -66.7% |    -2 | 30.0% → 20.0% |   3 → 1 | `get(Object)` | `java.util.LinkedHashMap` |

##### `getReachableTarget(Transition, int)` (`groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`)

| Change | Delta |      % | Samples | Caller                                                               | Location                                              |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------- | ----------------------------------------------------- |
| -50.0% |    -5 | 100.0% |  10 → 5 | `getReachableConfigSet(CharStream, ATNConfigSet, ATNConfigSet, int)` | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator` |

##### `invokeVirtual(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|  Change | Delta |            % | Samples | Caller                           | Location                                            |
| ------: | ----: | -----------: | ------: | -------------------------------- | --------------------------------------------------- |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b801584800` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b8015bb400` |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b801585800` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b8015f9000` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b801588000` |

##### `hashCodeRange(int, int)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Caller       | Location              |
| -----: | ----: | -----: | ------: | ------------ | --------------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `hashCode()` | `java.util.ArrayList` |

##### `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`)

|  Change | Delta |              % | Samples | Caller                    | Location                                                  |
| ------: | ----: | -------------: | ------: | ------------------------- | --------------------------------------------------------- |
|  -66.7% |    -2 | 75.0% → 100.0% |   3 → 1 | `setGuards(Object)`       | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `<init>(Class, String[])` | `org.codehaus.groovy.runtime.callsite.CallSiteArray`      |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000b8010b2800`)

|  Change | Delta |             % | Samples | Caller                                           | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| removed |    -2 |  50.0% → 0.0% |   2 → 0 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000b8010bc000` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000b801115400` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000b801142000` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b8012b8400` |

##### `get(Object)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change | Delta |             % | Samples | Caller                                                                                  | Location                                               |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------- | ------------------------------------------------------ |
|  -66.7% |    -2 | 37.5% → 20.0% |   3 → 1 | `adaptivePredict(TokenStream, int, ParserRuleContext, boolean)`                         | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
|  -33.3% |    -1 | 37.5% → 40.0% |   3 → 2 | `getCachedContext(PredictionContext, ConcurrentMap, PredictionContext$IdentityHashMap)` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`  |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `addDFAState(DFA, ATNConfigSet, PredictionContextCache)`                                | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| +100.0% |    +1 | 12.5% → 40.0% |   1 → 2 | `getNoCheckStale(Object)`                                                               | `jdk.internal.util.ReferencedKeyMap`                   |

##### `getReturnState(int)` (`groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext`)

| Change | Delta |      % | Samples | Caller                                                               | Location                                              |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------- | ----------------------------------------------------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `join(PredictionContext, PredictionContext, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |

##### `invokeStatic(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|  Change | Delta |            % | Samples | Caller                           | Location                                            |
| ------: | ----: | -----------: | ------: | -------------------------------- | --------------------------------------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000b801105800` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b801118800` |

##### `isAssignableFrom(Class)` (`java.lang.Class`)

|  Change | Delta |            % | Samples | Caller                      | Location                                                             |
| ------: | ----: | -----------: | ------: | --------------------------- | -------------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `isAssignableFrom(Class)`   | `org.codehaus.groovy.reflection.CachedClass`                         |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `castToType(Object, Class)` | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation` |

##### `resize()` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller                                          | Location            |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | ------------------- |
| -33.3% |    -2 | 100.0% |   6 → 4 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `newArray(Class, int)` (`java.lang.reflect.Array`)

| Change | Delta |      % | Samples | Caller                    | Location                  |
| -----: | ----: | -----: | ------: | ------------------------- | ------------------------- |
|  -7.1% |    -2 | 100.0% | 28 → 26 | `newInstance(Class, int)` | `java.lang.reflect.Array` |

##### `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

|  Change | Delta |             % | Samples | Caller                                                            | Location                            |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------- | ----------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `makePairwiseConvert(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `hashCode()` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfig`)

|  Change | Delta |             % | Samples | Caller         | Location            |
| ------: | ----: | ------------: | ------: | -------------- | ------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `hash(Object)` | `java.util.HashMap` |

##### `checkCustomized(MethodHandle)` (`java.lang.invoke.Invokers`)

|  Change | Delta |              % | Samples | Caller                                   | Location                                            |
| ------: | ----: | -------------: | ------: | ---------------------------------------- | --------------------------------------------------- |
|  -50.0% |    -1 | 66.7% → 100.0% |   2 → 1 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
| removed |    -1 |   33.3% → 0.0% |   1 → 0 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000b801104400` |

##### `sync(int)` (`groovyjarjarantlr4.v4.runtime.BufferedTokenStream`)

|  Change | Delta |             % | Samples | Caller                         | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------------------ | --------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `nextTokenOnChannel(int, int)` | `groovyjarjarantlr4.v4.runtime.BufferedTokenStream` |

##### `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |             % | Samples | Caller                               | Location                            |
| ------: | ----: | ------------: | ------: | ------------------------------------ | ----------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `<init>(Method, boolean)` (`java.lang.invoke.MemberName`)

| Change | Delta |      % | Samples | Caller           | Location                      |
| -----: | ----: | -----: | ------: | ---------------- | ----------------------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `<init>(Method)` | `java.lang.invoke.MemberName` |

##### `gallopRight(Object, Object[], int, int, int, Comparator)` (`java.util.TimSort`)

|  Change | Delta |            % | Samples | Caller                        | Location            |
| ------: | ----: | -----------: | ------: | ----------------------------- | ------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `mergeAt(int)`                | `java.util.TimSort` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `mergeHi(int, int, int, int)` | `java.util.TimSort` |

##### `getCachedContext(PredictionContext, ConcurrentMap, PredictionContext$IdentityHashMap)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContext`)

| Change | Delta |      % | Samples | Caller                                | Location                                |
| -----: | ----: | -----: | ------: | ------------------------------------- | --------------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `getCachedContext(PredictionContext)` | `groovyjarjarantlr4.v4.runtime.atn.ATN` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|  Change | Delta |             % | Samples | Caller                                          | Location                                             |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b8010bc800` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractMethodCallExpressionVisitor`)

|  Change | Delta |             % | Samples | Caller                      | Location                                   |
| ------: | ----: | ------------: | ------: | --------------------------- | ------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `doCall(ClassNode)` (`org.codenarc.rule.formatting.BracesForClassRule$_applyTo_closure1`)

|  Change | Delta |             % | Samples | Caller                                  | Location                                     |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

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

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

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

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b80138dc00`)

|  Change | Delta |             % | Samples | Callee                                     | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | --------------------------------------------------- |
|     new |   +67 |  0.0% → 98.5% |  0 → 67 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b80118d000` |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `delegate(Object, Object)`                 | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |    +1 |   0.0% → 1.5% |   0 → 1 | `invokeSpecial(Object, Object, Object)`    | `java.lang.invoke.DirectMethodHandle$Holder`        |
|     new |    +1 |   0.0% → 1.5% |   0 → 1 | `invoke(Object, Object)`                   | `java.lang.invoke.LambdaForm$MH.0x000000b801002c00` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b80182e800`)

|  Change | Delta |             % | Samples | Callee                             | Location                                            |
| ------: | ----: | ------------: | ------: | ---------------------------------- | --------------------------------------------------- |
|     new |   +59 | 0.0% → 100.0% |  0 → 59 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000b801118800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b8013dc000`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |   +57 | 0.0% → 100.0% |  0 → 57 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b8010b2800` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeSpecial(Object, Object, Object)`                                                     | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b801829400`)

|  Change | Delta |             % | Samples | Callee                                     | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | --------------------------------------------------- |
|     new |   +41 | 0.0% → 100.0% |  0 → 41 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invoke(Object, Object)`                   | `java.lang.invoke.LambdaForm$MH.0x000000b801105800` |

##### `invoke(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b80160c800`)

|  Change | Delta |             % | Samples | Callee                                                  | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------- | ---------------------------------------------------- |
|     new |   +41 | 0.0% → 100.0% |  0 → 41 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b80118e800` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeStatic(Object, Object, Object, Object)`          | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `reinvoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b80118d000`)

|  Change | Delta |              % | Samples | Callee                                           | Location                                            |
| ------: | ----: | -------------: | ------: | ------------------------------------------------ | --------------------------------------------------- |
|  +50.0% |   +29 | 95.1% → 100.0% | 58 → 87 | `guardWithCatch(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b801140400` |
|  +45.8% |   +27 |  96.7% → 98.9% | 59 → 86 | `guard(Object, Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000b80118d400` |
|  +75.0% |   +21 |  45.9% → 56.3% | 28 → 49 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000b8013dbc00` |
|     new |   +13 |   0.0% → 14.9% |  0 → 13 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000b8013dc800` |
| removed |    -3 |    4.9% → 0.0% |   3 → 0 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000b8013ddc00` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b8013dbc00`)

| Change | Delta |      % | Samples | Callee                                                                                      | Location                                             |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| +62.5% |   +20 | 100.0% | 32 → 52 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b8010b2800` |

##### `invokeSpecial(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000b80118e800`)

| Change | Delta |             % | Samples | Callee                                                           | Location                                                            |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------- | ------------------------------------------------------------------- |
| +34.3% |   +12 | 97.2% → 85.5% | 35 → 47 | `processFile(String, DirectoryResults, RuleSet)`                 | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                    |
|    new |    +4 |   0.0% → 7.3% |   0 → 4 | `checkDeclaration(ASTNode, String, String)`                      | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
|    new |    +2 |   0.0% → 3.6% |   0 → 2 | `flexibleCheckForCorrectColumn(ASTNode, String, BlockStatement)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                |
|    new |    +1 |   0.0% → 1.8% |   0 → 1 | `checkLastLineForSemicolon(SourceCode, List, AnnotatedNode)`     | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`            |
|    new |    +1 |   0.0% → 1.8% |   0 → 1 | `processImportNode(SourceCode, List, ImportNode)`                | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`            |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b801142000`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|  +25.4% |   +15 | 98.3% → 97.4% | 59 → 74 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b8010b2800` |
| +100.0% |    +1 |   1.7% → 2.6% |   1 → 2 | `collector(Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x000000b801140000`  |

##### `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |             % | Samples | Callee                                   | Location                                            |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | --------------------------------------------------- |
| +26.7% |   +16 | 96.8% → 97.4% | 60 → 76 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b801142000` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b8012d8000`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |   +76 | 0.0% → 100.0% |  0 → 76 | `invokeVirtual(Object, Object, int)`                                                        | `java.lang.invoke.LambdaForm$DMH.0x000000b801152800` |
| removed |   -60 |  98.4% → 0.0% |  60 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b8010b2800` |
| removed |    -1 |   1.6% → 0.0% |   1 → 0 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000b801114c00`  |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|  Change | Delta |             % | Samples | Callee                                                               | Location                                                                   |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------- | -------------------------------------------------------------------------- |
|  +80.8% |   +21 | 66.7% → 88.7% | 26 → 47 | `linkToCallSite(Object, Object, Object, Object)`                     | `java.lang.invoke.Invokers$Holder`                                         |
|  -42.9% |    -3 |  17.9% → 7.5% |   7 → 4 | `linkToCallSite(Object, Object)`                                     | `java.lang.invoke.Invokers$Holder`                                         |
|  -50.0% |    -2 |  10.3% → 3.8% |   4 → 2 | `linkToCallSite(Object, Object, Object)`                             | `java.lang.invoke.Invokers$Holder`                                         |
| removed |    -1 |   2.6% → 0.0% |   1 → 0 | `<init>(Object, Object, Reference, Reference, Reference, Reference)` | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

| Change | Delta |              % | Samples | Callee                                                   | Location                           |
| -----: | ----: | -------------: | ------: | -------------------------------------------------------- | ---------------------------------- |
| +34.3% |   +12 | 100.0% → 97.9% | 35 → 47 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|    new |    +1 |    0.0% → 2.1% |   0 → 1 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b801004000`)

|  Change | Delta |            % | Samples | Callee                                           | Location                                            |
| ------: | ----: | -----------: | ------: | ------------------------------------------------ | --------------------------------------------------- |
|     new |   +41 | 0.0% → 78.8% |  0 → 41 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b80160c800` |
| removed |   -31 | 79.5% → 0.0% |  31 → 0 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b80160c400` |
|  +25.0% |    +1 | 10.3% → 9.6% |   4 → 5 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b8012bc800` |
| removed |    -1 |  2.6% → 0.0% |   1 → 0 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b801441000` |
| removed |    -1 |  2.6% → 0.0% |   1 → 0 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b801440000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b8012c6400`)

|  Change | Delta |              % | Samples | Callee                                     | Location                                            |
| ------: | ----: | -------------: | ------: | ------------------------------------------ | --------------------------------------------------- |
| +400.0% |   +12 | 100.0% → 93.8% |  3 → 15 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b80118d000` |
|     new |    +1 |    0.0% → 6.3% |   0 → 1 | `invoke(Object, Object)`                   | `java.lang.invoke.LambdaForm$MH.0x000000b801002c00` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b8013dc800`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |   +13 | 0.0% → 100.0% |  0 → 13 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b8010b2800` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeSpecial(Object, Object, Object, Object)`                                             | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `guard(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b8012b9c00`)

|  Change | Delta |             % | Samples | Callee                                             | Location                                            |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | --------------------------------------------------- |
| +400.0% |    +8 | 11.8% → 37.0% |  2 → 10 | `reinvoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b8012b9800` |
|  +13.3% |    +2 | 88.2% → 63.0% | 15 → 17 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `guardWithCatch(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b8012b8c00`)

|  Change | Delta |            % | Samples | Callee                                           | Location                                            |
| ------: | ----: | -----------: | ------: | ------------------------------------------------ | --------------------------------------------------- |
|     new |   +22 | 0.0% → 73.3% |  0 → 22 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b8012b8400` |
| removed |   -18 | 85.7% → 0.0% |  18 → 0 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b8012b8800` |
|     new |    +4 | 0.0% → 13.3% |   0 → 4 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b80144c000` |
|     new |    +3 | 0.0% → 10.0% |   0 → 3 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b801413c00` |
| removed |    -1 |  4.8% → 0.0% |   1 → 0 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b8013e1800` |

##### `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change | Delta |             % |   Samples | Callee                                                                                       | Location                                        |
| -----: | ----: | ------------: | --------: | -------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| +14.9% |   +15 | 87.8% → 94.3% | 101 → 116 | `invokeExact_MT(Object, Object, Object)`                                                     | `java.lang.invoke.Invokers$Holder`              |
| +13.8% |    +4 | 25.2% → 26.8% |   29 → 33 | `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|    new |    +1 |   0.0% → 0.8% |     0 → 1 | `doWithCallSite(MutableCallSite, Object[], BiFunction)`                                      | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `expression(int)` (`org.apache.groovy.parser.antlr4.GroovyParser`)

|  Change | Delta |             % | Samples | Callee                                                 | Location                                               |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------ | ------------------------------------------------------ |
|  +12.8% |    +5 | 88.6% → 84.6% | 39 → 44 | `postfixExpression()`                                  | `org.apache.groovy.parser.antlr4.GroovyParser`         |
| +166.7% |    +5 |  6.8% → 15.4% |   3 → 8 | `expression(int)`                                      | `org.apache.groovy.parser.antlr4.GroovyParser`         |
| +100.0% |    +4 |  9.1% → 15.4% |   4 → 8 | `adaptivePredict(TokenStream, int, ParserRuleContext)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
|  -50.0% |    -1 |   4.5% → 1.9% |   2 → 1 | `consume()`                                            | `groovyjarjarantlr4.v4.runtime.Parser`                 |
| removed |    -1 |   2.3% → 0.0% |   1 → 0 | `nls()`                                                | `org.apache.groovy.parser.antlr4.GroovyParser`         |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b80160c400`)

|  Change | Delta |             % | Samples | Callee                                             | Location                                         |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | ------------------------------------------------ |
|     new |    +9 | 0.0% → 100.0% |   0 → 9 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `delegate(Object, Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invokeVirtual(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000b8010bc800`)

| Change | Delta |             % | Samples | Callee                                   | Location                                                   |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | ---------------------------------------------------------- |
| +30.8% |   +12 | 45.3% → 54.8% | 39 → 51 | `collectViolations(SourceCode, RuleSet)` | `org.codenarc.analyzer.AbstractSourceAnalyzer`             |
| -66.7% |    -6 |  10.5% → 3.2% |   9 → 3 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$251`                      |
| -60.0% |    -3 |   5.8% → 2.2% |   5 → 2 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.reflection.GeneratedMetaMethod$Proxy` |
| -66.7% |    -2 |   3.5% → 1.1% |   3 → 1 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$1219`                     |
| -50.0% |    -2 |   4.7% → 2.2% |   4 → 2 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$242`                      |

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|  Change | Delta |             % | Samples | Callee                                           | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| +366.7% |   +11 |  4.6% → 20.0% |  3 → 14 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  -13.5% |    -7 | 80.0% → 64.3% | 52 → 45 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
|  -37.5% |    -3 |  12.3% → 7.1% |   8 → 5 | `linkToCallSite(Object, Object, long, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000b801394800` |
| +100.0% |    +2 |   3.1% → 5.7% |   2 → 4 | `linkToCallSite(Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000b801390c00` |
|     new |    +1 |   0.0% → 1.4% |   0 → 1 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                  |

##### `doCall(Object)` (`org.codenarc.rule.formatting.IndentationAstVisitor$_visitBlockStatement_closure7`)

| Change | Delta |            % | Samples | Callee                                           | Location                           |
| -----: | ----: | -----------: | ------: | ------------------------------------------------ | ---------------------------------- |
|    new |    +4 | 0.0% → 80.0% |   0 → 4 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `checkDeclaration(ASTNode, String, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`)

| Change | Delta |            % | Samples | Callee                                           | Location                                            |
| -----: | ----: | -----------: | ------: | ------------------------------------------------ | --------------------------------------------------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `findRegex(Object, Object)`                      | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### `checkStatementIndent(Statement, BlockStatement)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

| Change | Delta |            % | Samples | Callee                                                   | Location                           |
| -----: | ----: | -----------: | ------: | -------------------------------------------------------- | ---------------------------------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |

##### `findLineWithDeclaration(ASTNode, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`)

| Change | Delta |             % | Samples | Callee                      | Location                                            |
| -----: | ----: | ------------: | ------: | --------------------------- | --------------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `findRegex(Object, Object)` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### `doCall(Object)` (`org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`)

| Change | Delta |             % | Samples | Callee                           | Location                           |
| -----: | ----: | ------------: | ------: | -------------------------------- | ---------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `visitClassEx(ClassNode)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`)

|  Change | Delta |      % | Samples | Callee                                                   | Location                           |
| ------: | ----: | -----: | ------: | -------------------------------------------------------- | ---------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractMethodVisitor`)

|  Change | Delta |             % | Samples | Callee                    | Location                                                              |
| ------: | ----: | ------------: | ------: | ------------------------- | --------------------------------------------------------------------- |
|     new |    +2 |  0.0% → 66.7% |   0 → 2 | `visitMethod(MethodNode)` | `org.codenarc.rule.unnecessary.UnnecessaryOverridingMethodAstVisitor` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `visitMethod(MethodNode)` | `org.codenarc.rule.basic.EmptyMethodAstVisitor`                       |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `visitMethod(MethodNode)` | `org.codenarc.rule.naming.MethodNameAstVisitor`                       |

##### `line(int)` (`org.codenarc.source.AbstractSourceCode`)

| Change | Delta |             % | Samples | Callee                           | Location                           |
| -----: | ----: | ------------: | ------: | -------------------------------- | ---------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `sourceLineTrimmed(ASTNode)` (`org.codenarc.rule.AbstractAstVisitor`)

| Change | Delta |             % | Samples | Callee      | Location                                 |
| -----: | ----: | ------------: | ------: | ----------- | ---------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `line(int)` | `org.codenarc.source.AbstractSourceCode` |

##### `addViolation(ASTNode, String)` (`org.codenarc.rule.AbstractAstVisitor`)

| Change | Delta |             % | Samples | Callee                       | Location                               |
| -----: | ----: | ------------: | ------: | ---------------------------- | -------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `sourceLineTrimmed(ASTNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `visitConstantExpression(ConstantExpression)` (`org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor`)

| Change | Delta |             % | Samples | Callee                           | Location                           |
| -----: | ----: | ------------: | ------: | -------------------------------- | ---------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.unnecessary.UnnecessaryOverridingMethodAstVisitor`)

| Change | Delta |            % | Samples | Callee                                                           | Location                           |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------------------- | ---------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `super$2$visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.unused.UnusedVariableAstVisitor`)

| Change | Delta |             % | Samples | Callee                                            | Location                                     |
| -----: | ----: | ------------: | ------: | ------------------------------------------------- | -------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `visitMethodCallExpression(MethodCallExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport` |

##### `flexibleCheckForCorrectColumn(ASTNode, String, BlockStatement)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

| Change | Delta |            % | Samples | Callee                                   | Location                           |
| -----: | ----: | -----------: | ------: | ---------------------------------------- | ---------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `visitBlockStatement(BlockStatement)` (`org.codenarc.rule.unnecessary.UnnecessaryIfStatementAstVisitor`)

| Change | Delta |             % | Samples | Callee                                                        | Location                                            |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### `super$3$visitBlockStatement(BlockStatement)` (`org.codenarc.rule.unnecessary.UnnecessaryIfStatementAstVisitor`)

| Change | Delta |             % | Samples | Callee                                | Location                                          |
| -----: | ----: | ------------: | ------: | ------------------------------------- | ------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `visitBlockStatement(BlockStatement)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `doCall(Object, Object)` (`org.codenarc.rule.formatting.TrailingWhitespaceRule$_applyTo_closure1`)

| Change | Delta |             % | Samples | Callee                 | Location                                                             |
| -----: | ----: | ------------: | ------: | ---------------------- | -------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `booleanUnbox(Object)` | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b801184800`)

|  Change | Delta |             % | Samples | Callee                                                    | Location                                             |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | ---------------------------------------------------- |
| removed |   -82 | 100.0% → 0.0% |  82 → 0 | `invokeVirtual(Object, Object, int)`                      | `java.lang.invoke.LambdaForm$DMH.0x000000b801152800` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeInterface(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b8010bd400` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b8017c2000`)

|  Change | Delta |             % | Samples | Callee                             | Location                                         |
| ------: | ----: | ------------: | ------: | ---------------------------------- | ------------------------------------------------ |
| removed |   -57 | 100.0% → 0.0% |  57 → 0 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b8012d0c00`)

|  Change | Delta |             % | Samples | Callee                                                     | Location                                            |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------- | --------------------------------------------------- |
| removed |   -51 | 100.0% → 0.0% |  51 → 0 | `reinvoke(Object, Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000b80118d000` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `reinvoke(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b8012ca400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b801115400`)

| Change | Delta |              % |   Samples | Callee                                                                                      | Location                                             |
| -----: | ----: | -------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| -17.1% |   -41 | 99.6% → 100.0% | 240 → 199 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b8010b2800` |
| -28.6% |    -2 |    2.9% → 2.5% |     7 → 5 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000b801114c00`  |
|    new |    +1 |    0.0% → 0.5% |     0 → 1 | `invokeStatic(Object, int)`                                                                 | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |              % |   Samples | Callee                           | Location                                            |
| -----: | ----: | -------------: | --------: | -------------------------------- | --------------------------------------------------- |
| -17.2% |   -41 | 99.6% → 100.0% | 239 → 198 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b801115400` |

##### `guardWithCatch(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b801117800`)

| Change | Delta |             % | Samples | Callee                                    | Location                                             |
| -----: | ----: | ------------: | ------: | ----------------------------------------- | ---------------------------------------------------- |
| -98.8% |   -80 |  32.7% → 0.5% |  81 → 1 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000b801184800`  |
|    new |   +75 |  0.0% → 36.1% |  0 → 75 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000b8012d8000`  |
| -27.0% |   -24 | 35.9% → 31.3% | 89 → 65 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b8010bd000` |
| -30.8% |   -12 | 15.7% → 13.0% | 39 → 27 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000b8012c5c00`  |
| -10.4% |    -8 | 31.0% → 33.2% | 77 → 69 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000b801140c00`  |

##### `guard(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b801118400`)

|  Change | Delta |             % |   Samples | Callee                             | Location                                            |
| ------: | ----: | ------------: | --------: | ---------------------------------- | --------------------------------------------------- |
|  -21.3% |   -34 | 64.8% → 60.9% | 160 → 126 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b801118000` |
|  -12.0% |   -16 | 53.8% → 56.5% | 133 → 117 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |    -1 |   0.4% → 0.0% |     1 → 0 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000b801117c00` |

##### `reinvoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b801118000`)

|  Change | Delta |             % |   Samples | Callee                                   | Location                                            |
| ------: | ----: | ------------: | --------: | ---------------------------------------- | --------------------------------------------------- |
| removed |   -61 |  35.1% → 0.0% |    61 → 0 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000b8013dd400` |
|     new |   +57 |  0.0% → 40.7% |    0 → 57 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000b8013dc000` |
|  -24.4% |   -39 | 92.0% → 86.4% | 160 → 121 | `guard(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000b801118400` |
|  -21.6% |   -35 | 93.1% → 90.7% | 162 → 127 | `guardWithCatch(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b801117800` |
| +100.0% |    +2 |   1.1% → 2.9% |     2 → 4 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000b801115400` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b801141000`)

| Change | Delta |             % | Samples | Callee                             | Location                                            |
| -----: | ----: | ------------: | ------: | ---------------------------------- | --------------------------------------------------- |
| -23.9% |   -22 | 80.0% → 86.4% | 92 → 70 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b801118000` |
| -52.2% |   -12 | 20.0% → 13.6% | 23 → 11 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|  Change | Delta |             % | Samples | Callee                      | Location                                              |
| ------: | ----: | ------------: | ------: | --------------------------- | ----------------------------------------------------- |
|  -25.0% |   -18 | 77.4% → 81.8% | 72 → 54 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`            |
|  -57.1% |    -4 |   7.5% → 4.5% |   7 → 3 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`      |
| removed |    -2 |   2.2% → 0.0% |   2 → 0 | `applyTo(SourceCode, List)` | `org.codenarc.rule.imports.DuplicateImportRule`       |
|     new |    +2 |   0.0% → 3.0% |   0 → 2 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.TrailingWhitespaceRule` |
|  -50.0% |    -1 |   2.2% → 1.5% |   2 → 1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.BracesForClassRule`     |

##### `invoke(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b80144c000`)

| Change | Delta |      % | Samples | Callee                                                  | Location                                             |
| -----: | ----: | -----: | ------: | ------------------------------------------------------- | ---------------------------------------------------- |
| -87.1% |   -27 | 100.0% |  31 → 4 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b80118e800` |

##### `invokeInterface(Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000b8010bd000`)

| Change | Delta |      % | Samples | Callee                | Location                         |
| -----: | ----: | -----: | ------: | --------------------- | -------------------------------- |
| -28.6% |   -26 | 100.0% | 91 → 65 | `applyTo(SourceCode)` | `org.codenarc.rule.AbstractRule` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000b8010b2800`)

| Change | Delta |             % |   Samples | Callee                                                                                           | Location                                        |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
|  -9.1% |   -25 |        100.0% | 276 → 251 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|  +7.1% |    +8 | 40.9% → 48.2% | 113 → 121 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b801787c00`)

|  Change | Delta |             % | Samples | Callee                                     | Location                                         |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | ------------------------------------------------ |
| removed |   -26 | 100.0% → 0.0% |  26 → 0 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `delegate(Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |             % | Samples | Callee                   | Location                                            |
| -----: | ----: | ------------: | ------: | ------------------------ | --------------------------------------------------- |
| -29.5% |   -18 | 45.5% → 39.1% | 61 → 43 | `guard(Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x000000b801104000` |
| -30.4% |    -7 | 17.2% → 14.5% | 23 → 16 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b801105400` |
|  -1.8% |    -1 | 41.8% → 50.0% | 56 → 55 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b8010bc000` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change | Delta |              % |   Samples | Callee                                                  | Location                                        |
| -----: | ----: | -------------: | --------: | ------------------------------------------------------- | ----------------------------------------------- |
|  -8.0% |   -22 | 99.6% → 100.0% | 276 → 254 | `invokeExact_MT(Object, Object, Object)`                | `java.lang.invoke.Invokers$Holder`              |
| -20.0% |    -7 |  12.6% → 11.0% |   35 → 28 | `doWithCallSite(MutableCallSite, Object[], BiFunction)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `invoke(Object, Object[])` (`org.codehaus.groovy.reflection.CachedMethod`)

| Change | Delta |      % |   Samples | Callee                     | Location                   |
| -----: | ----: | -----: | --------: | -------------------------- | -------------------------- |
| -12.5% |   -23 | 100.0% | 184 → 161 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `doMethodInvoke(Object, Object[])` (`groovy.lang.MetaMethod`)

|  Change | Delta |             % |   Samples | Callee                               | Location                                                      |
| ------: | ----: | ------------: | --------: | ------------------------------------ | ------------------------------------------------------------- |
|  -12.8% |   -23 | 99.4% → 98.7% | 179 → 156 | `invoke(Object, Object[])`           | `org.codehaus.groovy.reflection.CachedMethod`                 |
|  +50.0% |    +1 |   1.1% → 1.9% |     2 → 3 | `invoke(Object, Object[])`           | `org.codehaus.groovy.runtime.dgmimpl.NumberNumberDiv`         |
| removed |    -1 |   0.6% → 0.0% |     1 → 0 | `coerceArgumentsToClasses(Object[])` | `org.codehaus.groovy.reflection.ParameterTypes`               |
|     new |    +1 |   0.0% → 0.6% |     0 → 1 | `coerceArgument(Object)`             | `org.codehaus.groovy.reflection.stdclasses.NumberCachedClass` |

##### `invokeMethod(Object, String, Object[])` (`groovy.lang.MetaClassImpl`)

| Change | Delta |             % |   Samples | Callee                                                            | Location                                                 |
| -----: | ----: | ------------: | --------: | ----------------------------------------------------------------- | -------------------------------------------------------- |
| -14.2% |   -22 | 99.4% → 99.3% | 155 → 133 | `invokeMethod(Class, Object, String, Object[], boolean, boolean)` | `org.codehaus.groovy.runtime.metaclass.ClosureMetaClass` |
| -25.0% |    -1 |   2.6% → 2.2% |     4 → 3 | `invokeMethod(Class, Object, String, Object[], boolean, boolean)` | `groovy.lang.MetaClassImpl`                              |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|  Change | Delta |             % | Samples | Callee                           | Location                                            |
| ------: | ----: | ------------: | ------: | -------------------------------- | --------------------------------------------------- |
|  -20.2% |   -18 | 58.6% → 53.8% | 89 → 71 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b8013d2400` |
| +700.0% |    +7 |   0.7% → 6.1% |   1 → 8 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b80138c000` |
|  -87.5% |    -7 |   5.3% → 0.8% |   8 → 1 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b8014e1000` |
| +150.0% |    +3 |   1.3% → 3.8% |   2 → 5 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b801609800` |
| removed |    -3 |   2.0% → 0.0% |   3 → 0 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b8018bec00` |

##### `visitMethods(GroovyClassVisitor)` (`org.codehaus.groovy.ast.ClassNode`)

| Change | Delta |      % | Samples | Callee                    | Location                               |
| -----: | ----: | -----: | ------: | ------------------------- | -------------------------------------- |
| -35.7% |   -20 | 100.0% | 56 → 36 | `visitMethod(MethodNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|  Change | Delta |             % | Samples | Callee                            | Location                                                                    |
| ------: | ----: | ------------: | ------: | --------------------------------- | --------------------------------------------------------------------------- |
|  -33.3% |   -16 | 85.7% → 88.9% | 48 → 32 | `visitMethod(MethodNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
| removed |    -3 |   5.4% → 0.0% |   3 → 0 | `visitMethodComplete(MethodNode)` | `org.codenarc.rule.convention.NoFloatAstVisitor`                            |
| removed |    -1 |   1.8% → 0.0% |   1 → 0 | `visitMethodComplete(MethodNode)` | `org.codenarc.rule.convention.StaticMethodsBeforeInstanceMethodsAstVisitor` |
| removed |    -1 |   1.8% → 0.0% |   1 → 0 | `visitMethodComplete(MethodNode)` | `org.codenarc.rule.convention.NoDoubleAstVisitor`                           |
| removed |    -1 |   1.8% → 0.0% |   1 → 0 | `visitMethodEx(MethodNode)`       | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`              |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

| Change | Delta |             % | Samples | Callee                                   | Location                           |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | ---------------------------------- |
| -23.1% |   -18 | 81.3% → 76.9% | 78 → 60 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|  Change | Delta |             % | Samples | Callee                  | Location                                                |
| ------: | ----: | ------------: | ------: | ----------------------- | ------------------------------------------------------- |
|  -25.8% |   -17 | 88.0% → 84.5% | 66 → 49 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                  |
|  -66.7% |    -2 |   4.0% → 1.7% |   3 → 1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |
| +200.0% |    +2 |   1.3% → 5.2% |   1 → 3 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor`               |
|  -20.0% |    -1 |   6.7% → 6.9% |   5 → 4 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`              |
|     new |    +1 |   0.0% → 1.7% |   0 → 1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractFieldVisitor`                |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|  Change | Delta |             % | Samples | Callee                    | Location                                                            |
| ------: | ----: | ------------: | ------: | ------------------------- | ------------------------------------------------------------------- |
|  -30.4% |   -17 | 78.9% → 72.2% | 56 → 39 | `visitClass(ClassNode)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
| removed |    -2 |   2.8% → 0.0% |   2 → 0 | `visitClassEx(ClassNode)` | `org.codenarc.rule.groovyism.ConfusingMultipleReturnsAstVisitor`    |
| +200.0% |    +2 |   1.4% → 5.6% |   1 → 3 | `visitClassEx(ClassNode)` | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `visitClassEx(ClassNode)` | `org.codenarc.rule.design.PrivateFieldCouldBeFinalAstVisitor`       |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `visitClassEx(ClassNode)` | `org.codenarc.rule.formatting.SpaceAfterClosingBraceAstVisitor`     |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

| Change | Delta |             % | Samples | Callee                                           | Location                           |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ | ---------------------------------- |
| -17.3% |   -13 | 90.4% → 92.5% | 75 → 62 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
| -66.7% |    -4 |   7.2% → 3.0% |   6 → 2 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |
|    new |    +1 |   0.0% → 1.5% |   0 → 1 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

| Change | Delta |      % | Samples | Callee                           | Location                           |
| -----: | ----: | -----: | ------: | -------------------------------- | ---------------------------------- |
| -23.2% |   -13 | 100.0% | 56 → 43 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

| Change | Delta |              % | Samples | Callee        | Location                                 |
| -----: | ----: | -------------: | ------: | ------------- | ---------------------------------------- |
| -25.9% |   -14 | 100.0% → 97.6% | 54 → 40 | `getAst()`    | `org.codenarc.source.AbstractSourceCode` |
|    new |    +1 |    0.0% → 2.4% |   0 → 1 | `putAll(Map)` | `java.util.concurrent.ConcurrentHashMap` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

| Change | Delta |      % | Samples | Callee   | Location                                    |
| -----: | ----: | -----: | ------: | -------- | ------------------------------------------- |
| -23.5% |   -12 | 100.0% | 51 → 39 | `init()` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `getText()` (`org.codenarc.source.SourceFile`)

| Change | Delta |      % | Samples | Callee                           | Location                           |
| -----: | ----: | -----: | ------: | -------------------------------- | ---------------------------------- |
| -66.7% |    -4 | 100.0% |   6 → 2 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.formatting.BracesForMethodAstVisitor`)

|  Change | Delta |            % | Samples | Callee                                   | Location                           |
| ------: | ----: | -----------: | ------: | ---------------------------------------- | ---------------------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `visitMethodComplete(MethodNode)` (`org.codenarc.rule.convention.NoFloatAstVisitor`)

|  Change | Delta |            % | Samples | Callee                                           | Location                           |
| ------: | ----: | -----------: | ------: | ------------------------------------------------ | ---------------------------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `eachImportLine(SourceCode, Closure)` (`org.codenarc.rule.imports.AbstractImportRule`)

|  Change | Delta |             % | Samples | Callee                                           | Location                           |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | ---------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.unnecessary.UnnecessaryDefInMethodDeclarationAstVisitor`)

|  Change | Delta |            % | Samples | Callee                                           | Location                                            |
| ------: | ----: | -----------: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                  |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `compareNotEqual(Object, Object)`                | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractSharedAstVisitorRule`)

|  Change | Delta |             % | Samples | Callee                                 | Location                                          |
| ------: | ----: | ------------: | ------: | -------------------------------------- | ------------------------------------------------- |
|  -40.0% |    -2 | 71.4% → 75.0% |   5 → 3 | `applyVisitor(AstVisitor, SourceCode)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`  |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `getAstVisitor(SourceCode)`            | `org.codenarc.rule.unused.UnusedPrivateFieldRule` |

##### `doCall(Object)` (`org.codenarc.plugin.disablerules.DisableRulesInCommentsPlugin$_processViolationsForFile_closure1`)

|  Change | Delta |             % | Samples | Callee                                           | Location                           |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | ---------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `matchesAndNotWithinString(String, String)` (`org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`)

| Change | Delta |      % | Samples | Callee                           | Location                                            |
| -----: | ----: | -----: | ------: | -------------------------------- | --------------------------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `linkToCallSite(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b801134800` |

##### `hasSpaceAfterOpeningParenthesis(String)` (`org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`)

|  Change | Delta |             % | Samples | Callee                                           | Location                           |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | ---------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `processSourceLine(String, int)` (`org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`)

|  Change | Delta |            % | Samples | Callee                           | Location                                            |
| ------: | ----: | -----------: | ------: | -------------------------------- | --------------------------------------------------- |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b801134800` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractMethodCallExpressionVisitor`)

|  Change | Delta |            % | Samples | Callee                                            | Location                                         |
| ------: | ----: | -----------: | ------: | ------------------------------------------------- | ------------------------------------------------ |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.basic.ClassForNameAstVisitor` |

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

Functions with the largest increase in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

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

Functions with the largest decrease in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

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

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `getSelector(MutableCallSite, Class, String, int, boolean, boolean, boolean, Object[])` (`org.codehaus.groovy.vmplugin.v8.Selector`)

|  Change |       Delta |             % |                Size | Samples | Location                                       |
| ------: | ----------: | ------------: | ------------------: | ------: | ---------------------------------------------- |
|  +62.8% | +16.317 MiB | 22.9% → 26.3% |   26 MiB → 42.3 MiB | 13 → 22 | `org.codehaus.groovy.vmplugin.v8.Selector:141` |
| +133.3% | +15.988 MiB | 10.6% → 17.4% |     12 MiB → 28 MiB |  6 → 14 | `org.codehaus.groovy.vmplugin.v8.Selector:137` |
|  +19.7% | +14.898 MiB | 66.6% → 56.3% | 75.6 MiB → 90.5 MiB | 39 → 44 | `org.codehaus.groovy.vmplugin.v8.Selector:135` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change |       Delta |      % |              Size |   Samples | Location                                            |
| -----: | ----------: | -----: | ----------------: | --------: | --------------------------------------------------- |
|  +5.6% | +33.259 MiB | 100.0% | 591 MiB → 624 MiB | 301 → 307 | `org.codehaus.groovy.vmplugin.v8.IndyInterface:293` |

##### `parameterArray()` (`java.lang.invoke.MethodType`)

| Change |       Delta |      % |              Size | Samples | Location                          |
| -----: | ----------: | -----: | ----------------: | ------: | --------------------------------- |
| +25.2% | +32.479 MiB | 100.0% | 129 MiB → 161 MiB | 66 → 79 | `java.lang.invoke.MethodType:885` |

##### `optimize(Pattern$Node)` (`java.util.regex.Pattern$BnM`)

| Change |       Delta |             % |              Size | Samples | Location                           |
| -----: | ----------: | ------------: | ----------------: | ------: | ---------------------------------- |
| +12.8% | +23.233 MiB | 85.0% → 83.6% | 181 MiB → 205 MiB | 91 → 99 | `java.util.regex.Pattern$BnM:5658` |
| +55.6% |  +9.994 MiB |  8.4% → 11.4% |   18 MiB → 28 MiB |  9 → 13 | `java.util.regex.Pattern$BnM:5659` |
| -14.3% |  -1.999 MiB |   6.6% → 4.9% |   14 MiB → 12 MiB |   7 → 6 | `java.util.regex.Pattern$BnM:5692` |

##### `divideOneWord(int, MutableBigInteger)` (`java.math.MutableBigInteger`)

| Change |      Delta |      % |                Size | Samples | Location                           |
| -----: | ---------: | -----: | ------------------: | ------: | ---------------------------------- |
| +47.9% | +28.32 MiB | 100.0% | 59.1 MiB → 87.4 MiB | 30 → 44 | `java.math.MutableBigInteger:1105` |

##### `matcher(CharSequence)` (`java.util.regex.Pattern`)

| Change |       Delta |      % |                Size | Samples | Location                       |
| -----: | ----------: | -----: | ------------------: | ------: | ------------------------------ |
| +62.4% | +28.176 MiB | 100.0% | 45.1 MiB → 73.3 MiB | 23 → 31 | `java.util.regex.Pattern:1180` |

##### `toBigInteger(int)` (`java.math.MutableBigInteger`)

| Change |       Delta |      % |               Size | Samples | Location                          |
| -----: | ----------: | -----: | -----------------: | ------: | --------------------------------- |
| +31.3% | +25.742 MiB | 100.0% | 82.2 MiB → 108 MiB | 43 → 52 | `java.math.MutableBigInteger:191` |

##### `asSpreader(int, Class, int)` (`java.lang.invoke.MethodHandle`)

|  Change |       Delta |      % |              Size | Samples | Location                             |
| ------: | ----------: | -----: | ----------------: | ------: | ------------------------------------ |
| +114.6% | +25.274 MiB | 100.0% | 22 MiB → 47.3 MiB | 12 → 24 | `java.lang.invoke.MethodHandle:1116` |

##### `<init>()` (`java.math.MutableBigInteger`)

| Change |       Delta |      % |              Size | Samples | Location                          |
| -----: | ----------: | -----: | ----------------: | ------: | --------------------------------- |
| +18.7% | +21.255 MiB | 100.0% | 114 MiB → 135 MiB | 57 → 70 | `java.math.MutableBigInteger:103` |

##### `transform(ATNState, PredictionContext, SemanticContext, boolean, LexerActionExecutor)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfig`)

|  Change |        Delta |             % |              Size |   Samples | Location                                          |
| ------: | -----------: | ------------: | ----------------: | --------: | ------------------------------------------------- |
|  +10.9% |  +25.293 MiB | 90.3% → 92.8% | 232 MiB → 258 MiB | 115 → 133 | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig:232` |
| removed |   -3.998 MiB |   1.6% → 0.0% |       4 MiB → 0 B |     2 → 0 | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig:229` |
|   -4.5% | -968.742 KiB |   8.1% → 7.2% | 20.9 MiB → 20 MiB |   11 → 10 | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig:225` |

##### `stream(Spliterator, boolean)` (`java.util.stream.StreamSupport`)

| Change |      Delta |      % |              Size |   Samples | Location                            |
| -----: | ---------: | -----: | ----------------: | --------: | ----------------------------------- |
|  +6.1% | +17.78 MiB | 100.0% | 290 MiB → 308 MiB | 147 → 157 | `java.util.stream.StreamSupport:69` |

##### `getInvocationType()` (`java.lang.invoke.MemberName`)

|  Change |       Delta |      % |              Size | Samples | Location                          |
| ------: | ----------: | -----: | ----------------: | ------: | --------------------------------- |
| +107.9% | +17.257 MiB | 100.0% | 16 MiB → 33.3 MiB |  8 → 17 | `java.lang.invoke.MemberName:192` |

##### `spliterator(Object[], int, int, int)` (`java.util.Spliterators`)

| Change |       Delta |      % |              Size | Samples | Location                     |
| -----: | ----------: | -----: | ----------------: | ------: | ---------------------------- |
| +10.4% | +17.143 MiB | 100.0% | 164 MiB → 182 MiB | 86 → 92 | `java.util.Spliterators:178` |

##### `<init>()` (`java.util.ArrayDeque`)

| Change |       Delta |      % |                Size | Samples | Location                   |
| -----: | ----------: | -----: | ------------------: | ------: | -------------------------- |
| +74.1% | +16.559 MiB | 100.0% | 22.3 MiB → 38.9 MiB | 11 → 20 | `java.util.ArrayDeque:181` |

##### `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change |       Delta |      % |              Size | Samples | Location                                            |
| -----: | ----------: | -----: | ----------------: | ------: | --------------------------------------------------- |
| +32.0% | +16.479 MiB | 100.0% | 51.5 MiB → 68 MiB | 27 → 33 | `org.codehaus.groovy.vmplugin.v8.IndyInterface:362` |

##### `<init>()` (`org.codenarc.rule.AbstractAstVisitor`)

| Change |      Delta |            % |         Size | Samples | Location                                  |
| -----: | ---------: | -----------: | -----------: | ------: | ----------------------------------------- |
|    new | +9.995 MiB | 0.0% → 62.5% | 0 B → 10 MiB |   0 → 5 | `org.codenarc.rule.AbstractAstVisitor:36` |
|    new | +5.997 MiB | 0.0% → 37.5% |  0 B → 6 MiB |   0 → 3 | `org.codenarc.rule.AbstractAstVisitor:39` |

##### `newSlice(int[], int, boolean)` (`java.util.regex.Pattern`)

| Change |       Delta |             % |              Size | Samples | Location                       |
| -----: | ----------: | ------------: | ----------------: | ------: | ------------------------------ |
| +91.7% | +21.988 MiB | 46.2% → 68.3% |   24 MiB → 46 MiB | 12 → 22 | `java.util.regex.Pattern:3691` |
| -23.9% |  -6.688 MiB | 53.8% → 31.7% | 28 MiB → 21.3 MiB | 14 → 10 | `java.util.regex.Pattern:3708` |

##### `filterSuppressedViolations(Iterable)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

| Change |      Delta |             % |        Size | Samples | Location                                       |
| -----: | ---------: | ------------: | ----------: | ------: | ---------------------------------------------- |
|    new | +7.996 MiB | 0.0% → 100.0% | 0 B → 8 MiB |   0 → 1 | `org.codenarc.analyzer.SuppressionAnalyzer:44` |

##### `markVariableAsReferenced(String, VariableExpression)` (`org.codenarc.rule.unused.UnusedVariableAstVisitor`)

| Change |      Delta |            % |        Size | Samples | Location                                                |
| -----: | ---------: | -----------: | ----------: | ------: | ------------------------------------------------------- |
|    new | +5.996 MiB | 0.0% → 60.0% | 0 B → 6 MiB |   0 → 3 | `org.codenarc.rule.unused.UnusedVariableAstVisitor:158` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

| Change |      Delta |      % |             Size | Samples | Location                                          |
| -----: | ---------: | -----: | ---------------: | ------: | ------------------------------------------------- |
| +66.9% | +5.347 MiB | 100.0% | 8 MiB → 13.3 MiB |   4 → 6 | `org.codenarc.analyzer.AbstractSourceAnalyzer:44` |

##### `getViolationLocationString(Violation, String)` (`org.codenarc.report.TextReportWriter`)

| Change |      Delta |             % |        Size | Samples | Location                                  |
| -----: | ---------: | ------------: | ----------: | ------: | ----------------------------------------- |
|    new | +3.998 MiB | 0.0% → 100.0% | 0 B → 4 MiB |   0 → 2 | `org.codenarc.report.TextReportWriter:97` |

##### `visitConstantExpression(ConstantExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`)

| Change |      Delta |            % |        Size | Samples | Location                                                        |
| -----: | ---------: | -----------: | ----------: | ------: | --------------------------------------------------------------- |
|    new | +1.999 MiB | 0.0% → 50.0% | 0 B → 2 MiB |   0 → 1 | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor:40` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryGetterAstVisitor`)

| Change |      Delta |             % |        Size | Samples | Location                                                       |
| -----: | ---------: | ------------: | ----------: | ------: | -------------------------------------------------------------- |
|    new | +3.998 MiB | 0.0% → 100.0% | 0 B → 4 MiB |   0 → 2 | `org.codenarc.rule.unnecessary.UnnecessaryGetterAstVisitor:58` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|  Change |      Delta |      % |          Size | Samples | Location                             |
| ------: | ---------: | -----: | ------------: | ------: | ------------------------------------ |
| +100.0% | +1.999 MiB | 100.0% | 2 MiB → 4 MiB |   1 → 2 | `org.codenarc.rule.AbstractRule:141` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.design.LocaleSetDefaultAstVisitor`)

| Change |      Delta |             % |        Size | Samples | Location                                                 |
| -----: | ---------: | ------------: | ----------: | ------: | -------------------------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `org.codenarc.rule.design.LocaleSetDefaultAstVisitor:41` |

##### `convertStringWithWildcardsToRegex(String)` (`org.codenarc.util.WildcardPattern`)

| Change |      Delta |             % |        Size | Samples | Location                               |
| -----: | ---------: | ------------: | ----------: | ------: | -------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `org.codenarc.util.WildcardPattern:99` |

##### `doCall(List)` (`org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1`)

| Change |      Delta |             % |        Size | Samples | Location                                                                        |
| -----: | ---------: | ------------: | ----------: | ------: | ------------------------------------------------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1:141` |

##### `checkForCorrectColumn(ASTNode, String, int)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

| Change |      Delta |             % |        Size | Samples | Location                                                 |
| -----: | ---------: | ------------: | ----------: | ------: | -------------------------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `org.codenarc.rule.formatting.IndentationAstVisitor:351` |

##### `checkStatementIndent(Statement, BlockStatement)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

| Change |      Delta |             % |        Size | Samples | Location                                                 |
| -----: | ---------: | ------------: | ----------: | ------: | -------------------------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `org.codenarc.rule.formatting.IndentationAstVisitor:305` |

##### `visitClassEx(ClassNode)` (`org.codenarc.rule.convention.CompileStaticlVisitor`)

| Change |      Delta |             % |        Size | Samples | Location                                                |
| -----: | ---------: | ------------: | ----------: | ------: | ------------------------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `org.codenarc.rule.convention.CompileStaticlVisitor:62` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.unnecessary.UnnecessarySelfAssignmentAstVisitor`)

| Change |      Delta |             % |        Size | Samples | Location                                                               |
| -----: | ---------: | ------------: | ----------: | ------: | ---------------------------------------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `org.codenarc.rule.unnecessary.UnnecessarySelfAssignmentAstVisitor:53` |

##### `shouldApplyThisRuleTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

| Change |      Delta |             % |        Size | Samples | Location                             |
| -----: | ---------: | ------------: | ----------: | ------: | ------------------------------------ |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `org.codenarc.rule.AbstractRule:253` |

##### `visitMethodEx(MethodNode)` (`org.codenarc.rule.convention.ImplicitReturnStatementAstVisitor`)

| Change |      Delta |             % |        Size | Samples | Location                                                            |
| -----: | ---------: | ------------: | ----------: | ------: | ------------------------------------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `org.codenarc.rule.convention.ImplicitReturnStatementAstVisitor:61` |

##### `visitClosureExpression(ClosureExpression)` (`org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`)

| Change |      Delta |             % |        Size | Samples | Location                                                    |
| -----: | ---------: | ------------: | ----------: | ------: | ----------------------------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor:61` |

##### `<init>()` (`org.gmetrics.metric.AbstractAstVisitor`)

| Change |      Delta |             % |        Size | Samples | Location                                    |
| -----: | ---------: | ------------: | ----------: | ------: | ------------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `org.gmetrics.metric.AbstractAstVisitor:33` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

| Change |      Delta |             % |        Size | Samples | Location                                       |
| -----: | ---------: | ------------: | ----------: | ------: | ---------------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `org.codenarc.rule.AbstractAstVisitorRule:102` |

##### `makeBlockInliningWrapper(MethodHandle)` (`java.lang.invoke.MethodHandleImpl`)

| Change |       Delta |      % |              Size |   Samples | Location                                |
| -----: | ----------: | -----: | ----------------: | --------: | --------------------------------------- |
| -16.4% | -77.238 MiB | 100.0% | 471 MiB → 394 MiB | 234 → 200 | `java.lang.invoke.MethodHandleImpl:667` |

##### `insertParameterTypes(int, Class[])` (`java.lang.invoke.MethodType`)

| Change |       Delta |      % |              Size |  Samples | Location                          |
| -----: | ----------: | -----: | ----------------: | -------: | --------------------------------- |
| -23.6% | -65.232 MiB | 100.0% | 277 MiB → 212 MiB | 136 → 95 | `java.lang.invoke.MethodType:500` |

##### `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

| Change |       Delta |             % |                Size | Samples | Location                                |
| -----: | ----------: | ------------: | ------------------: | ------: | --------------------------------------- |
| -30.1% | -24.931 MiB | 74.0% → 69.7% |   82.9 MiB → 58 MiB | 42 → 28 | `java.lang.invoke.MethodHandleImpl:298` |
| -13.4% |  -3.904 MiB | 26.0% → 30.3% | 29.2 MiB → 25.3 MiB | 16 → 13 | `java.lang.invoke.MethodHandleImpl:321` |

##### `lambda$setGuards$1(int)` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

| Change |       Delta |      % |              Size | Samples | Location                                                      |
| -----: | ----------: | -----: | ----------------: | ------: | ------------------------------------------------------------- |
| -57.7% | -27.133 MiB | 100.0% | 47 MiB → 19.9 MiB | 24 → 11 | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector:960` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change |       Delta |      % |              Size |  Samples | Location                                  |
| -----: | ----------: | -----: | ----------------: | -------: | ----------------------------------------- |
| -13.1% | -26.801 MiB | 100.0% | 204 MiB → 178 MiB | 100 → 86 | `java.lang.invoke.DirectMethodHandle:501` |

##### `make(byte, Class, MemberName, Class)` (`java.lang.invoke.DirectMethodHandle`)

| Change |       Delta |             % |                Size | Samples | Location                                  |
| -----: | ----------: | ------------: | ------------------: | ------: | ----------------------------------------- |
| -59.6% | -16.692 MiB | 36.6% → 21.8% |   28 MiB → 11.3 MiB |  13 → 6 | `java.lang.invoke.DirectMethodHandle:82`  |
| -16.6% |  -4.645 MiB | 36.6% → 45.0% |   28 MiB → 23.3 MiB | 14 → 11 | `java.lang.invoke.DirectMethodHandle:103` |
| -15.5% |  -3.162 MiB | 26.7% → 33.3% | 20.4 MiB → 17.3 MiB |  10 → 9 | `java.lang.invoke.DirectMethodHandle:107` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

| Change |       Delta |      % |              Size |   Samples | Location                     |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------------- |
|  -6.2% | -23.356 MiB | 100.0% | 376 MiB → 352 MiB | 191 → 181 | `java.lang.reflect.Array:78` |

##### `makeImpl(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

| Change |       Delta |      % |              Size |   Samples | Location                          |
| -----: | ----------: | -----: | ----------------: | --------: | --------------------------------- |
|  -2.8% | -22.196 MiB | 100.0% | 796 MiB → 773 MiB | 374 → 373 | `java.lang.invoke.MethodType:400` |

##### `compile()` (`java.util.regex.Pattern`)

|  Change |       Delta |             % |                Size | Samples | Location                       |
| ------: | ----------: | ------------: | ------------------: | ------: | ------------------------------ |
|  -41.3% | -24.323 MiB | 28.4% → 18.6% |   59 MiB → 34.6 MiB | 31 → 18 | `java.util.regex.Pattern:1915` |
| +168.4% | +12.317 MiB |  3.5% → 10.5% | 7.32 MiB → 19.6 MiB |  5 → 11 | `java.util.regex.Pattern:1937` |
|  -27.0% | -10.368 MiB | 18.4% → 15.0% |   38.4 MiB → 28 MiB | 20 → 14 | `java.util.regex.Pattern:1935` |
|  +50.0% |  +1.998 MiB |   1.9% → 3.2% |       4 MiB → 6 MiB |   2 → 3 | `java.util.regex.Pattern:1962` |
|   -2.0% |  -1.977 MiB | 46.8% → 51.2% | 97.3 MiB → 95.3 MiB |      48 | `java.util.regex.Pattern:1934` |

##### `createEntryListArray(int)` (`groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap`)

| Change |       Delta |      % |              Size | Samples | Location                                                |
| -----: | ----------: | -----: | ----------------: | ------: | ------------------------------------------------------- |
| -25.5% | -21.446 MiB | 100.0% | 84 MiB → 62.5 MiB | 42 → 29 | `groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap:73` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |       Delta |      % |              Size |   Samples | Location                 |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------ |
|  -8.0% | -20.698 MiB | 100.0% | 259 MiB → 239 MiB | 130 → 122 | `java.util.HashMap:1909` |

##### `map(Function)` (`java.util.stream.ReferencePipeline`)

| Change |       Delta |      % |              Size | Samples | Location                                 |
| -----: | ----------: | -----: | ----------------: | ------: | ---------------------------------------- |
| -21.1% | -20.645 MiB | 100.0% | 98 MiB → 77.3 MiB | 48 → 40 | `java.util.stream.ReferencePipeline:190` |

##### `makeGuardWithTest(MethodHandle, MethodHandle, MethodHandle)` (`java.lang.invoke.MethodHandleImpl`)

| Change |       Delta |      % |              Size | Samples | Location                                |
| -----: | ----------: | -----: | ----------------: | ------: | --------------------------------------- |
| -16.5% | -20.472 MiB | 100.0% | 124 MiB → 104 MiB | 62 → 53 | `java.lang.invoke.MethodHandleImpl:631` |

##### `valueOf(long)` (`java.lang.Long`)

| Change |       Delta |      % |              Size | Samples | Location              |
| -----: | ----------: | -----: | ----------------: | ------: | --------------------- |
| -12.3% | -18.032 MiB | 100.0% | 146 MiB → 128 MiB | 77 → 66 | `java.lang.Long:1207` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |       Delta |      % |              Size | Samples | Location                  |
| -----: | ----------: | -----: | ----------------: | ------: | ------------------------- |
| -34.5% | -16.919 MiB | 100.0% | 49 MiB → 32.1 MiB | 26 → 19 | `java.util.ArrayList:239` |

##### `of(byte, int, int, int)` (`java.lang.invoke.LambdaFormEditor$TransformKey`)

| Change |      Delta |      % |                Size | Samples | Location                                             |
| -----: | ---------: | -----: | ------------------: | ------: | ---------------------------------------------------- |
| -32.1% | -16.13 MiB | 100.0% | 50.2 MiB → 34.1 MiB | 25 → 18 | `java.lang.invoke.LambdaFormEditor$TransformKey:189` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |       Delta |      % |                Size | Samples | Location                |
| -----: | ----------: | -----: | ------------------: | ------: | ----------------------- |
| -20.3% | -15.058 MiB | 100.0% | 74.1 MiB → 59.1 MiB | 50 → 42 | `java.util.Arrays:3863` |

##### `getParameterTypes()` (`java.lang.reflect.Method`)

| Change |       Delta |      % |                Size | Samples | Location                       |
| -----: | ----------: | -----: | ------------------: | ------: | ------------------------------ |
| -31.4% | -11.977 MiB | 100.0% | 38.2 MiB → 26.2 MiB | 18 → 14 | `java.lang.reflect.Method:318` |

##### `toString()` (`java.lang.StringBuilder`)

| Change |       Delta |      % |                Size | Samples | Location                      |
| -----: | ----------: | -----: | ------------------: | ------: | ----------------------------- |
| -56.2% | -11.448 MiB | 100.0% | 20.4 MiB → 8.92 MiB |  11 → 6 | `java.lang.StringBuilder:475` |

##### `writeViolation(Writer, Violation, String)` (`org.codenarc.report.TextReportWriter`)

|  Change |      Delta |             % |          Size | Samples | Location                                  |
| ------: | ---------: | ------------: | ------------: | ------: | ----------------------------------------- |
|  -66.7% | -3.997 MiB | 60.0% → 33.3% | 6 MiB → 2 MiB |   3 → 1 | `org.codenarc.report.TextReportWriter:90` |
| removed | -1.999 MiB |  20.0% → 0.0% |   2 MiB → 0 B |   1 → 0 | `org.codenarc.report.TextReportWriter:92` |
| +100.0% | +1.998 MiB | 20.0% → 66.7% | 2 MiB → 4 MiB |   1 → 2 | `org.codenarc.report.TextReportWriter:91` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`)

|  Change |      Delta |            % |        Size | Samples | Location                                                      |
| ------: | ---------: | -----------: | ----------: | ------: | ------------------------------------------------------------- |
| removed | -1.999 MiB | 50.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor:60` |
| removed | -1.998 MiB | 50.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor:56` |

##### `doCall(Object)` (`org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3`)

| Change |      Delta |      % |          Size | Samples | Location                                                                            |
| -----: | ---------: | -----: | ------------: | ------: | ----------------------------------------------------------------------------------- |
| -50.0% | -1.999 MiB | 100.0% | 4 MiB → 2 MiB |   2 → 1 | `org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3:112` |

##### `visitVariableExpression(VariableExpression)` (`org.codenarc.rule.ClassReferenceAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Location                                         |
| ------: | ---------: | ------------: | ----------: | ------: | ------------------------------------------------ |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `org.codenarc.rule.ClassReferenceAstVisitor:100` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.basic.ParameterAssignmentInFilterClosureAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Location                                                                  |
| ------: | ---------: | ------------: | ----------: | ------: | ------------------------------------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `org.codenarc.rule.basic.ParameterAssignmentInFilterClosureAstVisitor:58` |

##### `visitVariableExpression(VariableExpression)` (`org.codenarc.rule.FieldReferenceAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Location                                        |
| ------: | ---------: | ------------: | ----------: | ------: | ----------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `org.codenarc.rule.FieldReferenceAstVisitor:51` |

##### `addChildrenToAbcVector(Object)` (`org.gmetrics.metric.abc.result.AggregateAbcMetricResult`)

|  Change |      Delta |             % |        Size | Samples | Location                                                      |
| ------: | ---------: | ------------: | ----------: | ------: | ------------------------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `org.gmetrics.metric.abc.result.AggregateAbcMetricResult:109` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.gmetrics.metric.abc.AbcAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Location                                   |
| ------: | ---------: | ------------: | ----------: | ------: | ------------------------------------------ |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `org.gmetrics.metric.abc.AbcAstVisitor:70` |

##### `setDisabledRulesByLine(int)` (`org.codenarc.plugin.disablerules.LookupTable`)

|  Change |      Delta |             % |        Size | Samples | Location                                          |
| ------: | ---------: | ------------: | ----------: | ------: | ------------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `org.codenarc.plugin.disablerules.LookupTable:93` |

##### `visitMethodEx(MethodNode)` (`org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Location                                                          |
| ------: | ---------: | ------------: | ----------: | ------: | ----------------------------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor:71` |

##### `visitConstantExpression(ConstantExpression)` (`org.codenarc.rule.convention.LongLiteralWithLowerCaseLAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Location                                                              |
| ------: | ---------: | ------------: | ----------: | ------: | --------------------------------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `org.codenarc.rule.convention.LongLiteralWithLowerCaseLAstVisitor:42` |

##### `recordMethodColumnAndSourceLineForClosureBlocks(MethodCallExpression)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Location                                                 |
| ------: | ---------: | ------------: | ----------: | ------: | -------------------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `org.codenarc.rule.formatting.IndentationAstVisitor:218` |

##### `visitMethodEx(MethodNode)` (`org.codenarc.rule.design.AssignmentToStaticFieldFromInstanceMethodAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Location                                                                          |
| ------: | ---------: | ------------: | ----------: | ------: | --------------------------------------------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `org.codenarc.rule.design.AssignmentToStaticFieldFromInstanceMethodAstVisitor:54` |

##### `<init>(MethodNode)` (`org.gmetrics.result.MethodKey`)

|  Change |      Delta |             % |        Size | Samples | Location                           |
| ------: | ---------: | ------------: | ----------: | ------: | ---------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `org.gmetrics.result.MethodKey:39` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryCallForLastElementAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Location                                                                   |
| ------: | ---------: | ------------: | ----------: | ------: | -------------------------------------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `org.codenarc.rule.unnecessary.UnnecessaryCallForLastElementAstVisitor:63` |

##### `calculate(MethodNode, SourceCode)` (`org.gmetrics.metric.abc.AbcMetric`)

|  Change |      Delta |             % |        Size | Samples | Location                               |
| ------: | ---------: | ------------: | ----------: | ------: | -------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `org.gmetrics.metric.abc.AbcMetric:65` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.unnecessary.UnnecessaryDefInMethodDeclarationAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Location                                                                       |
| ------: | ---------: | ------------: | ----------: | ------: | ------------------------------------------------------------------------------ |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `org.codenarc.rule.unnecessary.UnnecessaryDefInMethodDeclarationAstVisitor:74` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryBooleanExpressionAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Location                                                                  |
| ------: | ---------: | ------------: | ----------: | ------: | ------------------------------------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `org.codenarc.rule.unnecessary.UnnecessaryBooleanExpressionAstVisitor:71` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `make(MethodType, LambdaForm, Object, Object, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LLLL`)

| Change |        Delta |      % |              Size |   Samples | Caller                                                                 | Location                                     |
| -----: | -----------: | -----: | ----------------: | --------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| +47.4% | +110.409 MiB | 100.0% | 233 MiB → 343 MiB | 120 → 124 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `getSelector(MutableCallSite, Class, String, int, boolean, boolean, boolean, Object[])` (`org.codehaus.groovy.vmplugin.v8.Selector`)

| Change |       Delta |      % |              Size | Samples | Caller                                                                                       | Location                                        |
| -----: | ----------: | -----: | ----------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| +41.6% | +47.204 MiB | 100.0% | 114 MiB → 161 MiB | 58 → 80 | `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `make(MethodType, LambdaForm, Object, Object, Object, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LLLLL`)

| Change |       Delta |      % |              Size | Samples | Caller                                                                         | Location                                     |
| -----: | ----------: | -----: | ----------------: | ------: | ------------------------------------------------------------------------------ | -------------------------------------------- |
| +31.7% | +44.563 MiB | 100.0% | 141 MiB → 185 MiB | 70 → 92 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `make(MethodType, LambdaForm, Object, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LLL`)

| Change |       Delta |      % |              Size | Samples | Caller                                                         | Location                                     |
| -----: | ----------: | -----: | ----------------: | ------: | -------------------------------------------------------------- | -------------------------------------------- |
| +37.7% | +42.678 MiB | 100.0% | 113 MiB → 156 MiB | 57 → 77 | `invokeStatic(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change |       Delta |      % |              Size |   Samples | Caller                                                                                      | Location                                             |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|  +5.6% | +33.259 MiB | 100.0% | 591 MiB → 624 MiB | 301 → 307 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b8010b2800` |

##### `parameterArray()` (`java.lang.invoke.MethodType`)

| Change |        Delta |             % |                Size | Samples | Caller                      | Location                                                  |
| -----: | -----------: | ------------: | ------------------: | ------: | --------------------------- | --------------------------------------------------------- |
| +60.2% |  +20.751 MiB | 26.8% → 34.3% | 34.5 MiB → 55.2 MiB | 18 → 28 | `setGuards(Object)`         | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| +29.7% |    +9.92 MiB | 26.0% → 26.9% | 33.4 MiB → 43.3 MiB | 17 → 20 | `correctWrapping()`         | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| +31.3% |   +8.573 MiB | 21.3% → 22.3% |   27.4 MiB → 36 MiB | 14 → 18 | `correctCoerce()`           | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| -20.8% |   -6.116 MiB | 22.9% → 14.5% | 29.4 MiB → 23.3 MiB | 15 → 11 | `correctParameterLength()`  | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| -16.3% | -665.531 KiB |   3.1% → 2.1% |    4 MiB → 3.35 MiB |       2 | `removeWrapper(MethodType)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `optimize(Pattern$Node)` (`java.util.regex.Pattern$BnM`)

| Change |       Delta |      % |              Size |   Samples | Caller      | Location                  |
| -----: | ----------: | -----: | ----------------: | --------: | ----------- | ------------------------- |
| +14.6% | +31.229 MiB | 100.0% | 213 MiB → 245 MiB | 107 → 118 | `compile()` | `java.util.regex.Pattern` |

##### `divideOneWord(int, MutableBigInteger)` (`java.math.MutableBigInteger`)

| Change |       Delta |              % |                Size | Samples | Caller                                                       | Location                      |
| -----: | ----------: | -------------: | ------------------: | ------: | ------------------------------------------------------------ | ----------------------------- |
| +44.5% | +26.321 MiB | 100.0% → 97.7% | 59.1 MiB → 85.4 MiB | 30 → 43 | `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)` | `java.math.MutableBigInteger` |
|    new |  +1.999 MiB |    0.0% → 2.3% |         0 B → 2 MiB |   0 → 1 | `divide(long, MutableBigInteger)`                            | `java.math.MutableBigInteger` |

##### `matcher(CharSequence)` (`java.util.regex.Pattern`)

| Change |      Delta |             % |                Size | Samples | Caller                          | Location                                    |
| -----: | ---------: | ------------: | ------------------: | ------: | ------------------------------- | ------------------------------------------- |
| +95.4% | +20.18 MiB | 46.8% → 56.4% | 21.1 MiB → 41.3 MiB | 11 → 16 | `findRegex(Object, Object)`     | `org.codehaus.groovy.runtime.InvokerHelper` |
| +55.6% | +9.994 MiB | 39.9% → 38.2% |     18 MiB → 28 MiB |  9 → 13 | `matches(String, CharSequence)` | `java.util.regex.Pattern`                   |
| -33.3% | -1.999 MiB |  13.3% → 5.5% |       6 MiB → 4 MiB |   3 → 2 | `matchRegex(Object, Object)`    | `org.codehaus.groovy.runtime.InvokerHelper` |

##### `toBigInteger(int)` (`java.math.MutableBigInteger`)

| Change |       Delta |              % |               Size | Samples | Caller                                            | Location               |
| -----: | ----------: | -------------: | -----------------: | ------: | ------------------------------------------------- | ---------------------- |
| +26.5% | +21.744 MiB | 100.0% → 96.3% | 82.2 MiB → 104 MiB | 43 → 50 | `divideAndRemainderKnuth(BigInteger)`             | `java.math.BigInteger` |
|    new |  +3.998 MiB |    0.0% → 3.7% |        0 B → 4 MiB |   0 → 2 | `divideAndRound(BigInteger, long, int, int, int)` | `java.math.BigDecimal` |

##### `asSpreader(int, Class, int)` (`java.lang.invoke.MethodHandle`)

|  Change |       Delta |      % |              Size | Samples | Caller                   | Location                        |
| ------: | ----------: | -----: | ----------------: | ------: | ------------------------ | ------------------------------- |
| +114.6% | +25.274 MiB | 100.0% | 22 MiB → 47.3 MiB | 12 → 24 | `asSpreader(Class, int)` | `java.lang.invoke.MethodHandle` |

##### `<init>()` (`java.math.MutableBigInteger`)

| Change |       Delta |             % |                Size | Samples | Caller                                                       | Location                      |
| -----: | ----------: | ------------: | ------------------: | ------: | ------------------------------------------------------------ | ----------------------------- |
| +27.2% | +13.549 MiB | 43.7% → 46.9% | 49.7 MiB → 63.3 MiB | 26 → 32 | `divideAndRemainderKnuth(BigInteger)`                        | `java.math.BigInteger`        |
| +16.2% |  +9.705 MiB | 52.7% → 51.6% |   60 MiB → 69.7 MiB | 29 → 37 | `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)` | `java.math.MutableBigInteger` |
| -50.0% |  -1.999 MiB |   3.5% → 1.5% |       4 MiB → 2 MiB |   2 → 1 | `divideAndRound(BigInteger, long, int, int, int)`            | `java.math.BigDecimal`        |

##### `transform(ATNState, PredictionContext, SemanticContext, boolean, LexerActionExecutor)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfig`)

| Change |       Delta |             % |              Size |  Samples | Caller                                              | Location                                      |
| -----: | ----------: | ------------: | ----------------: | -------: | --------------------------------------------------- | --------------------------------------------- |
| +16.1% | +31.732 MiB | 76.7% → 82.5% | 197 MiB → 229 MiB | 98 → 118 | `transform(ATNState, boolean)`                      | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig` |
| -26.2% | -14.647 MiB | 21.8% → 14.9% | 56 MiB → 41.3 MiB |  28 → 21 | `transform(ATNState, PredictionContext, boolean)`   | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig` |
| +81.6% |  +3.263 MiB |   1.6% → 2.6% |  4 MiB → 7.26 MiB |    2 → 4 | `transform(ATNState, LexerActionExecutor, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig` |

##### `stream(Spliterator, boolean)` (`java.util.stream.StreamSupport`)

| Change |       Delta |             % |                Size |   Samples | Caller                       | Location               |
| -----: | ----------: | ------------: | ------------------: | --------: | ---------------------------- | ---------------------- |
|  +8.9% | +24.747 MiB | 95.4% → 97.9% |   277 MiB → 302 MiB | 140 → 153 | `stream(Object[], int, int)` | `java.util.Arrays`     |
| -52.2% |  -6.966 MiB |   4.6% → 2.1% | 13.3 MiB → 6.38 MiB |     7 → 4 | `stream()`                   | `java.util.Collection` |

##### `getInvocationType()` (`java.lang.invoke.MemberName`)

|  Change |       Delta |      % |              Size | Samples | Caller                                    | Location                              |
| ------: | ----------: | -----: | ----------------: | ------: | ----------------------------------------- | ------------------------------------- |
| +107.9% | +17.257 MiB | 100.0% | 16 MiB → 33.3 MiB |  8 → 17 | `preparedLambdaForm(MemberName, boolean)` | `java.lang.invoke.DirectMethodHandle` |

##### `spliterator(Object[], int, int, int)` (`java.util.Spliterators`)

| Change |       Delta |      % |              Size | Samples | Caller                            | Location           |
| -----: | ----------: | -----: | ----------------: | ------: | --------------------------------- | ------------------ |
| +10.4% | +17.143 MiB | 100.0% | 164 MiB → 182 MiB | 86 → 92 | `spliterator(Object[], int, int)` | `java.util.Arrays` |

##### `make(MethodType, LambdaForm, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LLLLLL`)

| Change |       Delta |      % |                Size | Samples | Caller                                                                                 | Location                                     |
| -----: | ----------: | -----: | ------------------: | ------: | -------------------------------------------------------------------------------------- | -------------------------------------------- |
| +31.3% | +16.714 MiB | 100.0% | 53.4 MiB → 70.1 MiB | 27 → 37 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `<init>()` (`java.util.ArrayDeque`)

| Change |       Delta |      % |                Size | Samples | Caller                                | Location                                                   |
| -----: | ----------: | -----: | ------------------: | ------: | ------------------------------------- | ---------------------------------------------------------- |
| +74.1% | +16.559 MiB | 100.0% | 22.3 MiB → 38.9 MiB | 11 → 20 | `equals(ArrayPredictionContext, Set)` | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext` |

##### `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|  Change |       Delta |             % |              Size | Samples | Caller                                                                                           | Location                                        |
| ------: | ----------: | ------------: | ----------------: | ------: | ------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| +109.2% | +25.041 MiB | 44.5% → 70.6% | 22.9 MiB → 48 MiB | 12 → 23 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|  -30.0% |  -8.561 MiB | 55.5% → 29.4% | 28.6 MiB → 20 MiB | 15 → 10 | `access$000(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`   | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `<init>()` (`org.codenarc.rule.AbstractAstVisitor`)

| Change |      Delta |            % |        Size | Samples | Caller     | Location                                                       |
| -----: | ---------: | -----------: | ----------: | ------: | ---------- | -------------------------------------------------------------- |
|    new | +1.999 MiB | 0.0% → 12.5% | 0 B → 2 MiB |   0 → 1 | `<init>()` | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`        |
|    new | +1.999 MiB | 0.0% → 12.5% | 0 B → 2 MiB |   0 → 1 | `<init>()` | `org.codenarc.rule.basic.EmptyClassAstVisitor`                 |
|    new | +1.999 MiB | 0.0% → 12.5% | 0 B → 2 MiB |   0 → 1 | `<init>()` | `org.codenarc.rule.naming.ClassNameSameAsSuperclassAstVisitor` |
|    new | +1.999 MiB | 0.0% → 12.5% | 0 B → 2 MiB |   0 → 1 | `<init>()` | `org.codenarc.rule.exceptions.ExceptionExtendsErrorAstVisitor` |
|    new | +1.999 MiB | 0.0% → 12.5% | 0 B → 2 MiB |   0 → 1 | `<init>()` | `org.codenarc.rule.size.NestedBlockDepthAstVisitor`            |

##### `newSlice(int[], int, boolean)` (`java.util.regex.Pattern`)

| Change |       Delta |      % |              Size | Samples | Caller   | Location                  |
| -----: | ----------: | -----: | ----------------: | ------: | -------- | ------------------------- |
| +29.4% | +15.299 MiB | 100.0% | 52 MiB → 67.3 MiB | 26 → 32 | `atom()` | `java.util.regex.Pattern` |

##### `filterSuppressedViolations(Iterable)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

| Change |      Delta |             % |        Size | Samples | Caller                                         | Location                                         |
| -----: | ---------: | ------------: | ----------: | ------: | ---------------------------------------------- | ------------------------------------------------ |
|    new | +7.996 MiB | 0.0% → 100.0% | 0 B → 8 MiB |   0 → 1 | `removeSuppressedViolations(List, SourceCode)` | `org.codenarc.rule.AbstractSharedAstVisitorRule` |

##### `markVariableAsReferenced(String, VariableExpression)` (`org.codenarc.rule.unused.UnusedVariableAstVisitor`)

|  Change |      Delta |      % |             Size | Samples | Caller                                          | Location                                     |
| ------: | ---------: | -----: | ---------------: | ------: | ----------------------------------------------- | -------------------------------------------- |
| +400.0% | +7.995 MiB | 100.0% | 2 MiB → 9.99 MiB |   1 → 5 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

| Change |      Delta |      % |             Size | Samples | Caller                                          | Location                                             |
| -----: | ---------: | -----: | ---------------: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| +66.9% | +5.347 MiB | 100.0% | 8 MiB → 13.3 MiB |   4 → 6 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b8010bc800` |

##### `getViolationLocationString(Violation, String)` (`org.codenarc.report.TextReportWriter`)

| Change |      Delta |             % |        Size | Samples | Caller                                          | Location                                             |
| -----: | ---------: | ------------: | ----------: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
|    new | +3.998 MiB | 0.0% → 100.0% | 0 B → 4 MiB |   0 → 2 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b8010bc800` |

##### `visitConstantExpression(ConstantExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`)

| Change |      Delta |             % |        Size | Samples | Caller                     | Location                                          |
| -----: | ---------: | ------------: | ----------: | ------: | -------------------------- | ------------------------------------------------- |
|    new | +3.998 MiB | 0.0% → 100.0% | 0 B → 4 MiB |   0 → 2 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.ConstantExpression` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryGetterAstVisitor`)

| Change |      Delta |             % |        Size | Samples | Caller                     | Location                                            |
| -----: | ---------: | ------------: | ----------: | ------: | -------------------------- | --------------------------------------------------- |
|    new | +3.998 MiB | 0.0% → 100.0% | 0 B → 4 MiB |   0 → 2 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.MethodCallExpression` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|  Change |      Delta |      % |          Size | Samples | Caller                                    | Location                                             |
| ------: | ---------: | -----: | ------------: | ------: | ----------------------------------------- | ---------------------------------------------------- |
| +100.0% | +1.999 MiB | 100.0% | 2 MiB → 4 MiB |   1 → 2 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b8010bd000` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.design.LocaleSetDefaultAstVisitor`)

| Change |      Delta |             % |        Size | Samples | Caller                     | Location                                            |
| -----: | ---------: | ------------: | ----------: | ------: | -------------------------- | --------------------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.MethodCallExpression` |

##### `convertStringWithWildcardsToRegex(String)` (`org.codenarc.util.WildcardPattern`)

| Change |      Delta |             % |        Size | Samples | Caller                         | Location                                     |
| -----: | ---------: | ------------: | ----------: | ------: | ------------------------------ | -------------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `invokeStatic(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `doCall(List)` (`org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1`)

| Change |      Delta |             % |        Size | Samples | Caller                                  | Location                                     |
| -----: | ---------: | ------------: | ----------: | ------: | --------------------------------------- | -------------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `checkForCorrectColumn(ASTNode, String, int)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

| Change |      Delta |             % |        Size | Samples | Caller                                               | Location                                             |
| -----: | ---------: | ------------: | ----------: | ------: | ---------------------------------------------------- | ---------------------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `invokeSpecial(Object, Object, Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000b8013a1800` |

##### `checkStatementIndent(Statement, BlockStatement)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

| Change |      Delta |             % |        Size | Samples | Caller                                          | Location                                     |
| -----: | ---------: | ------------: | ----------: | ------: | ----------------------------------------------- | -------------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `visitClassEx(ClassNode)` (`org.codenarc.rule.convention.CompileStaticlVisitor`)

| Change |      Delta |             % |        Size | Samples | Caller                  | Location                               |
| -----: | ---------: | ------------: | ----------: | ------: | ----------------------- | -------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.unnecessary.UnnecessarySelfAssignmentAstVisitor`)

| Change |      Delta |             % |        Size | Samples | Caller                     | Location                                        |
| -----: | ---------: | ------------: | ----------: | ------: | -------------------------- | ----------------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.BinaryExpression` |

##### `shouldApplyThisRuleTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

| Change |      Delta |             % |        Size | Samples | Caller                | Location                         |
| -----: | ---------: | ------------: | ----------: | ------: | --------------------- | -------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `applyTo(SourceCode)` | `org.codenarc.rule.AbstractRule` |

##### `visitMethodEx(MethodNode)` (`org.codenarc.rule.convention.ImplicitReturnStatementAstVisitor`)

| Change |      Delta |             % |        Size | Samples | Caller                    | Location                               |
| -----: | ---------: | ------------: | ----------: | ------: | ------------------------- | -------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `visitMethod(MethodNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `visitClosureExpression(ClosureExpression)` (`org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`)

| Change |      Delta |             % |        Size | Samples | Caller                     | Location                                         |
| -----: | ---------: | ------------: | ----------: | ------: | -------------------------- | ------------------------------------------------ |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.ClosureExpression` |

##### `<init>()` (`org.gmetrics.metric.AbstractAstVisitor`)

| Change |      Delta |             % |        Size | Samples | Caller     | Location                                |
| -----: | ---------: | ------------: | ----------: | ------: | ---------- | --------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `<init>()` | `org.gmetrics.metric.abc.AbcAstVisitor` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

| Change |      Delta |             % |        Size | Samples | Caller                | Location                         |
| -----: | ---------: | ------------: | ----------: | ------: | --------------------- | -------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 1 | `applyTo(SourceCode)` | `org.codenarc.rule.AbstractRule` |

##### `make(MethodType, LambdaForm, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LL`)

| Change |        Delta |      % |              Size |   Samples | Caller                                                 | Location                                     |
| -----: | -----------: | -----: | ----------------: | --------: | ------------------------------------------------------ | -------------------------------------------- |
| -28.9% | -132.534 MiB | 100.0% | 458 MiB → 326 MiB | 205 → 161 | `invokeStatic(Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `makeBlockInliningWrapper(MethodHandle)` (`java.lang.invoke.MethodHandleImpl`)

| Change |       Delta |      % |              Size |   Samples | Caller                  | Location                            |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------------- | ----------------------------------- |
| -16.4% | -77.238 MiB | 100.0% | 471 MiB → 394 MiB | 234 → 200 | `profile(MethodHandle)` | `java.lang.invoke.MethodHandleImpl` |

##### `insertParameterTypes(int, Class[])` (`java.lang.invoke.MethodType`)

| Change |       Delta |             % |                Size | Samples | Caller                                             | Location                              |
| -----: | ----------: | ------------: | ------------------: | ------: | -------------------------------------------------- | ------------------------------------- |
| -29.9% | -36.577 MiB | 44.2% → 40.6% |    123 MiB → 86 MiB | 61 → 30 | `dropArgumentsTrusted(MethodHandle, int, Class[])` | `java.lang.invoke.MethodHandles`      |
| -31.8% | -13.993 MiB | 15.9% → 14.2% |     44 MiB → 30 MiB | 18 → 15 | `replaceParameterTypes(int, int, Class[])`         | `java.lang.invoke.MethodType`         |
| -34.5% | -11.058 MiB |  11.6% → 9.9% |   32.1 MiB → 21 MiB | 17 → 11 | `make(byte, Class, MemberName, Class)`             | `java.lang.invoke.DirectMethodHandle` |
| -66.7% |  -3.998 MiB |   2.2% → 0.9% |       6 MiB → 2 MiB |   3 → 1 | `asCollectorType(Class, int, int)`                 | `java.lang.invoke.MethodType`         |
| +12.9% |  +3.597 MiB | 10.1% → 14.9% | 27.9 MiB → 31.5 MiB | 13 → 17 | `getInvocationType()`                              | `java.lang.invoke.MemberName`         |

##### `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

| Change |       Delta |      % |               Size | Samples | Caller                                                            | Location                            |
| -----: | ----------: | -----: | -----------------: | ------: | ----------------------------------------------------------------- | ----------------------------------- |
| -25.7% | -28.835 MiB | 100.0% | 112 MiB → 83.2 MiB | 58 → 41 | `makePairwiseConvert(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `lambda$setGuards$1(int)` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

| Change |       Delta |      % |              Size | Samples | Caller       | Location                                                                             |
| -----: | ----------: | -----: | ----------------: | ------: | ------------ | ------------------------------------------------------------------------------------ |
| -57.7% | -27.133 MiB | 100.0% | 47 MiB → 19.9 MiB | 24 → 11 | `apply(int)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector$$Lambda.0x000000b8011070a0` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|  Change |       Delta |             % |              Size | Samples | Caller                                     | Location                                             |
| ------: | ----------: | ------------: | ----------------: | ------: | ------------------------------------------ | ---------------------------------------------------- |
|  -80.0% | -15.992 MiB |   9.8% → 2.3% |    20 MiB → 4 MiB |  10 → 2 | `newInvokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|   -7.3% | -12.808 MiB | 85.3% → 91.0% | 174 MiB → 162 MiB | 85 → 78 | `newInvokeSpecial(Object, Object)`         | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |  +1.999 MiB |   0.0% → 1.1% |       0 B → 2 MiB |   0 → 1 | `newInvokeSpecial(Object, int, int)`       | `java.lang.invoke.DirectMethodHandle$Holder`         |
|  +33.3% |  +1.999 MiB |   2.9% → 4.5% |     6 MiB → 8 MiB |   3 → 4 | `newInvokeSpecial(Object, int)`            | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |  -1.999 MiB |   1.0% → 0.0% |       2 MiB → 0 B |   1 → 0 | `newInvokeSpecial(Object)`                 | `java.lang.invoke.LambdaForm$DMH.0x000000b8016f0800` |

##### `make(byte, Class, MemberName, Class)` (`java.lang.invoke.DirectMethodHandle`)

| Change |       Delta |      % |                Size | Samples | Caller                                                                                   | Location                                |
| -----: | ----------: | -----: | ------------------: | ------: | ---------------------------------------------------------------------------------------- | --------------------------------------- |
| -32.1% | -24.499 MiB | 100.0% | 76.4 MiB → 51.9 MiB | 37 → 26 | `getDirectMethodCommon(byte, Class, MemberName, boolean, boolean, MethodHandles$Lookup)` | `java.lang.invoke.MethodHandles$Lookup` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

| Change |       Delta |             % |               Size |   Samples | Caller                                             | Location                                             |
| -----: | ----------: | ------------: | -----------------: | --------: | -------------------------------------------------- | ---------------------------------------------------- |
|  -6.6% | -24.152 MiB | 98.1% → 97.7% |  369 MiB → 344 MiB | 186 → 176 | `invokeStatic(Object, Object, int)`                | `java.lang.invoke.LambdaForm$DMH.0x000000b80109a000` |
| -80.5% |  -2.531 MiB |   0.8% → 0.2% | 3.15 MiB → 629 KiB |     3 → 1 | `copyOf(Object[], int, Class)`                     | `java.util.Arrays`                                   |
| +50.0% |  +1.998 MiB |   1.1% → 1.7% |      4 MiB → 6 MiB |     2 → 3 | `<init>(Object[], Comparator, Object[], int, int)` | `java.util.TimSort`                                  |
|    new |  +1.329 MiB |   0.0% → 0.4% |     0 B → 1.33 MiB |     0 → 1 | `copyOfRange(Object[], int, int, Class)`           | `java.util.Arrays`                                   |

##### `makeImpl(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

| Change |       Delta |             % |                Size |   Samples | Caller                                | Location                      |
| -----: | ----------: | ------------: | ------------------: | --------: | ------------------------------------- | ----------------------------- |
|  -4.0% | -16.996 MiB | 53.4% → 52.7% |   425 MiB → 408 MiB | 188 → 189 | `methodType(Class, Class[], boolean)` | `java.lang.invoke.MethodType` |
|  -6.0% |  -2.653 MiB |   5.5% → 5.3% | 43.9 MiB → 41.2 MiB |   23 → 21 | `methodType(Class, Class)`            | `java.lang.invoke.MethodType` |
|  -0.8% |  -2.546 MiB | 41.1% → 41.9% |   327 MiB → 324 MiB |       163 | `insertParameterTypes(int, Class[])`  | `java.lang.invoke.MethodType` |

##### `compile()` (`java.util.regex.Pattern`)

| Change |       Delta |      % |              Size |  Samples | Caller                | Location                  |
| -----: | ----------: | -----: | ----------------: | -------: | --------------------- | ------------------------- |
| -10.4% | -21.595 MiB | 100.0% | 208 MiB → 186 MiB | 107 → 96 | `<init>(String, int)` | `java.util.regex.Pattern` |

##### `createEntryListArray(int)` (`groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap`)

| Change |       Delta |      % |              Size | Samples | Caller                                         | Location                                             |
| -----: | ----------: | -----: | ----------------: | ------: | ---------------------------------------------- | ---------------------------------------------------- |
| -25.5% | -21.446 MiB | 100.0% | 84 MiB → 62.5 MiB | 42 → 29 | `<init>(AbstractEqualityComparator, int, int)` | `groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |       Delta |      % |              Size |   Samples | Caller                                          | Location            |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------------------------------------- | ------------------- |
|  -8.0% | -20.698 MiB | 100.0% | 259 MiB → 239 MiB | 130 → 122 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `map(Function)` (`java.util.stream.ReferencePipeline`)

|  Change |       Delta |             % |              Size | Samples | Caller                                                          | Location                                                  |
| ------: | ----------: | ------------: | ----------------: | ------: | --------------------------------------------------------------- | --------------------------------------------------------- |
|  -21.5% | -20.645 MiB | 98.0% → 97.4% | 96 MiB → 75.3 MiB | 47 → 39 | `setGuards(Object)`                                             | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
|     new |  +1.998 MiB |   0.0% → 2.6% |       0 B → 2 MiB |   0 → 1 | `createPathExpression(Expression, List)`                        | `org.apache.groovy.parser.antlr4.AstBuilder`              |
| removed |  -1.998 MiB |   2.0% → 0.0% |       2 MiB → 0 B |   1 → 0 | `visitCommandExpression(GroovyParser$CommandExpressionContext)` | `org.apache.groovy.parser.antlr4.AstBuilder`              |

##### `makeGuardWithTest(MethodHandle, MethodHandle, MethodHandle)` (`java.lang.invoke.MethodHandleImpl`)

| Change |       Delta |      % |              Size | Samples | Caller                                                    | Location                         |
| -----: | ----------: | -----: | ----------------: | ------: | --------------------------------------------------------- | -------------------------------- |
| -16.5% | -20.472 MiB | 100.0% | 124 MiB → 104 MiB | 62 → 53 | `guardWithTest(MethodHandle, MethodHandle, MethodHandle)` | `java.lang.invoke.MethodHandles` |

##### `valueOf(long)` (`java.lang.Long`)

| Change |       Delta |             % |              Size | Samples | Caller                                   | Location                                         |
| -----: | ----------: | ------------: | ----------------: | ------: | ---------------------------------------- | ------------------------------------------------ |
| -13.4% | -17.526 MiB | 89.4% → 88.3% | 131 MiB → 113 MiB | 68 → 58 | `add(ATNConfig, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet` |
|  -3.3% |    -518 KiB | 10.6% → 11.7% | 15.5 MiB → 15 MiB |   9 → 8 | `boxLong(long)`                          | `sun.invoke.util.ValueConversions`               |

##### `grow(int)` (`java.util.ArrayList`)

| Change |       Delta |      % |              Size | Samples | Caller   | Location              |
| -----: | ----------: | -----: | ----------------: | ------: | -------- | --------------------- |
| -34.5% | -16.919 MiB | 100.0% | 49 MiB → 32.1 MiB | 26 → 19 | `grow()` | `java.util.ArrayList` |

##### `of(byte, int, int, int)` (`java.lang.invoke.LambdaFormEditor$TransformKey`)

| Change |      Delta |      % |                Size | Samples | Caller                                 | Location                            |
| -----: | ---------: | -----: | ------------------: | ------: | -------------------------------------- | ----------------------------------- |
| -32.1% | -16.13 MiB | 100.0% | 50.2 MiB → 34.1 MiB | 25 → 18 | `spreadArgumentsForm(int, Class, int)` | `java.lang.invoke.LambdaFormEditor` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |       Delta |      % |                Size | Samples | Caller                          | Location           |
| -----: | ----------: | -----: | ------------------: | ------: | ------------------------------- | ------------------ |
| -20.3% | -15.058 MiB | 100.0% | 74.1 MiB → 59.1 MiB | 50 → 42 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `getParameterTypes()` (`java.lang.reflect.Method`)

|  Change |       Delta |             % |              Size | Samples | Caller                                             | Location                                                  |
| ------: | ----------: | ------------: | ----------------: | ------: | -------------------------------------------------- | --------------------------------------------------------- |
|  -59.1% | -11.804 MiB | 52.4% → 31.3% | 20 MiB → 8.19 MiB |   9 → 5 | `correctClassForNameAndUnReflectOtherwise(Method)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| removed |  -2.172 MiB |   5.7% → 0.0% |    2.17 MiB → 0 B |   1 → 0 | `getGenericParameterTypes()`                       | `java.lang.reflect.Executable`                            |
|  +12.5% |  +1.999 MiB | 41.9% → 68.7% |   16 MiB → 18 MiB |   8 → 9 | `<init>(Method, boolean)`                          | `java.lang.invoke.MemberName`                             |

##### `toString()` (`java.lang.StringBuilder`)

|  Change |      Delta |             % |          Size | Samples | Caller                       | Location                                          |
| ------: | ---------: | ------------: | ------------: | ------: | ---------------------------- | ------------------------------------------------- |
| removed | -3.998 MiB |  19.6% → 0.0% |   4 MiB → 0 B |   2 → 0 | `getText()`                  | `groovyjarjarantlr4.v4.runtime.RuleContext`       |
|  -25.0% | -1.999 MiB | 39.3% → 67.3% | 8 MiB → 6 MiB |   4 → 3 | `plus(String, CharSequence)` | `org.codehaus.groovy.runtime.StringGroovyMethods` |
| removed | -1.999 MiB |   9.8% → 0.0% |   2 MiB → 0 B |   1 → 0 | `toString(boolean)`          | `org.codehaus.groovy.ast.ClassNode`               |
| removed | -1.999 MiB |   9.8% → 0.0% |   2 MiB → 0 B |   1 → 0 | `getText()`                  | `org.codehaus.groovy.ast.expr.PropertyExpression` |
| removed | -1.999 MiB |   9.8% → 0.0% |   2 MiB → 0 B |   1 → 0 | `isRuleSuppressed(Rule)`     | `org.codenarc.analyzer.SuppressionAnalyzer`       |

##### `writeViolation(Writer, Violation, String)` (`org.codenarc.report.TextReportWriter`)

| Change |      Delta |      % |           Size | Samples | Caller                                                  | Location                                             |
| -----: | ---------: | -----: | -------------: | ------: | ------------------------------------------------------- | ---------------------------------------------------- |
| -40.0% | -3.998 MiB | 100.0% | 10 MiB → 6 MiB |   5 → 3 | `invokeVirtual(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b80140d800` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Caller                    | Location                                          |
| ------: | ---------: | ------------: | ----------: | ------: | ------------------------- | ------------------------------------------------- |
| removed | -3.997 MiB | 100.0% → 0.0% | 4 MiB → 0 B |   2 → 0 | `visitMethod(MethodNode)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `doCall(Object)` (`org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3`)

| Change |      Delta |      % |          Size | Samples | Caller                                  | Location                                     |
| -----: | ---------: | -----: | ------------: | ------: | --------------------------------------- | -------------------------------------------- |
| -50.0% | -1.999 MiB | 100.0% | 4 MiB → 2 MiB |   2 → 1 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `visitVariableExpression(VariableExpression)` (`org.codenarc.rule.ClassReferenceAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Caller                     | Location                                          |
| ------: | ---------: | ------------: | ----------: | ------: | -------------------------- | ------------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.VariableExpression` |

##### `addOrderingViolations(SourceCode, String, String, String)` (`org.codenarc.rule.imports.MisorderedStaticImportsRule`)

|  Change |      Delta |             % |        Size | Samples | Caller                                                          | Location                                     |
| ------: | ---------: | ------------: | ----------: | ------: | --------------------------------------------------------------- | -------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `invokeSpecial(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.basic.ParameterAssignmentInFilterClosureAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Caller                     | Location                                            |
| ------: | ---------: | ------------: | ----------: | ------: | -------------------------- | --------------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.MethodCallExpression` |

##### `visitVariableExpression(VariableExpression)` (`org.codenarc.rule.FieldReferenceAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Caller                     | Location                                          |
| ------: | ---------: | ------------: | ----------: | ------: | -------------------------- | ------------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.VariableExpression` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.imports.NoWildcardImportsRule`)

|  Change |      Delta |             % |        Size | Samples | Caller                | Location                         |
| ------: | ---------: | ------------: | ----------: | ------: | --------------------- | -------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `applyTo(SourceCode)` | `org.codenarc.rule.AbstractRule` |

##### `addChildrenToAbcVector(Object)` (`org.gmetrics.metric.abc.result.AggregateAbcMetricResult`)

|  Change |      Delta |             % |        Size | Samples | Caller                                  | Location                                             |
| ------: | ---------: | ------------: | ----------: | ------: | --------------------------------------- | ---------------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b801001000` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.gmetrics.metric.abc.AbcAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Caller                     | Location                                            |
| ------: | ---------: | ------------: | ----------: | ------: | -------------------------- | --------------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.MethodCallExpression` |

##### `setDisabledRulesByLine(int)` (`org.codenarc.plugin.disablerules.LookupTable`)

|  Change |      Delta |             % |        Size | Samples | Caller                               | Location                                             |
| ------: | ---------: | ------------: | ----------: | ------: | ------------------------------------ | ---------------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `invokeSpecial(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000b8013eb000` |

##### `visitMethodEx(MethodNode)` (`org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Caller                    | Location                               |
| ------: | ---------: | ------------: | ----------: | ------: | ------------------------- | -------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `visitMethod(MethodNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `visitConstantExpression(ConstantExpression)` (`org.codenarc.rule.convention.LongLiteralWithLowerCaseLAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Caller                     | Location                                          |
| ------: | ---------: | ------------: | ----------: | ------: | -------------------------- | ------------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.ConstantExpression` |

##### `recordMethodColumnAndSourceLineForClosureBlocks(MethodCallExpression)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Caller                                  | Location                                             |
| ------: | ---------: | ------------: | ----------: | ------: | --------------------------------------- | ---------------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b801001000` |

##### `visitMethodEx(MethodNode)` (`org.codenarc.rule.design.AssignmentToStaticFieldFromInstanceMethodAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Caller                    | Location                               |
| ------: | ---------: | ------------: | ----------: | ------: | ------------------------- | -------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `visitMethod(MethodNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `<init>(MethodNode)` (`org.gmetrics.result.MethodKey`)

|  Change |      Delta |             % |        Size | Samples | Caller                             | Location                                     |
| ------: | ---------: | ------------: | ----------: | ------: | ---------------------------------- | -------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `newInvokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryCallForLastElementAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Caller                                              | Location                                     |
| ------: | ---------: | ------------: | ----------: | ------: | --------------------------------------------------- | -------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `visitDeclarationExpression(DeclarationExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport` |

##### `calculate(MethodNode, SourceCode)` (`org.gmetrics.metric.abc.AbcMetric`)

|  Change |      Delta |             % |        Size | Samples | Caller                                          | Location                                             |
| ------: | ---------: | ------------: | ----------: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b8010bc800` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.unnecessary.UnnecessaryDefInMethodDeclarationAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Caller                    | Location                                          |
| ------: | ---------: | ------------: | ----------: | ------: | ------------------------- | ------------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `visitMethod(MethodNode)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryBooleanExpressionAstVisitor`)

|  Change |      Delta |             % |        Size | Samples | Caller                                              | Location                                     |
| ------: | ---------: | ------------: | ----------: | ------: | --------------------------------------------------- | -------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   1 → 0 | `visitDeclarationExpression(DeclarationExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport` |

### Total size

#### Regressions

Functions with the largest increase in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

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

Functions with the largest decrease in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

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

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b80138dc00`)

|     Change |      Delta |              % |                Size |   Samples | Callee                                     | Location                                            |
| ---------: | ---------: | -------------: | ------------------: | --------: | ------------------------------------------ | --------------------------------------------------- |
| +205482.4% | +4.552 GiB | 53.2% → 100.0% | 2.27 MiB → 4.55 GiB | 2 → 2,353 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b80118d000` |
|        new | +1.999 MiB |   0.0% → <0.1% |         0 B → 2 MiB |     0 → 1 | `invoke(Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000b80118dc00` |
|        ~0% |       -8 B |  46.8% → <0.1% |               2 MiB |         1 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b8013dbc00`)

|  Change |        Delta |             % |           Size |   Samples | Callee                                                                                      | Location                                             |
| ------: | -----------: | ------------: | -------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |    +3.69 GiB |  0.0% → 99.9% | 0 B → 3.69 GiB | 0 → 1,910 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b8010b2800` |
|     new |   +1.999 MiB |   0.0% → 0.1% |    0 B → 2 MiB |     0 → 1 | `collector(Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x000000b801140000`  |
| removed | -755.515 KiB | 100.0% → 0.0% |  756 KiB → 0 B |     1 → 0 | `invokeSpecial(Object, Object, Object, Object)`                                             | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b80160c800`)

|  Change |      Delta |             % |           Size |   Samples | Callee                                                  | Location                                             |
| ------: | ---------: | ------------: | -------------: | --------: | ------------------------------------------------------- | ---------------------------------------------------- |
|     new | +3.035 GiB | 0.0% → 100.0% | 0 B → 3.04 GiB | 0 → 1,529 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b80118e800` |
| removed |   -1.3 MiB | 100.0% → 0.0% |  1.3 MiB → 0 B |     1 → 0 | `invokeSpecial(Object, Object, Object, int, Object)`    | `java.lang.invoke.LambdaForm$DMH.0x000000b801101800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b801829400`)

|  Change |      Delta |             % |           Size |   Samples | Callee                                                     | Location                                             |
| ------: | ---------: | ------------: | -------------: | --------: | ---------------------------------------------------------- | ---------------------------------------------------- |
|     new | +2.773 GiB | 0.0% → 100.0% | 0 B → 2.77 GiB | 0 → 1,399 | `delegate(Object, Object, Object, Object)`                 | `java.lang.invoke.DelegatingMethodHandle$Holder`     |
| removed | -5.997 MiB | 100.0% → 0.0% |    6 MiB → 0 B |     3 → 0 | `newInvokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b801003400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b8013dc000`)

|  Change |      Delta |             % |               Size |     Samples | Callee                                                                                      | Location                                             |
| ------: | ---------: | ------------: | -----------------: | ----------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| +486.4% |  +2.19 GiB | 99.6% → 99.7% | 461 MiB → 2.64 GiB | 239 → 1,369 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b8010b2800` |
| +300.0% | +5.997 MiB |   0.4% → 0.3% |      2 MiB → 8 MiB |       1 → 4 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000b801114c00`  |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b8012d8000`)

|  Change |       Delta |             % |           Size | Samples | Callee                               | Location                                             |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------------ | ---------------------------------------------------- |
|     new |  +1.091 GiB |  0.0% → 98.5% | 0 B → 1.09 GiB | 0 → 569 | `invokeVirtual(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000b801152800` |
|     new | +17.291 MiB |   0.0% → 1.5% | 0 B → 17.3 MiB |   0 → 9 | `invokeSpecial(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000b8013eb000` |
| removed |  -8.578 MiB | 100.0% → 0.0% | 8.58 MiB → 0 B |   5 → 0 | `invokeStatic(Object, Object)`       | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b801398000`)

|  Change |       Delta |             % |           Size | Samples | Callee                                   | Location                                            |
| ------: | ----------: | ------------: | -------------: | ------: | ---------------------------------------- | --------------------------------------------------- |
|     new |  +1.005 GiB |  0.0% → 99.1% | 0 B → 1.01 GiB | 0 → 521 | `reinvoke(Object, Object, Object, long)` | `java.lang.invoke.LambdaForm$MH.0x000000b801396800` |
| removed | -33.263 MiB | 100.0% → 0.0% | 33.3 MiB → 0 B |  25 → 0 | `delegate(Object, Object)`               | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new | +11.263 MiB |   0.0% → 1.1% | 0 B → 11.3 MiB |   0 → 6 | `invoke(Object, Object, Object, long)`   | `java.lang.invoke.LambdaForm$MH.0x000000b801397000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b80160c400`)

|  Change |        Delta |             % |          Size | Samples | Callee                                             | Location                                         |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------------------------------- | ------------------------------------------------ |
|     new | +915.535 MiB | 0.0% → 100.0% | 0 B → 916 MiB | 0 → 451 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
| removed |   -3.997 MiB | 100.0% → 0.0% |   4 MiB → 0 B |   2 → 0 | `delegate(Object, Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b80182e800`)

|   Change |        Delta |      % |            Size | Samples | Callee                             | Location                                         |
| -------: | -----------: | -----: | --------------: | ------: | ---------------------------------- | ------------------------------------------------ |
| +9027.3% | +721.826 MiB | 100.0% | 8 MiB → 730 MiB | 4 → 360 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b801609800`)

|  Change |        Delta |             % |          Size | Samples | Callee                                  | Location                                     |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------------- | -------------------------------------------- |
|     new | +701.641 MiB | 0.0% → 100.0% | 0 B → 702 MiB | 0 → 347 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |
| removed |  -21.989 MiB | 100.0% → 0.0% |  22 MiB → 0 B |  11 → 0 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b8013d2400`)

|  Change |      Delta |             % |           Size |   Samples | Callee                                                                                      | Location                                             |
| ------: | ---------: | ------------: | -------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new | +3.368 GiB | 0.0% → 100.0% | 0 B → 3.37 GiB | 0 → 1,737 | `invokeSpecial(Object, Object, Object)`                                                     | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed | -2.721 GiB |  99.8% → 0.0% | 2.72 GiB → 0 B | 1,417 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b8010b2800` |
| removed | -5.997 MiB |   0.2% → 0.0% |    6 MiB → 0 B |     3 → 0 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000b801114c00`  |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b80138c800`)

|  Change |        Delta |             % |           Size | Samples | Callee                                                                                      | Location                                             |
| ------: | -----------: | ------------: | -------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new | +449.947 MiB |  0.0% → 99.6% |  0 B → 450 MiB | 0 → 229 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b8010b2800` |
|     new |   +1.999 MiB |   0.0% → 0.4% |    0 B → 2 MiB |   0 → 1 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000b801114c00`  |
| removed |   -1.019 MiB | 100.0% → 0.0% | 1.02 MiB → 0 B |   1 → 0 | `invokeSpecial(Object, Object, Object, int, Object, Object)`                                | `java.lang.invoke.LambdaForm$DMH.0x000000b8013d8c00` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b8013dc800`)

|  Change |        Delta |             % |           Size | Samples | Callee                                                                                      | Location                                             |
| ------: | -----------: | ------------: | -------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new | +410.131 MiB |  0.0% → 98.6% |  0 B → 410 MiB | 0 → 209 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b8010b2800` |
| removed |  -50.643 MiB | 100.0% → 0.0% | 50.6 MiB → 0 B |  26 → 0 | `invokeSpecial(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000b801102800` |
|     new |   +5.997 MiB |   0.0% → 1.4% |    0 B → 6 MiB |   0 → 3 | `collector(Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x000000b801140000`  |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b80138c000`)

|  Change |        Delta |      % |               Size |  Samples | Callee                                  | Location                                     |
| ------: | -----------: | -----: | -----------------: | -------: | --------------------------------------- | -------------------------------------------- |
| +397.7% | +331.138 MiB | 100.0% | 83.3 MiB → 414 MiB | 43 → 210 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b8018a3c00`)

|  Change |        Delta |             % |          Size | Samples | Callee                                     | Location                                             |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------ | ---------------------------------------------------- |
|     new | +327.834 MiB | 0.0% → 100.0% | 0 B → 328 MiB | 0 → 150 | `invokeSpecial(Object, Object, Object)`    | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |   -1.998 MiB | 100.0% → 0.0% |   2 MiB → 0 B |   1 → 0 | `invokeStaticInit(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b801000c00` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b8018b1800`)

|  Change |        Delta |             % |          Size | Samples | Callee                             | Location                                         |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------- | ------------------------------------------------ |
|     new | +319.838 MiB | 0.0% → 100.0% | 0 B → 320 MiB | 0 → 146 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
| removed |   -1.999 MiB | 100.0% → 0.0% |   2 MiB → 0 B |   1 → 0 | `delegate(Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b8018b1c00`)

|  Change |        Delta |             % |          Size | Samples | Callee                                  | Location                                            |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------------- | --------------------------------------------------- |
|     new | +319.838 MiB | 0.0% → 100.0% | 0 B → 320 MiB | 0 → 146 | `delegate(Object, Object, int, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |   -3.998 MiB |  66.7% → 0.0% |   4 MiB → 0 B |   2 → 0 | `delegate(Object, Object, Object)`      | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |   -1.999 MiB |  33.3% → 0.0% |   2 MiB → 0 B |   1 → 0 | `invoke(Object, Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000b801118800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b80182a000`)

|  Change |        Delta |             % |          Size | Samples | Callee                             | Location                                             |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------- | ---------------------------------------------------- |
|     new | +275.857 MiB | 0.0% → 100.0% | 0 B → 276 MiB | 0 → 136 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`     |
| removed |   -1.999 MiB | 100.0% → 0.0% |   2 MiB → 0 B |   1 → 0 | `newInvokeSpecial(Object, double)` | `java.lang.invoke.LambdaForm$DMH.0x000000b801171800` |

##### `invoke(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b80144c000`)

|  Change |        Delta |             % |           Size | Samples | Callee                                                  | Location                                             |
| ------: | -----------: | ------------: | -------------: | ------: | ------------------------------------------------------- | ---------------------------------------------------- |
|     new | +280.497 MiB | 0.0% → 100.0% |  0 B → 280 MiB | 0 → 130 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b80118e800` |
| removed |  -12.634 MiB | 100.0% → 0.0% | 12.6 MiB → 0 B |   9 → 0 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b801914000`)

|  Change |        Delta |             % |          Size | Samples | Callee                                                                                      | Location                                             |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new | +237.881 MiB | 0.0% → 100.0% | 0 B → 238 MiB |  0 → 51 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000b80138cc00` |
| removed |   -1.999 MiB | 100.0% → 0.0% |   2 MiB → 0 B |   1 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b8010b2800` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

| Change |      Delta |             % |                Size |       Samples | Callee                                                   | Location                           |
| -----: | ---------: | ------------: | ------------------: | ------------: | -------------------------------------------------------- | ---------------------------------- |
|  +2.9% | +97.51 MiB | 99.8% → 99.7% | 3.31 GiB → 3.41 GiB | 1,724 → 1,764 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
| +28.2% | +1.995 MiB |   0.2% → 0.3% | 7.08 MiB → 9.08 MiB |         4 → 5 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |
|    new | +1.022 MiB |  0.0% → <0.1% |      0 B → 1.02 MiB |         0 → 1 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)

| Change |       Delta |             % |              Size |   Samples | Callee                                                   | Location                           |
| -----: | ----------: | ------------: | ----------------: | --------: | -------------------------------------------------------- | ---------------------------------- |
| +11.4% | +88.812 MiB | 99.5% → 99.3% | 778 MiB → 867 MiB | 395 → 440 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|    new |  +3.997 MiB |   0.0% → 0.5% |       0 B → 4 MiB |     0 → 2 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|    new |  +1.998 MiB |   0.0% → 0.2% |       0 B → 2 MiB |     0 → 1 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
| -49.9% |  -1.992 MiB |   0.5% → 0.2% |  3.99 MiB → 2 MiB |     2 → 1 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `writeFileViolations(Writer, FileResults)` (`org.codenarc.report.TextReportWriter`)

|  Change |       Delta |              % |              Size | Samples | Callee                                   | Location                           |
| ------: | ----------: | -------------: | ----------------: | ------: | ---------------------------------------- | ---------------------------------- |
|  +43.6% | +81.961 MiB | 98.9% → 100.0% | 188 MiB → 270 MiB | 94 → 67 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| removed |  -1.999 MiB |    1.1% → 0.0% |       2 MiB → 0 B |   1 → 0 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

| Change |       Delta |             % |                Size |       Samples | Callee                                           | Location                           |
| -----: | ----------: | ------------: | ------------------: | ------------: | ------------------------------------------------ | ---------------------------------- |
| +17.9% | +50.181 MiB |   6.9% → 8.0% |   281 MiB → 331 MiB |     142 → 168 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |
|  +3.2% | +12.595 MiB |   9.7% → 9.8% |   395 MiB → 408 MiB |     206 → 207 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  +0.3% |  +9.683 MiB | 83.3% → 81.9% | 3.32 GiB → 3.33 GiB | 1,717 → 1,724 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`)

| Change |       Delta |      % |              Size |   Samples | Callee                           | Location                           |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------------- | ---------------------------------- |
| +23.3% | +61.969 MiB | 100.0% | 266 MiB → 328 MiB | 129 → 150 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `getNumberOfViolationsWithPriority(int, boolean)` (`org.codenarc.results.FileResults`)

| Change |      Delta |      % |              Size |   Samples | Callee                                        | Location                                            |
| -----: | ---------: | -----: | ----------------: | --------: | --------------------------------------------- | --------------------------------------------------- |
| +22.2% | +59.97 MiB | 100.0% | 270 MiB → 330 MiB | 131 → 151 | `linkToCallSite(Object, int, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b80144dc00` |

##### `getNumberOfViolationsWithPriority(int)` (`org.codenarc.results.FileResults`)

| Change |      Delta |      % |              Size |   Samples | Callee                                            | Location                           |
| -----: | ---------: | -----: | ----------------: | --------: | ------------------------------------------------- | ---------------------------------- |
| +22.2% | +59.97 MiB | 100.0% | 270 MiB → 330 MiB | 131 → 151 | `getNumberOfViolationsWithPriority(int, boolean)` | `org.codenarc.results.FileResults` |

##### `doCall(Object)` (`org.codenarc.report.TextReportWriter$_writeFileViolations_closure5`)

| Change |       Delta |      % |              Size | Samples | Callee                           | Location                           |
| -----: | ----------: | -----: | ----------------: | ------: | -------------------------------- | ---------------------------------- |
| +49.1% | +55.972 MiB | 100.0% | 114 MiB → 170 MiB | 57 → 38 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.results.DirectoryResults$_getNumberOfViolationsWithPriority_closure3`)

| Change |      Delta |           % |              Size |  Samples | Callee                                   | Location                           |
| -----: | ---------: | ----------: | ----------------: | -------: | ---------------------------------------- | ---------------------------------- |
| +26.7% | +53.97 MiB |      100.0% | 202 MiB → 256 MiB | 97 → 114 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|    new | +1.999 MiB | 0.0% → 0.8% |       0 B → 2 MiB |    0 → 1 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

| Change |       Delta |             % |                Size |       Samples | Callee                      | Location                                                 |
| -----: | ----------: | ------------: | ------------------: | ------------: | --------------------------- | -------------------------------------------------------- |
|  +2.6% | +60.215 MiB | 84.8% → 85.8% | 2.22 GiB → 2.28 GiB | 1,174 → 1,185 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`               |
| +15.1% | +15.998 MiB |   4.0% → 4.5% |   106 MiB → 122 MiB |       54 → 62 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`         |
| -11.6% | -13.776 MiB |   4.4% → 3.8% |   119 MiB → 105 MiB |       61 → 54 | `applyTo(SourceCode, List)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule` |
| -22.2% | -13.491 MiB |   2.3% → 1.7% | 60.7 MiB → 47.2 MiB |       31 → 25 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.IndentationRule`           |
| -39.6% |  -9.183 MiB |   0.9% → 0.5% |   23.2 MiB → 14 MiB |        12 → 7 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.ConsecutiveBlankLinesRule` |

##### `doCall(Object)` (`org.codenarc.report.TextReportWriter$_writeFileViolations_closure4`)

|  Change |       Delta |      % |            Size | Samples | Callee                           | Location                           |
| ------: | ----------: | -----: | --------------: | ------: | -------------------------------- | ---------------------------------- |
| +150.0% | +35.981 MiB | 100.0% | 24 MiB → 60 MiB |  12 → 9 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `isMethodNamed(MethodCallExpression, String)` (`org.codenarc.util.AstUtil`)

| Change |       Delta |      % |               Size | Samples | Callee                                                 | Location                    |
| -----: | ----------: | -----: | -----------------: | ------: | ------------------------------------------------------ | --------------------------- |
| +34.2% | +28.386 MiB | 100.0% | 82.9 MiB → 111 MiB | 42 → 54 | `isMethodNamed(MethodCallExpression, String, Integer)` | `org.codenarc.util.AstUtil` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|  Change |       Delta |             % |                Size |       Samples | Callee                  | Location                                                |
| ------: | ----------: | ------------: | ------------------: | ------------: | ----------------------- | ------------------------------------------------------- |
|   +1.2% | +26.627 MiB | 84.6% → 84.7% | 2.12 GiB → 2.15 GiB | 1,105 → 1,098 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                  |
|   -8.1% | -21.527 MiB |  10.3% → 9.4% |   265 MiB → 243 MiB |     131 → 121 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |
|  +18.4% | +11.449 MiB |   2.4% → 2.8% | 62.1 MiB → 73.5 MiB |       49 → 54 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`              |
|  +18.8% |  +9.109 MiB |   1.9% → 2.2% | 48.5 MiB → 57.6 MiB |       26 → 29 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor`               |
| removed |  -6.935 MiB |   0.3% → 0.0% |      6.94 MiB → 0 B |         5 → 0 | `addAll(Collection)`    | `java.util.ArrayList`                                   |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.unnecessary.UnnecessarySelfAssignmentAstVisitor`)

|  Change |       Delta |             % |                Size | Samples | Callee                                           | Location                                            |
| ------: | ----------: | ------------: | ------------------: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| +153.1% | +20.111 MiB | 76.7% → 80.6% | 13.1 MiB → 33.2 MiB |  7 → 17 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  +50.0% |  +1.998 MiB | 23.3% → 14.5% |       4 MiB → 6 MiB |   2 → 3 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000b801134800` |

##### `super$3$visitExpressionStatement(ExpressionStatement)` (`org.codenarc.rule.groovyism.UseCollectNestedAstVisitor`)

|  Change |       Delta |      % |              Size | Samples | Callee                                          | Location                                          |
| ------: | ----------: | -----: | ----------------: | ------: | ----------------------------------------------- | ------------------------------------------------- |
| +142.1% | +24.066 MiB | 100.0% | 16.9 MiB → 41 MiB |  9 → 20 | `visitExpressionStatement(ExpressionStatement)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|  Change |       Delta |           % |                Size | Samples | Callee                    | Location                                                              |
| ------: | ----------: | ----------: | ------------------: | ------: | ------------------------- | --------------------------------------------------------------------- |
|  +10.4% | +17.041 MiB | 7.0% → 7.7% |   164 MiB → 181 MiB | 83 → 81 | `visitClassEx(ClassNode)` | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`   |
|  -80.0% |  -7.995 MiB | 0.4% → 0.1% |    9.99 MiB → 2 MiB |   4 → 1 | `visitClassEx(ClassNode)` | `org.codenarc.rule.formatting.SpaceAfterOpeningBraceAstVisitor`       |
|     new |  +7.346 MiB | 0.0% → 0.3% |      0 B → 7.35 MiB |   0 → 4 | `visitClassEx(ClassNode)` | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor` |
| +300.5% |  +5.999 MiB | 0.1% → 0.3% |       2 MiB → 8 MiB |   1 → 3 | `visitClassEx(ClassNode)` | `org.codenarc.rule.formatting.SpaceBeforeOpeningBraceAstVisitor`      |
|  -44.2% |  -5.588 MiB | 0.5% → 0.3% | 12.6 MiB → 7.06 MiB |   7 → 4 | `visitClassEx(ClassNode)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                  |

##### `visitExpressionStatement(ExpressionStatement)` (`org.codenarc.rule.groovyism.UseCollectNestedAstVisitor`)

|  Change |       Delta |             % |              Size | Samples | Callee                                                        | Location                                            |
| ------: | ----------: | ------------: | ----------------: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
| +170.6% | +22.067 MiB | 19.9% → 39.6% | 12.9 MiB → 35 MiB |  7 → 17 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|     new |  +3.348 MiB |   0.0% → 3.8% |    0 B → 3.35 MiB |   0 → 2 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                  |
|   -3.8% |  -1.996 MiB | 80.1% → 56.6% |   52 MiB → 50 MiB | 26 → 25 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.groovyism.UseCollectNestedAstVisitor`)

|  Change |       Delta |             % |              Size | Samples | Callee                                                        | Location                                            |
| ------: | ----------: | ------------: | ----------------: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
| +180.1% | +17.993 MiB | 43.6% → 62.2% | 9.99 MiB → 28 MiB |  5 → 14 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |
|     new |  +5.997 MiB |  0.0% → 13.3% |       0 B → 6 MiB |   0 → 2 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                  |
|  -33.3% |  -3.998 MiB | 52.3% → 17.8% |    12 MiB → 8 MiB |   6 → 3 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|     new |  +1.999 MiB |   0.0% → 4.4% |       0 B → 2 MiB |   0 → 1 | `linkToCallSite(Object, int, Object)`                         | `java.lang.invoke.Invokers$Holder`                  |
|     new |  +1.998 MiB |   0.0% → 4.4% |       0 B → 2 MiB |   0 → 1 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x000000b801134800` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractSharedAstVisitorRule`)

|  Change |       Delta |             % |                Size | Samples | Callee                                         | Location                                                |
| ------: | ----------: | ------------: | ------------------: | ------: | ---------------------------------------------- | ------------------------------------------------------- |
|  +17.0% | +17.014 MiB | 94.3% → 91.4% |   100 MiB → 117 MiB | 50 → 62 | `applyVisitor(AstVisitor, SourceCode)`         | `org.codenarc.rule.AbstractSharedAstVisitorRule`        |
|     new |  +7.996 MiB |   0.0% → 6.2% |         0 B → 8 MiB |   0 → 1 | `removeSuppressedViolations(List, SourceCode)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`        |
| removed |  -3.018 MiB |   2.8% → 0.0% |      3.02 MiB → 0 B |   2 → 0 | `getAstVisitor(SourceCode)`                    | `org.codenarc.rule.unused.UnusedPrivateFieldRule`       |
|     new |  +1.998 MiB |   0.0% → 1.6% |         0 B → 2 MiB |   0 → 1 | `getViolations(AstVisitor, SourceCode)`        | `org.codenarc.rule.design.PrivateFieldCouldBeFinalRule` |
|  -66.1% |  -1.995 MiB |   2.8% → 0.8% | 3.02 MiB → 1.02 MiB |   2 → 1 | `getAstVisitor(SourceCode)`                    | `org.codenarc.rule.unused.UnusedPrivateMethodRule`      |

##### `super$2$visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`)

| Change |       Delta |      % |              Size | Samples | Callee                                            | Location                                     |
| -----: | ----------: | -----: | ----------------: | ------: | ------------------------------------------------- | -------------------------------------------- |
| +87.1% | +21.407 MiB | 100.0% | 24.6 MiB → 46 MiB | 13 → 22 | `visitMethodCallExpression(MethodCallExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b8012b2800`)

|  Change |      Delta |             % |                Size |    Samples | Callee                                     | Location                                            |
| ------: | ---------: | ------------: | ------------------: | ---------: | ------------------------------------------ | --------------------------------------------------- |
|  -99.3% | -4.552 GiB | 99.9% → 94.3% | 4.58 GiB → 33.3 MiB | 2,378 → 18 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b80118d000` |
| removed | -3.998 MiB |   0.1% → 0.0% |         4 MiB → 0 B |      2 → 0 | `invoke(Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000b80118dc00` |
|     new | +1.998 MiB |   0.0% → 5.7% |         0 B → 2 MiB |      0 → 1 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b8013a3800`)

|  Change |        Delta |             % |           Size |   Samples | Callee                                                                                      | Location                                             |
| ------: | -----------: | ------------: | -------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |    -3.68 GiB |  99.9% → 0.0% | 3.68 GiB → 0 B | 1,905 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b8010b2800` |
| removed |   -1.998 MiB |   0.1% → 0.0% |    2 MiB → 0 B |     1 → 0 | `collector(Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x000000b801140000`  |
|     new | +950.726 KiB | 0.0% → 100.0% |  0 B → 951 KiB |     0 → 1 | `invokeVirtual(Object, Object, Object, int)`                                                | `java.lang.invoke.LambdaForm$DMH.0x000000b8013a1400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b8012b0000`)

|  Change |      Delta |             % |           Size |   Samples | Callee                                  | Location                                     |
| ------: | ---------: | ------------: | -------------: | --------: | --------------------------------------- | -------------------------------------------- |
| removed | -3.366 GiB | 100.0% → 0.0% | 3.37 GiB → 0 B | 1,754 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |
|     new | +10.72 MiB | 0.0% → 100.0% | 0 B → 10.7 MiB |     0 → 6 | `invokeStatic(Object, Object)`          | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b801694800`)

|  Change |       Delta |             % |           Size |   Samples | Callee                                                  | Location                                             |
| ------: | ----------: | ------------: | -------------: | --------: | ------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -2.946 GiB | 100.0% → 0.0% | 2.95 GiB → 0 B | 1,481 → 0 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b80118e800` |
|     new | +19.989 MiB | 0.0% → 100.0% |   0 B → 20 MiB |    0 → 10 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b801484400`)

|  Change |      Delta |             % |           Size |   Samples | Callee                                     | Location                                         |
| ------: | ---------: | ------------: | -------------: | --------: | ------------------------------------------ | ------------------------------------------------ |
| removed | -2.733 GiB | 100.0% → 0.0% | 2.73 GiB → 0 B | 1,370 → 0 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
|     new | +1.999 MiB | 0.0% → 100.0% |    0 B → 2 MiB |     0 → 1 | `delegate(Object, Object, int)`            | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b801183400`)

|  Change |        Delta |             % |           Size | Samples | Callee                               | Location                                             |
| ------: | -----------: | ------------: | -------------: | ------: | ------------------------------------ | ---------------------------------------------------- |
| removed |   -1.142 GiB |  99.2% → 0.0% | 1.14 GiB → 0 B | 597 → 0 | `invokeVirtual(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000b801152800` |
| removed |   -9.994 MiB |   0.8% → 0.0% | 9.99 MiB → 0 B |   4 → 0 | `invokeSpecial(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000b8013e9c00` |
|     new | +634.343 KiB | 0.0% → 100.0% |  0 B → 634 KiB |   0 → 1 | `newInvokeSpecial(Object)`           | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b8012d0c00`)

|  Change |       Delta |            % |           Size | Samples | Callee                                                     | Location                                            |
| ------: | ----------: | -----------: | -------------: | ------: | ---------------------------------------------------------- | --------------------------------------------------- |
| removed |  -1.102 GiB | 98.9% → 0.0% |  1.1 GiB → 0 B | 567 → 0 | `reinvoke(Object, Object, Object, long)`                   | `java.lang.invoke.LambdaForm$MH.0x000000b801396400` |
| removed | -21.989 MiB |  1.9% → 0.0% |   22 MiB → 0 B |   9 → 0 | `invoke(Object, Object, Object, long)`                     | `java.lang.invoke.LambdaForm$MH.0x000000b801396c00` |
|     new |  +3.998 MiB | 0.0% → 57.1% |    0 B → 4 MiB |   0 → 2 | `delegate(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |  +3.006 MiB | 0.0% → 42.9% | 0 B → 3.01 MiB |   0 → 3 | `reinvoke(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b8012ca400` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b801491400`)

|  Change |        Delta |             % |          Size | Samples | Callee                                             | Location                                            |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------------------------------- | --------------------------------------------------- |
| removed | -795.596 MiB | 100.0% → 0.0% | 796 MiB → 0 B | 393 → 0 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |   +1.999 MiB | 0.0% → 100.0% |   0 B → 2 MiB |   0 → 1 | `invoke(Object, Object)`                           | `java.lang.invoke.LambdaForm$MH.0x000000b801105800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b801518400`)

| Change |        Delta |      % |            Size | Samples | Callee                             | Location                                         |
| -----: | -----------: | -----: | --------------: | ------: | ---------------------------------- | ------------------------------------------------ |
| -99.5% | -783.512 MiB | 100.0% | 788 MiB → 4 MiB | 388 → 2 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b8014c1c00`)

| Change |        Delta |      % |             Size |  Samples | Callee                                  | Location                                     |
| -----: | -----------: | -----: | ---------------: | -------: | --------------------------------------- | -------------------------------------------- |
| -92.5% | -591.691 MiB | 100.0% | 640 MiB → 48 MiB | 315 → 24 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b8013a0400`)

|  Change |        Delta |             % |           Size | Samples | Callee                                  | Location                                             |
| ------: | -----------: | ------------: | -------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
| removed | -406.229 MiB | 100.0% → 0.0% |  406 MiB → 0 B | 210 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |   +4.336 MiB |  0.0% → 82.4% | 0 B → 4.34 MiB |   0 → 3 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b801101c00` |
|     new | +950.703 KiB |  0.0% → 17.6% |  0 B → 951 KiB |   0 → 1 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b801004800` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b8014e1c00`)

|  Change |        Delta |             % |           Size | Samples | Callee                                                                                      | Location                                             |
| ------: | -----------: | ------------: | -------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -431.646 MiB |  99.1% → 0.0% |  432 MiB → 0 B | 219 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b8010b2800` |
|     new |  +65.273 MiB | 0.0% → 100.0% | 0 B → 65.3 MiB |  0 → 33 | `invokeStatic(Object, Object, Object)`                                                      | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |   -3.998 MiB |   0.9% → 0.0% |    4 MiB → 0 B |   2 → 0 | `collector(Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x000000b801140000`  |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b80190c800`)

|  Change |        Delta |             % |          Size | Samples | Callee                                  | Location                                             |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
| removed | -271.862 MiB | 100.0% → 0.0% | 272 MiB → 0 B | 132 → 0 | `invokeVirtual(Object, Object, int)`    | `java.lang.invoke.LambdaForm$DMH.0x000000b80197b400` |
|     new |   +1.999 MiB | 0.0% → 100.0% |   0 B → 2 MiB |   0 → 1 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b801119400`)

| Change |        Delta |             % |                Size |       Samples | Callee                             | Location                                            |
| -----: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------- | --------------------------------------------------- |
|  -7.5% | -266.912 MiB | 99.0% → 98.8% | 3.49 GiB → 3.23 GiB | 1,860 → 1,727 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b801118000` |
| +80.0% |   +7.993 MiB |   0.3% → 0.5% |     10 MiB → 18 MiB |         5 → 9 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000b801118800` |
|  +0.7% | +370.781 KiB |   1.4% → 1.5% | 48.8 MiB → 49.2 MiB |       25 → 26 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b8018cb400`)

| Change |        Delta |      % |            Size | Samples | Callee                                  | Location                                     |
| -----: | -----------: | -----: | --------------: | ------: | --------------------------------------- | -------------------------------------------- |
| -98.5% | -261.867 MiB | 100.0% | 266 MiB → 4 MiB | 129 → 2 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b801913000`)

|  Change |        Delta |             % |          Size | Samples | Callee                                  | Location                                            |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------------- | --------------------------------------------------- |
| removed | -261.867 MiB | 100.0% → 0.0% | 262 MiB → 0 B | 127 → 0 | `delegate(Object, Object, int, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |   +1.999 MiB | 0.0% → 100.0% |   0 B → 2 MiB |   0 → 1 | `invoke(Object, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000b801105800` |

##### `invoke(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b80143d800`)

|  Change |        Delta |             % |           Size | Samples | Callee                                                  | Location                                             |
| ------: | -----------: | ------------: | -------------: | ------: | ------------------------------------------------------- | ---------------------------------------------------- |
| removed | -260.881 MiB | 100.0% → 0.0% |  261 MiB → 0 B | 133 → 0 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b80118e800` |
|     new |   +1.335 MiB | 0.0% → 100.0% | 0 B → 1.34 MiB |   0 → 1 | `invokeVirtual(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b801410c00` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b80182a800`)

|  Change |        Delta |             % |           Size | Samples | Callee                             | Location                                         |
| ------: | -----------: | ------------: | -------------: | ------: | ---------------------------------- | ------------------------------------------------ |
| removed | -265.859 MiB | 100.0% → 0.0% |  266 MiB → 0 B | 133 → 0 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
|     new |  +19.929 MiB | 0.0% → 100.0% | 0 B → 19.9 MiB |  0 → 10 | `delegate(Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b8018e1000`)

| Change |        Delta |      % |             Size | Samples | Callee                             | Location                                         |
| -----: | -----------: | -----: | ---------------: | ------: | ---------------------------------- | ------------------------------------------------ |
| -77.1% | -201.897 MiB | 100.0% | 262 MiB → 60 MiB | 127 → 9 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b80198b000`)

|  Change |        Delta |             % |          Size | Samples | Callee                                                  | Location                                             |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------------- | ---------------------------------------------------- |
| removed | -195.899 MiB | 100.0% → 0.0% | 196 MiB → 0 B |  40 → 0 | `invokeVirtual(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b801409000` |

##### `doCall(Object)` (`org.codenarc.report.TextReportWriter$_writeFileViolations_closure6`)

| Change |       Delta |             % |               Size | Samples | Callee                                                   | Location                           |
| -----: | ----------: | ------------: | -----------------: | ------: | -------------------------------------------------------- | ---------------------------------- |
| -50.0% | -99.949 MiB | 98.0% → 94.3% | 200 MiB → 99.9 MiB | 42 → 50 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| +50.0% |  +1.998 MiB |   2.0% → 5.7% |      4 MiB → 6 MiB |   2 → 3 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |

##### `writeViolation(Writer, Violation, String)` (`org.codenarc.report.TextReportWriter`)

|  Change |      Delta |             % |             Size | Samples | Callee                                           | Location                                            |
| ------: | ---------: | ------------: | ---------------: | ------: | ------------------------------------------------ | --------------------------------------------------- |
|  -68.1% | -97.95 MiB | 73.5% → 46.0% | 144 MiB → 46 MiB | 14 → 23 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                  |
| +400.0% | +7.996 MiB |  1.0% → 10.0% |   2 MiB → 10 MiB |   1 → 5 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  +25.0% | +5.997 MiB | 12.2% → 30.0% |  24 MiB → 30 MiB | 12 → 15 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
|  -50.0% | -3.998 MiB |   4.1% → 4.0% |    8 MiB → 4 MiB |   4 → 2 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000b801134800` |
|  -50.0% | -3.997 MiB |   4.1% → 4.0% |    8 MiB → 4 MiB |   4 → 2 | `<init>(Object[], String[])`                     | `org.codehaus.groovy.runtime.GStringImpl`           |

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

| Change |       Delta |             % |                Size |       Samples | Callee                                           | Location                                            |
| -----: | ----------: | ------------: | ------------------: | ------------: | ------------------------------------------------ | --------------------------------------------------- |
|  -8.0% |  -92.06 MiB | 24.8% → 23.2% | 1.12 GiB → 1.03 GiB |     575 → 534 | `linkToCallSite(Object, Object, long, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000b801394800` |
| +11.6% |  +73.91 MiB | 13.8% → 15.7% |   639 MiB → 713 MiB |     323 → 360 | `linkToCallSite(Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000b801390c00` |
|  -2.2% | -53.481 MiB | 51.6% → 51.4% | 2.33 GiB → 2.28 GiB | 1,210 → 1,178 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
|  -3.8% | -16.787 MiB |   9.6% → 9.4% |   446 MiB → 429 MiB |     226 → 218 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
| +45.9% |  +2.923 MiB |   0.1% → 0.2% | 6.37 MiB → 9.29 MiB |         4 → 5 | `linkToCallSite(long, long, Object)`             | `java.lang.invoke.Invokers$Holder`                  |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

| Change |       Delta |             % |                Size |   Samples | Callee                                                           | Location                           |
| -----: | ----------: | ------------: | ------------------: | --------: | ---------------------------------------------------------------- | ---------------------------------- |
|  -7.8% | -77.844 MiB | 96.9% → 95.5% | 1,001 MiB → 923 MiB | 513 → 468 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
| +47.4% |  +7.088 MiB |   1.4% → 2.3% |     15 MiB → 22 MiB |    9 → 13 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| +21.6% |  +3.772 MiB |   1.7% → 2.2% | 17.5 MiB → 21.3 MiB |   10 → 11 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder` |

##### `super$3$applyTo(SourceCode, List)` (`org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`)

| Change |      Delta |      % |              Size | Samples | Callee                      | Location                                   |
| -----: | ---------: | -----: | ----------------: | ------: | --------------------------- | ------------------------------------------ |
| -19.0% | -35.53 MiB | 100.0% | 187 MiB → 151 MiB | 96 → 78 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `doCall(Object)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor$_visitArgumentlistExpression_closure1`)

| Change |       Delta |      % |              Size | Samples | Callee                                   | Location                           |
| -----: | ----------: | -----: | ----------------: | ------: | ---------------------------------------- | ---------------------------------- |
| -22.7% | -32.089 MiB | 100.0% | 141 MiB → 109 MiB | 69 → 54 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `visitStatement(Statement)` (`org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`)

| Change |       Delta |             % |              Size |  Samples | Callee                                   | Location                                            |
| -----: | ----------: | ------------: | ----------------: | -------: | ---------------------------------------- | --------------------------------------------------- |
| -13.0% | -27.202 MiB | 97.2% → 98.9% | 209 MiB → 182 MiB | 107 → 90 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
| -66.7% |  -3.998 MiB |   2.8% → 1.1% |     6 MiB → 2 MiB |    3 → 1 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000b801134800` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|  Change |       Delta |             % |              Size |   Samples | Callee           | Location                                    |
| ------: | ----------: | ------------: | ----------------: | --------: | ---------------- | ------------------------------------------- |
|   -8.0% | -32.315 MiB | 96.2% → 95.5% | 404 MiB → 372 MiB | 209 → 192 | `init()`         | `org.codenarc.analyzer.SuppressionAnalyzer` |
| +467.5% |  +9.345 MiB |   0.5% → 2.9% |  2 MiB → 11.3 MiB |     1 → 6 | `append(String)` | `java.lang.StringBuilder`                   |
|  -80.0% |  -7.996 MiB |   2.4% → 0.5% |    10 MiB → 2 MiB |     5 → 1 | `toString()`     | `java.lang.StringBuilder`                   |
|     ~0% |       +16 B |          0.5% |             2 MiB |         1 | `<init>()`       | `java.lang.StringBuilder`                   |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.unnecessary.AddEmptyStringAstVisitor`)

| Change |       Delta |             % |             Size | Samples | Callee                                           | Location                           |
| -----: | ----------: | ------------: | ---------------: | ------: | ------------------------------------------------ | ---------------------------------- |
| -74.1% | -17.179 MiB | 59.2% → 50.0% | 23.2 MiB → 6 MiB |  12 → 3 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
| -62.5% |  -9.994 MiB | 40.8% → 50.0% |   16 MiB → 6 MiB |   8 → 3 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

| Change |       Delta |             % |              Size |   Samples | Callee                                    | Location                                       |
| -----: | ----------: | ------------: | ----------------: | --------: | ----------------------------------------- | ---------------------------------------------- |
|  -5.0% | -21.294 MiB | 97.7% → 98.2% | 428 MiB → 407 MiB | 220 → 208 | `getAst()`                                | `org.codenarc.source.AbstractSourceCode`       |
| -67.3% |  -6.727 MiB |   2.3% → 0.8% | 10 MiB → 3.27 MiB |     5 → 2 | `getSuppressionsByLineNumber(ModuleNode)` | `org.codenarc.analyzer.SuppressionAnalyzer`    |
|    new |  +1.999 MiB |   0.0% → 0.5% |       0 B → 2 MiB |     0 → 1 | `addAll(Collection)`                      | `java.util.Collections$SynchronizedCollection` |
|    new |  +1.998 MiB |   0.0% → 0.5% |       0 B → 2 MiB |     0 → 1 | `getSuppressedRuleNames(Collection)`      | `org.codenarc.analyzer.SuppressionAnalyzer`    |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`)

| Change |          Delta |             % |              Size | Samples | Callee                                                        | Location                                            |
| -----: | -------------: | ------------: | ----------------: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
| -19.4% |    -24.751 MiB | 99.2% → 98.1% | 128 MiB → 103 MiB | 65 → 53 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
| +96.1% | +1,003.328 KiB |   0.8% → 1.9% |  1.02 MiB → 2 MiB |       1 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                  |

##### `checkForCorrectColumn(ASTNode, String, int)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

| Change |       Delta |             % |                Size | Samples | Callee                                           | Location                           |
| -----: | ----------: | ------------: | ------------------: | ------: | ------------------------------------------------ | ---------------------------------- |
| -38.7% | -17.219 MiB | 75.6% → 73.2% | 44.5 MiB → 27.3 MiB | 23 → 14 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| -44.3% |  -6.371 MiB | 24.4% → 21.4% |    14.4 MiB → 8 MiB |   8 → 4 | `linkToCallSite(Object, int, Object)`            | `java.lang.invoke.Invokers$Holder` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractMethodCallExpressionVisitor`)

|  Change |       Delta |             % |              Size | Samples | Callee                                            | Location                                                                                 |
| ------: | ----------: | ------------: | ----------------: | ------: | ------------------------------------------------- | ---------------------------------------------------------------------------------------- |
|  -13.6% | -17.041 MiB | 47.2% → 44.4% | 125 MiB → 108 MiB | 61 → 54 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`                             |
| +140.0% | +13.993 MiB |   3.8% → 9.9% | 9.99 MiB → 24 MiB |  5 → 12 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.basic.ClassForNameAstVisitor`                                         |
|  -70.0% | -13.989 MiB |   7.6% → 2.5% |    20 MiB → 6 MiB |  10 → 3 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.unnecessary.UnnecessaryCollectCallAstVisitor`                         |
| removed | -12.483 MiB |   4.7% → 0.0% |    12.5 MiB → 0 B |   6 → 0 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.unnecessary.UnnecessaryParenthesesForMethodCallWithClosureAstVisitor` |
|     new | +11.993 MiB |   0.0% → 4.9% |      0 B → 12 MiB |   0 → 6 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.unnecessary.ConsecutiveLiteralAppendsAstVisitor`                      |

##### `addViolationIfDuplicate(Expression, boolean)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

|  Change |       Delta |             % |               Size |   Samples | Callee                                           | Location                                            |
| ------: | ----------: | ------------: | -----------------: | --------: | ------------------------------------------------ | --------------------------------------------------- |
|  -21.4% | -25.174 MiB | 26.8% → 22.1% | 118 MiB → 92.6 MiB |   59 → 45 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                  |
| removed |  -3.998 MiB |   0.9% → 0.0% |        4 MiB → 0 B |     2 → 0 | `compareEqual(Object, Object)`                   | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|     new |  +3.998 MiB |   0.0% → 1.0% |        0 B → 4 MiB |     0 → 2 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|   +0.8% |  +2.441 MiB | 71.4% → 75.5% |  314 MiB → 316 MiB | 158 → 160 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
|  +50.0% |  +1.999 MiB |   0.9% → 1.4% |      4 MiB → 6 MiB |     2 → 3 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000b801134800` |

##### `addViolationIfDuplicate(Expression)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

| Change |       Delta |      % |              Size |   Samples | Callee                                         | Location                                           |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------------------------------- | -------------------------------------------------- |
|  -4.5% | -19.579 MiB | 100.0% | 432 MiB → 413 MiB | 217 → 207 | `addViolationIfDuplicate(Expression, boolean)` | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor` |

##### `visitConstantExpression(ConstantExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`)

|  Change |       Delta |             % |              Size | Samples | Callee                                           | Location                           |
| ------: | ----------: | ------------: | ----------------: | ------: | ------------------------------------------------ | ---------------------------------- |
|  -60.6% | -15.341 MiB | 76.0% → 62.5% | 25.3 MiB → 10 MiB |  13 → 5 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
| removed |  -3.998 MiB |  12.0% → 0.0% |       4 MiB → 0 B |   2 → 0 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |
|  -50.0% |  -1.999 MiB | 12.0% → 12.5% |     4 MiB → 2 MiB |   2 → 1 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.basic.ComparisonWithSelfAstVisitor`)

| Change |       Delta |             % |             Size | Samples | Callee                                                        | Location                                            |
| -----: | ----------: | ------------: | ---------------: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
| -58.2% | -11.137 MiB | 42.4% → 28.6% | 19.1 MiB → 8 MiB |   9 → 4 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |
| -62.5% |  -9.994 MiB | 35.4% → 21.4% |   16 MiB → 6 MiB |   7 → 3 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
| -33.3% |  -1.998 MiB | 13.3% → 14.3% |    6 MiB → 4 MiB |   3 → 2 | `linkToCallSite(Object, Object, Object, Object, Object)`      | `java.lang.invoke.Invokers$Holder`                  |
|    ~0% |        -8 B | 17.7% → 28.6% |            8 MiB |       4 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                  |
|    ~0% |        +8 B |   4.4% → 7.1% |            2 MiB |       1 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                  |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`)

| Change |      Delta |             % |              Size | Samples | Callee                                                | Location                                            |
| -----: | ---------: | ------------: | ----------------: | ------: | ----------------------------------------------------- | --------------------------------------------------- |
| -12.5% | -14.33 MiB | 92.0% → 93.2% | 115 MiB → 101 MiB | 56 → 50 | `linkToCallSite(Object, Object, Object, int, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b8013b9000` |
| -50.0% | -1.999 MiB |   3.2% → 1.9% |     4 MiB → 2 MiB |   2 → 1 | `linkToCallSite(Object, Object)`                      | `java.lang.invoke.LambdaForm$MH.0x000000b801134800` |
| -11.9% |   -729 KiB |   4.8% → 4.9% |  6 MiB → 5.29 MiB |       3 | `linkToCallSite(Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                  |

##### `visitBlockStatement(BlockStatement)` (`org.codenarc.rule.unused.AbstractLastStatementInBlockAstVisitor`)

|  Change |       Delta |             % |             Size | Samples | Callee                                                        | Location                                            |
| ------: | ----------: | ------------: | ---------------: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
| removed |  -9.995 MiB |  50.0% → 0.0% |     10 MiB → 0 B |   5 → 0 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |
|  -83.3% |  -9.995 MiB | 60.0% → 59.7% |   12 MiB → 2 MiB |   6 → 1 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
| removed |  -1.999 MiB |  10.0% → 0.0% |      2 MiB → 0 B |   1 → 0 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x000000b801134800` |
|  -32.5% | -665.57 KiB | 10.0% → 40.3% | 2 MiB → 1.35 MiB |       1 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                  |

##### `doCall(Object)` (`org.codenarc.rule.imports.UnusedImportRule$_processImports_closure1`)

|  Change |       Delta |              % |             Size | Samples | Callee                                                   | Location                                            |
| ------: | ----------: | -------------: | ---------------: | ------: | -------------------------------------------------------- | --------------------------------------------------- |
|  -64.5% | -14.502 MiB | 91.8% → 100.0% | 22.5 MiB → 8 MiB |  13 → 4 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
| removed |  -1.999 MiB |    8.2% → 0.0% |      2 MiB → 0 B |   1 → 0 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000b801134800` |

# Retained heap profile diff

Retained 78.1 KiB → 27.1 KiB (-50.992 KiB, -65.3%) over 129 objects → 97 objects (620 B → 286 B per object).

| Category         | Change |      Delta |     % |            Size |  Objects |
| ---------------- | -----: | ---------: | ----: | --------------: | -------: |
| Standard library | -65.3% | -50.96 KiB | 99.9% | 78 KiB → 27 KiB | 127 → 96 |
| Ours             | -50.0% |      -32 B |  0.1% |     64 B → 32 B |    2 → 1 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

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

Functions with the largest decrease in bytes retained within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

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

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `<init>(boolean, String, XMLResourceIdentifier, InputStream, Reader, String, boolean, boolean, boolean)` (`com.sun.xml.internal.stream.Entity$ScannedEntity`)

| Change |       Delta |             % |         Size | Objects | Location                                               |
| -----: | ----------: | ------------: | -----------: | ------: | ------------------------------------------------------ |
|    new | +16.015 KiB | 0.0% → 100.0% | 0 B → 16 KiB |   0 → 1 | `com.sun.xml.internal.stream.Entity$ScannedEntity:412` |

##### `getPlainNodeReference(boolean)` (`org.codehaus.groovy.ast.ClassNode`)

| Change |  Delta |      % |          Size | Objects | Location                                 |
| -----: | -----: | -----: | ------------: | ------: | ---------------------------------------- |
| +66.7% | +304 B | 100.0% | 456 B → 760 B |   3 → 5 | `org.codehaus.groovy.ast.ClassNode:1531` |

##### `makeWithoutCaching(String)` (`org.codehaus.groovy.ast.ClassHelper`)

| Change |  Delta |             % |        Size | Objects | Location                                  |
| -----: | -----: | ------------: | ----------: | ------: | ----------------------------------------- |
|    new | +152 B | 0.0% → 100.0% | 0 B → 152 B |   0 → 1 | `org.codehaus.groovy.ast.ClassHelper:281` |

##### `getTable()` (`java.beans.FeatureDescriptor`)

| Change | Delta |             % |       Size | Objects | Location                           |
| -----: | ----: | ------------: | ---------: | ------: | ---------------------------------- |
|    new | +96 B | 0.0% → 100.0% | 0 B → 96 B |   0 → 2 | `java.beans.FeatureDescriptor:291` |

##### `<init>(Class, ClassInfo)` (`org.codehaus.groovy.reflection.CachedClass`)

| Change | Delta |            % |       Size | Objects | Location                                         |
| -----: | ----: | -----------: | ---------: | ------: | ------------------------------------------------ |
|    new | +48 B | 0.0% → 50.0% | 0 B → 48 B |   0 → 1 | `org.codehaus.groovy.reflection.CachedClass:77`  |
|    new | +48 B | 0.0% → 50.0% | 0 B → 48 B |   0 → 1 | `org.codehaus.groovy.reflection.CachedClass:209` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change | Delta |      % |          Size | Objects | Location                |
| -----: | ----: | -----: | ------------: | ------: | ----------------------- |
| +20.0% | +72 B | 100.0% | 360 B → 432 B |   4 → 5 | `java.util.Arrays:3863` |

##### `createMethodCallExpression(Expression, Expression)` (`org.apache.groovy.parser.antlr4.AstBuilder`)

| Change | Delta |             % |       Size | Objects | Location                                          |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------------------------------- |
|    new | +72 B | 0.0% → 100.0% | 0 B → 72 B |   0 → 1 | `org.apache.groovy.parser.antlr4.AstBuilder:4442` |

##### `putNodeMetaData(Object, Object)` (`org.codehaus.groovy.ast.NodeMetaDataHandler`)

| Change | Delta |             % |       Size | Objects | Location                                          |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------------------------------- |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 2 | `org.codehaus.groovy.ast.NodeMetaDataHandler:110` |

##### `lambda$inheritFields$19(CachedClass)` (`groovy.lang.MetaClassImpl`)

| Change | Delta |             % |       Size | Objects | Location                         |
| -----: | ----: | ------------: | ---------: | ------: | -------------------------------- |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 1 | `groovy.lang.MetaClassImpl:2559` |

##### `<init>(SourceUnit)` (`org.codehaus.groovy.ast.ModuleNode`)

| Change | Delta |             % |       Size | Objects | Location                                |
| -----: | ----: | ------------: | ---------: | ------: | --------------------------------------- |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 1 | `org.codehaus.groovy.ast.ModuleNode:68` |

##### `realBootstrap(MethodHandles$Lookup, String, int, MethodType, boolean, boolean, boolean)` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change | Delta |             % |       Size | Objects | Location                                            |
| -----: | ----: | ------------: | ---------: | ------: | --------------------------------------------------- |
|    new | +56 B | 0.0% → 100.0% | 0 B → 56 B |   0 → 1 | `org.codehaus.groovy.vmplugin.v8.IndyInterface:227` |

##### `visitCreator(GroovyParser$CreatorContext)` (`org.apache.groovy.parser.antlr4.AstBuilder`)

| Change | Delta |             % |       Size | Objects | Location                                          |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------------------------------- |
|    new | +56 B | 0.0% → 100.0% | 0 B → 56 B |   0 → 1 | `org.apache.groovy.parser.antlr4.AstBuilder:3306` |

##### `pathExpression()` (`org.apache.groovy.parser.antlr4.GroovyParser`)

| Change | Delta |             % |       Size | Objects | Location                                            |
| -----: | ----: | ------------: | ---------: | ------: | --------------------------------------------------- |
|    new | +48 B | 0.0% → 100.0% | 0 B → 48 B |   0 → 1 | `org.apache.groovy.parser.antlr4.GroovyParser:9854` |

##### `addMethodToList(Object, MetaMethod)` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

| Change | Delta |             % |       Size | Objects | Location                                                    |
| -----: | ----: | ------------: | ---------: | ------: | ----------------------------------------------------------- |
|    new | +48 B | 0.0% → 100.0% | 0 B → 48 B |   0 → 2 | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex:371` |

##### `getAndPut(String, MemoizeCache$ValueProvider)` (`org.codehaus.groovy.vmplugin.v8.CacheableCallSite`)

|  Change | Delta |      % |        Size | Objects | Location                                               |
| ------: | ----: | -----: | ----------: | ------: | ------------------------------------------------------ |
| +100.0% | +40 B | 100.0% | 40 B → 80 B |   1 → 2 | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite:71` |

##### `enhancedStatementExpression()` (`org.apache.groovy.parser.antlr4.GroovyParser`)

| Change | Delta |             % |       Size | Objects | Location                                            |
| -----: | ----: | ------------: | ---------: | ------: | --------------------------------------------------- |
|    new | +40 B | 0.0% → 100.0% | 0 B → 40 B |   0 → 1 | `org.apache.groovy.parser.antlr4.GroovyParser:8170` |

##### `<clinit>()` (`com.sun.org.apache.xerces.internal.util.XMLChar`)

|  Change |       Delta |             % |         Size | Objects | Location                                             |
| ------: | ----------: | ------------: | -----------: | ------: | ---------------------------------------------------- |
| removed | -64.015 KiB | 100.0% → 0.0% | 64 KiB → 0 B |   1 → 0 | `com.sun.org.apache.xerces.internal.util.XMLChar:56` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

| Change |      Delta |      % |             Size | Objects | Location                |
| -----: | ---------: | -----: | ---------------: | ------: | ----------------------- |
| -91.8% | -3.148 KiB | 100.0% | 3.43 KiB → 288 B |       1 | `java.util.Arrays:3856` |

##### `resize()` (`java.util.HashMap`)

|  Change |  Delta |             % |        Size | Objects | Location                |
| ------: | -----: | ------------: | ----------: | ------: | ----------------------- |
| removed | -608 B | 100.0% → 0.0% | 608 B → 0 B |   2 → 0 | `java.util.HashMap:710` |

##### `resize(int)` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

| Change |  Delta |      % |                Size | Objects | Location                                                    |
| -----: | -----: | -----: | ------------------: | ------: | ----------------------------------------------------------- |
| -19.8% | -512 B | 100.0% | 2.53 KiB → 2.03 KiB |       2 | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex:135` |

##### `getOrPutMethods(String, MetaMethodIndex$Header)` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

| Change |  Delta |      % |          Size | Objects | Location                                                    |
| -----: | -----: | -----: | ------------: | ------: | ----------------------------------------------------------- |
| -53.3% | -448 B | 100.0% | 840 B → 392 B |  15 → 7 | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex:219` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|  Change |  Delta |             % |        Size | Objects | Location                     |
| ------: | -----: | ------------: | ----------: | ------: | ---------------------------- |
| removed | -416 B | 100.0% → 0.0% | 416 B → 0 B |   1 → 0 | `java.lang.reflect.Array:78` |

##### `copy()` (`java.lang.reflect.Method`)

|  Change |  Delta |             % |        Size | Objects | Location                       |
| ------: | -----: | ------------: | ----------: | ------: | ------------------------------ |
| removed | -352 B | 100.0% → 0.0% | 352 B → 0 B |   4 → 0 | `java.lang.reflect.Method:165` |

##### `<init>(MethodType)` (`java.lang.invoke.Invokers`)

|  Change |  Delta |             % |        Size | Objects | Location                       |
| ------: | -----: | ------------: | ----------: | ------: | ------------------------------ |
| removed | -280 B | 100.0% → 0.0% | 280 B → 0 B |   1 → 0 | `java.lang.invoke.Invokers:51` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |  Delta |      % |          Size | Objects | Location                  |
| -----: | -----: | -----: | ------------: | ------: | ------------------------- |
| -55.6% | -280 B | 100.0% | 504 B → 224 B |   9 → 4 | `java.util.ArrayList:239` |

##### `getTargetMethodInfo()` (`java.beans.Introspector`)

|  Change |  Delta |             % |        Size | Objects | Location                       |
| ------: | -----: | ------------: | ----------: | ------: | ------------------------------ |
| removed | -256 B | 100.0% → 0.0% | 256 B → 0 B |   1 → 0 | `java.beans.Introspector:1035` |

##### `copy()` (`java.lang.reflect.Field`)

| Change |  Delta |      % |         Size | Objects | Location                      |
| -----: | -----: | -----: | -----------: | ------: | ----------------------------- |
| -66.7% | -144 B | 100.0% | 216 B → 72 B |   3 → 1 | `java.lang.reflect.Field:160` |

##### `visitIdentifierPrmrAlt(GroovyParser$IdentifierPrmrAltContext)` (`org.apache.groovy.parser.antlr4.AstBuilder`)

|  Change |  Delta |             % |        Size | Objects | Location                                          |
| ------: | -----: | ------------: | ----------: | ------: | ------------------------------------------------- |
| removed | -144 B | 100.0% → 0.0% | 144 B → 0 B |   2 → 0 | `org.apache.groovy.parser.antlr4.AstBuilder:3248` |

##### `unreflect(Method)` (`java.lang.invoke.MethodHandles$Lookup`)

|  Change | Delta |             % |       Size | Objects | Location                                     |
| ------: | ----: | ------------: | ---------: | ------: | -------------------------------------------- |
| removed | -96 B | 100.0% → 0.0% | 96 B → 0 B |   2 → 0 | `java.lang.invoke.MethodHandles$Lookup:3444` |

##### `decompress(ByteBuffer, int)` (`jdk.internal.jimage.ImageLocation`)

|  Change | Delta |             % |       Size | Objects | Location                               |
| ------: | ----: | ------------: | ---------: | ------: | -------------------------------------- |
| removed | -80 B | 100.0% → 0.0% | 80 B → 0 B |   1 → 0 | `jdk.internal.jimage.ImageLocation:64` |

##### `identifier()` (`org.apache.groovy.parser.antlr4.GroovyParser`)

|  Change | Delta |             % |       Size | Objects | Location                                             |
| ------: | ----: | ------------: | ---------: | ------: | ---------------------------------------------------- |
| removed | -80 B | 100.0% → 0.0% | 80 B → 0 B |   2 → 0 | `org.apache.groovy.parser.antlr4.GroovyParser:12607` |

##### `createMethodCallExpression(PropertyExpression, Expression)` (`org.apache.groovy.parser.antlr4.AstBuilder`)

|  Change | Delta |             % |       Size | Objects | Location                                          |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------------- |
| removed | -72 B | 100.0% → 0.0% | 72 B → 0 B |   1 → 0 | `org.apache.groovy.parser.antlr4.AstBuilder:4411` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `<init>(boolean, String, XMLResourceIdentifier, InputStream, Reader, String, boolean, boolean, boolean)` (`com.sun.xml.internal.stream.Entity$ScannedEntity`)

| Change |       Delta |             % |         Size | Objects | Caller                                                                  | Location                                                   |
| -----: | ----------: | ------------: | -----------: | ------: | ----------------------------------------------------------------------- | ---------------------------------------------------------- |
|    new | +16.015 KiB | 0.0% → 100.0% | 0 B → 16 KiB |   0 → 1 | `setupCurrentEntity(boolean, String, XMLInputSource, boolean, boolean)` | `com.sun.org.apache.xerces.internal.impl.XMLEntityManager` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|   Change |      Delta |      % |             Size | Objects | Caller                                                    | Location                |
| -------: | ---------: | -----: | ---------------: | ------: | --------------------------------------------------------- | ----------------------- |
| +3700.0% | +4.046 KiB | 100.0% | 112 B → 4.16 KiB |   1 → 2 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `getPlainNodeReference(boolean)` (`org.codehaus.groovy.ast.ClassNode`)

| Change |  Delta |      % |          Size | Objects | Caller                    | Location                            |
| -----: | -----: | -----: | ------------: | ------: | ------------------------- | ----------------------------------- |
| +66.7% | +304 B | 100.0% | 456 B → 760 B |   3 → 5 | `getPlainNodeReference()` | `org.codehaus.groovy.ast.ClassNode` |

##### `makeWithoutCaching(String)` (`org.codehaus.groovy.ast.ClassHelper`)

| Change |  Delta |             % |        Size | Objects | Caller         | Location                              |
| -----: | -----: | ------------: | ----------: | ------: | -------------- | ------------------------------------- |
|    new | +152 B | 0.0% → 100.0% | 0 B → 152 B |   0 → 1 | `make(String)` | `org.codehaus.groovy.ast.ClassHelper` |

##### `getDeclaredConstructors0(boolean)` (`java.lang.Class`)

| Change |  Delta |             % |        Size | Objects | Caller                                    | Location          |
| -----: | -----: | ------------: | ----------: | ------: | ----------------------------------------- | ----------------- |
|    new | +104 B | 0.0% → 100.0% | 0 B → 104 B |   0 → 1 | `privateGetDeclaredConstructors(boolean)` | `java.lang.Class` |

##### `getTable()` (`java.beans.FeatureDescriptor`)

| Change | Delta |             % |       Size | Objects | Caller                | Location                       |
| -----: | ----: | ------------: | ---------: | ------: | --------------------- | ------------------------------ |
|    new | +96 B | 0.0% → 100.0% | 0 B → 96 B |   0 → 2 | `addTable(Hashtable)` | `java.beans.FeatureDescriptor` |

##### `<init>(Class, ClassInfo)` (`org.codehaus.groovy.reflection.CachedClass`)

| Change | Delta |             % |       Size | Objects | Caller                                | Location                                   |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------------------- | ------------------------------------------ |
|    new | +96 B | 0.0% → 100.0% | 0 B → 96 B |   0 → 2 | `createCachedClass(Class, ClassInfo)` | `org.codehaus.groovy.reflection.ClassInfo` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change | Delta |      % |          Size | Objects | Caller                          | Location           |
| -----: | ----: | -----: | ------------: | ------: | ------------------------------- | ------------------ |
| +20.0% | +72 B | 100.0% | 360 B → 432 B |   4 → 5 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `createMethodCallExpression(Expression, Expression)` (`org.apache.groovy.parser.antlr4.AstBuilder`)

| Change | Delta |             % |       Size | Objects | Caller                                              | Location                                     |
| -----: | ----: | ------------: | ---------: | ------: | --------------------------------------------------- | -------------------------------------------- |
|    new | +72 B | 0.0% → 100.0% | 0 B → 72 B |   0 → 1 | `visitPathElement(GroovyParser$PathElementContext)` | `org.apache.groovy.parser.antlr4.AstBuilder` |

##### `getDeclaredFields0(boolean)` (`java.lang.Class`)

| Change | Delta |             % |       Size | Objects | Caller                              | Location          |
| -----: | ----: | ------------: | ---------: | ------: | ----------------------------------- | ----------------- |
|    new | +72 B | 0.0% → 100.0% | 0 B → 72 B |   0 → 1 | `privateGetDeclaredFields(boolean)` | `java.lang.Class` |

##### `putNodeMetaData(Object, Object)` (`org.codehaus.groovy.ast.NodeMetaDataHandler`)

| Change | Delta |            % |       Size | Objects | Caller                                                        | Location                                     |
| -----: | ----: | -----------: | ---------: | ------: | ------------------------------------------------------------- | -------------------------------------------- |
|    new | +32 B | 0.0% → 50.0% | 0 B → 32 B |   0 → 1 | `dynamicType()`                                               | `org.codehaus.groovy.ast.ClassHelper`        |
|    new | +32 B | 0.0% → 50.0% | 0 B → 32 B |   0 → 1 | `visitFieldDeclaration(GroovyParser$FieldDeclarationContext)` | `org.apache.groovy.parser.antlr4.AstBuilder` |

##### `lambda$inheritFields$19(CachedClass)` (`groovy.lang.MetaClassImpl`)

| Change | Delta |             % |       Size | Objects | Caller          | Location                                               |
| -----: | ----: | ------------: | ---------: | ------: | --------------- | ------------------------------------------------------ |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 1 | `apply(Object)` | `groovy.lang.MetaClassImpl$$Lambda.0x000000b8010ae000` |

##### `<init>(SourceUnit)` (`org.codehaus.groovy.ast.ModuleNode`)

| Change | Delta |             % |       Size | Objects | Caller                                 | Location                                     |
| -----: | ----: | ------------: | ---------: | ------: | -------------------------------------- | -------------------------------------------- |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 1 | `<init>(SourceUnit, boolean, boolean)` | `org.apache.groovy.parser.antlr4.AstBuilder` |

##### `realBootstrap(MethodHandles$Lookup, String, int, MethodType, boolean, boolean, boolean)` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change | Delta |             % |       Size | Objects | Caller                                                             | Location                                        |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------------------------------------------------ | ----------------------------------------------- |
|    new | +56 B | 0.0% → 100.0% | 0 B → 56 B |   0 → 1 | `bootstrap(MethodHandles$Lookup, String, MethodType, String, int)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `visitCreator(GroovyParser$CreatorContext)` (`org.apache.groovy.parser.antlr4.AstBuilder`)

| Change | Delta |             % |       Size | Objects | Caller                                            | Location                                     |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------------------------------- | -------------------------------------------- |
|    new | +56 B | 0.0% → 100.0% | 0 B → 56 B |   0 → 1 | `visitNewPrmrAlt(GroovyParser$NewPrmrAltContext)` | `org.apache.groovy.parser.antlr4.AstBuilder` |

##### `pathExpression()` (`org.apache.groovy.parser.antlr4.GroovyParser`)

| Change | Delta |             % |       Size | Objects | Caller                | Location                                       |
| -----: | ----: | ------------: | ---------: | ------: | --------------------- | ---------------------------------------------- |
|    new | +48 B | 0.0% → 100.0% | 0 B → 48 B |   0 → 1 | `postfixExpression()` | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `addMethodToList(Object, MetaMethod)` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

| Change | Delta |            % |       Size | Objects | Caller                                                                           | Location                                                |
| -----: | ----: | -----------: | ---------: | ------: | -------------------------------------------------------------------------------- | ------------------------------------------------------- |
|    new | +24 B | 0.0% → 50.0% | 0 B → 24 B |   0 → 1 | `copyNonPrivateNonNewMetaMethods(MetaMethodIndex$Entry, MetaMethodIndex$Header)` | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |
|    new | +24 B | 0.0% → 50.0% | 0 B → 24 B |   0 → 1 | `copyNonPrivateMethods(MetaMethodIndex$Entry, MetaMethodIndex$Header)`           | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |

##### `make(MethodType, LambdaForm, Object, Object, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LLLL`)

| Change | Delta |             % |       Size | Objects | Caller                                                                 | Location                                     |
| -----: | ----: | ------------: | ---------: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
|    new | +48 B | 0.0% → 100.0% | 0 B → 48 B |   0 → 1 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `getAndPut(String, MemoizeCache$ValueProvider)` (`org.codehaus.groovy.vmplugin.v8.CacheableCallSite`)

|  Change | Delta |      % |        Size | Objects | Caller                                                                          | Location                                        |
| ------: | ----: | -----: | ----------: | ------: | ------------------------------------------------------------------------------- | ----------------------------------------------- |
| +100.0% | +40 B | 100.0% | 40 B → 80 B |   1 → 2 | `lambda$fromCache$2(IndyInterface$FallbackSupplier, CacheableCallSite, Object)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `enhancedStatementExpression()` (`org.apache.groovy.parser.antlr4.GroovyParser`)

| Change | Delta |             % |       Size | Objects | Caller                  | Location                                       |
| -----: | ----: | ------------: | ---------: | ------: | ----------------------- | ---------------------------------------------- |
|    new | +40 B | 0.0% → 100.0% | 0 B → 40 B |   0 → 1 | `variableInitializer()` | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `<clinit>()` (`com.sun.org.apache.xerces.internal.util.XMLChar`)

|  Change |       Delta |             % |         Size | Objects | Caller                     | Location                                                         |
| ------: | ----------: | ------------: | -----------: | ------: | -------------------------- | ---------------------------------------------------------------- |
| removed | -64.015 KiB | 100.0% → 0.0% | 64 KiB → 0 B |   1 → 0 | `normalize(Object, short)` | `com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

| Change |      Delta |      % |             Size | Objects | Caller                                | Location           |
| -----: | ---------: | -----: | ---------------: | ------: | ------------------------------------- | ------------------ |
| -91.8% | -3.148 KiB | 100.0% | 3.43 KiB → 288 B |       1 | `<init>(AbstractStringBuilder, Void)` | `java.lang.String` |

##### `resize()` (`java.util.HashMap`)

|  Change |  Delta |             % |        Size | Objects | Caller                                          | Location            |
| ------: | -----: | ------------: | ----------: | ------: | ----------------------------------------------- | ------------------- |
| removed | -608 B | 100.0% → 0.0% | 608 B → 0 B |   2 → 0 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `resize(int)` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

| Change |  Delta |      % |                Size | Objects | Caller                                            | Location                                                |
| -----: | -----: | -----: | ------------------: | ------: | ------------------------------------------------- | ------------------------------------------------------- |
| -19.8% | -512 B | 100.0% | 2.53 KiB → 2.03 KiB |       2 | `getOrPutMethods(String, MetaMethodIndex$Header)` | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |

##### `getOrPutMethods(String, MetaMethodIndex$Header)` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

| Change |  Delta |             % |          Size | Objects | Caller                                                                 | Location                                                |
| -----: | -----: | ------------: | ------------: | ------: | ---------------------------------------------------------------------- | ------------------------------------------------------- |
| -75.0% | -336 B | 53.3% → 28.6% | 448 B → 112 B |   8 → 2 | `copyNonPrivateMethods(MetaMethodIndex$Entry, MetaMethodIndex$Header)` | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |
| -28.6% | -112 B | 46.7% → 71.4% | 392 B → 280 B |   7 → 5 | `addMetaMethodToIndex(MetaMethod, MetaMethodIndex$Header)`             | `groovy.lang.MetaClassImpl`                             |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|  Change |  Delta |             % |        Size | Objects | Caller                         | Location           |
| ------: | -----: | ------------: | ----------: | ------: | ------------------------------ | ------------------ |
| removed | -416 B | 100.0% → 0.0% | 416 B → 0 B |   1 → 0 | `copyOf(Object[], int, Class)` | `java.util.Arrays` |

##### `copy()` (`java.lang.reflect.Method`)

|  Change |  Delta |             % |        Size | Objects | Caller               | Location                          |
| ------: | -----: | ------------: | ----------: | ------: | -------------------- | --------------------------------- |
| removed | -352 B | 100.0% → 0.0% | 352 B → 0 B |   4 → 0 | `copyMethod(Method)` | `java.lang.reflect.ReflectAccess` |

##### `getDeclaredMethods0(boolean)` (`java.lang.Class`)

| Change |  Delta |      % |          Size | Objects | Caller                               | Location          |
| -----: | -----: | -----: | ------------: | ------: | ------------------------------------ | ----------------- |
| -56.1% | -296 B | 100.0% | 528 B → 232 B |   6 → 3 | `privateGetDeclaredMethods(boolean)` | `java.lang.Class` |

##### `<init>(MethodType)` (`java.lang.invoke.Invokers`)

|  Change |  Delta |             % |        Size | Objects | Caller       | Location                      |
| ------: | -----: | ------------: | ----------: | ------: | ------------ | ----------------------------- |
| removed | -280 B | 100.0% → 0.0% | 280 B → 0 B |   1 → 0 | `invokers()` | `java.lang.invoke.MethodType` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |  Delta |      % |          Size | Objects | Caller   | Location              |
| -----: | -----: | -----: | ------------: | ------: | -------- | --------------------- |
| -55.6% | -280 B | 100.0% | 504 B → 224 B |   9 → 4 | `grow()` | `java.util.ArrayList` |

##### `getTargetMethodInfo()` (`java.beans.Introspector`)

|  Change |  Delta |             % |        Size | Objects | Caller          | Location                  |
| ------: | -----: | ------------: | ----------: | ------: | --------------- | ------------------------- |
| removed | -256 B | 100.0% → 0.0% | 256 B → 0 B |   1 → 0 | `getBeanInfo()` | `java.beans.Introspector` |

##### `initClassName()` (`java.lang.Class`)

|  Change |  Delta |             % |        Size | Objects | Caller      | Location          |
| ------: | -----: | ------------: | ----------: | ------: | ----------- | ----------------- |
| removed | -200 B | 100.0% → 0.0% | 200 B → 0 B |   2 → 0 | `getName()` | `java.lang.Class` |

##### `copy()` (`java.lang.reflect.Field`)

| Change |  Delta |      % |         Size | Objects | Caller             | Location                          |
| -----: | -----: | -----: | -----------: | ------: | ------------------ | --------------------------------- |
| -66.7% | -144 B | 100.0% | 216 B → 72 B |   3 → 1 | `copyField(Field)` | `java.lang.reflect.ReflectAccess` |

##### `visitIdentifierPrmrAlt(GroovyParser$IdentifierPrmrAltContext)` (`org.apache.groovy.parser.antlr4.AstBuilder`)

|  Change |  Delta |             % |        Size | Objects | Caller                                                          | Location                                     |
| ------: | -----: | ------------: | ----------: | ------: | --------------------------------------------------------------- | -------------------------------------------- |
| removed | -144 B | 100.0% → 0.0% | 144 B → 0 B |   2 → 0 | `visitIdentifierPrmrAlt(GroovyParser$IdentifierPrmrAltContext)` | `org.apache.groovy.parser.antlr4.AstBuilder` |

##### `unreflect(Method)` (`java.lang.invoke.MethodHandles$Lookup`)

|  Change | Delta |             % |       Size | Objects | Caller                                             | Location                                                  |
| ------: | ----: | ------------: | ---------: | ------: | -------------------------------------------------- | --------------------------------------------------------- |
| removed | -96 B | 100.0% → 0.0% | 96 B → 0 B |   2 → 0 | `correctClassForNameAndUnReflectOtherwise(Method)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` (`java.lang.ClassLoader`)

| Change | Delta |      % |         Size | Objects | Caller                                                                                    | Location             |
| -----: | ----: | -----: | -----------: | ------: | ----------------------------------------------------------------------------------------- | -------------------- |
| -73.3% | -88 B | 100.0% | 120 B → 32 B |       1 | `defineClass(ClassLoader, Class, String, byte[], ProtectionDomain, boolean, int, Object)` | `java.lang.System$2` |

##### `decompress(ByteBuffer, int)` (`jdk.internal.jimage.ImageLocation`)

|  Change | Delta |             % |       Size | Objects | Caller               | Location                               |
| ------: | ----: | ------------: | ---------: | ------: | -------------------- | -------------------------------------- |
| removed | -80 B | 100.0% → 0.0% | 80 B → 0 B |   1 → 0 | `getAttributes(int)` | `jdk.internal.jimage.BasicImageReader` |

##### `make(MethodType, LambdaForm, Object, Object, Object, Object, int, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LLLLILLLLLL`)

|  Change | Delta |             % |       Size | Objects | Caller                                                                                                                      | Location                                             |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -80 B | 100.0% → 0.0% | 80 B → 0 B |   1 → 0 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object, int, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b801105000` |

##### `identifier()` (`org.apache.groovy.parser.antlr4.GroovyParser`)

|  Change | Delta |            % |       Size | Objects | Caller       | Location                                       |
| ------: | ----: | -----------: | ---------: | ------: | ------------ | ---------------------------------------------- |
| removed | -40 B | 50.0% → 0.0% | 40 B → 0 B |   1 → 0 | `namePart()` | `org.apache.groovy.parser.antlr4.GroovyParser` |
| removed | -40 B | 50.0% → 0.0% | 40 B → 0 B |   1 → 0 | `primary()`  | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `createMethodCallExpression(PropertyExpression, Expression)` (`org.apache.groovy.parser.antlr4.AstBuilder`)

|  Change | Delta |             % |       Size | Objects | Caller                                              | Location                                     |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------------------------------- | -------------------------------------------- |
| removed | -72 B | 100.0% → 0.0% | 72 B → 0 B |   1 → 0 | `visitPathElement(GroovyParser$PathElementContext)` | `org.apache.groovy.parser.antlr4.AstBuilder` |

### Total size

#### Regressions

Functions with the largest increase in bytes retained within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

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

Functions with the largest decrease in bytes retained within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

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

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `invoke(Object, Object[])` (`org.codehaus.groovy.reflection.CachedMethod`)

|  Change |       Delta |      % |                Size | Objects | Callee                     | Location                   |
| ------: | ----------: | -----: | ------------------: | ------: | -------------------------- | -------------------------- |
| +509.3% | +16.671 KiB | 100.0% | 3.27 KiB → 19.9 KiB | 50 → 40 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|  Change |       Delta |             % |                Size | Objects | Callee                           | Location                                            |
| ------: | ----------: | ------------: | ------------------: | ------: | -------------------------------- | --------------------------------------------------- |
| +781.3% | +16.601 KiB | 63.6% → 93.8% | 2.13 KiB → 18.7 KiB | 27 → 18 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b801005400` |
|  -88.1% |      -472 B |  15.7% → 0.3% |        536 B → 64 B |  10 → 1 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b80138c000` |
|  +62.1% |      +328 B |  15.4% → 4.2% |       528 B → 856 B |  1 → 14 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b8013d2400` |
|  -55.1% |      -304 B |  16.1% → 1.2% |       552 B → 248 B |  10 → 6 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b80122c000` |
| removed |      -120 B |   3.5% → 0.0% |         120 B → 0 B |   1 → 0 | `checkCustomized(MethodHandle)`  | `java.lang.invoke.Invokers`                         |

##### `doMethodInvoke(Object, Object[])` (`groovy.lang.MetaMethod`)

|  Change |       Delta |      % |                Size | Objects | Callee                     | Location                                      |
| ------: | ----------: | -----: | ------------------: | ------: | -------------------------- | --------------------------------------------- |
| +507.6% | +16.617 KiB | 100.0% | 3.27 KiB → 19.9 KiB | 50 → 39 | `invoke(Object, Object[])` | `org.codehaus.groovy.reflection.CachedMethod` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|  Change |       Delta |      % |                Size | Objects | Callee                     | Location                                          |
| ------: | ----------: | -----: | ------------------: | ------: | -------------------------- | ------------------------------------------------- |
| +493.7% | +16.585 KiB | 100.0% | 3.36 KiB → 19.9 KiB | 51 → 40 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|  Change |       Delta |      % |              Size | Objects | Callee                         | Location                                          |
| ------: | ----------: | -----: | ----------------: | ------: | ------------------------------ | ------------------------------------------------- |
| +477.9% | +16.539 KiB | 100.0% | 3.46 KiB → 20 KiB | 52 → 42 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|  Change |       Delta |             % |              Size | Objects | Callee                                                           | Location                                            |
| ------: | ----------: | ------------: | ----------------: | ------: | ---------------------------------------------------------------- | --------------------------------------------------- |
| +497.2% | +16.625 KiB | 87.9% → 99.5% | 3.34 KiB → 20 KiB | 51 → 42 | `invokeExact_MT(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                  |
| +480.0% |      +960 B |   5.1% → 5.6% |  200 B → 1.13 KiB |       4 | `invokeExact_MT(Object, Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000b80116d000` |
| +208.3% |      +800 B |   9.9% → 5.8% |  384 B → 1.16 KiB |       3 | `invokeExact_MT(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b801004000` |
| removed |      -152 B |   3.9% → 0.0% |       152 B → 0 B |   3 → 0 | `invokeExact_MT(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                  |

##### `setupCurrentEntity(boolean, String, XMLInputSource, boolean, boolean)` (`com.sun.org.apache.xerces.internal.impl.XMLEntityManager`)

| Change |       Delta |             % |         Size | Objects | Callee                                                                                                   | Location                                           |
| -----: | ----------: | ------------: | -----------: | ------: | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
|    new | +16.015 KiB | 0.0% → 100.0% | 0 B → 16 KiB |   0 → 1 | `<init>(boolean, String, XMLResourceIdentifier, InputStream, Reader, String, boolean, boolean, boolean)` | `com.sun.xml.internal.stream.Entity$ScannedEntity` |

##### `determineDocVersion(XMLInputSource)` (`com.sun.org.apache.xerces.internal.impl.XMLVersionDetector`)

| Change |       Delta |             % |         Size | Objects | Callee                                                                  | Location                                                   |
| -----: | ----------: | ------------: | -----------: | ------: | ----------------------------------------------------------------------- | ---------------------------------------------------------- |
|    new | +16.015 KiB | 0.0% → 100.0% | 0 B → 16 KiB |   0 → 1 | `setupCurrentEntity(boolean, String, XMLInputSource, boolean, boolean)` | `com.sun.org.apache.xerces.internal.impl.XMLEntityManager` |

##### `parse(boolean)` (`com.sun.org.apache.xerces.internal.impl.xs.opti.SchemaParsingConfig`)

| Change |       Delta |             % |         Size | Objects | Callee                                | Location                                                     |
| -----: | ----------: | ------------: | -----------: | ------: | ------------------------------------- | ------------------------------------------------------------ |
|    new | +16.015 KiB | 0.0% → 100.0% | 0 B → 16 KiB |   0 → 1 | `determineDocVersion(XMLInputSource)` | `com.sun.org.apache.xerces.internal.impl.XMLVersionDetector` |

##### `parse(XMLInputSource)` (`com.sun.org.apache.xerces.internal.impl.xs.opti.SchemaParsingConfig`)

| Change |       Delta |             % |         Size | Objects | Callee           | Location                                                              |
| -----: | ----------: | ------------: | -----------: | ------: | ---------------- | --------------------------------------------------------------------- |
|    new | +16.015 KiB | 0.0% → 100.0% | 0 B → 16 KiB |   0 → 1 | `parse(boolean)` | `com.sun.org.apache.xerces.internal.impl.xs.opti.SchemaParsingConfig` |

##### `parse(XMLInputSource)` (`com.sun.org.apache.xerces.internal.impl.xs.opti.SchemaDOMParser`)

| Change |       Delta |             % |         Size | Objects | Callee                  | Location                                                              |
| -----: | ----------: | ------------: | -----------: | ------: | ----------------------- | --------------------------------------------------------------------- |
|    new | +16.015 KiB | 0.0% → 100.0% | 0 B → 16 KiB |   0 → 1 | `parse(XMLInputSource)` | `com.sun.org.apache.xerces.internal.impl.xs.opti.SchemaParsingConfig` |

##### `getSchemaDocument(String, XMLInputSource, boolean, short, Element)` (`com.sun.org.apache.xerces.internal.impl.xs.traversers.XSDHandler`)

| Change |       Delta |             % |         Size | Objects | Callee                  | Location                                                          |
| -----: | ----------: | ------------: | -----------: | ------: | ----------------------- | ----------------------------------------------------------------- |
|    new | +16.015 KiB | 0.0% → 100.0% | 0 B → 16 KiB |   0 → 1 | `parse(XMLInputSource)` | `com.sun.org.apache.xerces.internal.impl.xs.opti.SchemaDOMParser` |

##### `parseSchema(XMLInputSource, XSDDescription, Map)` (`com.sun.org.apache.xerces.internal.impl.xs.traversers.XSDHandler`)

| Change |       Delta |             % |         Size | Objects | Callee                                                               | Location                                                           |
| -----: | ----------: | ------------: | -----------: | ------: | -------------------------------------------------------------------- | ------------------------------------------------------------------ |
|    new | +16.015 KiB | 0.0% → 100.0% | 0 B → 16 KiB |   0 → 1 | `getSchemaDocument(String, XMLInputSource, boolean, short, Element)` | `com.sun.org.apache.xerces.internal.impl.xs.traversers.XSDHandler` |

##### `loadSchema(XSDDescription, XMLInputSource, Map)` (`com.sun.org.apache.xerces.internal.impl.xs.XMLSchemaLoader`)

| Change |       Delta |             % |         Size | Objects | Callee                                             | Location                                                           |
| -----: | ----------: | ------------: | -----------: | ------: | -------------------------------------------------- | ------------------------------------------------------------------ |
|    new | +16.015 KiB | 0.0% → 100.0% | 0 B → 16 KiB |   0 → 1 | `parseSchema(XMLInputSource, XSDDescription, Map)` | `com.sun.org.apache.xerces.internal.impl.xs.traversers.XSDHandler` |

##### `doCall(Object)` (`org.codenarc.ruleset.XmlFileRuleSet$_closure1`)

|    Change |      Delta |      % |          Size | Objects | Callee                                   | Location                           |
| --------: | ---------: | -----: | ------------: | ------: | ---------------------------------------- | ---------------------------------- |
| +29185.7% | +15.96 KiB | 100.0% | 56 B → 16 KiB |       1 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeSpecial(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|    Change |      Delta |            % |             Size | Objects | Callee           | Location                                                                              |
| --------: | ---------: | -----------: | ---------------: | ------: | ---------------- | ------------------------------------------------------------------------------------- |
| +29185.7% | +15.96 KiB | 1.0% → 80.4% |    56 B → 16 KiB |       1 | `doCall(Object)` | `org.codenarc.ruleset.XmlFileRuleSet$_closure1`                                       |
|    -67.3% | -2.054 KiB | 58.3% → 5.0% | 3.05 KiB → 1 KiB | 19 → 18 | `doCall(Object)` | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`            |
|       new | +1.015 KiB |  0.0% → 5.1% |   0 B → 1.02 KiB |   0 → 1 | `doCall(Object)` | `org.gmetrics.metric.AbstractMethodMetric$_addMethodsToMetricResults_closure4`        |
|   removed |     -528 B |  9.8% → 0.0% |      528 B → 0 B |   1 → 0 | `doCall(Object)` | `org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1$_closure3` |
|   removed |     -528 B |  9.8% → 0.0% |      528 B → 0 B |   1 → 0 | `doCall(List)`   | `org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1`           |

##### `forName0(String, boolean, ClassLoader, Class)` (`java.lang.Class`)

|    Change |      Delta |      % |            Size | Objects | Callee              | Location                |
| --------: | ---------: | -----: | --------------: | ------: | ------------------- | ----------------------- |
| +13000.0% | +4.062 KiB | 100.0% | 32 B → 4.09 KiB |   1 → 3 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `forName(String, boolean, ClassLoader, Class)` (`java.lang.Class`)

|    Change |      Delta |      % |            Size | Objects | Callee                                          | Location          |
| --------: | ---------: | -----: | --------------: | ------: | ----------------------------------------------- | ----------------- |
| +13000.0% | +4.062 KiB | 100.0% | 32 B → 4.09 KiB |   1 → 3 | `forName0(String, boolean, ClassLoader, Class)` | `java.lang.Class` |

##### `forName(String, boolean, ClassLoader)` (`java.lang.Class`)

|    Change |      Delta |      % |            Size | Objects | Callee                                         | Location          |
| --------: | ---------: | -----: | --------------: | ------: | ---------------------------------------------- | ----------------- |
| +13000.0% | +4.062 KiB | 100.0% | 32 B → 4.09 KiB |   1 → 3 | `forName(String, boolean, ClassLoader, Class)` | `java.lang.Class` |

##### `newInstanceWithCaller(Object[], boolean, Class)` (`java.lang.reflect.Constructor`)

|  Change |      Delta |            % |            Size | Objects | Callee                         | Location                                               |
| ------: | ---------: | -----------: | --------------: | ------: | ------------------------------ | ------------------------------------------------------ |
| -100.0% | -64.57 KiB | 99.2% → 5.5% | 64.6 KiB → 24 B |   3 → 1 | `acquireConstructorAccessor()` | `java.lang.reflect.Constructor`                        |
|  -24.6% |     -136 B | 0.8% → 94.5% |   552 B → 416 B |       9 | `newInstance(Object[])`        | `jdk.internal.reflect.DirectConstructorHandleAccessor` |

##### `newInstance(Object[])` (`java.lang.reflect.Constructor`)

| Change |       Delta |      % |            Size | Objects | Callee                                            | Location                        |
| -----: | ----------: | -----: | --------------: | ------: | ------------------------------------------------- | ------------------------------- |
| -99.9% | -64.632 KiB | 100.0% | 64.7 KiB → 48 B |   4 → 2 | `newInstanceWithCaller(Object[], boolean, Class)` | `java.lang.reflect.Constructor` |

##### `ensureClassInitialized0(Class)` (`jdk.internal.misc.Unsafe`)

|  Change |       Delta |             % |         Size | Objects | Callee       | Location                                                            |
| ------: | ----------: | ------------: | -----------: | ------: | ------------ | ------------------------------------------------------------------- |
| removed | -64.015 KiB |  99.1% → 0.0% | 64 KiB → 0 B |   1 → 0 | `<clinit>()` | `com.sun.org.apache.xerces.internal.impl.dv.xs.SchemaDVFactoryImpl` |
|  -95.9% |      -568 B | 0.9% → 100.0% | 592 B → 24 B |   2 → 1 | `<clinit>()` | `org.codehaus.groovy.vmplugin.v9.Java9`                             |

##### `ensureClassInitialized(Class)` (`jdk.internal.misc.Unsafe`)

|  Change |      Delta |      % |            Size | Objects | Callee                           | Location                   |
| ------: | ---------: | -----: | --------------: | ------: | -------------------------------- | -------------------------- |
| -100.0% | -64.57 KiB | 100.0% | 64.6 KiB → 24 B |   3 → 1 | `ensureClassInitialized0(Class)` | `jdk.internal.misc.Unsafe` |

##### `ensureClassInitialized(Class)` (`jdk.internal.reflect.MethodHandleAccessorFactory`)

|  Change |      Delta |      % |            Size | Objects | Callee                          | Location                   |
| ------: | ---------: | -----: | --------------: | ------: | ------------------------------- | -------------------------- |
| -100.0% | -64.57 KiB | 100.0% | 64.6 KiB → 24 B |   3 → 1 | `ensureClassInitialized(Class)` | `jdk.internal.misc.Unsafe` |

##### `newConstructorAccessor(Constructor)` (`jdk.internal.reflect.MethodHandleAccessorFactory`)

|  Change |      Delta |      % |            Size | Objects | Callee                          | Location                                           |
| ------: | ---------: | -----: | --------------: | ------: | ------------------------------- | -------------------------------------------------- |
| -100.0% | -64.57 KiB | 100.0% | 64.6 KiB → 24 B |   3 → 1 | `ensureClassInitialized(Class)` | `jdk.internal.reflect.MethodHandleAccessorFactory` |

##### `newConstructorAccessor(Constructor)` (`jdk.internal.reflect.ReflectionFactory`)

|  Change |      Delta |      % |            Size | Objects | Callee                                | Location                                           |
| ------: | ---------: | -----: | --------------: | ------: | ------------------------------------- | -------------------------------------------------- |
| -100.0% | -64.57 KiB | 100.0% | 64.6 KiB → 24 B |   3 → 1 | `newConstructorAccessor(Constructor)` | `jdk.internal.reflect.MethodHandleAccessorFactory` |

##### `acquireConstructorAccessor()` (`java.lang.reflect.Constructor`)

|  Change |      Delta |      % |            Size | Objects | Callee                                | Location                                 |
| ------: | ---------: | -----: | --------------: | ------: | ------------------------------------- | ---------------------------------------- |
| -100.0% | -64.57 KiB | 100.0% | 64.6 KiB → 24 B |   3 → 1 | `newConstructorAccessor(Constructor)` | `jdk.internal.reflect.ReflectionFactory` |

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

##### `getInstance(String)` (`com.sun.org.apache.xerces.internal.impl.dv.SchemaDVFactory`)

|  Change |       Delta |             % |         Size | Objects | Callee                         | Location                                                 |
| ------: | ----------: | ------------: | -----------: | ------: | ------------------------------ | -------------------------------------------------------- |
| removed | -64.015 KiB | 100.0% → 0.0% | 64 KiB → 0 B |   1 → 0 | `newInstance(String, boolean)` | `com.sun.org.apache.xerces.internal.utils.ObjectFactory` |

##### `getInstance()` (`com.sun.org.apache.xerces.internal.impl.dv.SchemaDVFactory`)

|  Change |       Delta |             % |         Size | Objects | Callee                | Location                                                     |
| ------: | ----------: | ------------: | -----------: | ------: | --------------------- | ------------------------------------------------------------ |
| removed | -64.015 KiB | 100.0% → 0.0% | 64 KiB → 0 B |   1 → 0 | `getInstance(String)` | `com.sun.org.apache.xerces.internal.impl.dv.SchemaDVFactory` |
