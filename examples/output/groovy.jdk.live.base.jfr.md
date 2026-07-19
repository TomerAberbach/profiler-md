# Sampling profile

Collected 309 samples.

| Category |     % | Samples |
| -------- | ----: | ------: |
| stdlib   | 98.7% |     305 |
| ours     |  1.3% |       4 |

Hidden functions account for 97.4% of samples taken, so the hottest are also shown.

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                                                                                      | Location                                                   |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 11.0% |      34 | `newArray(Class, int)`                                                                                        | `java.lang.reflect.Array`                                  |
|  4.2% |      13 | `newInstance(Class, int)`                                                                                     | `java.lang.reflect.Array`                                  |
|  3.9% |      12 | `getNode(Object)`                                                                                             | `java.util.HashMap`                                        |
|  2.6% |       8 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`     |
|  2.6% |       8 | `matches(Method, String, Class[])`                                                                            | `java.lang.PublicMethods$Key`                              |
|  2.3% |       7 | `putVal(int, Object, Object, boolean, boolean)`                                                               | `java.util.HashMap`                                        |
|  1.9% |       6 | `prepare()`                                                                                                   | `java.lang.invoke.LambdaForm`                              |
|  1.6% |       5 | `dropArgumentsTrusted(MethodHandle, int, Class[])`                                                            | `java.lang.invoke.MethodHandles`                           |
|  1.6% |       5 | `getReturnState(int)`                                                                                         | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext` |
|  1.6% |       5 | `<init>(Method, boolean)`                                                                                     | `java.lang.invoke.MemberName`                              |
|  1.3% |       4 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`       |
|  1.3% |       4 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`              | `org.codehaus.groovy.vmplugin.v8.IndyInterface`            |
|  1.3% |       4 | `add(ATNConfig, PredictionContextCache)`                                                                      | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`           |
|  1.3% |       4 | `getEpsilonTarget(ATNConfig, Transition, boolean, boolean, PredictionContextCache, boolean)`                  | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`     |
|  1.3% |       4 | `reflectionData()`                                                                                            | `java.lang.Class`                                          |
|  1.0% |       3 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                                                 | `java.util.zip.Inflater`                                   |
|  1.0% |       3 | `invokeVirtual(Object, Object, Object)`                                                                       | `java.lang.invoke.DirectMethodHandle$Holder`               |
|  1.0% |       3 | `get(Object)`                                                                                                 | `java.util.concurrent.ConcurrentHashMap`                   |
|  1.0% |       3 | `execute(Lexer, CharStream, int)`                                                                             | `groovyjarjarantlr4.v4.runtime.atn.LexerActionExecutor`    |
|  1.0% |       3 | `lock()`                                                                                                      | `org.codehaus.groovy.reflection.ClassInfo`                 |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|      % | Samples | Location                     |
| -----: | ------: | ---------------------------- |
| 100.0% |      13 | `java.lang.reflect.Array:78` |

##### `getNode(Object)` (`java.util.HashMap`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 58.3% |       7 | `java.util.HashMap:582` |
| 25.0% |       3 | `java.util.HashMap:587` |
| 16.7% |       2 | `java.util.HashMap:585` |

##### `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|     % | Samples | Location                                                    |
| ----: | ------: | ----------------------------------------------------------- |
| 50.0% |       4 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1809` |
| 25.0% |       2 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1759` |
| 12.5% |       1 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1754` |
| 12.5% |       1 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1847` |

##### `matches(Method, String, Class[])` (`java.lang.PublicMethods$Key`)

|      % | Samples | Location                          |
| -----: | ------: | --------------------------------- |
| 100.0% |       8 | `java.lang.PublicMethods$Key:108` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 42.9% |       3 | `java.util.HashMap:641` |
| 28.6% |       2 | `java.util.HashMap:644` |
| 28.6% |       2 | `java.util.HashMap:635` |

##### `prepare()` (`java.lang.invoke.LambdaForm`)

|      % | Samples | Location                          |
| -----: | ------: | --------------------------------- |
| 100.0% |       6 | `java.lang.invoke.LambdaForm:807` |

##### `dropArgumentsTrusted(MethodHandle, int, Class[])` (`java.lang.invoke.MethodHandles`)

|      % | Samples | Location                              |
| -----: | ------: | ------------------------------------- |
| 100.0% |       5 | `java.lang.invoke.MethodHandles:5375` |

##### `getReturnState(int)` (`groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |       5 | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext:50` |

##### `<init>(Method, boolean)` (`java.lang.invoke.MemberName`)

|      % | Samples | Location                          |
| -----: | ------: | --------------------------------- |
| 100.0% |       5 | `java.lang.invoke.MemberName:535` |

##### `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|     % | Samples | Location                                            |
| ----: | ------: | --------------------------------------------------- |
| 50.0% |       2 | `org.codehaus.groovy.vmplugin.v8.IndyInterface:334` |
| 50.0% |       2 | `org.codehaus.groovy.vmplugin.v8.IndyInterface:351` |

##### `add(ATNConfig, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`)

|      % | Samples | Location                                             |
| -----: | ------: | ---------------------------------------------------- |
| 100.0% |       4 | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet:254` |

##### `getEpsilonTarget(ATNConfig, Transition, boolean, boolean, PredictionContextCache, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|     % | Samples | Location                                                    |
| ----: | ------: | ----------------------------------------------------------- |
| 75.0% |       3 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1860` |
| 25.0% |       1 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1862` |

##### `reflectionData()` (`java.lang.Class`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       4 | `java.lang.Class:3398` |

##### `get(Object)` (`java.util.concurrent.ConcurrentHashMap`)

|     % | Samples | Location                                     |
| ----: | ------: | -------------------------------------------- |
| 66.7% |       2 | `java.util.concurrent.ConcurrentHashMap:946` |
| 33.3% |       1 | `java.util.concurrent.ConcurrentHashMap:940` |

##### `execute(Lexer, CharStream, int)` (`groovyjarjarantlr4.v4.runtime.atn.LexerActionExecutor`)

|      % | Samples | Location                                                    |
| -----: | ------: | ----------------------------------------------------------- |
| 100.0% |       3 | `groovyjarjarantlr4.v4.runtime.atn.LexerActionExecutor:160` |

##### `lock()` (`org.codehaus.groovy.reflection.ClassInfo`)

|      % | Samples | Location                                       |
| -----: | ------: | ---------------------------------------------- |
| 100.0% |       3 | `org.codehaus.groovy.reflection.ClassInfo:392` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise. Where shown callers fell short of the coverage target, the hottest hidden callers are also shown.

##### `newArray(Class, int)` (`java.lang.reflect.Array`)

|      % | Samples | Caller                    | Location                  |
| -----: | ------: | ------------------------- | ------------------------- |
| 100.0% |      34 | `newInstance(Class, int)` | `java.lang.reflect.Array` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|      % | Samples | Caller                              | Location                                             |
| -----: | ------: | ----------------------------------- | ---------------------------------------------------- |
| 100.0% |      13 | `invokeStatic(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000080109a000` |

##### `getNode(Object)` (`java.util.HashMap`)

|     % | Samples | Caller        | Location                  |
| ----: | ------: | ------------- | ------------------------- |
| 50.0% |       6 | `get(Object)` | `java.util.LinkedHashMap` |

##### `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|     % | Samples | Caller                                                                                                        | Location                                               |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 87.5% |       7 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `matches(Method, String, Class[])` (`java.lang.PublicMethods$Key`)

|      % | Samples | Caller                                       | Location                             |
| -----: | ------: | -------------------------------------------- | ------------------------------------ |
| 100.0% |       8 | `filter(Method[], String, Class[], boolean)` | `java.lang.PublicMethods$MethodList` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|      % | Samples | Caller                | Location            |
| -----: | ------: | --------------------- | ------------------- |
| 100.0% |       7 | `put(Object, Object)` | `java.util.HashMap` |

##### `prepare()` (`java.lang.invoke.LambdaForm`)

|      % | Samples | Caller                           | Location                        |
| -----: | ------: | -------------------------------- | ------------------------------- |
| 100.0% |       6 | `<init>(MethodType, LambdaForm)` | `java.lang.invoke.MethodHandle` |

##### `dropArgumentsTrusted(MethodHandle, int, Class[])` (`java.lang.invoke.MethodHandles`)

|      % | Samples | Caller                                                           | Location                         |
| -----: | ------: | ---------------------------------------------------------------- | -------------------------------- |
| 100.0% |       5 | `dropArgumentsToMatch(MethodHandle, int, Class[], int, boolean)` | `java.lang.invoke.MethodHandles` |

##### `getReturnState(int)` (`groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext`)

|      % | Samples | Caller                                                               | Location                                              |
| -----: | ------: | -------------------------------------------------------------------- | ----------------------------------------------------- |
| 100.0% |       5 | `join(PredictionContext, PredictionContext, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |

##### `<init>(Method, boolean)` (`java.lang.invoke.MemberName`)

|      % | Samples | Caller           | Location                      |
| -----: | ------: | ---------------- | ----------------------------- |
| 100.0% |       5 | `<init>(Method)` | `java.lang.invoke.MemberName` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`)

|     % | Samples | Caller                   | Location                                            |
| ----: | ------: | ------------------------ | --------------------------------------------------- |
| 75.0% |       3 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010bc000` |

##### `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|      % | Samples | Caller                                                                                      | Location                                             |
| -----: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |       4 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000008010b2800` |

##### `add(ATNConfig, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`)

|      % | Samples | Caller                                                                                                        | Location                                               |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       4 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `getEpsilonTarget(ATNConfig, Transition, boolean, boolean, PredictionContextCache, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|      % | Samples | Caller                                                                                                        | Location                                               |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       4 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `reflectionData()` (`java.lang.Class`)

|      % | Samples | Caller                               | Location          |
| -----: | ------: | ------------------------------------ | ----------------- |
| 100.0% |       4 | `privateGetDeclaredMethods(boolean)` | `java.lang.Class` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Caller                      | Location                 |
| -----: | ------: | --------------------------- | ------------------------ |
| 100.0% |       3 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |

##### `invokeVirtual(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Caller                           | Location                                            |
| ----: | ------: | -------------------------------- | --------------------------------------------------- |
| 33.3% |       1 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008014cac00` |
| 33.3% |       1 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801613000` |

##### `get(Object)` (`java.util.concurrent.ConcurrentHashMap`)

|     % | Samples | Caller                                                                                  | Location                                              |
| ----: | ------: | --------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 66.7% |       2 | `getCachedContext(PredictionContext, ConcurrentMap, PredictionContext$IdentityHashMap)` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |

##### `execute(Lexer, CharStream, int)` (`groovyjarjarantlr4.v4.runtime.atn.LexerActionExecutor`)

|      % | Samples | Caller                                                        | Location                                              |
| -----: | ------: | ------------------------------------------------------------- | ----------------------------------------------------- |
| 100.0% |       3 | `accept(CharStream, LexerActionExecutor, int, int, int, int)` | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator` |

##### `lock()` (`org.codehaus.groovy.reflection.ClassInfo`)

|      % | Samples | Caller           | Location                                   |
| -----: | ------: | ---------------- | ------------------------------------------ |
| 100.0% |       3 | `getMetaClass()` | `org.codehaus.groovy.reflection.ClassInfo` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                                                         | Location                                                                   |
| ----: | ------: | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| 93.9% |     290 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`      | `java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`                       |
| 72.8% |     225 | `linkToCallSite(Object, Object, Object)`                                                         | `java.lang.invoke.Invokers$Holder`                                         |
| 46.9% |     145 | `linkToCallSite(Object, Object)`                                                                 | `java.lang.invoke.Invokers$Holder`                                         |
| 45.6% |     141 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                            |
| 29.1% |      90 | `doCall(Object)`                                                                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
| 25.9% |      80 | `linkToCallSite(Object, Object, Object, Object)`                                                 | `java.lang.invoke.Invokers$Holder`                                         |
| 24.9% |      77 | `init()`                                                                                         | `org.codenarc.source.AbstractSourceCode`                                   |
| 24.6% |      76 | `applyTo(SourceCode)`                                                                            | `org.codenarc.rule.AbstractRule`                                           |
| 23.0% |      71 | `measureRuleProcessingTime(Rule, Closure)`                                                       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| 22.7% |      70 | `applyTo(SourceCode, List)`                                                                      | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
| 19.1% |      59 | `visitClass(ClassNode)`                                                                          | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 18.4% |      57 | `collectViolations(SourceCode, RuleSet)`                                                         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| 17.5% |      54 | `processFile(String, DirectoryResults, RuleSet)`                                                 | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                           |
| 17.5% |      54 | `getAst()`                                                                                       | `org.codenarc.source.AbstractSourceCode`                                   |
| 16.8% |      52 | `init()`                                                                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
| 16.8% |      52 | `isRuleSuppressed(Rule)`                                                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
| 15.5% |      48 | `visitClass(ClassNode)`                                                                          | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 15.2% |      47 | `newInstance(Class, int)`                                                                        | `java.lang.reflect.Array`                                                  |
| 13.6% |      42 | `visitBlockStatement(BlockStatement)`                                                            | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 13.6% |      42 | `visitMethod(MethodNode)`                                                                        | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse. Where shown callees fell short of the coverage target, the hottest hidden callees are also shown.

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`)

|      % | Samples | Callee                                                                                           | Location                                        |
| -----: | ------: | ------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| 100.0% |     290 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|  46.9% |     136 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Callee                           | Location                                            |
| ----: | ------: | -------------------------------- | --------------------------------------------------- |
| 98.7% |     222 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801115400` |

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Callee                   | Location                                            |
| ----: | ------: | ------------------------ | --------------------------------------------------- |
| 49.7% |      72 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010bc000` |
| 36.6% |      53 | `guard(Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x0000000801104000` |

##### `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|     % | Samples | Callee                                   | Location                           |
| ----: | ------: | ---------------------------------------- | ---------------------------------- |
| 91.5% |     129 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|     % | Samples | Callee                                   | Location                                                                             |
| ----: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------------ |
| 75.6% |      68 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                                   |
| 23.3% |      21 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                                   |
|  1.1% |       1 | `<init>(Object, Object, Reference)`      | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3$_closure7` |

##### `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |      80 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801142000` |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|     % | Samples | Callee                                                           | Location                           |
| ----: | ------: | ---------------------------------------------------------------- | ---------------------------------- |
| 84.4% |      65 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
|  9.1% |       7 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  6.5% |       5 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|     % | Samples | Callee                      | Location                                                  |
| ----: | ------: | --------------------------- | --------------------------------------------------------- |
| 85.5% |      65 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`                |
|  3.9% |       3 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`          |
|  3.9% |       3 | `applyTo(SourceCode, List)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`  |
|  2.6% |       2 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.BlankLineBeforePackageRule` |
|  2.6% |       2 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.IndentationRule`            |

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                                                             |
| ----: | ------: | ------------------------------------------------ | -------------------------------------------------------------------- |
| 64.8% |      46 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                   |
| 14.1% |      10 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                   |
| 14.1% |      10 | `linkToCallSite(Object, Object, long, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000000801394000`                  |
|  5.6% |       4 | `linkToCallSite(Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x0000000801390400`                  |
|  1.4% |       1 | `longUnbox(Object)`                              | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % | Samples | Callee                  | Location                                                |
| ----: | ------: | ----------------------- | ------------------------------------------------------- |
| 80.0% |      56 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                  |
| 14.3% |      10 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`              |
|  4.3% |       3 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor`               |
|  1.4% |       1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Callee                          | Location                                                            |
| ----: | ------: | ------------------------------- | ------------------------------------------------------------------- |
| 79.7% |      47 | `visitClass(ClassNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
|  5.1% |       3 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
|  3.4% |       2 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`     |
|  3.4% |       2 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`             |
|  1.7% |       1 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.size.ClassSizeAstVisitor`                        |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Callee                                                               | Location                                                                   |
| ----: | ------: | -------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 68.4% |      39 | `linkToCallSite(Object, Object, Object, Object)`                     | `java.lang.invoke.Invokers$Holder`                                         |
| 24.6% |      14 | `linkToCallSite(Object, Object)`                                     | `java.lang.invoke.Invokers$Holder`                                         |
|  5.3% |       3 | `linkToCallSite(Object, Object, Object)`                             | `java.lang.invoke.Invokers$Holder`                                         |
|  1.8% |       1 | `<init>(Object, Object, Reference, Reference, Reference, Reference)` | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                           |
| ----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 98.1% |      53 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  1.9% |       1 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

|      % | Samples | Callee                           | Location                           |
| -----: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% |      54 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Callee     | Location                                 |
| -----: | ------: | ---------- | ---------------------------------------- |
| 100.0% |      52 | `getAst()` | `org.codenarc.source.AbstractSourceCode` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Callee   | Location                                    |
| -----: | ------: | -------- | ------------------------------------------- |
| 100.0% |      52 | `init()` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % | Samples | Callee                              | Location                                                              |
| ----: | ------: | ----------------------------------- | --------------------------------------------------------------------- |
| 97.9% |      47 | `visitContents(GroovyClassVisitor)` | `org.codehaus.groovy.ast.ClassNode`                                   |
|  2.1% |       1 | `visitAnnotations(AnnotatedNode)`   | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|     % | Samples | Callee                 | Location                  |
| ----: | ------: | ---------------------- | ------------------------- |
| 72.3% |      34 | `newArray(Class, int)` | `java.lang.reflect.Array` |

##### `visitBlockStatement(BlockStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % | Samples | Callee                                | Location                                                       |
| ----: | ------: | ------------------------------------- | -------------------------------------------------------------- |
| 95.2% |      40 | `visitBlockStatement(BlockStatement)` | `org.codehaus.groovy.ast.CodeVisitorSupport`                   |
|  4.8% |       2 | `visitStatement(Statement)`           | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor` |

##### `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % | Samples | Callee                                          | Location                                                     |
| ----: | ------: | ----------------------------------------------- | ------------------------------------------------------------ |
| 83.3% |      35 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`            |
|  9.5% |       4 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor` |
|  4.8% |       2 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.size.ParameterCountAstVisitor`            |
|  2.4% |       1 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`     |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.9% |       9 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.9% |       9 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 2.6% |       8 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                |
| 1.9% |       6 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.9% |       6 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)` ← `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.6% |       5 | `matches(Method, String, Class[])` (`java.lang.PublicMethods$Key`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.3% |       4 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                        |
| 1.3% |       4 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` ← `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801394000`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) |
| 1.3% |       4 | `<init>(Method, boolean)` (`java.lang.invoke.MemberName`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.3% |       4 | `linkToCallSite(Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801390400`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.0% |       3 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.0% |       3 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)` ← `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.0% |       3 | `getNode(Object)` (`java.util.HashMap`) ← `add(ATNConfig, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`) ← `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`) ← `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.0% |       3 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getText()` (`org.codenarc.source.SourceFile`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)` ← `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`                                                                                                                                                                                                                                                                                                                                                                |
| 1.0% |       3 | `newInstance()` (`java.lang.Class`) ← `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode, List)` ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`)                                                                                                                        |
| 0.6% |       2 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` ← `linkToCallSite(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801134800`) ← `assertClassImplementsRuleInterface(Class)` (`org.codenarc.ruleset.RuleSetUtil`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.6% |       2 | `execute(Lexer, CharStream, int)` (`groovyjarjarantlr4.v4.runtime.atn.LexerActionExecutor`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.6% |       2 | `getNode(Object)` (`java.util.HashMap`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.6% |       2 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `linkToCallSite(Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)` ← `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.6% |       2 | `dropArgumentsTrusted(MethodHandle, int, Class[])` (`java.lang.invoke.MethodHandles`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000008010b2800`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)                                                                                                                                                                                                                                                                                                                                                                                             |

# Allocated heap profile

Allocated 11.9 GiB over 6,276 samples (1.94 MiB per sample).

| Category |     % |     Size | Samples |
| -------- | ----: | -------: | ------: |
| stdlib   | 99.2% | 11.8 GiB |   6,172 |
| ours     |  0.8% | 99.7 MiB |      51 |
| native   | <0.1% | 40.1 KiB |      53 |

Hidden functions account for 98.3% of bytes allocated, so the hottest are also shown.

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|    % |     Size | Samples | Function                                                                                      | Location                                          |
| ---: | -------: | ------: | --------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| 6.8% |  821 MiB |     400 | `makeImpl(Class, Class[], boolean)`                                                           | `java.lang.invoke.MethodType`                     |
| 5.4% |  652 MiB |     331 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`   |
| 4.4% |  533 MiB |     276 | `fillInStackTrace(int)`                                                                       | `java.lang.Throwable`                             |
| 3.7% |  454 MiB |     229 | `makeBlockInliningWrapper(MethodHandle)`                                                      | `java.lang.invoke.MethodHandleImpl`               |
| 3.0% |  366 MiB |     190 | `newInstance(Class, int)`                                                                     | `java.lang.reflect.Array`                         |
| 2.8% |  346 MiB |     173 | `make(MethodType, LambdaForm, Object, Object)`                                                | `java.lang.invoke.BoundMethodHandle$Species_LL`   |
| 2.7% |  331 MiB |     164 | `newArray(Class, int)`                                                                        | `java.lang.reflect.Array`                         |
| 2.5% |  305 MiB |     150 | `divideAndRemainderKnuth(BigInteger)`                                                         | `java.math.BigInteger`                            |
| 2.3% |  278 MiB |     143 | `of(byte, int, int)`                                                                          | `java.lang.invoke.LambdaFormEditor$TransformKey`  |
| 2.3% |  274 MiB |     141 | `copyOfRange(Object[], int, int)`                                                             | `java.util.Arrays`                                |
| 2.2% |  268 MiB |     131 | `transform(ATNState, PredictionContext, SemanticContext, boolean, LexerActionExecutor)`       | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`     |
| 2.2% |  267 MiB |     137 | `stream(Spliterator, boolean)`                                                                | `java.util.stream.StreamSupport`                  |
| 2.0% |  249 MiB |     127 | `make(MethodType, LambdaForm, Object, Object, Object, Object)`                                | `java.lang.invoke.BoundMethodHandle$Species_LLLL` |
| 2.0% |  245 MiB |     121 | `insertParameterTypes(int, Class[])`                                                          | `java.lang.invoke.MethodType`                     |
| 1.9% |  229 MiB |     121 | `lambdaFormEditor(LambdaForm)`                                                                | `java.lang.invoke.LambdaFormEditor`               |
| 1.9% |  227 MiB |     114 | `make(MethodType, LambdaForm, Object)`                                                        | `java.lang.invoke.BoundMethodHandle$Species_L`    |
| 1.8% |  223 MiB |      63 | `getSelector(MutableCallSite, Class, String, int, boolean, boolean, boolean, Object[])`       | `org.codehaus.groovy.vmplugin.v8.Selector`        |
| 0.5% | 60.7 MiB |      28 | `compile(String)`                                                                             | `java.util.regex.Pattern`                         |
| 0.1% | 16.6 MiB |      12 | `toString()`                                                                                  | `java.lang.StringBuilder`                         |
| 0.1% |   12 MiB |       6 | `<init>()`                                                                                    | `java.util.HashSet`                               |

#### Lines

Lines ranked by contribution to each function's self size.

##### `makeImpl(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

|      % |    Size | Samples | Location                          |
| -----: | ------: | ------: | --------------------------------- |
| 100.0% | 821 MiB |     400 | `java.lang.invoke.MethodType:400` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|      % |    Size | Samples | Location                                            |
| -----: | ------: | ------: | --------------------------------------------------- |
| 100.0% | 652 MiB |     331 | `org.codehaus.groovy.vmplugin.v8.IndyInterface:293` |

##### `makeBlockInliningWrapper(MethodHandle)` (`java.lang.invoke.MethodHandleImpl`)

|      % |    Size | Samples | Location                                |
| -----: | ------: | ------: | --------------------------------------- |
| 100.0% | 454 MiB |     229 | `java.lang.invoke.MethodHandleImpl:667` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|      % |    Size | Samples | Location                     |
| -----: | ------: | ------: | ---------------------------- |
| 100.0% | 366 MiB |     190 | `java.lang.reflect.Array:78` |

##### `divideAndRemainderKnuth(BigInteger)` (`java.math.BigInteger`)

|     % |     Size | Samples | Location                    |
| ----: | -------: | ------: | --------------------------- |
| 28.5% | 86.8 MiB |      42 | `java.math.BigInteger:2474` |
| 27.7% | 84.4 MiB |      41 | `java.math.BigInteger:2475` |
| 25.5% | 77.8 MiB |      39 | `java.math.BigInteger:2473` |
| 18.4% |   56 MiB |      28 | `java.math.BigInteger:2476` |

##### `of(byte, int, int)` (`java.lang.invoke.LambdaFormEditor$TransformKey`)

|      % |    Size | Samples | Location                                             |
| -----: | ------: | ------: | ---------------------------------------------------- |
| 100.0% | 278 MiB |     143 | `java.lang.invoke.LambdaFormEditor$TransformKey:183` |

##### `copyOfRange(Object[], int, int)` (`java.util.Arrays`)

|      % |    Size | Samples | Location                |
| -----: | ------: | ------: | ----------------------- |
| 100.0% | 274 MiB |     141 | `java.util.Arrays:3768` |

##### `transform(ATNState, PredictionContext, SemanticContext, boolean, LexerActionExecutor)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfig`)

|     % |     Size | Samples | Location                                          |
| ----: | -------: | ------: | ------------------------------------------------- |
| 93.0% |  250 MiB |     121 | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig:232` |
|  7.0% | 18.9 MiB |      10 | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig:225` |

##### `stream(Spliterator, boolean)` (`java.util.stream.StreamSupport`)

|      % |    Size | Samples | Location                            |
| -----: | ------: | ------: | ----------------------------------- |
| 100.0% | 267 MiB |     137 | `java.util.stream.StreamSupport:69` |

##### `insertParameterTypes(int, Class[])` (`java.lang.invoke.MethodType`)

|      % |    Size | Samples | Location                          |
| -----: | ------: | ------: | --------------------------------- |
| 100.0% | 245 MiB |     121 | `java.lang.invoke.MethodType:500` |

##### `lambdaFormEditor(LambdaForm)` (`java.lang.invoke.LambdaFormEditor`)

|      % |    Size | Samples | Location                               |
| -----: | ------: | ------: | -------------------------------------- |
| 100.0% | 229 MiB |     121 | `java.lang.invoke.LambdaFormEditor:61` |

##### `make(MethodType, LambdaForm, Object)` (`java.lang.invoke.BoundMethodHandle$Species_L`)

|      % |    Size | Samples | Location                                           |
| -----: | ------: | ------: | -------------------------------------------------- |
| 100.0% | 227 MiB |     114 | `java.lang.invoke.BoundMethodHandle$Species_L:225` |

##### `getSelector(MutableCallSite, Class, String, int, boolean, boolean, boolean, Object[])` (`org.codehaus.groovy.vmplugin.v8.Selector`)

|     % |     Size | Samples | Location                                       |
| ----: | -------: | ------: | ---------------------------------------------- |
| 55.7% |  124 MiB |      13 | `org.codehaus.groovy.vmplugin.v8.Selector:137` |
| 25.7% | 57.2 MiB |      30 | `org.codehaus.groovy.vmplugin.v8.Selector:135` |
| 18.6% | 41.4 MiB |      20 | `org.codehaus.groovy.vmplugin.v8.Selector:141` |

##### `compile(String)` (`java.util.regex.Pattern`)

|      % |     Size | Samples | Location                       |
| -----: | -------: | ------: | ------------------------------ |
| 100.0% | 60.7 MiB |      28 | `java.util.regex.Pattern:1101` |

##### `toString()` (`java.lang.StringBuilder`)

|      % |     Size | Samples | Location                      |
| -----: | -------: | ------: | ----------------------------- |
| 100.0% | 16.6 MiB |      12 | `java.lang.StringBuilder:475` |

##### `<init>()` (`java.util.HashSet`)

|      % |   Size | Samples | Location                |
| -----: | -----: | ------: | ----------------------- |
| 100.0% | 12 MiB |       6 | `java.util.HashSet:107` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise. Where shown callers fell short of the coverage target, the hottest hidden callers are also shown.

##### `makeImpl(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

|     % |    Size | Samples | Caller                               | Location                      |
| ----: | ------: | ------: | ------------------------------------ | ----------------------------- |
| 53.1% | 436 MiB |     203 | `insertParameterTypes(int, Class[])` | `java.lang.invoke.MethodType` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|      % |    Size | Samples | Caller                                                                                      | Location                                             |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% | 652 MiB |     331 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000008010b2800` |

##### `fillInStackTrace(int)` (`java.lang.Throwable`)

|      % |    Size | Samples | Caller               | Location              |
| -----: | ------: | ------: | -------------------- | --------------------- |
| 100.0% | 533 MiB |     276 | `fillInStackTrace()` | `java.lang.Throwable` |

##### `makeBlockInliningWrapper(MethodHandle)` (`java.lang.invoke.MethodHandleImpl`)

|      % |    Size | Samples | Caller                  | Location                            |
| -----: | ------: | ------: | ----------------------- | ----------------------------------- |
| 100.0% | 454 MiB |     229 | `profile(MethodHandle)` | `java.lang.invoke.MethodHandleImpl` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|     % |    Size | Samples | Caller                              | Location                                             |
| ----: | ------: | ------: | ----------------------------------- | ---------------------------------------------------- |
| 99.7% | 365 MiB |     188 | `invokeStatic(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000080109a000` |

##### `make(MethodType, LambdaForm, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LL`)

|      % |    Size | Samples | Caller                                                 | Location                                     |
| -----: | ------: | ------: | ------------------------------------------------------ | -------------------------------------------- |
| 100.0% | 346 MiB |     173 | `invokeStatic(Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `newArray(Class, int)` (`java.lang.reflect.Array`)

|      % |    Size | Samples | Caller                    | Location                  |
| -----: | ------: | ------: | ------------------------- | ------------------------- |
| 100.0% | 331 MiB |     164 | `newInstance(Class, int)` | `java.lang.reflect.Array` |

##### `divideAndRemainderKnuth(BigInteger)` (`java.math.BigInteger`)

|      % |    Size | Samples | Caller                           | Location               |
| -----: | ------: | ------: | -------------------------------- | ---------------------- |
| 100.0% | 305 MiB |     150 | `divideAndRemainder(BigInteger)` | `java.math.BigInteger` |

##### `of(byte, int, int)` (`java.lang.invoke.LambdaFormEditor$TransformKey`)

|     % |    Size | Samples | Caller                                       | Location                            |
| ----: | ------: | ------: | -------------------------------------------- | ----------------------------------- |
| 62.4% | 174 MiB |      90 | `addArgumentForm(int, LambdaForm$BasicType)` | `java.lang.invoke.LambdaFormEditor` |

##### `copyOfRange(Object[], int, int)` (`java.util.Arrays`)

|     % |    Size | Samples | Caller                                                           | Location                         |
| ----: | ------: | ------: | ---------------------------------------------------------------- | -------------------------------- |
| 54.5% | 150 MiB |      77 | `dropArgumentsToMatch(MethodHandle, int, Class[], int, boolean)` | `java.lang.invoke.MethodHandles` |

##### `transform(ATNState, PredictionContext, SemanticContext, boolean, LexerActionExecutor)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfig`)

|     % |    Size | Samples | Caller                         | Location                                      |
| ----: | ------: | ------: | ------------------------------ | --------------------------------------------- |
| 79.9% | 215 MiB |     110 | `transform(ATNState, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig` |

##### `stream(Spliterator, boolean)` (`java.util.stream.StreamSupport`)

|     % |    Size | Samples | Caller                       | Location           |
| ----: | ------: | ------: | ---------------------------- | ------------------ |
| 96.9% | 258 MiB |     132 | `stream(Object[], int, int)` | `java.util.Arrays` |

##### `make(MethodType, LambdaForm, Object, Object, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LLLL`)

|      % |    Size | Samples | Caller                                                                 | Location                                     |
| -----: | ------: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% | 249 MiB |     127 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `insertParameterTypes(int, Class[])` (`java.lang.invoke.MethodType`)

|     % |    Size | Samples | Caller                                             | Location                         |
| ----: | ------: | ------: | -------------------------------------------------- | -------------------------------- |
| 48.2% | 118 MiB |      57 | `dropArgumentsTrusted(MethodHandle, int, Class[])` | `java.lang.invoke.MethodHandles` |
| 13.9% |  34 MiB |      17 | `replaceParameterTypes(int, int, Class[])`         | `java.lang.invoke.MethodType`    |

##### `lambdaFormEditor(LambdaForm)` (`java.lang.invoke.LambdaFormEditor`)

|      % |    Size | Samples | Caller     | Location                      |
| -----: | ------: | ------: | ---------- | ----------------------------- |
| 100.0% | 229 MiB |     121 | `editor()` | `java.lang.invoke.LambdaForm` |

##### `make(MethodType, LambdaForm, Object)` (`java.lang.invoke.BoundMethodHandle$Species_L`)

|      % |    Size | Samples | Caller                        | Location                             |
| -----: | ------: | ------: | ----------------------------- | ------------------------------------ |
| 100.0% | 227 MiB |     114 | `makeReinvoker(MethodHandle)` | `java.lang.invoke.BoundMethodHandle` |

##### `getSelector(MutableCallSite, Class, String, int, boolean, boolean, boolean, Object[])` (`org.codehaus.groovy.vmplugin.v8.Selector`)

|      % |    Size | Samples | Caller                                                                                       | Location                                        |
| -----: | ------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| 100.0% | 223 MiB |      63 | `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `compile(String)` (`java.util.regex.Pattern`)

|     % |   Size | Samples | Caller                          | Location                                    |
| ----: | -----: | ------: | ------------------------------- | ------------------------------------------- |
| 42.8% | 26 MiB |      13 | `matches(String, CharSequence)` | `java.util.regex.Pattern`                   |
| 36.2% | 22 MiB |       7 | `findRegex(Object, Object)`     | `org.codehaus.groovy.runtime.InvokerHelper` |

##### `toString()` (`java.lang.StringBuilder`)

|     % |  Size | Samples | Caller                       | Location                                          |
| ----: | ----: | ------: | ---------------------------- | ------------------------------------------------- |
| 24.1% | 4 MiB |       2 | `toString()`                 | `org.apache.groovy.io.StringBuilderWriter`        |
| 24.1% | 4 MiB |       2 | `plus(String, CharSequence)` | `org.codehaus.groovy.runtime.StringGroovyMethods` |
| 24.1% | 4 MiB |       2 | `getText()`                  | `groovyjarjarantlr4.v4.runtime.RuleContext`       |

##### `<init>()` (`java.util.HashSet`)

|     % |   Size | Samples | Caller     | Location                               |
| ----: | -----: | ------: | ---------- | -------------------------------------- |
| 83.3% | 10 MiB |       5 | `<init>()` | `org.codenarc.rule.AbstractAstVisitor` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function                                                                                      | Location                                                                   |
| ----: | -------: | ------: | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 94.2% | 11.2 GiB |   5,831 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                            |
| 64.6% | 7.67 GiB |   4,001 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                                         |
| 43.8% |  5.2 GiB |   2,690 | `linkToCallSite(Object, Object, Object, Object)`                                              | `java.lang.invoke.Invokers$Holder`                                         |
| 37.9% |  4.5 GiB |   2,311 | `measureRuleProcessingTime(Rule, Closure)`                                                    | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| 33.8% | 4.02 GiB |   2,075 | `collectViolations(SourceCode, RuleSet)`                                                      | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| 29.7% | 3.52 GiB |   1,835 | `doCall(Object)`                                                                              | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
| 28.5% | 3.38 GiB |   1,752 | `processFile(String, DirectoryResults, RuleSet)`                                              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                           |
| 26.4% | 3.14 GiB |   1,580 | `linkToCallSite(Object, Object)`                                                              | `java.lang.invoke.Invokers$Holder`                                         |
| 22.2% | 2.64 GiB |   1,385 | `applyTo(SourceCode)`                                                                         | `org.codenarc.rule.AbstractRule`                                           |
| 20.9% | 2.48 GiB |   1,303 | `applyTo(SourceCode, List)`                                                                   | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
| 18.3% | 2.18 GiB |   1,129 | `visitClass(ClassNode)`                                                                       | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 16.2% | 1.93 GiB |     999 | `visitClass(ClassNode)`                                                                       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 15.5% | 1.84 GiB |     949 | `visitMethod(MethodNode)`                                                                     | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 13.8% | 1.64 GiB |     842 | `visitBlockStatement(BlockStatement)`                                                         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 13.1% | 1.55 GiB |     802 | `visitMethod(MethodNode)`                                                                     | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 12.7% | 1.51 GiB |     776 | `visitConstructorOrMethod(MethodNode, boolean)`                                               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 12.1% | 1.44 GiB |     743 | `visitExpressionStatement(ExpressionStatement)`                                               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 11.3% | 1.34 GiB |     684 | `linkToCallSite(Object, Object, Object, Object, Object)`                                      | `java.lang.invoke.Invokers$Holder`                                         |
|  8.5% | 1.01 GiB |     514 | `linkToCallSite(Object, Object, long, Object)`                                                | `java.lang.invoke.LambdaForm$MH.0x0000000801394000`                        |
|  8.0% |  968 MiB |     494 | `init()`                                                                                      | `org.codenarc.source.AbstractSourceCode`                                   |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse. Where shown callees fell short of the coverage target, the hottest hidden callees are also shown.

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|     % |     Size | Samples | Callee                                   | Location                           |
| ----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 99.5% | 11.1 GiB |   5,788 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % |    Size | Samples | Callee                           | Location                                            |
| ----: | ------: | ------: | -------------------------------- | --------------------------------------------------- |
| 99.1% | 7.6 GiB |   3,966 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801115400` |

##### `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % |     Size | Samples | Callee                                   | Location                                            |
| ----: | -------: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 97.0% | 5.04 GiB |   2,609 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801142000` |

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % |     Size | Samples | Callee                                           | Location                                            |
| ----: | -------: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 51.8% | 2.33 GiB |   1,206 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| 22.4% | 1.01 GiB |     514 | `linkToCallSite(Object, Object, long, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000000801394000` |
| 15.2% |  700 MiB |     346 | `linkToCallSite(Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x0000000801390400` |
| 10.5% |  484 MiB |     243 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
| <0.1% |    2 MiB |       1 | `linkToCallSite(long, long, Object)`             | `java.lang.invoke.Invokers$Holder`                  |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % |     Size | Samples | Callee                                           | Location                           |
| ----: | -------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 83.2% | 3.34 GiB |   1,724 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 10.2% |  421 MiB |     215 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  6.5% |  266 MiB |     134 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|     % |     Size | Samples | Callee                                   | Location                           |
| ----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 72.1% | 2.54 GiB |   1,332 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 27.6% |  997 MiB |     499 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|     % |     Size | Samples | Callee                                           | Location                           |
| ----: | -------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 99.9% | 3.37 GiB |   1,749 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  0.1% | 4.73 MiB |       3 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % |     Size | Samples | Callee                   | Location                                            |
| ----: | -------: | ------: | ------------------------ | --------------------------------------------------- |
| 56.3% | 1.77 GiB |     871 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010bc000` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|     % |     Size | Samples | Callee                      | Location                                                  |
| ----: | -------: | ------: | --------------------------- | --------------------------------------------------------- |
| 82.9% | 2.19 GiB |   1,156 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`                |
|  4.9% |  131 MiB |      66 | `applyTo(SourceCode, List)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`  |
|  4.2% |  113 MiB |      59 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`          |
|  2.4% | 63.9 MiB |      29 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.IndentationRule`            |
|  1.4% | 36.9 MiB |      18 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.BlankLineBeforePackageRule` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % |     Size | Samples | Callee                  | Location                                                |
| ----: | -------: | ------: | ----------------------- | ------------------------------------------------------- |
| 81.9% | 2.03 GiB |   1,053 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                  |
| 11.1% |  281 MiB |     142 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |
|  3.2% | 82.3 MiB |      58 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`              |
|  2.3% | 57.2 MiB |      29 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor`               |
|  0.3% | 7.48 MiB |       4 | `getAstVisitor()`       | `org.codenarc.rule.convention.HashtableIsObsoleteRule`  |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |     Size | Samples | Callee                          | Location                                                            |
| ----: | -------: | ------: | ------------------------------- | ------------------------------------------------------------------- |
| 87.6% | 1.91 GiB |     987 | `visitClass(ClassNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
|  5.9% |  131 MiB |      60 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
|  1.3% | 28.7 MiB |      16 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`     |
|  0.6% |   14 MiB |       8 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.convention.CompileStaticlVisitor`                |
|  0.5% |   12 MiB |       6 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`    |

##### `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % |     Size | Samples | Callee                              | Location                                                              |
| ----: | -------: | ------: | ----------------------------------- | --------------------------------------------------------------------- |
| 97.5% | 1.88 GiB |     973 | `visitContents(GroovyClassVisitor)` | `org.codehaus.groovy.ast.ClassNode`                                   |
|  0.5% |   10 MiB |       6 | `visitImports(ModuleNode)`          | `org.codenarc.rule.ClassReferenceAstVisitor`                          |
|  0.3% |    6 MiB |       3 | `visitAnnotations(AnnotatedNode)`   | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |     Size | Samples | Callee                      | Location                                                            |
| ----: | -------: | ------: | --------------------------- | ------------------------------------------------------------------- |
| 83.7% | 1.54 GiB |     794 | `visitMethod(MethodNode)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
|  5.3% |  101 MiB |      49 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
|  2.1% |   40 MiB |      20 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                |
|  1.0% |   18 MiB |       9 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.SpaceBeforeOpeningBraceAstVisitor`    |
|  1.0% |   18 MiB |       9 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.SpaceAfterClosingBraceAstVisitor`     |

##### `visitBlockStatement(BlockStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % |     Size | Samples | Callee                                | Location                                                       |
| ----: | -------: | ------: | ------------------------------------- | -------------------------------------------------------------- |
| 96.6% | 1.59 GiB |     812 | `visitBlockStatement(BlockStatement)` | `org.codehaus.groovy.ast.CodeVisitorSupport`                   |
|  4.5% |   75 MiB |      39 | `visitStatement(Statement)`           | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor` |

##### `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % |     Size | Samples | Callee                                          | Location                                                                    |
| ----: | -------: | ------: | ----------------------------------------------- | --------------------------------------------------------------------------- |
| 87.8% | 1.36 GiB |     701 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
|  2.9% | 46.8 MiB |      22 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`                |
|  2.1% |   33 MiB |      17 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`                  |
|  1.6% |   26 MiB |      13 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.unnecessary.UnnecessaryDefInMethodDeclarationAstVisitor` |
|  1.4% | 21.9 MiB |      12 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.ClassReferenceAstVisitor`                                |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % |     Size | Samples | Callee                               | Location                                                              |
| ----: | -------: | ------: | ------------------------------------ | --------------------------------------------------------------------- |
| 98.6% | 1.49 GiB |     765 | `visitClassCodeContainer(Statement)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                     |
|  0.4% |    6 MiB |       3 | `visitAnnotations(AnnotatedNode)`    | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |

##### `visitExpressionStatement(ExpressionStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % |     Size | Samples | Callee                                          | Location                                                       |
| ----: | -------: | ------: | ----------------------------------------------- | -------------------------------------------------------------- |
| 94.4% | 1.36 GiB |     701 | `visitExpressionStatement(ExpressionStatement)` | `org.codehaus.groovy.ast.CodeVisitorSupport`                   |
|  7.1% |  105 MiB |      53 | `visitStatement(Statement)`                     | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor` |

##### `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % |     Size | Samples | Callee                                           | Location                                            |
| ----: | -------: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 97.8% | 1.31 GiB |     669 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008012b8400` |

##### `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801394000`)

|      % |     Size | Samples | Callee                                 | Location                                            |
| -----: | -------: | ------: | -------------------------------------- | --------------------------------------------------- |
| 100.0% | 1.01 GiB |     514 | `invoke(Object, Object, Object, long)` | `java.lang.invoke.LambdaForm$MH.0x0000000801393c00` |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|     % |     Size | Samples | Callee                                                           | Location                           |
| ----: | -------: | ------: | ---------------------------------------------------------------- | ---------------------------------- |
| 95.6% |  926 MiB |     472 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
|  2.6% | 25.3 MiB |      13 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder` |
|  1.8% |   17 MiB |       9 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|    % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---: | -------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.0% |  608 MiB |     295 | `divideAndRemainderKnuth(BigInteger)` (`java.math.BigInteger`) ← `linkToCallSite(Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801390400`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 4.2% |  508 MiB |     253 | `fillInStackTrace(int)` (`java.lang.Throwable`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801394000`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 3.4% |  411 MiB |     208 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.5% |  302 MiB |     147 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 2.3% |  277 MiB |     137 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801394000`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.8% |  220 MiB |     109 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.8% |  213 MiB |     106 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.7% |  203 MiB |     104 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.6% |  199 MiB |     104 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.2% |  146 MiB |      76 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.1% |  131 MiB |      69 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.0% |  116 MiB |      59 | `makeBlockInliningWrapper(MethodHandle)` (`java.lang.invoke.MethodHandleImpl`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.8% |  100 MiB |       1 | `getSelector(MutableCallSite, Class, String, int, boolean, boolean, boolean, Object[])` (`org.codehaus.groovy.vmplugin.v8.Selector`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.report.TextReportWriter$_writeFileViolations_closure5`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `writeFileViolations(Writer, FileResults)` (`org.codenarc.report.TextReportWriter`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.8% |   98 MiB |      49 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, int, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801449000`) ← `getNumberOfViolationsWithPriority(int, boolean)` (`org.codenarc.results.FileResults`) ← `getNumberOfViolationsWithPriority(int)` ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.results.DirectoryResults$_getNumberOfViolationsWithPriority_closure3`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.7% | 90.1 MiB |      44 | `makeImpl(Class, Class[], boolean)` (`java.lang.invoke.MethodType`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.7% | 81.8 MiB |      41 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.6% | 71.3 MiB |      34 | `compile(String)` (`java.util.regex.Pattern`) ← `findRegex(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`) ← `findLineWithDeclaration(ASTNode, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkDeclaration(ASTNode, String, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitMethodEx(MethodNode)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) |
| 0.6% |   68 MiB |      34 | `compile(String)` (`java.util.regex.Pattern`) ← `findRegex(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`) ← `findLineWithDeclaration(ASTNode, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkDeclaration(ASTNode, String, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitClassEx(ClassNode)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                      |
| 0.5% | 61.3 MiB |      31 | `stream(Spliterator, boolean)` (`java.util.stream.StreamSupport`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.5% | 55.3 MiB |      28 | `make(MethodType, LambdaForm, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LL`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

# Retained heap profile

Retained 325 KiB over 117 samples (2.78 KiB per sample).

| Category |      % |    Size | Samples |
| -------- | -----: | ------: | ------: |
| stdlib   | 100.0% | 325 KiB |     117 |

Hidden functions account for 100.0% of bytes retained, so the hottest are also shown.

## Hottest functions

### Self size

Functions ranked by bytes retained directly in the function body, excluding callees.

|     % |    Size | Samples | Function                                                       | Location                                 |
| ----: | ------: | ------: | -------------------------------------------------------------- | ---------------------------------------- |
| 88.5% | 288 KiB |       3 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` | `java.util.concurrent.ConcurrentHashMap` |

#### Lines

Lines ranked by contribution to each function's self size.

##### `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` (`java.util.concurrent.ConcurrentHashMap`)

|      % |    Size | Samples | Location                                      |
| -----: | ------: | ------: | --------------------------------------------- |
| 100.0% | 288 KiB |       2 | `java.util.concurrent.ConcurrentHashMap:2431` |
|  <0.1% |    32 B |       1 | `java.util.concurrent.ConcurrentHashMap:2509` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise. Where shown callers fell short of the coverage target, the hottest hidden callers are also shown.

##### `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` (`java.util.concurrent.ConcurrentHashMap`)

|      % |    Size | Samples | Caller                | Location                                 |
| -----: | ------: | ------: | --------------------- | ---------------------------------------- |
| 100.0% | 288 KiB |       3 | `addCount(long, int)` | `java.util.concurrent.ConcurrentHashMap` |

### Total size

Functions ranked by total bytes retained in the function and all its callees.

|     % |     Size | Samples | Function                                                       | Location                                                                   |
| ----: | -------: | ------: | -------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 99.4% |  324 KiB |      87 | `linkToCallSite(Object, Object, Object)`                       | `java.lang.invoke.Invokers$Holder`                                         |
| 88.5% |  288 KiB |       3 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` | `java.util.concurrent.ConcurrentHashMap`                                   |
| 87.1% |  283 KiB |      24 | `init()`                                                       | `org.codenarc.source.AbstractSourceCode`                                   |
| 12.1% | 39.2 KiB |      48 | `getMetaClass()`                                               | `org.codehaus.groovy.reflection.ClassInfo`                                 |
| 11.8% | 38.5 KiB |      33 | `applyTo(SourceCode)`                                          | `org.codenarc.rule.AbstractRule`                                           |
| 11.8% | 38.4 KiB |      31 | `applyTo(SourceCode, List)`                                    | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
| 11.7% | 38.1 KiB |      24 | `doCall(Object)`                                               | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
| 11.5% | 37.3 KiB |      13 | `newInstance()`                                                | `java.lang.Class`                                                          |
| 11.5% | 37.3 KiB |      13 | `getAstVisitor()`                                              | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
|  9.8% |   32 KiB |       2 | `$getStaticMetaClass()`                                        | `org.codenarc.rule.basic.ExplicitGarbageCollectionAstVisitor`              |
|  9.8% |   32 KiB |       2 | `<init>()`                                                     | `org.codenarc.rule.basic.ExplicitGarbageCollectionAstVisitor`              |
|  8.6% |   28 KiB |      35 | `linkToCallSite(Object, Object)`                               | `java.lang.invoke.Invokers$Holder`                                         |
|  8.3% | 27.1 KiB |      16 | `getAst()`                                                     | `org.codenarc.source.AbstractSourceCode`                                   |
|  1.4% | 4.56 KiB |      13 | `init()`                                                       | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
|  1.4% | 4.51 KiB |      12 | `isRuleSuppressed(Rule)`                                       | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
|  1.3% | 4.11 KiB |       4 | `doCall(Object)`                                               | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1` |
|  1.2% | 4.04 KiB |       2 | `$getStaticMetaClass()`                                        | `org.codenarc.rule.groovyism.ExplicitCallToLeftShiftMethodAstVisitor`      |
|  1.2% | 4.04 KiB |       2 | `<init>(String, int)`                                          | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`               |
|  1.2% | 4.04 KiB |       2 | `<init>(String)`                                               | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`               |
|  1.2% | 4.04 KiB |       2 | `<init>()`                                                     | `org.codenarc.rule.groovyism.ExplicitCallToLeftShiftMethodAstVisitor`      |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse. Where shown callees fell short of the coverage target, the hottest hidden callees are also shown.

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |    Size | Samples | Callee                           | Location                                            |
| -----: | ------: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 324 KiB |      87 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801115400` |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|      % |    Size | Samples | Callee                                   | Location                           |
| -----: | ------: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 283 KiB |      24 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`)

|      % |     Size | Samples | Callee                    | Location                                   |
| -----: | -------: | ------: | ------------------------- | ------------------------------------------ |
| 100.0% | 39.2 KiB |      48 | `getMetaClassUnderLock()` | `org.codehaus.groovy.reflection.ClassInfo` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|     % |     Size | Samples | Callee                      | Location                                                 |
| ----: | -------: | ------: | --------------------------- | -------------------------------------------------------- |
| 99.7% | 38.4 KiB |      31 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`               |
|  0.2% |     64 B |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`         |
|  0.1% |     48 B |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % |     Size | Samples | Callee                  | Location                                                               |
| ----: | -------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 97.1% | 37.3 KiB |      13 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`                             |
|  2.1% |    816 B |      15 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                                 |
|  0.5% |    192 B |       1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor`                              |
|  0.2% |     88 B |       1 | `getAstVisitor()`       | `org.codenarc.rule.exceptions.CatchArrayIndexOutOfBoundsExceptionRule` |
|  0.1% |     56 B |       1 | `getAstVisitor()`       | `org.codenarc.rule.groovyism.ExplicitLinkedHashMapInstantiationRule`   |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|      % |     Size | Samples | Callee                                   | Location                           |
| -----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 38.1 KiB |      24 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `newInstance()` (`java.lang.Class`)

|      % |     Size | Samples | Callee                                      | Location                                 |
| -----: | -------: | ------: | ------------------------------------------- | ---------------------------------------- |
| 100.0% | 37.3 KiB |      13 | `newInstance(Constructor, Object[], Class)` | `jdk.internal.reflect.ReflectionFactory` |

##### `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`)

|      % |     Size | Samples | Callee          | Location          |
| -----: | -------: | ------: | --------------- | ----------------- |
| 100.0% | 37.3 KiB |      13 | `newInstance()` | `java.lang.Class` |

##### `$getStaticMetaClass()` (`org.codenarc.rule.basic.ExplicitGarbageCollectionAstVisitor`)

|      % |   Size | Samples | Callee           | Location                                   |
| -----: | -----: | ------: | ---------------- | ------------------------------------------ |
| 100.0% | 32 KiB |       2 | `getMetaClass()` | `org.codehaus.groovy.reflection.ClassInfo` |

##### `<init>()` (`org.codenarc.rule.basic.ExplicitGarbageCollectionAstVisitor`)

|      % |   Size | Samples | Callee                  | Location                                                      |
| -----: | -----: | ------: | ----------------------- | ------------------------------------------------------------- |
| 100.0% | 32 KiB |       2 | `$getStaticMetaClass()` | `org.codenarc.rule.basic.ExplicitGarbageCollectionAstVisitor` |

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % |     Size | Samples | Callee                  | Location                                            |
| ----: | -------: | ------: | ----------------------- | --------------------------------------------------- |
| 97.3% | 27.2 KiB |      19 | `guard(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801104000` |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

|      % |     Size | Samples | Callee                           | Location                           |
| -----: | -------: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% | 27.1 KiB |      16 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % |     Size | Samples | Callee     | Location                                 |
| -----: | -------: | ------: | ---------- | ---------------------------------------- |
| 100.0% | 4.56 KiB |      13 | `getAst()` | `org.codenarc.source.AbstractSourceCode` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % |     Size | Samples | Callee   | Location                                    |
| -----: | -------: | ------: | -------- | ------------------------------------------- |
| 100.0% | 4.51 KiB |      12 | `init()` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)

|      % |     Size | Samples | Callee                                   | Location                           |
| -----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 4.11 KiB |       4 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `$getStaticMetaClass()` (`org.codenarc.rule.groovyism.ExplicitCallToLeftShiftMethodAstVisitor`)

|      % |     Size | Samples | Callee           | Location                                   |
| -----: | -------: | ------: | ---------------- | ------------------------------------------ |
| 100.0% | 4.04 KiB |       2 | `getMetaClass()` | `org.codehaus.groovy.reflection.ClassInfo` |

##### `<init>(String, int)` (`org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`)

|      % |     Size | Samples | Callee                  | Location                                                              |
| -----: | -------: | ------: | ----------------------- | --------------------------------------------------------------------- |
| 100.0% | 4.04 KiB |       2 | `$getStaticMetaClass()` | `org.codenarc.rule.groovyism.ExplicitCallToLeftShiftMethodAstVisitor` |

##### `<init>(String)` (`org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`)

|      % |     Size | Samples | Callee                | Location                                                     |
| -----: | -------: | ------: | --------------------- | ------------------------------------------------------------ |
| 100.0% | 4.04 KiB |       2 | `<init>(String, int)` | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor` |

##### `<init>()` (`org.codenarc.rule.groovyism.ExplicitCallToLeftShiftMethodAstVisitor`)

|      % |     Size | Samples | Callee           | Location                                                     |
| -----: | -------: | ------: | ---------------- | ------------------------------------------------------------ |
| 100.0% | 4.04 KiB |       2 | `<init>(String)` | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor` |

## Hottest call stacks

Call stacks ranked by bytes retained in their leaf frame.

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 78.7% |  256 KiB |       1 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` (`java.util.concurrent.ConcurrentHashMap`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  9.8% |   32 KiB |       1 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` (`java.util.concurrent.ConcurrentHashMap`) ← `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← `$getStaticMetaClass()` (`org.codenarc.rule.basic.ExplicitGarbageCollectionAstVisitor`) ← `<init>()` ← `newInstance()` (`java.lang.Class`) ← `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode, List)` ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                           |
|  6.9% | 22.5 KiB |       3 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.3% | 4.11 KiB |       4 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)` ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)                                                                                                                                                                                                                                                                                    |
|  1.2% | 4.04 KiB |       2 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← `$getStaticMetaClass()` (`org.codenarc.rule.groovyism.ExplicitCallToLeftShiftMethodAstVisitor`) ← `<init>(String, int)` (`org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`) ← `<init>(String)` ← `<init>()` (`org.codenarc.rule.groovyism.ExplicitCallToLeftShiftMethodAstVisitor`) ← `newInstance()` (`java.lang.Class`) ← `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode, List)` ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                             |
|  0.3% |  1.1 KiB |      19 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801134800`) ← `assertClassImplementsRuleInterface(Class)` (`org.codenarc.ruleset.RuleSetUtil`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`)                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.2% |    528 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← `$getStaticMetaClass()` (`org.codenarc.rule.naming.PackageNameAstVisitor`) ← `<init>()` ← `newInstance()` (`java.lang.Class`) ← `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode, List)` ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                                                                                    |
|  0.1% |    376 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← `$getStaticMetaClass()` (`org.codenarc.rule.basic.AssertWithinFinallyBlockAstVisitor`) ← `<init>()` (`org.codenarc.rule.basic.AbstractFinallyAstVisitor`) ← `<init>()` (`org.codenarc.rule.basic.AssertWithinFinallyBlockAstVisitor`) ← `newInstance()` (`java.lang.Class`) ← `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode, List)` ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                      |
|  0.1% |    352 B |       7 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.1% |    336 B |       2 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkForCorrectColumn(ASTNode, String, int)` (`org.codenarc.rule.formatting.IndentationAstVisitor`) ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkForCorrectColumn(ASTNode, String)` (`org.codenarc.rule.formatting.IndentationAstVisitor`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkStatementIndent(Statement, BlockStatement)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)                                                                                                                                                                                                                          |
|  0.1% |    320 B |       7 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.1% |    192 B |       1 | `format(String, Object[])` (`java.lang.String`) ← `addViolation(MethodNode, String)` (`org.codenarc.rule.AbstractMethodVisitor`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitMethod(MethodNode)` (`org.codenarc.rule.naming.MethodNameAstVisitor`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractMethodVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                         |
|  0.1% |    168 B |       1 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitAssertStatement(AssertStatement)` (`org.codenarc.rule.basic.ConstantAssertExpressionAstVisitor`) ← `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) |
| <0.1% |    160 B |       1 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkForCorrectColumn(ASTNode, String, int)` (`org.codenarc.rule.formatting.IndentationAstVisitor`) ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkForCorrectColumn(ASTNode, String)` (`org.codenarc.rule.formatting.IndentationAstVisitor`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                                                                                                                                                                                                                     |
| <0.1% |    144 B |       2 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getLines()` (`org.codenarc.source.AbstractSourceCode`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `line(int)` (`org.codenarc.source.AbstractSourceCode`) ← `sourceLineTrimmed(ASTNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `addViolation(ASTNode, String)` ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitClassEx(ClassNode)` (`org.codenarc.rule.convention.CompileStaticlVisitor`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)                                                             |
| <0.1% |    128 B |       2 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| <0.1% |    112 B |       2 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← `$getStaticMetaClass()` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← `<init>()` ← `newInstance()` (`java.lang.Class`) ← `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode, List)` ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                                                                 |
| <0.1% |    104 B |       3 | `<clinit>()` (`groovy.lang.Closure`) ← `<clinit>()` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| <0.1% |    104 B |       1 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `addViolationIfDoubleQuoted(ConstantExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor$_visitConstantExpression_closure1`) ← `doCall()`                                                                                                                                                                                                                                                                                                                                                                                                   |
| <0.1% |     88 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
